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
    "S2qPiRgusYq226EzyELSmPxcmtt9VmuvHr5GCJXae1Aj2uza6xR5cxLe8qetrnLpokKYiuSHHDrJeMqXdJNgyCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTpSscVUD5z3psdrKfWPTgTgiPZqaiaH2nyNQC4xwBfkXH7rZ2GAzUSVNbwxbZMSxndRBM1jRswUBSu3D4mED5D",
  "key1": "3KkzSAtSiJeM8ZkYnAp6zDjY4kED6cqZw9urffR4Z2GXp3bwUepQB9A4vmLy6XeqSoPC3TbRNM2RZFP3LonTaejY",
  "key2": "5ZDeyTysz4tikWsc4xD1q4A9sxLYFHsPqmh24FyAXHgeZQYg3LRZgTP2pYJPrDEp4sJwVRDGMJYuoX28SaQoK9xM",
  "key3": "64RXmYnV3GKdbWcPk2kZ4AdGWJpcJoCtbTRg2FXY7rDrJdqvye7PPY6wm9UBjFPRhF5e4TYKX1gmff7JMXtocoaw",
  "key4": "wQmv5bBF2KsGe5XSaBYn96z6wjMNctjXJzBZphJFzYigQNm2MvxxQtHro1fxg8PcRERrqCnJB9KYHkqYuGfQykr",
  "key5": "4iy5nsgRZFo4Nzij6Phxir3mZFqBzB1C8koJJhqfAKqu5JCg7HjEJaowRCBsgPVYq7qi71mb25fP5uWFBR7Lxeqb",
  "key6": "2LGKDZyJ9Cd9kDoPBGphNoS8FEeXzBihvohy9B3h7ARcb1S3Xim1MNCb6Esd9DZt3kwHohJ4mpXdev1oFjXV6BG5",
  "key7": "4t814Y2HHbF8tf2k96roqPpVdNuBwzbT2k24By92njM5GSSodSWXXRGWPzPDH2pae6cHg6ZyabzTjBjDKkUVwfDR",
  "key8": "3xk56ZwnPjZnqgHDnGCMkE4u5PyLoTRD3TdNGPteRNACyQtiHSb97u3YRurK9WPHjGxCPqsrZqt3zaoUvsNfpxS8",
  "key9": "2LzxzZL7FEoC7dFAHt7uhfmo1iE7xumYKaVkAS2fHtA64U8EXBHBhLHDZPo9g477KcfrrDVzW9x4A7qWxakoSMRf",
  "key10": "48wE3aLZH4eGQZ74mLcX9oNPb7NXR2QGWqkJ9iyynrwHc5aBrbmFVBVETAUrLmzUkw9iuXhjzVRbZoRLkygRRV6Q",
  "key11": "X7ti4sxKDSFdiEDKtwRrV53xMkfvj534uUkLoLu1uhZwPvkuh7wmsHiRuiPP3azJSi8VkW6astVDrmU58W3Z7RX",
  "key12": "x8fAFHTJuk9UH5AfTUxHUBHiYpUxNuJErBFQD68byrvjrQFxiT7rwJBKSksVXX23X7N3ios55kJ73sBWpNXuJUf",
  "key13": "2o5ZboKJuDjNg8WXbEa6BsFkj9xLMhqun8dGaCUqGohPQz2ApdzisLzEXPB5xFvFSdmEMBvbDXvw7mLQHZmYnvXA",
  "key14": "5ryE9VHraqPiJe8M8VWxbRqkNwUrLf25MkUSLpscat121wJs92cVFgjDZRKBWPvxSJLSurgZX24fp5vMw7aWwUsA",
  "key15": "EYFUoPu4QBbf9hi8DQfck6gbPxjWzziFqNv9HU8CGBF8QNejFpcRYRSHe4xGnH344AR6mg62ZeufBgFTpgu9uSm",
  "key16": "5kLFCH1s61eyNJckPw3WcFw9vbGAMZWg9trT9QvTrFuZiyKGMdyqVhXhyHgvZkYb43izcTQiKcRD1n2LnFQHXgDH",
  "key17": "3c43arpAweyu4TJ8Pu7SqujHudWCmgbFhTiDpsydqEdjrCv2V1qtVy3YbsCbq5Uz9dbzhwxgKDi6AK5gpiUVQ66c",
  "key18": "3gXotyk94G8rPdgPJqMXMTbv5RWeGncWTSqD2Lx7TjoZWYCW5prqSSrxrepbkbvMFRnKwtFGs4mchRzHZTJhXGCk",
  "key19": "588MxaSDwALSHJP7eXxAx25Ggk2EJzcDDkse4wTv8cUDqKjsPu5Wy3xABLvEsqJRThV8fczYHNvt5akHaAP4nPKD",
  "key20": "4Tjop5XWJwRERmoLmG8kpnDehWqSyu3T5mQ2U9sXEfzNwXhc6AhGj7gtza8YaWLSdeNEcMCF6p9kdCRbRYP9f8JV",
  "key21": "2Yf4rdQNAxEcc7TTx1syxKoFe5RYwQ3mbwEyw6C1dpBXGdeTqt4JaFwcDrx5Zz5Pg14mFSdn3x6ub7iF2B34pF1p",
  "key22": "2EXdMARuS1rbhdb8RXThKKsLqWb4mCcnBjXqTyXuyaK7B2UKbDQ4yioXAKSVdvJ4vcSbnivnZmQyRpxfE3XfShqS",
  "key23": "39G7sZRfs6V1sAWRub7ib2QqGCFhyh7355qy9BsHnQAqfSmzs5Rnyh9gX6ewzTCTcfmt2C6qqgtwFw3R9BbuMpny",
  "key24": "4MkWvtMgeVFonUit2zJrpPQf9mKxJZsJs2AzwEUtzodiA4W9iB7m9kqsThZtjvBL3r9TE7tiZ5NxxBCS6uXRRH4N",
  "key25": "2CUqBGGYbydDBAGSCtUqguFW9FfaZEvGLLoeQgmm9yLMLEsPseqZCW5AXdxRJT5drj2td5h6j5nJMKofPq9qjbFU",
  "key26": "65hgZ7W5eT8AayctEzkXuDKeExrzMHqtfWnuamzTm9gFnJ5Q5VxnyGX9BK3MdHeD9hitUnEYa1eM2j6YRVSRaJMv",
  "key27": "4z68AKbMgB7xZ2KfsVgG6eeSB2rLzcJcbDERo2WJwqNLxJSsi5mLNNvEyAKAhG4cAVyih8YwimAfNEidHFBK5K9C",
  "key28": "3QaxAnBYKyrHAUZhsf95eGTHabBRQinyJVgAX8FRcQx19aYH1pWGWNHvYnhbm8iZG3dbGcQbcnAShp4riLs83a1Y"
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
