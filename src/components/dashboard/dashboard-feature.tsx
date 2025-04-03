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
    "5obtpJg4i4ieY1J1Dd86pp6KVHCmhLKEJVTbY7Sq6jEj4Pypeb1rYzQAwKp4q1MT3L8E9ca8f7trHThhqE9yLYGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhrPaBLXAVExC5vPypHkWg46zpKNXSHkYwU645mrUCnQmyHLpgLekN6FWWguLD9T7kyG1GY6TfaL5jbY2BJNuPv",
  "key1": "5DvGznnMpKNW734QD68J7KvccbiTPTcbwfQxsE5pxbGtLWoKsZUxg7LDGbTDtmzKqhPJcSUjtUDLVBXiPmTzHV1R",
  "key2": "Wro1nm3pd1zt48WJnEBYRzyNm5sFb736EaMMQYuoay2eaN4KhpcYcuNPZsU2qDEQJutLPLsjfqyMcd4ZZBce5Ub",
  "key3": "4fgQTFJK1E23993eriphKGmLy5itacmbTStJ4AX3a6KiDMbo9XQfT7XFhCy5iuUiUoLRgm2U4f6pk99tDGQjWBDL",
  "key4": "57xvf8RaeavPrDM6vC31aJdkV8MrU3RMdDvqtKAVqnxvhdZv6rkWh55bmKM7fPpqcCs74xQ9WeqGe46YiSa8giui",
  "key5": "29XdmSbD9a1jKPx5yuyS9UufTgEehf66TEUpBoGPeDLc53vhtGXoGqGwvRtWPrdkuXDRUZEth1EDf8vknTDLNDJb",
  "key6": "2xpZb1hjrc426Ao64YYL8R2Baa19UjA5f2naef6v534JFGAZobRJ6239BecMZyJ9vaDR2ubS9eApxwfxJVgipfRD",
  "key7": "32ixBgYm55qSYQeaSRL1XAiWAP9fGKyU5KGje2RPDzkZHfHs4TSPxkUiiJAyCeAmRJZh3xudS4kw4unLgGSM6v6b",
  "key8": "5YM3f3i9yayHGH2w43o5i5ucGBwMDna7Hm6FpiaK36X5vaDrQ4fhHgCZqVpBM4Ev9zjcKB6iTmj43xpF8nHThMJb",
  "key9": "2NGmktTMA3wCm5UfP1EybEHWPWHRRApVL6NE7eLqc5uSvchnf2FrNhwycBpGx3jcdVZ5yeCZ1Li3WMatU6zXHMiv",
  "key10": "5CXxTNexAc1YwreD4BWuFsj8U7b32ynU516ZUSSJQdsUCLMAf252ge5Pi1WoZmRppJQUUDhLc67SEr9sdx7DPF2K",
  "key11": "jEvMSY6N8HhYdB5wxEXr3xpcXZ1y2wTYiPsMKFSxMxPJJjobBjWdbC3FFvFPX11ai1yAcbnSAQ3Yo1Tnzgn1QGN",
  "key12": "zDP3ZP3kt1TWHzn71MuEWbWZ9rPxvWjeybJ3whJeVLp3HoLNkZ9SLfF2mfqzfWYjVVw2tN42yRciYpDfeThVxx4",
  "key13": "nJMDqdSUvMB3oZVn3V4ftHocWpuuarQVuqukxUxZvEhUAKMWg2JBPTUoX8U6QMHnHrbPER8CKyNUoKzYaEtWHUf",
  "key14": "2h8GPXQWrhZAwpZAvR8UgMbYbbXi5DGRfLyz5X69HmqFcXM1rPgtpRSE7BZ26BGGQv9NpH1pRBgU18LNeQEVRAKy",
  "key15": "4UdJFtdkCTDsxvrFbmVUydZ1DhumGTpJ53sJhQT2ECMGjmznWaLDAUhS2V7BNZKmaCuftWPfvZkWLdeLiWi1AqpA",
  "key16": "3ot1RFDuiUScgmYbdpuZLB19432c3hoTodJNzCt8apdEqUFUqk2Z8vyoy69k1o8uhfVZvciMnp2keeo4xo6UKtoT",
  "key17": "4ci5zhadrCmvFcXnmUkRwv4f28PmKcnG6nqBPn1pek2dmPgiwiM4GUa64zLv2bUJSZcoCzk22dmgNBSuhj1nGQ9A",
  "key18": "2kiPgN8rkRMgiAVBgBUuu1sK5dzHDDRDDqfphfBu23DnPXZJXLwUie5PvRHkw2goVHgvVzpXFqwWEdUbab6ci9Dh",
  "key19": "PQgJQguYFeLV9PCavxobkvCPQHNm2vKQAr5KnG1HBdr6BZUVx7hxMbg7JYRK7iU2naysUT36fSdYM38eQZXfnmQ",
  "key20": "3ZfALNjLaS6FWpc1ZTmvi5oyBYzfcEgWgULX5KTxCvqvtnXQbvdnDZGxJNPQgqWRVakR7yR51sKtdaZ6RARdVaM4",
  "key21": "xM4G5GPwzra48JtbqGHe3d4Gv63SGGjZstuGRfpxJxLpMEhLE3igenHwsEeHQfB5EfFfpZvfNaJsukCJ8CMey6N",
  "key22": "2GLBagKHWyVskNq2rUukVWPJZniiJrU5npLEGb4vRKfhoR3bQQXn7eudmcceSwAeExDWoKGKbztAZggrim64C3Ft",
  "key23": "3unpHc4fSBNfvMMAYdsnNKakQsWzwZ4YjMoTVSGZyxzRpbCLtjuMFKvcyq3PVYwsPtL1GECHT31SEDXZvb8Cig4a",
  "key24": "5awWjmtdeKy2VHyNT6W6RSTFYTTQt9miqc6CTjPJJR5ckF6pvdsMc7w8tmBGntDFf76bs3Qf9f64vnfyk8zYmfhu",
  "key25": "58MhB92bb4wjk4GF6wbAD7GJWoCNwSgTwz4mc5HuTVEtC28r4gmX4D52ETUyYhqDXpMRYjwiDfmPpKctFnHdpKJj",
  "key26": "PZgDXfJUepNKuBu9qtSBan6xNVttPVuLU1QC4rkQbFzgXicn3c8wDqexGnJ8K6KmpTWMQa6fJ1wb94Z4HYTJtWD",
  "key27": "499ZrfCco8xpYDY2yhJ6vGngxmFoMthR3XE6PCbJE2H5DR9QSF2Nyq9aauKmSMA6PMTwmbKJ6iC4ibcX4RqTNX6",
  "key28": "2tmvbbUb9roAjYfbp2F6RGwaVVwJwdVCUtnVjRYjiRAFTyX4Suwk4MQegiJkooAfakzNiCkU2gpucdorbu1Zb33G",
  "key29": "64ENcgtpB2EBiGRdfvhbgjz6zt2JPjST83XsMcDktV1MSPSB7zvJJfr5vJYDSks9LcvB9mqYn1e3PkqebzLze7GX",
  "key30": "3Q6NpBn2FhHdpoW9m217T8KKRF61DPAqEnpcJsyq9hN9HWAzdEgKcw6GVHa5yQMRfkvZE7yYD4SejtTGpoa8vS9c",
  "key31": "2D5wa6HytiLsajq48GTYyn57qg3si3HhMpB6kTXw3Vi6TrSfA3TH4osmGpDa7xsiRcE5ot8GyAoNFGBy42vRQPKi",
  "key32": "2z3ipzvY3yYLYGVB7s29zs38VsZzpFJErD7gYWVJJXoQAyXaEkuUVPqaQ6C1h9B8NzmZ7XFWk8jsFsmDrY31Hecv",
  "key33": "53UtbWgpYiRjY2DtxcLNV8mYszdNg12Mvi1KD287UDKoQGdNF4BbByFCEcN7xiCdq99bVrgnYcmfkk3T9ae8X1m4",
  "key34": "65rCm97KnnwFZTTRoSbRJ1iga8LW3tZh9fy4HRthxgzxxMJG2f3ZNHqbwBYT4WGxcypDGQz3Mak7EEPwuFxrgYMF",
  "key35": "baGpH34gXSpMLgLv5nYZHzTAV6WSPcVYNRSzo5PtSS4wqBN37pdVNnoh9kevb157kHDfNApQMjND5D2zgEahSs5",
  "key36": "4bXHhnhcAT4B8TCCmuW11AZALBTBf52MoUBnuBDFYTtMc7uUz3e12BaMoSAcfMa9KuXS1a4fw4FcxvAPvbMMwfpr",
  "key37": "4hwLuyEjXwLETYBTfcsE2DCBHTGaFzMehmFowP5sDckYDHhL4mioVktokZHkqiB9erVo3hGnVNerQuVVdviZq58S",
  "key38": "5uoYfQSdoXZqvS23fU4kSuPPirFjEv1wTgAnZS8xQv7GkqrxAzeiKwaujp3DSXnyDnGfoU3LkdhCaUVjimRYrxop",
  "key39": "5i6DrFCdmbuhy3SqEHqxv8RJGdi2riWnZVYD7qWZx4c3MJRjwgrfj5HS5o1CNWQmKGrcwjK6DPuwyeVFfHA2NEkP",
  "key40": "sWJNddD5SBmfCUMfZDsfT1xhLtf2cwGirpif9xCm3GjADU2SrshYcRSRs7PqKBkBWCdmA5GV4cb1dMqLQQsGUVS"
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
