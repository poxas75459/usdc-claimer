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
    "2uL3YJnfssRe5n9UUK3E145JLsMGEiJ4cPMZgr2qN8SghY9knr8NnPyUB1uzSr59ggqKUrWw4pT9bpK6MeYv8zAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gap7wpknmtNGbK7JP4FGFJdSmkBLpe1p1WyXPnJVuz9SiNnjRaxgPncDd1tUR2JJC1G3tPxmfXjB6XY9W7wMNP2",
  "key1": "c1MrB6PHQ6C6Z3YgMjQJhXJHy36BbV1c5mSguc7CtJchQ1funN4CEdgVYMimqtPCViBDmSqCmQgEeKVhncftSr6",
  "key2": "Hfgzp2vbFdcUhpdbftUvzFpzvUjg2iHdL8yDLoRwjNcCVsTjiDked6TEwTLDdspHzEBXahDc32M2Jnj7cPUN7wg",
  "key3": "3M3pDxgJ5y1wUy3AXvC2V1oP3T2C2D5oWReLaobYZfN4cJ4JQL5wY19YsNGAxt9hR2tcJETuMcH7ZPHD9e7eUb8k",
  "key4": "2Qe18csvnD9eNYDJiNe99LW4EfSZSYJ5boXCAuLed96uXqLVThfCegRehJHqQ4mcSmhnzAKdHFMvrQtFA5ifV5x1",
  "key5": "3C4FgTL8GLrbdMp7j9Ai7DdnANKRVtA4ZbhmPh5BS2VyQjSQUtpwJLjFNinXquc8L2V4DXeZGmdena5hojAcRPrL",
  "key6": "EUZTW5x7DFbdk5VUsv5gYH89bKR1A6Gn7aEjmDsRrttADECFdCZPEQzeEdLsNkdT2zvvVejcp6rbvvdpNveqkcB",
  "key7": "KNVUe1DTjbY59DQ2k19w5TpzuJQzqy2SQ1qyR1ABD7GR1a34fWbqGMSWHbAfHw9Cr7taUgqGsjokQ2MCamNAgTB",
  "key8": "39oraXg2Uk5prA1rFGY2kgGYerHiLEDHRt5GNCdnuPXVC9nVHzBXbgMnHsNNQVsWg9DC7re9XPKsCDPmtNso2sht",
  "key9": "4V6mqxLa3BXyNH3vEhCarCLk8TwUcCsxJpLZh8dvEi5G9eWBS4BBaVBA4JhGo1kUuoJpMu2iqGsvahFvC6p2sgqc",
  "key10": "4qHVxu8sximoWewvoaJGoKNCuM96mfbrgZgw2YdTYdQHKXuv7FfpEczuLKeSCspxRcwiqAYQ4vZoeQ3qGrwWtg1z",
  "key11": "2y2gRMscektFkABJDSM7Lxz3x5dLgCALz5y35cyANCxRr8iJrQA2H6nZFP9r46KJVaRWQ3t539sfzPfuko1q1yVG",
  "key12": "A5bu1AosTGVw54GvYEqtk35Lxok9daYDga8SVC7oMbeZHqpZCgQudhqRZPVVSos2AT266fCqUy4iM9RHXJmZj93",
  "key13": "35TnMTctgg3Tr4oST92QTYL2GGqc4oUuyECXRJWVD2eo9VBbCmBAPiFeoAAKA64v7rirdvo1ZSEUQUP8fxNTvfRZ",
  "key14": "3YKuFYi54GQUNUSpt8qbeCnDbw6ag8ArnE8Ukggt3jDUni7aGDP1faE2utfXyWaHH3zmUHRgiuhSgd7veHvTEtys",
  "key15": "62wT9uJz3vWpx18rrxPDPTUcMvbXKNdewdjkRPKPKXpkTy58f2F4ibnGWabZxSSwtAs9aqqKLUbj4Z8zzVWW7yHq",
  "key16": "2jvNLoNQ24MpDh83ofYPpYryZ5tHLT1BcV5opRva9SHZZy8AvMwBU3LCbmuEmGrgbpmb3XPBrkGiaWBqN4UVdUek",
  "key17": "xggEjWF97xU6rFF1Aran7iPrXtzYCjWm7Zhiw1thbFTaTW9fb74UNQ48Vq6CWk1boVkYpPaRCGRM7fin6RAqpqg",
  "key18": "54QfNemheAy4PdvJdgCYav5oUpLkqGUM9PABCHYNh5NLfBrwNCGCSUyt2sQWSpNHCyaYCUYvBDmmqdvKpKGCiUzA",
  "key19": "5W2EcdQRfUbUCjB5NR2m1Bnw2MfhgQ9EyoiMQEDjQsnwiSXqNohDKZmFHaH51EnTkLAhb1jcTjoJUSQvCXKhtNpo",
  "key20": "3ypie7z4a7TnwLcRmsrDBF1VfNFwTASbJSa9ayXFXW3C2ajskpQ693CntPdKUNzChdpT9eDfSGncNb5Za12dtApf",
  "key21": "3SGyoBYRc7wP7YDhWB93mMcLrtFtyZ3FrAVJCc6UWqD4e8qPUYXcpnPGqCh6mw1UjYVDumNGLJEigasMFaGzvyB6",
  "key22": "5YqpFG5PDS97iYdtEApc71RkUNeCDabgGWSS6G2MVnQ6SV8QNUhNMLAVBTREincGh5Sx5W32YkFoHZtJEJruChi5",
  "key23": "5tk3ZxdcPUHJkTQ1jpFdwffXTc6q381uEH3QfTwg7eHAEDVd6TCvTXF1qjviE7BgREdKess443wLNtiqfQcuHPuY",
  "key24": "hRhezLwXv6TmSBAj25bVEDkH4SHCJxdJ8eoqQgQANbe7cnmUCLikhn82gSQiz1zThWXNYGjzXTcEaT1v3eFhgLJ",
  "key25": "3bdByWHn3xeJepzaxNa5L16JAveZwW1MCgSeUv15pYWgYrHWQtjRUyb8tBareDyFz6d59oL6dS36K8m85MVHAB8e",
  "key26": "5hT7U9zNN3rtGK2BCtLvmqmTPxuG2KgZsfxEghdTRn7NK6AS7Mnds8ESAcUDvkmmXqm5kHErLTHdX3oaBs3Z2CGm",
  "key27": "2cKtBKG5wXKgthSoFCt7C5yGbNyz8VKZvgPZQoTkAtDYPyYWyHSM8rpWBi6FanGj9zKn8BBPXMNFVYVUkgRajAzX",
  "key28": "3VHZfSB9e9U7kWhShpxAwxZP5H8fQtwj24VmSzjUhku4q1N2W5GE88esfbmqBaoniWFvD2fPnJpct8pDC4Gfb9up"
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
