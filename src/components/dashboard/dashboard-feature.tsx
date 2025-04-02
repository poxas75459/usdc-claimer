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
    "5EnKq8M8SWsbFdju7frUQrdj7npSptkJPDamGHp1tZ2fL6dkgCQGVJYGNSy77mS8CKaW3pdU7qDNV95Zsdhesyzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hSrGRAWzWXe1mo1HW97fad9Rgx9dLn8igfB1RfEXjKL4JXXFRszDnN3sVKXFK3t2oRe3qD4oFFBgohrFMpMmWf",
  "key1": "3Gxiab1bw9ywLwAj6uCoeRc7rEUq6XiWjY1osUbNpMrgZwjwPa9u5z4HHmVJNrEWUTLEtFKC5wSkQBAgcb2sYcWR",
  "key2": "57ah2KrgyTubMNEW2yoDkDBGVEwSZdLKNoSB8uwyqduSz8RSQDPKceLsQhW64mDryJCKKk6Ge3FeX4MzRx8sq38k",
  "key3": "5VUqc7oNAvmRWU6hm8r8bbf8tD8PriMLrekga96C2hEEueRKEP8wLJSDkL7yQBgXbQAeRCPLZ5sep7f8P4hpbJAW",
  "key4": "sCGzbLy9aRXbH4wjKC5Srw3CXCnWizCnJ2vnE6cnSZEJDR5PXzbnk1mp5jr5Ct7ijVfMqHEJSKTDyYGWGXmknsr",
  "key5": "38SCAxQWWzFtGxuSD85jEtHXHvQnmeKiAdi6jhadxdkCVHPN3R1TxEVKTTFhLNTmAJbAsRzpE5KYbeYg5dQdRx9F",
  "key6": "2kkZcTWA56g3EGqKNmVCaWsLdDiH8TTQwJZ6fB8HwuKp6cyVLnzV1Us5ZSrMYDcuAMhKWCniqYELQfo4fcmeH97o",
  "key7": "3xB1GTkViXAqzh4mmAjBzvZ1voYyPJwq377EgmdGge67MBbEqEaDUqPsYNajsHfYwySVHbF1GeooY6FmDFwj14Uj",
  "key8": "3ncyUqQH2e39jzrh78r3MrjbKfrxhbi63erShkT95hjMq64v2gzBHH55wUTiLkyssVvWJQ4r1VKTgSaL3gqz34eJ",
  "key9": "5ETMbMf5Fgp3TJ1KBY5shzKdhHBcLPxJxY8veMBi6v43xSghQYAKHu7KXuZXv1RF2oNF6atvhjBxVZaCzo4cAktP",
  "key10": "4cf7YNDdSwcB1mzKbs4L3fVJh96rnQzx86LSRAEE3ZvrywUdmMRJDgY2tx1pgLZJuRGySajuf8M8hEdy4vuxoF9c",
  "key11": "UgjfENKKhvorevw2bSCpvCrzzikfHnAGFiS6Hr7zQTJAHBCJ5c9np73mpVv8VEN1JmdgyY8h11UMCbCjbPJmGmF",
  "key12": "6SzDUjvMt81SmvSz8sxUa8fR9UiZoMgNQSWznXyqidSGL56GTfgR7H3L2NJ2Kax1H1d9mgCAvsTe6DQcgq3QXUk",
  "key13": "2bnm4wycGCNQ7eZsg8XwjSxY46EvgKRvCp8Rx63x9ACNQqqHTQiENR4ezbYwU5v8yMJqo695KCrNw6k9TDF9GAnR",
  "key14": "2ott1xFmbSSbnfhN2LZ6Uc4wCRv7usCrM1eBfAiSD7fmp8Xmb64iPquPve2MFjyhDgcuzsMKEwuxfd3RFgACoaA8",
  "key15": "mvQfqV9e4mBJAjz5HuPZBn1hKZ1Knud12SoEwk9ndVqMCBsFU5vHMX3eaRQCw5Qm9M7MtWN6NoXX5tdHmrimi2o",
  "key16": "7HJxpY2PwWRu2EUD9af8PAnFpC74EwT8PCrJLsj74GT4X9Bp2qaxqaoGgcpdef59L9waeuLg4mvjmh95QTCv4oC",
  "key17": "4UgPsJfGWU8zV4FWsE8tx1LVaEXmTi1xKidxgroxRaBLVPrTJeuEEgX2BjRKmkBEaew1RwPJWrVxnKanD83UpEwc",
  "key18": "2D4nUJJa28hRsN8nw7GYRBE4KUywXXjnkeVZeasM9HNdcnyqEdwAdkMo6aPoMhNFLLJnAgZQX6wTY2w3LsB5j5eK",
  "key19": "54vS5tu1RsRnXUNbH5ntr3VkhTXKkK7SfFV73Nba1W8bbKGTYMBobSDy6q5jpDPsgUG8eNYhPdxz3VigYrLWb2Rh",
  "key20": "3n5XfNZHqZrfRU9GFYqXAHQZSNhGrg9CSCH4XQRGhgyLELhKBjcXWNBDQzJiPQb9hHaJR6BSJd57A9iavknWtNuF",
  "key21": "4xbzuYedVHwghyn847i4KDbf3g7Xfs1RtomjXTo7RTvsqVN97HVPHkan9ZVDqR4hoGmgy2Jcg5LrvssyGkYbs5vH",
  "key22": "2kdn7mHG14sYn2vpASrmU8jhU9zpFvg2iTJ1ibZQDARG4EAZpyrBqhPQAUU75cLU3T7apcPiQk6ndr5nZDh9xwaP",
  "key23": "5way5hk4N5NWv3Qj2S7ZG6X77D1p3HxsyB5DP3Go8KmR8ZEbupUxsVki4VaCLZvYyTmNgUcF6YNmLXFy47yJwUN7",
  "key24": "3agSSm2wEx6E3G3BYUxY1PTztkFNsjitCepx2uRoQLWMMiGNdK4xpJw2KQjrnWoVbbMvmQU1VAHjn76dZpHGzJGS",
  "key25": "2YVnQ9ntE6LgnmbwwbQDVW7XBDezAXZ7ZckLZWmyXbF57AU2s575iC7k2jDEGjdpVWZwqzhu7x87xxgkoiGH5MqF",
  "key26": "2XejZb9tCFYHQcZY1juiWfpXcGzvPgS5CCiV2iJ29Srs7e5M3e77KpoaHVSRDA3RxbJFZgHLGDAUaDBuXdaXzjke",
  "key27": "2fWebNgXfqBjq59aD1o3ft8AXcFgKZWacnbneFWFcC9HyKo9z6Qxy21nGKQxvAWLxxwgG5vmzVSzSV699zpMgAiS",
  "key28": "R9oxnvWskGPrqwfg3VGrkq5dnu7gwQ1CZgitNC89qrHS5EG47dgVB3YP54QJJBqtJtN3bEk4i25wBNCPeMA62XN",
  "key29": "2t9Jq6seNU9LopyEvBRr4QyqidHCFRrC3nhySk9J7SQL3uaNqpmU7tZ2htsHkLVfKzHHzCRhapyN9KBhVo5WbZeU",
  "key30": "4KGUWj2LZMgJtkcoYGki7jAEbySJFuny5JKBAmhcV7LSrvBYPkUQfYMAuqHzjTTL8ZDw5J6aqEFxiTNiAySHWqBw",
  "key31": "4FLQcJedGpJFM3bBVyzkjmQYmLTXvnYGhrBkWpSkosc9kxRmwcRRR3Pto22dX41XYjxPYLPXeNiGcVkryFWohiAt",
  "key32": "2rY8vbzpreitVdumixoiShPUUYPFkfsn3Fbtc9nepS3ehsPc4ULD3ugCxjqdvR5zEh25DaB43iS5moiDAiQVc7JJ",
  "key33": "dXVGedsoqNrRLi59jDpSP8KAVwHrJcJ88wMnuZpJCetWFCJx8s5eNKQ48wr4JouvHLBQ2P9on3Y2cdRyhWZ6rEg",
  "key34": "5YxB1Csu3WWEq49tydivX3i8HMy8rtP2bqk5bZe695mYLxiTdRNDuX3tKNyGK7PJt15cJdDqubNgWg2Ep2TxQj36",
  "key35": "57sU2ipUEpfcW5K6wKBGDYnMGjdWzP6FLnyqpmeForEXGZbQrPcmwCgp9cu3AAY3oonSbNRnwdLpwyY6SsoPTc5X",
  "key36": "2ht4suzgtW6BSHttXMfyW5tpUPqnfQR6UKY2H2n5GsQvu2KQpexEbJ2XiqAjjRGUkktgEt3aEeXVfPFqUShbA3ZK",
  "key37": "5eX9pBuaGREcAeRnKEVNJTKdeFsqic6jne8psFh6FnxwRrrwDY3aZ4X9w4kvTxE367db3j3g9KNWyeKPHUN8PfYg",
  "key38": "3xaVVudiyHZkQrxn2bu4fgyaEbJjxrHHFiTfr6g2XM7DiXJCVcKvF6PHv7vNjpNvLzkL6Swt9B9YZLmwVvz5edsw"
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
