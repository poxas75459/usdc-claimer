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
    "vckzQtMHLjScnxg2UDUD6CrYjzWPopGpvT6H5aWEBmNXC2qWrgfVR2gJzvfsFPWMkhqP2svyo45jf3exvnHqYcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v17LUDh4nR83tBLVxdEiGQPtxyJkspKsrPEBFcoa6e465AJyxswLSt7VogEigM9eGQEgySvfzfeNBoa4BxMvPiG",
  "key1": "5iQgcvQNH9YtRvYvg23gNboxeesHXCpMpjjepGoD7S7Md7FwVWA1W9M2vyinHFo8EiCyEKsUJgxriCSS11apGszX",
  "key2": "3X24tsfNyG1aj53wzgpTtos1qeMUtxQJxAC9UopxLTPZXDTqVJ5EUVQSQxp43odEn8M4WXTf8yrPsuRb77XAy7Sx",
  "key3": "3DwwSv7LHZpSvbRYHo8zaXeqiiuh8MdeCZWsaiVECSjsoXNXTejEK2tUYpFT7UQvAou1Peg4PAyLAi3z4yZHPR8n",
  "key4": "3iA6Eb7nizUEfLfETDHLGPW8nKacq8i4Ks1Tc2orvkqa3pRppQ8YkRiNtqvEej5DMSHsnZDDk9iSzZNvcoH7WpLd",
  "key5": "5QNmTrVuD9GcAzk2SbYZDmekP95FzZyqWsL8iWLCSkoEgG2b53qtYuVPhSaxKd8bBY6b5cq5FuSbGZGhApFHbGzv",
  "key6": "53SZYziDrU7LLpFzH3MtLZSy2u83md8G83U3oaNSWb1HMgcoEHCcK8iSqKmV4sAF8WREWjThZRBLJmLA959bFdfi",
  "key7": "3Sg4TQmzGs6kGNfh155m2QPjNGpFqcS913Ainr27koZwj91RvoNJiymYvYGMmmEzQRUXP1xzsu9YZsAdmECpvCzQ",
  "key8": "2Cihzdm1arYQGVss7QwZ67rWPJDokH3LFyWiVcGm8dBb8SU1KvjXjg2Q8SqaXDrXmy1mss5tJtuJPSeGVz7ggZH5",
  "key9": "378L2cJpv6gQBq1nPqLwBKpuGjuyTQAFyFk1kBkVu6sxj2sVKvZcE3kfUKdarCYz6uQLqAZLw59P3gtAAV2WygZH",
  "key10": "5si4cM1M42eyciPptNcXvUPpxa2Tjuuubjs4MPgWVcAHE9CK7kxzYtFhvm72mmN1EUhZbv1yELSJkh7PfyQnhAFF",
  "key11": "4aTkKdKJXF3ZAXCfXc9aVQLYMTqcT2MtWMt6W7UXg93Wewgu3c7grgwyqRen5LA6VtoesV5Y8eRfmRgARSm5wmVv",
  "key12": "XXrnf8EdSYmh8yTxHWGeDWsjgoL8G1ZesaNVANNgp3HhUMUiKrSRrdYW8oeg1PG5w6D9ST6m6hQPNnpzTjsv3PY",
  "key13": "5QUMbgnHmGTnvkKusWbMMMp8UY8eFgkaj7m5wDyTa1h6x3gbA9cJ7TMcMTqHzUoCrTUYRz3j5Zgs7jwMoqX71AhX",
  "key14": "4eKBHt4yUBfW1YNh6FpyXFpjXZRyNzFozwtMRPLWZQ4DiaicG4kByomfRrVR8zPhBUU9frrLPyUjQmvDHF1rfKYH",
  "key15": "4TwrypvszpHLX7rbFz2d1pQsLSXV5s62LUuDzhrT9Fdn4rd4YJH5YnreLUZQ9LWNjZT7W4LHvawXF9oVmpwgFg2o",
  "key16": "2quxs9dVKLtSGtEp3XCF2xidruYGrYmouZP8qXHG2rbXMR4HBQiYW5mvj7GKPMeN2cmVaY7mJZDNEhVcvSRDgFKo",
  "key17": "2fmGvCUB2qiB7YFJUM7TsYCBFQT1WyhEpaPaTSYDn9LGXCNexdjhcEGVnELBLi8CELDpkcY7n4XtR4beXSUoodfd",
  "key18": "4RcYAfNowaZBqAekDDLr4HY5pJfe2UpZHenm7EFyxtm6vYSDhyWcxzjhWBaLhfkYUKXekhfA2LxKJ4LMWE5s36js",
  "key19": "4QX42T2od2wK4yQgXAWsAoPnGghefaci25Zqke2AtKh2yJSYTGJ9G1SDBktXieJHr96KawdurgpVJp5KDhtBqyEq",
  "key20": "2pJMZnxbi28uUZm74RnWnHhgCxRYoq2iahkLZp3BGgEFPS4ZtYTAcE3LwVaudSX7mmgGrzubmgNg8q1LcrN1cRwX",
  "key21": "5hGVLSscMzqkRyvpmKJhE52DqAPLCn8TyXovogMvQ3qsUt1S43hGoQQCgUcVT4856P2LzUW8Nze1Qtj3oxNzQDXw",
  "key22": "3HY77FCdr86wQcNNBmQsmkBFnWiBPQTVjFGHzuXMugewnBBw6drS2UucQ29AQNVBvaW1gWkLo8J197t4qV6kXajE",
  "key23": "5pFiBwdTX1gw2WWGHH4pCyNaqiNj39netoXVhU1K8MVWRc6srwqYpS7jUW1WxgQxWWT2T17qpq7jiDsRcsWoGy4t",
  "key24": "3w9voKmAbgQhccJJZSC54S4EyLSYVAkzCshsspP7wZrDMYPua9abSp4PaYJkefYE6v3Tdqkh961sqtizcVmH5iwf",
  "key25": "4iMyjJWv714GTuCx5eSF5jKHc5JeMi7HxqqcpnDHVW2VLjhdNAsRmh3V5LgHckxtzzmaccW8mqk4P7HabgfoaWZb",
  "key26": "2ynEnJn2aXrk6R719uDv49frRNQx3T7Pv6Goy2r5pKwymujgFWBoPsrQg4XrunffeXJb4MqQa2aNNf3otUh7Cbap",
  "key27": "uzTYDk59TRRNrd2rP2pwtKuWjxMDV9Lyr4cqxxsXwCLVhScx8vV9uDUSxKHam6yWPpHfGmNgySmcKA251WHypZN",
  "key28": "57L8faPCxCvsAkB2ewfFQneEr2nfa31rERjxgZMv4D5gJ3KktmbhtkuMkpcSfNYzu5o4v3QsXgSk8QxLduJxrmdg",
  "key29": "4EmqqNfKdMPidH8JJvpkAycnG46J3WokDAxETtVkmvTDNnQ4bi93yrHXWBC8r43KNL8b6ibcyPazshQvjUZxNYi",
  "key30": "fCUmeaRc7UBCeHSZYS8wPgP2u7FKVVFWKGNGk63XMqJp9DD2HjfPP7FD3CUwcc3RQqib9HoYATK982Ami6nBXfp",
  "key31": "5Zo7QmcZCJuV2NEHJje6Qf5shMMmfDoPDPVX7HBo9AGGquaWUAXssus1vfngRcXVaVgZvp9mP1PjVfvQH5Uh2JkS",
  "key32": "5tXCJ275hwefRMSBXG7Dp8o6Ncq7EpxF6KRrf2HpmxyYQ3g352fgaNuZKjNoSBSrvXr8FWBZeU3KNNrkbZZaaxjN",
  "key33": "45EBMFehE15nRVpCsTeE9sYErGywPoDGaLa6VNULemzKq9M8e9qtafCfvzThTkHEiMbnK9cmVak5Fy6yXFSZPc6e",
  "key34": "3ds5XDPK5syQi1sJ9t5y6D7dgFXkofDAjDeSea5xD16akNwHUraCXe9oSJtz65f9w8YzAUUqZW9wsbJC8xCME76A",
  "key35": "7qXM1BDpovb9qXM7WEuHGGU6zfDmnNHvG5vcsh7uXG6SvkuVM9U9bf3Nmk9AiD4AmwBjQmrTK58VAFVLh441vmV",
  "key36": "2rJn6xrPpmbq3N3xSwMsbtAxMrKTZYZzf52J1L3QtMWVNUk8L6dadBzCiFb6iEuWQnj6426CNTfuosxY2ku94Asw"
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
