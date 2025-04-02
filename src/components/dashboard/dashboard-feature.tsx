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
    "58H9HbCWpEgtpcNJroYZYrVacpbot6VbttHv1xU9YwzhpyLsL33g868AUd1TtJEQt8RzvpCnWn5k5s1XZES4egZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4GCuDwcLxVtdJyh58PNvD7bSAjnHdL6bNzvH5oHJ28kEU9KNWWSWDYJfuNRCefktxydr2pPkFX77gYG5NZ6xB9",
  "key1": "3bS1TDNRKrnp6SxsdmoCcKeKANsPHgwvRcGvPDi9EMhCskd7nEC6MrwLcLCCDTScfpkKrTqRrab2kazMGWyANH5k",
  "key2": "HNujv2jieHDs7TEuqDpxyBUE3L4y7rcTjN6PUYvApZp14udmn9BYtmMrpad8pkX1btpBs4deh7VXoLGZ6wQNRUm",
  "key3": "5VkswMrLDZ84rrJomBxFqgvom2YGcNZnRhpqP9qjtssiRQQHZbVqasLotYuYx3zZJF7URGZKkV4ZwrbGpxtj2dXD",
  "key4": "48XKcBdw1RiqLHse7oimQytEEQxP7jo7dnTd9RBMDy4CeHVe5ENCvmejjM3SRLJxfK9Rz4ox8Uc4Yg9w4anrAyVZ",
  "key5": "3P6SDuzxcG882Q1L4mHLJv3ttzY5kGCBAgJnGrC26su61AVp5r2KwQdKocXBs3wYwLDX18vWjLtDRqTxF8tTdprf",
  "key6": "jHExGT8J5rgjSAGK5pfNkJboQbUcfp5qLaDtKWYMpJgUzswEEdc7YGzRW1LUYTYs5VodJjEKkz58k3BTVDRHZfk",
  "key7": "2Qc5bruASupUbcBFtjAjJqRzsDNmhfJKK7WeHzpvCSwck8oQYgg7bZyvzAfNmQhzNUTUtMU9F8zorTx6ruW94wuh",
  "key8": "4q8e9vc6HVCdJQ633kRg8joocDV8DB5NgwKa8NNT4S3dpsqCgqbDtQbpZGQqGLVSJBpwTw8m1SBJ7mT9LmM3wRFp",
  "key9": "qBWz9VcdXVF56p6dxXhCiR52BAcMDdBW7mzxE5kknu4pLjRHrfzhJatwGnb5MHnasYhZZ1TAypZzZyJeezQ5KW8",
  "key10": "dLs1jzsb8Zoe3tC5AugGaJFJRw5owfCNwDUDLVdre8zssRoZ3NTZYmQRJHA4xG3xeBDDoxTBfzNSMxzdkT5GSLZ",
  "key11": "3z3bN9R9Cd1itE4H4iDhRGvsuPoKX3LX1VEtvNk9eBENpt7BNyPgEkxcg7g79568kZCzdcCymEL4TNVGYjWSLDz9",
  "key12": "HrXj6JJcjfFRi8CqnNCddSJ5EDcsr8a5CjzkcJGxdNuRJ6ZJLeiFBPLyEMtYAb1i4HPvhTosbQYrvhJVEFz1hFH",
  "key13": "5xLaPSFX1CmZKHbYsLnnnpVEKa4aWbGQLDJXxiPvkcd9sHdGWtavCCL1J2CuYdNySjDsX7r9NNrWXyWHs6CEvhWp",
  "key14": "31wY1611ETAd221kJrWVawPz44QJFgdFr2PHQZ4Hpwx6hfVVydpqD7fnuNc5ZDd12GNZD7yPePWdUqyK19HiwGYQ",
  "key15": "5CFc5GXk21oY6toFnN2kEeo1h7RsW1xPfT9KhtKkecWQsUAZbPQPRnDDQkStLQy6AGWqA2WygGdWmjf4thKzdsa",
  "key16": "5siq43xnw3H3zC7yivXVdbiUoQ8sm3xHkvWBN6eQwwYH27jWhV5d6unN1BTcfT2fxiXg3uUwZVHEKx6DpdwCvMbq",
  "key17": "4m71n7Zgjga7osC1pSYYx7LZXgZ2cpTzJ92SLCyPgjNDtZTZUzANAQ17ddrzpEJcjNKinCN2wTjfoESUYyxAyYej",
  "key18": "4vKpytqic9zGVVjdDKDNKHS7ayVPfpYEHGTugKbafENFKQP46mcF8dfgZ47soTCuWftT8WmTcy62nArrn6saYud8",
  "key19": "4KT9kXCKv1LgQuakhLMDmgJTC7MKmGWkG2wAV8b26v8u6fPjm1unH8JMpXGi3g1nEShXRvgzUaiESQGiAZ4tg3un",
  "key20": "5JFETxVtMkYBUnzTpLVED4Wp9Rcm1PoWNpom72nFY8BvdVsGkFVwFtrt1m4Hbm9NghUDciCphn5iaYuiRwu4AGwN",
  "key21": "N3ngr883tEf1CZCxLPdaB9StR56w8h8PmzZSztF334V8F2UhJFDVeDgSV89j8TJc9dtQjqE6gexne8EAf9VBF11",
  "key22": "5sHRRu9wamwoqRu49DhTi5iMCQkLH3p9ySszMgJSLeh5jWnVpn8Zh48TUZxnh6iecQdZU38pLQPJZYkKYD9aykzu",
  "key23": "255zCwD7wnnxLQv1ES7SPiT2WM7fjS27pHvHiUPdhWZJG8g7k4KpTvAeSm9cQjxco6aDt1uReJp9fGaxXsBx5BR7",
  "key24": "2z7CcDdRn6Z5DG41A2Raf5fUZBrnGKx74AN9NnaBAPnTW7aAUMRkv8Q12CHbT847kSXqhGnTeyLraUyqD5V2ntSq",
  "key25": "3kzWMxfsyAkTL7S5C9jVcNJsJ4Dsx6BDQA1wbHr8g5CZFuWRLat5rpiLCzt1BxK7dSg8erquTHxQdgvLdZjhmV86",
  "key26": "2jo9CEX54iz14a4MKqdrvkQz7HS7rKMHfVEhJdRT1tSRXo2NDyTyedszeczeFY8rAQpLjCS6nc4aS2X3ronUBKkS",
  "key27": "2fgMkwmydikvu7cVfAvVMMZLBFC8q6n7JY5twGi8x5mLtGekMvrRNCdDUW1sN6BGtFip4UCT7ToryDTuoMWgi2TP",
  "key28": "ajXpQy8AHJwKJc5Q5ND2Qm7DNq8xouhT8FmW2jPzDscxaMQJvdgWrn5CK9nu9PMP3kmRnTR7aK7ser2wKyErM3u",
  "key29": "2HHx4jfM88MsAFSmKPr6PYjqXVXTeGBa6vopxEqNmhcoBopQmpHdqrSQMaUoLhoDxYTv56XEKuwg5ig3YKHzNZNp",
  "key30": "5PFoZQeWa8o73jMb1XPUHDdGgd5sbFDcp9gYc3gWNww2xWW5NeTrZCEqwQQ28NB1PoKzW22s347vvZov9G3TCeAf",
  "key31": "zW4UUNWG1UvL6HwaGmYrviPznDhhcrwXohzZpZBtmrDzZDCKDBJiyhnYZXWcDX2K3UYeev4Wq7qwQsPe9Vyc1JD",
  "key32": "2QnEUpfyMfehr8HUydRF9vCtand4qawAobmGCxRQR5mDka1ZVAhnks53sFKeJRTYcP6kUhXKPDBzQ1YzruDtbPmc",
  "key33": "2rcFnoeetz7ntUFvTxiArPFSL5GRjoteEWxeFRWo2z6QjWnhKPirZgFDr332BYbBvnvhzVYEorzRf1UHBtsptHQL",
  "key34": "4pEvvL9PqQK5HnaPt3voGGVDHJZ13zRDeNvCoh3yKQ6LD8pQfi5mY86QrCr9vCG4eWP6VWkSWuw1KiztW6sM5N59",
  "key35": "23qWw3zMAew4SXv99pLxR2KuZDtdPZ5Rg5RpJKD2N2kAtxTCHmbsMehTuyayDNtZQro4vfR3tj97oQCP5jGY9WKQ",
  "key36": "5WNJzaE9xm3wdj6rM6SRbfziZigcNfo9wzMjyxqSmeeh1Mi2XWDd5XE6H6zySGVwBXc7kZ5RhCVY9VpjyzEkx756",
  "key37": "2Fgqgngi9y4R1KmeYJLkbNoQsTXsAuFdztiLRBUGPWAY8AZMJUrrcyC7eMWzHd7gkczLEGNjahCvueiYzXfTQr4a",
  "key38": "3hkMr54epnNhkDwMryCAphuizVm2WwRhD441LQoSrkFvdswsewRVbKFC6hWNdqur12e3x6cRVF7E39WE814LKgUT",
  "key39": "2CbYjzbsawwTEfeMjUZcBMNsh7rZPDbQdigT2vP6PoFzyy3Gb45fVYjUY75D4TzmUZRfghb5a22SuGaUUDqGWFtV",
  "key40": "58BpWHWFAknFPg8qR3piy9t5SSjkDgqgWpG2neNwwCdUgfvBjJswmmaQDnCfgf4VZDefHs1Bx94uoJLxVHrgxfRQ",
  "key41": "2qshXEAWppD19WAJpgWPGvVDq3f5t8xsuptLqerFxYoN4XFu6fpcamjgh4HrmtuWDPLAeaReNMh2DKfcMcCwKebb",
  "key42": "5soRDpbpC4oDrj2N7zG7GX43CFBUhdTe8bFZzMbMqwwDjRX7pKNP6BfjeY7BsxRERAyGuQY9ybFnogA3z3CgdJBZ",
  "key43": "6Ta18vcw8s46NHi2AbU2eTpDVDBp58Nh8MSVn5aPE8421SxCr84YuXjp7mq7Je7GnWmsjnathTUDdET76hWCJHc",
  "key44": "52Gkjj7wQHmpMNLFK6qgrUWFEdfw512CMdjj97fo4gq52bFeMtp7QW3AVFAErWrfptqMxt2Hn7EPbhNmC6JmBZQL",
  "key45": "2x3SZ5xWNTTzT9LNtdvsGv5hpza8HDAK9oaXq3wvpi2FbjKhBYwrVvxHDM15EMDKPFy4XfQvRevsExVfppRo9AtC",
  "key46": "4aWmZGN1u5uyJ44jUAYpP6m9Qaz5N22LxDY32e3S7sidLVUsrh8H3Yu2kD1TiXGYGPMV8gyqMBWPBVpyPuEd8mqe",
  "key47": "yvTxJu2WJJdig1qxSjm4wAst5vijjYyZYxL4MQo6TReByoRzvzQvcqP2oK7vXciH4Jj6X6wBib4fW9rja8YghQh",
  "key48": "3JhVc1L76fqM7uzZGijkrxLdjQPDuQEKE6qaoiDy1XMcpk52QbSfLa94VPBYFTQrYBqhgDQo7izxtExDJAXdc6SK"
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
