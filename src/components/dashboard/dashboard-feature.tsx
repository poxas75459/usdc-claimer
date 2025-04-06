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
    "3kxpGU89T9GukGFxAXHsACKF95pDDqaKDvpPiki4S5LNigCCCEbTcMJnsytXkCjwBAgjVuoMeAGSSam6uQEBBLZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJRoz4hCE8LW3abCJg2fjcAEE3VShr5VNhLwgY7m2WWdZrmePscYEfLqQEUBSauLfin9BSZfRxfzrwYqwSzWP3F",
  "key1": "34MmvaCfyfnzATFkBgJV131j2taouAjFjpx6D1Phj7MDxZjHjLqRqGacLfwWMdTkjA8BSPM5bbwZzS8srGoXxA35",
  "key2": "jiRKGdXMP4pts5vFs7Fqsd4C7QimMQyAZMLcwfYoTXTZpFbf7nAECnu47BKfoTbZPZk2NsD3UytiAs1Q2JAUNB9",
  "key3": "4zKVqKTvecLtjJNW5rQ2qEZVBjad549N48JMmGBKHfhxHVDzEeabeF9ZHuwk4xrPJ4CL9crUD52HWjoxxtavtVdN",
  "key4": "5Ti51kk6rLfihqP1Pq7H1VBpRDzyqtgAYQ5V4gJ9wq4UYhrHp5Bq3FN6gaMPYuE9pwEinSZfXm5PKTCfhRHoccxU",
  "key5": "3sJWn5kCaHzDZ3KioMX27AUNMMUcDXJpfxBHeEZ87j7Y6E5ePR54ruoKekQGRH3Adjt6MDRBKUA5PvWA6jGyA63a",
  "key6": "226xuREDetDoWYrhDoJ38SKAELFoR6CEKhWQZjL4ACXMp5M9pb1b2EbKoU7y8C3VzYyDsqPQxsPVfeRfZWG4A9XW",
  "key7": "4kpX7cfyiyALqhwTTFdPrcMEhvEycYfNtBy2XbWd2rx39DvVsvHB3E8HeKtib4f3HqgELWp6ZZF3J9JLg5frQDHt",
  "key8": "3DUEnwqsRwzb9yGbwSNJkmshJfv2zNg53pu2Sz2wJVyUCovvqABnsaS5LtVvk7VzVajysM2VetDisS42wbwwsswm",
  "key9": "5Jvipx5ME7bzyEtNo8xr9eznFonX8jNJFMewKGLSGGfchtmtJ8brRmisnSjeWPHqQGGbaSaXvS2c3v4MfXD9ZgsY",
  "key10": "2U8iHzYozVg6AtEYe75mqAQvuenQ7m42M6S7jB8PbHWFaVKiDpoUUyWD8ewkBNN41um59kEqp43F4cCXBMZDPibz",
  "key11": "KbZ7KKguC2gTLSsP2EZGo75y4KAZeo2rHbSMAmxkhvad6tqJeVFw4GXDGZZWDcwY4FEsafGLZzAnvcSm4hVSVZ9",
  "key12": "55BU4z4kEhB2to5dVLvsxTuoom36uKbfnntSfoiPqBptoQcHFB2hQs7VfYeyfgrnFSi9rz8Rwwtr4XB5qwvsYvmR",
  "key13": "44X61ufXmrygw2D6AxwSVmagi9wmEzpLs2CCL8m7mJoemhK7c6MBxLfhZtk49kkzxAsM8bL8gAk3m5SsqZfMS77k",
  "key14": "A8nxxreREejhMbRcoZr9mkL62hUg1aurZ6zP3tak3fYZVGQoHhA2P3WTAXzdiEu7xFtU7mNsmZJwW78HDzDNRHy",
  "key15": "36JDvegLnrzzEb8jktPCiGnQiqWn791JmYJzxKwDQbSExgs5QSGNQMUFowYVA7w5E9HnW48bojR2Z8aWHAznjjWx",
  "key16": "3mHHAYMfnVsrKkgwapf1vMpyUjMRXmpNdS1eiMBxPEebxodsPJDfp7j6QCgpPHStzBbAnA429Uwttcoo48uFqVFx",
  "key17": "5wGnJhPGYMyMGcdaHALf8gTGiYeJqqvjSvYbbpTaKda2Z5CSHwAyVWqiVWomKkZT6WoZfWi6yHSQHrWZkm3zgKvL",
  "key18": "3MS4pudnTLggQpFtzDrsUUcyAg5oMiGk6MQQm529Vis5yN82sGxwoS9Fn9i6CGLU69zmaenrxg6xFgMSwXgCLBDz",
  "key19": "5kZDS7BZK99AbvhXAcw2fwMzPAdKraM9uQ6Ba5tcwhpUwYFRb2TmxmYaPXW2hEWnE8bQ6EhmfB4tTWm8iwcckHCk",
  "key20": "3QHEcR9py9CKisuTaANQK26S2TprQDq3s5r9jZCKxD9bYRzUBuBgWj3P5XKfE3V8zyAte86B9LcjAEDRrU9RyQGA",
  "key21": "3fXGRFo5t2eeS8EEKpRy4vmPMTmkoi9rnxJsMBsUFAeeogN6Av6fNh9B54ZdGHymtJGebJq5dr5Th4hZHYSff3E1",
  "key22": "4yNuzeNvdj5qwTgRfaeCduLS5RBFuZVg13TbxL3gTjmLN8tnAPs33AjqtQVP6cfb1hLToBHaSJFQrEAy4KXnhRkV",
  "key23": "2qgFo4iRZoJgSY1Cy8VL8SVev1xKH9pdkvNndUAPMVPokB4eV4dhEthFFrNHkBaF2MFHsbN6FQeAxc7PNjxyWhSX",
  "key24": "2FMJc79zieM9wEoWgguzd76vq44rAhN9ZVEWHWJwWvKLsYJbzJHLiTLsM2maWhcMVdUke3LTANiM3dafdp33Jko1",
  "key25": "4gbmFqDfBPr3PcwuunJXaG7zrpJiDWvrEc21VtNgNfskfbagPJ9mK9wLnp1FGKpAocGRD4E8x68dbv4NjKj4Nxvw",
  "key26": "5F23V3vYwGqh45x8VKkbmpfFcF2jZxWsr2Z8PqPGgDxrw7i2CejVqTrkGTdXq7nk4oJ46KdQmY9QdmHmtNM7TdKd",
  "key27": "5cPnPfdNQsqgPCicXdJcgkR2Ah1Cu8FFgh747KG3L8wgurWaZDjccrLVJFoumbH44ms5fK6dPuJ6bBan9JyMD5i6",
  "key28": "2TsacV2FSzc27h8v5rQKLPNCdgZk35ncaJ6CMMN9Fdykr3YgYaRC9bJaRMBrUvUgTJjQb9xQHPFDx3uGyCZ7J7ed",
  "key29": "boy97C7ySEDEJXyJwaTtseEZ1u2yMmEvyhqNegBDJL8Lo5Jt6rjHrpcDqHH8kKbvmPv3MwCJbvgmdnaLFbmnqBa",
  "key30": "4Daq1oLr8158pSTsTj3dTJFMB7Hd7EZ8kZL9FWNZyGSPg3PwKToZpn8mEgBVJi4HQQWuB7WKYt2KNQKEigfmhDPX",
  "key31": "4CN1vGy3J6yQBjSjx49A94Ka8Gem8Nw4XbAnzb8q6VZaEHMzLxiQpFKbkNTebcHQgGuSo4QnbPvF8KoxBb4S4ZFo",
  "key32": "4ByVnVdRK7AQFcb3cev8BodKHG8mpUiQfVhVRJWVRRmHuTN9Z3Tk7BP6XpFmXpPshFJA6Wqaiu936GsbjCzA7M3H",
  "key33": "3tMSMV3GcP1eiTWUupr1pjjxuYmuVYKcuC41ACx3R95RnpM3xrn3ghzbhHA5RCTBTkwUVR5YGJ3WnaRqdE6Unprq",
  "key34": "2zYy8kyCjuDhhFFbRcATvQhUqiuBi1YZ7dwvPjWQuTnPdfTUkE1qmbzegRYjYsqsnHes8m1BvW8GetNovNoBy2eP"
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
