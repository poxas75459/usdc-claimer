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
    "5iCGrFdjBi7KWkc4akzc7zGsAUm9ep6Ee8bSrA6eGYoBJsGGGjEoUKwwTFk1ogg7mz4x8rwZJSc2M631UMbcNqNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466pDQCVTQmuDNn2nJcp6dua484UmJaFEkP4z8XPjMfJ8XVW2npzYDH7uP9GaavbhfmWrRbMj7DpJBHGmUgmWZPP",
  "key1": "X9SkhEgCHArGKjdag19tD2GX1GxpGUhShsfmcHDqYysK1A32dAKA1dzSqJ8nremyQYG8VhCGBe3NDjxvYaUfrXX",
  "key2": "4AFUyq6UNALm7A9KMvwhMYCdQQvQv577ZqwjqrX6vTN2NGtEi8zXqHaMXrt3GvHpuYJZVJNb8H9YPeSFTV5Usmfa",
  "key3": "HEnEd1N5py9Bp2wR4ukQeQt7ctR6stcFLSX9oqRZCRB5jkv4QmtSvua1M5tcvpVasx2LvAFEwLwTZAGabgEZ76R",
  "key4": "5EmuXeLjcUv8MGLhGYv2ZBqPRYQt85eXtbaq4MvjZ5Zj5KDMcReLtMFqDKaYuFLrveMZ5sM1ZSNF25BZnkkoAQFY",
  "key5": "5APZEaRVwAipvWBDv9aQbuSuJvhTc6N8yE29ZqGtiVDVHoyAe9xQvgh8VhCPzGhLnUNhr3yoepeyTUNP9dzQEXg4",
  "key6": "42NiSguyJCKaCxJE7D4QKu5KKzhDeFKFdnhNMevMr7wkn6dNoe5j71cLn2qmUJWJtjEWn3zZqVfZME9GnNFGgHBU",
  "key7": "4X8vJvRkMVzTDk7YKBFSC7m9nkD42E9c5eo1DGgXSnjbZ4oS2voSVLVzcuYfSQqnwj8vBM36Sg39XC7gVwaMKFCk",
  "key8": "42nKGwHKTCgdnCfYZgdrLe9u8nFi6tajNDcEaSyDXXT3xNj1tXyTkeosDu38yT9fWvFihwsrHuUPkJ2ssNPcozW1",
  "key9": "4vbY3a3Fb7LaQ8tnKNuG8FakoUd8KrdzQik1rDXWCGSi2pMF8jSpvdRhvbPWvB3KaYcpoXSZ62wT1KXpPRAv8DuW",
  "key10": "rXhXmSxcKuvqQ43Jq1Mfi9CLgE32R6BpXUoP7it38UspSMg1pArWmYR5FGo1k71fAx8iYoiJ6Yz7DhBD8wsPqvi",
  "key11": "4icUSGXNZj2tHG9bzDCAzTmPpPxgazhEw5ZJi4G6LfmA47TT1CPY876d3k5hzRByRHvUzhp8Mb63fZgojtfxdcC3",
  "key12": "63JpPPdcwPqw32MB3RmvsGL5pFAfeAVyk5qD78WVEsGScpiQjkTgZdFmidWrEzKC36yq8dZpJZLUNxiGyhvpewk",
  "key13": "5ykc5WHNniXdTTRuL6Sw8vtoR9PKDDx9PqhPTqdhwVNwFtvHSDkPpxQJV8msCKxgkfVjaWGWQtpeRPLaRX8HumSW",
  "key14": "2H8PT7RC1nf25AEjVGkZCHLpK4uUWtqy4PWN9QSwZvMT3UTVj4w1zgrCH3daJjNSqjuQpZP4X3L1njBY5a79X1T9",
  "key15": "48fJY672UR5nFSiLnwskYoKVK4seRTLo6CAX1szvizWoKxEp7mmv5cd7r5uB3ybq25vRzoYDE6X8yKjKNDjgTkPp",
  "key16": "2weWN9PPdbqVWPKA5Vaw9bwSguhtiPey4eKm9qp9GQaFHS3QvatbjviVJMJtsxksyKGq5U51CsaC7QpXZJaHab8U",
  "key17": "5MAH3v52uJMK6Xq5we3k2rqaxoPjJvGnfJCH6FU4e4imqYt74mu3pG3tN1WMALPm9HQk82MPgmAmXb8PvYPs2gtU",
  "key18": "5tbJAmu5tmWjUybEKPTQeHQs36dkRRxguV4xDEJ2JhNtPUmZTrZ9EAzssMeq3AVugD9YAAnsAvyykQviTwxFaJTJ",
  "key19": "5pkDqtaP5bzo22D7G3sacCBWrE9XTtKyZVyhaQJZmAThoz3HAChBNQKPMGnTRD3R78tnnJR44ZUQyyQ2uuEYtjvG",
  "key20": "2GLtRBwkK7vKEFVCijXXoZ2tyj8TtsYnVBRsXQJWhGz5qseB3xyfjoE4b7V4rkRKkVMWrQZosH79byBkAsHNHRxu",
  "key21": "3gKzwihTukCdLbfFVttPTYHu3PR9YK19jRLLwRKZL9cS97WyvoCf8S6jD8asak3XJHvgyubVFbeMKvWQRNbZiAtV",
  "key22": "2kG2sq8kPxijuHq8mkhqYWyr6DuvWYoaeG9TkajACQvLPJ74HFd5SvdvDZFLJrwjm1PLR6yFBLChtPVH9CbcuRJZ",
  "key23": "YWaD2V28hstPHouSok1fbhPZLaKcVN1vcB9YYn33mYmVoHExBgQuyaw9r5XR2sa4HruXChe327KYB31KANTaj5s",
  "key24": "jgnRzH3srxJ6oZBAm9iNf7ZL6rcvrBG51JNFN8pFidJdGv8P2udgoogqGgRCBNHR8NRFMbXTeqU4dkm68qmPw2D",
  "key25": "kLKZnEDj3HYpMUeJoQNKf59EqXWweyv751hLc4DxYamEHPQyagFgsC8qASytAKbd7QAKgxs1cqsHPct4GN3ZBLi",
  "key26": "2jAZTtt2N4sLAMYpv25PuoR9nqHBW5PBzinpijVuSjnEHQ6yoNJ8L8XnmEdrexvdhUUfPDV87K33Sitz8quZTRwa",
  "key27": "2WdKQp5YwLedagHCTUAJ2S38gbfQwct7YxqtAy5pBGGVQQ1TaL8ETgmMoCt8jo31PF4m3gnDBTvA9CqW5j5pVVfi",
  "key28": "3JuBC63vhsTLwaSKgpZk7FB45EmRP8VGBDz3VcEp3EPWScvpYH3VavBMTCreUwWnQeBTjt7DyyFYMahPXAH1gX1T",
  "key29": "4qBPudGAEEAshCKGzEtMzkqcBXYVXxhHEqmnQeEgCWzqRc4A7JYfCBRQfYd9TqNdYmqLQvQ5RD2Qq2bkiGXUw1Xn",
  "key30": "3Snn9pSACPBEXcFtM2UiXGzi1kS2WJSJpDTDnXyKFWcT1aCgL26j3RAaFh5Y2JDRGVcfGV2MBMfQNzynhim866YV",
  "key31": "32uCAeSzpWaVZQvaADkV6draFmKiT7pRQF56zCzHeKjcGKGvYSzDR5iSZHQep35ySMpeTCNVXk96zp6A4xb7c4Yn",
  "key32": "CjMghSVG1CDip33ahyPhvQuopXQg5ZuiG5qbHLrF5rQZaNu9voYZdUDUPLB3RWqL9cp35pPEqvpNR7RDSvmFPTY"
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
