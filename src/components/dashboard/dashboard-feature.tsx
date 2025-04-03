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
    "4hEN4nN3pSodbGdr4TVTEW3e2MWUPv2AFPU7EnMQmiJkJyBGm4LBfpqYKzeBFvV6EJCLJc3xmS2QXwCMoW5RZu2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5hmaPCtpSvf6KNaAp26MSsQAjLohongWkE9JY7zPTzk9f37o77vf7sv8Hek3kj5WPC4n2NdC9e1wotFjvA4eqj",
  "key1": "2VhXrnFVAiYW92t7A9epcbsi6HJx26WmdRhogk9JTEt19FXpLWK3GqcRuXSUX7vgPTJpZES7RPQugWWgGYdmR9rL",
  "key2": "3LkKjxqareHnecej8CzGdjcBGSumegXbTkgYTWgqhP1DM9VSXBuhjyUyd4GRG7P59qygA1Symzcdnmt6kiG7Vx6y",
  "key3": "3KVorgR2PV2DME2GMgC3yEKiZRKyLFWR7u8oCLjoAiMNSi8ZsSbm9rCZPCUgBceY8VxZinXaCxgsXj7S53jgDEbS",
  "key4": "2Qy3wDhphU2anEGd3WYortTujUJ8ddtLmAnxwTwJLPa3PFCMyKZtznWKoXbWpg4S9h7PF5azGz4nvKZMLsgMA67L",
  "key5": "rbgxpXDkor81RV6dnhd9UpuKzASCkjK5KmgTYMArG5VgQnvYk7VrBxq5MYiUrkHpr8pasHawP4EFZDRQrAx14hg",
  "key6": "d6z6XQbgYj4o9HuoEufypMckjPCy1eHurPyt6wxwRR98u14q6tXBb4TtjdcjaXbGrVXs7mJTjbVLsL3seFWsPUR",
  "key7": "5Uefedieb35W1onhDZENEz1ofr9QWjyt8edNUczEpBSx5TW7Q7hHeXFjEjcBHP946nuDSq5mPfxBYCSR4EV4vKMi",
  "key8": "51SUF2XX2vvknaMpAZyoWGpofoMRA4diiAMJqDcEzW7752edjBGWeYzi3TidpdmXoxFemKQ3drwou7SLgmZG5iE5",
  "key9": "3L8SpkgTZn7bvJscTzS72eStVjrpN6jkM21Fw7pKnJCopoGvwDEWSGu6cUFGn4nVaJvfZJQ9n1LaXLfLtPpuTEie",
  "key10": "4yATKgtmLmtZ3afrd4sVcaq9MvFAwrcdt9Trv1p4zJH4vcgqMm4RweNpiFGhYPKd9KJ9XQfvKTDmatNrKTT3C6Qq",
  "key11": "5n8bCFZvcZMfxEuTgmCYuLNE86vQP5a8SHadyHMdXUYq1joF8zbYu1QbtBunyb6bacq52hgo16cdgVdxPoLr5DnC",
  "key12": "r9c45x9FejeBgW5DWd7ykagMR6J1cdKebbWik2dvCBvkejmt4RR6GVG35PPjok531B1ZdwqHWkb7NaiYManKSkx",
  "key13": "7DT2pAST6LzRj8dki4hqvuLxvTraE1kAfUQSstEen3on4uKjTB9YKY94iKgP6xcfYncLNuMF5By4yFM3RW6zpvy",
  "key14": "4QwhBUdrFgV6MGjhLejAZ2yjTiCCFhbtzHssjdH9b5qg22kCnX7qVXPX6DR8nQVSRddQQJBZaD3Z8df5TbRkFmJv",
  "key15": "2Bz4VWRwsF6wYf3MQq1tSioKGmtCCV8P5x6aZggZG5u3U6GrwzZyoDQrkZ4Qwcq6tYvsRkNc1Un8bd1sXuE8Y2zr",
  "key16": "31SSPP8kydx3JPtXyVqHydGdxW2fks2vmsLaVNRrTpZZhmj8Nkgwdm8YCUi5WotuWrw2VjiawUXjx1xb8debNUJg",
  "key17": "5fBKv9dGYAD4W6mxHwJHUaQAwwRydLZr4Bd2jnq79VwcM6uErCZAu1CfyKGaAWoj6LPGGxcffCg5mTGMw4eyYfth",
  "key18": "28Tg995WNgUzUCtSAjHfV2U52rC4edYaoT4T4DmKVa1hTcuEFcoDkWXzhTSE4peNja7Qu8W34Kg3dj1YChCARqWx",
  "key19": "5tBZxwjciEPx2SuFHAPDubZqaAqtMhwAQgrGnJqCxrsNDTPRr8F4AxueS6xojtcXezM5Vy9nyWdGQhP7jU88LuF9",
  "key20": "4tbAY8wsY97aPzNYu8Wza3Y1faf4DQrHpb2QTH1jyCLmiuL9BrWSNmmqitbc9csbHWo2fWN9M8CGWyAFcHwnUuU3",
  "key21": "24ErnGcGgeR2pyWKY3hrm4cvcaPHcrx4ATsm7ybu4AEg23QYziqMvKMFUUU9FJ8FVQ11J5h37ZjSU3XTGc7vBVNe",
  "key22": "wKhWdWr9s4NNNdM9RDXTXdjYvTWWvyFEDiZUMawnneC693dskDhQcwgngDFbJVBxTU7uz5GDafTb4a6n4oTCap8",
  "key23": "53D2JFh1HyHuxmNHkFihvYUcYLNNZD4QmLAmJwkdfLfq1mfAM57fFNxBrKms2gd6bZf3gKeiUyC1uVJNGrfFPkTV",
  "key24": "3QRJqyTb3odPhKdG4hAHFkczo7MUX2jP1BJW8CcBR8bQ7LzPqKU2Tyun9Jm6AirQbS23Jxq4jHfUa7VFzy2rMqLu",
  "key25": "5g1VYjsK9mHggM6uasVrTBSxAUeWkfumjPz7iqvjcrf4CVH8Y8T5npYmohaqNhYQ8PK19T5djPtjPW6BgtjJ3y64",
  "key26": "3QiSiyFqMU2ejEj1suE34ktqNpiYaHt1HRkSogohYQtp6pn9p7YFYpfRorzAUym4Nxbto5qUT1y9scZZqCe6n1Eq",
  "key27": "2g4DoLUdP1HPZ8gAnLAveUPBiYRZFfh1Vygg3sr1eFVFfyoeWn8exAanFmpByvnJ5QySNK5VreKdkiwNMTzR77jY",
  "key28": "3TgZc2V7tsEDSCoLrvpKRDZnZgA2sySWRLofwzhtMbJU2bW1NTGwgmohuFTYcyca3HmVjn8PuEQefFn4fw2c7yaK",
  "key29": "5dEhfzhQt8gJf5s2fxYwpAofYtN9Pq4canXdjS6hXtwYuaAjWVVWvfmf5argWQjSupaMt1HWjsiHZ226wrHvKcvP",
  "key30": "2UqZsmGz2VXyZUjtLcAmCUoBaMy5oK6bQ9cLC2oepaT7UahPEJXe1osm45D6jJ2Y4shvwQJx2kruCHBizpNjX9Hu",
  "key31": "5vGFkQQco8tqDN636MKnmvcQLpvY3NoyDC1p2yoV2F9p2L5Xmt1PCrka2zVFfHQvjmMjXhJSqX8ioShcPoFJ1wKN",
  "key32": "2UJAH9sfcDAPJuYCvpugJod6V591d6oK9qikVXUDAbRXQC2sKjmRmKJWS7dLQ1gnDgofj7H6fm6vkuYcf8siKzsy",
  "key33": "2P7PRtCNKLaE3u1cVZopd8pqmBWSntj5KUSAHWG7QPGkkYJg3q8UefAyUGH5oSPZzecPEHkDnPCLomZaJ68TVzvj",
  "key34": "2GxbHSRxSz4Q4nqrkT4xWahRupBPL6k47tStAyA6DmzNZSRX9mn5XKh35AGQhAYTDmfbD59gXo1DKEAwNh1KKUgx",
  "key35": "5sBJBiGcuEKyNcD5Suz3n1PG1J2TvuqRtQhedx3UTK53JRTrGFCBJup8W1cuQBnNmUsmVpTnnDrhfeogGjxqbfMy",
  "key36": "3D4RdDJGbh3w8sNL3ekQcDWvNecan5cWV7vEwMPnPx8V7rp3EBfPFpo9mjqAMJoJXyrjcxvaQHmX7a3sULgKPXr2",
  "key37": "cxtnYtgFkXjw5zXMkeLQp8gU2GKTrEsLjiRsGQjNJDAgsKviCnfatvAydR93FGGQFCL5EPTbfWXjzh4UvJCWXzi",
  "key38": "42R8BSWZrp2vKYad3gQqSaCGMN88RwmVh1AtNra1cH3oVn5uTJRY2xaXvPK28Da1VPBr3MUDCmh568WYxirNafMP",
  "key39": "2RHANCr8KA7esEHmvLEMPTMdAycY1Bo8AuFEmidRsQdFYvqRtWCu6YL6Da8HMFJkRBvUmgFZzJwY1qFWPfaYcgv7",
  "key40": "2MWTwzh2q6WQAefSYJAryYntPdQFpUH3kHfTw267Prrez6AJMaa6RCYV3GhmYL1qTv9QuJVbkFNBhrU9UqGU3TzS",
  "key41": "3oUFWXQLq8ge8U2mGfovw1hQWcHKGytJLtyekRMPbZbcATXz3cFe9pD8KHcJbPV4Ati9vW9YiHdK3D2sxz7wGEUZ",
  "key42": "iRCd4tMBvNitrobYBGqGcqBZfRXA79URk72SBYfjwunCC4adi6oFb2XBAvBViJKvRS1M1Z9hhXVBriiUByZ1YW7",
  "key43": "3wcBMZTVPH9cwey1MrnxUNLLxdkthA9aNSQrUte4wQyUbSv2D6MMaTdLBcsmXcYMRv41Vw8eW3UMamHDop4nKjw6"
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
