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
    "ZsAbydVgjVE3AvJtnkEnEPNQwRfnn27dMt99S883RBcid5JuiRFNYDqeXwWH4A3iTsiLKFFkXsPybpw4RJKnCT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YevyDydqHVcx53oWL4kXaL5JkCFnYR5PFqs49fJspH6RJ1xeStYbNk7XB53Wr5AApJRCLsfF374aeNC15bzQssF",
  "key1": "64dEzfBSxNQPAG9XzAecpx8RD3i5qhP8ovdcrj7iHcFgUq684L7k6tdUphqdf4QijUZ4QuSJYaNmVdPc1mQPc3p8",
  "key2": "2n45gqW2xNpZAiLak75L8pRhCsd6zXwWzsrmDnbFgr6WuKw6QD46XRCaAkoZyru3c9rSnM6wDT2SJQXV3VVyYUWj",
  "key3": "21o9WJJ5oByJmEskMtTUuhjUrF58UBAhJBBg5dooffwEbd5qCqiJRPnaZVQ8r6BHfpUvhbe1WEUBPRC4S7yvQyw6",
  "key4": "4FAscBFrHmQqHV8eDmRRtn1p2oHc4E1HwkwqZPzLq299XUoaCwFo7Xe1k4uPYUpjFyZtkysxdMYbL1mYx56G4ads",
  "key5": "4bVXQdNizFNeR4doG7tALyQ3a6Bt8ciMH6knpxCfCaf7J9D5Yx86NdHwPBU6fZ8rNqzsTWmKkzaWL6nZmDBapR89",
  "key6": "GRxpiDkH9TMmWuiDnLJbMfAdDtuokfy3FmB81R4uS7XJzLKwpLdPqfEjjegrvtL4iNe6Hwd8YmR16zaZBKkC23f",
  "key7": "4x3GLsuVwYQx5K9XakVr2vKqF4mP7fHCWWiWvfY8a7NMTs27nsnj8Tc2soJzgo186dxNH1rQTT33TYq19Ueo3ZKd",
  "key8": "JmQAt3aJeQDwi4t4EF41tR2kVzcEhSFKfv3BSsc79QVFcVqe96uH3tr3tf93TVEUAUCTXTNmbGDKrwAjWdPu9Qe",
  "key9": "5sTR51AhEX6f1mh5gcSUrc4YqjTkXk46B7NMh7qUEQw17Liia6EyzwCRZbgHAF9R1enqWhqJUag1H5WaLF8voUmC",
  "key10": "5cRMHhYiDt7SiRuiEaADpYTrvuaMaE1PnBewf1u5LhmGxkW5Q9SkHm355wErUwwEhbSvMcWYaGkmowySs5QMd4Sg",
  "key11": "xYRiP4hza9qjWB2oAG4KHpDxRpuCkUfotR165XsdLYxgbZL2QUJ5MqhoouFSsZNLFAVzjRV8nsQHnhB2FkKGw7H",
  "key12": "3Nc8JcgdQR1jZLVCnx3dwmKSTXpvHf4kBLUpoEg7VUAjtgAMQRxii2J5X7UfShsNAoSGrx6mvzLxhs7niYo52fu3",
  "key13": "2jbL6ESWHBJz7us1iPt27dJLFKxgnPpb6RATtatMnje9uVbHmKPAoCnrXtxS2MUgZqcUJPYB9U8LBzfdBbVT1dSz",
  "key14": "3BxRWrnXEXTBzBSpDXK8CEzWuuUuuwW9UDj75o6eW5ZhQzHbybrmn3BJAVk8ZeJz16GSsgfDVi2VPGFHQXAZWao3",
  "key15": "2KQa6kW8bMGbwbtJcis3fcstn3q4toP2Mhh94grVVFUDXSQwmJnz5uWmWXVbeWreNQyu8AokjtyV1ii7E287yx5b",
  "key16": "39KUCdWvoMbWrEzJFU8xtCPuyY5tAVniBajL4R6LbzVnzrsmkprgGFsEfkRpLXkvp4hZj5ZcuVxV3Tft1rZHS9xo",
  "key17": "3bZdPddXQ2nSuW9WoThMw3nqi8DaqQ5TRD8t3wEhKRVXwB7jVGQhtfQJabubrqLfefegcLQDhUVhEgs4Jt5XiCaB",
  "key18": "2u35r597PscRXgZQErYeA2MW615go55mT988Fpf8N24UBi33Yv7azp57waWXxwL8qfa22fjA48FVH7ZYAWzbWdVH",
  "key19": "UiSwxzi7edGoBhD7dxYaArEyUcQTrnDjWZz8MaVWpHxkN4zRdjxCbJw4Wdr489e7QvZQRHEqVZqSUwsA6xpf6cQ",
  "key20": "4nJ5sLr5nJj1nvMs6HyFvTJ8rQFteFrQdWYr99hdK38kATYrbieJZz1rNDLJjNxYpLVBcGtj3ha6PMVSiLNZkws",
  "key21": "2YMfZVTGfH76Gg3Tx5gDKRx66PDtkUstq9iaWxkxitW6EhtJ9PGn8jdfaDyyZxKMu8kBeTv4WeEFuYHnyWjoPa6D",
  "key22": "3f2jQysRjN4xu3S3BU1G6cGMmkNeJjzpYSdnGfqN9UrLKPvs9yhyNEKcebTwTic4EMUGXdUPRZpTgiaTYB97vyD2",
  "key23": "YPkHT93vKHLeYcoKPb8h9Qyujbd4yBFtRdwJMjJS48SF3CLPoYEwaUaxdJxFPxCKx1Kcowot1pNoBn4o8oETzgv",
  "key24": "JH34VHzwFdGukt7wbxvDioewNWn12e2fv3uaedLnyd9QfqSptHAEywg5VAPxBNv75gNG7qqj9ZJFv4Ad8cxJbcc",
  "key25": "5HjSXCgQbLAfB13w5cU8sn3qiivYiafE2wsphLBGirngAWrmMrjPTcST5K3MMkrF7xSfYxDwKnNWSjqzLharCeAu",
  "key26": "Qu3XBHetjH182XqoyWMhZ6ChW8gsjmoN8dCdkT4bVqfigC5nmrTchc1ykoHc6kVSmBL97fm8AXbzqzCuKRNBt4X",
  "key27": "3e8JNocJCphtEcEStsfiqddb4MvYdNC4CPqQYuuQXS7NfkWzVM9r3uyHFRVZ3wYt3eGRYFmeZy9gHivWwM58jbk4",
  "key28": "61YH2BbaYNAD43En37XYmmS2Yw63QFJ9rYEd4E1qvWbg6Bz4Utc9jET4nJjgg7JUrWWmj5EqQXjfSghbXLAbgjQh",
  "key29": "3CuXfDamRSKhXSxi1W4UexxAVLTDvkZjWeh2P3Cjw8zQCdsTHSxLT5UjPBwp1moFzZwFwW5FSETnVeeJgm2S1ZvH"
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
