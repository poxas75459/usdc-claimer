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
    "3oDVEXnXCCjv6Ds4s516sYrBtRna7C3twceM9ShTjuiobC2sKEU7JruF2WLqUtgiJiXCHRonT81cbpkZukj6rvWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciZ53bYXoEYfxcKH6kgmsWHvFVoktJGSQSXg8GJY7FuFHW99Robj6PLHFJNXYnRAEGSfUcCJRM8JeM8Ldd4Gswr",
  "key1": "2d2veqY2TEvhVeRhrpQPGwddi8nJeZrdizLfBw2Q5UUqU3TYwDc61KaYqHTrdUGSumsgmwBmZv79VUgAxKazY4Qt",
  "key2": "2rv5g8GdDYmnjw3TUrKMdyaZNY1zNJvcon5J2n3WHyGXafFVfhiVZ1Qb96A9praujYRMqNe84L316oACWe8BPj6U",
  "key3": "zXT3bgUZNCqKhTRvZijWi1iYdopqSEmZphDnYFQDaxnSQs79RvBxS4Eoyk3hRSDApNLCciAprGxt4rpc9nH8RT8",
  "key4": "3oLBKyTBcEavz1e2qrgxR8L7RWg3nBVjSReXpGb3ZJP4kkW1kUukX6Qu9QyRCttgr4N4SZdAEpj9ED9hKVoP5whr",
  "key5": "2thTmJWMCu4aP5LP4VmswK1FygYJGRXB9SCg6rAXq7w8NGqinGyGTjL7f7Vk2J34U3PTnbpC8674Dh8j68MyRcS1",
  "key6": "usyeM1QN6nXjdhNiLvewgGaV5pWETDXcmRy7qj4XAMAKoc9yzpWWibcDARgZzW8LUBWZmLMb9U6Bsg5yTsaU29J",
  "key7": "yTsRKmTZnRiDDKVp9QHzW5WrDpY6t3p8TBy3cpLeUKBsG1ZQ4gCPry2LWFocji1Jub62yj9gYdnVRF8ZY1eTNUJ",
  "key8": "8gDcrMtgB3sTN6LQuK4ZhX8ZU1mhFMYsgeqQ3SwYaj9RgZxW5xsj6F7rCcjD7VFfqb3kxHDsePamjS7aCHTefJE",
  "key9": "63ogfcUogNUhuY5xHWGXp3HhzuK4Qq1qKfDaWYgrsrPueCQsxZ1UdV7r8BTfnDEb52F9XuUxDHd7iDVddNHZkEow",
  "key10": "4KKz8hXZkqn6ykFFwEdHQXLipVDTsqySZ6aUzqfbgKKxnScyXy23f2Bmfi2ngX1PKn3m7TWJwETaQ34bjMFuAFRa",
  "key11": "4WCwzMXJVscijacVrgHyLd5oZBjS5oG8muWSxm8yv37WngNW918xP3B8DfzWNshBEgMg1XWpxwDJVnawT5FYPPFd",
  "key12": "2jXpLMfio2UU2b2dW7uG62KsBwp7nhTMXHH17sPPMxkd6BSqd29JodRbc9FDk1yqzb68J7jPjBoj62VMNHNzTRi7",
  "key13": "52iNVFArbksBTVwZnvZsVQdCZwfgVanVj12HVwqT5DXHBAwqgjrvQirsCPFRCzT248RoV1ipcDvgJG7Bu786Wo33",
  "key14": "4R799XRkpdRb7b6f8c3Wmy9dRYk7msBQ3ynYKZDEYudAT6SJxmwphwxYRzMeLUYd6QKjaV7fzv2NNEbEkaHemyPr",
  "key15": "3CxYsFNCiE1AerYUnCQ9cZquKFiTuDAHfByncPDBxkpCy8SXHMhD4QqdT7hWtkph8odFvxpgCSgj8RcxcQ5ndQY9",
  "key16": "5om42VJTABtUFepgyK8sztkngSY2GUNU3Zgix8i43XLecyqEzkZjDGduomKp5RtNTo8wJCAadR6nu3gVv7SbofxB",
  "key17": "3A4n6fX4uNb6mSkWXa1W9wXDTDjBj2oA9cf5SDNquC5pzsGPPcKJTfFfLmovS12zRHjLjmGTn2oJMYGnNLrkxbHF",
  "key18": "4WByMzgvZ4ezpT9gBFWFppNCkrndrfkEgZ28QPCJZ65rVXUPiReiGntsBxafnwTDAsVxDBTyzzBGXwyZMb6hzL9U",
  "key19": "5pZAaZx1aHK5jswxFtkS5UUXJqzS8coLwBUUiPzX4rGFVqphqPtrr7w4UUcw2R82aema1MoiGxkELqE3WPkxfpqw",
  "key20": "2fj7jAMe65EG4nfERFcpKXKgJnLcEdcJ7FdrScp9sPAwSNRz2a12zkQMz6cxe5RQBSwA5d35Sv5SbiZ6gaDz6SaF",
  "key21": "4yd2KPmBwt6fEUHsGes3AbPCtVzPyReybAHSLdQMZakX8ygTReX885XTBL29MBC4eYaxGCdy9ePCbDEdbfoReDVr",
  "key22": "4DwiWN587KHvQRy5ymz6ADWwWtzNguSAZzKV17NCp5EbReWSYJpLqehovK5qYjGHu8G6Xxcd7sAi7TfzeVq2hnuv",
  "key23": "MB4WQdtgKAdJrBUtviwy7VazJbbjGaGVrJMnxPkPJTXg35Yhgjxx9PJ5aUCTKm1Ysqdfuz19PXUefBjZ2z2aPbX",
  "key24": "4ssFaQLUBbVbLLYFK9gomwQZtqMJgnGFdEuB1zdy5Afxf9XbCwbYnwiNGLT7141oJjEj8ZCQduxHEPuJtuc4xb3P",
  "key25": "3EaSkYNAKAyXbz1SnBQfTxWvd2nncsz1FD1Y6EH8cLidigSWxfXckUizop7Se3EwUrKaJg7aRhof6pUwSfrfThEo",
  "key26": "huVSLpGLznFRBmCHBgrN4Zitn8X61nXei8xkMb8u5xAq3BLSSaoU1A5xs2VD57vAvq4Hk2aPNM8uscJkicW8tCW",
  "key27": "2q3PmFk13X6Xd99QzFEXBnrjtp7ESqhqExdRpabDX7zbVmt8MTp3D1dkLfZJ4mWZh9q1TtxrkdJdUhggVhEb1vZS",
  "key28": "3CLe4S6Ra5uGGmQjhsDFAHXAt6oZTSzggBPCKT4Gb3R4LpAzVaSVkxXQjVDqsGPWuqawzj99K7nUm4cHhK9BXutG",
  "key29": "PKQ26N4CwEhCeqaVVYBGTtEwVbY5VPgpNQv347C4Ha2gD1uQ55tQ3fabix6VuMY7VEGiavzCp162W6LySY2fVsF",
  "key30": "3Sky5qfx2esjtTJjU3vVM5gEoMX4sHQaU95vF86JkxWZkTX1wjceXdVi7u32UhxQwtaHEJdsvLCj7ViHr8Zbgw4S",
  "key31": "j7roLtQUe8Mu2aEmCHSpYkAcbv5GnXhnGWcMG367iFBT1PziTFLsKXan7ZE5Z9ADSfZooQ9EXiwGQ1Trj27ni9V",
  "key32": "4uEDMouDQTyawkqu5QzENreesYzp2t5C9i95aC6R3pLEfKFw93y91NWfytz2bNET7W9wLVaW1zv6MiekprCTgd9J",
  "key33": "42EmyNsAcD6NNg7Vfz52tfNkkYAaDdpvzbcWfKVt3e4onsJpzdEM117FdwPdwDivBrMLMHNtJ2q88X8ZW1krS7vF",
  "key34": "3cUu6vZXHreUogHXTKmQUNjyh6UQ19W8JXK8UZjpqJNMFfixwG1mvr2aaq4bMARvoafXU4eBvM5MDWvRJsHJhLZH",
  "key35": "5f6iZcAfbbRbAug6jyuKYK5ESrKnERF8y7q6QRXCX8LxvTPnEUEu8KcAK5B8oM7QLXLUQuvJqJopjp4sixKCHH1r",
  "key36": "2Dw6zgsGFGP373TaaUisk3xSoeAkJpJvjaWVR2AcKvS745DUpP59qNsUhqUxCCx76KJSK2Z8he4ZbEfW7o33smEY",
  "key37": "3SebqB8yVJLfpTMDh16QhPJVgA7zBWBo59MACc1NK8XPcXyzAXCVW6vuWeiuVTTpgbUhQFMQqdAts9jrUDNZRJ95",
  "key38": "3Ngw7dsJ9ixsLzXXrewMy2KMDW2B94k7cZJNq85DySAg53737HTFgjmoAhxK4bzW94C4yZRhzDVNNwGzYCBV5ckH",
  "key39": "4csipdJf82GSGB58sDmzLU8zhMStbhhrvsWURwXPZ88WHHXGQVYGRXNacfjdoMvAHvEsjuGx8EY1jVHSRD1inzWd",
  "key40": "X4ook98QXtkjLYH3Aq6SyWYDg1MzZysY778nTP75UkP6orDRTep3JKBB65P3csDB2sx8nCqTp3dZHL8XUXB5g5U",
  "key41": "ZkXrrg1nshX7kYawHApVTPeEYfdcqTGYAG2NrpxLZUyujHzGkUrzzvKogEMaLRWr45ZJq7RwS4HtAxq8WR7z4b1",
  "key42": "2D7vDLkS1NPiPU5WGaDcZVTH9DCEwQU89TXdzH7rpBi4DStn3AZwJv1NBAVhwVDfPyZxJesYLCR2xTXwiE35GDZP",
  "key43": "3k6o58PzWHUDcZVjmrAPfWHEjfx4vCBb4tmwHduFTHtfXgfvHpZVgXoX19apah23X5mrXMzFYyhbDEJBPB3b8Ggb",
  "key44": "4j7Ze79vguEu3KTaUuPE2CHrPP98CoDmuFSLQF1WAv7DdYuhiWoP12KRiAVo8DPF5BHenDqa14G5WYfgPyr9dmNg",
  "key45": "3wJEvykXeoJARw6rLM5LdQbHnZ5TUafQRr7ywxNsodRNwoHA1e3D51tUVbbBTeVwH8RWJsdtUpNTP24dW1S7x16p",
  "key46": "4eRYo8ykc7KwuReLLvfwoHKNidehnPuNEW8gvxy27pcoBJXXgTSzB8RVhd9Lva9du3eybXhkdcrhcFqwpbdRgGqc",
  "key47": "45ZKKuCUKFESY5R8cENQz3Jd3nSx9mEHSWQkz5D8Qo7Nx73Qy63PdM8xPoZmFJBhreckqB6pkrUKa2iaLUETDu6o"
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
