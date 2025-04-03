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
    "58d6rVmodDwgcEM7t7Y24pi8vLwVovMqsDyoE7aKvUJSU7NkxQvNM6ipWBshfpFn4vcTTYMkmFRnyAoKWUtEevsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AuXDTLWmouPdZ6tmUX8NoRqVa5jk1nQ1wh9s37kJw2PSh6v8ka9JYggu8pqJaUUnakXt1aL4XXoa1FCrwUTkkZV",
  "key1": "5BKpefyCKHonB6wxfPxqZQVUkrqZ8NFMKxGUqBMhvmysXxi8Vy1ZUFdewgdD5bvac1bNi6F2cVCWx9y2NrruYeKn",
  "key2": "FMNZpKgm5FqDoGHQzkW2NZvg3raeGMkEUfqrxkYmJHxrLLF6YhPaZuWKuXpUu2PZS8QsYB4uarx34fRrpzkvrj4",
  "key3": "31hUkt4K4tv7ZcB85NAAWshjbR29wdkcUAccReFah18Jq3WiTa5NZRbascd5sMVjvaCGxAX6Yy84bJZdfYHiqy8B",
  "key4": "374ajfZi6ycY5KE7rLeQVJrcu31KfUd7NCrXTZ9CCCs3yGGxQrXDtXs2hvTaUeDm7fY4gzSYKj44xXsvfk5pkGrb",
  "key5": "2EvDHYHey2GtwtjVhy193S214wsMGFFmnJ7bPDaDaoh8qiHRsWs2AKJhTMtfY3SxEJ5eg92QNoho5YMHExVZDZ6H",
  "key6": "3ht2FEezDguyzfiGThS8wvrb16wfMZ2Q3fzfeVEKJ7h8HjuVoeKDeLXebGw7J9yLGA1mpNpb941iAzRBN5ZJb135",
  "key7": "2PqxPw3VxtUMjLbwakCALqN4ywa3h8rgHmcePp1hPvheSwNL54x1se1JN5wX8T1GFVteTGA2vpXHki1nLCxTv2ho",
  "key8": "2gbU61cqQxKtB2SNvUsmyuNGMe9kn31Kg8aGgAf2epiU5Vwraz67AjcsukPja1d5Fo16cF7N66HAETTDhyKqNdgm",
  "key9": "5bZUmsnydiQLv5ysoHEjPALE2tV7VswAAkVDpnH9wNfunATcsM4xZWo6N2cFXxH6j4dYqxduQGBkP788RsH1r4LD",
  "key10": "2ksJgNJ7o3X1m8wWaaWQaSLDvLjLL29gykDFyop1eePdUoCnmATXrbuig17VYPUFyfuRCeQr12x7UbRkiRyiLM6e",
  "key11": "Z57AaRETNQx716mX2uQKYD1DUymxPd2XXQ6JVuMWQrenea7dnjMKZPDztXfDmvazbyqoCucqPwYcMZhq9N6K6Ng",
  "key12": "2vc5SocWhia7x8KRUhcBQwEh5UMfWKGb4mRfnYDwUvAXpRp5sJJaBsLBLAjDux1e1Tc7n4AsJbq9vGwbUAKGJWGH",
  "key13": "2LF7ktDa1NwrorkLto2dM14MD2yuWcG9Z5oT4jGdGqyDUUJTPYBeFdGCuL2mU9GqiHck1v8tahuehB1M3YBaUdV1",
  "key14": "jKqckJ9WeTHaAhNM7q9zL8bv8nbzSkni32P4JsUCnFPPsqrSNBFsiSeFvHqM2aub9dj5j5McAFRQQyyzMGQZrTH",
  "key15": "4ePjFwTWsun3yqN4qhaCR7SEq2o1HSoLdLaWwLQmPvKCxyJ2HtRrGg5RTLZjUaWhDJ8pvoPaK5m3qUkjZQGH1Nsg",
  "key16": "4ErqZoeDbTnvioznPNuog2xYKt24RjbBHBFFPNyAoxhbU2p4VWUUPVZQo1hHevZSQuHR8B6CknFyC3MEvuRTdCu9",
  "key17": "25U6u4C3w9htU3w2hdxfx6tqVSd6cNugCeTQQCnYXtzdgUgEo2RywH3fgdDej8pLqgS3FSYevYhTfCEYdPEmfhuU",
  "key18": "28Fp3f3yzSRNTMHkyfWduYGQr8rAz7mCwz5xfc9h33Vei1unLpHE7n69kHtKW6AzceRWbRUrN1a9cLRtQ1gLZrtT",
  "key19": "2vNJQ5SSGEB2VJDX1fpTig9NSpBWk5PEiVybEnjvNu4S6ipCKbVtHF9fi6YzWEB2g5kAXB5sbAWAR7d9iEYswwuB",
  "key20": "5ps8skSxAR5joxFw7U9K7F5HbWim1sNeh3T8cU4wbvdLrujv7kn8EmLzzpjp3fGsKUzbw5yoQVQGystxFHBtHS3T",
  "key21": "3SMkvwVkQRwVrR6GHMvEVzNonUp7A6VATcskUq3pLX1XNuhrSkHqBffAizUt1PFwnqQWD8cuPCnymqFjmsjfdu4p",
  "key22": "3kohNBDRYhaZn3FxeLhTzwCUb3ThhcbH2Tv3Ba5MzPDdctZRwc3zL9CoNbZ2B7mGjbZ5xQSL61Lk37nR5VBK5yDU",
  "key23": "4zT4w1BHhvbpQttydWW2brWbhN5gdF31oV2uQTZXXng3e9wkiPDa2WEmpCEZHcGP3z2RqmVLGFpFQB9TfyudU76v",
  "key24": "5yGhCp2e2yChnqNSX2wAPFKzPwBiwJWeMZMUqNQ6JMg8U3NQTh8eB9a1AkTvxdMWWiQ5bhHawC5whoeUC9uZkQmb",
  "key25": "5x1DZLjy1GDtrC7JcBajVwzTp4HvrpJWtftkQL2dQiYDZZdCT4PLoizmGXtCDYA4wv9SLxcqiAZVMRm2qgYfp41g",
  "key26": "2kry8jr8bafrJ7wmrkGRpW6B7VXtr451TZ8bJvZ9jFiGcQfpb7Ew9Gused6S5BW4dLv6oEd5949HrowaZKXvjZ99",
  "key27": "3ngtBcccQT6j1rxajCBdQ77MThQmNan4JMxdhyf2KMkLQgZn8obU1KuTfYzyP9HMZSL6J5LxFaps2CZmMQmySRVt",
  "key28": "jVY5Zj2jFn7gmwgyT55wuwBkfsao86KtJmCtX8FqC4BkVM4UKiMHyx64DF7ydQDSkT6vHRb7tktJWhDrS7hsoF1",
  "key29": "YGrzL1FiypYDAgbABDhp4NdcehgyUevzW3nmfFTXXm5GA6mg4NyH3EhXeqQetRp6Rjv3GM24U5eUMh7a2xQWx2D",
  "key30": "4h8BSgB8TEG1YsdSBGDbM3pz4LKrUsNoKGxtShbsUqkcPQCkNk6JzM4aw8MEzNrHc7VAziDqQq8muqD8186y7kaE",
  "key31": "244qWFmjvvvL8vTYp5K5DZUXREyciNTndn1d1Lvnpjxfuzz6vwapfnfU1Tb4ZRxJKX2k8ae4vKeiLGRspV7Z1B2u",
  "key32": "qtsTxvb4bgA1fGTpxtycHcAkHAKAAk42NpjEZTsVkmeiJStCedPXFvGZ6fkSHirWjDRqutvZcpV5hjVJN4q7nPB",
  "key33": "2uZzmUDdnH5zyZ7HwcNJNBnmsCyzKUAPfowyGo9XgY34r6MTqgJVnQCbCPcwuQwdhypRKbXr7MTor6VWyFzMW4HU",
  "key34": "2FhseD2565UXJ77ipU6dnBGo8QZ3ugWHJsd5zVMeC8SiJA2hzqtchd39dEuwDShke8irKLyv8itqirVmgh432oqS",
  "key35": "2shG6eB84JgjNQHrCX5up2QY8pDpteDDS2k5s2UJLkr12CMdDfx6o4eZQtqZcmdV8sDfWmhH7gmTNmnQLLJnq6A6",
  "key36": "36HWYBPwgyC1Pf1WEDydE3DXfNUmuCi8kDTg6rjro2Pt4SqiXwGCaSLqyvPPFSvYACDTwxe3BANX8xM9pu3d8GWU",
  "key37": "3cHp6zjSBBgeRV43evE77k8PP2exmutTF5cXGfU3i2NVSA3ucgSwDbQsEuzvQfBv5tMrSCcoCAPKHTc3b8Y8rsVS",
  "key38": "36SsE1q9JaN7nvZiDLXxivARckTinMKu13PSCDNYsLujJ3rZrWd78JUfo2XjCjAqTF6BXxdjM1oMSweagvNJd44N",
  "key39": "4AsCQ7kqbPTKNDAuSuegKCeWFTv4wvTcMyogH88o3euL5b8GqgoQ9Sr2T8x2D9S34d7fMkGV3Jqwuvj8qA87e8ED",
  "key40": "fVMzju2XjvzaJgBa7W86tTVLsDTUgECobn9buNGAVYU56MrPa3TVVujJeZTRF51ShX3bWwMpCS6WVMCw75D98km",
  "key41": "5F5NnZZmTCqq2DMyZtSMqUZ9BXm8emyGBrvKdfRDQdaEbiixWMDC6n5xqD41nv78wqv49CHgPBpK7bptUeFjamjf",
  "key42": "uG18br8nDLQHQTT6qgFYmyUpLGQNWsnY3YZ2tAxKUX88PZhSUNX4M8nX4mfgMywS4BrxDDFvNpiQpD8qrV1sRCN"
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
