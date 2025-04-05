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
    "4T6ENpp5ZS1ddR9jZiCooFTL4SfcwSYjpuBWRkq6EmYRhUFHn6HPTJtV5Z8V7BTqt6pRq87F2zkAGQ8mnrEUVfGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qs19hD8LFWomNjMGda7upk1R3MZhGqzaHQhA14LGdVP4EYqdjeiAJ3SkCkFpAg7dmst3aoU5uofQdy4vRGAtrLE",
  "key1": "3xrbCPk6nBy861un2dh3Mazh2bCzsBEQDNrRU1edBwjLixRLQs9VzKYLNS6BUNb7GmKzdFqrXNWxjtFsfN74MLZB",
  "key2": "5dJ4LcXxWKqtA5js5F98j6JMhANtBHx6eeqFCJpjmkHbkg3qeH12hXpstZh415okhaLwoaDMUKCgEsxopeuP5N7w",
  "key3": "29qokqLuBwr2o2zL4d3exMCvPMGpxqBeXpoAM7E7takJuU8d82SaPx4zya7G6LL8F1L1cqh4yhCHA8WySEQtRkVH",
  "key4": "5hH5suG4niCyrYsDvW8gPMJXwoseBrUE1qWQHfLVBrv5PSRJdznJ8BAJqyGKYc6ca4a74QqBap6fW5geYATWiwjN",
  "key5": "3565UboVAJLHfTk7KiJR8cbusUX2LjtU1WY6TjU97Gv5CjTXptB4PatorGYKcuYN8PRAT7VWCfQLke9gh5s7A6vA",
  "key6": "3KvZoLusFjXnnDm5CMJ9a8pQzsRQACCYgCRFWm6hJmD5WCYuoAZ1LCJ2kLaeSjKcFkfmANM9zpER7Zo6W3JsGDAC",
  "key7": "2eh4RDJAxDS3g32uPY5ve8wwZVD2k4NFJvakpXKZezeejpxfJdYAxjEWwLCmL3TvbuV7u5pdKDwvJ66onGSp1ued",
  "key8": "5R73271ijdGS2SRBdqVNfFsVvC4VXa6G1F4uZac28G1hQraDNx4RGwAWu6DAnvzLMudXsDht1YLSxZLWo3N3ELXQ",
  "key9": "2UFgkd9E21cpDAMuxtEzeWtmj3DsQiby9hBFWZdXoJwevRySnQVcJmgPHNivpU4t2Cmw2N6XZVXed4Ca4vPKFXJP",
  "key10": "5c5BgJYygBcbQLmAR1sRoNeAFf9J5wjDAFEXmSTQ8dFt3hnBvJiocM24XLJD9pdwKAHQcYH7JHpn1xRoUmqULkba",
  "key11": "5kudue4TbdSaV8dRLSPoCsYyGC6fBtARG1uTCnM4oyFxsP3BQjMhSsVxWnfzDPfRXHypJcanBcHh6VhuQ9un3sgT",
  "key12": "5dsyacLBjPfg5h7rzePC694jUZX1p1uxqog8uTX2nrnMEee1xpvdGSTDjSZxTEKe1orVjPJbWhoAYcMx5tz4h7m3",
  "key13": "4KeeuAKpCncmQWQ1VanDqE84wSREhdirnMuARHrV7KXJXGKdzdyAREeyjbTfXZtw9tNqNrZMMhoFZerkNJebkFtK",
  "key14": "waeVkdFyQdMHYCAf1KBcg7ijMPwP6JfudNsqFVhEKhVgzsZ4Dvtn74NFtSZNsmduQKA3hBp9uLyhmRe1Wpej3Ty",
  "key15": "63frVp4vRpBNkmd3BDWC4nbQFBWpJyF2RiMxKR8kgor2NXvRgs7KQcM4AG9ftraUoMpmoi8FMATjjeQAAWxBM6pS",
  "key16": "26SSDxwSG9hq3zt9msxVzMLWkVrGEyGrkCxzue1MxbdvHVFGp5u3jDELChqCbpQskeivQpSzL35H5hFGiNyU3i3r",
  "key17": "2seUD3J4FLYVbZvHELby3YTYpMbLnBgRdD7NTbRKeKYMLFQNWHEGNcW9Ex54z47jYkTYKJpTTRZ7KDNjiztdJ3cS",
  "key18": "3SmuyMRxMp514hfomS6JPbjc1EEtk4imq4oaiEPcT7RfdZomicRj8tS1t2fzf6EzwXe25Q91nbrdXsss2XMEfcD9",
  "key19": "3EYYW89JQTiGgjruzLGWsCN59nNtTs1sewft54ibzznAjUDGpZk1BZGotzWWn24weZq16nbuoYErWi9LKoS1rKog",
  "key20": "4jDknsWzecyrzCefhuMWgmnugXoKhf5hHhNS6JY85uwB8BJ3wN3vvPE3rTFJ4L72jmBCEHVTRpWM3ppzuSFk3V3P",
  "key21": "xoDj2QxAwf8MymWBbHpoXZaASNeQb27K1KpYQMEEYLYiY7o5zfMMjXpwBy4gzGhNjrtPwWcZh31kmwkF5Vw5QJb",
  "key22": "3eia1y1vEA4n4uc1aYih8QiPAgqDegCpBoia5qsN1ZQAygHkBaQHhgj6u15uifBfSZK9rLkYSjx85eBP4EMtkuAK",
  "key23": "xHfxjgpcTZHJ3RYk8b7LXTkJBfnxpQXTyEbTmUwvaqtcmMip5hs1M3qn1kipdn34LKAwwwe3FdiPiWPLkvsWShy",
  "key24": "55gikjC7KmYSSPv7fnRT2V4Vb8p4QCa6d6riM8m7PoFZTmd6a6RhtuZXr65h41D5xmQHjMvLxFrm87e26hLYU2p7",
  "key25": "2b8rEC8ssx4Wf4DAxGrESydgSBD5AYTFiRWjFEZPfDVPzTJAEZnTHaorCKD5LjfEmZ6SEu41cFhzgjyKGdGKxA8m",
  "key26": "4F2mEiFRN2G7y7uyqpvVDwnqbs51YVReWy8VMXQMihv4ph6yumnahWB2NP1iJrbLBWW4h6hC2XCALPZgj8kRmn4R",
  "key27": "5HixmpoJfwTJacZWc6eQsnoJXXQGVFk1ATmQaM51Td98VjZD9xroQkqQtc7vDPiW8tUae4FYpDcpcUdre6pgYgZx",
  "key28": "2x1BjN6r2nR9HM5mGGZwBt9SLUYSkfRbd5xyedpdycnvw5ZrQUobh58sZkpqM22SQkW5di4fucRrdQ8cC2h2yEFF",
  "key29": "2dYtMJ7ujiG4oS5mZ9NW6DFDBZPtn8GHbsaazwGviRCcacpBiAebJHmW67RrZFbhUfSiGRA3ihCqqAjus4bvSnzd",
  "key30": "4KyXBTo6mUMSCBbcA15Q3Qs4C78YnrtBxPavPngDMxwq7c47bQ3zDEoRAqkt1bs3LorgaRhK74qUVHr5vLxDcCph",
  "key31": "3ihkoXqAEJK9GgNazziTQbLxVKbDUmUJSkMsCRa5tMaWwmuZoqFoQ9mqFUDNufQ39rUdaPeYNp1jyq62RRw42g45",
  "key32": "3DZYM6zh16b1aKxVaCo576RgdkgQGkJDVc97hP5hdiGAUAHJUZx21EA7EexXVtD6AwehNVPbt9QDsvjCEVxgBuWU",
  "key33": "3TM8x7xj2jbYV9XDSvXp1mbA2oAEQ3XRRCxYJcT7kqF5tAaXB5yVRtAikgZHezn6Jxkakf86q2mqA8mbkVsoNxzj",
  "key34": "67aaTEWmG2h6DmWFs66qeg4FqcL23hqKGP77PH6gEckyrdLfQHdJfSjq5S1uzmyCXQTAfcud6YwwpNe6VMBwe5T5",
  "key35": "2xH4n3WCLKdB9RJrWBNjsKWJLJkvUiEiwFDSucigfB6AQZevC7eiTKVqrwwhBA3ktRQD5DPitnueHFGgS4zDmu2t",
  "key36": "4gPYixiFhmzbBFkX87fKASFowA1wEAeqfrmb44ymTPJkVwyKgaHuC3djEEEuAVdvifQUz3S7NAkzVjdWqMHMAdE8",
  "key37": "2kT6nsCf77wMoAJabbNQL7PEa7PL7FUPsiGR6aFwp8seTFUoga7ZafwZupyQtDk3vyvJuLMet2kBASw8ucJXELcn"
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
