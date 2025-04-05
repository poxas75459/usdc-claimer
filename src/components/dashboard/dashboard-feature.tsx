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
    "3uZUsBhDvnYqYLPffKjLn3xzB3e5xB6eEervgzQSxXbdsX15ChZkQpT1MkE28NxY1JmY7UVuMPYn2gWDcdb4FjRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3daZoueC57wmQrhcfrPmh7oVHAG9ow58Cgft9pr2DSVwygbCmP8yiUB3Sk4SkV76QgykqDo2BGCb2woSkq2Pk5",
  "key1": "4ajVmaztEF9RwwKFbs7QX1VxRzKvFuAgoALg9MHzJhAabrFU6g9QcE4xut7HC2jwHkwq4a7J1THFJa7VrM7dwYrE",
  "key2": "4ac48inCnVAdkVRFJgHAytSmNpJ6q8fkeaW6n5dy9U1KDkg5miDrpdeMdNx4ZKN85aqV2i6SVNjJe7RRHxJ32tPm",
  "key3": "2Qhjo1vsKNKjSFNbZvK7HdovC6PDuXxXyiAYUzkHwQpDPVZuwBb555cua7TQNmaxUVPfdxisWT4CByUdcoPAyNTx",
  "key4": "4s9nWTa616nDZver7BTyfVcfQU2QMvquyCJXuSkFM14MXGCUZHn2GLm6rne2dBMVot5oGL2aNthjovf17iZwwVZc",
  "key5": "3hKmUHSxJrUXcrauTkcdWJBTbdyqcKnsUeoVBEW7K5g3xnK9Ma9A4AmpYLKLnp1MKobiunnpTveMdHU2CP5eRShp",
  "key6": "5shawxH19rgtqznxoAj1Ye49XVYhYenTgeBDm1etj8GPxWWp1irQ26BV1nSpJC5kJBvdn8aWcrYDZkZzLQBziS65",
  "key7": "2MVCJZXqj3sdcE45bKEENjpBP1YvYPTH7WbHGydcMchbKRKoEEtZcWNYTvCjwMRry2H13UmxNZfttaAGwA8LvXqZ",
  "key8": "RjyigoxBsZTpw5doGx7o7ewejUo7QnHouuGtJkAheJqpWbc646jULAWZWJXgutYfjhqadC4gBvBtXLpzB928X2R",
  "key9": "2hzdfpE7a92dGBWKNRwbbc6StK2Rp7rvQG6LoSk7NwXsj4qPGrq47NnyCADypY4WSJE1qzsxKpr9ZND9U6YT7rWs",
  "key10": "47SyoCUENcxuy653ry7N3z8zqTJGuBFMXnWrqn3jRYF6cRYEYTrUta5jU6E7rWzbp2Ys3NpWsveYSsTiMbtBUvVG",
  "key11": "3ftSkUX4cEhkcx2nMsLMDH5k14j28Kv2GaHDB7FgXC77FvHc72ar5mMoXScdQVawZV91af5Qimdcq3Lbvwr6Qktb",
  "key12": "5HgZ4Td1HJfCvgpRhcU27ZVZFZW4CQTgoXNsVqbzrbfHT7kBFiGv1Eg9zPpwceUFHP85ka6XtK5uxdsXEyJ4Rq32",
  "key13": "33KfS2xvbiwUw5TzswXu3SHxSo4Li8JWLoQTAUX4CFXTaMqiMXpBvmX6G62UaqDexyssjpew7q2W7ZgAYZgortY3",
  "key14": "4rSaPThCxZ2uiqsWUSKPD4gz7hWLLFy4Cnn8d1CFKjd86Np2EB818zxeRUqUFZTzWBsFKfgdnqkJWWqf8qCioo43",
  "key15": "3xLnxPirakABPiGS2LwdsBv2rjRZXoLi9kpHZ4oCuHiQaXzzBoqt4GsnEq3fv9dAWmfW8WgcENiUZ2X5ns6GToWb",
  "key16": "3rPCXbfuRuwZKfYcnsxRTjmiMYAqEaTnZvowMrDefywDg4qphabrNetfchLKH6YCm1CFwhdC8HEQAh9xyHmMf6FM",
  "key17": "2ANdDoYmYoz3Na5jYz4JvKRrohkALzfRZKxnAipa4gHPhbQxBnKF49h5EWEqzY1J7egpmXK5ydPbYMUb9LT3caV9",
  "key18": "4KU1KDaayppGjti6tGmAP6Tv6ZtWdJyRBbGibWdPiipumsu23BTukAnab3oxcVE3VtQxwn9h4teqWR5Hi1cwdjcm",
  "key19": "3bzcJXJ5VagXcjYbyhPGGURoQKeXtMkoGQBgpmt4CkEoRa2xS9UEi5Eq8PYdDRrBRCGXPTmhgbwtGexNAJkLbQZf",
  "key20": "mAtCX2ac39DjezsPboJwTQhuwnZeZoqrDfHV46K6EZ9wLgVvFUjLR7PDpLsRGuh4Mu1v4qPKbLy428jSjgvBwRN",
  "key21": "3q9wxb3Hv3GXyngNqbz4u2e1iisQWmh2im6StVtdcQmxvszwVBT7hNxYWFqvCpXd9YyyDqX9ctskawUYdpB1Gqx6",
  "key22": "5LLo3w7Hfchwg7HWzUZoNp2SqBzAVecw6EHh3CmzyLKDGdGJvTSVe9PpGKa6asnpyUR55cfYYtnucs9ncXKrWUjU",
  "key23": "TJbvbYguP7ySLH2mWhFKLmZRy1PL6PM1dx1TpZ5fMWceYSy6vpB7VwN5btMoKK7wgjW7vrbdy6BQ3sNriaYgxEt",
  "key24": "seqYXEXLkkhgJyYNboNf9BZMAJmYkJHs7Yo28kQXmDKxuFjHKyqojHZjA9cyT87KtH8aWwsjD1YzcKgs2pcri5G",
  "key25": "2Zw4TDHS82aZqjMnNJVBJibhcWcuq7uR4axrTNkKa4oK7c3FTkq3v1g81Hme9XL7Jozqawy2tVzHo4hQNu2gdUxW",
  "key26": "Sw2uWR81xSdtQkeY9L2bY8XygHYzFqaX5Ljf9jhvaUvLssrw3rd4gqCvxD5jn8d4jG6xpdubbezcwWjCnuZo9U2",
  "key27": "51KeKzrRCeJsCxxCNWrpY2sCeg9G7sfLwZVi3ZkM6YGoeNKrezsnZ5eBLWd7QWykUMQo7yK1y9oE4NLLy7HUgFUq",
  "key28": "5qwdtHdT7kbrKynLyKJAubpJZhqLof5yFKQMYd2EjC4iqXZRwq17ijeFeZgyVrD8N8JWUR3wFjWZLb4xmXstNwog",
  "key29": "3uysfKF8SCeMU1gipwD4SiZn7AhDH2CGmgh88CzUaFTRDpCcTPzAEmL8VnSF1rx4mKsGWk3iov4Tcr2GWc9hMmGf",
  "key30": "4CXzQez4tgqEHCD6HEFjD98bmnjB65aiWiVB2EsDJEkLYbbpWYLhFx8NiUkqU5mWip8bBt66pR4xGXicCUdazMrJ",
  "key31": "5YSZjzca8BA2aacenduiU6pmEo2v2YaFUwoKNo8KDDfg96jL2W3zZpNzYi4icoc9mtXKevntycEYbM2uGNmMqGGu",
  "key32": "4KDGqwuPNny5gMm5LRmoYnHP7sXp3RUgsUMAcm4noLuKfMMp2WGnRdJDZEVGYAXEE8ggPPzpG1GXTzrwc4c14cSF",
  "key33": "3eqP3ZdxeQUispitVR1r6FKggCpt6e3JcTHb8WiBNepQA2q2LX6m4TVxciQKbfczUswYC98StPH3EKnURYPAUo1c",
  "key34": "4eCuyvKD7resAenipytJ4fTKogCaHA79PLP16Arurx6rMifqGmvtzDvy1EnrxzQkUSR9AT5byfLipKB53uTtbSJE",
  "key35": "2UHBg2awLUvnzs5GnU53MGf1M8MEKbk9yU11AiD3QhQb7BuQpJgsSmvSZ3z3n1mZTZgCVx35roD93mP3SnHMexvK",
  "key36": "2RUtajMzFNmFF49EVCWJXBobPADWwfuDoLLyywn88Vx1weS5pWskStD5XNRcP9H1h2oDoQuT7rh1y1KMD1oGGAko",
  "key37": "38awVpsZeErXPzkXfJNNS9xbG7B8jeTejWbnPxhfg89iQQRWTxuUUwmPiY9fM7ojBBayvvGdXoXZ64PtM6xhuRjn"
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
