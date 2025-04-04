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
    "2VM36G9Vr5jSCVtB5HXj2DyJvi38TpgFVzuxSURdH7VUyRC4vc9gwh11Fj5zY3vtGiVo2QNkMGQy35HmqVKKimuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZMjvDFMzVLyVtiYEHx1ZT1Yi1nsipPYx9NbnVtf6epnSFZeGVAWRFMCbJiRku598qw9GWLbDDM3UNM5cTfiPjm",
  "key1": "4KXh2gcVwraQtRxXK7NCZH1dJv2PSX7CeFTwB6PMzwe3evxuu7CsEccGMGjUeBdNmnky9y9nUwXWreh8yLc82DPy",
  "key2": "aFgs1AAbjdUgTTMUq63vrp1arrhXcVwzUpMJTkhpsjWuRbMCdAy7br5tqDjTHqEjNmTypsHtQC6jFLYi98nCcxj",
  "key3": "4pa2rpZGFMJcjTxTKJgtfAugX3UQCw8HtQ8Z3f8GaYsh4SrR8WbmsVXNgPsVCiMuHzAeWMEU4nZL6GahnXqHTFMt",
  "key4": "2FpR6vAaoaZeVNMaxdsrvRbGcQYqwuXxUCETZPaFb4m49ircwvjM5wnXQYaZ9RK11NYskPRx2MCvuMNkod7pn2W4",
  "key5": "57ijweVESjvm5eAXEQv3Jiza4iKTannvK2uFCvcP5GthGp2KpBLMmuXCzwfr45eEzwBwLJBBYytGT8jyHkUPgAmh",
  "key6": "4K8kch2sSoqX2C7RR5DHtqnPRwov1vjyN6247Y469a37RaWPmGbid4UBU8MLyzXJ5Knhs1ZCwrJBDgXWBNMV1fq8",
  "key7": "2YpQbTFML5t7jqu6QFBXcAFhSqUMAX7DDzi1LDJftC4jVF4GGSJyXsZNHqbfz2J7AdFNtu6Gf8qgnjSRFMFXHkCV",
  "key8": "7VPjudgSqR1wATbe7KUdaXbi4EqsaXBaaqEKRpVcsaJes36YbgxEV87bK7sJUJBL7Xxqa7gxfSathtqCDPmW4fW",
  "key9": "gdhQq5NMWRiGvW99EQ1ohERDaWdpifrmuTwhRgZouA9oACqawdjTs8chT4st7EoxKULwtXfABKuj41au8Nz5YcC",
  "key10": "hHGxWQya7MBRW2i9eBn2Mi2sE1yabTs2XCw76SXSqFLAhCnejXNZJYtfoCXuBcvEvHb6rdz5edfoM14Nswb3B8n",
  "key11": "48z2RsSrcRhmvejYgbZ8VHqG1gq519TNFiqZVAFfX7mkPdFG5eRcGF5yQqRcY13VgB1tKWRrTvNHBVSbqezNvEtC",
  "key12": "2st84xpu4GrQ3x8WFxoCxrDGy4isYnKovZssKr2vpf7ToN3Mjnb299CcqjAhwX2xzhtVkZLQkx5ANw6rYrfBT6zB",
  "key13": "4kSqvnH4VvuJHXPmhoE3PKNed78kVzgD6qLz7JU7KJLyzwLKfXbshdaXu6payt3sUQD2prWWfLSmbX79nUoKGn6D",
  "key14": "5KtiFWqgodoWzL8JQ8iGM8EcCTUSfGWeGAkHLWRfhHFXRJWe4eND5mPCw8v3tM69uJ7RU6RKgruLMhfxyhaxMiFf",
  "key15": "fhyv522xeH3Q3hG3YB4ib7UHwbNDXTRQesBZuPDD8p5dY2ySPTVUfhaJokfMfPr7nde3HRhygfHrk1Wp5uqPXX2",
  "key16": "3tsBD2xygkMvQZp3deC65bHWiktibVCTrEgSnobosa2m2H4tZEoHaz8jZTh9fyhuCkEuKqGXji9mJNvLR6BhbG29",
  "key17": "2hf7YGkYcHjRKMqctBWFdkBAfpdFhx2RkSiFp7PRB9AdmSxYF1EaRSwrPpgLKSpmf2mMeqyry49eqdnzTtithYGJ",
  "key18": "35PuRrJxrLkj3YUXhx4QmfPbpaoB5niAV3ewAnGx9MMLHd2PCJLQ8vnN8meGC1TXxk7fn2JHHk1cSRtd82j5hVH7",
  "key19": "5vjDmuDqrxQUZbZWmzey3KsfPZrRKEtdi5g3JzdLFWPE7FfTWX8dpmhvsUvTAG3WT7PWTuUb8DUMPf7mjs84hF7t",
  "key20": "2oXsLN82sneBGk1oSbNiosmcPb444yS57SUbTa6FjouHtM25GASAUnFSfQkbdeGcA8AFBaSkzUNNuARirwM9dLzC",
  "key21": "3hWGajSf5sT7ktfCKQyxqdFdTyTVGNAzFATgWfF6qvx2oswadUpgDYhn4SwpFkJY4cZj5NgAkbnPwbSCPGHY69fq",
  "key22": "2qx8f6icvLE1xvSvLFCf5CXsdFBzi1nGpSzK3f4PXYBQ8ZJcjrZoA7ioRY4oohWBwmUAbn1oTNKFzSC4SETCynzQ",
  "key23": "YTibFEjcMf9BwfDxSc9u8Nt7LnSHrQeLWGFXKy1a7qo1b6q78mdHubS1VeYREenSouJN9TtguNAomyU2YNpjwH5",
  "key24": "4uqWQqgGUsSh1cKNuVFJTW7kTsGEF7p4A3YvPs2oA1X4C5P1pVYxDbFJdTMwF3TytxCYb7RriADgDV8TzjJHVwMJ",
  "key25": "2QPVpfy68RA1Yw8dRCA6YSbbMMHJKTMotgQ7gFHqTDywZ4gceEtabwb2gb7gEGqPA9Q4F4VwyNrYehgbGZn76YYH",
  "key26": "4DG5qh31gMFhz8KcYaANVccC7VvQFwodiCLbnsLNwUTHMdZZqyaqkDbcNhRtpmnt7Tr1butLtA2xYbnppEaVtQxr",
  "key27": "2rmxEXuWgHdiET4d31k1dCQwToaEfCUwzbzpeFtMtAz5URky9DCeh42uEVCeD7pJn2rjwUnWfKjjx6ocdYx3WoXV",
  "key28": "5eYP4wAoeV3hXv2Z1KC4NoVoUfDUXq9SFJ2A3kxJs9qnENuJS9TGP4GdzU2EZzAQj7b2bttWCgATtmkMGUB59c9v",
  "key29": "4RESwgHyHpaHqB8Ba97MHHqqZzzUgZUpUcd7HrmvN6nLdNsmyeeTjmwvhQPWx22fDGr5McEYxHFBV7cuUggzLegN",
  "key30": "3k5m2Nwciooc4B793wndsFdiquVMe26TADRQE5cgKPKchni1i53iQVkWfrtYryaer6MNxLXU8V7W5AnwVT51sANo",
  "key31": "3X4g3GmBuL4mwyPqBCQmjS3GRpCNEMrwrCQQ2YcSNFyKyBh5TtPBi4rDKNo9S7fg8cgqbcwyBitb18FpNW6uTnAB",
  "key32": "3fMBnVhSmtp8epC6yxugE1x7J8jPY92Vg2UbkzL3v2fXwiE4KQRQPfSh3vKvJebi7caCzTHdjr9NVzcUo9XBYKLQ"
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
