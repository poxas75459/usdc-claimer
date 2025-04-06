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
    "2YBbv7EZBYsMRgRMyXh4LBabKaHcxAEepDT37jm1fRYkmPANbo7hHhWnWujeSfYxPvdojYYyhtM3ajmvyXk9bWBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEeGi51yfUa7f1Mgeq89ESkJnwstsphn95ymNnH8WWEYYvZwZfU9uYdE9uZscFFWFKbPmVCCoPStWLscmfFBbVE",
  "key1": "4Xoa7KwLtWDzD89tguVPD4V9anwBR4qf4kA85jdBHKiYcjXRtPa5YV6aan7oeTAmwZFy8rA7zoiYajKHWAxiRK2E",
  "key2": "49g52bbh8k51w8eSUSbj7VPu7GU29tYoWRK1U6q7dUdngbV7M2wEiM8GkdQTWcGHkSEziknSFnTt8LRQq54szV1L",
  "key3": "5pcZbr82om5rL3rwSCzQ8XbkKRJzsg3hLj9cv2zb6YqgTHHseBeSspG3cnkpxa5o9fgDkPyJtbKgPtUboZGTncXN",
  "key4": "5Sq1zLfjiUCqAiAMvaNrGmAjvgq4A9wtYuBf9SbP5ybkQ9Xj15xun6g2SUB8dPuQMJENWkWoQg1x4cfDi4knr4xQ",
  "key5": "2uvsW9szZt2YnFircBHv9uL632fpnPk8S8Y1azWnUY4x17kDZ8E5oRHbmRwZcNBfUxRR7JukRxdAhe1HfUJB8qgo",
  "key6": "53quXeYJfEpauLYmaxW2HSCjLKgRsngLxvdpEV1dzHtNiS684m8vbscjWEHBMCWzw8CmR2k29SMbP3DcwEAQrKna",
  "key7": "3qzfYakdYuLWZTtJbCZWeFmaF2xxmTVGu9uWyVKduM6kP3yVWsAH3GkRZrFai831EXEof5Br5SGJhLyuSbSaYHkQ",
  "key8": "5uneUa9vecVMwg8RAA9LNJfUpNwMmaEdxi8Q7yB84fmSYBZHDPyc91nnbjApSbU2XgX1QFg8BQHNjDwsiqkKPkiH",
  "key9": "3TPWf5mUxPZdYmEiAazCnnJfWXyMtu37rZEeovPhkW5mZzN81iFaGRxRsxUXGEAYWqsjkg4dnVGzmGpn3ZsbWzzM",
  "key10": "64YZDtyM7T65SGkueZaNjhRKaWeLnBcGxf5AuiKDqsdBfE3hKz4bqwVTRbkv29cZ7TnMLgBDLbGeeRRtHq5af1m6",
  "key11": "4C88hXe9ngGcf2AaPLGhZnZbgMCfiawprhGppu6vxbaEQMUEpsvANyzPr88odtnYVoCAVdvr366HquuDcLxZhtzV",
  "key12": "33oNjXjhAWz9Wqrpc3RhnefVdNrhJWaWskto7dJ1LaFSnDrWLvhuQk3f5MtvdMvCqdTGPQvEyu9kNJHigDmBg2yH",
  "key13": "5EfaApvoaduxvGbQ5iovvTGT79GCRYHpSiu1k7H58pjYJPofVSN4EXwjWse1eR7LeiZDV7FGoJBg3Ty3oaXsudJ2",
  "key14": "2gkA6i1xqmxY9iVGoh4GU7gMAZRCj3NMmi4qhfzgf9pogBo9UHQHM1B7iYidULPb4xuSKZGi5BkfKRn19d6njgUp",
  "key15": "4PHocJNUi2qR8nQK9hn4v16Qs7CrmaqEpuvvHFuuBSpBVhqu8jqzZje4y2ra9Rxhmx4se3PPfheZxM5YLzZupcrN",
  "key16": "5pEjxL4tXbQbHPnkWn89hpBCB54q4uSPNUoarv5xcsr2ftXdXajwzRpXJ8BGmjQjK2KB7W5V5EBnWmn1mnwBEuuy",
  "key17": "4d8qQ2CmMcHvfHruNVM3gagr2k8iSki9VJxZwpo5WbahsA4GUo57TxzZipGJC8YxzW1XYafPo9Ljh5ctuXskk4ai",
  "key18": "4mUfsAFDDTYySKFiMBrTGR1q3ZWSxqnFt7cn42us2iQz6R3mFFgvBa2R6xHd2tibxHqNuuYcCVH88S7UsUXNynrh",
  "key19": "56oATcGbahVf6dJHArQWo1zJcXHg7pC8Yss5AEKjTEvAwC477VQfGT9EYpq18TuGqMXvQoRMroiKc3Bj6LEMkasc",
  "key20": "2dCyghovv8DZZwGquh5gxYwS8PytesQFrmujkdUhktecpM7EHJbmbTXPjGzZRhLA1dBXraZrXNJEdvdAjkkT8Ugk",
  "key21": "5ViQtpd5KEggrR4dqagFZ9Yb3oDBw39TkxKPc9tVAFd8KGZtnmLafLZTSBAezf83H9LP1x7tc2n2KVQuZyB725PV",
  "key22": "Gu7SatJbsrKEdnrd8GDsQkqMKKkeiC8KfQ5PatUXbJtbKoFJhcVJmqE6adwfuASV9r14L2Z6BnUzUT8oZFXCCsU",
  "key23": "4dgAkUPEtSqDAWJfjSi1B387QkTgKV5Gi8LxiW1GdUrbWFtrj3Y9qwVcfKUuX1bF6c2VzNEYbuTrdhBaj9zycPez",
  "key24": "87STqsfuogb8YZVeXLVSSAPYHPHrsF3WEbJmErADwajSqUMe8rBY3eemswu44oumD2mczpWd2P4eybySV94zEXa",
  "key25": "5sqAzwW3ncb4yBV4DpqVLqUjpb44Fxx3JkjJh8tbwD8kgSa9owTCtQJumHLxrMx24cq9gc3QSbzFJbBTVt16J8r7",
  "key26": "3Z44T47LZZWD8xZcDcRBsYU6ijRUjL9kmLeuwFL4W8dz5YPFjPzZ7nA8wAxa8uLxniUQ1tkafY8TCcCx12hD3rxW",
  "key27": "4zUk7pf33sir48ncrCbRV8bpFjeLwzmv6beSFabYmiFJwQfK3XJ3iW56CSuo1xxrKrZe6mHWeyxeULFYBWGyS9Ag",
  "key28": "62VGS2Sb8c6jyyEJvU5PvxeX3Btk5Dfu54SB6KLgXUqJLC93gHWpV2j3M33YDdZbXBfgJumevmVbYgwCRYuikbWd",
  "key29": "36qM9QA3q5Vd6Mxk3rREnW55NABzhcxYvhgvA5HfEcmTMwjBS7hSu54N5jSpQFKf3whFAzNQbQD5X946QyrTRRny"
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
