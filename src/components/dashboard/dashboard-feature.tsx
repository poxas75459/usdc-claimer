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
    "4KUB3QpJsfGu1jEBgRMvU19ALRYq1LZssVr1nNVBZcgBw54ud6KU18d8BHNdtS2W2BpGGqFxBCJBBQUg5fxy7Zrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zEy77h26ikVoSED85YLZmqrJpD6EdZCzUzhjBUZbrhsjNCW3APgf1zD6cpfkq95eBnNaswJmDFRyJ3N8zxXyBtg",
  "key1": "3jw8hhSJF9rAAHqJ5K4gEFfWPRaRz9Dk4GQyi1agiLsgroiG5AvG7eKvgR7Qcb85hYbSq8XQfNtEGLER9SNxjXpt",
  "key2": "Li9t4Um1LUhFc7KLGPDAhBVXVdQfoAyC6Lq3KeF1PAKyrP2Jsh43n3eGhjX2e5jnZ31oZ5AE7qBUGVBHRn13X2j",
  "key3": "4rSjyQL9tEUy69whpQcvGaKAtvUtDme8hSkc4mMajr9J3EeA75wNjTS6YsHMoNcrjwasKmDW43ZLha6iKVTnhepV",
  "key4": "51neQcNJftqRWbyS28JGXkddcmjXNT33ecw9doFK1i1Yw5t57zLpoJWSJHBjcwaPp9kaQ85o7r3yceUcMAW1R8h",
  "key5": "4XJ381SRRdLHPNoENYNZwpXTRgnuLm4L58kSB8Kyx5b7R4xRmYxDsKt6gUrCxLjQNpPE1hprLdurJS7PpaqjFhcg",
  "key6": "2FDnsvjKpBkL5ALux9He9rUaubqoSmomwXDWHHPWs9pxZo5RtirJFDD1encYK3ywx7X4erXQ9A3DqRhDyKyHq2wr",
  "key7": "4U2AAF7CtYTy83dW5EjgL2XWDmMh7CeJ9usAcuufzocJihivD7quatg5B3oBVuBXX7yrwENog3rXqs7vpQcNkrQS",
  "key8": "2fJHXRZbsiwGTVi9QM89GGrjrfsN8DTThCMHwd47Th7aszQpEj8iqWeDx3A43rLLS6oHorcbupj8qSkEALRzzdEy",
  "key9": "4vA7D4vGzShAtKp7qPbB8eHxzswcULVtKJMbPKU8LPx58ekEEhN7uHg9FnzuPHrZBgcabLcbjjWsNR9ad2zwgCiU",
  "key10": "nq23otVJ3PwDvoRoH5hkcVmWA4i1SG7aiNm4hB4URxCAWeju4mDqGv6eXA2EFR8eK4xWNwnGUEEqLEEJ8icAJhS",
  "key11": "2vA6SH2t3FbpvQU3Gxg6ucZEiAm5uej4RM2jfjmjmwdT75oa8jYTaN3mYfP5UpLL4LwxQqJpordziLjQQfN8Vmre",
  "key12": "41tXviQLpCMy9S6YYkF2CVHAxFPZCDoZpBdbrzHDn4Zrr3eQ9ij8wq7a6VjDtuLzQMpNdG8dMRCPALCE64oDmFNW",
  "key13": "3UBHSa61Ldy7SyiCXU8FK2Epp2x2A1ScR7MDgA1FFLaph3mXwWya8zbCpu5LZa5pGjkGSAj7L358VjjJBrhuEYGX",
  "key14": "4ZMVATGsnaXXu2BXJZkD2xyd1FH6MYpHKzV1LtUQsx7z5tZ2U9DEvhX6u3oVkbZLaieCuJEfg1MPXpoiudgwaT1h",
  "key15": "3jLLU1BbAn8FZKff7rMm5aQ3Jbcmrrop6o9ATV2DYYPdyeFWn5DhkP5EQ8FFLB21R14fbVtXhv6ZzgTqWYhK85ry",
  "key16": "4AFvachFThE7VDDBAiPDkRp3Up973nFq2DmYyagKdUhb51xVVy6ATLSsjswRKskgh3GdyAi6cG9BdpkAwJ3a5JaZ",
  "key17": "5MyvK75ptA8CSd6GtWtZGkwQNizafD2NLbdRPkYPmoUb39fvUR43Kf7SUEfzMSKCzR4wmCuYdE4E8AYQn1tutfHj",
  "key18": "BH11rb5abjJPt8RvzhJB3WHQXFjv3Xgw1gQqMy8RfvnrANnms5da7XHJaPLzCHgnDZZVLH4JSqiDbCtKRG9V7Gp",
  "key19": "65ZKXiNatA4dcM63kPspZSkibJFfdAyuP2KKjcwwa1aBZ2rucZZQnBk2wYLt7CNaLMEbae2WcHhDLqS38y1aiuuf",
  "key20": "2cMchqrzqnJMhFqcvrQjTjuzWYZYHnfauQ6UDVXLaATada84nQG33Eun7ydm26Azrttoz962p8YAHDN87Uuz3cDF",
  "key21": "5w18KFaBLV9GceDqDTvBrcy6GhH1gVggBCdfhUyGXzXqcG1F6SMNArSMECf3tCN5uPTkK9MipCMEsXWpj3dEuKYR",
  "key22": "5arpsmpD8e25q99MnLuAV1xtUcDribC8JkhTcUHjM4hoB9Nhe2tFb6caYPTDgCTHajcoeUAGE2Zmc2HsZX4Cgs3n",
  "key23": "3fkinBRRzxWiVNFQuxLpwWeXzZiK13eoJD5jw2jRqGsKQhFkg4S4UnfK4qYtbsqqdrbwVRb2jTLbdPWJPXFXxms5",
  "key24": "HqpJTCPfE3phwjHFK9mrNjwzQj2aqKgDRKaAs9BksiWzHFtGDrqp8idvdkbadh9ChX5Lj5oxzUhLTjvWLypyXCn",
  "key25": "MmXapTQiF46HwiadEXsghvSuWR9gP6fpyn7rbMsCqak9ZM47zKT7KpgSGdBEsTtN6aKxw49ogqZiKUrAi1Q97Hh"
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
