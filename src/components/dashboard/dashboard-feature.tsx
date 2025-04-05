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
    "5TJbKZzf8CChv8ZaqtaGyhfsQYKJzRNKotpo4F4PcYJa31zMseQMr1SV3CPvojcoXPjUXuomgmWR4WZUWpc8sq5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CahsDBBVBPxNYHbkNt7LTT4y9BnVPkS2MfCSq7KNxK8eWX2WS97BH56H4vJ5CAXVycEs9mCaAexyVqbyJUPNCf",
  "key1": "5H8pVhamFfLBe8opB4nQTmoeR4WegDDgwV23RhEaehsLN1cxU18kMvDJWewVFix9acEjMaBepZWpvjAKHN8hn2bZ",
  "key2": "dFhZqmaYSfcCkvQXYSoRejcNqB3i8deUaBmRCVaTW3WMYJJto1xJU9SFjJrqwDc6CfvJL6sF8kRxgbLXyovzWnS",
  "key3": "2DbZEafdK1qKYp22owpE6eqGLVYVzzjJsX9mp4tjG4HUDG96eR24jHkjpEN7iMzpb2C88ahcnZuFmUmAtSfwHwtr",
  "key4": "3HRD3oBxWmQjVCt3ow6Zb4u2SpqVJpZT7dTY3wskztML5gZGQdtkMbYdWraG6hFEPyNZzCrEAYmFemDZSeueHF1K",
  "key5": "3MWidXzY1rGAaF5aycJ6YxgfeNKTby4dVsr3FYhQobE5ZQkkz8vvRMgQBJRuLKM7FcRPZMKaakbU1q938pNRfcxv",
  "key6": "2pcURMqgGmsZZVxGBFVrmv8KwxppjdAzyzRVa7NH4a6g47fbYxPnG795WDMBGi3f2MM3bCkNQkt4p1QvZVGZvLse",
  "key7": "55XF3pSgk4vGT4zXV23XXgRHxqMLkoh9dL7H3g4V6JXTyCCRRjkb56Cxa6Mo3C1jZrsexqzkrYT3vqeZVQ11eXus",
  "key8": "4FfLnQeNwPDLx5GGKH6Uy57hnSQrvTro1gKrfE68waUmWhFWu9vvXp99tFexQygsQ4DjN6bxLTUKn7b1sJcJa7U2",
  "key9": "2zSdfy91oF5AxF19Awiki7LdG8WTWEKfHNT4ijJg5nbuThzgav6r4zRcWXovR1hjzXBAJTcox7jY5KJYbiMFreT6",
  "key10": "jRJZmgLxRAcUGmrAhfE8QMBst4XRcrqAHa5Fi8HJS7TPojrNGL2tBgbBDsYath5ykE7D19ctWiJoG7x3xGzyBDD",
  "key11": "3pMZ7FaT6gAwuid5efTGSxUrqMnm62Hfh1bAfxwSmcdV6yfHkxsFfRmvTMy5oQ3quGDFkFvEnXU45nbe5LdUJqsr",
  "key12": "32ivNZbwp3XjFkHXjBHLpdDUrZKh6695bkamqRvfYpwMxrzALPBfaHXSLB5BjwdP6FUYHQfywnFYwfavpwmu9gAu",
  "key13": "21TZ4SoCKNXMhcvu3QBbGpRVACMNntyk7mfxcBcxMBsMzegADi8sSrKb5MxMWji72m1vHaukt8cmXP2e2xyDeAeS",
  "key14": "3fwSoVjEGHa49fKhstqtHQJRJp7appks4zdSjY263KY5mFLCWYSHU5qWani7pJ7ALg7J4LaXy6uLJE5Yi9EmRHmW",
  "key15": "2TVsFJSqmKtF4w6wpRLQFLURRCjzoqa2wpSmKeCoyXezBCB7oNvvYA9wP1K8sW9bdfi5bRCuh33DtvTvChYNWHt",
  "key16": "4oJHvbpz5PV53fMbzcRESoZDh1s7Mpmuw7gDKUYKEgcZ4gLSu3fjnxKEHX2FmNriJwvG2omRuULkuTmw2z8ADKKP",
  "key17": "5R1j4YaeicqmWWJjNL1FtthEN4TG8kvKSQerRZnWfwx5y9C48UBW5BBW5U7nGmnfuXaztnvEA7wBGY6Hh6ngxTf3",
  "key18": "5Quarcfw9xps3nEswf712qyAycwAxtNDqBSEGY86KfqQ3J4JU8TjFVfHH8RcGJHqNkFLSio2CTgYaNsW8LXugnY9",
  "key19": "5FKWBd6CmyWnA128C29cYCYjzbpeEryKwcUw8GMLz6gcNAf5R5ArbG5wWJPr9CAgsFYSGgLS6vPptKpgaDUbpftc",
  "key20": "4Ur5b3qbiQPkoKYyou1eF1ZivDGsA7AUzfJG5GKqMkXscniSEXdYhhBaD22imeYS82Pd5xYWvxpgngLTpmr8pfYa",
  "key21": "5WVePdEh4QKdBZ6Q4AWuNPRMQS9fW9o6Foyz7JzYWwFY8vcSUWzPaaBx3NN5eDzvwMpbCQ3zr3jdkqvWCV3hT7mS",
  "key22": "35RaPXERmcXjzrFqRcptnLpcnt5sqivU63mjsggEbAhbUDNCsR6GZGXhN2zE7xQ6HqfajV8VDFKZSZhGXvF3iBpZ",
  "key23": "3guGzHChxKH9UxPLsFYdr2YoqvexrbpGgwwk8JFjZyJPihj9ziVktVyzWxvFWewiNuuAT82yoW1vFZgQ1ZuH6VkK",
  "key24": "tMDCp4zeCes9FaF77V61NPbHXsAdLkHC5odEDLNCaQcsr2LYpqou5wqQCE37UvhCYTyVjHg5j6dqSkFj5umQCrM",
  "key25": "3tCyMvE4M1BmqKmabbixTjEAWx7ULf7wboipq6KwHqqYDWQ8jPBYW1KKyv3ZSyEi7maiMABy1BW2BEGbmaJy1xRz",
  "key26": "5hpUcJwUqWF6XdGj1x4T735SnitgTD1mBHckyk2Sj49DNcdhWtyxY3aof6dv8Hjo55jm34oKYPe7hHMuHBjCJsRg",
  "key27": "2qAVXa2z32QatWm41YrJvdPepJpzK6mtJVHpEjs2aFha3B4U256BuHAKcz3RC9vsxYwT9ZW6SGAMzCLX4FCyHaqf",
  "key28": "4Yf7ia1cuHk6N26Ujm3dW2aCXoZNAALM7225dPrKF46sBDWyqyrPwTqferybnYdq9R1JoG3rgRodsaYvbCbxjD1L",
  "key29": "4ek9aKAWQpyZnkyq9bFwySQY3TtUWe1HADqCEDEbi8naAzJ23QD7K3FQLePb2rh8wTzAHXDFBZM3BFTmEotKb1wj",
  "key30": "5ibcXCeZ7ssJK9yaFspp8QJTYi5i2vPDixQELy4Q7jCVBoo8FL39reBU13Qf96mGS5ivp6Ex9oubjr6RjzzzH8C",
  "key31": "2vJdYgSYpxixDStoV5yoVNU4sLKjMrUaBHdcR82VDVCDuAZNqm1dRJ98D2zfB7p7fzqsBAAQcLQvBjMQT9aidCEw",
  "key32": "5nDEsfZ9c9vg92jvq5fZyDTCiHX3vFT2T1WogjvZ6NW5CQ2gt26EMbYz9mXx9uZ5ZMTDJDvjLWeRN6TUhEpVbxua",
  "key33": "4uDxKa6kzvFKNCBsubs5NsmAS6oycEthYJqYK7cyxDkaLYMfgdHh3VahpuGbD3vjJykvmwFtfGEREVjMZiD5k5yq",
  "key34": "5TFMZTMVEbfXXVdSv4aKbEaXykaHUL68S2XSdGUggnCX4sStQn2ifnDw8qyvt58CGUPFCJdro33q87PFKtNguoBv",
  "key35": "5aVs47rZB2vUapEAyngCuG1EgwMVRr8U44Swugt2U25x4fDQYg1KVKyCzWZXpaMW4Mti13BxchM5o6bASix5EpQD"
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
