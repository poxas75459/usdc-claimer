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
    "2kBwhvD1g9susrqxPecsR4HjTRbH1gsjogG5iHpeK119TVNjx13eBTmA8jRNDH4ZXvcqmGdGyBbbQ7bWcU1gFPA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzAYEeuxXHu6s4QMHQCTQ9qoyfDg1d9UUrr9KTUxcZ4oTUpLsXyoD9uKQJhXnytgqjSzeuUgLJPuzaZYDAtiUm8",
  "key1": "4zJJBD9AVaD4m32RSknfcvSJfx639go66C7br4CFLjHHFaNMBiQUfUtDKrNpCy7wTqxjZBuzDHPpiZ4x9Cyakfmt",
  "key2": "393tiJ8FF1hnj3Woyfu1zZrHF6sR4BiKckVN1hcAB37mqGDmSKnshj1uf4XL8TBK78Y1ondR5EM1WacjEoC2hhto",
  "key3": "Pu6gZNZqd6Wt8XT6Bm3bs7RbgPMG1GuQnhxgNqBjbtfsepAP27okKhshhef8tamE6bY9fqWHAjbCV4KFKAd2maT",
  "key4": "4q3yqhVMq4HrwwxHmSoxc4HnSaj1F766t85s8hVTssDJ7xWcSV9j4pkw64h7aQexzJASmXiAr3ayvETCoMJnsqrM",
  "key5": "32sU3V3vRzoaAgDNU312ZscfZeyPhFH6Ycm3YmiGFHnrMzJzEgkyfNeSArf7PR7GvpaFD5MoS7ChLeUEhiYYaKkC",
  "key6": "3aNqHVTiYqRUyn7TRrMwxK8bLnVTMJhcELPDcK6wqwoVFFN5oDnTkNZysZSuUsK9SPcE4ULwp332gXURTAJZvtSq",
  "key7": "5bgsRKvfmcCugJTzE7MgKEYysbm3MSxwhQqFoaufT4yjWxxpRVyYxygUY1Ra8gLS8BU9GanuCNp8tPvZSn57ktM8",
  "key8": "4YvpLRHZ9XKAG5E2iSfMfpT5n7opPj5pe6xRkBQicwRUXEm6heYfMpfmg4wLzaCHabXFYDv3CHpGTNJWeTgEGjt9",
  "key9": "5eKxjbF1r9u5GLSUYPrYTL96sgPH5LpRL8aWjaLihFs5CHuXEX3YZbPxV9R7yWHBTzmt8x1q4qwBMNLAnnvLPnSR",
  "key10": "33aUME2DDGb3bDy3KzeFbDrUfMNeq43TycUieREhviFS6iJiVwSPbkNzF4LYUBRb3K2Z2QGxJPHTzv579gEAXuNV",
  "key11": "2XPDysxeW3rtGiftzskC6E49HqVCKQ5WjtuGuKfKTDYyxMAFfgaYQeU9j42GR34DSbHfX3WK6gvZMx8fapLfdbNW",
  "key12": "5eXR5Mhj6q7vNMEbcwZJXBz3x5BHK6EL9nsRZzpb8kBTvTRJBCU5fHaGzkp1jWPXT7v2Fg4CvpyjofjB3xScccqH",
  "key13": "2C5A6wKgtZhmsu69UD2sQqRnwVbekXkY3ZbwbSE51kFMkTtJPjkm7cYrjLfbTSoDj5WwLJsTv88nG8trBPsyGtWB",
  "key14": "ZgkA2ajAwcHrpoNT66N5YrzuEbWm6GdWMf3QZP8FEosXviGAJ5ZcP235pLjmhxpEjNvPTaggK9k1s61kDHSwTXe",
  "key15": "5Fjja6VDvztRD4A53Xaiaj7P6WZhSKe6dphuLVMT2wKSBwQciXyfrSyXbJjX8FKHPA9Srd1QZx3rYEzSY3YFEnLX",
  "key16": "LUAfvtM2JMdDE9GFXmreAkVJUWWCJPrvq9GwrDRCsWJ5CpA8vhHQvUDYcfsw7LEh4ThXV2jUxBmNEHHosHXrAkR",
  "key17": "29UmgPw9v5obmV5XfBerqPBCarWcLfpwqXBHHVHotTWrj5ZCSidDNXCMVW89nkzaKko3pBtLCw5cvkumSYQVJNBn",
  "key18": "3BMWxkvKd8L5mVkFJHYehoatxB5EFjcf8TWd2vwLJRs73JT8a1wzzVzxjdgx6k2B5iLRDi64iLyKb18zCTHEcuKm",
  "key19": "3UpnkXwRbZeSHZScY3WVP4CSFDhMaq2gTMKwv9LwdAQeWT8gtetUuyeCL9Eo7ZUzeF1v7mxa7Lz2eodgG1zzhRPj",
  "key20": "2ZXLL1DFJknv3UtcWQCcqFPBdj57c3ZFQfGHmjS3qXBDDrgYgc4v8PsSdKhq14fXMFAKpGRLGmJjvfpLgnm6cG5N",
  "key21": "61KgKcKkjgiGt1MDd3ovauwDCvHXpFYCmpH7vu6cPAgzJB2KF8z4qGquqPU33z7swve3pTaewxQKBfZuLk6jytkq",
  "key22": "nns7NXZzskviMApmtuSuPdUn6yyV2TG5HBH1a5f66i5vnnq1UJFRQ5quAMNBS2WhxUjhcB97Vg9HNmkwV5Cv5zi",
  "key23": "3i7mzgZDKjR7nSqnEBz1qVwDcv2uPGRwK1vxoXErPznfToEvem7uRTSKLbLcgVr4Kv2tD1ULoYxPVzHHPb9JXtyx",
  "key24": "3C8ZDRNseAPvm9yPYN5atkgCdtx4sKC7MJZ5u6UL2sovy1tYk5PPwJg7MbVZp3dqHqFr291c9qdH82DG4fZXok66",
  "key25": "2Tbvmqb1HUKTwUrbMZT2BYL81QwUjaXui2sCvfHddEJvfZz4wDyhogA4XGiVUf36tNBRE7hF3WLCbHHChAJfG76h",
  "key26": "US4EaXXLKm9MEkwtPpv9jtmG3wBtAForZon68uu5g9hmp3FGnSKNuovjyPB7fQKYBBjcXK5PSj3NU6hCoSapCvp",
  "key27": "2hzAjieQ2Gxy1zKoh3yjxDgjbqoCVH4AkjaUcaNyASqgiQPZbgT93u7Xgf3T46MAxsYRUyKVLmyYEYzPjb1VqB9x",
  "key28": "4hCFGDipsqkFRTcPtBtqNeyUha3qzohQM9kfswKn3LvxDTM4q6WhvG1m57zpzYxHapZJQbxBZRViStAP8YYYjzV4",
  "key29": "5ih87CuidAEAr8Nejc5xKDZgrq2XFh7vNik3eeQtGkm7EcuPwCCLFy8JGXAi6pFyvmdY9ssL3f7a4cQdDdsrvpLD",
  "key30": "4W41PHLMor7mTaFz8dqo5M2mmFpy9tTm6AeZS9BMQf75ekq8xLVjpTwd1thiJgfiza8ZXgBWTesSgAPwkXkLedEM",
  "key31": "aJoGqHrdx1q5BVPM1btNpPTSsoPQ4Re1Tt1aA3WstYL1oEu6PQFMyqUj3u5tFntnRco1pY4B1i74r5pRd2qiT4E",
  "key32": "4zRdrmkXST1GLzowYAjmNXSTSo2rLwAar3YD8GKTY2dGVmVpdUhe2tZLPW4LhNUvdokgtmNeiARBTs7RahLh3oiX",
  "key33": "2qsBsDZ8tTBd1VNuuyJNW1hjXstDHygSbCoyA54Kowhvx9C583FBi8WY2kuAgoXzXZV6DcijbDoZz93k5JQ9zymD",
  "key34": "2Gfn6wtmoj76w9R2PhN96hA2Jy15RDZb3eqU925Hmrjp2FmCqXWg17RMwGoaqsc1Y9gYtjNt8ffAUBpprcZ1TKpQ",
  "key35": "4XjexcbBViDoRmANfAAowTWEPRjPh1b6PFWUWRP5GuYFLa2wzRjbBesjoWLoDv85XNJYAanRGMdJinAiHkUHF43K",
  "key36": "59tbDybxGvtBk931F6UcV7QQBWnKU4jEYmEawBgodNFuozDYGWrRnATHtdT8px8nzDu5Yc7fEwctLAPQTqfB1php",
  "key37": "4ch8hiNypLm4M56ZzMW85VsnMyWfBrqrgUgt6SwLPsYjMQz85oJRqKEEAsTj6KpuFJQ95kda2zX7bTUbu6GxCqek",
  "key38": "5P9iGVM4g9XGKpbK29raB4pdpyATZTCTZ7Tk9MHcfKxR8dNTnmfJMtjEafatSZbcDd4q8RMGC9t2FDH9frbuA49M",
  "key39": "3PbSToy8pCRp1DC7dqdvvUmGDG7jjWxDJGyG4cGVUAvGpwsqPeBxpc3UcQ6ZS6mHzCM8zrSVwG7szemTeZqPUo8s",
  "key40": "4xLjbvhZ2EZ7n1ZZSpaV8pu43HVtLLDRGNoX1Br3Tkz232ayv8CfTL29N2gEYe2oHKP142LbYGcs6UwhYJbARrs3",
  "key41": "4TZeF9HjSoCxxKiRNhQ94zxoEYq3SDkFQpQVCXXq36DuL4qWEk75UgRhnEqdTFuSsf14Auz7to6b2aTWgSX53fsh",
  "key42": "3PodHBTpBz33axtshT5LrnPjzTFghmbVqrYmsZFoNfGqJpvBDSF6J1dPj6uh9wjderVbE24zc2v9HST2yQ8qWPjL",
  "key43": "vgTJUffcWVK1nqukWHhvSdNM8souCWLrRoxcULmzpAj25HFWB7QbUcnacRL2REadrALhGyKmRQywauywvEXzEeu"
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
