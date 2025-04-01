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
    "5pXkUtGZFU5QftgdbxFsZFgUN9J4JP1j5LgaPcCCWh8vFZu28E6RuipAtQimsWWtoVq2B7Vd1VvVj8orbjnAF241"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnMCrNWBdqXz4Q8WDqAusvji2Qoi3dNx123YPNNQd1E3uLmgypXSV6TeLMXgbAK9BSsMSbAxfDpSJ2eFiwheibh",
  "key1": "3HydzxjLAeLcYUaKTB13a7ud4DDjRp7gwgAp7Rwsp8uE7HTUY3zZbHiiuMiCq15sxVNCh2TsVYTweGRsXmVeBWWp",
  "key2": "2L547p9F8Ctfm7KEV9M5BsuzLYQkJqG33a88UTDc1nncN2Px4iS3g3iHcavsBewGLimPx9gmyH3haa1ves4PZXfU",
  "key3": "3f33KwjCzynst5zKMEGMfM2rv5vUadC6j2u9a5ZpiSiVMrNEXmZKv4VonW6WJ7zyJ2ge4xuTwWYtiQPqgtaRKBQb",
  "key4": "4yRfXFERgaW792UFZeDDaA7f6SbujHfLbp8tZoUUncc1D6ekZCBeX6jojgDb9rCVt4a2n3Tgd3JpxEJE3RJYtGKP",
  "key5": "38jtoe6kycF6EMFm9hUgEkeuu1GxQAtDxkz1Mx6sJVyUWyRUADd8EZMXdLbsrkGSUuLzhkQN2TmfkLUCfhigo3KL",
  "key6": "3WWKuZRSTjtFpgSw89YcXF74Ma97xbFB4Mz7LBkdMsJwP2KKpQVoQ8fCyMSsS2T5uSFNaL7VFChXG2t96fNmjDqG",
  "key7": "4akXu6DFhpeKPUDsN6TqnnWMUinLXd9ngXQwJAryHKsDH1ztpDWUehQvmR3L7MWoe1NjkFnzt8nRuitysrtxmVmA",
  "key8": "5syD713oh3a5ftL5BzzbGdsXWUihKmNEKrCZu6ZKotZ8B95PY6zCj3AAt7u5oHqQcYYbCqt7dMuXpTH82CnJgaKm",
  "key9": "4Qjeh7oiCcwMHVGUbAnmNNwj7H39PUA3rik6ZYaTeT9JDExbuCDbwjLopYsrkXS99rava5xPWPq7Fn454YJHLNxX",
  "key10": "jttvFEyte4yE9shTZhas7eqUUsPXLhVfmXFi7XwVnAsegkdLGELbusVaaiDXYqM34GQUXe1LvVe5XC5RoJYFecm",
  "key11": "54KihKSonu2XBjQYQZNrTVsT8KKDoouvoSiqzhqa2EnLH32bkxskqArrNYsPRsLRzo13rSPC5nEtEE8KhacQG1sm",
  "key12": "3sFsQPUuxNmPFf1X7s7G9DMZ47yP6oBTNSNfjGyci87JBjYVJWH6DFzzbtqfpjAdjyHGchfCUz3VvQYFAG3Frh3i",
  "key13": "3pcPiua4JLJKgGUPbHBezY8EmZCxge1UEJTBrAbzaXm895TSW7mfaiMD2U36HUGQsREAMAA7Yp1AVszxRW51ZRLd",
  "key14": "3b35XzkXzapqXAgS2KW9kVB4M5FNRXQVx5m8vpRKNnR4vGpJEutd742NqWdzhNADufrz547MJTMxTBSPka7Vof2w",
  "key15": "2WivSKGKRUJ98A5Ag6iypJjf5XSPhnswpCxWBBycuMf2DbpVwLYCEovJXcJYA2xYpAVzH1x3kCSMmCumBQDwKqSK",
  "key16": "2zXydKsSJdPZYbNBM2cJ3moPftikiooAQPJ2AhkomK98UmVKe96WHSyX5nnSZptxMd3mjsH1uXHCp65ypmHKmW6m",
  "key17": "3mP74JX3eUqTE3ntR4MshLuFZgVrN9iS22SUtoLMwiQydLgHULVhYig8vaH4Tb1HdqB9sV9xVSdVkwhddjqXk2DP",
  "key18": "4xTRJQQSGyrLLsvexVSDx2rzCAvDav6st1ynpsQLs26SWijQux7LghqGUQszUdnBLjsaYJx12XfhVirkDPQ4PcYJ",
  "key19": "5cZfoyQMKpZaFG9KgS7QQvtsh8TaxBSWbrRDZgLGvgWCawo332YJZXjNGgNPpqQo5dCiHFAdSJfpzGL3TgEcZ1y1",
  "key20": "45SJHRzLohpHB1j4RYzvhLDw9wx391He6RgecSKkLYemaBKxxUcReAMnqaBVFZDHztXLVcohviKrQoJMdpJQGaHc",
  "key21": "5WbEgxFPqqBtq6SNNwog3QAwLvepD4hzT8rrLuCTZy2NjJ9ZoaxeQN4eNAG9JBe5xDBBKLWZCe2ozzteLYtNziBc",
  "key22": "3mTnnN52ssc5xafmwGrgEnU1HGmmE2KqhJAs72VD9gUhGTYWKJNX8ninKxx4DRX4ZeK9BhC6ihVfwUyMi3FxbKcM",
  "key23": "3hzTjDdVsoQ19BbmcKDEXyjVbFR75zp7C8MLi7WvHYg9mX9V9xXUwQMiCnywshioQUeTV3gDeXLaYkk7Q9LyVYC8",
  "key24": "4qRNekbYavMpdpsPPRkZYudGNJFdQzTEHLuy7F5e8Tx1vZ8MMSGoRNfJo2cELKDq2VEjUyarTtPExVxfTUCKUMLa",
  "key25": "G2w5mdu27tkeqM3jcsL5SMywvmCvks1bWEYduhH1zTCsiLTbFtdiqztGkGWGrgLcdogUXQycJigz6C7gRR7RWU5",
  "key26": "5MHNGMCJ3Uro3TGUgNZK7cT8wabD4x8CM6BpSs8WqQp6ACdZ26PxCuXNppAdz1EepgXnNMnSwjTmFEqZMcJCQsZX",
  "key27": "kFCv82iJENYFyXFtRzfcKyrhmWUcs9rpjhpqwcJWCTmfVPJB1ZrAXif9QGk8AErCyYWsof6JEGeVWwnSif8T3RY",
  "key28": "2ii7ZH4qoGJK1cmZe1z3zZEJNR79QsZ7KVBEh6VaXpThHYk1vcTM1gqkAeqKCiXY1J4TaDwcrhDAiaTXa2iXZTTC",
  "key29": "3kyaVrhuVeop7LL1QMQMCWzy7PhMJA2itqfmGHA746j2x1AxT4uoyb994s6h8GcAAUhLJmo74qvVyoACEFe5A31N",
  "key30": "5umZ2WrPPAAzgokJcX4aYkexFaVsqttJ7eAP4w7TGmsvCtvibSERq9voW2yeZ5zh2LPntNaUhzKiAQfshXh5NxLa",
  "key31": "5dgV2BgYwKheYJ4u6xfyRfyP65kC9dFX3GBJLEZ47M2ZuTz4EX4S22ojdNQpLHwCxNauTfkP1zMWDoy8eJKFVsYC",
  "key32": "2N9bzBU72Q7fu2vgr8hb5t9XZAWUCEX1EBJjeJYFxqdWF1jL2dtRCiXUZiHxGiAnckdyLXNnXW7Vqzxa9LMTX5iR"
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
