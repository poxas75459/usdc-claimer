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
    "21efVffHK3YpvWefbgN7EowMZTHfbXjwJqCzrnWAYRVe4wFcK1M3bJsE5DV6EDJiVzxjKadmKaGRZJF54ymymN5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56kdc7zXe4jgCqdjs5PVoudXfSMpkSoYB8P9cwZFBLa1f3z7KS9HQctMsjoi2wBMFtwRtK8VjubTBuWvoCEhFrnB",
  "key1": "4Hp1b9YG3sYViaUYoxvCRUzFkahSs7cG4vDHiBWaQ22yrXax66kHWRRHwUAPvjks4Q6iC8B47rugEFiTbaxYRgUm",
  "key2": "zf5cpdRDbi9gE8QKJtK8WD8LZ7SBXwvpMcYYmkDoTBSgmPaCowUMyLhqcBoiTVmu8xNLRYNTduHkRcheRxkTHrd",
  "key3": "2AF1Mo2bCrng91WV3KayPFKpf2V4FM2T6iWZQjGB78hbMpbW7MDn3V9fLFLwFqiS3wByyCm8Hjaj7XCDE9Ziuwhr",
  "key4": "525PTYq1mJrZbhuDBq2F2bKgUyKjKYwYrVkqYDHNxpyhR9WWRGhbvQP4fkV9q5dmsAMsHVTu9Q59af6ssf4gjNjb",
  "key5": "3rM4TreLApy4CTpMbtu3PxQv7WtfN35GG5x9NYPaVSkACdPVDQyJFf9KZ7NCMHqDL8YDohxkPLkwzxzih3WSaKVu",
  "key6": "35XcccNYvQf2KybmjrgosK5QLbAJHnunnGo7GaxjbBatG44csX9DCRqUZe1inb4Sfrckv1HPyRDduUZrMXnX9xRz",
  "key7": "oeR6N6Jqw6wQtK9YMFwr2uBArGn4rCCewmDWTRkdWB5F4hP4DUxDkVgszx5dNLbYpNysE3zqD213S3bqNqQK39F",
  "key8": "2cZapxuH8itUHZw4MFDQcwXB1khE1ipJTWndrnnob8Pmb2bvNiBe2EKmRzsX2GcfBFEzfaqx3gb7sU3BZhGtwbZM",
  "key9": "CwhUQUDwVoc82TqT857TUSCh4isbmFkFAGuEUNd2XG46XFHUyJvzzxio8B9GSSuUNYq4MBEMZs8mBFRZC4NSpDL",
  "key10": "4jdxMxRD4xbAaYAt7Q3wFj2KCPhtWuaeSdB53mS5TotXkKidHsKVHZ98VKQkMWNBKt6mosFgNark34k3GB3k3uqY",
  "key11": "2kodBKEFxN4kiAh82JNdWXmyp4rwWbS8poGrKEM6cDLUodwG3sA8PZiq2RTGVwQpSdbbcJDo9RCfMLJxTHPfceJV",
  "key12": "2EAvD1JgnzY7ti5S7NhdomZdkqGY5BRKSHtbZqceA3nDHZYHeaM3Kugjyrwe6EB2TCYe23TfaBfTyY8HqNswGDAc",
  "key13": "2rUqWfd92XzrcXdhLwJ4QNVUjbMXRLsczRTznpQeqBLZEqiGyBPxbQmdMTgQxCbyEUm5xQMXdQWaQM6SXoiYgFvs",
  "key14": "2XXhLvbwejgoKyQ9XksDBaEytA53Ya2n8BVEAnn5QtjqU1WvtgsnCqXwSRB6q2FPu89xfsS9y9YFvBxJCX63Fday",
  "key15": "2YNuEdjdsxardPSKUgHeRhgmWjtPxHriQqP8FB6uwNnDQ5tPPwWNi8tTXzdATRodYNm81DWKVggJUZnHphQUH4JT",
  "key16": "5c7X3mdH5jbxSNzrBD9pdFYzS96vPxxR3oq5k5LKnD1oekKWrEWj1UpPhskp7P75TmDAU19b42cUoNx16YWEr6Hm",
  "key17": "q4CveK6VcopytXoBf22KtA7Nt2TsnPARvACQAKbjGUk8ao6XGqLraQaLpD4PmSADMDgeX1BZUyBjwCbj6KSwSwM",
  "key18": "5HdpGDiovygMSrgxtF5Wh8duz55GW1TZAhtNwAghWMYD3BxbKXUFd6iRPR1ZtnX2RQmwVt5s72W9eBTrMrFLEU9P",
  "key19": "3irYLQEmuUAjkVd1QrmMYPRkbMhFQFgc8JWvbFNdiTFzu7AS2KPckjD5TBT2D2Uo8vTYDzURtmYELyJdEL3aueuB",
  "key20": "2V4UL5bTP5xRNb3gr3S3gQ5gsPZ3pncpe4RRfKoBtCDp8pyJ4PWHvijyHp54ZMLnrYg6GAbt3xYgg5Dr2FtQpPA6",
  "key21": "5MAJmYSZeyhscYoDiBnPkuyjRgLwZqvnjQYGcdtHEQefGoiDW9HXXK2mBuShgsqQCLbqFdfs9bcEdRQAYkKaQdAQ",
  "key22": "22TGZbep7qeXnFa9AheLLgrUiCzF2LADNhQYnoTQCMao5fDHEwXr5yBDCVy9wnXUnDiYKRDUaYu6cQMJD48SSt67",
  "key23": "4pBDYzt8NpSPNiJJKeFn1zBBzxiPX8reHSeDFYGj86sPfoj3VAi5DEi758AzvatKhgc6Z7QHXTvB2L4mzE6i7axJ",
  "key24": "2brayuqRLTG6hrozZnoJCWYz4ybB5DvZJGhLedzkDyaUboNnM4LqisK5iyP1ShCRtZvFX9xwavg6gJZiKw1ZTBuG",
  "key25": "2dDGQKtBjyKFY7V3aUki3B5LqqLeHgbRHDvKhjAF2aSsLE1DgPJGRoh3344viy43RZsqSKb5PzCtxJmhQ8K6Rc4m",
  "key26": "5AEsGD1XqhMcDtC97ZagQkz9b4nDJ616VN8AGPPtjDfoE4nNysFAhY8whQ4h5bzwAaKQE1Q38kMsKasy9emSWq1E",
  "key27": "58uMw3SibU58VDFktnDe5b9JHxuxDJ8mi72DQKZ72ZbZTqeXBMa6N9vs5pfbC6GiJQxAYp7ytZPHotmJHtscLRvw",
  "key28": "FJbCf6hCxqnqFE7tVtmwPobzonCCWLmRPsvRRmXovW4hYcXhLNiccHHaY4tc9GAW1eToKYQqSiDavhMeDYWPWaY",
  "key29": "vUXrGeYyNuwVLeyVaX5xxvEn9AniMr7cK8LmBwoYCE1sDvcdWqmAnskPyVX4jfL68vSyJ1VEuP4VBaT5bzyYEFh",
  "key30": "3D9U8BhNqLxdY5J5MnSW5DF6DM9kynmy1zi9cCTFiNCicLv4MTU86H7AVt4ecvGWiuPQoJWdi1jrwjMcJvuHg469",
  "key31": "4CEsDePQjjjHRVkjamLNdSJdr7aqBEFScJhzVHEqagqhfH5usoiq1DZP67U3LRpvfJboVeb6A4m6RbPVMpvH6ZB6",
  "key32": "35frSY3tu8urDz5JoJ6dtP8PkN81a2jAtxZRB7oRgN6f4cqQYyNLLwmPD2XDg5i8XzvLEfooknmnmJKo1Q9NpNYF",
  "key33": "34zDKY9i951EctmrVzsWTyA2krWyKHWEFEn3r57bGFnJ5J47Jf3XRwQERHrqBZDL5j2ukLhJCiX57ZsEyjf5F9BX",
  "key34": "2j6RfQCWbPL6gHq82deDPKrUm8yyM6bntgefNX4a4HNCK7BrS8hLcTJ6nmuySNWscDsfKtCCHEV1UU6EwQ91FS5D",
  "key35": "4VaaiUa9AXUy7drWLft13B5Z8EAuovM7kVnSqKiYNY5w9zfChdLKMjo8EgzAeoWrHcwffH7VLcUKEGYMaJNQHrA9",
  "key36": "54PexZCEAmSuZJkpeX6iCdjfz54cq4P2vuqUZ3ssML9EVwNP3857LZwf3PAi2f325tZPYPFYRVDithdZZzuZG11a",
  "key37": "2RWv1AgFLtzJiCMGeBdp7a7AM4CCecdyEdRrqD6m1ZA98mfncB5PnC6ebvYXz3iq3Q5UMS93nreux7D4JFS3zeog",
  "key38": "3udNR41ab1avXXvSwXVhu61sX6JbVQuzZfpccKdZzVuw7DdTi8zEKgqvgYGf1PiuSJFXNLBimJsH2wsBwu3zzaw9"
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
