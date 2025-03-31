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
    "5mR4gRUBgUscUQBYuxyrX4qwZAbCvQPz8zzW7TKdnrLJyBRVTez6jbHvjjYSJJA17aaYPZZyVGLj8yv6roF7iPVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W2aK4C2rBzt1dGMTB21H6SFhE6GbKhpyYnKD2M72mJ2jxHvkVpHtw41FKaM2s6BVXZASa5SxpvrS1NfbTEgKins",
  "key1": "4LXZ2YFa8fyW6eCcHDUVZieEy44zW8pYJpkwNWWa5LLXcsKF85d7bscrLvXMiBspqLE3EaAzTojVPiWDfLDn5SiS",
  "key2": "3TwbiAykKGMsYLtbnu3x6Tr8NZvqQjnxtHmFLsFBQfR8GHUHW71ZRy9Wf7iVZnvBfFexujdDjwNtTt6zPHeVR7QE",
  "key3": "ruRR6XXMMcjLyYBoDdjbXUHeCvRChahjqnAhFPhkr53Qa8veXs6Zc5ikx3ijgzsPv9V1AU63wae1XgfyrvHtSfx",
  "key4": "587PytC9Vwr4zY4wehFgS4KfM2ivyR7EUCgxQvzXxEM7qFpjum3Z8N8vr5SYLDvDTBfnr3bYu3FvsHqcQuKGWKwo",
  "key5": "2AAKxVHH8aniMP7uhAfwPTHLdbMxfPhFUvKsGiiFieG6S4bhorAVCvP4Vb4wEcpwL3J4FyU1g1fnGvgLSoovzqWv",
  "key6": "485Nt1YBW4XktjEiH4XrwWVxej7rLuWT94bqcLbc4ECAVphgG27cs6gbS5JuGxeZuLb6XLk9GGRr6t9vyqTv4aZL",
  "key7": "hqS5L7bsx8jQ2LJBwVBybYKeDcXdaqL6pHFULbo2mNUwxyJKnF6tiCuQop2dw6wwn7hNnuMUvYYT7cTZ7pxFW48",
  "key8": "3pwW4PiMYrijgBde1ENoirQrZA3dF7sVZWsrRB9XhZN764RZYNgP8H1L6QfkXWkRqjSWiLKkakTPPwXtRkPW2kP",
  "key9": "3EUa3g2wFAKyzrkYNYswhe1xE9126nfEbLTCyfBjkGrmGvxhb5mqX66CCUrACSQ2RUzfkqXEKKoEEeFY7tyDmcfe",
  "key10": "429TP6xZcoD6eJZ9m8UJThDv4yED24SWfB37gbuTD57QXfqmXwdNiraFXDpJHTWtHcwvoRH8y9nH72ZVzVaStPhJ",
  "key11": "2ifjgFuttDYAkHZUVf1hXaE6U3GYegFBEfbmoy6VjiVGJE9YumrasfcyZcyfvw6v6NFDqVYMTm8fWBJhGVB14Dvz",
  "key12": "5NxbcLY2Zxan3Bbcit6fJD4AHWnrt7LCL77R2QVmbhtpFf7DhjA1Sk8TdDaYwS579YxGYvZYwSe34L7XLhMGfFV7",
  "key13": "4MTCg8fJ9Ny7ri7Px1kAEaqaEX8PVQo3Ss7dUFVcFcEVVShxgiHT66338MtNMEUDYDXeFCo9aZf1We82GjP3Afsd",
  "key14": "3cTThCNrFN2xEzYom1NPnGuBVFop62hcz2x9RpJgeP8EPU1LziUJTS2apkYWbqmhsvvo263EcwHqrFXCHnNgfiua",
  "key15": "65QCq46Z97bLKegzwSizpjYyuwo3K6D2DMUNjPiMycZcTX1srC2esMQ5Ng6k6h8WR7GEjyjrnA4RXnyanHgX5ZCQ",
  "key16": "4dFWDXJiVbvvnK4DkXBtXxLPcq2x9YL52uegF2LPeyCb4Gu2Uaapju4NTYYASefgEpkEBnNryMhAXobreJTUUHKB",
  "key17": "CCiZ4nL2oJ91854ZA1rrEQTDBn2f2zwsQDDbSUamJjEtsnTWpvAn4WweEtg5gobG8bYsictr5Vh6mYL5WXvoG83",
  "key18": "3Fsj3E7WdUPfW6owJJq6VXhFa1w4DJe2Rhr9vboeq9vHXPZsP6s4KqhkKj58GYGgz6yqbZF6tAnuNEyfs1UyFxs6",
  "key19": "4wismhzj9qvyK8NyvR1bmromr63c7wobXtYsqmknN54dNZUQ7oDGj9fAHsDmYMcwPuGWhZFrjUvHwpK23QrqKg1y",
  "key20": "3HRioeZMWReYtBg3uDVhh2R3A4f78EyhM3YH1zARPJHn9TkupyVjmgN9WseFV3cDfPub7iiJf2Ga43eKse3bXowh",
  "key21": "4EB6fg4hM7iVAUTvqmSUEg4gA46aazjGW6L11ffJ2EMAabPNovZM6ULM2qNvYSzwXrdG3HV8BCZjoeYwfbKauRrK",
  "key22": "3NZBTR6EkMbdUoLdzubuntJdF7Ar334XZgKWT8vT7BMDemTgHeLZTKhoKvpUSM6UjWTFaLrZ5TnQrf9kp7jRFAzq",
  "key23": "3NLt5LYwExPF3SEy7VQdH2yb2spSmd2JHL9RHvCaDbpWY9tQ3SNN6GsxMvB9biR7NdW6fL9KpZnkvXHrhVFa65mE",
  "key24": "p4VQHCDKYVeV4oGgCpDDjRpFBADawkyJ1gajGU1nm6zTDu3yZyqVREBF69kbDMrBnCEcApChdHDKYX9vzKfV22r",
  "key25": "4tDHjipmfxKPbL5qTLY4dg6X6hsXx3hJGzVganNi6cTWSRwx5Ut4En5jBtBiWswUEZBNjz53ezRNcBDp54ptkrgm",
  "key26": "5VCWpQMjoxVQrSttynC2SP5F6rAvrEJ2Qb5Szjgh78PjgREVosijnRw7q3LGpfQjS5e6ncp2yiSnWFb8JG5YrAUw"
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
