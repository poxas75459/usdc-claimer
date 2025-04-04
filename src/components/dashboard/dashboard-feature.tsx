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
    "4mP22Dbph1Xc3W3JWR4aUc75x57tHrnwHYwgp3tPC3gcXGHSsi3ou1xcg9XBswSwHyb8oy8rUETC1JGSitPiaeLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VYpFQN7SU4qgXqUZvjE27BqVa2x4gN59w4h1nDvBQiHEmQxHEceXokc4qmTeTrM4fdH6fTYXBABqBGWJadDQwo",
  "key1": "4h5ynGkQ8mJd4fey5rBMpyx2TtKAScUEV43nTN7A1bHnWouBmpE5JKqG93RW5j2e4STdf3BHdn7RhqeGEiLLYFgG",
  "key2": "3xG8DnapFBr6TFikg9uuq42Tjjv6wsC3R6NqrJMuNdFbAZPr82MFiShUK9FzRZJbq5dpcssfnUHtWv6vSE8MDWUX",
  "key3": "5pWsL3vHXGB3qfhW7BK1q9c7mQe4KuWk1Dh5eoKsjmfqLgmSpTgyvFA5cp1enKRbzVGGinwBTybEZ7W81ATLYmot",
  "key4": "4Aszpqd3CSEvWJNj1s7dBwymP2k3FxAgPv8wHtZFHho9mvQWJhNv4M9x8PYiRG2HYFhDTNrE1afRHG2oxd8CCsPJ",
  "key5": "4ziRe6m7jyw7AuqZLrokz7FQQFdcrZFxmQAd2bj7AyW4xbqdqtSQu9SK36dCS1u6uHhw2p5yrmUcJokYgHrgNyZP",
  "key6": "5sMSvhtTL7oyN12vpmxSVo5HjihXBdYXV1mwqqZhZ4vFv2o7f5gGFUounuJrAdmHeXcTDCH4GrnLrxC384Kq8DsB",
  "key7": "QXysNDF5o8kHPUmSuMaahTUXJ8cJVRbyz4a3hUW47FdNuSb1UyJgqcE8varLcdED5iejCNDUbmQQz4SLMXpw4mM",
  "key8": "2deAAaKH2fkgdkQGvsFWJi1XxaJH54FRuDMvDrohXMx4bfvEwRhskCZPaax21f8s8nJit43CqVFGbm3WB4yjX31a",
  "key9": "3R7sEU4XkgHA9o4MsqtmAUEjy4fytVUMJGCj3kL7FNmzk9pa7xyaLUjYqzr36XpivhkgWP5DT5XxRMBNRKCgbr5G",
  "key10": "3X1QstApA3muXiyzZqg9EcTojGFbH71v2iQEdMqZyQDECqAta7LjAxGBKqS9NF7AhhjXxFQae4Ktzc4q2AgCpYPU",
  "key11": "4KCqqsj2tMZCjgUoTwDtVwyg7cp6T8RLrkpGJNmjTJpTd9xoBQqavy49sME4GQzUoszpGGAmsttvp3hfbQjA21vz",
  "key12": "mZK3YzVb7wbBETqS2F9tbYqMoDa5txUuXQAEUiib9j3nTBSCoYGNiAxUG1oJzgVYkTeQodYPZj76g1xcBFDGhiV",
  "key13": "5KH8kEkgs4hLYKsLW6dYRXCT4Yb7nhUsZhyTyChvqXqERxK21P7vXR29X4sUMz4XmqxCu13Hbk4KSYA6QwTcccZL",
  "key14": "3o4K3HsDRTpDknoHPB7KPtHEoCJorJvkUq1CeyKEJEge5fHsAsEA1cSei8pyQ2cGP42z2NhEmA2srnJtq6DZ71vk",
  "key15": "p6G9oo22eoJBcVD1e7ED7nGCPb1bBSStrFVk5VZMtfWg3f3YHRBMGNFPwdYa97MkEAaUoC6rmCN6Ja8NMkax7d5",
  "key16": "5UTYqmPYna9gazPCwAbTgtwg6GH5V8taMGNepp4uZBuU5FJeddpyW7J914HjgpoukUtpHMMMMsgdPPx3KSGgKFBM",
  "key17": "nZQyTLTWyW8BPavibHkVgsVh5nrwGgFDUB1ynRajn22CuHnCx4fVLtKpYZ1unGJv1Po3cyZwevjksoaF2Xc3Kuw",
  "key18": "34Tnacw5a2ZdfqF9x8iNUGyGmTiwexBq6suurA8gbjrrEQxuoyAFc9ueAnUAbyyaB2u6Pf6Bq9dNzxqw6sFH8wFu",
  "key19": "BgZLTt2xE6sMQJtJNxnykeWW3zWCRP8nzv4oENuzrT8XVh73NZczgyeqULqqdBHaedEgUiExiMAerN3nKAwFGWE",
  "key20": "2uNVh3h2MTyQ3ejhVVrgrtYLBB2QcsYDRe8jzZ5tcuvpqywP1rgxCfoaDV7xJtcZuP6b2oEufKbZk8xmcSPgrc8p",
  "key21": "5rdydYxZ47La7RCdLjArZBW9RmUwP2WN6kdfbuPqU13cPy8KT8wCf7ErX6ehrrs7vky3qcVVKQGRCsCwJhKgV5Y1",
  "key22": "YHcEiWxkzsrRMe9oyMqBUGw88mFe4NjAHNATnWXa6SMJGeDUf7KQRPts5txoe4cEFqxi7rt2Uv5FcciVVSv5JS9",
  "key23": "23mrQ3bMouXWcVmXnAxhZh87w2idyug99uW2b7n2E6uen3DWmvmMnkSRtQQjsCD5VYBWQ8TzP1gC8MRAJcjkUXxp",
  "key24": "23383rSaNtwdpjjnzQWLhzHxUb6F9Tr1i5CA3s1jiqHciYwHwWHeWL4ZhqEjqqrv7iwS9ULEYFxejYiYP9QSMkk2",
  "key25": "2FeXJHDhv4BBfe2S4eJJEjQEGTVUeHbUJFfE3dkuDTEMuqct5qVHcgtJMi9Tkbpitotc25m2N1VH8mPgFpvtyVDB",
  "key26": "2vodvbH1jmVVCGTwtE79yYjiMiVmSQuLWCxrWjooABSs6pybekjJhCLHFiUjhA1va4wSVASKxBtovQifaocFmLV5",
  "key27": "3P4vvYgtXyFU1zRf77oeTdMGvqNEcwBCQswUkzvFsKqNYiys7x5A4zQYzRuviiZtRqr4sgkyhJ1oGDoPdpfzmUQQ",
  "key28": "sbDQywBaD1n61ckBrzsJGGt1eRMTzbBcRA7cPEGfES2ZPYYx2HSRSVt1z3s6K2SAPXe79YBFucRB23uKxRg5cZr",
  "key29": "22HYRqdXEcbq46RAVLKF9AS82AQBUZ64RYejgQWVqFbuNwrZTy9EhxwXK7e27XSZNmQCHvn58wKRwUrZjboWTA3h",
  "key30": "25roKqD3Us7kNqfzj2JEWhEQ61igpQDRZU6GQwjWT1ibgHMF1cPyUh93XpZdNGJByyKENbm2RpbftR5DwRpmAmyh",
  "key31": "546aouA5CMojK2XV5xJZEPRxD27diq5yu8wXNJsUYKg31pgSFCgbwMaaAYcSuJ86EHPz9TYxfaMjyTFKwNuoBhmj",
  "key32": "jcw3qNe7SNhCmB56s37LemufSZ3u4zfYpB9wkgHAbX6v37hiu9S3Zsoz9RcE1x4efNVM5vau2HporhzafKXoKdH",
  "key33": "41ULgYFT5vmCk3eYFZZMVmViciAiEZh16psfADTupQNEUuqsaCPRYApsXAPhsfxQkJJe6uo9btmwjVW486aRbpbD",
  "key34": "KSDauVsyZosL4LSQYVPUEGxqXaXqWcdmJcJUxjLuEzg4eXff1WULpmL3qv2vVe1KPFW3ix1s5pWjW9sR7cyybBY",
  "key35": "RTX2xdAK8yYR5yhBLy5kWGQ9DcpEmdfSwqRc3zNwdGsz2d8NsAgFaTNUGZbKDdG8edhQGkKFRnLQ4VspqFz2CrT",
  "key36": "5vwpKgMSoNh1ngcQfXTBchDYLBiJs79WT9uv4PfL2hDzfuPCH5qRu5bPhWy5WyYn1Zny9NAEx1LdDUq2Gk9BvsJC",
  "key37": "5LvisZX3xcZQacYFRqKcWttXvJPYuWkKKMDNKBhfGZxz577KdarrCMEV93ofCfui4hfVTRizQjd4qrkah1YcsiuP",
  "key38": "52wYyBoXaLvpnCnHdnXWHiPL1TarFdEUThX3PAwFKdpRcVVYhLiqTmca8Tut1uJrJY5AR3AAmksUzfmUXF3a9tjY",
  "key39": "2oyHcMRniSvYPsj4HLjUkzire6rVk3wb7VCLpqtaCMA7NSyTfpai8WVyVbdHVDi8WbMeFr2F2TRk25DAf5wsKxQM",
  "key40": "V3QfoPFvi27o5uyVSm7CDYsmQwh6XqrWp13NJEowRzNwk67jiDZCzN1kB7E9GS8JyjrmSjhoM6khM4ArZnKK5fC",
  "key41": "4grbBd519zYJKqC9PUzXkdig4ssP3WZJkuZdTtv1dsx6ELShAAiL7gdoHtkiCtXHnrhq4YzC6uzxMA4hxMiTcYJM"
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
