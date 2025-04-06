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
    "2bU28ccRitnRPtsJxypG42rRQdENzUmNnAUjd5QzAXp2myaybPvVtGVDXgwVupZvgEd7V456DSxVqNEvPegUJNZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1U6WgPBb5P1JsExT6SV4UKx7b8JvvEDKFJdkVW1hhArkWzVLuFCsi9Kzid2ZTZb3YD6EStd7MS9TVSJ8E43m6o",
  "key1": "34ZYdSxwTu1SJUJkqHRCpauuYcgmx3mQNVDxKdYQB9LwjYun3Z6KaxsTcqEuxj4Y8oo7tyZRcG3miwmtXkNZes3N",
  "key2": "36an3RrLit62FqdvRwBqniafNArWX1qiQbhRURNLfj39XE4wJvPEA2q7yBVSwHX76VV4JKNtC6g8JzfteK3BSx8H",
  "key3": "25poShjQHrrT65i2UZNoCaCwXn1p5AYQbFfoSG5nW72VFnvvzPREiRjhsi5ZfKLL8uNBjkMn2BAii5ci5snWy6Ky",
  "key4": "4JGS5F5uf2z8FD52k1wPR2ZKTQEjvLTx1MpyqK2sVo2jkvMHWudeohM21RipDMM87zSpeAXFbHqYzSgZtJuVp6r1",
  "key5": "2LersB8zDHxcRo7sZifWzwPdHyJPd5xVFaFHu5JHDKS49nsh9Tphm2fEV4CsHPFUzWpW6evFxxuLyNsksBhtT26J",
  "key6": "5r9VvoVGib3PinUrhYTJvdRSsw19r11JWgqTo8Hyx8Pg95UWy7RCcgFzVJbEiYAjotMCC8nY9m4VsnXJDT2Zz6Rv",
  "key7": "38LHB2sd2D5BkcaNE64LFvyB7dfiWBV8VBSbHpqhozp5zwBCRbsWfcuEQQK4nvVkmjRQeRjfPcAPT3Jb2DHWRzgC",
  "key8": "4wqUUynnSzGrne3yc7qp8kAfwkvhaSHVpVVL3m8NX3UkipED9vzQHV37pV15wo4Rqbz9iSvAra976TY2B5T7Ch9c",
  "key9": "uddDqJaLQNU7wB9jSrEsWT9Fm9qfmYMTKqavwSD24cJbD6mo64gBKstSUzAqeLi3kbRaurHA4deNuabZz1dVL7V",
  "key10": "2CRzWrABnYkt9NXbkihi6oEKH7oTFkriGxPdfDYMHhtJ6uYVx8Rh4ruGHM2xYWhdDNX15TAibNgwaoDuekc8nrT8",
  "key11": "4QTdLFNcm1gT1iSYmSQSKsc7xJQQ4GaakgP6QqqJRmnsQpCZQKcCqFYgjpLEx8Mjdn4h31z94RymRcsJ7HREPqTh",
  "key12": "2V1wCwWJPsTPWjhnCZnkbNU6ab3oz44Jo4fx55nwNVxLH9VDDbfkzukQBfSumcmy7cFtnvsMrkq7fSuQwprcU7Ur",
  "key13": "5tWmxN1JvG5XRnzJ9rqiGR9fi5YS9K5LXhE4xwBoggdBSuYa8fTRAqwghYsoVmqAb2rv5pdea84ESzvGq5xz9kHR",
  "key14": "rCuCtd53LcupW1YMbQL51NPzWaLndmgY2yECr4azwihWaNH34kETz2xbPTnMDbKu95XYmqfFrcpDmbVoCR3zd8f",
  "key15": "dLYm5Wm9vmZ4AXJ7bBaNaEn193EVr1atcAxjVxpLP9Z2pKEqV1EAFGuJs6x85Yg6Whnxg3K1WqpzT1xVd3pBEqU",
  "key16": "4fBxs7HjctUphY9JzgLxX6qjoZxPWdyobUEaY7zxAvEBsJGc1AJx2ZsDB2LrgiTGNYqunXMZSQxVwtk8ghe73bwN",
  "key17": "4yUvfzf258skUZYrVYpvmbud29iuM9sp3yZ2fzS7hybQ1pknumM56w4BsF9kUEBxmF71W8uugvArjcDtLYD64YMS",
  "key18": "38xWaCwjSweJhdMU8y3h6GjHfxpPHzxaLwqMJDnCq8NCgnNj8FFoBCH1j1f5tNfrj6aJU22cmgFLDWwUZyNHUamy",
  "key19": "4L9QEruPf7oWDrQfwxqHwiB7rcBjyrbrvNAXSVBdTjaP5W3T7eozWnBtKKVndi9NKj5zbxgtsFdwRv2faf6tAsVW",
  "key20": "5Ls5dEeJszzcnmiGqQyvBGoW4SLhMDwGXMJoBFf2G311Li7PR6crSDNhqnNYnFsgPmBbhLBq2sTfvnJaHchbEsDA",
  "key21": "5rDLstYDfwPDr5ahKAUpfiRbmWfVY9YL6hfSnVgJLWo4GuMcbaJV739MdeY6jNxWFhAtUcPSjbVVXDfDJ214wm7Z",
  "key22": "kfgCYoDXmhqojtVv4kDzgKhq2CmJDTAWRxzwPJdUs6EwfQY8fZLix3KH8MbctdmQPSnoa33g9k1SPqtuef7pxEV",
  "key23": "5vw7R2Yh9Bvud6xipZAbk3sUnT1GXT1hb9sTQccmnoh7RSrzc3CSozYNoBxsyVgvj3ZSuvmta7NXJ7v1PSW4SLmo",
  "key24": "64Jh5YqyvcQDPTJJYuzVMxqpE9eWndr8usPeeb7YL7XYpedS3bpCNhFxxNXXU3inFCirayv4cczkWs3kAnrkv6xm",
  "key25": "46cGPZTBTMSQ5HFQaT9JQNgcMN3svGabq6ShJsKe5FCEYsWLWfqYFyar8ES65jxh5sWjvAWK2MWACWu6RtW1XwXp",
  "key26": "41SX3rUfGrw5AwvchQjuYJeYDCTsCoD5fHhurpFJAJXU8pZnSa3B1ZC2Fjy4MQGDEdHcQsGqndeFHKyCMZiFKW24",
  "key27": "5MM6EVGw9EPXtLL4Y8y9Y3cf5FPXDt3JbBzk9THJuQzxjgWERXLgpTUEU8Fp6oeZQMVe6PGaZtahiU2moXuHo2no"
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
