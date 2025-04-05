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
    "3hLUH9EvEWjiSXvR9pxeRbUoeV5YWxbzYR7MnQ1aGSopd5wAu62P5d1z4VqX7Gw4mHybwXv5i1w1UiQweKmYfYmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwvPCyoBJY5ByHNBxVFSGCww7AdGfoi3HdQYRxHdjHzvufh5zaRfTGKXiFidEkGbAUkAMQLyngyCHJuGdTj6SWT",
  "key1": "4X1xKMQdmth9PmsX1yBrKx3rfjur1kSByRtihyLVXYiCo49PJW2LKPe1pLcbK4dgoT5KC7TGgPjLF5ugUHtD5Rrn",
  "key2": "M5o4gJ7kVU8hW9RAoqdE1QJ8eoAF43AUKmDKsFDZ2kfKuXCwp1VpLYLcFqche7snrWZiK9XknfBG6rHJ8us98wX",
  "key3": "3G7wvqM8VY2HY8Bpe3GhgPp3Xc5vDNAvuYQrMq8WWyisYjXr3NPcULjz4JEzzvva1iQgP7btCnEKXSRS3u8LJNpX",
  "key4": "3JsCPqs2tr8vEpSs4HDPoyiyNPKj9frdqvZpWD2oXNzUCCSBZu3xCkSWsGDWmFZCDRZ9cHVjitTBRGUMfJmoPp8w",
  "key5": "65aHUi3siKK15wxfPSjSfoX8BLaz2vpLBKUW7byQUj5ZwdZdQey3gqVM6pqFJtN1JPRdgG6S2oQzCURw9bPDJstf",
  "key6": "2kG6zCqnGPcwp765VQTRUARpoxX2M3unbfWCCNLFQguiAr9WCTPtZ76sRLjVa7eWfu8RvFMbncLc8qgtbVSaV3Yd",
  "key7": "5qPo1kgwNuZUsMUh9fDvqicPpD7sJuA7ssrwkJvaAHmgz9Kube1emFb4trTKiFQegXYpQLWtimF6SXy2XKiNoFdS",
  "key8": "2sU1C188hFdALxRWU8Wr5ZcwnGkJKDrTj2Lz5iMGTwamY5nghNHY92A7mNT3XVW3dVKag4fuW2PYuyzmJwUYfckv",
  "key9": "koZmAnyEEn2ctjex2aT6W1gqVDpzYLaLYdKBK8rjmnu8oniQoau6QFKBP7ETNWc7ptxn5N3Nwohyz7Kt8NUqT4J",
  "key10": "4cazZ12FuPaPjfHioo3wqCwd4zi7uVYbgY1mp4f9e17DQ4yX3NpDpXK9Yhx3cZFtoBjm95F7Mgh1FNyxvWQvzRjK",
  "key11": "4vhndDd7WJzjH3ffh93s6hy3cMriH3UsJUg1LaNnFghowUQDo8PLj6tyY8knvEdTbQKzMSRjoUPG5hHuymLF9Wxj",
  "key12": "2Qhhi33n5YxZ2y3yjZCxSQohXazQ3eRswhugTdtiNU6WNEavYoPXesdHmea5vghzWm4BTbY6DA1LViSab9KvPvUC",
  "key13": "3tLncwHKD78AbZv2FfgxLCHhJUbMaqPeaDXB2NwiDgTjHEKNRTq9mRZvUqKUZU7P3wbT5XLEEYwQfhbNpT88cQoq",
  "key14": "fhX67RGxWDkipqDByyJuVYcuWMjxGD8kYBc2uhf3nqi1WgSiX9KRRay9ucAJW8Po1qpAUckWX2rpPuiYgM77MPe",
  "key15": "3W8oCmXpkonNfYqaPCpfy4ENyiGRTPgHuK9MUiEd9rTNzXCQ4pcqEZRCePFWU5FRdCVBrpxM1UTDibgKFgV2KQPn",
  "key16": "4wd9uEyG6LGhw7xDaUyv4CSRvoG5SjwqTMmYzd21j2sdrdwgF7vjTHpiVq3LzjiLqqn9xZrZ175xupfa9FxwmBo1",
  "key17": "62fsHJ14qa282vGWHJfe9LqnQ1PGMT5hcFYw8fy3ayqy6R1b5n5GHkrwbLwCStNm3tJRUVq9iypiz748TTFeLRKp",
  "key18": "b3eNxD3LL6fdbjsK2MkxmVUwX5CohUrJBCGnV8YjS6eXfHq3ALo3ZhWqzCaBuNhibcK5BnEpQJDMjiLN9JrCS1s",
  "key19": "wNuK6JNzhXfrZPNMkiCdp2RL3bFkGYWpYXGkXdRwbByYiAUXfmcYJbVnkmxufDqBLCoWpVxsCgjP7B9URzrwGpV",
  "key20": "5nMHo8B2m9mHcdo4LYPPFtiK2Et8p8ScY1wmjXwvxcTtkUkxc9udLEMhpwtSvmCytZcTr8vABM7HM35Wt9E6jk1j",
  "key21": "5jppAxe4L91fszEhXKka11ZepFbV7wtXoTB8UgvCXyxjBcgiU7b5dgPgU3JB1SyKRR8V7zFexqzoeeETqVAakD5s",
  "key22": "48rKEdgscS8Y5QFx8L533jMk7MKbtVDjDmBV327UBMp81aiKaBcgYpF3aadP2HLWv8MJoLnHyNbZvcpHy516ssW1",
  "key23": "5iRei9mERYThiUXuJEnEsud1vs9kPv5pBBPCRDumUXwjSnEXSsGwZdmABPwQciDcyieToMb2Pw2Hq3wYaNbTnuQc",
  "key24": "2TaTFuZ3mW6dYC6L8SS1k8cC5uf1NFC12NvLqJ28K8K9aqTpCa8D3QHpWr5r4pkygPoKz373znP9saasChf5iGoA",
  "key25": "2S2qtUPu2xFBrwjrmMZddjtbgGonqkt5xBCQpQhtJWkksecjSNvLoBysb2hu25ctb334MZohF5maNqK3bm4YbG8F",
  "key26": "48vMbeFJiuNUeF3iYCQoDqk3wJhmHgMhQsL11A6PG5t7ebWuZ5gHAQ3Vfiq6xzpTShtKmjFYe9B9nGLugh9iCdn3",
  "key27": "3Cnz6WyUJs6xjf5UbhJ65Xc64z4igAgwhiYVFftV2vj3sRXGryBX3erEAVjvS21xRHxzBfLJ6P8aF1xkhWnaWuaL",
  "key28": "3DFn6XSUMCYDYWTbcUceURERMfu8dxxiAQg5kQ1ZVR9X5jTqd59fdso8BZUkdPY6n8q98LRYMDFFVnRgSM72cDKN",
  "key29": "5Rgc1xSRN4ekaDcDk3aGeZgWwjq695KeiPPNj2k6WgnGdhuyhJqtZbuHWSxyLfq3oL72PepoMDPTAKE98kx2Vkkw",
  "key30": "9gPgrCudD8dFpchu5gLrsCoPQrgrsipdnR2fqsr6KfQ1iNkSPSgHYnPEjuhZgrBPZHF48CgqFLcV7tiVVGNTUFe",
  "key31": "2WdDR2yHx1yjJiS1HcFSyjBv6TLgcav7iMcVmK8rvFjR5XtNAHrtVn4X7ByjMxPBq3P6HFDFMoq18jspqzc17FfL",
  "key32": "5D9B2YSeVjuHwA6N25LBCaiJKMapVozmf9NtK2grgRBY8p6ik2kS5Gw75RYGtSmXoMcx3qoqWT89epgAXnJcMYVo",
  "key33": "3pNxy1zKsSVo179Wpgi9o1jtbvN3vyu79Y3pn3D9sSb3nNAAiQq8GuEBw2SFvz3XP9CmksvA417aProgATYsXwxi",
  "key34": "3VzzfAdUynfYWzDBKZKGmZdtmufkvvXnk3CzBpe87ngzc7f3pJQZhrqPohzUrQBf8Y3W9PgfaayjrSuLvzHoE5f5",
  "key35": "54yCyW5dBnKZEb8KKthWekxgn9UDYLN4n3sCZUCcpwTy14xtK2BjSs3Uw7UwU7jU1UmPRXCdtKqHXu3u49QSr4QK",
  "key36": "4Ccei2Lw2QqUWooboM2EGkfaMyn5r1QwD5qPbWgsBq3HnDaogqj3opAFC2ZqmosWSPNe4pvQpCkdDehEA1XTBSv1",
  "key37": "5R3d6EQFmBRFCi1hKRZzEk8Z9HYHPjzEtYoRiw9ynQk4UFFscyKD5SoKfFswAK8aAt3Skk44FCfhwXNCaq4mhDkR",
  "key38": "4G4BLA7ncDzrGfUi3AMyhCZFL8h6ujZhaw2SZU438HhGoz5UsEhHHKfJaRZui9tWYfiFVueoCHrWx8a6PoLMPYBH"
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
