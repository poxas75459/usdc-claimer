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
    "2bU7XUzukcaEMR1iDhHD3yDLCp7T1Nw3jT5miayShRVzFjeaBaP9Jxt3CsfDENzu9qSyB5Y1iftE3wnbr7ntfxiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juxBibYHNJFjEevh36jrSRjW4qyKornp87RGJQB2KZ6H3dur8j7SK5nzFRF6N84Ptd9jx3LUxfyys4NTY5GPtrd",
  "key1": "2i9PiLsRgYCVGpX7DEAkNc86QxvWmMs4pTGTaR5usYZyr6uueC632fC5H1pS9iDGug9rvi8j1sJgtq16aYGa7Z6i",
  "key2": "2JkHZWd8TrAyJKvMWu3PzszP8Nqwi3tLS9H31dnEEdFpgxmCJmoP8nKE7XsmLBwwHPsgB1QNHbomk9eLRa9au6Lg",
  "key3": "2oDsXvhoW9XXedef19cuiUsMGsTJ7YD2YjZkwVL1jkM3wZXQo6ndqGLBStWh1BRedqcb9vLZeC3EaHTorxSxWDgT",
  "key4": "26dWcx8NfU8GzTpKJkxEydWQHXUTp1wXmeAEDztukEZRDtyzJeHE6yNGKPEZnVqHJFcBhma7PB7TJoMLfJcMGckP",
  "key5": "4mAcWhtZKGrjJtasRFYe7qXKWLZvsk1xakyPpCaCLiE6evif5jpD3vsvzsByqtxTcWn7x1faTrzoDLYNu5hc9mRH",
  "key6": "3aZ6oyZAcyjRY2C9QDyS3kCHhPU3MCLJwaJnLCabsm4ujWiRqWrTrvRke3a9SovwUFU5wtcYNbNPZ1uobBPBHAJe",
  "key7": "2WGuC4VB2oEgrapvjE6v5iUqjgya85LUKLjsM2UMQiFX6w8j6cDbnkL8LQD4ZWAvezvqwf5Gyd6kqZ35DnxnBzL",
  "key8": "5FiSYxUwbb2s9beZDvGnsfG2k62FtfTFmcd6pjqUUxwv8MgD4sVudWtRH5qXo5NEy1w3nsn9ALgKPosZaCorLYF7",
  "key9": "2Jw4wKgd5CPUxJJk5jrEZNyB1i9dMN4JaH6sBYz3XRrGkHsm4EnLbkpMg425ZCJmNrbwxEVKjW7dHKgtBSqDgvAt",
  "key10": "8eHA4hAWzQ3BGhsYfjb4kqVURmPp1156eKkRUtbAfx4ooaCMa81Eteatw4dbqDc41szNqH6h9Su5NokGyNe7pt7",
  "key11": "2UMaraU21exMeM5TGt5fEGqxmnhXpQvVquF7nrUaCiQ1wfQcCQQcsfgseY569wcjc2cJeygxmj2LRV82uk2G5aTo",
  "key12": "tdwa9ee2ZmHPws5oeMNARQC5npsfX37J9fEcT5WAQ59yAq177QgiBvdPt2vLBMR8j8JJ6AJdB6ZGt7oogEgMbeQ",
  "key13": "4Lxscjdg89G2TUDZGEnqfpu5h1YhAj63a1nybGs3krzcmH6rrhySmxcASReLbqqj5ectiekXvA8AnkwbcJhXD1y4",
  "key14": "4Ujvskx5Sai2rJVB6KgrRCc6VGCSFVMaFVMzgzfinTZ12cwyTZGwFrTxmZaQEnpERYLMuMJ4DKjiZbLtjttvz6Gm",
  "key15": "44dyuYxf3UEVybizB3PwtgyopGZzfFrgtixH26PfT39hYfEjCYi1L5XpvsmuW9TqEbMBehFpwf4ziFfNVRseAwFq",
  "key16": "5R8gFSkq4hV5Do3g6DXMiRYzSCCQ5B42zp1RCFP3Wg5hy5xu1XRiH8Sv4kSWm6Q6u3uhQyixQdRq3eNMvyRps1KP",
  "key17": "hnE62syjZAMbQ3TqhWUDgcEeJNCnXfjCXqyRaMMf39ttWqHTAKmmPEGSdyaeTtfTiomjcpQhKNRNjYRojegit4F",
  "key18": "3EPxzz6LrRv2b7rMkQXWWWQAwNiT14y5YipxehoKZ45t3LzTPFQtwEonncFiAyKtq4XL2CRqCttGpbdjY5ssGPqt",
  "key19": "4kYtgnv15tvjw9uzCs1pZfd7KoWcpzxdDDkWLMYQUHfg3iQVY7SRegHmjoqsHZRZ2JXTKSwCMskDQtvppj5ruqZa",
  "key20": "2shPndU5uAmk7xYFH4jUMZBd6uozALjxyx5T6TMqKwAvyKfvsCADGxWqfZ2ZU47sU118sood3PkQpkchPAMK785B",
  "key21": "5L7d6YZoDkybcNf5WTcpnh2JM9gLn8RbVM9Dye7Aqk34k9G8UPA6dmvZQPzTa1aJ5Y7xayGMd2jnFfgSGQvpUcQj",
  "key22": "38GaxNmEwh8w3MKDebKfWQQt3Ay1gQe4oBfEwmvxqKCNYSg9dfFVowpKy57UDgUugQEGE6xW4sHsp1SqRNKVWUHJ",
  "key23": "53RhhEwoZjRUxadT9cnM4Zqy5XKbHAMH7Kv4fs4nSD7SvLUbXTPeZAcpGDcjAKAJccqyvAGXtKRSpdxJ8x2j4sda",
  "key24": "5NXKqHrUxjSfLjAa9GCRS7s6x2BEam229641773x6Nqp94xw3CAcMhpboiz3EwvdL4QEWRHs6s5a9b7CuAhv7zYH",
  "key25": "5DqmFPsGUTV266eExmW1SKj82DZburZttDkp3Qfkp9PhWBLVLJ3Kce2L8e6bSP1dvqaVwUApHhwRuq8eed5XSWi6",
  "key26": "2Lojw8VWngb25EJjLSvjYv2M18DY5K3RZZhXAZ5fedBEm9gnYyEnvjqEHzWwQrMPLMaVTbru1p7k36mfBMYpDHeC",
  "key27": "36ksicmuDEMrQWBHV2DJMa7nNMzfWq5noB31fgvXjqdBB12V4xVLAALNYuSKZ2qrB3jnRFT6QFvPzZiQjm5ymk8X",
  "key28": "2PtZKJGpFwagiJ3E8TtCjxvPmH7YkMRmyf1Z7f48YqB21tswY22Px1ttN41eyWhTPJ17dB2fyCPCsiGBHTHyyopL",
  "key29": "23iu6eR2vn2mqeqhhPvGYW1W7Cm7kRZ5Dmh3Z9jPD2z1NCAig6KUZyizkgPVeapP1tSBZyL4c3DjRfnfp2wY4FmB",
  "key30": "5e4kY6cNogjy5swhFQ3VmBygupDB4CsBHnNDXVbQsKjEQsdrDF9tHpKgT2CqdsnMCZgzL5PHxH9ApobFs5qDjaPF",
  "key31": "2bo15v7am8qZRnYXykT57abD3ygJXpDJWasNcLVgWySsRmWHAjq2GB646KbS7uFsb7VBYXaGqLPBCzKRy6Y8VYeB",
  "key32": "3e4Sj2PwfwjkQhcJJzepsMFwfUQexkzeqmr1TbhNxx3FcmMN9gHh4PPJRG6LkiLNm1BFPSa8s1va9bmNC6hhgpAq",
  "key33": "2TJBA6JMkJnFQom7f9WjdyX6evq1cF4LrF5mLuQ1rJaVdje923KxYhF1c2BKUXDcBBW1ShoNyCLwkLnG59EAWwed",
  "key34": "2SsJfBnBnx1JMkHvidezMn4nRR61yWqsrytEiauzqN5ydgDZt8ivMz5tzVcejaeVzJ32LoSXtAUWrU5KqVRSPPEG",
  "key35": "2f3zmeYprxb3cWvc5FCuu8FXPMucmoQHkNi4K74NpJFTbbmqp9cogBnhG9wZb3zBPkDZDeifsuH7dp5ANAA9a1ER",
  "key36": "4Y9zScPy2vPsT8EJPQ52ZUKzT8Betj4ujopwWRoYqdXKrpyKEtFaF12RSDcyxDB6vEzAFCgRDtKtsYXYYyN6qon",
  "key37": "3M8WCqX7Cpw9VydBMheNf5esMRmGNHx3JpF2xk4NQ8qVsCV5HQkCb8Bb6d7ezHMWneGoaVLQoxD86gU9x7NaWT5N",
  "key38": "2M5gXYrrDRNu8emoKZmAxT2n9Rs3dZpAdFcJA9rSoveWzLLJxu3N2ez4iFEaTbE5yDSpPcPR5Pxuwo8AciZuEPKE",
  "key39": "62PsJj7ENjtcLyWJXRDN4UVRm8mirgh2sWHxKTbQjRZAzomfg8p9r61ef35Ax1TdofPtzw2XqDKzHASdgMVCrNyo",
  "key40": "4CbhcjxNuiFXj8St4Rb56k6TCisZ7uR57MbYjtNSrvBTT4kBiP2TGBAhF2BXWJCXmGLgCnVLkDDShHLD3Foob7dm",
  "key41": "5dzVBhSsTyEtLVYHLvDYMqUPHYNSqEJyXo9pnUhv7wqh1hCvLSf6eZt2yuxiLyhomS5UkGfNAX29v9BnyybV9LsW",
  "key42": "4jLbCwtYBv6oGMMB3EknRM3QkRrAp97GgoFpJuZdeCZJfnu2dQFYwgRh14GXKFP1qgjHefSx2P4ChJY22RF9TXC2",
  "key43": "47pERHjtCc2i4n8LjbyGa5TUBPW5pXzBdAowdWvT1EwYK2ZQvY4EYv2NqGsJQPX97ezsbFygFctFCchq1cTx5dqk",
  "key44": "3brBzCJrkvTnoAPtQymtZLWdgCd7MqttzGhk4JAExevK79S9yciJzfyzBwhwMFhmLvTqvE2kB4nhKSWyg14ZrU3a",
  "key45": "42wcnhE9VBAvFCzSFix6JpKhg2ue2qCiLMvf5tCXDobcEVToN7VrTATAgq84JP17Vwpa638zNbAkci79KTpLo6kh",
  "key46": "2wUDCDXXs79VxsBj6LUeU7NBDT1XPieH5Y5dF68yDpLEhjuhS6UMBQzd3fYKZaAyKufzUL84HcMktNN7wxNBy3HR",
  "key47": "5sSryNtHgpRqWkNH2V7RHNSjCKkda67T4b6ozXQ31HuaAz3hKTLwkdXh6fwftggJM53oZFXgwGrYQa9Lzb9aQQTn",
  "key48": "3JKZRYUHB7jRNtzWnnhgnexMYeccaTCF1r9vvwJ36HrMZLbRZneHH5SDTHS4tv8bcCWTL2ZK4RBfDveaY4yFbgrX"
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
