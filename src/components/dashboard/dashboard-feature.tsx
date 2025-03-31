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
    "4bEXMZe4AhUgRuhMF7rhsibqTKDg1GMyqRCQvTKDHrcPrqLKdhiYZCXv8NGE68DzopjeJq92kVgnHG3ju1DjRZdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiC51ho3FoNV62gMDtJ5WS989hrxW1xRd2J6AoH3zeyTA48L3PHoJBz5fQ4TzPwsgDiZVj3CNtpLxQjF6Dxa8Es",
  "key1": "4cNDbedDJHA8ms9kSvBZyqpmmeSxKzjDsL2sbeg54pDhKDFZdh8JbpTuZ3bEPb5r6wfZ81UvSzAPtSggm4GbutvG",
  "key2": "4KineB28v6KqBpKrJgf3bVbSQdDpeASDCfF9KCNiW5yojtK8Y9eCHkVxaLHJZqGucRchw3hy2CwwjVRARrCMZtox",
  "key3": "43bjmMHeC4XKjqFMuNWfRCSSXS79KKHifGNgh4KpyrMKg5QJR51wsNybLhgdkVuHdJQjRwrtWAua84jTvr8xCVDS",
  "key4": "4RRNokXhhY8W1CP89iHk5NrkMVFYJBT5Fp6oXXvP4i31s5kpM2QBHTPbgnDtGjqCR9nH63vpo7xNv7Zmv6JkqrHX",
  "key5": "4KTsYN5VGqCBHssqAdYM6CnZBDZYFfSrjQTu1y2UqTxcFRzLCyzAFZrvB9Gdn2JyWen9PHidZE1UoL3QSwGTZaRh",
  "key6": "3HukzHojo6647qRHbHeFohvxGNTjD7JUHMGNbsboTeMqJPfxxfm8TSLmUmKzLCFg1csToJfVJ8nHkbBPVyvo4yjV",
  "key7": "2wvA73ySAzvtZbwyHUzfxrvtogETGeTuirZh3z11YmQxgZTZufHNVey576Vbr2AVe6a7QvhmgSn5aME3w75yUAm7",
  "key8": "2nMxeBDm5VRfSPmMRH9UNTTWffoZRdNsLVr93JSiuNgAW1LDj9QCU318V6jwpEhE96QdDtV25Pvitjvn7rHpH7ve",
  "key9": "hfRzcc32U3XUiK3DBUo4CrZXwTQgFd3QKdusN8owjkz4dnujhhZ68jDYAYBauZZznCD1zoQE9GNaHo2sCJPJUgC",
  "key10": "jSeYW8adKfhFjfNsSw7ADHPXrtFrLj9E8EWgKUZHNiEACskE5ouYVWHfxZGbksxEHw36jcG63B2rCMtiM1ZxCHU",
  "key11": "65VTaWzwqiPaCRMeUYCSzhLnWoJe1CE1qtkhBd7h6uZ3mj9YbH32fqbxS3Lx9hJJHubFaqms8b6vHyQiAMMHanbp",
  "key12": "dJ6ycb4tuCzWcfHETGC6hZpP6itkmK8DxaTxENDyaM7kgGi9hsJg2H8qFRJBLXziJcTLpK39YD3JTw8omsF2Qhd",
  "key13": "5VW6aDwkuEyrAuT2AuTarXQEnbWT15H6VTjPGxGE8KVp7HqoP5JquHnfa8Lrhn716zDWx1D4YuVuQ5yikM2P79JP",
  "key14": "wT3Gz7JBvGdKtPrvYPJphwrRcQfg1pEPnfoegSXDjwCM9jryBGjquaNLtp3kU9NLTEF15ciGH8crG93iWE3WS8v",
  "key15": "2uaxvuZ2BP1kGb9AF4pA8VxikLXVY42jZBBnZegaQLGYW4PFmHj1stW5taeEz5615atYc4mainu3TTDaDz1mQG5U",
  "key16": "kqf4rwEhguquoQCCTCQySw963HzGa18pLzw2z9nPw1dXAUuQnderzC8CmwouVqGjdHSv5aLUoBxo1pU2EGYxtQp",
  "key17": "57er1bnz9a1QDVZv5imsX1EHYrbk4eKVSexodN3b1jCjhgtfMwQiVVppspq62C536dEefFkco3B6G5gcs7c65MBv",
  "key18": "35RtZXPe1NuJtQ2pr4YYh17ePCUsXP47xUE1v6jEHosd55wPYsQgXWsFEaRvuervGDy33qLSaqpJyptTEeVE4xcv",
  "key19": "of7qYTSErBRv3JqkegbgwJH7SD9umRFXdKWB988p13aFjvGzZxzmHrSN8ZFh72v63wAc6eqrAGbjB64KYagrQxW",
  "key20": "4EHEr1arTEftx9BWt8bretvopZhhNRPxuN4SeJ9Dv6gSPZVMsaH9YX42TehMCXrx2gzStiq5BjcivGjYcTXjDN9A",
  "key21": "2sBeioKcmmbr2GUszVQNnccChhhKJSocBjchKmar5cR2DQKLCFWPMsAeUPeHa1JHadX5kPxd6Xi1RxtvaWtp3s1D",
  "key22": "484e9d8SGcQMJatTjxU9hsJGVAuvcY8QpEDaFWoXibVsjcgKDvsr2yYMLo2WfV9GGNt4WMBwZf89FkavFfDQB248",
  "key23": "29tyZgsGFgTnwrzSXDB7XJ2ReZJczd4TTP1w7G9jinnacxZoq1b9VQPBDSvp8GqJJae5UjPv4uTPyjQw7WyZGSkN",
  "key24": "AocjTQqGADVuPD6q6vWq3UUJWgVX6BdvvZKgs2TZ3drXHUg14jE54D79aTUdgqqW1nbv4ZXewQN2kyXJtnH65oW",
  "key25": "4JMxjU5WRfU4kvLYGZhE4nzc49VH77DRtodgUVvLXTtY5xedbaooCudABx3zqiiJ2tydEpD5GeYZkA77yn5GkB6j",
  "key26": "4nWCSm2JgxHo1t9GdmJJ1RHA7jS7AD5JujPjuEgzUQJiE2b9ndTR8QKdHEs2uxeXt2ivmbPBE9wkveDcoVwuqnie",
  "key27": "3ZWYbPLfxZe6tXgfHJ7wyc6sygg97thqozvAJKcFiWfVX8BPYitSGvZvWNqiG8rUP7sB3asWfaDoSydMA5ZKQzak",
  "key28": "CJhBP7yGAQgZLTHvMAYGeSN8jNSyU3GA41KxQoeYuUfcXVPTwJsgHmYE5LQb8dBuJo89Rf4kywJcRFNmYLXp2Rn",
  "key29": "4mK2tv5QjJ1yyjy8N5yoNcfx3CRqdoEwoquxgUK6xTnER879vmjMWFy6xfcJfLa2TEJESwKwqJhYZ1eCw7Q7jEi7",
  "key30": "2AJvdJLDEzfna749beFJrVX8AiLSrd52yrRg7ZbMNQpiiRPMMR29tweWYAXVn8CdYpgp2bmb5qCgpnBdJzMo7A1S",
  "key31": "5ERwrpw77TG5n2Lor4dBfykJt212PSdfPzoGWY3vHzUtPrZs8dkhR17WJrkHfyQmwe4m4BGi4Zsngfuy7S7zAER6",
  "key32": "SBbFneoXWWDsGqwHn6H2BnnGNAeihLfoAozcxa2MN7XyjqEkWy8wzsraiENNt7yomT9zztzxFBELM2GHt29BiC9",
  "key33": "2LyWcixqUyfGAWPTQUVR7g49J1UATxt5XH1upmdUPopep5mZZfE4gQXGCAkJMe2cQYyKDs34wJfTRBbYxMYYj6J2",
  "key34": "5mqX6gMvbfnDSwsxjxG455LLrKeeunTEWVroHXhmepHVbHefYekYFdXERSVxpVmhMfnHBMeexkqvpnc7ik63U9C",
  "key35": "36F8yuuo7fkRWqn47aKGzzaHcN7yQopPhQSy7VmwShNXtk6DPd2okhKA5bGkhyPPUdX7eMkJTDwY2JjpzdDBJkL7"
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
