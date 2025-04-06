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
    "4xeSwQnrMkt1AtQFzszocFYaUi5ikaPMkDxs3mfi8J8bgCiNTeoR5QMLdGD2d1vtN4VnqbJJeToSrS9RdSQGKUY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9mdzronZdLPTmkFvW3BMCcrU7cBr9b4VfcqvvX5DF2ua7z52n7fF5HGJg7n8EoYe2ab6m2jXr874pjpVKPKp62",
  "key1": "41svEL4mszc1tu1dYECac6AHaabhrvYvSHic8m99un4t9gs1MmgF9hsg1qxMXWpcCTTP3DbcPkjQQBnPdAC1mWBz",
  "key2": "4nT1pnRzEnNmLTfMucereXaHoJ1dbx5KjWcDvEQQwvEwjow9penB4QxBDyRMvRZ5gqwdHsucFGdtmTbkMbiRhBKe",
  "key3": "4AGoHhBdQt72tktSyLjABC1yWQuVzAiVa7b5My6UN99kHd3eEUEgv8Gxxjs1QL1Q4HJAUjADhGZ6kL631cDqx3nj",
  "key4": "3ryXoHeNDkTXkauJDC9rHZCw1G6gVhGr1UaFyHZZ6J3Pw95znzemRJEWGmT5cEo1HiV6GXb3h2fPY7K53SXeBVq4",
  "key5": "4nZuJsLt5w8uBxsGX6nGcQAE5AedHPcyfGfqxJSE9k8a9CgwsggrHs4qTsAfSboswEevqTMCp9dw33NXY4PQMubk",
  "key6": "2wPAPYaeQkGyeovc6WCs3TdNsethTnZanBWRfbNqZ5XE2fbZtxH7i5JngXZq4yMx2Vaxck9LZpYbUSfYiGRPLNkc",
  "key7": "59x3VCFgGUuuLUVvMHcDgxMtwdDcMwW9mpn4r46cm864DnsuNBo2LaQwTMER9QcVNGWHz7hDKj7gCxZgfbfgRH9q",
  "key8": "JVWvabfocR2yuwr6zCPNNorb575GkvX23ia9CB4cuDp36z5C1ZkfQPXGsidmp5Js87DcZ9v3Sx5jJUa1WSAd8iC",
  "key9": "4DQ9zH4LDpQCzbPJ86fj84S9isScX9B3cmWoFirGvEpadBcXbFACa8T3N9azy8YALFoxeJvUUiJrCQ52LQxk9H6q",
  "key10": "iGQQaxnLNi9jpb6FNrCrPPy63bP5nijM5o8NgoS5Cq2VACUFCHbEKrM4pxDJ2SWWjoxUc9828crdPwrLGvWK1mW",
  "key11": "3AJLgGRQxHQmXpypuDKRAwUvavvsWU8qhxaMwcdxYT6C4MXT7zW5Qz7xG8bgD4DMj7S4rHwpZitnXDNK5gR2snGd",
  "key12": "XofXXUXNpKhswEH9PJH9Rpi8nj35TFG3X6A1qtNJhMxutgAf2vZSVF18mN5H7xzndAmMqRx2fVddkeHsN7RCVJN",
  "key13": "3a1Pkbmzm6mkJxpAfAfSVXRvPaiKi6LVFuNead6GjwCCW9cF7S2wSzQ4h4DQAMSu3FRJ9kz1o9pfUhmMB6BHcHTb",
  "key14": "5hgDmcSW2b8UZkMNLsNMpqPJsZfkBiuniFWdAnumWPrpKJYRE9ZPrFxxkBFShTLUy3zakkufjAFmZdZKuLVcX5Yn",
  "key15": "4Ry3vsq3ZEGhzHMFoLEP4CzzUyDDdHjNde9fiJYGNENxNreXVUwGsPZW6UcwveKfHZajDp1hNoPpxZFVmcgFefGh",
  "key16": "3MVMyBoPc5eK5ghZ7scXiptKSH86d5sEZA35EMkj9MRRJox35xz92G5ExctHmrHW11SuBbZLH7sAUqWQ9C71J6Y3",
  "key17": "4TTWwr6JJpnhNCztCttgvQTuRcrQE4LG9FV5YNW2QS64nZQHhpRKsfzD9U7YmnBTiLpfoj52ALgtAjXex9CPcjgU",
  "key18": "66ze5nDsmLzrsZvMxj3ZtphUv7acj26SRzDscsjYr1qsqBPu5Q5phoTKZhPqkNpym6wmf7pei4KkdScnWCRPBXB7",
  "key19": "3u5UF9AjTvHShjcBRxoA9LnLy9mAAfTKQvkCoKRcdvZtvcG6qUZoNsK23FxsmxYdvdpGDSyKokSAw9K6kYQDTAbE",
  "key20": "zxHVkzL2MztPezUDNCVGrWj1i9Z7QS4BV6SVtQMtnMj8Pkb5TeFrjdvF9dmKY9SHvVupdCSc6XU56k7dxqBuxJD",
  "key21": "B6HWCYCPFvHL2fHuE6Re54kn5ga2weVK98rqAMbKufBiPGMVuiozdmiPrw79gJVSxm8h6xGVi74TkxRqoCuoRCV",
  "key22": "4AEDTtHAf8ujppuVaF2PDni5Ee7ivQoZD79wmACH5L1evdx8xcntjTN6SF4id9BX7nCvXQ5cqbNQc9HyxE2uFmFa",
  "key23": "4ssEhqvJRvNdEudtPHBWdoquKof6EQiRNmC9CAZbquL4VfgbiaZ9S4VV5t4EnSGixV1BpVtyYzomFkKMYqbm1M68",
  "key24": "2qHVTwmNh34175enLrvUTE3NqMFbL3AzQq3127SPLDoSFFxG2JPZK4D19kbPBYEcQ1c7WT7fFD2PuPgWYfC9i4K2",
  "key25": "5zmQ3BwD96mzt25QoE1HiZo2QDEKcY8eNnqqCkG6j8KSYmk45eTigKcvGTg76VS2w8vsRNQRqoNgVhBQYn8eCZjj",
  "key26": "3Kk2TnynPmvNrFUEffuFUJVgMQLg5z5wCnNt558F5o5oA5ADjPbHSTGD9zyiTfoFqwinS8wFNfH7Ha5y3gpALfWL",
  "key27": "4Lx4AaGxtQixK7zyr6nfc1iMHq14QrjUgKtkciUCjqnHjUXvo5RfUsPUpAayeYbUUJ6JgHTPNXHeioWKWnXqevFp",
  "key28": "4WyLUhbYyJbrZXgJNxjNybeTgYJoa8zUCoFPLTdzhgt7w4HkbaqPQiCVLPUBJXREnzhGPxvkDJFdmvbJwgJvUqPZ",
  "key29": "35y2aZcpGQ848PH1ApHhz6AhFsUxXsWTi9Qhi6zVXxfUBs6MtyqtyDQ9heT7RWZAYdq3g82RsXDvFT3VKK2VedSs",
  "key30": "4amDwFghfjzKpGriYpxScn4rcRCYFR97N2Hqk7jvyoqWASmRekzXSfFx3djhdYNdriD4HGtEMEmqV4UBUEy9ct93",
  "key31": "4t7WK7rCQbtfzhTRmEvM8ZXFWHnpkzJ9YH5mYPWM6ncCEAgeTvix7fHTRUuf6nDeDxQmjCaug6Y4LWeKfmh6WfS7",
  "key32": "RMkTG1R41WzzWxV4H6JZGVWyFs8HJ4i3de3YjxE2BArKmxekbKpGm353S8951eMaqf2g4YFXr56382JLM1JRSBe",
  "key33": "Npb46pk7DQejsc5KwXhKrJm8Nx6iE1x8neNa1u1qb2WJDxL9JYRicbZv25JA1jLvWe87NiEZ3KsLyetNisfiuv5",
  "key34": "4JLsjuExANzzAdMrLvdJZGbVWN5RU2XFq5j86ejCbZUVGeDbcVNJLRsvGiV98nxNKrP3tPW4e5Tf6R9rkL4i4pyT",
  "key35": "2jBaA5rjAZNmCxRvCQLh86qNgHcM7zVYxtRrQFfrEmEYH6mzKM1aA2w1gvbrPfgogKbZ7mzcCnvCVdisyJKsWdAs",
  "key36": "2zeaGuVbSDmVkoJsNaaAwa2c6ybewYAubWg8HZvaNxGWs43kLWNT4zS6wWMNAehWVBAXfNZfCcaMgPdL5pCqAx4d"
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
