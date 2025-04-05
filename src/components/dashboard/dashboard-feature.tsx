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
    "MLRXVKxbW2DVpCpggkgLq6JCgCkmTw5MHHYEWyr3W8EGtwSNZDDGWRhRwiYTTx4etuR8sZYsBUrwcB8zvctDP64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDyhmq3KBHxvsV4Q4d3yfrdXLJXTYNzHFsGg38HUcMCmBnoTyjzwwY6fap6dSMTYyCmRcHoivU4feTsJFkg34pz",
  "key1": "293rjEuHvC3HdoaUhbz3N3dL3aiELLTiqnFRb3Q8ufyUcW6bPHKRdaSnk79p3yUBAspt45hYNYHsrY8avhrC8rrk",
  "key2": "5YGeWkevDbtPy8t2ttn95hSyUH6u48Em5EuDhJkb2nyxDMTPm8N2qW3pL4CK29rbFE5MSrEGnBvioGocZGcPMo81",
  "key3": "43ZTHajhjXxK4xbL5EmbwYUQcGrX7jkXDuNdKx5TPHVySABBQdjvwCkUjuPFW8og5xQzvivPVSdGC84CXqpDQjqb",
  "key4": "2vaXqJKq5qS5ZS4q42qNwbBubccw9bnRAmTFd6DXpb7cV3TFo8Ta47qDMFfxQ3b6v3jhckEQEfy8zbQnFXqgwr18",
  "key5": "3A34QKmKKmhQ61TuQW7gvkq2me5Cs8BB2vVHShfkXo5iEC2ySE18Fn1ki6BUvT35qnmZw8QkeBG8qQB864AD1QfA",
  "key6": "3g9QqbF3PLu9GpV6TsnRbMBxhsKHBk4nGU6VmSrTZnWSyH1DgCurtQjKwunHWsjnu1H7xxVmSsPEHnNdHRqR3mRc",
  "key7": "2evJKftYyjeF7Qqhd9ndZoYRJT19h8bxP7Rn4qRYWnahfvhSoNoCvyvxmhmCVwnSRLa9DLgNqFCRxKb363fL1XnH",
  "key8": "4YV99Uuq7HNmbWVfdDob68BNzHGuwDtrvSFcVhyeQUYQHMpuC4jqQKPKuQsMc4oBakfUYis3ZNB66z7VJc8yHuQY",
  "key9": "57PA7vuqd9D4UjES2AYhtLZ6WzSxZRvdRUw8hqBfbciDwpPXcDJm4pX6WzGu8L6tcoot4qe28HLJCVxVfpsGscuv",
  "key10": "4VoPyqxeEWJecPg84pPo3FcRy2EJk8SSpHhqacMEptzYGyyuN2K8xy3rz1bbxnFZcbGujD7T1TSeTCrjY6M7PysN",
  "key11": "3Wb1eK3VTvJqcTKoxnuZQ2KuPe2EhSsxYLW3xsKPcbC7QmKfghCLhyaKi867oty5dy8cXZnPuHiFmZqNtdidtARn",
  "key12": "Kwznq7ePskNvyu1NnhShHVnwdEXuAWGAcMcxJkcHWAUTWaXKEzURPnaXGoQZGVdZHKr3tJxVLVDnNhMWdHirSZT",
  "key13": "svb5GYb3RPr6j7g7Df29rEL6EHpapeLkqf8eztWcavXyN7aoWavZMcnmtFFwG465NiJP4mZufXTK9rnhhh9EcY6",
  "key14": "3B3LnMpZGK2PcpoUWYrxgKUA8TMhuXwzq75QKRqV1isd5tqtc7NQ4mHBn6wcCecNYveDzgLSXeUYktFMbzAEGSbC",
  "key15": "3tgzyk58XecQCwHfv95cGkSniYDCVyCfytcc1viYqi2B6hvWqvHxDZVpUv6TmZaCakjMwYNo36HgK3oyrJyi3Uxj",
  "key16": "3CkUKSSHVC5ZiSTNRMkLSp1f85QX31R6jQxdA9tN4ctYyi54JMPVJnvs4Z1m1pTFS1vW6eCcsaMXkEXpDcin5wgh",
  "key17": "3vfKKENm8gdf5hFocJBJ2Y695otVWT1AZR6PaUPZAGj93mHUWRhDJQk7q2dfTXL73v3vM2DczwuANtzvwU88xD8x",
  "key18": "5QKUFGNLGX4CFZufrD8FEQqbjGqEMn5qRo2MzEKuL9S1suAoqd54Ty54BidKU6dVgvNiAZBxRNPCEzk8oiURnPJF",
  "key19": "4N7Hr14YpLhvR9os2eUwwsf69Eexk7fwJ8N3FJwC4KYEJecWtmafZtjxZeAp6RPiKxStnzmfQ81M3AfULtCL58nr",
  "key20": "4G7zAMUwWvK182pXynUL4Dzata4sYfidx62o1Jj7no9VwfCBiyMtqx7JrauvjHRvMg5NbwurMh83NbwACzKEVbdw",
  "key21": "5yzrDzYbjFXEBAePexC7fAZpEMtdBXRsQZfbrecVLYouxcryAwgkMwMjmZt8M28n57yUFKDknNj2JoWDhupZcQ73",
  "key22": "4qAQNpQY8iDYmhtHBHBevqsAwwXRqJPrwWW51x2oxso4UNUGS2oEqcgbkdLh5C9kJV12jM6tgADXUKrioj9BKYKS",
  "key23": "5WbSFsiqcy81GJNqbHk9H5teDTudYPRNqmjJbVQdqodfBW7XErJPe3fCk381f6cvy9t52YKu78eChWLfBCewj1vn",
  "key24": "3TXT4h9i4LwtxGfwPLhZAGxM2j9S9xXYNnR8JGL9m3uRr9RfQGCU8rE5yWiWf5fzMcNncdtUj165B6fBHquNbuDf",
  "key25": "sU9csh87LjwaH33UmKc1YBDAfBp8y3DqoeUJmkauG79tMEo6DvzvYaFLghU3q7AFzZNyA4kgeHeqpKrps6rgPz3",
  "key26": "3DQVvaYvRuLrsUgq3BHjktLRq3eC8Axi9e6YtZXoPgPi4km7zgyxZqWE2FYBdaE4QVFFnKbcX53jbv74kETDoQQP",
  "key27": "3zJTP7b9qoaStxBFJhmBXYZWGw7ZktvNu3YKoJZ8JFPRmKULGwPt9dxum7ftZfWsEE3d1EikDcQUXDq4WF45j7CS",
  "key28": "3DJLzsZoC4C9vhjKMDXQsRHzsDmjGYyqZVMeavLuvuZwvtaTMKfuXNbGsucJum51bq6N6hMhZejapAwYhKfVFGoL",
  "key29": "ZDEJLgo552NCVbrQMw1HEx89p9HoH5TmdsinJvtgp9JyiHxUBccWFSdp6LVxFk1k6Rp9Wbn4Vij1Eq8xsB3ww1N",
  "key30": "3BooQzHi1PCmgWaKx1CbEQ5CpYrLfH3d3yJpdJKkD6LsK2tkDTs3XzAXugGP7jmPxWwQbxAx9jiFrNZ2vqS6t4EK",
  "key31": "33w6HJ6ov17oAbtnu4fZrhSRKs1wihJCr8zKut4RWW1wZZuqacrtHEoW6QjPERPLdQSNUFYoU2c8PVcgeJLj7B78",
  "key32": "3MZC62bDqncrgcAxmV61KXsoujevc3XVtHMvtPzcFSChraEx8D4vNY29Rrkq8NKeybGvUypDaunKNMxDMAWJyRj",
  "key33": "A4J3z8BXwhEvt2LiUnEpvKKGuhmTQxEgw1pkUrBY72DHputmsJHaHUZAJpHadahDV18kufMJjWseobpDzaUJ3iW",
  "key34": "yvKB3PHGqmiKJUCXpwVNSFaJPqvWimJgwB95uP22s9tWHjJ4YyQQyphy9hNY42oYJ46hJCc3pBDvvHeyTNhLjHM",
  "key35": "3Fm5hqR7Gg3rki2vGRTLgaAgDLKv8482p5UyRni221owTDZPYQ8zSh9Lrjc6MhNTtRKDTw1pSCN19rgkhG1fYA3p",
  "key36": "4dcF7jC6NM9uqYZTuCd2TrkRfuoGpdJUXTM9LbDFjuN78GHmpcpVFeWrTWC5ixWHYg7RAU7qJ2NLssQz8RAAHAEt",
  "key37": "5S2DqW3ub8tD2ZnoZraSHyZByvXfhVGAwLq5aLeUs8Xoxw7bnfdpt6onATA62BvvdWYfzz3tJ62orGGHvqBV3Y54",
  "key38": "66gx1YTGoo2CcCHskbYY4E7Bs4J6em7V5KweuD4fAFfBTUV7B8tyUhppxV3PqcNLGYRL6iDvJARCCoyoDQ1S9kFW",
  "key39": "5dGHRuLAdLc4KJLwbbbntt9waotgYBsCSiFB9SyQs19A6sVRAtAoZhBohrbsRKsWhVfLREie2G7gC3pJzSr3VxxW",
  "key40": "4q8VZMwmQmkPPUezGaAHrfA871D2cvNMV9e7MxTt5acMBtQ1rBBQVu6ruNVQ3bRAE1R1TNSqbJN2RKqGHa331hcN",
  "key41": "4BWwK9nE1VJdztNX7uxDGJajCWWpSKiKYPt1YeYfBNU5to8jZWmXX16qE5TspUa2DYTmcP5Rsr6mTv5P55Fs65c6",
  "key42": "3dKFDQUwz7NxiPJWGj2cqwiaNJorz4xpBYtwwhLsoGsdCRghZz8gAkAaEbkRJHLssMTMVKZQPmx6fybABer7MJ2j",
  "key43": "5QztRF4pwpvHfZP2tkUnsoZx9bXFDxi5uPBXJk96K1KMpisdcrZDdywDTUQXz7QbXD83HqZ4bzeerYtjMoFcjpb7",
  "key44": "5rVq2taLCNeUx46vM3eYMuCF6d3eKHTkyTBdNQbHxQ2TK2HXKB4MdMfpMdLERGyr2Fvtwarb3KT5k6tMC1iYpUu1",
  "key45": "2pEEAtXCF9mwaUVbrw6T7APwdLRC8e1RM78Fh27FDswsrDaTSRmDL2gwq8JL94GgEsPKe4YYg7oRSjtGX1YwSfRz",
  "key46": "5XSKGn9q9iZjGis62ZQ6rjpzqa279VVP1ACeBQze7qQCB58rvbmH5at9hMSpVAd4sP4LLfnjeBTRjdgtY85P2cAX",
  "key47": "3CY4HdLXspRhqwgaVNr4hgx46Z47Aqpy6fcWFQDvapPVi4ZeNKGq3RSnpQqBvVtKkAjV9La8m3wMRwFaFgphj893",
  "key48": "2wQhhhZLR4j56Tzq5TzRKqqnmtt4f92nrJ3rgzkhVhHKzpA4EM8BVMf4ujPYQH7DkyarUXHpxuYnKyhG3JLi8Js3"
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
