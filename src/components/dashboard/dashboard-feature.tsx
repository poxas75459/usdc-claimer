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
    "5kbfG3Sc3TxDGHH3yhLtgtfNoyQQuznHTawMsqgeJHUMix7ANpLDkkxLTGCPJU1aD4bt9X2SVo2cqw9zovhLiDgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aAxSJUwVaVxbNgLd45BJLoaW72pD3iruT8YLovYcAp7a3QQJMFynUubXi3TcutM6GdS178LPi6rfJEWapzbpSC5",
  "key1": "iCp9GHNxRP8ChfBrQVcYuF1zFhZTuUNDiACSCJpww9hrtT6kTCcmK7UTEphvYQkEzkWbYhSXoV9hBkYxGraNJvy",
  "key2": "VtpT8ZKar79iGUnLHi35Ut6Hui9fmL8EbW1Jz8tAaAjx9F2irK5rCAN8m9y4gEUb3hHfYWQxXFGcLTrWXFHXaWa",
  "key3": "3xSsbCgaFp4Y7gswEQLWJk5ndZQimE9CvjGkhxU1amd6HuuHUPFmKTxAmNvT4aHkZtsJHpJGXBbqEXEQtxt73vi1",
  "key4": "5hMfwo4vBVpcCPGmfv3NFz4YUtsQgBrEvDZ96o9NoqCUaLeKTtg9JhitNaFzR22rNP6UDyfxH6JKmQLJ45XtiXbs",
  "key5": "5DSQg7t8hLsRFHMPwbywtLNwSpJjh5PhzpAG44ppnqkGbZwtZwgxFcRWpKtfXyvzBko2q8Xw7JX6Z3j3xGrE6Ux5",
  "key6": "fojatLauitXH33yz5SFEhqWnei5AD9ugJZ7tYB1XBs5TBuBgCK7RNZhjbUMJgx3oNGjN8tsX5XXE41nnAGC5kHd",
  "key7": "3sPERuZCBPyS1vbSYRTJtR7Utpf1Gc7qfyqKZQ4fcys56TWcRYWvffKY7iVJn4N4wonckhq2gfyGEgjM1aaEJqQo",
  "key8": "3o1R4jTYSZ1G4rHst1ENJu1FZMUJ8JUvckATNWzyTL47bZJwsxXrKw8FzAPfoUz1GWzkDrDuDShGw8iEqJWRypq2",
  "key9": "4tXdUQAJrK3BPwMwcd3btK2wUnxNh4Ua7t5xZ1MAJ9thfZShTjcH5WawysqTi8A1SCPpFy3ewZEhywfyXtijsdVo",
  "key10": "4EJm1rDLJnDDy6kLuMra8tqDjU9NkQ1KoD2AjtovmKcHWUkWcgvNyKCpssxRHKF535X1umwYFjn1dmaZTz4p8NvY",
  "key11": "5McisXo5PqcM5TCzfGFwFT8i1qN1u8ymobkaMLnSyDcdJFki56uXxbtL2xTkFBxBE1ySWMZLpp6pvXmHyQqwnxps",
  "key12": "4u8XJyeENkZLC2TpkGRAYEcpAiVf7pKVkbn4Wkvvbh4RaAh7kVUevJoSjc9KUiw8rmz3S2rcRZnS6wmbxPkzRgY",
  "key13": "2XsEiRNc91G3jcRVNoaWmYgCzVYgdN1apJ5L1a2Nff4Lp8Sp8T8Lr5FGBwvdaLEoE7r6mkQ7ttJ1Uu7Sjwsos9pg",
  "key14": "4LLkWkBu1cBNqvTPgUNozRRTDhqmEhbCzvp4RqNEZkiCtTZX5MWxSgLo1y6kQWx62tjyWXr54jYU2DNq1pPfVdRg",
  "key15": "ihnATeWXmiYb3QdLfXzfgAB1aUzkRmncAsYeAqptmSA9J7N6wdMF5JFfYZ3ohgXQCqgBmZVLuRNKJ8q8iESijV7",
  "key16": "3g2oFk53TW165f4ZeZWT5N4TL7oryfe4yqcbpunCRjz2BkLhjd4ZomWjq2neC13dYP1h2XNYs86vtkLMVVBQLfeK",
  "key17": "55RD8rYAZP1fveEBVhN2MnYp44JqRHiFMQ5gM7F6PzrirEi98P7L7ViJLRvDSxHaGMa4wajY9SMjDRB4q9mUvEhr",
  "key18": "3yRVPGWTS58cmAvj5Xnovuk83MdfoLMih87BYoatqYs6H5cBozbVB2DspGM7gczfDwrHy3KBdPuXYtht3Rmjj9bA",
  "key19": "5293RPKJAfGgrdzamDM9uJoGj4GihxbFYQgHEPYffkU5GiE9SpqsXSGRMfDeFtQ9NDBwgP6ngWjHiVsWmeQQWEdE",
  "key20": "3BktwAjmDqYEEavXTPxn6jevbzKMnWiGG5vpzC7jqoBbWnotYDN49R6LeFQAYiXXGH8R9Fhnf3iKr38Yo6Xd82Y2",
  "key21": "39qXW32GtKZVHDMEccnbpqnKpXkk1b1GJ6dkYk4mtem4mvNX9Ff6jkrRkAcjixtfn6kfhxXC3kZaUQ36hbF1KFJG",
  "key22": "47nuiEToDDY9MTDtqEgaCUqgNkR3Yj9v3WNu8frwiwrX99i6ozX1TEhKm3jSzPVFj6XXxPo17ZFnF3AwoSxRR7en",
  "key23": "3cetVz2gYPvmYrCNGyRoar5DeVjpxfPA6uxvCZpB2UnNfQ5QqXRWZuFReVS3e986CGqNCQy5DSkQS4YtWtT8EKFh",
  "key24": "3uZwfJug7SGQfXQJykLoHy7CffRVW9nBXqv9ixHAQG3aPxsQnhE7zEm3cK1woUc2VgSw4rdGoN5gPLq9kfsCgG8p",
  "key25": "5kwzYHn8LRhKFeXbjvxEagumzsghKXEnxySscXCzqKPYRF2PhYVKfBCKLGMVTwWbnjrBNiaEweD8zB7NLL6E5Z95",
  "key26": "5HK78JbnNPLEXsnoB88baJvC4db2ceHuGYF1e7sxybQvCnz22ccjopjKyosjzhhg11Fq7Kx6JgVTfW4N3PBDQ1mu",
  "key27": "55xCsEE6Ly4V7yUnsMEWsdKY1APvVuZ2ZfGiGWGSvMsQtz6jTzTMY97JH8DNYCo2adk8gQAAUBHr5ojrrzFj6MPX",
  "key28": "4noRAKGMiKy3mhBfEj5zRmsdLKFKoaYGXRsEvLivcUW3FRcFmWc8qvQqJwtiBV9Ssa3cEV7A5zBXHyghzWYj1s4k",
  "key29": "3KBXqyiGPJa5hwxUgDbRb6B5gMpzEnsReHqaZLx3T4EyfAdxXzCqxUoQVPoRB2yohM4q7m8Hoj4ngkeV6qyPeEYG",
  "key30": "wrmwvCrxdLiKYrPYoQgCwWNt1PCH5wuHTZ6hm2u51yQVKZjsFLSz1LwSt5gAGD6s1ZGYEvsXjPCRRJ9hbJf1wLN",
  "key31": "2EM3gjoE2VdknTa74oNj7GdjNXJYRwpYjcuM56VC78gFhXCwUQ9PAibbvnnYw4zzStxCGLaD5BYWBuS6vKsy9zny",
  "key32": "5c4PKF3abSaiV3V225uqRoGrtBeihyjBPSmTZC3eon9TGm1YZPkos1GoZ5wDTKQgzPeASJcx4KQCJnd3RQkkewSx",
  "key33": "26zfdqNiyTgpNKavzKhWrx9CJqwmXrs8kdxPkGyJRFWG49KFivE5yFSCPKmwJ9a85qPctwZcPniG5L8d9x5EvKaj",
  "key34": "5B2Gau8sxdGvqfcHAEo9BSTQsThCqbo3RJTMtNWipwoumc2Bf75wg4T3BFvjqsppQGiMgDGp1uyRV2KP1Ymp5W4C",
  "key35": "4tya8FU2jQHEUoznFySp7g8V26trjeJ6Wv8s8yiTZtQxmxQ8LagZjo4QNkPoNvsxVuHNyKGdZXgtW52o7XTzhBMG",
  "key36": "HRt7J72MvNFencafr6QmTu8Pw37CGgQskqCoNr23vBFKZhWzVUomaj3ofKbkT4V95bLFtBUBXTb71WqtZNA1REB",
  "key37": "gSFYmp7gCGZm65t4TZPCiTToJstkrtjk872EWkt45aX9brJ2rwRXfHFHsa9HY6hw1xnURLwEJotYbC3Aek7csvU"
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
