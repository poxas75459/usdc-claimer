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
    "2jih6VMFUbZmg8UBAjUa91c9wSvQTPAmE796YpF4tNKG4dEqLYA2XWe4UGbjsoLLQy8joTtntQ9cPvitgyP15wnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybdXb5eb44EBzG4CRjQWNXxNVzsKCVSnt9RfUybZ2hoqd95CVZ9RFw4qTzwUHxqWPAz2xPd24SFj6dgfsXCUz9K",
  "key1": "5oDhhaFdMrKQGTm5SoHkzzF85UzopBXBi9jmULuHqTvPg1H5AveYjGgDCzC5pdnidTEbkiQq8g3Tzw3Brr4iRBw8",
  "key2": "JKtfqSVszBBDXzcZPxCGeMPagJjrhWjxdNf7gVENWSjrQhdki19HQtNA4AKxQgFaT1b13JZkj64GMNsQUzrLLiB",
  "key3": "4UycaFeRtozvLLYdnvM3Y9m5QnzVA5tdM9dHMX13zgxwuBLzAdHu9yFqHeaKvupAbGdetwAAeXiWEKJGPyQhoc4v",
  "key4": "KZvCPJjwG2CC4tdfGC7imvyVrXPb75HfFUh15aCk7eEzNWfUhtLxJt1GzfH94wqMF5EBUJ6M7msRYTD5Lt5uyRh",
  "key5": "2u7jU3XEiFkbFLEVFa1y5ybj3RncKRNn55GF7LjZA7MvwZjEz2ughbtYSZeyaAxHeLoZ1Zx2hg4Fg89iur6gT5CW",
  "key6": "4HPBpsgxQMwu1a2LMVrEUuuCwFsx4ZEYPgMKDwghKxseFXJRQPUW7jg1kdD65Xxr8gUh5Q43NSbBpVw59SsYfeKz",
  "key7": "57DssWdgmTbJopKqEfkvQ9Rz5WYsM2etBFVVfxpkfqnvArH13htv7ZiFA1i6RJeqzaADzqP1g5MnuMHXAgR5gqDe",
  "key8": "4MWXnGRECjATwQ8sm3yMebvJVqAYBG8GM2PZvgyaDadwtYTziqCSHdRAz38NzS4gu3qTxsJKLbrygm41pX1GMKfp",
  "key9": "5iqpgf7kwkiQNte4zNnGMao3qastbEWuctq8fo2aUo5J3brB7vos6VWiEK5TRCiXTuRpMCfHxr1ZcEn2FUFwdbDn",
  "key10": "5n69iDzkpfPyZsDbHx5sxAjkB6pH6c1BMnxkpWqXHZhqCetCWnERmhwv4seyjfZTmvhjYwhtBKkPSjf5sQ7HyJgD",
  "key11": "GmQVppzidi77ngvzUAgxwuwijNFrQFT5BmQVUBCzFdQSchfifE3vYFQY7ncJTFdak6HLcBPuhzFuDBs4VzUkFLH",
  "key12": "296qTHtsamDZLN1acnjH8BVr4J9SFFrWwSMNcuCXgTCSQHqK3fDQgjyAvKkwGjvnRwQx9fNVDdcXiPBdHPSJigpv",
  "key13": "3cAvqt2qBnVrpthoQtye4NbmYje9cXnPN1ssbkQfp9N127WmkGvT7WG76wRTTYN9HPkNBYQ7MDEdZWEbkn43mCJT",
  "key14": "M9vxVbh9E1FW2BhM9os5vvWS6Y6usU86XMsoYhmp6W4G95eYqUmkxNNnVw2aM299h5VwWhKp52n6a2BeA9KMpjT",
  "key15": "63FL32xxtAsyQiphpNqESxuwy6SwbZaNEmDT7ZQWXtWu66J6tmei6L9pJKPoyLHLgXaqBBsFp3gBmc3j1cVWijam",
  "key16": "5Vpa9SGtE378gkdsZWvzUpgAkMKxMRba6W9oXKQp5wVQR2zoLQDFFKvHCFYCyqxHsXPYRSxNa8KyoU5dKLgsEuzz",
  "key17": "5tnE9ZciWHbMDQgzVCUiwe5kHCp2nhMpADvkZe2no1Lsz6j5BtgGiZ9S4aeUyRYUjAhTT5LowMF8Gw3knSVGBXJ9",
  "key18": "62nza724qieHz66KEoCDqh5wES5Jr3DD3c8VvTHzj9jj5cUUte571wJJUu7zexmBqmUWyMYfCwmCkLTWFs99tMTy",
  "key19": "2gGWLhwnWJ6bRNNXmpKZhqixGJg3MXw6HrqEzT96Zy8JodteeVdzJkPw8M656bZUJPoZEuxPWB9i9tghq4yr2pGw",
  "key20": "5EJ9q8yf2HCPurRBVpBKSgzQMAV3Lt1GDCNvp4a9oVm6UiDp4yHUQgTZUaPWcFYB2MLKw7W53uHvY37gtMLeZbkQ",
  "key21": "5QfZuqWsTCY5BSSQ26yJacF7AhncxsB5vfCg3H6bpCtaPAJpFy6kHknExCycbxzF3zP1AQuGiZnqboowdqy954wg",
  "key22": "5Qnsm3AMigemTjJ2MwfF6beeqe5E7BxVSNCfaMPAGpjdaBNkAJH5PU7qw4dMKbGJqSkDRUuCZXpHMM1pZbztb5mW",
  "key23": "2iwqsjH9zdoT6R6PsgZ6GGAMgVixJNZo78HYbyUWYSxmELtNar1t5qmiKWULMUJSJkEtxn7N1Uhm6oABBT39fyBj",
  "key24": "65oEWi3C4w4AdFuuK5Cw6dCbHUt8zXUyZMQtJRHyDUELxwxBzKcSM9dVUFqUS2xXhTG1rwLU35776uvZ6sfSFkEw",
  "key25": "NsqQT8LxcQ1G6QtiRWY1mTr95VxdzidiFhDZuqJN1n77SdjcDdb4ZDwgE8AvHg4oAkQWsyGP6fbQxpvBA2rbtdN",
  "key26": "4jftUF5dWzdVxWkestwJbD9zUpdUB79frk1tjhNhmkpPRJoEX7zEmAT3DuQnBZduHwUCwxw2W41vgNGEgvYznTxf",
  "key27": "5R2Wqg7dPkZB6bxdSQuuPrGNsUsCAGVFSSYwmC7pHqpfrNSbntigLPCTPVKk6aBaT7gfqhrQrEa8PRcapq9421hM",
  "key28": "8zhfsh1kFNgaujb7WSbNh6R1xdQ5JaqySVCYe2tRR1UK2qUPyWcFA6CYtMrHBDS3hZdhuw9Y5UorJ3tdRPaPStc",
  "key29": "2rj6vaQqAMprFw7PTDbWX3r9N3ypNxmKD4DKpVnEoMRrUYH7aMummNJya3UVBxZETFdfBJNP7erKhDbvNDCASfG",
  "key30": "2td5cgHZcbzjRMuu1RGDzidpT9NvKjqL5stWMDZuLcZKyqG5SsJghwLYAKWLBuQBGx3LsVfj4h6HZwYuH4aixwSt",
  "key31": "3eLV8cZyciGt8hsaCZxHjWB6yX3h6xGM9pfkfCV5xYLfGgJtiLtQviT71w9GPW4uZUEa4FKZNCYXUtPcUC2WR16Y",
  "key32": "67NZQPh9TisiMGwoTSeRUjLGJHRJ724nRCeDn7BgpkXkcJfsn3XNEt6MQbYgD8cJzKjMWigRChuzSFfRBvMjDLon",
  "key33": "2qeN4VpJBdiabzY1eW2wXq11JzqjHMbUVADd4zXAf72tUjCZXcCSY6rtKoEq2qQ3PtE3zuUPZospLZPeYvYF39ZN",
  "key34": "4jzaWDVVJAe4rZAazDh9kkwd46GFEd5TBtQ9E7NRGwXFBoRDn3rSKynW3evjq8tH6Uc5nR8AwQei5ZJ5zzq47jb6",
  "key35": "3gxQoMPNh55uq2mLPQsF2TDYf5Ciohzm6DnnqjGpKaVH1a3hChSPTRYbaoTUj9ouGv1KCbcZA9cS4jbmWgtwteAK",
  "key36": "4bJjSzWsSmDYG9MytHa45aEBui1MHVZRvbvdzwwCXUuM5wWHkqXv5FWSTKao7jsFFtmcZG33Ypaav8GcAweSd8s2"
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
