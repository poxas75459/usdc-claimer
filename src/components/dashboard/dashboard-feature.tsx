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
    "3XxK8Hxt6fopZpeSVRPfGGoxuYpVbauz4u7emt5uzhRV63CxCbPZ3rvGjVpcBK87UNgsSmAuT6NoMuQwAajju3BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmWwqzbSQoNV1tdZfa3uu4dDgh6z5fiqaUBuTj8mLeyW5UfWPCPAgyqDhemTLbuMc2K8XmAuFo9bk61rhaorNfV",
  "key1": "4ENyBEj2bcDptU2RL84bZjGPcZsV5zXFsdswvwKDsZRuce9afECJTgaCGJFvCnsae2RHfzESJSfRvjny3se2EBvn",
  "key2": "3BPavjaCcqFXRGfEPH5uFa4v4zksBp5nyddy1vsFNgBgTvZ3ScpRsXVdcbbeVPTnFgLComzfjkftitanZAq1uJEg",
  "key3": "49gTgLnokdMXs1wCLEkDtjzb2VRwW3R9fBqVKWahD7XRtbHPWN1xQAQDpUKtrTLNekNWvctREonev7kt9MYZSoqF",
  "key4": "2xmwmjPHpbGtAr4ZY6WXsPTWt5nWbbHhuGbKR3cPbZgrC7d7AjMC3T4EjM7beXTHwfM6ya8sJCJxoXxdif3zvxse",
  "key5": "53YhVSr9x9A4KwFyNB5kYjRZqa8ELkRkC7urCAAiQZdosX812WTfjWPsJAbi92GJWksPu8zJ8aieW7SuAEtFMDte",
  "key6": "5TgMmf4Hk9r4WRsKETkDYgZFSja4LsX5aMmCH1iyTsgsUNKeJuz1tmYm4vw4hqYSKaWarpXHaD7QZzUmKewVsowN",
  "key7": "3gdxcdZT71RmAGAgHkPVpzQTuRSTS2vQ7KqrSFwaBEnj8Wrk5guiqbyCuZezJNtdxNfSrnvUmA9zpLuVqC3pBYdr",
  "key8": "25xqPAHyQ7nRhmP7aL6yJpGBwVci1ADfXiPsqxxtw4cGp1zBuZSAYdXPqA8bAj1MMA8AzByZ7KGQRuJ3Cg1eQYTG",
  "key9": "4ny6yX2azCQEMsEG49iPtexb4yF8MhyiVqLmKrYjQYZMrzRD4C7HAocQLLjyseivqkHu2oYrGjeRog8Zq6cNHMb8",
  "key10": "poN35CJKfDAVpHcwGe4Z1SggcaUbuMfuDguuDkoQkRHotfZ9Y54gq4BSw7cbs8RXhLzwqBVvabdUZQLHoJUWEzy",
  "key11": "2gdSy9dGguH4xEVp9nqp6JScnREbWSU5XCYPKbHusSHqvbitrhdoeJSmHKHzKMn9WRTZ6gqwZk6paDLPTJTtxkd1",
  "key12": "2Wm6bVKyBaNe4GTb3AWBZTtv66YfofGPRJf1ohUpyyGrWQhPa6vn8FrRRtTFwcog6xwnBC1pqtRaV2BYYUGtboXt",
  "key13": "2jyi2kn4ccvn5YvS63Fq4UoJt6v6EFwcPc6p39j5LZ34swXKxjLZh53DnJUmfm4WKDtBUkDwzBotXrLQtGuDUQku",
  "key14": "48ZZkrizetFqLHargsb6QmF4ENQpgbEpDAQ9zMbF7hEGTv8j2u7YjLU1szCxz9SgpJRe258mTmN4MdW15VpBiQqJ",
  "key15": "tNPTuhVK579xYD9TTwjDQTXosv9Kjnh4juHrqcsxNACRkzPiJSajKBgqHnNvY34jXxxKkZrHJjPqE7TcBhZNDeH",
  "key16": "b564tPTxrRqZKcJaNgJLsScWsdB6FXNcced34RbDEvWEJEVoUJtFwpgovmyKGsYNseDx2ydgw9owuv6VmGjZBQo",
  "key17": "5WYGAke2pcCZJZiSyNmcmmNeZFNq6zkJXy8wDoxENeWuiKhnTBmqv39UZLUCqwVDnz7awLvUVe2DAGwwZ9ThQjbq",
  "key18": "Dy7GsJrBb6ncMsrNsZ4y8mpHiUngkb2p6WLCcX27H2kfwoj86iWngqaor9tzPaHFwZaHEzCped747nNGCwvGyCY",
  "key19": "5JHWrgRG1GcCgav8qyDTGKMDF1EFCefNsha88Fj4bC66oLDvymweBmWx7Cq9LLF6CCyKfAt3x5wmrs4KeHY9Z3gL",
  "key20": "HCj9oUaFjn7Sxj8tcqMfYZgD3LX8A8PrAasaF4aSnavUAD4ghVeK4rC7Y7irDzzqGo9Qq7UQwADM8CbaXQmqViY",
  "key21": "3bME94HfveazzbyRVNgecT24XBoRcBcBwwAi21EPg9UeqfJkhiRkGJgKNLpnz3og938Ayzt7DbLmfe7kzeqj9LjB",
  "key22": "6sMqnk1VR1igd5KX628uHjGh5GqNUsTMcwx3U3voL81h9kjF4WotGwuPT8FdqgKWoB7zdV5JdKxTc8WhJnqJZcN",
  "key23": "31BkkRuVSL5wALNoZCwFp95fpqTGW8ZJYSyvwuyNLYH8S8TKAk89P6H4D8A1E1XJSRT5jigtxL7ctsTWqH9RzHB9",
  "key24": "3WVofwagRVc9kKy5F3FYRe98MSgqLdhoaab7Hct1eRH9KpVGbAaCBB6cACsLWSrBVCYaRQGEaxJsyJ1zdBMqrcD1",
  "key25": "3eK6jWJhopWd4DCjkVAi62EvuuHxB4q5qTd4DeNsNfdFFfHpbeYcHbXN7N5xbtVu9RApedS1PR1Roai8151t7NWr",
  "key26": "5nNWpKgAG55D22LwuK2GzLooFY5WrsRehGBaZ9fBSuBZbEZmUKrtRpkT7h93eU3hqVLbaAjFQCMgx8YAHuSZaBws",
  "key27": "3qm1wi98YTr3bZdMYt8u9hr688ajichePqoxC7btP37BdF9fayt8jJ331E4ebuRbkptcSkrKaRyE73XFUu4Yv7Xv",
  "key28": "5vRptDKEnhMGxrJMzXKCZcGPpNGTjKNNhsq36nFUHikAm5YEw5ni7UfnNJi5dYiQSk5otP54JD9T7E1BrxRgcKSQ",
  "key29": "rbWVsaJmPPJzVMDYqyuoCGzDV3ZTqTYpz8EVhqEDu4JvsAz2W3iteQQ288u5CUmdyNkX18C4roJziFwMyW8G8BR",
  "key30": "5jauAMmML9AwMQT43hPK2NdZyMog8NAfmyV3w5jJQ4nBYzk2LGnWj8MDssCFZhXgz71QS7moirKjNcnegEf3QPaT",
  "key31": "4EhD6oBXDKAqSfWxergRPjjPwCoVkC11XcMCh1yyFRXuaovTGiy4KbBnWhFM31Lj3Z7quKhetcRLBjXG5cdd5kkP",
  "key32": "3u3qNUq7WD8QFwHSeLJmFF9Jm2NmQ8trxthra2w66LVSV8uebsvqzBPdPXCVJDo7hkXEBW9fx8vHsNSUdKEaoEEw"
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
