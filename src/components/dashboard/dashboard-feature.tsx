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
    "4C5NKtwFSVQsmrkUum2VLQrbjhJUC8oNMbtubkgC9Kc5rLPkwcE85NzEqvUjWh7teYm24BpjWWW5xvWpWE8VMSkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNkmf2RgwmQGygZeSvuSv3U69sjosWwZeVhfpdPsubiyAAcUGENS7pQu7eH9pR2oa5cNTZE7kxHSAB8imYncSyL",
  "key1": "4pLLxU8cwicUf4HtuikkfkiWZyqPFpEa8TwAG3uZvB9Q2zg5eSKQ3pzep89qYWRhartj4byNfnLbGo37P9S6Xzri",
  "key2": "5WF8XbzX74fa4SuEuRjmM3SvNnwaGR7z2SnbzMZGJVZgNTiC3E5Ef9Ay2Qv1sLC6Vq6FkDWbuvdvcsY6N4NWi5cn",
  "key3": "f4e3r3ZWotYYwZJExPUagU7MZKBiDaDuGKa5r3AY6ShmoZo7RHXE1fVAmN9r37UyZbKpygYozHBTXbEFD4Dc8Wi",
  "key4": "4zi5n5nkps7F3S2NnKHFxePXHBTZLmsXM57TUgEccJVrTFWHs64UWZL9sSWrQGaR7zdMbMGKp7694ZYUpQqbMxD1",
  "key5": "ka1JVVUKBHd6TPE8NFA6QkLodUnjyTWuSzk9REm9urFDm61Mbizc4GA6tBwHnMowgtxhYq1y74wE6szWixTzP5B",
  "key6": "xkNVaSTmQAzrS6GDZ6JVUxh4A5ttfrhqyYouNTtZj38UtehvZePn7MiqjRcSzVK6XuFfDZgisu7Ac82YphzyJas",
  "key7": "2EwVQDaJuSSkn9A23KJ6wxJQUHnPHkWpCDWxD99uaWLcHh14sZWsAeFPnzvQZqzR2si8T4uiDoTkddoqWmtEdv3i",
  "key8": "67DQzKsKxP7p5Uvf7vpWg4ByHVBoLQvr47r4ZkzdhusMCBCd2fD5CFnbGE8rVaL8J3uBp8E5fPJ2648HBVqAVFc8",
  "key9": "4w7Wi3RjZQdTje8dSGaYdx9B67kGjvhGPXv6uequscDwPbzwoCFGcodqsqcKzfy5q4JWN688Tw65WRxuCTmAberp",
  "key10": "dN2c2eTM12gMFXDHpZJ6XiSfutZeeTuGWzbpEdCBJEvV3QMJHh8JGUbnzuFbJqRteUeecRLhLSzMhs9U3W33CZ9",
  "key11": "3HKKK3bnVFEDkHnGUEQGR9VyfwFAUHRtpW6FPXPyd6gigzv2yk7DrxwvVvYLjUCB9cvrryRtQFDWGroNxiqH15en",
  "key12": "L4rwQVHJcqUvnvchKuuL9TZScbcBRsaUATN4tb6dq9wExGPQG9Lt1PxHnScF4EiMRwxdu9e8JVoUMFuso3zW47S",
  "key13": "3twE5mGThfUgE2vdpCbTeLMM2M2mw6sfE2GHbHkHa2pmoq3M5CbcbG5mZAJtmXebrQ8HFawQxWNzEFKX83kGaB63",
  "key14": "5HiDX95JP895BNZFhRXM5ozyBtT1o4kfCrfvtyzsRUZSacFqYFzeFXXQ8M3c5SYWeU5EowGu5TGiR3PJqqwCdtCV",
  "key15": "3qRXBTqf9XjBMi9VixkX33oq2AR6E2zKaTDefzrGn6FCGmCSaRCQvZyUs7Hy5ombDziXyF6Teo3rfPoNG3Cyk3Zp",
  "key16": "61S6r3EbwHdRfFZ5qFWaskpyRPC5QaRRgsbAkcawPPmQuhB1aiZKUSHiNZ1iLSEhi2tv6RUW2ZgTA2Nstabyetky",
  "key17": "51m4p3Ks8dFqtMA8UTnJx8qT3LbdmsU5PSpafzXnJudWTDDXzVmttRWZiFwVuVLHcdnLDaETD5a5e1bi9mv26rL4",
  "key18": "24rjHBExhgspf45kNxAujsC757AwgEro5G4LkBorj3D7Gk45Lgz3fiRh4fsqgPxKBdqhU2nfdr56FjfgU5yNkKC2",
  "key19": "2icAzCfQiaoKTN4wj5f1tTFwuWqf1pbqkWDC3NSCRWLi527dS6UA3ixSmiMsnXBKohoMuqxcP6Eu7Anv2cs2z1md",
  "key20": "4U8THurmAeK8LMDMogEf2bwZYMyoh1xF9418bfnmtFgnBgShsjcGDracqJLigXsxHRJ5f4To5JRA9z4rSJpBuvn1",
  "key21": "4zvgt5aCNayew9EMkdZCCatrDmX5bG29tLcgw6Frj5RdNz8BFfeGyoy4MPtU9iGFkVMx7w78vuEB2VEWYpzH47fY",
  "key22": "4yobXcBmKwwBAQQkDb3QQaZYET1fkbyC13YGJwvbedRcVLwJ1CcRnfhNWdT9mk58N6u4gQHNmZMoJ5Ak1H9pZiBh",
  "key23": "3FcRTijF2wbBZVRjwzqnkzbE3qsuiTxtuJoDPxMwwdvi71itg6C9gTQFSMh3FiTm7YJQYjyT4ErFaka8vhT4PZ4o",
  "key24": "2ZGLxZbpkauL99KWLgpqSRNf1w985auJFufg9EiceFJKUaJbgRrv9DRxZhLSZu4Ao3SdESy2F8Zj1MLhZxR7g3Qq",
  "key25": "3CjhjexPUKeA3sQpoFYYKELVKnSZQyMgCry7N9hHUSrTPhRz7CAgFM81r4tqYwaMiF3o9xbmjGqXwzpEGQ7aJqpQ",
  "key26": "57iuch7Dq15vqtGuNoWsohx6pWJwsFUhVLMRwf2pwxBQDLXrsgZN7Z4W58iPU275cUqkpjMFebivtH97ufCPSyaR",
  "key27": "2z2yVJaC5CmxB5RVf2MTojA9yLL6r8cbKR3LNb1dkFCey6vmwST9WbUnVCwiCnmbpfek7xT9jEHid9m4QXZN42kk",
  "key28": "5Se9HRx6FwK9zgR6PuWobiWwJr48LwQ2mSKaZrjh7Rpa5JNswxVb9ZzdEXyP6j6FfXg45h23m9u8oYFzJ2Qg6quE",
  "key29": "677xVjpBUQBqfMq2w3eM7XbJv29xHVVTztrsHbrsBa6NRWpDKfkayQa7t4gt7b4UShNUsfzF4mKdq7nHndFBtVBA",
  "key30": "fWwZjFXDkE6K4FnqTTCeTU9mknLZUJQ2wJXCjJuhNzR4wF3sXE3fXG8Y2ZQsjEaFNvNxkogtfU729ivRvnXgVdn",
  "key31": "4uxgTwkhuTQF9AP386Eufd3gWFRCUD6V7A8y55qPNqn2MMRCidHMkb9QVfgc4TUDicXk9sCQGLmcEZnX5VnmSvK",
  "key32": "W8iYSMtmbbTe8aahj242MsVLzPUzYxTWztSWbfWfkL1Me5dpvJGLYXS6aip89xw8db4MxNoZCKSgzBwSKtq4udu",
  "key33": "5ovW4nDeE7S4JAiBnzbP5kxraDnDej5354MkQphwBP6MrLodk9aYR75bg4yAHk3qNfbuWfUuLqvLG1R6THd1pJJ3",
  "key34": "45TL7aogJ12C6UyL5PNHHzXj6reUDnybvbUUG16xUQUHsMunkq3zMR8mCQECrEa6c7vRD2kZUsGtM9aqudMX1jRS",
  "key35": "4E8QdquWsvm7oqRjiug5KGpwPp2DYpTyFVpjWMmSRCtecdviXagSXd2qDLcndeH4Xhzi66mFax5dDzGz26E3Wv6q",
  "key36": "yrKWqJpu8t6B8baaT2TkbKSXe8QMnTTAWNaxfk44r3L7uXE1dVKmxYXusCgjRFa24o6PxSBShVGZ7jGv7a7uvpe",
  "key37": "2vgGnBRGr2ZK23uk4UKa8YDV4sJqC3QibBPwjVREvP5EvSYjv7ZTsodqKPzK4EeRsVEkxmNdBHVNbFTmN4jq9PrP",
  "key38": "3Fk9s4KD9JNwLHyGfbrZkfv59VXXhfL4CE2dma3KYeR4D4UZ4VtL4dM7NAymKKb1p9FPxTVyLjz42GKgEUeJymWf",
  "key39": "4PzVRFFRZx6YEEJHnXhX3qDqJFfw43o6cWVjNyePdJVUbkJkqBVNKjyWFQjYhJUE6vRUc9NSp4rQCXCkwdoK8iRr",
  "key40": "3gme4pbxK9HPmRu54Lzy9CFqBEiB2Ye8S5jGuK1BYticumFtkraq54QaE9pY54RxnCXRh3mPURHQfwXPNZjijqaa",
  "key41": "22MeiE1ZzvpWhvj2FSBXmkk8KEvyQA58q6oN9rpKmqM3YA9pBBJbWXswX2kyzN4JCK6DfDi5Rg2nrVD9op56E54V"
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
