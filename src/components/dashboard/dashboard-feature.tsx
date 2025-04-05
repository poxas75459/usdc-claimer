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
    "5JccMyHDvtKF8NfQeFhJGnHBWuBjkbVgSt6e6xcNE9bbXkL7gieav8tukVAgf1wUQsjZZqvk4aKnuqNscvrja8AY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBy5AjGvea7UpoHADwHZ9zhXknMiPKraX1RzHvUvQTMMBRP777waM1G1PXf1MwBZxHxwyupPTVigGBrvXBxmhVy",
  "key1": "mpiymNmp7PFhMYjcLDUFCLL7K7REhnb6fmRYsoE64K9PKuyA39KoYPEF6B9CUebwwMabSKqcuL2p3ZydL6xpsDK",
  "key2": "2fs3wjfuv4eDFzg7ZnQbxtxNLPUc8jcrVjk2MhCpWgPUHGf6F5gG6Jsgipr9U2fJ9muv6fod4UwJNtQjiyKRMejR",
  "key3": "2Dbh3XLRH3qn5RZksYaTmSQQuMXAmPaN2kTGDNbjrH7xitvFEyXi7dpyp3X2HDQyZMVFCWcK6zoMPVxVQmoFJDf7",
  "key4": "2eAJUrRD2Z58BaHZkhpDTm4LA3VA5oLBqEPut6ukRkBtTEEKwpj1PCXaukSWQAenEoLvv6xrw28r5pmv9SXNnUyD",
  "key5": "2ySMR5kHodpjguYaZ1xHoJCcKNTNtov3GCgJsnWwc6U856RiZAaK81tx9BjYhTrZoLheNCPmNTv9tFJBAZxUX8Dp",
  "key6": "2Lhy3UMjB5WAFc9aEncpG59HE4fvBF5nBEXWWED6Qnrcbm462PQXvx6ReXTonQSNDz8SunhZmocdDvYbFPreK5VV",
  "key7": "9zRenunavTpAbH87m4w12qYwk1MxUNHj2Dk6dzNBVrMwEJioGGZczrKVnMH2aLPSbR7HEJLaDNikrs7Jk8vmWpr",
  "key8": "5xkYTbgmQmaXtz26DZcAmNNfc6stdXzt1RrGnz9aUnxEh3BVpRbgessh5yrDMwbxeddSLtcGYaUjECEmf8kWM5Un",
  "key9": "3ytyHWps2W2mMAT8NvaCzNYWPEcZ2a1QuYNjanCgCxd2cpwBoLeVFDN1DNB2cZL2EooHvRnbFKLxat1zxMEDMsbu",
  "key10": "2s4Cn8gfoJjQFdNzpMzpc3NUmZgmGhRyBetC82SMUERHLVuQm2GAxVNgN7cMQcTUjARKwbbDtrHPDHsmW2m6Q8gE",
  "key11": "4CXHQPN8TMarJksZgoy7JZ7M6bzTB3FSfkmPNH77yfsoHSKx4Dq4oBLjK6xbG9PfA4WbNkBV85jrrnNBftmfVVBi",
  "key12": "2feuM8WcJacGzfVFmuiCNJ3DzqCjZLJMjQmkTrieqhPEU59BpG4ccX3qFJhk7njUg4riCYWT8KaK7SjiRy4ukugQ",
  "key13": "5WhUu569JEphjMV5NqHu5pNEoFT8VcncZr41goSz21goRscdfCrZxcEZuHJWa2dyr42Q3DvXrNyFZxupWoDXarFK",
  "key14": "3Mxe3FFZTpNFEULBbxLbbHVjo7EaC8zJMYFt3z27kEEX9ocsS3nMFTnneHqCDR3wcLhKZ6hE4jaQdeSdasDfcQJx",
  "key15": "49AjX3wuQLKmZrs3U4Ki7gBsDwGTgVBZ3cbaiFvLHRoojeT6i67gtdPpJLjRkfheZ53MUHzNJzAgPcx2qYnWTjFD",
  "key16": "Wzo68CssFuqXy7KPzksQ8Ec9HeUjNXaZptXNQtGhwedtyH7VLGYSJDMdZ57BSRz8fnq7JTYq2LeQzxDyRFGVWZ9",
  "key17": "5FnYsTVkbZvuHX8ZVkyVjH6ZHAhvYctrJ1xi1LfQbp4Stmsbyt4gHq8uH6GQxk9VNAfzVcbGLZU9xdFUk84BLNEH",
  "key18": "62Y83suDSiAcp4iesBp8W8zj1GeQzX6STLaznhgBGrNMHWBdYFvW36zpa2MY9e7x4nDNEmqBpZESEmcGMYqBrgx",
  "key19": "5vnZUcEBiooyD8628zmPoiR32VptHGjjhR37Hg6pSQ5qC3YEdkgfwwkGCKsUCXmDna4aqdMs2GDBBodSTiQdVzq",
  "key20": "CQbfweV8kv3NHaxKUMak37WsyKj7TvvdvEH414h3ENARSHDqnDABUkxxyRTdGTmXFVovajdoqnKSdjbKpC8k9od",
  "key21": "583jAAoQgjwa73abi8m6PaG6SKHuKMkEWzEqvzFrNc8WAsfCCG5STpJqYgKPiP6amfs7kLUu2frxG2hA8wxdPsqC",
  "key22": "bDmVat48CBSrbGqDGEa9mBtMkan54eV7Y6RzMxMxAxiWhfY1xPu4GbcCnuUvGe4Mt9X5NvgcrET1ZXn9Xe1asJ8",
  "key23": "53Lqxu8nEJuvp8WcR7yKidBNtFUmRuxkiZuZJ3aSej1gi68tweZnmb2nUdBvGytwK7PtXP8bifHeyL8QDmSZ6kGR",
  "key24": "3EXwV59d2hK1yGnWygRuRtYY4ivZ7VP3P447QUigUShSmWW6DJWwZXRCddUboHSZ3wsHrCd7AGeTZY8MjNZFLJBx"
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
