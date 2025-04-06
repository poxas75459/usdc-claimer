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
    "3HL2BSXMUXZVUo5Pge3eDfDs9J5z2VnVktT5hUNxkgHvneFs87nXbPeiGRfXFQmUfgoEhVqErSnVgXarL9i5XF8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1YyGSZNe267nXHtWcdgJJHhSMP43MucTAt2KdfgWNsYkkRuEr1MRPLzom6MwJk5NneEu2xh2LqehAZPhVA76n4",
  "key1": "2gmEShaKmLUfkihKiX5aJgmEqB7LM5dmPfpeH2VbHrPgC2Zss2BYWJmzJRSWf4Ns7XCxS6mMaPANWss6YvBNVo8g",
  "key2": "3uN4mzTdRGGqfEbABVyvzmUzxLVkz8p1SrHQVuf4B5J3avBPgpFvkx3n8MxKTNAAzyomyh4AhVxu3erbYp6zpT4w",
  "key3": "4zs6kFegHrD75TpgzoeXR2E5ShtngG1RoTypWNUy6aa3NaFvtWMVC2egSRSeeC1r82jwTHt1Ha2JM4TF1uGCVeuo",
  "key4": "cwu4vqVkqxswb8rw5rd6nwExg51c2UjabXTvsUjAqLHK99KvLtzZ8dMiHfhtiAcvXeH23tq3eVR9kHwzLCwVr32",
  "key5": "5XqgtP5Tk1zqh1tAuAjYSZPgGz3Xw4T1x9u9LPCwgrSkmfQ2ot72SXpn11M7iYVPgWcatxZDevpSpHs63e3CLsCW",
  "key6": "5sTaLJE7BJiD3Nqp75TknE4q4tKHKxR6iVnqAbrpwozMGa9reh9B4w8PusXaPNnEKMUPo6RfSUqeAwDFgEfaKE2K",
  "key7": "31Asvbhje87NJ7SqtmqB6UReG54iYjLB7nfvNSbjaTrPjdquZTYtcPpPoxyMWASweJqY452PhGdXubpuV3rgLx55",
  "key8": "3ZqxowChkypJhxHQ4KcWUVfnMEowfPmbU7j83G7WX6M5MHH9bgjqYvQVE2CUyiP3zthupSHCFBRk8usu5K8ihX77",
  "key9": "4tijh8xzu2pJSNkzcNyMbTvsGNQ4LYW9NggaucjkCpUvMi3qCwB484J2xUdhUQkvrMT5w1jQLdSkvgQHtTgqi6zc",
  "key10": "4eHx1gtBcFB9qsrvSBg17hg9TArDUiuj6MZZ5e7UkVv8w8oyoKGD2hmFBg5oGjXdVUSPedLhpqfcgC66cyZryfWs",
  "key11": "2D2kCWQDrt6uuFdnRR8JJdovfvHRyHLgCnWqULe9hxAb7UEVPiVShYvwi5wRhhwahcb8qHojtY7yoJVDW3ZWgNAJ",
  "key12": "3JVFtCE1Wm8yZe3fRxewGKg3zexuc8RFyprDbouULMsbZQ4drDozq83qn9CLGJ46NvCv4sUHo8aXM26surNZUHbF",
  "key13": "5Tvws4kFyAcahWzYXJ2HmfemAtibRatq4K9zhAMrJeRHpegFV7L9uRg3RZYqCAZ8forhNiDscA3igY4Zvq59Cape",
  "key14": "34BURWiMP3uSXrR6azS8z3BVcC7VdarGEJAScFxUxLyPWDMWoEVW9S3t146Z5gDfsCTvVR7KrmiSRcDwxmSCTNYP",
  "key15": "4YrHUVk658NGSppD4afGzb3PdRK1MHss4Bqr5BUuZb8tTivMN2SCdS3uuvqQ13J98TtzDe6tLdexedYdsh5NWDqi",
  "key16": "32Z5dUZhBdG8kqbo4GpSeMw2ozbhRgxby5ZuQCrztwQ15G8xkTWeM46kzBjQjL37qLCrkSQEdaWBhMVEMZQxwqH4",
  "key17": "1GJFYqEjKKnXnApKLRoLRirteu8zpMy6tGjMKUPWzQoBj3mEg642Zr9u9fKUfKZs5eQDFQetqePeFtfytE6hCP3",
  "key18": "5cna5ELQNhRCwiTAWN5Uz5HZcEgFrbxYSDoxsmHdJ1uJiqzsenZWkZG2mDBbtWvruSoF76qrn6sVKudCae4Ravc2",
  "key19": "3RAMtvcXij4hCmEqiZ8g8E5bj6cn6ftkSr4sSeyyKQHdQSTbkVD5ifZqgZmpN2NruEs48zoFJwS2noNZGJqHz5YA",
  "key20": "3FsyGcGwQe2PS3ZS3DMRNNgcd9bcaAX5iYPu5W2tesPaHGVG2W2DCNwUvUrCZ3UQjC8i7Cew1ihCxRiE6f9vSEan",
  "key21": "124AXwgfRRy7nPfcia8iaGbU832bgfJPwz8rAceLDt7VVzZNzRyeqos67xFX15sCtTJiaMBprLEL1VJm1aj9xgVh",
  "key22": "3zigmKDX2FsEqsHQqv7ZqGzT1eYgiKACDDC3LBp4zjJmcsbpAQ4D4GwBhDKYFWAHFeiHmJbncQ2ZJ173y2A9b1Ez",
  "key23": "3Z5ZEZ5Psn1dh2hgsiuSanvSUPiCjfirt1XBE6cNdPyyV7sHaHdqwkd6Lh5eP5GFiwyUVcycyVG3yJx5bhkAh7ED",
  "key24": "32gpWXyoSCQC35X3i7YypxophwixAPLs2nm5rbZ6n7vNDU2YYRExsfnrz746uifLve13TLewFJo6LESuCWGaSEBn"
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
