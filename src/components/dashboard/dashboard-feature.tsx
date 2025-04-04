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
    "3ZBco8zZn3ohMRxFSHnX86H2EpvKqF1iWjRLmSjKPSCtbSs1sS9xc8KJDvUak42bLg3uw2jvrFohSpJt7fiysz5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fn64UEpHWQDPbq7UZ7nVCTaV9Q6QboMXQ4n2QwcBwdbS6niP7vKdbT6sX7MAsh7wFnffAXqKEdUyyiv46ak1r3t",
  "key1": "pj62KQrrEq3e1qqKjJhQQKh9PaCakuhJCjaqvcFWu9uzhpKQMVbYBhKHEqJcEqBvym16ZUKvzcFPFDi9G8RRxhU",
  "key2": "3oF3LLJiqcVNEzVCj549nzrCpjB9uS1cP4wCMVf4MsCqBMkAq2WjtBoCDd3icPkcCS8UonNLvWmT7Q53rjzyobLa",
  "key3": "3R3jzfNLBpH5wHvzg2qzNT6AzM7tKmrQ88fj1rcQ3FEUpv1CEQkUQaSMeGobtKeoL8idc1oqjih3v7NJBfxHsoaZ",
  "key4": "4V5DE6DZhmb1gNdS2RdMUNc8m95zkpgmri1BtpckXHN5HWaNj89EB1pee99M5fJP7HjCdf3uYzJYNSuDErTcJ1xw",
  "key5": "2fYWmu5163Qi85Q2xpD2o31fqDntesWA36fZtYxC2aMKiJJEDR7456ZDiV6tjp6bsEL8BAjQNZLmpcBzgcz5u5dy",
  "key6": "66J1hAfP4v4tdYsuV5PvJaKsnZFDQP7hcV427bf632DneKCJ16DphWuuYWVt9dmTAcGzcur3Uturo2T7mEKjCuvH",
  "key7": "5r9oQmwj9DPxtWZr7ZoniKTBH2fnUS2Fa8JpwNDC29Z37zHbkB9z9jpj3kDd9Tybg6g9QsCXSV6Jjp5sH11wQtbQ",
  "key8": "4i6Lk7qrw76ngBVMWAAMP84Zypown227pc328AEyS2PexR1VbW12teg57BDkGvnKYugVZPU8yanbiySvy526t8vD",
  "key9": "eqNtngDR1TvYLSezNMk4qZjMkEGETVfukv3UiSk2HGb9sNPtA2qNrGmiBSMWnzfhmuZdxWiRy2N2Gy394m3oYPZ",
  "key10": "5yGVjFMVsx28vHB4oCZGDpC33z1H9jV6XWyZhAeeL6hSBQZAvac4NVHePz3spT5WfUjEPf8tTN9XfXwGDsZJsJvL",
  "key11": "5NkB1cNo7SmyXKFawMeZkHUTA5b38zRqLRxYmZUxjobs6WBe8NaERWQXFeKv9qb96e4BxeayhadLGjJYymnZyHiQ",
  "key12": "4JdaxvTULLmTwZmAVXaHzzd1KYGetQY2mrn39gTzKonuX9Ng4Pk6zdKDqxS3ofEo4xu3vBEo5facsw1BsG6iRD1a",
  "key13": "qGoZUXGs5hB5EaxHFGSYxXFVBi7ACAgKCrAQm4dQKuhnKCwyPmuznEzVHiHdMQAcYLCZqRmX5P6jNQYo9TJ8b9k",
  "key14": "TMVZFnYBAnixTXLwmi3zqaJYPxGkrcR1X8V3r84FbMa76casJMB9SFJu8ZbWa7jNLAargosjGm8Z6QhuBJpkcvX",
  "key15": "66fiBfCDxN2i4vVfiU9eC1wU8tThYRh5HdHbG9pqgqDtQoLfqviCXbvQwUwfuZcAHqM8FtwF4UzznSnbUrBi9aMq",
  "key16": "3qYyzMKRCKEAUNdz5MfJrRApYWoNBLFUpsPSunWaD18M3r5SgrHMUqhX9Cc9CUhELCX9pxmKT6kDQDLtyoocVBC9",
  "key17": "5jjFjrAdgcjR7o5yi9NjscJYnoaSGUz4aXuA9cgpuj5VUPdaMNZEBSdJ1MnRMTQ9vXyncbvbnfxBYtiDZmsrFEHg",
  "key18": "4Yfn5dUMr56R7Rop6UsEksEkXqY79W9ydYhWErVGFxiL15X9iYG5dps2XCGo9LWJ6ktaTQswkucMeLfovPnDBnD4",
  "key19": "5XF1PXjb9Hw2uarLgoXnNxq4SFg4GjR2ihg5FYwzMCrSeKjzKCZp5bWzQ2aQEsXZSeu3BJUzxxKh1iHDRnx3qAQ1",
  "key20": "2x6HLUDyiUsvTN8SrQ4oyab4sLmv4xhrzk3q84ER3fEuwh3SSJTUWyuuysWgZmFjsvpiPwnsjZE2kPM1RT1Zgcoz",
  "key21": "5Fx8s37PbpeJDiLa5fUQ5XXeAZQizxSuMHT1pEoqVgr5h4dfw3Qibf4vLvr2hc4WUQ6ZiQCKT1GWg6KMaZjhomoR",
  "key22": "55iy2Jg3iJvX1Wpa6hiK2hcnWqLFHTfyhikZGAkCriawJJ1r1F24eG9ThMnb3x4nWcdV4WejXrFFfnT8sY6BdpS3",
  "key23": "5Sv6DmMTkRWnxuNBHmyL3j9CNWZmg4cL8VdJJgkoFRBrEoQtLkXXJ6RqgyU3MGQ3w6gcPQ7aZn5EKMjW4piJou5W",
  "key24": "4fSZbsfndxcVDqoajvratK9BF4WDMieae8hQGjHG2Y3m99oNmWDKWkVmJkNWRJaJAbHdV7P6W8x1SALYK3P4g67a",
  "key25": "4F8euEHj6bM8aP57id5e8yBnk2ZKksg6KbUeA5jsfAd3rGrwSfMwfFTKA64ESTNyNMyc1FBLNZvVX4CacyVTCWXA",
  "key26": "4z6GCBjFLCqbxEcRMWp77p2YCy8HkoHTttLcKaDtr9NZfP5RYiAN5d6zKC18M6FeQbVVDjGBizMr6kKepht2BEoT",
  "key27": "2j1q4J2h6KxLUNoxr6xhiVX7hehVz9iiN5k1DDJzRsenkHmxFXNjUx6JAoX7TafwGDxTKCh7LG5wVaeVWnxPApyA",
  "key28": "WLKssZbLfh84qc5W34ypgSkbejyXVBNDkoDeXP7jaasmBn2aXmWReP4aAVuJ6A4oi8D6E6kaa6mX7TWTeiB7HhN",
  "key29": "5cAJzx2uYtYVsQrjUz4C4rXw2MGKxQypK5ap9os7pKu2wXRyzFZh4frd72bBxoK7saA94cLRNZGhsreEate6zMrx",
  "key30": "3bciMaFt7GpcqxgUi16P5S5RPFYi2UqszzWjBiEtbarwsQbjPpRTqPHHgjxY6D9qk6wtEkukybPTZGfhaGLTNxwF",
  "key31": "37ERWrZkfuVyRy3UWBndh6HzpMh89FgT2KyNy2fgNtCvHuJzoULSz4Pty229HNu9Gu5iayjENZa6bRuZdhd5mxRz",
  "key32": "7D1dCZiccMJdiKXSBrzZMHXixkuSHmrgQvjffwzBzv6QwEa946kZzT1Pq3tJZfPkWENCiJZKdFjugTCYy6kShbJ",
  "key33": "5pJUSG4FMUH3eJCtFjbdtvsZFwdw5QxbpgpDkGV4cY3ZsFKbBD5hYNMRRmRMN2roPx9XVZZ3f1uwVVuPQ3yVc7Ji",
  "key34": "5paAtNcu5p5cePEMK62iXuCRHMyt5Ejoo3iR4JG1AoecTS25xvqZqHghFSiE5WQMsH4Ms1DqxpX6BpjWqdud2BfQ",
  "key35": "53oqnYFiFtwCfthebAgaHqbPbQ7oNV3Q45LxndVtwj15hhsrQMYKxJipEorXB4sjugMkrUmu6oEhRjWz7S98r1R4",
  "key36": "CdmkirHPgMpv7H6TVNDmAYTJaWjzRHNhsUPBw5YNXsnqr73u2VnZJvPssvqyCYGQrGnh5nhjLwTPXvgyGegKAKe",
  "key37": "34EBJDHQuviEL8D3S3Th96WGEFYnEKobf9giRMe3wNV6MPM8PVLTYkqtrdN5ePpCUnbHdYQAtsyRWCF84Q6QcinS",
  "key38": "34Qirjpr4UgYLa7weJfD9WbqDq5hd79EE8oA7nC6vDNPL9PZzgkrvacCZaeTY3PmRkJkXBZNBroUXDS9uoicvuZG",
  "key39": "5udx2WvfuiCpBSdJdsQK8P4qT5Yc8WccrDpjWNLWRngpe838rC6MVTiNCc6VcQkFK9Ucjag1hJ2CtDiU5m58P2bc"
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
