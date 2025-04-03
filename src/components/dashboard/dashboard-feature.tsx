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
    "5mzSFFRoBpjtdoMTf3CfshYM8psacPfc3gFEuWcSgbv1xJmrHYgr39nrfKkMTXMvtnD66nrPqA1pcBvABSPA6xrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DcEbJ4QMg2tCGRSLFqK44xnPaTZR5S84KcRykiQq1WvzXQcs6RvWywUaTqRvLD9C7CBfHWTZ2ZGYAV2ghJ9BAc",
  "key1": "4ykv9ZyagZocZpLvEpWsdMiZ1hz7ADQDLnYcJ8mgB4tUqqAYYUcdvJEEVRvjtvQtVoButkjw2QGSfXQbi2DH4XmW",
  "key2": "4tFh8n9aTDT8adkJwV7i7oC6To7uDEgefJTCURZubRzfLXkHTrnRuw9J1YiLiqaJF9vySa3LHq2Fu1WJdGu4TPkB",
  "key3": "5kJuxTNp5iV8BUBbLq7JuZCwhAPBvEwxF7wwGhxQiE6dinXWcnNj89tdujGugzDL9bywL65Bn84sZrzxYrSisgUo",
  "key4": "c5TShkiramgF2M5PekEkv3xwwvnLD2a7HVgMdaSrtf2J8r5qPTzgrNGxdGPgru7voz7PNMFqymjTwETCggW9qMY",
  "key5": "2EC2Wc5koSfUdqfE2r5XEA3XLb5DvkUPgVzFsobshuTK7uqopXdxzUAf7eCRHa6Awd4sivusD15bDBF4JEE3tHH1",
  "key6": "43YAcdukZkM48dy36xLadJFVafisKodQQfMwQTM3Kk9q5FwWx9HBUjY5xaEqaGG76K3qmGn1cA6jtFEzskoxwhU6",
  "key7": "W9L7rcPRkUaq88RmzNhugQzmm6tXq9fMQ8QPmB2FmUkV8bmECr3AroDPYgcnXSy4sENTLTgakU7imPsQnzUyCGp",
  "key8": "31hFXvSvhQxL7xNJYNLg2ioBaurJaVqwQK5GWgXheA8xfJryefbbkxfS9VGeTfY2i4NitwrENdYhnTyUq45tNpRN",
  "key9": "2upYKdXdDE3mbGQUgbKfUVfb9nWiKHq6uF4sHjRPeuesaABKpMoNcoGifTsFTve2k3dX5Y2AvEj8y9e6THYgL7p6",
  "key10": "3DyXihLSHioYMPaTpHyaoSJsb8dXpd6wqvctwZYbw9X8pkFoTCo1Z2cDnmYUceR7vgCBZTAoKGcNEG7RwkSQMqmb",
  "key11": "JyvaETn3ufEKBNpHtE66tZpRv7eXnuoj4GNJVLn8CnwXG5n4dz5Pje7GUscbQzdtyNSGBcyYTfFrqQddgKwLam1",
  "key12": "3hwoq8mzPFBJSbNaMumBLjYFNSkr16UxvnkEvbyAJKWBV125WPaPAzh66uAR7eutUiqTw4rvn9Jb9pVMf8CNekCB",
  "key13": "61cUp3TBJiiu59dhX5SFSFTuPwHdAXCfGVrLYDcsbK2uh1wZugEHmyxS2GvHeo2EqrJEiturecAeNCd4bZCwMPzo",
  "key14": "1iX5BV6o4TQrkggGe9UsX1EjY3R6qohwxpa7YEP31r4dmsCTV7FqQo882Agj5rq1YBk7GnArxfc3LctwEjqXBVQ",
  "key15": "2nEKprypnTXiUVTM9sZYatKJbkjv4FyhCSojsvgEc1FWSPv12NQ6ajk1ChphyQfHUJ9coAn43Rsu174xehEUkZke",
  "key16": "4g5TMmzWHYKaQW2Pt3GGLetsUFNsfF7zh5skLsCZQU1kXj6BvMoUPAyg6B1WNb4Ceb7nMLEQMKjx7BnNQ7FqCqps",
  "key17": "5QAVetwmh7UDTwgbSWBoC6j7E4fiYCX7rC4MQGXrPgesssVus7DffqX1Vhgh6yEyvEfHbaMKTQAgbBo7P3FLK1PS",
  "key18": "nk8KwsA9KGU8tfX2FFo55HLbcSNVhFpXmCCW8svbiHZrP1xuqPxqBMokpVKx3mEHP9R2V9KNzSFiH8SyQiHT7Eu",
  "key19": "nXyrrWW8XRYNaY14i6Vf1zGf7wnP7GyMu7EDo34Hp27Suy36mCEnBiz8fjjyP1CYrjqnrccaKfPqJw3Y9fLJ6TM",
  "key20": "87JAv52xydVt3Asj3mmheyF95STbSGLrdWuWADR4xBea9NUuAjgbm3KwcLytWEP5n9oYAP1ywUghm9UprtdTspZ",
  "key21": "5gTZo1ojLrzdGtgT4PcGQNABwrnXkYgb98rdRRJ7its4AA1hRdRB11G1uzEkbcuo4AtnhyYZXicY3QDX2k8QLfg8",
  "key22": "59eqFxGv5gah9watfZtSnAEUHtPXwhAQ1JTtkJDHUzHGCF4VM4yHjxtueB75N1cmcj5dMmN1qGwMYLF4rekoeeF",
  "key23": "KCsFmSimCFBBEfSU74c8U1TxUXqBq4nY3yWs9uzGR5bSQ9N11ZbQBKDTvw76SA9VNBV3qZQVzjSPuRQRNRfmrd8",
  "key24": "5Rb8E7wkTvVLAuedc4oFdXtG7NeqYcx5Qi7ywBfRXgRgEiW61tSqnDsimimCHUqUteZJjq1K1dM8MTW9dATqYtin",
  "key25": "2VejXhmio1V5swLVBcnBX8RkWA5zmbcs3ecq7oM3c7HfpWp6NgMaHMvALUGLP3xUcFgG4VET9HF2WLBxS5Xiv6ur",
  "key26": "33aNzojqAKAGjV6MXwxPq85YJc3EaZgnaMNxrnsfaeVsvrp3q2fBNpJd6czX45NTgvKfV7mR183eUeTJKuJoB6jV",
  "key27": "4KhsmWrUai2XLrt1KFLzTh2DJ5cNPArb1pXpG9b5bJ5s14C44prc9da61vkTF1McQCtwdt5ezKBgqhmWCG3JvJdK",
  "key28": "22MKkHgkzUoz7oPh49borP2BUxQioDTzh6T2nrDtyYgbPWEfJ1Yjx6wgy8rhFeWEYYjsn4S3S34928i2XX96SdJ8",
  "key29": "H8rvWnijhZgXuTZ7JAvM9eipHU1ntrrRALeJ3yHDgoF5qSMUjMRCTeRYW5bdtk8XxMWz66TFvTDSY7R9RbQ8eU8",
  "key30": "4gFXWvccjk1EuMzztthoDweymCkXiRssPWL7H1eHB2TYm5nzYh9KUricSQeoEMSV8LuFD7A6wZ27gXo3fNe9SEyg"
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
