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
    "3CS43vdkLu4dGge13RzQr3oGsbTy52Nrr4EAonyR88gQPctZd3eXjfukbXuuakbqD9HjRhzDbfdxYwMhrnjSvZjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LRDBjrCXs9ru3htzq4fbSkh3oYyVYmkPni2hxjf3VQnm5UY5B99n5zKv1Um37PDaGavhRYomDjF4jRsNvBWxsW",
  "key1": "3Ayv1bvX51ufKhtjBNvQNw4pLkKEz97BS5BVcdk1MZPDy4aSaMPTPnt9SbKQjziyh2ScJbiLPLVXQzFdgFqXY7Tm",
  "key2": "3PniF8FZgWbLJyXXLk1Rq46PNCSZQ8jdzaJpUxui4FkMhZ5d2fzLFNcS7epejAgaj7M8bkTxTXtLbUNCp5VECbbt",
  "key3": "5TAmr9gjMdAKFB7qEY9jecgg1sChXALYD9rtSAHEnNxD348JgKE1xBYUrwCzSHe9VEWWVCWyRpNDFCVHP6mgge6q",
  "key4": "3Mtwm1Zd8HiDa5dBPzQQ1D1BgE1QhEgmxMhVGu8j7ESoFBYhgageGaUnSZFzoCUyQGzzTK62bNW2runaiMwWvVgZ",
  "key5": "2dGYTNCj1ogK9STFcWfJZviyzLywd6hLFsmjgfXSpNmM8HNRX6AiPgjQurhFsvM2ujmUywHm2yzfe3S5SJfh773s",
  "key6": "4SLNmsodneAKuyBPC1ZjKrH6u7NCC1BDP9Lt4ENWHa34JKPjAL5zWTdzgv7ARFnUs86DQ87GUeRZvbXhuBAiAqTo",
  "key7": "2Apz7Y9s5oteXoSSahtaDMVND2j9rQruPKd9ruDpsztk9w2Ng3HFtvri7dob2WWDTMdPD6ziVV1vDvEwHZUh4ciD",
  "key8": "V6dSgJprNAWgUCNLRMxxR2nKBjnhpQUWdtwyHvFMxSaqXosRtQYqk6ecTtRieex586Ptyc5bozisBkT4ETAZZRY",
  "key9": "494odjJX4tPpwXth53o2N199hkTCPtioRHRJwagGvfTpeCmA2tCdRedB1wXoSv3Hht6aSLDA9Y4Py5n1vgia4WwB",
  "key10": "4EsWsQrPw8yJ21rbTaesMmj8dNMgqUbWWKsvk2BSkog1eJVAV5zNWWT27FbyRPko3TFkgB1vfFbAPA9CweDjgrys",
  "key11": "2yZ5sPEwgoVRfjGAkVuurfQZowmbsQREaxhAnhn7LEoQqGmKMpmA1bVtqusJU4byTG5qABSVdHQPnuai6jLfHCc",
  "key12": "4D6hJgBdTr1xkgYLAi4VcxpRv1EBiVSPdMazpaCpqCbbCbm2hrdNh3T9PQopk4DM75nkqHekGVLzJ9RpDsHoTMQj",
  "key13": "2NAUTk8DJw4KiXdgGdCoPvLDtfcmbLWrqg5HE3AYf1vGQPr1BfXzLco8Z5AAJepGqMYPLguTNyHH6nKNUSvZeRjR",
  "key14": "65Q6HuHhr42FCkp25cLju3uRiW1qPSX7jSJP2g4gFZKH4FGBGK2aMypFNf9ZjPPdGZ7emujSh9vK3XkovbjVJU1N",
  "key15": "t4WfvFEonqc1D9sJyqZTHgducwcWKVrMGuo7jgr4KekGao3RDXKZ9SGQR8bQUQL64UzAaBMJEthjrFoUm1z8j1Q",
  "key16": "4xg4GrgAzUtiSs196J7qab3RgJUhmVJhKTCaDoVmzqdH2DQYEpAkgM5f2KWddFvjAgbLqKKoEVzJ8rwJekUy58ty",
  "key17": "2N6L7CRuhu2zgzZPWgjUwXZhUacTax4ABpCDw8XVsYBgwzRr4oqqdDFviUkqpAePVBqFgnnCEDLJCpEnX3aNPZKF",
  "key18": "57YArJMnf2v7zsdBbCGPEhbU73sfHAdmXR1xS1BkB9JqbZCKRrFFThQiHQtQtWd7ZcPE4trvEAAjGHWvhNUT7LM3",
  "key19": "2y38KjZfz6dxgXS2otuvc2rR9HpzHPxHhCetF1xv8jScjsyXKPb7XHewSgN5T3RTAQpiFi63EfM9umGVwmAMY8pi",
  "key20": "gpXsiALx6K2kujAtggMvZuRJ1Lipc6bryUwrGjNYFAHBgYD9yvT7gcPZcCeHXifSYbz14aoRDdNXEanGEVe4BUQ",
  "key21": "3HSnKjtHWcXRtEdTeC4ZsWy1ZVkiEAUQw4XA72RXr6eqRQMPqEy2edJZNHHNY56h3KZDAVaywtwqr58Jpqkeufje",
  "key22": "4RLW8Z5njSi9JWxKcAXjc13De4qXXoib3kCUXY4JXJktKcAKDc23d5ZAQMukYBXQRqiQe4D2cH6BPUVxyqeZU8HJ",
  "key23": "wJZGe8vVkCZ6wb92BA9BbzfgaPoBmJKhzj8ENyocrh13FrZfR9dPwvX8nmjJmyBt5rFuVBQk34knfR62Bevj3eQ",
  "key24": "3uHCWoFuMaiCCQhyUYATU5esUpuvtBKe1TCYMsegCCicEHME95xhewLPfEEN8CDFr8RpoL4UKRa7rmbGgsggBYdp",
  "key25": "3AicAHz99fjJ1yrtiu8t9drsa8A4bZx1jqSSgy1KFXAA7BwyZ9AXShz2e84q9mLPAYUc318CjmJ4DpgX2gmZgR8L",
  "key26": "JnDhJjM8ach7coiHeRXVSqiPUBRfPykmoxUKZBzR1UEmKbr9HEFpw23kZqL8DwW6VvdkhiNZ4JFRrJB2BLUhSuD",
  "key27": "6L3UfZxstN4shWBobgLbSCvKVGmioyXmK7EspR1mNe7xm4vANeUHWk5ScZZn7sLfgXrxwjH7k8zt2ncGdQYjNJM",
  "key28": "2J1vYE33C24JpZn3AeN5s6HZsRrRRBjT64yW1xQdh6FfY8poebN91MB7p3UJVvJdmkzQ98miuj3To4F3rpeuGr4F",
  "key29": "4EfPpjGxQbFgKFaEciEx3bDaxTX3k56VWQKcKt5wAB2BR6BYHcZjYToKC59dP4zvXvcSCwheHCgspydmYwoU5uNq",
  "key30": "5ipd59yDVXbtTqLc1rT626K1QEcL6Y96MLpaRTyoE6XXVL6Zh1kLBB8oPKa3169Rra9uEhbYtNxx3Kc26avzZLCz",
  "key31": "3WDwGgYRmajrGphhhHk2maXmiisbF2b54uxraP2z7tkCYg9XyNUDtgRCzMkR2A5PqQ67p4e6U9aphfHXpXtHsFfm",
  "key32": "4yCXJA7Di1QCFGyQifUcqHWDikY9eT8pSerXC64WyjDZ6wqMhSrfvZBjoagcEKwUbjrigyUbJcGCTQz5WtrEZ9DR",
  "key33": "3f4jGX9qswsRSqB2t9QU2bj2YQ6keSAZNZYZBAPB82RryREQS7ATDwXbYjtQPFKPmCemgzuPxt5q2Pt6Z5GhMZDy",
  "key34": "rx5bfuuZbm8wvAEVGgTDQma591Tx2ZjqEeJMdvmtBGVBMhoCKzCdCd5DAXgJvwHdyMfHxVFq9Tgm1ngULMrDURQ",
  "key35": "5SyoRYybFfHtWNxf3zVVJ4Kssh2sUZa9UZDJKQ7gWiaNDSn8Qvv7yCvXZVZDWSh4kJGmvyBJZHFtNxyrvoi266BC",
  "key36": "5eBSQUo8fAbXA1PEiLhrAx9g4edhj9BTTkruozcjgSTJAFVF8evNCXZKKGkhr4Wk3pWKUc9dsiAtPHqXpUSJwKm7",
  "key37": "23A9QHxp8PQhe5yVbraijwiQPavpg7Ygu8yhdFGPXFDVNHhpBKbsqp3Gq5ZKfA6if4ftG7H9gnSWFVnwdwysAbxH",
  "key38": "36eChq3ryMcN2v1bSwHKA41P63cPGWbdhTGsF4Y7ssge6VSDUiW9ivXqFiCrWfqUkddemaxTcGr3zG99YmoPcGLf",
  "key39": "35VHqZzokpRjjg6BHoQy62X3GDvbFYwyKzEBGoDUJGC8ersWUgpBUkzJCYBMWFAoijU63vamSjYJ7egv2cHMzbUD",
  "key40": "2kJVNkeLwTnXrh3FADSXkszEaeNSNU1BSLfYtW1VWQiojrAT3gcuGhKBNaQZKtJ7jXzQdsU3MsQ5TFbD5BbxMZ3W",
  "key41": "3tQA2P6Rw1tnXm3zdDnYhzrQ4CmD6L4itiqxQYSVjnu65coii1HswqhWtGXAg9K772hpSESLxKLBsBoG11WF49yo",
  "key42": "fXwkVSeMrMDbBSQ195RSioEs94jwn1znT4NCKJMnHiNwibgyJhEMNFG2coGLdbf3XwTU3Y8fTWFaU9fwvsKEpZE",
  "key43": "4Qj1k8WZsYZn5vbAS7HCiAXPmC4AuyrobDnAAEj54F6aCGeCW7f3G4g1ctr6JW8BHvtaXSwQtBtqTdYrGSj5Rktw",
  "key44": "259kYnz1jSaYQ5Eq6WrQAFMu6kdSdNxSnpzCy5q1NiiJis7Za6PrPXuYrh94CZbReomqXw5nDf2fC7H6cD4z8J5o",
  "key45": "3A55ouDrpRDJ7qgNWWPgXfToMKLfRDnrdAwz7QsSRJXSLejrHymTVBRRf5raRwjRPmrZLKpxW9QDoLKBqLhDg1Z7"
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
