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
    "5v2pcL5BBuYZrsVfVoA7yBzTx9YJEDCL9DJYweHPBKPiz8K55bQSufMZfmamwxMLs3S77eAJDRjdGjeVC37AFQrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q46YwVJ6312R7vrm97QkYf9S1sAfchUfnkZisLX8AJydLZYj8RuPgw7u2ozMAHmcCUB7UikR43Xe6Ee3K9xQvdt",
  "key1": "4LGarEYTH21wHfMBFXbLy29XNWMrNJsT8CnM3RR3GZykGrfFnMNdgP51EGAibPjLgDzdJ1fFP78ozk7Lzd9kGeHk",
  "key2": "3QuSep9krUtv7vvo9PWwHy5t4QgDExiyFCJVbPrS2nDeHMd8m49LrDEzyihsPjXyjEGsvZBqWMhJMSb6zp7txPwK",
  "key3": "3XYcyZuyxqDJBuGoG93bBVpr3yUcxRgZQwBAgSozpH6TorBrPaXPdGtgfwTX8pyNWkCBymvFjtva5BfULykEjUQc",
  "key4": "VCmasRgSmhccdBajhcXsD9NCuJWiucMicNj3gveqgUV74eE629oD6iNyRmojbKEKVQm4ZSfn8hP5h6w6Xa8sseR",
  "key5": "54rm1Awp9rFnLZu7BX1LzvTADsZJK4eXxii7ovpFsUF6xqEL31CV3cDnLmC5RUCfgMfxcRMDQx5c9ptcmDDQZ19w",
  "key6": "3YJ45QDuNEumRDHkC5Sdk2SYFrHsEmsRvtPs5RXg84HRFmj9CGV7vK2evnbgxA6f5jiCk2KHTtBsrVGsCLPdCAr2",
  "key7": "3YdkNA2TGu4ebvewMq4YUehVs1HRAbPwNTdSZnr4kyhMqGpasukFmkNq9onJex4nQJdtA8eT9odqXoXeAZhqdh2x",
  "key8": "37W4oWbq67G834atH8zriPcGZaeXmFKcDKNzRXefnhu6zXDBHA14aP2avRwzWzfLPN3FHttshG6oTgUTdP9mFbX4",
  "key9": "2nKCYiRSVqgiWE1EV2SwzYNxusfH1LpaaVfHPwsxiQTAHzHyxBsCxo5Mgs2UKKHzMecuwDfmZctjkohi4FheMfFD",
  "key10": "jX3BcRzRjJLsHj43VrfHD4hbwoQMe3aF5mgKa661X5bfgyVk9k548Zvea9nuVguSDkY1unaseJv1DhxrcvAwPty",
  "key11": "3sgwnXCfKkQzU758ZJkueVt6ZgukxuejyT7pZafwx6eZc4s282vZf3yjLjjR1udMoWGUFmYCHSkFndEk3XBhLQDP",
  "key12": "5986D1DCamudTD5nwsFG37QtEQSC2ESnGsa2WTfTKPVhAwnEqkeg4yNhMAGDCPXZgbeqCXXyFvnGYmrXAVCGqBaw",
  "key13": "5XDK56vwLfBMRSDWvEBV8L1mDLqt2qVGscXasAJEF7R7Npi34qvcecYmawxSAXVyzXvH6o1isdRNW2GP5fvCQPKP",
  "key14": "3gT9kZVkrV9NtkPSZe3P5z4SPy4xhEpMYuj7CjduJRKNJuWNUbY5tYneuQXuRc25SvPqWKVvp7FvcLB54QXvAaf1",
  "key15": "3kcvp9Ed55KpSj1RVTbsjmMuB9XW8HXvZL3sej25YqkX28MNc1rMomnQW8XHUCCMxRyuDiFKxKFQbHmD6ihFdA92",
  "key16": "3EoftgrS6f3UbKw1UnrRxqmwG3V6tgxjZr7hDDMiQyYkGUjyDvoUtta1xSjZRr3KjCJehk8i2KZLnMQv1Pb9KekU",
  "key17": "XwrYGK26MujfCVP5QY4YvAfj4NgxRVKLd6FJ5ABf4Cf5ZobYem7r4qrmMPreRMHbjQZmWeKD7YUTXH3MXrRnWwZ",
  "key18": "4kSnq8L1SXsKKvveAWD7Whg9XMATD1one9pkmE1kKDUAxjcZm3rjgbNW3Jc2sjyTt8w2pYTe3sutikXboZp4evt4",
  "key19": "uh81VkF5d3Bu1Bfmahbses93okTP8XDi4ZpXeTgTa4VXjdz3F2x7dGdsHQD6U2UeBdoNzhtX9F144DNXcLFHGMz",
  "key20": "4fXv3P8Cx8DXoDe8ruAHnFPgdxaVZwp1r4TgnL25BsD5x3yQ36yyzTzzWeG5qLuVwJVtRwX4TdNvSbHMbVw7ZS8t",
  "key21": "3xWqqhEDoy5odvNxKb7pNqbF7J3MTdTP5FKbanaywtHvhEXT6Yux6o8ehBgoqnH7WsuJpNNS8JS6VD1hvpCYZY6L",
  "key22": "5YwGDz8gM2LB5x6i3nAmJQ69zSKT5kBjpWqpHwBs3KAoBjgRt4PYv18SCKSYzVsT6gAnnRPoGQKiort8vSNXvuWD",
  "key23": "3gpMnNRrLRue45K4AD6TCcTKKpwM9X6sfkiA2iXoe2DUB5esR1aqBSDTFaUh5KLrigCfAbvk6TvjeBCCBGQAMyYY",
  "key24": "2QtBYQJMSrNXfyBe5q7m91aDjrtNfomFFjyNMWzpFQoX6Ljqzq8gHpm7bTZupzP7wfjAbhSjopS9VzPuLCcCKgob",
  "key25": "2ysJSpc6jv27sNABp2tSvb9qvpXVMb3L8DJdqXjhUVwzMSbh782mCQsQJifNThsjjV9utHJPKdJ5YidW6yhQLtQr",
  "key26": "3AfNSA4R1ewVnbLeZdM9TnhpVXWVkPveuQyC3nSeEusicSe761gKvZJSptRSirUnypkZgKFkdVsQdG4C9ZDvUzcC",
  "key27": "3yJHsUL7gbHvvjNkcZA3n3R6mT2hCMFxVGoVjyYb5wKK66q5uWypwPxwR2xYeUi3w6zkttFuef6hpWtNwTPxCRsi",
  "key28": "Uh2pvB4ECD3PMoY6dobMBcxbgCxx74W6BcX89ZNsqtu2bQK2P7qguTNK6WWcJgpLQfB4inBsVDXm7EeXrX85TMw",
  "key29": "21rknBqqgBAx4Y76mWjCchBvwYraeTGS2UxSpkL5ziVci9tdSBcvT6yoRFHRK793Yu4paRQ1jVzhyAGt1HBzgJni",
  "key30": "5TNbVPaevJ5fyJ162NVa2GPeBUiMu3q8vcV7iSy8jgbZtTQUVpdpCcxQmoGd5nd5RBnnX4ERPKWCRjuXDg7Ysu1Q",
  "key31": "5wNX4TkNbwDvpW9zcv84tJibPwHJHDnL68c54qYZ7FCK417Nj8Loe84EGw8YTFn4od94SUKpvzemqXdT5CMzk2Eg",
  "key32": "3qC8D2Zz4b7JcD9AHWs96irFJNXUvoYYxwZ8mq7hpHbiEwjqFTatakumdcqxtBzwaF6AVcizXt3ti34YYeX991t2",
  "key33": "3DfVAiuUqgtX8rB4fpXu8BXE544Xk2MWTvpWic4f9y8uSpPeUDjK7cqqFBVEeEYeFxELCpcKxiLisoBDrsQS64P9",
  "key34": "3hLQLfeH8oHFAHTtpxMgUmJqv2QvDgNtsmBxTdm4AFNo767Q8Ls9d4RAmpqQVYziZbnTTBwXXQXeduF5Moef9FAV",
  "key35": "5sFCP6zNGpEc9BTaaAkTTesv6hn1JzCpSgoVsD5JhfuYsZgFNGZyLW9AcDrHFHNk3YnaGaRmSmYz31AVsqQWDuC8",
  "key36": "2JRRb9fvg8hAAYB1qiBAnRPEoBEwHxicS8b3PoJs2yfaqSZ8NreuvwFsvxhTcaAJWSoMctAhYUr5nMJR7ADFXdQX",
  "key37": "cqR8ZKHTnuetNu9X7q5mu8QSmoeRB8pbg8EoiQMPCGzvKyt4WLq74N8nLuJ5WEnuk98CgC1BasY8qHCG3xHZkk2",
  "key38": "5enaNHtwAy2Duasm1XRCEzDba39zrjHCoAcYxER2P3RNgrUkZ1qUAjA6WfQhuuAWxU86bnrv129x1XwdLubFUYAo",
  "key39": "21CoJwzEzYsdFJaBRyhh8gc8M8yqQUBpACQtrS8mVLSezbKNfmXofKycm7Y8SuqwhxpDPREhGq93UFi5Bic3wEDZ",
  "key40": "4aTkCPrdZbMTZ9sF9kGiNibJzWtQgqP3LskQ8pbeqMfBZLCE5PtHU5foUNpQxVEDMM4KL9pfBDutrpDRRA9jASpq",
  "key41": "3Uchqf31g6aviV1RCNU1yzk6JkGotTwdRcgEBWcy7q6MChvDK6s5R8Vm8qxvzb98Cd1xp3uzLdMhVomba82rKrHe",
  "key42": "4q64kkiCdLF5nTyYV4YVqbx6uFSP27v5taurWvMMrSJRF8DzMmsB4cnSc1dffSu3cKBvV1UYWDAPpNooobaGa6AY",
  "key43": "3qK1BPyBgPxHUASeKYx9r3JqufBfm3rYox2KGNMpHmDCbqXvjxDH5K6dJTwTjjedu5uSXctEjn3KRnRLBbSKi47k",
  "key44": "cNChkA1csraeg6WVMUfKe7Cm2pD7wBi6sgWAm3HJYTyCE98ktNif9vkdjVvsZs7LhrPEWDJ92SACVyhLdynw8CU",
  "key45": "4bQPSDZGDRZ6x7s2g79QdeTU5SALe9HufweWwKEjruy77SaiGe3WppULFxbHRgVg7un2EF1riwQevrfHoDS2K9LX",
  "key46": "3QSCpHHBi5876LwRP78734DUcSDfg9TLCtDekZYwHsZ7WUhMxSGZhyyXqm8TP5Dhb3TxT1dG7PWkGDi33AeQHVKt",
  "key47": "49eG1QYwSGw8yfYUq6UZdMzrEUXypFceKzQH16iQKZ6cZU7kAQhs3mPBY1ck4ftrTd8jj1P6yHZjh7asm5aRb7FV",
  "key48": "jkHyeE6pmQrfx1FQkHT5iiumc3FJDLxgxFT12abXF2srDUNJTE8iuguqck7omBTQeMRiEyXcVGTNh6RSD2g96CQ"
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
