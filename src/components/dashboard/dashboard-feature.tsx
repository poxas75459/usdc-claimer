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
    "28JPihDbauuB29darjJuiUJPV9sMoVFpSWf1L4AgTsBAZtk3EJe4srLEPKBNUBU19Aaz51oXzHFwHhPm4cECtSYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nc2kTBUg6nPshJnmjzp7FoBvMYNda9h8U3oiTAseDgNV3gj4cnJuEZ4cEDLyx7gKEB9VNMiLdpFNB34PMmF8U8a",
  "key1": "4Pvim8EEdFzyWUdXeMUMcp9MpXC9UmVjuwkj5Lok3Z6TV56wJUn5NRDSwK7c5SxKpycD1PjDHnB4Ui5eqz9b37Jy",
  "key2": "3jMb9VbzCkrhuxbLGKNUbqXKYxTfVhk52tfZUtkMaNCT5yHi52uMnZiaU1RkVN5E1YYGAid2NPGdcjnNPhhBAAEQ",
  "key3": "43J6fSFmf3bF86MxVBUirM9YUiYwH6YVf6XY7ypPbUNCDUu8V2kXqvkjg23dipVpKsqQKswmqFonNDS9xSgvVXqX",
  "key4": "4Gb5CE7osuTHVLGGCorDhXQ8ogFy43XjHsrjmnXvtSrPA9Bh6ZNph14HZU7XaP8873DZwXR9RBQPPkzJAoVdmEpp",
  "key5": "joPgcyvwiGCmPWEZfSmZN5kDxELvFWCSRPDgfHcau2fNie8VNKWTaazPz69Cse1wn738ytQpNfoXoK5e3Tk3P1x",
  "key6": "2FzXzg1vK3KTbtSkytTSobZxpos38BpUZ82YzmMVAuyEKZkrr1Yh6cvzMPAtPGwR9uc4jXznFNkDC7ugnvRCpqXL",
  "key7": "37jXfVqDuUcYBGnTo2g9DGZmfCc4Wk5y3hCJf7sP9jE9ZZxte9RTykbxvoLxSPTHLdmgLHnmXZdiCqgjeaxCRtBj",
  "key8": "vzMW4HjNFteeVFH5qLABC16JinF8fSa5VKyywPrkfTzCGLovfCoWB6Xi8ahoupwt74QK8yKVT3kEXsG9ANYLZwL",
  "key9": "5BqXQZNhFUP4RK1CZmvfN4YmMnig6uczfdcJNYjryQnzZ95U6XsTqneaHDvor1ZVjSjDEoCMFijo7csBpFzWafoJ",
  "key10": "61ooo6NGhmTgp9YjcMXgUWyMH25yfpWfZGNuzxqmW52Bieg8boQUFnJdZEp1NNJQxLEzvZiRR6UXtzMj8qWzWprS",
  "key11": "47MQTeAZPMAgy6fq295HpZ7byGrKoDjG2PbRNDkUASHEgRicX1ntERDYXtVHscuMG89HUJ9c4Wwu7hZpWUG6tMe",
  "key12": "5Fon5oPXy3mqsy86NtH2ASPL3RwDkCzibadwkJrTgxRigUe3BQD3GQvUWzZcFc78wnpLsQ6HVh3oKeEMBosF326f",
  "key13": "28cB2mDmK3Jzfy1bMbPMsYuHEpoZA5Wtv9T1MGURY6Xo25xtzw1JMphfgg82FernWihP17Se7pExn4aw2uoYs4nu",
  "key14": "56gW5jxPu8wJDKDPj3YTZtgPCi8VK8szPWciN4j4N3HKVT8rFCE8VCkJ9R9DZNyfER5AB1ear92pCjxjN4vLPHf2",
  "key15": "yNrB9SgyFA58iWsGbea5s74ahJqab2spq5GRYwfBzsb8DrSt85vBqCPMpg36YFtdmbWFgoKyMA3AV4hTDif3q1r",
  "key16": "5fDUw9d7ZeAyvNRoyHmWgfz7VpTgzQuoDiXumxXKb23EV6CmEE5JL39T4M633RQaSpKQjJSd7fmNMhex1PhZLswR",
  "key17": "4uYNUYsmNqv8zDTXwrL1b5RNrx3XSd69Tqy7hfYAeT6Y5n7kh1r7dtcRgPJsu36uvoFQ8MddfA5oHQ7VBhAMwHaj",
  "key18": "3ihNcma5wfyVK97KGVbN8tLaWZs6Rj4N7uq7GUdqNj85sNz3NDck3E9chCPfX5pJ21cn2PNwCgQdNQJoUXT7MS3D",
  "key19": "7RThYgwukAwdz4yNvqNGiWzT7MShrk4rqh8UKoBrWgvfEdn7JBD9H12A6o8PGkBGKN3zienmR3rixVjCzu9vhW8",
  "key20": "5AL6SC5FVSAdQikJt6zFkGXsMgKVHWusubS5kKXX3WPSeTzkyi5xwtJeHBDTtkk7fuDeruhbcUrJ3mcn7a3MYrJN",
  "key21": "2gZ5rjdMFmfQSezxwDKFzSaeJMzjvQWWYamxm1cwMgZEY53ZNJj5hW4P7k4fTcDL1x5VpYRTDgyH49sbtS7L6odZ",
  "key22": "5zJLMRg7PCUsNe7UJh4VwfF71M5Szh7VkeSv46bKkR7S8wz6jLpYuLzXu1TkedYhY8TjfQKP7Yfgbtpd7PE1kfMm",
  "key23": "5dW3rKnyZpXH7Nwdgxn6sihGGKaRcwDTkWLtjN2HCpfY1VsVYmuq6JWbQeuUKDmjv7GV69rxJBs7XEcgSJ1Jd56y",
  "key24": "3bmo9pYyzm3FdvVrvpVnstDKGWqwW5M1gRmqTy5xo8AU5gjoUqmDZA2a6Y5XZc3Kar8feXPaRAuAoX39wKvzgzxT",
  "key25": "5R3e6CZjyCEyfTiAKwDWSAkNtAKeoRUyNwTU6w7ekbV85pRKuukWYLPEozsQyHDKttBADQwJXUZFnTiN2pEvBpbR",
  "key26": "5oGeoTkBV62Vhw5FDKg6dr2SzZMH9r4fgPnBEC7DwZs8BkJ2fwMwGs9SWN8r5ADdJ7WRahpJiS4qQkc9X1ToM39R",
  "key27": "3r9XUcVDaEBL7TTcG5hu4VgP7xNhbU4PjzfvwCPCHAqsGF5xkFT4WeiJYeYh25AMAg9rndhCF5KVpbGr8Z5Kdvfm",
  "key28": "2hnmgYqs3Mooo2J4FXfVZBf6WkgoWb69gdN2VY4jF61hQzdewQDbAWrUzuWVBuqH1kpGT3dm3znA21QvSPxsK6Eh",
  "key29": "4dxb6NCETi7Lo3wybBCZgG8kbKwjhvgeZ3QZrNxzDsRhFRPs2kzuaa8JDHELGgEJshBdkX5Rp2gowgUJXeE3ok1V",
  "key30": "5jPaghvL5J7mmAEUwXaysJxTFTHGpXrFyUrbBziyXJB6xriEJxDGcDkoohRpihoTsnGixx8QYWqCzTkCrwW6HCYK",
  "key31": "4iyTRhDyfmpRBqiTeeRv5Mq8xVLnqKGFA3F93Y8ax9yRUHkrD7yL8rZQdJJBkaMLEL6Mxwn5d3WYGoUwP8W1YnRM",
  "key32": "3Z8rSvm1GLpqPjuscrBSnkqTy1tH9yW1F5NPDPeRyKsD2nbsNorQjfR2Tb9F5Dh5UzvUC7Y5aEmM4jxwNpYJU5Wi",
  "key33": "35kSCbZ2ocmnZLbC1HiCnMBEd2oWNVJC1LdRiWjHZpfyPXR7bQ3VNDqRheJWLKuoTXxcLhdtnUt7JytoGwg5ovXK"
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
