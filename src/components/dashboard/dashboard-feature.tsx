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
    "2G8GHPWXr8VMc55P5zSsakfTfZu5dCThgeopQxBFpp5xUnU8aChR5zjc3LU12K4PtCT5ySthqamePRLFp91oLckm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ukbP6nyt43odo6828vgojary8t96HMTCAL2bVw8ChybLw2jFdVxnbAhFjtK7c3m1rYvnjW1WHDTDYkBvvhrdNCv",
  "key1": "wC3k7MuosUBUw8Lpy3JDLJGMbxmJ5kS93uV2S7MQrvdnpiiqQFmgPPzHhPe4GvSXRuEam8iEpUWXFoxm4HhSA3N",
  "key2": "5PYX82yVqv2UcuUhTkdW3dzwAwQQGbq44exXfizUjENwG9wjem5v37YDGA7oCRLSfKgMkijx1qLrWGdLxJY4qjFg",
  "key3": "3QN7bgisAWCJgsX3Uhkp1MmXN6WLjjdKHjFYZoWpUpP2kVpefDU5JhAwtUn3xYzLU6itm5Nnqa7GsftKhWJr1S9u",
  "key4": "3hz7PXGqkErfdTmtAKQDQAHTHo1fvFQVz36qi7vShvL6HspjFQoGehuQH89x7iKXB6bFtsyx1Q3jacz7iwzGoqj8",
  "key5": "4kxubTqGSDLs6FXcMnk132ztUpYgiJLHJf4eLKbf7AmFoehv7i932DRJjggGyT927mddtyTc3EQt5D2VndaZLoV8",
  "key6": "3G2CAQCcd5U6EbGUW5jnjcCTwPus2MxrLmnMF3WWGdnxRLVo7t5Qy8HMR1aBxRjaCizsk3UWFczKpQvCkK1tPJbL",
  "key7": "5ALsd7AM5siDK5jqcYhNhCJgMoM6CfAC1Nid25nLMFBdjHr3gwfZ9JKr3sXwN9Y82WQ1BFNQhCMcjH5MwvfhWCAW",
  "key8": "pdFCTHbjoZ2QXUYQiXZDbQpcRSEyLGK1neERzvoUffKsyJrA7ZxtWVFWJ85RbXmbcRkws6warkVYkLF5YuztvSn",
  "key9": "5SX3pBLZfJcNC4mdP7r2SuTs7gXg9oaJ7UsXdXHbDgU5gyi5hMQRuiDkALK7QgKpmSWTtnuNdQzNeJZELVhofgDX",
  "key10": "ngFGk5msGYTr8LQQQ3ZRvpCU82mPD1vCkygMkjcJBKHm6jTso6JDHu6g3X5Ni3x5DM838KUsUDAcPRMZb7hHo7B",
  "key11": "LjpB1twdPgQAKYmRB4LTYTPkBdVDojniZ9txzY33Vc52GzQwKCt14XNGFXHy9sJKXt5UyCBx8hiCSCuhQUT1bs3",
  "key12": "2CaFMkFHuGg1UuDkAua29AM3HXdHBCqAxMB9Whuz9kitxfQtCzyywbucacCA3W7VUj4nvVEoyUtCignNNf14bkYC",
  "key13": "4sbfBe4n6n2wtU5aiiycRq1gBPyxRUbtKZKVHfhFjcYyfddzv83WTkqEn5vdV3b1gd8JZjuYpLFed9J3XuWxgsPH",
  "key14": "52HBZ2KwsPqNNuLUpXcvTvokABP987rx9RX2fM9X7JEibUBXVeMKcTMMqjYTzH1dSpDhW87s16FGzUFVfyRaoui4",
  "key15": "3svAQ7dKMP3Uen2DuvpDt1wsoShB2YEEjzM6EyAcLpEUjK4X6BhuWErZ93TQCHS5VyFLiFQXuCfK4Q9pw46aUqdt",
  "key16": "33DU4o1SNJYzxLbv1YpEP7rJ1fCegpVJjHBShozn1wk5yQNo72LPCMMQLG2BXsGFY1cjpBgGmbEn6aE3JzGTNiUv",
  "key17": "uXxjid2Kz86XWtsz5Jby7k9GfqC4MU2gdsJ6yHh4XFcR6jhD3cAivBdezwUiRvj4ZGGBxH8o5D3Y8ZkinYahfKJ",
  "key18": "575QKp1swg2tVVZCKRj4m21QYCwVBUAi8npVJBhEm8UzjSe4Pvf53CJpSnPFnVgVc7aeK5QWWkpExSL9nJNUNj4g",
  "key19": "5vfggQbhi9btGWnCYeBAM7aZBnvyCEF2urG1QsubANMsJ4M5wnSj29Geo1XRDVQULBsk332eFD9gD9r6TqsYxki2",
  "key20": "bR6c8QGFKLnYf6E4z14aoUvtT1qr8iqDAk1wmAwm1VXVcgGGefwoLgk6guhRr2hMTzPAL84fif7xxCps1areyxg",
  "key21": "5NteSeasRVS2dhyE7mbsnb9FePhNrux5oH7jQuY5h8F1D4tzZFBriMwwZukwB52hE3HL7Nyx3C5mT44Q3tHA4EYb",
  "key22": "311a5MPLdap5w5CcNbBbvcn5LxNLeRnAFKvP5cVQodVgGWZWbtpWzZDep3y2urDDvHzNMazHA5a2ccV8ojBhcsau",
  "key23": "61UthsUjh5Nw15Y8ETcmCjwMVmMKADNLVkSDVXVaRx26CgNnQfn927C55wVCvULKju8nSbkeCUVrnWyouq9eAwNA",
  "key24": "4AxPgLABCcZQxBYLtLfxRs8X1LiTaq4mFwrxHaZQMkHbLc1uUfDyNfiZ3V4tXKJaNdvuPvr2ghSnrcLrLor7MVq1",
  "key25": "2XwjkbGaiPznCcH4YnTfbfCBVECEjeS4qFQQthJ2VJjtErHyZq66Fa3LTp34gtniEW3tGZMPMkEtbzkho692Dv6G",
  "key26": "3J6yWpn9Ef4TMm2o6wfKhFTeNtaQUKUuUypjzL5NXiP1VYrBy4CZbPZdRYpsLeh1ZXPNcFKANRPLTgjMKdQT2fHw",
  "key27": "3XpbS8SNPoBQKsgYaVi2A6ykybm6knV6en4GR4yNV6hocyehQM8TpvBhUTGgYbtNBzWnQns1Sz5CG19y3kzGxtG8",
  "key28": "3XoqttDgzRAP2JQqix8CfdoqJn5dBDi52dWWh7mrKpCCU7ELzWvBiEADowAgFj9zKTBw75NGeV16woSsUN1JaepN",
  "key29": "3uoT6T9sYC4bqNPyrNXZWJJAJkhm7rmFMpcjnwWYte7PbkVMdzSPUspHB4YCiWoL9qPJiKPK4Qj7QzbVTyzLZ7vZ",
  "key30": "2SVeLmT5uagX4VuTJx5DWreMqrrwcF6Le6e61uykimt6FuFUzCSEJAvwW3gAsj38ZmzHNviGoMa9krejKkerygL9",
  "key31": "4ws6zRwqPziDkAWBmGVVvn15WHpSJkATLQa9yY9XkUTK6H8ACEQ6brFAQcbCXmaLGttMM9abj48Dpnn9S5Mp6dbp",
  "key32": "2GrMaMq9oikKZrJiecpJik4SydCNgQd1ZtxScRBvWXwfbViuUMMNjtpgPmzS9XEz24JocgdTHThY4tMSadJUXHTu",
  "key33": "tsT9CkE6pLgGcKTBdfQ6SpRo8T72BigtRiBMmZmt9q9njBexqZQ5nCnwomZebdz7PvX8BC9XXV2Q5ZeaZZt5tAN",
  "key34": "637Vq9CTqFszbroV1JHAptaitgNqtXVTKR1ZddfyE2CSBp3q7dskn8zB5RsLYWB7xrxxMXeTharvvFoEwwK5mMCg",
  "key35": "5JWQehEczLVyQ4ixKf4gLYcfGb3mH43u2F7GQjkEwHNdUPCQqU7mbDykT73CaAgW9rAerxMgNupVaSJCgGyoGCZm",
  "key36": "azPogHo7AwTJCbkA5tX7TBQ7YaTQ9zVp9nsT442JJsYaHeraV4H4xhxoKVnhn1F7zdsRmL9QaotqkPRzryMmEQG",
  "key37": "4FHjkjNENMiyH6YFNpaqs8KYXgMQFsgD4biUTEb8KxNEG7aqTZ6SXBCtkactC1pkWGfHBEwWSjpfwuHRFtmwrKxR",
  "key38": "2SN5pmtuDAtgajKHxGBqvL5amsUttyjFW6vhXdMbNM9btAw8TzdrV5m13q77YYuR6C3FsSMJx3aCYtoMTcuXqmoc",
  "key39": "4nvvpMd73wWEFFsMXqK1HrdBWigigTv3MiyoEZuxE3QE78nniQFCWkmswZ4xadHkWuQGNThqj2vkanUTLwWTbnBG",
  "key40": "bR67F1stqyAGQ1wDx2bKPiPrbMGAGuGPoUpU4ZBLcFa1APy9dQ7hk1KKbeMwi1tYy8dhaTv3W48dQxMqnD92bjV",
  "key41": "5hVUr3gCjMsxiomNdGTMjtJ8AF3biRxB7Cfurrb6zFRjZbG4CGWrEDLAnZBmMjqUXbtca9sBDpuvkA2ChxghvjuZ",
  "key42": "5JqQGhznmGs47etEoR9ARdKHJ7Q985Sa6syA9Fnxs52uXbd65NHJGoGetB8ioxPMffjJDjeDA2WLwvuZRj9BygXo",
  "key43": "nKBAcDf7U4AzQctq4E4Ng2EoXR1XS5b3qDvSwVnRJHXbbw7SzKnmWXmJrsBJsMcPzhn8Trq8NDodQPEQFtDegdV",
  "key44": "4UiDYQnXQ5XnMyaeAL1zrG2UdFmkVPR2gNyyF7a6jZrAtRbjdjKvZUzTNqaByHdXRv4LRZn2S9wsYRuLoZHPq7JT",
  "key45": "2YfyJw4F4AEazBUA1sARE9Jkk1esNUezs3pH9i1v3RuakQu1z97P2gYHeYjkJNTMGDDrcrFoMu1jtkuAfWwjj1c1",
  "key46": "6ptKw8uhspSjMPFCJuJ5zRg4vG6gHBTDBJc638KchJxKRDftsqhrgfr6jjwmmjjQYoDoHHTp8p6PATQ9ML5XofN",
  "key47": "4Lm7dvJa788zFBPxwskpJ4gepjwYepPzFwma9UMnUqeiipZapCFQTAapy7XXpGwBGyi98SkTa25m2fMHNnHzwjZW"
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
