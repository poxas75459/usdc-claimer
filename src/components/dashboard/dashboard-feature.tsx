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
    "nTLvHUmWaaLEPvWPKH8sR1stYCapHLFQBZT7j7iGszKg2xaW2h5jKVG4aAWC13GinfeQE588EStxe3Q5n2B3k1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkabDymQxpkBwQZaUJDmejTcqSSK9CHcmDfWoQ6c7vFUyp9hRAzydPpBg7c68iNSYnAAmU8K5RkBD7ojTgNTrxn",
  "key1": "4YYdQK2nvGDEVQ6392YSo87SEuwm6tpU5AKvpBypTHR7yZXVTbtShGWJzWAtT7MUEjartLCEKaoXDxUbAczCV7zw",
  "key2": "wUtWGGpz7HcnEKeEyuS56i6tea1Ht8J7PRCwXsoL96k53oncxQ4fJwRM2NhffuHgSzXsZVcuZUV5cH5x1DbsfAT",
  "key3": "3pcj85JLdPhfddp16UnKm6YhLzECQhPy4fou1RbtdDGBTrntK5tev5fWv2c3uQhKXY6KLMieiVbdepMZBHBukGht",
  "key4": "54qGcMG5JmmgRmUJ4wVUy8ZAd7rC1chSQy97MwMHLT5mPUKH9Nper5jqdmLtpqWp5FmRvg1gvZNvvNEkhCXKQRag",
  "key5": "45RFAPR1tcEwYkKkE7XnZZ1NfkjwodrDY8v3GAurMCadKS9xaN1D3t31URF9EsEScCHJLJo8hwXCyKiXQXdymPgX",
  "key6": "5DSZrqgdUqDbv1tV7BGHKajeLYNS2TwrX7EWtLnKK5VKZWbttLCEpkUt3xc4VVZnrujJYF5UdHcwbm8TEtNg3Ukb",
  "key7": "2612qsuH9Uibx78obiVbGYAPHLZYGF9mKrDY2HMX3xGHQE2TdQ3stAv5t4WdrX7yBMqD4S1fSFCe7QTejR7SiWoc",
  "key8": "3hbTP4UfX8KFuF8hYP3M5HWPkPrAzC1Xbt2tigeFuFi5gN2BxNpYzSZR1MTsnSLCubnoqdWLDnXQtzS43Ei1yFDx",
  "key9": "2aAnFPMGtYSGbyNg7S8vNSdy1Ym8aXQxicBrA831upxsG4GuLLbh6ytQTKZN834MX65U43qZrQo9AVGNKksNzVzK",
  "key10": "3H32HNQESCS3VH6Tftt7juMHGdSuRa4Ls8DXR6kpZdyBbbQh8TLsjk6KkSEjKfnJqSwqZxYTVAz6M5pavFYQRYYH",
  "key11": "4eYGrQTEQGTC7cyYfjx9GcoDAifHJv8za5fxm1pM5JLLXd4sYwTrDh7QXz7MweiP65LuqS4QgKUXHb4A7RTDiMNX",
  "key12": "5CcFDdQgK8Kvfr9ycJgKyEKz4xWD5NSoFv7A49xvCXBxuZ4FXXKTNSkH2Czt5FkdDTK4R5yaDtATLcv1ZJjm6jLy",
  "key13": "2wFYbxoZ8jKuw7acVt2syNuogGMGzeMNgYX9zfa1zvUJke3FgofgLLYt9MUHVSY8tCdsYM8kzBGuW4B8VqUJ1KR7",
  "key14": "5gFLD7FdnQ5YzquBxshUE48pu9UDWuZjdek1f4sNwxvF45XRvTK4FsCj28s3vw6AnnSBNzKCogcf1qiKQfVT5n1X",
  "key15": "LWZ97dHUed22NV2BJ5inEHBEuGSLh3NSuZHcpKn83xnGS4YrNrpwYmKVTtKD8YXxjVE4dWdxg2LC9gTJxs93SE3",
  "key16": "2XT12FNQvREtbdsGBM5Raf2amMGUqz6eERZkonSw8cdbqAu77WCEHp15GxEYeG17SyFoJoZxQGQvdKKcj6b3PdNB",
  "key17": "8vGCkeyZKn5Yx9MVVqTmELPBEj4TffkvDb4574DsfJ82UTNkQv58YfGX41kLf7vP1AjCFHDAUSN3dQvf2zjr1UH",
  "key18": "5mtRYFixJy4zEbLzX7cXh3UEYd4k6G9cjgaX8LZxMMwtx8qgGyJ5TuGQXrRkDrt6ddgFkh3hMtz14KXbxDvYSw82",
  "key19": "KQZLCdMaGMpE4hmnQS7FwqqCeNe2GpzfFinQzGvLBU4ffQryfmwWmWMdggz18hFFwUs9jE8RjYCdkAKvuf44TX1",
  "key20": "2zWu58vjZkLaGrqVNU5D5KiqNFHgwV2WeBcfTBQRfzLpSJyHxyMTRf9wHXXHLKpcc2usNZWNroH3htze8JeZezMD",
  "key21": "4dK9Cy9ZUwmxKsuYBBj9yrFCQJSi165k9bT2KP2i1zMKExLgiPwqXkKMmDu1LydNqGg3xtXJxWvkRvdM6TrLxMJg",
  "key22": "3ukiWPtgeVvUx1DSQ1ok3qvPsS4WZTQNFzeQ7YpsJDf1Tj315G3FZxHoLqxNk6jFwYGK6pZwa2xcVa1qG3SkP5Nz",
  "key23": "3bqLNTsbRaqB7Wjuqm712mZng8n7mS9phdXDDRRRcintF2YDnroaD6atarNqatQ2222JCPmpoXyQ6M1aqA3ccTiY",
  "key24": "56G4ZEYfeYQatnCPfUyn5GirUBaWAzGMcvJJEmGpqBiPXDuMFiFnVGekdoUe2iMMri5nNgbhfuoi81FoKLGJfpN3",
  "key25": "5koVfPXHjvev33h3kFWEqVs6vqcLPismqMAssY3LKbLGni5Bkg13ZsaJmM4fTk6FacbPbaCMWRC9X2dBYrE6E2MQ",
  "key26": "4bvWuqPyxYxUKZJA6DxJiKkcT7Bw1rZ8GyR4XsprMnpQRc7BwwC9abhFstcJ47CPsGAcWQ57DhpR2hRWDqbyVkJw",
  "key27": "5tdTGiNaQXRBs8Tn9k3dgMzJayRsavbf6Sa91sLMK2a5CV9W7P6WxtCfDViDP2SARw9M5PuzbTuoaR9ZzD9PRqiD",
  "key28": "62sk9gLEt5pm6facj9Aq8ssTwsVAFmf7kDeT8qiuXGNvYFVZXkq5FEH6ZPKXyqMffFPpZxUBLJt1WaDiMfMLWBHH",
  "key29": "4vdR34wog7Gt5V9mnmL7GpFzZd1gDJJ3MmCzGDhM4g55Qm3s5xk7s8iVhoLPedQMPDeGXPYXXTzeiKMZgjW3LEvG",
  "key30": "5vVsL8bmA5WooyzmFLMmqppGn7qhPf1pkBcywvmJMaoMKUDKKYCZduRowqudrjRui2gNCtoJug7cL5EALDxNEnC6",
  "key31": "2YA77H8kS9czmokRmHircfZgcQD1hDCDVDo689Y9g8Gg45KaCeHKXDBL2gBeV78fAydWExe3RA42iUZTNpBnPKar",
  "key32": "KrD6Y3D5XitBH49rSmLKTmmF6x7c7cC84msdT8uC6ZzVvAmjJGDPioKUkaKAuupUiw8k1zeefCKZNmsHSYDZyqK",
  "key33": "khPC8Uz8C8pLbAr43HRJAbnAsptexHmDcvfjK3GnFRGaVi8LHCUjwdL7oGirWGvohrptrvNRob54GtWcrKo6pdQ",
  "key34": "5k5QBepwehGdXbmHyyLYC55NTEKsFcRgstAbP7PzjiQkCzS1KCpgxwC1EWsmqTU7qbX2D14mpW34CeTkrcB3mWBu",
  "key35": "3a1E8AUepTv2cQk74ht44NomvAtD3ePuDfRe7ydoNTk7VRBM3w4EsW6oap4PE1rpdy3qStH8Bcd4cLiB9StsQUMH",
  "key36": "56CMiMuHKDWV8Qvsz4Hdswmp5JvGkabtHcSbpZcjPvGtVo1pHsQb4rBAvDo28Xk9hnkodpBdcs3ywJQqNLiYc2nD",
  "key37": "VLpaeFQwhFyrdmiha3yroN7GpXoKXshCXp9ov5GYQKgHBmXJ9PoFPRFeAD9e6xf3DYTjVyk5BHQuMMSJrtW58Hq",
  "key38": "3P3m1xq6zWyLaVBF5pLgZAtskWt3Dhfm2ejEVinNhDsfNoYdXpwCD9WmSwMrzCq8x5gEZ9pBtDoJbSxkWrohfXGS",
  "key39": "tcZ74BGq679zZrqMScXWoPcMJXDbiQvS3zydQ7fZN1K3DWjb8wNpNFddR6JCGGgTpX3BFCgQuVwnQqVoVBnkiFE"
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
