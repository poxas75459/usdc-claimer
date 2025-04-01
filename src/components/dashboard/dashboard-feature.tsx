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
    "5KgtspzAKyxcC7piYNYk5YsvH7Sm4rkPXoMT3Avz9wRT8oECJ4JeiQQgz6UP2GDvebA8CVrYQViycNWxDDz32XZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZXgcvLtnCv33JE4BkegtWwCguu9Tar3RFWLmdB22s23oQMx9BSThJzJgNkFLrEUQepCPQWRF83Z3GFAcsXDPCG",
  "key1": "38mfPmEZiHhAriB9wa774Wyz1X4FKK7nWFGodnyEnTa6QDTtQQcCQuhR9ey6Hkzz4m8HbUwA49NjbqA1LUpHehjp",
  "key2": "4mEN5u8JXSafHK38bU7rw6VjpAsPfm18S1JtJ3iVq833MmHV8NjpiAaGaRB2D2bKt3d5PuiEWe1ZzP83ZDUKZYp4",
  "key3": "569PAt7YHVsASZsEAaMJn4qgwi14221qv1wuDcmKoi3Ytux7XqygfMMZ8SVXrbwhLeCY2m2rAjms6bi25UfSwMiV",
  "key4": "5fhaa7efUoZ5NDQQYxBHmKBgutsQrGMEpQw6Mpsbk299L9gYiawaGQYLv5YvbiFaubiPA3toCNaSbfEsymbYGxrm",
  "key5": "3fQznesHrTqJ5VZ8vC46PEkAejGZ6Akzny77dHf8YGgX2T24X9ToyYLz75mEc5eJ1Q2JCq2RfxHZG1icS1dXfxFH",
  "key6": "3KtcxUd9whv71sPPVY8BcFwmaDt6bn1nfaVRNxDqSeE9cK4ncsdrSpGyAuDjUaMcbwsNgctnLXQ5LfvdZSADfz3",
  "key7": "WSsvorgZ1UB33baqUVf7EZiFxkJrMjrbq14bMX6VuGdmwzUoGcASGUBCvKmhRcQJiiUsUfJfUBZLvpSLQsx5huz",
  "key8": "2SY4AinqRqiDkZjve5deZKM8VNbPeK79WLdpzrR6GuMyBTAx4pstWf2Rx8DQSzrvi1wbpt4ZPsqKkMacupeqseZo",
  "key9": "2oMh7ZYWr8GAuxbi2jAUPg8368h2z5u5Gz1aF2FeaqcZBn4dNGpbLFfoNi9HETjhN1bM7ixqfH19uYvif64e62RD",
  "key10": "efpvsGSUZmkuxDobtgDrVL1jryLufzXtse7ExtY8uwRK9gJ5ZQ6df7QmmbwpuSuXuh4aWyuCLDVt4KPAaRiMsAW",
  "key11": "49zVJTC19am9DXBkB5zxkRHpT1Qn9VdNc8deoePdG48HKAzuCfFEQWmh1m9tirRz8vRvcgVeaEKvqURirAxzgj3M",
  "key12": "3iDQw1CiptZdvAki6B1feBsxJBfSfnvLwuHXX4tQSiWdKGLTon7276PVY14eVab7rVJdHRHwQQnyUs64euh2SJV9",
  "key13": "3J8SLzaMTyUxK8MzFMjC9X1H47Fjja1C9fDzXNin83yyE6ZuokDxCtNArtp3VVa7jo8BDLcP3PR4DiFH13S92vZh",
  "key14": "2TYZcop7tHL4zKc6CxWW4hhxmEyGTRJp2ZXjc3ieySbRoLP4hdMGEF5uhrszLWmMonghx55RYhMo1MZMqAqRcegr",
  "key15": "36pbLAjANUSuYbX1TsbaAiobBqst9nWBhX218mpCLXqPvLo19SQBFoZzPkhMRpnXCpSQ54MtV5Zigpa7z7VYZp7w",
  "key16": "3GDVgRogTkE7zur9Hp3gesCg1AM6sHyE5pD1LCJeq3p7vuZnWHSh8RELcUZk6LcW37CE9GSmKi4qrZFnFtx3GhKC",
  "key17": "3SyegxZuqxZeVwUFHhPDFpKpkkSCwN6cdedf8ThS9oeWU85Ezov86PmAJwXDZ6zDSyvbc7MkCNfN7XzRTj5B473a",
  "key18": "3Gh3MiNKAZsfjnGk8VKVeRngHynESVmZCPtJy2yAsPs2nsgNTj8i1MKrUzGpT6ZZZmoC3HYVDFuoKXzHnHFYPS3L",
  "key19": "36j1gS6SavwfAqqy83DQrEJFoyRoSQwaVTJ9gkoAVAkojHv7XWtChhQPWjPnFRroZhPHyfs8xZjMKN3MmAuSFydY",
  "key20": "5CXuAaqycDrcWJ52fzrtmos5Xj3PeqpcwUp51773PTF7rMfxa6yiAi6K4351wY8WqX3zB6MHXXgR9gnmavHUmfUB",
  "key21": "5hBVXuibS4iWJLywEXqrLKT7W9upvYDSinoD4nKJPQb2e94729TmS15YgnAN6f4bLwZ6QREd9vTogh9AmmMhZpfU",
  "key22": "2YrhYzCurnbTZUpmhNSmP2H5MPppsw6J1w4tWnDPDggK7NmPMvtEJEkFDyyHhkakknn2kBKuyRLdw3EyheTYxAMv",
  "key23": "BvDUXUrcjcMgG11UAGkL4x1Bmn6CH7U1nAiZ1TY6eoUdapGvn2GCCFHPe1PbmFnCK926cXw9E1sB7Beuux67Vta",
  "key24": "NU18GcgcDpar75TPvwPsupZWGSp39HMDE78VAhFGmCx9e4iaEJam4dzwGsZJLJZU9SQothRoUDAzFcYgXWYa6zf",
  "key25": "4CxZ1CT8aibt5ipwjYDaAtwHzR87gA91GKjoR6iGfcjbfFFNd2WiaA6qD3jR6FSUfe9L2Dta8PakjA7PePjoe8fa",
  "key26": "3AS71q6kQuUNsJBgctLbM3XXsdaXn9YTPcgJqRu6xVyQdkX3qFgRpiTSBm5jkw3kHJgP23A6swmc55KXx2qEz6Km",
  "key27": "4tY8xBMEKEhu19nERZVs4jCXMRF1nBXDVAGzcxVezbshPgmLkWe6YM9wXZWcsoLqc6bcpJbT7s4xB2LAXhwU7uE2",
  "key28": "44xe4pErZ8m6CyqPSouJ1yJmtjryFgjqq7byfHh6qcaWeZjtLcwKCcbGg9DGUHPMtw1R8z7aYAiuyBgBB3XAMjs",
  "key29": "2BJX8EkeZexPpNABXWfRcNuf5ZBZwRM3uiGqLBjrEtNUasttJ8Vtp2fUmDJfQKnR4HwF2XaJwtNV4WeuxFkVk6wM",
  "key30": "2jnHrjyqvFQ7MvyFCMTBsmGy1XmDmZx4xtVbnFtcJXnRSrk83WhuPBfRB8hY1AnmgRtHded5MmeGavTYHxmemxzt",
  "key31": "5btN8ZTq31zJMhtJkyPqLyBfTXvXhuoLfHwvczniwzE2ayaD5gopdSxPGfrb9vD1Eks1QxqoQ4e6C922tvb32Ex1",
  "key32": "5k7jLRAA6Wp2SDPd7B9GcQDVjynEtzEMmhefQeaEnL2pKkGwJrHxzznp6Ceof5ZGYoifxJZtXmyspMWQsPBcwCgm",
  "key33": "4M5LrBYUoPgTwrYNp7dDRqdxg39x9FWRo95zdY4a2uYRbq9RTnmHZi2mWLeoo347zVjgRscUxEB9FBsR97xfiFwQ",
  "key34": "Jw6cgiye4nhEwHusJYCG8xKuYcA5U535sFkFo4rwYEN3mrgWvzBen6opjdnvR3hw6t1kYF28Y1dz3Di69RU4TCP",
  "key35": "4YW64iUwBL1vv6PZfFVdcBhZpQN7GW7x9wx73kim9ZD4jWBJdjaPw7vMhwepTCqnbKhXu58ZSZC8LLbB9Rqijp5L",
  "key36": "yBUB7ShLf316jbBHe1zmDb8av3hzCGmxUHyUFWyAjia7ex4uTK4WEcfoSeMVWdC8SYsggpL4XrgtAZazbBeBLnX",
  "key37": "2GPHuxKo4SjVAZVHBaEKVe5qZ53iKeD518w8h3nPK1eCCB6adXbsfsTUQmGtPgduSERVx1YG5VNRQtu196cauRRt",
  "key38": "3kNE34jWS6Ltvq12bCrowyzxWcGJZhr67JQhx8Dy8KUVMUQrpZR74G8dvNBnBYVTYrVwKgooQSXcQQX1Uy8VB2pZ",
  "key39": "AciJx1p9Sg1TvCafopywzwEdw9usir22LFQzTCEiE4KJarwMvCXhBoJRGmp3FSQTH6SqvBk3jzmzAfJYPJrQEo5",
  "key40": "2o1cgjQNSqRGJiqkyJiM8UcDoMZMbp71jhh2rhvT2p6MhUDi4JyEYxhzRqzE1ZQzjev6JnN6ttPMTcPv5bXWM38F",
  "key41": "3AqBLztpXag9qG38ivg7GoroLfLYCQmUL3YJyRWrWdEvPx8N3in38FcRUy2xxXLgqaMPofNiNRNpnqEzLuH3BfN4",
  "key42": "5HisxrM3PxaUjQfYqCzbKX15R8iJkkpChaBwX6FNzB68PSzS34qzA2nnmLFwFyYKn85gDMSg2ZCqL3vCmmWjJYDc",
  "key43": "3hLHE9aa25N8pffwjmC1zU4kmqJ5kST72qyMnEHNiRPRLWdz4hRRhcU1LEDDdgmJWTJ9Dez9TSmTUAt9FUZARvVT"
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
