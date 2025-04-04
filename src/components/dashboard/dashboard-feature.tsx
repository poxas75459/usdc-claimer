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
    "4iGsTnshSTT7u7bM1jHsvm2HerQLnqwkA5RvkQNjdV6YbD1BjQA44gfdJvnsY4i4RcLaXxTQTaQqLVxe37ekb45A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JiuT7LDDJFqFParG2LorqjuRVXCxBYQSq3KgejmNttJWjauGZSDLzBaNU1AzAGBMK8LyuB9jMf3nWYkk1eyjjxs",
  "key1": "2cM4EtuF81CHBbfTfMdYULyWb36H4neEA2JXbE36PFkNXYrHqe2Fd82nm92tog2EefZJKstYFzuWcg4JPguqoVs9",
  "key2": "tkHgKYrJDgiiin2T2EtrXz1iitGLBUN1AkUMSJFn7fqUd8YP8rB4MLR5y9rMxk3iXe6rf8QKYoYsvqGUpCGwMcf",
  "key3": "3qSxPoK528QtGibkUvkUrYi4fXS21AKcgGHqBXNrAzXLnuttWUJctuYGmaWKf2gESZ4eN7qDF33dYrD54ZFJzK2x",
  "key4": "5W664D7ymUy7GiHTRtKhwmmB7eGdSTq4PCpMsTqTFXEX7pYdHYJEJt7Jo2b9zRdqYKNg1de8MNirvNWNwQBgiNeU",
  "key5": "5p6Li6T2SUn3PMo77HtKsEmDKUNfdtoaMzCGhsAqYX71J2nRg3o7a2PFxaaJYktVQEZCTYz8H8zL1QDqfDMw5kWc",
  "key6": "34WDhkmKstBrpfE6AfmZL5MgLoYa4dxi1ejgycGihjPtQLj3HR5kVgDsH3HAqz9wFvGCDU2jMzs9BMzUav2r3cMp",
  "key7": "B7BDft3AhBBhb1bxqf8Rhq4NaHRr5fUTXC1bJcexiZnZjBvPCCkQcRs7Q2Eq6sWM63jLh2XMtqLdE5gJFg9TW66",
  "key8": "5TW1tMFuGWGM3iqV4odrK5pk9dZp3agcsaBG9Zr73Ftz6gYBM45VTHFwf1L3Z5ZVArdKZzddk1DsN3UceQ4QNZxR",
  "key9": "4VU4f2sHaaJ1ctz9Wh19Y9VWvr5d8x97gjaasJH4W71JNNKQ1ZzX4nPyhaRo5Z4TJTcvv8ijQDZVfVw7pzqZvGrJ",
  "key10": "2Ahf3Qd9XkQ5Cm7dZC7SBCdb52YhLDvV57tXNwqqseFtp7zYbU2m45fyy5dZ82i4EtdbFgLMA15LMQvFVrLNPW6J",
  "key11": "5JC5Zv4t4FSTLFvNUYHpmoAGG4VPDFqXTwEPJ4GDSCmiskrh3QMKJFtM23Ehay9EupG9diuriUnBN7r499B3RunM",
  "key12": "44kUDngVmTRNc8b7A7hLRCoTZTByRQM6E35zJRGZ1K148dQsKn2273RSovD9zxEYCb22TZwC4mVecEgeojdqDfJz",
  "key13": "5X8Ffxtx8wdGgaJo4STuRgjUM1X8CqSUhiQVVR8kPj3DSWpZnRyGxPVTtfs8GU685ge7H79BX3L6P56UPTzdGumX",
  "key14": "4LTCU6qZedTfNvtezGT9NzGNmELuepE3LdA9urfwBbgfcG7Stqr7kA5Edi8T1SUxuyJnzipzRV69BisYdGairzVT",
  "key15": "C7EWSDBPkGEry4GNJ6hkuMxLn1iAp9nRHL3AFSRPiFoNmR9imKZT637zudoKXHFTo5KMqpyR1GFaqSpC1EjkHPe",
  "key16": "33XQ1LNgfSPFvwdmcxUqtvEgctYPDvT3KzpGHfQ6N7HJBXT7d7fXykBZqTM6WQFsSYc3waW4gbDmRs9nPjCZUeVt",
  "key17": "5xvCcwYxpU61TTnyU8rrDT7ZrALqqFadLJP2UkNetJUV2NjXZ8R37gz8YakWonvqc3vJm1dPqohopRc4pta6B4ME",
  "key18": "dUZrUfomWfw4eVravFPW2UUJxGxTLGw3b1poTR5ruMmg5s7eSxdneYvptEf8K8N9HiiB5MyeJGVD5KzvF9oUMCn",
  "key19": "2XUx2T2jsDUvsHbfSEsuZENS6hdqtiDNsHiEAk7AkR1tBxnicbD7Lcpk8RzRhdSPzhPtCDPQL5FtqxRXH5mXLduy",
  "key20": "58fsENDqgqHCLGNckx4GYEs3WpSUEvZTqafzP619WAce4XhdBrPJcaLxHV7PXhoLsRtkuULTSGGegfQ2R17YxAEf",
  "key21": "efdvi1s5SgNCY2nro8pDEHXDYzrcyUnDk9GwPWK1ThxMgMz76d3FoAqumZm3HU8Jm3GXAFk3kmQs3uv6hB4Zu7A",
  "key22": "2xHc9UPQD2NQCdgyG6xk7RFEzpQAkopsJkN5PpkenSMZwcF3cHp8r1Y9jWP7APnYP5nGnrtYQFHQFnrh72Nv8G2N",
  "key23": "2RExpqEWA1mJQ4wQpn9nfo9yJiQipiFXKCxFB48efE5R5HhT1BENXrnYD4cn3e56MuJyhBT3vQnQYVXED8tNxoNR",
  "key24": "2vM7nni7MoweSsKj6wodazCZmEatrdsLWvhzGcKvmBX9nqcxF5mReUgQy6hkrV3MrnviZeqHB2YRi8C4XGip3DEH",
  "key25": "4AdWqno4BpJmEUU4YDyTnTx3zxaxUqPszuxhdza45UEgNK5hkuNKdhdeYG4YvS6jX5VHLbKpPYqzMxsxrev1kbpP",
  "key26": "2T75xmfD2vSo9XpMY3UdP7tuJKcYLrhLrUYVgTuhQxE3emjJMG9MDErsVv3FaM7cYVjFceKBdJ2Q3GBYGr4ZekVh",
  "key27": "4nph3XZjhbLJGMgNWqhT1vrBAtbntuWe2b9wLX7aerowwJVAB1JDUoMkuhhookw35gAgArf2X9CkR1TeuRmFi7no",
  "key28": "43JpCotsgCCkWMy5Hyjv9kTp76VFGMCmXD2PNgW19HyLqRsizZfG3isp7kTC8RcLcE3HqhLJipzTFd2j4n7k2Mnz",
  "key29": "yB1ACt8UmKLtyu6QSHWVCjotZcFcBp9MS9r5RnEcTGRZtGQHAi4ZAd7JETfFZPaomnur9pFYaT5ZzPfa7ZbfiCP",
  "key30": "4nTcbuWTzcchp2JL1tT3KcGc6vsRTM57SqA22itZ16iFfez53nkwRGoo3sxuumDshzpZKDuUtNapyGajvm5CDsix",
  "key31": "26VswCyz8bxn5P3RJuKhCJ6E7rzFaBbucMX6qv8HrTVaW1wqgFYfPLeWvQxhfZGu4mK2PhomqJeYbhbSsFQnaexV",
  "key32": "4MUDDNM1nz8BJaaiTAiZ82WGfoEFfPLJrmUoZ2i8pkaiRT6JjzBvqAi5bkm9sF51Td67VwQfiBJeVEvFDNn9HxV3",
  "key33": "2QPNTjQBupLe3Xy8gHHGMQLgzAegtEmSR4RAcYh8FAhJQ7VDLFRUjrR6SNccXUDggZYHbrxubW5TLXX4AwRsfGdN",
  "key34": "5DhVCCgpkeYy6KBCDaEdi1heqoQZd6BbzpsHvr2R5x7D8hFctSm2nmkuAZXyZYM7oRQ2xXLyoEN3gsdqmb8i8kc3",
  "key35": "52dMhWra4kfrtj49oNLMRQ5F67EH6DSh4bvTxsSQWo9nApYexDGseHuzGEnHtK514RqKmWKbhwbzAHwT7nLPrrM5",
  "key36": "5fjrHAMWksjbCUGMKojHK9qZpsfsJrSSvGJJ2cWeuV7kkQW7ooSrYz4zA3YFsMpsdZLsS29DjyA6UKtDgoF8Hqhx",
  "key37": "2QrzJGX6JRuURPSaxF6EDe4UE3UjpmZsTU41Yfn71gXxD4NQspnicr55wAkjunDymbXoEPXs1puiQYHq2jsMMM1D",
  "key38": "2WAB42VAF11g3b6Z3fvJpdoTTCkD1t8FXDasxEhNRg5wjUeAvGsK5CHsAW7fND7V7RMGNHArwGa9LMtJetajautJ",
  "key39": "631VZp86eLVrd5wbykpvTCcGtWg17TrNcciVBKtfRUCxeKhFD95FzfKjocnTCi1k7s7KEowPozTfHcEK8gbM2MMf",
  "key40": "27Hv8cBR4j16p4pTK4JnuyxJUHvXnmzijRAWm9MPPHDjsLoGHSTgRJmpLYgFAwWfLFGvkak3R8n2Yyin5v4MomWa",
  "key41": "4qV5DinBaug8bJsFbXkczGWrBojku6RyUxVb6wM1MAyFVqnqPzXkVuyhHNZKwpyUm3SiPxx65WyPb8e5ebEsz7xM",
  "key42": "4hD7Wu9SXh1w3BRtEFnCpyrQ9bUa9ZzkDUvBo9k8hhGQs8fXT58hFuooHB91toj1niGg5Ua4D1M9T4Ac1zHVkcY7",
  "key43": "3iVrty6KEgmaxAZ4qnBuxjEP76jogTSqZRRTdgDEf6HJM5Yr6jwCSRjV4mEfAbARcVzrysq28poJXBWrprriJho3",
  "key44": "1WKxB5a4GNtDm5DwT5a2VojjhQqc4p5iWD2bjhVBtnPhbgw2t9xUaSGm4RjuCBk4rGtbYptrX5V3S2SANbmdS2S",
  "key45": "2m9yQmx5zdnV4eGLBzhzmCgYWVywaE4huQJYFHJZRrZJt4WuSTcDJwMpmxRLaATQRKoraXKaquMPH6AVJsU1zZSM"
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
