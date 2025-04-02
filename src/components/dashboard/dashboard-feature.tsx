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
    "5Ds1ZwHK5NTSn59kvvvA3FBWWx2WEPSUuW1jxULcgeqxZEZwxhuSamjFD4xm6KjsvovZPS4irE4v6pC1rZHF7Fuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZFA9AxaENpLoeHjBA1VZVkD22uJqEhwdGxFWKdYrGmQwzJNsTViZeapE4e7P8x29YoTXuvjmJuHwevnGeGxH7G",
  "key1": "283QyjxZrte1FYYzJE54GgYTu3B5ifSuqFVcnJE8rS2Bki4cugQt81398hYFJn4Nr25sdgNDWZEQzAcioavA2UL7",
  "key2": "A72UTZSLvDFtkCKRqYoxaienyJYP2cbchCft17tZAcLYcQ2qSxM9jeRCkSLkYRg54EUxHvfGFGRrLSDeS7PZ1Ur",
  "key3": "3Z434ZXE7Y3znjqZNHaV4q5JQkgTZGLyWBdoW3TgAsq8oAZqDSgnr2bF4SzZDNNWR6cuvhGpWjRJ4i8Qjq17ipsr",
  "key4": "J7URN38Z1RMcaaB7YuTvhYCqDQigwCAcGpzBMWQ2GLXKBPJbASfSJonG8jU2Mye9dw5H6X9vgHtsWbDTpxRT4g4",
  "key5": "2ip5tXAQiU6CCwiJAFwDxYFKPVrrBymMrEp31ALsjnSpm5pVaPVZt1i1mtev6Ut8kHCitTb53YcoRi7SXnBjV6mr",
  "key6": "3WRCMwPim22xoMKh2BqQnJ5oY3Pk8fVNwU7WHSCQN15TP3EE9vcpWaMiG9YL3ecJUzkPTUCKBuzdwesTSr9CHr5k",
  "key7": "5JxZLXmLmU4cangi5wX44p1W9m8PcGFoLgbK34TiAGGnyedKdjWQr3cyqRwBKWbhegPzDejFunpsWbcjfiPoHBTr",
  "key8": "33FKcmWxJBgk9Dm65jce45rRYmVY1KTFL7zWXANsD8kKKCULVhap4EEqfF6UmyhFE8WGfodv4ohofJikn4XykCuh",
  "key9": "5rfkmm3mkJYSiSjzWecuKRxyxzRDxK4UzizbpXcBqSPtPhVxdGr6a734fGijx5HSrd5RWFJnHLNQztSbcaxi5b6k",
  "key10": "5ZNSxmTy43g5sAE11NciigJsxLtteaG3RvExT6HgKbwx5zRUibvETG8sXvC75y7fLVLLWJoJDikH4wxaepWYzp6R",
  "key11": "sYx1QbnMvJwD7hvhrN2DHrv1pBHVENjPXwBuFLLzGM3QS19VPoCsqpWao6QVV9fjJHvKfBfj887jvZA6VZWCd6C",
  "key12": "4NuhHCzdzrs7WeeiSsKfmWSMGDXMbcctdUvcAzvyw9CPuHRtBobeRygoL8fkNo6CVsXwtytS4ZDPJrEKpeoDcMrb",
  "key13": "5kS8hk8AcNRj2YYkeyVEWfDRAmUqq1GZGgN8xAavzNGXwLpLxDA8UX55p6eUcbobumMgVV53DkbBingxof5gn7Nt",
  "key14": "3ZYviCp57AEZJEYSYdhhgVQD6gnZ4NqcLbP2ZmzpoD6HGwHGr1GHp94rFSx2dCANzTCDTxos4TVWxg7iCcwDQ5bp",
  "key15": "4pbHnpv32S19hbfpAbFjiE8GHNdX63Tvy6482BJdyb1Dsir24FALmpGdCDSiBdyTCriawR3xRzMoUuL1FvCarr61",
  "key16": "2ZE6TFAHENHq8WK16ZqzisVdqaYSMMsFhyEJZRceBhaVpYwfrMEMcP2t37QsKN54QJQa1pqAY6HHsdxvHk7S63jN",
  "key17": "2U2Yx71teHjbkYczmnuc2weMsDya7LvKfZTSXLQnvLUDcX54mNpAJZJsMVcktpZ8AN4LkdL7WncnncxL1aapr1Ut",
  "key18": "hVmjD9xqF12RLApXJi6wkW5ib6FjyREQopjGkmhYDoHThP71QEEjkRED3eWcvtqjQTce9hsmrS1X77hKWgmr5cF",
  "key19": "CLcwnq6bXuqQXyYoeYdH3BrGxwEjYRV46tGG2w2ZNqeq3v3upeexyd7nqQJRtUTqm9fyZvvQ3X1BaVQEfSNGbgg",
  "key20": "4BH71gCSPf2YPvREAd8XgpJaBmsjDnxmuQrCqYxp4vDWP5GydPDVbg9x5JK2YMJWZQwRq6WfbkRffGUXB5CQme7d",
  "key21": "23RqtRbCzk1wGCTQ8F76C7hpyFVRdvnkpLrsZEdK24YwC8QxbQqiZmBBVDwq1B2ZW1nibMeH4YjwayfwjwguvxXG",
  "key22": "2KrDMaUeGp2i556edApYw6x4MZb5ABdspFjvdJm2pKUVKw3cnDEX2G6PMCxL4eyTWLQ7R2ba6h3m1vkTwZqpegNA",
  "key23": "5qWettySNib7U9uuWWtzNuAioXjw27eSLE7f7Sj4Ve9UewGF49uikswkzfjmrrW7duds15M7Cv7Pg9GhzZCxEPDT",
  "key24": "2ThojuWUxKM3LWa2nZsFgr394tCoonv7f3Kix26Uny5x6ALvhhims3AthH8UwjEqqwg1BhZ8xcAWgd9igikKo3nP",
  "key25": "5FQuoRPrdss3B4THjQF7bCcem6qPPm8YMzCDvUDza8qNFyufiFzyFsftAV3sWARLXArQAVUk74Bb4QsBiWpiPJMt",
  "key26": "5H9xLHmYYkeZMRx7S2CwgY5CBMoF8RZwqhRJ2FQKY82DAbLJqGbvw22oJSJqqWEfLUvKcLiGrJWWFLjMNUGS4ryc",
  "key27": "4PpBhNpfuVkmwbQGxWfQYNYMsaXM6PTPUewgDGgaYb7GNRikFHqyK9xNcnvQDnkt5yopVMy6iFQ1iev9iDYPhQA2",
  "key28": "3SVqKyWLub7p9ABZA4uMae5WgQEVFHEbG8X1dwimfeVssTzMjKr3YHWT3LmDMeoHQm5qsDrJSXMBd4VPdYMRz7Cu",
  "key29": "5gMtdCdpD2KPwUZcsbWJ8P994zpvchBfZ5bg3yaAC4GBhxNYmKuxuZ95vk7hNke3dMJMCLvxevyiCS7vj6migPDG",
  "key30": "y6BTCbT9qSTnMkQqrn5cgoAdGGQBSV8xyGcAW2WZAMj89EsrfM4xbU1xqZ1mY27XKLhQf1VkeyJqLZFyr3ncMYw",
  "key31": "pa2VVMUj3QRkcGBvvLMG7sWfFY8a4jirRxapEYyyQ9w9oRPJQWvZFgypDUW2LFvg88D8ULS37Wyq6k5GqdYJS4a",
  "key32": "YAvU1Q23sHAS7n6Wb32n7YzXPMUPAYehwRZtWUXew6cH7D1VK12KMWH9mhprTuVvegCFNzkr5XGkaPmGCCCzFyw",
  "key33": "5nWtrYKTFC9dEohMKLvxJMLrsMqXDsKqPNjCr9oNCo1ur6197mxsf9YgDnryp6YP6rQbEtfP4czfVqEed9asJEVu",
  "key34": "2csX8YWAHc2NLWqaL74dxcSZJieX5BHq2GDcW3x45BbCgCdJncArnxNkREpZee7UC9egQJ24GQGfDrQQzXCcDYbM",
  "key35": "61jAgNsHtj2wp6w6FjCU99HUHv6pX6pJwJV5e2spTWj2qYj95PXoceLbntfqpKPuFK7iZJBbBXcPFiHu6jN2cBUi",
  "key36": "4UqJeL8AZ6yTTMGtvMB4CpGLY8SKzDH4hYPuKgFLaYbe1zZwwnhTc3y8U1SnVi1rHZHMuDoekV4q5pwi1YLF3UmE",
  "key37": "49tA4ihuxf5ZLAxptpTVxoQhFwCznsVqzBPynN86UpASkmdJgNffVGHZuWzoCentPytn9iwTNpvW2HN58CCNrMsA",
  "key38": "4LZo4VF6t6HiGfPdQcdC8PXjZYPKHPvzeWzM4tEasMsWaHkVWH4jMoax1HDYGrPPf9iD1VSd5Nn8BNXfR4JrGMZm",
  "key39": "4PRiSrLBfbLFNJheHPQTErkZdZoTPaVAMnh3ZqKicwp3UgjY9MiY7QBPjdLB5x6Fic6ycE68GbVewPuYVMM3KSSx",
  "key40": "HsZmKwmqBfbxTCuRo5L7hxNHrHWrmPirQV4B93RJ8CKKr91V2gwNhcydKQ3VZavXo97pwyfUrbXcBJ61tV8oNoU",
  "key41": "48Vrn626UUB43LYFRofSHfUnvrpotDuTptw3dSrKDpcmgAWBV15ZeWhLvhvEhkVkQUfNX4QSWYEB9ackbmbesdQh",
  "key42": "3kh5DuU6FZmBqwN1kMWTout2Y9u97Hw7QGeQpf8V4bVpV8feoShSa3s7d9Wge9sCFFM8To4ewvCNo7jxb37ceBTp",
  "key43": "5t4tyTf8bBMoYauaSMgARCyT5HN9eT5wPjY46CdqHyTpDrTb9xDKMY8TnS1JQ5zFqjws7CmUzRMm2tySHVY4YpDD"
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
