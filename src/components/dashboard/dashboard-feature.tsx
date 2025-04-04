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
    "4T9ZT1hkiZ8kXvK5NL4TZdh6m9NXUHXcMpApLGYZ6jjcQC2YMAzmVmDYJgKa6SQQCQZGKDVfKHu1ddy1wN1HxhtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25KJzFDVtmaygxCo9FuZEd4JehABHbtwTUQ7XUyz6T18eLekWm5s3woJhxBadC2v2QCVvSt7HdKqDNSmATfyLahh",
  "key1": "2FgkN7NhDZE1qw8hjuQLtanm4iqMGzxsNRevRappkM5ATwzL8ueJVTHTEYEYFAcCbMHEM68m1PCDhUW3nzvRDWqs",
  "key2": "61cVFcnSb29oc2HYH5YTpTywtvyAavomq4VzcJKgyHy2CcYoSdDE8UkcZjc3z3Ri75pMjbt1AL2kcJddy1mi9rBp",
  "key3": "2uEHob2xfpDWXeWrnhEvjjKUzBGYZ8zgyiSYFEXZYyEch2WFeRPqSrB49GPxm4TRrAjjNBhA2kkyygWykcuu2xv5",
  "key4": "yiqQENFQtzM1d8o8K8keFNpWKoc5xwKmZeWSaA2ro1JNRUcEhAtkoDCxxjaZXgzP3VojmbFPEeptdGoaJhxbDRo",
  "key5": "5TPvL2DyGLbCXeH3VmDmzp9yYjFpQWx2EuNpt2ro4DDkksEhurwKCPU8AXQWG5xmWWMFZFNjjk4BtJnjmzr83KzY",
  "key6": "4a3Hskt2jqziCsEdjZa42SJD9HrrFbCVWAjNTFwBZv1CtGFPE9f1K6z7EsxKycgYU8p8Y1U767QaHQGPmmjW6V9W",
  "key7": "5kRUeRQFEWRP7BwuimMtCutFgy8vPybEUKz4Sh5MXSfAgRRt4hVEMdWdcCT6sQM6nyuzWjAbwZUXWZZVjyvgqJUE",
  "key8": "4FWLTPffDKyfD3SU2iRcwaqG68EX9gnfoVKGA5YvuK2Uia15Q26NDjXhgvb8ekjnfeA6L47Q9jLJYeH4DP2WYcdJ",
  "key9": "5wnD4DZVt2S4tr8Qwj6nRb3DGFnbvf2g4Gr7YkWVHEyGhYkTwXwovNvAmL1sMqSMhDQDsGsoHWAvjifhthq4AFfJ",
  "key10": "3xvxZeRfpXUpELNosMtQ1KJKnaqY1dsPkvrQ6yvo9yG9853pghjMRx3BnzCFAB8dv9MCmEakexQusM7cbURZXUxo",
  "key11": "338tzukT9fAnQTGvcMnFDJe6GofWgoB2YZB3p2TtuJ5WcqqdhPK1yStR6Uxe6HdaETxFRJDmoiTomKkFR5gtMiNb",
  "key12": "41wEZnrTyG3VK9g214dw2nTkhjhD1MDGjzDHDR6rbHCKqdeQqcbXosRarrW9NR2MrJoToTFt5tD3mLAfYrV2asC2",
  "key13": "3PeK3Httmw4avMYNC1o16uZkuGMfhHUFsco1dcYXwqfp6gop9FU45KynkcVPQugTf7BufCWeopXKK4hZeBdMbnVF",
  "key14": "VfArMV5HZqZDFZnoRCPTq2SSDTNfcvoB5eEFhjRjdrmmuQcv11Ygx6ZQy19g6d57au63kkzviRWsgGbDqmKqcsr",
  "key15": "2zpSoMRHHaAiWDAzybH96zLo4TZiG2G2XMrjW6uMKbNj7vGD9zQi9LtcHiVxd8VrUBsaCtAhmwZPdzwNKVuvpuDj",
  "key16": "2sie7wn9ftajrer8Jieq7wbdPf4g8uqGJ4whexrUerJGNYvwPdEBBn1oqvzwcyjeajAHuzcSWbweqSUVG5WwjzRr",
  "key17": "tzxQgQFogWYVuU9w18tRZVgqkFB1h3pb49TYeF5n54nHK9z61xGpX7JvyKsTynD1i3tQi7GRycC152K9to4GS4g",
  "key18": "5TWbtDkxrCZgjsYdMriUGe92VfXyhFTZ9tt98Ch6agYyZqyM1cNvw6jLYsqiq58ANoiJRkRM91bUszY7rfK8WnK6",
  "key19": "4Ya3XZLX73XUMXftbqc7mgVVdfwK2pKsTK56BM7dngkamQzgRrJHkuNUTGrHikm3fN7EEsjtPtznN5nrcr6kGRhr",
  "key20": "2AJ9rSMqrgcNCGf62ecYQMnnMSNhgHRYRt5sJWjd99Lp3R8uLiVbFP2AZN6NbncBrE6pWBPGeoaRxvRJDKasvzXC",
  "key21": "65FmD1GUptDfiFZT62zJYt6GTEbu6vRikFpyGiZKKKp8UEcV6ocFL8kw7hFq3zMgz1qbox5DM4VdK96uX84Z2gen",
  "key22": "29YBKeJcMborVcJtbHJBCFG8EsJYnpCpcD4t3hVxisfZ3M7JADKxcCZ2WCtVB3Av49xqNWGjm8XbrdU9gMbUsEyi",
  "key23": "5Vbcj8cZ5mRAVYZQYMka6Lp5Gy5yVepCMF8fmMVQtAfhxGadDQTFWMUjGsLb3VDrvF6bSd5gqpqAodV3jU5RFQxs",
  "key24": "2f9Z38H5bu61X6geHz5u37gRwVC3DxFnZbbQRMPPYHNfYrs41kDfoZKST8s3okqJ3nyXdkPhp98EUQe4F2y2pnTj",
  "key25": "4zTVHwZhHxTHjZsEFYfrB2i33rK6Dz5XWcDPEqQSePspRe7giybnNUX3B321gwAnBpricwbWhXip1XYfwinZMPBC",
  "key26": "29vW9RSgxZoPt1SexQWHZdTGfnvw2eaDDUxoyw7MpvMK9WFBzqr3uvExN7DKZnup363V1UuTPEEZsb9RANkUGEhV",
  "key27": "szz2xkzJZ5SA4QzTCRT3Rhua6ixqRwBJbh38vc13fD2my8tyMW1x9gsiSPhUPyaukDx3h2ExefEXketdZNtpaBr",
  "key28": "ttu1ZC3ouvB4uH5mM7zBRLCGuNvFnMPA7BbBzEoR7vyQxkduP88HER68jKU9Bwu6LVyoV2DChTTPQm23UYNZ6NQ",
  "key29": "3RtiaqCw1auirxB1ztg71Wm3LR2TB51GYWAGxXXW8ndPaLoKuVPqtt2GEm91VaNTtjHEbKe4LLGKTQVVdzPZR1wC",
  "key30": "5jXLQkNCX8qc5P4Xf6Bhfv5PoCHfmnzmR2CY6w4cmKfK6PZu4ujo7z31i34sNEAx1WfUcv6Aauzi7YgeYcM3wToC",
  "key31": "5YK9JVCQfJiwWbG64LGUMZXrHgw6GGqp6GNyj9AgJ8mW1L7S1KCBuprPJyfctnnnqEgyZ1pWmjHXcFASuZCHGHhd",
  "key32": "QwA8kzeexrCmkNyY8UoemhtffvBrRbryyGZxhYsBoVXTYSZLDYyCJbBNFoncq3i7bX9RaNPA4q1XBk1eDBn5JXA",
  "key33": "5UvWTgmQoVeQ62H9LqiCVZQKSaeSnAWPgqauZQ4zsYwcuKCUtmDwrXexeL7vT96mWeYe8DfQJT2TNc5uW5WDUfTP",
  "key34": "2FZ6wyf865anctASGHqDqPQd8zbjGvsidr3soLAfHKGHQJBNpwhCqhXd7oNNRwasbiZWGWYCcpzzLrhBHSJxUV48",
  "key35": "4CsYHGHpwLf3eT7JuEWEJf3fFYmQhCULZpsXrHEf7Z6A4SmFybTsPKr8Nd26MYK1xWx81kfWYEauiJxf7jhpzBZM",
  "key36": "58767PgQ3cNhACrrWPQNLdFgtLysTZVezEGMqNLK9KkhAWLBF1RQ6KCubDqbwWL7dhRXuN7JQeCwXX3wKbGBrYZ4",
  "key37": "hUQs6Nvu8JQ2i7ZYTpuQRToSJYKsdnabHyhNoPdMWXtLTdUNH3e27DNPV77r6ZakCGHvnru3fb4fm6jV7B8azLV",
  "key38": "4bvnfo1HhfPCtwCs17RPDyGfU8Y8c67WP8BUGNze42XPaiEAhCpoQ4kmEF6cZeuMgJBYZsoo2cGBVunfpNvHA2SH",
  "key39": "ML8cUKhynUCdQAwZrgYTJfqBMk1pRGNUi1iCsLBaJoyYNe3xYeAgGoxJh5wsw4EUNqv7WE3cAvzU9XYSZnrmMsF",
  "key40": "c1ZzBCYoFCQ3j4uXKNSnUsXCWE9VS3JdYGcXFFXX5C6AS26FtPicJw5Nr7817xqWC1M4RxaitoF3H7EgkonZviT",
  "key41": "5GsJF5RJsYVWBoThKaqSxzePuP5jkfLiBapp6dPQRMV1Uhcq62PiB8FLuzzmPM2omoDVBxWU1aEB5m6ShYxj83em"
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
