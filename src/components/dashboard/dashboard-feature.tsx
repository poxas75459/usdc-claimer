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
    "3VLSqUremKRXyz7in161SSkLfrL94tZ7YrRnv9SELck6wuJTGKtQqUZFoLv4DVuD1zbB3jVmZhZv1h3CR9qcPVNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zA1AHds7qdHacN6adhzuF5ynLdkShNa5uf9qp3uxfsc5LUtyJt5s6NjQQziGX5k1zLzGb9QKnmVbwbKfzEQP6HQ",
  "key1": "2u3kNd7NpsVuRbnAd1SC2Y62b6crzxbDpPJYzVWjBTTmvRFdkuBjtAbeSZ8Wvs9vpto4Vbqb9pwYKjmiMPEsPam5",
  "key2": "3Wpth3857mZrQC86dRAYfA4gzJeuywjrcmfrJUaWZzrzoLTzMC9R1uZHqBJXK8qwRLMiUmYGwvfsiePcGDiK7DyR",
  "key3": "4zVhNdnLDmc16Y73vywNXjRFmbgXjqkNLpnHLjDn7UmW2T7ksUTdc7QULxLgMeE36oVvaTdAAmpQHAyVkn19utqX",
  "key4": "4dfnUemczfHrDswPpNzXeRRWSwjeaRX2sqCrwvGoWTUKnuQPkNohMUdouP1FHajkxsHhX3ktDU7au1XTyc5WHxeq",
  "key5": "5vfxHbFofFmZjECSyTrBwVfdNBy7Azsno9RUg3N2kfnimG8upAyw2STBi63rCMtvU7FCmAeXFFmksjdEA7834Fo4",
  "key6": "5Cu6YsvYbZcdfXjvLjV18ZYq8wC1GL5mjXmWxg58Wya5hXXhGDoWaoTViecf5gNCqHCmJcMW8dbZTcvBtQHgrFRg",
  "key7": "3esxAMYyFBUwpL66NAYXhm5vpmWMNAbzaLGZECeQ4teYVZWvidPMXX5iMheyadJC4fcNnR7ykTuvwEkEBwAenPqk",
  "key8": "3PoJ4TUAfQTdV7Rbq2PEyVJXSrRWW8U6NoWYPohBB84hjz2tjCudXWDQjZyb6RBCthHMBhr4qQudakHcKBwXPgT9",
  "key9": "4S9ZxEX5us6sVqtK5STjmhYMo4hd28y2picq4ES5kCCHtBsUQo5xG3Mpe4zLvu1HsZSZUXMW2Stzg1tSKQvuhcD",
  "key10": "51VntDuBYFvr4gH18r1e3AC9Mnn8uzHTxCTCtHfKFBYrZKaGGWLe9AB4xrmU8KE2oc9XdHq6vijeNHsvUGdrMVAG",
  "key11": "2VQMKoxtwRtNg8xzoWMh33S61ZQjryTnVN4WtyKr573dXeQF69Ts8cKSSN8aebyn9h4MFTvUA5BUPja1VrGRgGnJ",
  "key12": "4EX2afJbu3n255mpmdP39xnXMvoLk77YxF23nhidPey7baZ9GSUqRG7DE1Lj2NJUcERhvfTKbHLm71zhKUGeNsYs",
  "key13": "Ho4ybt71hJsTfGLYUMxwHo8AHzRwVjXZsfxfkeg4AQKBRAZdZEp8kSUk3bk8Xy7d6mbFUcSAQgsQiCiyc2DH2d8",
  "key14": "5V9yPzowVBV2JX1PFJsFYkxfM8zj2SesNDNZiwKAnSKPXDoZ8NS5jxiDdrW3igSSGztxi3k8C8WXXtQt7DPfHagG",
  "key15": "3NhLG7BcAhDFKKQeNMiGjrNLxxFBb1PKiD58f69Q5mhmpHm8sf5yQ5GPpXnouQHMxBE5NP4Z5boeyy9VT1y8CwL2",
  "key16": "49LFNTfAcUCzCqJLCa55sLZfvagX5p8FLpH2Uf69dHue9cpApGiMgt6UjBvKTZE1ocRqU8ux3Cza3Mu8CQwp8DXc",
  "key17": "5bseWX2dRCkYMJEXt4JGeRSEKgFr7XJBANpLkfudfXq1FnSQRJgHmm8k9icdgaX4kq8hRTKhgtG7VzqVBTzKhiNS",
  "key18": "kcTa8zqVNRNLopz9ARMWHfQCFeZoYn6G4hGifCYJabuKNQpZLf7c7Gngx8hDEdFedG2V3sdQU6APPLv8EHtD7zP",
  "key19": "5mXaLJSbPYU2eA9PFuMoFx5gGCdREsYfxSYnJMd8CaMkhLQPKg7Q27CvLdm28zjMMsEfaRpJ4BsMpsPvWg4dR8nE",
  "key20": "kSLMdJ4Nt3uBYBVeFJMhH4rrHTx5XrKSQsCM7ka5QcVuvvzbZTv6u6a5DynJpSJXdDZCsUMyA63BQzMvfjtU1Kc",
  "key21": "2V2vtvExUS24Wd4TtibDV86LcXmL6nwcFaspgnjg9WxS45jmRb3298EtNziiK9NjLqM9n8JXh9A3rxxfqTstNc4V",
  "key22": "4NhdLWgogNeUnML8JrAKrsosVABuoGmRFCudT3GxwNczw2mXHQmfGzxcL85rxEGksPdyX9u9NArXFVausKfXKczE",
  "key23": "2XZPQZfyjU2JJj43HAk7xzSTpbeDY5DuWGKGmV2CywuJ3YcxKL1ENv7xh8946Emx4AbftsuYf4KV52T9iXUBKJ3P",
  "key24": "2JaUPRsczG1PZZJ5BQFaum4aNQrxiG62tSLjrayn8WWf6tRK8SPmZaoDRc9jHcaMidQQV6btALy13ayVgxjrv1sW",
  "key25": "3Ub46ztvUEHWEMKjA9rVanGPKiki159PrrEK9xURc2saHYRNkz9eShWVUsJFpGNePy7qN7iwCqdLTjFA8CNhuMrq",
  "key26": "5RbT7ELitrqneB74QzTyKe3fJ6pJVkV1nb5HPGXyCML1WpLfvLyqQFBesvMcfhwTUYAJGkoi2wWoZrtjMeF2qu9W",
  "key27": "3uuV9PFMPTWHpdMf8gW9F1JtY5kbdcm1JJPdpmc8ufUMoVSxFsY2nu9jBs8SXkEJKxUbPgUPAzJrePVCzdLJHy2h",
  "key28": "4RpaMnWoKFtPB5m5ff2SWWyZbWiDjTY7YEPy6qcraCDQF4ANipS8v7WozKgMkF6LVK9h3KJ8ozKv3QbZrNZRDfH8",
  "key29": "Eg8UPJwQ7finekhGxiBYxLfQbghJ1ZyBhkMaosrvj25Kdfg7oNTRkUxVbL9Q3KdSaow2u3zX7kmYEWhrcL8phtJ",
  "key30": "3NZaF9cxNHTUu9cvJ97cv8JY5D53dhhg8gPxBadFvT3PaxgHDCyuWjHyg4FwebxhJMFcgpQSfWB1itciksMnMSkh",
  "key31": "2C2VVnQDnzGLgjbvjKMRYgAwSGFiRLAYzATfKpM8DPywRyqPpVKLT11Kt681bSePZFae6Gj43wwuYiRbPSd2jurk",
  "key32": "4j3Y27zha5bDSKKWngYZeYGHHNnhsSsMUTfvXBRnSWXKJzFCWer7aqVeYLxoLtRaucF5Hep6qUSQXh8gN9w2mSEf",
  "key33": "5Ct5hYyUVPoi5VL1REmNZdWcG9b6Nqhg8k6A2kHHXFfyorY7rvhj5tqWJPXptCWouVDWgn2x6cMZWuwNYChG1NA7",
  "key34": "4Ehi6menJFu3YF2vkHW8ktvoiLofpQYEseHb8WMcRh429Qn9zV1YuBJswGPrTyNVsDrPjH3xe37cAy2577Mc5S3j",
  "key35": "3qh5SqPg4FTiiYeaA5rZVtNLvcjtebprh86iTSrFVWxFGDeJjJRVrs58cax2HvAv4yuvoKsodfsoy53tST8eXrgF",
  "key36": "2VEwfgjZGayvQRrxsEVyTW2cocp7T3B1gusPHgdx6j7jH7scrVppVi6f8ExmKvBGbsEF819tBhz3Fd3VsrgiB1kW",
  "key37": "4N5wUPpL2twytZKrYZY3iAxPHkuqnMa5Ydabbcodfgjdr1H7JreXLmDV2Ch955csSP7NaHLgnJanXQZPcbzU3Xci",
  "key38": "5TdEGuFMHVdTKdsbYqb3uCba4kJP4DT5e4XfwPMiLgFKRAHQV4iG8ZT95fEXfw8VwHwqtsA1VQuMniq8MU7qS4MS",
  "key39": "4MjPRYWWyEmneEJa4FVu9qdyqxbnmphpXUdmGq2W8fDZZCy3PgAsw4m9JaufQ8M1SEJ3hDS7YYQSmfdKxCZZiiwc",
  "key40": "5q891JixYc6q4gcxwY2o4hp7G4dwN6Q7cfUZARydutZ1jkBmViUQJNDxPP5MRKk3pDeTm9rXNCcHX4Qswn41LjBN",
  "key41": "5o3ZWwsyX3xErEbkxpiwiXRHJgvgV1HM96mwTwVVz27nRqGoP3cbRyzjs37Pudh2h6jU2zC8YJhJYhFSexDQCm7M",
  "key42": "2ZeTTPdAPkzMLc5CoqYPoEoFiZiQxtRvQWqi6b9nrBvYCyQ2AMAAVU9vCguxfgrd3ZpjoCZ11dTFSExaJ5UpTHey",
  "key43": "4Bz75EaVQZQoXkBVs9JgThDshuFcND2NwapMHemMKJNSxvHKu5NG6oMcR3Rr3vaHBDCaPFAt9SvtxnwngPXmzFnP",
  "key44": "3fZG89Nf84eu2ZBFct2pSkTiGGNBEW33sUsgLZPkHDc31TKrxS8SUVPH9yxVHKRCzkGjEPmouH4WjbApCmxCGMCR",
  "key45": "5LetM3auzSSca4DnYVWqZWCCsCkUtd6A5XmHqjAxPaXTjii2D51d4yKD68kEwNdTjMf1h2dPwfyh5fP5i7Wb4fPC",
  "key46": "4C6kX51hX6BPeyNsu3MhTiJ3vCthgFZBNJ6ZcuQCaq8MsBTY35Ze6wEon3gq2xmEC7jtEQPuXBkMVPMpEYeCtXv5",
  "key47": "GqGPDsdNAiiYFHovusKZ22eFoAUFsDX7Y9sWBy7TMQEfZXAQNmiVG4hfd4cqmumudzkCHoM9zpFCdqUH2aQvVUj"
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
