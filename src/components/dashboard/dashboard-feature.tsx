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
    "2kUAsCtUD7EgscHmhoMFWud1kKKLHo4nxfNFuCaRwWc93V1kGeeHkZmQShjGzHneP79vy7bryLtP9BRj9dsBTBHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLa1h611K2xSn88jMV3fMrJLmG7QYN9yoKhY5TKDorrvtEoc4z3q6gXUnDcEa1gUp2n4Bsn1qadqR5f53qcH5TH",
  "key1": "3JbP78zataRQ5doghtvQ47mJnyAkcbSKwYTFr3svq1xppJrADAxoSXtNBcS4TrAqKLX4vyeYg72P6AdPXySLxSjT",
  "key2": "3HxjCS1Hkau11mSzzwgr5RNn8ggjx1Zuyu2bhmyNaYkmJ3iGzuWiUufqYsDua1s7jN8PUWLtfGpotq3JCAK5SwVP",
  "key3": "2uXADcF62wFWDQgdmtZ9UwYxp2HiTnZnGqoE5BFbkvPtoz2fmk9ETwuo1mVbHHtoWPt3VGCcHcdAYq6gfdtmhNn4",
  "key4": "4aVLgZyfdYtPqisqQ8hSZ4yjr2Kn5g6VegXNMWCVb6JbT7yeygLuRHJrcnUdRoMaUt2b2cV17qnU214YcunpzZqx",
  "key5": "2sePcUJg6M5GbjzrTpdWUh5mRhLhLkfxc7HpM9VsoC2mSwWwEZ3Pw9tUbRAB4e4td5PDn6Rm9tjgiWV6XFPr6ubS",
  "key6": "2SLdchu8qcf8Lg5nV7GDgELbRnpyXPJcJ7rLdh6ZtSTB8W8S6yY6cEd5fUJoUgb5gC3PRPBBQe2BbSVCuBQhdRRx",
  "key7": "5rsLNHL51MUNU9XoKSHAMJUG4LY4SqXoUpq2bmyHEGkWULsFAShaHBynNWri37ejSrb3m2VmZ6pMVqhmmeNdFUMn",
  "key8": "4FWCLdVieVVLRrsv1gVTgCaSZJonRp7vCVGxfiga2EkGEYUajYCFuReChJMdXeE6BYMtrkdyVZTLCLG5qZwoni6q",
  "key9": "4fRSgcZyecK4rv1WnJDRbPB2HmygcafLLE6ubhPJMgG4bKx3oZqVZjSPwyzHYxhvYbcysWXLPWz4N3wVUoQdcUKV",
  "key10": "2xmeKTKk25ADX6pSiV4LXQEwgxHYz8jn7SuRCAmKfK4skUVftLHebzWNpXpijHnvQAWYgGsFCWMdeL3krho1NaWk",
  "key11": "2uLQh2FdnjdLq5mvDXeNLqPSuvV54x7L3uW8k3a13YPADgSUaowkyZjEYhdUCnXKgzTDXVALw2dXxNjNqiqzkyfq",
  "key12": "4YvKn5s3icQtJ49iHb4iNe9bs3nzph7XAav8jsY1RCLTS6j3JrSjzLBkkD88f3HAjkJ7MgGgmC6JJvBSAb87hxqA",
  "key13": "4EHc1Q9sbTSgbZUxpgCrwbykCcNzSYkVS9TqoNKxBB5ofxG1ThgkyanDVSC9P5roAeQcitnLvJ7YRsYVTGktNw7a",
  "key14": "4WufJJh7Rw8XrNCqF85RHwPswuLThC8edxw8GzSDK5Duor5pShZQwXyCuSuZrtJfFyGMMq24hwk4hD7uxio9yyeK",
  "key15": "5Egc8f1mV7Scv9AayoYHxZ56XSZcCspHXsxh4Q2YmxGFoBPUeCwx5Ep1FGtv8snyTUuXYzQ9MqeajpDJ8xnvtUES",
  "key16": "3S6LeBFp1fLcjs7f6pKamSKRRSqVZTgR6KNJRqpAQ46eX1LbwsGuZwKPkZuYyhythiUQRDMESqh29ZSSZLfeYSne",
  "key17": "2Ux62MmVV4wemMbkqBP8SEUZrpbNqd2ME6v2jmRghbSt2BYDoJp1xDsLqW2uoXcxX3cHt6y3StBEKFdw63kD8KgX",
  "key18": "GLCPdvftKq6DgTmkXqQGojRwpiNf2g6Q56NP1Dv4ixHojm9o4VqRgfWmQDfXje8vrHwGXMMiLm1o1ta6wk1TSkG",
  "key19": "5hNN8w5Yhbg2jXGCv1GGQ4pFVx2R5vPv4yMvJMdhAtcBA3CGmF4AbxaCPiy2yHBt2CbQNCKwkGG5exU98Ehadzp2",
  "key20": "5APPE7FpMWCzgWT2DXcPB2oG4Cr9FR3CymvJi1gzgWFTVdUpDgyf5UKVDAhCBsQ7xgZ8HJ7nmm85UApaWxyaQdma",
  "key21": "32SzUU5fkz8Mjg9W1gtr2zQ88vGn6afXecE1NTTzFMLa2ou38TZUWtBK5FzP5mAGXG8XvR5zQKuk3D4QHNiVZTWW",
  "key22": "4mW8gMvwxEL6BqjPcXVmacRzHhbPtzwqdStMF8CF4kq8S89UhgcU8AkriUpmb4A72ALZxhrmBrNuUUc7Kk9TeSMx",
  "key23": "wCry3Keq3MCB9mLA6R4fUfViaR267JjnhishE3Vn3L2wv4zmvZ15bg1PRFDnG2tAz7a5kkt2NGMHSg2Ch5u1aGT",
  "key24": "4RTVY9KVQqPUajWkJzUkiYYG1mJD2PQgHrsEFt963RDj3Fh1EPvinqdCsXT5HnKycDfQ7qArzyYsWREfqyjEC8t",
  "key25": "5bWHTexWtJLm8mVanwS7XVEfVspNVVTE7nUWyHQoD43uBX5w1L7jfBJGDZFS6BKA43XbUGLocxd7SZS64Rr1ArXR",
  "key26": "4JhwyKFBAjtJvLNfcvMbHZitDzHvPyHsGarozhMeiwuB5VCWNmL1nhoLqPRBgGsu1SVQDXkzsecrzNkEyvqrE4wV"
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
