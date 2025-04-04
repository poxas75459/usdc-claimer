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
    "HxLMkuBLpHvhGTz1V6gbQERW5U28WHFS9tKbem7Y7teWwrDoBJxgL6ndv4DYjnRueoQQoihBG874kBqvNBcs2YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbqbXDBpaaT8SYFNFdzANtHmBzWD6qcSTHWoBsR8pYEqn3Y46Xk6iPBMqeYzKqCsUKcqazsZYpenhJ4xspWrkxG",
  "key1": "5Y5jGeHRxcBya4hBxUr7f6gwbKFb9iesZZSnftGWCrmWvMsvDQSKuXHQSSsLwEFwxn8fPj1m6SXjVtWNBGijt4vM",
  "key2": "pxyAB76wix67hBwjkiqaDrxzwrMBncr34jihkyK6jHXxz5iasmL4UuiLFTQP2k8Un1ytT712CMqjT2uJzMqfZxQ",
  "key3": "4yKx7c1nf9AvLRRGVZmzBMMC6i4aC6E7PpHGE5PvXYvBszaaR46Zt14moUUkYWB3JwtAxKNPXWFAUyFW2A7xQnm6",
  "key4": "E6VRiCDVD2BgH3XGn9TZJDMLgxtJYCX4qWsQGT4ET8fhQXQyc2Ec3MbCCmCfgLocqcRpzy195rX6ouTj7xFCGFH",
  "key5": "2icMRxqxzomWQ9HmdJRVr7hcakszBRaCzstEmy69WziAvwvG1JpYpdizZiR4RoDGtgaJ7CefiKq5YaUAFU5wgWb1",
  "key6": "2v9Lpkr7semJgErNcDBG2VsTwCLTLSFx7eLNSZW2KMkKbLg5rVLghfXorHPtGTqdSizC3nU5ZYfzfCqRXYxsCiZr",
  "key7": "2oeNJpTjQ59RUYUm8FU7equqhaYmwnjaCxsz2S7Uu9ho1syJinH2XEF9zfTu1nBNibKk8CEnm4YprKp5U1NZNmCj",
  "key8": "3AZsQQfTKrgHwttugS3PEJTYpQgk3CpGVbMD7gXeu5wkxTSdKRLV7ScmoGgm2FHrL4MAC8MUrdj8rN64ZZMG1LqP",
  "key9": "9MFGZtr2uyEqAQgTyzPfRDxiTvC1w5Nd9XnzbkYtRDyzEGWLEdXbGA175KTgSdiLpHaHxQvjjoZbFLyzejmwARx",
  "key10": "4dRhEf1bSGNVzoc1VN5eASp17NJYG1uH4c8S87WE9izGyJPxbrXMhTJkfAhJf8qM7Uj2xfTnRRYvahSKCjmmhdj7",
  "key11": "21hpunjHRZbH3AUXrAYV7PPNrXfn5y7ENvMmPLxqvWZudbnvv9hFRgh1R8ppHR44xQCSj3skXFc5aizhbk2j26pV",
  "key12": "5vw79o9jetsaY5rTLLk1fwTZVKLP2FmWZPkrXujVncuyyHKvHiQajv8Msw1U9hqd4dRpkgeSiJGWzakbx4X2CmzE",
  "key13": "2B7RduxC28VTdwFwwbuX946XqFtivA2stvm8fK8TsRG9ndeXmSGNUAyFXdzvn5Nmcs5CyxYCRHJodF3QaDM5MzZc",
  "key14": "nQ6VXADe3b1cUSvprY41cpzzCipnCJaScsnCdDDUkZx7eysab5sz7XRdGySxQmqFUDBe53mhzZLKqr6sEvqUY3e",
  "key15": "4zJuZgqQrLdHGjEehtJwXvpYmUDTVdLJD5JXfGXxTkU3NF8FjZ8AP3BVwwAhnUJYScnMy5bYdh1HHUPk1quge6tk",
  "key16": "53AULf66988o6SCR7L9VeRaHPbpoCzmRq6WLvg2DtejZHr6XatoP9Q8o24LvQgWfAA5j8Mzt7HcUG4ikYjSRVCQ5",
  "key17": "3N4BSd4aG8VoHr7tkBypEWJmQo9aKn3DgcoDerTUp7MqEMgB5hxbAataxreBVqeQ1aMLhPj9cSas6N496Ec711Nk",
  "key18": "2M4YMbjEaMWTj2pwfdjfDpQYpsjehfMrunCS3UJD8FnH7oDCzYtqZMdKmiM3UjepmVVB4yFnQRq9nZXNi8siHFCn",
  "key19": "KjrdFj3XVXDHHmHgENmXKKHb67H8e7VMG4sND3882zP9aS3KJZt2Q9zF6jG4Dzn8NC1kZ4CKiBWuqWuCWz4auGc",
  "key20": "4zLRAwjLMkvTHfDQQuYq5yfZWPsMsEVWgYyBBV82RLvWE3bk9xQp8iVAo1j7t9CACxg6PCBNSddzK1eghgGwMwRL",
  "key21": "3Taf1N5SjFjrrbwqo1LhwtkjStKWUGmd57uzUvxFF6wQgDH9Hk844WWNtNVHMaZgVfsCWrc1bpBhhhMQ5ueay7jH",
  "key22": "5xihhiw3qxGknUEVz6JamtU9NoqdR1R8UKVzceMTADVdDuTjK7nFvT6U2gWxgwBjcYwxNLsD5VxnfL4fU1qLzCR1",
  "key23": "4MzQnxEZNRNFCGeFh6j6hr2jLsRSxpKoqnj2UDjVkZTaa9ypXonyiDChWw5q1aQYp9yx87jkKk7YN1DSY1W2zcc9",
  "key24": "5hoiCzApnnqbqyLYczczvNsnb31Yi6WSUWDna8mWmkio2v8BXgAa4rZRc2aJLjQQHwPSALrvApaYMThpjyPs6wnF",
  "key25": "3pcdCyhAJ6m4oi8Escn4vHoEhAVDz2U7cmxLD9kDMkzapb3QXmbtnyUuvfUCkuWPTJHQ7xefXed7ZcE1zGj5FSMQ",
  "key26": "49ZQ4HJ3vocdvjH3LMcA2J7i9GxUd6dr59ifrYu2YqNPgcXfFFzud49tcLfyetiGASues45Rb5JFxMVphiWmzdkp",
  "key27": "2cu1DLjnfVPNRuPzDF2NitaYVA5z68dkqPTJ5cDUmBkdjJW2E4pZFM4vJgS7fcQ9hLQF19fBX8wkJPX4XcofYmtF",
  "key28": "2GZiPkqu9SxSwGNkfnqJuoJkqJLzSi1LTeNTCXbdFVQMq3RTMa2FB9qToXWRnmA2rszr7fUem483gcbtGkfd3PxG",
  "key29": "4GBG3aNfRQCN2poMLvhDN4FfQ6YZDtFEnLmv6tBo7UzeuNeXY9t18BYQaxV2zPdVLxUWxvMSGUWARZbMLY6XBCE3",
  "key30": "4GT8o7v5AgmCwHWCzTFrPyadXKhZAt1XCpuQJRPp5MH1mQgdHjKQb1ZqPXxh7Pm4WDciSE9LMs1AszzNq1TRXvxz",
  "key31": "5TphwchGhydwUJbkXNJKZuzEHFveyEupfxiajoQKdd5QizsbGSvNR98UnsFknE37dk9WdGU2GnKT5vkFgQt224Zm",
  "key32": "2VaSSq2ofZsaAdnRqDYjr9dwqVK8aKpRsNdkWXYPjzbva75B1QuXUAepKwqHeqWDa7ZQFWPsLSMkczFmCHQwkY7a",
  "key33": "hWPomFYRX9mUQXUFEMDN9rQTCDiWQqmufnAjURkK2cJ8Mp7LfaYpF3TVUx21kwoDqqPQWNNXAFCMFLfxWz6P3xV",
  "key34": "5bhcdT7pf5uwzEhdSHrH2dSJAd4qhgZLwQhMHjyYeggLx75ECjPoBRtquQgUF73szqvSCQRCLjauandDC7athX4g",
  "key35": "Qezj5VyDmyMhDjitb6HhJpMrSXneDviBEGgoYv7NNGFkvruYJX9Ftd51awkJhwgJLcgscS1u31FPmcjVpLDYy4r",
  "key36": "5EWw7nv7JR5e46Fpz1rrtMuW65HTnzzzF38VCheHUpWJfDwYziLE98AYT7tJuTQfqdZ45WovPwbHce4Hj76qzim5",
  "key37": "26KKF94vktdYGwAg15NduJWC4cb1hwrwpnhKYvVCdDiLw49o5Zxr6w3vzt6rkNYBeu3kjUWu9mmfsFgrQmwsdMsK",
  "key38": "3tpxxg1PUkGma1fGKPMhWzEzQHuBRTgoDbPFQMmFWL1CnwYYBRNTxKSJEra2Tsn5jp1AiLQhcYT43b2yXFAJfh9s",
  "key39": "218zubU9VNLQDu1vq4chEZap91tYXYpe6mx6yeE288h5dvFHWpefSF5i7rfmx1ungAMxnBzEchb1DRMcAnn8B1g4",
  "key40": "2AjmvvcmPb12EXcyDd9ZStA7pVNqQGLqkECdbgyz9KprJipC2diYKJxMvqeJpxRYYQeaExwe9f4LRreZcWrmBU4T",
  "key41": "hc5v6u5yHEfrAodAE82w18dUXDv6VoGkiwfvzPEQ3xpjkyQfvvtus6pE5UYiPcrvHj5K2ZbuTfcwTiy8apkeEWV",
  "key42": "A8v8gmn2KwRraBXjK2Nwoz5VN7GjH8MT2zetk41b6SJv6Li9aY3Ef7z64cJT7CYRfGwBqjijhPLLAiSXivSWBep",
  "key43": "4bQwZcioNDbBkwtcz7UYmiCeSR4DQ1A8P9WYzp6JBy6eY3JhoyS8PY4MkqtGdoJmAkrwqQxzUhB5Px7zYjcyHDDA",
  "key44": "54KDE2YoeVf39vasdZFNmXNJC3ZiQHH7vkw1G2DzxZjqKeEiVKb37uFnDRzHeBj6gGBp6c2qNvABrtZKWwHitHnb",
  "key45": "Zi1c7RaSkhHeYNgpyUQArzZUt8gJXTGawRHgvFW2Vjc3ZjPS8yZNZGgAbYFySadJDETh8apHWKV9LMQ8171jXtc",
  "key46": "5xSnvyoNsgM7gQCkDkN4AeZX4yMoiXcuirvtwjDV1Ex6hjhVaPDX6u9KAvo8f8RCsNUqYK99vrEvbkYTEwNqhcVh"
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
