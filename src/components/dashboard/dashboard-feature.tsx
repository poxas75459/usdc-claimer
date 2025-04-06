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
    "wi8kNAqUK8XW7KMgt6BWnANfLU4UbxjZVCEWSuwrMK13aGDaZfr3zjru4DQbaHsuzEqKYgo1DDHLq9qr5EudPJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEgKbEqfxniHtdDsrdaWA5uL3v6Jnxk16noPSXERDgem2tSmxhb6w7FbWNZoUcoqcW74sQV2V3KwXBCowZYyLJA",
  "key1": "4uCeZ7eDx9Nd55xUgjayKGfCtG4KQbRmuifUkWr29tbfcCLPMm6ESrTy11yKyGYueUTLwurYDFs7Z9wiTShE8cT2",
  "key2": "2jnECFoj5m67CgeaXzeKQGHauecJ1yTRxqLivdARDTaiUJeRrjDpVUf9GLcLDHQvb1y8nuz34267zxDb7ffGhZgH",
  "key3": "i6tYUZroc9KhNdsQiRWSeNhW32jRCnGwZBiJb6PknvuUiMc9JLnMW5ox5oRoGoMBMCZYAVxKuMQsmNEYv36KHdr",
  "key4": "Ryix4Kr1WT1teA2Jv99Zixyxueski2Yj1XrUW67gEsmvpE2CAsHRnLBcMg7k4QxsQzuqab7mbhm9DwzFFi2JiXv",
  "key5": "31oUCF2sfCuvjAVktkuRerkb487KzcsbAL2gudJio9uF196YgEFNoES3kWR3vySJUyQVEVgu5QQnKvFLQQbB6N8t",
  "key6": "2SR4VfX65hZ1XYfuh2Y2JnW2Dn4RR6Dba3XXrbAxgteyJoCNHdx2p9WGLuaqQJHzTUMkFUstCcr2NxwiqAz5FuGa",
  "key7": "5sArpe5tESgZgreAMWgpb77AHAnQ6Uummp6seXh3tPhqfRQ3FTufHgGu99UWqRPhEZ9FUydmtZ3L92WhATAc7Byj",
  "key8": "3bEjeDZxZ4dimvXu8EhLzAyQbgvmEZH12gnVMnPP5RCAaCxNeUrhoH9KDKNYGfsTVXnsFtbMNMfxYAfzxbFWJDL6",
  "key9": "27oEMnb5t58zJKLkWoPJM7eG39EBgxFqy5D3q5PWZmJGNxbsg1VEwCeTZw7jH7ueLYoGDAmoLF9RLEDKHKCyUiKo",
  "key10": "ekownHSksdmQn8xubKnYoFKiwFLFK5BZ3HHH5JskcqjrL4CeuVSZmL4oCWyfuNiRixyekpEWmcmgB8QXtXvLRv9",
  "key11": "2Loo8qwn33qjSHCZTCyKoZ5aEzwx7X1mQbmHENxKzTkhDTcdLpnFweSVJZCxtQZBQin97mfG616ZsYyMUSbF5tUU",
  "key12": "2TQHcwTtULQy5wCQpVp3MeQsThFWg56UPUHa4avorPFPyfdjfBWY1ZvCNaBzLh82KcJveNR3yyBCf6ED2w1Sg3Kz",
  "key13": "529muhtcBBUJeWz2Sp7aPb98mt8UbdrxagBPJgsV5XsVcrMKL5XpYoSkSBcEvPwCqxm56ic9SXrEWNATjqRfoZVS",
  "key14": "5b2xGZRQRv6jGu239WiAFfTjb3Sqqk56Xqwnf4c82KNJ5kn2K4BHGxScL9RmZbFSCqKbkPT187HT7zkxkr31SjQ9",
  "key15": "2PB2hgV6sDePeBLxSXtRrCx5xahTLzu74vx2KYPvSC1aKp8bo26aG1LbwzwRXw4MWkNP7GgNoXKhZLtFgtaCGVRt",
  "key16": "FqsKsBXNA3suQtdpZrT2RYfzMiZAHYctwKfFdMV89VQXiCqT96R1hdYHJwbS7Edt3Uxy8WZ2KkiaXSwZaG5nX2M",
  "key17": "25DPChmkMaUYwnPqiw68CKimXnK6Q3aYH5eY9uQHKBvAjbSAjy6nc14Pgcw4EUuSrwf5gVq2YptoJ92oqH5eyJFB",
  "key18": "64rWEot4jQqGXh2tzscRPPAkiTyLfr394tpGhkEHrCZKvXAV5Ev2mNYCwND4mRCRMA8x2LSoJuMP8N2JLA51QcMH",
  "key19": "5LztUjUMxDJZRW7dVNzCAuwcibmcuBf4Q6K9i8U3ifcZEEr4fweMPNGnuwLuAZ3cD7rb8Xwp3LQeHzfsKRkRYiYr",
  "key20": "55usvReoCerZcPSQXpVo9e7dcmK2kR31rd4ZYzzWeJMDT8qmVtWbuQ3oaKAPWPK13rBXL7yS8TTCtT1QmJUyCFRx",
  "key21": "5pmzhjhThd4Vc9VMJQS7BFAj9mqw3jbKjNop74aQzowgr6MR8hMvUCN6uSQCFKGCgdTKtoZoUbU8QBn4dtAzQsR",
  "key22": "62jdiFf4ZKGAzf2vxf6h2XvqXSNzvQWdJ2QVs7AwNd9SVXioCFzY5zDBFPnWiFneFLCjgZ2N9QvjWBX7jKscQ9Lm",
  "key23": "eRYeiq1cfFTN2VBbFcywQEGvAunJxQZd2Pjp5bUJ1U15F3yzWHh9Hx5U6GSctK5cc9vwfUjKC6Ajx58RD5mGaF5",
  "key24": "2WP1dgXgC4sCkg6iaWcNwYqpekX8T5yS9ZKJG1WXzg39hNd5sz5FjRyWC72js8teHeyL3W33H6s7ScKpu6QsG5qE",
  "key25": "5MKtoYtsQmxTh6QWyDwcBbDWcDnfugEgN2LoRqpg8Fz4zaxQGmfKJ177mq6gNGN7pb49wkDMYEni4zWyVXmE1Yrx"
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
