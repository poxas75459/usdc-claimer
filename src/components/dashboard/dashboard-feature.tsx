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
    "2D9Kskf4BbzpDSvPDoqDF4Q2jiURPB8yeHVSZVDPTgZ44AC3D72ipZ84xmEgDrZaS8tLLyDLS6E1VSer4PBnPR5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDK3JfLEh4WDJZXMNFdVuJHQyBVP1s8AypXCVUTZK2VygYWP19hGKQth4katsXCup1LcEMmzAmKV1jZVcuM3S6W",
  "key1": "5aadEyGdTW7qX8ycN61SBnPGmjuiVUwDcJmP9V5UxArkyRcwewTLZhooULs8VNfy7CyZrQP7r6WXbeAecyZ7b9dV",
  "key2": "3tUd4m6FVWi2Mf9rCbxf2igJXzUSFubLYvpqqUwFRirzzJ2DZ9pRAQBm1YzZ9g1LaJ3iFqc1MU8UiVCAx3zouQRU",
  "key3": "4wUx46bp5yb2nJNs5GHsvoaurqcMLDUDPrkdqgt8MLfyU61R6MYaLYWLxycCkZYZjiDUTATm9n9PtJCzrFEV8Z3Q",
  "key4": "2Nqy5NFEepfhXa8S5DsFCrojmaL3367p2LgSUZgptpKr7mUy9bcthLuGUm98whcV8NQ4QmwsZivu3yRmLSAhEJ7K",
  "key5": "iCRnUrr28nrG2kk5n4tKSZWr6wcj2ZCGr7dpCm744i6acHkNcNuyuWjuDaTe6RXHfUZXhjW5XqQyMAEgdyXkXsw",
  "key6": "4xM1XbkiGUMhYv8oV1BWjEB2teuh1cpfmsNTsNf2QnFJAKDV695vnWErdrS3Lj3W8ML7JNvpLWYMmqfUMB8f9mGD",
  "key7": "3CGCma5QJ3WMAuS5jA5iD8EMeAXxpGuosCKrWpoKrRsDe5FFMuJEwuHGdvxJAhusgcW8z1C5um6voS4KiTDggLbu",
  "key8": "3cKk6q3o7DqqoaSxHR9DdJ7SgYq4GnbFGtZQFsBZmK6cEmva6LozYXaBLZLGk821Pux8rrkbnMahDSqHwBWZS5Mp",
  "key9": "67nF9YUTfaA1soydKZJH7kCPnrDWjtcTY43dNqWujb4CoaVZdeKr1pebpzdQXnNuoLBRqiD3DFCcrphbaFz5EQfn",
  "key10": "3mrLKvoovKcFGLCeeQrC49eifPwGS8oop3h3a6171vb4yFL4yffQSxfDdAPPJpN5YpftdJ2fNNURg585wgW6bE3c",
  "key11": "5bd5z7iFeUPzsrwYeASs3QhDiPfpXT74J9tgJKdKb5H2FEGB7f3buBJTHwtqwnBK7PAApJA1mM2aotGEKjy4KTKH",
  "key12": "3VzUPTPiCtY4C7qBUMXfSeiYXZZH447BFQAvNUxMJ3ujahHUcMk1MJuzLMoHdMWnToNd6q8c5M34C4GkPyYfAcv4",
  "key13": "5KCUQuomPnhP6QBTkaYothrT54ndBusZXYWerFWyLU3gJ9Me3VYChr5nkL9coa4q9Pexij4o2r8p7EipepZCAScK",
  "key14": "4Ag1UgQRZvhGb1inevnLntWRzNiVoGZTYaXJAskWwHM8ENJ2mdEtdpxmpCigru6GN6AxkFcW7YmvcA7qiNG8sT4v",
  "key15": "3ZZd9gDj2Dfkv7J4G4MwasBaav48quVqxs8dPC7bS5CDuAUfrR8mKKDMzrwc38K5gjR5hgWXPgNK1PYL9V8UT6QH",
  "key16": "4cTNgE1K2VzWs8v5ZZQGuieqRTR7ZkSDPJQ5gwQJp8p2aoKFJAEez19f38CuETjdHrxoxM75MNvbcrEMfJFmXiW7",
  "key17": "3GHAiseFB86sUr7N5rwnn45qpg2s7N8QXjBpDmWjQ6h4zexdT5SY2sqUVQz5J4gKDq6HyhzADm4vPAMVELtioYNm",
  "key18": "34aj9x5RUKZqj3u8J3Ah7mhHUQ13BDnyEJqsYwr8ho3tunk4FoQTTtoBVQwwK1uRm248kJXk8L3jPcBnVFfVtJ1a",
  "key19": "MqBKGkBGpv8Jz52jpHrM66dM8tY5p4SMCe611aeUdG3e5ttF8RLZsdQscvdZaP2MiqryJ4TtKRqEv7VygNfC3zw",
  "key20": "CasoBapyeR894ST4ZmB4ny3M13QHGpkiuQW4Q2KRN3NJGwF8CBL7sub2HjWbNKCrnzo31yVFxUtEtCRHxgLX2Rb",
  "key21": "vAg1iTDz1Wt3pBJZaKsAaYZBcxM7nE6UCxZurrmMo5tqKdi7hdusF87TjeV2yaMBuAHQYHwQmN2obehPDyzLEGi",
  "key22": "4TbsGSgc2yDX8QUzUxYuU7MUb3f4md6TLeTkW5btLndjtLJXFj5dCgVFnVKTzfERK6YNLTZu9fpx1F6vcuE2MyHc",
  "key23": "5rM1bVx6q1qFyJ6NfAs1C3CE36wpuDZiEroiDNyXQ9NBDkmCpW9P32ozCNaviTtZxBGTnZyQ2JpzCkCY2uhg6GYu",
  "key24": "9PrPAoSK1vsnJuNmx3BErUeWF592vJMiA3zjoa6bUx5QxckDhrR6KYQ6nWMjWnQMAgLw8q43EbyGQs3q2ZjYHoc",
  "key25": "5uCwovfHxYiWXCJL7ipLW8HdUsfSfLvLiDYKru8Nus8Kep2xsKa6VzpvtwgofjtqqgpeVBzZHo83xmqVJZKR61y4",
  "key26": "4khvtiK3W4c13XeHuCUqTaBxa46YE1Dbg9boZTPVm8H62at9SuxNs86gZ6pvY27YTWnf2bWuNRELX7YrmqxWKPsa",
  "key27": "4Cg697VcECos5vpnzwnGj52r3z9H3Vd12fXiBLhK3sMr8a37g8c4tF5ZhhykrZFkKZBsBZpy4JKwYz6xNMKgsWW7",
  "key28": "4kBiHtTivQ2xWDB9nSsMJAUqF3kT4wUmg6wMakJ3sucqB6S1LLd4yNy9C3ZjSynfYFWCT4AmJEPnRqb1Tac3ghAv",
  "key29": "41XN8DmatTk9ChFk1Z3yuJ31c2mkfPRfY78ZjA7jGFmSdp9bTUqEcER8ebEdndkbskcSfnAU9Yj4pRf1vFnvZfrt",
  "key30": "3g59SzY74pFfprqSZjYxb5iDnBkMscK6f71q9nNb7AfD1QSzQbYi3f7iSNHQLbgEFuCLcnKhxyuz2Gmc6MqcaRbB",
  "key31": "2mpCPfG5YdMZrSbqeNC5ET45KjiGKw99XLMQWyygiy9XS7XD2SdhFMZEQsujgFK46CFLYYE3dXWbi9yY6fpDHXS1",
  "key32": "3ukRdQzxvkAXry6GaJaCTMnCCuSkUZtE383NerXovSsUUKpAmVoxNPrzz1L2vRgAXZxm9RvoXt867ZVCvEWZ96ju",
  "key33": "C92dEqCWXsXYMEycTkPGvozSSwDaXVJ4T9tn22qzq43Kc5mH9qTq8wWGByCcXTYx1XR6uF8efLk5E9pdpG2Nd6A",
  "key34": "3LFcuxG8src4hF7du6cDqkNZcKKZDDqwvNMva4cvZa8p2p4xgtuo4JCd4iQ8jqEvFxXfJPmR8D3NcNG61pcZorcX",
  "key35": "2V38A94UembjPV73HyjXK5KdZWTUEuHfUmpk8Pz63XLC6gQGmN9ENVi7TCcdJzsRHsPGTrDjbyRVtWMzqbSrgac6",
  "key36": "3nBi2E3LfewFivxFYSSNfWUGd2Yw91F7uR81vj1EWJL8XYBBtn4dw5dufSknDWFLpa2JPqh4MJrkpKQSAmeYjeiM",
  "key37": "3XiVjZzMqcFchN4CN1w4viR1CZJvWKKWmmV7nx55m1XDyZ6pkrZziQJj6HfaH5SeydnTWTZGpUhUbdoP649boM9b",
  "key38": "9qbpFWQQkVJ8gysZERzttR2979mTMg47Fnn2NqoA5pcTgBgrygWVUZiNEtp3XTCzHbeQ7rYmxL4URZiScMjvzos",
  "key39": "3gqp2RwNZSd2t6ZKMDfNfk2ghApMu7AVbkVxes3G7e5VYsLxNSy8wf1ghuVszBqYqVo69MA2QTA5rGLntof9xm2e",
  "key40": "5hT9cGR3JnbiiVNFmauKKgBFHcK4QZJxsHQ82maEZ29jnqoiRP8b8VqLhE1BNW1REduBmBTpHxcpfPtcgB5Vd7eA",
  "key41": "5DdTzUmUsNvxgWm8vJfKnQTaFFE1ZVa6Kh1H1AUwCdqK8GPggqzvKXCYnVuMbs2hYKmcDWHYyxAZxs2JwLtsTsMh",
  "key42": "5uMqwu7eWduQLPvA9dCT5aEJ3V58TTbPgDTuiK1sFcTss9fQMiKgabHsYiA1MbKx3o2vD5x7rq3RughEZDeDqdnQ",
  "key43": "RMFHpcuQDjbz198zzMVX1mWfyJHR5wHV8vqvrEH7BCAKCuA8NGvSKfsuJeRiLntTSyTzaYiCHXs3mkgw43EurSm",
  "key44": "3Q8ELqkuK6Z2Y963H7vLZaLuoTioyzgAyXHCWsMbuj9ku2D4ZedWMAV2zu3mwZbTDwqQbvxxu8sfFXGLPjyZVyrA"
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
