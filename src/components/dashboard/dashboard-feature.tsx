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
    "557wNzMB7yBBLMH7U7tNmSgThk6WFp1kXZPDv68BzVjRimLnwyVEDCyUMGLBtq4DjvJfubWmLTfrjKnWzghFeLT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yp3DFW1vCi6JEKWpR3XJELB8mX4ddcdrTEQVpoE7RoHwQibhF5ryu3VnKjfaeieYHcHJbK6A1mQbABjoi8Y9wP7",
  "key1": "4PGtE5Zg6S9p2dpbJjrJApEksDUTYQbvbrHkGo5Sy4yCXofdbia2XfwxtfMe6V4vUaYFtcxgUsHsbY2D9pEjfsbL",
  "key2": "293FAiPLHbhPmeQQMtNnTibCfz2WTUowHpRxHgnLXCzoBAPGUNSJQSBVqQpvKMv2TnX7UaGU9UsRVDrQC68XU2CW",
  "key3": "L6KsP1bC3fLNn4yXVzKDuXypcc7RLWLN7ea18kSxjHTygHYpg1xBEjo6x2Z2wvr2CDbPihYCHxG6K7nY6NRL5rt",
  "key4": "2FyJfVrDwzhLaCXg9mUtMw4eBJdf1fFX1vc8wxesNHaQqXyCQhnkSGUuhGBfSDBDxvSwY2b5wVdetFZacncgwPk9",
  "key5": "2Ko32AoodpdSDK93tnCtktsPMYoWcDWLnJDuSjYEMJXPAnovgr3qCTiKKzZRQCy9LWSh54EqRDN4DGPacVG1a88z",
  "key6": "4HijsdojGXG2NFzGXP88axWXDy9GxfssQiWiqDkVKXcwAm4wepDDoz8M7v6WyZNJHxMKxaXDaCznWVc2WR8W4PrK",
  "key7": "2T2nPqn3hFHUMResnh2MoYMq27Rcd9HGTpYJsY9zV6rus2Spz6SMYnhMCD4eGMerFVkcNXcc9h1M9p9ofvcYFRY9",
  "key8": "3X3LfJBA9QDe4xqSEKE41NLsbB9YvCfjsX89TFM3oD9fzUMRXMXC8H89Uy8nFiq8kR7HAMJsV4piADWtJiSAU2iL",
  "key9": "32Xizs6Kr1xgJGmymH3p4VdwrHwkkYdMGoyk4WxYPDgytqL7q7mJcdXBkYpA1A4mwmJVy6RhXHfeZ4QGMMk8ijS8",
  "key10": "4TW2oXyJE71EhTgH4WiDquH2sDvNM1dA55rRpBxFPUD7a2UaZZFGf3RUmnq427ocB1yWFzDaRcTFH7A59Pp6ic2o",
  "key11": "4eAS7K4yfh66NyPXSbJwhiRiUM3fdqy7LhrnpaLyhkJTQ7Za4CBVoKHD8pMsvez1cv766q3XhXsEtezoEaScCj4F",
  "key12": "3SxS6jMLBF6fe6eNKYgmdqUoAn4hKuqMJh3CeyMJpKvAZwmnjvXiZRtkYJaEAPwzUVgV4CBH48eUzi1NW4VhA7rU",
  "key13": "5B8oNMCsyft91GHgwzz1nuNS2h6RadfKEyfLAeucNsSnUdoefT4NjkBsK3GUctSPpeU6Am6JSGfuJmC9Mbv44CJe",
  "key14": "9rjb82AwTPY1yimA7zBgSRqTXutcFXYAnFwkXPFho11ayS3ENGoLgqPSffKsoYagFBQVayTMGwNyTNBJGyQRwBS",
  "key15": "4EwnkM48RApVpDS1yMqurMNNjoDqU4jThpjf8TVB8BAAeFNTTiJ38wZ7VjRpvTqdonReraHuxnQoupnmu9aUqVYq",
  "key16": "4MXumT632dy89UbZPZQdEuQdnUmiwaD7YTnSh3uGRcAcv3cV15Akjpn96kM8PQNPkrRoCpe7YE4BcVHePXhtzLem",
  "key17": "edQQRfCq5cb8hpcuyrhD3KfHEYUJVqa4Udg6vofC8r8kHpy92rnD8y8X3YkaTeAnbwUPfLEt1qUG9SWi58DU2F6",
  "key18": "59Puja8e1upx23KjkExgSDA2W68xyJ7uky7LGoeLsXfuHm9b2sg5MpxNLK2q4C2GryvP6CmC72Y78uXUuV5dBn74",
  "key19": "5cMzzNVnBZooyypRuRRBahdnSJ46siKxQSSeWiKBjRyFXYhXsMhUBsNPZeeJZ8LZ3ViVEFQkjHD1ZAAPC3wcooAf",
  "key20": "4KyG9VGNcKtZgCFdS9wcqZK6WWeELumx5Q27xJix5wJZ3DR9ensBJKPwoBjidstf2DnocZa3tJ1J6emd7XgsHv6A",
  "key21": "3iC8XP23Gb6qSXYe2fnZdm7HW2WXuVhrSK17MxA6BbiyNcCyCzz2buECEBijxjphjP8bpLNej8VnYxAjgJpba6XL",
  "key22": "2Q5gms8SsZPGoh8ABt8ojGpCfrN7ZuAdsfa94SEL6U5N44Y6iXMQgW7JbG5rekrrHqitxFbsEf4bL1opohiiEFpA",
  "key23": "4frPhrvCu1sugtgmafKogvFBqLsgGhSdeejFLvqVBFCHRMgoK1aKp2w9sZfap1tkLJMs9vAscSp6qp9TrsRBJJwt",
  "key24": "2B2LeQ26op8jBj7PonJbhVYHQeBm6J3B9NXNzF1rr2ZLVxU5vaxZ6xsb5Uviuq8MhXXN5URkC6Tw4S4RvFU8y2UL",
  "key25": "3u4uzvD4F4nBdo29SRC9P3vjTYvzZYum4jgvwrmDy2X3F4ys85xqpsmcjPQQLFgMoiQ4keAEPiuEMmdTBu2whYCh"
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
