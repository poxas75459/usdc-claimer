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
    "5pQ9Kw3r4EV9minJF5ohdTysguxpbN6trqERBTNZqgxxZbgfM8q8ESwUUro4wdgAGkxpeXueE4aX7oS3LxVX3xsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yoiy9vuviiK2hQSN8nA1tBeHjnmjUDTUUvxZEVBho1LSVDAsmVyy3dydsTFjjhmhHn4yQQkA2BFb5psC8uJHTxM",
  "key1": "BNHc3amhKKCqvU5uAmJZxa5A49yLrwNhTqdF7QnHzcPqfdTdAqZkGQnLK9azt7cLQ9bkPuGeT48vRpPwUsoeL2U",
  "key2": "2hJtqLjt86qJh8uZrMrBqbfgCtwZt9SrphS9PFq37ymBLNf2wQnuD9hGBrFAmCvW9vJafxVAt5jJbCvXHqrybnzi",
  "key3": "5e7mkBrNjjo43r3hG91ff4KbZ6ToqjFDcZZhT7aTas4QH5bYBYiZHNAMFu3NSBiW24yLSnur37kdPtDS76KAZ3Up",
  "key4": "tCyswjkaR4icdu21SE2dPvmfpmbJ6Dh2zqwtWrq4veUhtgRGLfHQbetiiyyhE3TZ6rV9Q53ZjMDh9SyUc6dAMWq",
  "key5": "ViM1pf63rG2VKS5VrKTZPA1T7dUDFxT5eFHiAffd1AWyJ1W8RcQqScv4UDeCjibps8jSQrpGjQcpxehVYnmQwJt",
  "key6": "5cjbu1yF9uaoXP3JA96JGb9c2nexCKxs3ETTLRr5z2tu13qMFr8AioCDfkKafmvz56e87kz9ppKepsABHpqGK9dZ",
  "key7": "2s74MKwMmLtx7LdvikssSus9L87chi3WuoSzM6wtjSuVZik9bPt5gMiHmodrHUUKJANnefPmcb6fSoGrrm6CpCtD",
  "key8": "54HpeXYh46tPwdCCXn5YDgWLeRqTBbZMwYcQkPGAfkzeQMY1fqGHEiJdgzW9iZBWTkz6Wpx93mH2YPnd23EfK3DZ",
  "key9": "iEhAu1SDgsyyJmbEteGzM49UARd4jaEz5MjmNyUCHAuAUiSmshSx9rmNGsM5WK3V5YQEPfn5MZdH9BRbHBcQikV",
  "key10": "3MjDkaohixq68uBQghDWyAffY2ou1G92ZNTq9quxzwirw62Qg1PbN7Z9sLpFBeukGsAFQGwM5Tyh9cahfWHpyeke",
  "key11": "2bTALrZiGJnghTb6KAvwGpk157TQNoY3vWKRLfAxSvBaTz4BXAygq4M8gzwUXJyU3L1s9sR1vvM4uzxTzZ2UNcz7",
  "key12": "PNPPNrAXx9XnWyRfyQytUjHDPxyV6zJ49VScYkB9u1uXXCL2ycwVfmEBTYZqFtHVMcYEgSfPL9v4eErP9oCHXHG",
  "key13": "66Sk7C9LAeMNercCnmRK1UhHftCkiWakdbWiHt8fm2NDPq27qYfuJmBnEzji5LpFxJBB3MGsUxKxFFiEnnBiR5qu",
  "key14": "2HWNs5gcbDP7UPWzidkKTwvF1cke25mSthVXHDZeFtCXsDwd8o4AFyzHiX44Hi9CwQoZrt6aVTNxJwmfWETPP6ZJ",
  "key15": "3CSBXgHzXsstuxzSzXRwqiYcjDGgBCnxxYPYTKWscpzhMumJN6pA4J99TMAiMcjDjHER1uDGudGZdsawa36jqhrp",
  "key16": "2mV4cJjDTZunwv7zCqptiAbUwdca2ofaAz8wbw2of9C3Mqu85WJKGweooBDKLMt9mVsZqHpQyeqmKST1Hobg8oHH",
  "key17": "62qqCP489BQZumTHaGMXGfLThMbb3pn55d2BNGZ1mjbBnxCxkBzsn7wTuLfEd4gSQUa3hb8Av9bEvpyJR6TRKr84",
  "key18": "PRrnbhK3BfQKJZ9KmSjNUbcg5zBofh1dtFQsgB9TWYS3NpxY4gMYHrNEm5FMtDMbm5ZL5jNEPPWSejXNTFNcbbz",
  "key19": "5yWGkExoenWeARxratSR3UhZZFGmXDg6GjoFRTzzqEMpEksQCdVMq6z5ZPTyAAPxqG94HdLihmC763iiiXTLhYjN",
  "key20": "n5vvg8wbMSJjirWUodYRJV7dDE7u5rXnmm9fwkZdRsSV9F2M2AsX19j6VPKW4cnZnh6RsX6RXkWebbXvggJMErt",
  "key21": "3BM3CjLwDuF8MVAtwgDvvLZArcz3F419912gWQa8XCPguNHoFYXku9wy9e8XKBPg8NLUVfs1QqUUTYNdMYcmrRLV",
  "key22": "5JHwG17GqmVV6m6gDMWHr6NKBrqmxDpGLQtgRdmXZCzvqnKNCWQkCguMfssgoj3LRE9vDT9EHGq2ecxfNskV9N7s",
  "key23": "3N29xPB7bJDQkYhoPNuyfb5nVcpRy2MS3ua8CKPFxQCksxgRsBMCLeNc9dkQ3JDfCLtVbmKEQEPNu7HRckBnDLCj",
  "key24": "bToU5ccqAo5Hs9wkF5T5ptaJScbLGffjjXV5LHC3a8s6AWcT97tnhENaSCqsdJkFbC291prXBPRH7KJCzhbVqcP",
  "key25": "124bLJsseznATtkBRSdecMu5SvuUtKBBeMJTQU1DzHsgkwEQK7fQvRLFArYLnP5GLUKtKK8e9hASjGAMUiq9Qr59",
  "key26": "4HriANTCX2pQ4MKqDroeUpbGExbTFFLfjAXG7xLtn3yBbSD6FoUa1F3jpwQnGHeisD6NfAvf4BM6G3renZaC3ZZF",
  "key27": "5kGD8qBJYWJtEseetK7djqhxK3AE3USB8cqH4mPTyUQdY8dHcP6D9sT1kenhmeBEFzUC6Eibn7HeRM38BghBfVLF",
  "key28": "2bMyNhvSxbsnMHQWzcwYhKBUCy2k6QzMFXAzH2rogRBsh8pZmwTK4SyizfkYfLsM78c2UuGyFfWzSGqT3Ggyh6sX",
  "key29": "2Qzyq94pPkddahhNhGz56wYGN8WEReoco55mMzDnWW1XfmNy8mEim8Bbg3T8dghYDtyQJBEsqbdFtTT8gPitFSnU",
  "key30": "2E3qCn3mEykCkTxoty9UFyU5shCb2Y9gs4jS5zLazDexGMuV8PcecaNEzSRgymfjsaHig87dHCanzKWkPqHpuEjA",
  "key31": "2tQrUTAXe4JYgqFwc4VJiDVgmNCoWqkktoB9YNXsFp3XpddMip3L9Q2igMh7ukEpA5TtE6bGJ4YHuKEt17WU73Un",
  "key32": "3dpb7a89Z1GDDv8vkaKCFFukSK52ptFUJwWe2XSxhwf4KxY1Yi1vQKBRv6GrGRJxxZzQ3XVG9AjY4xUyw7jihyvr",
  "key33": "25EtBWkyiLFdx9868NwnxxZ7An7TPzEXLP8CA3CA6bM77GA5fRLBTWzWFD7seu28WiqKX5r9kRsjLzoWfdhrpAhC",
  "key34": "3cRwcFj85dSPtVh2uTfPhg1u6g6BtL5jxzfQA17oou3gXmHtiUSxvJvk3B9M7crhY7bhmkhJ8FCkhANUKRWYQHks",
  "key35": "5xVZroSSp5E5fHxG8rjJb2oLVY6DZBBNkWyuf1MDb2G3DQ4wNoMDM5ihjLB1hPXxTaZypSDg3KHXRWCDFB6Uc6N",
  "key36": "28L2zEL9kJ3j3m2E9xJVKvaogyfJyrgqD7EYwYasTjC7nv7BBvMZNBQWLUgTNXvQdprQzapGaNRapk4ZEF7MmQG7",
  "key37": "5tWNdUFEaQJbQJjnpEQmUjvu2Wfnxrihp7dXTXwNs5UMWS4sXBbTAezWTYxjQkiEmFZ964B1T7GpsEg4B843E9g2",
  "key38": "28AzYJrMcbdTk6RTgw8buEtHkKvC5LxncvCDjAp87D1LAhQfGAUWxu9QudCkKkgT3mq8RHoiNGVahz8jhHn5Rk5j",
  "key39": "3cqKT346fNyBdioaYUNMb6BQbvrJtoB8xV7P27Bp3dq2e19tkUkv4jB4W3SUwLXa1e34QniHt2CG4h7S5vvEgc3h",
  "key40": "5zHzieD8c9387WrKvCUMzopzE4Kz2UXEy45BLFCPUYPj6N1gGh1i2EAnNhQ3PYLPk7UZepT7J4FsKfWo1Df6o68i",
  "key41": "3gZ7gDE4eDBw6eGEvGXWotSjWF8Sh3GtGmMJGPSGX9U6ngLkXDboVPxBf8utoif6L8pT6ZHWaae37XV8EZNoAqmp",
  "key42": "3tGSdBsBmYx8BRRS75nEA291y7X7v6rp9MvfXRf2wXonDmrywr77SnXH6VTcnEnKVMNML314pvvRbTXy9gchWnC2",
  "key43": "3SvbwAARsRbfUfPtB6tvKTUzMhYCG1sVoxyNU4Qg251LZ4bXrvE4L89CeWU8deZQi77MU7FqiDixVv2bNd2ByJAu",
  "key44": "3i73pdLwqichJpmUKDMg48RWzmBYE4vGBpY81ZdDv5cmYkmXsfH2V86c5By6cm3j4gysVW4k5iPwhWt57UGWocjr"
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
