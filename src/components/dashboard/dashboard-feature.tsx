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
    "3pz9ts42zUmUhsLHrvZFms9mUKp3KBwFokchxky7xXm2N2qwGnU2GsMWnX1Tj7sj2rrdyzytTXcUU1JUPbSDJZ21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hN8P4MdLtqKP8EFAzWCqpZ6KVBQ6ujnE78p67iZvP4G9jJBVxf3SjZmRJRFSvY44PVMXsPMJS2qmxf8dDaMSqA4",
  "key1": "45JdRqYz7r8V3BqCY6tN3wK4nhorTfWPfAxpjkUoG3hUZvFFQVEL7G4gqZogHuJBwNQcnbF7jG4y9dC8S8aFpTZW",
  "key2": "5amPmKaRX1muXoRr665GyUxJpAExcJ9uXy9RhF34etCw4LHcxaToeVBbLWsA79yGkGHnHr7YAUFQGtVz5x2gp1SE",
  "key3": "mVGJ2kJUPbBsRjxfY7m7x5mv8psh1jmFEiiy3DehnRrrBRVi1qfgRYuasygs2Va6D8hzeCFFxZftBjMrjxyJXqk",
  "key4": "2aTpozbJj6f1iX4gD29tr9rPcCLU9ijBgWG8ShiF6SurZWFC7xBK3oxbS4nNR7pXX1Fx8wrtRHWrFCJKDwMcJSKq",
  "key5": "2tr9xoyP1r8rMQzZRmkMSW4iZQ6ek8LE2D92r6taJGcf1Sq9inrQTYvk1xrAtLcKD94o21tmq5qUNeTYr6uun56k",
  "key6": "34yyaUWqhT4R49iUv6hZPQTH41KbBJ24ck8CeuYc9PqeqaKh2bC7j2ZLH4aHjHFkwMMwQJWohEutRpogh6NPE4gx",
  "key7": "3z5ZRMJNdSAGL5JqLjB55XHyHD9VWeBSiwS4gZ3wPm13Vr99xEorYn7xBXibJJUKwtt3gQ1SQvsoBKk1tfW5zazC",
  "key8": "2ii4xDJFBo1ujVQdXuZZntVrznq7czYj9iqQcr4mdY9sRDzTmDuYDMrdRZkf6nWzDxqKn9UknniLBitCttdPkvcU",
  "key9": "2N1jmu1Dqyxzqy6Ri1gVSJPFmN4GZCcx3UKoa9TfSYrDTSoMjiTy2eNndSh5X9t5YjXo5mTtReNFuy7Rkygx4uPe",
  "key10": "4MacRNDYYn38C1qiXz3PANwh32jWwoz4RD4dK9TKvrvbAidxp39hojD1MiDw1Htus1TcXRHj95MdZpNs4Du6nRm8",
  "key11": "4MC8XU1aDP9SAFCw95JRxg6hJApsRgLRkZ87eHqDWqermWzWN7mF9psv5D7om3KtcZFJSdW1AYbvV1uhe9eGGseG",
  "key12": "VVicYxcPFHLA29EL24jumaQXtuHXgf1n42qrqEU65jLibUNtp8EbESDbcQ1KZ88h2ZsJ5JZZXeNQNmwaE2gWNG9",
  "key13": "5NbWffqPxqVJpDLe2b8enahr4czPhFi6pVhbhG7f2dJkpAkda6GbJayS9W7uKzbqVYUCveyd5WEEnGTiBJFpChhe",
  "key14": "2X8uuL4AfFwLeyGUcXbFvspQeXvD5CVP81L7zW5ytKgKQxxEw7KPtPsBvEwGcXFbb31z6FjiQQQLSnoXoPMHxLt8",
  "key15": "2hjSXVp6bDyQWG1xvorTwKJuvVdJCY3tTb6qEiHucYVw4KGtefMBLdp64cXPvsPwS9TbW2vvYmMejGgKUaSqv61T",
  "key16": "2m2cJUKoWzGpfwZpjDyfAHpWN6zkUcZLsdxGfYFDc86D3vcy4isrjaswuRSaeBVcibNBu4AKCTCMEhNVCMxzWGcZ",
  "key17": "3ez8DMauofFub5MNbLdenHJ8xnoJRzy312ZGrkdxj8w9uF1ZFvVxiwZVJuF7P43oxCzwrgu8oYAiT8sJ4FeMukgV",
  "key18": "5Nk99exrMHzYLLw7GriAdCGeFZZ1qG8nrhyobRpXBzvRjbHgitbw1No37C5V7R6PKAy66taRdZM9qMqJUb2LDqQx",
  "key19": "3K2qWxmCJmTySJuDhXrBaRQhKzuDTj1d4gsAzmNtP7gmeGwMwTFERRtSQbUKtHQDB58Tb3dh1uZnBvPSrCCb62my",
  "key20": "2izBUqMv96Wbpr28LbrVyhHfotok6DamvQpUkB6AuZLiYbJfGfuZbr7eaDdinZ77ATKbE767vbeWchfE9ZJHsjkA",
  "key21": "4sdDS8fP2icrimur53DfgSmUA4cSLN8JMwpTbgDhpda8P7riL9Spq8ZvdeDNFV3yvSzAdZFJs2KoAQtC12XtZxGB",
  "key22": "yjXVi8s6GQ1EpoZo5SbsL8LVkEBH9r5zdTTddbCCqhUhuKAkH6zmN7rpaxwhQ9DQddKiX7U2SLRnesBv9bxFLV7",
  "key23": "2Kn8FCcVorckfvsxpjetPmnFFxx8MH4y56tyC63k5xQe9UNdhpNbUrTQRtyw3cpvpb4pjqYKTXngJEU8yq7fnqh5",
  "key24": "3vi64BkngqCJVtcQG57tq6tNeSfJsYruKAvAZanFQQixgyckqgdsiK812gqsnLXSuDB6mX2dXiCEemtey2DcoNNJ",
  "key25": "53REDwJHyDcWJgYsUqNBEzyDFJK6o2UBmmGRJtZaKHLUED83egYc75uwFmA2HYeLscFvmcwUSb6Yv51c9uHaMS1Y",
  "key26": "5wzQoDdCkq78U8Zdy2ir9HDxsSFnReWiDFiNPAWTMRd16vr7D1udGja1XCdRkxoYsxrfQWjJe1xLxDujposw7KWp",
  "key27": "2q6QLK8kXhXzbnaKgFRu9N3hVDrrUwNEMiTdayntpiFdcseUVHacUANb8k25B5NSZAUz62Bp6CuvAbPtrT2SgGsx",
  "key28": "44ymgKSTTjL54AJisnD2PTCC363LyJuTBSRXBXgqrLDYTN5VyJzjMwDJJDqyNeGqEgv8y3Z3mDR8ZsHaF8Vp5Asg",
  "key29": "5dkRqEgkXKazMCDa2tNARdpS5tJh7Tna1BGqaBB4LZ2Zgg1PW3kUkhQ752UVG6gSPsSVp6rF2Q8hH1f91v5YPGwH",
  "key30": "4vF46bEVvTmkoibwKxRC7rJD2X19wWGNz4iAXpibwpLHyq7Zt4fSfL4gEU9srDnUBGbGbfJMw3DQeCxz7gHkVDFi",
  "key31": "4FhvE1MtrmQnxDpsEd4ysLnXzwifGkKpmq8jnDp2iFtUryNS93LS7TxwGEHdxuY2s85BEibhMvdBVdsLiLPSFg7y",
  "key32": "3kTxJzX7UGwmhkXgjKrNK6wDqsRj3P7GGo2eh1n45tjT5yXWW1Sh6TzomyrdfLzhYiKe8Usv7VNCLmoLbsJvynEm",
  "key33": "U2MxakYBkaqUWTsAYvjFM6nmmtz2AFJxj9fPZpyPGEohGwxxaTS7abZZr3xUPPbcr1KQJ7afMFgiYqsbLgxhr4a",
  "key34": "5aGM1V6XPTvT3a94KbdL5d3oMaptBbvQ7k3LeMbaK4JujtWv7ryV7gWGbRYdM937Z5tVKmsur11KRke3aTqeRpBm",
  "key35": "4M463ViNqm54teKKHPX91N4VgDD8ePkBRrfxFKsq7uMYpfo8kpa9x8XkrDgvwS2iiVyTwhQf8CaqGoThCy6SjEPY",
  "key36": "5N5U9jK2UyYSEfBFJSFVtzH59ivDxfgFiYTrH4GTP44iXzNzogyyikybh4d1BLeYCZeFqotbwsjo2XhmCYTV8587",
  "key37": "v5iYA6EF96ZVnTyu1Ysp5m2HcQLfMqGyCt3jQNLQGebrA3UCoUNCff7w5Nuv3GnzNvFd9yovQVrczgcgSxfHEMb",
  "key38": "58VrDufL5o5hZ7YERn2MUcHQMt2ucpdkaVmXD9MyyAp3zA3usqytsTgRtiUSTSR8CrBy3dLKgqY6i3TsA6w86gsJ",
  "key39": "5fUyofKcDGmtu4p2kWagsk1YG7NM5gCoRQ6sKNRPBwVvYSPyZ2zF6riqeh9Mdp2vnE8QW7gAtpCRD13ec77HUvF4",
  "key40": "5s8Kj3i5cuax1SUD3LrgbmTRw92coZGHppAtUqAjACQ8MTd6ma25D9tAH8B4BoMLHGBLynxyoxoS88GwmJYL9Qvq"
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
