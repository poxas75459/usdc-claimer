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
    "38y6oRVfHSvtb7TfoYrAj7M9epaJj7BKWgASjEcSdx4Vc1VR7VYZmGKUnRSjTT7eYxuq7RsXxQkj5hkS3zMJjChx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JM3JJR1psVddPv2b8XiYcUp1ZQiL6s2dfjsDbpnWbSsTSGNMkxE1rjwzQ1hQaeZ3R7E5LdXnX9HxvMhqtd3VfG",
  "key1": "6FGhUNpSZEZVaad3bLvhtHx6ppKSmqa3Ae7GTnaVsPQvHr7PVkrr1FLcpuWsRQoNynktFuSSPxJ1gyL8EtuHNzs",
  "key2": "28YphhxhDhf7sWEecJ53prDihpwQkT8Ddufp5m5Cpcg9C3HfxocQaf7AEG3Ppcy8iCEQyoTvR87m2gHHNV888iap",
  "key3": "5odqtzNZUWjxb4td8DHYYDYn4eyZKpGykVoFTBaCkAd71M3RXcci7JwCBCiWq2jkdwH1gLvwYZjv8uGjb94suKFw",
  "key4": "2Sdrk3ezEke6Pi4e1gLB8xm7mBkNtFfWiYMCMkqSnRPj7otu8p8g8ErwtohR8aSB5zEbKLCkFqNe71on4mTvitKy",
  "key5": "3DzBaXpcWVxmytyGVBv8ZTgrumSQnc5oc7D8xQVwrBnLeoWXkDboMTSvMisRy12R7N1jp2ra466rg2fSU1q6gLWB",
  "key6": "3MYrXcSdjKyZuGjQFmjLvvtn54mMwYf4zmBEwiVLVJ4WToFauzNeeAt39MkT5Lgpend2J1YGZTAvMfNd5W1tz7RT",
  "key7": "4VUjbfNYPgLNRstgZJuVQhn5eYr4deDqT5Er5Nsjm3wqccMxaYMtYjGCn8wY8KdkoEkbhUzY3wNrW8xR2MLhQYH8",
  "key8": "4z2Eao78uxkHbeP47KFQH5yHsZrzGwLt2AELjxWjsUH8ij9csq1fWBswaGR6hMYNgR6ceHNLnB7b7WmzxEf1Vnyk",
  "key9": "njHeK7dYHZHy4xrtTBxRJcQr3qeGCgweqGrSuep1ocjnrWQNWrgWRKPrFhhJoMu4eP55UJ8BCka9m4c9faNLKiU",
  "key10": "2fezdZPHR1Hpeon5471BEa93dxGLi6RApQMvLPEaCPBZEMzFjtU4hmnZnF984tJJLpjgbz289kKhX4HoG9ioAtyQ",
  "key11": "2W1mQD2BX8yFj2nk6AYLeamUBs4uyLKjjQFMX5eoDFJpLm7cmzxpFvQgSjzatZ8tdRHm6MsomrQLnrpWbwmQ63X3",
  "key12": "rXrdAmiU4vjkmrYk4pJvafaNbytNVDueLtBxtKL1PGM9dcEvnXdwvf9ELZRiGxB7usWxPQrk4jLuNqmnL6shkVQ",
  "key13": "5wHw2RHkfKg1aNvGfRY23mgSGHXYKeaizoKsq9UfMkcWSQZPqMG7s5gRk7PPzChent32giGVWxQ7DaZEErDXiaN1",
  "key14": "2VRe5iFWKqde5FpsCYzpJ8pNaCu97zwVBCTVjy4tEXHjYCAviK8cBtmBrLd83zi8xdjny5m28fVyg3hfhDWTiodA",
  "key15": "4ZLangF1NB8x29sZzZvW8JpTaj4EvsUW3p8xFHsh6N2t1YuftogWYtDM5kaoHbEt1m8FmSTPpUHh6B6vqhy9wzMo",
  "key16": "4hsjwyfMotXY1ZbEqLZSvpeSj5oFALQX34coK3rFoZdsosApEp7rA5rUfucCmStJsZ9ubLW2dw51PD481Dc1A3JX",
  "key17": "5YXbYtAtcwPevKbD8avoBUG7gHcttYLAhfQGjtwUNYBA8yNVyVrReyLwNyQ2La5kC1yMyRCeqwnczw8KQ3xoJD58",
  "key18": "5jTzmxsYDY7DAZmbRgSX4e37UgMTuoksgWfVZT91THZnCEVTaieExLwq6dYc9faJbSnwBhwWbpB2NoViGbpEtkq4",
  "key19": "4LyKscMtWhZkNXmT9NTkYW681PjSttggL7wDPboMG35suJtzdCChzg8cN1AV2o9QgDV5ozdUpDansfETb957SoQc",
  "key20": "5SQzULRSC5f65x8xV9pSKKwtEiYxGtQp4qp39DmA2cw65NQHbG9uiG7dAFtd1vryq7UetbUfdn7sBybpzJ6VL1P",
  "key21": "2hFLT47VQadMomuA5GHyr1suppJ4QFaJDq8xBs3APmo6g1wnusY7Zb51NQkovPh4UKoftyWPB8aGREjPKWbbe99i",
  "key22": "5bgmXT59L356aWrKRxrDPq7cTtkcrUUiGw2Q4pUUs1oWcnfPcuChZ2KwVxWv5ZkAAnqsoRePW9We1PntNcAqBZ7S",
  "key23": "5pzJjyMCYvwFXMPbR2hesJ4psoSX2ZFvj9Yr5kvv5U7HMX546K4wT56akDofovc4zhkP7BLbC1P3xHPc8wSx5MfC",
  "key24": "54v2Kb8py6NDdXvQgxnsvLux1oJJNWGZ9qoUwCKuGJ1Hijp8e4xnF1BkJ4QrNQamA3xHeYfEsbNeqebxUhmt6XJ7",
  "key25": "3YYN3Y6XYDuZr9ohoB5HPnaanXG4Mcy8Q2c1JGNfE5waMk2v3fmH9SFdb58emB8Z2m4QC5yM9d79hEKfdmpGrUtX",
  "key26": "3CBGfzHEY6hvtCHUB1fwCNMLYThUNf6USnPQShoAzFZsVyAzgSvKT3U3bTDuJniBgFRcxMo7AkiCT465ugSUJiMi",
  "key27": "4YarMufY6DAkCduksLBwcYqkXCXD2bSKeJJcwCYdwy15Le14ycuFn4Cahtbxdk2UCtbszN2qsa5bfv4cJqExWeRU",
  "key28": "4iJqEE64jUa776w5TozRehkdygMxK4awowpGJQbjpfTrQvaVYqRWdzKp4u2m72dQsGAZkbLipkV4CMLBzFnyptXa",
  "key29": "2EDFs8KShDu8dxQZ11fWghdCVsaNQBH86RBr5xJPMpzSqD7bhg7SdjzGMBkBf7AWo4DGG3PH3EYrZ4EZAaysjtPv",
  "key30": "5aQgDz24UmFybXrKq7arwSfQcx2nTNMMXgbbzXfU5RZeTYzcytA45fyujtHZFKVFLqXe4Gx18NN1FEsgPNbrT5oR",
  "key31": "3vTUvCNjcagVgoSrdUxqc55EEXwF4buSZe5fxe41dp6SGz6dgr26dXDYKqwekiZ6fFeYToffw6T1J2pG5u3Up1iP",
  "key32": "2eh6EZabCiWheJMJqPKk6jdPpYTVd1Kwxt2GwJx4oXmwibkRwpqCw96SBnTwBmv62iqTDvrHt9SQX5r8oxr16uqj",
  "key33": "31gxrEtANngv6UvBvngq1migmYREyDLbTE7wnuVNNjyeNsfkaFA2wcJpsnZD4ehYPBRssXBS34j3oLynnpxij4kQ",
  "key34": "46BxWC24ND7pJmqaumgcQcNT94fveoLyy7Mg6rnHMz1F4uj8LF9j2UcmEk6zy1D2UZuUVdWH5EjCLC7kpSjbzDZY",
  "key35": "Je2vfxDeeN9nB8J5Q6APwZ5EW5eP6ymG48upc7NC6Y9TgArGj1BVcvKCym13bv4GFJjkZtHpAJW2d33Jou7WrVm",
  "key36": "BzGqpV5EpGocra6zGAWx2kbB5opCKsx8kZM95txkGGhQMsVVezatoDdZg3PfZoCrGXYVYPqZLboVahntRGiZ5qZ",
  "key37": "5JGSkGHSnow3AmjwC5sw7Kf1g9Q6Je8fXDUwiXwXD86WLpJaowzQ7VioSVAVhuXae8juGxbid7o5bsGiEfJb3bLh",
  "key38": "3CwwLrFRB2ynC7oBGpwHSjQ9Mcpq9pcLDRVt6HwsS4X6r62sQBPjQsGCeV2SqXJLYG1Gb6hzoavQJHwaPbMQomig",
  "key39": "fRe57aAWKjnyuQbPHzAMQ4GAFjwDE8afWu7wHo8cfjJRzMGCNBHWGnY1c9NPY9T3s68jAgfj7bnreBWjcpkb9be"
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
