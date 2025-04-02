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
    "2WxgcbJYpK38sw6faHB4cF7r3QMv8QCNyNCGH7sg7EX1MAcn8QXYhYyyxoMhh6DxW399nfJMn59imiyot5SBc5vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkwWBdWD9tn8JLFSsWStBQLKr1EimqJNJ52sY5n8NMg52upLxpDVKwm3LFtYeKLDVrBS9dzZoSd18DTRWFPqoXb",
  "key1": "4ijWdeh6YBpLzePL7vUZPGp7HvXfEEkwqhjnY9uhp1Uw65Tn6hfsYUA65vZAT385Ua86MvXFygWUBZobJK4DMCH2",
  "key2": "5ynykx2Uud2chSLnAtf9jhaVmD5FuS1WJonCH2XV1XX2uTj33sGjsKCcbcz7Z32TCWQ2RURzybghxvYQPzYAmVJB",
  "key3": "24MvQ6tqvUecfhjbJVw5cG31FieLLovpHFHV375PFmd11aoag6BUmPFGSFRt6bmtXgvaeVsTm5dqQ1oxm3qxU1h9",
  "key4": "5QiAadCsdpb5DTVcHAiu5iSKsPoRKaBCvhdgUym8PWoHUkr4TrLq84kkZHq7opEBRF1h2R9NRuFVndseAsTDEPWZ",
  "key5": "5KH1s2DXUgLKvMaGSCEQmNpvYmf42dyBT72sGqZdPZvfUYkC2RvA1iqmk9UYHNJKjJ49XS3j6Q6xhaT9V9kMSgMi",
  "key6": "5QcyTSH3a3FBqw87xpiFhYv86B2RoLgetmAYnJb5fpfp1adtkonnxuwJwqgt8q2QTfZTCCdypyDCSvFQyYA6x7AS",
  "key7": "5bNbn2xWjHM9BBGa4cuJH1usugEkXj57ThUrTAX9CheMjA41tfjdi8yMgh5yTNvTHmUoRSo4TGvGQrEjHiuBu1Ke",
  "key8": "4U2NZ6nfemVhh8hPTfufPiNHCPBiEiyHAKUii4SXvVu2RQnmCwRyhFkyWtLGtVz9zg3LfPJRFQgA5bUgJSJQt8Mq",
  "key9": "52wHmi7b2bbTztUESnd8TwHB84JqRzdkEE7mC5jGsXTbPqcS6tgK6GkGdoEBrUPPThhXo8L1MBre3zZwFvoJUv5K",
  "key10": "5upPDqEYw13amBgJSXLogydCNY9zYackZGGytQjREiBpsCxXFwDgWjieVNEjJTi5Bcf49Lc4pRSCPz5bZqvVgUnt",
  "key11": "5jZhEVPSyk5EL9MUFJmmX2FXn74rFDcebgZppJxekHKSTHaxhXoW47ZHvo1NycvVYeD5c72qRhUyZkBcXWxZEgr4",
  "key12": "4w4scGXipjKw4W1NR15pUpKU7ZdRtvhLjkn9zyoR5GcaMnar2nbQeSLFgoQ24fHYPtWPjJu3i8hXWDZsShU1TwZv",
  "key13": "3Np92UqsgdavdycgFNQJK4E9WS82qxHi4smPPQTSPp2976CLQWZAmiZddpF9Wb6vRfjs4k9hJJx8AYY1q12yjFgW",
  "key14": "3XFyqiURFTskKpCPTLYiBJ3ewKu6ktAVVs8HtBmBXA4Gsh2zfoktZmbL76jjoKjff3RDWD2Nch2A1psoKZL8cPPG",
  "key15": "4PvFACraWBcdpnzwAmE5rmfed2pLQJwsCXxN4ER41NcXGHW8RQm2KHCmkUfSNB4ZtXZsGA25YBHdq7XobhSf8NK8",
  "key16": "61LLof6CFyQGYXnYpsh9zzZG6ooCiSMXXMymP5VJcHGKVSFMAzxNV5MHeib1vKuS9qkfngAhg3WksCrc3RzexYHd",
  "key17": "5wwKDdfVhtdva4pQudzTbhaXC99oxRwk6wAG5xmgrawGxvPqP9a6ACnfW996ZPppk3h1ETNk69awFPVGMSjk3VPK",
  "key18": "34sboNwKtFNADwsu8cfwSga8TLD7nQwkfdj3Tao2az5n1QdidjmW6eNHTuCtDqaQd8RNc9s9RfkdaVi72Z3Uwynt",
  "key19": "u1HzqvgfkNHwXCSH7uaUaeA81voSJ8F6TUEuseoQ4adHr68AHYVQSTrr9bZQ33xbqJnb1FZz3ZsjThoxtTvF91K",
  "key20": "3JrsXBtU9oNXM2D16v8zqzgkifr42nCwpVTqBDgKgEQH3v6yeTiGKmDA3haFfdC5DRyvs1U3KjN7rC38nRVMH7yE",
  "key21": "5mGQRbj6LvWFFfxkJYJ3WEiV7iEairR9a25AardfczcCo44ib6FFqLVi7ETK9R2RDwUY7SUzdR6pGEiu4NHYXCTb",
  "key22": "62cWaxyJDCeL2kazfAsRHQKK797QK4CrrcvqGqYLK3tpGUJHwMPuu1rrwN7ScAXJuVKTMwyhNwnCJdN9Nsfd9ffw",
  "key23": "TqwpYV31fsb31xvzKze88bXebXPgNzMX2EMieHnqzqMg9q3duw1vHHM2AU7YcGTt1ymWhaiAtXE2mPr6WaTt24C",
  "key24": "3cBiDdL5G3pMnLaDzwLXxCoaaVc1RjPyDz8jP6EkHRyUmKoHmNHgHTMixYUk11613JP2bA8rB2WDe5FQMmh6U3WQ",
  "key25": "wuQjknkv5VrZNaxGfCEdvKj1cdMKjM9jVZVSJE7QA6Uvmrtv3wvVAwALAXv8eQNdCkJnBXZZi1j7GesBz14DhZX",
  "key26": "2BGyqEeXqkyuF7wGnJij6kxQFXcGfXsJAXKySdre2vMmRtEtCVmbTdGoS49ogZX7dAr47rXXZ9W1dczwNyncaaHv",
  "key27": "5z3TSQsTumKUE9vw5vd2gVw74LxnpvkukDq1xomqueWYddjdVCDGEYFs3CFC7bRcwGC8cTkhmgxJjgb217Xjb4DA",
  "key28": "76atk18J4sc4W6hPRYkB4kjFLJsyZtJNQoGHvEQTPt8M5PbErTUNxNcqLNY79FAfrGDvz4C4eyFACUGY2Df7WK8",
  "key29": "3eBSnMoXZ3HV2j2h8BJg95LdjTQThvCQaommgS3F2nLbP5KfPxNAnXpwtFmJmc6q4cSW3wekK7jsQSMLPzgBBoAg",
  "key30": "7Tv4TCh41HxE4Sb4uV3jfmCBiWaKrhE3rq6zhBu8f6CpPe3J7R9r8vcQDU8dMDTkvf96cAsmzc6ssa65yU38aw6",
  "key31": "4EMZECZxWLCr3bip5uV9TzeuAxvs9yhFJF2wP2xNKM5WTi4fDFEM6aTNQztw3Kc2MRQHDNpm3fnqEhHv2VDjF9by",
  "key32": "3kKx6TjDxoFhG1vVSDJ2ozRfbQrcg88cmU5rC12KMCTvzfjE481DTEuFiQfRVWmGg78hmVgharF6dU1zqA3Vzi4C",
  "key33": "3V1k6hpZSGiBte9sWE1hvPker6gPYrg21x9vX1GEmWqqamjKQFHZV9GsWLjq76eskzx9bFfXeocHpxNaQNy12roM",
  "key34": "4GHc2ZBZW5pZpPisJhR1zijbNTis52iBQmfUMgPi696uPUxrghbswhoRAd8viGegPRGZdrJozS5GqYw1HPbpHReD",
  "key35": "U7YhuwiNDRBmS2N5ojiVFLfSg8jke5J4weJwHgRKwEkcSaN6EtwBSngS6c3ZedUBTTHKB3rDWP3pKB993T86Z6G",
  "key36": "2dBwdrDskJdimZySjxi6Go6YCoZvbxJLMQdjCAB9rM2hgrdG6na86KJ9Br7YrJFUNmYyEKpkhsyS95wGDA5Pj3za",
  "key37": "SLk1y8GWTNASn27jCfMAvuEqbFoL8xzBuaqAeTzaF4b2UFUUNLHEP1pzqJD3mw8FRnaqiMW3gkYpU7TuuCkrQhh",
  "key38": "2Fhd1xxueVoABUNyB8YSMqKMDbiPfomeJuMJp45PcuHJPot3Kr1RzG6JXGntqQext7pQSqcWQotAeE4xWKCYVRi4",
  "key39": "PLH1VG7RXcTWm2CeyLiPNqBAGTErYkNHEWJUqdCpFR5dLzZscksBYdCtY2LvjkrkjXLh7cyPrkVEi2JwijmDnbX",
  "key40": "5JaWLY1cw7NqCPMivkjbBUcazkpyr8uLKVjGhJ5McchXH7hyE8aKfhJpPDaM1KHLHvfZnrfrviRTLFmUBwAykFqq",
  "key41": "5aKm6ip8RNTyWYcP4Cx8yaKz3Ryfw1LxPtuDcmv3cegPqFL3YbtzQsra8z4sKNfLKgB1c2fHxGkPNZRicFyed9EL",
  "key42": "3vG2ogyhe4xw7CBLRfBdLgcy73pYHTPTt76E4534eXjihkVpr85aHahowDR6R4JU2bKkbC1Ad1vcknY4jHK2WzqX",
  "key43": "4FhwPkJfpGsCEd44yhHLTAHz1KhKurF9s8V2UsEDE6WzbibSLnMBYUwGWTDbTx9X56kk6zY11vAZKGdE1dSuom3Z"
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
