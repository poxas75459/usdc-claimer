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
    "2BP2nmdJ9tfQH1b8oDiaxP1EzYXFDGWBz3wWU44Y3tyEKvq5Dv3rZoJKXLLTD37SAZFD8uE1tXuKfisfyb1HgM4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yApaWyxFArfUa8ZBXPTeQ76ts34iU7WTFGtpJWnT5sEvhw9evhctFr73bwz9eKgVj2ETiJp3k5ou4LeMDhnVxNP",
  "key1": "YwRYDQdKu2AuQgAQuMwByikntWTuigXsBcjXZyhQU8w9Kj4r2UV19vvadv5WC7qwKtfDL54Rqq4LFfw4s1aYcYb",
  "key2": "2EyXi57DUjYfvK3CcaL5gvwoYbK7AeR9fCkuBb4dj7gsToXjRDeKBsLvgJvVFSmGzNugHMtBiyUVbEhfJbBQVHjh",
  "key3": "5gBAgAnxhxdCQHHHFTfHndBjVJT9s2BuCMJUgTFTCK58TupLfQEhZTLDyyHAGZ2sKq3TvYnyns44hRhoUB5dDV4z",
  "key4": "4kr4u92eVVwZrgXBrpm3CRwQkCvL3bEMoacnMorr38r5Szvny9Reg8gTPNN9jpk7QKjQAVXzKUZQDdaY4wiXg5W5",
  "key5": "2V2p9FCNuP2QnFu51Wgi7vCZd9i69pHkHuFwGtBGRSbyec7DzsLaXdGBAAxzCaVoa7HTLk6uKuDqv9ZWXY3QkuYg",
  "key6": "LDGjsbqcu1LYZKDSczNzyEof8XiSXXuhTWrdszzajvc9wT5xg3f4RTbpZSXeVzrznsmFCKyaGvQFfKm6txc21pS",
  "key7": "kMkUgdXybLYJifokVjwABtsqdMrHis4mvAjKXRPw4TYZYo6cATFoYh3jHjtq9vdkBNmGcma8Ur7FB56jut6P2eM",
  "key8": "4inp3jepqVB2xguJnyerv4US52hsHSgKiUhyVRCGpMyasQBvZBgvSVy2euaXYK8h1BtAqksozDSurc1iBLge7aX5",
  "key9": "3gRJFx1fv12GZ1eWRphVoHVSowKtZCL7qJzBwknsjKYnd7NapEhQrbrWotaxZqnL8FQA5b1QJ3BBaaBuU1rUpoWG",
  "key10": "UgUnHoqM6WpZ2XdhMJd3UVo1ysAMTh5RpBnmHWfHpMFhxzNZmKZvYts19K7xvhr3VNGxzrHXymPsRX9TCn7m9gm",
  "key11": "663GKnLkcME5pQQvHRgU2bW9ZSS8wpnJ5FXn7YomBhSTUFQsQ7tJxqcUYYxPiAu2o2umsgxStLNz2UeMLvnnKiYv",
  "key12": "5UxuW562F5DBQc5Kfqrhis1CXiCGMN7oYSQG93bNFGAV8BTdxjR64LydzjdTL4qsbHeKChtDnNqrNqoRKBpTHX8X",
  "key13": "7mvyKfTqB3jc6QRstaZVLdmwBbE8Uk1399mSkuVN64Bg3FKnT968gv1GQeFk25SaDQwzdLsExm2M5RAsHViKh7s",
  "key14": "4659AqMvHr14mDKFdvp25uZTGs4Q9UuMHVgiz4rrPDeGg1jo6gu4zGNUm5Crk3nsKPDpLBp7E4p8W2gZ6amdnXc1",
  "key15": "54saZ4y2AsXrDjGqkBG5K2LBo1AWsJ8TuKK2FpaptMBtmu7D7JLeN3DnQT7owsdL4GWQDKEk5cQ7AXN61yVc7Nw5",
  "key16": "3TK7hsSojRpXvySqTqXV5gT9vzXS9WjkCmjt38zg7U9REFonQGNn1Sdr2sdjYw2BQVhGH135saM3p9BPPXzsC58V",
  "key17": "XAkzKS1MFjb7jnU8KwReuD3dmgTaEmhxEG2gxC66phyn7srCT7gN7ZUFHQrtsMDZhhseu3jF1yAuMaLN4vaxtbZ",
  "key18": "5pWn4nATBqkX9uG7K7XYKHc43n4ri33LZw27BpEhJpRHLQzS9rkNvraZm6DaW3rsLrTHFrhRjPafH9znGfk7oqXZ",
  "key19": "4bmTcMwWX7JZigkzBq9tyXmXe3xn75mSLeWWJLXWpZNdxJ8QxZwWccyW8jEbZ1zrznxcGVbBpELvRqCrFEtwXXR6",
  "key20": "2A7E2UFFXRZ5KHjzjVnin2tLf4Q91Es78KyyFU8aDnDtGq2daKvNQbjtp3qzqVoKLYNgrVL3ysWrKf3hHzQfwzwD",
  "key21": "47Jk4GrF8WBoEK78y9vdCtbMWxtegCDeT6zxgpvADz6YCh2ZXYUjFzLXtUYby4LZcYEPX3VrC2tC2mXwKMYMtiKw",
  "key22": "2wUKksw9iiUpWnfZKpkpkqqsJwBW71pCoCoWUjq1beS2pMKENvc51GaRzF6BMoXuCMuB78EJNDF2o7f6RxxHmZQm",
  "key23": "28g2vx6JVJ7fu58DDAq3oTvMhrgbkwdTQQ4LQniz7ieWUMGLk5RQ38L4b72uAzURXAZGnoMv8XXbfwUx7EdQ6w2U",
  "key24": "34j3x1u8B5rwfVUjQMvpMxXFRfUh2LxujWF1TV8o2iNhfuJmDDNWXjzJh2rawK62fPmTRVz3uAodCp6RWDFeJ4wV",
  "key25": "5fvbRnbA3bKPQHLvffe5JMmRk5BkZhT3i59CtEvNvryUEjTNfgRieGWyLzm3ceu1vR8jue8u46BaVqzHU4kEGoHU",
  "key26": "4kidq1trq777TyxGJdyJ5sn5AjrnagyRstWadQJE354kzjUMx7d9b7JHS65r8pLicmA7YWmQ61W8H1HXUhkT6q4h",
  "key27": "44WTEuGcxm4SHYCcDYBZwxmUErBw5WEKCARxf7ALN13wdHwemFRFSsfdfsDhCgzthTgBQjfmC5xApXAF5XyS62zT",
  "key28": "3dsKrW8cscHA4MmzfvvdCAQM3mdE3s8q68N4oVVFxoj3b51WUe34rqkqxM1HzkvuiUimMe2MZphmxRVpTt8btoqQ",
  "key29": "3q6KomcbpnWpCUtCzkp6HkqpcnBGH3K5ndGW3ypVrPX16W2Enq1D5UDQC4WK3PAnBSas46QgoaQ8LX4JnPqhDu8X",
  "key30": "2ekXtJrZyP9fwHc6Wn6deVbziJkiPzWipTJxpvDYPSc7yJakCx3N5eLamjT69XYsn8QJtdMym2jjHN5C8QeYUqAr",
  "key31": "5WUnr1g6CM7KjJHGqiTM8882PxRWnk26Z89RPRLMYabcJmEgedrDkKJAcQgGsjdkpsYoJe4KLJBeMD9CnkV4knuz",
  "key32": "21o4w28bsNzzfpLeTygSLSUmhu6iufsgsHXqc6az4SML2jwYuwo2HWATyeNnJC38u9M199Rha7pGchUrs1Jf4Ni6",
  "key33": "W9V9D3hYAARA1YRXd8DULaYNhCDHqs4A3TucZzMwFFwMmRvRfNsgKcWAoAotiVQChJJ5qd97viXWmidUfbXYaKN",
  "key34": "2pxV2YmLxMuPJ4QQA6kLRJynsMZjNsGPVq9jXEqax8Pn2VH5mAToZCoPvT4qtfmdbxZTyGDd9mZ7MTRYqBb4szJC",
  "key35": "3r4Pv91BEhjjUN1mtTP9cZZVeVWQQsGT9Yo2Auy5HVtBfuk1iY5vCk7fhLeY1mg6ssKFoWgJ8SbQQycGVxCjRSTU",
  "key36": "2wPXgsibzCJucBwFkgv7mvK1D4AuCBtD4Z1Dbo5Z9jSiH6hQAzU5xyuUGp2u9qmPHg3XsabP5bWS7da151S8s1EC",
  "key37": "dAAdtp1LNLwfNmnwCCCdL9zqiv6xQiY6nZoskqoeBB3VL3hxg9Pzjr3xYUo6JWTrXKBDYFyCtqsfcjP9jqQ7gNt",
  "key38": "nYrbDqgpcqZVURaUSZbFbujobk2nrC9erBNXRED4dBQvZtsvE7h2RCbSHDjAMfsv4zARhLs4johqWBt7tZhA2eT",
  "key39": "5iGqQ1RjLtrTupgFR8PBnwMD1D53QZpTGwxv9oH2ThT8a4dnnBSbriMCxDzGPUteSpei9xMMzveEdJRqZkq9Wnb9",
  "key40": "2tBtVPxUtY2uTgvWuQSJjRwbMSL9veihK21Ftx3oMAbsjTWCnEwZZ23Lq8XKFG35wiU9vxtjmZ6ZC3mRgpqZ8JFo",
  "key41": "5PZ1T2oxWbrYsjWKaAW1eU3zFBp1QgFpnL9nWdyfjQmUpR7x5SSkAb8QmUbp9mwDxAshjsvxkT77zz358tFAxZin",
  "key42": "3bsD27NALUGwTQFTd2QyGkMyeGT2yxePeuawLxiNDvMRy3YMz4hCe2v52KHJnWqWMGHhw3W2eANnNAbxnt6Wsq8h",
  "key43": "v73cEF2xArMm1wSqhY1isyphDAjTZG2JZSYCwmpi6UbXSHxwkwBKYML8PdUshVRwMrtyTXdUAArJhBNhq33wDBy",
  "key44": "2FrapG4zQhuRDEuWXFnxz9tLZ5nKo7NQEjaGRbKXXdzNCNqNbPHpv9ANze9Th6XzKbkHmLiHDbU477GQu2GveTH3",
  "key45": "4Ve8xpYE4pQAhwbQwLVJwKB6z16aGzruhhVJnCEqEnm96gi3TBJXwMeRPZNBB42fSZH5JDPwdzUwxBTkz9pfxeHr",
  "key46": "5CpVdboPKHbxD5EMukRpK9T6m2MA9y4gTR2BXnNjnynCw5G6xbMHXKyev7ihchZXTmkp88ca1TtQmQaY6oSSwt2f",
  "key47": "52b4714qDkgFehNoQ6LCTTptsybDBFG6oC63Ft4StyfvDh6cxwQ2vLt3zv33sF9o8E3NqCkhL5ENhvDJr5dPqaLD"
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
