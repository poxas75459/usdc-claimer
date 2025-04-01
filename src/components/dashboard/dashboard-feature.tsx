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
    "3qo2XZXFR7U2D2bTcnELUh4kKN3sZhGR4FFQ6orgms1mCy1So6h9HZ7meo9v3UXcCceXE1HBKNFuMvnCjULdiWPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhKUF14HtGsXPPtw4QazQhsL29H5mVR629Te28GzjzPgkP4VfdV1nhJnbtD6Liax6Es1eKY9NTsvU2SfnYr4GVA",
  "key1": "513BjDagPu3L1ndY76mQWnbETbNDCyC7Gc2gKyycRKLsz8ydszDCj4ri7LgCp5CmY4X1L1CxtEVPoKUSDbMk2HXU",
  "key2": "4QqNkdfRPBAs17KE5oHXYcFZUS478JVrNJdXZ7ApE6E95mYTfS9UBLAqZ57eycwQ6WPyZEY4ZCKU66xp1LTgj5zf",
  "key3": "3dd1YWYYz3gqb8C9ZRx5xBcxbVyFchPjdTcp6aj5eektCNKEa2SdS22KgJ6m2rtTBakCUGhXSkH9xyJtyFwNSVHA",
  "key4": "4znQKzJpRdX4ShsTbCytfBBpRPsMddwjx537jUSX7mfnwkeFNjsErZBCgbN4LFpKn3sjFSbiBxBTRR5Rvy6VpnVD",
  "key5": "3DchXeBkkNVQm7cCXoQgL9qn3Jy77Jy1mi4cqmVAwd7uvo81EVdyAaz1A6QDMHi4cYNC5M1wG2onpjCc6M1zg7oo",
  "key6": "54vZbL8Se3hD2kFGxzLG3KtibkBnpBNw8XA29LzpHj5irysP7EHiTtJKNEtyia6DyKqARHrKaGoLLKE13eQE9mVS",
  "key7": "4LZKpnEcGQiShwmJPQvMXBYcHFzwEGQWwAm4fo2LwXgMZeBr1qEMAfXfddCkMe6bVE72SJLNELFkbYzbaNy5UeaU",
  "key8": "4g4E8VrbnaDCa3Edq1o242fJPSzd4dKiWSm9fMkjBCLb3VFYE83dUUKTNz1pfJJuHG1k2UWPJSohtTT6oSBpECXM",
  "key9": "5kNWf2BNkQM1X6ooPWp9GJh9jwHK1YTT9ZRnZFwjYEb3ysqGrCAYpJ4xYZ37ooBq1EAQF4bmBhnHrVTL9u1SE7mC",
  "key10": "5dNUNJHgH4YGR6saKZLtRSbc848TFv46UTccfgR9X1K2m45EQv6gn7ABwhVphA5xnQMuZAkDpsZg2ELtv7yPBSpJ",
  "key11": "J3KV5xhwfZhGejVarGCYtNu5ioGYXJBqoFtmmWdAZoc1LBan3dCeoZKbN9mRopWvzi67gPRzu4uKXcgWaa6Z2WE",
  "key12": "2LqBPuP6zJtrt129RgkuyHJAfiAD3aRUc1F9UrFwGrUWn1DD3brmdnj2diJfmhUSsmXBE39DBX1Wrh1dhSw3b1zN",
  "key13": "DG51HW7ozeEwTXCUD7ZkbpTLQhqxcV6w1NDghG3HjXmxpKS93TUr18mLPsJxN1SZcXbZbrJm5frB5VgBXRUad5p",
  "key14": "379ni8GQbCHWtT4YNidFdGvmwnLucySefFzGCJnxyr6ZYPii66CVde3n9hp3PvEJWzwUJRYLz69uBy6aDYnbFx71",
  "key15": "4SiHhCXp7c8k2unsQoGpQGTAhfDq7HfCFiYZtQSrc87KDVEfybLEuoK1PTHN3ra5YGKttrnshPxNLB4BE56P7Jgk",
  "key16": "63p2dskSSw78AXhwpr11hBVgHo1oaXP6ZFRKrBhBKbZPB7kBq8swTFXjBqL33gf5nWemet4kvw1PQj6F7UcZWTdZ",
  "key17": "4LpUk6Viah8oQWXGmixyTGDden8PKFPiP2gScsgitq9AeB2TeQJ3pzstRNSvPBSr9HVzaUUvzGUNXYdQxnapRDzp",
  "key18": "3by8QBk5B3cULC5MqaEHrjaTGqEuZYeEuqnBKBu77UgPZ6BtTK83XqjE8GG3tzgxvsZrvUwE8KP7o4UhZAMeZty9",
  "key19": "2ucNjDrZ2vX1W1XKDsJNBUx2yhkZG42aDfHKbfUECPEZst1gAz8QAEUokNbZ3FEyQetqYBCdUCScinZ9W496ATYX",
  "key20": "5RewrnExLQDyvsrJLzkVuGmBbChEDPyr5DTy98c4MrnJrXWQyTuEGCgCgt3kXnpfCm8r93h7h7jGrH2Nw1fmgafr",
  "key21": "5A3pcWXEByDSLXAGh7QdktoJQ87fAvRqMurCNQAXzzz7GdGejwtH4oL88VAWLXgDzVLoyEPZ9SnZcxYvso8Dnn1i",
  "key22": "5ibhsfX8QaAsp8FdQTHCmaQJy8HKFe9V7ViEnKk8bziLCGhM9WFVW7MVQbkF9VaP6DvfbdUiugPiKNjMUaBynjTJ",
  "key23": "4h7k2Sm9daXpYxFifQihCr5EGzMZEDqqg3mVTba7ujkeUmFpzqPBsSVSDsFiMTb7d23DipPqC39eaKCnJtSnd9PY",
  "key24": "66YjXBfxpEp94w6iXmEc1NPvxz6M8ruc6v3AgiKtW8o7iAjXx6548kRHSuhmzN9zNFv5fRe6GP2QEggeZbbzaFeK",
  "key25": "3iFgiuvD2wQDtA2JxM8E82ThHKxBPRk78QC63RnvopyfcU5T2jVGLpoDbFGQT6GH7XTh4W5sYUpyXmehMmgHnvsP",
  "key26": "2LaMUWdL4v83ouTNACvPGcs29XfecNkuXHhpkmvqqX3fa2RFJgDE2zqYh5kc9DjQQL6E1E3tUB3PuLQdfy4sBQon",
  "key27": "oobpnrrccDM3u4PzzHtbxmz7ew4pSYcLaG7NxrpbKqByxL8FHQACRDmob89mRhAPgkkx2uS3YLyHurzr8F9Wfwd",
  "key28": "55g2u2an1ww1WrxBmQyWpcoAaYdoNiAgjrgwXbgepB4zTnoNQru7BVoFPcTt3ws3VPi1mNWa9rngxsy2HDMGCLUv",
  "key29": "5Eb1zG69gaZ3eQvvDUJMDdyFVnkJNT2YqWJPxnryatF3mc8GVDH96SeYqEFsiKSCZu2rydo4cbuK3m3bZLm89i97",
  "key30": "G1EdUTVxk8BWa5r2F6g8Npz31mquCp1q7YcKNmrfhTEGAVhATMaBCdPWjHknLdvAiBB1qYvnkpsYeK66GXcWLcT",
  "key31": "3b2WQdrYXyWSweuujsVXuAeYZAB6NTjdjmWnUAwsrezbXeRYkDen3eHnLhvSGoBHnK4uRhocghAcD9xVNgziKZAa"
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
