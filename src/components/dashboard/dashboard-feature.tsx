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
    "4LcDhpJEYMa3RkQCLS7cGQNZMJ9wsSAfgFoz4r7DLpcE1Mw8XcenG15kgc2YFSRw5fEmeQLiKdPk6727ajzY1q4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYJKzGdEkoUwHR1HXU5cCXLNkjeiF8gs277G9toBpUaugKvJXM4b62vBUwuA2oBriDwT4UUzsAAjaKCVifnvxzh",
  "key1": "2FTMCrVozE7hV7NNGhXwqsLEs1SnaXwab44nhHHhHdit8bvmGHvWw1JTXpUmFtqePfwV5RD4kMYEqxM4sC7FMJKU",
  "key2": "3mAJEfQtgxHK7W35t3VBzyo4NxHzHCyjbNLFbQZS5e8vYbLChPE9wgpr2YedPnuuQD7SZukPxD3JMR39zG8w8fyA",
  "key3": "2DNgDAgHQQDH6nNXYN8Fy3RtPPDgFZgt9HwmSJi6ccHrrWvPGpQY8nsBT34UfbmADav2T7V3x9BPRj9UBYzQJL61",
  "key4": "5Rrw84MLKBvN3L1dUnRX9MS4zfDKNiNpbukVeRak3Atsz6aGSA4yNWafHNe2W78CrxtnUQ8CopzaqvA6SfvZgQQy",
  "key5": "5svskANhDqobvvHwhyefF5rMkdV1VQFCrugBNio58Sa58iEY88cYoa34ZbTJeDwXrNLSt4pHCiTMA1YyPzyQe7A2",
  "key6": "5BHUh3HgpbJBSKqnwACKX13FamySsobAqBVW4Ja6po4TrvoJRVXTe8ewuw52j14PVBEDU62QrBg9AWzEgbKYeqg9",
  "key7": "5RV5VGz7JaTmBAo7w6fL3RX8EP5vBWmeUUzGdajpcKyhpJWJoHUZ9CWSXC7ao6aibGiuSZLWhfMm9Ea8ocGRaArw",
  "key8": "5ioHHVf2gaJZnGPi3bQZRHvhJoHme6JZcefLG2suybcjtASdrzF4FcCcDrNCVh5K5bqQdsrLoQDWztLzsefCd6y7",
  "key9": "28JqkDSzthJZRGfMmR1BabDb2L6aXZvS49bKa8q1fPEFskaHWTR1TuwEBXGedwxEUgh3gXfb9L7LidauR5nL6R5t",
  "key10": "41w23CJHZZ74ZGFDLG38cPiubKJDfqwG7vMyNr22xN8BSUjxTMs8tJCY3hVMXJXotSz5ZkNS3Wxo61hLWvouNJfg",
  "key11": "5XE9oJQfvD6uSKDWcqB8Ne95qboVZ7kucdSoa35zUhuk1ue1MuGAPbHXpKDZJtrnBzWGpSQsT7fyhiAHPoZHT4dJ",
  "key12": "3M5nVnt9UAxV5wkokzMu9PJ7mgtZUU7mqsg45rHc7kQvvr4G1P4K4fxPshk7PAts8vS3uVqEgDmTyM1cGuDf5NMd",
  "key13": "NCPwT1J55g3XhVSVRcYq1HppiQZ52oW3ht6cGUchVmH4uH2k1HycLaahqYwvcWoRHwwdyGTMkEEpsn7xWexK1cB",
  "key14": "5VospyHhkGofwbMz4uHJVTj76ijKbzCXPJnAXJfYinqY1aKyZ8CKibXgTdTWVhZNm2K2LduyEBG2rgvkaFLETAw3",
  "key15": "5ZuAndUdSbfehEzMzJ65oM5k3EnNpkahRxNxiQwTCYeGpeycbfeaKJHzYU38uULppHExCpzYYVukYy6Q3oyNWzcF",
  "key16": "2Eiv9N4VE8LUfz8M2Rf4RburHyopT795ynHeY1m2wkUSdxHqLqvAqGjnMX72Ea7C23vnqwo9miceYUeEQGQsjnc1",
  "key17": "3QfkqTNzGW1NA2yiejBxdVwZwhK1o1rSGLDoiSqS2XBEi9Nvz33rMJteBYh6Rid1kGFHHeRCSMJhoXfDwjmBK9ie",
  "key18": "5vhqjbvyjQjqSMDqFFDwXVstVrcpGfsUfeDpCpgk9MYoTh8LNstGzsJ5NxNuUb8VF2ESimfaQFyTakpGr7rUUsCF",
  "key19": "3ZrLQWtHzB2BKVrQh2YhZBxnKwAoeAD2wPJ9YmGm8eyVDuqjM5kvUMtCbaKYtD9CMtUmnkPfeZ78AnM2qpN5Shmn",
  "key20": "319i7PzjkUcs38HCzZMMYZggZRa2Vybe99ktqFp6NuRsdPbTYhFUgYAnGiu2okKPgALFdhzBbXeF1kGWqhM1mkAW",
  "key21": "3fthkPbYpCAPtdxKtvwGgMGR17rfcZpnZPfKZg38b3gytMUDZF9mPdqdq8RezuvfrywB3UBmaD7QugAB6nPTDjnX",
  "key22": "2wfiqcKZqyoKGi3dBGjHYggb2roDtXdJj2GRg3zwnYbqW7EMTRjNKEaXb3L6DVJZNgwzV1fvjjQKHAWAmEYdsLSd",
  "key23": "3x4C71XtJfmNbQeTvFb2qHrko5oDA39SJLtZnU76hFKTsoBhhm7viGQpn1TfsCz4mJwmCPYkb4CF1xpJvHv4bEvK",
  "key24": "2dwTJeXoZdm46qEWFhuF3hEPrFWhuSdL83Bu64Q5dtVPbwA2KeXaJozvqxTZcoT4Smfd6mjTNtnTKWRtoPhJPhca",
  "key25": "3TyQyUueQpFttj7fYey6kyo3uYWcJsFxbBNd4MeE3NAJLKK7ni2AuUbtxnWXJdn3yf3dJYsHVxQd3rbqzaMJ3vvx",
  "key26": "2ZxUHySxN1eRERHwEEdENCpybSSjKJw9nKLktj9Qp2j8xdvdy7abBXE1HiY3JkUo2Nru1pvchQG6DLmZr7Uk3EFZ",
  "key27": "53QcYHLew3UNfSmq4sW9wNpwoGNNcrXY4MzaodgJ6wkcYP1nCaiDkPeh1pNtS6sB27iFntzbXhVhQFDtc6BUpNGW",
  "key28": "4r1kovuPU1uZbNf3KwK3mMxYRs88wFNyZrbAucaREbrfgeiNdNqYFegomSGDxBQLuH8UysVTptLUJm1aLaw269ac",
  "key29": "2HUbXpjfoAJbSFaeQsypi1AT6PNcVKmjyP7YVwjc12CFcuFpKJ7D5J5tavPg7qdTnvs2mgrPbh3CzK23WWGJ8C5A",
  "key30": "bjJd36qD894EVaDf5rgayv1KSK2D8GxdAKn9rVfY4zqPBcUYEGPbVs2dpPWgRN2M4PsuSquf7s4RPkjxUwRZyeb",
  "key31": "3832Vb1WEVdANSWuqUjD2bSADLut7WbT6b6VUCxi6h7rux5zHBESwEUPkzo1oSEN84bWXPj34vDWkBkDTDpxkHzz",
  "key32": "2WSfVcm9zJsDzRu7ojJKASf92ArULjuUrH8VHzqTQt49unRrddd8W924NGjGXdN5VVDyW3mKRDd7HBAYyExHmkhy",
  "key33": "3xgWjD2JeWuyNdsQLjhoZPkwEDspUCskSngckNBQ3wy1aSLPBRGgBnV843v629Gi2gFoieQgB3zy83tqwi8rVBuU",
  "key34": "22tRfqte7fSjHtNa6y19RHFVAbN3MA8byrcFWSVQcddko7cqXJcQKetyv7oKKs8mHDdYkz2x9UHrcMaykwi8SktX",
  "key35": "7niHWTMQHtdbDsocP3JDhHEjVGcudLnhvxPJen1uJ2f3o7MD9UmPTDG7cYwRNy1YLMkYiLJs6bYUUhhSBc9gHwS",
  "key36": "2gqZaxbg3K2EX5z2WunLkpXDkQDwwVzvPHZwQPaRX4cfkZxsxk7ji6yXLmFM3TvWMaEKZ2C7koGo9DDNjFB38j9m",
  "key37": "4LUR3XpWVHWNX8pGg9pNF9RSpJCq2tqZpzBtBtu4aFNr4LfGCbdxnc9ZkAZG5FQ32W6MJQtX7FKcyrcbDi1zURLg",
  "key38": "2Xa4p1p5WQikoCYWbySAe2fU1firC3NNEfFP2nvk7JU4CDdjaB9nWiRRoecbfaT7LBGNK8GL5f8bpcw7UPtgSGW1",
  "key39": "5LL1PDGsntiVxo69zmsPdecaS9Mb93LxGar74BJHB7FpA6RB4wkALkg7LNP6sG6o5aes8fcDUJqqQrocKJFb3NzC"
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
