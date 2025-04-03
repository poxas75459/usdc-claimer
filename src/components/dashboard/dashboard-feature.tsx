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
    "3SEbpB6E6FtjFyWciLTADQpWAu2MeuXNnZNZgZmoyKpMMM4RW6UJfbvTE8ZJ15AJ3AbaXputmX6aKb7HPDeksE8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42LRNHkjtbHRhxsbHtriR3WzfP7WTkcjPQ15PSAg8dr7ct8NYHJT1rhbyLApCmqf9VZ6fpmpcPy27MQ4TRZN1Qp4",
  "key1": "4jz4wqukh3J8hWg8AGZZyqKE99VphArYYVr4HRJrapBXz18RLUADHFLRZqiunigZRo5i8e6VruoVyNnUPoVzAw5i",
  "key2": "JgLTXtwyPqXSoiNjd1PuQkXnnuXMWeuf5sey6qUABsXYB9J78jskMSLVuShXZ1qK6MPUR3YzacMrPcwgPuZP8oh",
  "key3": "4HxbW79tRo5kkaw2cRCHva4AkD3Trr4KyhLSfeXRbg5WPw5w3pi7tGZUmZbRDeTbH7G9qURNkgkGSADeBiGACjLY",
  "key4": "bRKktMv22sqbZqGZcYHFV8tAGQXQPoCYAJAtw137zSamDdJ3kujAk2txqnTcZUMb4XchnjEEG9Qg6zCfgwLVx5b",
  "key5": "2yAT6Gfw71W75k2Biy8vqQm3pU2wsiNSYSg3H381uAYBsi28ChxdMZeMoNhosCQRvGcLetrw8WXT5pTddyJ1PbLT",
  "key6": "2Pj22cwohAMQKyMuvDmguaSDXmixk3Qf5XvfmzXLdXQWjoVyg9nVFP5PWZTZi1SRcqyX1auyGZMn1UVPB3YKVuDd",
  "key7": "45rju51vhEyfrDDdyrR6k2gE97UASCuU148KVupZrcFSMshriqusKuPtiEjUAj7TJcnEQiHtU5Lb4KqvQ47EV7aB",
  "key8": "37XfKb5N8TSgrLuJ18ve7NQyWuVYHUy2rrrVHv5gVr4c7nQphAysK9PtiG8rru1obZDCspEgTV9SHL3Q6TWhAd5C",
  "key9": "4sC3AimAJsBud1z5uQinFSsSQurWJbUsfLgvuwVSGGbwXvMKktqfohwouAh4YeGZMPARX6kSCVyD2FMJadJCRfaD",
  "key10": "2CDm3Ujt7viNWjq5X1CPTcb1Wm6RwPgk8GTrjFx5Jz58kbu2tpo6F5sBbmWAvdiBfkdeVP8GwMxVnjmb5CkvGa1g",
  "key11": "gs2NHZkPxkj73bqRDqXR5PUt6YewbtxXGwj11UFfWKxktPnBLWVKQ2vFxjfUtMWBTCi6kMWuWR1jaLouTrR6YWi",
  "key12": "2AdEj3E1iYQN9bmww44biHfxqkAHXQVjhY3HwXQPURv12676fuWfx7ZBsLDSn2911VcLFy3Ly65zxyhyJGHp3XoN",
  "key13": "4HZi3ioW6CUW3tRZCpdub7JWDGcV5cWWrcfNZhziWhBoRx7CBHa2hX4SkYWAkKZeL7bgjBeprdBtzBDdp3vQrY7o",
  "key14": "5VMA6AfHdt1XuANXx1rhtru72EGQAsbwCJiP6r4Yk44B8umeAuourKFhMeShPscAo2x6Xq3W3GSgsoRutj8JXBCU",
  "key15": "2SF5JC5ZhevqMAEf8AqQiH2zrP8ufYuTAiW5LzozDn53y1eRBi8Tz3CHmUBsJar8zSzZzeoUEFMbPDSFPAkpoyaV",
  "key16": "2TQbEG6o7wXNnKqnetUKH8nHqgv9s1dbSgnVgVFk8xox8eUoueBDDvApEe36x1DADeTGQ7RrY3HBb2ZHgsLHDz6p",
  "key17": "5YCyjpRn8oHTCrXSD6fuF2GJo4a4gwkoxZpi5JntEFzs4mLftJ2AZix2WRgJLgQ7oXUrpxoKuFRcg5osBngPx9Lv",
  "key18": "5YzrA4QyeMkJaWWUkaFX1TP7NnnSA6y4TgwicfzihG81H2gyYiEvDdx7G5tdAJadRZnZxHS44svS1a6pxN22WFr1",
  "key19": "eDutkPUnuWScFijfGKUtyRXgP5LufV2cRqH7R9Gn6VFU1ZtrrK2xDZjueHR1TQfDAdbaGoviqNfbdA19LY2PZ7h",
  "key20": "3AHH3uzEYYwD2QHeNkcn5nw79tYEnByaNhb74hMUc152RU388ZigzEMbpfaWVrfn1tZ27uLKLrCv274Pn7a45n46",
  "key21": "3ypENYue2SgwJuUgFCQKrJt2R45UFkBbNgYDHRuu1HS4u7zEnD2jnFY65ooJKwAAVMntgraGuauMi4isKYBjBMX7",
  "key22": "5ZGQrBZnGayiZvVt1Dz7g4D9ERaQU64sKsCVNxTrDayw3f2S8zUWV91CzNWLN11LwpYsJbqzXLb2uAnFpv1Wdk6M",
  "key23": "2iFXSZ9mivkbDCfqrtD1bp7KVkXqLUTtLJ8NFnLr5u9ERZf6uG4LfSywfEZ2SKZ1RPRXLYNGpsvMUNrcGanwbz8j",
  "key24": "66v7C9AUVdeohzV4T1xi3Ctmasifmht7EnyPD41cwxfEUGvU5TLQRyafUnnaHXQ6Wde36iuoo52aQAL3YoqB9r9F",
  "key25": "3R3vM3hqG51u1gKveRwora7UPvdhChZ614KKppMDeTfFGn2zQUnXBG1VLyafuKaoWaNVumdTJftXEq18SgnwDsug",
  "key26": "3C92LGZmdswv1eNCEKQcofBpbPbbfNGfDqNRxrs1bXwzuLsjXDUCukVApgZmcYn3Gr31Q82t5t2h66r2DtzaNb8N"
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
