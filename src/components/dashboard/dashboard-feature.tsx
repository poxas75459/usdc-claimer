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
    "4NAHjNHfvR79BboKvdvrsVx1txWy5yhpvoZsSbbwhoxipSNWeWygCEAcCdXDppUFWbRTFAjUbWiAQwazrQjjSjfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49X6VQNRds3ZzasTD6VFM2Tcv4o3r1Yp4Rfiae8SacfXLjt1EqtQqHjoAPYDYCnjYPvtCjLv6msXn2YXuDg42ro2",
  "key1": "4fxvPENqsnQB58WnwTHGgMGPft82FLD2kYJ9i6tJyX63uDPPxDbThvGULBQL7fnm63ompQCcvYUjp5haJmPkLS7N",
  "key2": "25PrFdnE29kvAu7q6aVgscL3hpD9xasS9mdmxwMqyeGsLXPc5PtRASU18BP8RLqZozf7gxKryTQDL2pgpUxaYuG4",
  "key3": "4aWcmFQoeFc4TnEnvFeenctSrN7HgbvuQZ6ScDcSRnC1xUUYs3o1LkVGcgdhRLpuuPeRGEoUU53kFHxYatW97oiQ",
  "key4": "31fkR3MDhefoCggaXG9yNHNT7VbR7DPdgXyqv6tdDFAAoPnRDrLQ7YAmx2Xt4vu9VkuSnTmySfPNyzhNLfvHw5Wf",
  "key5": "5vhRBe3ZsAXh1YprzGrfhoirnBKsYQNfoTJzYvbBBZZJ4GpF17uSJJyTRj1KdV1a4MTnbHJs9sQi1zBowPpF9wQ5",
  "key6": "2dL3X2jd48H8kwQ1mSDPzfh4QH8ytPnSE846DRJqwfAihc2YrYkKWfzxkQ8NmX2mFwhUvqH9AMGDxKQH9KujuTW8",
  "key7": "3Kw7kcJ8WorQ6Mhz1Qh6bb1icqqc7EgrGovAQSr39PDGRUGJYNodohckoeAneDyvSoGBj6a7BwHfvvvZUU5BSoCg",
  "key8": "4cVs4ZtrF89MQj21aU1b1eZR9Av6UDLRnZHfA7cLjHNanjymSss8Nqj9zNegevw9JvqZ7zR5HEYE49ZbH8NEqA5V",
  "key9": "DTXKfcdHFoDrbvHYkktvjoAagpe8P93KiAko9PVSLHW1eC13RJ6mLbei5AYYko3Y6xwuDV2jUG4awQRgdgY39or",
  "key10": "3wWLq2tfU2qa1kBTh5LBQaPyLcqPcySP2YFzo8azkj6RaLyfw26ZEBtBYAo92nvcXTV8cnWgQrZBfYRJQUim9HGh",
  "key11": "t1cmTof16Wo1SgocAUw7EmFdRRRmAJRqHwbfdUocZ9PPFiipVB6FJiBi16hXDCM77p165fLyunHUDxNgDJZXAuk",
  "key12": "Dx8kqQzuPaykCJjw1Q6qEZUqAzGM5h5dTzBRtbwhCbhgxXwXWjZReKvfyBJ7AtTq4HeEc8q2xx5Myw1QnzkxT6g",
  "key13": "4dEvPZ7ME25m5wXZRqWAjzxpibjMYJmx6ZYKgS73j9HzUybaeBJfGRoRoms6MZba2jMuwiPbyYyDJVXJknC28HnF",
  "key14": "22qrHme2fZUfcrpAbLoWujYnzeg4rrDci9psN1bXMwzohq5V1MWgm2W1f7JWVn1BsYCYFQahTheTzqZPxbMy8CHd",
  "key15": "KYcx9JSnsFEwtNZnYjz2AgVxUHjfqP45qdHiHNMXVes5uFHDnVsTkzqFVyedxpJwWcP6okF8ckgdHbBcuDcon13",
  "key16": "41ZfEycaAev7VuVb3dzLacGiraXrQKZPfRK7NhUE1Hi68pPyw3BGPLGnTb2ephFLGDxQeu4S64CGcM4axEqaevZi",
  "key17": "5FV5DnsNuNDB94hnY3Bf6E7EkeFBga75MqYT47KEEsac8FTe2qNRrY14bq9oxwKK2DYdvNsmry78xx5A2jvLYDdy",
  "key18": "2oBhzkvZ2gZbTGDNhvno6pxSjL6QP7EsFEj1kUNM1AaQG2xuZrgsVDe45TTf7kXuFFgf8eXTQFdkSp4XU3Fvf18u",
  "key19": "2BS4DAPBZ5N1WEhsBfvsh4XdimaNbtVKB5PHpnSKDq8VUQPyrZzaemt3LHn4Rg5h6bDjVMJSt6frqv8Q1fv9XKjo",
  "key20": "3CTmikXDye6RqhZrf8j3Y9narVcN6m95WotS9mC5i1H2DQbCbtVrqcAbZ8XtXQMiKvq37FaktUFGSJVBQMsgSJk2",
  "key21": "7FVWqR8X3HMy1UjKTYTWBbx8LbauvezpwuMNf5frSC7dNH9tmCEiPvWWXkWvwXRTUwkCiaWdzM8EomUGPP3dG7S",
  "key22": "5Y8XL1jaAJK4xP9iRQoMXsEACrSjjbXC69tid2ohUPpTG8to94847feuQU1GBZrw9J9n7A7cSWSy2AM53RS4eUdh",
  "key23": "2eNMtGYN8q8SSRStex2XTKP9pjUqBpPn3tiKtCuJVLdxBuLqnBtWcDMi2uo8AMwEwrLWrHGHAWTE2yByBQBAeXAN",
  "key24": "4e9PQhamFw8Qu5AqJGamYkVnGMX75GT4jrjjPo2wuQ57Tr6snu8BB5K9jEY5tro3jZL5gzLztjMacaotvErs24LN",
  "key25": "6uDoRaKLnnBCrree6RCKC9d94PRcZQ2aZmryMeVQ3S63ZWAfidju3njoK4dxq9Cjpu7MtHHGFLx15Hi5cHpxbNY",
  "key26": "wqwkLtMVj4VXj8Gv6WaGUtuKuMuArmvzdPSuD3RvBTapdQJzyi4J14GHGHDNynNKtye5R4cRCe1DFTdKf55NTAc",
  "key27": "5hqsNZPKZBh968rmKfPUnHd5btyWVCMqf63rzTY2isrg2YUvpH52Zmd7DbHXaGhRDYM35C2khJ1LoY2a6nmXyLsD",
  "key28": "2JRQx1dSbA1DPxv82pwsrMTyQKqJUaPosQP5nSqGt6x7sTcXbQHqDDYySfQ5gXsZtKTT3Cnjnc3FZhp2rw1ozt4A",
  "key29": "3jeExzW51GCnpeYpXGZibzCHxd9R9fEiWL8AsporsQQBzaQ8oy2LvM6y4GkZbpGNE9buhUhn4Dn2mCAZa5zysWsZ",
  "key30": "4EtsFAz2mejGyFNRNUaLqix1c9uKXnFMRNVKACNNwSHCCjZkoDdtydh895KckKELyoTa7SkK18rjhLF8BySPtTpB",
  "key31": "4Tkn46n1qk81FtmA14oK8NaZP1kaCxhhc6GMPnfVWvRN5B3b6i4aMSjzWuwR4aZWYwxZ66BTtiRZRbq3s3Xg3hEp",
  "key32": "27crV51ePgd5oqzJfozHEcf37vwAGmHxcUb1dYdyNADoxNd8jx4fUbTDTWex6ZXrest6GWt8asBmMrfrE8Fx4AMh",
  "key33": "4U9QKugq6k6PB9jWRguUjkiA2mzyEn81JZsarEBdtvVmUqYqG8UU6MrT8D3Y3unYTks5kDDCBLaQQw2QMS59s8Pe",
  "key34": "eYSBE13ZJqNvbBaK93uBPE6HfvYGmBpsofb2FEBvKVYYLZ78FxW4eSfm7xhdxqAKVX51ZTGoyXNFVaA9aeSsUGA",
  "key35": "4GkqC6XgNEyPcVumHepuNfmALTZnScrsxedz42nFWyUBx5o11E4YsbCXA1VFmiFPHYWrTjXKLPvzCNmRJnF5cyTy",
  "key36": "3tMudzLgagDMgVdrrdxpfKn6HQf2dHJnTzv4Qv5ba3GftezmLZjxevz8a1JRrBiHKWFM9iJfqp2QTh69zjrpuJ8j",
  "key37": "34g8iUVhEGZRi4hmGJqKUZewkywKFcws5mmnXvruzxaDoGGs1357cZ5bWw8KyY42UESavtuEtkNpQKGLjs2W6wAU",
  "key38": "3bEYWLNgCUt1jcocefLNzxd9o8V4t1jPnCaV46JxLMzZHUDS9yBLrTE9SLpSBn9QB9decTUxRc1a5Jg8CJdVnCob",
  "key39": "39nNsgFrv6E3DNXc89jFGdh9xCt2er5AVWFrwbybaAD3k1JjCYEoS7oaAJSYcxsNrBGy7QByEmS8NECj3YbmBuvM",
  "key40": "4Cs5gAGpR4YnNRGvKNHohtUoWjSj56kstDe8xXdk86MwbYgqEXuxT7zXJ9PfhYwfGdQNFfFWqrJfULVsBqWj9sbU",
  "key41": "ny5hqLi7uJKrYhzpUdSQ64jH1yvzzPtyLhYjTGD7otXNmmVjeA3L7F3C8RcdY3RqkdF45yMtPd4S9EaHmD2gYV8",
  "key42": "5d1zkzo6E7PM3cUKHtLNQrDSBhhWxndGgR7jchnrTmCfbeaoPt6e6fsFeeQx9Mi5TXJATS5K9XUba7zPbNSgGMyW",
  "key43": "fozC331xsKam9NQuJJcuXYngWKXYKweusCBp7UCeBgmGdQ8DveQpjydqg9VfKeAtKiHoj5cPUSXy5TPGKMUZTCK",
  "key44": "5J9TJcDT3mgkZNaEV1k2vVG8xzSV2w8Wh558WpikdyBWxmaLjgH6NMfGd2BcYXX2ocgdG8tkbi54AwnN2u7dEZUH",
  "key45": "rDzEFvefu8pbMwRDwu25DHYwQ3LoXkh4m8xpcjq9jH8s2iqQaZWbhYqD2eCf3JkwAsgSmPsEJYdmNW3hUGdKqkV",
  "key46": "4r1AFoytHN1bkrVRnLdQwB2LgyKvhxLB4SZsdgLuctB3unEVTm1UiYiYo6gpXdfjLbg8mv86kLhWzcoLQoZu5n6u",
  "key47": "2s9oyXzML7YzeFCdvkTd7jEK6hUTYkLqPBtHuGf7GB1gwGq6HJSpmJDFUAr6mkxKMj4zDCckcJBYbH5A5Z35jypK"
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
