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
    "xW7timT9GhHYaANkuUy6U56FqGyMeJ84pghmjqyadMFLaHEHM6pjn7iPUBJk4TuAgQRLiPLM9JFjoWaq1oBfTC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSL3naF9tQTzHjvYRSzqEspSXBwi48qRq7jnNHSnXkzetUcZdQGmtHarxNQD1sLcLuqvekEuULDbsSyFQzm58oA",
  "key1": "3fq1z9xLz5vG4CaM1oEnsw3ziYbTJaEBMJgVGRsQMbeEqZXFzHd7DoKhSi87sxraSEddeKKdL93hqSN4QijxSVL5",
  "key2": "65bNq8pqmhiAcvvRMVi7ixKjm7dXNMRDGfUNnNGqWnGqTnz4Bu7JXiCPWM1jvNqYQEpZgQDDmcLWWd4SxHAmQAEh",
  "key3": "5FJwWaRy8yNX5LvHYxkfR7sssBZ4QNYLkSEysqXpjug4eebNNZyt9Eh1z8zi83zF2TozfAFJyRXAGho96d6JcRSy",
  "key4": "3x9uR6DUJFiAEUJbY5mb2ZurCrkYonLyHoh1JLqMpRAUB6gNkKeDZGDmH98h1uSSCZMJUoUoc2UKBq5uZdmhN3JV",
  "key5": "yobQcNTyDCU1YYGQaGPZJd9Tza8nGLU9d2Y9aYmVRMdvMagD4irP1GNWRcfvUSv6n4JzsmbpqLSduFRaZSsQHxt",
  "key6": "g3i2w734sNrxbM6cE3bQP16hnVgrnc2SRqnnHqYLfjQbAjb1xhr99jGF6xxcgMQqiH8ig6ehB7WNmZVbxgvqs6j",
  "key7": "514PerqFciaB52n3EVTqSSKaai3NeLs3XtJBwAc1akF74Eu9V7yG8G3x5CwdEKhcjFLkactG2efP6UKXT6MSwHg3",
  "key8": "5Drh8wS2FzYoy56aVMxJFyKNP18SoasKbvzsKEGcapmWo1tmyxp6hXSUAZx21J3bLq6eHfo49k8jBFNc2JxBNA71",
  "key9": "3QGuvULiZHhF9oQ45Qk53EKrePbaGkzJiC8fxDYHAwA4qbznWcgBqTzveQg7UVdzsmmaVj4ozirsQa7bKJ1MbMko",
  "key10": "2sAVit6fSBoaeike1NLhDsHaUWWJcpFZtz7trNdrJjEXj7SEVFqf1MMQRFBRwbyNLwJ3dhn6KzzwkazPBGimRFz",
  "key11": "4rgRn4v7qT3S2xSzFXu9PsXG4Yemm1ru7BvL2Yfu3WDiaMp3CRANf9AUKUm74qD448tEpocj4T6ULYq7RjpbzCE6",
  "key12": "4oFrommHjK3E4H3KG6hCfqcsvsWX2NKHKKWxQ9dt3CX8kqssn95xe6VD66nRb9Gc3y38TMUZd9MDZ7bjUBwFsohy",
  "key13": "3t8q6FktyHUceMBgc1pPzeNmTTCssLyrdPEPT7Qav2QSj2RcYpyb9ZUtK7Cphpq8JUJTUkJi3ufw9yQ4orsx9ZzT",
  "key14": "2XPRWJVKQSeq1EWDGexEMTk5aSrjUmdNnAAih8ncSkecFt3MZPFdVMf6Xo2BtCcz2cQeswVNkGqhD3KzGT44v6rZ",
  "key15": "2ReJ3VN8sycaBapBS6x1dGx5MvxJJTpP3YYW4bz3r4r3JHkmKPnnCCJn7GsCTUv9TBZ65aFvFEq91XVmy8nrcKoQ",
  "key16": "5DDDw1RJ82sxEpBjqvHGdd674s2gkh6uLmGbMz8v5TpNh37Vm9UHWXU7pHZeXNr9zjsvMNcABoUFaZwbvYTQybsk",
  "key17": "4ciW4fUvfWsLtfnzkqS2wp5DYqnCazr8yPY8Uqy4CnBaHTU8rrR7ZusmA1bPaFLRFhhAehPwZNCfgfjpmhFQ3atm",
  "key18": "4vTUH1DGY19y5U7VbmVoquz2vzPSGrBjHWWvQuvEHW5YEuWEtQQYNPqdQexnDB9PKN7RE6zdT63dAGEbZbszZbPd",
  "key19": "2AYYjBLsUW3eSvR7CZwpbGzYdG2CX9Ezf7h9o1G8GoxyuB7YgfrTSxQ3fz4jmvHfyG8Gq1gKH4Yi5EHxGShgz2oV",
  "key20": "3xjU1B7uawg3AAqmtnLWv2ZxGF8hHHCyTuimcxyCiNp8Ag6tLHkS8Mmjv7D2uJnrZ9cjGSRfCR3mgywSRvQentMp",
  "key21": "52MwzTQdKQDKTm2dtYTP5m7KRxBgBch9kcbbUtXxx2NZhoPpgGk9Lon5mkSuJby7evv3bUySeiSsGHKT33Wzq9oM",
  "key22": "4ASBLTFsZ6tZu5qReacr6NLmjkKHVqQxRYsutPCkLgpN9iEfL1GKFFMD6vMivAQuKsNFsLkcixYGpvf7en6hTydV",
  "key23": "5Tb4s4ExMGgXv3CPWJr6dWwV2ihcWsd16kCSKke8wwBxXxK7sgx8tLUttFZAGWutBwSGj43j6p3NwQzQz4SxQqQN",
  "key24": "64x7Dx9aC4iEa3PNjXDz5dok45Qgz44eoUqrMVeVMc4j5DudYsSguvX2n1yE5VXtEqhxdas9kCigX6AFNabgFPBp",
  "key25": "2iyKxCBWtNHy4bCYnwid9rCg8xR5UtrSogwKL3mJfb8vjuRycrEbYeFT7QCWsfJNW31F5AvH8HfG2g4SBFxKtPer",
  "key26": "5oNNyzPsykLLe7vxVJMn32cmxJ1ESUKgG1fXwAoW2V8VGcBoDz2zobPJtnJdD13st9DWYGwaRg491hPb2tWtHuSn",
  "key27": "5DWPbbny5yHeEARS4muHS64d5cdpThysnCXhCQmQKb2jjzMwWQ4ZnMSTm3HwtSmP3XnEuNBXx7KLH1Qxg8x39mr8",
  "key28": "4NcPg52EMULhHxayyL8UNx58imuETQ5ec5NirodWLAyt3HhsMJdBCKHA2CrkrQD6dT2q4wMsmXb98qr372bpanN",
  "key29": "5ZdpA7JcELhzxzpYutGYqGSdUn4knkE9Q1cKqwJZw5M1JYebe2FNgBxEMKUMXUnUYPpyoe36MuMRQhagFsvvRfPx",
  "key30": "57c2JnYVigFH7tLbXo2ed3yjxVuy3Qkn9zmbRLAL7fFbHJCHj2kXd1Qq1UecGxYxgyGgNXL2kjhu5hA7FVjQinFh",
  "key31": "kwC1sj12VHPJVg4N3YHjSMZkwwtKANHcL5iNb5wGqVPZXw4FHVWkrcRWR85Fy9n8zRtfHFExt2MHYrbabHBJJvo",
  "key32": "5AGuU5uTVtAKFVCaxi3sJaiUiqftJx25rngY3T2VtfmT4BTYydHxUSSThtSfS9G1DdXkVuFnzAuEAAnfxAAVXoWv",
  "key33": "4EqEye1copD4nCmc7etJ91CsLCdsuWKiw2cgYTYiSB7PFUruFLUn1vmyEMPvDpKC2eJBYGNVHpQcAijH7hNqcykJ",
  "key34": "PtvR8roQW5JEYZiQi2TN3Ac6xgT4s1SX2sVgQ7E83wm1xvgBQuRfYD37cJkVj4xwZcsQVA1G7pHaqNQtQuvzCRn",
  "key35": "4FUNnxj94pLMyWxctPjyQ6q21f6aXquevqbZSfXR5ewcbRMKHQytWZpPx4oDAXPWtBir3dYGcf8Ujqw69VXFUoaY",
  "key36": "4yi9p6wetQzdPKpGYvbQfNwvdqDoaJgVL1HsA11EEUbJNGr2yoP57mZd6Qkg9sGSgaKEoR5BrJcCePDJXqTsdtiW",
  "key37": "437DJCVi5ZPGVpr2KLDpfWxtJFAhcapWuCbdyUsRJmEBFvmm5Mbz7BYLDcYWGbcbpuXvddvXCCDarKLR8aes5gD7",
  "key38": "4r7yuZ6vHRGA431978Br34tec8Z3wRVhBUdanpCtov2sYYcCX4KVjbsZHAVjn7f2q6TdkdV3NedJCb8oosRJUTxw",
  "key39": "uJp4PK5EoN2M96H1n2dZWtxj4spfwz9niSdtnGWkXoUVAjXeSNWEVtSDggjFASSfTGD9sgCfMfGaxY3AvUZCfpk",
  "key40": "4EYJUugQ4R3VhesyyQuzsp2CtoARPLeKxyTNddKvs9gaVNzGN9YyTLF6pYF5f99K5tmJzGwbzZPABqX9PfpxhBXL",
  "key41": "38nhEjtFssE22wvn6CaX1s1NPx4L7spH6oYXGfPS8hTZhpf492t8wEkXAEqK4cSEnxuN8eMJkCPMDsJNm3kUbFpG",
  "key42": "2MppH6jbcFJUUB2gqR1gNQrfVKhoMZLGs8gGWH65GLJoomatdUza76zi8FPCckUh4ES5HVLRmFkWy1h8Bmbsi5je",
  "key43": "3K2wdhkE3CxsBeyEqG1azx6rC6sevPAtHuUEze8KgQCZiwx7bmmgv2vuKLra3bjN7rqi1hHWcvTVkYvza3Hx2UXV",
  "key44": "mTz1pYWu5QXDqciYZ66CHEWR4h4r27c4vEt8RfS4q7NAasP8SocKZG43ZCdQZ1Gq8Qs9LGV7XDMJCFQJbUkMhyx",
  "key45": "4QkU31bCjNLXEE1PcJKHRhZoimzDHfFG7sdzM27GaCTU8uwN6FR7dsU8G6HGA8ndkyoNfpbaLyRPgxvxPvTTd3Hy",
  "key46": "7J6hd3WBgtADtgYeUEbepnymj1JWfwREAqRAMMEWpbjHXDuzknhrHLwTmmWrRiAL2BDnUocuNuLup6bciUcJTuQ"
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
