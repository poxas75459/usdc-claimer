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
    "38gosZrfKfwiKGpfR5HCZfM7z4fDjcGcqkHpUJP2KycyB4xDmfCbJYjc3Jpj76EGhGx3SLUumiW8PhmCbJDouYSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Na3j5YDbTgu4PgCaFqShoyCTNZddDVwhT6u7hcfREwbvK2Ahm7rmRdWof1G5LZU7GPHTqHeiah4tWPQ59KAttZp",
  "key1": "2pRqx11Gjv9Rx2crHa5MNK9f1WHAAx2xYXAVKpNTazqqeLkYsNj68ZVyWBKii8fXpVEhZRoWzqbobMAkaEv6XMB7",
  "key2": "42AAL4y2ooDJBxAsWaPHybXC8JiFR5NbqADmNbyUijv721vJfCTY8MiZRnvdzJmEXWbw1mf2howRTj3EA5xhPi9u",
  "key3": "4GwQWpAbQ2k2KyT4DksN9acQZDGxxJDt8LvYntBVbbJEDXaN6yfQsoVgguhJhteUgcfz6h4tMiLKZWbCD7zQeszx",
  "key4": "29n6SgTsJcWYFyiZ4c5bs5e144oWzrzcFN2v9Yc1eFjjqSRYMFT4NdmCAwr7ZaWjPiPMemPVV4V5uKqvKdnEgXXZ",
  "key5": "2x3bv3SjTnGXuAXuwyFcYpEYAdGwyi6vndnUMabLznf2jf9VeyK38CfVjGvvmisXB2qxwmLTsswXGq9MxshKtGra",
  "key6": "4U4A1aZj4Vs3haGkdw8jyEr5HkeSPbN9pAWuzGYu1f2TtFxwSi2tJa9CXyzTSztwAouLtwjZfjXqfWuYB3kNJ7kn",
  "key7": "3dGhN5pXFXFmMmzw8ntnb1tsdN6NamcjMSRyZs424oB26S4UC8y7YEmHm45H4piQ3j67itoLPii4LqQxsjpjYRCj",
  "key8": "2wimxDSKqwSXzEpw83JPkWmbCqBoVGVnCRhUXtv9UDuzuLzQtpA3AzDfkCjW35gnjCWoPzfLMqjycnptGrUBU9hM",
  "key9": "4HszRYnuUiitEirnJapqtycU1o1VckHba8mJs22Jrh3cwEntaKp5zEfK3ao611t6YkAJSkW9hPD69y2cthE7wJdc",
  "key10": "5txZYteYtp5tWj2RuK6hFGsc7Ym2F7ncvgzPXbttbxffQkCactDgWtMZ9D5Jn9Dat9wZB3q6zwgejUzFYPnAMUeL",
  "key11": "4fLcYzMngkHFWLRCWgonkvj4xJoFiHfUNFc1UW7kLkeiNgmQ14ygnDzCRtC27yeQgRo1cMXnXnHpJYXVxHFRBquD",
  "key12": "3rr5MSkw5eDwMUKt1RcuHPqwv3XxZ5j6cSf2jADUtx3K9LH9Vj4jvBUj1sfaNv64yhQRn6xK3PNzbmbsuKbMSHD1",
  "key13": "4NLvYNgRezS7LLyoWgR6uRmpTsDwX3TgzbGGZeM9nDiSJCWzmmKoT7NcCTW8tT5DWgGbZjxH8juuR8gg6JpK3Nt6",
  "key14": "5Pq5kz7cmowcYF9tFW1fYnwKtrnN95KkemRSaDU1dxqooCrXiMLhKcttU75QcWB1D1TLcsz2J6W8VWhRhwMobjfW",
  "key15": "3BCr7mYgbmouGCRptrcNf7BbGWrDAZ9bk1NXhjMJq9QRWE8UfKW4MfDMUGYXTgR9tdP34JqREF1cwbBHkQBiGQgW",
  "key16": "5dRnEoarARvDchZh7RbTs5YFZCDJF6zWLG433Lah39QZiYCe38nfie6bnRAfsTevdqYbdLdGE2ZbZAyqKbaxc7fM",
  "key17": "2nPYiRW3Zudvi9WJQdiRxfugPKVD5vhp4o5eKp58M2o3Y8ihrz7CgCEAkwQVAmsoThvX2e8kNBFCG1HbdpRkTJTs",
  "key18": "4qyhhnvec7DgShEBbhNDv3xPacbroEfH9a9QiKhNekJB6uuT33VZizoZPaZc4DLpx45LtCYc1rpmj1UzqzN57f6r",
  "key19": "2PDFcsPchxJdjNfbu7kQjqw5Pt5A9cN6n8wzFTyDcZpx9SNBfWRXYw5nktvoBHMDy3yDpdULWRNRiAKQK3cANcE2",
  "key20": "4ga4Mh6tSeoyKYvpabEqJHtErvfqSeSkrfDyqGWpj4M7L9dqzfL998kCX96khFZcBHXtAEMZodoX3DHgY94yaheT",
  "key21": "5Gh6YQLFtbcVsyTcujL92gTV5XRRUtrdkSNutiCQ2ChW848FGrkYWe1pHJVT99FQ5SwsBV1HHwqcvpuZj1DoRVKm",
  "key22": "4oGNy3NSc6EFBoVwmMWfPsAeSdEHKHaZHkUdhxPLP16ymmnSyGzagivNgc9C1ELWGEJ6R8ziEzggC1St77SgZBWU",
  "key23": "3HjfKx8SsrQVxKp5q97u8NgkMNenNQwZaFrmeZms6sRmFeh9onGhj7kVTua6SiipwKPc7o6JW8NUuacpf8FW8RJB",
  "key24": "25WLwgbwxdewtjTTy36VMeRAFicF6DQhe4kh9juDmgx5Anwwf9fqBEmr73RybU9wZT9zfXz6M3W3nPtkYubQh1eG",
  "key25": "5k9LzWNfmcghbYENBx93GF9UnfH3gJiapGAfjt37itrJr28UmymZkezEybREm4MyF8Yjvkho3AY1t1FX3bnK6jYM",
  "key26": "3FYN1i3UohMPdhon6cbT6ifUUJtGntN8p2Hsmo41HRKTNAdH35ZJAsnAPFub9LE4FhAFYAwVkTVgWJQ3h2y5EGjB",
  "key27": "2udYjBAtY4SGv5fG2uQRXgy8zcyPhzSC15GzErb7H1793bycNBcKDQGjf2UCqAYLjyr45WZCny7ctis4Cy5ejJjn",
  "key28": "29Trj6KBsZgD4ALHSYnNHsyxLWduLcU6DygErpAXuyZcQTaf5gst88mUgMLnDgLKYdc92gjAovgFidJPNm6vxGjj",
  "key29": "5zGpy7rneqxnkgXhfkCeFUQzLyHGhzZDfm65YrgrtJMwDUgHjLuivQ33EL6S9LQ8CGrLLu5jU4tNYg5vhD3WRkka",
  "key30": "3GYpuHGYd1gJtrK3ozs1ycXVhnMtW2Yb3ChcphJyXxUi5iLRgiu4L1DHspsAHJeSGvmHn2gARy252abti6Uxwohf"
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
