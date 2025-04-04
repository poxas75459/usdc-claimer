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
    "NhvP2khe4RNoYqvB4TsJgzAajXzydqCtvephu37MwtcNjYNBBgiZQm3VV5WPLfCCc2W5Q4yQnCvWMUoJR7n4xWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsLZmumTjTNJ4oL4ZtbD6PeoGyHADu8ADRn4mkCePYWJxUfhaDQv87qMpj56dFRUzR2ND4CeYgzyPKgBxuiugeZ",
  "key1": "3XeACojzGkZ61h1n8Qtnt5f28aHqih7Up229mNLLSVngMiesn4B98R8XYrqp1PZG5ECByZR11KxKcNYPunr98NVy",
  "key2": "5sg7BAg12cn2JBd3HWKdwUQioex6zhAvp9Hi5JBzXpF4sLEviNMaxGKQpMqCgWCCQAArKm5hhQFACuViwE47NpJo",
  "key3": "59PbHNqZ2wamcAU3FBxgy94CopFwZSjXhTdZK9UxKrc6biV9f5YTsv1otweS3guoqQcLzPLJdZYbAYKRyKb9N6v",
  "key4": "3jYT5uHbFjVd1jvgUGgT2eVkY3NcGmk65XvjTo3bUyD1igiEDntWBKmsYKdUJoDMucoz3DWnDw9b6VFP6CTvvqjC",
  "key5": "3L13akcGrD2TG2rgrjEq1DsDhZPW13xAvgSMVr6F7QTuJeVtnqvDJ28t4AFqw9xukVAXvuSLkdAy9B2eFentkXGD",
  "key6": "4RSXsRZnDWmYUqLeNuSsS2LdbdsBGgZ33giRfxCikCmMRbbfMnLapXGy5iVv9vt1ZZNbuMcUb2xi8pd83vYJbYFL",
  "key7": "hHhkMRv18soGVaMyrnGbiK5TZUAXus5YGMksskZJeR1zkXwc4FoAQvPU8PXYhggqhWwSvt3mLrSdXqHucBMj7FJ",
  "key8": "2k4RDQaHPg9epzR4iVGKntxdkW72M5aPc49iqHeJpgnNsnDrpR1FUjZa3vPiY41cS9A5qFGzed9dwe9ZkXsXj37K",
  "key9": "b1wqkxdbjd2gzByxSWnXmjJCyPShu1PArmDJ54k31M5hkAVukyHHJrH76Xz8EvBsEQAgD4jZ7rWkcWWwokgzosd",
  "key10": "5NdSeLmNFvUmwqhhzTj4bXo3dwAC4DrANR2bXHE2aUaEumY1qGARfzpjbUoy2mrnG5jfsgvw3ThChH19GNTTL4jn",
  "key11": "4QBaMt4MnurksS9rZHQSrVGXm6WxbzLSmJCUn6dfYt1KeMbbF5dPT7cvzR9w1iRbktNx6J1GRRFuxpXCdAe9NWXX",
  "key12": "34uoiXPVRAgW1e7MrPUqbPZAfz6RKKnvYPByjihB5u5eQWGQHzARhRPiXVBTXT88xTt7CvJM867Wwbr5jRntckjh",
  "key13": "5WjqugcwJJ236JtMw59qWaTaxAJxhdfdxp8orXBBRYzZMNAVnVrjvvpgcVwiF3i9KMPXnmgM5t2F7YwFASB7ouhM",
  "key14": "FKQgCMehxBpiV5UNjZ7kFddwhd1wW3jKNmwV77QUwd4RseUCw9wzAnq8SnZ5AGHgaw4QTfSKc8h1sLRKsznsvVZ",
  "key15": "5QGH5kjrgmfagG2LHMBPmR9bkiqBYiwoJbXaoH35t4W3bRzQuz32nEwWUYastHH5MTMHNrAUnxRMPaFwexpYDfx3",
  "key16": "2rVBT2Y8smqe1FuGW2mJQW4EzwpGGW4gSMRLZ7PQuPFg2uTFAfNrDcopAUGvCff3bW2gXKTPGXWZkyUmEer9NdfT",
  "key17": "2f5n6Y4Wu8K29vRKwsD3WFq8SSRuQTYoUHEpENSvmwyLzrAmMHKsorKYgQzia2UsPHWMHDq4ebGx2Z6WjPaJ1ntX",
  "key18": "3HzEQVj6NHKmU5VH9S1NDFwKZCkSbzZHgMeSPqY7u9ihwFaDdGLpHpvDuMatGLUedDuaQsYMuRkEvbi4ouoJv64S",
  "key19": "3iM2tEn7NdAQ1Ac6h8Z1t8MLQebyYh2sybRXsPx9rgBK5hEk7haT3b84BiwSxg2Y48B9oHE38X8ij7PtkoAj3G7k",
  "key20": "5dvayDUrp1DPRufx6MDi8BcxXEtiiCwKG3JiGmt9SMDZZ3LtAzfG6wLfKDJvPKG5zcweae1nHtxXV14UuBaKVd5y",
  "key21": "5DpuvswBkahDgF1bHy6WPY15cMRoHKAnH1yNUhRaLZWepoLxdizF5qaPT7WYFXZjw1YvLip67LQfbHFuuNZFAWQy",
  "key22": "4BJyncevj7dKduhfZaUJc9H2xYAS6C2g8dcwca5je5V3Z1sCxN4H1ngQ7BAumd4BKoVby22n2ore2rmBSoWHYB84",
  "key23": "624wZHwJrUFE2Hz2mSwa8D2RCQ7DR5ZXn1zyneTKWVfp8aZ2YKhG7N8U25P5UBxyN9QLU1SEs7rq1HHiUtN1TNgq",
  "key24": "tL9Mss38PdKGqTNPbEbmKSwX9rF3yB63mpyJKRZSWbo2pYQjAeJ3QMY9wCLB1JNC4edtRTLbCL4HUqR3zyG4SPj",
  "key25": "2aMw7ZrdfgDbvS7iZRTFF3bvzNAiAzXRMkWZJg3H7kV6ymVftXJD4buPBT3ZKYzgAnvQoH51s3Z9YpNGRmRvyzLB",
  "key26": "fgXun1XHF1MnCTAJzkthmVH3KGg4Yd9adYDwYe7ZpKXA6kXd6qfKGcXUuKvFZfCXy32Gupm49KKjAs2BKtoy7FH",
  "key27": "3hTm1YRHzTzeNUwHiDTBJrYH93QQvy5GFa1FTQcDwxEkvJWXoaJ35fiTU7biEAoswi1mi6PgFbR1SoEtAGYDRNZX",
  "key28": "27jy2gfHQYZD1rRafbhBQwVheFjSpbWNKa9EKAM5UL2ZzT8D8eZvNapbffLV96nnsPxXNbitJoV7CZD6ETaEidfY",
  "key29": "2ACbv1LqSg2jssNy4bhxjbhh12D3FdvW4jhVQaUNitdFQaGzXaumLxWc4fy8Nc59yr9qERQpEJ69KMvYarsmn6Q6",
  "key30": "2qQi2bpEERxoooT1ukKECz7TMe2WqRSmtuGec8dNjZyjhY4o77VwoyncqffbN2CP9KtwpGgkREaESRU8DwnvVnua",
  "key31": "4iAM15qN23YRB8YVV21iU4xuLStCsqboqN4WJiwdUBzM3MUv2C55G9QSveGvF5SM3c5ZfgBimUDEJn2uHMUmsjbQ",
  "key32": "3vPgxcEJDCx2ZUTapbEJuB9Qf4v6RiorWc8GamXLTfhxptmLWjJCtRuw6AHd97FZBoAfqha8Wo5q1Ubn7fbW5Cfm",
  "key33": "2iUsGRodkRw9wsU96J43qcFafkp3ojLLkx47ntqQYv3sgyAhf8wUEGifh7ZWRWBQg3Jvpb4nTGdVoABa77WAS4mU",
  "key34": "23PaWnNYk7BueK2LTdqGu9WFRmQpo2vMSPeh9hwZFgAZsi5MUUvC366yi1AoqVG5uXHX7XTToEHYAKJFMosMcQ3v",
  "key35": "osVhrDqXPa9Lvf3YgbXE1KQsABzpFjrBcSCRoPZRQcs3JJkpWvZGKoHZo897vskAemwUnG132zCNVLwtznmvcVX",
  "key36": "EcFsmHMHEk22ddbxYoREzNYYQniFLbxCPkka1vycDifMQ89HxLBccBViDUFXAneCSNkmhUhMZymguycvQ5uao6a",
  "key37": "4SNXpRWo4nJTsSZxCJwSHaccb2zNzu8GUCnYamBJFUmofWbvq2uPdGQBemcJfHnCBJn9TdU1Af5KJoMHiNt3z6Af",
  "key38": "4edRB4UDcATEW5BzxLvJK8c4LSpUkrDNHYx157RWc8L85GzGGyJ7ox1sRgiJbBRu9wcPwJAV2mMAYWvX24nE5Fxn",
  "key39": "Np2DKG5Ue6XwPJMT52wRkVcuXr3U1ch4Q9MToR7PZG3V9H3wETSQkwJzdwRgw17QTHhwUQo369CodMe4QYx6MQX"
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
