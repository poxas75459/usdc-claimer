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
    "3nCvEZ1gdzvkgLk2WxYQiN1cdyWT3DRFqXZahjNzCZAGSuyDLMsrRiSzLMuFcK6ZuDCUGY9PJ7Bs7bsMHaqKbWh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1JfSABR3bADHF5FNHtNvfJ5uHUuuF8yBupHpXcrkVotu33A5zZ1aDdroY5yEZPvKWKQiSwsoTs9WNLtbdME7xZ",
  "key1": "4PCtckJHPsu1S6xXQUB8hhwAimKRta4gmCj7fYNiqwU7TdSjQzpM5ZegXNr52NLQWPn3SXHg43cTp6w7Qa1P3CUQ",
  "key2": "afciLAYtSXLktWTjo1jyrCLLfiuw3F3oV7E9YemktLFqABJqjfXzfa5P6qnbA5QsAPvyYN6yEVNhqm2Kf1Yhib4",
  "key3": "5ksPB2xEv14TgyTFnPoD4XGFtGPtEFcDwchcVRJqyzBtYbrgHVwpnwWdmXdBMbFyz1QEscLVxThbCbw4PmFmwz7i",
  "key4": "2gRKNrobG9gChrsYSDWfaygZNqj4yi45odpA7ZMfWV5vyDrKyekfxY7u54Y7sUTyCPauz826LSwf9XGWWjMR9pix",
  "key5": "5keARAgDtgmX67KUVixhqiMAnQgnAsLGrFwP8xjxsLMP8AFMS98hn5xJKxYATuHGEbPRvxrqeJ3tYbefYkNADG9D",
  "key6": "27Rm1uuCnWhUrAaqVPHeFw9PBXQL7nro7rfVZ4GYyf3jAB31sw1zU4nwb3QVuGCNwe1x4w1Q1C3E9TjC6crtDzE1",
  "key7": "5LdW16u3J4pTPBtTcXPbaafcjM4GJnn9npMhX7cdfnoNAZVWGo2LjnZ3QKgJfZF8w3V3UiXeyjN3JU77p9GVGMTM",
  "key8": "2WLvvYF5zEA7RDXsonsCfggJT7bJvMDDaKzusuLhoSfo11p3zTnua8DwgKacTmcZicFNkxod3zA3bkctm17fdiAE",
  "key9": "3UK5v3y81UND4HUBgg6pin8tzPomPsCgxkCERExxoopruf1Cd83Lf6ULW2hBFYYzHphveHsn9XfjxpTBVcGzASfx",
  "key10": "GHEWBFDjXighEsv6d9kCMKVgwoXkVjBdFSuXzxv6HQ3VwaW1XiAnm5nC6U9cgUDf7XdVYfpXo8KY8KrJCMxykLU",
  "key11": "5rx3ERjtqQTtwWdb3GiHZ7KWPyUiUnvzie2nu4spsSVbbYxiMjzDw979SMhLRFYPTWkDro9XNF5iCfvq7qxWFhCA",
  "key12": "3LA596j75ZSJ4maEsmbWUd2CnYdXFsoYbQTL9azhKu34mJbCsBvNxXma8gqyyQLYWu4UB5nn7WxrWaSKLBZmRfdy",
  "key13": "QZBjS2DbgNqEX85BQGj6dbcXfYf6L1dg1KAEE9YJeDVDiou9mZ3WhG1TPQuHo8dHGNZTuY1Z9fnU7Au34ieGwNb",
  "key14": "46A3tuMoyGA3Bh3n3UhuovjpWkj2iv73ZQoWYQSDSmA7Ggr8SQ85Xfs15285J8wHWGHTmYnaPAz63JGZcbRgKiSQ",
  "key15": "3ymLrgpJ8AkYcNCo4rspsjojZGKHCiAyyzTQ5qNpbKbUGZSgB3YYNHher7fUAHPK2RmzsCd3Qxw7VEwhi4iyhhG8",
  "key16": "3ztRjtt1RMbgqEJN8xVqWaPZpXwYMXznurorEryMNrqCmYg8Spp4mMMqYcSB3WUaYdvsTVpzT3Re3kLL858jS2Wz",
  "key17": "2MQPkdbHVAGb6u1VNs4hTtJySHuinbqLLtE5Eh4v6o6mZxCQKrpGAfk17cxh9KEN1cdQggFUdqHGwCzNcx5YP4Qn",
  "key18": "RJqSvjpRZDHJbuRDFM7kcExY2ioEEoTbG3TBeoqhT3gkVmeTtdQZ7hufdWAM5eFDv5TByxjsBoHTKG3VjKkAWHg",
  "key19": "uo2APyE9yz7WAWkFgKjcGqttSJmpyoCNKF5S6iyyT1zFHpAXiMyVvHZ19hos673KPhJBgF2dis4T496Eba2BzzF",
  "key20": "3dCzDAS8gShmjaHrcVAZBMFczAdRFp2q6f8oKD8VKbdU6jp42LaHNXeMdEUSpXU9aBkgujkbQf3VPzWEdqTZXYT9",
  "key21": "2v9wQ5kNRMhXmSNwQEng1ZegHoQa13834Bkm4K6SSdwPMZQbby7GqVgywLzSGBtLC3qmEG6SynitJfU4ueMy5jMb",
  "key22": "5rAsCexytTz6HLCxkXNr183Ra4EakdiaEJ77zWd3EcZmdQBbj9xEGyqBxBY1vd3RDa68szQo3euDQZYG7HGY9eoK",
  "key23": "4XB1QRRNZaNQmyY58Y6frbaxsR1RaCkPALddE3TAZmyW9x7gU6rn5TRKXQfpymT2ujtQQMVQkWFpUGuFX9PrLxGm",
  "key24": "4JxkAia1unJH53RwVS9ZkXXf3hB1RGXWYv49Y4jGCHrVKCSU1Ugf3GPrn1mGJqPxH8hr7SNvZQgV9Kyf78NCnNou",
  "key25": "4vCrmE72LCJTtBYqMFhZ83sqff26UbPYoefERy87adnU2yZY8ZaBgGWtASPM34cscU2xiYJs7frcCNEvfvBXpEXM",
  "key26": "21SbncRb1SATjVcwjJS4sdhrLiEeTin4hckZqSASYxpGu7ePDANiJ5hzQFCq4hFgYa8K52pPg3Fj5x84NPrsWXWe",
  "key27": "42f4zaW4mgESixvH7ohDi6Ms22ZbhcDRmmd8n1NYj3z1ogFqC5DG1mTuYQU2fq2x2xULjETMfAzqVy4D71Cm4B7c",
  "key28": "5yGVhoC6TY4XoSuiXXmCSQe66ZhaUvvhWQdvX1j7b1MSXGBF5KkfND6WN8XZTomSfqj7iKn4fa7tb8FiyJBRTsha",
  "key29": "vWoiqR3x63qeYmCHftod9S6p96KLmZrMjaW9VWLnyyU6FJiitKzCEEYLo51S9f7chbRX35KYavqdBDv7esxSJ7t",
  "key30": "3i9M4KgKtMa2AkcsRd9dr3NFi9PTHSVhWp6hDkLC8h37ZVyk415HUoBB2enuRvZhYwmSKr32XUggAReMFQcbo2Y8",
  "key31": "5tn6k9yji1qEBWAL6b1GBsEL4T3Nm5x3iork6rLVspwrmabUqYiXCUhUx7dJLmQPr34VHvq8drn2GxuoSo6WMrGj",
  "key32": "2mzoEjZP2PZU3WKd8z4GEfxpL7cgZdQM5oL2UM3pVLx9JXiPFTWrcR2vyZf6BYbQGNsv6F3uP3itn4RXfgikzJ2N",
  "key33": "2mCXuwD1XnQpyLMTweiYFSWGqbgJtPETPZQHmC1F95zAEgZDduAKuAwTGsdZwprDjPQBdktfVwiNhtYr54xNfdcK",
  "key34": "3bpq6tpzwsfz7ZEw1bAwy1M62xh9LApUPL34LUQ5FSC7Vt6SeZfriLqHufZidrnwg6oVgipf8L3QM3rPEozBrmu8",
  "key35": "3Z7Hpo5WdCW3c93VhwFdwAREsG99ZoNW1bUJmz1X1ReZYpyHVY1rBHMG9Y4K7DHAqNcStzoWqiVQiPb6HosULKTe",
  "key36": "2ALk3zdK1qeXwfPjoXgEw5wSqLZDLBkqtDvLh5bLrRrboRRRpvcNAJXGZEZ4WBaH1A1iCRSoyvrh2efuWvKTWubP",
  "key37": "3FKjmpKMrDVWNgvxbc1LDR6aqySrPiP9xHhVTao7oF3ofDqVQcy6g6xXN7V4JauLJiCWrtf6LNP2f9smnTFjSCdo",
  "key38": "bJZvXBnyBgseQKKviBgQizQK5Saq2P6bzg8DFX8PgUcYY7Ro5hpffMGskQ5Cu7UKdiYLvKNoF7c4vwC1yEhXiDT",
  "key39": "4LnP7aybK6yyiSotaLsJJmGzVz7PKm4GKmHmSjtWjbrk9TsAoqRRxEDQ3wEw7vKPzXf1sg8QCzvcPD16sAsye48h",
  "key40": "dTXXPKNG38HNWEaNJ2BvAAHLWhPTbSBSmVksjY8NNnhNQKv1KCKms62H7dZVwW4ZYP6MSgB79h7uVGt5dkpX9Q9",
  "key41": "2YXWY6GHkMXgSfHTY7FaRUfZYHysyzroN2uFXaKi2pWt6AobkLAGPiiB8BRPfLJY1NSwP1BwqorPAtvrmjMq23EL",
  "key42": "2bjuq6Ntf7XqbotCbi8mkjHwHaDtqJsLXNJ1mkYuHkV8uYihn1vNsEEL21ggEXKxMpwh7JwTCK6QFxxLfvnKQAMP",
  "key43": "2tnEg3KhyxmTY9bvQFVdu9utCaf9zRx3hwjHx5cnAvapsEYPpxdVCccLh6fDaXseJxVUA7Zetf5ea5F54bqM53KW"
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
