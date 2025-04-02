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
    "aw43zSWbpbVjgvVKnCqYNWmwLc78fWysJcCXbHbauVUr6HScCyEXHua6yD45UR9E29mVyf4FTVdie6AMUHjgrey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GCaXMoTmSsXpQx68ZFymANhwLPPwhT9mLAXwBwftyzBWUWipgSyDJX4MDCigRj3xoK3JMZCLZdoEQhjQcdjRKNG",
  "key1": "2KgCqnw8ddXDVtMrC2j7thPaMEPfmwwbGzCx2iBHaxzFPYtXPvbtGtPgM46idXgpA2K738FE9F3m1H8Xn3N3ePDZ",
  "key2": "Mv3WZNeV1yPzy3BAQXV57P16Z9bA2CUxLVP1Dqo72dVkJSQo2gWdpRbHzvLFksiCQZdGLQabZeXiR1rBV2DQo5D",
  "key3": "3GAskhiesTT1z14zSMHpPiwcRxoKcjPQ6uDzJWrBTF9bivkzRFVrwHH9YQXJrr1TouC8kujU4hmuYzNfgWbVE3VP",
  "key4": "4JRyuZ6jyNtkeEDa5zcKEnNgC2iw3fuydxVhksTetC98qZhES8UWt7sRRfcJDBqN3wvGHXeUDkhvUeNyMUprd2yr",
  "key5": "2GnPn2WdPkYQZiLjD9xHAV6so97iPrH5VWmoB1Gomf3BVwajk9Q2Fj9QBTPFdwvTREuUgi1VM1uX3vq1jN5bsbjZ",
  "key6": "23zhj4xpaChvkUJGnpQfxb4VRRMqhpZJJk3TrHMuHr1CLLJi9ZteMYUwBoGGpjHiobyjW6DFDEmMNwH9Gd8TdvVF",
  "key7": "4nvbdrh7daWM83duwAT41qmvsr8LQYPvrz6GiZt66DhyFiFkVpEvk157ziH5SqbFePj7SxEU3SWDuAGdyS1rza2x",
  "key8": "417qeqVDwQjCzFqakBieCKW72pcqeD1qwB5VrE5gi2Ki576CZNZiPRKaJwH2pTTuDQ6eKNwCT579giiabHRSd1K9",
  "key9": "2oeTmt4iTjbbMnm4cnsgRKfisYR4TWDhCpPijAccje63kfLTZ8kRfTBL1pwQcN5aEPt5tAQJ1AZWJNdchTvrCqbL",
  "key10": "cx9QcvSRMrbiT82ibAmtjSgxtNwyyeWAP3bWR71NieNSCmREdWCom18kmwCr8afRPoKqCJsdXpK1ELE4PShWRwK",
  "key11": "skVnJQFxbtYfuKP5dLnn3UJ6QtS4WfacwNFjLb7CT9VerEuFoaKEaCQJHuSZPvYk6S5STQWKSQMsizsdd1uesvk",
  "key12": "2hfPXrvT6T6ZkWQS7gk5mP3eHpt3cBqAG4gSfMFehYnJsGskYHgG2GPisxjjHdzuCTxt6QojQdxH76Ufys7jRhb3",
  "key13": "5jmUAAQeBHhp3CXs6sPNCxmbrgsaaoCxTD9f3NcMmdBsESH8QSRZCCePzmphUTab5sqEKLoazaR9nywXzsYTzUNz",
  "key14": "2v7rC6PFG4mArX8CoeCbtjF81V65SYUgggiqAihT5VudaHxpWRrokDJejrXD44mQAoP94zwG5auzRQKdJA8MhKjz",
  "key15": "4BLwAGcmyqwU1xv4XckoBLj1ce6Ao1JV2Q3UqV3Ubqm6a9w9R13CNTtuyfxhofmZ6X3Wo6PNyZgRq6bvAvTk9njT",
  "key16": "5V76PHr4q8gyTKM48AYuX9u1QKQ6UpKjNJtboDorAVWG5ez2DrcH1Tewn7MFZ4ckrFxUWNu7ACxqLR71nWRR37fk",
  "key17": "59b6Eov8h3QN1gLh33CEAbBFm3DsdCGhMvx5qzVCDosXXBpwuwGaEp7uZgw2yE834atKxqXknSZubAWddQ5EoeTr",
  "key18": "61NBKh4xW5Pag9LtkBKJNPBxcQnP5upaSYPQZLAjNk4V7rxUbmmaaETQzfkH7FJGE4QQPxMoqe6qq6prnaKyRoG2",
  "key19": "3fWfbzUrb1SyJJX1kh4Y9N9sJs3XXBXhCcAyrNpTsdVj1AqpcwwGspAs58rHVcgFEsr3tCjRWoKVRUW7veFmWz9D",
  "key20": "pJ21am39VS9SLTuqvFjBuzeXSiHYJCBXUctxvao6Dg7y3ki8kbZUCPhadtisHNdF3i1pcg4W1gU6MRuPxAJ7dpg",
  "key21": "5sfyN2QjLUVQ5mTH6iBYVzXuPfXtaF8WJd9ZdofmrJnQdy8MNBi3dNYW1bG4DRERXzxsPUHSW4zv1mWo8WPbMv8C",
  "key22": "VdJ59GS68Umcxz4Wyh5pcCEvTR14EcXBf7kTScjSaJxWtEi9osuHy6kQ9eGKVBt6JAR8PkkMxdRb1X6KN66MYx7",
  "key23": "5jPcFDtYa1N6o4bcLtDTzmmyLwPYWZb94PSZbFiUcAMPdcQrEGg7M7eEd8RVUTTdrGkQx6F1Co6ttgEHVEidPZpF",
  "key24": "33J99nkhLu8jLev8jcPn5mecndKkyy7XPm9V9kiYppoWCpMTWPWp1xDB7cRZwk175eBVeVKyGjYNw9AdhtxJkuLd",
  "key25": "5ukCLuPb7bM5YafZV7pyHjX889ybD44wEjxxKUXQHx1mc6FkBd4XnHQVZXWiXQseozN1i8adghJr69QMwrKU3Vf",
  "key26": "4BgtYzPKy1iSVPaRQ41wuJcKecm1V2zCvz1jE8kAv29978jfsdmpzGZpHr619GNaBm8ro1gjbTPWvmgkdgZB6c4E",
  "key27": "21y9Bp8jeLwUGjNp39ZTN87CsD7dSwCYjtt1ZcpPZ6JBuzffofnM2TPpomHzfuHKefBVJpHd58tCXbxHe2uDdxYN",
  "key28": "3fyU7LD2LVFMcteHjByC6Vu1tmGXXspKHiQYuwBLsh8pYNcxhD3G13ZUairowCcFhCnVmL8xMDgFhNBcya1EjFUt",
  "key29": "2CY6vK75iV4GTtPnVs7R1QoYeFtqeZdjXdGyVufDPknUeuL8bWGFmhGaZUDZeJrTK94BqA6M72CatnakqSota2YZ",
  "key30": "5GogVJ8efbnmEZiin5WvL13eLXwvg94yAUoFHktzwUAXL5hfqfN1b4xgR6SQGU59hqzreZNECiTjdzP5kkXt2T5n",
  "key31": "4boK2unsxx2hp3i5tDB8DHiXmuf2KKknj1rmJcMZ5umSkrssDojuiQDMYrxTeV2wtRcgzNcnLTJixQKJUEZLvMtv",
  "key32": "5ypV9toP2stWeZhaZFLFshsUGdsF7MZqpQB7TEMFJx67LTDxMot4DEfAiT1PsnLxiJaYLEnZgUzdvurXpaRqWAnh",
  "key33": "2u8PmazX4mt1Z97dXWzrxZzBkfutX5oZWPgRxECQxdr3pzpuuy17wab4hCFuArWrmEsx3MUg6iApa7cCziZXCKtv",
  "key34": "RTR3fr6mrm1BK93EDPDQh4gxJztAWUomr3eiV5DAvMnjZm2JhqKezUEVS1m71DWMwC3YNfghHHoqPbYYRAvpi1n",
  "key35": "4GpPzFeXST55VfggFMeQdbwrhgiyHenQi63zRm4pDGGTUUSLLD4NiEVzcrE9dXuo8XZQjKe8dUZZ7hPEQYuNuM6B"
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
