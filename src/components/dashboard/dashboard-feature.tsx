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
    "5A5jmvwbUGK4qUt7eLVwC2j8WJ8UpSaUvD7U4VGZ3HqNDwujHPaXLNR96T6QQTghm1wAj3y2TVgH5eQ9R6ogMZrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFAcKQNJjuXMnb3JDc2ypJVw5qDUWQPUPvsbhmUpt799Bzx1ouuQiVF4h2RdkcgFxHoc4U6LFZAGEsJqbRW94yJ",
  "key1": "3CUJzWHbpVCQMeoM58baBzPxtET2LqSYqBFvT8paxPJFTRrkuoGKQ6vN9tqsVXEhssPtHbrqggGMQUBrha7fgatr",
  "key2": "3Wnmj9PRazQyMaKQtv2vZUWnpWbu3YJKFL7bhyyk9c4GtSxpFa4Zu93gW84EG92mDmubokY5rf7ueWvgtY9Qfd21",
  "key3": "4rhvL5RdjqG2HB4U7HM2NZRPZroRtBQUP4q1UG1JfGcasr3U1rRgVWgsJ7WThEdEEVrE9qQGqRp7M94b58LzVe6z",
  "key4": "59Rtpdj3qcEzB73HGbPV86AvMLsTjt3AeF5w4wytA1qBh8hteSywnXjiYYS1L951tGp7mePgtHp1B7dzWwC4Qy8b",
  "key5": "27da3Q7AQcXbidbmwg8AscWiWtUibU4F4jC7BXKHEcfPkK3SWNCDhxmKXEnVmKmrHExKJhKnpRrUSR1a11bmCaCw",
  "key6": "VnMueoyN8gwyV9SdPfkw1k1f3DJf79h2NogoGBfuYdufGyTuz7WDXgtLxf4uDh3GdEBCoZ4Jzr9sZTJMJmXFw9w",
  "key7": "3XKYGHJW4VYzR512TtCeghWNzCmHQPMc8TusUmZSmF55nqgzXjk3kfHuZC5NtkytoT6piNbaU7nNiML3q23douDN",
  "key8": "5kbeM9GbSiER6xBaqUAa9vkC6SGTfgbHCijNxyaqD2jSu6Ks2kZU6CzyP7nm5hRTuWyYsrDJZZWKCQ3aft3pKWSK",
  "key9": "3p2KL3UMutMaeLDWU7tGivyn7EjRxnuigNjndN3ctTWKGQQsKVShMjqAC173HnnJZW8BNqNopJDxX3JsU5tsJA57",
  "key10": "5RR5j1ewhZ2F64vZRD35JNaBrryfy3mhE36jB8eqYE8aVvj6TUGAaV3aq2ksxe4P6qWPJLMjE8QErWYNiF1QM3Tn",
  "key11": "2WSeYnGJAF8W6uWA8aPHrynqufWSumDU4rCbz6sxPUcFmFzwL3bXLXqB6P5YMRn9k2dYoig7XKbFvMUvrYUWbei6",
  "key12": "2ffNCtM1WEm6mLErMZZofukVD6fEKCqana76Va7JGGvzDYjnJT9ykwjoJLmY7uT6TfqpvbEgMSQL9SxyK2RWaYEn",
  "key13": "3m4M8nzDRHhjy5ASwCbmKo47XjQgNqdJ1eNoHcQJVdAbXZek5V23LiFnrnKShzp48Gox4XgodPbuFhP6Nr7LDDTc",
  "key14": "MtrVpzBaBXofm93zuiG93ZpHb3kRpN16Dbkq7EqXbVGH2bAjdWFWo9WaWWapaAYbwV5o4uQdyB5aYkkJMLcKkz7",
  "key15": "2u71b1KvUbWvckSA4sTuADuxcLkgFCLs4nkNrVSAdtEDTJei2sdtCRW35mAa4iNxKCUPoC8wZrapCLksX1PrP7jP",
  "key16": "4jFVCaCh2page4tJfTJPByuNcEa4nQmrJsFATvEWhNQJWdLRb9y1zv8h4WrpGa4keDT9kj8x6XPq8rpHbCufeFQ1",
  "key17": "WvLbQLD7ojyJ9dXxE3i9Xrs71B9Gm6RoFQJXACCHvA618rgzVgEVrvsoiizLJufDzncCppyDLQiWkAm5WPAtkfj",
  "key18": "4fXtv8CUgZtTZQBQSqqELuNwYhpbSWUoJkDUa7ncPrY41Px25bi4bUyT7KRqQ5Di5yVj3cJY8syBbT46RzokPvAR",
  "key19": "VdxiTWjmw3PfiUJnNAHwVsxE9E4UDq7xR64ykzGtSnxYrDPULKMHV6xu2RkZkPkCsZo3ptobred8DXUyQ1hpDvV",
  "key20": "3wFDNKN69etETYjQpTQkJfQiyVdWAFZ5q9hXrTkywfkU9GQn4YY6GhuZB9y89Qr5USYDQZKjHPQuWMfRm8HXoKds",
  "key21": "5PSgCopLS4KxdFQig19woF1vqKCRDyzHnuXD5iznxq8wFA3iQVFq7vzmqavbdD8PQcG4GWHtz7c732nZZfN7rwmg",
  "key22": "5sWDXeRQTGp9XG1fB8dcWHBkQ7sNRNipJKSdBqsUh9wqXKMgh7UcoKbb9kpwBkdGRegwyKhAqpo3Dsjt5LNU1oR7",
  "key23": "4ebmyooZCmBTmKSG562rGFFteiEUYYzuYRApNtQqUVNB947xe8r3icbVs8qYSxgfQiwW8FqJywMQu46doEoDSLoB",
  "key24": "2tAdjjKGy8rCtoDFg4tR2vLLC1WBGCdgkR82eUQEghHRpLchE1C3rg8ftnBFH8fGu9wjuZwcBnUuvazZjF4JX9s7",
  "key25": "5aVwVZqETuY7BjsR7Bhy4TbasPm2M1SvUAYCxdyBU7TccyRTYJwjA9PcLi9ayoJbuhpthGAH7h9GQ2U5dhBLaKMH"
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
