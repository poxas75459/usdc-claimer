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
    "5ipeG9eNDgBy46Qhh2Jq3nCWNVSCD8Dz2un8YjU8Grvwibqa8e7MeByeYDs3idV9vUWwUoVGbjBnRGYXaTFcm5hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63aKnCuKzEsCaYpJXyZQz9QCvoGzYEAiCUwQe4cRjKvG9ieWXeTd25qRTGkMKAgq2PQNgC41FP2PRtML2ZBBSUfS",
  "key1": "5K9KBZ6pSEZDZ9HtQVzM6U8h3gBPv9UjNwUUwQdniF1J8GBT3HnbVAVBkWD4REDZfPPxW9gJYNHuQZmcaALtFSrD",
  "key2": "2ABQ1M4ASD9FTUirbokxXojoheXGipTiv95YzvjBqLvMmovJvWHXcmXfbyupQzCEKgdTmuD1McfU5HktYNMEboog",
  "key3": "5SWcjPDoA7d8ypCYxj1Eq92r7bfQvpvaGx7tQ6EKvm68p6qSUoboNJVtZUaGxYZ3G1DNcoFaRnCc6jMukS677gFy",
  "key4": "3gzhzwvErhS1GQjbhacXRpjxqGjqRxDvNqXqoMDCawKttbyQNh34ZCmGq7zDzn4mVjPppD1qyz7AfvhCfGbVv1Vf",
  "key5": "2AWcrcSDPKTv35xaQcKJu1dwVduzCwFvvjWPkG1tyWmrmy67Mj56Ak8hsNTwh7AqnkLEG7pMP6RsTkMgtMdyq6eP",
  "key6": "2rGjayAaYdNmnVkgaZPa9VoK3Q9q7DQc1XNA3WVoM5ZGSGY13npyoPxgcSVfBCXQKzMLMMMTXxfhxvWrzCdPmd3h",
  "key7": "h7fhKAv8eUrH7DzCtH2B8JxkKeWdviHCkbQ7GiYLqWbm9paeUzPZUhc66MrZwDPp9TVZToTP68Xe7kYSkVuLPo7",
  "key8": "2djmTcu9nPyPrMf4P5KQ8Uf4JPUW7PLdZg4KPkXexzdH6tuFz4KaX8H2MAaAipVG2CcnJpZxt5hS5MMQ3wvrihyo",
  "key9": "2FZYqkrZJnMJfm9q54iFaCoojSTo63Wg8Th2doSAimg4zQ2AxEJF6jXy7Tv2SwvaCgGb8bmNmczxD2DF7CqgeHkJ",
  "key10": "EzBcz8LUgtU1KxxRkNBfsgPmzJ5yXoorMkZWr1NZ7Rq3AEnSX45hWK4ZfQpQ7R9FsPQgTmoPBrZNkDXvNtssmvK",
  "key11": "kFNu2H1ynb1EzYdomMDsTTLGc4x5z8WTvEw5EUs2DeXLw5Xj1YzmnXFitRZSgWLzAvmXxi17Y3oFCy8KscqevnQ",
  "key12": "QS3XVXRd6NsP1Tw1DTJCcjtbcRSHmg8sYXpUhgkbVdBj8fU7kfbYk3DHUVCeezfh7DKwX1uk1bZnJL5TDoFDoU9",
  "key13": "2jFFxNxJHAKM3jYJPCvsUHaiN35ah4BbT2fEqSdX7ggm6CRMrbvs11U5fav9Ta83tvhNMhM2EtyKqZHoF3k6s5KV",
  "key14": "2RLkBhxG5s2SgictfoQb5sf4NkG8sQ9e4DSNUVfoeNVJHrbHDinPEgna6cxVnYk466K1cdwDqiWKLVsKhsT1mQpD",
  "key15": "2UQsgeFqyrEmPYjQyUr7E7k1gLUfYJC3NbKSiA65dHLfbQwMpNPSJtBwDbf1oR4n9MtzUWUTLiYXUmbXRJHtn8uG",
  "key16": "jYSHcLvKF7mU3RLShhfCUWdWoLxE5UhkVvaJpMTkuDXWb1eQa5pHMmmU4eyMAqYML59tbgfr1oiJUBpA2UVi8E1",
  "key17": "4knpBNa5D7bDYwF55TEFda4HrsfXDdZSwg5MrXggrbDRhmYqCdtbx8xBUvcrZKqvHkWuWHvX25XyYnLxb8DXphUk",
  "key18": "2jj8hjemDx9ZFcPSBGs5AkJ8G7385N4SRLcW1B5YL7LSK1m2kxu2SwGS5pQnfoFWDvLSdFndChwyyKG4dRkpMGeD",
  "key19": "3qDm29KzoePiHubbKpQn3fNGjx1XiQZGgdR4oeYRCtokUGPAUDPp1H6LA2hm6S7TQ3fsHQyPuP81mr2m9umTne7a",
  "key20": "5LN3baJmWMcxn8gaetmmzbCiDEdnK6CM3WCUkcSEjVKeBP7JsjKm6ngkp8K1MyxcMGQztbJKFx5dMfg3db5tGF6H",
  "key21": "tFqBGW6gkc6P3F56xCJqgLymx1FeUE3N1yKcdGU96EjUQkPGpgxGrZs33yszMTYScLvv3LyKkH3y7WAGdiUQEx3",
  "key22": "3kWJ2NXFHxa9hPEwNwXjY2EmpUkefzEPttodLgo44tJs9xLePto4hkqtKssH7tiau3rTGY1SMUD5dqrqCuCiQeqV",
  "key23": "54p7bAzsttoX7H1djk3Yv9gTPvNMSFEn2PoM9LuuNZ42j8v58FwPNYkU38zeEjw6M92koGqsTKvs92i9hJNCMPbw",
  "key24": "3SeMZEGMggYciDj4XKNWYYiBNzd5qMGbRYouvWKdTobcrAuXpRNn1usozVMVUWe1ce6D8wego7SfrzVNHGsHEE14",
  "key25": "h8X87i6APNhB9pMiLcMizCeEB8QSYiLunnEBQVfvU6s5Xzt2hbYFbWpynLruJgjzoUbEwXJVbr2JmGJ8NGXbuKj",
  "key26": "3VASca13uaDpBdRQh6n9oQ72aa3bLv7tMAknH3YkrfR4pN6ikhp52gFhSnPsKKVvjZb1YLzK4DgTpQNQZ93oGYbo",
  "key27": "4jL9eDEMVXcHbcdewFmtno8pVEXTNQwZNFqqk9kFNisPrPzkAAqkjmYWKrXeDkRgxeHcgS4jNWMp6WKBb7VX7WxB",
  "key28": "3Ryh4UgT49vVCQyMDSnFXbnCyjhNXxB4pPCappYdYuBw3LPEwss5ks7ETRJtpDtyUm9JYzM9NSHx65enZ9DNrYPL",
  "key29": "5gbLFhTw4TaYDxBGJQjx5y9TvoWo8Wa7HmipqRhkSGeQVdsXxzfY6SLm42k7ziEqCxi8Q9cj7GKsL1Q4iP5xdVNR"
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
