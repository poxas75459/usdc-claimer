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
    "5K1BpTAWBY3d12izxWhSrWvwwQywSyXpUCLsLdF97URsf8r3r6KJKhttiH7iHpHGgVqq2Fxu9DbMcPKCdsKa4Hjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGudCRoxQTr2X6mmda3czbh1aN8uncrG3mduNGHoPwvfLsEYbCBjph45KhbdHMrqHE6BYd6QMLLCTvZ5gSdQZFN",
  "key1": "4wv3niaeDucTo3dzt51CGKGMmn85PdrAinj2NQKW2fFQrSbd9Hdu6DmWCJkr5iDiiUixwnbSgAcFUWgqJwg4Qhc2",
  "key2": "5XBaMeM2atePweRC8255AN6stTG48RavYXAnCExQRLimNVnfVEur7AAAm2Who5EtjVCcrXSu1Wkg5E4CMNrJirNA",
  "key3": "5EXN9mqS6TxvQg4RPz8pwhp9oo54xXJUitwkQmB6qEy78GUDcojR7EyiELCFakUoKhqWj5ETMQoEw4d6mw9fm5sF",
  "key4": "3wjnTY6H3dt27z6b5J8tbJNrnPyLXPRMG4WH93eQGHYvorLhdJZQjHHg5XCuUv64fuKyjxELvj3Gyv5wTBb69Rh1",
  "key5": "2WfXCkXCoDujDL51HcTrb7rpNhSVwwwsoDYFUmBgpjAAgyTS1Posf3HdihLGhUMqYhjEt2bmZ3scEV3UTAD3Jyhq",
  "key6": "SArx1qzBvw1Rsqg1UGZz9RvuJt8mjKgsz3DDzW14tdqZzupAeJPxwKJoWHHwJNVJeB69BnuMgdTxrLrCxhpn584",
  "key7": "zBmUgUV7XvKFxj2zea7MN5thtfMgwzWBJePdFxZPAKSp5Fz37NXdH1zCiKCWGBfnm8iQBPy9MPyvz8KnJWSxxaN",
  "key8": "5sdDzErVvzZG91inLLpt1gAccpzTWmp8SsFhVgCxpCbRMGn5eNUzZduiFozwnEiCV7NAnGTgnPWBSuehLvXfabyC",
  "key9": "YdwGwM5n3NMXTMnADiDxuPxv8oYWfNshc8382LVp7vUy7CzszcLm1z5w7x6ZHvgxgBCp5uDh7yurmNP6YEVdFaS",
  "key10": "3JUrBTZ8kyoX4eDL2wwL6rWGd7RcJnH8rprJu21qVcXE6ABQMzLzStkoA5FHSKVibsk4esUty351p5xNUwK1KAhb",
  "key11": "27JQkGMKiYvqeRfUiq1QmSiZ7cHG29ewm6CpmKDvQLo8UcWuFaTu8aEW2RHnSPA8fBDUNXmcdHAPzYWFKZgYDJqf",
  "key12": "2Zm45aDqpCn3hWh8ZXg8NasbxsJqfHGzqBVmUdZEh2gc2qVX83ewiXfbNqpiXN5SW8mrMGXue4YbFgDNi2Kdybit",
  "key13": "3nvEZq8JCttbDSRBngykj2hZDZqd7jvTbJWBmgL34UqE4LPPkZDbPVGwJyMHu5SKQfEg8BZzPFbte5fS8en9vbaD",
  "key14": "4MEqrAj5MxtJCr6rTtE7i8ZYdG6CVAEjaGJ88ad2A4Zthuy2JMYQi31NhXu2HzJe1LLrfP7fVYoSfxaZ7YMqtnwj",
  "key15": "4JixFHSyFaJvxDEr34Gq3aJZrVBK6abAg1aGkZfqyrGM1JEe4uXdhWHevHrFZKqd81xkrXnSBq866WLKBoJvVDh7",
  "key16": "3p7H9ZcFnpqC8v9E2mgpUU3BwNmC1aVzq6McpT1TzyvTpMQLZeFw8cMvJ9eyuPvmQDn6utchmqP4b7c9pxsxJsDa",
  "key17": "2cViueqrNyekyerRPKAtEAGGSwcrqnxxvMF2kTZhYLhe9Wz6N4MtkM25q7qX258SdWKxJMVBBRtCRjEuP7hFQh3Z",
  "key18": "2bwzoDia6kdsNSJfNKwJWfuE9izUwSLUFbBJMLaXPKSjqZ6SuL972d9gahYqR73mC1hD4ypXkvfZLqUScSrSKnyV",
  "key19": "3AUVnpU3jpe8fUcoWsKq41UnnESd3UFAwZpsG99RKRf5PANHbnnGxvS6zykKfdAb1W9C4ewvwtySeoYPWM27JCg6",
  "key20": "BF5u2RrjPwpYfapEySWuB2vaGirBeqLWY2CCDctNg67P28AR7jDyu9AneSN7ZMnYvMytc5tAEydNzmatLd1nzQo",
  "key21": "3jaL7nFc7uM4wgaHZvec1tquNXnmswCsQafuv17kkjeCrWHSDj4Up8kLLBeSJs5yZcKFE7paYfk81kpjTVmtNvP9",
  "key22": "2TtiX549gp285ZxH23H5LfyGZRjmYfW4iemtKeYqK8LzWo38mQLyNGHpK2fiA2WYzEUA2b82craJLPRRhihspyQF",
  "key23": "3QLi2jxntiWNkUeTFY3NNCFtmVdMTcUxoXSSNk3sUeeAKi5RHpVG9FNMdW4X1Qu2va8J6TAKBXAnpmvtxD5KUY82",
  "key24": "48VhMMwgBZHGa5REFKGNJP7Jiq8EXJPfUTc8w3PRCnQ8tgsbbffnKuZWFaifXdsdJUw3yrj6E7GRwyRThZXuGf7T"
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
