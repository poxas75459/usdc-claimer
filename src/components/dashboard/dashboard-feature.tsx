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
    "5di1AP4FeuWVRmLrojasoa4chjzywAXVMD2bGPoKjHvqd6rCGhFieuZUt55gadWnQ5Mi9rG5WpjRkNtn7hUNQP2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UcPZJ5DJhsYeXCA8JSwJDBmRkpDPodreWqQJsSczuSpcgfDDxogHydVD6ATcVe7PQHFS6vQzEKpqP7yGXjCvmNX",
  "key1": "4nRdsUGxex3jr8FksbdRbC8NWHXG3piLXi2YahX4sRntZzhny5Wb8KAZW3dinTVAgPT1f6r2PHrwNsYWUnwekpLe",
  "key2": "5MLn1nY4VYucRbJcLXgEpqqJUQJY8PDM4XgvR3HkvWagQdpAbzXgVioz5WwW6vhCtGxbNT5BoaA8SsZdxdJxEWdU",
  "key3": "3pRYobqGnymjchY5haLqw7JS8vVhaGGYvjtMr7S8RoNn454JtneK1vcRtJVdtdc6iHWXyoNg9zUSJUUw4rCwkrG9",
  "key4": "4tVikcBJmL56hL1Bhxqwkxk8Fe3c4dkUSyKtsaqgzAraQMHq6BisMyVzpZjqJgniQ9ERsJUaQw7C8wqh5GFePbbV",
  "key5": "437MM7YFXC1kkRukmQRVYtUGTi3ZTpuUrT2WeZ3kHstaNnRb4s8bi86F8DiiDkwpRD4ep73rjqrTNv1n7z5pQtvo",
  "key6": "CMRBrHLe2RDpXY4VXjZrT3Dpwr9UqGBDPn5xCzsLXCL3Fv5p6XrYofiSX7dWGEYGVcYUfRsYn87MevnFH9tz227",
  "key7": "2bCtMnq6mF9EypTpDMSUceExTdBuvs2vpLNsnRvTT2WniNTKK3f2PPU8WP1m2hP7XEoLnGqprnBWhQpzeNXK2Af8",
  "key8": "2nyYcjjqr6nZYiSoxALqSSCukdSMAgWWjjGTMpjP4Jnq4qHsF7kTvknqkrNi2jbZ4nDLfk3AktMXiVo8v9hEAhvx",
  "key9": "4GgHsqKLP56XXZALesDSecBxLyrA7YDXMy6eoevRntyPsuWuWzyjg32rwVwYT7WXcfN6s4RPvnGMs9Dg8xWjjY5o",
  "key10": "5GAr3tCMkZuLvsjgSEBi2BTMcBAN8BSsKHdqNjNpSSSTQq7Svo8uKXmccMdP6BFanz8psft5Z1WnnThzRQ8dYjZy",
  "key11": "29pDdJBT2pBkpsnsXxw4RVfBsnDKpVeyuJmiwnswxNoGSeuYLceHbppXFB4iL13YdbsZZRW52TZDiuWtfoq63feY",
  "key12": "3JALEZtWm5vgXVNr6dsiZNUeoCefxyeyEqjwwL6oyjEfuWL2sPSCdXMkYdUGXABYQaqHHKDyK8Ethm4yuNCQybje",
  "key13": "22MDXH6XZoDPLCmSudnGPMTwQpLHKGQWLGH8baFBiq5HLF1YRxqLvUdMZZaUPvFhhHYdWPg68a5f31efm5PLcs3s",
  "key14": "HpS8TZnV7594denYeMXJYSzkqCS6rURHvxXbq1fKNm2qzcwLB86QwKpdKeitBw7nz4xymEJuaJpiuNvRxmertVM",
  "key15": "58WP3wxajDk8uKzz61d4ovPBDBbfLhXwP63D4gAxHAWZqob4j16ShnLTyo6gBJhF8JcjP2bC9BHuvEfrwYkvNDoP",
  "key16": "5yrZwcbynVJoJNAxNtPBKjuretfaR1KZnMPfUi9poqmQRh4ecwpNaaJdza5ER8SsMPjaKGuDM1fwZADgtJY6wEvg",
  "key17": "3RqfuhP3ZE4FX4ZTMUngvdJZwy45tfA5pJxwuFGcwijnmmUR6SnWC18fWzBDGUAHJXp2yQdrSyQroWeNonU5PtWD",
  "key18": "2T9iBaakPHrYvApmto9vMSTndAEbMuqBQB15PYaeH8cug2CFcbvD5TApo9qYVb5ZBppb8wmXsJ6aDy1KovKPyUis",
  "key19": "5bm4ixK5tFofQciaSkj1G5ad4NX3mNm6aMmMjFk5p3b7SbNuXR5soPKu4bQBvzYinrWJgwQB8QfVR9nbnPY1fiVT",
  "key20": "5cZv6x27MVF2Mz26pXHAbDk158h2vU74Kq8rKcPraYtxvRGxE42NfT8jicysaHqtrYWPmSRHMYNSMMsiQVpZqLhH",
  "key21": "2vyEqmd4Rx5BLbupwtsPh4BwjCxFv6ENrHQ3J2LhqWu8VeZVawEDBwdFX1kwoMDU5jH7deHXD4x67hURZERBpSAf",
  "key22": "3v6cm9cpTxfs7honjF5ypGLv7NkpPY9q8vYFEsoNJeVxDX4Zaod35ieCZwk7PoBczhM8W3bUoFSdG6a2EspsEdhJ",
  "key23": "4Wnqi5WcC6Y2vaqZ63mcPRa9S2e4yAW7HZgUDYu1TJhboKYJ4ENcL5MCdBru9xPpx1BkTh2VkcHWxMadfJZLtfYx",
  "key24": "4gQUZ9yUrBRtHXH4kt6ZM9hSVqeF4mG4Whvrm3FNjjVuSeFuMg7y9rUP1TfBqg7EwhZfr3RkTZSpRYUGEtuH5DpX",
  "key25": "4EGLm8stj28iyfmGBfThVo99kF2ExEqPHS1yB4SSBb9oEJp7RdgHUYB9qAFwHSRYR8PcvQRh6B32SryDWsZCzcyD",
  "key26": "5mgPc5J6bjBvMSFBv9fHrGNCAev788NWKDykqiGm53ykr6LwWAyc8rUxWvNsyBzssN1LFapVnjXxr25L1qDBCiwW",
  "key27": "3A1uHKjeDRQzFS17yMe5GGXV1Ds3m7AdsF3bQHUuZ166sABBaGDh3XcDPdwE5d4v6FjDpj4oTjY687x7D7rXvZ6X",
  "key28": "4t3NcKJ4FBpfiH6vVVnSrVJivPokXxwWiMSsTpGmsGcXcLfMsW8utzaemKQBWQxWhrLd59vftWjFYFxJwt8LXjiu",
  "key29": "52EK7buythi6LcXKpv1LvMCf8GKYp72ibtSMepkD5kG9mcYBqZHA3qj2L329y6L3g8M8mySWxtnYVVnDbBAS39gZ",
  "key30": "2EcADZq2Vz6E9qfNwJsiSqmsGgPpLZwaHnVEDTiXNze6q33eEbjHtHz1bir5Q6TLkeVQCmQqjfwzAaMC1tJ7ERLj",
  "key31": "hHWafxYrkYnc4PqJ3QqEfm8KCv2JGN5MGcNTF8iS1mNAuRhqKwHsR5G5uuDQkEXUkxxjoX6BEG2YjtR9xbso9Cc",
  "key32": "Mpkom6gY3ZyzzZk1zveheDqzjaCf9ofmfQ97r1QqQxTJqEJFDi619Rhf2gsXuZdiTh3DMA1vkLuuPvTA9SjKuAA",
  "key33": "nW4pc41d7WNZFvbusgtyTeqouUgmm2yqpUniXpoC1ATGagW9TMsep3oYSwp6yjo9i5qHp4Kj25VnztfeeJD7paJ",
  "key34": "2dcrcmZh7cNwHskNxyNhzSDde4pVA9GUKb8yiNi1FyQ43oiw6aL1e5GsV5wxzjhF9Vs8GRwtVUyodNR1zLYb6yav",
  "key35": "4tCebRpvqs9MKFMVR1oTkZpMWmncki9iUab4GVnEbxmaDEMEvDcYNtfyR8b8hspQYcQipQF2bTCvRbujrJ9cJeC7",
  "key36": "5WKLNUWZsMnZ7zUzELcPfDnva6tgrAo526a3j1uKpRiaeCZQWmEnWZjp4o88nNmZZP3wuKwgAc5VrdKFAYqZ1UjL",
  "key37": "5N1eLgVFqo6DF1e9cmNZt7BAUSZt4g6Sz4aCgfStMKEC9WqCwdBGm2Lwo1D6a8WyRwjiHqDMmN2NevEu1qr7C3Jk",
  "key38": "4hMCYuEG3j4kBES5JCQSZio8S5bbrbV4YnY46M1wxEhag1FWsdc4eHqKEYKSCLS5MtDh4KfVzYjFLpMeXzLQTyDS",
  "key39": "4ySq3hNAWNV6Ez6XEn3crwoLruJTvx768xoeW4GZ3XgRgXoYYzTyXVhKzdYJEH9vJ1ujK7wXSCChq6QhSJbzuYLQ",
  "key40": "31KBr4XXEkE8wz5kjKhbKVk46e92vtLdMQjEbMyjNfLxt6yNVMt1FaNRnWfjEC4oH742TcwDWQpTjQYm9wQr6paD",
  "key41": "8Hdcv7Mq5fZWNoqsBmDHSmyCLobqWZfjJKAPg9pmRfF1nkA6uyx2pPJMb1cNu9RaU68ZroZntEWugZYkffPavRp",
  "key42": "5t8uBZTLFXGQPGCmu9oPXFAHoVNwCRrBZcAA6YKrVuaPG8WjB9T4HCFv54i9RR5uGMBrGTJFrhMZt5yu7KJcHumK",
  "key43": "35mXSaWsfAM5aLqrgZKDq8hZURrJDvwvCEosccMtcwiFq2oiKuqWVTdS8YA217hku3h9PrBUmaPJXghPJGxSPYqZ"
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
