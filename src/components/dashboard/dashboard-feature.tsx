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
    "5R5eMmn2JAaL2dv6i5uXESgkag469UHSgiGhzyejGC3mE39UQh3c95T4gGFfT6QgEKbqZw3eBqPLiSeEXdPPtRZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NUmoawk4mMvnjR3kXtgmMwxiKbGdjuYEBojy3xYbePpMkVyRXmPrE4TtdBvijcDEzQMboanu6nTT5t6UyCJ6vXJ",
  "key1": "Jyw7H5dGWfE6irgGoWAX1BWnttzM3biN2vDKHu636mHFz68PjuktNW233BeeKWdhodfzxvqdbMRrkfu8qJaJTxk",
  "key2": "qzMtc1MyDyWPxLhvYgeBqjay2B45eQW8YBtcWvhrNEDNBDdP7gGaDiqHu5ycL7rhHfHpcPtJNQVS2q5JZz5UASz",
  "key3": "625EkwtvDJcnMGfx8mgXWWgp1cosvVrtqpg6KMqhTjGrh571k3qwe9UvvrTipDP3EzCFx2UuEVDXNwBsAtRTSxaY",
  "key4": "3GARUhZuCpqpAKRaq3yytwAhFL7Hru3WmZTzg3zJoN8yP86Bjf3akBEzWRRnhcnaxSxCseppkRxDEFmAZEq69AJR",
  "key5": "4LJH6ikFDmJjETz1YBXpwQx67BFrEkPXCrnutQY61HfRvDfTq3EUAnwiaJUWSj9nQoMdVNWBiLns48QeUbNS2HyR",
  "key6": "38RMpyG7nVvh5VFcMcpgPUZAVH49guY6u4kqQPwtyNN3BSM9NnqA6nBEcrYpRkwGdmRTg5RDWh4jEaP4b38dQppk",
  "key7": "53oxJGNnhypLeWnhVNV2V928Cc2P8MTUVBFaFoKZ7kq5s4GsJt5q3zxPLTWWKf8mSXzBFu2ck5nKN9X6dEQgD4Kz",
  "key8": "fcfqS3Cn4Z7UMx8qgK5QZskqcnK149FhjoGqpHX1CBQVjPPn1uH7smB66oD2QPBfvTH5h9kAqrjVZkBNKy5X99p",
  "key9": "5gt44ScS7ibtDpAGFouzxfR1ww1Ky5BkNtK4LK2rjtafgCbkcfN9cYRLJeoaYoi7wiZPCB5doaDisLjhZUvQk65P",
  "key10": "vaXoEbqopLujy5fxpKUvKgzoRq1MsCcfD4vSUuP1r7Z8KCWP8ocj9G5GDVhqDUxw2K3yXJ8HRRFWpS2UmdTxfsQ",
  "key11": "2o24fJXvFem6X6YQpEFP5SfiuTe2BTf3uKUt3eLg6wgE83xMc49XTg7yQ9mSP8SqsxU9w1DyxKLbf7PHcvPzv1Zu",
  "key12": "5BE51i9QHXiiLcTmWMRGV7truTR1ZsUtCaxp4mw4ThH7JbEE2kQn18cu6gTSXGxAuXLaskvo1mnLAeWGbcPWEMbU",
  "key13": "517rQYksibVjrDq3HpRohxej3TdfNSWALmLsAWJACz8k6CBX3WxiKoqRsPZXfxb5646v6JEver8cun5kp3EvQqVS",
  "key14": "n6CsBfrGXbSuLUJxCHxdVjXwY9UovNEL5jMy14nrSnFTwrsiu8XEo8QqcHUjA5kaPmhhFHXdJivTTsHMUKLXv46",
  "key15": "4XjQhzZhmWbyxjGuxtyXjCKqJzYWyLSvFnTLd2wwLeVyh4b9ePNMPwNz5Ak2xACEUZpyGNAKH3benjSMgVSphUFk",
  "key16": "3gWhL2aYDkjZh3c2weLyGG8HYpxsmGqaGjwaCbknPurNnTng2GnuhNpTYszZvoZTmyLoPRBjvEuNjCEXt8L8tLjR",
  "key17": "2SUTP32eWfD52NV6xhjbDB85kR7B7YQd4pAHpyK6LdSZtYtG4rB1haAkMRCWGapC6trjHdY9gzAdEnzqqDiCDsf2",
  "key18": "3djAgtwdC1DHAqG7jY1FHKMoP4bq7bfafK1MHeLDhK3EiVJ79NuYTb6ZqLQ2c3YixMezBW4vQXZuwJ69bwJ9PS2W",
  "key19": "56tvhw4hxP3tTE5ThTTSxrfwELDDDFSPbTDjoBCJeKocNXrQXzxLw9EkpbCYhtmDpWG5GEDVYKfD3TYKyWqAcEXb",
  "key20": "42BDyn6NQHjfVuFXu2G6FxUpG1tkD3ap6MqS6dWQxxbSEzMvT1rXM424ZB7utvm1E6THjhNpChJbHddv9MQbKcqF",
  "key21": "LjoEfGHbQqcWckdLX8mHBdTCHFBmB7vMB6c14N2abCbPWZetuBDQJ1ywf9f4YPMFAT131chVBUs4HWrw2aLJJ5F",
  "key22": "3W7yaq5f1WB7JDTFG2VHY29Ucctj7uSAHRUvbV8dRs1Gb7AbKn4jJxtagTQ1zjuJahbNpb93xxhWrh8JrBnyk4x6",
  "key23": "22Gur9LV5hJvq1EAJvX2ppwfPxavGWUdnhpLzY5SukTE1j7TQZ6ifRdSmaDMwo52rVdiH5qo4pJCwt3qp5CqueXE",
  "key24": "SrJGXTji8npRumT3CVLGmQi1PDnWtB4ANM74T1Bz9BKvEAghHztG5sxdfmfT1iTs6HDXs2zg5bfwgkJLvdXEEGv",
  "key25": "236SEMv1JqLeGTYCRgsPNGJufi4Lp8TgHXtgFgntAZzKeLYsurBoDLuE6iCT7NsicP7cbPkhyfUgEXNLSwRPBoSE",
  "key26": "2mqMv5Qvz8BQrYnDAmcNHK1gFDi5HjQMxX7MRKBD825RdGqheLdeDk5XMKpUEWtMY3MaLk1ZaeLktbZYnYUCZXGo",
  "key27": "5vpJnEtrxaJkctBRBDjsrtAEayRXBT2Gv3Uc7xcUXRzvKa7sBUL6nMiMJ6TDhVmS8CzxdQvRA1uAcF2u3wfG4sDh",
  "key28": "4q68CXLhs3kqfrgeF8pXqHfYaeUMu4VXeWuGQL8ykBnCyDcWcqBrgLxK8aX4hN6qHWqUZuqAAyPB8XnjoVYfxbCU",
  "key29": "49afXdUkRJipLmB8v3k3KKDvRZUgru4G47qYNh21HXUG4W5rr6dngeaTR7oeEVDSYYUfFstcPwYA6jGWufykXYV1",
  "key30": "3Dh9YL4B6gYbsgPExF9gn1M14FDvxmjY68UUQRWHYJEuyNw9Jj4LFWpAoGjFgRS5RystUne8hxrtVrkiwiny5LcR",
  "key31": "3cJyfU2wCRxdwBPFtSSPauoJBFiter7MwoZ2UVFoZM59arEAQHCRYmsPcGgWn4VN4P5g5oCxzYjsvoexcdrbRe7E",
  "key32": "5bmSRrFmC5AGFYfhXSenjPitR18mjB4xinCQyWmacUEkVyv5kZpQx7cT9Ayd54dfLHTRPWnJEC7tadE9xJMp56pc",
  "key33": "4pyciyYjUPH8hy3naVbnpUchY22ekUuABs7Ys2edW1JESBBirgWwqF9WXroQHYeFRHXpe8zBVL4tnBoSDxVrcTET",
  "key34": "3hggEGLUrjLsNC5TYnzYQT48fRBBD6vSMGwdsNbuxzgvikFppbzP2nmKbVysN5KX761RxDhdmeVgf36V7Sg1wXkd",
  "key35": "4xqaK5W3yfsiwPX63YPS3KAaHsSHkvuJTQ545XHTpEQFjBCddXLmSJJoBNfm53PNB835Re3Ae28PM8C6SuLAgBF4",
  "key36": "3CG85724S6bAyeS7AZt5v7ijp7LfiKkddv37eufa53GLgKoGL9kHLe25i5fNipvMvjAomxbGzZqBdK9h2rteAWXb",
  "key37": "Cq62Sbchf3R4vee1pzQ2iXQArepxfXhofMNyq9nb5hx7AT5aj1oDyH2W1EKQpDT4DzMvBSAPasmpQE9Bd2BykZU",
  "key38": "3Es6pVpyLzbMeCCG9yy4cyHLMhVa4EKQJLkDpzRNPEphbz8yBouVu5FUNemdTwv6wdjQLyPTuryAnkHX9qZtFwpc",
  "key39": "So83b8H8D27a9o959pQPKTYZ2D7odRnVx6NmTxTeCFzVHB1F3wfH8tsKkS9eS5rwgyXUtWyYq37ki8RBQ1kNUwF",
  "key40": "4AdxhnXq19LDMYdRZwZ8nMqwYJnUEg5Lh26hCMCsd3YpC5WeTVgwCiJSaqXCY9RqWoBPrL9E5Q9LmQdGvm8Wnfac",
  "key41": "5psmPCjjeo7RKP5cs7YkC9Z3FaEPWqL17oSQdA8T6UizWaAf6RJZ7j6y8HhT7xhY5yHwSL4WeXcuPxyWuL9wGw9j",
  "key42": "27KkK5hssGyVbtt88w9Ji1aRhvTSoUcyj6qAiSPcFF8shSsmLhdQwHaPr2jq4tsD67LFHvq7MhMVhT7ZmpWn9yFp",
  "key43": "3hRFS6Zi3RRF3XR8bXvQTU7mCibjj37bUj6ziw2E2Jz1VbzQ25DNDKhJwxNvACi6jehUeFTtzmyDjXv9V66fKAHi",
  "key44": "3DPXcnFNgmqxhA8kXzqAC36oakcNUBhoVfur5e2zvfpQwmQC7WZVfVVTapf8TyQ9vZCx28fzsp1jsyzesAuMkqpQ",
  "key45": "4Ls48uJiATzdsdHNQVfE9v45uh2rQuwt95CXmsToBojLRYMAS9zzhqZLBtGDCgf7cVP37GZwvgbSg66jaUNUrW2x",
  "key46": "2jaqYhLPYgi2SnyTejt1qRnQa4NfSppRrCViGHNVFp122QWhF4qLHX1Rs7isM4hyQgrydAEdjJTxMrmMXvvcrUjm",
  "key47": "5Pg5QdTWkusDE3E5T7DhcYqzqRbKKy47GiPz7oWe7os37M3Qxgums64z4x4M2rog28G9bgjvbbgmhwvy6ULSsX21",
  "key48": "4zLSWDjsgjB3xDmbK42v7GWYuq3qHGUnfVFBfMQb9TshJizZ3xrxQyXLRxvmku88ygpFzDyFdedYT9Rp2zt7njv1"
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
