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
    "3UustTQxdBomn51jG7taNDHGPPG7joJJFYs8wWXdY52iwYGqKWLGD3AWNhqRVYQkFTDnwKv5w8DJbijSxzJMZubc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkEaTDQcerNVyVeSZsWoNtghutMfPefsFiMConyNaab7sx7ZwYBATfkjzZ6VKsfsziR3rwWb6PEwFsCpMF4roRR",
  "key1": "4Zwrnae7rVGHiozeo6xNjb33Jvizbwx34fXgQuEqM7v1eahXJbjBehXA8fx5EEMEesRRtLmSpu7evhXAcsQi2iqX",
  "key2": "5S5btRermSp7KvGmRa13Bndp7E7y3EcRWqSP1oNnYSpm4FQwddctzrpPPTUr1rrEwz4kyH4bDgDvhd51r27FKGYN",
  "key3": "2K78rEaRNiU2X76Pcj3HBnzT8D1pYUk69UxbMBPWPg2oedacMT7R8YwT59zqMNFzfdJQotjHVx5nvFuyWjukbVTN",
  "key4": "3e4LJiuDhTUM7N2hHQzTG7NeUnjVUistKsbgXTpfZTHY7A4CZNe8djbTM7rKrLx8BUpBhco9LbxZAC8jvGRUb5An",
  "key5": "42jehRJeeQ4z5VQHET8mkDhhBCexzQNhKkFNtzpQtp3eACUmu4uJaSBWQumGWwSXrEzsx2ZEqLgygX5aiRY6g2Ja",
  "key6": "39t8rtgmuNCRSzSXcNAPcZ7JEGzgKRHgvwBCg6jNSeb9R6UT8ipXZBPyeUeWE7SP7X9FVtLeRf8bpf6PnQ7bjkv1",
  "key7": "26Y8c1C1ZswGuqf5m5rUh1CAEoV6E1r7Nbgsofym9VYgqQ3YnnqCD59hzG65kV7zuUHpovFwMPe93r99GScpfkNo",
  "key8": "sNWbEbSjxNk7YaoRrNDVjW5hyyCF3f3QdecRZMr6mHrpVp1hKXrnbrQPbTFxTphK2rz2V2s6ETkW6qFaqJjNou6",
  "key9": "3XmZM1n4E2iCFZPMJVQ4Lz2Pr4j1wP7wAf8kke7zb42ftaAH3QGSfkLFP8wmNaqsfVDVmQo4PEn8FFr26Wa2DxQX",
  "key10": "B8vDCnyzJwE2YgVAjkFG4kqFCRg4tFVFqVdUYZXR8HaTaAjvXjw45UTH8rKcDqbcvnYitWvAAYMxKDPWwqGu9bz",
  "key11": "2nMstx1FrxxZh2ArhPty8NfZEv3aVg8kiFcUcr3B8pwuCmNF6RYot2ZQxca9UZywddtyPwFCUnpwasKkLSCHqPD6",
  "key12": "55RayR3q3gY7wChGanSG6DLAqrA9YAH1s2bro66ohrkVM8N1VWSYRKepJWQG55SD6eN8LXunh5F3BWb9Z7eBM7oB",
  "key13": "u889dLe2MBFHJ8GPbnyPUPCTadTQfLhP6h7YSn2DFcKS8maXkSZvqsJQCmc2mFu9WtYMG34BdsJVVUnpzHSSfwy",
  "key14": "qbwgen1ihVqwz4ZPmM15MbYwXtjogihhUu5fRYFHWddejjcX5hkg9usXRX8hoVZtgPe8W1aLNZh6E2we7UPmWrj",
  "key15": "jctyRf9PzTCU51VTqS3VGtLsdtumCLrywJBDzECc5epPeXA3cMUjwv8eAiYRKUQiy5dLiR4XURgzpmpwV9mN7KY",
  "key16": "gTPLZQT9ydgJkPpxQ43hGs8BexXERNTW8JPwRZmSdLhi8qULM4guScTVnYpGJ3nTLqrGBQAaNr81C1ozKtKXEkw",
  "key17": "2TS2YzUMNfo4pFhFuyvG1hLppDu9Y3YC4bCHyfXfiL9bRD4V8GbvNpRMNVS18DoNGqZmTC49gSMTYvMfGvfrTdQs",
  "key18": "4DTS33n2gP2aQ1kWVMUX8ns3wATDp2oA7KQKqCVkUvavyetWC1hdfXgLySWDJkQasaiZLSDgzxnzUaR3xpp7ZNLP",
  "key19": "4dXSMXz4a8DQcLCg8YfYGZRdsdcoog3drQfegtCRhevNpE7aKmVmH5kV3KvzLASoo6JHuekGgvEVpctJNNfo2uBa",
  "key20": "2S2gQkT7HsRqY7Q9tpVaaEnEodjq5gZmnoaXho4BEUQEtp9qH5W6Tkfun9cvVi76uC88KVgZVfEv3tyxEZCK3p4W",
  "key21": "2yFHRv9GZrNMRVSgcBQNtPFsRj6vsgJ4Uo7BBrJbqAwHPoKvQmvAVVvsZrWaasmgWBuLd58azsZCTBiNYxzRzrcp",
  "key22": "2SZpuSr1E5kDkMmYFXTpFzTa82cyhMHtvkdEKrTL4kv9mnF3ENiPY9KEhF5qGaiF7uRje72UHQDjL8bqV1JFApiP",
  "key23": "4jjQSM5kJDRygMRjnpYXNfxBsdFdfL2xyFLBnet59YuPCqHJ7qsSBpFGDajmzrq7Q7zp8VUbm3ByjVSRwQnH8cRK",
  "key24": "3hkN9f7FEebumb7mVMS9K9RpCBYHCQvbQL14rxTnRMwnj4eMBFVpGTjijAtizqmeTxQCHZYuED7MVviBgad1koYc",
  "key25": "53s8roSPZGcQQkiPiKT8WLCGhr7pV6TQgZHh92iAMnYohxVrg2Rm7mkfZoDfxihRdKf2N3FKdTnsGADyffZN8nRH",
  "key26": "65svbrZ1Rwi5krwaWMEn8NWDG2QhE1wdnKMn2DznD4gPnCT6ZLsrteaNQxjHdjyvzjsASNHtXd36VMcrBq1WLHV6",
  "key27": "49MdER7gn41SeVUD3AYPFcb2foroqfAAiq3sNmWUuZb3c94ZbSt9sm5vyBqYSVxexuV3EEP3NjTfYpCDSoP2S1K7",
  "key28": "3WKy2fKMh9WUUsTFYhirV4SXPxmChzDBpTnDbyaLnU8kDTLbuDhkfketK4KnzdQ7sLuVfzDi2RkLVJAbUFzQFVhT",
  "key29": "JKyB8BaZjP8K2Da3bdQnFwQLNYzyzHFmF69kHbpWuWhXmMAcBJkSMRFYYkJa5qQHDVLMUxoLntF5FdS91YuFaWJ",
  "key30": "6NbYZwmL1czDgqUnVcnmCGtettUk3kh8NKcB7PiJuP6gqcjSC9kWZWPvkVyKNKzE8AcwDLfp1hy9RvtdmidFsD4",
  "key31": "4rVJQVeFxVUaUfApc8vwbv6EhS3Ewwrc6agsYXbkm8fkgAZyCYuGwAx1GnChDMdCqCxuWW627HPAcjxwvpriG6AJ",
  "key32": "5PQU939x8SYPiDYNhvQgyXySiQ78Kp4esLyBPWUrdjsbuC24mbC5UQ9zohyvMCpUshM3xXoQ71JRcA3faEQ1aFVY",
  "key33": "65gQBKvBVkGL1Dc8diErj67J3rmgZmybTWvMzYmAVBjECDR3bHWtp8MycJinDiKKAbKjfwD6VbKQAiTME671Phqh",
  "key34": "5np4Eqn54pZrT2axt3672zQkGRHZ9HGYXBZsGvrDZVjkzzB4X2KpZWTw4XGrd5oxj22sxLQgP8F13u18jzNq1gQh",
  "key35": "52xgkvRxR7urukFemne6YMyZeDN8DuuoZBNPar9PUfWf4jbbPsWvt4kKwrYFfGx1ES1KWgcMV9Wm1v7tW71pDcbG",
  "key36": "A2xwL7yDkbF3yTAAERb6UJbzA5pG7hkUcaLtXzuhZXUHaYo1jKVZ3f1kYAkB1WBZMZ8EXAFkdxc7pRwGa6P9Dbf",
  "key37": "5VBrUazWX9QEpwntnqLMULs4E7CZ8DmCKkFTp9FoGYcxbMpb8ysSfAfDu4aHFJ8dRjCh3RyQ5MtbRrCGikkE3dUG"
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
