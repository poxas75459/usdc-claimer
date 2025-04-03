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
    "5RNQ9pjoBd57PUNcEp2G4C3htgGG4vTDLnSrCE7ywpUgDAPFqokmeDVfDLLJo8ufEhxfMUrVGgCG98D1WcLJDjgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLi2vWvn66SNHntQzdidzjeotqV4cSn3FAaD2znvy6eJ4NGPWY4eLU1dhe1gCN5EeTd8mRnzkZM7Sr4PzGGEAUr",
  "key1": "63K4BkZjTG6HJfLJM6xhXPWuhLToUvgftruDahyydGLbMdd9RXDXSGnPknfRqcp115ePDmuw8Tcqgj593VhG93hr",
  "key2": "4zekfxx8VLk5JrFiYMy5odvwMqbE6t95BNd784qVrJ2jnmvMxACXJ2WKNEXU68GbTAp5GS6sduNDH4qqvwgy6CbS",
  "key3": "5ZS2Yaufvgk7Kxeo7BQYMPBgtSampNDmdNT458hu4JJb7otrX7CQQPtusi4hYn5YyuEjbF3JhbTaBemNrNDjzewb",
  "key4": "5bavteJgmNrS2yBh2dw2zY9dAZwcXUNE965dr2hAqX2AghXAsUeteCSx8wAkmyhrFRh3QWw8VwiMkQx94vdCFwTi",
  "key5": "5tj1zSWzLXKPnirkNvVwehKCgyLBAYZ3zcsDr8QBr6H2FjKdfeiw6zYNh6WeNpVQABVpyvZT4hAXfa5UBf2oHTg4",
  "key6": "zz8RzcmnP49nNqj4g3RAno9hhrm1r2ZHoruU2y2fFubJ6P7QUbA9C7Xmdie6Wud1d8Urr9hrxeonSLjy9mSa6Tk",
  "key7": "491HjxigKxsfse68PZLdEeybKz7RhemzhvFVaFzxhPmqbaRDbsmFXZEL5F9F6nXf5Ztk99HXkNcwdA92oPUhoEJh",
  "key8": "rPYXVpTyJp2PsAvrtvEQCk4c8nhDKrYsmzAeTAUQTavj3fNRFJ6m1kpBVZRcfbRd7Bkp15Nwz7eP1p2oqBFLNcd",
  "key9": "62EAFUsKBGqkKPNEx8e5yYuAdCkhX93yLS32upwjA37ugmZtyXqGADZgWBnSwN8kZLEk2ygHb4PKgPxR4bpyFgky",
  "key10": "3mRr46PMXYZBF4v4Crs8JcDeCp4vqRLchupyxPBLcYcymD3243ViycomdGf24Vg9oGawUNHMmWfb9DcMdXex2K1Q",
  "key11": "4qqSnCgLX11Xs624AMHQS8YoeXr4gXhVNuvAGbSqgwb6556GLeP3UtNtFMjpGgNav3PyFHN2Sqc6MwSwifpZDJFH",
  "key12": "5xosyPHV33a4eGhnkPfMzHbC8opnC4KJKE57Ev4icsgGQrwp1K9D9dwJACgSebk1urQeGjpfuJuBBaFwYYTS3RdH",
  "key13": "2Bh6HDr8BPMn149cHr8FLqffcm6kUmSzhT7tyvbMrWxdKSS1ZxCEte8FhRqyDrvZuMSCiGzzSwBcWsswW56gxa2f",
  "key14": "2Mhg3YUmaa8RRd5KRSM7STtG1NygG1B8hXzuMaQJKjuTVuAWD9TTaaYEiCSr5LhumdDbXNxQTeG7Mq4AtFGt8tg8",
  "key15": "rcBr4Qcn3DS49ahXXVc9iUuPkkdw4SNCKzLgZPeB2NHqDpgV9zVqV94boUacnNo45mSnqEAFqe3o1wvQgwEQpcH",
  "key16": "5SNjxGmRiaqazShqs7rnmd9M2MDos2bTEKFwJRCKWEig19f3PmhB8yqju8YT1LDNx4PuyEAxfdLgKG1dw1GzvJfa",
  "key17": "4aF8CFkGdVDwZyqjrFeG2ei783U3KKU6zVkZipx2ZoBVe3DMUHKYZnD5CJYi8SjVVT1RQgFLRVm5SYYGb6ddACui",
  "key18": "3qWVyY79ejPJCGdPhJCBWmCCisskGyp7sd7oMHfigKmCTfETozAmMgU2ctgqYYPA15UKqku8tRKWgPXoHdLybq7J",
  "key19": "3pWZPUc8PX1vatWCVrtop6ys4vT9tkyAGEPSh6HLuMUZVD5eiHCcqMba2De36LbRGLg1B6DMCtXS8DyHjaig6hTX",
  "key20": "5HzcmdBD1Ha1K6Z34sa6B4GUDBaUcUNjvwkv8ddqjdd92fdaFe12sks3kmzRzZ672kj91cq8ZcdXn9ayMttVmVBP",
  "key21": "2qkoKvbeoyBrPwUXCTCHWo75bGKrJbY3GeciTHz7AWzyFsknKgU4x1tpTh3sEYrM239Ade62UXYt64Fj4es72hDP",
  "key22": "2rf6XC2cgKoXygz5c1NKdCtu25ivJE6fo2QLkN2UtktpoCE523C478tf7wg1BTejVFFXuKCQTU2RcY2Tp9rdowa2",
  "key23": "4ki6gD7ogn9iugYDv4nttKpXFQxe7eADnZioKPLPK37rVrH6ebcTt6uhRQJ6QvfuWjtDZ3R4VdVG8rQMhyFdzh6o",
  "key24": "66RjAvcrQ1b2mS9X7FVzj8pTGu85Hy2yYFS6rHJrdHWxMAzuMgswXSeXYjYTkLZky4iGAKBu5HZZDD9kv1zpKiq2",
  "key25": "3L2eDiLqexgiGvK7htatv1roMEbQTC7W2STQdV7WM68QnoGwCPV84CSbddthGzai6HbKG8KgbpKzPxWWpTQ7wZDx",
  "key26": "3LFfSzaE3NmHq5SnFMnEB2gNtXjo5rvCmBQzjWqREnbwYhV4xHpQKPhf4qTSitMJhXAMY1AN92yZJpYcnVmcQ7wR",
  "key27": "5iM618hi9QVeE75Qk9vjcJsRFfbDvQogL8cUz9fFQJms5WGPGi1jKWiezfPdLpwHyZCRdpwbbzLxG6WQ8ziUJ3RD",
  "key28": "4zzEPMBqYGeCgp6NtNBtZrYdskLntLhHF4zhQuLNt85BK5NnAThWS2UNiRzxrA7tQ25m7SaBxEobe4SZCrTMqyAB",
  "key29": "LyaK3QPJARsCjbsCxVbcG8LuxnkJGUTw3nWvvEwGfTyqujUeNqJi5EHj9WBpg1bs8iZZ7v4pMDbsitSngjZo59q",
  "key30": "54DQu2XiAqxKEdow8fhr3aiYDX9Gi8TRX5Tbom9XWi8Y7FWxxwo8NeZNSKzQX2q9GxWCkSyx3LvVAFWpmHpf21Tb",
  "key31": "4zw2fCKxDY51SxLFGVdUdYoDVfiqGvpFokCqcJBmJe7LNK7QjLiSvGxRagzMeNmUKLYV2Lnf1MHPkJsySiQ3QFSs",
  "key32": "3aF3KgGCbPYwhVHbmtHg1HZdnrugf32WoT3qtw4NeRLFq2YzqKqyG36Fd5euwpkgPrtANBNSaHLP5gxqjo32LycS",
  "key33": "HTg9o9F1AiD4a2mYFvTdYe8RzJgmjkNZ8rMi1G8XCM33P9D6wyKwGPioPaCcmXPf4BBBWbBdpXdpc1fA1GgPF5W",
  "key34": "2C1HcrzcrYKDnnkRvXvfg1Tuj5vvd3Ecif9wuJgyX78LLvVt4BLgkyLPwDwuiNDx4t1KiRKTxUng1qQVA1hhgHaM",
  "key35": "63jd85DD7PH8BiWzrkW78SXVrLFrqVpguCQbutgPPMieShcKWsUCQUSoqJuQowNra3FDkrpWfiinWBdrtBHeCqgt",
  "key36": "rCabEsoJyrDn4NQJGp5yNRyomHtFF2PyjQxqjkQEFhrmvsVWvDjvEj6dVWqpeMnSeUA9aMg8nqd8FXT5DDhbN4S",
  "key37": "Dv1C7qA8wbeqgB23aHjCeMLnj2GFp41Mb4jqPswVemFphx2ejuK37SvJkmjNojWhTUPDnvSNnYcCi9mNvVFSHtr",
  "key38": "fH9HFmFXcrz8ibN4myhQFcioBKVRAfBiiwqb1EVoiqtQYavvQiUYZ9n9NNK4yV2DmuL8XG5Mq8BvRKEKLoRMZMb",
  "key39": "2PcZmqDtc3Kc9p2YZqAijxqa7rptYM79pYjxE7GFMDNupXFKKFGuY39FmQayFqyGBGjgfuRj3CmYZdqrykphEuym",
  "key40": "k7BVz8xdY7o1vqLvKCRPk7Ceph14oLbYKHeXeubxFdwnTCrRR4qqQxRYD7GjexkVeJieg7DPPnMzb7SpkjEpEhP",
  "key41": "3crEjkwYy6zRpbEgCEdeoGU3GK77wMpXbHiRK4ZbP6TCnEquy3SvqKeSf6pubRHA175reXtXHX4zAwQugLyk7fx",
  "key42": "3cE6XR1go7gWWbBdMzRzLhbbgCNnLQ7X8X1f9dokwCEfuRXufPGeW4csQUw5YTZVvs9PGxRfWGfQmjyaqcAMMMSS"
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
