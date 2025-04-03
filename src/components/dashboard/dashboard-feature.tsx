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
    "2MKuiK9YAAiBeiUL5a9U8VUoJ4x977zqUoc4keFFwn5qN8bsptAtXpeCEYHEdTx1W9cYtLtWXxaWpPvr8djf5sRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NyikXXUtVJb7CKyNFSR5x7geTALPRXEZfV2DmSfhoX3XdnSjtjFnxLhkmoAU65BUgfDqagua7W9MjVpCsTe5Jqf",
  "key1": "4QaZBEpDu9tDN5f2WsGNGggdEKoMjdDi4Jm931Zoiw2s8jS9prhVvZByyPQtF3kE618Amv8Am6XUb52gvSA6NiF2",
  "key2": "D6ekTVwpkwyVjic9XwPBEgcMQ3PLDPM3SFqhbi2nfPbXZHhWa6q5yWe1BmQ2CWYBwDvpa678sMdtNkob9MpNesF",
  "key3": "39LN8Hq6Sff3E3R8cbLoM6acwhGXZZriBd38yZWdcKr44GNGRB7j4XkKyhU4BwSmVHSLEB2EAhkJJ3NYRosSMNPW",
  "key4": "ct3w4Bnr2KaWYnQM8iLEuv4KFrdFXqntrjd7bFPc2gSRqU2Lqr5rRuza1QijZ4Aos9EW8haGQzLGYcErwdD1DTD",
  "key5": "5JnUpBh5p91XAveE6vqWhUVJEHv4pqUqYs6xbkuVhhuh53gPuUqfmxv9ykA2bFeDVW461qQhn8FN35ry9pyyyi1T",
  "key6": "3yZZnHXiQPVfuj6p7aZSgN5Ms3WDwzpnMLoTCrcwCG2coVRG3nbbKTJufuDL6KM1vJB83U3AgwUfiNi8oAkCXz5Y",
  "key7": "32CbfU1VTXzJAKHvpMEN9PYdA3JK7YHQ7vbAhqkno82SEeQ4vowd87wp5nQdmK3x1FS8TLtxyUEsENxYff129jjp",
  "key8": "R8hPYXkkUsSG63ZuU73JiiJagWbfTXCiCp5Q9h5VdwCao6z4evBBzhgBQAFTrE4x7S7d6qaaa917WACC3GrtNwY",
  "key9": "3NceVHqwyqspMuELmachGWkDEBtYBcW83k4hVZHGiPPiK8RYbQRA3RqctaZ7LowF2BzhDVnZfgAJdcj4n4pfVY8Z",
  "key10": "3HX68TZchtogCViAqZwoNS56kDsk2Viix2KYTeHdWGXPpXq3yVk1WaBF25ByxQFwJbFoB4maNcX3E93krys6652g",
  "key11": "3xxxycm1kxZeWby3rYELYQS6uLir42LpTbUkW4e23FMJcgFt3T3v8Ygbuj8JRXvm11Hyb494SbxoAs6YYRUAUSwM",
  "key12": "4SfUoQ1GJq65zGcJ15xnaS9iHvQnB8a6njNGH4j7RYwbRoq196gbfBYaUohT6q9W8kymUrb3iR5BZHakAG9G2tGH",
  "key13": "5jNijbrStxJGJ8g16FGeisSCKKMdJVhd8BCUone6VUnNuco1PeU95iVvKRTQhtcroBuN37o5jr1opxJy74vPYXst",
  "key14": "5SboHCtL3b8uHvtksfN5itqiChknggz4ReXd7RuXn7G7RQYzwfN8JNZsaV9MJkNsuh9g98UoYqF5B3DYwAf1Qkvg",
  "key15": "47Rz5RjwKqHZ3dpuiz3uP1okNhA6YD6geG13k2gLW8c1Vp8Jp1aXXusucenkeCDSb1Q7nkchFxn7HVBN1GemYB4T",
  "key16": "mVR7qoDEmF6R9KW5BhuXEhz9BdfUWh2oSTkNThyZ72j5cMXfNcUkkogswGVvfMGKZsNxUFUnSsNhZgE5yGP3SBA",
  "key17": "5pAT6NdA982E5sqz4u41y8zayf4HsbcQGXKUoeD4QXucf8MfGRgV7GRUjRwwNV9r11iYagiY7PXxAg67HnF3PgMz",
  "key18": "ycH6Ly1D4wmjdQ3bMToQaP1btx3uVHkjdudzUMbwb4Hj83fK6TrrnomwmWy8Thtpzc6ZEGvoQrerNufbPxrmXva",
  "key19": "3ZRwiua1nbxrxVbZ4nJ4SLBUjo67CigUCkMmdHw3sLGZ1Z6NUjLh1H3dJAgLCQuiRCB2h9jwoPexSmJkzm9vbKpP",
  "key20": "kYG2UrdxdzQpePsKUdwVqpWGoC8SNRz3cpY47jY7MkufVhyp6HzjctYeqiHzxNgMUSfEtek9gMGN3ikd9ksxZwZ",
  "key21": "3z34fZxBXDS1JXSv3DAoKkp6xXQugyUe4cVLyFqTqLgWc7jMYu8PmuSFoQEZWXLp36j4eJiFVwk5859JnicnrSNB",
  "key22": "2iN8QqzcDfSjAVoXeEC7uCQZGDM5aPTh9zaVG9pv7Ad5QN3ExvbRCGGaCNFrGg3yjcwfhBcQ9BMAZrke3pNe6xMV",
  "key23": "5PDqgGBz3u6TctfFkVUYkFtjGFM3gJv6sXM5Z5aau4Vw4vwqJRixVQ47Ha8JUGxoTVn95VrAL9YD3zn7iHQBRCTQ",
  "key24": "qebNHaAdjEGqDfPV1HzFpE1dY4QywwPQM5tUBSaw1tHmd8qPvY3dwCxseywLdWoCmvLXEpbwEjbGEnnr64fjNE9",
  "key25": "6Uu5AF1ZBff4iYhigBoVBtdEUXi7xdsF2MhjC8saqXEwAc5DkqX4cF9cCRyMoF6yBRtn9kZ9E4vFm6U1qvyzAAs",
  "key26": "4x6ty7zXcatwKrWqbwMUX2wXebBdTZr9dhkXqgvcj8U4pLhBK3GTUTpZ4ccXzf8v7TroyoY2ZnytChYXXxVz7zRa",
  "key27": "2Swugpk7JM6QemAgCb7TLXHRtaN4uPHfVARtL9PQEhKSkB2CmqbLtWdfct6NBfzAyP3uhLmjjBek5Jodb78X5rMF"
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
