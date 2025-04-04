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
    "iKrL84aEASscnkEa941CJP8VJna8vV1vUhvNix8wRVvWQjt9P5eAcujirsBaiLaHgtwgvxCkqZFHdcN7BiqpBLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mv2SsdYuS4yee4HYKYsiC31eswjJjiLETK7N2UwvENhaMNaz5mC9AtRaaXHkNri9tokgreKDXrFWkMenLf7nhHk",
  "key1": "S3KHWn1Bnd6yt79J6NWNZYNgC1Rw1R8NM4ruafmeFmoLXwXuz93xtbPCwauKVYYZBUwXw7aPJEKEegYfbLfL1fn",
  "key2": "2sbUCKobBWqP57UtxhkquH7ewB3WBGYiiYzw2RwZfv1FfmgurcDh8UtPAnALSo4gJaKkzX7UV4esHgCJNM4JoegS",
  "key3": "Xk8wCHg3MjBw3TRJiTrUDaNy6cioRZ3F688amBY2ufv5BBD3ynLTUXgcpizjpdstNdtKzbqDsKmW4x1fwwD5Ei1",
  "key4": "5ia8uRxDo995aTmUf3LY7EPHcHYesD3xtMjU1Pb9pEJNfm7UCDuNNWneX8Y2tk899Ppp1GdErgAtjZ1i6v7BCjdD",
  "key5": "2KQ6uLFK3KXXP74cSymnvMKrCLosdCBkHbwbrjrWB5bAT8Tsz5CiLKDBxs8xUWCKt4teDRAb2k99bnQoBu4gWnXb",
  "key6": "4br4Y1MLY2LzA9Np8szDD5EjBWwrLpm5sbsDSNYjvteanNcxrz59TK7rEcYHJN255d7jknTGMWU9BBYe4oKbXkPi",
  "key7": "4mPHxQd1ENjCw2wGcLJqX6KHg6M6odmQi9nTXs31Su6NdL4VkfADxtPcy8tzZitaSPHM4qRoaeNZ87gstrLMFt2v",
  "key8": "3veYkZ6mW4QixXzMGL6LhnXBHYEKEKFpvXFNEYB18WYhrNuAATgvfi7oRmDrno2LPtiWAUW4RRxkLeXmhSh6fbcv",
  "key9": "2jRJDg8bf82A6CarCsHL3jvjPDZdSTDfY9NwSw6hnrLg4Zt34uhJ6iu3H4eU4opWVTfWowvHaiPxwKyFeUNAsi2B",
  "key10": "62mRfNYmuGdTysWTj4SPRWV2bw26Ky2wc9xLt9W7VUwpgj1q64RxWyiTyJvJu6ddBmPRZE2Fet7xoXG4PgSvq5bc",
  "key11": "35qutXvi3eWBPWCrfu6WdyiwCv5w9Ut4V7eC5X65nVAYfJT3Q9GmNnQz2MeFh9HXLs6Wd8c7mQyV4QLKMNHPp71d",
  "key12": "3Gk9pLA7mga6UUDsVDgqX6N2SMQgDfEokT3QbHkbFHwHuD9VjorFSeCFGDnfzkF5BzNPY3CZigH3iTyMdA67wN3b",
  "key13": "2Kc5ofjbS7fEirn1nNqhdVB8m7JgKgQM5wpWM4uUMKkWLubuCANrxWSYfLBpVCZ7fUDVJgkM14FpC1VbWxS7ySuG",
  "key14": "2Mo6Ug32QdSaTUDHH3ZHyV74ncz9yqvnxKEzAkdCH7YSXmwDF16NFR8rngimpxnAHQc89ZGNi56LwJdEUk4Eh2Jy",
  "key15": "3UAPoSaCjRkLWTZ4cpx8P4ngKzddUCujpwWRXsB5RrkzUYYAiTJeV1MGc2CDq2xsXAueLBEXVFVThrFGWdfAZAgE",
  "key16": "5iJE7Ly7R2gbaYmDukrrCpjBW5jPZdkGaQtuV8G57dkTXmAm3jPraCTYTgYdRM84jeU2immucMGE226VaQqR6b12",
  "key17": "3seCvK37cFM5XbLvd29f7FZuZUzZTC9RhqFvpjGUQefY3D1xXTpmBSz5fkTyd8pEKWGYEoGP8i9jLpSTAseg8JEw",
  "key18": "5J9PrmJi465YvxeCV19hgUi2PnFCESF38s6Vc3RF74oidVSXaG73EV7kaFipNjqhFpaneSppdUycDEKrFzsWpJjw",
  "key19": "3Stxx1DKdaw6Z75eoc7aLGjxqnVhqHZHc9Pfkxd3bwdV2gSXFRXQ4kxhF4TUxJS8KbfiUmqJJTC4HmgjeMfWTvu2",
  "key20": "31kumQyMeru1dhzPccGXuhsAX8M1ykM5eDnveT6FRv3qVKGF5ucZZ6oQTHmPUDL73ks3d7zHhJDfo8mWrzzYVFPw",
  "key21": "w8d1gqErNyC7eRRqJfCu72hsLbQY8fae9tqeesw2ZdjZh8DHm6Ewd62XHYHg3duXwvyhQfJiyFcFUVKZdHH5kjE",
  "key22": "5quQFHUF6bGFxECAon6Eqtv2BrBWun7zt3oP9kJHfdtnji9AEhnJ7ic38hXK33izd285tWWV4LxjwtdxowKTt1pk",
  "key23": "3ePwn6hRY6GhjoQdzrCnHa2qZZ5AXirSBohggPFf2Rv6vR81eAgbKrKXYWhKcAAHTQK1nWXcuKed7AaAVKhJ6VFU",
  "key24": "4ZnYdSSeF3od8qF97HbHKqFKG1rjS8E4Zt9U6sakxzwe7BuFnZLb3uzVSTHMoZ7n2QDt9YV52cD1RJcRKdoFLEar",
  "key25": "2GZmVjBaYymKPsa7i18yQrcaf7roz8vTnRAZj6rUXduTXh7ak4GEUofV7cEWv5Q7e12gScQk2L9ZJHkNccQCXFxL",
  "key26": "5jqwZGt29pttqvDhMPmWhi7eWY51xd7Be8KMVbQgjaBgA4MSDcoeHYrULSa61hwrNVKX9HnUbS4u7nfBuedbGAsL",
  "key27": "2oZHaY1wvxuqUqmZyEDPUs5kRxL6fdD9vGQ7EGFKGakkhxuMBsrKzmJVUPZE4VKU5XnX4dyGfgnZVnv4zRSHDsgu",
  "key28": "5NwbkDZjKYRpxkrRWXUaNroiV1wAHKSC5PZtDQPpjRGtH1RbDQ1DUNbDwMAjYfLiKWBxT6VvZNyUbThq9zUmGcmk",
  "key29": "3ur2yxZktRfMKWwRcsqQZwqDPZw2s3Z2NTvpELQA6FBVdRBtrLxbM4FQqd7b1uCbrwxC7o2q6hD82vbYBNBr84zw",
  "key30": "5SkxHjKLFQBUo9KH6MG5ewUe9HoR1ZWM97q76Tbg6uNK9p72aXCUog9hRXbj3ZmsnLPuA54Eo8e6PEkKbQpocNs",
  "key31": "nfoCxE6PYUwphQq7efeusv13RphivCfFvZyVC3RZqbgBJwfZXRMerEtgzN8HCTYiq38UJynkYQWn1QLZGoV2RDr",
  "key32": "2MZYZPqEq4YjvmvR6aD8MNLvNfMeiTFqrKpqYyCnnBctg4qJJbFR2kHx3pwwjeGbyRwRrJVbHsHC4eqNG5M8asen",
  "key33": "5XAKTEbFeK9Xnh4TQhPLRjdHrzwo6C6arFQkjdDpWiyKsfQ1Dr8h4kYyyghdPCMQdSvzcySfDEFiycyXtnLsJRNd",
  "key34": "5XKbWChWH3V2uZpVciDdXv2hUbz6EutHqnWNVv7uMHA8XTfPBTNBDHvD9FvGM3GgYC2SpethkRQNdDjSuXC26Auy",
  "key35": "537qEtVA9YnRUttkTSrUW24k7tUEMEgvSJWDHgo7tobwEgggaNZkkL4ChmtBZ2gNEAUr7hVQQoKmzvc7xut8zB6o",
  "key36": "3i8KJaostGqbSKfXGrz5MhruTWnBxsQwvKuJj5LnT3doNAJhJcNPsv9BcNPBZqWmCCLduzauWq9eAXNbSU5Tm4yp",
  "key37": "53RyzLHzjk7JGWD8cauiFq72SkxerMgsSVE4ZhjTXHMAYbvfufEGwfipcDYvKWFZzZjBNgG3KXFs2XNmDEtQJFoF",
  "key38": "2acWuXuGyrfFFmLv12db5cUYPY7NPznkoZeS8LhLfP3kfZjeifBpBhWxgFsvM6k6q4Aj9DfLj8Ruwb4wmvfE75z1",
  "key39": "65aXFLpS2z5QqxQc4oZG6XeMvZmvQJYDDuAbibHZR18mesrhVGsq57MeDAJ7MPEcXBtVnYM9URQ67B4kiKCBxt3Z",
  "key40": "JTZNcsHrKHiBnEqR9bmq4FHiuhGfTp9AV3AZmVKikEmeCEyJvdCnFCerPeAN8g3x7f7zTSe8Khti842eLMona9U"
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
