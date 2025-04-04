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
    "2sVMBPoBeXbaDfF6SuffnUEx6V8nxYMUcMnvYUKsHt8sNEqtnWUynTbYyAAQwN4zchvJpfMM8paG2ryNsjhqVCTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659Y7neSyz9XUV7XU6DxdckbD9M5TeSDbgVjqBrJmtgnKMqGUWLEz8zjZHQbGqjMAJs3aMFyUgzujGUULMweFBvB",
  "key1": "29uLxfFtF2yyiYMwevLjhKCHuCsUfbHuF6qrZPQPiAdnCm62mekv697njUSWrnj1dLrG52YH8iwui1dVb53NVsV4",
  "key2": "41NrQWQxESEDPShtmwNDAL8a3b5C2BijtchSwPqPpfoy4WFB9QVerRjkwRkzZ6cffwCAzHzHtAoHXxShJebUQqLG",
  "key3": "CwyStUe2LC7Pv13umyE7C5H7NBWaeBDnqVC5zk8EBZxV1f7G7qEE1aS4ezk65xuMQY5RZit7wfGfHH8so5gCHDA",
  "key4": "5gkucdjb8VLdPPPQS5wmRjH4ShAC1EXtiZ9AJCfJhvUsM9ANN6wxqvGQ7AtXZbHmwKVCeDAmgEtb3UqtWukzdQug",
  "key5": "55Pj4epd8v1xK8YspNdRcD7hPSfSKW8j4mzeyBvZsEbMXCGZFgarNgSQj7gY4w2uabaxQzxVuQyoWVoM3J4qAAvk",
  "key6": "5vFPerabR1jbjn2AeCuJUmU4ucZEznG4seS3dkYbWpZLF7Ank6VZdtb3wcvwyQ8E3pf64Nov4rj14cxqcdTNHWvN",
  "key7": "2SjTStn7bxjumQASSx3bUuhfCbLCbxJweuvfhANmSnj1rkQB7LgfRPTLSvo4SNnCTMgGH49YXnuagperZDwoBykQ",
  "key8": "5w16cZbFnrXWyAUgNxHp9EPPbwL85JcCWSHiT6C1V4DmJZJzWw8N9CopzF4GiBR8V1qTkMoEpqn4B9tsAnTLcWTw",
  "key9": "4Frh4o8xkbMqezBSWH5rCtuWBgvfhgGCPZzRvcbtTunVzRzDLvJsfgmzgKohpAdgL4cvm9YWjLA85zPkAFmGNgNb",
  "key10": "3MK5vz4QfP1R5jVzfLjSZpNsiooEQL3VoxeWUj7uG8fGTSyA3Y38PS6E6b3ZizGgnexxKDF8QvjpieC5cQdTujxM",
  "key11": "oxkG4jbhQUPj9gBFKdK6HRdMecf3s7aypbh4n6LG3L1QKvYXJidyrd4dqDHPbZhdBjoz8gZidVtY9iPjJFCpHLe",
  "key12": "4PcDjm62mxGnfVdahr8QFntZNqnYJxAema2jvPkMmjj1HMcJWXum7zwwuEF3Th3Jv9N5yiLfVE45dSHEdci25HRA",
  "key13": "3kjE9gAAGxDELLcLXwaaczVjDWWYNkPzWpisbEs42qAKisbKXihA1NbJYGsfiYXGr72y279mijSUFSmTnRCM7hhk",
  "key14": "4gYaxLzq1vCn9UJTQJSUFJCAUa6xoWHq4qJ3q2TrCbChPYeXnyJGpQjjmF5mcACu2Fdmyu2wugTpgaZe7daHaYVa",
  "key15": "49UrBvQEGgFnTjuPVcKLcHDsYo4wCBLmY5Bznk9T64j9WDvZze9GK7UJpm9LFCi7Kk45toA2R9BMT2RPVPDHeXzg",
  "key16": "5dnurmCHqzW9x6qZDqYp9rybgjA3eyUgbwm4wb5JhVKfNLRBX6q96ypvz5dS14zAkmem5ViRCmPQVADmu3RpCxYf",
  "key17": "5BdMgi4AGyp9qN4v6YodTjmSMhcarsn8xu1AU6WtdsBME7nfi1r5sACkhdVRY76ijK4ccG5TT5Qr9aN5zwmYTmju",
  "key18": "67LwF38hAhvbLWKcsk3b1BhZHpUow8gaVesw7t4fyf28fehokWNp7Wrxe3gCR9fNkxJzvVyktqqELQMNUwyApsA5",
  "key19": "2fXU5yTco4Mww2sTQ36znUjBVYyHXswrFzcBMpWFdHQqhSyFcKFjNv5Xj3A6cydwxz1z3rau3qqYc56tLbyiGcob",
  "key20": "4cbWKUpjQfwsFLKcsMVGXbT78deEUHJhCGgjGpw1ENp59uU6s2pX1NV4VuFzVLTpDkzffdQYk41kGeQiLyXhDV6p",
  "key21": "57HjVjGZXnoUoAjZqgxwNL5JXnL52j2cHk8BLdTbUdhhuQWMBZNFMhbpY6QkR8TY6iACUptYHSTWojEpPLF9DKh9",
  "key22": "3nyRfKimY6V8x1B751J8fikRoVtoZhgFA82z2twmGaYBchg9F7Pq9zEh2WAaGL9TV96UMaUjhqcB6M3sHavY21rv",
  "key23": "1b5NUDvN4v9rUWQ2YpNAaDjfhUiju9xonD1ftJ8pMSCT5cfGqHyjb6sXQKkwfZ7PU4jr1MVZ8cPGwinNBhJ5VCg",
  "key24": "67p3KPoHJhv8wbPEwmiiZZrAfXtVR6YQ5veffECHvK3fgzA8JpPNCuNpwUCi7V3DgVYuZ4vmFtjPuESuMZoDuiv9",
  "key25": "3nv37fnDbD9GD15D2fPcJewc1btaG2t6XFEfPzqTCB8pFNaSHAJAfqfJU7qp4vx5dGKrNfBVYC1v7DoQ3FLAEq3o",
  "key26": "5wiQSvTwXHMFNd3S57VEbjZB5R3niRXjHVpHCCHLPAnLdTespay1ewwTaRMESp94KJvzZjatHZL5aaG7PmWmuY1g",
  "key27": "2ChrJkcaDzHS3JmxcLAo4pDVWJBT2bHJ5f6tARBXapEsdJiNVRw3QwEkUwLjmQVyEuUqaTy7BbWaZs2M5AKcmxGA",
  "key28": "LNZmrWMDBpAaktkmzyhTvj1zVpV2Hbzq2YG1x8XioVAsP5tUuobgPN2UPvNFZqkFj3WnaAUFgSz9H3QNvFceUsn",
  "key29": "2n4YBoEGTdJ86UxShsqj4jq2mBxuHmmwLVECDs64mg6LibBFE1azAJ7Rw1QBcRU7aiLG46v5xwBfPUd5UCSr7hz4",
  "key30": "2bjiURa1hn1KHQvKFGQ3wGpja3rCwmFNUpZEAkRyRh3W6yWm7m7ufBELaVagpTkKwLXpiN7BDvq3WNCbzhswMhWM",
  "key31": "3nTEedQYTzUiEvXYEMezB3sC9Lugjw63iCN3Mix6984fcedbX2AHjQqn5mo2mcZqP65Qd45YFA9ATargQRAHcoe2",
  "key32": "4Q3CFwYFMLGatdxx3SCJhvVgW9oWYP6sDRwKAaTynPCTo9LkbC8m1HdCuGpPShASBM5ay1TAZCa3BiLUvR8A3A47",
  "key33": "RhR93d9sHhT26GTBKmxEtUTSd5xhiNNNBYCtock145Vc7QYfy6F47sBsKgBGD9uZTuFwh3AKzVJjJvW49wwE8vY",
  "key34": "418REnjbScPJ3S8RNhFMep1KYvgjaJpjJUPCTF1xBUX14Puh3ErB4DmrV4MLJ2aMvFAcC2tX32EPvUtfAMoBqpsZ",
  "key35": "5sUvzccve15KsJXoCBCSmzLU7x6HHfumP4pNEjFpMBbc1PLHVVzFq3qe9wGEqCVraGbqbRt26zvD6X28pJBvLrjm"
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
