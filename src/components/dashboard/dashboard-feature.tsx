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
    "5SyvEWxFCrdudEs6DGzAqhVWNzQesZoRmD3dkUfNTZPidC4eQjunuMHaobMUDQUDprALHRLnNzD3xSz6g1hCeinV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xaxF5iAYYa2YnvHmLQ2U9dShX5sF9AXs1fgz2QoxDfEUG8azWN5fBQKppZP2tEiGCtiVmRpFYA6ofii4TrbKXv",
  "key1": "5NBywLcUu65sng55CHQiSRp7Pkg7Nt8HqqvXjYaxCX35Je6jnFQzhatFmoX7ybkjpAYxE2yvHgGjdC55dinNRiba",
  "key2": "49JmyZdUrkVDWi15dE755L1ynAR487euGxRvqt5qoosBQSENqeWy8aARDEYm6pPD7dNjG6ZdUejFnQ4kXrYiT4nr",
  "key3": "2BrGo7K2yYFHNkDes8nLMX1YYaz7mzFjsScCtvJoJzwDY7RDdaTbmFDku2uLNURnsma2e476H742YbaHhSJHGzYg",
  "key4": "4eWxfTBFqeYzxntn8zR4nR5NgJvSqHQJ7DPhsVRvru9ot2bXpZbcyHLfZA8gizuMHXtcFQnwJ6XtNTuhHrksniTB",
  "key5": "5aphZqx4UVTebPe1ipEpyJ9SnezktvfL32syojLjazee6zUJUxwAZzYW9mvXTxFKzuqLXjGNGBZeS3zLP1gtrBGy",
  "key6": "2khnU7AwMVqqjZvSMmpevf4HGJKALTPmnt2a78hec6kvu3WonXkdB81y4LRYcvdMX1TanpEcp84WoAuDLRo7xyxt",
  "key7": "2mMsnfiEAtD2yDNZmhB5ufTAnztMUFfWQucFjQy3JHwA44c1AdeS5EJN3zpffSX9W8u3CYisQYuQB6uR4rfd3F25",
  "key8": "3cakLnmd6gMtBbJSdz1pKKJxSuYqACLrPUstvYqCnqXr3jjENfn88PVDTvvNWD2dr7gaYEPHXeCqvnDV46VxKzPh",
  "key9": "2cs6d8x9ssnnrwExq95CKYsxrugxGoxs6E3xm8xBhDx4cvE9S87hM9my3WE2H3hEo1F52uYkZy8hFu5tdN3V6rx5",
  "key10": "24WMPagqajMzMm47bBnzfCUsrdFeRfAtph6vHjbtzJ3mSmCNAoDaMsxsYygAWYEQfRkZF99H8dJS51D9d5BDYgDS",
  "key11": "5B7DcWNC3hoTxh6A7rnhxH7Zh2vbjuaQPSSvypqt7WUefALxR6bjfidaxX8S9Ta2k4cy8SFFdjfkRUoUkFWmLdGM",
  "key12": "3X3Vzqz1VQbQ62HqZYbFBxDGVRxYioaKTD92Rpk6LZ4DxKQ4hdBheGWhbTo4X3Kro6myCCi77j9LQBqXXQD1ngMv",
  "key13": "5vraRLT9J58BG14pBhTFKzgGj9LKfT7ANrQxUxrmjeChm3xFYXsyDXRxzGHaJA8GjzpmfYSaFNmr5fbd85A6EYT8",
  "key14": "2YfUfAcqYJG97bPjM3n1cHPxDHTgx1WM7mFv139XEs4djEYCCArZk1FE5Vm6UnJVynQddhtzbLUJa9JbucUzJHsJ",
  "key15": "brAqm2ubu9LEgFAj6QasUGJ4ns3skaBPt3Wfm5sLe8hKSy292GTc3FQdQnH5k9df8RQkEW72RtgpHWE9ehzkbht",
  "key16": "45hxvPDkkfgygs91qcUbb5tyLKf1ToaFrGBFJUiuQ37ePzGBGiS27PtP6oGFNDeTWrS4UXJnFi8g7KB1ALLwhzHM",
  "key17": "56m8ojoa8hUGMaq8roVRfkppRwzVcoe9qgReC7GGFuWKzRtRHYEa9qiU4FP4tB76mrKMRduQVkbmchuAvGJbP99o",
  "key18": "pb7fsfmo4AnqdykrLJcPCgTwwFfPY3JWU1aEz9G3xC81xkxLKgR8QC1N1EXzU6UfoFy4KKX9kGHsGvSsCSfckrA",
  "key19": "4brXE2G7o5pJtCLEjqNGfWb27nfhWNsev7m7E8W3ChWhB1K27nKnxiF5zwAQVQQQ61Gmm2dUQ85ZxTvyL5DqmMKg",
  "key20": "5ULUBHq5YbZhMpnWAjhd6McPYHVbEb7zqXzc1oKL1wnfCF91vBSGDALN1Zj4CNZAvfHXMfdCQLBZwQq4BnxZkt2C",
  "key21": "2ujAffxvjCBGGPykgsoHE3VBo4KEhCDZcwPeaPAo1CzowenEWmr8yxuAyDWhLV2ij8wiaWZi4VF7zfEaX6rmxQEx",
  "key22": "32pTUNH3vZDMRsZPMRJktzDunrtteYzJHZdXZYA88eN2qPjgkKMzYibkNb1A7WHjGmxw1gX1kzFM8QSS2Uziwoi8",
  "key23": "2YzFf8ZkhPU8shDEgMBBKTcwCeCkSgjE9rvFX8HfY2Z8gJ78ZGdzHfZyxzuRjQbzjihuQXnXmLLW1vuLgQFCVXPV",
  "key24": "2NQ8svYKgyUo2KqCsaBFmJzzrJnyZwAkUzssWQ5HPhW56XAmjL4K1iQ711jEDjUzMHPg9ueWhzmHP1mHVLN9YLcd",
  "key25": "5ZqMN7EyAqE9txj5huWVLjw9vDMnmyT4iU75nDQEcVxpMR9m3WBba6wpVrhRvaeiMcyzJNchpjpcSrRWsssmvRe2",
  "key26": "PRGbaza3tueKUNzYpfArDyspVJE6zTsdFxAhHSJB2xamEzDcntg7GZFKh4MD72fG9tNVstJcsMxWs8PvPSm3KhH",
  "key27": "3JzfAKYPv9er67RV5odgHGcjHcXpSezGTuuzgxbRC2wJDnfoPiz8AFXQxYJGWHbevRxypehS2JL2dWcwap5atYcb",
  "key28": "2ovqCQ8Mqn1s1bJemvUHnpmyFzQMo1wDfvxs4D5PUiEYRADVdKeie5kvhY8pupHTK8WokJyu9LZwPqL8Xqi2JWCM",
  "key29": "gY1KpUM2vkvJ3P77gtQpGUbVQMUmSH8GXNv6mUhDkGT1w2BERZebdiMgb8QRedbYHUZwyScbRm3WeLigR29ifNU",
  "key30": "zjuGEXLmAF7wVPamcfvU37XGfTbZPbFCMommbuMCQSFzDq2jSmbi1QWr1bWD4YfGqoi1t49KA3ToTEtjLfe9Z8L",
  "key31": "4nzaBvCLj2xq3EuzGZu13s3P7RQDKFQKMqrJa2KdwY4dC2qCfoHdyxEvcqWadFyvSbd2VJGDrwKkHbzY9nzRAaeq",
  "key32": "5SfDnMdVBT73dh2kxqmZeksUPPk2knMZJ15NVoU6zpJY2pxo1QED17FEqvExqcCV9s8oKUihSGk5EHeCsmkXcpoN",
  "key33": "3GwBZpBCQwrwGj4jAmULdQnfhhs9PjeJNyzJKW5kmFwLDs1WvQvkck9D8TzewY3WGTquVxrxtr7LrDW3faGx3wQY",
  "key34": "52hV5c4x1xeF19JTf2AjGXbtzSytvHhMrRp3HoHsqpoTQC9M3nbpZ93F1fKTABmQzvaYjPm9VrDSNb4qje148FQB",
  "key35": "V2YRD9DRsEpTuh9GN9XDW4LpXcckxRRwdpvzJHYy82p3YxzjAsAJA5qPx8Rt3LqKKDtxMhYH9AGYfY3k9nMmC45",
  "key36": "yWb3LTbxrKkUT3SeTjeC28r9qGxcyYB7cWWNBoLnhxB6xRYdqBA7KHhWKayaBNbboGcE2T4kSn1WkBm2nhvX22t",
  "key37": "4fiKjoFoMi4QNP5R4YLu4Ht4hbsxtM9k5XdE7p6uPbsDC3EL4XqycFPnrHbyizDjf3At3drZhrtqkCWJKREWgohq",
  "key38": "cVV9NborFGaTaTzeS9MNJGP31ruo6kzSbhEPTKPAQjHLUNJjFNdi6B2WcHT57yUfUqitQmx6hWb2ZrcL2fRKuKg",
  "key39": "3e67J5Bw2t1ZRokBdBjpVoWZhqEfnrMXbyNRZpNQ3pKkVpcvEYa1zUcDPJNB4sWwYoyHsFi94RjhGnAJpxgUCXaW",
  "key40": "5R9SsV1UcrykLEKcEUidHhgVro1EsKBe1gZiTRA2TGrw4mM4ggjMqCBh1RkyADsjtPHzsRrnd4TpdfqcZKpF8nkw"
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
