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
    "4nD2RHjnYekeK4RFggoh1pH2DA8x92f32yrBoLdS5tPWrum189uH3LFfEFYFuZL9NPQbtQb7MNuyRgrL5M55n5Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhTMoRUQu5nPfQehFJsmFHYzzEoVBqU4hLvyopkL3xuJ4UGxarwjVktMg9j6XgLoYEt68Cm2JkstibUiMAeYnso",
  "key1": "38bV29akkGpPBTGYkxkzGdJFW2WCqSzWCwTw7opKhj1eKNBGr33NGev9VMSU3FqKicX5RqkKDH5Vx8y2PuvEN6NE",
  "key2": "4VTD97KP3kASNaHM38931AdgftdHnG5nAYzRt9mbq45hBB5h8F2HrUfc5Mwx6X1v4UAtck5csXvbiugyjyJaQZER",
  "key3": "7kU3CFiYJ4adNoJKS5Py9zdwYnNHn5QWKh7rpRL4UqVr34LcZhfCByvgErT8xFYduwM6aBSohrYsjS6HaEx4mRV",
  "key4": "nQeLtFfh6CH3CQkR5RZtdqPTgSKgaKVDrw24LrYhqpEP4F6AogyyZ3cRBmqmiekhU6TvzJR88bufy3ha8LPNpxo",
  "key5": "Ky2rDsAPYKUP9jW9hBqRUyuCkw7ZQuK4hn5GCcWoFQLQry1ZmUHMK7bpzZcQ2feigvvJ5FPENPVgtKxyQ1hp1A9",
  "key6": "5eZvscsc1Da4wBCntbb1enBnfahrThorkzcqUhJ3q1ky8AZMepHQ9hAUypa4FPYGQdo4PH2essuUugxPJM5HJ1rw",
  "key7": "5zxWfhnaTzeGo6N35XW9hT8km4XFMT4VMibp4b4qf9yCuKtsAix6mmbKDjPNCNfwtFibKfAubA6BzVaLydqdUo7N",
  "key8": "4RqZrSdUUcTkSMMczXAri7oAkP1WTCwWc8E7Dmb8QCA8kfUp9ozFTvrBQPpfQenNeXfLfH5mkXmva1LgaU9ppvQa",
  "key9": "vH5PNdrKG8gEsNSwPZieZAr39uD1LbmLfdQMeXLfGSiV69hDGMkoTkUovLzwCmn4RkW6QiFf1D8QCGjPnSQYdQ2",
  "key10": "42RrsTySdCFko1PK5mTL6hEiZ5QeFUhNkJGZB5opexKMQ2ZuXSApkMATJWRhaeaofUZkMPBJ6GtJzD18ENV44eXW",
  "key11": "dZET1W74KYwLqVzhja2BYJv38mmvxCAJazBi5CnSC2dpZoBR9v2YHVKMtLWPbPEeF9uy8Ze4A7ZSwS46qAdYEC4",
  "key12": "5L67acnSWs9q4hsVDnXLmYPpoRVfD3V5veFc8H2hmns3FreSRZqQrjGyprZEgRRmikMN9edkie1qwkzLS4D1Rq7n",
  "key13": "5h15Gj6Y8Rdm74KTurb7mDmK1ifoK7Ujtn8zaTxysZBd554cJy91SLK4VMQ86bMXwZwrM9oXgDYyC4EBgsx1gwzt",
  "key14": "63y4A2i58bm57UPCoyu4UdtWjCe9qdHrXxSKTrHvGbxAvJnur9CLX6GbzgtCsmApkS5UBFegS9H27UfM4YRvoe9g",
  "key15": "49wYTr7nHdrgJZbjcysQek6krZ5Yjdp1E5mx2ZnqcjZji3gyS6pxvuCcq9USpsp115GFyVPi3V1oWJBzmEwXELeH",
  "key16": "25UHLLdvQCFAuR9tEKRB3zg9q9aV6zkjDqFaWi3cGB8ag5cok9XsGzsrtrnSquRktCo9tUdjBLLV82ysMqSCZzLT",
  "key17": "3nNQnr7AQcNoHkmV5pgaPXca3bEkjQZZD69RmvbnjTtiGLHDFrFFiL1HoLELBeC5v6swQtmPw94Wd6MtP5QZa3J5",
  "key18": "18q1TCSW2Fwg7KYtG3yi2BxpN2doSHWzKZEC2AWMYiBjSvu6xeEWzQ7GF869MwN9zudpHpZ7GSaywEENsfpJ5PS",
  "key19": "24J35Qq5ZBuTQgTEoEVzi2dBR2DFaHvPGzm1LFKiVyWQCmfQBaaFw65NDWqomRJHqUvfZJCg69WbJN1X2dx1eijL",
  "key20": "2i1bNUAbrHWvMvMeP94d5gJz1RYdeRqJh2aJVXgtoQd6LQTo3He7rwMHFuHGgvBcbrJBn8Sqw3PuNEc4CgsgzTNo",
  "key21": "43qLVEjTBfAUEunu8WQG3YRxytSg9ozYKw6X2Jyt9Gr2A1DSbRWmcQdPKvnZE9HmfTmjgnzrjdtnw58amnBSeNTt",
  "key22": "2PQr5CggEZ4G2SjTT1VD3Af5r1zZhStx22niSxxnzpb5Rnary8XiRKor7RjMFVWT4QJ5JskF4Lv7DkxeFST5uGY5",
  "key23": "3yHQv286GFwu8ELm4i47yp4pppMhRLzjvVs3upu52jTxQ5LUj4MrvfTHgxvgHBvnre8dtoSbCgffner2juYjUHeD",
  "key24": "3eLCSCFxtfEKEuSL71AGjVrrnthuhoJ9LGEgEx5K7gAEfzbrZH64W3hXyodqhtcu2wLSDyZqgjKZ7ZuXucStCS3A",
  "key25": "5QA4Y33zyVQXWCUCwvaNqTLurHoR8rze1gxZF2RrTCo2vTyBAJQPNuXJK34K4FBye3sbjdfdRfYesSYTJQJU9fD3",
  "key26": "4zaDoV4gES1VSnPVuTYSLxHsr5KXgtXfNLUkySBSiysnP762td1zTT3FXKyKovGGbThsStKQBL4JXMEQMJyCtmyk",
  "key27": "5PwrGXrRxCxD8j11dH4Nd1yQyp2Y5jprRkfDcpPeRpGRC8wXpFDhvBRGMsbVVxRHParzYPeePrVNQBtmjTNCad2e",
  "key28": "2QP23ogDjznzoRX29WEqL9t7a8C5xXHbAio1ZrijRXRe3cHnHdY6k3hSyGt81pavviBHdFKjQc5agVYdHdwNmGr3",
  "key29": "52rNHxzctZ8m3HXaF27YVV3n8rhyHyhsnbMqwAKN6TLfvc7NsS6dxqCwkXdhoZZokLR84NWrVL1jnqYaj8H5aviC",
  "key30": "2HdDSHMbwvkUSKeE9gjMEhiZxxkfAoRZXZdZ9g3xk85gzDUHqb2UowkYy53wiz8nGVeUHU8t7cKYVk3fqbFQH7hB",
  "key31": "5shwvuoD1PSVEWaLQiKZHJHneFFHyfVa499hDLBPLHZYBwoawt6kttfY7n7EQ4WGGPrki8oYzwzrSSviBVGQkJtZ",
  "key32": "4R1yAVuZG8GGhX66pWi27RhcWG4aqo4xXqemWk2ofu8K3ny2fjB4axRJT3RitEmbyPnYUyhHcLz5z3S5dcdVRwQH",
  "key33": "vin9uqe5STxGKPsksXkMucPVwi1m9aS6oZdAw5o9Sv8kai1L9bQPaAFPjFhRYFiKdhPEDBxpbnd3P4DbzCR2vFL",
  "key34": "UN8CAMCoHawRrgugkKE7Nde4dLzySZjX57feQwWgP6veRNCBh8ep46nYEfQkJF2RC6hNroQDuMeZfTKCC5KEw2U",
  "key35": "5WENt2XNrwhVPVeSdzzJXtDfxRJi6YZNCPecvB3jn212Xy58EapqpsVepdMqLW6evgyXRDLaQneshWFB9wmA1qrQ",
  "key36": "2sp1G9vDuvpMHzwDuQmzjDfN1YRepBLCWTffP6Th7TgJJ83bCv2bUWRydWa9CbViUz9WP6bjsrC5B3YiR3jcbaaZ",
  "key37": "5yx5U6zz2PXcTG1QY1au39ULmpvLMjojHMq97Jf4bevnjxEe9cwCPoQHFFfBC1V2XL9S5pNuvWsnQ7f6Mkxcxcqz",
  "key38": "29Phju3Hq92jUY1pjPFcEPLBHtvB7DcB26XUKokCXq63e3vukVTktK81vzJfXuMS87n4Xx9T2a4ft1vCKJyoXH9E",
  "key39": "4KdkTGv9ToZJf9e1w2C6eC1ChPVG52zv2PFCUozBvBFoK3JAeXjPaZMhxQrrcd8hfBcFd21HwNpSJB4bVyTwQ8xo",
  "key40": "5mxBaikap25FLqqraAzJRxNaZjeMmsMSzp3qfTviJpxpHaqXfzSL5otxHGVGpKW4Bxv6bDgronCT46e6CYtVjSFb",
  "key41": "4ARy2VFji95V1RjBk2gxc7gPT7eUS9BPYGVoP5xsSa68WkExo42FEJqMybsPBcp7vcwjpCZKPwUkxcRGw2KXaDpC",
  "key42": "289iLpeKZSWosKwbXrTg5hGdBCGSN26ToDtMveCHxpGML8wvym9pRu8eFxPisQB9Hi3RCrhY2P47Pt8h7k8jnbLN"
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
