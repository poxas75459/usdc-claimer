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
    "47R2RHNkLvsaFRjktbPQ4GMk8Hkc3uj83R62pzENUHwCGR1eNpmg6HCDErut8fCSR9v9p2HR3iUfXyRWJgjDrNsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VV7Rzk3Sxc3GxtfWZV5EUxhp6MknhLPsiLdzr1jyumkW1q3W3KvWLHBZMotsqEPRS3QGzb5UBsYQX27i99pzgwq",
  "key1": "3qiBPyk6ZqCccAds569tFzN7bmZkVkNJEXZMH7hUA6tVFKoic8MZiDBK1yuZMFB9iu73nPczkifjZu1ECZQ1kRQT",
  "key2": "5DroPtUg11hwocTmqYAZwptJuKvac2txGMPwmVu4qxhv9DRnk4mdJuKm7Z96DbaRZ91T3Apx81JJnBmEerFiLrNc",
  "key3": "4RFDARdBWWn4MkwFg6ZpwuTTj4GCnb6q5cyyvBqCSmdWsarccwDkcLs7iABR9pTFZenqFEiB9AgRTYeBjKaEUUEy",
  "key4": "4mEcKpbZHvmxAjmkhRXmMuMU63rioJeuBVSqqhWFSpQe1r3JnJUF5KZSZbTMT25p2NgsYFSwRXfaw8sbBnTsScvF",
  "key5": "Mt8yUc3kqHqapsAKmPUtb3MLytzbRXsM3MDYWE8CM8eeo3x7nPn1dDtzJWcA4afncTZgwbn79EfmMMNtPHgEkRa",
  "key6": "5bHd5zUtpFrqLvk7cRaBChKTCVhx4fzfAxWXkCk6yKXrS1k5tjfhCJfD42zAxzguRFeCuZEU3VwSVfkjSNodMSiP",
  "key7": "8v1RJ2CGCqBBLZQCPwwQKYAnsCiQTpEMW2DEcP3JW2oZvYy7zy7xpd6Zt9srXAqq2Ku8zMwggLJjTbbC9YMScjJ",
  "key8": "pkJQYpFg4Swt787tuf8wjiXn5Tw9sr9MgwsnNvFPJQLwHUdpXvQ31HgAA9hZWU9NAbMaSc5GkpJhxjJMeaEk1ny",
  "key9": "2rr6MAqdRg6222yHFWWvPoEegbsCpKv2PNaQrNXkbzMYz7tpcDU6PvyvthdRMEDqWJu1LrZ94KBCHmXV9cChXaMw",
  "key10": "5kTArW9n7rHyvzcAi1h1CUt241qGZejQp9bJMeeoaFSqZmvZ91JKagQGSmmvkQnFa9SkUyD3pumSfQW1q5RTeaF5",
  "key11": "P7XW4xzLxu5CWk4BTwdt9tr8zctdK4RUrMdyagAE5HUK2Nkvr7gxhMTjLsbTKfnufgiZRevZRHZAmxkKqLj4bwJ",
  "key12": "2SZsB99tSCzXt3ZTVL7ARjnictCDLcCMyRdF5arEXc78tBXg9WuHCAW12w4VkFs8QgS44dSWyUorYgRErNhwUmx",
  "key13": "aVgkMsykHXBMqv6aKAxGEhG6BzRxAnLR4dDTi9iuw4SqTw4vgqYyrPtHAx6egBy97By2z1YkwsHzaJwpZUTm2oG",
  "key14": "36Dg3M9CwEzwAqr9i16FkvAyTD5YTz5oTQ8zpxfBNmTKSrGEap9cDGtkJSEHpiHGt1ZwWYv6recxAvptYZhuuXLs",
  "key15": "4SeDugSEbcUfC64jTQ7rgPvSDrSHPUUW6tWJszRteCQWhHQTyD9w2Jjo7q4eYK4rUmp8eg4afXymWXBfo54mgoQk",
  "key16": "4RDf1aJrbLz71VqSsagg4ymem38GwizqgadvvfoKg1VRBVnFQz6B7fPQLSMZ9EP76wxhbCqunh7BYZjwbumSkrkb",
  "key17": "5ZeZzmfSRkYJ7zkEfNxKqvkhXPFjhacpqSMGPcsAwqfmvkuogQoB2f7qxpTsunWSH4YoQULU5A9pde5wzonQUeQo",
  "key18": "44w9t5cpnJUH9Vswv4eRLqsu6j3uLqdKDH8JtjDpbQo6xj9spSorVw2yyfQht3MvUr9xnWrmEZpHRqna8NBNQHE3",
  "key19": "5r9sDUKEf7hJzE8PvxX8ukL9hB3tLZNZYk4mDFYJMwm9dvuttGUjuXn9rAGzk7oWJXoW8N6eaQDAeK9x6yNY3w73",
  "key20": "9aFd2ot3TsyCrQ7mKdeKRQzk4VY86D48Nk6ehb9gBCuB2Bk1CWa9XpUfqYREHHPCS7rT6PkYXtxKFNLvyTg35gy",
  "key21": "4YumpEnbmzrMrvuzX4VRAuRwpEXDBHBcocKmgEiyLU2inbnSNHzCsmTvB2iZYAZ3B8o3KjkRfENZuWHH75KvaRk3",
  "key22": "4hm3YxLYWZBfQJ27mQesvHyKcsFcYywfxA87Z2Sebet9r2U9SmTHQ2p3Yx1azNieM3t3XjCHRALLubAcZQ3uDFV1",
  "key23": "2a3WSouREHmv3j5eL5nxdVJLAf4iqaunqUUKNw1nzgxWvC1juK94Pya3zUWQ3bZgKAB2FYjYQrv1TbyeU9xPicaP",
  "key24": "5T776Zy81J7vi8wLey3qaXdC6W8ibMS22Fnv9RAxBzYUgqH5RZbCXmp2PxBWn9UkbA4tf6mzKAaYscufbKLLTWWz",
  "key25": "irhkxnFsEusxyhyvyrUBu9PpgnbJP5WfzonTn3LqgwrUwwtmGBibbhHi6WFyaAmcB9F2mMDeR3EHMPHJUx1b4uR",
  "key26": "2UQ8WgCY9CsAZEzE4TiLYs5FN66GqTBUxjZ7jahQmphzqyGBNKtRrqmvqGgEtV9U4kF1sc4ce6d7VUTdrbqM4FMb",
  "key27": "2VXPvfNoF6gPRuyuGHSray3t6HcQ2k4kdrtsbv1pcFnNq68DLQtpt1tKgW9bLeVAMhiyy5CbWZ6pkAPhKGX1WrjS",
  "key28": "2EwhFa8JX2C4c4Qhbcz7g1jRYVJbp4DAcjGFJGSeiccg9tf8g3MV2fUvsDdhJPrzbnePCvw6AcWPSVfiq88ibzT1",
  "key29": "5akT141ggHG1uGoAADN8jmkrGWD6Z1qQZjr83tHYjiJBPFsDKJwh4zefYPFLGtxMxG77L4LgyKdovxScjE3vknTA",
  "key30": "2FZgeSPBmBADAdpJjuwyv85MTTbx7U4FcwU2LFQRgakvVwJQoqiKfkiWmiBGrmB8scWtqmRmevxwVbbGczJML7WB",
  "key31": "5XR8K9FEinrGyaNDoe6cuF6EKoPi6BP4ATCyXBDuTcpUttGUMemuJToQKaHwHyUKN8vTL1RZemnWs88iuHaabWkd",
  "key32": "38HKyuab5zzN81D9eHVrZR3cMbmEmCq3Rb12cuNZMRHEWzzKPeyrgTBeQoYu1b5GryWXZrkwoCAuYAQTE8opK67U",
  "key33": "eKwtcX15r23R8Y6LX5UVpk81fFZQLoyVvyYkfRHN2v7Anqn4dJQUKzGgiRh7mr2xTFadHadBJVCPME4GzJ65HH9",
  "key34": "4LSW4xaG4Gri1poeoj7CrNpXB6S1gTFEAHff7gQbm2dny5KAZoyMBxKnDgCqNa7Sb7ZKRoxUoH6ffFx1X6bNej4Z",
  "key35": "2wbBWC9kavDhgByGUKTVSPqaKas7NZCifx3MGJDd7mff81BDgQAjEx5BeN9Nc6ucuKxG8evks3ofXCpuy9Yvm6VZ",
  "key36": "5sG9CMfmrwnriBMWTNaGZXx6d25LqnSwyj3KzLriLx5nFEkyUo79kqCLNh2znW7z79NNWUBxaUEsETPbi9bbZXp2",
  "key37": "2QA3qHCQd9Edw9TDFzXbu3ds9VAPhNtYYs3EQEs7VEFVFHAcszp6PUBJjUZhkgAmLgcFAd69CJAPAfawEixAv4HL"
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
