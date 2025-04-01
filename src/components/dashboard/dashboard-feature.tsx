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
    "Wzg6VQMYtyGUR63USCVbxWR27J2x5nWph64Gq94TEpeoYvZanw57wgK8MG7Pu5wdtwDwMznf6rUijNQFDeuiim1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fQ9Rw1QGL7qaxmFgv9KNE2ohVB1ckw5xg2v2VZC2wNkwDccmdx18gcRPQAiidh4EdtqJSTwNbhHsQTdD71zCag1",
  "key1": "5wiHQLit5g5exhr24JEXkQKhAsmL5sUV9sAPZbZFYMbbMTKvtSKdQh7R86pLkRLhzbk1BdzfcyecDaF5FytGGqZv",
  "key2": "2PjQ7gtc9A1ana5dTcRPQpU6w44RhSBtrcmGUHxFJDpVS5YpCU4Dm95kXTPy5wePh62ZXSsnYeoFvjAn3gZAyu1w",
  "key3": "5d8BruJ1MmqAz1P38v7arMFqsyxtFDFAnXawej3A5QL5YKgZvVaTAg3aDGLcCGUVk9XkfknJxRywe5UGSMbMXegZ",
  "key4": "2M2gcvMoCNhF964ipioXqiGQ5JPXbEwr5zq2iX8MF1j57QoesHag8ceHLWgwKfam71kiknjQArDQME88tmXLQvQE",
  "key5": "4xV1e9uzbNPmNhn8kk7mojGhpxnhxv3gdppzNY555oAPc2AL4YR6XsFUGQUZATAnmuN3J73Fz9pw9frUnddLUxod",
  "key6": "3MRLZ2NR8z8x6QmDgbZGchs6LQnjJXZbPYTRix7noqg5pUsRNwb8LzirZM8t4JEyKArg5bdo6CdLDjT3EgfuUYKG",
  "key7": "5usQWAYUfLmzzMa6f5N2mqjuDRqRnWJYykFck7ZjUXVZHY9bS9X8CziuNvUVvX6o24guR66QCEepxccu9E1TiSxn",
  "key8": "3dqR5gXm6cPQ729y7CeC9xNq6vLaL9WQ7eHkE4o356Z6Hq3uh8m8qbdW47AFc4AeT53Dopw3JpZxecHR5mcdAhst",
  "key9": "5WA8RLJGwtZFE3UY2ssJpJWFYkR7wD7rBxU737qkLwfSPFsyvFbxu9dKL36iMA4kA1tM8FngPmzeSt6mzvXuEJi4",
  "key10": "3LKb48Zbehj8dkSgeuWpBWKz5HQEbCybVZhRwhgjxLPoUMcu2ZMQHyEFcotZDvPoKUngJhm7Gj5XEBqMz9WA1Lon",
  "key11": "Ly3qvSoiF7Lcfp4WSuZp1zccSuGHgVzLzzugLTB8SwymvpDikHXDAHqug4qVtgB7bg2a4d5ZDGt5g3SF4TcdSYq",
  "key12": "2qqqnsN5zfH5inPqZb9oEgRQD6kxkWVBhgAEhBsZ8XCZ2yPL5rdGGKwQfbDb4od1SSjXrAMSbyPRqNz5kWfKXHRS",
  "key13": "5rCkM1UW3eGfin3EH8jQ6XR9hzHC2VcQ1TaGwtasbgZSJfmwcAucvyf3eCcF6e3RziUoyxgqfdmsJD1vPk7NL6oh",
  "key14": "XStdzk6okWMuwcazgEQsctFPz3zmZZSoTnzmBwGhiqD3iStRMMCp8W67sf3nUfrqLThLuXu3LUNegBdTZFckZKn",
  "key15": "3BBSaTKMSJSR9LX2LcSz4V9qhBLGFZ3JRHQ7cYc9e95MisL9rjzZ6qvFC16RSsG5G13ww3rhu6dzUeBmKBfhkQXi",
  "key16": "5opJhm49FcumyoboUhiLwNAaLAvuiKLRp3ZZ5u38W5g236pvvLgTcM4zBS4eKd2MHxHoEf9y9SL8pGNWNBoHXfK",
  "key17": "34mztpeCCTLSmcUXQLh7srTjpud96RBFBsENtTJokCf7ezvqERBy12W5ij8chd59xbsnLDv7phKDmagCAHyRwknv",
  "key18": "2Fmifh6sEXKaXJ8jZ4twecLA8WHtmL8gvfD84n8wNJEtfnrG73KEfcAsbCtXFfHmDky6qUQteeTcvTbFEacVmkiw",
  "key19": "3DwLdjMnCkXpoqcv5UgjnTNwhMDpqxx6qGBC9inRprCPhWc1T14DFxmgpCNMNPhBnt346e728fXSbMRZUrYPgQD3",
  "key20": "4zofUazd23YJMWNM4nGWTb6FSGD5T8Q3g3yeGfDVqr2tnWKKmMkHFUXg8116bb6YadN5iCDmx9VmXse6TZWfXvrq",
  "key21": "2VRUk5d2CJ1t2FyGMaYXUnFCuR7oBC1hRCwT75qCe76QA7GHeiVLCQ5Qw23X7AUL8c2MERxf3tSZg6xkaMxpMJVK",
  "key22": "5Bmjum7E29mF97jtq5FJNYdUQ15H6fwtcPPXV8H9DQvbe2QVH2n9ekwUeBVmud969sLoY4s1DEFYQpiak86KsgH4",
  "key23": "4crfRzpPDRXw24UJbTQ99xUdwFZBz5xE8p3hyU7A4TQ1eEmoyEDz3JvyBsyRdr5NskuhhB1miyj5nYGu1MVeLFQ2",
  "key24": "PMmFubpgP8Zu4vdWECyNz6zNDqHCGngiudxwFU2aYYUxxzsAcpzn5UyZxvF3AykKHJdyvYSEAJ3GP41z5a7qjVp",
  "key25": "4pQrCtHarvz8VXngdfF9L886K9p9T8geNWeH8UnHsdkyeJQhWjVEz6ZKvZquqRZjXjGWD71fP3Typ761txtnBLua"
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
