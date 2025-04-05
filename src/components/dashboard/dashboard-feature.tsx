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
    "4EFJxYFDhRxUScuMZ286X22f9aWBjm8xPgxLipGv4iWyq3FqkdDPYW8wF5DgfAciqgc83Wsg9HBkfrsjnVFRV61E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTE5PtKRVruxoWhX2RUvmbEmT9EoVTANj3H1DK67qVa21aKo9expywY6qmAR8MbKb5HEy8mH5mH32dLjL8QZWhK",
  "key1": "59G81i7Sf9NtghU6PHUEGdHRG4pjtKVUdE6974eVrTL7Rk1v9yNtc4twGdgBhv3PamYff34XZ7t8M2FaxXqkC6bu",
  "key2": "5TkUFgY5U41N2GtVGFuzb3h9Sj1froVjBTEoukVSe1jS77avLcaZi1imeRHz88d7coEQ2M14MrCAzZGsc9FBZftc",
  "key3": "4Q26GUHTNuYXsWJLUZbMseYa9pkgwHYFVesrARHCBycDVAaWATvXmaA4JTrnZJDkjnTRdexwvaRnRqFTqSG4xUHL",
  "key4": "2gj2jz9UehjdAyyZ248p4vSUpbeJYptZ9Tnt6ZTM41GkWZX5ZtzL6Z4GWFRLWUNy1wGEKsBDAk9QohYpCFq3mFkH",
  "key5": "4iM19DDMuyxnpBVVNzXRQk1RKMndgPup6RtpAP9Kk5SPNeWD11YaDqfZEHFAyUtsbyfpeE78eFeEQgzbUPMMtEnJ",
  "key6": "52Wd5fzCFHKs3W868or1NA4fNs6Y3hjwT2iHDGyo4m83xfeW1P1FbD3NMHnHatNYp7x1izNjydrQcv9Wh9yyNhVm",
  "key7": "4JDxLutPXhX7P6z6px4X7Av1pw4PvnehmLKTEhm4YsDoaoTwYqGX8K1mnZwqDGMEyxzeLVzXk9Gnyc4VCwbJeHTb",
  "key8": "63nDMuTCtvYqvpCvcnKxnDynkYH4L1bsWSumm1p6Nknv1kkHC4qahEFWJYb19mEfiFp7KRE6pFfsjpbGDj6P4Zsq",
  "key9": "5x37n5uxwnw821BzVro2jZwiEGP62x3KaVRVpnjVbDTpPJhf2w4EfQqVURo5jViEnMSVfiTik3xW2Dxc9gLp5342",
  "key10": "5VxEKXxio2MeEdcUGGBg3bgMjEzxNZciTBkt5m33Wdginh9FNG3eqMSYJngNEnTxjtvUq7W6c8Z1s7fqHQjqJXpk",
  "key11": "4ycLoi6YaRTFPxji6qXeNDCABevCWFpYQ69rssivbif8e7KWEw219dkiCY9dhWNPddWVKxaz3xusV3qQVDwrppBa",
  "key12": "27dFy5FHde79AjTY6KTnyK6tFvAFaZjffuyTQtZ3r6u88D8TMZtV5XK4xquZQJifAGMC2rHhTLP4CHHCY1p3Zz9z",
  "key13": "4b7jc5ypLQ9LRtJUz2e3ncEL3LhTeRLgmohfGWWpFRNHVFjk8Pxx9KnfRLreveHKvZgGriwNJsLHa7QvzUS74P7N",
  "key14": "3E7xsn2woXBKLuP1muPmaKvduVYgo6bLqgjQu2zTqmfCXMazLttvYtjDQj8ouAw9poSGWUyHE3evPkqaXLHqGjqT",
  "key15": "4Yq9kdv28XQ1UDo9sfPECx7F8ics35ry1p2Dp6UcqUVkx9Z2ASHNr3EtqerFy1RwuX5QBCHYn5N3jNWY19QKMXpY",
  "key16": "4YjxnGX4fffdY1Yc9Q1G4bzSBzTrXePMYK9X6uiqjPNEDdAY8Yqf2QRYnv9aahLrAqcMgEW3ZTNe9Lh7NfVg2egN",
  "key17": "yfuQ9ZbPZJBwVKgFFC9x46ot3ULivW9y8gx8AXh1ts91sJLc5aFdUCRbKrmVBzcKJYctBkUXzYTQT1Ls7o4qb8W",
  "key18": "58nxG75xvy8bVPSg5uBTNE4jmLFF3oKVFAiq2uZPADpSPkQyTRabo9HUpovBwNVjkemoksVG3J9oQf52F7GjLzop",
  "key19": "3KHYKKg45hJYPSXPv8YVEb6USyv9TS9jJpcKSPRwW7HmPr2une75kFKRK69Xb7nZ1nykH4HHSosHJ8mPQtroxSTB",
  "key20": "3SnXyekoG761GAJJKjqvV9d9tg8fBVJmdcCh3GWLbL1YTAKW464uk8xufXvQ1wtHcU8GqMEv3KvA6uLeiZtPv28z",
  "key21": "5CJCH7Fm3KGesXgd6zGmVocrVu5jPiaJPAZcn6EiGvHpdEfthNrgzPieRoFCreAg6P2Lhvzjf3CMtcXPXXNcHYJi",
  "key22": "kY4GUvCSkJg2Q3AeFWDD3reY7YXnR33Qfptp5gmtGfdnqbdaWbNDQs8aU8oQMocHanPJyZ8KTK1gPLMfYP4LwAo",
  "key23": "5E2C6X8pPNgrNbnQ5zzqESXdTybiLPdzc7onBnHRPVUH3nVroAEU25SNt4jGXbfbVZdcJLvPmm7YriA3MirGpuHi",
  "key24": "3C4YbR85GnrRxhMpwLV3AwAwo6XrAGP9tmnwXrjwBjju3kaYWS1rLdQvVArecNNjX85BgNfNCC6P6Qvh7mbCeSPw",
  "key25": "u8gTPN5qYPUY18QGJtXDWMcX5ytX1LubKfDzfKTLdGMsLRJhdTCqKPiosVYg9ZC7rPAjuQ3QpQ7frMjUv1mkgES",
  "key26": "47AwAQBU6jzRmNg7DwxavgeDu9gFPbQgz4wCp6j1E4wzU8P22Vha3DCbmkseToYLTNKVQk2DZEvWrZxVivXu4RVg",
  "key27": "5AbDaXw5XuxJhLXQGPioj5cAkwhQfEia7ZruAuahYSUuJeXVpLxzUvyDeCmqiEacNwbJkDJpAVgtnsViKDYdyDyX",
  "key28": "hRkdWHVJs3gHdw6fqfXJ7WQweTXY5vNWaLTMbyL6pjFHkmp92KZK4XXbWbHJBURwDVTxeQm4tYzFXrmU6SQzjWg",
  "key29": "5xrX5SF83fQFFxWKsyp1Dr2Gfeu4nzePHz9F38EYtw7k1ZPzuK1UV9JjkaE49SLUnFw7zQUyvJgqm1qZFgWVFB1B",
  "key30": "VnQ99YJxtZ8AzJyGsjjNsyTByj1Ao12rXzq2WuJc51Nh6Q6QxsNMoQq7MUEgfwXk8QhGonBL9R23WSNDP37KWhR",
  "key31": "4zJbYVLo7UXbXUHujXXhE78JfzY2YaM9t6cjyBtpwFNrPDvC55tkor1Vzt2WYUt8xpXPHnX7v9F9hFiiMbEb7Z7U",
  "key32": "Vgj4tk99P4pcNbFvqc5G63w9LfUeXbDoyKFDqpafvqaWJw59K5gky5Uw2cSHdafqmEVNgvhyZMSpDCxZ2drcs5z",
  "key33": "22GqMUAiJHzu6aUWvsurFNkkczQUNrKjhnjctBeyqRU8geeoSDMBRRQ3rbz2NW25qYowmGH3mLjDbkY4TVMj9b1y",
  "key34": "2M1NoS93Gfz19DfzrmfENJvb9ybV6NqPYgT5dY98xMtjJ3DdBCc37a8x8imyMUZPfh9Tr8jhjsDRyLKUy9bwiRXK",
  "key35": "2PiC2GjSeFuv8QjFHH7sVx5F6wcMmFwjA7MWxaoX32Scc3JHtkJq48Agbrd1k1BFx5s6kbfSaYZCvRz7N28PzW4M",
  "key36": "3i9JqwxJtxCCDkBmGBiL5RGBRKGViGExau44RhhT9cH2xj8GpHFjmEnR1WzLJGg8HqqXPdeFZKwAFNriAkfxJbp8",
  "key37": "5XndA6mZyGtYAdHKQLLUpc5gYzEA1drpX4v6dyHjTCCEY3SBzuYuMhmgMAT3bwo7EZmCpLmFKX9qoJWyGWtMXr4T",
  "key38": "B3FisSALpDLKq4SevoMSczxLgvyzMJZ82o8UkmdgwfhGmaGPAsZe5Wv3i7X6h5dZq3iZgJsQbsR6Z9EQcf59Z6Q",
  "key39": "bH291DE6p5k2PaD2sv2aoYPmwwZrAvjdYuuqhsxTPHHrAhBnz37vJceJZhBMXyaCra9afzLhroGfp5Y7W8Kpoh5",
  "key40": "ByiGqKnqrdtpKAQiPJnGLW772A8bYukssdhrTrqC6G3RqnL5miMST8M8y9N29yeoCxPxzQa4YyfSbcE9mBqZhdS"
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
