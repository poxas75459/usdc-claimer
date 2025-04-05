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
    "36N4V89FKsn9wb5AWNFdPAr7dTwqB7oxHvMkehmUH7JKrfbKszj5D7MUSeTJzzEqe88N9Q4NGQZgmSnM9nfqnDEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENDvtCK58wXAxy5jiaXHbqr5hZTs5z9HRqZUmpFtcLMDQqcPRgjssja7kLd49aRjjhy84R8HfWm7VpW6X67o7uJ",
  "key1": "zs2mnK2wegpJ6s9CZN8Zuv7xyn4p8PefbrfAaSjGGrhrNnLmKqpebdvwBHf1q55nTi7LtAZh69w61c53bzQ4N4Y",
  "key2": "3eHeWqN62fNvwfKF9sNC7eK4ThHkGMAFApcLBhv4Zy1TfTsfusaEnjcVTMy6NNQqKAx1arrC7jjjKkEXWtohBtra",
  "key3": "2LTN8hYAz249tKYkmqyay6AC3p8VR6wvxZTamZNotbqwms8pWua24ZuN7dp5iTv3PFw5d9ZSvynDyBdde9PXGPQf",
  "key4": "2zHMae11oKxZeeWuEx6GhoDkzWvw9rHdXnm16cL6vL534qUZterzGRiypYC5qnD6scFF4wmSNajZ2sF8UNQiHELf",
  "key5": "2HBJPtPJ2uTacdxcuRRKz8rY39sZvFGkQtQP25xuP5WUYPyQ37LX2rd6VHx1H23Du7xTZ4oe8tcvnSW8tp2FDGyF",
  "key6": "54A3By5259ZjcmdW2J48rwpSZ11n2EdLQy5ytDTLeZVXcpgb881r9nWuf5BhDhySepfXCFFaRZJ28eQsgtF9UDbs",
  "key7": "5foQqCgZn983Mf2XYEhXjgfwocpdYQ5z1fx6jUCzUNhmCyT9rGfgTuMDmeUKgFDp1eotZtvqac8zP9JVDRetqd6V",
  "key8": "5EaefJ3dopJUGd2QPLirbncVEi61FNqQU3T9RyiyWpRfTtXNZKuysYNpZhPr5aJA7NyzXR3bvBWACu9WGLX7P6bM",
  "key9": "2EqZA6PuNojZLbEC2ZViKAXFeXZgvnHZvuYr6MjUQEMprbFhSktR1X5DbPMHfX64GRi1nWWaUyxBaopLZ9zuUvKB",
  "key10": "2BY347r8pCPXT8AQAVX77BiV6dgQDGC9T8ChTV8N39qvg5ECuCN7VpQwcA8oyVNouaQEce8mGEjEN7CaHXyxZbBW",
  "key11": "5kzHqxYZZpnc6jUWEziG5G22JQsaj8peVPtgTxiGMfx22thz6LuV9H5r8qJapFX1URKuEeSw2Qs2E2a5gyUCJaPo",
  "key12": "3y9feKkQ4HQ8hqN3YTyH7uzesfipF2tn4EkC2Hvd8c8HpmiEerjsWYoUGt1MuxtwFZDxEu6RqrLWGdRQZzcDMY2C",
  "key13": "427Kzwkcc52PXcnMCQ3HjuG5deerF83b5LPshjkrx3KFe57NXt2d4WgLwrKYcVWY3S9y9pdKNkhChhPuMunKoPXe",
  "key14": "8fe4PqZN9fX7n739fRJtUkGUakGn1nFm6mY9Bi7U4gdDQRDt1gVFkjqPouuyPxaSjinMsH6qBvkBMoScY7tQcmJ",
  "key15": "3zRsCFAbkGgwqpsT1zyK8mZUcH2VfsoXhJRDgBj3cTer9Uo5ehBuiZSrtmf2UUZKk136G5rdhoZqMS7hC2EgJauj",
  "key16": "5o7eYzgR8YaxHstNz9fFP6rAzTjwpy8nHZunpnXcW9NaJQXAfqLyBapT6gynCxiKnr61ep9ma1ErhVUC4zuAC4P7",
  "key17": "2t6uMv8L8Tt5oxApdKCNhjYPcw98JFBznQiun1ZRe9wCBD1vEodwg3AV7PjAHbbWN46KfAvLPQmxC7e8HnGcb2tj",
  "key18": "21LQ5e4TjeYKXteJ6c393yR5NYueyzU4nrj4DgjkUeHTdno8NQS4sjVeS9FY4fFzkVoW47RGsUj5dayxhiD56QWE",
  "key19": "5ssyTDwcT11HagGYbgnKT2AKuuE4d2abLa3p2Yfj4NhLfGSE1agEXKF2rzTvwf5pdBagMdDDa2W28sxqsQet71ks",
  "key20": "wzb5FHBqUWqjWMDw83XHnAVmmBFqTEHwJKrcYJwnii1Zn6PozTESbQGRkhrBsLWcTv7bRcfofwTnkTmGjynBTVw",
  "key21": "4r7Wx1VjLHstwM4Vo6qJXoEdmd6rY5LC1pAXVx38tVus2BNVHubYeQXFiDiLuAm6GX7kCCucNC1SX7rUdxNWKBji",
  "key22": "3gV7NciPzpDVNkh9ntixPeYDxMTVWqqKkXbQTBJL8pnS7vhL6Tkuix24Wb5FtvbJ4t3BmertLB1FEtwqA2h5e139",
  "key23": "2mysLpZi2q3Jix1JdzfiBdVquXbA8deuXx1ge1TLmfGUeSXhcE6oyisAcQa7YPCp3vNVJce6hPh57ZPjcrgaYSNs",
  "key24": "3Lwqe7KEQVM95n47LRcLs7GfmS4bAyJTR6mAPDsTvbsNiEbtGWw2B9HzBguHVba9bitp66Kk8TzcebfZ6pjwEaC1",
  "key25": "3PPD9eEyQFbb3j39hSeDokaUetyuncnYFcXrTkTHKRSwEihugBfkR5NY1dXJ6jVzStky2rPPCUk7qD9XuR91PUWW"
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
