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
    "3FxRnpqbzb7QGt6UqeYb8PgMHHY97M6en5H219Tw6HbpRvwZa2hc6SZN2jguKPdeTB3qQfALEfuMixdmYDhn4b6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAAYnMaPNWgny5hw9Qbx4SFM4AWco9pyzfSC1nD9osFZ8qP2fjrHzZic73uMEeJcar5DN1CApyb35rGr41FP3yn",
  "key1": "NtoPejTnyoexNXMZPbJ27QUiKHpc7EHrJF2J5Jo8rey6F9r3mVWvne7bZ91s7N3ZYWLL83wSAu9czNVZgiqccDp",
  "key2": "62P77TsDXCMssHaer3P6ysgjKQJGuJN7LvCCmuEJ57SRvqjr569V6B3vsZQ3Xv3wEL3RbePQTKDKwdUcEF9uSYyA",
  "key3": "2RFNGBNNRY8vDLcrVzvxCzBcxrpruTXi7ZWLH9ffsW2bGxZarMjnyrV2iBF2bsNLCJhNH7DxytFuFw6jFiFXnhvr",
  "key4": "2qqo7n6jijaMA3FzicLUT853nSGy6B89xrAFBzZYBLHBhFRC6sZAKUeQnuWK9rDJzRVShEBLBXJPnoRM1h9acB72",
  "key5": "4CdvxEAvgKf7zP6EsxjuX63owUQhWFzsEGJwysdtFzNrdiKxLPiqYN4139exfQJhZ87Px2PKFqHrC2WERj8kStpy",
  "key6": "53tpWoxAAfB3s6f4BufVLpYSCEWoCgAsZqBeUyCSqMPmWuc5DJPmnswFBpriZAXLM9TeEEVJURahi9QpnaBCD4a5",
  "key7": "41EBdqhddaRsNuy2dLaC2kJn69qLABcc22NVdcnM7CF1HhFAL8raPcCxo9fLi62cXjJyBmVjEPB9LPY4ihTQ3rae",
  "key8": "33sTyqKw1gK3pT27L5rTnx11u7u8CJ5iQmbSmcvQeaiVy9enjGzxHtopFwwUSHossRERGRTTWhU9mJtxkZvSfAVJ",
  "key9": "4jaz2mUney3ZGW8sUJqCB3XXQ58qd1x22zxbsqCLdxG7pxyGzytZpoYERZt1HseJtTA9n2c8yrAUvD3Xg3qvEtyv",
  "key10": "33wMh8idf22Dyg98NiycVsbpruMKjZ7rgrU1dnRLTbmuFvCMHNGA8sD85N5T7bR4wVj1ppsUMpvNzg3vRUC9k8o5",
  "key11": "48AVcJP7o1M5whuiyBgMW7BBxKMEMvabs4QUGWHvziJszPqKDTyWtGve3f1vpgx5ue1V2XdJS9rLJyZXFmn1FuP4",
  "key12": "4xq3cJRL8YwRF5WMsTdjxZV1whazeGMhjRjUUxkWHj24nGzr2BB96P5UJp8MdAFDhBRZFoNmJ24ZM7yhect1AEpU",
  "key13": "2wyVSyw9E8ySjcgV43K2mwovrjRPG32kA7AtHv6u2U6CqCNDA1KZG7Fruu4PGhmMaKASoRtPiiKApkXFC7x8sXFt",
  "key14": "4ZtQqnrbB2Fs1XWp69Kbm5CHmqBEsbQJ3e3BZyJTW1KC9bh5qB4ufGy3pSYY6sfwWCjbkX2pePDEhgASVKC4KMNe",
  "key15": "26yRVDNJq9k3BChhQdi7ouYJeaMJZrAdq25wJBhejyRh3xVCoYyYxHQkwfbcaLgFVVy3zBtTAAskdoWxaYiZrszc",
  "key16": "5a14AqWFZZfQoVV1MTMYJbqWGXE4pyYAEzBopw62oRZLcuTqdUapfFaRMzJdrv8SFVAoRqY4mDrs1sJpfNLHE4nM",
  "key17": "ihNy1fdsKD51sNAwXdqo2r3AuFGEDxNxiU5HJ1NFaP6aNE7rx3Y56wvnTvX8da9zukGkiSUaPjCSDqdJuVjdggU",
  "key18": "42zQ6SyUC6ZpAeUQZzJXSfGnoGhf7DFTQnvxL6NVHHFbH8QqTrBuN9yzSVhFsGeycmUxPZ8N4wQqohu4ayKYrHFA",
  "key19": "4g37ZGy4vNyZ4gkEDuorE6xKZaBj1LK34wPnhmFJPL8ivGj7jPQB4UKi4JX8DFAdKRqLHzA2kbCgyE7fWKjjvwib",
  "key20": "49cTvoshy8mBhusn4daJQqTM3ThCEWwvQUUCHRKbaBo81XKpY3U7txzLot8LqAR968kp74LsLzNVbvgpM9bXdN8C",
  "key21": "2tCqsxsHZKCFzViaoL3nmyAsu5L3iPRV3pESgv4BvR5oJAa9XWvFZLtYRB8f6w9yk178Hn3qHQtc5MbBg3JrEpa7",
  "key22": "4VDkQHfpKQDWSVP4tgZg6GfckZYVqKUmXdaBrEqRrhpDdgL33b7Bcmj7dfa4mcUicP89zHAC4qeXU4Z1t6GgFZSo",
  "key23": "2eXKXCqmsfLnKXysKz2sRHrHGFkLkv5ZiF6TdoxFLbZHXx68eHasg1S6eRUkmu2f1PGrDe4tZaA88vN5jD3XZQbU",
  "key24": "WEp5UhCJ4Pvg862DJmSdf4LAi4icGrbW1FJQfJvve13ETt3GFxZMi9EAyPCvqqwGtheD9VXF2rEpxDjD5wwLEor",
  "key25": "4tGPieUeqN2wEJwV9j5NkzjE1ckkan4nFsRnXVEwnFEYuvfMCScvDbXFNnorX2wKFyWm5jhtYi9bWirVzoYDqBoj"
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
