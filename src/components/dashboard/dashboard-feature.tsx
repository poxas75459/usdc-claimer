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
    "2jh5GDQLL79VDRieZjdc5EzGidfS9BfWFN9zX3pujh8rsYCietAh7udYwAGAS19bv3t1qCAei4Fm62FchQY8746w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EQKHuWSi8fQxLsEXjurSd1kqhN9Lr9A1a5iesdVJQDenPYDzYULTNMSr4JgwTeTUS7Su7qtQYsDFHZ7DmBLFmwX",
  "key1": "3E5BWeQNLdku8znnYeTs3QstbQscuDAsXVLZjPG1i3k34MBA4Vb9eNEBUDwhH5QZCGA9bj4WhogSVsYFD1ttDDD3",
  "key2": "gAWXa98yyeruXdXLLdK4HfQXBvL2jNs8ntYyB2A8gjXFzWVyx72y5y5qdi9iriUsp1NQhBSLz6RiqqfMGH8x52n",
  "key3": "3euZAevyCE2DMBabKN4CbEb2AzXrtwMaGhb8q858ogH9jTsxFMCpqRXr3fWAifCaoetLoHHX5zs9pv3bo5oErunC",
  "key4": "z7NTjVuVscK72ewmbisQWGLNV42gjJ4TgUDWAqRd25nHzrdm4uoyy6TN2DCs2NaSF67ecEjHFTMK7HdYTbC2yKK",
  "key5": "4LnAqnSNE3RR1GnGkPD7A1Y6WKxzuQksKbXqxTuyn4ahwoX7QbHYdfFbSJnLrGBjt7c9gEi1UNKjwhFUFNtdg5w9",
  "key6": "2SvuHGzCw6vod4LytJaNmXmeUbjvgeV9uPd1ekhCzHQt8bYc76obqeQ6UDiG84UMEDBE6DfcJ3DmMEwe6tbaeJxM",
  "key7": "4brYTcbDXaG3WmcdpUvcrXmdKrJisVudRr6MZMP9q65kgUhe6SibXkAMN8rTPFvT4NJaYTt9YdidyeHWiBAP89to",
  "key8": "5HKFAtj2cnY21fJzFA3fRvkqNidqSVYB3NAVWk8hybUPKn1N9yVQQ22KDdfqzfvmRFZcJbcnDBQbtLk6n8NbzT5M",
  "key9": "3ZWEnAepeB3esuwzaM2PjHLvhenG1M6me4zzZU3hDbny8GxoweQzH7FzRrNythpVH3DgBwU9jNRx7YbTnuTF8Hqe",
  "key10": "2P2RQiCnH9sLq9sNvuoQxe26j17CnsUwPHBW2b9fnLPk5wL34b9kJLSkeTBQb3mm72dnEp5VxNzVirRRqpC8Lbsu",
  "key11": "5p3sV2wDhsGqQES8SZETo5SnjEwrpp2KwCm7KVVxANFec4wmkaV6Ts2sAU8kemvFSER12KmPnnaRLanZ9xLfqDap",
  "key12": "642riQuUFR2d7XDm6zrTart5v8CMYp3ExEf1hzsDFsTGRw6sUV75Xs1J34byipPr8UrGySUVD4TfFETRgohpLvRK",
  "key13": "3Pi569PedApRMPrhfaAyT7U7g3THdt1oLdcBrZr8hssJDBXmbLL1Rha5n9TSEkmzXMv4FzUAw4DgmTqoq6NALSjT",
  "key14": "5DqpZNyXad1KRUAiabrbbhnc2i5ybr6WDLCvmfXFycLD7334K5EdmGReoP2Kf2eu9vDWyrfziYxagQ7NYVTDbJMR",
  "key15": "3mRxkmArPPDnW54NdfVcz3kPi3p7vGLsGV8Tixesz9Uwzv97T25mSuQcqfmuyGc4KYNTex3H6WxxkKvZejyQf32K",
  "key16": "4YjaWzZ3LUcFhaTuXBtT6EwUsVLm6gpx7SHY9AgD6jQFmrUFe6ZGiCSC6iBNrPwS4aiHjziLhG4MnEeAqmE7UhdT",
  "key17": "BwWMokbd3JfX6UbjV6DMt9eZokp33Eg1NWd7pTJb6PQEkp7kzgQ8pS7RYDXTutaHZ4Lfnnm9rr2eS3kRsALiXf3",
  "key18": "oTjznqjpeNzVnU8StSwS4bdUUCmomyWhrBQrnBRmXdKfEHAhuNTD16bT3jTYzgdreCEQowtNmGU3L2nYxG13Pwv",
  "key19": "3VUqiAQm4wVTQLp5ZTfXWun3djfJ9uj4vyn3KdE6yAQ8CmtNHNyTaD8d9LVbLg1raSP1yoBGcXng9Hr9Zr8Ajo44",
  "key20": "4Kfx67VBuSgGEeY3tgKaUA1xoveRBLV2U2denYQGgAgib2EEiyLGBcUvzPecCfDfaof3b1isHqoN2MP9u2h4ZWF7",
  "key21": "2p6bUDnYPfkdvQ9K8eZvPn3y8dH4we8E7esw3t2kqHzVtf8WP6H4xtuErwx26J8N4yUvjcgxZo3USWu6heER8juG",
  "key22": "2JdaiTLP6qSnwg4EnkMahsdZuYMrxQphLvgg12H7L8qHKxjPdETyjs9V78tqE8AJYXdJWUA87Lp5sVitNEx4mE1u",
  "key23": "3xBuy4LSDKeCdfn63ykGb4H13mbvitvoj7Hw4q2qZrfrf42QmDQ5P7vrhfiDu8uMipVbqov4Fc5iYgAQGQdPdBxN",
  "key24": "2SFkjCXNcSS9fBLr6gxTceHPH2fHukKtrwSgtHpzt8fcJ1VvEcTzf6dveTq1FwTkQoW9RxsbMFvt7tRkmtnZShVt",
  "key25": "2o7vzpK946Vkr68nv3upz3H4qpcvPfwsNLwoFFL2L6U1tSmXFVUCd3A9ZviNVugDdnH2rxpx7dTyp1hfvtWGuktb",
  "key26": "5uuvJbnsey2vnUBgRnYYR4JVsZ3f6YHQ6ppS3CYZabzguPLtknkGx43y1q4E1iYK4kSz9vNMDBp1rGAwWWJJrHjw",
  "key27": "67WqqtojbpatRKeUKGECqbvGANXWMLZF9MRKJsFNV1xn97NR4y6jbcfyqt5yuAYJT4LC6EXTSkiMq8B1WTxmC7B1",
  "key28": "eJR8mpXfztfuKbasqinC7SyGVUUDKggXsaJuHNkf58JLNi5QUnzpQmstiuf811woYQz5SqgWSdtm2rzmL8XxF6s",
  "key29": "3z6mEB1o4DYDhick3ukP744MPyfxbWYuwtEovYHpGEeFDVTX2URUdPiiFCkfMeZKR7Ek45PrdreLdqT4xB29dd1V",
  "key30": "2XX5XiShSRRZboBnd872YxduXr8bTAaRCQfW1DU9ctEvnpZ2UtrzBXGNkTij8eT1mjs4DSXsrnYhZkJcyeGFhyNg",
  "key31": "46y4RkV9C8fokQeWFGQSQjPX5ryfMpu5zQCStTCdzAqkfsbDrVCexrH6qKpUVZieBx6WScPGouS1UK4pDVooWCux",
  "key32": "3xYd8XM25x3jhmigDr7BLtERfHjgtwhhTDdsVqG1zX1N4Zmz6rfyF6xrvS98S1USQKvUip72vAJK4vKdxUo7qEoa",
  "key33": "5iWW8m4zWYkAgS9C3ew4pNftoQEZz5f1fXzGshSvbuHSLhY3zV9yRf4jYsYsEiY4w5PTixkNNQKcT1NWXUGnUc1T",
  "key34": "MyToKAJ1imazgbaF5zHmtcXXXnQF7yivHB6yvmzZMFj1ZN72U6KhmdEk3iDBxMHvpC4SihZxAL6TaVN8HDP5bkB",
  "key35": "2gCmLf3B6vSgBn8p7o4hVxZWBMEm2iQygggb8RSwdWvg58meGb9eUKu5q1ERQVtUGBAYiEs98P8MKjvjgn6Yf5DC",
  "key36": "4mC2fkpsKo6qUJr4b7hqsT1jdCSZdFGk5PiK72GMfNPjMpqrzy2h13MnNTZnQAqC6fte3Fzk34vY8cg6JiQ5znUP"
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
