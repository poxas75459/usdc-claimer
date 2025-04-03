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
    "3sutVnf1FuvMgNgztRqYYQPPUFFEvvijYL55sFkTgzaCnsKHXZY9zvRkpi3XztMd7vSEyB8UFgBVLerwbyjaNmrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqdybgUWg3yHcDyvcFzV4fJnM4x3Kwwfyom1L7uWbdfCxUCMMrZqfwkWA774qtNAAfVzhjoX25vKBVmoxJ9ZGpf",
  "key1": "5ujrXmtRU24uQSacAopgZM9t6RhtDvQnL4rnGyiRpWtFymPhwMTCPS5sDmWibQuJRj6zyMEgqUSQxHXMLTqXkL62",
  "key2": "2Q2PHgZcRLrmDJRwH5hiUti8cMVCBaSzbVwfQHiiaaPWRH1fBm9R6DVCJopu6uULxEZBdooZruJjRqjcNs6CQ78k",
  "key3": "2T3sjNHUmoMkRi7suDsAJtov2EfdVSTGRRXREkVa31ovsHW447HqaHXNc335xbBErcgVC1cy5AGQn6TNGApCa8KL",
  "key4": "4DqcRDjH6rpnRbNZ88HhixDASYLj72Cxpo6ZiwbQJM6G1XkXugeuVXuv1btxK321cLZPg287U7aMpJP5C4YppLYY",
  "key5": "4o5SrUYvhKJbQuBXcc7S5wjQbW7ff5N6VwU9PF4WMoj2qPZQ9Jzb58nDsGqsPaaPsPBuE4whNpTnhUv4mZTuJcU3",
  "key6": "3ddGp2EtUwp1t9CXBEJqHmVdSLsPu84wvBN5mxTTy1pSbeacMX3tYQJkMbbjwCtSBHUo6ivmamBGivJUgEPXNJEN",
  "key7": "9RmcqA7pjG2Jp6W8mcmQAU2z9SZLCWKtt8AeCMKSZ3w8b7tD4jJLwb4w9zExqfsMhQM9F8zJHLe9tx9ftRWebn8",
  "key8": "4A7oFQfBN82CVQDU8k5s9KnsFnyNMDZAysSVBbLr6iRize1vdbzhXMUdvZVwWw7Nshxc5L76mGDjAvxHkcfib6vF",
  "key9": "i7YZkHG4KLarh2ntZhvGhJ9cMFEd8XwFtqEo6CRbAXKR6LS4ocJFumTNb15WYLWgCD7gusTy64r8MBXpvXBmGbe",
  "key10": "2WwBXnPww7vwfVGGij28rhRgabuopwcf8rFMHSGXxauiLwGHjxmoXiFiJQBvBKH7PcR3sha6oVYpYsHHGrpKp4SA",
  "key11": "28MQ6un6Xn6uvjLGp2nRMp7AcZsYBkmjg8RZCQS4AWECqQ8nHcHyJfDchVGmAcMtQ5Mcy6UFzu22bzefyRosox2X",
  "key12": "JdFwmWLECxTzy92SwhFrQWouZsW52Ej1hqb7fA96bu436od5C7HZHPZsGXSdTPWXpeDgajziqsCx41WZZmtEf7A",
  "key13": "3zczCkjsaBjfetUNLu5yHwxSyzMd4Mozx1NFPvbwmAkQvxaYQPvTBQkvQzEy3WdYd3JyJAtHNvaZw3swsgBPb5dH",
  "key14": "2rYqvi76Q6Fsn5M1REqkN6fKbQ2ywruuAn5R8uJLKhn5jU76ut6Zm65JDD17d28mBjuLrLHEKJS3FUr5G71NGZG2",
  "key15": "3maSEXf3AE45GUX2GEduX5T6F7odpQwYXPUo1bJqjyNuXCc4Qc7GbfzSKmYB9MsHiSyJFLmyQ1VN5CZHa47uU4yR",
  "key16": "4Q2oKDJxoRnJcxvSU474w4ksGKSpsprdo9kWPQk2tZWh3Tw7Hit23yfs2ZiqmCDVbu31Th3cTufMW2DxmadTvPy2",
  "key17": "hre8PAN1NJMFHj79qi48zG2RQesWJDmMnfMfVhoaX3fd99yuaRWG5MaBn8PEZgs3Xkwf96zS6z6ha612gjF2DQN",
  "key18": "3SqY6Rgt6bsMdZmuW7HdBXQFvwVzPpE3TyqAWepcfpsqKNFtuNdCoGypZqzyp96QVECNYKjvrLyYYXsBBZWszPqp",
  "key19": "2gkSUG3odoHvXfbSknWdy5ncNYTe5kF4PFekDbTPQoKGLaCdmzvAB7tgmmCqEpEmfZGYH5GT6wfYyCzAwMW7dYMr",
  "key20": "5kwbZqyRtPFoP7chUBj1csi7mCg7ejxUmnbHBiLQncq7QU71eC62cyv62WPs6TQ153AX6GWanag5k3ErwDwJ5mC2",
  "key21": "4bx7YqFmLpW4ZGRXijcAVP6xcbU1gqL8jSN7q6b8oWbbSucDtaoNSGt1Jae4K54njUghejXnwFz7hqqWRWK6FQax",
  "key22": "2Hrxxg2nc3nA8WpU7mLa3hyH7oDNyWvM8mdF6JHMizhUT7wPgPoAuNZ4Xr1h4ASBPhjrvLnKu3QTPJUFG4zWsbpu",
  "key23": "4zdX6w8hV9rkbGgSxfcKdGurgV9UYJqZz789grvtevA6GVam25Ck1yLmaEyZSqwQc6vdN6EBXzmzTQ9v9Z7RNSZN",
  "key24": "2YJ1jJLh8i5AHp41KR8k1SnCZNfsmPLhm7zoqVRKkheNLvYtXLzodE2H7BLFtqUaZdcitmDDtRFcwxspYfjfHST8",
  "key25": "CAX2nagoqYh28azJSQLXDL24Q7zfM5pNsuYMyXAkZW9YewPV85bBdtcKcCZRpW1oGxAb95RA1aFtDSSTozz9Dds",
  "key26": "4t5848uuwdPcmCCWQRS75FSaH7x3vrnrha95aqvmmGKemd5jwDdN1Xb5AtCvdGf2CriG1oxo9rxyAaB7wYGSmGcM",
  "key27": "4sM4DEuxiKpnNN6KsuZxP52y4vWbLvn83i8N1xKKvCiqDkZoTyUGEkcNYVrQj7idYgRgu2Nq1rV4J3Hbo7xMUE2s",
  "key28": "2oZoFHHcjJE35KXM6BCFpk2KUy7DKxqCA5hcm7bk8xqUzijX4Tqggi5odTCZ9wPYeQ7hb1p27Q64QCiPLBXPj8RU",
  "key29": "3EVriTCbameb4sFW2ZFhmTcT2XfN5UyggzJgJB3LoPJ1vtTkUCcupQq4iKiEEWQFHFQLe14ugpFNtmgcFwrNSnpL",
  "key30": "yamxgpupStEJCkXrY53tTdrPYh6jAAtvrdbijkBRceiHiNRoB5GgJeAUJ9WavoCRn5wuXbVKTFtQEGrAJfffTdJ",
  "key31": "62LSbKDsZXo8c6sW9PQWmjEYKpM9TVPJfu394BMkGHFuooK3ABmt3aMCpfEL4QF3kkNFgyurDdamkiyo7jbHs7s7"
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
