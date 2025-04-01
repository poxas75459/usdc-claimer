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
    "5JaWsNwRuh2bY3R5VPW53cazDgRLoxoXiWSk5u9yC375zkcGx7FJaYo2kBF6GToF9uGTpaMSnkZ4BUJKb3cd95Qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkJEJqJxByELaa7T9BXeMDmxpSNAPB6ZM6cbGNh6qtw4gfqR8dsunjbbwAtpJhSv5REhKa9cN6T2sDWshYs4CtQ",
  "key1": "32evgdHgTaTAN11MhfmmzMBU88zjH4nhgBrgdArGhUe22EH7QAAyS4i7EZCfpessFzNLc8B9hjSsPovEuwNiGZ4x",
  "key2": "xzwFrMz6CHy4Ykk3Ust88yffZ22jXGFrMrLjmdHfzAAHKvAWjgSPyRjAHopWVE3pQPWExtYHbgh6DLr5E1W2Q1d",
  "key3": "xhaBqD8sTQZiYeXv1inydrgt61b46f3eVh1vfE8WBiR1AnGh8TfDTU3QB4bpcqqRhbM4718z2coMVizsBiwt4hn",
  "key4": "3zmMjUJJzMmhvm4Lxkdtzfqq2CP1d3RMJtrTjNKMx2iogkEfJomm7yC7G6sEJLngkGMsjMvVfN8HUNdFf3njQDxP",
  "key5": "4k9MBNHqzWfHoQas3Umr5CDR8v4B3FPr8i2VwfNEwZtAbfgL6Cmp2mNjhXZ59xAf1pbRUhdfu2qe98DGNNSdCQMC",
  "key6": "SsNGnz5dHZEmQFvDrkTXZEHmtM1jk3ZrTpqMhWGZ3H1HHVoGbsJBXsuG2GDuxJz1Fx7zByoyoX1ympHFHXKE2fW",
  "key7": "4EaEygc2foTaokyd1Q4r1nP7Z1PgSKPgnoeK8CnnMZzmaErLyqZPpwdkhNmcY8Utx5jkrtVy7hDurcr7BJc4y1xd",
  "key8": "22XregfxAgtGvnC1x36HP1GkBt44Jqv9uCPY4d5GMcPjWv2veovvwVmqVd4NBVwiuGkn5fYu3UDnt1439XYMPoKE",
  "key9": "5jqxhrq51DVcp2JxDJKCP6nQwhLHeyAn4Rr7xpdKCvn6LUFQzGf1jPnvZfFjCLfvFgRQSFr97uof9WKrhDbA2KmP",
  "key10": "55wFLJg8ZwKr1g9cWD1cAhjiWXyBFi8gv32QwyAaXSqvYvcZT42EcgtVQGhawizeyUy84Ke4efweaPZzpAm6BLTJ",
  "key11": "2XYSyiC21p8rbBkpq8oLvkwHL1o7YoBTPwh3sB7iNdZ6xgJgw6R2V4nBSafArJbz5p2FXQNjTGUGsKEzWJZgUVUc",
  "key12": "4C3QQzbkQGomgHev3xSwHu3dRx9yPeGJrvBRnfs3ekaZ3URb5EPiG7ybgWubh4pNp1G9J17AujURamirniE49NP6",
  "key13": "5jeB8mXFi8r629T3HDgFe5N6Puy7FEUz2kJPJuphMwTwxkZJ97aDjTnViE3YMLkaj1DyuFuhxKDkiAZWhkQ7CxM",
  "key14": "gD5mYwJ61n1kvq5qXzVUQBvX6pWTd5ipPjwEhxZZedMwyNxgAsj48EzfvzupGzk2KXWdx7uGcuQ8ynAtkjevSSW",
  "key15": "2vjwdUZQ5c9M6pypAw8UdpNDCSnNcC2H3DScFZ9TNbR8SdNeudYAGRmPe91HCQmuyTZbMS1Y9HqifJzvnS7Tb4SE",
  "key16": "8sBkxT6FbS3onTCwZsMTCjmnTFqqwdUvD1jtFJSU1WH3Ftu9zkCVe7kEcGdhggJQwMx9836MuC7k9HLbUz4aWMc",
  "key17": "wJHA3Hmidp7RJjJCbWiGWECGG3eR9bfLM6H2fQrLm3Q1CN52xLYs6djJVHT9EzjLiFX1TW6aWNdMwsAz2i4cZXt",
  "key18": "2K71Wo8xC4cQms9xb8WsUvgsm4jjnC69jJkhFSG83NvqtCWtUUCAwo7fhxFizPRYUdiybMHtGCZoKsCB5cDNysTk",
  "key19": "637ewuimBz1eJ295h4CgDFGhLTnVmEWDYfDqxo2Mmuahxf914Emiz6N543HLY3phY1CdQSh9YJmrsfC3fPgKAw9v",
  "key20": "3AvojCv1GzHQ4gtf3BQxVU8udDRGQFXoGrsvPLBzzJZMzqJue4BqZjEWBcVxUgWju9Xr5LCRPZMXPUMoh9FF7Gx",
  "key21": "4GQXXhjo3YCPF5uycTBdDWoGoQsthCXcFFxMSc1xZzUtifZPwpBW5fcoMfYZYvmy87sFgn8p85dcofXGJnoagZFX",
  "key22": "62nsysRGviELPEmNkXw2EDgDBn6Yu5YMQJgmnUw7s6WdoBbKkP6E7L3WR8wsikH7QQLzFYivr6gZb4URK46Ppk6j",
  "key23": "3QWiBgT9aUZ6FLW16xHi59T1F693B415tE9VCZWwh6FYxYKdCx2VC8A2wAGtjb1rZ6bxhxMM4rwf7uX5WfQyZM25",
  "key24": "3NXn7AVRV53R8Cpi7JVx5j7dsJ7m5KY95q9xd8BaAnQ31VoYYRVsTKHNh5CyAZigZfmc8wMic4hmrHPYwii1rraq",
  "key25": "4HQyhJecCa6LzqSLEprpkZmBEAkFrY21ZraxkoWjQiNUCHJb8HqYB4TCEVTfBnLN5brwNXivvyy1DnWgEe7ujqCc",
  "key26": "2kAMyTgeeaWnQ66Brg3c8oyF86HA5Dxg8BeBUBvtYb4DXu9SM87YjLHzH2H4xNrf41fX6YB6VN2ekVfZHswdBUPH"
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
