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
    "uwvtkJ21cpe6tMynzGaPYTkXB4S6bsnG2vNZhTRSfTvGBvUX6Q22EUQ8pzbwhrY6KddLjWcds5WZx5UQkEpiAYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JRobK4n44Boq8EsnRoqdEwYCKWvMtZaE2pRcNeEde8wqaWP7Ja7nxmdXzds6XtQVTtWDxviguBWWjTYfSkWCboM",
  "key1": "X4eyxtPPCWqiLKhTNjbWghggeMU9fb3a87i4PUoR23iHpktVFJkBBviTMfEtDYU1fWWoWn4kBNh7Cdumn4htuGY",
  "key2": "YvEG31SYZAkC8Hb44jbk41Qdv2dS833VEch3bEksE4kjXquXGGsQJcAnLerhFhAz1yC99uR8TzoWGBXcEKwrxae",
  "key3": "4RN8eki9u9VGXWsQbht4ae7cvrVG2aBVxDJ6AMmE2agns6kPiabWScyXd6kuANV2EnBAPDxtsZKzSGGyp8vNDzEs",
  "key4": "4XExQhjorPbVWja8SrRKKgAeFDNBps5UF1n6Lc25VjaRnEQRhZ4H2jVoKMcpB4sLiBisHBCr8arpmJg3T3apqiKL",
  "key5": "yyEjUfhaSu4KSpzSf9ruaCv2iDeGayFweK9DUzFt4Pji4DL6WGYUPD4kTEfR11SEWsJG7biiPsnRQ7adqTBDECd",
  "key6": "44BDFGqSkTE79PLSwE318oWtSyGjuHHxjiqYeFQasZTZsXHPq9mZdYxY6pYjaKbLJJtx5omaZJPWNHQxCqENf9Wx",
  "key7": "2ij8ezPCmKTsH2PsstL4jnzhZp3b7vTDEnX2NDe8MAraGZ8zeQjYXWYY7BDaBfs5fwfTW2L3se3rzUVF53QfN9yZ",
  "key8": "6T1zuKXMRZeQfdzrZkDncx58qjE5y8Zuta21CtVZwxPtGFhMBmXdTFWwK4JsFWHtU12Ze3eXjNcYhU97K5LJFje",
  "key9": "5fPEaA4MGLWCQ4GNFaaeGubXA4EomN1pAX3qMf8zdCcfwSdVQvAK2YnfuuJo5YZnjatoaRPHNrhgZjrAKqUmN7V9",
  "key10": "5WEsHdeThaEYcQMtec4j4mtqswLg57zKfvYAqrvaFBUbkiW5vcweNHYWYjytBg85mg44gRB36NBKKgERVyZ4UxcF",
  "key11": "XMYSY9NEfjNmTFzcjNT4ZM95M3GAiqJgE6z8J5yq3UfHVRpS92njLVRFfy5TKtdkXB2xDib3a2GT45fTY9afW5W",
  "key12": "3Cs3QfHjrkW76sjyXJg4JHXc1ZuMt9n9T9tCTQZLPzLWfTC1tPYuFX2io98D8TrwxVCGKN2VLuHMD4CxKpFVY3m5",
  "key13": "5uNDzwFFiVzuufjcDYPTYCYJ6pQNQ6jVUiatVd5fyKzTp5j1GBi64ARbPrfmQbKGivVXBn9t8Xkp4x3nzhagpZ4c",
  "key14": "2B91CRVawDQX78kfBQSFBB6bdMg53deqwQEqMFTrkKoFMNcXcKXVNnqq7JtRU9AS2ZqHdd85bKnZ8bwy42Vc5tfb",
  "key15": "5Y5RevjtyJfQtf752TMGdJbCSN6ToSEdB63PMwLjyZEMcuXzrDjMTa4MYrtyZcecro9AAFHXHXcqg6tCX8Q4ZtCy",
  "key16": "5T2DxvaFP7PdYN4dcU36dhDTJGrLj51X447QcPcSEsAP5h63jQnys2io4WEjcPiuxuM7npT8RGk86szHhNz5iqAx",
  "key17": "2asmKTwXSX8da2GwbnuvzAc3buMmZSBGdJMdTKRrFNjAUfp9hSA3mAPs9zddxVQGCx7wk7LUjwgQgrjf5UH8y1x3",
  "key18": "6Caw1YiF3sDdxyMz2BLTvkKgRGMwFYiAG9qjxx6YopLs9YXvrVLrGU9Mt1kAMCTtaR3a4zUxWgxd8z7v57T3DYA",
  "key19": "5VQBzvcYo2WCvU2uUKtrLVAGq4ZJLAW8BQk2DHLDz2PBmQDKsGefDH5a7dFakCdYxdALpzQzBojKDkRaEwpNvAL6",
  "key20": "3mnYKZ4gLY5ZyxoJJQxM1GoMVpX1j6jiaCBDpYtjZQu8jSS6JKcPVjQoF2vKvhjRP2QXMFNikeByPDTqoLyDUUyk",
  "key21": "4484MtCR2dAtEyt4cmiYzFpobqMHKRbQVh7CS63JNASZMn7TzKTFrir6PK194rYpn26EoWY8nzHCDDhG8YunaXMR",
  "key22": "4nRUiMV7Fyt896xWz7oXSDfLDFVNGonx6RaFzkHfzppWijxrAjZZ8ZfD375pHvws7WrpcsJ7VP2erszNguQ1BVsZ",
  "key23": "vuSQbs4UohKiupqpG1QskYQEB4xZ3jpWfpBCUzgg7ooPL1g734LHsqz97bxeJ98MYk9wVTeQ5xkASkgubKkJnJh",
  "key24": "2b1YHAwUPVixaAJmdrgPGLezCE8vmzLDp6ANkgDPhQ1hfWgwiycotrrhPDpJ72DE6wdthKqCFvyjRSdjKaMCGfk2",
  "key25": "57QeTksWBf2auca942DoxPP5wVg913o65apUPSKphzq7cAMrWGn11ECMBniecpT77RwiKqDb61JngMwgn67MWfEW",
  "key26": "vXEcyFnW2YeRSg5g253bZ3vx8bHe1qBkzfwySBEXeaacb1SfsFFwaEDtYQ3qjY7vEpS2FFyFPa2mXSjhfVvjH71"
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
