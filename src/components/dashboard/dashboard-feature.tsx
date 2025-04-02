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
    "5A7miTxHgJdYb4EbL2JuNyVY1TRNLXJwTjLG4CCMuDXPCBvfnvahDFxLGUgETdqG4BatSujtPSgaMFy1EoVnL9CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qxMJQ4mgieYSMnCnjo8eu1aCPzQigm5Ki3PLSdQfJqM8hVCwJynfH8pzZ3FaJ3NLo677mJMhRvqUpaH12RWjEq",
  "key1": "4Jm2u3o62EnVVsk7oBDZzBZ3K9ssXaJb99ahyZGewDh2YYQbmL8Mccz4FFAjbAiebRDJHjShJgW2XbMrxGPsLhHB",
  "key2": "8MLjYgzb2mCn3gqxJkNj9sDYuSBcMLv5WGhTeJvzMEUZrPVpQR6ErPF7ytaTthCr8dPydn3G8aabiJgPJz7FChd",
  "key3": "1H5N45i2biMNYdmPCkXPHFnk4va5vUKu7DQcAMQVpXYxxe16KrwWiuRj3sJAqr7y948JWmcGw5dqQqH96NReTx1",
  "key4": "WTH5Uc1JT5BRhAnLqHWE598CwXZDgyK5RZ8V6ymqFSCjJr6KL3pAnZ4Tgc2eGTDvELCoS1evJQQBwL1MZCZPSRP",
  "key5": "tCjxyCp5vY9U6L3sdy6PwkRVwp5LYeUeD3XRHiUNsvfmCk2YqLrm7tgpzdgXJK5GJvhmAVQzCMHPGkFr4PNHBsi",
  "key6": "3WVevprm9ty8mDRTcFBMxCJgmkNUWAevcEowNPoM9aARiq9vbXTJ3wbNpXYnSnu7sXXNfSU9VbVbe4A6tRrcj445",
  "key7": "ugZJ2m1bpaMoX3DpSxp71KUiGyw6VMtgYGP5hQn6nVhj8otFzN9bVi1vknkU385T1QkvSx4yKJPuSBMkGfySWMc",
  "key8": "4npt17uMhueAn3USrxD9Wy6a96xtq8rFZS4F2kDkDywvqHXo2TtfzgAd3UHc27f2S6Mx1hNFepiD3N5TEk9hBhSd",
  "key9": "3NzGQCdWwYzQNDzwYMydjdcXP9FeFVjRMVygLDAZNUjifcpabuMVNcdXjaJ737z3mZ3WRAqRdneDXnHwdyRezitN",
  "key10": "2B85FWz8MDUa2DgzY4sDK7aQfFKY2ZRb2fqdfXsoUMTthy2RPnV5mgaymkYYwJptz7r34c829izn5JZfPiS63vUY",
  "key11": "43g55JnG5SJgkqChwM1SMfqfJo131mdRhUuQZ5Y6g4872TVrD2YXH2jPX1ge6WLPQJg1j6mP5cCct4saeKVKUK73",
  "key12": "3qzP8mTDKd68gksfbMEHJsAVZUijgkahPFvKLQnJSZMSMR3G6ms3SbGmcAvUm9E9TSM4JFL5RTYMPJjG2FYK3hqA",
  "key13": "5CYxBsHZkXjeyPUw32R9N3PyXZbi411Cocg3UHdWgGo4xw7nQtHcb4RwEBEwkfDz6oJT5quirT5kYwipxrUsSbqu",
  "key14": "3rsHmhivjpYMGQzfShpR96VZP2dz18v6gLaUHQJagxB1dLJEiEtJNVQKXDkBWKRNFuapVuZgJ1YBM8TBFzENRBPQ",
  "key15": "5JE9a25fLN7fpspCWcLFxHgezLQfnqXfK8HeERj1BLcsE3WoNjZRsFqrDwGNVqFcMxfCpvQAUmac1MAmYzJbxprX",
  "key16": "2ewHgKc4hRRd35mR7xXkVipjwLei1FpegSTVPr818L2Df64N1DtEHsxeCbqZxtdcMDjgN1QWXU8hrPEENEfrpmQP",
  "key17": "2PtfhqAGozzqTaZRSGJBNkbUoL3FHFPAzfETW6hJu6WfV3ZwEAUPS48T4wQojwedJyfSMnWC74VhCCPwYi2SHJWo",
  "key18": "3sVd4cfyLyBEjqJ4T5sHP3teMUB4yWQpuuXcbHdi8miuUWP6esnPhpFvbGvwismYYTCh9KZXjE7yR8boGguXbXBy",
  "key19": "3RPKQMGhwUEvZMaDGzBScy1bAZ1htPsYHFgtoETfZAvAdbzrgktvyYKyus7u2yLZnTaEx6VQuzFLKjt4JQ6pkWDW",
  "key20": "5i6zDrYVEewqrGoj377YFxN3BPt4S3otkqpHmrs2k8AMUWhSFzfQMKtYjBvhPa7qxKbE2RbebnjTZzzYY3bDzhG6",
  "key21": "5QJzhVT7PHhNygXYw4vVcou72JExWpycwRd4ybL1RxYHfeQtfPpbudMGWeJ4BcnM8C5Jhnqeo8n2wdpmRhh21TKX",
  "key22": "2kPDpj9WqcRpyYMChh5ocqb1yvrxKVEXHNX27KTCvM3axY9CLT3FZbAgiHAT8nmoTdzJpj2k1DdbAZJTJWaeVjVS",
  "key23": "33AqUc5R2WbGM9oqCucmkgLL4M6XCn7F2arKkVeFptxP4pqq9cy4kP7cccfRxuQxDvpfBxvjSMKH97q1e49nBEp6",
  "key24": "4RW8HrqKcpYZm44rapSdhXm3FJPw57LK5cgPHCGtrATGdHGLiR2raE2tBAGCAm1vevwfdT8VxnzDkAVuRT6tuCU9",
  "key25": "4ZRYertgsgTFvrAMRKhgS3rM7fK9EjoHjv2aoQTTXwXEEYABG2U7A6ZcWNZTsMTRbsiNjvmRUfQR1miU58NPQrJv",
  "key26": "3tgQBZtXtYYsbXd9G9axULVjGWj8D39BdStKB5uyL2LuH2icZZ5HEEsDh2wYGL4c8eZVSbQ1u8YKnTYBWMaiBaJf",
  "key27": "3wXUVebGp56yx1motTMxEZ8YT8yrzeEspZch9TdwVaZaeK1CsZWqXj2s7B37QaCsqrztjYjA2j7WXBDE47W8UoHs",
  "key28": "Y55oYwbbi42F36oYk5QyzG1CW3vdsZZFBR9HqWZzUX1AiGqdmA9eo3V3wP23ej84rGHqRsEFvs2Y3k7z1DNUbhx",
  "key29": "35DXqXLChY5179sM7S1QvexRS8ZZekhTyBrKqiRu264DgnYh1VAM3incx5RCTUSPwvdJTwwgaEjWDhzCRn8JkAJR",
  "key30": "4ZHb7LXtyAR9piWBndBTLqgx53STYacz1Kuai1xv6zTx4z5WxoroirNNs2KhXtvsVHuSpjBy8VkmgD6wtHViFnxQ",
  "key31": "TqD5cw2WNo3DHRCXAfuUQbmatpbv62aLeCDz2kmerHQusR1ACKv7CZCF1MnB36AFK8qXkPeB9xKVGKjaZZ2cAL9",
  "key32": "4XsTLk8y9tjEiZExbXsgpLrSPguykrPa2TcNHnWXGHjBsEemFriEHEHpuS7RGwXUSUHpUh13kfcJmPZv7gFgLtm3",
  "key33": "53TZFwT9kXBGBGEihhLKMgGobE3qdtpnXT5CsBvVkN3wTjwEQSVBsdyLnErQB3dLwvFnVYqphC2vndUXqq1bpgEf",
  "key34": "3Ujzqqx6KnhMQMcMurUHDXj1FLi3Q9Vob2BE3TazCpEguy9hEdNGznHhnBtw5LkygXD27Sqqy1nc8ffqC5U95jcE",
  "key35": "4x8cuFWddEmvTPHNNGD17c6wswbRE1UkRoh3WtXFi8pQEnvvjRvjxeFsd1mfEDohygGHtKe4D28CjZsauv7ab1fr",
  "key36": "an4D39onTPKugyUhCi21kiMMxxUggpzRqnPBjzMCpmfCUMtY7WGY3zHGY5dxr8rCAsMDXUmrRNScbYgHEksN5Lk",
  "key37": "2u7vf2rrf2RwC2ZLvw3njHELbYicTZtfdYnzhr95Uw35MsGkSFGDtMpkkAoNqbXMs23rG8yDL3uoFGP7xQaMHdfZ",
  "key38": "NLL8bzqQV8Vz5CtWWsjSa6B6HeLdWu7rPbfq5EPvPNEWpc1m4vfAUb2nPk7xjcw7pmpBWnjsD4rTQyUQVfcc48q",
  "key39": "2RwwDVeJZnrhFmJr8g6Nr1qPGJrpn7NuXnsGE32ttcHMnQrkqXXuzxw7KLRLzBzqujxbdHP24Wv3uwWHa8pSypiE"
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
