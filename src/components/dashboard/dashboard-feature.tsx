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
    "4jFZZmjo6ryR3n9nnoxEpPMTWxKzHD98qYMjpQAzJsJzBugD9F1pPSp1DRU2Zz66tNpV3KffndTQCbYj1aCKiNRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSu9VcGd8DbLvh4574Yx6Nc2i3jnq8jcjNB1YY5sWJTC5sdMkqvngzSPGcu7iWuo7wbsenXXEiBYJNuNub5VRyy",
  "key1": "3aAA1Qepv1RSMs4X72QYQ8yGPwgnQTTzuum5f9eQeAWheC2QzaDoAKR5gjBYcRy8NgAWNUEs89Xzy9sDHU1jTFEX",
  "key2": "4TJtndHFhxW3qCxL8abZjPyGGSFuXpZRxXxUxwp5Cwt3gqSqQa7e4r9LZr3ghoTiNm9sw7hiSKBpugcUgygYjYJ3",
  "key3": "44yjDeAQAzGCqj94RsyoM9ev4W6kfPNRFDjvifXqZPVdCwG17pyZfnziUUmigjmgwuAF9GQcS5ocq4J86VECKfje",
  "key4": "3QscjhoPczEZjyDJc3YmPpkkv21U4voBW2okkgcRZVoPY4Qa3gxZLgxPYDUmAGZpwcPDLVtR8DPe5e8ockMwhryN",
  "key5": "24jMtYBKFSHqAGZGgCkRwV6m6pp5DnJCupcGW8xRw29a9MK14yD75zzFTt9JyHSomWa5N1BEAcjoZJFLvaDxmgs1",
  "key6": "47uMnTcPiZVTTbCiv2iUimTukte45cBu67Ps13YpMLCg68UrYwgEQsVSa9DCPJAWDRFzc9NAp6etYdoMFzf4ZEca",
  "key7": "3NtHjXg8Xv9YBT8HDwLa5vNsphGfugQo5t5TA51cA2fzHRwnfQp4xrNps9x2dQzxLShFm9thwVWSHBEBg8YZ9sC",
  "key8": "GH7Xu1oaMCwzz28h8aqSTHYwKoVjXu4qHyz6tqtsJW8oRUVpQ6LeGCvFuc98R3Fd4XDRwGBsnre2o7v169DhPrc",
  "key9": "5CDYgnaJyMrRt9iZFWTGWCL16CgB3aKU8GpxrDW2JLQvKk32SHNsyyrG11Czkdg9Y5hmaekyXJd9expCgvR6fKim",
  "key10": "3Jbxi2NvGbLxgu1rgFCHjhCsf25yNWdyP7gE6M88XiJXj5b6rMNGstjZNzwT7Yx7CLtTEohNuLKDDq8u4L6k8zaT",
  "key11": "42iN87sEsfECZpMM3MB8mMkNiXfWjCXCisgVjzNy8DxrT5LAirRKKRpQSmALMvyNBLwakLE4nSAsCiYCvHQp8ooh",
  "key12": "2o61qxcryvgo8trJcLaAyt2oAkZXR4sj31FuJu7fseYKYqLLbmWtt4Qs12mn2vxfFc6sKKUvaWhL3VM5PrnjwNE5",
  "key13": "P23DWwaPqXoBhnVioZVrnmvLtAsPKf8CrTnq67e3gdbyvAm5CZMJcYyUnxY994FSHh2BKrJ5VJ8hApJvfpBXZ9h",
  "key14": "29Prh2GoUkuGpmJWbXYEUu2ic8iguvQgfSey8Uo7HYtfeEaAXKkKF5Rq7L8wREvCYbeYGDb86zoMosxvGtAAYgcL",
  "key15": "3TGjtJT5NFKarPX8kzPcdcCUPtzFNS7DTa5Sy9Zv2tQ7ehq5CLh6k81jwecGt4p5yqZr4AeFm1C9TqKYQLXRCFNi",
  "key16": "2DYdR6J3RV4D8ViTzdwPhJSYqHdTkhZa3J9nEFAsVDc5gxYLtUsybSaHdeV47tjVvk2qWAJfAKkBcpk4DPWoTV7h",
  "key17": "4AXDzYHfAth6WinRzaPwADvPSDkx2j3DyX9t2aYxDderRzs4YPpmfXsDxbq96HxPDCjkw27p5tbxsaw1kG3ze899",
  "key18": "45cdqu76DkLtiv5WRwJ1v1g5SkuXawaiNgg4fbCVvNbR2amDhiV2KJyQ9BWj3cBYgSwXuJv3V4zW6cGNW28TkUM5",
  "key19": "3b2T8TqjE5VLbYwfdHYgmmBSDGtXDMyg7jCbK4av37PcWvLrjyT98EpsPxhP3i2h7JrzaSyjd2XYmjewe5yYxomb",
  "key20": "5V5yjZqRNR4rbJEJBheMvk9ZXYvuTbqGxR2hVxP8T4b2LNzkxjsMGwaH7VxTYuNR129719vxs4KoSC4asMJ6pKyK",
  "key21": "41HAHHNfyTpoC7wRhhCgsYtCntfaZmkQcxH4zbpGwVqaCyVjtLTSMZHFK7DC1YT7vZ9YHRHfE95thxbSLSJQLCvQ",
  "key22": "2Zfw3kwx7G4mkZaeVnpED2MVMCT1RtxQadLHzZNGWz1Uf7fUAxJGHd4ATTDftmqVvcGaVkVXM9T32UAMcgWuVLPC",
  "key23": "5ZreDk4PAozoidRGzQ2q8kNiPnPDxi2raJEgCx6XSwV8XKdJQdyVBiLxmdAFzoMTHFPEA7eq6rKSfMAiRtX3w1v3",
  "key24": "4S9XTfyLDTvi7ULoTnK2bNweMHjjdVkBzqE6yfoQEM24xnEYLSVNRtpqj4QnsoqFjE3Bv4UikzGfz5yBxvTid7XQ",
  "key25": "27idw1WYGQ4PHnPZomjTEUyqg4xAqrJeYxZSQL4D4qrWSGrC4ZzxxmPFsKswQuS8HWjxd5HVUpdgXxUbgP1ehF9h",
  "key26": "WsgLnBYGWbpHj3vwbk3KUBgvf9iDDLrWBoDvjqWzB7XaBNqjduWXuNckYNj3UR69LvGxb8H69FHvfbh4LpxJBeB",
  "key27": "R1x4QzVH3QMyzna55wk6kt4WxT6zJa9QNiGitBnc9LmQWW2FF9BimsvHVU9S9yMZ4eKYCuoGLDc8ak2aLxrhqdn",
  "key28": "5szS3yi1Z2qvKs71jtrYv3iAdvKqYS8Dju9ysdeh4K2aTuur8KkLqyvH57nLPDuMisW9tXeuyf9LmcFHW1tJVqu9",
  "key29": "2CdCp1pDx2KVpkDhrca8wAQvdALnuoDJuwjHPaXhGAYreSes5JDVFRL6fFiYFCJicsDkxFVChDSS3RxPZGbhxPQ6",
  "key30": "4qHEhhHLD8CwgZNmP7NzZca8WejTuATsrbAYs9cvMP1UEQibYKjciThUHEomUpmq5xtZYmE1TUYuXPbXLdhzpezY",
  "key31": "48sJWUEHSTeWvpkfZYzowVBg2WfWZCuRjyvS8SJA71d8JCmnMh6WVBYLUkpEkAHwJVaChj9k5p75rBVWMQXntbjn",
  "key32": "4PmzE7QFu37DL3MqAjbkQXfAbEtp6ME41FuPJQRNS5ewDAoym358a7Vb9RAqwMeDfHTAuty4NcF6p2xtXnGd8zSo",
  "key33": "52p8VJfLE512j9YonMAMKAorCTPZF4DTR6YPSHYevFJciccDk7Eo5LDjM8rt8eEGAdcwKEV3NYS1aFTb9evU4L9v",
  "key34": "3NtS5Vw9XCxb3c7PrUGBySrERCG4pXZ1aT8yGTNcKvtgEURb787qSs44xitToBbFRM3tzAssW8HDSjKpSTb9mdeu",
  "key35": "24XA1tUwVw6E3WX5z1jYTw2DpmbBhQqDutqcfuxFNzjjgirhEDGP8FCxpM3dV62F2HKJXNNwFfjSpePvtMU7fFN8",
  "key36": "2kkN2yqcTZNKSEYS9J65Agqdum4c7fpqhXKpPPCdFuCmtueH3RXirtBDCCvLAZCEBByJMuXEkDJENfBu87kCK2zH",
  "key37": "3y5G3W97zDhnfdJUCEcvQ1fuVvyoQAjV6Qm7JSeKMRzeKshEyRVAtfRpmQH2qbKqSTLbc9Jn2UWXYsfdhsxZMyNm",
  "key38": "5sUyCTcK24CWxNXyMpDNHBQgKx7diVauWBZexTPn4kW57KRHBjBFre7eJtDj6oYSaoWHSS7sCXDdMXsGHDBHeqH4",
  "key39": "44FgUp4nf2Yoa69SyXTz8KBFYGB3YjMtM1n5JFK1v77TUBL4rbqQrNP68Ciou5xJFEVr3NuG1o2rCrBateiqYYwX",
  "key40": "5FGkFkY3kXr4UBPv4RaeTsX96jdkxgCHVtEBD1wmqXnKfdSqHR1KyQ9kFZinxh41S18xSAvSW8tMjmuGKGACfL6c",
  "key41": "4fufgUQxoHriQe6fHmQcao8uMmJizjfKfSymtjvyhD8U5VxU7VhYz4awaZwQ8ciWBYo77R3rXB6pDp2DLBTj9BgD",
  "key42": "2eboGsNAXxc2BmV1eyr2W3eLGa2wE9vyzGbprrtv8hkho1S19Vnrce4XBPdCABn9E1k8iKwHhwcSDNQ6eqARNAX4"
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
