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
    "22PH6sMnm8ACk4pcGtmhQgfakVcWYJNu2dhDk3PLn6mFpueHBQnhgjz5hSnJncUibxFKQM3MDTxSDCYqcKP68x1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avEtgH5171FBVkDuXLnbkdXvX2A7p7AYjbfYQCVf1AxEKz4twQjGDxAanZzRTEN7kNTj5pKcAmPDPuU5gAh9fGy",
  "key1": "3qCnFX4LAxjmAULvnDimkP5Xemqewdp4KmEDawTZsLQbYuZ1DK5ncYSWHEHiNmyJtTXDNjbtxWkCCSAKojoqXv4Y",
  "key2": "3MKxWbQzVjeAgymQbhhJZKaJrUjaTx2QuiTsdAjhyV7qTseNjD9RzKuwZ6vBYXaPWXZoTt4kuMBBh8TxtacbVx8e",
  "key3": "2VLQmJX8GMXW62DdVRYLCv9uV7bYgShjx4W3WX13HaBydKfzkWTnTjHt3fHYTXPAKeUh4cGeaiL3xeEyhdn3GsFZ",
  "key4": "47eNyARx7UgTEk1SrrJcLH8u3HVmXTt11gW83SbtcqADoEjeETmkZr7TK42adTWm9EYxwRM3G934LBnLwLEk8g62",
  "key5": "2trubrK1ywWruA7h75jmpsFRKAA3ffFfdtWF5iaAYihW1ojjvrMZB9LaggHcWd8y5ogfWEdEfL82vKPTVEyTHEsY",
  "key6": "8kToaiLZS6nDUEQSEVpWoXhisqFmXHRm3B1cv5VdPDApMzfzvbkQYe8UmaZGf9xpJHVbwqFEjfwXPosZmTebUn1",
  "key7": "5HQDSX5BB8pSPDBp9mSFW4Je4y9paUffttrtSKCiCYh1CVprHeEF7HK2wuo4d2T7XdUCV9HnTpbwapMQKscVYunW",
  "key8": "2xzdRs6pVMkxWeBQNcsemT6RDLvrwETSq6Ny9EtioCKqTPUroUngDNP38xjohhJAWKbeCzH9K8pZrKquJ19c7QxZ",
  "key9": "4M75KXFDZnbDpmFp3qsTFQ3HGuc4i7h78EX2a91eEJMTZGY18m7vgxMLRDCdgaXJ9nTVfCQT77ew7RA66wveNqYB",
  "key10": "2YkftyvUxdxH7YLpAkVP7jwcRn3PpMYRz1PAs8CkQWMueAsjWS2ACfSdKLEKFUoZNi4LaMYexCvGLspLLJoHjJb2",
  "key11": "tojwhbf2KAaCwTbB1LpFBaARwvpa6Ct84rsgsxNGjPS1GofYKyBMUQ5cfDJsTMqWyruBDmaQbhXK7eR2V6qGqDb",
  "key12": "4iiK8wbEw9v6aXadgqfbxdEvsqc18Wk5wxwLvWWqKqtEdC1fssmbj5K2TvfN6D9APnKYvtehAMTTwD3pBwYc5S3f",
  "key13": "2pPcFdkxqpz4ooaC1VzoG2aV4ADLwvi8gH82byLwrZxw7tgKmjEKEUnLfZZZv7L6weJBacyDRci9yAdA2pNHBxoH",
  "key14": "3unD5BwTBpEt9NyvQUYyFMSvA9CWJBesZyQjELxqqanekbrgi8R17TPt6apG4c2f5sV3vSc9EqgQ1UzMGpPUfN5A",
  "key15": "2vNqT5XncNyaXQ3wu5VjP6ceDoFu6ueHiNjN6dXaSfKcYssNqsgeR3vNcVWg24UvrZRpcS5bkV9iUkpaf7o7JrH3",
  "key16": "3B4BxeWWMvvgZcMHi37feJD2enFfMMxKZuNgdhBNo9rHSfM5ywjYUWTAMKaGAdGDQGqC7PUnNJ8sLb8gvNKQ38Ao",
  "key17": "2uuKHBtfuTRCBuGWJ8vGskjRq4qhMoe9WeFxELeNDKDve9HYMgGk1o5k7L3d18WwSk42RBdG2SGe8yHpMZFGT2Nc",
  "key18": "64kWyvWQwkiPRLZMihpsXbNxTDQML7gfApBcpYPwEmVSfdAWNGrdAznGqVfUx4cZ8koz9z8S8ZZfJR4eLfZdAziA",
  "key19": "23cm2V8p6rR8E1HL8RF2HhP8f3kWGYV52yYmmAz7YBcDky53A6qcjp6YNjCKhboVdW5kVWCwDzg5tHPThDxH1aKf",
  "key20": "7EfkJZbKYdQFsvEFswKpzYfs7bF6ub4jTAz5BpFPoqrdpZujDbkSnrWHGK4h1ZTW27keE2Z2Kq9BVjLYbhxshCE",
  "key21": "43h2mymZrHXGYDbneiTiU5yQ2qajCezdGN5fhjaz6ESug7JtM5V4P8EzQ7peiyLMJnDXUoPvm6FAFWguuzJpr6u7",
  "key22": "jVrbBHQ57MSb34JyXsDAUtJNwiw7ZTgAGMaxN81S176RAzXN8dwYKwZHxeF6CUqkG2CPtP2qaSipLYY1j22eRzr",
  "key23": "58eCVbUfPy44zPSoQ5Ji3E8FUNFcTFbRWdakxnaGfZ68dqQEUetjW6t4vih8qa321t6P1Lv5rPLqwmheVJ6WtbkY",
  "key24": "4gnBaYsGTa2M1oMoFKwZJm49g5YcJen3XZxN21nNtwScRJngWiVQUQPEFn1Sm1ok6brjmo5APw2yJ5uhbutHosnT",
  "key25": "5exyqRJPp2rttvDVNABLsQsGuB97CmCyXJ1kiNExLJEsQcqCASbEucm4BFXuGD7UWt5kp1GFGvBzXfRbYdgvugy1",
  "key26": "5R2DaUNXka4B986WKQcpFhH2Zf8UVV4ERy8NbMAHEFKnJQ6xzC5C6Jg7tSzNV9SqEEqPcZHyquWZNmRcgv4hJSXE",
  "key27": "35M3VkuNpoMF1k96NuQQ7KWuv7kqn4tkjwVCpQbQrqWAm4H5C5Wzi69N7tNbFWKCo5pDR6dPHexpyT2KDjtMgSuv",
  "key28": "5zgYCdWbgcpPxqamCHscQjWD5HrATqHYKi3bA74792ZUn8PHnPWZqAg6MotwXTbiYtMaL6wQAUHEQjXQee4Ra7aG",
  "key29": "2cBa169xjVeC832fWuH7azduD1PGjTMTkCBsDrf4CA4VukNbDTRJUT6QUJNGipAyVH58TSMCJDzK64hYchsSRjew",
  "key30": "UYhEkr1NX1ZptZd3sMz5pxeMgJ6cqaM9SGtYQ2nCNVkXk9n3uYTWVXa9ikpxj8W1MSf6pFKcV8XQDF6dERBkxvb",
  "key31": "2WS2sobxopsqVxxUeWF4GYnfFnMRi1wsJj35YVecbWzRfMUqa33qx86S2z46NvhzRowPkFjJDnW2zAN8dAWdosqW",
  "key32": "3JP1SQWPucATC2bq5xAR3cLBfpxgmqEFTYxoVDDGBmizP7WyaAu5EGL86Hhg5tsVD2VZTUwMs2BEqChPwXUk3e1H",
  "key33": "2hcRrtjfM55FiT9qkvLVo1xHpVMT4goaEUqMaMnKN1GmaJb4vChCWtqThZSiMBxogLirXzJsAKik2sgUTymY4cvP",
  "key34": "4PSBdz7HRrBghd4qQ9SNciqX34GEbLJmQo8do4Aw3nRqzLWVszbNNrg6duiGXzcDPzY9fGaY68bLe3jjE6hrMA8m",
  "key35": "2j1E4SUtAZP7N67ouLQ5Dh4gGo491LVqv4uWC1hcKUhLNMooDxnmpHsDwmXasuiG5hdnAkEmF7WrxcwQheJwRyTC",
  "key36": "5MmBhFcsXhsDVHYwS1kWh8GBrxLXppiCsTz1mypQk21JYCMa2DD1SXUjgZzRwhmKTCbFCxthUDq8QjXskc7GFRq",
  "key37": "3BHYMkqPt5FgUYz7Qx61wBzsV7hDULgMdVLM9GSH2C4Umm5j4yHLBeW4YqS1wsCyjGcG87wyY1bgHVn3cgaxfit8",
  "key38": "3r1VQVf7XqVKL4KY2c6n6MZfdjpoMB8NeginwD5ARqpT8xyaJJh6xchwvzqnix933ZWRncxiknJGbrdvPfDc3DXG",
  "key39": "E5Gdk1YNXZ4ZLFnWd98fCpFwGJCzd2gjweVzQZfv6vFH9R1S28BwUexy3nQGd3RsqBhX9yFrLyzWWGWqZ3whx1s",
  "key40": "57ZPxzhUWGN9Yeso2HEeQ6nBDK15vnTv1GmkLf7o545CHbtLhRGM4kCe7oQqRzNDusegXXZCiPAP4ZLRLkM3g6ob",
  "key41": "5e63Y2pnnJiNpXqtnMzUD7VpCaZGGwbU1feBj8bMBXd2PEA5nxz26SAGJYQGdpt1njoSWgJdWstPGGzpSmab6SsH"
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
