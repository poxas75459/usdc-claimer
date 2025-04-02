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
    "3hHqWRJYfwfSqpeqBJvK27PxSoQZn22CN9wdQo4ESEaxnAgQbLJUvx49a2VcBER55jxm8KD3ebUHmVFV8vB28tXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29RPdptWyVeT9gBhKUExy4t1dxeoCRutgHHU868bNyXw88gbk4oWzpwPj94RugmYajczuEKVQPwPgRA4AWq5ZfMc",
  "key1": "FXQYJXoKCTrYr4ZxvS2tnFWqXWujM9ULMHLmeigkLRwHCgVdxfG3cE5eMNGpQheQysDPRYR2z5fYpiiaAYF7qeZ",
  "key2": "5jfWWEkjDDqDc96DnuPqPRSnwkV1RyUrLsx5FG4H8RTXCd8W2mithTNhV6smnbbBu5SThrbShFoEGhJT3NXkodqK",
  "key3": "31s4GgJj5CdsQwDKk8GBNE9Wt3MRvhh7odqvzUpgeRAWdWw8wdeCWaKMjWD36HE6JcLscE7r7iUUasSbNp7JC6KL",
  "key4": "URViAHZ4xi9RhP5B76HpEWdbaxwPfhwXaSQS7ntoofstkpaGDMnS9GwpNmPyMNBCEPePWAwvv2fexDbHA9HF22n",
  "key5": "22ruuLDHLuq2M2RY7ziqVxhgTuNppajrCNdgWJJ6SXcBSZ9ZBV24g7t2rux3ByKZZbweXW2TCGJyGVn2bPtWc8He",
  "key6": "3gxgYyAdJW2iYQkWYk7zaDR3qTF5QkNxWGCHGtsfuReTRgE9nYzwQ8iiS2pYMtjob283R2kqUDjp9xm637oEpi7V",
  "key7": "5MpB2TXbBznBuohJsuzoVUckG2KEMjCoaBtdiZDox95iqwn56es6CBipNbWsCN8WYfM3XPhRxzuV5ZhPdT1Gexyr",
  "key8": "4jmZjhe7nKow5E14rx62vHQHfdJtafDyDuwWFrmnzu1vKg792WugvnG1beC4HAWAnNVPMwC4ohefLrDLg2n8WgdD",
  "key9": "4qwusyskQxJaTZTseu3vVQUqeV44tYGenXdmTBDLM3BbcCjdv8jdeji8V2uv65BzA8DUb9FgNHyFzrPXGrKmLAbA",
  "key10": "F15vLvTFNPvHgmw93viBbBGP1Gx4fEaRo8UH65o5heUpK3oY8pqRs6aNJCU3bqvme5HL6VSeBL2W9yvh1zyXcJJ",
  "key11": "3cJnTTgsShvYcBbu5TSsBoVEUG8GMg7HQ6o3rHFGyYJGWRf3ELndcVYjdu3VW7G77Q9UyYtke8yiF63TqEfRWPB8",
  "key12": "5pRtg2AfohGwrdThvRMKwZeH5nHj8NF1Hg5NZLbiAJRfQNdMsf55N9g53RjunxJWAsWJxBp3D8bUeJTsafLpoMT2",
  "key13": "3pzbL4L1dDrajMfHdYh4jd8695WBFqqaEcaZRYamV2wrZCKwtGSc6FCmNhGNNEbh6W1LiNpaDAn8PRot7Vx28EEu",
  "key14": "ANFKdKrr2p3iiAzG7XXqCnqY4QAtdeNnzMM5TDeaGG7BWRdGeJ4SC2X7V8NdiBCVWaZUDC2QhuUmPkB7jLsMi7H",
  "key15": "619mHgmfEDD8wi3gN5VSFDeCXFDezS2ArsKs2tun6k1BAPrhzGmUT8NxucQqXRthCmZbatWxDaF4JuNVRoP7cafg",
  "key16": "5HjEjbx9ZRbRirLxKjPrQA242sR9RjX2hijGU4rFpQS3QMsxxraNH9bUsHxXn6K5C7o7GKj6mWAVokFvg5jxXGyY",
  "key17": "5vbVJUJSeaGsb9LfCJWPPKzVp6xewkAB3FDspRfzhVComLS6R9mrb91FWYbVTvMAYWmnihpbxvukBMUbFD4jJwzv",
  "key18": "3oHaLavRTa4tKrrkmjyxGrm4zJKrM2QQXKAQqkANMUXwzLbnqGuajaDsspUdox4MqKi9seMLB2vRyJnY1oq9ayX2",
  "key19": "5MGXLhFcj9h6CPGKHntWaETXh2GxjAboZZ1z6F5hY9NrxzmPmgKSp2HA8ur7feaW1u1HgMQnhCtstgFfC5XRZubQ",
  "key20": "5j2hNtPAdhCTjZ1j9mxAr5h2NBdp7draQ7nX4YcyJ2fMZxe2zyTEtP98adie4wEmud6UGaFmiuAsLjEfeGmszycR",
  "key21": "3RqVS2MJqWVqxzZzHDHnAV3Pqs9hYBYoquHqUiToRtw12zyzkbfqCVfCrRAs7k5ZS6AhStodvQSDoN78zuzE8BSw",
  "key22": "4LWnaBJEUaJ2TJqda1iuXusMrZypyK6dr8xmptRUKWAMozHdUDfHn1PqCKRL6QwMdc4DphrPbp6CUe9ixz2UKt3z",
  "key23": "4rxGq1cd3n9XK1qnL84m8aM8RcaPvBh8mYxgkPRrNmeuJQRNjD5MT6FgGhVEyMePq8dJeGkv2CGd386HhcEDJ4Fx",
  "key24": "64YtBFUdNvmkB851EzVJy8f7Sw3ECkfrXJPe5Xgv1fZCyQNAGwQofL4vEKbspdQMhAb69VJjhrBmZhnRr3qoJRRz",
  "key25": "1Sak2HknYwrvG3sNPsWMkVcNcGZXFEjg3Bxo8Xw2LUtJAaY96gYWfEW4bXcNTpxdU82BhVZzVg9raFeCFvSU4E7",
  "key26": "3S3tPMTqKXNKA2K2LcpGSCoUPvA32v4aCHynRWC4KcqM7yP88THtGofyLRSucek62v2tPGpJRnjd1fwLNY6Sjvnb",
  "key27": "mst9ZHhPpDYZoDR5FL7yH67DpYm8UCGiBdvs4wDv117Tm3PnTjBBeZ8sonc6iHrCE5t4TuFscYnHuL434fThGuP"
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
