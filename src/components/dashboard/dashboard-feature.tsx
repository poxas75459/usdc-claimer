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
    "3SG5uQ85FWFNB8hU2ieVxYbm9hegQDpyCH87N8QPyemygNeRuDLniNN4ZCrCsLMEbz2JSch1x3SJXiA38zorf19e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBrMzuMqiEW1y5YpgRFGUPa8fRK5bXbjhho8F9i7vWrtQ7v4eSzoPFySQm6qHvbQCKiDPmcCqEPqzYYBnsr65mM",
  "key1": "5g9BdJxc7N4zT3c58cebRe1tyLwXG2jiaxyveepfYST17EB47GmM9tBuSFT2BTuhyp6inNA93JxjL6Ed5yiDHbqQ",
  "key2": "poPwhKiup9ksubjEvp4XTzVeKpnSR4ud6ynZsPWJk9EuazvubjkPkg6mVhWmKGvoQqhPL3p433SAqMP9NXC8aNb",
  "key3": "49FubhnPvnt9AnfmbSKbhnVKUTb4Yn5RBdD4JyrKG524Dm6uJsvsLSr8SDWVQmjMfrYJRRsgvoSdVAgw22o7zhAM",
  "key4": "2g2tE7rUh7yfvpTaEagJ6h2t1ZNoMyAw15d8kM13EZpF2Y9RBZ8Y68LB3BFrWosqDbhcgEWxVnefo518hxsywKFb",
  "key5": "2Ccejwf4TwtRt6t2tXzATMoE3TpSLhTwchvG6zbZYpMg3aatPXmWus2DQkUztRBwgndhrPC2r747LikFnwwK2fZg",
  "key6": "PtgJmLGxV5NQHRLLYRXQsJHQ1UMTzzpnRn2yR5Ak7THrA7DQEdwxffeRmPojAoBDciss9zxVaDokoMN2bHWB8jQ",
  "key7": "3czDomyHdPwG79jWsyujkp9U8ocxx7joD75HiKgJrDYTQpu4rkKRy3uyeRzFxNX5ZFhvofkX3QbnqCvddpdoBvwe",
  "key8": "65ycJ58riXvna1TK3mBE5hNRWGNfLhrFi7sT2ag7CBn5gayrUptFXTZ1Z8rtmM6Tzcz2DghveoMkU2visX9HkcsY",
  "key9": "AHfAyhCd1hi2NRjSEMXgV5aKBghJfT5e2ThD21v8HTGvQYZXsnwiTFojYFnUkEuHbZpQvinZeB7KY2RwGSyVzRm",
  "key10": "5ak5e1YEB3jhUC5FG2yz2gGxWkfvkupQTU2MoaYYG6tkX2eyqiwLVwEqVeqtiotm3tNC59z53YfRL1NZJBywLqWq",
  "key11": "2CLPPdn9JFJ5cwrE2NZgQfsLJaVQGHuXZBn6e3BaaBSrZX4HrF2wiKBLEwsuiz9U9HYn5YTpZHE3NHM48HkARzuX",
  "key12": "2aKhvrxGcJkuXamnhk5HDn7mSuQxPPiSiNjz6v6bj6v5XMfjgEVPP5pj3JLiaP9ULK7NtPpDYN1bZ5VVYikRZNg1",
  "key13": "3bzwgUB2sr6B4hZuDdchqmBwHtNNNqk8WHax38obaPeoCRLg9VhJwoWK1sPqcNB1qvtHSAWSPPij6V2c2ub25Vp3",
  "key14": "3cEmTCQphEFTxg7U2jyBG4okdNehzZR9x7B5ZfKL1ee3NFa1SniBTkNaY3W4dGd78dJpSqjTN6FhTM2S7SdL7m5",
  "key15": "66Hdx2UhBH9pqqV6p5kd31TqAu4VxgQ3YVT2LDZPtWS7iSfZZcmpAjeUVv8opsAdaq4913W34XX4vReaQzjtGxL5",
  "key16": "5K6JQgj47i5Femycw77LyavJkK53v3TRzu6mrd4rujXLQ531Gf4HNHr5YiNT96RGqQJqSXnEF2jzdGznikijEvhv",
  "key17": "5WK1iENgPJ5QY6S6fcgrTipn4yGLkTw2ezmCqx14hBopLBgs4pfeMehqGWeDwb86GMApFymMA7jGW844pueop8y1",
  "key18": "28WCCqeZM7XXsgDt9gkTSmTjQEtAyfntD7nLMB74jQuYtcWtFGD3S4bXrvfPMA13muGYAESBLnbacC1jCyXBJa3e",
  "key19": "5dCD8f5WTXnswnvyLqeogzZYu3wJdC7SSjGPwfvXULC9SjJDUxGkM5iHeh8zvqDuEfWxWTLFJiMgzXjiWUhBhswW",
  "key20": "5V98nDxTLPg3Ke9psqDqs4SWwFdNZaCYgnNJvQFnBqrALWvdKpUz5Pq2uUEq6xMk4dwD5q98z6XuXHq6Egmap7qT",
  "key21": "3cMskqTkngynP5QcYciRwgYLipz1hpmp2nMbZAAAZHHqrgbiy8uqEuT8VHGYc252H57BJgeGNDnSeeiUrHRmTVN4",
  "key22": "27B4tLaVozPaduU1jhJA14sieM8j5SBLKsUUKjk6FgiAERtBJK6f7ii4hxJYYh7ZPmjwQqKokKsivRDYGJyyFHjk",
  "key23": "5QGnDpyAmwVnjZbnaebXHM4Xr1GE2YB9W1V5CFt1V66pMGky2HX9Jn8ARX88Pn7yod6EUqr2VYEMX8eKG7EQZQFf",
  "key24": "5P3CbC8QXQ38ne4jaAsTTkoTsSM1XctgzUnXxn9rNEa977NzUv6C35aqy9NpX7pSe4hGSk5bZfppFw99NcGTf5WA",
  "key25": "53b52Lmv3a54eeV3en6PXF48rNePYLANevPKYBDSPrpFeNNJrn7aUFFQwAzKwYHY5b3JPknGjXzBnCdCQFLKRzw1",
  "key26": "3E5kBekdnBBxaABNrD8FAFPFUUVB7xuXDrtorqTH4jFf6zNGDdyMnSqkRjG5EBtWvea3LdUcG14FqddrCNc9hkGL",
  "key27": "5v6WAWL4h3VBL678Mg9v3pq14VbzXhkYU8GkfySWfFyYJN6zijgbXAsdhox76Pceoa2GvVNc7treBwnWFUv7mMee",
  "key28": "2Fzoy3pF8sgmdDdRaEM3jx6cafJKXWfwxLHBF6jmzK8J21p7hgiAZ2r4DppusychyAFig98BPSH4qKHbkLjs8S3B",
  "key29": "2vKCo4TtPqrARCJbdeA2jjFpL8B8xV4Yof9fkfSgMDGGtwmQZi9VZFLh32qc1ZX4Z2fSxLsfPTkm4F2tmWsFrpNi",
  "key30": "sPtuLWCkd5tZRUAYCKTKvFxpuWb3ruikDymoJgFLJtk28FgVUj8m6iutm3U4fKdRmDcYbHQbQtPKHeGXyWzGPN5",
  "key31": "613qAN8kZhRRG23WF1MZmERpT74hvy7gmwda3tQjNruWZ8ibEXGMBbrLp2AZ29tDy7gWK5hxzNHJ26b34E4MFbjC",
  "key32": "nZH25dipAGifgYPoZURfpW8zsMcWgCeiX2Ser4SfYo39etQasMUhWhS7crKPjfVoUgGtpR5WThBXUDE35enRJ6P",
  "key33": "2gcaETEkAS5nUwVn32KCVpBdXNejjHA2jUv64SYDxr6EeuoXM4csKkVzxzwrxL2n3XmHRrshK2pdDthsGpZjmBCF",
  "key34": "4MfqJLx4d8D3Gq1EcnMWCGX62bfRgnnLmhRu16DgH6Ykp94jPNxXknxVrjUssmehG7JjZQLaXfuxkKuAJEZa5dV3",
  "key35": "7s1oS1NLXmW9EHqUz1GoaPagAXwGHNmDsDLXF1ZbbNqUteGPVFMujbMfgApitkej1h2nH2chwv3Mvv8zoV7CiXm",
  "key36": "38xYuZLi8iHySS8YnwgFtyESg9c86MxmzACuvgkaYyKdZ9A9TEG1pnGjmkYxvDgJ8wwjkHLUPAVtiipaXKz5Qr4S"
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
