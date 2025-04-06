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
    "ozPD6FgJj9xdMxteSY21t6nrHG5irT3eV8H8c65GvJ5U8BDbo8rn8fmzHE5Gosji4X32AznSWxfztoJNHnChn7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BwshuJMQevm5RrNgyCpSrfLi5BxGMtQm2FLFK911QQwjDXDrCY1fvggnBDuHEK3FUa68hzQsCM4JgH8rXMshCz",
  "key1": "4PjVvJ2ED3Jnyh9ca9u11DPbeFCwwWFkaqhfzhSXiCuyaUreVDByyQMfkngbt4f8Rh1gnJ6RGmhXvtfV6DJug2PM",
  "key2": "5KVDvULGnrkTMStFS9eGkfcjp5bt5raQbsz7EnjbeP5xKSNJ9rURrUZ95HS6hfhhNddXPeUowjr1yzHQi6BNSPZm",
  "key3": "2ad3pXsv8XfhNvXxQgD8mXhMWYJk5EssBX9uhSqsAkanaqToRg1rgjcFxma81R9kSsYG4WrF9VR7XdAJtxcoYsnp",
  "key4": "5HScAsED9mNcFjGwUthm81fjni5cxkCjBAe4GS6zhHsCaJaNZ3aYgh6WBPnBPo3N9sUgKvjSLZ5JVGKP5den5i1b",
  "key5": "4STd3S4vw5qgqGYT8LvsumVFpvzewhuCksdbLWZ3pbrayeWfmfcFDBsK2sirLwg4Z7g5knZQe1z8r1tftHaUno72",
  "key6": "3qigrDSRBCbqDgVoWUGHpRH45tU8ZGyPper6mjQQdvBGqvscPhzkq5m6tuMJgDYjmoro9kuYyRatvDREt9TaPsXY",
  "key7": "fAzvRPMhpfeMiTbVsJMXsgnLmxbTWhd43K4ukZPQZFNxVASEEDXzyyJGQimrUW2x8nmLLSkYnnVhYLnZoCwHPpW",
  "key8": "w1o2dASaH5jxUNd4ivVYEFkg9HqZyxABm6C45NDgSoo9m9J5cvnKrA2sWSvSs1eMhky5x3c6Jyobc8DXEBcxAvu",
  "key9": "2WrnaKjK5pxHC2DEsx1AZE7dK4JNPTnknxJmJLa8rdkhChqk5jnRFGKzG14ksqR2DzTukcRiDcpFJxtj9kNku8JW",
  "key10": "56voo6vwDMcE9mNFX11fuJz8xnUYFY7ypUkuy4tL2qVTyXSg1t2M1iPfEkfxLAEGe3y6kwPdd2cqA7gA6DwDrPmw",
  "key11": "5pEu4pKdBQnJkJGPqFtmxCR34vWxt7J3BrFJr5P1G5kpcmdUpWNyVo6n5zvGKxurnmeoo2puTDqmrLhTBRHSVJL3",
  "key12": "5S1SRBwa412n2xU8zGzRJDp1CKzDGUVzbbeLFWxsczvDiauHBEmQ4rjXfECYtSSyu7eHhQHYCYgS6tepcpcYoyp",
  "key13": "53e2vTgmqcMn5dSZT8HXceAxMCDthpFHZY5AZQUBaJv8ttom7Fq2iujRPtonbem1M8VrBrgky1Mm67KUqv4ufKTj",
  "key14": "4SYz9JhaegQzXc1NSsdKFRK4gBqtc7jFtg1irh83QWptHQkY7docZfdNV3CTvQJ4permi9REWmwLp6Wh5YQCDiJ7",
  "key15": "5YzFZCnWpSzdMamYrRg9PbZuMEsLuTGNyxim7ZLWHpqdz7Wvv9U8tQKSohFhhwY4xqcMo3ZVd2ZsfMKNXFiPPqZR",
  "key16": "5NJRWHcbjWfer5kKVfZKDbKSmnt1ng5i3HmgdTsiVss4wHYBLVKC1ihqHuYnhh7dH1gftVe6xzuRZaSEh5UzwyKo",
  "key17": "4SHd6xBHdBdEmVjkAhDfKowcbqtK544xGtk1yXxcDkzS88bXMU9FroGpRKQU2KX2dqQd4R2MyiDaKxwgRrXwxivV",
  "key18": "2EWw7vjQRD3vWCaRr3z4dUsKNNtbsJKqVoFERLVDfJtKQsRMRgLpE31zPYhgWRsomo4Qy47Bv6ELpiAsb2Gte9Yu",
  "key19": "5eMHGQ52mqAWWwhAThNyyqNdk59uX4jUpJyojcjo5th55xz95n77Zk6oroipXPGThNniuY2Hf1DiaiXoiNeiN4Mh",
  "key20": "2xzwBKXxhm1WKceUTBvSaYSYupPaGAoryX7sf6Z8iCeDrgAkCBBNht11exEoBE4ya8wCt56eAAB6qmLQJjQSqNsu",
  "key21": "DrvdgRT7n9PmdNbT7p2EeVdLW47dFwxjK3pgSY6Ggk4ETapt8G5Lce1BwNkdZ8KDrEV9iXmszWPFtKojHXnUbEp",
  "key22": "4hZt5q7VsTwChsiEjtHyetr3ta3EaaoBREjCqF9CimRkQ84UDmJToaDpZ4outZpKvXLit3Tcqso8izxxzHY5oqua",
  "key23": "3HHnnLsJFkgtU92QpMdXjoeFpuAFjQR19xZn5Tidqxj7ucZJAmDj4foKm8Dj5jecHxG3c3GsWMuH2vcrPKUiZUqN",
  "key24": "2xM7M2aSEmJeZRvMxeZ4xS51eZZGTLrVfJvtCTSANKL5e7EFBG5HLvLhnBTCR2RUpagn9VKnWDtg3VPtVJEXCs6W",
  "key25": "2Qcr8vbaJxyh2AgHpMJqebjEGzNGNgLHXYoYVVvW5nMniHyWqp3Z9KAVaEYBBHwXCGNDecWyJQSjkBHWQ1fF3vkC",
  "key26": "THdzAYSef4jz91eQAowAqgx7eFFfLL5F8BiCFokiUC1BFJRoL1546816ahYzk5Lv1pYGEyu7rVs1XvKbcxcB3y8",
  "key27": "3EZa3QK2K26ob7e44ZjHXCMwhkA4LtefypsVqhnNfEx4naarxY3rK36rpirwmPdCH7GM7DESThuC3R5GN4MsxTKf",
  "key28": "2NddSLEJyhQ8CJP8NR7x3ixfsHjbC1Z5XwkbhBJDuN1zqfxWWrh75LHpt64Ts7CHLpx3BxAVDX44x3w2i6JLG9FT",
  "key29": "5FQguULiQjKZJDoZHQHEesrLEaTnQYvbPVT2WdpVi3NoRkRgd9wN2DfdRSug2z598DacVwGZPGXWtvoDKTdBkyXp",
  "key30": "Q2ynmvJbiehkg8UEHc9YbZdfaPMbqsHdnHQ5cEd76JCcCwbgKA8sh17dYc52qYdbrhcYw73dZjcrEXJHmve6eqQ",
  "key31": "2vUwBTT7HtMwwCKe3xjahh8Hs1jGorFAhDgSRgNCQ6jRAoq9G9Fjk7tvyNJGAgY3btiQRizxXLaGiUppRom2gNap",
  "key32": "3TtbxyoyifdtF6fK1rDMPzpUZw8zUw97iaLgp3Udhv6NJ9RtQdn3jTLevToEhdHLNo5iBwEtEgUaduZb2LgCkn2Y",
  "key33": "2K1gNXd3nNvz9av4M9ozkwfPJAD8kYSevz6PzRTisx2U3xrfmgyFzRx98LFgu9fEcSTYzfuvDsoWrWPZNULGYxeh",
  "key34": "35Hm4hidUyuSHg6Qw3z38fqf2iU7Whcg45xLWFdqc4c2yrDA8bfmY2q4CNSAYUq4867Twz4VKoB2k71vcKFjx5E9",
  "key35": "3Mwx212qr1Z3pzS7w2rKSJMfsJXhQBUnJPwhQFdmRvNVdfEp3mMoVAskZm4XQRAfkX66X5YkWW1t536QMLLCHmrv",
  "key36": "62BZhFXSNmQnsoWdpMijVaAjx1YJquK1t3zdPruEubQWQbRBFVhGfQh2YhjJEhsnFgx2jhWUwp9eGDL1bASEv8r6",
  "key37": "5Z3dwm6vq5uF9m987xrCedSHxqu5TRhiNmjC6d8hjKQERXLxnbR3v1f5inDVUrVPPVQK8Rj7R2yP83PX55VVFSgc",
  "key38": "32xAZ9eQaHrjkb4cyCWNXNRVJ37Zek75koYwUFLvFY38jGBRh8CtagoZ69reuwJvPTnDMV8uiuBMd51vtUr3mDHY",
  "key39": "Pmbsbzn1qq1yzDjS9cJmf4kLzL7fZwCmHvSBtFL3t64rSVwtNDCJPRmjG3y5P5z1b71zPHBjYusz1xpRdeEv2Vb"
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
