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
    "Foh5K8RUc3AsFh1CuQzRvHAywAJfLofmjrJWuB9c7x5h3GzhECBtAGzNcwL5CMGZZQeQBur6Td65EwUG8yVopfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFBMTZ59tR3j9nUHmqEaSgSiZkyFqJzCBk9WUMJmamt3FbMWgR1WZ7FCoCrxjjK5fpNFHgBUnGBw9RWXtTzpmfx",
  "key1": "CEHafR9Gojau2ocrBmpFSMH4ELPoD8nLhL2snJ2GULhQLiThQEEpStHo35qJcmN84zjBNLXYBpHvzpnrcp2VLaD",
  "key2": "56fd1aEgmHSWYukunYZD5Gs98LNXyaogfjLzc2Qee5yePymRpzwAZPcW863m9N31hadowc1kSK3c2sUxJDkpFCD1",
  "key3": "5zhqoqg3LdRfFb8zo3GgV42WWWApjfHWHdYEo1QAhUtT9W65YFYdu5YHkPFuaTBe4rW1ARwGsaoYDHo9k9Fr5uBY",
  "key4": "5VYNHMpLAsxonj7i8R8jSAXi2Y81W4A1iyG2kJrZxMp3NZbVd18992nk6nVAq7qRi6E6syMZYsiQBerF4veJiqhK",
  "key5": "54MfqHHkGukkAs8pH4ivAwaXYV12p7NkP3U2e52iEdsr3C2HAbHBHyxDZQgL8NDceQLKX8YmMCiGW9ktVv6nAbm9",
  "key6": "5fRGRfeJePodMq5Hp8sPMCT53TbNY4SQHtHGqqZSGdMsgLiCM69fjjtFo8LvRfC5jztfmZ6sfi4CQtHrmfxdkh5m",
  "key7": "4R7LHF9hW3vAdU8v2C1r3SsYhxeXFfpkFFjk1ixFqREdbVKtrdo1YGrMNFY2ARpW4Dedobex5p64hmuQuKqezUQ7",
  "key8": "4DZbfZxWmBeizTMGEiBUsYkqSmXkoyqXUFPz8AHkTCYaSghMB7UGMALDWTS4984K3N7ggQ2i6qQusEsY4f7n3x3y",
  "key9": "36AYC3pZhMmRwYsjWbm3eNtDUUnKHmJf7KUKZ9E96ZfkzSouzMrjZiP2FoiKbVm59ozGijj8Ztabo1kazALNB8B7",
  "key10": "RXSNCKdTHzAZnmi8LwSBJcmDDcoYKdGm6BYYrMdH8S9HrCF3GAsomKK1CA5gZxhouVDbgVmQg4FXx3MDvFCR8s2",
  "key11": "2gard2mo6rZCBJMJVvSWwdLVCtYE6D8VyaRyGNN3ANKkfKfZG5hWj4snGq8M46ikb49KxbzvnqvRjWxWHzm2AAhp",
  "key12": "5UYvUqvPBPTATJsQAa8GBuoi6TsDp2bS4jaWA4s3qi4VqkanaenGaqRnBcUQVeg3tcJGNNtPWmbTQWQPSPcPs5i7",
  "key13": "5Sprv7TNi6zY3C6SGBeWDVVxNpfdS2f2E8tQw2SvnFkBF2UWkbvcsQuexGG7HpJAVySLKyuUzcqiaRVxop1nLmzc",
  "key14": "bQ38Dh1A4m82bXpo8sgWG2XoYhseEwvc4i2vT8za3ny27mAN8aoqfxAHJTPHVP74yyfSSBv5sUNj7wnQ3hC5vvs",
  "key15": "4KSd9pvc4fL9CF77MTCuLB9zzkiZM7hXUKnomW5d4KtKaEbpJw1q1vhByTi1xR2EvfAYc11nDYYq1f7N3VHc6JJS",
  "key16": "274V2uEV98zCvhYxSUbHNCmCucHUpAmjqM5uog1s1wFNhofoCNJfs4NWRPXTB195tBfKnUjX3NfrhfXm4jQN1RV6",
  "key17": "2EUKbRiNQ3X1mcYKift4wtiGjQhu8uPStnYMhW3gzmBtpTvWFLAJBnj6ZWCKxjkLhY5ebRQTQGJodzpiHzX64NAX",
  "key18": "4XNAmCsku4bW3TgjChuGJB5Xmcc1PmoWiqCWwoVkpnKqfYqYXsV2rhZpbZ1ittzZ8aQFts6RwiEfH8HDiY9GuABU",
  "key19": "3yAod2EebC34ryqiu28p1pzjUeNbqYpA4AhiYgTuA3shSyWDHQpSRUgZifgHuFx2mqxFLgNHxZysBv7qzRaNcLJ6",
  "key20": "23hZ3ciruThKP7ZjRRVcroXWJyQBrhBJEDgKsUc7G98EXBtZiDrzV3yUYmdNMeJdPFFT7kW2N7TQpPW2iY7L1uYH",
  "key21": "5M6ev1h2RvHjts1qtLygddJJek6SqFpRC3qD1Yh71FcCi6gK72wKkuf1d8vyzjN2sjqAeECM2jA51pHjUpNNfp4k",
  "key22": "3JaqPJFYTqdU5vh56T8LgERjHwXHLsHbaJAJEPJbx5CV4J9orSdKpAmAXjhsxV5mnWacdQm4nchiwiesYqnVASJ9",
  "key23": "4xSQpBK45q4TjbF1PABz8uXvofKx5QohX365rMLUDFfbssREcyCkNuBmdPP2zoDKWBKDs85fFtaZHWog6fJVf5CZ",
  "key24": "3DRmFVxyMWujkDsCUFa2JRmRup3Wqu57uFeoTpVmF2NUEPDXSdVQzVAN4fWbS9LzVtpXQdWxjEjXBWqWgNrqwEK",
  "key25": "E6u89gJ7g5LU9NQbj5e87unr97ocqUajAp1ARhYwpnayCo4nQEAYoWhqyYAWVd7nUjzmYcSxDHuMMHsbTyczWD8",
  "key26": "59GRsyNv8YjLWDWMTA3JYnFE8NJXMJ6LiPbVQLavbgSwBmcndGYAvHuwgdbwDKXrwmaD3HXuErLwoch4neW5fqB3",
  "key27": "2WztLXCz7rNf99sE7u8xtgKjhFAQe5dLiKSrVgGRfcRdokqX1wVoRHtFk84LBi1Y7f6ozmLfdbEPXkpbnuoFYmHw",
  "key28": "2Tn84kGyhZQgt5v28MACTwGYcrFiDGWm6orXkBXZkoAL1RkKr9aqxEHdAjLuyLJE79MxKberDqUmk4XYLJ7DCRdJ",
  "key29": "4mGyZHLYRJatd4J1S2MqYKQLSrY9Xz2EXivZgXEbtt5Sg1KMqWBzmA77trWFKUALcWa6dD1SUeFMVJRAcKeyU2pz",
  "key30": "4CBHB9TVie1Q5ddMbNKtDsJPr5jmpDE1s3ye95jVDgrNwh2XXXRi4PuCBv2vA9dzM626aLM3U4FqNtK4Uof39u8m",
  "key31": "HdFfqDHPYyPKqti8hXwEYEfrjPhvQJZWB56DgDobuJpR8Xjrz7PjvAVak9D5BZDfoBukpzSUvCJLNsumYgj28ze",
  "key32": "oTjLxYGCQWu8WstPvUgx6SHGWdoRRnQVbyhUhgATo3cK6nrg9oLWC6tp1sbM4ZQquBEGwyzpojEDifqm88wjTrk",
  "key33": "64eU1a9kQmJd74XeC5HzXLVzje1Fb3LzybksPC5CYkTmnzaGfzPVy7zX3kVmBa8F2e6P1a9Q8tGJosrSZaucar5K",
  "key34": "4VUVdx6k549aRLvwGkJUjUX27K79V5NFgVqnyW39BpQVYH4AF4Ff12CRGxWfASh9cswQohk4FnommRzmXZ8pFTwS",
  "key35": "2zdkVXzS4QV1joyUD9p7ANbWstRmTUdbAcrGj7ZsvMXLgwyNR1GUd8wnUhQEaHBvW6wcamrfrtnKX4MZixSV5wrn",
  "key36": "2cQ8bypHi6s5jirDmqsHEshxJi9rWnTmHXBZ8PiXFNMErdwWmPkDbj5vRz7bezAXjX8wNPdGJjwfXZmNkZUq2EEQ",
  "key37": "2L5WhdgcaJeP2cNNGcrEe5Ducncz5h8EiKjt2msD5kfwrYzaN6K2qC2Fsy6vCTV5M3BRewXBzDz8dEVzbUM9zWeQ"
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
