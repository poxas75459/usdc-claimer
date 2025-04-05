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
    "4vN5U9VKjvD3kcb5KZjiaoAYB6vs4hWNwQEh16TQH49tsLwqfLJKw9rcbJYFMdtUqhUHLpLxavExLxW8aFDXrQSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5ejBHr5ESPuBnbExKR1YY8eJkkcDfwCfqdoJ4cMDbaFhtTDdXFy2VT6eEfkwXjKUcENq82hfELo5g7SqPH8DjR",
  "key1": "3iwScxpmiKfRe4cNdvMCfJLpUN5fgkSTRF5iQErAt8zwJMLVydb1i9y85DYB45riSv7gx4cE5JpP2KsTwsVbjMYK",
  "key2": "3BLVMykKPcDpXeGKedz8mf6L23WVNtsCFqtAP519hYtj8rmDZ8xEuTN4hGwLMi2tK7F9LXmPo1Fy55XFDpgzxpdy",
  "key3": "gpCzqijpotqXyX7gFWZLuX1XqTdRxcPLCWrPcMVStmeq9j9m9GiEhfg5SXaCLHDzGCtxeUWfrxYy5iwwMXsysDQ",
  "key4": "TTdS2oGmh2mGsXSByNzCeeB7ggeXM9ENpxoXo9ti793EHE47Rwv3k79Z3XxWEEdV3EQ2BmyShg5W3rp7C1sVRb1",
  "key5": "Q2BxMjAJCkK4J35eWTUUtHmMFGWq3YJyzmicdRQpAGE3Nx6HvXu6FKnk1eZnTQKopJR8LC63tLWEuP9nmhrhpnc",
  "key6": "3Esm9ufYCfMzdgC7DG8NT7xPjQ9a84S9ijQFtYHAsGBzKfb8LyHjKUBFSwrPCmc8ZAjXvQwzXzNSHroxJzK11JiT",
  "key7": "4q2S7x1dM3Xhw8PfhDAADL3hio94nxKKFeYUkZrDWjShARtNeQvpvV3vj9LRbfMffhvQwiqu23KvezxnS95Hc7h6",
  "key8": "4UiCpmYrnCU4ucQ4WgyJhY49RDXSxVN7RN4BmgBFxooGwPKG5zVFrEKG3bjHwq8eb1HiG4idckmtApwrc6WAtNfB",
  "key9": "2rSsrLhiwXXcoSktixXDaFbTS2yNAnidPjmRi1ixJUxpHEdQL3Lm1Ept65Y9RE4QedaJmBv67ugUz1KhiYCKje9p",
  "key10": "64kp3BndQetRrA9QpLVFCs72FdZEr3FQxDNmhR5d5PgBxyqWmGzjo1QqgqBpdei5aquD88W97diru8odgSgMt921",
  "key11": "oCmTEgAX9KVoGwoe7FViAyQ5Riaan3YiotrRQ94ircyeh71M7WqLsVm9XeCouuBdt9wjc9ufg28d8ghbe8EYoag",
  "key12": "2FAjMMgKD7r7Bx6X2xiMyBEemL6aueNEi9DKhyvNeHd5s44RTKBU8Ft5keKpS35BvNAWJwPkJyt92CCtKyxaJthv",
  "key13": "5qhd46g1NbaktaqLEiRQbxGEmtu5HnUcqfm6j4zM2dQBk768YkQumTsk2GQLwroJZqPzv5T9CnzEhnLooN1kRyTK",
  "key14": "2s8GuXdTTEnDQMDtRaXrYYe2tZtLXxSyEUCzozYat9hNAtUptvU8PjnVMtZGWABt7pJsgeK8jygkcK8Tebo1SaWm",
  "key15": "42FxmDJTeEwzyyFxA1JHzFWob4hykjg7qwCfUZASbNVi9rBtwkYGjQNCzQCWH9ncXYQHG5XKMKSDZLhvq53Pemv4",
  "key16": "2gjjPdEbEd9H5SDgMwpsApXewXateySpcvSgiiuj2y6eozpwebmxK7RMy8PtuUmx7NqV6mCxacpkRh3trcLySfj6",
  "key17": "NSZ9xSpwcV2R9uMnvzQooLszSxqxkNKbYSAow7Ffys5xmdvbZfMjxvCWRhPupJiWdFM6TpEsXvWyuQUdwMScNhj",
  "key18": "2DW8d1rLjoaVYdyRqMd1NHc8q1S5AamZAXB7D78kUhfpYhTNWp14FCXnNt14D2iAaBR8HqidRBcdQRJVpFx49b3Y",
  "key19": "4cLeVPqfN9LxsHywmqQikqYYC75mcnFXWa2ERw98sJYRCGEuYBDwe6eqAr2XRgJgjfHqxkgW14xZZknhncsrfyYd",
  "key20": "3PBzgnYHX46yujVRvjQ8eW7BRLwno3mjm15iZoUvnEGmH519ogCLceoyk92Tz9gJTvjjKkGG11EcbsgVbZvkL6Cs",
  "key21": "3qErvH6PonumMef9nWhc31N6ctmSxWw8oFeR65ESspCcmPZh7hzKMRuStNqZA2zJ6xmvggJK7PhV25sBKpwmHwZk",
  "key22": "4VUQmwc9Z1GqeXUAdG6Gxg8YJQU6SMLxwtLZfDqvuchGtqxsFwcVdMDBxqytU7EwPp8PU31kxq48AfKbrUVrCq8x",
  "key23": "A2VmokYU9NgZy9pZT5ga1Nthb2UEFeq8JgdoX6Wg8U5ZkQTB8fQoHQJ4Drzt9ovg7Rb3KiDysvPVs7oWo4Bf4ZF",
  "key24": "58mTsAx8ehxzCPdusqZKTSSMvLc3iYxgJQYd43Mku7uRPFANUwWeHNJEb78U2R74cyfmPwAGUDrtdNEebxV4wS37",
  "key25": "3k1ANbc7J8UA6juXeJfW6XWnE8y7tKckY2tCEhR67MSuD6MVoFUUgfqgUGEbvGnUvgw4aHNHtvUnQ6ewfpwbudTv",
  "key26": "wbRHmuQVSJAHoruswiFcCCjFGiC8WWPvxGWRucJzK4RTcqMNQA1jbRs6RJCUBtgyfRJ2WUnPquMfxgYQX2evnyE",
  "key27": "3Kn3Y5CCP6puLzVqW2zUTgFfg4izSctjTXBDobnwDFCSBxnLY18NLXzSH2nw9NHgYvDGau7gXcezDnee7FfKSWhh",
  "key28": "4J1855C3iPHYak2rxaHwCL1NJMLAGDATFs3ZghgCKkFgVLAE5Ss5UgkyvphG9mRspQiHCjDJ2RQ8FcmFpMkUMCEo",
  "key29": "31TSo4e3CaCFqDz1nymTW6HVXnPgFehaSdVJBur3ruEbPksJRXNQwrUgsyDWxFXF6Ab55TXPfqJWUg7zG4wHs7vC",
  "key30": "2sCXL3vRwzaYVmE6EdTsF4b8qyfCKy714UwUPBgB1of2BSTfnqi5yMaLLUbLT9oD9T2qTaC4tumkSTHLGbaxJCYZ",
  "key31": "XnUg7FC7VoLvQyCerbwdJy3NUs7MYpAPehLMPU3HnLbtoW2p79dfXPKhNZumbLZp1GZu63UfRewLRgctRj685UN",
  "key32": "5FbyNuxmx7qVpPSk5ajZcGJrKwhPvwKa2RcnY4vrpnkPjkLo4ANsWzg9dKXDKA1F9t58nJh3pgMBWqSRvdgkQWue",
  "key33": "22gaDADPsJ1F6NBfnnWHETyYHN23AEXUHrWUK7zitYzgS8NT2VPmcE4wL9QGXRchF6YHWKtvtxwEKvLM7jQ15fYd",
  "key34": "2fmDPKoyKuCT1L4GbiKPqLjnbpS5soMF2fo3D9bdxBUU3P88F4wZSJy3bgz5jDyxt9Kbg8n2eWWDfiBhsbun5k2S",
  "key35": "2rBhpUdN1wV3sUsTJUimhcyUi9N5J7P1syovQvQWEVTsWt6BmYJQJWxjSefG3y1bCY8MCtDwut37HVmXZzuZBuX",
  "key36": "5DP4yZ4BgNuwKt4jMgHeBHxxJKZcNtQGH9QBn8SZSvERWw7j7fb57zhWwEAjHVtDdmmbFqMxsb5XeaaqhgVzgpo7",
  "key37": "41bVNtDvRGjbNAGnsUnuoWfjeTQguu1PJLSuhckrJuPBbvUjtubEwrsLGULtB5wY4xUzrR1WZEoL8byNcfqir1MZ"
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
