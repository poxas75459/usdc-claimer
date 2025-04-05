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
    "4tsbZb9WDJb6Dkr6SqfwdcGCSn3uxPjVP6NXRdGh23wQWgSzfiAmBQE2NWwpzE7dybP8vVt2Z3wkrxwiP956xRkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDf9BGi8aCNCPcfB4mC2kbhutcAAVqY6ufEkXa3Eh42c1giR4oXYuUSVvUuf9DADJTqAhbM2dKDEmo7iYyvFh8o",
  "key1": "4AF2CNmMDfgLacaUr5DXcoaPoXbH6VX6N2dNdzc2DQEDwr6oGPP2mWH8338VR7Tb3gcGgRWXUwCAwYetm2wFwFGL",
  "key2": "2FJVYxePa5d8sKVdrdJ6Y1wrGeN44cb28NParxHeC9xKN2siMNjnmtBUhWzmZipED1QxXxKfFVmKB4s88Fct9di6",
  "key3": "2FR9M1F9PgZkDHH7hmB6M6dtaSiSHzDU3xYzmLtwYNFh9SXz5iW77T6PDaDXLmRqhWc1XaVeqLtSwkhwHfeD18p3",
  "key4": "3rb4ZUSWRTNF1Jhq6yRmotHVedYvVPfCpsfZuFcvUc4eTuWh4tU8HPbxueuXsqmJjv1qf2U4iXREq56UXEWXEMQ4",
  "key5": "5bfauwL8R8VwSBW5Poy9LLhZyFjRCYG2HcQfEbUxVb8vEJ8Fqy4uXGa8t9ZSGfi8NF4j69qCmJh2APq3L26PiFXb",
  "key6": "2V4iniCWYLouxpv4zk9sqn1RYiKNPkTkB9QpbWfwEYghG5njGWiQcdVkUtTynnhx9mZAoK78X8BHf7eoweE2qtJP",
  "key7": "2pU7yPoHRdXxmcXWjgXQTGhbMrnXxk7S4FHFCSc45gnRDHdSwgnCV6g3WCAcjc3NnvNURXYzkSwGx12SW52W7kUs",
  "key8": "5E1T8XgrssddjoYURqbxzscSaVmLDaTJexDPwkPMKvWt5BjA6emKRrcBdGAWy1rhk4fxrSrzhR6bdDRRDtS7zJU6",
  "key9": "yo16hkFfhGZRx6eQoPMk3y11r6N3N4Tr1vChQDNfiu9fmnmFKvcWQyCgCohYrjLjQ4BTzGt4qyDobGyUZcDhGtE",
  "key10": "JTRNMLaRn28QwDzYqZEPHQtq2nHvkt5iNd5S86bTH3v6WaNRJPHNnmGosw6osYQH8tNvWeVRJJkEJ3kAtTHjgfB",
  "key11": "2cT6oWLCVMaBYVskWRwVjXdTr3fJou9U9bs91HVdLmPvNTord2HGa5k3Vcma1cX26S5gX7Ahs3pdYUVufkUqTVwv",
  "key12": "46fUHssGZDPx78aQs6iBbQLiahLvqTif1oRFCmE9aFUTxMtCBVJRCjwk8dm74rRjNbJY8pgq5bXHxJ4YCrVvpG8s",
  "key13": "5TWX67oUyvk95BfXo2u67ADpJ7fcKKL5zMcqDU1EfjAFVcStcHZEozc7jahoJiP22dvHwstpZkowPohP2Kj5eyHZ",
  "key14": "675boKx4P38qmfKMywzrRXJcYur7t8wuDEG4iLfwaEfyg9r3RUbKNgsf5Rquugmr9mtm4kE7TLuvqFCc5vZMc4MV",
  "key15": "2HhDqSMtG8cWs9m81fnCbSmTF9fDnQWvwNFYJLoPQGAWpBkLiBToCpXXJuc2dkBs3dSZybDvEq4CZHStxxMQ4HUC",
  "key16": "5mxGPQspuCis9ZxNVp4eVjsC796s2c5VhJCcsXQHcmbzbysckKB1SGMRC3qyqCHB8AMpqwJKE3HhnQCLQAY5u1zH",
  "key17": "2mkX2K1dqQcpkD8wnH6PvUTo92LAMmkMcZSYT96Jkn5QCs3rTcUJ4yoCLEbtsa4wR3pFK6tap4CMfG3Z9vW1GTpy",
  "key18": "3P1uBwDm5QvHJYvv17ADBdWsoTyDQCQgbjsdp751rNx3f7c1jmQt3qjVoSrFyDpE4Rjucx35fTba1ecVQ8KpaDHq",
  "key19": "sb1cfXqPE3awyU1NuBRFys6kDJmjnuihjayZ5Pr97aR9UyPjwrW1pzyBVVeuZ9ze9c1yrESCFRkVfDegtKxUzcD",
  "key20": "4xu7Mo5pmZA44x5QFsY4nTPTT8tFCWtZAEQs8CLGE8oMhn3j2vTaTRUkKpugfGzW6Uek3iyRjP3vSYWofqpMAECQ",
  "key21": "4bCDYnDnoDrxGfh9GMs3cfrt4Z3NRn4G8Z9So364KJcdQYok7Ttm6f7g4QtQ8W52SniHwvouw7ee2FCUJFnKAQFZ",
  "key22": "4SGZtW5WGu3D9cd3Ddi2qdCXs8CsH8WY5otP3aWHC7K8db5VhbspdBoUbfSbe14CiaF47Au6MFquRFitQXkoaDmL",
  "key23": "32GvEwDxpsEDCi78LmbNmdeSmTo9HrMz9qEVefdoKFP21EvKBoZxE6QxByKnTrvQmHUrorL7RMi4aiQaCyXxvMgS",
  "key24": "rXBV7BcpppKtev2RvguJqWLyxukg2XXUpckBi6cTLY9qV42oA5xaFS7LC5DahmQo9ZbWyauhV4CZMpwD5s6keEP",
  "key25": "2Nnw9BZmG8GNQEQvK6omEiNYqDuHxqTJX3BxyDkamD9iCShCoiH2QyujTGenCaiPwxtm2afbWug8h1Bp3ZmZaCaw"
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
