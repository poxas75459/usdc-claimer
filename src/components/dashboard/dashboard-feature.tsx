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
    "4KAnYU97z4x9gk4ySvnZ4jxnUjNw6A6ukKjMqSUJUbhhNYY3xHsYi3NsaYmjL7iTfdyeSwZKQs1inVxG496rMjXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9wkni299JADF6ZnMKrJH1bHzy5oXnMxRFWtfbUB1pqTouvbgSk7GTqDXgHDTh4egBbwXq54xyMraY7gpaf5eyQ",
  "key1": "58YgUVgSvrqXAFCDD1FUDZCEjH4Mw7ToWBvtUTpkj7aPsjtY1ZdyFcF7sTaJwb38yjhbwtQZ387RAPxmUsbxDZD3",
  "key2": "2ETuWR2nYEepLe8f3B6Z42J35m1jbZYK3uN3xmA8R6qusG7B2SPz5AvVAqsyT8fpAAY5vypDPGV9ZegTQHiy59Ms",
  "key3": "Sn5vdMAobRerS3dm1HaU9ZNoYQ9iHJEFWZJmLYEhxG2kgqRM5X2GsHeUzu5KknBrxsaMoquXArTzEvknxnS9raq",
  "key4": "92QmXdmarx2ttGrQkZJsfL22uztYGLzA7NTTuythsG9qU6ESbqt3JgK7DiV1vHNnV37jjgZh9dzUo8WxaqBb8Uy",
  "key5": "5nmWihksA1e185Qexi6MxchMD3YkaipwjA1P2JkqQNQfSX7GtfoP2ENVb2c6x7c1U75TgADst5K1TEbi3BfRtKpN",
  "key6": "2cHiQrppdbyb34Jh13mNMUSYuJZeQVzHQUyNazsvMZSAhHc1cpUD8g1tfqjGffQBmkU1TZWqJrCxrkwEHX6Q38sS",
  "key7": "34PZ2yLH2dKRJ4VcYB1jB7oedHjsgHiKF9R7gDrEbR2fFXkMCopp4K3GMSJYDji8vfWqiqhH4RgHFnaF6wL1Mjt8",
  "key8": "26nNBM8qEBEFsnZH5THZ23myAhRkNa8jxyNsfrUrz5atbizDsmwFT8HdYUqggfWmanS6bXupWiRJ2VmSfKhj6cYJ",
  "key9": "4fNnLphjkqGa3LpwtGSHrP6jeAQtMJjBX48QS4NBNnrKvujhSg111CfbSoRqWpyTgTXFE4b3HfqUsQXf6SZQX2BZ",
  "key10": "5XcaophVnWuYZNTfM5qV1nyN2Dv4vQU4k5H15XvQDRjvYH3FVyRL1x5bz1ivbmS8ZPvcd9MZkq4ufVW3wnouF8Yj",
  "key11": "4z1qpCezV3b8DkRcWMYfz3eFkHXeskWNmswsnr7ZvpAfd1rTDhwPYgD5HqXC3DYSraVLkrvMkzv7HJnGtLnFwoDj",
  "key12": "4tc5KRRs8JR3SB8m56eJPgKhfSTzTgXrXSujfuqscdGiDzZs5EV6PSLynDR7vKuGWEGsZG5LrmRWYc2xMwuj2vN9",
  "key13": "5oSp5vpnoGFMBVkE6RAnhKaSCrpSm6z1Y27FaMmbpX5pqEHPDsfPQhkLSrFHhUNA46HPdaurdVrhT18w8nZ9fdj2",
  "key14": "3ctQpNzirpeHuWDKXgFXCDpFV1Wtrv2ySMyDYB69dbLfLh4VHQwixrVxJTKto1XP43dXeiYc1dqQZDA842ppwZPJ",
  "key15": "5GpeTeYsbP1WqN3GjTMRGoFjjbYoT5WtXkAQk7zA6rwEBsPNUrNrG9P25P2LeN5Xb1xCdJzv8QufWft6N7fyn4fU",
  "key16": "5Da7dA7WThSsjJWBSb8kkhxLgeAuav1Dxyc6RfnroCm7yW5nt1PbrFJ7jcxdrQR2heVgGQtTge1J9D3z59Ga91VN",
  "key17": "2RZQPWDGMMbq93MjpSAVwRPALGMNrjbctvG1cZQcBHMg4i5iNNUh3MpfwRQPtWLNGjLzK6C7ycFZf3ckN2qejAcL",
  "key18": "4EagKU6VdfD1iLkVVMh8XYpitY6ZWQFry9W9gRXRsYKZdekESNtkb7K1EDcqiivAdM6sPLFxzD55Hzd9EvDxA7ig",
  "key19": "3CPUL2XxB4pXZn39oTZdS64ddnvjyVnT1ZNt9CRGegVeyLQc5E1re3cVrjE5ZeNQPxkkmJK233QxLQnb1Xn1udt6",
  "key20": "mTCv8of6e1uRU3nNHUtLibSsf21E9vT39Tqn3TPBgM8txAKzKihHUn9LkLErzA1XygB6tQhNmPCKuGpPGVoKJ3Q",
  "key21": "56QWKqe26RJYTsbkXVhYhf2RM4qrYEEemwzLxp1zcYKtHPrsRj6Dz7AcoYQMgR78ynhERzoc7S2VUTww6PCPvJTx",
  "key22": "5VUR9A6awzf7HRPUqDStoJhvdaoWeY7Rbg1EFgoyAu7rkXGM8FLbr6baEUEU2ZwPAc8JETDwWTFXQnbtDTfyTaMZ",
  "key23": "JGGuV5Dou1QmzbUYGjP2NcDzNVE1pnL69HBBD3aM5DTPH1gtxNTFU1xLDQqi6u1uNokvRAnRbgb3FpyVJRXcpAH",
  "key24": "5rRTfXr7RMZN5Pt1njHNc9TiGS69CxT7MVsAbngWAeTJvrN14cdkzJMmy2CzNJDd6hMZ9WxhRXb6qSMmFnrsUyMH",
  "key25": "4W2rr2hCxfAv9aGvHPhGScN4ExAgNGDxvK8tnxmifgRHWm9pD4SZDrNUhAgD5YpqLsxMb2BabXABjYirsfmwMc6W",
  "key26": "3qR8p1iEHmqVoA83qju4WdZQUuLbsui5fxT8g1sa2UP2V85yngjrdVRmF1uJYv8skTKcKpMKMvkMijoGWZewupMg",
  "key27": "2zfHuB35prBXLjWxiDDUfzcsSnhwy99ipzfoSpXWtaEcfQ7nGVmrscrM4ifT15Dns9QZHCzos8yiUJiNBFZrNXwX",
  "key28": "1fKVATFcdQEgrviLXcMcXUDKEHRW5sKPtnkZQ6gSsUVRBR9sEuAXyf4WUf9zm29Mngo9mGaMucmw3c64egGLqvP",
  "key29": "59ugBFBwZmFrcby4mKJb1cJrX3w4cKBVMmCovGgZ8oYmEBW8wVVHzznqRPUtTWHZqysYvknZaPWq3XHEK6weJrAg",
  "key30": "2SfNBB4CKYtg5DvmczZkpHdd4QTH3eXABe6CUPiyYv9BfVMvcZug6P5iRscdRfbAF2yZk8VXKmFaKo63aFH5j9o2",
  "key31": "29cpZRuhd1Ccw7dGmUrEXwFHjrErJ4KfZ2z6KrgTNy4JKBtCidnVTaYTpxf7Jddb7FEt3PyFJ7Zrni59Rqx5v5bq",
  "key32": "29Jm257C7nLuaJ62XwckCJDDiNL68CVUMCqrggLfGDBxjoSebhTGvijNUPtxsTXrBkdpne89qGwcRbnqnd7fXfmL",
  "key33": "3FxsHDqU2vd2v3GgqAKW4yNdch1obfXVrvpEMobf9dWKfdvyNnHEBpXEReukdD5Q3fqPyiGvH48nakXEWtKAbte3"
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
