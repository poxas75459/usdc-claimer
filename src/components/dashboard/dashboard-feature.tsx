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
    "jz7txADbhAze1yunZMq7uG5rCQqCSfpwUXWywRr1EyENZpDQYH6QwHAb8yEY5uB262CHuykmi5uCqvZRV6VHQmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4315Bc7ECA6x9e9VAQYiAfzFyJTuJXa97LDdeyzZYBNACreWiqZwAyCRnPyNd4YqzndDUP5dYGKU8euxkeYfKK",
  "key1": "4uxCwPhVpT6haL2Ps3bJPRWt7sfnb6uh9fn8r69U9BHA7UKty9HU3tiC85jyh2ktYENcA8gTKSs2iqMJhv6WtgiB",
  "key2": "KSqpRXMyZBAmNVUDgMb9Ug9pMHVnQwqiheURywovfikmtHYBYSaniJp1qMS3fgPYEoZeGuf2Gy8pxVxoeAaVrdj",
  "key3": "4Us3tbBbZxHqFtBHJ4tK5kaFwDiXx9K2xmWft7hwDjhPgCbpfXiPwqv84toaZtW9kAq2EPhihHtrRST9nCmSnntW",
  "key4": "2q4BcvEN3vWgCscd1PaXN1UBh9o2fbgwiHRzGnB5kfFqFxdpmrAcfFehearAdCMayU7jbrBqYsydQF31YRJkDEyN",
  "key5": "5neinEePnwWnUr4zGF2q1DQ2yFyvVhPeCMnDcnhjwiumrenhYy39yjBpYxk1Jynz1dVFHxqbp28cUBzwQpFCkmea",
  "key6": "qPtr3QvNCZQZqfSD8iPDfNFhtMK71SEQzNeqttCsAdrygCWcP9PAx9PrTdw8Akywnf4BM1EveYqKVgGJbMYFjUD",
  "key7": "FEhxcZJUBj96J8sz3xjmLdjraYYXKq8eV2J9hGJDj9BTTGrofyCWVmvy4HFT2ZU4zSGZLEryZW5s3UGCXLgz2co",
  "key8": "2XESc14Cbwfen8Ndvs5xXwVY6zU41kD7SZkSVcQHhJKmhzA5md7yXVX4eG8kCDX6nL8HYYg2PGEort5usdDdGxhP",
  "key9": "3ULpdQZrB2Qfn7iwnQrReM369qUpw1ma3zbvSUdRRZyWSG81ud27JvGV7W3zmMnsV9wvBq5LFLoZey3zJRJBTW35",
  "key10": "5YxcbPsvqC8TBbe2nRg9V8QtUSAed9MUP9B1sJw8PYWTZwLEVPpnx1DqrChynSM47CKrG1VGGZRDqSSHzpQJgC2j",
  "key11": "3YycrrhhyV8iY3yfDYzZYnkvnEiKfnuGC5KDXpJRg1jgEnvqEBYbCFQ9NyE9jq5nhf9wFZuH1iwXAz9uPsutBUZh",
  "key12": "Fo9emzALzzyoBE13HKCvxFcGovhFjw2dFgA82Hsq26CCNrNGNNyAiqCjfgkvJunkGwLKrneMTavRsELRp4uMq8a",
  "key13": "2HjFz4g7VTYjHnzQsh3uHpP4vDzbeWxCGVnmL49nPY1gED8ctvpk9KYc9LnidAZbsHvtrsLQY3wH7PdrAuNKxSw5",
  "key14": "23adybUgoej5TdWBTCMpYjsTYkMzHd6NQtki1trFhcCzuns9q4fugQuv6Rn1ibo2f1KLnTzB96AoxSkEUxTR8CCh",
  "key15": "aN8GQT4iR1DHXHkBgckxPNb2Md813ZKNvs9DruuUj3GSKQ6hok1AengycJRTqV9bFyF3VfGeZXnj2DPok2GE26p",
  "key16": "4yDVNBBc7TFEBMdF7sr36pZaawgVVXwLeuYgPMXr4H1o8kMzfyNsLTWvvnc5ZwDT2R5iLubvKxFvSg31cti4DKqW",
  "key17": "4AwgtfRobRDPqjRu4Pu4t3tvPLRe65vBLXF4ZkJ3VK3hQALTNm4VEuMcBqSt8EjPQkRUfpB9k3Cdt445P7eHfg3K",
  "key18": "3j16ZsykKTPHjFEBk7Vzf4SCwguYXXit4KpHZeksp3aNArh2yn4jf696GFBjRK1vJ6itrQ98ZKUbkwaf3PKaYmpJ",
  "key19": "ESar3ihyweric7siunrvXkf6r5xmfZXggBPsJwwcT6LZp7W6LMQWHCEUhTZEBWTbDQAUQu1jr3LoDrhFPS7zoZx",
  "key20": "5EbBYHYcUNMEomvfqkKMZaxWiQjFMPbFsmnFwsaDFeYa5zAjUVqvcBaTuZsZaS3tMHbao9WfEXvbotmKsC2ZUMxU",
  "key21": "3JB1Ab2q2L5GQbeACRsw623D6dyK6Tt9nRrzVGmMswr94BHnobdnc9HgzpMTEhYq1kxJ26HHxm8eM8qSRcGkXtr3",
  "key22": "4xMRpX2NxEwyquEpbkXDKTBg5tNK956srGEicDS1vjcqCU1YJJLZzGrdmQkHKUL5HHcWngR6LHWHnhF8umrowmxA",
  "key23": "gpBLZsrSF2S2c9j4SwFsGFewbte7mJAEXTAT7j2hyDtLfhnJL4tx9MGuLrHUdT8Smc6z5DWGzw5y7ARsoY17Eji",
  "key24": "3JsaRWwUybGKdggoRqFYXwajifXPTFVJvMCK3WVuaBJyprQcYfarcw8LKexDGefUW7s8hHxGsHc3hL87hVDtbYgn",
  "key25": "22HJFHeLjH6MhxJPn5vMSBdmUfGKpF2Adj3ZTdroUT5QXgr8uP7w55ARZJot9N1Pq3yHeeuSm8SpcEgevDZoubSz",
  "key26": "446S7xnHnxFgavM6iogVBSMwb7XUznzf3iYzkJ5iZUj4UBGzsqhkwZkYmZqiEsscnckasYAw6npYk9dF7GciPNXF",
  "key27": "2U8vpx7YyDQAvVEtT1eRTbMFuDRfMdEdPndyWwmtCcibZ5dKKnMsJ7BkP5CUGekDNmFHNDaWhh4A3wAoT3rzNafm",
  "key28": "4HpMUVJow5e3kRbeeq35uVuvswgkyPRxKMUdQBJxdBoA2WGVjUNyvjfCnDoK3GtfbteQ1bJeRDY7XvYuQ3vqu7SP",
  "key29": "2ynDCNpfoXSKkVBpTyUJF4Sdivoj8SfASS1kFH1esEjJCEEbo3QvpRjFAPSMtCdcezg4xo3yd5hwgjwjjmL4AhXR",
  "key30": "59kX8kTQ9SfY7H3BEoMyQPAidxE1ENvcupVEdxtvBUQfWgpr956m5YWxpATtsdCcoDvmyfnssyyqjejq47dU8Dfn",
  "key31": "3zrqEGCjqRB2TiAoBgRroNDShv3FG75Cfky6PtbaFoAtghikeAP2MyaWKvZgr9a7EX9K2Uuv92V1qrVoQouduDmG",
  "key32": "2t6N8S6g4maNHroefKUfvHZe9n1NpDVPH9YTqapNe79j4gqQKbLWRxUaX9FvDcuM8K9PMdDVmkPx4FWH1geSduJr",
  "key33": "3mL6dKA1V7mTpruP77E4YiLGvca5fn5yrMwbG9dgc4o7G5BNJPRKu9Uj83JcQnhXTRD2L3Q2P1eu5XEPCGPqujVS",
  "key34": "5YFHVQgfjqVkZGAPwQoFdK1NnJGEj2jN6ySJMS5p4Cbqjeopjy5WE6vqG6c6W6sMdgr9SADeLpVcQ97LjW7e1gDh"
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
