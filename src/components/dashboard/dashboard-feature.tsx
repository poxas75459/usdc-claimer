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
    "3w373WAR9ZMaQbuVuc4PSCiazRki7pQVQZKZx7fAJokycBkkVTFjU2GV7kdMNc4VBpLjsapfRJK9VTeHtDkxVFdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XD4MaU285KHCJ6N4pfNossuypL7VQtTWccpNFcpT3wkmkfJq1zPKqaRgp8ApjBSLq8D7mNmGjEsiL3AZNKq5y8Q",
  "key1": "5QKVA8Bgp2ohWshu95XSfEXhE4HWfSdev7QXin7gL9zK8ZSEti1JKmW2VJo4mMi22sgMfBo1bQm4ax7PBCcMJxrw",
  "key2": "RPhb8xrySyNWL3n9GTax1Z2PzVkWivsVdHikT5C8fgmQC8APLCzcqmKzVVJa5d83tvgccWxfcs4fayQYwm8v5vc",
  "key3": "4936YnrMdjFSjAj3FkeFNKtV7CqjVE6uYGNYdqMUGX2isA44PRP6J7DG5k8FnMv3DfdjJyEf9FwoP1KJKAkT2CAX",
  "key4": "2A4iMdgWemSpDTCRhUueMWEFL6ccUB5Ax3a144rC3Rk59rwm2hAKdXwpR6jrVk53bFwYCQJThWmL8YmkrBEd9Go1",
  "key5": "5MQdAaGTbr6ir8FqaLK7GfA39MYmsKjmWvkqDA112s2UjPjCKAdf58cMNTeM2WnEjonBc8tEp5dr5DJmgz87fRMx",
  "key6": "2LzRppxU4JCANA6G4igbsdFb2LW9YJ2ym9zQqVzbFPK8hdXnrAoUD6EfPmzJidFKsfJ5amcb6twjqwhWx18u2pD9",
  "key7": "3bMzdvtSKSxWiwr8ZYMLnYokFdVqWqN2D6irTnzGhcvTK5D8TbKGCUGQdNM9BCzyeGK1nhrpW1f2kSvcAmu3eRGv",
  "key8": "2S7kLjmQDCnr6GvFraxX4tgQvzkL9BFnc1yGZEaagtsSP5zgPRJLDkHiUSVD8ngsPvcdpzLztmZy5Tofw2aasH88",
  "key9": "Rg77F33bv7m4YzYCyasobMZMzyEUhMB4CAKnp65YTmup1BnjhdK51QBQfxwmYhzsptnRzLWZXRgRQEdeCLm67Po",
  "key10": "aLDwnxTJMEfQ5ve8pFFf8SUZt41MBmHk8PuZWZ7Q98JcdiA5cuw1mLAwai8ZbeqBF3UqbXSQNLbbdyTZATL6Y5j",
  "key11": "4Pibyzzs6yB6Xe4wL4injpeGpoGWtTPWHEEtrKBXFPjfCEUgDfmvcquqfpu9EeM5Vziuifa3GJxf6i7aTh9VVbZF",
  "key12": "552nyRZh3oLMYdivJ3yozJnExcHXgNUFpA5rZsPxnZAUdXH4EM1KY8BZUJEoxeFCaXP469ymzA2ZUo8dE4ApRpBc",
  "key13": "44HKninzMPHNJgFe3QYSjvp8rmZRL1b1S92tWT6Yf4wueaxKgSYugw4dTBWjZv5BMGDHr1GWPihKgjFSXi88QLPs",
  "key14": "4SQtzXCSLNAWnxdnWSQjKavG9kdTHfRjnp814qQVJJMtFRESyHDo4HLveBPHWsvfPXuNdcc8JwFN3V5BGiKEBLAt",
  "key15": "34yY9LHshBJ8nqxKQX4hogB9m84ax2xfuivkAwnnMwMXKuk1Z49bxyZWPYoUhzitV14QvJbdZcY6NqYb1h5qjq4K",
  "key16": "2sNHyf4Rmq6kTomqdodPwCWR4sd3MA9vMswvARPKGfUwzs8Tp8JRiSX92KXtaNDnP7E9C5KXA9hGw68mEefUdoNQ",
  "key17": "4v1VvA3ifjro975bcZLADUMHQadeUr6Qtm1vwqfnFYfWNomG6jUAiLCJHgkiKE7ycV62JkGFAUzWEC4DxC581BGs",
  "key18": "4e9rTYcm3TNMdKpoUSWmkTGP8rSkQxnLgNgjpafyHVNX6UWHZtg9eGxCAZMoPYJscNGKs1oPzxyqukyEeTnMHr48",
  "key19": "4vrfhBvhigCu44uTBTrKxJJKpoJJYuGwKYdHVENTfhZj3me3PyrCm75R3WWFXfpAFvFekWJkTyZmm4itkM1SyFSD",
  "key20": "3GPTZU2cgk5MwQdYEn9q6RHweWmKb829vXmqotrhUccirwigopss3oHUneni1dEp5Luww2XEdwhAuaEJ7AMLLUnv",
  "key21": "qipZMt71Fhsi7oUw8RKWbogAFVBatxquqszw9SYb4QVNtP7tnzpX13V2YvwGANjPd5LXsz15HLfZNioMgUihyyG",
  "key22": "PznYAzZ8LJGSSsRZnnSfLooWJ9iXxXB3bXfLMb7QWcXNqR4ZNSqvB2JqqAmvX21eUTW67CnsWSKDNfsX87c3Kjt",
  "key23": "Gesvyh12yXgB1mahwmZk1BhZKdCqjqyFibSmLS7mPQufPDVSCVUwa5fECZHTemyhY71Gh5YSjn1NVCnfviUqXAk",
  "key24": "4sHKXKvYAA1roA3PW3vaBEo5WdXHMrDHWF3RE3dskJd483PNaGqX8KoALSHhomU5gffQdx1PsNzCuLkUYWZkskta",
  "key25": "2PNKcWFeTxqzV7Uh9936K65D3BRhsn8XVrfAYRbE3ns2AsNuZshFtPyi1HdFeBvjDVgp6tAcfwLZihoNQAKjSTMD",
  "key26": "b235Rf5q4VK88ekck61FLVMisRVgFxUMXkmu8w3Pb2227YMNn7U9akZTUY4ZQykVyKvK6byXFgn5C6k2qU9hswv",
  "key27": "2j7ZVKk3ArPKDXxewDeCq1grkaYuQGfCQMgTpC7rq1CdtA4sLr6apJjxfUxSJ22CZND1hFWahYqSTAVyR79YbHNh",
  "key28": "2XPFUhzCt18xJYE2c8T6KTyXUZ14ZXFtMKnUsdWJLNiF63eZ6Mobb4Kb1MfN2FhbQtDLyAYy6gYy9aVMgyLCUi9a",
  "key29": "5ArH35L67ojnuLhvhkopco6NtEKhTcdcwG2sgu7UFssQKEJxub6CWrEHjZMaShQo3qFAS1uxnMGYyrXvbbspF3JB",
  "key30": "4e33zXXEdJkQkKcuzhk718oXQzuBjwCrugcbme847zR84mdTYvAntvz5BPhaxDvQmjBkSPfwbrCHp7xDEU4qftb6",
  "key31": "32Tkna7TVs6Hj2BrwJfSJSDLb7StfmcjCisvQWZzCBPvg8gYcHmxBiF89fdd5uerohXQ9vTdCVF1AiUjyE6vLbXh",
  "key32": "Rqix8hVeCu4bChfifA73m9ibeRgtGsvVu57iH3r2cah4XRM95Mtbdw1K535FA9vG1scDyNrwWsoZgKqq5e2hozo",
  "key33": "Kr8EvTFWhXweFzAULUyATkYsA8Wf5dZq3pxeqrBFSWV9T985gutwRdv1x9CGHHrAR7oTWZukCb6sfxbrsHdC4uM",
  "key34": "4oAxuhfLyHbp1cbuYkruNqzETnTXBkmrzZtrEdDNq9o97FX3DGwDVfEcmsQjqiYitReJK1RfeN91AapvZrChEcq2",
  "key35": "5avStTwqeTsBMZ4p6Dm837e9CJXMD8LhwGmSyJgiyrkjjbstECy8FPApWiAsyJWRVQqduCod7r5rQDGsJmuPgaYq",
  "key36": "3U6fc8AHrBwn5AZPbWcamtx5VVks2mpVXvPXKxpPj9S7dfUNJXQ8iQXnfqDBddUeteC8NZBmoHvc5m4no3jyuMsV",
  "key37": "4Rumc9Jmdz8GyZWBnukXLpoNMMoadJjShWhYG1KrVSJBaAdmw2qS4Q1hnAHB2w48E2JenZmxPe7Lv3a4MXQ8rrso",
  "key38": "49fsRQwfw5itLCj8YYiamKry9b6K3KNbvkdsizqcPhvrXYCyC1g8sMiD1wW6FLUSvSTxfQfzqWKrbGyZACBq2VnY",
  "key39": "66KiNUvmxr32hd3eibB1CSCkX7snno7xA27GTjqwCEDsQ4qY43zFLvGTdJy3niSGH883bJAqP1yhYaUq8WcWiHVS",
  "key40": "QnyNssZuh18U5wFa1U5VbXKzeSGG4fMXPHkMoTJNm8A5z8vm92cUpqE8My7fSTA1cPBHSPRcqvz4YNA2cUtApYo",
  "key41": "3ar4ABmNUYDgChw2xGLaLJDxgdnbF7Ny658DiuFnUMx3cQWkQi2qo6VHKb6ZxvTGtGJdnNHTRr8x3aPXxCzS73Rk",
  "key42": "4eGp1JvwjQRxPUHMES6o7Y4RLryCjWHXxHuMmHeRejdnNw8TuB4PBRfic3KCZzm3bcGS3ZywNJEwEr87rb5woukw",
  "key43": "5CieSsFseztr8aSwwr27TsHzmnkYK6txw8jxqhArH64PTx5tzLgq5YQfWTmEsCwTfECsbAyFmjXf4KgHq5DxkVf6",
  "key44": "hx6ZzNHsbobVxGsWi5qs9Bq4jfYuZPruuzBFCFojbxzBPy4gEMsAs79z4NpRXPThDsS1uhKng34fWmHvHi5ojGe",
  "key45": "4kHHdX9MqffctHiqMBHyFcVCeHGg1ajMxRNrLEfUksQ12GUeRg5etBDGvUT8eACcDzX5Z4TDjxkDF61qXmEkYheg",
  "key46": "3Aevy9jqG6NvSesGN3t3axycHVXbzbyjX3yz99R6EHKAEWHqV2Q12CYRceh1vJ93A8P6hKo3EgQJHrhiSSjkajNw",
  "key47": "2xUD5WuFxyRUojR7i7URCgxENqXSeuM6ZsfFb6FCpMBcFUmtjELe78UPJ3f9rqcbSyrGbpScSK1RGu2zP4za47Sb",
  "key48": "33ufkzdjrMopk6TcQ2x4Vn2grS1gyfahzQqBK2GprswjivXFEr6GzkDDFREVSjoc7fTyWhj8SpuysosfHPqJzwrn",
  "key49": "5oubSPhMywM2f3QJFbfpZq8yzv3AqT6tF555z2qbQZrVZUz5rmenhMfLGNtNJpj3nJiFHxfLYqjcGMcJ3EJTvGm5"
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
