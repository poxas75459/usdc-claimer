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
    "4zQZJRzUXzjaL7zoFPFNMeoXZgLJxd1pKtSKm198Xois9Ls6YaGTEXP1cvQT3ohj83BnmpMUX2z8ezcSDTtenyGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvTNnpyAgSQ8a5JXGLoEzAFx8i895PZPX666MWgPs6ZUjGnMkkeVxz6WB3PuvurJGuv5P82QdaggttW4PdLEvS5",
  "key1": "3aQ6418tfBTuN3Y3JjESY9nQDwL9dFZieS7iLTTwQee3BuscRTVWxKe7AdomJe6nE6K2tgAsD3t5Bd3zvCT5p86m",
  "key2": "3cpB4LdCmieZANdXRE8gYe3XNmhYzQCukbnwb6bc4C3z1UjcYmUYH9qQL6uFCt7ryGr64XZmBoaXmctyC2aiXSgm",
  "key3": "3bKGpGP9JsU1FuXiSCvrC3hj3rfKAkRNjp8wtFe8Qe8u8nk4SYS53ZmMSzyACGJXAHdh3QMDtR9KP7PUGoVDbW5r",
  "key4": "4QjsTiqyBHzFBMpTBfUsLSqGUwBd8jiGD4aKMoVoYZ74bJfpkp92eXBGJLpCrPXCGPtYjSmtKPjbApRRnKJtUbpG",
  "key5": "3UA5CLBrp45iBnXzgkumJubSU21fQmCLAzw1PUdqDnzYkdM3JjZTTpyZTSJwpkETem7jT5D8HZku3hqK1DLRbtsA",
  "key6": "4eedcYy96q6MBncWZVNebgWUmaZ8QdJk33q2S3tRztDctRHCMeLCkAsGLmUfzhdC7MVnFUnv1pyy7NZUQjL3GRrp",
  "key7": "35ZrwQgzD5THVWcEag4Pd6M6Lg98H6nQ5TSmStrvu84v4DYd2NTa7GLeLbpu4ddoVmrqU6sbyXzNjLveJKKLLXvm",
  "key8": "xCSUcjBwJhNB8UracZy7B7LpX9PRAUL2omVBiQkJb5gcjEAYLpywmUrqbJ1pZDzZ49TftLM2M3NcxfVUDFWPg8j",
  "key9": "7At5qt7D3u5sXTJELnv4zCaBwc5Z6f9CH3MtFm8r2hW1q9TmVfQWVnGqxZYkzVXrgi6q39br7BHjNDX59suuwEa",
  "key10": "YGES1Lr4c8xfgHpS2ae25Mf6fQzu1FNGPe2YqdzuVP4YenBmhFRjUhEafqASFH3Fywj3aPn6wTMGLE1ZgNsttYS",
  "key11": "3GpH326S8VfoySHBqfNPs4o2ZA5oQDZ2Thvda4swfvKRk3X6j5cqgtotZwKJNfCVFrrZ7kK273r2FKWULhozRJpt",
  "key12": "25JdCwhJH3vwNTpneayF9K2wZx6UTHNdsUMkmKqWTaR5kSd3c2Ms8auhTir29MpifdMvp6LAZ3MqqWhDbvjKnNMp",
  "key13": "QdhAEjLKfPmqMZ17AzVdGFJSA7nBZB4GQhNCNmBxuzyscFpsTzd2KQbbXbkm4yZa2ZiFS5y3Lu7c1c6xaM8X8AK",
  "key14": "55Fy3qsZefN3hXdMNcTgkKfukp7QeLezNrhcWA9Z2LCsGuH81oaKr32PQ5nkNjE6vJnTVPJyLk2rjt5SnWkXca2y",
  "key15": "5iazqiJWDGVfKZH21sWFYzGNu4U3GgRHyhdvY4vLC4crBrLH2kU9PDz3bgG9g36MFe53MqoUUWafZuk6jkzjSzZn",
  "key16": "3FUoNJ31rzqZe7GRqCWAdeNkLtwymXgDJttjgWPXAwNh7jorEPvkYrzGNZNum4s5kbKTs2n5etkrBfzwm7Jc2sgM",
  "key17": "3tP4sQUhcgTwXqae7PJDnkockxFyAiM5GMyHg6onNYLoFaJimAKYUmEcYgRXgQi5bChJd7cBssUQpHusMXgoV179",
  "key18": "FdJv5FvgDxCviP2CHyBdtwCYNi9dkher3ri9tSSDzernKgw5zTJoHBR5Kqvyoh4MBye8pmBerS6FGLRFPVt1jQA",
  "key19": "3Tf2qXDUUwXe2bpp48MUQRwQa3QzvkfSzc1wZESDogiwDLC2vJmQPHkL5ssryNtMYiMyqbbiCF2zceR3jXNygf1r",
  "key20": "4rXAbcKmRAisEuEudji7hTf6NsThPcbUxwuwgmna4P8ABrfbbUHf5e7ymRnvJkFd1gMq6E4ARr9XutDXZ4QLGdhL",
  "key21": "2BvoKPv1wv7LKSa3TrUDfm54Ev2tJ3WSuxZDFVvk4xBhQj1YT3oogBzCxGgb9v65j2qUqGfEqW3YmvuZpAG72ZAF",
  "key22": "43yij3AagrKLD4nV1WZPYBjnhDGVrMBch6ZZwHJwDKJZ6yuxnsCJ5T5UhaqJqgDVMXJKrGvMfC4NotXJnCGbvRUJ",
  "key23": "32QA3E48C5DSD8iQkjP1T6YywWYwbbC3XzvL5FdDbNGaRvyo467HNetyyvWWQtHF8NJc1kZP8S9MaAoUQN5pyvbQ",
  "key24": "3L7jTNtu1CRsp3SdDL7fNnRTFC4N1fmc5sDQtDHngAcpWjzPf8vkSjAnTnjJZZsyZKKRS6KQgDF6Wq1pphkXzwrk",
  "key25": "3ChZfWNRWUofcGWNLsgP825K2DcAmVC8heE1MhBcPXiCPfU5XDay6CLnaxW1XWn8h9kkTHpUYZUiKegHpJGyi1wJ",
  "key26": "3rRhT6Nsi16UkTMPBHjXeTCtiFtTgesutXTkwpYbY9jvtQ5etsSwpy3FKTzEatBUNmaggNWbXQFeMqCbyjRncRbj",
  "key27": "Cv3HP8f34HXW7JvUGRjPY4KNs9SwQcFRQjB9MeaHX7Xy9P7sZeug55VMGzFop1bioNm3yFjrur4vJ1buWAC8ccD",
  "key28": "4zYf2w7v4pBWq5Vr1uozu5GShbEMzRAAySvnijYXuqVbuhc1XP56uc1wHvMakGN5iFtavA6AP87sjQRrysNSNGZS",
  "key29": "pxgdhYcYEZrRzYV9aCtTpCvVtqbTZDBMQgk184SpJPizwURCByTrHBgF1ox8JfMn9CniDCnaieKM3ASVeBGbTNv"
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
