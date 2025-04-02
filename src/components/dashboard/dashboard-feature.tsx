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
    "28wbzwvvczSSgpqPyhv39VrPZErM9yfefwsZjwJvVKyxqRE1GBA2ZbcEpyYS8HYowKtTBuomM3ijJEodbemrJcaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vxViALe7Y7zUAqSx12pWMVmg2pzFjefhfpfgfpUVPjSc8UkshVByaYBApFTnA75CKUfuUxtGMueEiB81oHNbkc5",
  "key1": "3Ym4n8BqKXKL4bDBgikw2qsuMmMoV5gSwzCfTap9MzV47fxHNu9WDdtbPVPmz2oiQKEU4Tks8sPexUKxAipykpGq",
  "key2": "3ZKEqkHUnJDaxwKkEXbQ9339dPdyktqWcucWoyPJCsqr144GthsNM1cbgzhzwZVJn9KE6NLzpTeGRqee7vFKLsd",
  "key3": "55Cz62Lyd9x15efprN1sHB3jZRkmwSAdGo7XNt7yeEHa8obGavMrzxSFywKeZ6zC9juTwuduvwfybrgy8wfsy2t4",
  "key4": "2gG9ziXzrGB7byRwwym221eKm7UFJC2PPk9oiwjbKJfV4WQj4rk64syUDb7UeVe7XAEvQ8AzZa5x12q7XJ5r1ivB",
  "key5": "2kGAp82cwE8aBBSYogTsSVwUJ9kfUDh8Mb3BzcVEsmVwtyahmrZKHm2dpzK4z2Z3wzgiCdtvgU7dDwoq1pq3cph2",
  "key6": "4wFRph9ciBQWtmMnUJsqVp7pVPyPUeiKgQAWyEXW8dtyCCfHgsjBYxd8YmGPtxWiQUQ4aFWetjtXcA4votoBpzQu",
  "key7": "57mLEErRzA8ftZNGJWu4BD6jWV3YtfHckokDuXLDxstEhBu8XkTakxtLfyJ6RathwkTJTzaB4DujkD5bPQ75LRuB",
  "key8": "3FJ8upbkSpAmAieNzLsaC32CDUi5HtATV3JBXkhqnN7LUakfifs8iFD9i6LCnLDTompb3mFQHrJV3SnSNGeqANLG",
  "key9": "2Fg9PkkW6ARszKimGPBvSJCSFSECbYfBmLWGNqiw1AwfZFFKdTiRXPfbuj67cpAbpBorVgZ2f4P8xvKnjfWy1gfk",
  "key10": "3NTfUYmwDe3NrWAbVyBqUDnonRKRcPGc64otm98Mmp4vHEmfdSGBw4DQXqTNwwkpYCbAT5QcqUUz11v9Uhii6Srh",
  "key11": "4pEhraALpbyBUkJsAbueJXb24q7BAL8ArXj3wSjRG6TJJj7GV8syreJjvXeoukeNivBUevxu23r7r65X2J1SRTEP",
  "key12": "Rh1NnBJdApRvAdYMRf9MVeM3hof8bnbkU8mh38Fn7vzRRDjU7bdTLz46ai3RvhYyg8JDTtznkeV8QruTTnf9ALG",
  "key13": "4pKhATwzaKxYG2c1p7FRRZuHU3C1SjwWSWVD9mLdHGA2reikhz4RuzQpyg1iGcPfxJZYr9bUCYAo7t63CAAuNBHL",
  "key14": "Ya8jH1E3DEYWcxn6BK7isMFBdbm4ry5vjD3BZLrB1p6bm5x38yvu3gFGUE74XCjkVmaCKGVDrCw7Y2PV8uhhnyj",
  "key15": "us9MAUyvdCBtER3G2sGb5irgWhbjymEQAcicdMyNP2m5q6WtQvYrGTwNEyvwCWVa2MvWuqtpD95L1XJDqyGmwXE",
  "key16": "4RRuHYU1XGGu7CAxF3bLHc343RW8DfDzZEvZgp4dzQ5iajcgES3k4n1zaSTBVmGNg15W66RxLxmpn7k3dGxatnR2",
  "key17": "5xpVqYw2RJF7wcv4RjLQs8S2mzMkq4wU96xFeDNo9gAZt4tfFajVShjaXvy1QpfivJYmxF92Bj5wGKtJ9RSZeq4a",
  "key18": "5CF1Ert1gQKpZysdtgieyAGLW7yBm4HMmUsF9mLrQohAhYfdQ1rE4wv3mrYgiBxpGD1nekbWjFSHM7DVGCdNKLe2",
  "key19": "4cLWZDxdTtradbswaPUN2uMyeqWR4g4YuLyotL5pJKmA5PNUbTi3eGuUqs9Sg2voJisknTdadkkcEuMMGjRfM7eN",
  "key20": "4sBjHHfTJi8amuxhhydxfnUtTnr6CWSFNWZGxCV9P5XfL7GFpGApSoD2yPbVjstUa3NXwF8fspBsxd6nETv3LCgt",
  "key21": "2i8sLpUDW6s53sjJ2LL9Eg817xtGQQ27Sv9NdmGSMG211bAEFR5ND8kTx4jkp3BsSBJs6qs2LzKQX6qPHi4UJrxr",
  "key22": "37nX3Qb64NZoWjB39onBcpKfnHhQkcnkebWGJvJ3fmZGeADqPVCDWo7PiT9SmDDCx2qtWSb8roz7c7uPhPWjmM5C",
  "key23": "2WjVVPLTy9uuvk1APWfnuXKCVkJnkwAHV4QvTdu9fmcQEgxoGCUa3Mq9RTXvxPGgepHLR3SexRGVcP9RkWyhfUnc",
  "key24": "USCJFTeXrDXYmQPGfAZ2bDmGPSp2inWtDxfNzpF78ZATY2TW4wQrwkrBHxbkWf5av1ZpCFnzcxu2XxRiEE5G8Fi",
  "key25": "4y8JeBEb4erspXmVPi3BWqUtCPeyCrPooDb3X1BtcWHSH5mfjTNoZm2NbEV8BRKUT5KXJkuLAsNcTBdNLEoKeoaE",
  "key26": "3XNxjJzfpsBWNXWiZUShEcZM8y5uAMSrJQm2BPL6YDPHWYjv7XZXzwsV8CwkFBg82Z8YFMBpHQrpEPRt8Lpjxgca",
  "key27": "3jrNdoCjQie4CLdYCqodM67GMVqrGygaRDfEkRDZiYTUuGtb4kbpAHkW4BZEjEg5KN7F2v1g2UZhz2UU95gv73a4",
  "key28": "3dyPurx3RXbpFRyCuivk7zSke4Lgp4da1HfKdP2mg2NFFu121ASSjcL8rzDvtsQZM6LjdvoxbeH3w4FD1sevYBQE",
  "key29": "4gYVAj7BGuzLPuNTUu8qZFmicGhWwM8CDLMJZ1Cpgg6tKuNJqrZFsCW51WTEdrYauYbLmF7FYPZd3LiWUTA4n2BW",
  "key30": "3Ma2hZppFH3XqzySxSKzcBqcE3B8EYiSsSxE6rXXhVGVg4VE5ffNVmrxDkfh4PXEeHp3EzWN8zkxb77tM2V54cPo",
  "key31": "5hpyH3CUangRXMC4qEiNuLY9Nn4Xds7puKsDgmDQxX8yz5bZiJp7r5Bh7k3oXTyrqnnLXRuZpmFsNd5Lx41KQJeu",
  "key32": "2fXyuC4J78vnaQaJ1L5GryW8wGJnw8XCiFcPnbcBfioTyrZJBfvVN875LPDzsozTEZfP8z9Ysc1xwnAE8iZ1waRD",
  "key33": "5TwD4Su77CwpbaiDToC3MZiz1saK8eCYyh4xCCmhQ9ZN8BQJyrnBAhZEYAmoiTiC57b7TC2fQ9mM8M5J1TyVqCtk",
  "key34": "66C7cwVX1uo5BfKfdW3YesUsdTLiH7MMkM7qCh65XTQqgTA2VAnAFoe3c4jbP81rkPegjf1yUb6ZmiJxe3f5QLDE",
  "key35": "sU2scYRvMdU7Uh7AffMkLZBiFj4z1DqQjNPavbAcGVF49LAqjgBNK5b9UJHMdigpKZedcccgWigiJSNTASKX2pH",
  "key36": "dBLTw6LJRjLFegaBqVAHj3Kab8CgTN8iwM3veUYdjbC32gdwWQRQWvhdUF1uysh5AGYRJPFnUVH2hXZrvabYyEk",
  "key37": "4ZjjzZbW32aiGUpLj5NAW9Tmj2WxqHbBNwVCT2mCHf7PeX2w7fy5MwcTwckfD3sPkz34648jbbrgmTAproQd89C8",
  "key38": "5sfiXP75FTYvguUU1gcjwzER1LogPTYVS98cfcD7761CY6yz4M1LPfm5fm7EoRpQKRTgcJCA1kcR1zehGyVNkNFU",
  "key39": "3qoV799eZ7s2tMGs6EJGFXJez1hhqWg2b1QFfDNmDUziQfsBwFwVoowJQcW91DmHqZUiCvaMTaQRU8JbC7y9ofou",
  "key40": "zVvnmZPLdtAvsSbxjUCaN43u8a17JiA5ivhnKTmFMY8bL1Dc5dKGRchTo3s5NSceEESeXsjoB6WcTdEi4Qpxx6N",
  "key41": "2B5TSz2XwwHKtSMLfc6RfF8GodwFtriv63PTByKrQHMWjqm6ByuUqCakyyKTfDXApcKseYJLS3MbLp8yqSSaDpYA",
  "key42": "tdSpwpBtsetTg6DsonG8QbKrSfSn8yxkif49kL4bhFZsVZdV6E1sgoiiEhw2F4SRsHdJFTC5oQju4tAdQ7BoRXz",
  "key43": "2a6boLbfTv2Hf2ZfgkKv4rAnDXZGoEy7dHxK2zgBBxkGaiALvyLLF8WvJCfh1rWjKGYsdSYDpJCk6f7TYs2ugJeh"
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
