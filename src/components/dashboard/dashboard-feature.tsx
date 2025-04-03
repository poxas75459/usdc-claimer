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
    "4tYAHBzpMtiXaFH5eQmirX7iUoNG2Qk5X7hVwUNGAkHbo8kjmLTC6bthh4chTmWA33atPAQCeSqDeDs4h81E2Qeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNwhU9kUiAWVudwaYJhrcrHYw87odnobp6qafQDnitaWmXEK1dHBGtA4hywqMQ3TLYsZu7Tcmo8JcTbpmNDgQrR",
  "key1": "26NcG5743AYnpgd9CaLMaD3MZKAKMFHWfeDtT3m4K1dGcVtQV8LjwNATPhyYccwBsgrJuoYq1asjhWzq41QcxvpS",
  "key2": "31G2GnbrF3R5NcaxzdLyXhewKDXD6fY9i2nQfKN19GWczRG8FCieSWWVQPAUvJpbtoRoeH72nRzPTR3ivboG32wQ",
  "key3": "2NVnCTp45td7Rwf2UuEB6zoK9gYzbXBUyEZDZK1FxiJhHbaLqV8FQotcFkNPmejD7ZPGFyTRbMiTcnCqiwzK5nGo",
  "key4": "4rkKsmfWhQgpG2ZgsoRKojQeRGX5VWjLehGWZCDyTYH36RGZ53omb8gufNRB7gaFqTRUqreUDPVwBNkWWStBSTky",
  "key5": "3u26FohssDkAE5dmgTy5CZbbHSJj3fjyD9AnhHDfNthKtydHpSqH8iyK2fCgyjkDzLTb1uYDEGQnWhErnB58smij",
  "key6": "5mauXdKnHdQDoKAL8Ccpmihx23C8eqr6kmPtN41wxYB49y212KtqZBPxaukH7dgMfUdBKWJXPriJBu2b1jj8D3fj",
  "key7": "5JndLdzg4U1CVYHwbQyDKgwC2sMefb7caUThb4fanvkCQQbY3M9NFzZDSDeNKVpLWGENXkJfvYv9MQ7oxa8eeLz5",
  "key8": "zQgyK7uPWbfPhGs7bGfQh2xyaAruYV286CPsgt4hdy74srptnjZSX1HqZEWA9qVDECA9pvgdVyVYAtPTSjXruna",
  "key9": "2idRc9n3fkVKVe2pv3gVAHHoghAMmiMptioWbwprZPV7dcyftuqgPvHxMkmPW7YtcdyAKQJGH3hqSB6DgxFr8E2A",
  "key10": "2kSGp9KxSCMDG2UvGYQ9TDGgXN4RuDCMo3f9Tx4ey9VtxGDRfFdUtVzDUh9yhkpi2fEVgmjVKFYZwd76Bji6SSRe",
  "key11": "2htKfqUbZ9NUwycMuHiaEeFbF6HJSd5uMFnnAVWmi5fioQ87RG35a9WuLbtzydqER7rfxjBSYm2iPfQcSkZqwYSY",
  "key12": "3M1o1DMM63PpDgBsEqZNdVLJffAWzr2wgQ2pAeFvKzTsDtxUeKkCagoC8PPmiogVyUp9hNF7QSc7jMDevf78pe86",
  "key13": "5nkCQw3HKQk9THAk4ekDW2y9iMcf2HsVNuaPMgUmZnMtXAsKWcoQeHMoNwNR9NgfQz9tKk5NZcamYdbRmoDudb4e",
  "key14": "54fU9LnwemzqpLdecEYv9QrjezUbCCpr2Q4GnBHStPQeCT3AViVSBLGtHBLWLYh6PwyGqAKLE6nuPbSddtjpZ7fT",
  "key15": "4edq3AgtVGuE5jYBi9sLK4PmsuSURb9yDsEvCxxJdbA1YFyWZFfyMrWMdv3HCUWHWBrdMG4arhUS27Yq5hcJ6Cbd",
  "key16": "2BA251npUFf7LWafgty4xZAYPB89Y5Fvt7NRPwq5FGQ66tAMXapZ5GazZDY9TRDekoUABnzbVQvpCGyRkBxMoU5q",
  "key17": "6161mKWudj6VFktpfQw2eEsQxmUzSfrem2zyyKtWD6rWkdnVkd8R5m9EhpL1MTkXvLb7PsLoXQj7ccUgU4yzMCka",
  "key18": "54RQpuuHbg6kJnLK6pcxFd5YZMztT9bcySPR3UbNRFPjZ7xTXEaxWhogsmyBCw97rrgfunnpy3fKNmskjvfkZYCu",
  "key19": "3GbmbUVDUYMQBdmc3go7vhywACQFHhej6KmFJAZTutzDaUgAduxs4t7vqvpJswzKMRActoyeNRV2whJmSBrbWJnQ",
  "key20": "2rgtqgyuWhoMHpCqGqdibMtXS1u18qFNydijK32d6gdYEGfzSujjvz7U7YLk6MkxsH2syUZ27bPx6ubqPgUvB6Fm",
  "key21": "5gv17ceFbTz17mcxDdao8SRYa34sr42WhPtV4tsesjP9LZnNoKzMtkiSnR6FvyoR3AEMyj6eg2xn4sLD3RTNsLuB",
  "key22": "5PsHTZwVXEu7Ek165qDdJMeiUJmXeqd5N7sCgzYuTiTs8G1cR3GVscmLvMBTWiGEKzBn1ApY9CZnX5J55ARsXDT2",
  "key23": "XioUF3RS5PaNDsx1wSEQB6GwgEWyfF7YuCDcXpWLufdtWkCywenTQSpJ3C12m1WqtR2JJj9oGnAvMQVAcqHkX13",
  "key24": "2cQyiN4XbjUteL2o2tRzX3XxhewaQ58zfvGecFzTuHtBXxe42uKHAg3ucVaJTRzUiW2W5Sjpe3saxFV8ihZMtQ19",
  "key25": "4m9J1Juts2u6KLcryM6Deft5QQPgJAgeHTcMhEHPGctriQQUspnSNiWJMyyTb1kpW5myYALHgkDFwPEsBAJU8yA9",
  "key26": "5NTVvF5iqZAueC96WFCzEdz3pnx5fVQgXNp4r2mLKS5Cu5k37wgbjEB1sMQfJz8Tz132yRqVa4pyijddprehbHTC",
  "key27": "3UoxxdSxitqMLEDahVAFrQRYhsz8fHsvWtPs83VMaMfQ5zTcvbv9K3kVWt1gna3dBv1vR1k39fG7ufTVG5MLF8RN",
  "key28": "2PLPSS4UdHfJhEEnbVVHMnk2a1Qt94dqfrJ5wZo5DA3kRjzDq9CRMzazFZdQoohDfpywZaSZKdLj1vHwaQMS1KJp",
  "key29": "XeBAeGstyDFD984LuWJBtca5WGReq62dAMjVsFm5mPRxPLqshhfsCxkkvznU3ZwoAQn8donEsMChzhJHU2GUGmh",
  "key30": "mqdDUyF4eLgfnyW4NmjhsKdN4NJQVcmX54twtf15SHDuTv6PhmzWXypRuCinjD11qmtvDHXnHSGmFzU3FiDtJ8b",
  "key31": "2kpAvNB8HLksPn88WyHtjR8XupZNo3ZB2akxYNa292qXwadZ6BZ426VfrTN1cajEM9aRXejApsPR92BYKESJUUki",
  "key32": "5FiwfxZnLokBHJ6Y9KoRDmRvnYjtpwWuagYomGZr7po2tFHHyr9ZR4HGMyeKmXMrRyd8irtkAj7WDsF1Dbr1T7Rd",
  "key33": "k3EwKzZ6wXFeW26HBKtRpXq8zbLVgjgW81ZCwdZUWv8DY2J8sgx3K2cq9Hq8uA96FkD1nwffegE2VKqntNoe6SA",
  "key34": "3qLKR57YNUccAqXc3rQnJ5VbGKcdTEUUG64rmXtF4eGELXpFn2TgRxYbkoY6xjx9x1jNRksy1R1prCma13S66uN4",
  "key35": "529ZedN32YW2JteJqMoSXnSdiDhNSNRCYX6CPeBAxphgkHxbM2eEMZw5bSvCHdZKNNDk2zebpwqri4wUwDkiHD3Y",
  "key36": "3UrFBr3s8PQKNX5kpNWcyerkPCu5qLnAwk4jadwpe2MmcJGBQ1wpL2uT8dHu26SX2aSqCc3nP6j8eKyDkWqByu3S"
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
