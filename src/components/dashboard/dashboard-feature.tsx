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
    "jHiEsKSHgWbKewpVn7gCwu6NrA1zg9XgYiiawjymv6JKW4fXUCqgHHQoCUwe7BCjt92bf6G1L4G8jvn5RyefSW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41gnQiqZzwxg6oTgRb3J1iWgLiuuXx5MfeaLVXgXMz9jvsNnpJcBZhFTPknszgW8gfXkCQbKDxJJz1WV8QHPAnzb",
  "key1": "5DMsKm8Por9JZxyw5cVAPA9Q8PfDK6BjkXwyQGnyXQwguRB8b5zNnt7RpQgUouW6fqDwtouGmwhnkJ9rgigKSnGR",
  "key2": "4eKaUAPvQo9N9L3t984MUNosqN2qCfMym8u6kVL8jAEjsnrufK9ztB5tz38C8LzRHbU1z4Pen9bsR6jfS7s3Sgot",
  "key3": "2zig8pxPB4NeTsBt8hRazu2jYEw6Gyeh78EXfaVTCpdj1WJcNPGvcYDsfXYLX22DQXCYvXtWag7B4fmpDBMw76pZ",
  "key4": "5adKjP6GFi5jKuNqzFTAR5LkR5LnVNNZDqe1kA4ByE7TBuEsiMBJpbstEJ9H3ZfX72nojkCkFzid2r8rVH1keiER",
  "key5": "5A5jsacjuoFGjBkyYVbwLJE9hzPn5z3PgrprYbfu4bxafoSRG7pumZgNV2jDGRcWuxVRKmh55hToyDEe1kx13feM",
  "key6": "JZ9PmqYfsYy5n2W5hP2rRmcjnjwgsG4xdKbeFMQ5EJZqwQLSnYj14wrtxStpe8pRc93EjQi2cDnrYMT6fxUzfZi",
  "key7": "jKbHXJAhwhjkBG5xrhGyi49UrM2VFCHBHnRzjqNxsVNzsK2ng6EQCkzCXXkQ43HJiHAvJEtzjXi7HcCzjVG2K7b",
  "key8": "413DQFrmADavwmPtEzmovepfkxM8Y2Vmpg6yAZ4aLaXdRS6nisJcBgCxkv2UcsDh5gNKFeAMnZhPV4yz44yd2APi",
  "key9": "5h6K9o5R1wVLujf16oxhYw3vQafLJcLLgsfTtBrdiyvhnUWfuCKTTeh7jEfiVgYTsWZnQV98Z2o8yyFEgNAEA1gE",
  "key10": "7YjCTKkBNR14vqMcf7Jn5K2THee5ArcCLHxHMxr8kNsJaC9McnrRFf4FnM22JYjEHKdkzxWEzGgxmvgNdCAzj8F",
  "key11": "52RCjsG6zwccPNSZeR47fXvYkckv7yfQqG4z91N4k2MNY3juRz7Tb9McdtGWEs3a6xGiRD7sXhqMfCW2iuro3Evw",
  "key12": "5DUvKks5V7ua2dMR5eBk3KVwchDe9XViioXQFckL9J88FgSz5txfnofoGcd8Hpo47nZfJpYD3tGacH6LY8adTKyj",
  "key13": "2hCDzXey66QnQBFusWMivn394cET3BtW91jC3vrw5yvTzkkMoGTKN6nN11qxSZhoXDmf5VM1iQrEcoUiavHhRMtr",
  "key14": "2wG8fPPBLT9L4LojTKdqJhYo8VRy6xVGwgVfnYZqMvFjxRMwJw9kbatM1TsETJCsd32op2TWWsZq2Ud5uBR84KPG",
  "key15": "3euiMC6NYHUQZWveAZmynzFnNmVq1gHs3NHvZEQ8LVJQ6hQiojDcx2dKcS3Yemuq2tTkZXv4241kRWpTQungdS7R",
  "key16": "4KnUUR46kKTTRQZR8F4CLYRDWmaKAKxXVbCHiun1q7ATJWoQaFta1ihcPbnAQYMyaFnyGMdGfEpgh9wnpCajwbrn",
  "key17": "4Qhk2uy8BBqkLQmj2ByK6nxDfsuTWWrsEjjPXeE2FDKYxMuvicAY1NapTrGYdQFv22arq8oGq4nLHH6qfqrAsbfB",
  "key18": "5zgyrbxHX4Y3F8G3qth2SryvKYKvaEtLQUn662aFRtcbWpUzp2mzEJ3sV1FFpSge96BVMqVErhFj4FzpZVkbMxH",
  "key19": "5BCfwxKjeucQ3QyExtEmaQmotGgnjiAsXervrcA9ueSbMDUt2Dzzazw69sibY4A4aURx82LSavaZGeeiX57ZCy4G",
  "key20": "5svyUhGaUNgmDbyWkBPp5kHZB5pmqiwCCBNU3MxFTu5fJ3wJVhe1uMMPav2PZRYyLCiU11E71C63egjDJkDN63cq",
  "key21": "4KA3xyaDPoVEdTGf5MV11dqwMqGQw9QQVMZGV5muLNNnepHK8osGLtmwXyPHNYvzpF733AugXsb9R5iA9RjjEjFy",
  "key22": "3pwGCWj7o2RJMpU9RA5BGBANAe2Ne7mQg19kTbs96csFNb6UTkCEn5VBtEoyowe6MaKv6qJK4APxUiw41Ntb9NcV",
  "key23": "NJ6ZksteYd6ZAMjQcmnxFZYd7vZBD9rntpYwd1LGosixDke1HFTu9UXmy9HTqLzBnQ48MWRaqskrAGrR7DTnqrD",
  "key24": "4dMtKF5xqx6MRhFj9Wh2FcJsSJdkCEUbjCresxiXhBxet9o95zLD93Unvhq4LQzdrfxEmrpqgDFb4rG8DtJn2HaT",
  "key25": "2pFTEwQ4TtiBJdkvABchZrTPo2xg1zdbD6v1vxgNzjoooXd5y5yirg4P1Tf24zYYRND1secpK6H46eRMtAG2KQDk",
  "key26": "4tLh89tDzvbxmpJaDmutMgPPsAraWWzFTXngaxo6agCzRHzLTLMmmFhQLBtyeX33Jr8FEVSTMwo74QetJ6NKsCKc",
  "key27": "4S2bn6m3AB9kvcaqpA6PPNStFfZCqJ4hophcW7NybwJxLpsNYHxBXw1qCXESV6T6xRfnCgm9ALDEBgiZW5dKk2sF",
  "key28": "kyafYwP1g3RV1RTNSZUTguwJbg4ijXGzrXLoFzjytLiikgGDe1s3L2ufeN5Sow3awJRu3w164zUUGTQpDhMkK3G",
  "key29": "2ZrLc2JjMGmMt17vE1RNLKhAyJA9AABCgiF99PWt1DkaCK5pMfkPPB7scbkdFmgPmcMYrtBfHAyjcGbKckkaELPt",
  "key30": "2jcxDBuQ4UE2d1Eu93LyR6HQQ6FBYg8d7iez68Be9z7rbW48mztp3JMCfQP75JsEegUCrsxvDVXBdxccWVeupgXu",
  "key31": "iKouqFbf3vzE63ZUYqyY8wULQbqfUud9NTq6DG9BxqDW7pE8mGxjSgwFkADWakmWPHfExp4qUocaGyRhxFstNpy"
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
