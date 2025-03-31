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
    "2MF6adCku2V2QM78sux8FnJdJYwMn3Sb1FVvEpPvyv88My6svNGF7my2N36dMhCs6LUbo8T4h1bgGybGYf3Diyjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54tqWLsUhod34AESLdGHWe83iToZkz9cvDwoWaPYSXqkknpH7LFqpj3FmDepcFgCXAuVTwUkxZbJrvG89Snvg9s2",
  "key1": "XuAso2acHxiCVD8vRFDSxfm8wwpKQRKJsbURDZkXcP15jgAw5jDU9e5sBvtYWpAUkBCNt7f9qtMR4Bw9cz9xr23",
  "key2": "53mJMiKnVGUSmmPqW7293FG5W51BGciQv96HaosA1Mf7raPAD5itXvFaxvotebJeKS1v8K85i8WMW1rACEqjVY1F",
  "key3": "4Z7F1FJ4MKAZZQH1MAMwZazQmRHVmzZ3bURGdJCGaasM6BKUQ1oguhRpNtSDLuvQWQHjV2T1vrvNqae31Kjz53mn",
  "key4": "5RhwbFv2Qh2VCmKFe4Vb5joHNxUrZmbdVDxz95M6o59oNs7ycRXk96457LSDmVq6ubVEHB3CEoFNd544SD2LxpJG",
  "key5": "2k2TTUTE76x9igxVJHcbhT2ZYvgSt3G8uDt4349x85ubcSKveJAncuSJEUnrXgxSUwFqfWN65peTdBxUCkp1iHYr",
  "key6": "2zhf8qee8xHSstAmxoaaTmQ6vuPDEK4TyDDK6Jzp6pgMoHmEbkdHHhsSNruez2oUHPEHR1jXvDr37mbvfaKnphQr",
  "key7": "j4CW2c1KnxMnzTVPwg5ceSFcHFmmf5sm1ME9gVrznLESBvvb1nwRDCfrvFfJ22Wq8xbKy9Pm3MmY74W15ENevka",
  "key8": "2pywiMdwYnVNcN334HkmAZJ62BeDgnLqNcHZUsxMrkPmpaKdxQAxadvo41wPW2K8xv1MPit6iA3wKcy62chBkry7",
  "key9": "wB76cnXeheui5vhBzKeuHEkBxxXG69JqrowL9L7sEA3oLr8HYUVC3kJNK6n4nygYVTNYzKnxpKAWCD2MFpezpZx",
  "key10": "s62AHuXobv3xtf6vwzAqSSi2gZQLzkLL4Mj3BDe4EoeGGrZ81uaRJtUQqCHp1SvVgsANu2dGmw657u4yGPsgS8g",
  "key11": "EtRdp3kG7sdXFSpnFcpYBb9sGvYght6K7cyZcp4DuvbiNPRNkVQWon8kqs4MY4B4sSYrBqWS4ntjhZYwLpaG8TR",
  "key12": "5StgeiufeSquA2raU4T8WhT3SmpY4aFDRxGZ1itZa85baUvVHz1JLjhkdpU7yMroEFPbMrDMWzfwHKkjm6QP9A75",
  "key13": "qbfy8ZWLcLo7UsqVehK2PjRjZ96rjmdTeQfC1bbWUWVrAaw6DxfwU744qSTe2HNWQH2UT9zdtvCmaNoNmFb9w3f",
  "key14": "32dLcRbmccicM7zRt5Ln5mHYThRq3bzJEKUdutoPaGDjyTqW3DrLNwJwTgs5QqvQ1onDEj4QWcQ6dvQwEKLcE2gj",
  "key15": "4ujPu4CTEiMPcCBATkb3UhrqwgvNRWK79vgYLsMwcdrHpVmTxMNidKQ35TDGaDpA5NkjAFqQsPX1L4DAGkKtph9J",
  "key16": "3argd58twoeenNiLjxKDgiPwU9u8m2gQUuVsGhLKumAMkcULSFDfutRTUuLXY6sQXCUXydwEio9GKq3joWX4mz57",
  "key17": "3VPHVsR31SLbPMnaWknz24vXuAVJtR9DhzeMDR4ZG336Ji9zXHBXX5pSxYYzVgDYh9vqrsuQQ5S49KUP1tNHZSnP",
  "key18": "V3nrxUkDAoLBPAXgD5ZSjn5JPbK8P3yDrQDsLRrnVwPvaRYKGDuYNfoi3fYzvtZNedvff7KeRsN2ttX5eT9Rmzo",
  "key19": "2hgPzdKga6nWjALmrPHGkZx9mzS2xRUs8PNjM9kZSqKZBUsEr4qEmfb4hLhphNULd7hEB3YsPjZWJapCb8Jr3Nrp",
  "key20": "5oqcbLVwdadUgo3LrCURLW3TavcLZpLHKceiUHmsJLgHoEhMF4AquwrCGCMuxbSaeVEGtVn9EPGufDqSEtMgrUum",
  "key21": "3fA8JTt68c2WKXZr7ryrbdM4Y7h8dRnV64spZUSS6bGj8UT9R8cs5eY2zWpPmLJe2maAMsebJ3MCCuVz5rPcCbp9",
  "key22": "Xot6fUWVNq758hAgAzsthAUx6eaPWRyChNYkcF7zh7ZrcryxnsxUmPk3dd6dAvbJWnWWBDuMHG3Et5FnbHHhLky",
  "key23": "5fzyENfdVdsREdaqSc1w4jjDyZT4PHSnm8Jb943LYyMXrAeMSmtv6L1qgSUsL5pUYpA72j5dgLKANzzzkcyVExna",
  "key24": "3pmU1TQwyTVrSB2uQuWwJ6uTwVvmDimLhSAUD91nxPATyhsMYeKJXfTDHRx3QkxSzxYhAcB9s64RndWQZG2g1GNc"
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
