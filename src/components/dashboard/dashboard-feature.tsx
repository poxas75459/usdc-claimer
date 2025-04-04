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
    "4KnRVuXJVstoHU1YuvjCc3zG4aEmQEVSnrSm2k6baybZbpW1ofQUUTAfSCNwJpkquUZ28KrmVSvv4QezMHSM3EyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39K3WVvHGdkwyB8V7i11tL19zdhytZCGKD8JCFVanJGrSFASM7TXLhpFAfsdU1Mvngmyy28T5ZQNyTyPZ28Zejdk",
  "key1": "2EaQFgLEm8RH3DyNj8Nbt2bvRrV4SBJLHbN7tWnxTQBzatSPprwiMaw6zqRwrPC36AgDodhrWEfPNDfyT6GNiqbG",
  "key2": "3Y16WCX3WXDWyJwMC77ruNW7i5VvrRVcssp24y5MACZbW1P4kojZR8dpVEWHYHSqpGGmffCsEhfkfPZVGvqFyddJ",
  "key3": "4SDUM9uJok78P49ME6TTKDYEUNnNJVuuwcKKo1APWzq1u8DVEwnADZFsxSKBK1p3E3wESvbdp93Fu4fTw3tapk3M",
  "key4": "4rd4YK1WMSDGpZ8dGcrp9u8A4hmnbGa43urGBZrMxQoDkXxL7Qeeh44Z7uYRKBvKuCG8ZLugtxkxSSkM1i53MDvc",
  "key5": "5URLfCSqM4nH5B1apkTSzCEBJVTEaLiAVLyYL3XCpAdH6H6MXRmri7KN7HLVBZhQgsD4DrwLftFr7MUiUwaMd4GG",
  "key6": "4hHaojANbgD6LJonTGL7yNDdQmsNxyHN28d6akpj5y3mk5odoMBDmDPYLpCEskHRySff4FgKCvpSsBUWwemCt91m",
  "key7": "4b89ghitbXHJujGGHtZHwLd63Hq4BEumQxhZPvb9UK5ADQx9TUs7ATsbbziZYhk2ABzv8vgc853sJqnhVnrMCMsU",
  "key8": "4Xna1Gb7v5SKGYs2YiBZ5mZBx5w9r86Bqx1Y2t7dvtkiPS8MqoHtfcUkjZ4zvVxi9f1h12knmY2GiVEqJMPV2bvL",
  "key9": "2nmkoiAUsfgnxgGnLHxg2gYUsqE5Wz1W1BskgEivR368cUCbhhuCkhSEK44ccgyi8hYgcWTYxjVcPemQcxESr5QB",
  "key10": "3y168GoPUXKYmv7tF6wjeih1fgN79QXGTEx2xRu78msR57qrAGx82cimVpxpu2Mw3r332Ba4A8dUQjLUHEmUBqiT",
  "key11": "2xLUWbUXvUjp9Q3PEZXWizMK7iV5EVGpQMxnpafYsdNpLS5zPT3YVvHnmy7PZjafryqZnjvXFwBBFhj7xg9dR9vs",
  "key12": "27WXEZrcdUzbbccur3SydUeLhRgXn2CZASiRWjNX7mtrmFxNvApb6gJySiKwdpWPkBFEvUDj8NgArghhpjTAUtq1",
  "key13": "2bTgXbftzdKvyGk4xHtbJohAu7gUKeeDTxTKPE6qWppwccQmk83FofPzqdfvxyek1YDumc7ovktaR58iDYsNQUSs",
  "key14": "4ZrHpy3fm3mnCSF3UJvYqTFPrAaR6978ReN3rAu8rWJDiZbJvi9SKstjVyCrf1gvaS6VX9X6hbcs9Ttr5QKyNmqS",
  "key15": "MAFmghApggfKAURjuj13yDwUpYfmCMSAQ6Hk2DChmiJiJVNJSkpBbvVTPZKkhihrYHN4nQbe7v6cSDyjtG1uwzm",
  "key16": "2C9Nkmh5LEp4ZXxDSUyDw14n2ZM9Bs1srSTu5G9r2dk7FX4sAsH99jPbhMCDWtyYieWFHyPTKkLgYZcGYf7ERRm1",
  "key17": "4gSnfjqLSM7V4CjVjuzVn8t9xMYiqYu4se3J1pKSBScqUPkUHTV4FDyzue6h5UzRYo3BdebfemzcchKzrinMxRMb",
  "key18": "2x9UysYNegKaY6kz9fzsB63hSHqmuoL7xUn6d4FPbU4uqcMnYrhrGjCw7FupUVpkxWe2RC7yqmbhJmhe7BTLZpMh",
  "key19": "2UYPEek92WcrPU8Qvh19k8mKEDVbHewELFFsKV179wVwdniT8CcBSPB5yzGPCgdAyQwQ1PszbALTwDoymjXghCpq",
  "key20": "3ZVxWLswi1XkjXAAZkce7xZe8p7kQBJNEcPhQAkKEumXzb7TE1RYQEdFFgwcXKBktppbsZXzHFbgHBxncef6jQPV",
  "key21": "2R6Ne5WjfzLknqijnmD9MrnLoy3zmVa7BZJy7oTXXGkam1UVNcvu7xsfPM1EnP5EU56LXABd2J1bRZrLLxivHmkm",
  "key22": "5wVyfH1FRdrsMNjm7kDju5vXmehNesXqaMX5firx3hnmYkMkZQKMMMWvq52GEGT4BtyWWgaRLdGSCngzBLxbVZEf",
  "key23": "23bANpGAhpNG3oV1rBeFQZvPxEuL1WA1WuWYHQH1sCr4PRkkBCRKMxVbGNBaCda1Tda4UWECHkN1Ss3SDQAbduMN",
  "key24": "3EvkH1M8YNnhMPVVwTRbm3WpEuDp2JyfSYSW2bPCxtPwNx9ZLs5zHQQGdVeujsRwjqku4Wo5SZBzHnsYHZ6pYQot",
  "key25": "49A3RZo9CkFwHpK4WJjx7yQ8BgdNJv322A1nAezXpHmntZb26vJVi7uhRijoZc7JzFoFNW7gvNXqjhJkfz3JQWBn",
  "key26": "31yYSzpstcXHUQWf2NZz91TWivPww2BYU5btQS1B6hYFck8yXD2hbSYKHMx9PVZ6QTtAhaN9sr3GFMifNBaQqTMB",
  "key27": "MAXYJnPy7GS53jzYzQVWSDp8vpJGvhkv8G9c1UErEsawCZwwnhAL9JGzAum2CCN8S1EXRKr3e4rdeePmtGD1aff",
  "key28": "2UCQjb3tev55okbDAURvHdxTbAQkseMhwcMcUXrmTynm11z48YZEUxkLvvPQTraPxZ2HVJdHnmFF7fdngbYTjFvX",
  "key29": "4Ci1wLmkztyKUJ5Q3fEQpvnATmxCTkTfzNJoSfCmMz4kMWLDSjAgyFvCLSoJnu8r2z5ST4bxpZYNVDp8DLZpCzJe",
  "key30": "3TetLk2Pb9wmQrMyWLGKk9puKMM3oicpiUihnbEh4oqjaMh5Uz6Gv2bq8DwfvVxs9cghHzGp3T3ysKPX8y7eUpzS"
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
