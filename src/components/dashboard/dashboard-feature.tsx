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
    "2uWdfJ1TvZaVawBfcukFREbJe6WxXYAgHrwcjiUJJUT5UXXURnkuWnjNXwQztAG7SgtkX6kqb7hGywc2mgsLYwgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43b3hevzh6FbLyweXGH8QAKcAxgT7THbXZ6MWrb4yD2sGSwkqwevmGSoHGDdai3M6Q8uoE9Z9pnWuyfDAsbWqx3b",
  "key1": "5kRiPYcy4BorBRUSuSr4xjYbWmig83mykmiqgmQuuQeWyvQdSwgXT1i97jaN3pTepC3mtyVo6LzCxzNZDUM3uqmT",
  "key2": "3uQezo18c9fSo42VvNGrUqqz1wcNnwjPHkeJc81AN3F7iJ1pFjaGmHMMvRF8BV8kgM4YArh68yVyDpdbcnCDfDbU",
  "key3": "5Kc2Q8nijpa6inXCnHQMsMkoLDs3i6ZK4FJe8cPBj9xhCgU427PZRgYDWNh5oEqAXbhtTUG6amT3B2KsAUxAE6rq",
  "key4": "5XKDbEXJVWMjVjgUa91STCRPfRTD8UFTadARNmZx1RwhhM8mXj3E1adjEpGT4tkoDY6TxdDCiB4gw9RBm6PE2Q2",
  "key5": "31vW9864EuWkEWKcwHoRgKuSksXjUMyQDvb282RKUSETbzCQk5vU1YaP9d7GHtemy9MVzBTJsLMUcHnozuNjCff9",
  "key6": "4547zPRcb9MSPX7G5bdFVmW2w5VDHaZQKRWByj81HZuTVjJb9TvqYcQsrFa2D6T8U4Sei3fvAJ3VqHokCLDFskk3",
  "key7": "w2QoyegTyFdzEZrNseRFndHcDAJGuhAcuaVXAM2cACRnXxErdWwuzq9aM4GrhWTXvnwUd7XcAWcGGc6HrXpnXNA",
  "key8": "4yhXmQUKno4cYQdQArsoBM22ad5VxnaBw1MUmEhfTVzZEJqbhH6X1nwy5A4YpJDMmn3MCE3UCiXXoupf52kK1MEo",
  "key9": "3kevrfCQ6SmqoV2HcL1ReK3ApQvncDuTk7NSLXoCipgnEAQ9v2WzJ6wHQm2etu6zac3D4vpQuq3XcNjfpSRHN42P",
  "key10": "4yoMqzuYPQJpUphmMuqLXyjx591fHv1NvNZXVugNnETXovGm1uZYPpBLMbLgxrurNPGwVz3YGtEgXjzUxVi9hzaC",
  "key11": "2d8CbnDLbvP4SCDatPaAgRMonrduMQhpXFNdJXUfREbSyxUuw8YSMhaXdAgF2qRQekoA9nXkoHZ6mjdpsZcSgJ3Z",
  "key12": "43MxV1HUBvkPP3voQP79v5nTiFuS1SXN6epuwo7c8YmVrBbN3TuwBFaqfY2NNdDbXC3DG8txGR7f1hormin5mktC",
  "key13": "2Ae8qprzgWaChQydJtW1JEzY3pzngi4bzRgmoUESdtThLoMAcjpvNL7uALquQpLMwdCNbLAv6PThuYNrbEmjv17U",
  "key14": "yh1HcW9xxdeNGWRDc5sd3gsuYGrXkjTLKXeNqckkpBZP1RP5V2tkfGdtUJ73PhXjcpJRdZPc8UaVUiVfWBPekW3",
  "key15": "3L1znRMoPcCwegVA5v1MMjfxDf1cYGw5H7L7PiPbVBYULPm7E4vsknnBuBf4uXbZTPpMYdrKQCEsSTMvB8CyJCFK",
  "key16": "54s8MQWyP3qJaUBYQMGpL5SoBy2BLrbrQG1SoaGrZESvMHdaqrz9GPjNMc642PM2EN2h6hHBSpiJobsEMewnMNMF",
  "key17": "4nwesjAwsVemoXZQE668cqXTFBiNPnQpwBsNTFpo5KrbtaxnfNhXQDwuXKkPppxuCh4Diw5XZjjSEeczUT2wFWtb",
  "key18": "3oEDPrJArSoUhDfA4xBLFaceRGAHJLM1pTE5Xy6fMZwXTYJnLVFjHKmQWRjEr6nN7GpZgK6WmCmCbs547FkD7W6F",
  "key19": "5H1C2rMJRjRG5eB3fR8gvNzW6i3zUmALPh4o2t6uQh6i9q9XnkpcyM5FWY2nJAjjtq2D8rCasJEdqiwnLV2X6uKs",
  "key20": "VjgiS9Q61SSm3WAmaNjrzBZni3NeSQbDKiRJa7jFuzawDvvBF86vpN8JH1KzwanJtdAxaSrxrohKa4ZHmA9Doae",
  "key21": "2i3tL8KAsfPoUXiSZutFzcReHWyPeT58VhTKv8Mmxf3Q1V1pfUy91jJ6qxuxN5ECoZ879tHokJopUrsYt4A3YMwQ",
  "key22": "ZRBsHxtKBffXUU7htrCsc33QRSFK7FDj8Q7nBLHXx5K5kQe6E3eWpoh3gB3s956jxoXJYeGTfcF9fmmnMGkzw4T",
  "key23": "65u65LPGwhcpUhoucNwt4Q46EkkibZMQoCGXM2aZ9RyRfb1SSsTJaynf9mSMrUmFfSkeX4AH5pQa9qRtt2VaRB91",
  "key24": "4SKkhMHQYG6Ur6HN7m4bCS8QFN2LKRVytDVBqhTqGvFyaK6MBM7GJgD9y2LBhQt81EcZcChLKxzJRKfowJnCN5Fs",
  "key25": "3DDdBfngieJBnN4aNjwzKHvjW9ySF5ZBjYkvgGxGu2akmSNHKgjGwYruqaWMp2x3eH1GuAExaNNQuSgSkLqBs4Qf",
  "key26": "gknPg2oMgzBda8Zh5nZ1D3zbmoRmRMBMEmAH1icRfHaHYjAou6PDxHXhNm1siDAuyqy13ubHMkb1T8BupkGhuwR",
  "key27": "26Nj935oSc2JSXLC84PjYMy7RD9y8nMb3d1TTyqgFqZ9mHgc8BPbwYQB4nT6hWaeb6c7bN7fKkLztwBeJKXTXXWn",
  "key28": "4DjUykxWbEATJ23WzHhzfvh7W6L78HC3gXdvQo7kauDSG7vHVDn9ooMqLHbkHddWB1CtEBbvECz1o9z7th6xbJ4S",
  "key29": "hZB8sAbKHUX7VnUZ9WwFkKw7atXQrs6sEtcfMNSDMQeYe5xjbNbP2JHNKnKGbutZao1YBsM2YbeKbrAXQ9iNuRA",
  "key30": "4BLcDMCSBKgZn5nzUQZXEoiiGUFGoj4AA3QLWd2BpzuWhTEgDWpL3ZTbnCF1rvjtg7BqCQbpL976F3uo886kh62h",
  "key31": "4Vv6buJDs8BpZFLUhjSnrK6UQMFSeqwECySSSPUjXH91j5APnJDXFLM68bwfpiGqJDw3HrGEZxuVZomgTqQQj8oo",
  "key32": "59AxHF98ZuRGqWqtYgj16s6zNm4GTFZeKuAKxPBCjJ65v5Pkv8AxKEZWWkDhASPyfzmQichQTR5cNc9Ci5w67tvW",
  "key33": "4Pp2RHpm66jovEGNyVH8n4AmP157epdmUtmJwaM69GBDazFv2eAS2eDeLvbAk9SqwLdisiFNU8iSaBbCn5DEUmG7",
  "key34": "ThiHVsMMvrPnqJgEQ765bMtpncBwrih5ng5omTwQgHEGG9M4bW89Chyuj6Us1Y6ePpfQRQTtTv4neZEUd57Cjsv",
  "key35": "JpM5LJupsp1KkuaTcFFW4aTMEH8bi8E6Z5faP8Xg77DvYosQfXr6jGxMXfLWEEtWgoZQBvWDHFtwxktoUWqG9mW",
  "key36": "iDKB6eq7f2PKbrkZGRLY7LXNvFetEW8xPYqPLBWwu3vfmSBDzCUmZzSvxQxymwes6G4vM5gRRJNrU51oMHWsBQS",
  "key37": "3VCRW7mGXqBsJbedgxA6pCAnpn6sHwyMGKBRhZFj3ocwNQNvTfQSHXLmJ341WfM5AD8zd5WvzDUTnezxsrt8jRBa",
  "key38": "2gwpPhSZxoZFemh25N6gwDaCQMXbeCZcuBzf3a3h7EyC51AMtN8YNYWQn5YfmxcY2tjs4iiESqSctZfTT7TC9SPf",
  "key39": "47iHNDsjezrSHzgVVGSQAcDs57H1RZB317obRFGc3VVFQPtAepcYEjQqFdJKKVCPEo86zhxnr3NnzRcLkK4krjGH",
  "key40": "395hF1ze6wKLn72xBenV5vJHKhtosFskW8Z5cMwUd1wgLktYSgiKtWsuEADh4cJwaWW5c1uEzaHTyHMwAZNzKw4G",
  "key41": "4gqGsLfR4HgMMA8Do4JB3Bvn41NuuwSdg1gEyTMYcFkxp8aWXvYP7UtNGKouRivp5ngDpd4q1QNrJEDvBDb6dAW2",
  "key42": "63CgfzF9wKBcciJ1cFnj72ovVKfAHbQ12xEBaLqA2ZjDarx73aYgCouqZkt3jUT9uVp8Gmv94a4W2PBCRML2UL8o",
  "key43": "21h6HFHFBmuEMHY1rwY8SVytqZKTHjuti2SvmySNUuFUyg53v3ErjDqUtgsHE4JgUYJzAo1EAnD1abWTLDontBJc",
  "key44": "2gBFXWFeLMv1wGnTaQWRcV3cmxacbNWeV7Zv9fqqaKSdrawHb6yz6kaUWvTo3VDPzStaYJ6paQ1GHJkr1C7oWmPc",
  "key45": "B6TAL1zmwx5dZdV21F2Q5GeRKp7d1Tjg5b9tvBqTqwa1uLK9L2tGwy5sqgbQbW6mwc8n3HBDvDdfL81Rf2HysXg",
  "key46": "2z7zj6wXx3xx3GqavLipyzMRgmgULvKqR9YgszhUCoEfdeLs9Tmtk5fVA3WqTt2SECQFvfoQKuabRBsFHYgrEcdn",
  "key47": "iqVzBnZrsYtVgoV9XeEZtXKHAGHe5JiZUJNsHWY6MNDw5QpqQYVYNb6n6tns819b4oJ9iBUJrgnzk3KbaumS2JP",
  "key48": "5aT6ieKqrrCm1f48Qifqmxes7GfM3itmJzSA2CAnbeMDiRzhQPskMx89nn3FUvezuPSsHK1gtMK711fkPvHsJPrT"
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
