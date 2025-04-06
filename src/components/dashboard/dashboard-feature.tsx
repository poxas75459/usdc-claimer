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
    "vzUVyGX6EMuKsheN8eZbs2hVHqgQLouVZfo9QCqHQzrzGALV5i1M3ay41wyXdTAwt4FWp7wyJCiLr6GNQT4VafY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J49vZYzJfhpQSspgFgFD8RX1eKvE3CRM3rkiVuwQkYaRDmGDkhKKNFghe9yo9QHHWduGZa2yLHocYRTfP55Ai5u",
  "key1": "4Eqbdj2G3LQysoDxFfh5vZxyGb3S1VzzarYcfYccR2TRbrHbevyxEnN8cQUTxcqZ5sUDSR19mZJX8pXV6jtpkyWg",
  "key2": "2jDbF2b6XLp4YRNYa58knDwcDfytpipdoGmk5WgDFbaEqgvm29R8HZUkKgtTMzmQKHxZsmJ2NhAo8DdhsK4vQW9h",
  "key3": "2rqTjnFzPNitRhjhhQkCTPE52Fa5GR75mou9NsEHrtfpo9V7pUeBEMq68rHjxnWbFvDzbSamuKF1hTcv2TvrgX94",
  "key4": "23CpncQ2NMYgA1QmmiDiD6zLRStrVD6gmZCmYbPGjJFwmePCiuCA4NpWBQTjDi6nWUoAEyh3FCnVu12r8XGurpTY",
  "key5": "3fZJJhwdU7cxFHwrb73v87a3JFCc1LUFo47A1L9X4GQ2Lg5AnD87wfLMbWjAgkM57UtPEDm8sy4DdHQeW8HsgKoo",
  "key6": "4BS6jKyGr3r1bsG5eX1gFUQdAF4781mBJz9t3BXUMjbRT9qPvzr9LZYLsgks41BTiJ1tuTSuEtdLNXiX779BAVT5",
  "key7": "4ZZ4cEqn5VasPdjj5YENR9thwR7xb8gJe5AUDUti1RWKSFrm5MwSFez6HTjRgsPkncc88EqphdQeRxfZAD1NWrRu",
  "key8": "26GdyidELwKEQVjYd9ZTZhAEWaJGg1Mh6xcxXcNZzppUKMnkv2orgtBFhZsxP1XweoZ2JEC4i6YZ5RSRw31h9FcS",
  "key9": "2FCafecSpAt6PtqVMub3oAfujFg22Fus977HEG23k5HtnmeoLxseETEHwZR4Jy2YomXRUgzaZufga3Ppbo5SAE5M",
  "key10": "cpV2WiVg3bZg3AxYAP7q65xkQSRXuQvLwWkwkBbccoep7ajsaEnGjBC28B7MXu7QHUDfpmMPKkyvyTvePyTTySh",
  "key11": "5EzEjKui75KTPG8vSymi7dujzD3WtPMZKsWTFJb4hSf88yDCgsNn3FxJbQKzYprESbEHQY44N3SFEShitadmJCPQ",
  "key12": "47tpxQEL8zpMPVCkEbxz6aQ3dfKjZSPoz7w9DPNSmjYMHNidHGCzoeQdbroQyXMTHF5UEjCd2brfwMKrQkUjk4zu",
  "key13": "2NEK49JMR7XTW5xrbwaUGNmY5oM3a3762wHwKEWBHJKC4SDYJ6un9DFmCCEVCcH5yRJU1TUvwLDccJ7RzQBiEa9e",
  "key14": "3gcXvGNbwXMi9WcpoAJFnre8acJLPRmzeYXHS2VrLEWQKBahieoLKvcBGGUqYTs4rUSxKwvRaQcPDkExvfpcUnZA",
  "key15": "42bQx5CKeWtTdG1eKZZW7Sn1PczRdGcV3Jj1DD3jcAuUCzdoEfN8CvZ39GaJfcfqAEu4uUGPBJgrPa4cp7q3ZNfX",
  "key16": "2THeu3HgzGrmqG6M2VjbzpLVnv84WRpZrbCvBaJkPDjQuQiV12rjDMentSbyfj7uNug2tzMZ8zau8Km7gS9XHog4",
  "key17": "4CeorFEDfeKKD9hpvYNtrQ32BPq2Smp3kkReLwfjXTb4c4kUcecaUWZ3ZdJtyTVbxDCovfwQQSAigegMsqyLAp4U",
  "key18": "Qg6WJebUqhrw18KPubRzQjfwnXutoSpFsyMPc3C5JQzXHF1KsRAwSFigyScmrQXSP94DEHPyhtjESFMThVnB6T7",
  "key19": "2DkFxrbBaSZf8k1b8mPyUZHepYrYmTtaK4UPtLPnBziNmcSF3voQJ3K2Lu9jPevn51mCReZz83BSdJh2x7aEaBzG",
  "key20": "5gwi9uB4vckBE8Pj7sop1L1athsHxKDL9Cq4m7Kt1cWTxnA4dotzYu4HDFZGB4KJ2C3t7U6EGnx2aXBS78wpVVUK",
  "key21": "3cx1N6hx8vdqS82eX6orWLpxnmye7Z24akvoYJQ2rjvinXuM8e7kgFQC8GVAhWzkQmLFGBtxsfbPRf25X1qbQAWf",
  "key22": "5qbE65wf23n4SR52WFPd8iFza79NBkshZMWDPCPMekRgixPhJV3AdNJ218LHF5zEDLmiyMxtWhPwRnhYCxE1qoXY",
  "key23": "4Tn4sHFxjRv4pQwVwkVR76cnps8hTn9craHDeETrqW3nJJekV5YKprgDXKhXjYEiNDtbbUyRwCL4dNGDLYwfxrmg",
  "key24": "sEEjsbYh2GjsFz48pRSSZLnzqkZ4xkSykDiPWPFx3WcNzQWJNf7TZGY6Eujj171qpufoL63RvKq4zKWRGxMBaQD",
  "key25": "23KRdFjs6EEgCe8UXeiioKdxCXvessZ8nUsVpqJxAyhY9FT5BQqYFXLq5APG7kvKmRik5Gpd52vvi7sBKWSqdp7j",
  "key26": "3nzEZucCNQr44u23JnazSWtM2TXTBp7D3ReyiqmJSDYVjLVLsvUK23zwdKDWFSsvnw9marz4Uh4hHKB312QAhokW",
  "key27": "4gdAskdTa1tstRZuK4EEqqqPaYTLSYjHDgJESYdoCTxssV2wLTB9UNnBeMxiW9vHWzVabdbRVGRPaD8x76KFgff2",
  "key28": "5ZYzZTJZmDKCkgTM5D5irukAPpuBUXuXVbdBk3ihB8ZQhKM3KG4ZCJyKi3vAUnLeJZ2pYoWBGFdmYLkUhE2pL9vV",
  "key29": "qDDEUNhTuFHvTL4ZxFqFvkVDApZ8qBoSFpU4NTT58yJRVq3D1fZUXiPsNrLuzMLLnk6qLm9HFwMZx9gXfMhPxxz",
  "key30": "5uVVyNoJUQRQbguY35Za22RofxrFYoLR11mXuobeoGEcnw3KR1BA2UfJyirsZCTbtgQBiqKqyr63h7CFh8t9E4Xm",
  "key31": "333cwG3pXaVLrm3GPhwRisKgzqh7LfDjzm5a7UEnqtAURBgCRLbUnzbYhktCTAA8HJnUe1XtHCkD3bM9CdTxg6K4"
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
