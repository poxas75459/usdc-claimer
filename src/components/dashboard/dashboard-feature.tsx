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
    "4AazH7RX5bbHXXUsDfVauV8yGuRkNED6gDaP9jAyxuWDybtByN4L9rTLzXMG9Sdy5yL4HLeQGRj2ZxZQBGwkMHy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiu7E3VT9uz4iuw5TadDadsVZZStYJ4ANhNAK51MHuBerGLziwCLnp2URog97xpqtTqhdt1m9sFuNpQqupDwtzu",
  "key1": "3F9Ai46KZa5V26coNcj16a5vtPgNXRX7YRoJ9ngMFasRMkm8QCZqE9gXRbyZGg49Zcin91Qji2xFpjxALgHi4ns8",
  "key2": "5NM55JwqAToxLfoTmuFotdp8S2rURfcLop9WtxT4fZZVE6Dj4iF7yQpZxbKRVrCK1GR1b6PQ3tHCAwg4EwkjAFgp",
  "key3": "377HRc9YoeZxWmfsmE247oacycJcqmwoTCRcLNeUwsTEUq1zengjBu8acLftwSy5TVvYSqfaE9kDifS6xmxDxkHX",
  "key4": "3CPrkApfmuJjr9uEP66P3nVhkaLqrLCKVsD8bkZu31Pk2BtznV54zRRPxmHkYyEmHxviAHXPid6PSfAGsE6nihXG",
  "key5": "63kYeq4DUWaLMEbeXF4u1DhNF8bSe5XwPVjsXVnoUeShjKCNwL2DzNyGLMhB9qNo15XhVeR6cLe3KGuhAteQhw9R",
  "key6": "58Nz9NbvPHW6HpPqFE2kEpJCNAT44PP6jxqtgSWv1RghV2WCQJRJ24Js7xJDTh9fSeFaLddUNJm9Td7MrsdVMb3d",
  "key7": "4Wcih5RwuDPFuxx3sv6p7L5Xw87V379v1kMDPAcXqXGtAKgdaJKK96hEvoH3E3MedrttUsyhayrYXTFFTWshrBmV",
  "key8": "4uXX4kGW8FiKfG8BobEoCZMsQ3jFoBiTkuDk17G7hx9rd84q8gEqy3ApjwCv5Dj2z4TaRyVGPUB5EeYfBmGksvb2",
  "key9": "3ownWEPRYsaC2fUasKAwEVs7CbBRAvNVV7ENdfkrq4AdEQn6uw5eRjhTnt54s3tKyLEsgsgRfSvYFN4tSHP2jCsJ",
  "key10": "4PiCAeU6btNqQoQigYtVBoksDgarJxzzRGvmdxAoLTUfuPT8CfKsugACU85NXAXf7ELYKmTe7GBmCorFKLbWsez4",
  "key11": "NCkLVRUdzAjnVYvXYYD7dTccyfS7jRGZUuRq76ocxDJMQWRRN6Biu8uV1sGqFrmAqhcSe7dmfKuHUK2rBxLeFg6",
  "key12": "2wbYn7ggocs65nf2mkBAz6KSJ6P9HAdGbKuXjYghu5NSmzz4kp65QeSZ2v28Jp6z8SvZ1p3C2ae8GduExcozvnuP",
  "key13": "5MSo9M9otHJU2jpDatfGkG8YC7ELHWWi9erV6oefkhpLv9dpXZwvRppFcuU6ygK15bWSHUJBrLzuibKgs8iYrTzZ",
  "key14": "43Zs53YKrAoLDgybPStVBNpD7SiyQgAj7YgtFgCNLadd3G58ZoPZA1ns6XJgzQMz1Bq8zgrm7AK3pZvNz2vpstEb",
  "key15": "3ixZCok2faEPr1BsFwGqmuWRMt7mw8vcx2p2xkmKpGK1JLudQc8A51Qm44FJD9mWTEzSfYYJGN4duBFDchjCtLwb",
  "key16": "4bCQjVfjEDH6GvT5MZhXApagt5FPQnp3KaH4hrQ9WmzSJV5T4zYaAsKPn18w4WhwdLaaPNsG23e6258ZHneNvcRY",
  "key17": "32qGY7uQ7wF6uCFkiDnWMjJMoWJbEGbrD8Sw9nEJW17D9KDCCkGu8dbXVfwrVn62uBe9uFvTAc6i5F7JoNV7Z5QK",
  "key18": "2YQxM7hySEckYE9aV4RgQYd2daDcLKpAytUmmZ1zUV47Axd1YVw4u6pDfmkfNmknRhvmHdXdK6VjrD2ZhTXLeDqn",
  "key19": "2FrenNM72hNNn2ihRwUwrZn1D1ZB1siorXcj5gRurhdchXFXwc2y7guwBYgbKEd5etdxYe2GezY4pMDWpVHpb5rp",
  "key20": "5upWtJ7HFvUSgHbTNcj6VH762Nw6UaaSkVsfFD9nRR2xiPnQvxtrupHmaw1qEjUmWDiDLjTgJe5VowPZuzyBQeaK",
  "key21": "5FwYRjvzwbj1ggtd9xpDqDhKC8BTsb6N9x2GgBE3YfTT3T5qLpMvkmfzRWdAzG72qWcgcuMSeq1H6yaSU7QgTQqP",
  "key22": "VNpsmm5p3W8irMZ27qmx9kGQLqhJwwjLv1AizoALhBXAqawdue4oMCaBaJp1ohuXR6AiqfSmTj9Gga4NFmhy7TG",
  "key23": "31tjVXmnUzaEXoU7CvdgLm8fTw8wHKno6mWYnsq6RYLUm4xCe69niRBVVqzK89efnmgxjUjXaefaAk6AVP2Gu1LT",
  "key24": "5ybwB3t3cAuduVe3crvFBJB4TthPhYGYFwHMp6ggKPURXZHFJHG1nhXPUjtcnS7Gop1KbW7XHFY8Qjkraam5czpx",
  "key25": "2QWWabjdSRUsFtXCad45tAjQujHcU7xLPgVb9vXfbj2wUGhWs47kENqnnc8joDRjAJdq5pjK6yX8ZMYtayz8rNqu",
  "key26": "3M3NAsTLym4EcsqqRSkkzFjxFprS3TaF5jMzCP15fWZc6MxiuAh1iXoaqyqdjmgt4oqA5PJ27ejcdxZf2XLkXrqz",
  "key27": "4srJCi59RXbYEauGL9hUrghz4eNoDy5kKmUM7og7nzTC9ZEYMsxido4F2G4FdrrqSq9AWCjmPrJ6BzhPjtduabMA",
  "key28": "2uH3Djjx39ChnRF2Ftx3FH2orBQp43XVQi2WyNDdCU1xacd5U79Sba15BhsZPTQwxqWtFqPUz4az9f2uzxQSAtAz",
  "key29": "DkYUAqUg1PqJ1LSkP4M5AkTM4DYMU6zWHcvZSukRfPrFDEjWrb6XdPaad3sx9gSJU9GguxugCBAdYGTF8PNtRZh",
  "key30": "33yePMTo1LFBxdkyUp694ifoBpgGytPSqp4bdTfGy4PHAR8S7DveB9N9TpjULHcneMja61YJUP4a6pCqvQtb5D11",
  "key31": "3RYJSTk4BTfUkUJTmLaP9Y4Je1h7nhahMQeDrNfwRtUcWFjMUWCmvrsMM4DXRsbJES41oEad44AocpCtn85EkKVK",
  "key32": "2qxeBL533HJub2hH16bXttm59UBEYtR2XC7JHtkPmscuWTZteBF5HMWyRB8Kumga4YcNecRKzkCzubZWfZQx5hfj",
  "key33": "4VEKEb5rNFhyPCkX51kCuB1YbLR9XsiF1Lakb37uwxZp5VjZPCBVvvt7WLHT2Wq3FXC4SU3iMkqpkoGzbk5zoxJB",
  "key34": "2LmuDTio8o2C66ZyBG97rwey9gH8sXeyoci86Feov3Ha4Cnpn7RvyGo1cetRRnCBeRFcCMfygKFrB5NDPaf5SiCV",
  "key35": "67gN57TPi5h7UfYFH2KV7uyL9zhqsMbXYvHPUi51KkNYmDJpQZXNnPPhX1fxWQopvLXvJuqVjvP89BJqYspJTfQw",
  "key36": "4KH42powGndzLphMQv6vyf7BLrGNwjxYu6kcYhVrzBPw8ekK8it4gK4jCTUuMh6f9SCq8JQqSPmSfUciVk2u5VQZ",
  "key37": "XwETiTcBMe67L1jnme9CDm9rGEtnYuXeos8E9LhfJJqGFFNwAEqk9Qiz5Fw41rumCz432aadzgtcZC1ruMQ7NA1",
  "key38": "2k1KrxNvaqbzCWaDMjtUEJ6mgR6CU8YGwb5MDWN3V8WimvB3BNQ6dLW5eFWyxJUHoTeqPcQeHepY2smR9PVr6M4e",
  "key39": "36ttmnoxtymBBBywjvbSU1RrfZtW1QmXW6MPDZYR7s6sKCzpLPh9rNAcGCzqJzBrFHtFMdTZoTV67YV7QrDxwobZ",
  "key40": "4BnTPAAHPjTRT3o2SuvEmojsEi7uhH9k1z455QmA91wHHPjHj8wxtr7coq56QPRi8zD5zhWjvJwfQpGdZmc3cR8z",
  "key41": "41wRpKQHYZfXi9CU3obsjKbFfDCW5349NN5Ru6yfNcYkfoffE422NqG8wwsMt6mkSrHMbDNK2qJfqp7SEpUPYUzd"
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
