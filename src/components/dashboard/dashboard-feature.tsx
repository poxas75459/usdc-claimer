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
    "2AcxmKNiHvwGfKgAN34MEWvtyLuW2bsoLcNcC8RL2FeHuouqLwXA1gdPm1JkrpZPPThYccYoQB6EoaaNk5j3HmPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfX3KQdpn8kXgFU6ak9BdsNUQFDZ3Qj1KPVJg5gHU89rjBPeyVk4xM9fCa1zhCUUvagy4v3pW3a4NkVb7XWQcGv",
  "key1": "4Khggv6ZajQaFWq9Des5vcJdTafCbtVSqUw14aQhYnci3Ri4ekyquyocoMxQH9e1vkhteBY3Tw9AM1i4Y2b7d5z3",
  "key2": "4JEagrS8zfVq5mo5Ckwi333tE5SoFfUGgJToob9WEHmwBBtmdTMbhiuqzpZY7PKFnJDW8e2GFBvVvY37Qge9f4Y2",
  "key3": "48p9EVunZk97otGmUYm7axGdJrhkvrF9FVbpFwUnB66v6rgjoHe9LGW3DgRRAuUzRtWduWMdNEhsgMDWHrvjapZf",
  "key4": "22gqjnKWMjwPWXz4rCH4iicnQJUMwyT15KZUQjwaq6Aihg1RJDhYe6GmTuXUTLqsRsvR8wP5ZnVsdGWhiizAGAPb",
  "key5": "28XtvRm6qfihVWnVwsdLJaAHeoGJx9ESrmKyYzwa7aGEoMoayZw8iqmy7Z2xmhfC3jogVajyA3MFhdwk4mhDppJe",
  "key6": "sD2L37FK2TxgDnFigKFf9iGrxxZQqe63ok1nHgzqWSQWTquxQsKX5i2oQ8YGGVKUtMrErnMfzKVtkDxuRVBMBjH",
  "key7": "3xmC4AhdApekMh9cXdHsjcxUnrW46Kz6UJAcjDG5j55LgnAqbn8syYCE2YFojqNnggQUfMGznRc53y18YvtR4e4S",
  "key8": "3gkXF9aEGbEdvyZrAGLyD6Z6Em3eTXQr14euyRQX7VVgTZDa9JFd8K2qpo9PxCn1ULT77NWPar2mnAQ8yFSEdpRv",
  "key9": "5hu4G9pfdfBtRXPcLJxhQ8XXN1yWdKDLP7NbBGz3ECLcgBtDuXzanqhs7TTtmcPoTSk6aUgS8DxZN6X38CZb6qyF",
  "key10": "E4qBKdx3nYza2EQcs7DByvBbuSq2zYfhHh2qyvkEEhNCEKHTDCFn4nLHabhcStMQ7hqdhMuZVbcuGEo5GuzmL9C",
  "key11": "57qFLUUeiPHuAErNRr8daxnguAdbnxqNT82rcwgDCAWFzxszFVJYT7eTjTstH9joVV344zfs5ZQpS1Cq3cF8Fa4G",
  "key12": "EED9PDcZHJ94SUcAFLZHD7knm4vdkfw4LcJ8ZW2vjq9gPPM8fPGhGMzNgtJXYZ4hTqLXQa9mUxN1NCBaKnUV4VT",
  "key13": "3Kb3PimVhCakmojDs3fGLMjZADJijmBSGc5RhamEbYgGf1a5vRWsmeqP77DyW5wu7u8nA8qv2cExtZdMLfzGdpx6",
  "key14": "2F2Y2AoJK1EtqFjFsHdpffZp2gZRQo1v3pUgu56CVQ1Qc3vmS3bS82fxmfQbnfAE9zBTaFrjzjYfThaoWSmGKHWW",
  "key15": "3dsAQPxN2TZLs1Eo4sU3Rw97TpFEZ153WGjW4hqb9tPNRkXfH5Wwegmr98PAemxuodHSs8KUGKbjHTRyvdcLihdj",
  "key16": "3r6qWTJpD5hbG5PZh7EpEegyFK4qxftMML4ercSNaXLBYAbA11ocWPNKRXHvdCx388GYPmuHaXuWTNbpdNWCgX1m",
  "key17": "4Yc1qTsCgDdD7XEkkVnEtAcimj7WRFxNY9sXD3bMDaYYHnfkuiNuEJYZwxiEfUFik6CG2RrNQ6tzwHGDYm2ewS4C",
  "key18": "3uK11g1H8qXRSJUgv3XwxPy44ebLxAepGZBR3MqekBKPUvyfWiJSqDyxLUQebTe2FNSSAekheDXwUErcgGj6w1MH",
  "key19": "3AXC523Xzn25Shb7DSWoW4HbzMoRtHHyu6VndhJV6dV87KwQjAMWsfpFKyWb6RH93Ljo759UzyCuPortXBtfG4wa",
  "key20": "38yoCBGohPJu9qVL6L8w6KDCQYCcvVzHHV8xr7ACLeboqr4nWs7gkxyyVxAhmW2ka5QG5f1hZYWRrxdG2u34gL2K",
  "key21": "3GnESmMa6x3K6aH22yFfKbxoW84BnnTZwR12a3sYkHSKMmbfAbxLyMN6icuagNCA3C6o3HVgdJmqYj2Rkggcrz6i",
  "key22": "3ByDCfkA3yRRg1ordJyvhL6NjFPxsqQs7rvTNEcWdeUhJ72RZRdekqiBfFps3jJKmk3nWYp3U8HSfyyPLodzVcCf",
  "key23": "CdZrv4ec4cYRGUh4Hnp2c6haHfj8dy7JJkpJG2vJFtc8jgaCMgWDBE7s4J5dBq6TvYGSXoiADZ9L6CRsc8Fa96J",
  "key24": "5UG9n2QhJatvhNn7ZSyjkbuVaktD4tGid3vg9ju6GfcLRQ9vBx3c6GRMFDEZo12thm6iDTrQYBJSwmQPppwzbqm7",
  "key25": "Wkkpp1LEFz4KZDXCqDFucjCKBhvJKWkEdgKz84rvVdHYaGH2UFvjei7ANqQXKcwVyUbqRYfBU8aUkfrN8pZxqNe"
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
