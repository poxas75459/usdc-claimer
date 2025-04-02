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
    "2xjSgd4bTy3LaegtB9ibwydKE1LYpSw6tF7Ca3AP2HYLfhSzNUkFTAZaw7qB26JheQkjbwxX38eK6yCbXXZzuTjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDVsENPvcAijY9zAEdRRE6FNaYGnsBkbxk7JwZPf5ZiWg7ayXZEBqBt1FLWieqrKNc3Rc3ERmfCidgWzuDGjA7V",
  "key1": "22SXgfVnotxj1g9qnS8E8DXmx321DMptATmVuTnN7PhFTTzigiHQMsk28ZvZ44WVXFCZM2gLL2VYcKn7prUaVVKr",
  "key2": "43DywxQQsTyBLFeXoYHEpRe1ttvUHnDzfRb1zmD9gNErwKGJ8yLtD8QHcaWkXms1qtErzErL7PvbBjzWDpaowhen",
  "key3": "49C89vu1LwZj1abADejW2PKGJsmncufomWm8PQURFePcGsAm2Eo9R8JKZKcQmmCRt1JKi9Uno3B6dmohrwb5LT7m",
  "key4": "4mncGeKZHfD7bhCqUPs9Cqchj7z6nWvLUnPh58bbhfZC4HDQ7Hw4wbivBkcqsWiQXfhBTYqwShVAcVCgTimyJViZ",
  "key5": "LEewAru5R9seHA5xqJjUqGK6ZTMBb65hyhgi5JEQemRzBW3igq4PUFjorCoPqPWbCxeEuBeVD56gehyJxbyoC2H",
  "key6": "4WUzFVhRrQoCzA6cU9LAwESRCM2UL6sDcD5WLUFgCo8BSu8D7eokt6tuDNEbK5vuZ5MYwKMJ34bGt75YwKjPyQ4w",
  "key7": "4ig2pryS9oF2S2QbGth686z5dHEonZNFFsxAg6ANzpTAyeoPkUB5TZbGAfdVcAsvgQJ1jk9gz4uxZEWRrmxyMQu1",
  "key8": "4vYUPYDvCvHLjafoiVmPxJXrFWefXk4iDwSEhpvJiavVKGDyssHPnXeQ3qhiVX8YCPKozc65C49SE4GSaVQViah8",
  "key9": "62NhqQYYrXDUiK5PLM2VUErBrSS52roC479pUCLScsV4ssxbM1zMprjTrRPkA53uiqFR7Pune5b2aPFHaRP9HsDj",
  "key10": "2XRvdTuoTFD8mdBYdtQzpHrS8caCMacsRayN8W5TfS67gyMFZc75nZTGZ8RrNMqtpykSoHsEN2YBA4d49roDNKdt",
  "key11": "D945ZHfjxdqfYB9befkhyy78oaL5P36HHao94srU1jCcdahBZbNKgWyA44Hiipixmbkk9CtqswQzut7nt7UH1wY",
  "key12": "ZxScRTiV3wny2xByhYNCuB9NF1nrKzkvgbb99VMHXQAYCc66db9BKNBsiKPgAjTaEACB3CQxnyGsxa3ZQkcF4eE",
  "key13": "2sVLY2TyoiviyVhforhagob8cyEJxJc7FkkKEWQ6nGDfDFhFosEtp6yA6dmYJUtePZqh1uxuP6hPta1ZWoArz3PM",
  "key14": "4L9LGdkSy2RphRiX4iEWkUmURqcnHiBMfb5fm261uNRKFWkwhsDEUx6XhtEwvgCscAeJaz3kdq3wQYD5o2w3hwTy",
  "key15": "Yt46LM7RzDJMSUnzqpPsZyprS5AEZCxuqHvnDUeR2eqBfY5WjbMsh5vzDoSRC82Yd3dzgwPNxREKmAwXpqC6hBZ",
  "key16": "qxFN2ojrG5HtFf9dWyubr6Smf7pcVLcfRMQLUuKPnCCP4VBp8HvbvEyVERSbLziddHYY5SJuPFybiywP3CS439Q",
  "key17": "3ckg5XNsSvicwtfvvxSRNuGT2EChEL4Tvb2FJ33zKQoGsHWy6RnN6FFr4nefhbna2k66kybowxSjZq3dUrhE2Kv2",
  "key18": "4uPf8V9qFDAivYhhNKbBEfG4U3SPAH18ZTgc1mhnotCHbuExkPxBw7QH6QtFShT57HLsupt6vfH3iSNpZ7zCoFvr",
  "key19": "ENgYKrogQ5DVFFdUFxvn49c9C6BwJjeJtTfQ5dtv31GzCk813PqWr39Q3T6EDSpyQnEBc6mx2GuQSk6wM3FTwuR",
  "key20": "2XxSnCSgqjXgfDmVGLeUBKW1LZeUJiZ8dypdqDkQgL9WdaKcW7CE3nTc9u5bcyqhSTh3h2x65s8R9K8oWKYpTXNk",
  "key21": "VEpJHbXBMv15ktd8eFZvMVjH3mCiwAX4xa6LvfHi9Mgxo7kLvtwiEVFUq3Lt6hPP4wvujyJ5CkssCqfqMWJdnGT",
  "key22": "4bgdsoavtjzgRauHT7scDntVLHKURgWXaN3SFbD863TxPupda2oQzGDy1uxXGcaSwm6GGNpGYwNHzWL81AVUNLWP",
  "key23": "3fA83XTt4tBPxJxX8xCUYCoDi5KSDwgApyhxRZkoQeFg7mUbNHoX9r4WiRkKzdmMHKfomVAyX9Zb8iGVTG1BTDFC",
  "key24": "55DqK5q4qh4asYgKknufKD1HC6THrSmFTVstdzSdrJE1KbGH3uKT6P9eD4HDin7Qk2GjzjtvdNprc8RSTrakRjdD",
  "key25": "67BUUV6D4SENPCLvB4yoGEZHJgoYRMvk4D1ii3J4BY3rXEZXGvv6p6bqTe5S9BDD56T5i3TGQr4HzSMBd1Vhum2z",
  "key26": "5s5i8DGRE4gXmVCbCAp4ULWky8PGsqDwn4xLFhxLb23KzEEyjXngU5BE5tsB8Xv5oncz8gQsjqVJWn4w4cL2QNNQ",
  "key27": "3xnv9i3C2SM6gLaRKW3ndHFtHykVaTKktviSU7zmXfpJULvKRgMoZ57QvT2pdgSTnxhrKr5XvCz5b1dhNhTUp5mn",
  "key28": "2mQaPnjjguCWLH7pwST5JceeR3aLtnRw5Hs5Vo7ejkjf1aAH67e8dJZDw3zhMmS5eyYujiEvAKhUK4oFe9TbsVAa",
  "key29": "5GVUCjdY9GWDYJJGm5M2MMhpiFCTzJeiXDuruVMHRsMrzYfUfDTYp63fpfDmV9xLSDyp8GhoBvbbY4dUfwy53sqP",
  "key30": "34qW4ZAxR918qsHDvytHNYFZ1F6FSwYav5NCQm4Wx6peGPS7cAgA3uTXMh9Dp3vnF53TEUkEDkfHUoUBmw61dPRU",
  "key31": "23XsyM6ge15mvcpvoFbyP6uxhKMNiY7zXVrB9MwfyfDQYbPNjzwBn7FyTHaHNUMrkTKb5XY69sHm7CDNb4VZq7Cz",
  "key32": "43Z4mcR8F9CFrwZGzwLvwq4S7GmMMRd9tszKUM4B8fz8KdcY9aLt1msynJf3jNP1f7FMTgRkmjcgW36CG5wCj1Xy",
  "key33": "4VGtVk1ix95ZTZ9CDX8XofDGjwxAebV9vBUZMZJoQ6xxczHS7aVCHG41TFZRqARG2F2gvjDi5T6TE9sxFoi6vxPD",
  "key34": "3vH1JTqWUTGvKHX8Pf7GiDLToYd6yhxeGxGnEjUpgXVBVtcWX6ME7rwheGB1kERfYfgKCD7VVukWkUthdQcDMkCT",
  "key35": "dfnyLU66D5neSAinjsG8WKDTRdrXM7sapZCvx13ee2eSPEEsoMkXbsFYrP6xaf4EK8qvwDm4XEQ34vuAw1NiT84",
  "key36": "4uPBLiN7rtNT599JmgQ5i4mejf2CEpUZ9pZoTFCLezr9uRLnT9pWuHWizBLpSYg1UWUQvAS3NxMjHYn5JLitR8Xp",
  "key37": "42XLcrcnHjSFHTvqpacXrZeotMLP3f7doy5tCNsSZgqoYNvXBDX7xq19w5rZnmrYrWuENy6YMaxybSUtujPCtxBG"
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
