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
    "qGjRHz35ftxzYDVAbEmfjhTvHf3NfXjYSg1cAW8fv4FodFxsuseNJtTsDGE7Bx8B1osnQiEFM9ef3jkgKGGvMow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sNr2dNrEyHfctYFyBLJpnEbqVKzThr35hiFSY9c1aAprxej1Vn3X7EoU13TXgbzeFAsLypRtVUwWMqT1cAGj1on",
  "key1": "2RDejC3KUFAeGTmuFpmPMaRTojgq2mQEmKdv4HnZ5F7bqDxu3KPwQcWF2j6G7GhPaBV9JW1diq6uq84HnZuvumXu",
  "key2": "3KhJdB1kSqDaMgVsV7n6BMkGi5Jpv3yDTj4gK1ttce4ey6eCiaca7wFdmEPMPC7Ea2RdQWKK6muhsAs75XpDpbsf",
  "key3": "5jYdNqoFby247jJjJmd4dekKgNFU2cevhD8NV4owSAxG2uEVXqS9u5vpnJgoj6QSRaW91HsDtbptnsXAssVHQKyf",
  "key4": "2ZmzWGutiPe2ssWdWuuoCnnQzEyXaerv5MS8XVj8Xk3XQaVZ5EG17Z4d99jwkezvFFMViiwqsLqndSAGcYGixbDP",
  "key5": "xG4bpmb2xJVvdrDkQyiuFFZaqLhkwE1od8GXhRe3aaQsthS2LPyKtov3YcrhmAM8grUbUrhyJijV4FXjeQvxsnn",
  "key6": "5PdVUWyuw8Rrzvx7ZhYzt46ZZuuxtnMFVvwxBwRxRq1XaJbD25pKnqTVDggDMd7F9TVzBvNtGwoGxjjPsBKE3Kgj",
  "key7": "3oMvDztb24dgmaqHffVmjWoP87Usfj6chzy4S87wty3d1t6AZzSCYteo8dXi3szAroR7KRgDvkcF2xij6qahunAY",
  "key8": "5LCdrQgTwmSdwkcp3VJfezfguSzszg4QasTGAUNwWQ6XpaB3nfC7k7PeuGnxL3Dz7TrRRmsif1BgQeqJokVprz3R",
  "key9": "3PgApijBip3d2bz9r22AnEa5LSkLcsr3xgG4UwuD2oQ1CGsak626kyfJd4UmabJugEgVT42YqaBTpDvF8dQgAnvc",
  "key10": "64M41mdysvRdEWBoMreJ3eN6Y9prZpY126Tap6hXUQ8LzBTNbpNsHHw924hb1uhxRuetTPazcoyPWHifs753xJGg",
  "key11": "3GmpsdVUUgr2JZcAuhkvK2Ccu6k8VbHUtn7LvdWf6jAWL9bQRctWMK3ketsfed1S1sGo31g1r4dYmX1b4AEAV3NW",
  "key12": "2JRArZ6CvG5ATM5qPt8CXv3wh3V3EHcoD2Qo6Ni1XXR5vg6FQhyMxwjsFSF9TBhK55RjrRojrg9r4v1ax5t4Kek",
  "key13": "3XD5R4auNkfmrgp6KaJ86u8EbCz8whCqR3piwHDR53NHkWdzRJeRLNHKGgZHv3BjwTcXs4JCV5m1rbvEw6zvJXSw",
  "key14": "4EzKe15kb5QtgRurpLaVATW6RkZ8kUEnW5dnrVD3XdcTNA6sx2jd2ApMSEjGAHKMyYhWs17hNTaa7zzoxcyrGmZX",
  "key15": "etA1DiVX36N8tPfS9KjbJeYk9HX87soZzwJdXdQzvc4CsE9pR8VyhqoaXgaWYn4VPD3Yek6vXMJF3NY1hhu2xBw",
  "key16": "32Q1nQtboiPmrrktpVVFsNqeB7Jmd4UDRKy4642yHKC5Wtp53upLss5vvFK2VSHQmrEr2PNjv7vv7Qyu5jy4hB2Z",
  "key17": "54MvH895a8SgBoiXPK8MPVEnGhQcd6FqsB66VPohTSmYXHuL8Dd3pMAJjfQK4SY9SAsWKbJDq9bDJbqmuTozfALp",
  "key18": "2AxUKyBh1X9xNEpNquepDWAjg81EE5fwevkxmjbS25H5mmAY3FbSYy1yioJWuKKfrEy7maroYfk3GhDq2qpGemHt",
  "key19": "2fFVLdc9dBDumJQJ5UZRNJiUdo52dVAm9JbGQ7xP4e4dwybi13VXGss9YwuAC9Y4zmW3cwWGT5pYuimNUmuhDVaF",
  "key20": "5WXvVmMGHdpR6g7s2boWEUcxJDk4pvDgPXDJ5Bit9SWfFBEJejtVSrMSNYQxEcMsnwM3gtrtH5aQHJhFegvPovdG",
  "key21": "35jTgTNeFDVBofYMXUGPXZBLMna1H9XX5zuZE3qjofwkHti4SCearuCfhFcZjbcXAFtarAoEqk4xvLD5tw8YSnq8",
  "key22": "4nkpncHhQEg8ZjdJFViLmMvZ5V9QmQgci6RAKbsbB143VpVs934ydhJeyAbaNrSf97KTDc5XBwBJZbUSA9uSirS9",
  "key23": "5yXxmqbTfrSW7k1Bb1VpjCzeshjGVAubixifQYiNrnrPmpS7ddGeUm8AXXqqGouCi2huPyi6fyRwTfv26z64b4Uf",
  "key24": "3E2bkbF4ABwU31UctURNmWepTFxMQeonMjDx1ZtAN6EEbnY2N4MiwsEgnnGDjqfimUhnhRKJEi1YdvLVo5sVBUMu",
  "key25": "2Uq5hnxd57V2CXpDreoVFzPt6JFwK4hU6nTvNLJ84mSqwaALtLENmL82WodE4yMYsknakUXxFFXwmbuMwmhEL6Va",
  "key26": "61729ei6e8fP2XSGMgWih9s21j1XUUjFq44Zm9x8bB1Ae8wZ3R3sD5cPtbosWv9kumY4bpAZTZeRvD2fAhBBFRTA",
  "key27": "3GxWNQeW1UecUP8212uprnuXJJKpsHgr4ezdQA5BhngAJkDPNTVsHtAbf8xADFGE5RsSSbpDecQxq5JFDZiYwQPq",
  "key28": "2f1tysTG6WJ4SqpdQzkqm33ze6sr353LCHhi7g8yMaXPnoigX4xCdi8Kv6JZYeJNvuXksxXQkgSHwgrfY8qQmBr8",
  "key29": "ps3chRqYPARL32Uqprgw9QGrnJE7BZNsoK7WnsihrYC52XD7DcfPeYFvUNWqS6N9BGh9eQ5XKaRcs1Chc5kz6CA",
  "key30": "2jGXesjWtPBgr15y42fZf3t6uiJJ6Hw3AgGFgAJ3uNDEQtwdKV7MAF38GaEmnAmvEFq2KT9d1471gtELMmZRQ2nP",
  "key31": "2w1zYcEKGxmWUPPJPpHnL3X3VMzHbTAivonzdyfxy27QK77kgDkyi2N5GM3Sk3jSCBxbY8wS7Vmy5rsdVJzuxM1G",
  "key32": "5CPSRATk8kbuHpPdNthaC7qMioUZgr6LXjYP6Bte9r338XET4bdmmby1VZtev1Zq8u272T93fA6Lx5CoXN7tVdq6",
  "key33": "4r6ijiPY6YyHqQzQaeyNJRU4bYPEgdHCRbxH8iJ3yR7hr7KADkMdkc6yxAJhS2Qm7mkjsPzsNfQxA4n49rTpaYDL",
  "key34": "4tGGEYPZZao3MbPDXQugyLDJes7ucBeA68DxKyVymp9ZPFB8aWXkguAYRXN46nmmy9DgYoVrnk5nP59JZpVcqptW",
  "key35": "59mvsXU7b15SNLTB2ZMfuhcqHH5WMx7bS8xR36sn9CUKadVgzCiardy14cuCGWoqdmksZ7XvvYKRWqLD6FGQ1Pmz",
  "key36": "49JUYzqo1LRHezGmmRViy2EimjRq174foMHcm1tRL8DUBPmA67rnjzcgQnpBiMi9pq7YW8dckuttyM7Txq5RpQRX",
  "key37": "43scBeSSG4NS2mRWukgDdbSuXMm3puBtJ8QTkSFgFSk8RVru6UTzcF63nDtyQ4GYzByofEcdQZ7FZ6VfCJkbbZKH",
  "key38": "3oeRjNAC5uAiomUYB8ze9sGKXWZhg9C9nmDVTsiQgFfRgoyg2emUE1QPJM1fhVH5cRtZcu83rV6QYnXUUZkWvprL",
  "key39": "5W6fjGGvD62TKoqZYFStTAVmSpGcEvSxehFfWgrsEh7KfR8duarxDMK6yvoikwrAAYAfS5rL6JFKNmujEJcf8rqo",
  "key40": "2q68vdwYvrb54WWkESLLKEw2EingE5U1wy8SDeeF8ikfRpV5zDGxMuqgnvpxUjNtFFAmau9BFBB72RGJjfKs1NtW",
  "key41": "2uLrnkNHZbez2jjzXq9jGfoSsnVrHzuPdFfNRkC3xF14QWUbKGiewzYsWpUefhnAfPrPGKZ6N6iFXyegN2RdH6fT",
  "key42": "G3zWfeopQpMBM4LiegtFgFbDy6zTrxGvjiFFzhAyXX27SHzzYYidTk6sCf83BGdmDkYuX1JrN6QoQvHJT8tUxGY",
  "key43": "5yvYpZosUqWj2HT3DhsFbVE6nNp5aZVs3BbVoK9SUb1uUmoaYMp7w9SywumcJUvqKkHbhxbDFbaRCwkpoFTY4CYi",
  "key44": "2kANaTKgUZa6yqnYYWKPw9FNawbJFtmC6yKPcjmCbLJWFWJMBbsBisPJDasAAxFUfXczsAKRd978BX6UsMp5X4gm",
  "key45": "gHLggfhkq3iWEmv2TAUkCRegLcXFECm7yaMWEbVHQvUKJ4VU9737ZYMVGxyhz2yEwWNPVVNKwcpCiY7AzZMuQcg",
  "key46": "3jWHGmdjBE4FmZCxcADvBGFG3b7FkrTjQL82eZ24gvfeL8a9RmJWHinmDRYc6njt4Ldt7MhoYBrmokWeKopdGdNs"
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
