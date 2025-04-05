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
    "5GLk7dKL96AzTN99BwN1ZWFgbqgEryAECbqfXyD13Wcn8VuYrVNnR7tywqyHW5QCVb3qsdQRbfRHwHpKzPTuhPCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Noj5KcQk6sbQvNSP3ppqnr1sMwqa1mhdZo9YoqFGtvyuexHzPqZ9bGQzDHeL7PdQWwGxFaGcq75L9Sm6pqWufVX",
  "key1": "3QygGURA6m9Jg3TkQPjCBqPWr1wUi5b5HUiR4SWRkfUkb6RPRdcUJWp59ss6t14fWs6JNJgWSGRgXDcioX5sMgCn",
  "key2": "613pKu8jmkiv4QVFw5iM1Mv94LQ9dmkV11YS47dM4QrXTt5GA8eDqkNWo4VaCVSzyqcgieGCp7MBafPU5nXZvBdp",
  "key3": "2M6qCJZBcxCTPW1rCXbQqmwB83oEk5E5unVpdenbqwBN97Tt5h4Gn6Z5kx5rt1SjuuuXj8a5tA5xvs5wh9ACPxii",
  "key4": "3Eyac6mdSBzHsamfXhe6beCcxMUhw5b2Hzh52myUbPZCSMNbuEL3XEHk1hFjTfyoucBaQYqcdTnuHMwWcc3yAHxX",
  "key5": "3YN3Mk1nGs5zwCetayBUJ5bJjqN7N3Kvm4ktqDnbBkfj36wPbK1FeksSLCHKxbjhAXb8GDXVh42nJrLPA4Hmaaqb",
  "key6": "2iAGkfbMs4cxJopjjcz4hUEzeYzJvdqw3Suu8AbZB5wA1H3viMDzjkTGxN7LH4pyEcnjL7nn95Bc26xcYXEdpyyh",
  "key7": "22YRZHoCGxCcqTb47EAFpRYcwBuHHAprBQfCPHg6p5UMKKumQhzbkip87sp9JMUucTAo431HPWhZm3sPgFTGjnFp",
  "key8": "3o4g9mhLyszPGSeM85EZh844cYNLvcYQg1cZvfCQ9obF371jhLq37CmfXAwCrHf2zoZrJbJBzhB7fyShCxQ2mpmx",
  "key9": "4bkF6MpyNmCzjA43qy1ifyBQKU1m5fk7XqtQnFKjFfwepDZteekx9uLFL7mAGfeouR21qEHgho5avFZhLPKirNSJ",
  "key10": "2h7Jgt72ModTY9g49rroiCjgNE3qQzeA77Zrw1rPRsPLibMrzFYfdihKtzhu5eK8zLnC2k2NbsNmhHuJREpYJNWy",
  "key11": "54wRGBdfm44V55oxjupSudvF22BcVJdoz7JyERWUW41qJy8CpXmwUAfPbi28ySEPuCpcubSb4WQSiPmvC2JftVgi",
  "key12": "5mD1TwWtZfweN8yAK1S4gAyJKRi8yE2rJ3s1VKrwn6JoyrWDiShD9rzizxzWbDFZYqdzm85KpKGvZquv9VWxqEdi",
  "key13": "5oqWUv59vf6azY5PvTjiNrNshiyZL1cHryt2R9RBKSaxL6M2UAn5tdiQYeFWZSdQRN6GXakHjDjpvqCsnVQm5G7c",
  "key14": "4pCyP93RCjhxDdd7G1w483VgvxTypC5CcrcB8JtnBUPsdYDAefyqXvuxwwyC95RWT58sWVNZYPkBmXDEEgPyKzkR",
  "key15": "3GTyzdJNPKo5PLRXNdMoqbr3xpTJB8dbybUhjWh6ykitTFMHefqSHM8EmimPfVsxcmB4YWAeQr4G8KXcfcj5xJ65",
  "key16": "3d3TgRAARD8fknAL47GDu2KzPsrVvuNvuQJ91hXmXKrzZiMePosgFez4Uxee3cwd6nKspQyfAh3x8s6mYcgGXE9b",
  "key17": "5FVTEevwjPQXuicsCzMnx62uqoqkJWd4E9Q8o6i56kn4n473atrL2H12cdeoCpPgnUoumpMr1TitYKWNxs45JNhy",
  "key18": "5Jas8ec7FMnX5Ba7r8121EZaK45ohEWetpMmQgtxMnqw5eLUQRU6qNSqgfRd8uvXTjkkYF43kZHh91VFi4LztA5k",
  "key19": "4jdaa6XAD1cW4xnxyCpHR1YXzfGjyA17PuaRYMGkoN9a3XU8KTbBMFhdscqLDTqnHqxg8RAfjdQLkZotRce4yPA",
  "key20": "3qigXYhYNAfyfdUBuHHTxFxkaxC99AnLitYKQjW49vqbTmPn7fEjTsbcHPRC2y7pRvZynk1bYyRqCDWd13UuUD6R",
  "key21": "5o59nWaAVsxUScASR4xwMJqHfGdn9JSWhs3z7QNRUav5yGGH3hSTJgD4afXNNsFGpe4WmpDuts3Cb3iiAkMHqYQz",
  "key22": "5YKe3jL37xnpYrrDtGg11dM8m4HEDatKFnf1mHzHjwHsMHosF3zH32UHdQVA139vCkF3QHHxb6zzvj41MrzdMrr",
  "key23": "3Z4BdSkwGASRNknBPphA445kAS5vTGUhJxK8aZoMUbgBdu6Gc3pZWiY2Q4kBJK3ugsE75BCsXfuywnMm1uUAGWN6",
  "key24": "3NazxvCG5p499LtRc69rhy7Sgn5A8ZQ6Yu7v8wWpw59bD3ZMKhPSa5yAoxJ2Ph4v5dR75f4oZxsLFe4d8gmCsJWm",
  "key25": "4MLA51Pd1W4N7C3SF6vATTanrapxGLeR3VNYYLebUwT251v7CG2KSdF8isJFWvDZnZGc9Bwj8xbmdhedWag658eq",
  "key26": "WL5md2oNUPyPWwz15j64xdtPHQVnDDcMM2WFns1RXSiUiWwU6VPLdNirGsrjyTztUkw48TiUEtV1CLKXPtk3Wee",
  "key27": "9e9265FkckmYAnw4i7APxiDJhQghcVZE8k1wMsbn6Wn37FVC9t4DPvXqBnRRM89w92XBdX3iuBv4qhNACh5yhyE",
  "key28": "hqvP6yELTPLbSFAoAQvE9kYLoKxVtCzPt4k9edoBMBoa9goNg7cqBEKvYWTkjjQSxPF1W6EHyRUMppj31ABcMXX",
  "key29": "455BrAsdMwtcCxCXLjfqkoTAqd2k9F2M78XvUVWwWwWYdD8GZUU5KG8diYgUyk56VXnVZW7TBQGTEAagXqjgzhWr",
  "key30": "3PaLSGNvJXxEADFCfzLudEHQcQYtF8QF6EV1B4p44Q1TDuyHTBPxoLoGuyULM4Ukt7NGHPTnaZRin6wjXztUaU4S",
  "key31": "4gUe8Xj2jmVL8KkZp1Qs1X5AK1QrqBeoKTEDpnJhtrBrQzCp3XBdPs1v5RXSEAAspf6RNuQPMD8pfo3SnNcbxbAf",
  "key32": "Jf7kSca7e7XvGC1ztMe9co6JjpGXMEu3GLpLqEcaPLbC1iUWaAYrzr1hedbZDq4MGe9S1fAQV9LrhDekLU2z87n",
  "key33": "5srqDd6hreik6JYLT7wyeRBt7oFeUn8gn3ZipaDs3nYGQvmNwh1CR6Y8EDjCKoaq4r4y1oQqea27CYcSdmhb7Cgq",
  "key34": "4jzD7NFvY5Mj4q9J4Vwsz8pePhiitw4E9qmTRSMc8Ww8BNNcJrpzNK9ZtqkqU4zQG2VZEhNsj5mGt6JJNhuv52mo",
  "key35": "PTJJCA2gkUA2wg87GvWM6zmSprXjSTAgFtqWmjV2Fp15KP8ARTEokgpPpjmqfsqaaMLPsNjfeFkWzvqaUhdVZty"
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
