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
    "2EbhutCQevLW1HcH7q5oTXAKU7iubCfR4GEqPXm4xQ4YZAZrvvKQhLEuvejBQrXQ2wLVvgh5u61etQAVbxTSP7QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLp5GV9bM6Gnbg5F8oWEw2V4jyTqncSGdEGfhMxiopQaPQr6r7kMCP5Qk68Uuc1jYe2PAJ1N4L2aNw1grTE755x",
  "key1": "3maE6tfanTUQCgJVTyuTJv17ahUtZPQcgFaUriZK2mqXUycfuaQ87N8eKUMioAX3QMaTWLLg42BUr1MNHjVG12i7",
  "key2": "bLc8vavvr81Eg37DyX2ujXrt65MFvYcyUmf3VFjkmHQttC5NCUkibNmUo2vuHJ7NnS8WuGfCvtvRNvNjJ1sodaT",
  "key3": "3498cjc551kzrMUgDXYFKkfqHuRkZ7KEUbFGjrJRzN9jkS6YJjbaxTzqze2dy7ayhx7Cj3rdibyBenTwrmDGznwT",
  "key4": "4Xs8iJHiJ51C4jeZtjFfMfo6rwTb9zYSTvmWiefMx9yVSvLSdLm8Ded2ciQFDPkhuHS9PtoyhSaURdXJ1QqUGeri",
  "key5": "63ADiBPY1yTHsuPUH7esC4PhT35L3AiTyUQ45hEstLdgzBVtWvn7v6t9ktakP3u2Uj2ExWhcfGKdHYKxU1RLjEph",
  "key6": "5BtA4Go6qDZuY3CpbU3dxYJ638Wua2R7oopAvHkcceTpTaxbRJgWxoCsTXqAnez78DXeXm9xaafpz3EbkM4gMQrV",
  "key7": "24xZtKHBVpJjXp8Lv7L2MYJySn8NkAuCkL4iFnNKJJS7xyDz4HJxgmnQBZBv1i3gGUH2QuuHkpzymiF9ejkfR7yD",
  "key8": "2C4sk1YKD2SwigXTjN3vb1yo6GtK6Wf8vjywnLPQrNCqDoer2BbVAxZvbStmfgYaE4SphhNvRgRV7pvRMtkhX8hc",
  "key9": "2H2pZE1tGEjWDWLxFaYtU1f7mgQxgb4pjNqLt3BYkLQacZ7RfeCv22BUJuTtUSz1ndThTQpyDvfE7eyH8J6863eD",
  "key10": "5Su7MSNX98EaXr8BP8vqD9Q6xjx2STmmkbhTZrQgctghSGPZR4PogRJ4QbXjgFNS15eKaWkrzjbjnq5bRD8VVjTi",
  "key11": "2aHyW77tYgkWQ6a6qGQmLkzbqmbhp4dnhASe6aZz3ZsM9p4j1WTUewYLdH6DaL21iqptcckYVv31jL4zj5oQZZvp",
  "key12": "4RYuY2WbrSS94AG7V3A62yVENYRKY1w852jWARi5hUboryuHJe6tMXxQ8MfKkmSXcdtqDhQyDZf62rvQE5ib3mvF",
  "key13": "41uy4W1m3UUCYc7SEKVLjtVViSAm3bxDsukrzV8HyebdoREsn3pBc34RjwbBVB9kwxCmYfQCY6RTz6onYo63yhL2",
  "key14": "3qLt115zbWCCGGTFYAptWBa31hc2fpfHZ32syBwSaiRGFK4r7z66qBpzjdTUYBX7N8XmLh231cjGk3oqhktYN384",
  "key15": "3PmPZ37ToQfuDtaWzrh7aU1k4oCqZ9FHGQw8zH4RpBvvL5oqWoqoVx7VAQMmTiDKx6joZ5dA5Zu947a1mBGhwrKv",
  "key16": "2iHGmqLaky4MU7JjrQ58XSvqityBgr54Z4WPURhKRyfKWpPfVy9XMU2nvSLa9drs6eeYmRQdRCjPJoP586wW4d6f",
  "key17": "48aGrP9nbQLMc9TdRVGStFau6kcjdb9N8QGgzyTP947Ky71fhWNMDEqz1SCAyURrBXx7vqCy3t1vMfEuC4Zxw5aF",
  "key18": "3c1N2N8wNmW1nYNeQXgHGyiUUmvsj98qSuDtFVgWjjneMGmpJecocPkQqCZeHxtm8a7AtMM8ZHX9WjvMtAsM7spV",
  "key19": "ZicAiAM43yArG4ncaEP9aYJyw2JaZ218hJ8F1MLXBYRDkxKB8SWfhh9wpYHx7mAtLCvuUUVg67NzEBYTpjTBf5U",
  "key20": "45Bn3U2D8sZmMZFoeBQ4BP1MAK8RJQfZGWrQqzYL92Q1NWDCkTdUFbnZ4j3u6Gph45iA5sfVfSoNgtwLiMndbLNT",
  "key21": "2dxHfEn1z2FGAoVFuKZZm83SPZMNA4yJbCc5LvJy72H7s96hwFxr6yfz3XWTCF7FnJthV9wg7ZJSTofjdYiXqhgC",
  "key22": "5dGjYgCQF5XfHoMKkrhyX6nDQMG3Bxdd64UmQVuBMtCXXuoeNkrfvq761Q594cr8AohV62vWsSia6c7vVBt6VoHu",
  "key23": "4R8SRMitPfhUFFRNVznhwv2JzwdjGWg5XwMYfxKGEyanBFXrdD3inm9K1xNrw3M21ssbaCDRLui4EJK63jNb1eoN",
  "key24": "2AM2sCosq21Lnf461LomLw3nNcjzVXh4ohsm3zTxwjTCcjWtoVMgBa8S1vzfiqABb7bKKkwVMP191MbUCo4WXYUS",
  "key25": "41Yf4Eny9DsTGSscd3ZRd8heynQbh4gyAAqDZupgk4yNAjGV3YqhbKfZC7rytAmR7hgTmg3nd94aHkgPPHHFXTE6",
  "key26": "4yiqMkPmFjzLAu6YBo7Q3zfaQh2LP8U6a8y6LFGfkU4t8VjQyyU97MZd9pK4QDmYU2fQJqyFVqnVRRsePiSv1KAB",
  "key27": "2oUymsbr2ZKufX8KkFtErGtDjaaEFVcSty3UitC3PFLaUDVPS3uA7gDQdLbAyn7M6BYDsZGDbXiaomudXhNNND5s",
  "key28": "56LHyr3mCq5TAEZJtgiqYAZUyoQ5kR7DyUY7v4ymV55cmvSVb7Mcg1EvHgFKSNmL83XLKQc9YsiXEjwQm54YKEya",
  "key29": "3J41vdjY8vJLATv1nNZ9E5rUu4G77o8wXXTJi52cjSXVwBGvjkfhSLEvKJYEubwq1EefsJPfTSm2Uz8NMyNUeMBP",
  "key30": "5x7BH16Ndj8q3ucNshhzfCEqjxUDBiBm3jRPRLaRdzRuJLV59T6txV6ot3KBDLQq3ityq4pa8Vbnpy5gQNgf4gRB",
  "key31": "5wfBmuZNNnfbYnCNQjGcEXLHXTjQTdCFHgw45vDX3uoL9b7o3TjiY6kXeDhPv6VonPULyxMEdudZfKL4r66UkLJt",
  "key32": "2GwKR5MNN7oKtcg3jSH98yqRtBVqBnH5ihqJbtydegGj7s97itKvQhbWDrTo68duPdmkQxj82xTUU13N1UqFbfp1",
  "key33": "4ge4vUzPndm1oitQVsVAe3zLs7UeMorWJm58eTiy8pidwyHcdbtTzsNFVujv96i1FgSq1JbwBPBfTFHxzHqhDTv1",
  "key34": "LQE1efELuXCMiah5JvySuqDsj5ozDLAnSqGr3VJzhdsVKP9b5AGcFtKw7mgTQTmdSrXPcFQhBzTuDgJCMfJGNqa",
  "key35": "UZ9VKJ96EC565Qf1Mc5zmRsUner2sviho9846Rs55kmbZtqsie22pee1d8JN9V3DkbNKw1WmRTzG2KJnSny6dfc",
  "key36": "6MtWRLxQpqJtVxwL4PrSokAF8Z6CoZ5EUjqfQegYsN5jbGEe1EiGswB9X6tsqbSvMzKt3LnYJWVWqwcCLzS5zVC",
  "key37": "3CtV3oVc5U42w1ACGki6yE88nGPL6SgDaK3mArYB73KmWN8V9WuuRVq2gVpXnAvJkTiupinSqHnecsYrJpNWp1AM",
  "key38": "5L3PTJb6wxGQaf41jPdg7CurFBzFKM3nw4wShaLvzZ8mhkVt3ZG8a1GdrLyDnDBuJwHgT3ANTzvYaDaT6iy3YumP",
  "key39": "Zs7t8vpAgssi6d9MRDKDEecte52ms4YcniV7WtQNaL7iL16oLnsdssaBkWQmUAxoHntCdEwHhUAtGBX4gvFyjpG"
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
