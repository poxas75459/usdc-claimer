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
    "2pr3fEoaqzEDh6jXh7J4M3Jg1cmmtwA7c34DiJBTpvAyms1eBx9NjzdirykAqB6GHEoExRYhzzEad1A5S2gpzAYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTAVxG1XEuxPggVUnoZDmSQPK9jrq7SoBtyMCu8vWg1DoFTMuNZUrpB6fvpY8DyybCyNAGpWLE8gZvHHCj4MESS",
  "key1": "52mCPzUjFkV5gBDSSzgZSe7FTJqs6TfxH6x5UMgUBur9jKfp2wECioGZ7smFQ5PNfEoYKHq3DWhpYdXc3CtcbtKv",
  "key2": "aZQo2H9bT7QCuaRDWYGwpesnRd3QZktjczjSvYpGsQjTH7sqwhKXzFbCFSukLuu54ot3pC3rn2zNY8d8MPwmSAr",
  "key3": "2QGSWZLLXrSikBWDuLtG5U1867AuRCyMYWNWJ8pWP8fdDJeV7UQZR6hA854GgwmHWpbtUcbPyhkCZAcaSq5F9SgH",
  "key4": "NDDDH9bV3CTqzwVgqNiiheySQcuqELeTViYeS1ydnchoGBCJELB9Te2Ery2eGCW6aA5e1L4zteKwYNBXAJed3Gm",
  "key5": "3UuqppEFwBeBAnwXSbGthqaj5jJpcsH9ikXGj17nW5oJ8ZNJZtgPnJVa5qcpYG2Xa1iFUPneWdLayWDQRotcDLfs",
  "key6": "32B51Gr1W1u6FgBhz8vyx4sZvMF8oSQSjuGqF3CqH5XAV6byx4QxBtDbTF4GGDdv78HzYC1Q6yMuq5623kYu4sXL",
  "key7": "5v9jQ322qejSxuLaCFKt9JTQagVbZgCfkstePFHjHYpruakSxeqgKrXpQpTZB5QN1k6wXiSHRnCddbSyVD5qZ4EQ",
  "key8": "5coSpkmATDZEk12epHzmVcB1Z83VPVgLCB1nBD6mwHF4dyrwCKSd9vyNef67msFqxUYdnV9tas31gfhoUP84RQvi",
  "key9": "9vi35JqZC25jQrRjEfoguX6KVLgdPFDWTLM1eiJ75JuUQD23PXQk24XWVS56qGq7osGVEBqYa2TUDWkgGSstBK9",
  "key10": "5DKzmUd2W7meozQZgBueHBN31rG3xyX5sHNHAWV62T8qQLNfagq1iTHV3RR725uEty8pVPcJBRFD2rAnSjbm2Thz",
  "key11": "5xZbaggnmAsq7tKz58HLgBnrb16ZAt22kSFsjuLYuApZvEi1oVHAmDiLjZ4yjUKgmV8DQTqRjBNFMN3mx3ryLvTb",
  "key12": "NCPwyF34dwyPbKjtfqBptX2T1CaxixvgZyyJV8oLvvq1zQDM5gHkY1dS1SeyXKHHkLwHVJBSy6h5CXHgkfAuQGF",
  "key13": "4Yn2RZwb14BE6v4vmptf7h6FVrtLxd8P5u9bA4wafvTcwPzcr5hEwgCVUQPvpAQPMzou8h1AeqkTFbUNcu9fXLwJ",
  "key14": "83PW1JVdqmvPhuhfZW7w6e2HsEfM21bAmRuLfLenQHe2gPTspBYK1xtS43XH8rLiFTWgBxMAswyqhVZvUsfMUTG",
  "key15": "33SpVVp2Wg1igFgFfYfz7qugE3Wk6WaETqaBiR5vcENw1ZEmHQTS4giLdh38d8LMQuPa23eoTAYJ7E6JDdiWvYyh",
  "key16": "4mRfa3hQBCKQ5CSbaiiUR63RZu37R9PBPMPun54rhDJoz14tqvqdrZjJRTyrBkgMQwJwMU5jyDtmuZcX4FgswFT4",
  "key17": "h3iuPv74V83CNpZyBy1nMqKPJBq2VrLewd2dqX4FRmL5zcivqWWFz5h9i2yExN1PeE7BxLrzFWKugDYjDM7hQN3",
  "key18": "3ZyeUgk4995ouw3XEJ4tzZ2AgiGGPijv1yWW7WDTUqNYjcdHL9TwpS1LE1t4cYezL2rK9pVnyHNw8tN3pBeR91hV",
  "key19": "4y577RVTkxEUYiKdES5oyHFA5fwUdRzGNMcyZ2bvvRLyamRJTBwEyAxLNAyjY2F3cgxfs9vSvuYUbHXayVJvm7nq",
  "key20": "4fiwLedxjGzPyEYgehRPwhDLTY6HSN4VHuhaFqcvaJ7VU1dXdEQJgXPoE6cSWcACBjLWEP5TQVbwehXuWZ8ChaSn",
  "key21": "5a4CCisL7d7ahy73QbTE82hHPhLwUQoMYBGqQ6h2Q2985mFTbSaNdSK38Cp74ogCvKjCUfvKRLjyU3LrQoa5qrhj",
  "key22": "dehbFbjkF3MZrpS6vGQ3XfguY7Cj1MVDneYcyLb5JjqABXwCcouuXWUCLLpyo6RciyXCVTLfTYzvGKT2rLWiuSs",
  "key23": "3SLztqg3FeFVoDsCcbp7kgWcG6vcUkSNQuTfBZ7Eqbg7JMmc6PU1KqpoPrki1hbcKRHUSufGPwDA3oACRs5w6igm",
  "key24": "31wCKJaiXd13kXwVr925vVqJV2QQLGo7VtAL8SEEDuo47Q5QB2XL6BrAYQq7Y4CtBqKzBzmmQDkgKgAhj8AP41SK",
  "key25": "2p6ei2XHx5xAkZQuDAkrRDn2Louz97yek3uheHfL9vwuuUiDBidMKnjXNyXEpz2EGQQybvGk9xg4pAw2PhdH3dVT",
  "key26": "3dSeLFWbqM4Q3dUDQGCgqTYKKUiejjtuaoU59PQoYj5UM9LAeMg4nRrvShS6WG8CfkdjAcUTh7ifwUwuBvfeTXUp",
  "key27": "2V74fneicU7B5ef4YyMECVFh5qPCTxQsiwJDN21pWoUTHiAg8KwRrP3FrPKwSiY9twF3Lx5BSFdExyJGjsX1Ankv",
  "key28": "MFniZ75aNfXw4H2F7yNZxmLyiMXkT75aj5y4X4ezoJ6jaUu79yZGdcQV38YXkyePkkMMMvhRPpzTHUG7JacSkHz"
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
