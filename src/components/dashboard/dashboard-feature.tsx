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
    "tf5dp4XdforjXiQCzUMtTQsPbXHqGF84KhKtxXZAKh8NXj4Gtvho6Yrmh2Y6KT9n3AW3gcehi64v6TgCFWecrBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TpyopkFJoJVznvQ8tojDAMR71pKCuMZn2EHNsxFCo3z1GGLAcvdz5i9qDRUMxtPZPjkyQvwnjDR29SbvAKaD2Va",
  "key1": "2hYo4ahqARPQ9mJbDL3duZSE7Xs9chd4z2G2Fp396DJZ9exw1wKS1CymXomrFcPRnctsQPXM3vxxdzrq3E3sag6L",
  "key2": "L2iPsovR9i6RfmZm3oGDRZrrmK2v5frXhRXgMz4B1ZwUchAPop1UkGnB9Arya6QnGYM2qBv7w7DXcLkrfUW265Z",
  "key3": "5vYdiMYKeQ9JCtaSVsx5upT8HVB8ZS1gmHPHfNQoVP1rsQKg1WkHx9dP87HA5m2pSmBxBaV4CNRMjPqtiEYKL55m",
  "key4": "4D2zeMByrTdN9qNn4dobgCUe73A4XNALeTKUQvdxdTMna6GcdrwT8iV65wBbrDercg5KKsAiEunkXVz9mgphwVnJ",
  "key5": "9UcnK3fv7TYSbdKCmHGR31X6SA8tgTUMZ3aPkPM36BWFUw5o1cmxAyaMWvFQwv9uk3fG4c5z87DzYfMKGUeqSZp",
  "key6": "3SNKXPTG4AUYKobusRa381AaPNCx1R1Jp6ZnDnkdvXnggv8tSMgFaeqNHVghavPNZtpD1KGfEcRKCm1NJvcZqQGs",
  "key7": "4Y2TXuMGAsDaqSUfo7Q7aDBD9WvuqU8bBmnU5CDEb9KTdTLSqFXZvoTQ69acmuK2k5CnGbhCwksZ5a8rdxHwkKX5",
  "key8": "fpf3YsBwjRrDBatQRdf2UvzvmwLzAi561gCoQ9vGZocnwKQA6BAD9gL1cSmjSUV8Jq4EyJSftcK6irEPUpgiESJ",
  "key9": "5JAuHVymtJTethZvJY64pqjCzdjy7LR872UQKzjRHEfUazfJSCVkYYLgEaVq76VPNh8Fwo7Gxp5nsZFMazFGqT2s",
  "key10": "5xuS3pQn9XuF4xLkUjVkbufGNM3cAeUhBBmn4vHtF3jb2zrDNZ4MW2oya1pSV3rmYbhrL7eDK4DEqQHhHrLRieoK",
  "key11": "5Uh5EDhB16RhussuRHF12XPokQVCiJyM51uwjJt3kVJxxkXPae3NTUzArhv8F6QmN6hHdX8ANQRh6NCdC8u6VMqv",
  "key12": "46nbuUBwpwT5Tp5EcqkfX9fWZHTNuikMRkBav9WaHMCaCHZcyELSMmfjjSWhrgfg8kjTMWF2dTRFSjQuCxJvADXK",
  "key13": "2xCbenKEx8mJNJyagMzwRcvGHXdTG9t9R3YPPSeSmwnynPRNDVErHSL2EsuQyVrq9rArMFrCMrZdrFqL9X2k4FiJ",
  "key14": "4zqhyHe8qZ7WSTNiUNfBK9UgHUjEeTB5h19U6DoivmmNBo8wjiSgAroiy2TcfKbR5vL2FT6B5yXKcZ4u9zMYcb7h",
  "key15": "3C3bFh6rPokRtEJziQAqYbB8v8EBpCsp5zjeJpTTC75Fm5aiwc61UTSb8pEzMo6yjkJG37UiTkxLY2ff3eHDhCHC",
  "key16": "4aBYs7yJKZDcskfhbhRRhhJksxHz98BeWJELG7us4pSsSABmB8vNQCfumnQfDNaLDoU54cRhwY8VvJR9maLo4dPv",
  "key17": "5kngDVc8KbcTEZ3KHoS8e1Eifw3rRdabtbM39xt6GEuyn1AhHRdKCSKUKxhFWuCK1gYDpHrQ4LzoQCjYh9BgLtAg",
  "key18": "53F7RZjxAH8tq7ErpFW4C9cPCm3Lbu8385PQ676GYSyefSgjraohrToEMGDY6cAEk2pCk7tNC9HLRvB8NbmP5h6W",
  "key19": "4AGSJfk7LhChzvbAAZuonCUiTWvP8Hd6DUBF86otrZi5P1TjouiQ4moy8YWWFqXFNrmNFwFyN9bMHsu81WxMCSvN",
  "key20": "BjRNHAp8AasU2ZABd1gEQRLRkfPrXoYTLmJ9sUCEAJMNKBmnJUGP7cMKQbH57NUNCuz3gBpGV3bEZAtsUVFsfA6",
  "key21": "5nSBxKGdChTq4fwxuQcRGE2h6Y7WcNwbMJ8FogVjMFbvbKJpVxM4tSWv3GbeHbBYJAAhnSVXnQwAULFMkMQK1it5",
  "key22": "2uNb9FJ1kkGkPmWWS58wrVHRNzzQdb2FNt2tBogoez3GyNvQ3q7DA7vuyzTzFTHMvCaQ9kyg3X8dsmEBWXCzcotn",
  "key23": "3MmavZEjoeTBXgFM1zKQpeifSvFHeWkgAqDePtfdpzJdDWFag7sR7NPg9iWJZKsnjMjnZ4vtSm3JcQH8Niha3TzX",
  "key24": "3LqwxyJ7QKUGaynw5MrGccjoHPKczGAC5Rm7PHYXT7MDcj8DW7q3KbZggvTMH4HhwVzz6yBqYM5QWYWyy7dPmBd",
  "key25": "5GFUj6uWvQTnGRGb3XVaJBhqKkSVgcBHonh9ehn7wbhFkM8Ds5VJhEqjk2cUumG9nEpEvwFuSNsp1SkNYFE2AVP",
  "key26": "2vD8XUGDarsMfB2Xc8rHrgt9AvDYPxAvd6oaYfT6vsKjQu5AruavkLtfZNywwypPPGqit8uApUWEtne3n5kiHCGi",
  "key27": "26mZv11YfED6X6MDEyKXuhMidhr4zXyVaiAdAkzaPmrE4EGkZVuJLPvoNNQnD7jCkagz8qBL2TsbGPj72LmVhict",
  "key28": "411Gwvtca5h3RxfHJZrH3qQPie5kwxMHhEQQHY8he4iRzLsYuu2jXKfcm4VXikScgko2JXRGEE8adQ1FntrL6kME",
  "key29": "3DDhLVW6UbhCoN1dAe1AnW7tURNd97P1YHfyUbXXjJmtBAwgMDMbfigrqFqmbCYGnEv8Gbke5rE3oGkN19s8oVSy",
  "key30": "3foZnsXzmBYVVop5BYtBNq1XBeYtS6XPMHiUDdsS4jYozzsu8CTEiytjj4VkjxBowoe1c5ZGuDkBRR1aC744kpcK",
  "key31": "26kQ9i78WW7ta3y2KmxBndiY3XqNRYfS6d7YuqVotfC48RMiVGjRECa32FoyVDzg644XY5rwsWfjYqvWhW1RLyuC",
  "key32": "gEqx3myXrkDNUorEcB5TDhKGPAkjhbYS6Ca9Kaw39FCPeRJX7BdtLW5rgbYnKJDHivfD7Un2snBAgUfKiJq9kCC",
  "key33": "2BvYaRDBKa1TeuyK6aCP4xMf2GNF7THy73yjmdj2Cf6fTp3FK8yG2zuGiBwANoAUeTESqLLF2WubFNv9N4dh922y",
  "key34": "4M3FbWmifRrKTyqp5srtd1Ren9qivuxDDtxB6GGVwRjsE9GLX1LMNpnVf84QZttQpFmdR1DaUncQMH5zr5jyETe6",
  "key35": "2xXjZ9ZyR6Uj9dmtQhbmFnh8eCrTGQ71bMC3pJtUnwokVFBnxEC71bYEULGH6MV5UFkcH8BBhA6dFy7E1MZD6g7F",
  "key36": "4Mo5AFbqdkeuJxdXRkAVeVApu3m7KTvNxaENsrPTgWwYWb4XJUtyiNnBn12TmSRTg2f6TS1y1qZTiQyjDDnv24W6",
  "key37": "UQcDEZUkyrGkvCoJeNRoxjDrFTyMS4UXKzUaJ4TrzUbwBxfXG7GXgcTy2vxx1VPmvVeN4SZCyBempDMwnvN87aL",
  "key38": "5TiSCUHnaGgGG7QPs2buZwMW6ExAmuTPJKCFZ5QSoi8TKGugXFNUuEKR2o2HuruUjw8xT9m8t91y3nHfVCe3yD1c",
  "key39": "4qcvAthAHdRLVeRP6kM7UyxVF5oFLcYW9EoSrEiNTbctvwk3fC7o4EvF6DZ1uxFXhWbDQkYmTvJ8zT6ehwnvgLtf",
  "key40": "5Ac4fxg49r3YSE5fJvqeqezznyg8YGXmqPRCcd6uBZssqtLQcTjMfQJvo9juT4wgKjTc5wTDV34gUXvL1SchRLa",
  "key41": "3mSGhou5RWpPeBvVWw5oHYXnKf1bqY4YP7goatj52F92dG6eByRSjnqwgmsS6mjtF13uugNtdUMtQYjTqrqR5JNQ",
  "key42": "gJ59TBdWca1MJcCa2eqVqdUvrXeFy3QSdVoB4SLGYii1rSg5bXqmK9BFKS7z8GtJropCudrTP2tQZNDPsFXvF2V",
  "key43": "ci9EJDSiABjLkiZHurEJndCkYCrbGYd6bfQLYkiCQZPd3g2SNHQHvCayUs3zXzY3BCjc6zzxK5LcT7DJjY7ps3J"
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
