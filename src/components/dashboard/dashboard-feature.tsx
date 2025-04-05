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
    "4VpcsDrar2cZsodbMfa5tgvPDcUCGFfdMAmdxv69h8iLECMtyZGZeFvASMDoT9JwDSDP4SzQ3W3ufdgsVw4cUdAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VaRCApANBQAYktefemsjnNMv4umZDMVKnvswMrnD49B2tmGFkonGASf2fsQY8AsetZSBZLEdzYD3CiLvwdRQZK",
  "key1": "32yd7vawBZ5hY5M5eCPFA2JVpbkNWdsopbPaKpmiYgC5hog8y3qju8Z1kW5fjDtsPdKqWBcCAsr4Y166tsYUzXa1",
  "key2": "5TN6APEfEi7rQMSJfWD8GQFvPamayyCDAWreQcZxhtFLXcPtyErwKgXbMRG2v71g9h1rddm7AUaZ3WxrH7gcSCQ3",
  "key3": "5zAC4UcRn98LbXL95Lcg2EcrGzf4fuiBKx1vsz6wyUmHRPwE3SeJvcu5G1gMqT7DuNqTzT3nf5Qgj1cJQeqLuCEQ",
  "key4": "5gXKMs9QumUey4YLcC23pfzmjULVtEc2p7JySpmYaKGoQDuDiZVHLxgf1zPJLfWLrzsJ4KQk4wt9ywZ4pkFqehXq",
  "key5": "mnJw1NtyfiYdWipYaLT8m8hPfAxHeRc669rZA7XLR8wU6TpfmsULM7YmAz6VvfqLQ43Rm57RSdYLGzwnRUF1a8h",
  "key6": "3FARdoym3pHeFTc7eA1heq22cAMLbHssyKXhugS1xNiYY1ntvHurEC4bKpF8s6sB2J7pXWQ3zPznpfUvWzNTB78a",
  "key7": "5TFUWb1UYh84TXWpwd3TPNkqtuq3YLM5xiiaswc7w9E93zLqVP51BApzXbNtWjUr3EzE5AkZ83fx4SCXRAULG6Hp",
  "key8": "5XrSy8d3W59L1KK5JZBb81mxbcyTRuziK9wBJZPJrGVxuBgkPwyfVS2UyUgaZe77aXjqLyGJxRue8p6QLNgLJajk",
  "key9": "p6EY8hmUv18ZgxpWxfHM9bsf5f3zU51TCEbYwPXiVqdBrfpP9vvL4nt92Bm1c8W7RL8XddkjkqaoxVUDht1KZT9",
  "key10": "3ALE4jzFiSXfp7BhAH46c9gnubskP1Sq37XkPPkwkD9YjHzUQonnStnqEAXp9pVCVn9tatLpoN8pEzzowm69YzDM",
  "key11": "3PUGP3uuqUqkK5uXmG5nid2xYmmnJz4JaGib1QmVjQep8uwvccgXSPMRyL4UzxbJeyAqnsggPcVtw5PuoKfwWqtU",
  "key12": "4Mhz9LsNms8NmXEJRoQJQTtFNfi8ZbC9tt7h1UjXcHAG5HcFeo673dLRuRrjPCWyE7pGMiTbNoRygw5ZPWpMvM3C",
  "key13": "66bKjXFQDwgqvYQAdC9B5969wwAP618doJ4PeRhF2sKvNzWz4eCfiam1cqeVmgPDwDXFFJ3vamm1A9oSLwupPhse",
  "key14": "mCCBXZYBS5fDbyootCXsSbwijPkD1k9HF3dP3sQbzsD4fpg6Rk9YUtmdwYC7W3SSsN1xyRGne5e5r5NLTy8uYBA",
  "key15": "2HS8CxiUWTu2AUbLEhWQ6BWCkG3Tn66XLjFhDLuwRX9RS8ZGcG97aFn7iC55QG6qe36soydhY9x62ZV3nwNGBNTe",
  "key16": "SdmL5i2rm7xuxzYK8pBRp4AMQijfz4qF77kKKkCVMn26fJATPwA1MnAxxcqCDSEy834nMHKUYUxu1Y5GNxdHwq4",
  "key17": "489Ro8gqGTMgpX71wPeMtA3XQqZ4eH3euen7bzdYcWAgcsTJFsCTBb9xkgbymXVTS5f13LUR84x6DuaEzKRmKShV",
  "key18": "DBbspYcuvGfZjETxXXeWMX9Zn417MCmiCYLkbspnFEuabfowuVayQ9k8mBQbGswrwL2eSvNLUYZAvF3uxzAZ6Ui",
  "key19": "2nfwMUK6Cc4RZGjA38B4v7hTN5D45QzFmP9LU248KGNqfTm1ZmeWdKQtUQK7Y2v7LT1cv1B3d51EgddD4xBwetC8",
  "key20": "4LMEq8id11pZGDG5u2do6Dbxeaav4BLUV6rXno2kKLAmNXRUSJohP6gz2uc1sWU5WcuZatBNLeZ9ERjZQsD7UUta",
  "key21": "5orn1eKPsnNtKjSMMJR8AdAhqvCzCmFPtTtAXpQuTQsVxwyGxEvGxH8Pg4ZbZcYJcLs2uLKnQ2345KibDE5Gaj7",
  "key22": "2oXL8TshHfHGGDqj1uJVTL1jQV5YkUc5i91z8sAWEfzZWa4gSyqErMeGJVTJEpy6cyob9FcVicuay2CrCuJ88nrk",
  "key23": "wAD77uMV2QLr475HLz2DA2r92ZLSnHyP7xKt6nXtVoPTB9jnKB5DrJzZNWXLmrCMtd83dn8FWwjdBsmq6WYJ5Zi",
  "key24": "dPFtrFw5JLChwXp1KhKNvcBYBFLvMPoR1fesu5r64FtQMqM7FCP2zZqiTak8cyVfaqBnwQW9wbnjLB38oY4gBod",
  "key25": "4fdHdoPWkm2yGA1KQBxJzxhVVxR84zifdR1QpKpmFKzDLcmTciexF6ksDdHapqyN5bQ3TGjoRCxAZtrutG4hgWWH",
  "key26": "2Ft7ezUGtnAiKRQJGZxGTrvZKUnnfee4AMLBMjBkM1E6icuhYopmx9ZBCdjYuGX9XpLeBkZqorda9qVyoQbeGQfY",
  "key27": "kW4Js59ArdTPif97rXPuvsB8jGJ4BCn12wAhz3GU8gEneWQPHzwgBcmdgCfUaHyZikAJ2A2HLcMynT5z4EDWApN",
  "key28": "4AHuzCpHYYMeeQEWWCJjXU9LRdq468PcQvWGqy2ExRtDvGBymbS67myN7qCsnu2NWtx98UsVE3YfYT2ThN1FZsZR",
  "key29": "3zyjTnYpVrk1mE9ju3nVHq6SoXDPGwtXZbvzdDQVaNj88dU341DQUJ4vX6gp11QzJLnkA2ho5E4oW8VjbLBxWtn6",
  "key30": "2YCmLdCVbo2YtMmE296Yn5wG5H2Y53SNo7JxX4qyQbeuokvTP5p9W9PUaDDEGypqM4VBTM9WfkwU3Zrbqsu8pDEg"
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
