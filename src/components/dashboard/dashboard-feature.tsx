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
    "5XK5LEMhuuZNQm31NuqMcvUSsFxHh53S8jMs9bTyCyEG9Rzyo57eGMpBSTVc2LMdQQ5c1ZoajTDgrqtHMxmtn7TX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3YD1gnLcqWdtrYTqY4YkcZoMYucyaxkLRyGiEimMgBCcxzACFjCyD3PumVzcB8RiqJBXWDWkfzHwDrFRTxy1qf",
  "key1": "3VegGTbW2cwZjPbSFdxqZpDyQD6yEopXXgMSNjUawQxCs7bquPsCPVr3SgibuRYeXvJfnmXjziuo6N56EgNQ6Het",
  "key2": "2gxCqX8BktbXzmgQim36b5hjxhHpmrvuB5nsXVsQNtFreNYpejkbmXc9ZV6cB6sDHR46Ldp9Fx6bD3Zokw7dJPiT",
  "key3": "26zS33mzvj9dyEMoAdHNQsXtNxioZ9AFbUzy9W3Are3PEmDAfUTQV15weCaXR8ruhUMCxkQgQnR885kvZPDWvURc",
  "key4": "32suAuGuL2UUPA3kcqEjreDAZWmNCLejXpUYSD3KgUQByDpByQ6zgvzSn19tHDiRGocsxF4J2uymRFwmZk3yygWZ",
  "key5": "2W9rQz6Ydgkqeviuc3nuhebxWj9YdakDMBhdmRbamYjhWrVqZiSXCU5TRoXp2HGDLcSAN9PaAfSXCjJpnguvQ5Fs",
  "key6": "SdAimE4id63LYAuc7Tv7oGxvPhXGLi5PqLRSzDV5tD2RqXgyRNPtJx6piHFLhNDgYunhicnpjgbWnV6UZkB5t9t",
  "key7": "dfxbAQZ34cFmmV77fJad58hXyNQ6QgH7GifnD4i1xWniKSM4RH8WrvMcPZtJaMTn5fLHJHB54UYjEqm6HUv9sWg",
  "key8": "2ZkUL5TAAuWx6ZRC91z2hCtdGRGzixcKjMiPwXRrgKxx74DfYG8q3CFxmqUYrDq2hbEp6HFeDQnNHXUjy1cJvpDd",
  "key9": "rGGTYcxPhpiF1hhtmbBhaGWn7W1QwD6WsG5dPPn7HvTkRbCmV3jfW464RjnwcDqbC22a1xAGXgzWKdeJoHkQqrm",
  "key10": "2DS4ndtF9GUk2nbRLkowXxoWZdYpCrgw4ozqdLCtci3pRRyUbrgVGGpnNjiYD8Qpatw15Zhmk7SnPNdZAzL6GrCc",
  "key11": "5X5PPLCDQq7MynSYKAdrnHnmwG1w6FGEBW3XAqbk5mT7nJQR2vQw3vp4PmHLaAkgz9UVs8EYJuP5rDCPvyYg28bK",
  "key12": "2zuUiC5wJ2cjEhwHAHiCXLgCsSna9MXQJX19zTeWP2Yc6jdMuKwEfHc3ygUyDdnfBC5TiDa7ZZbGNBxk3XSc1eBC",
  "key13": "Qm32QRH64pCdLTRvmeBvsm2nS1qyxKg2zFFF2dFAfgZtqHSo57qW8pmjpz8LvD3NUNNFMxzShnDNEDh4UnyxNFB",
  "key14": "4AZexTMxoknWYQKJraxFGcfFRShtmfMZT6oFeyN3k4SsPYU1ZZj1VsDBrHiEkzasdX5us45q3tRjW5ZhTQqiX3bt",
  "key15": "3hGLgzq1daB3s71dsqkK6AxD8VNpdJpQxA33z68WbNQiZx3sXPgupMcTXSUdZR6h5w2XN9VHUZeR3ruzt2AicF3A",
  "key16": "3xJ6paEEEinHLmEjWEHFJkZTqywjMijeHujy4AAoKvXN4ydyqvyVGqvxHFUwNZRHpWQikt6JjmpVsU8XmNzn51Yb",
  "key17": "4qu11N2yjZfdPn2t8vB5oqFqfPgMWHM1cMbBavYfuhBinHLGyCgNE4L6iu9mi5wYDp2GPk8z6sGuBfS31Uo5PKKq",
  "key18": "5j4zUfP7tCiaAQuXqD51d6vwbsYNMjgBge8j1iD2CcfmLEHkKKYvjhEJbGZWNKpDHtr4TnuGMCqKQDTXcQbAmgKW",
  "key19": "61GwyTuadWh5eT9EzYzd9LDmNTcKk5YqD7uKdia3aoSFS9WU7vKM7eutCsjL8Wy8zetedEfDMAHR3fxBQcHCcf2e",
  "key20": "2fr26qHmRYAYaUdzEdEVu8iy5QU9PgTi2CvGfHHP24nYrV9BXymdg4nE1vnnLXrj1uVNb8WTY5rQp5XPjrHD2exB",
  "key21": "5aRUYRcCAjhAhmfBJnBbFVGtGfYqzNnHRarNWZ1LGmrhkxY9h5Z7wcPU5JXPwpHkoXFT98d9eREGwLiS64ysdtsv",
  "key22": "yhsByxVzMbFzsqnMMV3Xe7czxvt8LabKmbFVBoYXXd1KHfuEJQdZWYzv6UQz1BJwsVjbDyoZK77tVhZ33RotSkU",
  "key23": "p9WcAGuX5i9SvLDiw7VqCA4eXZvpoXJQgoPpLHTYzpMjWvCVjg7R2EhnBciv8qW3ZnapdPxxPR8yXw2kHmh1LN9",
  "key24": "5jjLbcy7xxA2yEbV9xPoqQBbXW4QS1Yfp67ASwy2za1HvsVrP7JSQZCW12xvjVwD3xXU9GKpxxYYjB73xcnhAZ4a",
  "key25": "2TfSnHVTtzCWnWm26St22QxCXaWmfJqJfHF1QgsycCQkhBX3FDr8HFd854PWm82761nMNMnBByonQ7XFmwJPMCSN",
  "key26": "23mvY7EUdQ57WaJ7TPtb2Qosc3X68B9UGCrsHa4fjAMTH3z9JcLd7ZYjup463EvTE9y1z5ZH9KvkFffYBxCGT5KG",
  "key27": "2sq9XizMATgyUJxyBxPZ5y1xKDuP5e1DpVVGKCnr1WsBwEuRdCo6Exp6Hjek5Ad7NA1cHuVJN1JthAgMMx5i9VgZ",
  "key28": "5RpWLFMd1mM6xvYSbJBzS2AWqfv3Hf6ENwPKzvZULRaMW5BzrhcVfXXtqpM9xFDZZ8cT2oBRQvJyKVDLpK8efLG7",
  "key29": "fqPe7bBzu1xffNp8ZuGrWuWaqNRvQbZEVuF6gWE9NT26icPjQD2QUuafwDgB3WjrE2vkXvPtF5u2UnVWTtYBk6v",
  "key30": "4zVit3pCUpDjzkPLFRhCkLWU9Jt9KQ4zVvAfcbbtwsfm4dqDPDVy2gxyBLXS4gaYrmAhDrypnG94TEEikmxwUvTy",
  "key31": "5M1GYqJJfE66MdkY42Kb7XxNU25EN9wKrZog1HQfAip4vrNabyCibM2NMKfi2Eif4jPFxqCxU7rmjKNymoAeo5d5",
  "key32": "2LC1jxQQhFurTkKeVrLHMPvfXCqUcNCLw2EQPX1e2bKeuLBjhHYPZB4mesqU6tkYS4ntxk9V83pnWFRakic6t93j",
  "key33": "258jwi4eSZbbDBHKkqnmdD1Lw3tQpaRRuDN1rFBbC8R52ovHHgFYNBNCES2r3DYjHxeHc3BpT95Z9e7F36dmSh5D",
  "key34": "fV7ANv5qiPfmKypxLNntD1BiJqUZjxZRfnifqb9aU2VUvwn63M6nVN3q82LbmdhefRrndLTGkf3FrTi7Hs2vcFd",
  "key35": "WaB8KGt7a1BnWLdohC6RVCnovBNfvBJJLfd7qXYbCSVnYiqboisR5sNsZdND1r2JTkXjjXgJzKEC45DF1NSMKuK",
  "key36": "56Leo1pV5U4ZZFzXS2UG1WArJrNvc1D16v5eUsUGiK4VSkcNxWDD7xA7FygwoWMLC9qi5fxBoC8fKnH2kzz63mT8",
  "key37": "LrHAeZVaCMuEwm9MtjUYK7DZHXn8KhbN7won2SHLVgvmsXvmnoYy53XakcjH3gZymRfKuSuf2HpfnkeS15AunYm",
  "key38": "38fqn1kcSPcHu3noNFEB7gx3jZMXPfu2fo4uSS4pbZv7Uerc8RtencWLMpCC73HrEdU5HnbSqFeYi648kiMM4eGd",
  "key39": "528kEDtqPKQG1V4BwSLhunQN5CEq7ByfGiWkb3CqQgev5WaSuLH4kvMZgKMYA25CBHXXKU5finGj4FfHKMERQjqR",
  "key40": "4YpCdsGPkd8gbqvP1AszTKNqZQmeHPd3Pb8g8hkspzxE5GT8cpGRkuUfpsnNaP1MJTivGDcWXnRtyTrk58APZD24",
  "key41": "Pza9yDB9YrLmoGeqLdDBPuTZH6m8KfgHtLkrEGEwCRp3sFkgzNZMz6UU9hTBfLhL3BrisPJUtV6nWNjTgP8oLaw",
  "key42": "42M5eGTpFR4gJBUAaPFx1L6T3Wcix64Mqk7BZsmRTMbi9cdEJx5yVDAdp4jchzB6aoujveHYYUGGS1GcNMbm34bW",
  "key43": "5DWbYSd7tzqpUryauQDAbJaJFh5n5zntfkoXgbYeVYPYD6W2cdMz5g8WsbCCtv5Fwdu8LqQDthR9jV9b8x5eESAW"
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
