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
    "5cTDCqW8s4kSBB4sVFauoyNwAjR7L6CHqiSV1mZe2oSiWVy9F5NHzqRrpuzR5ETKeUhZPAP5wocRXUZLWfyFHT9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A444UayDqwdJm8BTKfzn9PTuaStuYVuNzoisHsovJjQ1daLzkSFjHnKVHaSf5oyAYL3hyjYszd86UZpjUREUHC8",
  "key1": "4ubp9QEiyjarK9jhnNLNDyCj5T9dBC8UzEE5y2dMWKJnR6NP6zNN1LPPaRGhtofmdqE9693gYBvUsXjjLxjhsoDi",
  "key2": "oQ1sgNPW67YrRGLP8WYkeThwV4NHMQcsANQVUNmj8WAMRqZUUtvy5t1nBXDu5Q3RXP5thVuw79AxiGJUnyLKAqT",
  "key3": "37WGTSojBwc86cSbMh6EUhoqJbo9AdNSYWFnpbYzbcEE9miikgQBMHKgjYCKL2eUES8mnHojfTEP3yriiwKMJAXF",
  "key4": "5FjU4oP81g3HLjw3kHf3epHDnsvYt3sVqwj5Czwj1BkiGUSsnCbFKvxUd4qmaM7FNn5hcarLkuiU8boJaVyTjWuy",
  "key5": "4BBfGZ6u2RNgt5MfmHqqD3s9kYFLqGYGAFnTKy1ggdBKDZ59BT9BsAUcV3FHyq8g7ZwFKF5tiecnKmC883X5YFkc",
  "key6": "2w1RVkxZCP14W1NMz6vGfD62DhrPacM5ivfWPdQD32r9vV73YCTW9RP1FC9q57R2pe16migb8nDEothDuaX8gMB6",
  "key7": "4FmnsQXon9Aurau2Aek7UBRxxjTYxkXaiR8grTXjD69zRxXs8J4KAmpJYXQToagGv4UxarPBPS8rq43arUsYuR8e",
  "key8": "4WQJZ15eGv79TeetjrRBJ3fj4qyD9S21VwSHLR4zTSJHanV2MjURCNJebRpy7yyCk6jg9HggnrqKu2YAo6G3SBE4",
  "key9": "528qM9x1uXTZcU5tSTwzmTnD98v8yHsGRJ8q8gGTFLwsEjyKTUkg32aE498794u2yWSVzm9MmL7EnUdF8ZqXdn18",
  "key10": "4b5tJa1uEjHX9GYmPmJ5L8jnzmx3ixxf3bjcDraikyaA18n6yLDSaKBz4iPFkfAxxT7nyGtPaF4FBNuc2mdeaNxe",
  "key11": "3CDHARgNXBMkLCH6E61PZMXYZER5Sg7c9vSymitFSLDYHKAmjiVmSzpG2htz55bgnaMUcP5h2u82CL9JzqKg4tcF",
  "key12": "57dtL6hLYkVoDwQEzHR2SxAhu8s831vBDanVddyhYEiro9mMvRXhLLSiBvJkKfLTGLFJaG2hLQtYs9ukMLJTFh8o",
  "key13": "61w9FngCrXTrpHTkEic4ouBPuxX8hc1x5EPw6wrvEVJMvJ2PVwQg1YHRawhkz24eVJAyC2hKvHKUBMiJCQ9vomMQ",
  "key14": "sHpkdAMYMP3QhEX4ixmH6GY4xsXqFUtC2Rshi4XxdV43oU8nU2HNGpt3Zn2YDgWzBLS463pimMFoLij9tBvWtmC",
  "key15": "4NyKwJRy1perJAMGmMSxG6B5uSTiGt4BU5ZiLDcLv9imw852Zr6T5QVmS855S1AjTobF5QexNBCLW8BnyEE9qY6a",
  "key16": "35JwseXb5ZYssfNpp3Q4fpnj1LfQpTBKZ71V4gkrgWfskkvwTZ2b2U4fxf3ip4JFZGeoVpPgRmiTMeaUaZGT9dzJ",
  "key17": "2UrDNLM3rdxiHE6xFrX6SjgUkaMzYtiXrn4fRThZGM6if7UB7vvHuPZJ7fS7R3M8cqnyXxKaXeTm3FCi724pcMft",
  "key18": "2iudRRJaguHzPM86vGHjgJD3kg3DCra7VVkiS676mWdqK7nMo2fj3fH5EzAD3oUvkW4dqdPRYnPkeueBdVPyFnSM",
  "key19": "sDLBUUWpR1jqxXy3E8SrCBK8tGs5kzUW7zXeiuiXHUUDqX9gnaQLgDxvyTF3jSrM22wQ7fym8m8Az4dtmWuQwFU",
  "key20": "5FrTGG9CiEjXSisNx2Ba5sBVHn1h9bJbLvRVJebXgDECBnEnmc6zEgJgvyenhZYRnPjdCC9tMzWcL8hj4vShNzwv",
  "key21": "28oyLSXdNf2FgN5gM9TDNJoYQ7oJ1ZS28QgDUSA9MkdYNSMEfgLZQfJuWZmA111WrnHD5D9MmEi2ccdydTwkgz9s",
  "key22": "5MD38zbhKkdjZcpBViHguY7WhWfBDYn15RRX3qQrnUneKuuHBX5a93vEwGSYt85P4iUZ4FBf9Fu5YDRKLC3Kk8mm",
  "key23": "3AXjiFUby42SvKTsH6y5XpFs5Doh7BCpyaaoZECTAx1vvGinvA1GErFYt4nYiAChGb5JZYVgcwepbS8oEvWmCc87",
  "key24": "36C9oYiNBNMBXjHAe8kQJHQKBAwCaL5fqDpxoNdN4oGe9rVC3175RVw1KvnpF1pqYRhJyjJK9teLG4RKgyvmTxcD",
  "key25": "5ZH9ejFEPXyqivG7BXdfGsmMEKMDGqcw6z7n125JimdWB7j2mp1yvkLpCDVA6y8owCThxYBhEVXfdcibjQN7Vc2g",
  "key26": "4zEQYVme2DvgUfHwXdiQHrvy71marZw4Xck8kUNy64mTdbiMoPn1hJgfc8unqysidfymagiWY69PKgLaRgmSN3ZX",
  "key27": "3ikdUyJrNeP1KUjwthtDR1MWXcQfLnnE1wqYbzwgyi1J1AhmteBMtypeYZQ4Z5Hi29T6zMTrKfqV6y6GsQxGnuyJ",
  "key28": "hXsttohdUTemEKCjoSZfcX4hhaKwydw8PURTM7EpJE7wKVSpKiUrNjRhGFRtWDwNLtfquuTG1f2RFKqjPS3ggHs",
  "key29": "PXK3rDLEUgBPV3JNDkkgZytoUZ92iMPCwYYkJiMpGmJeHujdsqwyKjypqVW5usPDiejNNvsBZjUvpoPdZxHo4ET",
  "key30": "4GvbaJQvpo7VrchanJqD38QujEazbtChYi2WTRsuQgjEpykhr5oX67jZF9wdyUwD89uD6hahzaf9qb39EAHbybhf",
  "key31": "3toGNhfg9U7WY3yo9mEbcqbQbZwp87CxkQCkxrY2dyLyuA17iMtxvr1mKDW4eDc98JfqskfxAt3DK4UL8jRGXPx5",
  "key32": "mAtMcvpmidgUi8GHG6aLVWogUZoTMQyBRXb1VCXSRFeVNdPd7d4kyoxCFKfAUEutJWGszTnbNYR9weV7z4Sy55E",
  "key33": "5tUNaWPho5xT1r7Tza3ERLCmVZgHcLaQm216VaaeAPMDBxkFhsBrAb9XYDdtjDYHFyvHTTT6wqbqMaTGj377KQLc",
  "key34": "35K6XTjH5UuF59CLARoHKb66ZCQfvgYS6u2eYGhNtALtwaEHABfHr9y5DQtvPjzqxjFiuN2Cac1fUk82P7vhApYA",
  "key35": "49gWmzJPPvwC9sJmWKPUCK1BcfQZMzULiKpfMq8us2zgnXkQ335WTaaWtitXwCkSK5kQmeamJydckc2ayEadxUta",
  "key36": "3DXVHaxECvxmfn6qauS8vCh71xCyUNjGZ8sDq3LxDnjVTi5YvJEVAWQgCVRk6u42qrUGvwDp9o3DRgeJCF9yjVAi",
  "key37": "63WVop1q4QojeWx5nmgRrHmRBiKnxS8nTxJPcDZ4rXLCyeU458HdJcT9Vp7T3sC5kFwF7RNVoPSLWb9LuqoVRhmh",
  "key38": "4uuB7DvpkJzMQBwHv7crqTWEPGnpWBrisJfXeWrFbFxUJz2zHva7gYKvXjasDjj8pnfcA5y1KuTjBGdkCWcZ576L",
  "key39": "64jMjrfVJBojFAfkZ4LWwNLuCNBhYqnnu2gFdUzhjqFvxUk9VRomKbFaPJ2dRUM1cM1Xoo8QY7NDfBmExW1LSoBj",
  "key40": "3CE2WLbG2noKgHcD7USawvR27GMCvdLb9pbPFZizH3gHphUjzY9DLYyLx6yBiiLYqttrBPU4KF54Ugo8SWHnA6Nk",
  "key41": "4x1YWpfRphvUhPdUbBipzBbKCXUog6pVF5Yo6SEZDU2xJk6A5UBvjiK8abnxNegATiQQmpkhAfVKMsTRMA6dEP8r",
  "key42": "2mEi2N3o2YbhWpcWaqv6p9hwKqUbtEyJYKzbTGrTkwmVpmKQz7xSiGJwgrCMtMitNPssvKpAcctduCfEZMpuSMvi",
  "key43": "4zsLQxKcoBrArX6njNxCsVVB7YM2zTduURMeYQoJUJFw68XzPYJPbfAm7dp6SNxfbZ1zu3gBU7RwunYdqo3yAko2",
  "key44": "4pTiuNT2x5q2kg1XH6tHurb8vKNYkekRSgnjMywKZLmUFo5ksStVyuYJRBXdVaoiCSCdQxT1NBURPK6PCjQLbSsg",
  "key45": "4cB8UmqtroWAE1N3RK1DK5LKUDGScYHX9EtTFDAV25PCW25eHDcvq7gUdqea9bZVpujb7hEWGMfUMcZnuVCxS5tW"
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
