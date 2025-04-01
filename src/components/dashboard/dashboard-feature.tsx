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
    "3TXRvpxYGzxU4qfAbTzDGA8XQahHP5fn9j82Sc7GNALRoS13kKrALJzkgosf5fwtyQqsWrARyzwVNF5v4gyKePc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMuXkE4MTuaPxo9hm2Rs97pB2wJtvb7eUnJ4bGL8czucMdSmTjda1bsk8hq6o4RhWjGDaag1UdjVwh5w2L1495t",
  "key1": "3LVvw6AjcfNaJUZLZzn6b4LeceFcAN1HrWWnMMWgsx75BqLPkorSjzeB1M3UjTLx11LcjMJT39zdBZR1ngwgN6ES",
  "key2": "3vGXtSuSmA57u3asAf3f64CZJrXEB3STpvZ8TJt7qACz91cfZJc1ThCJ9dcnyjUCTwU3e2QLKD9Fu543JZ9mRTkA",
  "key3": "tWPu5EBL23Q5UWAYpB1MNWCTdWm2boddiLv8LXi2wK4LL9qMDBcu1UN8JXRahaAhHz3u5rtYQNhSYrP6Ge46Srx",
  "key4": "fUMmhKfZRJQXL9fvyNAyVJjaCcWAPm8GMYUGR6NViRNZr8EMWS38UTuDPosDvp2kq2xVtoZeXXnkPxWNEMBHCPe",
  "key5": "3E1GFEg5A1VRK1SsvDucY4mnHVzRCJUF6TeXnUyXD1YacoiHajfA1qEPBY2YUFy5FfxjXFQosShAsVhv7QGCRJRg",
  "key6": "URQkUJysxSRWndB3Sd6S6jvRMNio1dAkQEtWJp7EJJjC9GkiF3fMdeMZkBYkmJidf4T7KCQ3ckFWjipVtqan4ms",
  "key7": "3j64hDbpN7tYAL4sjCW26yoVZo8qfdTqiBfVjUwQDEEGwG8HbMYwibPkJ5EWwB1DXqyjHp5sgCPgDRHcCyC9ogpB",
  "key8": "QS1g2L8FK5GQsJgvzF3MrX4mSB85tqYBjXJp2AjJAdXnVTqpocHu3kzAsF7MmpkqvJ6aiVuakcTufXJtxcpC446",
  "key9": "qyVUrrSH9ySd9gwh6xPt2e773PTtPSjUHJNhfu4BqsctMraSEf3uvwJUQFyQ92JCEGuVYLqYu8Y22p8gEF14QuZ",
  "key10": "mmeD6L6BRY5CyUkW7wP3q37d6B29A9KEVj1pvD9brEmTXggiMpPvUYo7gfoTKzMKNCzcFPBVGviYLBGd2YGXGaR",
  "key11": "4VcwUHWvPBCCH3hFFE2eMVMrhPJSYLDVS3jmGHZRd6EyphSBgqR8hhqXTWH219kG5SnTXeX9y9a1YAA7LpD7h3SM",
  "key12": "48hjzW9KXLXm55dFwYwXwxihnrMpM2A8r8HSwJfut7xUsrE31mnRbozyaTj4CnBJb23NrYqTtXgmWthw6Ande92v",
  "key13": "5HrQC5VszdYHhGAFrXd7JWqR7hDUmr4x73uWx7fEvVTNtTC8wpkyuAcJim7JEHNVujJHPycQ2AMr8ej5LjwLkRTJ",
  "key14": "8FGtYTU7ffnVL9LsknYGrRFkqoVAjLTNPTVRyB6M5LdRXyTgg7bhVNoiWefMU5VGmSAekDgVG2wpSeKpMXQvuCV",
  "key15": "28gcyaSiJ85A22cHRxkom6x7AesPT4MMoLFP2sQq7e8gEDeQfQ86sDitC45bwMJ5UURw2N9woQVjQn7pdefSNo8f",
  "key16": "3Anj8pVHcPpXPKBvURPaneV9CzAsEgoz69v4Wn3A63Q9c9DKQXJ7rmHwfzPGTz6fFQFRw7Fgva8VQkd1X8dvtDcn",
  "key17": "4Y96xurjR8g2WQm1w84dKQsRpEKbTV3yEPQYo3BajRdj4xkTm54bUP6oUtwVtsjN13XMHDAf6fwC7gu62prKMbEJ",
  "key18": "45aAGR1ZS4RRqSLYbGGJaTBotqZmFsYcrKcQHF6yPfjcRiS4Zs3HwuHmcyXnnafnNkkvsgEjUhJ6wiRrUC5FdXPX",
  "key19": "3i5gtQ7guJCZGUK4tdGJhYKwU7kac4X7Km8CDCPtJje5U33oP1pfsqUGjtueTdKf6AKynfseDroP3cohF7Ad2Q8y",
  "key20": "5DL4qccPT9GHmBuscUpjS1e3q8yrU1zHQ2QmaMFQzBA3jvoWFA7Xodwe45DTdLJUNr3DaxGoNeFCTbJnRU7kaT2c",
  "key21": "2jSrb8BwZWhr3AWWuYntv5sYMS2TzGoQyy4pGRKwoW5qZ9yEgFm3UJ2yQ7gXXuoN7CaNr9kfdCn3kWoge6KiVm3K",
  "key22": "5hCWAroqbySU5f5AjJ6Cr8H3QTcTfvdLQiLHUC2FcZd3WHexAiGurQdhL6qFjVxfbzCWWhc6YNcm7dtu3vwYLeu6",
  "key23": "4t3YS37oLqNDZLNqrUdmjEKv9Z19isV1W5vDW1uztm3bbhf66zPN4B6Th1RS6Tmiak6o1jjHaeqL6xDSnrA8bhJm",
  "key24": "aNZaZhKxzChjC95oTi1fcLqMvsSm88XDSM6jbVdXJpqkUdzBPeqL7d9xM93LuqDamJNSdxyEGJ6DJKdtCe7wev1",
  "key25": "fr7u4F4yFicoe4uxqr7s3gDTXMrFfCY9yGwzZ9JNd1CiPrnQFTF1jw6oDT57H29vFz1MXnmV1EnkrbmuqSbWXzA"
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
