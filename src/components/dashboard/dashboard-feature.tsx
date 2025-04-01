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
    "5ENWKcX3kULQCo7Za14cKBMGyhPTCq8zXKGWetfzSrNWYYEwbgPwHbnZchS6txg5hW1X5CDdLAWJss5Xz9pwCZqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "997PqJ2TF4bSijaavcvL9ENAZZkJaeJjAfsEX7MESoNN3LqGo2cEEmPSVUdY5juc1W8gBPX1QBK25PyTFEfRXT4",
  "key1": "3Bu7Ww25HSYX23rizqxD8odGMrVuDvXiRY3pcRBVPGBJg2Sgoi2DtYhCvwLE5EevyYKtcjWKDrn6Xiu6bVUQhwZv",
  "key2": "2gVvdnR5rVFa9ABv9M47cdKgeXMZnth73RLrXWfWCpHwivNUaNYzqFhcT1EbWk6YQ4SWRmWgFicqoA7VdbG9FNYS",
  "key3": "sqXrKV464ELB7nU1AYRPofNoXVqk3YoewydfwVv3XhHGns8DYcVCe9xXctmiEUkjFnPUtEQ1DNbpWFDg2tvWT1d",
  "key4": "54kaW7CdCru7UVMvegraHNCnaJzg7ToSGMT83iWWSzmuB4oJ1UDU94nybkM9mrHWYVJdBLgn4SzWiWXrk3qmbS5a",
  "key5": "62TMvWyFCP3PNzYrWPdTvhk7SZ69kdxW8TPifcbEEZdA7xzY2wYqpmVRozTCvLXqkxysLPjY8KByyHDJcvpA5B2W",
  "key6": "54uD9m3GZoHRNi714nfgMNBrRfBiBYee1vLJeiaaLjAGo1aAXKxrp5firG8wF1fGs7jrcLrZYoXNnH7heHMyPub1",
  "key7": "5odb8uGwvwhKvXhtZ4UJb4Ge5dZA2HNvh1jMV5iM8fBAkET5LauUkGQ6QbLuMPZ6fbUopqme1PFsBmxvwE7a2TNp",
  "key8": "3pbuFKjTvPDwdReEqGGEL5qZ9MYTm3ysuLyZbvxjFBLAB8SMP6Sgaxp4VD7amb69unvwBv4YStK2NJbjt357yKWo",
  "key9": "3N72dSH7Ao7sFk1cW6JEboaCkac9vkQEZ1Z42UuT9aHCUEtjPFNwaZBNLDYRkjDeUYiBSTgCn8qtqPydDPFNp6zi",
  "key10": "5w1RpZbm7JN6rdQ17PGwRkdHMFRF2pG4SmCCW7hRFzw6ofX8kbPoAbPabz3EkNqrfWtsZ86nPeKuMXuqEuGgjYMn",
  "key11": "5QB6a2Ddqs29bZFLvb6VXwfsL2RGTXFnvueFcomjwr13QSwv2QcgwzvXPJzofd6BwZE3xFGAh8whURSY3gJ6XUdK",
  "key12": "4SspEMmp6hpY3UhbSYxcPYi8NrhF75AECVTniLLpSAtqz6SWv3aDeLMr2MmTath4Gph1auAoE7o9w64vJWJFDhHb",
  "key13": "2JSimJoB3NuDB1tRqSLe5DfGNS1eboEcTQ4rM5jcEnfa7foXP1LV5Uanxcw33LuER7zz7t58gW76HjZZ3YfkbheU",
  "key14": "41htgHtufPKVLNRKHyhyRE7Fy2G48MsK6seJgEWpGwWNcRrdDGuYE5eqwCz99EC2mQDUrbCLes2hwjWffpVs5VdZ",
  "key15": "281zrWpAT5P7UsFVUmXbGcbt2XvyJY1jP8Si5Zy6G8Af5in7mnfXDjQkwFLBMkzwQqbqZun5RcJPG5EXHkY2wyRH",
  "key16": "626ZNeA14ioiMvGZmpVGGZdY8yiruhaqY36dT7oXBAGZy7Lwiqi8dUFcLGZxXfom52K18iEFsqTKXnVXAzQhvKtc",
  "key17": "2eTv4zHdqEHMd6CvStcPjFLED8a21FEpSQ7yMLf7xQQKjTnqVdX52SjvqdVSGA34QVuT7pUaMFeThHJbBgvJh9Kv",
  "key18": "3f8m27d53Qq8HSunNBajXvS8f9B1b6rP48S8sUNLFH7RdzaYcR8a56mREm5afQdtU4629y7vXgP4nMF1mb7zsjV5",
  "key19": "jX9zbktCKzNi7mo1PLbwkgAxvznB4XpDAWZ7no3RFVxALwTQiAsLkbMq6x8vwyDR89q78rTyoUxdnz2A5FGs7tZ",
  "key20": "2DoTxWwMSX5iTKd1cTabTXScywE76D3RXyhhbrEP533nys6YwZoVdDfvmf1ftjrYQEPegveHZr3tWdHb7Q7Fbb4S",
  "key21": "2jHtLmmBAJrZd71vWMkR4ShN6UmsnFCwLUZjijeEAfjkBZbmFx4M59DJ2k59Ptrfj4g9bqChY4KgnZwpzKaEYjBt",
  "key22": "3YSiVDTW1uPdwt3s48kWy3dDKzasBVUVG3JXTq6ud2EC5Zgwfnxt8qBEQ3Xr4qUJNvnsnBmBCv8e1g4bEwBSdhih",
  "key23": "2TgCtq6F39YCgHjzjRm5ujrt223TaYNGbtnsyuFZK9LAgu64VoHooDef1atWhZrwuJymoZtLTfNrrAvuqpgtDmGy",
  "key24": "5hrNWZXJrrUdgmt5of5Wh4KzomUaJPUZV4Tscb94tpDHC1tu9B455HKcjZgc6VZ1vZvkMDXoGXRQGUy8A5jRw6Sn",
  "key25": "3stQDncbG1Gq5yd6td6dJUbcss1Xbr2FT5NNhnydinQ8YSfzt7LR3gNT8zGbTbjnyvDYtr3Q6vXN6abxDwKEdoFq",
  "key26": "CGFMbdEa4roeB8nhy5UBxunKeXjB1o7WTK2QJ4GM2gBs2PfyXSH4W9ruGqNJUdrMZ1gHhWnvUG4fyziogFrbSki",
  "key27": "qeENs4MAkEa7XUNZKHhsqtQYNkaKqCqFUYu3mMZtdg2KhgzUYDfdgEhb8PHRUe6UeNc41YcQVw85iM5sGcKoGAT",
  "key28": "5swUr766ZbLJEJhjgxJmYSFfJ6oadmopZ8gwVKJvEXNwMU8Hu5rKm7yC47sdRS3J6wRZ3Un95mG2adAh5JXhdpwU",
  "key29": "XBxBLhJC3mMXyAWVYTQ4SCM8UVAkR5SSeHaZ1NyuNnfkLJdHWTFGpsFoMin7WsSHniagMeaow2V1fbBfV4Vaz3o",
  "key30": "31C72tnqvWQSS3m6AF6AjNjz5eLfHfoMc9eSzVjzjCd2yf2UEgNFqGkZogcuJNVAyQ47vjsqXSZTDnQ1UFb91xGs",
  "key31": "5cGByp9cqTMrNaRYR47dC7ittR86w4CkFxmLd6fsqQ6euFgLqdSYLYyLUxnck2ZjHMbgwSpf8MTj8yKNJMEbx1Gs",
  "key32": "5PzgqUpej46b41NtAqyWmt7UJwZ69134apubFGr4QVZXNqVmnXjexxJAu6RY6yCo4135ToFcPVPvBp9h25fLTAPA",
  "key33": "3twTzym3tre8t2Z5KGNWRKyKFHC3QTFtkha3Kc42NgAmEmF9YKACMhACfwimEURC92R8SCTqnKvHRfN9EbkHz9xw",
  "key34": "4nK8R1qsx2Wd6JhcvGkudrUwQTpWh5KRaYRgKHSjHcLbHqwKx21QkFxUDt7NXZfGyjSJbJdR8ZKVRNbLg1YEB3W7",
  "key35": "bWQHDUuss42ab1bhxMNrcnPWs2mji4qwFuAJr3WHs7SBgmUZ8DkXjKXnfUJgHsoqHxwh5wEeLWcuCEJqpxDTmc2",
  "key36": "C1DnpAXVKBm8gYEsBvWLBpEUPuVdRFT1FudnS3WyfiASzZUdzAhmnATcHQWjyBecfs4XyrxrYzs5LmUqorMrum3",
  "key37": "3djA3E2yxp1yQitaznHiHPE3Urt6PBreNMkDwo7SnAwGZg4t5ga3xwXaXUGcJ1vTq3kJDoDwX7AzzGQE3g3C5Er5",
  "key38": "4ymv3nSPv2TSrH1C6ogqTKkWvfgF6k5rru99AyGLJ9eUFhtgBjiD5HmawVe32VaTCEAhbR12y6j5j1NyyFS7a4Km",
  "key39": "4tBUjrzS2jrBf3Sq99evTjMrqrGqaSg3MGeDyVpNf8WwAMEHTzkwRfhY1oF8sRa5eTCgdywdsN4CLj2ihnzw7TNa",
  "key40": "4v9QZTPnndQnH89WLQVYkfMuDwKeGMf56RFnDN7JoGPtxB9DjFWcDWjPEfCAT7Z5ssKmotJ6XDXB83iyQaVcaSfo",
  "key41": "2ucH67Xyme5mGS2mhzeHFcw1GUhSiXeg16inYL9CJUML8zEn9NSMFsJezd78STN6mPEFbcTCrrDrCrzAk4XDbvDm",
  "key42": "2DgLjfFehBLsPomoeMoHFwjVNw9RBadZ2VNChhn9V838tadCoYiyb6oz1Duv2efJFzPYah8TBf7ToNNEJfF9jKMS",
  "key43": "2uqGjFnoDfbtsAteAexrhGd6qurWjdd6uPsBm9Xb12xcZXoNFygR3HiVqeoXF2Bjym1PcFDHNggQtmJZgYeH8S93",
  "key44": "XaRwvbGmDpiou1VknvxwYpa3cSWmuFcXrsfxBnrCErqYTuZpNtbHxbLZTPHEJyCjQSTmx8qkGuMU75zxMgWkPv4",
  "key45": "VTqeQSwXP47WqbnJeT2aarSrGKfFmypjEhEYNJ1uQpphV3yNsWmgenNZnENbYxQqDfwfMqXvHy6o8VqWukseggm",
  "key46": "2wLphtCyaaXDLYKLpkiGdLmsHMgaqfzvGsaaGMpCkrruoBxtNu9xj3DAaAgmm7LXuy2954JunupATNQzaBi3uxpz",
  "key47": "36GQAfeFQbPXWjSZ5qurkU3QaDJxw3g3jmEdfnfjrgN7bsQ3Yrwk6PTw1GiUJba8gwYC4SF9DYALSReembzbgGGs",
  "key48": "2L9B8iYWBsqMTouJUco7Hk5TvC3m8E2rmzic1BRW41JgGZkHUt7C8T1Jk3RqeqEdS7RermRvxdAamRqpgA43KmzE",
  "key49": "gsPFuKu46ykrApTDbq2cRrJJMR58955UvC6prU4yvMp4UkSpQXk3YMfDpbN8GmLoXUAZMhXUd57Eh5tbgUaXKBG"
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
