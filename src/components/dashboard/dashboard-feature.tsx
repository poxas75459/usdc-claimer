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
    "2qdKDxSRCWd77siqweZ42h8hsThfxkmbYFvgSSxfT8gGyvDBgmRWBDkBC2xEm4QS7WMTQR6p3ssRaoM114u2Dv9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5ob1RaCrN1LX8QApk8qkn2KWiAw64q6shyDvQZ6eyLTr3cHibGMo8DyrBbeqUfP8EG9EV4AZqSQJYThRhXVw46",
  "key1": "k1Hjqcyv6cdUHHgHENkYspRtEpc46q6i7WZoZZ7wATWMbYGoT65USDZGwcJ9U9iXSb6tecWqTmX7rxva3T9sUcE",
  "key2": "2MkaiVBY5e9KstSPqHoFBpcDsqB64eo5Ct7EBYWim3XvyxsVB9RzbUYEPnwdSm5M83TUTg6XiL84WhjfYnCroYE5",
  "key3": "2yP6x3pHpkhJ5GtjyP3sAMaQtjsb4Yf2duMV4eTjhjCAcQDsUHT37msYtrCnjVVZYtzs3dmApf7crVVNn3zf4ryq",
  "key4": "2azRXyJJxU8bZmrMF7qAaZ22n7mkdUiW3CJ8tsizQRdjhdWz6rDoAZsWbvmRk5uifZ9R59KjNgian6JVVFBiS9LX",
  "key5": "4Xz2T9Y5XApsBrKkXi6gQfKAm9dovRkidguupBvyPkmJLEfE7i7z1fSDsypZB3fiqnzoQ5mhVVo2CrKbRC2YhZen",
  "key6": "53r7fgaxGgbgwnsXRHxqqyv6aRbRUQKQ2KntXNm22GWzVXDx8NozX3Hsyy38enrapN8FWKM7avwMrfWxZuo3bHnJ",
  "key7": "yk9jugtkD2m8UdMASBLVcyiNGwSMgwngUkXxjJ8f61TCUbxpBViPi8Kqjio8TLTCMc5eM779vUELfmWayiQLWQo",
  "key8": "5jAVDPrmF8bjqT16CjggKfdiz6WmPaWLqahTrA9jqJW7xKfEWdiySo55ULu9HVTk1ooU8cVsupzjxEWQhPCRi7Sc",
  "key9": "5cpZND1tXbTSR4fbJoHW2GNW8TJrsYakJXzKeMUjyD6DSS7EtGDrfvzWm3Fjikk6BiHdkwhbudqWQ7oq8aKnasp5",
  "key10": "5RJdVkEsKkNUYkU9u3NUggR3AcBbjGHjwAemsqi8WuJKeqtqBwsK6ygjrAxMU2cwLuvR9wKrK3twasQCkTNtk6vr",
  "key11": "5UJyL8qA3MmMxaf1fFvSg3TbwMHjQPTSSEZUF3iJzbkTmrDq5oosBnS1KbuMLNqzGKoXBf1fG46ABtUaMxmyG2KX",
  "key12": "vh3ELo4Y2K7nENpfLo3kEoVPMduqQX6KfPE2bzuUzmTHskbto5iTJd84KqskrspMYCCBkqQDhfpaT6AYBJr5DgW",
  "key13": "5uqCXztXdL8oMaVbG8v5HjJVk8u4RmWQMkRk2sCDhLSSCpnYTTWzuUykzBXgb8ev5fmimPt4QBTDpTfVdhXiyodn",
  "key14": "3d3hizdZAS9QtMgoPx5bT2gjYmzTT1WHy5ECqUbhfFCUiHKQ3Cpy7XaANRawyQjhZ5QwTbtx3jsAnQPreBuQnd1w",
  "key15": "2nkUDAGinXCrN7u73ELfptXKmmqfVRZvVBNmAaACBKtGRoCAyDuMSeFYpsAs94cGYXxDZGC7ATckz7H1bM9iioGd",
  "key16": "2bwiWzQysBMgEPrMvRqKVSzUWxLXLdnvZydTYDQUS4xdzB1QeHurmsWuZaKzqGgwbgAc4aT8nLmCiJjgcz7s4wHg",
  "key17": "5jRgUewoFFKhTq9JTEGBzooQzYLk3NCTVuP5es1kmhNSNThkewtupdnjQHwKNu2JwUHDUCqDHCV3KCkp45N67ntw",
  "key18": "2u2ZRSe8vh2SUgiyaGJkxe1VQnyScjTW6ZfgGefDUJQSUk36YbKZdPoJbo4jZfSUKKGPatU1VZpQhBiKKT99ebCN",
  "key19": "5i1yWXzamEQuaavrBx2ewBduuQhtXqUEyQfFeMPsSwycaqi22TMDLtstdR8zAkBb72VEcryRzHxvgm6pRrtjNqZN",
  "key20": "5guHmNvRr6EkFH6S5TBzRo6oQVDGdaPFpXBGb4a5aWJdh9KaVRjhg7aHM7M1zN4tX2jU6A2Xq675iXoVWXoHn3hm",
  "key21": "Hdm11w8x6bMSA6wdFZ4AVLh1bAzoK3qwDHTMCFbdynfqcBu6G66J7d9Q8nN6xum4UuspVJj4spRpJQfPhnXVA6o",
  "key22": "645jZzYExGFpvDMg69NfuNLTzL56PZ8oSG4uRiTmxyg2GAtnFrf4CQr1cfneby9S5wkk7gPnLb8RM5EpRgyuWmvu",
  "key23": "icV6actCF7DCXX4jhD9P6TXZGq62cFcyLxnuD3CehS34q2ttPgBpDtdGyY1WCuMvUDZX7yH7KSVpuj4HiYj19Gq",
  "key24": "2wnynnuGwc5sTzTSum9uX6TPP78CtD9T6fFmDPBAGjMBoTsW9vYAdz1YRXYfepEEmwHvQu1XepqvRSbPw9VQRMhA",
  "key25": "2KyFw7EudXTPNJWUgYaUZZWte5VpKqkBsce2F7SXFtZNBwC8kpHNvfwRccA5TNZ6PoiQxQS8tTbE5BHBWeFNJVEC",
  "key26": "EdrQpU7CkxA2QCqtSbtTgPSaSgcRb648aSFLfMRY2EjMmdjRLu3W4Uy9QXqwAcFGKip7QwdeQttxj3SEzjm1xRP",
  "key27": "4wN7eZ2VK2jwybkyDuZzqFCxwEzWFukfkVPZsKytrHvaYy81gKEboN54JnAzz9Wbbs6reFfsjFiS7oQiAhytUSBs",
  "key28": "368PFJgixxN1VwggpFwBNcW3dPnaM7rDGPHVG63NvSd2MvVL3woxN3d3D4pxfZ4QTYM7eCbUWe1DYiLAcseZ8yrn",
  "key29": "2fXEUwokYc5XWGGdVz9ZLgcqLXFZdapJz1St321ztBVkmwyPYhPC8MYU4v4wzDVed2mUXkJYR6wLS4aaiu4fjubx",
  "key30": "4rJpxzgx6UDof5UrwN5QSBLLwua3GPU9Wsv6ZbJeanY1BWwW6x3UkUSHbSPeLRHQuAZ3mwrUTc1omy3steUkYdin",
  "key31": "5YZtBcdqcbRj5T1jFgVjDgh7TaYcHbDch78Cf5QXhofnZsEoetXswPYMtV7GdSSFe7D7aTR7JQEWMYZJAxc7JDpr",
  "key32": "4gHZs7DX8oi6SHaH3o71XJhzhFZ8T3vtSwikaDWwujwFFGZ9fcNAYBoQoQr7Du9FAytJQucX2w89pbT7JEU1phcL",
  "key33": "3Nqera4aSGfkLoFJsoRYuTy9Ss47HMTt1UoDhHysh5qWKFeggNMCd4nh9NX1hB9Ry7jwL1JgREakqzTcPsygJDqx",
  "key34": "46LmXu9PryxxXgoaHLumiF6wXRLRSV3K28QzvsNsrL5VEjYgppEcRtuWz2vmMU5yS2sjBJmQewgapMaMzBmNLZJ2",
  "key35": "2zhCmAn4dy3Pqnk7VkyY77pBNkRbt9tovd9SASEHuevPi8Eu6QSsPszuqaXB8sJww4LDAoMEAALtKgdraBYjFumP",
  "key36": "2S3Kpygzw3K7JLJ2EVjMvesXm8oue7DBDrYoHaz2U1BE69uFmx9sM5UKKphfAV1i8A7ApfD8KZkHPvr1VjpnaEVR",
  "key37": "3emiHLH2ndo6vN84psv5QMCx39QpmFSmDK1fXJ7hd1a4tRtmJn1UgkB7voSuAiwwpLJmHdwxgCK7aJzZbNHD7Ypr",
  "key38": "3e1dg14Wy985ehXtvGeowaLLponaZAX4ns4J9U5wXBkmY3oCY2G1t9m9fYfAjFYwWbYi616dT9ZJnoBGy1aMY6Wi",
  "key39": "2eMkStaCE27EdhsdEzRLnishxXNBoHeKKfnUmje1fPQvVFipJ6EkMHHcxkhijspPYHxndCVao4ZkiY2LBxhhCEVW",
  "key40": "5eqzLhHdeJjFL2dAqgXSBe8e1B62GgEko6jwAwtb3ra6KBsRSZtW5aAxHxvssn5Ad5Q5s1LDUPaarEwzn2F4UAem",
  "key41": "5hjBYuDAFnXVtXWndQ8NPdxbEtzuQTWMd18wtiHpgHP2mtbT1wF25JR4PPt6bwBPuPNXUjQNHYWu3WVP4aLJxtHk",
  "key42": "25rNQTHXBkG2PN1V9LKqfNcKo5bXLZa2nGCun4tJC5ABi1XZSfjooR6MjpmwMkf6bSqvAS8Lt6KnNtKxqNZH9Fbg",
  "key43": "4dVsxk1BP1MGzk4eQk8sscgyecxozL2k1T8ZDkK2rbHvQREJmLrY1BE9o9ijg6d4iXgNbw1mDh7GTmHTAKR6Ere",
  "key44": "3pZVFL5hvbH8pXnfpaR88EoKevyjBHYcuUCNvCbhiWRWM7Xp81u5sbhTiQ8S4amXb9WyyuNGq66ckd5qD1gUvHMn",
  "key45": "2L5DuTv44sc4ResfCtuwMii76EZ1BU6LJ9GmgUTpuZ4LqTbo91UbkG3X3LeHqSwN6z1wMEaYEuJZTGmsmwtgZJds",
  "key46": "49FV3YPR2Y3kRQRXHUM5hHjURpK5CxWm6554DBd8hYCVfs12ZTw66mNkrLSDcQKUSNn1qMrf3d5Lm11yqpFz7H66",
  "key47": "KD2bZwE6t4cKC4QN7REny6cH3r5PJtwXLa59xd4NDEGhqrsMNPjWMSuj9mbtQCE9naT5eMBXB8mAGsW8dD1X3RC"
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
