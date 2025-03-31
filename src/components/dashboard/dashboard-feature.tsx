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
    "pAnnq2QaWs9DU7UdyMTpJ74MQCqGnGUAmMGSmr1AnSsreFkfKDfC3QghxBK7N37QkqVT76j7vwtehgbVFARQV9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oH97g2Ugz3BnFBeZCm7AXTGFHcPS5xJMax8jdGdGDCo3mUf6RnfoHNQ5Q35c4PjbrptdQ1gZKRfM1SPzwR9xREr",
  "key1": "5A8SCpjsrUzsVLXk33h9u2kdnG7R87vzF9kd3WBi14x7aByBfJMNDGtTWujrCZDydb6aCTvHWkhu2Ju6mz3WzKav",
  "key2": "djPJAsZFmE59KeJqknA7JNcfS2qgjLv5Cxb2bancD4K733CDa7iPodPRfzjsAD6yb8z63VFdLHvw5fqJ55dtVoG",
  "key3": "2GVzPdJhKpSYxEKmMp2GHxmwJC5hsM9i381HiYANzpGiKVyzgfR4jHGNGLUMe3XMPpqW7xoA655Ae3TXTkgZei5R",
  "key4": "3uK4iJMokhRd2v6CnKsLFMHivCTB2pcD5oxNrjejbkFwF5rHLvczfGZDJ1HRaESjXCq8km2A526QF8qdAiWyHesi",
  "key5": "4TvjqZ7vZeJJJHgGD3ymm5a5Jib7yrhZXWoJQBjUdfQUqKLQgpn5mYmRpkYehUSfvrsQrDLBhdCCigY2628T188r",
  "key6": "4D8cWn7np2h1kAvCkimLQnKWUyZhboxXJuX5nL6P26U3fqR3G1GDDykhD8VzkpAso9KZoBns3LQxP2Lfhch53Xmt",
  "key7": "2bsodmnk5qT1zxUUcygvgnNvoBPi6f8aMMd1KytCMUfDuo1CerHQfeLqDNbyqPidqeAmogXQAZXoeiRoTFuaR2fj",
  "key8": "4Ui1d1rcT7NpsbXXk8oom8PTQm6K1MmCPFa5ad9d8nbZE5szMrRvQCgKCfr5i3TTzGL7dRijdJ5q5rGaF22Vh8Ko",
  "key9": "2CPMJ4riRwYLUTERNvu3wiXx39Ay7dBthMYRzHXwyJ9s63JjfMWdcMK1JhrE876xuath4w6Bt2uPWUByuYFr14Z9",
  "key10": "DpWew2huU9ANE4spWJSTg4337afSWJGDghJcJmSLqkyL4fxaQMxXM9kdstznbkKKwqYMKSHKLSrwdmvPNykUSCE",
  "key11": "5Z6RBEamBmMJFadPyWaJAaBwgfeeBe1QcFv8Ey9VRqsZQXBuGz5znmxpaCrHitzVFPs9Ft1Ufgc6kRfNYbsgHpnr",
  "key12": "3xBhmAvVszAVHFxsRYrGgXpDU3Xi4cLp9TiEPQNWS7dMrdt1G2PcxWe6MGZiBHNBNsSAXMpaPnYahPC89iboUtJF",
  "key13": "3EX6SmHhK4JfGNXTfmkhffFRvLtmdQt9nGLtzCRdRzeJqjC7Bgosc1Tr66oJ9bLmSqTwYgz7tqiytPaen4VFJU2H",
  "key14": "2UNKfT1JNDYmFfuReaLY1jddGuCxFnhcUeHpMtEZ8zgBdAT1iAMZxDwUkc2SNzJRta9gnqK8RDX1EUka4ARERWPF",
  "key15": "2qSyaEPmjL5qSavX2MpWfU94TqnF8dbVXFqeBFCGEBq47DW9Gsiuvikpe8tTfHBqM1GkAy72ZpHy2fgdjg4woyT6",
  "key16": "5fJ9e2PEAcCiMNKpWzw6M5eYdtviTapiyhBsYRpe4gA8Uo5vM35kNPy9My3iKbEeuhVkZuQHPhDf9bup5Zf53jtd",
  "key17": "2ZDyHFg8vC22TfzgFXjqEA3AZiRexqK5adaAd6jMm2CdSj3PGJkXqhDorBsqBDmVZyzSQ7RdL7VhMjLBGDE2uS1p",
  "key18": "48n5DdN8kbPap826yrougkpg2UYjrk5kUNRUDscymTS66Vd3fkmUavygMbeP3s9TLrZNpF6NEUb1xu1RBT6jcx5r",
  "key19": "rb1vjTiutiyXCWM1ewfrxaMjK3RYNADfy2xX8cTsAkHRRxWSwBhCADsJmQDVqpFWQdV2QuAWm2GbTZSXt57da88",
  "key20": "4vF3jrm4f6PwYBFYMTvN4KgGWm1A7vkdiZ1LVin2wueiFzgEsKCujjXL8YKPYsSFSt48ozrv3XPE9trmEyhydgf8",
  "key21": "3Rd7Uw59iqp6tq42hEsNzzvLdjHzsTDRpfYd8NcB7SxAEsQQyz2APF7nBjFEj1ir2MKvQaXJyqycPBZ7sm7JnXxK",
  "key22": "HS2dTgf7SuFCPVMXoG8VJhY4q8rExscSPLkAC2J1j2yYGS6GSgakTyKcwL9NJeKzFXKGsbvrsrQ2rtahkDxR4Ba",
  "key23": "4oyXANEZjLvMvZsdVpEixa3knPX8VC197oQyDq8JWHTu4cCi6nzmgQdWgWXkxjzhTuuf8EQDBx7whseXLqLu7NQX",
  "key24": "3tdjVBvgBheuNiFN5M4MuxLFJkrr5VE99Kc3MRRrPaNTrtKdBvXHB2tHdnWEfJ6ReXWYp7XRW7y4nJWsv3kbhkAm",
  "key25": "BP3jXQQZmxBYtipqhTLwKMZVVsqt1Bi7eat36BTRd7aDXFKBeZ12T5Dcj3XBMVQqsL4i5sPZeWubKw6eXyhVxjZ",
  "key26": "37yvDpsbfLxrH9jF3pm9XgwLXmHRMDcX2MGXUCkbJcKice4ZVEYmqRfSt5F6KqZkCpVhG5FAvfYkKrd9WNLnareU",
  "key27": "4GYeQ9mNawJ8Hs6umAFjdtzySwysurHwaUU5smE3NA4RqSxZUkYD1oZp63YBixgautHN74PPUW1GFLthjbbGLAFk",
  "key28": "67e5zbU7xEL7pRiDZVpANoz3ZfVxvnskNfXVLZVzDDKUbu68efef3GSoFdD9f7VuHP96s8bNo9EqkcYUTyzinqRy",
  "key29": "5a7xRhZJj3wQPVdY9pBJWgifsJ5ua1L5DERajv6WxtKqfWgtr3QJZv5HGVDM4YM132gehZaCZ6JjTS9X3sfDCQCC",
  "key30": "2KGbh9XZ45qsKFc9s765yAQGPjskLLLg48s9VvkR2vnV2zv1ifhpAzAP5rQTxeAbUUqTDothzGH95uCbfPA7yEq6",
  "key31": "ySUNpwTEP3JHgbyGQkAbA2EJBL6DhpWsRKCizYVn1rhL67to6tw6tPf1MdrBfAjjQXigy9yNhVqpCRUcq4u2cox",
  "key32": "3457i2cvigdtm24LCEJyXR46v2TNu7n3phksCqWDnFfRSLZ44X57wBwXuaBJhwZovya7n91degtvfCX56bQJQ4ED",
  "key33": "4hkAyJfFzYafRtpgkZwdpNYMvU4Cb6ut2QaufLTQfU76rVr5G1bC5Mm3HZP7bdLdVnTKP4qLXm7uVtX1FSLWZsgA"
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
