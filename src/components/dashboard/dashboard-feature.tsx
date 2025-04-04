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
    "4RRTSWjy1n1vwNhJ9EPYFPxhSW3MsY8ZxUX7oDRCeq7s1LAFjjGf4nFo6f86ZGSM1e2sVoEguFMZY4EfLb338H6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MbddxPrNNEiSf8A8BvcMx5DKfNktwa3LdskbeaBMypHxyXYvbxiZ9TrsFtsMgBzWCoKzaHC8qxesHWJF4BBWyTf",
  "key1": "4VSzLLTbNZPBhDaBSt8JSFZqBo4rEMrURgCJAPEcwt1dVg1VDzeRQcAnd1wjmqHj8kMxoFdqNKfcL6KRWNr5agcL",
  "key2": "5LRkmYNug4dGAV9HpGwAGJ3uzUBnGSnSTZ9beqx46yY5LnLgWKUfFHENf7aJ2QMFiJzjXYEb12if81wsULGsMHPf",
  "key3": "2imY1tdtX9bwfP5GbDh25BHbdZgLj5BQP2m4bptzckLBYSbrans2fbos98hcVo2YP82TmJVQPaZhA9fR7zKhSrjm",
  "key4": "TKGzLpbkviDaa3fXvjXETVPm2fJaE1YimNzY6udpd7hPKNaeEQ1o62hQHi1X9pvhLpfbb3CVbaH3Vb3qDfPMaAH",
  "key5": "3aqtgdL21uF4Ajyzwo39LCLroeB97ANZt2aXXsp9AkTmuiqJJTVT1nJANsn8q8RzC5TcGudyvhpDSFv3E6rtnbxm",
  "key6": "wEqEEQfcfnFSKVCAUSpXCYhtsuKXYLvw1LUeH9jcR1nHajxartdvq9SMGJ5r61Aw9msXPrpPekTkdqH1QWZ8Tji",
  "key7": "5qKh79N3EK5VDKmzJFYpRfY1YrjCNBAjCGoTrmf95pokN4mDrJhuuHhL6jPrmQrkUnXsbXZhuQAaxi8a8RnrW1wL",
  "key8": "3XJFyvK4XXptX7X2MUiLdUivMs9TwxAuJ37rhg9pGe72VvwHWYFqG5FfzVQ6p6Q2VuB1X2Tun3hcLFrtDVw1ttNo",
  "key9": "3gwDkZQL2q1Z7fhAmUitMes4equdzTpNA9tSQhETfrkXM3fgUaT6azsK9qzqAUzxxg32fbmDwYqwzu5VttfzV1gK",
  "key10": "3LAHegRZcjTrJzkaMRMvpxLyoAAZ5qEGjMPkB6GbJraCYAPUtXmwk4WxmHzCB7jHaY5i86K7kNgyB2eGJjcdwzD8",
  "key11": "5ZTyxsbU4bMU4tV7JyX4PCEubTjq3c9K3zRkijKTZAX58LZHUDcE4hQZq53ugMHgVXLgmTVBsZjuY61G2abaHK6Z",
  "key12": "5azfGyW5cbmhWKoQCpNdS8G7p3YWgAPsncvWF3npqq2RZjtREqtgGiVDnA9SD8GPpz8p2s29bRVkAdTe2Ma6Pa6L",
  "key13": "3nZTYjJVb4ve5AF1cJRe1XVNL2Nen4MFGqdWP32tdePHHpLKLSgrejFVurUyNuoryC9YkBn6414EU8ST3Y8LMhmM",
  "key14": "3W8L1DHF8KuPyMfZfpyrTo6oLf9qFQCrdP9BEWmXGCRLBLJyL4DhoQF4Try22PsPV9hpMGBQsZ5cTLeiw8ZcwYGJ",
  "key15": "UvSAnUBGoAvm4UETHANAULwruGu7fjDNNwUxdAvLk2rXPrWHp2GZiCTVwVujWc5KHxYCwdJSVAX6iuWmByZ73M7",
  "key16": "2aPC4jVUHftUgMRRwtmNeukNLMauzpe3aSDA3941sKUjg5t7FTasj61fNJ59f5morEze5jXHr9huUa7gRvymcKod",
  "key17": "2tiQQspiEyAYJ5Qm9VZkdFWxxMaLZjfMmLrckm1vQ2oFbhxuyeXu7BSw76LZxHdA7m5ztxS6M4jVkmEpQ8qN9dMG",
  "key18": "237wq1ZEVo5kQN2kLEufNM4CDeAW798sd4ZmkQQ9uTuHzWLCVseBEZCppZ88UuJ45y1DgCCBrKGkEgwakgcHfQkE",
  "key19": "37HUxdUWehnSYhnRniydYNcqa4bKD1xt86h1WuRzeYBuYgMRyjVgfTofrMjxVibp71HwFhgBqFQkPm3ZG4ws7CCh",
  "key20": "3cMaKfuZ3f8o1qgJK2s1M7jS78ATXPZ5QUkRNx8d1jX4E93d1hTGmQzdwBhhP2pPnD3DmNhadhHAPv3Hsf7YAcK1",
  "key21": "8TEihTQXRJo8eQeK9DXjYx8iEiwWrQkBsZbJRJ9hkaBs5HHpdfUAZdy8xGMvTaeXdzBAbTiFacDZba8xEk1GtRT",
  "key22": "r3tq44Q3cFDwdarLHfk8eKJSVzGnduBDKgZvChJUjtUTnRxEfRUmdkkhvYVA3sgLekpYyDx29BKVX6CEmzrNaEh",
  "key23": "3fSKwiXdoe1oZeorqjpzQD4Crhnqqk2m2eHeY7stGgbj63qNKcfSsmWxU2zAU7hvisY5QTy6eRyQZFcc657qs3Np",
  "key24": "wufa2ZCYwB9REf67yDx9EehiNw3tUNyDfPVHP38xEVVrkMfQakwqb9ziMsT5bksLWfWTkquKR6MMKUTTKkDAZLX",
  "key25": "3DZZc2ucgqarTa8ctbi98Nv7gN1hEPQ28UiDSm3xCJYoy26aiETk2UzMsZ2mQv5wDTp5wEMJwRLqxerR7CQzfyCR",
  "key26": "5wdhEwYYkornv62pj3pdTosYca1ZpCMUv2DEQgeABEM1DfRY9oaTnUsvYzkjt46LjgHpf7NRNns9ZHEFLCfE8waL",
  "key27": "4N4RJ5qSBMa36Q4x7fbMgHrbkxNY4Z27nQuidptQWM6arqR7sPohjHBNtcg6NevDkjsNcg3X7gUnNaJpHsq1YzMx",
  "key28": "27NVKSra4wSCQ9XbWuLdiQuL9hSGkd6A8EQbmccsFAkLqednAzJvtKWvDTppMxy9bRD93FVcW723m1iisKFKqGYb",
  "key29": "43TBsSQ7BpcgDRZv8N1xavjN1SmL1cHyX67ncwTNmQCd9WGbwZjVKpyBM4G8WTTrRUnvU9hKc3LJQJcUL8yRbQwe",
  "key30": "5cUbnvVxArnzcUXaQEk6SAw9cEDxoRSmC2sEeKqqZwaZZEWzpi3wEPuBmdPzDngKvuSioCkskVbdmyZooob7eunb"
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
