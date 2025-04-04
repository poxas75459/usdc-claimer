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
    "3AUvYUSe1VQKWws96mbXwQqu5Q8NjLB7xt2qL9Rr5LN25cpz83jihFGzu2L49wiDX2N9oPjCs2XWkDoh2bueaX5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eD64BqFkUdw9JNPhfjAgrpCehSwXZNoDzXPgtKwRfypGuEheXuiQtvjWWVp4TMTzYnDWiMPSuYgsNJUWXJuXGsM",
  "key1": "5Hg6QedXjmdK9vrLcrZ9GRi97eXqJAt48hPuWRTjnyQS8VLvM9S6b7gT9ptxqgGHnvZvKZ9wNuAQoWQykGn6i8dt",
  "key2": "42u7ex6498ET2ChGMNTsWw3trSnocajJHn4un1cczoFmKWVzQCueb3FSL9Wph6zAjsFRQds4YdkiDBrcagsTrxUx",
  "key3": "5u4ZqUczX1zProkCgNWd6efBWd3M8BM1fT5KBogyxxGtt9CcoxTFBqVG65VQY8J54e2zbfD5m9MbZCHkGYPkCiic",
  "key4": "5PNF2KYQuuagHSD44EBkaNyE2uyhhmn5LMZp4UNmWqqHsbYWEsUsnUb3N3pqZeEJEKntegJGzqi2oB5AU7oPFiod",
  "key5": "53jKcwzSiMRtMJGW498L6EiWSp5AgcvWdcH9igizVsxG1QWddo614jh73d8tikvZSPxaJ9mm7h2Pp9LdJQf9fgZU",
  "key6": "9nqvaFxTpVGCaBra9S8sK77KhdvNYkoQDLYTekadCEQNNSq34caSgKzmvVHS4eTvDqaDDo2AQQsFJBhcDyNLATu",
  "key7": "7ecMHkxTS5iKQZidLXYCoC2AG5V81D1pCudEwap2pYoH967UNunJCmAG4VW2EJZpt2RLjsynbbiEMLWXMvzDQL9",
  "key8": "3LAnNPVpXKwEGjKksVnWR7ETkJywgwYync5ZEaMo1Uz7akjBXUuThPgheQtFLjN2qTLFXDt2mGjmPzAdJtioMqPR",
  "key9": "3XTFo9oyfsXC1aiNAmfDWSRrEtKiieQbkmj6NZXPSnVWFoRmaohkh3DZXqPgpp1bMjFsakAgLdznVPNbCrrfDUge",
  "key10": "2wkaEqMRbdyLyQQ7FUfAjPEK5MqLci1agRLioyhdYyShfMP1Uxnau2KbXm812gvkkQeAWCgtD3dzbGgc78MG3MnY",
  "key11": "YT9apqKvNoicRcWxPVSCNnCS5uQPVAQVVpu5PRgEPC34tYfodvzzoPsmm3sr9UH5RuzEvGQ8yG1gC7MZAQEwmXo",
  "key12": "2o5LXWazoBPH9Hn18JzNVotwVsReipwT5Cqnm7Dp9LWGJiveZA2GhAEu8nRjUTg8AWX6DGc9c1EWBSpDDRAQBEi3",
  "key13": "5thEwfAogNm3VJaxzDFaqWRTEfEAC5w4zTGvgHARUFf3oSWdvRzMqWJkB51MnKrjWt5jLr1rsCpBAHX845C3DJiW",
  "key14": "2gQGMusCWEhHRZBKbRHeXBasMzwaxBjcMvps6ka487i1ET5jGqm1T3AgxMFs6X8GxJmHVqoVXkJdTdC87cixNLX8",
  "key15": "38EaEbwHxfjoCaGz5vLCejXNV9yexUSEXNpES8DquWkR5MmuHoJp5uuNUVadS5iJ8xy785EPnqKbQF27mMsEx77g",
  "key16": "rXLYF9gTMg4TdEwa5JHx8dZKpZCh821T6fH6hUR3FfixmrAZ68QpRxCMhv3uRb6ZCAhRS8F6c2s8ok7XfBiVzWp",
  "key17": "2GD7iSyRZ2V8TwMNyGC314Bqd1KMUQvs4rnGFLyLbgu9JZmGYaX9gWkWfZf791wuyA9y6EzWiDsMyj8fqQjGtQV6",
  "key18": "ZJicb7cGHjdwBM7BGxqCyGvkLsJHFGD45vJYJ8evQHPNoMRH9wpWn7BEpmQN8X8BkoEcR85NgkfiskQk8PBJciA",
  "key19": "2JYttLewbo7vyHLCLMeU1iqq5TKavu7j9TgXR6MZgJqEUpfLCu77gLFrtHhXAuSx4nMog8fLGLSoEa7FeRZSfSUk",
  "key20": "5iyP9cudvhcSNaYnp4U5NihyS35u8p3fgHNhJ8gFMJnFegRSiESqQQsDYWqZ7yke1BdfcJ2hNekRYp3bwCU1a27q",
  "key21": "oJkHcAjbUH1UgR2kytG4DuJRLwmTPKow6k6zpeAm12VjEf5J2EUnh2b1nb7t5ngmVDZ4w61qbLo7cPWRdmYAuFD",
  "key22": "4LTuBbpN9Drm9Xhssuq4nWVjnyfmYkCzeLBhBNTPa9oVCmUho8KLEuFBTMnPcGQnuVTiUk23XXDj9EQoGTvZbVnq",
  "key23": "2XCzgFWNtEycFfuaiUex6LJXZPaGD2BCkrRMF89PqCSFb2qcj3KRoQacr5gu4UBvtmcRNyZQTinoXngj6uCBkhWQ",
  "key24": "4GoC8qusBELgSk2iupPisp2frSJW7R2dkHCqJFWZb4rgU4b1Wr9S7Dm4UfrkiGmJd8qhxcNpZo53xQbLRHWreTcw",
  "key25": "5cqCxVSnPMwyVtxbjqLnVEYLqoqjn75iqxxrH91bJ1DWakoZX9Hi6DYiRRhEjRQLhwjWugomsYP9trZZK1bi1tUb",
  "key26": "2Jz3gQrAwZrTDwhYuCU5cFfkPwBtPzRA6ZGNfTwTRfD73aBUehhBLp9RkXdWizURMPEB7rbphHRg6DPeg39VkFRc",
  "key27": "53DD6JSr7ny73gCiy2m7rHjwdtRFVuYoBk7LYAoC7qxymDRitwYLWQvSdK7efdESJrkuSTqfZUSgMMoGGksFqbCs",
  "key28": "35cgp5BjTL6nbZbzKAt94R1dPNrXWChm9U3WANXcAAwmgWZAsBqLoStNcZrDvfk8DYEczGGD9DV3MicdVFY1hHwV",
  "key29": "3AhGpwwaP2NUhZyrttK9558V7UL4L1Hwjkc9C5bBh1rvkwrpvBcFXkWjMTZfeFZvuHaYHLozRSjZb1EJHaXfEGjM",
  "key30": "2hsDYSHKXXk5vkXVU7NXQmhmNqJRVNjP84bP9LpuRaRizhgkSedVnJWcas6NggVpiL4fZoT27xGP5rau7Cjbt3GL",
  "key31": "e2EMP3QYNEQ2gNav6UPrvw71mWuFNaFuwSPWJtEH4g1nRBwWXfcAnPCjr7EJTUwCBjzPi75NQP7k8eqNXheB8xH",
  "key32": "5b3WJ1ZfFLsZfonXHoeDjWRCDHzpgbxtHVHk4pUYwX9ew3piaTb2x5xnkTXUV3q1kz1WGmg2eQUptMFkLdpsbpHJ",
  "key33": "4zAZ9rEKLGykcamM5Jjd3Kz9ZsVNoEf2kpu7DMtxKvwj1VggutWxiNydtLyffrFJFKxLJXJAfbwdMwxFA76zzvan",
  "key34": "4VshXFssXLdUVBkEJX7ewgUGVYjTYaeGWNb8ZdmeETPXwAJd9VJ4rY6qUgBKvhrHKTpNMWPPqW1eUJwsG8PmESau",
  "key35": "4DRZ4zk89zwm7QCXKKjGVL7sgvexisnXZiM4JRWNeFQfpJUnrnf9zfz7Ri4YY5Usdf9oiVLf2cabPrA6NXxEfgEB",
  "key36": "4DMhEUUahGcEHncengWpsGbVjTajUR3rEK1ZrS4Y56msRVeUdW8J5MFeX8ZL3nravgNTL2AyrJWMQe23xP8yCbMf",
  "key37": "3mfEFPky5bDd5zUcDBiWTFU9VS9PksuwVSPdGdYvegSkbu5wAphxKaa4TVfrpEWD7iD8MUKxYVurRdBX8pZ1D8Dy",
  "key38": "2u8AfhFhrjZmJGwUcvvHeU7sHig63VHTnsXj1oEyaNBmst8B66HRR47oZjDSbw7TcVijq8rvKfU67Fb3nL8kPsxN",
  "key39": "3detuP3sNhJFoUYpDQvR6xAJWodVfcUtoShV38HxtBvzVtCKCbZV5wTNDxBoWce3PGj92Vmk7vtKNneR1FfJ6Xsg",
  "key40": "3JCWDfiArbStZzXcwGYrXrVMaZSqfxudc5e3T2GjX5A2mJnGUQ7MotEpvrCWzxXUt7pS9CMAxYSVhTB9waPedXE5",
  "key41": "35u97uXLs4X2QuymEMxWDZqXjnGKxXUxeVHvBmr3eLRJqXejKXW3KCtF5YEAtRwiDFUt3iqaLjo5XDY9BN8keF87",
  "key42": "3P1s7Euxe6jbvZBykRTwiJpBDXpZWm2svhPtxk7Y5RpdFhKC5vYkTLp9D58jL7awYVnTKywYoziSH8zLr3v8R7uj",
  "key43": "Qmfbb8FR1xsgymcBXSHzSTUhv2qcXBmf1sc8RzEWgvq8yuj7zGtL3rv5jpXYftwEh9qbHdvEtrUUHaop8GhFXtX"
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
