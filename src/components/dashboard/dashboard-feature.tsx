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
    "124d76CmAEQF2CN9AUyAZZSouZrffkz7dY9xdx5NnSMrXNqqRiUt7XYVUReYLX1b6PfTQgFupXNc1k7MepzVR9ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRJ4cSV8mui5AYkw9reBcYvXE7iNQEkuw59SADcX5rxrKevrCPSQvaivTur1VPHdbY8dd3itbgQ1hQEsSrvie4M",
  "key1": "29guCskBBtPcJeycC5FoQqWNBQrtnaCFU4as3Wnxz1wJJTLLj84riamh9ZGvcZxJSHCdqWGADhRx4a3KoGLFXFsW",
  "key2": "4sdBfdsqsrLAkt744B8vhqzurYo9fTbM46beLkJQHfuokFVJ8zfPCUkzLSkVUbNZ1YVbr2pdBdP3R9JJvuyqq2MG",
  "key3": "5afcF7mzEnt2d37N9ZnqaBbYRUkEyjEShxyNeRZ72geAQMoa5GLY8Xr552i7SB23BXHuYmhMYUgXLL3AvH5Hxw9m",
  "key4": "3vFMqMMdMfkC7tbd3avRjqjxRFT8xtxUj1hwy71dcDdT8nBUYWUqqDu4DWMS3Nru9HTUBE4FBvePrtdj3uxdf5Zc",
  "key5": "4kSiW4KUiUuM8X9XTbF5jj9JL2EsC38VF4ZCvzmgVnrSTey6wYvLCVmXPgmipWK8jm1emTRdTuT4ojpqJ6s6Qwaa",
  "key6": "5DBxjv9h1cqaBVkoexMtALmHAau156YeKd5GSL45xnjpiaUQaAddQfvQBWkmr3ewtCrZeQHvNRgzEt1bsP9eHjXw",
  "key7": "51WvEqwmnjnBar4RUbCXmAGoR7x3NAJem3nmTRHmz5Wjsq5uPHRk1wLCuMpv6gD4V1GxEmAbg2yqzfyFzXcj2rC9",
  "key8": "LsyN3MUBhRiA1gR89joTUX6Msdy4c9VQHh1KU5tC48Y1W31wMkrDHCeAjHGp2E3gDbiha4pwptYL6JaEEwH9i4i",
  "key9": "3W5df9YqGZY1mc4YrK9HZR6dAYiQ7MpNrZzVTM6rqury1y3ALvJASoGeMutf1MnT77FDhq2W6NxhuLWNBKsJrCVh",
  "key10": "5TYUW2BzdeFEfpb56DaV5o9mVHEFobnBamQujgUarPYaVn3ivh6JDy4SC1CxxyJtHKSaeiUprAVPhzmReYuEJjGe",
  "key11": "3LJzweAfW16q4wvMLu2ceWwrCy7W6nJSX1PWFNgXBFB2rLvqfWC4JBQ1RMu1j3gdrru43Na9Hq6CzR4mpRkLjVpy",
  "key12": "2VZ3HY3TeQtuiumk8djedrJ8fZC3hUhg7gXbDftpGpxQEKZAsuU9ZHgTM3enRW1oCPB6RyNm7Fmdvnc5LU33Pbae",
  "key13": "62DKPHYjZgRuLyRySGLgmEfiEAqAD3P2hDLNQss2ZsviXM46nSjrsZgu3RHoShXo9A8uPjM4djq4ST2LpkWajxqZ",
  "key14": "2xjVqMPnFvasdoERJawjeDm5BXWybcNPfACUdqwR61mtrv229dMFmRLAtYFUrAhU2XXibPHqVzagaVzsq2eRo8kT",
  "key15": "3QhTW8eYcNu5mjv7qqMxiqVSJ3X3mmop3D9cL6RNUPhX3tmwE7zRXBz6yVLgJX6V5r87MXR1gY6evgdEigzLmmjB",
  "key16": "4p8XUZm3G1ecEohcYCJ8LxKmvBtbgjreuBXgpG1LBETwgupq39puQawXAJvmd3KfvRom66TEF12dmTXABifHYwX2",
  "key17": "sSPUttKFkUNkxVmHgBstg1p1QD76vCkxkzaGKYz2VbzwMPjVux2zkX4KrHMMr9AT6rbrXkhYopDQrSYSZbwCeSG",
  "key18": "3vMK3PpmiKCujpxtSbBSKaGsxH6SQmFkq4MVVd7FFd3xcEoTBB9GzLML57Dsj9kn96ZWWbTWkhQRq7Np9ryJy4yL",
  "key19": "61VBVLR6SiHxZYKSW9kkNFENpVGyuVJDGhph4weB7uYv6mgv3mci9yTKmghJTJn4D7srqY2jW4UCoQkFeTWknmAu",
  "key20": "3Tk6Apgfm5AmXu6qY4rcdYAutfR6uUgGPVNW9eSfsYRnKqnb2DZ4XuHAAATZhnv8kgf5wVdryexXw98TkbcUceEe",
  "key21": "2Axk7G2WDnSr4yK1uJ3EBr3PPjodie7ZZJnvujAxrfiTtAUFmHNqv61AsJh2iqSNirSj6QiHXwqK7asc6iw1zjQB",
  "key22": "39w1RXom5QviPtnFsF2B8du8ikWC2naoXjswnKaxG4PEURwDKePAF742FhNk6pjdpENyqKoJb2nS1tkBTWfnbH6y",
  "key23": "3rZMuWY1NoJwYmioLtY2J4p7ckdoHJHFTrJJj152MumWgackavWH4e994hvWyiqU8zGSRVHMjCergaXASRtgF2jk",
  "key24": "yeLmA5eRuGQ1Mh5LQZAVN7NyyhrquCsK9duW6bBxsTDLnkdZbdiGBbEmAVRyGJgRDsXnF5qpjnYW9FE5cTjuWGH",
  "key25": "5qoourhqz5GWXqJkqkeJ53MC8giAehVQUgQdV47re7Jj661t7wAydgeq7KWvmc2a1UPYNP9mem9to3fyka21RC7b",
  "key26": "2zmwgBaxA2iZxefSXLD6YMHDLLvTKcGuqbsPNSNRZUe9c2UawXL3hxvjJ1otpECDdXJGvcXtZG2BXY13NFSLqcFD",
  "key27": "YJjLpxFS4oBPHWMTQAjp6gPD6zrUZCZ64tS3ctRb52Te8rnobJX5KthxRbqrqbxdn4P8TaUTMNyx1P7ZjDP7bQT",
  "key28": "PNwAZ4gky1cBxn7McWDK7FYWQjS54VKEzZV1zBsc4P8MUYfGh7T5hrwoWBZbXcQJVkxLJM6hzMaoM1GrgaT7yke",
  "key29": "2ApY3ULXvR5AXMgKimSYKHLa1NRrVj4B2fbc5HFW4UcbtSDa5MPsehpVsmJ39Ye9Rbd7kTKWyWf7oazC66CGqbPs",
  "key30": "4Xyto5gq3xi484rTUPCa41F1CbvsUJqiisz3VocS21bS94a15xT5CuDjvqRjAKVNfag6yxxTcKKZpqbbpB9wgVCq",
  "key31": "5sgYkPH3CGTePhzugTQwUmuwE9erxLSfiCKdUihKgzSJn71AKpPrCpsyYFykZ78thMz5Ue6FnFv3bnz4CCmXoxay"
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
