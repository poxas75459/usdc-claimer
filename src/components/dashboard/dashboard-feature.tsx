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
    "3UmXmTPM89Fj2cFVzB4heiyvRxkm6h49vaZqR5eLai5XaYoCZd59BqZ6DAvG3dC3WJbPtSWH6gj2jGYgeg8RUg1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644z5PpEY16NX418dNqBMtrZCXPPpkXtTJ6VfSp4S5GA5zKCiKN4HH21rWzNLBdFqQBuvVzsYWESAesykvLHGr2M",
  "key1": "4JH7ErNGzEFAUPLaoDW5MVDYLGaJgqtAiAks9sfghtPFfs5Av8o2bCUjcGp1tAZr5JzpJWRArbxbhBw1fUE6yTdD",
  "key2": "JVLMEkFg6FgwVWAYVHiS373PsxfVcTvZK9zNCqjDR6DT7vmiSFRBz4KN9Jb6KbMTmee19XZ3BQ6B2y4vYPqFqfK",
  "key3": "3ND6SU4kjQSvurTaeC74f1hEz3DAHdbRQyZSjSD8tg1RUTpwgJDMryvystdXMgUktobhtxdzAcnjruTzDEKvNzjL",
  "key4": "JcmpkhL7EvtdK8Bsm5AbES32SLay8MCKJFcK49GzLUVDKD6DjiQMcc97nDYATj4QDVD4mm8mgNqEZmAa1rwveEG",
  "key5": "2K9Wv25njZzCNF18jb8HGy3seaTQyPzTnQ17jmNd3omxCyKmqdHb4AVbDZ1YdHTtZFqoKHsiFDYz6ndBRFeZuxQB",
  "key6": "3jExexnLb2CaMUGtbpsMUk7CUVVtDPJuRv3eTwNqF8svgQgrwmdrMDSiDyfGDDXAuc4gits2B4gFJb77vU62CUt5",
  "key7": "bf2M7kv2YJVpYuWyZZux4rdDqbm4tjuLELSksKoVXBXsVFASjaRNU2debP6LQyaFHf1RohzT1Lhi8kdnuNfehHG",
  "key8": "3SxwhPJAJ41PPHzj38m8g2De4tDwToHYsA62LiMCTCVmT9aWUP5fc4zGZNKnW5QsPPUdafS6EQVni12zG9MmX8Zu",
  "key9": "2DC54ZNU9ytgbeX3YrcifK3K2And6u6wRaAJFwx2KXcbkZ1fFvhxKABdMKnCSbWCHAHYnL5H8HNFdj1HqY6v2amP",
  "key10": "NEUek1uZqg1e9kpDyB5fgCdRrMi34G92JhBEXZZFGDr2EhTau5sqU76pyJCGtWDrajz7bntq5vfv17D5EZTKwyv",
  "key11": "3yLAdrAgb5KX1nXaxDEGtrtAWcnxwhqn7fQghctKK19qJMcjBfcdmnN6hNLxFbw6m4Sa6cK1EjdjPaF2jb7EY8DC",
  "key12": "2FL8wdsFGDxRhs8NcaZQZktpDgRMLkUzV5ys8YX9dAvRqvpeqzWn5ChdnREcENpSkk3zyY2kZs8ATc4hGsHnU46A",
  "key13": "62aW3coPoQVJpCi9FtiEgLDMXeLD7z2ZPruAVWbH5pyucd4cChZmNKXKZAyjQ5nTSuo9wi112WvtGbWHeR6Dy3Ns",
  "key14": "2gjjti8EnHhunrXW9x9GsATRjUFkPhfXxkUY6E6zwV4P8j734nKA7nEvazsiW5bJqL5B6EQgtsvHTqh8R2nWFtU5",
  "key15": "qYq7uyd4EfKHx4mb77qBgAUM1th8BTUAYCRZRf2LCkGNBAmUnhxwaAi3CSZfrpu6FSjEe3wcz1tNeD7iZDt2ns5",
  "key16": "5ASXwd6BhpNUdwFFUGP5CYkjbXXffi8cstVYaVZZ3oJeq193LD4GKZHSxqxVkDZihA2i2DrbVD79WFm4brDmdRBK",
  "key17": "39hdu6vDXNLcaVxxPU9KHVSA34vtKLFMS5oxx4oU8pu39muhd1vgARjUHZ5pu6Pzos4PNQJv7kAfFwpjDKnwLUbD",
  "key18": "MSkyUnemC6KgdRqdLTz1DzH8Q2Au5QAtSwmtSL8Sa8N6JGKaMfWgFMSazc9SHZPmdp2GLnGuiHTbDr3uqbEvFan",
  "key19": "6GLrx2R3ztpHYyoWbDw1bQrGxFgr1o2M1zBdjajsDjfbFkw3rz4L1ebiBUNdUJmNxGwFB3S5YmtbwBzt21iTPNY",
  "key20": "39JMifnvq96vrdKpL9FeN3mqnaCw8kGtegUBvoDWN3JkMNCmBrzmjcEjFoCey15p9nYp1aUNAEstgcAVGEdekC7h",
  "key21": "3NBm5Jd41aYaUVTm9SkPa1sAwiEgAfKV5zVLnMYJXwkCxxGUtiF7zVcGvnXVPjCbWHpxtVkYYAzGq37KzG1WUj6U",
  "key22": "4i3niKBpyCM24sf8JwQx8kDoBRuQMX6WpfkaUb29nv5jx8MyG4YpncWuyRYwEYQ4nbydYeZfkGoPYoT4XqDT5DxQ",
  "key23": "3RDKVD2Lc1S5D9gBYFmLQS7RdhgS5BXm68P2sJzK3Qrom33fXWSafzCDti3KbENMnvEZujmdAPbts2hR9qaGXdsv",
  "key24": "5qrwxDJsXXCrFTR8PUuTFnc9j3pSDmEYgnqkFz1N72hfACKRYKChyS73Z2xyG2Py7N4VBRVgTwsCsLnLbTa26frY",
  "key25": "3fsQuoH9SRBtBUKsEMpBwpRnQQ2wxMUhc9bZ7cbRYgZ6ezbqsqUhS8WR7JxBLTZ1HBHP5MzrX5QbYWGiXKkDWBJo",
  "key26": "DXDD4mPAmzaaMsqbEisBzFDAYaFTBLKP91tAQCTcyQA6LYnHfwiFVr5mjg5RHtEJyLvzusSZh6Tc9qZ7EHqxb1X",
  "key27": "5bAXDMpoHLbsJ6awQUwsNA6Nhtu9UozbvxMazBxjaTQjLsF8PD5CyP8ue3xL5ZDVC6zLL11hyTwB28xUfXrrzvyW"
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
