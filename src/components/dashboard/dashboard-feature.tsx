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
    "2muMbCrjD1b9oMNLAMFwaKpTkgDYJAwGkNAL3t6fSwAjyg93kEFwT7cUK6FdRUX9zyq7jWHbvaibgBJXGpVQfrLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C31gVwtQgbqiErJwByQTqZp6UkkxtziRmhMokGJvspSdCPjq49119Vke2h772A6k91f45BBMmPUAPthVgMMYD9r",
  "key1": "4NqHmUJHduZVJzQBY6GBnbAvNo6oWsHWBQYMRS9bz66EEuTNQJffQmPGEzWCWRSDn4dVJyfgCVcB47gfWH6WGySJ",
  "key2": "5ycNisWCn6AsGNEpqaqMjfnd4FJGyFQPrhXkACYgtitYkeSmNFuhRQh3gTDcYLchxPBK6piXR1ssDd1uJgY2Cfbx",
  "key3": "3fdgMEoCTUDbDjYgQ1fuCp45NDSFxGDe5dHuMN345CxY2gqMxUqmWjfPx8cuqDZKASKvPshxVdDygKCZJ7SsRi4",
  "key4": "iYov5WCBdcmzURP37XJ2HzDY9w94Lhgpji1wTgVfqA4DE9PY4yykZmzokystZofxMTiYAdL5XxDF2wC88JMbbJz",
  "key5": "2sECe9CYJHtZ7HsuJAPzk7eGpRMjtpKzJc4YBApWPvKhDAwgJw51LjiBjgwChqUSSsDCSQQoqQoXBtzMU5KVEPyx",
  "key6": "2fGEy48F85hDZDvFEKUUnevauMXWDJqCr5sQYnWnZHXMzw2WAYYgT3vayykMKVs3MMpuYvUDh88KVcznc5tq9JVQ",
  "key7": "3QjXCXQqEiv18kWnhCZMgA3wx7zWTb9Av3y5nHTsVfXt4LNPV7xbjUHvNpSFYdSEbcBsysi7csEwwB6KQv2zL3NT",
  "key8": "2mMHg6P5D1jCdEfycXakTEe17qazHJupQ55mwVmYj2A7J7GrDeUwnYRPQ5Zf9BPr9g8cEyr5soS2Vukor2y1rZEr",
  "key9": "5Kqhb6M5PY1f4kNRnXxt7fm7JGDQ7N7z8nPmudGWTXUEC9rNpGft1DYk4REmneT1ASXTFL3QNvMWhmft5Y2sZmzf",
  "key10": "2HyYXn1zAnDDfVKWrGhDyQWJBKruXHRnZitd3UFdVaYzJreGU2ZEwP6QCf6wWQ1WpBWEJQ2ajzPvmpJEKCySENBf",
  "key11": "3zMS7R3P49sEvENgeE4qtMMNZjpXksDfXX8rnf2dicyaWkaLW3u9sn5eY2QyGD5xv9Q2c3Amq3Nq3Zbos16721gP",
  "key12": "2m2ndysN8JpsksjWLSS2m2zKp3FibPryAwPjjXWB3tg2NhTh7NBGyjsgdUTKjTw6fMkTGc9XHiVxg16dwWjZbfYv",
  "key13": "QyxHqJs9ZVa1kYLAGgt9DNDN81eFcR3Wt53ms2ex5gW1JQvnZNDCoYqxDE9gFjexb5q3ZtYSSffiNki6Mpf6ML1",
  "key14": "dPruo4MPyFu9pXGpHNqXtv5HNnfoxAUuFgduLUFGxUw2tbYUMDiGR4CTGwKK9e7dA1TpYWGGgJbeS3U5a3ovBHy",
  "key15": "4oyvqnt7aq4BHsTaUaRoJiDegAeTkyM5SsyHTmb3HgMVaWdLo2nCYwBLuZ7EBXy4xJVsD5SoZaomxsyEg3r5nFSf",
  "key16": "qwwjsQsRqApzciNDo5b2C7GGAW6Fez1UG6hCtsuhmCEpDpyQyV5UfAM7eE2GNUpySLrCn9pLQYyoUtgn7jXa9R9",
  "key17": "34HNTHLEt4WaF2MAEzP14uzBAMEo2Kvba1gQVK7u9H8Y83zqbw3Zg3dssxxdWRr6j64MHbomAoxHt66BJG8hdkn8",
  "key18": "259EfaHe15eAqKFXjjHKLD2YCNVzAY55xkfUtjHtkavtp8dXbNwnB3kWDsVCro2MRtu8za9aAfbFoPyWCYcjz2X8",
  "key19": "5GmUb7MaNT5jyafBSNknYqk4BDD13vTzpCZqUU69Jm7mhJUMywWntxxg8DojG8Q4LEaTpQXJp1b65yF8T7GpKVSj",
  "key20": "2ESV9VZiBsjXjER5c1JnZat8zcWqxc3QuvweSzY9sjjuGBgovWgBeYV6MoBjzxKXVNo27bqTmnWLYrXq3KDAyPsv",
  "key21": "2xdxQjVZh532Z4CL97p6qVrgvrZtxDpYJzbFk1rJdUJ4xmfXZmJciEiDCGQjJdd1aNs4MNDHQCJPe6C3jRTTYEo8",
  "key22": "4HAUw5DTfd4eEYAYoVZjgTVmgUsY66p8gf1gpDdJTU8j524PXCxTjEdR3sWaitdpTtyUuZj39vv57RopyUJUq9C1",
  "key23": "39UZ72ZENXf5apawYxm5estGas39PRyaM8ikHRygup2EFUbiPp84L1JdUoSxbLjszhksgv4qeDKMoYdtwUZyJy3s",
  "key24": "4GRXaifroMj5aBoS62ud9gMPqznNXgcJAiVKoaYAQp91xPcQo8sS5kJYXN7ori574NkVM4AammLQJKbSF4MmiM8H",
  "key25": "Vig1oEeWWxRH9DVXRtYuaEDF51pDpz6kLGnwQREcNVYjR7izYMUn3N468JAturaCQUcojhotq2zQ2jDm747qw9V",
  "key26": "2vm3bBB5xzWZ7RZ4JMt1BV2Q29CQmLgUbX5R5BHSvLYgPqKJU6ogyNAfY3jJjEYJGm2iKipjtVgJsDiUqDzeqCUV",
  "key27": "5tRbJhMzi6x4FLFESFZ8p3d2TwZqQ1naXmbuvzjBcQZV72arxPN2TxTamfH71sEZsEG5rE2ggtLK8hVNsXiC4Zry",
  "key28": "5sj9hxQ85S5EdXiJfJxEtvF8wGTxqDWxVxzG8qYP2KCwba6kE43bQ9eMJDhNiPkrKHB9EfvoVNQkgJXUB2MzdpPT",
  "key29": "61rP1c5PSL8A9ZWnPSpi1rjCyR2h7d8m5S8nKi5pNvuXDdQy3fp2yY35iCQKSaLSMh1j43cyTVSMoCnbSgEdzJH3",
  "key30": "w8t9FERrW4StMQRf4rqAHBBcU9DQBKNy93bu7wFv6GkBkmWEWcd4Dwainfo1U3PdMKvXFs3zyDE8XW54rGc6SfE",
  "key31": "3xDVSGmih5SDYargVH2FNLziJwuevwTeDYdFPC49Jofozn5QsFnNzcFAJd8xTpfwzf6SgLwzXLSLsEmiNKL9gv4C",
  "key32": "4aEjKdNGNPZwCRMU6Ajx9yaeZgRwz1i13daffiUVAKUnTWUwRX7MUM8o1b4SGoMvZr5yA4R4MoywU588RT4HZGEX",
  "key33": "2zgRNAHwdzCZWNyNA1RnehSvaNGTH8F11zAea86r1mKR9SggY9cwK3Fd5dhhLX5DnF8oDwjNZp5rsvd2xkvUfHjc",
  "key34": "2tPiY4MSrodA9RvX3gwfTa9qc7Zn4JAYT3pNHtioAxzCP933d6tcpmX71RV75SWrmohECcZDnSaWQRGTTR5WfEek",
  "key35": "3taY5ZwK769jEw1RaDARpaVf1mZdi6tj492UoioJeGJ3cAE1EBVP1AegJidw4PijUKxyW5B7Uo7eyfUyiB9835A",
  "key36": "493Xh82BG5dAxT7FJ7vRgFqurhHAGnk7qfGNMrzFnUTEAfWLiprPngvgFX6s5Mh9yR4A4tchp5Yzi1X25qu7gHpd",
  "key37": "4pvtKZ111DRNwnNgV67tHm7obCxk5rXRLdbpy7RPQmeJ8hL3AxeGoFibgHYUWGJ5xnx5SzCYMWHcn9GE66f9JRFe",
  "key38": "5YZbvqD2W4gTNTPSBVZyyiyyQSVVfiNRurFSNrdmmGk7ot9D6zwfewH1Qm9VxQmbuBCiUx9BmXhNTDtfXQQFW8Qu",
  "key39": "4WZ1pYEETjrrpkUnCzxCNKG3eYjDMNyJEZJc45R8s43zM1xAAiNTzoynJaEEHRnd7GDZZQmgWqxcW1RzENjoMrve",
  "key40": "HwqJCvDxFfUEc4PdiVnjjE8UVAfHy8KsF2UYdLSHx5MrZxi5aFTA1taUW9AnNrrn2QA9gmBBNfrkE6C4jmv5wgG",
  "key41": "24MdTQyFL6UKrxBwjnZ4pY1mwQq55sseemvHYnvZZ781k8Up9J6EpHFJF347pqTeDiVhfxvEeeKUbsZeKQVuwGXh"
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
