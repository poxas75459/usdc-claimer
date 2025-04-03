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
    "655BxfRokeNhnNXuH24Vsn5pR9HpNaajNdyt97Cgv7x5XQkMyRrPg3Jkmfa6WptCUZ61j4H9uVh6TJSxpgSc7mpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkoyhmCxECcx7fa9a3pwnAxByfYa7ZDdJ5T2RiwqpuHzFVirYyHVJHqpCt6N9Bif2HRRdWrvKoULuaw9Fi8aZju",
  "key1": "53c9ZpRFDhwXmgGP2zh9i9fdZx9genWctj6eQdzHz36MM51Xp91GdQxcVFnJwXrSFoedmbzJa5LhczJ1AmPu6UQ3",
  "key2": "aAF8fp6DkzFwzQHRYHqzbCnDnaTrLj1RVDySUaB6rPtytUeGFUXGJa2saNA4B2VY9KcpNfynUB4mYTonoXcZLLn",
  "key3": "2nfcbNkowbqCe5VNXtuX4g1hqPrmmGAmGVSr1uzBSdyW8atZoBme2ygwyuWA6RdS9Ch6BhtEUuD7gHhGfbNor4QB",
  "key4": "wZkauCo3tBQSfMqvsxsYkDc5wnFvqoS8LJjdnErcA9zw9tnVAkCopyYdeBiCjtXofvgdKNpqsjo7yqzaXZCL34D",
  "key5": "2AK7RnbEoc6sjN4MrQB3seFsFsSoLFrEUBpf2f55KsLn2BiApzajsKjQpWFqxzj9ZsabWvpnW7Sq7g3rDxgKG97V",
  "key6": "5Je3SL87xaPHYiLjyZcDWYxW8cctATBBnf76WoBiytGaFqX6YgUha1krjqWYrNgipF4H9oCcEe3P8hUDk7gyAkYR",
  "key7": "4stycQGwkJuodu7g5bajnPmAFqdfFZziF5XMPRTv9oBusH62Hw1jLW6n26D7c3J5uEjBkcrkk5MRhioxJxw7okVc",
  "key8": "Gh2qmnbv5wvbqgDgsPHNLTeLtGwxbMMy9wpyPrJ5xSVZyUoR3u1KqxyvAmSTLEM8xPXW58RvZ9dkxnPbgnbcwLo",
  "key9": "NKan3ar1kNMCj1jVzSEcn1bcYx9Wd1iRC9be2nfg7j3WcuK2SJXi19Vah2AkemQa2bczqsDpnDHYq2LqxLtwcVv",
  "key10": "aF8WnykULYSvrM7apNC2JpGFxz7fgCtN98HuyiQRzZDGwAYhxBb9WS77nS4vd11njveCQnCfhwUQgi6xF98pbWB",
  "key11": "LSarfgoVL2LqWm8ADgL3Gm71k7tcZ4ifMVrgorxmxjBczDx9XBvAxFsgWKNE6Pvi7yDjivSLw7uHaJJjpBBUSFe",
  "key12": "4ibhjbVc4gtTwyPzkZ2p3XouiriXDfZ1pur734pU2L8dCSyhkhTxfwTAkn1kpC9mpznJLtbA8GMzwLHUToLCbxAr",
  "key13": "2QSA2XCL5X7kw794zNgsB2zKJXdNPej5A5bWhXLXdhhX3BKuZVWsetUDQrzpeiGqaMBUUXTo8ME7f98jWsfxJz2Z",
  "key14": "5h1d3P9PUcdPDbBTPGpyEoBtDjeG2mzinjnAdTCarVBu1gUjedQBHwe59KSsKS51iVjjqjvxiqNaEuanuXTnjVj3",
  "key15": "277iJZY6acHxySbW4QyFcjgHAUvc1pyM6mdyww3XE5C2uFJbALt1h7GeaXoiUtN78wKHvXnvKV9iLrY3yuBpCusv",
  "key16": "261t8Ht14TKurRv434uL7CWPudoa2RfPHU53CKicesr9eLofpvBHWsYWsSXuDCeEDBGK6BP36a5ramtwHP2uwm6X",
  "key17": "2fedYi5m4RUUA42tqBUnjLDsE7cDmqhMTLVoPnhjq82pVx3SHjLL3ig4jbYKck6rGMQuJDmt9wtvAGuCja3UXriF",
  "key18": "3AsKFdZXKwjDiUnuaYdvLvK8FE9hoAtyjKDyGvg7CpBMgJa5TkRvaMvA7sJyMwXYcquuPLpLpfQ5rsZpsVCdhK2H",
  "key19": "2TaLCjZucVAqyenk21hWc1qAYVdeGbmDHFhB4usbsEUJf8kjMMFGjdcJemoxMqiJdRmvL1Bertw49GP5HWyjxPZV",
  "key20": "559FjhZKMzFoLZFQtFq97JcQUssTkZsaH7VS5GYKjAskW8hzjPUHRpbsDx1AsrR8AZck6513yqihcuxpLMC92hQU",
  "key21": "3DY3XMQVeA6tms9SbiYFtmuvWFASw1R68BihhNyzuBLhUg74Khp3qQGU6rJAdoaFr6LMRCiHiUzEPKzJ2YHgh8pA",
  "key22": "3gXYvXZbcxr3EYUJt66eqTXDXHh3fHaWH4FgVP7MoBEEL2H7ixat6umuzEhULnfXBUacXNgKx3KMG9sTakEsPczp",
  "key23": "faTF3adJaBTtsC2jnybJm8x5e9WHjHkjS9AAXFrwK48iyfNEmTf21VVHcA1FP55SJtaymwGnU9wFF6Ebz9zbj1f",
  "key24": "GLBcgsFpNne8GS5q3Cjw3zNYwkKe5gtBYU4miMFqVKgcXbnCtwEjx3GicXiCTYm2vAxudj5VcW7nuSyGFTwWWAL",
  "key25": "4haQC4EnAqqA2JmXY5dJhD6JjWKYWhCS92xqYAsjAW2CAySizvHgXYAJoboACgnusVeCwh63yGTR3VH9nLj5Nbv"
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
