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
    "3QXGF7316Y9h7XUL6NiQGFWsmsUy8toY1B851bPnkxEfm9CXQw98TRHVuFmK7MKvRuofMrbiPqR6RzXgAM4mAAoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37CsBZyadzFRQhjqV6xyv57ZNJa62Qf87vQvq5vcK3BmfD4pdBs8rmiKpf1abA1Zk8Gn7vrJ8RfQAxUjcUqJtVHT",
  "key1": "jLVaETKSpeXzdjunCynwYXqTgNnV8snghHA1X8eBu83pLZLp7DeYBs8UBgjUErGXrbKnDiegcngrLHe4smFCK27",
  "key2": "2U1bAqP6qJBcJj7R2kEJDaHGSBBy5UEp6fdeSPr1kNm3b1H7nx8TGGPeHxQo8ipqCtaGD98jsnbE22xgdhfZQCHF",
  "key3": "41XKWfCz6od5YnCukWYnNb9fBvFdQD5jLLGz1wUN3UDQ8MK6j2ARg2c8ipFzY1KRsqanBJq1pypT9WujKKnpWdgG",
  "key4": "9rMieURjstsuXunDoB6D2UTpPUPRGffq8pHKFuhku7RxtkH58zqgv3wUzsXcpXfrkXTYonAmhVmCpC67rj4B9TF",
  "key5": "32AJwEBmvoFcWvYtb41Mdy3N14ZhKV3zquyJR8eztJicTzjwAH2gCuPbVhMrmEwwtoGA1DCgAwkvUa2PW9QiJgvW",
  "key6": "4N3VgUMWCGVzqVemX9WcM1X9aaMSYJUBHNyctK9GiGka6ATEV6GpvHvz9ut94aorNX1QskYuW8uLJLYMS3Qbq9Y7",
  "key7": "2RjctPUcdxXw9oVzGX2pqkQgXg34H9L48pkwMKD6rAV2BqFsXbEHEfCiV1X5KN2sLmm2tLjTFseHZ758HusQiWLS",
  "key8": "39N2vjpahjxEMUfjjXJmvBV1fnkuE2prJoTfRmVZE1VfgBgMAnZ1o7vEbJxH7rxkLT2eTaGTEfnB8BCx3s3h49JH",
  "key9": "4w4TBXGyL8X8WtVkjits2fS6zehSYRDnAQWK8sT9TsNnzgF6uWWF69GAGaZGkPvGrcGHUpf75xqftbG8QtpAi5se",
  "key10": "2kxVXAf3sGurvAj3MGeZjxESNaCx2mPwVXHB6g7tnuGAZ9m3AvBaUkr4GZNWqDF18wZFjxWS6BLoEhaaSsAsC29X",
  "key11": "2eZZPGdyt4S1YVCaTfr52KsyNaH6XeYbXTUHe9st98grXLpx5MEFJiGjkQhEjPaubMGCC8SLshVaxd3EGDQsymeN",
  "key12": "45bbo3HvWHmAE5wEbkb2XPZxTfXm4YafR8scYcL1DUiZ5hmgbtWEzJHDbeWeFuwTWXVpjLjkvS9s2YuGJVbTPWBw",
  "key13": "5iLBGdzmaVjXoh4ukx5PuCdhTv6kcY1iee8yHiT6vZft86xBh6wCTc42MeXePid2u6PwTWJRJjg55V6FwyjE5wHn",
  "key14": "2nhWWtMgX2EMQmgNFZXu51BQrXYP3pdzvGxxqzfwXoxt4TM496Jd3rLvmGRK44Za5LXE66Vbksm1VoUFyWw44pgq",
  "key15": "49haxuiGExPXUcbabJxBCpNwx8t87XiBG5vMK8pMg31uDj5cK7BmuYcMwPX6WmV9ia6kyEquu42yXvsmQcsFwKL1",
  "key16": "5AJ954ewmcYaBhpmnpDLrvwTPtBW9YjWJJJQ3r7Q6LCpoixpKGuttLLbHqMSd62YLGWmhUdtoMntAairLXoorTfS",
  "key17": "2rjFUWW4qKM9UHeiBGPoxtjLQWbVH6Rz1hXq4KHRBougTWMmcPa6WcbBstFuZczgJ7aW7UATb3FVbnVApxUQABwr",
  "key18": "4sDN9iKoZcyEtniPQDRZ6H4bXfrfCX6AGBkGH9zQfjRXm4boccaFArbsHnEFxCFpzuvE4BHdbtUiqgUTrPHhJBSu",
  "key19": "3Xhr9pRRofPjNrmZJDSf53SZcgy8jPSMKexDJy9w6SuYwYeuEhgdLJxyMXcENZ4V4CYq49N8DLXMGBVMjarthAm7",
  "key20": "4rcraBVazuRj5Da3MQkKARhsqK9gycoRgb3K6ZM4fubaHkrBqP4ex43K4iVJ1iL2xqTcx5wGR1bGo4diFh1PChQS",
  "key21": "4cpot99WjvrdaH45jeLgQ7phzmj9owRYH727EdakjRD29MuVXSPMMy3Y7eArdSetXUPf8ZKg5MgJ6f512gobw2Vz",
  "key22": "4buXxHHA2sV166fTtvBLhCD4tg88NgC4KGT1SoBEjQjD2k5qghCtvZZm61v5m9Uc9y3SrPrXRY9C3JN5N3JfKxDG",
  "key23": "3YHHfuRBzewa3zTqompUCjoG7UHCbHUGgV8hFfTgrqw9rn9AZg2n4PSeHFTNiDT3LwR6H2TBDBcFCJs2LWHgUmps",
  "key24": "4Sq5snUzeGF8kEh2httM4dnFv1wKE1pGALh1gF7GRE6JKFwRgkUhMVnPnNSWM9YskzZCktirdJ5MDPfD3kzQ5EDt",
  "key25": "4KdVMU1Y5rX4f3dFPkeswxs5CfFkF4yyHLFqrRxxkqr1tsbZmgiNYmRquX98ZHdsr7vwfY4wDibjaLzZ8VaCK9jd",
  "key26": "25m3mGZ8f9yQGS1mdMqLjfinBYuDY9rUXa2xF8uaFp83hs6K57cxCNnaeEmNrveA5WGmEvYxzmBdzC37pdZTVjUX",
  "key27": "5mtNW18fELbJq5JTYa1emNA7hMP72RgsyxwBiQG2ta4JzKj1xuapqAqGyhfFouVk9cBzb1FsP7ELsgQDsyKq2UEM",
  "key28": "54VGs53zcC4jLSF3GNuQ7dfZY6tNU7oRjvzPWLvELiKfDHBrHvkmweNpUg8NbjB2i4HctWwtg7nPUyES8ZDP1qJw",
  "key29": "3X5QDiEXtkjKyU1Xf1pV8AJskRPPPKkXgWAUJrMPad1G2WDrjKARiGQh3qe9Bu8wJNF8S8H2faScuyBFrbRwTCV2",
  "key30": "t1JFGFwMGA2ZZNPjxbXCEWqiGZseNoEoxLRPHbBYJSogbuojRJR5pEiK9WgpijNNsAAJFBF3e1VVpKH2sHAQu83",
  "key31": "2e5BZazaw5rxH9ubGBF9eezGQmFqaakTrGruWcN4k4CRJapBbdoRgPL7gfAiXXf5gypA8iM2QHFkBsni2LouSKP9",
  "key32": "47dzyasA3r5wJM1w6CcpNG2qFZYYi5dZ5TZSdL16jvKg3F5zHhiGhSC2DH5fAEmnTH3N9vHCYcvxHL8W2VWjtBuA"
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
