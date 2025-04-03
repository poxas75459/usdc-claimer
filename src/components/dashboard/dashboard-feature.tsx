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
    "2DNGdobo5SwQ56Ysg2fJJA3UhVWoRtsJgetGVyrzvTqCLgAkCi9T6EpeWdngpYwNEeHM4gfoX5hV7Qmshy7iAASN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iApcZPSSmiCMVihkXdKUbbHupWovFbTjFzWPUyTMxx1M8snoXbqsqMBtugnpaWegbnNS545n883WV4TnMRNiGtY",
  "key1": "4cC1njQr8tuJv94EGawfR5KuSMDaxFvVabZ2YFzBDM5tFJ1Hqrm4fTJXoGas7TdaGrRCYubp2prcBrxfDpHZs5Dx",
  "key2": "4HvqeTtYvN4UcN1ft39MkV6iaY44cVLc5PcBYPH4jcZoRQsAsjHA1GVz7d7aZNzNBZd8hestzAgkCNk8VZosvFJf",
  "key3": "5asKE6s8WWxnEtE4LVk2YktHi5iPv8BBhSgkTLkCxRH7nn8dJ949bQZMopocmVAT5nk78X7TPDpnT64VjVZt7LTK",
  "key4": "27XNq3QEsb4jsM1BQuQwbDFpKU5L6suVpxrkgbioK14XaEWdSC2wsPcFe47YC2xm2WTgm7wS86Bkd6RWsgND9qMF",
  "key5": "3CicRMnEFaJSFtzR958M3qxTP17Z8jm8WU3XoJLLfGxSex9yukHU1jXvcoJoLC82iYg6YDuEJo5K2vsGc5pY4KS3",
  "key6": "4UwukWd6b8ie8vfPweU9yhaWfWUWTR3YAHTCVDqBBNpHaRVkLzBBmC5GoCAZxnHXFeU9py77xD8hvtF7Cv6RX31R",
  "key7": "6518K3o7kJEx5UL6SJsA5BNqzYweouzCAcMvGwAaK8P3p6e6y8pNVo2koPHaugNJisWSQ77hz643EygPKuFMXNZU",
  "key8": "5NVz4mzdTJBYgkdiA72HzXbWMJTLnB7vRqLxp7KB6ZYT5VCEq6xNguRnMAP99CZqiaEJ6yaMMH6UNC49p5oKLZiL",
  "key9": "4MFWwPTDcvjajyyqDquG6vix3EGfmboqyiwLWHpqQshB9B6TsfABzjpj19pXuMqv5FRLthFsCi67JRHvSmBdGvb8",
  "key10": "2We9bajcFY2tLJX44dQjyzZxZkZEJfadevr1RtoJRLbzpoXizKXuzC3dxsqm9RrPLEEaVNkVdrxNLnh7FkNDSz4y",
  "key11": "5tc7jSS4NZY56oH5GPipv7t5GME3kV2Gh241CvRXnpoATB3WDQfovCgVW2A1VC5NG1pui8y3NNkQeQA3M8rUBw77",
  "key12": "WfNtLQTXxY9n2qmz5BH5HqPtAqhJ7s4MYKJMDs2rdhhtWgqawopcCtgyLFC43GzxgN1xNG6vKkZPp34H6NUvTTT",
  "key13": "3eEaxHEWxirVkNQtwihnL2eivLnkrckY9iJUExsfsmVDAjJrvsvr7dtXRwGEEWCEqqRQX3n5rTiwZZxvzrkM8HRs",
  "key14": "5t9xfiQkenJZm6siNvtDew1F8TsknPkv7wtaiY5ceYcTdwdCd1qoF51A9qKnzYQeHFTsUQrDWDexw1qT3VBLD7xT",
  "key15": "4N8zghKFXcedmbn6gdffCgiGFPCakLAg4q3MfL1yfBorYBkZGESRQqCrjyGBGCN7wM9kM47k2egqgy9Vmud1cCZj",
  "key16": "3FUMQgvddNE9VGK7oSbmkVZ5bNErZTne2P3bahgTgXbq6wphdNvN3ohSWuA8mprGuFy529qu6C361gCiKUw1wf2Y",
  "key17": "2KU786aypBtgLmeu1AicPU36Y7YyXDg2NHcvJ3iFWr8X5hcWiBx6AsQJBrNa8qF4ixLBEbvGR6zZiWXRMVAmRJeH",
  "key18": "p6LxpiXqFhXJLBf8xvPTnBhPkPkMTwDK4pGq2E9k8Epv7RoLERu3Jsf1MavVpAmyLGoZDbLQBjKpMqTgVboacAE",
  "key19": "3iziisRgXM8WcbgHuVEgpG1FbBcBHzsFfsV28Rhc9mv1CrQ6UfchkJU15XYQiYTbZyJiXo35FZF5Y6ZdKVoGy11p",
  "key20": "4xLmXYAjsQACueYw1m7k6mRYkuaFa2LdvQUM69c5vcdeV5Qs87KKtZ52L8ipymNrfMuAD3snmQH3zGrkCrK3oefs",
  "key21": "3sEH716uVhqfvqSdHZ6guosbs1PJBuc7BU5BjHuYMiDzqs6JZUP1qrt1EujTng9fprzsMo8tKrwxnXNyns4vauC2",
  "key22": "2i3dv1vBcSQHRRdNZrQfABYXwaz17ss1h6n8QhsJU2Hqx5idjzs2M7dg3hEYw1UMHoFmBucyucTVZERJGYFCL3kr",
  "key23": "3aTyDPHJLnnypHUB4sNTGhMazp4C9UmdcmLCo3XSEHavZfZbdibz5LhjrBtYr8yi2wb3UfPY1Bxzt5j84oDdtdYh",
  "key24": "3YGbtTqmevUvWKVzSa678sWwHsvWXQ6oarbvbSRNFGEbfB1QS3GH4pctuDFRyASWwysCgRddLPqCGzc9P3Ctjh5z",
  "key25": "2i1rp3U5icoKkigh5c9GemBkr8z6wUR1v6RjGUMpxagMWptD1UHsbHkGjXX22efN3AZsagCNzwE4b1vkYt6dC9dP",
  "key26": "2yhFcWg3iYcs1tisJ3h2BtFcv9crksPuU95hD9qk9mhAcdVMhvFXsB4FbhjwSF5bufUd4FWb7cwYaApowzJ3u1Yz",
  "key27": "TXkVQXtTL9w6MMsZPDb4v6pGQfTcVTVCcXiPfqxaBF6fJUQWCMvYLjDY3py1jxsExzBDR4Pue4pgvLzSa73fvZf",
  "key28": "5P6M4hxTppSkHHhYfTXhbJWd6eXDNDszWQ5BU4BZofPTZvPPwJDVWLxR5exgJnuw9Vy6MHVtv424qWjjUESnZi3X",
  "key29": "5ndkLFNsnQta1ri9Y1hkiDYni62V75gXeKE4WXXQqmxF4GmXCguBr7USGFVUAzZVm4P7nZGLYe51oJgtoRKZ8tgf",
  "key30": "3gygfVPE6c7CWsmYtJSap9hjW8JYB9CeGxASCtssnPo5og6FRKtxpFpWex1ZkXmZsufR9LEkQNVoEw5GHmxBa6iL",
  "key31": "5pqcKsn3rWYoNSq2FpSPiTrMR1JcgMRH3DmiGCT7SYW7SAe5Q5H67p5HMZ4rRkD4xtuqJWKNRWyBTYcn5r1MNeXN",
  "key32": "QwfQdToJdgRWSKjSdUCSWV2phUuKkzKQKidkM2GqYE6D7dRSDDWiVNsf2gMTnvYUL2decpkukfHviAMcNCHvifE"
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
