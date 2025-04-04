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
    "5NnyPpi9cME3NvxfXXcanwVZj1oh78LaAWi3EkLMrReGFsgZ2TLb33G1WNg2nXxhounAJ9cA2xfSmPeGpkZjtPsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PpaTTRmWrw5vrsKe4AzJjtyVdaqUQPXoxXi49n4K8ihwFd5dy2oSinrSE8RS9dmPK9WkXXDvJq8wQwPmAB6Zcj",
  "key1": "4y5j9xQE54D2VopXAwZoCEqhkyuxrh96pRUwLxgbcLksjHCv73Q6g7izpktVRsZVXZfDBCLDg1dgWMTVJ42YkBgH",
  "key2": "3ERfy2h9LypcgvdmryaxEPC5MpS4rKD2NJutwgk7CLPqtKXWeTSi7FthRQX54gHKNNMYD8v1yFP3erazmivMo8xM",
  "key3": "5i1osjfToyEqs73teuYvtZM4JiX9wsTvjY4WpgKRr72A5m6h7uF4GLZ2pUPgki2MV4oU6961W7Pc8fX6FeatS3aY",
  "key4": "rbycMLmwvPA1n597gArh6ybcKcFoUnc7q6gttYazm4Z1L5KCXwTBVcUDbG1aVqg3XGfwLdBZBLbb7GEx99gaNBL",
  "key5": "5XFtqMGTkpjdA5NBtzBoJMtbc9eZeoJg9mgcvN6FjwsDNgEZjReYcQbLyEW7yHhMfv1i4MbZSjuDVMrmZmUQFqc6",
  "key6": "35sh3ErSXVSQKjRXLu5HsJvZNwT25RVE8Z7BZzwiPVQYJAd1RMUVxquZ43ZDF6LGnxWLix7UJYKk7TSs6o1muZzf",
  "key7": "24cS5STqDwB126XadXNpAE2KbL8Y2a5zUf5Eovy7uvCMgVy8wuUog56RsowJPrgv3YmtGtG7N7y1z1fDE3oQQZgJ",
  "key8": "5g2fbT6jZUHVCQWyFZjCpEpqfirSsoYjtAdTJmKeEhwkrB2r38bUqaSjNjCvcthsAiuardc9jjCMR3jmnJAoV6TR",
  "key9": "5kLzW2QsaLHUHp73qdzeigcQQiLdvhsZFfKcooY22xRLdfYYA9ZNj57rgFrMcik9DzJ9yLchp1e7zYdxFsjXBuyk",
  "key10": "5UnXaYV7EVv8xqeoenU7vvexbD5QErfZ4RSyibFr9C4kYvKnw4vjApJ8p3FU7R2ztH8A6PGEdd9XJY8hf663C3Jk",
  "key11": "2douo4gDQyadocCXNisSYnZe7n87pGCQYyF2PaPp7pQwRqR1xQYPxchgz3kXFnR6ZVwsT7yVEHVd244u4cUzBMuL",
  "key12": "528KLsbP12PPjQ8jHfhDGS9YFPtGJVPSXc4VKTPeSFem7NyAAHm7KcdaZC3RW9uocTLVnPXQ2Wymrzs8yztEMcfE",
  "key13": "3zptLv1SCBihyAHQTiWNTY6nKBReeWiTMDizBuZMcr5V35QsysAmNQgLgXQQUGH6pDvQSABBESSe8HNAdvfAL1Us",
  "key14": "2p9xnGHVGwiPShYS7iWp3Z74JF2Uo1pFBMjQQdw83Qekutzn6muEEzrWXzCne7mjbzgGosdahwSFWQ4Eeyr2teG2",
  "key15": "KruvqD47Xe2nUD38ssjMWuX3JQWQe9gVV9L2VJwXtEEmMDVYbXfzhm7TgGbdjm5y2PjeEYua69mFaVrF1BkqDEC",
  "key16": "5XvAJCqtofkExdtEgNc8CphvCt3udY98w2MJEwoXWXuiKSwWJdLUz3CAattJgNySaBQ5JdyX9NSL3k3NdEjKYxXz",
  "key17": "4aTWMNKQ3fgLBiu4xcTUxbSXWEfGgiBA3g9vVyFW6PtDvHe8VdZue3UK4sLRkWCKzF2hKwW3zmVXGKzuMjDWp52B",
  "key18": "4Joy3Cz5rXkikPei5bhnkMrdP2jkQqNDjM966W4DrzyVh2LEWvs9Pz526dTkzsH52re4kNMB8vWgo7MGjU3beARE",
  "key19": "4BxVJdsQxN5tUoBLPgeXaEsxeN1rUj56oX3asActcBiPiuddDkf8h5xXua8mSFD8MzfV2LWDBAtu22P3kvqMRTne",
  "key20": "3bA3PLLgkq6UT7xXxMKSWUX6mkjPEM9SzV2fxTSrkTxJfJzfrHvNV6uw7bv27vAn2pZsTPgXGT5DvZKr7RbbBHLf",
  "key21": "5LcuKXG3AUX6Htu5XqDdCerjyeGZ3BtsBeyr2ioa4dZjsvdxecFHZwmBEdtc6a9NzizaoL96baC8eggFhrLpMbdD",
  "key22": "2H9JFzGGP5tQgqS4CrDSe3F829KYpt1WRWpD2hXVqnUFw3yf9pyY36nAGGmdDWR8e3QxByLtdyMPzr5RhoJzFE73",
  "key23": "3zjbAcHAvVSQsTZq6rT8ZUmufUUbA4vRMReY8YCNFgaMNPZ7zrXqz8963om728GbHxdUkDRAEP2ctRQvhTgD2CeQ",
  "key24": "4jnf9SJde3nArnPTo7vhXbEEfNpFhWG2WkSEtoYzS3edaMsd6N9TJ2g7kRMv8J6Svc7C9Y2ZwVGkpnAmwf3BvkrY",
  "key25": "xZQMeySAacHG7FxYfu2Neayo5LL8WtpVZ13MueeZ8A6ZjHZouUTHCVhLJeJnPSjSEpiY8dBcQhS5J9FoS2rv6oG",
  "key26": "xeQ6pHVYV4d1wqy25nuW5Fq3F3nkkGuCQWrXeeKwBqtuqCqhVobAsG7XTSRh9Lu3kzqbtTs1yqUcaoYEh4VD51H",
  "key27": "4999imnR9AyntBvSrgPXt1p6u79GSZpby7Akiczx3EBRbmTh8L5tWEVnZysGzhhbg99C9mzXJzzUVGo2aomv51CB",
  "key28": "5XWwZMtrVBJNKXNsES83JQyEbieLtAERh8YF5bEDbzKmaDpZCH7F7gUCiQv1eGRaxrmM1M4cURcpzFSvgczjo1BS",
  "key29": "4QNwkdTagppzzp7H3jz5R7FyDfnecpZNoHP9Zp1pwfFhNSoYRpqn7uQzX9uvtZQDWFLRsiqR186RXmmTZ3t3yVNE",
  "key30": "3Zo5JheEA6rrCfnaqywUEz7spPGqJgsUPKDGjAuUApakb8GGJt1WCiDuTm3dQ3awxPvodJkTAFJSZEBdJmDW4jWn",
  "key31": "48PJyquNyBYtCECexk7teT48bww2zpUSktadjZrZ4yErU1cH7pyEsGyANpGv2DVoPp3fHBemtD9wnotJ9AAsnZr6",
  "key32": "65kdD5jJ7mYBFf5WeMebq4AShT6jQTdswVyGa3JvPe52xZdynPbB1FtCLpaLazkyGBu9xSQLkT7rkfj4q3druuCD",
  "key33": "3oBxEUJp6P2dXzBQ12McjA4PYvjbzzsuBUtdace4WrGbgLmvXfXjjfEN4YnrLcooLu84oyqYmzeQcskx7RUzovV4",
  "key34": "EWWRhS6NhmgsCUuoPdCeMnagAihngAzcA2qKtfXFNRWk3xVkxj7J9W9GVUSjQs2pQoTuVeZwfqEucjWTnt5cbQQ",
  "key35": "2jpSmkERAtkJzvHDq9JL41FKHvTvgSxiJN17xdZuvVpNwUkZbzEUfJ95QHrhmKZepkSQQYuC7xGjoeZi35kMyiQs",
  "key36": "7c9GVDwVdyc5tV5GKYFFX5F5EAQofo4gMbvkLdusjeNUwPC1hvDh7xiQsWgSqRZtrk4rRrN65ppC4XC69M3AScm",
  "key37": "2wcnSB7C2uSMK6c2k9sTtnQT6EuARiqUR88AyawBEueT6fcgnhBZhSNH94RALX7yeLjBKzxcTGH91PNhJtYon69p",
  "key38": "3TgVV57nPGw3f9cwwJVF2GGCPKdrgTFsubJRuv9Ys6PpqnK7XkFs5C7VaQTVGCXtsw2MubhLaXwPSaRowA6XdfB8",
  "key39": "nrQEey4vCxLaeGscukM5LgWQ3A2RgFCFUBrqaH7U9ogvGWLfvg69J2Rb36H45T3qkAjBfqxtewZYvDhfdi46ANW",
  "key40": "3X7pZNzRnjBg8ArBe1wL6q9kWD6ZVsdzMJAREhVw3vBpro7iXhAYjTXozazRXJwZeahoBQWkRorgTCmvVPPAsATn",
  "key41": "44vHjKojghGhCkPSRydQGWRFeGskbHL5cmKZyYiGwUU3nNm7TrPPqFoeRiAJnEEdgnPCNMqo9NBMjfFksKesAv74",
  "key42": "2suwVC1TdzGjPqtmgKRmE6FDA2dGWBdVvMdagGpnKiG61enrQQvNeoCnKk1eoQAvQvw5oVT5j3vUzB2UWcBm2YYS",
  "key43": "4R2NrsJW16in4vjjA1ivDWxx1KxZ3xc6yh72qTDLnBjU5XkxfgsaaU2guvSUWMUQ6wH1fqddZVwsBtCQ1otuFWkW",
  "key44": "thQ2ngQ3U6oP5MZmL4eRc5PmMrJHfNWwERxVUUsJF3JbhFE96DQYbuB1zz5ZzpTYvanrczKLLFp39DjCrQSHfsz"
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
