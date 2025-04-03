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
    "voD2TdcokXpafaN9fRSESdAstsvjimn77dUQzb9HzoTEqWBRs27Ub84RR3otRYDZGpwYBzbhHPTYWXKfszfBknJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdSW2ivUQL9xHM6MiVqQ99xZjEVWdgzp5zcPsH3Um6PDdHMt8cZP3GLrRkmepC14NrZqbFsGbu6mLyjfpg5DFvd",
  "key1": "5Ev7D6U4Ms3XYC7KeekPSG9ymWcTPNiAxjZxcL324N8exT2HiEXk5PZNPqQZqpxYbeToYSe1yyRF2MKpWBNmNEVU",
  "key2": "5aS6m77LQ6aXn7Ujo9rFrHqw1gw9Ncc15jdM1buPXjB36xh3ADwnjuEBskQ7npnFzymknzJwNPuzszXgLDmLJoT1",
  "key3": "4jk3EYpLNca2TSyxViR9xFeoZLuLMdTjG1QPPTAcwWhutFzqmK5r2ZCZvU747uyrpU91HNbKNvFeLtgnPEWTz6oc",
  "key4": "2q4Tx7FKNfSNwsYsC4mN8ckC6qxE8aTmYHDKvJatpSnd2tQLaM1xb9ZcNFESEAhaEww8LMunsiWJuqK5KdDqURr5",
  "key5": "4FZC4dbCorTQ3sCrAHdinYkfbLkVm7ACuuPai4TNuBqweqHio9KD6HqpTcKupjfWq7tuZ173Rxt44B9mCLgxEcSV",
  "key6": "3wUZh7gm214iQ3Pvft1yFct85uX3vREN7iVNPMgeLfCmBHVnyiNPxAGdFsSiXsWZQMdVsNhitBwa5o2uhGiL2QkU",
  "key7": "2Utc7Cbr7GD7g2B5bJBHiXW2xy1rocCLPWxarWh7xoKm1EqCxYJadEDwLD9ZjtC7BQWk1sddV5zhsQowiFLa5dXB",
  "key8": "2ksNwn6nwFWxBnaXSJaTofkyvACfygKxPng4zkhKwoU44jZa6ouVQ21UaNdcgVRMTVVqD3Zo1b4XaweqnnssuCAG",
  "key9": "4bNFhf4z7AVgi78wUYiSskAbVfvxD2DCmdn1diGLVk2ppXngzHXxMDCUGx8jxJN14xHNbo4PWxLAp6sdc7pepwAg",
  "key10": "HqBhdWdxagTGbbh6o94sjWaFTUoQGUs1LfE4JeFkLMyf8V9Sc7UQrLLtP6BYsVggSMjK2drFHucjEtvmfcXna69",
  "key11": "5RsKSwMh27kSwZ5pddzyYnWm2fssFisgtWBYhkhZPf8Ho99fqsPduS4scWgvjUyFTYycXMb9YHbCHuXRwWBAMmZC",
  "key12": "4r21d3gFUxg4qRskgYsWFFDswmMxd12Xv5u7xWkN8ucCUaQUEugjGQbiGfGBy1iX3xgr62XqMzD6qqyUcvTqKeB4",
  "key13": "41dtov1sZTmx4gNGWHTTvwr6cLC7J5ewDj1EKXk7aCkoLVHXYhVGfdrRmUDv6JeXyTYgkUEAfata25DPAqLUxKgi",
  "key14": "5CeVxTKKSzG2a9qZhRYfeEViPGHWVTJeJtY4QAHnZ9sMKEasBUxwWvyuF2ApjWFv1uVrXK5tkC8nR7RL6HcN3PY4",
  "key15": "4NUoRoBU8zqNQdAXUmT5jT1GyQv63RQTtTLqXmoVt5JYFVmCuXNcZogYnsaH2gY6guWYCZT6G46c8274eEaQxhYm",
  "key16": "3xZPFgxRsYivErTsBfVt5UhviMCgbhbmi3rWZmJT9MYY9d8soK9PmaVge49LdKp67gshDrRpn3bUqFH49iGHJvHn",
  "key17": "3ENxTaDAeiayAQhbxyYuJCpv5dvxS82HYrShDJWsEPMasbyxqmLaPr8QcKHJ5viqhF37on1H6ziFpuQnUrUdr8Fq",
  "key18": "2tJyVcP3NBZZ8v4t546iQ5MHEB8b4xghjLyXSvjAXtetG4xMsXdYJjSXC6nz8tjTWmCTe2LV6D4znrAHvGc7zjd8",
  "key19": "2PZFHKG2iy6vbdtSgc8EndHePVb7ZAQbzxEDi76562gmKVZERNLRDd8qz1DRzZkQkU3qW5k9UTJdfyoWAEcfsXcQ",
  "key20": "g5zstBdr2UpsMoabwJuKMV2fYEgGLZKU4yr85b5tzsmBDouUScAGyq5Pf1zpQ8htjQMqu5CTNAAcLRU8wCj9BAo",
  "key21": "f2Gc31ag4NsQuGFPuGz1cBfCKPPWwsFL4vC3th7Z3BuSiJPT66NhsRkPFPBRqLcV4ysiCpbm9JhhPn232HueT2U",
  "key22": "2Ax4RMMY6FuR8WcEx3Wc3tncwxYqSes4zyYLqyc2LByMmcsphn2cggvwohwEC8CEyGxT5aN7WesZrLYcpvsNojSN",
  "key23": "2cB8pi2xGiDhY5oqAaRd2QrDP3W1yUoMQRHmhXSka99mWixiDXqDuX2rJxJ94rLAfKMP4MwJW5413RBhpcaVBb2v",
  "key24": "4yXvVNygjRMKZvCYWMBGqRBHWD2ej6bBvCeWRuGb97APpDTa7wjSAPr6EqoYWyNzUHhJqTkXY5pmWk6WpkvGxrZd",
  "key25": "2G6iWVSPYQ4NUzsBocYXjH2bEXhr5E3xXTSefQHynW54nMohRKv4Nd6BXN5U6JGdwWKYZAh7kiCidKpkQZF2w4BE",
  "key26": "4ePcoV7Tv4voBdxVnubm5a5sf79RHYjsxuXMtsJkQc6H5Lv17wsKUBEuZHtWD1CqikQtwGL5kGCYUv3gvxmhedtL",
  "key27": "351AgeUy4zyNsqjaAhjptcJ778wBHirWuVkEGEowVwTtemjN2brmfxxQ4gEpNLLkUkEdkcqEJsSsKMDg9NRccvtg"
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
