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
    "KGPJZvXk9BAoemsDa1wgNn6xhcq5jRx7jg3biizAy7yGggJHAh3JT1ecqbrUP9JKEbDJLryhcjioQb9FsmdUydB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yt2wNY38eMY1DD2nWjdkgDnJVoUaHtLknZEhi2Hzrc1e7tX4ZYDjDpJm5ryfsYQSn54FYJ5ocRVq4nD2NaNg2TN",
  "key1": "3sqcoKpNSUGdNiHxwkUjTCtAfMjp96nAU8BPiyXz72LoJvauxvMkz48vrBvaA8LBJtfKyxXdQFo7FmAzABLVXs6w",
  "key2": "wvSHuGDWf6WqTJRYVue44A3MZWPE8hxDPM2vUTxWwj6aPTBGry3roxkWsdbndM7ySP1ve78ydY1t1jp19CCEHi4",
  "key3": "5sJuYZ5xh9CBDraKEYHUEynt7QC5DAGGNsc39uizJoaHQqPoPrZXWmsCuQurfJfPkQ1zoL5mKWMKKyq1F6jrYzcm",
  "key4": "5kVzXUyMYo9HBu6EDtvRZrvX3jiMXKdJj8vrNeV6ZxqpT1TACL5i8x3JpD4sX8JGdo4vgBzvBHmaSoacNraddN4X",
  "key5": "5dVvgYCs44BDCuemBvAcDAm2ztYAdphcVZh3YPKnzMhRWYgxqFoy2E1bKh9bzYgrkfUoEqo8LnaYWQ1G8hviswTp",
  "key6": "BLCqDYQUJXsxvSZAAoTDJvQErPJw42jSjUTjjgi9YJwrDV2VKCsZsvFyRnbS3DyRg1tSkmWUQdfCWrmanA9KrTt",
  "key7": "xMsZBGeGEknYG2dyiR7PdX35gzxXTPeKwMi55ymrKhKyXP2rZ64GJ9ZBQa5pSJ6TNAhThztU1wpWh6xfoNSRKmN",
  "key8": "4WCmDd2cmEKXDhwfwRbPeqY7Yq9orhAutHbjqAnCEeHMG5d5UCM4TJ8GJotTKUGFP6wYNS4QNeah2LSLfoyM1qD7",
  "key9": "5VmTLUX68fGwDAezhuxKtLRwD4RCwyvkncWKhgQfAWbSyrcTygzx2cYLVp3PrkYeChNnxTbUKC7N4pXXvW9oFEwS",
  "key10": "227KXcmQnwh8iUom4VNeNayUEQwx42SMThEspFvQCjKv6GpN3r2mcKwe2a2WBexcJGFxGk83Noqg5CzUvjn2WKRP",
  "key11": "38rvDTmx9zWfmC9DeBW7L67WVy3cwokJngiR1SrKKn4g5bbyPC8qbg1cdnUnm25Fa2vDFYUNeMbSFggp48JKrtyk",
  "key12": "5pohkVXqGUnh9JM6rEUNRe9UqVmUN1moLq7uWVZNKWPoiFnpveVYgNuU5fdt8DwRzDfRPyKFQiqXYVMQJLwxvXNA",
  "key13": "3Czp1247oHYBFpK4UrnrgTkWZtpK9raXUtV8YPUJdy4FRjD5tTmBDdZhKusCP3VyRGsKNRseqt34rW5RBhYxn1SB",
  "key14": "3mCqeXKrzWAqRQ5kTDnTfJUVt4ZotqfvnnakExSffTTigrBuhM5nzb77sH36kcQHUgAqmMYZg6HE3rNNQg2vzs3w",
  "key15": "433o3wiQ9GUAb4V61cCkp5CtjDK8TGeeqf1hk9k7wX8724yyrLhzr4kRAfbyCJRL9mTE7zY9bSvTNrjP1B7XtZrm",
  "key16": "SYkarZEKp5rF2EB7EucPA3cadLZHDoH8o6JJ3C7fW9EX8d4H6mNPPycvqBPZ7mFcBrcKHZTAmCCXZ2KXhdBfUw5",
  "key17": "49wiu5dmMFd6Y38trSXnWoL8bChd9m59FhpZAFR7TKwPQW3zJZNFXeVGq28crRXf3Yonss8FKCjuJ9K3FtZV8jAG",
  "key18": "3zuuM1njaCXfi7UU75KknrVspYmbtoYV9hLBRr1jEDUxFC4rKEbDpwwZcUVEHdJrB7dCdw1MwSMhsNyRgL6Rzb26",
  "key19": "39zivXNYGJ8xexSnqBCz5prHnURVQ2BY8nKHGAJW17Wivw5ytHAf5DdNMRjmAFCxaUPZN2wXLSSLobKLHWFw2Q3R",
  "key20": "p3WXV33beaTAERhDqXcziz4pKaKcfhuV5gKvP8sqtA2pnYYKG4M8hBf5Xof8dMmdgjWKEvNfA9Z6MfG25wsQDVo",
  "key21": "2E55gHk6Hrm6n8p7qAbK2xhEZ9t1tBL5DJamHZXXKZ1HXiYdKrjDe43MgtSAooNGP1LfFXTxowHz1cc5SidmCSPn",
  "key22": "5htSpG63P2X2YADZgkgMv4WqNDdKz15VWUvGTrg8xA5YXYx8WNVByjeo9BQnG5ePJfzKZDahpxvv8bAumgjLy5Qk",
  "key23": "457bEv8VuKF2VysTi4XbEzerUA83eryTFyv1yB8gYyEMt5wffM5wEptkSNY5fLvLYqrmp5vUSqydqvAvqmR2XRGV",
  "key24": "A9XFZfzgSgWuXxyVdgWt4ADoY3tBt92FxqxcUgaM1NmQ5HJhzWSkpemfpCoBNn8y1iKpcqP87neHUju3ni1wNpL",
  "key25": "5AVvBdSMY7BqsEQZRkzUJAAtmfoKQToM2baiGr2Zg9rs6mdJ8rLU5wQDGqarFGgj1YCJm8wQXhVrBjye3Tc9wdq1",
  "key26": "33bKm9xi1PJH7eXt9TszjMBPAyPMyndvB6kLF8sAe5NrzDM2gPwkb717BSZSxmzFGCjZuEMFAUeDVwQx2T4jLCed",
  "key27": "5zGNzbEuADmKc5GzkXsGBwzVCRzJLhy4V9JfABG1iTyEaGB6kLjmk498Sd9q9HwV7tbWTjq5fdJmfKynwcHi8TmD",
  "key28": "5afkfY7zZGGLa2ijmQyyt4uKHcXAAw7L1rBA82rQqcFxkaU9bk1cfM5zTDhc9kYHQEE7vjXBd8L86KhmRi8niFsG",
  "key29": "5zmCr9NSuETV4uGM6JL8UECEXnbwVakfHxTwfZCxANeu6Yd4oCJkzsGZMEpcLqfhfQm5XabRYrB5BLMEZ7TdDyT7",
  "key30": "44HU6kCwjduHxpXnGLD2Xr2jbf5a4ai9WTiwWzrWLcTeReHgpKBsTG9qxaeKq5mY4Fs3zas78yqMHYQ9PCkCNuoj",
  "key31": "3VD5HpTF1U61A59hbDd1LAyTfL19w4kszqyWBHsNGtodpbUGrsrR924J8hE5kym6RwJUhpZtgEcN93JqWgN3SwkP",
  "key32": "z8H22oZuok7UEsV1HDEwgPLzxijrcB1VWj3hUXTKHYVBJbbwmkk1UXYFf6x4aaFxS1cuTnm7XBpYSVDdi4MRRas",
  "key33": "373rEcyrLTJar2oWRVL7fHjUXjtb3CZTqbFc2mrbMTu68dc3jKWCGubSAKoRhiWEYCczKf7DUmswD8ntVedyWmB3",
  "key34": "45erSH7g6s1pSBCAtJcn8d2XAs8QGHqVFfNyYFFKrvBHabpAUnj4dELSDtcrGedfqrKmigjZdH6rTpERDBQhU27k",
  "key35": "2Pn4cAjpa9mQuLLdD2tay8NytkKLabyHWqQk3Zz5oE4oK1GzTJxVKQwpoDT6R9xWUTkDiogcoZoTUoE8xDDS5kSj",
  "key36": "2vhQvfvGxKTCNnmquvBkggguTVxFw14bKrRzLwqjAaZ5yq8u557CzZtfj8vv9wzAi4FuRPS82i5yaFtj4r8KnEhH",
  "key37": "3LzEDx5K8BaLjTuLtPpGud2d8qNUxggULGtVnZamiZRUEd8k7R886v7xz1LXtU2ss242T8vonBxQG6GM8XKXBW62"
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
