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
    "2eNAkR7QVoEw4GN4d19k5uyBZDUjQVWN74VeN88FkLp2gq2tA6NA3ZEAjbf54HgqcnaD8mdwy9ovofEfE5sKG4LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmhjVwjkb2TKM9tEQPXYp4k6utRAhyRc6pnVG4f3vbH259tkiweAPNyrbvprgW3ZF8NWr9DBAdjGypk3tQgtEJ1",
  "key1": "L6bxce4CPUnnEnp2pjfDod6ydLmrnXi4MMvKwaYKvm74BHqLDeGtfpat8kN7cFYKu8pvMHLFrTCTnF8QcLokTxL",
  "key2": "dSdFfaVhZ48eQRK63xBc4DjiBQ4eRrqhA85Adqh9q4iWyUFYLpMYBfg2u4vXYdxSF6r5FEZxgEBF5sWEkBSXsUU",
  "key3": "4vyVDe8AsCQ8gBtHG66mK7uZqtMT55cqQgzCfjAD7NQWhMJ6VqwEdUWMFLrZoEJ9j3gNPr6WLsx3pwzxvMy8rrum",
  "key4": "4Cm9JcJ6pnFC9hu3Ev7QgcnMDTexmS9k5GfNwyvafBKNAfZAju8HDsTzap2PSiXktb5TizVtKN4QTJTUGP3RYNN9",
  "key5": "5tkSGzLKuvKvgTijc32Qk2Udrvq59owZtHQ1TEjsZTe9KFsTSu6m8xnTGEFbWJddEQ7wXCwXrCqXUVZW6V7a3f2Y",
  "key6": "25vm7TPVWDVDbvyBqvaX6JsRU6Zc7tFez8tGpuXqxXH6MpwQpKvZ6udV13g5Jii1B1AWoZWS89Pbn38x8ZCxfiB9",
  "key7": "3c8xki5mcpRZZrsvTwGZmo5ykntGMeFz17AWihzg6J6fRfSp2VVYfWyf5T375h3VD1A7sxSkp49fR2jgjqwcFi2",
  "key8": "3zMc6Pj5wFnX6poiyPJnMPSUcg8tsXfTnyqSvrsZ1aAYYnFeraDzJUXcCH1R8oiL3mZqN1nNTZg5CmR61GJHYQhh",
  "key9": "29ELMhptScusfVN2AES7LMiX8CGETPtSaZSMYMENSZoNWTphYC9tgD4AmpEFpAM4N5rwSv8J8CceTy1uGaFfrSCC",
  "key10": "2VHbR35qw3ojP1XqHwSu53xxpsmwYpkkUR8bHMdQ5wu6CGwCNRTLc4xsqqSxSXRxyEcGacffVEfb4pJha5bwVwLU",
  "key11": "4pRM3YZfrzhNt6aTYidCpLUEtMvfoeaE56EQWYMF5baAk4MUVc1JWpfbUvyynVN7hUcDD4FFMVxxtTtnJPgZoMvf",
  "key12": "DB5tWsZLc4bpEhNUdxATcVosXpz7nt41LTVE9jCujVaEueWdAaFmEoxkhLuq3rK1vrqAYtYFwrmCNCZ26B8xkt3",
  "key13": "3PGwYqeAFkSt5FhxhUCJuFqZauPtDHQrYWqiw7YxQj6R7WNyQvu5HX2wXnzrL28J6uT6vmzcvaAyst1eYJM1K6e1",
  "key14": "5Xg3mM5iTbrxPn5F4hHsnaDs4mBGvMSPFmo2X152f3858RY9ix3S3dsjiWBDv6DUtd3SW62SurnvWTeUZyzZnYH9",
  "key15": "2hBGGZ56qta3vH1AzYVnXC7VrMR2jputYBgd8TyphcEV2qqWsj1idH5cHNcjGoLmUwbckhQTwU8oDqmSShagq2PF",
  "key16": "4dHTZvL2bJR9Y7caDbM1B4us1HC2c76DXUe95NMjgtBfcXHs9aqtxW3RmnpPcaSdP8w7JLwSvyHs4U95NaaVtXkP",
  "key17": "2mDkGQbT2veTyRDQGigzhsb2NR5rFLRqyh5ysZho2fxTfSj9mM3adtmXTXiDqDkH1TjtELXuhurGpmcXkxxpYoPv",
  "key18": "2tanfZzkfPFqa86L3PoCeXu7jzQqmzLiR4Az3TTP7nUQxLqrrFimuBL1Mm3NBVCuQPavNRoSxQZi1L9hvMiXUhDe",
  "key19": "2H36dLZ46y4decvVPDWsCRzas7b9QfHuT1bumqhumXPVBHbaim2wcGGgiR3Wgz4BvWdStnosNjQT8AzZ8SJkt1PK",
  "key20": "3PezyvHX3W9NfG3rK633G4LfdMfQKyh46VDyYapFKSfkFkvSGpJ34bezNHCK9rJHKea3b1nNY8H7E7vvosB5pJXr",
  "key21": "41ajxK5UKtM7NGRuHWhJ5g4Vz7Pfk7MSnNY5oxUB1ADTX6iGycnNQLPu5eBvJo3c6RkhSnPp6CBzLw4rzHzFNTqE",
  "key22": "3FokdUGFTDCXHrpLsFnuBGRmhFb7UH75hHcYbtwUmi78uTtWZk594YAE7yBJ9VLKh7nRmgrP6yLFF9DKowrXYGHD",
  "key23": "4ufcLTLaSqen9nDx11x5enxApEW1QTqQueveaV6qiNX9GuHKHnRHWpxFrLvBhUMWaDTP2aLfxPnqjLNzrH53dzuK",
  "key24": "4S9K9ST49jRcgG1AWZ3s8qZ52r9yHr6DLTWQ7A8sHuYc7E95qFBCRymihjrRWbmgsWAsTMpbjrEzMmY4HtVkWqo1",
  "key25": "2A63rgfZviRg284yXpZBFaLmm4B5rUmQynxwPzLwHsBnvzt2UKZnj5nZMVCCr5DLj2jaZNfi6XsdVnJovi49PVFj",
  "key26": "3PJnvHHPMpyq2USC6DYuke6AvnEQBR9BcSgGSvh8xqyveG7WBpTMmdBQdYXSWy39KFjeg3BG4fiWdXRecw2pdNBV",
  "key27": "2kk2AjHWEs8Ef6yJpXJnzJKag5dUQ4xUNDyRdSHV5zFhLs1notmipdqqm2SVfXph2mUJ8cdgX4dLxZ4hF6UCLfGh",
  "key28": "2yMRUPozy4kyYdSJoFXieSJcTTZxc99mbShW9bNfedeNH9uBbfg944St9MCsXsMpYv39HVastYMxhEKLyTN9Gx74",
  "key29": "2ysTRMY6xDkAUKZwz9g88JBs8N6MW4BWhFEYKXJuk6Vd2A6nQWqpWYqwmVrxaX9NdvtutB3vQD4wRHQ8X2Dd5p6A",
  "key30": "4sXLwZJdas6xNaUR9JyT7CTqY5KpNiwKPUqp9CiscrQ5a5jkqWaMmqfgNCNhF5Y3V714jXts3noUicAVmgiBJkgG",
  "key31": "39S8T5ne3p5Qctfo5ejEGkHxeU1yMs4D9Vq2Q1xcz8djyzweMiDGvSPwiCuEPYQW8vheTrjTDh5LPAkYemqTwYMk"
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
