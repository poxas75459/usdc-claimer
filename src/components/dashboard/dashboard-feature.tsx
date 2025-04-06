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
    "32bLBx9fo8pgjEw3bvyedBdY3nxq2LcBebrvJdbLM7XLAAktSCzRbUEq5VhfcZvEshZrcR3xc95ygbFLxRCmW7TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxcawmrqRumKLMQ78bWZGipn3p9JiVEcSvfaTPK1JthSstjhht8fpEgAqaW4jCgiepMKvwviQW81G9fBr2RCwHg",
  "key1": "4vZt9TipekSE52pt5qygA7YNeyU96piWp5CFcK5ZjwTQDqSyqZoZVvA4gqJAnCfbqdNvSkETB2LwggfRmAdxZXgb",
  "key2": "5MVvjhVw22mG1EuA9JH5ds25UU3BxT8tqvpGgFDJeeRPabTj3Zvkja3DTmsGmZ38c8WfJVokSRe7u1b96tu4puiP",
  "key3": "4vZ7Nu7o6JmcB59Y1xzGVwTMm8Cnhg6TiwzyWV3gRrAtcfTevpieQUsDSVoSxaHwtHpkU5JK8c1PJNBAA3rnSc1M",
  "key4": "5a4tTfYTPJ7binpx5B15jsiMCbmEqd91vskyFZtZWeBJVfigBeskyNgbSRk2mfRCxE9LSDV16ah3Wodmnjkfpjke",
  "key5": "2pwUuxCjDB7vUwXSXPhnRzsWNTm3eZsE6TJJVD2vSPv1iiPXTPHeszTMPUV1eZpBR58daApYdsFUEcZWj9DYYhq6",
  "key6": "5YN7px5jc1Ed7Sa66RoFT7NzmsZsXmU6T2pszChPwqf7zvAuPjFUEqRPLLvBiaiiaNhMfu59MTwnewf29GeVwBp5",
  "key7": "21xQmw5DsbH5LKV4x3Hbwcc1oM69s9FfGy5Z3ckkpdWLeBoWbtyBUXE2EaGAcYA86qqiKLH5ggrRPRwJcPMqthjz",
  "key8": "jE68LQXZYVBmNp4JZcamigNnfva1cEX2jmASSSGpB6HehS7AKcWiiDx1XR6CjKqGJ2P6Nyf3hpKFqmvxCP4opMj",
  "key9": "ukWfC6gG9VQzEuxpVaKajrYfBU9By88AHSzVhFDxXAGJthuAVZbRgwZHa136NFHpigN1rT54ssFCBrAf5zRKyLH",
  "key10": "4KCquLJ6MqBTgjc6sGj9Kqgfm74PHccdQ4JaztqWSaT82pm9YrbBm32wkABHXZVvbb8HMfkViPNGz5QK3bC1wLPd",
  "key11": "nbMc4WtovnJd2oNZs6ZxmGYbSNwmfT9yDSYBVA17doANzcaVDaL4tqqVSMNUwaPNP1s8mvSfvJW2H7cbmAkbYuH",
  "key12": "2hmpP9YzUFVJ7vqox3nLRVaR8Rz5zPBtJHs1RDVPetnrCuXsod39iqBtvKSYNUKu7vnG6t5DsauJKiRcaiF6kS8w",
  "key13": "MRwoosrs5DiHwmCwaYR9TuPma8kNymSykwEyWKaFFED111qWFirdUfkeT4vcBBrDAkVQP5dDoDdnuhYypV5EhNb",
  "key14": "3BbnPcinTP6y5D7T2Jm1pujZNN1wh8FB9QJA2FwtRy1GDsBKLzvYBX77AXnByVTKXQvk21M591u8psuX98nuXozz",
  "key15": "2929whF911mM5AcbQJRxrzp8DeQFzdPKZuGZVUCnWk6MXMNvcL3B6q756mUpxYbu9zF9KDv55NUmAdUwZBZrVFST",
  "key16": "3WAjmGHjqQ7hkDAkHERdUEzjXHKu5EwEHQb83swUCc3GtgStr56BBBsHjMN4HqHdDNYu9vvEQyzpstvzkqNhhwBM",
  "key17": "3ZcnjryMrmxvPNyAyGZpaxo5nBjxrT6MQCLwvW8CUNHXRLRgbQcjk5p3dgpxoskZFt2FX4pL1fwdhff6ZNdhxFTd",
  "key18": "5tNDtyNS7kLtL9Ld8w9PZ1coGzWPsbpscnrf6kBCMDmFGz98FtTvymQ72nssrT5cAAS72q383RyimNuEyTCB3fN9",
  "key19": "4kBTEZryugphmsCnmouoUneyJT9HYhnU1Sv1Jdt4zH5VSPMwEBL24gaHwyKi2ht77KZu4XJP9zjzs7ouKENeZZzA",
  "key20": "uBAf5CaVsQEbHB8HFZHe66gQZpQYhhSkt2yTHgQW6kgtLa3w8dqCsURYtZ3b45aMFafaFFGE2ARGwfT4ZFZzMgj",
  "key21": "TS2FUbHisfdyux6snUnDWWyBEeUkTc4RUfR14d6u9mmsfRdPR3hUwoupzT2v5UygrjrC1qfD82FeYaJvTCpo9gz",
  "key22": "DVMuF8LT8GU7v1sUKH9xmaTfkREyh1mYkdUkaoeMLYmJE4e1SDYe146jk2sQERkvWtTb2PpnGpqCwzQtG1PgC7p",
  "key23": "4xmUGp4RcbeA9qNkLhQH1b5BWq49JQ9NTQxtN3fnrrfXNqekRBEAKoXjemmpnacw1CtbGNEjUJQoxZTHqSpHWYzH",
  "key24": "5Y1Vt1TF9L97qWjHRcqjFe2pW2BHeKnTdNYM8QEK61At6XU5QrXFw71dC1TXwDargqgdzi8SJQZ5DSUC7K8ttvMd",
  "key25": "GV1Y79FNUirz2N42tVRHgj2o5kQMNScVEdWcVopT3MKoMUpfFUBLz3yQkVg8WcQpcgpQnDvfCkf4EEjQLkminpE",
  "key26": "35Udp8dfzRS7BYuG1qexivvYHiKexhDnQ8UwijWWc83jFyTTVzYfBroUSF9A51WwrmVAKp5z9CScQgfar43YdgzP"
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
