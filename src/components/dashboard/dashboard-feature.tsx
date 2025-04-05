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
    "2e3Z7RxgPkKfunQx2hSje7xCRRSrUVGbjvhMWcRxmKqDz2nGXcdwzw6AjfiryreogNb1vhGL5MzsL1E9KaURrjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5X47kgLkzpvXBBjCk5gEGLQnYfSL8HWHCenit3rzEMhS8mjirWjyrzDfcgNcaVpfy5kcX4W53WGYwLHZ1g7jfJ",
  "key1": "5q8CgavNqZ5JcnFf6jMmXANXMVRLsztHpFAqiYEa4S6sAoWwJ8BLVyQwLUoLJk9HmMZrDsLpuPu1i5tATwzv7co9",
  "key2": "4VZG5HEei9LHm3eADgE7de31tQ7D85LmUra1NeLcUF7WxRmU3iWvV5Mz28YFtuqaLY8a7WvsrUYA1u3yd32TFFLi",
  "key3": "4GbscneiLeNtYL94cfMYqNjvLqD3nsrj17YAmT5wc5DrwsvqPRBVWFRUuWqDKHX5NHWK8qCL7WAKjhv74xkJGJp",
  "key4": "2Yq3VRyQGGqpYrJKcnfPTzKT8SBMfe7VfvkMEWPuowrQgMTy6Y6Bdnwdva8psGUFVSxHox8gsgNmcG9DxcyvYcYE",
  "key5": "4GcJHABsutVAJJaGk7DSNxLr9D2dRnjDSRi7J12oieyMVyapvx3FesBhfajKxypiU3m5tjTYsrveruxjDkpe4aLZ",
  "key6": "2oivFUqgU6W6HcAEX4DJMuH4GFobhJ4Tk6QpyjURDaKtmDzABcByefRJVekeAtqKAjhonc3DKV9JdJGLUYHdXser",
  "key7": "3u3sxL3p4D2Yx9C9RWZ2EP3TEMUbwujG9vX7PggyvjDJKCpNnvc7BbKAU5WW9ert4kCqEB7ACou9e5xqj7MjPE1W",
  "key8": "4YG2wdDVwvDbHc8DJxnWseavPegGtZkC1xLeNsqoGPdGN1HnXUT7ePmQkJC1PXh24gVBMLUvTws9YP6FiwyoxH3V",
  "key9": "4UYs2xjDrLCsaVp42PeCCGbWuZsTwZyYU9HEVXTHVPDgn2o9xebpQ4XAV46ixMsdBeEzvjic8C3Gtpp4xgMGxhPe",
  "key10": "CgWPehCrRjF1eNbW3u9AmRHbxKDiuFe1rMpEKFR3riTy9Qci4UZuJTy4piN11VnmU9sJcRDH1Arwvg5MT4wbeWm",
  "key11": "8exqr4mu3SEXn2WFULPfd5utcCVyxpPYYwBG4eBb2hRFXYFrVmtEZwvr6yFq1GAe4RPQ88fm1sTj9mSmoqQANMo",
  "key12": "2PLEBQio1gRvXZsyhW2SWaZD2nCWjNayBUjTHvgGnbDk8fF2STmX5U5o1dticdyWR8Gxf5VUZ31thpz6RLJKAmcm",
  "key13": "v3JKtLG9yVLF6iArT2RhJ5c1w3KudfEmSGzvXPTkAggZd3mBF6neBuRCzJJLvi799JqvtKTVw1qd71kN1SSxA8N",
  "key14": "2ubQj9LefxfD6dxjDvxJ4XAvDbgwF73M44fkKEz1kxDey3ShT7muuV6raix44fLxC64vUxF7jrwD5gP2K5c52Lmx",
  "key15": "2TqSmnLYvgtzB6ZW4esDVUnVzNV2jiNoYWrjr4oedZaUQczT693qKZapHPtLWvDM88inYr5MBfr49b3qJ64MZPAG",
  "key16": "2gK9JijiZBjuXDNkHAAUwoy5w46AKM8wZVfvba75gzauAW23ucXAXrvSZHbeNf2bvMALjiTqh3z5X7VDfQ1UGEig",
  "key17": "4tJTwZRy4hvRiXXVR7YWoZMBLwgedJNKRSsCBJ6DhZmPGDBwYdBgJKhvK5rVqEsmwRvJXc67o7Uggik9mCijgsEq",
  "key18": "2wBwnukufV8FzZbksCFozXYNvL9tcnjMjN9Bsp2miBG7krSmYCpv7nMc24GoveMg5nNpNeMyGgrLTAzUuhSj3zFT",
  "key19": "3TMUcknzR2dEYYgUzJKzgxSmDjHxdjJc3SD4einnXi35r6VkhseM2Q7piqxfmw3JrkJYKQrbJ9FXfAHJRJibYUW7",
  "key20": "si71GcCQzfRATkZXbb3x4DRgAd9BTzzQyKM4PS74cr8oaPo9eXsjMBMphNHSqERppZbi2dyp9HXJiNcabPZGwbt",
  "key21": "3uAc4QruqBfUG6tvRbQkgcv5CFCrhMqP5rEBrFE43AbsiXKzPEa1a8SUsCwUC3cvcPb1D6rsuX5pYpML1d2sCrJ6",
  "key22": "2Ypfdvc292A9SFpUB5RfGbG6XHdb1Tbw7Auhhrrisf7poMgknt52dkB69TssGEEB8sgaWaAV9GsBt82EDLnifmh",
  "key23": "5vjFx9KL2V8TiteLmHWG1iUoymaU5FiaeYnfuHty7xQV2iBaZiWzxwyGTL6nuunmXVVyvJkM5o5FYH9jUGCptv8d",
  "key24": "3yA7YoDXSXC3xFbEfTmYADC4MrLLRcSHivSkGSBPoibbz6mB8Gp4tH12BFJW9AvxtovmtuJyb8VxU1Z4gH7vw9zJ",
  "key25": "4w32NMNZKZRbrvUYnNuQhDSAd1yjFkA922wYVPg1gR3qT8wcmhV8Yr5GKn9yULh3ijYaXGzHhF7YJmsoVzzbfCuq",
  "key26": "4UNBCTKPK4yanxqwvfH6kiEek3SojEBMSZtyRCSTg3MKJL3D2wQVA2CWDwoD6G9iRSa5JAqMv8u4Ev4SFwYnT1aT",
  "key27": "5WZKZLPRsTB49UNjCZXPtNEjXJ6645CTnSJ2RKzEYEiCKLhQTPZpbe6t9TV2ZmX3WqoUgp81wGqAKjQLwKiFTDuQ"
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
