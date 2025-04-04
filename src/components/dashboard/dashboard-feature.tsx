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
    "rv9AEXuSFYYDcseA1e3QYKcNEV3QjSZehcjQJTYzdckG7Cxc5xMzeLKPAeeh6p6RM7sqJsCUfrgXN1vUS3RnrrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hvsdRm1SpkbHsXikaWDATPGx65e9AquqcHJtRNwnZcmLs8qCDUJhWv3cjuvk6xknTRdtk2kR1pubqgncpfAEe52",
  "key1": "udAhECBwDFkrU38wAaEDZW3czb31NHX4acfLUDLWZ4rwm85Uwvb2z3qKrQ6HBw7KEyBBC97YaeXjfBtUYwrimgH",
  "key2": "2DSn8FsUDmLt2bScu56ifN5s2vHnxBkANmu3PGujFsYMYyqD9ykGTxxj625hKBD8sB4y9W9jrYS3u929fHAL9Gy6",
  "key3": "wNY4QdnM5fSProo9yr2hFNuzwhsD3TQa9Rgm6PgXeCjcxpoZXhW6NT6Ro1PPKmTgELRuv37nAnhnw5BG3Ldmsf4",
  "key4": "k9zGTevUZyXDMqvq3QySBkR9mZzcRdW18pAf1GmbJGvFagaRpFv2TBiKQ3jqkYB2hByXNXRNsdtb3PRYTtpBsfQ",
  "key5": "2Bj7bFKHNGWLad6qra61KLKHZZ63mXMcVsQkKBx3CmymzULZwfmu6ppmRit4P6kKLSsE4e3UBuhnX9Jt8dMbMBVD",
  "key6": "66AWCjQz5DLxsdrMmvFiR94RTXD2STwZKk4cU6Y1KoY6f9rDcAUbXH9KP98NMbf9KHG5AaTMJtx78MjDRyazxGEM",
  "key7": "2yGopGJqdhp8uzMQM78zet6HKWm1gnUMep9JoUPnhyrb7pz2wRsP1YfeqJodR7JBfA2Q6fD3wFL8RtPG4FfUfxmD",
  "key8": "diTwHqnPDARGJqDSybXJbUGSxjPrKWfdij5AKtrhzSfgamMDztqJ98vJXJ2KB2voNTTBBycnBcnVAe6PHZBfSbV",
  "key9": "3UbHmJee2iE9DxgmUakhybzRkaXgJ1A9tB7rJ1BigUzdBCBGXdPFgLFXE91m4HvZo3UKSnfpVaojxrizWq6s4Rrw",
  "key10": "3kXgdP7gwDgiq2bD5TLA6yhhwn3nWP4MZKF1JGaJVGtjAiBosmQYcn2ohmodvmoWEu3PijTXYbMmFU9U6TBvjkfg",
  "key11": "23fziGr9rwCCd9tJGcPzJJDtzsJodXdCG3Ny5iGGg2ZaYEHVrVfMhbF865MVFCf67NkUSGs1Qx6dNxDrXzmU9gh2",
  "key12": "5RpVuTYUCrnFKessHYhZnkRSrJtaNspGvJpenZNUJGzjcnuULDcnQ8gxzf4GcAMeif4sSQesfTyxTnRWgQbrA3Bc",
  "key13": "3VWwBWYVGqYarAdopDJdo83P5PQbvenQb5cBvXn45uuRo9zN4mF177ntpwtBpsoms6r9NCaeQofiLPApPxJQHe36",
  "key14": "368FbKuxDskLHMVqVjGZAAC28ojGEXopYGQw7jWgACLyXQbWXfYogT1QTLbE7J3Le4tpAGqecJMzJF4eXYoSQuxB",
  "key15": "3MSdDUCJjkK7GmsQTV3TmjeiMFgNPF96EBsbebULFUbrkxHnCPGg4b41APqp6YY3zEEJuwY7faz9MkpawHPMSFAH",
  "key16": "5FLfzpcPk1gVj7BQFs4afxc6JMeJ6fynwypnMC7cetXKqiQtkUNbyGkw82mf2vwRETatJGfLNv64p1vqzQqcGbDH",
  "key17": "3Q716d9YdcQZaPESDgjKiXZnVordZywWSo4Z63xY4AjtHnWhSwPnXajjdyvfuyE4V1cj5fpQ79oLzCWZoSjSVfCx",
  "key18": "2ghg4YH5aKCCLyPoLEmjBCXv1frzzXCNg81sfAVX85MeNT5trXhYz5t9Vb9UcMsi5NAoYsDaJz2SFaiWPQqCesCs",
  "key19": "HPxF7UyeKCfj3ddgY8fKKoDthqEaPddfsD2EQeZhxRwCyxJA9pGKwGXTd8jSfqk3GpdSK57A46PSjPsXSVufxAz",
  "key20": "1iWPKB2uVq8msWgrYwwr4aXtBfpRth6wK89wrv7Y7X52Qqvy2qnz9UPntYXAcDxc8AF7JdhvfCojiMHz7SWeMVp",
  "key21": "zujjeiThuT2EPYNzgx3FBLEPTtPrL3hfHErqYbbqQvyLf7gVNYGwrgD4K3QekRdLQJiCa3rXa2muC1LigXWHWzb",
  "key22": "En1fBKEawUyugCVemRBAprVc5KwME6XkSXZSUX5djhibyuhCxLa55PbZF128AJUUUhBucG2Mn4zogzy2z48mVps",
  "key23": "5s6rPZ1WeRRqStKZbgFCiPgm2tm4cwjr5ktwK3jLRySKq8hSNwtD2jy4SunYyMchjqxNW56CAHHcFz5jycUfXooP",
  "key24": "UFKTVW6mc6gUkzqbkgorxxo4qj49mTjyyLvFzuXyYyBPnXGDYVMAyPvEUhSjaGnhowSFRWtaNbLAy5jYZijdrwY",
  "key25": "3rUE3gpJxUajNWCn1o85YXSa4pHbr5fPWCuFyi6eBCZsWhDsfZwhKhzaxAeNjevkd4Vgh6K7RsJ2hUKVk1qF9czr",
  "key26": "49UUPdotKTSyPkBXJf2eZHWCcdT1SXY3coeQpf7bVRFvY1LnA8qWWaubRe28NmoyoA4pnMvDQKadLJzh54xp3peZ",
  "key27": "3fJcSSMGJ2NGJhwreBtiEe6sxDeW4mmCFjZVweTLP7h2LjQxxsu42aAVFJpvbnMZMD5T1apiG6ymDDv5QYAWqavs",
  "key28": "4yTFzKZiiNwNMuqzjw9ipmM3sxVnH951o4pEcVpjaUBJUjwBrXLsaL2xjtxfnamEu756SZkmHe8z4avqw8dqqibG",
  "key29": "3DN477ZX8gpnrNYyr7UtsfeRMYwfsf7Gxo4tz1KPP2eKQpjNPz6bJJSEmCKpd9TthDf2BLa2Mxob9DbRkDVxsHq2",
  "key30": "4SW4FeuTscKcTWm6ippxnCqtfJUtuXccCEpTpcU9qPRYpcZq4T5owssJR8pM7AN6GpVw2HjeyK1xBp5KAjBZ83Lm",
  "key31": "CXAtMvkLWZ3FTB7j7qh8z74mD1CmDF6bwfBgbgUBQVdr8eYLUz9zTHNb3yAYS7UpMarJnQMeAuvDRbqi3Yf6L2r",
  "key32": "V6DewLgTwhi5b5jqxHS6MynYP22MoiR8ua7jZZWdnnQR91JsDsRMwjStdRioNCd9KYBcYESQSEffg6scXPtvMwm",
  "key33": "2edEBwVjk7Xzr28qymgRnShZhXC8QEebFoAq87qtEPyUcuN2iqYgxBhN5wJfxXhAawFut6Bf2uCvdXVZ8PVbXjHA",
  "key34": "3eU5v1EbUcckguewE8M1pDmT2Ua3SpNogvJbGRyKWqxXuXPgVtcyxZ14BwaThArt78PLgyPu5E8id9uiSyQkeJ8r",
  "key35": "2TcXrXigjuUgHCpVArxtT1ecCoSs9wVJQtWypGznRnbaqLePYQoArgZ3fqLEEU8ifY16NmqEUfShtoKtSQfK6MA2",
  "key36": "5Wa3wgk1F6TwuL2MnWJuyvXEmQsuP6puY7shW3jUeYqhFkyh1rCKU7sbLsJxGNNQHJW6NdPNPkacWsuD3xuZQXMT",
  "key37": "3HmHPmumADTLhjwY9c3f588afPg6VDBuxibRQZA7695kVZQoyi8Nvx4nc57xYDKCNmEWr7AKWXpSbisg8Ctr4j7f",
  "key38": "2yczBPWYKTUruSyNm1TQPGnUi3kNwK9VBgRDnPRXQBdACQopuJsytAj89SeLiacijPqsNLGW2vC2Gj42yMt5gPPe"
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
