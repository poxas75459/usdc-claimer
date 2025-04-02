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
    "4YMe2zRCqWzDmaywnj7vixDuHr8xzfPVmDm8i8shmCDPXRbjXZwNAhdwTQwgHrgpSBcqXCxQmkjhkTcWPCrghcwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ictQVRwEMF7ThgoRWiNs5ceaWUiBENjvDjMxx6D1DXTreHLvJnct5zLMDWth7z3yVaAHsNTcpJw4U6Bt9bvcVqT",
  "key1": "4dhJm9HMnSjbyiapCzHrdiGh1phd75w979xXvsCiacjnfoGt3isU1GAgVcDLJvqFdbSguw5AJV8bFMsB5AZkex1P",
  "key2": "36FWJ2dJi1DreM3jhgNKafHuCmUc4XqUWhSPCYmkAYaGrEiGUmXmeiAuCZWYgwhK4Qcc83spwjypdtDfmwRn8bmf",
  "key3": "34VaYDHAXSAmkDcVcS78auS7P7rXdANdh9yShX2ZhdFrHPZFmerN8XKRxthBJ5NHww5aWQy469eFLB8epoPe9Zdn",
  "key4": "4BMX3DCC9mkV9ew6A5geZALJEz3eqhAVgztn4k7RCXMfBcgwPjiJjXvvjUQxPYbYtWKsfQg1Vjjh2nb7mQYDZuwu",
  "key5": "2fmUytgTMfQDJuMBSEC92DuwjRFiwq5aMUNd56DXadWxkhzUH3BzpnZSxZf8hdcZmZQipRwJZ4bqnnYtsse2KPYx",
  "key6": "o79UaYDWHLmVNU7dTJBPxUUYkZcpK3hqAMzg46rCwkkzeuAdi9UBHR6836T2YvE7Qrv4rsicFotFuAUEUETznyW",
  "key7": "3NpUxkegUFeiTZZUwHG3STtJ13ErS21bKieXFUTT2NDTT1Z5ssbXcwpYpecHTvwg32BVp5b2UPYgCy7HQLf1CJtq",
  "key8": "2B8kGzXzB4g7aUGqWMNJ156z4Vv7gE1R8Jg15mJuKYsL7Hb2hhGUu3xcz5dFtiVhCGggD4549HonpSY5MMoL2zut",
  "key9": "2UF9SW5qLkF8DQ7o8UhUGEWdhT2FiN6jvbzDCzt9QM6dVU7uspNK6Sg7Ct9QCGHE4iLdn77LuE5n1NMFLpfncJx9",
  "key10": "3MX93bdSM58bALsL2wDdj72aqcTGW73LHyyj2UBEvAjcvYvteeejzmi1Mbstc6rwUSCFa3U8mVSSZkMCetdxtRg6",
  "key11": "4EgDJtd2cyRBvKUyActZBwbNY3y6JLvq316tJzRrJEuBNp2Cu3eqe1v7RPeCDdQ8anpST9pHBzAzpDKY6YmBVBcP",
  "key12": "3B3N7JDJJh1cvfsMyUQm3TQhZadamYXqQ1Pt7rPRGE9S3S2v2vHPvF7o68R8LHymbXmn1eVtgW7y9GF6pjZvdKjE",
  "key13": "5DsC4rV9zzDS3FekuJVnuZYx7uXtbL3YixaSvPgZ1qUEni1fZFbRcnfFoC5CPmBn3JUUe1xvRY7Nom1KvrHvk8rx",
  "key14": "3crzLavx6wMifdh69oFX2AqeoERvKZQsG8KfGtZxbCbhXJKf6NC2UF9GrTS7CKsbtzWrhucPcs48YVbNaHxZvUBA",
  "key15": "5nKErUzPWL1sP6P6KTin7myvY5i1TuAkXnnh4NxgbSyioqKRYWG2gFhR3S6JTPSCnvkpQmxGKcZue7nNBKpJXQUk",
  "key16": "2SsNTb67g49tTyUHZTHQs1ZhX9fmhgAfgugV6Ej4jWDn5E6X1dRRn23qMcb21AKh6HLLMDgf4c9fQ3Cj913wtDY4",
  "key17": "2fKoYizm7Eu1Cm16V4akBrcr1h8axWLQ6D3VvY41iYgdEw1it2gKqC5xXHWMiFwvpFkdmpEmuWd33pVmDinPuHwU",
  "key18": "5qcmoBSjnAZCAxFiyViRpb5Lrwi9M76JFSCHcjzzvtGtqgKj9sHMcfaTxEaBjwErEpnDDxi1pFix4WWmrnvod2Pw",
  "key19": "27y3qEiDnEqDobm4XVZP5qtdDDA2fMXWZRMokeEf2pfhXCz6M2ZdmT93z5uPeQU6TzW5RQBnStrgV5MT9TFrX6Cq",
  "key20": "3m32brp82pvHKaoDBggSwNJtFeGDEmTfK63azc6AJkm5H2cnUtnhNKBDbBJErdB8ivJoMSN9dHncyJjxH8gEwdGx",
  "key21": "2bn2UyuD7dGbSnmAmNckFGnwPf1dk7tatuXMMXjamCS3t8rHQxNafhqNrRSK3VC473xU99CLHCTdwjDp5m2HkkPs",
  "key22": "49ArPFTQ1DEYM2Za7QiiTYVJNyP67Au1dCV5BRwVgRhU5r6EB4NYq1JAC9PmEbP9yf8nTsa8ip9RsAxipen8Hh5s",
  "key23": "4kq6hrMjJMJMmev8mGooaDJy2WuQyYtYMUN8C1cw7eLvrwT9en8phKBDPfVT8fQ35HEKVT4ckeHqdmqRd2taQMoB",
  "key24": "4Pxno6McNkwk5Ag5CbAhRPv97e8dvcEq8rZcRwZ8pRyEav7sBWwYmbwPp8x2QNNjX8o8WCjG6RVJjT9ZUQqnxPy1",
  "key25": "8gBA1Hf6yExEDFicU2aTkSj7yUH7p8RgSPU9V4X5tYjubmiViDJdAmABkoV9mAkjKg1JEWMwTgTtPT6rWWyRTaR",
  "key26": "5vwu9pZzQ5BChksrSN5oVeQ5wTYfWHBsUfFdExh4QFV43RVHoeW7ZZsDWTBbsR9FWG3tKRa9Noz7g7nuwoyAfq4J",
  "key27": "2qbabDHJpyRHTnCuHqPtoH2BXVsFccfRyhGNfRtfZY7HDW6E81pLB1Gh9dbQGoEJQU7YuTE1g1NQysK6fbNi7JZC",
  "key28": "27ToKgRxMB1eTimGhg6HbXvcyZCxHENnLzzimgmTJ8Zvtp3erhjaVse6BrG33i2rdRaRbZ1yx4AXdUH31Lak4gVn",
  "key29": "mjwPF14aCfaDuV5mGxTRFRVRMtGhabeR6Hh7Jx43ggFwXzoe3tUuD1trtPR3ZFvxqC7BVDfpTBqdovR7w4vGFMb",
  "key30": "5GmEouNXrXjo69Si4r2JXQrmMsediq46NYiHCvsTTySttj43pwdxEWKCVBXMDB2DJjZi5qLVnz1VGffnSNQxvKXW",
  "key31": "4bh5gCHtYQ3VK73zgwYxuHwggqsbzVPVho9zsS1RuGLGvqNvTsNjLaMQ97FJXuBmN6fejynhp3pCWwTcx29iCC2T",
  "key32": "oMDdSvzDmsuR3Pgp8Czhyg2aoVadDPemURkni6DTsmDjW247bhWpk6xEKKvttKBEyW1UMCEkDNfC6dtzJvmPHsk",
  "key33": "4hT7MisCxavSK25bkruTwgGNq2w5WWuMNa5fKRxdhoqHGuAxAL1nYvUnDsjZWDpxpWykPn7WnB6jEncSmgoV6cwD",
  "key34": "45ZDQPaFHNqz9qgHrP3HxacpPjq2BF1bMSV1FaYfvTSp2u3DC18Kaa2SsNiz8GpYSa6SnNDvM4AkAUMQ6NpBcYsB",
  "key35": "2yDngBLkecGf3AKXGXJbT37ebUezYYQs2ikNu8aPBRuJN7FaTtsBUakJBLGCmuJBQCC3HxMhxb9AcYxy3tERQxAJ",
  "key36": "2542JjZYfrZUwbsHi4iJXrEeFUhiC7NF6V4Ffd9GkqzWC8aYLbWVgQoV7H4KFeVsHJHjMBP8WL1TZTVCEHasiGF8"
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
