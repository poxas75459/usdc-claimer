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
    "G3mXcYk2fH9Jnz7c4UkKMWgQP9gwXMBHyxQKy7vdNMCVSxCfjdjpGgZLpcxRGHGa97ZxycpAvrkc293AaFVcEjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wFojSkEvchhf231aJWEtNRJbiafQ1eVst8qztendY8Axz4Q6HNZn6YymQDqecw4pKCHKqS2cxHjEB7y6ScDrAk",
  "key1": "3HWf4J7nErBJq7d6SvNicpVwzxMcrqYowBmfaFtUrahsBkLFY9j37TByKT8tg7ZYxGLxtBMADmgrgJQpLyxpgq7q",
  "key2": "4eBYDDLmVuBtBZfH1CLMqKiP7duTariPA7VhC3J85eRWaX7CryGQBKB2VbrrfrXERZ2NE84VgMKfcfLrwTW2jYuP",
  "key3": "5D1ngqRrJPnhnYztZJNRPJrAXQLQ9mUqx9zYu4urLR8ARXFFD7Ati2UZWm2Yss1DQiM4i5QRSeuVGHhGn4UHKFwH",
  "key4": "EYdaE73abcmeFr1c6hxxrWA988nCcwCXATR2SKFrxw8UtEXjz3RtzM9KESGQZYZLvKPYFFndbjm2mUyh9iFrgDd",
  "key5": "5rAyYxK9rxi6g8szZHDuiXzCNU11C4QvBE2f3sfUb1qpts3qxxkidHF7XT3uXR1diTQHicRFp6iQiX5v9HDBewfD",
  "key6": "3V5vr9xnYS8Znf15y3PB39aCGu44WdavwHTp8cdf8YBSRJRrn8fmrJyvousRz1qBUmRNTKc9aoSFJfd9ZxJL14Q5",
  "key7": "2MLxsRPmWSzU9LAn6b9anwYxuAojA9W1bcPWKXNrhZvGcmXkSLknoLPRDF1b2SbAgJNcLv1YpzUGM6vuHf9C8tzT",
  "key8": "25uvNYawu5hWjNZssr6urbfxAtq999iUDfMh6p3Ab1pLwuJdNxqze3xbXkYCdbEN5tvW3c6VUKQuzuCR5RFmLbmE",
  "key9": "4xquz4NAkweNr57vt8CzT74wUSEyJBnpDp8cpSNbZ2PwhEqZYffSeyA3UeyeMEBEK2Fxeu8u4WBt6L5uFqCDbz1V",
  "key10": "isLM8j4xxv75Q1czAPpGuRo2gPEESSxPBSzWmicZ4wSe6ou5xfW8MwTJnHNJBVvaZLwWJYUQNa6r3PLprJVFb6J",
  "key11": "4GvEsiv18GKSAJeMPNdG7Vce8bEThgeiULCNXtPcgRLjjzdELusCvPHCi18xFfSK5UvovcktMVUtXaVhyS45uD9o",
  "key12": "N6AEH7LedkEZP1r6VyDfFd3Aat6uLuH7L8Y2WZPjYFb78NhZF1rWkY7y4xJHuibomEHeQ26eaZKJrHiWR1dMZB4",
  "key13": "4xx4RCHLFydxDjaBwtoHBwFwJr2gGWCbirgxzPa66ZKQn6tD7MnemCPbBsVqwHRErirm2mrZxXDVFo1ypR11CTCt",
  "key14": "3yRMPxnJoQg9oXDU7rTCS7EuH5byTgf9NFXhdJoXC2zRNjCYAhPWqDubn7yE2E4gpkX7wm1bEhjmmTsipgZUZ3Us",
  "key15": "33T1vTiKRYnwKjzZPMj4WbWzAzozXSMDu7sogotxincNuTrRYrrrQXKmss9cyMWJoZoHEAddZWkF5WK6f1ACLGkq",
  "key16": "5St1UxArKMX8uuM8b2qy6YdqGPjdMEgaBYz36rqhM2qom4N8V1US9vF8cJnWnfXgkbmhFzKw47KnQbQhMsQ2xRc6",
  "key17": "3HKpaQmNZQoyS1u1HScpUvjjXGhS1zdrNxu2xRJkiac3A2eknEhKFTDFwkHFkU3B3QhjAbsxNZkgjhnv6zNHD7Tb",
  "key18": "4BxdeQVJYMhT4US8ZeGAcYBNe8PLwrVBLXLH6rvse5uS8jWrJ38uJ3WdkgSJWQ4isFqCs3p6CxPZ2jLFZ4ufNmQs",
  "key19": "5hb4rDhTiJh2fixLddJy8DFch2bhFbTrHYff8T1RNzZRy7S3MVFUPYEaDAnZSJPo8u2BopTKpLKnUeuNCmzRitks",
  "key20": "3dPtzJAz2gcfT9VxFkHATN1NN5uuwdkaLVWSypK9DRFkovytmta8gooLA1kaiXBQYpy8eDJNuKHZdk7pXQ2PYsCp",
  "key21": "2UiMu7ThroS5mxHdqbZkRJhrtKeNaazgSnnerpA3pyfuG6atcxAjKE7MKjPXVibfN1GUQURdme7YGKtyp7AiPrj7",
  "key22": "9K8Vk2Kc99wgVDA2BExWoVgjsRWuuXZkLELCNP23tw1yZNKCQ5Fr1sHc9v8rV6dVdctfSGohAA4xZFJ4AB6Afdb",
  "key23": "2G5bYahjow8RNz4VrPmLZp4FjbzVSLM3DbFxKaSXjwcYaunhUxQDtXD6ni86tLxBksSVeEtgLoebmdCAt4uvdEUd",
  "key24": "3aiUpwNRRDYDeT4gUtSEwdeMyXwo1a5aPxLJQXNgPnUUZz2UnJ7tTgyE5GYTWjBoryoF2kLzoctHEN2ZzGRrGhsv",
  "key25": "57As4ZLn7sMUhwQUzrEEcHVWEUMK8o36D6FGzgxgaYHhHFveXuW9igiT6bFUZ5B42soQp9A9wyxhTh9RTh8mt8vn",
  "key26": "kwU69GP42qeMTvBh5uLsCpvAB2ayx9SRHondjPe7dWcHHwWZhsT8tJeDVttRQx7NcUcvh7VDfn6DBfnmfDKt2Gt",
  "key27": "5cK5AC9dqgw8nfLUUEw2JNepW7YM3zJa1icKLV8Syqwv742HRcykqKgpUsaYYbQo1afghqkovWLuNDGw8hArfUWy",
  "key28": "26fVx4QKVnt13XK4CY3cR8TGh3aLMHVMUNMpEoKjreY34pugrfrXSvhd5u3DiY4rc7ERCrSfei2vAWnYPwQPyQjT",
  "key29": "Wn3W211mE3R6igmE5KgGRFAALoX6yeM6EShJcrtUB7fHmDMy9eDRNpXhLgMX5CPqxFhgf2GrD4aRHi9snw9tf52",
  "key30": "4521y3tfju7c3zNAuijbm5kV9DkyieQq5sbuhi7YfoxySjuSdqPnNSS8nrWEhF19N8SEmWA8uLHCVXiCRFGhVeT2",
  "key31": "2cWbNs8sF4XRX8ynSjCs1SJfSHfgVrYNcyJg1wWBA1JMXRoJqFkimMYCyXCMeS9d1pTZBQ8k6qUNDjYVnMKeVSRk",
  "key32": "2ooAzRc5j2zJAVVztqFpfaEaK5PdXXCVhxKgSdDbpDu5MyLhYCAg2g2AYRS4mwFHCjJE4nGG7JsDNQvR83RVsu96",
  "key33": "3xiq9qMyPzCRYkPKNvoccbqtHisYQjBhQHY9atT914ZeFGDAYRLdZLCghJ2uKwYjLaJp5YfFSys3z8hqQZBw5ZwB",
  "key34": "44YCj8utWpmRnoHZtERrNoBtuM5C4LTLN3ccjctMoxiwpQckm7FG9EnJnRtaUL882pPpLWgzboSjLcaYD9SE5GWf",
  "key35": "3e374GGB2aMN1NCWZviDq9LJugVYELZQw53DkTPDDVjDLWyoxdrmYhswDQRBN4t42S46RLmVK7DoC4C3EEDppABN"
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
