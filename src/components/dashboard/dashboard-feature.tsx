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
    "2tfZypjiXbsUcmo1dv2647NgCckFjecFbk56icrB8LMhh3jSgDfLoGTA5uHjwDYEgjhqsgfzLA3EBSD9hHEroN2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aj1r6dHqpBsiKT2nWi8t38eQzUKJDUjvbDtVMfP2PBVehM8f3rWwpWUU9gnvhFKFQ71YTw2NomqK8n5fvoR1YmD",
  "key1": "4CM44V2cYySb2mnVJsc5rjGCG7buRZJuSmovjmWkLqMvhVJToS67pqdxiMGJDP2bPwuiYyNtv32YVoiLJ153Da9u",
  "key2": "5ayw78W33hUwJwsok6H62U9NkXAyQBRDLMMbHtYSUph4aAdMBikWJGY5sLqHEXdXAPE8iSqxwTFcMMJCuHGRY7bG",
  "key3": "5KVYX5Ue9X9E6Fox2v59NLcv9n1hpFFf7q2sVg5aiha7dC72s35weuHdsTTRfxniDfmU4iXSpHHLG1fUuwxEEzMh",
  "key4": "2AiWh9sp7KnrV9QWyR9PVhENTEA94F2UFfgcXjcAzpBiM6FqyAtkoECP8fDoPars7JxBRdjV28Yi3GPA54PzwJec",
  "key5": "21LLEcBmZ1tLiFdFS1hxwD8Y7JdB2tBRRQhTSgEp7Z2wT43f5ivykQGjmn2H7gR7n67rSYi6kgYDvQYH5yW5W1zR",
  "key6": "32hSMyygqoX4nYMVM58u53oXX5rdXNYHxXhMM2tJBbyJuxBWFQEM39qRRAyj8oKFe5tmw7gTjqMcb19DB4NEtPra",
  "key7": "487xZWicaJ52CsqekqiCYEME39EgcgkHGpiJSS6DEQhcJpYmHPer3B9seThsYvnxFwEcqHTLiiutisn9NwjmTgKc",
  "key8": "5V6H6AHbjMfDbo77goiugKFbH6fYZnzQUysNpoDbFqcwGQjod9GHyLKWvSxuttyPMKKdix8ttWZyKDmYEFouMGjb",
  "key9": "5KTr953AQVLQfF8gJhjZEy8ENRycTfrZ7oYAtipTPNc8tkmddxzqkmqyRoh12fB9ZBzbrgQwYRM1hTfWsGDQ1M1p",
  "key10": "4Gamigx2U1PfTuG3NXehjXaoftAdBQYx36CadYQMCW5aF7aeMkrVZRs69K747Bws4fddDa1XFaSoWg7wDSU8P1gT",
  "key11": "5chSHsw94tngtTXPbfjCNxJDCahtVH2ECJu3Y4RsG8N2AdC5y6UNTuMxEknLkY4cDzokC96CdiqUddcF7gXbQafs",
  "key12": "Qe2RBZAk1GjdFcMiv4qdveiTeCwBC53dzxahED4aKr7HtT96pEuKQHTYdFYYQWGnje1rPX6Kkza2r3MWoHy6DWi",
  "key13": "U5E85ExsabXkSVAHWgxZ7WNMNvprFFCn5nVW4Rctkd96e139nAtPwJtKuQtjB4wuC9BEESYd5Tc12S4LssMgPnZ",
  "key14": "3efBtugNrYacMTQUDWCQ6LU1viWoz9dWDe2A8HUgw7dR9k4uU8guxBRiHP8mKvtLo6uRtMGfgfJBUL4fWL7TSwwf",
  "key15": "3PzGPwwXsZt7NybEhsgPA9f7wDcjGJeb2oXTeJTtnwQrG4zvFmpBMZF159cgQZMc5if7VkMUaPusx31fphxVaKx9",
  "key16": "4gHF5bQeyf8wTcEjZDBHcgG18fQotU3mD4ZBBAvad1Ym2afGH1ARCsX3QXj6a3K2kj6br6XrAxQbAHrGzTNRZNYe",
  "key17": "2XbYoBdTjMZzQ9JUuknaSPkbAZk4M16pUWaazhSX2MA82DSxDKcFrVAu5LXQR4DQruwYAFLd6jZh6jVBGzmsQrZm",
  "key18": "4zfXxawt1e5b2LyWbFAFwa7uX7DHqYdCACeEZLWNE7aLuj3FBUR7X6ufXb1zq84LNHM2gT9u2VySgVTB57GqSN8E",
  "key19": "3pAqubbpW93eRSP9GV2ksLxEgkPVwJVaYDgdaQbAq6csLaKVrtkbTp734EmJ32MNL4E7Cpf25b8VPnYzDRb4mByt",
  "key20": "fs4kNcJNc47KF14us6W7vJS5qvxXEDYn5HNvbWW6p4CPfVkaBKYYk1G7Ab1A5E7hfxdGs41ZbTqnJ4u8churYHk",
  "key21": "NsUxCLYvesQQSMt1ZZLUYe57CFpyc2out3HPDFsYRzpQa31dZYpxzTaTakxgHC8xGJHFza5pPfGtXJt1ZfTZAqw",
  "key22": "W35bsCrpgB2uCXgHQN4oNb4NDWHysYGU8GyXhiXyN66UMxmEcJ2h5jrJrmMks6JtrJMCMKBvrfg2yNrs7BEHczS",
  "key23": "2YUms6dWafC3X761iv2D9wszHmEXkBUTyNUNrxqaMrZEdVVpc6ARhsaZpXT1dzjGWZ7QAxYoG6CXcjto9B7Li5AP",
  "key24": "y3wua5Y3pGhhSuzey1GR3VmaKScS7idWVAfAgmsRG5H1vxBUaUE5Qdy5gtUoSh7MZNCtMJyotCnuV8goXEpPuUb",
  "key25": "J2hZLVUgj3b964SnG3GtUY43T3QGRE2vnAtkbFaLXpi7N9Bhf7XSi5M7yuQZp1zk2MyEzkwz1kHCYP855MqeYRc",
  "key26": "4m5CeQeQ1sPrvbKD9b8CGfdd1hNSAHiWFhDs1YiddKAfzBsPpp7GQKuR7dKFdFLsFNKDHL7LmMct29WQPKRkoQ9w",
  "key27": "3rp77hssYxnbCWYrPqV4x6t6VWciArhuu8Mdz3NvbwBz9qXryVDy3EATk9bXeikc2zUzuwC5oejR3FQR1WAa4MUo",
  "key28": "455iHUBcWPzm24BbmFgho9PsGa4zg1TiJnk67tQyhVuMWdoVS5Lup91TXrFV4dRh69bVu629dzb9sufyJvm5N5pc",
  "key29": "3yfmsSop1zTq88ZCumBgpmY7BXey7kr7ivsgbtck6xnGJQRpkcSiAZvSAb4ATgsgfWzd2oPpecGzUNMUMCjb8iti",
  "key30": "2SJfWJzW69V45ECc3K5sZQy4U8dDnCKEBanxRvk2kSsod5vbqRB1TDErr8ho9Z8hbxY4uUGXH1fiw1tEFQxpYM4U"
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
