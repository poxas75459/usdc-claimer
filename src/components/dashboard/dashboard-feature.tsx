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
    "2ckQgc1ypyVKTGxMydvXhA1CpNr22gtWwxJvyBXPypuFsWFSWb6niNp9o5RBivUU7nZTFdX6JjAfQCmTekYEqDtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dH5SdjR2yXiB9QzrF2sgp7Exz9vmkxzVrqhADYA3S2Y7ZdvBLQtmUmuYZKv5fL3c5Hns3oLeA8QKAJygRrAMYM",
  "key1": "5iMgxM88qiL4YRByDarvF64oGrd87zFFx3N5rwAuxMf64HG4xx5GNVXLQHHSgPxy1g9jKWQAbBryTjrZsUXsRMwG",
  "key2": "5nU8EFodf15VuEfegGsDF2rUmdVkpYTUKpebdZ4cz15YCb81bcV8vcax8E6snNqR4mHBzDim4ScjQekZUMnKEpoa",
  "key3": "daKDKWpQb91cD4K9GjHeNTys9gHt8andsvqBnsbKV5gRj6e9XSbqJcMEVovLEPrvWhitJHRM2qqkzJXHSkGLrwx",
  "key4": "471rWMFLeozNrvDSSSGp15wYHAVAzoy383MQAB1fiGUWvcyaXzLKY2gXxSwm26o7T85537f5MqhRaD2L8WHeh5XC",
  "key5": "4wYUbyuTBpPqBjpmBccPWZgWUvEYGM7ptt9R6tbSyzqjmYXRKcWGJAiTRqX387YRJKX1LgQEKKSWzyVwTbTEnY3k",
  "key6": "2DkEiLtSoqf13WauerivD4jdiGH3JfteTE1MTcapP3vJ1SD6t163rePq4c3aFYvdLDAGjGVR8dfRk7fxtaYtorcK",
  "key7": "3fzzT6M83ipQLuPV8Vkzkf1ecpSH4pfMt6EhdrbinonCn4vf5PreRFygJ2SGdSFyMzEqc9QhaXz3BjLw9suDyAgQ",
  "key8": "3KLt86CRrKaxL42CTZxSoLbkiiSZJjk9TTJkWddegs5KsEcGCTMToJQ7nc12rp4cQYZs6Hj59qTeCYUDK5WJUcgk",
  "key9": "4a6Cen1bkum78bbcMHXUUMHtEX6Qq49nKY6Wvfm8Y6GTqmz1Vmkn7nuq6pfsf6oxi4nU6cwtmbZ7w2EwDhDf4bgF",
  "key10": "56bQMbcbSTbUMnYCSm8Di6qPD152MDfUvYhmwDCMWxEmWqZv9KHQCPrx4nQrwYLES8QNhsSdaKaxpyrsJ4y1q9rJ",
  "key11": "5hWtyjmUZQpoPTejERv6jZ8T7s1GzwGfyFuVdMqSJtPkk1EfzUZhy5S6HHWgAWYcrDxXrwTAe3jTWzvFcSgpYZVi",
  "key12": "4J6d2kBtRwynfUYjzkQt5F3fS2aqzsy3TKT3nrqBq81z9j2aUSythVXhJCKRwFTrcEdhAsJNDJ1i7dxW6JcoeVoK",
  "key13": "W52YyTMokn5hYoaJvsruusFdxVY7jDNQHWgXXiydQUbCch6ByNNgwusGT3ReectWfHfGf1zATJnrZSjwggPDM5y",
  "key14": "pTJ7ebZYxFiQMwVm8er5hEXiUrG9c7QwCtacfhhSS9ovBVTHTZvrHDj6PrAuMjScgtSsSSywvNt6VgVNkvy4rYX",
  "key15": "5ArK6kBEzXnEPDM46vbXg8brGaYWsM99eDrJfgKVhMGxcMZrojg8oFea5v8zQbhEAE2yNp7S89KpvPTMsZKG6n9D",
  "key16": "2cybukxzn2nWdQQepk5jf42FHPiuXsFQnXkJ7vLe1HFH4UEg9kHPDiBRP39Y4hNAu6kvLvpAR6j727L9TQ9KihGj",
  "key17": "3oWS5YUaUawhHW7PtY6vQGDGF4gxhbQHVmoGQzBLrR8yMyj9VMhBdWtGYXJvPWgBujx4G8bqVLmT6xVuDJWfSXMP",
  "key18": "2iAfMw2TfDUCzxoS4d6MzG5yZyu3VQBLcZC6cxi8VJ4V2JnVAGq4H5a1PZ5bzXcdgCx44JcQrH9SjQd7Mbs652LC",
  "key19": "2z848zMyhXVWSmhd49mDQYhUCKKnLX9G9tBAykihbG17Q7qJeJ15NRHnwDpuQZ9Ja7uqmJzDEsz8xD4v4fDWzBbs",
  "key20": "4YYM74XjQr7QkBRfSoSjCxarcpTPn38Q7aw6MtXk7BQ98dNYSDXMbsu68sZGXap7p6twAZXfgc9bdnJak27geGCt",
  "key21": "2bzHxhc4LvqTdR16KPgTdwmn5EhexsGweDc8pQeymvwoJnx62bDwKMsbaEhYESvPnCddKvFqe5QhdrprnjSv9Nwa",
  "key22": "3RXfwm6BUrzFXwz16jWoabobxmCVZPnGKc1X6VyJD3CDgoqwKc5gQ6K392se9GPZn1Zv8B1hW1S2Po8aqKtgBDY1",
  "key23": "5wsrrDigp1UVNTGoM2ocZt23Fiezqm8bnobjoMQoTCKLToy724hCD2NRT29taCEg29CK2HCJT1kC615NQedZdAaH",
  "key24": "3R1VboxT2VstXB57eeshu3T5r8nwcVPbMXAbvyJgTvjSwSkza4DZjWW545g1r6bDiXLrZnpGxYdMtLDMGm6nPdR9",
  "key25": "3q1fcLQpgQu3i98GVdRifAg2LS5yCWAVmp96CgyC4hz21qAXnoyJsSS7tDVbbuHqT7izAFmZkh2e7oRtC3DHXzMe",
  "key26": "5UYrsFZJqTZHHaThYWZaruWhtQ1h3qc8m1ydDHkjFs3baebiav2kZvubkGqxBMgBcDYqUwHGjFHUKiaFSYgZCM1j",
  "key27": "RjxEHQfXLMXfhb9xzJVmjGoFUMy8ygVYvZuGwiBZAhP2tuP2tBdZF77X5u9NAu95pZeYh3apew9iyGcNbK7SaxL",
  "key28": "MNper2XqACGFCnsZMKzv2c5wA83qfnyzYW76e4i3LazL7pWuajfXwd6ngvYfvhXbLCt4uSwdQkMhBvENyKxw1wa",
  "key29": "57vUHk5ph84CTxTtLrPTK1PXEFSNkQFtSbQuotk3HZmznnQF3W8fHVrAHKfFTZGtcdL5snuTHPZcrxaeD3zUbbCb",
  "key30": "5Ky5G66z2fr2W3ASpR3MVFN3K6bEdxVHJ9gu1NEvkkow1fZARCS7uQ2PmZRaBx2DykZAFHrr9uQn4yoqKLfvGRM1",
  "key31": "5YdjussuKJ2zr7G6GLYDRDeGVkHrGQhKTbLXGpPK2mXQK2KFtCpLV2npUCVHNwZ1JtzUoNthi91pGZkaeeczFAAA",
  "key32": "2bR52RgtrGzPeWtnYM59QwCBaNt2iUa59bQw88iaE3Q1tWkiVNAUDURh3RusjPiq1k8T3iEXFrDx6rofPCmTF9AC",
  "key33": "4byWtK2pV47HBdTwX7dN6bftD7rqs28CTmUA8xEw1bN4MmSfGVaMm4QjdCBL11x2xJfPjC8T9az3jbzNF5rcM2Uk",
  "key34": "3WkTkpbK2ii5tivXvyyGsj9AxmJumtMDyRG2mpeoZGs437u2Rjk6QBxRJ8FTsNadPB41KdUHpXJ41cjD4g28czmS",
  "key35": "52Js1yP8EGya3KT1gyvCkZczSWTdaZBR8W3UsrSYwVKVAF357iZHztxPvGEAtotL7ncWa1enbpWigjFqYmDYd4dY"
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
