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
    "5ouswkgt8hvmkgXr3xcMEnr8EzB5ZRgsnif4sGdVKNUZxGA2prrKwA6ssKasdiZvynqtSDTA42hTx44kEJMxmR85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q1DcKFfMT2jeaWe7dCHbCAuGsN9Nm1ychGd6E69ecYFmmAVnNfJo5SJXNT8K4kb6u2fCapkXhFiSpGEk81d92SU",
  "key1": "1FbiaEonDNHscMVJ1k23sDUWFuXPQccL6DLDsQnZCQNybDEGe5cWAsoWaNCtrYGZE8LXiHB7CnMnyTHRHdiNQHG",
  "key2": "N4tyNwquuHFYwDXk5hFD1bLz2g4tQWZhCbaW2mw5HLfvF5ZJnF2FF8RRpXYHHLvnBqJ9hcLmqPiYtrM5YFAZvEK",
  "key3": "5bBJtZZjr8F6NZjcJ7meLJVmEr944uZnQuMCgP8nr7kaYYWR1XEwERhffZbyfDkyPFJLyzfYnwmZieiLpm4CSzwB",
  "key4": "48m8XEGf7o4W7yKSSW3PQt2Hu84KjKTweF4i11ajrKrD4ZarvhVgD1hd3M61LpUjjbE16mJPPSKgmH3HN99EMHiK",
  "key5": "64ivVWGRv4F4skvWjXhn2fcnyUKe5DURLx8m7Ds77mUieTTwu1gtaypdZVpLfMzE7nxBpupVSFNntyWcuoZ8TLvu",
  "key6": "2UoVES21BNiXhrJs5YMX1e8c5WzxqwhiiLFRsycZ2jTfKe5hBppt5FyiPBQzYtMZXNLJWDTyYz1NC8KKLHXdKSuj",
  "key7": "5yTAV18quuwSSLYU6Wb1aFqrijiRHjvBMt7SxiQ232Ft8zr9y4Z4zMSryoMXJBDyrtV4LcsUCVj3kQRorBfpqR2x",
  "key8": "2EwWBc9dMGYqCN3nRQ9cAbLBbUNc3qS1LLceMR4ijsXCqz71r9LLBgpPSj5N6zexCLits1Ss89WbU4g6ofcD8yzj",
  "key9": "5Ao2TDY2ZzQjBEbq5czvHQr1kVs3CvJjhoHtqGryGniS29SxFwkucvmHsExVqvhVveTYdb5TGmyn2gbWNUMBV5t9",
  "key10": "2rebLoSfG1ZpPV8HoyD7SRiBF3obDTQBeiTWNACea2wkzozqpb6uuJb3z7f7UkX7jLbmap35wzcoAyVFgWUr6SZD",
  "key11": "4jCHyJanVwbeoBfhGkNQvmX2pQwPdny9qJGzNrLzfeKSVNJNwXVibQMg5SSPtC9ComLCK4VZeeu7GAEfBz33FvDT",
  "key12": "5X5E3CyS63Dg1aTsxvWz2yXLeWkFMtRnGcU9eNapW28Nz4BNexfnn9PEoaG1SmwYaTFFNeK33dekg2uLL7HqUMPY",
  "key13": "2qCpCeVEQkCkVajrtHmraQ5ucqGds4tNGWChfdGGry6Ywg2sQqBAJdwYJyLmUZNgMQj4FoNktFkpyL7MngLHomtP",
  "key14": "2yvtxvqeYn36PHPB6agDYqs6FkbNpxcM9KYE8BmAwvcNmqbQ3LpP7qcWkNCAVUrGRixCMiCz4zqz5LWGcpEUyuWH",
  "key15": "3ZqT63zHiGDr1LiyTeqhj68LxLWwUKc7A3z25hbUEM2TAxXUfU3qjPRY1HGrPZ8fjooNiyoXNkavXmV7K7a6cBeN",
  "key16": "5Y3eURQpaSWKLho3LrhF4YDhd6ie49bi855uDKHYW8BMHBxaMkjXkkNZtngnxArXWJ2yjmzWhshjnZnNogriWJzA",
  "key17": "2cQhJQ8B2hLnhuLtHD8VHv322KG18d2qUtApf6tE9pE52szJL4Q6Pbr2fWcUQt7ThAyUeh5RDmdkyKscjkrCwmq9",
  "key18": "tWC27SpLQHVkaZNErrHLdy6PNGH5gW4VKTeuh4GuZYhkUAyWgJKLjMvxPmDtH7mcMK29WbaS6PQK7wfa5PpGQXA",
  "key19": "2XYRspnecUbyErjxfytc19fnoVvauLXqxgn1AjHTwMyRTmdRb56t4xrLoq356Uuz3hdwXo8aEukJn4b4RyjXAyTL",
  "key20": "3eARedNz8ARcZP6b2ZWi6BM9gxKGCHYzqDk7beEcE7Hscp7Q7RfkauJ14ENEGk2zB2EXgyYdpZu6u2E5d7oB6XGk",
  "key21": "2fHxw5PhaKVzv3xgSFXKw9kWqaC5pxASP4pvuqyGsx5y9d3GBhabDiyAGYyq5DoDMRWqykL2KofSHMPa2CDZUCQo",
  "key22": "4vprsQEab4qnuB9FYGtL46d6xkNhj6hN3wuLNZy7zW6V4aGwrF5joDhGZYRSeKuSX8cnGajzgpApHRGQJ2ps5TxL",
  "key23": "3evzfgngWmsbjWBkoff4cgufePqf65ZqGmLTRqowwEUzW2tYiCG3Zb9Ap7VhksASudFzDFNpGfEXZKFkQ9w4msCm",
  "key24": "3ctMJVWjUNLPBkiuEhBeBEif7aown69N3wH6m3wBqxY6njsJoBi34voKux38STh4Tj3d8ku9W7yyfxsmrxhrgiFM",
  "key25": "28Ht5g4Vf7L4ytL6g1LQDprTPbgEHRiSJ836GFvELRRNHp2cvbb3F8XjDJ8fCQWWg45rPft3AfW5D4qCBGybVT1Z",
  "key26": "qBgFVkUaGML1Kz5KdCWbd8qTGNjR5T2m7L76Kpn2eEM2sRvSMHt9B8auJR1uQty98r9WcW2RepcqB4twSbN5eHD",
  "key27": "3pdS9qqYswXrj74EotkiyCmy2xdR8koTa2RUuik6XsoCwvYbFVkjtXmuFTEt87tWxhTXQQCwDz1N2K84LXkMo3CY",
  "key28": "3yhaa7G5Nxg4W9PGT2n6KKQxpUSexmDXSNCJHWueaF5YtGcsimBvPpm731WedqmCzEzX9yvSEkvxAAHkcFVY8Brf",
  "key29": "5AZhJ4qEuX3TtfaLM4eNFAhFr2bb1FEBuj9KRjvwYpcgSfMzm8dWt2XoUeD9M3Uh36dKKxmQxevGfx3BsJnSvSM8",
  "key30": "3PwZS5qqTurpMYHjxuicGEwEF8AxAEFaFJBQkN9cVZprU1JUB3B2StBtbyydj655FNGs1aSH48bdwsXHZBWq1vBw",
  "key31": "3wsy1CXmjtatJHtLitE9hfpApDqJSHMbWZnxBj8qPxm1MwVLijih4PJWGEqxhSZsd3B4gmq5oRmChwAnxfHqNbP6",
  "key32": "4WziiiR9ZiJEqHagDD3sB23e93brKvefLWRV94TSXTZvaLRa7CBmdT6qDPrKYEXvPVgp5znjFwC4r3dQdwPXpdvN",
  "key33": "qMUZTpZNidgM5pUX17szbRdfHH5q6zMeE6FpeJMUEVnmE348mVsXxgEbrqk5U9Cwt8k5kge9LiDQiqfyipfWWY5",
  "key34": "5ZBLYXWUSkfENg9PAhs5C3xN8wmqNkHk6E2PhLM7MdgpFTHkUSwfcUvooFT1AD2DkPNwdCEQbLEh6mBBv63akC8W",
  "key35": "2vPySDnL5bdGP15aVdLX5ExL2Nv8BE2rwU5oTv4LxiqngDRczDSpkwuvdj14FNsknj6K4LFUvxbonM2NcRHKoC2E",
  "key36": "5fqfopkGFA3TNqYsCc3uEEk8o4su99VLMD5y6KN6YsivPiQz9pB2t3BxxF2YyxshbkQCYC6LHbr4kVZW8wQRPzxQ",
  "key37": "2vDRCz6krF2B6LchSxzAXyV5JTxTBMntjaN4sSp4EXRPNMfb4pZguQJrY3kCxyba8Q9yY3C57SLvVrqjBnKj5ckU",
  "key38": "5XfzL32MtD8MSc7F3dqk8mC4MQXrzDwmE6kzN639vLvHxzcnDSs1w5DHh1DCNnAANSWnypRqA1z1PBqgsovYvrWm",
  "key39": "wP5xcvxCDZgGgBWTJjaXarWtowvFitg8Ysz2mgMXgNdpFo9CL6Ge9neQceymPp9ksMiLU6fPGtRTGuCs4kShBJL",
  "key40": "4rVNZ3N6oBS6sAG2npTPTJMQrsNw3tZDT9wotbS232gLPeHABpZSisVWHfQC7DJ7QYy9Xo4dbnqxW4zAjtB9BYoy",
  "key41": "5r66s5UBBBeGNBbf86wXEVybayR6bufwjUZ4nLqzjMYtxhbb6gvjuJog28F3iFyzxSd8jyiMx96DaixYmeH5EwMT",
  "key42": "4Y1VbmnYNcsae9mpGJHcyXjGkFtoFuAtojucFpNYjDZ6qffChf6ZJDJdFY3h9B57VWyvXhWRvVzn9wnsvd6vbziv",
  "key43": "51sEscVmKxLsmG3cHYNSnPtKiJuGrKKmg6SQo56n4necT4Mrhkj4G7o55sUnhsfADnfPeKudypc1zrUXnaeubBd3",
  "key44": "Dh2BeLk35WLmMc8Zq8JppJLwmpomAMiVZpcSNBoeKnSMtvPe17hXXAWSu5yL8ZnQFsKonRWpx4aEUUmZdGg2aVj",
  "key45": "8ikKVWCFkX1344HaWhX8rmotmHwYjyxdThtFMDSq9z6qcDgemaFjQS4cyQMzXj9RZEaNx1nusXTPjAu5Xjf8BqB",
  "key46": "5CuF9pkcQcnBd83fDFzJtxuK33s8hMRiUCQHKZQG9m8oWZ8XjPy1r5dynMAJW6Vbakfj27DW85ZZWfpdUEgd3qg3"
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
