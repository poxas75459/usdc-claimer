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
    "5XZHFQJv2TQbyGjCz9VBFDkdcrS8FXbeLvTJjyquGmon2tRTH6Xs9hRPyWevXVssGqFdjZUe5hsUChns3kg4GoMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDDbFrGNYnn6cjEi3W4nSyr6Rie7a4o4FN4tqLtydc9qF7TvfHmvqKNbm8WRQsxpY79tSB2JtEVPcfztu4yub2W",
  "key1": "4UANeHmLayVDGbUk8pq92vbY9iEsmfxx98rcJYjEb5ELEuN4sLSNbtnLQfRuVqX9B7Cjgv21hbq7MHZUHfVuXbdS",
  "key2": "EY8RiHeUQJciNcdyJ7LndEJhtpjGYmo3ouHXBxaNYNvfnDxPhx1LYAxYsdF4XdbUPdgsgFGke23TZ19WofRHLHC",
  "key3": "2HoJUksZ5csL7soQVnRCMAcduV5ZPP7eyaXjv93ovoWzmWS6nyzDLDsM6x8pdhwPuZaAmzH2RUs55VvzbAkUh38m",
  "key4": "McqLvbzppZ2fFJCMcP3yb2o9f6bVeELRjypU2kzZShtC28WEfkdKJUj37CQm2futemUp4SiWqXb2b5CLUFKBJ3c",
  "key5": "5MiTEs5di8oQd66Hqw3gDJyLjg1Lyy4YP5B6wrHMDACXV9JxQ3khpT7kkSugJwAL76MFehuHHW24puHtsydNfkHJ",
  "key6": "4R4kHMQiVdSQjBUcNBQYS2AHZxVBd8wwCJ4baQyX9RrhZkfZFjnpNHwz4JbRuJ9cKUwuYBjAf9id7w8tLx39fZoS",
  "key7": "4krgBFgDHFQWpCHMvst5LnHgdqXPjJhVXuyLgPHcJ2aABEFZRgZjP2pgzaWU1ozTc4yue8Sg7E77uZdHsTTFP82n",
  "key8": "3E83r2uRqsYkfX4ZVNXykVYhkgRcC8YfbGzSjrMjenVb6uz2FxFH74kgx2ubXXqxXQstdZVNjtSzRbn8WwjMKvfZ",
  "key9": "3ABop6zJ6LZiuMdEPD4YWtMZRV8wRhHgUkn9Nxib6QUUaQCFybB41KfSNhRvUnJtcfpP9p1mgCZXs9EeDS9h3xgM",
  "key10": "4Rq1syNU5gjceHY9s5gH3Z82p5EKs9X2oatJzptiHNNg1g5mTUVKgECFxrGpGLXzTH6sm7KTPPFWFsF2SUNyupEZ",
  "key11": "5iSpAqKJY35wWcsVE54Q7PdMUnciNxHk8x3Y4PLden93Ho9UFeKg6X6ZjSRh4Kihvt9X8hN9pWXe82xQrDV8hPLB",
  "key12": "28W1VDWa7JSHmhusiKdJNZN6cAAeDSbcxHgb7aerYPi92XVkSMXPgMeFUdnqnQsT5qDf8NWVe98YsEvdPcVXuUQZ",
  "key13": "45qL9WcstRWeCS2gjiSPazZxDu3etTVWmGddkfJJYSF3558uEhxBgWCeqQGVR7BJtmcpRw4WT3EkDFooch8S59g5",
  "key14": "5371168eVij82BjikUXqjJWnNGNpSgi58FTrecpPBhHbRxiacxZW55iCrgoGahm4tuwYkcgM9662oDNjrAmw9nWA",
  "key15": "5LfTc17oW9USCva1ouuEP9A8gjE6XNbaJPr6niJPhBM5iEeGjKEup93nUFq45oArg8vUtCZkoXM93fdofhLahVPk",
  "key16": "28yxbwpCg6m2AVewekUVwjTLja4j8tp9JJAa8K2QFs4MjRSb2AtksY7GC4H75GgxoFYEdpitzT4CdrZ53RPdqBci",
  "key17": "4fPTw6JAPxv4aNzGy2tv6VQEabtMhvmPqsKbezWfoo2Fg25hzEmGytimNuKEaHpUob8SU9ibvqhqvawEnMaUudND",
  "key18": "6eKiRT2GSQcHNtSnstmGWux7nxwW18fbzUXvtyDjNWMwFvfN7LTASRYmQkPpuZyceH3pgZoJkromsgHsqAGLjgw",
  "key19": "2tYZGE6mffvjkDRg6bRL11G72yJXWbfWac1zzQHRvtpwEeiEL86J5ZdmGPR7CehjjVmy2xFhce9EHNaJWLawUvkn",
  "key20": "3qRdMr9M6UQcNvnjd4oS81ys7z3jPuYagxPvjpHcBAqLFTxv81QvP17Y1hNPdxNwTRUrrJy1ZCH5zCW4Cjv4gyaF",
  "key21": "3JafQS4AWr9yLHYJKKvEveuHnaV3RhE93YFBx45KiHpi29TJTed1DEjZZxXq2B3T6C2GkjjGgad3rbnT1UPHKZEz",
  "key22": "5cFyyQygdQqzFiVGC1owTJXW2GkY5ZBGXK9HYWU4JqJKjXNo7ReifJP7Yn6zNHtE7P9hYb3HZrfN3pk9RxNrqy2w",
  "key23": "5BuSCBQUNHtavKry6PQPA1RMTizR6UKbpHmasoFB4VY5ba26cwZp9HNCyreMne8aZGGxn7M5FBYQhi2i58EoFgvm",
  "key24": "3MYYTdaxGvK9sZzF7j2HwLt9YZY13PjSrgTE4qeBbsRcsQbjK291f8szMH91k877BUgArMvjb2J1YHwN8TZddwpx",
  "key25": "5fLNhVxBkwjnAyqCL8oNQoGnJg6cL2mcG5doiUmUxZs9eHJCPnmpwVvXDaituLUBLahVkudQ8ZoVLCogZ8JvxX2E",
  "key26": "cYzmfG9uTJ6C8z9mDLvwhyoTP1XkdzE6q2jPuDavT55MRyRJQhzjLZScevNoUUADZVSzAusLo2ETP1ipGuQ4HMT",
  "key27": "55ad7eJryGpKiKRx8AniLhnsorXttMt3vMtNRFjdyMscyYyjf5WZpyi5AciZFeh9qKqVs4Qq6Z8kuz6MBN5w4eht",
  "key28": "3DZm5G11HtKN1CpvE16hwZ6EZS2MdqrF4VQ1hn1noGp3C3tmxJbHvggQ9esDGdG8SXbe5Ynia7o6TydvJXb8tXBM",
  "key29": "3AuLKk9tcKQPHPmwMVaRrKbFviFEShgPYrbRrAEKissEtvYMhEybFXro9dhyuyJHexihTwLcS5BNf2bu9y8qupEu",
  "key30": "2jbbeA85BihsK8UCbrQ2M2PJtMfCsjJoFg2nQk9NkYMFztJFTNDKQgt5D4tNMD6gdjZiPk5CrtZWPF6NTMdXp2zY",
  "key31": "2XDSQFLtW7DLHc5uaPPxhErUsBbmoNd8nnCZ6EoPN4YLosfcbn8D8AWa66MyiUqtWXDaKZGxpGEFiubAMwV227dr",
  "key32": "3fUVLE47DgDoVe3CRowaykdnMoEb86HXGoyGiNYXPieAUFp1xqUZLoKTWQgsVfF1NZjWrsYD7f9TnU1qbVpkFAh4",
  "key33": "3Kt389QKJ3GwcxM7uCusuBCDFrsnUaPCXCdAuYc6N9zs22kTLGV7m9RBG8LTmbym3fFbSgZkCTxopCLBD1mvDcwD",
  "key34": "28X8Y1HdhFzcruVes63tQVEd25frtZJMdqxWyD4QhV4hhcW6xGpT4YzuK5pKV9kLTUdZFoZvCaA6LsS8icLAUKfw",
  "key35": "PHjKZdgwtfTDzfhDucyALgvEWbxthUrhzdGEgCpRmeBjRRp4cVqSGyRMzYQjvbuang7U5qaLJnBb7t5QhfAsbLy",
  "key36": "3jU19o7Z2urdnAyunwfHUdAM2hhzAPrDqC5qd1A57a522ZrwKKfTydxikcHyv7smsY6mHrBi4X66bTFAziaPWG6V",
  "key37": "5RcmU2VCfrWeqejukdL7KrGUFc3e14vumCYbmMnBwq4a8QoZMHaaD2Jbt9mjGDbU2owtWC7Ynfev5QyK85BwT67h",
  "key38": "24LYipBDMc5ktoJ8q9Lbqh97HUjW9L6YKmHM1knZ34f3iwkwj5LdmE5pNaSUCP7NmrTmfBiCZGcFhupfYkqgyt31",
  "key39": "2APxSdUKoAoCHaUnsh54xLKUEKrnDXBaHoPUBTttR31URZfQY8yTupaPt3dvwh35GDVFWAX8KH8wb7mh3NFWjZvD"
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
