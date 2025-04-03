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
    "5wMUiwuwjw2gKfSyxVi3RrVRueQaPyPPCdAQafmrwDT9wUancivxRPpW2LCkLfSk5pCdUnkLYRbB4NUKPQJDcCJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpBq9S4tavkVPoxrV6hQmZZePik4x4dpVvrK9QqX9FdgavWAr7EDj51SJtgivkgbmdjRQgnzsfSZXGRJvSYKikb",
  "key1": "5vVbvdPXjTNNuN552nwKo2nGNMpC11h3CuxWUyDVo7LS7nq6Qz1gxXJ2QEPLpGfgWPxQEwHnuGnKDWgHh8EdfeSm",
  "key2": "2SRPPR4TR2vTPTkuac77qkHn6LFvG7qExUAx5CQ7bbrZn9Zct14aATbccCgis9gx2BHYwPttKmxCfQvtnmmcDF8k",
  "key3": "5Ua5An9NaPCYgUKfvkbq1MRhbCbRQmLFVbwaABsn1MR7WwnPduM2kSZLeKNFxC7h3MkJHm5tJA1XEDeMXyuLAEnx",
  "key4": "4GHuTjNr9yMmK3N8K7BkmFwDYZNDEtAZ9SMkHj2smsXthDZS4vnKGaoPDusk8n3vcDLSSirBuBznfpGekbaeEpCX",
  "key5": "5HeDQwu7Xr3S8kxJdUysrqXYzRik6LdrHC69vCmoBqJE4ifPivB9cvNjMWQV3rNr2nY186Qj2CmDzvzvrbLNoLTS",
  "key6": "2gZtDXbbiTF94GTZ1P8m2zE5v8YtbMKU2Ak5TdqzkfDey9Um97dyPWXNpMG5hJTSLGs59hfDgqBmUR9FZKnnPebb",
  "key7": "FS9ffj48Epi7mLKwd1gKLhPVi7qD6BBCQpf7Q9NX1joz3AwPuJxwpk9KVgamUnU4mY7PqqhmqgKkQ2WHXoA64Dt",
  "key8": "54a6xFEqtdacq8amyH1orZsV5k4ZPLuZkpwPEcvpNec7MnNYwmWoc19Ey2XwnkDSwH8MqLY3vKhmDxqYyPMAW4Lo",
  "key9": "5VCosAmCgNQeRyt48Kv8Stzo1omnvS2Yq12m3otySN6fi7Ez7buNN2BoQP6b5hNbeX8GyfqpJM2Uq3miiApH37aA",
  "key10": "vAKnECk5csCxp3bMyTrzvuZJ9JSb8881Adk18osF5vwhnwSeuuzMFbKpqY5uaWhvgS6Lxe2yvzVLZdrFiiMHf7U",
  "key11": "jQdCH2y6U61GDfxwEMd3wPZvsVdY84DZL188aaFwh2fXNdBNY3LqGdyjH24iSwdgEbmAa7LeTU4X9dutSrJfeMc",
  "key12": "4fyLayX9xKCR2pLc95KBvoBzPvd6PHV1icbnUd81LjEKPHd4NqYWV17Lb27NSDVRmqRSriFRrCVzLwsCZ28qFtzy",
  "key13": "2m83wVsfaKqvsFrcVznaHjEmuynHZRfRN5w75CNYdSxJXcfXPE78VKeZoohmaYgFojXLwTCZ3MqFH2i5NYwSCzmd",
  "key14": "27errjXqPKQRD6gUF4YK3V65PRx48R1b7CwH5iLqaCip8BJ6iq2HHMQ9gJcppZ1SRS6DHKm2wAGPDKdoq3b3nLuF",
  "key15": "2sg6rK4P7k4vsr6fyZq2dY7DYGh9tW1JfGpAXKiPnRfBi3bbP6GKbRWkps7YaLpJToiGXh9ZS8qLjcBMTuCH9fEK",
  "key16": "5eip32nahdG8FixAAJN7Kz2g6FxujCKULocysj5t1RQgkCMaLAqgE7rqcR6PV1SH5rrmpfPBUpYY8taUX7sr1D55",
  "key17": "2VWUc9vyGi6TQP8qnkUd3LUSJGiacJ4a6iNqmSvDwzPWMMbpJkgQgQtNtfwiEZae2WVBHpq1TGH7WDcrGz9SK1jf",
  "key18": "aMzytjGze2WBKKQVxytKjZ9uHoZRfDAycRKUZBx8iznZNHCpk3B3eRzQePTAYWK8qmc8B7Jr7LNyyJi7WMgfJG6",
  "key19": "5MmQFFpc3A4RBXAyDtpGxkcKpx9uMjWXXpvqxJGCT4yiPymT7yFsBN1uRSNMKkR17DLw1iLhBcjVEWbpkRZWhB1B",
  "key20": "2m42VRRMVisnYM1ytvteCE3FGhxMLnGufU7VStvBY33CUJkn2aKyt93yWCuJSVxVp8vLK5EAMv4WcQUp1wvSh2yz",
  "key21": "4HMbmcz8qx42zH55gu3faLH1q3TTkAd2kfcp5U4VqJAyTTZUVzuWBTSDmHDgZFt7TuzG7VZGQwjCxqNHWHx2XJsv",
  "key22": "8aDitt9i5R7DHnAV64G6U72HHVsH2K8ugdcp3EsRwxnPTDZUefaxj3633wFRHGVfuMHdFnE2CrgnFc1KZV4mg11",
  "key23": "pjQYBwMMU4HN2ZkWb414Lisy7tJ7RFwSzWppZJ2rC3opMeejDkD5HzoTTcYrxTN4jdniQKjvarsHV6TL6GoPcnP",
  "key24": "5UwRvwoa9Ef6pk1em9UJVwt963SUqy97jMk6vDW4d7SA7mbpmcTAEzX9pGMbkpX6GXG3fjABg9xY7cUXL3m6kjzc",
  "key25": "5nhA1Bg6kxmUkpLBXaU8wmK9eUohDaCNnfX7A8CNbuw681FLcuypSEYHced2NSQJvJ2r1ntzJgJtNNdAtk4F6fMh",
  "key26": "3uXiKQ4DyaQUqMpvp6wzFnkH1SrzwhMbt8Nj6Ewf1sCkBWT7bDVmSKfiX9UiKLQcC8obYoQDkpubPjfksJMd5ata",
  "key27": "oZh1uTqk6Q1rt4DFQc2dyeXv8NesR1gYpDN8UFG3t53cMsgEhhFp6zieafvuLBftr4vdRQ7ebGowBQoU6mdP3M5",
  "key28": "dVnAxbsDqt9HAErpHDmfUkHneM52hea9AUji1TvdmtP6V5Nzmca81KXne5hDbQRtSz52fhAnxxPJh6j4NqdY7in",
  "key29": "3S1QNf3G5jgB3b8VmvZbPA5ZP7PjcRykwqR1n4X3q3NhonGt2Db4MyyXzdUvpzddiDYnp4biHZERbJy3XnEaAzun",
  "key30": "VpzGwUjrh9XabLfNBzbZmB6ffTPfhvo9T1NJFPrxwBdKoakGqPM6kdeVQQCM5EextDtNqxdpnJxYsgJhTWo7sGY",
  "key31": "3zwGjj3HNhJfvTGZ43EXCEyXrZDEvtAX6yetU4WpKALQKBggNN162FkSHX1xQuFaYsXgZaSfGzeHt7Lvvg2YCi1Q",
  "key32": "4icSLwZf9sWP1kidtFt8KhrZWxhznYwvastvr6bxYMViSqBftKjkTkqs7aZHLGHXjNoGMLThb9fSQja3gaxHxuNE",
  "key33": "5JuVKMmmFc2By9G9VQdfi7vHZxUyTFZTbt4xq5xoV4hd9yxXBDTWDmuREgJst6yw6a1DvxWmzXojV5iWr3AzWAwF",
  "key34": "4CVhBgQ5MUpWJq2LiNEN4d4tTBteSwFVvZpLdKu4swQxUrMwnS6tPrj3Pw9XSjWAymmn7gVwyKzdKJMn21k9XBaS",
  "key35": "28QpNAhE5kXCV33bDGkDh7MBmnUJM1t3N8jWwH3u8bn88CmaBAVu49T7ELj9VUii6Zhx4poG9SFTuHcTtzdjYjQh",
  "key36": "4jWXdMgTPML34gNMRVXPwMg7KfzJjyJ1wVTWJRgdwtT1wj9pVhac6xMcDqhmBkhNZdRHDGJf1gFMoUpkGfhRqGjX",
  "key37": "3rBcSj3CNE6yV6h1ViANTCQn1HmnWvPHX463jofM624MuM7keY321WNV9FPWQUC8REJ1tR6y3RV553t2ZPQaNgLi",
  "key38": "2zaRPKURRBS2Kh2iGfFmwmTZ3FBm7WRQybWdsCFsQEyVaJzw24V5WqmgpmH3Bdv4YsPgAQv5g6YRMKBCDNLH31vt"
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
