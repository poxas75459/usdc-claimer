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
    "2YRUrNX5UE1utcCR2H96zzn2u3SFLaQhkTUJdYGMdhTXdGtp4nWKPpzdTmGC6fqZY77PBYFHvxtVHrYLcKcNWnx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYKm4R2sTxqgeyUtbwM95TK29y8LdscAuL4KftABFj2xaFY5eVSdtfA9zF49QtFkTY159AyWqv3hgFANeNL3cau",
  "key1": "5qGf5r6Ls5A4D5RKQdTnhhNFd99wDoUJ4JV1itqf12oLPECiz9d9d2ypyMEUZ63o4EWDPFcWcs8mVmq3Qg6fnHXd",
  "key2": "5SZepZiGsaGsfVUfqn2vuQrqy9qNjBfofmLHnbEUXKtDK3wpgJ7f938BvGCFk42kxmmkt4GAwNekUB4bq8m8skFr",
  "key3": "DHYa7gCx7t5msJZePk35g6xvH1fK7KasyYZHMw7WRxTHpMLzMjpPZdAqtUFmQf2ye87N3FTXnqrgKDNcnCzBYJh",
  "key4": "3uTLTixCZQi5TqY6PNd1pWm4dYYtLfUDZqf4bTwpbzZvgf5TEiZUhongBGnyV72yEE1pbijNnzmw2wHngsdG3s3o",
  "key5": "wbvPkdnNiBjWHNRqo8vCT6TXVpWdLCEt4ewc5mLb1Fwg7dtUgauJPaRFQCuj2nFeWigzPtzE2vwMmFZs1V7CNQo",
  "key6": "TmWLQRK9q9MYQhpP2NBmtEbkdjDZ1RyuXsEhSZgQbALaKsAgtaX51NsdpXKwfew4Z7z9mcjia5KP6JSRGLgWzQy",
  "key7": "4BHWdssbftdQNyvKB4JA6jpBauSbZ6hqgWFKe1PouR9SUi5S56zJEoQs9GE3QSxhLAnoa6jnNP8mE1b93LQHsMyY",
  "key8": "5e1DRJ2RKarsYYCPeaYsyYXAdJaTfbJmY69tWFWaEvdVunvH2W7MdPCavsHrCruuueBWQnYU2rmT9AgtaKwHS93p",
  "key9": "4AoYrEfhnriUF8qoksfSbQR94SuzHbgBeMoXR7exNP6Wkw1TKaExaZkCWzkrNh2Kb4SF5fkQJL6Et5j7WccAXF1W",
  "key10": "5xcXUWJHudRqKHcqLa6Fx7JKJV1wFNcQVfCiNXESrb2wJbB1tCVdeBJf7vD6pBywf54VcxCCUnwEceQCyMVnz5he",
  "key11": "34cFj9nV8JfMunMGr7ghC7WwFDzgDx4JXTZ7NZSysSVguA3NHt8sbPzq2DoQFdeA6DxeYqzYdFXBhwqqVMP2ZRf2",
  "key12": "4gWz4m5SerX3pBznMjvg2Dj7wA75ECwEawRx3K7Zg6r3nJChrdxLWbYxYXrW1Ltn9vxgE17hMSZFqYwoqdXSmwFc",
  "key13": "2WSK7pAjfsu5Vk3uGTqspuSGJ1xMEPhNMXAFzbSfPfCwiFkoAjJERwTwGjj1BKpDWin2896BGGanpnwhEB8givXP",
  "key14": "2MhtgspkU6kycUr534k3SiTUytCQha5kJyiuUnwPaTtV382BczaNukMGbGeAVq25DG2FPwH5cyiGXf3xvjvj6kYA",
  "key15": "2FZLugHxNTZeo9rECZZyESy8uqBH1U34jxt6nvtuUJPQmQKx6HkSYqS1d93PXa1WUX1CR8KvzbPgTVv2vQHj5SgF",
  "key16": "CSuQSKvrJyNTEtJhXnkCqVmhGV3B6aNhgXVJKhdDwZepUSgS63pPEWjqNeoCejoq1iwgoxtnSpbKwFuzGRhce1v",
  "key17": "3mMzTD1TtZuwdaSAKZPszadAiDpWL5ipDwjupnSGeFnnNLnE7SbE5WtN9xKom1FCXTRP7LJYwup9dSXdVBSZCGmW",
  "key18": "3DWNcs9cG7cS7iw8iDwA3FH9vFbf2RMJhQF6SSo5bQFQLAqTRzEcE2BWv7QGzpMmtx4JZFfpzBjiJb9HDR72f3Md",
  "key19": "2W2qgWJg6TWz9RJ2He1oUkW8M6wJcCjNtKh1VpvN7bRPj1vLR7Kay36nd8v16YcSEZvxsR59P2QSqQf1KJ7NXUpx",
  "key20": "gB4WLawZK7Gff1vwuWBhCLLaZ8QDtsksXESWbQKuBmAmCPmQifqs3ag2a6QaUSxpP7RSkJtbAAEtYduXTx5US1B",
  "key21": "217cHCymTcfwFZMc1mt22YWgUvvxJCb59g2uDYa94ZoeqyCbrfJ1bo7zP84AnzpR7iksyvB4XHnGKfZcGW5vQLSj",
  "key22": "eWmvZc3j4JWc64tnxF35q6prmTZzT4bUKtVAD1SKmh7je3k6c4St6s4vk3bEdK2BdYBnS5DoqWTTZfrYSzhmMkg",
  "key23": "5LaZReJJv6KG8dCWGdmEY5MpJKPMLWi6DZMJVxYyDsy2qHBq4Tjt6YPqcQhuyiAv3pbiBSCZFXufYdx4NMc9R4G3",
  "key24": "28vy4XTy5WBkwb1Z3xSrNj37JocoYNCCxnKwGsMJSPdJNaJHXZSJLz2C2DhuJ7wxVWFHEJKGe1oiq1wu1WHFmm6z",
  "key25": "47SujY6z5ZKD4CVEPnHa1LPD9LmV959KrtSG6VQZvsnkME8519AiTZezvrCkBYrYoytZc5u2bBTFyPE2xF31dHaL",
  "key26": "2AJGzPHyTf4evSUXEtukC4DJwUt19A5DYY3iwLarqi2yoFHVqdZ8UMQkfFK5tWzqFcjQmTHeVxLcSgnEmTnGufmc",
  "key27": "36jo3J4CHXFLP7n3TPYsS8UmJx8rXwWwwEi9cuH9RujiPfaSzujZX6M8WwYPAENct7bk4eNbDezRv2TRjmLNJgze",
  "key28": "3WcGPUiT5uH92xxTRkSKsXmvqzwzR4N35LTJCmYadKzTvxddkyXFmxHXm5kHsKp858uSdi5NA8bB3aLhq1Fuwpkp",
  "key29": "2vhSXRVfoqVaUbBiembc2oTVdxQRrQFguccNtJQcqT8bVnHoY4G9nyAxaLtVHbdmVpTFFpWvU3wNohtsc6rcQXan",
  "key30": "T5ZYenWzWuSmQb9H6PUjyvoRwckTPuMGbK4msyHaGNQgsAvZbLAaj9zaPEeX5FpG6PEgkdYnj1sGLdnAgx9sWnV",
  "key31": "2hM1B5T46Tmwc4tDnos4s7MDYkRMZkFhiQ26FVYaSTnBWoL22JFwG1wzmjcn7HJdSG5cuvr1JdVk3q2iK1wTRWa9",
  "key32": "2FELSg5gJZ92egCrBWoUC5TthQsWp8KNUByeWKmmv7vMSyVrwXnWnaq6uQqVWUTXmuUxuSYhH89yoYG67gCNfhoP",
  "key33": "2FWaQAZ5nv8i4zDSLqHAzSHZNzGmcM4EzLb6Jvm1Sz7wvqBrykzo8NtTDeCEDVXA8UgKEUkEXbLVWPV9MdwHucNR",
  "key34": "5Nch8SwKdMX7aZzE3quuUo7YeXNw869dPLd2zeWACR85ZkQM91YutsMRi9tQBSVJMm1MZccRSAAVuSmCbyDRV1HG",
  "key35": "59xsvmvtjdzvkLb7mfUsHrQVTkFq6Sq8UUj7oYNEsrYV3mazxM3ie9EVkwLegfdPk2xt5fkv3nEpyFoJFbyKibuk",
  "key36": "2StWpAYtZSDHNQXG5Kc3XyPoYv53USozaX7TD6gcHFfM7bJBNCB47RRFrddxE59iX3h1VxntTBka42rWoX3A3Fq4",
  "key37": "33gH9Tev2ovKVYmenmjyaK5zWUEhfBjAdi59kpj4Pn6gGEoBMzbSxtbSLAsJyUPCGM2P2bJtFhucp3xyNRL9dNMY",
  "key38": "2Ub9pwkcHykPRX61NcbisSqjNnRH5mDBoTFfRLQrxR2YwJ2qXnDwyy3vkhtm5xEgCg4g7rpssme1uGjDtJWqKDR3",
  "key39": "4KE44QAb3NSpfDLaVA3zXL9oUmk9exQQDCzXPhD8A3ZPmfWEi6WxH9tX8KQNStHDFV5XKiNJ1Jfoy92PMGBcwKv",
  "key40": "3hNXfN2YA6QQfPeVPJh8JEoHqqRD14yKH3xMyrnoJkd2bi3iAsDZ159yKxTALyJbQsu124pz4CLRGD2AaW4VGk3G",
  "key41": "5LZpkG4y6KRcoZb4sUBdazbYDfubyYsK8NbSFGnk3CMoC314zypefbhU7kapqudVF61Bcjh9Z58V6d7KnvGr2G6t",
  "key42": "61tfrSMjECNJDUkZNNdJtgFYAkBzzcQgsgAXMhPpZi8uJkRdLQLbmgiEfc5SbR52NR2fD7WWvV2AXPyuc9te8Mdk",
  "key43": "G2nKAjfa6ohoMG5RzfGFazH6Lc6faEzJ7imJYBp2vxQNKU7Qe8CdmJQrqgM1Ngcq9XvJdrijKeZFtnq2LthY4wn",
  "key44": "5FQRGH3PvvkEU9kQq6vngSDEkudSGSQtUbvGMX32HihgWTDPS94XYToGiMqAjrW2UtwUd7Ns3Z8VRkC9twwSU832"
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
