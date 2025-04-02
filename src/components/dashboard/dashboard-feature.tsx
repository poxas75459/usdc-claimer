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
    "xSTZCm8L8JwXuugT6JB8pg3pSXejrc2PRcbbDRDoeRhiDoA4JAKJfA44kQcmXugjYbbEdHoAQQdCvSLudD4yJtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21xMjXBffrjvkPQViqYkT9P1zJ7HmjQX4qCbPrp7FGSGKcTyzRUe35dECvhZ8nyzWNaK2nKjHRt5fEWBmvBGaKjH",
  "key1": "hSAZ1tJTypmiJFgFEYghWzo7JF2wa2YhEM2naU1Z32MTf3VVWzdiLM4piUUqhevfRUW6s95X7mBGkH3jHGr6Cx4",
  "key2": "YUwHY3vEEAiGYD5pH6S1nT4maxhat7dCL3f8qjGa5E4W89Buze4cmPVYpTfvGWVaqY9UpFaor5dYCzp7AzMfXop",
  "key3": "4GXypKXpfFADwFi2RvhVfoP6mA3wh31puexjXJ6UVmNP129F3EswYBEZUAqmsXCtX2oZLHC2fVdQPNJmkdPYMNdH",
  "key4": "3gs7KqNPcXcGC8c17vHajf6rBx72Ui9ef9fhR7DppoyiV26MQ93Ez2QdYFR7ZNCziTaVCiteRsJynuWdyUyVT6Cx",
  "key5": "EKG9Ve5wP7AVJSD2Er9um9b3MRgjz9f918qMuCHQZNFjSE7EPb7VA4wH4sxWgkYEjcNuLSyboQVKuMB1zhfEUc5",
  "key6": "3htedJd9NpjQ39wP88T5b4hEq7f3wcHR8gYhZNt2BHnGaouKtzfxv4wputoeSC3KCqGh5iRppZuKXi55v3Vmzzn9",
  "key7": "fC7nyp7w4WZKuzkmyoyxoMg8skKCvyWfHvTKKt1mdDvm37fF9ejEu6nDvd8SC7YYBY9yGac2YXLVPkH9DuVyYhE",
  "key8": "3DY2xeFJft4oVa6jB98vafVEiYbhwqjFhRQoTadeybA3Fvs3d1EvixqiTsAbigJ6cnhzLmCqg9v1WyMineadT4LL",
  "key9": "2sva3PRqZY32g5LvsC7N7cNJ2v589myAxZuim2VkcUBPTEKM1xJXmtrB9UgzPt4rTEfCDacvHL289gZizHtgVbTU",
  "key10": "3Z6TZaRsXKB6md6NeCJHrg7UgqBrhQfGCtkr3nkjheTdcioZ1D6tjBiyuGi75zWYeqmtN8YR5TMiXssENvn1CEMn",
  "key11": "5io3qLcJdMD4QcGJrtq5qqXGcT1vyJYkM4XNxLw2mnXbJrJcr6WnJdp9KypRRTeu9BF2u4zZKcGxH5jsP4r85QPK",
  "key12": "3JuK7A9w7po3deKZfK8dUTtd8RA5jRUHmAAqzs7vkwrt2MoCVp1BsntTuopiYvDgvPrMPdSvUq94BCoW5qwFR1my",
  "key13": "2n2h7Gk31bBWdWdLCd6KSZctS3hJwVBehKq6LBmL1JZDX8kZFcavmcfuYhEiJoem6rbP3E6YZj4AAXKHdBNQJQtg",
  "key14": "3wdqqTBkAmCgjqkfquvZ5SNp9euNcqs3zVpoHdHEgMAKZDRLUeFMGHR3efmnqskPusahUaiSqiwS55Vf9vJ8fwtE",
  "key15": "2mhpX34q9d57iWdunZrrBpaSGPEzZqQxToZXBq9JMnEkyRqvS6txdzHnJS8Yn1sqXQvdDqf5FXgxKBb4BPCVp4uw",
  "key16": "5W1Czm84MSx4zqHP5TNVdrjn75wjRygcTSmrgMs1qLJy6Xhbz9gWm9GVxKM9CXsqgTXYQ3yuf5cRaqEcpC37ZEEP",
  "key17": "fpim1mVGKYzUQTwsayMLXMSyRAFSRrPzXPMB2Pka3XvMoxVGECZz7zfKk1FqVXhPAutGX8zLYcDLtnEpiceLu2G",
  "key18": "55b7H9rmmcJJy3G1CLN8bPziigi3Cnja97E1ywoJAL3LnecbsoqkTZaajw2ZimD4NkzkLB6vTPWAGtyHBdUnAPh1",
  "key19": "4wUgC7adgu3rPkUQf5ukJA2QmKdqZjD2bcwKcNso9x4QVTTAYiGj6eNhEd7ertzkYUxRoUwMgdtYAGgTYL19G7Hx",
  "key20": "61c3mX27MuAANUWXCYxgUSCKf15NqNNvisdwxrKQv5hHN1qzXUXEFVrJfuaorrtN3ZvitwxJV3HMop4watEPBgRP",
  "key21": "4quYmkNXEpUDBA9YspfGKYUSFD8fkL5hzUEAnUnoYTyhLZGzopA33FAzBHruobHYDgPJiUz88GH4UCEgJUckTTPb",
  "key22": "5Hi52AyKiaduhD2EvYgRTQGDsUFTooTbyHjPcXt9BX7rkt8QctiJZphApMjzeUpYanbfhToK8rN4Z1ycbRYBE69x",
  "key23": "5L7CxFhydAMn6vwHsuNkHYXdrxV8FtyARhgssGoKt4dmzsF32DC8zkfsbqtbu3NUrEz13kQeB9qQvnbijuabTm5u",
  "key24": "2ExBL5KTneRx9rY9odr8NxkUJVZAJJ6iwrfDVrvZn5QzKwAdxozChUdrSDCHazTnw45iE5kHRTVrhgx1yEMfZVrq",
  "key25": "2EgYpoqQ6eXBMv8MKJ2rPUunnHmx35XnCAeMFfHKnxiqzrWLkyBoBSXB8cPTv89weULZB2mzYjeGUYqkToEAnhvj",
  "key26": "id1aXWixytmLykNeWu4DJ14QwCrVA8znHmvSd7zv7ffqfd2jack5JzxPv8ZGAJvUu6Uaxvbyh9sSa2gTSnqUhvx"
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
