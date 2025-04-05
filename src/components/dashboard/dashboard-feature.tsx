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
    "3vZnodcNHjuiR7X15mVRFEGexmzR7h6qrnxP72soHSkzVfXjt1uky3CmcRw5Kk2EXKbWEJR7YDeXmYfqzUNNcmpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vze3xF7ioVSU9Nq3B3S2ECx8JHYryBnWZ3WMKAPXZsdxgWsCQyxMJdzMmWy4Jd9GCCBzgU8G9hjaCWjWEdmva4s",
  "key1": "2ZudZjkovFWsJCVfGNXYW6XkYSfci8HkzmJdQVRMaZmyotJhCHpjsUaXvxtwRQWxnYvigcKuu2joGiYjEtejaUmW",
  "key2": "72XShmkftZnUwW9k1ZvyQxZ9oKSBNByr5K3QMJjoh7bQUeBRrh4Qby3ckxJ2TqDDZyb9jogj8vpwNNqRs9sHCPZ",
  "key3": "4AF1o9rEZZj6XgBggMxy3bkiLXSCGvD3eYhzEaEzmPzPrkZLXF3WYC9Czt2izd8dSi2ssvm9FBgP3r3cZGzuXBgw",
  "key4": "5GDkHszpLQpXuLyrF3csDf2VdZYrLRApRpBMbybpn1pZvYao19FcpXVBUav6S2YgPY1c9Ukw3EexdrLQZynhk4gz",
  "key5": "4uMZd3u5yx1XKYRBnqPtupkhXdzsgJTKpkYKQQtFhgLANxGcfepn8N4m1sxtsbozLC9R84RYMmGkMQDGVst24kWA",
  "key6": "2eLamYdnPezzbTUSRfRA9mTmtwtKNWV781cojgZDW7g5agyG88QxTQH4HUfLCqXzMbqrCakMGTM8e8rqA4XjGDct",
  "key7": "2fLcTgMAK2kvKnXHgyWk3kRnxfUkMcqJpSJnnCxxbupZw9Ncgx5fB2pSkfN7DjsR1RwbABaGUs3XHCuteKgsXFGB",
  "key8": "5romWRZRfF8tZ5y3VAPC4rbGCkVgaKz2bvQbyzUpWK5yT1wSntigtyfW8w1EnKaxxndFmkLLATW9QjisLA1mbwXj",
  "key9": "52cHp1prB9Bs84jo78jE7DyPcvDWb8wFbcMwvF8Ly3RWCV9yVzfdzmPUjf6BfqHJHyXzb9R7tt7cFa2GonYMrp4n",
  "key10": "5xYH5ZJKMg9fVdqthRMf15UQC1xXu9Ngepk2ofdBXivL3BEDyXXr6EV2YgG6EPH2s3H6Q1ihQgH7H2xnn1VLAQfv",
  "key11": "Xj4PhZxhxkwo3tKhdJV1NFASPsMxoynPonFbv3LqDUZX7wKSZxZmeqyZEAJyfHpSGZMiQLdi82KkgVfZz6oRogo",
  "key12": "42QYvrVcPzD9cFtz5Arioac6sGD8dhN4WkMbKYMVSjyS9iZ6KkBLKS8we8DrgVPg4NSaoCzrqXMWXyvm6tXDJbpf",
  "key13": "4brcPZghhA1uxKQNaKquJqxrEFg69A592iZg24uFyu6hGCZuxijJYMgH21Cj1pyKc3UFGwiEz7xtyBgDnxTCRCWe",
  "key14": "52wp6pVNQq579VaFpqcw1TVp4fR4B64jwTFURkcJtzg2zvt5JxmFn4uiFd1KR8247S5NcTcohWovZmgSKc4xXyH7",
  "key15": "4nhoAAadgcXmm6HYisbfotK5ngoVTjMBo9gi4v4xQHBQAtTZocugcsQ7of9g7eMYRi3FfvrDxu1Tgnif8f66rmid",
  "key16": "5uk97TsL1RqdB6b4WwdbdbBiYyJTs4brogKm3EMnz244RLrFczQi68Pvk68pzs7w7adnyvnn5mw6kkXBoacXD6AG",
  "key17": "45c7j66sULnS8aaXzMMs6Yvy68mGKMiYZWxp7miKRjh1XCRxasphokTjHtWYyXMn77wQBbFTPS38dFRkPS1otB6W",
  "key18": "4H9Gmg4qGXsy3pgj9ugtQXjd3qpkwzbyrpdBVBzygvFqdiNrNxtFqrTWLBEtY6mLch8X3KoQ4FjGrwgUVQvuP4Xd",
  "key19": "4vvWm9srv8h2MVCzGU65jhMBHVf414uNLv8PFroW5rjAFJBgXSAcv1RdsaCAj88rHwKxR8hBqtac4dZRhAXzZzuG",
  "key20": "2DjkEL3RkGs5Ga7kmvX237Z25GM2Um8tBHmAubZg4mhqRjaEtRkcdqXWn44DHF7djv1sGGWSKHXgAXR6GKdkKTWP",
  "key21": "47jFM9kghWpYiQ5vsD8qtTcWkrV5aEk6W9Mvp8ucEDVK82hZPQt4QrNh2FJxdqtpWeFv1bmxd6NTymQX2iedQHDS",
  "key22": "3qUifGSiHhrfTmVfPdy66w9r2MqViFm2tHZHWKUtPKTxwJLm7QAKnK7phjrApFBcGHL3oJf9S2ryUnta2odUVERT",
  "key23": "3jQDE31EDq2GskxJQkMrHaySUpZXBjnqX22D2fdLBQs8wkY2WJkVEJJ8P7frMU8p67KmQQzVT4vUtnedSFeownq5",
  "key24": "ScF3qAi9Unf5E7qWvYMVYocoq9DsXDEeSAvbXZWA8hEPTV7f4k18dCvRZqKtaCCoBrn8SAUgYuhenV7DMeA1x7e",
  "key25": "5HxugH1Aq4uMMNThixXUQpDxq8vMxXpuxDvrDeHm43rjnuCt8uuKq1QAKLPfXhyaUvzRXbSYuR1WxfRL5mJaMbKy",
  "key26": "4Nm2bCfUYJwxUnfHRqtj6kmu1M8qs1ztVNPpaQeGGsHr9FuLeS8eveMdQBqBVDCj83LqEa86q1NeZ7k7DoYGTtdU",
  "key27": "194Nx3UQocwhDcNpGkn4qUweEXw1vur8KUuukFTMaBh58n8nQAHcffZjbhU7ww1yepKf9WfBb9F7nXESi5yvVRm",
  "key28": "3vwThwFmkAHKEBkEM2vGeaJr242THZcZz8nXVuqnu58nfwEQSgpigTjy5cE59Q8cM3W1b2rvJLPpZiFaRbmw33H8",
  "key29": "2DMF7LDmhXyPpUUDhneHoJ5KKjDmVsggU1JmwRx9soveAy52x8ENRAKHh4fgqKdMiRJPuzXagcZxrNp4aXFM5sJr",
  "key30": "2MwoqQNYAD67WxijKF7irRhQpMMZ1q8nJnzupMUssTUxtvye9QNEkqwAwc7koNqTxWdqhddhbMZyhtR3MwqFYgZD",
  "key31": "xtck9ffM4JmnmuLVT4kgi23ReAyFZE698SLESryTdmwmekRc66Dy3CYHEUGz8Tr9yTjA8xZ5Mki24YxdGd9bT6P",
  "key32": "2EUWa6HTUnBD3UPhdmhLmESnj6RTsgaAZTYCDVNx66M1W4ZtopCrYZW8ecF69GgkP9moDyVRmCDFVuPgJuhDyth6",
  "key33": "58KSHMvSqe8peRYEZiRX2HpHo7uZxnvZgUqA2pa5yp8f47bVqXrhK8YL1YNTkr1ZbworAkrUeQkF6AcPjtu6wFAj"
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
