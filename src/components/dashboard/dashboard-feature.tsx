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
    "2JFBT1eVUFTcQNSKRHXbgEBKH1tXJoWb3cHXMJ1vjyea7hA8mCBPPWep7A74tVeDtGVMSr8oENy4KLREi4hC2yeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31edE42BjJE8hZkuZPpFnj1V5x3Bq4orrRMWfC7LJt3m4MeWgvmWSBMwxJBC9uwHyQ4mZ4b6iCArkfkPtHhZsyZ8",
  "key1": "4LPMnSRPxPutBqG7vvtBcVNzdeQvv3v7sBFbVDvYGt8Utr5PS2QFCsM1NfZXrbfsitKnJ1A6ERVQqJPLJznmJPjA",
  "key2": "3hhhqindT9Pe4nsU3YCbbjasCpdkt19jgY5NG6jbY2XHTyRyc3RpmSLE9qL8nvQYsWgPZEa8hzTFDTAkjutu9wYk",
  "key3": "3UN7YLauv5yZd4XGyNUT4kXLkkPSQ424uNEvUXF9saWxoCaKBJACipDeenXWXTLbMMJWrnoTtYwK8RGv2qRSxB8b",
  "key4": "5buGbHZLJ1E7HrN3PYU65Z9pyoy6kX5oGdfPtfbnjTB547N8aaDkQjQFgi2xzC8vVZKhsVn42kf7dPMrUAXTHiYQ",
  "key5": "2Q41bm3mWooQoPzAgFMGdJevHH8DyFr37PWdJskvGoYVXEFxRqGB89czPvjkofvnTs57EmLfjt4z8khfXGjpdwCW",
  "key6": "27CGhJuLZRaYowroCgf4BzJxNZwWaCT9E5bkc22TWGxRBmf1hereJMitN5SAbosvGwwB3SPLVGCFtq61F3Vkgc3o",
  "key7": "EPCDTp4N7BemdXHZqvsrMv7TQb7CRLvaeq6n94o9oj7a8sx5Ry1CjqdCCmAWMDRQXR2bnicAiPzumDDD6Kw988M",
  "key8": "464RQrS4odfksNy6Av9zUTBEkLK9Nw75VZn921cKPSxYQtK9cukL3speiKGhp3ye3NCzwW4KiQK7jfzwc7kTcY48",
  "key9": "2uGySJLs9mL8YjnM2rie69gyZ22w1mzFvK2z3MZNctXSrSNisKmUTDFrEshoFcidJywGWcJhXMvANyEfUjen8AeZ",
  "key10": "4M95EFEN43tsyBvDpD1Y9FTk6Fmsoe2BkDXfzz3MkeCsGiT4aiwTYT8GiVyBivzjgFqCTwG2zLpMv3KorygkgvZW",
  "key11": "3TUoRp4kepjEW9tS4YAbkvTPTWD2giUn4xtBKRxs7yjCCvUFi5mGMFdYL6XBsbziiWNhDegoKyGBtooioiiuqqNT",
  "key12": "5DWVAFuiJaUdWxDb94ntEZRLYchSmshUccN5v5g1JfMLzMFXPLn5E7NHLUzet6VB5ES3rVt7xYJWEe9eYGAqnsNr",
  "key13": "34njG4SDaTdwZxpXMBR8xG67tE71vwA2Eio5m8kRm8foaQgySfXiqWLZwivHGNvk8gk8jqw4uiBzc4Fi1jvEfJ4Y",
  "key14": "7k1n3cXtcyysj3uDZxvgeh5iYiMLSCGfJTbMhjcYEapKMYNuDQbjW7xzqbeatGKD4zTLviB5FLeenAy1sYiSAJt",
  "key15": "2zDWukNgxphau5uca2SvDEmLqbk5JUbMpHa8C41J3qe3oU5EJVskK6vJvNGvJYsUewfzookEGWEh6QwYu1NYRS5s",
  "key16": "4DdaRBUwXj8qAYYSJFMuViWFvyUaSqmtnKRCKKrCy1c5YPWUjHrC385qpntUZ4u2WGkkEWdUicVsJ1VYvzNXsSnM",
  "key17": "5LAm3jfDew6FKC2GwpjS3T4U8qxCdWg2MLbJdxSRc6ZCKTvA7nXqeg6KXrSfHGyac9bN1NWbVYznssSsYdtKj6Fn",
  "key18": "3UWsNHPBV862moXDjDrtaeM2pZ3gC8eHy7jnWQjsk6ELLGkMoGxVYdXehyUYnFd2j6UwhsT12hcWdn3cf4p2262D",
  "key19": "DW3xTcL4W64iyoCMX1qtmfJLxKaUMaEfbZ4eQFNG5xdNChSHuELAauQif79TUiLSnD7p69RAWr6dYrgGTcbDoWg",
  "key20": "28cRM4R56aWubWy2NbgPDjosA8oc2S5pDGF8LovNZ4VuQnrHwLtyCsY78v2Zi6UiMMTiRw4tCinNQGoe2c7h5oFh",
  "key21": "5QWE6dF8Cn33vdQuaanufpGa4jFRCyzLLYxTemq4ztZSoYGDNWqhhTjKoSBwta2vh9bFcD63KbkLaBioNgtRSMpt",
  "key22": "2Q4WVUAP6KPcnk4h42ZFg4CroxpsENiHrkN1NLyRcAuSF5q3W8yqsu7t6MbcArow17VsTWR4Le8HethTdZEhqav7",
  "key23": "25ABNb4kh3TW7cUcxJ6uTDJD3MDYxbMwt2ouoCoSeKEYYKmS7y6nu1vkvUCPd6Xoqm1AzZJQG4pCsFqERuxZpUVz",
  "key24": "4AB9bQ8nvAHLrqjTFLupU7TaodkYzB92ESCodfuhYVSeTt5CiYSqP5t5D57vca6WNNEAkhB3e9gybntV8YB72uY4",
  "key25": "2hYepvDXUgvnxBewdzhEkSQDPoVFJg4jVU921ByaEksyLGSsE5xJUtTjGXcWcMke4e7Zg42rPDpSEMcQwNivRkwD",
  "key26": "4wtLseNroCBMa98CcKi841PjZGmvKmzfYvscgZcHtNQzay8bfVyBimBVDYGd4r4gq1eZgs42qgzEz5xyYCaGfGfB",
  "key27": "4iTy1XXQ8czR1J8aVLWEBRqdjkomKsnLVFBpZ2BmBEjV818EeichJ3NNv3fWBJJwfaPMeEDMeNBczK1gUNeRmCK7",
  "key28": "5iEXNoDJZQxHnEbqamQapTkvDfZBPAQQej5bNc8io5LW5BLotfH3ePF7RAG9a4cmV2exuZKRBtPTyhW2uC3kY68N",
  "key29": "5Cy7urRcsChUQvkcPb4RhuDi7sLdBABNgPXcNBzPKfFy2zYAANbAJoDpfa9MUNGVHQJ1aSydhPAUGZmPD4PCB91Y",
  "key30": "3eokNyaokcAW3ynDrfpnVMN3w7khPYqhQKvchBNDLP1XKdMTJaSUAC5w7CrDgHjkCdMsqyovWYWLUVZUEv7tCpk1",
  "key31": "4XaDuUYkQ4iSFgN9NoeeabrvFdDx8HmfXUNWAEzKnZqEM7vSdoWGhEQZKkUL2V4oTvVnp6noMtssY8CNCmcN21WV",
  "key32": "4BYjqxA8qVYYkj8dMbTooSfD8xBs1NXUdYtZTTJwgnYGuQKDqez9D2ytysBZcgn8nJhbULtP9xX6PPYmCqXu1UVh",
  "key33": "3yF7DY2nEKfet4QFPFMAkdFB7JWEYweesYotf6UtysmUaFFsGij3o1aMWHF9k65ZkHB96Eh43LYYZ5nXSitzBNU5",
  "key34": "5LcSnJnEJg6UQh9LKWuq7nBCpZKQ8qUmCJL7D3dHDQkhRdhypyG8G95Sr3P5HD6Pg7r7fQPmXcmnkn11tXpWZcei"
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
