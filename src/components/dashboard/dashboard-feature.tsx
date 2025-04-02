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
    "3WJVcb86mwV6btxVJg3eEEv2sDyWkJgtaa21t6wScKWkjppi7Xn734wTNSmc7FWZ1EcxYES1eDAq1YwEhMJMMbKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgfjR3TzJ9a8QkDPnBUnSPj261TtcjfkwdgChfkGitMmRJu7NzMaGpQxgNHy4uwjYEH2qSf3bhBsDjvse5bKN4L",
  "key1": "5L9zbcjKv4VQ9Nn5kKd4o1LMLgHhjMtBAU9ZF2R5ytvEmXoHCQe5YKUHVB5snas4QMhcPGziKvJJnSVKEvL12i1F",
  "key2": "544BVUNRBD7wM5DsYpxw43fb8W2DLHFfawYE4gzj8DstyuVPb8bS5cnRNY6U6nduF2VeHU23HjyQNKR3fyc9BF9Z",
  "key3": "37xQUUkZEknPdGYuWjkAF3LEzS3exRR1HztoQQVvKBau1SsfDTiZMsY5KETfCuySVY2n57sdGTDWjbCVLz7vWVYT",
  "key4": "2VpR71pL7CdYifxbdUqM1EXvhue3CHVPrWcW94m36D2c19ksX1zkE3xXRyWmxC6doiFeomAS6fsBZXMJTT5Tdi2A",
  "key5": "mDmudmybhuF2wiF9JSd3QDJ6kC7C9VkT3zWFEQgShSzym5zjuuaGQpUqsVpMyJ1wkrxwpug7SpnE6BnhyNK56yX",
  "key6": "4z4Lw1PJwuG2fYgjkUsXwDgHaSawHUA3QfXdZQ64n6yHTLFtCju2BR89mWizEFY79pibmz2FffikLJLb6Sr6i3uF",
  "key7": "NPnaGqSoKViwgPUg9VMsCYwq6n3zq8xAZw6tZyjmcF28gEPby3PcZjXaZsNGivC7ggLP3h1ctALjgWQWuNP5s9A",
  "key8": "aU6eJkT6E9VetfytcPCyQVAoxk1bVNGXZGTW6a7rWnNPZCBkUw5j4rNCzW8yphR1HJ7GVx1jqDHoaiwdCwfbQeE",
  "key9": "4RPUvaj5TQujFg9JT6fPcVk9eKF4kj1FsnaGrbqfUUdg6Swb7Sy2RDrqWWjFsrAyzAfsK7D8N8EWsEdX9Awm8Vdm",
  "key10": "4ZeaRAzUcTyqntDbgRHWsntgRGrJmtZvwB4Cau5zu4X5jSd7daJ9944gD2CcHveDNwrDHpcZ21khmZg73mwFPnGu",
  "key11": "39mHidMdRE61jKFnHufUVEB5eJsX8BjdcC2EfCCNvu6Dt4cwxfH3PfANe72vNQGeYoyiXAFfamXsNTVNZiD1yUnn",
  "key12": "4duXd71QfuskVV443m7tXBQJmfFfShcSMdsnacReqABnCb9UC8WV5h2vF6DaELL2q4Bn1jVCoFEXhvusEmMeWeAf",
  "key13": "3sRWd39cNUG2p3KVdWWBFSTAMtfez6ASVrcujVscA7dEj5VzeGrvWEvyqFgvXEFjuQYYKDrRJC7Evckb1w1Rc4P2",
  "key14": "4PWJbeNWQZELosWr4Ti3LDbwkmjbAvJUDiY1r7PT3EynvpkLsfouFzMbXJ6QobDXrZoh9e3vxJCFqWbbifMGwj6u",
  "key15": "4mxYGeemhci4yUTziGZknbabd26j68YKRigvPabhzcY1PRKfNP9MTyEVAJVzqqjueToSn4w2aqpiqAMjD5BV2NUW",
  "key16": "54KuTWc6Uv3F9W9Bk5XuA4yoePjB4rWY7cUos2W9Yy6vZJMfxxMUNyBAPErJXwaze6ZNJBySs4fMGSAKDtyEZGmp",
  "key17": "5kMt9nga3cVfsqdoigbMBX43giQeuztMFGY2tEuX5RaL9UTXhCaY7iWygn8NgGzmaRfmmNSuQQKSJKi3dVbSWxzX",
  "key18": "3T3qBb2fgZT4UAaSjWCvMxPVZEVrn31fWi1aJrErmz5ekuqf2f3nGAaLXqptEAz435SiFfr7hYNZ4T7w1ePYDig4",
  "key19": "5DFdkNrYf4bqoF5KJEPZvmaNbMBz2W4amDPQdUK2bcaZa1bU4ZAwWZqmcWcETeo5r913p4qPSp52AnGvpR52wDNX",
  "key20": "2UxBu5gC5RvD3eH3qg4oScjctftXmRqYdumkdDz2rchPRR22WhJ8B5MBKpRmxbNL4eN4BcSUXMsodqdkB464q482",
  "key21": "4MK6HXDq47DyzUPMex6XHhRnCYEjgyPvGmqtFfPWNJ3uaAif6zLfECTkbfbfiNSfEeqpLsNMMrQgpGVqs3frzWFR",
  "key22": "219ybM5kcNrvM5qYKehzj3Ytah1VNpxnSdGUqC4E1PLrj5rdSdTjPrCkgDcoHMeAVPihtwGBjoZbWPrJqtLoGb11",
  "key23": "3rANJtFii1VXsfjzTJWZjvg6WiGGghp53GpjLPejmAiZodjV82gsXgVta3EvELSbS8gJK3m1oSyezb6cevYWPe8d",
  "key24": "5HUUN89GQQnVHfsK2CZNZkfMS1GQMTdtTdpwphZwK2piTdgvy8N4PfQyGZ2K2vy6DifJCBP7WMB9ifSxZ8cSkAoB",
  "key25": "3CJn9r6RXouYenGp1QohLrss21c3hmTW1cbsXb3wMHQNbgJNzhxAQUGpt6hNWyUEjNZ3sHwPbHo1Rgdie7u7Zqv8",
  "key26": "2H8xoWMuU6hzCgxswhcCY1aKxXj1K38w6ZsrC99jkBAvwYEs4EWTYrx33DWSuQZhTtyAxgoBBmc68J4ihjJUXYb1",
  "key27": "2yC4huNZh2mNvVbQtjGSE63j3Fm3XDhFKykPF7buutxq8GzKVMrvKy5egqTm4ESwH6vEwXDefTCjtwk4bEk2sL1C",
  "key28": "K92XV5qaEoBiczStr4TZj5AWDPy1vMsvprrN7uLeJrHz575fpy9Q1kkqPrLLsXksUx5PnERkuV83GdG2FfYCkZz",
  "key29": "3TVqQ8CcQtWagMNnyoDrNcohUuRk7US9vmKyoLHm65hxyabjh9cqz7y27RQjvD7jTvoh3entbWtnMNRgKyxeUtxv",
  "key30": "3DfZovM3dBYJRnD6CNfR2zWQSvtQSgVNRApvx1ZtZAkxDUfokVwdJH2624gzme1kAAQBmNHJjSu6LxHu2MFguYYY",
  "key31": "4h1DPnoxr9hQup7ZbkQCBBr6KTSU54ovtVUX9f9JczQ6XXe9RpexUPYsP1HXngVMJR1BuFr1Yef5RShin4gAjfYU",
  "key32": "3skCkKjWeCWN83TfvQCZE17p3tnKPznaaeY9evMWQaGq1VPzHciDhYDy8Sx5gXxApueWAqKpt6vXVZsTDzTGrUYb",
  "key33": "38CT22pGMrSXxT3JJC8PmR2oYxMP1MHd33gJnytQN4VQoigk3xALAEVm8VMVzCz4YDmZFQovdVB7NHd95Kb1RbEj",
  "key34": "5EBeMBuqS1sC99VqapwQHbcwBpCucJDcNjm3Je8NGXy8qEfpErf67Dsg566rvsDcr3tL5WEQ66FEzMpqiRC9Yw4r"
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
