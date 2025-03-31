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
    "LN6ybUmje9CNySUFHwGDs8hK9motKJzBbF2A6xfXG7rEydjeBr8TRt5hRpDtDM2D7BkFyFqSB4Konj1nb719npM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CP4zAGg12JXtgPC7PnEcRJf86y8Q2a9orq7RUFBdg6UFhRfvrdTkNLmervmtLEDRxc5a8684VaXCkjRocqFNXxf",
  "key1": "CAVn4HWabYGRxh12vtXwQT5WWGbBETND9YUwywFDhT7v4SfzbVSDcuJGE3G5EStk9oHxBU3ckEffKAD33UMjBHM",
  "key2": "VfQAwTcRV2ns1rzc9F96wS2WHcoXEmXpCepTGNrztkN9AvsV5aFRgPuJYPE8Mb94tboRYJzTFFvKb1928crxJUH",
  "key3": "5L4VtZx6FWmTMwYesx8t6B7i47qRuLqvRqjmwFY2ed7xBPJEc3BH81Hawo1F723X5SSicmuEGjLZCpu9TsQ9vu7b",
  "key4": "49coHVWTeAfareCxs4RAUNqtseJ2M2FaR3QxPgbAWWRFvvGR9gdauRpckhbJJ56CFB2wkBJV9ZUBdjvjfsVfmHwg",
  "key5": "5Ccoe1C8t4rRDVLNGvRm6igBWvDRNMjJ7hapwxoqj1WsAYBqxUWVYZwvvJMupEWqRPm1pmCyPytH65vKiFVxy4B4",
  "key6": "5aUHwoWV1arft2xLik4DZHqWKd4iroMhi6xYKhsC4CfLMLpPPGxYv81ewhgR88auRgtC9tJfBJRxWptwEvEWRZ68",
  "key7": "2vhNz9Zemory2HyZuK3UtFzPzLDjbMVEj1u3t1kJagxpLZqVapVEX1yqktF8tAQi5czdWU1jo7WAvAmGLY4vMpN4",
  "key8": "3z52V82KvP1xrKmNpHB5KB5TLKVxwnQpEW53PPBNJDWfpV8BMDRdxrJPeYFzcQUN1w5PWri665ri2XVVZ7FsMnCn",
  "key9": "43epKdqdeMZfVebFKXDUGZxQgGsWVsm4JDbP2F1zr5eGi2W4cBYnwenHweT4tJudsfHXnm82pcL2neKzvP82usgD",
  "key10": "2nmjRrGr2Xzuo4dB56XTQUV5BNByWFKwXjErR8h2fHJqtqYQ1REGFiMinRgpwembHjq7xguRmrDrWvU9xiW8RxfK",
  "key11": "xRPTKsAbZsGgpN5nwozg6Z31hM4CMy2xcyLuJmUCJtZiftyKisbv7QT6z1YLYgZVcwB17iXwi9BNKSijC2KrTeb",
  "key12": "3dT5zy3uAryqViRyiCTH2BUDdnDNN46FmixrjT6ckepMorQVryt3pHCpJUw8mfdBF3oSgbq8m8YvDo7jWSUQgWgh",
  "key13": "qj3gYQ8LXB6VQ3T7ufBv6DU7JiWKHD8M58va4hqMhXg2BcFaUY9Uqxi8npuAvF9GA9epuPM6xJXEjEZper9KzpQ",
  "key14": "2GbYCkjYvMqvfPBZPnQAyScvSAb9W6mVYr8aoBs7QtYJWzEhVscw73nfsMyKZBMzBEf4zzh7H1La1B1mKFvj8b1B",
  "key15": "4XggTke1GMESVSWpupDvaXeqYrKp7673RMWkCta3M7R4qev6eWaXF8nCKNEFLixZ6iFt1KDeEfmdpiWGKRhEgVj3",
  "key16": "2dSnZ18DfCa5yt36hde7sWLrT4zjs8fp4KRziCyYTsDw9i8YmsaGymphAXDjtziun7Z1ASjtUuQcxo9BWr8KWUzM",
  "key17": "hSg6ELtPdFa4WA3zvEwbwGqfUQfqRvt9YG2BRpAxac1LFu1YbBkkU3xuSqerdrKJZhMM8PbsRBQXKNwkQtfJ889",
  "key18": "4YN3o62jBTW8iUiuK5TWnX8HMuJfgaxYTnDEK5L1a12kFkdosRaWShwnwzqXH6RdZuSHVGboFgNsmKC9sKQBSHW8",
  "key19": "r5vBjFQ9FxANR6CmBNj2abpUG2KvsPqdUFQAdWByb6mLPTHqKkYV9gWZnRGDi4awvysNEZxeJNgsBUrsDZJJdLB",
  "key20": "4CnCKjttGSaraXHEM4wavhVcE83uoaYEcu4dtGGqkvMPMcXj2kW6BitFhHwGap5Nbc2Dnr9aqYvT54cFuCzijtz2",
  "key21": "2ZDHpu2WneYWJfx9mUkbBsrNnnoeo9JMdQrUqFvLkgAWTVBr4nnH9m893Uh9DmpiZ72qm4dXbvqVe5CJNLQ3WbpP",
  "key22": "3Db8az4sfj32eAERhbNCTaC5QLYarUfYnQW3m98XiW94h9tsbaqA9UFparCpv9zKjX2pqMXPLDHhaDrHuYpQCrYm",
  "key23": "3ME3CxsKL7bLeTeMMTcoUvsbTjwqsCbbhn8FvZ29Q4egFefu1nMu7Q8dZDkACKYWA5ioK42nyHxo1Y6SNLNjcQYQ",
  "key24": "4vsvYuTVxNHgzuzJWxZ2MZKQz5qEyiHixC2662mh8BaQ5v5QV9waVLLZ1s4FUenooSvKX3smQ5bAuaxcCBANYbLs",
  "key25": "Uvq4iNMWRfy31oFe7Ny38GkpsXtaNshv5otk1q2uNmNEifQz6uR94x8LsJ92yvW69Y4oS3bpaDoVx9Fp3ABFZxr",
  "key26": "24RNSwvAF88ufrU64uN6gVzVuWfLyL33fovUHHSq2yQhkVnDVMdASU8UzLjgQHoY69kYSEaP3iyhwMwVJ5ZWadBB",
  "key27": "3iUUHM96q1vz2mxtZxncehca2GVBpqw1DbweNggCYsbyYAZFc4drPvdLZJuKpRJ4mSbrzBujgCZrxpcnNkcvGzXD",
  "key28": "3LhtSRFdSwK3saZPYivrZfcrUbd3TAMGS4HyEgodHvbUJQjdf5LBCE8rW4NzUwGNGPcHcWaCKvAaFrsu2BfhZUYf",
  "key29": "4XUKRuPQT8zmNcFUxdbtA3uea7BGgJESGdMBw9xeP9YLoMJyHfDDpw64erLList2kwynHbySeuuZFs4YQivyCVZw",
  "key30": "4vxhcUw5MaUxZ1FYsbQ2tWYHZrW6juKCJ5PQDraNUksLDtAaZ5wxKtkMcqQHjQFhFKPgLaQcFoFRXVZ6rVy3AhRA",
  "key31": "5JufG9mTBPa8vwqabSb2B4TfKwVimiAnb9c56Kos8zSdxRR6c4YBGsdqxxCBoG8aF5mRqx78NwgwyJEDbcCbMFg",
  "key32": "5KHSVMojpQ8F9xkkq5uPu2ACDGNKSRQ2xnPTgiJCMiULdNiZhS6m2oP1qo2oBV4awwMYDewRtD2o2gmBsjdzLv5H",
  "key33": "4snAaKH4VQB28oXuSXFKnWJiCFFSDbZbjWtPVjjdkJYhcUFC7rxUmogdp4tZh8YJC9WnB7XknAhzDGDH4SC57Wfj",
  "key34": "cWkrrR5jYvGaajkpWkGigdKrmAmx3Urdk9SHsWtzzj5tb2tVdoUiPpAamK2ekgwi9oUAJUtqZNqTY4zJMtk844o",
  "key35": "4n5DUb6hKNy2MdCbByXxP8APPHNNVbmTPoMvhn3BxjNQFerZipARdY8WWU5aRTPNhLceDMhgD3D7jrm4QfQWStPb",
  "key36": "62v5xpQoVUSJjsJGCPv3X9mZmCE5XDJKDoSpesDQKiBD7FcyPSpvx81bEYXdqW8gaNgChR7yExCc1RXs6tu9ueuC",
  "key37": "3otJ2UiQ4oMjFPtcfSBQy88iqC9oiAEnTc3iYWfWW1LetBX5mgNbsfHEM21D3Fy7GkK1Z447ij5Pcqte4L62H9XL",
  "key38": "LHSE4Npa6S1PXuSMrbFs94pecdzTMwnZQ9feU44UDZEMozTaFaAJa5kNo7mv7wvJuqk7jAUEwAYeMKzsmPWGhHj",
  "key39": "5crduz4srWG1KV1euKgBEjy2Tt2fRBCGDmr6ZyhQ7uVvEe8c9dLAs7yNUFw6XzfcbDd9pLn6jSo1k3hkn4fPfaPk",
  "key40": "3QwoKEP1TvmZvfdTML8SNxLiUaNnEbtsuULq1y9Yb6LgFTegPKDMhyH9yHcnPKuXYhHHJgWAjWzEsh4syHsMGAje",
  "key41": "4DhBQUwFLvFhprF6qufcV1gqa2HwUr9PVgHjbQ4WA7BLiHG2YQ261RAXViptnqUWTZbjnuhZf1cqibGmVptB9cFH",
  "key42": "2UM9z7YFiaa9arY1MPMMt9viQobVjcWCWYoG1N6Ss9YPsoJtVCq7SePUx4XKNQWsfeRCD9bxotSev8fkuxBSaeYq",
  "key43": "38Cj8X49TuH12gMTMKWzQ4gkMG8ZydhdbpMvsSW2yNFAYsRnzrybVw7kpytPwrhK5w6rPVdQYnCWgkHkeL2aFtVD",
  "key44": "4U9A9eTWd3prBkXZs98pAxdLJWwU9AnzDfbnthRn2ujDoMppoUhQMQaKpnCVMNpKPovbJPHTJaNJYXp3okjCXLFM",
  "key45": "5dBwKjZSdJRuMbFsHcqqabzT549jJPUefAHamfY8xqhUiWXgbPD4W7fUrXZRW3hoWjN7K8Pakzb4jcEjdsTd624m",
  "key46": "4KgALhhdHBzrnq1t9xGr2RvdEd4eCgUiuR74DfS47akvwFx5333r8ufBedosqLnW4ZQqtJUCZMcZFdr5viqpV25s",
  "key47": "4LpK6uihmY6R1WNVJRsw9QYe6Q1R1UhJLKrvnGiboPqWuUF6eB85fqSpsFxHxgxgBPEEtQK7ALSK4DHNvUHcUL4D",
  "key48": "4W3sTxfNVqkB3XQ3hCCme4WFYDMGu4DZkmUKhZTEwJoX6HbRhmEKsqw5owuQtYcsNnih1XH1j4tVEtAS7vmQhPAf",
  "key49": "2Ap4Pka5arpkFEyD3rF6uXwBmYqiaZXt44S5ubRtDek56gqEhACDHmjr1Lo2pxftFhT2DJi4mDtsUwCFuR7ajohM"
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
