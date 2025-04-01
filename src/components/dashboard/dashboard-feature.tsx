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
    "FBCBePxVdT1aVTkEo5bEjGtxUNFKNW68QnUrvYYPc3cpF1tLGDUk5k4xcLUGKKuXS79ru84g45MFZ2ETBFXKjXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7fieF97Usx8rTAPRkgBxCPDfQNhKMQi1hn7mAbGvXeSgFD2i3TQhvKUM8xMgNAm2Ric37CSLUZ1jms29eCKdhD",
  "key1": "3NLJjai5qEF2Qkbw9C7j27SEoF5XWou8X43fKGNsKmYFZkT2gB33oGg1b4YvPQKEUReMF7ZTfS9aY7KmMgBPBEQg",
  "key2": "13KVCKhodKcvWEPkoiXC9RkkNgAgxr5fEuRh593wMkhWpr8wKMiThVm6dyB6jAn8M4MNAEjdCMp9tXKTiS9tJ8P",
  "key3": "4RDCKrSrPdxYkRUopNF6PHx3jtumVAoq1hekaTikNfbWfE2LyjtjGQLbxgXimx18J99UVo3FrSxmAWHu34QqpdqG",
  "key4": "5HY2k8ZcbTyArT7Gr5MtJLqAkvcLVC6TLqSkhdDijxvadtHsDLnFjhHGq9Qx3hXfEsUJHKavWHua1ZxZzeviXbQo",
  "key5": "3vk8K71gvdasiBDvPqwEPmSaSnx8yCvBtLRr3w7MJc8Ujiu7cnYKziYKxQp2cdNM4zrFCNkyTNDQRDXhjiZGgBXb",
  "key6": "23rNHaeB4UpdhBFjp6Svys8edYLhTtoXTvM9nEsQbPz6jtPUXiNMP3uZT6JrkLAFerQ572YXYo32HsmtQ25YJKip",
  "key7": "M29dTu9cd69hzZ3LSsvpWDpGWgdJ6omRiN5KBBkFJ1EidA1sUKMwPKnfdP52W2bVFNYZLob7zrhRTGrQWT1NHJh",
  "key8": "4Asm12b4PjKUF6p4DKXZwh1UaLRvF9RXzJrmjrBGu5U1Jf7j1S7HfxLM5VGPGoBFqmETQixfAm8oLhYGfKwngLUg",
  "key9": "4j11VFcbU7sbQDY2NpTn7aYRfeCDDEjUpk2HsDeDyZ2fbeZEj9KLv6ijDCDX3or7eNVUuLarLuiagghvF2PpiUQA",
  "key10": "iNehmK589vszC95p1QivXZTEJYvPRk3eeMnEKm5KqbGsd2trx3hXj8cjAmCUeFijJwM138CzgvEtXUg4vsYJS3f",
  "key11": "2G3cPSxw4CNa1WY8Q1dzLYzzhpfBsZTJFQch9vpjXtgP5HK24v2TKtp5iyM7QeLPDiMHzs57RXLtqNHG6CfBctKn",
  "key12": "jiREQxGmqZvjQ9qAcPmD5YFi4Z2WVZtQvX4x8mPrp8D4SuiTrf8uv9STztEfvvLHR5wFmH7qmpYvufCrV3BZhri",
  "key13": "2x25a5QqvfuynmrzcTfowaX3AymTmNFS3mcztTcr84BX7fQtFHj83b7J8dJcrKTQhLYc9KGv8C7cnVTUn4qh9bdE",
  "key14": "4MQCc4M5CNKTEFggjFGkm8RNmo2RMMtf1F5JT4tyfhjfkYHSoBf9Qgy2gALfLxYKzsZFMtKnHdL63CJ5n7JTh8dE",
  "key15": "5wPMiy8c4wR8xNxQY61XYYsur7dMDGiLJM5L72R2n9kP4QCMVmVnwqozBUh11oAigqJwztVfnWGwtqFssWYm2EDj",
  "key16": "4vKDkDGfcxES1icFp1oqsXz7ncGxexB9dPD8E5A2UmGeYdM3HNMwNvFLMH9AkQRxcytRgqLTouSo45ZN9oo3cnUb",
  "key17": "3wHRQH295LMp158Zhqnz4hL8ypHHajxu8ACFRbispVSdhVBSnHutDrGFasZfJJDGYditro6zoYsGGkVQPnryEWHj",
  "key18": "EVXsTtG5sc1rHFcTUbeYuzKJwUhbxXTS15iCo8vDiYhSV3BmHEXZcvgtNuhLsH18aenPHJwx4hpfoQKW49zFAiG",
  "key19": "s7HBVdkQfgSyURHW436uD4UUSiGhfwb2bXuyXqCQvgb6EqgeLaL5iNUiLadozf22Dobzjnw3n4VTqRhxkJitffo",
  "key20": "jvnWL3GyP3Htj471yWQAT6DmkEoRTiuFmrgzwa4QKmcYzBwBqxBk1oChMMVcB9bEmAm1K38uu1pd12oAHQ6XUYu",
  "key21": "2WMqJkgzjvG3KYUb7pBg21bNWvp3R2AsVV6RoSq5bwnxWdUgKBiTyirCHfh2EaVqxB7cT9eibGnLZ1uCd6uWvksb",
  "key22": "5LKffyh2LmBb3JTjcy97y4B3zKqN24SD6S3fMzWm6qAcnYy5rey1Nq221Q1q5r3ib2qFiV9872V58C5cnyq8vcw8",
  "key23": "5Nd8PLoudL3o3QkmkT86CFUHywum8LtKah7retgwjdbD69aqajj6jPVGtrpbxXBYtP76Bv16fm8CcK1ahVPjpWDF",
  "key24": "5JqASEbfhZHAcrdxoYRv9bgvKkQ7nELhqW3Z5dNQrd87vpv7JqBRMvupdtJQ2u4dzU1Vwn9kzT87xsp2vhQRGJn5",
  "key25": "LAEfGkYLPkDnEUA9FG47GmsmTHm6gsoLi9bNFk8C1zxXBwAxYcACXNEFiVhxAVjhEER2ZB5jfKSRaYWhyjsTroX",
  "key26": "4WkjQ4j9ad9ZkaCZh5r8idqgXEYkHU3vCw6GkXc4vFtRaaj6BNUecHdZq8Q3W9wGfu2MAFrDUSh1zKqS7WgruZTq",
  "key27": "q3Me2Gm8x569bHUCyvyhp5xAxej6uLx69BW8SrXhGruvD8pqkkAzc2QcpzMPv5KCEV7z8ujzksB2CdfMTLiUGoD",
  "key28": "4AHf3J9fpwU2s2DMZcopbY5JxrG4f6WFaRJB5SFv4nCGGDtcavTmkBTmtPXzZ1hGCuviq2uugXGG2m5HLHHfW6gN",
  "key29": "292WDG2qbgG18YohZFRTYFJF5ih5mjVPUrWHquf3ucrjJnzy5WYxJzHb3dHzNtJgesaFZG6LJj5ohiRgyM9mfgpP",
  "key30": "t5qXoy2b5YZBotxHRzS4BtwBsC8xCd8a62WHxghDQyKWc9PgU8vuixx9Gp8rNwbWdhu6jimqzbgta5zRqcM1uoR",
  "key31": "3JacBbtTJY1ewNajyQafE41TCsnZ27MtjH2tnSPQvK5oMetZDTcfEBEwnEzzjfCYSxEKyMgbTqAAvAW1nqHvw3yy",
  "key32": "4uF2y6dfMgRELuoGLmb743gG7BDPZFcMhaqsPfL1YSghS2Y5pX6r27tz7gBbLqAskdy5PVhSZHoK5cfQ9zd4fgZ9",
  "key33": "4HNMBWECVY3AgTDQk9K1AaRcCnMYx5rXMEPvtRUqpJ3aPLZQXqVak5XBnbnpAWkY4dVGzPkBbmJPPLVKaq5yhGv5"
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
