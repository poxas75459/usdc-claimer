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
    "5PaHZz2b9TgqHSnXGAG97aurshcpFPgWrknJVvsw8o7u5gwzmsAM8egkbNeTcm6EvZzHQuppsMhSyFVH39wmmRt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frsfBxZNaDhbSPNRGsaQwNkLqhu33UkYZZVjJPq7BgiiCURQGpMc3EaYWhMMHGb6XMHm2w97BD6WfmrRQGKBa2U",
  "key1": "2bt9z5e4TH47YgC9ckche2R4VAH4pyxXPwYuh5CfQZdVvHnbfPYnwvyqHajXSDC2V9oPh1NRxfBMJSMTqh7sLhKp",
  "key2": "3sow4yrshPbrd4Bse1suAP8S6gDrJw3ABNNs6BVehRV4TFC6X7HtpZzK41sFUVuyejm8mvSvhBEqbqDtdZAe5zhg",
  "key3": "4efEbTzvXEsZ7bjhXEFJmFJVxyo5KeAW5uXM1o2ZB2x1YzMXXmdTZ18Te7FjGN9x8BAUNU9YuZf2DQYWUP7ftNBQ",
  "key4": "j9vZ3JB1DLGYVRuQSCY27iWCauQpxsUcDGbCZDuwMYvUxPgGHhwYz4BD3kZCTjM5ZBPqrz7ZZjyQxjPKupHhb89",
  "key5": "5EjYqa8d3RBZ5MLs9ZUQqqZdvMDrRWH83egR3mXTHZRu36j45EGnLXj3sJkUZpHdqL347Gp8pbBhcdAykHmrA3DQ",
  "key6": "2u6JPAUrXsfu6RT1MaxbJTbQYJapQFR5nmCMu5czCKLhX887EUMbSmaQqTAyvR1GrDxPNjTFHLDxdyFyY2AmmXMW",
  "key7": "7of2RPo4VUTsffHJrmeysGhfzTR4Ma2YB8PAw7r3jPbWFqY4GyXzETnVKnSkYgMLhQXqq4BxoCkvzUvkNuYMtWP",
  "key8": "61tGbtmVxUqhxBXSffbywNFuKMWU6WtEW3ijTs3Twk9QNfrDiE89QD4u9jhKFeHzQx44HB6tDJp8f4xANEagEo9f",
  "key9": "49QTBfvMf8yMutJ2oEBUUxhhMPWqugNDVKuDytFLXhr93abGG8XtRh9i1hCA38SCv6GCEXoXGeuDuYBvhUEqWb2c",
  "key10": "dEMoCLn5dgp8KK4f1tZ2WJ2Kf5pUBd7XHbx3rXtpGc1Ny2W8VmySDtEcQ3vDRaPgopgdmEG6yXJQHMPjZdRLNjV",
  "key11": "3gUYHAGWvkJ1yG2AJk62LSe6XNvGhB7G3Tinzq2imcgAT8b4M8zgqhnjrATH5qKbrcUsKgAynm4YuyZeGF9qi9zc",
  "key12": "2TqMTEi8csuEjyEuLXx6ec3K8Dy2x1i3NvoK3rUNTRqjt2VJsU1ry2wt9m4Xzw758M6WyCoJPQpyo32kLAKDzFoP",
  "key13": "4DRKkDjPPXZFtKuXffDiemqFSwHbM5xaAKYyTUKeQCb9pBLxu9eUZZ8cfHwPLJiTynHQk52x6PNzgKavx7GK265a",
  "key14": "59oLzeTj1jqhNSAT3xtevTDeZ7MrXz8x2inh216vutnw1n8r9mqi39Eki94rbsCd83KByEiWcQAnVC9xWF4aKs1L",
  "key15": "UzemdPrmfkXh59uQ8FbVFTiABkw7BJ5Zv3J1P7SzuRTQVZz8w1uurae7VNCQusVPH4q1jx3Pair2qh3MkkYc9Kg",
  "key16": "4RpKkaUDH5TBLVPYopkZGgAfwV9vHoJCMFp2cvkt4JfM1NZDMQtQW1wsqsD22bu1UQzsn6EDYA9VFXks46RJWXwH",
  "key17": "5J8VwX5izJqcBa1hww7VSzNTi6pAtmfAjKBhjNkMKu7V9BLedXTkkj9hBfkJ5q83yTVMxTKmRZNztoQGrfdEfJe2",
  "key18": "ysNzFZZ9QbKjnc7fx1VmTsKmzpYYTEtGHZUeLP2fKPsKjaqdA4RL35LjqQy4YcjTfTkDGHC5bPkHrdq8nFEQgGB",
  "key19": "2eNbjJbPy8rjbJ9BgA234dKrkeUVShXdUFr2gkdin1Gonwbjdsrm9fM19xLdpqY2gvbruHDyoVxpo66sTG3sJ63Y",
  "key20": "2TR2FWZufy6LjRgTPH3uabkfVwtPXSpKp1PDuwendJ8rpqGND518qGEZX6fQakKcrxLJkbEMsMWDro9PxjXFaztp",
  "key21": "2Ris2vThfhtqixA5nksQ65zCNFz1BsRvr39mTHkpCYLFmdeRuDpTAmW7G3RJBYnrd7tGbBrH6ecfkbvngBVALCA2",
  "key22": "41j9arJiekn7yrf5wPpLKBLxXwrWTbLWcf1x9Gr61ywhwo3KhQAMTjEmjM15qQAyipNR8TcLeux5ULNa6TBDuaxR",
  "key23": "5ui4KMoWyv68Cp9vN7NhWEzXNwQPEqoVr2YE2Y6QMiZ4RCucpHkKnaioy5kLLa3NLKmoV7GkSWQ9xHBuuwPzdEYk",
  "key24": "3BKhxW15CLjkbpDbEdK959AaXtA3wk2DgYtLiD7KsRyP72r5sqgqsEm5xBsFciJ9oGHWcm7AFyBvuhwcbwhFux9A",
  "key25": "4pSYn2s5FZBGUhrUuPRKpW8HmnRjkhN2irbbrWjLtonheXHdYpngxiFPvgb6s77Gvc1sXT6ZRAB8m6tY5foCEzMT",
  "key26": "5N9SywMKfMAznvAso4bWJCoDUUcTX3Ue7GZJpQHFWsHxAseEMSTzRq5fGBPxyRpLm883xBmJyfxdbksKb3Eu4Pj6",
  "key27": "54egkhqEyJs5YDDgk4nhqJnc3kiwZf1q8xVjNEBb4VpSkyFdwYR4AijqDYLR2FL9CA1eFMLYa7uxhjvj3bZJygyo",
  "key28": "2qGLkbL9RPZND2GagXs9iH7FRCuXG5cHMzxkJby1DfojXjnnZoUKRmH7WCqgpEc4v1EtQpu4UngPsFtv2vWFAakT",
  "key29": "5v2DddDiE8Q8ppmQzNAfYkJtmCXwFsEVQMXnjoLPcpia6BYG3h2HHmrC9TcRE7UfU5Eq3V5iNZ2yiNjR1KjHGpAg",
  "key30": "kHJkT1XLSGEJYeVT4GoNvtM2SYa8B91Y3X3MQq7EJwGBAEyt9Nw1FdNRF3AbtYAkkWP4yPMsnHT599AoCakiBE3",
  "key31": "3UnsnGe7eXzqKVHCeFEr3CScJdHebEEpJEwx3Gxxt9AaJ9DU5ZM8SQBjCdNQn8gSiPX5TW2dDxBNPDSxhhUbPxdH",
  "key32": "2guW8q6n4FMNzXeKRD95yjHmvoH3qgLLMoVWMBmiNtTm7ru7arFViek1Ny4JE3JRhjRMQqVpRyihb9h9BKd7fQPA"
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
