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
    "5zHjLfEyu4TCXHXmEGpW3hEbZpvJekroeMcrCkRon8iFX9SscLH8P2RjiLZnbq5zDwmc5K5pV8R3oq8qay4NUa1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mY4UwH4gA82CuUdhCsXkYJkxuY2CYnANzMXZVo2VKmH4xDEa57CVW4b42H1z7GKssBbAfLsuc1ZDwMjxL7EzSBk",
  "key1": "42xQrvaUqtvAJELNpTmzsnuyDXjcK2Db8J3NhD1C1vR6zd4eGBGoGRW8vLd5RGGfC3a7JQzFzv9yeWruRHgSfbkv",
  "key2": "2QxrivNpUBauLFxMiefkgZF3cLFk1RvCZx83KmxMBntJVqvzDaYFkSDgdX86DpbUzVWdU3jTQXA2QGK34E5gpQ9d",
  "key3": "37NZc1TfbNzDYLMqp2pGEpQQy8SEorwCbAuruNa8a1ci49Hp6qJ5KTQJJiCYFcSSQURJwicjaxjK8ybkNHm5vTU7",
  "key4": "5ANBgJzx8Y8ssboZ3buoo9mw6PXXSD6apnk4TpTHddRVcFAZRwMmcedfJGUs1nua8HZG7RywtKjDHNBf3nzUomxd",
  "key5": "5g3Ai91rUFmSbwWUhkcVLzZeSEEs2vQKAHZVqcEuXVwdV4F6giM4uFjGbB5FmVXpc8vFkxtHEjAnfRj1dmeVrqgk",
  "key6": "3waUV6RbBEQD1BHHXNgUtaqNUK9VJkiu2sjnXto9ebe3Aoj28UbMAGdpfnnef8ihhRgUTEVipUUtMGjFYctt4nef",
  "key7": "3SatW4JASn2fH1XRd14pAWTb6VX5kKq7oVQX6QdNiY6fEUCyADos2R2fs4VRUdHvnsAJZfxjytzG28C6mvfgo9hb",
  "key8": "3bX6ceXQJHwgyL24waE585wHCWfWtitd1JHQ7MxvDq6NGJ8rkgQtU1Dnr2V2YMVVixWUDN9Lnka9Pb7oiAVMQGj4",
  "key9": "gDovQXgHQrugHUgA6zg1hmGXJCjD7h1pbWEoxEnrQVkEbF96e26pPxf3NSnESGfm3xb2MkBy5HbfGZX9pmkBbso",
  "key10": "5smB3hHvCdYtLhL8H9CqgnGahMHhTt8fG8Zw3H8GZ2EBHrepuDRCGTkmv7Ew2hmosdDgPexW6ZX5NHRuSVXcBkot",
  "key11": "4rNbz8d5rPx7J6egyo8y5VrYytLU7nweJ8nwArCdm4qPnQ1pYGmSc6mRKDK5bBPkc9YABNhdEr3qYWyS4F5AW9AC",
  "key12": "2TTFL9hnbPFGtGAKA97S39iCXk1xJKpYVwg9LMj63S3q5gNdv6dbapH4NLQ2N6BPeFw1s7gTNRmdFcbDmqwWjpRW",
  "key13": "5zMUTRoNAV74i8hrytxrkcVhGv9uxASjopX9rD1WVrzo6BeRT9fYbMmtQqvV71KKDz7heixp7MTPZ9EbJx7v1rrg",
  "key14": "47N8fXqg2hz5hTT6JhpyoxKxDnmmGVUaYo7HNowtF7Af7HvgVqWLozE7jauYB2TaMfGZNhz8np4PefjA1H6SHf9k",
  "key15": "5ftRqp2Xv8wDbFCYDrbySetkrJSgJqUh7WriBYmSLLZgbuHNhN7ZwMe3jXfPUoDjdSFbbMqdCMj3vYTNfnmRx5c2",
  "key16": "TNFftrPmrsnvViqYQLUJ9xnyg9ryV2FjeYv6m36orxVwpZvnKpvnhC1hG1Sye9rsrgu6sG4ewVzTeiDzpZRXhxz",
  "key17": "4RoR5zuEoNQuYtfitio3zjDzvgkNFn46BHtQY8dhPAg57ECAdPRG149xhCDY5skqH521peqGSie6KBt8PSbqsbqF",
  "key18": "nnjhQm7uB3yYT1sUYzJnS6iV4JYwSCFf86tLbnZMvL1iFoaTUDKv2tABqJPZYRb9CUgVr2J6VckWmCpVEav4h9E",
  "key19": "3BSFwAiFqQRsz5pSYEBEXAYwbmJNWuBSnhZahnRwFyXngVbgo49JXLL5wQqrHd8ZzojCworo4Qx6yocg9mgqKMVY",
  "key20": "2ecf7pN9XP4eNWbt9wZrKNPJqwFfoFuCxmHsE5tEGcRuKJsZUmQprg154v1Ze5rAj3qtSzkhCH3xpnuUJRJ8KUgY",
  "key21": "5MGTMyTYX93JgTdoJGcATC5q6jWS7yG7btJp7FPy2bVbAdjQfwgFzj1S5XCx1Lg3KiP2s8WCj6RwCanyXbEPnirp",
  "key22": "2tmN7ZKxzQNCgdsXZoxvPbreaGGWZKMbudY2AU1dcpL3AzQw6yzufegZyuRiTQXQMGikQcGfHSkbgbaFH1VZPNE",
  "key23": "5YscHes33LiHJY9smSxEhfCy6wj4nE7odRSb4cKFfbdn3W1Vhv93CzMsRxJEBo5i4yLqaQQ9FvBSZrPWakYSbnyV",
  "key24": "5HvXYS6XUjfqBaVvRzs9ACrHCfLTNZXm6Hanv66n9beJJQwDtXFqw5RVf1RWqXfg2n3qgJzJzzcLteTntgTVpRPG",
  "key25": "4YjNmsiVZEdsPw8F5Pw78YDSh8x53ywPRBk23FNxC9cbLRhG95gELW9uH2B9DNg2jYMvnonvf1Y6Z9M6CAnMXTu9",
  "key26": "4MgyoU5ad4Zp7rcwULjEMEWwwiwnehPdUST2ksvr8ZpKqqotW85yPQQAWqUkuim6TjFibgEsgQ3wEUkkh4ig14zq",
  "key27": "Jyju9ak5EKZoAUTceEYceBoJuqPAXpbCGACQKC3KsMyXtrsDGWKQQgkmqnqDfxBN8pRKJvzbyMJYU9sGvzQKb4a",
  "key28": "2Qt7LMfctEJSxTDpTqX4c9BXA6ccK5cHzAoBfPhU3FcEWrFnhH5kUBpp9nP74H2Vm666sgqVszhYfQwMFi1eMBw1",
  "key29": "o5meK14DEKfEqJaijzcT8VaDiRUpEUS91d4FgfQ9zHYUYBbU67gy1RLeFCHnfdxtQxEeqUfXRxgFt1r8qTETDMD",
  "key30": "3iEU4xyxP8R7qS1vcJzTsbJiffMZK5zP8DQYo7Uvv7t3i5nFraE41Kva18CwEbjoM8N9uMK1Zr3mvU74U9Zp4RaC",
  "key31": "YzSzeYz7cEnQK2Uufi6SNqMi8ZFir5tKsi43yYeWBiVfQni1hwwci8nhvfUrzhQeE5Le9LVQsmRhB7XBRx6wsZE",
  "key32": "4aStQwpfgGUs7HKLB6JetXjZb9Lj189ZCnWDivyVasheEaHACFw6Q9BALJNeGUrEhePkC6hQFhcJxT37mWS38NZb",
  "key33": "3g34TthHdLZmvkxa2rKL67F5qMCtmhZ8fU5QUA7wK1Rg6gH4komkXRud7oCqCZ28sKAs5Q6xLweZuG51SHSN17Fx",
  "key34": "5fnHJHtpoFHPdB3hFmD4CDvXSy2hSzzTvgPmczzvU62bK4J1ctzVigSKwksgXevXhSs2ns5LfXVEHeXvQThf6iEY",
  "key35": "3C3QuZL1S1y59MLegzz45XtNWNtLswm8HA1Xv9jCKHBo7XnqXqM53hnoJHF9TyHJyWAjs33WHxvmMaD3pMfM9YKA",
  "key36": "5316MEap57yCDryBCSaLR75dhPPuvbVfCoEuT2juYWJ421qUeum4vuBcKeu3z1wHfDNwKuUquFNep4PjXmLH9vd9",
  "key37": "kA31tN93zeMxSkSCpoVgSFa8TfJWAqxjvL3gHkiTNQv3ThYVZpaBgMA65N7WfckT14zbtZxeFPoQVra1pFxgwCP",
  "key38": "fZK9XTcSdo3MrtVMPFYSHJvW66AXtEei6mHvvpMMWn5zJXRdVUu3vtjxDb6386DSnM2HHcbUjMG7yFuTMF2FNwz",
  "key39": "3EBbi6piQitgagLezWTVZ1xX9N1JgQ2jW4E8UfETDB541d9nQwHgU1517tg4KXLjqUXfsZN8qrETrpnFrTUq5JMh",
  "key40": "4ed8H2b4vMTUJpiibWgRCxpBa3KcjmRWJr8nQz5fLdqP3XvFsNWSSTn1RQrkt39saWaph89uuCWWHoXPT7GDWYkN"
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
