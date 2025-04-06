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
    "2NT46rCG7D16jfKisBcBsPoz8CdooCQpy4Eg93iZC6BTRmqzkummRoHRU9v5BsLTkAK5uGbERJ7quoqY4NnT63Tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVPdTAgcX4MAtx9MSgQzF6SMXhPg1V4ii7G62NrBM4Y293pT2AZxpgSxtbgTbFKx5NgjXV9UbD6nyLbgCQguYra",
  "key1": "4rtp7HrXNFmecLFGBFbRCk1dWKCeP74dkhb4QydVcXoozVJq6yiqaBe8jHUpxJeqbCdhfyFuLbLEv15JpohAbpgq",
  "key2": "GytV2QgSwFnsuP4rmQRtA5gqzsS7qo7Dt6cqMMscBFdV9b8WtoqvUDJrfscTu4xF7tpuDqPoLZznk2Ed3tqem3c",
  "key3": "2BgWo2DYsH8HnKpGHhE1PhfLhrjbGU6bDdECVyKNqExkAuHjq8efT2w8tzogMb2gcN5nuNVppujRUrKsMQsY25D6",
  "key4": "o2giBTNuZzs3T9sicjytKXWaeU48tumEUSL4Bpixkm4de14tN5HX4vU4QXr8NXYnBfJPLva5yZZLXdP1u4wypCT",
  "key5": "64RMo35xBjM79h7TjN2H5DMFifdEjrBBN5gENrDfwFWYopLdkzP7KJKu5aG6HcLsduKpZUgpxpDyvcYVshiQ3wuQ",
  "key6": "2Tz9o5wEYpdBymsAHCyfW1zC5K3nQ3pvowHtRZjNqYZL7paNpmbRE2j1mxLCYo5CQggjW5DEJSjuQA6FTGacuUp2",
  "key7": "4SPxUBK5kAPRRPvyWRj41nR6A4VaoauLf4aytw1CcRUrH7JGGchbiFifR7Sq8jGCUxDGx6jXA8J8n2KNTUaCc3u8",
  "key8": "4YaoEs2BFdV1dacRnvhoPwEeWLJdDb33KstvckuojGwVoh7d6kKYRSUhgh3zjhYWo5aNv6vdovTiPaNzCmWQdTRx",
  "key9": "52qQqZJ1mbTRhT1CpDb7M5N1H4ga3hsvVU9CyJnGuKtvVQsaQpPNZsTWhJ9MLboVfF6pme7e4vwiUHGrqF7wEudS",
  "key10": "5KTAbggr3XNnJNkDA37Z9VscqWBPsYdLBcBcDsaEow4ntG7Z2LDbicBCUFVsAAWzbWDCRLa2ZHRyiTUUtPPj6JRi",
  "key11": "5ag8ahEqJL8vDz3AnSiqxG4KDCUsRj6NkM7L7fGxtBzPqWmtEi8rxzu2U1iPtSSZZ2F6kSrd3xHQZUbMdcDMriuL",
  "key12": "2FdNdPePJDgfsJoCdE1wkhdmDpafXHvxWWMDn9CmCwKRmSxQ24mcf4P7yGReCsXVfbmzgN3LJ4exiCtc7UoY62UL",
  "key13": "44Bxe2TNzNZPkvKJT2bbrwFJybAbEeW4K1vG8Uqe6nqSFuwng2i3ZNehPA6weYS5e5mLVjeiPDpgNxLsAxkgyggz",
  "key14": "65kCKBdMxVG28SqjqTu8CJQ5nYQrAApbgUcLv2Vo7CxzpUuJCJBRg5Rcs6PgjJsJnWdo1Le7zPvvHUtN7Uo8KeBj",
  "key15": "5RnCEoTE8if3Lr8XVstWvMN7TLhsvZNE5GTEBXQ2sRMyUc5ofUyfpCF8HNMRVzV7r16pcch4mSgc1YbQagxhB4Sj",
  "key16": "221esVS9Xhgz2hDT4asYiGW1DuvoMaMbRZUhkAnV37yFbJWKuyADEwnAhsMoFwwZTZHhZe3ACmt6J2dEbxzK3fGX",
  "key17": "3PCfVeqwWyP7TQTQUSRb97qgvqJrNayDifTMpVwZ3TSRztKVgrUkQAAiXpsVG56wrtCcy8rChf9e5V9HW6bKBGtZ",
  "key18": "5SjDQTmnjCh22TmNL3bt1H2wqZ3DASP8WTTqEPMCGYs5NA45WK7Zv8SPwrBeox1pZS4M5PPq4Nnyqp4sbT3PRmto",
  "key19": "JbLUkw7DMCCm6gGaTBc7GULjGjM7y6Ta9yfiFJzr96wzRpoquwUtEdmUdpgQjkFh6RLriEjWTJVpBrMHg85AsSf",
  "key20": "5W7Zv3gUDzSNGdm49XjYBePs7t4ckVwhAHmikKUNtmuT8bx4YWPreytrHgPeCFh3kPRmUXynqhKgFJipPjQMQ4pV",
  "key21": "4yd2xSSiq2LhLKPSpUXRe5AxeWJHSGvJCiKGHyjSD6wgwrkAGGH1qvmnw9X8SKyNUJ7uCMjZb4qkm6wMp1WnPQca",
  "key22": "53s6o8gJQUJfEmwCrhu7ABuxaZQXXbY7HbqxUftxzzUDYpccm3CKzgYftpkSHAcK25GM5yURm7YNHq2NesJU4VXB",
  "key23": "pkD463jPiKWvKiYhudQxUw3VhFKgeUyc6GBnxDMERGa3vV1KPxV9VTY8Yu9xvuFuXHaVEp7ZoJgT1UMnHrufFxt",
  "key24": "64NdoCpMuBpAvUWg1zGtCHGEY3sJJQBUkDMBY5RnYmFvkXF6USm6C5CofvpXVdQXpCTyvR89LRw9Tb3vusuDNN9o",
  "key25": "2pkQqcUgXmZL8Mbtt6XoxybXuJTHsTBmcsq9odC6xoCkEFG4WY5f5gESiB9Ta9vfNKz6UuLjqJ7HevfoE3qgQaei",
  "key26": "yU6UKSPLESBezq4YxzLr3KeygDPArHHWadAwgoHhJhrEDgxYw4hJotk5TvZ9QaiYfYnD2uGBUe1MWRDP2UQqRGF",
  "key27": "tV7xEs9esEgQ3YwUpTvQdapq8qfHBywuBRAgzf5JJ9no6jpGABcTBqkwuX8dvU26gSerAFhLgEoDD1jpaGbN5pL",
  "key28": "3pmTyofYtTWNdJrLqQcPnFkY9uj1EnwsdRG4MF7effqJQPY7NGZKznDnmmjrzbpAYzRAJAMcVLXW6XaLAPCxRTWc",
  "key29": "fZRHpV1Dq6yQAyDSCa2tsx34zE9oK9YtoTu6KEEJwwzUCDynYLvsuCnD6orNDnmSX5nqB4Yzo3pvdmsdnGJDQyY",
  "key30": "4wTzz19FuA8Ue9NLLZMWQwW5soA1DCSDHw8NcdGn1MLXJeWks97YUdKQXQdP2M8HcXsebjRKGLdmdWXxkUkHhy81",
  "key31": "4Y2gbCGrcZ2JtMEfcT7HMNjc84MbnNJainNxdgjsxDyb2RxopBV4hbL94J8qUPezFPiWnZeC6oEREUfmVRB2fR2Z",
  "key32": "p59SXEutrg1nxS2xuFRf2UMtB7JszkG6r4PVear1oKNYjA8oJFwkAiTwBeaM3P48NNNzX3t2zVxLmDb9xwSwG8p",
  "key33": "3sgB1q69yZ5omVZuSxKKrsMRB9AeTn9j7S1u5qeHQPLJ3HaUetbjZ2CN66fHjXD4LbyPYWi8fMWNazKAeiFwRo9K",
  "key34": "QeEVidC1UFRWynprqXFNBaPAQHf2pyBgLe5AJTxG9yNgdocgDjZEXWAWRSFrubgLCUkvqmPRPnyk3AXAKJerP2R",
  "key35": "4GabZ3YkgjvCbGktigpqhSxb6cJQGfbC8UNPAPfWD2JtKUXmVFCj278urQMU2ZMTAQGrL9BKNc4P9vEJPgaiE4JC",
  "key36": "fV8Tr8TmjFG8w6mHC1AJonxzcivsSvtcZgANDu7EzRKc2Lxtw13M42JCJWxe3fyBywZ3niS4TF6uaEP9Y1krHMs",
  "key37": "2uZuxyu2jEsukU6ogMrnJVfWWTenvZKCWYr89JSGyG9iGww8k1ZGmT1WM8qUzaH62pHHGYuSkZBZNQN1wBjzCz73",
  "key38": "4NFxNryodcaCDEtGk8EEEXjDQVMdxNYyvmnpTmAGhn23cu7CCZfHQ6DMSy2yMKAwMLUrAMPhBUJ9quFiTQtZq6Qy",
  "key39": "4fiYJmNsgLbYpr8p1z5eGanuz9bxaS9NWAURuk478jSEyN9Hc6hoF9Dut7jN1Fbte3Z67JxQXyzfm7ACYv1Z3EoE",
  "key40": "2954mPyhrZbgCUVCDh3fwCpo44gXF73stFpNgmo51jCkAw4dBAsUFgMUQNHRwL1pxsQeotZPa1mQSdyAQAHUDpiX",
  "key41": "2BBFLPM9jjuMeT769XXgqeBGDkQgQPXQtD73Xj5puAWgnPTk5xbJLzZ91GEi8GztcNhg2iHwHTQtVHN8KtkzQWmz",
  "key42": "2WCEjMPwiJAxgBtQVYM1ViaGpv61BTRfKTupL4zQwkyswHjsfg4An57KBxMWoDcZj1YM8H3CdqHpyNhMQgq4JbWF",
  "key43": "FQBXMdpjxkduA3Yg2UjLJrnPQ4me9miPoP4jLTKFdeyL7hKZoaWKKAZ2fXhmU6N15iYrCmSyKjk5F6M7LvTEfHW",
  "key44": "3Cwg1851piJmKMGA1jMmyaPqL1AXv1nvt2FvRzmyvthrfUoydmDZWhthznxweWbBXRLbtMyFPKa9JHu5UceHJMix",
  "key45": "4Uhgsafiyy93d3p9Dt5y36PrnhrpqhgiBufZSad54Zo96mZiLBRK6baU7pbYscciWuLvZkjqq3ByvsEtGheqPWoe"
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
