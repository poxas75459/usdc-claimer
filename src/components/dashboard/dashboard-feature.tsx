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
    "V9mmhXNMZneMcCjAP4me65wCFsmiLneMh51uQxo2dg3MkuJtCJSf1wBkTWe4fkLJ3dMjKyptoMP5S2VP1PMJEMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FTZcHDvveqPsFcLXzFcsDBUFvGbUH6ZkijNPwfZGpaE5uDCeTkpYDJeb6iDXyBpkHBhknkT9Q6LQCSbTR5zmgh5",
  "key1": "2G6wKEuSvzDHRGRyzuCNkG133GQv1zmiqbvkVFb2X3FNDQ8cAP1xFqsL5meW5BU6DPTiWcf2rQDBLRLc4iK1m8gt",
  "key2": "2bRs16jXHgg9rmXEPGSqpCs7MMhdh1JQcy9YRCpxyaJEK1uwTvoyrCJBtuTiue3ZtVTzeAZ7ibXXmgYavQkvrEqj",
  "key3": "4323rW5xPsNRw1JsVEt8mxTdxDfoknDP3z1V4ss55327up4WUoM4Bp87dEYYdyqrtTvgaJ3zp8EQPmPFPPh9kVre",
  "key4": "3jtzjXq9jGAMxdqxUwRgs7DDDvyAhxWNfhfKthf6mEVC2nS2rCbmTyFFNqF2Anmn9qv5a4VLBo1RXLx8Xs3vKM8k",
  "key5": "zRxxLQKhsoQuCZPC1eom9ZuKpKiNcezbYbvzcmPR7AKeN3omLBMTG2tCVs8uXiCpwA6Wth9D3vK5JZb5aX7ZAyP",
  "key6": "2sTyQyqwCDQrYkoVriRCJ89iVcP9sqBmZNCaxL8AujTQKYCga8M9796HZRNVCJZFvQve9DcbtfBjKuh8Bb1a79H7",
  "key7": "23YTDYNwC5ygtxuEMh24qbPiQDCMuQia2CEt9RhsiBSyLzZRzQsj3uTnovErQTPXDQmQtVhwDWYJQ3Kvg8ycyrqT",
  "key8": "F1FGmfD5iDwwz1exCfMdwmCvkHrPtWTAtyaPiaCoQG7nea8tkZjxbmGZjhSrvJokJKL8CgSWR6dvFeS5YLvFE7T",
  "key9": "4E4adLDsTHtX4fVmwi4ixAGaCNDa7XkUnPCHrCNYQZ9eGBhiuXPdYPPBxxHXTA9zWenkkAFypw6LKh3sGE5yeVAE",
  "key10": "2zPfcKf5ZDm42bjobCQxp4mfGmr7UxjjnH5WU1Vs6MpCfyn74nUcEoxWCzr8v11He3ZuirwZLZnNuo9xk7Fq5PzJ",
  "key11": "3Le5TCGwzSF4qdXvqA1952VDQsHqxPQ5QMxEi1PeY9BCZLe1Fyz5APFjuWu1MocbMnCXqpRv1NGYUCXRPF1fR8Me",
  "key12": "5732ziLipKVnrhv67KzbKDuvChrHWfFPrSb9ZEiR85XYFkmXj7u4gHVzFNgGViJUC8ZDTBKCGhdHTTq1N1rSyP3",
  "key13": "4AoPpFwccXgg7uATq74cSDo1QRfsWfb8SwAMXzwVcyUXqVRZdnDMkQo6AZgfcxkWUg1Xny1We7diN6Srp22kU8pT",
  "key14": "3L6KHqF7jpDuoFHiBJxkbt2fsivs5B8vaqc3fKrZov7wKw7xB8XKYnLM5KJNhiRwgfRJxWifzCf9uweFDXohmLUo",
  "key15": "QXMbxhShuCNGZ9CgCj5jVGGqfqD2chTxAufaQ6ZWzBzuc9cd8AjeM4dR1KtHxLYu1FQk4eZQDGWmpJmTmBQTkkJ",
  "key16": "3YLCL9tyMF5jA557GFSMTmBfZHNVVT4cY68eq8yjm3h8Lu7iC6iA9J4naHqJ2c1znwSeKPqdUwzSLQXnEgFV17Bx",
  "key17": "2RNrshv8ayH6PuxSNMNqdQyA6TAYuqDi6QwHbGktmgVs2oV61iNfGc473V25xsAA1M1qC9B8dEeReDtg5i2baSyB",
  "key18": "2dDwrptSLj9ky1RhQisfx7jSxv58dty2iATiHw44MfACB4ipbfL9o1ehYHud7CYKkLC1vChDSy2fUfnLAxD1aWLX",
  "key19": "4tHitxx4w31JrxQjVkWLe47gheZqPNQxTZTBC37gstNkm8tcadsstBD3CVgJUcMbvTy6s46HFciWPSQFS3gMQSNS",
  "key20": "5LxsAe8Xc1yY5FiehQmh3TsHU1jxKDBVtjeq4fmynfUYLYecH21JqenfjZfntTFdVhg1uow1NAjoh8Vo1ZcdFnB1",
  "key21": "5Y6Tq1beMPctADFfPNNubizDGXSMnwymDribFzE9TccxZaAFzqke7RQLBBxj3BgfZqodKhvF8xL4bsqo3ZHQHDvX",
  "key22": "56FFZxBKo1JGTWgXYtVDJ5fN91m5TnyfaZks6UqLBk5P1NKzGYEX1GpnxKCjvRbKtZmP7amNhzDzxhA5bYbj64py",
  "key23": "2tqYiV2B1Q5GvpmqnhNbFStZDYrz7dqLsa6kZDR2bzctmTGBefsWLFk5mfJVnKH39AyGt6HjT7wU3upPUPJ7covo",
  "key24": "5qAibj7u7KAgvG1hmuvpxWCeFL6q9cJgQHKU7GA1iM5S8M7JmcKZfK3zSwcqxsm23RYwFhWoBWJyBriVmpJrdwC6",
  "key25": "5vSVXpETtraKdJVhBJTH3bk423cRPhoZ618yyvP3mFxjcCarArJzN1s8xhVFKBiJmFeEcKoyi4rAoUtioEiN2oBq",
  "key26": "3ikrJ2n18QVFMutWTS9QwwXRsQUABpRy4aH9TzMFn587aTjDXCxxBF5ZbKhXDeLE17c9vTXtLPmzL27ETz4omynY",
  "key27": "2AdL619pxtfzD6NrNPmTj1Nvyfjh1sauCuYazcXsycsvCQeKZ1USome2Rj5ZMqMUZWM2pwuQwDyU3c2vjrzz7qY6",
  "key28": "ixHJu3dReAJuDDFsoiGy9RhTi68zxWb6mMxVLNMjz5hHxs6Qifg9dM5CtpkR3BMSqs14bUGQW5b6qN4XfqWsxQr",
  "key29": "iotwQbQwz3stgYrKaGnX95ZENdVUzMxw3z3BQH8wrPyYVS6NGiHqTbiAko6KkmrXS3aCpQKJR3XNPFDsamw4azW",
  "key30": "cM8UMt4ZN1WM4fZ4jjxHN3sb6wohHmcWMrv1U4gthsQAVDPbQ2DNnjSvHeMPXY9SPxf4J8kJB6JnMPM1KRkvisF",
  "key31": "2QHokhfxCVDFT8QMsP32vck6GxgXdnZPEggjwMs1JXTW6rjrTzjHR2ayVYvbeUCRytr9uN1LdHTgrbeAMXqV7Hyf",
  "key32": "51E8nHznnQCEBRapFLanKCptnRWpo9FvzppcovTbumxWg7MZ5f4i2GtFgWmsuKWMa1soCX3Tsxko1bARhwJnh3J9",
  "key33": "5CsfYx8ecdy7fAWdQ2RQMaRiyoyX1CBAk8AifCnjhVC4puAmbBFbFgMSHTh6AscQ6jtvcRmn8wAxEKrTsp5vcuYf",
  "key34": "8cbcHRoSXxyBa7UPxd6uSxoDwAr4tAcSZ3qPo46u9p2CYWKKXA3TebLe3tyvkvwcCzUbjwDg3LpmsJJv1gGxDBn",
  "key35": "ut3tgBeTU8994jsa56iWxRm9DAwLqu8wgvALHznHsnEQctYAgA6aEvSHnrJYSt1gaeTM3bu6A5Ho8wAHHP2Ay6W",
  "key36": "2VzNPgHa5UhjnwLBbNJLnQQchxD4JNVU6TMu2GwUPTUo9XkLY4Q3pnssLrEghuKEzMqaika5piW7jTu8fCxvhBd9",
  "key37": "4XfwJckW2zkopEd3nX2eTzB5aimD3bmP2PzjKh1VsAudbQtBAs3ZnNaqAuNvXXPkQHhxesB9a9oxqGrhoSmAx1wC",
  "key38": "389UFKejmfw5XQDndxE8z1WjngGPfCm8CfDDvXbZESukUe91Yv2NR9ENTT9vvKEW1rfE8kpSYNBhMo28d2i6Q1wa",
  "key39": "4TYtxjckbY9iUgXcaG844p5qMFUaYfJo5YQeQfkHz7r1v3woMwwhmCjAvYRXJ1tJMAzTLqmk8W8WB6BbFDkPfn2A",
  "key40": "3BB9kpPpx2PCAfgHUmy9MCTXVieYM6QmWVCk83b7jZFCDDDWeNhEGcKZGemsyNRKBYtWXeT4QANStX8VunxvFeTr",
  "key41": "21ZZzw1TFaXHgFUEY2j9XCkYmvGcW4GrpyK6Wk76jJwbqJtjdfq5LK3H9hGXrbTVBK43vH4SJgYP46S1zhpAuwYX",
  "key42": "FvjrS9pf1tx2S2vLBNPeYgWndXyX44EoUuBWuarfnrjoKtJq5fwRMJRSDMDHirWB5TtTowgnvHGaoD7JgL8Y3z5",
  "key43": "49TUM2bH8Qwsk9YtMMkq4BXCyXhDPYneM2hZQbgEBCTdtHDvAiRcw9fLkW9LNCs4vJJjnW9oj3Je2mF9ZAWcvTmX",
  "key44": "5Di7gJV4vvSupfcnbXdi1fur7NuFWE8BEu1sUj76emuTs41DwndyukdjMimTFeEBc53vSsQHMTH5HUrAQEPnNAPd",
  "key45": "2fvnSAi3s2RHg4MCqrxX2Fj8WUQxuaWHt5rvWxYv6N4My1wefsKHZvi3HSEkTiFT2sVgfyZWDjbhR3rPTDg32eX",
  "key46": "4qHxYdxoo1B5skzyf14gMsQ6S1iQRGrL815Q8N9em1EJBUbkaitHFc4XoGAa57am7i2oW8Di9eLQgdRv25jwNgRQ",
  "key47": "5PcY7GmxbcEr2hxSgcBBCdi5C8qLK9aVe1XWupZ1SJhM5Tbour4CqBCsQAfFGf5YbQEed3KbZybHEwWZqz4QKEFs",
  "key48": "5qmum4Fy6RxcoJJQh3BRXT3rdpf3wPRPVY4btpHQ5KFKzyadLWL2Fm5D1wKPNK6UqxGdR6sCpGH5TmRrYWBum9JW",
  "key49": "3SWHjEPtQbdmSxjgxaZJeNPYDbCeMgq5vXsvH1uiR2ogQCpVeJXG7csTCKr3Gs81brZzfW1kwbmkPq3JPjEJMWds"
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
