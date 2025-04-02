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
    "4biiev2J4RWWM8U8z5SRx1VNFx3sevVgDqnM3eH3p2dbTkGeUGvq9vmYHYYdRQLfcVMh7d9wyairUaFWVJxnHhvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ezShPVUriN3V1P9eA5bCpZqfcvWJRfLK8mwu4g3UpK4E28GFVgf8XZSTr8fBHJk8XfN6359sY8cYwwWSyhgeJVn",
  "key1": "4bZLkvdque4wwaCtK5NAbv5kqBGyNQRPh36svX7qusvyhjvj4oqgL3QJwx8e4SCiZScifhjPnpHBrEWvEng2h61q",
  "key2": "4ajA6F3h5HaMEcB9rUJbZWU93UsR7SYawvPacCraGGbA35egEWSZizEGLa97hf6A8iUoHFfkpWECiNGMXN7fGXE6",
  "key3": "44jqnbqKPPVVQozvi5yvgwP9VSzUTa7nKVNP3YNyGBSzZG5y4KXdH9G29d37NvgZv5N4HDBtYvvZQuUtmJ5kZYm3",
  "key4": "3fHGTvzcKMjcUho4LQ88Se73qz57EeYZ5rpf6Fkeo1USV7iTEDb3wSrspchhp29bYQ6tR7f1do6NdqHK6UvK7yiD",
  "key5": "5D1CkVWmAVxZPDcDa2XXRzBPQBLHPxpYikhUZqanb4uH4yka8sc3xn6eB4zFBrkWp1ZxxgMXV5Rym1aWr8STijZz",
  "key6": "dVv8aEr8KJqcSGQiXjCVrAQrAEGzemMkmer3XmvWvzwjdxmUAQJfgcTBVw1Xy9XEK5GAV31BxseUCMb1zFeYDR9",
  "key7": "S81jGGQoy841cQGbKZb1CzASNEBpX1MLVAaxAvdU9vnb3jAa8eNfFB5kGaCj5fA6qhwksXgGdfqA7HSwoDvtLaw",
  "key8": "4XF99iR5JFjqafHzDBW4oC7rXobkQqWRvoiiEwsKvNWWU2ZspSrLSuB2SkAr7vMZgY6vfC6eUh1uEus7X2pjuukQ",
  "key9": "3Rtv1Td2sQ4tBqULvRF7CNHK9s86xWZ8oMBi9pkKVBJRVe7k7awxcwGfJKx9qLeJs4QvSHFyDLHmwm5mb5zCMiz6",
  "key10": "5LanwnwRSH2Lim7XcYfMEFzzAoeLqumPA2JSfqbDrQEqLRC5v8aooNTTUhZErjXWEDG1fvmRxrLkAQkvCy6rF1aE",
  "key11": "cjgiuU4TrjkJ2VeSFmttS3miu2K38fDExkXmDCbn7mUoq454FRuPDYiB5VUeR1kkBDGt1rDHvANuBiAAqcsrudB",
  "key12": "2NxRZcPHgptnzhXFL76in93RbdDpYMAqCmH6dRNdfGEJMxfYvWyhs9hcTQ3U2fzimV3jNP3TgrUd8nBnGZr4CoLf",
  "key13": "3361e9qD5ZFx2jkSwbgNdyjAiYjrFDpdNfhJeK2L8aefgi5UvQMPZdDkBgMHYDs3z6C5kUtUhJbXCyK6AXaT6Ewv",
  "key14": "81g7USmZ24mvUat24yJWi1rLRkwsEZkNjnzxPNsjwMDq7KgKa3bziF3e5Gy2XoPA53jXToZ9Kq25xFhfAgY9ri1",
  "key15": "4pusZooBUGp2dHUbKjbsBysJqFRxt41cm2UGWbGLgcDbzGc3wnhcv5YxitpShGADRG8zqB8YSsMxQN52ttZ1BTyG",
  "key16": "zdmNKsQzz9WKUxAvaJCDHRi7LKmDVo9PHKxNHQXHJvZMzu8tCM5DZQeeVvBYisPXW1xhM6qvTiLpS98b9LEPy8V",
  "key17": "pQeoGjYHs6Y3QcTUzCAEFEVDZXuHhWvFDsvu1ZouP98gFAA5Bdvg5fdKYqQNnAW8qqzAWzTpbQ1Y73ockHUq8Nn",
  "key18": "2v7HdXmw93yfSyDQp4PvpyWvE175Yad2pcrnK9Y3yhW4D5yNWTDM5XWsC8VdwLxgKReVjrUYPqfsxwbjrKtiYM8g",
  "key19": "rWHqcviVFwcQyTaNNoNqcAsakf3i9EqPDgHQTMjNq1nf39DdciZtPxx63xxJoDohi5iKxEhEkdmRbKSBQTKKfwq",
  "key20": "54AFGSX17nXABLC4QMWU9sqbCYDpNBjRnUNVu18X6tX7kUKMjDPanWJJLFoQoUSG5oa7Yn6xKV7f7Fq2DdRFr4gU",
  "key21": "5FstrpjdNbZmP2fF8SoQvFXbVtdqRosNcxftzNwtxEgd6Bst2URj8jjkzn6EP8Vxsye7DZDZzhHAHbXhK4CFKEXa",
  "key22": "5nKW7Ewif3MjkMAM4zG4i69zMquGbVCJHn2S8n5rkyj9YoGmEhWSW9JNrZcq31WsyqfdDkdRK9q1VU34i3myyGov",
  "key23": "AUAHXRZpMnk8bnXn4yREPPhVVaNjDpU9nm4Qi9EHTThnfE2msCdkt1LMuR8xkEwBU5Xtu4dW8hUbehLRP5Q9Rpn",
  "key24": "5jC9qRTVKj7Wc3JJiaujLYJkp8uvo21MJoiB22RQyV7rkz4JsihrknahRQLpQFBwVAxQfB5dTGRzJaFGnh9ABQCt",
  "key25": "3RmubLF98LVjxL9q838RHjVk77bKGuXLByERJh9Ga9JLqEkzVfJGdKszDz8EeYNuy3EFH1cRRT6k8He7HtYZ7sGH",
  "key26": "572PqNj43YjNKygqM2v464ht29bVwdLkMcCuQ7JotPpHnofofgcyKVA4tHeA5RbAymnhBx2dv4o6cVubSRnX1uvW"
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
