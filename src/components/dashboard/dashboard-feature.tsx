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
    "Qswc4QiqJ4LEqihjfLPqg1CzLEzPEEFwqJZGHbTLcZcgcC3TsCP6J71qa1rdQMjxpQor57zborhJaF6VVLAiyvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLWHCrC26KVy47PNh3QM8VzbkGGdJHMzWSFV6tTwuJUXFfEbBBCHPgSA6dZBPAjRgYNm6gPyieYNqijCevSuekx",
  "key1": "89ZVLUmyhQ3DXUStNRxCX6nD1hT7PBGYbwTZeCvZioS22SJuHxghpAUfTLiAhy1osD5muNyYyiCNKst39Gd26Wf",
  "key2": "3rm7iYG4WRzduKnfyxHzMBaeWyXvig8DNEn2p6PHrMCJh9KqMDLEVAKwUmbGCG2cUJxzz7JbJdg4jn5mP1bJzrA",
  "key3": "2EwVHuxYUSadcBZKKp4hXQkMZ5NXBoSuRpfhCEAqrf7PXwFFyuun5pTxnLymXrjhhN1jN2AXBuavcw9nG9qGwmiB",
  "key4": "4zTqCYiHz3QVmWEDP2dsoDr6QoMLxXNfCuhb9UJFyyjz4ov2mtXkvQRKQwTsxr2fKCsjXnDJHKBRjzLz3KRBcsRZ",
  "key5": "5KuJQCuMJNswGdzcz7TXbVQrsjfkLsiA2GC711veHdF7JUqpmfeimV6UhHUbQH5UgEzGaQESCVWyJvqwK3RLJSnv",
  "key6": "2ErpgUAFoEXRDf1ZtoBM2t32xZrMh6B1r38KLK2a9P94pAT1bHDyovnjGRCYYC7a8LuocRxuT2RvZRzk9YSWjQU6",
  "key7": "3V3tD6vmcK5Ssc2zzkSzEzgRHq4sKMrxcUAUqxiPdh6gwPwX31yWEhim9tCzYGRw5zSqooBgKQPPK9GXJfzkh8Vr",
  "key8": "2XW75qcT2yXREiSBesXHDXsbeBh66USBVZAWAZg8NjkqBMw6Vc3mfr2rtif3UDUGRQaYrWqVYe4P4istVcdMQzE3",
  "key9": "2bDKKzid3DyFRMWkffV98wKTS9XEEcrAAq14LV4dWi22BCntwQXzf3LjB2tqLkZBFcHMzuzaRUiG4SqtBN9Q31GV",
  "key10": "5n2ky3vQvU7y9iu9f2MGtkRXQakeMBFEQBVtqNLbb6iWt3kW8BMoFmKrWA8hXqW59v6nrHoFZyQFJCtUAbe7nLsB",
  "key11": "5Pg2vHAMGY4qLDBb2G3bYctV5Ysd13fakxvooeoBEjcSVscuzg6Pqa2pSJ3bfKxfRB3PURNe7eozWY2ZmWoU29Ko",
  "key12": "98HqAG7uk7prt7DqXNNU5TGqJsuEmLajhv1H32GcE65VJQE3a7yurcLy69nBayEhGHUrDmMQtRPZrfcpA3C5z8C",
  "key13": "V9Qvap4wtLNTtVEcRybsi9HpZrf6WcFgRq3Aa6H6VijRDmtyFnK7eaHGZ9L8P2QRfjaTAGJT5XQhihKdh1YxgsM",
  "key14": "2efATNKqa3Wfz4B6ZNcEwzgiczDiufkrTPxnpjv85MxUkMWUAvmwuNRzcm3hNLVQ9FRHpLBqv59BJ8KBeH95h5Pm",
  "key15": "5AqkYx9hs3qQi4GmVtu9Toq1fNdG9PeKy4wFLieY8dLUnAR4gQmxCq9azr54RA3MqFqyqAzFJ2r6vzfNnBr3Fpr5",
  "key16": "PiM1pkY1o2PgoZPMAgmCTJFWrhwe5MrDB8ggUFQNkhtQGHdV7P757zhnfU88F28s29V8N6EpZcgmyXNfJEFFXXQ",
  "key17": "5HBjUNm6aibhCrEF36r5SGkn5pWYALCQw1j5opVGJRRntZijsyrY2LHX5ewcVYEeXFxwk9wcfAm5govd2R9HNwTi",
  "key18": "V6ef882VscEJrQUXyaYPZfqqodK2YYMwdVM2mRhC78TbCqPrhxt8X71gq3YetrZ5RkZF4tSpLAfxg2y8vmkduxZ",
  "key19": "5HXx2uB1FujUZcaww6fiDk8yyqnbEBn23QufoQTWdDAQ9tKjrisosgPisZqm2aEGmqptGif2FrP9qzvQ56o8wYzK",
  "key20": "2w2RZXna85oFffG1JQfWQhsPZDQPNtwa9bYUoj27iHFTD7jTBFJjyD8pXcYSm7XocVpRqDNeE2qMBcJTvrfMSShT",
  "key21": "3UCVUgEh4ebbPFGYsQKEHKy7Aw25YEckG3NrjSFfZJDaFm7UsNi9ay5T7H6V6ME5e1sdZPZFC7R2Ah6UBBmTvB7M",
  "key22": "4LRnbTgDTBC15Ko5Brfdyk73xK5qsNpnneQf6ThCkRDm7J2pcbYgVLgW4x8MZHUdWQmuzuGzvQbytp5T7FHksEut",
  "key23": "5f9NmuMKE4JwfmhgMCdCVNN4wXFNhseNasVbGbYpMQe5YoBsKcv22DR6LNasazLZ71MQKRvL1gQoLUz7jApedck9",
  "key24": "4Z424VR4cZrE7pVRxpmGe1fNXHidvbF33aVs61ngqAcpf4HzMHKcCeCNMjTP1fGDHMiTFbmQ4Xfm6iDcM9UhjQSN",
  "key25": "2WRFdFvkLVhhh57BSnCP6JWeE8xau1AcwmPfdYyNeu5SmssEL7Y26Q677qLK9GZtqHWjFwH6nSdG5n6SeRQmdfMe",
  "key26": "gEuNFhEkk3cuJaLnUrAdax3BzWbpSu5mmTM1apzEEYb5Gz7nd3BufcZPkfMsywTGWqtz4VZyL5VfLWY84gpT4eK",
  "key27": "38YuB1Hxk8NHtyn8Nj3mmGq5FtDC9Zvhn6Tnninm25qGybA7jE7swm86TadMGsKj1AkJCr7LMhop9QMqaVrJHzda",
  "key28": "4ceWsWKUqwwt3ncvrruKiB2tk6qi791Rjdy2fgoLitSZ5v2GH8AeXrEbkdhbXy9TB6EuPW6V1MCDj841pXDnhm95",
  "key29": "3oJDqUJExx8ZxCosSAxV4B583TUHf987yM9FdKMcceVqrL8aMJhqBi3VDxb6Mp19LinQCTi8NN3WYWcmVBGhU5bb",
  "key30": "3h2Gce1HsnZNJu6AxoSSrj1bfjAnDGSuTvtgEpYFm8fTnAyZsFqPCuj89hef1VPLybthB1L9ojnUshiDZKzMbcpq",
  "key31": "bpn8VeNx4YTHekb4ErzKxThCAQxDuFUDzimF6g7Etm9gk6xdapzTo5Ny8KVHHY53TDbARJ1n18pcnxutJbEkn4h",
  "key32": "5xmqKGAStzF9rEKcCoCbWYkCazqLpJx9AoTw14rynmBq8ygaTNX1g3F35Fb6CETkvRU8wjsg2KRroGGbYAeN1V3W",
  "key33": "QMu6Lum5D4TxW8PAaYJL4o1Rx2yM3wJjt7cucLXwnWwQmW92n59kiP5SqfgPBc9qENcVNKbDnz3WbEaczkKUgoX",
  "key34": "2VnZ7FxZQMhv4PtVW5vrCgQvThTBRbE5Ubi2Fx1KSaMFawPYC9ScGBGNzJ2xEHHwQdvbGDMhZn9xfgUPRMVPxm4J",
  "key35": "3ZaidKAHiTYaGqZJPJepZB8qhJzgLXv7vi7LinnDjMXe4LdT5kdPdUn4ApBrvnDwu5iuwMF6ncjrVWDTWHGge1K4",
  "key36": "2G3RzviyVVYGUjGB4Lu8zSJCF3Dm7f8SCCg54DXwFQPTkgL3PjgpUN8iDa7wQZBkmQYjUg8N5BAoAqHWP865CkfV",
  "key37": "5pNfmHJ55eLJxSF8Edn2QuMgDLkizBG7JddeqHRT8Pm2uuyacr9ru8qtGVK1bSbFa3DPD4Ju3YZ11sDALVaZ1Urj",
  "key38": "45DGVgVR1eftC8CJuyMhwkKJTDALNfbKHjVhqpPC8b99cWH24zsTFFavywk2KJMr6xdytdrs4AZwwg27pWsiuHy1",
  "key39": "3FE8mVbMCzTZVnfyMb5Yzd2QDw6N1fdZ7yqjrAD2qmqkgRUXXcYZym8uE7XE4ofzskb22N9tVD3NB8L3BB5GTyAw",
  "key40": "2o6jkEdYxwG1J7oVRnwGKastksusfSQMdBeKs7UHbcvTjCoJ5tjttSPScS9MZ5Vz3Tstsq5VUtvudQb6tWRTESkX",
  "key41": "62xhTqMESd8U1XRvZVms2LRmNFN2KSKF63szRcwzS14DqxGsZiXAdfSnbXR5nan2vUTdwpf7oYgeqLpUYzgnTDKE",
  "key42": "5XdaswGUHsJB1e8d3NSphA4A4jpTMLmfD8sEsm9o5K4nPpyxQYKfToioaWbCrtnajMReskTr892ZgXnhn4JaJb2N",
  "key43": "9cxbnxitiy5TLWRMvXAj8S5Zmh427DiWYupFHDAfdSQxgFMX7TowX8Dtw2F9LN2bMj9SbKkPMjNnqVGvm1zdEqU",
  "key44": "nREr8eUpX91XjcQrdDG9XCXa5oZH3GrrvgfyhXhavVLs5eoFJ1p8uRBez6Ebbm2YrTeFJPTJXQcSUgEHwAjj3c7",
  "key45": "5Dd3qZ6NdbqjRjgFXFJdVxJPW2gSjG4brk3DHzKZyfyEsU8PTJK2X5jBXcoXhBDczivKT5XcG8ew4u4VAuXBdQMw",
  "key46": "2h3jXsZYxufhV62SZ6qLXvfz7HfFEr6DUSW3MzDT384qKPchBwEdFSf2DuyaqpR8Yh83kVM1mutyq2j62Bt4vRrT",
  "key47": "3cSkD9MCq8fCHEfMBH9o2NJL4Ta5YL5FJdb2oUKXCjiiuNSQAxKvrqhfiQZzStK7xDMJoMw47kS8qDbNEVSJFKMh"
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
