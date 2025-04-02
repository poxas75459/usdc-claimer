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
    "3ukvNcxmGB3aHKCbyjThoUEsVmTGPikWKTYhuinN6cfiJj8ETHY3gbcvZa3RMERkSTe8pVANwvMiC2vwd7KbAhua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzMqUyihE2s1xMQVQwS9xSHNtwu2rRQxcBsnH6936Fv6bjitCA6i5wTBtgo2zdNCCfRy97thKnG6tZCGC9g3YAZ",
  "key1": "4DsJzEJF7HyygkNvD9aPLSUMubLKHzfZvFohRiheBx14bMyq6Xpak1yuDCBNBew6TGvc4ggLRphy6e4rUrSDicQX",
  "key2": "3ZF59kTbT1L2co3QnRhFttejXj9gkkw52DGaV1Q4sx5WEN1A7A55e6Xu4nGHNgZdmc8uMe4xq3ZAd6JY4hvyekLT",
  "key3": "2Ciw85qZJG6YY9XPqwvWfniceKskE8yEZTantUE8j7hjwF7KHCYKCyxhXaAwQ4aPkcPv8U95aw7U3TJQRVbmCBKS",
  "key4": "4yMvRBvYNXQDMd7afUZYsULfYcbm3c1sNR5HnKv6A2veorsnrLwAzqC7etJjZPJSAxfaMUWRqfqfP6LADuntmiha",
  "key5": "54vqnm8qsJb2bLkBWbmhGYkXg5BpNyuLW25SEBUDLuYGi5DgC2x9W5X9k3MiNRz29bC38GAMdtc6RVazdtdB8zh4",
  "key6": "4D3nA6rLaRFH9KfaxcoRhy2mtrHJXZLiECRkzbvB3zCfUoz83dbJTAXLCsh2tQr9eF7vxCnZWujvkGJJY1PVh1iM",
  "key7": "5qCeotHiaUCSfaNfyoc5Wzb7NAJNWD61MPtu8jwsWXn9KBmfFQ5vFFY3Wui5Xy8xeZ3B7yE1EoziyZ9LvS5cNCr2",
  "key8": "5nArX747UU1pY8f4xVqhu55M6us7LwD8PobVBohhnZoa3MnthTZnpx3Mhg2jceC4D4rEBRbsSbJs8zC3TixYweXS",
  "key9": "girR2A7Jj5WgKx1yGGF848wbB3sG8vSvUEaDVTPck8xPpcusX6rjJadPBdzKACJFff7svzsGmuBRhJFXL9coFEv",
  "key10": "NjLq134vihTHUcFiVMQcss94MCQJ3HTotaUFN4rmXSwD8Qr6ETdt7mkAErYr6wTZBfRVo6gtypmLBK7i6BaNEeP",
  "key11": "tGpEV4H6m1aWvywxftTf6BcqCp3CiPcdftJU7RDD6ozM321gR1s64UcLvHQgs2G2MYwLAGHbYFE4qkJzTbTnueL",
  "key12": "z3BjMqJiwNJbxb6d39WK8nxHCs4ogQBvtuhrT8ejNWWS1bezHaZCAGjnRad78VifDnmN4QcrTSSddW3fnrmMUTn",
  "key13": "4dHxdhGqBtgBy18jAq6oW5EMvmPgZN4js2UbjJvowkS1JRbuxRCDtM8bnQz8tXDZk7tUTw1Vr78s28awBFbWguU6",
  "key14": "53kWyfLVESntrgwneAYZe826azmGDd7bEwPXJ1bDhQMeg9BrMEJCpF7iHzqYKoo9uztpZbfzwHxAgButqwyYndvg",
  "key15": "3EhkVcA8DorFFHruXzQUuhiWeRLTeNPVdj7vkgD1ij9Ur3m4aDB3oRBGF6bUimycezmzjN7vDGoGa7BLn98vXsTN",
  "key16": "5QJvje6xJHRBowYPFejuzucFMERPLQ1B11W2Uzmq3awKD32icnRCMNtN9MMj9Gf3edXQX6mhRu7eRRsqnKmHixSD",
  "key17": "4f4FFoWt8Y4gehBUdjvCCasqgy6ZJgvQRmBCSupzNYrG4oqXX4wT3ARDxxfoNJauL2nzSS2wYprBAM2Sfyy9eyzC",
  "key18": "4LcHPKunjQJG3QwSuKbZb8ujhhgXRbMBXornQkWRyvmLvzn9Hhy1VadzJYWzEco7gD8jdbRJqjNgNQYnJNwV4Bq",
  "key19": "64sCf7PVKedmwc7ScEmBov2MpWwoRqcstT2P1odBKa7qAJSGBir7LkssY6cvoA1PXM8V114yu6iamyt4i884mKJz",
  "key20": "59abfyr6yL8VLBYLSqex5CBX6kFubVAAS5jJ9zuTavM6vuSqN2iraE3vCFdrhdeeHJzVXXZGvzZHHgiCke5Ryyhm",
  "key21": "2UTPVcsFTEmPeP2pDd22TsWsrQ4uQJizni64Fa7WhfnF76xCHtekEF6HocjJmNQTYdjPtCShRQAkgcEYYYGvcfuW",
  "key22": "2Ev515EtYG42isLwwFaz9oDy4FA2FTpJDpfq9FsppyDS5HqYYK6XejnSf4u4dnBjSZxbgt1Ec8RqPYRGsRihwJ3f",
  "key23": "4tZBysNH8cXA3xyNBNZApihvujbbj5eJoodNfvTJMUC7HstGE1BjX8QrV4NyCszp4UqXAPY8fnUxB6hseP8n9qj1",
  "key24": "1PstvcqbA98WrCuLkBZWu86bcn3tNg2HdEA3ftEbndZfhKjJtDVuDuf6P9pzS2TUWDmbajTT7PrGcjmtK8ZpTGD",
  "key25": "54zxys4tP58yzmoKTtS5NF4wDb1tkPgeX4V6Hib3BdyR39jvHyKF2FHEoiZ4Wa3T6TGdLrzKsiH6dHq82WSj6vSE",
  "key26": "2YgBkFHaf6r5s5JSnMRepXH7EcAXWCVxzk4GFpYx18Zn5gJDX8LF11Dkq9VEmdjK8vqLfvy6oDsSyx9UipktVPd1"
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
