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
    "5wuvTmSnsfAqgfdjid7FeZeSDzcSYE7VrnMtdK2n7AibWsPYJtVoXSdHf5K29HCCEpmkjQQuwNMrHb5UrQG1qRUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjJjBjGnfufQtJXbBSNP4migJYAMKytLzvqJ3Ao9FPY8SJWPQk9weW9pApdsbRF3uSmwsd9xGcCAANxBUFqU2ZH",
  "key1": "4FNptRCVuVDp6QPUfsUnNkQULCCSzxSmcCfJLWzZeRWcnpMDanH1Fu5XLhVtQthdDPAg9WM5p2DTkPVP4QKEhV52",
  "key2": "q1BjhHpt2w2jimrc8Lsa7ndGr4jDq8PqG3YLurAuqQMnh2zb82vKN4W852vGfkoaDa9NybsH3c6LkjoSD9a2hQW",
  "key3": "2J9dVXJDotVesmZz3BPeLQaG934CSaaF4KXyAA8uDFQ45t8uyjXKZqsKhto6KU4AjmY1FHNFMMw4YmfMtioAKZU5",
  "key4": "3tie9vYH4s4K2GRJtQukHYgq6wajbZ36yDAxD4NcgTLKkcZTELdDJJbXsPUFYEmAysX5tFGvSGBpEVurngzTerVM",
  "key5": "2qDLj7SRWff3Q59ZCCSeyMLHx9J51z8i4FyFMUxZBqujBwDsZ12qfaWe3gfagL6nofeRpgHCKHBsmN1r5Rm1TNSF",
  "key6": "2R4wrXzJXLYvZwzRfBEyPi9gJ5keTgo2dSjG2akmog1DQ7JdrceM7PD9tfHqKPindTW353fycEArH3B2LLJRNvEN",
  "key7": "FmxLYJrTUzwKPCxHpgUM1xhKhyWciA8b2sPhdA7CBxtStgGNbizVkp5eLpGVH3e8ab3vHeWreBTM8oK9DfVcoze",
  "key8": "cCnoxFihCmTDNQTNt1PBmLfGUYsZuTjHMBHd4aktLwmaroGWccpvDYsEWR14Tseok8iqXMxpkCUnkrr2QjMqTiM",
  "key9": "3RAekV7JKDtCeJZDgPiFa1BKhq4kkC56pzVcdxTBLt7TDm7fGNBKXB5KiMYFw77eXrCquDU3X5Rnahy1YqcGd7jD",
  "key10": "YAXCZjtpXgt1c6PAHyLE4FF1nGUS9kqzDpZH9grEEs7AMFUb3tPZDMVN5tbb4wdomccrZTBtMApWoPcGrdfgtcx",
  "key11": "4Aq3kJmAeMHcUAuCkRqvRW2iL7wW9F3nv97bHAMHGyL8uuFnx5i59aGY4GD7YFJ4C8CFDkj6EFbw3adSHo3wpbGW",
  "key12": "3m7RrKAKjtHFQEKteYLTdVPwkdghsapbKkgmRk9GZok41KuMrohLMWp9x5rjxUc4DMLgUmc82qNuezX5jpYbk3ys",
  "key13": "2XdK4s7DM7tkCNvTfwwEhL2P3pfZ6uiSBk7QupU3hX5zE9qtFNYXnAeRShCqprS48JdRswWddkC4PFquvq2jftNL",
  "key14": "5y2sMg59EgVx3Np5RLJG4Wc6NiJM26q24rpDt4W9Fq7GRWjbGhjRigUY4n22W9Zo3EHDNpxV6ZPQFc9QotXhxXCE",
  "key15": "33jKZjH8JEaaZgSF1uFSmVHgTv1YDVXmHKVYKSyKH8UGtvyzsRc2u2Nx9yyR5AxTVitsubmLJvZHqbJXbGBMBKiq",
  "key16": "2GyxkqBXcRpu8zJ3bZRRQEAJzDZE54a653464kj9P8t24WMH8sX3mnYmdhCn3cGeavNt6TaiNsdJRAHANMPJEPzC",
  "key17": "29tZdmA7Yvb8ZaXVyPsDT8a67Q8nCfhsxUhV7yt1W4aGHtAWP81PbQMyoAx43oCtRYqqx987JowGkSNSqyFyzJ1P",
  "key18": "5ksjge1yZkrdbi64Xc8Gr53KK5SwZT6zLmGnR4Yw7HsUAFMcHzcAZWCA2sb4sbAPf3n72nBAoBiGQGoa2M9QDDMe",
  "key19": "55Xhvgy5x8isrgqwDKJjVVFKCL1T2dxd6UbftusfSNfB2TBnLqJy35Zc9BKQvAkDC7jvSm7kCr7UM8HaGNsYtLAU",
  "key20": "35PwqDu7odxtr2faHabmgH1Lspxfv155s3H6PQ8kizxwhq11XnYCkTqgXiEJo7gni2mn2dFNMW6P6c1QcAUUUhem",
  "key21": "55aBEwwgMHKqMMhh9o75R8gYkwmG7hwna3maEmoQbhomA1NQ1L7DKzd418rF4mF1x84kTPHVDSwtGu8r5sFBnD4Z",
  "key22": "5HpADE8utt82ZmuwN3TUyKnJ75JufeikzfPCKf1xECHJFasrb7awLZxdTxY2LYZUdk2SZhchaQcmmWy6gXZ3GuhN",
  "key23": "64fDXWJAwqNSAtUbB4FGcfeZo9iTs5deX4zCYkX6T7idVpU7uN9LfCCXSTTGwh4pcbpqFuTdmqTfxfnaF4i27vQK",
  "key24": "3ko88yNUfTU6xamJQbSfBTpG7XQU9q6K84sYmDYD7aUe6T6GuofncbBC992mmYwSYPZgn1mXnq22PNr1BhNWDkeJ",
  "key25": "FUGWaV3oJ6qewEnzdiDaTj7iQJbwcfs6GB7ERMVvkrDCPA5SkjR6pqhWoNGqubbwV6pm1B8QgwmcuNAeeeTq9kn",
  "key26": "4zjPneYkxvjzhGAo7Z6QgR3bR97YdfStj5j3N7f3o7QqxYsEqjXz5wX7wFop4VPSPkdYeDsmdVSAx3G8qJ9BARF",
  "key27": "2f8vrp5N7RC7pmmcqnYzUsY7xUk5X8LDdJBXTm8Bh5frZdqnSGYw9wmeMzTinMDY5ejQXa9CvL1FoSWZFeLpgFMN",
  "key28": "48VbuQZPzRfdd6TYuXoQv64dfLGK4VRHWn5ZBNYiiM2qjFMkGdjcXkmYcBJz8K7EkStZzz8U9Rf8cvdPCvHVh5Ye",
  "key29": "3QjAenJVPyztkyJrAB7fjaWvcs9CJ4ggRQAmKAAgZfkhysYzvRMwb8u5ZBKi9CoXB8CxjsXxEchA1EkybGkFfTos",
  "key30": "3cjWkG3wJQFEnKRCMDff5LdBtePuXw9wJuQ2yPXmtyuj32wQxu5GLf8TMTkh5u9iBwEcdsVsPSAapS62omgoHfx3",
  "key31": "466UA35ZtDDEhn2RyCvbX8PCqQjA9Pzn8vvjEfmFmU4UGY6mAtggSE18JhuxL4xWLzzgPx68inSJxvnehjKuck76",
  "key32": "2NevYY13BYdJMqb3j3FabW7fxbw2JoAqjJi3m2xEN4gsrBsxF4Waqcv6RjEPJFhEWcTBc7sEG5dDyWNufceZmbyP",
  "key33": "3pwMfqYYLSH5bqweVUeq9GvHHBCySqLxyf5LjCwofjcCR1PETUUcE1cW75LFzvtrgGM9uv2QcYv283ycPxzXgof7",
  "key34": "3AR3mqSA4tTJhJfdpLUsXoR3K36x4HPDAQLCvtkNwDXrNLQTsgivTVUXxtEtKG5Z4sH8jVCc9kkRHEh6ZEXVLjrB",
  "key35": "4MwQUNJ7huPNCYUcGHVndEjj8djoqaP4AJ9NdNbKkmzAVP8uo6TgnXvwZn5dgSKaRtrjG7mvdW52RJaHgR2BFrBX",
  "key36": "5jG683MhQ9zVC6dAtKzUhEz2t1cKwHe7XmpnNAJGVg52VRYyzganwyv2RSwxRJptQc4BaGTr77DLqLToFtAZpGA",
  "key37": "5Jm8roWxYBuEMud2dFRCD9JfgYjeKzwpMtHoyWzXuRQMXgGtvxXBncySksnQPFAPHgypE753QWAb5spCdwi6axfj",
  "key38": "4SmnwWi2UN6VeeQzse8V1PrKJUNcmcjQGVfpnxeuuVMcEjKjzFpTndQmKj9JxB7qwtiwj7VGPD9WjfoQuJ43sgZH",
  "key39": "2mnwuPQYZSemnfYn5MRKhN5YN1LMM2WX5MMi7q8fYA83NGsR423qM6MU8qvVd3Fa54ik8BA8WUH1rWGe9fuBn3Qc"
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
