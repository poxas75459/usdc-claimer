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
    "4UWcit3kP43kPgAL8b5cXBdoHJbTWxVH5SJiyf2c5mXBdvEU9qG6cw9uxwFG2rwibqXbwtzV5RRsy8xyNTHaxWTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7xyDojV4t73iRECq3jQ9Fra3od9TPapNmC6U4KCqGPsFJF6vyD27NoBCPtCp7QJGVtGxRj35RJkzZrE5iTzS3k",
  "key1": "3B8WbFCtm3APS8m4MVwoqn566Zq5BLn3Lqz8kkwuRyzcNfQwfYp9TYvL1H8HEF1K9qakaWRVpod6DLtXeGypJXEH",
  "key2": "3YhBBgsAEEbPwvgjSRnGQZTAWMHwjE6aeevhdoARcvp3hnd7ZNGN8oSkS5zjxZYjAgN5AuJsURJpjC3c7aM1AfTg",
  "key3": "47rB93Tnnh9T5xAh1GkmeJ9xXSxw1TqoAyAdy41jX1fgPVFu3KpBGLLirLAjg78xisN5sStun9Q2DpSqcsmUv6K8",
  "key4": "2y4CMe6njqdqkMMc5WDWnmbeMtjPFszH2MZe1DjB3XhoeoFj4TSyHYJb8KscJ4EpjwQ7QZAD1t43SKnjaCqj5p1G",
  "key5": "2pVKKvW9eP8XxiyKPsLSCnwdf5uxPRCwzUrYSJUko8yZvtyizfyJGtHZRH4W4siR4WMBYDnUPo4TFnF7kQnBqMFT",
  "key6": "soSqQiQAirrmio2JXMQWhaHjZJKmkXCpTkL6TZLU7P5X3yLSfv2UyNN5omWXdqFb7UNbVr9Z7VUtEH8xsKr8RRk",
  "key7": "eWx4CLiXpEFPkE6Uho4nYB73GtybU6Ngr6BuUxidzdDFbFXy92RuDtZG1EdUjkddZzAhKeqpCujYitw7bDSvajg",
  "key8": "5VHSMqNYshSUUvd13TY65yTYofehSPVGgf3Moo3TEUadAZZrU3moMUeMTwSCLBhGbCVpz1xKui8PMe3Mw3jkLnZx",
  "key9": "239gWccsjzKsJxLJUWu2Scw7xVof4yeKWUCRJS7XycHzBpFf1Li7WjsK1wNBcEo5X2CLCgahjkvjqDKq6YiJ8TUL",
  "key10": "oAiueYwho1k71k9qQvnHdRMq8q8kurcQSg1MHEBdh62U5NZgurRjvbaG6Rx6pGgyWwbrwZyn3GwEw1qDSanVUAJ",
  "key11": "3LJoCB6PFhRHHsbuqEAnPTFe3tPWMzksxdk4tEsDmgf4gTpsEojxhj3PggGm1ibgnTSPr2kG9HfCJauRKF5Qp9vg",
  "key12": "5tnwnzaTRzXbe4693LwSvPueph3weiKEgnoEoDwh6tEPwkjKzYN6NJemHfZgz65tTWAkNnhVLBu9azJu1hinC693",
  "key13": "34L3akwS17sTdxmKsVFaVDmbnZdRH7sCVPWnA9qDUv3Tftk9jd6xaWJp4dK4eeg459nMbe9qUcUCQSQsw9Jej5o",
  "key14": "3sgNacUgzRFYXmtLYZthsUNfPynyMzeMtFdcU7R7HnnxW9qPbaFR6CegdaANBDuqPnErBgZz6NMveCjd1atKJyq",
  "key15": "24fkpSu3T3bDtP26RS6gNZ2vWjc4UJ5WssYKDVXjrdixkLEWQFQQtwBk3GvX5m3ij1VnvQDBmX5BFbq5AuNmMaP4",
  "key16": "4eAkXcqcYaXc98oKTsLTjjsTdhTT6TpyRNZZwYRvGaWmt4CYHp3mw7AwdXhcBWq1XKwwN7t68338T2e34DDcpjUC",
  "key17": "3m1U1vjbesMdTefaMj427oCeZ2osDjXQXD38uuwhS6AeMroaPUesu7eyZ3XdGdNKiwx1hUCNjzL6k3uMbmLAhX7g",
  "key18": "6a8z785YZg79MwtQrS1SGWMfoRF1SUxwGHpcH3k8Php5VMB8CXCQynENbPDPapu3wvP5WLQuT5sJwayPQg3xBom",
  "key19": "J2J3K2f443zWkmWjhVof4AvwSCFN4HhMHJMdpER1FEUP67N7DS98YfzgrBDJQtkEahb6kizGJXgMwgAEuZSLRvH",
  "key20": "3DFGT4P6Az1mQTs6zanFQaq6TcRMMkrtJi9DEfPAEfoGAbPduqYpWQS2Y2cyCZGyDCRpNmhCaqhqUHMJ2314UzsG",
  "key21": "649ozHycums3xr7dmxzu9NQiAWDfkxqN1QjStKHVJF27Bdtdx7hYAD2onP2wfpXfApYEUR5NjQTPnrgHTnRQYPAY",
  "key22": "4h3EknSbGWYnJviZhqS7Mwwq4Dwrrp4US8sS4ATzDEjwtjYEcXFXs7UwNingQUF7mLon8basHgw2jTKPv47zesJ6",
  "key23": "5gTtbXRRACccVnDGmoA7Smx1sRhK647zJp7KxQYQQjHF6FMpCHycFm94gexo5ZvgUGMF9RoyrBHoEeYyvVksDpqj",
  "key24": "2pBMQL6YSq8HqdUFfccyTmMjzx5CezNjVDhc69bfnXAhjfeoZYdf39jP5R762GNP5Yo7oc79qHd35dbrBhHQewuf",
  "key25": "5NekWybsZ5Jc3amSCrPvMKNhFJFJFZe2K77e9ixs3hkEqZxbcvwzcuzr8ndNeqqTajzV1fpbwgY3VpgZ68MSaDmC",
  "key26": "5hRCyDTniCq2qJX4EJnubtLGNJamP7TTcgvauyfQcNskAiYtfQiqJhgMKfhb6efzjrwhewnpuMQYMVfhUhZd2rHg",
  "key27": "2cD8KQNtGnj2fZpYcRxWHhHUB4PRVe1L9G8rJb7e1FAS7FiE3qKnYJmxucbWH7RVz8jAe864dMv7Yr2uBhrxiQP9",
  "key28": "2eyjY3oP8Rk36PCbjgjnRaSkrNHy6yiX7fwL8niycxNFwkCHPTcp38hQzUKXBkMKs9kCQhuWKHJ9LQPNAC9EPPWq",
  "key29": "cV6gjPFvJ5o4ryzGHuVniXN1UzyEZgujQmkh5eSkeqpFqBJukyiMYAHQhgF3MbUHuFjty8BeQiGaf72KHwY8foQ",
  "key30": "58wjztFSomLp1svVEHq7GADxhqTdXTJraQLsWfbqNzTuizHEsxYwkbGZw4nTphALvmZXFechppyWtv5moKWNdqNE",
  "key31": "49HKc7uXGE4Y6P9U6GTvMZVmLzCKPWNukvemcpq68NJGzmTJfJQbPnWmxoqXwCTZRFfG8jQTfBXV7JhDsWXWwfzS",
  "key32": "ksKqWAGEyaqpWr8giUYMpKArxRtkDMV6Yrkjnrd6zbBvQ1DeemnGrBirz5D2dAbhno3kRHfEYYAZdRgB2wxeKo3",
  "key33": "4DcJV2MEq4yeZL9Epe4oVpaFuPK7TtKv3kCDQy7X3qbrunrb38SEjgQP12arTq6ky9JLVbPLo9BH94bZ86gWuRCb",
  "key34": "NqzT159z54yQXi46jcQ2KX72VP8PNFcrge2dBZKmFD7GdBrBLYTQGCrDkxKQwbutjQz3Mg2StSNK46Ma8214N9T",
  "key35": "2kpp7cdR7HJvAmbB3S8CsfaPXcttZuEFoNBpr8hx76YeSUvHcv9X1j7UQoSBdLyHiJFd2xLLNpfj9Z1LWRYGGuzq",
  "key36": "2uWSDUChdk1XYuAiLjeKM7WWDLQyeXuVDtKJWxqgUYVebpAiuPbjr5Pk6uftoHMyoZDdm8oPTfRcmRZ4vUsrmCbB",
  "key37": "5ESZWhzRFFQoMC5JbEPuMECBhMEZnbsGFgxmgfxmYtbsiWVYU8yE5BgVdXFBJa9kThh6YFDrtjDsb52iQbykkswX",
  "key38": "4S94Fi8ndtTHYWap7ZsWd4yZmox9hUEw8q8pdXkpWntDnXBC6fFV3MxpNg1ESHme1XPjr9Wv2bYMWryoLWnmmx22",
  "key39": "5qNd5CBuWrFE8RPRfQXqo5kn5nh6TgtMMbAJumUV821ZUhnavqBTuVfanc4kMTGCMjmQfsZk2MiWuPwykHE4tzcR",
  "key40": "2GvnXSkmRvXZpaE2aDYvf8D4Z7CjAB9M4NXvy2VJXoLQBpZG8e6iMRx2HbT1xNXSx4qujjYFrr9wtaYabFbuTrF2",
  "key41": "5C6LFQU7nQZJAXUmW5EsCSCsHFkW7SA7x4pT6FNyUtKP6MCsf2zkt1jTDsx1mNhMT1Q2L97PFb8SycWmq2oxwRDB",
  "key42": "5sL9msYoVkcDs79G1ette4e5saEA7PYazWUGhaDqEU5whUWw2MiNie3oVBdjciXYXzjWfAVNGD7Q1g6yLYfrkZV7",
  "key43": "4WKouCwEutCUVSRqiHrYz5vgFtAsAm3bbE7zF5KyYgwVzj6mtQAyKxZs3e2Yoy7kDt93hgC3j2ZJnxbT19MAUkVY"
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
