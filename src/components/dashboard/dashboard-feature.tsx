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
    "5rv1LziEYnAbnJ2scbR27FVmTTBk7yFv4assuCmjb1t2u1skeFWq5mPJsKq35SPWwyfC9JYf11M9noJUDLVdh62s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYvEP2irQAVVdWr86FEMFFBVGz3B1KWRYG81RgKPogbCfgC52oQM6TjrQ2C2sXu7oZvekDQzwdcgWXueCo1485J",
  "key1": "543y5xzHHKxBpg6UxAnhsNHL84ZD3nw8X7fNACoJmUff5hLzwQtqFZ78qkdPUZ5eXWTW92cwp6poE7CigHbjgGVk",
  "key2": "2yH5MnV8941W1nsP1wbWf9BdGF1VUY5j3CKumPDkBmFJwSzJx5pV8cLjYw7tJ47jbfDZo6uUv8V7w4upotwYG2f9",
  "key3": "4SCm3VyX1XoZvXuWRsq75aWs1XFtFscYhWzyFFdiEq5i7iLHWjFPBWADV96tEZtLaCGpnFpGCRkaAvh6HRiaKdx8",
  "key4": "25opCSJ2qeMR2q5VezgLjZpr5bA8BPsmG6AGT2CFPFNDDrfQb7qfJpqaYbc7VaHq7BUCQwUmeGyCVHeHhujdQ8E9",
  "key5": "5YcqgYPSZXShaEcvcMGvBHduuZgzwZrj7jzvLWeAX7RJCETqcCyk41QUqqmf4jTMAhoTkNTNKTgTQXmYjd6Ln2s9",
  "key6": "GS1AMdtaEek9ZdQwszdWXEPktBTs3Diw5W7XZwH1cCFBEZMS7iEeo2QKEXuDSv5Xn5FbLXxFR5NdNA3Jeo62ue7",
  "key7": "r6k5AGdBqaqxwPEAkAjXFoA4YjatxBZsdMRdovYJCxn96Q4E1FMkURsDrHdZSUMSnL6uLQUSJNC8gbDhbQfMTdK",
  "key8": "2c4zBiLMnPFScWyFvBqfXM66NoJbwWuzDhRHcxs5VkFrSd6iSSCmXN7JYcfZ2G19eKBLbSYMMEcobmynB3mRtQHj",
  "key9": "3ibZWBmPRmNnUGym6zSzGgC5YK1di89th7WB4gERgsHEKP1Y2wruUKniYjsuw8tTB6e46uEHL5eRgZUicwLbpL5Z",
  "key10": "3uwdqcaqrqmsfoRVBnvo8QGaBbgXonTqYXgFpTAAo3SGf9Qw4MvZFofesZhgTv9LsMjtb3NPpKmVXNQPgWdQwSka",
  "key11": "SKyNW2iargnb7wp6oTwCfQxHGkXnmFMXWj2ygTvQ2ozrN3RRoj1G9KtG4QhcE9HCRW9H1jFbfC5QmDU2YAYw63q",
  "key12": "48ooQPKBkbBJAzPsFHXCxF56Ci3vwpRrwYrjBDAksrMkbQmJP7GhUZLGU2Nd1rSS98GtMpohXzRzE6qi1NZoUGP6",
  "key13": "5VodDRdGwxsvC8LX3UYY4xabipsSGHtY4poidFkhxLZQYrLLnnDHi479JBZJJTS13nX427o2ZRcmdYsHhrjVLgxg",
  "key14": "V8HH4SZEuwthJ9ZeE8C3EbrbEYrShkaMUJMuWjgUZKR4nBip8NKR4HvXbEphrjm6hXBDPa8rCGaopivrfqWM1F7",
  "key15": "a2Cyn3Je4dLRikQNFPvEptx4Rzn2eJ8zSD3YoPpNd14BLacZGEY3Rg87gF4xu8ZA4sauvrR4sHKQ2GeuWAC9qtn",
  "key16": "5215NC4F18YD14X5aNNb8rdJV7c8J9QaHR7MBWSJKc5cv9EVhtwKzJxm5MUYDbQBDp5AEtJZnyQxAovh2irEkoBJ",
  "key17": "51nsq3RQp818fhpZsnZHJD2ucMP1ZcsZcDht6FD2R2jNJsa98X2E8t2MYj1sTbX4yifWMhGSHFPvL78WWqhvgwUr",
  "key18": "XncqsoWX3zy8QgN4eYyy1i33S5Z5Vbb3o1upyo1p832qnzgrNz27cZYUzy1jw6y16ecbPmGX8YoJ3Ff8ipP9jjU",
  "key19": "41DAPZzMJoeRbrDEBBGgyasNJ6VUGRKANdjahUd4NaPsAAfuDKh2nnZspAvqV9TfNZu3GFv5MiBy2mZcmjxkpNFj",
  "key20": "N4HVWhE1dCn3eDY3nywZHVQmUmW7E4AwAx4p4WbgGwSbMqmLUsgK1mivdz4e4mmh36DqtiFzEoSVQa1DQEdLRrt",
  "key21": "5UhDKZHoCW9WHnsodnx3xuvXeBMnXwWDesuxDEQsduVPrsZ7rDFWWBzK4VgoqBCULgfXBZ6sMsJjcJXJ39iVL5jy",
  "key22": "5kXGgFAQ55EWW7XCYwzusRNkx6XtJ4CRLGvtoP3xDfnc2b3EXxYWFMQW5DyhRDhB4DvPxb7FHFrM55bZo1WcLwLc",
  "key23": "4pyJqqTXRWCkcdAhLpJFqBMMAb7VBbx5naR42oPekBbwJKLsjsXkEtWK8Ao6X3YjY2dx7NX3XfPRz5QLSdedYzw4",
  "key24": "5zGPyXyWqo5ft2ezpRm2b5D4VFYb8PdLKQB2EkST9bzeUohq5it3QaAQGXL4faYxdRgkz2D5q3uB8K4zteWnigZP",
  "key25": "2eN1qNSEHYnUAXEB9nSqTkhbK7nJDxhkwRF7Mz8sDa5LyNgYQVJGFNV9EJnNbUonh8rvipxx6hVf52nTeMZmh4Vs"
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
