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
    "4AJ9hRHKwZEyXjgvJTSmAWDrwPAJcTkTYeSCBKwV4KeRJDhAESjdwfq9rMB7d3dPjqJzgxiwDZdRCP3rXxbgSLmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1yCAAfwzqHgvW97LCUgY3ogVjAJARQtDCpuShRbrc7GNbDFWgfSyh1sLqacdJcatyuPWw4GKvHeVoKcJcC7X2Q",
  "key1": "4xqagP41pr1yeKYCm1K1k5JRX6x6jZ5d4bVXfsCjTSFzkK4wf8cMA8j8hAeTwsQbx3EPesspigF6UJyTPDHW9oxr",
  "key2": "4wJifYbgn5DykvSgfktAb1krboH1McEvWFmKardSJ8rQZk9wciZLjckPHNew64eBjkngtiA57ApubNUPmiHo6JsR",
  "key3": "3eZkoMYzzknJER5EgaNSkNNaAmHtJijzGmMrQ1CgZSTp6CYcmmteSgg48F1BkiHUeseCbS4Fa7yhcovVe17reyZn",
  "key4": "49MuwvfLCCMWWTKPwXGNPdrJPkdHzpmtX5XmaAcipF4yNopCyo82M1y82yP9nV6tRAKFufphs17xPFn6whdkMxvC",
  "key5": "2sNJV9SPSTziBa4NxR71thHjNd547vLd31miCmfayTZMNfbUU8JAq7ToqWEsiG4Po1JTUNrHdWPrqcQ7qPMdNACU",
  "key6": "2dSozmShTDJJtHF6y1JJoVTYMCxLPgme8zpdcknbc3V72KdPmJjz7DVVnGeyWyGXY2a71XcZdJiK4zoksRbguRTk",
  "key7": "4etm2Let8SRRP8zxAM6F7d5xJUadufzRduAPkz9auU1B738UDSeH7MnpQi5xJjs3yP5ruhYQ8YQzdkVLzgxbniCy",
  "key8": "4XDz8uoUUyniyMXDoY83bgrgojr6gmLwEaXUJpZKmQgyetpxmYeegP3ytsz9GkaN8HcdHZPjhnSS6ouFNc62aQiR",
  "key9": "3k2yeYLqt5CKTcdA2UHBdhptVutvqvEZr2SAx9MzFf8t9sTtKaJYXqxZYveEsCi7nXLZ9ibLDt6rN19eXou5frXe",
  "key10": "BXS6ra3sorruEbPeby8djoRi21Z8FgcbiCxgzHkgu5BvxLSP8CUgKhm9gWfRE8rabTShop3ZsdSUg6AghemS7e4",
  "key11": "5U1T5ddmBSLbhisekJ3HPkf7vZYV8SVGG4oeS63ZYUzE5wZQGu17dJ7MGe6QiymVJn8ZjdSx8PJebN8Ux2vggf8c",
  "key12": "5Eu7QvsCJuKdP6iaD9SS3kavJJ9fAv4LYbwbrNUbcJ3TrUPGLdjeZoBTHcbTufh9JdKaT7hhxZ6TonCsKHBwWpk4",
  "key13": "P4LqaNz6h3zhJxJGHe18vQFkWRHSpEXgidaWKoPN4FdcuRm8zaHsdUKemAvcrXBh1SHFXkYs4w6BajSKAxtLW3r",
  "key14": "52Yizg7euLF4hWevsW6YxJNmTkYvZqBxy4EvtkTwJjvaoAZS5YiqGCJvHcHjCLKrXqrxnZGbs9JyLiWVcbEY3kSU",
  "key15": "qVeUFy2nUVFSuvX8CgYgwpRqtXvULNz1BDsHvrCXQfS2SxneB8KGnodKTnXZnCXs1WYVTuEVEWJatGp6iLt5ntR",
  "key16": "XxTE26uboeDxA8HqF1ARBjqvGizurHrcuXpVjM9CWJ5fpXyuy8JoaK9rvsfiJnrDmik8jmmPa5ERa9U54sfqiXB",
  "key17": "rz4PffWHVDkKiU4Pbu6jTyT63qAr4JAqDzCYLz5VkvWSnGZLhYfE4oJWExeRtmaLoTzQN6uv7MKvgmHw5EawMeX",
  "key18": "3TV3zWfUugs9bhLVBJFTrjanZudodDgJvuZcKcjxQiEmVLumU6w17QqFnUcHWpY52XbJjnxwn4jnCMW17XvUse7n",
  "key19": "4n52QvmLDf37rgaNLAEH1kZ7Txow1XsXbVEETVe6Eeh3FcinN92cGbZqjx5c9y8YyzoDzfd3Yu212oG4eZegu96",
  "key20": "5pNwjg4f9fq93xfr2Pz17BgXpvsfccpg5eUNVdApGfoHRCpcMry7PfWVF1fymBDBEKS9EiaxNxNHHqrdYwrt1moC",
  "key21": "5W4d4FwfH1bvs2CwLgGEJHfE2Twzmuok7jE5WFndHiHnfJjHuXtrP5KDVH6qXXgpRvd5imDPYJyPCQG1y9odpLdu",
  "key22": "3MAAfqkd7XcsC6UgYHYCgNwRHxLSfJDUwiP6po36KdEB3hf3C15sAztnXeThSH2vetoTEveqmSSGhVMVzCuc8GSV",
  "key23": "2gkRmopExyyQ2x8tVhbpKgrQ3BYJTUKwJuq3RQ9XeySgENCuc65zQUe6vXgadAyE1PFNgjrZex5Az7ymLtLgaAPr",
  "key24": "4MNDdS8mkfgc6CCdTGjHMVijHnzVof6gtSFcpYJbkWR1P9BBKQC8u6ds5wsYLwnb5NYQCD9RdEUGprfxBYsUaoPV"
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
