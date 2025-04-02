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
    "hnJWzdUYjKbZhscZGrphzqnsAqmgVBF6STvh32GNaQaVBmEsEUDxr9n3DkxzhGaeCcTgg4gKjMLxh5btvbMazrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bVXcAfvLM7YaBFZ2EkPexghBFoeUrLtTTRspj2mh9wCimLFgeukMMVaa9ZSpxbS1eyHDTVj6prsqmFGDykBkjc",
  "key1": "2LYbDux59PMPqQaEsiV5MThEuAqGAr9fw46yFM7V4sEmWUkNJn4edUyw9Q1dY9NhY5w9es4HACcgXXRZA79aRut3",
  "key2": "3zyhBnHerbmFYQqa6UQGJGPNY4V4QKgbm7oJUctT2KFEBanShKS5QuJEypfTXdViD9VHUQbxT9rp62mCd4iEgmnH",
  "key3": "66rikWLk6T3hJbv1EbKY8ZL3KGjtwQp2tf7zChTuTmziZ29tgXFZefkHoPeTGQrwQKexXAqgG5ZJg6tBg5buXiWs",
  "key4": "51ZN9xPp3XgSJQMfSe2RAhGZPVKBDFjEBnja8Cj91X5M7REGbSnNZrtJqrp3WCWLZzBtwPrWQdm8XD74ntsws1BK",
  "key5": "7wR84pjLEnQUczmyQRDkzpi4bTXBwRXVcmP6Nx3rKY2BuU1Kob7vNb43ngJxKCMukckpRoxmP4W1Wwi1zPqKpPz",
  "key6": "5V5YKJh1Qidpkymygb5HaUwQkknoEphhy7epAxwdzbBZNXMhutLepfLtX57nJFXEgXfHp7sT3UGm3eojUvC6F8QU",
  "key7": "xNTr4qiSnh9aESEmeYw64ArF7ADegorxAMWZHqjPEW2FeybvxXHg4hDK81xvjUtUV6YFzWSbomAmBmeZkptvp4s",
  "key8": "584TqwKhY1yTNcQ3So3ZcbopCS8tfNQfscjqzmsoy79NMTA5Q5ZTqDyE9h5eMxaTQB1M5gYhiMFuFj9GQ3T2676J",
  "key9": "5jEjUqRX9Se95CF5NQvveCyQfyLH93RTBeY7xebpQr7hTK57CH91rxCr5qH8qyFxeTaYYvotiBSVJPMCp3jiRCtq",
  "key10": "3caFK7DHz9c2dGKKf9CtLXxSfAs7GQ1YWtRPWi2T9SiqBM2XcmxUxWcNEb6FZpHwAtF7Kdyr6oZe7Ek1f78ED9b4",
  "key11": "2XxH2YHkuLvPUwvxUsyjszrAvzZbM8CAudFNmNDdGjmrG6QyG5617YsNsDNZyuPkRJnMRXZXxnvF2pNtDG6DLFVL",
  "key12": "5wK6b4HuVyrpBZqG81aBuBprMVc9w5TPW2YHvP69iSfqY4N9JFb3A8Fb5nFWSRZsnZQJHdX8njiXzYTNoyTc43Fv",
  "key13": "EfpjWerUfs5izjVdZ3EZW5JDKigzkshfvayCaEEvSz7mATqVKeQgGEZbzmR4peRTc6tt4j7auShHz3WMHD7TrzM",
  "key14": "4uqNbHo4T9BLbkuXyekepVnNPVKvTj9LMAwvVKziF76nQtpo8X2if9pErhM69GZRmMx1Gp27xUGmAH1xnssV8eDC",
  "key15": "5okbjVJUatNjTrQuyL2NXVXn3tSv3qgrAqmLv1HUyCdpeYGZh96YndFh34HYt658FybMJb2ZrtSvX3AsfKeJG7M4",
  "key16": "56VQMJW6bso4RRdhNtgLZmCc87D8dgyY8aTUJx6BrV6kcwjaLSKzw6pzcPojY5bHh3cQZxrJLZEMarSgpvGBFZAj",
  "key17": "2EAZctSKbNZc28TjPXa5zARYWn64iJ5etjwHJsD7sVsuWrSfywiMqcfuTsym2BweTd9chb38uf8ddVb21zsBVD7U",
  "key18": "4rNTAR4WVkN7LBJuLTwfbhh7LMt9Dw11zP9jcsLZUqVG8MxpggQrfYCDj8ubWmhJK2fnUtZWVqpAe1oQzpLhYoHh",
  "key19": "3fRawjXTpeNaY7wmRwiABczBn4PQrF9zgWNXKxWGA7Lrv9JZcLYhUHxLtuKekdb46MrzbkSYGKEDgz4oNuf3ZFUb",
  "key20": "S4FSgMh1YmysHKstwtoazipswyTMLtSJxcHvG4EVnFgwV57umUfwHQPtJeQv4Wc2QB7oRUuQNncdMMzt777WzGH",
  "key21": "3F9unYdsfk6874mVNyG1FRNHGUbp1htw2nE8s5AUGKj5qpJdymiS9kEuU3EqmqYVm5eokkNdPmiDqPTxhHNXWWsE",
  "key22": "3c8QCMGCfhpeSt2m3N1Nyut5Uq7mG4JKSqpSfqphYdWoqaACaAFRM5f4YjDYdveNx7eU23r3RzQUSGB2or4hVtMT",
  "key23": "3QDNSwEqgUJYqjrSBCMUZHdFxanebh9znFxxWRBKJXoWTqz3vyYqa4V9Pe5vJpE4KsGnnkhJWhHwopxNDzHfEFKW",
  "key24": "3WKNVzGC1YUwfHGMqh7QSpEKbtVtmyddjTQqbShaGD7A7qpXQMmBvu9GihcCpUPD6KYiA1VGJjFPbAqtcFow9hus",
  "key25": "54uT15YxXEBDsC23htN7bKpYZ2BwfjNn34Q1FyuX3hQqCb1JdBFCQ2jZ7zQhJpVjQopKD4Pk66eacXQ2U3Qpvc3g",
  "key26": "3cKbP6z7Q6MMYRyq2DzdPFUTJ9yGdVFg4VC92NKG8uyHcjQTpsU8Hu4xAwzf6rUyxKjJyGGuwxi65ogzE5gmLw7i",
  "key27": "2f9H6poqLojtQeSBLMuRLccuyDsiivnfbCdPZELT5AhXRiadkKk6te8dyCFuAq5n1jDpDExowDQSnjHetWLUJrzX",
  "key28": "5u9n7RkWPvozfRrrMpQC3cy5Ve8WazETqsGXVge4qYUcH8faEEULgydDn577GPV2QLWxpbWDfsEB1kDqyQyHeBE6",
  "key29": "sj2hCP3d2xz4Eh7AnuGwPipuFejw26bcK25E8TuwCUWZ14aRAtedrKtRncsy2SyFTrCZaoh8hf7XgddfKmimZvR",
  "key30": "LjEeYp6N76kjjSQu1N9dBRGKKAxRdpHdN1FPhxAH8t8JmjSos1BAEY7StFacZLwUK7YDL8MUVEdnBrMGarYNhQW",
  "key31": "66FjJWqies9AkjQMCVzWxVErXgZVenLuFqR7XpwiH8yhEEzRCtzQHa9VubcynPYyeY8DMw6cFiziuvSkvL7nQD45",
  "key32": "4YGCnmzJi5Gx8awwRoHq6FvVhFSkth3JWe3L1FvLBDNcRa7bgdEb4uDUtzuo3WBTshJBWkQ479mycgTbEDQTFHBS",
  "key33": "31BtEA9djSov1F77HoANs3rRCkcgdwctsxWsbPho9YsALAiENrXRTC95H7e5i3X1c5okB1jjzmpNiL4Azr9epA6o",
  "key34": "4UTyLimesAPfq8ZfUdLYmRczZ5UMfbKTTSthP7ogm9A5ZJDpjim3enUiKP9ya683EzExJppRAr68eCHKHevXGziA",
  "key35": "2d7V6Vt48cyBDthmJqpjsP5QfhRUVw765W832DHEvKjtn2uUT8GHNV6FfLVSnYaTuQZdqT8ChhZkYcgJnKBY4PXy",
  "key36": "2aFayAzhPxyTYSkhNbJ26rKxrbbtuwtbKoyXp7QYwUZ3t1vph4Cw83eoRE12gQP9fxE487mWJtW33y7zgMydgNMN",
  "key37": "2g2EoQZxuNPszRRBpXbNZpn2tuWfagrFn3vJYtnZo7Pr1xJMMzcwXwcgNStMUtv2UroYjfqLgbR1KiUN11PPjcG7",
  "key38": "3Qxu64ipM31NeoP4bk2uhbpVyqWMWyxcVwYumcnynid8iWmq2YESZvZ4bejeRqRa8eLe1tNa64YB6KGKSVFzfYVh",
  "key39": "4DbatMoRpUs5KHcAwEefC9PPTMWHLgxTHD65jaWTbMg2DuxTVxHkwBs9kMKmucf5u14qJyjJZYoPadUujRch9oDk",
  "key40": "5rh1eMGzhQzrtbGb13d2zHXcgR8NThjaKnu6yJuV6fRXecyhzBFgVnNKZG8DeAC3WS17PL1BzSed7VCZuLAeUYKi"
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
