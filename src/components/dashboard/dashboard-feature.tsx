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
    "4uUVUYwfx3vrhikbRCQ1pc3C5fFgfi47vbDM359pcWf2Vz1S6FMs9kbXGydkxLx7tooBvGs23yo9QMo4sVmZChRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nE7rFuKpRvrHLrTjKNXjUrdBhDkPX7YxnajXKnpVbkQYv9bScGZDXiPzKT5KAjFotdqEaZEEBptPkr1iYXSGQk",
  "key1": "5zEGA93sAaRxHLfGkQJTbuG57SMwGuVjAt9gYGiA1e9w6rx9AdGVX2duB6agBhSvS9vkbKcDyocaz8VnGqXBrpsa",
  "key2": "4vPhcdh5BXKRaUdCqQeHyDHQn7KdyM1abi7h1uqkZgJ5WCAxRkCc8Ya7rtM74qAhkdwheYAJPJWzqyzywKqXcsq8",
  "key3": "5WdpwB8SLmfkFwpnfRVb7JpF5n1QiHFrPxbtKTkrnE5KZd1tMFgNCfPKJSsoJ6AQT26pAAzKh8wDc13dPGKLfWWz",
  "key4": "5FDs3m7epAvZTsXZWDLNzMGV3itFp9RyzAfKDUy3bkzEZub1s8UEAY73TUmvSMHZWzAksJwmjXcGMb5oJdZrnmAy",
  "key5": "5zMrn8DURgpgHqtTVx6i537sy4M8uASNJwM8ajLAqozPeXAiuWL3Qskhskt8wSQ3wtsyp9dfgF8dZxc1ayi3xSvD",
  "key6": "3C1e1TB8BKc3n7EpKokQetkEHhJ4G2i9sbKjiS1QagNb4w2qkYoyFQXPioRyHBpm9nGFHgxXwhUCa9p3JUDgk5LA",
  "key7": "5rfjxWwoBfG5aGBNeqsCxLVNtc7VJYikKkCv9ZCd5JyrfxD1PntuZNCpx9MbLjTxdq9cSQDrFxSuWNzB3wELGqnM",
  "key8": "5CTpUT9r6jngjc3ohfepgGWWsQrmSA2xa9eX2duXFsFHUtpmxd4P8HW7F2U3KadCjWatXEMn49DGgKbe2gWptDbL",
  "key9": "27DfpqnCCXJfBukaxS6yLnwUYYkpSAGwMpudGnYfrzKsBUHmvMSNUyMaH8EREpJUuZJwmgsXfDEuQ8raUe2zkUZq",
  "key10": "25cHG5J6i379brSZo4zVJHwWLLjgY2JspftFEcfzL4NEsVqr3dUWKjFykm1Xc4967Li422XpcSokoS733N3Y1vRz",
  "key11": "3zxPzd84Dr6Ubwy9PLfXP9C9XxW7Ene6vEY5zean8BxzEUuA7msRY7BaqxA3XiU6KR8PJNj9sgjWYpTHDc6NHtsY",
  "key12": "451EHAVjSzYabRTtNTWbjsHasoQCobKtLi81XqTxcVh1FLCSFJhJKhaNdu3GRe39ok4SsPChcRfW4QcjtxcQFEst",
  "key13": "Qe5h99JedKuETVRedPH4apCF2uf4a31ZeCPY3sLmZ6XSaDDyX1YFcZTpFFM3Db89BYiig7AxdPFdin7CfB3MP6Y",
  "key14": "62ho5TNpfUBDu6Kt61uCVzxCLvSTGeZRDzeFMZwcaVxuVAsUXUxTyXZTzhnSQ1tSKf3FU7xsAp89a2XtYKpNVG5D",
  "key15": "4ZMhQcRcpNX65BACGfZCcpZ43EcQKqWPASFHew7GADLSeTVY7gy5vdfgyrYoLcXV8sXz1JvgwoJxnCN5AKa4PzcG",
  "key16": "2uLDjp1y8uRAU78AAz3GHfJDeeNuUYCgKtsk3RrCf2PHRkhCUXUGWPDnrwtLoecRDdVU6axYVyxR47HbgTeQZJPQ",
  "key17": "4Q9CVw8t5vLcHG9i5GBQ7HEQGB5FgWZUSRbgSJnRzDEh6Ur5WCpQEcFrWViPc9mnixXDSgp4Ny6HSHVpdK1BKnh8",
  "key18": "4ok7M1pKka58KmFmoMMWTZKZEaxuERxc6otmQxMjMaeUD3HGhSBWqZLEFjJpHqmjZtzR5gGDFYJtJXdoosNcUiMh",
  "key19": "4jaQBJq1FtGTLRg55qtzrWwAehpeP9sYn8bb7F5BT17Y9NqLsqiyrF8tPRDjKCytRwnDZ3UXKhuhG4UvRmstwwFi",
  "key20": "3aoiTe4j2wVTsmD9cYqHJDg9dQJ512AUShkWCgBNETt3EQDA8QpbYLnSmjxW99YuUfPA67c96BKpZeRvWb4FRDhp",
  "key21": "5BT51zx4QYP3zFom4sDnihA9urFgtr4fmhKdGcUXXAL37K3hi3coeT6tgnYKBr71VmfbrYgbvdM6rz5pxdAuJk9W",
  "key22": "2nLhn4NBUvFYgSKC2FmU67T4XdiS93vXcQcHcGNujQ9CoBtmfM956zaCcb2DsWJfwEgN2G4PeP9v66boN4hKZoRo",
  "key23": "3U6fMAtpgA9aRUL5fGm2vVd1jU4xaCg9FVU16P9r15PKSsWgKP9ogB4QJE9zEfq4Ez92L2mYnATce1z6dBTRYD5v",
  "key24": "2RZkgc3KtYmSDZtukUqbFnRpSToaVtFmUNMAnMTUEuRV1M2QjeoiNHbr3co8YRFjWYMma1XvKFMnkVNJgsCDiKib",
  "key25": "4FzAybpfZ2UPjix9tE73CBpkMShDf49mx1HTNoBw3VfubZbsMpX38wAkLMbuYf3us6RMgepKsG9qL7XstmGdEMdJ",
  "key26": "2GJ6fe5Sk9btsUar5Zk3QTWTrdvRQPmQbN9E64H745XhDdaTCAsazpnKQy3RhZ4oq43bbYBovFkHegKdF2C4jdPm",
  "key27": "3cj3ctiuFUVC5d29oqpNWKPyF2M25v4hKis4AZAZ7T1px9F6cpACP3Zqoi8KvV81WXD6fi6yy1U3DuuH5zq38bWk"
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
