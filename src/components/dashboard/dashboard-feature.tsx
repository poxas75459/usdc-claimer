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
    "6RB2oUvdn5ccz99MTGJ7RiZUn3kVjBWuAYN1r1nQinWbYYptapbKTh1K3CPSj224KtWic6MouN1z4R23shmP76N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEc6TjwTy15axhpysZ1Bi4MCPMVhtqFmvKnZt58TmxVwofee7LtKbsspidqx8GvyygTBL8jyaoDRSQPJQeqm7gN",
  "key1": "kJab6CVqvqro7M5LsgaFPogW7VenXTt2w4oVCirycMVRcq43JB1Twjr9HcJUu8mp4nshY1c5vUivEzZJvQsEq2B",
  "key2": "32eUYZikUThzYBj89qjhVKZiiojFbzA5NFGGpEMmhUrrnqb9UL75CrwyKDMpCK1TdCQFCj7BzV568fZtKVLvdLkf",
  "key3": "4yLALVspiYxSDZnYNyo3ix6za1yzkeiRUEy3fARvxjsVvZ19DdoBCpX3sp8RKU7hQgL5EDbHebSd49UisHEwHSnc",
  "key4": "3P2AWL6kP1sJkBa2RMHKfEthkMAxzPFfAmjQPdoceWTqAooJ7a96wrVA2RcS4yTAJmdV3XGZahN9ryRptn92kCig",
  "key5": "4vPkecXUaV8cvTE6zhLcpBRipDWCxrEFmaQnq7G6UeYorv1xhztqh1cDKJXt9XLJ1hcUxxBhDuNSALyLu6up7RAY",
  "key6": "5G5gZn9d67BsBgFE1JmNjkP8EbMx1hnxUgj8MNYLEnWLyPJpiPYkuoSvNhg4PjnUQLmyk17BhRLQQr2A5pTS4CsU",
  "key7": "2Vzfu6HjCEcGaBirBFoFpnNJMmQY3MZJ3pdhwhix8ZDLyoeRf8uLwwMX1S9uzJKR2Xxz1NUqcDRniUv93ARA4qWQ",
  "key8": "3YgsewsubNkMWxNW68rjCTnhmVeLKDVVegf8bMJRMy75AwXNGPmbPXS46Lowpa619aU5SCLrk9YXBpguse9MbBjV",
  "key9": "3fQLQwejTeBuE396p9ysDVPxKoqD6iBkQcLbGxgtCQb89sA53UuSwPndaKVJxW43S1oaDHXurbQpMatAB8gjs8ie",
  "key10": "fRF23DcWRduDLsCSu4EtymDJvmZ33VXfKXPR8xcC9W1Fg6zaHBtUe6ArzUH6Kv8RcCtEgBwu5pHpLUMmDq7vitj",
  "key11": "58iDDmdh3qZjnQueYGz33u8wN762FwKv1jGuBYqNaq1sNEYexFGUGrAuK85HvvfKUz2HBpEgeAC9smce6hDZyYBm",
  "key12": "3ehKSUXdoFPzhLo2m4s7fib9vLvbxtbNqzfkpKcfPzERDWNoLi2WmLecVegc5cY8pYstkEDV1beup4wA2MpV8418",
  "key13": "46pqJ29fw8QN4o4meTRdHL91B1W44imL85gPBJxZG5gVmj6HnHuzsVgcVM5p8T4EKXGvH1BQxet3tYiY6Vq2EMUC",
  "key14": "T41gvw9yNbL4YsZfGJYC6UdxDAzvxdzMrKVmnYqx9oBBGdTRE75yrvhymq1zmeafT9WzrTEe2wwg3CuEJPSWwvj",
  "key15": "3D7oTmM1hT6zhCKUazcwDUBXBDRRtwKiYQHMka3jahG2zqpxHHcvfWRhQ1McoohNPfvmKSF4E2GpM5KUgnz65DAV",
  "key16": "3iy3GwXrM8WGdvG9wEdc9paEdxtV6VdDiGvTydZrPjvFq1E5X6WerrNrC5ySavF5zhAgknX39kJFcLP4oELxZ9UY",
  "key17": "4N1i9mgNAdVNWcQkXwGPPmUMGtrtQWMr6MbG1nBkXYJ6NEZ1HWz4L26BrHPuuvMrf6RtPZycb9dUJX51ipy7tABa",
  "key18": "3QXQmhyePzXUSuePCdVZAF3gFEy669K2RumsSFqxTH9iae6WbpwyuZU8y3yN8MDFPbtCaSU76Seg3iNNTsJvkTrV",
  "key19": "4BevKwZKeMBprJmT8ZE8jw51DqKBpZX5CvVTHghrqiigTzT32z2Yq3Kma6dio5ey396bARnwQaVCT44a5J7pdxZy",
  "key20": "vLVusEhGVpTAz1rxZQSq1od9tbTCPWYx1pYk4dpzwyXXuSDDM4mG7qX1J6Yc6J3hRrtcEhQKzfkwZskqYsx5jMK",
  "key21": "WvSpiZiQ2g7zBmDiSsrG3PoGgxVzse7JnuzLSTbx8ocbWD2SVYpeAWzUojvfY5Ps5M8wgA9yiufDKGPh8qnX6Pb",
  "key22": "5JezVN4VP6cX5ZdrFdaeR3h4B7YsmNsBTXurJtcDAAz1EzrLJCYLjoGuUAkgnMDpg3yas3Y77ZaHzTbCsfjkqvF9",
  "key23": "5aygWGMzjQdD3NfFw7HMQeXQzJVDRudMWJRubxHDFFf7Rq5gi4c44Q5Z33Xo6SYkzeArLfD9m5SXEm6CveTdrAu3",
  "key24": "zhj4GArioQfmSxaV5WCti87opQBo4Vy8WGggioD5r2EqSTgbYhQTEWe1C1sfCDskyWMbXuDfXSVf9jKzxzk83GM",
  "key25": "5XfZxyTj3XyouyoH9pyPsH3yMLcf3ggfTmj689L2b3HMo2panBHqSac9ggzAuwar6cD67P71aWMiWEXjkw2DZGV6",
  "key26": "i1EVhKS9fYnS5Jcichhx4YKCiJTaVys164zPuvGix6AdaDxy3MejRfQAhmJq7pEbpadUFZbf49D2ocaiuzHGMy2",
  "key27": "48ACgkSgkdVvoD5xtBW2rPMo2ag7Kn4Pz1kfAZPgspnG4v7LpJYNrmwwQDKQAK7rQXFvt8p11oehr1j2grrEds8h",
  "key28": "55eSh8mEfV9GCrHdLnUzR9C4QNzAE4mXJLXT7PDV9ka2BSaQwCmyEDpVBreBDT5pnVk1ACBrFJ5jNnzYQk2H2RTJ",
  "key29": "34TDBinrq5TsjjYb2QVDKhiCrLUuVSWTvuZPngoYCMSrt5ghmWYv5Ai3zkr2TZvTcn3SBXCK7h35kkfm18aDMnhF",
  "key30": "2w2jmMkdDoyvBDjEphvzE14eFPsR9WeubgarQMuQNvPDyMFoB3wSzpxjDKovcp5bMAQaLZKvTDyCKmA2Ke5jsfQ9",
  "key31": "5offuF3kCrpRxbGXQU7KkRFsurisNHJF3f8YPV7ivYyZQLP7Z1cR8HypXRyRTz6RksQHyXqcLf1gqdCXzMARkZri",
  "key32": "Gi99CK76HHL3CA3YUWfJfHPcUFvzpQ6u2YYXXi29UUBc8ZHdR92okUXMmqdGoKEYiZnd3NYdp8j1na2BTfWsra2",
  "key33": "2vPYQXVAV6An85K2ekfiGxmnfWx8eDqf23SaB4JvLoL4CMHs34KujvVit2ro5fJHJP3tJLs97L26timSsQkJE31d",
  "key34": "3PCNW3TEY9U9uLG7vtf5zbFvapMWMebGPH1pTAXnDHZ2ATbRaraiCA6fKKnkkVW8xRsKh8X35jyCkV2UMXAPdHRU",
  "key35": "4yQwNP4W3SQ8VJGFPzHba7Lgs4SSDRZPvPHrjfJy6HPbzayxitxxVQtuH8onRpqwGL61MxpTaietiegTBkECCV5B",
  "key36": "LbXGUNi5VYn6zYtUNtCw77XVtpNoRbSKjaGgns9Gsd8BVWthz5YfKuuUd234Yxw4e9UG4RnteYUniCJJrewgGqN",
  "key37": "2cjaH4jxpi3VKRFXyLA7zauMSSXFmR9MGTG4f33PgQDZSKYoqCh7T6MoKmHqUQdLhQXHREimE3YEVr4mhYEVT1Ex",
  "key38": "qyE8ztcyPr4NtjqchX5MiAyK5sSkW94RUT3PDWzZtE5HRjJRd2duRPf87u3ri4FzmpSSZ25UAX2jvrCUakDBt2P",
  "key39": "2K1JqBF7oBhXpPS9m4iPJweSo5iuJDp9mgyy3k1S5E2KAX2FXiSopK2kY8wSBv5JGApztarQAWEecD5DioWQYCP3",
  "key40": "RWav1y2YwAEyMh8abJCVuPqNdRmb3HcpAMWHAM1a6j8fe8EEtFFxWY3mLSVt88AJzskQA65xKWF1LSs9zDpfHQb"
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
