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
    "3bT4gR5BaHRtDJPH9wnistaMDU55cehS5G3bhLKSD9DPPqV74ESi694oYb2CKurnq9UZp9wmUmcM4puKR5KBdspD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ykeibdXTpANtJqaKwWuTcnvM44wreDxnKoM8m9tJgQVhJGKRbMkW8Gmcws8TZrdo2sxa7jtsmyv8VrUhf2SG4E",
  "key1": "3g47NLSgBPak88ok87AxSsBfzqUA6waDUfKAKewAygQD1QtjbS8Ht7JboPGBAXGbd3g5gczoCsVFw2JpXustnUb6",
  "key2": "2vtjrHxQJBrM2LskPUBekLRJEpDzVAx4BHvM3PDnWtDbBqT6CxJgib37BQTsnrXAUCDtH8ThM3gEz8etKATTUNEw",
  "key3": "625sWcezPKWtvZNGJP5h2kCi2fbCmzuBtm3iQD8w5jrw83nFVqQqyap1LTnPRhC3feALeybebhj3K8jyme2ZDJNC",
  "key4": "48CQMkn1hg4pZHbQpXVUq3HhHJ4cnBaDaBDX6VK7xyDewkfvNn9GAGUHsvsgvGDzJu7nqNWqbmqCz8osgYpWNptT",
  "key5": "Gy1yLAapRWPpFGYRE5dBwgsea4mzcJmjnfKqTZkn87GTj5rBs2J8KGwsUTJkynPC69NHbQn3HCkXqPEtiVYo6bJ",
  "key6": "5NdSPUTzDF2CED5CZiKQiE8j4XsnrtA3EStLNSan8h8dMkfagGzbnZkE5LK6DoWa8CyoALRj84Vzkugy5x7hoZ7u",
  "key7": "42xbqzi1a41n2ArLawB8pFc9SGB1Re2UfZZWPje9Q7WW3w8Vvp6ko3aomUsUczqdbcwC6jiJ7n97314yv85mf7bD",
  "key8": "2Jx7kFtCwJPM1e69kpg5AwZBE792e2oGfN8WC4LaxvaAzxJHwyJzgnqgmU77B4o9s9jirdu5zg36ZHwYmJnsXjdb",
  "key9": "ErTMXThUhVAELbAJ6xJneznjqZvKwhmMNZkDAL6iZSaJst8B2v4NeTtd14ScP6Fg1ADurJzJYpT5AJviV6cMAXG",
  "key10": "gYgPSrS3NTRwXC3VKdxYd1o6GeY7m3Kh8Vywi7M9AasNFHQvxn2kaGi1B6Yg2U6MiWk733aNs7CkAAZ2WQSpCxM",
  "key11": "3o3PZuQiCRKn5Za1GWq3Mjfb2wTQQiGXLA7vBygYKrt37AxgixJZPaY3Veo3G46e4Hit23pHTdHnQbsRcu4J7Zpv",
  "key12": "JFR7pFZMBvnG48hQTDk1nzFJD7rH3yAn9AJCxyAU613KbcR2XqQqpHHAkV76DCxrW31wu3DD7ep7wi6ndhFnwma",
  "key13": "5qHCvNZDVgAg4EiHzzcWRs5ejhRh75g6dyPznfQ7Ckme6ziFtJzpRh4q9pa1H7MXCiFHvr1rUFrBwpUEWJTFRhcf",
  "key14": "2V44LzWe3j5XXRM9QGZvdtTFEgugwoy5WyfWRDMGamwXz7NPaRrdt5DKET4wxi5pcSDi8PwZ5qJ5WxrThtmB7nRF",
  "key15": "2CY9nCVFJDkkShy5PUCvq2vtA4iJZvrBJ1P2NY5nNGFWvS5DUX1vt3wXJvx9gnSWdTb3aWupeoY54MwwB3m6Xfb3",
  "key16": "E1bFueibeVZ2vnamEjS3MPkKanevf75LqJgq4np54kSDSV818g1ytvNLyFuDJwJJmjxzCaXFSVNAhbegN4v8eCy",
  "key17": "3ZJrei5koxk7hSb9Syn5Fhs3GgMRs1RMzgyvin21mdJ1L2gzchU6TWy3MdqMHcbNUu2RhqU9a7nQpLY7Ji7aT9ru",
  "key18": "5Z9YZWPqCeZ1y866CSLtwXUhnM9vUEAgSgRLkUWHUSiYYJHFZV3QJLUtEbaxRGpkCPH8edTqSRNgETL2DxaMdUNP",
  "key19": "5fRd4mxc89mJ6fHJqJJBmCQr2df3Z4vq8azpfnU7q6RSdY1eb88LFjH2LF7SCJ3WteWr7DYr9DaZJfAKx91F1B6d",
  "key20": "54EcBfRZRDvtGNYD72sMGaKAcorTF61xS3igVTh7kceQC5dB1pymkgs1bLN3yQWXEpTVee3H9aM13tmCXg2LjVaT",
  "key21": "5BUgXNF8Dqw8auoBFNHodsvWreRsRuHnC72hjzRWoR9XpojiKWLVNmto3d1zmqvMB85HXewU4uy6bnVStEBQmMcQ",
  "key22": "3sfu3b854jMiNET3Uf2D73TYNy8vcL1QUfeRDvBLWVQ57SxB9vNUrRWv2atA7njiFHMxR5YpRJ7pU43hxXeSBhjk",
  "key23": "5BBT7CfnoSpdq8tuEUkBb7V9NGAVzMgobv7L1F3d1AMBhf1dkmscjwitaGq9RVSxMde8YAtextgVgR34Z1HqCMTM",
  "key24": "2xPZXNEwcKiu4ypwd2aL3hK2eYXbmtc8Jt2HtDTeLx6JnV33b3PPE8YC4Jo2UFeWTfmpSgS26Vg1TqdRctZMMB3K",
  "key25": "4AK1o2g9s4j3rcrawqzSrCPu1itymxYg4HPDm4zpnoDLvjfnDhpqBo54ZgkykLHT2Fh3vvoVsPQr79CMY1oNktXx",
  "key26": "SUiGbDxmS7amdnHDTNrYhsn8HpKSTgjNh176JMVAcHGSo4oRjG3genf7q2Db2Dchd21521hhhx8zQZ7Z5fWBvR6",
  "key27": "52kj5KrgpQkDbSuZMp7syuBrDYpzCPbhFoL5JhiaLMKMCwyb8UmZmjvGJSnoYEqex3JntiPs7UihbcBmSbxTHkGd",
  "key28": "2rWSTirDD1Gu7g8sabSxGeL93umEwzVCnoTwD4eopoBBHhf9CFuaDfE5o8NXZFE3GtQSpqdTuUwPnKT7T6MJDM47",
  "key29": "3zHaReFiqjpY16zkwyYqMR8JHXACWa5yZfgA2kALCAwru2W6BSV7iaYw5ZnmBAHF4pgeY365kRoGUYWGckDMg6Vo",
  "key30": "2zCywAY9uzurXnv7t8vQEZr5pVdFSRoQeEWyU3DiYkcbjV8wuTqUkiqTs5vpvR9AvDMNPpyg1pr45q6WGGSBSoy8",
  "key31": "41uM3ANnGyMi76ex6fZwKkCaxfYiemSgmQXYrqdANYiY4NAPxD4Xx5jAmjvyDtPsc6GUx42hDmtTmV87bhpwff62",
  "key32": "mtwvzAG18YeuWC4xn4RGV5Tfoc8syS1cnQX3A542YoAxmHrHShRHfmEs6okEX9HRwwL3fRADq2KzDpdf3zysmxF",
  "key33": "29pizzoErXWNKJTccXQDgjDQm7fS3DgJ6yVguRnetqrY8Lm3fMWLWPtwBirpg1jqq8GHmKcT9yLU8YMBCv8PiwjM",
  "key34": "4aEdhH4tZJoqAV6aZFEvVur2ujRoLX8TQPx22g2CfhjcwoAeqvQJoviWoJjAvuZP9tJtEfwHnGnVs3kd1DW2JzzV",
  "key35": "Ez6DLd1jJSKoNHKqLMCZg12BJhopuaJfYYxHjXGDyLLh2Z7netviDvvbtBxorNVQupd3auY1BxJLGt6QVCPyqWD",
  "key36": "3fMh1T8K5qozpNFBTz2eny5NxLKirSrf121ofixcurgphxfuj3X1fPGk471CwxtZReaZtA82c4bh9HUmPemC72uB",
  "key37": "3ncfmAXS1mjhPNbQkLrx9LBgaKHdgsgYL9B2oqDLNLaxo5fWnpjNQWeFgvn42KJgKuMyLXmERAvnTJZhPgkYTB8G",
  "key38": "3mayE4ouJRb8oZTe1xTo1r4yDYLJFuWVGNP3KgiAMvYPVC1m1LDAZv4cLzUtNn2dJfzaVm96neGfYX61RToLLzt",
  "key39": "yqZY9k7aH13PxD7rMMxMxvVUngy12tCioTkYoPkuqN4FwLUMoVqYCR8xv985YTADQ5jiSgB7qGZdUPLE6MVbyEB",
  "key40": "GRNjjWze51dBVSxeFFmn1dn9vNs2kPxbASWThA8RNNqVjsCfiXY3UF5mfm6vSE2DTDoekTi6NXRWp89TWq7hHvY",
  "key41": "3MmehiRJkSYHBfYsawLMXLvFm6dc2rKKDQigaE5SQDEyPGzXYufAMEC7e2Tk4KsirxCxvLuqmRfYjGQTEVcyBQfS",
  "key42": "4yniodw882msQChgXd4a1c5oq5KS9bN8moZVPmaNN7S5wknAZR3Z2FeAqjKS2kEwsVNJQ9V5k2G3VmuHBpTWCHDR",
  "key43": "3zrg1P9b87vb5HhSLyfMynW7o7EVvxvCUMrKUK6k7XQibJqPhK5LDh12UuYAK6BdwCUm7nwd7BdHg3MECE96mjsp",
  "key44": "5a3HCDMvSiHjtBjoGhSVwEBmDmBckTPk5wqYTNdcVXMi5Jw962JAn8QuBjgfeLNemGJsDvtrmtEbZoJ6nbywjRkm",
  "key45": "48BVChU5u3iwLfn4YkorJBGzvsQT3KHnEtBVaffeEyfWQ5w2pkjmE4fpDMk9KPigYPYbBrx5oPwMkU8bP9wx4PuW",
  "key46": "URDQJ4pxAU1oFFt7wQHvtGqXbA8q8QRbkmg6X5xj6oNcbYy5wEXfkEJ3G6dUkK36UQPftX33QifhXu6Z9vU56Gm",
  "key47": "3pdH8o5cViyGMmgnmk2qPnRUavZBGvYTbzuv5jixgFTmtgJB5ZhHSdyvtrRSYkcugP7iJhxdeniVYoPotTpL3ToN"
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
