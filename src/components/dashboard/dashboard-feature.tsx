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
    "2Nbhs3RQfEjhcH1iME2B36na6tVQ8exBsyiRfCyVYUpzVQeYMeWYtLvu6Nn185CVhxhsmEv59zsiVnzdc64WMcaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S566XuFTruu3LRjjuM1q8s6KqvawKaRtd8WuJsQPPm6NDEgdhdtsbbKZZfoyHA78T9ChsEij5Hh2Af8UtJ9tCQR",
  "key1": "5nVGSyvri28k7Vkgz8bojYqGnuhzDiXiHpMVskCcrn3ZVRgC6Gn9Loyrm1UVzZAQrtG6JGmYkXQxe3Lfh1Ce9YsC",
  "key2": "2bMHuprGWZczKuTb98YJxbe2oT9BLj66X3NH74UYPryRGjft5rorwqS8aQoJsETDmZNmjNPKqa4KK7geF1ftfb4q",
  "key3": "4JhJbfaxHUbD5ZLNsCh8TngBe3oLfBCj6GEKdLkjqugmGTr3WNQMdxTJHk75mKDu8iN2PCuH9tTykiqv28TtnmUK",
  "key4": "2F2c7ef3eSbwsLb3HANkUKANgGkiySQCc3f26AGWLzZ2cf4LLUN8iJB5WxgjZuKpPnAJRZ4WjdbteneB7roiV7oj",
  "key5": "BpttQVLAmuG5XPFsD5yrVxaZ4SHVeQVaKHVZ1LF7qzayiAeM21DCkb65mvnNbCj9KKGgyaZWRGYg1EKh7vLXXcG",
  "key6": "PHS7hD2rSyb9nAtQU9feKH9BAVoYE9dBcEu8Sgip4YjXymk14tDbrNNx2UVjzE4fAwevRg1udE8npERxEHYqGcB",
  "key7": "F6hXUrhNsvKKmA99iWLf63RGSGuqsHwPBLQK16YYn8qYdnzp12n6nNJVQ6MHpM4jStggh8Xna4gzm1sNFCzGYkj",
  "key8": "4My2kUqEwKDoh6ZLAYaE3so4XFFuDJGXvkG5NyvZmUZjuXotQ5SSQsGxMRuqh5BBeM5Nxbn61cEJ4UNh71im8kLN",
  "key9": "5ftHzgbNzzQT6PvrAT6t49ogN8CJWzbxeSgSW85JfxzbRvxR19CWftPiv3sfDSCn1Gws5aVewpgT3UvgUPLHbrVY",
  "key10": "3J5t34kvNRwb1My2dVyfwSj5kvjABtpsiZKVz2yPCD8SZ9256NrzbHSqfXZ3jqGmZP9gpbiEnC3udDejVytHntJ2",
  "key11": "4QyKz3ARtKq6BJCkxEHkaJRspwUMzySJF9tbdpmMbE9uFAyNNbpDgDb59hgQK96a7va3S2b3HuzRqXWEunxbZqYB",
  "key12": "5NP8VdrLanfr2E7cAk7WoK3Y8n5CouF7RDW7ygLPSBe9thfLSRoGiw1bqZK2uKMVtXSpu642XDT9M1gB6WBTp6Ez",
  "key13": "2XsMyQ7vaKJu262izYkonrqZcZBWu3UQTTWyvPZBdu5ZYgmdgio3knUTkEKCNMxHuBaP3sYbVdKaLxu9KXam1xDX",
  "key14": "2Mx3no2VciZ62jNMN1fbFbWKzEVEDeyzkfkhbobHJ7gKTp83JQKUh3Lrujw4u9Pybc4GjnkNwTzz6irVLhsKpNSm",
  "key15": "3WHEWAn6aRmpvu15qqFssnzwm2iHJRWS92tQFYaoSLsHEa8Z9a2rV3ZFgef7vdN8q4VNxsTTp7K72vQyT9rEoFeU",
  "key16": "31JFCvUFN1DVJjxksFS3EoVmjbDqX1wnT6FWNj31HhCB1A1bwGUyJM9BYottJ1MU2C2h9YHTxM9JDGSXmbKFsM8T",
  "key17": "2geAsKt3Dn97jnfsz2xevRMnX72GBVvJKhouCUGqckVn9C2t8ahq1zKi29QipifLXEPkeAkJEMXyEZMUH2YD4aFs",
  "key18": "2QxBDt8K4e7TgArw8XdjCMcEWqoLsNp4ScC2mge94KvfSbJvAzABWDmjXCv6AhirYrc4ohJBGkBZUyS9Qsggb1Ev",
  "key19": "RNSbSRoiEY818djWBEmZG9scnDtdtKbH8sqwiXqVeppbAkMd7ETpSRu8gkwpvzcD7MRRpbD67xXdqPFg1hnBia7",
  "key20": "3xNQ5HLYH6daj7f7aY8HSogHZcRSpJmrsta3aLUf4NKqeKvXNv5fKsRaJCFqjgiYDFC5dmxw1VyVgVwFKSNb1T9U",
  "key21": "4Y7QLV8S5Rt5JP4iA2QuuPpqYp4VLFDAnz7fw1PN2Q3UT6pj8ac1SiDNa6KDVe1nNK8Hisi8bQkAWUiucocErNtn",
  "key22": "5Ro3Q4dwmT3TffWYreSxU29LHywBun8nuXNZubSkzTUvKX1TFggP9fNQS4C1xhgdTaS5CJAZ1db2pXuB2WHJojZn",
  "key23": "247tSHaHGVEttY33pCvxuzMRTUFLRDzmmRwpKhungosWHDnSY3WzSu8HbjNAZMeh1yhczNZodmQvuLEPxzJ4vFZb",
  "key24": "2b5dK2Rpz6sUhtw5kfJ9kvMLtuX32EyLcTwSDY8n2W9Pid7j6DqHXG8aPaY1K8jNU2V7eDEouqGdx9rMSoQM39yN",
  "key25": "4g8oLbijNzmRPSJgZ6knBYqafvSdzu4i1AbQ4NhUVvANsWUhovYqMPnyENe2bcXJnJmYAZZKvK2ERw4RkMUBEkgP",
  "key26": "3mpUBCxmo86oa6F9je3ssYD65Swk5knQGgsS5WnEjgAJYTy1s4XU35NaATscPXhqgyJwLnGjZ7zEMrvMRKMav26Z",
  "key27": "58zZ6yEPhFbSasVNK3GHvT45FYSFdY5TVK8qJeSYqoC48fo2TyCnP48C7CfWr3gTzyQdrB3cv8eNRiqMhwL7tpst",
  "key28": "egL817n1Wm3BrzM9SstNP3KsetLkgJWi8sAeR8rnkJn5oJHPcWkZZxRgB78pBEHXjTgVSZD3fmnuRodH8Wain52",
  "key29": "22CCCvLxbYw3USH47S9qCgjdwc3NU8gx3R5NbJFcLFDvYdXTRRhENWYJeRFKVBpjpRc9UXeve2pECGE4oERBdmQS",
  "key30": "3Mfr5L6Bq7r1kfN8yzCkWCxhbsZBKzNGQYNMPk3jyNiNjqk68xQ4eguHsufsxQTYauqVCqTs2fUZSSgXaC9Nqh52",
  "key31": "57ZHKR1hcarrWAemcvsmmCejVjEHFxzRWEucVrqzHg5fSNEAGVWxpyRbvGx2u5uhnnBRoyPn8ztijGhwmzhHxP1A",
  "key32": "2EbVzwfqaTkDc5SPXWGygTDBDyhcMQx5DZ8uKyF5xM95sUCoNHoxQRjM5XqxYhQG1VgyEWuu94BAbgkC39VkXu2K",
  "key33": "3Sy9EUdofinGPSstTLVHm7QtnvxmFsh97xJveFXqQpBSyssThiBqoZUFhx8xpQDbhxt5Pjd7BnedTa11LAsHLx2o",
  "key34": "4mns3G8EirKd1vAgZvTBaSdApP9MLcnQNnCfZjS53NL9pX7Lz8mh44WYbLSzmTXjAmB8sqvgHGQHkcmnKaSB1sW6",
  "key35": "3scdjLwyMF2nQf74GTw6YS6gDghrM8r81Nc2Y4k4LzCyyzRFENsWuvHe8rDtrhjG87oamWf1poAD1gpg6ggKc1Qi",
  "key36": "5DqvNNYZ7m9QemzVGbQbY9pUZePuc5MHwqeTQbN12dqqWb3LcdSkyPEXPhLpeHQfn3Mvwx4ZwnoPopAdFspNN8ZJ",
  "key37": "64HL2LXh4HfA6BChXFkjZyTafH2sFSEWKMXnrQy6eAjQgRUoiyGLXKZQvaLYRgkXUAqdoUVZYQiPYCbK8xveBMQ9",
  "key38": "2RQfmhwxf8xmwCutQ5sZE7AWc8W8oBvkcS9EQzseNmicrcztrFvJDY2ufgBw2H6A1nYTZhtipQZo4Z8Svi2rJpUC",
  "key39": "32newb6ukvaSF1Co1Xs7Dj1z55itnfMZ5qibYJkzUWrRwwUXGAPX3zhBE4nFhLRdXUxaUC6dzd7cGjroKZt5Z84B",
  "key40": "3XvFHLubRxngYvFgVgQw3spbdjZLagr8Zgtay1hDSpsh42H2L7huo1ThqyHWuNkwhvYTK7fr63FeauSyXUTwt2D8",
  "key41": "51KcrnbhrFw32EMde2nzsa9m52ej2ydpgW8MnufpMpHLUAFNeCGmQEvnYyyRAWZZiPVGoX8xVXC9TA4jNryszy9K",
  "key42": "3HChG34mWNXNC8vniEAsg4iy4fztKxQsYQm11ZDx7KKmofCZ3tzR13uPjG7PCzPbBvC5BPJKbzrq7ySixQ622WFx",
  "key43": "4AbWdwirpzwYV6NCrtKJVp8aQnd6ByQgGng1Gk87hLUAtXeFTvNWSjfpMBubteMQ2fgQPhhhbTnakpkwueELBf8",
  "key44": "49kbWtirwizUfqrCWQaPctty9TZJAnE7HQ3hNXNQDnMYVRcMzuinw8aUEJM2X7MrVi97UsbMJauuiY93a2cCWAwi",
  "key45": "S6kr9GAGJohuZxGhNKSgmxiZW8ysz1RmwvWP4icrUqYYYF9CXUPLmSpPHVaPUGxriLRmWXrSHuCguHfd2XTeQ4t",
  "key46": "4bAZdcyVZoSiQyed8tMq7tzQKfweiXkTL2971N79E5PmoTJ9Aw7mqS6DTDRzGkYyudWZuZzejuBvQjh4gP5q8XzD",
  "key47": "JK18c89aFdBdvpkMHYhBZrb68W34PtvvgKmpTJEskH2rmvbmP9HreUrT7Q1a5i7N8YWpa46FoJGXY51t4bU7TDa",
  "key48": "Y2UEoEmydCwGK8LAkdqzKe8q3iMMzsDPfy8wgP98xo9AQnGk86MevMQdzfGseWoeXMsPTPnSa2zodGquWk5FVRm"
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
