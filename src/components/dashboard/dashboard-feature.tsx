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
    "29qLevmgYzC65Tizbdwg94NCcsEKdRZm7f7VpttsRQurgqkBMXUBinNYiyUHJxYEQKDGCTsUh34NjBeocXrYjQA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xuZFZ27tmDW153LxLERuRDW4pkYzFgBK95sAk2zy4EKVFFvtuu5P4zKzg9pXTsoeaL7DPHpVRSSvhsos18Ht5kQ",
  "key1": "5LpY9zeXPb6v2knHo9tNPi7EKEB9dRp6s7rSD9y5eZsvEzTKS1GCjg68wg7Fmkt1f9b3TLp9pEcgQMtZQU2vZBKV",
  "key2": "5FgEX99BW4ufSAxwPRbYZ5JdCGa5gSKNVUg1JmDy9qtJv5UmbUG7WfTNoSeUr2XFybyk7EqB8bxinWUpfd7PyvbV",
  "key3": "SJVCB4LWKyfCKdg4bwkL8Uh6ixN5dfuAcaHen7KvmXwv5rJJTup2eU74ob9cPo8riZKhGiw8FvdAXmZ7MefYWCH",
  "key4": "ufwRL3yfd8GxpMXFJmucDxKBujgKQvCxrCSBLgj46TZYCDxLFfHgq4KhuQ56aJVNiDCHkWT3k9H7TLVVTg1i2Ui",
  "key5": "97RRZBEk1d4JttKFKkjqzW3GnprVV9J7w2GSo2z8bYKsXXn6zERzv4Mk2eLave53UURF5pSAS6hqT4iusEWQsq6",
  "key6": "36m4pAj6G1fRV2evY9mPVxTKj73KRUeuAWhg9C6om78daTkJLx3AEECaeafG8SZurefLfyQcer7vZsQh39gTgBkP",
  "key7": "5JPauXp1CtkfZbJqHpyDzgxy5ehwPu6yQ5kpydqWEBBayJJCTGUkt3UDnCb83j5HzA1Nh4vNKRieqSVZSusgLQjj",
  "key8": "5kgPnMcNHEB7zak5xSmJHWXjfarNQnt4hq9qA4PYGLn5TywHNCS1TfRqjqV55npbUjjWiSNQHo1LYZyCcxdZtddT",
  "key9": "5jZ4EsuxL7rTwVuLGgZ9GPGyVN7AmQi4ZXYFkNd9WujRnuu2fMfcP8ZE5wLn6Ldmh9H1KgMR9kyrwExkPU7vSmqo",
  "key10": "3yoaeyCFg18YYYzVHTjcuYFBH7amSHhuz1EdZwZf6C5V8nyWzWL2P1Zfkd3Ypb8iMi5FRxcNHWUd635ZVYarDEc3",
  "key11": "3HtMbZbAYLriWLhk8r7UzVDD5psTPbcoMkKKDeJGtbvxFBUe179i5hXfmtLPKnc6Ug42V79C15UYZdrEUhqUAWf6",
  "key12": "5aa9qwVkzY4TNsoCvtWQQp7QkAQkhr5ek6DF5QnQq55z3uDsuE1WNcA1xnj5Cm42ATaLAKAXUkPZSjofoQytzxVK",
  "key13": "eVMhkvLSSaiaZDtXyT4ZvaJPWxGP5pW4hWcWCU1d88RmjL3cA6kcyzJB9jHn4n1wypgNmcWjn8sXP9yk6wDXdmg",
  "key14": "4d6RRvzMwHQZoeUuuRhZLF4QfZn9TcgSMMuY3kRCSVvYUvBbv68VPoJsZUCZjkTpsdxsenFYWEvSRb4323rxkWv6",
  "key15": "2KVCgQ2vLeqZQvxEnSKnofPFRzcojNVvZxz6Sjute7D8bdm8nyAGuV99wZNwpz4oWbcFL2YjKx61CPeNc5hstKf9",
  "key16": "38YZVCzjQTzkeCo2dAncAZ1B4ZvKVM85KMPzRqb666qMdbjecFSqW8SW1WCtak8M7FBDLLS2QoefSfW8Up5ez4uk",
  "key17": "DyR9w465PpKEnuzJ4CVBc6k8rvW7A2sGKdwTs8GNwNh1xFXtBuBwJ2FCC3t8VoLzA9nQGEcveUBwzo6PKpNmnZe",
  "key18": "1293hjtwg1sWdBQnjkpMxFWnMXw5K77n3Ch1iQdY8Fc38Eb9EmD83og53of3nEjLkc3VKhm22oQhWDpMNnU8k5zf",
  "key19": "2PnytjRBWJpG9WbrSs6AZ5VcM67Tb4nScwa4U4rg7DYDHs4KyoqSikH4Xq9CxaMMfhkTf323AS8vA8aSTGzjgYD5",
  "key20": "4bErJRuRtvjBooaAeq1FXj6tbPsRRMiUuu78d6hshmntzgxonQ1NZ4g87Ud53n9XKCB2RF8YcV3KHAqPy8ASrAZj",
  "key21": "Wa5D9JbMi2C5pgmp2YZGysmmFZ9sPjcP7Si3iktLRFzwHpcaxymicMVkt5t9krzgXqLHwbzXagwmPKRuXf1xHqA",
  "key22": "3DTpDAievx4nonMMfHKuNmkPWcBAWkBZbDtsWq6dSjmeTywahSHUUqrb6myEYDSdN8NHkXiZuuzGk4XfzmRmiLwa",
  "key23": "seb2pGGTjGDDXhEHAu1nhH3y6iS8fKy1gVN248utYEX2JsXsHhfpAma4B4uAqJvdbiHLZzw1Ev4AfPv5U96CJkh",
  "key24": "LJcdxfXFpPzgXSowhscW5mKPWwdjdPouayxudCPMk8LaurH6sACbngzSXjHGr6ZoFjmEJZRc9PTxfsCEyxY92gs",
  "key25": "2swNKFtFC5AWPNgKLTeEdHy2YrqvQE5Hhg4zP8EV7nygj3XSrA4GsEVdmHztvijcg4f3gR9gR5tEhFzcsiZCH1Y6",
  "key26": "g1AaBftxB2yMLSxPT8CL235iroFFCXJ4H5njnF2QTGQyediJm6S46vmW2po6cNzM3aByDQiRrZeXTDpkgsFp8RF",
  "key27": "274ECTRy49VKGWdgtfj6PYnSnP3d5NwKZvpPvNaN6YjYgmB7ZDEYc9uiWxPBXS7QGwNL9k8PU39WtNZYoKe9aZNt",
  "key28": "4hfzjGNCM3vZprTzQ8YfFAn5WjDnuX32vJAGeSDyui8wf5j7Tn3sEYMzPGEb6obfc1pmStEoD1j38k7hHLbb98b2",
  "key29": "3kXhp1KMmc7iMgYo7zPhH7t7y2w8YmebBVxsq8F9aK8EfR3ZiCR3MQTU1GQGpRhghF2EgCtn4V8TH5rBS2maW87S",
  "key30": "34qj63bZXVpt4AtToU7VD5nG88ZH8qcPREJDQEAHLc8hyRwa6nWMuvdRD9HpKjFD2yCSfNSKPUENMrZT5aMqM9EC",
  "key31": "4aG3TGYs8HecGAUE9tRMysKM95yDcmihMKY3MorPwzuaKQVfnYaNkAAKVsbWRwNyQsX7BBj4GosFxjbdVZKy1ano",
  "key32": "3ekgtSgGYPcGU1s8LwH69hiEiA7ERLTq9ByqRSUatg37CSjRwatGuEKdG4vAFWeZ8RFbAfYoveKVyM6DF1pYhNwn",
  "key33": "4nwHYmA8MQD26CJpr5D1gzkVRGb1yiaKgQKz8bqf7AG2uhrKaPVsyCT4TRQdkVx7aYwJDQTXePdhGo6AWK9zVjFL",
  "key34": "3YSki2gqeFcqxWTmbreKj1FWbX9u5A8zg7EZJuKMiyuLL7TA9QamMq2ymNDkepNQjcQjwryfqGWf14p4txQojYsJ",
  "key35": "LPAa3vQ6NmJkufUGZ4n9zjdZk5HhBTmphfsKXFCSyxpAbBHVKNQWnm6Uvq7RAfGWjNtzrGf7QAs9WU7ZqckPC9S",
  "key36": "5akJYzQrLfgLx49AeexLa3m6H6UiWErQvcmtYAzF4qn1UKyng3Vi6Rxc7zjqYX1t42yGHQy11FWB6QCTtQVShqMW",
  "key37": "GfZuYaPPY9cKBw5pVMKjbr8X4DFoFT7tCiroqVZyBsWnv1BTuerFXj7GpahadW9sFErvobif9Y69ufxQpN8CbNE",
  "key38": "2QAYNdTqMaJRMYbTHKScLpRkB8tnHehHgxj4pjErxsVg2vTwB3KRMvW8JTybBmXUNT1x8KqJNZtUqZvDDsSW7awF",
  "key39": "51YQajn9YyWf4CywrfaTfvm2NeeQZG7PHmmfdAk8XmgPk7V5TSaKykKCnjzFa27P4jbZ94mGGYWniHvi9d1gJRSQ",
  "key40": "3F1vVnk4mXiGhiPge3URoEZ7LH3PJCejru9yq6yuv3LcrWZy3Y5ruC4kSZfKXdWFA8YM5g8ypmCA2vny5Auwqwde"
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
