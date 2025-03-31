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
    "4DZ2bAgoBqPwB7s4i2vXzVbaws3VYwRfbfE8BqYxMkfnDkVS2QBPFRdxqE8ykj91d2Nb5XcoABrSmR91BWTh5Rb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DhM62EYusuqdspqffghmtnrrkyMDvqt333C4YVS3c65T7NMYeeVGvEWR8eVkWn1G98MMyLuyVQ21W1ot1xQQCo",
  "key1": "cmRCNaxgdAfsEns3TPbavR6WGqcRRAKJysEXCC4v3ZsbEfmRo84UXBy8KxyUFC8N7zSsS4RH2f4VkByTU1EWEW2",
  "key2": "4Q1BUz3cscs7JtRu2nSWYaGFqUDrotRLBERpgF1T6Gt2sLDpyJVMAmkzCi8VZNKv2Kh5WZr3nzcfyw4sJbP4qgj1",
  "key3": "49WhBas2S6ArinmdfUqEp4Bk4VD8B67jmxDmEaRN7JNiGcJUw7WkNRUrHhByRzUqFn1c81NeSLhdkLvEJ83HMbRa",
  "key4": "8tsE4xNv6heY6SzA4G4Nf25YSzNGLy2d3sWUxw11H53FamnTgD9NuSxA4TMtVnvyQzu5Xth9RG76iiPe2LMozfC",
  "key5": "kwnGduU1xxsCV5bhYP4BSSpMeSPiEXB5Kj1hPSRvBiJFCCzKfCvJcMra1bYMw8ndnt5K5ncT3kbYtTWF6pxLZnX",
  "key6": "22sKwwGNvHY5KmQ8hxN6M23kWTQDgqMmNMjJA5vyxtSWjHpVafkWvbvd7yFeYZLcWHfYf6TXTh7hefdCRFDreC2V",
  "key7": "2dVdDqmXLXoTNYC6J9RDMizoqsTQ7H374qmZqDuacndWvRzuPX4Ygrx8hbP2Yofp1nNkZU2XofuW6vXS7Ww71XBs",
  "key8": "5ybvGK12xAUf35NGUJhSh7sa9bNHmrZNLHLGqQCxx6DsGmFiwUXLsJaQqv7S2UKnGe9DHiQtK9Srsoh3YR8W5G8q",
  "key9": "2fBv2KcNDhMkbm7hGboF2fSoT92dRV2maxR1hc9xnt8cKiR5iPKVxzX3yg93GDyR8nUBMXm8LcfywC7QMmdYsWxH",
  "key10": "F3XGYy4UBGPGEBVUVmVnCJNk7sMkvtyDENkzozNFjD2uuncwppTTx6AnvMkRQVxLraPFVFt8jtc8ZZRKPHvBu1d",
  "key11": "3vHsF6iPFS5RywmSyCdbuuDPCrtqxC1bpqczL42ka2ie1gkRaSTBbS97kNDAKaSB1VpP4QZdq4oM2Jp3HaZm1FUC",
  "key12": "64FyJJwqVS8jhuNtHiiCsBJZ5VXf7JVmsPMt6URShf2gsmrtyoHgJJYeTvETHCPyNUBgFq84pCh768sbA3L6QAKY",
  "key13": "4SW8JYHANycdjAWxmRxkFnB4v2ap9NuSuEw9nEYiZcGn5LaK21HntFMttXgvCc8syrpFhWGCehcDoA8LamrjvqGR",
  "key14": "3u1gepAJQ75NsWteYzE9nCs4hXptXeeXGs4aHr8TmENFe4oTycZd3GwyZ5AjRT79AdLErUQ618FPVJ6VctK8ZfRC",
  "key15": "4RRBtwiEAL3pkCe8Jg9ikYeFQECq9SpNGgipJyco2FTkpUu2tBa9gMvBocyZ3CDZEymkK6bduD3AgyYFeQwvca7h",
  "key16": "32UxyoUL796kwBamiVCqVi1T8keGKXVuZ8XBEafynroBpHtCBRx9JgQZawNj4J4C1wZLKyPz5zPQyhUeehcemeEU",
  "key17": "3D9S1BbEcMrFqBveaVQqF6iHTQW7wZzrgxRDkQVGVARqDNWdwpWechaLp6xKd9gHzCzMU31ozwhsjAeyy1GAQtjV",
  "key18": "4igSMqtMNEJ38CidXV4tYshX1A1TxrZXBLWj3efeBnBA7o2JWZvi8U3aQHPZybMK3akGyLGPyrGwzHnGg8u2XUHo",
  "key19": "2BvZW2VDdv5UWfv9c9bWiULoGgSTfYPFSHfHuzgB8bt5UfqJAokDzKiWuEW8FWKyxdhYvbcg3JTNWNbJm5Jjb4DS",
  "key20": "4ZbMtgWSNXz5HZXiKCGwEpbNt9DaKkMCF6wWPQGa8oYaic78AUBpFwhVRb3bQPX2cVJdZhTnnqon96tsYmcJwW8R",
  "key21": "44T9CJuGjPieMR1EPFbu2kxHP5xhzXoz7U868B8QU36nvxi57KYt326RaYKDQHFStFfeJaD12XRayKo37ib2xaf7",
  "key22": "wkn5udSvkX64WJTpWf6a9wRBxZAC7S7nYtJqpuFqqXQWoD3VG46uuUMwUGQidQth4X64uX5KHdBsfxz8DHcTJUp",
  "key23": "2a8EgdajkAKzUYtNxpRKhS63rzAmxqWBv2AWkJMEVs4BGGwm8H6mNNECoTeHyxVAWL6hPNi4qSGrGq8YahrLqqi2",
  "key24": "38y4fDBazWiDrBm8JDfADJptw4wuJ9jjDcwXDb5qiAdiaG8esNHrqwNhemNzLu3eH34i3GY6TMcRALSBoNyTBh8q"
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
