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
    "4GFiV8a1fwFbTeWYzrFCsHepBoYK8cZaDESVHgHW7FeT2YnG31TBhanJsf7bfHERK2uBFx5TSNhmyfNfe6LbGrRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jD2eTWXYr48QkmnkbQ7rHmaLGi2oEBcVvDKtKBYzG631swiMFxAcmFvgn5xMz1NS3Jv1JCQsNEB5Joc1BK7UZjA",
  "key1": "2tZiZCgTKLzZidio52W1S8cXbM1tNosYKRRs61YFnvzHniSrM5nYEZ5236QYmKxX4AGqUoEz1g1u2H7UCsZww4m",
  "key2": "4cgHmQH8xQfubWrMHnY2t5HkYv81VVtMVuTsW7rsQFV9f345aKtBGGc2ES4JkX8eb5rk1vpVJpBkT5S6tdyxWiK9",
  "key3": "3e2usgTVHX5Q3vUnLbhoQe2hKC5PMgWi2Hr63QK6Kefbipuxu4SfGPgAQTXv1H1rFw7eKsgNixsM3otKxmhAx1us",
  "key4": "aFfAFeCkwVdWZPYBV43aEsDKauAW5Qsqzz2SYLQ6PyXXy8NRTQ5LNHcUC5Qw2brWgZBR1STyCiy1fZTEnNUy7Xt",
  "key5": "7txoZjQ71WMrxr2hKCC171ejCng8zZd7iNrFjHAD953bycAKiM1Nif2LsQJqMDgdtZj4ERY6Neq5pHEAavtXJew",
  "key6": "3N1YJD87SWrQX5YQM5cNmKW7Wgj1G6UN36yHger4ymFSyDrDdBnegj9HAk1YZ978n5wacKxzNc5DQXqJXkM9YeGT",
  "key7": "L6d84RYJpCBwwA8QnBpSaT1QJSPzJEmpFt4TJD2eh2g772pQkPvudcP21jYeviTdwf9PZ2N1kMgr11bijWRjeok",
  "key8": "gXpDkeUM4Nh8ZosSEL5NiGEZMV69mSZ2dBMua5o2SexhX1U1AjAvdSHm1dNBk6fYfDjXJQJM4SMZnvcVoAxkoSx",
  "key9": "54zS8vRpktMr4yXDahhN2mpzXqJLNaUPU6iU3wixAJaLZLeVD7RaJAzLdzqWaDyPoMUesz7ATdnmabkd7d45Lcaw",
  "key10": "3MLvukEMMLuNey1aCusnqk4Fj9EuExo4fiyJXpwdStiG5hXmXiuqnp8q42EBcNgUEPfVKmV35CnZcRj2d2HQfiGR",
  "key11": "2gDDZFBfa9dzbRD7HHBfuUnpQVx6Xw9viY41xaBy8itGqbajc7grrc9b3Wo5ArL7rvoDPBCwNVQdDQFVJ9in2JhC",
  "key12": "4VfGatUy4YuDwjqLRe5KLkNE7XYrVmAFYZfqxoueYzACRpSVSJBqs4osXALQFLcJrPUVatuRcJmLoNAk4ZjBEfyk",
  "key13": "669jJ6x1gJZRRTufqHw3nGhPW26GNhkujf2uA1nWnkq1peBnDKE5RDQnDnc9b1L7Ut6KTvHvDswMVwrgzMBp5GZS",
  "key14": "66n8oC5oa85R1HbSteaTDsvZtG7mSFQAQpWWrmETpDnMT1fK8s88zfBPYD1Z7FQMdXkvLeyg2zvEmwxSPJe9pptk",
  "key15": "4ScXC8fVETiaWsN3UxyHEATTt68QcM5DWLR3VE1VyqV8qSdxZCY9knFBckuuKMr56yXg9AL9PQ24wc8kgTSa71EW",
  "key16": "3ugGBdm19NCYkhhC8AEhCVpXFNWFnxfneF2bkr7C8aUxPkX9XFP7SfFYvztY65sMX5wcoDvfUoorif1zEgH6Ecn4",
  "key17": "4PbWNhKdhF7fEL4kKvhMUVAHHMAukwW5z822DncmCGqC2SjCJBHnEtbkk3EFNrQGtVV8agNWPUkgdWoGJ4JZyXoi",
  "key18": "22uL5KBPx6ZWdrzLBS3VRzP8S8oiLKKfWopina7JHKKCPgfGvJVnYNW3qGCTh2wHLsAMJk7ikV4vVeyydA5fmTeA",
  "key19": "2LJmtn2RvQLqdB7gN3gjdUVv7owGUDw5CoC5ucpGZhsmAYfZKHQymH1V993ySoVhabgXGfYT4vknyGVajJ62vU8C",
  "key20": "36M125mNFQzpVsHYi3ncixiLNNvdurGMQq7CjKXe4pWh849RqsujbUXyv1tfkisVDkD2NDintMcf9vHCxiECGGDe",
  "key21": "5s25jhPL5gdXjNfhYaQGhT4eiM5BaXnNv6b3qCPwpcignWLcZFCqzHEzvpB4JmXU6BSbkAwj1JfmVtvMwhsFfZSQ",
  "key22": "4gVBjDmvXq3BEcC2EPRcyVdBdAtUwW7VR39rwPEvZKg5UY6nHRvWSdKAPBZ7FTzf6Kg6Ugycu27UVKAkrUavizLL",
  "key23": "3CsqSo6xtNL3ZF4d99NdjAtDcQHCdaEFVYoTHfG9yKzzGgmR6vmLdcmpZZvPmv6QderXuuqnESpcczReToTkUwWS",
  "key24": "2vYwjGoFdB1sAqzzU7F72sdQSqVP35LvomUmF4Pu7CHra5kNHmRQTc4hyryAnxUpDfuo8HeHqAysKMSXDDSDBvZM",
  "key25": "3saKX1q2JNgFMuJaZ5krGTznuJh9GuC5QHFPkpPFSNWimztMs3t8QXCefkrVB61GKLWo4B1HEWDCPj5ABnS7Aa1y",
  "key26": "5DnHQfYgtsy3TsJNCzvuk4fP5m7oS8W6TNZfpAGZ9eoDwiPwjsVUyehmCt4dvoZiPNzkvQaJ3xmTqZjgcrdcjWbk",
  "key27": "3BvxgtUQmS8FwHU59j4aUongf3KV2KrGVCDHbH7ugJdqJDBAdtRh5HcgnnpeRJHxSP8SkDgu8qnWxknxD7j735ZJ",
  "key28": "2tsVHCUrDS8aFhkAJ1VXqseM4HqXbXUxQZXnxBEMf4Fsazf6FzoHbVXzTNuknar2CP1rGJMHtg4KcuYExweFaLG2",
  "key29": "soeXWqQtYLQjMMX3S84h9nE5LkmDUY31G1jCa86zrneKT9bKiaBEJVsXZRwvGdmSwPxsJuySmE2e71Ae7vsXwVn",
  "key30": "4ehxsgA3vYuWmQMSLuxpUkwAQei6LqbsaLPoBm8Dq4AKAYWuxoerVNNDoedFiL3QUXv3GAi8irZygp3HT5P8xHMG",
  "key31": "5fBZSbkLbMNqUjamCCbj3Kb8dMBh43MPdoiMPvUbFosEvF2w3aEv3X7t5qV9KVwjxq4t1heuBWZRCUiJrp5DqD1F",
  "key32": "2imBv6cJZmFoyLcNPyipYems61mToYW9hmkxR21RBQXTxKZLa47GzjQSKyi2Y2QJ1MjujMXsR86qM9t7QgRDY6bu",
  "key33": "4GJ7ZUnaqg987jDzaGTdDn3tpMgCLekGt5Hg6ppXvoNxXq6ptwm2VmPtvRDCC5PiLPUFGNvRUjL9vsqqcz1STC9k",
  "key34": "5VAhKb7Y16DxQphcJ4JL2TSpUh4jhctm7UD4LSFTNcvYu1b222wBgsjEAdNE9HRn2jsg8HKfxzhxdwvSKHevoAAB",
  "key35": "ZSYG7jnsnm5n6wfLXfWsiUiz7o17KW9Hac8VZJKmqWCbU5qP3Y3fcox2kh1w8tJnQV7mTQxuPrtQp8p1MirCUBy",
  "key36": "4Z21R1oHun4d6sxdp9vrwPJykSEF5iPWemg8drzuF8WBd4aheWWBuhMhdMjgbTRmRrwJf4n6A8hZ5s7kJz6auUsy",
  "key37": "3JV33xHi6yj1rwX7BmDz2Wssfhm6HhzTcdwzxcZ7S6D6doq8838GymmizRdLTTsVZG8wSKqizXmrtmHtZTm8nmkM",
  "key38": "54BvDDwt1qJYiAqvcHkNwPybPiLD4e4WWDY6Fkij6MviQFy1HkRsHqntXyc9R4emCpQV3T9Nu8yYdQw2NQJeVqKe",
  "key39": "5uVfSh5FWty8mVZRQz7QdHs3kZMYVnAjEhwfxeFL52XcJ2nWaSh4iTXpbeywY1KxXVDMHR6pT4mt2vQhgCuuW4yi",
  "key40": "3Keb9Q9s2AWnbWbbufoEwfa42SQSzM4KAFyayrqKC2AYCb8K3ZpC6NvLC6i3DimoNV5nVzBLBrVR6uPqS2QeEo2p",
  "key41": "2SMd2Q7z7SARGvm6ktyyFGctd3wDZ2jiNDQnbDpCXRF5zEqpUbeBsxnpCKy2euafmTqrivGHMgyFJinsnMGF22ci",
  "key42": "4YJfJcKMYeMSAJBvXCRYHVQu2w9hgikFimEoDZ13k6pgZFytLjAB3eSY7LF7bZxwMR9CxvJ2kgXtj2bQ7QHzhp2n",
  "key43": "5jePZmyHVbC1v4YNoqkiuqCtYefFazH6jXJXt4aUgcisS68Lfm3cGauZE9wuXFQHcGTnhbagKmbZnzAAg81dHDfV",
  "key44": "2yAhPhRyBMzffcK7VuHPAVMBUx6en2rtGUnvnRA9qERUUreWr86CPDJbL4m2cQXqG7h35YCxh2Usy9xGZ258WXDc",
  "key45": "2HtVVwTao3jdUQjsi5a2kUJmwRTDTfKh2d1PcxcdTzeKq32H9e2Ed66A3sp32jvUYPmAMPj4oikn1Xdg3LiTqdyq",
  "key46": "465eEtqiy34mkZReGKPdfzqoDkpgwY6z3WZKeur939VcywnhpnWBXirugpotg3edEQX1jWeCb8RFHytFg6vYu6ct",
  "key47": "4y2adVXtdYCfh9zkrQQXeN1g3bBzRMNDtXDqAP5SSDq9ibbqv1MA38DZ1EkqFcCJyJuN5edK9dTVHAnSv5MGZFVF",
  "key48": "3RrpTwz2GCHv8XsPM4e274rsxTLEk7FZzorcYggB2mKqrwDxCUzJuijDpbP6pCGpkCcLh24gVjjEkrCvtvxBdwnG"
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
