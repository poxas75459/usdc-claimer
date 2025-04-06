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
    "2MF3cbic8EYP7RGfmKaZcgsMApcjKCXEHiDk2QFAc3kQzRXiwW4Wer7zowdbGDu1ujauVrZVUZ8a6ryFjcbgovB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GCLAGinyUydbTxAVQbDRcwykTaWDfqgW11rQpauG4D9Br2dipjwZ84ujFasMrCQcvoXb4BYLWPbjKugVszgENd",
  "key1": "2ZqXrkR67p2ZeSV6bWKbwvRN4qozUJNBMyhitpHbZYNq5EachiK9aG2YfoQ6A5puVdtLHEEapW6idgiCs7gv8YfN",
  "key2": "64yzfoYfd3MAfYaa3VGwZDjNRdety4QwJvnLdoVDJoGzXmAS2Y6khFnZuAP4y3LLRTec6kPJsk2BFgRRyZ2mUiRu",
  "key3": "3UYMqzXRWWUebQZUqMMgcfE9EvCzKVvLwViJuP9wtGfPk4FtBqdsiPgzMvg5SznYob5mxPYYrTB5VtmEPWjsWZqW",
  "key4": "2ETFqLeAVydqsLsTbkHoeToXBTHPjLCidKKTb5UoLJFTkUU5gjfuXRtDUqJCVPu16Fax8m4uRUkySoKSixoFqWbd",
  "key5": "5RxLut5LnvNNtGVfH4nWzHx9zrZW1kRooYEmd6PYHE5C2EAMXkh248U16ektYgmWu4jrtn2b2mbcPqYhEtN5Ewnu",
  "key6": "1cETgyRxyru7AQ8kmc9EXUsHAga3ahepRZVPNjUCjXVaVhdDuCJhpet9WNeeDiEqQbPiqZ2nbkKgnh8NkP7Qc1A",
  "key7": "A79V8qe7T753k8wKSKy3ZiCMa6RrU7ETABvwDfE6AsKCjH2RdkEq1NncZpvqT7qjUjwJpA5KtyhcE9evad7JdaL",
  "key8": "4buaYPmiegEPCxX5gWBCh6ZmxcPAJhxMJguWfBbLLG8VMy7ogsZj7Xn6WTReodUZycXDsP7zUoJRsDmzWC9oHg58",
  "key9": "j47ctSyEmCTWzktoJHqV5CPn9r6vGUem3L5aj4FbLgiiyPr8zrxYPEzR2P9SWxuu2qF43N3sw1gqHid4a5iV5em",
  "key10": "5kxuSaRYRkrz9gumqzt5cksHQTUaGsAH7BwV5jXeRKoXmLjQkQ1Y8Zqsn4GCbisA8eTutHGVE1Sk6UpHuup8CGed",
  "key11": "3wQ6HX5remHpCBLSqCGqub5Jr1cBZAV93iaiFRfn5kSDXq1Wog8NxSgBeG2iT4SqPHK52AQRvYFmdeG5xindYC7j",
  "key12": "4sJdYPcCUjb1NQ77ePeNNAHRpVqSSVoJYQNPuG96tk5qrEtC4JKSsUWmNsSzmkTBsxziY2amg26TvfMzYBdR4Nk2",
  "key13": "3S9eM6oLtoXv4m5MEHTm1LxoUKdCVA23puEceTE269xwcdUPWWF7eMJQmgAkqKBeKk5UR1uztrespScpfHjRKXmY",
  "key14": "fifQEDZXEzMwqErZzacUfigPoXw3DPTVXgsf6qNEqsduxZmt4wpg3X96G9Jpk4yrkpD4giGtMRZENdaNCegXGSU",
  "key15": "5EmNuS6S3Tq2AaBppbEjqztGmnRgZ4DiH69fn6JmYveWa8f91xzMBh4cmjSo5XcxUAPL3gWwQMn3dDak1BZ7SYKt",
  "key16": "3b7jQ69qUmnNomnS4DYJQEZx13rzEzJwfPMT9DCSFWUQVXkB3WTDBCpXGpj2NGFR9EsyEXgm3JhyYJqUuHW5qDMC",
  "key17": "5sNr479sWhmc6K5Ko2ZxQuSh2EQiFRag3vfc6vXBMoTbymExgmnZ9kQ5CyY8HNgx4PNW2Xkak2PmDvffeigSPU7b",
  "key18": "5V6siPanRCUNS94iCpK2oXtji8vwThREeyQ5nZRWPEKafJaEo1DBh7QBSjGoQE3WB53Y1uYrKd92exG2UDnbVAd8",
  "key19": "4P9sTqb2qrKKTLmqJwsiFdQfWPbbRQ16Q6R4Bz4UiyDFZsukBhqLxVBoYvnbAceQnfcjyE7aQFJxg237W72ckFK1",
  "key20": "52TRaVGxYW68XjhPwMLBgJZ2RkuSG7V5cYEEw7585FJHeUzRJpWpwHG53JLew3Nnj1hySqRGBNAzhfBnV1qgjjzG",
  "key21": "4rxRnpduMXhoi9RosA7FFSYu5FMsYyJuwjxCBrPVkZ4Se9o9AzZzbqot1ZcsyoAfkFw9w1bMJssGrRTmc5kQBjkJ",
  "key22": "2uA2JMgzL18bh1u4xLBdfLWRWcjpE78rkCbuAfJjxrixs2tTgZQZrZ8cefPWjG5dDHs2Z9hwuQEdB85GssnZp27x",
  "key23": "4eNTxSdxrWyMmDJoAjJFmzarQmPvf5HWm5mVufoSQ6sjW37M1MrBsk6X8aGFkx3BnEy4P7wi14VTMBBUswYgPsqC",
  "key24": "2k6ypfs59fchipSVTvmj8cfptmMGLqB73mxbK3baLxQcJ7BKpWw1Hu2KvHGdZs57nMV3tgZb6FQvNWGv5z1Wb4Gf",
  "key25": "4ccGaQ5QL8qLazxaGHpGovDqa8CmkNfi6tqoHThUz9FrMwK8QUzs8AE8yt9dsM3Lnw9oYdWGVZeTjj7E5M66JkrB",
  "key26": "3z7dMTmkXBUhbfEYb4fTyA5RLc3LqmhR8ZN6CauRC5fnoAxzsfm1931qjjjbDuTBcUgWonjhcUQkX7nez9DTZQzH",
  "key27": "5fTzAWx3GYb4bxZFg7hmt8o9WcrWXJiikS9UgBAbn2GHU4DCtB1eP7URYDi87Uv3XsaUecQ27Gs2NoDPwNRbUc6A",
  "key28": "qmDefsgUqz6fkA5RYzDJfPhx4cAPPdqdzg4yg5x5w2R4dpFYzoruBi9HrtKRESkPbCG5R82qHSPvJmrh2A6yf3T",
  "key29": "3wj4Qc7JoXksmPScoHRztDBkjuz9HUEBhJhwYneChu7dbYwXfikvxs9Pw3MUXReGY34kvk7bogmZkz97L8kG1kft",
  "key30": "28RyjyMBKUeweyPVt4sCGVwmMrp4ffcSXpfbepSk2xfhJNd1MMtzBQqq4vKG3WJwNXQyuGSGHqtmm9zkdZg6gFcd",
  "key31": "3apz49mbaS17c6irdQQKy9Cd8nFvu3DBvyrE14mF8xJpyjfQKzWqHCRYhy7a41kFiD2o2rbSzYr4WiN96cRmrsUH",
  "key32": "2bz4Vv9yaYegK2SUiufc7J71FCujXi6czgU7uT7A3XaETYsNQRtNXrAY9x54rjhYEfoDiDB5MDYYPwvFvbSe6TnK",
  "key33": "ifyqP36fdvqPGDujLq7nbowcYf1goUXjuSHhf3Fp76DWW65m6atHrcePgyzJ8iqac1jrbvVvuQmM7GDkyXJenY6",
  "key34": "4jCAxYM1UizaD8h24s67ezcv2n1nbtiJ85ta9j7w6ZsRrnjUt65FooLkfAzL58mQdKFaGD5atb9nxZB1tG4BniXs",
  "key35": "3okdVQXCiVgnvd4dRvkoDvhnd6gXwLSk1nqW4stHDj9gBuZDyCRbXdw2WQyD4xmfyJQx9ifJ3h55Y5E1t8UAMMCo",
  "key36": "5jykH7Dd3nHp8AGGnPcuvHcBVfVXn5s4qmqbPvMAgFuJmhsB6a1PRs8d3y9pUqvHzPBE3EgWHcyXToGWrxumibmz",
  "key37": "2aZ7sfejJcoaeaCBUb22V8cD5Wwu8woBgZs9zyzRekUg8T4MMCZMo3E4WefaYt1Ti5HY7mqu79v3v2s2rdNXD1DE",
  "key38": "2C2GMZgoXopudJ7LVmkm1iArX5AqSzbArKtfijFFb92UjHHhRGARQyxj5eJfgjmKJkv4eobW4UnaDD5rbDoTeuFh",
  "key39": "58upGremmUSMnraYudWKPtZP44YHEYYPjp1BF5aF1u9gs3GVRYGB5vCTpmAvwxDEF9yxFeEffQ6LimnqdBxEmGv8",
  "key40": "33vejRYt7aa9uh63AgfVjMBej7BDTrwzCMBRA7qUqJy5FXsshkRkJ2EKG5Xa1GEzVRfQbVdqdkxFn9Yh7kCwyz6E"
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
