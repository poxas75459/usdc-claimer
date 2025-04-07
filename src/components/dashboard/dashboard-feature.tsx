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
    "BCX9jwHrzEoS5LFAftYUbF4qtHcC3a2pYvRJRJw6sTNghYPvzc4mUSLSNeYwYEjpH49refEsGaCdukQraozZu4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guee1ANSossGEga7eV3SHkqVt2xRE4CMvwKPYoqJC8Do4hukPzoG81JtwQ7u2Epz2yGnuPoLsFKqXvi1rbRYKfy",
  "key1": "2c61t7WNoBtXKzwJLqAU7GJAW56zJ7bavZCSX7SsYG54TENpdy2GefQJPjYZ3o8Svi8wh4mtTY25PSSaz8j7nBp5",
  "key2": "32tBM8KMpqMj7jmA3HjYKmpNnfkoFkUkKnruw3fqu8hDwjWkhgQbgLNYYo3gsnojob7pXX698yDkPjLND7h9JT2e",
  "key3": "3SJFzQzZxamESws4Ldf1Z51dgHdnqADkP1JF5XXF9yjR3G4xDPKAXD4qjJcf4p9boQ9B6ycsHCj9sjRyw2EZ97nn",
  "key4": "L3d7kxRxijjePKYavM8XQbAX82aD9sLcYaSRPKL9qXn7mahG5rm3wQt7vchhjX29fBjzoe8Bw7eWz93U3fJBmiN",
  "key5": "5wHjKGYuSxa2skDD5g2bdK6AM89FRUGbtk8bu4Q7q3pSx9xQzbt7YjBvRM9d7rqZGXkuPoj7ev46wbEvbPuepeVU",
  "key6": "4uA5vofCsrH7GcYcuvs7gMCZbkfJoNoQP1ZN3trXGvWhym1kGQnLCN7XNJvXebuiVQ3NwJN1da5AS1Tu472e7G9S",
  "key7": "2CFeK2iRh4rcY2DJCsydY2gF6ymoivcZ7ZocfWQi8HVnWEz798HrWvUwwFdfA6ahzgNtfDwTNmQYrsotRA5qBH4m",
  "key8": "48fC64hQYdCp1u8qWTMSjuiyiRmvERmEJ9qQABRq4RnrbwHz2EHnT5qB5uSQQ9CTNahL6eWXi7imzRWEJcwBSTQU",
  "key9": "4F4hD6KzGsTLPG81rBgq2ktnNpGXpuhU6FENBamMpwdqdwVgsbaYk5UWaVjztrHxCL6f8xyS4zwgRQsw9DbmKwo2",
  "key10": "2xUpcMSvaUhSMs2qacvnFvDU7xT5ofGFWNm1mPnvv7RJfyeDMBecWDRBU3ZxrUndky1HMxnS3aQX2m4ScdWAqruW",
  "key11": "5iqt7q2m1wL8DiRmpsxNXFf5WfnZksUgTg9JVTNZDqUH7Uy8JqC3vsSYxKEVwsdQLUYucHNty47zUo5E2gZjrPyo",
  "key12": "2mULkdhYGV1nkpdxChncc5YWh29VEzekicqfmAVfYgEg5JV18cb7eK7gXpzweHLT2fRzWDr5Ku9KCJhcPiV2g6Vj",
  "key13": "5GMtoG3jw9uxC4QxCxzC7srtCYYyd7c81bfDaaKKCQbihpExF8bdRU5RVKd8ENVcMGVNcY36fCD14K9fidCZVjH5",
  "key14": "4MUiVUV7HyDFMPpx8zKBDbRnSBe2S3Srz9ZUSnZpBYzKBHVyfxrsq1V1YpRSa7MdGDAFYnZUvfzDtYTedwqT9bd6",
  "key15": "5n6XgQjZWgF6yUtSktZsYpc17ch4D5AFdUv368fX7X7chFCY8TSUd9dwHJdwBgPcwXHoe42pN7LGbH8RXf3Rh58X",
  "key16": "4ffvqtF4EvVo2wyWe85aKE9nNgJYaZfxLVTZLEbRyWR5arv487341HNvvCU8zexPbTBQYXMgiwzcyJfdGQXDmy3H",
  "key17": "4uwKUA4GosC7as2aRefFXKHBZub557ntqy37BdJasnBNJyXddjDRTPgSnf1jaz3ch5d9xaQnqkzfwo7uDfNjjeMs",
  "key18": "3pmQ5TLqbhmpHiPUdhjaF28mabENYYTTJ1bqGJ5NEjU4rSdMLt4DtQU8DbcPdrtvXP2MbEqbnrps4hvK1QKUyvm9",
  "key19": "2MJr2gF4HVzqm4qG6VqQqTf4PMfeAJujE7Q76LrC7jWqWC5LMCfvUAN57BA2jgBs6e96WSxsJbQEPPLKCTKwnyVV",
  "key20": "2C6BZT7pBXfMyoapaDM9EdhL1wr2h37LN5WhuUj4jop4agHTvqvktsoMM6iFJaxyXQ5vWnpQ5LKVBFhoJofzCtL2",
  "key21": "2qx4PnrwVf7DtB53EKMpBaLgMsDfR4W4YVy8a1DhpJq72M6mVgtf7qdV7Fv8MV2HfKJWDo7pFqH2oPTMkpXH9Rfh",
  "key22": "2QM4WL9rStwRv4UAVYQCNSUqfhhhDbj9GN2DmNp8LVc3wThkHt36nhCUUGyn1so55Ax25FNTdADN1Gvm9Jzxqjxm",
  "key23": "2xxgK2NbMoQvZhxBV5SkoEioxxYSkYZE3XjX3GfTQKpXBKXDEyhDUWexCU4nPUQAX1Dwy1Wq9Ekp8GTAeQaVxULY",
  "key24": "5MEk55VJUVEma6nxz2HLRLphBSjt5cexpTNd9vhz7tLU6xGY1yqwfa5vwPdEyaEkoWtF9ibYMCJLMgFXiP7t1nMP",
  "key25": "2bQK83bPwZKT441n2prH7iDLd7iwPmKPEuVb38aPvH265cuHZFzJa6HotXkDdyxBzCeQAYSNxEqwMtsY6F5X9pth",
  "key26": "4imJNkKfZyWoTs582W7Yj6VLEoLjSXKSn2tZJBNaKo1nrtgSAnW4JEcPH4y1XBFSCwy6n7rHPRsANRannB6S76oy",
  "key27": "3NbucHfrUuJPhLF5Dc93C9N19ZZMu8xuiHGMB8sStgGVnWfER9KrT4dCEnv47MdHgktgYPAigWn5HjBUVYGDNGJq",
  "key28": "4qkJ7sFDUue14r87bndE52i9NRtaQBZryMqFpq3UaH56ypSWkzUwfe8LAY5KBc3TYKJJD8rGkZCn1Bhupp6ZWB5R",
  "key29": "2T9maQkdrT1Jpuc1e13czZBk8ZD1M5ga6goWPU7fh1d73EEWAbWMkjn6tGSzqaLPADsUpvGuViStnoGGKXQevzsB",
  "key30": "66hhV8N5sagFqFEY2YSGvy146yDkyVdQxZVhwMD51mzVARvJrPFetaZge1p7n3cVhBXV5AVPFu7DJxpikP4umSLZ",
  "key31": "2d3Bm3aN5ja1wvarronmiwUfJTJuDZXcDf666bxsVE5uCdZ6ByoZajiRZ74KQqgdQoNqjF3bcLmAoPvTpVjpCFPo",
  "key32": "me7QoemeTn7dNYcSdPWWibgRY6mb8pWQt6oUpF6Gv8vmoqSKEYY92ddqDWS6JZjVNe51kyarsaezsUmYnkCkiqa",
  "key33": "4V6QpXtobmPJmVUEJW7LbRLXMjCqZLSVMAvxnJsGU2WKyBoVVDSFnDSFjwbQ4f32M6NKfrpWPg7PsgdHE4wYqspU",
  "key34": "Eh4JBsDVXJPJjtpevWc95rddusswexb4knqGD2Epj579RQaUqo7d5RJEGdf1XxTu5s5QLS2LieJegXCVsXrTzqL",
  "key35": "3Bt86Vuo7M5jpSWV4E8fyZ74hXyCjz5G9sj7chBqE96jXTkProjAdwWtmW1B6Wh5Y7bHcuVARWawNbevk9CosFFL",
  "key36": "2nEDoRkL1KfvHzy19u5abixtPszNCj44QR8mtxHaZ5uzP5aECQvkcgJKQ7mMUfxjCFj3wrxh5ZtFUWuXqCbmhzwt",
  "key37": "4u7kDPvYJqVEMA6e8NGB7fCioXZB5si7fa1j6mtKj5wP8RVosvi2efLTF8Eh4sN3u9RXWERbdZq2WoghWojZHAnW",
  "key38": "2AxeLvH2ieaxrzD8u4pXK8mcLgSXsXK8k2jUCb9jnvLdiu3aCtbZd3W99eX4Y8t6og58HZQrdwxJwBJxxhfbunvG",
  "key39": "4FTEXRcihF2YyfzmQaLBfbXJjhhdGnxNyoa9EciAwtmUNGa7CVSk6hbB92F8H5NtgbadRD5r59zdFTkbQ3MATUwr",
  "key40": "5XaLKNNXEy1BgGzG8mZzMu9Fxw9GX8XtA3UUgsq53pRiqMSSSFjFqniNmZPEn8a7MYig6jTURKbXpMAHwWNPdE7f"
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
