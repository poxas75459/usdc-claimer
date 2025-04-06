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
    "5Pddvp4PUv7T45bGfAaVTbb7Jkrmnxsps9dEbpgPmAzwVGwU1uhWvmheB3pECiHTLAVKt6Grgiq3LAzpcZ4rcg7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aF1GmoxyukfVSdNJeoQpZnE588LYY9tN2N2kSnconWTipQcqVgNACbv6BZDUYtAHZxBgqVYe8HMQAifMH9JBaA",
  "key1": "67r6WRtZ3REb7Ao5vs21M7WMZzJcCzjnBRjo95twqnusBRaUitiWPPnc6YPV8oaP5ftJwdqYz9bqMhsUU2RHQYwZ",
  "key2": "289y7BMF5sCJDD95ruoCVRXTMLcyPxuJfmMj4quUotjTqMpWB5ivszbWtZeB3p2eQhbSyP7agHc8wft89sTmauXs",
  "key3": "5H65NuU7GBXcGai6vKxNBG3JcMsiH6vPiqvu5LDfeLxoEWz64HJURn18DuEvLHuK2oeamtWo5cZmqXBG72ej8zik",
  "key4": "3cZmbbR4bws7eKAuDxJujSCS2CrUVv5Vvtu2zZ2XUnFSwXXMhfep5uezZyCH3ZNiGT7ZiWuaGU9c3Sv4R5BXMyDK",
  "key5": "buutCvmen5CgxJE5ffybRNrbWFZQ4iEqXiv22CAf5DEP6NbC8zaWgdffdwfHyAJmYZLxLh9uuRPxyob3K5yQuzE",
  "key6": "55Ch4fMemCyw6VdsFNNUfiwvhUuEkVCpJBG9qPvCxj7Z88s78px58YmRVp225ba2CwcTiEGKrYCwgH9qHeEaGUHf",
  "key7": "5ki8WZoh4mf1pMwyY8NrAMrzQAm23h62125Rr4pF6tZQtQQvBa5Z5SBN1qcnx93k1hjPYfpKLxbWTTtSoQjdUpyw",
  "key8": "4BqgTYjF9MzWiHVat5dswyEgPa7BvrVr41shKVS46j3nuqkCxEWZNFaRV1zRMMtssDWsRDp7w5XrnqVqCRgKqtyt",
  "key9": "3k5v4uZunqpZ7kHYjCFj2HwxzyaTM6JNpHcmcqFDGtwCQWKZAdiwZyNvgoREWqmRjuPP9Kek4GQJscpPpPdKTDVT",
  "key10": "4XhxYWi1btJor7u99c25ZiL19BK7wXSk2HQQXRnR2MwMrViRe83abiSxbhv9tYnkdN7JaBfupvHaWCK7SUicrPi5",
  "key11": "2bXVjpyhGkHDdsbwEyuKNUTP2BHPBXSoELyhLioMZvJnAPqadAGu4ZwPFMPyE9i6C4Q5uNf8yfbW5a7eyi5X48MK",
  "key12": "5ho6gtARAHby2crmL5ua4Qq55hVM2h6EFs663LAbZ25yXWj9kCsgUKpCFKaPE6ciXrmPmeKHmL7aajJ2PEXvci23",
  "key13": "2DJ5EiitqF4k5k4gEKdYbf4x6MWVAgyEdR8pzcTmQgYg4ie8eX5sd5upBXgFLhx8UCv8noHPvKx21PMzQb3oxszv",
  "key14": "4thXyQwBwo1tL9HiC4Bn5XszX8wrWiha2McmUTw6HMBaDMtsFj1P6TfSJkAaX3hQGeF2FCBFxPMgbewV2hPWJqMa",
  "key15": "4ZbRNNg6UWtUVavoxMuXa98SPUcxkhxnoCygS6ZF7MinKb8Rcmaw9iUg6b5o4NbxLfqZ258j6uV3J5r4jMRhtgXr",
  "key16": "5A9UQLo5awsQ9mjm5HLh5T8gKzCxmUMe6WjfnfmcFy4WKai29wcdAWwikGKNufv6oq4f4XgDNK2emA6xn8b31ts9",
  "key17": "32XLz5F7dbdLQAkwGWrXBjs9HSyaMnvXNGC2N4JCDGP9sWj5bcRYHjyj98QMCeZGBdwPsreEcQQwWMWey3Ukruh5",
  "key18": "5Ha1ztRMHWqNG9AqzNt9o5adQWiDvn3ftu929jHZLSwqqNqjqiqMBiCk3z4ezxZ5AMpM6QoeSVPyT2pk1bYU6QA6",
  "key19": "EGPpHdfrTTuSGwnu2BM9my1FW7VD52RkeuYizdpaQsPAVkPHNg3DoZFGgvmhk81Tk3qpWw1WFBqNiMKpPVMNRLB",
  "key20": "v55nwK1vjA1XuyZjjb9gnHb8ieLiYoUdiD6TJRM59R7ephPu3mgM6mYzHCRawMcK3qgpkgn7jTnmnsJFdiqSWUE",
  "key21": "2Px6dwPthptixBFeoxHn3vFLVsBeESXRv7pv2Qax9ecKiL8T19RZyzBz97XiMkAHuaDvwY9Vs7YhRj6K1bm3vyje",
  "key22": "2vyG717mSUmHkLVJAm5nLk2cpuPD3gdsHvhjrKApsKVLneUZJp5zAsrMe7mvtUY9nEErMSJvijW5m8mpNX2HKcL3",
  "key23": "2Yo8zGH88dBFFvzU2hxRQEq1TzwwyvYnotummndGMQtP3uU9STVhFUPUm5Bh2c8QXYLoBLqybbrwiLWzF1VBaLVw",
  "key24": "ZkibT9o4kpD6fM4FRVfgbFp6bqp4JgKMAsREH6RwsinW9rjxAjgZYA3aWcKEcmjVWPptkCQnRUn4UHEBPBrpDKN",
  "key25": "9G6kd8PpDSAT9vRMVYbv5qPDxaE7Hu3tatqAzjmCAZFFNLEggkB5EsyiGfcrBuxtPxQbtB8teByEn2qAjDShzx8",
  "key26": "4TZVAZy6bBgDyGqLHTUhx42jdAFAehdYvtY4WE7ohCe8CMZxTPG4Ls3MYHEx7L2cWctERvGqQgE6gRn1Evhc3m3W"
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
