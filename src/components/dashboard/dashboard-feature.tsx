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
    "4i6RM9D1rcNnvs7oQxJ2vZFtZECjHvhjc1Js4y58cYVcQgQwBwYhYUXWaPZY8mGt1rHj6fztm6dT1BQWBa5Zi3g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWFtqwMFPcKpRHb3e1hAPGHFSU31Lg1grfMNshkQs2t6syizySUubhSCbr8wExoGpDFkBQUThK9KB1A1GR6jkDX",
  "key1": "5RzDRFaXc375V1WT1tHT18wVyRFdS8XHRoUY79nDEmztCNkZZHxUDm18tTxCLGRKdSBTp4sk5uqXWHphGBiPyuL",
  "key2": "3WZBGd4NBYH8k84qnCzcE9Gzb8GEkvjetKNGB7tPFuaaPjmYWdQMR4VGCwZvTbthtDe17S75PsDNzGrweic57P1P",
  "key3": "3rQ4V6EJFCW9t7FjuowBHdyEpH1aQ1qVUCeY95djwnhiBaHVpu2ZgPmi5w1r3Ck34HkFF8HHe7Vr8niKSxB5UhLN",
  "key4": "4eYA5vUPZkYG1fPqVGk9ZjgyNXXcLpvYsx9XCTjicpssj9SrzY36wt1m1UWvWid43WZuFQsMEGVCTEvRj5BDPB1E",
  "key5": "54AGgFDoboq2qhKhAJTidVRtZTd3AXLYUBeWCJatmEfD3Ru2bYJacbs4yZ7VcYG6BMyxgcYVX5d7kJEBCxsoZcbj",
  "key6": "4rN7mYdvgUhJ4qqnXMjJoPFct3k5hv1xWdoJBPMwChZXXsHsXnwFo91oCgcGzgDQ9ia3gD8C6HSroYDEmXRgwTDc",
  "key7": "4fNe3od9go1gMUbdYXa8eLqqBd23TAeunigMaHJc3jf7xskcW8naeXdZPam1M6dNTi59Cp3ZSToneLBHQ5UojDeQ",
  "key8": "53JvwVojVLyCHE88LwFdUWc2uE8kCjkNH9pBvh4YCggx7cPvyzzRbhAwG7EXp4QNPfHKfSYFinD6inGHA8bRoqpj",
  "key9": "5UQHhnseknps15cb8EkykwKYbB7h93d3tjbDvka8DcTA47eCWeZZziaNdRzMpdXVQX3QNgp4s4G1MVG1nqvN5Ngz",
  "key10": "3fZJbUWwXLSq5xJwwQ9n9TjeRf1Vzk1mW8y6jGDxmAMjhCnbZakfhaeLQ6gfxqTk4HShjdkvVyAtwWWnNMeP7Hof",
  "key11": "5N7X841H3y7gwghr2pZLWjRRqXwmYSBam1cPu6cuJKvhCkGezvCxTvcrQLuNyDoUmtEpwZE9ts5axVnfDRuUuDQM",
  "key12": "dMGdBbFyVZrhQ7shEGRPnbXmZo5uS4HEv7dxWpGxLBh5kqtaGpmRn5nbvaz5Af6BTvyKRBDrddY2QXCF2ifN9Lh",
  "key13": "3qeouG7Fvnpr1n57VUSQpfQvq8HWMw1hVZ8tyy4e3RGS8CykdMnEZ3SU379HoKwYzWeqkKYNeDuLHmByBQnSkvjF",
  "key14": "2C9RpdpxYNESSkhJSe9go7X9jfxqrZ6UYnJEHNjsrxfabgJXBnYNJXZohaoGimFWztbdxhtH1CWqQ6vgB3BEek4x",
  "key15": "f3odtoRyTkpRDKSgXbEFjNsf3rqui9vyjmirbsPTg8a6LeALwi8g34LmSM5AH5tFBqz4z2XzcwaWsukAB19y8cA",
  "key16": "56KmSidnEmGmHJWcid4vRTjcuwB6BvMhhwe69YwD5gYgrE4nnovR1MT1zqnskxggeMt7DUvauBGDEzVbC1unhCEU",
  "key17": "37u8HgvrfDUAAuMXZJm48JJUo7JpNzeqGAxpbUKc5Ar1KUcJPJQMUtwqiurLdKDRWLzevyB5TcpUcomnqXywSFUS",
  "key18": "3m9fuaB5z4FipGUjJMCcs8HBuECxbRWeYMiBPn6x3BQd5ZpbjKrDd2XhjTzoQNA9C3it9KdYBMEmyivMzvLCxw5a",
  "key19": "2ELU5CDy4xpUXytzcpMUrV3f4eCwno7a7vqTPmN2XBj6QZN3Nk8d8quvCbvmN2TNDxvzp4iYAAPCudcrMdGeNmB4",
  "key20": "4KWrEyQenttGEZQXLUd2WcKewzkqpwJRfY3SonFbnEvCHVNdVwznrQSUjRYMLedFaK9p8vWwbjcMBNE6K6dMiqZw",
  "key21": "2uyDq5x4nhM6bS7trZq1WsJDLtRegDZSxivCu9GcpHNGextmWf8CqEG6w5GZgbNFoJdKNMDahwuJutGbH5XAC3dP",
  "key22": "5AyiZDynjbNwd591b14sA3SXNw3mD5qkPULi2E4cirCdCDv5xcqBDiwj9DmZqn5fUs6xzbmxrtfzrNBfFQVjY9is",
  "key23": "4Tpmsw3AqLojCTFW1iiLEuscDpi6pk1WM7CasG9CeyTbBxJV69AJfUfci2RpVeqcL4reVHcVoWrAy42brjQ5TQRH",
  "key24": "533wudkqrCesKhVqC377dErKp5J6B4a5d7XtA8fpfw8Vqm4qx5VcHAqf1p3EsdST2s426qKXxGxoBtLZxtov1fZE",
  "key25": "5rNzTjfbKA4Vb7G585LcZKqHDCz8fK3NAAr92Wi6hM9mmWMvHkGktk44VivuUTjgLVnJ4y451nEThGgS4qfUYqG5",
  "key26": "4CFGbJDt1Rb4VRdUUkM6TBy9wuNQxEHmXYTPM7jEn1TA4F41wdhRiP97SfBMk2129MDpQ8zU5MC6S4hRcwA7mVTf",
  "key27": "2t98LL7QATuB853ZZEXsGSMbEMXi7CYQSUQmEiJjLBGp3FkNuxywkeWoNNd5hhJkE7whnSK9TM61kVSs6CvtzNcm"
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
