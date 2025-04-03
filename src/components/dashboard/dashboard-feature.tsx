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
    "3jSWZsHWofwaxZx2PDtdd5rG9Usds8t6Q28JM95u63yC2CQuZ74y5s8EvhuadgV4bM9825uFCKG4F8S3FaPDrZtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZotRvEj77ugKVquEfrc5vgH8Zb5kq34gmto7pVoeQ5ZvS5nc3JyPU4ywtYzCrBr9qrTHzSF7PU8nH5RoP9J2Mv6",
  "key1": "494mMvpcnat9BsWMZJoXAjdDRbWPAkGjTN9D1FAoVvkFR8iy7GLtPfTPHoZnHKnxaJ9rQqoetNhGFYXK7ShhecFo",
  "key2": "5XZBJSarw86eFKXRcyrhXmdZqwHjbVhapCBcktBaUrwYTQ6H4ETqVV4jBx6NV2Jr4Qyufenws2qjhpZsW66QeJcQ",
  "key3": "25tgUnTiFrXkaNtJWbSN4MtgZLvutpLJN7LVqCpVpRRNHwmsvdbyHgvfpLsoVEMXSNkXt8e21hsYqvSA8Gpc2Ms7",
  "key4": "3ZpUiWxZ4vhzdNgKwFQx3h3TQzkxzAvJD2HxCfiyMGqPUiRLn8SL88PvTegYYQUU3mDitGEyiRWpdiFhkhWC1yw4",
  "key5": "Z3awDUhQiezCgahJHHnaBZXhpC81qtcNgUkFyNKJ4jaWUe4MFDsZAWojhj5CxGrm6KGRTgMLpGwVm3WkVuDv7Ub",
  "key6": "5mLAN5F416ooPBPFwUTyvybmhTonM66LqHSSWTqarpe1NnivpbBa4W3fLryq9ijYs3WmCkmiVDT5FZXX3Rp9i3qf",
  "key7": "3CdYkGC7XZnwSNAWudRybwzsc4RThd9QtyYexMEyoNgaUBN5BtaXxGLhDV3e92ggntN8orDuGyYyuDYD12ZkKUMW",
  "key8": "1dgqnkehEtRfkS4HfriW4sqvExTLeSrAeS28h9TrXtCrnxMkZRUW7jr8CS55skhzsR6LMQYuDxLYbijKWrvLbqY",
  "key9": "53UEG4oNLNT2f4MQvhfU4gRbqnyWMrVAeiyzYddd2YSv2snAvbqMY4yK32DapXpZGAYvSEFbDhVvRCVynCKpk4wW",
  "key10": "3ANmD9zhAJuPSANxDDeUc63J2RoKc6fBTut5waVBoCeFrR4haPnP14sUrNf6sZwnsc9twmw7AvfBDCtyo4kwBqvs",
  "key11": "4Q4KcVsCtanh39rChhuvt3jLpaY8uJLxNKiyKnQyqZJXW5E9R3SkVtBDRrtXvWQR9bPFD7nxKmk6fxhLLTrCjSu4",
  "key12": "5eautjztkC4Do9RpSKFk37bGrLs9Dzy37Yu1FuzhWLcBZQEGuMYkzdU4N2jsbMxJzCFPqdpsMhg1QQnp5Hik1cWW",
  "key13": "5gAnUWRD9k8BE4y5ZXTg1B9uC2UoMMxT3bV6vGLcP8pH6yFM9eH9oxcTBRvyKNLPtWLcAopzRNJzL7xFPRyFxJpM",
  "key14": "2vS361B4vWhUmpeGiRhitcPQfsvMSfhakTySNvmij2URVcv4nijzHkSxfVct9ZzjdU1ZKCtHjXQXJ1dQVr5GBYGm",
  "key15": "q9ZbYjX9pDC3CPbj3sY7Nd84v8J4sMER9CKZMnGo4Zoi8WxewHSdsjQ9ZrhEwiB1tpC4gAuy65Hb6oi5X47FUU1",
  "key16": "zw1TjEapHkPyg6Fm35oVPNPMrTvcKjY4GrRJTRTKXgbmQRWmxvTJAZhNfinUJ7kZ7gB5ZsQkxVTKPj626f2Z8Zc",
  "key17": "3JsKLJfNyzCMpxrT4HTvdJHr99cYWf3WhSUthPhPzjkYVimasJZYk9XNfBpSRcf3Vkhp7vhAyGpmUVozBm1Upxw5",
  "key18": "51WY1WHqH5HKm5kcV45WasuTv8SMZe7dGQTCQCuGTa44ZVjD3LtKHfbL2b5N2jUUowp3qZkKuuRPNKvijQpbKwRo",
  "key19": "9BPasASqhboVHkUfwytw1p9wcUdv9MWtwHkqQNin6xmfWMc4Q6hgDLz4ou3847dwWYwB958oKvU4zVb3T4L4oUq",
  "key20": "4PsSjp4TNrM1pNqbFipEsgWhWtFRCo9ct4RPraUyyg4yZby5ct5453r1Fy56G93avRRVZ99qHoiP2GcC4a174QFj",
  "key21": "JpRzphjqPw4dCwvTwNNrrYU3nRv29Y5JwSBdvoqfVoZudtUe5rRV3TzSdg2hGhQKYZ5BSaEUMY9vV28QpTmduX9",
  "key22": "5qTAFKgkhBmHgK1ZRew9rfFALRxs9EsteKfbWmKJcELjAkDgwz8jtT5vCygickrGRtca5VzqfewkU6de1D5PjEAr",
  "key23": "3vAjKJj314tcXLPR5kB7MJtRkCVK2fEyQZuRgfEtUSmDDi3DzEfQtMPRq6ZddeKbQoNabxdVtRJkMSy3wmA4DT2G",
  "key24": "51e6BR3bMd81MjqZy9Jk4scd1vPqAunyGqzVhKD6vqVK3DC9mzMBLUtRvBCCZ1Kf1svUCkr2evbURNbAsDwxezUz",
  "key25": "4T6HGRwpTKxeRg28Jfqbjq9KZpfGWGEtyh82c74bWjBQqoh6R5s5mdvTcHRGAsv5UMRZ7xu2izoXxWnkxjwhzqtz",
  "key26": "3p4QSTgBxPqANzc2dLf29tMRzPpTvAvBmHCxoZEZDJogF31PZ2veHvawAsxhNdwWEfGaDer1RLCumxUKT9f3bj6z",
  "key27": "2o2cnDfW2KR73TdakRwwn4dbP6ZSNYK7vsXJvut8cUxftZJ8CDEEQyY52hhAoHMFP3fSzX7k8gskfD8aSyFAq497",
  "key28": "2KVBzAhMKmQ3eWqis9CsTEctHDitEuNAhTQt6CA6xATgwfnD27zwnbQgFu5uhHHed1vu86YhDLQbBV5ceKZJwCNU",
  "key29": "4DBrZRUwBFhVJErt46Lfgc3ej9qvLUzcQwHZDVxRW1E3WyLiqWmML8mNnJL9U9hWk9NqCPn4k9F4HCL3KVAat25Z",
  "key30": "3MMzkK3xAKzzCN1pRXFefNojQLVGj6EwpMpJDTEe2jpqGMyhe1ryEeUDVzsc6ZGxMyC8kpn7DqAudUDJpSD4fXS6",
  "key31": "4cj2J7XCCupPSbnpeTvQ1PfnWxT5nxNdzavf5CbyAdUtEBuvCCSHTd9Y6bBsSRxMDMtitu7rbUYCKqVEEMKDr3Gz",
  "key32": "4qLxTj986CHjA6dm85M42hTy3bscJWwUhfa6hYqRraERXCqYH3NqQGA4JSoFgFpUGeuDCNvSSrLShAigNVovTo6v",
  "key33": "62CL1PA41Vc5QEV8fSGEtGTxALecUL9JBh2pxEYER8LtgrrW5Db6NG5RjqNSBGCr2LT8Z4yKRfpWqR5buVQWXTxX",
  "key34": "22mZKDQxPesxWL9wjiC4oBPsLtnpiVXepbidRfy4b5FoKkUYMuxgaXieAyqsUR16U4EvkwUbMwGjYiobqDduTddC",
  "key35": "4fXLPziqvy3CX7ZCKGC9zxQxqL1145RBwm1HTRfZ5mUoW2pJKzWM5GgEM3pSiSXBimwaskcDeha9PhUsiN4gtD5v"
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
