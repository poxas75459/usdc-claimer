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
    "4kCCg4DRz4ni3r7UHQQSsii3C9orzmQcq1kydN3g7deqyYWCDgj8GhwB9BuEVANHVnEZCTf1zaYzgcfAFiXcZ7t6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RR8Eb9WoF4PVqrVGMjsXzapvPZdQ2z2XKm22TJWRJZ21qCGVUCZZ7SAneEV42oZuPopJdj1CdGjZA4BSoCEFfyA",
  "key1": "Gi5Y5extJFTkEdCrV7i4HFDPGKVzLfKE7vB7TBYDAjEusk3A1takgR1scZjbRZPkXLemGbun9FgpXJ5RpLbT3q9",
  "key2": "62AHtZYzL1ZgCiyebvmsMYUZMzXA58YWZXEf1fwgbrCPpTscdoe9AxLAJdUXHv3gUe5JBk6gbGtZB1aeywUzHYYQ",
  "key3": "3h7nFjshbduCiKUds7FKPTPniQEfBiJqTsU8Gx5CdkWnH1pnKSLh5z19ASNpS1iLjK1hScYF7VJrFXzkLKkAmYxP",
  "key4": "5JMoZz4c5J2QxbBbVJWBATdoNvx1uF87J29XQHG1to9rjzvkfXRU9P1YGPKszqTzgRSjcKSAjcbY6tGExcAifUq1",
  "key5": "5DgktNwawfrKMTPcwyDGMgWYLKKsBS2LZUks7aM7BXuye2zVnqZNWP2emSfDPZqPvo2SLGCzZdL53sPdWbuC9WAt",
  "key6": "3Cb74SvAXnsKxPqsMphwmAJqqdb273P9dEsw94XW2GkLKVE9YSd7mh6xGhyAA3SoBb9SeCfTFz9KQRymcuf5QvmT",
  "key7": "3zJtRq3Cwx6PUTs4shx6iUbCou2hbQbn6wgdHZhZgxfHS98vR4imCKe2sqeNpH7eJkK5RmRgCd3gLCGm3bAyiMEW",
  "key8": "4Vx9A2LTaAgR9G5XLGdUa8Vvs6QvkisQDypBtQDoGbG5VJibtoMpaJZwW8CSpwXAhTWxwbTNYQFUAjHLscX4Z1b7",
  "key9": "4WXJbeJQfgfuGsKKfPAMU3RmyCDxhknNmtBivfMsvKaoFeDdrguVKL1j7rJGdw1USqRARkQkZE1Ann7h9Brg8hT9",
  "key10": "4wXAg12cize8wzKQqeGz7GQc28qz5Ly8evb3GVKZR9EeZu5rbchsrtsvAbpVVqpgthWKfH5b6BQmWr35X4i8aMfp",
  "key11": "35aqshRYkqQnBQbAF4Pcn215SB2dMysu9T23gFLtjhhy7CftqWgnQr1BW1iGd6aQysuHQyodzCxUNAJNqyv7SNf6",
  "key12": "45W2DtajFbK1fEGD6UgV469N5HE2X6Fm96vu7RYeVGaVMfPCAhF33eARTJ9yy8zy7c5imbMKz8aMcGa1d3FeoQz8",
  "key13": "5V8K7VnU31RejWLsg9RstbEU2A1CBHbgnLui5KcMi1zjhPkYibtx2sJfU5V4oFkNYDDKjJceeL7xVqa7imjtUCd6",
  "key14": "2TkDfiV5Rw1a7tNZSMEoa4KD4HNeyDgHWd6Ee1SBkVqXdiiDFsAkbhZsCtGNxxywiKjKiKKW1Ve2ZCcW1FAupUHh",
  "key15": "5bPNFf9heRVKKYFZUyYAjJfJx4ubqnZSNoN1qPmbPhh88jBKVotiKAm9AWVfRjeLkdk8P3SBhqniC7fCd29cT3uj",
  "key16": "5SGZ17TyfHbeYis98HLACuFsGN9tNUs7BZ8Y299FzN7Mw4geBZqPh4Z9k9EbddvvW5n4zLfYQaFfX7EgANP4Uo2g",
  "key17": "5RkLVibzH4DZVQMgwAoqzimy8zwf2prKQnor7NBnKXyY7qD1bi4LnUGGKzuvfwmzBhDBCJv8jpBpnEudNqEfEX3L",
  "key18": "3KKqGxuXEfHfaK9cBmooUgTn6HHkWwWifStJfGeXUqJuc2BYd79me5jx1kqXi7VmHG28ndvi7LE6Ro6nj5cNGjEV",
  "key19": "4GWkHGvmQmYs9knddYcwLZhZT3Hnazs77yzRzCZB7xFDT32rnmWfP4TY6dN5kBvMTt6LUc2qeSnCqDZEKmXFEwdL",
  "key20": "4JLFXpr6uUQ3o9z1upeupSPehzuj8rnBhmDMKVytgUWh5JdtJXt2ETMk4LhDSaTvfgv4Ngarvw5PzrWDU78c1z3L",
  "key21": "31Uu6e1pbajuYrCMYVWBBF2H5L6ZzEARWhbra56yrEb1MyphV53tgANEgKGLRjaM9wgdVFEvJKWTep4ipxVFhvzX",
  "key22": "4t3Sep37evbeAHwRDnn7kypW9whoUWcfeU89Lv8NnkJAfQAFw8T46RKJNtSSTvZyaBHRPEWbRYKQtRmbSkVGNowC",
  "key23": "4o3b1N6ADtfMbMbM8rVaSfeJjDppaCC3NNjpDGFnjXuWgY3shzSFPa4PfmJsjZ6WyUsAGHmm4dzJzCMyVUhppi6",
  "key24": "4i5MZgCa1MQu5drLpmKRpE8dkQUYTAQCqxXAZy6y5i6ysCK5WRvsZMSe6HoYu3GmraAXtX4X5UQNwgczkr7fnwcp",
  "key25": "5UJeFADMqotrorR3xBLQGvGSjtBWmS7g9BEfUyDpeh8FNaH9TrbShFz8Dz95NVtojhM6n2b4XcNrktNfgcknFzSM",
  "key26": "2MwTA26bqjEX1KePXzyC2oYJ1t9P7BiWMUTec7xfSaP3Y42xSnZkx4XLmZHnZSJnjqBe2cuR9QPzQNbd5HtDvTBr",
  "key27": "3rsEf2YbmpemYnFGiy9nercRniXgMgcZ2uEWustWRUfkudsumpHMBX1yyHEg8ra7bfzoTfFUE5KCCcc343JSn9Lt",
  "key28": "21NSUcqfbVP2Ma1ZJ2ZD3L2w4Nm8FZHjRNbHCtUPEpLkzvLXWGnWJa3K1g4AKfv1LS4zJMRePppuLW1FZ3jUmUez",
  "key29": "44ekbsAU8bSygDirRoMABeACWZKiCf5e3t4MVaUxk6o4ptoVPCM2ey8MTsJTxibRfenn6YcCgGBVJq965EAQBzfX",
  "key30": "2n6RBk7M1kZfwxwAKxtbog94Lrco9wssUn3t3LQhSZPdC49fUuhZao6VCgPvQiNCmrkSiKyD7UzvAqoPf21MjDMS",
  "key31": "2tznCpZ5uPbJFSLPNCm12avJ9BU42PCBF2aqw1bDKRcmMCejvQZAh1urk8oivYNn6mULFYY7LyeTcDMEUF25MhPp"
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
