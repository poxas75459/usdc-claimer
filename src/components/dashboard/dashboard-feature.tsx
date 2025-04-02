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
    "5Sn7DUqqSrbiH8gs97VhkzHA31C8k3VkdXcaUzfP3e8Vysd8wQWcDTpiT1mgEf52KvDuiqj4T9tQP1YNkc8B3bbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rd5u6wduZkTymyQn9Vhkuuv1thX36s6ueCQGR6djCrdXc7ACCYSLU4wUJZNwESeoZRZ6EXyxjJAFHT3733NZRJs",
  "key1": "2nEgJRCGBqdKrjvU9QCh498XEPE87NrjqU2vJmi7dNsa2rrG8r7tCo4XTsfEzsLxCdLuerww9gnjj6m45hBSKEN7",
  "key2": "5DqeMjyafwsiSHUvBLKsV5JzWjf5zwZkV2eKwZFtT2jbkrHYdaBvt4uBfohkvBaPQ16pS1QcH9D61vn1jUgBc6Lu",
  "key3": "5NxhjXwzJvVvUyhu9wH25oqknqzPejsfYpx54CUqrF9NVZxTw4zT938bdA62gjQBKUT5BcuZkBLx4a54VCmMSjCk",
  "key4": "3npWWdj4vUyE1vcyqSr6NfHvACYwGTNana3weSkxxxkTanT53wbtj5dfhCzdCrYtVLKWsyiSHwizbqNyu2tsqYyn",
  "key5": "43KFhZbszp3U9c2R5WnrGGyG8Wmbr3amamDjXo11xMUy2yQRaVVYU2cH1qSPzaFEJQDVdNcGGwEwFJU2HkooVFXZ",
  "key6": "4itDDuEYckoJJMWjMhewDbE7iBGU9tzicvCTPJv8tqmgLahgh5ygBLQbeTafCan4oH4ZizpNSkWXrP3c9WaQ8Xz9",
  "key7": "5sqgLSKyQwPyWtzjSPcWdr4of7uFtcxxt1QBaxQg2feuxCwtKcF8gpG3yqeo2ND5nFXH7FNaGLr2VGMyMFPF2cUJ",
  "key8": "gsSVnwtiupyC6YhdWBQw7Aaaektw3bq54GJWtRMZiUV8JtKAG99VoCDxSPnQRdfbnZkJjLGhAf2wsNS7PQyPT6i",
  "key9": "3x6cCS69cvwwvTuip5FcW2SAJK4mCckSKu7WqVZfjNgSxyw3AAP3o91TPUMy7CLTVchSevzXYPjqdDEff2D2fyW1",
  "key10": "6yaGiQNiPNv98NANnEPyiTJUVqyT4PtPESCcz62oLTxDP36gQTZUjh94PUgHjbrJdXSciq13SaEz9VkwsUv6gtN",
  "key11": "3wua75YKNUvhZWAQKSHJkqw7gSQQxU1xUg2EiCVajRbdbZe9PJtXp7C5uaB9RNQ1Quy57ojWYkMC8ThLjFtES4RS",
  "key12": "5bhmaVcEFTrd7om1w4Pvz7Uf1PxTAuHfaKQrK5WcY5mbCiwG77j1qV7zAW4M7BedWEfG5TSn44QNpdjSbw2wNr6f",
  "key13": "5aYYa6rXQiixhxAU4m7uTS1gPLCRbPaoCXVcb43LsffjQJxrbL9YvrA2qX5CuJY7myu24T2WZB16XSZSsPhCykPR",
  "key14": "1r5XLCms7AEaqMbBTPMRGBrEzFuV4yC8i8KW5MDp1fRcDdysh89MAKAE3LpAJMqjnwyT1ZWi5bFSJwaSLQN1BG2",
  "key15": "UXe8wF3vVdYxqAeP5oNgUZ5p1mgADAqCcsqyoAr6P82ft1E7rahksHYjHMNbLNBtM16dnSQUWEbtPD1Ly7sew4Z",
  "key16": "1P27JNKJV48Sz7u2PCB3eoyUAGtC2PWwqHm8qpLkgS6d8W1DieaVgnZgBispBRgre39DGwvnYTecVywRRHJLgLu",
  "key17": "4qe2XCwiCR2ezjG4UkNfKbpTTs6K6Y4WukPnv9QvWJ2GMNWDJAYzLGk8Be48d6pDsGsTjYn3A7HszVqaWbEQfMd4",
  "key18": "2Qd3ZzmA1HK6g8MRCj4ogx9YdzUEQsxgmdPjFUGi2kqJfML4Z7BvwzfGLESv3Pfc8XeF18esXpejg8UnR5fqGy15",
  "key19": "5AHCCf5EqxASpqXe3ZZBpBcnRbzWKP99rwYdB8FDm3AKYrch68BSYgkqL2ZQYShKWYTAMAVCKhLmsgvLGenxboHo",
  "key20": "DWWBD2viwcQzHvLsRmw6h4Wm6bGDTwBQH1xJ2Dq1w9Z5v2c8L381KJ561K2NDofRR4FNKUwAbT89kSZb22eB3Ud",
  "key21": "2TXqLzxsjRyX4LtWzPgpQAQX1MCgGHVxNF1n5JWmeUvyj6arqMToW9R9D2CGPR4vMoYgNk4V4rYVnTBVBqAJyDnL",
  "key22": "4dAjSyhmkotoRP8f3uUJ5r3YF4Jak52gmduUwom1Leo7VWNvgrrQ42hjPmYn2YvGsnqcRVyvbwEaTjEmg4yqeh8Y",
  "key23": "5FPLtGLjEvH1jiVdoxnpHo8XPRQynxJnjCmrDJLEyjsaTFLN5xe6Ba5CsUV5uLDB9mohoynL1cfFFNh444k7NAKS",
  "key24": "53PDut4K5s3opE24hovJc4z5xdPyMjEJ3fJBe5QiKx7X7vs758KsURKvAYwLa6f1U95VpYtdie75qrpB1BA27iTn",
  "key25": "2s5Q8gQS1xe9ESVwc3uJXnYxKT8UkcYNf4mXJjEA29TwrmC7uN615iiVUKWpGkwyR7pjRbXDn2yffsX28dbFBCvk",
  "key26": "466ZHw61KCpDHVP6r55zbfayNiG6FgtxQeyDCbVEQjniuf9WXHveUzG8GGFANPgyGC2XsSAeqrA6e7WfHWhoGTCH",
  "key27": "2jHZdZGEQHSozqtGLGSb6wVPPFjKybFY4Eamn21PJXajyQEdqSxUKyWHM3tHgKtHzktvZmEfNJFxuKd9L7knhQSw",
  "key28": "5CZVN28dL7AWgYbxH8bmNydfCJS36nGCsgFfezonQYVNp5us8dUPYq4tCoQJzPXhJXa5wapuHpSBUTvY1fgU9GrE",
  "key29": "4FujCY1uJdmwYHgW2gaV8f1Dh52U2MAHDG8YY2nXeTc7Dw3CnovEtddTwgQ4HmcsNNTuXx6oy6YopT6Ba7nCd1Ct",
  "key30": "6RxPZe2fv19mTLHQEKzeYFCBW5XR7gwm7Z75KdN5xsHgfxd4b58ioE7G3fyNsUonkE4vgSGcskhxRYQzAXAmrRv",
  "key31": "2Yf4jyK3rpYPvRUvQpWY6dx1XDd7YxryYJm4838Z5GKzFahwBWhYrPhRqK5cCtFteAJseDKb3DtUYZ3vunQL9C39",
  "key32": "2reuz7Tc77Us3YpQTDKqS6wYXiWqzVWDK5o5nJuemBbVBn7rWVcDq7Lq38zYLqjWpdUYKqnf1BLxUBS7g3TweQrG",
  "key33": "4EeGD5kyHoSRQGc6bGFGgQxSZG5osN39Weiq8vfrAW1WsMeF5bqZUxWYrh7u1LpLwSKf78HzbgSQ57eYsMWkGp7h",
  "key34": "2rZSgG35icNtFMqtmJ7V6QzDtvnago8w1Dr3WyvBazhV9ApYTNidNWBMVPxdAPkyk5xfhaAXSknkXDP87pnjjZ49",
  "key35": "44eXwkvjoQr5VRsfEGSSe2GYeJaeQJwPEPecBf8bWT1KU6QEEkMeNEXAanUv4Mdv7U2xWfNC82q4JEQHSPyGDWrK",
  "key36": "3R8YjZNghV8c4GGyE6EH1b8BhNgSJF7L5QmmYVGziba5j27gK8fJqKa8Xfo3DDwt2EKTQTKSPajJgriJ7Eeiy2BE",
  "key37": "3PL9pHSfVSaaHH3soQVxAnZNScp2VfTSu6LswNMQEN8GqyHpwnKfnj2RZkvfDfUVt7VrWsgEMDFuz8crsvjg19T4",
  "key38": "538GK5jEytkyza5tAkyrxUNQratUrCru23XtcEsRdWyBK2T6FRf1NQqLLANkFzmCg4w78MYfjposzYPfSEPf4hJG",
  "key39": "FboRahp1PewyGLBPuiqQY4bEFpyP35361WiYtX2P8kveDE1e5p4GESZM71kSwaQDsrQu9YZhu1aUpMNabnHy63B",
  "key40": "5CEwDRk3kahFuvkw1sHW7rJqwWypKqzf786CpvnKeJ1qzF71r4Eeyv8oLSCapJuzA3SMThhNYhcQn1hkzGvgFaq1",
  "key41": "66XrTJBEhKccQA1etvpfZDUQX4J33CeXbZEtoWJmaPw86BDfCX2PS6jTWeGMZzdX99b8BH2dJpzhCDAhjcShHZki",
  "key42": "5EEenS6obARA9jhD6aEwjJ8kniDfmGRCdfQAbcNq7XWKVbZ7S2kmjxb2CxPS1TtNr8d2J8HKmkNtQNFK7ZAENU2E",
  "key43": "4JR5G84YfAq8vYoyJmqLFn6Tnct5XMVCaZ1wpdFtACAVojMNDp7rEkrdH3oHrMm58cARfb4Y2QWDiKUKLqYTZN16"
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
