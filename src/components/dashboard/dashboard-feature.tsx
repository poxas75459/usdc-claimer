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
    "5SNZWb3NemPiUXLjVwaYLqbYe3YZ4R9yYY5RDvszpzZ9w666sscU8qML8CbjCaAme3xQ57ABpd4Wq3xMkzkSP9fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VVk4djrh3T93782DHYeKH34J4EhKG1P9BH6cBkhWdod7N7zsxBfj9Yj4kJSkj8qFreDMnvduz8yY8a3XbEeoPQv",
  "key1": "4ySHLS9XVmjoHPgKCbTihdH9doAGfxX9mk7Yx6Es9RkWWfEKpcWe9dDoApwoiLhRygjHgSEygkTQ2FyYrzD1Vab4",
  "key2": "66NAeii1DBfvorV96qg2sxNQKgJHWuijw3cMwdQcmCUR4MSAC8PjwbpL915vhftVp7tRikUMHYnH7sRA2rQsTW95",
  "key3": "4Tq7W1iAis8hmjMbGipmcsTG3bx24f6LTegYfuskDZHRgY3Hzmaqte3RCWPngHkd6MHkKLKK4yhNdo1fsSAUnVds",
  "key4": "5wiYtdrEYFbzSy8AXG4aeDSZk7LaXaDRsk8x1Udq9bEhM6G2j4NvqqLP8gfpu7Z6pAoTsKPxnpiQ7nvwSBvg5wXx",
  "key5": "VDvd3LcwqUYjkLJAQfoc3EtUVkH5mddkPhLywaqSj1xY1rN5nYFX8PcPvnxfVUMzUVv34SYc491oKp6BURraFYW",
  "key6": "4nqhQSSZXnx9fLfJx29xN1NMrkK3mPAhtQgS75yrPB2zEh4RMtnrnmjMY2ve1wp5iyH2afYCSiMCWKQcvaz64Fdw",
  "key7": "4qzNKfZT9G3ropEthj6rAqYnGNHfmP1v5jqgsJgh5ZFX2WnVEvkJokruSsrUVZyVahgvAs5PJgNQuwkBAjfWcNbA",
  "key8": "AjZphc3ecf27hDLNcPJToxhzyexP6KdMSADeYSXPXmAorVhtK1bUUaSyicHWF13W5nHaU997YVAUCcWEvhv1d7S",
  "key9": "2dCndVTEoHUbcHPaxh4VbWE9mtyLtVFSxJzmhzx7vHhyoUPVJZFdyVmp8We8DmSv45TJrBWF2XieBx7peGpoqTxr",
  "key10": "48kgrVUSXGdMMkiB4aJXEGoUjTHvc33E8yvmxBfE1njEd3N6MTRrogzpXW6hqYHSnNT32UbV2z9vkgxnKtXYAJzM",
  "key11": "K3vNnoeLS3yHDRPFkWr1nopGAhuSMk2RW5EJ4xKVvmL6yNqQZNyHebAJUutRgUFEZWxRSxBCho5qmnn6KivtQQt",
  "key12": "3sk1nmPfR536DhScB8K8VJCDzcjzZa3jNEezm3Sz3ASFfyQTe1gv4zC5LaPQKKRz4AwLsvFR2eKnRW7rHCovGgMW",
  "key13": "SDNe5vVz9soFo6CE6vpbY95kCjgPcrMQwBe6kYtAatTC7CPFkbfFoCG5pmni8ZkfGdMztgSw6DVKWtcqDPjagQL",
  "key14": "3UJrGBXQkMMPcbqYDupR2uuLKRP2qvHkhij3gPryuKQWvwRwunsuRMaPEBHHCmREzRhAvC8c9hBtjJiTkDhTgyb3",
  "key15": "39FkcvABsWT31n61EvgUwyhm6wr24pzibzo6B9AuFk7GvzvwPPTTmimZuFRyKR5kbBJhZ3PggJPp3ijCM2kv4hBF",
  "key16": "4mNgAu6L78Eu5pxU79D43yz7aHQQJgdMFGhLYCmxrbQ6kCsxXgezC62DgkUKJbZCAenPJD2CL9Qiuvv1hJfVsYsb",
  "key17": "5GvH8YFPKbwXM1wadSCYLpdpZNaqovBztRteUKqU8fnZTgvFgoMgCMfN5KeBMpqGmKZVJmFPHNbbw6N3eDLvhWsJ",
  "key18": "3ftFEehghmZrcqgEKFrC6Bay8nDmrsnVXDzmtmgXMqL3uFNBGeRA79jUpbZ6Cq4Cas2KYVpuyvcQtg35NyJ3i7Eh",
  "key19": "4fxeMZXVr2VpEMg4D46Eq7bck9ePXxGfhXpMLaPYfc6hHKPhcV8ygncBuCKpGJM5kDVa1ZRUX1FdSqvFg7E52Wqp",
  "key20": "KkyDsn1ShReaRgj48w6U9srXC9Hgr1cFEh3ussB7ijnLSJiL68VaDw1R84WBEJFbRtNvT93aTRLwjoNK97QM5ko",
  "key21": "UTLaaYzet11azp9oxpEuUt5dieE45nfajfSNmksbp1NsKckGDkumVLWpAHVgpZ6HLqit7vAVwVDViEFkJZt3QNj",
  "key22": "Fo9AtzkxXi2sQrTXSUR5xpQYRpbZLZdvqZYa2V7GUpTHZNHedssgqbt9kBVqTakcWTNMd73vW11XuPVW7gmUYqP",
  "key23": "ADha3tzGmvrLwLeeQfpLB1T4EKUbuPhcxYaE4xXVa2HN3gfQBi4riS1cHMjGgrPFEmEgetdBAe1Jb7k1fyYgXGm",
  "key24": "2jPW5zhCuEDcJM7J9k6ocQuubTahPp6okxRYSjXGZMLhtB1WNs35ysq5nhcmZCGMsYADkoptrwrukfg96Y8EJP4m",
  "key25": "vaPTV2hWiuQjqNjHspWn6HdJ9pNRG3mz7vGHFyHdg2TL2Bz9ZrTxG7uNnyddJvhbtQDBGeR9Y5VokvrTu7D5EjA",
  "key26": "5UJu9GauTcAL3YkVEfKDUUpRdSBVGy7doAUFMQafxuf2tD9N2JjdDnPUMWpDK5QaSWwcZJ5LF2jUPQYczQWNJ8YW",
  "key27": "2hthPhXt8qsEYCt6Uu4x6vYSb9CicUdFnvKNWh9B9PjXFQGi1aSjFoLtx3WmXVH1m6nJrt9aLRGKbhRhBh5xQFAW",
  "key28": "SagQSVVkifMp8Lrb6qfSENppLCHCQZdVcELPqYTpc5WLMHbqvEFpKrgugh1cUy32KjemTZNwwFW5xyTYtKV13yC",
  "key29": "3i6CKxPefMfus41E2z4TUqigzwT51nxbzP19ZdksL53p4mstoRz2ef3bVArNyXymREpt5Y4FQ9X1dJ3h5aGUXShi",
  "key30": "5wNPPyKMfazEg8dovWSAgtS7gyY69FeYFTkVdBBsoLUw3x3uLBKBPFAxN4haYP8z7ARLLpAB8RUPDSJmG8yutjab",
  "key31": "5yj3v55bSfiNp8DbAgu2dAL8DTLgPgkasKCKWNR7mcRBCyx1LVpsFjAobfp4xiR35eJbpvRfkmj2qTBkPtwpbPGY",
  "key32": "3QPuomKAcnCEhScenLbNSfqKVCAMFUuSy3jfRmmzaQxcCzczLK7dCLY5PXzuviz6YKvbviYvoeYJwd3MgTrgERyN"
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
