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
    "3kJQw2XvHqL4mv2w3jqZd46yV68LKi1TcovZWS6EdXRuHKZpTR8mdYZpWxpikF99xxE3wAE9ukjvrdSvVY22ubWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2RbpenJ6Lab3HWrL7pgobtFFMAphwz9P8modrmmpQs1rwVeaGyeSUQAUbrbUk8adykpPJ1HbED3GZnEkVSLcVd",
  "key1": "4c2EZuzpYsNrzxfP4rFsTH6De9jioExk51gNV2CHVkJtN1kNYqCqujyegM6B3qpMnTN9pSshSVVSengEht3bD9Au",
  "key2": "2u39JhbFbS3k8vvKeWszeg4pSiUqczW4LQJkEkDVSftPc8nw8VC7tSvBxXoqbr4Yn8w1Ggvv8u4Z2fMkLjsEiuur",
  "key3": "54cqLrpXcX6bxfznaTuzcC73qB5MG7S6x4kNcvUfH3GhZbg42JQTBZh7KUAwgW5YYejoGkYyej3cngprssm99M9S",
  "key4": "3hQ2CckTFvygr9NM1AvJ3BgpmHVDToLr8R8vqoWvjfnQoLYX8KLfmQBBv5XBsiDMyXM6zjSxdXdC7goEKRzw7iXK",
  "key5": "4Vqd9VYG9w84MygsCozR3gDh3aXmxFg6ZXcPZ2DnxQFupFgeRPNCy8c5FCavcUCzbpmC8mXztBCtta5VaQKrnZMg",
  "key6": "3cNFzmh5utujKMcgv1AkFRyt15eH31cgMoKn5zy6vJ4c9KpRHqE4qUpXTK2Cr3SdveRZQWiXN5bKqc17B9YHhMhh",
  "key7": "54U6xfiAZ3juZxeFkk8atcpstX2qUdacyeESRuvNqrPzAANJVEE6YjugT3GDwDz7ARaSrdLZ3CtMyaauz1DBKzvE",
  "key8": "9H7E6y72111n9dnPQEvyaihJZ6uXMcN3mhPidXJu5hG4aPVfoGVZ6wL5Zpt4dBTxqeae8RLKABDJbrt9Mi5nL3K",
  "key9": "4EP4cWY4zqa4qxPeyZL7yRE6REGBAC7LeKFbAmz6kd41FCogdYfGSzbAuGyse88V5BAct29xeJjkhN2oSf4DTKVw",
  "key10": "3sxwehf324Gt439gaigsButQ4zKB5Jh4NJ8bCebk7c9fS6MZLcVDf4LwJwcLuTsTwKxE6wKYYiP24iceNo5WjWzE",
  "key11": "3Ax8j2oy55m9ddLkxenJKQNBE9VxwFwD9vBBuL3dgvXVTcx1BbABxUmGSSBKRqq8TwS6CpwbgRw4FcC1DfqpNxeA",
  "key12": "4PNnzr62vVBwtpW5FCgA1zf25mwJvyGnRVv8Gkj4mMZkFaC4EoUtCcSdEpigYzaRX2bbESr6coqDmZpHrMdjXSWp",
  "key13": "4YLSyxqvbkY6UTeGqbi3BsawZ2hEChaXkprnDwAvNsNyExzbm4jFW2T2BpqYkya6ts3vP2oSCAozWNKBMk6WCtiG",
  "key14": "4ZcdMgujrjorTxs8TJq7oijvNHNWjW9vAFLSa8UADkyvG8jV2xTzPv2K3EQmjBqMF4JqkeDCndQtFyycmFS2ivcP",
  "key15": "3NNyHacUmuRp2tQk8nrAwWSNq43ipido36JtDqANVGam2vg4mXDoU4HqoWiTMx6xmWzCTWdLWYJbDKPofQd7FD2S",
  "key16": "iUDuiSEhidWgZKuEhoBHCPRZsoamarFmJme9UzsFYAvPrR7cdDAYVLFXbNNHKrYSj1BCnbVuPSGkUpzP6jXmYJX",
  "key17": "5RuP9ymkz9chBhXAwxuVrAStpMPyRLa3d22kq9DmFiosRsodgwHnCs5vnyYkc9uLrauH62iCgfLvm6MqUq5cftLp",
  "key18": "2DCPwX4CVnhrMrj9FkTJ5CjErgZc7irKEpyhFwgmpotKP4yZsa7QP3DezqKSw3ZVNwKG8ibGoqkZSD44YWK3JmZF",
  "key19": "4X2pBYaqW72XGDfz24GsV7zinibHKJQTdKMb8LRrforh8Zm7wJQxvyLYveDpyZkzQEPMMvP7b5KhqTsD6jb4g1Bh",
  "key20": "5uFnpiPAiJxYuLXwX2d2dRL6m8B3T959Bx5kXa7zDpCLgNpxWCA49wh35NfzGpvYVeVahDFKLvtxMnGdQZHYYN8D",
  "key21": "5B9GTarbjJeJtJusjVZ96KmG3U5rsJkKgSfDsMpvSszKJXnMEaafcKjVt9H5bishZ6hVt44xCpRrsgaecuQ1jzpG",
  "key22": "4g7t2WLSeGNy4VJBxJKPkSZvGQujhrebd62mponyou59tpMqKhEBxFgqrv622wKsyD64aLjTbr434iNDpgZtvms",
  "key23": "4apnZbWcdggtxdLNEmpGUhMeL9f8Pu1a4EwvV4XfPTvgV4xSUHBdrepecF56Luve86rqhAZZDkJyy2zF2ZP545LD",
  "key24": "3hw34zbbFrGbN7UhdzExtuFpWfmpRCtithvvwFxNTezP3xobs3fWtnTMPZCQsnZ1RsHqSpwN73udgLm16BY7fman",
  "key25": "3Unwpo4oAhzpG5TWRGat37B5PCUpEXJhKVHFWHqoHReMJZeXTqHhcMiD71x2RAatSUfir2H8wSDJgGXBvpgKhGt3",
  "key26": "4un96PWKEEpJJgECgoa3SgKKAtFMnFJ9G6jS13vAWckge4Qd5eeT1yprSnKbGrzhErrja75rdypXjQkRQMDLadCK",
  "key27": "4yhyeLtGcnpFXmiVDn76JcijHBSYQ6CXxJWUDHG3yS1q7DmPJKocVvyfEJBTR9CHfEFJVPtb2165WpgD4Lj6rktU",
  "key28": "3baNJDVfGRpXXMARQ3k1Fw24jGxBuJG1t24ByyuRy5A87TeGf5wUbE394kN5ex4JSjJrVZ3Eexw4CmPra5gqsbdg",
  "key29": "34VXkmj7ik7KGwsU2djVDb6Kywbkr9JaBzbtc5eA3LmPPjfSsCjn3rCCqVbcqGGFuF68c4pgwb63Nm8fJn8qmGC1",
  "key30": "TgGRqJKuUjBjUyuFPKbSt81hN5otZcHxJUVSQpb1m4XGMQ7ScG1hoFjzL3XdraJMb9CYX4kstvP9SV6Ezvd1L7n",
  "key31": "1GsgaKRNbQqqnRbNrB1XvBSdTRz4cYht7Ho4EKhAy5fVzdaTVDcFUxgPhv7csv4Bg9FmgJ9hSLwwyKhEaFRGrZU",
  "key32": "7sh8iNEHb6pVN2L6XudE2QgMvGh9A3GnR4yVaRdgSCvZcbMYTUf1d3LCMW5Dw52uhnQDcMRRtPQHEWM6YUkuspm",
  "key33": "54qCSW6QsWh76sQNG7rWJDCRDVkgH6Uob62h1mgCuYefS5CYAQ7ez7gvp7uemqHqpLuM8WTG7EvemQKbBXNqhuQ7",
  "key34": "kAognRmRrHZGQeBm5KsgrGtnnUDxm5ULf9yEwGC8wgd4fAW69CWwKZwD8K6zivcv3ufvs5Hkk23bJMFZJskLe8z",
  "key35": "2JptatkAFr7WyHxmpVWpD2u2PUQxJg866kFKCgNojgCmqDDkjV4rc4pjHXBcv5aUijscFZX4L3RLNJsFTVMEfQxg",
  "key36": "adiNRq6GckmkJbkjGERmd1GXYX8sWZgtoXfB3EgazXSCrze59TS95KbA6RY1X892vcbFPfKwRCK5tiiJrPd9kUh",
  "key37": "5MT9WMajRP68zguf7TZLRf7pQMjN4vJ6A2YsfWMSAmMNzL1N11qJunKFxrZmvM9VxD8LX46ZRCvDErmMEDUnpjBJ",
  "key38": "2NrFELxFvK5wVP6XN2gPi6Yj2KzVBMzEDaSYtBo1wJ8Ziri4tmAiNKigxuUZ8oe1CZ3uoNENYnWYKFyfKjLb47Xv",
  "key39": "4ntXTgzvCv3Dz5cXqGeD5hdNJqrTw9hRVstGCFr3FAhHR1uTkWdfS66oB7gDaV8owr2SVrwk69kXBmZH5wn6KSoT",
  "key40": "4WmEznw8URYachBuCA7eVkriPA7TaS1cewowfqKTL1rPx3cdSbFVDJd9N4CE83bpktabAzQZXFp4JjmGRsckmDt1",
  "key41": "2ivLoXgaahiBBhMcn3Ag6VF4LXVeWMDAsazWckxBqK6kMjHV5zw1yUKE1XaxLQxiE9KK9wVUexByXg9iDoxifiEb",
  "key42": "e93tqU8RedMUY7MUeMLcmNbRQxPMBp3u7NtGffM6ivzFN39xK6dQ9g4G4PF9VKRVruRzWkGHiEVQTLgmovoAGip",
  "key43": "2FkFEMQXyCk34v25c9XBvP91B6R1TMhaxqsmVtxi4UvnQ8EfqveimppBsp5x77mVQR38xVGTbY6nXNMS5C1biD5G",
  "key44": "4BTQKuaHv1HzEiRWybFjziyrdFg3Kn63mFVYF2j3DYKrviyhECEge2Zms55rZAiYCbvN1uXCdakKvnkjx6fwMz8Q",
  "key45": "5ubTe8bvcN4oyxcNyWBiZpHdKXTRfxzcMJd7HgthYEeRaPy7JWZycQ52dHfhGm4jC9CjLDvPwMvtB55PCeMtu9ug",
  "key46": "3XrH8oX6EYkTjhLFWmaESxBXtcet4Xh3H4Xc7Ly6Y3X38ePn1NwCLXeeqmeUHZTsHWNb9mpsU2yoDJoWTBRSAepD",
  "key47": "YBKJrXfm1NQZePpM8JxmpeaKgYA4W9Q6PcowR3hVAKmDgYVaAdoEyWHAGaneAA1kXnNmtotQUwwm2mTrFXshbQu",
  "key48": "5GhXWvQmmSay7x3F3JcMiVLXvn8uFs4287HrTEmb8QPgMPq85rE9doNqQZpPSNoDJu3adMiNmXuiFxa6DxiGpghP",
  "key49": "32QwUwnyGDLY8zgzVLquU2oS22ESLwqTUor6dyW4i1hWn1AQqpeNz57DkXgiA1XVFuY4R6h9oia1mYYGP3hvWPsQ"
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
