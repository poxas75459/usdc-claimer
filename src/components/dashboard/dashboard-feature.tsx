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
    "2gLvJdH3qMQfoK5ErJ4i2y7yGGmbt6GghE88X6MnQQJ7zRJu3z641q2tnwsX1h6J11gYjUeaA65XkaTbMog3NPVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DX1DwsQDUoyCyUsdneEKereH7pUdYkr1ZqgLYRjfYXW5nJikwBaSbEkJ2DBfPbqv748qGzNCQvZEJy8CqE1qPHy",
  "key1": "4dH221Ssvm7cMwMb4u1oZammgQXzeAyys9JLaxeqwa11n6UfxeFoY39SxWxPVJWZt5oSWrUKTRh8geKpAefVejgx",
  "key2": "5Ed9EfS3dMkhyaqoGPVz93gZz48y9xE1JBHRjBervfdyrJkHFP4PJfy69zUxiNjdSiafNmYUXuXyJFUPQuxhjf3W",
  "key3": "bfzTmsBHuVzn7vFBCA6AUfVguCpbuzdMmPD5TtH1a865dnn9mpGU1ipiaqmRKtNkXi5btaKYaDsuFSXr647kTT7",
  "key4": "4zuyz7BdD1w2RRQCh9ckHut484rKsymVhkiQnvG8qY6PVXA3VwyfcmbA7HGoMwYC88HS62f58BQEBg8wuXzsdqC6",
  "key5": "Ryi3j5cjtpqNgoruFScLQgdomyU61zRjB1gcJY6tBdWD4RDVyYCbXEG2an1gtFHeQkurotiMVBEdS5Ta3mZyYYT",
  "key6": "483DsfH53etK3eqe6gH7DCMrusvLeMrwkaHbqgKhjdEEEEaiTA6BWTD2ix4WvuBaP1FEXpeFfSsqQYiadgnksYwY",
  "key7": "2b2QsziPEyWQgjHQgWo19Tg7pW8Qd4pqDrTkT1bjWiYWjXen8UokXB6JYPa8BjwS5ikWrTKbF1z2BmeoRzpS12hK",
  "key8": "4CxQarBmuu3n8SqqEGp7DkBuSi61NcwB3iG44nhQfYKPbWCsLvmytNDwn3AHHFQnfpH1XP77iQPyKAfjfhZEj4gw",
  "key9": "m2kNfNAPS9wKJQiJbDseuoWnXQaeTjrtm91Cj3AygQQzjYuD7Dy6Xb4rHp1tq94tHgxEkiy6JLsDgYrDcxwh5oy",
  "key10": "4omFa9TeQfRyegyF85APAUydYCJbypgPSvmQDfQZr7tUtaQxXH2xpzYa3QNF7pKsumQoPnh2oSDzvTXRnACorcp8",
  "key11": "29bh1kr4V31UJgJiVKQ1MySBZqUCGi97qPwknT6FDte6JTaDKJP4zvAcdoqDqNE5qSBGaBwmDMfJUw9NyRWeCJAP",
  "key12": "dsov1DzTXTmxB8v8yivsun48MZjKaVPYpbDL1Binw5WKvyaUxJn3oyHEA8UPULKX3Rm91geaigZpdEV3mUzXJp3",
  "key13": "619n8dLypJXjUCDQWnZqnYGPjgpdpjEAXh6GorKnJy5EZ51nHF3JhwjGXnGkJNKcZQRuoVUe5uRvtLamHwyKux2w",
  "key14": "3b6Ja5pJaY67BC3adfSEPMzeZDGx8yu65oL1ohgCuREpg4XkVeQLTnHVWE1ADsYcE72o3myn9s3Hum5zX6RXAPcd",
  "key15": "2mbRU3JwU7YvNJfrBdR2C6SFiYyFPKPke1nT3dKzoFLBcjv34ufeNWrCRXXgQV4aAQfyX6hazjJuD9M6xMbsk96P",
  "key16": "5ZSbyUXgRJCQbKeu7Cbba6imELDo3L6Wn8d2cQ6eYrxjBmqXXyXN9PsVYPTu4gHmLYARUnx1DhLAVr4uaj74K1Pa",
  "key17": "XCrjrEsN7pLmdtWbFFsJuC47WfacqoWJbFnvpJ7kThUTNwRVuxwLRnNYYepFQTkyCNza3qLvCvwtDPA1JR6b4ad",
  "key18": "4ftxyQMSEFe3JMqHxWaSBT2h2NMk5uai4kU36bstxKnfG3NR4WEQjjXsyPsbAGBz48hAbWNRbUpKKpJmZ2fiw2nn",
  "key19": "4buqiWyE2oGSG76YUGhZkCAJZz4KxhqtkcbeBo5EVqcZzbUiHYf6JN44P7FRyRaFPJNwdmyfo13u7iPHsRPmqvQV",
  "key20": "4S6tJ48sm5feg5XtCvsKMKMgnXXaCzRBwLDYWUhFCJXmU62c5nbNbEqUkhnJRz65qboxhCnGj73gaYBnnNHSs9k7",
  "key21": "58kuNtY7rqcNANbmnzbJhL9sNtcdfgKYnHyYrR5pXFifyiSCKXMmft4BDQuXg96qs4Q2v7b1Qshc1UMh93Wa3Rj",
  "key22": "4Zvn9PhzUwBhpkcLNbsTEYnqaK9egUWtbPWMj26tZk6pg3HpR2JHWveXwg1N6fJEDbwMh6NkcvveAgM2pupeFP2y",
  "key23": "XnTAqtnCRnoTKRueagnbtwF3woWZig86NxDKvr3qbeUXxiUMHdX3u21UMoysxSya9PMvL9V9nFhZaf1zuN53CvV",
  "key24": "4Q471WFKF1q9rSMQ8rnAN8hM2yFv93sg4cQoYMdiCPLoXs34nW7fUVS9CJs2caK4dCU7Tm8z2cYE7hjSJYhE6cc1",
  "key25": "5EkBT3m2H3cDwZ446Ln7fBuqXHwdr8DNAn8xcS896quumBLDmufmaJK2Yatxe81LaPCgDNVRgGJ9E3fdcbvRpJyd",
  "key26": "kdpsZZ18uJA2PTEygFLJKJHFGCnCxobig4RsMTJYsavB9bYXfErqdsEC713BNkCiAEMjYX2hyhVCuTMdLr2txxR",
  "key27": "2StGJi9M3TuG9WGa5tCQS6Ns92gYLeNMMK7rEZiQhA7HFgWsBnNiJoB9ydMoebmAAx2cjXoM71J3G6HJxHZNzTdw",
  "key28": "54QNVuY1HLNmVQmGBhWoSXaynCKmYiamXTST7RKm7sYwxU3d3h7WxwXHbQgEY1UQ1r1qMqQkmSE3jCSqySAkGX5P",
  "key29": "2PBhunfJs4RdpFuXviEbgAwdQhyQVbf9cEPwTu7wQi3MMt9SeoTFPwjnEMNqbQeHN4AcbFFy1ygvqXvUW3okY2sk",
  "key30": "5DUoD9TjC4C7VJmY2LNHSHJYjyBwk3kGjNmmyL3qU8Ame49xLnDd5VM84DoL9itSVc3xpFULDzrG8ukKrr9wGTgz",
  "key31": "uF8y3sfxQ8gwvNanjxhnTHUQGVCbjdSAcwqtt3sBoxv1heZQyTdDsGPNpbx9Xvx3WtBoLrqbZb7TWywbWgGc4Jb",
  "key32": "3Qgr1mhxc6zeM7E1Qyq9PL41SjGzVat2mjrTWQm4ZqKfzTQ7BmNmspPpR4vWPkAoKD8YxTUE8YfeCMos8x9uxyjL",
  "key33": "5yi6ZzjnTX9aBrDG8vntyi1HZo3xkP8w6avFZRpBat29eyjNG2gJaQUDiA66JFzcT8e55mSKSu1cX2M1rKLHWbJD",
  "key34": "2BUUvxpF8nCbwg5KmQLXJ3jUxJSjgaaQvhpjsW8kv2c2MUQGkYDj3CEP7kEhY8XCHyhMEjU2WtpPbv2mT6sgKLBb",
  "key35": "rPpoZBdWuuUWeRcCPvYZFBeVHyirkJtMqaU7B6e1yFJipgHdzZ9a6Tr2ZCYpn7V11DUj7s1xXRPuoTtaTTijiKL",
  "key36": "63rryUs4hLEvKEJKskWP3Cfync4D4q2ZH73yLPyTkDiepZ8AkTn7sLrTvJ1heZpcY28wHh2AKxpawgBXjUg4ZXax"
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
