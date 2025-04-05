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
    "9JKxg8pc6PFN3NMkVQJ3osYVXT79V16tEdTADzohwQzsNk5fPKthsULpFeCQfMpeDnspPu2inek2WbY3nPRix2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQ7BQ9Lw8mEAJtsFi23gdWWqDuKEfDq8AX9Msp5Af3mAicYxxeNhYFrh46ybFJvRYX6nyw3vZMEBMyXnZpjyXTt",
  "key1": "4kqVuQtqeuoRD2VUWCdCS2n3RyRnU3Fjfv6EHwYUaznK7Uo9rf1Ggbnyn3jq8mbGCxcZ5t36Dv45qpCtE6Mzb23b",
  "key2": "5WBtz3d1U5wHcXcpvpvygVQEYcjpSU5A9vydw1zNhbGndxghv5zi1zsyyptbjhjPbWWBCA6XvEEPuzK1rUhXaPwb",
  "key3": "3gJhH3d7Cy1aG4psn9huLWekTDwLXP6DbNATio7FniVjBjxhUu7qRS8gnBqdyLgyhnpJMCjV2wuLhymUYAT5X2Xk",
  "key4": "2893gUWTzQrZ5NSNMUHBQTBNeBmobFBfkdpV6QG7XQgrrgVZZyHCXusEBx2vsCAjFL598B1or7GXUkEdRaUnF2wx",
  "key5": "3DhorhFeDuE6MDoooJSHP3SrH3jcRM3UMpDB1MMwZPF4SKCAVDSXcqszCnuNSZpi8wdTbwGnqJbdVbvKzZBB7HVL",
  "key6": "5mSeaEc3KYgu3GkzUSBq56zhpjfez8equo4EXfoiWx687QDcQ1dj33jTjXEtdkvyNWZ3PVUQN3XjyVmReatVDYBf",
  "key7": "5trzFUzLzh1K82cjipHHp8f99NXhbhDuz67HFDqjS4zxyFPtcdW2QPquLXaMWsAYzT6rDe67c9djWxzZuQQnhzEd",
  "key8": "3ctZCgGEdypLWzupsxWVbs7sAAkL9TZHQohk1txoDFmQxcaFWCBJUqVMxb1zJPXE3qS5D94yVSQpUDuS8wks4KFj",
  "key9": "4tNZ537uEqZRPtrSBKLamGEncgjr8v6UqH23cVZL5yoUWGTrLgLYjXmSEyVwLMDxveVwoaHXgk9CNVWtGCfySjK",
  "key10": "4YbgWrMMyTAyHj39eR6H1QQstdTrr3JLQrDZgCH6s6hBNhGmcTrjMorkMzix8pEL5S8pPH9Fcc7txxd4juLHyec",
  "key11": "37CVg5axtQYD6aotpLEB9HDQGrtWWecdNCMMsjFiz2J6gCJ83ZVk1DkCyXYyFiCzD5nh8aHr2FYp8EvgvYhUy7Vk",
  "key12": "4AwKTn2ztDsDKU89KBRe9vZFdFRWQ4JaQVnoVqogfJFn4hb6DuMPZTuXYE7rns82yybwLC4AcEtoY3VtAAkPzicX",
  "key13": "3YGo6tqZBsoKH26f6Kujg4BFJgkUns5zECCsBWmQ7dqvTZngbXSF7x6C5MFJ8sPKyaXR98MRJfPAtDkQR27ypY3o",
  "key14": "CrFUpNy2YnjBH6a6GEZV6oUWSnEVnmpfcAgQnVG517k2QESLJHy18oF3vLpc3viaWMhAPAmzDE5zfQKUkJbJ1PH",
  "key15": "3YQqJwUN4JFUaX4XGyYgpC6qk8cfp3pSCvx2ZPQjzgvWoDazogcPP5KitRsYUVLXGX3CLf6AtjJuDuE6pTRJhmQP",
  "key16": "5i3m2MCnGVDhjMEhZS73DGc9dSHF15Dw3t5jToqs6SM7cF8uPBiGA6QSR5J9NzJLE4HXfCwnj6VaSk6Ve8bB4fYW",
  "key17": "2jLFQsBfA3J5FCgzVJbBNMqMFoKv7Bk4uJfCQaY33wsTxYNjd3Ypou9QPM2xJHe1jDkavAeyMhvhxpHWYn3zMnaw",
  "key18": "56ystK7HHiWNrt1XFEkNVQ1J2P6M2eez9JTTLxRNUopjrRggS7CogXZ3Z1MuwWquWsqeFnNz8pw4VwLJcoho2TfW",
  "key19": "4VSWPZWBDXSVu1ZvyTMVtktTuTofWd4gRpmTMNBw8Z4dVkAfHiiQdRkkXNAdJUiesZ3ykzGp4vqQoAwp8ZULhnKu",
  "key20": "ruxwtAt8PDJFbEBqPzdT1k4uFmcAsmHZFFNFmd5jwhmz5WesMfydQdQWrxpU6wx7Non3sBGBGAitxLEX4QVWLau",
  "key21": "6zhiyYoP3bNeRg6L9EnXdJCx2TZAJsf1YN8CtdDZx8isVirZdQBeD8NcxSBmzX3YBbgjgf7FpUYgAanpGf7b5wk",
  "key22": "2rRZFG76krPBNqePuqSpwPj176b4eJZF63A9CqKDdKTTJ5PgCQDnpB5hrC7x516Pz9aM147Zjeos9cEB71ZATVMa",
  "key23": "3b9h42CBYtcTFdywxpJQL5qAhm2Qof5geHKEQGsM8V4dL7Qzs7YfWcoaqV3GwXcoN3Tgp9zohaQzzzmd2Rr5iRaN",
  "key24": "4EdbS7HkA3PbcGurSWKJy9bPzY2vAsdsa7EnEBQfwhiadJhQQbd3euHcsVyKG2moaKJ8ru8tStDYJxStUVo1ZPPp",
  "key25": "2wg7yqVNLXssjd1nRsfrgtQhwzKkt8rFAW5nHp9DMdkiX9SPBvx9ZLNFgcCrAyyofgS2vbF2cbaDJ3aPnDUbwWV2",
  "key26": "4VW6zmkfUDrh35Qccp3FsvEnypLuSjw7FZTyGVoj31TKqHBJDV4d4FaBKEEZKvongHSPkm8baK8rg7RLk6gbxjkv",
  "key27": "5k3idQJnaV7Ny7NGQ4sMvxxwkBn6LqRiWELtaw7R2ug3gQNxPP9ithx9Jw9Za6baT5bN81pbULmyPmJExi4fSrgQ",
  "key28": "2eiqmgedYJMQZUJPDDU5QBYsi3EFiWbFTzqCKakedrLxDPQERcCYr1DJvdJk6NaEmrT2An219keeQYoBaABDjsDF",
  "key29": "5j6dvyeXKF6K7ZaLew5hY2sEiKrvhfcdGnrUC5iDWpAYGtft7je4FbJD3xNW8qCuruE6NX9LD13YPJYLzvE3YFNV",
  "key30": "2auDhstF9XD8eqUQALhRYXd2ZPhZYUAKFRQp9KfrNNJuUJX2qoZGaxoAZwJmqQpU19Bzk5BTJWn5ooXoY5Piebak",
  "key31": "2Tynz6rS6pMWnGzHKowvZ1MVQjGSjXRmB6qDSV9C6vbrZmJGDqDF16vLuX53J5G6bp2rPhZywnGKREtmfGrrz3E7",
  "key32": "3pGSEF1fYLUiJC5EYGdYb8AGVC61Nnis3T7uGEZPTCg3MibrcxSHVPoiQ5S3snC3o2YK5JmM64tKB6de9RESmTG4",
  "key33": "4gs6vd2B9CTiUaUUUqWwfiCn9N4DyMNy1hHg1PJdP94YqtqU41fpAz2FgArPhKe6CXHbnqXEZujjrjjMshCWA765",
  "key34": "4NwEySg6TaDTksr2sfjQJ3Qo4rY6WmZt9rNbw25zuHufmcttkzcfPm2446H2yG8U87cbynpYJ9daAwW96A6GiGRK",
  "key35": "CZEwNjvrt9GCpHRK6yL4NgrxGGy4gMEmM4FYdEw9VyWwzSEMr2cBaCR3F6LXVHUwnJMH3ZCoXVAhp6x6TNBDcmi",
  "key36": "5cUbps6Pt73TJTyhNDZeMG8fNETTbCuAanX9734vhi7VXjcrj2AEVK6ffyTooJ4tMsQ1tE4skWp6ym8PyXNJKBBm",
  "key37": "LWDaQ5BKfWXQeDz4QyW7DwoAxsCLtdCZBzFT1nU7f94MKo9bVj7GLWtZB6GRECHdphCoBGANJWwJ1G7gJiTdFLx",
  "key38": "29Jzn2J9UjQfMeJXouNB5jU78dpqW5xWCwmcwSL5DP2r77EfnbQJGpUyobqY4Ymabvm2MtrRhFXX1acbSxPZ8jWo",
  "key39": "21kpHvchuV5YCTtYu6YaqTS9F967bDc6HQtrxvEpoZ42KA1z5qTeRnFh6t3aZDjbSgLL1QntCTmMuURxt1Qc5wpu",
  "key40": "5Wne948pRcrBvGcq9ATprsLQaF5pSMB5CiEAryg6r3nuZ7SSErBrWfc2yukpLSsGwUrsAxLu1nQferPJWmAKkE8i",
  "key41": "28wXpx83f9a8qkEbS9WLkx2rpeCkHVtNRvMefDbr9xqzW3MhQyPC887oqyjzaSaSq6k11eGCw9yDAVBRHAqSDwWP",
  "key42": "2SuFBMBdnAZiUMh3KRm5c86vxrLoxEGxq4RkWHa9EwwVSNHvocAKG9AdyyvuA3STfuE7rQdHY53qZjyKZdXXsse2",
  "key43": "5DEouDZ675NCqGVKYbgZQ4JorHMqdDUi3d9LcCpARVLhhNDhn7At43XKRRXQjztouXtykvtWbAWDrEH16biuPBqW",
  "key44": "fZSo6qtGS1syAANQKhAGGZwVfGs56VLKRwhyhVaf1LoDzmcGy3DeFQoeUuoAuZfLCC9SZKhXoBi8FJ4NrFegsyi",
  "key45": "2eht5nkmg5K7iJm4Lg5HS9YdVycRUAsu33vvfHphHw311MJnYkbgMydZn3NbrzPAHY9DDhnoCZ5yyyK1UeGe2C4n",
  "key46": "2oXvqnxsMfTAogYd2hFSJArjSDfTZ6bMx5s7XapqdkgbqUJ1xR22rstFpAoC9TdaiV1YsBYwrVezPbrvyiaegRQh",
  "key47": "3qHbuzQ9hgGfBpX3JdkXbJTXtGtrj8nMnTfqMut9XfDtXbgVnxyYX5EuALu9AXxkrZnRbL2kYmyBpiTeZshRYS3n",
  "key48": "JxX8oapq2HbFBSHXUbZPcGmzWQsy8wZikrdddUxKvAFvAPJs1LshnBNBKTupvA7vCSov1azdWwFUteUMMfHgJ6p"
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
