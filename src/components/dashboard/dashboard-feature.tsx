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
    "2Qt35Y7Pkx3r6bJNyJ3Ve8d5PoxAmwCHrD1FNEEKUe3V1Cdhx8sXmZUVpghUyXLSbVDjVgh8k6eA9hTnHZ8GjhCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjgP9eajtbxVk2nqDJMGnwZGzGKCiWN5MFptQKhjkuYN1m3nfmimjH6Ht6t8eLTHgiSK4sBoU6XjedFwDww94N1",
  "key1": "5S8GMqaFjAVKj5zeepjjdFL4xwpcNeBoQt8LQJX2DuGS9bkKg1QWeSWk2drSwJxzPVRne9XsRVkmjWcw9muJJT9w",
  "key2": "2ED42dcNup5GEML593LYQm5PVaAPeoGpdU4AcV5ABT7yEZhtH5XHSaFzmsdbFh1RPutN2EVQMFUj6hKogyAXfLNa",
  "key3": "3LSSGrMCfTBQHYxbMqGxKqTRL9GvRdkPieGeQH7hYLLCNqXRV91vGzy3KyzVUUgmievu7MuWkF2FmSHPwnKjWai4",
  "key4": "3TZBfWivcjggzfKBZaF4qUf6a5YbndcHJGsrcw51wadfJKGJn6a5y6LQKcsU7T5tsw2Xws8Mgca6hZvjFD6ckWqK",
  "key5": "3YMspfC7AP86wAu6aYsP4cykLnP1wgNWhSf2S6v7vUSABFWo2dZnpL48YGC4yeiJ3dQimahoSkqA94EznoydB22W",
  "key6": "GaD8NexkznwPxCrk6GPAifav6KZ44GKGaC8m2PAbMMC8j9dvtuKjZiNpVFEcv3KookBPWjrm3UdEwfbiLeWugdd",
  "key7": "4HCcDCdzG2kbafX2sdmBTKb6fuXR8fupWLKPVHmvCbQMhBxXB2PtrQ2aRP7HFGRsWwEEiUBkFaR66PP6b36W1USP",
  "key8": "2mNH1YPFKaVhXWVX4CBC3MjS2HGMAL5rCDTNfbYWGCixNeghWtkpbFow6LxyX11KyFhTLDvcg1udCoWnN2DQTCDA",
  "key9": "2GLmVFcxF1ZknJYQ9wGAhrHEZB4VN1yjbwzoPT5j1cGbqDJbry1B6oMTLnzWDHhgwzTq7mMDuYR2rvRGPw6nkvD",
  "key10": "2A9Q66sgvYspnotrp8umRmm3xM8YSgRXsLzzMoBdC3wyUSfNg3uqBr3Y73RveNYGfh9xgoH7YDkF2fYZgs3GaiM5",
  "key11": "2GtsqsMofQdatjHDrFE6nND7Eamx6xgE4tSSqEFx1NmYmGpcgA3uSfbQLnNx648nJjXdTXJVvcjTov1WnhS6wREQ",
  "key12": "5Epfhymi4XYQFk12fCZz5DYN1khjbk5cEHkJuuMHpLqxn3UJZppmAYWHEW2sLWYR6Bku8GnsKCary8sfdmevM6nc",
  "key13": "1f2DNihwQjxMEpDCiY4As9NTjM2AxM9Jg4ksAXZG6zSoBPTh7pNe9gxaFrg6tfvkw1VsmteaM5KiwYMUNfQN9HA",
  "key14": "35Xak2rNdNxKEwz1nmEUhWWR7tZYR2pwtTbhA39GWWJNzUWgswnch6CuaqoJybXKSDwKtzdhxQ2bhZZ6KdhJtLQ",
  "key15": "67LxoDNyAc9Fz47KT4RM1MuDAdMqAWnWNY2fBBFTUKb1zWskVQe2VfSeNrNkJRySNPARcGHGQzpuj3ufUBJoQt92",
  "key16": "3hmjJSY3pvLtnichcRAKyEizFevQJFnMK3iRMBdS53vn82yRR1Vps4UPRwAXY1JRR7G6EEaBKDrCCeetwWxZs6ak",
  "key17": "55JE2dwixqeHMiBS39BPPF1D2DVDfXdFJi9wY3rifmJYeYWiQi9AaciPidbzvv39dUsf5KxF7zkf9r5baUwdNuam",
  "key18": "5dyo3owRtM3PJ8RgYMNHRZxo5xeU16pUAFitFHXu31rLrem6RUKfSAA2pa3umccV58nDuLg5PWvDNW5SA3uvt9bz",
  "key19": "2EeKmie4td8JmwmXYy7ZyFCo4HVBhwRSdn9Sk1xKyWvZJ9rJGKPTrN4EBZeE3ABFziF86EaShi8UWFmVkKWViY4h",
  "key20": "2g8UZzYC1zKJX1jV8t5xPetgRLCWwVjCXs2W7DiFjEjxm4hpY3egMz9W2uaSUxYsP4gMrmwNbbNmEBk2DkM1PHvB",
  "key21": "jbMpNreavxEyxWyKZdbWKjCH2zLGk6WSQ2fxwHsxCfUNKa7vYPU8r27nUnAyCD3KQgRwEoKjJvGhRr7MeqehqxA",
  "key22": "2ibgm8kwthcCakoPQuSqF351QQMdgURNueHJsiBRWefWkwtvR2XKfq3toE5MtDT6ag7JVUdrz3Dn6ygCcSxG7iHu",
  "key23": "2ithzFyWdTUupvGRbnDqzHnMEWBWQifF7usVXwbWTHnYJPoukRqg6gU5omozK8JyV7J8kwUTUMgi5rnfE1gU5JZG",
  "key24": "61tZqhH8vAZBhQUK6sBGpgGMRxVyzYaY1JxAN9imYJLBBdPpfmokxvBnWaPHgnibkyWQNNdgonNUzpMjSameSJ9H",
  "key25": "1k2Ax3jnk98ZJUWV3BYqcwvYXGuxwSvPk7PMP3ijp5vnZ6Gab1kjaEenaL9z9XjmqsapBspkoy8Zt7U5ejBwYS9",
  "key26": "3yYmwbJCWm9NGwqbnhuUKovAMWffMZgRdTvbk7vacHNxJ3FuVcZ2zP27HuwLNinubLCAUZhy11kky3bQ5nK8vpC4",
  "key27": "4BrCUySDkTj4gGsikzHjbPgvZeTaKNDgUwZej9ZgfWfYwX6YLuZuhDtxzmryk4oRvnC4ybDEGUHJubTxfZer6Pp",
  "key28": "dHmnyMCbNbKT5AS3okzG8fj9PsihxD8Z9xkP4AePxhE7668v8hzpDXucV68Z8C5iqpRi382XximgTCxLZiAishU",
  "key29": "4M6ahNMxhPNg3yHHhdQgiQRNXxoG3YrNr8w98rRi6UtUPb9zeYgYnedstthPHkVKT6iNH3SDKTx173HD721oYSWs",
  "key30": "4Jw5e1j3aFjvA4yHo28cpJTodkCWF8nDo7bzxDF7ssfS77jhwEwLtmFSUD6mbyeJdVD1wAQb5WAcTQ9AeV2zvYs3",
  "key31": "2LLzd2Lg2dtCBysxgN9boH8fegK8GzYHDwnigBX1VBe36bsSQuhRTCUfBZoFqNU9m5dkMY5YTct5K93AuYgxLtEo",
  "key32": "2Yn55QFHFyjt1CvzD2EyZpSdeWPHJWnt4NSvHLB8jrSZa3is8HXZ8MbY8YifzxfmiNNVfY6NAZVTQkpEw9YgiJgV",
  "key33": "3vy4Gu6pS7TXHDrf32LKwHYvujuNHWj5XY9eRqJzeXLobt1ggVpqTsWHewPiVnoayKXUF8ZTSM357hAYdVvm2PUt",
  "key34": "5vvTAgmziuuKWzEsNJAvpiEmagLan3StXLWmV1wgahY8dQaGpn6cXgcEDLAgkaC4pKWQV9j5U9G3jtcBkNCG2DuP"
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
