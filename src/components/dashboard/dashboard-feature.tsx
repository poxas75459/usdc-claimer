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
    "62DWDQyZxqum1rqnT7yJ92gNaPsdzPwwJHEwaScLVhrmV4BpFegxEdjime9XRyk2esuEfJWYTk69EWmcjA3N2Q4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38uDUE9B4LXGkbpW8BfrogqCF6ZrvRNeBvJPoLHRpbM5E2FGJYVBWz2BnT9K5WSgrSKKQNvmFpKW2EyxVKffKPzA",
  "key1": "2uLAJ3dCJajf6fB8sepVv1pufxypRfdQtUeXUxMppBDpHnh2vvCxVggXjrKDFgCrLVGV4TGf6iiYgXGxv7Urqzw4",
  "key2": "5U6gGyssCa5M4jpUpXsssfZw6TrfPgSMht7UjYrSJpBXusHaD7NqCjY72qLAJ3Ep6zCDFgg5yFh4rZqvhLqhy5Hi",
  "key3": "4eEqHm3ZDpEcR2Fmez8JEzWnijtXWoW76X6UVGkJrAthdSqo6D5gRanWd8pqXMXL8LMixknddNLhFuMnxpmJ2tRo",
  "key4": "2CtwH6aXKuSARs12qwUetn9fjJQbxzJTC1tkdfsEcLJsATBr2QwQCiVcootCGGNxXUJPvihPrXJqjdMQK4snThhV",
  "key5": "5T6wJYtPfT5yvLjzEAz56gUP4rzQ1CoMpjD6kLV5ffPr5ZBmUMNpsULwkAwaWa8mncqgwg5frqgeECVGMT7dpysm",
  "key6": "5qxVf2M6sCwmwQDTRspPNEpPm9rCMtcZZvB9Qken5ULa7BWwpqwjragwvsMjotfJm46MiULeBcPSrt23BBMD627",
  "key7": "FA8TwwdDZf2cLbrh6w2EAsbjoXJ7Rm1pidsi6nhAnnqwpPX72YkJVpMLcTe1VRJSVEPngUMQXq8MHzETHBXnmy3",
  "key8": "jYeGyVbsMDFWSfm8YbRBSApDPP7nPHjakTdbawdSrQESRNmXx4GbNtqGiqdEKsayf6aKo5swZ4XZwL9ok1wg7q1",
  "key9": "4p33xq2Hcrg4wx2rSwCmFHwgSquKbehe9duHgmNQejGzfjyEcD3zzBthRmVjwCuxEe7At64tViG8EGD2bJsG9c16",
  "key10": "4ZmAoexYNpcg8PJKTEzVh3pFDsz6j6EPwMvam1Qbjdw6wr68kaD9tmEFhyFmg2r7owtYwRxwXZdLhbeg78rmQoXk",
  "key11": "5MdGF3pWBSNiWzUEGGjRsvtPWcS18dTrKzrz1xMjKPjjFndMwVquvmeLTQCH3EMs6for3RysoEzp2DENy3u9TCuA",
  "key12": "5BJhoquwAbC5UHAbmLVnZKWKjfNW5KJ5bTCQHLWxk3b2xuFAes46cnNbkb4hpJwFKWHN5EtGqmL7XHqfB5FjXwsY",
  "key13": "2Lx7Ud9XXuWtqJyb34HCszCj4h3DoSuAxB4VU4eWJk3qYdAgWu2i8Aqw28kjxb9h3cgVoP4G13XfHPDagDvhGuhg",
  "key14": "ZUvkrXvRprT6bZ6ozrugoDpYjJoQA1dtSDtBT2HXvt8x8PLvFjYc9rfjLFdortGR3xwYrE2yBM7FoSGwx89snkt",
  "key15": "3gZcThn4YejGgLpYYPiYw1h87XtoEXzefpHsPmVuWFpcy397YrNxxffh654L9G6c7NVN8ZJqqTZhM3J4YSAGEZdu",
  "key16": "2DmR7dHaSMLqD1jwoJ6pNkSX1uxewqmcbhNQ1zSrCLuEqXe5FnENeCnSGjc7HS5Tcscig9BVk9AJTo5BkWF3n6gv",
  "key17": "3Zy1AnkbwwhkT6imvikcXJovDegXV4zCGzzf7ziwmvERX9R7hYaBTh1gGJta166K83i83Cm5fCEZekiq4Rbi3fKd",
  "key18": "4xU2aYp8HZPYsDCfpceiQCF19AKcggqFw61CqKwGC7BqLD3SFfbPsCSmKuhD1rHNghtGsRicKR6YugaDGXxus1oU",
  "key19": "X2VBvXDkcvmJb5KQAdshSo77JyTxeWi2Lxf7x6J22DpVnuCbqBc1fAuKLLVKrT85NssmmtsJDayceS6HCjPMDX1",
  "key20": "QDqyvyibkLCi1EmMSt1MeN2hrqDkFfcbTgJ3kPdFzDduc6tN29MUywuBt7rtpAW5QVDaubmCN6xqbwjr3SxKYap",
  "key21": "33NNCbWW47mhsHm73Wi9wFgUddCbdPvaXiQTHLEiYotTAEj4uqffBcQmnAFKcaafqPkrWsRsucZogsFfpN9vVgZW",
  "key22": "3HzfmwvTwNpzoAVBmBCYURgL7mdchvbmtvBFPAH2k4nk9p3sndhPT31xYbfHa4xPUVXkgFNNN6BErZ3yqcba4sXz",
  "key23": "3okSfqdeRfTXaJ3HjdwUC42nqLQiLy2MHT7SZaXPhcdan1R6hX4nFZCKmHqwxeywmr1mjRZAoBjUsCxu11m6Dszp",
  "key24": "U4Mg3MKQ1s1pvMnXPEqe2RKvKMoVhGsyyCRAuEpHG2wpMJ2NHSNqpauGe4WUCjWhAhCQgj2EeTZ4Siw9JPsTbno",
  "key25": "3HREoaYnBSSF8sPNKsMJyNnwBg827KwFwveB1rAQeY7YUkozPRwUMp1MKSPybCyYyGWoHb433kYvm6y8ztKBVD2Z",
  "key26": "3A6E9XfWgzDhoCV5ScYxh7Yin1FMhUiyS9unF8omPQNDHvzwDvvhwJBLycM47XMBiNHj36GAbznr31JLWHguYPaA",
  "key27": "2MgQyYhHbZDvitc99CNMPDSGK6LR71tiukPvzg4vprbj7JesC9wU9xk7bEn98GxcUP4zn432WaEsWPcnMaUGE3Ps",
  "key28": "4b8hqNTx4NuvDE4AvMv9b5548ShHPPmnjS5c5P85HDUwwhpWePVp9GeXqTCN4FtAw5eRno2dfMnZaHFAzhteGSy",
  "key29": "2ae2kBAZWRZq5ddJmaPP9Y6ibSiKBRVwyrmq1vLb7odAcGbBKkDAv5b1iKVzwHWFjPd3NBnzpftA4r9XXz1R8VjU",
  "key30": "PB73ZZ8CX5nf4ju2zE1K7jmodzotKHmKcUVadce7cYdjz8ZYtUnjiZC4cSWWTDJUas9EU2Bg7oGqWDA5wCN8p2s",
  "key31": "43RU6f6VJyXXeHdWVM5VnaG5t4Z9LywSKRnuhoZnYRaGYjehT4nC6rdQsTeF5zkcQuszVApgwHRANdkgo8N6UZTD",
  "key32": "5EL4bHrKMuoMzSrVLPY4Q8QX8ojvW79UVLjVwnJQxu4EM3j3KnmQdzoZ3RFwp5AfV6u5AGEwUNSZepwS1Cqf7W6X",
  "key33": "2VDrVwJF5knCocrQLc3732XKySu4wC7sVBVuJ3Qgyk1fuhaUKm9HsF2NaE22H8pBfof1xFZPx6LQvDzkzLsuVKWi",
  "key34": "34KExyRPj4NaJowgthgnQNteYySH1HjnWw5WPfejNnR95Xzf3C55CuKMcAfMq1R7nBExiLjodt4aGHtvpEaWcMTQ",
  "key35": "3EEdJQHW9qskAz6VtR7jWWHt496zG9B448zbGdQUUtJwEtZeMU7yDGf4BbR8ZxsnbyksckxBwQ8BMKoLGUoX5PdH"
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
