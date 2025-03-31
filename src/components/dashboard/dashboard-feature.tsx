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
    "JqejJaGnyHnjJv5nEHShFxJZs95hn3UNGtxp1yCguTygDdcosWpNTxsxf62AX7m47esGbG759KWxjRcah2Z5pYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2duEb5yCTLhiBtQpN2v9KLsmksUvPHkGvjBJXnbPgt2mZ4qYFoas5EgJ3accFCeKsnfrhjJi5Ng7SQW8K5K9HgQ1",
  "key1": "b6b7cqb9owh7QtjmsbmLLDsKuryckXP2PEZ5TSAx6HcMhtwsQFMHKXznC5hxddWznhPDChwoY2MrVadAjVvcvGK",
  "key2": "22WhjYy3Z4SHtq6vLd9N195hsgRPmeaM4kKUQWW6bdtMbuPcwFWGq8a74eSSBneAiKxLzGvhWy4HtaU38Xi8Ywkv",
  "key3": "3j5yKa7NJFgAg7sKYtWKa6rbeUWbpgGtYicyRwMdb45mMGQtmNephgAXZV9bXXp1UnZv51jTJVmhBvabuNvUYVWv",
  "key4": "64FqMbDcgUE93mBLLJv8CPJP9C2t8QksfasZzaQSx8TuknfvKFJFphARdcg2mtCzbX6PCTegVUZfE3mqf6a1wi1N",
  "key5": "5gesJirSw61q4Mft9HRA1k7GfsmA62yptaxZUkMR8GpGVqMqohnTaFgyjwvkC1ghLxak1MP5oHHj5Pb6pJ2j6pBG",
  "key6": "UMoz8c9V6N3TDMbq3yvqi8b8vbCHQipRLcHS6g6As88Z5kom24ZzGgKLv1iZg6659jwWFx3LtnCSNoNGNp7Ti5k",
  "key7": "4M6wP16vhf4kBaDYzbias6g1sii3Tkf6dZBhuUYs4vSXNhJPAkcsZ3ZFe4UZ46Xe4NyHBftz5b9wpb9s6Z4Bq3Xs",
  "key8": "2qfxY6HhokKK46TSu4kwEHrEbanxJcp5vg5eAoDpa8pSRXXjnBMfmkhb5yBqRN87jgwtnhcjLhav44K7pwBhwT1g",
  "key9": "vQ1zf7bhTMrQPNVXnA6vvybosnALigR7T2pB9npXqk6djYNikNxmir557KPSWqk2XfZejdreowsSfMPW6PpzLrP",
  "key10": "bRREbyFfyZafnfipYVvBP288A3Zp31iZEssGrkcu6h26mKi81dXeQk4G2gahzHPJabzbKzgDa6f1CUigf1yKd5d",
  "key11": "rKYkzVopNbY1UatABut7qwmWTWXXNprEHRHE1yZLNxVYuQHA87ZBtKWWA4bZKh1ysNQKcM9z6AXC7RLk2BrEK5Z",
  "key12": "3Yxd7jNYhZkHW4Grch7zis2RuEdN1sV8yuKU7pZM7XXmbghBNVP7xNCRhfq34YLm41z5Qbdxmztn3gNUH8Y66JVR",
  "key13": "2s3XQqMtWNsxwd9uaAjqYRVJWxtijynYGoBZznfCDxtWvUMG6cqbfvE3FESbyEFunirJBYNWhMBANeNXfVqVetjG",
  "key14": "39CccyA9YTHX7RCCdakXW3hqmUKbNmv4dmiQWYhvGgdYi1mZCx8zuUoxA7qoKP6AnPaYk5tLkf24BYmUhsn1WxQB",
  "key15": "2mJkzQvo8UvrTk1oF8fdcM37iWQkYcdNNiaa5KAE33sR3RpU2Gp2R7b9NrXWftixSTzumEddSMHpsY5y9no9CDgp",
  "key16": "tzf4hUMLYCLNjgkjgoozed1vrsy8FfZ3YBhqXKEdhnFGxrWHHUmGtUinPyQzBfNNqxbHUS1xSPWjTqTcTQNQEz3",
  "key17": "5ZLjXkTwXTW37MtYx5A55c3WY1Rg8fFA8MuyYZFrc9NfHmNoBADeMr1DbqpRDRNjeG8t2CQSA8b5Gqy2NKAX5GuX",
  "key18": "SGSY3VEPgDG2N3przvuDChzXabhE97ipZ1zeGGHYEozdyTTy77XjHCuvJHJEuqwnNmMqhe4UGnNSMZVaRNav7FX",
  "key19": "2cxN55FbSp3c1U61HuThYTvhDpLAiDaLFQiAoHGEwxS3tEz6Rd8onQfkpgeVVgyy46zDwsBT2DCEFgWoS6SMomUT",
  "key20": "5eznmJ9FDimcsvVXKLFMGJUFCFBX4FvPF36dVs7hdzxXgbkCDgfgA1TRSF7TxagVPHjHRxiNcZnUMXkNMb3wpoCn",
  "key21": "4kckGBJEXUE9A4Po11AfbR39q7nzpG8o1NsCcsyF356188sCZ8zVxHwPXMyPgHQmBqSn4pmivVKKZBuRKqzJ1cMB",
  "key22": "4iqZjCWanHAuJmQkwBFDNbbAhdQB9nCbWaBMk9BhLJVre9HeRMXJuTsZLTo5bHouDyoZNUfvjujpczpu2fA5BzuA",
  "key23": "4SF9p67gzuxpK3ZoMQ3K3nX1aXAxLKdDJTwkp6QyXcXyADArKH1vPbRVzA9wLcdV33YGBK7bmLFm7onEu6WwaxjC",
  "key24": "2DxthYoRrX4Wi7pxJYdFcvP67TBDobwMgMymvsYrrp3jh8yXsuP2a8v6Z64BhDUyc2neVy4nXTHPyTgz3PjKvupV",
  "key25": "7Rp9gc64WPuphumfm2Kbk5rErGG2okbBPKVEfvmgqtd9kVKrr82YjdHpWkcfThfwdWm43ySKPvjZUjZY6rARh8i",
  "key26": "4zSV1SPSMdV25wHTFyD66QoUkqhCttUWmXTK1ZEZswzXXfELtvTAKkE1EiztSwVb8hR3QS4CAmQEdNAYYe5inRfc",
  "key27": "4qBp6QyRhLbx8NguFPEGSbwXGsdbkLzA3T6GpVt89ouU7ReSedbk8LvsooA3XgPEakVBN5S5HkqVcHekh7yeB4CS",
  "key28": "d2QAc1MbNcHwdLh3X9ZXyM2ZkeMTpbYCoezYuRRzRYuXY9yqYWLp17yLHn1UJ1njbxWEGd5j6BF3yt8Px1hR48Y",
  "key29": "FGBKE9jBo5hNyx6Z9yRBgctWtZpuR1Xa8JSoWsACoHGEvPLMuZfdE4WJwRPT53uhd8SF2kedBVJEHxtnrbbUvZd",
  "key30": "46ijFKbtDmhndD3G8TbDviAA7ugb5Yg2fT76AXGXZovEZfLcSrhq5WSBq9a7eaRHMEsMraSQKrrWcN36688rSiPN",
  "key31": "67FsCRb9Zcfc7Y6Wb96RCbzDgnTRkGhtqqmRYpBM4QdoJdcmwJxf5zBDkF3RJb7xhDBSpKuokpGdne1JwTr5fuEf",
  "key32": "2sBU7dSxPQz5eeuqSq8yKwdUcEPxU3PAgvyW6D89motXeUfhTigN62uXLD5CUXuPiMH9cay9dKrvA1ars6jBD59b",
  "key33": "4xZvh65DHm4Ze2R9cgqYQyv5ca6tkTVRaKVBcfCxWh8zVRXX4XhnMizLxotaABZKLAXCTH1tTGfeA6iT34LxWv5w"
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
