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
    "FtTanBHTQyqDYUHujU3kzWmDn3THyefcbjKanzkuEXtRPvSECxD2baifqVTCZxrzhKeV3CaMmbxbaHzc6vNrEuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J3yLxLpftzDbpMaCGCoWKDYahELGPt2QxbGYN4SpJTi8zBnGGh9Yh8NTt2sWND6WgUrqDvD4zHswEgQkAkEu17F",
  "key1": "53C6SnNNRBkaqZXT4kFYAyCRMmYi6hbytyfCDveNHzWsyiHmfG5QhuPd5oskV6ffUi6CKU41LQ3GNeC9eQae85hB",
  "key2": "2JSddNuTesVD8HVRdkGsfu9xTdbBeeHak5HU2Si9PbMK2Yho5jxnJGkWcyAjz8z7ETQa5hFuCiBn2fhP56Vr8BCA",
  "key3": "4S3zVhzCUcphT4ZgPU4Svy2mdcPFBSSYWe2d9kqEE4w9p575mXZ3sanYwhcVweKUHDVspmofYxzxcg8ebYdreaMR",
  "key4": "24sJaeRuCc1o9YJ8VcFZmYhfm9BsNVHseNK8oy1dcpWswc3FZmqhMu1h2YfHwymsea8td7MdS8rfkkc39Cn3mskx",
  "key5": "5HmWHERPYiMK36thXtA7KGP82S3mSgt5Vu8KdxjqYCfdhpXmuQi7EimfxjrFU1fKhe6r5vBmYErVTNTw8SqMHbRL",
  "key6": "gxndM5tnBEP1txir4MzZ75YL6QDBvxKxqSYGnVXKRMQQ3vc18Jf6ngjYXpEmXdj6NL92Ggt8mSy8xrxuPiceD2W",
  "key7": "Sm5REM6QW6HcTwUcsrJ1NEyFG7zKuMPCdBeuN1GQMyikuVN2AgMrWbpGaLEBrrnYTu688ENNcpBDmy7uARN9STg",
  "key8": "45xm4Xw4zo9Q2CDx1aQ96h84xkDUtrAjNP4zvk8PRLyqrQAuuyDwDJaDSvjtrtYQJjb3rWG7nbFJDdMzgoGeAQZA",
  "key9": "6HPqjjbEE1QW2k9NHmy6qdnwr23ptLuACxomyzrhh5K9bewhQWfE34XzjwWR6KzQR5uLtw2tnYJU8sSCp6E7952",
  "key10": "3XxmUeivS93hLGfd1TesKF5qpgQ5T9mxgmYuxzoU8kb8m3tHHBCyTjHFHsCNR5B8XFKDi3fZSnrcZV7eAyDGYqVf",
  "key11": "XqTr2fhvBmaAaanX7sTwJk31JMUgrx37H9bXrghuP52m5i3hHU83jxYxGGEbkn9ymWXuudB4ycUjHT3BGF6T4FR",
  "key12": "355Vf3VcrR6DZ5BypxS5unpsaPg2PioyPz5UnGKi8rgfFGAyquTb8NM6rtfAZe7kb8QX5tGQAaF3un1uGQRZ8qPe",
  "key13": "4UKRZqDee215MCQRp9RC1pxP56RYXW2Gvma9AUR1Lo5ogdkgGHMHRtZwkLgYZveEdybTMNa8HgTekKNcUv9SGKsk",
  "key14": "4H4q6o1rVdRR6HoWBfrpcYbKB268oZML1G1qKW76YHiiTSEyEsEUG7khPg9HwCTR8NmVRgCjrxEzdXvPgw3VXPeQ",
  "key15": "26ubjxarJPgwe2kuNa617TQ4Xp47kKxYuyfwSBuuP6PS6R4FkE43mgB1ZTzvBsMmaENYfwnMTqndXk8Echr6dfwy",
  "key16": "3TwVeaftJkQhFw59o7fTtD7T3S9uNyktSXba2ZdFjS6sZeN4NuJj1h2QXeYKcErqLoPcWpg5b3gDecCJVeVNCnKA",
  "key17": "5pA8cczpaAArXiK5DmCmZ8hTyJtsV5T23p68LVARwtNZuVdcwBhHZGNqL3kk2KCPVMaPSedMC8pPXgRmLszzPTtT",
  "key18": "395wRUGC1VzVPGS2mSvWzVB32EjJ1VGrcYozJw9mXMBd11Qbj7t1nXUxsBeP8BkULV5acxwfJRLV1uAo5WftJT2m",
  "key19": "4whN9RhHhpW4G7bwsxz9y6UhHTtAFKjBpVqRucDEu8AhTB1kgSCkpDRuSxhesXVwQ4512rbvRxfiJf3cqj2A2yXC",
  "key20": "2VqFP8YroFi4nhrrtY7APHvRP44qQR2THxszuHY1u4VjQvNCHDj7bDrNpAXeadLhgvv54qCBf1TzwdV62auavcjN",
  "key21": "3hFgUTDgV3Cbx92c2oFFErd6E6WndMjT8ahMXp4sHogQ26uy4TF32QbampjyC5fuxdLBJbo9M7w9KzFxNZA3WLZA",
  "key22": "2y9rwcWA2sHp76nsUcPjRdAdywPQ8GQJTA6sj5eL1b93EXTAMA5an7Nbi1eHuNMbyBTgAsqwYKcdisa9hAM4aSqB",
  "key23": "kb8SN6UuGCov6qPv3XmmqDHeUuN1Y3ytPXCj1ASyV5BuSHqNZiN85tyCoLFsM3fCtZZQ9bChYNYk3n8fQauVv5w",
  "key24": "3GcP44xdkSmmBd9BRfnFSe2FsKdXr5EQCtEaFs54arXC5z5K8KrYnFTgD8VpZuC1s3RLYaw2TNe8wdd4RGuKpH3Q"
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
