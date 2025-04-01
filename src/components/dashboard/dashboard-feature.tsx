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
    "5BBYZtFTQUCxcyc8iDsfFnwbKuWKnafLnj75NwiEPNBUSxwAfxRwpYkyS7ejbjf1Pz7vgz2EkbbNny3LUcQKybqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rBhHibszJaB5x8UX5V3XxfNwM4Ndbo6Xsp8NALi1FWZqmDsrMuPPQ3qvGauH1trKTZeBpvdWoMubefnmVtVUAv7",
  "key1": "4hCSejo6GL7Vi2EhZ3ERFLHpoL21t9RLimFkw1at7Job2TpgeBPGKULMQuSptSuqtwgdHJRZ16jyizeF82nUBD32",
  "key2": "bSBgApPSuat5QGD9DngzkZEhnBrsXu979JQ1K3gtBZJe34VbXqFno7KX3bVF44oHvrB8T9Z3hRMuAkPr1WsvE6C",
  "key3": "65qkdR6MkBpeJovqkDqME1fohncBiqr1Hu8XXuqn5rd5DX7gwQA86pXxJAd7XXVgb6ksBSK7XWS8bybq1VHSz4Ps",
  "key4": "ZqDn4exKtZ7ZuSZseeSjkbv4spfQvQxrsFsvi6htpvJoaX7fP97XLJaVSvsVNejn1BRm5s5R41WJ8rzFaqzzSbp",
  "key5": "3haxEhNpxyYy57d5p89wjaWwZxgjKvKJeHr7CKjoEKhrEwZA7Hxew5hEkHTP1fEJ77RQyhtHCZpu8EimqtZY3NM",
  "key6": "5ZiCdbDdfvZNr52fwJPkmQZR8ptmxyQgeAkZReLUEZM2GdxHuC31zcQk5DffDWt5QmJwDtYzeyshY9ENMcwDVx9x",
  "key7": "H1xKUYBg9raHwuzTUWV4c4om3TeYaWyTZD3P3YP9SvACfD11DBYGBUFdRsBTgvdQN36xqeBM5FhSn3oSCTnXQjC",
  "key8": "2pgL9Fuvwy1Wxje4LHirxBZ1fx7t6u18nB5qmvfYCYgHnzmJcvD5xcztWbNNx1p6mki8f6e2DcYbRmAzUhVTxZ6Y",
  "key9": "3KDPsD5uGPBbqD76smrtEhsHbEW3LP4fmt5RC1gyJoEM1ah39kQS5bcG9hdEQrP2yyucNzFwwMEc6bqKq68ZbUiD",
  "key10": "n7LHGk7fFx7yaJXuz8kYevqCLxw9QZ3rPmHC7JYCSmueyVUYvmYUwvrdJsAt9ZDzEhgH9ypS5aY7fyH1zK5MGCG",
  "key11": "LmeGKRtUV86yop2nPCLU7R8JezxmJfxfc6qei8hFny8MbSeKDw3RNRpA8NTyzddP23weCdrum8caDwByWVdV5CN",
  "key12": "4zxZUCakHQ4GhJ8beRrHpjNoMziNMmvH8PttctdYhUyZAFLjEZaYwYWMFxBJkY8THNW5UfCWAovC9SwWAvKarcFN",
  "key13": "3CoYi8CyTGka1ggAiLfK6tWE9TGGanR3mfiH7DUvDJ7nWBo9MogHhhh18KMtqCJEo2VJk9o6G1VqWZ4yzx8UVhyV",
  "key14": "2W4BwM6hVPBWkLQnNZrGLUFHFubmZqA8ZoEakw32k9H1mxFocfJLUVRMxN9pNhpDa5mbACQLJdCQg51pd6jnWZa8",
  "key15": "2cke4awNgoBwUScYHrmMowSDQthBxxASxVezyAwqCaaU66uW6RHBdcUuFWnkJBnkGfigVZCNpys5XG6uvWGMCbCn",
  "key16": "33SCKv2HSwuUoLyz8Go4KTr6vYkZn2m5CLyznGpeMyphJrDcsxfeG8jABmgsmnLpiNz2p2vEimsJLG3jxKdJnXbQ",
  "key17": "4quH3LAUJVrybkfLeWCRpLQ82G6tbd2uGngeGtfEhjVahSsJ8wKUb4DfD9TpMkpaf4YQnUZ24oJvp6vhT6JS4M7V",
  "key18": "4MLxBwUTicHYmpQTSEUdKmQNk9M4y23eKhhHPxoQAWQ9pThffFyfoV1bkma2TNMCfoQ4G6E2YUMLzRGAoJ8yQ6q6",
  "key19": "4DoqHNPt2PKHBAxReiw71PDpC4zHS1hyZgWMBfCz9LRRFaDL4DCsSbuquQgw3up3M9K2Q4fgnrGVKqE96gS5UaYy",
  "key20": "kjefCCXgnMivYb8oA9vjmewPGAbsvrwMdikepHFk9FYcyAghvBMVJQrXEWogL9Q4aqUd9Jhw8aZBsHGSUFBRTaK",
  "key21": "53s7DM7UA7Nh3CYHVxXd6wiR25bBx11uQSZbhVmRBC6sdSwJnAhygSK6AeUcusgngR44AoJhdYhdUjUZ4U2tb69m",
  "key22": "3FNmQ1cWMcnM29jp4cSeRwRB5s9CFhHSXxr7Qx5rm8xcD1LK2RCV6F2XegSUQu97H3nim84J4ndNz4RtbgAhLg7U",
  "key23": "2N9oTiAA3wwdYnYKfVPnScByYHQemhyJ2gHMC87BXoC87GZB37Scdzv4BtWmpr8fBYeKppwHPPkyDR8A3UEjAfBP",
  "key24": "4GGQZfjwbaZrY8FgdUhNZmf4nNqrTAeLxq2GZKyV8hgUQJhs83KFasM3r6bpLckg7ECCmmdqQ358BxVhz68X5Bbe"
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
