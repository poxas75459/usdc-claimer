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
    "5poXy3jaYRVL6VqP2FsD5vLJf59Tk5Myr3pf2nTSvcnQ19pUwSpxy2WhxiWkrzPJkQbnCyeKbcFz3Sa7EjMUS7hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avFXKuEP3BMX5rQPu8PvYTXys2fP6cT7SLLRNx5bW3hsnWJfTDM34Y727UKhkL1CL1546h4enkDovnddNV6RNbR",
  "key1": "5xhe2gDRYzpnLGEvD8bFdthxEQWdE3hv7oXVy2GeeEWEvxgRMzecos1NCC1jmPbxkjcv5CQYc9BDcPkgFTqxsFgK",
  "key2": "3FVUcSMuEkLwXg1cET2LjEuYEQp6PsRKXCvbYAQs8rS6EQY1rvF3E3LLtgfL8mQtKwWaxTPC5DMEjsMsnTYGrpD2",
  "key3": "2SgNqRSdAaYJxzYDarDGSdSTdEUgKEfqmHEaVft84TgCUUr5k1ZfCLeQeXCeupuLSFij238gBahL4ZbMyFos5L5s",
  "key4": "4MwwXtcB1V6WGZHduEhxXz6NFkjAz4qtzquEA2GtgrMYA7Xfq9ZZc9yLYPRN8BnHSiYYf18WxWFE3ST1xXJPXhkY",
  "key5": "3qU7TURUZu4SEAKsttXj5opcBb61TKXkYTmEnxb8pVbtxdSrnvdesRvxmrn9HtSxsLJm8gwzK8i3bQbs1HKY87AL",
  "key6": "44b7w9XYkjJ1mXVJKGqU4EFPDbbbBc9i9KdJmrVgQWSwVpxXPtGdtZj5xARfYsaFjbemHehDoRdR3g6SPSjszQhA",
  "key7": "33pJKumpsxCTUKqbvrouyJMERTfDD8areJgs8PLddUgoG1EHUBRnGssidSC7fE2ZH5wcQHDqnVsm6pewF9vxhQ7B",
  "key8": "4PbaQmmMC2RL9N1nxMGPBbZZSkrcn593ALH1kcxXVNCt5awf8RwxDaNHonxRPxUrudsnC5WW774bCQMJrXRAEEmH",
  "key9": "4CCaeKBjr3ocMuw3AVkmdWvL6VyqMpL5L33epaxj98dW89YPZWckteMF8gpJPaKEZNuNgFTkUavpafp1VXbMbrXb",
  "key10": "66TqW4YiyJiGMjaCAFkNcu7icxu9fBH4mii6b7mHMFpkKPjzGVRHCCffiH1TmtgBMxfGy2LyvVFHt28VWkzDmJGT",
  "key11": "x5YXVzti3XT3vz8tn51AhkweCm8gto2o6cNonRQMTDhjAecjGBymVkiDEo1yuFBfHoJA9MBDwXxMx4tJWdqA3bZ",
  "key12": "5TsChj7vDDeREsbCetSe9PfhX51gzHTxBoBYFTtp2PwV5ouiz14vCFusM7K3t5WCPqjJFDDBTyTLc7E7tWrKSEVS",
  "key13": "3brGjEWhEzLUnAvo6cUk7MdfP2y5btpL8jVxr9wHv6PHMMZF3xvZgUdyMeQgsGJEvFCLJfXMnKzivVjh8FMCFhdo",
  "key14": "2ZJyP8L7LhfJBuVfevEWiUbH1H68DhSV4TFsYwnSUMWzjrgQRfWcodDrSSjRX9q8hEEZuppLw9x7yWqZrSqCHF8M",
  "key15": "5naXKMZAxDthF4VVTuXoMunpTqhDiUUgoe1aeDRHzyzCaYvynvYDL9UkHL3GhEdqB259rV9HfQfcuRyBvCwuyqZj",
  "key16": "2VvyvADdPwJ58M8S1xpqo9JQ4taDuKi1kjQUtRTRespqSX5vs26qxozVSdW6pNouoFXMd78c5wheDvfvAxJ5T3WT",
  "key17": "5aAEKJvob51cZ93hYjpCjJc1ja3cTW3F4cJ5kcXUbynSxdqeHpoKCJvXvxhJE21rBxLj3JjeaCyPTixYwzi8UtN2",
  "key18": "1FWSb7b6USqkHT3SvXzdGVu3Jj8YsjsY7Si2z4jFX9toM4QAMt9YGtqNgkzWKcfVvXtcaznAvkrKBztn9uXGpXy",
  "key19": "4uYfaziqbr2BSADqGdgAoq4jGW64y2yZjpHFqNkBHJCSQiw97QEH7Ybv65q81WEsyaaoozZTZzeFEBg6oeRofTtS",
  "key20": "AoKR1ZwMXgUPEYzH2T6kzCyLCb6BT8ciJP1HnHxov8PFK7G1AYuTnyWx2LntHMpudh55iffyjAViHVUieWQtZTh",
  "key21": "43PbBhD9mr1zDzK1kcUtA7H8LuXXY91yvsfwi4t1eWnu8iJCEWtwy4gmbNkTCmmN5MgKtNgjKG2M5NtqKginHNFQ",
  "key22": "2xxxUZh43KYRhBNC3AnvFDgCjdBMMz86VtqPxg4in1TQVPLvZpt8BqkxGf48T7ABmjmNJ6Vnq61Q9Mx5oiyJWfR5",
  "key23": "37zsdEgv4aw6pRP9pu5wPxZDxCEFny8j7CTaTYDTTdWzhnvdqHyu8qMGE5i3aSyCpD9Tv21KfYHPNpfrKkgUPAMc",
  "key24": "DsxobzAbzrmEUavEtKkdfheb4p1en9Vb4PurLA4vygyNDpkS4kxows8xXqp1jZaDzC7r1ypVu5NB2NUaTTy8ytK",
  "key25": "2pYyKyZ4V6iqRUq2GUtfc8Wz6nYoCYqjzE6aC1zPX8XYAHysHJ5LvbAsqRud6KD447syWW5rSv1qPmbq4PkCi3Eo",
  "key26": "2fcqJVDZfKXwSc5AuBrStx3QcohpMSDhHQwTL5QvbaMFFDiW6FEDyQfsrvS5EcSxjBXptf7YrcM3VwNL33R8Dy7k",
  "key27": "2859A9seZQ4wNpMk7wN6aDq63pLaftuhf5b5Jz3cD3saY7Yt71oqVKxM5vNhmp389SE6vTqU8xNDTM93o2VyW2Yz",
  "key28": "5VYGx9kLzL2Tas2wJrvDEtNJkqaujqwPuG3sBZzHbEJAua6CKEnrfAJhZSCwnjBbCLb7RUgZZqPYS9S2GfmsRBLz",
  "key29": "WQNmRqHWobguHXJPunAcKwzpc2JeYTQkBBrYsKZJKMsNCtoKvsRRhbWrz4gD5c2mNt9cjSpWYc2kGsszfNeSYJL",
  "key30": "2rysV436RRNwonkd3TbBk9v8PGVbHXxphbnx2hb3aYEpg226bzdskcWidM5b2EgmVHPxh7idvTP3gQEWw4qwkWd5",
  "key31": "3Sc4Tq5CWzRYhFCayDr3voMzELjqizQeCEkcMoXFcDSt575swhPdDtJCUiisigDZSqfy6VNVQc22PdzcHG5yLhBT",
  "key32": "5wf46QFARfeB9WytnKJzM7JeqofTyop7h9AUq8n6pVXjsT3JA8yvbgMDFfqAesBLyz9PJs7vnfiUjCgD8bmCmuEt",
  "key33": "5LHnAy8Wr2rtTRn57Kw2h7P8HwgN1cfr2BuWdaK4ucnE85eTYxpL7cfXcZMxYuLdZMPjr2JYWbMKako5mcouLung",
  "key34": "4AMx1uCcntqzMEewKPLNe72CzK2r98ewzFHVMrBHpBriyLnKJ3t3niP9xZFjwepZPgqVuPVET1Snkicowiixtou8",
  "key35": "2eoDYi1A4ouvDRZwKCdCEauKAmEtTavAwxLLn1WSPpRtwRixwrGgNqqYGiCaDZY9MTLp7tJghqMH6prjK4id5s2R"
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
