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
    "566ACemcuxb99jbypVt2LTC3Jr2nyxTmc4yrkSEV3N4ugJ6PFTViTA5rNGJk1Ua44PKHDvMFzSztTPwKczwyEARz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3T3Grfgbfz7NGgUZjNkQwUcJUahjNgMEbfjaFMoh8rZX7nafwYoQ2YCNEtXAD6x7qh86NWFiPnKL1GYMB5ttRU",
  "key1": "5WumHYL7xJQ3UDpG4AjrEURsKkCfEyUvMGwHhH1TpfataTh2bJ354A31SSH4hzXeVx2fXPPGvTp6jqJRPiDbnxtZ",
  "key2": "4LYPG9maF55TaPt9FDsRZsYGXCxrb6LeM1LgwxEVde1aGpLvjZEsD2aqAYWD67YPDGWpfqa3huQugN7AWGs6ZRP2",
  "key3": "NZf7zTBDnCQ1giB2PbAEQCYafj45am7Y4MC7gsFY8dYvyMk9AvNT4Jzu2buRGApbdBESkiPy4CXm28KcZCNHTbf",
  "key4": "2FYionJsQacH4FxkQ2rQUWzpV3DiBpcLnq4oQiZnassg6XKcDSLtfKK8KPQMd2DXgjwAv5NpxYD3HS7yUgWqeWLJ",
  "key5": "3HDkArLSoGEAjNuzdB3sMCnomUfkPyGfsTwTDhS14Z5utBrZDJRPy5TerSeYYeRnCwkh2oDcyYR8FJYPY2MkyaM2",
  "key6": "3V4dQb5XfRePHjSSgDgRxtBmcuvtRuRMbNTxMSxjZYpKjZQosPZVYBh84mzEWg916R2RzWexqQhF4UtJyZE7unvc",
  "key7": "AQUWZbmSoLT83v1nqyJPBskYpPPQJHauDL6rQujxkq9cGEdQa71tZEJ444k73S3WFsaofwqphEXbHmb9za6F8cm",
  "key8": "3Voujz1Vcmwpud9wi3jsAXFijJrtUvKzDvxZzKievJZQo7uz4NQUVMkNU3C5ewGxzbrenjATvtPMj4kydDub8yiR",
  "key9": "pDyAMso4Qw37WLVj7KkJMzVRr9p8QH88TXo8nyQc5Na56hPc2pSkgtW2GU5vuS4C9kqgtK4ET6DmWTTMmUAkCif",
  "key10": "5YjSmVY7jTukCdCcpZB6wvGsYjCM3xmy59VTu3X26uSDYnExjd4Hd2LuStGgBXdQqySqqLJ9Zr4WshJrEUGtHV4u",
  "key11": "4nMgpESarzguwLGAo3BHsB2Zrf2LtUfZatFAqbWytYS8shHzHVeqFVhTxim1dcNyMqAaNGMAi4hAqpGpSLJ11zgN",
  "key12": "BVKoGesfNQvCiPn2CfTXZ4zsUjBq8TjTrM7ya7zkdJozbH2i5djX4K4edhCeFUszvrB4B1bQNjdQnqir6mxDNMG",
  "key13": "4KCVZMpTSGxstj3oe6YrMVSwqU8E5kdhMvtbGFE83HNbiSa5a7TvYND2buJ6VG9PTZJd4DGNKHwi5PPF4YNHVeK5",
  "key14": "4k5GZzyDsjcECV3APXt8XPrnmQrYtjGJ3tENiNi5xB74xc9ea1nvMcBDswD7gQmV92vDQkqzsk9UmmtA2v2WEtJq",
  "key15": "yeGx36fYkSgHNwScvr2qKrnNCfKKHNwSChL1GjoCHCbgniHqBNrYmrt32bjcukrrTLpJfeHfvrw1QWNCNzy5ijS",
  "key16": "5rWqc7Bxhk3eLrUiYwZKV2zsTKdriLXA6LzsJgdZiRJAe9QYSRZMct4bUPVsDEVEgUsuHibqiU6v4X9NbxDg5KrM",
  "key17": "2Z3e55PAa88tNY7xNpgXY4FS9aFXwdnuYcYo9VZGonS29rCdkeLn1CvHoZTfKfNBqBLhe8xmUcvLDq1smQgvfUdT",
  "key18": "cJk31UuvnQCNVwnwE3X9iDxA9LCxC3jEKaBE393sqEz5DCGeG4UWuPzL73Mrd4Hza3kminySMnpR9qYad47qzQT",
  "key19": "2qaqEBwkXCdrWoQQiFK1CTun9CKTdhUAgpbv9yAg5jfaKLo3gH5yTHwsj3cTYhnrYVFm2C5s8YhAEGnPwB6Cj8yQ",
  "key20": "4S6xefLSqb1i3QQmSiyeq8G6PSsNYYn4hTsPjMLVaC52QXNfsnr1LEEupRGNDzuzBAyeXxbdHcG86sU8RLb9oL3k",
  "key21": "pX7kmb1Panfa9MD6YpWNgq63Fo7me7veemg6R1prN6QnuEP1z47oHVQKYZnZYo7scRpHMxpqikzmfm2xvp85stB",
  "key22": "2gkJbXqzGFtYbMBXzAoncewuq1JhMJUBn8kj1nAurbazDskTs3YfqZjqY7MrYSZ9GPCTtqb7fi6DLFnbCfwN5HYG",
  "key23": "4o7j6Fi1km4UUZjRTdgX7NSHKeq4RcFEC5UM1qhqdf8jqfBhZfxH9VDMMewYyqwz9zhVEspaoJKDTKE92bt1jd1a",
  "key24": "4wZpPqFaAZfpGEN275EdqCPT7PaKws9916atTZA9sMtYBMXxJziLMgbmEiEDsbtWS6PyaEq2euNayNXwkGULU4YZ",
  "key25": "3z3uqLjaqTanJn5TWQvxsaL1rfVncTXDtoXy4mQ11jEg3F2GRLqi33R1GZTmASPDyPfpZBS2LTjEHS5pw7Hqb3XU",
  "key26": "5AJwpgncx4GM7vT3xoL8t9XBGH5EfUftAnVs7fGpyHvDVtvwwV4HWjvisYK7YCyTLwgSQv8CmQDcTRiMUidYoKnG",
  "key27": "2K5PEquoLyE3LtGkZxRt3YEYeyHmmcGuGZ8wXoPXE9aUu2Pfjt7MLBtu6EZiaifavMJDrKDciaZhHfGP8ToctBRQ",
  "key28": "4UjfLwJsetkHHQ8abHfp3VZnC7srQ7mPg1CXC6DUWBkrhdPdyKs8iWYvhu4GvcLRJvtk6Q5jpeMwPcKu86x3pqbt",
  "key29": "jSDNLsDQ4JYgng5T1oFcaHmoLJKTZR8WkCRqah1prpKwxMEvi7RnaPbjV7ZEN3pvHASuQFks9yHoRRyZP4mSQNV",
  "key30": "4KNR3N3Bk9qznxJzrqwdGathuNwy5zWxjHUWfrs2u2mnqKtnAhzNya67Ut35C21cKzRMkvF9ZXMBuFe6HG3Up4By",
  "key31": "5NYqqTiff1hfiwEnrSHszpjnAcqBoEs3CmJ1Zoqzqfyoagjp5Ygg9iLb3cSALPfuBxF7UZb13a6VWPoe4tkg4N9V",
  "key32": "isTw4HBExpXXvAMbrs2Zff3TiGV18AAVdUrZdAF5MHkYJvScZp4PiNUn5ZKS1hCRFibQSZj9HK2TnzuGVS3cxSi",
  "key33": "2usHGHkGiJT9e4ubdxaUQzrxj7y3tjGhHayn1voZPcxQ49R8S5wqmd9cBgT95FCBVoAFPzpU3pBFGDnNhbD2Zkz9",
  "key34": "yNQn41VEdziWtAZq5JD4vPsePonRMayBDQ67UWAfc6hD7Aq4MsobfcBf9YzxCs2XEnNv3ZzSqXA2FvptNdt9wvm",
  "key35": "3FKMuMguYZ3FauDsbKp1SRGc6WdVFCsaFmXNZbM9v3mjTJptpZkEa1ZKEwGBE5cmQwwoZsSMWM4DyGuZJaRWrH8e",
  "key36": "3MWWYwtr8hRjEm5Nu4YQmWd1Lsc5BL69PnGnTSx1mpgo2uhvWc5fdcFBv7LqBRLvqBX18AN5ybe7yMosmSNDKtoi",
  "key37": "2bHbMGrhYbXnSHaukPuJsLsrEvWhSEzt5bbmvtHt6unCMcz534MjdkN5WkcKy7DxzhMKEXT9EMaSYpJzLiZ52BUz",
  "key38": "31SajfYj4TixLzD2V6iS1z3MqjtiWYxnx74JJkENMxCMUwcH4MBYCioy1nDv7ohbtgrJkZbP1bHmAMFFGdKLqsZ1",
  "key39": "4M3arGEcLJrFyFomg36Q17eQNUvLKR6fAdG8cxrjV44cdiDkuJLGj3UGiZJxWM63wKkFCkepqrN8i58A1zNUB64E",
  "key40": "4rV27xKFUJFNyR9DWiFAXQAzw7hjiBHuUUNaXyUoN6J92TxAcqCN82iLbh8rCHA9KvxrFFsfssnFRBddNBBNsg6y",
  "key41": "5hVvhVksVhTYNK5QVYXJ8KDgwdG9P4Z78XbumhfrTB8KLDmiomAKudyPRZYZukwwzE5JhTmsLVdTsDAiUZaJfWdw",
  "key42": "3wx4KaZjNaLfyfeYSYY1c6tLpTLcX3z7v6U471KMhnXnP5fjtswTR5wXWSXV5GxZy3Jm5XuJiZNph7iuxT8Jjuz3",
  "key43": "5dYpFUK7YL4FAtGJPvzkxpVjGkCvf1G2Xf6ruYrQzV3ZtWXoj7dFLFUNYPCeNBLBtCTvMX2JHU21ZRMwHRNPotbs",
  "key44": "Gq61E3X7FJjvV6twoevdNwnE47Sngj3Wz36CrJVk5FxkUXVfVXKMQm4S1TSuBuhZVyaeMCt6B4Zyp1SGE6as1Jx",
  "key45": "4DwbC1snJpf9a8GJkkn7YkzNjSE6jkhVbPTZaNEh477f3RW6oh2wNsEpdzr7Zg4RKhzJfbtSYH9f4q7GuGxzurk8",
  "key46": "5DGWaSuV9ucCniSym52hLVVYGw1QWSAkKAVkjkfqZ9hUnJ8P7vwHg3r3AajyTjG4P6RS2qua6C3zimDvi32iCUgR",
  "key47": "5EPPZvqDqw9dkRjuNsvUpYhd66BnXMLAbZd1CkaXWBCJToEizQkNqLgbBRYb1ajHcB53siwRGRU4qanNpmAUvPSV",
  "key48": "66Wu4P4th9A5WHwpoDY1xRjK9d23NCfNQRRH4Fbu15ZEVmwoXAS6jG3uBn4NhG9h13moqmZK89cvwt4qu4vQTkAi"
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
