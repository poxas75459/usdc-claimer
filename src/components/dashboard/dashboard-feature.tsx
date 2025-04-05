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
    "2eyr53v1U5MFB5Htp2XBB3bxQGEoSyBAYGK2TeF2NNGjuwYTWXNykWFi9wkNRmstiFFQDU8rnp5WJcctZqqxEXCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGVZYXakSBtsdno9KcvmrTpmgtw5vvp2TQzuMgMpydrYqwAf87uWZiKfPbbnm3xjHaz71izzKDvhhvp6UbA5t8i",
  "key1": "3AGjbRrfH8YqQ6F4jHCReV6v5DvDbKCKN4SKSPdkZUgZaNyHVkn8rxVY7jg3JLfFutQpUdfBwLZHy3cwdPzivgeG",
  "key2": "3ybgduVa2MccxHB5nv87a8DJ6PsSY3vHiavtZCwAWBcHJxGyjUrSBnMZ9t7NyzQnNtNSYTpD8wRjNWora3VDSjgV",
  "key3": "TGBEtZmZHh9tdEfWuVPhAbqvPHQgWUdduEykqhtMU1VpMvMrSUwa2Mmr68fK83nrfLSnuVhrk2jmLAemH9EGNPF",
  "key4": "5EMzEr1gqu5Zm994ejJsYtWdDVybXRUPo3QUBDKYpXpAaLKK257C1kgKtEHqxQjamS15ruZ6UGpKqf3KdSdDmTkX",
  "key5": "2xbKjPeeY34r3a9Mc4fU4dLpJxQr3qwPrrmFVa3NNb2M1EiY9fzN6YfwWWPwA9oLx32RQCarxEUTLJKjioJsKw8Q",
  "key6": "5ydJStbRJBxS29sAUxvAKaFZcA6jYWkhhm3TugqLnFfTyBznU8HMcgzGZo13pUbAr1yvoShGuornNwRXUgQjupET",
  "key7": "XUYcP3rG4iKBPzxq5g8Q9dXheZ52xwedy3GKqtwvKEc3mdSjekkoKJukFRd516387Cws98i2U1vMFMHGJ9FWAsX",
  "key8": "21mDbt9CHVhNvmJxQuGLNKjbnuDaKoikeMaqTe9UNx7JwLR4J32MGgzdqpKJokL3UAhS44CVtuCCw2jEfCibNcoU",
  "key9": "3te9Zijp7xds91TiymJZoPfRfMp3yUpS4uZi9NvFxgAbr17oQQkciW6WjedmJke3NzqgLQ9NMtpT7EqAhZq3yzQB",
  "key10": "27hgEpNB3NMwfXvtvRfD3JtNzntbuEfYFBckAXSTcqJwLHMxUB2LqBrcoRo66k3uXsRcbFKGgd8xrSSek7S89gJz",
  "key11": "UJS9eq52wXxUaJrJoiBsoRikPWHwWKVZT8kYXDSVen7paHGNovdf7Ho3WkfGHYqLam7qPECwN3qXKhFizhRoufq",
  "key12": "3nL78z2MVGas2vqbc3ksFwcUkgXKT9gBx8Dr8Cq8d2LhTFaNV4ZPh6Fw1jf6sye5WLxtqMXUyLAMCkwfRx32xZ3F",
  "key13": "4peenRZsNy28jAiu9AxPZLui5deuHYFYYqeZcTyT4YA9fmmYAjv9A7d4K53vVD8Ev4cyLJTiMA3t3oQe6UeobvLB",
  "key14": "4JvUKRUM58tASgkX1ZVuPn4XU4qk4BfLiz4rvtp9wScm5ywu6mnZo8R13Hp1DDDH3z3Mf9m2MTwrzsQQ88mKTuyF",
  "key15": "LojXydXzraAxX9mGeFYLszVHoiZco98tTacTcwgSXFQPprHaBRkM1Fm2YXt6xCV9PiZmva3cAuJLkWc43LbgQMz",
  "key16": "5UfvPKson5DaWThHeHEnNRBiEFEVYdGVHsNX6zeSBSkHSyra8GkhqufuXdWU2uHdn7zFL9phH8zqVFCejKYtSiLb",
  "key17": "qGyvavurHUiKTVA8hij4HzZAKpXZk2NVi23vR1kauxNzGn7NgWruEcrt3byEemZ4L3CroriqGxXd4eZWyQUosuC",
  "key18": "4Nx7mywUWc4KjQDU54s6zJQHSgXnr1UauJ1GQi9Q49uEFBbuRhr2J8hZ3Cz1FrvA6LswewECujH6mmK7ZP6eZVxT",
  "key19": "U8CZy372cCERpfCJdkpVAY5ZdRjtmnsp1Vef46eiuwmNgZm9cfcbLBZKMXEPD2SfPvvUqc19B17nWnvtnh1kocG",
  "key20": "2bayKnwf8UKWhAS7HefQSxfizzgWLvhTzcvkEyGsYmmgb6AtrXvWv76EmPgUfykkXzq826Dtweq2Pw9qrX1qC1bU",
  "key21": "2N7yubHRHLEnX6whkamHAzTz4uNjDrv5SiN1YX9q3BhQheDYe1AyH7aaPoMUuannR2w41KG1GyQdebpXdVK8d1hE",
  "key22": "4DRg3bgxdNEo2wHHycEtWdt1w7Gs24oXTeTkqVpPPiEGWkgehy2Dum9ZJayfBfzkt1RVo56vuE1GV4BN4P8doXo1",
  "key23": "3y49oqigTcAt65Gy5pDNYAftfYQoXjc3UaSfN1GHk6LyiRrMYMERo2Edvxpz9BcQgfxykaBdmSMiDCPmEGHr3dSP",
  "key24": "5Bo4nduKgtf4ygFSPb9Epu8Vkg9XpmYFY6y8C2saSkhY3WQjw5DfqjiawQRSbf8bA2PbGtsyTttwHtkgFRtE1Tah",
  "key25": "4kn9DRkBJTnq2VD9eN9oHkijrsqPMtnkRV8cBxzazUgi9YYduVQhyBEmgJkQ9pGdVqaGDYJzn5v2V6fYJM9bSY8F",
  "key26": "58QRxsgH2JuqoTKf4yAG8UuJAsU5PUgdRXTmW2kwWMrxRY7bVvjLiLmUQo1KLEYgAkdWptDbFDkgtnodX9pzciHw",
  "key27": "331gBYtAiwECWUjwQqb4FT9zQoyHuSNeFVeyDZRHkzQimq1nCxftAqK4riNNMPr4Axf7iVhjEh6e9H2EeqtXs2Bw",
  "key28": "5b9WvTjXpxVRyxm2tYktyPygWaDUe1SJC74Q8Buy38ZW7jaPNgda55jUYHVpZr7rQ41QsuTVNu14UDxQPmV97SSq",
  "key29": "4ExbKaDnsxnKpU2fpx4JeMnnvxtZihyFW8gJ4ihNMMk7U2HF6rBfvdf7seMuppT5cAiwo9CF1Loh42XueC4zM6F2",
  "key30": "5mXYiFMr4nTZYsDPak5BBqd4GZTyqya1BJtxiaKno8JXsF76Eu7cTjF3fLXMp9Uxj1wYCKbJiGM5GZgUr1BUGaMZ"
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
