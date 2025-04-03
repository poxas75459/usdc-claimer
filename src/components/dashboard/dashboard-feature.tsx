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
    "UEyCnyXj5rJyYkYJeEcxY3nxMcE2jHEp44KpNqiGgp98bpdBJok9H5USDs9jbwYdRb7ofvVM41CFudVEHGqXjYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqgtZqjDA9wYYmFRo2eRYjyFSRh1WgZWFNx2UCD8AFeV1Mmgs6T2kve7Ma4m9pCcWMY4nW9TKzMcyGpa4Wz7ZNZ",
  "key1": "5M2UHdeUQJrn4SzptXrF86KWSVY6B6LdegaFVHMLbEYBipvGjGndBKp98vj6owESk42aHKZzjCXhFeHkj7tRtK8z",
  "key2": "2VSkYwZEJGem3ooP6GqkyH658BmbPPiBVqu1gXcdwSLUuBdBafPn8dYrFzR3638ZYp71392aneraQ25MrgqYNmFV",
  "key3": "3C6Y6RidbdRMnSbCyvmfi3GwoZQeQvHpuu6AjnMc4CArBqVbk58LzEw6AsbUyufa7zvPvWgHxV1o7uJ6KKNAucfA",
  "key4": "DQRVM4oCYJi72g8asBBqMMsFL4Ur1LeQ4yDCCXcksCywK7DkXQNwk5YzXuyWFTKU5M3C8bmnoZREgP8NRyVTjsw",
  "key5": "5oFfmT3QsQTHXEsjcrtF3QD4WR2tXEif4utQaBvUFVT21BUcSVjfoykWcPsvKoruZmaXfjBxpXQ3iFe16FCeogSJ",
  "key6": "2XM6rwQdkr6PZRpsdz9z3EzWd5PrdYC39ayTQHUSjdYEnwZkrHaCsDLXBRv2W8uKBkArDfLDZqrA79iCe1kN6pQb",
  "key7": "2jvzW2G2ambH7EgHuGgMMrYYixoZSdqqjCABs6AsNFTsHadHAEi3k6TEbwEX2Lfy4Dn9DquRUWthjs1jh4ZvyNGR",
  "key8": "5spFVLnfWjtUFFhji6d99ETvAw2qbGPLwbCTDqLRt4DqMd5g4a4mS9iS65DewMeLDa1EWkQuez4QMKDwopC5ugnr",
  "key9": "rYEiBHA7itSPhW8JAKcc97nxgoERevDet7wDA7ENabBCyxp4KqAKDxcYD5nUVYCWzi8TtPEcM4k8pWLnEZjutUB",
  "key10": "52mgGmwvKr4BNLP8gk5TJc8SddEvVyR6aJvNLNM99zURuuWHNeTiTeGkVrKaQuCr9nog9YPAQ9CZhuVDAswUS9cT",
  "key11": "24YD2act1WaFRySZexjT1CyaUr9RKmY6M5X6TX2RM9DdgpRt8mYiMGJSSJ86ptPVtUSVBo8ZBiKPNPvGWuM1Qo15",
  "key12": "2sb1WbXvjcUfkkLLyKsijcA1gvUAoWEQFaLoR2YwQtQV72pp3fGM1TPdNvG9XDUg1iB8QykGGeXJx77FScjALyJF",
  "key13": "4LYMRzM7GnN4sgJv34p3x4FemYsbUdK36FRs2xpJZdyVup8emWfLoeDCxpZ188DSxQaHsFUpFR6gSxHbkVY8cv5X",
  "key14": "xYMibPGGhtr7xLADixXSx6xtZyWs13igKYooSHjFYLR1FQKj8k67gJa1raCp3n4gAqdvhXnWCTBXfabfeiEsA1N",
  "key15": "4FbN2MPtNGmkTYCqpwJGP6RDs6wU1Xbns9fDyzEnNoHGQZmeyPDwzhwKBPXYCoL1E91ZvvN2Tg4Eej4Ze7HhV9sg",
  "key16": "354EjW4RXe2MoRfxn8J243c16ADJ7LTsAqaxiLHR5DEzSkH35WuMQRWMbKjadsnQzPDmryDWCHvhRvrQswSPcQpY",
  "key17": "sYU36kUdL2g1wKCpDJGK7E2vfZFuLxQ7Rz2FPhvLgjSNkmWv1daapE4CaMMqscuWe2zsJPsc2zwwnSZk75WQDz6",
  "key18": "4e6XQA3L2SLJsH5vq849ehZB8Z5VkMgWvMKvXwM5WPMUp1A8sKcyXefsctkxjir9SSxAKt1bpdWTkyvbLXrapTYV",
  "key19": "5hmtGdDfjwCpGTW7E4E6qEauCYMXPVoyYrBYzxerwf77hKhpf8U2EMFGmhYwHVhYDC1oGRfqPThfNSSzVtoQqxZU",
  "key20": "2hDUvctSRxbq9mECatMVjLm1Ezwd2nXujPNdvVLxey2rm8TC8HuCMtyNeVGPNhW5P99HFo2Y5TXjkHdvPHmM6JYE",
  "key21": "AFnSuk8RAQiddoqqJnJh4L6cFCkxQYdRu8LGJdfdxmaVfVPVwSM4foZkwgdR7idMBgJ64FYTULKv8bazZwGgtaC",
  "key22": "3KCYaZmyyztLGxk1iyMh2VedtSiEsR6DrXGL9D4bewVimgUDQUEKKyfBBwkVaF1kUedLw7iHnCoXHWk8c7yaZPJb",
  "key23": "3tvyhoWuRjnmfyzcQBtQs73oeRJktiMBbBR1FcAZ19Q8vgi9AVLgjeEQrxGaPHgLhQ2kZcJ8iXTZ9EjcUEdGsWNH",
  "key24": "P6deCnWwEHaWT21XYedfrHhx7RUFhUVEZGuAsYiTTKvQJhX7fArnJpMWDg4DRvKQNSe1oxjZfFXjnKkZV4e3Uzw",
  "key25": "5pETLAW11xuWdSS7jPmJLJQvFMGnA5hf2BzAe8sR2YnvA55unnkFgU4oTcwkw4wPFmHDSCrYdVTvjsQj14HPWcSQ",
  "key26": "2Bo54gfCbgR1nGJQoi5sV4JejGoWscNpDuMyk8AFuMujpunrKfLvcXcDNoFeANWzSTKmgTy1VdJxjtMCjuh6jksP",
  "key27": "2Q4i3oyV2LebNiQvCKs5s1BbwWtGp7VHY3uaLX8GBCAZJaUQUCmPfuvDxTMupYmzN7E2E9rMnUq3Czmqxe4ubtwD",
  "key28": "Z31Toko3bo7dFucgd1BaNhbFfG1YQ4TdJTUg2ZMdiPjzjDoLpHiisJ9V3aQtM1FKmbe9LHB9u9oZa9pfqj8BDpH",
  "key29": "5cvVEiAXT3tW23NRuAMrUaRHAqs8N9pCk1PMvatfaLRrjxxjFtKntanZeobJPqcLNyoGMZiZfqp3DiRxLnGT5sxu",
  "key30": "2xxc6FuQ4obKBThrXJYxvTyQiM6pCcs9saSSLEFQUEb6SKcVCLVHN1pAZSYP9RdWEZ3WCSnX9UsjJ3Rqmg9hWNL8",
  "key31": "2oT5F64p3rq36DrbtTpstmp7a2CTgZTE3fYaUJx269Jz6etrxKoZG3GZNjfLbcskgZX2w3mQteWmy8qWzUXMjDyM",
  "key32": "4tVvkU7e6zF1kBuaRrKAjYzYXfuSMpz3jgUjAhVhK7SnaN2WXbchvXARqVLTn9gJcuPjczeo1bpoaLHq1mQjA5aP",
  "key33": "5JzQ8ni4s7BGLmWoN6fFhqDE4cDQ87FMi892zyi5hcQzw3vgFLFrQZT21kkVp4vHyjtoAYQgAytzwxvfz9yysTV1",
  "key34": "2dwspoFvxD5YtYQ25ykpBBWYyAcv1zpvfNrT4G5mUUVX7t6gopnGzmGu6dnNX1bZjnLhgodP1ds4svUAamWhXzfJ",
  "key35": "4oyaFycAtG3SfaZoiFxvm1bnY11NcQ4wPrHSPjAUfu4F9XhKHxu422ZKbb3G2APRyytJU5ShvXJpNHG3qEpdRphh",
  "key36": "2txzdxecW442gVJWEtoDUxepCvqtsMfneiAM9DCVaqUFZAzy5frjXoWWsfrpdhwi3bYD9EUxmgb7L1SCiQ5529xb",
  "key37": "3Nm2Q1sAkiD5Nm1SVrMjhiKCuJWTq3vPtpJ873GTDnfRV4XaK2Piogw3kguE99aKLQYdL3qdGe6ppqvMivSRnvhj",
  "key38": "5iQgvsVkSXHGYUJ4Ji6BhFAvoT8a6MGMgUyL4tNT2fq8HSEMCWitPT87Zm4uMtdACkUn9VsUFGeLJmVsYwrMbtX4",
  "key39": "2qmLhALNpTwYkqpMsAdg4ijEi7qVdEwkaMyVSVD6yV4yC5YHUieWZnV95gRwJMu2XbcYA3VEMURKUY7jjhPTAq77",
  "key40": "33ELtY2EYTxerErHEkZ7kebaLyBYQdfatTYGgWWGoDKVcAz693m3rVSPS88JcfUqz9yqATqt74daEtqRY16MzNdA",
  "key41": "4kwcnPRMVqgpF3EUsKG85BLM9mbNhY8FRtAQMFPf81ix5RHU8qaJRLiBeGVP3CrSG8jbzWTkkBpTaqeaLYnAxgcP",
  "key42": "43HtPsDW4fR1VYukbMmr8V1GBxLJBBSwHe9xzDd2a8ZncejMSbRa9vG8i5kRaHuN6zjnk1fuF37dSjjbXfoqne5L",
  "key43": "4KUxqcNvXmvSvJeNhg3smg2AqUGCcMusR7rPG9n6Vm5WRxKMUiHRGHf9NbUqzKPJfAsF4fR9Anid9jwf21xVyQnK",
  "key44": "4VSYnNqM1ahaaRQXGrMBKSxG3GVBM9T7nDej8kc4GSkWDJYdsSfKo5tViEJsmfFrPdfFvAY6tTmuWgGgXNrA3Ass",
  "key45": "38zRorWFypp6LnKJD7MjCopzNVJLghruLZ6FWEDWtvv6zheo5eFkbp4azmNWnnMbgsTPwsTM4ybjtUgXmT6SFaW4",
  "key46": "63G1m8htX5QXqNDX787VkZLjGo24kRHNBJzpsZPq7DQ6rcmhHQePXsrusXN83omN7h3QXWUXuGexTvx1wnjyMEZh",
  "key47": "UVboirVxphJH4BxnFRMW7p54dejLhNPUEYgiZvUgGbFScGu2UYcJsgb2fB28frDNA1i14cP3Sg6F5Q9TNqo8ftT",
  "key48": "2YnVfRxFay6sKXmnp6GanH8J7h9jVMTGxtWe2Hfz2Si9JDfx9XjU4gjS3d5h2H2rKovh34ECeMwhn2smLKVZsP1B"
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
