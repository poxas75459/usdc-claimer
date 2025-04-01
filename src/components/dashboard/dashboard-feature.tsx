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
    "4RJ5y1dHeXLkGKvSKEvbSchRqTLAcQM6sc1teTakmP74xK39aa6o9XMf3zKFu9e8raZRyBdwSTujXDxofxLUSbb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ao1RC2mUypWs6NcCdptQLxigujutsXkvPGozFtUxnmEpZmNgX76dz49WfuikpjkNMCf5dQ5bFwRrgbqQ3ELUaH",
  "key1": "4npWYJkWFUzdBUPZ7QTEW6rmTn79BaKkV2B46vZxSrz4DV5qLmpxCG13qTLQ4QHM3uvWnbVEM7XpoRsDjSAVuBCY",
  "key2": "49tx6rG4fPcwZc8F3CRExdAHz7KBLeqWqM26zTF1VtAbLXUn8CM1KqcwGi2pB9UDUBZN4bLkuquP3ySQK8BSCDj3",
  "key3": "2hbaWUaqLTSkEiCTjm9XCLZzVxSrVhkefCkdf1cwdrXgEZS2xgnSCCG5RFkGc7r1FsXaVPuZLHh7cWzdRMJQhHGz",
  "key4": "3yAV2u7X4gB46fp31LsrnXxW6dPNBCVYob91iD6KhUubMbVFAHdmpnM8o2wfSJvECqTqaeuAW4Vj9Lkze7QYUJx2",
  "key5": "2SKAuxxBqZDdFibPLuK6GqdgWUdVgS3WjdXiiCm9zjr622N9tntQPXreZM8GB1NMoCoPay57uVXyyUpXGtP2xsDb",
  "key6": "4w8aTbkQr7RJCu7gBpttP73ZpZQtxkxHroiyEiHo28NaipatopsbNDrpotyGc2b81YEjD5M57YYasqtwn8qaPCe2",
  "key7": "4Y2nT1YuBqS2UxQJYoFwPXFaejJGMjUuTQ6qSXussNDg61FDiu9Cn5zsnv3ixuGhPBRtN9bNHt4yJCEHgeqUcbkE",
  "key8": "2zNmMaWaYJbEEGAeJ6mS7tXvdKmi737k51CfswVW3xJS4xs6Jq2nR9TaZYJDg6UoBUu6NnobEc71SDx1tGcaKzGx",
  "key9": "yz31WqDRY4RM5XAUUZ96ewB5P5Qvvqrh4RsrzvsunheqB7AHB4C98KtGExF437bc4gANwh4ztLwHMr8Fc7ae7PN",
  "key10": "5QUhBTmcvmU1JAYVBaGffvoxYCMRS1Qy32ZTNJauwtwVqPAJusBpU1YchHArxaVYvbMpWjAMegNbW2WxtV5oR6oN",
  "key11": "DrXYDpG8inVk9YpBwWANPqybgRW5NUXznWZohUx1W1wVPkxW6wJR6ySmjL5ZxNEQ1FFaVNeRw8zrdhSfKTEJA4U",
  "key12": "5Fbac6U5MvYWiHS2rAvAp8RNtVzrqhGR2drpssseFaXA6U599XsRdB8nB2S5YNM1CWomZxB8juibMzDQErFByAeq",
  "key13": "5eTaZB9un5BjGEtVkFzyLxe4Ah5QcvtEch6CgS1GBNXFEb3WfF4Wp3okjjNZMQoDPpYWV52ZaRSXUEyTDF4oH11T",
  "key14": "5ugmVuoTPTuk3pGc3cZHmGeUAYMeeYEmFVkLSduXxB4FYf2ko7q313SEhUuQyAKkt9cuZRrvGuMvsZAkoHy4qr28",
  "key15": "5WvfVpqAk94yQUkgdYyjg23dCJs1NrEFo2hZD9f7KUQUgPodNuFsFAa29t2SrgUrCVtcizUKJXDqSB3UiMXq5w9L",
  "key16": "4CftmuPTdaNpcVqvsNvcFXZhksUkGxJb8is2qsK2ZbFhVKbfarRpKhA6jpkddL3J8v8Dkcs27oSPty7dxnkLAUt4",
  "key17": "2kRSXWFsXPGA6wQebpdZbYuwUJ9ursiKLVNvnEfAy3WjQZucm66hFM2aAwBJbW4oZF4eeahUhNx6KQJozrAFfTGQ",
  "key18": "dxRBhcdjDP7B4eiqx6s1L3FpKcHnWfzhNES5KbgbHwmaV3GM1N3WYbeEycQnxdS5xYvGPaXpnqXCEBg74ueCgqM",
  "key19": "4nYCrtaVHu9SyAJvu7aC3FDQDnMLN8zC58zqe7smEgNvdTUupzmVXPuFArsHDuw5HBXjb6QGVq6N5oEhgprNCFUb",
  "key20": "2i9DGJCk2K8segXYKxQnZ8stkrZDMgAGaGCAddPBt8sBi9ua36V6G6BFseCGBwf6pJ9SLwHf8pDW8QCji8aBU83W",
  "key21": "4gaeJqdyVWZQ9uAb5jzLp4peHVh5N73qREGHADhnKW56sFtMCWmd53m3Lz5pPzLdPZUk3qQCdcmhvkdEQpvxnoeb",
  "key22": "2Himc3eayJh6TFUAnLisuKBtbrijQovJ5XU8HWYgLyJgzNPL2KvkdxNH2hJx1n5qSsNJGQ9tGWVemEs5JBMoNXLA",
  "key23": "3ZD4cuxSQdubvbE8av2bAa7yCFdsnqFBqA1tijqR4g6dspnhSX8RCtsJtkkEVVg2wXx1p6kYQnmocRP4EWmXUfGF",
  "key24": "2Kr3v66my44nzk4e1RmWWgF3bHQrKPYzawveLtArdMznVWEbCrCqF5K5BrFq9phG1Q2DpkMzRFHZxrNBGSA1NgJE",
  "key25": "4JTtySBkiF3eJBy2pPniZyVd7C48kZfwY6amuqoDUSpJPLbDksgowsstLNKLYphndW7TAXpdsjmMvXBG6VFzV9eg",
  "key26": "2fR126CH6XMrDkTCfrFCkEg5abFT8emM4oakBz6gwxsNm5euJNUuerhNr1RHm9M1uTnQaEiKQa2uF5qNBEM2rL64",
  "key27": "5BnMjs7tSHuWw4LZoAoDp9njo2DsGgQeSvdAu7HawZzVUrzNed3WGxq9Sm4hfw3TrnKtJ6D3yd6on6eFLznrZt6T",
  "key28": "5cc9hzkdYe2ux7vXgLDF67jDs9PTziry2Wq6JZ6s4hmD9LAxKa6J3ALYabnXMjkLtiKi42nnUnHBMTb8tAY1ntmK",
  "key29": "5DSk4eKRNRMq4ZNT52c9bf5XbtH51eqKjVuY7J7Vgo4Hr5s1ivcYd1sZXuU8n4o3rLNz3kXGVxr2f4ExV6iscijc",
  "key30": "P3YSXxXL1F2WLPJSKbEGzPRojsPjzZqtPEjj1iu2dnBNj24YHBjcKEGXH4afKyTRxR7hGv2jr5VfVc3n8dwNDFZ",
  "key31": "k4nkmdQRBPg98WMokAYsHgcniDTF1X2eERk5qGZ1zE93RGvNUXTFbavyrUA5wfpLo6XrLFtKCF2AiT2qzi1XPnJ",
  "key32": "5d51fpUwBMkxqBEdSawTV7hA1xadPESXngKrJnruBvox5BcoWh2wcCYYV5AEFzguUTUwLyFUsGBBsJeuALkwot3S",
  "key33": "RJtURThXKdfaMjgSsAWyKbs3HxN37FBpLBY1AemJ8fSZeTXcKgUk7NLvQ5MNDTztQRLg5neitVRvu4LkamSNDo3"
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
