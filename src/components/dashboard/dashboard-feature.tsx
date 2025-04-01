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
    "2XvVcjQDraFi8ZEP95dJSJkqRavW3JqdZYyJVNPfVbWy165xQCuZU1iSbGZQcP7K11KfanBChbt3g1a3QwjmcaP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eG8kRpknUnw8qzoKU7s9ku8XiyEMYzhjMMK2s6uttRGkcWxWdd648WgUakSFjtFtSEmYCnuvrkKtRPmktpR9XTG",
  "key1": "2Y5nDUjE2MW7EcbB2etAh9s1TtybqkhV5cynt6CiE1WHTBU22R1MLXuXL3j6pByNjcubYBm4je9UPLvxubXNMLsR",
  "key2": "4JzYt7cL5AUZpaudmcJNLPF2bfN58ZL3YLAQpDPoVFNcYTM1n3BYBwmRHC6GbgmAyEfTjYKCSfZCSBwZQUKsXuJQ",
  "key3": "49cfzkdfn84ynUNdBzVjvmQBmDLbrffTrem2MGgMKAaAp1vbd96J3Quc1wLWCaoifjnxUftbgCZ7R2xS5cvRQgPJ",
  "key4": "484rPxwn6ohC9CNS9Q3umCDThTsXD7r4DRF9BQgZL6yKGsososhh7g3FYAq9p7ZtapYbtmob2LbBVs2qkFdKy24c",
  "key5": "4r7MxYfdXjwV3EnFfm9Razb3Mqc42frGUY1hXuaheg3rUAMcqvKBX9Kfwq9RLatDxnZqBMUHoiz731Qhm4SPoaGd",
  "key6": "2NBCdMyS4nS6PSyF6RJi93zRfvvCGpDheCDLjrjkZFtGo1Fp2R3ijDiTXmbMdDbTuCSA3CoZAxe98tEwTpYKwVcz",
  "key7": "3GNW5FaLASUbjeXHwsZ8fXixaBjvdVqkeAD83JyDfZ9VY3jm4QCPpnHQfhkWi2gSYjhzZMs5Buqv5Rw3Wruyn8G8",
  "key8": "3LiFsBLMc4eG8X4vFQ1gfaoPmxCHxBbWrRs8wSgs8guN1KyRtXvbkCcZz5pJa148ZRsza7uaBAW6APtjkghEyuS9",
  "key9": "XggYcgyR2U1gPYfpyM1HSHByx7TkPWia6S53xWs98Zu19651sDviavsdsffvvk5Wdm981wmLZFStRfXAprJm5SU",
  "key10": "3U9VdbXaes831kXKRTQQf53dNUzQk2d6R2eFEZxkGoZcgPjEL52SR8rRmPUgA8aFSUdKzhdafhZpXjCtunwBY4wg",
  "key11": "2mTLbNjFTqpvTEC1C8WKTEVr4vPftqXxpuSGKZeecn7yVEWGux1G1iGqtBZb3a1mUDfv9q6b1euvZZaTnSzCB8ze",
  "key12": "2cVTHD8cL3Xs9QhrD7sBR9kz9j2T3VJ84QQJrGzMub76DXUvBYrtVe2aUBnaKkk9u5ta94hY8gDS4uSfUBPQFrMJ",
  "key13": "4PYPgnrzHKk8FUomenp3M4CG98oP1rRL5UV3nXbAjjekf2czUDkFUceRpRjdLVQhz4bSk6y5iDjhWCzw3Utdc2L8",
  "key14": "2VZoZkq1gVn6c2Hi2g6regfZ1h3BhgadxWeHbzB3GtyTc3tKYcF9abrXk1e9kDsHCFLorAn8KLySnKN5fFQgyVft",
  "key15": "2VzJsXrDAGdnm5hSe91Mj8ww3yTKGgRFxwPqbrv6RcgcD3AhERtKM3JMzMkKhwg7PxPqH3YrPTYMPShet957bTqv",
  "key16": "54DszqCXqLTkcVrnEjbe7CoCFDY7ih4CBbYiGnHseAdForWrss6DJspth2RL2RkXxZC8DNk3CbAcbRKCrJ9nbXxy",
  "key17": "2FECjgMReQfzh3i9q5dNGj3LUmfZsJzUuJFCLz1LknxUjukqvS5QLbZsYQNdavSwyyKPNWZB2BFfLuWD4zZc4uYY",
  "key18": "3wQTMwnmhg8ufPa84CYbLRtMAMwXeY6hCj9iSFuWbucsxSDJAHCoqrqu5E6sorDbt2BfB9K5vrG4gfTPUxUTZ1PK",
  "key19": "QwzqvezPm4LLrBKamQWgTJ9dG3a6LadQy8nBZSSuqPTjR25XLpxTDoLQHAzPtWnVUYz4KJQLszBnX3iMoZqBt7P",
  "key20": "4DLeE3xKDVtkKN4521DnwZ9yHiotQyQucwcZduTNRc9yTngCKnxpvvpNuUVG5itW9pLBbTDH9y9GWZP68hHqu2CH",
  "key21": "VBxyFDgvq4KqvKv1Ya7psqWGX693TdTEdg78CqRK9HSLFWqKFJMBW2n23Vj7Uzsjtogf3jEqzubK3ZtgCX8B1sc",
  "key22": "49VCn2TyKdT2TJRr35aW3io1QXiqzLK3JRfqnaneRTkz6dGoTgr9TokfY2tqnoF1L4tFLqFoDTbfGmk4mFfHKtzd",
  "key23": "3KpbQDmKwTVGVoduAa7NTSUdR5u8KNiLYwhignmptMBsnrHSMFPZYHxKD87cxbiiN1qZiHdUssyVxL68z9wg3Nb1",
  "key24": "3qERA2w8FWGMrVxtMS4kvEyaMdcmvhzxChhtBLSEWnjN2c8xDndii3fsnBnPDcNwYfCMZPGAsFXJ5XRU1XGPPUjJ",
  "key25": "4KQUoDcL3quZFHHrdESYZTcHwewYgTnUu5BTvUgDW9no7quavR5kDtKUfCqJ4a4bu5gKU23rQHgkcdMfXpXZvZmC",
  "key26": "3HeFV5jx89ZWXkxEWTxFnvDVjWim4aZE9ejbGNxWi66iGsvBDR1GSgJhqUEuwBXayHNA95Vfd4e5e48N7ALbMUv5",
  "key27": "VuvC9nbAC7W3Wf1gZHgJYB8tcacWL9Xb5tV56G5CF4z69WnhF5je2rwqjtZwRWnfxf2dDvunZaaxo1D9vH1ZS5K",
  "key28": "5UvQQZEiDsELFP3dNkf6ABJdNyUcdsuXymJ1Pz15SLRtKqqnKDpEqUZmxT43Ane7e8t7AJP2YnPgcC723ii7G4TZ",
  "key29": "2gAj7KJ4WFr643yLbpjFet45wifa8hHCNiHRYzvuSPt83XMNBk1CFLnGppEUxZB5MTSM1evdbnkpyUyUjEZmB6uU",
  "key30": "nFbnJYS16uyyVC3JLALfAvNT7pTF9XciRW9jwRKo9ofDbXr37XTr87vYsVbExPejZGRYNXC4bTB7rZsmJycEu2Y",
  "key31": "3W2C8hKZ7rj9qZpW1e4hxfbKkeNUV2ZbDN2g5P4WzLkUd1Nn5MHq52pkrxYcJfi7nxvpJkgTNRpovRxjsi6saijE",
  "key32": "9RbLjWF45pNoFyqwKz8ch9MtybDYgwjTE8UfVKQRG9KeQB3UkC3CQj59yV3dS7Bin7mZziPvAKUgBEsvRqxpGfy",
  "key33": "2oknurPW888tQEoRCvKJpVMSNKTqk6WdaPcW6Fn2YKJ9zU2weSSFv3PX8FTsn6YLL7ETzkHFv1NBS3EF7Lhg57ji"
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
