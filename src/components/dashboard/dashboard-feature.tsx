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
    "K4HLb6kV3dSrxSCbjw4uarUZw5enCU4xgn7ATFXPRakLuuzhs8NNsZYycnMC2EZe6Mkn3hDxepaz86agvoNPWGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hK9xZeKhHzfczb7N9HDqUsZyWrWc9e89iu5Q2efro4rKPcd2QcxipYuYBLqq543ksXNssdgmLRW7QgV6G2KLyw",
  "key1": "VVkcSUfv2NC3jM3QTqxyjnJL2FQsvh8TH9PdDejyEW7VGKRVj95PiDinZJz2D8YdjEdUGUFDvqUAwRbRvBVqrmZ",
  "key2": "45ZFQjeBDWAdejXeKtLrJHrLWpf29Xx9FBzUqMm1xZDcc3SwNk5obreXnRzbxS9MUmfiQ5ycVcHUj8bCuNQKQj2V",
  "key3": "3VRgjomCdpdy4ZfrQvuDRLXKKqArkD5EPjyzY61NC7tUqe61ewFsJ5MFp2RKsTux8vEZ74BKdS1b2sN2n4DJvifs",
  "key4": "QdUby2dkEKo38m7YkQU5VURXuDVVoXkXWecqvavegDsrnXMSXdqbftAicyE7cmSiwRY1YQA4t6HHq5MYE3uRZYp",
  "key5": "6sNk6MbAiBt3gVj97649rxiCy7YUgodbP5Lp5UnpgeTj9XrkcJmid8QYEFmtHdGDSsEEAvvG6FAwieksto6nSbg",
  "key6": "4DBqiTH7Y6Tqjo1Ki4CGmQCgFipUxcXBUL6svw5ZjmqQifkB3RJdZRb8wM7s9uELQbSdKT5ht34JVK5THT3xLWBX",
  "key7": "4ciiLf2vDXBx5GKxPWabCKgaRyv3sr9T5fGpFnA6Kozv6wUMBKHy8chwBWn3n62ka7WKDE5DwhsWTuMLQfgHyjdA",
  "key8": "48PsSQUzZPuzmH9h9QDMe3RdJ4BvfFJKrHErUA87tCDs7nYjowpdZ8JqzkZZiyQKjVwtnmG5Zsvroje5H13WkaJZ",
  "key9": "5TCJcWTCfCUXZn1Dg7MMs3wR7Np8mZ1p2Z65NNiRVUhyxNAhux4cqxp2GKsaEh2stHaVJCzFdwDjdVavgSbsAEsx",
  "key10": "3XXqVops9eEXMMFtkECFn3B2EEYifTLUdRzSxffKo5xpw6zmEYKzc65Rst5RWELST7f5wRfFXsePN7jFZ1jytqHX",
  "key11": "2cZ9Fn88ZTrT7Z6xcQgEyDjx5HcabG9bsw1DQQVWaQbW5QAXK5PTfcKFuxS9479ZmXvh5Ds8Nm4HQEKJc3Boncux",
  "key12": "3AaRHEpoBGADFtJsEgDXFCBsE1vFRmKqhagUzpHjisd6mZUNypENSsiuhA2VNGyGh9je4uRxQ78qyW5FMsTeNaid",
  "key13": "5qfm4WVQpLfhdzzBDD8CxQsGEpDDY14781zFK8dWw7rFdHaAvEGGxdHicPYqyK7WvUjw9Bj3wr3wL1RvBfacBMhz",
  "key14": "2joRbiaseTHrY3ZY1J3uToKKmKoD1wdHZ73BdEKBoXZUS5eSECyF3B1sNu8zvnM3c7WS3Ms28Smu5SsLQAE7ww7i",
  "key15": "Aj8Sq7WxPNLcTPF7s2Gc6NGe5YX7i9hUcEhrsEafAQVZEfmNvgTRTaaNruKXpVxUZUEWWfTbURAgATJs9fjAxoN",
  "key16": "4agZfsngKBzMkpx1rW46Qs5W5qb3Mekh5ZN8aZZ8DArcjvR33f7uLRVioKfkHfbXFWrBQCM7PCreY6QLCWa3Jqqh",
  "key17": "AtEvZ2dqyK4hWKQ2emvGK53tav2bEy3zBHBCbkRvRHG3Cn8azCjtYzbpxzJa1RwQ4ymm81Rq65oaj7NPPPQPEA8",
  "key18": "xivjv9BuHsLWi39Ra7vNzFBGHfqRWkUr76U2kRpWeuWR3uW1PTRkrc728spnHYVxFrD7xkTFQ22V4mFoPoE7KXN",
  "key19": "2GE4ipDuiEahYjmkUcB77ykA1Mjgx8beuepPjLT7WmqBL3pEJnVAu5AzBxvjS5jkZ6gWB88thgqeLmsGZNY2aH3S",
  "key20": "3pJmxHTsV7h4E14HUiadtQR2onq7anhLQLQmy2U1aSxzGfKJUodBJxTzFC7nAjbM8njpKQbGSEPjN4R1QEkeJFGN",
  "key21": "5TVdu9VFnGitVm1vif1dBRAApCvfszyfC9NQH8hHvXkUbxUbgTLdi77262fxKbFZ36pZ5Ejca5AsxxnNL2w4fUze",
  "key22": "bvSkNEKeuuGEbL82t5VqEqrwNn3Jxfqmpb5c8uoonJ67wtFWmWnxMJi5xiXeXTtV2DY5Je68SqrK1KuoSfFHS4q",
  "key23": "47coDWMbyC5yumpJ8JwsztyzowNTbmu1GcB7pZD4tVAT1cGhjhJawRqq8Wm5atE9gAM5ygkQomxQJLdk9A7BkrCk",
  "key24": "35adTykvXSmnzQHoAUyg3U14sQeX3nfqZUv2u2BXpD7am1KnLRcbfcXnvQmkGdXUnazGPrVwmmi2WqKYZrXVmChu",
  "key25": "5XizzStvGhuFwoSbVCTogqwBi61vSkV9CRi9s4Vz7oJNuRYXPpZ1ie7rZ3opn1YYSqMT5fTpnbzLSAGfPHpUh5n3",
  "key26": "4wYTMo4rjJznV7jRzGB8z1kAx2ExyrWDiMNjWs6t4XYJXYpX4hC76GVwYtstqr6uMazeLVUmWPBpiXJeo1Tws5pK",
  "key27": "4q2RNmvUYHn2cBJAXpX1eRdemCyMig5GTaTPUKUtQfCcMWkdRAczYrBpTaAuncfDkAn47cWsjVK9otaNt19DtBo6",
  "key28": "5KB43CWhbqsmE99TU3TpYBacjeiQPhS5oyJz1skpujKY7nBv7uza1BpJpXjmUS1njFDd59htJLqqMc842yCiWxzH",
  "key29": "of8an9Y9LQH35bqkZvyhqJkYVUU7Sce2caYkMHgQP5TaQsUnFEUXnDA538BJbVNErpeTUfqicgeK9jDnKqxvcQD",
  "key30": "5piTiNcNRcEx84ULRpqcTVBdcwUBiQh2cq7CnwPMeG5Wa76jAmS9pngKP9SVoAQ7eKMJ5yfrjVyMQtT7qKMcgY95",
  "key31": "4fBtkuU1uXhLzeSuJ5FNpxgZE43DiwHetcfVWEcDUPhewMEFWj1j1BeszuevVLbrc5K6rFSBrgXz7mvLWpZgvDUn",
  "key32": "2UmipszV1SzzZc1KJVKSiwGYcTqLmnqnsNpMY9BTqXjn4prHaYH3NEFvkTwsUHvQ4JLMXd9MvBxfhwQ9QuNSMeuP",
  "key33": "3dzkAUqUekpSZxvsB4JZaAvjULvcrPEEv4G4DKXJbvZuxvjW3o8imC2V7iR9uNRmrbSAmCgDm6Z1yCg2mR1TCkF5",
  "key34": "3vC9BWZFiKU9onARZr31HnRN9jemeYsM5EsJ3uBZY9DSgrQ98frsRztW5f5wN6tWrUiY7iYAWXDGVPLdBAa2ombq",
  "key35": "5CKHZWmSF15Js7boJCJirutkJzj1WetosPhZr1DM8kfcNFiN3m8bAMLpTRTmEBHf2i3BvTv72JYqDQkMvzXxFRDG",
  "key36": "4bdgjcR46DC6gGuExHQyUXzp5ngqhajwg8tpESwkH9aUA6quVerwWXeVF1nsmbdC7NH41ME7F9LnzWC1ZyRbZLDv",
  "key37": "5za8tjRpqJhHJPSw8WBAapvF629LQgMBHBxTyaMHih8Jr7tFZeLz8JArsJZEaGGeTYpwkRZd7ejcx7jMvSpHdXEA",
  "key38": "jQdk7AG2pF9fdHc4pwVhBp6F7pEZ22g2jTNqaWgKEXW91xYLSQkr3WTqP5hBVn8jRnJmsuqp95uWjPvoTr51nw6",
  "key39": "3UYeR77ct4THJiYHtWzmYByrTdCAGWcTRRjkJJPzw5m9ZkdjTBJmiFUCtRgaM3jw8JY6EQz7j2C57iCCXsDbPU4R",
  "key40": "4KcgoJNvLfUDEJ6XbCV5ksvQJsEx34fAJKoB8WDHmER5BkrpEjtMaXWt3SPVPMtqWw6fM7tYmhr4q3TakozzpkzK",
  "key41": "22pwUnkLBjaUWLuJuPvxDKkydUSP3i5Vq3PhzM8bzK9MiDhHAzbSSLu1L8X9hvQ5wXGfxwWKCuZTk6zkqv71SmGY",
  "key42": "PfDwFMCnZNiUcrfNPVDivN5uPnRKXeXosbaNfnYe5VWUrkZ1u8NqfobLH2MRg6fq2fyE6mpjL7WXk77vj16m52t",
  "key43": "3fPK9cNvVZAjKrFNZnQMnw4cvCjL1vgNwspN3DzwXnTYHGtnMMNtLBgrCae5FGzEBFF8754gbEQLprKyb6js7bwT",
  "key44": "2b5URfr6iQkgZYb2d93A5UoHEZoxKiNKLbTci4PPsKGpVhKgr9Bv8unaomhZCV9kRWzsHyGrFEgn2QbHbAwgNUnp"
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
