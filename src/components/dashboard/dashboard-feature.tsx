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
    "VsW4Pv38kaNfprnPA1SmJqJqYFrru8K972A56ZtYz3wDNiZ5WDa6TT6XW1BQ7oQyV9d1FZ59E7DgrJSo8sCgraV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmnCEy3fkAVYNdHgxzmFefKDbWk32XbrPnsvEo2mRMHaoFAGR2VLM3HLjf215ZjxkKH6NGN678A1MDXNKmdrU6S",
  "key1": "2N2XvxGDbzeaCRzNCKjgpTmUrtWDi3C3nN1Ce6x4md7nbhVu1QFhYbqRfKmi6E7BdRNgZrsMdUxdu3QG3Gb9k4BP",
  "key2": "31rByvbqnvAppckdQsojgnYoLawhuj2nE4wzjSCu7EEnxJvjDSPxskJrYsca7RUwMQxzHLubLUVdEnhSB17xeaiP",
  "key3": "5aWsX35vPvST8FTpTm6fE7g2FBZK6PQD18DRPLQzxVH4iMFQB8Kk6fzHJXybUY8T8kfApLfTYCjFDbE6yvURHUdP",
  "key4": "32t3bwzgjHo6NidTMcbn8GpSrQtYX1GnHrD2x6gwwLTegNrXrzu6W63j1cX7ugBMpSSLq6qqfgo4F9fHEGfHEfpH",
  "key5": "MFBoHaiQh7f5q1enSkQuDMW8N2CYYcQmF7Lb9Zj518HCMt2rVgm8nfANtAFByzYK9cyU2RVJMftB2ANm8N2WZ5Y",
  "key6": "2JUBrUP1vDxJs8NyRzkMwBQ1K2xQSvdkFDc3G9izKokWudypQHxYKAzWbJt1DjpsqtirEnGG9NGDih2zrj74Nb7A",
  "key7": "3yLEhAJgHeAhPhVjW6bRpTFbwcozrWqpaVQRPKwBCvnJHBtyHFrWHNsfwYDtCF61MnP3yg8gAAVyL5YxAbx61tLX",
  "key8": "3dbiZMWsy2kgDG7t3RzKGaKEihaoTwUYRZv9EHjENdyrt6X2wVa5VdUZiufpyBGa7DEdpfYUzuuJ7j56aPvHWK4M",
  "key9": "5g8YrEBevxU8aFtttMajR4qNzcW4piDsCM8s1ZamXVpRMWAqYR8DhNZTwyDQnfeWB3MTW3RJ4UANVZuEcvwUxwE5",
  "key10": "2pVZqnsHcMKYxHBtuAHj55y6XuvZQfQH7XpY8NWGHoRxoxaXjPVzeRViR3xy3LHtF2yMPbuadyZN2bcZRJfn1GKo",
  "key11": "8TF2dHsnpJo47pxSjtwAbufCULcfVB3baWVRffEoEfG4w1G6SVqTHpYiJFJpWxWc112aiFzVzBY1rgbxEf5pBtj",
  "key12": "2uMdL5mXgW6Y1oFejtpkymAexs4zYiogW3Rj48MwnobH7tGRKLUq6j1b3ijA4ZtaqYrqV9X1cSr842AMayuXdz1y",
  "key13": "nbAvxf4Etu1n3A9kWAvDKj6o7STxHQoKwFyvaKGdAEfvVASvu4v8p8pwpQkKX2aoc5hxbL6EMmFTphqreoaPdnh",
  "key14": "5YQ7XCAgyPCqgtpMg4bnrCMhqZ1FNQVDnjVog4BikxdLXMVnxaAfEv1NWcsuMEuGFr2vUXh9up7y7PJkRMBQdkuC",
  "key15": "5ktnsVdM55M5yQ2Ebf4xYUScAHCJ448CoQ1gm5rAYft9LuMrpp79aF3qtFEHE6mCMFDimWBVjYeeRETxsVYVhYEi",
  "key16": "e51mKbGXzkWAPAfzp7tuscsCQEwh1UZnbTJhSpHcfnLJjuqi5kMjEBoMzigRFd64aEmnGe4rjpgXdpmM88K3bZy",
  "key17": "5Uh4dSRByYhhBBtd6EVwXLKL5wT6pQbGcbi22npdY7pT9cEx2K2ejd5HDUAT3wF8V2eq49z63hVWKyg5aMWpuAq8",
  "key18": "2C1EWHDMqZogD7evwRZ9yfvsEMvUA836gzRFuEqqNAYPBk6ZZCzMwcoCvQJZ5a2UBTuHwa5rFC9Fv42ZCV1Q7SZa",
  "key19": "5knNRgXqa939WtNhW7ZJWtsJi4J2brzgamVN9S6vZR3pQt8yqwX83cecKGid1JYUGDbhCcgQP6rEayq5tzy3EiTD",
  "key20": "37H7EZLyhK1veoNGTJG53EyFDP1qXcngDxeuYoQwXsRKnWzwja6r4JBwfcHLat4VrgurJ6rnpXWWRAmSNgEp8Nup",
  "key21": "5FnLxB22deq7FzV6o4MXkCj3RPxZWEeFgqtUrpeaYHLwR9jJWzhxngc7CZArWwKmStssqKkRE5TLogPrE3QVLERW",
  "key22": "2rusC4nV7bo8NTnQueYGHiFHRmgsZzrkhfMXnFuCioHDH33RKiUZmUZC12Zz3GLYwDJ3VTRRH3J8cXwZGf5D6CDb",
  "key23": "4NrdvqjAEpYoE2ctat6YhfdcEvCKow9rFKYzRJTu7G3txk5jJNKN59PkRTGyqzmgDsZ3ZYrr8EEZB8RUyAfCDHJt",
  "key24": "4jU2jbvsfjAs7hKVH8dQ8A9PmhfSxWpsjAtA3nGkfYpYABStv5V3mXJcT9eJqh63oTDkqVFY7EWmsBG1GngdxWG6",
  "key25": "mbspa3Ymb3ue2zYBcsUpMk6n848ZzebasEKRKAqq8hAUV6PBGQZ6bGm6XsP73W9rkZWqk4ofTX1s7z43JQ75S4A",
  "key26": "5nYxRPzr5UCN7Q6xFXybg3tV3JE8Y1CFnC47CjWcg3d7n8pheirgabdvsvxbJxsN5YFcTWzfxm2dNKeWJkncoTVf",
  "key27": "1qunkvD38ie9kMBx2fXd1yqseD49gwnXunAt5NNikXRiy9D72NYiUJopeJmFCaWKnXjYYrM3rLf6oNNRMoQR9Qj",
  "key28": "5QzLRqrDygRdiLfqEbfbBpVcGCywaZAJTkA6HksgNF1HbfoycbW3q9UcKt7tLwQGU4eDh3r44iL1NQ3UcFrEe9eS",
  "key29": "32rQJUAt8tCotLHAPcvWSGQPC8GDj4otM5UM6TivavaT81GyXLL62wWPy8rGbn4dLtS9THALezuJVeJyJfM3XXMB",
  "key30": "5vbSEuyv2DY6b2q2HP6MPcK1mDPCTnTkACqWUGV46h5hWnPKcqwaxEiSWcxTLi9KEZ5SCit8PJELJM2avxxiqbjN",
  "key31": "2QjK4J8s2dtvtKr3nxwWAjuZRbWChwz5cuRSmLbjPTChJe6myfrEG1f4dRCPp6VwY5WFZv9Ma5i5gZaDAsmzZWJ6",
  "key32": "5V4ZMJEPoF9sGtP11vSfAYdMukLm9zDVdUPBNHcUDdnRZG8ndG5fJBJhkPA8aPjbbH9oeHZDbsnxW2CubtLxTuJA",
  "key33": "3pqnviiYdZmayUcG8bzLXW14NU3fHZmoaLyknBWchfCLBoE2rResfpcdnJxHvypEE54JHkYEoq1ECQMoJYdXLR1R",
  "key34": "4kyMJrGqkfwBFsqpzdee3QErpqZDc6fz1czVYVesxNi2EdSy1MwSgPM8kz82PV8EiytcPsBZ48Y6kzqgk7pvHgTU",
  "key35": "2nz3azFNFdiEH8RM4meN7sZ2Z4ssBTMNsXpG9vmXsh4LV1KCY7YPPQS9rMfp2XN6gXZsbZtCEvmUUuDPPYBtCHPH"
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
