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
    "37oDzCCxqZaemh6dM7hnGH4tWb9SGDNQGKjx4z9UKLDrj7HTY8sdPtTyT6PABU4Uzj2ZdaaSFaMwp4F6p5JToQHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56E69dtxBYsJraQcANB5yDkNpJ4uW9iaMraE1jQH2gPmqLK1XhxJ6XcfwSyGY4PyfFXvrC8y6aUs5d2fYT7K2fa",
  "key1": "3A5MXUwDHUWbWPXUQDU6qP9GM6LN3tehxHdMXU7X6aBNNJGTxMHWoCV32E9bzJXM2JgKU8eoNi2hGJn4CmfGjFzG",
  "key2": "5XP1bG1iiLoVgQ1pGYfb8ew4MDjrcDqYWTFiC8SSJeFfT7xDMfazntssDGuaiBHJj86L6zsfNZCNASR7P6XdUVh5",
  "key3": "27GydebXer19VcNDosvByDzZgtD3VDXhyG11yrRmP8VoiNTxRjtQ4b8ZcC5Utuvh6sKDCuqZNNVqDFaKbH52it5c",
  "key4": "4Dea6Dndzm91RVzJuFDwtCjhGjZpNyZWVz79tt1p1JT39tE7HxqcvexMVzximyLU57Jon9BxEtmDdf9u3H7r18fM",
  "key5": "37ew7cWvjVkrruFfr4DJVUtxj9vJc3TeoD6ihsbjSirWsFuHM9EBgy1XUHTTELDiYV7xLxjzKbsLivedDFTsjDER",
  "key6": "5PzaTGASyB3zAtRANt2Y3tArycs3tgU3qPgejdK4fdUEATuMuxppstYJZTjbFNQwdoLjgZFYoxAzvRHLMFQ8M426",
  "key7": "3yFTag6REsPXmrgVpTpbuAphweJ165PwM9Vj8ZUPPrSQhAwhgBmiiphubCFnE4qTHkmBo29fHPnYyGRRdZHYe4dJ",
  "key8": "uajKWy2AQ1ZRqd6QsUBqudvSNCXTN528vW252eF9RkZujQREs29T6DN1jF9Ff9oWHXzKquQjNjSbGUi56my55ni",
  "key9": "2TmmB8Swuc2PRLgZTvd2GX5wLdKUBU7kJUEUER3vN7ckGxwP6K5hDE11D6ntXmBkvGXWTvKXXspAKMpNvHf72tzR",
  "key10": "3ndupNb6XTCiVsprDQ47qBDNRju22zkTTH82dJnRmj2jVEAUcwxoeewLcudGJyagxPvNZ2Hu9sbMKkrwmvHsVzda",
  "key11": "PYHh59u7eTBZjPLqF556TNJTUthko2kL7tPH8fS8SUDSvBtyHpJi3fPtAsNJnfaBJ1z5HZS85wLequBqhL4dBmv",
  "key12": "4v7bEoDLXaa1t7QQ529fSFN1XHG3wSHN4zCrwYWy3jr2Gc1iWmCt2Yo5J1mATw6nBFWBCLub3PLfCCb92vAz2nVJ",
  "key13": "tQZk4cVv9jdQWyv5ZF7Fw5qwBmu4xv2kMRsrVr3m813YJAyhYNyaGMDcNe4rkLjfUMSgBo8XXp45NdFJPufz3Sm",
  "key14": "u54No7vizLwMbQvcgkHLj3exqGueLYd6UJ2DoGFdMZ1dJXWhdca5k1b3EXcJ9J9PtgcuE7qCUGVwwE3mDL8oivr",
  "key15": "3ym8sVwPGDuyniA897bBe4todTM54doYWBvgxfoc6rFaUgBPZk91dh3vRAGv98qt6EzEsZt7eZrxwbSfmpoUVqcH",
  "key16": "4ndGHzvtPhsbQX3bTs1auw1meDwVT6r3JJNSfBuWS1vfbTy45YHDkC3UVnzApg1ndsVTnGYdCxcLpEdYnfvmCt1L",
  "key17": "3kPgq7rnrFJBezCzfSG8AAnfJzAFNwPtRqtebo3LB46NL2KXFBJg1v7pMUEtuoHr6EMshhc6R2XT4Y7kAYMWwWif",
  "key18": "8xb3w8ai8fwR3Rcvfe6HHqeThhAxxG6czJ9mF5eTwUEdhuzreymoFhKnhG7qAwFeYeNNea5Y5UKWV9DEueDpumk",
  "key19": "2DHiHRnWQSD5mGq1P6QdgnBuBH2zSnfUYtdUjJtTdMWBCU8R3wVwUM1jRuJHZwwHQhuqRQ5LRxGCi9axsDzKhXii",
  "key20": "5eb3hpchin18VT3JDs1uHJLNRQRXkweTapcBPoMH1rwcoBfjbyoX7XXVn2rLkHRtHUax9ndyvDagsbQqs6CgZQ6z",
  "key21": "jerF91sZYY6s5cQEYXjhzsWegrGBkS5hwCfMaYtRwwWq5qBGCaGgXG4oawXmMptRAkndGJT5GtPLmtXY5nZf3fL",
  "key22": "5ZidD1gkaagGQQwS6pJ6tT6UE82Ck6ABKv2RgFQrVcTbkPrkcDi7VqBtFpF8rZT6z2nngjRU9HBUtcNeX1DyQeRH",
  "key23": "4sumQfSwqHvuGbj83ML8XFEGuVkJN7m2T7n4JyvbfsUtyJvYidCssvje2jG9UrMHiVUD5dfmM4toH3rFFdiT16e",
  "key24": "5UrdMffytwAk5ABzvQqbDmKEu7kf8onUT4ZDCPFBDq7F7y6n3EcmsmrHjTcoaqWZBG9zY4962hhtmXvTJDzVwQaf",
  "key25": "2sXUepQWqQYv8ct7difYKiby1z1amLjtcfVfLvBEGuUqhdXvaQNxL7PMwkbU72tCcmu6Jfjtew4bU8WcCDKigKYu",
  "key26": "Be72YLmYohG95fciJzUgmFL122xq6zCK6RYqFPyBEbsHVmAWJo8G4NwAEZbW53Ug2tq9HztVLgc1pEmcE82vmmM",
  "key27": "5jF8eMp7tJrjtZ69j9PaYZULEwRWpXqQePUA3jzHeQxqRVV7S2HeyoN3F6MfE9ceMBYSCd2Yw1WARnqLSBTfRHgw",
  "key28": "3rEEnc1C97j3mg3fN11tXaogrpCHzevCM3Xx3Kfnb7nSo1pFxGXHnT7zq4XQNQpMxYu47RjPyrr244mWVwsBixja",
  "key29": "5gdxwwxzoo8jmPWRSnkkZiKQmuBN5EczAGU4pBvDzavDMVVndJubtCMuLeTJpmWhfXte2WPxaJ6fjPGvCX5vgjD3",
  "key30": "4wEMzshYpQdv9i1CLyFd6LbwDBYeSoWiAuHfx9NyWsh6ue6PYKEvnPyfGH9FjTv1xvDApn4hL2GjN3RtiFRg8fq",
  "key31": "9aQ4AAWKSSXkVLYpgDs3nsimPwgcJzjuM7N3MTvwsE7FtzN7PKC4t7ZvPXK4yabYDGhpJ85Sk3CZhWwHbmwZin5",
  "key32": "2qoFxKev78MTWwgcS5b5ufHm8uSdiapjMRTkFDYqgQN6t9iGo9RhfhWbMQrCPELXgHYUnvQfbXnXDVqgZJWiiKKR",
  "key33": "299vVpoLPkwQVVB8XibN944FtfAamm5d8h6fV6Gc1szAdV4Xv8gkPsougGsEQQeSajY7H34FSULqE7A3kPBSneyB",
  "key34": "65CBGuj83Ci6adQ9cBYaXP4hYAYBhHp6t9iY487roMWVCPGvGJrfDNjA8RhEDWASCqP9ee3vg7W5ok3duGEwMUor",
  "key35": "3gu35ZPBcEJWQHMkSzpYUHPhHXKA5rsHoGj4jPNK9fq4JF1MVSxS6SsN8NrWht6967wwS136BAmEJrN5um6GCFH9",
  "key36": "2bDiV8ztVBNnQLVgP9Nf6nMSyq6SQYjRP3kJRgfRa3fnskQXhwUraHDu2s7CfhvYqZssUyC3E1SUcJ7EWz63YmxT",
  "key37": "3mxACJBAiahAkLyxjRcShuSo1pfaQrjE2oJ1yMFZkFFdo38wm3KtmhUK58U3MDhq1BcJFjA7cCc2XKtLNq3zknk4",
  "key38": "5oqEKTwwALE8UympPWvpkbpBUqJ53WtyU9Y61Sw156jYiV2geXPeZMiBGjR4Wc2sd42hHkCL8NEGdMNbBvPmMTer",
  "key39": "4GGDCisJSu1teq3d6biwi1w21oKjKzMm42DHXaFybZqNkELNpF5GwUN4qts3Le7wJrbnJz1QjvVsUkaA9rj8Qg9q",
  "key40": "x935G673heuRmpU7xkzqVdrkro8Ea3n2reWTuuBkyktoE7Fiap2p4Y4wikMgGNFJ8TSqxmopj3KHSpk5fh4jQSZ",
  "key41": "5EnyM7PpH522ufeBsXcihDFPGxv8V3fqh9Zp72RYWRTYd69TawzotnUJgxuq9msaNYWwVMKXp9DzYviiQ4ftNkUK",
  "key42": "3pigmhjot8B4rbj8dXJRvfmM3xw3Gd5d562C12hijJCBBhnzRkNmZaHaXPgcWUAqDkNMfPTA57fsJLKEmgKUmYed",
  "key43": "HV3Resrfnn5CNHGRshLrjLj3qgJ24PzbGG4CpLjUpFfJb7Pk5nRhXYQdPtEfdWe3iepEGcJbVR4merPRg1zZuRu",
  "key44": "TeV9ApnK3HKkS44Eg6yKvsGx2to2a3ngbQtxG7BwsSJNpT2JGHhbBwaEv2J4JMHGqwVycguCdHUD2e46EwuvqHJ",
  "key45": "5XW6ZptpHi73gjFmbS2JggE4HckHLn9VcnCw2T7ezN6F7LPn4xqEPWH3F8ejJ8jUa6SviC1SiJ3uUt5tqHuPxnjx"
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
