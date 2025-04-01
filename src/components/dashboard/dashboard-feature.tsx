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
    "3YepSad5K1F3RrUF6ygBUMTo2svFf6bFgF7srq3gHkyX8U6zJkeWvrdqwe8t2WCAmpFF7oFS8Eqr1twcFQdw5UWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGJUB8TW812Zz8KfMxPZNqLXaNxQ8n9nCdpQ7BYsf5fnUhBZqpSWua8FJdK1RuwPYHzT2FCZAwQ8n1iBQ8eYgSs",
  "key1": "3AD87P6yDKLdk8TT479dEwg5PMWq5GDRKsUKB5DuGixQUPR8mfAswBhg9yp9n6BERsGpJRJZbwXRgUBGPa7BRUnR",
  "key2": "4rJvkae18MQjJgso1y1WJGmqxBNrYLFXRFmz9FgfvbfZXc2wJ1Y2oDs3NpZSbzyNjgYFf54j2SXZF7RPScs7ZgzS",
  "key3": "2KobgAQFPf2LrizTw9zSwsuAopbqeerf2vB7TU7YodzNMv9LxjTap6sGCdVtQGUJgo4fw7vFURb4eiTZVAe7FWrT",
  "key4": "4w5RcsosQqXsvZie1DDNa4vFZAPPDwwCJxgbeDbVh4gfqx5a4Qzh8jsrauwf8B9gNtGqwKYsESEdryNFvzqoaopf",
  "key5": "65TgUqvk7kxb1qSLMnRqv2waug7Eem62faxyaUjoqZHuD3UFbvMe6XbTzPPtbahPtShSP6ZtE5oK51xzKQoBjjGe",
  "key6": "4G3CQDaMWMyYx5jZCiPtSPZakYuFe66aV684aNuUp6yrzZexXhAmdbPb1By8FvzozgTncCp9Y6fHFQJGsntzzMgy",
  "key7": "3gsyKBAZNCZJNbCAYGe4VEjP6JYJCVgV32N3GVaAz5PzTm1HqqcH3aBxpE55RHCdvBATku9noqhjJsEPe8jxPqvD",
  "key8": "3bu6agD9YucfVqtMEsgZaB5fmSHihuoGCDhtxvF3DhjpVFDdWyFsUKRBZGjk5WuyBZ4pXk6sLcDXEvkqX9VhvgSK",
  "key9": "5rGVgr8k4sgFmjKNUStHFFjAy5joQ5GszvDkdHJHkmW4uF7DF9hCDLkFXEU2eb5Usd6sy2RbPCzijAMJ6vyr1S21",
  "key10": "3N3xAvvvoE8oaHM34aP1T5CR6GdUHqxSruNNejMPJBz2FMMPhCjrvZHPGX7JeXtut4ALME7ywNhQq1mWgMW2Cq4G",
  "key11": "4WEueVmUPW5bxLoeioBCfkNGorTmozdikHxZNXstYBjYNMNR4VEo6ZQoB56Nxf9rj79ziffGDxYVU6CwELFshNaQ",
  "key12": "37oLfAqqZFbPm87H1wANtMFh1vfPeszdKfBGprBZ6b1MtvgKaXUe3nnyq254q9upACS15DtA188qbtRxTPi7B58J",
  "key13": "3Mh8W999jnvFuMrPGGScpQoqe4U1L7vVhP4J9YnFUfJCnYoEQ7DY5tpoMFmUSgSDvu1QEqT7C6WmXwVfBwAf4xn3",
  "key14": "2KDautgVKBxy5C7dr7BR9JnZgLxbdR1jBiZLNvj6kTVvMLhh5raPGUPCTPGRrwYMxiWCk8bhaoGpE7VmXR8QkDoK",
  "key15": "39Y8GcQThpwgRZ4nztxdAkPGisXuXFeRHua8f3K6CjUqwBQnCkLFfYeUq2F5FwmGXxpEKY35MHEFCQPJrF3uDC4R",
  "key16": "4Kc9nCYdFjKVGLo7pjVSRzayjnM6Sfap4ZZbuoSHifBeUAVM1DTN46bBrMGM2n9EpDLH5M3c9B8QPFVxjYXFa3ma",
  "key17": "4WmgP93kPKb18yqCymh4priqVH1DeUi6WECLoJ1BPwVFtvdZHtMiERS9VVqT1iY7BJisYskZBffCfw4ieFnpKniU",
  "key18": "5JmykTzsQHKM4ZoQjUGm5mkwQAj371z4FP1QtgGZxtF66AtFyVrDdnT4egNewKyCZA9RgaPJFEaJg3ASk8euMy73",
  "key19": "3B4TRtMdtpwA6Mpdnv64T9Ym54QSsgtAY7Z9Gd268VeTNu8GKZ1sku6AKDcP1XCmCbqYRJNfgcL67tE28WHdsEeW",
  "key20": "4cHoNm3DCFD26u4eoHcArqToTL8hCNi2AxpACwk5zGPREQyporNkHREbzVKXXofYBh579FC1NxDUWQTVgwWwWjNW",
  "key21": "5ESRkndkMffoGXG8EedhDHEbKnaK94wMyfb2pWLoYs2vd6phSAWhoYHJ7ED7bX6Yqy4s6vSQfQWfJDBMxNFrf9c5",
  "key22": "5hrAo3pxLZGoZxTVat57TDHANtVVc1eYrcrutiSFwxyoUZXKjkhS46AkCTV2ApsxToycjD84mGDqgkFevQjcZxPn",
  "key23": "4uvg9xn2zNA5kYbccPh8EhjVnn5daZdt62NTtUZ26twvKaNo6MHgdBMRicFQLD8UgyzCJDyKTMNBBakEDigLBsR",
  "key24": "2H9YmKSUZuJygfdSaLnhJNX9M2dbU5DoqaeAmjwBBRZYnFvEniQ7yDU4jdR4S9zuD2SEiWG1pomYuK29AfxPzgAd",
  "key25": "4zUG7gbengSWzoRMQXhE5eP3pG567GCCrQrREGnn1CKjUURirb3CVn1sq9pf3GesppQKgg83VvfR3oW6LphYKJvo",
  "key26": "8aJHwUu7VM5D1c4K29JNbduL4JHda2ST623McEfaTfkRYyXUravspTH1bmFeLxuqCw3trdajapi43j3ZhGG1gRJ",
  "key27": "5ZJF4y5XYx9wD8gdHdtUE6PiRPwLsKBhu4ktsczFK5fspCFWMoxjNgryPti2bJZpakv7DisN7kteHfohie7yNxWG",
  "key28": "4xGobouQNZLH38XsPgjaoGzQPoRXqKBu5BLf4275YsnJoGCJjnUiJXHtbuqptTyjoShnWhPRgmm6knnsFd5AeoQC",
  "key29": "3RYU9sSRbyD6VBpBn5F9kzekfYGV15TpcZAupULv1qm2MqvNBCqHskpvHcHQDwxSFH2d96UJS7utaumk67FGjcAA",
  "key30": "4VPYaaro7eWX84WG2G1tu71fi6L6mdFquU9Ub5e5oF7VVdiftK3QCzpvSZEZC8yQymkeCttRrSWHGMyPS12AZYVD",
  "key31": "3bA9QSYZ6gkTkK3wMfaEYnEgTfj7mekDhHaGorWNFGiyKErKtpqeG3Sgx8YZu3gWcnbB2EdJCJGwtP4WhJQMnioD",
  "key32": "2DgaTpygxUscxUXCE1XHoc25wHPYFaTi46JW48XwdJHK6C3uPSNscv7hR4mTL1proKeL8gxS8K6drRmyD7xxB4XL",
  "key33": "BTamD5py1DraWXKBuj3fSdDL39bs9fSworiPe6e6mWuKz3CXNUu2JTT5FCsrMVYALwc348LkkgcFdnMxSg7gXNA",
  "key34": "4GcEUJYr5wfcouqZYeyn3LtW4jkKZWW75KBKCVPm9RCoRPjDmgz6fio9Q44d1Ls8yDSmXmFjnVBEAB6nooC4ufdx",
  "key35": "3WhAoAULGnMtPgD8WoKuA3MCuDMPwN6xMtp55PWF9Vj4qXTWYxBLhNiHB3A8NMYPmzXizZYkwkDLhngAM4DzuDCc",
  "key36": "3o89pd3oSD39wRykgCZEh7jJJLMYwjitro9jgMiGKHCoerqRLFVf9Tz6JMUi4iC88YWMjXvF12XLVS3PanUPxyrF",
  "key37": "vKvqs4FfvV5ywNnbE6KdFH7j1J23dCcFmXF98b8X3ZVPk9Pk87DHmWReTXELZjWHViaEvoFrFuzXJjQmDB6av5V",
  "key38": "r3jrFTJRTanSZw8JKnup78tx8HewCF4MQ3GL1b6j4i28m6NFVHazRdWLp3BAETtbhVwvXGesKbtpYj2tZ7JJsKV",
  "key39": "2XtMZHwQcc1vSLHp3qyVxCGK2RJxoUwj6dFi6SqK1jEtSvuuMMtM4iv1cSCKb9VCy5x1H2BpJssAgdCVCj49SEwg",
  "key40": "5mCt4jSnAW1bcH6RxXUVRrXUTAT6G6T7rifNgKCPWU8NPsCKBofYGEiQ9JRtFisF8anMgWGMgWTFErixNWMqRvBq",
  "key41": "4LrLcWek98WRJMR5YZs36yo3Pq5yFzn64WLP8V5LNazXMZPYdaoU8zwprbww5Mby5cmcZNbG7FAGTh1EXFZo3YBb",
  "key42": "3BAGpYkzkxfvcF77zHRZkq6EBwa6AgVQo5MtvX877EpmaY9VZb4WVeTesRcfh8Lah4UTYAZvTfQrpegbZy7YEAdo",
  "key43": "4zN9AGNUnayVHKq7jsPyveTAUNcKC9FYGg9Zw82Sj6D8YXdpdDfpw9vHNmiBkNzc1UxMnNP9gMXvtAB6bA86fQcs",
  "key44": "3wUZqfLMBFGZTuy4xnxyK7wKS58fNnV6crT18yNcHg7aYXhZYdPRqUZVuUSXpW24mbrcxovoxLrpE6WPj1tFZD1j",
  "key45": "5pyUtgemsVDHGHg6XVB4jqGzYPbZERva5RxqXWsH873QYScAMSVobRA939TbV2TaNLB9ozhc4ZFXUyjXfrsYZdT1",
  "key46": "omiiYKRHjvCzUfvM81gebSEbQbrNydbAVSeHwzvBzWLhEbCRiPEvLTwmia6ifpeZ17p1jDMDFzuYhYTA8rNxrxX",
  "key47": "3BSjXpnNuTNbxQKTRWxTVYYa3gBd8d12SDXB2EcaAXNYCUkokA8qSfbVKycptQAdR1yWXQGuYYSJtAvsXNPT4DoM"
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
