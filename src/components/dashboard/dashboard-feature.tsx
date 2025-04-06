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
    "5WZgM5rZofheburHe72DMjiZowuabT3yPrRk2yfozQEenptCBH4dUKWx77jCiDXyvvmZ5g9HADWYwUdyRPDeKhE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PtBcEx31FoY6bBbsJVHno3KsuoLXY3k2dfQLJau6h665XuHj9iCoAvoJa1nCNiAVX81YpBzjgPnGpycrbLuhc7o",
  "key1": "23aKa9kW2TaqgEm9uChLfMHTJ21MB42y3xsXYRh1d2zr9786Nz3RRtvP3uvFfAgLtwmMpRUVJKtY7JPqvpxty5T5",
  "key2": "4YvQFHQLEC5jVRtfYdcWcFP8RjZQwvt99Q167U8ukKhCFyJPX736j383xmp3KTkjPYC889PG4pjojgFfiV4NzJj8",
  "key3": "2367HWSsYwfKMokFsGKqyTYWMnrQwcBKB4LLeuyzXR5dQJaH1YxziPJKeA9QfH21EdCPPvrch7WbCy6CoNCREwZs",
  "key4": "jd86JGvHdoyk8y9ayfJ8qrKgY982gzvs5FoeJp5fLgfHmwjKHGqVQUxY6VE71cn1EuQNYBKyTva1Adu8RCFczZG",
  "key5": "3v9JAD2d6TLnXDx6NaF4bymLBK5zDa5kE2j2XV4HxE7iEhWCyaN1Ub2jBQPvb9jjQ5hpBvzJ4zmohmf4ACjXJgAr",
  "key6": "2jrjTLqrfwETMtYgLratawFsYXVH8XpbkvPc1DsVPpAVd5XBr6SDNoiXqZRwQ6tSacZ6o1XDPHrsUHsefVYTn4fK",
  "key7": "2Ask1Kom16xvcoEXB39rcpaZaJkJ6WnaxG5A5LAPaXgY9Zxk1vuQaJBiSshAshgck8S2cZRbxtjE2jCbJG97WNhz",
  "key8": "24BGFjQhpar1PL6b129z2KM2BvBat8sPbpnZ2xYrxr1NGyZXMNfr7YGTifZW5F3rHuPedyyNzJcbMq6qbmgZLqyq",
  "key9": "AQBvgoEyFbddp7cZJwEYUMePxCAnmxoKpQ67TUmQ2qqQJBmctPs8ureT3gmHGrfhrJgoqiz4KfjhNVXepkF1rrx",
  "key10": "3tzabVkRkRKdyf9L59bTWrR7JAj4MjuV1Uqw8bJZ23WiuLBUdAyBue1QvYK3HPdWARN3fWJs7YiNE1SARGSarQmR",
  "key11": "3e3BEDhzGAVFzvPZ1QshZRVFRDpbCuKDBRKkmexb58UCiwYSgbY9AArXHemj7d1LXgZnQtHp5ho2KpQhxpTX2EeH",
  "key12": "2maRXp3MjQ1gV2WHb9kfcYndRJVbBv2NLncMLKiSUzNSiLb7KC3K9Q9giJGM7cYB9NQxDYX3eapasBqx6pqVpxXD",
  "key13": "4CJowDDKAWCUCV7aLTX7kwGUC4cb35bNundcP8rsd7LymGrjm2KmxyTKuUBvZ62CQvZxHqgJg52X88vtRoiBLRsR",
  "key14": "2LevTnhJAJKwLiPT5MDKeL1gTiXjBtU8nunyxdqFbtf9fFBwdr9HmTa2Y8TQsTKVZWeeoPmyTYNYex87FvsMbBYP",
  "key15": "4pSjwCVwj7spaCYefigws2wb7jeGUNm5dkwUX632V9cRM8y1YAf1E3XcCDivxbVGaxJGznJsYaJZTv5gTvEW9ZzA",
  "key16": "435sgqQziTWFwSRb9MPzGS7yERYbBE1cZgG2rHBzfqhurMcrUReFG9XQvcCpWU4sUG75wMZ2qwsSs6fs8BMjppz2",
  "key17": "4Hko9KVB8w4nzci3zRa1eSWFH2oZMAuBaVkdrNnssgYZQgBWxPcabnKZpR62CFMrryM3DRzFFb6G66oQnEExAG1L",
  "key18": "5AAiyFcY4UHFC1cs5PLTVYp4JRAevT9orQwKYvC2YK39b9abXQEZnR9ULQThWTshWRNpoujjWDE91oyZrrzjebQ1",
  "key19": "rcdByXZZHhWYHZbUtKZcj699ccfa18EdmeV3mmumUncX34VY43jDbq4vyjsgPwZnYPiZ6wz41y2nZWa5e4q3BZw",
  "key20": "3CkUPoMxMiLsYThTRDsaveKa7xiW9RrXAcYGzdzKdBauFoRGUmSQYCJ4EPeqpeStLfQVx17hfDCM16AkfQ5q3rTK",
  "key21": "4WrSGRJHxBESsqiK2eChgmyomDpYP8kSCk2QrspemsEbAJ6GRGf7MqXtqw92cw9uKz4Hy9vREB8NrKF5DbziwiZG",
  "key22": "5iwpgmE61WmbGno37H9U3KmKrFJR8wvVDKYGcMqDjHB36wsozhrhKaNt9qa1nCiye76t5H5mF6jh6PzJw27Z3NU4",
  "key23": "2wrHHAPGtVAotw5hVqc33kEwBUJw5gpeCeKEfJ8BUjNkNnQHqEQ9pMqMMWmmAc1o7WMipKwqcqeKM2Em6MUy25w6",
  "key24": "3UTcn32TW7i5H9P6UNxdNpNvhXaCNZTxJPEJvuh2kFfcBd4ZCYESN2vMKELhzjQcyFS5vCy1s6cT52WVa5wMVazM",
  "key25": "41Zy3ih7SXQrqjC4p5b9rdNMis6ArvQfaC7jU3rqzDss8DehktSXXu2VVRqSdCnkbHzidhdGxzrkns4yuDYxdh4H",
  "key26": "3JE4nayDDhcBADqHCYjQDsS9UyBsyy4cNNZArpMh3Ev9v9zBG4TwKrEh1dkN4xRHqGYgdNcmsMyPbSiGhkqfB3a3",
  "key27": "3vAQtLYru43DnBRacgxUTvoMcNKZtTodfvirwAUEFdjCaFTnBLy1DbvmeWy66BT27SrspUutkSdrsYbwCw9jcrjb",
  "key28": "4wQ3RBMcfYfW813cStQNGiuuASQcnWKPGjXFwo6BUUJ1aZ5255UFBXz89QBj6rHi7bBmXqAsDqqXnaeRZoRGW9wD",
  "key29": "3s5MUoZx1ubMPF9i9ZaDK5FgfdnFzRek9FcVG9bhWZreE4UqTaWaZE4oS6PdyBXq2ruacGoiy2kWt4q8NeZwZBB6",
  "key30": "5eDFp24qYLxTDa6oj1QS3UmkhmJRBdD3rHU7DZsMtQr95hmSPoiTJ8UbJ6WbeXV54ZHpmKu9MCwViYbQU8Acif9u",
  "key31": "45QFL8DiUR2uzCNWHs5c7hcFyB6oujQEV7JTUEUAbWJc7yudW2vbZHavqo5bNG9Y5DwPVkSW4yLuY5DAkGVLLuAe",
  "key32": "gzXih5U5sa49SyB1cxAHgeoxUQuEJ9v4r8i2XCAoEoJn3NTVYmeR8pWoueNFBdz8feUFac4dWwnh1hkenxyktto",
  "key33": "2hHQTeVMa82KxTHXyJ1Fi2V3QeXLKnq3z3T6Kc1ruUDzHZ6QDp9ehnjPL5XmZkpcKjE8JcdFE2BhuGHuWTMYxuWy",
  "key34": "4vGZHwJicWTYRPEG2MXUEh71kmkdHtn8TbnnxWHHuF6Q4e8KL33M5nwxGAJS1TyF6b59QcxoCQThGrmiTdgaYkA6",
  "key35": "4cykcd93k53zbwNRTvqGquwYEBYrR3L4oQ5F4ogT7P9FZdW9bPPw7nnJwX972HGoipUgaxRqLvTnYvgrpoDQCnns",
  "key36": "4F5uQHtje54qXndMdmz6SMkNMPT9UMxitdNrtC1Kgi8Jon24wKdcDfH8n6yuC165Gxt1vws7Xyb9iiPCf1jPimL8",
  "key37": "4X24zLPmihVQZzPFGp74idoQEdxxX5B9g59RJyrj8yXkDPN9L1SS9r88FhxhwTjuV8dZUC5PCobZTjbJWPmifkqx",
  "key38": "CwHotGmGWj1s3YixowFecPeiz2AdVxmfEWz2aWM9TP2wj3QFKQ9sYp7UgAnRDMUE4nVPQcfaWc9djjzkbtrSDhB",
  "key39": "46Kwq6YqsTAf9zMW8eb8JbbYRP2zjhRNCB54kLWoUPxrC3fnZZxA4za9AMMxmw6e4HkB5i3g8aisgKkvgcfmGGQZ",
  "key40": "4cf1c4xoMe6MUgNaiMCqYsfGD5mJgM3PSvVL5Hrscyn2TiqBTaHZ32T7kyM61mjT18BQTdsnkPQwWQjWUTS2u43S",
  "key41": "ezy2SyHRuj8qqYTe1V9GczrY7HHD4CLX7r6Jfy5qU8sqxHASLk5XCinkRkrmLpcthvbVackhTfAjhNiMkXtxEcf"
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
