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
    "52koUUnpH24ai3bMXaDS1Md2mvQACZiPZy3pmPENWmYzprknpPaFdWdv1wv8LhLXvZJiY1QB2wUCrxf3z8ps7dj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6dzqKigz6z3MdwpHM3Fjae8syxeZNdcHZjUTCyEy6F4KVS4UfjvfWZtffZSheWe6GMDRNdefcTsfa3qUReSqXz",
  "key1": "52Z7u5yzpWnqPo2eqFMKtZm8smYSsGacuRt6PNV1G7C15vXWiLJYBnw74RQAkCsPq4kM47f4tu7As1TRucxvVaNG",
  "key2": "42bTLQWu2HftHP3BicN11nvS2j1RBNaDv8jYAkv8K57KhB715UtJ9zRp7mA56MFqamSwEgXLStX8XTZQEcWtzww4",
  "key3": "VD9h8CvjPn4NmmwTL82yqQwLgkPZXzTJyU7NgNdakPEuZgCQTa5HNsGBFX8bDqXdCgtW7QZJ8Hha2jv7uWSKkqG",
  "key4": "3Wevyom1JkTT2MKNDNrytR7wLaEFU1ByEQ5zJvnYorzyLYqR8HdZvBVDt5RVtdtJX3ZhZbNtU9YGAPwg57fJVtfU",
  "key5": "641rMbgtnpf4mMZuj93L7Be4zYXF18YNwjDspVp7T1DEcU5eHjuLihcgpLRhoXzy32vtBsdsdom3w4aGguBLVcGb",
  "key6": "4G9Zz9oUFzpb9SYncmhqyU8ru1FuLjBcFKqoRHYM95PqeszRgLHfqS37SWn75P23dz8wQAC89f1Tt5kA4QLn5V1R",
  "key7": "4QmqFfDg32xfx5aanyH1zA9sLfqa4NCqxSdKTsCD6tj2Tw2R1ANmvpjE4dJF7dr1aymRPNU8bdH4bXgsiP7ZwWyy",
  "key8": "3QiRKpY8v81trU47s5zRudjhFxLcPn5kTe5ezCLT7xXnsyLzdxUW2L7VXYBEees7WpAvtcZ9pDxs7K5TYW9Ekdku",
  "key9": "3fXRus91ajapif1HpUsiksJvwMxQbDF2nkmrYvKpaDMjorSGivCWaGykUcnCd9uUACHWGEwC5guojBmMnukjNAYZ",
  "key10": "3fo64PX5tkemSAR2HB78U7qmNDniZHaXXsK898MjmLCQweuvSYtQ8d72SV2rkjYvqZJ3FpkGJAJdPC7FTYb63w8z",
  "key11": "5ZvoKPkwtUnqdBK9uZFnFoJTHg1CXeRi5WBQkhQRU2BVUwp4EgTRe1JxC4rTpDRgcqUwRCt8wEiRv21josQq4U35",
  "key12": "2uKyZapdWuSr3KQhmUDer5jJGu6u45ewvhSAYQF2PHntYtU47ecmDWbsLn7dTVonSthHzdfvRfduemje3ziUo7Qd",
  "key13": "2FbHDatswriYrXwGfEb4zk5uuDFWu5Jmf6q5UkKoTQqNAdWXxFMZWpuMpdGxZV6EXXC9v7h6AsaHEcFoUuU9ptuA",
  "key14": "PLZhUgzEYvfBSqZcTtfC59bf9iP1tffdCfJ9h8odJZ3fMFBpDMswb4Hqf33EPZomBKECtd5P9dpf9ZgTkA8aQNm",
  "key15": "5A3qBmXihBazSqnKPLhBczTodG2wPTXU9UmYtWuqcK69hJZRdfjVvXpqsmRGjbtCLMQeuNpsALk8fyLos9prVBDS",
  "key16": "5JkyDS4c5bGYKQLaToF44X5nJBHi3MCQpjszWV3mCFVNsrGsaoS1i3yuE7mTc9sSyydTBco7pYU99JAwEQ8Mu3jW",
  "key17": "JnpjxeG6vkHMrU7i7CE1jzJA1fydZ1kRvTUyr7SvD7khFsbQmvVpRCYnER2fk4uj3JaQcTKJEKamo4jJMG4WPRB",
  "key18": "3d9k4TcpsSRLd9cXCGKTpNdf1hHjFvRk48gCjc6JCAQqtkMiv9NCWph5RxZ5kCtxLjN5Wn7cHkKm6Suf9oRcTT2w",
  "key19": "2DDyGqst1zX3Xgv2pseTCduuS4LtYvCF3AaLjq5vXJzFCquyw68Do3vQH3Wz4zbLATv3bThp4E8Ld4VrPVWWU48n",
  "key20": "4EBJJ22scTuGMYWKSSRRBfSZFMfN7He5k4SjjtgxGETwe8EVwsPjNXd7i78Z4fU2vFwV6jw3fLnKzQ6pDh6znpM8",
  "key21": "5dHGYLDsN4tgw7FJqFY8SZ8m1WrvsPEN6x431ixhjGaMoTW6Xitw2gHPwPSB5usvjMBdsKHfXMvpKbXwbk9VFjrq",
  "key22": "3uXVnc92gumpeneAANkAvjBeizJWHW4GPo8FfTSnnJG79m9D7Mrz8ZGungasDJdwcigyGyQy3au8nLnu54pwLnUK",
  "key23": "5bPNh83L3wowYtiiWQfBpvpdsdgjkVY4DSPzJqWSMz6sKUBc9uPnnfjqm24tRV2K8soPP8AdBrVqWpKiieYo8wkx",
  "key24": "3XGqp46nnyxgPmUbeF2gdtC9nZFHEupFHFHcRsLwtZaay7NMbmxQsCcsNkmCBSk1zW1aGV8RcTuM4L7V3fR8pHuU",
  "key25": "2qeUsveYBuv23usGoSBD3Pa3HqJFReaECHa7fSWsbLev1u1x2AhDgXQ631J8KpRmTNsa447WKk9JEPdWN4rz4uKu",
  "key26": "3KbA7shWh1G8WoaA3DkyNct7yqGhGuDhiagtA7eecbYFpY66JKTMGGRcuV8hALYyjUmeAU1zKY5bwmA1Gsjt2Rpa"
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
