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
    "3BgukgwVnxqDTSrbSWw7uzWNeeLsBbWypnEoHKNM62wk23LJt2GPgtAUAWriMhfsuSGmB8M3kdKZeCG7HuAxpwEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tM13E425iPeovNT2SPzZo1w1bXfs5PyFNzBKucSrD7EryrkehD2YAFyQWQEsjg89HZpYtxSbowapX9kM2sh6U9P",
  "key1": "2pT3sGh2ijG2acFgEzsHAUt6L2EDvwyQLUBRB3gZ8bYaf9xmVzWo6arHGvQ85RQwisEB4MGk2HaoeeD3NS9xAHkC",
  "key2": "5oJWcRpMVw5cjaa59EeFeTcE3yKuPuxkXhUrxLqhwB5jBBa3AX44NVbn2FK7UMJqZMXyUFWuLYLS9msZQh3J624K",
  "key3": "3iTbwU8i7pLfG31E4ZvPkPCVMyxyLYaB2NpQP73ihnCmqg1R2qagLd2oNg7Gmzk2skBbpA2wDz9i94yUSRKiCaiW",
  "key4": "5KAAG9R8H9wDpxfyW2DWvozqF2ceJsXa2BS3bY8CzXVDhB2DFRUnkSCp6Z3HWZapiTgbhjCCtJCtWgTPvAZvQiHd",
  "key5": "qkyV7K6TdJyNF2BKtWaWYTGyj8Gvr6VRd5QLfRRvwj6nfSLtSATVv6p6s58E9JjUJD7aexZZY5LdTgN6kbJfFUN",
  "key6": "5zpDSzyy4LRkMT8rRsyV4DUhbgf52aqWkaCyXtmSZ6ePmXSkhwLKfeGF9nvQEoG7Xx5guabszx4p7zvvTgfMU84G",
  "key7": "36rW1aFEVQvaCTry51DYRCtKzeSW2at42GQ6JJEuN33KC3x92biL5HDJKxT14U1YVkufdqzH8T8YWqT7SjfEZyZp",
  "key8": "2Np9GDsfUEyx67dsDrXJU3U4wmUXMhQdvs1YC7jqxh4YXQ2Hshka3aqFtCrjNqrjrC2K1ZsoqtQVJV5KpfFhm7CX",
  "key9": "uAtpoez3a1UX3x3ebKy8M81aDcBoDB5hM6emo2LwtxtfCns9av1e4PNRycwyGuWgdUcisgLFdQh2gd9po6mdXZx",
  "key10": "63vnEJKsPvaa1Xo83s87YYnh7nkg2k2ZJmC4NviMbRvtLndDBCtgm9XeQzAtre8AdhShP2VmrvMxk7jYLiDQ55Fa",
  "key11": "2yPPnz6STjdeZw5kTHWNJwmU8LvG89MeFLYVqQwovggwpSPnRgSGRPXmtJQhPP7BBm1gscawBKjgT6ggGApCk8aG",
  "key12": "56ce55qxozdewMjAKZgoiChnE7QSs4y4GnT6gnsv5w4nWA3enpktkFvp8cD9dR35WLh8sy9mRH73nkRRZoQ38Mj3",
  "key13": "4vEKpfqcSZwRaagAe7qgG2Nk9eBx7Dm7fL7MRiejpXsSggeCujFaVaLAkFTZPPfrLcQG6Uwj3FFTkTFVh5pqt3GS",
  "key14": "yAZr5xpyKwAbsp1MDXbtYVv1wwX6jeMHw6Wd6QYUzeCaRs4RXSKykENF6TWBJCpDHTdt6M3uQ3jzgfdap2ZLiYU",
  "key15": "5DaZxpTSXzVcaAw2JdAQ9ioHKpp6ZxQ2JpjFRLrPSEFWhT53fLf4guQe7re5JUVgHgK1vSMFh9sQyu66QWnVAiB",
  "key16": "3ifcj7f3esoSQVYCL55jDBepkWQTXxgaZcfWB8w4TDfRyZMfqG352U1nGUTiPdcri9AKwrvGF9dsUuQ8LbiosvxH",
  "key17": "2beyNbRZSj17bYU1e71ypeqfLLMhhDXjHp9MTYPHjLMfUUKjiPPUeUArBHDNcPQonhVTBCmLas8C3dZt5PHgUDSS",
  "key18": "4Q3wBQpuGDRfJ38Qft5LuSkx6A5MHBV429yyu3B1GhSKmETVgtEJoHSbCk8b2rkAvFeoZQnk1M8DLs4wxBgDWCms",
  "key19": "4CUoyUhboMkbboaGaZfpFdyCrzAHG82hhMiQZwgqbckYtTpKxes5Fa2HzhCJR5nWfHpWfQvyEWrS8G6rgjoX4DAm",
  "key20": "3sPdWcMjcyUX6LbDFXSZBRvycetKmECftBJxrs2iqPiYhHQv4ycyhMJKS8ieovbFduZpqLiuhJmCUGWoD59eJCRy",
  "key21": "2gwsmXNsNsuRbbZNLQoKtMYezZnf88qRbpnNxmzdutnWWYjG3rH8pMBXKPnnXs7uB5yCzJkeCPWj7bFGr1G9YCZj",
  "key22": "3kCKj7LLj2TnpBiDDMqZmknW7QdGwZxTQy4KjAj9D5zxh2ZhAWhfqoodihpC6eVQpvLxFM4proAB5Dk82a7rzsvt",
  "key23": "5M9MJdnkaz3Hv55URquM9gBHvdbq8UNktgRjVBFyUjrVZkUMtXQX3va948LaKFA6WZwD2i1f3U4CNKnstkwanftH",
  "key24": "5ReBoQxfNjMbpTTpGzy9Aqqn6tEjnu8A3jbCNnvoWxKe79pDgidTaLGNPZAkVdFKgCZZQF49vL9LfGBemEgJbKVp",
  "key25": "36tBbS5frgH1EDu9VZo7fgLvsvCEP5u7H4JeRf2Tr6GVtdq8ugvaHS2xpypN3m9r9epY3RYG1po5YnkmLjjkmQLc",
  "key26": "39eRzXaSsB7fY21xHhfeLm2YaZHoTajdHPhVxwr5NMTonv1hxbRLiVNZR1dhHQNoDWdL8wCEGnYAMjj4JCeFU5Tk",
  "key27": "67SnbW8jRkj14SkURXJVbSiV6uFqG4wZCgt3PfdH4WKwMoG8ck6CrzTXi7ckCKp1kHcLExJNhPmWVyaUo5jtYP1N",
  "key28": "59VVg8JtSJidgzNBE89i19uuL4bFwNhk9P8X6Zt8siTL9WPKboMao2CLUwJ4VJh5Ah8E6BraajoeWAeA8GbK2ynd",
  "key29": "3FoGHXz9KvrwXdDjxmaDqC1Yh9xhZaB4cBh5jKz5eSmqG3xjehsD5k29pbuUQWvUhzFWzfd5NMpkWuaZn1BRFuGY",
  "key30": "24oVFGStv16bHBH25DR32icbucUVAz8WY8EX2Jevr6iaFuD1FtCC98eHPifLcb3MBYuEFkkt8WUoRcukgNtwaVap",
  "key31": "34hYqYrB3t7GtFwHELbQLaP5auhi2wASkDDH5KzDL3Fg2WFterzzbUZRXi631JC9ZUEbP1zrJCVKUHJnnBNgfMhh",
  "key32": "nyW1pCpStvMsTsZijdPdktSqMqFxqSvyqNpDnLP4mRS686WnHMkdjYpdwbJUXbbMdbkK7QbGAgmDtBqs7yBJc6a",
  "key33": "5EetXCbAfbiG8jAWtGTH2MUGENPierC2DGXK6dE9H71j7QdQRDer69bSNdK2f834ZWoDckQuU6F1xEDs3kLqyiLB",
  "key34": "2WkeEC3SwBCSDiE5SAjbrjjyK5pCfGFEBZdmH8ZLNu4kJhGxidkhfyEnxXVZZ85nZHbVbQ7gWit62zNtvEpqa27d",
  "key35": "397ncR5aUuBAuqNmcC2nqz5q1atj3fqTRrHoJyZRjVs2wfXiDD8o4XhhfJLMiESTyk3HtfoKVzq6mVK4R7nKfXgZ",
  "key36": "2AWhXzW2ZBZSEroYghFwVGNKL6RUVzZodaR2z279j2rseWGzbDYeu7eA4SvuU6xxb89ZjKdCD6JwSRTzd8MiFcwA",
  "key37": "5xvHJ5NJd552pXMxxKhLtA3GNQCQEu1PUYz7KjqnAkL43Th6RNJccA7toxkDWPz4iaZFWh8GH9kJg8VRK8wx6QaR",
  "key38": "2rTzSkESJ7ViFfvXVz5WqZdbxUb4SXY9Ev85cEFpqi6mAvLTzmHLeEqYTwjkECFF2TeJSW8V9ih7ETssi3FEca6N",
  "key39": "28siuCFr3vsc7UcNosBFyCMGLc7JXM7fob8uZmWxNNKZoYCwYjTU2dP3Hi5MoGP34Ejzja4yc5VVo8C2TVenvXaA",
  "key40": "4Vwph5FnAkqmnkUk5eJQ5ZXwNN7QeRbtB9BJpuvNGfAxXwHFVEU4iEbGuUZ3D8aHbs5n7cqsQyhs98gmc8cCMcv2",
  "key41": "49n7NpZ4hjKiPX6VhaBfsLjJGruFfKDbL1Puq5A84mWSsAAW1MbBSigzBcKYSLcfFmMYoa2LnDYVi5cvx2KikKNw"
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
