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
    "3xeFApiKxwg1i1eZxje2YGMCiEeBFE3EW4gaNuZHWM1oTuBQKV3RQ9aSGqEzQunzC8zjGySmFzM8FLjhc7MRT2xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3UTUcu91x9o6jXvkNGbSUsaYWt4tHnqkVokBEUH46SmiZuAyGYayBx61Q6vGoUdCTm5tvrKqk7dkEp6TK1TThA",
  "key1": "34m286VomBmKAcjmVKD3RmokGwivKH57juot6QMAwWJxX7nqpsfg7CrVEsfW5SoV6fXRzQgtdofB4LrfGFEBbmrb",
  "key2": "4R7QsjqvZKHJkhycQkAqFmzSg6uA3gUsjdbz84nryNxZLedMg62LVvP2AhHpJqbB3wmJJ8DdQBEFLg33rgLcUzL",
  "key3": "kRy6JBSkbVe5e4wxjSZzHjanD6HpwMkNBKgB69pUABu9NkQRUNkFYUxG8Fx88iqSzWWArGqmuZgU3a839hdaLQe",
  "key4": "54ce2yaY8HyKLLYSkXi8UxnfcGRF9XCBMMGQs7wqeSpW5j3Roe2ZBahHwBH95sxcvQcZ616gQCMyi7uVuw4dbqTD",
  "key5": "39GEbLmD5hAQekhKKT7oEm1KEP8ENGKpJ3nCM4BtPMqbD7pZgHMY6aiWnqrtDDNqYti7giZRkMQpiPRkPfsoWQt7",
  "key6": "2JokoiLqVHV8CrtxqRuzzV8v7mLZHw57tZVPkCiinjnsdCCAYtRLkk8vK1QEM4ESLQrjZ5UgE7JniZRjgGuEyKMG",
  "key7": "2saeRwpjqYyKfbXP3oTL76ESPuAgZ6pn2uS9RtsrNKzpWtQ5HXMsGiggwwCA644iwCJK4JaRPrKjRDKkf7rZZPUf",
  "key8": "67ZuAWgDdpgEGkDzykJPBGdE2sRU6fYwgoczCNDNwXmeFP692QjJFqDrr3mj5tPvADca2NLqd37Xycu2iu1KVhYS",
  "key9": "2mkMWkZbJscaXJK6bjkVp5g3hX5C795DM3LPUBA8g9Gx7yokc6kFdgob1xPKgWU3BGMK1kxLALNJNDxNBGEo7F4e",
  "key10": "3qYpSkjYBi8XR95ibGUpoeVsLNnv8PX8XMWRBNUFHo8WdMFRAs4s9BiqzjwtKZKzSPRg5wHypqssAonYvKF56esg",
  "key11": "41q2CMzWUfebzmrM4rqyENjs7WMmqtsmYiV3vgUkLnw2YVaUnnUiUN6SQjkirmq5HhUpuKD1GnRj4zY8T1D4N9Zx",
  "key12": "5m5uJEuSmhMB56BG33ngtchYUSA1jEaa5Bn5d1V1opmBvuPaAwD8snfAEt4E9w6CX3DpVS7akorwvTSLQ3WSHH5N",
  "key13": "2TWMgujjsn2QW6heVrytDDLs2Ur5sgQPdCk8ZcQn6xbkerNRFLEPSizGwEbcguScFAqkR6LYjBHbHiJQNHrP1Fm9",
  "key14": "3EXFy43fB5rHfQaEuiJvYNVmvaqutHZHpkZDJqyWjcFJRS5hbJsYebQDqpv9deHe2wYZXWqsqNoUsHWPbPEHTE1",
  "key15": "2DTt8cuBTd67ybXWU1csDHMsJVgqBos7gG5jvfgBW6vR2aTZU132k1ucwyKVHCt93SYoQkZnWNht5nV885XcdaNU",
  "key16": "3j97vvLzGWXoVPkHysHq7XN8GVgtVrfmvUTc2nioXrXLRuQDavd9PDr8WtubkU2ug8YAgdHm2hWijP2XAsMpbUd2",
  "key17": "2vpTBktaRfzxoqYHXQHoMnFwhKFe7QWMTsWz8sD6A4K9REuGzzHNa75i6jw7QyW35efL6RKAcnKWLcxDm9y2zEyc",
  "key18": "5ApwyJAUrZ4KQ1Sgz4pBTAYVhh3wSwNZNowvCgJvnfoJ9M6MhsAnMWoxtAE9gi1GbAqvoTS6d75fugMbhwajWHCM",
  "key19": "3MZPQkUTk95ghGCbc9ZVcCLQ7w36PBjVBQG73HtK3soTTzEcJTh3egAJKJ6Z6pEixFyQMBWiRk9WZyjAM5zctqks",
  "key20": "2YGQytvZTNmqbA3Pmt1DDycTUbQGKrfEvcz5sd61Y8N231d9dYopo8novvctETFf5LJvnVqkuAPEqk1pPG3fiZva",
  "key21": "5nV2N6er6oZihBZHnwQF9tJrA4E6DX5YoCUH874Hr5jU6LHS8ZXexCHe2vSw2M1hBnUBRVpQYJtM8qTxUpgHNNoc",
  "key22": "2DMnmTjmyKJhwNFzStbeXGJGC4wxZUe7jAy99vBsfUk9kiak6dNDiMEiuceUypNA2nsPLa5gyFxEJVm9X9vNnqE1",
  "key23": "2A1pW69bDwrs57jb9VewM7awHsneUe4quraCNMv6T9uvTE7V9xY265d5PiPWUJf5gmcKnTtLLsbRDatLzAbta6AS",
  "key24": "4XdZbjJ1cw9dcW9Euoj2kaPWPuRLg8yhxxddESccpw9RPNHdDYRr4HR9hsvEvDu6V1NwtjNoVs8yotXFo8qVcQfB",
  "key25": "oFn5cecW7kA5NXvtdNX461pmdqHVAAmYxRRUX8QNQCgC34iBhzbhoSJxz9ZvDF4ffyKS5XwUKbrzVvvrzJ4YRMX",
  "key26": "3zKBSJFca59NTtNaoNueYNfFs1YN56ag8Lewj3HLJ8fkUefbYmteDM19mQqhroQKAC6zmFew8URbu5bozBgoWFBB",
  "key27": "5e9x2vp8JSTs6CsjTpoe943hfj8BNyXpatzF4s8kF44U8cQrvjwafTfrE4EwHBxhXw953xnLCoQxBbm3L3gGx9Rr",
  "key28": "4SX3NXDa8v3B4KQ1UP1hKoE8y68VXaKLGXqd2VoiZ54KiQhSV2VFKi7VmJan8oq5D5kYgTLKRqDvzYC24BSdZibB",
  "key29": "4y9VDcEosfbt1ZPt65ACC9tx8PLZuSznZuCXeGdp88bf7YX7rhaEsGcrUDLDphQGyPEr2yrz429N8zpZs4Ru5VJN",
  "key30": "4pmCfrCeUTLeZfAxZ7n6qKLJGa96hCgJRQ6QHZrehndxVYyM2bTjjfRwFLfkZ6Av78N8sWxPKLC6emP9Z5H858Pr",
  "key31": "3aFq8iAYssuf14APHhQWh94dmJHRRZPgQya4K7FqhFXQ6d27eH6beU78qkexrTGsqCvR351scPJj8Usbkz5AvXNZ",
  "key32": "2k8Sv1MCsurnNjRPqQPF3pEK8Xnxp4BBeaK4Q1KSzXFc89RyNyV976M3qmAZiudxTTyt7jEgp7sUHHFJVRMyrgeo",
  "key33": "5XAATbS972ZJePjDsuwgkGE8EUckC2xVffMnLSuRCGE3bXxZ1kZEe3biqVrit7fRY854ehRDgbMFt3xy83Wg5gyC",
  "key34": "5XpvAYvszT7A1chpaXutW6sPczfiTWf3oyfrZepXYbumzZUtd9KYc9EpZNbtb5w91a4sB9W4yjy9pdJrZyeL44pV",
  "key35": "8nLpPXbsnzJsL5CkQFRQu28EB4b6yFPQJPmNvMS8Ar9NDPpeH6niGwHn12dSGBEoRfcUe65osbZrMyvSQiH1vDJ",
  "key36": "2Apbe9ZdjDNgGBbdW2Z59xrJnu2erSZN44Cp1tNjG2TrTsZWpiprncfVPhjKoNBPHxuQ3pUDNhYp3d32s64mgBeJ",
  "key37": "5Lj62esSQherttuEDQARC2skVMnoLfchNjCg5P92h6rZ3VNKhf9varhY37Z3i7n9QUaedDkSgb5Li9TrnmgmU9C6",
  "key38": "3FZz6oaBtTsyiUxBLkMX6rS3GFYYXmvU9Z9YHDCwTFzjDHBGMVUBr3hSuQnpLhra18BPRW81AC3ojDXbLzZH6iEu",
  "key39": "3H95s6S4tbD3fZRcgz3c8SUhrsmS9fd7bdeC1z7QsGYJmqSQvPBc1mvbx6MRsdAxCBNsqSVqKiwbAgR5vAw46ujL",
  "key40": "6M8i8AoKfRXDWFpPodbAoGKP5i2wwNP8TyXWPsWYgVmGtv2fSR48krz3eqGNh8oe2CfhrFc4tYeskEmSUUTWyH2",
  "key41": "57gy1x7n7u9MbYivgXwgnvXrzYWnY7EnFcDkQiST9Qtd9caYxjnEt2h7soNBRPYXL6ujrAX4Yq4ouY8zV49Dm2ZU",
  "key42": "3PVaRPsbYJysFykSsTxwYjjfriFCBUgogDs8vgxbiS2MVHM3dUHtbSZ1PbWqfo2buPy7LLqvkjyKTm5edNdpeGau",
  "key43": "2cjtvZGYvpr8etk7pRMjthsAWVUyLcJLtwTY3VSCdvTkUT1Tb3oXrLRQN9CJZ9CegMoms3UorHVDiEi7RYKgwYqa",
  "key44": "cwdVF9Q5HyCBgU9RX8sSKYYF14nMc5ebaeTPD6Dd9apWRns3zsxEnXKtpNn4qh4awEtD2qmYn8J4aLVT67KRE5Y",
  "key45": "3iaTpJzpCe3MUMEzJL181az7bY2GAJ89oxLisuF86mQmAZYtmW3cEp7ZJtJ4yXs7rJUh4VVvYXC2uxeGPHE4FnHe",
  "key46": "3y9krUwRH9MenFippDMSYTofQ2fEiF8W4eTA262tBUzTHtwt4DrUr8t6nU8EF3RVsCkYaMGasPD6p3u29mTPwj3M"
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
