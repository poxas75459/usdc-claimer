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
    "3ASvprCmXSfvVuqABgFtbALHKvda3M1iRZ5S4KoDb3uS54LEtW2aHFaddWmHHK61MLFjLer3T26nVcdWBWSHqbJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rz5EotyoszZa9LGdjNHY9Rob2dy5XHwPJavUSc8CReP5mZ9wE9ypSJDS71qitkftfjSpS3jcWUtEJvqp5DAYGSJ",
  "key1": "wVdrUGxtJiFS6adto2Yjvbn9zqqPbK9UvA4YY71M2eL5RyDbVmHNZSCWSm3NvN5SM7yJFcs8YC7qdHLTjZvRUkG",
  "key2": "3wNie1HgPsUGKooLkCbqBWTVAijRMyqQw5ELxA5tBfVeignWBw6PzsTvA5ei5JQ1bqe2QiuMULe4hXguQeu6SVyQ",
  "key3": "3ZCWEJFMqCHZ5Qd3Kzpcdn9CHUNyVX3v56WK4ws4JoWE7tBGQfZpM9LZysR8xuWpyoK31uUiVuDxAEno8JynALio",
  "key4": "5ypdueRxF5zK91eoAeLhvTc51wwdjYDpDkRBJYcg9Cd8F5ZWxaCBxRANkbmAiUaeBHSHmcBNGSjKmh4ycvGegy1J",
  "key5": "48XnW7TzKbZ5bCtrRTHw3U9ReATjJLMFxiJPCMFrPeNGm6djzrc85BQk4jevwR1QsB8M3ZsMXdeTdqdrzy7amJnZ",
  "key6": "2JbgDNj4WfgTR7ttHGVou8sGKF8N9RxYHw1HjK4R2WnVxgH9ta1rAhpwh289PaDriQD9qAFxivPffJvzERzwXMNn",
  "key7": "5HXKoHnp72xEUqW29zfts1nkS7udqH2TamgndfCL3fQ8yZ6Yjz4Fath7QgHvKXJHtQwXkKPBRoPRRG1RKXaTQNXH",
  "key8": "sdNgSNS4mTFgoMXmjcPA2QjstdnmirEgVnKyZdhz5HMcwQC6EnhaZj7tR1BnB9A7qovbwniXAVqCvpDC3VXxTUF",
  "key9": "52Rmg4CL8s5G5kRrjGHBykCRuADccH8FyzKgD7puZqA4bzza9sn9MMRBFeZJgy2fmo1qx4yUuzURYnZdY9499Czs",
  "key10": "5CNaTuQNYNXGxxvKEqk5u18geHsnURRSDfghhKnKsf7TpPSe7hUtFkeVJuSb5wS9DnkJmD4eonu85J69dARmhYGp",
  "key11": "2MWz5QQVFB9jjLRKddfuAEU5CMrxaLxmEFoamg9mxR1EjvJ3A2H2JV9K9YHSYAtPRrh5Ck4s9sutXffSbtgmusHe",
  "key12": "kjBcsP15xr214Bnju54sMoSisuQzpQcxFWyWacxJoFst8okPw5aeJk3AKrr6uANPDqWG9wbdwamA8Ap6pkkNmAT",
  "key13": "2gBQ1K2E3APZWZe1BWKkZ1ThV9zWL7Nzy1Zm9ArhNKvTbr3Jaz18huxFgJcHzEQh9mRfVea5ftQ7aa1LWsxzocmJ",
  "key14": "2fxDo7svxyLxpRkc1iQLhG33mXP5y6wKEp8Y5QPes5BiyTLxmy1ZhRwWo19FW7L383ph4SmWFXbSq9rGeXbREzE7",
  "key15": "3tQRT7TLN2vojqk8NAjqvUwanqqLr3cUL798Ht55HkNjTmNZ9r31hUrUQAu7opwnVLSp2i2vK1yRU3uzHHAu4rho",
  "key16": "5TKyCLooZpFtmV2igqtUHsRzhU3fZQa3kMzC2hntTBmQHiNjEt4jpoCovZvDBMcviV415HVsMDESoZn2oyYhjD6Z",
  "key17": "5jT2XNCKrZCgpmo6KDuv9Law738jYHV9bp5Qh6mWHRt5NKCYA1y8CBinX824BjHqnYCYr6kJy2DGp9KYaPEp9up2",
  "key18": "4TGoKHfEKw47SeECaTvqNPLRZ5GYhJaNZxJpVyE8Mf9tvigKHB7codCGxNuhCRnyS9h9a27s2FoTSEtGhCsuQ9fA",
  "key19": "2RCUPXWfHj1RTzSkaRmdRv8fPu6UaWggo99zaEKx5gFUwoSZB4JtXpzd8tFx2xW18hYg6xLm5rZ2DFpXqMhyrqeG",
  "key20": "5QwfYdQJpANG83yBbufVCEd9q7G1cLNwe4XrmkNy6FTAJyuCAZvAyzULgX9aY8M9UstS9ipH2UPWit5NkoN7GWpV",
  "key21": "2WuwYH7cdto2EStkunuLLqAfTPV3bSFoHEECUPJ5mpGssERh3B4pQ6P2ZPyZo5UzLK65JCbZ2ZAC94Tc8AJoKbCK",
  "key22": "5oTCT6QMzDktiha1s6gvwhPF7ADTkibB9vD4FDZRTUc4pmPLjMCQmCZPC4dtSd82WJRFp3nFSvjYMpifZ7Vqf4e",
  "key23": "3UFeZQaPuEvJhAQR6CRDPkLXq62ErgKu1PNdbjZMdnt4Yv1G8dQJKvHaxEWwy4uYv4epzrKmP3p6jeUf5dpUiT5J",
  "key24": "2U8KAABAVEw6z5X3CJEZ4ksAxLDVE5T3FcXEoENB9Ly6x2wd4uQopHn1kBNzMQVdpN4MjC1zQNJnxSvGDWVvH5EB",
  "key25": "3FVM94DsgjKdb3zfzJzpSRT7rJYy62vdmzSbqRRWn2DHB1Gcphq9vHwwUqfjM5Xf94Uuh8Q8bpFbGXaisbNJNbQV",
  "key26": "5z2KKsvhCxwtvHnC4Gw4ad3RemjN2ZQygkoDDUC93rLNawHdj2KuvPBqzo7PhHxn6VmVfNv58KqnNhTBKJALJNcc"
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
