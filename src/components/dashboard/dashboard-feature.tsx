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
    "2uL4KZPhJWMN4YPBJVYFaHKB5aMofmKEdviY8Fg6nnKzDXVDXjePiQsWuVYaEqZ9FRzgaKTTGqVUYviWrMrmR7Xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yktPtjSRDAgMzpE1TPnVMV935VRvkzf1xawwzhDViyhnYLNcHPfvaAMvBK92xEVoaUBWLoJci2nxNCxNeD6gTaA",
  "key1": "NFusV1F3wtrHdyoYVE8y6vnimWxrkp1PURgt79sHVdVHKwBw8T3wNDVxgeGgT7JJGyNcY5YtMN96DtfWoQG74jA",
  "key2": "22DLayiyo21JAhxcnN75j6fwAnA9z1YXieHjXKfadtHyEPHJRwJ4Lsz8NyvEDiBMdc4n5c6bQrC1gubFg3r4ntoQ",
  "key3": "5WDP7Up66CobeEjYdYZfCB7vQVeSD3ZqR9FMoJKyPy5ESCm5uaHBzvkmvJaxtrwctdVYeEPtTwFi55HYMQe5frFa",
  "key4": "5jwue81AHxvrsFZdWBqSHoSmn7SuLuwAApfTqBtE5pahjgJdpWbVmVJk6D1Ych1Kfs2JG2iUr2VAjqeEKZTneJBv",
  "key5": "4AEos2QbqtuGQUGWoznAuFur5uKh63nRUTMW9Ho6BLTGC3zpMFcnxGPew4yJcuxJ99H4odzkkozKUKGGPFN7UUXe",
  "key6": "5HKtffNVAy1k26N2s4gsXj7q5EENKBCVcarejBWzzbCDWeettT1yvnay8NXDZG29J2H4DbD4d2kfnhdbfYbuFJu7",
  "key7": "3Pwpc6hJz2XaupaAWZtmZkanu2DvGc2iVSB8rRhnZCd6ExafsX48XEqirCvZfDKJb5aSLHRZGApPzcm4pdth6UHy",
  "key8": "65DNUcKsErXhnsqP5qoQSJbpWz2a33tNLomy7uGgWvQdDCr9xuWmsYqncSiP2WBy8nSzq5WJsxn9aovt5BqoqdRf",
  "key9": "2uNTxiX6BLEgyRuJMr8V3iiQMDHiQubZQsebrm4CeVPmZ61KkC8AFskGkjU3JmjVVfzZyT1MZDYczPS4RzPhPHS8",
  "key10": "FunF1qhiRaL4GpY58Aa9HoezPJEstCoxdgo192D3wijn5kUvUyEC5dWfmu9tQ4QmARuQxmLA8oHSLQFu2saPd1P",
  "key11": "3eVZwnQipraTRjs5LoGiEXaMZvApfuikz8yfdZh3krBDaHX4j8KBf8YWsjNU1x8kt7ThSffKsFXSxBsSo4F3LZyx",
  "key12": "5XfqQehpdxWa5nWugqcqjyt8QZMshREWaFHp8LwYrJAs8rEXd7JSmkRZcY6zQGWb4vHWzP2Ca59gkKQPUAhWEDep",
  "key13": "3XNdR8v5xApgqPsDTwCSGt6JrhtNWoigDkrduMKBc9v6ZXcwDtCcfn49GtrGjSjKiyEnzSPL6EpoJqBJEt5Hs3ea",
  "key14": "2CzVcYvZNNdyacx79DesrCyypkQFAqsB4G3soUfdGMeYBxt37b5B2EY4yDjeCLmqEiLn6CryLgvLLyPVY7CWAsDE",
  "key15": "V8o1N54nbJPnGxjQgRyR7GTBpQwT4b4rPbBJN7K583bFMjXJLFJ5Sk321u1L5uej5rwbLnM4h8QbMssg8CC7Bpr",
  "key16": "4C4x11oSgNxduKoFWdxD3aZ7B66uieoxaz339WiHKJ2ZfBuP8mMVZxuoMAanw6yiUWbWfVngkDvywU11dwbwzbBt",
  "key17": "2kYiNPnmvqVs1JdtX8Rj8QcgheZZfT8i9Eq4zUB7RZDEJ4i1aFVLeZYCKX4WpdjkyrH7iKBD2bhEafWDYLafn8Us",
  "key18": "4Vx2tbpVtYGmDoNNAkxv8FJbV8PQS2ZuHjfuRdYf7LadbVWoZQhHGM26DYhng8PddAgusDNVHAG6ycXY3NTCMjhB",
  "key19": "594kFSsEzDxfku2GEEcwSsc9cCdcUJa9AAaVHaC4eN4TV76HMqScTE9jPJjuaENbH6f4M8VuzBW6PWV7v6Y5Tetc",
  "key20": "5EEgZxMBiewuLpcChwYMHPQqcuYxxXPaXjuxus9mq6azRA2XEx1seWhv9wYXo1cPfSw3W2tnUCw3QReytBhkemNC",
  "key21": "5PFJWtuDhcLaBjHUzLRS8nunEoE6N6h5ypwAePZw9aPMZeSaBZvwEK9CsPMNTpKULGdssNV52cUxfp99bsseRMuF",
  "key22": "5bPVw1m3ZDP22kmd5HpJHRpDjrPtXFCRR1E4EVo19zzUCLR7nxrhtQwk6jFjPF829VDo53Q8pJiiNMVeUMB1efs5",
  "key23": "4dqtFhpzpXmRJWZyeTssDZuGGU2awtgypd3swuLPebVGmVpk5WpoqyeC2TmoizES6aE2igMryupAfTJFf2gt3RWB",
  "key24": "Xt1qLHvsC7b45t4EuRCZZnpqnfX6K6KHjipFAfQta7MynorKgZsKT5bThGAJ5AMjfMRCj615rk2xGqaw5w6BUQQ",
  "key25": "5bXojPMWr1PQZVhJpf5PHLDWKRJTvibwn2hBJBSaeNKWuHJfKh4KRj7VS819ADsia1hsxaDaqo8hPHEmSEnPtbwX",
  "key26": "4nM8Tybbt51DUUKTn7V8Yp58a9ehSyUs9CaL6zdvv4pEA4927XMBTthbTdpZwVmpyWdLMZmSuaBv3S7N3wqqfd1X",
  "key27": "2bcpYjdu6ggLvETy3DVnGhconzQqEAhpGNdinHYP6dMWaFeHV3k5jVR16xWY136b7umNJ7teBB5ndfFZqLTeyqrB",
  "key28": "mPKDUHBW6CtXxJshf5m8Y1ZdgwwDCmLGKW549oR7E7AP6HjsSSyok9xtZDk28X97wPziHaDdTDr7oNZtDzJqEL5",
  "key29": "4dnT2NuPPxDM7vr43Jh94kJiu1M1QtJY6hr8fVaAMAAdwgTr87YAv9AqmTBRKZLRLBTBtkFYpL21qfB12U2jjok1",
  "key30": "3zvfPr6rB62Xjzjnm3LGq18NiU66Yw6nKPpUunQ3StpQUUhhebUjG8a9phFTayWb89wKcx7us6a6i7RBWfsiZsxF",
  "key31": "H6hqmNczn3xdnhXcnz2ETXjVYhGPXvVjLeNgpQZLSNAMiReZKQNcWWtrtNt2HR4KZ718LM7CkyU5F1vpfQu828E",
  "key32": "2ho38mWpogvP85ZqE8YCSeWZJsF7VbDWQRCr1798kiqRgBLMfjVYHs4511a65rDWva5eyqVL9B1RbKCJ76Pytmt9",
  "key33": "2Tw3ABEmeegQSDjaLPRJQcDR8xzonkmNStqc8MzPn8ko1hrLcE2HzCkvwtH2RgXwfGSY5U9PWe8P9ipVniNKC7yG",
  "key34": "2SyGbedntUT5XJZAwJ6DJRJV4uFtbD6W17DiAHhg3vwtGCv24SxfjR4BcEFW6g55ZzhKCu3Tyt4yikiTkktabTsD",
  "key35": "2MxPu6nDDywrK831nGUnwRXsaoaCe2JAaKQPSgzSLU6WFGdh6Ur6Dn9qSYLPbQBPHxYDvWG84BjoqYRm12KBg5Co",
  "key36": "3vir1BCAhXiZqXTv9c1zuriNuiVEWYo9Rvj4ApsJKSP8h7yULiwF5zZPiDG6BSctYsLFaXD4CVGf48DoG8K8WTcp",
  "key37": "2BLn9huYkv4xjpHAwgdrQyDt8QAAv6g4Jhh5dHKExqzgAd8Kmux5FQUhxwhXfdWcPjq3VvPefZqGMtwQWjK33PiC",
  "key38": "m9ToM2esdX57ejDpnzMn8JnDYjXBPxzDHQijv4GwGLBAziCHSYJasKNAwZCk5cjS1LJCte7hu3tgTZJ8EgWgpjj",
  "key39": "3mMRo5LEbhqqhtYvUM6XYoiX9UuLD2PUkcZvmHg2BQJRmeTtkrN1CWEqJUGizVsjJu1bxerH9RdsmABwdcx2GwHU",
  "key40": "4VcMWM88pVmPrTzz8Jb9mDxTgM5BEWPS9hSoiK9w4rRvMKfvjLTkhhANLxcJ55RW6xmS2Axpn3N9LcyfPLBgf4Ax",
  "key41": "3rZQR8erjgGVZCGKt12FRQDwVDf5BZJAAuERH5SojH5ZVFvNWdFU5mGzA5PWpfTqMuQU8z6Uom1vUefYA624Pq1T",
  "key42": "31ZpzDUKwkbrHBF3GyGvvGai1DkuF3fdN1zLgGwfuCdt4ZTUzYYxBpBEGHqmCzUCyfB5eNnpGy6gbk6D6hNmncTf",
  "key43": "5zwLV62X2RVKJRgvqo6TAAABULEjQqtfMY2vJDDb492u4A69rcFeJcSg2v2gZ7GAKYWh4AhqK5Hq2pY8j8Jggita",
  "key44": "2K4cwRSeUo8GfzdXBgnC3UfWbbAe2Jsv1E2Nn8p4eexd2QuB16VFNaA1C49LpCnhZA9Bf8XRVdgJLmpKqL9bAPa6",
  "key45": "37QPKC81YhXLhegWw996RVU9xYy5sz6Sa1wNq1eHsxL7VJszS1Ao9iBYqfupzu8gAr43df2ueWv4i1vzKUAx7Kxh",
  "key46": "2uxRXFFJG7AXEpvLQBhDGfCrShC7bwfQTXbVYjrCwX6E2hKijE4ymwFVpKrQDQkjoKXbtbft7PWRzmHVZ1LmnZkv",
  "key47": "5reAcqJZMPy1CRuwiXfuSYAtKU2i9TXFyR6Ugk4vkZ8uKKf8cMg7XABkn4YbAEvcaoV6oW1aBNxTRoB9i8YCP1QT"
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
