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
    "2TbTnMXjmg1GbY3yxcugFyoZGVR1wSTbtDt33inusqY2bZUmtY4c51RgkjbM55yDLHJdsAMhf9zGQExG3onKgdux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBpT6yvm6JD5wBFpbQF4vCtzzxeM39Nf9vw1CQeQUcsvpyjKk6adPJasqBXCGPNLQ9opHyamQs1cpECAAGcTzGp",
  "key1": "5kEGWFiieZytjBtQgERXihoQq9cRLdAqcFQfkZSfo2wvKzh6QbXL7ZEbKV3mhEn8PdpjurnPQsCDFS5EP7QrhGYe",
  "key2": "3bo84zuriGTKvHNynx4QiBfxvMfWV8439SAU1mi4WWjwDZiXPc8KEkSJCBzmdt8eHGJfKDwuzuKTY4pHc4QQUDUP",
  "key3": "2542Wy6JtShygU59RHUiip7jhjViA2qk2yz4gqka4NA13fLvMuyETzjrtpoPJvqDs1BUKHKHpNjcB2Ap9Vt8bDmM",
  "key4": "EzJBU44kZYWFwzH5Q1HoQDBWuxbK9s4KaPiKookZdX6LAgr4ErH3dXyJJfnGbg9wgfwDQSKFBNPewjYBdVrV268",
  "key5": "2o5qJJcgyzQbnwfYvqDaECvjVNXMjds19APtDPg1i3yKR4bC92XQSCDfETohK14keXUNTHxMWEFJHgwV1gu7XXMg",
  "key6": "5D4PLJ8mY935y7Ro5bxtWBbLiD2oMueUsyrefJ5nNPQtDw55P1Cc2hTLdgvAwMM1kJcBcXvDK3Pqpm57ghRwwjAh",
  "key7": "FB57hJvRDAZGTDV2hScagktmrorVFk9qRaKisaCev2bReab7XN1bKKQMwKtbhGruFR2DRegJ52wVA3fCwsSLXcj",
  "key8": "1Pr22HdXCY9yGkXMaxN6K2uKx8TXdAkLqmgX7VvAmEqzgBYX5eWjJaTLcutgLPNoeVQoPQ8MVYs9XPDdCXyergM",
  "key9": "3TpQnUVSWfp4YcYws5JBKcNxm5BGUKdYP5dLwVYKKzYxd3DS1hz9gZPzPeA2F3A6MWXF74DhbvuEDKToE9LXdYd6",
  "key10": "HcwZwuseBtfWYoA9fFQvqK4ryezD5Q3u5dkC4ySssP1gJVZVZrCSpRtCx23TPCdPGu8Rp2qNe9w8wQ3MxGJcUTp",
  "key11": "4YpwnVytWJXQQdfy5EJm7xeuTSryX9hWHfNBDSCFwGnb7gQfNHEZVb3SWKsqkJb58t9v8KqCgoH2RjV6naxpXd16",
  "key12": "2bXGDJiuBNHw6ehc5ENoiLTccVYRpCzrmWeLWSrnkDUjKRjBVujbPE9zok8aTeH4Xgbo5h6jC9bDoqGJVY8A1Wu9",
  "key13": "4cQvb74awoB8H4d7EC8E361h2nrbueVFzrRJUPymoGHtzKXZYjLG39UVGHvFgTN33xtTkWYJJqF1FG9f2f7BWXf7",
  "key14": "61r7gCUUhvMkRa3QGSLTCFFVpcaPZaPPLyUgiYAY8rjXm4VkbmjykRoMWcaqtfquG1troo1HuST6J31PkknC5hoL",
  "key15": "2tpyaSkW281nHFgfAheowe3r5soUkUkDvbdgbXettb3hxW2vUgNy8h1MNBVCMaqcLUd3dCMLLWSmT3MBgn2K9nAB",
  "key16": "4yZNb3eM9s2X612a19tJrf4h2ma5K5nJ2LZhVaaTeWmHdWXqQ8H8pGfvt3aD2ZyD5gDaKuWDLHzrWh4eT8WfDSFK",
  "key17": "3UVJ8Nd1cfAyyHkvdbjPTMb9cBmoXAAr5qPKuJ4qUfYDzFV5WdrYHCbpv4gCUNbsDvNiiVNcYQ8iMbchqUobZN5N",
  "key18": "3YPx1K9wgxeMpE9hWueBEsssnTXq8NAsFGNiEMmGxc4KqrmKuRwCT4W2mxKooV928368x5FTTuUArEt6h39eRUQM",
  "key19": "2yTX4BKLFQm1msi8zi9XWTpenoAqTJpaWgW4i8S7adbtpG8FtNbkSj6MddEba2BVB55J6Kn6uQce2URr3BYn6NPz",
  "key20": "4CYkadEZDjiRYX6A95pLfDgKEwJkgoUZPs5pq35hV5xj2PMe9u4y7foAKSAhVWA33XLJAzDeicLRXUipEEsp6tzH",
  "key21": "5HULDA2MXv9qz1Cp5tHrc29SK8Ev1VqE2PedWqZ3kiGeB4uHRVypZo7uYBrAq1qKYe6fJwFfTxzKCctrVNPUzGr7",
  "key22": "5PRENS9gRuXzRdwCheEaFfehicNXmDnMyKbNdRXhUceiHVgq5UJnJFXnBDxvTkA6FWFeG8ibhEVVt7em2BQeBryk",
  "key23": "4ZKWrbDY7D3d1tjmsJQxb415yd4gt6xqcpvoEHCDDccJ195zabhuG3c3ytzjDi53jCSuNshSjyc1xtVmh5AUqarD",
  "key24": "2afKyKJxPUK9AvrcBWBMy5fYW2XWiggg5vy2sCmacWuqmdEWdc88DDrQEoRJTETGGYz61PcHqWekBHnipr75yiDL",
  "key25": "32FrWfiVA6TW1QvpXrcxTftDWQUZUEmJWNjE2K87tJgDS9B1FbgQojbXB7webLkFdAmTixF2U6nWYZX9zE3hXoeU",
  "key26": "kC6StixqegjYam3FM1AQJyffVzSXdeEUWRpWt1pUw2zwpvMHwEP9bM4E6dbWnMMsUbu4A3na7ZfNGWCG39iKdFm",
  "key27": "5rnxasqf8bJYUKXG8R2YCtji6JS7ofT1JFJasSs5A72qor6GH9gvdbAERQGJbpsUp162gdiHG2qH3nZHxAPSjrEJ"
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
