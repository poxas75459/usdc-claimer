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
    "2xJHcQY3GrjVxrx95YaRwQrnrThTdGqufRwLehUyZmUhW8GGFx2PXk3XJmEyRtgvSdhhNsRVsVhMVTef9ePi42MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfzAwD4eryRbxqiLPnNnNZH7iaGGsQiHX55tvmuvHY3ARj2EZEtejJAChxK8qzyxqLLj7w1qMTxvBPMTmZZpcvp",
  "key1": "5KqovmdFK1xdd3RvvW7oLTYuYT1k4HVpt11Roh6i9pz97tfYeJECNKNSrBRQE7FaQrpYFgzGTo9YtrJJXjVmPrTp",
  "key2": "22wdwUp56Wqwdx1uoegPkXPNqasRXbbNREHNTwzungz6bmYSp1vnRoopYyyvdgxu2HvwTfEEARGLcDU3Cp4SYRgC",
  "key3": "6jnR6WhQaTVJqjVsUxh8hJriQS6KZvibqRMnsmsSUqWrL5jKyuMizap9veVPRwExC9cDfMZoSVkrUpNJk5FEWkq",
  "key4": "48PxeuvmPCaZp4ypnDbHPryZPrRjN1rnW36hjuvrai2w3vgDJ8Kj9zAkPTjiFaVPfC35NoZABrgV2hYqm8dsacuz",
  "key5": "V34T8AfgQkemfj9JiSXT2dhsoHzme5MVy6tpEuARbatkv2bbFEUS5m9S4T9EQ66CVtduF5Ldti1LZshs1wrHVfE",
  "key6": "2EZVsWBzu7au3KakyRrTVLtqPtzzpvN9LquecDPtKtLCeyaZqf2YQHAh9LonNE28GTvMZ5X29vXGahDD7ZZZAMcN",
  "key7": "3v7po5BBGShkjVPApAC8YyDk4pXrkbst43BChiun4e7fFWpCbHgSqutgbcLnkCjQsEF48h2hm3mYy5f5AQwLkMxE",
  "key8": "eRecRg2XP4dbK5nAunfq31GfGymit8sTPFi7pKQWwNFf9kzGFacsYvzkPyVkpT1vKcDPqAeMdqVg2g75t4BKUqx",
  "key9": "2MYucT1M7EZsKVN1ZEctuRFfzJc156JjTF39V8TduHUT7qMUuiazEjJgsPspS4p6QAFkc6Lg9RhKTHiFR3SqXEq9",
  "key10": "2fCephjLwFxk8Spw23ygg9A5qHxnVwYEPE17xtDy2UkV4r4sdBiUCXf6fhigY4MN45TZex2WQNdUFSxRsyiGhj5E",
  "key11": "3GNHJmRCxEKP3kgKhH83j4CPKay47DQB9mrKAmVboKPchgAySWZicuf8e5dJ6QT2zMmoqx9Adk2Gx93wZFprfSuQ",
  "key12": "3enjJVveygWpY1JapiyYFX85MBtKF5SShSwvKkWwZ5jC28cjrQLWBe5D6HjW7u9seDMehRidrqbMrfqRykDYFjhD",
  "key13": "ArT9QZQbcuBCkRKviLHSHTGRdSvqdSZmeYqCnB6Maxy2srDSakbrDy2FeHXNhAkrPGnSgxFmuXxm5nNuT9k9sZQ",
  "key14": "61Nd2JFYQY97WzRXsT3cMxqqcuwz9uXXwhUZs5JBoBgnzkN7oifTozSuqngmgt8Rkcv1Lm3CEdVJ51A6tNaw96VZ",
  "key15": "4mnrvo1om3cpwdbfKMYuQokFZfcaxTCtm9buSLi6H4BzMVeC9BpKXRcL47dea7LqvYnFaCA9ncXoyB8MKCP5uouj",
  "key16": "5kjYQVwsiUyDBrFeSECqihcx8z129h9hHijJK9NLkGKaas4Af8wfwh3cV1EnEj4xbfzYcBU9ee5ZJZHFrqWLqH56",
  "key17": "64pihUCrPFEsB1Qa1CHSASHWy8xYQzzvNYKiN1W5zyNPuY9pq6mywSpZEhmMrofW9VdePfkHkn6QmUXHqsiVcEXz",
  "key18": "2WEYqViA7w9QaLKfczcSgr6LqJc612L4Mra6MgNuAwMRVpU9CbTUki7sk5tXDjDgpHfqCyeXThRy7cbWmhP8cbmV",
  "key19": "3LuZfoshEKWfQnyUA4gHVysRMzrfTroYvFi1mA6jZGdnACy8enAQyzmc3ydKYDQ7vnRYaVgEA9wDJGQAE3noehmA",
  "key20": "4QFQkptmHScYxs6dhh4beEvL8jML8ByRZ2qz16FZF2t5XXTKbgoPsz6GnRaXW12CoeasPLqhdfaxn8PRAJenwK8D",
  "key21": "4mFWXCgeWdFvB6TeWmApVXrbPUSdaAycZUJVRL6gRn3WgfPqPosyk74ZYKEQbE1WuZ3s9eqgBjnmWumt41vbkMGu",
  "key22": "2wzNKPqsUmK3oP5yFHcXyYnrCQMSU4og3SHNYKVaigEfvb78SRJh7qyxAzLTam8XSixYf1WgHfh1ojdy4RzwUvDJ",
  "key23": "Uev1qUeGVU5ofSoGBjjXpSPPr9drkWGSh5Q8DTHcMcWiYCnLnt2Xp12VPkMhqYzRPw9VZ2jtH2tHuEUANFUSate",
  "key24": "Td6Uq3boSSUXGESpxRk5wco7hzth58H6R1a7dXWdM97e6tcXcaDF9vZGYbRuj9RZgeWr241QqfT19qHJK9rcooR",
  "key25": "3mwL4xWmmBvTefZxAZ2Eep2N1sJG8baLjvH35hThgfR6GcpvDcSHzmpHsb8JaqykioLbAQn32DxbnzBZmpA4m5gC",
  "key26": "igdRQq8rYQdZNf9XRbsu9HetGmHWXNhLPC4E2sG1ei3Kb6nE2JS4oyvPaorgzaHd86LZU6Gos1dgXtVeRTzoP1Y",
  "key27": "4FPRx6cx2i5xC5gsmYrxZjuHD5KXpaYSSEcWmvzo8ckugNJkRT2qsWrD7i5N8L7ohQPwbZ8jadbAuWWAxtrbkbq2",
  "key28": "35VAydNUeAC7xS5AJjQvQUYqJh6o5a9131XdXAD2xR51qB8Kj2SWLwVhPvKDg4Gyfj56SzFVpJvcZNGMiTSCYHuQ",
  "key29": "4HbReXe6BsmazU3TP2sKD7PtRrYGpQagZbja4mfzKHcXFSYHaWVXzBr5dymMG7FfZcv2Yx1rCGo7UsUyLJXzVvTS",
  "key30": "3GaydYDDyPmReMYsyVJD8dNK3zXdcGijzUmxro7C3dyrLwsxAZs36Erv4pCXRkDDhWN9uAZ4esAmsj1Sx8Ptryzm",
  "key31": "2CAeviPavcvSxsuL6ZwVsxah7xu1ZyTSxfxo91ogGdfh3Mp7ytiskQjdoKgZXiMGxrzksVFVbN6FzeiEL185QFuz",
  "key32": "5F3ucfCvW7LWgkQNLjuCHNH2t8WGRfm3X4kxyZCKLjZwo241jvDuKbncTR8uaHJaTqSi4ToxixpRSvxsSFMWd7i1",
  "key33": "5eAPgRWhNW3W2wtj3C65Lq5cCibmeran3uX7EpAUkaafoZ9v8ArRDxdngz9wSiSirucdz8SbjKS72cbXikhaMCsL",
  "key34": "3faNFNLr9CEJoYAW5EaSApRRzxTgGM5j4X86rBJdxqQqR8WZoBmjAg95E3L55nb1DRC9TRmig6A25KHjTyYqRv25",
  "key35": "QLzTrjD88WCg2RAxrxVWpQkEx6ZX2tV7P1HkK4PSwb34D4t18wUMhy9JtmDbMukbbygBFmNvyrg5eFJuHSotiPU",
  "key36": "yXF2Pz3fbxbEtNm4EaqrAkebpT5VXVnq7DVHKYwvzt6DApK86MqL7xJueHQ2V2oA7nyKJTRPZhS9aoM2v4aZM8S",
  "key37": "3gJYmKJjR87AYa5nrUqfMusLYs1mgpXh8JPFJQvWgjvVatoW7agCaSLNHf9rh65PT6gYD5w7svSKMA1ePCebH7ve",
  "key38": "FV1x1LqJYeGZSSddGzXNorLgZeFcdsSRQjrRjMEv17W5x5g6NnEt3EatUeC14zQsG9JZJHsPB5ts5HmudsqgSXq",
  "key39": "5owYkH1AeDMCMf7K2LACZg9UN4NxLV5DXKFXnrZzPSW1HFHLrigXuudvqB7FoZkBiviaYnWnN9v7DRrLnRuEiuUR",
  "key40": "2ZLUdka7aZpWbSR3nmqSzgv813wKaCm4VT5yVaS9XnTUPMXBri1YHNAKM6uiNCZTuyoDXvD9zvoKo97GP7VusAiM",
  "key41": "3tMT6nJQbPPiqSTAoZYZAtznajczK4PJiBG4m8p17PyXPri8j2gSZBrH8H8hK7tHAKknes2L7TMjbUPWaSDYExFK",
  "key42": "371N8DkKGFLvokg7pZbazhEvZZpaeToki629NGx4cm5Jb9FqBzjrX8fuHwvRyALaioEkMyBe4DZzhNTKbLzF84S9",
  "key43": "4BYCkFMoMZQEoZe2jChPH8ZMXbsDZoYSKNQEAMoZ3frrP2jtNko8W2hoCDqr6nK847oTmYz6LwX2BvjiKkdMmngS",
  "key44": "FqwoHSo1HaQZ2UsLrJnzk6BTyodhkqTrrsVg73ZMP6U5uWMxiS27rDCCA34o55mpzH2i7qN2PScLDHsSfegzxM3",
  "key45": "5a9FvceKcHD6ZZ3Gh456Hsbu1iPLMn2ijcYiNtEDX92UVqMxyWCWxBcbLK5yGYnpGPVwgURQiP4G2N4D4qpAgPgG",
  "key46": "5VzXGWnPR3Uk55aBT3mwEHebaeP7wWtfXQghfu8kcFEAYLGgma18GBhZ6B9BYwazHTk2pYp4RLMYo44buvVfRHFF",
  "key47": "3NMU7XfP9BKvf334imwqLoLoi6sxcm2M78gKbgoBigqJdTUzh6DS8tLvKnsJkPHAdqDahEKt2XvGNAKWbYTBk4BL",
  "key48": "5CD5GsZKhqfRojjs22C3Aa7oUroiAJMjojUgycgFuAxwLum7ZVX4aMnxvsCioVU8V2heE8ib2kspwBer1WdMo7hU",
  "key49": "5ZUfSAWFJbjzaobZ9o4KUBEQwZAzrF6dKPtNLpipyAEZcjqDgioXe8QvpqoV8mzVzfy3J8F4dkpecpKm4PyAgtaj"
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
