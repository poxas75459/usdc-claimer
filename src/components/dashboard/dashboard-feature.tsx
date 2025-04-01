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
    "45Wag26ZgoZP6mdNf8Z48CmrgdoTtxbLn2vQZQbqjsMReK1F8ik5PZhXUNykiYSkKdKmYyK9gj5ymJ21RPCNtc9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMLh46FYZYArZKEeG4P4LV3r2NYzEhQ2ywCDNb3nXiTo7wmpJUBy8bL2vmjzfeQigbqUPJRyF4E4hZCfS6GVP5Z",
  "key1": "5dFmASE2g2RDT6dc5Uwi6QKyMQHPvnTSyJxYpD9RheMBUxDUSpkn2XwqwFn3DY3PgSoo4HZKiXEnSKTSMhyPxk61",
  "key2": "2vmrQgrH6A6SeXSckcp9umfE2WCUKRvWjEpEfYpuEP8VxcNfmcLpBHcoWpNyYCM3jeQn5Dsi65ekMcVPSKLKbJKZ",
  "key3": "pWdizBMQU3cBVsMyLd7LWHMgRQdeWaCp2XZaKdyZQKHp78wG1mbdorB3w8EbR9q4G3RThUC6V557XiK9XmVXNcS",
  "key4": "3odSKmyNDWakd9RpdroGXQAvJUeDxfK6937uT9TAvJcixzsCrbVpzy8Xx8CXLfy7K7oRY2CyF9i9GAUmj5qZbC6X",
  "key5": "3zPkhD76uTrziC4hK4sPKJ4GaQX7e2f13fvNfxsXCXRnx3UhmP1SkGCK3M2pgpLJWPjrGd2CAYSMrDHziC8vAtGf",
  "key6": "66hWXXodJA8MrfbfdsqiyHXjLMBNogtErAfyNpy2GiLS4cXeebgnTyPrWrMzdjxpj8o366jcBGZndzGKMAyowAhE",
  "key7": "2Mqm7Cr1daNzaWzoAtL5EGTQTcPSMw79ta4993ZjF4Ehu21HSUPJZSv5zMSDFMTX6j54Q5UWuddsutfDeWEsWc2w",
  "key8": "2LucgCMc17QwFqPPWV9YvmWezJKscTdhXXSsXWEaqT8xTRoojkSF8F9zMj98tgJSNtmMwJyoGFbQ3fSot9q66dn1",
  "key9": "3vLgdn8BBVckfaxdSsL8uR1knDMN7vZH61dbm1B51GEmaHXUh1vsvnwPey1gTtcimjE96xc6Ndt6kq3UUbLvrzuG",
  "key10": "4xfS5W4YY3r7ow4hgk5cXrRJ8qjikryTQNNjfLuQy6gmR3QjtsV4Eu9RLMLJQyqmCzdwiaDBJ6jtD7awASRPtBcp",
  "key11": "3yzHsq9JqxWaVseFnAgm2RXfS6ev6c1igTM7wnuoTRhcy52gsvmboPdRRq71HN9Dw599chZ75N8dA5U96iBx8tKQ",
  "key12": "4N6ELWrAoB2cNEkuEHVT9k8RUCdBi229jk3hn4aM3cQqgCiSxyBNB1w7j6dRZDpF3TgSSFvJ9n8ETMipMsTvdr1N",
  "key13": "BXJamPRtcdeXjCne17MFXpRJ7RhwwLqQz7TyPi2WNGh7VFAeCfLKYFSLxPubQcd1q7h9zWwDcNAwTws9meVrjej",
  "key14": "vfYhUghr93tCapVQfZuVbDyZ94uHeWsPfxQxMmo8e41T93NvkaCeJ4fnTrSkaFDvf6TsaipydN8bmdEm4Pr8GWJ",
  "key15": "3P4YMfKy8jxexDMzK92EnmziMaVjh1iXMvon3YZUiiGQKwBVAcPGL8v2oDW7Jb9noavsBfBnTiDGk7m2ZkkNvLgF",
  "key16": "2HcBzDMHPBMHcREe2McPJ3ga1CWJGrgXex7Hd9Rkpf877zg8WrjeV1sUFsf5Q25dnHsLD4uSmXmwKPsDrg8F8bEg",
  "key17": "3QzFcYv8N9QU1ZGccTsPciHJfdo8RqPb5ynoBfzmAY3Ka1yUcCZH7r7sadnGpfJHihYnoHMRPmL2KWaRQhh6qAKd",
  "key18": "31QZCWvU6JTwnTdCcfxNga1WP1uhyWpKyvv2NJYD7r5vDE9WninVsW6T4BVibn87cYLpffnDNcJiD276tgdD1Gs2",
  "key19": "4ZFRqsDTzchkb7syfnzTZt9wUPD3pr6cSXNNVRF7EPHtoK4YHSJk97xbcrZ65xMQehnQLPCWtKBDQ2HqM73sPeV5",
  "key20": "3Y7sd7BxjgLBWS2fgPSaSz2S22yaZJUt9c4gqReStbTMy1prE6MBKtYVrd8Bqn3huxvtmwSXxnW5ZovKde6sRTAG",
  "key21": "5XM2VDuG8EMQu5djnYehYooSpWahJUhcchPyS4mrPvV8z8wtvzMPPfoDNLi6hgwJRkbRA6FsPRwFrhmrj8LZkjVt",
  "key22": "4CQWVUhpLFhPwB618T7sntKDqXVyrG1vRryoWe36zhFMhNB4av5zUSp8cDML7BCJTjURApo7BhiCN283kSTYtMFf",
  "key23": "3Er5AjQd1hqMogXsr9HxGNYChzxbbkpHj3T8UWyZPR5XBhmqxuiZVtAZayKQRH4djFrzL65sJKLpSHE9eXjY2Y6i",
  "key24": "5ZQk2wBGLBg3b7pZSLkyAuz4k3cRPMqRSVQUNC1abhcBXoh6fT3DC2tNow9XWxn8f3EC5he1ohm5FEu3yx4BYEGq",
  "key25": "28QDwFdT2bzPuEqTzrBqaGoxsgAbJS5ATzghh7noPYPf5gWiUfNhCXVSYSgtX7RPcSyTRssDdeekzELrqWF5F6AL",
  "key26": "4k4QgGZRpvtuiEoEVgRmjrT8bQGJfvBhUQuK5kffB86bgqjPAHcMzBAZej6kM7JH8rjsq6NZZdhjN4Nw2tVBMmfE",
  "key27": "4bim7ExRN2hxaMvhX6dgS5wquTk7hRW1ocvrsyxgn472erztsivsiZHCLK5xV6EKxGpn67nQVsbNxdYWtH4jkaBX",
  "key28": "sjN7NQAdrgLxYccNMGjsugnepzSWGHf4YKKZBfBq91fS3Sw9JKEUdmV6mnfyRK1oxCfwMDHfa4U7rg5oMtsjdLq",
  "key29": "4gMz2AJ9VzfpJgHHvLZu3CyMxBqLvB2M3HdDhdCEoRVeRowj3siVZeXPj7gqQEcUbezoQEDoDGtnX4VRdyqz2XWw",
  "key30": "3DoCqCGhqtyNAo7MxE7AnTFDpnfLQK1xSM7fxwf8wD51UE7MNKGgbGYsPcFtyHuhytZ3dfUmdTFGkqKQPTPW6Qrb",
  "key31": "47TQJpvMqSNKy3nXQrBosSkxgAGJJvEkXM338eBADL2UNZrApgug5UYWkSfGKwJDZGKGZVPmzXE84HhA9Y9AJEn3",
  "key32": "2gGt1A7o8bJJuXec3GjgQ6DJeeWVGkMgQKEPWXC2fxEsYiKemZNzrLYnWzsYDaxDFC9ypQHUyLqKxFUrjsajbW9i",
  "key33": "52zKk551PpGZbLMj8jg3eUyFkJMcCdv6KNtn5qSR6mbCLe6nyLcbdtvcTGMZh7Bj2MapQadHoUStdzatVUodDDAe",
  "key34": "2rUG8fkVoyKrCh6V3zQief9rSjb6WM5DVyVp2nGXaVrX8joHnWwhHhdgMyjEa3ipbqrZsNr57FqgAPiZHVzRHxM4",
  "key35": "BvqLgHuptVotPZHbBrr8aaQjsYzqWzJDXSHPZemyJiz2LCuk5cZ2wm8VDENvNcfMubZr22HWnS9TmQFZ5Ug7Bg5",
  "key36": "wE1fu4Q8fqo2QZZfebhnzj31jrYY58PqpiBG2UNiHHEbYayDTiu96CuTjUXyyacj9WCRg8FxSGBMGoYpqTzX84b",
  "key37": "2vRHpRUbqBmfwYrMFaSaaoejox6bNUsSyPTQHfZcDJ5Xu96NPtVu2F582ZBpsC3XivhAHXe89kuetmNcoVRJu9We",
  "key38": "jXrU6vADKUpLsp6ZE2UHyNqRXhhiL36J7iontjjLxRq5o1fJTBHL9GHTqfdB94QzE5mqMhm2KEV9UeKodFjRRjv",
  "key39": "51Y39hHnwW6ScEwPieKzHpaxSGwRsfLAtdkyqb79SKRfqhQ5soASNEmxYt9stunzikGATa84A1zVA3GDXC4tGka5",
  "key40": "4HCRsBSspsyWZLgJ96ufhbrv2K7AxTyVqTMf4pqGaZufFEayn2hSzW4mDHZcZiGw72yiUe9Mu4Xt1FnAB3JQhSLm",
  "key41": "2Vcw62jmaL9o7yQa24pijKNW6jTF2YuoCESsz8isjRvyQwX6aiHKXMBd1QN1YhY85pSgPDANdX6NvpTdCbV4hntn",
  "key42": "3fmmfXiWosVcwU6eNTvETHjv8VyyAUt1dhEvFFWjVHK4WHqcDCcYTNpKyZa3KVyuteU6MDAtXeB2thJjBxAZYMpQ",
  "key43": "2Rf6MkL9ekLi3D5KaRkFvRXPJMHuR7JWRSFVWGTMqEGJ92iq7P2hcEVrcdTFrq9yofBiK5TXfb5YTRZSF8wB8xpk"
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
