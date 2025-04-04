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
    "4mJfj63PMaV57LspV1FBSFhqr8mLX9RScWtQHvCkZD49VrpYYEsKm7Zq2p1nxKgZXczdtjNiDwBRfw9Eo8Pe9bWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ayASjQPtzuxN2tzt7X5mq8ge8TfpPZ4FzWVavY8peXegqu5mGnJx81emteXW4V7TycgPc15CUrwSH1BAA8Gq7oh",
  "key1": "5EsVZ1fPnCvwLAoPtmYhThX3iFT11PjWSm8FrBDYhbWjGPnAWZQBBLrNQUwya5ceX849YuStu7afGzG1b2Mk6PFH",
  "key2": "3X4nnerUGCBEsotNBsbphJBVMVLq5FWHCR5du1PwELPgDeJfT1yB8uRm3jUnrzfnVja4S847w3jsxm2cedooijxu",
  "key3": "5gf5LHDXo7M9LqFgXRfjxNt6P1QYCgrC8XNRWz8XXEHfLG17wDVktVCEqwYUiGGjschkYQ5rBhftmXvpYw3NoDoJ",
  "key4": "4oRnHGkNrA6CKYwyUndtMwpRuGJxtVzQoi3ebgvm3AFJ5Z7kBEmvSh36neyY7HDXjWSgcPdZoTP1gwgfv7M3h6eQ",
  "key5": "5xFdmDvau4cVXVmbe7jbu9UAKuXmDi7dHaP1EDN2curf5w3SQ9soZ1daGsgJGLJKSjxYEfbL7yRTYHoPawMFkkoE",
  "key6": "4CzFYpvTzvWqPiEJMCfQ7yoKohrFwsxRukhvA9gbUq1H9YXjFFXQZGEinZ8sYAfSBvdXKrK1gUqXkLJUEjyjStq5",
  "key7": "4UZudaQwfeiqdKrenKqupqZnoYhb6z2L19iMefRTq8yJAevugH9TKeRzXZQi43ncji7HEg4uLaKSqeU9LtmJsaGZ",
  "key8": "3yq67nNhkGgxhtyQQ65FmkwCZiKgDgR6jfPfmTexM7PnuQgEjK9AniPpaRyzc4QFwCpSDJMCXipBXQv1mdwCD26f",
  "key9": "VMTfN5ue4mXZv6CnfXvzawfNiLM9SfGtESFgS3fWhVVAAZc2jjBSaukHD4CAhxodw7yBSSvcLv1bka4QZGwL1a9",
  "key10": "PtJbZB638PzzWpYMKhzupj8ii2YTjvSESAYaZact3UAQSpSLTcJtqX7hMPaEHNp7WmKqReXC1kVKHnZsAmsJ8vc",
  "key11": "o6tB1RbRmo2mF9njD5rqbnZPfuWiNyZMR7AiWskZHcXgLdSoASrnmp74K9VhZvFwbAvV4jtdWH5hkZzXoBmwXjQ",
  "key12": "5iRq8neHf5fiEd5tQbiTFCx2icAen6XC8wZ8oFQMhshjzACDtq4iPFrM1NYZJ1gkA5spWehT1Qvg5uMX9WjpeWfC",
  "key13": "t2x3FdWGJDXNcScTHXraezPfzV62B9CfQhTZCpf891VQ1zKKtkbVeZvDmfVwu52wTyruRdb9pXdv1TQYpEKDxEf",
  "key14": "5tEA7QkQK2Z7ZApbGr1Mf8TjXHavpddvJ8XLwGe71eGywtuMx3dz7KQj8txt5orBpAXi9ETD4nx2L7BKwVH3emwB",
  "key15": "3Ehyn5CRK9oVU4FjLupJpMoSmgqaiJuUSYxciLECNov1ZeG5PVga4NJi32eMjMA334RTcS5SuXbPtVDMMmKmYY2Y",
  "key16": "4zN1ejR63a5Mivc5L27HPHx9mcagYKoVWH375tUkomMiiCcmpfhWFCCPsAcX6CGePto6cP5zyqGk5pShWoZNiM6G",
  "key17": "4pvBeorrBXMnpbaQZJZVgy5VHbUdPiKM8DNzVaDB5pVFPBXhZNy4AJerRyeuiBqSUUJAEDuMetoPEtugjycZ8qZ3",
  "key18": "2zGqTVBzn5oLxXdcMueBXdrF3SodGak1Cr76ktYW5Qgm4b23W5frwFAbe9TTvEA4MvzTphpJvebdxNkjZXfNrFY8",
  "key19": "34Uy4QcBSzQh8RUyeZuYv3uVTztW4uWKtGyS6KS1E3DKvXh2JxHe1epRYGHMbDwCCYV3SGLMhA9o4pugMtfYQFcM",
  "key20": "246PTsBcK3JVL6hKjJu7LtDqBwZuD8U5Km6b8PQgetKyaVx8ykMhLpFcv3SNo25xacC3uRdw7BWNBEvw17F2tNGZ",
  "key21": "5b9VHoUwK6ZM7V2QeXoYsrLf1W4xuTJekC3Q674u12cFzhRq1jcXMgM7an9cpnJ6vn2aLSJvsb6pUfKPrrg1x5r5",
  "key22": "2wmpLUS9ifDYYf4UE8PPto8XtShXex8R7TUKVPPTMs47yA7D1UEdqDMxeAP5aDwueaPsdUvsGbraLA2MWN4smAfb",
  "key23": "ZuHagnoTb2m82jkSjw1FRvWPpLJMPC9ZRNgnesg3rRvbkWKFUcPAgDZaFaVKUyMvTbRULfjrboiP2fehzRuXG1d",
  "key24": "5N4XECD7gTwfQNNG9Kewj4PqAAUbL1LT1q9XzEVanvKVibd4DJAFeqM4VskATjqgefaR92xLLuk4fmuidLCwwUss",
  "key25": "4Zxp1kjnN1sWxxZxnoU6hChYgC5zXmV7mEgqFhHm5ZmdXKPBMB4UAKSmesDschK9aBa6KKiWH9d7sq5JnmmqQBta",
  "key26": "2Xo9dfuCcbjpoiHR8TrqtnKjcfvqJezYz3rMvXsbQwEMH8i9zyt73VWBXZEwkEASPCW6rRxSn4CCtLTPSK9iXL5y",
  "key27": "FUEQcBCKgs2QkwgJ5TarvUWKoMbKRjtsYKhvErkLDs78gUggh2pR2NaMibcbptEaktHA3psAzDevMBHSygjwSwd",
  "key28": "vc1B9yZLEUrmSMv6jmuzu4aLdXvvrnuB8mPAi9ErakipddtURB9UTXeA12rL33KRB3v4JNZws3njKzQmEC6QR5K",
  "key29": "3AdovFiaCbbzAgZvWD6iiHw9GgGPQydbwrJ3ouDrEcXKCrT9bovwPKrc44ySUDkP3nkgChYb23KcH7zEcS4yKkyE",
  "key30": "3PCM1ftakB3bZGr5z96K6XAJ4YBvao9Ufu8xZciewqu2ewUBNeVjaoF2Ag4pbsytPvU6Fn8cBm6tHWgwjBotyLSM",
  "key31": "4hChJwyve55xJr4uWKbHbZFtN7HxH6tM6rDiG3rr1LQiR7u4M9JhK4N3J4koiXsjCmqEL1Lukb8yUysdL3qgifMt",
  "key32": "43NaWTnjkpqbwdyQfhrJHtBoP3s17esMrMToDe4irwKd791ogNZEHWPcekQBYxtDyxfqBNM8YTqGt4YKeepHRiQs",
  "key33": "3R3RTRSmdPeFs6T4CUZCWGnTUB3DYtM8gbzfdfXzT4rZ49FPGCYUk3NLRpF3stCQ6WA1nVVqRZ1FisVhBbGPFkNA",
  "key34": "5JkKythEPUMXDPNNyqqkH8VyiekVMdK1JSi5Y82u6fmvf7tXtQ8g8ApBmsKBFe7XNxVzvZehzsbcMxzkXk4oMSZK",
  "key35": "5wD4BnpV99giaABVDFFyvALGEo7XDsqaXysBb9zAZpAaR4PzVUWL8FWxxHveHVXtDK51kARtRNMqvLGkFnaxNftg",
  "key36": "51t7bmU8Yivhj4bF1zR7wE8NFzvd3f2PgVAWjxjGakXPjxWFK4sKrjQpoCPDgER3RgVrJYoQgod9LyK3RXVBypCA",
  "key37": "2Tu7Qii3YUVnyrv6ZAm9zh4Xju15dWaBU1BsY7a9pgyxjy7bD2sXSWBqBRTZrorrYFigsh5qN8uYVhFFmWFnKQm",
  "key38": "4ZySCoEA9VtTREs6me5jA3e7HD58LkWPoqGZBVGqcfQK35KPfNfeLUR8dP8NWGfvmxj18Fy7ipWWrUHxT64skEeQ",
  "key39": "4Jh5nEhygxUWGd5AXcai9KUQpYeqdzwPYjpgz9iLib3wLcpK5VRoFPEjYUrepQfbZQn7mP8Q7A9MHtqixLPYoWEH",
  "key40": "3mMBFN2iVYAiYdWU6gk2Fhwd1dMwWJ9j7CijKVGkUtd4tnfBXGzh4cbyraxVU1U3e5KtNAjXzgKarcBptANFj3ou",
  "key41": "4PFYSJFjuhoft1H3REgczacLLTJEgwJ8iPNQTbepAsB2S1vaf6C9Byb3pEA5pan4j1rPVs6x5pfns9ft8gcvjyzs",
  "key42": "3vFKL3W5yCbt696wr7f1tvS6x5q95hM2fqHZaUz64AcnRgrZb9MwLAjBtJrbNLiTJpaYJQPR7FbWi51NiyLfitbk",
  "key43": "55epcmCJQv77veajbqrSUwd1VyPVXY1x7ugN1CtiyVFU18X1EVVbyCcKLYrQMT6GrstJm72y5xkCcMrQMWicf7VM"
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
