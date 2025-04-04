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
    "42mgTmsNZZsbqLcTtVMVaWhFJVieq75C6GahZ5FLFxepECpXZ7JyAfTJUjHpQG5g2G3ZEBKUabN5hiWcGq32deV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATarz3i3PmeJhUXYro56u467n9bf3HE6FdMMExXaRhX17q1VsrT7YVEEjKH6BLm8TV46ffLvrX78TVwRXZmLmAW",
  "key1": "24qk5g9U77sHXf1Z1dnbsgvX631TAb1ovLxzA7i8HQsKp5BzGQcgxLMU8PwbcRqWegKJ9jCh8251MuSL8uMgSksk",
  "key2": "4u8HQyWh16QcetdSYaKoWsAUhNmS3RjML6W5PK1zBd8LdPrFcWyEy4YrA9VG1MEDzfVWisnoXiyBojH73amJ9g6D",
  "key3": "2VKePH8gEHJEoEsH84VPfnLZkpjUMd1BWkaogBVMp8La2542JU7nWfVyZpUKS5KHFnpWZhYhrvVqQBM45sDM9twa",
  "key4": "2ALpvRqA4VqbHFgkmQrf3Dq42Lz2Coy4XZM1H4CbbdZxAfBabuoLFFj5n4vwkmqKCuSwN8gLe7frM8QSSVA7hSoy",
  "key5": "4XaFfyfHKUSfP4cx2i4JhMVpsjSQ1RPcuERJFaB3JjgZLKZ2jS8sf8mPzYDMHgbfwrHGxZiguJ5Z252pXbRYTXVv",
  "key6": "3XCgGL7y6Y4bLtc192DHbMQF5AAzGs8DCwBGPNys91CZGNZTPfTGSqidc9oXmDAFAc3CTDY3s8hfCoCBGREs7yq8",
  "key7": "3M8aN429JJfVQRh3NC39hTMTTEYQNjBnNC3UTcb7ynygC6M4sRs2WP8YgAYmVu3A9oawnrTmVjHGrUqxi5xAqnX7",
  "key8": "3zCVUPkXAQprSJFgcLsPMGS7xXDMDRpfZVese6A599EmTYXhKZTE2RxJdwn9PQmEeV48Nq1V73tgg7mnTZfdZsoN",
  "key9": "3EGvXmviKe4SRjqXEa2vxZQ4yBfC76pbHZ4Tw5bw8NY7gZo96pi39zj84UEJYA4pfcCYonY2ETvpSxtYHx987Rqr",
  "key10": "4Ae93sErezK5e7TFzicKd2xBgTYcpfy2zhoTNhgWgvdL4s3X31sKP3N4xGXUrGW2oTXsU9vskVUhtgEHRwkFTVTg",
  "key11": "4dv2Ri8cy2HLqeDPNUvarg73UzJnVupYUd4sZpqsT5ELDZLt5rUZPuxa9XxRm3ZrY3uYakV6uxTSSZEsFpqgwV7N",
  "key12": "5NH2pXQutzaC3CYCm6Z85cTCWze9ttrqBNSeA77SkCqp7uRqPBqi4e3v388yePKDX3LCZrMAGCWoj6gk4QTJUPRr",
  "key13": "4WP1sZXMMauyu5yUDD4fVZhhs9ia7SU1kHUDBf1cUEozd2iu7WY7dvVZX9nJmfv7D9HSCiv2mxPehbyFK4uPyowG",
  "key14": "3ruRSvbwYoEfpJC2KZk5QZXcCrEq6paNscQNP7cLUDA6TqVxodeUWJB4LAdTqEDbVVUxV5eQKRkcqeFdNVEE3sJZ",
  "key15": "5KiVehanhgS2jJCqupX3y1pYy61tiHBBWLCcDRcsmB2dUtCShn2oU5ienHxEoJxcmTv6QgW3vaxy23czHH5T6vXL",
  "key16": "2kx3RPzXsw9FMVWjfsuYXuTKU2S5ywtYsMs3coKUZtn9hJDStFTMV5ygq3JEurenGKtYQX1A7QWqDxNAiY6o22ZX",
  "key17": "5y72N2cAS4ProCgsqemmpo45fjynCncgPrnEMKk69xUvpAL4tRmX3gmhBtemiEVDHXgHqwwLPUfibLr9hQFvNKab",
  "key18": "5x6vZDHLg2SLywss7CohkREpw9UnDN6T8ZkH6HKStEGqfze5icq8yjxQSnJX9pLQg2ScJKkcSrGjennkvjiSaxJs",
  "key19": "Gqw5XZCydjCL1ZowM4hnm9vwWsWq3TJfKZ8WMx5ngw1fYJKWhKYQkxJsLPqcQqkCAXL5rSw1j2TmUZexrEkvvv8",
  "key20": "j9irDDqmZm6GLajpuehC8JGvzWWH6maKwmdrWT1DicGYL1A5DBUeaZdwvhaXFjqtNZgdkN4G8ooruD3ryNCAVNw",
  "key21": "5w744vRaD28pJymwUezF8TSM5nEVVbmz5vsQUdQJ4dfqUQUix6teNAhgC7S5d9asYrpsBYiufBotdnfbMZ7T4FaH",
  "key22": "4FaL63wztQKuDa6voGtpruG3mCFdKv2zRTtntaWLuUgMhKzNs8S5nVCNQq7JM4663wTLPgimhHgFJdoNUvMbAGyF",
  "key23": "2gGR3uLjffBpJPKPn8adZepS9CwaxQbs1sgXXiPLeYfQniyiwbBfbdvHvLG7MPm2MDFRX2AaBQudY7dg1XvU7xkf",
  "key24": "34UkKEhaXu9xwzbhENi12evrqKwUgHiUk7SocdXySrr52oVcGjptyWMw2datsboCdrVjtWfgcu862Ksy2Ju13WFy",
  "key25": "3dqVUNuLTrnzcZzomEXf2vN2pAsVMG4UrXumvyL2qzUzt4YQToUEGLvs8zd1YutSyojzdgukycSZeeq5oBZ6CCMY",
  "key26": "3ME9ww999yRvFYr4biEbuFhRpkfDJMukuB5qwKvboncvm8HdqXzNVYfdFmepAouVDrNjiBFeHjjf3GnAwK7Qs1mK",
  "key27": "5uPMv5XN88VN2sjtcU2NaEKQRPFatpLvMrFsvvCyndkq2FivqKPaQHyjtmPAQ8L2DC2q1ALcgKFtQEi8G1s4YbdH",
  "key28": "2STpi12ZrbXo3f4VVhpNDgFPu2sRznwEfqMiWwSXBHQKVENfwJkaxpq1d24yeNK4XDXFmZvv5vAHWyneYkoSSq6b",
  "key29": "2o9kPXxUCyrv6HzmNAweFCSMf23WDj4VssN6ZXTtQ9JVFN76ZrrikHmne5crkbYgyFSb5UWLwSfftu1RKFmGykej",
  "key30": "3GJ8AJv5NYFvEk6rnUwWqimpyrBXtD4vAQCATXYxE6gVjWN6dk6MekZgYmeSveTAvFGDFx33mRDTYUGUExXxkRkK",
  "key31": "2WbZuEW1BZgRLR5kQCrM57aqfZF6p6gX6CeJGhsewsqy8RfoMLS1qDUddXeDJjLDRvVQyB43kPiEjXu2M2BaCte7",
  "key32": "koKzuh2Yn2fEUkgjiMw4taYSDxG792GG2YUXTito8RD6hrtULEk1NTmc2nnjrhxLbhEQGNBWQaMb8pnAXpqwSL5",
  "key33": "5wAn1qyepXKburAdfZA8fWZwRz44etaFqVCTNPEbTqa7xF6YGisi3GHjp7xPsVd2678AqL1X7wQhzDvguHwcPRKB",
  "key34": "js3wc1jkUTR3sGTg1DUPNtqcM5dtpxowLpbFsk2MCy5D6KgRe2YJe4Bzq6Y8usv8UcbqeRCSRnqYBifEkDcPfCR",
  "key35": "5UdMM1BTnvPQ7jU3tVyiTbFAK9dKm7y1vt33DcBzDZT5vYMr4GdQ5pPUCVdT1ASYdayaVF6dq22dyo3SrbKHvNpP",
  "key36": "2w1ofaaTsTSTJXMHDJcTTTJRitebng6tkBdz3dNEELXwVNC8eSQPD9rj6FmdaZ7WoC8Q4W17jwYntTK7mJGRPHqa",
  "key37": "2V9rh1sT5zmZDHRaeYJXms9fu76Vx4z9wMCdL3WgWypwyQjU58vGdhTCuuJSpdezXBUx2cLW27CjdcRtHd5JotAk",
  "key38": "CZeSjLWEnPwu9wyHau81RjUUJ4FNTZB86mnNpCasYpE7LmYkQgg86r3Xkuqjgv9iV2hRVeGLY3ybmrH6qdHJ84f",
  "key39": "3YcoH5KXVAsa7GRy4eVwnxppfeo1BUoyJKGrphcryfFvHNWCu6cpRsohvHiC3PkBaGqe9u1K81g4tDMwoTzTcKno",
  "key40": "5PZznnzTgRo8Hos9dDj1VQy1wE75ET9FpPKXJfpkiZ6DFYt5pgFQ89F15UkVFkkJmVjiAbegCp9X3ab7M8NZXGnr",
  "key41": "5eU2YVuDChxhprWBTXBkACTch4PcXtUcJp7adVw3cRCEPRUSSaauPajhZjFKCpSRiNBtV2XT7nVkYRfhQTu9QQFg",
  "key42": "NREbbnpfHLnMwH77hJPqJjjgHMZHpxvupEdw6uH9suV6nr3aKMN5MVjs6zi8wcBDcge3kbHi9g9fSfSZGjeRVLD",
  "key43": "4KUrUzZuYACbNaS4cB4sBfVAHVdtvYEWNhXXAQnmEqfAminUFy8FeUeTxvyBgzCjE8gPGUdcuvSKU4SyhjL3UxbL",
  "key44": "5CxMeogZk5vuDBMqZs7aDNSuH1xZCX9gVPQuWRY4B9Vf35PAZJoicMsbibzCjEoYTApw2G7o2uBMuuk1nC5cdms",
  "key45": "4c5g7jzSJSAno7gHouq7PGMiVrkX3o6JU47D9MnY7KhuG3BSwx6LZp7pbqK2Do5iNvYgiSMDMfoQ6tHUQ5BCKxT8",
  "key46": "3xD12Ysk1Ya4boNWp3Y9dTtk9Ez1WgusD4FDjFRSzz9yL84Fs4CP6Z7sALkwjuh38yZRMDeQAPPm7SP8z2t5Nb7c",
  "key47": "3t6vmo6tM39TvFdwTA3aQnPBy5qxdv2qaa6QybVrePueuqH9pAz424jbVhDxtdsTPEobEtv4Sdifh8f5YYPE9Hit"
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
