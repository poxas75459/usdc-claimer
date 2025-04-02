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
    "43nTzfp2gYxopNuXMbi2vEnoe96Z4ziuDWHW2HNEarBHkFwLXCRfQkKVCLdPYCQV6VaCaVK95seRggN5vmg6iJS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGUdAv1bVzghYBCcE7k7TKBCP8888ou6oqWRRA9XG3SYmbPcdTnAWFW5Mug5tYeu7mSQjbsEdriG5jR1fYPL9gd",
  "key1": "2FoVWGxgDs5nTYCqSdWUPNJCEV58q9AashHJRwiw1M1V35XtLXHttGquAKQJ8Kaf9kU5Zw3LQmD3bivucMWbgMX7",
  "key2": "2V3bUSSGm9rSFBfg2EXTnKmNSCa4uNyFr4JWh4DD2iPdAaG7oeK8DR7pc2TimroH1YWJd2gV86CzGVkCnmyavmwr",
  "key3": "51C8bBSrtUxZDCTzsAXvF2waswjmdKqvBBNiQqQubSNZ4G61HdDaZadNDERxqWWKqFLGJtCXJtKw7ugheLntsLET",
  "key4": "5EM5WDyY73gixxb7HVNXEHSwWjkKtk9XbbjCNAWyRD7BQ4ScLpU1qTFxe4ptaaigYMj7pfXi8j4BTV3aRV5Bo67v",
  "key5": "4LMHqyqC9aMPUjtLdyishiXNELYhfHqMe4kpeykMnV9J6kiNvrrbshs3qWHUi7ywbdikkDxtp4RQbgGWnmRBrS2r",
  "key6": "4f4w63HfXjc63CnfjEE4pdkwJMATF7FRyXRAG2FC55Cw2kqtvDJeCaZeKT7udibx1S5TFUtMYMdHfPRZKtBgBEbz",
  "key7": "49BikSF4P5vCPNDxucGKk2fgZG3QZRrrQypGy2ehEEkym9pCEPFnmSXYJoozCV8doN9Tim4DPrM8zEwt51WNoz74",
  "key8": "5g7LHejXTTFeadULmvxeT8YwhE8CFQfWbLL6qBkqT9vrMF7mtZi86pWF4ju9gZXA1v2sLfWJPLSDhgL8X4o28tBi",
  "key9": "2L5fK89NCyZkTeo4yALdxQ4qhWf8jbRRq76ND9tAxC4gduXQwscmS1KafPwpYevS5dxunU7Fs5Q5hdJitCPjkjP7",
  "key10": "54ESNhVzfNGow6jzaBoEWbBZd22GXDivvBGVBq84WJbxxD94iLcXecPhe6QxPh9mcjeC2wqSLBH2jnGv87zNnCPr",
  "key11": "5kuuQNijLeEPH7sPTFZUKSu8Ae2f4gpjVV5k1t7yRQmAZYjtVtRf4CLmQb1db9n6tcMd8bZgt8xA7bZR8pUVYRcy",
  "key12": "4zXC4poKzxd82pMao7TWNSnXjLvkdmryCfNJNhSqhcrVWdJFSoX1go6FkcAsp2wUYN2GYrmtY3G787ggR2EqHjLX",
  "key13": "4t1ts8YioR1oXgRwiFXeXnwmzg4K4qJzixaf8bCPa9LxKwkMwcaMtVUPRjr8Liz5Q2Adr1fPSWDyYrMLxs6x3Wt7",
  "key14": "3NBM22rWJaQvyGMUXva8q7z6jCHCoNWt7hxHek7iaLVQiETdrWdFZr8kyt9iPL274uVaab8boAoKHMF3sxMJ48gM",
  "key15": "2Fpdg1eYZifopYFKvBmgn1qAY82dGuszCD784ssuEiFQ8SqzGsUuzPHZJ99CfxRTQa5DorgWYjEhGsXExnzaU1k",
  "key16": "2qn7xxwwJWqEEosHSSkLtVbgi9xhtgjAaJ4wDfRrzxkSEQydgj3mLF1LgqpUxK98VcxjvN8jpMkD1dknY2N4rEeM",
  "key17": "2KQEfmfxzJ3H2FDPioegsdfZpSJqEKoXdFA69Bm82VKhWwPdbSuVT9UQ17TGYwCRvb818BkqK6nFtKfCouDxkwpA",
  "key18": "21wVpvfU5EpwsKFTb6aXRukB9dgFK76VajKbaL1dKSenfQ6BJ5DZMbpBie3ZUTsH8gUKJASAaLpBwa9GxKAriAje",
  "key19": "2Pispu66YJrvmGXG6WdkQCy4wkdMjYTBLWhtUADrYN8S9VnDnShzpEVD5LjrXGnZFRQkqjUtLwWGZEZJbT5WgwgT",
  "key20": "jCC4GJvSv3DZwNXsXruAvrfF5X1zZzLZWNNTMosvkuY8mnYqajnR2ZGRB5k6P2sQcNFuhESMuobX5eVurZnD6jW",
  "key21": "ohUx93u4JDMY7wPhprmFHEsQBgXwytRJrBnY4xLKxqjCV9GW5XErtcmYRT27XBxd2JYfbcJPP7kjJApj42xLUQq",
  "key22": "3g9nMvz4c2JLvweB8wSiocCB2rT7i7BdMjw3juGSCG3JPx78hbvAithsCD7wyn1H4wpadLfwdsoeYFuMtVLQBY8k",
  "key23": "2TmnwgY2LVjoAt2bmEZeM5JyagY9PmbF8Rj92KYXKLS3nu4N8UaCSv9HTymySBw8F9mTpYiivbMaMvV9UqVX2NZi",
  "key24": "37F7tWHNxLFU1FyLxNkcW5ZxBxM7n4vmryh8ke48Yy2hobT3pMT7Kp31f7tJET96fZRmtSGS9u5bQnbSHPYomTMd",
  "key25": "2Sdse32PMVNS2Xh5ZCrF6vquLuiyHB1HMYfJ3hNGoGsXQshjKmmnWjFjJJnY9bLYS2eZwRnWfa4NN69eatwCdbmC"
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
