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
    "4i6vqZWDNo4UdH7HEu2X3SPTK2UzWGuUQCxxhqUvJ1UzL9HNxMWs859DytfuFdxQJJLeodtCozUAFfCj951Kkr4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obPRAREXo9VDZdH4mW79LFqJmc3YMt15Kh9xY348g2fizCRFs8qrqtfEmhB7dy4kdWRDhSbp6BipqdxDetsuFSN",
  "key1": "2WfU9EqR8REobLWbBiZA8NQetU2ACWWaQvnr6oLwysdR8QzqBRfBZa4uJwBNfe5M7S4StSfzTuvpt6uUBkBm9kEu",
  "key2": "4VDXjFacFki19MUhVckBdHAMktJ9k3y963Vt6MH6teSdnjGYdveePo9gffDAcizDxxKS7gQG3j94mRFfE9TMRBoF",
  "key3": "3D7tmdqLVLPv6NpuJym2xTKTEBCeMYroZJRbinwXuyXEV6irSqrWdUYsLNzYpx9BCDNHcDS3wwGvQSNQyRJ7ZT3e",
  "key4": "5GsvLbAjqgUDcoopHYeNDXTyVDNM6FexEJxh24XUPeEuJnH7eFP3kqKeWT5d9kQrChk1aCjJFTwSK6F4FiseKHbo",
  "key5": "45yER2zT8gMXyCfrp6pRR3shR6bKKZ29JKiE1MGyyHfFXQqkfG3S2VvSdG7LQBENafbCunNivmEudbV5KchXxkJU",
  "key6": "33SQfoq6X3A9Sypq9f24ZovpBxi4KdcNSDWrwTZCzLPEYcR1z3Ub7zqZ8kqYbDfCZk6qEpWsR4KEJAi9tMnB72DZ",
  "key7": "3rVtuLDgJdSXYy5rxkuoWKiUJDUe3tgc6eYrvgtydwmgnonMBD789rLEQdpruzbsJUY8pqwjg6fPubM6xkdLwXe8",
  "key8": "2DBndamsfGNnPASpVGf9Qpvv2hiwTN9ZnfcT62XbKvfCmRJQNiQXYeSFtiUbeTui4csWiofHVtMWKTixCN1PNAmR",
  "key9": "2cvTRebYC68MdBT4qfifpNYU3xMPouvSLLxNpVHyYKDLjBB1wMsuoYZeUVgU5EuvTJyaR1mbUpyVYdan7W1j9Unr",
  "key10": "2UkDxFUeropNVwZ5uqEGvnWyhJe1NftgLNvfpQMG9azjAdqKhSU7EmVLAL97iNc4ryhimc5Xp2mYj7FydHuEEX8r",
  "key11": "4oGS7nd7fgyU4JTWHQr238FK8KYq7SyJxtSju5Em3ohWXHCx97uMAprP1TH4djG4SWW4afar9gt7dK3hZopUgWpc",
  "key12": "QGJQ7ZCrgyfWPNXSbLocKTDQhkHbabaGpWNKJ2L9UtCxABi4nSBXgpFihUzR15j7E6gfRMg7XiyjmWyoQdzpLZh",
  "key13": "5Va9nutNepjRbkYK3D4QcduqnqhY3yL3LWvnmmnMUzn3pZSJzphC53n55EyRCGR1CUFnWFTPWWMrP4mkK6yXBniV",
  "key14": "2Fs4PRjFXKMLz6G9fNxJd946VBrCM5B48FYpNcdNL3VyyZ23oKsne1pnCPgRT5akE9PR1xBRt6gTksMXgeLNN8zB",
  "key15": "NaAbqNrp11edaA9UvCHXbMLMSVt2q8zezwbJGDJhW7qJaKYxze7EesbfUHMhfUboHKGzJkFHDjrKuMqR2h1JLHu",
  "key16": "2UxKXJn3ymjgQ8Bs2eGPmFyrY5XfPYA7RS16YbS7dLYdiMmKbNPrkTNNQzFi2W32sN2x63xEBdW6tCnPRYapXLKR",
  "key17": "3aGA1pdnLndPgm1fjAFiq72nExJ4DYDDYLounzJQi8ZG1EE4pi54tuVPoXp24fooAJTd91AF3CxPqg9zZmR8FDTp",
  "key18": "2CSDeJDe6vhUPtjTTUnDDtWCQnKrvjYkjkZ6vLDZkVKPkW29uqyii4ctjvRuuiBTwA6WHo51vdLWtJyXECsJkbio",
  "key19": "3nn7GzB4tehB1tKWQ6PehXLtYSUKHfDPEX35ESv1YtdVKJ29Q5HEbqRwvZLXstyNNqFu6AkGEz9DWaZiEmdMisy8",
  "key20": "295UhxpFXTiqiQqPk7F1GJByruz9yD4qEzC1G3fz3cYiRGwC8fxipKYr7J73eJF3aVMLoAshQpL95EiBYg2H19Fs",
  "key21": "3p1D6CmVywctdADUoAUt9WdJHNYDFcoMTVdPBLwFVRiB1k8aQ7e7Uy8piX6XRJpFs12Y2HodYcheDZ7t1hrjbwjW",
  "key22": "ZD2GgzHGk7ZN1p2ym4sfb69yD28i6JgzoXzgTRuYnYUZKC9SdhaoNWHq6aRd9vcMxcnWW2bzdcJTNJRe6u5d4F7",
  "key23": "2MDgtC4bV9DpiSuyma9zUxnaRns3tU6FrLBQ3apTuBmbczVK8Y8RDcDEdLZWxzL5YaRpBKjqM1wqggiabt7LkhMc",
  "key24": "39Kiw4LQVasTSTkFdvuAbqniXuAmrDWVFGZ8uVr7Rh5VZYvp4iM1zSYgwJ8QB2L64HqEqMhMqk4vsqTQRWnR3Zyq",
  "key25": "57VVv2LjSjD3iSZr3ZkV8FuAmFpFhxU2Wf6Bzn9BXBEwhYBjnPoDQPes55aq1GpMwp3eQRBkK23K3qDGVSH2TYx3",
  "key26": "2QeUHf1jCm3SfoDrZQHDNZ1KrvEADtJP45c4hvjCbXc1f8UZV9mP2WaaCmkbsANyXGZMU1juCg9gWKB7qayr2V2U",
  "key27": "3GGs7772rqd9r8TCaoVkjWivE4AJcHoEpvvn1RHgz7x2KnKGYXkrYxHQaXKA9UeYP4UjUCSv8bBFScUBzJEh83j",
  "key28": "2gH5na4trxDuWvqiQCePEHLtfF2udQa2YXNNy2W4ifNsjeFa5CHhVRMLZouTRUjPsUhcQdt7UYmMjAy3DvfgtcVm",
  "key29": "4HHdghSJC3GGapghW4gStbC6nFJQzkVzhnRN9k8uAp1ypUVZrcvuuWCpSHpRu3Kxsxp6zCRkRPojD3nXteSfnTF8",
  "key30": "5FxgjxEzNpx89mykv2pjjPJJk3RWKTR9TAmyoxXmvaGEuRwPLYAsJPRSy7DYiRw47E9EmkpEyUbvs4nq2PjXZtPc",
  "key31": "47bgPez9UzEgT4TStNBfpDdkJEJtyhCPcaa4BUBhGVV3Mynz98kwm6M4fpgx9QNAhuGFDEChbjVDxR6tG22iN4uT",
  "key32": "3v5xY8zBmRDuPgNAxwqJ4LwMtpWSRbsyhwF1WBLucPdJkSs2AYJgCxxHnFuAZyd6hhHR9Fy8eE4UfdH3aRFvFpTX",
  "key33": "4wB1usJfzEV2qjoFvdABDFHHyaD2ZNTckTvvLp6ohL4tpakq5gNeV9zqC9uBwmGbB7qEKSt5PRsasGmu1Ld5E1YN",
  "key34": "4pGUHSrtgbsZtkGUeRcDNZSePcnrajKHws9t7uBjBMjkEJi6smtJgMvWP6uawfJFy3iVJcc92U3XmmVztUwZfX2m",
  "key35": "61BCDSQSeudd5y8w2NDZ2cf4ry9akwBBiBAmyJxufczugaoL8JRdhBxwUNQHcAwUac32KYMWcUWJZBYQPWgR7Kfq",
  "key36": "58vSKPNUkpYFRciXoyJGTWsUsk6YSqX48epe9fCqMWyTRq5YWkeuePSTPsPENTMqqG3w5syx16KXQFe8aXN33kG",
  "key37": "2eRv6mX9L1e3QrHRdQ4Rm1AmS2J7Svyqp9Z4ayNe7vMoNAScKt11kBcSD6NwysFJ9uN55sYJZxxhAPuDL7CfTSgd",
  "key38": "4ojqqqD2ETxo9Uz3NGP3HngGY6SypFkvQCsXQ5fQarNSzf45wt22DGEkpJWuUCPT5AopmvomWrPts5Kke3t3U3Td",
  "key39": "421pJ9pDMb4W66gBa7oFVDefMimCpYbJgxzkRqt6d7VRyWD8SRDTc9E3gTe2cEtuDjKB6URrZYciGMCpkrL9JFrD"
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
