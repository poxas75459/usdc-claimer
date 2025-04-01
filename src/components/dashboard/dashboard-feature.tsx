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
    "36YfBEDLYc68zHCSNyAbGTgE1X5gKnGhdRyP51H59bM95Ka7rhivtANPk2PuW28usiAYqNtr3EaLozQEPUU5QL3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15vbc6GHuW2o5yPA1xDhYprRYbKPnq2MckPwVJVE7LE1QdkzPviLj9y6g7BWsGdNUSP7jMMwbL6Wp7d3F4P2uSb",
  "key1": "22A6auBTuvf9rB8gtqip4snAyMYo1fW6PHpkhPeyd5ApgxAfAxCySEuU7uynonccTHZQodU4EaRgX3Z1hqeCThZU",
  "key2": "439CKK7LEK8P24yMpzcwFbq1fBavxVce965oMNQBoRybvAf4K514CMeEBHk4E5NuqVsoJ5rAoNeqzh1iEEaXyv7J",
  "key3": "5i9iCfft77bNscbjujw5GYZriqkHp4UgLPs1NmrsSmp9QtrTYQLtQni5q6s9BBkAcHkFu2E5jtgMkUoVEzNZfuzn",
  "key4": "2wVhYB87HcUMF1yMKraMiD2ZsK2h2vCk6uBzyaMQiSykShdKtPX5JSBuwpefL5dsjVztA6tBP2RuPoH8RDQFCVRi",
  "key5": "3uYuZPEGixWUuJc44YRYbXK7bZr3L3hQ8QQfTeaWT6GSP3b1tKvc7Lr1o37TszyWfgaHBZJgL1tApcymSSCq2BEo",
  "key6": "5tLpE6vDtSnhiaKuuiHheemJoBeUVuo6Hc3unZTH9ugNgn1i1gLfGJGwPo9wyKHRvfWofNgC3rNcz5b1y65wqtnw",
  "key7": "3b73QWZc32exDXGJB9EpZgVrKpGgkxg7oxY9oXDPwQgMtan48gAGmKQcsifn8auUCwd9LReJCYn5aKaUZ4GPSBwF",
  "key8": "BUZzxskhtvXSmcNK9vYxw29BeCr2M5CkGc1L2fTcPBEEHACxnMkedWdqT7X866t5WqwvjQsY53SEwJBZng9vnfn",
  "key9": "5eN2ihNfwgAsTWphYNgv7i1TLmoD2SRGvULXUc8n4A8Tai7B5ycbkimdDFXtZmXsnkWMhZRcmuoRLddxNvox4E5G",
  "key10": "2BqQKXMg6uMXp5jVeRv4ViQwoENZMiQScDmQ1ibiG1zTqr4pQJHG1o9NtQSaqKrcEjJD7zGMuWDFWEAki2Pnh1Up",
  "key11": "4TzeGXqiU4k46EqFyJMFTaXqoboPzyxDpdvBuj2HbWV9sD27gZ8mLvJFTjDqmfHhhjtssgoowcBQtBajm3bpdvHU",
  "key12": "2ujjz26HaLtBd8H5KzfmLtLFQTGKgNGMsjbfZ4wTEFfsxS7raFXsyGAcsGRvapN8YrMhBVR6RTYUuP88u12fatpP",
  "key13": "58FWbt1sSSqASTmSoQQYCTpszAsngzwZEyt6dpshEyQSBXhMGeasrAbsT8maFKWhp27MSqEYUPirxy44syjFBGjx",
  "key14": "4UUBfNanpTmnv6g2yuwmScMAetzvvLiKJgPVdvmfE5FuTAg4DqzJ9kZo2WDHpSaYKf9Jmaa5AJvEnMcVim8SP63f",
  "key15": "4Vxem1YPFJFidVSxvzqGoDXdqFdu2VZ6FB8pccArcD5j8YTWZDRBmxThc3BhhGG22Jq9Y5hYvqan3CrgDa5DjE9V",
  "key16": "2qYsNPdhqdNUsgCaUnBqHqpYLdvVw5DKvRrdNdUokPm3tXT62ZL5zzy9mHTSJkFhegBidoTqHx6KxsHabxQ6oCp4",
  "key17": "5HDBkfYRjFPQPqyogKSn7mtpD6GFmod79c4m61LcfAj5cHMdHcZQC69NBdSgSnZp63Ugobx662R2jTH8ykNYLkM5",
  "key18": "4RADhLb7Ub3mni6HZp6ZxYjMmN12dxKABaLMJ449FgBCRb3FAvpfzDFDeHhx1Msgd3A2uL3PAXTCzYokTGnQUqP",
  "key19": "63bDQ7yXh9VCKeax4Vqx6osPXz3b6i4dvmqXpHoVYVAEAXFju3ycYcohdbnRPoAuix2YjpAeqyas6cxoVnXrxWSZ",
  "key20": "5jc2XcEDPadAc8jqK34M1TJ5FimRYLRicMUuitbyApxiTA3L4B3Q2ETvUBRB1kGNfWXUF8A1cGfnkXBmyJ87itFy",
  "key21": "aTYZwEjmVSwEv4TnWxG6mBZdWcN2Nbct3ocUevG8hyM1qogW7idwcxa8aumoEYE6yVm4P9BqhAeNmYBuJXeWmLM",
  "key22": "5zNRFPcntbzUM4zanuTHNw5QGsYCcoUmRXP57ouDcpL6x81c8cE7Rm4NcBd9uhfqpFARW52XUbBTgN5QJpw5b3KJ",
  "key23": "4ZX9NFg2Qn8nRV43FpYFyXFvMJQNNfcZ4GkSTXGqkgm6ayXkQyB9LEVq1bKpuAQgxQYytPQN64fdh6BSkH1R9wjz",
  "key24": "2wN7WU9RPsa1pJAQg6siKubCTBiAEwmWCioMUgegnZ3r8GGDZZ6KGTsjFx52UKajoZzYEw4GTdj2tk6VH6zNHErC",
  "key25": "28ii1UcUvSzbiJA756vxChhdgZMfQv6HGAwu3ffMi31B7hpH59MEs8giGAW33GWr3trZWuAkiKAHvcFqvc9GWqJ2",
  "key26": "HhhfNgCbPK6bnqfCD2Mc2zpgpCE5PvS49Eb785APDUe7Z3vuUMiNBNqmkWcqgkbvCTtPgt2u2ohCUhEKQVVUrwR",
  "key27": "646DeRw8KhoT9DyYCo3jiZfqxnefS5RWGo5ckRU8PvDUG9Mh9rQYCr5kqeAh59Nh1UuH2gjYCbKvEBcCDigUdc7v",
  "key28": "62n6TbbZaoyZBXAPyHg7A4QpLBuX2Xe7vFkNenVnjEdS3WmwYd8zQnQdbxUA8bd7y7ct8yL6r4XEvAGkvJ2qHmXA",
  "key29": "3S1eFGqJW1fDh8CbkXiwizCLVHF95cbfERhtNHe72jUtTSufnvB74ah8uAzGrvz1F1vj4f96S3y3FCd6iAWpKAWD",
  "key30": "4g1hBc4dXiYmHKuc2YyfzsEk2nVwmNCHMs6Lehk5v8is7mWJssVDvpeEAqCNPQDWpEvTMgcr8Ak5XZgxC9zFM2BJ",
  "key31": "5qm6BPUQfSZjR4DEA6udnFrHN2JxAwZ2recWJut8RnKrfD41H1TJRk678tzCtRGdVd8grEnpsAQYcQLL5EoSf9hU",
  "key32": "5x75nuUGzHmL9Bg6fbZnBjQC64thaiXPdmyZ4gBrPfbKQgVvxt16D4gg6Fyu5M9ci1Cu7qEA3SJVPbgQW4xHpLdn",
  "key33": "2bkhKh43gDpau43i4e1V9tLqS6Zg9hLnZiH2QPn5Xk1A9ZQthTjNxAnes6Gsyyfx1HVDhBNg836buE6ddwVEZAMm",
  "key34": "2yqLUVtJBrag8UDWLGsQS18KvpwosLbiL6ZbUJCNE3Je6ZrhzQrQYmP5a2XbdYafTg2t8K8VCRZtN9CQkazwLu2G",
  "key35": "4S4PQmgU5KVeLfefaNByqaLL1QXtugt8SzcrJW4k4AdbcskEdccDgfb3a6xsefVrTGzZCsYFJjznteKnTGPWHMi",
  "key36": "3ubk7fxY2RpQmvHYtkwue2JM86wFVBJNE4sLcTANetYBKkiY7ujL6uRNLnSyvBqhAz3uNNUsxkk2xoFYzkPLGV65",
  "key37": "5wS1mJdhXqdS74su4wnbY7LztZiTWZtMcMtha4iAuhr8B4yvEdSGNXGSaXUY4F8tMgm4XD1PqHRueYfy2dYNbBfZ",
  "key38": "2hkq1egjkggR423TxX5ia1UqLVmyEzAXQqi6PJCgEcrAmo292txMjsTR9jjufcBkmZFcgtyA1Ww4hCdCdFbwrHDe",
  "key39": "22oUtwgxu3VBuSNe4iGYuXGtGU9rjD1T9aQGBzb3jmGWLyHq4xMXpwtWkTx2uNsr4Twwg9P64RjC3F9mVaRMWe3o",
  "key40": "hGVukMmxRguwhNXdFV2Nbt7yff71SAoHyX2bf4R5FmzeyyWsgUZPzvNn6sKEqubMC3vFV4AeKu5Bo5Lo5cCMY6s",
  "key41": "4i1jw3UmjxApVWRLwDkzhHPQ7Ft3Qivh53rPGm1etirKDChRUvCXi4zbqDHmJLmnvbRRRwkbzhernG1pb7yrXr7U",
  "key42": "4B7AaMmQMD2hbzBVaeVbcAZHrd7NFPvLrz71xxMUgxvzf96pgeb8kaGFfXZB1HVY436HGVYWyyY67GjbWDmuovoA",
  "key43": "5EKv7h2kM39migoLCH6FZR71A1T9xSsHGxerL5qaLDHj2vrUy2fAqWuqaZdx7X3kmVo2GvnspzXqE2gBL2HNDjRz",
  "key44": "LiwjF3ZXWCwEhJ6PM2NqNqKrJMQ17nCHQAysgJLQd5QDmdND8NwhnS5NeMpafw3CoxNpiwDXmdBn1RNngvWMHH3",
  "key45": "52DVy75Xz68PP2dsjCEVajKffBoUXBWjVJpYRtRgRDWS5nHwpb3R1beYzytdcj5KrZW47GHMuRJnQUe1vuknbbSk",
  "key46": "3RHxUktAyhnSQ7Lo9iGob9xipm76j4KDX18dh2KYVg5Mb9dpta42qQvrbpYnDLULwvVhvb1oxdP2L3xw6JfWCHqP",
  "key47": "3RKkxo7EKGpRnrV6z7Qxf2b6V88uxdhdVo9dVv1K3Q32jFipC97MwKhYmoPahmEwAj5UVecJd4CBcB92124b9rsq",
  "key48": "53T6RQvswD58swEF929SfVTWguxk64uxd6rEbEXTTth2wW3d7US8Wd278e4nSYyUoACtzQHiXCsjFGL4tx9P2jVE",
  "key49": "55Q9CxirtwcDcxanVqqrBkmhedNVrYgvGNFG4H1WHYwCWa5YZug4kHMpRMhZENia1k4bXuqbxfxfi8VgutPPLTPd"
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
