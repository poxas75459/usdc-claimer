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
    "61kJjPoJVxahmoEZq12VbAMA2GLHpPj1jUGmjwH9teJhnhLgY8ti7uXN5bKLBRzSMGLDZHtJHyJ68HtF2y83mbYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7W5NrXw6eNLTvQG7qZc84jAn4mdBAqqiQYLtovk95CkgD2N2kgqRXZtQ1PQaTUBF7AYXjwBq17vgTbiKNegXJY",
  "key1": "2r9rwcZACmamtasm8HSK54S7V4j8wqKm1Wq2zZ4e2BQnNZ4S1HcxLMPPZASsgVCC955rhw5DMq6rBcadWUCSaXYq",
  "key2": "4XH6axPnj6WksuWvzLWaHypz2aaAyrm7GG9nHRNP7qTj39SAGezBo4EAPKqJmC1UHZ1QWc6SXVzf2EatzALhuQoq",
  "key3": "3WjXL7hbWggmLHTCtizeSZqrGouyfzpX3neGW8HN53GhoCrV1d7Bd2jdYHRysAaCdsbSj4QiX9KERUWN9Uv2NfrY",
  "key4": "5gDye9sY1zgL4tZ39PYvVctuvNPtLGjuH734FKFpQm1LH9jZYWFMUX1jWUnAyra197fYT293oFhMxFa5RCSremj8",
  "key5": "V5Jgx6ygULHEfXo2wZwSb7EpmhtkWfLGfu3JPiz1NPQ5FgyFqAatax6asbxCk3KvMyX7gmLSEYryB8dFsJTDV5g",
  "key6": "3XCMcECC5JtG4VqCLf8why85SdxmUDboQYiFpBBjYXZLatuXSfqXhGBAVmhuzq1vcxExSeZXsCDjkHo3R43pMRj7",
  "key7": "3vmNmESxYQ2Zy8Hczoo1HiqvkTNQfcYQ1YhBbsytMPpRC1fzZgtvo9qJP9Z13kiLJo1tV4JuHvUq1r1voUgmMKaX",
  "key8": "56srzFZcJbZhRZ4qTTTJn6cjQepDUep5WcH6UuoonKnhCLJZJNhFz43rXhLkMUFovrkBgMkZmrkRHrMKKrV8bKfU",
  "key9": "w9zCVnaXQZq7mn5L5FGhTvgHbc3andp2YVLJvHLHUFkkGQWTzrhTfFu9myNVvQrsobPKJEpwwsjcYBQ7XPhLKrL",
  "key10": "5SWVgisDHMbYVGVNphpLmfgQsbZgnRefrvmwqPpTXd3QwLPPUfcAcTZiFsneH2SdyYj8zs4m8LTzK61J2wGiXnYd",
  "key11": "5srGHHd9c9sF8oiMdoGEiR2VnEiP56QecWDvmH83TJwqjsebj6U1bbMD82Anb8P4YUbNy2EqnK7bdRMADHgcY62V",
  "key12": "5w1hp4Z6eukLxte9VaXvDFTpwd9kehLBpTuWz6TQ6yEY4fHjQubNdUxc9R1Wv6YDNGWv552295yFvth8J85i9d3V",
  "key13": "2nZmvHbXstJykQ4naWFThsrRvjmiYKnwxcSS34TRRMFskAUoqwUbG44ZUF3TbZGKLGSRNWfskqhzVJ2LQqjCYUKT",
  "key14": "3X95UqbU7fgfmuVKAHbcTWBiAMetePuJJ81yTupz7Sq7Ds9ZP8VZBTvNXShqQtvee78zmeVfBUSejqXibxqTVBQF",
  "key15": "5qn2YLtQ9PKxzTzPNrefkNKHC8FEJbYh6M9gduxaoWgcvR2NKoTGm8f9faPui9FLD4PB9TYHVJUBUZA1zGqjjChN",
  "key16": "3jMvyfytkoS9ivFC9C9eiEHrA9ZWnqMJfevg5aJYYrKEzVcWH34Kkn7gSV7UAf3H3toMepb4dQqrzikckNYowgdm",
  "key17": "55D51vJXx4hEGRFxbfhceX6QMN3SwxtXPBumS1e5zyxrWurcAnzTmzf8bJ5m8WbVhi8D334nFfZutGZHSqqmuDYX",
  "key18": "4sqTNSNsbanaQiuqzDmXybATc1uBMz9qPTBqvPpw9D2vFAwUzMjXSEQ1qt8PEhYs2VB2kN6aE1rN2EQP8vamD4NP",
  "key19": "5XwBDo6fx5UY1cxzL76WPw2N8cdco7eyjCET2GDhZJ1F4djk6gt2w36WgnnkvMTZb7BdJkumUgDbzwqoPneQorJ4",
  "key20": "2a5HHfb7mUj4N6REoBCDKkUAc5HHsx8YWzeRwWSGpEjCJeLcWkBkCKfyateCf3LUvQU9QZ8GjjvtU3LKmNtqvzpG",
  "key21": "668hNwSygh5HPUP8qDJNPPf57B83a9yTnXBGXKAw5H4AGUxvwJsVn1nJMLGJH4qBvsC7QExSpxpfMXhUnEGzbJmi",
  "key22": "562pvSPkpAdz4C8LdNND7d3uDjggedhb4V7gi8nabZUV8VxjMhfYmXRjQHN1YSdw5UrGXS9aGDtFe5kEBN9tQ4N",
  "key23": "5EM1bsJJYJcHJeuGCuPxds2A1T9iE3HAq2dT51aJeUtpZuNWobgu49z3m8XjEyzpsaV7oUGBp8ynup8bF3hFZk1V",
  "key24": "3PF7BDu4PVLSbxoTeSLXgi8ya25gPqJXQw8caEjWaPoRxva95fG4qGVYnVSV66fhHJEbiRep1qEzf5Ah7FFj4mE7",
  "key25": "34GrCoNAhScM5nMk9VTXiaLxEPWzTbAh1PytkMtWLZ8VcAAzivwgUgRhogML7hCJaeCvDUnJFsYoqssWvZyEYvgn",
  "key26": "dd39WEknAzoCJwFztvd5YPCnyCeDq2H2WpM31n5zqKMRp1v9A2gpZCRPvmmiD7eRF5En8SZg1kvs3xdQcoWJ8c5",
  "key27": "2f17SYuP2GgdLed75YPG28vpJwi3biu251PUMMDyQuc79qV8jxcLeBtK5eC9PRuc9rs2tMpVfKRiR6Pdxsdjzi8J",
  "key28": "2bgh7NGH8YuQeMQJLxund3TMwk4b65PvbV39oeU5MtB88MW4qfGZXL5QCGvnxk3W5C3swjqB9pitzgty2yuT8iaZ",
  "key29": "2mUD9Dsga7wQUg9DygZahzMKXb338qfHzrPpTYJDrUT9GgYetpo2RCnRU5obzFTUQp1kPrGVZfQjXryT9szq8GF9",
  "key30": "3qoUQBCa78rn7Soj2qz8de9uHBxKZEh9W9LoqKKKYKVMk3kV46916hecEtwS6TjmbhwNeaS5NMnJDYidSbgG4CJB"
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
