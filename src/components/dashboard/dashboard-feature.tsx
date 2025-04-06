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
    "j1VFbC6HSBCnyJptQRDKLPEPQuCxXhPoT9bmMu4eTpagtHvCGref7MEHcj99NgZkMjQoKXgpJzWQ7hgS3QYCreu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6daHnUX78hkruX6TSG8LXKGNPTdSUDjuLLQfdHyRb9EjGf6BSgKnbCzrj3Hg7BPbc746x61QzP5ogGz5AVBiV9",
  "key1": "4GfviMSE1yVT5kd3pqFvMGQx9MjLemicRDCjVVFBcha7VPPicj17BCmXa7Q8L4txeiyU2fZfevD1kHQY7KmnkoGR",
  "key2": "NoU3CvU9XEHUprfhWEVUk4THMdzY9Vrg8ApPZr1mqgC41aL2LxoHnhk6Yn6n8hiQdBNVmWoXEQYR6HTdXbRUeWq",
  "key3": "ERxbbAnsYFbnZCdUZKt1q7tkN8rJMB2xox4hJzM7AmqKg5BtnYtnDSKoKZZFLMt1vBV4mhvs81FnbuSbtGCH1ce",
  "key4": "27iMrfqaXwkp4ahKz11H3aFA3p3o6dPDF2JpNWf4pyMtAypKMFuHQ4xA88DjtR9ZVSopor2VWAi1uLaqJTTdNf9K",
  "key5": "4GdHffZg2jcNrsmto7ZiXgHnaxee5sPWPWfCpA6ggAGx4aCCR4yR8zziW8m3nmyqibyCbE7Aef5W29uWZrXkUZk7",
  "key6": "3okCuMKnrcXgcWCMxvLPVMoJ4pdqU5BH9cxsNjuv2H7aqhb9UsW2kMs2UA52SdZT15uU4yjtaDWdjJ7waxuqnBQV",
  "key7": "5ndfvu45PcoW9U5c4B4nvxRyYA52xsavbhMV5356CqwWTNEymnAkj6DF981Dbemf29Djp51nBkLdn79KPjUykPcq",
  "key8": "1VtoJnmZUnwH5nZaaeeKPSetd2YLwos422EqsyhyoSmMqDPenVSeuJFKZYV5fNBUigppJk7ozNMzuapnMYGbY8A",
  "key9": "5AKzE2UT2395mWKZg495qdjXCtpxY2ysywaUi3yRrjBamqsSSGab2bW5T3fy3ayrdjmo3mRn8bygL9wbbVNnxRV5",
  "key10": "4aisoQCYbVHJPZwgfVEUF3Q3kQXykY3GjQKcDA5oFbwk3T3GVnR2L6Mh4rrHT94oaFxY1QuckXHVBfTQEW6Dbja",
  "key11": "WPXAgHT4zdDSBg8a9TA6L2k7Z3GYtWf1mNTAyeCFcTafE7vcDQySzryAECio4Q6wn71u2h6Ti8tZ9MkKar3AncN",
  "key12": "5etTJkjn3wsGJRzg12tYPM84288xvotzFKEneiFriW3Z3bVfUBFvicauhKxkZX27JqTueBLAX6dDqzH1ghEoNQ7o",
  "key13": "21HYFtsnxmciAELBByBwuZbkL9Bn9f6gE5y98FKZzr1QgzaNSKJ7rtAkZB16KmmrGKKtsYZ9B4PUZxocgXaGNfXE",
  "key14": "3N5D3NsCCPUGfM8aPvZhRmPB4jTndcfQ7qo7dmPvCHRcJ8sm27BiUKtXor7xyeEYHyfe5toaxXENsiXtg935rn7Z",
  "key15": "5oqJUs4EaFmRaenohPo5EZn3fpN7XWT6pmyUvHKrkygf3REPjH4h26VspdZf31mBap9rpw7RpyAs55gKNDeiKERc",
  "key16": "yi1hW6JZUcxYPduTekKrxt4EkgE3dKzvUcUE5cLN5JKYUd4wZuWxcux5UhTK18TwRah17Qg22rwt3E5HZMtyHrp",
  "key17": "5uvzvurbZ1VaSqAvWgPR4kkdp3fZ41LrVMLdQpuxVfJrJniM5fantoMDdQrHhWNQHdNHyFM4FtkP12wxEcb13mRQ",
  "key18": "zVxu7o6McZdaAi8MEDoBNbtuiN4vgbb82Q3tA9KovCpaC2idYvDmmCN7p3UPq9mqavEsPDKn3vLF9x7Z8Dsk1qT",
  "key19": "4toYqMGbz6X2DkSaDxFR8aeUmXyLN7DrisG4mDPzsV4Fooi7x7DK5ZZ4EbgUYLAdeNJmosCGBsmiC837fN6KTVpq",
  "key20": "5MR96Ss3h342LcWdShxQfz11J2ZnCCXrsWhfSfMdP6wU2YidPRLja8wZoffuGmdp5j4VqDJC1BHF8S81aPLcaj6o",
  "key21": "4JBWjXPdDG1SzRRHRBRQrxhmxNYgkAqy2ayB5KC7TUgj4AS7H9kT6zW3VewQvBqCxVeKg2WjQpAiqnTaDef2uLQ6",
  "key22": "5WrukRrSGBkeU97CSrtTNqCHJ6jdB8MgKFYHbJQPG7Fump2pbfZLUqN8yM1b3T742ZREWKikWwR5g9ATHDKUebVv",
  "key23": "2WyqDBF8dgfeHUUiPkdKsUvX5Fb33fZ5UQCQQH3Jjoe2hQy5tuPmTXokhomAxED9pUQwEQffG3bsz74eR2gW4k8p",
  "key24": "2AnBXDX6gpZLg6wWt4RfdiVyfmU7g7PpE4Chpnfxe2qcw6hAi6Fwz6SvCPyoYQXD9cnvpKyHdHChW4qJbni1wBec",
  "key25": "43kgUDV3K15CQMouA6ftFg544PqKnY7Wb7uoH17mXgLNiDvn8kjHRM8HkqJ83xVQji2tcrpXeT3xszEKGMht2AgC",
  "key26": "4JEegA7wois4wEpQVSjusgjXEThMyTqN9BTbhUxFqxPNCbrQSe8NTgMs5EfUdAvMFUWZrjiNbUHmi979EwaKwjQa",
  "key27": "3bdPt4KrzrwH9N5DXDgbqiMzUtYZzorBU8zqT3sVCofgUcrbwLVHFMLoFidjYTSPdURei46kBmBWRAS1gHL6ZZB",
  "key28": "3hxcTWahnATv2hxezxVN4Pvuzr4BqibgRvFPFWcc4AZyP1duU6GAhAdpE9m7roEuQuSgyCDBpLKSVtRYXA9VpkBq",
  "key29": "5k9D37R2ubhTUsUDikkdWcb71mHcugtGyhoJ6FNW6s8PYF2fV4zTJRKTHFQMfrKkuDUWQ9LaqmYe8T6jr4z92Ytc",
  "key30": "4TvVn31H53yfnb52URwC2eiiZBteRkwnbcGTsRgTGCAAaYWvBMKEZwvmZ2V17xHy7AaMb85xRBCrrn4Jes4pL4uh",
  "key31": "3qFUdU8vda52kxnabkUAavBxsiboE6pUZ6qBm5xPpryadoUFUmiojzTs8ULGVeAY6TLvsCtnD1DcgepvDnbsxpsr",
  "key32": "3iLv9n8cbxKtXn8JuCQpuqPsTtyPekyCja36xMGJfSNeoxMASsmJbfoyBZ9kEjMANo64kpdQhDNhGW3URaTFfsMA",
  "key33": "3gCCuk6xDZ8witWxBQvFLZo9wLCgZqJKvNdRTmsrMnkbgg9Zd45DFB5U7wCSK2L5fRM7hY6XbvSHk87Lcz5XBJMs",
  "key34": "4jUdvMNLPojRZz3sH8K7tViszFRXtt2CCxLz4jBDmELVzH4cC7HGT1zRCYroCC8UZXYGHKphpA9zJKXLArCbFHdk",
  "key35": "51u4vxZfktRPcqtihXRe24WQbVXiwiqsNH1VDQ24wMcetcFFjooEjzZ8YDXb1unwtyvRBMZEFRFBraxqDFC9CDLV",
  "key36": "Ban1U5a4CdhFcJuoNvhVwTaA9nn6oH9pKCD1Qbc1qniEgMU9eJY2oqUUjVoW9eFL3XYNH5yv4tmkYz9icUm9G2L",
  "key37": "24Vs3sUKAXhu6L1b6dtvvjxPs7gG2CVHMD7i5pnjk3g7EP3RfH1axWVfq59NUpTmSMqtT1mJnKbTcrgrx44smEoF",
  "key38": "5ntmsb7hhBVLy4hf423Qgf7vaamCczdrdgPoFypH4TiwrEvcHnw6qUL1AxpfCndCRPwvkyaaKehVoGTyigsRMged",
  "key39": "5HUX9g6gjh3xAS3zKew3iPSz58W8TLVdtts36TZAg9PG3R9xgregHeXYNvthxPGs6G2SYwxCCG3XyfG33GYNs24u",
  "key40": "4MAd6U2cSb4T2Woj5eJepK2tmr3iJK2AxGs7ePGsFohFtHx8QyNKo2rD92xWVCBPaM8NKQf3BKGh8TNqmsUWC3Jw",
  "key41": "5bj6ctSA6C8gbaPki5sDgAfoUqDDSvof8QQc5ncmFnEvGRNDzUWJpuaMxzmZsX9gPXHqMnp2EY5XbztcnnaQZiVS",
  "key42": "4wHmLd6FmCsAmmjVqyonAr9gXx9V811abNXoidyR65yoDyor2cipQoMxtskFiYsXJw1xxgvxtbXzhBXee5odbaJe",
  "key43": "2gi4vDGSyT6Q6LaZ1aYcPQvQAdKQ1gP6vuKDwMshXjfLtTYiTkFmTpwSyCAyGLZARLCHCcH3HqNGRd6aZCH4VQeJ",
  "key44": "5nx7rwdrmF6VcWn7F4Sv4R39MtAAKCT495iNnWMHb226LM76i26Ku6ngMg9yHxiSdZwiUX72x8QuzFMurZyRqTvt",
  "key45": "5M8u9wh5KvzPo66EhcJc6P75tsz53iFB5CHcuqq2JrCGS2gqnqCCUqKebVdNmDcEqBB1TUUaAD6tY4qfT2VwdkQS"
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
