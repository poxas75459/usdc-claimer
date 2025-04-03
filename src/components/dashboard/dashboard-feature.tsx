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
    "gz1dUjGZJV6KeYXthHAkhBknBKR8P1rSSMHM6fqBic1T9afJ5xj825mUKL9GhznqRsUPPLGNYgCtFReEysLh536"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WiHB8bRwnKPx2Z1aVKyaaLYFXVj6XG8CwVpJUfh9VCGhjhAnMfZCtNyQZ1UWS1xknegp9pEBCXKC9NRv5LoEr3b",
  "key1": "4Bf7NnTB241Au7TFaiWo8ymYwX9t7B1XWHfyAMgUBgm42WwDzpZnCt7CCk9s5fT6jLasaQakR6GJUGNHvxgrRP3R",
  "key2": "2uBWZueHvx9XjQZRaUUXj7kjq6ndUcTQ2BvYTqNKcRP398PJwHyFrXrABvFnBMFiYLteAXc1adg43ksCSKkA7zEX",
  "key3": "5XzqMmmoQsjFrtFuEpcZxNAvzAa3AXoCU7Ct9XePA9jX5EcCC41cZUmmvpHhtuECnepKGWe5xDk3Ru5Pu1Wsv3yF",
  "key4": "5mAjCTwwpSirXH2pxXTNU3s5nLs15jc2cGTtyi67G9rJ2h8vq2nk4SygBiE2LeQiqH3GZnqbY1Q2enTEJLPpfQ46",
  "key5": "2h6NehAdRMwEejbvsaNoXgTrD9748mHXg2Es5LoYrWb88bCLSUWr6kaP4FNdKRYmDc2NoJBwujqPuL7BhDCU5F8a",
  "key6": "3nombS6JdPgWz5Q9x9kuTQzsRRv2TPUfhvdUK3tVQFLqwiebkeyz2osVXNUCcanXcEKUTDT3wLYHKbo58kj94B9A",
  "key7": "MLB9MJbQ9Mw34H6xsomC1R2iJeCJ2ENfzyjTBFkiYxmiSpNEnzHcpSPdnnT7JCd5Yg7o5mErwux92ADPznbY6ab",
  "key8": "2mQrQogevGVfakBzGs6joyyVYWpcZaxRfGnSxbH9qo3bKVqwmHv4rtyN95BjNpHDd65EPYCLxoZsWAZEvAgG32UB",
  "key9": "QGc1cfYmkDxUpmGVPHBp6EC5HqvE3qbvDTeUfT64XrcXofw8XnpWXDpbjeqVfMxL8BL5HXcnCEFRncixXyfXf5G",
  "key10": "3z1oKCWiepB5kB8rdkKcks7MhsKMDWGZBVdDGW5poe66qLYqdjaECHsXz3WNKBqVYoYkG2sTp4CQS4ygydjF3MNx",
  "key11": "5cr2ks9pT4ytabDtH4adMKyW2pdVSedgNuyFCxC7AQrR2GXzi5dM6oGzQDmL5ArDcwUjdFiPo2VE6wrBqywSFwZo",
  "key12": "5ueb4uRmwneX9TnuEvnfkk4gyGkMDYcqUrAh3WDiGQVygfxXc6T3zMnfohFiqFwNGU5ijEfRGjwMgHoyWZm6dQaj",
  "key13": "2AZiR2dagtjx54gQNRwx8wYHmJiv2SzGtQxzDoPvNqVZ7zrtuYYjPQ8xZr6nW9dr9uxYGNQ6kzh9SLrgWe6CkgKm",
  "key14": "5THcMsokG96u5t9uE9j4rHJ6FBvRVKbM5kwntGJyqykDY2Qr77DNtfFwGfUnhzdwr43sc7KjcVWrhABcqvJ9sBMD",
  "key15": "3nF3qLWV87PJdLNHTWGzQ9ZTStzCsJMrENM4izjkz9FCf7RaYfcP7h82LS4YvDJFPFyp7jBsAJDKX4qBn7nG7MxB",
  "key16": "4C3zXPEhqu9oQhKtdtbhPYnRVsgbiYiCczwHrYbyZnTER9mL6pGrypdcT5SwCuqJMVGsjzzTYiiEvCoFo3ELWpnT",
  "key17": "2tPgoJiRAc5b2Rt2V7knwDiiC8KeZEtZkd6SLsrXVsEidwntgUeXb1htSJSrRxwRNdk6f1GveYAeBnKBjWtnhxUw",
  "key18": "9V1HfjiTYa9XZuPBfvEWT7XuMQ932SDT9Augwrfk3GZ716ewPAroPVPKopPfxiFPiwyeavXa8A2HAJ98ziD4P1F",
  "key19": "4TM2svaesHB99gM1NbUx3avbnA7zjGNDH2gyrfpojHXLnKzeSyiJJdjP299bRkhYyFJyHrz9Hj1JBdCwWfBhgdff",
  "key20": "sv1bFtnp2cwAByRw2tT9Pg4KLjVW5tzrVKezAURXtKvx47RFNKDFVVjRZFZF5ZVmcHDXcDy6WpCATnzYXETzPWH",
  "key21": "24X3pVWjNAA36epbz5STexvAqCLSdNW7aHiYQm8cCVrXE2gHi4qpN2H9HXaSAaoyr83p5uKS3DcSRwx2EgYJb7hD",
  "key22": "G6XJBgmJgrHUvGEe9jWoV2WQBdxmFX4YXUZEFLGeciAzS9na8fWh6V4Wbh5JTiyVYAjForeRVcJxTDJCyPpjMV7",
  "key23": "45aneVb3u3LX7Huic8qysJ5kXLxxYZTMybqYwvypmwZaCAJHVRYTgWzQYm9YvsguJo85Tup8ETGsq73VZbgtrrgb",
  "key24": "3y54M2zYUfSA3PN3y8Jgcv24NPAi4wxeyJbsnCmcK6LntWxzEGK7msL5QTGA2gU9ztbnfZnmVndkZDbDB4aWfW8",
  "key25": "4fMtdXUCMs7fWEyGg5VQQ6AstQoKeA7597q2aqs6PKgT3MCjLu6Hd8s67ga5o7iUAF44GeDAMFSFMf4rDiSEspoa",
  "key26": "4hEtHenLLhVqCJLNELJWRd47R3L8tcwDbnNyaBAnNbPmfmTvxCVVR8PnaBXqyTHkmhEd2HbzY5tAJDJfaxdCc4Je",
  "key27": "4B6yyFqLHd81fxCkBPeacG7TREZo88Cag93fhEVxR4Y3xpqNRxfRErxQKjrwHjECsWa4uBca6uz5PB1US6hFnZuy",
  "key28": "369TVFqpwe3goSzaBmFG9giijd5RhsjoaJy1tdU4o3X4yAsvUAYpbtrUxQnXu4QoXmZr6X1R3f5cwDMxkaB7HGzh",
  "key29": "5fjeEVStsrZKqXDMPzPSpe6yn1DFdEE9PZXjmb4VenBYsxionvCHdomoXZeJTiDuDKuuba1zWj114xwSK9gDuuRi",
  "key30": "5zBVgSxL6mJunktgYkoHw9pf9nhg7zMUXtKyD6hGEzr5ydrQdxkVNDHHCD929V5ceMCLAhearXfVGGyjQsyutWuB",
  "key31": "21KCFNEc6sXYDba5CjzCFjFymJvLxL3tL7DCj8tzcvS5fNfD5xbc8wQUTgYFjWmigTci4janFyxNMwvfhn9hW1Sc",
  "key32": "5GqgZ16cHCrH26TSTry1jR3Jr6WjmMsMxPjmnJABDm4BH2782UuxGzCKV4abN4HsDyJunjzHhZgVvE3YBwawVvXs",
  "key33": "4igkXhZ1rvzgzr6sZDNY41QwaGe6xZ8bvusKTFGwms21QuUarYvmu1w9m8emyHXVPr9vhHoUbZxXdrjNBF4eEfzb",
  "key34": "AJdqvxRHgU6oPhRx436xQr1fQnf6HK5XPnr34k75uVAdS3pGp97WbWvj8dExgNBAXCpuCz3rF1ZnRQWc98oSavq",
  "key35": "3NmjuYu3eCnjXAq9PiVPShzTSpYDBNFHdXWQanCh1nW1chfxJJUMqU45XnU1MbFz3A8wUEejDi2UzUjrLmAtwEPy",
  "key36": "5geYeWNrFK7Dg8boAsAzPGTWcRFdAt2tzZnTJX8UgQU4W1fbm3ombjFPZCv2PK5kZRk9uaQicaeTntW9fhryvrn5",
  "key37": "424aVmoJmDCfD3QjnHfjG69SwFwF4wdfzKDj26Df7b7W68GN5PNuz3Tg91eELDcyw19ez67DGvzsxV4A9Ahxv1DX",
  "key38": "3TdDx7z6BHbftRWSpECQ45GEUa62vPKUF88aPKWyXskELc1nCbsw5A2mTF3LyBQsWw2j2SztLBWP4RFq7bqkfise",
  "key39": "5q3vsQYZ4yvhDB7956iBcj9ahvhWa7FUKUEgZFeHHYA8YhkpYeg5mvh8FtLEKbr49YmFunDbnMnwoktQ7kVievzR",
  "key40": "ECpDaoqzxYHVwZhuxEut5EuRgWvbrAkgnuzQMrwRiEa76fXQpGSWU6EN81YrcR1ccbHBkkzMdTyZndzun4SRnUk",
  "key41": "mDQkosqKbthxvzeifMjmaqd9dFxB1tyFK3GPYy2yDJJr9j4e9R5NQYptxwsAxAKXYUpfLdUR5yUSnDMezrMriit",
  "key42": "2Pmqibs6nC8whhHWppfSTZV98Z26jMBkvBUyt52xH1MYQpVJkpHcgorDj1ALWgJ4LMcZAsiTTiaXYWsQya6v4mZs",
  "key43": "21PmKqRN3TPVKpdDJEnS1rZT3zb9sXcZ2WkcHg4ZkQZGfkYJcFnNiGa57tdcwtMxfKs4AyxzTsp5NUYH7voGScDK",
  "key44": "3Thn5ZMB8sEJh3K1YLKQhBP4k68pWh49BWdgZZcy1EpN59g5npNxwfoR8pAiAZWqk3aCQ95p9JFpDN6SDreDoSWE",
  "key45": "VMvTkUaEw3A6z64KGv9LD5iX9hgx2WzjJkPJDAPMwhcDbU77YJ9conjhR2jW2DEzsjx3Y6ZC2wQjDpPtXNSJUbN",
  "key46": "3kaYSdi3UXGGuNncDc2eqXE5Tev95cToi4vKany86tqCgTCE6zQBMxNeCVVoBeqTETFYPb4QqiU9sYRPGiCgXavR",
  "key47": "3DGS3YE4rP4vmR1rZxZDjg2BexUarNdp8xUfbkNbAo1cn8S9mtPD6uWqhbwbb1t3C9U3HAeY31RDs71Jy2fyMTfQ"
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
