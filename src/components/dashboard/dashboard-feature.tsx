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
    "4ya9YCeo9wvM8PsA8W7XpCiCqT4M3r57btSoVBXHqecwK8rjyYcAgTFiBYLiZPAmedDGZ9dgRKr3wydGiv68tgCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCzn5px5Q89RKZJuw5HbZanR8YiQQUAKX2fCWH3ajfer3RW8LCoYWunfQU49wHEY4uAJqKhSLAgEpa81UfWKgAY",
  "key1": "3oAdUekiZbRgQoTPLRurWBoAnhaxDYMiuXYmNZQT5z3jzgbzJ2eLXh8nVydDvPYZRoU28Hcai7uq6YKJ19noGwNo",
  "key2": "iy95WH5ph9KfdAebuKCsH1ju3Dg8v12sb7b4pSwsfAZiFtrzbamCqcs8NawAV2D9buKmp2KyG98iuxUaZ1DLrbk",
  "key3": "28ps769Gc88HgFZuaohmWYnDHXCq6PB3zcz3ACqzwKJi4m3mUoJJoV7BPGNfnEi8oRY7y7P4vLtL2cNzeT2kjE1b",
  "key4": "3fGAnJbVRqMPqMCFLUrqfqwnvhXsf22rfvKHoWRWRxZVJahoyP9CK9CFZNvY9wcewAT3havCq4Tn1ybLPmtamdEu",
  "key5": "3HZmdY42wqQwrXQtN5bnt8uE6EWpTCMBs4AAfA8T1u8ctg5m6N2TshpivByeL372SuWbBgiiojSXrDUGVmdDya6b",
  "key6": "2teoGxdi2sQeZEAZXFQjjJxsx5wH7ViXfQPrwrXWKLfw9r1fMPAAZYSeYjqPjAEYyH5xMz8FE6ctbMgj9qYAmnUh",
  "key7": "55icLFsffkrWgapbsAtE67v8CVkoVXZ5T44kGmcBAHTWjZaXpjTUhBXJEwBGUrYtRVqHnB1oEVJYY1Y5rzCKpJC6",
  "key8": "4LLpLWJjsonZ3oorys1SorXJ8QvADjKYTYfxxNoRdakH3tcr94eZJK11ir2NcMVp79oSt7WuDFD1dai8H6dLuGfV",
  "key9": "HH3dDYXLWbCJKMV2dD2zaDLJt1TvPHcU7nK67GyC3erxYhJZ4cJR14ph1JAFaKa5fgWKR2dxrwsaVr2mcUXQ1he",
  "key10": "2rQWc49d8GAcynx1rSBvbjX5pGGf6H8TAkT1USGP7GoNZwKsoDENDKWKYB2qti8KqymKNRtqRB2ddEw6odnFfJpW",
  "key11": "5FTNsEcV1auo3wLiXXxKHXP6CzNfq2gQHtYgxjc87Gsn6EwyRBgs2z9WsBuNS1gohA9qrfgXMszKzCCXy1s5rSmu",
  "key12": "2ERRKCSf5j78e4Q5NpaMMzySx7vVsSrsN7ZMbDdmoqaeGcTohZhGeZ92cGz3pSETrHHWZVYNXPDD8CcZvvGBUc88",
  "key13": "4craqzG5zPUAC4RJ7WBtvvQsBFKPZuhpbZJwARSAWHpkYknUFLhoPQ4QQcgpD3SYzKSwYH9dt69e1ePgfeXLe42S",
  "key14": "TPwgjmYbQXCagoSd1FrE3YZg6A79f6Hzgp5xHjHVWhKmXd8cMnpJM3i5ppLZavkGjMZ7nSJNTJ2evb6EEGbdC5F",
  "key15": "iDjaXYdf7qrb9rzuXxhsZGyoTP6NDBEbYytZncnmESCVyXd4sEfGXvC48JPUsUigrMbnDJEmxnNfCiuGEbsFDD7",
  "key16": "3ASNDCzNh6n1ep8dV7BwKX6sTjNC5D1U1vZ5X8TU4SzQ3PBF9XjEo4XivLqXYJckYx3zoJPYSjzutpPR43q9szQt",
  "key17": "5QzUBbyn8mYEaBUunmzRRsnAe34Q62HBBHbx4V49UAbyVjFnH9rnB4vtjoEX21z38xdZp6gnM8Wkiyi93Jo9y91N",
  "key18": "4XmupBRRqLerL4nEsBCVK9yMKH1Te4CMWNz1cA7YnobLJneWsmMBvVcV4VRWoWnhnoqxy8dqUwTBhxZ9R6eu9y9y",
  "key19": "5BiE1WPpLkdEqGQRyi624oedUKFPjMid13iQRVLsq8MVdLRHN9rSeep11xbmQXkqCkwnjmMbho6w3pYUqkAdx6Tg",
  "key20": "3uZjb9XYVq3xdnqBwzquh4qXxudH8U4cxk9kGgpS1LnR8jkoeh9b7HGP8CVsVHtWgzR46TCbZihwKmJCoPe2Yo4s",
  "key21": "3gPuUvKtXywt2QrwBpK7rdGFhMy2KHnjCGVy6dptMyQnWkcYRgYWEH6hWteK9hf1XCFk9iuQXEFuN1hRSvfjdPug",
  "key22": "3tUVPMEvZ6WSBztS2h2RkwR9dXbyW1zwHtxVr7DRdjpAazYwNxB5KfAtn5NrNDBWxMfqtDs98LMHW13M34rHk5Na",
  "key23": "Y6nw2vMTeKius5qyJSLad3XXWgDM6KDR72rwUyZJbeWwqFENYfktJZaPMdSMNGxBJZDvdsc9zxspAx1VefGbSoU",
  "key24": "4vwJPjqnBQABFj37kAaznkNQb63bqwtBNyPGmVvFWeLDp59dbNZYeJHy6Q87qrFSBrWkYPSf9PxoPPuxhMuUx7nT",
  "key25": "2FgF8C8tY3NihvgHinyLqdGaUEeLpx3U7kEpL7YPENzL9WEZbcMabtR8mFDNJVUdGByLKNyjWaCYnwm4D2TbE6eX",
  "key26": "2z8yyAqHM5hLWT2W4ghhz9tCKaSKs5Y3pUQ7boJUyF9cjcA1BARGXz55AsjSqhvFipX4zX7ZUnpnh1Gg6YXks1kA",
  "key27": "3UmCUQqLzxFrXcALGr1vmSHEzfeRehxiYNhJE7Dd4xAgB7c96aYPeVpqsohXyRawT5rnSYfJp7LvXY2SnvfGC5iT",
  "key28": "3pFGechm9Qz9gV61vbEMLqtNJSgPoQgeXAXa3DjxVZVxPoKEQudXQC9Qey5vBaxmMA9Micu84MpArCbGvirHh1Ph",
  "key29": "5S6HKpX3LKcYN4Tbu2vuqPjeRQjeTcCzRgw3AjnNub4G8mUVX7NMJcUyGnA4gT4iSQ14tAdv9J93vZ7GbRqt8rfe",
  "key30": "5etcY6S1RqPQErHW3Miucskiqx2RBu8nnC91WNf2qpNjzhYZDh3v74cv9nwAaCYRd4HK1qndNgj6KFCSFzZy89cE",
  "key31": "5aswPSvbUiweGm9VMsiZ3bZrvNP2jeRWjJTfeRZAaz2kG3TFWVyDWmVfV6wuaiZD8CUSeua8zW8F6mTt8vouHoTi",
  "key32": "5Eiy4nwibR9RGYThTJkywmp3FHuMe62UbL4HHNNS8zMjMrfV2nfNkH1GnqT1rf2zQvu3hWsASxpPvVLivHUiCJXR",
  "key33": "3Zw3Qr94p8nA1NCRCc2CD74F79uDsXA2zJuNzJgMng4tN7C5ibu38NZgtMx8aQSR5jRrFGtfQkMgx3oB1AE1Z8Qu",
  "key34": "46HisvWk2W9W1UXoXsdvCU2gxzibnPWWnigcKvrF1H7LrAiR8yY2iHzALmb2UdUPw3sBcAqsWzJcuHoWeR1MaYFu",
  "key35": "5aQQ9K7QDfDYxfUFvFtbuVMrK5KktRRRu4nrnm2o4hYaQM3BxeiQyW888U6dvoppyuYm6hzYEU3APPkY62MHFgqT",
  "key36": "3ZR5M99GxxNzBuo6avxFQJuRUkE7ZzHt7duahoj6PfVrnjFPWZBgY7MJjbRkTjRHVU7qcDhED7YPLJq7PHhWcx9Q",
  "key37": "4Ux8BmWeKibZQGqTkgBS1mYtPBsLSSzpBozjNdkCzqWzaRM8qxefCCTtnCDXXntMG7K1SmZR6hw3T9nt99Js9UBQ",
  "key38": "2yrejFBmtXtvy4zufLfc6QYpmnMNZKATJGPNzofdnkZ5QBfpwxG5MVsgt4g8WCFXnRJdMEGXPSyKf67n8yfvKkky",
  "key39": "2uE5d58QS2BMpgRpGVNa6kSPq6qP89QMaUMQS5YpnF8Vs7GLYFdQH8CPaBfvezebt6prYy8jhYf3U8WX5hnrFwSa",
  "key40": "5K72qeikmwGaFcbhFKGB4TSf8iyNyaq46826C9LQG2tk3nfK67sgtpuaUPdpDgqXWdUzjfCABp191sU1KBE6d8T6"
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
