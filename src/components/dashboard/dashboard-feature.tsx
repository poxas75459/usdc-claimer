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
    "MPjeyykYNrZEw9djdpSyW6xMQ58R6ZZsqAFKGsGxxtXoNpfnDtCmbsjc2usLC1TRowAfbucAHq541teqzsGHxPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edTFsvR83u1R9b1eTWZJsVnU5LwpRDLPw4jQBhb1kazS12h5f9RTTUeoyeQMsAnaEFAHb4NRjhqR39gB7tviHMb",
  "key1": "4t3fnbMtUiKTwM8BxLSNBVUYfcjzv5HZqTxmiSo9Rb9K8ZQPzgpsvQbqBW8EkTqVGaqGMTwbdhzCpw1CZnaCUwtZ",
  "key2": "4sTZf6xubipVMYi4BJj57vVfTADtEoZnQQApaGzTXuKi6prwvezZwuKWFqB7fqjcRzYLtfAoiAqXYxSduMTAsT5Y",
  "key3": "4QA7jTjNkdfhD69ZReHsGbaWQwkEo2iMxku2SwRsWdaGZkgVQjppB6tcnGkkyYXbcxqCehvgU7nb1pJMt7iepeao",
  "key4": "5bd9Z9q4K59bnFvtZmjCFNvCo7nKB6Qb7LUq2JjRssYLXD7axjxnqBFhvWG91dRGR2AqYetrn6XmMDQk35aaT8cE",
  "key5": "2d7GMDFWayjpWBxPYoN2XZS7F2uZ1jo8E4taatchGNTT2n39o8bfvaubakz1a9e476xkL5pkP8mM7bFwyT5Qst4Y",
  "key6": "58gqT8oexJnk2UAYkhDpjJeybZaAuA9gpTkiNz9Ptap5nZWc9PUeMUiesTJUd3hzw4ByGLSK9mT9V7VU1PsJHiVe",
  "key7": "5QrhTgmGYMXWreub12TaUdrhYprbBqFLoxm5Bg16vfLeNPtgT5kMYncFSU1pjyx5dXpWnmvSGxhEQmyNj4YxZTPr",
  "key8": "YZTKnsJn9ZZ5iox6kFDXGqA1jQMzzfCzc5epXmMcXSA1ULboc1owKNWXAPbUq2eYiK414wqMW21of4tddazi18D",
  "key9": "3P9uK5YSFQKb8kX142aSsLKqtaZGz8SkyRkypu6mv54eb9QD7BkVnxk4AqmJynWyLbaHspS3Hbkzc8Tj8niGQAq7",
  "key10": "2hgauGLn5syiqvv8AjzUaWd9tYhCXCNqXkmDn6PP7YjaxSmX2iwqkouBCUSAXC8TbkeNkRkpEajiEqZXfy4Biwrm",
  "key11": "5ow9gJGLwhkMavCcQJnXM7dYDG4foEvQahasKGECoX9XpmxgTn96WK16h1R5dZMjXSMZDPWQh81yh4qxd5BMWdKa",
  "key12": "37dpowwZ9BmWN9muJqZNBuY3tQhseF8eAAZKxLeVg2o9y6Jo7YK5HXG3ECmLi7SX2kBwo4YpsW9XdzChU7tZrWHq",
  "key13": "WVEEfs7AqmS9GFJRXi2TnKYZ1eVD8GDE8eb75Prss32tHvFHx5NgTUEb7er59VtuhzmWcqr5LmpSVV6XogfuciJ",
  "key14": "4KuZaHbW1iNVhBVkTCt5yhV7CrFsfcZLCUAVZfjNcv21UZ3Ucm4bg6FiaQEFZWiBas3KnofVkp33T3VM2PPUEAyM",
  "key15": "TsJeYd1Kg6cT6NmtRG7M6qTNFfS4vANunAxSM7sFBU9XiJhFMKm4rLxUJAUaAyGVayXs1SV23QKc5vQ4idG99Xw",
  "key16": "21w83Y8FowhfMUoRXQmKMiLNUgaka9grFrtMH8ZN1ffnTeuPGQ6dkyU1YAjpeQzHUS3DgGQhTecULZqzPb9zXDop",
  "key17": "5pAmCX5dyCur72A23heMwdCGE61AqCRbX5p5NqM1mRvZTApPLR8VMvKM1oAPbXLsEBtRpV3jfGGWrUMLuFYLf8wA",
  "key18": "5VeVBU2uzz7c1ZEo2vdeKi6dMsP6mTQrEwYDiKhzfuy6faYvkKWw4btgh1b5WLfwjKK8Ecje3S8cPoDdMCqEFqoJ",
  "key19": "48FnzhpCtFyxaw1okQeSS9diD581HVCNLQBWGQWnohwAzRLjVfVfjMqKCJ2BJByq1Zint9GZgRZ7n5dffbKTvD2u",
  "key20": "3BstoMTbFXrMaix62D1NpF1ADSYYRjX95jdfm1auneghBi8vywpyJiT2abocKMmHXVk6BrTkrnbCNJYe2q2t4B15",
  "key21": "2XqaA7XFw1GWwefWxDKSPvXssSeSarGizfVBN2a8t7J6L8zdGdAj19G6RWPeG44JF9ZwnDhb3iRoSGU245ddb3RP",
  "key22": "243Xmyh9AFXnv9ZfXdkpqsjgfnNGoewy143Ln3MXrFVnC3HjZRRU2EmSWgEUb7nfbuArKrRnggnkcvCzorow29xL",
  "key23": "3q2eJXxmHgJn9pjdRFAik6jQMEdAAQiCKCHgGu6uJ34QkZeaKPWWaHa38bq2UfRtzvDAPeyxFFTbxJgL8E4sJHq9",
  "key24": "4Hfs4qxj7F79nUKkUncLmHXTihiarPb9hf1FMoANRkDD2PTAyVt9KGDuxDdHNttJDjwf6qmq5v83okDeoxdK7fi4",
  "key25": "Es1giRBHjLc64Tx9sx3sXb3nUjq8dXoBpvoKFPk6fjSaSYXGBTjSikPywZkDPJAtzRQPRzZg1YdoRCBNHzBVCi3",
  "key26": "29g7FvcHteMZjPAe8MxoaCqFA2jTa5RfJUCXMo9X3kecSHV4vrBrjxpXRfdwKiPHaPeTyeW3yphkouBRZd7EySav",
  "key27": "3TW4akr5gGRPmWeupg2D4sfS8ANBMutNWTPKmAJLnwZAEsE32hbFu1QEAXBkk6CK9GEFEyuMs72nnhX3vZwjoHLy",
  "key28": "3KHQVDavzkTpEXuwrdSAf8zmcLqncek2RAoesnvQY9Ko85JX19P7Sr1PyqUq7eZJ8P9JKcJexUhLGsDjXjdfn6ZG",
  "key29": "UKodwHfE32uZkfV2qHs2vLTVcuQgTV2yCYtJPj67jF3EuSVn3FNPGq7txSdhDn3RpRiyXX3qxtCx2LYP9JoPjyB",
  "key30": "2tRQJSK3np7qVoPiT4FBLcYbCUMEfNvnHLHMBZxpxFqYf1D56vezaSUzThmDjo959d5HqEMkPdaunLhDFPw5e7pz",
  "key31": "5Hf9vXbHijgzrhbGPEeqtDgWWZcccg4ZvJWpqawcNgcDmcU8igxLmugSDvvYeHRDdqCrv6V7xpSndMarR5tbg6TB",
  "key32": "5dAEGg9hQhdaKM1ZVfmBKNMhJwtSD5RoZbCcKYUBwNH3TVFPuT159WgU42v9zKm8XqmXSR5NLkEQZv6Euo139kt1",
  "key33": "2mjfA6jcsGCp2TuCmB36qkCHa88wKLDarx4Vs4qeLNw7HNmePvW1VqPmTFQzTQiTEx51dzDA4v2icnEyCbcSFZoZ",
  "key34": "5rP2iZGWLbGcpybjzRfdd9q824k5xtRkA1orPBh4JQkBuvYvepkq6nhnztw9MysU6bzwAPniQyZAyRAGozpevgzu",
  "key35": "5bqFnXfnMb1RBtUnnKYym57c5vV1uUYZJNov19HY4yxBQrYA1RbvjBzndPqH54LUiBr8sWSGhbuQQujpkrSQBRLX"
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
