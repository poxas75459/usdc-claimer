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
    "395HP7eBTVmwSaqZr8wboTCb28YZR8SQvi7sxVZV6so7JuS5gEwxDrN3BacS5uHMXNPHDsbsbSW81ybCVj3ge9Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mXMnF69DAnLNYST9ftRF1XXtCUpW4z4veJAionMAAzQ6YH7CAZd4NkVjSevFegG87LWuqBzQdQnZ3D5h4tGCw6",
  "key1": "439n4po1ozicgkEf9wgLEtxdutDWdXp7rkERwneZ8qiActvScb1cdxUunwBMYVYhVAsXwYehTBJgfutkgFDEuhay",
  "key2": "2NG6zoU4XyBxRADAZSYo3tJEbnzDkRY9BNmDq4rTwABGmfeLGXotwQj2UgGAdwURKeFVkkDxxLk4AeGLGauY5RJg",
  "key3": "24fVc2NFWUpKggPsdvoiq4DZ3dnTsrpngBUnBoT7KrK6K7LTZz9JBczBgctL57SXkWkTUivMY8nzAZ5sWfq4PBsJ",
  "key4": "3VgqnoKTJf6nheDyTFjfqiwZGp1L5uih54qnCc9whLZkwFfee3QjQrMFJ6nYEXCcVvWnzwrcmT3G126QxE8P9838",
  "key5": "477u2oUM3WnXN2HtSZCxKetspTYkk2J7DWhoRyVgWhfRfuoer8RyhgAwfFdi5AW2zKaj5tTBZ1k8BLPnqjFBtU7D",
  "key6": "er1ytqynyLPKtyBrYpDJCU2oDmY1GKjXp5VXiryAciN6MxPEeY9v6Lp8pgnc1uwwQJdW3c8BnfAHLP44dmawJuF",
  "key7": "5ZMPcesn326yDgXibAas6fDfXu6Wh32JMzE5FHQnNj7AzvTSGTffKqH9ZBJrmmS5KBqia7vntCqke3isaHH2yq5P",
  "key8": "pjY2amTr7QHb4S3Jjz7ik6UP71GLLw69k5F47tuYepTnQnYyHvQotcrHfbDvcxpf5DEAxYSLAmD7n51CvVMgsvu",
  "key9": "2T1W4d6C2TQPfX6VWqwxeas8LfxwVKHhEGnmxMsywxAFBo8CQukfJ5GeNzVjiSawWhMQKbnP8PX3JAM8XyBScyTu",
  "key10": "8bixfLkV6r8NsudKPyijX8H6S3kVubkksfo7uy29SiJuM35BcfCWZA3iR5SwB5gmkT4NAESD5bkr55HMshLye8U",
  "key11": "4knY2pUTAqoenKUwGWyMRJGJbMpwEuzKy29JrF67fQGC3fKbxUX329h7hZ5hGuDqPwp5TDfSrT7nwtcYvpcVX66X",
  "key12": "2wSjSyC37ca4KVFL889wU86WfqThVUoJ6RdbPG3AXryJnnjruwPxZ4vG8GAeQ8zmoeu2thaQSM3RNxaEhFDrwpEh",
  "key13": "5ySsvh96tob1yymvC9cf3MvrRwzUf6dXrgMwKHi68EFfwYs9j8gBk5V8wGfRGhyBn1ZEnn1FQAjfgdyxJKqKTrxZ",
  "key14": "4HNHXvMQhXuXgxEHUna4wTMpu7rAsdvBsMhiyZtuU9z8JygsuoDvNN4UdMseTmGLLoUFqK9Y8g8GBpwQPH2vciqw",
  "key15": "2nMjLVyWf2SefyKNLMHczwqs41mJq1PsXAC5yqqW3E5kXrJ7et9WEyJz4GfLBZ5nByjGprBgC15TdBoFCWNJTS3d",
  "key16": "2T5KDtj72QUV3tUMNzUZp1Pt239cHkhiduc3NGy4YmzD1hQd6im3PrWbrGkFFe824izKLPy9EGyEkimABCaSBzgv",
  "key17": "3tDtPLuWTJnwZUNCW9ZdvbEtesHwUWX3uq52MyynFYXuKtXq67A3ZggDkMrveRb2UfN98cc1wcVMRdERkW7FQMvD",
  "key18": "5pEqz9YwN7quLSnaY3vfR3um2hKPF5hizCJ65sas39NkiU67atT2qMkKNoi8oiMo6YF6CoWTGdTKLA2FZfi5Dc1L",
  "key19": "28rXZEBeU79js1Wzq3ui6KC2GXM7rZkwZmq6uAcswPejbnuuPF7HifvpyP4bGFZzs4iFUhrv7FLiBq6Jgru3qMni",
  "key20": "EbtYpS7wpABgMWPDp9k8ZWwBti9eoLdVvBz5zP9vRQEsRF5ayRQjiRcpF7aXytiQdJ9Kwp1ZrBLUbabqg5R8KgE",
  "key21": "5gjsDKQJVT9bpjyyWiRM6aEYxshirwrMUsSs5LmUUGnpb3TL77pQ98ZoyTkuiFeZqEMFbpSWgUgrmUsMinjMA4v6",
  "key22": "5tuscCLqaWJ6xLR6AHhYRpwGr87L8obXqPe8uy9xKWxVurdWa6apNKYm2sV6kgoqJU3CNny8oiSMuPnUu6BywHUV",
  "key23": "oRqm4UqQFGJ1tJ3YHSgcK2AbK5pRPUNWi9SCYccMeFXqXKmq8QuTXXSBcPkapyi5r6iMnKZC1bnvwzK6TDVfSTH",
  "key24": "2btRZcAt81E1idSV6gZVtMDXkbSKhkuy8wxMBbNCEP7bCgwmTZWPVYxFCy8mStmnzJoNYNZmgt7fknkqrY27HoME",
  "key25": "5C3KgbwtRmBVNRkh2CjLa5zEPVssouWM8jHbq26yAzsJTDRP7NBFuATBbwRnLEcMQ1gttLHurYB6GhmT1Wa1Vqbt",
  "key26": "5AXVjAbwHEhn2QeZZbTZCzL4EB7iTeNCXx7WkBNbsDibiM7w8p7y6u8spioH1XWNYZ6vTgK29ukq7uRpinjBk3Lm",
  "key27": "57Cm55ABgxoEizKpGYfocJC24jaq4mPZrXgW2sELp1HsZfquJdWsP88ndpMbr53G53xsb8dcNTmvzSJmDpCDXaCd",
  "key28": "4RQYUKTTM1PjxUF1QEdDzKN9nxVncSekAE4aVGkuwaCdcFJtaGE42gMFpoF4kwFnabXSF6MJ92VmAhtNVbXvVesB",
  "key29": "GBDrjiB2CeE8wNebqMR9EW2CPgHi99P3oFFyW5vPEmnb8cGtyrbv4nbmMT3YRdQ5WAPuWeqvgyCWnQAz3RSVNKQ",
  "key30": "3bQRZossn5DvQRsRrBKbpUdfhJvL3m1y2mQQBhAdakTxaJR56rPZdnvHwioeH2XTejwW2bnXnKukUyuUntA7Veoq",
  "key31": "dBijYSs94mu3miYXrK3DyUGm3LyptXQMJACkZigPfKNyN1aQYx7iALFrJHi7pGWjxkS9LspymUgMwvNUrhhNjXw",
  "key32": "jYKH3W8UfLB6qJxSK5K3zN1gwXq5fr4CSN8C3t5EVf9etqdzm5xnoQxR7SYWuoDDxQMWJFZy1cBziwHVYYUFgFP",
  "key33": "5ZFpUkr9NUb9tAoh4r63qGtgeYwHoSCMiZP2SyWQejuogfCYYhpCq9ic23DRGyghBVMCy5DVczpumqTvpwC2wgyy",
  "key34": "5x9yHe1K485EYxuW9NHEoEu2tiyrAkmCn23hVghiaEAnsF8AC9fWDnmmJeQ97wnahS7L7t9PSQAU61BP3vaMU19e",
  "key35": "4QtBZoMmKuyV8WWh6QVPnt9giVYb6iNwvKerHiQiRchRVFRjJH4FuMUUCVUcxWUiyBTgxCR4KAhH5WF4Z7v7qBTy",
  "key36": "5Wy18t3wcYUytU1K5eGY7w4hEtQjEBZpEyJX5BjapKM2vaxyGQzGVFWaL5gMEUM9kTESUpJaZTyz1H1y22PYYyRj",
  "key37": "5widGFVEf5UHUay71TJwRU8ULezFhnBsfXDXKXNoy4UVNqErfEEewXuzrpDL5pLdzx1qWNZ64Cq8T3ERGLHu86sh",
  "key38": "4SzVvmDUcxLWnUCYK7wzHsubLcqruuPpELV8tQZs8kdinrrgoH2wse2BYGCgs4PotN74bqT9R2dzZVUPHAUzjVbc",
  "key39": "RC98KUk23QyyQx55m6edVPbPa13FaPG5TcTAde82N4MSZVmFoMpPwt1UCoanxhzR5DqV5dhjnPeAmp5nu8MS39r",
  "key40": "5SuakmhXyyReHHf8nH4Sh1KofBU2XzNt7cikmNq7aXTd7BYGjt9Sf4scNaM3svq3E6QhcsCHMZq3zdhNS9Dp9j9s",
  "key41": "4AfyG2Ra4aEwNDPcRogebAoBMmZ4G9FHLvH41BXAF5X2K5vQkigjWQLZFSV52oXzx2TmH2zuEmC9sAbiJEuiSVnr",
  "key42": "5f6teqkCiP7rmi5gYEjNVDNsLTjDhJwUMMnGqyHSSJewid8HgNQCCw7S7NYF3dJtknEZJqVaPvoh7xw6Eh5SCp9P"
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
