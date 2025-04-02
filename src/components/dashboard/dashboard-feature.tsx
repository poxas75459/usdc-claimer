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
    "5AGD8gsvGi79eE6A62aRraMh5AeA327ZA2D9LFahsdy5Ufw8tZfmYjUCxcXQSy4Ck5xJbqauVT29DzrHipL2jdCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gB84ZUkgsSkUdjFGeeY5eNK8B82H4JpzroWe1bLP5ZQDj63EF8jvD4DRMLqgymUUwH4XHcraTQs9TD1tuPt9p25",
  "key1": "B7jcSaW8HFeB4A1fePeWimrtHGL1qTm17UbfMmnaxXwGwjLQAw3wobhnX82wLmcSo64upL8wf78q7W2EDnrKovj",
  "key2": "64craGbjn9w2TxwZEtqeiphDp6xxinXrdXBeKv1J4fmy152x29LfdKLvTF9L62m9bVt1yFELK5oSE52tHJGkSMtN",
  "key3": "589HjeCutbvbQWBsnA5zzzGnooNiifvZxXvQVYBp43LEqh8927u4rNfs8EAdCyiJQa5ABy1xYF1BdVC92iu8SXS5",
  "key4": "2CzJGHcvLAyGd2QHakzNM147LJXBriKyBX2gLbh7c6qRRe2wWmZ3SYtKrWGdiaB4C6CwnLQWwapcZydXVGWt532S",
  "key5": "59txENgEL5uusXvnEYA49QqQLWqgdGnzrxzL7Ffq89Z5TouVaK3LPbnFHvoQxeGwKSKw2h7ZYaiqy59xrPuM7UXQ",
  "key6": "4N93QtYv2B6MBCoy2PaeR42ekLFP9N2YgvxB68Bfzf2eodk5EpNXvZCV6cV7HuRsu1ayFByhhSJRLZd3Txjjbujg",
  "key7": "2inddBVLzLYJvdXKLHZ4BaZt2HPtFvJKkNEGqrHwp3Bh3CxvEevraRF6s8sesWucCavYXc2DtSBCPuSiT9jMfzWK",
  "key8": "JAv8KLN7HU3ZBuGTKLywDisWxVvBozp2B9dKNDn53Vjxwc9f8A1sAK5PHMmKRT7UDzF7ymM4JAHepjuWkkTXUvf",
  "key9": "2SVhgNT72NxUzn5eTeFfv2kJ2YvqQbUKhzn89Cy1YRzHswk7q2pVepmJ9e8h2hYv4VyZYnXXHs6LhdTYzXXNbBWK",
  "key10": "53fTkfp4NxyE5HgEeh2ddnn3WYf6fa6tMNLESuAJBP3vHLfWL3SGPHFqD3XaM6ZXyrLB1NK6FeZwYvUpc4X2BRcB",
  "key11": "4XGBhbfJs4yn48HyuQDzpXT65vsca9X2HLbqJ2uppb83NHHybSkAH4WkxtAHfr1SgPZGaUAVsHfTgReeBh1gUX91",
  "key12": "3kpGMcorcZbj8ZvtkzHJ5dQ43kGeQK8PKYN56baiwo78SoYgNLjoWsYwdpEbKD5QSdTmUCV4NTDMZc1TsbvxQW1G",
  "key13": "4TuuCyLZN9GEGpZZvqGJajWEWNz1tKCiXKCoVK7zPov7w4nZF4D1ynqQp3SBEjHHYwarL6fTEt7BXqZhzVYpccEV",
  "key14": "5gpZs49ASyGE4L6wz6JZkNYhPnhDUHqty5PFeuLf7YKE52SyzhA25aQWfrHWWXHnFmWyumrhYLkJusdMfG3uVo3z",
  "key15": "3KsERrMu1VFhUTBbRs84QWbp7swC5HpjrCbSDmLFdWji8J6LDUxzhuZ52VLqkopiUdiM2wn8Zx7sp3cFroQjLKo1",
  "key16": "45FHhM7MYGkpk2AxrUzYsHmzfPbU4xzLfU7HuW7FvuQUAXFWcmPg3baiCjwU7QL1L7UNh4ikbvYMTiZeM3C4ciXW",
  "key17": "ZgzggrkJsLmYgBYhQHxKDTTui1d8k4Yq1tnw46AL3Rk38mp29gTGdpXqQA5d7oVKyiGHmYm5catfGrAqgkFtsbS",
  "key18": "3T1BivhtEBTjEcf64oDQcxAKjDEYNJvQnRsNhqmAhYitJVNroJaeJZwmjEgitEhCCJjPMjkisiAHHndGLkPkZrFU",
  "key19": "2azaoPEc5eRor9aQBGCtPQ3Uqb4gDWtucAMMVUBmDiVXtJ2SQTVJvS24bJxU6vwSeSaXYmbKEqx87Qcma9JREYuA",
  "key20": "oovrYTAqWfxpAeEynn8c18jY8vvmBVCgCe36dY1B68Ls8RDXSLS2yeZtgsWAdzD3FZA8QCR2YGmShNUgKNHxRUf",
  "key21": "5q4xb14ZnL66e9dTZ326r4wxWu84Hre8Gq61LPkcRHNYTnQU2pky2VPe2R7oV1JP2soxPbfudoVs2CDbCjK9Q1XR",
  "key22": "bhzYHjzrbecc1syXq8ZxnUcabLwbefEFxrUvJQitDQbqBubZHdsMBJenUQGVX7bxF3jviqWDUDqziKftxswEooC",
  "key23": "23inphaRL3Br7ijcWvVGYaS3boX8rwpFfVzVV3QCHATd12FcHLGrpWPSQALYV7DxacFC7o2XFE7NMDoSvXQw3azg",
  "key24": "2N8yhDataMoZk6BLxKJNpQpcjmf5jtMNoLf4R27NKD1a9Q6kV7Xv6H6uFx7MspzgGCZgHcTgpfLoWbvMKKMLep6r",
  "key25": "33Stp4m2g1rcvEWvr2NzeQa5fye21PhJyt1S3VdAyRz7mAFn8HzgaSd2JS38JneugodULteRXnera782TB7Cq9oy",
  "key26": "5ehkYdcEg2XZov3HSWvMMRzMyCHexWmreJfePEjBDq2RFq6Srh7hUgcWjLjEqAP8gpsDjQPGnvSxWjBkmjRpdvCj",
  "key27": "coJrAw2rhKgp8XotXtXrA241HPj6xNzKr3JzFF115eid7bs34ExX75HUP1QeNuEiRBQwmHvK51FUjr31jFeRcjz",
  "key28": "2zA6w8NYb4hkH8kVEMR7qz4buSrT83ibsyW7MY315Vvz7vzBnFh7MqVSMVmyqwEB9o5JpkezeSeyTQn8KZUtgfKz"
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
