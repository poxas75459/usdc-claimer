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
    "2gTFEE5LHc2h2ZKxhyiewG12uqVKLYZt5sCFFMNxFP57gVLdmj8ipRb7aZhf3A4FzC7dEwNQL4JFzPCgXs1X6ff4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GqYM3o5Y8z3vwYKWDCbN5xJz7UpLXKbdt5fRpBXcdCKdnKMVGTySp19Bd34TPpTSGuLTu8cW67nEMLV4rqLiD84",
  "key1": "2xghwVhQpm9xj4ozkYnwsMduUpfLEe4dMEZemHyYPBDtb1w3mwfeut5RxaRCDRE4pZYYUj5cnmTr276cQ3WDmMme",
  "key2": "4JRaEcGCvyWudVbPcXsT44UaxgZEnUf3LMKT8UaR9N6Jny3Wcr1anZ8zAWMXMu3jZ3pzCpoDJaUDo1Pj8Y99Y93d",
  "key3": "4WfBqtdf5Sg32e4oDnqbrheZNqg5LiycU9icQdZTPmTPKEuYLWcYvBFKUPWY71t8cf8RxYagDB5XQEECx7unsYjj",
  "key4": "3x6EdAWPjs6rE2JqobtfB2qhDo6E6HTP7BVDiwsYHxovjD2q8AzXY5wYcwmuzZkiBy2TYXMXm2ajcsmjMvBCyYAS",
  "key5": "5iXeXay3Xy6gVaJdH1MauJWFB1wzF6EfE6KnQtJ4k6PdUwpY2iGDR8mjKmwhhMHHDEVEKWfbriZBqcjzAthEo5Lt",
  "key6": "3KSB7MmyXVyam4Fu4sMLUfr1GsZYSQqzaUCLeSbjr9CyCFc9YjtWGx6KhwUYMeJrtKubKU4wbhnee8od1M3urKpe",
  "key7": "3rbbmUNSjgJZUC5vmMUepYfwvtyHEUUKX4iyA8jWSJ29KnNtE5qaoxdErUhUGKDLdchUV1Y8MxxrS34ogahY4zvx",
  "key8": "42WFDLzRTFq56ZBe2ta9kuM2P5KJYR6TT1jL1t2omeYqp2FK1agPppJggwxq3m4ns5Bm3bjkEiusQE15Lzhe3j9F",
  "key9": "3YEvtaUtjvLgG9HuLUTE6RNaiQ9bCC1rKGMvtZwVVnSTdzP2GVBoEQwiN6o1eqijvdMKymsa9irWcDXnUhrmCXtz",
  "key10": "PbXr3kXRhzwWvw8rkDQnzxohwFK8ZJd5AkfQR5vSdBdYv5UCf9JopbbQudBXpXHVVbaYJ11R2z2KcBk2ZXxBKEi",
  "key11": "4HrFKBFZCmNp51dQhXRVCnvFQ1wp16bh2omoRdGoHaRCTH76WDECUoSqVbZXgtnieBTckkNH6XRByAYPJNHdWqz2",
  "key12": "5P8kQwUYGQipcs5kzDcQ72XxXn13uJyeMpogjMxe33CZWjav4SgCK681MKvS5zAminUiiZk64ov5KxigrHyXHuaf",
  "key13": "2MHDyYFmZKGLnfFNirJy8evi71YKTLa7pspTRgWiAKuURDni7UWTiLQEUBxpr2RXhrUJ14ddq1ZQSH7MwFzZabEX",
  "key14": "2RcdiJZr8iXQUMbYPHVHx5gV8y3MPMjR2BFLuVfSiofDaPPAUyDuC1aingCE4EcKQ9BR5Fu7mGsGU9Rjaq2y5Hkt",
  "key15": "5z6ciZGRMvTLJG99Hg2igqDvVoUbukaUNTnZTvYBFNJrKeWHLiNDfGkypPsEHkjNUyQrKYSky5EgPrjCmJSTn9DV",
  "key16": "5QqrLeEnskLjPtL2VHXuat4zFtYGz3HMefyDwtJPxF1R2mooK9hQ8XWLkPvGvn3E5LC6qEMgGzUpbYiCZdjeoAQy",
  "key17": "5b2Rnbud3zDdasj52BSDkzjnGDcw8RBqHA9XSwVTCV45rzn2h5ANHvepmYJ5d16hGkdfXwtRtShSXhqAfS7Mxza2",
  "key18": "5BYh1F836JszimuCBRKNybdbp6zn3Z7SHVsZ8US74fxVAjyLfi5Ji38h2mRWkMGcf5wfFAEdwtNsa4AW5ik8smWK",
  "key19": "5ZaJEQhX7EkZzjc8tWbcHGDjcWM1boRtoFsELzKzHr4s52x34KW5sCHBtyXt5VnacegHkgFisK6SLaZX2kfgBkyZ",
  "key20": "2fpWRBexP3wMJFZ1vvuGEhKp722eZyQXVm3HGfmNptguVWQQD2ar93R7a5od6njDsAuWP1nUYRLpkxCpV6hAppkX",
  "key21": "5qmyabdjy1i3GZPxmbDcFhyEpGejVjBrx2aakLtMqNmbvYWPzPJarcBY9pU42X6KrZS4Fe8x2smcKPbyTaMwJuvX",
  "key22": "2wuQMPkjDvCQN6XBQRboemoiwHMXvKWafzCKHHX8nHjcb6fDD2bDUEsx6yXAPTJwuj1W6XyssLuSM2ndigHMNskF",
  "key23": "ZfVCNx5avoGJrQMzn6oDL6DzLs8Jkdta7Yx8zw5X7S3TdbeJoBxHVkJyY4HQsZfFwv8ZkRU9aVGDd5ZRUBeW4A6",
  "key24": "2w6F5KeJwqDiveeSc9hcU9Xs5HYxnUYTWjftFgFpcqMMf31uyacJASPYZHk27wUKyNLttbB8imTrbYotNc5BwTN6"
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
