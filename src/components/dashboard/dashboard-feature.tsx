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
    "4LNPPrvhNuYLzvgQpeHusAVnmMkxNMkW89f5Ln33RneP2juMiDdyPu5sDhcMT1j4GEqGJPmMCVKvTTGyvJGv9Fcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sG4VkoAFPtrrgPn3gGXCYPQ7r6etyAQe8WMoA5c6UogmmXMYAGQHagfPfg1RfZWimXn3WY1MtQywBawHPZjYqsR",
  "key1": "Yrf2qHJSRczLarrk6vY64jP8SSNUaELrn7TqV2tS8YT73cXdpqfDYZaDQjJJ4QEzbfUqkkCg89xz1YVJYmxT8qW",
  "key2": "PeiWjR8kuLzRGxJX6sb6uiWgCZgxu6QgiqvCfFPnsZ6HQ5pYk6Kja9DQP492SKT2CxCzEPQnmzHvuHEnZuK3gkL",
  "key3": "4NZfDeFk1n2pxRWjxYGB9bTfRMve1aE1iahMS1QLuyxSQLc2jFPxXYfWrZ1qxogca7VfeFZSXmxQbTJAzVRE8syZ",
  "key4": "5HbNXUWupytub8kpMvmR11deTgmYvsr7zWXABAyRj563rp3KcxaGT5u7W4Ly9Ab2Hj59PD3bBvmGHyjBva2yDREK",
  "key5": "2V91HEfPnjHVw6eBZ7Hi9VJ9V5m6g3VFnn5wdAw3ViyCPsddtaC6XX8sbWNAPjg4eQPtPHq2wHV9pjsipo2XvcAS",
  "key6": "2M3Nm24Bx2M8DKbFnLbCth937JrP2HqjbFczYe3TXwhoUZMXKiWp2KokM3dxNjJEA8z2y1bTLqcvYGoNjNgK1kze",
  "key7": "3wGbhM2GGXF3nxqCYN2Sae1uGTcGRFszHy5xvbFCryYM4uRSdJ17UMN5n2bjeDUYHLZaP6LcA273SioRGTuA66Ch",
  "key8": "VmqKGMv98oxU5T6eVJzi6vWAAtYnMBDXHJZFpn7zPiEGRw7TJnqi68M9x22a2qa47sFCmJLLMFHE87Ax6GtvQjf",
  "key9": "pLEY5s3d4qGWLuAUqXhvfUVp3ExZ2ena5pn1giMhTdmZey1NUHGSzsYnFyXrkvn7s5N6YrYKp6WnXgomwkZNjvQ",
  "key10": "3wmPnSD1j3FjCPkWCHqin6N2N3itMv3vpz4iqPCUhdD8pLW4RdaBZi86HHCAJkUaxEJCqGm17t45LVrJM93p8Lka",
  "key11": "3QwNjrMGJeaHqM9CjYhT7hoV2dpREY9j81bGr5Trej9UwidDpKZ5ENE12wrVuv3QKreDY3wKge9L5pLBFfYxktu2",
  "key12": "NXzy12PHfiKz5bVXTDQnTx2uYeSwseUHcUcJ7qNKL4cSRnDvNsij6pqoUAWbdKkGrnTd7XZRubMQ1SJ1bMzyXCj",
  "key13": "2t9SwHTdLForbjVAgStT8RVZfJoSQqA1vtvmF4PpQeghLTedqkTRGsLuRnHtneBt8soWTcd3ffT6bwp4h6sL6quu",
  "key14": "rdZdkG3u4sDc7ryzxKbV7pEJk7hFPgzVBrrq5RRYk18GytXCHb7mkg1wNxFZ9a5z7gASzoHXu3WbFeJ5wU8wHMC",
  "key15": "2W7JfLQWYnGU7nkCgJ6C2SNze4yE2FhaiVNTLnrp99o2sWzexFBrs6dri6XMHQc1MXeYwHkRZfHQ23uRqEdchQcy",
  "key16": "6tuZnoubJfueQJaEsPYhc1ifXJKbZHZDNxsDps8qiVZAJQLF87qVwVpgLz7bTAPirxU1xYcHzC7HRaiUXoYLkpZ",
  "key17": "5nUUQRzES4uxjyBrvx8pz2aBDjHBnqoV47xdZNqgHjSkh4M6xntNGMP4N9rF8pvgnqWmZQUkpjoPEHcuaqMnXgtp",
  "key18": "2DqTUgBpRk1chGxge8sKTJ5tXmdJzoWroRnKyxD83QR8CUo9zjkyoE96oHA32JNRzcD3of5d89M1ByfpV7g76tGm",
  "key19": "2ub4zLoYjbxGGZEX5johsr6oezrz8SrWePXGYXRUoAFAqiiPTP7q4Chbn5uNZkZZSBw4a7rTQWCwEyFKRhfQmkCW",
  "key20": "4chvBqJuWG28DfEXTZDnMSG8DQR7we786FkAkPvKrHb5aq1BxheNVCtn4uPgRVzhGaWCuLiWqREEv1MwZd6YjAyq",
  "key21": "63EFNmSh7iUCnANZ45Pi1mLYunZaQW3gmuUd1rapbP2JNgEMWeh9RJHFVhxtaLSLHVvb6dSKHinbRHGG51KYXvC4",
  "key22": "Kk5DhvG2cEHkE3QYhTAJVQaBHxHZLt6kaj4heVLZ3Y25mSBqWYREVfXMwe6zmcbYRfH3xBMsfK4GgKtCHCRrtRf",
  "key23": "4J6DyjnyQRW21bvcQ73wqLdfcRnSbAQfq4CB4PT7NBj2ZS3zy21bbaw4CqMN52tsmsTq4HA8p8PAvBQS7CHPZSrK",
  "key24": "2N8DU8C4Ts7yhEQT8a8i87vt4taU6suBEHpPQYbPD8ZQkP2Mn47iShKcbN7gZaCUc8KpsD1mekTjy3UyMqtnTg2s",
  "key25": "774JEJGPyeQDawpDKtnqgZrwsfHG5hGEvQZKcRMP9yWT8g3W3XFG9roPeriRarBVwqzDzLGZQ5Ep9MKjbaNHVed",
  "key26": "3rf6haP8Agk5Vn2GTVMXDHHfoM4xBEXo3pLK9L4HmR4bhzRb2tyHeDYCpaeM8n5kkeW64Y4gh2ZaPyGoV9yyZxpg",
  "key27": "9xFKTgrymZuUL9kz3eDsbXZa49wgbVW5MdUzXnaepSFFSPf7sJ6DFsa58gSjZcyNcXwiCudpgxK9DhPrE6ZRHy3",
  "key28": "2R5nWvve69vWtgxeYyruzdgsZ7GJ8ZkYwLNUHsXdKgtWnj3qtXjiXy6hTfJA5i2ZdQKEparGYXUw5m8AJiF8rLg7",
  "key29": "4p9ZX3LLJk6fW4g9UFtd28S6Tszkhjs6BkF4k2hUfXhpcjycJN5XTMkjKzV5tuVsaHfBAwpBnnKnPdPjBkSFxsho"
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
