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
    "51Xmj6BELZbMfHhxb5B9paxH3NbAr9Y6wR2Hhj7r7obHVhbkuuVr2ysogjTSHozdwEotjUDcjtiDGDp4Mwi8e9V1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7z1Fz6vbqjBXJHGJKdUfWyxwFJixsqY6GeFvFXHLrxMq2A9ivdvHz9yuXgBzyBZpipR74AGf2oprjpQ3Wz55MV",
  "key1": "2mF55q76Zuokzpbvey3WttW2ZqPMJdmvyjTXWpxyfLcMR1nZGaTJvUZd3cW92GY5YN5u3tNdcCLCpCGZwftEpvvu",
  "key2": "5rSQbWj2QAryuhjsnHvGbePbJvH4DVm82xfbueevzWdeNFP884rXPaw8TQdtFtrMpZg8x3No12GV4L4B7MxfHRcp",
  "key3": "31Xp7Dgx1AWbi8WjrxPz1jwWhKVD7LtqxKoR1fW3jN3zEkUA1VUMpCbBzpxbvTadu1UUKgWngW94QCd7UqmLviBG",
  "key4": "56Vub31URTPMo7P5WfqEkcCNtzeaXZA9LYZ2XqjqcNAGEEv7g5WhvNoy1LL8zEXT7qw3wv2iido1CeJpJJLdCfLX",
  "key5": "3NfecCd7xkrxqk8tcPgG2t3sSeMuy8Hmru7LTk5TNgPupjUSCvqYHzG9YP4ji5Mx3cdoqDuZHrecnpjrDymNVyqJ",
  "key6": "5Ujunx372CcWPyvswb6pg9DL6Lbr3YqWzDmdK1EXQ9Z9GNSbyREaNdjziABvkpMe44i6qqCMx1SRkhngu8BAPQuS",
  "key7": "3FRHzshuLaWjf4eVkNJzDMxuoPjLUsN7Nfe1cfaAbhG7tYhtuMdDDhCQYokF3y4MS7Xa8gZqqxX5oE4wXDT714m8",
  "key8": "kbYZdzKPL6t56CEoKSQTJYiu2mRoQREL46AwjVJGHvXcCQmr1DfJcUY14fvzFhLrV7cDYm6WAYSPiRdfsivm8b2",
  "key9": "4q2x5Xq3AgVz4wZJpmEPb4pyLZW5MRUzpGDKBiySecBMujyLjQn6FgDjCVGMT2FVcTaxGpJFcZBWALiRtndHqMHY",
  "key10": "2du6Lw9njy4eHdTqMWmDEhFVcsTfFw33J1zQt3HbqNR3ton1Fjq9YWSRS4souMxdA15rd3G1BzCuBEKq6e8GSwfU",
  "key11": "3j67zdELwfkyTrDU7H8Epq7uhaMr9mNtf45Gue8b58hEie8oaoue1ewbv7YdrZ3pnckojh5cuHYRVFT9HpfwZiiP",
  "key12": "nChqAX1LwHpYNymb5KBnHyQqarynT12uLdqJWXtitDjAhbqfokkQ6UFRA5Wo6bAQ2RNEpZv49DuJcdTSEYggvWa",
  "key13": "2Hd6zuQMAGCda397FfFVktBeWMhEaukB1XdTV74M5v2m117k6wVhUtrKjC6ppGWMvw5KAmTphQyrsfW7xiMAZrsT",
  "key14": "5QeZVGmiPc23oSYZWFyifERrzuJV7qCZ6hchj1awtfWG5kJowfnn4SUmNet12CwLHMzgFDE3TfneeiSTCCknVmiJ",
  "key15": "3C6yPzBdCNWmYMwpFF7NgG7uw9n7tDRtcs2qGjPi8mJ6NvK5ApBbT1S8NtsgacvodkrUkJc5rwAJC26wATBfAAUd",
  "key16": "2upUDTKtPJngQ75xFWVwJT2m7gbi97sfjuFvG6mdZqRjvg2VSbTeSLUgogVe21PD7xdehp6nwvZYNX75kQfbqXBk",
  "key17": "3qCEiussNq4mpdawRGVUYqSdZJD3PMRcbLxUPHMMWiHpvT13kDaBfjXyY5LFWGytY2Gk86ZWdtHyn7GzdPS2jHmR",
  "key18": "2EXf37b5AN8L2cHE856jCq1irStFYcVMamrM27rnTk5qHNSpeCVvA8Zbh3DbzFSRYGswhKFgDqVv8TcsKcRyTG7n",
  "key19": "2s8CDbRUZuk2FzYkgpqDzTTz9L8vd59XDaNBD7qd8HxPGq1KuVMAg7agsGxo5TvXpg1ELM1mkfFLwqMEbr2bJRNf",
  "key20": "65reyXSwmiLMqh7onp1hzrMRNvEB1QrGkmwwAXhp7X58aueQjtVvBydGPqM3sr1Sv2vCsirLAr93j4AWHevRUByo",
  "key21": "38m7UT6oK367j2yypS5exmG4XJhbgSTrvtKmVoob9yrNz29CwiEjRe1ynwc8AtTdMZLYHeG6DnFqxevXMF4eYgVZ",
  "key22": "4sNDpSgNRAu4RQ2We5hsp9PtiDtpLU29WpoVE6SLQih2aRiTbECRfp7FHMyMnsDZSbEcSaXsK7WjJro5C1DPtYLq",
  "key23": "43Hqc5EA6JXtkpSLiNB9VyKq1ZHM314AEaUb8HN9C15kcRgYDk1Z21a1RRtErf9ro6ZJFdAg84zU1NKZ4fCB4eeU",
  "key24": "2Hkjt2sW8WopjuotRX2WmtWjevZQW187EaNNoZ7k2cKuecdWqMKMgrVJF47j9yLhjmBx4wKNcMkxEti5AkyV1BA",
  "key25": "9vJztNTPbkHtLf3VPNofw95Aq5ZG1akmGnxwyipieVya6k3ZKGpD6NzaFkYo5oJ8amgvtvCMjALLyQabmX9HSmQ",
  "key26": "4FDP9cJTQHb6GXn27VZpsYYgcukDxLiU6MDeuboXGURPUtzXhaGbPNhE2xMzbdWbT92aeobaZf4QdbcDhAcAEF6W",
  "key27": "3tH1gE8tXn3BJT5sw3GdNaAHwPdNMhBzLvAFyNNqDxBbifZj8MQx5td8gRRfNLRmbXJ1Nwjw8mAMBFWyM3x5y4uq",
  "key28": "2hRaW2NNDhgUKYZtEHDwWRJ6BGPvqQsiNQAdVYSC1iRDgH1xasVL61Tuj1Pdb99P6BEdMQk4n1xXq7XqfCzgdhvC",
  "key29": "3diwqUPWHJJidaWs5nMakTnFwX1SY6abnouPS2VsMuX7D7m6gggJgv88o9iiWMjhKMiNsVd6qa2hL1nxSwGqrJYn",
  "key30": "5BeJiNTmtTTwFDdewYTShByc9nV84jmYUHW9nbJXqhH3chMmSV3D2SW6mmeJWh4m6jMo9H73GKsVGHRTn3Gt1axV",
  "key31": "4WE1HrQwwkwMbnwFN7RgdHfE3wKbh3S3Ms6vhqHRBehZGFPz58UoeLL85CiBm4SERGao5NVaLRGvcA4Waef4xGvw",
  "key32": "49Y3EWLYGD3DmwtP4iW3STdHpEjafHbpbt7PR1kBttXzX8wJMs7Vq8SfexyzKisMHQryK7SWBFMGsqKAvcjt82yH"
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
