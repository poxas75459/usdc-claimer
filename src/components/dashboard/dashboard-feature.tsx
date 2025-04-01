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
    "3i5rbGSuMbwv3U4jqPRBnRUaMqi5AJ85Tec5dqWLQVq2uS1vG6EzFuoSkEBhMjQbBnKPBT63RPvejjd2DPprrLRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pb5P5bDjVsXYaygQB94dY9TdR2dXJ11G58xGt58Scy3FQdXSZwzXpmVTpKFCdFob9gzuhJXVqW3erCAHD4KsMjD",
  "key1": "1auXZAhimmqev49S58waV4zbXJRLfAf5Upv8E2jeqpbPZvfbi1CQpokyF8ULLiMtDeAvzzf6p2FWCV6DDdTaz2t",
  "key2": "5kXmwsWScF9wk1CWM6kmbqceAKYcTNzTPP939ZLYEuhwGPatmhtjtqJ3118AohjsEc3BYBwbN1JNVS89ReCWN4id",
  "key3": "4ijrsTB5mXpcB1m5c2av26jb1JWk7ova1azoHkvXy9rxtDUKcAZokJvMVpu99rAP2A5gqHGmRg3WQPeDf7WJiork",
  "key4": "4kPtLtZ5bgnktrexzMQiXPrbupjAZn5MGbdJ498jkjpa8h9QmPqzAoM2tekPVbqETw9M9PyYnoLKCMNwFndqA9RQ",
  "key5": "3oE1a7MPbaxjFEYaMWxYv7axWU5QJz5QsKUa1w2Rqq9KKXosDCyYC5t35CzaibJs9GscnzKexd5FzHgrm1DpSejt",
  "key6": "62c8dEeTLGWQG5HyAHS1snriC7kSY63f9J9BQavYyiUaw3khGBF3xNRo9QwZqNjNk8AjVBYiXdttp7g6wJyxvegT",
  "key7": "46tMWQFzen3pXdNrsoP3jkisM79UyDBJCopJjDUv63zQ6KFrQGXHe4UCUBXASBpFrfnuNkDePMWNLDuG6mdcMyCu",
  "key8": "4B5HKfwK62CaDGARVUrgQcSqJ4JZiDL5u4aCvixQvYtMseFUtTgo8p5aSWrySjJmMyMe7qfLL91fQfTxrVcrdtb1",
  "key9": "9eHTDJs2sZqmQDHtAgXXWycWP1jtGYP2eQuhMi7CpRhYw5ySyiFEwmXnCNgHTYM7chHtYzoSHcCMW55ufwR9Jr5",
  "key10": "5UVhZwNZJVmKjAySWncEok3sBD5WrPL15HEouHG8Lnc6meaPGPTi6wR3Wphj6vXaTFXqF2d1rU3tLqLcWSHRCwQi",
  "key11": "3Qe3zk9Wb878t6DAkWjf2ViUhqU7ebU28HqddAnEoX7Y6mTdFJunYgihMmKSCaQNBbYuxA9yGy1SR7gJU1QGs7Aa",
  "key12": "XCQTctV9RChZeLZWuW2gqK7wkrCgvUPJGRSLKNsgNs1ULJxf1N2RoijVeY2hzYtBBi4W7vsuaBj9PUe8sMS8Pmp",
  "key13": "5b8najrZmP7K6zAw1P3PnYuM49eDkduvSHCJSoyBJMGBNpNF97fTfhprZgc2RrJ8dYcYYgoDLoojbsSL9xN3rht4",
  "key14": "46gaQkg3Lq3dmH5sGLj5rMvAgMRisSVJeGHq1Zccc3YMM1EkLchm6joFzXm886Zjit8bG6bTUKbJr2j9HP522qcE",
  "key15": "5w4PQtDWbjTgXv9UXh2JUYRffKADLAQoFAf5ZmdhjQqZufG9ryLvwPYJ9Xd6mBWxr5qzPcHPzZyxNLy2pLUqTNmp",
  "key16": "591RgghMuXf7E2R5qUxWKKGzZs1A4tdYCgxJkMgzgpU1CYYdHnGdNQbZZFxQdjrr7YyUxk8egtRYTkd3fA4qaXTe",
  "key17": "LR1ga9mwAKxeMDkpD4WjjANEBfFjxMdTd3H2u4qPNXGTBku5AdDtDjGtgaC3q3RUzAQXSB8eQvPEMNKf9TJtbqb",
  "key18": "4KYnuofNrMhrQb4GJ5DMAoA52yEgY5dogbdjYo4gYdt1amB33vEHH173hqmBxpYWzrT5LbtnTaq8VXCtAcPv1hgT",
  "key19": "4WERonpRStgDQ6JCViVLMLFPnePP63waLduZrgiVJye6Rwykh113cEQo7Ykttz1twrmvrTHEm9YG45ipYcWrr3ru",
  "key20": "3aWERWYCeTYmm3rZ5vryERQFKw9GtBy1VfVcHeYRAnTJtqiz1TgF5zyX8G2S4bjW17t7jZ832AkRT986ycAUusp9",
  "key21": "4Eapwh9ADLTDk9Qx29c2tcd89cK94nExdTJjS5UYtQbdYKg9WrnVKPQ4JQQi3FnyUSgPyW24KPsYPGAQW6EVqak3",
  "key22": "29CchUV7eTWV7qniGU83puVH4fP83axoqseQTKPKSBZbuKPzjNV5ynXUxJ1MUsamCr87BbkH128H7Fcn1358WgMw",
  "key23": "4VFkD7aJFsSytaruF7hMN81vys4ownUn67TdXurnautpj1bytbznHgNuCWvP8pxnRpAVNVY51z5DfgiGFFwjF6Jt",
  "key24": "5WLtaqK2TEDhfsUEGbKzyfr9ptopZx8cCLhhHmMJDuj2Meh1NUrNAj7FZJKQ7YQGvUMTDTZsKTosurARDsF8WLvS",
  "key25": "5JUaoZpNzqeCSvCjyAS79NtddDggbTnUNPrTb5U4ezN2dvGWcLzAXNQ5EGhEdTkgHeoSwCm6nrh6ge4cjEZNeYFS",
  "key26": "3Q8RTLWjMs7Reob9QwexzzaQtNzURVV9jydesSqbCgeLNyye5ekbstMuF49NzoJjgbqt3i7vPUz5uNFPh1m9wjCD",
  "key27": "3qpvmNoLuJtaUFhaS5Mtx81TQE9sTvUEjx3mrNfxJG7GC3A4H1zReKBkSeeFE2VVjh1zHcEQfdepqnwNK2YWqwm9",
  "key28": "3QctUujjXVb9oRmtEviJC34uZHxnCYbonNqMQmdHtpNz2fKLv3GLGbAsX3aWCKv74n99GpKDSTV2L9jghQVzyErq",
  "key29": "4dhpkgGEsWkZ2UJnNWDgCrGWeaLsMxV4TTytKpuvjspg9jK3ywxrasLDSqoUzishb1AVH6qaY66gWGUaGVy7QSuQ",
  "key30": "55EED28VZ5KbbsJA8xK2jLHdaGQ6XqEnU2jXAcTjBZitvBQiEAzY1MuZeiN7XC8VsCCRaLZpU2riqCNkpWga6AxD",
  "key31": "5ssy4CxN1GDsx8QYfu9LqfkfpmurbV8K2fYneLssuMJjigmyaKdMcaSE5mXCcALXPQ5tHqJam7UEYN821c2CBp24",
  "key32": "EAkk9xi7HX43d4vuXudpQzcQ4yDyNiZQrqLRLPgomnB7hFZdJAqc2vmNanjer9fJN57v1eQd32gApLoKZtiet2E",
  "key33": "2MEhLQRYkbM15mPGKZMjBn8grEL1LZPh3oNSSQkUqLm3z49dAWbq9fNNKAPWey8v6bEYZ5ib8ZGsweuLZAfGoM8V",
  "key34": "2DGqEomuv29WXuLLy3FkRpuwrc9MsXKQsgCLPaVaJ32yfhaSGhC3E3j8Mw18AeFRU79wM8F6MWWDdGy84kYUjPXV"
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
