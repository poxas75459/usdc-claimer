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
    "5168FGgQWUE989AxAtv8fYHA6B1dfGa2JBiHLrxrVb8zsP42HJAfyoF7TFFHNQPArDnorZQW6zMF4gN3iNQDGh8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t1752xUGY1U6JaLE1tpwxcLwci8gGGvst1QyLGeN8TAUoGK3Qh4czhD3aUEbh7fLXdA7WWGQ8G9Xcy6t3BeRiUw",
  "key1": "4vT3dwbBAS5RGV1QkzPPT47JScJvH8tUAVS1H7X6Rs2oAXnsC4p5L4X72eBZwAnaS2AgiuoxS5B3yR7w3ZyqyZBa",
  "key2": "b4ywvZujgDjdEqC5zqT5ytXkA91jDRxnJYy8uhcjH7RQyb6kt9nnSzKpPJGbySe3sftKuXLyFTTdx2YjQ1mHrXc",
  "key3": "Gxb6UiQkbiou9Qsp4Fnfh1CqcwduAgSmAmkD2rUqDr7zGtP4ezD83vKohwZcHLDFV2w86zQzLETiYdnV9oC2RvW",
  "key4": "5ascYBEj66QinpM65wedNcRZKCiPZfmQFswsRm5gzoJDHdXmqgdGqdxjDhfD2dfswrSt9GivFbLsJAUnFRrfUqQd",
  "key5": "3mR58c22hvXFuwhNhw3S7gCT6daAhxsnguQuYt5GcfVagd7Tk9FoFcer8rH4rbLdLAjVSpc2TnnLkDjJGoHToXmU",
  "key6": "2HSwCkx3rBiRyJEjEqrU45qwadqii4n9zAj16mSJx6Vo6ePYmb55JcfJwuMxbSymJkfuKuaMdqQr8Aatu5WQAHcY",
  "key7": "4LfDr72EPXuiwHwF2NQdi6dWWpCwX7z7jMCFLo3hxSiqBzyxiUCzBdwxp8aMg3MEwoQtU7dmCBYHedFzFETufge1",
  "key8": "aTjRozVvkjebyhbBADmCea2FHEmVyZyZGTPVusUFWcbaWii8Ddu6QRV9ELjjymzzy4i3BdLm1sv1PwFFd45YcNJ",
  "key9": "5zNPxemKyPDvbJwKiV6zYsx1Gt55vxDRBpyQAfNwAjS9LzYkRBmzG31k8b53bSNiASryof56omeiBGHBoVswZ9Z6",
  "key10": "4MZyfaA9adPpdLufu2aLX9zbWhS76GAnDwbVyWMdSzbHsZy8z6HLoHA5GLgqmrTPCuxA1jXR8r42mR5vD4zXMoXu",
  "key11": "5KudQBfR3zJ8sYvPNFvhDFpAjCE1UtMFAFkNfVVim817MKy5R251LyByDozGrfGjENGbKwuf8cxY2tqkPbgkFxas",
  "key12": "43KLmSei1NcHmUbq2BF4pszoP5Eh6BENsxtCFQYentC5NNZPZJ93z2TgfzkFTs9rGK1TfLHD4GpvbnFtpnVEz79T",
  "key13": "MoDietGVM1WUavMdULGr8VZPipy7jyEST8Hw8TechrQxvPhkqcRjLZv7iXyX3R2jEL86z8Y2cASLMWAupHNVEby",
  "key14": "PjGG55xQgDTXuRSjsCvjVFUek7umr874qzR8ur6JigfTVT3CYhKLHWGKfMkxpjWxQPNZAunVyHVjKN2ujrp3PCU",
  "key15": "4swuuKgJNq5zAPhTkgEe2SPL2oh6pTj7Wd7LykkwGZGVvBV3X7cwSMDUzZzYejB9w8XJyNJQcnyB8rihiFo9PcJF",
  "key16": "kgi7o7LQTLWvVmwgDHauZrjjzRChQc9UcaU5zxFeRHYJvSzXZ1ygYz5LhdzMsRTN2hTd1AMVomEpMtBzizz6EL9",
  "key17": "4fxPvkCaB6vYDsguUyFB77mt53pWzKDngoJ8gfxwmPpqKRkCsp1XyASRS7v7AiKNcvkP33Bf6s3h5Kq1V4zWmDLY",
  "key18": "5ydro1UqHiiNiuAefZBhVHAq21rrMDV8o5FKiNBHF96Y6pN8rswrxD5UtyK5PKLNPcsdW6KMoV5CwH4e5G21Gbh8",
  "key19": "PQQ5GKrb57CYMB57wkWBkBkuL2troEkWNBLknWJmtSPeDBnScdY6xLjGgBPiCz2g6joRZwXsqkM8M4pP1fjNc2t",
  "key20": "3HbmFRvcWGWtH4LvVuj9dWfwHA4vSZMUneEH9yCVgTnTaPWCXwpm2GDisp4pZVLCH2iLPYpnXMU3bhVS1rxsWYB2",
  "key21": "37UNzURatXsFDXaHdHRFbUTdpUtdaS8LBPUVzCoFEqxVYBeQik2rMmH1c4DzWfAztpunhd46ETK4K6KgN56vZhWS",
  "key22": "3oxdAW1boNtmtHxGxNRJ7SKC3xnUFcbm69Tj4mC25yJMxdL5XY6EKErDzCtBtHmLn3WrkmdVXhaa5PZoMvPgrwis",
  "key23": "2AcXmsiJwLgjyH7ihnavPbypoi3wZ9Nrw9jpF6AMJAY3RdKDkTAxPz3fd2LgmRPV6YYSY3eu5Mu9c6mvB7uKbdpp",
  "key24": "3R3Pfde8utKrgyUq28RMhs7TZJkMLGJV7jqKQuSvMAaSAeGA6uKSYZiTUz5kb2PvWPLmfJsmEPjtu8ZXuWEnpMMx",
  "key25": "3veAjrMsLnfficoQw7d6aDHgBPRB5MeQY33UhUpbU4bPZcqKtQdD88RzJjBkdySGvyJESbvdEjLEGf3FbCbWeiyp",
  "key26": "43kfUVNV5NzTKGfMwXteb6YQXNfXHoosTnL6cHqHxJ8tw9ZRsBN8sJp77gyy2zn8in26hctaWzi9wUpWPeJSPL88",
  "key27": "2HvFbfaunDaFMM6aBcmiXFps7mzNNF8M4Sh7nvBvuuYJgYKymEi9Y5fsNeGd4CAwfkL9VbGsgfJ1tWEfyftpMS9y",
  "key28": "2y4KmQjQBcd8cXZeZRWQXQFZep4AzWpuDCTnhswSL885od97xUHHAPpjJaCU8FTPp4PphSXipW4ePq7FERMyQa7h",
  "key29": "ExmtMsbhKSqRU3QjarBvuWZv673asYrTQdkDaLBpKJUFgPRh9tR43bV3p7LJdvwweaVw7tZAhriAJmRifEHrjhe",
  "key30": "4EzXR9SwpHYfHm9bi8RY172judYsuNXVrw5YXWoxKK9Q9bntoqGwT2MwLBqQxAp24YjJ4XRWajCQw23ZsCXNiizm",
  "key31": "8j8vJvSFwz3eVsFyiLodWHMkjfWVHKznhis4gh5KH6BGn2rk6AeN6UhZV4WJv5t3DXW7ePkWq8PB8YaY5NaHm16",
  "key32": "v5s6AFdXB8iggswMPryTuaxC14YEXHJfNDgzKhsD9pWYfKsxhvaqH7uxEwe4XNZHYaSHENyRFKu9gVdwUir6hDn",
  "key33": "3jFy69DcS1hzQdtE9iGjNQrCSEDGaviujJwiMphAcUbS1gGZ721AQbhvoCkEGJHs2zQvCXLZMtv2aD3viZ5MWaWp",
  "key34": "AyQyVYnZH8y1vEgp45rjfvqXTqyekM7ZqnMFd3Jq9VkHkji7BHXFhXbTpKTx84U6pEEXMUFb9ZwkXT3gkhn3dAV",
  "key35": "CXT4getEbNApgjs3eV2MsFFpzwYfM1FZ9HFUkeb7eamqoLb8hceqokc4uGAR2yEKYZQyWZ286ezxue9vHpL7r7B",
  "key36": "1rWnW9vWmurBQphTps3Sp94fCbbbBSAgGxLLncenV31bS9u6T5CVc7s5YxKKRMEcdKuLumqamC6G2AJ117cpbYJ",
  "key37": "2QGSHETK9WUQcchXJjHT4Sx11coj7VvtMsGZSGzJEy5LtatzW6nL1b8S5Eo229ScMnodv6EVP7k1pW22PFp54y7S",
  "key38": "5KMYijLuEmrRAve5pn1fW8QkzqMzEFQAY8rabGHcF1SSg8vwfwPtwnifcLZfzZrJYcYSwMNKbDsrtH2cmwQFcRL5",
  "key39": "2yusHVAWeqvhGXYoNCpJrchaVCJY27oMuAz6pN8iWa4QkZPJPBPDKzcdgeFezuabrZDtsKoXHZzhBMRYTre3gUGR",
  "key40": "63TSdynqTwLf9dehucBBkCx7zTCAJLuZP2xbdNsuTFdJgSaVJAevPG4NRRAnu9KYy1v1UEGxMScnt6o9DidNJKvH",
  "key41": "HotLuXqvcFzpfP21Au5Qyuv6eacoDhhJcXHDhJ1Ncmqzzw6BwnFV4CCpJfynoWqYixvsH2PsxB2dLYEuHCTCFrL",
  "key42": "3HxqqD8kjmxMhqXhPynsQHCxC8hay9Rsn7tWM235459UWBRPgE3vSPpYXzA9Dgax3GRHAeNoNSCV4rb9VsTQ7Fov",
  "key43": "aECvFfNu9m54epRaiShPe4Qdd7CH7d3Ufk7yjqUeYQxGE1beecd7evPYVmJzy4KiTB2giwNWLQpLxTSLFuqQPmw",
  "key44": "3kdGmrqXF1F8WWmUGZLPpP3DjB1yHy9vA5LNzrvzyF8uJscKGjvhhhsZ7DMAPCjKeBwGHDVCCKDjuFYvSVFg7G1M",
  "key45": "3VLhgSRToCT47zDabNt53AyJ5BH5vWh2ywtwmzmjCmY9MBcNAL5pozPD5hqvcAPpiYGuFDBKjAXKJdEw3bk6V94b",
  "key46": "2qRwKJ5TwSv22wSDnvxXPpQ6nvtacKJb67c1piRsVzSkY6jfjp5ZaMwJzYSH5BN6EKVWKGq1KGwTTBCrpqXE893J"
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
