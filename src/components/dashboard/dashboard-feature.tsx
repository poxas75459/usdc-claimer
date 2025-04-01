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
    "4hY2UpTXFxMpwtefhx8Tp4JR9MPKi5btQdKN7cRpSaynDGx8HfzCaxxcME61UR9ZvxnXy1esUdMEqoCSj8cn6Y6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k5Khciz3J1EBfygJT1WeR9HScgLqMUAb77kyWhqt5fAyRnpn7YMoSD16ooW2fqurkn8Fz3xngSfphWP8iEH5bQE",
  "key1": "2YfaNhBtkAXw6PusiH483yCUH6To8HszNTMj67yXLZBMsVKG9bqyqM5Cg5c1cqDbUWW8BKUmr3EtdUi6i89ZZYEt",
  "key2": "Ni3D2HT9eKScXEQkU4dNEXuxSCr9fDPuR7iq5uUfqVB951YjGsAYchPSguDzf7d883YNA28tHy7Mv6HbmMnns1B",
  "key3": "5nHiBC1T6RvhEAYfew5Nd22GPif1UyemB6DpSSDb2tmVGhzqj984sxobNmo4BwLqrSSV7EEkdyTeRdkSnz2WWnj7",
  "key4": "5aSAaRstdPB8hMtGLqNwV7GNbxKg5kjnsQwgi8TYvBna6aN6BZDD7EErZfdn8yzucRJAW87VE7eTQvY4q14cdSWe",
  "key5": "2idQ8A2KFXfVw4iVgmZy8QW4AgUdxWLuPypMGmJwXV2dM7gQnnGMJyGZvp8mEkLev8yteJMH8jSaYbyPJ8ZzBHJk",
  "key6": "5n5X7vsG6uza7gPuqCHRecAxkFLmUDMLu1hWYFA6LF8NAwHnt6T5DCXAjHj2Mo6t3bob9fFZwrR8CPtZ99P1NKJ",
  "key7": "qtPKnh3DZD35NmBULB39883GGncSutATRLpkgyj53TFW2ToupvjXmdwVktt5bgGaBjkvmqAL9v6pvFSomfHC9TR",
  "key8": "5miuaYboxk5GvEeJMBuy85FN29eCizFCdrJ9NUm9M6HLXh57KC5je99r9yNFmtz63JVBLwdneaZc8HPLBow4Uof5",
  "key9": "2g5tmkj7XHLZnq96FZBUTq74BwxY2R8iNoEWK2kWqMuguff3B6SMxQjAbEMxwF3oJ7XTGCyxyBrUgutn2dG6wadi",
  "key10": "43gDov9XETGj1DWRxre2GbepKewAVFQTdWSkq8UhCVsrhty5PXysYiWpjHUxVe1fBG89jqGsuseXUcerWUd521b5",
  "key11": "52MAsn4FkMJw1YCyQbFEoaqNK6NawBHAhRUKxv1hADZRryMACgRt8fuH32nuMBTzWBHnXrLQ21jJ49rvAiDAW8iv",
  "key12": "3piMUDsTJq2QuGXRqTQB9MBxq3RccDpiPMvyj69aZWPLQCH55ueqBGwE5f4iHMXUNUQaYL4vwoDQPw3JUVYTTvyc",
  "key13": "TpZCQnPTCim9gdKsFx67ZVBKwWkVKZCFG3rd8xDrmQ52daVXNknV84tAgfsEMPHmNQYdZtK7RM31YAa2k9q4gLz",
  "key14": "5F4o9oi9cxYE5fdAxJKJBDDiBUKjoK7GS54GPVtLAjRNEWhAPZ1irsKdA1QSWmgw6fgN2QM92SpP8Vd3MocVfyiK",
  "key15": "5tEnawScELgB9BZhENd6Pkzt3nPBxfYMGKQLTxpWHqaLanmbpeNPqVXvifVvSX8ejyaDe3U1yQg1wh6bw7qqu1Zm",
  "key16": "3WcUoEDNgHqAsnoF7ApH5DupxKxDSwJfziNYsy8SnVRNWg45C4413wmQ73ZtUpaNhcRk6kgATFQZHX7GWdis16QM",
  "key17": "6qHfnAKjy6T9oD8P8RdMLj8XDPbmPj78RHWt5ybdk3UY4B4btCtzu2NF7z5cqWiYwJ8CUuHnbi2tRPgLJwR5PRy",
  "key18": "2G3fe5JNGUApXycj93p7HQxaLLeAfdxERcMHBZD58uc8oo77tT4fBW1cgDmUWiUvTEFv12jqGkr5fxwTTh32HTYY",
  "key19": "28nnyxcdbKBWzkq2qy2yZKPDJBomZxSbgE6QUvb8brUahtU3QuCFkWwKQBDWei2KMrsjhJrkkKosrQgYEzHVcwLE",
  "key20": "4ubipDq6pG1jdLPJ2j5cj85zrWPK1FrR4FQMLVuxnqcd8iL4Jb8AH7S5MDPrpvKRNtn3WGziSUyo9cP1qkR4vVFn",
  "key21": "3AgNJBoyNgH5wEYjvN6zBPgsrU9gGQCLCLyZhFVHnyu3sZ1NpqsthDKJAHEGWTie5xzNTacgohzvjUx4v3Dc82eQ",
  "key22": "4udkkmKss9VEbdHhGU4cm133ZKzmjJuxgk7sPu89d48yhpHJYpLkT5DJyRCNbpkyeb59qVjaH4F4dqTUYbiRXxqB",
  "key23": "5MbTHZ38xqML3kqFumvJdYSSfeUgGkeaXLu8YB8pT9feyK5LM8N1ewGGm2FAds8ZaLAeSrPMNNVSNSXve1fbz21w",
  "key24": "WrfFWEmP2hfXQagDfCugFHSu3uPy3ZKcB9TFKsBvVmbo2oqHroNKvrFZv32ayNtwysn85wyk66PZnxWeyymXxJt",
  "key25": "5d4kKyZGMZEJc5tn6UcCjopAebFcRjkcwfYFgk7QbAxPvYyFsHuprhhq4ASGVKmG4XYTFHDcvDrRmJUVXqSekCsv",
  "key26": "4BZsZGky8tPbaig8GwULwPVcq3uGmK7DZhuj9gexDHynTcavS7LMZj1iWfJ4uBrniJqoD6oU9BeTYJPobjXr4zxY",
  "key27": "3XDxpKFb1BdAiggnzwEvZVEx6iwA99xf21JHvv3WmYdy3SPHhbucnVPq1a1Pkk4CCXkjx5osnKYJ4nPTfuK3h33y",
  "key28": "2zPFtkdHxiKHunE8C5xY82ym4u6FuUF96xAoAu1S3b5hV9mZvTAUsLnmMYVYErEKudoyexqj8NrdDDVNm6ptzJmb",
  "key29": "3MGLY4pAJVD7U5yLSs3E6jMnaj2e8tEiLK5WdSZpL9R6Gh5uVVBQ1AQwcaNY5M4zKyzGNjhA9RPorXpm9hhnSw7c",
  "key30": "2cmeYsrXiJq2BrGA6zA9AejCkjRvxY26JUqDoJuQbgN7aY3SpdVCkyAUpVjrigixiGmBBQimqXBQ8UxLnzCMSSDt",
  "key31": "4oYQkiEmu1ai9uCuuMPviaekSs14R8vNbUSJCFNDQXDhWms2mevV2W5JmyaR1QqDBwbqt1cWWmXNHciU8JgbC7AQ"
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
