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
    "4H8U9v2PwWm7DNZ4W9sZiQoxjoJSGT7aTK7aStgBCvZpb4LWbXMnz8UfguRBTbkY8vxfvkexixjJWrPwyGd5Lhek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48yViHrAZGma863WbghjJaNmMTmaZzd37ELAQc8Niz3nYCopNPQBdgtppzyxngn4tWN8hqd7gCfSEDdbWVTyG5wr",
  "key1": "5aCnZC913DhkroDddCQqEfkjYGpP2PodUpu9N2ZA4n2P4t6MHE2gmDRLKncgGwWr9JkELMBbqvqTuwERHGi4KDF4",
  "key2": "5GnWNp941HaG2rxPUNobCLWK2UpdNqLJQa8uvzJ6v6aUTRZbNSCLZ4Yho5GC27qawXGdYZwqgQp9aNSNR2tgcQGZ",
  "key3": "2AetskCriTdUavAiG9DfpDqAPFWPPqYj9Bi1ky9NsCejJD2dmos2nqN5FuwyDUnrjvzkeLZE96GXeHbCVJW7ytY7",
  "key4": "5dCF9HGgU4gQreM6ugaQiatRHxLi3Fhciwgmos83CiRtpTxeHe1SdQibFoxLuLzy8W5SuQf7eBXf65Haf82ru65g",
  "key5": "ehzhiQiVXNP2Ta6qGPK8gsDvGS6mnb4mKw8gQo6ta2oXPEbe4vkr2oLREnxtAZEusXgmd7aqnArBRyZPibawt4K",
  "key6": "4bvqKXkeKoiUo1BHG2FbvQUokdw3QUZDD6mnNrM9UB3AKgjrw6g3okUyVVYwifjFsKHKGpMDiGeky1KHcZ9zoDXH",
  "key7": "2k2SmwQtqmn28TWvXt5eYqP2XxZsyGF6sZKSqAZr4bnNKVd9sWxTQqb12wXt8sktbSZHYqmg1rkqWN3VknDxWYCc",
  "key8": "4yNWo55MnbJdDwQRBKBenubZRHboAMHjZK3Ff1S9rUtfsgZggQFviyrYPWXA7QUDDtK5REFtEnnwipa5C6DVqb4d",
  "key9": "4mhMtxwaWVyGgjVQHy2EFh2DRPs7o8qQHNwRiHeiJ4YFRgj8gfkehEvYE3FTHZgGauBgdM4uBVd7vW6bSZgDVQFA",
  "key10": "2v8Rvst1s2vWG46hLcCCnR1PHQeCXFKJjMKNsVmLg2Zvugw3k8MA8E3L3FckQv5Xj5KwMdG19Mu4Upiett8gztz",
  "key11": "4UYsb4iQrqHkYrA9WrwbiJzwVpBedwZwoWuZxn3hcWX24ZSY5gqDEvQSny1bafE5nE9bztm2zfzNqmJbqAdKfWwh",
  "key12": "3RSjreHZqLxTxADtqKre4e62ZEwFKFbQPDbJn7iiE8r8pj7VNqsDbAh7CZZvbWaFxL7JCLZnCW2BZ4yq3cXx5aGe",
  "key13": "gw4uuiSaJoYzgCdEKrtFooxSAC3TpRX7n66tN3ciLFzenvsgFjGHu35T53qUb1Rha8DzqnJSfFtapqPxec4gwBj",
  "key14": "4aD5WArxmZhXSCMSaMS8LGgqzddUkA21FLmr3ysM6HJ4zSa6ALieYzEHf6pRPSARwp8Q9ecg4uc4kVrCyA4yXKs",
  "key15": "4aXtRfPegjUNFPxjJGL8x3cFWNYn453o1R7qWdX5EE4U5iSwk4VFrZvta3m5TrkqF3f7fmpLCkKaNAqhbV4PRnad",
  "key16": "5UAggViAPFLLZLbGQafvJcan8JyJU3KSKd3GNVfeTGc6775ULXYLb2YVUbZP6JbyMyHgHsBA8g2B5vK55ESf2p75",
  "key17": "PLfUpQobyz5CQ6mznCEpywvcotJfp6dGHJhLvMnAfN61CWgvX6y5BKBmb2durH2o7uLEMQ5XxZheDYSgGHFx6wp",
  "key18": "5BowMn246BPxx3rfkawx96HeVn8kaewgo8Dg2Rewxr88b5ika22xRmpAJEKAnsNw6NkB2mcAV7r2RWmQQrokkJRB",
  "key19": "3LPjadWU5u8eEa7FLwC6H3WyJoddbvwDiXfunEWvYUmWiJtk3ZqKD8ARHg94rCVWQk8NEvpgPU7hUcTreqxEqkuH",
  "key20": "JkHVJc9XDqFnV4QKLjNwsEJeYh5A5x7dcTLFKVzNJWwrE8fmT4Z4fXKVFhi9DZkDFLWuUyBPN1SY6vzVu1H9uyz",
  "key21": "5Yjnu2bVJD96E1Gky78wHy5BjmJ3GcmSwKRZMvyWFbA3rJBGjCzVzUDmcM3XweXPHHK5k9qRqAdkmK34E1rN3q1R",
  "key22": "9uNHQDMvnB2ceP9KExv36F5fBcRVGL3ZVnf8MJ7tsbretmcwMrJJ5zHrk8q4ks5bJQinRNGMD315MGBkc8f2PZb",
  "key23": "2sg1nmgU6sxMfFPvhBJupeNF5HZNCZe9MHqPxewZm9i17tJGZn78KP7hXRSMu4VEweumAcCxGkhpuPqu5bBVT3o4",
  "key24": "Ais7A3F8ju8M32ddnJukgh67wWeWCcacqngzFZNZKtjVQK27vfwd7S9akZ5W2dAzvNmvQoGkAU1CiZ6PwvTTQib",
  "key25": "3aYH5VPmNb7t6bJFC6kK6AHMzkJsgHwr2mLez71gFiX3nmxEz4HjCUkkCRQSjgDYEuPhh2eJp1qVdAySQg9RyTRw",
  "key26": "5UK22W9vhVGiXyWgiHb2PcHFgubb6X71PGgTP4ZyTaeenLCAqiYJP5XYJLUtE86NMn99FLzRySpZXyQ9nDJTTfWN",
  "key27": "7cu7uNnP8eJdEHoP9yfsZgbxnqnevZMV8pV6ygh7NNtAepZvbAg5wXXwsbASbddQTev3AB5geWzqSkzgioXCN7R"
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
