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
    "5GR9dx7LiLCZm8UVfBrjWwuFjQgJ4pS1vtWUaGn1Nw7GzC2HQL37HeAEHS4XjTG89aYpsrnS18prsrbuJMhbgLML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d8M3D3vBVfZ5ChRpb8gTfLPw3vHamaYsXoRagWiidw8qWWJYcHYV833JA6znD7ui4rrBJ5SKsnsBSEDRgtBbr8Z",
  "key1": "mqk8ZKihf5r8NvvHDKZ7bfgLaotVjGigFx8yqKBnm5wVZwtV7seoqR8ZHubSTpN9SP7cncjk92Hix1eQEErySrc",
  "key2": "5mdupknEA45D2zv6pYKwXBHapizcfb2edbQmebtDaqZ65KoGTAzUj68pqxKFh42wAqmrf8dm2d5XdZibVYpgLS7V",
  "key3": "39kue51pEF5SVd6Gx6jjxvNVUqMyzWLegecKtQC9YHhev8PyUycaFPaRvJ85vfLHoVxFEMjAa2WgBcq7RU4hF2C",
  "key4": "5PPtt3ET4JxFQrn9LHy8bcndJtXQUZb8hVkcP3XUEH74DuMR7NNs8Ls7aRHqLCKnNBVEQck871YhMMiC9k9ibrjN",
  "key5": "3Fv8JaQfogZuF6zNWrqnWxFFjYyPJJy6NvN4L64GBkasbFBbQwVv8C6rN9yndzx6zHrhuQ61xGz3ZLPxb1Gtcw9Z",
  "key6": "5eEpANroXXhpSZ4un18JfkUzwWzCBXJhzEd7BhnyAGYajWkKCCJbrfrx5FrZaTy3u6V1mWP8LADP1Bk9YmxSg7mG",
  "key7": "5PoTTHNbSFLG2r4c4SP9MzgwTfAWgRRyC7BL2P5uFqP2J63fWShJx9fSgYmyKQoa6o2yuH57txpmGKU4x5Sh1aJM",
  "key8": "5L8zFkc1pLHppPUHRkZhJHVWrDhZL8ojBgpUjLCXWBkCJQgZF3SwDMttE7QrJZuNqA23ShuRjhaWkD9PH7nN6vw5",
  "key9": "yf2NLQ9jGqBmarQ3TWn7mU5yhP5b5USqNjEHFXYeniHuA82d7B4KxDn3nUr5KoF2WocPQbeyTP8SBEeKeEq1Pv2",
  "key10": "4yi1vSuyHkoJ28nhQGZM5SsjYDji88FcsNJbGBPHxkV3oNSTsWWQmG1Wn9Vn5YQXs39Wm76ZRDn6GbTU9S4CJwC6",
  "key11": "wMmszqUDzzEnH9pvW1gXLLmiPNyDzbrZgN8yq1bMbP5ZyWw5aywJqcRHiue3MoC3oVhdmL7cKzssy6HNLWVo4ka",
  "key12": "6w1sQL9hYQHpykpZk6Zjf81sS1vzUtFXo16AuSkEbKF4UBfsa6zU4j3M47dLZAVEFxAyeQuSsJsNB34ZWdL73Ht",
  "key13": "3ozcegHvzxcaUzpf8wmzYmfkC7EagY9LZ93CLLbzkdk6tpbpnS9VbTFmxfoyMSpjAgY6Yq9nAGpUyPcgUzZ8sWh5",
  "key14": "5mpu3tZiZUeGxnkc8E4fmxXEyf7przgWpHVPHFUr41178sfR2HLJiKuRGFgPiwWAp7T6TNxHD95Y8zms1T5RP5ym",
  "key15": "5Gu15p1kN6jqJBVHkBC1WFd1BBgiKJBAG7arEv8KWTTRvo8NXVcHNxbnTJ4oBgoYEPu32AfdRBaeNCjZUP6pJY2o",
  "key16": "jACJU215vXHjueeGcF8om2wdDKkFXCyR5EX7em1V5ZTpNpHqCj56n9RUwjXX7oUFpR1DNDHGjVSXfYdQtM8jCgg",
  "key17": "3L5pfq3MmdXwGadLVLY4wknGnU1EvjCdRMmKeD9mYgkxjqMB4wscp4CS5ByMzLZRfyS2ZwjLMkRoGRKCa5a1h5vs",
  "key18": "2sV6YfUNfbV9mRM6SNZ1ZD2XjpVCjNiK6v157vyeVA6RRuZr67mDZj8v9rAEMNbnHdvGUiGHdkoXMUYbKS4hcYsN",
  "key19": "3wNFEzD8QrH19shM8ZmB2wveU9kDF1EYm3jwdsAAnzTDpWXQ74uWxS2QBt6UMPmPiqk6zUfrAcyQpUZiCE4z9wJ8",
  "key20": "5fGfAwg1eJbzEsPc413EoMazrnSMHbTETUeQLrtydcZ2tGS7cRzeZ2gzjpM7s3U87DXkcCkSQG72E2vdhwCrSiox",
  "key21": "4HNg5ydz6avbZ3PDSohia3mSsL5xpytYyQ1HcuyoJuE7cArmVdr2CYftURLu5NM1a7YYFs1zyJJQUt4BXpGXFyAb",
  "key22": "JzVocG2EJsJ3XPo44zjR59cS6wMrxYJeSE7vsFZQoa4sEz3Kgh5NXx6hTAFHo4ZQnh9ePzcV8M53C44zYruyMyW",
  "key23": "2Ri5sDbsERcVgyMAcXsoFRjSs4kttq5bCTjENDU4fuHFTMB6PCUHaU5KJ1nYg8fmEbapQH6odRp3prgkrrfJs7EZ",
  "key24": "2pxwYD7FkZR3MKqB22Py5NjdN8gWhjKwAtKsg5FzCjRiS6PpR4PfS7QZPrmaguo4nMRBDxotvheEXFdCGqgXMKQG",
  "key25": "3i7CJP6ayM2S43tDWWqwUjJrDdTBy8WTr28bv4nhb7f1jMdwgn2VstPMgi9J3p48KaTWAEPTive7o1KUG5zvqYjD",
  "key26": "5whgpS7f8G26N3Yd4UfGtxSgKadwe5Tpv6TE1G5rMCW7Vh8k6M4cNtyauccoj321k1jKwDsYu58W8bzwByf69dmp",
  "key27": "bfNP97XaveZWQR34fQ8VoF27QXMyxpztMyiiADVSSY2uG9BViPHnuzjuAswTPbvnp2iu4Ymd7dBXBLwVgEBq4VU",
  "key28": "3YjncWu3jBpchszfsfbFZvxNHwkEkiXNaFQ9tsvjVqQZvExqRBVD9E6pkFXtY8XKHoNTf7cBDD5Fd79vSSgEZTtV",
  "key29": "5tey3NFwz6Nss3RwBepU53kNDnaytKfo2fMWads2627ZBU3j5BaLa1zzvddRKksW1FfADP1iSPge1xJDsL4VX9SM",
  "key30": "34Tfu7KPDUqnneMHCSTFtj8VacQFcJ2c156vW3fatePr3td5TWnWSJMtxxLdkmNDPYcdBCU1LYpiMAWfZdg7iQs7",
  "key31": "5NfjYnGrXvf58TQHHTMBQ1LotakP2GDojLZ3yoA9p6KdgHoxnmFcS3xAEZDgvUNoJJ5ggWwnmiLTgH68GT6PgM6a",
  "key32": "3fdFifXfF5NySiwcrf5sq2ETiogVvogGiZZfz4tKTwppVNyj7fNkJ3YL3pSzUx321RVkryGWpuD1pkKuMmCvsEpr",
  "key33": "2ioH6v8cSd2TiCz9AA9SwjEzKtNMPzb1M7q7hJthb8R9oxauuPpTN6u9B23dAmqzStBRbkdDjFXWaza2ikCQLNNA",
  "key34": "2LtN4wJvgZcSsVDB2r6T8NEYyGDUbS1BDAwoyJojePvUyRyaK4eMd8FzLhTw8KHte6HcGKAC8VpEmKzoCj5T7k41",
  "key35": "3Ao52Fx6CqAPg9fe1s3kMHHgbph3zePdWZuwiM9SPLpny3Bvqbz4457XZkQqwTm4U3AN4KUqY1xAQU5DBAkmvHVi",
  "key36": "3L2Sxy6P6iaX8MfdSc8JJ4HdcShsvi1byuFKaMgouoQMjXUjPGFJSWhzBw5AkqjnpQcmHu31q8h1hmvHXQBENJQk"
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
