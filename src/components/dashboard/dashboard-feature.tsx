/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "62w9bfYSyT2RQ9nCmiYkeBQFDzA8LqTpNY6VY98Ly2GoBkiz97PbSR9QNwXkB7Cuqe2qMfbjeFjb8NTmjJ8mYTgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7a29Js2EjJ1eVZ4W9PoJTkuKnXjJMh2BRQkxtNnJtBhDE1TiC1AQyv9h1P4N1xgicnVuNLCGLGtXCGpzGkmPZb",
  "key1": "5gjzmVFwBpQYmbRbRs9wrrspUKqeGaDuUWmXWhXDTQ4CL4XC49p8A2N9bQu5gkfqZwD2Mnx79G6nhhciza8wNqYS",
  "key2": "4Hxw32xZNpeVSxUeVMN3m8V14VyGJvA2JGU9M7vJSMmUEhe4F9TnsM68LGZmcMCjScXWRbcmAg5r621BJqC2WD9v",
  "key3": "gGwmR4BjXQidyXARHRDikAfUxEBEavi352z82G88zeka7dKiDVFmYDbgmHVe1W7XZ5A89ME9kbbNxzyg5zFP9Pp",
  "key4": "2mzdGCGVN4QJm777ZJeqLFmtRMDn4xcMpvyMfsuNeiLhcSxbgs2LiAsZQcMVSYtAy9MFFj38ieDJ1ab5iBRyDDHS",
  "key5": "2teYUD3y3dRFjwwoR9R8woJyEDthhfjpQcu9HFz7CsSsvZire6XoPsBhmfMgUpq9Nw3CPFL9fSoqn433XPTnvVHz",
  "key6": "3NDfdFTVNyYN8LqDGjw1v3KJcY4zAMszkF6Fj2YGnnSLdpdhdjsxcyuMn9CgdDFjtGyNgcvD9mNat1VdN2fobPyt",
  "key7": "217AQiCLgjxRbwJUZzNipRUQ3z7jn7v7y1MAuZtTXKmnZuiBb2aZnu71ocKynzXmXbCYPMUwXoKufndm9mDNya9j",
  "key8": "eJ59EkCk3QWUfydkgfKMeJ7yTtLTiTJGaLqAWCqrpmmF29sRia4uqNxY3NUQRE5TLm5dwe6zMzdqXYoLB1cqiYA",
  "key9": "4vUPhTAvKhQkN9dTYzmydAY6Hz1xQhBzXhtygJNS7jYtXhognyY1wPpxFHKCyEoN4Msb3hJWQqrBiY5fsoqH53oG",
  "key10": "2mGyLeczbYLQ1P9fNT6aqjKNcXmqowc2pYaVag97vo6gL4T8BaHVmDfjjqti2JM6xYtphhurDBdXN5wKSE7iHqPy",
  "key11": "4nHL2UZw4Mm7Gw8asHMY9KuYnEy8ZfTMvjU5Xx8wxPjeVo9SiZ2rc77TcQPkinMWnLwhQQQ29gMLsv1dau7qQNgL",
  "key12": "61uS7BpMuRQpfUsasdDwxvQ97yRi1wHgrvkMrJBMsDamZLnyB3CreKtRT8wD3SeEBhWVRbpW9JmqDa4KsagjP1tN",
  "key13": "3VajJqhLsuNabTARrSPPP8FoVN2JfBoZnokkmbaSJfaydgxqVH89QPCXiyb7dZWaHp1srj5Q1bhkmqWf6eEp2bEj",
  "key14": "3YbWXSqTZgzGo7XtK9WvRspGwcCnqF9K5HRz2j3vK5dA2x4p467sXrSr1iNDLHB7LN21arSK2aZ1hQSu92mTYdz",
  "key15": "5C6AzvzETJntAovzzazBTa19Hv1EsFLADqdEHJxtXBDKY3RQqLa97qvw8X8ddkxLNMYe7zQosaU9hbtijfPNhfEs",
  "key16": "22NDD2Nufr5GbV6adKi8SMPB3yKLPQye1eokEiSKQRx6FBRvcy92ZqEidkRvzZitRPFB53C3riw6KysgDn14uP1v",
  "key17": "2cP3Ejk5Gabv4geZcGgehQuvyDQWNa3v2cdFK73CSjrHD2Efe6k96otGgsnrwNbtY1EHTpK5gMBZsD31HKLBZVSd",
  "key18": "dVkvDXcNM3hwGXqumXpAL4kaJMHuPuXv6UeYZnokrvQPkQ6XDM4mfVSu5oA3pkgmshv1PXt4ZUJtuDTv4NwWmuN",
  "key19": "57yRAEnLzHahYRg85ZrEaypRdH2AnfxGGcu2ZyFkoD86t3n1cVdMK41DkXbRy78RQro2m83V4ZHnqXMHaPZdm1wi",
  "key20": "5fTD8SGedgdV7kEwjY2wDWP4NbpPkwwSsKNQs7G2yYGP21CKrsezvRhh793P6j7qoNfhvA8q9DdohzQWmBUp4no5",
  "key21": "5dCXezmi2TYXei3XaL1ic6srBW4K4qttNuTrnemyvRZ6c82ZEoBa6HhoyzCyppTyFdcC6Wy2fK1pmnDs3kQwPFAc",
  "key22": "24U1MA7uYmyQ85LLyLndKxvxVqamc6kJAJvumjBJkfuwd7rFZ8NithD6YD2KhaVNA6cSocxAL5b7vpHuUSsLtykw",
  "key23": "Uwd1ZFEj87eKAB6xbcfhUuQkz828oXBfZiRPA9Bo6UbroU2E65kGhXkawoXFt95Y84yNMuAVMRnTBgHJFBAfyNj",
  "key24": "54AzpfYVK1yVkV9LXL8Y23k8UKqtm6UknhA2JemssgGio67yyrXurVBvb9YowN3m7dWpNXWUHDHgSQuUsYrL5rbk",
  "key25": "2Y9cWZ7pUVRwjazncMJUfZ4eRVtZyr1GsAzfQ7e3b4PPmTFHzu4V1wUq1wLLzq7ZwNkTVVsM1gc12ewPEWT8SZPe",
  "key26": "2Z8d83tA25ZbPQHMQjm63FsegXLGK5KptDHJ2wWeJT2Wm4W4PzcQS7dbigRtgER7Z1pqMNGLkvkbSGPUMZHW3gr1",
  "key27": "2oozDcuVruh2JHS8Bm4duQLBXwjWBNGtMTdXVwNwgn9wwBGwo58nnc1tz9MowX54qBtxXiT87tJSmQWRTh1J9S2E",
  "key28": "126tLF1x1M21zEXxsR9n1UNNWL2i1LkVxeZtE3ComMTWQK9rLP6ETR7uts38fmj64mXuYEhH9Tc1XMQDq3ckxnrA",
  "key29": "43kG9KzpvCNu8AW9DEy3vgtAeg2wiaBvGJC7Xrd2GvsgVFRFQabUWjKQfqkWtv4yYJyXtj7CNQy1fHDb4fheaHQD",
  "key30": "5B8NvDAgpx1dEjDUXJwZ98QAZKKWnNfnG6mvotUfm56nvwFV3mre79vCBUu6gAYF4734Q1aWx3coKce34fFe6eXB",
  "key31": "594iTRoJtoKYFJ2NN6mWzymSGQJoW6HtCszgS9PeqndPA1NWg8j3WmrJSHkHkUXvSBPNC5UjopyLfdfhehPW5pQk",
  "key32": "5tBmMdQZr3ccTjiTha1EzrxdoA29aWYNgztruGSwvwsp8T7FfD3v96hZRZ5EXXWsRW2JyyLqfRdMMpwNUn2HgCG5",
  "key33": "EQ6pSFaaRt1qUCE3JRWLno3BGH2MhqC57iU3okVKBTyxECtPkQB8pyjFEvtSEQXbXL1rZDHK9V8UTFq54gdbSFa",
  "key34": "3xyM43DMWt9VVbHLihFqHqcjU738Keb6ZwkBU3aeg1AVz1ukmuZuYE7Tgq6hkH9TngYvUMzVpK4Z3Hpc3YZJLcxw",
  "key35": "2m3u5xsa336x8g9CaAWApkpEkMFVnVN43fRmV9QrfXwNf7ZBqQqpPsxk22A1TifkpL5E4o5oDzNDAyy5XroRXPjD",
  "key36": "2Mn7uCj9gxFuvucyYn2WWAdwyhm21h7J4DZtqcy1LrwrSK6CjXa19T4Y4ceTdAkFiDCr9nJavi3LEPHU7qXZECtR",
  "key37": "3xNRKMgn1Vtzs3n84MJrVFdHkJ2ryqDPbuswJr9ssSYhT4tQWCs3KiatKs9WVoAD3Z8MiRHRQvMBxvLR9FezbWVt",
  "key38": "WfUV4pGX6ASQP813r3GawG7cemPBaRy4HKz7mPfCz5CQcRuo2ZxBHJPeBALUsk4fo8RYEhNiJWAs3QGm9NFchwL",
  "key39": "3GsCt29XNbWE8rE4g1ygud7gg1uhzFrSsqxDiLv4TGEmMKmCoVRNWBGJp6CxJt75VnrBw7WV3Vn3q4cmoQF81KHJ",
  "key40": "2gwuC2Qr7wYuBpagHBH7GTuPyAEFDQMQRDwUzYhEz6A1ex4rHapzhALAdUKV6ZKjNRN7eGRwwHAhXX1g9Bodsbn4",
  "key41": "5twTzg7EhwZPwbkSRUmmDM7iDwn3NjbcgaS3zZSHexLLVgiuGafap34oBcGZYjJAioqC5hFfoXQapVgnCWw6oUs7",
  "key42": "5U8FGg2CNSejaT2ZQ2RWy3Rix7o52G3jQynQx4WYTTAast9Xxe3C7eNsEW4niRzA7eaXkhXvwATwVp4HWK89zrxd",
  "key43": "4xSfBgkkrpHebxgnZGstU3ssHF8uHqKD5uowJ14EdD8HfWUciyA8kKbesNujVqWQijWq6qYJR9PD2UZxBjDkdq8M",
  "key44": "9XjpSBMRqK3Fdg77CHPMZ2YwDkFpQZna96cuXFYgqCF4K5ks4Punxs8JE59HBUfGtxM3or7uiiBZoohtZR81a8g",
  "key45": "4gc14iEviMHRdGrfLZ9Wmgu3DNvz1SFjbp2JjXWv3ptNrXGL21UAuprbTGKNcfAk7tHxnZAqPFCqQtJZxG7Ck34z",
  "key46": "65x8x7BWM89nxcsAYBq3A1q15aZd6WXZmKCqgkngqVUAhAjWXPMsbTPPFKtoMqz9VL1Z2ZYiD3xEkyt3HYGA888B"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
