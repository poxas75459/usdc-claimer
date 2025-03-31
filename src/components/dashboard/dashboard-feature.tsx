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
    "32RrhvyBLRoZjcZreLeeHmuif4K7GfrgVrAy9U5tZG4hR3QKQxeSChwTczCgkhYvmJ4xTfF9YJHHksrirRivpLzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvFn4PYiWWUYHdkfg7jQWcp6JcfTabmkvYmidDoMN8S4JxSGUvHCKQ6SxUtNCFRGzjKuAEbTNY588221xstrspf",
  "key1": "xrmW3T16woPnp3yTtoAcRZ6qWVxNwtuPr7d5mybZtePTBvgQfJmMTg3FMV3yQCaDXhDqpxsE7rQAFYji27PDKk9",
  "key2": "624mqFJR2EkxKcLU8EsbmSnaG9MvFXh8PjNQdLXb5j86vibv3dVQpTpbknacM2kn6W1bXAgYzQtWF5jymezULasw",
  "key3": "2BHAsyDJBrDh4EDebMLKXux38S2u5kXMqWobfkqu64SxzhC9MTAnAZxgojQ5U6EU3LQ6FcoJ7iWzQkcUp2LXAs3a",
  "key4": "66Pdybwqy7effr27tsFesKkmmWHphSSCisb2yGcMnFJJDNH6nZTfb9AwMQnMXwzjxij9rhhHr12iCrVGbgDoPNzJ",
  "key5": "58zfb5Na64GQebLArvmWdTajH9YrMnUhTW4BHJSdGFHj6NbK7Ks69Sy9G3J4PB2rSKYd2YMHPFaLakqy6knP8CQV",
  "key6": "44u2s2BTkSuP2MiXCZ8dQXqx7PtocsrhgJUqNDEpp4XFpam9K6Lz21KNus3UuKTmwsDog7FNPLyU7EHVS6qD8Kak",
  "key7": "4NiHcmLhR8YJu6pQRCBUNVoDBwuMJev4zPMbvoMSi4LGCUU7antrqnLDR2xsVzG4Q9spoWwbbaNRqzMNcv8qEDb1",
  "key8": "fjPX1hYAxvWDYphQ5c6r4mgXH27qCpHxH4TUqBtufz3HfqZptTE1eUUB33VaAChpsrkmAnRju7mQwtVsc9qnsDf",
  "key9": "4VeK4Ydpd99hWc5LsxS4X7qRXsY2TL2UgFFaHvpErHQP6mtYo294dCB6xyREG65zzTAZ379zALkqyTN2kgs8MPkE",
  "key10": "2poFWMBbLnbj19EbJGnoA7cSjHufHhkZyMJZgnNe92qkm4xLAMvzpvm6GXfuSdKQtU532fouje3MaCheHNxsTfoh",
  "key11": "4VAEVffhVNutghLwoqhcEddH2V8ZjnaX6EcZsPhQQ5A53KwJgKtaYpgYwDxwZ1N6jMyoivNizDYQAajHYz2Gkgd5",
  "key12": "3iUWJGzYrdPxrWwetGZcsuSZopt3kXs2JjodkavRdmzHH2U2pVtftVb7iGf2VPtxbLYXdMa4ZZSsmsRhjMJc9RG9",
  "key13": "2TiQiE9d9KqTZwtUfioh9GJLBwcikbyPKAvBe2CSBNjBQJTHohWa43zgPVu7quE7HdrgjnxigRbcXf1Sh9WqjTeA",
  "key14": "3c4UQHSHAyKTp9W5PYiL2AckKzL9a4vckEFM8Dm3rVPhXFsCPJAXehDxBasBAsabnsnwHjC9paiPFRsScAw38xmx",
  "key15": "39VQeDfkpFrtyYiBC2neoYpsjcKynecnZ5ySYzVkQbJg4AJgV8zCPbmK99DtivyWrFn6BLKHVFLuwujqE49v6pS2",
  "key16": "5MAuyoJgPJkeHUSdV9jMHmSeUDCCSQFw8ETwm1fvjprzWcc9g6T3XQumSAkDJq4T24cTPZZqevpDwtMqqKYf3P2q",
  "key17": "3d1D6HyHATkTn7PbKtFB4nk8v7xeHFgx8YMprf2hit9df6EzpZFi4ejiLzQmSe5F6ChYidCrZ43tAzMt38DEgoHF",
  "key18": "4PcMirzzsXDN4pHo7dSic7DTGPCyyAEY2J7Pr85nnDS6cYmeRZG6UtMFze7cM3smMkcsCKuQxZCZDxvr7LnTD1jt",
  "key19": "54e4fztGJvbxZBRC7fsx7yTn5joePDsC1XUwjc7i3XsJL6Gsw3JKK1HFWq5fEF3TKGbHTi9JmsWbbaiVv1mctvQe",
  "key20": "4zEWv8fAqEeFSvLGkUFfcEmrXoSgaEQ6TQF8upxbnfFGoZt4JxPJAgYuJLrn7ujJjLiy7PbmEm1mMDm87Y9bzX5Z",
  "key21": "4Dsg6wmEntHBbMzr3rpoPjirEm1mfd61RNxmkdr1NHYaLwVEj5UmS8JYNqhB2qsSvf9N88rPqe3oMvrAK3u3arev",
  "key22": "5weGWJNSH5Etd8iLvTB8g1mWSYmgPAz4N5mFHv47vn6GAoS5BmUWSDGowbuPg3HK4bFHSfEV7bPnr2YQwjwuUFBs",
  "key23": "4iZbLer8NujtiBHM2Va8zV6gVmNzuwDrujizDnhfmT7v9nwk9dYAPacJxUXBuLB1EftEfEgPkpk9RFVkDN18BBgg",
  "key24": "QiihF6p2Kz5jRvqgHvLJLAbuK3QKY9n7Ts79TqYj55R9ZnVQWJApGne1wvN9oEqTNmYP7nGrJnTWe9JtNN9aAV8",
  "key25": "29J9Hd5Pu4jsfVPo6dkkX3DDfveknsbdha6MpEMABMcf9H2X2TqCXjcn3LvqpNcSmAsVBs78F8VSitM6taajNHJZ",
  "key26": "2L8SmBCksFwBTQbwWZSeeG6cyujsE3knq7XKuNAKtG1mM9MhQwQM56ymbyxAetnY4XeVqFyouTyySNm9jVdzNhFh",
  "key27": "651XZdWagPDqrWA5SEs8NMQHWR9ME6cpWMwhwJhTYSwgEvaFsXhLKqFg4JJh62mvaqfHpDNRu8LqKeNhHqD4nBPC",
  "key28": "3fJjTn292ct3ZHQAc7P8bhN72hWeevhcBWoze83u1FkPxRrzoGyyYmj7N8L9Hb46AE1P4Bnm29TMGfXBwaUfaQu1",
  "key29": "32PhvBP83rH21LXUoCxTRA1benXNaskyEddQjBAZcMgRdHAQ7NBdNDXZzhtXb8TN2RKcPUra23xZpdsYM56eYX5k",
  "key30": "2yNmUe2fZnJgPKbTP7oswetpdc8UAcQJySn6cgjuMJnayVwUzvhgjcDijBszqb8TSp3fEdoydFEc2JTdLLymKPeC",
  "key31": "3NWKo7vPK9y1Fv2PqYm6sGy5hwuFe3xP8G5QRx4tF37R8hbRBocBepAzEUcmDwcesrYGB5rXgxcZQ5zkPp1pXZWh",
  "key32": "5dysMZTLqFi2SRPckftuQPwKxyxesd8nqfnp1SgZuX43qn1y4wVWwQ3AeJLKssNMVavMBYcX4He3zfx5bLL3zdmm",
  "key33": "33XTbfEe1uLB8PqpRyEH75HzJZvXStjq6g1dckFQYZGkF6QvmxLPqbJZSdgWcpCaHmfVUj6hmrSUrowgLKLkG4bR",
  "key34": "2YjuvJyDr7HQmHJuNH8gvQryihebhMzWdFbPixLDCPtqFggCPyN4Wbx9o9mYcvcRehHYetvKRqfZjPggTpqHW28D"
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
