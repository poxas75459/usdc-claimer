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
    "4RAJir1fBpdHYMHUVR99159kgwkkaJcdL8R1e24ZTL12za2hCMt6GpMPAGTDPw16EQrHmHmBo2YtvcrBEeZGxTg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrYewGoSrgocmtMjoGDnmmBH6yLJt4fEDKHgufhccyz1rwXE7xxJwVpz4ZgQxhxvQr4ffdpyH7eReu7XZTDrCQR",
  "key1": "45x4Ke2pGdcoQVpMTXNmEd8HAtaAvYAAXxiSZZzyeRaKSUJLQEfA7mgkb72Wu2WkTEawQMiozr8uNUwhzjB2eC79",
  "key2": "3eWJPhGVGEa33ip2zbxrczXrH4rUd5X2PT5DeSkDfmiBs2hFPYoGMJEScXHMcL9JS6JU1DVoJ3Ye3RdNdDosm7xY",
  "key3": "4wv3RtPtgM899yB6tR3GWGyTjcYjJCQRmFouBopxmPMXYnkbYBWgWcsBMzPMQq7goXvRrGsQjqc6CArbWAwKnXAg",
  "key4": "4w4HriSaX2BWwBavcBr3TWsFKYptDbMFXqdiNU32DSQMxhkd9Fwn1gKXU95ySX4TugHitXCZcTu8ePgSyrLP4nC9",
  "key5": "4gjis1498MWFi1gNJZZ8q3j2c9E49DWDjhL87ciTvv8Juu1L6temvGbHkn8GA8GNFaH1KjKPxzy4xUSpKnVvB1Pq",
  "key6": "4j1a4Zr1GcShC5NkJFiYXynFzw4a92SdZZ1ajzVpiHJPH5Lcj6BrgCUtoQPizTHd9EKWzyKbjknc6mKuRszQctqq",
  "key7": "4sSn9W7V3g6BYsXQbE9Q9mANQDdAUnGsiCjK5bhprRdTa4n9uKYCJDbyPWUJTkB5UaMskWX5i3JZetHZhAhn1v6x",
  "key8": "5DcgrcwQZFmCSuX1dNFsr6vsKt7g4Xo5TyfhdD8S76STh7FWmyKha4dCDn4MBqiig4R159UwFsa9tFcP5V7YjYfq",
  "key9": "3YefX1DSgk5JhEon7o8DCfRDMC46h7r63NM2ePdPPYX9oaFXG3CM3t93LefUVFbqGnBwiizr5zfoy6w9RWgNuUBA",
  "key10": "wWgEbvyYkiMXoNk4YXzkp1Q17oqxPFbMGfM6CzfkdutFckUwUNBdphWYx5Ckq9NWrzskYa985Qqjzt4E5Zr2Nae",
  "key11": "5zweWf1YMQtaxH76fxXqxVbrXJsrPK1fUdr9UqcbpPHPjnhmaYpx55Cb5aAJf9Zb1qJe8Wat2dyn8XHWcKkcCHbq",
  "key12": "4Sytg1T94P2cuYKu6J5BvfdmCJaBfFLbS65mbA67cNH8Vb3jS7ijcfBfZ3ZoPmg7RwiAeeJJdLyN4K5E5nB3rpPH",
  "key13": "agR7i113tZc1Ks2bFSKPwmMDZffXGCEsti4LNjoTBCwQuhabn8z3UYNmQ7RFmqL3Z2Qfm2YdobGmZYuc4KtZa5V",
  "key14": "5BWurW5qKFrcS24uL23sdZ5FUqvgHtC3ZA88vQVG8czpu4E2ZVgxMLinDo3ZjNvacoCPx5ZyPWNjtZiGHeMT1dbq",
  "key15": "5nf9NH8vVkwQFdARcTfM4JfLj3kB39ThS23Fesw2RK3HnSUh1oTMxAb3qNHskSq2dMi5XG78efjre1PNKvudtyY2",
  "key16": "4ZZh7zG5E6f7wDtuiJB57UySxcsMx5URaKaKgQLZmPb8EoaHvLKf89DtB4vxKAuU9WwwQyupXjpMMv8c84QKzxse",
  "key17": "4i4UZ8LLW9LwA7oqBzz54zrLRXVejLjHbyf4WGfmVYqyi2vPL5DX4axhV8FUBnzutQHvnWy6ef6eHYDKH1kQAqoQ",
  "key18": "4K2ovzR5XZH54DgVv1JPXpQm8NHq6dvTNtTsYT9GQb571Q1Bwkg99BM1j9UDj6EpnuLyBJts8ihir87yCBsbYNQp",
  "key19": "2nj5VGDdjUdzgApK7BL1KftvHyFwh9BBNsmJzQGfoAAPrXWMoCYiQhCTFvKMBhFn8x9qbvdRsxhmcZqPWC5rGXoK",
  "key20": "3e6qNKSMJSjZ3SD8QmFuyohugHAwZDwXt9oCxWMuHwz8VmRLDeqSY99MFn9NZWy3NrjXWdnp2HeJjzjaaFWbQ82P",
  "key21": "4HtdvBXu8TFtQ4G6JsHzTa6PJS2fS2EG1jdxpDjTaJjE4xytub6rj8bVQa15oNsj4k8VhHhE3muEKfWtcgMZuujA",
  "key22": "4gxAgbFY9Tg5whjUCcuL6dEnEcZsvVjhVt6jcJdeFCsGyPg99Jp6pKeYDFQEJf3CR72TbJTWzRMbeCvHpEiyVHER",
  "key23": "5Fa5yVVyevoabAS4SaJKWkDSco53wFRnVkpRSQQ2AeF6GxqFAApergB9YAGkdPpsXvyJ3ZgNyUGazse3BQHbquje",
  "key24": "4YjyAjjiZk9GqRmfAFSPovFD1kjqr56pvkoUyKQd2bT7uVcqBzwApcw9j6pAAf6xx9uHAYw5QSQu4SNdEFGL7kF1",
  "key25": "67ShVYXj4SLsTDXMHHpYoEA4Z6nZgFFf4uhALtyXd8H9oxtrKab1AxTqjYu4FgkZagwBX4ZQKHyGSkAMtcFE8zuv",
  "key26": "5gxfKEarAEySc1PqWZgr6xAafZJiV5HjVocDYoW4e9mL64cxaND1WKehwRsgHcgjcRvaweBkxLZSqgLwRvLwfmgw"
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
