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
    "3jqtJEQBPTD6CADtUJsfDkrQs4nDw1f5yy8ALkFJnwn8CttFE1geQpVKVmspzews8m1Kfq4oi2aTbj43FiwwMbEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDKR6JzqnpekT4UJ2RMHP9FKiCLxdaiC26NupfdBEr8nJHq8Dw7tnr6fwXib8YCtUUTqRM9pJWFNFJis3ATbZds",
  "key1": "VEsJa99HT5GppK3MX5MdU5tmfyMELbQkKuy9bK3qBCsf8r6wiFM6eUGvPY63ySj6hMCghmVoov9CZTmzvFfCiXX",
  "key2": "39g9EtYuLzURYpoyTtTro48TDHaMDvb1udAM2hyC8V258cxbuGUjSzzWFjMBu4toy1FFkzddtdJjNgaEbrAT3TC7",
  "key3": "21g5WbfouuknEoHsE1t98eVQ1uZ2HAcdidYsqiPoD8HmSvyUpXYiEmMc6vuTmRSYRrJjv4hbDRRCd138fsoCQYPN",
  "key4": "5F7N4QVABydqk6o7kn6bJQVJ8H74VVxbpvLDhdTZDmGZwp8iLgnRE3FbQhSXV3imzYxhh3jZXCH4mBtQm5Mp8m9W",
  "key5": "4hJxYE5zk68vbvnNB1895d11YgS9KwuwE3FXbmbABms497xugXmTqJYSZVQigjarjvCK6SUr9SXY1dhCv5CswtJj",
  "key6": "2b9S48Ruu6H3pzECvVunrLjT2sFNwU9ZZtoFhK7z2grCUWvtn5gaANFitYZZy9AJURg7ep51eK57GXFYSPnKh4rv",
  "key7": "3mqZTqFMhrirwKXX3RwnfZWx3goLcbWFsu4pxicT5cxgiZHxT2tAxqFSP1f3oBDF6D8rTAq9EDM7AVohbLEDEgFE",
  "key8": "3m1qu6K77MiXKUBWRpqWZxWowXNCxHfYjUwFY6GBZk5MXo5TSdeNC2bpRNR2C2rk5fo8Y5xmexDA5NrGe3YFu35p",
  "key9": "61FsYHvrKhHJruDuyV2n1pkoJ98fm9v82NdC3YCmSye7rbLwzdjfUBCk2UdbYqWkCXg9US5FvThwffkguY3NXCsn",
  "key10": "5ur3JKgA8jL59rDZ5qmjPtfBCjSmTz1HZo6jhbZ6pRircSPgkfWBwRum65bLwesKdjKJt9Zi3AcYyEATy4tW8iGN",
  "key11": "4j2RaSKtERXFuVN8eY2JRvmjHTPD612wSLZ4sD5fiBM7fzwykCH7JLaZubh85QZ1mAcPS1ajBCnTRjGgmSM8MNLy",
  "key12": "vUhcMWZ6x5mtBo5nPdmKc4zAcMF7fPsw6FqnhvkNHLPSdBrQf2qdU6cKMvHt6zWN6UxWx93zMTy7NaSxJELXxoa",
  "key13": "47MbRji34wNvMwJ8Wxk6m6JB7zknDYbMFTX3hixidyJSk1f5T7n5K7jVAmLMWXoLK4E43A1zcZeDCNaC5WzuPahH",
  "key14": "63eARZ39zUtPTpqofH98MDmb4AMcczsJtLVP446STGNjXvnVQTGFRR7GoTyamJsmhXPg9TtZ3eycN1EmTLrMAgY3",
  "key15": "488ZzwsAWETXPzP8BcAU54Sro5KNj7EMHMJUjDfAxPtnnm4n5ppSfin2ewjYV3yLrYka6EtMDdQAq5Qv4M3viJuf",
  "key16": "4rqouS91RvgLZoGY96izs4eodanDbPNweeXiidnBPuk5jFXjhU4YwCYMutKDU1qvcspaGB9SwVmUS2NQjNj48M3T",
  "key17": "2z5x5Jq4MTo8fPnhTV9eApjDLEad2GWnERURGkAc3Ug5XHuM2bxzxVD1JGS8rJGLvJEX1Ehc9e8Gh14J8myAp1nR",
  "key18": "49t15C322BdKDAiPPzRzw3bhrAsjP3976pG7oX9TfkKhwF9NrXf2AaUtxiGbXDqSeKtT1n3iwd1df7BHB5MuotYJ",
  "key19": "YyGhZvGFErbyR6WMxyy7RjtDLD1UaFujCwdUQPf3nKQsk3PFK19ABCve3okfaVsaoxQuZXszvMpd67FmvFPDUyL",
  "key20": "2RcxNfZSjD7BBDdYv26ZDcLFEoaybBn18CSTAWJUp5MNTMpzZjVWSdbQDZzJ2dctUD6egtL5w1PvrDsiqLigxFJc",
  "key21": "29JXsvb1HNpmUxp6rbsoPk9pyWboFuZa71Q5Y2EoqNmDuTBKSHExh6CTrrorMqkFu8u5gPMm31ZP4gDMVQRHoY4N",
  "key22": "5HCMqrnEGrfdXLw8zrMipSNSbW5eCL7e631Cy4Srgm1o7LM7Fw8sMByNuoZWrh7pUEsG94FwuH3BkpiuYiMAGpQJ",
  "key23": "66HVEX4LEB9HtvJ9UYPSvP3kQemSmkEaDceHtQCfRopsAqJqjYpNZeU4a3AJp48bBNBxV3UgsgWU34RbEkg88bVi",
  "key24": "4iD4mVTpoRX8FFbUnBDR7owjKnBJRL4HKJSPBBjZMXBUQUwH58PDk56CZB6MYV4mwvQhmrPiVHmdbgNTK8u9K48K"
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
