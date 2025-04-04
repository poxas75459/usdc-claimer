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
    "wtvnMYM67gGKTXfpQdcoEbKLN6intLERzcKwx8mni3o1w2cxK6qrxNFZ5MooBDJygx9u5kXzcuTjEy9DztuDSjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rheozRe1F7ThRbcHKMz5RJGfMq6ks6RiNuDFf7GJ3PKGGEgC5Es5Agn7b6xWdmjS3SNucrvYRfs8NrcpkFLTM3h",
  "key1": "peJD5eBWUvkbwg4CdokJqT3DCxks3H58TV3Pqq8HnQ87mG4yUzkLKfaGqDh9AX5snBcpXs6pmvoL22QRXdYhA87",
  "key2": "DRqQpvm5MCim7oL4YdcrubpugNV4BLnhQzSNiEWSHxHjR2RvMNX2M8LSyLmqQCM3aDjeE16FffSAy2eZ7ZY1iZp",
  "key3": "vdP8hH1q3XVvRQE8bY27jThhFsQjyNmPTciDpSNQRMbuxqq4vzwxNn7bNNnbH2ayY9cSMy3BR4uuFetJvowYmYc",
  "key4": "4wUmeqwLhez47XaJhk6rHt3vssx4pRDbC3ByXiV2WFiRDMLggk2KF2RWUcfHMt8eRueeM5TNAaJArM7yHah6tP7v",
  "key5": "iRqiYU1QZVyhpywnEPGjmq1Mnkw9x3SAVAaqE5iFPnxqRcPxSW4JLE42gWycUbHcHQaTnh5TwZuTx8um5Wm8tCQ",
  "key6": "51U3VbAyHpQnkNvgBX6J4XD8hbtMRXoDPhEvfWkvBFFGhru9ayT3Bnym1vomK18enMXd7P9hLduLpLeateMPU7rN",
  "key7": "3TLCJsEewS7LoETEHATczNLDVi6cfd9MqFqDHr1SVYSivTeGV71bYdqvNuxcCk969afsdEWMfhYKQfKjNrMKBLas",
  "key8": "4TuamzSDqJRM5VCZwbFHNKFFRdDmDZG292Jw5uHyRw4Mkq35j4nAkXFGQFpnmwcf8H7E2mQV8DnBiyc3s2HD2Voa",
  "key9": "Aj3y71SVLu51cyBsJheTp7kUXvgQ7nwogHdUQcKDwUBn8YWQqwx29WwZ1WdW2UbHZjCoMvo3UU5wakLC3BVwxL2",
  "key10": "51wwQWfSgaddGPVqh5GucwEhenaSgpMYsN6cXS4zergJUDxHoRQ5evJgJE4CVeHLZTrwPXSB4SzmXQevnwqfyBud",
  "key11": "4aTWqJ57EhbhTQaUqcgtzg1yyHBL4P9DBMAqxckgrddaXrSwA5LWFxrENFVJkTCrMq1UEfMMWc784JBvcM6sZgEQ",
  "key12": "PfMwdMFo75huSBCxr8AMtYzkiRcTwEr3GZWiRtzZe5sGDwJZ5BoagPE9T1Ecve7aqyJeh9zvjnZF9vV8E7QuLwr",
  "key13": "3iGttLmrj1WddUwwpJJn2sKL9EWEiCafd7nwCvVyA6JYG9VrXmJK1u2PwekjQGuEpwarmKvtYzHWfxHfXwc9SQw3",
  "key14": "4WQQoYxCqfTbd4YYYYwHvCmew7oRnwTGxjYGzwjG22kX5TzgcAd4FCGtNUPgD8uBhjt1AzYp7GdDBdm5VriDrmKv",
  "key15": "5yuT1zr6R1fykvXCuusue8mrstsvgyaTpsW5iRZQBCbck2S5AdwvCtTRDxo1aJ7rp6PuDZ1LWWYHhE3YGwGUzoUF",
  "key16": "4oeFhA7vww1UvBM5YmDakmBGz9x8v6g8YUy2KBxwRJRyHnprvVgwsu9rbZQBgXWQmhe66G3g6Gu8tsbCM6UgMKnb",
  "key17": "4psNejHxHWrmL423GNoT1XkbJaPujj6dmfh6zdyBQzVdygu6wqz9653tvggUXSRV2DtqF7wwc6xm2WoWUEQwubFt",
  "key18": "3zz9cJ2bBrt6KNjaBbQNDXBhYREdnRvUNzBYLW28m161ChTGX1mQfQxMuQjp5xp67cxqqqB7Dt3EcyRGY2X6vJ94",
  "key19": "5aM4PmMFENrzbXBepevnYHeqT6mbXtj9zTteeMDhbZyyVvqJdyj2jqjGmBp5o5XgDFxEC9jeMcXFoB3TsXenxoBb",
  "key20": "4vXGQFWZG3ZYxGWrh22PduxjtJ729NA2Fz35nfXtwJfPPvSC4JiYKVvNCSs6wg3Mi8YSwHm7Wkni4aTbSbhvjYMA",
  "key21": "3Z7xpYCivLfEo2MguqQkVUB4ihEJqW4Bm3yaX9bGyC2oA1GG6RMmLLGJAaAaTi2gqiTDtqxKi4hsxpwnaDGZwDKv",
  "key22": "65kCgubzrrHoKwQfThyxeFddpPnf4gwcS4ehZUovUuYaXe3cpzA7XECAqESHoAX37hEvj4UKWsMkfnHSttz8wDx6",
  "key23": "2hSVBXyDHvftDycf6G8VyqY4zs1jaFTHFURVASgDhT6jdzdKU2jt6SS9ePHhWU94PQbC9a7UpaJJn5aoTzuaEiDZ",
  "key24": "5mrafh5iH7gxF7VVb1aGvm2c2QX2RvnYDu8fD57yizfnpjzXMjfcz9Kiw6nEyLdDytMXxMD2dJ6AmjjwQRCkCYLT"
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
