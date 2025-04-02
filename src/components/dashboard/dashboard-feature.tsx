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
    "2XUb1FDDa74A1zncvVb6SSwKLhtpkiHBWhtBCGu83DMmeKxAJiemi62wvcbJnAibHMFKE6C2pUDTBJn8uzoR73Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328QPjv3bE5KR1Py2jZ2cVfgJspgffwiCutq9CxHjnFHAoWcE2WW1pjpSvrBQXkZKizZMsXNGpfFDFBjbWWFrpPj",
  "key1": "4yzWfzCjpr3YcYgV6rvS6cSkVPgkuabJ3zemsrJUdTFbFwZjCQL3u2FpoUFAsBH653zjdCcRw4LSihyXQjuZwKKN",
  "key2": "4mBn1hXhBiqdR212UDWYB7kFAkcJotYukhN9oqfijAdmZP7RkGkKQRYHNvcgGR7fQeB8ErXTmUFhYVv3Ze9uBjRv",
  "key3": "58gTFwBLxtGpuuiPr9Xu1n37Dgdm68qjspSKUTwCs6D12WFdvQMhQquF6DUR9y9zDCRM3Y5XZbuDdf7uDKSQYJ3B",
  "key4": "3U7BZDcdBUZzwKpfBDJ31gWj2ubj2qiAsg75YQb61xyNDZKFD8E6UAWo4mtFCcqd9uzSdtmvmqjvTkE67KRQNhKF",
  "key5": "H4uFxGU2vKWuH3u7WwZW2sZcYsse7yiASm4N9oTMEvetsaVMY59r6o8GdnTimQ7H57FdawTpWdUhZQHtzxmdSSZ",
  "key6": "uneJ92K49v8SRKeVgNVtBAX9ppRSnhyngBLxRrbmiRewKA5PswhjrGwP3z7NwMaJCBEzGoHgUziTWpEahTaBmww",
  "key7": "BcSusjM2WiEQkFJ9FNrcGJmCVzTQxyGsQKifBYbJCBE9S7FR6n361G4VH85k8pJGP6VqaK5gWSA1WLcwb4Xkn3Y",
  "key8": "5rNJfU5WFLqpU852QvJfwo5D3QTASPfFTciR9uzU5B3op73R7xetrKfEkW4k3Lo9EkXBpytaGoCceCgavD9LgKUn",
  "key9": "2JyiVT39aivJJ1BrsgjbEh5CE4Z5Z7byczH1X3R7Z7YtidQjqLXdMhd9KnH5iWAyrg8gkyydTsogA6JNRLRrVjUG",
  "key10": "3hpg5fgdZhNaSYww9tWL9xYRixzY6R3GnCFvfa7ch3ZqmhYj5btzxifC5SVuWtnYKWCoVRvvTmkimyv8KrJ8mEWe",
  "key11": "4yCBwmo8VwaU8ZrC8WkDub78kTXs5UArKiTnGQiuxmbrbZYAyqiuV534aAdF3etT9dQg59Hgizrdf4VekBhT4w1F",
  "key12": "31bvwAPzyhGbd8ar7RLWrq5kwYxAcGdbetyZCV5ZkUiDatKatL7bU1gjcwzsBa4hwUd5tn4trkrwEJnhRLfFWLLr",
  "key13": "3cHCEoAgydvfzucD3K3Ms9QZSCf417SN2ohMFxmqj2ob8TTYV3Y9fGoRBvZ4AFMLFwQf2K6zaJV12FAdVgR63emB",
  "key14": "5UpL1aA9vjZWiiDpDFdsZ6rBd8uhs97v2aocnjTeghjUgrepoVmrhJg4nKe6LNaHmNqUaoLUEhdL6hhPWRtHZBQ1",
  "key15": "tv49VtbBtpvRHagj1FCowt9Zz9tXzQfaeQfuyfPzzgcHaE5rstxF5aRWZ3jvZSifBAQw5NpgVXteqtF4bDZ16Fj",
  "key16": "x4TCzYBe1151FRN9CQbmtU8zjqV3Lz8CXGf8hphxohGCeZ3BfCwCLb3u54wYpFdZg7bvgDa3dHs71z78baSZMVQ",
  "key17": "5VudLLyghNijVU9pFbNDAhkgxPRHB2snQwM3y44y7iMmLiof7QRmkykZCuPA7aCmWFHL12EtiFdWH6w6mcDTfAbo",
  "key18": "t4bn5SFbhhZzEWmwmjq71mXmzdyXMPc4HHifpqufqYm2eMeQbL2nSo3HythjqQmEVAX4uTamYux8i4edbho4KxS",
  "key19": "evYt51quktWY3kBSw4PZ4ocAApK6ZsuCJ1jaw8LZKi2gVpYqRfRChPa9ZpaAPKGWNjihkFKdv836bAJCbyn8Wdz",
  "key20": "4EHzJwdCaBcgBy5BDYUWaX5gWe4LcRFwXxqQQ46vJx2uhsLRDM6qszfhf8hd2FVu9hv4KmNsK3YgkBeVjMAdkmgz",
  "key21": "4E9Ko95HhcvoYjogrMDfNyXePYgbRE1J25VjSnMTPxLCSFLe9wk1Lc26xZpEgBqgXF9w8QLXUDVifhqRoU85VMsP",
  "key22": "64RVUnM7vFvtuKFRJv5nU7KspjG55DYgRMSxNBZ8sE77S3naUeeEBow3zyGFzAhwmVeFhqcJ8ubAp2BYSjNz17D8",
  "key23": "2FJBmivVgTzs8BcrKfA9sctgM4E32DvKARTXrX36b7CD2JDM6K5a5mXPSWYLF9Y1zvdtgvt1XC49FeBpTzyBatLd",
  "key24": "3KQ9JchdQ8gDpzTXLWT8HuQSr5QcwFDiEZBSNNGdyy1NUknqqkjJUS2h4FGz9Yp7x4bvhXSYRq9GW9DNKiknmq8t",
  "key25": "EYFJ2ZyNeXdU3spZMTzQ5z1KR3DBwqQmY5HUBrnGYFH9fofXyvurtMcqVe6iRkRmdW1DcH4T21WYiLdRSBHoGqF",
  "key26": "2kNyadAhLaTquxyY36W2kZMpffcZFoE7VvxMNJAsavwQzKQMyeuhuh9HFrBRUR7Keux58xbRozBeQCUdF8PfFFXg",
  "key27": "3rcQzcba1hSWugEN7wCmfz9QjRY6zqpZtkBYaxcPbDLP6kBzJ5Zjjg48VUQZALEcu3BZPjK1EiifPYnqYBw3E98m",
  "key28": "2eZ4vkMNHTnx9d8cYw7W1qA2NELH3L6A6VeReXgwbPqVfCahoGdJhuy3T9Qdae2LF9M1UbdWrqiiQqTbN8VyV6NW",
  "key29": "2KhQ4B8MMt53gMkSoXY9FH6VXscNA9Scxaiv2ra1yz8PhL6NKcFMCug2f1poy4xe1m43aEky8kQT1ANdFe3saPw7",
  "key30": "bG6Vq9bpSnnLCVE2KSfEV9DGHpPmJ9hkaGmhxb87yeEY4j7YW7CkPHanNNzpQgVCuYoMt789EuTStFasiYHs4We",
  "key31": "2ZMeoshoXdPtnkuVSDdz9BJd7N9r9Cezt7RTY4zHRoxv8KuH4UargZHS2d4qJAfyiuoJuU5ZHjHjJXXTxjmz7Gk4"
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
