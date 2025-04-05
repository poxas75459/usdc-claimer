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
    "5JFqGecg9fkJrJbo7ERCFLQWLpnmGm2GtFyUYaZJbsuESghsXgTpUHXVbwJEBc6TfhiHkGhdDcBcxEsv3SHT2a2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fz4zUfLTMtCbd6pnVtRye2dYz8VKsUfBgV2YTQh4uGFiTYCiGaU9qLMnrmiVXgjJobDMr7jyXuvBdnRpyE22Dr2",
  "key1": "4Ljq9DA1FHPyhcySQbQdPD5LZSSmyhxdzqMYzCLW23vf8hqcUnfYuQCRD2FxzsUJ1jvFXjkjjKxnGPvaeyZwZyuY",
  "key2": "4pSmPx5L3535rTimwjv5F5njkyqkzYrpMc8MaJHgHVrKvx7aCPFJ9T4VF12x9UGpo9gqSjhf367fJUsjzcbf9oHi",
  "key3": "5Uo2ia63q438xt5jmYNjZ1atw4zUubdknDw9ESbZb5JYwN3Zurza6A2NDCKe3tf1vs64XiZWh2oQtgNnxA2rd1nW",
  "key4": "4s8aKfPQYosUo8YxKrChUoqJcXVNZpNWfZ5KzDDdCEooX2Armw71qhbaC5vyRti6oYUDUhAP8uRPDnyzK5bnYfnU",
  "key5": "2MmeVricMGgvAVtmKnk2kFPvFnrzYnqpXgZiNng6EgNTdscGu1XKzepAs2gVUY3nTjR7ANCphuU7jUsChUVZNucN",
  "key6": "5TfgC3wDHBfhbiHSxw9HVyRyUHALntA31fcADCBbdX5wktoehFVMw4JZUXdYQHQyJKFXDbDXEGUA7LPfPxDUThkk",
  "key7": "2nfAt2ibeo7VcC1Rh4joKc3k4GPk8bL6fEJmhuTfuswhzd6EyRX8da2emZABzbH6NdeJLjU3AHhJdATRXyxcctbX",
  "key8": "nptbhPcFMQwKcRyipD3G3WE54QY9NaWzDfrkRWZXEND8vuQJV34k3oBVeNSkGVRhNSJjLsK7sZMF7VLEzUbeQs2",
  "key9": "2Eo8C19thfSinj3w5thrJ3cNoyjWambUiThSxFBvto829wJYJwgtUJzr5e2HVN2vS372yLncGqqZbNr6D3PAWPiz",
  "key10": "2TaHpfhCS6gbVDZ8ppfE9QLCs1eDbDJdfAPyDhSLL1wTDQBmBHdyU6rP4mgznioCcSHrkonQBqZW9Dey3rjGgTNG",
  "key11": "2yUvZGWonQGbTKQEtn1NTfB2FdnptDaeyp7TXmDana8rrotn8V5xAyPq5918Msof85D8p53JueS7mR7PgE6LNfcW",
  "key12": "5hzVkdHs7oQtUh6TLfxNVZJ3HNrYDCMar1uWaxTd8hQj8RNTM3DoYbT1yhDjfoCSsxncuJn5uq4g3hvkVGUnQ8UZ",
  "key13": "5BuNczahbYnLJQJ7EzstcqEudyrTpeAuDgs53PPJnEVhzV1ibg4ctEtQPqvs7EJXs9u55AbPZ8oeBLtrJ6ELtNrY",
  "key14": "kj6TFtuJu8bUQgLAQszSfjjbuQedNTSG8n5pNgvRcYsyhAXDUduDjiZteEkDuuXfmu4f4UAPAEDAN1tuyCFpC8F",
  "key15": "3YUcN9S37NoySsVahqWb6wMKGHmhkikLA16DwkY13zzVzFZ66RNsr6VqwGxDpP6K7EGCUuJEwH5kWmAEB5DVBwMj",
  "key16": "uFSLK14KZF8PGTfjBV31tA6VpC1c5nGZ9XuXJtV2nP2Lf6EdtLnNZDq2XcrJvwW8q6wxs8CKE4HcDvPKUcYfJPx",
  "key17": "51HJa2FTn4hnrsrZkJM5sEHziVjsJmaSHKQQHy6EQk7GkRvBs6BGsZZZg1zbvTVBFjQza6cBFL2FyxDRvqo8yeWp",
  "key18": "dNJ89C6DKx5Ssigtb9cTWyoHCm6o6F5wcvFBuptzaT7UwPUNKVjC5x6UEBsEyKbvxhRMaJnH4PysN5P1Ucv9wH5",
  "key19": "3fjbrZ8wqQHHa9bkffVya9ChEmoTmgUbAFCrNvEQU1AmXeAAutyUwcYmQdzUfCFH6P2E4DivoEpQt347FZhe4Kwr",
  "key20": "4mUFQKE72UkGD7DB4ydbqFdEZxAsqvR3d1qrWvT6r9zpXLbPpi5iu6u2NxNQYt7SEc8KCd5ud6NngX31b6cB6YRt",
  "key21": "oRSqUhyFvxABNPciLJPEUoXgZgi3DZWr6GiEqSLjmHzJvhbbyTYCU1m1jyfFL2EHzuGmSeSG4eND7KKBjg1J9zE",
  "key22": "3tFk6goRgv4TonAnvcuwmLffyVG4sJmMDYmYjXgLWE3HgALPaRCv2t81nXWzfcSSMYXbPse4yZy6zNmbrHmGPSSt",
  "key23": "5aGPKtgAgFLDDZtXMKMG28uKDK3pHxNvUNKCBnXRTa394nv7Tyn9JTALsuycQ8fNwRRyCuG5bStX8zYwB7pYzQkV",
  "key24": "4vZorr1nr4qxFQqQhoSLwoL1wUp3S236784xtRmHhrx7i1DYCUWq4SbHAQZMVmpZQjhV14QKAcD1zcKkVqzwW22J",
  "key25": "4bL6rig9K4t3GogQejHsKpADuj6BecuZceJBZVifzRvhbd3USWjMyZw3TxqikEkJ7qzKhCDG9YNo66JP64rUfRaX",
  "key26": "5spbQJ5zycTXkdV57tmiUVK5nQNEY6jrArjkAnUuU2Ru6mvfnwGPfdJGn2Ge2aoPhxwUJfYwbLHkpq6kqU6gY4JJ",
  "key27": "29ReDZnSVCXDsDUFbPChGN4acH8mWbFV6U3uFr5pVXXGcYetMviX1U57C4vdP8fDn48dd15Ut7WDWofQKHY8Z37H",
  "key28": "2BRLX5SYYCBhDLxRvnTiyP3C4cTffM31Y3ESLsHZ1Mb6Ushz3uyRUnjWrtSEWcg6L9tPmxgdreLhcy5eDARry8Ha"
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
