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
    "3cNXwZJ1GeUmJnsMVpChiFD4ZwfXQwNd7jDQFUiaUjBmJwzLnS2kS3t5Zv7FiVC1Zj2MvA73pPriW73cWd1xUaiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDKKMkm8Xgt9p9dgz2zurtfwk8wDeisJepVmX9hofftgoa8sTCo8iwt2D2tpN9NtLVWTx9XfFoUZ4ebNuopaNT7",
  "key1": "KwvBDTAVSz1sXmZfJBd3Lfrs4RMeKWAJfWnK6dJ3SregMWQCd8FsCCsVKgzdTM2HromkZufFPDq6vdi1rA65sq5",
  "key2": "5yt8fcyXUkoZN2vHbQQBPUfweGKGNBSD1SAV4pNS2o91NDiYMENZRAgeJHt4eQ6Qxk2EmVgZtDQZg2XECfqJqpko",
  "key3": "3Jkw8AoWVCEHNeQScqT88Ky6V2843Cc2pCySoidpQuMc45goL3cDwpZxW9mT9or37wdbuYzrX1ewjFxzhgKgTuJ8",
  "key4": "nrD7XBXDmeeMxfJc282TfW5CXM6nXyscXEJe9kwAMJuNYwdXSE1p8vJRR9osrqdQMXJ594WaWo7oSjq4orANR57",
  "key5": "2YUE75okfNCoQgVqZPHVNQXBa8HdXxJUMQRxweSaZH4HznHjuB9axr3RNTq5qGA8FrnLHxERXFP3tKP48KZQUmXW",
  "key6": "4z8tMpiUDUpBuHy8XKTy9zBp1X8L4LM6PQor8vWBe7zSpPX9KUCxrDHf9LaUi7PJ2dhGUPfoXdFxDHdF2EWYouDg",
  "key7": "5YGQP1ksfhWRyUwNWDBSufyJQGQ6hqsTtxRRT89VRG1JqWC1BL17BQhzqBWKhPDgsvo2vqGq3RoGzdzZprWeR63L",
  "key8": "35aTx2ikpUgpFu4NbTPRSPuW1EoSYpJtWdp4adnk2s5kXRAR49PPyC9micgbS8tWt1LVDbGZbqgbqA18oDPoDucC",
  "key9": "DyjTi7BnwLv8gfVd6Dv1gh6jJgkLu6M3qBEarNd43e3otdJYjRMhBLQkaMLcUb27qKSwKpfqsxCY5JANnspvTK9",
  "key10": "2cFb8bNPk1N9t9LFhw1tj7VVpjNT26q8XXeuM4w6fSW4J6Pojc7FRjvTxoc5ErN8d8heLNQn9hnUFVbR79qQm3iz",
  "key11": "FTzqKrLCG5rcwsKfkR7hLAxuUDATWVecmUS6recyQNzcTfgEnQ2HokKgEFrkhs5f88Z2xyGaZqE81hvXas3CSyp",
  "key12": "G9KiyJU42FMW64qKDK1Sbdh6U6NYdNTi518xW6UQSwmDd4UqpZLTAF1Q9JczDnJsFvcPFsgkbUTvqXkD15SvtBd",
  "key13": "4MRTfcdD5Azkf3NeZduuwsmVT1XQVdpjvAqC3JLZmCR5WSeoFx5YULefwtYhZL8LuZMAuxBSy8fFXxfoAbLLpvDu",
  "key14": "3jDdXL75GXpW7ftxzUb4V72tRRH3bteK8jZgpKZ6wkT2MKnoPB656QeaNK85gVJwqGcC8xCYCx85UbAhWNcApNUY",
  "key15": "54pa3vQV1rLLeZCgq9zXE9RKE9XszBWUttk1J6AuNDdxhz8yj6VZo28mVE7hoDnRKhg4hQyHsVQvWnwXqyzG5a1p",
  "key16": "5jpp8W1GBU758r12x1mi4M7NQJt2ZZfzWUL6v68oz7N6p4k3K4nKU6vwBpRMuH6RaDwj7uVm1uKVKCd7mBmyoLtr",
  "key17": "jL3trXa2JGXghq9qzUB7LtqHVfNYkXsQMvo8spZQJfCMYshvDWSn6mGhpa9ubHJAqg9Kood39v7VvHMxmeBFeSJ",
  "key18": "46hvVsQtSn5qkzRBDBfu7qsz9BeT917F83dknX8GGAFUgzqw3c8DtUBgtto3VEm5BCtWaZjgUSUm639QUBLtyrpQ",
  "key19": "2KdoAA9SMSPNFXQSEcSowfLncZmKXMitrCuBBZsc2dz4pwqh6cdnFjYwoBCYTU4J2RzCAfgnaqPzDD7ytePtPdDg",
  "key20": "3JDVMZZYLWsG8wHUmpKVQ2BGC3PYuumMyFCZkqy11b6jFxQpgLQz7VVAZDG4HmoLPxZQVCXE5iykT2dhQsMz3yXL",
  "key21": "yijzDJdPJxeAAc65Aup38P53YN135wk51xMGSj5bx1jLV6zhBZ4s6CCU7X2TSXJEFn9KZ536KmCmAiNsTkGUXVs",
  "key22": "4PGCnAZJtEKYP4q8wVHcyrEx39CJc628Grw2gogwFcUZc5cTfXur2CXzuhjTGRA2tFs48VgrJD2KBtwfbWG57Le5",
  "key23": "3uNptsi9FTPYNPc67t5L2Z8rRELbBf5exu79MFoEApZn216xom7bMF4ca5fxMuL17pTekdgt2GhevhcEYLSeiNku",
  "key24": "2ayJs5hoCsr57UEp1usg8qvUogRx43bX8NiRsJgjEFuX6xuQkcwcmuzBh2cuiJ3VpgFZLC6PC1PyqQDAHjpT7T4B",
  "key25": "5SpcZD1Kt4v6K3h5QqXavioitumrTXrCoWBQF9jETWbs7of4h6hE88vUrteJiD56WaUGPceyLEoTYesiDHwdigxi"
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
