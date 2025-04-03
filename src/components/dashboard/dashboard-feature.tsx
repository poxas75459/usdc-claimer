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
    "5597jKtRE2i5UpAWfGNe5is7WMAcrwmzckPGKTxSkrDvMsuy1dQS2C4FsEYYD4NwqhH937WZAvBQGe6oToEpsJP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8yCNXzu7n4PkkMSELtL93u81Uz9i2sixEyyqaDGaUvLbPNELhg6dXzmar47Snr7xp1dnAjoJ4RRpmVQaRFHrUj",
  "key1": "3tte9SjUcNznQwKKd3PzcqP55ozw89tBda5TZeP94pCk9y2tmtC1QqxwqQXTNaQ95ZkbJHrvwvWLeVWP3sNME36E",
  "key2": "2jNWPFFVxDSZJ4AeDktmowxcXqSdFuLzb3Gn2cVW34Ya3yb2nyYDTRJk17P4nYp5gxTNFRCsvA7ZpbzhfAzko4vU",
  "key3": "AL4fWfsexMkYYyY1SyzrvDbYWBSr7hZFgnGXBY6G846fYt7d5yY1vpkKmVSQQJfUEMBvZt1ZYZE2LQPnLRSbPUo",
  "key4": "5AF4uRinxgy2gNG2xGxkEAwxj5vV9k2XE6zkny1pEFHLD82dRQs1gKhEjya1YhZKaER21VWwnKVq5MKww5newr2Q",
  "key5": "23UX7Vy6iPxDm8DhzqaiqWDJPH9aC56uExE28Wjy25xgwivhYDsM8Z47ci8mecEU3qEfrWZb8695GaWKYRCanaog",
  "key6": "48XwjwYSuQ1pv2XETyyXaRNWLA2WKxFJTAcYVhynbRCPr1HeUM9bEdidJGNCzw1oxNKyzqTwu2qXjkGpqMzEr81j",
  "key7": "ZJNx7wpsjL8DbSTUoc6cM2yJbbDwovRKyiRCMAmF3Rnin1ZTSMKfCemyqZ6A2EmFH6HmbQhFJ9g868SQU9dMKm8",
  "key8": "2JyyiUTHvBNFoLSDnruv63CjXtBh3PffYvfSfGeLShJt6zbVeUEfVBpWNmm9aPLJ5wjDJdoTDuxFbjT5Xh95CFHs",
  "key9": "5j9QQ8RyvfkTJzEPTtJeKV4J2iQPZWq1YSi9UXsiCL83beweKTXUYWrqcSpBPYX7gC77RVSLdnpnf46fAcDa14mW",
  "key10": "4xf7u6dnzuTDANZ2jKdK8RDjQWHp6fw4VxFpTgHVbSAuGq14ycohFeZy33f8ZVu69m5TXCfwNVjq18Gz6LyEFWYu",
  "key11": "2ubuhCQx1v7DWa6mXBD5gqzMDajMdPZpjXxCFjMXYhd2t2ztUGStdzdRK1NTnvChgEqhJvSKzAm89eKGJms1Njn5",
  "key12": "2HNh2UU6bcEQV5DJW2fiH736h9p6tcCh34o1hvWi2cx5Sfya3h9crJbkM3ZVqxENgC6KAVbv8i6rZKQBTnw6dCV2",
  "key13": "4e5dEsExMnjuqsnARHjffjzbxXxPqTz1y8gSbkFBineQ4NkbJy9fHNoCfTLFeP6pT2Gy8FQx8w9PkJpkNq9PFW3k",
  "key14": "5CiM718cHwMi61fkwfJukPx3vMoUaytBLZp1oYRYz72KtWxdc7GLRWB7JkLHHwq7sthKn7eRXRYqDC2pzSVseKoW",
  "key15": "4S8sfJWWAZoba7tdMtzbSeFNozW9dMLRTMxtMQcehzSHhxcbDD7ycAjkb2hKatfqutT5qYaEHkyVoqMAsDJyc6g",
  "key16": "5x7pKRy8htPz465WKnoVPApoHrbZvE5iUDjk9RKBYHXrw5zs356g6aKtCfqGbv3WNimXnBenXCCncwss7Y4hfaT9",
  "key17": "34UsGyMxDDU3VfPVhi66fchJ4NuYwd2zjCBMvCZBauiLp6mDmZSkbaL35hbC4t4BDetMbC2FX6CAGTTUjXxKXCk8",
  "key18": "5todpfEaQ7mqnctiM3hVA6qAHD3F4Dmge3akRE4YA3P7Qyw3psSyUhfkBN4KWQfAHoPvWyYLaz6Asx39ZJqHsm65",
  "key19": "4s68X49mr7njZJdoxWzeTckFbCCo7ZMhkhVZYWQhgohwtt3zMhgSQbn8HhFrB2NyBnewGYC7HxP7Y1o6F4S1MLoC",
  "key20": "6npWGorVAhzQ83LbevRCcKpYi8GRcV9d8dPgHRgT2r84TD7ms2i9RLawfLVSpudE1Zb84srfpAriXyEVbKHoWBY",
  "key21": "2NgESa5i5py299iqbq5qDxKKRiF2R6tRS1XcDSYEMcwDJxScquMAQZ2J56iwYdrJPLZmUkY52JteB2uw47oB1jCo",
  "key22": "5fUrQNMK2RUD63UoUGtNEP2BefBu3GuaU26wAynRaZ5K2abLiXAdCW92NzYv2tRfRSeGUbqgY5eu2JVqwhat9D72",
  "key23": "5VPXdxXb2ai6GBffViu4VyudYe5Adsk7PWAtqqQgwwEYM7vakGEYwuXGjxRHPFeGzwoB1ecK7Tgg4q5oumDAgyyp",
  "key24": "3KUnEHtEGN5SKr2Jwk4vUXjdJXDA3o1kMAVa7HT9GpghNHgnES7L4vvPQ3gx1oenTuhN7pG2fZNUVXr996aY1jtP",
  "key25": "632N6Lpr6qz6iun784ugpQkZFoDusXazwVBx2PBe4kqd8TL98PAnszbNCa4wMoZoMELFbdduet1NckHH4knwumGz"
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
