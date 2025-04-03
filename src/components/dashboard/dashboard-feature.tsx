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
    "3biN619DcocU6WPqtowsAdJBRsBBhoZ5REcUPTc7Fo9WwuEbxcLuiFUQoBiYNgC855JcPcdUw43Gcax8LaCkiFHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sDAdWkQGZekhGX8WZQdhFQXHfY5tTDuVqRB3euwH2FcZqaRyzarkoqHA7CXrbptqojzxJRTVtCL6xovw2Rx5QH",
  "key1": "YDTLT3UhofrJDvohGExFyzTh2pkoC7og8BDYrCNRMEPriEPZLqdmKyW9uj1VAuHPq1pJs1mFobf65EcPGcJqgAV",
  "key2": "5aGdui8kEPgEiapNMqKdp2zT4GCaYuUZAA48aAeLMRyuYgrzmmV6Xw4e9mN76YdRhxvqWGGkaYrDawLqtPwmeLCb",
  "key3": "29oCL9GampLfVm2MNHyGja44dwRB3XtyBezJ55NVCAsG646k1KmMGzHNNyBaWGgRqV1YoVJrbHubJwuACec53uzq",
  "key4": "47wd3u1iF4aD7x1TSVzwqbXj71Z7o88iYvqSBzu9bSx54CveGEDrg1AfDFWCjJweLAtGxaikJtuSpTLhYyHhqSPv",
  "key5": "RTYvSbG6xdWkEYaQgGFnTNGauByBU2nmEBydkbpz23HgR8fQrbRn2g36m9fsRxjwB723L1r9dGBwvZ2sPRJibxz",
  "key6": "4eVeowu8qeCxKV2kr9Jh22pQjemTYsN7T3UzTmkEiB6XnRyKckZDTXGGwYxcQDvvwNxkyXFuNkgrZaX5BEnp7AH8",
  "key7": "5Y4xHBzTxFCT4BbsRR5E9S6ycLqYtyh43EyC77HBtYmMrqVMfodZdxdwQxdJNA3sQMTXGQvA9z9f5MWcUFxFtNDF",
  "key8": "5PbX8HHYZQayr43xmQsxnGV4mxHoyFdYCbXLUVgcTHqMnqcVjJXLu5PY27CfDqj11c2FBPg8PMr337TGew4MZGE",
  "key9": "35cREa29S9KezwDsZgPivv24TMmHJuToTQ1EYdj5YY4t8ZUSJQR4DmPhQB3wk1HuyWaxyfiSSWup4PiHYP39zsBw",
  "key10": "4FXeek9LYVPJe7WEi8y7p51TbjqR6pMW997csGpw7zTi3vU3FkFdmB2SJzQbecjuaH6McfivMJR7aMhbVg4fb25C",
  "key11": "5yPMEYmZfZfnKWo7YuoWE4RiMT7xD6Uw5qBvZyVBSwargR93vN8H3uyTQ7qUTyc5bRpLdBeijDmhqj6JbhT9dwUn",
  "key12": "2bvsY4kN731H8fG7msNt8nGrA7DeMxajE6HRZYXQzjBU1rZuMFxpdk1UkMEdsTx2HfeChSz8byamszc5tcQpRpFg",
  "key13": "3RaH8oCNdAXZ9hn8GGejukDUkJWupa8qQRtyJ2zXuaosMh63dWtkHTmkiiKtcA2mcDqoBzGQx5xkoqu1kjvvz5HV",
  "key14": "3xme8nNqqbPASW1aktP9guAvBdRpsmFtfYVte2uTveuyT5p3gjJz1vPmA5URZbsSAtiX3TsvGCdHfLQTA8Udc9R6",
  "key15": "hjjgY8bYxJvnpAC8s7NbGC9gRbg2Vc5inHxvC6xD3VpPCox8Ggr7A2soarkJHsK5cPkWE1bT1RPvf2mkVZ3JSsE",
  "key16": "4JoUeruNuwpk2BPwzZ35Cj1pJZpEoE3dXSsM1fUsrM6pe5uHHpmiCkr7SrKRCHmAPZyKe93TFZt14TGsZSWXjoTm",
  "key17": "4rNGqvnK7Mafnbowe1LVX7iG5BvBQYNTCzn9QQMYiUvwoXjwLcG7G82XLFnxXu4Muyzf4jJrxKzK6tmRADWFmxMR",
  "key18": "2Eqjusxm5KCsnsrpMQZbxfUPYoz1cdyURPSnxv72u212C8Uz7dLwXxifTfpodYsD889SEtxtrX4HBVz7BpcUnr2x",
  "key19": "222JxGAxpCt4qx8pdJrNQa3FXwBT5fPgUeLoF11cZWTdtAL8ZbYwsZBvrKydxdqfMQEgmt7d3sR2JZgyk1eoeXrr",
  "key20": "371AswCoqr8DcAx4WY7wqHPYX89VQ4uZ9BCWonitCHHZAVAaRsHkXPUU22WFFJssUkhW5m571rw2muGHavWyokAD",
  "key21": "2YnoUzgZsfTuWQ4qybBpPoSvxjSxBunsaW91TVuBNmsEthFTcpGJTPTdAZXNhiQvy1vqnw2Ca1Hta2bnge3eWoFM",
  "key22": "2ciYHc7aRJQEkwZYb5SANLDVa49KrdD7rJ5653vQ5kAmTLm9xSe5ZTJ2FGBBGcx96St94VyRbzJ6Y3cNaVgWnu8A",
  "key23": "2sTgTA69wkmnqsMaS1Z6RVwuR7bii3Wx3Pjtdji6VAz9kfCMDTNhRNeGCYgokoGYCqTQ5LTC6kDULb3gxe7SAEh5",
  "key24": "3GhUsLeCiCgrfRyy357YsRvY48JdxTEdDQWjxN1nthUQpajt16BZZvM3J889FU2pUa8LdGTCELHXPoJKSi32eFJE",
  "key25": "2r4S3yCwejS68xNPU68eUgtoXEQhjH3dV6a7RaHYWCyLQX9Vg6bKoUGBu2BgJvc8GQkZYvcZuQbgbjD6Bsi4z72P",
  "key26": "2J7JLgBmFPaEfmEXyZJFGuhFQKfijiSE7wmgAPZRwUJ1dwZs97aS9aNmTf4c8Rcg3ntzJHnSpEhYZCJztJjtGtDz",
  "key27": "3hw77PS9UmN7vdBkXJoKqonqeYK9CupsGNfR2huTkEt6y5JZ9BF22kAhWCsc4TJaoswZpMruY6CeM7BGxvUXAuAG",
  "key28": "5z5UkT5yJ3yXV67WgSGbDYJynC4osRd8n7iDpCDUvFpH1dwzLLDoy4C6FNyzwYFj1p6cKbySeZv4Wv5MDqSJYpnt",
  "key29": "3cQZanggtTztLGATbJAMHeV9E7aRkFGX51GoMtr2gxnTh3zcU3aYgnp5ofb1XEL96DpV1scsDvWeHFWxkuoTDK3C",
  "key30": "3rKVziAQBsaWfo4PiZ7WFLc42MVJFHvxZRtBmTcsTtRR54rbwKcKEkqQGADZzLWALLAkD3QcTpUVLWUPXFLTdMfA",
  "key31": "4dUZbFPVsCUQ7WZFBYx4tr4AiW1NmMjXTVBo2UHsVPuDuwixbScT21UrXNPM9EgQv6816uw99FodCgTZHkZd3dPJ"
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
