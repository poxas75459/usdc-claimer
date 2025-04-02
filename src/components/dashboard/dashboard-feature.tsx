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
    "WVjjyEqeJmTncZ32BBBq7mV9LndTrdUXCE5DXhYDjPBQXn74asPbhsJ73GMu116m9Z11qpF2GJWoYfQnetCWpkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5owBq2qEbt9Rvr5HFB42CpmLp2ktBaghDEtQ4zGZUTrY3MRSpKrMRqNvJKBETtkLw2cyfHMgbharCtGM6xVTvN",
  "key1": "39ybZUehJwjoqGBbm8MmRRoCE1wbA8hjkBcjKsoH3zocLnoeTgMSWP27Gkv5xCWB1tCctUUSgR41VwUkamoE5qd2",
  "key2": "4k2XkzbvzMdpTDGwoXsvAGraiXJuCweA6VJnrEXNC7c5GU9guigL7PcNkXHbULCdquZsyE9eh7XtzcrQJenPG51v",
  "key3": "64S6camPMmW6Zvz9m7mLmMDhfBnzXMV7oadvxpTojxbs1imtaYZYD9zxy2GwXNYXH9URW5p1A6ZbbYEWAZUAfxyP",
  "key4": "BJSTGizyq4xQTVWUuEAvgXbDNzBTpGhm27pBU513xQkBbNZG3QGRtXEsaeB9v7pSejgVYrtAYBkXQXnGAaxN2iw",
  "key5": "3jtQdDG12ZReTw7Loy2Wm3v7PqaQ7eqhv5tmWvxJAHWNmEqZ2fRysSRBRoBBqaNRjtm3eRYzmt6hgC65aVepxnuC",
  "key6": "4QNw6C9hMc1TG2YK68FzGhsFqDuSDH6WjMmY7c7ixvKhgGCRPoRLDFGdgB4Q5tjqJGwCGVNM3SdaafuA4VUMEpCn",
  "key7": "2WcbcQh5kziQE2bivEk1C8zPRJr3Th5TbBftXFr2mNcUkKVnKSxpEj6BT6GLWyTpSiYvBJTSBag4k6P7ya16Ncnx",
  "key8": "57LcLYumwuyoPHTWArB9SWmbMWkmR36qMyzKx4QnucGkrFjri89RS6XUosvNHUP1RZ3VdivXsYj5RHURgVrmJ4Jr",
  "key9": "5Z3tvXeAedydkA9ixVPw9q34mjcUbbGjfQBQLvoi6SNXcoX48FkXUN5kBVredYQkpdWXHf2Jg4ondhBWCTa355uA",
  "key10": "47uaJ9KVv37kqDYCeUa9Hvbr2qWed1qWmmBJAeME1w8f9XnQ7iUMcvUryZBDDfads8JhxfKZBEUiMbmyUWLQcr7t",
  "key11": "Eugvg2grokjQR6ay5MnMvdGU5AvFkko61DrZXvBJNK1nrZ6zaecVfVtreNoPaaHkedaPWJ7G3j6VbPBbuHoW9vx",
  "key12": "3xoVETDP2pGqThDUsrDh3nEoGPzND2PMJ1hU1HyrsXfjjWjFxP9LKN8a5vJVobWgVDNbLQVLy6Mshg65K25o8856",
  "key13": "2xg2BUGJhzThMh1FiGnYt7jcu6R1YAW9C7nwjgRAKy1EEER1DuWDoabr2EbqxMncK8st5rSc93TEJc2FM4NvipQN",
  "key14": "3mMXpcNAyRHXjeFZmZ3pLGqRcmnHuqrxZUqHbTNX54DnbbJQmyZmz7mnoHguyetfToGxFf89tyZcbbXnt2H3hz4d",
  "key15": "38qe8rLyXMaBbDnpF73j1w2kH3MJz47CxXEnGgkiLo4r92AxJ4hgtZakKArSzWwScjeJw43EprgJVDm165cvP47w",
  "key16": "25SKNFz4rRt4t47FhYXNjax3zm1oSYifjK1kS1NNj2m2wdenywuyJkBHwu8RNjRZL1svSratiq3g2VhRhdPKXiTu",
  "key17": "3uPoEuTyvvc51ssw6fji3x8EVnMcMypyZHazo9U5EaAx3f4zmU7zmJsuotPxgPmNpfzLfXf28CvPnGXwM8xqLbBj",
  "key18": "4yaxbS5K9oFmRAyK6iVBMFVBqjVD5Mhq8HzhkTbFPqtffigi3SAPmEEi985XdUToTwjRzPTekyqdFEppaniZYJis",
  "key19": "5dEPebSetTqFYdR4mBRBwyaUL47LzgGQqE6XJUb2xWrLBF2RGZzaTaM9vgu7r14zNPS3p84jauzLHhDzNxU17xUx",
  "key20": "3gEyTLtK3jpgV7SPLyYqW99w3pFQdEtYgUtX84WhZ3sCEJ5gguhy1d7sFtuLxbKxs7JRoa7512jAecfVRW4DCZvw",
  "key21": "3g8jF64P684pkQ1LDnE4mdcW46HWsYtNaG5h2NWayYu5Mhz8aBLAdzqkkLw6q18f81wUvLBvrkmAumbdAafzJNk6",
  "key22": "26MB4noaoHKkUTHfeZd3dYvn5qFJmtnDTruqMHForgyjUNLCs9nAoKpGPrnZYo2LMMxbL4fVp8eg2up21TsnmQLe",
  "key23": "5XPVgSr7Bvk1bF8WnNrx1MPHNAZw8gv116jtc4aqpWb7zceDVzA9TSJTyYGzCJ22uSbsX1q8U4PuzpHhFH71jqxe",
  "key24": "5zKPciWSYfPHGCfAKXxXcrphrfy4Gbq7e9qhwzDM63uCUJYgMaZ87bcmbPgPHG1NoDdxdTncvJwgTazsNmd8s4AW",
  "key25": "4MQNjdD3ZNc4knXV8H5ZMnRxU7HnfLi9UigFkzhRT9R662QvirpJA7kSyXchgrQrmkLmoinCXxfaGachWveWGsd8",
  "key26": "nvMpEfAVWHT8sNRn7PCiZtjcyUgWHnEX5xkPfYZCejeezzcow3EamuZwaMKmuADSkvE8DbHv2QXrXFgXiEfrxQ2",
  "key27": "3TEkjeQmMSXcCYJhNAJgi3BW8gxxBb51NSiPKotF6nnLyhDTebpfisf3LkQ3Ejfy57UjvoQXcJjufr4ZyFMiQ8LG",
  "key28": "CoS6DxzYpGcUYraw94b7g1BuVQgG6apbLvCUp3d8sweE4KMKxvehv9h9fUyYe9S1rXTFAUAaWBaadKYnpuVwU6X",
  "key29": "33HRioM4UjZDyrXphxACZqi6rirtNEkFhLquFcrfqyfgVHKFNkcdENJCuRj7HThD6nXvWfU8Uw9VGNea4qweFMk1",
  "key30": "2LGDGeuqbnm6gdqWrNYqciANegPemMwug1qfYVWhxuoQtVRVLWbne3sy8fZFtsj1mVWbEGu951rEG1ZrFR5tfLxL",
  "key31": "4N1zMjLrJF95ogTdPXks5Hf1aqekyLhwwwwYQ1h2N4RgS4KmXg86LofEX4estmmrzT5NENKyAEMTqKspdUfarCnF",
  "key32": "4HcQ7LyFn266pTg5mUWuvF9t7qTqBFKQr1woP2n5xiFMVWYCsWQgeBsp3CX3dMZ18QXoGFJHDbBfvyBHm2kXMTaM",
  "key33": "2geSBTRuHL6cfJ5A1TNDJ5hcN138mv4Z4enqw2zL4unJdsS2Mk8rCkVGmtgmjvDFGUg3A86JA4yUSA3DBVyr2avo",
  "key34": "5u8cigGmVRxJnTVXDpo4jfMQjgUZmjfatWhn7mNXy4ikyPiSrHGyU4bzgtpd6gAuTVVKtEcKy37GAtGvWUJKMvG",
  "key35": "4jNWbDGG2R8rq5v2oM3x4bU3jkNmnip3QRho2nMgSr9KYHMD9KwHHa3WW739nAvum3zHZQ7YbKp3KRcEgB1FEjYs",
  "key36": "YP3gMtj3P2wvTC4b5yw48hcC5NfSCfGbGbwRMkeZ2vyukd2f9shPc2KG78v6bd1kYQP59M5StxLT1P1Khi5UR1N",
  "key37": "PCdh6a41DhfBePBDwwyL93R42YstfwWyTCU2FDT2p78T3adawBVBg4Wy7smZbVgwPgsNkHv8WMZh7FUqCbrzD6D",
  "key38": "3139LM61ojG9MJpngnq9KS6VQKZh1avySW2hDdreDDgndYarP6DMweChVYHqRcMzYaVBFdWJTRPggUcpsxKQtVpL",
  "key39": "4UvyJ3qGaAWMJfUjGVKefk9YFtK9BmMudThYgksmurhWofQRh2N4dMDuYJ6w3sNAVBP986cS3FB2eTun68QYH6Zc",
  "key40": "4DeQMdAmwhS5feQsrrmMPSxjhyaCPq62UL2RMJUrPSqStkP1Y9YevQRaYDJL3HUgFaga3nrZZGuVqREuDACGDHQv",
  "key41": "3icBG6aYaNqQBs6ex6Q1XTc1hvcQvpaUyZCHkVAfNppZbhcFeZmawUzzCdsyiHVf4Xa5VkJGrV8UxxvMRwtd7iBm",
  "key42": "23uRKXYCWpQ4YG1V8pUoWsYD2nd3RoxEgsky19Vy1LaU66j6WqSYeWxMwPjZC39XAuGYhkD9erNE5X92bNXxH7dJ",
  "key43": "5yN9FLdvdMFSQDX5eUDP2m4mAu9t9Mi7KH4KLewgg1iG9JW6KbH21o7WQjhdr9ZPy98qCVMjmFJec4UJs3xvRe9z",
  "key44": "5eK5rJFqkUyfWY9RgpxzpPKCYZeUDA9gZ39CNNsQjkshoocUxzdaWevG85JK4r3kSb5FG6fUXXSqMeWortKGdUrk"
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
