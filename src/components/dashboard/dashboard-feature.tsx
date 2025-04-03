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
    "5isohhiZDHyGXUaoq48oqmUTBG49mkb3ybCETigWaRbmnS1QQVayY5vR1VTpkWP7JzUwCYkrcEBYSxXo5WqN8irq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEWLaoegLb2RLK1TZMeQSJU9946ULu83Tw75ASjzk3ewMsCehqqR21fCcn3JDcJaHfYFczGWyZk5DCcprwLqzB9",
  "key1": "2SNmf3ARZP5HqbAMHXFUHA3X7rKfRPnXzWEkKsAuUcY1vpGjE9LGSE9TipLMmHZPzj1tsHu5F3bZrbn8nvmyPLpK",
  "key2": "34Ezx7dqBkSjeHSTHgtvAVakSuyqi3QmWxrdrTdLVUTh9aXcdtx949NygTTMAL7ghvZrtWwk4xJfbC6X4q3iBsdL",
  "key3": "BxjgWHZPJyJUCzR6Jy9xcjCZAFYicAUxWXs6zubLoyMoRfwgqTVAL8HbRZuvMBtq4syV8Tt1U8482EADMWz4FF3",
  "key4": "32feAe3wHQiqNEzHRgMYYXmNG369VEAJbFnmdwx7RTH4dHuVAdCFsbA4dihXYBtfpQARc45eonegU3qpZyU7UszP",
  "key5": "5iNR5Wnpyk2rBE8QAsLDJdicRZMYeJnmafZjeaC6uywv9BkZACsGVhvTgxb5Fw2uMLqDnRwY2ybzYJ55HFs8DALj",
  "key6": "4HiP7P5mUY9c1Uhk8GLAsJPtLQ83zRM6Vu5UWiHEVw79wJZsmyPTaCSCAhjTzb1t4JpqPygJ7bk2s1osWwgsGBc9",
  "key7": "3TphinFVf92cC2c3zRQQQMJbPBFGDeoXXxVgBLD9NnoeaKxReYC2B2Rxuk6cELTqoKBdLWLx7ofbk2ZA7yVmKUsf",
  "key8": "NSwr96T5tNWCJNoV3NdcMUnTG2QUThKjWXAtisJAh3b5WBAQ1GPGWFzaReSqX7oxDCbvzVgmuiFXTf25Vc198xs",
  "key9": "2jF4pnz2iW16ppPb49QTx8G444ZTmTBct5qptPHazzziGeNUXYrbCaaVrMrqhmBva3EWdPnu7nVwsmfH27nctE1c",
  "key10": "5AkidLMu8RoPSfKYigc2bC3ePT27suX7rxyS4UxiLQrUoqEiKUgjdGyUszYFzwPBVjKHKLn5g86sR9ZQw6mujWi5",
  "key11": "3MpBhLS5DLJmKd6icVMCB1bn1EhzaZPycd9LyUDcd1U2saZ7Tgq2zJVUZGYnZUxpukCmTBWMSYh82eCzpPSnBrNS",
  "key12": "2CWVLq5xoM222RTpmc2xv1mcJjkTtHBAojPU5V96Gz4Q7EtddugHgqxq6yatgtdyvJDmQWEZS26DpVkCaSRaRefj",
  "key13": "46c7xjvyZbVgXhG4LxcBReyuf9iBuauaBABNoYUtjVTTqdNfnG6yvz9JayYcwkXzgzcXGjZGdU22BeFszsjFPwRb",
  "key14": "67KXvdRNHkL9NmBVste8nF6Dy6PFxBJxtkr5sK1R3ngxHN52Npv1VZVXyRoXoWZduYvT8MLjA94vh2fGedxcphK4",
  "key15": "65jKPNxmXBzbuj2MX1aGiH2rH3YLwbbXFrp6MtKPbgGZLc5cYbdKgRzeK4AtiMTCng1QbgoXu5ZMBHbg7jRo7kbu",
  "key16": "2akcfTPhtvtWSmdW8r39Tg7diCTuDjxiVxXmVocM3iUdsuzXS1BHAyw1Gkh75yTvQ4XT98Hntjoa13nEEHEpwukQ",
  "key17": "5n41MD2VJ5N6MTdUWUtHVBnTmSwPg12hhkvYtTA5GJT1HUgoGRdQFcGxsf56tfUJh4vBuew2YwJyxZkQnNiuoP7K",
  "key18": "315V75tZ7DKQpBp1D64Sx5JCtQ8cm8Dr1UPLGWhNDytdjCJoC5zhc1UYtGUUKCesP9zeDSaYbs3SHNAagrkNLjCp",
  "key19": "3Gq4LZzY6d6zJtLG4oyVhqZEwHotVYWQT9CTyMp79v26cQyXqyBaZFyy4f7wXqUtwfWrMAVxNdsCc5jnG35knULY",
  "key20": "21dETKUjDFcWjaeJLRHfPjZdn3kXa2EA14W2yad3yX4sPTzJH2RXXDb7KzwD6dAAP1R1Jozr6muyQSBsh4zhs7N7",
  "key21": "35pgBgwioZLcr5TJF7AKcLJ4TGHoiKGxnudHgeWyLUodUgMs55zSN9ARHfdVJEMr67MYKCL1yhzXZZXN4ign8BVp",
  "key22": "5j8ZZMtTmEVx3AR7k9bKRVfxuZuW8NH1FmmnLnWBRUgSfZ6ZeheUteZZWR2rmB61zPqC7DKMmDUvBguQWUFixQPZ",
  "key23": "5sCVStHneQaQAHAEGQcMb8uHy9UGtUNacEQWc4rg6irNhvCzFHRQEYXU1rD2TLF6vtQmwPoXZukd7ms7xGcuVdTW",
  "key24": "5Qr1c32GYssvgPbL6vNz3oFvP9KM1PdieS2xwRME8gy45pGexa5zDQE7i6aze6W3wv6WHFuBWj9t3yehXvfqx9YQ",
  "key25": "4d6tDhsybfrN8y9H8KURtfmiEicbdUMfNMHbUAMynnLZfv7EEpd81KH27G7wLSVjTANv8rmR1ZEfd6J9F9fsTzHm",
  "key26": "2GtcdMAgZ8MJoTaLCUU9cRkxeXVWmgtLx61X5BwviP5hwCnucv3a8Zh1RfioS9r3cNf6RjcUMrAp4b9t5aPov3iF",
  "key27": "22Fnh2itH6YfbixqsxZZL44Z8EngUdYNf11hSxdfcSSPX2txhf6pQKjXYvV8ntW3KsJrB1uyZHsFFz5G57w1tVAh",
  "key28": "33SedozA2hr6Sr5dSgGp5ZDoYTcZ6XxYC8KZJ2j3DoWnG5iy9Qr4TUvurFGYPYzGmVH5EYwr9Ki5iY5ewJMQeMG1",
  "key29": "2X68oARE3PDTxqfeBBCVYxjpQjeMSro1zNEvGvHR1zVayJ2otXsGtjVUu9Vohbjyjwsqa7HLq72SeNGnfAVeA5qx",
  "key30": "648yiPecAC3dzXTykgM7Hv81pgvHqA4nLMPkVW8TJ1pFfSWZdN3dps46UzXT3PR2euHLS2oDCiod4se9XofmqVJ4",
  "key31": "2DvLFCCKDrio5M3C5NhD3LEMf9tkoeXjouZjFJ8DpneeMWDaw9ifb3wp65wVcUjDFe5qfAcsdBK8zec8D2zDpj1W",
  "key32": "2uu2iMXmnCbPFC8hnW2HuKTdSxTm9T2FD2fQ24KTXgv3mteibEn3mqDXoEutyhbkKyZkiVfJH8ZqZHJthrzTH4sx",
  "key33": "3FhGjq1R5ZRVDHts9eAFc4kEcYsfAUXhMXbAzWG9GhvJviwswQSmQdj6QiCDftbn26g58FJcR8VF3ebYqwyzqQsg",
  "key34": "ytBfR3bMXLkfqvPNNdWMuekx7C6TZn5GhFFmmKxQUmoQpFEofFeeaj8imHX8aQqCKJoUDJSkTRxSLF4E1tNzNiA",
  "key35": "5DJNqqEaagUHDb7Dfi8hpLaW8uxaffNnGESbhWktpqu7HwbZMFmVC4AZbLNyzaLihhoUPnvoPmNrXYJVaJUkCrEX",
  "key36": "37XZ9avYS9xfFzwFvBD6RUY7CcAZa9ZJ1PtPbqxKPsZBaWSGivj5bi6J7YszuW7w4zNRFTG4Vh76dKg4iaR35WL8",
  "key37": "2pr245zExcb4EtxWR5RdwZr6mMpwtKf1UFBQF8kbRheqPRSoTgvutzaFfjrEepB18Jq1N8gUYFtTwLjukywrhEzW",
  "key38": "5DRqnRjDSrW4sHMHd9PjRU64sX5433nE1ChpkwLJXRDuBvV47s7gxKYrEJZLEKjVE21mNLVdzR4aEXEqaMmCPKaD",
  "key39": "2nNXJJPA2e6n2kegZ7KU9YEHfp8FMZaVxcqd7vrEUA2Sb2uRPiGkVmbfzvqXnKVwYsnQJRca8M642LzEozA7mcfU",
  "key40": "53TkawdrFnTxEBiCabZ2yFnHTqNuvypMXZwqnkyR8SUosvKf1XZTX8ED3AP4aoMTYD6NguhtQHtNRbJ1BKw75z3V",
  "key41": "jEaynBA8rTxz4eECyreTNG51MNm91HaGNARkKZRJLm5MEC8KkC3GrZtPskHM9kndTqwpsSW7UQRK2JfusTiv5jX"
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
