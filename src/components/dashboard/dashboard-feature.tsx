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
    "5sd3oKTT8sUmxbeDuDjokAXmtv5aFsoCX2Wwry5Ss1ffEdb5D2KnwPag3YXKHznKHHMqXVaucXZEwWa3eYLVw389"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GxinK9Cx3ig8iZf4c6UnfGUGsca5bjtA77TX58Nf2vSvYtdj85CXs466gKH7oFQ7z3DpAxxsQbF87PRhd8Fzkeu",
  "key1": "3P7R8Ydo7SY8355m242c3gfh56EimGinks7Fd82eEZPkN4ZgsACAQYaFLXCFemttWu5T8mQf1yxaQpt36sJq3AWU",
  "key2": "3aeNBcm9uzcJpKrM8WVgYbyu53UjPtLeCiPSTySHQMB64Wfjj5o8UKcP64jGzuFrKk3uXdmZvGVZf2SP69zAxpmR",
  "key3": "2ENYociCiy3cwjYewbSugvjNwcPh7ykTi5W9TaeDVwPyLfeV162oWsi9tnBZHp3GYWnzoydh1dAHyRhhDVW9h4sK",
  "key4": "5KUvznmADgyNRtqJQyhgTuJpwtht4ZwFop5CsnQ7QEv8uxcphV6GANLDLydtMxJs6MpG7njRMqq3wZBKQh7DUrgX",
  "key5": "5XecDU86R5WgSy5dTBruKuWxBzarDYQC8ZYBiUh8ZLh2W1ZTjEZvkdfs8GuUPyp2mYW6hbgEFUhvqWy1VUjUTNs",
  "key6": "217zM6XkvBnk6RwVBNoXYd21dQd3pmuAcdjUg5iZNH39XDvTrLd7ykWv8XzrYKTifJkar6sup4XHyny32jRe5fX9",
  "key7": "4FyEnPLzam7neiWGAN1gbhHqhBKy1UEwAyREyzsMUQnH8BAN4uDMCLwZmkbq2xu3sZapHXy81t23fXEBtxMxuxuu",
  "key8": "2RF2QvtiJ6BaB2MwjhK4RfwVTCcTR2ckVdeCJQd7cQeiSLHyZ1G3mP4dLe2K7psf3WvC57J1HyxBWSwLryLzgsb9",
  "key9": "4NyJ5o7wqRotown43qjq5dTUdKSEQXxEuJ5uHe9WXNcjiB6CjX7hsvm74y8A9ukwRDLgdzhiku53xKTjSZkiPEnH",
  "key10": "4mrTjUhSTPmNYoRFPVyVXnovWnpTsefkpv2ZqoUQmQTPqqBaAhEffkr6BF8tJ5pgwwStCYzP1d6JsJJU5ise9AeL",
  "key11": "NLsoTavsweHryjD7kssep46eqqJ3mz7LmEf9su6DusCWou7EL8XUgjzXEW5YBE94iG4pGEZBesYUdD1NRo4HTUa",
  "key12": "2Fy5562iGsprMdFyUfE8dakQ6C2jk26qRXfH5jWor19UhcvaokbSneNi4GVnxGiM7uZEhcguTPcEA9Eav3KDvJxv",
  "key13": "45be8hGu5fMUMrP3ZcqEvwgu8V8k4cSWvqhVp7e8aSmZWMBmXKSQSAfMghU5kgHWngc9ojrrYta38tDmLK5drjtc",
  "key14": "66rAsXeqAjgNss4PjSm1AqqzvHosaUHhs8CLeFe46WEGCLGvtpp1JfFP3hsEcMwMkTwh1mjVMsPgsx9ZXQyg7vNd",
  "key15": "4EkwgM3uffDd6XfBHAMUTJLwPwsYhKZW7aY7Nyq39n17tu6oVybDnRQP2Qmtbk36bvW1UmQ6z5ajeKppk4Pbgs3u",
  "key16": "31yXZkzhgwmMnNjqyHdJM1eEzmyk4o1Q8BiC9tXFdWviAnPQUEGKZjRJm99ThbbRTq3WPmdQva78STK5vhbqkwqT",
  "key17": "26kqhrATHwwSpz6AM2K6EfocPrZGdyP9wUd8brjNvaRJGS77UG7MwJKAMaa38k7qrqWQjtoein6VGeU9xPQxwi6L",
  "key18": "5UjJ1C4FZtMD3UTYVXmqZguqtsY7CgiVg2p1ApbaCxbS5STu8ZgtT5aFHAMPkZzy76CtqQaAK3ZxcgVLY4bShBKS",
  "key19": "5oMZNnETgQgvMJBDuv7hcPsDT3iUays8HF52WzP6HaxxJcLMZi613goEksuatsSW7QiFEkyJQJf4ZGDyvBihv7pq",
  "key20": "3S7UWTgKB7Qv8a9sHiKdGqPqdfJ2qUcv7uXvGeTpZ79U8Wp1su1BCdKJ3SvZfTDd7i7kZ3hMXGRQAuqFHoT3gbNe",
  "key21": "2PAsv9Kw5BLQdCMkHNTbtQr8Ni9HyhiziCW6JijBDFKmHxe1SJZCf7Z45vipt97u3TMLWEEtu4hRgnakUPCeEAvG",
  "key22": "97iWfLWpt24u3fcuMRfUwKVTBTwE4qBmgfSa4UJcBYhpNazjq7M5WsiUeGjgdMN13LcSG7NjFptka9yPJjv14kh",
  "key23": "2ozKaf5Z7CZsAJm3sYMXpNjqU4mUVGf6rCjvrmunCpBr4UwpPgyEq5iAaprD87AbpBB54oUWySngQFghJovw3g95",
  "key24": "4qxgZD6rE2bTqJKmP8s4eXvkZtNrd2QqT1SsnHBM6uFFC3EP7cJUEACdNRgtWLwKNeUcsJSVQsBwYW2LQmvddci9",
  "key25": "4aegQF9HqQqznptYspCTiZZcAeCYikbax8GbDaTvj4L97EGn5SWj3PTgcr4jigRQziUKV9TEy7GDXXMn1gxdbDtN",
  "key26": "Jae9GSpyK3y7k4qoNzadBTQV3Q6p2ZLBeXpUuw3a4Cwu7sQ7MppmCovRSuKpi9zrVzPEznMjQhyMsTVpdZvpuFU",
  "key27": "2mRvQ9fz4uf5m3vJ2b6DT1g6A2Eisey1XhNwbAEMUEYY3Y7C18MNwqr9atY2BKQoeue12rHFYoGSeqLa8JgnJ38e",
  "key28": "4tHG5tHQPEe7dWLheMtLNuFNeLZvyNEA5miVdi9KxbeLpw4bcDYDCbjVJzTNc86Sf1wPibkga8fDWKmek2TDvhaM",
  "key29": "3v3oBtkqBB9bKZQEELuNw8MLENuua3hdarsWde9hM8MKNhtF8KgkrGwajmN84B6Gs8Ak9nFWXXs9UcJRK7ccFot1",
  "key30": "2SRLhnC7nwbsSfgCcpFDAMn4L4wiJFSSVmuQQD338HvuTH8LnKzQY6ESaXxfEvZpgQsSSe1WTbnDC1qA1fj4VC9F",
  "key31": "S8JVbuatpQDhkhhrfscHKmwu6hfGE5icKFjzbYCUM3cGv4FaCLeDVgN9NYJYZhUtjbPB9p5drgzARoKnDd1hgNE",
  "key32": "tsb4R8niAmgjH1m6y1ABYLRwYNyV3GPzyHzNFBR7FZZcTJKX2RCP1qZh9utG7yz2Lef1uZrh7UkkL6qnjjqnVvP",
  "key33": "4zR8uWm3Y55kgAbEgMvUicN2MBJWozFYd3fdBkZJU5YhLhWDe8LRyEAQBMpZWdQHq11bgoTmxWEd1bZu9BuKeZJ4",
  "key34": "3LxsgrbzeCMtrLQbGe9Uvtf6RkU88hq6Bac4h8SqacijEHqcr7KBYjK9kSzutZspA1Qrs54K646E2sUE6sAByW9r",
  "key35": "3B5QXuMyW6DRVfFanTjHq8Xoa8hkTxyvZHbDyHcy97nZ7CKUj6SRLjjva4vD3ipK68y6rmEnxcafRShe9itc1edb",
  "key36": "rFpyGfYzvPBoae56nGjcd2UMgAbbEACkFXYnqzQnoyJsHduenBQyMCZhN6AfmBSHcNSdFLPQ8bV2yFgVUw8M9qg",
  "key37": "MSxJ21TvDLdPnGTAuoMn7A6gy9xpT3MeYEWBTdfkjeYYzSnzF3fvcpuTYX5J1JDtRR2ZjgzsaVYCKj1Lp2tusds"
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
