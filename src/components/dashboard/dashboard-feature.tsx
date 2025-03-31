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
    "5xZRRacLxHAsD57Gjx5sScpQgvdpxWYcZkzYRowFA2kPU4zJ7FEJb8CR3R3DTTsThnWgmjcYCJH8sVPGJz299eZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkYwYKWryqCGSTxKMd5vUFXSkLXtrrDCuTc2YnFuYpSQvneRCVhu1k62xg7CgCSTTuTvmjq61Fjjnak99zMoSp7",
  "key1": "2ZzJZmzLHHmpAuL1M4QSdMmvRvzEbHMxPvVL4EyL2kt9q5XU29GEqXPetvGFTjG4W6Ctd1nSUKprnfzb5qSpCnt9",
  "key2": "57MtPZfaa9eANsL6bgVUR91Bdb6HVXiDcx9KrzaJ6D8XZXBsu6piy5VcVLb5JpuZ3K1x56UMoeRwsmNY6fZaHhB4",
  "key3": "4xunACNyvuk7LSqDzhWcY1CgRxybSM5xa3uGRQhJACnCi1jGx2R51JY5xD4XNKFG1ncHPqfMATbiWTuSy57auHuA",
  "key4": "5Bi1BM1LuKhRewgq5BESiP6MeZDYEEfLvYLRGqST8wPwLFxna3js8ydMqcXQerrcnxDPdcsuygw5hTsdgtfsV5A",
  "key5": "5DT6VFqf7YQD5Cxz7rP8Swc2WvbLzEnFp2Bz3AzDbUVHjYC2R4RwGDsCgBV9mB6mUiSRDBd6vu1LMLyKYny2kFZa",
  "key6": "4oTEZCfvqwuQD7gCmjaekbc24mhH228Vua7d9Qq5AsXx3t3MgoHEAzNzUxJYkie8doLjc6yq24my1MSA6KXuaehv",
  "key7": "pibBKtAdNWSq8cDpbW4UMDRWmJkdUurnp7dGo3aKwd41yqCE5KkaFZeFvGpFm3stfsNxZmuhKHexPb9uYhuHdXs",
  "key8": "67P1LW29wacqCUsZsFUN3GFwAafsEK1BpTUbBbwRf7iXvtHEdwFiiX2bKZKNqTMGwbZ3eVqqWbuz4TaUpe56Fs8m",
  "key9": "615HgMYq818drDMRgbutYdHYrpSSm3JrUNQ2pL5iVoiUgEnUoPC6jrtnb5UauY9V13eW8qhnUqszYMYeFcfjQFGm",
  "key10": "3Yy7ngxYND7nVoGz3qAd2HHr3mbQcRVNc6AxBmRdfR1uxcWstaFbrZdjmLUmTjdr7SjNHf6qN6qMKHC63kaAd7ig",
  "key11": "5FbvC6d9iJidu566xYYPQZ8TH5dS7LyLhjC8BabMJmycg73CLXGpgweCMuh4pZucU9MsTx1zrJQQc4hSF8CrjuFE",
  "key12": "3uyy9UPj6uZ3kd879tRvwxSS1u4VNYRwy5Gyr6Wp8yfEES16WWykcMdxEN7PpfxmXWoLfDbSPimaJnontLJd2inb",
  "key13": "67rgkX2C6mbiMor6ms7xoFyQSwKG7MvnkKZNdtvm1XWhpA25QjTNQbY9JWZMfp6mj3qMwL3D3b3BXGeZJDcGtKG7",
  "key14": "5Y4DtDtm98uimU5vxrSGJ7htr9d88LHgVMTzGGWEhxR4UBsv1hgzTzV2xQiAXDL2iGYqEdhnDKmYZdsErg4xqRS7",
  "key15": "4axUfsd9ma39WFimDDmhyeqZaSejSZfXTDCqzhD6VP2nLBAPTkaMkQFvp4DTW98HNpgkBa1KPwWtd8GEMYipCMk5",
  "key16": "5HCuokb2UC7vcxQ88AYopG6dPbDFAtw2DwWB6uwvM3C5r97kMzzsbcCifjnccZcu4gwnW91ip5twkDgLiqnogjng",
  "key17": "5jSxBS4QN9Cu4dRd3N7XpcRkcdnarAXHrURX72Tf1k41G7Abf86emYCvkKrW7zBHmjWj3mEZwSczuLUS2BvudXaG",
  "key18": "4E9CHS5atkD9MJ8QLGtyQyvjbCvaxyL14FW8hGpZQW4XGg6yqcWxyEXKWnfQrAhpcKDysNwsw9gFm9eZQtVRzDk2",
  "key19": "W1tURBg9FN61Soop6wwxMt51F1Riik4nHjxhyaQZ48PZXuvGD1gjoDZN22RrAh8xph7UjrAa1qaTz5dJrrtqgzp",
  "key20": "4g9XC7VjQ5avQBacB3oBRP2sQ9GmtbZwk3ks84ehf9fhmdBzNPGbKmvuknvYA4pcW9t8NHcjYTW5Qp5AHQku478k",
  "key21": "4m4w2tT28aEkQDiDQgCn1iR6Q15zUkSyawUutX7LUHowbMaUebDibkjGWjiViYkYzxnDjRm83qY6b89uy1BqQyd9",
  "key22": "FFhs1Gp8sWcbFA6aoKSom6nmsApBtZHvKS9CSD1ZQuEA2HcmNF9wNcmWGTjQX3Q6xjYZssvPPUvnNjx5Qsbpg5L",
  "key23": "4x3dCM4mBRefRgRNAoEd99AKTsg2fYV6HSQPAQpNy3mYmB3rWjfpjXhbsz2Du2YTW4Zy6cPK4UriDPp29pqoWNUX",
  "key24": "21bxYwMqj21mWr4mmX1WvzwxsjHTWu7fDJnAzjxeq4od5dUR2rbKVz1YrVPmdEAj28p721GwWPRfkW1Tx8dbhUi9",
  "key25": "2hAivxry6FCi4KpY9ALZsQX47S1DiV8RZNVteYqKHTVBCgFLPyYWJ3xmKPeKKAjXCHngpZj1sTAgoCdKyEMVSp3Y",
  "key26": "2HuAJYGB1XWn3oaEW1w4YNyBruS5EJQPvYADZFJX9Pri24GMYbPVXnWM9D8nzyo84u8UXXVNUWcaivpBVAD1BAma",
  "key27": "65MZfghTRfshkvU9mRrsBjvFyZ2xjMJFhb3MCc3dpQr3hDCUL9bttTgDnNnLo8XQgnDcE3L9MsgJRmhcRyU3Rmnh",
  "key28": "2F1AWo8SvF9rK63jgs3SQFEyp1B9t39tmjxaC2ZEPRkxzUW55gziTv8GvH9HAHPXwPMEUqNmQMrLUdjr7ssokk22"
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
