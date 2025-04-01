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
    "5EvybkzDh1pnvjzmZmzGN9KusEmkWc78zND33A18TC7PiCzNH4k9jsxEZkYx3K9hRXiUaNA3vUbDrwNoeD66trG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ve9XJxV7Ga46fCrNwa5J2KaiAVKw6tqrpB7Erhz5JnrYXtVfrPixqrT9tRmKSaLFHaJyQw24dfyFSJTj1TZcHzc",
  "key1": "3R6jYVocdZAMMB5ZYLQAYoSwSZsibgGcFY2UZ8UtJ5AQRyZALSJs6HXmz1rfS7WNjVQ9WQtnDvQDoFG2J5gB4kVM",
  "key2": "BWbnyNdtqV5N194uPmYBr5k2GyfyW5RMuHgnCSk4aCYQRSYLzaibqWEwzCa56Kr9RhjodHhxkekg5UbA8zLt1WH",
  "key3": "4ghYQuTepRyrzGDTAS383LybE8Wn2of3KjTEzNfY64Up7MRXRf7MfRjv5qvj27AzcZv2HF4AiVyd63vCU5cxF6hi",
  "key4": "3LGESUzUKcYg1wNr2KydhEMMjEXquRCJpm8w9W9tS7tUtYfdSimYUo8rjvogB5SfYNFWmY5ZPh6m5LHDdfpkJ37s",
  "key5": "d6wUd9CgfUTWSe6W8PftYypMM6h11WAuxLjn5DUJHhHqNytxuKEMdaKgXqt9zfjQHLUneQpAQr9xR4hYsbC5LJu",
  "key6": "5hkAGCp55am7ryQiqU1SVaxLjg6hYiVwjCbcickuFeZfY1Y6LC3DcMYNd5qbm6t8CteHRt45ZqUNaHE6TaRPYQym",
  "key7": "3teoXC4f3F1PuYJeugqgv7n7MLTCt2GUKkEQB2s25XBju8Ue8RaQQTT2BnM4ucdqRBgLjeXAaEe9cmP2FUuoWYED",
  "key8": "ruEYR2afo94aiybNpFscqz4rcip3Ryr4MJdxmS4jnKyeNH7Hvi7AKu32XBXGLmLZraGPC2D7A5Dz57UuoS9kX2g",
  "key9": "379919xDyPgEg6RJNpc4VFNaJkKiKYEzjGvns96hpcsq96xHiLmGpmaAYAeLcR7r434DTroPA5a2DbBuqkjapxKN",
  "key10": "acAZdJpSVZHEV2EnZMnYbE4ZF1QLP5KnwRwzb5Uri5NcPSxfDWy5CerFnuoHoyQ4uJxDe1YF3mmDPEaN3nfY3ro",
  "key11": "5HFeqqUSaFqreuC86JRdM9BUgbyYbgRVWgCycbnzckdP3MyXX53eFnhBv4svHTpG8Hy6XYbaTq4LGSFu59kWQvn7",
  "key12": "3DBoovJcgT7fWU7HwZo1wcpVEeL3jjyRLab6hUTDtaJPMo9L31uoXdwJ1Zr89XdgWkQyhSnupiNK3hjJyoMgAVfd",
  "key13": "5sWf2zhV1Wmrvo1otJqRNXBzkpWxgQuemvd5kmiRGnWdeazJs9dXhpX6hCEqQaZRx3VqZFLjgLL5YCzJMwUU7GFL",
  "key14": "29ZrTrMW6PQfpEnfqBAtnd32mpJAf4WCtRq925D1LQHqiX1PaLFvjJHKhtvGjo8ZPCGxkykALKxAGmVGDyLAtMLH",
  "key15": "2kJWxuJx4gPQN5zJZc7VGYM4nux7auB56eodAto1DEZuUY58raLEWCcWYasR4pJjpiTVdLEEz4Tfmo1Y9ePV2ncU",
  "key16": "X4XzSAHXDuFe5Sg2yGJFTkGU1sDvcvRvTEzSfUMGo28aGbHdJYNuRSZKisiJQGMsMk4wCw4uPdnvqL1uiaXuTft",
  "key17": "3Qu6qvR9THpST9CJ1FC8xvwLpbF3Dj9fK1d9eaJ8xy5WeJgXD78hsLuZds6F7SkdrA8X9bWzskAoAvH3xFzn1Yah",
  "key18": "2GcEJT2dEwUfkFhJ5YsY6oWnaki6bLzqierwZuBdN3AKxYdqBdrAmNRUkH2uWE8VTm3EzbvTVeFFMQfFet4KP6CZ",
  "key19": "46zmDfSRh6BRL8q7cK4opr6v5HntptHKa478sJABDfNACJg2inXFvbgRukNUYvS6ZM6oQXTGDGbK2GyLg1fxGmdF",
  "key20": "2t6PivikY7kiLUsNHFdPFSMz5Yi4q41Duzs9K4J2EimPHFzqj5DK6c7MmBF8BMRTinK4MnZNA4nX72EAQAFSh1io",
  "key21": "5B2LwzF1Tm5pwGtBfjuLuPwM6nAZowomUNRLAWgQPWNzuSNx393pbZaye86HtdeSQCR4cqw6U25yQx7nJKTNErBe",
  "key22": "27GVxgfuGE1YXcWbFhxUA6dy3SU8y6qvg36XAdr3BgqDgSBkUvxEQQjwjgCbQK8y9FUwPKvf26cn8aiaovt59KGf",
  "key23": "4kYEwfK8ph8mEhMZ6UCNFxuhx9GYihwjWSKaGuzivH8FEeC39CcifF1HoWVZP8qcgNEhFDxNZF5FBxAVjfQLniHR",
  "key24": "64E9eqwFfV9b4wgW5V18wU6zMaZSPSEQBasGKtHfpSjJ9rsUM56erYj2YJaCCbbfzDGbeq7hwuTAaDiR4NBqg5De",
  "key25": "5MS6kh8ujNAYGPv5qkFD2xcKMajbX8N6xdR2PF9Qqv1hFacwAsNLLMdQHappKnKnc2ogwymFdbpH7ZnFBcK1a3Fx",
  "key26": "3Vbv8RjvWycjKRgNCV2D26wfLWux4c33ySveB5nYXciMuYoZe3fkPDo1DXaHsJdtYEVs1vRJankGwZVzuNAy7WrQ",
  "key27": "nnRo24cTx3CUDYMPN8i3nBXaXgJy9P1rg33BGBGUSwhL2pouhwkdEPqsR1vzwiWjamgh97evCX4FWuwKwNepFrd",
  "key28": "2XZQt21Z8XP7Xa5isPhtZuuKTZZwJizaU5rfALkgfvnydKMVSKhkN1R2YmErZi98USR5rLnut2jP5MMqWLnFJBxo",
  "key29": "49p5wyBhMPZZsk3NzWYVzJjN1xRBBVWRgwEpGK7Sow8igyFEHXMpsubZFevpCjmYuE9nPLNUAaPRthtgarkRLmzx",
  "key30": "2E3DEuFRMVxwNsUQHSHNcW1yCeAmaxkvKTT8RLXsTymWTfXujA7h3bRWJMknYpvJ5tDzSsG25CpLx5s68EY3tw3w",
  "key31": "3VTTXSg8dw1kERRaUUNawS26Xp7e8WNpb5NixXPxHGRBgkPoF3f9Tyz3XfApLKcxzo7LnUc9WQUKAbyN2KN92eVU",
  "key32": "4ssxzp2xr4CL5zf5JjqEs6ws4kTNQ58avH14ujfqPP9akNTK9cR4zYfuXy9WivKNXTh5dDkq1BKbHjRJEttYXNq7",
  "key33": "2sEaHw5UfuzxHMDtWzwKJfK4RG3vnoWWwSAupm4Sw5vykJfVyTqf6bUYSqWqyNzhNqakxM48uMEingDpexw12aXv",
  "key34": "5T5efdmTW9dR2FX7ELzJZYriXPLWRnQx2Hj3S7iuN2eGC1dT6u9fvTXfL64oLcmLTQKyB995ZL55xDdut8C2qipa",
  "key35": "zmDHsaK4Y7Ppudp8NSYjV6s7TL6uQWLoHzqFnNfhScDEv1sKjxrTM8TRsZKhVMwFejH42KT7mKbmWGD4kVR574C",
  "key36": "5KNDu18F2YQjqDUF9KcuUpgQwBcfop64fAeZ2Q516mm5W2rsXxKTRS3fgi21s7qzHAejo52DTgRfCsDMPupyuYFG",
  "key37": "47tqAJ6PeSH32Pvy4zHNXVwjqLo2vHhvVQVR6kiGbBKnWw1yuwsLuKcBJcPDrp8zgA1k9ZBDbSYBRPC1NcG5qabh",
  "key38": "VaaJUp2jr983B9G4JQ4oRcT9F4M7LpudR79ZEVHif9rX5w4DasbL6K3DmbQcQzGazkbudLUukJNw3RP1C2P8Yh7",
  "key39": "5sMMQWcd4CwRSHTfHEw3H1tUL3NrPKjx7BCm8sjFaBJiZ6gDdFXLmoXsNt4eMxhTgW815uyS7V2kGTUY22oMsAfZ",
  "key40": "3xW1keoR5e1SKueMkK44LUp8oPDgsa7XsUJnNCtV9ay7CyY7yMQ5WSjquR4Uz9UF321TALLp5xQ4997EB5YDC2Wf",
  "key41": "37UqctgZzyGUHdRPVjej6UbpEi7Qa8b2MuPwQq7ErzZn6Y4ZeGKcpEVhdui5EA4xYrEXfpC929obafgEEwVudfoE",
  "key42": "238xRU4sXJe9uc4KfDLiEdsDWMCPC7wiMX7eyYLYcT9xDqLB9Wuzb5PFu5iqvgqP1dmYJYTWEY3bUFReZLuDpprq",
  "key43": "2BaJP9VXQgrRczNbNJpmtB3RhRy17UxCzaPaHC7Bsm2bLSXcuCHnZ2MNAoLp4zL2i5q4iP8533vJwUa7PoUcuR8N",
  "key44": "5eujjdofXePdAUT9iwCGWroX5MVmvq8M661YC2TDjJ2ujzUFNEHSZEC8fSyMYR3mTHS8nYo9gP1anEMkKyBzPfx6"
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
