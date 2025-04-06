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
    "62SVtYmLKGKijbtncRp3PnRtFQEaBjC6zwmZBoYiggV6b1yrJPxokLqoTN1hdswnT65NuszXb5ciPJQDVjMGhFk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t2XNNoieQAtWtKyBvf174T2BBr8Fv2HVuG9LsPnB9RFNTpUQybqzXC9mgv9zxTdbee7hHrkMnmBU1MsAU54H2PM",
  "key1": "4UgaYB94oexsFBztkvu5V1SAsymoRRkuAFhU56GXLkLjj6dL5d6MC1w2C9i9yZGXov7P9QpRCKnKjjbFRLNvFPbT",
  "key2": "2FcJL3AyyzZY1z66FSrVNcxq61VkoCx1jWSxHjU1icSbZFCQuqACaHDPLY3vkVVGahTALDrdbnr63VAUK9uW6C4w",
  "key3": "EgjdeCxttPyDWASHu3zSHVhBTrGKaXqXLB9k91ASYzYUBZPZ3xPd4KL1XTxhDBaLunCkMfTBjXm3sz4xV4Dhp5o",
  "key4": "25bS25MecCGrfyfW9g8Bt9eYFYqiyytyedfbq2a9aneZnZrHBVumXmLHe2qZ2oKoHLb9CGiWWPmVCNJYsFhuvWwJ",
  "key5": "41VXvGHfmDnogGt2SYaXoGkoz2qbrd7cwYbqAEyKaqzgJJoNsjHXJSMiNrhr7yPjJx4gCgYHGJ4g3daexZkqUAss",
  "key6": "32gvbJfeFykdfKuoeT5NS4KGPQbHU5syXZaAm2rXHvg6A4aLjbRdhyyTKe3riENzWR4UhyuEHEaVEuD8GDct2K4C",
  "key7": "bWUUuBqmfMuZzmtgy5Bdw3nHTF8vUbLDZmafJeDEQM4hGdCgMZiAXBXzWc6hbJqJAjfEdgcCrsbbUYZW43gW2V6",
  "key8": "2Dzi2uNNZ7msHMfRf542NHT383XgaUC5vWNmMi6RZzLdS99G2aM15DN29YQUQhreexyStgDFtMRs6Bum3uM75M8V",
  "key9": "4nDvodUyunr3VsbUbLVWQpJ3CoqjCNxVxktLfoqPXVnR4dC5Z4G69Sq5t4EXzgo4PCFgjtSEtAATB2v4hhu3hGPq",
  "key10": "3mUfi4WfsTqf45Nmiwo8AUAQgrjxFZHZw6ztRmLSyFN4HF3LTLeEtL64ymy7WhemPVyWziVjXyetMaCgQAFAqGQ7",
  "key11": "5r4zcLZng2NNNEYXc7oqYUnx8DLbChYg8rgqqUHdMpunyFQp9oDs2cS3ivPtKc8NnQFyEqGsrwhuPYHSQTARoyyv",
  "key12": "V2bAnbD6zb7uUavY3Lu7pU32oNUhVZCz5z286jxWypwXFSmBZPNo7yXv2xFXg63G5BxhZ7HJQV466NnxotGQxpF",
  "key13": "4zCfggDkrmCyK68kW7nVK7eFfSSwfeb1pAwjUCQhMwbRZTkxEkDT1fUikm4yD7a3JDW4DdsDippSAdP8GahQ3i3",
  "key14": "4UMZPqeMq3Z2rq7X2xKmth3ZYPmtiD3CnJySzAehTpJL4GyY9yyodoV9jAnBXPwVJ9KnEtditNpZDnvDCVjtRAL9",
  "key15": "4aojqfv4jf6NLHu8Us249AvVP79ax69DkpjovX5jgHD8PcAWAx9Yx7gHMvkpfBnvKoE84ZZ8U9xYk1QBsY5xhv5L",
  "key16": "3thZEYUcsB8j9ECwLHHtayz41MpRkQn1KGD6MxmSQmUVuZdte8itnrL1HG6a5XPTe7ACc12w8bT3h6sRo3X4CUb9",
  "key17": "5ZCJo7xV1EQb1E22WdpjpYmzMYnoDr3ouAjQMjWVxonCoJmTsEpeih5kenkBEfr8kC5eovD7XhGLcpKy9duWFtiE",
  "key18": "5oEihqHiTqz8BZCYb2d1iUgr2KRj4NtcyJFGMUMX8TXjqRVPb2vTwRKC2C5y8jaMQjRnGYZq4Smf7UeiEhWy5zV2",
  "key19": "2WWsCH3LLA9RyoSzSshHSYGZsQjiZ8z3Y6ma2mCZjVhtkBYexHFMmeZ2X92uPy56LSjuSUMHQzxwKZyLQdBn93vY",
  "key20": "2byxFSqQuLNMEtBj2WVfWYmWT1zUDdizwe87tmgDBStQ1BGxhV4QD518wdFgtE32pypoEW7mpGkvBQ2aWwq4NTo5",
  "key21": "5zzxUZHJWJZNyFfJP6y2xAAd94K8Unpv8FFcmfF5ftBoJjc5aoxTmm3RbhxcfXA2DZNQc1jZci2izm3RRvxx4EL9",
  "key22": "Nuw34ntKp6QpznFDnYar1LKtv7QiWdFpUqECd762h8YTLADjoak587nwavGVadEEi7GkdEWaJApXGjLGyanwJG4",
  "key23": "48pCfGgcH1ekvGc2XCaoDUEL8SG7TQzUbRbSUKMSp5u4vzTgGvcTvveQagy2np4Dk8kJhaEgHxZsEuCSpziAkVKN",
  "key24": "5B8pLmZuTZQT6FYvRL4H28oCASLSxcJ7WjmXaKPn7C4vnhhuxeW2CWEJ16KgGajTtZdMxJrp7WayHMLkRcrYzLGr",
  "key25": "4CoJuwNvGq4HKEBeTHGfWdtR6rxijMctBsyzyi7nEF3qwLV3Z685n5oFmTSsKSpTC9dHsRMozUSfxRAsEcZKSGzV",
  "key26": "gLtPDV24qbcgnhozjCwPAtCDGuESaTmnj1XsKMTqb4u6JcWWnLYV7dSjpdqMhExx5Zg3PhjN2T8G2x6WfnzyRBA",
  "key27": "4SvJLawZkNfiKTxkoyS7jMFsLV16tCWrf7BiGDQBm51FTXqn1Dhfhwgd9KQ8Q8yuLoJRC4pZ931CF2kHEnNCEHaS",
  "key28": "29WbaLk4V8mNXonzWELUXrvJNCmcZxXbNiJy92DnyVHNkJgsnDftQCYVQXc7VUVqVEGhuFWCqWmbN73tmpzDkC3R",
  "key29": "5ZsGJVnc3DuY8BHUvpfHBmXLZuwtzApHVKq8p3NekLQEy24RHZiPeYrP634FCyxxX438E4ZANP9vXYohViBJwEah",
  "key30": "3LJaJLBXk9MaAM31SWP1Htbry2R6gEtML4xqZfLYdsuxuCWfEYeNLWdrD6F7NssuSsyVjY3WByh6K6q86YaaGHZR",
  "key31": "Md5jd6tiXFHHfi4TkL72na9ZEew4zyFHT2Ti9ZAFy4b69h92zkVRr1WaZwB7N5i2uC48wBDhGLH7jLb4k6hf6nE",
  "key32": "36JmRvkDAkfTpxKtp2SaxcX4snpU8C7voDWDpgqZDMdn5uvBsGYtwdf56xVgn8p13eKxcMmUKzExqLuL1b9LsQNi",
  "key33": "2tmRAAxWDy3Ly6uS2Ttpf3WwZN4GhnfHg7THWDdrE3Uz4sJ8fPsBSs5TPudBzJADFibU2CZaTjMXuSbkEjs2jMTT"
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
