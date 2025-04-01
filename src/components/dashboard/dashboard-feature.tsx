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
    "3JfcSYHkELbQEBhJS8qmopXP1qTnU2a1HRBExaTPUbw6Mg4Vhto7yVzaWj9xvTjxAxrCCSbizCD2FAkbC8BqASj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCLq5GnBKiMgXKQ3yhZRJTHrNyEN9xtSzZyRNG2Wu211ynxTJmXGfAqGYZgbUwhjcatSWm3FygeibX1amAajLie",
  "key1": "2bnqSfHiht2azaYFFTX3oxq64PvG8GMYk3ZJi7tXZfWfabtMpUYZpxHNQL3E6sy9qEt4szGb3MEa7RNUm1un5Cn2",
  "key2": "3jpiVwxKD9W9BzAGdueR382UD1aqRHDNgPqPJHEWmnKxeLf9iY1MDkwsVNNacpQKbqXTTag5iSDdGfsqfv25rBfy",
  "key3": "31irzvMkewB1W9RR5zGKtea3Lx4ST4q9YZgxFUKsNyCLSN8mVZsu7dNhhsfmUopQep5qSMSUvTBTTGus46AZKiJP",
  "key4": "gEpWKQUfGUFeSPdHPR5jDNTJokpKeoMccKWPJX5jHS3QJ6yCzBt8hpQUUvic2oS3RWimzhyR3HnSwhZCxQuZB3j",
  "key5": "39FQrsghCmU63aXvEjFExMG9GBJmyAwepzi7YopJtja4ZaBgKuxM8mdfko8oXqxPwMtxXGoffeX2boqHVHJCaEXM",
  "key6": "65N76WnQhYuTe9KNb3muV5Uwt6Q1knm2sZSLhNBuvFUtMurzYtHCTvVfQA44ASA2AT9ZVdQ63jnQiWjXdbcs4fyP",
  "key7": "3EvRfKYQPowudik6sH8xytDZ3QfN1vDzafGtD8zB6X5gaDieVPJYdHyVuBQQrHcBquogsrgCfbMFEcrpnYSSyg8S",
  "key8": "3nh9GCaSFAS2ibTbRGzuSfeXurhCgQiieP8D56rnUiEj3LUQVjMAcKi7UZ3oA9i4Y3yr1qufNKcpGWG7VSZ3RxHs",
  "key9": "5ke1vKNRankCZbR5DEZuW4ekVPhqAzNhpfRenxseNC9RxmPi3qgxnWoeoKNQcYQoiEBZxyf9qRQx7yNMyfeoGq5w",
  "key10": "3mhBxCo7hA3J88Ae2FuA6ytT2XPWBSwFmjpukSbjnpf1nFJGd6H4B4oWwuKvBdaw4Bdf6ENCyMQ8AK6jFfQaXKas",
  "key11": "2HbF1xd4h1mW8ht1oCUbfRx6u2RMwwy3rZfqu1BKFWG5BqXBjhSR3jfyYXMBtmctXfa8BoLX2MXRjQX657N6BxNw",
  "key12": "2LKov9c4Kxsu3Q4vNnsye12pLWzdo1VC2eiE1QWjq42cX1oCkUD8Z6oNi9LqCYZLrwVgmEb8XfckhUWaWGTqrH6q",
  "key13": "235c4euBFv532VqpQt5Uec4kTiHcqrQFcmKpcKWBinWQiJTTA99kZ7YLyWPcWVAB3nWio5VGrjwTHX3w2wfSWfwM",
  "key14": "47696cFtoLsTtbfeq7HhMfSD5r5qnUd4U3wnC3P8Z75zTQkvo6dcQqzMdwQUzPpuymWwM18RBSUpAtGi3L9HoArD",
  "key15": "3oDKJtedJBYJRSMyMTCo5jD95nifwcumVahfYzMfVqCEPgp2DmAri8Qag6CjKZFHhX6ooYyig2RPf57eTCnP3poV",
  "key16": "D5e3eRvcDVjto63ww2aBAF8zw5XMzNwZrkVztEitzarWDTY133EAxiNbjPwSotBhbHC8XVkWRqfnb1rG9UHgJ9Z",
  "key17": "JGWKotNsRfbbBF3FAhKx1YgipMmCdCSh2RvttzRF4hJvqYeddZSFMpUYYPmiVuk9BuG4Pg6F1jeestiWe3hiaZu",
  "key18": "3fdfMhRjZYajYUaczFNZxSVP2m6PXyWh8a7VZQGhYWBvuawgRVTUwSDhrYWRX1dYCcZQWWM5juyL5sDBeJmaqBC7",
  "key19": "2oYsPhJijk2NRnTnw5QJ6xxykYzE3rCFnkCeEVsaa34tjLkP8cVoactvk75MdaimxY6tsn8ES3BmA9SmZAxE1k58",
  "key20": "2zJxzBiox7frQfxMPKEnxXtai7dDHSZP75CbhyysESwfjRZPth6kWR9hrBeW3eYEKoz4oyKdvwjDgbiYME9SqBNV",
  "key21": "53dv5pLXrjJN3KBvHAsYRFiKDfrfhNghiQszct8nsRsZeMq3Q1nmZ42u2WhRtBYKKmdDHya5Xk89zFQJnxeYTYef",
  "key22": "3oUC2ZjKzUauXMcRxBYboNwiqWnFNt9t9zq95DBoZm9U3ZLMMuXF6xAjiGYzX2mxiNjcykxAyUp67T2sw7tHuQB8",
  "key23": "3ro3pMnM7rVo1N2JBtSa9393yhfRoWtvM8U563m6eZ1LYBi8mdkE5U36Mp6nFfViwcGaFWmrXdFMFCknU8yW1Dxn",
  "key24": "5AMwxsxmkCBwBYVaCXkxsmUuwmuHDvAaSTYQCgtV9JzmNdWf43uKCBPZJyhyh8ALpcSgA3sTAJtuYQ8RyqGvho5S",
  "key25": "5pkj26BkduyeCThhfpvmx6JfXn2W9s2MX5RkyViVZeC75ZseY2bUWJvgVnmjWKewcBauJjxDEcqJ978eyYBuGNTS",
  "key26": "2ek5BSeiJbTYUyvhB6s64EZo4CVuieUE6ohNn7racvyYdnxLeLuWDodgA9AxhiL4hhDxb6LnhCbz2cULDzDCdUTF",
  "key27": "5ZfGzG3qUNoifZiSg3E5NjPad7P1DY4vUSw1Pa1iygfwxuzEYgkwhuXd4XFMMkm6kejszabUdHGvYHGLdFwWta4q",
  "key28": "Nb2XM5FYDyigCHV4uju734J7wMjKZSo7YqUtJxusARZ1BTQRLqmbErjrDc3GTf3NWrm5wcxpbMdx5mHXsLNNXvM",
  "key29": "ASw1sXyQhKqZhz1NeBp7eNZqkQx3vcq3NU5tMWJyvRyYxu83v2jjrqxMqZPvcby1H79FH9nT9vutg1MBZso8Deo",
  "key30": "4bf9M3SahVfSoefdG25DeLrhywPXdTzFeqCgraC1eCRm7Nsruui8JPYrFYzPcrAVUeTBFb1XyEbFM9tA4kqthmcA",
  "key31": "3BcbSvpXkzLDUpXan6qyj65EuktTvpdpYDaobgUZwSJrg1EK7HCWSz7171SpoFFtK7ryYrFoJc7TQDbHDnKcRMm1",
  "key32": "5f8QL2mmAQQNKV9hncRKUvMhcy9HCEuFHWT3oBCGn8MQb3gLanAjZC1RHxdNDHeNPSGeqeK8fkvyZx8JjDwz6A6C",
  "key33": "2PLPYA65fvwvwSBFtqjaSN5aAm1yXUAnZeTPkYxtQ3xAsg2jN1Faf4aCyBXR6thxbnku4LuMj1bJ959WoVH5VemN",
  "key34": "26Tb6j865zLwidztkvmZDdT7UUWZvjiNQo9WksPiMQh7pMtBkukb88Tzt3RYysRkse9YeGoEoLGG4XX46kCJLAok",
  "key35": "56NH9ajuxqavATWZm1nQJfcVidkkMUyvkoh9wg5KHnSkYeJK78uQDNpJGyRupodDhcAY7fhF9k2g3XfbURLTAM8j",
  "key36": "38FxdJPsPLVfmeA36g9YhzxCmiYjeXUJq458ixbgiZrh2kzHbB7kkznGVXERZXAwY8mW72NEs9UFSn98Z5rackR2",
  "key37": "2b69vbsEVW3SPWPQpvwviNN5L7G4Yw3je8ug8Tx3uF428oArAdmEXR7jLgaNwjumDWhPzNouvCXHwi5E6m7rA7tZ",
  "key38": "3B4SyB8s1ZVogjmykcz2hrL2RRLjJ4oX48gX7uPSBPCiwD47hg7WJrSTKj3WvdJ1i4dAfV3Uzb4VfZK7MopBy75B",
  "key39": "2b46HyPL25yDCxqp3yxBPYu8RMTb5suESByjPk64CUqYuZ12RWPqhdMc4MoZxEwFZR7cUjfgsR41bUd8xTcYGXrs",
  "key40": "2FxKPjRZyDHzmB1c91hYMXSGZ8XbhFyWHUJEtMvanzQQikRYew4SzVAPaK14GzhfaPZPn3Mgdf7uRtHWeSXYCLir",
  "key41": "5wTGgGG1tcTh5uXpo4esfKZp6wG6XMSCtKVcZ37BNC6kUwzMz27c3gR4remj8ANtdyiCZpFQ3nqYu8oQBo7HhWbV",
  "key42": "5v48seHddTCbY7d312yW9TAuf6r2EAyiiwnk3yu6zicXxwAddM4vfBmeZgKCBPfocM4acB6nCKCjaK8iaf3GP6Ys",
  "key43": "4o5THsLb7vTPeSBabmU9HP3PRrX8JUto56AuQCw6HyjQwzu3HxAQspt2fBDKsbXPZnpUCsEAe2kFQQpPEUt4DKfk",
  "key44": "4RxQNfJ8o1kRNwMZ36HYQaGXXJajPVWsqJb3t5WwQF2QewkLsT1qZdt1oKcJGbgJezoMihcmEiuexDeVqKmzdR3f",
  "key45": "2Z2iFuo8UjhrfLxkm7E6sWDT8jKQVavwwJKc5Qs7av3QZefrk9WH8C6CStDhwQzuq11AeYFqUHd7DzTsx6hFhJtj",
  "key46": "YHAn9fPg2KXVWu6us4ncgcNbHwWic8YnLr5wZhHsP34MpdTDdBW2fyRAFw9XJ5SLBqcmmAENZLWnCpGJ4mZEYiD",
  "key47": "4mVcPmpCuKkk9fTLKMxQqdGhLRTreMVij6M7ShHLtTmLqFtFGREG8Xa6yjNVhMu8C4eJo3BbvetaMCGpypSTP9jy",
  "key48": "5C5sy2RUPsPq2YGWZK71ejr2miUKHQBRA9zwqfu7RFqaDSiskp2ZqzjUfLG2rBEXvYXRayjpR819KYixEEEsmSHj"
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
