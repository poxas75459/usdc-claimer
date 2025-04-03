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
    "47MHQbnohVwv6bfMYntnH1MvsEmAm4gBNqae2bdUG8PMspMiRsK2w3ZuiTWk9Dz5p1T9CiDH5EBDxBBQNJwCdpQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZW6LeDgMDu1hCSG33nc9875iw1tDNE6Jma8uhDhnNRfnRErLs9yjTP7D1mRL98ZteedUYaKZVRGraAT9hBcsMAE",
  "key1": "2dUe2WYmFwqCmbXMdyVWswXkaSD1JZrE5ui7G4AinFNXgeyGNdY5fYAFUMHZaSJaX924Y55DbdUv4ieAHc9reGC1",
  "key2": "ExdrkkWsqy62n3f4WG4GDjP1dkjdNXiwWvuFNTMrSWB7Pa5QCdEXhNa1u4mN4ZSgCP7yZGNLzWVM11pJUpsARBA",
  "key3": "22w6qoJCv39a8yCmL63Bk5UDsfxrmuVfZET92UL1iaQJ6Mmo3bSkMy6fg4av1m4txhNMEnbUAAdyhn1jtwhKJ7Qr",
  "key4": "3fMaHpSizsC8ZY5KB22wZtcqkSKE2TD4Afx4cYLjcqT65qa6knE7za4MdVEGoBm8TxzsUrJE3zFybLAQMwE9HbR8",
  "key5": "3fjczERebdJFa8QuTkx9kqS8Ngfe7k5iJGxEB3cdHAXEidYf21vNvSm8bzeGZEKeL3uSJ5tegVDYGKWwDw6NRwG1",
  "key6": "5y4MerRxYXqgcZSMgxAiDpAaj1EjnGm6Go3qmWEDStLp46JdsyhYeRx49yPg1kP7NMdaDPUyby5neLSGB1E3QTNG",
  "key7": "5zSFn5sZsWFTh1JStn51zG7YJpLVqf95AoGTJLCPHfR3nec3WDEopiNHmcruR9JJbo22UygLbdAadDXG5SEDnmmm",
  "key8": "nyZwnuXpBpatvK8hfgYh5zyobW9oXpPEgPDbdaJnvvSRiy1ki8BW3FDu1eC2FD3Nek7KRFDADMNrneaEsE6SpAq",
  "key9": "V2Gc7FpKmbV2xe9btBsUmx9UzMPjFRpJEtvPXAyvhxFpBJ7sM3sN9kpAStEu2cgkvnHgZWa4rbsg3bzNPXfrxsW",
  "key10": "3LCPdZJsncHFUQnMv5zGyiFT5jfhgSvM8RByTEWV8ekEB4ooTorQ6XR6XQYK6J7XrTtTaxQ7qSUQCMNQowjnykNR",
  "key11": "5okQLw5G1PLYqkk3FDEBuu8QwGYxZAQooGsUNeYyWyHYZoejHpY6NJEBAxw68M8KmTAjvWPS3a3hoEfE1VvAzrno",
  "key12": "3mb2bQDkk1JbmGdW6UypuQDtMiNsiPHJRLDHxkUviKdjwHY577FGjVgv9FNGHkRjBvWAspfRmFwVkH9rFwQnVKjL",
  "key13": "3iHDAqsE9pf9bhXUUeu5cQFLQTaDdXgtRoC4PB8YMaQVzcN5BNc4cSCqN9KMemUc3R5wTuQfKRNkFcXbL2MDDSqy",
  "key14": "5hR7zmCuzp6zretPeD6tix8f6dBFrAXc7U3qGLbXrkXAt35HCnrzfJFHsdWtW7E3LvspJeZFC9uVPPF7RwDZDPFt",
  "key15": "4sod3FkZuBfU6yeXMzzuVrMwhsckwHGSsMTJtu9pjuoSfwXCGgbwMW2VDAfXtENikwV46Sz7BGGrwTdU1HEnP4no",
  "key16": "3tKxJGefi9q1RaH81XtgV81PKG4xkvrGHrBacmDRnvfeJgMGqYA5nPPqkiM7veynagoxFfwGSQHN6VxLFCpjb3az",
  "key17": "4wjV4pVbqVb1nHB2CaVVWZtkrqfiMbfgnniPwnP13KAuNvBvMxmBs5dDsMierXxvq8z3cHDdBJ1MHkNrexiauRAL",
  "key18": "33Qadb3hE1Tr4tzZAb9iDvoGgQgJrQaV5VdXNFpaM4GqQEcKbdXZ51bd32a4pS284Pg7zHu5XBRE3aj3ihYnwtvT",
  "key19": "dotVTMcXakpwkUtoDBuxzx9T5cBqHEoDnsQ4G7X2XJRYFvo2rgQuCzJ7iDLLDZogT2DtP2f6w6Rvy4h45YLJf7Y",
  "key20": "coNtgPqmHX3EpUw1XLn91BaURRmZoxRjqUnkRYQyqrk7JPXj5bmfpcNk9tM87YS7Z4YT4k4cuqs4XWaqMyvmySm",
  "key21": "PDdsYztHpm4MHSTKkDPHfdGFx7wiQWgf7wxEXgyozurQq59Yvfn8NqsdfzRqa11XHiLgmCDQN6FeXkK1CXuhxFf",
  "key22": "39k8C4NQ6etVJsritXbNknDZEh8H6Px7QSdLATKsm23CaTj6VfaHgxZirJ1J3wa1gaPJZUui8KzBqUjcLunhj3EC",
  "key23": "5SW2PZEiMYh2F1erX7Sc2r58scqamL4pDizvb49iLLdcQ6TCS6sHesVD9hH1bt8qd2iMr1hUNNUwiz52R5xKFCG",
  "key24": "Ld8ZsAqZgN2EhZSfe2u67ipnntY272fMBpvGGH5ngxagbWuwRvFoP8BS3UcYxPC6p7Jkj4998hbS1dEZj85Gkrq",
  "key25": "pTTpRfjbxj242NFDuVJ1CVmcsPkiBdut3ArQ24WFaopprkkWWfYLLbM5ubMEUHXvgfqpmyMRnXJTqNyeWQ7K3Ck",
  "key26": "5zhnTpBBSxE51RKMFMroq8jt3Cod5B6XzTxYREs2gnjxv4yQs64yBm3xMGLxcY6m2bTny6mWBVTLXPAnYVz99xEG",
  "key27": "29GceLNKUrRRpGGUDnxC1WRn3k31vuRXHfhk91ngnTFETp2cYEY8HjgcPmZdhqnY6qJPJre5nXVdsuj8ZkWbv1VZ",
  "key28": "5cE5GCJWUzVgT4JoQBe6rd1UiPN1DYaZ5ZQZ5Bs2rfhPf1qRQq2mjdRYvDaG9FmW6wwuFNaTEEs1UBWFm6Uzp9w8",
  "key29": "5bhZ8LKCXH5Kc5eK39hmWm8wgKS4XSREzQLtn6UgBx2TDScu6uRiGitxMvWejEA5tT7faY54AU9bMhCXuQ3MD8yC",
  "key30": "4UNSWo6WY8YGuFpzLZ1VggAXY6z8d1mAciW2xV5Fmr4tJJCUmabAN4VhiU9GT2SLDB3VcwkH971tobENhhmWvwQ1",
  "key31": "5sXv7Fnf4aq9Mhy8yhRYuDHS7j7SZqKwKSRSe2mvVZ4TGUUfnaPpC58eP12SvBAbCdNjeBPV7kakrhH5uBRwiCQE",
  "key32": "4yBo7doexWb82vdXF8q8mFk8eSvkqGYthnDayHR4TSLRPGTosy9XnKaFyJxdQvsk3i5xAf7pQbHrmRUfr7icreVS"
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
