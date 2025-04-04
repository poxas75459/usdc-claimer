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
    "4ArUnZNBryrAzGPp4NZgMEXTAgioHDpCbf2yLYPNtVxCZt8sjzyFNL9USET7s5f3DBoRJw81ekoCcAwn9WrMPCaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22D5YHHwizkrk5JFTqDNxTTZQgvReN7gCokEv969s3YrFC8qtp7JexwKoST4mxAgS6QJGdcmBkgG9KQJT45aL3PM",
  "key1": "2tetSbb6H2WSjzdZitKDJHTue3jg97cspLi8CQ2AvZwP6oX2ymGzkntMEqJc189dmoChe1SaJFfWaiWsn4mcfnoq",
  "key2": "41zZeLm8n9duN9EzLx4S7JuKAP2WVqZz38aqxtSYe7zAhqYGJmxA7umVSE8VRN2YXCEZQjd52aTnoP38SL1rgGwC",
  "key3": "2hrYe7K9vyqR4wUs3yPB52bpbj8NofuAsDccDhyD76SntxrbLhghEN9BWTrgNLNVWWqagFGUZ2Bh3Tse4S5fTcga",
  "key4": "5oz6xJyEuF9CFhPhWd4R8zVYJsRxsxAu1K25emo2tM7bfwX3Bz6RELY7SrN4qmQVEgnmX6LwHiQHqVnXEQFqiBj2",
  "key5": "49mkSXPEpDLWn6eY3xMh33Jcj2F4YTcc8tm6i5o9whqKF56AWzGofWHvGApMNmoPvkpt7xuaZdKUf1BjmLxjVteb",
  "key6": "3HFCaKprMfLXbJiJLopYKwQManyAABGTx7fPE29rmBMgGPqv36VABVRbmojq7UeLfE2mfHW1hLrXe1dZKZkxDDKq",
  "key7": "y95Fi1ZiY4KDEp3Gmq9ouwMAc8yg7VUk9h149nQTNMDKmbLxSbpRfjecyFNdQoBuYL4jG82c5rVJdNJieWqaRXe",
  "key8": "3DNTu8jB5NqmT3S5VUFCoeeeCQwcvbDR2cLeDXXQXxizFVVPDzHqyFbhCie8RKBC8YhGHRwL4v1aQamtd8C2L7RM",
  "key9": "jDKCTQ8vMMzBgdQE9Ufk4VvwK5bKNc8MYoAtnKCXPBCwjCQrVV5XEDdua3PFjwR4hfXRWaTXjs1YF1H55yemhyB",
  "key10": "3zMTfD4X2Amb711ZMVygcbvV1Ha1t4DVFkY6D2Mu99QPghE6Q6KGX7etoBJgyosP2dyPNMr6YNdKhUuqs54tFcuv",
  "key11": "4vT3XXqzWZVz6VdRJgCLjYmWV1umDDnSxqbRTxEtpxf9YukvY8AJFQPe9SB4zmiY6tLDtVQ361pUARPg58wLm2VK",
  "key12": "4v8dGtLo43ms4QYNrChrVwdiRYCFVP9mu1B3FrKnNRYLy4EKMxruBfYZvqynptV1fdJGQSgpa2HFd21VhisBHFG2",
  "key13": "3bCYbW79Kj4fc4cJ1txpiJj4Xn8jvoLusAD8nJVGEnexxG3VQD3NARRf29ZkJVqet3teSFadBme1ervR69hW4aAH",
  "key14": "3ALiTKiVvDVQtbGvdH4ntDFcAQVBdyDCLPqzqrBnJMKyvLSHqAtmqvBqchhYJ3gz1DnB8LrjMwwk9d1TzuTEkt8H",
  "key15": "2GQZEuNG1iWDUmR3vNtC39UP2SCEg8a46BBMrscHKrYr5GVYMANEUDKpYns3iwZQrGUkQ1mQcpMLKUgL1pJdcbgF",
  "key16": "3TwQ4odWaFksHSwJFka1mqR9pqvWGKZPFUg2QTF8DUgXrgrWaQwyaFcMVGsAgUp3ZRQU9aH76A6gZssJ48eqZntj",
  "key17": "2kDo66aJuSBNqFAKAcnokB3e7pw3eAKnt9zSV2jyLNjJbuLW1X6AmMMSuDjg14YBJSZLFkvzY55wMqjK1t3tD7CB",
  "key18": "4eQQLoz73MLSpGiJxZRrxUMMP9R1fxpPrSxioANBQ9MLBMzT5JKKu9TjuKTGeA4qjSmWfQWDhQMHLyg8XzhGNmWh",
  "key19": "34VmvMZtPiK8r5N8UP38eqN4Mv1QctbcQjY4pd2Z5FpbA2daBryzwXi4VQxbVXVWh581CyPCdsGNaim8M8SZ7rx6",
  "key20": "4vKEccZ7nCsrQGhz7HySxA8PX2KnYqx2HPJMwbchYZhnKkwuXg2cS8WcBCp1FkScESz1D8VUfsYkrnFrugK42jU8",
  "key21": "4geFvuCjRcfvviynDq7U3dK3oNZFxKukwqdgShPqv6Hu1Sj7q9NZapWpmnpuMFAtDmUqXohyVAauzB3GvgJ9nRKG",
  "key22": "2gkSa32Jcnkv76JQq81JrLW6qbyGsPN1nQDyvU86FvEfKN5wPVT32irE5utBhK8vxa7Cf92DGEX9UEGMqByiB9Q7",
  "key23": "2Vf5jCXsc2QkgKfKcS5EG5dUDaGYpmUD2XHnSbDVoF4pKWMUWfUxDnmcwjNjPdf4Xt9EB7yZom4ysf6m3VNnxD4m",
  "key24": "pgCqGeWHhA56jH8bzApQQvo8b8E8gG4c8J8zbiFAYDLp2RZZy5BXsHPr592KYJCwo7qHM2vUvEKkrfvb3t6Q7rT",
  "key25": "2MaJ6T2X6hqhqnbLMgLceRnTPB6ZJdFpPjMj4eLNnRQkp8MzJ7aC2R7TsbUc1QVgyxXEWaEipcsZmqcxQcRDiEHF",
  "key26": "wSwN2fTcRvNz91JYzTTcJE74wxLyF4iNovYFgsXpFXieJW89gA2nDp2wj7N5FPEsYeoEEsbiKuAibcKXSt8ejGB",
  "key27": "5EZUXCBh1gmNHsm5B8hQuBW8CujxRpanpoqdav36wvYHJzs8w9HXwF8u588r5mJHgoMcDGhtimgsTaMPMutuP4K9",
  "key28": "4UxXH8BFTbtXB5g9A6yeGmVx4EBPGW84m6rn5hejcwnyjUNZXfckgcrTbeSg9b4kREqUDyWpvKnBssA1QPktSvbN",
  "key29": "3ZWusBKH7QjNTta4z1wbbg3UrZe4ESvDcvasMigphDNnLikCneMxpiRebnh2VJWsbcEvEKqyYUVVv1nqe8SGUaBo",
  "key30": "2oJawnQGMG3sP1V7X1CLXKfdvMp4txbcu7P6eLVsGkM44tALbzQCag8L6ha8afKR4pykD4VwQTxVrmBxfAQDzswS",
  "key31": "4Tr5Cub3hz4Jfso9JtbFr3CcLSoxXsC4SPEPL73Wc5RwU6wBhxfFBLgvMjHJaX5vPDXfR1kjkohFrDHEK5PFx1G2",
  "key32": "TLxbPirRG79RKUWTQXKjPY7cQ8Sfx9TV1dwYBxQoF3XnEwNdLyLu2kGsTbUjPZAKrK12g4LKqRYUiXa7vncrbXU",
  "key33": "2z7SCw5M7VgYnqC2LsbVMHfEZh2jVfmjCDrVc4gaPthQYSc2cRTyffGLfpCXw1qKk2Xts36VAaQqSRcu1V2XWo2i",
  "key34": "51nsffckNCxZjVNPFc6TKbJG9kQuGr58VGjzDCbFagXqUeYRF2P1j3UtRuaCEWTFP9SenK8GQzZzfpH2niysafQW",
  "key35": "5nTwFrvfRr9ixG7WH3BdHmREbFH1LB7AmQUvk5WeUDGNYG7g4NuC5esemrK8ugU61wnDPx7bo4rtEb8oL3cJSeiX",
  "key36": "43nfrdrEsryqrxPCG3G29LMVMuCaKNi4c7hbDqw3wqwkzH7Mrz2DYT3HqqPRTW3Tq2yUcXr7ys6knY8MhURLPTCG",
  "key37": "onaB1sjtNFxbfDnM6DtPDn677fcbMocyZCA5ARTskLi7jersLoi7go8bqBcuyrxpQ1hxpg1aejszvLmoHLLK8uy",
  "key38": "3xWArtBWwia2bmpkwfCDHNbVLfaAVFh2UGKo6qaZUzsMGAREjg85AhRKoFWgELjzrzWH8pVUR2MBRqkgPxc5XU69",
  "key39": "3qHsrGWuDRqn4EzkYmJT53x4S7w7RDyWHvbQgAZNZqLGtvtJfzx8N2dS3ijHnbKmEfnxXX6ZoMzLhMrw6hmAnBjn"
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
