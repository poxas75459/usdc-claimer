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
    "4frRjS8oD9z2mngQJiRhar62SL4zJm5Db4a4fPjWNsdbXgqoUEGvmWZS6K8uPAzkPcLUerDzDQxpJHCsN4GfSTxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECrjpxiPYJRwqVqk3yQZq3Xft3QU3w1EabfkKPZH35gnPMqBQ4D1jAF8ajtsbVa94vgZGFiBBp5ncUzhPJ792Lb",
  "key1": "4CwJBUvKCMmQ2so4eVeqD9KBCLmfD7fT9KzWsKhwRLEBTXKQYUGDTNTmqbzT6JGmJmnWvPBwDuTRr2QXj957tzmJ",
  "key2": "5cCY59X2RqLErHKUQuGgztrvdfZsMF4MzXEPepQGdfJivn4DA1nNiW5Ha4YUyiyS7zoZ2u1aQTAhQFRn3FHEGNP5",
  "key3": "2J8JHa5ZZ19yuLcHxSS2hhZtZf7fD9aCsh2WdoxLAcAvocTRhXrfw5qyV7S9rFukCroGggApWVbsLtqxGgeZYrtW",
  "key4": "upSZ4emfJa7cmKmToBkNxN8pSBjkdFQwuaW6ZpyJrPhoEj1j1pdrnYq6YFu57QW6cjqsSzcvgejZ5JkahKQ1hoN",
  "key5": "5jt93ek3Xi79bctQp9WNUGj7RWGj6Uqwea1yu3jTA1FStCsFJWeGeeUUU1BTBLHiQbbFpDYd6jdNXDH6w9SZgCZk",
  "key6": "5aa6WruTqWq366bAuXijf1DXygEL7tE5ZHPZ3EEYAZAdut64sa5AfVsonFtSc1tFey5FtLt7gGAGYZUKqDrKS31z",
  "key7": "4Md94QtPeG2E7iYoGLUuMq79LxVd3izaymj4nTr5BTEe6ed2s2U98k91ZtHKdHM82fEMkFiDKKdEnUwAVe6zcCER",
  "key8": "4wsr2HpMFvBgstG87j7Hg65Es5JDhsbWzH5NTiBFvPLHScgjZeyRKAUnLxhHdZjdkzb9gzZ1CE54ZWxGp7Zv4p93",
  "key9": "2THKMAc5yQMz9FsQ83bzZGKt422vafYf8V5bPFLahgggh2objxy1ScT3vXKqFUqfDzAHCG3sS4RjK32hQEFrkQCY",
  "key10": "45SU5tdPxxJmhp3abjPZfA2jJmhBJpL9iafjTqTXjFHkzoZMQhGBLLscVy4qE4JAHhLDGddCJmVhs7ezErHo4Me",
  "key11": "47SXBRjxRrdcxtXYVZopkpTEj83onBzEswSWtHcQYXJwicsPL8mMdEytVvaV1FJWkEyh4nWekJeGJnHSK2XhfRdQ",
  "key12": "3jvX97ZDtszuPbk6u4rUFLK5e7FPghtJKVB2qNusLkjfdeHU9dLEYZhFzSQpcKUbcDuxJQ9jwdHwR1ppWSwUd5q5",
  "key13": "VKYmqDgjw2mysW9pk1Adx6WHoiYQYrJAqn6JCz56jqD8KTY9THMqN3dWrcigsq4Xvutk1F8caa6Fe8mYcmnV67j",
  "key14": "4NsEFykT6yjaW93g37eXGoqpKWkMkr4aRDeKWujCG9GPeDXWPZgzRum8rd2bn9faDvvDqsBS43zob4aemp9ZRf8S",
  "key15": "3TyfqdFTv2ZbVWCRRVBQ29kGQFXuZZPTURMXjgLuNgDW1NEZLXsDGMHAwL3yEg8WCA1XvTKrtvreMZXckDTMGpoP",
  "key16": "i6Wx2UNGkzzwRG1dSfd3SUdF5w6Y51jMtLQ7W79NYSdVToKTdYmimxoutiHzi6tCvjVQCzD2ePpr8frkarBzEmJ",
  "key17": "6uCk3E19LbbVFLcgiN9uzxMWmeXcFGmiXHtZg7YHvT8KWXwHA9hJbSiQeXpYMUhJEQKoH6XRXXGN7Gf3uz8q7GK",
  "key18": "2fVVKoKYu6CcASgBHyYNfg6KcKf5FXcJ98r34BsHA1e5Nkwi9NcULLMhwjphfMnbJmpQmSiF4TiaDJR5ARWZniLa",
  "key19": "r1BPWv3TLfPPiTRG1jbAYts1nQY56ThKqQy4AXB4FEpokmWuvFpcYZ7uCAfgXUxHZ4DL1Ftqa9i2jJYQorBfA1V",
  "key20": "2neNb4Qu74kCj8oUGwdSffmGaBYkAjoxUKuVCtxgPoPwKREiYmTNKqu8xgtNo5JHviKknizqrjMpxUfD13tCqWKi",
  "key21": "o5ACTn8pcEe6rjKo8rj2LNaPV3KFtNfjWbMcjg3YLTmQjJYUGTUy3avg9KSy35XHqDNfpzKf7hL7sPywd9e9dRf",
  "key22": "5Wtdw8SKyMytvdDfnnwvvALDC7osMsAEMGLP4cRxgCJX4q3PnT8AxgCtEui8BGvCUiR7cWodE2piv4SsrtCaNcWi",
  "key23": "2daEE61Spayrby4YmSQJzJK2o4KbD64onPBPRDZDaqbbecEmHReiM1RkmALCA2ZSqxYzcwk6kA4wAL1GiAzwgeNu",
  "key24": "3e2AqrYwenpi9L3zrCp2WgioAjA2QqUmFm92w9TQj4HFCNFFo7H1MoKB2L5pDiQHhJMmcchDfqgv3pZuST4M8u7m",
  "key25": "268KmNZH67FP8c3cHmzN8cLme4Y1aQm2b6N2cM2mVUSDccG9B3vEu85U9yHqWb7TLcvzwi3PPJRMBQWUE1svivGp",
  "key26": "5kp1mdgXouyYtTxMvoyEzZNNKxkq8VGWWAbGwugn2tT4yFa9wi8kjgee9xEEFcfb4HQAcvvS4KfFaUVivtENyeif",
  "key27": "5BpyexS82NNDT3TXK7RKTA5B9YYrRUYnbqGToAR27pDeS7RsdY2dNqGrReUqyCF5pVAVHPxPu6x12CeRDaFcJWEA",
  "key28": "2jWZvNBs5scwZXBzo1WbigrXbv68orXj5uWjunLxCR58Geatvu2d33osUDQWS4K2UDDRxRg7szApWown9SshJixW",
  "key29": "4kAVQQYk6JNAn6553KT65dwpKV7o32tvhnxZ2vFWd1pBrHuB9HZJsHvnMk1ckpVKrx12y36WzC1GZ2Dmt3fL9Dkc",
  "key30": "4YxKxa7DHPrdrixK2Nz2Domqz93kL42tU6UXzvjGr4NHTwX6VWkUtLQHbsKVVzCEfzLY4mE8xfMbGz6jkgSmjw8p",
  "key31": "2QQ7JhsSvdrNqfFuQuHuySeHUBvz5x2HczhZEcKZ5sf649qoaT9xZoVmjAx3gZE9GYLXALcjfopxnFhtBMDJQCHE",
  "key32": "5S8DoSpsFMTeYA2x9bWFAoD3yZ7PjCcxH9DMjMVbW3bfYynttZYjcVC5wUabBgc4v6bs8FnpziBNhbJjn5xHQBqz",
  "key33": "3GtdisUopkpUcaGnxUbP3xaGZk8GziXGtwqnaW4EFSLJwpCYdxjSYw7DosS6RQ5TetNKBvq1UK2nzr4Z1H4wewP5",
  "key34": "3dLkbz7K1DGZNT9U5EndL4mMxKvwEqPmK5raS81smioTVaiZXTFrojfVcMU5eeKLrtuRFSpGtYUyZ2Xe5o138H8L",
  "key35": "3FwvtJ1vn5Nnxw9F9ReHsTPxner7MnEgyu5H2KB4FpKuy2BRVKrEYq1yLTn7jrzGMRLGsREPoKKyPVZgsRy3cA7J",
  "key36": "3QUVNY2J4T1R91iabgJvXDJwqvWh9vpZLDRk7abfNFMCeKYKTy5mLy7RVxuhH7amrwuJVEXsUinjf5yjTh6iJTGt",
  "key37": "27JNj33CQgCvX84wPHMxr9EVDAi2o8YZcmdCMghujpbLyZT1sAJAJW1AbPUSTrC2rsyTACEPkJti3ne6eDEyDYjv",
  "key38": "3GwUg5vT9fnFeUqM6NLzgthWZY2mExAZ2ZPEizQxc3xKVrgzTGSNXZZuBiHRkhtfyarUSqksmcAYyKR5p6pHr7jS",
  "key39": "5dCngLL7Zu678Fbrh7DrJ8ZRYoACUJnEiDvPYeXGLCzBSDgoCkJZbiM2NR5VpubxnFrgdFeA3DoJykYF8ttEqzjq",
  "key40": "YVzZGJ7cgtWPzDH9RzAcX6f3txEwhwX9FTzJqx6DTUeLry8whhFWDH61gDmANJ1FF4eBEaNxxGaETnU1g7we6p9",
  "key41": "5tsXjEHSyKKBxRNVqKDitaA9GfevpASYDyRyMdYqfgibj7Bq84Lmw15DkmDEbGvUHb9Su6eJr3AGzapYcMQQGHzN"
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
