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
    "29Z75aPzTnuDKWSTT1ge9tQbTnScRu8ipb38s7a5WwRrLjp4WfhQcMkzsiXUmWjoZnvjJJ2p65QSX52NxZuk7pW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZVGusYwAZoZuKtXBwX3bwLhoz7gEWyt22wAygt648xYKuMWr7MZkwG6AVDf3gm4HxnDhdVjQNHVTt1YNw8U61L",
  "key1": "5bpDLaNyEDuiMGJRFEmL9vLTygzJz8g6w6cEFiuboAV9dqSSjsSSzCWAi2NTd67im4FNsLioV2oAo19efr6XC95N",
  "key2": "4uPzaeqQU2Sh9f7Kv9AYLMCeRbV8wrvU1ptwnficXevdixqk8Ye7bR9X9tnR2EwbEGfuqFRRwECPESo9PciuDp4p",
  "key3": "3o8NV5N1dsQfd1xcDsXwX6XLRhspopKHGU9yNJWEq4Sm2P28Yvm3CxwC3PCTHKiYhNxPRJxFymHFdRgSRaxUoMvA",
  "key4": "5q3QQibDkueQTykujNK2svkrKQzHv1SCj9XZmsB3bjxotLYXYpjECZQQV7UTSbJLwZxo4QHJXyVk6492ToxQszfD",
  "key5": "4UN4yVP8y4fLvHzveGXgNA3ZGDS2Cx4YG2u3TEcGyrMhRaWZUbVG2WjDzm1kV5b71Kzh6HmABw9gGW7UQGB9anqU",
  "key6": "5RakxukMv26aqCLUxm7Ci3J6LtfF6Y4vZ7wpfUCyDGcjo8jvzWEKXJGzxAt7j9YxdmJwuHGXpVy1qxacRWezA7Wg",
  "key7": "33wLgXJj59LVcABrvDyxVMAkcc5jZkJs5s5Y3k7LksJugLAsoExsQXftriEG1DdSeHjNEADAbbjEnnEU2LP4eoN1",
  "key8": "4Un5RkWTaHHjNCBSY9676jj992QvEPnpLoyKoss6hRq7wmumiULHz8zqXwGaJPuAvw6r3ASHjbme9BeGh4uZgdmU",
  "key9": "2DmM3tDRnZuJCBaWM3eUNhexv9CaxeGWgBNoC9gWmqDBBFRjK5He9EguGovZeNvWK2s4Vwz3BhMusMYnpJZuzXfi",
  "key10": "2vUJ7hhi2pDfv1ocvcCji7Xab9syQBLx7tVWCN1WA3erm3rH16Kg64nWqZ2wRCkAT6Up8yH9zBi2KTy9GDKnSDqm",
  "key11": "44ck6zuyoxG3PTtgVcTsDBaD25NCtvqGuprocSofxon763cpfAiTZVFz66GwnPwYGA6NnC6WKLSe4nBSWzjTzp6u",
  "key12": "3ynEEaHsVVpqXt3NXfNCuKjsgsTfKp2pD94nVEqudN7JvhiAaKviNUDhR5UM388QcNCtzkiNKFM9ExLXonvJgz6y",
  "key13": "2z7T5K9x7bzr9wKRfpTgfYsk1o4vUYRcwbn3eDQ4eczWbzC5D4m5aLAttVNLyvX7t2mExYMaHcmPoj9vMyFbgdtw",
  "key14": "5v26q1REpYuC9YycWFKKdJgqfZeoioZBnxUdDgqVHaJNFSdVmsS2drN6hAN17QAGUbHRqMvJcrtM1bFqfqURmSAv",
  "key15": "3Z61Lmk9cjbRFTN4zhjfmK2LrEykxA1WRVsuYNCF7NeVrtW1cjtowCVAtchVRkK3ezWXfoGvT5fTnTVfBqG9e1yR",
  "key16": "2v1MCvVZyd4D7kWQFChWPLCWLsexKy5R6KFTGbte63VsLA3nVQiJmd9neqqbbKwveET5AthxeLLa576yEvFmr62o",
  "key17": "3HWWydrQPQMqZ7eJvAXWCndrJGY2oYarhiE3Yfp7mw7AFSwZEKy4htKpkPmbJbUXPSSmKLP6MKK2wS3uMEkNh2SU",
  "key18": "32XqYew6MxaZkNZDcJWfNhHhvVsgwCwMykmN72KqL3GEV1Pkj6J873JdYhK1Ko1eYJvP9GR4PwJLMWp6MxEfjVhm",
  "key19": "4fyZo4YeBm1EnKSr3Etv8sssftGs8JSNUbPrfc6pYzRKcs5zUWmegHyozthJ94BUY2oKY5BT2NKFPsaFrgW6WcAH",
  "key20": "5hZgbdBuHkjBe4DwvX8ydKHYiBi8TYrKzLQFTw5b1tvMg6oyRWkYvQL8hecThNZt7JJinYrN9rkZSsFLcTUf6co4",
  "key21": "1hn4kULWvTFJajHEvCCb9SQWjHKLJEdaX1dt7nJmxMDtU3amfmg1FfxyDXuM1hPa2gzG3HMJutwdVzAmFeTbNN1",
  "key22": "2mxTGwyiHoMiiigkrpa3F3PupMZve74saA5xMEmBEpcJr6vieEDu4ujNUxy6SwSfTgyjdu5XJro1PrpWgbfd8aX2",
  "key23": "3GPZ5YL9pmJf8Pn47C5UqgitvpBjVpUf4JMPFC24hWDUmnLUwfGRKqdiBDJDixPbXdpTELWJDtSuwteELrXv968Y",
  "key24": "2brXAQWQtGSnPjNby1NtEpqbVtsSbYesSPQvA1Rt47dt3za5HkLaUh7g5s6jwRjJvD5k9MQao94ZzyDUPGJvCcSZ",
  "key25": "2KBKESxGKtsc3qY4WR6ZMCDhJqxrccAV4Bg3SCio3AejFYsmekAeDpDJDMV9nCsKkeumfGR9KJ3BSc2moTw6J2r5",
  "key26": "5tzD9jUVzcwP7kQGQvaWEy8DW33scwtbp22bE8248VTvQXCQ5QAe3n5Bn9dAhUtV3jvPUpSLJXunYVEXk5dSwBp",
  "key27": "36aBGjCzm2aStEKsEqNQqCVCPcSx9JzJv9XwnR7sMMQYtzHkSJB9jpB212kgq2MmS1uuRB2N29UQXyLs9oEKYEkj",
  "key28": "555x7hJuQM2bBqgSwVBeP1ndjp5yKAay97QXMVTYPom9Cpda4jpPNJ57niE8EmbZRnT7AEnyZ9vqmmRjiMGNqiav",
  "key29": "5PN9TpuYVndbNmiiabRC3nNdHtdEXWtZUi4oivEtNnnk38SYppQ8R3dHaKPwRgYT4ix8XvXKZdPnBQt9juH1QhYJ",
  "key30": "4c1nVWBvcu8uTdqi9qQuQY3Q52QXF2Vs6nggWuniamUPT78TsjpN73yo291EdUjpLDdt6DvA2URapnhERtBDpc8U",
  "key31": "ENk8zLaadBRdZ1VnhHtV4HXjZAkFUJp8ZSZo5GUD6FdSt1FfvL6n8QtvmkqSQq9yTR97w1m1tXpM9ewbULM33eZ",
  "key32": "4CujmndfG5fbiCaCaXcgMsxwx6Hd8xDzgyKw9QJpAevLCZ54WmMHRk4tmA5cn5ThViFcUSGxvkn2mywwVEpdA2dn",
  "key33": "5T5c8UVXqbjyompGH8fk15f4cYY6Gn8htiXewtMQPPo3aQfBsixDDiogQgoPvBTWoG6JiaLeepUGxtv1cwvX3Dmn",
  "key34": "3RJqVWnvCsNPypYgJtGeBzuC6xACwxNUeN5vYDVyYZSQ88KVzMHKrhDywia3ZsWj5EHxXXtn8emcNyVW3Y21nDvq",
  "key35": "5zScnFGSLx8vuKcxFVYwoeHdRp4keZ7EgXczr9Q7c6mvdkLdu1uTydtaZ7fdDYuWbBSHL5xGApurb3FS5pSvwhzQ",
  "key36": "4DmKfkfymToSiNkoEtZdaaWfEJV6nvPhqf5PT43tTxLnh6LthwqhyrEokqHxiRfdQ1hosAq88pT7kA34PCN4WKbJ",
  "key37": "3iMhd3LLtzquJwjvPymm9hY7VbhE2Gt1TXpfBhpv7Da4sP3VE3xaPM8BmnBeYVx44CWqr5Z1Be9d6BWdyrrMc6og",
  "key38": "jqheAUTWbTvST1BEfDUxZUxUWvAGGXqrgbNAR9ELmX4ddpDy1hMkAcVF6v3aVr7MLkeCXkXwjjeP2N1BWAk1fE1",
  "key39": "kC8T2NXFiRhSMqby4uWPG5n2nNKTFDKWra8eoYsYd7PtRQvd6kRmSkrP14mdpNGnZHiAHhkwT2dsugx13Rf3foC",
  "key40": "5DCWFRQmphnu5bxFWhm7Ybtrk649cMoCihFS4H9owTq8bvYFXVqRyjSuPfPyV4vBLVvrBFi5jvnsjyVjQ38v91RR",
  "key41": "41MKFDA3ZpKpT8Rec4QSMLFi9DThgcfnC4oKN8sq8Ph9fc65oEiRdBBydi6h6o7UTVkutKPnuXtNrnP6A1gnT9fw",
  "key42": "4mM7etZyu7oU1NrMJ7pWJkmERhNPgT4boXTaw1876Rt9oyKcsTqx4GumgYRHeDRCfuPkVwEvh1aGvrki7ocZFamg",
  "key43": "jxnK7eJxtiHZGaJkf6uYfyyoP6PDKCZh9J3UbABuF7mtpSYt9TmGBnMVp59hUTXjYZz3kNh9VSqdfK9BLJhokZ6",
  "key44": "2L6bTge3Sc8p8vfdNHnEspS5ss34YELWeVXivTrSJtMHjxZxUXkZEGEVL52RYkGRc4p2o4AEcAApTQqdbERD3Gm9",
  "key45": "4tELEVorBaxH9bijHLMkkYNZUQ748aGdGM4GGPs6he4XdFr3Rup2X9z918pwSQSy3wkf7i2iaSSRwebC9ML29PTs",
  "key46": "4f1UtYPJYkzvxmBnWhu3botAPqDsQP1wbrqyDksTHwo9mtgTTgQv2ZeWyesp1owvP7T6g85nCeubhtCaJ4CMo1CJ",
  "key47": "B87Wap6bsz22WyVUuwbfh66VFJrzdtV5ijzggn1d4yj48eK4gXDAwc4JL7GRpgwyzEMi4n6UYT3XUfHiUNPjQ4A"
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
