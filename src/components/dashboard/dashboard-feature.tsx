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
    "59vmfPdy9fjg7v76DqoDHGM1SW8THBXHu6LwuDvQb1Gr4pu5bo6ZPQ459ZGN6cjjjGkhVmrW8zHbpCW8cFvJ6fr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HkAw4ytmC5NNvDV2EpMa7LMuwu26etrSVaCsGapjXMrSHdzCsp4C4sQeP2hJK5ngnG5cioTdzJXDZFnemddp2jj",
  "key1": "4HxBEzzuAi4tscMzjZmbwNaqrCFdRqsrKXTPV2EVeAxfVQExt74bZJg418uDCMEqgJjBux2fXfu6aNAaqEr4Ji9F",
  "key2": "3jFpJLaqDZ6XbqkLRj29Xf5oNmK4uQGz34oEDcH1FfmUPQGAXnDFw2q3voiFmxEkhtQ17NPH8kzxjQgvFGdWQ11o",
  "key3": "4PnUNpVVxpUp1vgfvybWTW1fU53qLzYveM5zqbPTmxw3kqzuy4aoGfRG1RvdATVhrNh7zRuVi6ns1Xafpg6da6T4",
  "key4": "2mJEXVf4v6Wrk1RFLxes15tFoRQH7rLngTXr2hVA3HYqmxPdmn8zrq68PgGUEShHZdaZyEN9fmboagVcFFABai3Y",
  "key5": "4eWB1KLa4U5pG1tr6ZiXEzuWWm54yfFwea9DtB4z1zfSBLssL5zX1MuYo3kQXex8PrCBpQoYdhzQmZTELnSK6waC",
  "key6": "61dC4qz8J1F3LKVAp1ugShJVSHPnuKVSTh4PdCFvuLpgereJeK6Ar4iSUjPnC6sPxzdfzntQFAWHbrh69GL3Enbm",
  "key7": "3jRUByFrurCBEnwdFUcFeWEWEf28zXpb7yBfAQer2U7os4o8qMtJndvDC7CzgSoTeK7fxZ7h5GjYMhicABY7jX88",
  "key8": "qs3G2G1xQy38mENodku9t34EXfDVxtw9Cn29Rdf5DJnYrmseM6eNHcJiz3djfzZQM22ByD5Bw3CYeFvLrLudmJh",
  "key9": "5r8p5Xuzpg6Q5DnT1HQiJtmN14mJy9MEBfCZaFaZ2rLoEvhwEDWFN7QMDddteuMP2CJYrgcHsj8BJP1EcuwBC9Lo",
  "key10": "K4tynVCK8zrbrGzqMCaqJNEdL9LkKxgfeqmnEHketiqw2L5WDmJE7fC9PjEHPn9eB9xGHUzR2p8jMP4ph3cyNTF",
  "key11": "2Py4dHENx1epXkhd29h54i37daNTEtVKSB7AxgxFcbD9wEgUxiikYvzR8ZDvMvddLhADywNHLvzVMKju73tcwFFR",
  "key12": "3WxhQMUmvEo5nRjL7akUS5P3LMjZMo4GwQnTpZfcdRbAehDsfBnnDbUS7AV7vGFpvH2X9PYWiQCtkAZDvzLDRdzx",
  "key13": "xMZ9zsesV3vGh1YyucEY371ajodaHkQzGC4Pq55aNut845Ci3RjQUW2rx3rhiHJwE2KG5h79BFJprNwaUQseLrn",
  "key14": "4MnUuF253uwCu9DLZLirpESRoAhioSMDnhnpvbCy7TfZHJVHigFcwhLCPKWBTPQP7e7poTyf7mrn2bixDEVN9N82",
  "key15": "2bA25iPA2yxfAeND8AmTxFEEQ8pLQhk2s9KcKfa7QPpjFW6FGjsLPSJb2M28ffXRi1wohKicjrSKhvfMqAdX4Jx9",
  "key16": "4eU8XpCWk8S6kQDXkA7HQhkg9qR5exJDkkTE3whx3Ew825GGEnaWx5iYcmUEZusi1TZMJRPRTdQsek9WToLpfRAy",
  "key17": "4LcNkBB5gUn5puJcXsYB7F2dpV1Ha63xRvV2QDRxkirc5V1orbRxZi7bUKeC1rP9421T6axLAttFfTDey1R9dMzX",
  "key18": "2RKaZJ98qCG58wWswZvQT9UNbPZ3uSeoUib1YfQMBUjcQJbDX4mLdHRaaW9Qrf7ybx6qrekZFpyp468XtseFZL2c",
  "key19": "PNdfjXYceWp7MrmX8DTywLqZf6htteLdUAmHhaWAaYR6vTE7ea77FCXTQR8h4gKWAwztLDQCT1h3hd91NB38ELS",
  "key20": "DNb6EBmAzp7ReNGFSMwdAtvcpcXDytjqQm7LDDQTV2exNdAX7CwTuWp1sZL39GUZ6bt2fJFPiaFYDpGZk746hy6",
  "key21": "4zqeTELt2RXSe17UEme8RTKuMZD5jMNTpYsP8i5nbeeZ3KVTz85Txzv11tuJGU1bodsJYKXw29cDV6G3hbTpLDiK",
  "key22": "Gqm13kx5H7SUwJhWEBs3y6B8zYdNeduByjrS7EiQcnS7vAu8Ldit7VRA4MkND9oVqzxptaQc5LjsUgg7WAarjdS",
  "key23": "4iwoCzDGezXsyDVH5tcjvzNYqfxozipQbjG6kyAaY2rwnPwMwRb2yWaFSoMd7oaD7Rv2MvtTFjmyRfNC1F3E8RU5",
  "key24": "2qHXo69htvRLuGfN15MQ4D44rzgH3uQ4YoYRFmsSvHz18xfm84vrN2t1snKjmofi73JZsg7eRwv2memrVNS92EUx",
  "key25": "33Qmm3DWkqe2Ro5B4AyrkEqTKB6JWEZsFtoK7QrT4vuRCm26atUhwrp1X4ghLoF1p5z4LnGB27heGvXiNc1qHLT6",
  "key26": "5RV7PooU4kVUArotYyTZ2WVhaoBB1VcVpEVqiSyBc82nZdmQeA9VzmC7q4UYt72KitxDkAvbj743GvgprQLPvuD6",
  "key27": "21FCaNv99kPkqpMpE16VWbP2p4CSC11jw4xpqWBNHgv7NSD8rVfcjdn8W1fkTVHgvgsYMGn2Pr4odehBQPHs7Mk9",
  "key28": "3u7bUyHPxVu7TcVNsqiUUAb95mCrEjifQcgqGLY3jrRy5yLAPycp7Kt6xbTKdvdQzy4zr6xfwKKKyCMMG5sWnvGX"
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
