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
    "BrnEFhZo6oMKaUT8wptjBrdcgS7Nab3BWzmRxQm7aq687qatLrfWcFk7QhcrxKEeXUT9MZUK5zwRqUQhuaJb25Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zq9cqbV5QDMmZXF2Y6LfpqMLPntiQRqNZP4cgp6kA93zj2CYEi8PkvPnb7QFuDkif91BdQicchvSDphKtFWUDPd",
  "key1": "3mStVu4UQWyAUzBdCpbXihMA9LoQWRw6LxGENZoaxJqwkLHPd4TM3jFkrQrm5zUUfFR37LQsEaW9ww2HYRDwRSdY",
  "key2": "4wkhgKQtzqBavYsnAk6cvZKsvPivY58WK15uGUj1nzmibBzGaV1WtuMKXkzUpwsYCAE3BPTgDVzRDNWGQqhkX3YC",
  "key3": "4kHWPNPXkqdzFpwsaJPKiqSFvue721s7M51Bz9teXsKNfXoxmzVULdQMKadAFnBMmMn9GcBkny3YLtGgasjiCLtU",
  "key4": "3ro56TkNirAXbgSivSGVrxxbs5F1AgQhz6gaDQxPeGki4Qrg8FMFHUUW8QvpuA1gxZsYRwEaPiZ9RNQZ8Hi6egNC",
  "key5": "2RcVUby53Ljj1r77FqTciGp2udpF37AXn6TMb2mRfSkr5c9CkZ1Fj5RJSdEnKYozBhoNEBXQYMToazQd4MMWS4h9",
  "key6": "2zdxov7uaqvwYU5iGPp2WyejKNzheR3QME6Cxt7vfw3VsrcKYq7vzVxWvsgcMWZQ6bXFasq4PfFoKwDvoDzZ7q4A",
  "key7": "5RfeZ5gXGkyYsAJ1Np8asgomATxDVGtMNBuzXnnYSFdqYHvNYdgWqJJB6h6gP61bV7d2bu2HpYXMGr5sXUDwgABr",
  "key8": "2jCiBKpu4XePB9nGBzYRTngD9jyvyeUDvGbupwiSAYUEZck58j45qRGWasyFj49VeubciDiR9sgNWnwqRmKcfhk",
  "key9": "xQ2C2TD8UZYWcetPVWus9sJHtuCLspg7oHW4ZrAPpW526EZBnSbQqYfr3LnPPv7fsJVTp7s7pMNQ7GXE68GZrLH",
  "key10": "43aPhqCJsewjNaJGNcUpkZojUDZuWoqypS4MWL4Pzs1CaHXeds8z3T6Ba4GGXnNVJYYXURtqeYeP1rc6vvjLBm3k",
  "key11": "7vFX5a8hCYCZP1yC7RAHYzjnvP7PZyr4iQrqQpZCU3xjBfFrBPAbWCaWWvCtU6kEcjB6si7mzpsGuGxYgvR5CnD",
  "key12": "5AjLPziimgCmzrwCG8qcdiTxNa3Neg3XxuTndCsJcioNT7dRXbXktLD77CEh3kd6X5MvWA9P2shCyJho5EboJDyu",
  "key13": "5i2owBJSGZbdDfEKSs6MFZAdtGKRkYJLs5LyMF796pZWFN7WhDtL43FRRC1AAovVfN7mQgjzeJyvcZw3hbocjcGt",
  "key14": "3Fg8sRvJz6fpmMYaM92QQNg99A5bmZSF2XRjeWxnZFEEiwkaWdrcbvtjrpYcT7rj3xNLy965t5hFxfejYb3EfSME",
  "key15": "51Wf973Edui9wDBJz2ySnhZPiWTmJ4u457sRZg1cZLQ9Mb5JsunX2bG4RcAGyxmaw7tG737JjNE2RWZrHGemCHan",
  "key16": "3DFGQnJFXC2ed6VdZab28ExsFrbkFtDFtTSVPmH9vbNCkANBtaMdbugDU2Jpp5CFSW4usRLPAJRqrH4qhDB36qbT",
  "key17": "3kJvQheRmhjMNepGnWRBPhEDs6kXSEiK2qChr73uZdjgMBPYNZWhEcMXBX2Y2c1QwXZJAFGFgchj4XKpQ3FhfjEH",
  "key18": "1RL7GPpaJPQEZgomxmb1QuzoH84CEFZvHjpj1cwobumCWXRCG7eD1KDUc9fFeRVRa14sULW1XfqSVhcviEAWQtY",
  "key19": "4xwQPo7khkvPucE3ZUv4XApLHAV4a7Ft9N1revjtcdu4fy2UEe2wudCjYpiRvGrgF1SFXfzUQ1LMVDmS68Bq6T97",
  "key20": "3VrqXTFVWJtLyxaSf2towRsgFzsYJNMrRagyoDjEvXP6dbJWKLk6DbjGwhxUzLxUEKdYh5LNR7g9fiGcc5gAQiEJ",
  "key21": "3Qx5uh6QYZKdgEQUeS7S4y5P4dGSwMvGMGP79ixiVtUjhiDEmFq64pXu9pVokKYtjUJ1tomk3y7JXpex82kQ91wE",
  "key22": "4f57wasaLqpCq5BqAfScrMwwq7snzBpFRn9q3PSxhLe4APG74zjYtGtPcaK1fx1YG97ufTkrHN8PfxzEvnoz5osz",
  "key23": "5UjcHtd38ZFxkvaRRF1T1QmqFmBHKqfLUjG3H43jKuwS12nRASEb9JeCzehxQWFJXT1JgjgAiknh7HRCQV2K1sgQ",
  "key24": "2nQ2yTE2H4BVZTFM2Retyv3ch8euBvuayD55jjAuPxLYxQccdZgjjYcSuDN7kJc53CHXYYcXBhmNHj91CnPN53xb",
  "key25": "2F8kDBzoYDi9WSegqiKufgcWtuq3RMRdy9oGSidb8mnnNUnDg1XepUqbxWgLbCEUrF4SRwuZV5vhHECaxDGPk5W9",
  "key26": "3CCFhZGw7pAFMiRaVXdwrRDFCWnrFMsq7VwXiNCumm9ii3fdGmBtrD8egAD8B5LPY9fkfcGeT9c43yi9vSNsWyxy",
  "key27": "25ivDoaQnteDZ74aUn2Sb4vUy98zqf1oUNu9if1RLq8wVH4WdEPSyGwSNtbAXhg6WAuGd9UQiTEFnGt42W3dokxR",
  "key28": "5aZPQNVYmZ9UCrTMcv6G33tb2aL7Rx9GZoXkBGGyVxKKsfATvwyXDNPPzwkBnvEscxnS9zZzkPV3hyWp58Dpaw72"
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
