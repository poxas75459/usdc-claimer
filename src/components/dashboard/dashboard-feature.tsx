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
    "3mRNvF7DwxU9GqxzpPxJLazA9tXH63zbZBQHZu8GEPXfXv76abehaVxdrAEeWpXUhJ1LDEKgufVaXBYG7ACAUgUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcLnwbBjRLY2RfSzdbAdvaapRdS5fa5KtURxXfmzBV9r42HSLLMSmUwTcjmxsmRA858rBso9ew5nPJmwrhddhD1",
  "key1": "3N371WJBNxULt35Nb7fR6tAaounnsHnCb8ViHmCcVa1fv3omBjwLKL9PdcE5gsAbBDP5LaL17yYjfnWwnBg5VzM1",
  "key2": "3esgcGU6PJLBKRNwALPzjL9nKvmKPHB561P6hGPsDkuYvxpro7SY2YYjPscmsYTQLPiursbjSrXTupNmNJwZvn1w",
  "key3": "4awxwK4RZFPnwRSc2xFSpEXUPgK9q6UAe1mrRXctXgG38ySgUhs5N6dCtdDu2v62XYqZ8XmFcJhdFfE2SUQU67D",
  "key4": "27V5Tr2uoowWcZEMrSMLaYaLCuS8ms3byaukjJTzUvjmpELKYxCu88KNnxAPmH8okFbru5xM56zeW4XLy8rGVeTh",
  "key5": "2JhsQpYjvzQJ3qAbae8FbnbPf4dnw6eDprSJo67fUorXhtXjGtLDs26ZJhyAGaVA1y2Nw8N5DG5ziREBmzjFtxrW",
  "key6": "3Y6a5BjFp1wT6uKw24ZdZrjsxYcdTjw2GHEnBfgxbAFSGqm4opkEEWso8tLABTp5AzKfkNzUBpNEGe668KgaY6L3",
  "key7": "66SC36STVUVhCWYyD5weS4qJubK4fJov48diRfA628s9V1Pwc6YaFVUQTCQVCws3A6pPErUDSXHEPb19zYYf2HUj",
  "key8": "3AUGCigxdunC8FTA3QMXJQPcNic7bDbcUpYrxRvSRUL4S1QcmJvVZo3dF1xwQMkeeLH2ku8d6whNMudoYcL2aX28",
  "key9": "uKvR6tTjoBdmNU13wYDMx34X2Xs72qneXrgM9qmrxFE8rbCY3sQDdE1X1J1wp97X9YcWKeMyHfwbg9RXEL7u4cF",
  "key10": "PGXPe1EGLSze9nZgHiT1z8g7xXLo3Yvab6NhwkKpu33o6VwReUvrcTpTGmskX5bAHmpNdG6MscRzEGdx44STb7C",
  "key11": "2dicqCSJV1NY7bCqPu4mpqWQMJWXNMssXKQXSsYtqtQ6RcRJwY3nGegTc32TCJKGPX3PQ4a5e84TYJiLa5naUTxf",
  "key12": "46PxnFRwBtXtcZCdgrPZmAdiPJXv9TuWygLwYANrZrXJwuJCj8nHuGQssUCnPCNwncxeNnycf6Yuh8HHZyonLopL",
  "key13": "24CAjdTY4JsFLh8HM7RAqwvXh9k2yZM8QwY6jvgFmv1kD3TQNNfyGcg1YzTNE6kmeshsiozh1m1Wd2bWBZS3DhS3",
  "key14": "5NkdXhuUdyyPmsqa88k7KKodZxajFNVQqpSAbevGCsNMHyXiAZED4W835CVAD31jz1B7QmVXtm9wqNT9puZtaNtV",
  "key15": "22LMUb1QXRE9MuwoVSauK3XkNy97rctX8c9E4BRdtX21i7oL93seZGbdNo4DNgrCYMaYzJ7vAk2pTwJBpkFgk7Bq",
  "key16": "iG1BrfVeKxGSJZYVJHo978GWBpjUGqeGA3TQcrFTdf1KgEu64bfUBE3r6sYAbqYPbXkK1edUKHdQLwksSsZdZf4",
  "key17": "3xprRewDseHndoLeD3UFPtGzQDuwniePzpHuwar2UtBu65JiYX3saL1Tyq6VmxLaqWRSxTxA9bQcdThBFL4BT7hW",
  "key18": "SEvbSwzjup6vk4RxPBT3ANvf1tvwAARjubXaFq8mhrRuQhtSJVFEpde75eNUZ79XDCvU23wBowCo6sonUj57uUW",
  "key19": "5q1YxAbZssCHqWqS2hEXqHzB8TYAxGRLoo8Exi8ePKYa46Lt5wcKHu5fvYhbEmUfA5qigskFSgaGCE9YmTp4U8dx",
  "key20": "2sd2cDUuLGkdksSSsqk3Fi5Pbe2NZwHVWieyZGHcatvKLzquA2nQsLVPFWeV4f4oirZJ3zQiD6aEiViBdeuFH6oY",
  "key21": "4fqSs335q2RJFnsghU2HAvHHDe6nydGkvTbbWoTLTbiAkeYiz75zpECRFqNNpDB7dqpzM7xHFKm9WxhtGzcAVPUV",
  "key22": "4WLHNMJaHXazLwpYgA5yDL7eA93TDVUr7Kkv844Wifw8C13FFsec4n1Z7y9mvuDVEfus1E4ohZ4nJaSBkFSDUec",
  "key23": "3XXJQa8oirnbJaWHcQSiS42DXwpSaa9HV1jocPTdzyqvk4pQ8jFC9CsmbSBjudcGAG8SiKZi9vYPjogeKw9KoZnB",
  "key24": "4uQncYakdT1XPVgdML845DHboL1yTcBnG6DZsLWZkwRmJdArfmntdCpYNZ6PiUuo2DhjkWqUQq3uozfx2GB1PXZt",
  "key25": "5jFhoyuKm27fjMbu1uWbeX7zJkLRTCnkjZAHypNQBEY3LPSUNGx87Zbm9j6Drb2PM21ygd6nwdkBC2cqcEPrwu4f"
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
