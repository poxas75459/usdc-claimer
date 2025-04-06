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
    "xSjjw52xrKejzc2hbxkhLg3dHcyhVQKVSyxoTyrqDjA6pktKr2C3CUynqvrD6dAHUokBmUsXFh54AnG1XYCoUbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cK6u7GCjBF1Bb1Hdk11G4tD6kchm7YtCSCvYxrsxafjK8ex7xfVR8S5d2Kyai63XsZ8PTvvbkkQpcuLj6JPxGLo",
  "key1": "29F2vLSJLSscf1dWnykHxNw1k9jDXYdqGFcq63eb1HGaivrzpK8B2t1mEThQYJTYkuW7isXChGs1VsVE3dUyTjGn",
  "key2": "ozat3MA5ztbfd4ZMruVajHpfAPcFhfJU3bJCDS61kVxoE5pb1uebEfsRmb4se3shNzSViiauQN2NST6CT9i8cmz",
  "key3": "5QobpLGoWHeAjHfmk9ArhDAWYVfUt2d4SKrwVP2viPvfsNZEpUuGgSGEe2zvx4V8rWK1Rkz1xhFndiXvhR6rnQbV",
  "key4": "5HxtCyPyyZq6xGyN3LHNMBEd6s3yJrp34bFmd6MwyZikZDfpfswrEKLsrtvKgk1v6bZoPfQDQZtcni2r94pQoEts",
  "key5": "2EKhE2UtLnKXZ6Yv6GZaRpyMcnL9j7YXkXXE5NTNrARhHhQ5rm1TVdUvEnpVDYwKL7SrNsxp4MEgrn9qfyKXZ5FE",
  "key6": "2wDQJjz6xQoNRW3HwJyAP6GCpqDvtR2Zds6ZuSJ5mKg811ySm1MRLQEj9z4HC5BxLY2yjRY1LNtv2BLFKt2ciXmx",
  "key7": "2X5QTTZK4Euzu5LrrbRgRK5uA2Dfbw6kNqwY2yKAgYYhCtyBxJivATkJyoqKi5rufpvPemoYreBNkfU5EsjvcRWM",
  "key8": "5kzDCoB6t1ysGyFKwA2fEjWbnBCUPS89Tt2z4HebVgLDZ21UTiKUcmpTfrW4FcuymrG1BaAzg4tmJf7iMHeFmc6t",
  "key9": "51A1rUK8CbRiyD1t5i8inN46G2j68RXbYzadozt2j4TwjhmNwdx85UXiPkZrkL1cX5Xo7RSzw3qzta8tiNFD57eg",
  "key10": "561zkBo2hnruKnXLTeB9LdEnqvSU9JHgZ95EAgdpHWmvgJ4aSCRYNXRTugmUCZqeChFG7GejJtH3sTkUG1GFmZ5n",
  "key11": "RhWCv88AKh9Be6AUEm2i8A6G3GmMmxemRRCfv9bnix212PMeTkmk7YvJQnLu4Mfx8CqXHu5fB2t4nzACuCU7CtJ",
  "key12": "3vct2VdfubEYVZscbhxXfx4C7nEVEjdC2PZLPWxD5AQyjJeYpf3kANH8zr3DHWT8NErQRGQdqghJhk6HkBFrXEoj",
  "key13": "1r3YvaSK8EPxRXLUC47r48nUwSUyJjZi8DwF7w2XqFwmqg8dbo5ZLbofa5PK32gnZdtpqwLvDBJms6josV5PT1d",
  "key14": "3Zfy7uK81sFt7bmSYEpbUD4kCLrTVJc1hfFvQPNPRqyx849C14J8bWzV9jhbA7FNGpQmhGzHKf2R5Rq3Uu4hRpS7",
  "key15": "4bcU9qpdow6GRSUF2eZJA7YrNcQyrEFACwX993gVAFV3fQySWT44Sft1PtzDb5dee5JbemTeyVRiTtnGFuAz1Vzm",
  "key16": "58Sa9PBKsxD5QgAVmKEbzphn2CKHJbk4L3dvUM42kXSrsrjTkmodXf3NVKS61KiKDZHs58xqYFCMfhTPiCDAWNEh",
  "key17": "2F8sJUf9LNQXBsi34abN17dwMj71Y2CUvSCKUNajtVk3KkW1TFi7LmCoLA3LxivpuQTErmVpxh1grLjLy4mtNDyo",
  "key18": "4Gv9MBQHG4U68dKczbEWtR2zRS4o4aojFWfRSSkK8abx97KE8VrpzmxTZ8P9rg88hKBKbmkJFPiDZfXa8z8P2BgY",
  "key19": "26A9M2pxStVs7eme8UmJThJYrDRsLk7qnQSm82mbBrmZVwsSvRuoDYXdPrS2YSDsESyYjZNmCSL9xCeYoXhebCQJ",
  "key20": "5pQazo67qoN85gdWr6gwy4XhrKwcNt2PFM95Da4shqPmpqC4pnKT7eMnCbQ7Adh1jY85mpDk7gRRBiSdJ9P1iaYe",
  "key21": "9SNDxf9WqnrBUViz4rT4GfRFiopKEn1tUCmjRrpTtX2vUfdRRp1nJK6gW8oX5LJ16ztVYfUhxPtTmZ5Uuksyjvz",
  "key22": "2Moko1qZnifEDRd38VSRGUoBk6xVnHXfoMjzesYhy68i6vrzFQ25ue8getUcDGtwsNnWdRLDQurGhNUhBupnkCTi",
  "key23": "4CRb2rJvjQHprz81utDEYu1diCkRGCyw1Ydu3L4AsaRrfqBYoQqgy3p3AGLiJ7kXjX1n3XHTNXseJqtv1iuWReJX",
  "key24": "4nQQFJZErzKbPzcJBxeoG6xMGw7Bh8f2pTocEP9WEY3HoSqhi6ytBEbiahm8NJNDnY5VP5yEepjGo6QYAwXPzYMN",
  "key25": "36ftpnCgjm99L1q7x7RBn81Hfu85DhxE2PB7pbnTbzyr7mZjDiFCAGjdtNrFno2LNbE8pHAFMasq5fXkWH8yoQ6F",
  "key26": "1idyUM4exJDt39DTCnmyYApMFxtZFVnswYouP62orH1SXNDuAoSHY55Cudv78VLcDSTvantMPoGMgx5HFbbpXJP",
  "key27": "2D2hvtoFURBGsj7eweVgFVHgweP5XXnPfo3jbFZZ2W3ADGbziNgywa6VgmtP2bZ2YWLA4qmUpW5KGu6qoV2FqRKk",
  "key28": "2pfj87oxqzXXHvuTRvMjHSrAJBXitMvpBtaxf8DYa84FWkfvpSEsSBqPuj1EVo83y6ThMPJ3gNjTYvtBVGiPLRsm",
  "key29": "674fnKi6FraQyah5y6SpG4KJm9i9K1VQ4vwb9KeXS2MWD25Akqgw75GLpwdForQHnz3ZmAxZhHfa7Rf2GbnBMgpF",
  "key30": "4fcMQYPbztCFeiPCdZmJhDveZYmLXX14Ljoj28gtrJoEgvfKVvitsjahJQnBCa2svsu8FgQ48SHfFxRRbMqFr86z",
  "key31": "25twjzeDXNLZY7v7HaennQSf9xKap2PL74MjRJg4hB9stCR2MZWb3iFEddDE6S9vEQ6tLwSpYZGnZ4SUjsgCBm3b",
  "key32": "5tGMRyFXyuL1rg7p5yvgSqmeB8MKPrfCnGDVnJCNajs21D3bW3TYNv3yhyz1syhzUjCkXgFxJku7yTViuJJ1GJSB",
  "key33": "ANc1QbbJUzaBada8MEEaUtecX93awWSys4zB19c8wKcaVBbd8qKP1xrATQiwY7DxrouHJVgqfw8W6qbBMYAkb6P",
  "key34": "2HbSUiXzKCciS92Z66HorrKhdP8LcVcHybTeyDwKoK8zrQ5hANXkpHR8zYLwMi5ZozeCbKjxhPCBD9E8nAgxGtNz",
  "key35": "4juzKGcRBhhukXWozJeJJNBUmmMhZk64MTmygTBs5xPfDCUNyRicHqvzx5GnWVXCJTyxsmnvgBnWrEpjHt8Bc6ce",
  "key36": "3vYM24W8iCZUsMuiqNmmZpoeeFEEJwcE9EAxb8tGHi4AWawMWxBTscjdRBWH4FM1C5FgQbCwuzPiK8fz1ouFD1AQ",
  "key37": "5W5TFkDcnHQR77fXCbPS8ycuHCEjYor9UJ8k71jt8NKXjZMcNawnSJVtnTtrnNeTTGQaE1Ks5RTWR85J8KdTYw6v",
  "key38": "61uqZ5cDk9kxpg9L2T9YMvayc2h6ogkrTiz53EsKrV58pAu2twLnU5kPvUv9ngPA9RxbQJLyMfMT6NNt7gJSmnee",
  "key39": "5MXSjUWrnHGYbNps2q2t2ke4WbNFMccERGZRu9FGCpHm43FCRWmaXpfVNPwzPmhwyqdDeX9hiQ7Q1bRNC1r48udx",
  "key40": "2HDudPAdFaLNY2pv67uKBSwCSHK6j7AZvmvmNP845zkZZXeipc9LYrNMS81VzpqTARWCWnJenGA919weZD5zqM5F",
  "key41": "3oPX3eya6u6Thfh8xLJfS9r89RxuhP8PhpstviFTLsvoAiFzy6oTNkz5aMMhdGg7uQ7ibw7ShfSEzQ1VJxBiLXj7",
  "key42": "4TWFZN2sCJ9GNkdAZhLAENC9qryB9YLkWdAe8vrA1cqWQKGRHkx5DtAU6RC3q3XA3ifx4eXokRDzsHNd1xBuZGcc"
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
