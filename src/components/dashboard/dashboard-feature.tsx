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
    "292b9eFesX4e9xZ9cDeLWvjbTP2RSEu1oXXq6YPGdbvHWsKBgPSu7twbisRyRhHsv7WpjzMCvTs3aAZbAaHxzmxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nKRuYYsmtS9doSczwwAApwXemi2m3AnrN638qZWUprQCiBkse413XYMqQWZo8bjhK9ZqNHpN5psomGURgXsHcA",
  "key1": "5HkoAJxdWDcK9p7ozuazstA8rVFUaRLX4zkAcTso2Ccp9dU34y1wRgZZQLkfHbmuNmJgrQ9Th89yk8iR6mCyH37W",
  "key2": "24sN34NdcwtGkgv9ZfQTWK2dLjBXWpNBB7uKnymEH1Fidia85wRwwGUTjwiysB77sYG5zaydcFQtJCgC9HdP33zZ",
  "key3": "XEkjkXYJpSqQcwsWdGRM8Zj1ZzUKQkyJByK59WaZdF1mZ8nXKDKpdMs6dmHbtsdapp9Dyir6XZhYujxDk4xjrR1",
  "key4": "5tYepWQDFryptz3fJxxxPnCCodHJkLxckzTBtVTq9AxDBgvsubqUsnomoZyCy25zjvN2Pwx9SbCypd6rU734x1vi",
  "key5": "2RgZxEffNP5gsXhKL9vr4e5QtP2ddZNUZpm7ybR5osSdZujtKH87Th1oQ7LhA1PkkdJ5WGq7RUitz88T2dkTbtB2",
  "key6": "2SuYAefhFMH6Z7zZbJFSa1bDwHv1zL8b9S3LKwt4MDSh1tRxRHk5Nv95jaPTexF6CX2DEpQdMPvns7njjRJfmxW8",
  "key7": "5mrkce2gVCVuRtwBU8cvVZbWYfhva5X1Kz3XwvUMT8WPLZVaQdXTBA9ngUhjNHsmdzrFwddsc1xus9cqSTzKr4CD",
  "key8": "54wZ6ZmJt6bd8kKstAMd9Cp7GKk8zYGnQeNyqu17GxXGRf1SSBbCfzGJf1PCr8GAyZD1snexCxFPPRnYwvBn2u7c",
  "key9": "4HxVgh8dGjNgwbst2DuDKjF5aEz2YKbT4ineqcTTXcnXQo2ERCQvb6GRFouZZwGRmr3Rqdog1yufySGioNhprebm",
  "key10": "4H5H886jgNTeTBmCHscPKzVhZgYTNZ3iX1iuZg4HFW6HwpV9LjYc5FCmPhrDirZaGAozELXdKXtAnP379KkGJ8KN",
  "key11": "4JjmVGhdjricNXjXhi9pP1kkRyeiNoqBgXpFLJfbdQ3KBu6xRWaGrvkFjjX2bW5fudCmvdfsaEPGw7E5Zvv8vhBf",
  "key12": "28y2qw5v7uCUpXg4b1QRNh1dM6dv9eUm1FanyLjkiNPAW5qNRfh5ttdTDPgXsRSvoHGLnsPS6GBsTLgXreYpW83X",
  "key13": "3r4XBq5jx4iin1cez9jCVVT3taiovGtT87MJvq9t6mPjVdiKXBuMWiXVZtUio16uDZ4uW6YeWf8Zt7DouyydTDhy",
  "key14": "jqZrqoNjTGgKqrPAEoCTUCuETRg1QHZseoGTQyvKJDh6T2TPLS32RUfrznR8iwzARt7UrU5ZJ9oQfUsnr2pbLeD",
  "key15": "UVcyoqfNMSJfALbw2WqqDs2sDx2dRLWrUBdLRVGbz4S2mZU72TXDbT5jdpZZUKBYJvfQYotWQRbzshpvUoCJrv8",
  "key16": "8HLQTtEcRiAL5r7hwogwRFKJVSrHtu9Yot8s8rr19CWD99J4gyonyiNY241QhJ3dLhXWTNdPHGkxtJQH5Sd5qpJ",
  "key17": "qXw7MRzkVemcZFjFN9dFthzPSG47faAAZFCsx6bgSCnvqKe1gdkW2RknHJBxmBEnRRDbaZL8SKNeT819nLwyyEx",
  "key18": "2GZE3XmvRDUbKbJemoQjAkSQe4rW6R5uPqkjq3WLWBsz2SVffE4PoE9KzuT6NDNScTuKXT8jo34iCV9QWcjJP5xT",
  "key19": "2jSmB86mZN87B6UdmkFCffRwUEktRz3gmHSGoEQvgsNPEU3Tk1LucKQtZF7onDYVhEdWPmxJuWvYx2KhsKpoFWZr",
  "key20": "o6xd4S1VAeEyQPuHNPr4fUuQy2eziVobAGDSoBd2PTdvLJPREdf63HRjTFmyh8juehXUyVYhvZtDoa6x9Gdnii2",
  "key21": "xR7gZtiWGu8wUPABH82qRJrZKNyFF49nHdSsvYqo9TF7mus3rFmsFfzaWW8gKhpCNdTiTPN62YEWqYGWhhXRYJZ",
  "key22": "3hJ4KFCPM6rwhHYerJTDLHZf2EuKWp3MfTFXttLjwhxy6xohAEZi15FFCECYLR7YJJ6XUWyUv1UUv7p36CwSeacZ",
  "key23": "3kGFfqcoyNDbVvRbfkWTDkqt3VWauEb9putNZCTJjAiT7JmYwGU8HcendCKNJxSit2Lz2WuEpz7gqwR8wPTSoYic",
  "key24": "5gMzoREJrRNLdrSswBGWZH6qGG31osvnRY2HpbfBX2ka7bPW8ynYxQERhLht9qN5Wp8yX5VgBHpW9ajcy7GxVDhB",
  "key25": "ddvtMYVMwxGhKkbgzjxzJB1SX3aiMUd7BcaL44b2rqZWF47W5PHEzWpccFz6RMbYDZaLLxU2aDe1XRfFZa9Ju6k",
  "key26": "21Zg4xanBpTY9CRyrGJvW41iMkQnPGjSWLWgG3N1LDzMhCANoVXWu9DH9ou6rFD2zhGnZBrLYQ9bZEWyD6pPR8j5",
  "key27": "5mYpQfKDcDXjhwGE1cC39QPjwCgQmQxWjg5LrKmW8nfk1ajjLZQ4DvQHbmkRP1trrSb3FMW7Jpg4V8SaSocHtfrx",
  "key28": "4qiJY2yYsNDN6M3C8rhzWCVw4uhB62kit2VK7Mq6bSxadpZDgYWziQWind2jMZQWCzJHD73gmGZ1C8qhafycb4ae",
  "key29": "4do83d1LP6ZWQvdvj4EDMBmLbjyC2tKk4ZKV9PZ1mQSoUejtVoSoYjnzkXhgh8gS6DbUWBm7yPvauESSdw1ciRL",
  "key30": "2wyaf87mFGpScQBUH1CKXWwoVruVWNBwxpWK6Hyjrj5U4SJdoVUwtQQpVr68u9gCEKvpDahkWMQ6hWz7FJBkeTuR",
  "key31": "448U5QGnF8uSCo9ZQ7kBixCV3TjNTyqs1depcNerwZ2r8hghEagdWYkugKNHVjwFn9MZwxZRxpmeFgQyM3Q749Qj",
  "key32": "eivrwNXJ1em7cWycS6aLhbCRaw7J1LJHJDvz3CDSj1CmNscgfKoBepkeYojyggha1TeTEWhBHZwiYbVobMCqw5B",
  "key33": "3FV9TtVYHZ3aYtwf3ebTtDZ3far98mhJn578Uz3e17E3Fa1v2V1eKDh1bTs2eLhSzY2WQ4281idNN24NispEzP18",
  "key34": "Kj1bLPD343beSq3nQAsbXSAjoCkzZQg3Xi4VBsD7h6HDdPSMEMJtjNQQGX2KGXjPLbuKDVPdFRtJLLaNw7khx3Z",
  "key35": "55x44LS74NVb2PYvpbDzHjiX2uKTYutWSaQX3XPb2hXC2pWFoQz3jbm1RbGfvsSaToHxT1HbH5Yh9khnAm2fNrSZ",
  "key36": "5s84WjJic8LCf5QNWB1boEDvw8fsvAGZRiG8dt779VTS3d2p65UEGud7KCDkYQjpXMKGwiUwDWDohLKpqXXSQL4M",
  "key37": "5LCi7LvWDV2RjMVY42KBdCqNgZFr6UKFgG8R6yXGZG4XTdtV5EPAk5XLGjrbqrwnUbyV6j45bGXwQHoBPobyG83R",
  "key38": "66ew3h8ssxPq4h1T5YmNmSo8MyAiXL1zqcBwT1C8QM4RT1sgcXXu9LLhhmitXf248SAzxBJY9Hj46PcJEPRMVeVq",
  "key39": "3LcaFsba1CiVWTmXyc3KeWF63T8Jp3R4xsppcuZRMyktdePJ1WC6EEnwD664dJCbTi4Bbzq5rR2EQ8DNZ8hQXVZF",
  "key40": "2T8A6awK3WisMHH3Ue83kYYPW1UQ3pwG5YdHwYzr2g5ejqyLsbvC1MB6uR4Wp8zEuVcweveBSsaNqQgRj6cPfkBJ",
  "key41": "2ojB9tSDZf7sciN5j9PBySkWdzkKny3GGHKSjr248cjHJYbU18YrxjdNfctDbLtM7aCPwQsMC7EM3Fw4fNxSyAh8",
  "key42": "wQ9jWo5Syjz7mMA767cht8poN8WqMffbrEbfWZHctzHMSy3JWJgjkvCUhaszg5iTu83be6SmxM5YwGLAt41Q8gX",
  "key43": "2KriEpZdSug7ksTvcZbUEj6Pu6D3MnRdxHnPBVu1JmBeRXCLE2aGGrwFhf6Aix1a7HutKGQudUR3o3Wf9FLCP2by",
  "key44": "2JpTYND6M9iuKExKGYNs1Ev58ZPBkUDZfUSKCek7BqkLQAakW1rXBGbWoVC4tJV4KrkL7peNeToMCKXNYQLeizKh",
  "key45": "Mkx5tq6bzxMHivkaRgFukfSJv1g8eJkmiWtR6YDoBDmnrj557EbHq68TNRsAmqMukHnSr3u6UnkLrrxLG7uVJro",
  "key46": "478jJiY4JRxbkiHoECgHZRhMpX8hLimL1mWgukFDczXfkh737GwMDEUem95mxSVDZ2XPfC4ArnRoY4Cn4meKgJgB",
  "key47": "5E31jaVrBtZv6jtDriV737k9CUF8YBdm42Roav3ZBWxMQdY94XryFwaHwHP5EHSaiBX5gsMmgB7tmRF1gQ6LyQJm",
  "key48": "3MB7XYubbfoupAxj298AgJb1sA6AwVXEmNyUvzPTvKP7qk1vy3BzUmShxFBs4qaWYyV89xzS4MdRLndkT6ejcAs3"
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
