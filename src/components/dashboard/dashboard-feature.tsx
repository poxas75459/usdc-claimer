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
    "zzgqLgy5GM78K73W81ZPfxippyhXvdMH8aubGZmQ5Facsgof5MwRgAHNWkPwzkFYeKVEjasLpLvstChbABDXxbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tAMBQE8rQp1WihTicqD8yB6Yvz8fNAFCdLwU7WmQmUCBSFNT447Mftdi5tK2Vd2Rs2mF426mbjBFQBnC2wrCR7r",
  "key1": "37nLTFaQwFfcS7zuAdFkiuSDXp6SAmCxnwcM5ZETwhBtRmTdVaFtQMVmfiYnFzWgrjh2so6BARXF4UXdnMx6XpH6",
  "key2": "KjmmNGouBfunXfcnaTMMmVDHL1jMFCM33YFTfywVQ3FQStmNCdRCeFZ5r4TJFWWtSN31FUuJF9uhRaukPR38Eo6",
  "key3": "5vRnUEhFtEpjsyNewJTzNizYi8SLamyVYfN7pzxbG9LpWFVnCPoDXf5QE645Qxf9m7RD5UVr3kKdvxtDV37DctbK",
  "key4": "5kQwbQUxWXSKbtap3S1VJ4DJnmxSH5MqZK9udeMafUZ9DCV27wkGz7MWRT14aSgGgXrcWWWmm9t4KPXuCVqecchy",
  "key5": "51EDaqTWwcME3dr9MB51ao547PD4p3nYNaYrfZqt7pW7jR1cNn4pVdWBmaBDdEQzPoEGkFxa97n45Cei8wGEbwqH",
  "key6": "311ZNngQaTPiw6UYma8ry2VWPKQ97YwdJ4j5RAZisKP2xGSrrBLHJ1L2hERDBqMoQRHxf8PhJnuwUqLUcawJBvWJ",
  "key7": "uCtBBC5GUNkk8auzysj52HAUGK7LciYx5vGkTVBQYBQnjEfqMNxLAJ3pD3nUavGnKF3gPbqiomwK3WJFtVv7ENk",
  "key8": "3mADcto3FeWF58cuURw3YQf7ggETHj3URTmt5AALAtVBkaCoiCjQduv187MT7gU37mTmPXY65hUgkxP82TjKCeia",
  "key9": "4K2xzUENxf9VzM1XP2kU7SRRsVSjofa25a1jFSdUMjbwgJgGWwkHTMXuFHgfEEVsYuifdp45ddAp924wn9zwaaqx",
  "key10": "2LYXKJeHX9KPqCrTj76Zs2RfVENeBCHRs8gHqSgwNiuvty4BgRtcbCzG7xr9kNTGr9vcpyMJpWaGCf6ty91KfeRE",
  "key11": "GeL7tGpuUdez96e5HPGCngdFEKRRxVRp9pgba4BVjUvuUq4MRPMrfyrLNfikcQm2DeTn55QTuCX1fCiTTQHKCq2",
  "key12": "4DzX9Ep355AjTWZvsnYQhFUBuQVS6dqn54mXXcnm4rrxkFpRjD7eeFcDsNXBUezjGnTUGMFbL8NvnLjxUakNRsJb",
  "key13": "vaUyN1JGWTk6ctHJZ42h1zKZjPpbJ1z8CU88L8is5mpndm6awqnqjHfy1zcrjHZeKgjqAVTKwxzyegtL8reEZNE",
  "key14": "4Tyup2hnF16VxHz1K6FDLptuxXUnuV7e8xeNosLhFgima3iThVLkpV681GLfa7gydGRfg8gtUc2t7vs8mJcpnr79",
  "key15": "2ZyxhNT3RvvvPdaThevFFgA2YRnzqVzreirE58Jm3sXbZCpSjoBmSjbXkji7S6DJGt6gcQP6CvKBeUxtFQaGFBNC",
  "key16": "xr1SUKpuYw5GaKUfpuUBdxsA6jEJp9wgGNmqctq3cDD6dAYjAh3ZeotfEZL7AeHv9r7i2CNmTniWa7FhDaEzqpL",
  "key17": "vm4VmWnpdviFRTFYSEZoYgn29xZoXPsYR6redXoywVVKakbiwFEvxYHWgcUuBAPz4rNk9zJi6xStfAKG2jHx2T6",
  "key18": "ofttvu5RpysUAaS4CQfPEr3LgU6JFp7rMkBxvE5FEjywreGNZvkZ8qfuSTowKfS2eP2tzv7opE9qwY7pDk74aBs",
  "key19": "2yfzqP8X5ix8542cd231xx3KeuTWEnbaFd9XkBmJtNwGPvg6L8DhgKbfDY7XNpedQmiDjGkHE6XHSrXZjZGzdg4i",
  "key20": "54YA3eCjCYs6VwreWxGKThhSCTEU4yhy5JYUVpCPukmNaMkfN992ohrJrLGjPzmqP3obcek7PW8ZDbqHCAcK1cpd",
  "key21": "4KkeREh4JR2dyT2RibPeGPjQ8hanysna46d95vquQZmanYEiCNdjVhXxLQF7fQjh4N86jeZYNfy3FnCd2CbMAR77",
  "key22": "5ortjVUP2D5jJnRiHSQXUKpzt3zwQchCwKmmjvJTfsK4CANRWBCGbeqjC5U1bTA8bSJBHvBdKd8eTVKHHPRqaEgW",
  "key23": "3fr5f12ukeXEUXRWQF4oeQhhVAzgbwu8JGGeBYCKfPn5T9om23EJLanTw1d8cysn22KMjdrJuUgLnmEAhWfR9HLp",
  "key24": "3MvHkEeSWK3MCipaa9LT6ovXurUMpp3KjoaJUK71obHt6oYndkMh27MNYcxmex6W6DcJmCDh8LjMnwJCiTZaBSTH",
  "key25": "4cbJ9xNGUzFi2sG1VoKRzoaJeuHikyXAC5PBRPikZpZwcwGZ6FYKbmNvmSQsY3BAkVdmksZ2UoyZFcCnbwgx8Njg",
  "key26": "8oqCEbAsYopnDKM7L4E1Jgg9ojLPFAW3eQeqkZd733m1788XUWhv9RpXYc53dvyLnsJsGHoqD1hGWVuqJsgXbdg",
  "key27": "3UQxSkJhPi9NCbxMD6bP99TU4LvWg9zcnSKaNRbGztuoywXr8nmmrh2KVYghnDkByQ8nGtiiTEpAmWYXe2BMLaGp",
  "key28": "QbHxonafn3DpgDKxRybr7verxDBTAyQmHLqnsSq4ouvkCF8UPgjNp6bBxwjo9xHA9Lhj6TeAtpqyKR7r6XTSdu8",
  "key29": "4eN7eMX1yXpP1RCiFM1o8pgUcAxpttictTvpTDxRA99wh9X21wZpQUrQLQGk7vwr2J6ePWwDSfyquWsZTrBeuvWR",
  "key30": "v2cfiM5buoMTEypEocJY6vTVudU3HexjboWdGsxx3rW8mMoTGjJuhWYMWijN1xpP7qXVpjNFjiMEUFLxoWk9A6M",
  "key31": "3n6vNibu66Lfu6v5FdZ4uG5yk3EWzaRvWJn6znBkG42pMTuDCRtvk7vs941QCftdLZwU23j66rk1qns5jESGf3mL",
  "key32": "2oTWWn2WsuRTCYWojETTHdZWPV16fGyo4LkHrbdWss1vavHKpKB2BQ7UTP7PVucqDs92eBuc2CqyA6BXunsLYEGa"
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
