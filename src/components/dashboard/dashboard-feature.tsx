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
    "3aZNSiQ6fPK29o8TrkfWawtvz4ab2mZuvJfZ1PTzKSWcLBnKHwnjZXyMScv4ES2zDDHdhULZuo5iSmJMkSo8Dxag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P7dUMJ4SNzdaxoKMMbZq9bmpX9QBDzr1HyB8tznA3Njwqe7QRBjHJ4EAZK9V7aPEJDpVLsMhicCrSs5tJSz3QxR",
  "key1": "3PJQ9H6W6mV2yFP64ZxvJGxjCjENvkBX7MKGLjqqDBPcFkM4kCBu66UQQA1cjKgtkmTrE24QoBThgnWB6QcuwvxY",
  "key2": "5FtCLS6TSbNceh73csR7fhVJ3S31msX4ykATePkTKyYiWKbirFtEwJ5LRdQMkas2QGMSDVv4aasYKYibMtZcKEhE",
  "key3": "7S8DHxJSgYcwhsZ4DsG4gmeSiRFUMvDQyiG6RjKAYM23KCvn2No7cJDYT2trDAzhyAtoJg1TYeivDkPXWpmUxow",
  "key4": "3P3rRii1RkUX4ymPhbQwsrPCoYcPBTLZFDwwb8AwJ3WL8JVFae3Fu6dFAggVF8osH8r6cUTSTKcAbWeAjZEsSiqn",
  "key5": "59qhVWPJPweTdrQyTXkx9drPLU7jmRdmzRAPhtnRXjMmvqC35qVnjrx2HBzMuLCVMzhJLMfzxqJoLuPiykTZphiq",
  "key6": "5UX3ZKkQGgDkd8CoAEC91U2rQRa6PggboumgfoVh4NJpoW9iLwRq1aU2A319Nzo3MT9xQXECf1Abw9y3pWwRLVCg",
  "key7": "5jQfMC5N3c9HfvTZHUQuvhTjzDRKqGPW2byLkuMHK1cXfDGDDaPpjPSFY5XbjKKbW2hBnnk8yv2WEVASdtWbuwHJ",
  "key8": "swLBGzC4rymiQQJcKKiyVTUZUZnpUyZtDh4kjpcX2MbUVCsY92J9cgpT18q4rW1nbW8WUXALK1GrGKjCzfaxCM6",
  "key9": "2zHFvqpZbUs1sHsHc2ovv4YwjbXkQU1X6iyiXxJ4J9LV1fEGN8rfdwnQVm9CUjdvj9Qaj63k2YqXjkUoV5MStsdw",
  "key10": "3bTovvcoe7W9kDQyGrE1c4okUwTooDR6tfn26VbH42ksDqFdRuWo389zyGnYKs9V1EkGsj8fE1js2hWjVPa7ACeo",
  "key11": "41N8i8N55Q4E7zehDKRtK3aMcVkWHmMmEFWHxHFPWWZPj7qdFxoZK1gqCxGw2Y3iuKCeLwGmf1shBGxEdYjfpcyH",
  "key12": "4FLJyS5LTqZ6BnNrCM7T4G91tSfpNVnAJX8h8goLpN3WrgTXZmZi5V9NRyKwnBHszpc3phntNQ4HNGAZsPM2NCno",
  "key13": "47dMbM9r36BuZEx18eS5EHZL2Wwt5MaJqsUukJ6cckbLbGaUBb4bGFPfk6uo6LNJ14QAr9QpksDGWi7wYw79MqCZ",
  "key14": "2pVZKrjQs5x7zB2N9ehLvSNKXAQioQvDGiJ1VpmXaGujoEpP5E5WoCn2eCx3TT6tdW7M8oPRmPGqCp39z5YpHiLs",
  "key15": "5nfpZvd1N3E9r8DtPrkrjgsZxidn8r2bTDXxxSY8RhYZaezzkbsW2oKbQJg8nj52qv3xwyWd8t2bmGjcZHok958H",
  "key16": "Jw5qW8ang1vmkLfTAGJdgHHvtqpm7uCrctNzu75cUS7shkkRFkM7uJfb1owJVxdzWRtauzerhmtunrwuzGipLZE",
  "key17": "37992VXmadUx1BtaVe8tzKB6TTTkizHKcgsEK9AA4y4fBtghzeixxjHYUqMpvbWGYvh2Mb7ZDVwvs17aTPEKJH2c",
  "key18": "62BEe7dYiZT4k7paL5pnNuvCi1aiXLNvnNiEQc3vADgK964Tsk37C2trzjvaaEiDofzFBpU7XWxi83A6xuxWg3wn",
  "key19": "2DhXmaMq2wwY5B1Y4CC4BjxgffcmzbFFgEanJJkMjJG6iRzEHd36xsAEtP6emNXZ68sLeQS2WCU6itT79AEBBD58",
  "key20": "cAmznnAuHJVVf3ity8tE4wRqa6HyjnoVmN3RLpHvZJEkHL16nF3Cr9Qb79BnABJBuU22NN9dhcmVSmVFbiDb1yp",
  "key21": "8shpsPZBE9p3XJdnCxXyuUP2AF6fsVVcgCJhofMzngZDN8G941oaJwskba7UCVSgGLTNTttWU1y9CvnidNtbYzg",
  "key22": "ahmp8WRd3N8SGurgmWM1aRXDfpuUcqRDUQYKKACy7jC9mH4oyze6XqPPUvNVrr4UXfto41deH9zqXNSPaVgEJMN",
  "key23": "NuDTi3ZPVw9p5rPiTatJQ5Sj3j8jPYojmD6oz22j3Hkhy3VHhK9Mpk7nNFwNcHvUVi14WfVmzB9Dnkp4PEpyiAC",
  "key24": "53KyxmFd2rfGrj8pkZ98Hv7HLiS9R9SLiJMofzZyk5md5eRHeVco8VQrb4hx72do9pgEpY59ibDrJCog9wHqZZru",
  "key25": "44DSVUY7JvZA4T4VeRDzjRByu2NzHw3m4QagegL6JX5uqPMtsp3ZopF7uXwFyUaF92PjhtRtpQX81Lg5Yk1Er6CA",
  "key26": "5gSjqpZPrpK3MXBqAbxhUrLZNndUQJSbVqQ855Zkeiu7xH3M9BKvJaT7PKkcoaHTuEfG6QJPQDzybuPqb3GJmCbZ",
  "key27": "2GGtBU27xSjJ7ZHLo1TDwY9G8KbEtp6XcikzvgfM86XQzYgTiyvYJrLbUukFVT33RkP4Wi2ATJ2ReNWxFkrJkRH2",
  "key28": "4khrN3rfx5aZbpm8X9FbiPVYPNvAowejhtKmft8YFqP7cFAq3o5a9cxspEmrwMMpesjax2BdsyQarWPa4JUhJHgz",
  "key29": "4adi3Du1xTueAkiNzNDqwaS7gHJYgPKks65KE67y1sMnwESiok1tTXKDFbFpSUVaX6NcwKrxxy2cyaqrkgwvjNfY",
  "key30": "3y2d7um1Z4fX984GoagYk3jSL1CBqaDqeMFymNPX4VTTvaftwZJKgbZ6TeQx88qre9u62GCqS1yWqCKGPpFxuzox",
  "key31": "2C8u27yBZeDPxFeSsnBW3KA6z8dkNvtsQcLFvL35p9UVnrG6PP3nSmgb4GtQxu7Js7Xcj8XTYjTHTkTKYjxhH2Z8",
  "key32": "2xSaVwgpiBsdATVSxQorYniYKPDsASNye16hETXZz19DUQLoQmUduXiyGLqEXPkWishFJR9VA625bTuWLVfkuWFJ",
  "key33": "2dxAzDMXfj9g6emXW4QAb7RxzTBZy3HKnqAVeUqBjjkHgq2C26c9rZuKZ9fdfCPNSZDu5Pe7oJFJ2g6yra4z17o7",
  "key34": "5gqh1iK9gXYgkt4PyEBHWkmnVUShRCgiPWenBts63WmEbcahKZLeWFjdetoh6toJjbqGChToGHFcbqHa6RNsQYa7",
  "key35": "5kSskdSApTgvqTPmRmwyHuxiAfk3JjA7biizvxuoQahEMHJof1skawma82kPuYQbtaDQubKFdmbGoTTaisFVXimY"
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
