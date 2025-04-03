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
    "2W3xgZdCfBy77eSTkK5yEVKyoWc9RYphHbANEbnyQk3eMztTSoYpoijDHfjuVVJE65cAruaboHBzLAubXzpwDEYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sM1ppRYBT8zDRedYiVkvojBvLSV84gE9DSLQGPsKtCTBG8T4bRqy3NTAPoVVnfxmBCQoCpv13f1UztHR1s5PxvN",
  "key1": "3GoiaK46daiUZbx5beUpwasPxALRUWskJZb4BCwrWYMqhGfYfnwGhmXHLXNjkJ42Pr5UfBksVXG8rtvoDYTG9WfA",
  "key2": "2emBFAVauix4TkCAPfcDenBznMaguByD43mQF2BWhsSz4BKABETkFjimws6WbPUjmbE78nNnV5NsjC4dLPrhn9aN",
  "key3": "ti7hbxmY7VvTi94LvvuWQAxFbSjNH9RcZk7BHeM7TFQXmHwG8LJCDKkrSB6GxjWPXjVx36qQqmjYqWm9MXzU6Qp",
  "key4": "4rLoSDX2S1yGtqs7cLtdYYmumam3Be3o27SnNDjwFvCCBv1JLEuZc9WjaLWiuwscJCzj41vxHYnrY4sAzzm2qodU",
  "key5": "5C56wTJZC2ZHD3EeJuxWe9GMXMXfZP61L3ksFQaKwMtVAdr5PErJBgr7N8gznKAo5XPsaN3d88ooq9p6QAFss8cV",
  "key6": "aP9oq8pwAeaF93PrKEjhRxaRFYmXGdLXnmfDQEwU1cXBmeSBqEJ4FXzMmv99geMfudhHxn2VJcvRZhoANbH7MHH",
  "key7": "47R4rsdGorfAHKLGCBauofGeBHdPdzyh26kugUmFQLAM5niASiRfLTcC6KdShhkj8nNkPVSndk5R8CXEq8DbY7dU",
  "key8": "2fvv26FZ1bMYmP5Bj6GXPWtU9WY5YGngS1EVDLF6zSaLfUMXLpKYtA7FSC1sgbaXR9NSbTRB1KCU31marNkV19DH",
  "key9": "V8e9K8kJnX2NWtFKjq8aPUpQyQroZe7ho7AXcw8YfgjPeHyQXEVuSHVacWMmCri2tUKanymecN9jqnxCiQ74aGW",
  "key10": "29zCxetP7k7k1RYXbxDi1XymFbLSNDocbSSLkKYub4e47EqeJYgiMNgNefXG83u1kwnG1eJtNNssPW7cnErZcFsE",
  "key11": "38cnrYHxz1naWWbau8awwH5Vnixh5qCDWaZz1nVBkW2KdPN5WtrMczC6b7mmj8B8GJQKd8wi3XsJYM4bx97SrwTX",
  "key12": "5Eaxrrw2ecqyYqAXB3U53ucb8M8CqKwf4BjBSczvXGRevjcRKFjoiyJdpvJxUhvDZuabquCidBvjCADsRyoQ5JKB",
  "key13": "VYqF1NnqnVqgWYWJbSQVnwAYQET5Co8SYFHUUpPoGbVRaV978CFZY81g234Chmvy3T44CBqJTHXPvrGQJcuQQwF",
  "key14": "3YKgzqAuXCzewkxWBKVfKg5rZFPFt7AEkNdNxZE3b4xs5goyPY8Wb7FqwfkFryW9jCHCPVyuomHHECXvcr3ZCUGG",
  "key15": "4SXa2Bkwt1jYwStq863KgPtMRAdYnEpL3h7dDrafuBjh9Sy2FyGBRWPQzTHcRC61HjbpSdETdNpB83AmL98UVCEq",
  "key16": "5y7VMZ3LiDKdP6nAzSw3WLcEaBDDq2HgeYTPr8kZFWrwePEQuBgq1SgNGFfdsJ2hQhg6DAMpB1F2iJTAbNyhAnaa",
  "key17": "2nsUE72qfejVeT3T12DecftSdNJ83JpcJtRGKreZoi2u4wXAKCHePxbD8X96qZAzUYbGmVsk2mCKDHMvBKDpn1BT",
  "key18": "5MDvn1ZvSFjbPACE6UHpB2HtJVfLYNxEGGhrJRqH5ifeJX9M12raoWs4ZX3dZ24Y5cqZDYixymtUvZzWga4qXW9n",
  "key19": "5PwqJw2X9EfoytAxbfRJZJmZpZ7X6q7ZvMLJELgveyLWMhVXgJjpXcmaKUqVxZtHYzkeUjNvvQf4uuNfkTZSJ9Pj",
  "key20": "2x6QYde8wMqwaVfUwXbZjsrS19qnybDJttV8yd6XcSXSiZYkcWrcRSMjJD5iBDDsLpBKNvT9xNAhh1PGhFwEgWHM",
  "key21": "4h4bxgeszLCyDaL2ZuiR3kdbP3JvSTe46k2RjJjX6yyXEEygHHDFUG8PCTsLn5BmG5ao5X9WHUHvwXy2T6nv8opJ",
  "key22": "37etcmeHwB9kreXTkFUk1ZJJSQ9PWcAqcSfey3mefY3kUa1qhA4gySvJY7xw6dynkts2V1XsDesw9o1xvY7QbsbR",
  "key23": "4UKHvFGwQYFk5i8pw29YChynmHbyuXsX28GAnkHbydwU3oH7s1xdvLhgMjpUZd97SPeMHiTwJaikc5cTxR1YZU6M",
  "key24": "27nUhBcQoqX3EHoVvi38zxwk6fEDtDX4FrqSTTLEGyHpf1k2wN4REcjsJCnmVTrxnCyjVRzHLpfvhJiCadWdRHMs",
  "key25": "42vymTRnQVbfhfLUeEfEc1nJR8PtDrg6rX3Q889xKutpTYr6LR5Hm1znXEm8EW6tXGTqnE1btopfwAfy6yf7YabM",
  "key26": "4FPnWYG7cQRa6McD2xEjLooG8VCiQtubwBkRwZzuLqsuxc8EFHUqSnuf2iBnuYFh27YxkhdXciHzReuR4m6uTwN1",
  "key27": "3t2NL66aCpq9xoEm9aSUBZLcsMLSL281ACnmbsrR5njKxdS5eHCQZG6E32y9vnk1zpveM2wezkwEUYf2yVtnisre",
  "key28": "3yYQsrLw1URNhHzQgSarRaMTtq9tngHuS8sTSD9mDZJ7zM9jQcMWD2aZeLRdmajzzZacRt4RvgkvRk1jqQETdCuk",
  "key29": "5d3mXddWQHfRxWYJSuyvEcY1MfQ4c2m1cjz1SEu6kWjNsSxk7ZspoFiQNjvRmm3CKFYJ9Ju9BDohkJfpBKLW9zYQ",
  "key30": "3NCJX9asA6TPHCotbRJg79ozPmM4PvVqQVEpn9fBg1gMYRDa2hjxX2RFPa51kvQVmWABHUexn1GKZTEkZXk4tfos",
  "key31": "28mmWTgVBFQc7Dt225nLwErqbUgp8crh7xzmEGEgGDzubdz9Nh9kFUYKnSjojTPhAUJ9o2R9zkpBNscMRQd83mJn",
  "key32": "ntF9AxQ65pE7TabU9266vWxkRGTGSWMiM1jvLEEocp3bQnVwtmL8HeccH8mfjAa2jzF2irMX1bNXhbWyypSU6Zp",
  "key33": "2MxqDPrBjmHmyXwF8zxuMYi9aK2x7yvAvdmo2AnbHELNctshkiCGXWW952zxq4zPFbKU91ccbHYFwKaydRcLmfMk",
  "key34": "3N4MrRFp7fFrZikeQtetUcRdQ5TC4hAV9d49DjSZqiz7yhC9t7Ugrz4WcRm81XsnW1Cgny6ZBHXQqMi6F4sjFtwJ",
  "key35": "3roRXbVnV5jneHUExrSNFvPVc7UvgHzWQbteaHmxHKsaGduLndLfNzdGr3SNfmoGTrWL5UYEtz5DUy3eSNMNKk9L",
  "key36": "JEinRxVYXXdwt5PviyyNNUdrMaggpUBWmtoBndeEtoWPAmSm1zLKk4ewc7jXKmrght9HyQ78sUXRaVFUxMP7NDh",
  "key37": "A3oHpJzBeennFyQGnEoxcGY3zCBiwmcfoo7Wao6upGDvRDXVArmALcHzfjp6aiTMdmVhiPqD6a6PKwVBqQdy6TV",
  "key38": "619CTSHSJPMqj91qWU1VRmz2aswr8WAte4YwrCucPcMK41gArC3cDiAAUChP3ujciP94upgaDfYxDDKRJ3xdDzdh",
  "key39": "4fChUiMyWMvZBkqDWzcK9YvpAzzSHAhGKNxcp7DMqfxxVgkr7BdgwBPNhQEHN6QoBbUkRGPMFhf5no9bZ1xpkR5R",
  "key40": "4fyyh5jFAriQzN8WGJ3AvREp4iUqXNLY7k7LTyUSNgDh9dXnMJ7pX3GRjKJkcxbBkCqhT5iPFpuHJVvPXB2bYesk",
  "key41": "5pqr4dUbWgKCcu7CX1wb2cyp4NP7nCafvgTT96wCNbE4A7tiZaRgSbjQ59k2uehwZJQikry6HR52nJ8M1bH2kARV",
  "key42": "8Ry4Kxipik9tijGv1HAbjsKzKzgJMr2awtuef2fFdNEuqtr8wGqyZkFAiwnVUYDjSCPdq7a1FtqMzmkU2tY1kgF",
  "key43": "ZGKyCY4Xv2Q91nd6EuhCVqxMngWxLfon37rUNrsiQmiEKpRcLKxkRdKCH2pKV55zUhLKgKJbL2fgLNCVVErEdbb",
  "key44": "2MuPg3MRks2ESKhDF4iLMPHeXBfWED9igjXbjjQtU78vuCLBnNo6GnjEvMNzADY3Y5vdR72JgW7jPmesLvefZAMW",
  "key45": "339DEQKkocfKK8MJ5JNBhSb6HthpGorna5DmRxkk6fXDpU9ybohTuSCdbcSKikVTDB47rA9ndENeZZX5P8W5Tf7G",
  "key46": "5gQD9igb9Ujganx5wJNvLcStH6Y68bbs9vAZeJDBn5PRaG4NkQeBkty4yx54K3wR9Hfp4YFwsKZ6AMqAC2d1ZiS6",
  "key47": "2Di3EX7pH1NWJFzDVhrUtRLwseJ5ywKougH9JJEXmaLd8PrGJWfhnTCrUQVqUzA87oA4vN9Bk39NoomMeuootyMD",
  "key48": "12816BgEH9pYKLUa2yxyM4odMbMLWXerb9Cin8v67XreHAT5wPwDpSS4ozAWFwme4QcjCzGLnkbgQwZ8B9zESHk5",
  "key49": "5WN281TqrVs8F7R9gkFKRPzZDatpy3AmNDBTVinLy3nSNjVpTeSHXouPFufjPZ8FS6DW7Fc9b2vtMERinErVa4es"
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
