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
    "4GfjemjVmy37EiPbPHoHUa3EKiu6Yj6MXALRnSdLCcwRn6b9PUQuHnB8psYaZ2C5bhkU2hFW5iPb6gRWjsr3DM8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMcpSHHMczQo6EpjRi4fzy7SxYj2QhVhksq6rYPJdGBMMbGi5vRecdePji8poHphtXHFZo9W3ihCwx7T6CA3aC2",
  "key1": "3nVEnusUyUskYV4vCDEKfF1AFcGEv3V5Q54v3dv73G5LADaCFxxZk4hKQMBpcVhTvnhqoyf1cZ5SgQNMHvhzydEN",
  "key2": "2eVQuXUtVLSVyCg3CPGPy2x9fSJ3ypuJh12nLroAmqHiQCZLM6e7ectn6dLfBi9o6kh2Ksrz7a6Xc3sriMoWaUua",
  "key3": "3s3MrZbmzFTbcyjka3EYWutUw5BmBpNNfwoW6Vyn1kf3WSCyAraBe1EsFWkynArXQvc7r5YkaP7pzXHubPzC2Zr2",
  "key4": "64ah66DWjSWJR9MhYia5pWmPP9hWQDdsx6y58t3MPkt3HcZwjRapfS5NBGSBYRpgkgNsfQfjGPBvPN2LrjphT66Z",
  "key5": "3tzHRkvB4YpyZqfxSmG5riUQRj5LoKRuG4SL4mwwBYp7fcJusm7K4BGKEAWhpZDJy6xuPasLZAqkZ6cb5RDYW1Y",
  "key6": "51ppLYZtaviRpm5kuLHziqvNJU41xXoVQkto7J8ZA28aU1ir7HKMVtTByXjrNfbg5x8AD76romLAAA4TccStFjf9",
  "key7": "4kMe5YX9ZDaqbTBDS5s8NYHxsQtZcv3eWukUd1DtzAU99391YvNw8RLVB3H8aNXWRydUmvnkhVdhP97u8PYFQyrf",
  "key8": "2i3taxoZv5WYeZyQVMceHdAX8hcUBhz8vMHPLCkDic3chGXXLfj7jSQVAuo8KceEjEFFKqpD6qiw71tSj982zJPm",
  "key9": "R4aTLn3Z8MuUD6vyNHFrQ79pLs5t7D56eTxtrKhXqBgRMA1xTZFm3Ljsz1ocoxRrVAMHqJBeFYPMH9aYXqAsraj",
  "key10": "2jYzQge3PmvHLKSRJHshwMmpEsGxDeLsXcvmrjZP1RbYuEjxuvWHc5xxg87cJFpXXvmbPVkcvhhYcvdnTvRxeU14",
  "key11": "292qpSVCkmpLdj2WWXnZRoDnM2sSnS38K6UFUduU12ctuvFYi7oLpJx469CozqsJKeHuTxMMCPiCbjDAED7ANGap",
  "key12": "5QRURxbJVSMHizUZ1NzqXTUxDoj5eXGrCVPcJM97P85Bmn1ZibuS5EkWHnCHx4BytV5wB7KzzTDsWA8Z7RUyvvDC",
  "key13": "3EMTmHLk3HVMGKD4rtqnPvjcEkbSH4D3B6ykYNpgBhs78XecjNK3tgs1DjKJ5nptEcHyWh9Z5CdJH6KYr4grf9sv",
  "key14": "5NnQVrU6mWWq1MSv3zLdvMn6jDmAZhYgLrrk7hYn5VVHKdy6c5Ahb1aBWr9HZrjxpjqAWbDVxmaT9Ph7Tm12iJs7",
  "key15": "3sASGgkuBMTq5Vg9DptizRpWJGrqMCBGw7K9AS4CzEW6DBp7Gu4ZjWEnxQadDBd1CeqJ6AP6SfsWts5YsxR89XkW",
  "key16": "5wLiWFdGGddEMrtMAjWCwwhz8KXK4BHwCyrMQU5Ah6wxwjrHPan2ALVXpnoELpHTLHzSJXeFuNxQhemNKpLhgHmR",
  "key17": "3hfPDR4w3BefdivXEmR5tT3bibQoGm7jcgePNjKrNXQCpnDuyXpQr4oDnueUN7SrJnT7PCxSZwvmFXn5jYeq3Pxv",
  "key18": "3BC8Bh6PNJK7fF1iw95w4KXofctfzWVQdJK6Z6m5Gngif3kHw4ATM2bYGrLvSdXnAGY8AiixQpuKcbEjQKfqmqq8",
  "key19": "26HjVMFYvc1VFSL1LxG2TckVGuirnEtDd639X6JfEQhKWpgCZREPpUFKDwPSZvRtdo2kZSXTDDGg7Gnaq5GbwWdh",
  "key20": "PKvAGez3gXujzZAtymYSakWm84KMMFNnGVeRTpxt3YX5ppGXRwwiUw5t4twBmgP3apevMYyK3WGagoKJyK4vc5o",
  "key21": "5C5ugkxE7J8kDcLX9AghBqvUGSgceAFJYuNzwcFxhz6hxHJNi17Y1HmTsnWGYWVvFTsHLK99Qwwj4JmY1nPRQZpW",
  "key22": "554QwLTfxtZeBmUiSDorsCbjxCv5jQ7JGfUomZpvC7XzG57FrjNGAWgkR8YUHBFHxQJwvwjV44kFuyM6TWTwWVnL",
  "key23": "4PSHXeFsjuJ5zSQUdmrTu6qUC9ax5644TdAnxdtNXhRin6LG8KEetL72uyjucSnYvwSHpn7D3FGiVEHFASmzjRve",
  "key24": "PFWNYTY4Vtc4dLa7RZsXvm7qR1TG3KWvkXHnoEA6f1sxsV3L9uHnuBdhdzS7Q1QPkvxhSRNiGjC36smEXPfWs2f",
  "key25": "wfV8hEuaiTR59E7hsvwTPZcBntfZqTHMPR8E6EV4E6deUSRZs1SY1RhCaQj3X2qB3zqkj5eghEfXUpYtfwLnFwz",
  "key26": "HHqU2azugYJfdFkKrXpmxyZm1yCbw1SWvfgqRU3MPeSVPvJEW5pPcSoNXFW4vyUXVgjhx3oRkZJ6W5ftiRqCcGe",
  "key27": "5bwt4DrM4e2jtMZ9BMF6nAgXGF4ZSSG5i8tLZAGUjXZRrEY3KE84aYnwcKoGc5vLuMLzVVi9rNdBQ5FEvTiEBzbJ",
  "key28": "5V9ZYVfpujnMjFfq6sH9n2FjdHMjVihGthfpg5fn5RbaKuS8124Nhs3LNciGCgwYXTHHKGbwRLDwnnFK8i1zkZ6V",
  "key29": "2EPRQ9jRMZrrknngJmrXF8ctZ32P7zgTe4ySYHbfjvGiv2ZVJrMw4SiURjGFajhjp6dEN93QUVVCPhc9EuGY39PU",
  "key30": "5jdEVu6Atb8q2cZmmh9NpKxuTJ3JmFhKGZfTLppyR798Le6vjNzrrAkecCngNG5n53VbnRabJj3uXhhj2McgaGjh",
  "key31": "4yDWUTpUGM3g7QMEf2woqbhAfpZVdaDp42fvxcq26YJWkXstpYZr9CzYamm1CX8efAUeASsAarph7uHQARhzfSLJ"
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
