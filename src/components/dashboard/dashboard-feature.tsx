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
    "2QdhHwbhPUch54A4sxE4W4XE9pctxtW3UApuGEsAcabKmG3BWaKgiBYQpFbiDxPZ6rpsJ7rMe5X8tvaqNhSvm8Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxUdDFUB8cQUoLxjMyWJkFoswBP3ZCpjL88Y2LDAVVqSkAvZE4idHr1jgDJbvv9qKiceHtQxEVcA6mmPogfttsp",
  "key1": "58rcb5koCXqRZYtpQrSPqD5MnX6mCEwT5QdQ97MypVxC1TaNjx8tgKFG9uqdEdm5yeyVGvpP54SbaineysukkTuM",
  "key2": "3DAWUq9LE6ZgL9wm7dGaMq6vCsQGkn7fwCvnbGv1pXaaGhJcFZLGWuWZC3eJ79ihq2UkNCQUwNLHareZwcR6nGvQ",
  "key3": "2BYxxQhRTryDmwaKoukuZMjDb4B3wxmcmqn1kmr86pXQvi9VkDtSk472rfUkhxED8xUqwLoE6Y9Sqdv4HmVkbtHU",
  "key4": "2sw7wBnXA71pwbvxiPsXzKVvhvMsdgXzVtcXYoHgP92JfpUinxJAAodCVzCQ9dXaFyg4dSaJsuM3PV3eVw94cH5x",
  "key5": "e7jfeP7Fq2swzHmPa3QssNYMHf82XV8MpRiFNkThvSzCi9bkTLquAQsJcwJTCWzA74Hby8vKrruroFwhUPbTtWG",
  "key6": "hFxY76SKxxrmCFmTDcgFD6ggbKDyVme5kN9GUHaY9jiphWJCzGNVaMaFfNE5Fwy3k7s4cLi4ezMZXBL79U7KsoF",
  "key7": "5Nma1jf7HxPb9XDkFmavefMEJxrctVCAxASAuyDbQFhbtN47TFWSpjGMUJ5zhdESQncJB4RDZcqNNN4VZzKKyHEC",
  "key8": "LJDXRTiuN6o6YwCGzcoATE61QTnmDgDEGpvETAsmuzpQGAkfmoVF3DtscsU4UDViz9AnPbz7uLApLGeiwS579xA",
  "key9": "4NuiQ89gwrAunPCRv31hsJVUn7Pi8VwFZnytAP3bkn7UMA9G7QmJMHt8gt86qBfQGWa5qoVyCHrXjJEaqRs77JJC",
  "key10": "2RSn3ixpKEhKU3QPc6arbc9298LsSg86hjsK3JffxsoEa4fkTGKZvSDwRHQsV3RtrFHLcL7cNa9HCpDeaUSWPBBX",
  "key11": "5n49pGUNJHVD5Y2wbrKjH4Cw12CV4w5PM6fhRPHEPByNcyDf1hJaZ5m5aeoqXWRFP7xb2PQshKjj9fX3VxTdtHZ4",
  "key12": "2dr263Kke1mMSUpmRxknBiGeUD896wMmQT3hn1cBDdscnpBPP49gh3ALYuhDJvYdMtZNzFQRmVFTnMthDbPDBsEa",
  "key13": "4oEiyjniE7MmeuEj1kjG8tDZ7ibQcAbWWoyxVAR5Q6cuBu1osRJ4p27pu5fMxLbpJkN4729Zx5XGoRcPc2fRZW6V",
  "key14": "Zkw5waDV2QfmqR1uck8Ay4djDv3rdP4tWBZvCrfnf1wcZfs9fKJiSDgUGyv3TXzGjq56C5YZzYwATNJuKA86hci",
  "key15": "22YBwfq1ubx1P3ecev66Gq4CbFxpzJr4guL1euguHZbUSunwFkveLZ2iVGSEdWbfScT3vxjkerw4vatffpHxnpNU",
  "key16": "55ktKnqooS4cDtUmJcN1WdxpacdggPnP5wQ4bQJtE8E44NqJQqC28YWkfMfJdb9MgLNkBSkHfmdVDnNrR5iLdPzA",
  "key17": "3pssnLu71XZuxXYWTwSWjVf9kwyjPADZGFHy6z7HxCWk7psBbFuh2ZzjDzMJzh7tPSngPe6DEWAKjigSkxF8CgmB",
  "key18": "ypRZQwNPKoKB3VZGgdAMRrzuGEofeRhy4saCcEkSPonTGGXzHPn38eQPcLY5Pa8LyCiP6Jgsga7ShELVrxnppMG",
  "key19": "wVEcMwF2NawfY9BLuD8neZytSySrod3k8qmvXsa4bfb9vRD2svPnsBhyJVw1znyZHL6xUvz6U2SupVpx19Z94Jz",
  "key20": "4qDNfCTkHeWTrtLFJxKkTZLNQYd5XAjEH3Q4yej4i5QEVgncLn7UwwxZD8Zsc8AunwRXGVhR7odvnA7xAADoVPAC",
  "key21": "2V6Ws5qgyCxpkHNjLVE4umpEZVwCUGZygw3fHpbqHFbCHC9ywNGK87jWE1otxhjFXVZiRE1kqjs1YmD8RB1oHpzj",
  "key22": "3qRxXnw63yTREqjhA4orcXdLYSPaT65GMkfmwbq4hPCtS8Hqc1uQDCfQ3GDxVfoRpcBw2uiHh5CgFQJ8Rs2e3tna",
  "key23": "3W3TKpj59MrdHzS5pUMCS7aBQLqdDtWBDhwjXkPdo2jtJEF2QRw8G6JUZQPxP8vPjAYM3gv2AD983pX2LGxwbcE2",
  "key24": "229CdjYMbFGTqBVabo3beAt545wD56MmFtzHfyJrYVjchFrRwa3MXrgYoJNTniqhZyoF8XaNWP2KTkBGtXirtfYh",
  "key25": "itLTykdCPkoARwWm3fh6DeTHXXRGFeTJfnbDtDR52C81YWwepvdKqqgWQE5u9exMKLD7aRRjvq9XELSta5m67tF",
  "key26": "2tXMavSLtvdtZV9vVSuAhVM77vkQMcxz1PVe8JCyxGAACs2bR9q87CdYfpkMch1kwg9pEEs2vsKpzMR5ZqYPvvF1",
  "key27": "246fi5VLRTd8LRToR5AkTuCZ9XSVmdqVvbtCKRY2jpmgZtrREarKTXXsdSC1YRw26KFJ2KLZe8nYe6XWqLLaVvui",
  "key28": "JJuVRV1r1ufRimHwDx7TtmccM8NSEQZiadHi8qjMwYxoiiW473JEBdBwgC9p7VQL8y2Z6CxUK4JXgtwDH7y6hGM",
  "key29": "5hiP7bPx6hj71uWb5ehgJJTZeJLLQUZcEJiKzxrbxqtr6EjuDBcQD9pibdrAYwkJqGxz69HDPYbcNBx825G2PmkM",
  "key30": "46Ra5KUPEdEFT7N1ZLFzMBPGneF9CjnhWzbZGVyLa7ymARw8NMHxxzbZvsdw5uyjmMsBonRvKjUMS2PUvDeX8WsS",
  "key31": "5EQtg9R2AztfaWo9EMfX3eWaheFy5zn8ME4RRwwb8kvfzvVWyaz4N973MJpvXcnaoWB9P5zM5Nj3sGwC37d35Kj4",
  "key32": "jDF1ZnvBfnCSUHSUkVfaDsYcqiof6VRLKfB6N1F4zqD8PHAwmrGdyy8pFou4S345Q1anPs7B3eq6dHVR9DWMHaL",
  "key33": "2vHubqivLqzfRZBGqGHFAmJZbqJMEFs7WyY8BQVVnhdV82JQvBmQaW6ByeXpt9YEYwjLEnRQLawjuseC4Pse7NwH",
  "key34": "5javUpkbC3mtYkFyUDL34AyEYYQC2LxsZS3d8ZfP3g5RQ3JMcNFvp8GZxttf7oexh2c4pSKfyMEHvbWhL9GmSpQT",
  "key35": "4chwWye8vMRX8gyX92oAHWpU2oWKjk1XxqaJDiqxWUdyE15zFpGCRwvBgV8R82w55me6oJt97uhtsCt5YVDtukRx",
  "key36": "4zKHjVYS3WUMsEUDsrf5CnBBhFr3JGb7EmXjRkjFp7dR6ReGEJNGVELiAeQvLoFQPrSkce5U2c6RZG5ZPmkrzFGT",
  "key37": "2cph4crxAyMBtLmC3GQMLvW7EQmEfsDopbxD8h3vS5btigiG7meVxfZdJEk1ZKt8JUpSLTe3G8q8diLJ7NmRe1Et",
  "key38": "4G8G1pTfg2NLxcV9LPA1X9pMyQZMHcBDeGhCihgs9qEbhgegMu9N1F93c12boxTCytpjZzXdCkeHRUXuS2ZBkJrd",
  "key39": "5bE6SmZiqPk2YUqwukDQioYxjQvfFGMgC1hzPhwrMUHRiCHhJneknHYVicKz5YEaRRvUUCPHaCKyJda2czRfVgeg",
  "key40": "3ftuidPy9T4tBvS4HTkwitDxoGSpcakYXCN1wmoUWZ4opfRhiUULKgnUeKERPkE1C8nJLvLiuWvCeaaqmjowZXxP",
  "key41": "gbHFaVyMihxZyarc4c2ZumoUdDZ6FKnHWfR6BdKuNh3V8x7BkvpT1qWKa4HyciSDNk5eSLi7F37J7fSxpSwMRXL",
  "key42": "5jpq4pSjcjMzfPip6gYMU9Q5an245DcTUhRCi7DqX4jvmB2WUCek2Z1vErdzR55Brzou5u5KxtoRAaixhP17Mr4p",
  "key43": "8zNkbc96FeZPwSd9ujU26zv7AFhSf8duVHe1SUTgu7D2ZuKhf1WEch89zDvkX3vGKP8boZ7BijxxHFYhVi47qHo",
  "key44": "4b4AbzunAxLYdjPgTRRS8rtZYz4Zg2dLbe1YX6bYvXcMdfZsrEZ63gBjsBspakvyBgpNNyMjcAgLWzYdaHmbGsXP",
  "key45": "3A7zH7RKqGjCeTHztBdnEvp5SJneuCrmUwRZW8Kk5pgLnaLStF3qYoTMhFqGpfnZQNjUhurdrnT9ziew1nArcbbm"
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
