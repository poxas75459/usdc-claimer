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
    "2HCwab3J7iqsfBNkAcrDRW3JD9ExvMnQxC2xumeY7HPKgPDsHqD3GPGWsJ1YA86fTCTxR3gTXsnYot36nbgSt3jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Csc8ZpTYC9Km3aBPGB5uxZC5Nosh11agCXhAgmhZC8H81B6EstUWgKzKPFWkKcutPSc6cxYravEx51xEfHwZqt7",
  "key1": "2DWBchmSFmXvJ48pPcsyAEpjosmNUviG3LJ44iy5KSKaVHZxHKvhRJD11ATJGn17xLdwBV7ettCVSc6rYS9PTaeP",
  "key2": "2HvmDzd8ddsmxY2R4vUhCYsGXm5LgWrLDMhFrZbz137wA6GMSimPn7dXam1fNcQyoLkaCCfjkMnGME7GEt3ydi2L",
  "key3": "4ZWhPAKtrq1ftBuE3RG311aUyJgXWvdBbP22zYwHszFv1sFdLF317SN9jSD7YrfCqDqPjW21tU1DUBEc3PhWTeX6",
  "key4": "3qCBWUZgr136kYy4BXXRMBbskdKCHyBzrAPPfXV1FMvwdMrrVPBshc917vu56RFveGfMD8rm7uKwoUWuSjQMcvjK",
  "key5": "2pvYzbBcJbcV4S8uGLjfqcAuzZEypHYcAoSq3TasJYu8L6BXagyvE63xxc5D7dS7bf3TGBAaSvEkN5T65cfcjd9S",
  "key6": "25x638dPCcgxF35UFci5o5YXF4CNMFh2yZuduLk7fKLRtgAoPT83eFE9UJ3sei5yCos3dTtrDgKjVo974EQUeEVo",
  "key7": "2Gzyc2kghACaqrnGnRs1p8wN9jLgcRTRYuYiKjDwsraj1cENnLGcmQxPPow1XA9MV5NdwD9TsS1KaL3RQQmG9Qpo",
  "key8": "xcYKGVs6bZn1nzJRYoJxP8KibKm9fd51rbaWhK7VLSR2mc7VB63wct3vx9ebyFYDXqMaZ9Rt8qKUj4z2fWNga98",
  "key9": "4vdF7d7dothNe4Soz7WzmQseVnLSdWAYU3RjFRNALCskXgWtpZp1xGPD3p2PUmz5HndU1z6PmLptWd9serUG81XF",
  "key10": "MNcYLUgDFp2dmpYWyV2XkKy13BdUNAh4B1m2MUfi4uGqVjm21XNQTb2jqxhBAJx1rVGYaKMcawjmBTDXmMWWyA7",
  "key11": "2ie2vJeSc6qZjYfmstfkdC8qwMnmGSLZMgeg5YwPuxy787F9ibkt3mCMKScspBHqUzmT9Mm4xFKA1592ZGQh5Smz",
  "key12": "KaUUHb5kBhFobD6VgrRWA6wAdsxnksKPJ52WwftmLPmbLokCEc2xxqiX11ecUN8vNrQ1RReg4wZNvZquRdEEok1",
  "key13": "4DySZ4K66MUuE49rGdimeunjjhVPXZcHM8qiJqg1mPd2CQiPt425rNU6JNKWhx5SD6c2Se3zPqsiEJhMbxYJqEBe",
  "key14": "2rmSVQcWBYSFFVcqDLBSZ4TfT88gSCD1xgDBLBMH1MqHdhZKFxtGyRg7UFA3f7mR8SmHTkdC1ciUfFEuF8Mg4GXH",
  "key15": "xJXSZrMJ8MDjcVWsEU9g79j2BWigHo7ZmZ87C283ofSR3qNVFUqMcsBPd1NsttBDHAWUbG5q3A3Wh4QR57s1JKn",
  "key16": "3ctcKTDGSW96n9R8UJJZ5mMWTp7oAAVvCRVNApHQKRf4DWH2FQnoQyzc8qfheHTJ7scNdV6mMkaoZ3EG6esrsXZA",
  "key17": "Ju2D3zexwSjAcfcdL3nXVEU3jXNdj5fpWDkkgPanxLV39XvMHCYSDMtwJdnL3rZXDW1pcNGEAGYYpQ135YEBkSV",
  "key18": "3z36C1zzFUhPprB8WrYxHyeEq9yuHUu7pwtvbK1QEif6rJWEPaWEyVPJdECPotjGYmPfsEjXeaeQMtSJzDsVeUvC",
  "key19": "5WaE6ingdnwySiVZ72HRRHNos2KmkodiZbN5NcVirhRDJtajAuAA9t5vQF2MyfSWzLZ62fvgPxcBoNAUgctDvdfJ",
  "key20": "5fBpWzc14csAo2HJ6pJVYb6M1XgYtUho7tqoNqQM7TZ7gAWuK8SNzBisuNee51MWodVHV8pV4RgT3sgHNR5ST87b",
  "key21": "3x7qReod9vTtA2GwNwbcHa3FpxQx36CzqbRXRSgH4HPQWSsGdk3scwzBHWcZPfufmFZmanW23YZxr4Azh4vM9JmF",
  "key22": "2yrD4zcrmMNc6YpNUPhTBcafeoz56oH6sgL51FMuavpYE839CoFubrCaDgfFB3tyM5dAxHqpB58nQA5mkag91Ldq",
  "key23": "5dBMxq4SQFW44wfoquerwWRqGEnoACAmiAT58GuWcAGb4kFoKCgwwUHQX4mZy2GKNXviVa3aVhR7jZGY7x1tHSVN",
  "key24": "5ZUf1NvqCSM4q4W724pk3ew2qjpMLp3TBfkPwhrPFmxtwN5tqRkmZD6sCtzyhMbJthmUUdznJ7D3vynkTuysdvDY"
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
