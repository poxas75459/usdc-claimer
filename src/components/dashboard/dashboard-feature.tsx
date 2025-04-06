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
    "5hrevGtXAnux66FJqf5cDfCAJidnoEH1CGmRXYKLMmpytzYFXioRJCy7HaFTntcCCWzGiXM1nXcWBgteYMfEjDeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2gAQsQsJoTny41jE4tnouYFPa4qDrgUhyHSq65zf8grDqQTdM2us3gS3sS5ACjB3EJg8EzNxGaNuDPQKkgaoAm",
  "key1": "3LLKRMM7EksAXPKTDzKVcmDgZknAqf7PKqWi4seAvaZVGi39Y9fgsNsgbeDAcMsJd3V1W1n1VezwiTJEcssb3ff3",
  "key2": "5EXaxjqtkzpsBky2opQexE8g3N2XXnCxZi7vwwnV4XZn1qKNm69ZbKLBaM426QQqJzSrzwGEJiNoGcpDkTjHYxAr",
  "key3": "33tx8KvR28h2PBjpowEqHohaFc31miyRdgR18vNEnqt3KtnmxhQsJZnvJF6oHWQMgtZZxacguPh8Am4McSygfjy1",
  "key4": "rUBWKhpHqSbFTUuAf8nyCYwA3FbWBCnZKqD7u4z8MXJjKffjfpdxNP4oHvfiuQLdZM6W5J3y32M6jxgXJWaimBb",
  "key5": "3bFuGeaHQ9vjpu6ed1b51CS4KMxmo2KCbaCv89fpWkDFmXeQu7sPeMkJPyLRKk6dXb1PrcPMbSn3LaADdYNqPUfe",
  "key6": "2GW7qmDLpDsYVU4GMGYCzSFGvaAD19quvWcLuCFPaPd2sJL2Wjn1RY21u7ZGmhjEXuivWSrVMf6sJkW935zjQxDM",
  "key7": "5mSXWLkn98hyUQCpmRt7GoM3k9ZogukRoz8b9FbyNfLtMuyAd8XJQecspTcoCeu4EAzY3y1YaPBLWs6Z6fj2FWBE",
  "key8": "hbrhpjaeifBYDrkNpMtJf8Rgm3Yacgw9MgFCoKwUHbVafg3TM9Gg9onTvbsQn3yrGwduF4riMjjs6TFBYGHp17V",
  "key9": "4LWwiM2NGdQ7StbL82hdxJEPhE9Vrwz8jd4mSDKHnCRDkFGANonmiLisnRxCGKc82bLA1Mk8ZRZQpPKemf1i9cXH",
  "key10": "3inzgu97wnW2LWGjLHpqNT2AVinMR9pn7KsfcW4De6wrhrhSGP516vxoMQsxfmmmoFwLyvm5GzW8vmnwDSWYgvWs",
  "key11": "2mU9r9YBsBjsXBEkKko2dsrLK5UE2k1ALcJnC9zKbJuJrDi6Pe9ZcV9JUf9QUZumpiSgxvsNnerWGcEa69wn8K7S",
  "key12": "3F4gez9NT3oQNYxvF9r5UaMShhddujZ8nBKMjZjg1nvP8NP5tirf9dDUu2U42mLxY4p8WtMGt6v6BS2rNbZpGFqB",
  "key13": "4wKXckGip7YfXaFUHK7XSKAgYozTfP7YEXpqB7yfTBMWmEXdTyVaC5WZheKcNo5UXcspgYVrzxwFqcKxmzrXNayg",
  "key14": "BSAmavBENpmAvsYP54Uvjv9RcaKhUypMT2vBw2Kddjf3kkESqABhefUJrrMCocjqPivgQs6Ato4nxdVoQMToF4x",
  "key15": "4qVc8HaHY9KVj2SJnxv8UbpBN1od48PvKdKUctx1zTyrgT4nbaCtoXaRi1vaA8kzb1ninu3Q7u45ML2JJXvPa6CW",
  "key16": "2zqNrxCUpWjmQb5G3crmDuh3aLnJqx9u1rGTCTLQAP9sCyr89Sa8XTGS5Phgx1X1Ub17vjy4MaEuR1PUUum6LVB4",
  "key17": "4pBnRvnULnGzNG11NuiSk2maTgbAjsCrtq4XGN3RLaoPVswSXrt3hppaEFdvV1yZfpWFLzAuBDBQF6yD85tZWBzX",
  "key18": "2pVBYGTxW4UFwjJXhhyoVivazZuqxFMXgaiXyt9zrbJnFSM3haB47gxRFbxkwYSEuqbyPUwJsspisV6YA2H8oNHo",
  "key19": "pBPbofxzkv1cveX2osKipLMRNKzpPpPJ7DzBG3Nvh5WsL2Z8zN9Wyo7dstbWzmn44s44hiasV3HY7VUbvcayDx6",
  "key20": "5rCYJL3g7aAG4W7we3r9dXUuCJztiK49iwxBjd5MydufsQLQCBHoqErkB56rva912PcxPnjjJcKwnp71qh2muu9U",
  "key21": "2BUvqR8oG7TpjJWjcY6V8amoSdf9hsZvZkiKjP2EcRcJjVfNNi7aPkkVtH3hyC97wc8rT3MeYXMcSPyPgCZxCdR6",
  "key22": "57gTZo1Py2xWVGCexQVVWaEhZnJjTnEtm49856brRzJBSmeEZfbzmDhFWRfMovWBJox2bWSjZjjZTHrCWPWSYwgc",
  "key23": "5QyV81QE16KxxWpYBB8vWsfNXJSDk1AVPg9uSZLi58VrwL3heE4yn3cbFWrPnd31YFPYGUWSZcoNenGVPyURDhHi",
  "key24": "38esDQckmq5adoMDCqeDJGWTVomFNhCBLnT8Qm7tVexR7Jwmbf7cehjsgR5s5nwW3pXRYHeRC3KxGn7u4cARirLv",
  "key25": "LEgfRstD9zvRpastRSKjp7ibLhs6GG6HtNXVXR8JfYqNnRd5SgbKK5MNYrAv3fRNkS7PTbPVEUQ5HVDwo1wJG3X",
  "key26": "3VPnu9mbic1vrkuLeTGWgw6WWaMBy3GaaEG74Qj3KExUZbnx7Rc7Dj55yESbdJdBvvEQKFSYdDTmUkgjWQKuxzxR",
  "key27": "2yH3142eJtstZDJJuQmSwF6mHVsZSuPcsYfeMEtB2iL6uGU9w3Kg2yyDdiHgKJsT8xtK8eBriFA8LNick8Cw4pe4",
  "key28": "4YS2GeiYdtXa2HVM8iqYAK4gMfj7UcJtwsn25uUSSn3U5juUnuBEbfSPCn7hgq2rUKPtZfHVBVokmWoe8fpwvhXh",
  "key29": "3PgWceKZHtDVZomDPgvtbYmDUe23tV8ph7HskKJAAF4Ddapznfx17TCJBuTh5TPWGpzvcggQJ9ATr5r9qkwT2Kvz",
  "key30": "2KRkhyD5nbdVXDBoEBPPoqsspRFYF4mW73NSmu5cTrAR4eXfAWsE89PePoGBuFx9uehgrgPGBwwmfZunX72E5Wni",
  "key31": "4zGUTonZwFR6Usn76JKgnnBisQLH7SMp2UQGEqo62cRYNKEoQuxrWv9hVYXMNqd8KaWeLeTL7viyFU6yXqFJgMzH",
  "key32": "5C3BvnxRDYBc44AmaZWu3D1H9VJGMKyq1SjhJstAkEEz4g8MVo2K3UethzTQCypSD1W19PNkMCf13UFjR1F9VrHs",
  "key33": "2kBeNt9xXU2fQrBmAzShLdACSJ41qrbzis8KbtGxB3hPtSW6LSxPVDXbk4iRpcgcmiLNB57ZGhh4qv1M44QynKA4",
  "key34": "4RJKkEg6s8U5z3LyGF3MuCQCaXVzqxj7agxghajiD7yvYGBWVz3kapQ6K4a3XWWoY6V23zDLVwbvsAqrXvwVf276",
  "key35": "45dTHBUgqE1nWLLQdbSmKc7ACjK6E2HzQfs6R87F1phVKxBAQD7sjrxGAoUT4T3yVW5KnwP6ebsTnWnh1rRWWKip",
  "key36": "3vhVyHBvX8DcQSZWdYmZbiUedcg18ZaMEwt4tjj4R4Fx3AGfXsEXoMpYfxNUeGbG9HT77QCZmzdbxBjR9ov9hVZe",
  "key37": "JNv5Y661zd6qQ7HvbrC3KowmkdVVXXRf6sDmC58V13rvkDh1DsTNwrFEeD9r1YedrJQ5rVCcetH4eiQhfTeHFXn",
  "key38": "5EpcJ22FDiFc1znngHtFPX8cE8K837guP9TyhZMRmfW53Duw95f4bfZgqosjT17mjELx7rs1cYoYuFeXGU7sC1ry",
  "key39": "5gzxANPQiyMT3jKvJykF7RnVa2CHJHaJpY7ZxZxgBpKWBpjGNwajaABcqTMD5zuphxtRMZZbEoary595VXj5j3c1",
  "key40": "4WVYYwJGfP6aF4DyQpSGaDX3FHsZJ2dHtJRSViGy8AYjnPA63xaabP399fGjTtbaghTZazVRydW8k2bUWrRfxRPf",
  "key41": "qk3QxsgKiSrqd11jWVvBZqmp5L7mzZszSDhdtKzi1BmHpdu2p73RrhjbpmobBh8TMsM88y3KSKqnSz9UQCtDzsU",
  "key42": "5kpw1rXWeqzGeavNXBoq79CTzJJEQhQo4LdGjmEjPJJmDjkoFJGxAgvgpXUMRjxEziKi1imma5B5FzKAkGguhMtF",
  "key43": "f2gqDbdjtp2KuZXY3VeQZRqHs44jfuYUg5Wevq6VEfqQCUyo6b2kJHKX591GNjxDmE7UUXzhdGV8mGCeBvKmRcR",
  "key44": "5Ugt746CePzgz462tYVaPPyK2DJ1YtxWPZP9cJ7YUtqrJq2mcAEbMRcX46LxjziRiYMWgnUnGNYXEfRxdkmCJfzo",
  "key45": "2KsKMagPwZKsdWQPtYfE3fYfDuwdv5zD9rsbsNY1V2Pr9X8p3cwCVQgoo2y4SqSU4ghg6WugYhxXLwbco3WhhXxg"
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
