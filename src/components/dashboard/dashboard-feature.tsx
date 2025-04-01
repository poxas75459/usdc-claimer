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
    "4TFkZNo1ifY3aVuyeAJcCGaPUHzUJEmximYSa9a9vUTV7bWyrsd7uZtv6aaLZmdDSRpcatQQ2bqceZ8nVYfjCjUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UU9ZoQLiWEgf7omsmAMcHpgEWmcpfD55CzDmu7s7bj9TnumF5AZCqPCZ18FxKH5utM4MhmYZHqJXmGNU5RmFu4k",
  "key1": "6hjLK7DUt6to8p4qzg7bRzGAAFbGyawgVu8rsy9WUxgRfMaaZdNGC4icp9KybB11LckPrGmpE41d2AnAo5tueGa",
  "key2": "4i2j9sWiZ91yRyshywxs4o6Q5REzSxJC1YNSZfV1kt6mcbmC2d7BTAiwZLF9RJ27XBgX6ApNwM7WFMNq8qRznVUX",
  "key3": "3Xfabgbi1zpq4aQXqtU2dqpwwfuH2rS134hFkDNyTHmYW4aLPHBqLiBxJMuRRdo7r1ubhEDENLUuinhxNf7ARk5N",
  "key4": "27vs76wCtKgJDzuGzjQ9eJHAfLzXUNtveVxQT23EJ1x8hCS4VSGtGx3ihM9MdoonA9JzECQcbytRGGar8PdyTC2j",
  "key5": "3VzTidJcZqcXgqY5dxF4SAkwa6r6fY35arrHwKRc4q9UXVBjQvoeagtfNPVNVbbSCKsMehwD8G8ju9NqJrqvuXCA",
  "key6": "24y4uYihNSNv4V2sb9aAszvNxmuZ9wuDE4fExmbgmsT3m5DaErsFD48CVF2AYbdunLLjhr3Hmqts2w3SqwjdrdJC",
  "key7": "5pQHGyoBk9pvQDSepqvLtxRdHoyJ1DpuBW8EQLjqGhL9AFZL83JVd2g35Ch8EzzZjejQ8HN4PX6owpBxJ4vCH6Mj",
  "key8": "3ruJurQrbXkfkSTRDZQYdAUeDwdGS2wrsPxtFaUuHWwaZkWC4JjLh8vjGyLt48G5kS9P3GqsAxaMHBDUbsMSB7vz",
  "key9": "3mFf1XYHbJr6Js3dG4it6ZtRra3d17BNSRSotWbjvdDS8eP8makTdRTwjY6hZiqHfZtQ25hQuEVD8okZgT3Bzy2b",
  "key10": "3juc81nEgEFw3yiCswB8yv3JC5tRdnAnj6F3Mga39KK8sPxS3769upM3qi34cKLNFHQaRWtUJmKwUgq5Yek3AdiJ",
  "key11": "2cRHDQEM6r8SkTdEJQgPc3V7dihXPby7fwHVmj1upmNGyU6oRokPoPWZ4zc6EFot454J5BMKjsyidVhHz6ZrwYb1",
  "key12": "36e97JcEZFqJvCBsJX8GHmDyX9dBZXUDX7iNudHtee1Qj4D6E1Pa99SBf5yVNu5YaiMUqpHVwdaJGPSUYyoxLB9",
  "key13": "2RL5vNfW7FWfAXNeM1znauUj5J4kuRYtCim3nKJEk8VDxZwGLSw4FHJa5Z3DCFt3SCinjqixwh6SoEo1SQQh5yUc",
  "key14": "knuZ9HEEF9Bo47mGBoGe8Agzn2SSDPYULP2q1mJKMHEJL4q4gxQJoF7AErD94dMri4SdHeV49EUenGW5wJNFWuw",
  "key15": "4ejZTYYeXBqJ9svVgFv9dkDJZ2Drf8kZqXXXadJdbsLNwqZNnjJE7MJFRDWwm1hF89vBi1AHYi7Y87zywJsKF7BP",
  "key16": "3SbHhUJwFKwJeWutLCr2Tx7d5eaymAbnvso1ZSUJSweibQWRtZi2kCw3jonicqs5387PA5Bz5XvLHBDKHQPxTSHP",
  "key17": "5i7TzQy1hDs75Le6ZTTFjxKFkQTZA8dSfYtEvdftWcdniLVqVdzpLUWDjGvgoZq1pAGbaXQ8z1xpvmxB83fPo69",
  "key18": "3coYzbqvx45cue5HLTZnot5GhUfihdPHCDPg67oaaMM2gvrZwq4DcsB3WTgUwkCZ8KjbWET8Y2BXaXeGUx3Mg8gR",
  "key19": "2jSNg2Kzbrbhrbsc2CBqWLoC42mk2pK3ikT6YL2K9tRraLwjAPjxsMgrBJhHVFVgSAUg3qferz6rzmBLs72TWq2Q",
  "key20": "2uHCJaxx7ehaWW1FMeYWcJpWqbt1jaP8fwwHDG1GMQFw8393NQMiHFnYXVNu7RbYmKjyYSSBZNkbMCbN5RAT1xwx",
  "key21": "29sU51vnAWjoehhfo6s9kypdHkT2iLGjTt9Pr2fJUHDyLqX2bszVnN8SyiM4p6cy4S9rnMvCJhBibsK1cPNA6jEs",
  "key22": "DTTy231Nj8uEcmUivvgLYDt6qkyMLivFDPEL2GK1hLfZTqf7Wz9pEuGMzK75uabWKWEUwscwBr5a9Dphf2jfFpn",
  "key23": "xdnPs5xK2Lfa5mmJb9AgM2DU8KH4mvcccKpx1gvbZytZjBtEP1u7HMzECeprYaXDe2jHDBnodoNzEUcYKd6vHDP",
  "key24": "6MZi3y9SCoadgpcohR5GoTSeAsW5xRE7xqyABwaUjaBfxZqHGh53rPezR4idA56yhsEEJKgoFWvxXtL2qKT7xU8",
  "key25": "3EoYRenak2MCc7Z4ezQ93GTm7QoKyMGec9uyvmbw9tzDjkNcXej4G4QV8Wuh2fgky8DeoELQPJnPh7ixuYxemesP",
  "key26": "4sg8qp8uWneE4MypGidXqZRp4ukK3q9UddWWtxavZ63c2xBDzmJRzfBPvT63rD5izVKDafnfDC1Rtf9YUJW65CCV",
  "key27": "4T66zBV5FHJRLTbeyvowqe5rtKJspUGoB1P2Yb8Fpav16ic8YSqmzSvVGRQ7HXx17isq66GrQeNGNtcTuQ35a49D",
  "key28": "5nsDDyPhzbnRGtJHrQveQHuCKseufm365rY237ecjNg2cEZqZCG1MhzhXDGbdaBvRS6283AFMQH6BH6xCdmfsgSJ",
  "key29": "2pjTtm2atceXsMkgh4jRjrHWPW7K8sY1L1bV8H1J4BfqULoM3LJZJ8KpYUUh9YLDgxS6HLMkSZMScCasTha8BKb8",
  "key30": "2VU74vdRv4KquY58sX9iXwMb7XpyWCdzcKfDv47qgZzF7ZameSu5qpNZJRTkmG32ADdy4So2t9og21JuK8uB3ovL",
  "key31": "9uM27gCP7ouDjTLhEKvs5EX7jF2JsfxvTvgX1XutKG6qZ1duoJkwy14irFi3MmeVuicHgTVjzVQ1dSt52H3iqkY",
  "key32": "46fcks6pbcDDHiLW49rXyCXMQ3eRKr1oQhTXkNTYkqabNGxFoYNa65xyNu2TQLc9knjVzwm8gs1tNmcJLLGYH4ip",
  "key33": "4Xv9qCFPgG6K5Nueahy8KLZ7rAbmpojRBaNMSLz9uBHhvSxTQUTy5wyaWV7eREWAkMmDA29yUBdym9yKtK8ACeUT",
  "key34": "5mgKdTToeXwRDRr8s6NFeFZMTGULQdp3G3qyuH4cfqWgJ67E5iL8rzDotm111evV5zpvQfyXZ4JoGfR1vza1vpdw",
  "key35": "3mkwpd6LxWazMGcXbGrgji4kMFCbbqTQCRE4n6esd3fxK3xtAbs6C5v5kQNTxVdmuvh4p7LkZ4vLYiERjZ77JSTG",
  "key36": "45K7gkrFT5vuT8Urxa84xM7eXwY2zBntmZmoqjvbhaijpS4UfUTpqcGsYYcJCAWJxmXvXeBW1e1yoMd7WVKaE7Km",
  "key37": "2Mp3AznTGMoVciDQQZyqEexaPvnMJPkBjqBqBBEeggXtaudZDSewz8vRoT1kH5fb5aGngU6LbQ6AHd78mJJ8npae",
  "key38": "5dWyA9BjkiSUevazuF4GXtBo1y1kSxkgzLCSeeYD9LqovQXRFctNxTWwDL8fGFsqjcaPnAanBPDWPMzcKzVE3vMf",
  "key39": "5NzUQknV7XJJ6fydQrQyH7fubPBzWwRdArWbj1qhKFiroNCM2Uoovcs7Bj36bjEvCxcVzTMGQZBojSPrkvSMiwMY",
  "key40": "dvDUZ4wctrLvb9QFbXz1KqiXonffC68eUjNjEP7YT2xakoZXXC5DTvEtZdBKk2w6icLE3YEP4jSQrmE12sLTo96",
  "key41": "5bae2vYSS7wb5r8azFeZK2aevmskqKSYZCH9wnb3XmqHzQ71Py1ANVFazLSyw9ZWbpCrXR8Q6wiW9wEHw2piHYLH",
  "key42": "5N8faD2yQuw4um2cMf9zMs7tTuXUf8gyjV3i29kBp6kguPyftKAkfJhSBPSe8k2aJ4qrC2qbuoKjWg4c5ajHuocn",
  "key43": "4i4vuLi31Zo91fHWNbZNFQP8jeExQfuR5fY1iTFMEF9tTU32v4WRh1m7RKzSvSEVcnBSAL1piGvUTCAUMqkMGi5J",
  "key44": "23bAgKbHp6r4veZmj5DeZJeDxo9KwYDPC9RqZA1CytTUcqPobgE1btQDmG4G8LQAxtnbp67W43bcCSQGnxhBxJC3",
  "key45": "2bbf9WbLQhd9stnPwge9P6EfAJT349PnjLLBHGgc3BVmKYUF6vsKex8FBWypHr3y9X9QyAMh9G7dv9cGfgujnwwe",
  "key46": "LKsLqA3ARqVrZ1Ce2zJJT76Rw75NyuRg9jdvGcPFsYFP18t8JKeP2qEdXFeRtRip9eWqaWYRXCSvsJPUHa2Gsxe",
  "key47": "3mNk9nFigCgbAkDkb3FT38NTRxW4UZV7s8B9CrWf37jjNbUuDrE8ZQAD7cwCqeHFt7fnUTzzSFLYHkVDNEJAB38e",
  "key48": "2dB9bhEzcKLzyftbLhT3X76vhjHksseozxFEdejCADPat1yEdU1KcFozvi7m1W3X1vsJkpf7Uiuk1T8eurrPRnXW"
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
