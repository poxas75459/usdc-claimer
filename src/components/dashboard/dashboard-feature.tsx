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
    "4C1M2LmsniVimyRLrYeZh2jZ3SEovPTmRwtftDeru8NGSoakMh1DiZGYtBpBsvfUxiFE2fuXFRJEi6iddZcrsfYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49tcHXRCV4XAYPGq9F3JfuiX9Bc8xC7SDofVrMNGG1EJCtjF3Bsmb5aAg183LHKPGUygwUgxC6vzXbCHVji2psBN",
  "key1": "2sSHkfwXjV8UhS1fTjjfw7MbJ2AzEhtzwPqtU13dGSdqMT7QBXD5uHDLkuzSDBqbwMDBZSzgLyCA3LLwWxZL5CA6",
  "key2": "3Kj9ehssAiLXiHGkaERuTvX6sANmUrdihutpouHspoWPoZcJFeuww2o4RRJ3oqVTWt94wbradgpGjfBxVd7wvRDu",
  "key3": "4mFKRhbQctBYRXEaFaB4MNx4juGmLeruQLHc6GwTVMHotjhizZUkB6VfMWpxAN2UdMTVjEqGd48DmguRuGoieKjC",
  "key4": "2R4xwTbBahV5mC87RXxWhgJ69oGM9X8AUNM3Cj8BmkPvqWmTCGg1jf2JTLWShus9rnufTmW9q7R75Dn1hyrcewqm",
  "key5": "5Nh3ivvAyKjhKSE99NgvieYwqjp7L7MRKVRNRqGUVmjNATwD7Ltdy4q9vZZnewchEwhyPMPXHVQEPjyddCsDwzoD",
  "key6": "5B4GzCJkigskZqBRvZXdFwZ2nJrk3o6MKCS1wYHxBt43cif5y3zhUwwayvH3VEgM27SUNfgtkxYHZqdWWXwC2tmJ",
  "key7": "39g9ZwyrgURkB4nwwpnL4jx3HzddEoxTuSSYbrJBLwukDYDa5g8vD2QgggHiVeDrhqxHYpseazYL2a3qJYAUVhFe",
  "key8": "4jYoYNhN6w9fvW9iXx9dkPkw8ES6BfjSCyE9dWt53bC9ynAZ6dx2NZtHyXQpBHe4sikhynSjU1vD8JL1ZzHYuZre",
  "key9": "F1ybCTW8VMkpccE5o38jYwQq8ZRxY7ds9MaxNvsGizgJP713LQyZZX6F9Np9YGyvBd7oqKAcw1MvAvH8TyUJLBS",
  "key10": "4eMNtLFYyft9aeiksAAr4SXW5n1LunEYEce4k8TVRNZaAaDZ7PwmHqxpC7mdZLa6xy84G3TyiowLN7MqsmUdd5y7",
  "key11": "5K5t3agDNqC2HZYkVbtmRzUaDjrFVoPqPytrH6JQKYiMTPvjAHAtPmGikQv8RHT98GwTcg4oh744H9rBJrH3JJpA",
  "key12": "3YAH8NWGN3fsC11P6Z3Zf3iootgo4yswWc9RMwvWMN8jwXSPbFEMmkWXQYQqBDTXoDKbMfVSvjMbWBJgRPzbSBr4",
  "key13": "51zXEuNYb89C2L9idWmK6nT2FssNkbbELZwmuDvM1MkzNXRhCjRfFiJ3gkVSYkNhCic8XDb3D6eNjbHottbwm3LL",
  "key14": "2qaWkSqX62nJs9q517x1u9a6xM4DsE68TvM3VnFrr2TuYtEZtSQsUfnxKaFG1cfXkpGvR4YE32Zamy9ur35vXYX4",
  "key15": "4LrsJCPKeG2DRKDrjTf6WhsPSfKgZEzzhaEAQZo8yKVFJDFxZC1aMsLyMWgofpJGkPDWRxuSAJgfdyKA6KmKhk7P",
  "key16": "Tso7QuzgYaG4EN4GmowAwT7FQVzcDqKhja7qSc4zm5FrYbrqG4Fz98KUswb4RAvX4CbuFnZDzvyFimzQMTdqpwP",
  "key17": "2i22TVb38GRsmM4urAwuhvx5HCBPeQd8Eg8RiSnKxuVybZN9mjdWdBbTd4ktQXM952vyp98DhKeC7cVUkQSKcYL8",
  "key18": "2YQTFAcuxNV1NQnWtSTFxrKoBjJUGiFcd5KWFk5sseTyXx7fXJyZpJLWDE6urqjBfLREmrjssV6X3qrvXCaDk4P3",
  "key19": "4bGmtYryrHLxgWEAmZt4n9xwFtSzhbZGN7SgthMCpYjzKhA3fZVwKMYh9uoZ4sSuHPeUZs4KR2Aexu6pUUBYZvkD",
  "key20": "4p8BXhcawoJ64oCVdAUGW49gSkudTfsWjEbge9gtdHrA6LiTKT4v1jvzzqBzEQLTPNkRMxcDiNk1H1cuEtHWrfDg",
  "key21": "2tuxuLMxiLnJcd4JUqtCdAxho2wYY5vn21jefN4AR42vA1PkBg9MTQ7iKNyHJ5zjf9vAh1TCYbU4mRvqgCrq377B",
  "key22": "5UwhBCbS6K8Y8E2PzpwmqFWVH2h2zM3soHTP9pNUhSVBCdNTwuJACe79zPnRg9NkSBr5AH2fgpBDESaCTez1r9Mb",
  "key23": "Rxc6Sx5MNZBWQF8uftyWYNYBUYcjwySU3TY11umzmaBhTHsPNuj3QdLJGL1xd6AMwCzXmBent7Sa1zdnfv3YgqD",
  "key24": "5ugyU41jhsi6wAMGhpdcc53CuJMXH2bk4YeLeSYeXWiH2dPSAudphJSjXnqVkpaBQtXaimMQ57SNLhXxWvUjUPqt",
  "key25": "35SWVYSDpj7ZvaRWK6Ai8hwTByXxpWxHS8kSAXw9QVvJfGLZmPbkXnac9pUuRepF1Cs1HVu8QPfippeYdLX5wZ66",
  "key26": "4KYpTSasuHhCjs1xzwoy5SAnioNDToFKeLYbr8ssLwegHyKnFqqwq2baWJCnKeoLxdT2hFykrkLhbWTipsDPPfm8",
  "key27": "2HiwpfN7BuJ4ipUPQsfkGw57hGJgZXpmV3QJ3Nuqked8zpFgqkQs42MzEx2vUjCM6NLUUvijaqSVYytP4kjRqBm6",
  "key28": "1fto2sjMTuYDDtr2qjGviVtaqqotkTAary7anSx58AcwitFxbaGpryoV55GhPNVE1jDnT2LSRhK3DgcN479TLLj",
  "key29": "3qLiATYbgfM2GWrrzomRmeSJt2FzTJCsmSRwoaEJvu1zQMzRXXEzySNnMt4EresqkbWmaxNUQooDCRX4j5PMhu1R",
  "key30": "2gVRweXgPuxrWNMGf1oPqXWjxKEE6nyFqgNZt5ZcH7Q5wvyCukbFGNfKv6CMLVVGG8b5rJDVjuzbvbRfKV1QSumk",
  "key31": "m9d3Frf1VSapQGrHCtpZ8vi9R37ku7bCf7b2e9jw9keGHgjGgEMFqLeiuYa1MFJBVAVwwrdi4gbT6PyTXi34j6H"
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
