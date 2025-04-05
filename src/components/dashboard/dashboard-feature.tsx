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
    "32WfKaSazB2Thh8yYJYMLNZF5s8jQeBZwofBERjqVdiFAYgcHnLysjnNSV1P5YBpbSFSV1Lnnzdptr4ZWGGW8NA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKMQgXJhhHVZHxTbt4b28Wf6jDyTRVAucKcjbXsoDcv2DjLiSuxK8CuhkvnfEShNkyofLHuB9KNRNRwNZugNGqD",
  "key1": "4nSLmkGwqJe1X5Go5KjNijLkFU4QmfQWdr98h2PxukVCLhFvujrL7ScaMhhoKRbbzBrdM4aCAad8vbUUw5CwrfiC",
  "key2": "4LzTwVPJPyTKMV7Fe4fmt88Fq3aF3yqF1xvcCHNxVDZEmobGZxwVVNKxVm98jKLA678MRreYpk6zW7L1qtRF16D6",
  "key3": "3VydAwr2Y1cGG3QaQLKX9aZ3N9YoGvfxu9BLe4BLPnrgViweeHC4hJ2rYdyxzYQHs1LTTp5bGsW8UVeVNNfVT3Xv",
  "key4": "34Ptj8H35xDx6QyNxTVYvwxn3Tgm49E5xRWK85B6DbKQLSVJ28nDnoJSEiPYEJpABtYSBmrx1K1Ykz1kjKQK9K5r",
  "key5": "5mSkdjziCh1KaaN9nejHbFiHh9CwHeEtNedXPJUKbkwWcUMPCJwpVAfCe7zcWp6BNVKfuMvTcVpyhPU8HpJPeGxa",
  "key6": "3nHskbtrwrpzTS4pSE7wz9jHohuLRm7ScgiG9CHp5o1KyacekMQSmzG9xgXnPmsiGYFKZcEc8vxCt3oWCmxpe7Zo",
  "key7": "3adGbwfsXCn2QucUovUa9viMNHBc1Uj2negA38Fvu3TrTwYZnCgjtY5cMLfUT1cyphatpgoqyZAdxUEnyojDJYsP",
  "key8": "36oWJBcsAP66rFthLG8MK1wykQxz6QWHrNmCtr6kJ1FzT4KJ3DtTYbmdxAL4tHLujCVciW6T7RVciwAsNCFbWZfn",
  "key9": "2TeJqyPcdhJpthV2GNxN26hUnexYxxUwaFHEgzebU4DPenjesW24PLXBMXTsAtvPonBzs8bM8wsijmWyPCrYqciL",
  "key10": "62P8KUpmyv7LMHBhMArgqkQd2wGte8YrPC8EbESFjKfqU9Mdf7RNM58pS43gGdtLNc6bHnGtA6H7sK9Myb5cXi21",
  "key11": "3qm334KnN7omLwQQcCLt19YahFLP6Y1mpTWSvPdhWGENR8K9SjKNNVuT4Kbs4ec9PFy4WSyo4kwuMhVzei2Zyvw2",
  "key12": "4E9GXLH8oprvvA7PduT3DrWk2qy3eGxW9A7ggLYCaxsKvy5fvXVuKANGVECmxESRBDN7URUdqQMeHFEeUKZqMNZa",
  "key13": "2AhGUchBGehMVFDGax9TJB269d9HVAUY2KLCQwhhPZ6jiYYZ9dm5HMsBsCyoQrQi1xpzS1hSFbdxjco2PFWNaRxa",
  "key14": "2e87k4haTWBmETzvWH1eDJbYSygfGHPugvSEntVTzm47UAX2mwdNDrHSS9FsdZRSGu41JLYJJcy7FYfcbFySXyMP",
  "key15": "4J2dRb7tVbNAhYXWbGPyuErB8hKiysAZMnNEJLawCeymza6R9BNVqDSGTGDE56MVyqkZFAtehQ2nK4YCdWSdtFUQ",
  "key16": "QCj9wArS76LD5RiBviVWKjwtsGBt4b3pWfuHz1C1LtkqMBom4VLfRbC1r7SHbeGgnTWCNem12jSLHtED4krN46q",
  "key17": "4wRHk2f5zbjy1pnH4o8tKPQpCqWNptYDwGkGkQ8G8S7gXTdJJfPpoCoSsxcBdSXJf4nR5PFeeLDmfYoUG2gTMRhp",
  "key18": "uLrW2U1XFKhhQDNnn3ohV5RT5wH77CWkjrtp2HZhNVMeTKRQK2x5GV4gcB9WcCedwztrSgcT6Scb7T7nPp2zvM8",
  "key19": "3tzP5J8geFvPFq3gxEV4fZNW2ijgCu9PZQDjK8Hza9fJqgcpu3KZiYUvPcBey1WkajcKJEbSAeKKuBVfJe1iPD9b",
  "key20": "5KzptR4SWa88KF7WDc7a23z4G6r7HE3SC8y1AaPoSvzrGQ3BMJLvDSCUMHLd3kY7pCJyPsqTqPZMScq4GP6dMJui",
  "key21": "4cKDRtECxeJNF5PBaFUMTyBER1whvaPVmHqCXivEaepfGXD51K6VmSfB4gwpL2owg8JBE6NwiWXbsYiVopAEARCy",
  "key22": "55oo2ap9Gfo4doidSmXRyJG9DpuNe29miu3YREBvQHyLZnpU5S4hcoNWNYqFDT9iCXX2rHSG794PNK1B3R8pceBe",
  "key23": "3cKCoSAddgNxvdTnK8mx9xTVKUFHr1NxBE1iwB9XWdd76TrQxXu5oKd4UhLenYVHiKQqkxJdTMwLjG3VwLsRMstw",
  "key24": "5c58pgjBZR7pkRfcqY4uoRwwTokrp5QcZaYB25U6ydntGZLbb3vWRx2jdpgfjj5wnEbDXi3LZ6XrNcw5Qz6bt8nS",
  "key25": "sFmKoZ28uy7cGMtammaqe9JSvJnvirdNtre2toEnYTbuo3ifwyKXYkCayVNKvCkxqVPmiQNWvpGpkKFQqH8WgkJ",
  "key26": "4LLArR823eHtWbxApi4Ur75wf28Qh4FSGCbhKRVTHE3zKHKRLaCpHBhbVi6HvviRCUNTSHFJR8D3xiwnENgecCSz",
  "key27": "5SV49cyos2UUbd9h7e2yhjdQffoRt2ytdmcqgyjiNwa9yVqXsjA6kY3yCADG4ang14KcXgYsLduAdf4SzXD86Cnu",
  "key28": "2vx6ka91jgX7bwwTkHy7h45t53joHQYy2ZjL1JbnW62CHzJVEVSbiV1GV31aHxLJSNpmLoS5t7hHfabjbsvVV8ao",
  "key29": "5E8coHpWTPEzZJDmnUrZSGebCqwbU8YHShRCzcws6kJbkAtLxKaimBXFzg1cfREkRwEwGD5AgXRTCbCy6GWGZy17",
  "key30": "64NZbZKHCfvHQ94rD32ipS3FYErQi62WNYPdeM35wbi26U3Rcn9r78ye9ziiBmHuHorabCmmDtrCe7f5VBHCJ28K",
  "key31": "5mjUNx6TQuXmLVr2gaYnAfaMt2EfPQ9UtDCGnVRnZkRseBukofWNGU8zt7RP6MpyrRtzQTzQEE7bRpYHRcPYmkHh"
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
