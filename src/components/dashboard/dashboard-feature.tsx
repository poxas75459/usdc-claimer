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
    "645sYMC8kEDKA4ZxvLWdVe71GaUb1AjUJUunRonZH1aRZDGkJhnd8f5AqAydwFLPduH3DZoF9umcVK1VAsfTJUHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uk5rycot2CvszKQBfPJAje7PUV6HJmE4WTU4dXCsyzJN9xhJxLT2WLxVncee73td1XmHgfNEr4iCGGTjxovGCj4",
  "key1": "2YT8aDnbwoa2DADhyfVkQ38tRoDQ7ngscJNduvcHfyvEt72a4hyQ1CG5PFYgi2cp6xFNKqYBBcKFs8J8jZu3vUqx",
  "key2": "3ZzWPFcEDhZ9JtCsgsdsyWQDGdg8A7ZTTXXYRQnq5NuGsiwPKTdrQsBUg4qirx3P9Ubjz6i2GiTV6KjJ3uUEZKak",
  "key3": "e8U5VUkFcXquhSMCZdpokMSpEKrmLVEdrZsjJSu27sfUmu9MnGRnYtrTXdrceJqb1KvNudJx8ejJMeJwbSKabAX",
  "key4": "36Kt35c9m31Bj3ktPgk79VQWnn9EWZcQPKzDwBC22K7CgxAzDuyDxSeQAMFE8pqXb8eVjrQ8i8U6StAYuuNA7m4u",
  "key5": "4ZGJ7gH6nSVakFeZNH8VETZdqFeFJwkSvAuhz6ZwGT8qNA9YSkCwADeVKiMSGBENQvXZdpZ6DAJy6iGQ6kWXr4gX",
  "key6": "34jReApm2HrCevPRfSqrgF6CS74eJTXzLR5d76MpprGWD5wB59LvpuH9UJJRK9BLbyCtQDsmNbeQziTB4E1qkFK5",
  "key7": "4gy6w4XLCC6t11yN5w74Sxsh8ZKTp1BXPgU4TtTXqfPEKSbAyA1w1bMptrdbA3Yg6Q8mUvombyznrKkcruuGgQRH",
  "key8": "4oC5QmWbtpcoq73LecHLFcHH9YgQXATuPbXw2jPJQxbgC9qLwwqY3jbwqFvk67SFGPkUWy9XWvkUw5W34jnyUKxj",
  "key9": "57R8gxXmFbuG5LFp357fsSnZjAG69kUGrTSdE3w4rnVoGGKvH4snBpLJ1zrH943feNRpKMhBT6MbNmAjLN3RaRrP",
  "key10": "2rN8NSirYJui94htugXNAYMhT27a38CiuAqZr4bEmYU7kmqRrW5qVwCkfw8o2uo5cxt3GsW1qgsc2uR39zNvAWtj",
  "key11": "4Rsd4kEzmu3t8urXgH4soUM5fS2cKkWGQCBHNXias1coBpt3WiEcEQfjbbthgJEPGFcCG5Qx3PYvpr4kYtr2ngnX",
  "key12": "2zJRnbEvZNudZjwchHT9j9qHvqET3szfvaRaZ1szSZpBLhPpPigD3FBbBwiA3tTa91JyWqH74roF4svwPsHeC6Q",
  "key13": "5fWAJ5e44s8Y7uwUWhstm4i4JLNbKttB7XxaiGpijKkfqVE7CdnH8JoDfhkRV5TGzDYRSSijAckTtnX6zftGwyuU",
  "key14": "3aA2MPbb4TxQMeY8h4N8wi5EBif9QL2BNH6JkiGE37aSjnDEHmxrV7H7cymTwtkQpuJX7UsPpQgSHwZPxJ3Z1Rif",
  "key15": "5QTHG86TXDmKonPcaRicHsUxwt3wokeNrKSZZkKdqLj3hKSG7kzhoGFz8mwAwpkGoponSrpEm7XPgZCba82iBfdj",
  "key16": "2PNyqaZwdodN3ezUKuy8wkaVgAbeVWxvTJZSe645oSAxcaAARyUEmnoR9ZjBf8owo24Wu21apoeE9t3Wtsi2PyyQ",
  "key17": "4c5oCe9mWVXvCArrcpKLxK1zLZLH2CBTdJQaVrh65x4N5mGuRXoUVd2fAaZBMnEJ3VdQgxP95LQKmzdjr49n9ZNv",
  "key18": "5RwRKSazPeAZhNLZDbgRnJ7m5C3kVnN8PHYG7py2YnQk4QxLq3kZRxd2Zr8xxVH51WHSCADdGobLxYFFsMGyAfvR",
  "key19": "qpXzCDy5M2m12W3TvNpBZRh8HWAuJZa3KevrWmMJDspBdEcpZaDGeVYJF62LSZSz3WVonxoHd9LjX1cX8NF8NAz",
  "key20": "2NMzmeCSePMqwP4c6CkNQWt7wmphXWiSxdkpc1rbydfwy2KAUGBpYj17MaBt3LQNer3qtBJWbzbYkcV1oVTFC82b",
  "key21": "2cuQ2iXfKSu5cFVA9oxtTZcnCvUVvuLhWK3FzbTnZJjwYh3DTBzcJKo9QZwZyQ66ZVaphHMSJQJLDDu3AW9cj2bK",
  "key22": "2JJgDxnmmHACjNhA7rbpMftJdhSpx5Rmzq86MN8pZvsKvptNnnrjEU1to7YqfFMUJBV4qWhKuXpRHyzgG78yer7L",
  "key23": "5g3GXhgCT3n5EyYiWbYEZXKxT7mBPkMBscvF5HEtkXWUiQWewJNck1H1buDrVD7L72TYcwWR7kEZ7a9uq9TGUWVA",
  "key24": "2oSARpVUK6GjvvmrNQQUFjCa9cjj6TDzZyWogjzaFjhihsJPVhftkQB4HWpSRfWbwJeyPgbicwFz6HHDZ7AtAQXN",
  "key25": "4vwuUiSLdCEEXvrEBYxNvmc9UkCRxhtcZ9e62LJKyyvWg6e4UyaQeakyFPnfJM1pxGDsqwGQX7Yj1Gesur1hs5qr",
  "key26": "31b3HBudg5McAdys9ToKRAuyvRFZWt98QNbHDAME1dDMGbFYCRPxTM6BwV1TbbVGcsqt24XdbJysx1oVyjLVJDmd",
  "key27": "27qzfY8t8qt4vLzvvhQWEsxqY8iUvfzy5psFuK9HdX792VUsWvuem5kSKTtD8pNzvXqTGbzgH3ZZLAA14S2YUVzB",
  "key28": "3F14Gee3a1kor3VqGhyugiDK1my9dRUUNdTLudzzRY5dh4U6XsP3zY9fFZjjZng6K5J8JNMNmFyqNb54Egj7w2av"
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
