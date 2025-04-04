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
    "2xZ4LcmnUMxkWJnW1gey7EmWV6q5V83TJ6i2Xbq15Ks7asBvYKzAd1aNUiBak1N6jYXg7mCauGNMgaFLo55wxKPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uiTx7PtAENrkjqj3jsaEBRdWbS2ZP7DW38Uh3s8wEsr6gcQWbNTgDmQyKiP8Mjyj7BQ2e4iVNsBZnAhEwqSmYrf",
  "key1": "Ac68fJ29VfHhR3ge1bAZaREnAGM8KWraysFimBvnEdqM3L1kCyxNakNCe9HSFjUPuPWRUdhTHyMTB6ayTFjZUgW",
  "key2": "45gCQJB4EYkSS3b17DhgFBQh15fGcCLJKTybdZZm7FThndDCNJNo69kutTDBQ6qS3xvCpxTs2qLT6Sm6gGyxgw1A",
  "key3": "457kVeP8QKM8Ah8ZFt2mef3BRTPcKdMFRf3Re86J5NGSgPNYGLhsfBmFwfx2GvUQwAFVHG3YBsXsdGanh4jeyHMK",
  "key4": "215P63YqKJkCyrJRqhSFoU3FmuX7nqrGPucBn22Ere2vTnh1iAnhjABjJie5bJamoaerbHMpdG7yPBqnFmMudBoE",
  "key5": "5rnsNadT34SdzVkoF8qGzoH1Kt5Uzt4kw47JLTERLwXLs7W3vEiNV4FXZn4bwS8KbzaHZ4Ac72y6UWpS4EJgjQ4P",
  "key6": "254wwhcR6pwv417FLoLGekS4CKPbs6KfYK8bT7r5tqKdFvrh7JYALyBkMajfRkjxgbnzSMu6BotB1suE6QjuKXqY",
  "key7": "2DHzMP6WbCBvzQtBPgZKs19E5pKFC3KuQKxK192R414Mk7ciq3W87Qxc2QdSFCoTyUu6sck3FwtMyth1putZqckt",
  "key8": "cZcwKwo8MJGVse9qAUNt9vCFbXCUikqig5zt7F4xkduuu23YrMMS11F1kv9FmZ72tzU5TToeBQJDzZKMXPZhsPE",
  "key9": "QEnD519ezmTbH3NaNyRVGHJ152V4jQifVzorP1BSAEJHcpsRT4zuFAdBeYrWN2BSqQsCQR9V2iw38kEbQzcXjT5",
  "key10": "2xosB6Pt35SYGRv6Ykg3LdYqVXbu5aFWokBg2eBwV8WXxzhEMBfyqxCTTpLoUTewitvrSHPMwsk3JxVmvR2Gq825",
  "key11": "28JZQ375ud2NHo5BVSK8Z4bhpsfgwDMRCCHt2RriTaWt5PWdV4NvFAuyeDpe3uQzPTzjpuHhw8PRy9xFJZ8J5q4u",
  "key12": "49qAhn48ZTsQKmNGt9uqLbi62QYcot8KdXUfN5rqZ9odfkhgvo74bYXSb1mkp4kkiQwjuATesWGvrv74EEBbH7Dc",
  "key13": "4bapQwUJjVC6UupRvgtiFQUSAo38WJZNR92eCL4yJp1hRNPWEPS4ukbqbrzPKxyqhCA2Q1TZ6cbUKTagqCp8uDQT",
  "key14": "2iUBHAzztxyu2md1qtxSPm5HWYHbpHY1oHQJBf3dECVTPH9sV1JFGQBSpj7ie9A5aBC2ZUQ1Movtg4JTw9Mac9Ri",
  "key15": "52JVxvh86jD9C6SJCHM8h6hg9TuTZF9TnQkRgiXkEsxGory6rvZwREpC8fp3PwV1Pp99tcSk9xBhqwaoxXAJ3n8y",
  "key16": "25bVorKnyDGfvyhyMkDkAS5kymTRpkRsTZvqJrPtVrHHhAGFnrGxFcGKep15eYik5XZ3igk6pAnXZajBfhk8XB3S",
  "key17": "5YgtaNSi9vfvRyZhMNha48sqgRKN8LHZJCxkXEEQgNGrvB7FU3beFcye5hEwWSBxUCjN1AWSTPN32DuAA7KzytFH",
  "key18": "4KCNeinxZkNXVP2SvVDuMHwHJGtBXWqTQhpuchbGk8LFNY4Btnu5NnzudeAhquCGM5xG5FzvHKxuCvZDVwJBiy8u",
  "key19": "4Mips6saEJAG5MtJN6KtY2CDqyeBBocprLu91ZxdnroMm3oL55qFgyUVH8qCymeo5HztRRbbGrxUEvU4TgnPYYRs",
  "key20": "4pqTESVtbDUyTDkdUBdFaVv65NCC2zXzpPxopkvJnaos3xUJVCuXYEGbB38MP4wi4dAR5E2VmpY59z7yhfTQLnEp",
  "key21": "2Ktw41ihWT3YHDNLGzQ7qsLfxJkKCkjnZzHyAF8gFeA34uh2FQS2K7nrPqzjWYNiYwk1vERB4uC2Hb5xmJzQPG1c",
  "key22": "4bXdK8ns87xUDhXeFG6Dcbn44VjZrkB7k5hevJh9zRD4kdgjnvAaBYab3Xa13hHPnENBP5c4fq1b56CJ1eDNLyAC",
  "key23": "2FHz68ge4JaZTHRBWFpNuxuHtt5JyCUuEWnUz9d9zVaug2aoQiWq2FfoepszV5DtZkmqLB1gdokBMmcGkSBsFDtN",
  "key24": "xk9SMuwcwkgZvGUHyAtyeQXig3zgZ1KaJcwwPMPsBerYzuR9xHAf4AtcbH4PytHB8isczt7K1tvm2Ne92J9SaTV",
  "key25": "29Quch9zQJDz7QEnERPJEDdTyfuQXKT66vVMzwKhwzuwRgZjyiLwK2zqtzAN9XmsrF1F2xq3Z6QuLnwofrZiSLwu",
  "key26": "3tQTBsUMgqwR8hf2KSQGExmnPEH9ZqHSzGaHnZEazGg3unRyGeHSeEoG5D2guffixFPewWuis6KYGJZr8WLmwVPZ",
  "key27": "3ZuzVjgaeB5sxEGyK8D6mQMDitk7DHXKq9h5q8ncRABVXbNUvP8v3K1SER1MM5kRXUfkZrBatnmnyxU9CfB2tLxq",
  "key28": "4KsnePFJ21XpJD8TiYDHGdNSVTvmbR6ft85EAQU1G7GNUPkiAddUETkiYaoFTNLkhWocG11EcZARVec6VQwVpvpL",
  "key29": "3QQGPATMCG89fusWdvXbReuJu9tNdsjGnfCgJ91hBK3yLKuP1W7h6eT14UQ56aRh3dxKr31bzHMgLXtb1vpN5sKC",
  "key30": "CLYtcSFogjhRYmi1Ly3dW4kYBMAynfNvgMyZHkBZ5VFF85PBiHKoYiriyRsC8hL6SLvSTBSVYdLpE6on6pbKXrh",
  "key31": "2FMYP3p9bQvqzmEEFxwYY6DmhmLTsj1QaYoAJ11atZgoHEe7ZSDaw1sokJSgKLCt1S6nydMUcn5xn9gpSZjinCEn",
  "key32": "4S4hvLqwayFXHEhpZYzRVTFuTiPdoziSzDQgw1U9GR8q6QCvRo1U2dZ5r5ztY1rdz4uFdhinRXsAkaMrefWG7xme",
  "key33": "4MmWQgZWehuxgWuqPRbjeehNzLKLdZaUCuTZKmoBDtqTu4VGeLMcN52XYZdJczH11zn83fGnUQtbiFQfYshpZZ8Z",
  "key34": "4GGMovu5esXwdbMMKkMkXZGQ4RELmzAGgnUWpxAsvFXW4yizHWbK983VgxpYoXQoUePZiwvsYUqmbEat1FfsvLo2",
  "key35": "Ub2gqMWkFCuW5wvgym5cjqU6WPmFTTeAcBVpZUk4yMdLSy2C5KAU7JJo4CDfXjhmz8hvdmyYZC2w8kypXN7CWkU",
  "key36": "2WaQrQ61RtraRXjGsDwzmGWXgpkX4VTHvYXA1UBHk988WTsE9MmMHEMW2JC97vWRZDJZWyRmFkZDMYWZcXLJsZQk",
  "key37": "4418w6kJ25b5VPqLQeU8GboCyqWksGduPwD4awWkJAGdsyBxjtNxoqzPpoqDxBY718seHeqWGRnyNFd5n6yNdFfR",
  "key38": "4rXoKkR3qtw3jvnuPdosMTxgvdX4hGySpxzAesXaaa3VDqfivzvz4Uikmfr7khHGowwNoQHy9BZt2BuN31y5kRVn",
  "key39": "4NavReLfUjiDZBwN4b3QrBYiTyEAn4MdWANGqLPBmZpQ1a5YiiR3SviXHhHdNhQvk1PbodTecnrQ7osAVcUUVKbu",
  "key40": "pS4o4AnAshCnxcJDvkvg954hNjFyjDNDNuE2E99hRDE1hUBh9QTnrrTT7H5rM6bmGFqvTAYcNKXb3TqqbGLEX16",
  "key41": "4pcExsVSNzCBoXCjodYwsT4a75nejQBDzkdrFciHuH4cAArbD8nNanbt11L2a2dvFCWq7bJyNmnkGATbSZVKQ1Zf"
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
