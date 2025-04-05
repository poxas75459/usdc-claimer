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
    "3XDHtN9nMm1BUZfWrCJNQduRzLw7Yva5NJRW1jKgnUzHyWGWGkAaeqJxJubAwsCp1vreEFZArX765cLY8762Pasj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFZe1mzHb6jDf7Dj8FH4VKTjjV8SSmquu5KpAFzhzNLnthygeM2YdnHkUqoRAxJhVPqGMXazVXYfUKVk33VseqP",
  "key1": "3MBHDNkcBck1hGGqFzcNQjXSXJfG2kM4DUbAGrvLwGxKyvYwRc5QDTZo4JK3xMhAgXMuv8ZnBSyRZAqCRuN1rrym",
  "key2": "2tVftGYC6A1L7JSeDt7pPnNWehPajkwURLHxZ1SpeafRBwtcGWkKVNmkuK1vBbNC5AcSULwpAoX2rm4uFwE7DFn7",
  "key3": "4mRswsF7eBHTexDg5Y3LtRXjG3eHxQKXqkSZBpHjAN9X3ywbZy263eeGtJN7bBagXRWt1GumqyqAhNvNPfwvVbD7",
  "key4": "128FfbeReeTnvLeNEJ6vZdiim6fJitobN8MN4mWtMfYHkUomnyoouUZ6ArwrwAsQnA1zBKJLXHnxX7YDoV72zXvr",
  "key5": "4q3BKsUBK3aicJ64qih7Uz48vWaRw1ETgceuFBYepMHPeHVfjfhAwBvqgShRiZtQbrMzcb4QpfuTyhCQYAZk1Q3N",
  "key6": "2SLyaDeMzVP7JbyEp3tvWesUY4XXtB19DbEHtE1ThE66QR3REUvVuPByUZgVkaxQTb2Mej2rmSYWaH1H1vQojL41",
  "key7": "5S1szvK1hadT6WBEijnX5iPWVRecF15f5jtYqgmTyT71sEKTZSKdK18ZcosiDC5qVu3w9ry7fw94gc2zZAfDtMF9",
  "key8": "63ek4bky9Y3tnBn75suGptWF7NMi7HeL7WJKJEYQS2TdTdanSLUen9kdmpH8ZqufjRxfQBW4mD3tZDCWCKvzRNMw",
  "key9": "oyJaM16DsLeQGFV6mPsUyGJGeV48R9LYX3wPdgyLjzfzB5VNiqywP3ahhXUTcSMZGM4Fh1WK8NAWb3dTr3r76DA",
  "key10": "xpM1N3o5QvJQm3gHB1APyrxGgRVU5kuBEBsphAUZTUheXWs2CW1jp6ZXePx6XewvSUf4i1h3jPkNr8h2UFP8F3w",
  "key11": "5CpTAG4nHsvFFWw4fpnRFAqUuAjNx8vKLYebeuZoqcY92aokMEbrd1h7FaFwqDCdQgPUhfg1okJ9jXvT6m7xwumB",
  "key12": "4NMWDHvuYbLuJvrQJ3ohFs5y3JBgRkMnTnogFCHMnSTM1xx14TWhHq9KMdZxtNL694PM9b8EmyqwCuFcSH1bKHcU",
  "key13": "35znTyMwpkeJVnixEdKnGDP5wQzmDT5rByisLyySo43qdgf16373WXvnc5Q6NRXk8HM9BSp73iGuLCMBHcUFGw9V",
  "key14": "2A8MusUWca5nFjtbQaRqruL3WgpCe9ERJ6RhiJ73AJE7hp4eXAh6xRW83jXi1h28G67WLN1ertZVnEe4H1TkEgJR",
  "key15": "FiFqquXknNjWmh5qpYhCDJz3ADT4ARuaudTdBDm4q4ikJxNxBqfBxBYaPZaxbvKQXmJrF28RyvpYXFVLLn71gcC",
  "key16": "4XuyRkoqyWJfyDYwaHJFG977gTCUbaeTLX72RkEjx8LSKqm3ADdoCX7oGmugoofSkExw5bt74x8VJ8BZyZ8p9DP2",
  "key17": "5Xvv5NzeHN2VxGGvF38YAaChiQGZBoPd628fvrneff9ubrRw3i7z18eXBSvFaDVf3aSjkefV8Z8rLVgSRgepnk1w",
  "key18": "9nA2FoKhFEDRZAcL3EB9r57ABfsi1FgrWSdmHZXAUdbSmKL1BU2KBB9o6yZn5mVQwgBAAkUzeSfsdYWMDfAmpEV",
  "key19": "PZcZr6rEtJxeJCHwKf4oo2m8t2Vg6ReCAd8vcjHQu7skMzr4545v3NBTT4rcabg7Yj2CcDf21Ad11hVNFKJTAge",
  "key20": "zFHZ7XTipAdBtj3yzJwEfDrpngy6ifGHoR6Eqvp1skJ2vh8PninwHeKY28S95Frg89XbM5tqVEJhA82hF1HqztJ",
  "key21": "2DRNmP121Sia3xorqgk83zSKU6bvgWQjFrJo1XpNBrntD8s17jhUhTxDrVCgtsAsM6W5Eey3nnkjYpgoQC2WWUaF",
  "key22": "43oKczboeBYpuqTSUQodFda4BqmqxtuTD86VYtvkrxYLEnBApWJ66VjU39zhjL4AeLi7zy19cajZuGobANc1LMik",
  "key23": "4vcsrydoVVxwo9UfbrYEaYdK89wU83NVm3dqjZMsVpmHDNLwt83aq2TMye5xzqgBW84qsKR1SDjt2y56EmdFXLph",
  "key24": "id2ZJNGkhh3LLeULHkCSY6SPaXFQR24Uqs5YJfjp9K7PXz39u6XeGrU4eWunk14MPS2keWGxZMwi5bUMUTrDNeu",
  "key25": "3ucRdqa6SUzzwasHKTU2AAeM5sbAFCnXHQrw75gZvk8RkUVJ7usGaHrkeY7gnUR2EwTiYUaEeoU4XJvUvZDMFinG",
  "key26": "2xgLL8KymWmezKN5o7szDrdLoFeSRrRkD2jo9aL7LmoystoXjjMvmbBoTUy3cN8QxAESuwRUWDHqVCVzTwzcBJnH",
  "key27": "2PAuGVSemp65eWMzt5wJ3Wd93sibTvEh8fEYtLgJui4wfTLaEw4aXzieEG5gCVUuW7GGK3H5tkbaMRtAodwZwdnf"
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
