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
    "3vzAcqfwhwCY57yDsmSeKZYbQGnF1mi6wqDsrPvuXixcQvx2WQNN2VSpZsEawa8QTjks7pgHE2TQa9LAFh8XTV5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xE7SxtVZbvR7ZZvowL4rvgPKMGMgjZvWUVwrpuBaU1UYHMbDX23RwyLgSzBkJWcHSWD2LMScAqPYckBWGgE7Vii",
  "key1": "318Wei2XRYFzdwT4chZZEhHk1RJ9mgJMJzvzftA1PW7DHWZso6tEBiVHapLzf9ts1to3gXVpWzbadkkBhjUEpB6R",
  "key2": "5YiBP3xPDwNmN4XGq19ZNwmmpi17j78WLHca1RcNmpDhXcKE58iwFxyR4UtXfe462w1dBS7eg5LTFNiT9x1sEba8",
  "key3": "3eT2BXShLRghuRit73tQ78xDMHKEkQCWbzqUPonHeeMeowR2QtZqT4PZREptskddPKqq6S4QfYJrVSMbmVJ1565F",
  "key4": "cfJtpMTijzjiR758auQw2G2rWEnQ7ypcLpx4svSBqUTQakiU7WpEpeNVEpukzQiRvvftDjbHCxuYccW3zsYoNwd",
  "key5": "2MgWEVZ7Ag9cDJYQJVjpzTVt5y6qo6Eos3FjagLLR4HptWCJuhdMYvDLMNVzHvGf9GpZsmHrsZGbmcgTWvXBL39z",
  "key6": "46V3zfu5QSPRSTaBpUFFztXzD6wh1on9hUmf8KTYkJanawqtAf3jeReggmyZBnveXCWiCWorEntXbkiV8b7oWQgo",
  "key7": "4kcS7QBt86pXTYj8DgT4WyvUoRnZhBrkZ3G21x5wCx4iQawyBVdsfa2bes8xww8E7YinLmCt153AzcAJxhxZKeNs",
  "key8": "3TCCcynnuz3aECx6d338sG2hWyYpeVkHAKzMnaaEwQGwTu3Tj4xWGgq5h3XgKin1y7cpEpPyUDwv8ny6qV1EfrM",
  "key9": "4enCASnjvrZBWj3BgDkasXP5EGip7STnbp6nTHAoYGHmLweAuW2gpxUnuVSraPurbE8ruMBFHLNNWpVJyuxKNgRc",
  "key10": "2tamwNPrGEyyNorRtBdeYRrN8sEMeGrTrXTCrQTrTFir7BrEjuCsjQT7a1VxL7xpEXQZhDhQHpeL22fKvMQgaLr5",
  "key11": "3JpGvMNNsAdNvoAsiYeYH7jvxiv5HTWC4zTRyuBicWwtSSpJKfiE7USwq5UH3EUszTJF7oCSoFxkCnUC1op98f5j",
  "key12": "3AKC8w72K5JeVLnNrYpYxs8odfvvcWi2HgCgzy95oc2RJtkeMADJdsNLcVQP1bG2tpmhfnMvrjgueyahJpk2xNCb",
  "key13": "5dij3KiN6VgtTPM24NXWqjS73jV6oLTorFsSvKdmRjPQ6eZKcNH4hs1V2FytiWF5dRRJsGNpnW5fCJ9RcLnFVmCT",
  "key14": "5fHBW8Rw7MsMMkRZuPYTXdAGjfeJK8o8sKoSxqMV7Tp4yYRXbKt5ihMPqc8sEb3iNNjwt7fThEPSzF4zjh7JdmJ5",
  "key15": "4TmYzMHcGPqEdUKH7badcggrRCN7yzpCTyedjHx1ue8YqbFYosTuvVK7xJjzKTwvJkF12ioVHioDQXGNn5ZPaACm",
  "key16": "5fVdkPrN2ySr8wBd6H9ty84LopyPYuMYhYg2vpEnaUvjNaSjAes2mX4xiEKL3UV2W2SAzrm6Vw1kMk5ihrS6Z74j",
  "key17": "2mYbkAriiTNdLHRvftAF4DudaABRVzYQJA3qa1QCgGjn9YKZQwvz4hiZXhN1ZHBJdZKMcQxwkCD6DqisKUTGLaa6",
  "key18": "4SWfKNzLpGxSMqSV5vLFm5XSHqH3Amw3aC2MxBNgAJEbtSXVqzUbgfxg4aRFxkHkmi8oTHV9zouNwC1rhMkUmn52",
  "key19": "3gGc4HvMLFM2Mejk8De6Q1P1ogdsFppqux5qZZagzDZzWayCsf6ntSQfMBt5Qo1bweNDpj9ck3arBfSyvgRBJRUN",
  "key20": "2duDzATXBYEri1yGPtoTg6zYdzpPZQNp7NvgknAt6SVe49MuB5w1hkngyFYt2AetPJjVNtZ6VGaxeGPgQB7RDDuR",
  "key21": "4CuyaoLDCkGavvt1gezgp9v1BnErwZoEDgbcHB2ATCPTGAtnEjtyAXtLVWc1pxQXmGEi2sQTGexbyHx9kLZdJERm",
  "key22": "3oA6Wq6QpHPn6zeQtCZuPidaCy2rY3AtJ13HdeaX19Cd6cFn5QdUUHZ4CWEkcatpkwiY8rYp9XBjKSw4hzjD8FBp",
  "key23": "HkoViozK4iXvk5Br3TUnF5pH3BXAm8sBGqVUyqmKsnfsHDDCPHPY5oFk6p9PiRiM67B942RC8ftawYisbZzwJem",
  "key24": "RE5LjNjJNCy4eF16iUChV6JJnWLZ697Jnuf1jV8BG5mb1g6chGaz7zo8jYMRKaA8U3oFq2LGKJ61VGsHWoxMJmP",
  "key25": "2WRbikpGQRbXdkK5qHci8YKjGhDS1tPtAyH6uSos8sHUMSDGUYbg3YevZPJm48aWgSgzKiiBL6Th77gyGGmEUmou",
  "key26": "2ez1LNvRKLVEP9XXqbHNb4iBS86Dq6Lbjm4tsELRnZebzSn2GpFtg4pEmDDPkzCjucVXcsqCku2mD2SXhy5a2c71",
  "key27": "5yXH9d9Xij4ZCzdccnpFs1AbMhLNQr41WqmXeZ8qrZjNugq8YrLzbiuAHyXHjqKUcefVjpVrdTYpewJKZcm5ASov",
  "key28": "YHxRTsaJge24DyVtgPpHoMpe5KzTpXhm5zZw7ZcVfJzXwfXaa4QEGvyJEj7D34AbzCN6HedDahwXP2taR6jTDAo",
  "key29": "5SEzXPF5qQXxgUFDVeaXV7dihVngVXLiK26Fjr2wJnib6E9ARcK2QNUhzwR9Y9EVo4zrLv5RL36krBL4Hmht32Ko",
  "key30": "4nG7fkWTwc3doBh3bTzScf6ycB4ubHbrxGZSw2BuN2MZ6UFTG9Jx9KmMbW5mwwroxBMv6GNtSiLKxDBqWFBEVC47"
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
