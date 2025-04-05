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
    "3M9m2HJ5sptDesgsrxhzgo6jFoHzNBD8iniWrt2D5cCf6XMTsGxaFo4VCXyX4ksQUL3oqdT2HfRDVGMHECFnpcus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m8fKP2TCCmTYJz5Ws8zdRxcFasReVGsJ59PiABodAxTM2EJXsbTk6pGAzgHHJvjkiPZjad8WwdvFHgq64nYRnkj",
  "key1": "3xtQxMAYa9MJR42u4JJpgN3UY16F5btCYg94H3qWbk2nS7SNhP15hdc95ZeZhNR7Z1T1jHsREFNgE5wXHfK8v4K4",
  "key2": "5vMQtREM8httSdyP9wpmUb842otb6uPGrrn8GEmnjhr7fiWssKZrML5tZFqCmgqgm67CxCxCJ2MJwKPkFAoDnav6",
  "key3": "Z7pLEEZUycQEsw2x6eHhLPemecfEvZJYiJhEeicFa9ZuzzDLK4Tqay8fyxFAmTEMF6qPWpgC4ckZmo6fMmh87dg",
  "key4": "2NPBsShPwDiZM4KbLaoDvo1Z4WGNqdPobmD3HZfMjjBvCFYfdxNcxrCWFPpkzMo4yj3YEyy495qmRwjVSCFyx2dz",
  "key5": "61Q9FMbiiNhhjDphJJ5DBCXJVp7iXEFBktJDiAa9JsDf2wwYgJ5y1bcjhpQ3XnDA9VBQvy8Me2xDCeL9vrfPYLGw",
  "key6": "W3er1cW3W1BHpW3wGG1aHttCz5PendaSQGiqhcUGiyrTKhN3CfrApcFKxsoKF1MNsFfqH8ZmPxi94Kcjp4vqi7Y",
  "key7": "zmXbCkmdua1UXfX9yW3hbSUZhT6Nixx65UUKqP3DiZ5pcRBYvmZTbbsYJorKrMnb2UtfG1YdGJQNgn5r2btnf4u",
  "key8": "3VyFEtLeisdHGnTpQUcBdzMytHRVQBbagZt5fWY4bUTvvqCaGvqQHPs2PxLsgvoLaj7jkn6ZEUVovwqkDwAfoTVH",
  "key9": "2LGakQ1if5KFe7ag63mPL3624KhfU3bwaxREvEVxm7goGhMqoVAdMcGdr7xnL9iE6mxxkLsspnRQcg9ZZZ1otcxc",
  "key10": "4tgGoUt9M8MtaE21Fy8CnfAiewMV2DQ5jLmE7tuT1TKeJp5FpJhLyNBMvXqMRLdTBPjZYboFDGXw7mth8BGigPbG",
  "key11": "4Noox9N5xBU1yf9LS1aS79PjqyPAxHLm8yWTDDexfit7QeVxZmF9aDR2RSwfJHB6dSLn1aE1BeRWhYEEKDxbDbgY",
  "key12": "21E51fPB7Y5HdUA3kzus6z28pQH8crTU9TDjjvyh8Vam2cHPStxQe1HuVigPg6MsbfFBJv15n2TLnuStsrQxhh6C",
  "key13": "4gFGeG4mUygxYRwBxU7kPQeCEG3qQYkrrnf2RK4nWrqnrg7ZvY6tTzNH3WC8JuA432DjZ4W4oiwsiY23daaSUN3m",
  "key14": "3f3eQFR8Ew1DnP8MCFmgsJnUG1n7kN7F38UR4PU1dfH751VfC979aV5TA9GggY1sdNFSM1EasKtwZUGAch7nzMpQ",
  "key15": "D2VVFK8G774GXV5EJTp3hUEsnPReZVkUrq5ETB6K2tkxJF89EdWqQpU8Fr8YvpLbt4YiG27UD1Uy2YeQ7DQttYS",
  "key16": "2qMzbEW1BMHhuFfTHQnfr6WRpHq3WJA3XC58EdgbaoAmypR4YwRM7aenxa3nPiMCCQk1DbDsWnooeQfMFsgXUvPY",
  "key17": "5AwnYYxnHJrorv873NkLVsz7KPP2KYEHeWUBf7PCYgrJ3UT67JWGzDUv2U66qiiQCykn2gez9H2WgRM7V9DHbQzp",
  "key18": "2TFVWa3L22kUrymuHhNcudy3chYwd22TFU5Xyf2YaxsB2k3YW1Y1uXVFTk2LUFFPuRLde6G64q2sFZyvdxaTCxHL",
  "key19": "4yGrAzcgSfrmpFgWusvV1pFSDRwbSneZDqvXkGzGz8bXCHJ3BqSTFejeygAtY7kYKYqDjBWRYZPPSarahF59EpqJ",
  "key20": "5Gvff2W5fyGgbsm3YaYgCiLUiPDEoZ6XHUnXL8mcx5HTs11LTENA2zRnmxKp11xJvQUAan7gdBKg1dozf2pan2LD",
  "key21": "3NwibcPuGHw6MLFV496ukEsARQrs1rGrZNsnpwowFQJWBQUoVbobEbVhZium5UqAMyZrdaFuo6zUcDMZsVRGQ5kv",
  "key22": "5ecmAxz3d1jmZJ3RwHQRMPz1WEeJhXmZ8GNpdLXYMvkjZYd2wVwK1NaaNqwiJ3U8g6d8zADArkCiB4YZqcJRG4MH",
  "key23": "xjXX7zCT8xkh29M8XEuRZhE7RuuBVZHAzcVuZiV7ZJ8WMHNhEjUsha7jdEj8JX9cCef4joPPMN6itYGvaHZ8HLV",
  "key24": "5xf398Fpb7syK5ZjXQcsovCsotDkxSYjm9ftMgobY2VMdHeE65Dmv8JLJxUgpjk7bMtzqvpFuvuqF83VSSCubqvm",
  "key25": "54kX59FrPTkav9mZcQAK1X9ktrhjM3HZ2B6HRJRAYL3jF5rmkHPeZPcX49sevW95cax7Ezm6uYM1j56ot4XtUDNp",
  "key26": "3bze39bBDXpw4xg76BksFt2KjLHMR9cCr5tGgSENN8r5A2aMDAm4ETpiesxoavny99xaEsQ6xzuTwoR4V4M3pyjg",
  "key27": "5bRCAuvzCnVdkBQThJ5L5PNNKqqY2vZPjBt3LNtKcjVTqW5L65X7ZwsNkkWwLTbartGUGdKvU6xH7WyN9trnYqrx",
  "key28": "YG2aRiu52PhpkgZRa2FcTzA7K6U1VDxDuVYPCRpHF6wQcCFjA5B5mR6gz8B7bGrYpsCPudyTUA3cGmVKbdcQG1j",
  "key29": "4B5GmRPwSuuBWoqJXmV1LDQNevi8n6jp46macoKi5DQYCT69NsJhWw49qkyTD1pzZRRS7NL8F3smpbNafudqtab2",
  "key30": "3cuSuTrZU8G7riyP7BCuTMqKtuHDVqxPQUB86zCep1vsYnsDU7Ni9e9dtBQmf9J2wLysCXqkKAJE7sBjPaZKz7HZ"
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
