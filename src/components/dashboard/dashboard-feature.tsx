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
    "TCb3ZGjfbhP8HGnZqpnFmHnwgS47aC9Jdc4rHFyRy9xVFe15vVpPD1FvmDd4WsjEYqmX6wzwcgj1Ceu21bua8Pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXjCBRHzXgTeTEqKbPr9dFRrKtRAFciGQxqEzGSKYBiAecwnpi7toZphBFdbSEmWGhBEpJmVcTroTELKMY1rLRR",
  "key1": "7PTDyjuivkkah7rzy8ET1EApdQWqjdYGPN4BAu297DCRsxbYFE7G4EZTrsFGDzjkZ9MDtfpahykq7YzNVZ268Ko",
  "key2": "3qU9cjBSW1fsUErXMTtQ2yiiYyuUdbsp2CWA3gq5bdLgCoScmSnoXubMd2495Ni8PbPwQohftd5nujutjz4H9BKw",
  "key3": "23ou4x4BpJLw5hmRnkXGSbzNbj4gGVPZWTP1sCVxTY86vxQ5tuMVE7t7oqxuXMKRmb2PBJ5byNG2ra64fNYdP43o",
  "key4": "3vgXF4uDs7RgagLtjBQyUwLwq8QtcAScegpuGTbmJP8LtpoQ6M4WoUhuqaxLQQ5UozqKYpoK69SvVBfYZNQQXVJj",
  "key5": "332WpwgLN66wSBrQmZQcvjcQNMcPsgVHvn1eufxBgkzJAunLTjF2c8vsbYhbn5J9f4b2rK5VnGcbLjXMS43wtkBL",
  "key6": "1fYCuy4sXzadRCnZ4kq6enJQ84BWW9MjyZhaaRfEyJbjqBWSCacW8fNf3A1fdQdPrS85UKAa2jEzLptbqADzHpY",
  "key7": "2Ev3A5QcjmPRfySbn6FDAw21LnNnKvhqMu2Jca4UzYQHRTHSJh7Q6z7CKnSKsEX7sTwpHrXmjnwMsbXnzzpF57bz",
  "key8": "42AMrLn7xZSpUsF2fZnZGBiJomu1BMWehmKZBZ9gardc2yuumBB45nL5RhmUp1FqyvnrukYH4vWVcFVHG4FfZ5cU",
  "key9": "Lj41Bh1amNyy1A1DFoNLJ71T5uf68n275XL6L7eyvkntQYuWTH3sY3cSze4Fj82cuFdzRyhhT7p7XfDSPg5wAqt",
  "key10": "2YUnqpEMdRceepnT16SeWFWeYdzZ4R7zsvQnpTfnsjRn4TNLDh2fE4scQZWfEFRTY2DrQAsN3rsFi5YUrKHua4K4",
  "key11": "5qkvt3boMcHNtJVsEZK7iYBRdVJCxU5W3y3xnXU28ZJ7hmqEGdp4xrkDrkPwmErFD6YyB3Fg5JNS23yJ33QbpfNK",
  "key12": "5b3HJgLCM5Dp4nzgyeC8uSabmh5VAdpfpwxWRVr4cCj5ggpy1SScxpdLh6TzqmPKJ1EreH91yySJyWeSssCFJHGq",
  "key13": "5zS9AhaZUbSruRMTo57nCsEExceJDwb2Ja7uTyit199F6taKwizemLCJrrEECYcGnRuTTUFrnvpiRdvVSE3G78Fn",
  "key14": "349NqppQ2sU1Cj3PG3wBKJezdZz7jMGJGpfQNTxnSv8gN1zZxr7j1XqwungR75SmVDTSZVSer5v9kT1KAZG6S7C2",
  "key15": "3vS9PYT3NV9gmEyyDTpTDaTNotyo5gQYZPXMyxYWr7U4FhWjeX8KjEnaPn2d5LNSm2XXo7d9TktDUp2sW3exSAQp",
  "key16": "3EDXYrm73CL9TexFJe9oGqNafG2GHqxXFms7foeZnfCmTpytQ2o8MTU3ECNa5d3B2JNo2STFYz6t84qvJfumC1ka",
  "key17": "5FZvCvTcCMFAY4dpxRkz2yc1MYUstrgfMiTsx8SMF2XMMLDaQ6FywW1gbc8eYNyfrBLnLguQHNhuozRNQTBFctZM",
  "key18": "nY9YYQGQp2kCQksUUq4UM77DJaXGrgqheuYpEtDYuUWGXVNsvFcsjbnUykNmaZkobvB5RnybcyxueBiJQj9LWQ7",
  "key19": "2NcNtPuywe8i3nGVjN5kX6qZCYQh3hQZAhnFBeznuXFaT1owXsPMkdKGBE52HiV67cmfERDAw9qPFRMP8oRcBVWa",
  "key20": "5HZ4F24SPTVhE9EvckreDRdZ9LAqFDcYqRPHKSmfVMSQbtWyZdxAhj2MAMS3MMrTrxUS5FyzywETPUH4pRRjikct",
  "key21": "3uGq3M3bWfAC1CrDQHgM5iLG4xAzdodJoghNt8TdmJxQybRdNSh7MuzvKfyS9s6HSgGJ2WjDdyRMPr3GdiTA8g4d",
  "key22": "5ntNmrkMv1zmz9MqWAf9Ly6gwnBU27Wccd4xwEHCjrup2dKvLphbZJVFZbW8nSCRRKB28AYE4AKg8nyo6LBry1C3",
  "key23": "5ttZFWYUsFJaZWDhtz9edmoaaH63khEpxFVWjU8TrWmmpDkcZ6MexHGVzDTdkVAd2ahFLyA8fFLFPPCek8fJrZ6a",
  "key24": "3GwvWcNj9EMexi14trZtQb5h5AfESSazcNxT32StsbJHKVFrLUd8gjyRByGr9S2DCbVZUsDXKTh2xb4UgrZNySC8",
  "key25": "4CGpWspFTPQ68nktd7vKhZbXj7iGESvzn196zDpwm887BMwG9pZHAjq9mVbFWMaENDVNenPRrV7JNZ1f71AskXLs",
  "key26": "2eU7yiVN5R5QWdMQ2XERa7AuSFQi5rrZKM86v9kdN1UdVqucxemubRQsnCcqqNHDK3sqkSs3j4E86hpy2o9ufcUC",
  "key27": "4bGXvk2o3c3mrKMc5BLxwYvx9GUrzf5UL4TEPQUWWxQ2bX6sj337gSaoTq8tLDVoKkQtGJmPdyHXEaeXxhoi51y7",
  "key28": "5cbhUdC4mGYfwLkpXYrKBVAGaivPh66dL1oyvj9fjKKmrfQyozsH5BR9F1A9XYTGKSKmJuQ2r5KB6wtBR79Dg1Me",
  "key29": "5qKPtFMAai2es7qVhE8pBwjkMWLSxLm2yXHbPknBH3tfiNE7hqM6nfM324DnzQ8ysq3Xi3neF4Mf6xqPvYueLAmm",
  "key30": "MgFKb6vohTbUnsqbamVkiNw3ZZJEgXtCnRT3gbKzMejjAN1rs6MFaL4ewrbniWyHobaG3HNjYN5mBcJ2rNcFosP",
  "key31": "66C1pzfkgqsmx87bA1Gt9azsRvjxBUc6XhAw5VptBPHp3yZHXkuucbcz7M2H6LysyVeviXqrZT9g8rrVF8eTjdex",
  "key32": "HYVmPWbsmVH2mxgzjp1dJQyXH9ULiRnmP8kqHrHHFSgapvnVgijLx2hJ7oNgjN5Rkk9BY1h4wJxxCdGsMBYo4A9",
  "key33": "3upQNxxFJ9uz9jiYyNnE9eKnU9ioUeoVhgRgUW7cXCuH5r8Y7FW3n5arjZKknUC5oBrnPk3T6uFrkEYMh1tL8gco",
  "key34": "4MYnGvfxuFonGCH8RyMXujdMe2mcBKx37YgPKc4GFwW8r5HU5PbJrc4UPP6Zf8aiWVM9CGDg8Y8Y8gw7G7zp3z4J",
  "key35": "29AZ8kRaUrLQmzRPZRqkhHbhgrPspM1kndCeHdX9w5PRRHhWj1fdkn2PaxxvYve3JtuJj4GmmmcTgHm5NXJcWQQz",
  "key36": "48WDLhGrYrK2zvF8ovipLRh82EsYwRk6Gcz5po6Yzu2wLipypmDYUedo14LLcY42y2sdsWazYa4DeGtHCS5dxSzX",
  "key37": "3DQombsQwpNbt1MYVi6mYsGtRTWBib2Axo4XCt6fDyTDBjMRdgXbsZWb2zAKZgmbHp8sFTc949UigbxWxJ68vxHm",
  "key38": "ExQGLhdtwhmiLJAqmsatVECvWv4eacXzc3dgU3zKrALAjnBr4yqSy4ixaPa8xwqGMx4NTrMNqQUQGXKnd4K4EFK",
  "key39": "36rQRKQZ1n8SSZHmNJsqXuUu2nXrcsMh5UTfk5EzDFouTCbA65c6XTocGMzR2eiwT57X4hQk872sYwhfPD8pz8yi",
  "key40": "2AGDNocFT8nYJxi4BofU5X4z2UCGArBVyx3zMMJJEXbY4K7j1Ubtpx8hiAnHkywR1LNksNbFStAgEH2XBg9VcKz6",
  "key41": "5GtC3KfVcYw4d8DVyiF8VsNWxpF7Wt9zhdcjsE67LajyusTtjdddEdYAHEYAD3ygW7yfRo7tZ58H8d1GFkLX3w1D"
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
