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
    "feSUMuTkHMqgCePwo9ZSciC4CS4k6HQP4D1Ed8sE9KxCq6cVWpd9QnxtFQRsDAfHEJ4LD5gG4yxZMer4vwBC561"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvtu1r7sVdABS1izJyhFLLn8aq7PuVbPNwUaCEVZQT2AxBJVH9w8RepDVUJs9hf1NJCLRN2pYg5jejuGttM1kQB",
  "key1": "2xP3VWeJM9TrA4Pydd29LaHGSNYQwvXAKAEdK8ZVVdPJKngJg3cScfcVVgupCUxmnCTntLfKndmRdRz9enWnyWL2",
  "key2": "2DDhnfcz8HaxUKsQJSk5vrjUcDrieqenkTBbTrNwHueZAEAyL5ZXs14dZ5pETbvkWMbCX4MNfFiaDPKwjqdHzkAP",
  "key3": "4BB1ZdFfehbU6XVjFqpdYddoLAh3tcEB9dthrpq8GYp7TFJL9TXM4zMKqJViijee6f5Lt6nH5aZkWYXGQBrdb9cp",
  "key4": "37oeu8Nw1swzVfPaMwcercMFBTzwNHyze1VJugAErw1L56yCS2CCsNbeLj9BAudrVPHncQazmdZMxMxFKGWYmXqv",
  "key5": "48h52rG7ESaxqLGntWepVABXTeP6QLSczCbYLYS4VB8e6iFm5V6ThC5YuBJuqbMr1HTqBiQ79BBM46XedXmNZNKL",
  "key6": "2sRxMUwYHDupENsFRV9GFoj7JKLDmtuXPfhzL4UuPs4rFopgvHDX6qdT4xyo986yDwxGiGRWM8CA3nJWUek4TG4i",
  "key7": "2mjoYVvesxEcbk1hUysHgnVsAyhfLS8LuyVm6eUpGYetXSHqTjKVbjur2cuepxQKRgL7r1yKXiWP77Met7y8RMfR",
  "key8": "3XHcMjrp3dv6c1ta8kQYDUUmRQgpT9BsjTPPVZ2e4f6URdLv51qdCUqQ4gFZtEHU2iBpafbneypwubV9LvZVb7bY",
  "key9": "5inUUtNUNr25RWVAZgftJ95egHEy1AUDmivqkpY6anwXd33iGf8scDZqd76DQvZjVK2Mb2yBSoZdqLGufGERg8tH",
  "key10": "3DGWRbXS2EiJVUGXhUUNiWqHNweEvspv9kn5XRzxLvZLqt8gDgrm3D9XWAYHcMPDvxd14MsWa4c7AJ89cebg28wH",
  "key11": "3qmv53mHpVWixFnjHaMDAVZ75vHoVt8KvNKZoDgW2F6ARzxAeFK7PK8G4qMfdZYiGjJoFFrjhPKvMou7xcr9xdT2",
  "key12": "2mnNE6jcft3LcLtCFejT8cfjnQoyqsShBaJpYQLX7JN5xrVTWrh644w3fvooxsRANN2pPHNCq4oNmN4Y5gwzPQ75",
  "key13": "SjKsaPQSTnQ18vY4wHJALn7B6yRozy9eX8ymCRsqLWw6LHeKunGTLsueCVpMingLGLFFWhqwcXztbbs5ZntQA8w",
  "key14": "24hWAPPYXabYWvccV6Wu716DSc19VtUqR2hUyZPWetoshNFEf5DM6nMdipD5qRS8ZjTzaXnnuLZcvjwVH9FcYABP",
  "key15": "2pjg3u1tTLzqqox9rqvZPFUBoW6yuvsjaPiNATuDT9ieWrnUNsPQZnkNq39LT2bP4LxeP5d5xhT6peukZUQGJjFt",
  "key16": "4KdPkVJw7TgxUqDe15pTUweqZpFXFzVwCQ9b9GrLRpfZbY2efBKuPmxCtPz3PnNKF5m9xqYEZykbSSzrx1UAizYC",
  "key17": "4KP4x4WJc2EfvQqMszCYFEYUU6ra4kNNfiiZskwpGHWhTzBmcLkvx8fnQxbYNJxRLhPdZor4xYRy7nvUxhgC94j",
  "key18": "2efPx3eXN9aJpRbZzCaLwFkNn8Z1CpARfQBvSHj4zAWRrtjmjVaQwDsMEDW7fK2KHAGVWTP8o9JeZ2TNBUpX7eFH",
  "key19": "3Tt7HiwhWC83AEwHn9R4RegWyEXnHZYyCqF42gCPVQqr3jJjRLJZK4iYUuzS6p6vqLoY31oSu4gQcYiE4NXrbm2g",
  "key20": "8kGWwDC6Hs13B7ouFLj2fvcscKA9GFF8LqqK74JK6ZMiK3SgsiiLPwKHEFJLTXm6TRLqzb7PTF9BAxnv5fZGx4e",
  "key21": "61rG9H4F8w1mHN9LrAWnsfXyGXxz6XC1QTkn4N2QGWuYTaRaST8STWM9BCnKLzbVqhbbbctk3TRUTQQqNthUPZCv",
  "key22": "4fnkEzNNfsQWm2mfCWJaxMmRQkWgagBEkSQR9srdkbLBXkwKYXCdd7tcq1X9Ayhc6nYUj7wWFTTSLqrdHvCmCbJp",
  "key23": "42YPNv5HG4PNJhuXvbznT5aSREntXfj7CVU5TbuiTnXu93eW6eE5i6ag7ndpWvyt5FbDeuVAwVk3XLKusGnyCuv3",
  "key24": "RzbVdJfr1raUBn7USLUteP6H4LKXeZeZJVMjfEZ9v4RSH192y8RZq4qjmGpN9M5zmRDWhFuSq4UxqXeRQkirLtg",
  "key25": "5UpueVFAKfN1RZ4ffZFnQiqkdzDbTf2PwkKgieUEWquSZvbZU35SB1giJs8AHVisQRqVk59AmZqqtnPUsn7iBE1f",
  "key26": "3Xggcaj757JnA6b4p13ruZjH82kcgWPbMf8nYCWPyGzotuD5Yd8FsKFYSoNK266DvVcb6MG1ooJEF57ke9SNNwKE",
  "key27": "5VDvSTHVA4rCeobmT4SsMpFAiY4Ee1bQdvNXD4pS9ADFC21hMHKJBqFMRZ9EZZjBtJifqLqYxhhU1vih22xJsM5k",
  "key28": "5unq9iXCMhXe1MWbewofb676djsrwDfiP47sKtyV8xT1QK9xDDBWGpJZ1t5QhLja3K4uzAamJSTB3LBTQfP75MRw",
  "key29": "58XuUnnpCbyur2vYqyrvbHrKTCT3ECLSLVKdXDNqYrgKYYuhXcE9uSKRcYim9p6EoJTXVv2XzDmkf84XnUN1ET6B",
  "key30": "KLmHvwntx5mobithJPDAm96SNdnaHfASQNyaT5mBKVk5cQ6GMfKhrT7wQNzuKzg41Jkq6KTzFcz9JxVAjcNCHnM",
  "key31": "MkM3MQH9XJNP5k6V7fdhtCkM45YG6yw8Udk6hqQcqJHDff2L4cJZCtrEV29uNcXcGy7gzprbanKHidPVYr6bAhk"
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
