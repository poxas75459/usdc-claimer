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
    "5yySNuqRepyugLQdLtZQM1zStY5qpxojNeqiQjpHSjzzkQZkLVJMqqhBXLsmX8W6hchXR41dzXFHQhA7EWYsfcvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qqDYtDS3rqiV9XFCZweG2ArhYoELQF12oTFFnADS7m6h7kd9piMyNb81wdYaRWA84pPJ9wTQgAdBpgKGAe66mEi",
  "key1": "wXa8EjXP33QABqfRJBXfmpSLhAUNLTyvAz94NoRPaLNzXh4VdiA2H4roj4UJerir53SRxjUvvRBGD1XpzFBz1sH",
  "key2": "4n6EnLKcFhfWFPEm9cqL9fuoJQTTmNQYQxP19G4UpGAcQWkLypQRMrBvH4kDEEGvgnQ7pnQssPozFnd62BcYvhqW",
  "key3": "4cvf2CteTxbL5Zo6WpYLVUZBksyy74CSVQdrPU3mM7BQYrj3pUUyBREZUgxgpRM6AvqtrwkdtbbKSAXYe3SWwb27",
  "key4": "3r85Y7WWi81H1PgMpd4t1hxKk9CCabWe42Zo8vHoi44vCQWtJzCNPfGHPAkrFhmP7u9nLjoW31w7wAkZHbxiELUN",
  "key5": "4Jp1GCRrU473Yd4cTzVKEUWe6aaNtiHJv85i9THkNaAno1vytzN2TTVdJAGbWJ9HegY19MQhjy4koZELpbD1BPC9",
  "key6": "422sWUiZ24KRZz8oHeGC7EVvZ6kS3YgqFZGySXAiZJ7ZbkybwXuBeTK46AAbSoK6JVqEaNmacNS5z3DgTPW3QTEC",
  "key7": "5yosmru6SEGUDLYz5t5c24rFrUb7LSXLZfSRdF48hEi9H3HnGZUKn1jkCeKUHAbbJsJpTpZ8XQaaeVQbHxJvtRGu",
  "key8": "4jQtN7phte9EuttHW9VjUkcH8rfAE1kc6sntMf66WX3ogigtYr1btKMLZbcYkEW4uwVXHvgqYCsPjetufR7vDYb2",
  "key9": "jjycUd1dpZQsYu1TTigswkMBrrko4ZDLMMuwrg9TB6WpPtJqcQU3jkvAuDwJvpcDQ8qHCEVhqrYhFzCdi7fFdKG",
  "key10": "3UH8wzz1iJaSWiVtgLBJfS2QreJywaW5wmWA35RChdw7HtDYManUqV912UCVrYupaKmiWKBou6qiPG4UUivVai4W",
  "key11": "3SG9gATNWhpfaQEVqor5y3RDhGMWGGr9pBeTFtzJDN1i5HEugewwsdPmC68LsxLwhmWwuXk7pHNTm2t2b9S4Z34E",
  "key12": "MewMVxvQmVfMsHBrGAiThY2nVJX5KY7Dg2VdHvjF1KRdMP11PU4y2P5Cj3DGDApnSD8MEhNqEcG8B1hjkLLYTeH",
  "key13": "4i24LAiQgVBZrbUcpLTYg9eoV6JYvieNjn4ygFT4m2NUJpjMKGmQa6uHEUCHDUUBvJiqzs3KM74FgSgKXZoiuSwh",
  "key14": "4jSiSAdoC7F78qAmkdPJfBPG72KtLu6LooCT3aZvmKwRxaF58xZjAb8y414MYXmjy34DeAuxQ4g4AxaDr52c7CHo",
  "key15": "TmfEF5eeMByzm9gmWLHnGRaDUQf7EswPwQ9WeHVws5p4PXsGtQtxZ2baNZQRzAJ35BJKUwz1P8hmbKbr8JvuRdg",
  "key16": "3kjhR7tb2ZUT33yeYTdMeLi64kUgutczBryiG9d3WxfrakA3f2JPKXwBzjGn1ZtVzLD8JB8mpaSAYxyXhtcsTaXL",
  "key17": "vLzvbnZKFu5gmYnb2tCsDDt61Ka1RANH7uhVpgJvPGy9qMY35LpqDvpc6iML6Srabg3SXFRfkk22kDgENWKM7AR",
  "key18": "36TDbuqtzwD7FVGbsNzyhgGaz1ukxnmk9ksa6VTnuAihmqRyvAyJX1XrtWzPk4GPvdNEjnr2GWbN1C4VdE5VaK6w",
  "key19": "5V2Kts2M88CYRvaRLTQ4mL4jCwXddJZ6XqNrFrxNRJU4QmGdUSPdYEYQPCc9ugAxDzTPLS4mYEsaNr748kYyz7u6",
  "key20": "4fMQ6Xaff4YJRwgFMdNg4aYnZHmBAmuDfdN9cKgygmaeAsTBbEQUC4ZWhPD9FTus2DM3dW7VQbaaKC9tRwsPH61W",
  "key21": "3WRCWE4AD3So6TXnhQj7hG5c5gjchS8TEqbr6F9De7diwkkh1khj8r3KrW2kpwMvdTMuTqQ4BAwBkfvePtKahC2i",
  "key22": "2xvuRJ1NrgVUaakGkfsCGHXtATQyozapAKno828iGEAuM2ug4BeX1o4CBfZwbwRDZHBs9nfExDLHeW9Rdo9TcKWi",
  "key23": "WWr3KdYin3s169W18SANktW6BHr5vHPNfekNuX6M5yZDbdoT7AFSyG3M9cag5xErD37Rky9V8U6HtBPQqDMkd9Q",
  "key24": "3Gsv3EHNM4Qx3nmf9YEyi11MfYmycakYfxN1t74RqTte2NHkr2SGGyUCQaGsJ5W4L69S1svyCsMryDnWoReuHYvY",
  "key25": "JjhWJusYUQgQiUcN5SFH6psV1FzRbQFd8inUqt8HySPNMksANUi148E7vQWUTggvmtwkr6oLoJCGewuugqMmPKQ",
  "key26": "2ZARdLMZvm4tckeFTbfvvPmeBMNP3UrAcDxN2bhspmUxKNxbGzFZiJtuWiBEFwLAW5mAntq3gy8skdhUrXM8RLgP",
  "key27": "3u2nwvRRu4BcE3iX9es25MwFedGXjeEL9wQTESd1ZjWDHENKasNLiMobqx7w1hrS4JK8rcvkxJPGqYrniyExYazL",
  "key28": "2ayYotNb5GmEcztC339zVrn7eYjFHPvnb8evWuYA1FGWJYo5kDBaeu9uoJ3ZpFZ5a3ZANPkiibh61R4sNifPf4Lc",
  "key29": "5N6T5BCo4FTskoCf3pJLmkto8wsrfGeTXCgTBxQQDksCfzR5sBz3tSCHYiTQ9LZX8PTLsWYp6gQSr358VnuEV6Wp",
  "key30": "TxEKiLGaXRQpfhGhM9RUWVe3Jmif2Gb2qptj8YFph8qvH19WhSL7jKJmcyx8NU6NJXKosNX8MpKLNgsbNeRED9m",
  "key31": "2HwSp8n8bzZTGFcAmCzahma41uJnvq1uGjqCpnwVP6iyjJrxDTFHG1eU7Mv2dz7xwaj8ZGsQrATAppDa8sby6gss",
  "key32": "wxkXRNyUEH8VPdG4EM7wgwpowjeENGhj7tvTDM7AbRyVmJJt33uNSK7iumLQ2kt8uSMPFWMVsEH34dnvsHohLTJ",
  "key33": "23CmWdnbTccje73GfXy478GWdiHCpJGSBPnvAQ86uKA5BNjw3xq8abD3Ev1pMQXafYpUUpwvWtvK1ugvktEf9FZU",
  "key34": "1XrKZTaiLjh7e8RKnBmec4BRvyfDW9kTMrP95mLzFRLDVzXMqbRip8YXqWXgAmegL73LpWSGwZf3Bap3DypWFXH",
  "key35": "uhb3Y5T56Msfz9jp4W1mhtU6LXguDxuocwcS5mzbDnh1UwqEkU7hZDDbLfD6pXHWBMVzTWj5CtHTd1dP8ymSSmo",
  "key36": "UxxzzrFg5gktotc4vFSWmGtLwz1KvQCgGvLNPvwkQeZa4sqmWVw1ETu5WHgcfaCKwxSiyUymLx4UEDPf4vkedoK",
  "key37": "4jjhK1wYRhWkTi6EXkr7NoKaN15RrpYK8uWVj2MTs8pch3gcWpKq14KNLKAs9Zk7aW12vTQRuSp9VmEuYRACzbe7",
  "key38": "3EWs9b4AvDhPjZPzKeXJ8tLxy9rNPN9EB6nZrmf5fGQu7Qd6QVW8sn964oQLhsyLeJycqD13bc6cAiFQNvTkhQc5",
  "key39": "4T2VJG7X9eGmpHzQaFbqr3V8XpwXBEjW5Gk2SgGBSHvyXLbwT2BQscUUh8Z7xt4V8xirCq45JpUz1PiRUDsdNtWQ",
  "key40": "4haVyFF9N9oGMc9hUQyZpuQDpn26basPSZ6x5jMpgZ9B6K3SLeJxookpUSmdSJfaKaGTwcRgDJL2GKuRMtt81EEE",
  "key41": "narxD3KV6MxZeXqwvCH8BPL4zvvYsLKcMtNWpWQYcpbkAurjnhLucFDX3FKJKrvUSu5v6t9tEn5skJCKoESPmKE",
  "key42": "6com73yde6iw5ox3zikTSJTDBGb817EAPL8tdAsdE4w47uboyq5Y8a5TtA66nZmm7fEwL9JiexNbRrTQSYBaMXB",
  "key43": "2yeDR2QPp8sSvRWqQNgWS216jafddRrbXRcN7995WvzuvBofdWfbqPWkPhB2ZH5JbZwnHpbCmwkMa4rPYbU6XuAK",
  "key44": "4HkwgMZAQ77n9jzyQ9UzqHHb2u9WHDzB4DiAXSWrhALhq2qrGxmqbDfebfPvkW9VFyC8jrFgbGmceP5ET7o3PeXD",
  "key45": "3D9yXPk2KV7TczetWZHYRpLrTADgZgaHGDdjepm81mXPqiXgpbw3gPe4B8e1Ky8T5kHSjb6HUYb6S8FWbYYGBsW1",
  "key46": "5T9zoABJRG6mVwR1xqotAR2hayt5kUcFK7cnVUFcwA3Ff6aT3Ax2PLeTfBkCRr1hPRUeDxoZdNteihKNH8MQuPWd",
  "key47": "2xGyWmX4KfHD5EcxSjRP9sYixkp9RCuRAxFn4DWNTVaTjosEwUWEHwpGH2ChqZvag4fWRmvjWLq9Fw2A5VdVw1VW",
  "key48": "5hXhtexaFrfjLJWxPw3wDWu8xzJyr3rtehSRi1TKgJsbXTciBjZvRxNEEo2rMVrvPUDjTiXx5i2nBKqpeQAfjTT8"
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
