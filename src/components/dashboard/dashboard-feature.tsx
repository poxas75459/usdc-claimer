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
    "5YSXv9ZaWHBizzup3GonPz3gZvR1GEdPj47kVD72C86aCqtFwZvfACcToi5ezzvH8KCMR3fRFZavpnswkde7iFon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZtdCx81a1tBzfSwYWNckaMsGoQ7RS2e6uPNRnz2Kig2aWQfJuQ8z6badCHGXSbUys4mqXhUXbZAgTUjM961bdW",
  "key1": "5dedN4hxXQC2BqZciFmToM1tvFi4yNBB1YQ5DoURHZcZEndxD6fbLUMjBypojDoJWSVwhhwtUqVcnBtfJvJX48Bq",
  "key2": "41tSsCoryWfnLMtztgKG2htxpProLfJScY4ugcRiGRTJZmL3pxTECYiRTBoDnicz6KqCN1DEzJ14VwSr4qyvARcx",
  "key3": "41udhGfJPS8mqtKFtyjJr2Ve9Kf7q395ZptJ8DBBwfpoTb5PVDGz9uUTzMGggniBw8eKzenb2QECMztgJ8mDpSf8",
  "key4": "2E2i3NMCLnvsYeYCjoe6VgkE7kaQpwruJD3Gn9fRMeFfVem1JvwjG8SFYVgQHkYAVcKtBUpTAYrsHpdYZ2zijouu",
  "key5": "3771C1bmYaMNna4iTatRndunrnG4xvcfZVXJpizxzo9z9DjR5qhRMvERhugfEhsAK7oSkAQ4dpju87mawH82Lcbx",
  "key6": "FuHmujE9UcvHsWV7GqPCv7sJiLvMuQHxVHDn7sQybn9UqDKncNqzf1TTSjj8yAwZ152ENyLLUyJmG2GsLG6mvsb",
  "key7": "mE7EaGUSpZARVLsuLfghcERPm8kbf2b9rU42Mv173zcQHquznv5g7UTss6KXn7oU8kYWpEY4gWKcAombZhwdDKA",
  "key8": "3PeHfnC55Jgicc8hzZvWiKhv7HwN3TMyrBLsg2MMfqHdB6sBG9LUEAS9xAUbzSGAorqngQK35FPGGcS8YCuDtvFZ",
  "key9": "4nipGYLtLMNdp5QQt3BmRvjVGWEUaNVBFzJXbE87xiZT53XeBNZ96FQaeCQikJt84tULV42iSBjw1fPdSXdpoUgC",
  "key10": "aFUyuT7BRtidCrepsA5FasmaPArrSnmSmVFnyUtoaPziz98j8WU2odDVwxhosHz9mcDpocAjuegkJ8YiD4xnRHC",
  "key11": "5yAoNdmbzB9JP7CvBxaz5Ukm5JpzJAwBK8GGXisysXzGTEB9pA8gMjrDE3U24azuxM15ZpxYUtqLUk1M9yfXPmAB",
  "key12": "33KBd3yxsa23McgURHKemwtqpH3zgLq6iJxwmCmDUCjZYEahuEqjhPLFJ4tjiNcKrPdZVCeL6bAiBjx7ZQVDb5gY",
  "key13": "5ewHnx5EHtZH59FuBbG4yWdAWmAWbBrMK9VmLjEsKuWV1c2ZMqXa7K2E6YBdsng9LtrtXvD7iUjptKGxQvspk32E",
  "key14": "4GXFJRzBARdQiMxLfcgAV8FPLvHmCnWtp64XJhxffP3aaA7uPTqvZ9p5493B3rQF6QXW8N3cVMuyGZaFUcdKrd5T",
  "key15": "3HfQ44Q42MPSgZmeky8wzVqrSRFdY9iTKZbzaKWePWz6HCWsrtQb4KA7TeTndBdj3KrXikESeYikqiPKZXkhRzpf",
  "key16": "8kToR5jLxBTKEQrYeXGKe5wZscSCHtb11VpkBE3GTszF4yfNnNF2g4iEx9GA1gb8BaX417YCepRvZW8v4uD5Byv",
  "key17": "41vEExRYYFwcpraPszj2CujBdzw8Vi6fy12eWxkM2PoVHNixauT7U6DpNpidB83ZmEtJmNarWnrYDiHSj9uSp2KC",
  "key18": "2J7eoJmxi5qpfkPw4gfmdoSzfSqMiDZuty95gz1qpingmPnQETaKmRX5KMrCykAd6GDVhBVbo9LNummoxxgRfJnX",
  "key19": "2EtYQm8Ex3KsTYkKpGaERXUpRy2aLJBC6BpxouYx7TcAsdTgrLVMKAeUfxWqbAyRSo5yc3vaF9DEkiCenV6fRBZv",
  "key20": "3uPyffyKK8cEpFGdwXsKi8GqmVrgjLqkJvchuWHTqHHUYvy3xpELbTKJFUs3rn1E3i1uep2msAYQUkcHLx49S7Ex",
  "key21": "A4iLHaJiXav3TsjwKELEYWAEBTEQ7gitQ7ELCA7FURfmJR1gkvJWmw1UZ3pfEGuxS4YLeEvPsPoXzAWUbWHg5bf",
  "key22": "123kLgMmLKRMsko2vCXoac1SgJyCiLYz9YPfmRaWnqGHJpoC9w6L4iGRg5MvcZKfuEPehNc7vEtT6meGLZ4FnKvs",
  "key23": "4YzpXLjqZwbZc9PndVFMjvkbiwMEm1XFSFADkN7PUXtLTSzT2PgJPjN26iNz5G7iKt3noQigytpiPK8VVMZ8HJ7",
  "key24": "63Z6tB7Nv8WCqnPL8UbWfqkoWRw1NyngDbavRdeh3CjByS4b7vVYRpWUsXNpBCspfxDAfFneuNAyLx7rfC2hWzAF",
  "key25": "4aB4qgkWBvvEokDzj7WxhCSnVo3SQ4oij9Dn3uad2WcnaXb1ZjNqN8HHCqDa1YKGV4aABsJ3YrhdoKTNmd7oqQy6",
  "key26": "34TWNJjLeX5mwqUsf64BDMXyXTz2rctfrFiqbyBL7cZWqRVVVw2suc9wnuAVzX9fz8LkJGNHCxueHsaBnSfXbnS2",
  "key27": "35jcizeGaW2eYza5XHdhbvdhBnZvJKNX6fjuiq5opbuZuew6n4iHtdvcwNzXXZTeMjwV5QQTa2PeEnc6ef7P24az",
  "key28": "31xEQhqDhfHZWaq6c1CeTdy9eUX8T4CVi94zNd3RxUPBrtuqh5jjPFikft9yMLyfuRo9hUc9P954szb6sDDcw2a4",
  "key29": "2BRv2c62CEiSQRKUTvTjKSQdhF7BRgTMU3zJfYuAHaK1pkuQ6iUyKpEUfp9W3fN8xkeSz7vJp8b8kbTYRF1MvqBN",
  "key30": "2dpZV2ggskREbKQk7oyjZ7aaNjPzjB3ggPnjHwPaDuCL46c5tJc69sQ5ANBzGsZtqwz8rgacrcgqTUUF4Jrve4KT"
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
