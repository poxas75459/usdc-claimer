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
    "5v2sSEdG42qZ9yxrd7gDV95M3MKTMAvMix7W9Xgbn1Yr1zXWG4koYgKK2sfSbqNYwZmxPkPYiwFvzMpz8Ttu7ha9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxTM4MR6FW93QcPxc7WUUGnbb8JiHhdtnDpPDY8oKKD4odYnLp7mMKpfkqtMW3DtaBg3BphPdmAhVQkQdsoyxLG",
  "key1": "2e2kRhw5xqL96K1t4rGFC7c2uuBz1Hjt4S75jhC66ZcgxJ9SeMFyB1L9YUxwLG8UxBjsSbPckHvLdnyYnVozVL2H",
  "key2": "phLt3wbzPoZkkRwk9oAgUNixtXcaN4atDKGXa1amjpEUAemM1GGGXTGA8WjdYqRimZ5JstKLmcLagrXGffsHdrd",
  "key3": "28n4cD9pMLeFF28vFk1BTKq7YSJ39bb14ZFaMBFvdarWQw24qV9ppzprBR9ws6HZZ1AcoararJhPbEbqk4BD51dX",
  "key4": "4HYfd4ue72HrsAm6faU5YdQqwGVqLpmpMivHcE77F8nRLewmEGY8LxoQJmi88Zf9NDixVi7FdnLRncwQPKKHyZrD",
  "key5": "5erjDLZeKqCiZwNvmzLFQFEuj2QKnSqmf9hDiDei7py1rPQ4WT4D6rrXBxJdW6sQ2BZJU4PEDMFoRpGjshKt6WNe",
  "key6": "zCHExLxU6oc1Re7ZC2x7nS2ToBsn2ZVskZkd6AqwhxHLoP6WyJUE2oPR15k7QefN6noSfEWSU3wsHprX7rprWBt",
  "key7": "3mhGdDWwFD8FhKNQNkXPBhgsn87vY8Js95rRCB7t1WpyLAG9LNarAwcLsjb3C7nPL4kXXGnXj7kHpMXzTdZxKL27",
  "key8": "D7C6VSygb1VpawPRqoDPKPwrDX7kFsHAht7sWc9K6EwW3BhA3VnP6ckcJnM9y42fXh6emUoutLxRAYt3fV6exmr",
  "key9": "41MWyvJYSiupkw8Rx6ST4KshL57Cgy2GjqNxD4Kj2GTKGZLGUqjXfqwF2zkcNC6b6rjB5dYNFdNZzf3QRPzMsK7i",
  "key10": "4yYAyzCSFLgkBTEH1s5xCNpD5wpQbR1sdeVLAjgYxb1ZHUm2xhzKiw5ViCCqJqRqY6z2wpTXcsVYXGy9GDMeW2Dn",
  "key11": "3wDCm55iwKkaFNgzThG9gXH7mcGveYXB1WDYa2jHf5d3a12ydgBUpV7KjvkC5QKGZe33QNmgpJRye4r89g3EqRsE",
  "key12": "BZDg9m7jJC2FyhsJ5JPWNnYZuGSWHdtg3Cjc8BaAYxaSZPB1oYSCws9RQ2U3zFpsArwjEBxJBZpnJ8hsShe2Eeg",
  "key13": "5TkWSoxf58nyCt9rL1AZgiPUhgSidoXkL8B56jmV2CVKLJV57QqCsCFf8Mu9x2kQDWQyEkGPYQUfUmKqV65Lsu17",
  "key14": "4eSVAKpZnjycBhsJYtJ8m2331BUiYcmMr3Y29zwuu1MayPpjY9ihzTw7VzBWHg4rmDHqPkGdMTSW8JH4HH5BAFHz",
  "key15": "5Vyhwd6YSpW4Wq6XvPpQt1Q8qZHUGjk3PsgUnJ9AxyqhArQ7LxsbzkSQAjMnGLiHayyi5yepq8z3R8MgSUptFkn6",
  "key16": "YxznnhJkyQT6sWGU6VMQ8w3taRag1dPukxdSCWPf5sv4E1CUVJKr7AEd4WYrAc4x2rn8DHJRVJrbDX7Y61j2BEP",
  "key17": "46QkjBFZ9qhM7C6iibMup6jPEJGUFQuE8jY5xXPJFiPY1sc81JQsDfFmePmx7UTqBpyX9GVSFpGeWo1cDfQZNxET",
  "key18": "5JBufkdys8Z6Pgo7dCn7k4UWiqRNZtozXnLGfC3H1qfAsM9ReZzcZm9Uo7SHLP83ayLQaM7YnK4P2MnHGL3AD4aS",
  "key19": "4UvLMm3YcjDJFNyuBwmPLtQrHNuepNQ86zEhyRemQPk7vHgMMVqGVwDHyPpvhDrQrfMZacC8aCQxtZfeX4gEY6Qf",
  "key20": "3oYBzCTpjzk21UR3yFAoXsZMqbnikfKKJP3Zc2bH58KmEsJrbsdEBX92JhfxVfK5RRs2AKKSBCimNnMf6fFLJHcH",
  "key21": "3iJEq3dq6aquvdymdJ5dfJvU5TiKpyHZU6j7aki1WaVZ3vbMoJGbUZwQVcGD3N6BPXknXhPGajEUJ8mC1HW5Qoqf",
  "key22": "uH8aYEzHHUqL7wxx2pfnSM85kfyC4524gT3NgTfZrTCkpGZqq16nZUJULfaEEHjNQL6LxndTomWES4pRdu66ZuB",
  "key23": "2hVCsVEDJ4iXyiDnp5E3LgRZS9KXj8bbNoJjjxo1RHCm8szpx3PbtL2sev1DyEcLBavLzWTn1e8Z8BS1yp4uBnAN",
  "key24": "kDoENb2BmSnEbuE4cNB7TbJRpJ4bT4GMe4P1RiC9DhPZfBWTSXBoL1s7SD9f1N66EKwWJE4t2fndPadRHQ3pVo5",
  "key25": "oMD5VzzVLSkToc9HFFG7X5X5bA19sXwiMjuNCnJcAatX6UGaKq8S4zmnd3BVNobVvw4GxQL8MnzrtMjmPnEqzPE",
  "key26": "5VqoWuT9Yu6fmFbjhZzRResBRKv4CTxZCb98eo1PZKjQzR23eUiNTc5jzZhu1RyTSNwfpNSvzLpD6LUapJcPYSzR",
  "key27": "2pmGkHXDvr5W7zUYE7AVpRHormkv6VVwqDqZy1AQUP5bznAXKHYYZSE3L9m9E5qkVWYqCbRkKNHPXXscjNF4K3zA",
  "key28": "2cmr1L1X7HPX1j1QoGbagQSbDJCAGyKA9UZiPWsh6WRgrMkhuex3Tty7tH3E1BwEvNxZZowN6C73sJ29RpZGCwUY",
  "key29": "5EmQbLwtMEghT69XMjRBHPMPN6B4VACCffQ7bJzCwei5poJgJo4GJCqwv1c6XKKSsYa1DVuCdDvCPgFkMP3xSoSM",
  "key30": "5qHXtPjgNYvQqEmWyUUoyL7E4mPyD9KMGK9aifrVCfAmVBhB5nUR3z5dWgKTDme1XAr5Q3pZnL7fNLainYx3MA2q",
  "key31": "F36xgo2pLwhvLwP5QoVdMDGooRye37ik1gEZG3goTWYfkT69yianaSnpLse7fbmXMwMG4WSmFRCaBPYfrRm3MvX",
  "key32": "5Neic9VH7fuGAigoQYaLjwcJNWtQYMR6CxmFHPWUBZfW4fDxrak65QB44vj8iQ36DNHMwbfj2bT5BDi63FzKx611",
  "key33": "4SNwkFmvvfaRTydAjCayNdd1MPompH5SsZUP43ANMySEQH9t6M2QvQ91QZ89cFkA9qW78cWxuJeNrGwhUxY5VgXo",
  "key34": "37BBP4nvNuX7CjXPiAt3v2DakXWzLVRwgEszS6Q7LxuK1D3cFAbG1p1Mf2c9GecUGMuNLAFtbiG55jgsHk5s6eVx"
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
