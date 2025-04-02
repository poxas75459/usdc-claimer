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
    "3QUSf76zXPhPWfSNAsBaMSd7qK58UpzpBFZFZUMFFKkvWLNkDt38JwEhymzEXZG4EyYn4uMyVPChTioBPDjyUyn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixaSRXHMDJmwfx4AyAZCJsV2YPTZ79LShxvXctNLD5h7wWk9RAcJqSb7YDisZAfbtHEZk8ww4YvhVH5DwsFLPmt",
  "key1": "3zvHGaWfeK5LknF2L9dtDk7ZjRRGL5T9C9jvHScitgfEDEjEH8AzrykfvhMiKHnFc25ieDEGWhPX4DA94Bp9xDPg",
  "key2": "5HLvBkNdcP7aS1o4NNGkrpfWVWLEEwKcTyPPARy3sZHw3cdRvSYTZes3U5uVpTZWcpfVwVGH3wAVS22AHY9zPwCA",
  "key3": "tCUypzu2637TDQGVJkgrncf6n6HdBB1TfN8B8zMVrKUA7wKzZESxWqddR12QFn51qcGXTHcfEvCXDoTcPcu2jhF",
  "key4": "2umC5hkV9TuUyY3zRUnNzbukv1PbdndsAgqDH2yAyxK268FEAK5eZcfnWnnDniqNFS9R1hPjv2Y2pHNxQ9NLBq7a",
  "key5": "2w3YWJH7GTHjEE2n9qGPcCw8zEzFzknVP9RSvXoNAcA2nXQWkEDa5wvFkXD7hbtFpvP2F4y4S56FfVF3ngUTzbW7",
  "key6": "2ZpDWuukMHxU19kiqKui5rPJAUM4igNGz2S6kmsQikTYxPrJs4UPV9Ph1hTRmnKFckQbS3K4vNKnVMtnfnwmVKoW",
  "key7": "NoXqKPL4kJa97gq2Km6pGVzT4Skq2Gqksf4rpmQtfwHu2RNLnKyWLYB4B7Fc8tCr8TJpt2owkbs6Lk5snnkjenP",
  "key8": "3AerjVn5Bso6RJdGLvc1bLF2Sfn1nmSWF2SAakVS2N2FVg3dEx7hb5WjJmUajDg5XRC6qwxgBZ2hb12p233Bdi7r",
  "key9": "4LcDpZyK74r3qV1VK1gZoC8FjCHtymZorzSAG4Y5bMUqWFWYZMThXf4GuUCEKq9ygUVP18dgR9bSkahoBZwCzokd",
  "key10": "2TwHuzFDU2L1kLhEXzwyQ4b3EjN4DD44JBeTchNV8wGPDkf791Afaw5vJScXH9jce6ARJhn4tfwFRq6FgnAcDoPc",
  "key11": "m6GrUHhpExtGsbU3avZzBCdhmH1FQxqsH6se3xCzb77TSJ2YLPgyakydpP3K4TBNdM32JCbGghAjzqWEKecyyRY",
  "key12": "4EALP2LddYTvTX5Wr1aYbHpz99QJQzwzADkhPHuDEJoyZQXCc3gXaVYhWS6BYARytJ46osYdhjVNSGZL5xiGBKjx",
  "key13": "2t51YjiYNKXsxRzGNgkKFn1mMXo4as5r9zcgDpMzmRnBaFb8hzDAwN2uZRmFZXgX41VYnrb4j1of9kgetcHC9Jxd",
  "key14": "25qpSB75PHTRvPGNwLqeKThxktLqxrPkBbdYVrNTYfhPoCzH68ZwZn4ESkojc2rcPs8dmyNg9ny28u33XnSXH5Qc",
  "key15": "2k9LvwcGSFLiwJ5Grz5Uk83zYt5BCRr7exmULieiDdghrbDVNX7GFdaWASwb5PFzhEFCw2DPav6x75CUJwB9RQhb",
  "key16": "4eBvkKBk8eFfdJpYonJdbvGuaz1fdLATZrrQSv1iZeFrvX1xN4eWGk64bbdrGtSdKhGnPisKpogm4d9MXpD1raf",
  "key17": "4MhnTfY3q4RkXXEQyNVpekgPuAfgtoVM6B62xs2dkvzfU1wWWNBEw7gWPfLGGR6d6gP9dLCy7wC2RAVtyDfFyE4i",
  "key18": "5wZ7FMzjUDBhdUAs6Gg5G5EFj5SE1NWbzCi98463dmXNw2aiy88ikT5ewRiArGadWxvKKi5DKF6syisaBuNLKa2s",
  "key19": "2LanLQTUVXq4rfSjvSFcb5ZCkDpYoCXFYRPJQYwVfiJwH2asJzMEJsfAvra7mJHApCqueAvpVQjDr8SHCo1rqFpe",
  "key20": "C4iKJ7yuuGuxZRbRRvnriBz2tgoM8krCCbV8nzdcSd43raCZJitn35tAM8TANSpUyAVb3Z3HCLijqUwBPrxoyLW",
  "key21": "BAncd2p8mtDUruyhuX1GEXrkvobgmRVwicpVu8NVgAk16twekYEBCcSRf8fED81bFpEqHsQSjPjbmNud5z86ThJ",
  "key22": "38P5nFqzbe48DVFGDjDSCrCrBCiJhMKb3JPb5KPXKTowsUX7nqwkaYiuJG3TMuT5ETJqdZoTgpfJTero4LhQiW88",
  "key23": "5BM8GL4Vi7n88XjnrQX1PRRQiUDMZHKCNaigHBnhh6fDWVxdr5jVXKUAiqGmYHTcAZN6fPeC5NmEaSMmRFKfFkF5",
  "key24": "2ktS8QeB54cmV7CHuoN2SgnC6U7jZGx3U3winoa1Kd9iq61PgfbyxUkXmGhKrEJh66KdJ3w2n3pHwPJvhT75XNN9",
  "key25": "46zHP6MaSeTDAoHNp36TzKpEJPnoq5upku39bqmBWzV7Q3nthaNAoXwJS7g4qmePtZVN6YUzCPmUf52FeRvrtih9",
  "key26": "5vuqHBCMuLXzgzPpbrMwarn3kpgqivwvnPV9qJgoBpxfg3qStFp2dfqfu4LX84hRHuVbVhsi8wdLTSVGgAyVMLdE",
  "key27": "3wvG4ntPNDHaK7JSNM4NSGBHcvHYrUKcYrz2VU9sJBbbpDhnZcGdGPseC6hXKsRppzpBmfpAxqCHFDmLML4B5aHC",
  "key28": "4Nk6NFBw9EBeRmDLAposEpvUocwEjmaA85YfUfkfTTCYMRZXnEhytASDLSc9r1tGchuiVZdLnxmZ4euq3PMwm1Z",
  "key29": "42E9W6FNjm4CBzKFVjSyqyL56SnSqUN3bViZ5NxwCuCGVxjTqQ8zK8jkZPrHnYqfpru7SpYapsp5W9z3WjTf3Ka4",
  "key30": "2EN8njdUb9M24vqLBSUMEL3YStVJMo9kj1ERMpjCWYYRtfk2Pss1JA89mRu6LYD5VpMmbidimNXYE4PA3Gg9MpVt",
  "key31": "2WhKTF9ohDk948C5YAJyo4egcc2HrBTSbNcg78NyNeRar3drk5fkMoQUgGVmU3t9NvHkcMiLS25Gy8Rg7unFLHcp",
  "key32": "48bAxUwVgKv8kWmtSRzeN7qm9DPDXSik7frTXKbeL9ZFUp9LEodhVQ61maCgW1cGoR1qYcr5SSj2SP2KqcUqzeVQ",
  "key33": "3Z2ypf5AQJanNbq4NUfQMR4ZGyCivVGEGPh985iYf9uCPamrbj3sQmu1t6MM5oeJrWTdxsPeHNG2QzzXjFnQSLqF",
  "key34": "2Rjw1ffd5973TaBVqConLNbETUTBad8U6UUw2f97de2DjyJ1845NZTj3JQnbstXZAmy1tseEQsb9oMqxN1m9Zz8Z",
  "key35": "abdS1zkFLD9T6UPmeFCbyngn2XmV5cBm181VSa2vTsLoAf5KBVeemDbkUKqziyebztq5EDVNgaGQaYLNzGMC8FL",
  "key36": "2N9NifH6Fy3qzebMib4eMXBFKjFrvYWVmjF4jw4JBihyvyDKbTM3s4GhrFXHCPsrrPbjdUUY3v8Kcor4ZecYzC6h",
  "key37": "33LoNVgZxXfSBtpJ4WQqBWzCCHUsBBmZuuy4tqnLkdoRQyVUHUKn4bgVkkmwxQUdpc7PV2ohHAP1UPorgUCStACi",
  "key38": "3RpuQ1i1jfeDuhapsFRaPkyxGmaGvX3BMPpEF9YWE72zG37s2jDyaqhhMNHwHTRepsNFtpceQuE6DrLXMajng9eD",
  "key39": "X3rm1nddurHz5E1XSAc73NBvGF8osaizMGEBm6AzDaPD5QVj9WaGXim7gWh3Mj3z3RU2EsmJxwPST48ZNfcwALN",
  "key40": "4d4SZB6TJCQeGm1gACYCQvtuZELcDPDBMeBGWE7FLGQ2C8gG7xCKyVRT6JKCmG893X5ZE8xTQpb7ECPsQ873rVLi",
  "key41": "qEedHmp3KJeJbmRW9Uyw2t7wjDxX5eMPudLvhxmrm4mRB2CUiQJ8GQYTeRJDusdZjyYhF5tXSxTyurpsNKf4JTZ"
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
