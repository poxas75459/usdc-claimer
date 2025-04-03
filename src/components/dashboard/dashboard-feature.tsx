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
    "5Z1uy8syUektm44AdiNqmUqPvLeYr4ZNAb6FBQLhnzDxvt1pfhLByhvQeKSb66VvKankZ7yQxHo7RyCfeHt5mBdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6DV9UJZx7zTbiBWEjJmC3QnjhiYfqNmF2BTLM712xcGumwdhxwCLqWLfEG99C1RsGdu5dgnRU1mEcJbFapAGfk",
  "key1": "54mW4CR5Mz81PE5L1BbF1nhA8L1BwuxX3H9vfsSYLAEpsEhXHy4DAC7A6aNr3RMxMT4dQTw4sjwMqL8z2iBvpx5T",
  "key2": "4YdC2fZ2Hf6osdcBfabNwKxhEqwDxmzHFKy2bAbpbuw7iJgckA1t4dbEx1zia4BWoSKf8DoEJdi8E28vVAuVR4gV",
  "key3": "545XpVQG3HFW8cn5S3WMPp295PG3EMop7RSnuTxZvDxLrchHsaRWTxTddnYZUG7roJp76nMTpQRXH9GcGLnKxjHL",
  "key4": "5zF5vxkyJrjFy61qFnXSMTpFarWL8hDLEpVnLu97k2jYsGxiM2AMbXetWDSVUenzLP7sDKXDUVX6NnvYq8q5tctp",
  "key5": "4XmwhMobrQ4xdFxHhwySCSTDpgTgn3ETAY6JZmwGHAF5jo6tPPattMoPyjrmGyqRwv222GQDiyyt9WsL48eLyfik",
  "key6": "38bJoXq3bWRvFqBWDpGGfzj41sJzqeArARtTeK8kdgoLkRoarPaxFBwdZvhdkCUrJXRuN1U37kXXjTJ62Nry53EC",
  "key7": "4QsXyVwAMopxqyZ8of3k9K5p2piPfPbRtTNmuxRq1md1zcdne1v5j3yN7cJqd9R5td7ZEuNmY8G4xBZwPo2RVow6",
  "key8": "61zZra8LYCkmfBCkH2kMrsBFAXhSqTZ72a3tKKQAHnhcyu3wnnUXYqnPjUyXqmBd8NWrrps2MfNQGDgVwanTkozL",
  "key9": "3H6jGQQjyu5jnu7oPWw6B8aW4Z6y9dTJ99ZkwJYTjQRiXu1TARoZfnuxLyW7EGzXKfhQTidMAbKA89Xu3XXW6rNc",
  "key10": "2CAmjtkxYVsTA8qByMbzxTReTDsAA9WeHRB2BcsB4KzKFBGJu416zyKHRFHw3YVEojk6KVuHW4juMfu49LqvgftB",
  "key11": "Bzqksa1YZWxSzw1sJWGnhLeucv2o12GHwZRKE2CW2QWWrLvdcCiXe1RdiK8veA6raDxo1cFCncpWzAEfpygtGhK",
  "key12": "5N1uDpKQxrF4FhVEvuGLTZxUY8U8JGJJwuQ4gZZ9dPT7bMcU26KX3mZ9TT6bv9SQqwazH9WsPmcykP6MLRJn3Vcd",
  "key13": "4Wq8seZuCLS4yJGS7P9iLjT6iWCrN8ZAryqnpeTTp95P6tNeybiZEGJ28cz5iKH7rk3tgTc6fyLxDDh9GWTKjpL9",
  "key14": "2KvknfnsgJ4nipAbXc1VWS2d1zCMt7F8P6cPDB9ya1D4BB77LLj191t4CKR5acJ3t3Y23v9hJndh2UWb5kU814Kb",
  "key15": "4bE65hh77cDQsNv4GcVjEugBhMFh3mH1UVaUxC4bSvXn8Gwj1KsEciybhhc5gfqru6v5py8F8DXzQynwVLRMtV3Z",
  "key16": "4uEpsPW5wchcM72tt19RaocZQqKavdEt1b4it9nAbJmPSN2zJFPALWiy8x5PhMbDFpwFWBd6emAeubqZYcw4xjBN",
  "key17": "frPFiEPWxudBmsYPMVPhYbFoHp7dJZAZ2GhRdjjULfU1iiTnvqfEeHCSx17QXbQbLR3zj7AoF9Nfaf43QzPJCkk",
  "key18": "5Mt9jC5X5TnV16CvbwhoNLKbTWfRSryiKR2BPMsN8u1VpzF2vn7wcNyLsZZC7gD654QS9R1rMyQDD6Kr383F36Kj",
  "key19": "3MiBhWoV6aav9pVdRo5wAPT9FuccgMZnuVLpv4L9RCrmJPe7bKEjZvnPtq99suZtreKBsRnqvdj7o8hLwVrva52P",
  "key20": "5AiY35FdM3gQLymJssuk4TexVUMhJWLrnaMKKjQpwSE4LnoX56xJPGifqBCGcnAxvc7KyYaVZMi57a8jBPzuvjK3",
  "key21": "48EuQQhonDWRQWNnsJ3jDZhUCxLrtimD4qKXHqTLnmbFZpyNpBX6m61EoVxY1CdeRvtFuDLucWKJqaTUXFpbeRhR",
  "key22": "bCUY4JU1KKbwGDYrEURGWJMY9egknGYwhC79SxbwnRHYBxqhMQQMEmbrsZECQKo9PjYBHSi3MkJuTwUh32dgEeb",
  "key23": "4wcwVH4KB6kJgo2m9zvJvFnydDAkekBYow2qC7CfPTvTx3mqrGUDZAQhLmA3scsoPNtCwYeh6CsiPWPfQWba4VZb",
  "key24": "3bNMwB85Zm6ss1FFTGQQhPJ2j62CvX4q5vQTHmzLwvDAJzqUpi2MLfck9Tvgme5remuywyKHWiaFkUrNrpo4yfky",
  "key25": "2T9hwymRmAdhYpKw6xWpYGMKDkUvGGr8KyZDu414e96khdU15N1wduGWLMHPPs8WnKzghKxiDdCQS9kyYcuYJM6F",
  "key26": "531ciExJ2PP5LseLLx3B2QBEB8mu7UqzffmvH88yf1GYTcb5Ltt2E4EVLQYHh5ZstDGPZAYmVz4vapTVUAjDne2m",
  "key27": "4qSSzCHGbrMEfGRUnvy2PxMHiXeLpZbAQmUNfhPwZFGe3wdZsyu7ENbc1JhVrEaHr8wVZ9Qwccj6HBETJwKQvNK9",
  "key28": "4cwtFthbCWci7pj7ELw1xmWfvSdcAtPkXnU42wLdY9Vz354v9SsnM64W9AcgeopEnFz7LgAYSuNLHR5oQbwhA2yu",
  "key29": "5Xu9zGbvoeCrG2bjBrpjKBmHetCw6zDg3DG88zGv6GkDoMbU1yZUemVGdsMN7m5JrUL1TEKSEjBTWT4kDAdzuTS7",
  "key30": "4B9SZKFXcm8nWXpbCMJ5vLTUQLfd1fkZeMUxE8BkjmUDcJyPWLhtzpTJtG9gYEBLv8JF1aWeFPZTdCVYXR7aC4s8",
  "key31": "2GG6DPj6XcSTXMBU7hT7GmEC837yyfUtSnpbnSnbwT3cPTmmbDi5hHvYaaX8ztqyqMvxRfCy8YZikbwtbjXvE4Vq",
  "key32": "ZvQ1diJR4tesheM8JTPgHBwYoEfCf59XKAQ1bjfXVEo8QLMXYEdbEhLfmB5gPvmLCowex9JdXfhy2KUqhhe5ku1",
  "key33": "kXmtJPgfNCgy8CmELJULgHJqJXawTa1fFKiWxhwHYmxFTBrPgh64GcTkych3iu5eae43AMP4vikMtKfQBaZJqW7",
  "key34": "5cJHnmUtF1BgEDqmvNkKw9R2V9FE9nATfZAagnxSrrTQWF8vxbiEE1iS2BDtDJkjxWaXpBGm4gSoBCoHk8SaAsTv",
  "key35": "32PzauPMqWkYdwcDoqNsYMgwsM5NBFigFtURVxuEBtaNsYHu3ea4bs85h5fFxH1hyMM4pUooVp9F122VTkoCpmeH",
  "key36": "2YhbqB21fdyEX6T9kzurKTwPqCJG2ny9QQxCCGgKcpa9AMKhvER5c4pU9czR8oNn4DBhrQ4Qte5taJBJW1DmpX4m",
  "key37": "vE3WUMNKB3UuugmS7QGfyFXDhZxDHLp93XwYzNTjvD3DWV23PMmFJjCwqXNMjApamifcfSZ9n9yGbKJNuRn4ik8",
  "key38": "YVha22KVtBVysAV4kE7ZtLsQ7fe1mCmEjdaoURA6D8EiTbGKUGLUScbUqXhTRjrPtYe5iAgKT6HL8AffL6utAYj",
  "key39": "4iarEDtUTLZteY8BjT8QFUmsgBr3x76nmbxASHxkbmfE2ssAyS3WMvdgzpBJoUYK7eiVQnfeSb7U8NMhcqb92Msf",
  "key40": "3487fo1GpXegRKFfSQT5S85WM6RUcPpZvU31vq1ttLNi3SAKUQiu73AyXZFQVXFX5kyWDkviMaTkha3K9DK3ph9A",
  "key41": "4yEWjBPHyFkg1D8HdFbCVqoiiRSr3SZcSRZfQqvDiV1uNbP6YXrHGxJ1keoX9SicGmSzE59zU9CmuK9XPQU7CH98",
  "key42": "26R4eAbWv2FK9ChytRxzSMKsshun9Uw4cENSLZjH7ZYbkLz663nZ5CKjiJunFtqEj1m2W9YNVcmx6AFjkL1Vyw4R",
  "key43": "2SMsZcvDCo4J6JcGyS8CtWZjt1DtKFhbE5sFHUyAr2GFeDPWfkM756scGCJwKoejvUJ5NZ1MWXRseqvgDemLk4R3",
  "key44": "3SNGJ86fCPRwjnnMExzVwMDwayqZwZ1Un3UZ9824D26wtgwFHvUrbMqftnDeCqBnRVuMi4tX9XF4gARguoQEXzwT",
  "key45": "2B9SYbs6bDhGyzw4Lm3z6YSsQk4PKSbHXiv61B3KoRzF3eY9viw6TnzSzLQHCZiow5zXqheNGsyH9dQqkk9JcGvD",
  "key46": "5HFS4PoZAJi6YafRX6Yz1mbYhQNJ66hsHQ6wtjDeFLq9ebmUg26Fv9YmWSwpqR37ASbCVvWwr5GKqNLRpeF35Aj6",
  "key47": "5p4tjJ4kFoc6yKmXnEamUcKWnCNVaMYT8FsCYAX67tRyMJRd2kTdcpk3Usny9Fri6BpC6uqFrzaakfFinUNi4GbW",
  "key48": "3p9vGk4B83zmAGUhofwZRWHa54sLYFHYg4kR9Bs6Z3CZvckeJcFqt69SHNn66wAwdenCGKYTHfYgv4hpgqShin9H",
  "key49": "3HbP7rHLLCyYwy8zCF5szC9cL5YMkL4LPpcHdcuAar5ZqpAaZC4jgvkmb41C3AdoxFYNrTZfWMFETFf6shPxRbP5"
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
