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
    "M2hnwDmhxLUUjqGGMmwFaZ3rqXLeCzjw98xobZNWh2SJzkBvp9oJbo1EGd97jFdKUqWTVaCAxx9hmQrszV3vrEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzyEDUo18QrGut7ibnv2JQsPvkQJmbifYH5Ns6ZeXLrBh9s21FTt1qcmWM4dGVkRQoqKGGmy184Vcn9wAXbaJmu",
  "key1": "2vMgj6PZ2MA6kqjP5hdzv596K3stmJmWXk79pqRzo9vsdgRaJkTtzNj8R6Hp3k7jcRbqYQwGEdnArW8PYeqryhnW",
  "key2": "5HNB94WkNbrBdH7PmRFb26zN3aJ3jerTJog6N7fNhUD4JycbsuABR2xF45HCBZkFAkoULS8U82x8oTb9akYMR4q",
  "key3": "41E5PxrgZnucv5sjuoY8KPjTY4BFfHt6GsrfZnA28kCKESLvxc1S7p5jeq2nbxSueM1sVzFNTjvuhqmXn85quKxL",
  "key4": "SKJ8kR7YpjH3V6iKztLLkrMKCZc3qK9jWoFLUuiKCRgvsGwgRHod1SFu5baHRfcwX2J4teTMRxNAtn44x8w4FXn",
  "key5": "2dxGCoYM2TjS3c1jM5vzfJoj4r8q9oB1tcRTrwP76PKCXvd5q7Sb5rB4WgncQxPNgjTh8r31M5s91yJVLajVczez",
  "key6": "d7kbEP4nQUgQKHbmV1CcWrXAQFqySr6dyFTSvNhQHbHXdN4issGnQgJTZdiox3EocstMUVx4wJK4VEFWSTZ4PQt",
  "key7": "3TiZEUYT134MmsVZ9VP67fJWQcg8oxhkRCwEaW2ru9Ao1z9Rv41Ykjk5jSweYcQ3fcYwKVipzvgy9FQYqmtM2p39",
  "key8": "3kxKRsGwFHfjV5afQ6qmSavRiMaf9HsLDwAEDE8eXBHaRYVWpGoVHFzwNmmurGwErTZRYzJxiUWcyraDTdte9QEa",
  "key9": "2FqefzLkDxf5sdC7A471x1zhjWgzcnzjKVxDouvH4awpJwL3p7dhwNp6R8c2pVJwuq4dSFjvtcRaKVqPFWqWinfY",
  "key10": "2159qbggt94fnhXLeR8Vonjrk2LFD7zxvX5MfcZAZmbRxjPJk3pvBX5rMBwWU7NCaa2Fac3Pz5uYAw5MxVjpQiNb",
  "key11": "3S6hz96Pr1d72y47RpPXa4RCKo9cudrL5YdCx7jiz9msUvqkieJxnXxHLZzTCLD2eGppxuAQnisqN97nBCc8TiF3",
  "key12": "5rFvkguEYCsC7jtyUCEBn6ejyyW8sx8sVJ6RuyBFa2axwNBbiKfWBu3DyA1nuvYZBUyYpWocBumipK9SmckwNE9E",
  "key13": "2pmoSKCuLY91PY7pCBhkEuxzJQyGrYBPgiTd7EEdCQFJYmQnC2Uenp8LVg24sE6EndH6C2SKcmx8YSBybvMbJ2Fu",
  "key14": "2gKkG25vttga9TJ5c5DP2ayVf8T48K2hRgkutvfQ28vVYAUuLWBCKLdENbfvBPGeGKvXCmvdX2Jsj8UuudaTfkPE",
  "key15": "52QcQtweuXaK1P7TRwyt4Ts2WyjNTYK4i4KhCiRs6YH9xjJ4dJZpsR6gNRN1eH4WCBMDBoSJEzAUvWSbZcbn3rXe",
  "key16": "3fEdosRxu6gq75CRsPoeKaJLaK5HgGhhGzLGJgydDs2vkN2oi96zhoCh8zinUffrNxVjGgJ6i513dotQLAR8dNj8",
  "key17": "4HD9Ct6pC6ZC5kZqXuZXqKpJ9YvjXtAYLUQ4e51MS9tKLXGVXfHpshFJdx2FWejywHs3TC1zyuQvJrusJ9DQeh9a",
  "key18": "5apNP16RTcVUe16ppPonkKLmPTnwyxTPCt1rkxqJRXBodexLPsSSZhGBpFfXxVWZCeZpGKNEtLaWSfaATNznsXj",
  "key19": "2xiKEJ6kXUQh7HrGJMtqgmjEJXfK3LRi8pwNychbMYzLJFBZgeJZGFexs1RBqjXAU78ZggFrRbGxB3SnPVyY3YDt",
  "key20": "27BiU5nr1TSpphjLskujy3nXPxhFu6NvTsap6ZMuimrG9u883wXVEHStit9REz5QQW7MJqUZER67VEtSSEjLYETv",
  "key21": "6V5JnR2u4MeHTEnG3CJxSBsCXP6dZ9CcRFyTKLXpEzbXSDH7cCkd7W5KDGcNZjwtkazoBbGKM4A9WC5r46ZQKWD",
  "key22": "5mbrpqRJHhxXmG9wGRwZVV71z8wr2wDrZg5X1LG8f8eC9PsABxLP1LdMwQ9Wbri63YVXMgWD6eBRvmH1Bj9ihUYo",
  "key23": "42Kpm1QcCtC9kmMJnuDQ9ys3rkpazmyyotpyPdCZHMw31tamAtfSvAqVbhW5UJFLJotpgDSXWsdPAXTpqU4TUSzH",
  "key24": "2pvwWeF4wiC9XY1Y6GPsZw1t3js5urhBzwDqihWHWhQM8v8A7Y9Tu4EzE4pWnsu3w6Gz9ZAypUmLiBWuKCsxTebt",
  "key25": "4aiHuiVCewpScENYND5csP5yDKC6YUTtQPxmu27EqR2KvsqY1Q2bcyygt8W97M6tNga87n4jT13RFxcSStnZCBDZ",
  "key26": "2FjXvBahtnaQSCQc3S7PwYrd5XtVgBCay32K77exrW7CD8bGf5Z8AX39zpgQnVZZSvtmqS9K9jyZSWCrJbC47XqB",
  "key27": "3yEaXrk7B3jkNk9jjeEr4MbuUmNd2veV2ZR5avX59v3Mit3SfwdoHXXRHLaxmKR5bLCZ1mNcnozJKRe9QR7eMGi2",
  "key28": "58T9TkRoQziwEoke1YAqTvcyR8MjQAM1mkMPoWEaz4VXYCk6EgbgDbsqHmuQTQUCANnQAvVshRSPoJ8aSWHGqXyF",
  "key29": "5T3TANXfSsRTyk7Qu7i1nWq2NS9VFUWdCL3ibYL5KUbgBNXTNq6Qt7xcTHeyp3sm8NmwnNCT4wo3FHEXfkuK3HV2",
  "key30": "36DVC4cZLKyYN6as1wpEiJkXWBRKr5T4uaHqEVP1uLSWJ8PZ7zFgiJBGCxrfEAdgf9kS71pbLpMpNzwMBXZTwQRJ",
  "key31": "JgcjkAF9YxDk4dCEEzhdNgj9k1M3sgN574WYwnvi2DwmFyfZLXr21xw7Kqtoqi1r1NyCfVrsZWpYbZdguggBo13",
  "key32": "3m5EfiuEtfJRtcy4q4PekS1puPvQtJ5apxQ2pMJasjp1pqgue5L2y3vMNEXzhmcS1PSHhohhjuUz13KtZiJmsBgh",
  "key33": "mh7urojvnXQo3fUHF4oVZcT8SN2tM9XWnax9Lf6q6ntLoWvhhFjtTpXwApKAFQHuWMaczMZkaYAtwCeSH3yFZhN",
  "key34": "4U12RvNc3NUYzSbCzytPcXxRDBEsTMAXrjQtT5hcKV6vP698w6UCXGMaNoiosWdNVNhKv4sJTPPxX6nbYGrXBzrY",
  "key35": "5KsniDPaw1epPNw5nFEcnJCKQjUJmqLRurn9qpEKcwev63V2mSHG2pewWM7nCyA3nUP2PA3wtBw4YuAFp3ZcXCGE",
  "key36": "CeGreayyWWxfheqSNa24uwfwahnpkDqEMhMo5CnpmJDEvS2KD8DmqGtaFgmDXsVYcfr5rkXSiKegn6odTKheek7",
  "key37": "2JnFffDa7tuTg6HPEePmHwxucGi6YKTvt6GKBJiGPYULKzWLMRa8dG24cxmZBU6ZCD6MrKXGCmbDnJg8GrCneD4Z",
  "key38": "5q82dmUFcKH4cLHLhDpZqBzWJWmntEgp33RyRdfZ3eYSF7pfdkgJyFyTUh9mqk29134fVmjSmSTM6KY6yfjA9Rmz",
  "key39": "2g3Kbq8VKUigSPGeioFqLcTJnXbAzvS6wqqaxQVx6NnR1xEKPaZiVhrt6eMFnHTovGCzLP6uTP1HtQ7JYwLQnCDq",
  "key40": "32aJ1noiKWjRt6BQgh45bXTZr7hGtbw3H4cwv6scZx5Br1KGugFZBN1q7FyGRUMQz7tzHsXh8xSrofpyaKYU2LCv",
  "key41": "3n6N8DRaxYtZJJQy8b4r26c8XsGVWBZa812HthPidwLxPaQPiS2mBMvdg5W3L5cVEgeb42FQwRxDLneS2Mps9bDY",
  "key42": "4xZHit9QvyjoXHAdjT5dAppXbvUzgEXxCdscFebzzzyuTQGrnZDNB5UkPe5TGfD12sc7ByftBqhEeFnMMv52ScWV",
  "key43": "4SqzrjhC4f59RMRTmc7yjsos463oTcJbHCZVRbM6uMrMLkpETcMDdaEErapTnyTMxy5EpYqfBU4rt6jUuXjmJzNr",
  "key44": "4vY2SA1Js1r2Q12aJYsDbB8mk8S3HTwpMpJUQXuw3BKsPP12Wdziw1U2b1bXi9TS4j1gU3vY89B3b7Hue8vcqP9o",
  "key45": "8bDGzNcMLrmACQRFmePMEywHa5eAbJKTMhwSyzSdYjsvJUPsahgPhQeegJXmDFqXVx2iQ1S578FLJfzeeq1cbvi",
  "key46": "2VW7QvUG8Xb7h8G6j2FxvAg5NsfoGWe3SzxZn3kyfbijx1jDELz3yNNKuoENAJaSYseLrSnqLu1L1Fw1tKBxcSnW"
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
