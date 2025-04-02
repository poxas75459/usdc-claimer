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
    "4BnXvX6a6xA9VNY7xqNSrNJ5kj2mcJTwsHzVfq2eCiGd2G38k5N7NvF2257yRuUkc6vF1ETaCvtkJyxVJBk1iYYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivjiWdtSTsKyWeWs4XeVeSAKEr5mNUySPvdgmfq32pMXcx8ziT8W3kWHwoFYmVUWfZZvCaMitMsevMsUbyQMn3g",
  "key1": "3CTuFjaxJfZjpd5UpHb65DAqCpCZYwqBWcTissuFLwHYGPSQfjXbG2mQEDsbmjF5w3r2ayD1KAv3qHY4q1DChQk",
  "key2": "2UnvhaC7YuXaoyWL67ETVN7nbp3vGBAtkFEzWk71wBKgBAJ2pMYvgmGSgmdcwWrh26sHi7rqx9U5qSTYg5L2UkHw",
  "key3": "3SfRVpQFtHQbFQyCQUKuCgsadRJwc6W9XYaygU83PFSsns9dQKrzhHiRwZDELtdwLQxTC1tJNLmTBuy4qkV6zqGU",
  "key4": "3ZUXJARSdRhdstfhP1c7fTum9HLHk9Mzme9V5oSPyvYfBDFmbnMdpkPaot6Xu8GHEHec5VMtenQXohLQoPhtp8j",
  "key5": "5ws1HEVV5oqjWNapMVRCCfcMace2AhACoqHziRxoEZiKSSRa4hW51oaDrRPfyLATwHq92jf1FtDodP23sdH3sC14",
  "key6": "1j1EhzeruQJEu19tGZaUWccewQJGymPZLsnerYLiQbNiAQGF3FhdJWcQTNUTRzQGns6qf4UAdvNjZpcs7qRwTNB",
  "key7": "KRKEG8T6KZw3AhvMX8v891GcSbXDq5R5SZ1NrGDCxobuV5NdpqgRm4HLojnxMPA9ZLf25krSTs4v5QwmrYVBUSt",
  "key8": "dn5KLnFKo837rVD41PjQ8eXhdMsA5i5R1znXav2ZFDkTcMzcBBBwAbxxgbgMq2K7BxxKv9MRHroVZwv1iYFKmWj",
  "key9": "4jKPaWRqjQM54B1wbp2TeFvedJmcwQ3QGzc5ycRTNhi2syfqae6sAdAgLWyjho2CPjVQehqnjre2H22bseYMVqLM",
  "key10": "mbuPJV5PamB3bcpahcKVQpK4FaByqnXBkZhnmiRTfLKSxyfNFrLvcv7eJcEi7RkmjRT6S9Yw1EWAZusLJmMgDac",
  "key11": "zYNXQWNcNKJ5Cp7gixcC7xG8NRdWeohkN5Km1ET4rh6kbN16tLLndf27MpPZL8BtVH9J3gp3aiYg4p1u1KusXPr",
  "key12": "5hco3rTLSqga4JAhj7iK1DAZ3MByenXFaE1gYDLWH4Qd5opzWfLvF4cSwJSJBV7QrWGrR254oKdR49ZNkKHDugFK",
  "key13": "44Z2tco57wsA6tSZPYBmK2wfLLbDmU3dAQvJdsugHJEUjr7tMyHnBzF3JxLdQjaB2QwRicQEmY12k23HuPdGbWEy",
  "key14": "2zefUwNKiWbN2pJbnW4iSHqYPF9ARAC4MxtQrhiYmu8gYLFybcJpjacbfHNikM3GmzRp2Wov1jWfuSVWB59ZyXKL",
  "key15": "6s459z7erGEEXTug8ocK9S2BbLaLShp1gk4e9E7LN2jwPy9mEyc2ghJPKWrrSuBR9jfYJcNw8soa5vFxQCkQtzo",
  "key16": "5GepQPLm1qZyapLCNeyv1yX4u45WdTcRkkv4ZiT4N9CKhkooY9S1Py4wBv5jD6McpQtiCvh7PFnytuYHh59tRsQb",
  "key17": "2ghr1QjjCCBvm8WKUzgrxGE3n7WgrjmKZfE563FgdzoYfNBnmevteVXY2sLKzTGzbAt8kpNRw7qu6VtPqZ31zbgo",
  "key18": "4Bn2fMSpw2YtRqG3PKtkiVasi9paPHraAXEgFifVabXHbseD5RpWVwS3U2MKrCUGauXnkUKuEV4Mmr3TB8ULpta7",
  "key19": "4EUqUyTERynThFC4F9FSVsWS8vTbV1puAghuBd8orosEA1aSBNVZCyxfb8Xag9gLV1KWCStMbz6pquGnqWYG41M4",
  "key20": "5RzWvEUH4nVXabDt6p4Y6f8XN8PbjDdDdNdT3NRMB8ZWS3xwvVzczuH6VV3MP3SqUeuk6HtpMqTsA3LjujnZvQvG",
  "key21": "3CHNZEpvZA88tZVZ24z1sWx9tkTXExgPmx5U3wB6CCfN3XYqKihPshV5kw9S4wPzzKxN2KSR2haDca61t1mL7GD9",
  "key22": "4wsEoDpE7mhKWvcVjFNSn4UtCviyup8sfJoPQA5NqyDuVfuBXb2T2nTHAnc5wXLpbQnezs1H6c8wLQFdV4ugjYSj",
  "key23": "4B2RtTfdCPeHPZCePXsMco1R9oLRp4yWhPpkgSQM62azBdf9kk7fB7NYJ5Si5NiGJB4ydo3WC9AENvCfWPvS2wyv",
  "key24": "5GNyqJujzudhMNuMi367fpWVWWtYnsGPxg1SKEttiHSnxnm5VcdTxKMmayEnwo85rmMoLdXgFMbzZQ9WM61xp7io",
  "key25": "4xVCLM2qbrVsWwzvicLCiGyeU3bp8ifJzWC1CndVVVv59m65KZZEME2mWSWHb7hTniZ45HiXeBLsbRSfkZ96y3tq",
  "key26": "4TeueoKWr57Lje1bUWd5C3AbrjbnpTLeqoLHFW15TfwEnRtnaZB7MsgYMBegQ4D6bpSoJ34vP1br4jmaVoZqJ89o",
  "key27": "5kv2H21xwZfMf7JxBk4vEv2AdCFX6Q9ZzfmfBRjKRpJiiwjWBrj4E5fvWWuxXh5SicFtzZJ9B9qEcSuNCS9TWbN3",
  "key28": "3wtQprMa8bCcLqDH1QWMLymqGDgJqdfbnHbrT7MduCfRqbXEduBMDce3XfeXujugUqo3GNXcKqxAfZ5dVLfbfJoL",
  "key29": "5vJomaFsZSk1ABSHoxVaBBsZ8VhB84XbbLAQqrEnb7Luk1rmro1PEYhJSFgVJJBDEKRQBfacUWLumeuhE6oQ4JPC",
  "key30": "3HzA1SFSuJkxqT9LXsUxrkL9HmmM7rZRCBHf69UzXxq1wJJpCVCs79fF3bvUm1f8QV46PrYw2L4MzwkckoBrUdRb",
  "key31": "4BMgLgESYTAnnzXQTtNnkE5Sao3atqCd4QTL9WEpU21XK8qtCfvR9uRRGndjDPduKEF7HQuGGKP9UEFmMX1UDNVp",
  "key32": "33wanwh3xWkHWmDZpPLEomcyU3bv8Bh5mJcfJL7YgHaatpsbMxR6TM6ZN7Uurr758W9YHDQVZadj9zA9GH1cXt4C",
  "key33": "3QLtc3pSGsjkj7fh23poeuHVu3MrqReUDhTBqvfmJCUN9dK4W194kzVDP6hKgxjA68XMjjcHBuyY1ESJtSAAYpak",
  "key34": "N9bs9gk9mzvEgLYrmUa3HoTdx3VMFmUYw2UanqqiUuem8jrwiy1LTQdX7ZwYw2v7HUiQwv8iBz1Q1vP9Buf6c4f",
  "key35": "VQ9zz9Sn8qd8MtUJhUhKgm19T9E21YRMM21j3G9jkb9HM7zgYUexVZ8c2ZGctjPuqpCiSu99zg3GWFKEF7uqgWx",
  "key36": "Hk8DPXqZBB68LBbRKHSVfuqDRFaYeDo6qAu8zQzabM4fgQrgMXrfD1AwJPF1W9BsYeYCRY1T8BTSpwWuBr4PwYS",
  "key37": "4eP6TFDaEGDa2XWfD1zTAJfdyANhqREy3WrNjf87AJRTkiqbTn64exNMhqNxkMG8SuA2gVTY7Y6GY1z6aYVFqimi",
  "key38": "2CjuSbddWSU7PfwA3H3QN3Pig3jSKTTHXh3s3bfbD49B3WErnTuhDmt2dJC1byKVRh2k7b1tTj2LfPiCghDA1NLf",
  "key39": "4kHHa3TvB4Q1E7a4uu2yTDkZGa1HgCXkEvP9sSdnE7Q3zK1SrGLpTx3zBLHYwE2E9bBK56EmhDFifpFwv7yjY4Co",
  "key40": "3uyKg6Q1e9F2Ern2rHeBHtbitShAqcSrrTNgd3Hf7FC3EBYwprjhweoXM3Nb2r9z5Bkh5qyk7dWgoRaBJHxcCYdg",
  "key41": "5bzoCTNFqRRBbtkMmjD2fHaqDavnU2bcte4z9iqn6m9hhn3WJs9HtNZ93WCB9CJMGjWYqnwvkPLc4GearUBRdRzw",
  "key42": "4jDRcvMkrfrc6ysXz2sDCJpDAKGaSbgm4CzU5eEQPmC4T5asmGEvrCeMph2CQGRXqJQvbaf7mYVkKd2GFDvYFGYj",
  "key43": "6692W8raD9ZMEBSzCaxs7EHcrXY9xz47tHcnVgcWkEjuQ4DDPwM46V46tj9F6QRokuL77Q3UGEmsvHEStE5VWxN",
  "key44": "3fEnVe8cf6KnV5ftqKPRnJ1nbVBD3byYBng3zo9xmE6LXqgqugAmc1qkYwLTKuFmW1kgvrZW7yw45C7XsVsztGHb",
  "key45": "3Vx95fncAVBoVTaqksbrTmNjqh3jBQVa5oYRBkVzvJYsr1EaeGRNJ7UvEcQzGcpoxWxPNnES3eLGQ3jwQiPa4WkN"
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
