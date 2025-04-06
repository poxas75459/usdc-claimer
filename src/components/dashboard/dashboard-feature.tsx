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
    "48L7D4pMMGbENzu6Q5h79RC1sVcaxp7XMPTSnqYeVJ8mXUyhUUW6arPAfwqdXAMMgm9XDuGyZAS3Re7hzdyJ3JFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdjRo8odwQbhzvaNzQWRWbq8VcqPvtf77gQiJk7pa56cXzxaxqjs6XhofXa561Eks6JZAsExpDHskLS7RmDY6ZY",
  "key1": "3EKEgoQ85UqX6Keuibpw34jH9pNDKshPuyuJFtmPN5FpiQ6mQEqXApQopGEHfCqLMTcio4WDxffb8vT3ZrGQxdXY",
  "key2": "46458KG1Ph4iJwt2nGoZboohxhvuAygqv7evPHf6qVEoCvj6YRuJKJ3kki61Rpber6dt6PsL8abdefc46jn2x3yi",
  "key3": "2gRDEwpKJkK3wPVxCR7y2PBb4Jixg73oRBbgSnXzCqrjj72c9KvHPnN6Av8cTgFRoirxYXUgYhhogC6tAxySR6Eh",
  "key4": "Ap547NsQWTKnGn7dSb3vfEqEN3Pf4JYDBQdTAftvGTAafN5HTKrnpMPQ4pxXu4Wa7iRmbVt9HZ9AGZNM3jqLxpQ",
  "key5": "3nLStBWH1gCBg4Aqh9wFodtKSZjxncp5YcGyRWfbLWK5Lvwfvnw8EkDnEK46g9Wp49j1wHdi31rw4hR6b4K1c1Sk",
  "key6": "4jjQgD7pjFFHVAniyGeGspi3GN1x9c5sTNAGwvdQgMNaUv1LG89GJ9SLko3cnHmWJFrMErq1HJbmu5Ko6ECxBr2G",
  "key7": "2BBxHvfEmNDnJZAaB53LaT5cnscYLWQr7c4aXWT5fSmKY7uGv383pyn4Tn3YXE56KbFer8C72A5JSYMMxsQc7n9a",
  "key8": "4z1GdqsoVdqXcEbsptzPGm1DptASAAJuRCDoaxkc3UofzbvzZUi1RcLkYtM7ZHhQN8NaU6doGWmWb1ZNRRZg5ojt",
  "key9": "4LbJRw3Hg3JoqdQ5p66AwknSyLvWLkWRdLBkbdFHwLV4PmLRPffNRSEDYrNx3De2bNkbMkH68e3ajneTys4KoJzo",
  "key10": "5iBcS4otUuX2FTTHs9wPwAtVQkJcdaWRe53nPbJyGAodGKjvrGWBw1TykAQtT7duwMjrTV1x5uwc8x6z5UQSYWa3",
  "key11": "ejrRN7jnYsDapsTgvbd7WH6v5TU4poc3RQUnKehjWaxkUe9YrVBYSTpSESM37nnpckXDMfycZKS3EFUixreoJ8A",
  "key12": "3ypSyGLpdjPgyg3eDk9ZiBViXefB2j3VTjYk2UVaxGyBNKGpA5EuXPyUkU5EzLoGnJLtohdHo33r9L22WYRjGW19",
  "key13": "5ZBnJsFxdcGJP2QKHo8j28tYs2vUzWJ4cBWZZvskpSiqKR4eZ81aVSScydiK4JovqSciiBZdVBoLRgJcqEzhQMh1",
  "key14": "GCp64gs48Ftdngrv8KnCyNNd2NCPqLcTJaJUSRemG99N95FbBY8QsMJ7oFtPhKr3WcqLvBVzvSoXpRvjLAxBbsR",
  "key15": "4s9iBbxyEUjNA47AK3ghdPbaCiNfM6GZtRkqiCfS96WExoN7Ma3hcjbh7hHmR3GLMaRn3cGYxZThDzNsF2APA5YR",
  "key16": "5zXKA5epTr2AsJYgWvkHh6fSnxvgS2SPdNUsfP8UeXKMzs44K3H5UGyJkk9ePeGBQBKFjoeqXGCe3rhiV6HFmux9",
  "key17": "BzojtyCKEVDt6pRbp1EpbtsNdBuTcrA5V43Uj6yzen7kHw6W4R71zreqKzXViUeCvu78PE1SF8cDXufG1Ds5Yvr",
  "key18": "2nQPo7xAZPWbcdkedtJNYv5QT9sPpKW6xCnnehtQWspn1A1BLZLAb6DnWUSXjc7iYYCb9nm7xjoc618bgSQss2TG",
  "key19": "54sWhdBMUP6bU2ur32auT5yrqGjSezkVpZrGbHMooLo9ifGwCf5sNhMwu1W8ftYhu1cYLp9CSqLzZZQqftSNT5ZB",
  "key20": "4r6qiZLPoEd4Co8wDySwfJRvABc7WVMu6kSZUf3v9587REi2ZsiVQHQXB6XBeTZG62FJodC1A4q6aMPhcECmjBsV",
  "key21": "75HNhGv5W6zWeJReAeko4zCcVAzYtMSBU3Qs3fKLVoRxK6Y8fHKdAB9GHCt5FoQBddTVt3jfrtFzhtVPD93przJ",
  "key22": "2bL1CD2aS94J14syp3zpHyouXnhEpRkrnkReUqLc2va3F9NQhQjvgV6UAB24V213DLYdqWSc6cK7qwqZH3F32SLQ",
  "key23": "4zsQ4UnMiQSDVjnd3bpa6SKDNSFiTS4HCmwp77zNvCBvWkQHdSfxa6DA17WrcG14PBMzAkXPG7WjbjaK2KhE8hYA",
  "key24": "t1GBNXXxZTf1cqa44eP98Yh6EsZ5vETjLjtzjZnkKj9W5iTxbT1i6JCk4kNLWAj5tqpRXeUYYt7YARCQTPtzhYq",
  "key25": "3UKc4WYdokyEAGtGoURFvmgfxFsxX7FfpUFS9y35ZBpJBDD15hPVh4HgMGTJ3v4Eq5aGapJiWUhBDvzgqLTbxM8B",
  "key26": "33tTzjCRD9CUEZe5z5n3mDBcuRzqUDN9oGyvj4rMocrDtjz3YoW5UJtPkJj1ya3EPtGAWJYyVTXKrYoKqHXu3jPq",
  "key27": "4bVab3xWRhbgUU34BkELVtjiYMv38ec7umL6QCVYotDLhv151nKxVeUEDoPrPWcajFXLgyiQXaod64qpyEfuaqeg",
  "key28": "2oTTkjMKA9ycy3yMrdx5FQ7vHGxbbCn4KwfRKauvdWTJbvsk78edsMTJ8yRG7eWcsgvbU9QketbDeqJwfQ52dZNW",
  "key29": "25p5p5YY6j9zYi3pZ8FfSoog7oKZMukKzz4TPwUrj4a3jRv1VKctuCYCAjRZFBmevNf17ivLbi9KpJgWBQbtXMua",
  "key30": "5ftwnsXJonpyXbJaKLAQMuBTo36CeJ3EiVq72owRRCXfqjA9JhB2JayJGdWkP9znC6hQowb2TRiGU61jkbyWSD3d",
  "key31": "2wdgLzSLkvYe21mwN2oT6WCZC5oSWyD1qSrVUyZT52Bu5nmmGs4A3SnwDbTmyzHSL9eWgtTMRX3o7M7G6T34JaVi",
  "key32": "2VFwYYwpvqDYbz1zZ7KnyZFqWNdUHVTQQQ8yiGFrFxHmrUDC6VeAhg3k7Csn4FQaVUXuM2MYtf1RDKt4eEJp8fGa",
  "key33": "3ra88DXPG3AjBazTA5McqHXp5DRDhnbRG1EEhUSKhTWaPhDP3g8KBDTKRR793a6vbCAb99SRYMvkZuuDXUrCqvKq",
  "key34": "2bHFXizVVRL8APa3c1AqFiuEVEbt9t2895GgjfPQB9wuRzhoZAhAThphi5XvHwogGDwSZNwfnc5W49dFBTnHJcwx",
  "key35": "3xn4aEpNdmcZhduHbaZDGgvXZubv4skyxqRw2EHH9RJAXFGf6sNcSTMQe5UCGtkakCqKq7jgQjwPF2aYR3UWddby",
  "key36": "57oGHiGS9ZAfjE32FkJkj6DqTDkauBYv9gr7GbVpwfcnzDWKcYLYamkej7Wyrn2N4xw7KYP19t2wP5MYyqXsvPoE",
  "key37": "5bFBDLJ89Q28DCirCJXXNJUCcmVrguXPot7ibxWwN95uuMZAB2RV21bRGN1ugf4E3CovucxAB2SX8h9CVCoFcJTa",
  "key38": "66vvVnoxpKxuiJgMZVHYFNzXLZdSSmxNVxXNGwhTrnSDgtMpG9uhZMrYdT5VJq6WURcvh5vHuRZdjSPq1YH1mVg",
  "key39": "4yXaeKAzQEM5YUk3AFpgEReugbpZZUREyQdgnKLmWP5LXbuBg8EDWcttRx17bL8cowYvdXCEWuKXFXCj3xhxD3jY",
  "key40": "2kSnYGFoQJesCFFkiXFKrm7JXLKNYsCUnb8xiNetZMqsr7vCND8caEAKMZJ8PSvvqHXnrkpjKdffGWMg5ePNz3bz",
  "key41": "3mPcbC1pBH6LxuaDKSThjktEGsSiCauJwfSjQwgQhpVnCgLncz5zjybcQQPjDLEceEQEHAWxe3uU12rDDeVHEKrE",
  "key42": "5Wu6649hxBrHALu3jybwTpowNovB8AqcEpbHEkzQTv9MTL6EUQxXzwDxTjjFf6T7nXvmT29JffswgBaw8QLpAdd5",
  "key43": "3V5zNU9qXdUKnCL5aPfpT6byKjEi85KznbUfATpaY2dqmtys9ecTd46KRV6VAeXGz5ahB7tpqhL3ed2vXeiHLDPJ",
  "key44": "3Jwqwawevn2Gt84sBUQVA5P6yszk8hWwy5zwTcZCwF95s3YBauwFAPj3XiPmt6ZYvr5hYSFhMzyKRf1zq3k1JYRK",
  "key45": "kLDa1wyLiqqX4K5qQjgCckiLoe6TUngAkS3AVG7GuVSPzfR5ST2coA5hp2C9rWyz3KatYhmjLEDQEceCnUVCFxn"
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
