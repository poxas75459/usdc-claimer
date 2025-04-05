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
    "4yNiQzUzeZF3a8ks6oe7vDPYiBk1xVhAd5DfavRxqKsprZJp4mN2xxYnGu1tts8PjA1eucrSXzVhcLN3HpNAeqjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JzkSZTWG6USZqhcFBdVhFpadJt18ec4gdq1uq5UoyL7UB32Z7jAgdJNzEp1dzthXvmXYijTrkjayPkRR5vMHsHq",
  "key1": "5QRZikt9XwPmcN7Zf6YWtGpbyPUymzNe5bWC4rbcFn5H1fGJr5HqR3R42dJVbyaQd4RNFQDLKV8YBN9kE2oLzD55",
  "key2": "4rpftXrXjArXB4ySdBQGV2vNKQE9bR8m7aNbP5nGeQYVy7A97fJfKMzfBL8XHW6hUZnTnuFomcDVamyAwkUnXfkE",
  "key3": "3d2ZBSKejkK3Yp64Q2wn4WE4TEVGa8SExSTsa9JUpGtVKdraqpQSDQmuWCgDxutrWgcfQSNyDwhZtGyjH2qbUxND",
  "key4": "3UAwWUBFn4hdJzGvTPyeeJQk67tF7pwc2pRZmmLibrrMcSfUMPZLJR76X7R2Xfzd668oV5sRKzs1bRgnhZ2cr2gc",
  "key5": "4rbd8XTHZKNarTKw93hEZDfbVN6FV8iJXuGdugsVUz58wH6iAZ6guyb7n9oLBNo24HMU3RuXZ7g2qCFefGfdE2pE",
  "key6": "87GApV2AntaPMRYw23rVZb7CvVKAiFC4bgp5coJkmfWf5hvpVhFoNSjpNwwPVhwapp1bQSUaKabcxRergbLNvb2",
  "key7": "3RKAbswg3t62SaqhjF6quhtpvJBrBZYE6zcr8wBEeKhyRU1Fo8jjmgwkvYPrrHuaNgTAzBZ8WWq92SCXZ6gVdnNv",
  "key8": "21QgkAQH6rAStfiPYtdCgeKcEfLCPh9DggbZ23E8KvKQHDHU3RdxVtzg78AdHFWSUNXzmFUSMq5nQsv4Lbzeps4K",
  "key9": "2MWYZJTBkC2KcojLWKV3bRRT8NLxfviRrS8j34f3bsuAcKqr6dp3zDR1sMYo6bgcJxQDVWHCpFo28X6xc3JK2RrV",
  "key10": "XnGUwmpd4Vnf5vZXmHpp9yWRqa2MFbYVxz3EbWG5Y6dt6kB7KkbVjTFB8a9L9Vpoiy6G7YEBhHxSaBvf8GetS61",
  "key11": "3WHb68d1qP384vYHqeZ8Euaqn6bqqsbnvVz7RGd2WiNBM3JDF7LnznhKjrbfX4t1SFpFh7r7vuiM3UtM6aNZpDF8",
  "key12": "zaVeG7kvdnQ9q3cGLankHgfUBKaijvK7FGXUAjwTnrGj7KTEt9FzYE2WyDFoBPCwXSbp4H3wCxtLXqfFiHmwFaw",
  "key13": "31Yb2N1JZg1c79qu3NbLjFauwiu9dqir7RRqXdMQSMTQ91LhiArFRcuXCM37AmoxSM5fRTWiuV3oE3tNDZotd3PD",
  "key14": "4hFW3t6Jjn9ASRWG3JDCb9yfPm3mhVPER3FcsdsAo3frjSVbpPdAFf1qPyyE4AvMt9ZnW3UUQtJrNWbCWCApy39o",
  "key15": "4qcydhZckcyZQwUv2uAjqUqQJgWBvnYJK54Cnw5eE4bpFe4DpSNedEQPcRCvRGgfmSkkZJptU8hzLmnnwJQC6qND",
  "key16": "rJpHJZLExzqTfccPTSsAhZmPsrunhGjQ3n9r1Y1zNSqtweWttvMartRgEdhTgXR6BZicbVnpVAZeBsE1C3h3Vri",
  "key17": "22brM9wURaem1FhFBcAn8TaSoH46acUjWRDASDBPrhYvQZgMxGKR73n2WFHKGMRjxVbN3j9xX3aHGjCiWDjFe5rz",
  "key18": "3vGkbSimJhBwatxk5kid5LJg8ckejZqrEvMR6vWJ4uXrekNBd12G8PZAn1WUkFNs3Yj5RGruYWAyVcJyS2upfAhX",
  "key19": "3GzE94eMMHgz6h6jsM3sBUMfQ2UjuCAv1u1JokWSYrXUBgq7VNrkuixzyEmPW3PDGFAFCAc1m7CEWqbGh1zLptT7",
  "key20": "5TCBfeTH6fCRG72aTKk2JraLXDk6bfM5Lv1xcKjXbBkA5wuCUovfR4sJNzwWctcUUCzFkLdDkobz8oNhTxSmUGTx",
  "key21": "cVpbt5kFmSwAt8nWjF59hvexihWAuqrzxNSt4NE6GpYbfU3ELcYkdTE2FNaHv5TwJbRXBahHydmgeNcaC3XGgt2",
  "key22": "842ERL9MRfFjqGfgo4VnJ3vQ7S7DQCyyBri9Tb8oWvV9MLumZQfJqA95rtWtE6r3F1HibT2CzS1qT4BgMPzCYNC",
  "key23": "ZBbvvbX73hjK1GLoJTMVVmBVjPfYrooqJunrpFMNaUQhurZ91M5LFWcYkTQuR7M8LYb2BXKQPUjcs82m8BESEqn",
  "key24": "NnEYMLBKobPot9Uausn8KPQw5gDE74s8w4XbELSx8F8WgeuUnXyQTR4gRJoiAtijMdtsfBTkVDogkCDdsjfTxYj",
  "key25": "5saBFqGQyVRXREprNvR93tqenxsjYVf4eSLgYtCdunQWkX1n2EVWopHXd5ZAeuJ1ucgew85Qzji1U7Zt1JWkpJr6",
  "key26": "2kfmZpmRA2Cea6dgEEcD6TrHcWAk8kt7EKRJCewdh9S8j1Sg2r8gFni6JAXZjfURCenUM4vHESVzRDSGBojr4JcV",
  "key27": "3d1VLZvE2vzYa3DSBZLqoogQFKah9XhvdVKVf3dhU7fuG12Sma8bVmdspnRLxd7piafxJ7pveJDtnXfhyv6BjWoE",
  "key28": "5DWKZ3GmK2DzQjRKMu9xAoNhqGeiTANoLN5Yh7tkF3Kab21hPutFUBWkZjvhx3SKk3FAutfTr56amihbBD2NE5ig",
  "key29": "2eNphq7hxwdXVbxWgUkLJ34NuqvL2NZuFZE4yrvauxf3wzRCWptQKnthbwWbmq7uAxTvLSX8GFW8nY4kjqx1tebr",
  "key30": "32iiagoz1Pp69EfsHRWBJBqz2SmJcuW8kWHpHbrbtDxaAXgNPbxBoJYptrjwqqs7BqhkRcHe9S3M1it7YzLh9QGH",
  "key31": "5XHBcRV65tANqXVJLxviD8eFnSgMNq6xUsVXc34g1JNcWJGFrfWncDyLuHPRPsTBYxbC1VAEvSuskDS3aq9hbMg6",
  "key32": "2isgWtTYqzcYxTAUhfDeLKk1j8BYS7jumixfDXKMPkvsQWLMWVqVD1V89zUJUTBujfreiezLkD7ctifatr49LBww",
  "key33": "yYzyUEDmKgRpfjhXst8vxjseKYLw4Q87TBa1S6NrKT9HNU9tWAz9oBHFNh31RXQmd4BnRUwYKmbBEq1NMr8378v",
  "key34": "5C486MhwQX75VZoBFfbhRdFmzXKFd74KiV5r14io1KYf6REu9i81YGWFMGWXp6NAqtXE8P5JhFEDABbZSzW9ovXD",
  "key35": "aP1xtTAt62r3VEHxJRPxYxd3GLJuYdbBtSBXfswGDu4v2dXBkpNXnrf1tGGrU1hRGcBKkwPjiyAG6aQWEvmcuWQ",
  "key36": "3pttSHKBGKAT9zTUNekE57LeNc4cqRoBLSBTmkurKEv77PrQPekCAPqTyjLevuRwiA26wt15d2mp3Sk7t6t2wzfk",
  "key37": "2D3xEAVFRo8B7xGkTSBBjHSnKwK7xkQPPX2WsPX81QuFvKahNFZShSWRWmvFegbCb7UhxsymJveNyMa15VUVKcNS",
  "key38": "5CqQS11cHbzEgMi94AA8WspC8ELPbBu7cbQ84T5pEoeYV1ahM5h4BKJ8qQnRFYZ1yVBLBx5e44LsahDWE7dDF6ZX",
  "key39": "4KnNhH41TUAg9fH76avYbbWL7kEBVWwdPuCmPDVjmLk8aPSN1YQPn1GXF7xN46rgKuZPKDNFGaqfcbeLqJb6GXtx"
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
