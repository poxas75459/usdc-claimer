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
    "L1ow2ZNsi9RcSvkxAvwqEYDhvrXjXy9k7HcEK1GK779k5xXMHqqVcVTMBDtS5Mg2W4MWknjr1v2gtcoyPaPx1ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Cpx3Y42YuohJjr4DfMBo9zfn1ZtudMYuue4xJ2oWFUa3GBAseMbf42HVYsUu7yP7ps3iXdEqkQdreDj4Qx74jM",
  "key1": "4cbt3BPwPQHriBrrUgn3ZpNivdTXaiu6fh7pcVdPyjpxbZjbgHrxQySTXLrczBBYZCGV9qbmWPsTwM8hXrfK3Kb7",
  "key2": "4AqNnpqaHSZZ7EF65aW7UkMw7tMDLUtdtudukU9vbdbsNW2TfXiLGqZaEAVFBY9L5NtyiSy51gkWeN96wpuYeMGQ",
  "key3": "7DpK1JzX45N7Whsbd1nzExJcWRjTjnP6yCKcQ8pmA36pak2hJiaiXhgg3eJpgSwrS3wiuQVKHwWWEt7KByQXxmY",
  "key4": "momZ1C2fR9oFmus5aHAoGKvWSwk9jxwg8oLjEXZbR1YtDbkchvT5SKiHSGP9uzj2gbMvsENN36YQ9Wt2eYC6H4s",
  "key5": "5z8xwn4Q9Ckwe2zpAJEydrkEXVDZq7TmZFEie8yXitknBr3FJs7aAb5NpYhQ2uvrSnJGHWcxjoJZgq4c6RW732N8",
  "key6": "5jo3hNdrgCEM7Ld5ziYM7KSi78iFTRJoQ6P8FtrrvqCFGf4E4Wpwr8atgdXMFkc6AbZBWyTC2WaNNzJER2RQSu9a",
  "key7": "qWz55CAMmAUhQfiq8jvwivtPXs6Vc4zBBkMBATwRWTERRdWvAp8xg28oY13f2tbAfQmkCSMyFNBPShsdixHQLQV",
  "key8": "29kN65vsmtfHf1QNodHG4GRFRJFYKS5Ku8pgP3UgK77frU6YMcCDsV37eQkSdCqFCztEfeJ5sxREgNXtTkh9DLfP",
  "key9": "2hXRxj2ZB1ByBXw3f4wThvwdUUTeJu3u6LW8B8aLLE98V5K8d4Rs9zvd5ruRvtNv4Zi31bvgU6y4QeSqFz8vGdG9",
  "key10": "2vEA89WqYRZofkKpAj2fn3ZuV68P1PgKcknYZEPvjzi3FfPxzX9r3vR5Mt34q5dEdQY8C793yEV8BocBi18ZiCDQ",
  "key11": "4biLxPnRvAY8m52cVNsJBsR4NBMiUbZW55o69639X8ewPi116Bu5uwkNLxfeMphBr4uJAt6VEn8GDQkfAhRbe25W",
  "key12": "4M1dnDym16ieY8ohEgUtteGXLhRU4ku7zhsDXPbxC31pPArtEykekqXgkfDmjTeLLYBqTQ5NPnfusX7EEVyTRqCL",
  "key13": "2fuS1dxzfwbAvQ7iSybxfdgYbRCJEhanYUvESZYdnxCjxY7cH6cDFTPjhv1odWih4w6y8BiuSXRjVCHZreaMvNK3",
  "key14": "2Lrp2e13Ca39YE1UJBNecv5vK8sEZB8m9Hs8atUPGcEtJXBHYwLxSbwRA7JX1CV2BRzJSpz3sWn7LpAP6SiqfmaC",
  "key15": "2Xd3eu4UbQH7nPvDG7eUux4yRrtsYAxKyn4T2weHNmF3aE5AoySefgv3XFmb1ATSW7NVHKFMK3EU1251VncHL21J",
  "key16": "3bPx9mzgKhf5Bnb8kwGgPvMKeq8t9G9jYCEXPQCqwDPeFzuBFsNtxk1Aujx3SNka3jPrYTbiHNhc2fwJjTXLyxsz",
  "key17": "59rMPBo1QhGpkhxiYUCzhgPV8y1TzkrLraQL8sStH7Fz9JbnYmVfzkHN1fmbR5EvQQQQ9oj2pSyAcgdAWCaAP7Re",
  "key18": "2fKJsCi6AZxEU9g8NSy8gzz9AqgHFscmc7JD3eUrRcV796aXbB4rvNQhFsfrMJQcMZezu4jDhHBU9fmxBGtFnDTt",
  "key19": "5xSG3KQrssBwehdvjC7kzgbY3WAHPtvQu2cFAoTVs4Lna3Gq1awQxVsPF6yapqdB7sLPbyJC9gen5r6x6Q9KW3dW",
  "key20": "5BYks5iFv8VsjWGXZaDdYijAKYdaZqWUVYHBfyeoRTFgkVWkQu7Ww5nGfpKgKMi2meQQNDpBBthX5aa1cvVvd3Ru",
  "key21": "bBgVQaduLpv7CVncwgMAtqgVatEjFFVMYUV41vhkpqykuAkR6oCacekhzRaDjCcqthVBHueymTcPzJZfJvj2XRk",
  "key22": "38YZVeKEwRmy9byW8dDP6Lk1ALREdjLeToj3KQXAsfwcTWp4tjMH42uXN5odua71oJshEYtWEg3mWz94LVvwCViC",
  "key23": "45japYVAZiVyHP8VWrzB7c8MuHR6rbaNXzWcGd7ZxPujEYKUPyy8qoA847mKZn5tjFhcSFDwPL4XgLbXY87N4soC",
  "key24": "2nTR8DAUsNvAcna2dAtXdM9cgfyr9yYeXs4gnvNvvoZLmq5MbM8HcSGCBBUJdK5MyW8pR1kp5efQka6Cew1YEk2v",
  "key25": "58ZFoRMpPSSGnoEySJgP6v2UiTa6pe1RsomWextZwLTex5ND19BLr9sQLUy8ukT6K3GZtWsQnnvvRAQE82pvKUnF",
  "key26": "4meP9XvPHjZcDEuBovKjgEyUhw4DdEkQ7giyUS9LuCDjk2zms6TW1fmij5g2vqrWztvwQakALR6KPQF7LEhtU9D4",
  "key27": "3UdjaaNzF5xV9hf4hboHFiP6vDk1exmLH7fYH3vtszijx9hJSBWLTm9p32fkQ6hjJufcgxW53aKx8Amxg4G5P8xX",
  "key28": "A27e4J1uxruKKHrWMyq3zFzKVGybbgcGotUXquiEdkEMtE5M2ZtqkzjYRh98wwR7hHjDbmtixbFLE6t8mso37eA",
  "key29": "4Ss13J8hPuAnvAmwuwtQEwbv9aJLCoqZaSxyNbpd67Htn4ZtbAUvthf2KBWEHZJ3qbG96YrNXBkNadMBdWsgvm6j",
  "key30": "3PrX4RB51DpymCPxbUa9fTfiqpFXqkzRX8KSRa1aK36kE8ZJ5vsZG3LLu3gmmvwM5eZzpcGiUGrKt2eS96q9u5s7",
  "key31": "3Jb2eppG2FC7kDqech1V2zgWTY5Em6VDz2cxHanynQjZSe1swWYRwznQEvAAMGZ3qR8Qaj4y426msioS5uVauR1B",
  "key32": "2pcusrErddUrDwPow7z6UfbBPkc46e81i6xigEQNQdBJEELqSEZm52aGhH9vRB2cCua7C1CXBxVwKxRoCdkd5c9y",
  "key33": "t856Uc3XnQmfKUHQGJggHbhb4hV9RT8jK2FaR4QLs6THnd5PKmbx6ie8QvAYSKMdp9vmpoK482HmUoq4jqndGvT",
  "key34": "xjNnYL5ioi2FeMsY6dXBUMNZR1UEzM2pNtFRLRKFJ91xjMPFrRj6DjpVss4PT8o6JFSdi1Nu4YdeKviG6Ry7RPo",
  "key35": "37TrotuLz5gQ3Jhs3KFHQgjvNPdtsGNenKZA6ZrrJwwEippE36gCLooCFwwLP6bwhLNc6AP66gNkaMWedpvsc6cp",
  "key36": "5jXYWwJMDia3f79M3RJkSL4w7KjzYotpLPhrW2jKTtEu7HHgDrzoSZPAQQPh3rT2gDdn77zSJDWNKa9wAvyBWvGd",
  "key37": "2kMUJd3P3TLY2M8s9gEb62x7eHiJT8Z6Bor3rBVhTSdsi92koiiSrhdtdcGakfELLnQFBN1xTnTBAxvdmYD2ijZo",
  "key38": "2NW6mFQP19Ry4aCGGHcYV4yQjyX5soxBZpedAtjdcaokoLUsSQQk3CrcbYXjEvVHuw3TMjD6E2s3vmxnrZmwwKAy",
  "key39": "5YooSKcP3ZoBbUxDURwEJ6j6xgmpye2sKBd3qFZkkmVa9kZ3rygwbKC1XXJHgHPSozYgxJ39NrGp3h912nwu93cy",
  "key40": "3jYWdr9ytz3woJWmuFyiBBEU6GLDtCHXtdkgpUkFpMSgLVkhUgwNf9tiE8VgC1AcmUm2urrfG9eknMxYGF5KDMRi",
  "key41": "3h6sz61xXb8VhTeCYV5LH5wSK71q3JERFyp3Eh7yi5fX8LiwvL8FWtav41Y3uo1uZ9vm3jhFhAvTB2j1NVDo5kUX"
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
