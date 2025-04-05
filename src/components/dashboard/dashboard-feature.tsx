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
    "5vYPEmbq337sSEi9Nk9tqKD5vUFk46R45XFfsJCUo9enGjHwPBekA3ZoKGoy8D1edpjBzCunNEpDWfxi93hTikz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P185cYKZ1JSUxMF9QWujeTFE74HRziCfWXCDrz6ZGes7MPMdvA2zmL86tvvHCTEuyG4138yQkEdbZiLjbmy9LZP",
  "key1": "5Kyg2Z5G4dWqy8VxZTxjK6o1qQn21sKT7rAKyDuJzSZDnFKg1ZevKTviaKU8Aub4oe8WLKeXfFiLuDWicLik89vd",
  "key2": "5E3YrRU7K9cgbXW7bLtEkx4B2cbnxs13qJs6bzrA3bdbusE3FHuAw4xUT6FYrWyGtuKrfwoa1KtLnBiqujnSrosP",
  "key3": "2VW1HKdxvE2bJVyqH1Px83znrruqF1JZ2bbim5FzRnm1isATvDKTeHNQ4u1JLTGUDkYK3NWGnowBvhqqoEP61mgs",
  "key4": "43dKcTRxSYZFZx7fpeakAQPzELxzguNWQqTJgxrUhn3g4FBwrDp4GuCpESe6aaWYh5EcHV4uVngpVmrZRVbVMegm",
  "key5": "skFMyvFZN3cNqpuTsDCZuRyZgw2rrG5BR8GPUfoW4kE3J9rj4Eji82N4oAjbsAmR7foDY9WXHoSeDXhe3hmS6FZ",
  "key6": "5X2Tu1TRgP5krZCWRDyWoZp3C8hSc1M2khd3cYi5pMREnsp8CEQ5FCwKdDyAsRTNmHZvqdGRVb4Q4u3AUPGeaFCd",
  "key7": "2ihBuC3HvxVtVKWDVdEp1dcHxYBdwXZ4LxHStr3s4BkVniq3wEQ1sbMWf8hndrPUbj4gv9XF6ndiCuhKMZvzPZmW",
  "key8": "146qN8vPpLLetZynMgk58n7bTaTezqSdsp63oCtwBYMF7KWgt6iMR4DJvd8k3Ajr5JAnqKRxoaCJPJugLtFZ7e7",
  "key9": "ybjH4aRFfvTLNZSUBimDrQhYJm35tp7RafEYd1Ti5wokBpY5AugbsVHGkn8GMJs5ZkHaiVZDEynweguJ2jr1b7Q",
  "key10": "UKMWXxQTd9pNCQrXgWbSqxqYE1AmS3U6iNz6S1dp7JQx7JuPmerxRxobhZiz34KNAbMbwQA7cfAzebG6Ugf6paj",
  "key11": "2LaHCcw5EZoR11X6E5EXziKS96aLMNNUBhn9tFbHbEN2XcaFWuSY6Ghqdj6FmaBVCimUqiM2ubNwbLUuLX8t9nDB",
  "key12": "2RqdNfv9xy1BBLsqo99UrwDi6PuVW59RKScjGi6iCnwuTwN2jhFRyyQ8L3hzjSjktYTdyhY6FWVCJh2fBaAdgbRj",
  "key13": "zDk1rJSszBpnX7HVvpDQ3SV1yagheYinFoyBt2A433ca1bgfHvJRjktsQ7baX3H7AaRa842j2RkGD6GULmHHxfg",
  "key14": "4NpyFybh2fAowLHqF58T2uUSLzX3MSmqiWz3s8gxzxpDpPj9w183xzKJ9EvPy2WhR4f7HfXWMy5dJH61Lho3SHa1",
  "key15": "62weK5ymWha6MzxWbjAJSjEWQDuqFCPXK8GgqiYs5zjf8Mm6pZYf6yVn4rq5iGYnhPQaWdX4j4agQnxNHz5ZMTXU",
  "key16": "3ZweV5YhjwBXKCmFobqsj2EbN6niDaJZDC9MwcMBjaVD1jY6bsxJzU7hUZoM7csYQvztKmCgmZkoLvd7Cr2hvriM",
  "key17": "4Mm75k71pV9BREvh5UnhQ8Co3YnQEQHJ3JmzPUdArjQvDeAGyYsATN7P2mxE7G8DRSup11KVJ1YBX9FGySbcc4hw",
  "key18": "27B786BvRvXTsBMAebDpgeWtHZf31RZrr8SnPuLmV49QR3V7tPHd8S7y2T1Ch7aHzm4YuHAXpwvn8bdR5GecvMpJ",
  "key19": "5N6rgyw83KnxYnx2k99RMn8pnrHrr6f8edBn2siruPY8LivDvC4ZWaCcJSeRgpGGUod4nACrSoUDhiijxKNVRgKr",
  "key20": "3f3wYGVhMytqyGQyHyxn5TDrKshvNE15HFnTrG77UEWRrib29fK6vXHckK7xQKJvT9Lk9vkq5M692T1aKf8RofZe",
  "key21": "yGcL6vCgNjJ9LeWXufK3UKdV7awEChKjwyC6Wt59Mk6WAFyTi1J4sdL5J8DocwjDEtP5rdTuxjBshHF4E7C9C6v",
  "key22": "2ECn7aaocxsTKLGWNPhWpUMUXmquGHmHubcFQiY5BrzPJFWz9Gi5ZMfeDxU6hz3w2v5foisrhpqEWqPkPFAN6wQ2",
  "key23": "5PPECMnp2kNpBBmNbdgRRWn6Sm9Ag6MBiMzHEtYnnXqmQSRFY1KZRmbZYBduMbHNGKjStaVtssStDsvmB2pzgbHE",
  "key24": "czvfEum8FNSfxPdRDsCFFPHdU1ijYkdh1wVArfzsXw4GJWTxLSKsQgrWsKvneaCzQKRbLv6huDw32RJSeBx12g9",
  "key25": "54b9Mea4jbswFTXLxwfScwPeP9dtX6dcwvJtDEycwAfyXj7Wet8HP9xLBWXmmfEbR3dN3SLQnRGrMQDvZrUUr2zc",
  "key26": "5LK91VinQJVLPkgo7VVtGn3Tw2MRp9bmCCCyZWkhaPJpndn48xzRri72VuCsyniEbXZqMonZezqnuGYfWUfjUjdB",
  "key27": "P7WL1j86KtRPRzDEq87aK9RVsUPyySwUyiFNkkikTMPXC1cciyBETMFmQ28Sx1vSyQWcJspbHeqzQcZvBQsYVQV"
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
