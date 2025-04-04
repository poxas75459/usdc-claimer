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
    "3q8c5SVQA5KCDiu8zasHanBEFutxHucqr7k42HumaK4uEiA6hMb1iqCARQTxEYiFqX72TSvQfi5wZaAMeB1seMH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rttJP4jwghstdTZJoueuNYqxAY2FwytwvEKU2hSNLB9fW2F7MgcN8gR2Y8aJjyqKfKtykn5doLhUtVpvPU4cx7D",
  "key1": "3w7YJGFWW9nNfxgsYqkprkBUbZjbS82Wgoaa6qCqcjoFfp57NASfbPy9rq8x21fuUnguYvrgUSj6EUmunGCaMEHn",
  "key2": "4GDVELi24efn8NBmoMVkqGzkP17mgq5RuVLbxQvyxFibMFiZTZhoukiFAj1ETHNoGeHfemVFzGcQFSiebS9kaV2v",
  "key3": "2sv8ZLpXJuqpWTb1bmKiF8fhPoNEp7ELXDhof5h7nMtQ5daVsnnWEpTRAVvDmxHZq6WTrk2gAZ8UbwNi3bcAMGFT",
  "key4": "njKrKZ5mximVqDnTXWABzesc7ccFSVuZdpgJZodBaXg7XxhjPevW2xWaEhvTWuAu9jny9FuPViu9d9ySERhZAaC",
  "key5": "aTiML7xYLtbwvoSQMSYAgMx86j5yJdjZFT7GGjDuE5djtVPq57LfTpgVQcZFyMNqbscr4CDcYkFFrSPADPrPEE5",
  "key6": "4fmra4dpG1ipC54mVrWGNaaaNzaHeFrkXu9wpzNR3e9xo5xKNhmSXVvoZ6kz6mfLhT8HWeA3tL2frVKQbyvJTwbj",
  "key7": "4RjKo9t4jVKX4eb7QvVqdamdPVLTvnaon9saF9S4ViS5eV15nivMg8q1TykPYw2a97VQf7tEY9gk5jwAkxHyrbya",
  "key8": "44WR4fM1FkD1KCs1c4h7myivNYaKxwwYngmKPm4e5v8qHWnEWoEEGk95fBeDPcazxxsEjWfQi71zwuE8bMbFkuwK",
  "key9": "4DFVcpZQp4SiaSy6joMXDTeWTneLa3iwm8VkyzimRUmMYJEnTpFBRHgr82FSAddvhYLfWmGdubrSqeVmbi6X9KRd",
  "key10": "AAJ2JDQURJnB14XwMP6w1CmxF96qKY3gNYYE8WZtbWjue478hhVE5WTkJC6yzc3Mpxjuujk8YA9La1DMw8rDf5Q",
  "key11": "2TE5px83aRKJ23ni8iDc2hxWTkFZqWP3CTubUYxBtrFCPeK27eg24tj34nWQ9QWd1vhCZD9sUBD4hD9KxdnotkAp",
  "key12": "4XxoTjzJnVkTCVbjGBGRqrBBaYoXMmoToKWdwyqT8Twjc7AKHXfFTf7sEehfpV6JCoCvAfyPnbmGV7s1zto8xVto",
  "key13": "5chJVEXFieVS41Wa66yi86581Xg5AVf2zTZXGh4uHBHwUH7R4iboiqSFr1jcNEqjCPGN8E7NxjsbGHLfpSqMXNbq",
  "key14": "ejVeCAgUfR4y8Z1z6dFWHwt7FJjQhD5brjLz9BNNHW81HvwddBWW3DhZoN2tVXrNqrQHdiewYATLCAyjEdMha7B",
  "key15": "5qPvTL8u4itZygXd5qANqNZLjrHP1CqnMQ8Q7Pm91FcgVAEBKNeDeRYBdCUczdBcDLes5veVGb7p1N6wVhrMw61U",
  "key16": "4kDmHYeFZEsmaMHnEuomfemecEKffH7HTA8Ac7bdPX5WDBDA4Mhw8sqn9UjLour6vtZDpmkztJy6su5ACRcK4C8h",
  "key17": "4xxqrQrLyXk3PtSVtvgPcstMSa2VpjnsSLAf9CyTmgcFs4AQhJg75AXqcP9U2J9aPcZksgFpi6bDVHmrUgf2cMnk",
  "key18": "4rTYCv41i9r8RKqvcnQv2dCnAaw7rbdy8igWEEFYPZk13JpCzPMmvtiMAyf7646GT8YHfHzkquhK5Mepc9XLw4yH",
  "key19": "4Mxvd7VQRBMm5aJ6VPHEBzZLVYHzv8xdpfGGQ7dhp53bDwNHfW174p1MGc3h7afsnuUiEe7Ki2GnAhLxyxbPbKVf",
  "key20": "29p4QA9E58n6MuRUEN3ZikBNZYv2bWFvTyFTsRdZjKTvpk1uMyjCrn41P9wFddrbY5KP2EYaZFzeunHHBowk9XC2",
  "key21": "2ScjMdgirEQFq5MiSmr485K9XE8e8KbKAD6PF8Xn2eVLTKptbtvHXAgCoXqkcBPTyVQdAvKCaKawCqaWVzHkpcA4",
  "key22": "5ByZqju98ahYtvrSs98znxNo3R1Z4fj97FsSfoodEE7YZH5opBJwjthwzwmuXZT38kgLFY58D9g8UNZDge1RwDCZ",
  "key23": "515Mii39q8Qwn7BjfVtrYjGA5RD6aFqabjbebTZPP7AsCZEKMJfWWFC5sV8wezjimFJnxep23TBRm52rbQ1HbZrS",
  "key24": "3qykQKZmaiBwTiWHbbWhsyXXg5NTWUDQzyjXF7daeSJbGMjHnmdAV6viB32pqsqnYSSSiG2dGmgjbTotgeLtbhpP",
  "key25": "4sxUB55yWS5AF8KByVyZcH15qBn9KZuNiKVdnCFwbgsdvcWuk65hYq9jmsgqqgZKu7krEykZysfPbmuH2fjW3h3A",
  "key26": "2EzHQ6DwCcvtJM2ozQTGLGupx2dz9g4y8Dk2qTtqyXkyEPRA1KTF4Xwz1ZGgX5sLd6zbN3pL1KsRVzXRokLCrHZu",
  "key27": "51u5gWWoNjaLNiebFLqMLV2dPE2sbh2wUx25M5Q3TLrcb8AwGe1gAAzr4XVWvczRfEVEL4RWCQdWrf7QnYnchyaN",
  "key28": "3xDhk7ZYvFtba7VTLjd8VbtPMs1dTZsNhzXinmHHerXHrcWTAvwq8i58SjbechRG8CJiHt3FaenQUkUUa2itXu5K",
  "key29": "2whLMoYgRwEsFMtwFbSyqjYzSSYdmYZYwZ912qDkx8cWJTfuj1Sfi9yRH8u136qQsPun4WqKq98g8wbdbbbyPPvr",
  "key30": "4izCsBhsJzi3W82vomAVctWA9vJoy79Bjoio5QtCFPqQw4C1gC4bnpozuT5vaXr3fU2o6emprJQJvmubVbsPpNn5",
  "key31": "3tiNwSgU1A4DvNn5HFQpTuP9D7MNvprY2bBX8kHg5jnycSQMxbRzp9knPwj6yn9zjUhm5FGGv6wVeJZyZHJjwbd3",
  "key32": "269fzv7mV95RdJV54ZzDQxHeJLYn1Ri8PzMfqxjtrC6TQWjdCSRsRV7rXKuHsa89ZQeDWqp5xY36n4b2AP5FNgzA",
  "key33": "2p2a8tVfJosAfnLb462vSbGXy9de6grzTHnhrhNBTbQMWvVCiyhNCQZXPjTMUiykh3x74toiKA1RsGWNE2CN1uX",
  "key34": "2n5ZXEcZyiDe4T9C16hEdYmR63VG4nT9uepCcCA868WQ2tE8ka5tgij4Qs2z1te4AAfvi45MU5faeT4XpcuH6NtS",
  "key35": "ZcAqAEGTkFZYyznnXGJybGxPrTNkcfTMbCESgo7Wk9PG98kA7DvZJ785DjjNFoit5Cb9kq3zy1aw8y77svabHC6",
  "key36": "3Aa6VJmmTqcFxpCRYH6UHR3vTiercu6JLpfYucjM2fYNNBXer44ZZtEmoDA3KjGVyWGQdNVpUKCxx5VmK9eSoUsr",
  "key37": "3ZDdnBjCLWZPuwC5jdQfxQcWkmyNWzFDRWTcdqT9vXzGDpdqSoyFJPMufsQPT6cMb4PNy4L4bJPxDM8iWombE8wN",
  "key38": "aYBviWwUKAQFtvqHd3Zi2zBpHdQ7kzYxpnPzUHNQ9HA757J8CTfDNsrh2ozuRwPpDPgJdrcDURptVQMzxtCXfZS",
  "key39": "5GHyrn1XNb1Z1RPJ5GWEBWds1R694S6ZVERt4QGULBphyrVxpczqYAMpYnXEmSgcs9e68rDFzEdrwismw9m85guW",
  "key40": "5oQRbuTHqYfp5zL5ZQHTUtaxs99wcMwpqSyjFzv2jvHxKbvh3rw6ZT644L4gHimbiirzCT7oJ1fFFveVATwf5CYw",
  "key41": "29hf3dLxx9sQyq926PYc5g4bCDgCP7XK1kKsHRJHRHZn3rwmJzVZyoLHKupUW9Zx3xKyXxjzWrXtw65eegS8Eq57",
  "key42": "3YHWcBfSmW9CH7w42S12g4Z64uW5eW1HWoEpwxNMMKesQQwiuYfPWy5beVHuzpw68JMvMLinmBpgKS4RsGr3crSk",
  "key43": "UNsiopZoXCX8ss6NCekHL6XU2VnTuXxfbpW4u8D3Vo8y2y1SQhezzEdvQgs7CGuykdM6qhira3GF5QkdMiiftR7",
  "key44": "4PqZ5aGCVuHrD7KfFJH8GgF2k6qBrma5mgCyQvNMXMCzfJSXSwGRBn1vmYnkog3aSaUn3ZDAuoZS1NiXeuqpxY5L",
  "key45": "5d94bKgSNnP51xN6VXkpbNevm6xrgL977G8bwpDB5hQToSmtNKNYMW9kMKGZPh8r4vJ3uhcyxuBEULJYDMfegP11",
  "key46": "65heoQKu1uAgZjmzpQcQ6v1Z1VsVQfr3WWMaFAriqBg1epzfBTirtvqsTCCBSfRJ7QwcPSsJA5gJP5Vph5mmPuun",
  "key47": "59j3eNukYBcwBNZztSZeftcbx4hmboq5RetbQLr6dNWVkYA7vakfiePD3oTKwZWcgkP7tbRt85e3tnWj5in4EDRQ",
  "key48": "4QbARXsRp4xkTDJhcuBc2nWufLfoKpNsSxyxE48bSDs5VASkJm4QDBU6XaYLHccCnGpp8aWogNYAmJpYHFp9GERh",
  "key49": "5rwcgE2C3MAxypK8xiGafW8sSDxLXoffvGEGp2jv5ed726r9Fn2FoBjDveALvJzXwFgpt7eoQQ2pc8JskSix9T63"
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
