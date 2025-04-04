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
    "Jm3LLUh6LVvBDBGc7Yt4myLrEU9WWeqKpBeY9xemf2o832CtvRtrCfmj23NScf85DRqHbRMvSJa5RpiGvrJSikR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KocLEs7Z1KKWheakHCWNYRrV8V9x6cWM62ZzmPdo5FjcabwGPWi6A8kJzZcMW7iPeZB2FroZiq7PTBpRudbBVg8",
  "key1": "5BH1FAB73gwQZUQkfdiGh4vcaPC1C6PkGX5PrMonRv1Tw9J3NGAZ48JE6jVKrfkbRtXS3zq1JQio4yP7MvpyA3th",
  "key2": "GYReqxBgkdmk6cfhk2RQvXjrQ5NvXuoRXUPiRrBgmg8dYF7CZYLxhsM8poRRZqekSnPyN4NKpmzvPR52jKuNBe8",
  "key3": "3pZYTsx9pFYqSAFiq2GyYSYQXf7Pvfi2gMgQviqomi5aKppcrmJP6pdSZ51d9QsqYUGuDytvW3d2EvUBSGNJvyr2",
  "key4": "Y1ZHUrcW864VPDZwb6gRPTsXiwQy1PBXc8Y9eoDe5xSAyAuvdhTXCiLenC74HkpnT5ov1BNQnA97W173Lzvxt8w",
  "key5": "5V1P1J75kP35oWGmcNspkjup2bnDvWCmbBzZCnkHLa5KE4e1oVV9gYeVrwemnAUpJYALVNqtFwtuvDJoLmbxxBun",
  "key6": "5verkyGog5niPKNR3Qx3vfqfXfF7YNFtrbeV2mNXp4LU4rSvqaZzDKvgFB7zYLdYs1RDLSzHa42gW78Y623ZHWw8",
  "key7": "2TwPJVaEmCaQgMR64wAZsG2sW7ik3rLcPL8CZY5xhagRV6QtJSFNXkaFJZYMzQmqpZHQa6Wy2Z53SkDVHD76sNdn",
  "key8": "wtVaCgorA47dFXJhC14sj5XgzsBhdkW6qmGpyMMigcd9hs2HAXxvnAjXeFCKnTHdsa9nov6x1oFrgXdnsPVC3EB",
  "key9": "438FaHXjq38KoNkqziSENDxbuQamVbgFPBpdAPzDQoYCuPMtCtMG5H1GzkhGYK5FZ8xHYfN8DC8VsJYGPSrMwU3m",
  "key10": "38HhwsDhHFv2wt42oyJ2JYjji4cKMXc4gh2bpQP63wguLmQcAmsKxtm7DeVzppPwQv1ZWxk7fZ9b9YW5EeLkw6bs",
  "key11": "2hk3ikZvBMBEo2CyJo2SWZ2WXgANyQ2Xj5SC1ajVWzKjFxBPqMjH3iBHvo1jHjdRBVMuT2hCXFkvXy78WhDBaoNY",
  "key12": "4TFbiNJrTLf8hLYgBHJDhmhnoFymSxrLujXSqjvhPC9Wf8JDJRbeLMMPS3FDcbzN3SjzJTWcPwi8UHSiMGSsNXfm",
  "key13": "5FXZc9p5AGLtuEzTBdQCfSHfpR1BjS9Lh3GmhWW5gW37myAXjLnSohepavc3dEssEzpjdtX4z6o5PVLbNcBfx66M",
  "key14": "8wg9dhViXFPEXhCzTuh9hGFmWRyUzpxms7eu9dr5QqLryUuGPaH7oeqMEGYX6d5A39xLyADteNagXCggeu9sbXt",
  "key15": "3C6ZhFGVYg5tjgqzwDbPWnXyEi9aqJPVAsnhPrjpYLUYjb64j69Brunco2bjJfttT2R53RVtSNeEtDSCmZ6eYCN2",
  "key16": "xP98kqGV1J7fsh3iJDr1w3u9ZxFYTdwpTcJBQ1ULk4jhMTEfZAK3EsFUBU4713aERsbNP34uPXKBvCd9SJvTLpe",
  "key17": "5aYinesvnQBxb4FQ8w24aobd2XEr2Dbb2AuTvvabRKJYh7PnuR5RrTMALgaSrHxPu8dJNcdk5vxgrE9TP5jugxbq",
  "key18": "3fyJEGM9Uf1gDN7XA4rMtjT2hWSmxCM79SYTxKBqyqUo48YQRk5XKfcfTpFC6KtUHNdNoQnogGGmB43GMrm9vmjK",
  "key19": "3iNQQpBbcUrSs8JEwUXS2v821WhsF7iADUZ24yGiU4FLk7gbbpSgujwAeH7zgccy78Gy6MADK1iRChPMFtErymRx",
  "key20": "2jL5WpUJL3dnMNhgj1JijZY74cCVnqbxMTAdLkzv8ixG82X3dnJxRvn7dx5KqW1gv5APXPSXH89E5LLjZFtNCTTy",
  "key21": "65LgNbeFPeahheGsdCVMBaw761DqEgaQu11p9guYhEWdpkvHH2ZBRv89U2FpknnARfXgLp6Cgi1aarjLJqKPQvwk",
  "key22": "6SEf764C5DS4sA1aJEu2mchmeP5vVGiTnfDK2mdqaQirNUSgdTqYgLao4Y64UKC2DgpdLeEkzUQyyQgPMpLEq6y",
  "key23": "24bbNwXah6hCFEmXWfJkyk5apuHpTKS1nkXpBWzPHtxh3CfX8Pa145qeCnEqTpzB8y17MbfGQ67dkDUig3RGU2Vd",
  "key24": "3ZJxBShUEHY1Ruz26xy59qRZj5ehHyYiwBxRKVgYnh7GuWLpJ6UaMx1nEVEa79BPsaaH1S9Tg1HM15yYFw1CC5R2",
  "key25": "5MBcfSE1KkbxUcM2LKN2cnvH2PBqHtJggHifaE9HnB2i5Q6NzUc743LVBJ4hnKHrJ8goRdayTbekqV8mNFjvyYex",
  "key26": "4pPWegq4XpnYUmkzhQZv3gNzHggFNNfxSspNY17m7LdrAjt7SetEz91Kod8zy96aNzFQYrRJdodQo83WgxYsyz9E",
  "key27": "46QCjvg9PJC4WiytM6VL99qXBCujPRkU9RQrRXoofxSJbAs4Bn9B73VGRmYuEqQmVx5wM1xttGdiBF35oNeR6jPS",
  "key28": "RTkB1ja98VHTBpWw9dXToPYEFr4sw2mfCTmqGJk3qqtv8BccwAzzJzzEL9wnf6Z4ygMt7Zgmvv2EsUJJKYh3vi4",
  "key29": "2nRWufHqrp1a37gtxm8VEGTZ1PwxWacWGXfsqiYGUncnE49nWyGxGePjmW2FkRhwtfJJT7q6WozqmrUBrCDoRSEo",
  "key30": "48zqnLZvZ8SN6bVviJjd1L2pp4MThvkf759qWdNSs7oKFr8sV7ZcRsAu8zbJhspeB1crRBEWY7czpEZN5b9qjc5p",
  "key31": "5TjxnLpmNR6mSSrhtbHKiCq8VWzLHaxWo9Q34Ruw3SEVxCyU5mwwh3DdaoScnCHaS89CQxrZ93mZ1C2AZ1rSevVp",
  "key32": "2B454Ts1iNtJHxfB43r1pmqqAGbqXLfBbm9Uqu1rsFCCVgQ2uKrKFZJWnbRBRwoeMpiV5AjRMaSQHRP84z16fuKg",
  "key33": "3GdEABsfHoRJ6VW56bbcSgV3Xdr6EcWGjMPveFHBaQWeU316LKJqp7BhL6vCSKP9wsNvk6QUkaEo5pjDjhxJcmz",
  "key34": "2ajc8ANQfuDCmSDmETHgJaZi1SYmovL6yeYjneCPZF5M83bzoZcmgorDBY3tFBrv5GkgDzp4dNsSoqqUMsLrkUkL",
  "key35": "4kRdCgzpohHfWpfJLHj6FK9CBC1FCPVU6Db3AvbDN5s6kJbQbWJxL3yK3wSaMQAr53vwaXQeeeAmFdKx8DPRbG3a",
  "key36": "ZXtnJazRLs8xwGkkKQ94QmxgoSGRqoSfMd2UUzRF4JLHz4BAgXJDWbhrLRh6UTCpiKPzwZJY7gZw5azg43xA5Yu",
  "key37": "64Mb6jwLdfq683VDbVFkYUsDL9htfuzoM11LB2na4EyYQhdiZ4XCXaCBweFmDoHqPN1UwLKDAoekkN2u3BsE4Qgc",
  "key38": "s5vxPoAM1aAJqdivJTHbhpfCA33tgtbMH1Q9fcLmSCabjPt7qyzCZnccNMSkRck31kkfGDxx1rprNqe8Fp8h6eq",
  "key39": "YjeTqRCaUTfmZAJYbFNqKCxZ542qJmfWQxQPbaaa1VALyTQv5xjKn3dzMiG1y1QdMvwJHNGrsGhr94ULfrSqLgp",
  "key40": "4HPwhF1wgCrazUF1SzWaqNJb29TvqGmUcqGPhvgkFNuQ39kJ7nwnA7gdgUHuwp6gd1fgvH263TDKTXP1skVbbmcW",
  "key41": "5DY3VbeVtmacCQ981Pjr83Amb1SswXq25TZ8eYCfBSi4N6xcRiufX2NkyPv6ghcw1mqAQDt2ZySG7i2qju6RxeTG",
  "key42": "4B6tB6kemc2tucMzYmPTqzQk1D4zVVQmwjSzZ8CJzJv4w5WXun7g1nPuCLpAtpeFD8Et3HyKrSAChADbFQ9g6ki4"
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
