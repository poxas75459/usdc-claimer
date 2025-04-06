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
    "ZSLBzGm59CjR2f5FxYJKVxGkkT9xPdv4PRE3PygYeXYSETVoqw1QzKtbFgdE6pw65L6XSX41XVtD8xN8x4BTm3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqKvcn4dP45MExrnNDU42A6c7Ys4eqtog2oLvxGMBXMh253AjrEWJtSR7HLExrc428eCy3QfjVHwszQNiQ1LVcV",
  "key1": "67VL2oSG8e63wrDDpfBKHzDsSq42q4tngE1DNR6GsJPSRBzs8wzeLu4ZbjWnvCPMiTD46HvgGwnSBGzUz9kRChdc",
  "key2": "2VpLRrLZ48Jjf84Dh1UX44sBJLiR2okhUzAbPhwtSLLpn3Cqc3ciFUu4frRRwhdukNgREccP13s1cBAmd1UDWcAY",
  "key3": "5jrsx2uH6RAS5JgmmX4wFCsC3Povy3xrrZorDBk32rYWh4Rf1SFFqYvxpobiAWEvLqqaLdboe5gGo2M6nEMY9Ler",
  "key4": "4sdVw6C1tHgA5BM14qaLooWxNFDw89wxQH9U16zCE524SHSwiFwBEksDGZzqXwsQcbnJi35sifSk6Z6R4rUZaU4a",
  "key5": "2CQvHej9g7o27KwkzZqKdM4oaJ2KkHZTKS8ZkkVMQqVwxUdSQx3RkokJ83JrJLzESziX9r6g6GHFUop28kiySsqT",
  "key6": "3JpYbJQDXxi5kRciPUw76NKzAnVpBJdPaEP3pfPZbQZoH3tiSFuT5FqWnd6APx9URKab3pmQ3stHiwz8BcDWaz13",
  "key7": "p87c7ifp3GvQYUVapsHAB27AkDzX7w42HCpcPJ7ieFZoex5pvZ1omAXJsyvv6P8YZFsnL7Eqp4fxBswo1GL5dMq",
  "key8": "35F21pwpy3syZcxtoggGjQ56gzbgBBj8iQaM1qRrM9tvXBJCmeqZ9zNbjJsWnNGeNSjmEdWomdaYJRv9SRhFy6MS",
  "key9": "5ih97v6NkMcbTC1R8A1K8p1Shzf4hkAsKSwPatzgM4yynW9U8CAGBD9VjysZfgEQHSPxVpoUy6FHZKTfUM2gHoPa",
  "key10": "3kKDYfmmFu1Q96G8UDRkPjztHVMY3E3fRKySgaKEpo8i1mB8msw8AFXRpB3A8LQPQZgzvhSPpcAxMgwK4dAsvcBw",
  "key11": "48FbeNeULnZTCwzbjFdhyjaUhy8MsrfmJrg113i1YBfFZaCnDh5Af1sF3i5q7Jbf4pBCpYQUcLoaBT4ggemtHEBR",
  "key12": "2rkCMox5pDBkbsdZoikJAN7dsqJjjRsE8yqw4dCUjbnrWQq9SJHMhsVfWmbL9uSY4NcPZjEfMJfpjn2LnTzB59pD",
  "key13": "2wcy74dNwv1ktw8sL1hKqpWsHezLwg4Po9RoJchQ8a9KrePj1hU212Td6kMQJj2HtjsCyDoPdbvNrgXts1riaV1f",
  "key14": "34Ttkps4eHwpj95yG3DQRrkw2GhBkwX15YMx6igLf8boofWc6x1g5As7PgbjcTyGaUxaK41sMFrbvyRU6BbgbzF9",
  "key15": "3ZRUtYdidWHVzzKseGKGYkodJz11B1oQXgrjCNb1PNGn2QDGm7iTBzxSYya8xzQGEQhjiBZJxaLmdy9FKg4kkBPR",
  "key16": "2tq3GFGWp37hk9sFA3CmtB4DdpH8NBWVicpyJXNMHL6na4rhCUKgjtuD7ZLKaY3Z72jqK3C6XxvkLiUqbPN6t6Y5",
  "key17": "3U145H8SDhPVEjcbFQBtwPyVhxrnVMNyxbUcwxqcEZtCAN9nLWnyFEr2SdwrFDqLr2caYix6KKXZygWEiQT7NT5s",
  "key18": "3hd5kGzGaFQQcPVWtnbmxZUqHocTfey2XTxdHCCJtWjz92qjeoHyqHCcShRooHARaEXALDJMnb3pXjNoimTPPErx",
  "key19": "2A1WuKRipVsH5wf2JZViAH5X9bCbtnaLHpnbhbXs3XbP323TGbZwT6tBi4kPennny7PtANzSJNxzCN39DXmgrqwh",
  "key20": "5LnXgCfPRBd3MpJhtzDvYeDtHEAr68GFEJXxorvHaPXcPqWAHdS4Q7TP3TPi1Cz4Scv1qZo8dKboC1byJggHKQ9r",
  "key21": "2TV89aLqszd7m1wt7U4ibaT6QsoACPG7wMwM8jUqYVNuPXFZbHjznpEfdsEucsdsBQjTQUyRcdbNc8pSyutgZovv",
  "key22": "2GxooQSaXXDnCe2MCbwz2zBqtX2B3LAgfxCrhPYqph5ABFdPHWvm3up8jeSe119Z56HdFdgsqX2t5qXtvNV3TEcC",
  "key23": "5ouWm2nkn983dafCVtrb6AXPoc7DeijEgUL5qELiXebBzejDEoZBnvh99L9z2wc6Yw2mKuWGHA44n9sn365FcNXp",
  "key24": "3WJGGzaUy7jmnXjEvGaxjy4mqmpLEwR9iZnHttYe7GG3EAteKbg5cohKMZ98YkrcL1nwLBgBNRgRL1X6ytQtXkLu",
  "key25": "4Wqt3zrGymT1Y7sdYuUNov9habt5y4awL5AQCxUp81EvK2YU1C85ESQiWX8ihoSsESNzRQJ9JNKkj7gzaM6XjV2B",
  "key26": "2oAQDp29ximSC1Ah6Pdk222VTQkKtp3JYuQJstcufdFxv7GwCvSF4uJL9qhsH88yndN1zH6tYE6GZJu3YLNPP4Vs",
  "key27": "4Z5Ub3B4X7DHzFVTbKUoxV1MjzFcS7fiqftUcNLt7EJR6Lzz7f6gxiau5iVDqmxhUgX9wxweXavhFCxaA2j3dUNW",
  "key28": "UUptbedmKwteB9EWRQCUmAFRitjtW2QAMEZ15krjW6jPLa2WqkCxamD9HdzppBrz5hXEmBtxxoLQGGNG4G9kVyA",
  "key29": "3wKr9KBPR4STT4XtgNk6rfC3g4NX7SL1Vk56LdeyUfmXyZamgbnLKhxd5rqxhtiFL5YsSzV7G2251nKkPk8uFFVZ",
  "key30": "WUZ61cpA6Jsf8oRUTKGxUKwhpessvcbLqQ2bykEQyxAxccRQB7YoKTuMMthA71uJxwY7QLzBHVCzrPSgt6DjGNi",
  "key31": "bppC2yy7BVTWwowWaVpEzr7SG7ej1HpuQQKkThkCnZ9C1T1GP7mwuKi22EcB9biMbHHPjkEQbqiQqekaRNJ8WVu",
  "key32": "ZMHEoKGaxe6oy5jbjtXMxngy4ZfiYMKos6BLsvji1qZRYQa3s1nUX1vWNR3NfpFd2zaFQF1gFWdgfhnFUZPhwh2",
  "key33": "3GCf2LbeUHCcLRf6fSfyS1bTWb6bb9wMCkQAc9VNY699p3bi6AVAseagvxN6HDfUKhRBYjWRE5uxpdTknpBZzE9Y"
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
