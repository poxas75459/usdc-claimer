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
    "LTHU9czUCrVM8mkJ1t1MaRTFcJ4U43ryrsy1wt5UuJFf9P6ugL6BbjB5UR9FaiuUhv3WxsLVTV21wLZccQzVxSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7sNX7iCNPmTydK2TyaumYcPzy5ejfimtDu5mCqumw7EWWvo2YHKCL4SUZ6T3sUJUvaUT5K1UZXhHXdfxg1wZun",
  "key1": "uiGrGpmKhMCzJomcavMUkUkJLJrDasj8FYuWtfQinEHYaPoqVahZ4qPTbsgxy3Axmts6kEsuW5uh5PpKCMnvvFy",
  "key2": "5jhxeSM1v1yK2opcMSLi7GxWA643zXLeCBSPRUvxmce247tgMLwNgfcm6sXpXR2JvNmJdGTqpWq5nwymDj7jgE5m",
  "key3": "4DoDixcza5qPTEsaHqQ627crwGeH1F7KvTFgUP58SK4wLwC3qicPxUURoUnT6exK5S2QEtynXueQxbHCjcv39daR",
  "key4": "2wNwBKpTampHXR6saAV4fmTtAEwy5HPipLVrKkJ3BaRsDuXSSdMGkm6kdpgQEAXCkoRr3XjcKkUWWTFuD6VQEuuA",
  "key5": "37L6qmvqi7er6mvF9ps3MjTpW1q4n6KkPqmeUMa7RfUyxW2zKZtnRXjBy9M8NQWzmFoT3fpjap12D9pmBYmxEmNG",
  "key6": "5fzqyeBToCVoAVJmogLeVoXNMc7EiEJSrTmQcRsSJtV7Ab3C8YRotL7KRXGqQBUZSa4A6Y1H1dKvERsTNPDLi7zr",
  "key7": "3VqRRjLJGmXXcUsfTvLkCh8yCZVha4j6wQM4XSMXu8CAPZsSYeyRiFkHtQMTE5Pdrm3mjN4wpEV5qc5NyouoaFQD",
  "key8": "2s4YRagpaiHjN34qhR4eze2XmRiGR5P84p3yCUDCyRJ1KvK8JhXhd4c5vQhsV4xAfR3zPsJNUdkoLreRhQaPQrw2",
  "key9": "48hCX8cny41wo9uFdaQLtzNFqrUi3e9Zt9EmWY8bjBVhUtqTdvT7MLuN9vyrYfNgcnbNMHZnAvQZuJkwU5QNjm9u",
  "key10": "3i32UP4WpZmoEH6dWbpbUSkERG2MQwJvXXcmS1PR3e9QUCiL4AhjgzUr2fsGytSUNZ6QVwYTwX38VRMYPSqgCFbS",
  "key11": "KADMQdHimX2ZviDDPcMh7UT6YBKynQPRZeJHon6ajHiRw2oXHvFHVX1SSYBZrK9MUeq3CbMvxWKFcjDHEGww29V",
  "key12": "3y2JSeGkeapKHKjDdf9mSa1BQZmoEbwAAi2cRzcbb5zb9wHWLHJUci41tTPabQsRBmcrxKpauHuFa9DBUeAAdPZY",
  "key13": "4s8QtwLeUibxSomyoe61dq736CRxuvmavmfofRdPG8DrwPXigEyyK2zLJiRwrSHufRqkfmBfG7JW46PQwTuTVFmb",
  "key14": "g9wHg3XtMkpR9QfUArPKXnZfuEGQfk5fkFcfi1XWF2vr9RprtsNGNxX5D1tX1GPtdSniKENmgKwWB7cBivX4gir",
  "key15": "4gkxBsuSKSsXU7Hi3iMD3xiCgLAjwcySu8uxT9RrDPGqMbthKYePbaajq8KMKLaYaKQBQZx6f7TTpgEeHCJ5EM8o",
  "key16": "3QeUzr9FkMDB1K57vdnCTTDqs8futxWuS6bAUTWRuGyLZdNiaurYknPgaDfKtKA8sRpXChVJnG8nZyiDrznxAC7V",
  "key17": "4xtmpqW2wMThd3FJvAaxdTChaVrj2oGa2MYh4hU8T35DG3re9wXuVgSDnzJzvrUwGbx6u6tf4tpwhDBVPegxLQAS",
  "key18": "5gYMRu77GDmMLpbLH8YHU8gkyHg1ZGdvQKjxJ2u4QjPvr1KdnpZrnTbP8tvaqGMWHeeiPGZE4zghubnFWoPobuTi",
  "key19": "3BpSMBdkRdBaWQaup3hnGN4LebJKgwnhuGHsxbA2MADEnUn45yium5fLWic4hBJEsVbHvpYfNrfdkJbKFn9CL6n5",
  "key20": "5iv5d19g1wgByzPy79uPjHSyoyGT3AbZCPeKpA7pcK6SMRmR6SP8usvFoz2zyxBLtFe6C2RkKUtQ4zBnxrmncFpf",
  "key21": "3PJmZTYTZ3j8XmSnsEnEDuqoFsv1sfHHaL5rrxBUdeBVEANiDKN2maTMD3f1Y6WbJUwFNEsUbb4EqyTLhKDUq1wZ",
  "key22": "21Jd1VYeueM2EbNLyJDdGuN9offTaDbmgUzco4fj12rCsqWC28pdhvx686Q7Cc7d3ASmXRy8YbR6WPVmQTaf8ELp",
  "key23": "ZTkT5oW8PkcJLX3Hp2g4PTTz1t1ux1vAfdhUtf4ErVMbCNMasfBpyjVEqMdctvn3WYyZGxgVc2WTJHrX9VLmw2j",
  "key24": "35YmZc5CQDQVk6aLgZXK7r5QNsTLg7vq3CmDBmtZ6RmS8LCtjfCqhsibPjEbbyzsVgD5AXcZJQRk1mKcUsbjH7H7",
  "key25": "56fXAHqykHWPcytqsV4g2hzzYK2P3SwCuXV9YYdsW4iVoq1pTh5jkMMjXLixcGarCxbXLFKm7rZ81Tocyaz9SvrA",
  "key26": "2P3v6FwhZKK2fBCJtnw4RLSGGuXtZRhgPN2Q5evEw1mk2QsqRE2inDx8f6KYRBkL1ktiZfnyV1481tDmxEQ8KmvD",
  "key27": "36hb9BN4GPvv3v9hgfwaFnrsxfuBuFdyhDpJuwm99WEWtNuwQDgjudg5UESbZNyCoCZUdrrfBuCzKqACG573nDtb",
  "key28": "jvPmVBjH1fUDstVBQuYis8Wekoa84j7CqKibarc2mVrNqrHTgJrgW1tvUKzyXQHCNLyqxaqHwB9dLAmmJManPKi",
  "key29": "5AFvvmJQiQrJK5hKDBUM53yCCnLXT94YNJNNNXnCrhmqzkvKWkzYc8e783L3yqM97ijV1tegGdHYsR5jQGXDJbKH",
  "key30": "4LbvRGBAvfr12CjrwGY3hxAkbmfkvTTwF9cLtu2yL9cJMHCEo2xXEVGZu84xWoCws2NVgM1JBW18VVQGndRFcRRi",
  "key31": "4wmteThDKkCbeQRkyrWTGHBbSQqtswYgUY4XVzBSxNrFAscW7WaYD4bHNsfR5wKrMF4kMHpYbwd7A2s77Q3Uhm3E",
  "key32": "3iNGVi1feQQKz46tXR2jjb22LKFq74P5bb5AadMLZM48nfq8HkKUG3Fwdtra5Ew3nrdKDNfH4RqyXnP2iEdTsUqF",
  "key33": "2LVf8Y7ajKge7C4YLkBVBtGPFyqcdaN4hYZsTL5wqjxD9odfs1yXGHW1Pde9U2ZcYFF6opsKKEXtyZUS97AE3D7U",
  "key34": "3Lp4HrPkQh8cAW9FrnsyCZzMrA37VvgFs6CVmPkCLdkGJmdsf83FBLf8VLtdrQGZaRgj24fGyReRMN9Tt51u4thQ",
  "key35": "2V2rreJrdMrWr5uJuJxv47tCgWgQ4cJkn4MYi7T3hhteqCXG4J9ZR98pgNABAQAyeUPJtdkPXugnPW3N2C9mWn4C",
  "key36": "qgw5BPTitMCFDRekrKg1w4Spr9qqYqy2X2SuqNakBVe8S9LvvDb2d8u7duuk14DCSZZgBwvCtF5695rfqmq3ow9",
  "key37": "2CGgaD9v5gf7SJeZPtgN6UhrMHkQ3sEB4dZwWSbFwSVZzqGYhwuiVz9qgLyXuLffDCeDkgyUAnvPfxeQazabVGp6",
  "key38": "3dPDYXrKuCAxcLL1ctawdPb3xoN2jLvcfd4oyhgFRB65GX3sbDJPjcEpciGLaGXbyPwwcZ2Kgt4bxuhFFGPq7WMn",
  "key39": "3cg2wvnwwLBH2DiLx1aTSzeHpg4nLqwXcgXAxpQBHXHHNxPNhHCR5fUUDS7p1Pa1hEnMAGLjx7L81E8SopbUYZQh",
  "key40": "121huQVi8GxMuP1UoRS6cpZSVGFJca5aSxhjawdexso1urtRUEe7K3wMx1JDEoMyXw1AqfWnmDEGmmbm6Un9DVGw",
  "key41": "64VzJM4vhLMu7kYRmhYkFXW1zN9QUoYaXTwsKijy9BEWy4e6euh3RLnia8QCPdWEHtQsYCV3n9wH72iLkgQJVzhx"
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
