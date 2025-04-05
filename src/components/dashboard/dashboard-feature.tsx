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
    "41ExjRxeuvPXx2YWniLnfNSdwfT9TYc1w4khah1agZG3QJ2DMxKLfsc7LQFSsp5oDN7rR1ATV1PCzQFKb8o2bgzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "94rtSvXqxpWzazHbRQkuKdR1GNe37UK9BbwFsjDRuty2NLYTRE83akZBqLmVeVifb8sn589Ryr9UfK2wuXVwFGX",
  "key1": "4hfwa6qz3rj7xBvma7bpN7QA867eXky8ck25qNVvLxMUnLxMeqDkm9MWTNpKwY3j8LrGEtJKMQsPBh8nHs9UFB6J",
  "key2": "5synYYCwceH7stkwsepZYG7jgPvwfSXrEMU3pVUnSwQg4PikHGHaw972a1dJEWu2LUBmceMJ67kb8gULghb93nzt",
  "key3": "3Ww4nS1tdu5z7D1EQTaLcNLA4CxECiinUvrhcDB88e1RzpHiZep9JTP8SGdiGKHUvYdvqvxmbuDrnXrcQsA5yLaD",
  "key4": "5fYcZQZNLj55nWUf2RXtXxpKUD2qPJ6ct1EucPjvtRpf4B3tMdAwF5VfdR5QX9cdNqefAqFSputw3sQokRokZ39s",
  "key5": "4rFmK3c5kjZvWT56c7FTFDgoJLMnCxt3j3TFBoqxJq8Rutx7UYjqNBCKLnMBeT6KC2CjgmMmJCyPyc6tnCEnaB9f",
  "key6": "3qhrU2n9TpxDUXVbbAZU4BfgmYb5WdmDW2MA96JkJZNtcKbayPyZyWTKXZECY7JjR9jzYU5Sf9mHMnx2JTSqZKjb",
  "key7": "42voo1WyppcQ6rSKFeWHkn6nCyeEr2HXf3GGXoYKNZJUmBRDKXr7VhxmFPui2wkz7YfKpeCFNUZDRUE1B3L3DoTA",
  "key8": "5FbJSMFxCyj3UCSm888JzEejxiqvzceB7y1C4dSGmaH8jZYFcAyk3JjyqJ3F8hwXPjpn6fcZS3K6QwC68UjnrWXA",
  "key9": "43woe9J2yVbiW6zssZEU3MvgUjMNoGcyztHi8Pyu9czhGxq8pvJXcMM8kK6cGe3BuBgYX7aArHQDtYbVnsy4eMqW",
  "key10": "3v7chE1FopvYZRPDa8awhBHMjqYjwsTCcJbpaUgL6Dd8LwE2krUf6zu17xyVRu8Umjm3k48EkTBXZ2zZqR5PnYUx",
  "key11": "65z8wfoyom6kQd1eWnToYpwLQVkohvdvDULreiNEyNMMhzyszhFsn6uAtrxcR26RVtioPhCU9R32V6U1RTjTa4aV",
  "key12": "5sut92jLc8zrdBgAoFBo41bDYKKiy1YcAhHeCPGzsZpQrRVHgtaXDoDtftc96MUhfZnzXj59G2LTaeLDC3f5P6ir",
  "key13": "3kkEd5B1RX1qoeqdQYhD1yTWmThCVobxXZHSgYytPuqBVzQsg2uffnEamafDoLzD31yuinSrVA1RP2UGUCRtwBLg",
  "key14": "bHCVUj3ehbc8HpkCkcrmVGHhmzJByKukC9Wzh9Uf79M86H5p7UNSGySasJh3SmSTGrTco7okTsaiWZucka2SKbP",
  "key15": "t3QgTAu49rutL1aJ4zNBtG3BkrM6i8v7Uu61Wm9zneW5Kq2YJHGDzSWoSTX9RkoQbXKspVwCgDFRuAgjdpDbUm1",
  "key16": "XC8nFhUw24j8mU7YqEnQD45iAQZxntKxaYY2G4bZuekMFwAXWipdFevtAq6pxLFWjUuGwcrK1SQoCAB11JTAANy",
  "key17": "2LCZ5XiAzZFezWyk8e2i9R72Juu2VLMWbntQTN95q7GKUGPodqffTHpCxVc6k6Y7mjJnnZFcAqb4rWWgqkvPmLMP",
  "key18": "52Y8BhDk36j8BvHugqyMKU547a3ZyTHXBrsiHsGkSwvFn3ejF9Grkohp25eHWsCHfJ7VaQc9uQdU6mYGwZzQk8tL",
  "key19": "4uhp4rukAQ4Jz5Ua4MmxVuN9QNSBn7rDQqTtxuECvQvAdnwwsP27bum9Dr7xXQMKXS8iP6itA5NMp33mb3U5z9od",
  "key20": "5rhYDkMuH3sN35zq8FHd9TaDDV2Jtuo4ZYwK8D8YdsktqWGT2keyj7JDkGQi9P5h4RF7cYdUfhu2HPJPwG4CWXiU",
  "key21": "2nRvQEAt6QMdHm7Ws48sBmRZvHUQimbyTSQPnpfXHgjSpA54t3gxavXqujXL2oFtnPGYsk8dWH2FUYm1hhTsnA5Z",
  "key22": "46fnpTvTgkeLUbqfAYYqUdq1ybpmxMHapkAePpDk2tx6FTYT3bcFKXww3gy9u2KuuJDLzrkuBd6ghM9q8kX4nwDs",
  "key23": "HLgbVvHkCYS35UJWoTshVV1CZm2YjQhHv3yUnG1ftCzDH8zBGrCk6UDiazwPi3AeKgnUj5WUqCE6iqRnGVfotjS",
  "key24": "427w7qN198ZRYrTGEZpXYyy65rRMXd3WtoNLobcYq9gKDRfu2bumr5LPwFN2H5Whue2mMQmdnyksbeFhJprW1oio",
  "key25": "4eZZQucE4uwejiEXuwdg5yiqanUydjUbbKARgsu9A2mGgboT5MwmEaazLWc5ZCWhS1QxWRhchbaWy71EeP9Uixo8",
  "key26": "3ybnoprjjk6Q5ApCCZhpGLMAZ6ABj6nxgT5MDeL5mM4SpScX75hMz1MFvw6MxMQCeAj4atiUNnDrBp71F8o8QjfQ",
  "key27": "4dYV8Zrz1J8kuKfajeqAgFX2ZbaSe6k5qiBPCnMUMwrPY7x4w4VpucemHgRty8SqJjLt9Ev76bS5HSQnDTM8MwBL",
  "key28": "2zTfzXYFyTxHh5pTtVK2uSN9RmKXG2Qc4a2Ws7RH9JwyygTt7XHabBfFLTM9zwKtRtbzNHpr3ao4UYr37pTWXSc2",
  "key29": "5j3tpoeGtNkcLVeJQnRR3fn7fycMdLKnQNjopKTaPJaEfoEWFBUwKd3RecoGzJYFtZDcbHELDxAXRvHcZjqSbhe7",
  "key30": "29fq2RDyXwDPvYiH6BSwxENK2Tmr9dgSFqkJN9omTAu4vWRMzS776fUrkcfoNvcLp7Qspun9gkzSeBE9LAhDggGV",
  "key31": "2Jp628wavmYQ3uz181gDfJEbqNNRzS1GKsCouyq8hL5x1wVwNYAnDqjp2QZUQ5nYYcEV6XhB4tHBiWixXJ9Dns8s",
  "key32": "rbVeA1swGRtbu74wXX7wc6Gs76D4koJnXfiqHeCYb6fb5RwoX2NUbUL3C8LWWvgdFMvJJG9nnJnunvfboqr2SRv",
  "key33": "3sKizBvYiztTYy5xbG8c3sfkbbh7fn78B44dVtT9kxT7b8W9YGLdcgu4YFyKnksBsYjdwrWq9c56FUFZ7v3UshYz",
  "key34": "5SQ9DpAUDUBkQeqnx8Jv8UsdfvEh6gN12pqdkX6ot3J6ConbjbH4YeJhP1hMCo6GyVgKYvpGGzr71HJQxTM27ZTo",
  "key35": "3Lb6JhXp1VLkqkGmxuN2jtxwa1TgsgewqnR4KyrG8svVJBNLnNSYwn2hYZA8xC6bjtD6B1EC9jND8ZGRGxN5ebvn",
  "key36": "2SvHRhdx3bXffMQZFzqFWV5M94jrcjHrKDGfumfSDuYMza68Kjr6HH8ayob2tpVbK2VysRKHzqbbRUoex4ry25Dm",
  "key37": "49cN5vPXC8ogyqLtHsnjSfgR52bMN91BU9hXosFtPUjnau4UU2oLsmxD3y17an3njnbrm2U4sMHsnCEzJq9o6K5t",
  "key38": "48egFKnNUdm84Endri2kDpG8VVS6U72WW9kTi4YKDAU3zHKVJ7CiUtweeimY48aMD1UTeGneme5fJHNZWPEKPrCB",
  "key39": "5WdFMvc1H64Yd3N3n7N89sZmRBCZ6Pbzc4amZGkL9Tm9oPhZJEu27KxkHZD2dvxg3QvjUR6oBKvNLhRS6i4jxdHz",
  "key40": "2voNeiqS5EkYU951QRYbBZeVCzvwuwHxEt58CTCbYYYoKu1KLs5N27TQhpYZq7FMjz44JcghGSdVCSdLbRWoackT",
  "key41": "4gsx7PgKzvUBcQzc1KrQPEWPhvw2TustkwkbQ4X1cgNZyVqHCrYZfv1kXFWRMBjowaVrfdA91NG7XFz2KczEdT5p",
  "key42": "5okJaMyQ8Fp4puF8x1zpZBJo9eWsWnsWbjhwx62Ng5BZRtLhduZHgsTVwBDXcaqmfroMiic7e3ZMUntWoTRgjYzP",
  "key43": "3CmGVHK163Mawte7ZmFQSKXvaj7hbrZDvAUFj1Vmck4bRL6CHmCVzKFNnMmi8wy2PJUxphQoPaRne2GS4U2jvzmu",
  "key44": "2JMvwjuizCvdy4gfYya27XVC4X4HK58KhVgNnzaVsGiR56BSh5LSX3stCXUnzbDrzW8TEd4BNRouZU2xN7hiASB8",
  "key45": "3BEVd1uMemHt8G1ozsxPAgyjX99Nh6Z1darNy59wJURmnV5UB1mFz5zaXzBzdxqBZKefXX65i2PQ7nC2akjJrjdH",
  "key46": "3Dag51ZYC7UwWb8eeLGdKis1UXsg8csW3NE5nEotS7FVfhkBtK8vg9hHrRvr3NuaRRzfKE59fv9MnJKctxjX9Y9v",
  "key47": "5LRL4tCeGVb3Dpj5MhtDsbyvyq6v2XensXGsKTBpEF2bhzyK4GS5diqgi2whATjyXxATvRrLa8Af8cgMZzrW3DtS"
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
