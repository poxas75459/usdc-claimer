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
    "W1QEL1di7NzZxVox4ci7XSmHCJnaAoPxVZGNq3TNhar4zZkfFHhyNJCECMrJFgGSaatyoeYqmf3sjmhCsmBfrnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWgewcnmBxts588X1NneNc5PuYQkFCRfscYhNGnrRvvrrGdrCyynjGiHmvb4xpe55XercAHDFE1fg2rGRDkMQaT",
  "key1": "hdZzb1YsJc4K112SzHYFBzR1Uk6Vpf3a87N9jDxgCdjTM9XFCzF5Pm6jDUM4kDsSPviHrx8NuLFkoS8LdhyN57c",
  "key2": "yGgmiaS4mec3dE6yDRdD5U415uJ575htUizRBtAPeYYNybeZgdkMBoDPc8tPgdCZegrHZJkZJe87ZAVjfckpkAC",
  "key3": "4shMcZFUnvzWEyJjKuowd7V1i8UzDh2x36usLRjSXkU84ARv4Hgrsp25K5jJgvBfxsu6LQXeix8HoW7VLqe7zPVt",
  "key4": "54jUdS4yk67hb3YwfDuTGfH2VhEK8kj4g2sSSW46BZZyGE1WQfhGCk6chcTRdkCR6DidyffBQYwV9jPm6T4YCeAx",
  "key5": "2cav9DQkmPbnAYE1P6oJo9dynZZ7iCHpdsUAPgCvPokDgE2xwDmocVGLMwCK9vAy1WWn97D5oBTVbqECPs56DvSm",
  "key6": "WAk4caFb9hqkDLkWbptPYUZ3nYdBAxKUYzoWxkChyY9wB3HsJW96FnC87GFcNNv3oaggn99VExXhyE2Z4F1ErQU",
  "key7": "57D5SrRkwWehdthTWq3MXkFaPYRxrXTcE4xRJVtmvqwHnruCcHB4W2qKnpNf5o4Vyvgg7HtiZDVqbdeWQ5ZidbwX",
  "key8": "5Agys5KZix2tasXH8tgq7LaKB5VsicSkWDPJZ2aGgJeUFDkfgEMJgzSoSQzGChccB6rL5GXAXiBSUpJuhfARq9Zn",
  "key9": "3aW1ZZ5tWobi445KTVDyj8NBdjmBJVZKBNNczhKZR7rJAowkPuiyc2A1FKdtGuN7KqrX5GrwJccqaRjMK7Kw9WVx",
  "key10": "41ykWaeJGig1BGcgpWvZEJmKZEZkYjDxePWLCKsvmyDGoYoq7VW1ACjg3sCc92wHuZttKKHvpMvGh3u415BVXk8W",
  "key11": "NdaVWbAHMAkcQWwJ8URVB4P9tyHpMiPCh5taS3BxuHBETjs2Ywjh3aEv4nCEK6qy9hRrVH4fWHcVyYqay9x4XHG",
  "key12": "5GoHRxDaNtupXA52tbr8cJodHE3gyDaatEsYrAqKXxonYWJqaqCcugVVmAe6UKQRC3HSEW8CiiJff3WECiRB339A",
  "key13": "2y8GeudUBqLm3bieEjSgDjbxwLyRHhYs12my7WgF4hqiKFmQAZJ3E4Z7uxiS1yuch28tN3jkPqU67MstdXWXzcem",
  "key14": "2ftZsW14npiHdERmx7KQKBvw9WiLeq3esg3zgzcH4aZd89vwDE2SGRA79wtjkzZCcLQ7PwdGWF6AAUYV3o4wtqL7",
  "key15": "4iwsKCVVRxzhjm9Pynyg4uaZaBUUzqrv2F1Vgm6mw5Cf4cEG8yFeLTPnVngtb3mFjUAdSifmGe8eYhohStZNymJz",
  "key16": "2R3jKCq3fLBaaMPBhzBbiPrxEQGBK2q34jt1hKRAMuq2czRjxkdBmPZY7pEZLMrGgHc2373eGSmDz6H2518d3WMt",
  "key17": "3oKBHTu9iqykJErUDQHpTSzGycuM3MhMF5f6MvppRDnjv9S1nDrDcBwBDGzxf1jdF31qw9GGyPTeYo61BXEsnEYE",
  "key18": "oZNDUHEsvVDveLqs5Cx4K8APj5mtKNcWjrPXwNmH6F378ADRYbxhTugndYTHRLPdeB1KJKDmnqrpPDgLwXiA5KU",
  "key19": "FpTUVEVsWk2b1k2mTMEKZByzqBtfhZCvxmt6z1Wg88fvxTgwENdc9WroWrpLqmQnJPhW6C1WAFTJsr3ZTH99RH8",
  "key20": "27tqxjvc2BvJxf6dyQwVGdUq1JdVE7wk2PAT9dcMm9qdeoAMT16rP8yfm37rrMid3C49xtS8XeEE9gNEFykwTp9r",
  "key21": "4PoCYoMgUZuMTVDzQCKd5bAWjwdXaNeMDPsUmFW8Q5DMwQQ1w3AWjftPc1RUsq3W5yyMEaq5v5ed9gSEmST9pE26",
  "key22": "4JGDLoqkL7hBRhYGGV2nTivrjP4mcho5NYAfbEQiqFFKnE1VDAGpNAEKGTcjyz3zv9BqxEutybsRS8FV9ET5Rere",
  "key23": "rEzu8H44yBt2T9mn2zZqQBetHfCs2oXmWXpBzyqjz1HU6Y14u2FMYKFJic9xqeQPTHYa8Wv2AFYcEf9Z6wn8xF6",
  "key24": "4KF1cGdLhHnHx5HSyBYCAhi9iB6hKz7VLNDkV4kKrQ5LkahSx5x8sdjLSh1ts1urcMZ8vNTe9NYsJV81PBZaAisR",
  "key25": "5RfbVQ1RMSNNiuk3yaaKWDBzH5gDzGCMxot3a7r4PJJCpBjaGpvHzQzzZq7HqqwoB5PEjkS9V3tefvGUQWcsF7Ua",
  "key26": "2NNZdMfPoR7czehgjxmNyqTEuaT1SQY4phCocPohYDip8fXxSuVpdZ63Stb6J6zfkNmWuuu28DKg8p4Ty3tyHNKB",
  "key27": "3DAcZg5vRt6KPHzcM2hwwJSzr3sQbqCSW5bASnScaZYDJ5BxbujXuJ5p3XntAMVUYDWPsDjTqn6gkjvB9Ldto6d9",
  "key28": "61988H9ezmJXBBHMpM45PWjsP3LYs7Ny7S59SftZyMAAmTUSsjUgse48YVY33QPqN98GniVbsoGwn8FN82ni5G6Z",
  "key29": "4jVQaGpxozTt6k6gd52zBxoFZFSVe7uMw7PBqAt2CfjTfcUcw1fPe3RhYBztxYyW1jySXW2B1tiy12HfSWHpAz9S",
  "key30": "5GoHvaS1zLYpqxB6c9PZUzHBQoZBgm7x4dLQWWi5eCi5VxEqWfyTuBxtBTk9wm3Bc12Wkrf9qLenirDUYSScPrpF"
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
