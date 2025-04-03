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
    "4xRx8S69x65f2tyn8Z82kmRg8soML95HJT3wnhMvE31CFdLnKBVcThwWYpdhT1eabTGCGBcXTKZRXRqWqPuHaHEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gT5esX74g5R4SnzsDoqf9gpYnQaCPeERQEnKj7ahWYxT6KRttp4phhcdZUEoBM9iDFGVvoxEyEAp8RHoXypKxvu",
  "key1": "5jgfK4PR3fpdgBuiMHDoYTQnRq68okVrkPNT23CHTirCokPKDmudWRCS9PB3npZmCB5SYasMwJByE6sAeGYuoy9e",
  "key2": "3uJXDUNW1eZPC7gt9LFUccbotMKKoSzftavLQsiJ8nPRNBvYyRDqzhkcfPY3cXv1f7putQTo1Uh3hXgkZRLjksUe",
  "key3": "5RedPkRNQdoFT5Av2WQzPyXHKXedHi5JFhUAohcVSy1EwDuC9RRGUrhQF9cH5hyVYBzczwirpNhWeaDmRQxsf6hS",
  "key4": "2ZaexNuFvmRFcWFaUtQj5uKaz11tVJaoXbJp7j9b3VgJr9SsyjR8xc4wqk4FL13rwY8aNnqUgSaQDL9DYTo31QYh",
  "key5": "2gx69UYaaHrqt46xk4NB66G3op121r5iRa7eyTqXJZtfXD4c5NvV2cXpPoLSkGxmgCaenmBuHsPGbkGKEdyzrvCe",
  "key6": "2J77UiFfR4pHGfkfmd2AdUTC3QTpJRSnu411orP8NikG5LXrATU5ygoSbF5C3pwHUDM5b6zEgeKcUNTn2Ch5fJtQ",
  "key7": "4rASpa6j2Tka2T1kwaeSkuckm5HKK7zvZRJYgA8K25Q6SC4mSjEdTtSsGRpfVkmNsCY4RoE2oa9KysuUkFACCaYy",
  "key8": "5DW2Dih5UcJoWFTsWqPEhediTxaJiBSvMCpKooVfh9WTNvK2QNEDNBMKHkmU4JgwKDLDbHjhubYvyLraGeBv3V2d",
  "key9": "25T6c3W8PtqQFrG2qjNe5TyC61C1RHYeBxVD87S8mQnvRBCmNyd3ZQhmcbgAKnzpWbTTVe8A2DC1r6Cxa4rvWy4j",
  "key10": "3ZvHcfh3kQFfcL9LFKDmyFULBSuQAWbFFhUDsTvmxfLrSP5hwj4roDzhm45KarfvXyDYWPe5WAFyFL2kVKbNBNwC",
  "key11": "4CTPmpYkKYs2Hkm9BV3S3QPpCykKGk64JoYiQyZBsFyo6HkRLohGGcrcJHAhSXEX4a3nRw8QnBqLp2z3soU548Pq",
  "key12": "38hvRj4eqrv3VpZRQrbvvf8ediYFaU188ZNfZP6FCnY4we9jhpBoCDvB24jtkAG2GiEH7QR69Wj1dPoYbBbn7WGU",
  "key13": "22VnfP8ia3XLjqawV4MUpHekbQKzx3WZbUhpKV5WsuX8Zyooj7vgYzwZXyw7putztMER8qvMqUFBkjPT5Z5sLnT3",
  "key14": "5ZHvhc2BPD6tHiniSJqAy1yo9qQuF3X1fv3K9XmpsrrFHf43RuSqcxvj1xb4GbRSugqEmymcq4ccY2snAM9Czp4p",
  "key15": "wDeE4XZmdFYm1AwnbTkHqancfWv6tR7FZRSUcgQ45MLiVNkmzod4GwpLm2QnjKLSiaYdQKC3zoXzXfdZkWduMDZ",
  "key16": "5hCaRTXN9vHK8QFukeNa6jzpHmFD6N27TQKCApWVkSuGUcUApZVR15FJ5NQvYEKvFA9T33SSdbvo46eYFFpqCb6y",
  "key17": "4TLzZYzXXXT7PQmoUM16MVF9EThERpoXFjioGmeqvvtAcrqvHRpWkSp6bm6u9qD7rjzFVSzcbJUjxfYQJ4r15ua1",
  "key18": "4MrgESPfgHk5ByPuJYhoUHsFNDjgGLgCkMDvWZfRwRcwHGbrgT1Fx64PT3HgN4PH3B8SAQtX7BYZzkbGv2EybRCW",
  "key19": "FdupQVxM3Y7uqpnfmUJSAzden1JEdmP2LMxdJ9qkHzV6yQ9MM3LDZCEG8dDKFshnfpSafqmUFhqeRHQrUi4EZuZ",
  "key20": "5sN9eLvb764jNdA1sUbZnBjokKhwpa1yFgQms4TQB5k31URzZfC9g8mUptuta8DPrCcG4vCuaNTj5R4MDsbiDoZq",
  "key21": "4QQc7Sx69RF6FTKLNnvvRbHXErGZBV7j7qn1zhrSoAgbcqEoP5YveWHibcvYkjaV6sXtXcBrAvWUHVv59jvdLC4A",
  "key22": "273mKmj2gnEBeQXQxaPyosANKp8E2Fh58NuJbX1NpzaZcmzYC7FPWBANTb2WacowwDRbxWM49HRDmYZKTcMty4gK",
  "key23": "4yZFb7v9i6JmkZLvsnnVUdwgovjeg8VSGkmN7WndAZ4ViqLDF6umoTwEFZuaXRhLsUoT5MoYJnYgCFqVhxPX16zj",
  "key24": "5wfdjfCS4KeT1EUzGmtCTP4Yvv97LTQNB9mRuKB2CSXgQAyJdeuYsatSr98t4ATsUWQpiD7of1t7vYZxhzisFpU8",
  "key25": "3mDZJBSRQrSCDjzXoy7uSXk99mXgBmgK61pcRDtqFRjyMMquYdP3bWuVLoyGfT7eJVRmNECsa82iDcH6DCtySjzE",
  "key26": "rpuVzD7k5QAxVyC1eSafiSg9t2MnhS9FFL6UBgsw3fYWVy7eoRFWhi68VQqRQafnA4Rmu6Qem74GDVgaopqvyti",
  "key27": "3WdGhgMo3HtpRESotW4MxSgwsGu2sXjUf1zvCtABvaXrCF1Rj82unCtwuSNHwxritu62Y86UAkh1DYfu1qZEN3EJ",
  "key28": "knEifApYwrGtg3Tv5pWVR58kZXbQ7fLzbeJYsF1XVLNQBJABmuaZtKU1puR2ChrJ8Hag3q6zhgEB6vE8Aj4AncX",
  "key29": "3XeaqiaJryTx6ByAwZLv1viidRe3ESPmDSnU6x7LYhboZEvNJe2dKAfZmy44DUcTC3BUTHFVJcpT9RjS93yJASRE",
  "key30": "2N5C3WzT4isuABXmyGY1tqb7udhrGB87V4jyYkjTAsKZgpo8hWvGcBS3n5jfoKU2ZkRXHFyAsyUGXg5HjkS2chbs",
  "key31": "2EuZCvVbjcTwcm1HZGbE43ZMHSjodgyjrJL2VZLrmTLKtE6rP2ygpx5dK9mw6dpGaj7zjkg3gkLvsMknehqiFWMy",
  "key32": "2L6BTwfC7hmaptchGnFqSiLUXcsFrYQtUxc4RYqqtvvvNyX4ZS2oWrcuYM2NDVhWEYkEZTvrcLW2eXTQhoNDcaYt",
  "key33": "48jAV2HmmnygTMDZGHwdr4VLjFrjGbzg7xgufadBoAeWy6vhVTZ6Unbg11upo4xmdBXmSJWoJCLiPRWgbNz6uTwj",
  "key34": "pVMaNmF4u6dY3rryxTJ27HBjLzWwHTY2vdm4uUBVpuYLMFrRVGAX5F44EnGPPNYirjsjH9UrJ76ipSn7mGHC4q8",
  "key35": "5GMiRmGQZMbc7g4ee6nNnwgJ9C3fTbJV4GqfgPpmfgQ3eACNRhkGkvEZnNNKT6WmDDi4619TVPSCwxdGC1x6Y9ra",
  "key36": "5XSYTgmgRCWXQ3dyvURscmULos2tntC8Rc851UxicRbFJBiatDFxCgULaQS49cvjY6VGysGtPziVvwsMsuob3iQA",
  "key37": "4Hi889gesG6ocnS3LDUQLvkT1AukpfxKU2stSwFBPGVESLAqPRL1cxCe4UND5XF2fanYUrMiZamgLHiPZBeQRh8m"
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
