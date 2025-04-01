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
    "gmVUShbaxsXfmTE3Cn96VM11nVybGTJqbb1mZUnqcLPUFDBF1qrVw8CdrK1UgAgubT4feZWzR8JuE1wL29t8cTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q9CECRLYpagzYXqs7jKPUQcnWWQn2uwGUMBRmMMqjc2CzFuQKLKQdknCP7TkVywNUMaFU9jMCPMFHtiYcnpJYrW",
  "key1": "5LhbEW1RmyfAB4JDcdJJphQje3sZRCeYxySwK6oJ9hWbZUiB9kRSzjNtXrc37Xq6vE88J27FkBSuCEiCBeN4iBGT",
  "key2": "41XiMUyq1a16utgCF1wFxdh7hoHRv4wmtzNPGHHjey6X1DixdcmCyCDw9CrENCbPqdcXwxUZ1Rd4qYEP5e98uLte",
  "key3": "5Kf3a2oifVc6YcR5gJKqXxTxXyMUMDrNTGtJ3cpgoEd99E94zRGFxwC9U9nUWfoP8NGcdfJGpZML9xBtSE5Jy9wh",
  "key4": "3rYUhructQ1XaEFPm1X5W4JfktB4zhEe5gAfJXSAsK1Y5co4qVJMAJ2vGsXUNVgLa3dknxpLgNnrA9o2ocqdQyrh",
  "key5": "5DXASvc5wMLdGii174bKMWWLX6Z9CKZKg46rGvuik2x9BcoHesisq4C7AsQTbWWc4tDG8QkXW8mvRxQ9ao7YJ85t",
  "key6": "5jq7mZH88HtbjJDsGY59Ygxc2HawymMzBJPSAFQV68bXKKjXH21wrWa1DphkyxqsMVDvC5SUzPzpAbjbUXFnq8gC",
  "key7": "4t8Bj19RmW4ecvfKkJT75rVLxhMLdGpAmXXBkHsWWbN2e8fvtke1fRgE7tVhurAU5qkbQjhymjLRN38p5WczEwvg",
  "key8": "945ZetHmbpcbxNKEmWFeL72LirgtoufYMT4yH1vWh9ZbTyvX86w6VphcwRvKWwdUz6Bz5XiaRtPGLmhQjm1KR12",
  "key9": "3fyWed8AmdEhjpGU8wneosFCT1WYQN43QYYuMX2FgLuPcA1wG4w3r24kDu625DJmSdAPUut5hEHF3rBwY3J33WBt",
  "key10": "4pL4v4M3JN6nB4sirj3MGBn28rJGgMDrrG6ugYBp6rPT59KzRQFdhYdQn93gaJEq3ce2RP5o3UM8ArY9yaTrUbku",
  "key11": "44LGHuDRDY7GZRyNmFWbeuRqTXWSXbQev6rYDwQLTosd511wzh5bFv6Xy1Dar8zDTmfhhEvXgumynmtp5fkNAqey",
  "key12": "xDoWEzeYJTrRS8J2Qp3DFhvaaVaGyDho7oA4xemRqxHjodQG4Uf6GuGHU7Sk7jHhP52sjS8ADSdLxfuTktgNuVM",
  "key13": "4JKvjvhgWYUUaExpgTTmPTaxCRs2a4P2TACoAebgMYgWA4nZZdzk53wK9yu3Bjft7yyrGxmPo8o4MaCr1UUPVHSS",
  "key14": "38SpRBTiopy2YEkZKL9w33LgQxYneS4pecAMJctU7xwBhYSzxSsVDKasg3EfEPNStEAHL5VisGYJVSu4BTVqPcAP",
  "key15": "3hZ6oALssL1ePBiso8wBwo5mPXYPP3kRiQquEmEoXmiLVUZxuV2pxqKhaLF8MmW1VNTHBsM3pdMp1oYW8jg4go1G",
  "key16": "4YfYEqsMHVHbCozoCaLZXdU9zDCHGV9R55KHoHX3kgFamjZjNUWjKnfX3T8QrWcVMRcNkKEsYh4RwiRkr5EvQA4u",
  "key17": "CdWhswsVZDYD8VPe5cGTfJQjzdos8aKxGYTXoASQubcpeYbDiko2uYQVHHU9kPieHLZws8qi6vBx89bp7oDbPRa",
  "key18": "qjdvcmNTYKgA4NfWf44NSokm2qKj8b6UzsrDKP3rgsF9vv4dJ5VUcTuXRRvscP2W32MeX8N5NL2FecJC39Djihx",
  "key19": "2iqL5c1gPV15ngE6hhP8RF1KZnmDczPXPUNpwyhYfq6LDkys2CATvFpsojEFBTr4aXuyed2nnL3tkWnh26XXgkn6",
  "key20": "3eJY9JbfJG9AG3BmDexZHN9go9eZc8RfNPqrDgMyN1xq8L9dph4K6Xw2WXxWtx6o6Vn7wFpQoLdEbkH2pzCSF75E",
  "key21": "3WqyzBNNvBVtPfbhzwUF5qC8gUipg7sYKKgbdQtxftZRE7Bz33skDyX7adxCZc8ChaqNkr4M8y2e3huMpNcs25bS",
  "key22": "qszwMZKmL8MrW2iA5drw5Somj5grc3932K35fjQyhHJMLdJNcCfGcVLKrswaufo2ohV8npKQYRqTHWs1P5SPZup",
  "key23": "5vzCeTC4d6rwibm9GKyouYUUESC6bCp5tjSfS8FweKMqaUKs4kvoJSUxBF5TRAu1eABnTQfmn71Ln4ZwyPbsJ64R",
  "key24": "62U8JZwSANw3bvp2MPPrHfpQwtYgvJxQy2cuHRva8ZUzjPBwBhPHBBj7swrzu5LrKnzL6TefXFuFTT3beK5kCrXq",
  "key25": "dx7Lf75z3EwHXW2qvN76hVa3xCej4jZJXzGiXuSrfpMzbPg7b2euTN2QHoZJsjgYZR2s9a3m74NWtCH2DMpqvd1",
  "key26": "4MzwrCDPb93SY9quC8xuEshALb5iTyoXeLwzdNFKcz93uBM24TT95vLdWfoUhcHXduRPh48od7mzVWf9meD3zRux",
  "key27": "wCmAzPaZqeNm25i4a5oX5ekUTnJ7hn9kkP2TeyEhwBpYAhhHBPwhSRzbv5SgfFan31W2xXtqeZTvvhyj339J2xd",
  "key28": "498wFzMCmYYjwpx3PUC5ET95GBESjutvpB8p2YMvYNL4fSSyvGyVoC11CvNquX9fw1TG7gmadGe6NsLP7pG7m1No",
  "key29": "3MeHP8SRMNKb9UdeSrwVTtGGqBDPC61goP19K3riTeKW9VEro4nDnBe2BDVPPpHeunUfnWBR5uqPoF3ZPhShgSdB",
  "key30": "ddn4UPEXpVmTgUbWMeaVPE6tPx5PkhoZq8zp5R6FaRPNrAaEmx5S5FkS2ykAKfm8M3XqTBPxieRr9z8AUdM7Gz1",
  "key31": "3gQPD7KnWNaf2wWei5BNBXtdonpcea3gXBphMb3eVzjQX8oTEDpJ8aQRJ2N7P6oGFzsB12t9QWA5QkYRgs4JXHHz",
  "key32": "p21RAmGMaD757duUQrPo2QkP71jJvuzCFd4SHrGvy4sFMGfvxwMwRXVBX9MU8wXhpDCVtQitcUkJDRYERJYwRrh",
  "key33": "3kp2kcfgjvQBt6MS6jqq7t8cU1Nr8K5q1aFYqFVc4z3TGmZvCJLHCiFaiJqazBQTCcjcp6fGwRkbFrYvwiBhZBrh",
  "key34": "5YPW4vHXdCLY5UdodvbbhbkqAxAyRsaVFEeWTuXHSm326mi8ySE2SpTFwGAjbcJYTA2kkHrmVHxjLU3Mt7jonkQ9",
  "key35": "35qwFi5oqJLdMspHuwrmkFMAtK1TVCd9AkhoaQUhQpNgxqo969jgXTv5PXWAsc9qDVyiJ1crnrP4n2na9ZkkSuSb",
  "key36": "2Z6jNbwXjDY6xym1cZbqMS2N83kTAShRcC1cHNy9Df6GZpw5WSpojjF15z91L1yc3wFCZP7269HaQBP1ehEa4T8Z",
  "key37": "41P5XC1gCuvdLfVVWBBED4sSg9wsnbUhtkBMbw3Wd84PrF8fMrJKe9bEkivqTy8jPdRtu6nR2KY3HrbQ1Tz8FQXD",
  "key38": "5fAn6of2eZw5QnpjoTFuzQ3nQHfCnic6USjg8Scd8TA4rCbaEoQpJSCMUN7d13Rzgp4dVRpJL1YrotsSi2CZksCb",
  "key39": "5mrFSjwP9Ci1AUtoJ2vGsC1QjtaZa8iLKxSUf226sZhG8xV2DqZzsYB1PNJpSNn597whT2kapwVYiRed99rbG5pN",
  "key40": "4XgHe1CwNFrkDEbNXB75ez2kmoToeedV922dEUzQMGkd9ERbsK5f388LWY3kFRsLKBDrkjPu8CRZhmapfuBrcQHq",
  "key41": "2sKMGNEHKzc8Ewi9VxZ3h5DW6uCPB3Nd2B4VRSaaUkJnHaLn34uQEYvubTNUWJin9BZQVU9oNkonPUS2KGYDXLQ8",
  "key42": "5qUgVY8iLpubBzYV76vZoUzspUkG4afsFG8LSYQmmsY24jVsAX1yFFqEjsNp3bgFBJUwD9r3UovjRQBJUKxygcsC",
  "key43": "2F76C7oyf7Kkoprvj81beGsVQLxXYequAXyGaBhskY5avkZM9jzt29p1Q2BeXumCvMJsyJE5hP8b3ffJdaC1i8DH",
  "key44": "5g17eY8jpjeLPvohsHeaeXQfJNNW2KkGLXhbg8WhesinFTb8eJXNKSLJcYticYZH7iKSeELPX67CV1tFeSCbg5YU"
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
