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
    "2jtkXJyoDz9a9RzwN9MdvZJtwnyUAdSAUPoZLzWQdEtVYCY5rFREnuqv3JqM27exvDzzUVziKB6hAT9gziHyWo3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cix1G63rmXfwZQHjy7RmETt8yeFb1vJZzLZ6pBNpuviJBmKCFGgV1zbtLQYbeg2ySEmCorA7VX8UtjU2BhjrFKK",
  "key1": "2qRrSjcPZHHyJ8CeioadstfUoCE1cPkh3ATPb9KxJLaHwYLokuBPZKXcUyMpbFYKShUqh2gAK8SscNR8LjC4Xwgi",
  "key2": "AbSh2HqH5LVPBAnm2CEmFRqxXdmRZAsReukGwvE61pSD1tYaQ8oEnXDDvAxdD62erZpiZw1Freknr5fuYewL9MY",
  "key3": "1ReWGcKjMZPSBYThej3fL1vrcgzu1MMRJvkNCeD4Ps65n8NVDAfxBFBNJiN7DgLLLagXNiQQhqQcKZ2XfLRCVNV",
  "key4": "3ArktTVGNL3mn7Syx7pzEm1s8XFdd6pKYnjHAURVgY11Rj2FWuqQapZxvhKoq7DgeiGCAJTV8LF5UbJAJxzJcLQE",
  "key5": "zhWmCoaMhK92ojSzyaU2Wr656AFAhkqdca1eyU3nKQJS6dU6yAYLwxtH6XfJfc56uewcjkXmwN5v8Pubeh1JrsM",
  "key6": "63HUaBco7cuDkQe5fQjqamEBHCwBw1kshhyGDCypzQpdDt1BjbsMYiDoS2BVe2XC89aR1jXyaCRCbrXG1zQyz2L4",
  "key7": "BPugmVUaygoLJNzi4DkTCKVA4Yjgci4ggHsVNCaFnA2VQtFEjGBDqVZvLmmPvc4ptqp6oQqixKsG4H2TTVLbSmo",
  "key8": "4QXs27WLiRAJCFvVVxutJpFbUMKVygQ5WGMhFtnRqsav4CaVJYQCuCaw1mrMrL2gCpb6ArhFe952i7UQ25nXfxJn",
  "key9": "35we7yTA6kVWHrivmhpt8tvWjGSpSjECZG2UqsBaf3jrbKuh6bEgdB4HJbN1m8VfmBTVBMgiLa437nxweqhiM4Lp",
  "key10": "4j9KhtZBH7YFKiRhAp9j5UVouT1QSczpuX1UeWuDVK9HMRguBDsD2Y8JsE1QkBkEvdcjz3KGi7ozzMdB1XEg1u9i",
  "key11": "3dHMwtK8bA2KDhSv9i155qz2LYHBMQjDWuHPa728LUof6Q5AEgbdEqyQPCuu4LQFYEaKXX4vVRL7sGVbeq8SY96D",
  "key12": "4G6Wiu3ACMMLgCoi4thBfFAzWPzW9AWG6KqHygQt91L6uknB47VXdvtf6qP1Ai1c8P1C6EPPh3jaSd7Cyo4HWtXz",
  "key13": "2YeiA78kjCG4mnsNAzzQdDpEt44ZJXNeBwBN7GiGcEJLKZfmF6XL1u2YvsL3JDn9dssXEbV7hU558xnhshBxcaqX",
  "key14": "31MaP72hQDooheR8mfxbp649Z2vkSN1s8TWQGeDThAPg3gkPSmn77CE9dYNTr3GX1C5rFyFpR383ddhVvauXJ75S",
  "key15": "yFDc5tmuFqDtvqHCMkc2Uk79GMY9DW9whZmvsxtBvCohkfesEWzG6x5PvWXL2efPhcAe3zeiV4UsM7BkHJpK9Fk",
  "key16": "54WkpWcEz8u3FfX81kFASL52g9VynrFJXdvos1vXfKzxE1xdme5pLjBSSdHxwH9U2nJjvLswNacLFkhtj66EDWdz",
  "key17": "4vu8L9KzGHDUoieMM33dcphf7uPVkAJcDZMFgfqGLPy81p9px4y6CgTV1nQQ7zXGhZgZSH94BZYf6sbkGnDQc4U7",
  "key18": "3jMChtVELHiVykxzcQKSSSxuFV6VT77tCPCTBT9ZHjTLEX5ckQN2F9UmrHEVgzB9JqRxeMJJ1863Qkft9PLkyLfi",
  "key19": "5nEALmqoY7XSGe1ufbfxeGSmR8ofQ94642yicxMs64fYeYT2VECCbzg8SesHxpr9YWzUHHTWHQjCS3v2swziYGnD",
  "key20": "38dNsNSaqC4q2TTXYyeLFVN1mcfFKx8dw41cx2n656f4B3PLKue21RGanXDyHcV3HXYR6SXbnynP8NQ9KDUiinvw",
  "key21": "FaKUN4W9A12LXJKeUpNBLwEDVwbhUQCEKX8iimVchSxmW2YnsCCPJB1npWqKaMxM6sBFUK1u12ay4hmCnYLB9R7",
  "key22": "247PGmf4w8SKN8eGadiXKXtmfbtyMan6FHk3xzigVXgT8T57twEDswXDgtUeDS1qW9h2a1faFbN9QzLYpJAk1679",
  "key23": "3nFH53juR4CSuEDathy53tvcErnfP6cADWPsedCcCfWE9zvgoFoT9KeCSrp5pVhZYEf5Z5uxBY8u7YE6QXEPHa64",
  "key24": "2qXTtsEHqV6CeCHZTwZq3HdKk7wYMfWc5t5tZV46mePexdSxAANTNFQGAhXxwm8D2bmKeMhirkQciWCty5LQMpZL",
  "key25": "5Tigc7TeBqU5pQd1J7v7A1q2pYtnHu32kvHhhc5VquWKuBfX8QQR2kRyBfUrQGhC8wKmxvxXLQ1q7CHz5wMewL9t",
  "key26": "2jrmy6rhj9SGPjq6hJLQThV2mSwW7edWgJ2Du4WpofaL2jgGXc4Se3ZJA1Kt2d37W82jCUrZYFLfRp2hpJQVREQ2"
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
