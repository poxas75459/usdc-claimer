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
    "4r6R2m9NWZbzhmz3r37MBqiebCEEHJT79JSeA7Rd1zZEdipvtWbBzWWtRRAH8m8pKDUQdiQyzLK4YiqvEXKGCu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjzxTEZoHGxdH8auFmSeh4uKuzZ7v7DnALdhStX56NJfBe7vaxHPwPfZmxHPBLoWF1MTdfVTYMLXUeuEwe7ir7T",
  "key1": "2E6YBTkA7D4yYAskV7PSTmHX81tLPZWy97FNREzJ3kyP4GYKcBefqvJxBhENYx9m6Fg2JFZLf9B2vSp2TKeogERq",
  "key2": "3QXGnEyBa2VRee3526G3BUawRS5DmGZTnqapfvhd7USrYVeUqCdDYawBwdZAYFdXv4WyYUpsZhMPRCkwow1wkigY",
  "key3": "3dXof3hujhD8CViupTAPMu5qo2droky8KsL47kYFqKHTHW9e9QVcubK9t97BT3xy64r3dJf8MxsPkAoCTLNeMJXW",
  "key4": "4M3uhU4GyET7NYoS5wevsi69YDqBNHik5G1RVWvWuknn3o83FncPbN6ix13GJ64aiiLtKdwwDP2mwnDE423r9JHy",
  "key5": "56mDTRxjMv8isk7GVEmsDCKUEZBfB7atEdLK9yXkS19Vt66irvempuo5NsnxYmHfMxCdPVPQx4mw3rEhu5NTjX3j",
  "key6": "2CQ2iDeJ5CPPSqNeiHHUyLCWN1aXjtgvJUuKFNrp9Bibrj8RmoLReVPFCqWjK5ZfNkMKXhNfgUKwQE3hsWffogsY",
  "key7": "5tnK1YewZ4D7jgHUPDztvpsMf2ti3E5p37D6ziJKACJcituVyUoAGqeeWczgxKEH9if6VhoG5JmTDzkLoAn5hazS",
  "key8": "2uKCbpBHnSB1SrtWERmkzoKzEsyJt8f1QpMPBvtjfii66LeNZ6FXyCbtRapHugPYhSEtT4S4AVr6B8Wv9dJWbJ4v",
  "key9": "42BvVDgPp6TLfWE76dZqbX9wrGGJ6pSdoECvH6i2avwScMP9BMHD11SGGzAfJ5xFmxfQwKSk9nu3WEzvPX43jrEc",
  "key10": "2VbMUEjDCnyxYec6wVFs6uBLdHLqENMybQGQcBKzkTW91MKAmsFHNWeHca21RGtVZupCG81eoXst3KbCFp1DogYm",
  "key11": "5tU7dGwas6qoSbhDYFg3c8A8NvjFCeY3r3aSCajkTB9kFPa9xtPjdAYFC5qY9amEnswQThpRKTaQhMdoWM6AHi3M",
  "key12": "5b6xNap9XVKhYhfdCrJZwYT8H3ChGne6DcTE31RiDYMyGnKRRtkAgxSqtPNh2VsVukwnJRtrQuDMiUpByPw11gQp",
  "key13": "28LEiF6gpbjqAzErY7NXYuqtaxwxUjtevNFY63qeA4avNAvx55nJvnXq8K6AgLT2tanpUjM31LbEnN6eAdoJDD7M",
  "key14": "qKkPEmxPBJkzDLGcAFU4vAcXvB6AZvTJQSuQ1ZS9hYPBhycidCuHFfeWYRGLytpZtQdQ5ZLWszXa4FkdHJ3eRU5",
  "key15": "4hRg85mqXiX3YzY24ocEAzmdELTAZBHTAXpA4QJ35kX8fDephPb4RGZxxoDzPfP8dPebNVRxKTrnPHRYtRRdsoAP",
  "key16": "2M15uw1yNW1EwJhSXTLLRYPP2wxD3jEPvxfkyNzgTdKG3Y4U6SQDHJtJXDXS9RR8MW1kq7KDHCtdKzWJcbBGJDVs",
  "key17": "5qiMqwhP4AxXX3a48xJ3BKSpp9Suu3ZjxeQjNbjX4XiARq2tSPcZuCc83ENnAKXZ9HUurLekZDdtEB1XTwmXq2pX",
  "key18": "43e6ESf8UP121MeWXW6TDpgJmYab5yyvuHFNMK6rLf4WFedkJBfPpgM3tHFH6jpQwL1q5tppBQJXHdWwMRohfkPc",
  "key19": "3Jn9WKCPAqADjGqEMGP6rGjiACBxm4zJuzeYQwBmavoprn6DUDUFJ16P4C55A1Uyrh251ZzfdqwTZ6LfsEYCemqA",
  "key20": "4BguHKamPW4T2UgfBEUX4r7pQH4StLCFNghuH1eKLt5XFDfQwbJSGcDAcHQUiuRvhkempmrZamhADpdpR6FCMXR1",
  "key21": "52BuNE54S7jZpmWEPNYeTGZEHEEYNs7kFgf8PqKqzRuW4aa1BmRUC3rkgPQf3eW2Vp1oMX6sSwtkLtAhpiqvcJ1Q",
  "key22": "3M66jAGuo75BE6cAEo8uGoEkCFTSCyLrXoRskhaC9jbXkdY27uJ4Cq1SfZqGjkQzeGjcdoLteQiJRzY3m4PBWM2p",
  "key23": "4trdP1Euu7GZ3XkER2WaMWPiQx8qV5NEFj1JKTHVH7xo2UfpJSPbxfgD1fTUq5sjBgUHsGrPzWrcgvbvtsd1zuqr",
  "key24": "4nE1pQHyiHkez8QGwtZPmvkrntTdKPGq3wm3USb29GW95eKTLUzGJuauh5WAhZf4qN8Xmjq758BmP6jZoNzzVc7r",
  "key25": "5q3SXLEKtehjkdBXkbstMKWCXCSAQTaTMJP9V94pAUMkPW5NX5oaJjKxspzDDsbhqRJgNL8j5AVRTBKd1xfXBxtn",
  "key26": "2SSb4iMtgQmkZxgTPvT4MuVRtkntKjrZoJCQcKVQWzuggwKFYa9BcTz5ApQUY3KaWn3kf3NdycuzzRocmmK1UJpF",
  "key27": "4MjVG5iBQV6w5n9mGqGD7KE48MrNcbmGNzUX9v2FuhnGMcTGv6cNDoQWCpcsDJrKYKJcMtuSdNgkWZ7mCJcvPALc",
  "key28": "2WdyeU1Cj1DitV5XzqqY4Cd187ZzKq9n4z17ALa49ZYdDLMHZjwYwSVBNGGVkyJXPDcMGw2xBDTwgwj3QpDVvmdV",
  "key29": "59TtKFEFZGrRipYUFieNpkfprUJCXAxiqfMkydAfhZC4kx7vkSM4FLvdxNYZpmLCyAP8KAZkTpgSZA1TT1YKUcvR",
  "key30": "KXcejb57YJMxB1uLf6T8KCS3x9VvqazjCpo2H2Dbteh16AaJ6u2Vh5VRprSPeMaQQPAVpKWQ9MQVpWWyiZz3kMd",
  "key31": "5ZcaNW2eZ17F9jJmumgW5a2EtTkvhM6imwpuCGtTVeeVd8RYL2ma2ibMjgggTvma6C2LubzaT6dKyakCY1dxM9db",
  "key32": "uHHLDFzAgwft57GRboJbrLA8LFSwxHXAWzyr1hUkDfjLsyTwKipnu1jY6pwtSvtSh1w5bWfroydPDhnUUFCzwYs",
  "key33": "2g2dTUfjBCUpPdAHbnzX9WmcsEpbcibrBToWsTNnVRSKJkviaQrcRG3rd9jfMhroVwE621zmicyqpvjFs9VHUExx",
  "key34": "3ybNJU18S2udeyhdEkF4VrApzFKCzsysjCYW1JANwbxW8FknaD8ymz6hP6Vbr8Qu9dhk4GDUertXs9SeXjiufUq8",
  "key35": "S4kJ1V8rT8Y4yWDQo9C4FPYiLFo4mgWdpuvqGnGAYdgyt2nLD7a1J6jWZaHvAU94a1sjbeYWowG1CGw4iWYMNHn",
  "key36": "3f7tfeGHw1TL5vXWURoX75TwJQ6yfDCuvz9ohJZT6djQBVooso4FWCBxdUhgeyDdsuE6GK5y3ouZVe5iGPJSacGi",
  "key37": "4w9FisAQBpm3JTzXCLrJ3awnpdR3suGuxhA7HAkif9czDUWsvVm81G95pMHyCv2M9XcAwsyGqba9PLZ34XM4qb3X",
  "key38": "3iAvgVJaSbsz1stCCL6aB29Eey4hhEdjVJBmURu8XGAfPzsQUS9NdNUbehSHEym63htdkoqmc5b2kWEZS91vij5f",
  "key39": "4fpfsSSmB5sw3TQ2AGEAtzwtcFXVNjRrXWtqyAkxHi89ZSt5YyajQzXbttDH7YskLXpULeWDDE9oqFgjwQpACugb",
  "key40": "2hnQfR4eP2C1ekyVTeDD5P3Xns7XDs1XetMsDMy6Fn81dgZKyKz2G6WPCEpKAqQxDL8GJTUk39eKPjqj2S3T7AUP",
  "key41": "2fCDx8ATNTRjfqxoHRWc8sGXqXtt7o1FFnuHWY6bJC2PCWsCs9tpCsRJJQwcT3Ho1AEx9NaB6x4Vfm2wGNXpAxYb",
  "key42": "2FDzXDDm9SDxLiWRXV3MBFG7v1Vv2tN5ZDbk6AXoYMxHrsC86c1tCGCLn4i9se2hGztFxkgugRVrdWYahxVhBm3e"
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
