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
    "2c4HakywgFkNrfnSeRzXFGrPQE8UodZnLYyVLEzSRYGfTk5n9bS5ZQegKh78MhHZ99SBnCsqBZDQLuFabDB8WiP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bC8ACgn3HHnq9jMvDfsgCVRrENMU4DXmhNz1KdQ5EhrwS88ejMPnGvCopogKWPFAkLTkJyzhDcikCjS69hsR6fP",
  "key1": "4DfmS5gm6hspCBxoqta77kdTVkQsmQVpFjkaGRAE5Xrqo4zvBLgWz7cnwpXEWxqG2wY8vUXF4kGBqipweo1u8rD3",
  "key2": "47MDAzufMPh1nMhHSAQAHmznCubDr3LhHxV6AqJbVbmGRLf75Jd3YmKGFEvWPMo8KRgcWEDnbSpdN4xh2apaWFic",
  "key3": "2EjRrS2BE8ZHxXD9ZwGawT64Q7YrxNrrfiM1a54JW2Ad25WcrGFhs78JRuEiEHcCPQKqXq5Nuz5UHHT9LyvZjkMJ",
  "key4": "3zBQHpJedpcQGrmMY1eEZVe9iNBsSohrU5tWS619dERzNc8iGPCWPzmww2ekeMUQAbnrHN3aVHwbxLrL66kEw8Qa",
  "key5": "5UkB1xt2ayTnv2FCoML3k5akeipiW64xEUKEwhZwrK98FjFmSzCACXFvPzBHdaB5u7JTUvgL5be1ao4d4yw87YKp",
  "key6": "4SBweoThrgRbtvuWuYY9hDxRYd8wd23daPhshc4vfjqMW2w8wH5gFkcYT3bY3HSWyf9owYRoVE22gXe83R1PCwfU",
  "key7": "3dvk9wAqDkfuvdWmY89AXboXC8659JHfQ3XN7sXHoBZ3bBwEJ2jmsjNytej7B6qVSS7U8vJJCn7PMKcpBnVJ3rUp",
  "key8": "5orLFRixeTGbE8828FywnqNBa8K6X3d2kc7GjCxhUsm7UTZCD4VZEMMwAbn6XUpGAtRQ7xbpCLck8qxpB7wKyH7q",
  "key9": "5arXpMXDzEq3cPnxy6vkA3hfrUUrahJdRQahVxFSGChnzoX8Y46PJYt1ZbSzbrFDi2TwQ1R3weugVrdZkvFQ642h",
  "key10": "YonW36r6CAoR32WSCCeKD97bcrjo4PPWLnD4YYqwy33dDjomJi3SYNDDy5vyGsZsVFwZs9DiQ7nwZze8SH7h6Nj",
  "key11": "2oZ6cTxHtMfaeiqBMsXQHCSa5QJWbmmx7t8XyfNXF3eGcyPuFBKQ3Y3ptzJvp5Wba9oTnvs7WfP21te7VGkbFUZi",
  "key12": "5P8WVEGKrQQew13dQkFqmL9nwgym12CQLUnDxYJb6cMzQGLQJXA9X1EH4VZugQYaTJMPe37796cShK8vsLx5tBmL",
  "key13": "2ZqE84ctDwmhRBSeQ6c9bkuPXRKNoFYaXngT5DEYZndK8WdAeXuGEWaHTQBjyDUbUtn7eknf8FB42dSUQpojBpTB",
  "key14": "5acjXkarcZWsnP69oHqDaMJG58ViEadCWSCq4EojRsUe5XsfKSSh7f8V9bk5d974gnwFMvYuiA34RTQhCsBUy6HG",
  "key15": "5cXHQvAi7vMY8U9paULtrDK4RiYFMcyHiYy5mYSc5zWz31cag6C4dGUjzhDQ1NP865PUfbrxe3Vova4S7QmpxPPf",
  "key16": "4nV8cUpKPz7mq34e7BbPw4xdwXUAeTzYsf79VHAvMfawFiCbfXhGV8N64CsX9of65PFSXe1iQPJU3aXMz5Q6hm7Z",
  "key17": "35K6euKvzHC67QQQZMjzGhfaCjgMn6dCC7YhQv1xCZct7o5GoJBki1uhTyThTn3nzpb5JhUZUGMraNQUxqoJCJEF",
  "key18": "eBAH3Hz91UFHs8nHSMpKKzKRmm1qHkL48UjEwkkcMG3TzmkuejvVpezdQ7jtuCZETRcQpPmvN8CHciBhRfER2LZ",
  "key19": "GpmJ58fjGVJEzfEcRKuJDmixSeigG9uTkJ77c4TJkd7sDNsJ7HMaM9NbrUnc1GAcHBtfT2DgTqpa6H2uogEGB8S",
  "key20": "2hQxF2byG8mp9mPzBTt3hXC25wBipUBdWqwdwmRvDSEEJrsUfUGCALJ24JfxJEgrpmnX2G4jdHAVGXCymGWZzEZ3",
  "key21": "31fpjQpAdYNwuNKT5UGrsQrnfHW6gkuEY6UBQ7FZcsMpxJkyFiDASky5d3iD4d8ib8sKsuikW95hd3bdzhUMo4Ky",
  "key22": "3x4hZdn9MwPV6sMDmtTna2zABJN6rGqd1gvaAG31yWKofgCBc3tAeYuWCnYK151gKWaxXZjYw9o2gTzTprDtif92",
  "key23": "39sRwmwNwXnw3CzPyo8qbkgps8nLGLnsGy9AjzyRt2NJfHAvaTZq6ATpBMnot93tUMpypuwbrKahPEWWAnKkhxka",
  "key24": "4zxvTfHebqJ5EPgyTEHniAB4tKXhzRZNMsepvN8cqZc82ohYPa9mvvNCfmuKyDkXM8TC9souPjX7qH9bnrk1rDwk",
  "key25": "2wSqFkmtoRcQuQS7FFcGpKoJkREFTpxqVzjC8Lz8cN4srRJX9fDf1hnXZVn76uvYB6JYGSEUivhP9UusGpo9uffw"
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
