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
    "5H3A1YzL7FaZyxssPXPrmBsFjFtez4Bc9fUUfxAYDXkmeyvvnNMd6SyoBARkH5E5DEmfhA8hi8nGjUag3YwTBnBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xruwCJfjuCVWB2MeWWtHkbFhKJGaxTEtEFvdPexsK2VTaJ7gSTMy2cu1kEGp1xodXNDiXxdp1KUTbssUi8Gat9S",
  "key1": "5A2MUdoQBZPwpJgfx7GTeFT8cGaaQso9q4XRFqKBFSP21aj6q3Saoiqqy1JRt7gdD8W1QqN5zHo8ftz7YVKsykYg",
  "key2": "4cq5dGeenAjDhALWMreHDbTyhPWwAEGfYsKJtnAeavPGFMvwZLKaEZNwW5za2kRU7DhkCc3ikXJfD7SxzYDBsUKS",
  "key3": "42WFjjBc1GUKMKmXVufDE2kGLmRfYzNqBEtNN4JESuytSWKFv7yTBwQsS3j4njRgt3W1Ytra69qwMo7NmGM1Bdga",
  "key4": "KwD4CH5h9nNF6YZKYnfD1awEdpSoCTkd4pzCwdu57dV8eMBE56XMiPjn3XeBLrT11GzDVA6byGs4X2xf7CyYHXU",
  "key5": "PrbwihjZ2NWT8Zgft1YR73SGWh4YKRKVNNvC4VxQgLd6G7ixrnxhFZ7YSYDcqs8j6fmBgH4JVCwiqhZGTD6ooPr",
  "key6": "4cF7bUKxntVtgssqTKCuNaKCnMmhoDS2tevTnCLF7ztHdG1Q67BeLUCVcnN7mA1omhqYNLNNTamcYgdMgtoQzz2Y",
  "key7": "5MVffxwhBj4aAvzVhT465zxox7aQb9ei4PSb3VHYxQC7GV5iFL2C2iFLM85ZBZAD59D7KPm1QYEvTD6LzRrC8UVB",
  "key8": "54BiKRwoDBy5dcXU4cwDg5gfZaq5PrJg3T9AEmqjkhm9Lbuu8JS7rMEQjy2BEzSCDnrgk68XuyTG2Hde5TEiatn4",
  "key9": "4tH5FxwG29Lp1u98TJo6DDHTRNYiKz5hLgLQGxUnNeCjqQvnCvuPVSFAdSK8Y6jTBpLwFnH4yJ3xk8PpwDP5xdcQ",
  "key10": "51HVcGvdLoRYjS7zJeBF5iWQMeEghHMy9v3iXUd6rUAM7w7YNDajpXgk4o7Xicej2bZzdUUqJBtoTSjz9xFTjnXN",
  "key11": "bY3fqwBz8TS9bjahJ7qrZMi6sGjVa1mFv2MpZMRRSE6VCHVDGo8bXpcFgG7v3mX7RaSccDhSEJ4T6AxEMgEJwLy",
  "key12": "5xEfq3WLWrHdxqvsmUPqY5YKSm9gpz6vLnRDH4jWr8zvMM3iYA4QuTEgEkcueHE3JfatuLLVWtJHuyHVZCEAdSTn",
  "key13": "4xGnLPSUBwkDZGvwTBmqMwMe82a1zFDuxj1tknTzawji8dJcsBsjSvmgWYviZZjVkiL249eyuR4NyaDYRMkJ1skw",
  "key14": "36KZ2EXnwMNWzY2qSf4Pxcd5iPPF7UKywvfaH7RqEyKaaU4P9HKtq5gTWgEiP3NHQs5BYE9qxVBCax4MyUMNkBR9",
  "key15": "5BtES1RrGpznMr3WnmcJdY72E8HWnAzmZNDxDTebnxsphaPhFirSHXWpzCwttrcnnUYChEqFMgdkrvqU29VJ4wa1",
  "key16": "5ToMaDkf4iSjHorXAVQYUuRPRTCsBXerWM4GaoxibGWsAFPV2TWVZKR4zcWLE2YAXQX2aGBc4PsW68u2BLWmzGA7",
  "key17": "5VuiQXEajJ9DT26g4FAmLsTWAhAFUucgs7vBffdAmHR6sBXpvdVgQy6wG4CaYGRcYLA2YBXSuYRxuToDdkGLvYof",
  "key18": "2gESdkBWrWVJp2Mx5hFnW8eSsB4vHUyXz81hVcFq86mzjzT4NCvDSnxne5eBPf3Ng4ZRF42aUgDupMhHtCCVoy1p",
  "key19": "CWoLhyrihD4GZ29LCF26o2bohEfhFdFWfYJuq9r5DsiKmZnj6kN6ppb8KhVf3vox6dyTGcP1chtyBS7GD3LbrEb",
  "key20": "52f4bX37RgkoVyFfrgzSutWuXcY1vTEbWEGxB14Qb6GPtzGht11PopBiJ8MirRTtWMLHxnpNPsTUem7g2nRghicB",
  "key21": "4KbReZdCfs5zuwxCQsTRE4y6DksMzZb56Azd7HHQ7o5vjACxR8SeMCKpkSW6meLtgUTw295dTq53xKFNGuCrh8dm",
  "key22": "2tB4XmUWigeg5W8cTqtnDbdvA8jStLMWJMJYsXw5H69ivfFqyJCuRBjugKxQKu94gKnRfKYuQ2bMp7aJqBSaFC8p",
  "key23": "2onxVZCZW2PjYoac23n5cf7DeLwZ6D4zyQhAKE2WT9yWYMYKcTyRWiAgyoi5E3E914MJX8bCHiZ5o2y4Nxrr5QaV",
  "key24": "CBTGhzDHuq7c7Z9dxGvvVwMq87AAJTiissDBa1uxisETK78ks8E1af6Bbq9whvwhisn181NfZZqL6RjBPYhUAoS",
  "key25": "63vAc9csEAuNE3YLVywPVpaefFvzP47pQMD2ymNbnphXJ1v5cKhJbW2QcZybkPigkzVtUEQz5sD5mXujWEe7XFZb",
  "key26": "5ZiNwNudpTgJrQpgW8FEHvD2Tk3GQU3g8u7542uqfmWM6GmPrKMAmaVt7twde7DoPh2v1PTsmyb9wRnvdLoLF1AZ",
  "key27": "rSpFY8D3DW1sudYLz2Xi11DjbuRYwBM32ZavbM5SRnbPy2N4bZ11L1gu9U7Meea2m1Z37GLhJqyH1xNBtpc9yHd",
  "key28": "5dx4UJQn5fW4U9SK8D5Dsyhf6qCYuAc2bWm27qqrMSeB3t3fYepaiDe8ucqw47zq2d2LJeZKcjUdYTmCxqKf56Cc",
  "key29": "5p3FwyD65oFZ9RiN5Nb9yGFjt6Wmwm42cm6qMRhLnHGRxATb4Yv4QvG6v4LL3m3fzs3Hstr8B8XkpL5cieJyeCBE",
  "key30": "2CZD1CH2WnG465DPW14S3RWRr1vNoGDeUPwERJ91HGkMVCB4AzxMa4ENuezynMjTi57q28egteRgwCrfBwnn5ybF",
  "key31": "2jHSfjg8b3g6ugzTAP4niHqLfEK3TcuYvu15UoAW26nLV8VGHeVMULGrBbddTCcZNyZpV2d4ReSy9hLNf744Pdfb",
  "key32": "2ZAeebRxub2o9hw6Cao5iGiuRktqXku4xPQKXCoUbpYpmr7SWSXDCxzWh17KCANLYp19kPmD5c4Y4kiucYhQzanH",
  "key33": "4H3ztmSAGLpfw7nvmk1s7tiN3Vpe1DpYtMs24CqHUcbqYVVp9N6kpMUiSHJ6dWiD89MrXuWc3wqJfU4PzQkt87ww",
  "key34": "41gRwDk5vNKGpquiFitnhz1b9iVCp5f7RGKS9wxYAGu8WvfzChR3Sw5ZTzqSFEZUkC4ckkjAJEqVNt414CroPYYN",
  "key35": "5m98wXpkd8CnPHXPyhffLK8UdCxVdxsJy743Vundw3jEfNMQdSx1nGbGsEHjQoXrgZwVtKfdRnEZYntAtATigoRL",
  "key36": "dH4sufB3xrowWouNE6KevgcSCoBZj49yMwqpHLrRdSaX2HcNV4kHphDxv3r288SohEsZkUa8WzZ4EEjeM4LVW6t"
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
