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
    "3U2tTFb4GqEMMYNuwYwWjJcLEGSfrpTGSw2Wy9Ds4djg8tjFFYDg4MmFBNrSkYWcvfNhz9r1XpR1KKow87RbtqK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEMZkUwwAmofXtqoZp46FQSUT8rkGKooHN8wrg5LkoDfwrzXLmTNk38Gw3gydwaeprVDE94Gd2K4WsRhZoiyucc",
  "key1": "5PSH5ZHimGioBrxRbmhYJb93pK5kCytwPqvi6TtyKv7s766tbkGSMh5eBvf6gWzTTT4vFLa4VQmHt2ui1ou91kyj",
  "key2": "5qAjeh123on5qxupGh4geCz5pdfsQ7185wF8wmWtehCbfDrWQnL8YHMNZ7JZ614Btdup7NvX7hGpnNiwkL3JtStV",
  "key3": "2tqG6AR3YRxKpWSAimrz3JxvA34p1atxnUEAdvqP5acjRJte6TwzXdrWChfbFLhMfTzCdPVTN87VNgnL1eZDsmrk",
  "key4": "25Srph8XsUCG49zn3wcT4RxR5zXBcQNz5yX7CHz8tN6uuvpdZ3i1qQvLzTu1iw1gpeFbiAUzVud2J4HcMoCywbbT",
  "key5": "uKPmwvxnt88CqrT4wRqkRHicCPdmALXd2PgiMbLrgQTFrnPyChgqTh9xsFQdjX5VoHC4pvyA59qzprDAUHNR6tL",
  "key6": "3Dz1V4DWLvCDBpwxL4k6EqT8fB2DZd9NexbbZgARHHYfDiR7YFpGbJoSMLcNnjg6gpots25MiUFLNEmLkEahcg3J",
  "key7": "rUeKSxjjkEhMX18HqX4wgMj7LHcGzZgvfKZuSFDyaGbfbpesCthz6iCXSSVJCw4WmY31VLPW8C25ZU5j56DZcD1",
  "key8": "3wWNNZfR4JgPjMB8fe7K2arYWGnxqzH97UoWNSkWj461i35BzZZTyNf23yr3EJuUzEtb6epMJBNzymzbdRfuU4FW",
  "key9": "55YAV6bXV43jUvVtbWPTZj4yVqjhysvoLYMoutMS14muMKyyM66BYeD7xrCeWBPqWkN4X7Ek1vUFGpW4JZ4mwMQt",
  "key10": "219Hz7JFnCXdftsQPmih2ZptmKY1XGiw8HjCkd6TiaDppjCPqYczhAkhYM3iY8fK7KfMhJ9pwbyVfB4rdy8a6GyG",
  "key11": "3bhLCWGCrhqC5W2zHpDFBLvvgGGDZ9ZpH2p289FZasYQ16pMjY4afqWMu8dM6hzdSTXKmudNdud6W8rZa5GQQ7s5",
  "key12": "3jYxee3baChLXv5K96pHoivjVNSMkKZBxeXhNEQd9yiccwuAFdBugTN53kJ5J6bMF5Y44CgjtdG5hkzLyc4CZiTv",
  "key13": "3idEkpTNcjUWFAhzvM9cxrvdu9S1k14EFCm91fwPKHZPVhHRRw7vKmjL69cAqs4wgX6ytCrh2qhAkcRCehaHxtND",
  "key14": "4q577y4TPaP15yYTPpNSKpUtH9eFAweRFtrYmD8mdF75FkrpacZ9yBLVhQqNzv8UUYUajhi9GUgTdBgKySqQBk3b",
  "key15": "2M9oW5cdpgiUNX96JkjVpPBsYz6ZsRW2Vx2i7kUfuNxm299BQkYva3qs1JoTNprVeSepN29ZPHZVaQAzXKpjh1ce",
  "key16": "3ZdhuKMCiAJi85PSyvRfaPFPffcz399odo2B8fmm8jFovtxm6TVjTj1WJQuQ9xhf8Z8EPicxPZmd7xTgAdhvnSZR",
  "key17": "3tEkUwxNUnV77g3wsbcQ1ycnVVKmgsqGhDLPRjGgNggRKydz1XvCDnzNYezyj5XsiCUUgg6bK9Lh9e1w87fiRxRJ",
  "key18": "5Ue6qzS2etEshMwPtN8TuFwZwmmCPTnJk3tvWcFaLijFcZF3HVvZWYRJoyzaGWDx1JACcBdzzwHrjecZGhHz4bxw",
  "key19": "3eF7Kvz865EjtM9mZrLRwtLCRRDzftmAGoS8FnVNVexePaBQoV8kLg1JUFADtivavZeiMZXa7P9qZzMHcbuU4tHz",
  "key20": "4uPW6QnvvVaJCdYGvoxCfygrdn1hHz4svb64oiZheZwgfUyuR8V7DTwDvzgN7SQnKjtPJJW1zzrFtJgc5SVM4TVu",
  "key21": "4qqyEci3EpGv4VsxxqNDK6S31oLM6vdqqixoHHQqRxZSFKtnFmjz1uxwjx9fNrTUttYDgV8u7YAtHFWXDqCapYD7",
  "key22": "4tqNyVJhtfbS8QC3ZKt37EzMxYqGmCnqzoQYH54oNgXMhggPAhNZStNyvjMsKXhV2QFTjmDCU1zMSjX5SY4nBzfr",
  "key23": "3BwNvaXnURh3vHeD6kKVuaf612NRPMjgEKLBBpV6AmPb6nETrvBRa1K98zqc1FP1ut9ZjH6cFgXyxfDnFVF5DVA5",
  "key24": "5Qenv7hwQSKPRe9r16PHjc7rhmmhTc3YKcWZqYwVzDNyAsuZQmwJeQxe2xLFzS5Jmw98Vz2jGsiZ7aDZY3oPKK6V",
  "key25": "3EMphq9biBkNWVVbRK32FJzYeabWo8FJyNMfkUqMmZZXPNkds8SCqEngLrH4h5vvegzQmm9FbBXa35GpwpssTVRt",
  "key26": "2fpz6a76mbcyVqCpAfWTxpVCVquL3gsnbfk7N3UwogDGZtWzJ65grRxuxNqvq3p7yHDcuUvmS3mUhYMVW8tQQUqK",
  "key27": "4BWyJMuVwwD3STGi3JiiFrg23nDayHz8zgQbyFJcjMy5Cb2DVDzGwwdUxqMPsVsLYrb2LRFYT794xc7NHqq3WLRH",
  "key28": "PMQdw2BiroLUcTjUhHVtksVRS8kCiDqzZff1mNQUzAFtQRoRbiG8swXGPtJcEnhpnfG2qtcSbkjxf1ZRZbmwF5i",
  "key29": "5xCBHoQSYJf52Er6v6aj2EHw5EZJimXc8iT2B2nMXsNHmXaTMNchxZ2eCdAfFZTd1Rp96oT16dUcQZ5zHWnbW9KW",
  "key30": "vJpwnjSANixjDtLQtzBQcnGMCG23g8DXvR77z9UvWeo7xvW4U5mNDCgfwbN734NbzvN7zP6Z7YPp5zF7c2er7y8",
  "key31": "4Cgprhf2tgxpHpMz2t3M9j86obNCRAL2k9A72bxqQdjawEaxuyJ5kDrVm3BfS4eyjy5Q7tp24kC33fnYgk5bJDy2",
  "key32": "47b78ZjQdytuxzumKR2Da3uxXVDsEoezbTPtGv5FTk4z4JYVXDnDigjDUvpp6SLBPszE4w7Hj782LuwEctJPZ7qX",
  "key33": "2V943Cfk6T6eoYiigJcdAu4L5kSFs34v8VwZxQeBES6ax8QccsH7XgUXrV41zPLe1M6ny6VZKesuLJVFLLTs3PjS",
  "key34": "4eVYzBe3twxWmYgvkEdmAZGyymn8Q6CeCzx7M2Zop3H5kQvUGjQwNefQWPdGQS9Mkhi3Y9G8AptwmKgAtNzhfj16",
  "key35": "4mKCBqNnuLKDCoLdhaDr3R4EBAm3azJrmdjizErdojaBwmXQzFzdeKgg9eYRBzh72rbR4iEMa2RkNe7sz5hH1pNE",
  "key36": "4vNvnh3nXMY5djiMzNWQyVSELGTfsuFxa12qqfSnbYKj13KLEXMCqwq18GkXhPa3VKd5hUCqRPyEYmvpUT9wpQEh",
  "key37": "5cMP3dLmfmRgPqYJF5jaBTZi6EDgXEcKoVjaCBLFwUTcisU6PNvhZJquDVRvikhXboJeCmKseENUiayXipSiWKpY",
  "key38": "2p2bDvVFxFoMrdAV4RyuMe1oLVtTZkBAUxMo8gaWJmNLA2TZKDdMiC1LRNkTmx32LAkKtHYFuHZ2PGgg47KbYujk",
  "key39": "3D9WyMNpSn1KqdJTxMwxcWAdwzb8Dix8UH4wp6pjHsmxqTFyt9AjTrjTi4SQzwj4gXkekeaJXSKpHpKGmdacaM8d",
  "key40": "5xiq6KC4VRxLNqHZy3h1m3YSNgwWdqM1ntYPMLxLWTpFVU6ogSc4aJsc8ZqkoHRty6MtZfhnG1ruS7T9jCHBaVSZ"
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
