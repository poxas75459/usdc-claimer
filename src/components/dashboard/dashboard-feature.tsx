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
    "JrBCsPYfLiUaZeetR7MzdiSQtecnpS2LXPtqTyG1WAiAxDc2ENJfefB1LWGAmU6XZ8tYv37XTtBS34hoRACGF8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6QCzbPa2PQQfUBtXY5WMWvzNgVH7fT8i6ptcJVjRodDUCoB7xedpqZSrXsA1qCEonBgsWHh2nvwo1GpuhrR7aa",
  "key1": "5akV4PLtuY4ybbXwpRuE3GTeGGuhpn211J7tsv7nS4qy6Q8CjkC3AeefJzkUF8KSY2AxepgaPg6mG6zN8pgxuuce",
  "key2": "5eBrToijsvVzd1uTaC6X6dPWCY5HmRksKQ3kfT3QMpuipBTp3ThuWfGCmMyuUZQHZjHTuLiZYWaCzapeWHhWyTRi",
  "key3": "3eZpFpKG5F7VQg93sphmBnHxYkKyt2Zc5KsojpQkAdrDyLBvh7SxSig4CTcVqCNKq6RLwtT9TearwLm4YcbXn1U",
  "key4": "4aP9FmFS5P3WzimsATTfMgrDyByLSuQNaTZQiNJLRYL3MVh4KDSJX6rbEvZTuYeS9Kh9TBC9m1LRrpXZrKgcjwYy",
  "key5": "mzcyF8gTdvFMqfTtFuGoeEQgEFksKRYpXP48kK4cxtcqNVcK3aDU11fMWNGpQZw1CazTTJuF4SqaiNy8hYYywYq",
  "key6": "3sXKazeGGsiY1wqn6N5FeNw67ikPpwsKP3uZW3vxhqMwCLD4AcWu1swPCf2ZYQ2PD8MmsiVFR1jsA7SbsaSi9ivw",
  "key7": "2BzYkw4ffTLWkV6tFrCcg9g3xXPxdqSncTEZbPJTzQLRVJ4S2qUGT4EfJ2YoRoQSQ1iPG818StvHkWjMsi4K3Xji",
  "key8": "3yF8tDXHCBSkvjqWLffmc69zQoRA8XVCgEXHvHdt2oohLo2R1aQCWUn3cPhXe9k84PLaEefPuEA3uoH4zUtm6man",
  "key9": "F1qbkiGcBVK625dHZi2nWW2hLBHoJ8BT97kx5bZYnW1nwon9XkgLRkBwF4sQNHV7BuTgRRtnKvzu4HuhnT53D5o",
  "key10": "47ZioHJQnt8QZwUa4yUDQvzuowS2WtTnNVggXtEk27oVUChVcWgGRzvvkmf3W3ZKq8mChK6GamdXaUw14hj3m6Xc",
  "key11": "2PhJYTEu8p7UsSsuaJ9rb12PmBpus4CYv7yUhjanCdQMEwtrsxhgrMRRextz9Hk5he28REX24exeMN6Tus4uBYsc",
  "key12": "35bn9pdWPcZBUHTMPDyd29AHLofLCG7pcdMrdYDwKQ5Fhkm4wEJYpCcjcp2mp8jrHVh2Q26diePKXiaHCQFyCwHx",
  "key13": "5dPJ86rpk3MUiVhshc9F3QxjLc74hniEa8PLGUrm1oTVfuUTes5bkFcdSzDXZDM6hdH4wVZRZfwWaJvn92CHSB81",
  "key14": "47v7Z25Euy4gdE6bqUAkPxKehWKYXKPkadpZSd2nKx5fjxAgcvdLegxQuhWt7SLmHRrve8E3htUxtSfLCra3PhEW",
  "key15": "TbML6zA7NP6cNZiNdjfp1KWhrQADQUbT3UoFvQ9ZhwBrqeoNW7Ew131eSx5jsESFbvugdgR9e9HHJyi2PbzXgoE",
  "key16": "2sWnXmv5zg7RdHSDtr2RP494GUMpH5VhNguTLAkrGepP7DzcXsZXLnR2jKydL36BZA5UCWJfhYM2cA9jtfajFVRX",
  "key17": "4hTqR8CCW7fgd3Qs9EGazRffK2mUrZrBm4Mmu86zovqEmKx8M9BUS4LAGbMZ8FrTyxzcrULewPf3AnK87iFvCzxH",
  "key18": "65C6Skzxxb7uWqMfA9wizQqmTA5s5SarKt9brvYmBWedqUBdZe2qxC7uubVmjCc3zSNhinfcgdyiTgfKseMq7eYV",
  "key19": "3T5WRDyX2tLk7AHbpBnScLs9yQdi3LRkKi7TV7jMYQk54qoYE7eYpCgC4zNpALME5ZnTTwegy7zFnYJTmRGsb1D8",
  "key20": "2uk1pxE4He5CXetSYyXaj6tmxZLo2FTftV9Tn2TYG1VkoTbvs72Z84FSjKm6YCdTewN5WxbeSwu1GkcAevMBUm5T",
  "key21": "48ZGDPUVswZEPcgGXaPbDMVYZVdcgF5Tbuy36LPcWVyqbApxCH6J3F9STu5gkRG5U6KwV2UzG6Tk8LPaE7TAxaC5",
  "key22": "56ectLRxkc9oMr5718nMUQNtd9mEr6WRu3E6KmvpPdWDo4aqwsQ6o92i71Ytgb5XFxr8YnUSk35VcNBFkAV2bMmr",
  "key23": "4H91kA3v21HexVLbLFMygGG3QeCrXxSBHUaX9GS7KTqLTrkkdZToNRpKqqKLT36He4V6mW5CGQremZNDE34Gnmou",
  "key24": "42vyybecbF3EaqevsrMMnVQnrZdEHtKffTwwKznFv7jCvZk31K275zru6y95G83chtuqbthuJPB8ybzTf9puELJC",
  "key25": "5ShYuqbzpJLrHztTMN2emWREG3FVYBaDrRziwLGcXcmDMEyARkLFZ98BEafWRhtUZDqJ67ry4Gqo6nesDiV2mbte",
  "key26": "3ayT5vqhXyNHQewLTUSPyBuBc4w51q2XVEDwkn49VEmnHDZsEVFAAqiwhumcJ2mkCQgeUx6KYfqaU6b2rUa4t92M",
  "key27": "8hUwPaqpPBJgJm6dQCujDNUcFiXmvTbmpwaYqMyqdT27PTVVZBGZme8mGT9Rw3qRp6LztPcijvjLfC1We6arviF",
  "key28": "39LfWg6NZ2XLhpyzAiTxTzEWeujKPz1XPQAMLDpecUu4o6diZDDHwrbE4dkVwgMvXL3HpfbFV5PgCfFL9skkiGY7",
  "key29": "659CuiEGxLvt61A78DSkQBqKwbDNh4dNWqVvumSQXMJmp7nGCBWnCWyGo46DwC2MX9ooPyuFAbP917vUYxzQKXMs",
  "key30": "fJdQkGxSkAiUvEb9HU9qvipK99jANbyVpkxMM9c93kebowCyVpDesrsHkzTXsKsFQKCyuCb8MKsGXc4C2yiV8d3",
  "key31": "5s4wfjg2xfA8UwnxYGaWUbEmFvFMEbKF4NtjgLupU2oN8VQfDTmnNfUMPyMkY8iFcA7EEjBzes2QMgtsGSFcafz1",
  "key32": "4G8a9oGkAsTDQSYT35KeSQaJnSNEsUzGXpmmFBdNqSg3QmrXyv8RfpANCeanMzRRa7XL37Gu8bvWHL5tD99NvC1B",
  "key33": "4fAjfWwgE4678jrdLRtXs2jzXzYuyfv5zLGXneuX4aQ4RfnJyxCjDJKwgr6rWYTrnTKe11Gop75MrufrtxfKbUh7",
  "key34": "3Tqwr7s37KspKcMkBjxTvvTeAqrANoTtJxdt3EEtS4EFysbstsjAu8ka4XYZAmAqxubH4kQnp1SnZxrtzuGL4LNc",
  "key35": "3nvhK5VCqyVBQDtMNXgiE1YKZQfv8dP3z4NRPnyA3voZuWn8vzRqRJJikgf8kXHEHpJh6n75GvrFifzprB5Xv5Ae",
  "key36": "2tVmtg4cJMcBATm9vwNvLd4smYNGoZVtV9bgmxpRUiCfrLSWbCwoVcBBEUz43DshjwLrXqTGzEHJj2EAFRYGmcNq",
  "key37": "2xR2NqreNA743ELPmu3Ssiqz3VS7mgDt8FZWL4RpkZfDeuus79eUzg1RxqDpDmeVJUUFqiCH2jpgg9NcwxfLWKSX",
  "key38": "4NfJzYuE4461sGvThh7bWtoLR8XkHBECEJdoNviRcdtRXrNWWVLnqdtQfpaJnW7sb85dD9UXUo9RkvmR7sDTvxwm",
  "key39": "4Xn3ErG1VJ6kFLboHquZxMbh5WDzayySTQoXtqHRLmHs4HPsxB7ckcVE7G5XmM9xB2g3TXBZTNyyJdJR3qC2JUTj",
  "key40": "2J3X4tUG6RjNkh5qVuWVFSpic8nf48reRb7WEf55EJLthr8Z4zamDjXNrvgi6KegNCmKbSMYyPgWBx3zPgL3hx3G"
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
