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
    "52vZg8qwTjPLsQZTFG8tPx5H3NVghgj9ePYgHC8cpgA3tYNNgyaT3jZuYzxsJCn2DYCC9nYYsHa5o3TCnZmTtVq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBxK4AwVZ39kM4bJ7NHNkwpDmhDsF9L6cjZZg32MLdZLBaYhTVJEJEgt7TWUh7ZYPW6bufNecrZfwph4q2w8nWx",
  "key1": "ydb2Bot3ZcFXJpcxkpgo7w3MM8bVXXuYdhBwMH6iSs6qc6sYC5zdoxb6udLTuni7uTySRWfkA22SLxdo24btWR5",
  "key2": "V261prvecnVJjviReoV4mpQTrUsh8rDRm2dZiCxB13QmHUojn2Lt2HfWjZDbgb6cWH1JfWHSHxV9VWkjr56pJoc",
  "key3": "4iHyo4wPMjPVEejNUoa5dqizhPHKY7JGDcFgAQ76qYUgN2vGUg29GEm3Xo3FHdJpKHPXtmcTfTpRN8PGMVyHbWgs",
  "key4": "64AE8MqwdpcnbwHt3ixn28NJAHFR5kj4BQtFthvgvmiY3aZgywsHXiaJNPzLqErdhFvYrPzr9vqhaAFHdFMACB3U",
  "key5": "sv3uh8unQw19ySEsSrbY2Puc3TeryxhHFVb46G5erx7k1za1qojZVjkcitqi6htyVAiAt6pVkwuHrbfkZCwMNCH",
  "key6": "612BMksZewy1PbE2FGMh5dpArXPP6d8Dk4h1QBfne81ovNvU7ipKUsXEuf94MM79TdLGCSERuaRTqoXLWFk7DSok",
  "key7": "5f22NNGxTWvMUWiRHtHPLcBEqoeRtoAjX7zqxwWsZsFbFqYnzgiYy2LVMAYZCyjN5YxFuuQ31xvqPffamTHw1ebT",
  "key8": "3u1e33cQGV8HWFcsUyqcFhDg6w4jP8B3b5Pykc5T9SatChMnwUiPUniZphQKy9thzndkexC81mSTTgA8aMEV3rmp",
  "key9": "4JTgn8g6C43riYmbW9k8bBa2TzEgGNoXGUuBabdVafWotafDc168nkovBDxc2ZxjHZpMHMCP4SsKRWfSrbreFmFS",
  "key10": "34oSVkpHqgSwMrUNXJFfWU69VnC5CeQ1xCuXRxb8MUsCtCdxQ1PW1jjeQSuCnc8XhnrC1QHnf3LHgJby2xg7HNoj",
  "key11": "35zbVJa34qCij4CpRzEazaxm16phmPKbGfjrF7QDpMreURq9m7PvA7oJrzBuusBEGSSTYgW2YdGRH2QGdiKEBUMm",
  "key12": "r7YMfhSdcXyKBVWoGMpUDWRvYPP315SJwVnFmGDU2jhyzTBXgMtQ3S62CrohBJcXXss3wWhh2uSEjhE3XompqH5",
  "key13": "48bYiM6evz1GrvCx3jfD6oEkcAK61SjvidH4zh4W7Ng9RjB6K7pzfcR17bjmZJt1hsjnfyEehLDkmYbbbXWPGqiD",
  "key14": "2SCvSdURRCrHi31nMSEwt6EmYYRKS4vH37k6Bd8beECdiKKWu3C8xZicF2fjycuwtrywhiWP1MyQxUcfPXuyfTjd",
  "key15": "4wvbzSByj9Bgp1y2J7f5RwaJojTwez755meit7fYMXvJtuSPwmmD8nwiz9KX598G27cfa2smJ9pTFuV8cJ5poPTV",
  "key16": "5HrGGnE7rFhC3zZNa2dLiLJnvKdYnpaisgVCYAsibPLMjKiHejhqEsik5fnLCLzgbrhZWNoDGrZRhZ53Z7v8dJGE",
  "key17": "4jGTWvC7RQfqhs5EYBng7YUd6VymnQPFJzazrMse5474PXrvFUvBxQDDiozbCFuTxFz6a8pLFgkf3LZYnBsagVGV",
  "key18": "5QwRwMF3NxRdqcvqCa5KKE7Z4vfNUpB15Pr252CDM2AMH1ButCxVa5aTbYyCAADKYUC8vDxM4B6ZEsFbsTx44DGa",
  "key19": "MCccthuVnznRHtov9ATGqyVGckfTQzZaP5VFoFegwiGKL1krhaZk1jnVTWRPoQtkdetLebx6FMMQNggPg2Jcta5",
  "key20": "22JPPogLU1LFgmzBjBPt53W2eSVhuRSDuVWxsmjSXXAJsTdfBUGSGxRkQdEYpAhmjVEqoqyRnnG57oGHL8LwXuJK",
  "key21": "3YuA9FPpFsuXZ6zi81pqBjbkJQfBtMu4Cjausy8ULV8cBViLhQjo1K8PgDrGkztZn4PCPebkbh4hMK4EuofzJjym",
  "key22": "5rvQJZuGQovcF52ciG6wRsExiN6GkSVDo7QLeR1AEc5aLddbWyTRQyRyQBLxkZ4vmAsSWPSsJWHG3vgt2GujwHQk",
  "key23": "kCTQc7AC3rN2Mao388HzM7xa4GQ6jSJXqzem98zteR9QwxQPDkjQkAduQzYrT4r1qfHmuEe9dTYrz1nwFeZmnU4",
  "key24": "2TNcqvA3EX5ncd16Z9SadiYPwwSiPP2MAXZQFLvZ2i5LavsvFaXP1fMZ3Jykwrj5G5iUXdrcdW2HacbEmNrtXCay",
  "key25": "2X5uML3w16PDB7QiaReD3c1CJXKmCwZtaz1KcZbk3ZDbE31MQ3A3GbN3hCxEMJRBwAozUheWCpGoSn8xLEYWbZWU"
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
