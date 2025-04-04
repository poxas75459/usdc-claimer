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
    "7eZ3XsDeUMEAyTCbS1zEFEcCJ1ajawBHQpV5d7b8uCauFMoWwwyjCpdhoHmtksq6rMXzTA3TB6yUhw23wv3QfJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDoNyBLRNdSPTfkGFATb4Ca7C6oREzXerCTxDofvPtuQRbhV9Leq4JrF8cHsvnbTTC7yyHk7QXrqdCQWo2Bfq8v",
  "key1": "5kg2c2pSDs25xo2sUecAQBJM8C4Tq9uy944hvUWx2smVfyeLJteTh7wPExjJamqtYmdyKKqTHBuBeu8qhNiVzLZJ",
  "key2": "2R6pbJkJfTDGH7DhdfHsrE7kdp3NvfwpTNyJ3rA5Pzg8Puz9nC9C7mNSLdbdAuAgn84ziGE8MWAyngq6MkQggL2X",
  "key3": "9V4UYuvm9nNajRHFmPFUC8x3xSmZaCU7wrLCMJoTqriGvjYzUpJYwBKQMcyDjE33DPM8sBUd7xExK8FGaaJWxCH",
  "key4": "4KosNQxeoP3ogoFXjVaNPu8ji8iMR1LMwEeNSeYqeVfuGLvYPYgGmuCqv8Vv85hGJKXrRK6CtC6YFv87LBcQjwkY",
  "key5": "38CDogcqJLx5Gz6G6u3ikXAnJKHTPFUz4CZxqNjA5BBuDzsRzBarfHtD6Pv5VpPwoSQRBSUWaaN5BjA79ssonx2s",
  "key6": "LqxHpafMJpW4UYPVhN4spN5LbDH4Scvac62zUrFaHDdRyjeU9JAdZ2WnjvM6bN9pJWa5mbrgy1bKYEdTrafd48R",
  "key7": "66utAHTkHZf8dBHdGXb5GxDfystXqkZWiF4QNr1tbDREbvkuUCbsAuacm6K1GrbWmFN1ZqEqQdgBQQJ4FPCD1Khw",
  "key8": "62rFtztt5ACeJerG6ebuhFo9VBzoe52PtkssnZnEnhmohxNPXKwZswDBWZC7ijZd2XYYmYhCpdb2pu6M9JamNh22",
  "key9": "hjzV8Nap25cS8DRx5k3QCow23EaHF1QcaLuDkJRQ8Xkeass8a9VhyuKjebR2mHGqgaXA5ADrAcGDCfANVn1xdBz",
  "key10": "5FTfQ26uQd2FVZNk6G8wQbkKA9FaX3PvhqvRiGJsA6AwFYpwZqSW5sDZT84kaCu3nWhiY5AfhSBCLM4o3PGfYRns",
  "key11": "37XEkytLERg9RnqnytLG9bCP3a9sh1GBMC2mg99PkiZ93dgQbPXpiXovEZ9DkrmnA62fpH43sRwgaSG9DmSHA474",
  "key12": "44CMmFgcuCcM4npY5DRsgVyAMcG14rECCAYJR5XjXFtTbEgL6rH1yNPxhy83mAzSG967FNsXqiRw7NVTmpoCMZTp",
  "key13": "4sBHp5h4HWbKANr7KZsfwjRiMP9Wh4vdz1sZD2bvooExMLhxPJScFXKna9ubRVx8x62ep8TnXrGE388SGeXDXTVJ",
  "key14": "ojURFwcwfuXzW1TYBBQCjaBFzeJbAzjHHpLEy3xYA6V1LS2nyrr7cZqx81yVd6aBg77VonKvAQHLtBZ7Zec5Dc6",
  "key15": "4mLMMWeQwxo7AEn7TA1NPfxQdRjCeSAC2HMutLzDACEKp2axT1tTu2AYrykq4BkSxog16PQwfns7MpXkJxSyubQc",
  "key16": "2z9W2swZ3iApR8gxEc4etNHeaoEgyw9L2tkMpZVRa1rTkjdumrBxAA1fyTupUnjwV9wMjPg35y2MaY6E99D2DKsV",
  "key17": "4Xbr5DVv8hqsKi9zzRGgNSAHsgq8U3VWopFpbXrtZWGzRaAz8gbHCcS9ZZT5G2wxVWxGzEPnUqXGf8qY89KhRE3c",
  "key18": "4ZHV1VZduqPss3TxB46kJ2ZzmPauC6dDWkDy1FHdsPX8x2ShTaj2faq1UK7DbYEmZ6q6YrRCgMtPaaW4FwghHNqG",
  "key19": "542wUccpvk8a4zVPpMbd7DysycqDUxiLsLW15DDvtmZAv4jcVvkbFDbuPWFyb9iZJ9rQS125zQxyyjGnnRYjqszo",
  "key20": "3vmNB2qqcfEC4af4fiSt96sjYc86Kop1689UpgKMjEu4XzSrAYpuqF8X7Jvr47VFyazoF1s1zD8z9xqQXwQLn2jj",
  "key21": "5snNNge827TrRNLNW9rxe5EgbCn5bKdSotiXhvJ6yH1HgJgZ66RWd2cWiifteKiTM2xysCtAumo4zFKP4Fp8GG3k",
  "key22": "5LUQ64uX9d45yGAnkDQNr6dVTMp2kGX82nyiZmhYSNUyUT8wmBA6qVmpz51BT8x8yGhe359cF92VVis6twwV4jZz",
  "key23": "3K6RbnH5h3nsWZV6ZoxQ7ZhCvVrXx5DjeupMaXhT4JSPtqfFQhepEyUXUBnbQ6QQ46W5LmsxriZcub8593fww5DM",
  "key24": "4Bq8N1Qp69z8qtdeZyuaxwXTKWPLbX8sKZ6mPxbfHN5ALr8eiJ4RFkzbkx3tsDAh9qu6KJymT2RTqFY9a6qVaJRv",
  "key25": "5TZPsMDtpiGtmUg2JLeDPcxWQLw5PmFMmGiW1UYdooqL7sKBw24R93H2jefei3hzmJg1zicB9mkWU8tYE5bHijV8",
  "key26": "4NDjgRmSPq6QDqLekzE1Shs2y5dGysJ5t5c5EgxZ5uu862AGVVWQQDS4qNo5cyMUuxVULExaE9k9VGRCbb9VgGBa",
  "key27": "4XTvVbM4RoRJiiENSQiLJWgFThNszxogC8YDWDSp86bAUfUBSBR1nZJrr4rkAVTy3K9N2qoGRJdD3LtNyohxbCCw",
  "key28": "2kus52ykRitgb4PTLQ6uWsN3u1y5QdN1LrHcbVMRFsKE4onDFWiBo7yFEKDhHxCgUWHwGEiF76pRKCQyriLSGntT",
  "key29": "5maDpErvL8U84BbuqeZUA7HgxV3MkzNXxPjDhwLp4nhBWevKY7YkKCEQYdRcfkCCnFyXwv4YMP62X2Lf9ekC59aD"
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
