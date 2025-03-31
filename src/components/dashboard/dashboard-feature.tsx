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
    "4jxQUsgbNbz2uxTzZ2TdsB6qTaAEQFr9sjfgQ5wEUChTwQ7Ah85fWLAUuezGPk4oe2P3dbgYfJ2u7QTW7YStPguq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DtWnheL4S9mMWUmyHuqcSszGHAVJ6soyNnf8j38EvgiqU95tWyagkxHyriAAKp8zzHAtksDxmaiFYsZGhvEQ9cW",
  "key1": "5HX9vPiWyZnKYUyaALcBiShiLRKbPDcpaQ4TSsPGQx4M4W5e7n9odx3s4He1PqmRqENzC5ZtQeGgc5oJ2EntxcZE",
  "key2": "3JTbqZav9FeQPSAghuYqcjfF8B1k84iiCRExUZMMuZsZ3VwzDjovqE8L1HmwDwsk2TXZYCCu6Lr4qg6pChczGCqS",
  "key3": "25bsr8etNspkR6ydgB3PDZ6kGrQJZptyaRwPSAfDoYoTEC9pfD9wKfegBgjUN4rjnzNV5mLv7rnDcJdmYdkUNR3m",
  "key4": "5ZEDNXdjhL2YLq6YCHkiVEZnn122kne31GRaCfj9idRSv6s58qahE7PeutUBrAb2CvD8kYjBvF8Kx3S1NZoRCo4Y",
  "key5": "doVMYSTEBEMdsVj37YM7eYmU83nDd9mAptgNTdMZ9oCRYPEWMhLivDGB8ZhqCCnGqc3Hb6VRNGbFaMd4AvXPuut",
  "key6": "42SNvKsY5FN86x2ADcDp65rXMSxRebb5gWqPBuUN6oBDj96VHV6b2swdk6mPWofRHZcfmfG47YWbdiDGFqEfow24",
  "key7": "29GQ6rRCUyVhdCn99uSRZVZnX4nKPXcKaEbAEWMVqhwE41ZPUxSzMEm5Yi79XHmKi56vugBYj63qfNbk1jYKMRGu",
  "key8": "2mehxzDDdh3TvvnxyNVkPhhQVdTEJtryAsZDsTDgSECMp8eEgSNpXBWeBUj3QfHBSuC1UwkowRi5yyz8fQxPM6Vy",
  "key9": "4ZPeBx9qtX8DNRkcHAYpiTh5iwFVrvnvnVZbcuYG18XtSBstD3rrsMjKDCmmJdddyLM6GrEwZFgq7kb88NLme8Fu",
  "key10": "3ewWv8CgY8pKiTXmv938m9YzapB5EVZYt7WSm44wcf5SryXZTQW9Uj8dqPc5jnevcXwBQY3EvaxATA9vR4hBCpDx",
  "key11": "3YFMNvx3fHASQnGd1m1LmknxPFKnUeC2JTdtvjpGhQ2BGRb4Cred1GygJTtMXoiRSDYMtMsCRjoKCCKueZiPFnB8",
  "key12": "5xdozPzkYfqDhCTdiQciYDNBFdz676dZD64w7YJmw7k7xVTuSet3pdM3Hwyq3WAjpaHr3P4uuAWuCrkusrBn2cYf",
  "key13": "5ZNRcQ2QJzKxgAiHNzVtXCvu7aiGbc1QfGKWT8QUK5ZWcRyLvKUjyzGfJW73rSq9Abp7fn26EfSGLyWaiJzgAuPm",
  "key14": "2ESEZDxnFL7HPavzh51bsJNCqf3ZE5FcstPgingmwYxaNgvzFCXp1ywWmMvR5YsajkQN55BbmLFf3tdmCqEemW79",
  "key15": "45VrZC2v68fEDPzNnzWKhETVectLHXvwyFnsoKuVv46RWUKuqmQsc16VUCcZfEevJwz4wbPnpLWEUzJekvS36yB4",
  "key16": "3NZYqqy5yyrWMzDFjkiPBxQKXr5xAKGWon2UBekmNpByzQaKzXPwu5AFqdYtbQuq99TciaoGFN3hu3s4JAMpoBVu",
  "key17": "KU4Pq64ekANdgrpeyWLDwVhvxF83KPk7q1sZbe99kuj51nxpqUpEVqC37bjDQKbCj9S97ogREKYGpospkDTc95k",
  "key18": "2yadbTDL7nPZTqETM8EpsmaUcEZi7a6Nhk5B7ceChuZnn2HgaKZJ5XvjqG4CeTAKzoPYbXQP18xh8gPoGLAqn1Ce",
  "key19": "2Edf6RahAQbRy6xr4nJZLvibr1AG3wcbm2Tz7BTDffaRUDPnCCDgFt7e7LobrwLgrC7D4yL8bzw4okruTtYpDTUu",
  "key20": "2bq7SFgbj3q8WFCkYdsVK7DgBwfxBArokpvodCdo2ytzvT9dgBxrvUsgqW2hU1VMKxFDG6ahnVL5Rv4s2Lqx6HuQ",
  "key21": "2fJzWQg22Tm8g8LXvvkrW1C8z6waKv1HcNuuAB3dzJ46KGHQ2zcUHbr2w619dTXrDExpDqQvW5rw8xX4eFd958fd",
  "key22": "5HAkKGSaSyAJapf7GfCE2ketJKA3C5xj9j3CyxywTVCTTnn5J6djxnTJBnSBVNzuNXbFN3jLoKY8eekmy8JM51LH",
  "key23": "32qz1obrwh7cg82M53WniH4FUfxY8Aa8FcQ9Txhf1c6a9qjQtLLcwTmjdry3XXm1APq3cD7ZEC8DhwJn8sdzksyX",
  "key24": "3v2HnT65u9NRoajYjS7L6vxRtSYWc6XiYqsSxP5PvGXUQNwghVR5ZAkNPXHEmjJ1evcTGwj7qcKbXdHypViRzCAt",
  "key25": "4bHstwV5XszQBpd1u3Ba2eZmYovZs3vCgdHGYk3EuTpf4ADdCSF9zsCnQA7eYPdBus7SCKZYEde9PgxCqWN1thsb",
  "key26": "5uaEgg4S8oMaz9zyd7FNtxZEX9kdMDSuA8JU1Bf8bQt3JGiFXmpkF5UqKN8uKCyRy7ZKJZwSUtMZvaxNsZXvCZjs",
  "key27": "4dR4QKb759YiikPfxMGKyiX2DPT38qLetr1RsSzakVCUrUW723NHUZyxLJNkKx6Nf1E6DTKmjcoKfpDmQjRMhwrv",
  "key28": "3qttSy7yfyEt5HzqoQvxW9SBwecxYLRRhKCVH1S67cMD3t8rYvig46TWaksikzKHpXmX5WuXyBHP2VfLHEMAZApH",
  "key29": "9mSABHGWTK95wD4wJe4t5pHpmxS44kb8ZMdcRMHoeScvgXPzbpkXNYbWm7BDZkbpU1XvcThb2MojbenB9VwKzMH",
  "key30": "5jwqKiiEuiB4U3gQFamdTEoy4aJEx8gu2khnosjhHF5kKqos9YdKpedURpBa9SKPRMBy9havgzb8rXxzXBjCjrUQ",
  "key31": "53BEX11urH7HbusAyPp4UBoQhBLkRXswJsubdrtJZiYAbG3GANfSsxu4Y5JFR23Kk6brqEH35fvG5caWeMiZ58EH",
  "key32": "2gtEdgHV3AkEoFSKKwoLYACRGabGosDhTWFucRTz6NaiMtmz1vfVFsKtE4JKrmQboqCcPW5FXZsoePguZddrsXvv",
  "key33": "248gassDX5DuaTiTeYaejr2tFGCKqCSzihegCT9Fj9PgA6ZGzLv9D1cKv9ijo5WRJkF5xC2L7Y7b5Eqt4vFK4B1z",
  "key34": "5a4CNMz5uE14JpC2tAgeHihMKgsrz59nVPap9j2SvFyVXa4MoLezGRZhy75TFc431kNVHJWxw98QRDuFEJ8PPuzw",
  "key35": "2D8e6Xx7qqutGRYQswwcW55uvz2jmLNDjouwmaQuKmDAfS8nTjjDpNWC2KyDTqd78u2XA72bCNVEgn5Pa5daWaKk",
  "key36": "53cAevD5eKXMq64YdgLHY39EyKhH89DQM1gjB7wf5vUTkzEtabr2qDHnzw2CjNYNfdHMwpQhCugBuKDitWnxKnK1",
  "key37": "3aCFQjhiAFeeY5zttWUxsKULABFo8Wb8zGUkG6Z92YCZ49XXre6qDAsGQoww14h7uQzsk2g5FKerP7ok6RemaNnU",
  "key38": "LbWG2G6K167WnkcxCQs47EmQeHe3BymFXxARpJg1wMFEPFPfJPuYBRrDJAr7GUHgeCmUSR4uTmRcEnpy6SRdiRB",
  "key39": "3gPjhoLxqAK82rZFvcXpH9UCQ3pQhoQw16cvYuPjRPCPVn67btVaaeU81LKmyg8VmE2dnhiBy4ogP8abBLacRWQD",
  "key40": "3VVQAgbzhm1nmuP7hATQRjWkNf8EsSM42xe4cuXoihBrv4abYqCf5bbJfUzxcrptCAdaAndWEqda1LU3S234WLz1",
  "key41": "3mPGu6bAz1zkY4JGreMS2DjtH2AymLC21FyzULmAve7nJLKH7Wkau6Ecgm4er2Wvd9nvunJ656d9wMFv3XwpwEXp",
  "key42": "uvPDGTVvdzexSFRCRHJ1cYhk8EEZwG88nc8gpktJa9LqCks6eVWfQjLGMiaguK7pdENSqfsMYKuWx1fApWm8Gdq",
  "key43": "3Tr1tSNiJiC9LH2rbKWGt7tG5tJK2fSQjEHSgwxL1htkm5cwTFjvodMwTjmH4cXxcQVQ3jJWhGGW5fLpoMVNdykx",
  "key44": "6MHnutPJQrRQt3pDeHwKCLvVEHuzcZqxmNWD1H6pskYygoSvstiWtQ7AAYMkZjEtu33B7pHDaZ5rZU9kswujr63",
  "key45": "2aeS5iYwUFvPWYfeFCbeVhSGs2Geeh82ZztYV9rqQHUMoYZ3zegfnUMtRkPTia6ZSJCTYLWej6nq2dYtTHMmF7Qk",
  "key46": "3ZtYztyYSPRxhXgtUyoNvMH2rQScMbivqRYqNnvnihs3cSUvw31JYtZPY2MqpUAm49DboWRmpahmERGFyK9fU9r4",
  "key47": "4vWdL5xL1T87Aqmjh9ir4ff5NmxNTEBSDBJ2N66jjGHZryMjgAjcgVjt1PtUiVC1HASk8k7WpVs5nzgCc1Pw8atn"
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
