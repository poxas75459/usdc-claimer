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
    "NfRjLBs7m2MVUNyXxBbvbtXA6Wuxod5SHybbFPWc3VqKDCc78pHmhjYAJ8zxvqGqRNY29EVjwB3U93PyozBJaf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSUH3j5oH5W3x5WSSa4QxwvMRasyReBrD7emAQuZdfGSez6YxWafxpnvjspsLqd2hDqqZtRcYmxeX4Tf8L8sxJF",
  "key1": "5PTPh1ZwRkRWUrCHRwq5Pg8LXKsY6pUqJJVu9ADhTcydhxXoSCmHjo5VJ2ujPTZgyTvxoyJvAiaBzmgw3QYhcKmt",
  "key2": "3VJPLGFCH2YSYuEWC7vbvESDkqModXReVjJCDmPS5617MCo1nsQbft8cXYsWpdqXaQVUFmAXpBjvSxDCUhNYFBNX",
  "key3": "2WBmWr7zaZPuc99PDneTFnzrSaoKMb1trDW2GQkJsMmXZv5bebtTXqwSsKh2mhHDvhtywu5QeTJiGutBouGrK98y",
  "key4": "53bM1hkFfBzZYnPFDnhyihtJtajcLeHsaPi9rgLmm5gUSctgW9EjLvDb9AWahvbYSARQrWm2GkS6EZcmdAAXwoX4",
  "key5": "3Pdw3oeuQGq2RA1YuqDQyiZySZ4ED3HoBCuhapnQo8tUzFRZZdzMtoCSe2cTfpmBHzWVim3e7VSyiajuVsDvkBpM",
  "key6": "282Lk7K3txfHTJkFGmEpoKN6DpVCMe5PFJavZZ3YpYaDxaDQc2x5a5QTKyZirKW7yj76m6xJ8oJcMU2nQBKuhhWB",
  "key7": "4CnnB2dTa814xcMGpxWHBQX9HJdqwQzPSPw6YfqrRKJHd3nN7jqjE8WKBcU96DFay8fsx1oVQ6b9C6JTCGQ3ZUEa",
  "key8": "3EBzmmV7RkhUCrEUDD7YHyVE9obP2ojjxKF4SMV6hUDTkaeUbAR1XT2wTHzRSUzacMNaAzpHCy8CWxgvaLUsS7p5",
  "key9": "4kW3njwJEfTuB6VfCnsZdiBLoveQHsu2NoHSaRGHKHY6hsyEgzGyqLbw1GAW54h8E8KskBkjAV8jgd4hUiyTJbJS",
  "key10": "2A7A5jFY4VWTr7myNojFD7cokU6SiZdsrJyoN85QvjNhJKWmK97JFh39TPjBFX2qBej8ZCDPJQENrm7gV17o5Lie",
  "key11": "4B8xn389BbDUwMcXh9JjtQABwFVyPXVij61KUu64EMFAeYyJmoVsxdR1Ex5UxLZWMQtEGgwxqMHVrxCBQPmx4Bsx",
  "key12": "a7jBZb9eFGJAk7E7Ft2Pub8UKJCJwAJjDoBq5crpE6VGKUHP219x2aiMue3E5FNp81KvaiL5g5cGRrHohGUg2LH",
  "key13": "2YnWqXUf4osVNqGiMUZaDpm3417hoptYTQJQjAQ2ewsiYjHiBSCx9UZdM4hyi3SkyP767EBK7y3BRGBzAHA9TWVY",
  "key14": "gwnMK81sEhx8zrff7kmtCxeigUn8uz5rpLsxs1WZvzb2HG91BoYhHYQMfCuBRgBa7n7QdthnMQV8HNN6idmtJws",
  "key15": "u7pr8t2v9VCu8gfXrJ7tkEibqHLRm9PkJVKQgXtzq1fCVKxWk21zCJFEUFXmZ4TrHqucpuqiPvo2sMp5WX6f5Ec",
  "key16": "5Dj4ZnBSdD77LEPv1VWheJTo2apGDjQZ3aRjuC4xEzsA1ejuRWx2ukbmZYBAha4nX4GqctjY4z84EmfoRbEzioc2",
  "key17": "3UFD4kfaoP3JMT6NC3FKQmapWX4MwKnWmeK6gmNYRKSawWV9iXbXpLYUDVLQpHZh1zqKanthW1QiA23s9nNdhmUs",
  "key18": "3USFABVsxUsWysQba22TyN935P8Ti4EquxrvxTTgsBdiW85GiBhwyHUkQxyHuSUp2goi1mYvyovTXJJS5mRv7rRD",
  "key19": "3gLpD1FkHVz7g1vFG48q4NN7Uf6sZLdGknxSWkaYf68vZcj3toFA1r1FBavteK5jKe9fTWUuwPS1oA8UvP7sFtDQ",
  "key20": "2geNSnes2rcjxVMESvv8aKfgMM8UZyoZshi35rd6ZQVESjZjZ85gbMcHRxWZSss4HK18hE7NHADnjFahCVGWbQTF",
  "key21": "4YN4jgAXRHKeqxRp2cquqPbQP5uaJmkJ58RY3GcJHiHJE3HCQsUBBcxWarvR1Njssmw8a5cpj7rcpeF4nyPKjhfs",
  "key22": "4TqHHMYKgHuX6ws7t3gjht2g56Et2KQBSvQwf1hYCc91TeR2MW7NaxhKc54pDNCmH8euhwSCiaenqUu9ef5cjs8H",
  "key23": "4vceRvMdqLSJQfZYfZg2doqH5weM2CPLZ9z9QkkZbTdeg2zCYCZxXhtZNfxUXYLo9FC4dVAauzm5GkPgdLHZvkRL",
  "key24": "3kuLq9DFvq1LzSTq4mu8ByinUqCtxY4TQCJj8nJnzvkbDscBLoU4bjy4vRbtdxZn2bN77VumNUbP9Yt8icGHxnKe",
  "key25": "29N5Rc7L6xmoZSJsKYabhpNWmDPEgWkgtAWdZemB3o3VA3zNPudSMTaDyVia2aZtCSLRzFXgNKFjW4Qa2YLpvPuu",
  "key26": "488o5hXodnMjL7BKoneV2SU2tmyg1PnExnaebwSreM8yG3AW9oJnKCpcqxfiCT8sa5X1T4Ykc4drL1nyyyA9Qcnx",
  "key27": "2NfhPCzbW43hgnbiVe1BmPG3traDUkkAi8nXzyzAFGGbUTu6DwjGXpehjw27iA7U7rBhQfhSNuxKUG8UhojWEH2K",
  "key28": "3FeqwyZuQ8pvXm6zV3ZwFC8KXvBmC4TRsYMujpT6T5uBjvcd7viT1U8vYQ3vht19CfGGfABNFuponjGaHsFVkTpF",
  "key29": "4bmCZxaRaQuxRh5p6gzQ57getmipGsQ354EYA2oGsem7fzThuj4jAcUvH7o1zjFsfwVnD9y3CCZbXF9y12QmEGkK",
  "key30": "64NmySbt31pwzB6v8WeRbeATpXJsjY6vUuVk28Qgu8tHMNqugSxLhBumQpCNbrhUyABSX6uMSz2xmmaGiAL3FRVC",
  "key31": "2zKhRpZDyY6cG75BfWj8JFGFTNKB78ZQiR64WjUCW5RATfXzDtvv9CdZEud3Rq59VGVwmrZX8t4sNuRkZgF9sdbd",
  "key32": "4svmnCR7wBTbMtYhow5bbcXCqTmnyt5N4arHqn27mrDNeXZj95TUqdvgWw3JiVq2PPrsaamheWgX66sYqmyL3fkb",
  "key33": "H97KHDxG75Zoyc99vnh2qMS8X8TXygH3Jy78M3MMCLfkLcDzvbJFpJHEigCgtmjHJAi85EtMu7sa42Z7Gjd9d2C",
  "key34": "2MssCsMFazwLJqCwU5FmbknCACTvpS1eEcEQdtP3JQ2ANKVmsHm3VsRCUeNfM1tFrxWrVbxinWDbxwfdg4yesin1",
  "key35": "5JtC6VAUtW5cZp48VorSrZHLTF9PipsoPHCqL1srGBksv9KoKMEsXqVPN86GrvYDKPFEoVZk6VnNCss4ZchKmnZa",
  "key36": "2ppbYC3Q5aAdXRsaoHhxo2wy22kdsjxQQ6SU4HcgXGrm2y7z9Q8v6TVpXG2QzY7R554e12Ujf6ui6vWS1eUJGuwt",
  "key37": "5oZGJKyx8BoDDVUHi2g1ou9dkNngdtZwdmguBmaAxU97N4Qm2EzXRbMeqKwRkGAmBDKDUpZzcxRPidgMyFKheeov",
  "key38": "4qi514GMYPbz9FntPFsfzdUHjVnfGUUWcTeqCf6mi6TQ6UVaeFcppG2wqQf4affHUHrAkAckUXfYn8nQHsZH1C2b",
  "key39": "xePUf5cSHfBky4YpcyMfs6wQpi4o8rBs1cAnVZepSjrWPaF298vMJ4XZznC9fyRpQkm6tmVZr28kibVwVgqWb23",
  "key40": "4VtomkbKHfLr4rDwk7RyJH5zbjBBoaJNwMgU5i4XhkcReV5uHvTo4LZavNLKsT5CfiQEFTRXRekkCW9nThJ2VjDa",
  "key41": "2DjZVx5TSntCUWAJzU1VgNyAdCAqCC71ktiXwGHs4DuybDV28SFQFqUJZDveTpQwdgwDyxTHuPBhiBiBy8CZRA11",
  "key42": "4RXw6hXEyjvc24BHCnHzZTpu7hZwbUmyQfihydcWPhyoXzs8esseHCdDgiaDLtoWW7d4f5hR2QJxwnpCiNa11WWe",
  "key43": "5saEDHFbUEe6Co64qJVzRfozrB1UtJMHwEGHofJFakiyJjm3eYgjCUdGKkk1yonSp7SexWLvAhrc3NYxPusnpxQ6",
  "key44": "2kLW82SGdNxhKft6vqBGwUjD9SqhvAh5YJsYH6i1kXHFJcFJZgBKSgqsxBeTC2K1Mj1Do3UCnCQ9KMLxbJWX8EaH",
  "key45": "649iPBdftMStgJjD9FxkqWcSP94atHDZDqdTjj86NJVDu8km9zcsCV5iqkyhAdN78twHazgRp6wmC4JEVqxJEnZq"
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
