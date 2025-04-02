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
    "2HniZc2TbSKwGZ2QQZzEc3xiGgqo2FFYcKnKtuURY32sVfDBvoDg24VSxtkY7NyfgMFfYCjvHa4EPBqEL93f2rqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1JnFsigGj6xA8r7Au1mEgPUd2hHTK2xxLNHtrjQ5StMbqAn2eBXuPJhc9uHwf64yfCRksS1266Y5ToeFN3PGau",
  "key1": "4pc4Yuuf3wu9EZfx9qcgRmesC4bzy6kqUkZKvPt8Kq8ZEXDRPPU5V8iPPmrSUJs9u7LHCGsL1GdvJPXBWsRHSY6K",
  "key2": "x9tLG7dmp4EZUT3ZZ8Qx29XFeN4CrKsx7UqLegPPb6gyrKazLbPgzMMwqhB2UEz9FRfjCtoFgyFLH38ZqSfdwwR",
  "key3": "4ShQGQ8bSGdMUPGgSqBuojxUSy6frPXczCRDreDJdb4h8qxAQiNLyJwTvWy12mB8kXFanYSN6xFy3pRK33y3RGkj",
  "key4": "33iiBqnzFpiVFrWWAisFkqMSBU341WczajDxoFQH57uJxGQkLKpQno9xTt63q4iZXM4nhiRMNRugkB7tU8DhCTRH",
  "key5": "5kLwdGHXMC861R4tAe7HXyg9VGvjo54aSVxwPC3uSEH3Kst1EedM1Pv6rG4mG4FNDRA1SQFHSatYk2srG5USAypX",
  "key6": "HC9fwSZV7zuTenj9GWPS1SB6iZVtqKgLfL63otLs53Bo5F8vdXcwGRUykcd5ZJbadzJ7uaZP4TZQiXVN3DYJhhA",
  "key7": "5uzX63zxzvuvj4MVdLToK2xi7w1gjPhMfG4eRH4h5YDGLGB9ch8p9duxicq6QLTsdRs3osmcbhXHMjEngDKfKiAq",
  "key8": "5LfT3US8YNboFrcsp6iUFFP5fLtr2ctpmebJfGJsaTxsfq1b6mz4kMLA7s8qJ5SPiSCeqD6QtE4Txf8tqUfaZzqd",
  "key9": "4Ngzkb6kzhm8hr2dDDp7sEgZox2Hxwi7gAS5UbbQ6GP2h8J8JRxxpTomhE4e8e6grcXWTZVUdeBSEMRdj1cZHkAn",
  "key10": "37DhfTjXmeeJpBELvLTUEy4bJKKKLNRFyNFiFVVgpjbaeSD1r7sBrB5jmhSV4pfanPwxxA3KM3HbXot99N6gqYAr",
  "key11": "64NKRQ3Mg4ZNW5L89xuXkdWNaomy97hsKcZN7VZHjmq5xHtk1V8XxFEkVnYT7jygv311NVxRwviRM3qWSm1XTtJ8",
  "key12": "4PYP9WD8tF8NhYxbeQ4P65BvfBGCqpX9r8vV5kvzJRJuRjpuSS9Cprv93DygeDHhaUEnJBiZGs91ierzgaxDEago",
  "key13": "29T1Z8SErSEP8mNzxwAeSMxhrb4rjzNeYi7WRdvndzSmh4afrvDkW7oaWt5mTJSBwU35XLw96442FgXuxbHD4RWk",
  "key14": "XW1XiDSPjZVMMCMrcjMfJvMaSw8DBksHBrGPrPMPc2AgZTjbeCr6s1FCkyUVWVoVNqt6Q8RxRcECH5c3Puoiwwn",
  "key15": "2FBQNh9v981BHKyJ1jZ9sMcBSBUc37V2LumgohynvvTV58nVBduwrZAtGAjYvKiHZetqNqvBLdCvgLETbavjbbrD",
  "key16": "464ypZcG4pNthyPhYqhsXmRRZYDnfF9zfwms68GmJcJ5QuhL66NKpQWe769VNLP8je68LSrTkwbCM6fnZbdfwz6",
  "key17": "2F6nByDLGG5G9gKsuiMSwVqcoL6d4UyNr6vBLamWeXRo7UFe9rXvynNHk4zR4fbZgAsLxvAWWYi4x7dHVwU9ybT6",
  "key18": "4oPeRTDd9qh6HnmUe9ZqsvEabwf1T3XCauqQCjaheJRhpqiSe7UqrhD6E3bW3PVVavcFAVewrxyRFebkkAMcN22m",
  "key19": "5tfZbnnp372vKT7XUP9fpk32Qkw8T8atT7VmFSBjz327F9Twg2CqiSge7Ra1o5YXA5Gmp9E5WJXbf9A38f6W1J8i",
  "key20": "4ygBxW11jVEavh6YCo2whZtufNRXqYpdjChkSGfks47TtzEDT3ocbTmD1aGz85UxSXoJ9dvhcrjqD33SYQpxcwoN",
  "key21": "utZ3cV7x7Ms8HaSyT5R9SgXUksyFQppp3gBfXNGkQaP8z9H5wc8EpBptPBfhZb9qVSTPTBHoGNUiaGcesDuDEcS",
  "key22": "2eNbpKfGRJqaLUbxAgUpCvBYrJM61M1U1MAqdzWt927YwxHANGGdc93axqGPDMp16WLzZQnz3VCLqN2Vzw7jesAU",
  "key23": "2QTqYD9ommxmfNgBTrVRiezDAobzPovnYPLSyJFeJMmmNhyP7K8hid4oThrkFbsnjaWmo1i6aw2SDPDFbW3MQ2Dk",
  "key24": "4ebua2uDf4qfqoVEEHgZJaLRSV2LHPUSGBkBpLdYrDLaBV1oyZ21diwjwVXbkgRcBE5Sqn65Eoekm6iT9hJsogX2",
  "key25": "5cBLQ7wgV1S4KM1nNgbvEdMPWkqJs3jy94uLaPqL8bTwYRLo5azw9oDtxh4bworKphGcK5a1FgEb1zEjcdHr5HE5",
  "key26": "4SKE83pMYcaw3xWEeU3cRN4PMuSnk2PEUJ529e1GyZz9ziSZCxMuYVtyaZftC6gTSFoPkAvrsER1TmG93q5JbfqW",
  "key27": "3UffJa8WZcKL9jF77xKcC11wKHKBLtTeKTU99aD53x4BRcAYLSu2rNAR1zGuMpcvByMDrKPipuvmuQKAT1WDxn1f",
  "key28": "3H2CQwwH4UpwJHiwRpdsn4QFZCt5QQPGZwnz9DG2XyTJmX7wK9pjUEaFaW1GTugSscpQMGivowDcUpPFi9YWQV9i",
  "key29": "37kTR5LvQzhDsGSkrhWoTsRof9cJ1eVCKVpb1ypM8ijxW17JijbXoxWj2yZmCcFxQwAXP9BT4PzQQrv4E55vXV3r",
  "key30": "61mftVk7wZN8mq5VSTJ7EXaWh2mTtxTVLNXVYHbUzqBpAUypaXgcFfzu2eLs1kHPZgQ27A6uA4JLWgTe7FdmmeEb",
  "key31": "3GvBUxRMGwN8F8TES5sfHDKbNhTRaZeKdYm9LkHQRS8KsB2wa3gj7c5L66QYQRbyR2HjSETByAoewZCuw7Vk665V",
  "key32": "4gndhzgKw2Thor2kaMvsdTDM8oMaA2ug9dza1szCZcoU1wHjXhfuSR5Si3aihyLnsR88xQVJDeEQZqTqHDPKAQFk",
  "key33": "21B8YXpaFVZPduvNRE9ZydN1QCJEZb9YcDYGnrJWQjC36acYRAXUvkYDb2pqBbfvtPTAhjUqBz5KEguf9rrdbMLu",
  "key34": "jvK8iQgeFjK7Ydvzk3tvfjAD4Minjw2uCGvvbWfyCFdtqL7c3qSy3DNT1qcqntMtPBZNtNKRozLHrTY1d3MJxCn",
  "key35": "3ejj88nEaZebX9iR8Wck3ujA7VmLW7nsVhbiu8rjA3TeTu8m8kphz8AwJzHN3SQK9EyBsuW3CQx4kHUfDsGCxmza",
  "key36": "3qv6i73nwYr3GV3uFQLQeLWGmg5Ad56Kz5AnSvRhBbWbHT1GB2gzvEdrzcgaPPGgk5RR4iYiWWZA2ppzfNuDqsgE"
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
