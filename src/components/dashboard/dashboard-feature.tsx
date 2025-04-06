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
    "4dZVgsRBfx38tmwsEA7WzPD6T97JKLrcuoRmD1ZLnbX9LBYLVXDxGonNg2XGsp8ibvcTknEt4QH9aSS8E9kKUBme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KoCyD43McawP887bo2qDjS3XhRoDDSRJzLApWo2KAJoDiq38TN9duCiQtN4MV4nnMQv9fNCCuKhpSpvqvqf6XXX",
  "key1": "33N7rY9hRSFkt76pawYktbpz2srvMP5ETUZmCdt9gSckiBomAdzguerPKvp4G3DNULBi3ceCxhDnAaWKX968Nku3",
  "key2": "2Meym5mR6BXFJXoQXipnVjTeHdcgAR9iBQSUM44TR97ZySGM7S4MQHbKVJnciv5bzsLvRUva9wxvePgivQLRWxWx",
  "key3": "22bycWuqmRJkp5iWJWLCwowTuHUx7wrsDy8Ngm4sKwn414Fgg71dzpVbvFevVUcDG3wFwtd5tNyRLHJ6Fs1UWBQf",
  "key4": "4jPj3g1Q4smnKXBmjuYZSe1crZXnXxwJt927fLEaF3gTMtaaJi8fcV1y67viuqAQEaCxdQnMqyJnp7nkPaRK2yy4",
  "key5": "YTBHTHv4qzvtWX4VQME3sMj6K2rJ7ShPmet3B3HSqaHyJhvXDeqwUv77pvpmttshSE121bq9VPw73b9RR7k3b7n",
  "key6": "2ZXAFQ36B5rzPuiL9DGBNLz2TgaG5y6LkrpTkicyMFjWmqckLU1acQYvX5RmTqChyTdWdE66Un8o8si5Ww1HMPUi",
  "key7": "D7QUhNuDxafBh1EyFJS2vTQeyPmcnMrJ5Mu3YrfvMW87TENRDKEfeHFjr6dayGdweRVwqEdcnDx35GfpVuByNvs",
  "key8": "3XayeB1KHzFna7jVZnXRKuo71hjMxpz1KmfhihG5JXuQcW5Q3DPFGy5RB6b5fipUQxTmqgKHuYoA4qt94QnEo8wS",
  "key9": "2XxQCzxUDem7U6eawHGq5DiaNbkV5WKxEQKwQ8M9dxDFoPDMTAwaQFtf8BwPYFJVemFTsnQn8VfDPpX8XHeSkLJ8",
  "key10": "5N5cwCkFx2qHYUgHnzVrLy8jJGfaT3sbz5LXMSZqZPPtCxMMdMC5DUorUh57dubg94oWjHb6LHuhCGfpajqfdFMY",
  "key11": "5CeYyNEUbmaCRaR3KGQpxFo3xYVLUce1fMNZWoB3hjKM8FoZXFdQpnH6bUDnkXoEFcdqcBrAu2ULos6cwrh9AER8",
  "key12": "5wG2VsPSy4MXPkPkNPfxGvz7b5mbeinoat823MxUnHjJTKBEJdZfXTWFeE3MGiNhpKUqo7bTaD3ek65xJXV3YhHj",
  "key13": "3jrWLLdyEhVWojhEWRiaGsML5ZocHXLsgGomUaSGcJzKb9kMeA8d74dFAJMbU88W8ENURQFN3HqhAnUGHqYy68iB",
  "key14": "Ny6ePwevD1A3AimRwVwaHPozXJWsRyotHNN6hWfPmXJH52ggy1FPxEvcjw5nBnFGhxFrUzFufJFkqJdM5czUeiX",
  "key15": "4pjENZTuAHvHForxLUaX5cEixhdEhDnxjiDt78ESHNrFcNou6YinuFsCow9ZyZoCVTePV3CbttuZwwZRAsV41pPK",
  "key16": "3ab6z3cca5CHiMN2JKT7tbjwainrddsrb6RA4BhB7YLG9Ei2FKSZ8W64QT5tkLhrbmkVreCYa4MsxnBNACmHc16i",
  "key17": "3sRuxs9bp7YXX2eKfJ24mUvXCCqhgVr2AoEihFAvpKx3EBWFjxEzYKif2e9gKH9jLTfqP3W2wjPcrgeJotkLBABb",
  "key18": "bfWwNXxzYEyK1D4JPmU4riPPwdVjrNfwtcfGN4L3jkVKCJVAD9qhqkLkGAtbSPNGpw6EPRxqfoK2SMY4QkPajH7",
  "key19": "3RFFdufC7YByshemMqYgaeZq5Za71ec3ysVMbG7ANjYcwzkHMpGYvMzBvxJ36YHFNe3EriYavUFSQXo8Z252RKUU",
  "key20": "3kLX5iYaPeaw5SGqzg4L9VEsn1bRemjLZZ7uzEgYcLgtAZSrAjzz59EX7cQjrKNZ29e9ARL3VZSpBMib613aMEP6",
  "key21": "3bv1zqd6auAKq8ksc4TKQZJcagxfUXcp4yiBdEqx9xyy1tTq9vunpstY4zN9V2ScqEo7eiHJiGorWcKsxCKHHA9Z",
  "key22": "3NyEQinW1cZSk2G8H2s8BYtxyXswiqCjV8NwVkc8ckQBf8wATvkpLGmZe14fa6fLwFQ7HH9GKTg6vVNHwWUSiJzz",
  "key23": "5P3e3y6MLADzb6oTZe31X3ZgxPBUJqCjhj1pLQX5EpwNDZi56SLmH4Yvq756uZE8U35U3ZZWFiazQVkwBVEssF8Z",
  "key24": "nxPjYFghgDeQb7FEbECoBA8hcNRfY1jf7NonMZqHUXBrL5irFDXuM9kTMQRtA5yqGAx1ayK7qXTveqMtDqBLgu4",
  "key25": "2A9uezYcr8gRgwQVFa1rLnhBzCYqHihY3Vs6Kybodr6haMxwwBWXhqS4WkbQ5FvmpDkfUD5noUiRGizBSQD5DHfj",
  "key26": "4w3vUDjeSZfRstUbMAX3SDoPYbRqAZnUMQ2gwBjf5iku2XU68dSdQC63cFyjLcV53H4PyQjGcnAwprVDiRFMupT3",
  "key27": "5nUNr1aVqVnm97RjiwCyiCdmbRevtYL3DeBq88TKpwct4gEVEeEvZCvTxrqmRjmdnhRqtwcgZcTTL9AwL8hWxGdR",
  "key28": "3fNeRBsiJyBLjbz7WNZ9kgNJGXM5AEK2tjDUWScUguGcNrRPeHzAjmSsDoAzWUzbdRV5b15Az74DR7pQXjwu13vV",
  "key29": "8mewSZrjzjLsoa2d9eoy4VLhuXSJHvDkYDfzWsNku7nwa6KGsrNKvLgm5xBkTA1HQQq66w42AZmtB4MtZX8vmQP",
  "key30": "4wfBVi9ujD9oJo7DgL2wR2nV5oqDdz2E8U3tdXmr74gtvkLc2U12Sm6DNz4ZLWUrFepethXXQTu1k5FQhwpXrsTt"
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
