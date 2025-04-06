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
    "23to897UyWAhH7QTHFcb48HCpvSzbGRMdBoXjReQXrtiXTND6oXqVRqgaH48zKCqmuJShQXqX7ategcqDD8xXYT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mz84RaX8QhV9Nt8BTAf3Qp4fxQtsDjiDgcUq4Cw2wsdYtoGbwtvaFjkqQdxiz5DEphncCzFeoZV39oLRzZX5Eda",
  "key1": "7jbuBuAAmYPx7TMfac8VEepqkJFeTEAKhBf27qfFGrBw9Tjr1WmD35pBHhwgcX9FDnGLsGVAtt1SGpNUPmPiti4",
  "key2": "51fcDkSAjG5STA6H6mv77Dj21wgUALt6pJ39xdci4sghLF9gq6wD3HQEEgE6jkfsWiAoym2LAGwmSBcuw8HANPA3",
  "key3": "4hvR97W9Q8XdSTfSQDwvsRGDn7miiCZcLxPTMzisAaveLcmKw1YZ3EaMq2K5tZrxccEHsLjgN8k5RqJ1pbnLVg72",
  "key4": "4HqHLyixSBAPSU7xBZP2tZUf95cbwdHBQj9qQWJ7s26sNXB7Hr9gDLn2XLJXSDnipCVjnanCmj2HbaaAL9AstQGT",
  "key5": "31AhNt4pJDWbYBUxe3PRBaiNBx1vr3ZX7SUTUyDkYX8YfTWy3VKwuxsopDx8c9QPc6yRAEH5WZjRArLT75hE15GU",
  "key6": "4TYBMf8nP65XnLsUBWaLqme3iCRQNsCjTprVdzqL8JtKd42bBBs3FoVHC45wdNY6MCgLbNadU1w499JkiVbJx6Rb",
  "key7": "2QRyuE4MA8jrgTV6XXFrgJCou1qKocLk6qqrK4KbsMyr9mFL1BrSoTNwmgqSP2WBwYos9hQZ9XxZLC3MM7kx8KS6",
  "key8": "Wt1zQFygQGGiorzjTuKAY59YLR5jWaW6p8RxnokXc4n7vdjfREc8xbNNDwaDGqMqNZRXLEnUpk237sqYvguD5Cn",
  "key9": "5g5dKVksUMK34AUwTak5E9QvEc5NNZixHnWyzgyRL1G9jkE5CHCVq5zSsz9bEKQHDiEcgSBsw1gtZwLMwt1hYqvE",
  "key10": "5f7vxiFbLECK5hyndVgpzGayZRGn47qkcHrVYhnyMUbrRfd2KmkU6m9pjQY7ZxBUqrV852UoNX4jbYgk4SnaMkos",
  "key11": "h3KVBdjW1QEevDhFHvfLdCjaCsSmHy9kJ93jnakUh2opMRqf11L1yGCcrBh2KqYh5xKQa5ZneYQPxkePuNxqPXC",
  "key12": "MznGzcA7jbbNGyXWuuT1Nw2633uu3gLhd863nsFMGwJM7PndtcFCWw9EE6SBo2Nvr4gJgoCTR1ucCDd7Askzugk",
  "key13": "3sQUjSgJ3aGESu7FHDc1nJAQrudwnCmbFwoRvKRR5MD1fK3y1tjz3uLoM2MwEgx1LHo6a7q8RvcHfA7yzFNwGeR4",
  "key14": "188skQaWm1aaQf3zfGz2VSb4b6jqbgHrHompQeUXpXQtTVcigUTAYgqwKq6v2vpszW9RUpBxS3pN6k88985qc2T",
  "key15": "3YNFE71kX3KrH9NjXLTvASbafzfdPY3hqZhV1BLYbmfh5Hu6e8ernhZGrrxDm3ffWE279yr85xxtYo42y1rd6USN",
  "key16": "2TopGhwe6MtYDr8FLMP1iRrzhNoAeqVqPuX8idTcE8aXa3pZbHE5eJ53a2KFEtTwZLzPATFxbTp4RGSb1jTSK564",
  "key17": "3xydoQ5vsabihsrtKEPkGwANv9QkK9rQMPFC6uLyr4sUxq8bTAUzFgCX65b8D2Haib2vrFiN96udHBbsRzGK78h9",
  "key18": "4wFTwt3pzzpxzMK1Gajoxoshxx6iMBzNMJFXS6NyV5rg52naewnsy1QbB2eWdrooSLQN78wRpcMaJcXaar4oYL7v",
  "key19": "2TD2xXwzThJBjT7or8BMFiTtttJKaXSXf66st5DfNx1Gxrkqc9SEwYBZTCqF6ug21AbuRKC5BULDnTqhzsy5vsao",
  "key20": "qTNCm2gMsRb2FES6sH3EsaioyMRZXcis5rcUgQRqQ1WYDyVYasxgmHi6RRf2jHGLKKu1bZqxfyfVRo2bjYif7xK",
  "key21": "fBwzASLLxz753eKo3NpoPNB4qE2hxocVgFGQ3tjPfYHafB7MvSb772yrWScYzq6ejWZaPJifcdYkecHis1bjXph",
  "key22": "24tYYPHRTgHrkarrvchxrbx5HWQPv62Cw9uveaZX9jqKwxDZxmEwTP1JhfWjhXL2ExPndfW9raXJuJPQKZn1jvop",
  "key23": "3Yhnzhc77fL3SWkcu1CHCE5WCBiSXg5TZJ6WUnCVz5aQfZkUYjfAnJKr5SdRKXPKTpww25ayNnVmfuzxthDRat1K",
  "key24": "f1gZyuHkYdQM5sZWiZHtXMKhkna5tTDg6hQ7cUFcu7iRXgoxJuVZiGNZHWHinvx11pfQFs92YgyB9FTnG3xH2d8",
  "key25": "4fhTL8hZ3GSSKipFRq1KF5iPgcAj5g6hFQRfdZYHAmkMMDu6hhTmNM2GFjQ1cVo7YFvfbNrcrC4gAAcPUwAsumok",
  "key26": "D75rFYouyteZo45nqkxifCP9d5MgN9YZYeBNhQ4u4echysr1rbNuoMv1rTdfPcv1zKKArWgvgs6d6P4x5Qxx3Zc",
  "key27": "2qso5YZK5DoFfJXV8oh2s972T7zuQwTkVWN39sj7Jpd4tvA2icSrgeU8tdtB7m9Xj2TQorSPJdLQvsD8bnGnZsiJ",
  "key28": "2MQ4WJzz5wrVmo5WUfEnwxKWmgWrM8SPm6vo5MgwbSSXcXZhkt3XKdLMnQEpjmvXYu9mJf324rCA12TNT8KXWq9U",
  "key29": "5ZMVVyUoJGa78txtqYwxPdXAXC98cKCxeKi2RVfHYKTkH8CZdwbvQdmUYvxWvgboHJLkQWeifrWaPcHjghLGZ7V5",
  "key30": "22jzPB5YDJPnQwM2Fv8Rpb58Mtu7atkFq7k7vkDHJ5WgUXwxm44VHKKofUrZ3xX65VV5ZyWjHLoypRUMon2bo3Hp",
  "key31": "3qXxg6bm3VX524JLPYeubFMSZL3U8HRNMQx8LvcQD2yYYcPvQQoa3L3QZRUtcfcDBDPvyJi2gFFmbKp6fXJuy5F6",
  "key32": "ppW76VuAPXdZvEJTRJGzzjSwpGnSeHUiUgYUSNbehEByUKHeLFpbW3fvRmZVDb4Hxku4wTqTJozwSsGR2ZSuzfy",
  "key33": "3GBPaBtcu1Fp925Xwr2Js6DCjQPvjU9ugr2ygPyZHSoaFcFABJbXRCQfph4iYPs48eCYDgA8AshFR7HbA1z58znq",
  "key34": "57A5J6CTNG2BEpqyHyDUUc6mRV2jgobWSayeXyCir2aykhBBHeGuK7JUwUwgEk6KK5dsqgz3R2zgAxcerWXtXnSi",
  "key35": "3UdKNBpT8DtFBvBe6uYcAVzuxF8dwYvxXTShFLZkjEznXHJ8LYXapAVGAFMwHTYjGEQSaGwSoMRMkJiAV7M7EHmd",
  "key36": "5FXqpmXEotEfVoBiLtjTx7Uyu8hk1xEoxfaefmn4fLCJiHRrc7VmSH4JwweG4QXvKfD2y6bcT7N139EoSx9orUEM",
  "key37": "3Ua9Qofs8LADAp12TPngoQvK3nsoSDBpkSbebjTBMjmAAivwZXH3naciR136e5yiwHT7fXx7LrcJ6F2V9Rcg5PrJ",
  "key38": "43B19A8DUdgQc8mJVwoDir7SHgQHaMGFPMbejibKAzfp9ThfGiV7eCitPn8bQxDmYnCXNLnjPYxN18mKTk1e5L93",
  "key39": "4fWygQCDDjUr4Hio99QrNCz7KZW1KQQPH7DcbVXo6zhZaTxE1XP1ZcMiuo1rNokEbyQmvtrV4vFtVHCcyzgf4baH"
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
