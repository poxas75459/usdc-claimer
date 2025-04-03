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
    "jr3KzJhiRQWqvp1MsK5tL5mGhheZgWwpLs79igbPZ9wWDQFrAkNoStFtUAA6xkCGSCDqr8KAJVPyE3pPpPsT99a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABWQzqBSjavCd7jrzcnoGZ8dDkJBmNUkgGnEGYjTvA4F6TF2J78iGND8G6i1hQmBnm9oTeK5jjNhhThXx1ZJkvP",
  "key1": "4D9T4eCaV39QNauHsniS2dXaYvgHWxoWhzHWmvWYuxqkyyX1UQLe48SAfNoKaV3u4xt28HxsCBjFa11AjTQ6CZmJ",
  "key2": "41q1dsGR2ZLF152UMjbNPMN9XYUzTeNUTtGN5ei3KGAXN15vrsQVRao6HhuXDx6yGv2Z61U1ygNfgf6odv9ZSnrB",
  "key3": "ydQvBDxfafz1vJUXsRjrdwqAQY3UcnbZGhTtahpG58rBt6U93HGiaz4TGAcf5vZm7JUG2Ji69JzEB1Sr8Lui2Ki",
  "key4": "5iuZytFRaG4KkzJCfpgUy7MMxPUo3euCeJ3mvmjD5rhGgRnHoimVXyA5WcHNtgVx2JQ43FtcxV3zehc65vercdPJ",
  "key5": "4aHWrg1BBdEurzCniULgBMoCBresrVYsQMcJ3og8VBqXLrZXLxfskAcEsGfpXg8Eg9qhnhXJzMjR8kMJUDaiNQ3E",
  "key6": "QY7WeuYEHQo4aEHZbzBo8JTPJXWkRTySbojm8aVn3SRmf7Xs88SUar1ujya9vmetCXJzVhcB3tgR53xMsMaf6XS",
  "key7": "2D6JJ99WsT51GHWXTk159Nfwzvbyhw2TpPXe6qbe1uyGBFqa6WTHf6iS5W1Cm3295qqGymfPnfR4azZLPTdZ1dAm",
  "key8": "5CkMZiXM5PFHfQEK6YRahMQkw8XRYCiAowQAeMUc13Qd5H27JfALdeQ4Xb3r75RJh2waYi7ZTowBzB5MK7TwcT7K",
  "key9": "YLQWPw3hsr8h1GrATzaJghFV2USjzN7Pc5Th3UKH1cv1RbRkUvooZ89yY9gXmP7cDfg7dmcBjy79nTWNZYPuY1S",
  "key10": "5xogFJVTMxSDoYiwV3VeDSEb3VUzHtTt1wM1Pdz3dmMZFCKn9ZjQchff1uCxdv5F3wMQFNDQSmRLDeGnDge7CWjv",
  "key11": "5Q2Z2fh4igPFLNuotWeKz6bzuVsQYtue3JcR71stTmr5okH7aE1RJdw2UcdHv3JFbeDy4BCoSAmEszd8EAMU8a2t",
  "key12": "DkYAFMKzC7WWWWcNdHY3TWT1W5bYn6u5QbwNtaFxHjnxgBx8MMwfY8aGiiaHLFrxh8WyVKiLAnmtivfMfGy3p81",
  "key13": "5TTba4wz8keYzz7Y8zHNvq5yHcniUTGb3sBaj6CAzcEDjUJQS9S9QHe1w7D6tPdTQAVCHzL6eAzWKKa3nma1nzA7",
  "key14": "4moSuUqacdJt6YYm1zJnBAcYwVLuib3qgTav5izxUdVycEjmoJok1qgdJjWu4qLkZyaRx8ksWVdyeg4EvymfyaMc",
  "key15": "o756tQkK2rvt3AAf5JMkR4aBZYygNhmW9ToW5mu6ontYG7F1HpzfPzaBA95UrqN7BFbUmejws5tYzpyuCK4bUHn",
  "key16": "XAzUChsHt15M1CVnzaHZ6so1WQdN6AQJf69L8of6QFg59ookKNvQ1GVbXikjucCzKYSnsfpzWybT5UYTr4txUGN",
  "key17": "2VUHG16TrCjNEeUGZsQQtZGHDiX6gG9tNz9R7H7Cv6L5VGrUMgQ64UTECXLHXZ1Y4dpGtdAEDCh7ewgz9uUGDmaB",
  "key18": "4TmmGdcojthxpTgYN8462XXm9F8xpcCshbVeBx4auJCWQnFmyUdzyJAdcHgyhBRf9W5TtpNEV616A8ZpY1FSqBvc",
  "key19": "gijbRAXuwxtv32b9x51X9y6tmPdjSaoAXwoRAsm3oCgmVM2BQYXrsC4FW74NM3FQoX5AJNDv4mY67sBuhv2agdY",
  "key20": "3n6DMUYKH9o5oJa8Tbm87aFeD4GYdggrLGrL4RiFm1UQCDhPq7bkV9NmPd3EV53yXvuGy2gsZNwyV9z7hCZonyEk",
  "key21": "3yAqrk9GLyPStotkSkx8cChLu2JoV6SLZPCf2W16T1KByCZ4tQCb6edHgZhUMyCrDfBdGecPueusrhnDwkYRsaqd",
  "key22": "2dVmJNkUWKqSyQfXNFpxgAK8Ywn3vNEeHJD72rsCRzFc7zZhytz7LoN57akGZnD2D3SnuzHuQQXbrkz7dbM9HMZU",
  "key23": "51SnVqEA1b14XFmemXtGn834mFE3m6ShyxBkat6LkHzQHu8VftCb82FY9KW8XLzJHunrbw7aEj9cHGsk5wB8oUZ2",
  "key24": "4MDwKWwf3AQ3JTJcXngvcUeE9wEcuvSErCsJ94i7E2CvMfCezg5DUWXaibavsRcpScm57CPvBEAPRNZpsUcDrcdq",
  "key25": "2AeTNpi9U1etbme7cjbQ1smLxXSSDsQePZgBYYGTo41nYeqyeou5qouw3uwzZhDAhrCv9vJPQjwriirGrXWBQoFY",
  "key26": "5rUwMT97AoHf8hcH3fbWiLoey19FHPLueX2zteWzKg7WqZHz91GZvKG8ZkEhsR7vVo95taDoTbyAsF6t6FNAysfK",
  "key27": "2quRPRNAfKJacC4mDspoJJ9HozvVKnSrNLybgLZLrpQM58FYTZT8jY8owM5yLGcb97QzzvccyZA6AxgEHebzpvnz",
  "key28": "4jCtoWopcmnq1b6DYxGbfCdXE6jRDeSvA25Ed9PmALqegT1aFimx1yzgbrpiddemG48YsbNVkpi2nKnpCG72EUFN",
  "key29": "cnt9WoGKk5qY4QDvgukNjzPyEvJL8BAPz89jc4ct95Hu3BJTxCcoAQnzV4rW48558E4qHrnfmzXTs2ugyD1TZUn",
  "key30": "9gXt9iw4K7wJ2tudx92nBcUV6ysBtJeGU8mdamrDSsrEx8fzEW5Pr1UkgFdasaurco9fuNEUUXyukENYhxP6ECK",
  "key31": "1nimYVbbBzjBLEHaQZTy35SHPQbgethUNeCuuZBhurmyHCd4rb3GSMwEeDbySEtjNANmGTyn8ADjoZavsa3UHrD",
  "key32": "2VbjSvxEaNhzX8a53osg7vCA43QJJntyZPkfESoqCAv2YeebjM9fi4aSpr9EygzvYQSqz7MhWx9hQCuomQ5nwrNX",
  "key33": "38GjNfwYL6pmSTPtWfQ5qE77g58VptVbw1YwQ2vEiQTT41WuR5yZ5qtB1KR9PDKgEv6zNfYzvmTVdKXwmodgyzX5",
  "key34": "PBzwTyAKZPA4DxjUAxhSTubxTJNXbfcdWi5y5vMQEfPzgofo7m11YjyeRyAL7pCWQTTf3EYYxJsZ1KVZEHsojuv",
  "key35": "47EeWCH4NtDobipDN1JLuFNa2hmTAyiNerHUxMN9zUckAdEMXfmVFFGRyagBSiX4M3CCGnDqqZHwMJXSRnmGYhaa",
  "key36": "4A92ArT9rVEJ7BxPhRcUmBMHbzxgrCzitPcfu7AGtB4ca4JSVFyqy2AFQ5gePrBDDQgYsz2jGYkST5mNjVaw87NS",
  "key37": "4UFXA9Q44GqfMvTaf3qCZYkcL1CsJUJtneHQquaBexTLFj3LdPfbBwZ2bE6qdVk383LgnSRT5YFApn9J6n3ix2Sy",
  "key38": "3R7fL5ppDLjZ3DcXyDCYe5QiSXSbyEXraycNekFivUbQEopgckziMobqcv9jngzQ3F8d9JyNnSmzx1hzdyJdiCKr",
  "key39": "4AFWQW4xwyyuKhsaJp95HjbjeBGjrtpYMbYnQpVZRXJKp2LECc7rQZQaLPYdE6cUV3BZ9egWdcML6zGmKA92XSKX"
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
