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
    "dwpGUSiqQN1AZ8NkRnKpuZyuz4LqGS8fzBtxFThkDFBJriUp9CK1ZrYa3E6SyZg3Ez5hN4YFvDwk1raMXa8NTu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWTCjkSULLnxM9rnTSgPngpFXY8dKyRCdQBGiZmNUpeVajbxZjw5b1XFFYFFuLL9b9Mk8s7gd3icFuJqqNLNeee",
  "key1": "2PJSEtMdhFaZsVBqV1p8A71ShwCmUmUQfJFNjLVYKNS11GufCUhNhNR9XmEzByoT2PPZssdhbTjUKY72ogRNZp8B",
  "key2": "e9NEVXGBftmCwZo9VRCAw1sbufUJv6UmNBBNyt7taJs6Z7m3avu3vQhoWcaQhXEXpe5uzmz69xLrKrs5NSaMujr",
  "key3": "CXxVDUrwLNzjuzEtnh8sUc5gxSmMuwLymxJTWSMUjk3se4RxcHSK11AbjooTZCgBpronruFbZ4LKRh6TSsoe7NA",
  "key4": "2oBebzZX9SJVYGTThnw9igfkEwWx9DevNdJsm9e6YewgKU74K9kThPChrx4LBHvvAKoydwkev7fexy6xkZXu1HTs",
  "key5": "2ZgF3uPDp6stXBd5MTc5MFfXZDMKQz36KxHqidqcU2xVtSziyHLaKDLjGmvvF2GUSaTgjvKJRNAHABj6Y5KbgbYH",
  "key6": "3TRNdkNMDmFpUn41aT7LbLm3X68QyfZU6CRvzWGJLEUNG5hVsijJfYU7B8oguSYCFBLWZ6HAHCQVm6kHtb7mUPtb",
  "key7": "KwNA7sYf1vmaR6caNGdQvWipHp9B9iafYXfK9iExZQiyMPrcPmhT5cQwNs1uLXCUELJoHxFLndMLGp8YjTcob7A",
  "key8": "3xC9qiCe22exfitYKCpvKr2zJum7zRXDWxY5vfbiziqbeSkFtYkwDQKSTL9qsvqTxK3QM7q6kxC6M3Sw8jfoRNzZ",
  "key9": "2jsStbVZsdNBE82rhH4bG2xHPQoGtjcJoXXLhdPvEkGDqJamX7Hx8uNN8mKJ81wLXRJDk48W2CmumD5RrCyAuPTQ",
  "key10": "2PejTPn4LMx8tnz7qTimdEaH42pEuPaJqsS64dj2d3t7RRudrtMRGu6poooGiNHaRQbYVEU7DZ31oquPKi7PjgNa",
  "key11": "34bz6haZjdyArxtwkQBXw6qyF6npaRozBJqRu3N6Js9q3j5LYVvjf3y5S3uGiK5rRcFN4pc298kHA4FJHmX5UFLC",
  "key12": "4JfmNhVLn7cMVAS9A6kQkWZ4impKwacFpyQRaQxKJPra4iuwvkyhJKe234Bf3xCJk3hiAcTDn7qFqxbSEk8oE2Tm",
  "key13": "4oJka3UHTWGkR3nRUekdNP7NgoCcaUFcrb7y7AgjU9ZersURqkafs96EMtqz7L67ewUgA4GrfA7C17EJYqKGsePW",
  "key14": "59UAMHjubYfHuxJBBD6YJKNTDkvhZdkC3V29VEtvTHuFdF74ZMzcowk9XndRUG3ttigwhFazxCJRP4VLti1aEbeM",
  "key15": "3yVQW2mWgLVnmpwkV8RF3HGrcyxt1L3NQqrByVgHMyRoiqQC9cS72drdw4c4WpgZdAK7qW4Ca6fcPePyyj94hiMq",
  "key16": "5QKzbhdYgrtAannoMtJGMvLJfEJrTtCUwwLQJU9C1r2QPRrg1RdWGAQFaQ3JX6Yn2vtWgjzJedhrsd33YdnnQHEN",
  "key17": "yxdAa69gmGZguM3HVkTKCZJqf8kmyXUNaW3haVEhbfdR5X9YbuGyVTXCH8G6KmbF8aBMTRzzSEi5TcMQCpeo2qe",
  "key18": "2UEfWB6CYpPwUMFXxKmpyURcGf1u4HTdttEHvPCTd2F5hxXMQC54GhbtiXsQYNyFtqpSWiRvQ61qHEqETsaicGsK",
  "key19": "2u7U7GZdMBYZZ89PuVDtgFWJpgWepzgW1sx9tD5ShBJbutybkQaktakY4bnXST4qDTQTz7duTKJBrhMqoKREmty2",
  "key20": "4jTjds13dpQf9gHKDar7CCk8nTtDcaf7TE4DQrqzeWXrKWKjxhNLoe4Ltfqg4dqwg2DWAQCWvSa8sGBK6xsVSBoo",
  "key21": "3nvoFK9RHbgPfc1Pej7inRqWbnpwpHAWKwFpJvHTC9ieGs6YtHPB6JBHaFZt1EbrAtMJfHnxgX6vUSL7734tvaza",
  "key22": "5hc9pboSJ79MbRjyXAAaVkmBCQwNAp8kuXZXPrX9t6VxKHhnuEHSKrfVGhLK64BGXcGr2UpZgciuZDTqPEXcWnck",
  "key23": "3giLq2U9gbWJeK9qQoFh2ZaFjrknMMAsznEvKT2BdgDhypN2BxWKm2jonkb9h7KkZsEFF79uX7STkqKU5LWgyVUT",
  "key24": "2rRWNDDY7WnQNyciaGBuBP1hYDE9H4N1grRcuNGqt7YMZvS7BzMiBfrsrrqmXCZfGTuqdfPf8WEXQfKqHVaS8C5k",
  "key25": "2MsAzomhsDzX3UziJtMoT1tk8xQJFCGUdrUtLcyxKJG4oPapys7HUes4vQm2xUdXwL18jEXBxkLd2C3fw69DZmg7",
  "key26": "25xuA8eKmfJo58HtTEoWTWQ9z4Uf9Nhg1BT1kYSS1f56L81ubpQ2m2Bo8HbuP3dpPQa9iSV1GPPyQwTXGR4hfH4G",
  "key27": "27oiwPr16vUquuXv4mfr5JrKqEJMGBgvzbVff1EWL1YbgbPJtVSuHuULZsbJK7zUqHfN3JqX6ADVKVFacUqJ2tFC"
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
