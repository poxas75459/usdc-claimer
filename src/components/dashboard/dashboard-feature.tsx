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
    "4gtD18VR8LQEgraQiECr2jhBu3DVFZ6Q3DZYrE1akXXsiy2rNY9w2igjivw1kz5oaPmcsirLkjDAPhYmcvVNxea1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPtcN6XuyHTbDSih2SfxTzyq4ropJRaBFrBtEeLz1TdQG433CKceAT82bDA7QSPhu22v7aFSuYmxTuJkmpTLH1h",
  "key1": "2m6qzZWid59kPkzfGuidx71wZotwQEGsxoBjtfH739ndvisGvY1LDaTuarEEFzqP6Tzyzhvy7jPBVgCNpvA3E6ND",
  "key2": "4tRYV4PWtaH6DUTWmm3bZEeadGV2cztynnWnA3wrLjZPf8hE5b7RkXvR8nwbuJV94aguUogKwMhewcxksufzgAYN",
  "key3": "yZHWjeBDgv7ELcJwRhQ3JD5gdxkQcqf8w3EjjHC7omX7VUs4xywxe7KAV44kBb9LuKzcmaKBnA9LprffRmLuvsh",
  "key4": "3z1m9ZRcqExXTeL5s5w52xhJZQnByjhMjhhuL3z2xKYv8GyUNgEHMHmNuoBhVBjGU7f6rPF6y2V5DGVk7mJS9BE5",
  "key5": "5wYV45kQS9fKQFppXzXLnny3j6aji6ihDREa5S1qW2BpzgPcQ8uKvREbrcRWFjojgV2EH8GMWm5UsHVWwzcEMSkS",
  "key6": "3TgmPU1WUEevngzZ9En8kNKwnfXb4nFGEFzY7n1KtmJsXbw3K59dTK4ForvkyzJXTLLLVc3P1dxsZSFy7SN2jQ53",
  "key7": "s21G6NjEgd65TvDAMh2bti4VrxfTm3zMkp2pPvqU3jkoPiuRDQFj1PyjNS35YfpQ3tDFMu1byUMWfMYbtMGKQe6",
  "key8": "4GtnfL9TBgLySWu5E6aTgcJa8oHwjjNSLnwDP8tgmXtmRYmfnaSefP4nPJevSW1DLTVG7A2wVwUnAMwtqrdDgAPW",
  "key9": "SBdm3bu4DNfupjczWUCgWcmfWbyQtYQQXWXSe2NBtZXqgESi47ZHLXMqFQaEBpUmqNgie4Ze273he3pnrAt9h7H",
  "key10": "3k6NWCK5c8dbWMhJ5q1SJo2GUTaKQ914x78FDByGJF2NxYMKH2LtMHyfrx3H2rJB2aNMzoryRYWyUFGuUXJRDXWv",
  "key11": "5DXCFRNyp3yufN5BrsYEXfv2ihtx7G2RUUZNM3LgMs5UqaRSkGu59UHK995W6WTTKMaMCfs1JoT3jKmXPuiPS85s",
  "key12": "5AAfAkzCNADRic7HEpDbZGPSwtVezx9iRnHKcfECoCx4QbRNU2mKckvB3Jbbd3uYbDMGzdmF6Fy4bp7iANcnrvFs",
  "key13": "3fRgPQpZzr82LKrmabxkYNzFPb2ky5BBK6A7bbpqHfNGwJm27gMK8waon1LJHmu3es282RLuFQ1znpjxDwU869Us",
  "key14": "536cxxbF1SJLvqAgy4MQJtcX5FvGrh8zmZX6hGVNTsJAKPvgWHFbsQ5qYLZpiWUHS8cwAd4Lh8kGx3FqgwT8Npot",
  "key15": "5mR298a9npBSm3sKQEHrRRtAfX35nTrQh6hfTaMN2Q5uqHP4qrPu4R1Qa6GZdgRLJQBkSGiLftWvxRWJvYUioB2V",
  "key16": "3ea7rHX3KYQkFsqKtbu5aoDwA8LRurFJtytZ57rBzRvyeehGULGMH3TbQfPbYGKTPegPvmJw7T9CR1SpXHoYjPPw",
  "key17": "5fynCHubBKt6Mj8ZAv3u96gwCJcN13dn6JHMhtW52Z3YWXQKjpP1pfSGFeRN68bHH8p7wiXnW4zryzkd3JX5sJBE",
  "key18": "3SgyJww3FENdQ1DD1CycuNeXjXFL3NzEKoaTR6LiVsqbhUcAQdv26Eaqf7xuifp4bMzyKcPkzzhuPT59GW5pFfUD",
  "key19": "3DiS7KTxyfwZZrRMuR1xEs5GhV7mCa1qBnoaEeb7FK1T37dJUa67rPPCDbGfLuEAVastnb6byVrDF9fTm1pj2VuH",
  "key20": "3qCqvsjbruh17kZVB7EvS2YqEhMj3S3BASSxkRwW1GqnPyUuYifU8Wo5Ps5a6gTK2HfaF4fGGjnHu6B4L1jLnbju",
  "key21": "vQUkWRLUncyJfMKaa2iagvpMVHuqgPhWjNjFTXknw2MTh2HRbSJBdidd9jCSq6AvfdnRASuha2GN3u22koGmQdM",
  "key22": "GvJBCoAuFbguCirHzDB58ZzDciPv2PDFLmp5NQRg9D3LQXDCAiuDg72zC4pxaqBpPNL2GGmzweNrpRQKcxPFq8C",
  "key23": "2Gj2V86bVmDtTkKhvzPJqn3WtoZtfFFvXeJbJMs1gXgUxsFoU8f2LMHmkdve6UYRpkU3iyYatjqCFjHvfzCnCHgP",
  "key24": "2PMLtUaWFTWjUKwMRfLNxv74G3BBRAhewYmVHJcAfDwn4Ep5HWjaixg93whKEiB3GmR6JZstLSAhZx1iEfgWueuW",
  "key25": "3QzETp9XrrP8P7yHK3CDFSHuxpkhfAZqLPPiYdYcw1qdnwFNjeWHYobFSF6uBVZRg6SJkbJsuVQyoWBU2T65gCk4",
  "key26": "2jyAAxyYgnHFsLdFLnTjCfF4XB2dpS71Zm2gE5wwxdVq2AbnxwFstkeue2x9wLTJtcCwBLUNoF5ZvGHygRr2nFd4",
  "key27": "3dhDYpaEd9gnMPWLMhfEerEuxhgctBQiHJ3f3UDzwPdUUNxt1GWDUkyNNWNM23U4Mh8WRtaLvjzTBokR8hgmwqHY",
  "key28": "4ktnyRtbYkRcQkwB21Z6m6K4JjMbzeyuKwcHA4AF4mEdREbgqyj2eeew9SxGNn4bdcwJAbShFB1T8bMSrXvRMnw2",
  "key29": "5C6XQpxdP287akFD1sbdMsZrWPXPUAJ56v7L3hqWv42uiqyPe3mYzNYxdsb8cSeuNBbTpeAdYqZKgdUXZTjG11uU",
  "key30": "3sPvcZpSrT7QDaWtHgRosWbdsb3mVLwt61FmxTQoCHXASSxd64uN38LDnqGib9J1qZy6oaCpvjsdnU3bQo5BfP7W",
  "key31": "WELS7FTcF6mbuX3oPck6xRGYstW6yyxz8PngvvLdWjxvaJenvbhPEoZQ4TMz6NkeQTCWG9MZrWGNNUHuMizhZZm",
  "key32": "5DVaywdTzuLKvx2uDJtHpuHikSkxp7yxoJr67XwgLuDxLPwMX4EGQZ41fEUcJcpeTmEamdVcrMrchR2CzodGC9Ae",
  "key33": "4wjKLnAez5xodSvci5spNgHFYhyqGDSnzjqQvMNs9LjTT9zSWXWtKTXWtE1GUaq1Gwv5zmRmYzMpeMBUsVngUA8P",
  "key34": "3gghJhyFCir9p1ELmvDAmjQyDtwfL2ARdp2xBcAC6hUgZeuqKmqj6zEf7dxW2jnzeEQuHTaqS5yBvD7H3H4aKgqr",
  "key35": "2WJofsSaLnBTyoM3jkSvci5UXAS7wFWf3zAdcvhVjhQPKBoEnMk6oZ1DyCqnSLwDnZPocepkxh2W3QvqKQmxvneF",
  "key36": "VHrDyFnkdrxswHZS5RL5Qye67kvyVFRQqUta3LPf4eFJ7D1vKmnvUpdWy77yRY9ts7PDWtid3FatrYJRqgvRinD",
  "key37": "4kzfjP4DjAtAWXnG6FSafrwp63Nt1pkGZUsopC5ciJvxdLUh4VCXL6UpFPuyy9XtsB3coUMBJ1VEQfu1kA3YHXRf"
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
