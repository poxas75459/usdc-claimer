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
    "2rk9AbjkLfa2dE7eaCDZ3pgPjQS67JKPSBupWrQmdxjCNEkvzoeKbTFF5R7AscYEjDPfxR3KxSvbEVxKKX9Veuu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Noh7AYt59gyhKqM6AD3Kwyr2K8fCCirMGY3n8KXHZsd8DeQUAbP8wp9MC6nNv5W3DhiPscAJpqpyJPrSqMEcbX5",
  "key1": "4fTybbyFQ1aP7rt9Cz9wVw5FfCvpJ9t6tviRwuUXAMw71ZFxMKGH8KSAUC43BtL4kQ7vGBKoQ7wjoDHg7xXDvhVC",
  "key2": "3vV71sGqTWyMBwBs1S9NiJkqPKVMPP2xYmdHxLvJCssKheee5LP9skXVMtTJVpLJk7EsXM1PCWKAS8S2kUjwUX3Z",
  "key3": "5eW6J3sNcf4emegh3oXMc8o6FvsLWRBuyUh3UiXC5vYi9ATvRokKfnGyNgeZx53RbbmDJv9d4pV1ta2C5yokqjAX",
  "key4": "41uUPowGX2eDzoGH3FWN33McvMkndTyvEvyMRLsBudDBRS6yxUJWXUdtjKZoCVFbCACeYU6bwNkcHicmTXSz7NNx",
  "key5": "4VJabL4NBxchc1WLyq8kd5hqWAKTHM6CpLhNusd3Qoe6u7AnsVRfWcDzDt5FjAgZ8krMvR2ubCeUdTHMdv6KppaZ",
  "key6": "6268rCwKYgtVcqNb4voWg9VgJ3QiMjfpTsTJpxdiETr1TBL2VypLqsTphbcdTJcWVePooceT6jutipMnAYoHrWj7",
  "key7": "dtVY95p9vHSfGz9Bocpp7um864dVxZsEwE3LbK1iE26jV7XxQhNrVm3Zgg2NVgi8ZupfkHb2xtoeWgom962zHHa",
  "key8": "2ZBZ6yTA5RGfXdK3yKtYaaup373x1UZCcUc33672RRxdFmQ54WCnqpnxhSiER8cLcz4QtJS5iEdzw1SNdhVZ8Tsw",
  "key9": "5oEHANSWzEzC5FMR27PzD9xaJ8H6nQBDmZtDCkXw2Sr5cvPpZzDNHe5KiYavNvhwbP2gQDd8uqqwTyw6ZRn7XcJV",
  "key10": "3z6HCCdWF7fWYZ7bQsYtUbcjp2vSHzF4PPPpmDd8i7W88dJFMqjCEsGFji9K8vuoALPmEV822Ma9foKsZjzFHPRC",
  "key11": "637MnV3KKW8EP6ZdWB6rZ4jiY9wHoHawPqjsfx7n652STWRyoqXu96DLjhGLWcrNrcPA4rLonjRtdZXPCAsFyXth",
  "key12": "5hHEm4B8ur5hBMJPni8Fa3UcbngvV6BYP6suS3cLhAAJgB1pNNn9bzLMxumMyyhTab2ze8sovnG1jrYr3UrEWLHc",
  "key13": "3PRfm1epYtUM3nHmVffgttEo2SbEZBRi9RBCixN5mbRUVwMQGHQh4iocRhMa7HJkY6mg2Zq4krdhu7S6i71fAmQV",
  "key14": "5ceTGo4wpsyrVAFKjFfHAkz1C9KgsRcVDYVnWhe5ZLYfezUCHwHbAouMnaE4ihoyML595fgAabNLWjXLbr2NctY6",
  "key15": "5yUEPQ4UrugQTfX2eDRsWf71qXVz41kSYe2k5S2i5YvYtVeaBB6hMaTZ7uobWSkd8Fc7JqP5ytkrc51FnjrweGhy",
  "key16": "2Vg9dYj25C1HqAGuYdsqtTjj84VPkzv9jiFq36djyFDs8UZLAfQvj1FuBndoMPb2HJNbGhXbYbYMj3dBk9dNe9ry",
  "key17": "K281q2KkNb9nuRqLGTeX1QbjSYjAYu6GGmFQKkyTK8RD1zf4rSMH89jajaw6fydTHkAb5q3bgHn2FxaPL3mPMeH",
  "key18": "4LP74JSV4K4KpZcBxZg8e7QmCZKpycCHdxv6LCyStap2gohfrMM35ZniqUL8wNMLwJNYLAZLSwc41bX2Vyish8yZ",
  "key19": "2oEmpJj5rYg6M4FCwdRru6jpkXdwXtfQDTQNqcAFHzXCuREKBphSHpTQC2PupaujgMnu5BAoSThmhH5redjirmbX",
  "key20": "ACHocKcMeRK2LFtWRvZNuCjhAQHNNhiibNWqtUHcsf1LR9qimNaZGcMBZcBDmAAuz8XfS7n754cSS9xzkS1qbo7",
  "key21": "2GMCynr9tX2t82oHn72UjowcDpTDCAqFNYWJTSAYWAD4dV6fzkx8f5VcAvBfyXdsc4zZnRG7J9JKyyvfcqeBk7LH",
  "key22": "5j6ZywXSyZBnkosaAUot8bMKhbu1UJJ4cq83G8mgac7hmBJc15PpMjBU2ePTLDwno1eykvrxut9CejbiXQRGyFTz",
  "key23": "4eaHZM8Cg5DXXzgxTgWabcWVTNtoSd2bE1UC7KUf1husiY5NWWCVQRDgamvBfAVHB3PmqYx3o5s6CYMc9tcJor5V",
  "key24": "5ebjhAgTkpCXPkh3yx8WP5uvki1PFh3AA887NaaPdqWz8zKQS7xTDUonYRWoYJAkpQz7HosQiUozbi6VJzsc6cRD",
  "key25": "55ezd4vecd3D6QCb7mn2GLdu99mfuCzyFmTr5Ere5hrU9jbca9SomPS69YvKUmULhPxVrzxz2NGGDWmihtptsqke",
  "key26": "3smx6wZvSjgwSWxWb9zBKjG4T2AvFkng8Cno2X7FQzSoLnXR9fKJXpRgHjkeLBieFEsszaeoGQWhpfG8pHw6Qt1C",
  "key27": "5ATFn8dNXLVNofdTZsFPHwqv3H7mmnQXHY12cqGT5SJSm3ug8JUoQ18NiHYj7qWeTDbVU3GSWZtRL9hPJR8cqbFb",
  "key28": "5Zpi6EHpmxWa3h1AhbPmrE7Cj35egWX9VRU1EmepoCqhtPSBUu5LzbKJ166tH3YUAggVUo8z7ogvU95bqoqYrKKi",
  "key29": "2h4PobLg4UtmV5dT145crNQ5jL8ES8tWF4GKUcZ5EnPiQJYxPF9GBfH7EgGvezajeFJK5Higi9Zaz8tthj9Zwbvu",
  "key30": "56kWUx9cxnWeh11EH7BziXWyvuDi1S3WjhcG49PrRhRKFqM8xYSgcBLmkvaa3juNpiSLvJ1mnqVrYBTD5NcjTmdY",
  "key31": "2j9jHyoywjhiz6VwJ8PLoEqL4nCXiQUqugLYbwRDvpvuttEU91zAiUrrdU36ZpThKwxeCtMHCv8Gm37DVzc43sUJ",
  "key32": "NANC7Z88Jv7Ak3vyfAJR1xPDL5a18TFyp1traruQrH8ruwMuXZixi6MJegmiMU9BMxH3vtoTNv7yESmtyeH9AYr",
  "key33": "4LpEC2JhvX1oXJmkAAZy3RrcuZMUiPPhPes6abc2GTwr25vGPbS3TAQ7Sq28T2FTkcpYn3y8wTdHmGtXzRsyF4WV",
  "key34": "3cgePYUkVyBg7PC9wdF1apr6DJnaG7hA84Ch8z14EW4Lbz6QNBBQ8y4ecpZ654zf7H9XzPcA7mXxwcFK81N7jmdD"
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
