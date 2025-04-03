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
    "5LhVFG591XFeLYjm1AB8w9cfbfSdrkcb4YBLkWa9XmyUrUFAi4FA5nkdjV8woSU4muVMowyyWYQmY6CWRHGCTqYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3764Rx2S4pPdboxPoWaAeggegY4jkvJNk2kTyvqeL5iiWdGQmVfYBp7Vug3aVJKLwAyPEamCb5AnoJ1rFfJpJDSN",
  "key1": "5PMHmsYFUFVaxUFEkYx2R6SUw3gdsVtLeBDQLf26ptPKxKJ9qBL8U5nVypKRhxwsamqGa4YhxkaRNLZrGdbfDT22",
  "key2": "jSByLumq4QPkB2RzEHDomDf9derpgVeCTVkcAnef9R26qMeWY1jdBq7xWLGks7sP9M9KhCDcHg17F2Y469DB2sM",
  "key3": "5qyP8KCMBMSsMo2EanEfJuoLxbNuva1yC3C9mxVobPJbwPRHP1hFpV8GYMDJeFwnpH1sXoruHzvUrGshRHnTmErW",
  "key4": "5B64owRr7VRdkrp6KF2aJXQ2xUCMekdZdF53384FPvg8sYXE3uuJxLvAcRrCTSg4TvfMLuqPQgVNQFHRKJyZVvfa",
  "key5": "36YY7hT72ciobpdcn2kbXnodahk3MZNfcn8tXFBSPnZRyshshJstY18WhQAu7UDiNbHnz4cLwNaCDa5DoWqNLFQM",
  "key6": "25drNXkbQ2QaVa4aaTo3bdU2piUSSaCf1QbV9bgMYspsApqc6xCQBV6sJtiVRDxhvUzkzsVFE7MiZK7cCJg5QdxV",
  "key7": "232N6wAWWvsqW2PehYfHVND6qZesUbmzfN4rWLqbjfKtberJLSMnSbQtM7C4Gs2GH4QSyEj44rftS61sUdw6hJqN",
  "key8": "2zeaEPAK6eztWs4DF26AEgmnZ5RmAEdWSWnuhoYPrAFGnqtaqkmeZiB4mtvA7kPRHfjQvtq64jXLGG1Zskxd1wwg",
  "key9": "53wSVt7pDMugTtLw9QiFNFQPDrkJme3729HMFokXBVg7Wn32KjQYgDd1HJgYsS5AUvAwkWEiy5Pfk7FtgK4iQjPJ",
  "key10": "22YUUJW9GZmHxGwDaHUBQTxJN681PgzZ5b9tqGKuCEmHnas8oJy98kUW22WvWQ9WfvGVztozikfN3rrTES3SfViM",
  "key11": "5teWh19GC98pdrUzL6DcefRG8reNeAnYkRMfnRVAk5aqHycH5Kbi39cgg8fMhRq5gfCPweBMLHj1bwvRWkvjvZrW",
  "key12": "2yFi1Ym5tfCiZSYDALYmeyEjV334WoS8CmUhJxbPikYZ6npL37ySCtaovwxz56DHVDvcRrmx7FvDe2xHEEysxiKj",
  "key13": "Y7QBAzex7NhBhC9ZFmaimeBJ2FVS8fVEU8TVV3Wkn7i2KHvN6vpYnugr63rNqtMTtS5y1m9zu4NxTSAMPZqqFHY",
  "key14": "37xcyNe1DrhU8VDRTKD1fx1f35srxp1Un3Zx9RkyYLrs529XY343Tp9k3sphc5Sg7kPCX3yQBnzhWF6kLBXzhauQ",
  "key15": "4b1Q7t5etwTaTtXXjDpP9GaWW74ed2RkxNhGB5QrEg4ictewK95yrmN7FfMRcC14YmvxRBuWxjcehwMR99d8ggfM",
  "key16": "4ngyVYoyKrEeojgmVvP6RVAGiHRY2P9WnDFmFMAUPq9RYLpdHWPfBACKs72QP9hoJQVaEEEoSMdX6rttr6QrnDSm",
  "key17": "47yV2jkafePqpc6UUvKTfG4RkFPLaBXNNC3uFuofPeEap4iW6PuQoxeV1TDeePbcjwjnHkq2QkGGbtVs9W2XAP5M",
  "key18": "5Xj78bnFy86m6GReK4ARueneL7p1t5xxiTu2v62eAUQdovKTzitw6wVKZh7gLhNjfw6FJZs8AP6sHDQbGpGzCMCk",
  "key19": "5mGmrjq5zxtJphd4xmkgCvj3G2ucWsKxMBjzQmfCPseEanFninr17jAcirKAVZi5pHRWyBBsK6Lru1XSXZKWQdFq",
  "key20": "34RGqtRTfkHG1M6VtEcxFyrKqVEjUCRPYkG3Ro4SdRzXaSM9MuAFw6wnzyoePjfXDyiKmjsxzWUg499L7vuWyy7u",
  "key21": "4A7cGh2oVFXci9hZFJMEuxhP4Tsftsdjb2dkGHzTxHhcf76VSRkoE6LuphJu4oeMtyADWL7L4XpLDAe7YUvQnepZ",
  "key22": "5qKA5gDEL4zmgTqFGqUPf2bhuZiyVNYU6zxTghUHGtStAFNBuu6iYbABpyDLdeNm7x5Bz9M8sb1AvCu4XG3tkbPs",
  "key23": "5iL3q82uvvtK4RQa6vqaU8veN2uJkfgaB8qpjrE9wjwVtjyiyyEiSfrVRqYiFMgSnbN7YH1Ak89ipc6ZiDwxRmwa",
  "key24": "2smWNP2VeiBTp4BnBEXjzXwfcC7y4mbfTB4RLG6e2Hm6mU5rZRyEG5U8f1huK5SQyNm9Zzr6Tticy3vGs2PYawga",
  "key25": "3htBuxc6DZmr5Ci3tmaT2SB34FwEAx4nTB87S1PjnPQMLS1C8ttvLUp63o7WQQuheCc3uRQTFm1AU5pVW7dnBVKG",
  "key26": "3eeig7cs8eKztoHSqaWk9H8qCp1qo7fAm3eDrbR78tiu5gPPCTmznHtBAKZ2L9UmRPZnjBq8dsdnYn9oVcWTjpmn",
  "key27": "3pgQyYX2AJURnkTJUCovg3PHei58aTTS1JDS4YsazPwP1VdCP2eFxdkzLpz6sBNBa4JHHGS1U7aAQJXXw5QUf1sB",
  "key28": "QF5g7tY7hUin6xa5cEeh2GnkqJi34REvffucBiz15ZZDYs3rRe7CLqtfLNCoKNkXDWd6otVM6kKcdV5FYF7NP9D",
  "key29": "5SnvJWoUYQjKfCDQYg7vkUj6mksCmEK28pwAtPXmizKMmfdTSwSP1CLYDyynsKc9hVX1ipA78AfLQxs7djYu2qvF",
  "key30": "2iYurUnh1g5GSu4Ktxh4z1TQkSHrBGoJPARLr5RQXTud36ZgsJyZKpUn9JDzKHmEvuQmNYRK2SeLaMWAV8mi2fai",
  "key31": "VrwLTP16eX8Fs2fwdgBwGinSTcjeXuJDMJRJSJ2q2eGwKWXRRfLxvCVCpTurii7jZUNJFxT8EHEdzuTgbvUdu7f",
  "key32": "5D84FZGyxpJaY2gFCyJXD2ty4eXJSEMDzLoGyfvcxF5FLK8CQs5ksavKprFtdCDTNakQNdKJ6T4FyeDtjXq827gL",
  "key33": "5hCLwBdpvGCgFvgUbeVrKWyqQJBPvVKevGEUTAaWG7Gzp4dSWiHp8m52nF7GcGmps4aWcRkhxeQho76KZb21h615",
  "key34": "4gpNTNAjNEWAr5nvYUf1UpTMcdbXhxY8ZysrkqrWYSYkj2pswy1TM3GNd5oUeJT7j2JDTnXPFWVSWq4Ejr3hBFLP",
  "key35": "2uYiZZcmt6MreDDsEhF1dFad3W3HysaWtaE1aSqQuCqCmAyw1GZci9Y5sw1QyvUwfrKFydMjQJPrNbCraFxmLZFc",
  "key36": "mxDxRTs6A4QHApU1Vr2oDBC6ZN43pAuxjR36aPvrz5oYNZFaQsSHUkzVk6iEmB4A3SjjckbsET68HRyEaYDNdV2",
  "key37": "65ArayYxiVW1KPUrE7MYJgBkw8bsPRDoVxaqbRV49orZYJWpniE9rP1etypLDRcHRXvd9fenyW6wz4WSo43xJBa5",
  "key38": "tR4jaZbCWWPywTEZ5rf961TAtZ1yZU3wbD5G6naCJQHZQE9sHmsWFJvr7qoyNcE4Ef54xBJbhsazjxFvaNQbXys",
  "key39": "4pDkNMZPPPBzcvZDttvCkT3ZdtKnJowq9iwHa8rKuUWQDQTauzYmcsZjATfzLFaNVt9pnhAcA5EFuQRVah4PH7GC",
  "key40": "35dw9eJt8PQD8e63rovXyJGuHF8UsaLSpq5ogFd4QuGMdKzDNF5gQ7ttJDCWQLyvtt6bCekmaof4xRxpgMehuy37"
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
