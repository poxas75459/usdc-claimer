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
    "5pcvpvYtSJNyX33aziWJdjmto72H1VkPPhiyheu2YXNP2CwgdeJNLWf1evsYbmCvy79ZDi7RfPj1SihYvCZwHGMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FAi5NRH4xWie6YbUBPr5YXLvnmAGqkydnjHrJJge4gqfYPdxjrjYmEdfosZ5TPqyiVN1dEdm5eAgsFgPvPD5Y1",
  "key1": "2b6EVWnvrMZZKtqw3WAifrE5QSV1rb6NrjBUvseZP9YNP8w2uBNFXVcpMKnM3xZjcG3iqe4tHbb3vSVMJ7HidkgB",
  "key2": "3Q553NqCDkf3YLh4daJUMyyn8aS4RbEndxAVR6x4SJHhHcwf46RV4R5mT8j7reTxrtmsaeJrybzP48UpotQWVaWH",
  "key3": "3AbFTUe8REZT3czbK4xKWMqU4KRYcsnsK9D4NJEY1hnRkFRtuVQjtFhbYJ6uouQpQkmcax2CvgWTSKzCNStk2A5v",
  "key4": "4WrVqBKekV4q5ghzfpxTbQwbJ5FfH4RqZrMwbTZEcFbXrB7WErrif29axnJ9FSYBgk9GwqiUtzYKdqJ2y49tMmYz",
  "key5": "TuH8xvuYM6LPtCspm3RZkjjEduAAVF6tP2GjaR6ftgkFPWbdMYeGmfvcrU4xxtUmohYbCrvncmodcbkaxbhJF1n",
  "key6": "4ULan8H5N5sVU4vjYqiPdKTdo6JAdke56BWq31a6HQmzyqhjo8GsFBBkr142G6Zht1GiFhC6HKKeQoDoSXNk5Ktr",
  "key7": "5VUec3EVd6HXA9CsjPsTzA6mBysD7u1QUsrzAE5zPmpK4ZmmjpsKtjCRF6DN3sY5zYfqvUejfJPH4aLjWNbGEMb6",
  "key8": "UQQgtc6xinfQdqxNFg3uYyiAKeotquHnP9XDo1TR9ojJhurGuLo4FdXWb4nGzRuYPP3uBNMjLkkj8hK3z6WUZzn",
  "key9": "2FwM3np3iKa4A6NohDpQbU15crduqNzZKEE8YdDztjoxafvhRUBehQa6UHu2xayAADRqvm7YZUzUWdujRMMa7jNV",
  "key10": "5k7piLunu6ji4w94EudNwc7CXcQkfpUBEZXvq2L5kx8Lb1yvD6iPrJMEsqmjVTTrBtJVu6FJsjLuqwRFHpwKuKA4",
  "key11": "3dneVabbxkbEb6qA6RQoXARDrMq1GxskwC4qmU1YC8Xaf2VfbXXa7Br4pPty4a9XybbXoPN56q3H1t2z8tZwE8kk",
  "key12": "uZdL4gS4mCuS2KpVpr3wLJVXVM61U4SJGCAQLT1SNzCKrDyzfrShbr7EEHYTTcdpcbwCG1AJLZtexzemMRWnzEk",
  "key13": "3JzNJvf2cqKQvgeM74cCYDkxVsCrzHYU9WvRaCbND8q6DbhYrcwWkBwCnv7LLTmoXaJDDK92xS16emG79bDZjm3o",
  "key14": "2mR1gUBEU86dF4JRWJZJ9QqCJX59XXtNkQosXC19LddMAYMgafSGG5jyux6ktnZrYABRCx2DfSCjGTMbnui8sybJ",
  "key15": "2wwwizHpXX6ZELLvEDuFKcU2bgL9xAoF3zLtwAk2aitGzxfMjkML7wLeuqNNFNzpCSakVMvT1a2JnitT1HYoFg7S",
  "key16": "4hcgbm1LfFi3w5Z1k4FiRWTZH1nqTrs5SZW6trnvujySMH4Z1MHmD4QPwK3Xh9Rd4EZdJUoErUfezuHmbufMk6iu",
  "key17": "2FqjQJQSgRYo9Y5cAjSY6JyQ4McYtLxDFpjc2gTDCW5zFDu59irFCkbUvDExHfxQ3k6FxdN4witTV4PMZnz5vWfs",
  "key18": "B63jV4Qs8rySjN3yMxoiGGwtSTkJcBBvMvrPeoPxCQ2s5bXLgcAF5SYx59KthaS4YD2GMfe6CjdLqbJaiWTiTiC",
  "key19": "2aJD74iwNoXRKy8BYJnq4UETYp5P5nawEWPcK5wmjFfB4kHRyAGycwKEsJJqGKUdjeD1kYfyvdnaSBjynuMr1DBu",
  "key20": "4Aqa2isVY4dHXy9e72chPgXtBBh9N4zJi6Wye63W2gyczdrUXx2X8uXe7Wb8X33iprrgHDB5xEwJsVHB5AiEh54m",
  "key21": "3ryJ6MDMgV7LMzQM6UrvmHuYUGS4MyvqTzdGiCKmgMsYW4hHQ9svU9iSVc79793tobcY7dkwRhR5zsyFgVAkBQ4c",
  "key22": "3afuuEYrJjqABYLgyfj9b3afiA6iw72jYP67b3PmSrkr4AcFZAN4hqhRG56XhM5PpaB2S85WxHF6LhyPS7AiF6FY",
  "key23": "2iW72hCoAUaoP6EnrtCD1Sg12AYe6hZ84xEAPC14g8qHJFU9Gcckhc6wMYE2PRMbUqKDS3pies1WpbkTrYYa4bs2",
  "key24": "5apkDjBj8x9zba3aW6H3oGhb2STccc681j9xCz83h7R43fFrwm9jijAjVm22KtLX2nNoHzQ5nR7L3f9iNg4Jtyt6"
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
