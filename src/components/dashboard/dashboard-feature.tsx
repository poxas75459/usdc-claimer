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
    "2EdKHMjAndW1CEAAco6v9VpwRhFEAy1cwq1SUm85KA6Tvjzt1BP86u8PNP5fQ6FhuxscoEvDyWsUuoothW4hnwfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51prCMPGTRyhruQ6gZgc4wY1rALAg1CxYznMS8basLSgj3yqzFWaniJpcNEpU5QaJpS29MQTnK5D4djX8h4VahCJ",
  "key1": "2CpVXJ3rqD5f38osKBZpUekL25dQYDXGUbPEzsezHzwfwMo8vTmH9WQWZN4d9LgpfJm2oZPGGkQKbmBUqtdG4nJS",
  "key2": "4NjMiBLjVBhcUyExa9ZYhvLBvuP8BWNo7Sg1aSYEfF3S3pCXwQzfHzqgEGXu6aymW1k3aVQaGVCeet2ELPeEXBR8",
  "key3": "2sFDTid1PdSBmgn5Uig3Lx2PDaocQXBo3L1FwFyTJwXuBVx6DQ8553wv9FPW7TRD4r6k9ABEHWFiXqbK28ZnuGbV",
  "key4": "3SCoxqcggqsgs3QmaPtjLX6qX39NtFwx9Z2wnzdsZUN8BXVbPtQizxfXZwWVFXyQQudi8pLg6S4s36ae5mC6AEyW",
  "key5": "66Vt2rcXbuBAhYxtkvCsmBKfNUEBa8xdnDMvgMZSbgEJuYsJ6AvdFaikAm9xELPvcZodqmNoYBGamP2Fkj6U5JgC",
  "key6": "2xLXANNT5mCrNNkGgobuYWYUU3BWZJvmhrfSBwUYTrm7NFLTrwovCiMLgDVStdCbyWjUTGbvTY9CQo8wz8UyFMx7",
  "key7": "kvVTsSeSj7LkX9ut9ZJ2MipkoF4tyoujFQwE6pBzQEzLhxwp7TpBoBRHYSR7GQW57hJbcpH4BxiWQhgW2wdoN8r",
  "key8": "44E7ucm1qKgywY45gDxdET922tPpbMxgkYUUXdzTuJxHtLuyHZquSmDeDG24TebtxVFCfBjnAeFxtDEhx46WcNm3",
  "key9": "2yb3wft2yEx5KYu937mj3VqDKMjX9SkfAFAYp9qWT8ux9hN53TK138u6js5pyKeD18FtNBF2Gqhcc29F6CyrVapD",
  "key10": "3THHqEDt41cb3GfuKEmyWwrbWLcnfeYrC8PGheFtyAv1by5gvyt3UQfsX49AVPKZDv8mJjd7ij389bTUwiVYDkHR",
  "key11": "2aRhP6WVzQTiLZCBAYRrermYYtKaAVaGoy4ZTB5SpEEYxeVSvYPtDuWnTXCzWHanZVea7PULDGf2nMJCH1bwXdu",
  "key12": "4QFz46bqwF8iM4oX8QtKHmUFaYRVCDNkp7R1UF7Aftr5MwKTAYEaj3FPjKWD755i39GUphKq1WuAiyRFkLWiTTVy",
  "key13": "XQTSNuH3huLVwM6WNj6XNLjxt2HFokeQxto2XTpm4hLXiQKx4TZkbEry5WSNFVoz6m1SUtjXxwiH8iYpTJxypJF",
  "key14": "bKdP33UP438PyMAcmqQfo4WQPrEK7DwgnkBmxo3kwHPtDKWrbY3ZKwvXgvr44Fnto735psmoXxHQg8WFP1ofGNY",
  "key15": "2qBR1ZyXPvFrGoCHnWLxFfQgs2nhFyTY4nsaMu8ViJiJYDDLTRGc2v1mbuU3Ej4ocKW8HQNBPJqFfHrPnaanQxjB",
  "key16": "4YzJ6ZMnReKoHve7chHiTJMrwbLGdhsok6nP28vRSPWbHNdYVANTBBSZJv258Zq5vaER1i4An44obqHfkoLhtdNC",
  "key17": "Q4WGpiWCFQ7vDrqGPyp2DRLoBfYjji2mw6saCVFuVNsWMTuUxvBiTcZxtnLM2ifzWaNe23ofNHCf2hrMbLykijY",
  "key18": "5XZnwXfg3E7CDwD9sWTdjKtmjpeLB42akc6SksnhHWTVfhcq2UC41kaJPy4qpvLZqwbp1oq9XV1CjmfQGTUp9q8m",
  "key19": "473SF4pFcCMavKCM52FEph6MgczwTNEJLA94jWiJEVKrqHnntv2rVFW2Ltr65gwgEyQzCyKnyNnzaUmUWEjB2SdU",
  "key20": "42ZCGWVDhQVFimrrppjdupHJw62KYdpoKHBd65wNzrW9zhYQus9ntN9kjsqhmvKoczpMAUQtYFhJLNjPwT2C9bFa",
  "key21": "62xmtrWfstJyHLjw3kNTs3afVr5QpQ5QsJzRHYw8CbRPCARt9DEUKTpgPMp8Tmpzgr6Y1vLaSr9sT6EVBJ7qUCjw",
  "key22": "VPxVNSbHSwpj4mhmtJ9gtfrdh4QhkX3h834TTFpXYhxRQd3EbMro4ZYu6EqUoYqpzFN4N6yxi6BtJxZvEn5TpUb",
  "key23": "46QcFTSZQq3vKXoiMkKNEuxSmw9BvzyJPT5ZBDHSGkPunJxTUDu9Z1EYba3CxT5uuxSRQQt4zjBTS4J1RefnQ8fE",
  "key24": "5M6jjc85B3bvJe7tcjd97YXCGbisTd4YXWQ7ZJADEZYoqa79zPAFbMsQ5u6zqR1UdArNeufBcfsdoMu32EcnoQNi",
  "key25": "3bsrDMomjpbxq5mnHYehFiQS1NvxEaAiwFwYhJmcBTnP9ytvsK6nWQAV3pYVUgsZNLKA9GRZWgyzk2FEMsd1o8X1",
  "key26": "2x6jSzjEhk5UAUYEXGPbKKPf1NxqCRNMVzFREaYcJPaxcPMvcpMxHeSWhaLEZtHxKuYzip43mQxnNyns2xQJvcyU",
  "key27": "QQnkEFjFpXeUSeTt2Qip3gJJEu7nhaEfxWsX9G6MJ4TaXNSe4Eb97RCW8bAgF5ddwAAUKzbYRWDYuN5NiUTs5uV",
  "key28": "9dsoXQ5kFkpBYGTBLRnyj2BBLgbQcinhrG6Ar19AAw3SGjhxKumBbXmohnnr3exX8cvsUmDj9KaJ2LkwkvbnqYA",
  "key29": "hvmVVZywXwfJt5teAXm1JG9WN96ec2yykCQ9WibpmRwEKrUqyB8dPQ9Bf8mdyanooV7XqzKw8pYWS6fW4YCEahG",
  "key30": "4pGaS8vRaaEvLXXfVH7hCbC2QvmrgAaPDAnBgQsbsmvKNu1v2txJb6w8UYESvEE2cqdC8BpHwDoExSJdxaLELfTU",
  "key31": "28dE3YWnFPvUyPBotCB7yeWFPJfdfe2onZ2Sqt4kUHaHZHPQhgQaEKwU6JY9uowUXMSKQ5aESKAkhRpo7zMvnMA2",
  "key32": "5in3tRio1bh1HKw5c5rzXd25DG9oto7jP29JRwBhYtmKQmwhC2MEqjpvY3kX41GEe5Jzqecn1a1epJKFZzuYxUkT",
  "key33": "64SxBzP93jUzbEdTwPYEf1j8TG6hAA13vkw65Ea1d9C9VZHnmHa119b51MBweiDEV2Ci5RQuEBL6VqRzyvp9REjN",
  "key34": "P43tfz1CShgdALxJ3eDfrBmFDcVNvJFADGpm6zqn9675TTkwSmkA52VDKanF5C9ht7vykMEkm6JGSQs8M5twQ88",
  "key35": "5DBhUdvUQfSPLm8FdB7jQ7KsjGrxHkWjiJNuxupqpsCLtR3iTp2Cv919gk9LRPmHRrpHNMK9qQjxb1dAcVFf1xLZ",
  "key36": "3XS4Bv6M1TqQgGDnGQdp48vn5cvQnCaRFQCZYDYNZU4iSjeMDwFyLdJKv4MynEL5KDBTGbJXfMKLXTsi43K5Jo1L",
  "key37": "2LZRxFfFe81ZdmFkMZzMXPBFpcccnpjEMhp5ZWsMjoZKthmGiKhdQkL28e64LwXrLf4NtqY3QtaKM6L78arBjxXP",
  "key38": "2MeKR5MNdZAeGpg85UvTib6YhBZsFpbje1VMA9biboLJGZSqWTbFKMcfGHdykRVtwymu1ErKnHBgQh2QQudpag1N",
  "key39": "1nfwuoiWP6DypUuyPFuFJznCJYvxf7BaSbK51n2sxkYWK6Q2tFGZvbdk3K1raZgV76KqRU3NxXcathHdFwE7aDg",
  "key40": "2GabUXXf9v5fKyWWE3q6FeWTf9VtA7psq1T23RBxQFjCCbcCCg4XGkTFNUYzk5NYmuAicLJLnyXrqGPH6FafDU8t",
  "key41": "28sKqGuHjTen4SuSzTmbyBwtbQJ9iy4A8PR1utgNcroBUyYwLD23YGbgC36D4pghZAyAvSKU6ao66BrDeNJDMWaj",
  "key42": "649AjEcPHGTYVo9w8dMwMQUwG4tqXwvdqNyAXYTpr61AJTwhGnM3jRnsJnhM1LxLDftLK914gJmbmAHsotJREhtz",
  "key43": "DmrTNEDVcRbsDzxuP3Aoxyugd5isZza2fBh4epY74YrmxzBYDz1tEN9wPnyfDspYNdPgbhVYN7ckyUXXD2A8m61"
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
