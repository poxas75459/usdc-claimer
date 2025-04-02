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
    "52xqXWYTXaZ77NkVQf2sw5QfAyMqv8kxETGDtvUWYsgWqCEzXcVqFXXkdoiWQd9v6Uc3dZcwp9n49xJfJqN4y3fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v9wxPDLVCk4evi1XSPhvvvWyqoCbkL5Zm6igEm5RJYLpwWt8dVUYQTxnjUWdrzFNqnJnksdNkZisYs6VvCoiPTi",
  "key1": "5csPkMBoPJV3BsoBZN7tbKdXoXQPvYGgYG25aJmirmdaGZx8YQ4VUGxKJjQoKRTFMEJh7QtYRQJcJESMpSQZpkPE",
  "key2": "3SCA9s2FEQj83xZE6xqArQyvaLp6CyqMwdt6oYALxyARFHr6bsUSSDXsgS3R3VbVU2Ts7k1kaZhwBnwafrQZK9fy",
  "key3": "nN6csZJjE3FwsKx7yxvVwkSHnzxcE5Ww8qCFGTxMTgqxMYEUMcNz5SV83Z4zpsQ93m4bXdoo8tdUDPBNhjbXyWK",
  "key4": "e8ovBRd47RF5SW4BetLY3793JVes6J6Cq8vBzWMBxnsuuRTGwVnxxXPwJbFQBnqKX6X4yAWA9yrzFkJRUV7P49m",
  "key5": "4eyprunctkzXsxGjJgzfAAtTqqipC6c6UhChU3Xwg6JQ8ToMmzqPGXekHdE4vhu5Wp7NBAsQfbuMt8b3Cthj93jn",
  "key6": "3CA1deGipaExa5WpQaxZiiRmTCHELKAUN5BXLMUcaC12RDiNEk7nMtHSANd9hEUU4oiys2tEci8mC2GdXHEqnKJf",
  "key7": "hzkp8Ms7cJ4UMYgK6tVc9NGSYJh92q1GsBXwZzTYnwtxeH8Fn7oVHjFM3c8Zd1qU6HKeqfaYEuyBxK6TQiM9BAv",
  "key8": "5ZWvVcVBZmTPuLNh39Wfnsud2rmH3JLg7QsynDB16oZNdFvBUYYQxJvi5UVUkdjUK6r8cQA1KitHfBbt2cdMSYbP",
  "key9": "3tLzCFdjbswsGzoW45HWm7v1CPXFU6TFU8kAsVzpYkiQpzEc87ScSo1Lpkj1H7fwrQVpt86pXVrJ5k2nHUEVNarh",
  "key10": "2M7fZHw8WPfoV4cq7x6ScSB9YmpcasmVtvaCcUrmVDmBDaKExy8qDS85ZagxaCZCC8NuuNZ2HyLDeabHpw9Niva",
  "key11": "4e4wyhM988XJNtHisn4gE4CfMPtSYYyFkHDz54tNCH1nfUPvr4rAad4AJeJqA1J53YbLQ7YkpjwnkG4pJQhWm7hP",
  "key12": "3m3N8JRZ8ckKU2cR8kU5RAhkX3BMzoZMTGsEzrCeYyMnnBmjRVqWymPsQSTbKP8DkkVhL6pVe9KquJpLsAid9Yp4",
  "key13": "4mJHfBY2yTPCpH49ujQcmYxNsJUuwHiuy4rDPMcpPbyZn4tCJ2SUS1ZhhGhgBaS9qkgmcZTRd1Y5peuukbB9jkas",
  "key14": "4LtNHrUbvzx715jPTzAdwkE2z9C2LhD4iAeaMRUTtqxUi9UvGUcw1gMSta56nuqKxZ2PUZLrMZhFGLASQ8H8uMAS",
  "key15": "73GN65uVdwMYBDJu8EiYdN9HnnfuvmcNsaxLZTVSi4eEx1YhvKWekeFKf1RbnfpryDRG1RXSaoTQhSZ9wRxyxtx",
  "key16": "5GadSjavcqpMFbK5SEZcCmV1tQibZRBxJej9yYw8W6p72ebVtmHKFZgfcUENyVrMmvrZaSZpj4tHojcXCa239fTd",
  "key17": "3pkmmn5cDkTyWHExiwETTVCgX5u3yS2H7and1eUb9frEz9iiBnRGBy8EKWbWPHqQ7JWjNp5hVCcqGoCgmqhFewKM",
  "key18": "NcmP7MFa8MgZSCD2uVJgv7pjrTqif6ufxfKhvTvCamTAgrqQpR6V1QyRSoW5PeorW8SW4FcXeYuzT8n29Qo2Gin",
  "key19": "4YLKKEJ5rZZRTfeAXXGK6TaaQRhwnYKZogq9ghbuYZyy7ZbVLuQs4aRWRbJacn9F4FZQh7CqNbbNvMvLsaKPs7kj",
  "key20": "4K1z2oQMh3dAEw3GWbS2GwYnT1aQy7Ha1tRMbjQdoN1nX7fJf9Gc5gtTrNrdex78fxLrNSScyQKSZXMn6tgZfYfZ",
  "key21": "3T5qCi5px7Z3oeZx5jehHptT2dwfGGfFD4T4PJkikLQzruHUBTRpSpboPPxUcyxKKSEZxY9SFVy6BZEtdrQ5MNYC",
  "key22": "HELNyuPZmqYxbUxLo6bAoVkJK3QVJv4SsW9Hq5vY7q6Yk9ZYTtdmZ7b6qRD7uVbhW7gq7mNrnLL3umyMnvLq28Z",
  "key23": "PETumQ753AyFhtvdRYXqvae3SdFxfmXq7p6e3Ssb3M21NquUjknzpFakNJcF6Ht3gvBdXvEjwZWz1CMYxyt6Wcn",
  "key24": "3r4dXarS9ggtLDGPy8gkPTGrGFLuaGG9YdAnJ89DbeW1j8tPSGAJ7xUSSnC1QL7SWnAEmEr4YuVBLMr7FePV5Bn9",
  "key25": "3PCTL6hPysdcbn3DotmFoypMCaRofUocaT6AwtesXqaotnUwVTUucmK3no7G29AqLehqFEXAKRyPwopNvhMq1hHf",
  "key26": "4yRFhYJvfA16bkT3uf7QxE82K7KhqusNzVyf2Xu2Cv9dQpw3jj4EmRzyoJtzi7DTvahYjFwmZPB9U4ts1HQoWfor",
  "key27": "2TmVNV6nGYyDW5voXnsrho2jwjMCygV6RCm4gobgyfzwg5JxngNsqL8WQLmmPut5QwouM3MzR4PvWJv7q3rDKHW7",
  "key28": "641mkvnPvWsrkASFkpPEJrqxo5Nea6Qb9rYtTicpU89m4QG9JuYPCsPgJkFMw1FX36nE3kaSRmL1LYagDsLkVAsg",
  "key29": "3qGV56TfrpkRoQV81ETEHJuugY5tyawR2r689kjpYpB1s8d8Bn8vBQtbLwdwyYVi4SA2a7ZEfJFY8ZL9VbMAoeDc",
  "key30": "4rZyD7UgGz9ZbpuZbydAbutAku2kAxx9F4Pj2c913bekrkafAjmf63q3C5Fv4uZvCm4yTnXxwDfv3jgDxDwciq4R",
  "key31": "3VgLRuc1chdp1WsRVpGMSAZZ6nuqgTuvejdMr79Ceh16sReVnm6F6MDKMQJMpyUDeu4mWXcwebTBBZXLp7qpfjwr",
  "key32": "5VH4zrMWJSxmckGDnnxwVJxCTT3fcUuVKpD9NEPDhqCZAMzuxpoWvquFLf6mJQR3aZ3UWkFAd9RpAgQGwy1EgLqN"
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
