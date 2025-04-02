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
    "5oRnGJFSn91Lc7KyvHYUtoaVjuKcRtZ8G8zC5QbZcpLnDm4wjQSkHK6WVidPEMotLPu4XUtuhKaJVgzaPkpWVdPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAB9sRk1GJSWEKBboeHD6QsgrHcYFoMc146QZnUCqJLA25Hh5nbAvWXAqmaAs5idJzzXDR62CUdnCgXRLAH5Jhd",
  "key1": "7oeD6tfVLXPafMW8Jfjkg4kZkozq6gRyCha7aDuY6M1hiV6KFPanpdbiRPykGhmDepMM7M5wAHJuPc5j9tEdGZJ",
  "key2": "35HU7C2h6Ek4SbALhq63cAkxzu4npwWKUm5LbK7HuSRo2emwQ5fu1VfH4vsa69bktPzbB26jHnkAtwdLnpxadozq",
  "key3": "J2XiGvTgep633w3H6yi9AN1xy9CS6L7JwHXvWvbKxeGRXCGcJ3sGwkcHSCqcJtcSTk2bPviGBgCQFWxc9j8HuSf",
  "key4": "5vDAB3eaAXEYCfqyHcsAch5SazbxeyPGzF4G2MWL6HaJ6WRSnp2nKHXuSGjH3D5yHHM8gzD51pPATdT3q6GG9pxu",
  "key5": "3hKUxWSprwLz3oxde7X6SWF6YRr74ZY5WSziAwADCnxmyAm9jyTiYq85gL6XmaKR5eqy3G39W92suGWqFqgo69P5",
  "key6": "2HApQVjn7ome4HgBpcYBq6C4AWNZK3dWAzF9tthdPFHs5kPhKv3iqJnfsphjFujMxZEas25SufoVLFTBJxdPQ9gQ",
  "key7": "2GEX7nQV5f19WxB996fbZr626sHe68quRY6Kv74zGD6ZJVoXPJfA6Yy74z5KaKCDMe7uwdqo5A78JHtvGfHyHh4M",
  "key8": "2zqtZv8a7v9hyApSuHgc8x8YL3mWVQJQ9DJrDL7GWfsQYcthQBaDWxaJcRitoqR4JJagUN42cgv8QbpXYMiP2jao",
  "key9": "4Dfdf9otTdCLpv9JJHYf7dmuiR1fCCy61RuCCBdDZDksR4yBY9mQm5MdSfj6cTT5FG5KeyhGv7SAWbn94vrvcDRY",
  "key10": "5gTqfMgjFeby874fovgxKmmYbFi6cwo8T9pxLz5KUgyNAfzV7xdMufFWzg1dDVdij1L2bKASoN76MMXu9FQJxQVY",
  "key11": "4LqnF9WBmNpGj13ce5H2r3zGfzjGXxTUbLr3xVaNNh7TgVJxjK7cujPPsnRR58Gskq3piSJ7tHP3N2fCGiokMP1b",
  "key12": "38xyAgdxWvmnEMgsZekGWGzkKZyKMaLArvY9pnxiw1HSNHcEu6PYzSfoi1oxLN5iqM4uq7V6v3N93csVihJGZUni",
  "key13": "2de9mMe6smR3cDC12nsiPKtVPRGJmcgFpexzRqVQZR2CeRn9eL9uDGrCfHUXWkt6nvJTnNuvgWBoynVqDjNBNMgg",
  "key14": "V5FNVAUQkaqCYoH8xzfcNKyqZodLqkVThducH4HCCaw274VwsFo19TDjKtBF81xrHoAn19HbBgcp87mMPVFJpiF",
  "key15": "3NgY9tLbt1dBKYarVjGYKdUQafMAJoqtHjxxq1TbFRkkAgDroqgA2dmUYTGKzq7MgVHFzDn69QoGvCopd6yc59KC",
  "key16": "APXWbjLZSjYm7WCKqdTDD1zV8LeKCxKv97r76GYcfG6dk8s6SaiMmJnVUs69ybSaN2ju4qnTiBqJTC1ozLNn3xn",
  "key17": "gFSpYohKzibX3kejikPqb6o9cQdC7dQet2Z8GkwM2V93WAxmCwM8i5SBizxXJGXuthCFZYnxnxDJBHbnB1DFYX6",
  "key18": "4mdhbqnG5g4SXJT2eBXMjK8ZJCUJz8cH7Nj6hvPAQ6m4aqff596p7MCsjYPMmeGgXCyuFc9uYxkBRii67SP6oRU8",
  "key19": "3boEGNngaSrzADQQM7fj4XDc6frfkXTdakEeJ1MgJuXWnnUaguHv5VHALhwBCDUdGKtVnNnovn3qkavz5hvMnzWC",
  "key20": "2YeytNkH752rxnfCfCG856jkBG82XunUD1yXih5qroGMcczMwT9gfTKbcfHGnEq56cB5Y6oDkuEnudaKV9ozbh7A",
  "key21": "tvRTNyfqT3Fcd3dsJ8b6jr1oYP5N1kVZ9X9wpz9wSJv7j2B8AgxZU6BbEdu1KoFM431aJakr4yzJRKntMGpq4ft",
  "key22": "2Ft2qiQsn8Gk7uzyvdCqHhSGiC87VM49kkjnjUSpwCSJsxDyepzzVA549s1tXFFdpYGKKaNtj2GQ9GkQ4tPr6HkE",
  "key23": "2n92s5Y4EDL43YtEqN3kuQeN73BUmvRVTh9cc2LFBEMqHSXZZa1yRpB6TPrec2uWv59zXS1eVUT64jASRJZTryB9",
  "key24": "4FW84RV7R67an8P92udFLzL2xNVcLoraJ3jdi8uzqTznTggP9JqHPxrFj1Mz3LmtrPH1XtFfieGPU78NmShbZ5em",
  "key25": "daZ1T31sFnUzr7EK5rpMrukP3TtA7eoyb8xr27VGBGDs1CbgB98e6VmvtzzHK8uFJmzfP8uQy3pgrjRhCRh4zHc",
  "key26": "4AM5MvpmRgYSkZXYLQW1JqKfAuMnZDZqJrLTiE1aMKVYy5KzXsG73sQxkNQ8SuVBKSPu4cdHr4in5Qn3jGA9rqLK",
  "key27": "62P1n4XhnkxcvBXeQVUB6uDrYWP843sEgJqczk6ibkyoqEuDPiXkEGwdCKqSPFLcDAFgVGGD3VrNSmj7Z9KcgvGz",
  "key28": "2AiLW9vy2vTjtjcx3xym3EqSVrW36MBh9W25ZzH649Dd7LnGPtsqRqsrd9GwfrqcFSiknA29LZNuyWDSYRuEGaxS",
  "key29": "2kgNVJPRJJG4Df8d6U428VMZ3AeMoYvKgFjRDoAzSDcevG46tEh2fVLdKLkMM1EQMMRtg4fDrLVLgT6i4UX8j3Mt",
  "key30": "62xjf8zt8bf2q78f4B7wqPPtudi4JJeRBf5QKBXNLqBq5U1cT1oXW3YvmmgvanrzCCDRo1ruZwkmPpiGZ8CM7bk",
  "key31": "2L3cQr4RDciEdUqHYG3nT54ZXic5t7gWbfa3Nm3edCbBiRDqFVX19A75geF2meVwuwgc67x3wtf48FNwpW9o9bnE",
  "key32": "XDZkbKWRPPVMPUsvyMkGFDuhfaiK1hPMHVYbZncHrAW9qwGu6nr7h1H1Ztuqud8FAwjBBxWqt8RnWjAUH5phJTB",
  "key33": "hj11CPe43LscTx69hfENqRowqhrJSyjg6qA89UKxRxeVvsewPvjPq4gB18nFBcJLubH3KVETCHzDy99ZEcpmPAF",
  "key34": "amj3KcYiC21pDh9NTmfZiwu3SkrhBpgTjyYnPL1ezX9FYg7zPK88spbTswfRCdLvB7RmPRCQC41JUAjCUxuf5Ui"
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
