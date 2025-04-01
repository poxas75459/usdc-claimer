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
    "3AuX6txwc1Wr8N6E7JJ7yhZChChNwhcL6LhVBbrMjPWa2n1qUcq9PJGdKn1BmrHvPt3B5CF5HHTSVGpptVeAH1UV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tj6E9rDSUK66VYupX5w1JxnqLisPATfd5aCVkvtKRN38y8tex7oziKsz2DoqkyoC6txGT5UN9gK6Q727CQ92LTb",
  "key1": "5t1K7zNJYwx3JzauUFCVp8JCST9rkUmf8T1AzUZcmZoGgTDM8KfpGpisXrrBEVZup8wpyXqryz7mEuoQcjL2Nks",
  "key2": "4dEMr6j8GMAoyuMNhxWWPEhmSg5QRjVaDkyfLKYmqnFE3HYd5ZafGgPYNv24vCbMyB64w2mdhbFiNw5kNrVyFVPJ",
  "key3": "JtbYsBhRNSjGheZtU3G5qceU2GxcSZejP3pV8ZBxruW2acKpsspatGikq7zVPtRPDELtFs5rrPK5KT9pj8s13oC",
  "key4": "5HAcZWFH6Chxfqm5ZSWRjJ8ban2Gea2H7jVbZ8UiAhaDdtXu8pGx6YWv37ZWbnbAftG1TMUHh4wJrRX2NYwxVNVH",
  "key5": "2qRSMzzYKWSzKE15Smfe3HSkoPQZnXyoFK7Nu4k5fmnr77JB116ZR1EJjq8HyKAPKWve44TM5UfbbXipds5sg1qL",
  "key6": "54bkoqNWj7HpVbMbJDtjpATquEP9AKexfvA96H5BQqZC8e3YbCQMQmdMr4EmZARAHQxXKXFVdrukuMvEuZPqn25u",
  "key7": "3sQAqPdSma4drckSMDQUp1c6nvDAGpdGu2e6LwRTsTDFKDKieeK6owjTSSuJM6Knx1oti9ieumDhUXBUsrmDCeo3",
  "key8": "4mY5SvxdXoJcUitWDzdq9JzQCdjMze7pfLgbk1DmMQKyGoTXBT21os52J5QwbEz4Rcpws78wi7JKuRymuMCVE1ez",
  "key9": "3zr7rQaKPEnBUC1dTpJmAYi2BpMfygRrtREDpw1sExDSZe6BD4aZbbcbKGuULRz4rQG6M9UMnAP9FiafmKh4sSjG",
  "key10": "4amVmpDKmZK7xjkfFW99TQhSs2Kx8KviXnKYAKYYz8aTGqdciyw7V1pyhb2yAdr7K9cBcfhwjjzFPSboJADZQJjS",
  "key11": "3h3rLTKo8Jg3pqZBTgKTkRv6EgqvKm4hsKtecuagvhQK9uuFZmNnHnJyXC5eq8j8RfqBjVa6SAU2vAtfUJ6mKHSn",
  "key12": "3DnU3Pfd8ckTZd2rpukoZczB1xQZLYqjeZak6BsCaALRv7RDyRGrVa9cUe21DprSbAZChioBJWAAyj8qSeyd1Bg8",
  "key13": "238DEXpjjiR7YjhH2mJoRsBuMPKXqoX5J986LSJiFxAmLdVKFrYViPbpFzBVwVxXfKxwDcDQCVtswaCPErjouYxD",
  "key14": "67n9jTrH7fa1BpvunbukNRgoRecLWjKr9vc8vHqbBi1SHkdfEoAdGfCM7wiGerVXwMXCJjVZxibCiv4VNbHYvhtG",
  "key15": "5RLpzAJWAPdeyX9qNaG3RwPKxgovXZXTBAwTpVCrEEeQrdgjNehamBLpu6tinpduQmWdhuMyZeafpcj8GBCh2Fs1",
  "key16": "5JHCbK39zb4iQzmwVQMBR8GnnW9sp2CxsXtms8fUAjRkUACBQGX6D7kXw8Tma13oV5BDyumdT3XD4tRzVmY4qJGa",
  "key17": "3XZy6o4uFqaA8ifpMDgeA28HyQsFf4pLgBd2j1zWoe3g6Y1EPRGMfGYXbaPEErGLPB7Y3gxZhJ2BCTFkXi8qaHu2",
  "key18": "66diAGYEL4reevkFdUHvTRkZDkuK6kJXmfp4vHjtreL3kVmiCRSHhuiZs6o4hDEjTkM7hdvmM1WxFvCXP5haZcLB",
  "key19": "45yUZeaYJf9wkC6SUeRpDo7W46T8iFSt2go4EtRg8iCPGTdc5sn4TsDtsUfUFwy3NnVPQ2JF4DYwxY4yR5b1T6hh",
  "key20": "5pAVkqMnvMvPiAymxHV4Tjs4CJCSixxiP9A7fDqDc3r9nUyZVdHRckaWRCLpDdFoYdz7yfL4XzHWSJGN2BLbz7Xh",
  "key21": "5f7FYgHQoHHa3m6wGwxSgg57PPDGuHuZw6FN1B8Qud7puZLY56VGQQwJEvjfTU71AkHWhfpu7mX1rwk1uYVvfXjQ",
  "key22": "291VWQsxX4sY6HqpJS59iSZwFvSz9zTGF27iaG6KvBFTRHMiu1sfVFjzBoVFyULuZ5AKqmZXpXWLYTCPtBsFVtWY",
  "key23": "2YheMrnKJJLCQpShjXhP3jKGS3LaX6WGwC4YDy5bMpmZpHMMx9v3hnWGJ4DcwZ1z5NUoQcgep7GB5ycWeLqs1Szr",
  "key24": "4xhoqgJZumo2NEp7P7gaQ4ztujJZ3eRbVh3fp1L7qzHqEhVVHRtb3TsZW6XbZn8kbSk69iLssA2wNw6aPUmcpgEF",
  "key25": "2cqaeFrySCNU2domqfUBSyrxgJ9PYZSvNt87cJ9oDYKqQ1yKuXrqLgYFZFq3phjhwZ7ib9zfG3ZwGWVo8LyrKwpg",
  "key26": "2kMSfg5tdMG3rWTxi8NDiKwSBGyZGrQ1ygkp9Uq9tbxMbV9EdSHjut5Mv6buJEVMKgCtskLFb3ZeLFvsbhh9sQwe",
  "key27": "2oZP9nF1CiQAKFBmbSHD9oNkgGezqcYQWgRS7zbs5ii7CByjQ11PkwqG44ktMsVeP19mzoiXhnVcPoDCdQkdH3DV",
  "key28": "5T2NmQZEtdZYHRYD1WwoHPPodCEhngWGbpBUrDPgPsGKXCx7XaAF6qPpYmWvgDzc7MexMWu3quP3oztjRXDaQQqS",
  "key29": "YPxLTD9jZnS6BbeLuEYbZjJcx2edYrgj8EAz72ugPHNAucL2PfUzHm8zknp9ZLMjoqxdUA1aFTBoXjTrEjVH8wc",
  "key30": "5fNtAV4dqgWH1psgxXiFY23xLGWhbBbMNwW5zWDH8F2S4Su6DThZRsSC5QRPt6KGjW8LKoy4yAT1M5PBwqzfJkm6",
  "key31": "5pp8MQLraTTV1LSkSsx3UBAsuomzJiTi9zZKwNdzHBnfiyaUpbgC8HqLhWEDipV9ofx5Hm1yxBrVy94ejeGtLFci",
  "key32": "5ReYYsW5bgaJaC13srchwdAapXKs4mpf8Ga3zb5neQ8gbTpQPCMJzgTUoTHnuuroiyMoiVuv6FjUkHJpGupwuzWP",
  "key33": "44xLG9DPYqAFBYQkivQ2xsaPSQQPDvGnQq7rMrG7WWKUDFbxj3UXLYZR2YNppHAAY12tDgEYSNCriBA4B1ZmxUYD",
  "key34": "5tds4X2GGJZp9sdFfXUVcUR7rmQK8k9thNonsoUbbF6bmzM17TEnNBL9vho9saCi1ryQntfzNQfoWq8N8chMkV7U",
  "key35": "2cM9vA4kiC1KAAPbaDgSGWviGSrVrhguqSG2xmV7rhKuBxbKSfKC2aZvRovThNLq95B5hZ4ChqbFaDC5oxZiXkkM",
  "key36": "3pNW13Ed4i1VKYrpnLRYdqybLeMFxHXFUuWsyZ9pFFx5Ru7VgHJBMymiQ7gdUwjbQMFSALRq6pGtaCHPuo6vy5Aj",
  "key37": "2QW3xVLC8byxAAbKpk7t4NTT1oD7xfgYinxQcSDqBNACBqybPBgmWWrT9N6wKJFx9b9RXv33MufNavUfLMDPvwMw",
  "key38": "RhdngJCPUN2yQZvbvJGc75gGjgjLZNvo7ELy73kzkNFFZ5JZSjcNSzmAVedXfGQmt8szo91DJcvJn1DxsaSfePJ",
  "key39": "4EydAsE8e7MRD5CihkhN16pxeAbx3DCPeLaC29G2BMWcnDMdcj5YX78BjnS75Fh2MnmVZd59MEnAJfnhi3HTw7tf",
  "key40": "21uEhg1kp8AdbtutM7zLRmccJfmwy4bdE2fqZxP7CwkkrEDMCjAr823iC9tjiZ3NNnJffTk5GH3raXkWKKDogn8H",
  "key41": "2ArWJ231AUyKLpNxeqaWKz7MFSB7HGZhFQMg8De9QXjcsY4Rde2X7jM2EULasHG9iAVNed3sZunP4nbGWLogQLPy",
  "key42": "3SBotipZt9KbPstY8W53EvRWhLRe7SKvwzDSBdXq6zAfzxH7xWXmczv5qsx9CkCAFiHzCK1BaKuoyQv6ujyHmHok",
  "key43": "4ZMqfJzjawi1TPThGRjuL7SWQPAXGyDgv2L4u2tHVhaZR1FwiLZo6mhhyeQ3jBPNfQ1Vf9xWMZZEdmJyryQSMgHL",
  "key44": "7zF5xnK4AWDE6kAwHozPN6Y32raDzgRW3q787Wn2hYu321utaTMz9Jt6AC8zUzEJ9zugfNpn7xaqV47NCgsAsjV",
  "key45": "5CMuYZnken3W7vUFGRJKtexEE4TMww9ZuXdKrZfDQ3SVndtzzuS4M6as9QV1fw468cV6GjsVTuu9HdvjFppwFQbN",
  "key46": "2xK9YuTLM3R83jann9eXW2zcAVdZC2b9oLDf1UF8FzxxUF6TNqBAYcnMPJ3qJUKTwMvjN4Tqs96DfzMnzh3B5unp",
  "key47": "2JzqHhbWw91LFcMoE7S24UPMYwoHGpCZGTrKGvG6Z5jr3HuSHFPbXusghYM2CKUiHzAEx6PkJVZhDVijompSrsbx",
  "key48": "WTfoqWDoYETUp1Z1grgJvYh2gpmgaRD3HZtujWACV9xQTvTWYeMUJ3qmRrYPJeQonvY4keRbPHv6F7F3AAkixH4"
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
