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
    "58hSgBHmJRNjutbnK8t42dMpL9YsKUioRHMWcmZzwS2pQXqEnYF8iP4S6fffbZMGrcN37dJi8P9UAfabWCGrJDYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LExZy1wkoWKhwW11hu5R8dJYLF2qwhJW5b7ng9rEVtF9QGKuHDt7HK4UrQyKobjPJ2bTWtACW1anLbsQWmDH6eS",
  "key1": "5WzbTUFTtDkGKRHPUDMf9GbLKWnaBWfkPm1MtGTkQ1oufmWRdNxgjp155TdjLngYtu3vYM7r5q3eN5ckSWAT6Xxi",
  "key2": "57AXJVoLBgyuRhsy7HmqyuvAhv8gFM7z4GkTL5g3ebrPfk6NS2bCZEUea8TtMruiaKU6MVZ1ztZj5PsmrxzdpU3P",
  "key3": "2kF3dxGKqV3Wj2UvCKcJnQYXcMgss1vrJGX8HaywwdsTaD6bw3HTpFv7bwzbWs8WHukp9jQBKkGqNHA6NhYvAuRi",
  "key4": "2y1ffsNQgEMBgd4LHnqd1CwS1aQWF2eoVtHYrzDiFDaoc2c7mfLS7y72eJD6KifRnNuTRaK8uA6f1eyofi8tJtC2",
  "key5": "4y3nEbEjNdCisv2wGY7yomoFGfHBe38ML44R3qKfXeM8C1PYCehDG9kmpDqjQ2dc76jRbemCt6YYfMEnNJUGwPWf",
  "key6": "3WH25saVRZP2S5n7J93BnHbGp7KHttHZGTY1GNKuqh83zsT32i3FNGZ29JQPypizZNgFHZGyrmUs5D8tBth1pFxQ",
  "key7": "3gXxZgrjAMknD1QxeqHr9wytG7cP2jw1LcGQAQBszhkGS4NdsdSNC24B8BC7mBqZmGgacxsLf3uVeaoyQsKBA1FA",
  "key8": "2g3rDEYS4dUytZoq39pJQLipJR59burxSQAvhKXRm3wYLoPLLDbTTd37zQrUePSeZ75sr97kf8pYpuyh8vs1WxmV",
  "key9": "3aT8Tr1Y9LY8rPVConYxGbE75my4JUQu43oMgKFaWopWMFQ5pGPHQQ8kSWWTehjrWHegsdqsTufqu1TcFWn5NEaL",
  "key10": "L6rs1WY1XffQC9DHzeWqHwMzGJxMHMo5kWf78AtyJDckfy6DZDoSiFKYTLSbeaGDvzgfitFjcsBRstEWf4Wb9Yh",
  "key11": "3Xnk1CLy43yDvFaKc5izRnb15DxVhSuYmNZTSTdVj83976pE87N7177ya1v4js1zqxqvkeRUG1vVGcUYuUVyrYBf",
  "key12": "D7UJKgJjTA1a8k8sLAGy9tYoM4P8igGRDZYZP6L6hVBbC9qyjMPNAWfM8hTjKMrueVbUT8DZAiVBu5ixbbPYbUo",
  "key13": "5CFPbZFk9dYwdboZD5cu6BdvKqMTVvaoSyem36J6ZVEoeup3iNrPQ8JTwmnqJVkhBKy2nAo8C81NY9rnc8BkJ4nq",
  "key14": "4M4KbUkNtMnvBosMhAnf4UUeg7DPkBFHegtksbQayPV2EQanVsDyZ1rAvMMZdNfB9VSWsLyUDbt4fQiqWCxW2yyx",
  "key15": "eT76ZBy8PYnT8kqM6DNBmnipmznuomfQRma19qvPVgSysGioTJanz8XNgmrb99W66r46EgZPknKzfBQAMjxeVZh",
  "key16": "2tzHJMcXki4M74Wi3ew5vtMecdGjk5bWCVZw6uhbLjimdZSecjtMGTc5GPFrjd9fyCReAo5ssMUgxgyi8YahAJJu",
  "key17": "wifgwrLfsHUoUPZEVq6UqKLsY7TBX2i8S34GZXPyzRvFmpKbgvJ9wBaZ7gsh6WqMzxSD8WVLrR5tn3nxKVxcY42",
  "key18": "3WrcjS2jfuHcASM9wZeU68JCcowNbw5pVNshQuvedtPHUFMqyHHErD8pHsZtYcbBoUhBDDdj8QTfvCjUprVHFjGq",
  "key19": "4FeG4HvrbKiDo69cXemw2AeN2FutqiBKa6ZYaK5DUMDkghk6AM3cxzyifMxEUn4aZvtaLk6R29pzH7ZSeCBQLtoy",
  "key20": "3S7JpUHLBoSPgGBS8ZjbTeuAAn59JiveYvjAWAT79EkvLv12Ayg3UWTrS97pam78Rm71x8VXbvZTpPWQzLwjAz6V",
  "key21": "2wrfxo6fHLbBw6K9GeUcni74Pyyh1BUxjRmZNPMgNMFMb7BzGKLkCYpf5N9ZLAwQfEK6ipHmKwG8SKfHJUP9pZ4M",
  "key22": "4wuVig5iAKS9TmciPYLWA3pLuWwgJSHReucsHEuNxUUp9ocFojgYzFxpAZfweUFMukhAST6hBDjubBqzYREHDUYD",
  "key23": "4ABzmEQGrSandmBHJjJcU1uTEhin1jSoUFpSmeeCB2YwX6U6CeteYgkt5schbsr7Hy1VjWUT3qjokBzdRyEA2JqE",
  "key24": "RrSiH3QX1aMaSmmT1WEK325V1qJjQ9QYFj3KvE3jjGTUJLjeWb8XbwHAy6eLydjQKbwZiY7gwu6wbhKUKCSBRuf"
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
