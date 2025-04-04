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
    "3Y1RwDFLk71bZvadWG2qTn67hq4hkVUcGsZ8bVpXNRdqjrj93H578fQSbviwf5wgqb5GtK55KuMMWN7KeypX9fty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjymQgjtS6ybQrqMMhBCgqVEnEYN8dPbepQcwjgAK5VDgK52ngSzFMEye5dG7HqhQscpmsjhaPtnPgm1dobEi8p",
  "key1": "2oa1FWtPFzBxhrF9wmnFy747wi5T9bJ7SVq3YfvxCyCPShPUjVvBARW17Mf32ixsoMcQimetenGcbp3v3NgHfaWE",
  "key2": "2EzDiCatds7hyPhMV22eSfPcG5A1fBfFWfXKDipKgsGckF7snF9sP4modn2Y3S87yaoTf21ayMUhXxXgmKNwWYGe",
  "key3": "3gY8z7QP1T7MXnqWkSAPiVhGNf4cFpHoV2nQgVcv5ijkL5hBg2USBbxgcA3QEbt2vzv4UqugH5ZYUxFPzFuKKGLu",
  "key4": "UubLkvgWHfuurxVxa5CjrnnEmEPPtGqxCizC3hHJYjzLPGaG3qZQVAFCnfjK88rEtAcxwatXQwbKMU8SmQJyNvo",
  "key5": "Fv6vBBW3AmQX1zvcKBjFVwwkGQTN68AGeZnhg8hVEJbRkPy7Qa5zxdZbAUSsNpJyoNqM1xGqLKp5JgCoAWosNHf",
  "key6": "Xw2yY9z3foSdDbJaxVJKhXoRuEKxzUQ1ghSgizciF4k1pBvQSA2WEK1ZmPTsL2d2vcHWt1uw8wzMqnce27eXGwp",
  "key7": "pkGBXJ4KASo1ioC8Cqhhmn2FeyKs5biPCYsjrbH34H1YVkYN9TiNPDqsbRUymemvo76XN4xcrA8V88Ab2yq2EoR",
  "key8": "283WdDYoHpAz1ALFJ4Gn39F9SrXGEMUrKaRHshTBadQFWsYkYGjRygdGeGHxEkjo6dL2HWp1WghjVNXoc8MRxo4L",
  "key9": "eLBaK9woke5KULcx7f4b6HVKg1SLoL8sMeg92zRzJHpmH2Y3sBLcS953H2yaRq4c7cF4df1KZAoHGRyAKSCM5eC",
  "key10": "3QXFxk4MhCogaLeACTJ6Wz8URcrh5vxphxjmX9AVgN5TRaXkXmBxQ8TEeCZdVVXPPRXoDgMRkRh9GfCTBB35X7sm",
  "key11": "4wLFqDZJcQAPQGcNMJA92v5MGfbpnk1CGojiRUyax6cPo2dTP3gcXV3Zg1CTPHhMzf776udqKBnyCoJZuDPeSEUn",
  "key12": "2cYxeqXVA42ox6tCsbf38xPPhNTvSphtyyYuSLQYjCP6X68emd9rZD1ygSQZ3afN4d5YA17HNnsLEQn1YXVLWovH",
  "key13": "zXNFkTTjFff9Dmy4KXR3NFCiNdTARftyoMfVUpEBhA1CdvnHXFPDKaPUmQoKUWmRm4VxkjBLFkaFnHK7uwnmony",
  "key14": "3VJPRK3kmRKn4oTrsy5JK9miNz8vnCv3apta5rMSirRuLoQ4xwFgKrqsn2Rq5dhtUQ3kCmZFZ3Ju8QBQXzfaPEgj",
  "key15": "4jFet1GpvJyZv6RtekDAy55kEP7L9qDprofC5xRiw65H1UspwVu5DEgHbAgftjamY1jhgGbdAViNQWrAsmRftJEV",
  "key16": "2zGTJEDhymipWqDWxGH37gEWXsMCa5XHVzTFomm1pt2RrEeMfZVHb9RFRaT77Lg7humTSD7Vt3UuFxw1DVCoDhAh",
  "key17": "5Hz98k61cCcEnhKvdGp7B3JjJUJHwDf7jNXxKE7dM1u7Nrnf39b2LxKaZ4XystheqW4Rz88tq16vGfPQbntR2sgk",
  "key18": "5v44z1P2Hgna8EgbDfZ38HDQRBsraqA39T6a4SvqvyDM2jVdyNX6PWC2vgJt1Mg7Sow9rPC482pRCD322cjRAe5U",
  "key19": "5dnzMEMeh98q3yVpwefLMx1grpRQHSv8ngdCnygMGDBy4kfoHVMH2sYzv61Lc1VtmJeM34yjzHwH7XT7zU99p22H",
  "key20": "52QfLwZMCCwtDN82x9Zy1PC9hGUMuVQwErQoykR2sWN6JGqiXREQrJmgPJq5XRft4fGNqWeeQ2m9tg7ha34TkTw7",
  "key21": "3mE7YUxhp1W7jC8g57nBy3ojYyASp5G7Un4oemTpWnSSE1pLWM4pcWsvecWG22XZRoHj2bMwkzqfGFAa5xtTpGdh",
  "key22": "2o8ou3XY4ikrzzjHvtb8ko3ZJTvazvLiFxy299oy5DSWNeUjHDbEFnjcbHWZpqbYMrUqXCWW4cWrQnn4CzT3W65h",
  "key23": "4huF4QAWccjEvN2Sqof7wanzTGJAEAVkXm2wFfxeQHukTUZD8UqZ3QY7opB4RzKL9MXLtx5ZyxeUWEiLpjJKdBgR",
  "key24": "8QsCrijgAgUBMCwrZ4ZUpVMF6njSTStrMtx8X3ZbFcFaG4XJREEPbSuameU6eQ7K3Pe3c2tnKDFzpR2fodJAVpD",
  "key25": "38DkF8fFPgDinb2E4xQqwG8CNYG4DBhGF5mP3a8JSXh8f3jncbb9jvDuTyEZfYSC5TF2Zk5WwFkvXijUC5jANHmW",
  "key26": "3Ksq5diX2AG2NRYh1K5TSbSeJFqF26GbxK31YtS7m8eXkim3hxUvqt61Zdy6gcBQx7DEbMmSDUhEiSxagQ3ZL7K6",
  "key27": "24djpXLYU7DwK77orrXiu4n2cm5zZeLYWiotQg8aLM1uUKdphZNSYogjwQRQNZNwdjqBpYTDy5E7ioZtqsqgLvyn",
  "key28": "5W6Y7evnQs5qHmTS2yuFPbLPcNje7avFLwWCWnabHFQkWmvC8t2QiQUtwK8o9RbQcYAdHtWdLzg5Y93tYBECCCxM",
  "key29": "2PsnjGtJCA28wHdrFRTu6zQHG95Ej1kxZCa9XFtuYdtZnNeuhYh1HfonjDjLZhq8GLWz9nWJof8bq6qQ3czRMufn",
  "key30": "2edGecxNmnG9yzBvwLrCFnqeXtK31D7SEaESP4xEZSf5B4j5BCwMsRwE9isbCZpn8f3wSMK5BuxqzkcHFpJhBqKW",
  "key31": "3yv4uGh36bp1QkwUZrtdbjYX3nz9iMmAH6Wh8rjXX7PSebCvxNmZhF7fZxrEycFsGxXWcgCHi6UobUp6itjBR1Hu",
  "key32": "HbaMPxgjCjsqZqCuk8VXijU1Dj5KVYoE1PUixJ17xUxiqZZZcRrk1ThRjedH3zAnBwmwyjhpsiB9PxhUdmmCwWK",
  "key33": "238s3RKoUqSJSnB5LWPWt5Rk6oznD7bycGjsCq8KMswG7yibT6bYi7PP3s8CXCfevzPeFERQwUf6LNUQEA9rdepD",
  "key34": "2TtWo7MwHGzig5h9gwfGbxYTMzQqjc1SRvcraC8B83dFgBxmZ81kSWsPAkghfLJntJF1LsdVuNX8qpunRKBMbnrA",
  "key35": "3UNxbpZBSCz2bGpJ5HyntFrxuiaD1UQWw2fkaq8ujUvhiEeaPMoJq5gHUn7e9hg3W42DRo4WTZ1hvcdmbtkAkF4M",
  "key36": "3DAKNK7s9mx2pfNUK4xSFSuwm9yZRDmTuxrCVUPNQnDnuXvtnG6pCtNK9hb1kCCMd54cnvL38EhTJgupuMuNDQPY",
  "key37": "ufLwm9ZjMaVtBrtcatDCNqTYpESByg9VQa72PRNmdijXBCk85ZGUmDQQkp15LbBHVVufLGiJ2KqAQZfVqR8pUqC",
  "key38": "4nTz4XidNzoDKAxiJC6jEwANj8j7QtjGSScD7pR8HBDaCRh2qoGcH3Aw1GHXR5H5f6NYXm21iWMHsaq1oPY4LbDj",
  "key39": "2PnAp3k9X8a8rzXoGGJmAyjXjJTxXdZ4yz3VDQXZNivAsLSR3VBBmsqDoaGuECMVS6BDMKDP9AKRBY8YfmPsAWno",
  "key40": "3Hy1cqfZpmpifxXKNdSVQ3gtHq1Nq5Yoi1wQ6WSutYcRiQMu4XPU6XW4Fv9shst4aiKkadzZbuRQfYZaT6q9es3G",
  "key41": "3cBNUmYzEJPtz5aVsYgnTNvLiHqg9pZRXiuJhP26RgsJtWZgK2fFnmmbHQ9QVC89GPxUuPo1zNdV94pDLgYVXo5p",
  "key42": "26BLQKnckErWBsL2B5feYcRvBtM4godvBpqz8a2uhP8q7t6vXjamdsSvanuvRMppURTraFZwCs3xRFacGqmtrvaH",
  "key43": "5RFB8V2ftn87PVgqTjiUBqHeCXnWjPKbvt5P9K3qbsp82FSKxbP2RjkxHmLzMHBsuyP6KiGDGdirjJEYNVLppuKc",
  "key44": "4Tt73BFUC1sd7EBBa9DNFCCy2xPpbsCToW5WVXtvidCQc5SM9tUGH6fHWfA1Bssmf6zUvq3pM3EGugNertg6Xz7S",
  "key45": "46Nxe8zL2QbEu2KH4ZDY8PTDw9f5cyDhzEN93WphSMQFMDYwhYh7eQXAn9dAaewuKq6Ji8soqq54T8yTGXRtPo4o",
  "key46": "5vJZ5ZqTp32kEQr4tcEGSuFJULF5kCtmD7Z7mhVrGbSJYS4ivzwDunyLRyYi4LkaJKc779iMNFQ2zDbS6WGgFpsU",
  "key47": "DnGcvTJ5fAyGc8QFzQgTXUyi5Quqf4VC2sUvZeRxhrbrCK2C6f63wFS9LGxo4C9pHWBNkMZLwHAAVZ5sMMa1KnY",
  "key48": "2GeJXkCeRqmE7woQzjimuoBSzBrYekrKLcezouPPLt5aWWt6D11BQgF66Cwyq63fAvdYriX9Qkk7FQ9uc3kY3QW7",
  "key49": "4iWrJtfKEV8w5RK83VLGihYu2k1VFdxJEk17siby7Abs49FK8mp2rJ3M6MUYuwLR2qmQi4X1fvjYVq8Un63dyq9Q"
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
