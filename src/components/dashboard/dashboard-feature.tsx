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
    "4k5YXyrjYJM1EeKpQnn5e6viykNoKnLZbqqgeQj8hXEE7nkQXxVn8S1Q9E5xhpR8qb2pMXJLPnfUxy4X8a6h9Te8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dhuyff89h5X95LZ5sHFpcfCpgu2brKYnG5xMqwoXiacMswraJxrGmmZbvWbLCkK9Ad9PmqMBzWx1YDo9ecNY4Yw",
  "key1": "39ZRGeRRuqZt4MKQSZdx38q9QFHLCThP68RRSTy1RF2TWQGbnAe41xm2uaBo4wboqUAFRXjRvvP1Vk2jfjtMJRNA",
  "key2": "xVNKzrvAc2wPZ5TztafAraHpg7RW2UC7q4ZjXiPCTQ5PVL5mA4o7vN1ZHR5NxcPmMrFnDUaYkKfbL81u7rpJNcr",
  "key3": "53mF2f2Ei32kxxddtKzhbHExLTRuPDodtzFRpPe6MhDa7RresHj1TzMoj9xCPCasNpbayRRUM3xDduy87V8FRJC7",
  "key4": "4aD8j84C39n2jymsKgz836WVvMBXirNWDaH7wai8ptfPFr7pon7vdzhU28yjk2nrwJx1PugVSoZ9Li7jXpe1XoMG",
  "key5": "CTBpnHzrjD9M7VrqnUEzdqMzUFzUx6xPEgbccaLGo6E7p9ygSpohmKR4LR3zw1q1xygUvzLUT29ADhv1yAppTqY",
  "key6": "3b4JZTi9rMKzTzJunmqpHE1bQjroQ9gMhXgx2kXUE7e8kHZdoc4xhDm1QYzJMAaXiAiVbsN4MVbjhnVmEy6r6Wyk",
  "key7": "2osjsR1GaV5mUbF5ySZtbUCV1sEar5niWvoEnspjuJB342WXdxwsoMqqsFH8gBCjVi2GhScvmBGPgAPP3Lu7vgSm",
  "key8": "2wtu6GigjvJzq5QWmRiMcGPKYds7pkzHnuJ7ieq9AqB98fCj8B4iC9WFkeNgR9cv29cErfb31QHVXXDmHeu31uZH",
  "key9": "5rccSGj4AKdfPboqS4DuzGrnuwKvZcQ1rXckHwR9Suk7humygGBPwwi9wwMoJy1i8wsJTs1GEL7wrKPaBG4PfNY8",
  "key10": "4tymZ6AfzQTXUbTiyo8oaA1ZduSCFXZd5DSrZ5KzXpYj37e4wiLuXAnhbdrhVUs5nd8KASPj6kB4sUSQfHRYWWpe",
  "key11": "4rES82z3YAxTLfjg5iRcWUgBCenthShXRvzRa5skKo2LgFkzJXNMFDDUtanpseWUAExcx7SBJndkdss9mmXMWr4U",
  "key12": "5ys6LpjJu8H4zu4UFF2ibuY28Lc53jseGUgxajUUSErmJoKKBiGZjbUdvJUDtBx1mAdnhsVoSQPPemf4UQiYLNRS",
  "key13": "pu9cpHfbvMLRneqnvg9mYHyayU7u1QdockcwFgY6JoQouLTaj47kefpTaiE3G52KvrAkFoFmJWKhL3RSMmYMYCW",
  "key14": "4mCGHDyPf7cMpzFDfE4FPAKpRPVjbp2bVJh5bA2cBXMp5baZAQuEcBbLqg8qeJnAwgyfYkQxp19xEcgvrZUim7r8",
  "key15": "4pPedXiges1Yp6PPVs2tVvHJs9X2GRAPBanc5ZQ4EdLgwh2LTgWb2akgnSx4ticpabyx3DjQ3FNZCxPcfjZESkvj",
  "key16": "3AmSLzwaoJ1VJoUKBD1XPkxfS7Gxy8VW4SHt83J2fPCgeMfRFpRtw6wMANiVTGsgKqaE3ycCYFR3MZs2VmSKKuCh",
  "key17": "2Nz1ECq7Rcuf8aVRQPzJD9kP7UAc3Q1gFfdMiLnw7dcQRACfjyagunvf2KkwissVDYmPnk43kb4dtXxe9s5jLgcy",
  "key18": "2WD4rxagsbFvaYTxfbnK3Q5m2joQvMPx2SYD865kZ6Nj4KZfXDdoA7oVd8wYrb1G1JH9BAaFdGWWmeDnrnPVPzA2",
  "key19": "3CJrRV3TC5H8j8HppR42ieUrXhnGj63NSRS1QfzDWUmN2B5Vpc77rJUrrmEoBpCARv315yma95R33WHDS6j59qJp",
  "key20": "hp8DnxPxm4P6UP2WnHMdNdHPTvaSAJpeyTFJEHAQ7abTGLctNPbxaeA1uPjJYWYDMjg9Cf8qHTCRR8vXNG15Cu4",
  "key21": "5QbDke674u3JVJxT822eKPm7TMY8k1XRnknwSTnndH52HrTcHHMi7EXCKJC6xTR5v2N3oUYqezLYGkfiGRxHxodE",
  "key22": "4F1WYRiQofM5PfDq1n5fH4agy5Gbks3dyAX9L7NeAUrwCKdYEbQDd4zjjSNr3sbt8NLGDz2VZNngwmFK3RBmsfFx",
  "key23": "5LCjF52TMZefG9mh3zJiT1ojQr1Jo5nVEqfhmY6XwfTD3cbvDLowHGeWjKYXoASwZLRyvPtvJEgForXfCsAUq1Df",
  "key24": "23eckjjfMPNGc288SvXmyq6GhCRjkuQDCBbffEHjFLHYk6nV7drL7nFm9aT9dA8bc63Pr2vPRh6r5vwtjVr5Z71g",
  "key25": "4UqKiWQ3aLYgfUN1evBHe1LhGxrjiEz8hpv87WP7Kebsy3oHjRUWMqvSMa6QmZjef4Jpd7PVV43KhgD9DGCY3aYY",
  "key26": "5NPWmqAP8GH6aprnFrBUvVeAJzYPYuB3SM3irVz5kFDytQ824ETZthSyWd1DfNDtjM4owsE3X9SNGiUtU7ZAJ3LS",
  "key27": "4kHSG3UonAPMgvyi1VSaKMdzPK5s5D4vZiEtc8iY7XLoYVJq6zKFbeFZHiyNf7boVvd8DsAuqEMwT7nVcDRpZFAr",
  "key28": "2SHdc5PE6Dj1Ti83StRf3f9VbJUnstcvmC3TspJziTat8wkXtBRjE4PNowyeF8icPEmyR9bud7haX4z1Bc2N3ETz",
  "key29": "Z4koCDTG8qjKYyE1b1PaiMQ9RM5iPtPgQfCvPYr4EueKkSmNcBMd9sWpN28owRMwdhjfoq1Q5qpSW6fztDWG6jp",
  "key30": "3hmyGKPV1sjPnRkGsbZj7ZQH6DdhDDXcMZPVbdDw3x9cjqX1UfJXoMiz18n3zGDETkcTBrXuNsrH5xADDXsz4Kjx",
  "key31": "CoJpfTK11suWQ5YYvbQVe8ThXYU1SPpDQ4BDS15n4R5mDpDTJzEAQ1cMdgK2geYgXe21CHoQkfEJrapMzprG9oW",
  "key32": "4x5NyH5pB7CaxMpKjVLuoawPdAChyNnHksjiv7yTKy44pquaJCpcpXgdfQbRNAKu4BbeQbXqCMcCasvaWJX8krVo",
  "key33": "3AawPCk6y4WKiZgwZwPTmTgrfX6Zk6tTNUrqePhSiwpLCN872Xqe9TcMZ4cMzcv1npjjpsUYWFma5vNpP6JdDGqw",
  "key34": "9Lkkj7rTv5uTCwmfr2TqJP3FQh5UY76rXGcg49jdBAw8VQ9FesNJzppTbdDrKPe4qmJZh2YVf2ezBL2bPduLQMV",
  "key35": "52wFFMQNVYHBZGYVVnX4pQW1DHA9i42HePcorQhDPdtUogJra9Gw3KB8VqqvNSmYykiFQG8bgBWvVCQFFvtFrGXK",
  "key36": "2sFjWTEzgh3cUZkPQJCzHu5yZqj2eitiHq8YydEh4VP3Zs4c1LgNeTjTTcTE5KsGVfRGQe4K3SYpYiyLXjLFyP8K",
  "key37": "4Jfm55G6zpztpCXhhFv1mntZFDaYZBZMc42AHWHiP37cXyy855J7D2divPdaPpKV4Z4X4m7aaAkmKJ6XTr2NsGcU",
  "key38": "2DrFLgipwSbD46aKkdEHozu3W47kk8YiDgcGfgBja89sBe5ttddkoNuPQp81CAWVQ9wMAqDu1RBjheiJQeLiaVSk",
  "key39": "7xvKVer5nxE6XJ2FL2dow43gCmPeC5U3eKpQqivq4SqxAPKeGx1jv8znmjam4MYyEopzzBvsU663GoaH8UZVQJy",
  "key40": "2V8oCupwzq8cYGQqKJA4VhgDuu82FEAAkog6qtdH8FBpD6yR1XfAz9NY814DpgNMZVDyJFwfGNz6Tz4wctMbwTV7",
  "key41": "zNkg8LMJpvzwbKxDgjfWWdprJNrfkCKqkmWbp3132SgRWySKXvYjT4YSDbbgo4ojGBdNs1vRMuyBTcb667pPZz7",
  "key42": "3sCUAQ6mzHB4cVVKdq8vp5Fc5jZtqUGTcqwD8xYvYm9pkWe9Pw2Pk6mz5oeU8Wf1ouCWEyp7PiVYFLSQvc7z6n8q"
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
