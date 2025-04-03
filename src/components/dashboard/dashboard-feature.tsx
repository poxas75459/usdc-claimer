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
    "479SF7YFjh3fNehppHsY1mn4cCg8Qd34pMccfyeZETckUAqwEs65rYDBvr8kvTE1LQ7wPRapbb2ZgxveyLTxawu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJkmW3tghg99MnAwC8Wyyaud8T6CGVhFbgha1SQnDY6kNZEq7s9EuV9GyN29RftqoXDRsB5hAYa1EJSpbr4tfXP",
  "key1": "4ntDTwApuaNeZ5x5DWuyXCCgxjJWB8XtJshwPtFJqNSGFEFaFj4SABQzbvYfrfRAw6Hvj46LuHiu9arNU5zAwyxM",
  "key2": "59RDH8Y2kRh2WknieYEn14CSvv6ApgZzydLTEdGtpGaKZDkTN5t3BKjzdJpf3ozaZQ5fxfzGarSLDZLg39fvVaUo",
  "key3": "2bqJES472pCtiRc5WzKQBbMpr6afhFJx9koKg64SSQYewG6hepQ3QZ9QjLxQHi8nU3JfsrxVF1G85qNT9u2AA2Wq",
  "key4": "zD9Wam6Jb87LcuZBHnss9H6HAfpZyKzp356eLRn9nRQCfke4vT5TqFyHsNpyf2rdcPyogabdpNNEn86RXA3vbss",
  "key5": "3BJybA48HdJMANXuKv9mSuV4WPijGtxbcPr4rw4FzFZUUoeJFzid6S3x6NB1hWfuKy68oepJAnNoL5PWDqDU54j5",
  "key6": "5DmEWgzt9LmBeC49bTVnSixgMYvrvNK3bJj5KmmEtwLQJoBq3CWYTDYuCAcZcfcZLqaZn1BRJkRXkiP9eNTjkExq",
  "key7": "5uWFe9wV9qTJcdvoyKmHXogGBYfqbiRdFreLd9oyng4kH55FTbGfHJKfMt4EYz8XVj16Hov59ZBHuJdJSoyFx4Wk",
  "key8": "66edUskRjpYcjUmxU7CUoKjonGbzVharcDVYTaxZ4Tqum495mNUyWBpV8krP2UAVL4CGH3AHCdLa91tSAQNw2pVq",
  "key9": "4mwrjjGzq3CTAqpDTLzfgxtMffWqELH5ifr62TXEEJL3mgo93tH2x4ZWWYnLTsoAfi31P9Mvgaq4kc88Bodn6anx",
  "key10": "2nxVFp5e2ykFBK3a621Yom9S4zQdRHkYaKcxvuPx8hRNzDaaEdP1tWGkwEC7FjGmAkxexmJZjBEyk5m6pEZPgkhK",
  "key11": "5ZdSq3uWFt7eLqHtKH5MX2B8KUjPcFi3ukURfFkuwpLtwBdx1H919VY9Gf6nUoCHM2UAwPN5vx7qjT8bGWq5Jhoc",
  "key12": "2HC3U1mMxmPbu7iHP1tpvSocbzUJHAiSkUmJG25B4mQqxTZofBAtCsu24UuxYSyqddVjcxKm2EvL614TrEctZWZe",
  "key13": "tW5Z4AYNjB3czf9NZfb8BRmu2dbsMD5NiuQV5dUBWcsiknqutF2Ez4prniD85aMH1nPhW2vE3Y4oeRmfktwGFEM",
  "key14": "2qQKzWV9TkJhfckuHYMXikxutfDYGMPgyros97R8XayoNpqxkcCvJQeANUHcppyuyBYLoT1dQvcaiBvxqQEeRUeR",
  "key15": "Wz57F6sGtAyysU7xmPjg5Two8Kq49yRcoxrprWBC5ZdcW4TMrvoiXUCkr79YCHbaTheU4xMigSspfGhY3AYXnmW",
  "key16": "3rfGesQjDjThyK8N3mmxPoFXftkKBqXiYhqT6c7LD6vExoCkiPbTojADjVAP7wkdLqxFdpDNvwPJFcyXWzx9qXHs",
  "key17": "2y7ceWDcF7WdQBaZ64rbd7KNDinQSZU6aLkT2iPANtMPLwiDMiT43teBo9XcDfBzgLvyWbcrMUGZHZBjMhetj1ES",
  "key18": "378KJLo8HMyjEUDZaYQ2pgJwXpq56Gt4STk7DreqjBWJFCFEpYmyU5zdKES2xLta2wensYCMUtmqDHkr1Pz3qyje",
  "key19": "21CKaTCxahJzzQADS9HCcnyayvms1z1i5mdAZLGKqy3KTWvrc5jeEmSbWiy3AfyGkdV9xZUfKDb3QACNYJBYmbBG",
  "key20": "65n9S4CFU6f2QQEBp5AkPKWSC9Qdz8M8P9QcCsLyQA4g7Cc44vmeCeAw1RFaawGrt4614z7iXhg3EJDxJjDZtXU1",
  "key21": "4rWDgwrJpqdejPgkiK8S2nu4W3S3486FKnrhZfTVF1RRtxYmNSQcByXb4gFESkEbgjxJu4DGeRHz4HSdmb71MYQ",
  "key22": "5G4ZKPRffXJtf7SZ9z6YTHy1NgddUmnm5iLeyx3tsJDCjm9qg3j9UVQWm2Y6imirrTHFZLGjhw75eNAjZjorkpE5",
  "key23": "5aVhrmR33ywpqKFS49DZ1VWxgtEcBJYFFTgXsARQEcAQJcE8zHqUR7dUV7SwKdsjkUY8ZTXunkxCTMfr6NyCQrGH",
  "key24": "5nDLfgsqdnYUWtVquxf47bZqCi4n4YZRgMGuDjAsA9A6rh2hGkbtcyorH9TcYEtaFGS4c9WktRpispzTmoByKDZf",
  "key25": "uKXqu3BRhtGxeTSAvj35z7WF4cMzksNsEjcNymxzy3pFhK6kVVaLeyy1ZQQJNqXqutCGfSNSzYcqTkpScguzRWd",
  "key26": "2JX1F6EcEWjRC94H6a6Z39aWPzf5UmogN5x78XuNYL6AEGmcfyWL3tRAqkB7mW13rRgyPa6ZHyHJ7ANB8K4nMowA",
  "key27": "3vPqsRh539Lp8ffGYu3TqqijJwU24bH6S7PLRFQ7pTz1vRqkpVHd3G2brgFEW8oZdyhcogUe5AimhY4mWKrUNB8U",
  "key28": "2HrD93iivYSRkvDMoSLXjdZdQLJdrn2aD6ytFLKVNngeBWNRFgyJQigaCFxi613oVAcZhiPaTrNLSvrq9XpiMF7y",
  "key29": "55MUn7JZdaXMRjsmcBCs29LFFeQmh1ppSEMk57WSCbayvayvGPUwMF8kjK71uGuupw3A1HmxWDGrX7Y4KGL4vwVo",
  "key30": "3zaZ4mU9uDKo7ajjKFGHib2ZpP5HC7YUKWwB7THFZ9AJpajgXcnD9gCDwN86omBNLZ49snYPBDhtfTkf1RLkZP63",
  "key31": "cbLosxXLxfBAzYTP2Hrf5jPif2rPQcxDyxzpXHoz2dyqUAhLt5nukNWmHHbePgZNbJfT29yyLsCuyaNGfUY5Nja",
  "key32": "3SPp54QJPyj2zmSfvSxeyRdV83G95QoQ6jgoxgPwsBtxJtsJbGG4C2ey8ohEhA5KX26QWW4eLCUJ6HAHqU1r5nP",
  "key33": "29NPvnxnmSeHfXirT4MoAqjK55AXXq6yMwGCZMNew2EofxLVo587VSkLw2QxqwBFB2JWPfF9B9Q4eXC2w4wfE1ns",
  "key34": "gKBf5dTFb62wDaD7W736FiNEddJKznfF9HMREoHpDEDurq6AM2FWFNpuPuQotzbzuLRnthgTDFjemGjJeFSox1i",
  "key35": "5bMPR4Qgu3Jzyer6Bc8uUXnJadXBcUGu1NV1koQJJ5iaUPvMff2Lx9mULDXvCEPt5SMsnV1hCcdRchx6ax9bSAk4",
  "key36": "USHX9exkZ8eNDzfMmRLE5PLpAX4sxKko5qYABuMJPWHS6WxMGRrKaZQW8bsv6seMwje8WVwbXF9WZg2VaT6HsBE",
  "key37": "67pzgD9AukETkNz6HteJTQ8bGpz1HhvuYWbEGBBCCjUoxsCoz2o94sHfctEqYPhR35fXMGqD9bpDE75F9Ea8Wfy6",
  "key38": "554V2xDRtCwE9Bvag9cPh2cCnVJpkEpuYJezKmM8nHgiv6YfEQiDBmVGbZi5pT7iY2sDHAUUpKpVzfTPu3xCPiZL",
  "key39": "5ejZFigjzWKgH8HovihkioGqGuZQ3fM2U56NJdPkXB73zMFTcXBkHdY6tq4npondhC18KLt2632A3DwofQwabg81",
  "key40": "2XsYsZ6fsFntQxAUMwE5qn3eRdv55qdhhhJbexwZAoeU1w39rTmgz45bdYNTo6DJtZHqRu6osc1K611GUNCqrcXk",
  "key41": "Xjrv5BVwcAMBmnmpMuRcAEP25nxwWLUazzMcDSTNKGDhPZpk8FGEojtoAbJe6GpS7xdmYbq3jTtWgKX9vZdCFxy",
  "key42": "4QYWZn3nZhrB9nUqSquSNqgWLZnYbDAK4FKjguuBWyVdMDCzBQi7RHzEGudsPuajcxGeuW689bZicew2pnyU3iVh",
  "key43": "47UE4pfiVoibR7wfX3vPdxdjX3L2Kc4khYQXy9JmQi5YdsiNKFCGnoVrXWFeHdokmAsVkz7u9HZSkvRBmW1sCQLE",
  "key44": "336TzDTvxbjLJvbMGaBDecGHjqhXR4EHaYKEHk6bFSLHQSm4iMPMsENXN1zZkqxoUNoRq4xGCT54pB3W7fBmH4C5"
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
