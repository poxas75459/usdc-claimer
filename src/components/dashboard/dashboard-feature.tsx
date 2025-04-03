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
    "YMQNR9JY6cz8papjMWfDgC2bFp9EyxsDcAyMYar1nfaz46R7Fdp6FttLDB7tuqKVh6Fa4N9rVSi1gSxAJmpC5my"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPr8DakH2cRf9Tq2yn6yAs6JsHrUFtDRDya9zgCF897dZo7myTgfz3PrWC59e9cEPqzZpqy8iTRa4oq6dd1oVeM",
  "key1": "zo3QMdsm3VheQ1Co6J82cpWzLBui3Np5drgp3gYu1uM1QihUJecfB7y1FttpGhqoQ3PNFwHBYXhVftps8ZkXPH4",
  "key2": "4FGPQ2uz5NB8QMwEbR7i7uQpfmFNKwiVpbqujnGgiLQYxEoPc3d1R2uUL5HYqSXayHKVQ13gdNMmyam8UAWrvni7",
  "key3": "4hdWEZxf4fc3bUDUeGcX3joCJN1ohD5hjWUwetVrzctZ9MywHGERsVTTL2qtEkxvZ6LhHhv1n8oMux5T1aXp6W3R",
  "key4": "3vuAcodJC9CuYEdZ2K3sRFYuK4sWqFtc5NJ4eGuH8HK7hzmSxYDrreTAgQoaJ2xbgqonPkkJ9derb9thSB938PtD",
  "key5": "cj6mGRYQriGEH8hEYxuDZBbLg8oiwZrhTNTVkbyudn3UcsUEA1PXWwkoCrqGmeYwWScp3bYdwPmr6WzHhg3bbZv",
  "key6": "2JMccPSQckgivPxZMa3DiXe9hSWv4QBatAYeabQ4LnZyQXKLHTTxFN7JP5CdgvAyKqUKi4GiE4KBMjCPaTnzyMi9",
  "key7": "nnHVrPe53svRixMMrbpmc7GKqXYvFpw35q8589HYzy5Aq7gMjUSY7wKvWF5cB2jDQKFizVVEc6xtqNJTgzwsVLK",
  "key8": "2QTkSAoKNYoiFCnmqxPwaUhDhaceJgarXeiG1tjrs23h11utDsYBF9KnLajH1v8RG1Az9J8oDZ1eVfUeJRtpJUnr",
  "key9": "4Y9H8qUYLtcA1YUYJmVi8KnB8tq3C7WYQnF8Cw91BvjTR4UmbTVeAWMVAu6UqddvMJNjjqyiuvDghXJyhddNett6",
  "key10": "34bYgipiTomh2JmkLQyDH3RpZ3d7pUyTWVnrbg5zxoaYK3joBF9U4Mg4Wkce37Qcio7kkDF3omL5Mk1Ug3WKWoHM",
  "key11": "4PpdcBLdrVNJRKqQMjgZZwYTpDguSyaXFZhpfUBoTWj5tLDeruoJQ5AQUD32bWWBbt5GgcL5iNjsoHPtVkFrojFB",
  "key12": "oTphiaq8FCf9DZwUhwhLX8KmYVwAaB66eXW61kLBoQ1bEC58GbcCt81Q2eTLcei2FGXhLsPu1Lv1gsZLXGRQqqH",
  "key13": "5xR3whQo8A2H8KW1GPiatozSBxEHY4y4keSqpfuPRUkgqMeMun2tYLfrHyvPzkc2kHd9JV9QsEAkJVjpaKb3DHKr",
  "key14": "2qt1qssgQQf1dZ8VxLYRhLBNy4q14JwSSyiYy1ijqJoYzpQ6SG4iozZmTS1JwXXCFMyZnrn8VX34AiFPRYGgGkPf",
  "key15": "3U3vrjUKADo3qtvauLhbnwaJk71jP2X7WYRxMfoj9iwUfaVCmTSUrEG81ttxsn7Sg4RSFNyjcTnv7ugYa4TCC2h2",
  "key16": "4cc4P51XZAfaLtsf7sHFphM9PtjQrydwak6wozkzsXdm1Zk4t81nUQZ6YYQxDc824MKaeLMwWZGMYHhcPhB4CrYm",
  "key17": "5iEN9a8CoopAGj8hZw7uzPm1MeC8Ls5wmTFvUDezZz2tfNpyUeU7fxkqbHGHCtg2Y4r69BYMbU2Hvhrm7WRRfBTc",
  "key18": "2aGbs9LZj6HbCvdRuFJAchJ1Hg19s1yK9Srrk1QnSD5QPLVQu1DZAr58GUyC5B4CK3TL4wGZcni66qxYsK16nKmo",
  "key19": "3eexEBrmDPm7K5ahpkdMyCZC1SF48xzft7NzCwpnthWz6BNaS7KUf6wm92tHPpM7zG8vXpkX3xHJfAxqgyXxXkAz",
  "key20": "5RZ9gLQtyYNSsKHULr4gG64FNPWYDAZKtFtYM1rkMjAcA7CGVSFynPY9wcaKxe5NPM4qXd2nzkursRtkFmPKJQpB",
  "key21": "47Wse4mGUJpV393aiZ2wnpkAaLiyYVK3TUi8TMX1qP7EBnD5tXnBPti4nKY95CpKF7C57nDWDHAwqyRs89CHkK4E",
  "key22": "U3hyjErN4A9DGLe9nwU2q5t69n9toCp9diPVj8NqoMSBCHBsXBcWMHY1bUBQA3JP2sfSpw8qrCDXfyNexL2PuVv",
  "key23": "63R5scFyDFcCR5QLsbLv93r1ghxNAD23UAj5VwTYjLD14DcK1vYrKroGrELEKz7mqdTqA3s6st3SduwvVnF8JgQw",
  "key24": "3eXK1hxeaG8m6AdKXTLx6dGM4yiKTMxFWN5F65X5pSgZX5XhMkVUNgX4Xdgj85fCTEk69FVtZv6eqhYWBCDeUepM",
  "key25": "449NK9J1g1P1EJXa6bDNydMqxMKVbXoAi2CQAoe1w8cu6H7NNMqrgDCUxdbSUwdmeVFhf8ouhXEy5SXKbzGiLdw2",
  "key26": "5U59atXCY1fq7pVpKEfNRCgdwkuHjyZUhLvHDvrkVaqVpBGE7mUfj2ncGkz8ScreAUvmL8jNZUgPcEHFrf9aW9Xm",
  "key27": "sDMCfLgNC37rHtHd73qYTmjkwrdEnXZqd8qbfWSBKWEHH1hNMUjvvWZaESNqmUiMpxF4d57bSqYpt8Ui8ebWK5k",
  "key28": "4wE8nteLiZC7P9CGGaTMrqb7rBiAY37zLkxHbkfbvFrd6XRsq4SoQPZ2E3smQgdeTjoGm4y8nweF6XaC2fLcrFCF",
  "key29": "uWoW5QuSn2uBPjBpedQYuYoQZs444hUSs4b1KptHTQpsz7iH5r5XRyfPxUZwrMoAQwrAytCY4xNGnKoEfAE8EXs",
  "key30": "oxERKEjf4BucphnEhM6tE8SCcW266ZMXWkymtaQrvE5YC2Zf2AfABoFmKuowAtQBtpUBgyqBWiLKf9VRiJRGeDd",
  "key31": "4itmkaCSu5C33Dc2FYsGsU3L7nz9Uv5ZafdjBfBroihcBnw7TvEGkUNJczDY3ZF66kywNgv1kMiv966gLEWpCZZW",
  "key32": "973kZhxuheejv5p8aksCnTJbWLWYCN5ZKo8BSzpq7qA6cpJAKLRrsJpXFMkuUibdZdmvibWaoDdgesEDWri4x2q",
  "key33": "5DW3MZF8wFg1QJ4Y1XAh1fvDzKhh3ZGzuDgwNKwD46oWDPTZyMBQbm9dGv5Xf91hcVyWsSFQe6JKQdToXKAqWfT5",
  "key34": "4FfRKfZVDKjNgViEFR1kxLrpxFrmCUW2HgquLGSbEqS3sqmyDu2S2d73PQRQ552uXxR4Wnr2oH7j8n5xLxgT3b7X",
  "key35": "4LehwTWunubNWyUsEDawVY3jgnCQdUJ4BGK5L1griVeKTkXFyJMu6T3CyzfUyjJsET7NJ74QGPacFsyTgwbM9KEk",
  "key36": "4SUUnrn6B1iU1LqpqbYTnscc6La82ApCku1CyuiQ9pHUXwe4yhrXzhf2ScNFCxBAMADQbYjbtYvZ1YTJqvCok3fJ",
  "key37": "3HKRuYCXfGipQHiXQQRWLtpEd13eLGbBrYXicUNkWZASKELpgE72Agx5oz9fes3uQJnUxtE4KYoG6UarrdWDz5gA",
  "key38": "oNBiXD3qt5rPUVAAV2XKMW39WNQ17gmjYdX4n1KXJa1WEgzCaHZXPJ8tgb5vecsZz1T6gsp1cqhhFTmPsEJgJNP",
  "key39": "32Kdo5gQoR96gkcZH1N7y6UmCrHANUuNFosAhCt9uaLM4sp6kiV9LrUF7yNFrphCCJFZbzt3T6xTLhvFf4oxrmBH",
  "key40": "3rPXoAoozAUUaBtoCE6ynxtrth6dXMYSijNB1Tz96jqRy7thmcfMYPxQzkqN49igXgkMa65bbkNC5u2hBpABeitm",
  "key41": "5nTaM8tacRShDydcVAnp5siXdULp8Q5KLruTqNqmr4h9GK4uLwHpXVKmpZVy38ba6j6fEfJi4N5osuamcpzHkHjA",
  "key42": "52XinE6RgrThrc8iNzbfaifhouC8rKn2VY4yMRrRcLu781kqz1tGkEy6HczEoKYMFmRd8KW1sBu1suri2SFRN8H",
  "key43": "2LwwQoMXiio5EPwJuv4DPSmwaFwhM31B1WvwHn9ZsfnC4ko17Vcy7RmGr2GJosaezU3qr4rueFRt5qaPFNnsaGdh",
  "key44": "4PyLWZt4zY9KaWpmJ6sUo76F8irWmF6r6bWCq82bjLVKpWpu3iBbi6h29T39VECS8rs3H4odctZCNjxa4udw4yZx",
  "key45": "VSCpjpfnCuf4kjS5hNRD8z8YdPo92oJjGAPZRfNzTEZDBtva4niC9To42ayj4iZPj4ko9L14VsiFWDoiuHdvs9x",
  "key46": "4Mw8wGkuvB61M3JUrQhWL7Lz3a6uH7Eserncnr5s1ivSrkzQtEfgUYiYnso6wr5FUENq1kveoDq4oEK8SKM6efXh",
  "key47": "47jsCK7mNBqka5z32z84sBS1duQSD5QKDNYGaCNg7C2AjxTf8vjXCQB7twBq6MpGvLQoEY4AUAMScBJz8srLQ23r"
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
