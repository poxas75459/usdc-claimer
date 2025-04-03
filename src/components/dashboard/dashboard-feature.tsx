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
    "5sWi722VkfXrRUU8ioZ77cVgNqSEHFZnPJ1TsY8s1vpojkLVyBtYVSn1rhmv27VDMqv2TrW7fCDFPiZDENkaKSoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5f8HjiWvVdidbDJkoVcM2jTY4BkcJDYnUg7QrB45qL8zx4PcwfbWksAX1gmfMALSLQuDwPBmVhEEScTEDW5aoW",
  "key1": "3bT9ZTyXmvD8cc93MMJn7ap5D4bK5VstTTJNzgiFf3QKqvjgZgyMwM7vgAvqp8g3ueN7HHE95icLG7SijmeFREh5",
  "key2": "5ajNH68fFJYSFXBKBWWWHftGQB5Xpai9eTKy9MVDnFMdffTEmNiK9DVq8dVNzFs2h12jxKJ6CkzBzjjTiJWrf8gd",
  "key3": "25HtvMc5rq8du4b27LRhRn2TefYZQSbEQquJJFNFDcWubraHjpsQysX5ivYZLQJf79Z6nGKJS1KTrYZ7bjJB4GPy",
  "key4": "2XZ2cRoFWghpUCWjNYuaVUZcJsWw14zpnqczGnXceioBBYr4J7NcgveoZujK4n8Q5gA14z5W4VtzmWYanFoGjYi8",
  "key5": "4Hk7gT9DgoT6fyf82ETW6k9vFMns4oFG59DD8fvHh8ZKuEqKX8JfnBS96i3tMyuTiWrjbymtnNnbPtHZFBUGB6nq",
  "key6": "2RecR8vao7ZE6nPGzDifnuYxd1TZkfVDXgCGgcNpMZC4XATu3mXBfjPGTYVTbnsw5qzipsxh6cnUM9U3UctXvDr3",
  "key7": "2xBCGMWwbJFFTxjV4KgcsFW7w4ANMoGY2Lswo8it1WPxGMPS2TXFfv9NdPwToiLg3UusZTYUVwzHxAfXNvj7cVeb",
  "key8": "515QBqVUdR1fz8bLtRuUrVr1GM5J3CzUUMLXPjRACaPaZ6jUxaduSPRN32yS8Pa8qjH3YVKwesGyASwwMsKYdWK9",
  "key9": "4syXvmrd4cv6y9RBp61uCXD7crLWqEDFmsZ8YDNeLJi3mNfdZphPyFk8G7R8r6f7UTB397HeHgDEW4oGbtCFW2gu",
  "key10": "3whM2N8VbYdhGiAMRYKj1rx7FacCt4x1Mq9gbqRignhZS8p9XgYFVKmszJ9bnjCQDRRkmWqki8Q4ibXrMG7j6Xbr",
  "key11": "UBkGGpvU4chuiKM2dcRr6GjApuCVk7gBAptUi89U9qbocH88F7CQWFyJbCeLiVkbNypsj92rH6w2skAGRpbxFTb",
  "key12": "59ciCk2xawLhgtkSr7w92seTYA9AauaLGEstcM3jRMMBf6XZet7Dy4VwPpndeQyYDznnfnKsBU6JyBRFoPkx3kbH",
  "key13": "5ne9tehqMf7bFjL7czEMTVjnViyfZjt8YYYQLR1jfh2kLatFGqTq2TwpQZFU3iEFe7rNKT1VbiuoGySqKA3CpSSk",
  "key14": "2gnasCM4vbtF7nMiemwacnsDVQgvTsSNNcwjv299UNgaCfdjWqFJs393yDscjHmDn5RfTgxWXxEBYzxjAGAU1nV7",
  "key15": "3oJeaYzZNMYgYdpsg1qE8AAFNjb9u7yt8Z1Jn35UF1nySswJ2h1RQMS63g2yEcfYqbNf9WYrQUEmjqndqd4uxr4C",
  "key16": "2njh4ZaD1es51syTZh61FvQueBdULqthL5zUTqgRSFopN3Gyddhh7BEojGAy7KY68Nz8i1NLmyBD2r5AmukqPb3F",
  "key17": "4hT5USN1J5n91B8BnP26UNwkdQJxEL3SH7htaeHHw7r67s5EPihEWeQWSkKzY94vZkqu1Dt4hE6nvT4Z8fAxLMYJ",
  "key18": "2UUtCFkWA2uGgR9grsZHadMMmaAUCbhPBxGzS5bNniQ3zz6pVxjTbARkbyg63B4wSMCghYcE6SdBKpDV7y3z7gNx",
  "key19": "EYaywPYomqY9n8jE8ciVXgT13Tn214RrkpGTNpStLQ3hDeEZGbu6ZCfAUkBdEWDMyfwn5XG7gmcPXiiztQ262Cu",
  "key20": "4BCrA87yo9Go9vGXfyHMGH2aUT7WEEfwvhC9m2CupsDPKZZoYJ79cAYZKkttEESd2kiLAqCBVrnZEFTb8BbBkmJ4",
  "key21": "2vAZK62P77j7U3XcVm5u1sFh5r7s7RnUhA528UsPM6kGrXTsTYZtmZX3zeATbxxCMzBRgVtYxrsieSe2eo15g6vi",
  "key22": "2CmNpXc1ZtgpLRg2oXYFdongsB1pahPThtJWXFGBRLTdP2dbiDKbNt76d7pBDwyn55gWrUbiJ4b3cwAuhRLfF1Z",
  "key23": "3cLXG2HKe2xENZhRDz1Ldi76BCUgGF5KLEeKDY1yE3QD7RA7ZfbLYf6o6Dz3uPvqzCSQcbqUHrvg5tV5MTDb6Rrc",
  "key24": "47Lc1f7Jw3gEAhJzDNRmojQF4hwQs84ALhwqQvutxL7GEuWxUVN1m9TYwmeKgxBb41nHp7K222M9Mo9RELgwFYNA",
  "key25": "sC6XTtXWfZVLB6BiXpKkerNZjvBERUVNkuVage88tWvbms7By1h82BrZbnWXRqGwb7Bwm8MJHha7bd355zp2Q4Y",
  "key26": "mgyRShk7wAfk5gmWJg6TCdbXroBQrkFCwyKHZjTUVtnbdDNno1yPJEeTDmmPwXkouTraZJw6UGPujk2SZr513wz",
  "key27": "4HYyL87eKPXynesdp35rnUzVRFtkwW55NgquZW23aAuDwhmJ16AdLVUmSXJh9t64DtoCDNLZGJNP5uiDzskraDZd",
  "key28": "2AScaEQcEBdUMBKs5NZNuQC8F8XR1SBANN3vPpNuZFTfnxDGcdpUZbnieyPk7NanrADqX6odH5JHihRPM4DfUZ6Q",
  "key29": "4eZkkSoC9XEA7EtQ9KK1NzYELjRGm8TM7g5w7uj4f4p6oGXZ9fDTWBKBW1K2KkX6BKwBsPK4c948H4aYUNNJhSxP",
  "key30": "4fRrkBRSDk5RmCFxGPkWbWxMKSG6qDpVhM9Qiy5ZToQP5kxrnNxJ6U1ufxcYibdX3KHXhWvS1pjNT5r5xuNmrXSp",
  "key31": "4Zx2DQjRin6hcwDQmzr4VWu3QwHyuMk3NXRz1sikSyJ7povhHj36DyEvYhjbdM8zWr94baRLaMNzrb6spoNeGQHJ",
  "key32": "35piJNa7oFNErDDrYMM7KE1JZzZ6KzZCHhSMUpmgF6mht1SXTh5MoydP35oAX7EWJyF8fjnf7W9zQz3Y1dRoRm34",
  "key33": "54DgHicHHRdsXD5R3PWSzAEXAJ8qcKSQmrNaTbDPBRb4oR5nAWgFwYYAV6URRbg4Mu5QqmacqBVjtWGf9TrqLvz4"
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
