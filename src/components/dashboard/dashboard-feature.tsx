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
    "2ussuLts43mw1e6QqVt4w8htF13ToFSiP2w83DkSCSK6fxFTbRNENqT492t8UxGBP8nsRpXRUA5VgqQ2LuHiezLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bw5ziJpYFVmSqg8bddaL4q1FdvPd4CWDfenSUJJqfu63q3tDusoxmnFHVgsQt2KnesTqwQ6yVnrv1P88jeJAgGK",
  "key1": "547DpqoWZ89vLDXbrscCpZEmB6RvrzZh8PcAWnf7HmqEg2SLVyuHkQCvLwDnek7z3m2EnfjB6YVxcWkGRz8adeGG",
  "key2": "3HgMZYoWFRg2Y3PgkwVP5e5tQbQvKPfnzdZVc1Rc66JpQEMhSAWwujNnYYMXg9HA84xS8PuSota3eSdRecxcoouw",
  "key3": "2HkLArzGHHmuQFZdyGKwAu2QHfeZLaSo8RkGUmkBavTxpHigfE4gj3YMJNHuSarniVzCrypH4uxk6coTXrvGF2ko",
  "key4": "53RnnYfW32tCfds8SLgxYVYs8iqxpENKEm42fGkxMspYdXXhUPoRD5ns6aPfzabgWuXYDZ2UoPuSUriLWb7YUBX4",
  "key5": "42X9eK8iF6NyRgVGRTqJyvEddbLViao8bRMH7SPRUPvJx2jCBMzrXKr5mRPtdDHsG67FZfgbpNTjeQnLvUHNH86u",
  "key6": "3uofgJHE2HDgtYJfdnbVM2Xf93GsGiSSKpMEQGKnrrEwV9SCrCju9xZ1NZFXg3gq6gDg4KK2ip8NNiXddXQ12UwQ",
  "key7": "2yCHUHXfsULzhiysJpVq6eejRMDym1gpiD9zeF2GaMczs35RGRR4Qef48YUdNy6nKJkJMPiDg4V7mkaVudb1qX57",
  "key8": "4T8cswDbKJajVE5bpauTRUoM5tFHMnKwaALoGe39rMpefmU1Duap4wpoZYhj55XjqgQ9mLKAcMQt9SCryCT69qWL",
  "key9": "22MxuRvpJ8dSQj1HHhbotJtdcaRW1xN6ygB3FTvFkvW77JKhHiauMutattNsfQ6V3P7UpdSvWj7VBRc7NkgqzuDS",
  "key10": "5wRLscpQM4jUS8mrYjeSdy1ChP2exbJdKuPPCHY6VWMm6cQCQLh3HVXfySvgreJ413jcZy143z4gqyuYBL3PCqcy",
  "key11": "4HgsBoWHrYe2Jz7xjuqf5MfQkHozp42qgnwBbcCrN9peTPpqBMkddXvn3bJFvU2n7snU78ZjdfPWJC4prr4BT5V8",
  "key12": "48Yx8CKjDFdQep1qARR7S7bATodjcqeDNwba9ca6YjEEJUaSfL7nZHkiUDimutvB319qDtq2VbkkQ69RNsMzNfqL",
  "key13": "2UTSNrJ4iFHnpW3LKu444GYD13R9KFJwnJXL8FYHvbHATmrU1iBYPAMzsqPbhGbFssbtBNPQCwpJNqRbZNkHXfnv",
  "key14": "2djdeXLqPuZDaaNPyitQHyvHbU4RyBMw3DKu1j9K765vkrqzSrsBQnQ67BFVrCh3TFEaqHYbbUNzkAc2f1etW227",
  "key15": "4zaumi7dQi3PeFi8aZisaCihSAyohfiTAheuUvUJamnPLbtxSPjeWB5QVZWrDs4Z1dEgaUVwQ83qSkRGZJpyLMqM",
  "key16": "3K3N1uGPCCmg3WPSHmhzorYx1xGTRxQ25EpUDikTa29fWQsXdX1zNW5j1V4GUuzHWQymykqJ31Ppsp1uR8iA4VHL",
  "key17": "4QZi6v7fMGjsiYHBJruFXWyhKSDqRiXoNf8dhTqD6xBaiQB7C8ifiLbhwC8ooiX6gupFqEiTn4heXPzZHQ4jyR2j",
  "key18": "2QdDT7PQi4MAY1chawtwt867pxGoNzQKXJWkf29HaacoBSWnWhATSNEVXU6DNPWbmGcEtMtPchoAkYKCLWBFBpmY",
  "key19": "2Mjgn1SQkGurS5edNQ2qigkRP93TNtaYQ3JVS5rky6QnEh7XC5WR81xo1G1Ghd73HgsPF586AmA8bAQRvvuk314M",
  "key20": "3zNwPsUhsR1NacqhmNppbpw9xbyVQjS19BB2aWWVWPNw9WRDVASAFWk9WhMRuPzRu1gZM9381BfCnHDFMfn4Uvvr",
  "key21": "tSbgLNxj61Qfw9s29vWbywaTtTP5pvwVE7XnTNqnhvHvyJvWwPSfp48iD6eA5s4YQ5extdnv8cSWdWpc62nwvhJ",
  "key22": "UBRcW7LucK24zxb3pyEPnRsxhNY3gcU9ifdF9aXL9okJF3HB2TtSHTETVnsiLADN6ivBSWXHg5mkuG9SYrZZSuD",
  "key23": "4TpHWL3iHycPYMB41PpsKafWpAf7xKZgA4KMA9tP8uf56SKbpFTyaKJ1vwfFaVLKWyAR4AyDumkXLhqKPAkK3jxM",
  "key24": "3z47uiDBHM8h56tmPuSi1A6EaRqsDVWNpNoS5cdeo2AUotFyAfBsXoavtUTDAv3HPEkRnMciNDXLC6MhFoUKi9ET",
  "key25": "4aneXfkUNzNi3T2556zyMiVaa2pDHPrxdCQSVaqMQmDK6XqEVsqqSEndjxY6mUy6mU5wXW5gsbJpWFAHp7Jngb7h",
  "key26": "rpJiiPYz2TJrmxaNRFvkGSkYg45w8c6bKy8UbzdXAxKGNBhJbFB4aATUCdjDSNdwiKDHwbH5UFaBtfKCLsj1WfE",
  "key27": "5UHvNaU8BJWj7CzXJRSM9ZeuZ499iTfahn1maYt9vGXZRaFx26YV87UQH2EP2GYnDmhbAMjW45jiAdwXxuG2muoF",
  "key28": "3c8JZ1XKgYuZkiok2CHTKx2Zz9P4JEyqvxTVWgircZBo2UJy7zFbjZthgnPjxbHT14yxZX6bUg6QEUCf8tw7A4NW",
  "key29": "EQkpMUmMEHcAASPatpc1vEicAQvFF5yXoiV96YPE4J4GgopRXYH6bWNjPpTooXjPvtj8BA9NESKWAKyQCJupxvq",
  "key30": "2FygVAbNQ7ABmDWEUSLw45KJkpZd5UsUUc2uhH3dy6VAqHeCrKs5iFB22c9imGJKsGirtFe723f9ax8cQbVpaBoa",
  "key31": "3sC6LTbdGrbJfPLjNRa6rcaV6fwDtMMmCoM3UGxZnHke4ALfv6HHWapy8UozsqgEq9j8hyEjFtZ2PdNknQxEPwHH",
  "key32": "4FPfN4e9K3g4FTgoKpBi8fNLeb5Ymc9gezXmz5p4DzYP9NxfvCdT1Zuh3VygHCLCNgS4XEpAsN3ZxdApmg559iQi",
  "key33": "2tXwdB5TZv1NiFmNRNXYaeY1Z55oVHTFdKt47gxNR15DQ5oxRwA2nJX57ThoLQCaeNSa545nprFgPAodabiWHoF9",
  "key34": "4furtN5edMQLLd8um4Gfw9G8AUVfb3FQvdX9NvAgure96fad2s3PWQzwMFUr9XfWcAUPnjrh3VGjyBJFbuMpJT9r",
  "key35": "3cqPTTQLYCRTpNRGUcE7d9ZvhQQjtKYVhaHuc7ueWbRd2oir9HoeToNVjZDPe7FnTpzCjQwDCeFDWjqPrWHGhT71",
  "key36": "5fvJTA85P2M1v9GEQb9yANpVZsMUbBTUzMTzepXV7wrkZgVU9c2Sg6rLDi8VnPWhZ8LhMVCPuYZKPFbvHszt6kuQ",
  "key37": "4RM1MoChHZhjBauiT6fXveDC99oQ5aE1tHwnLSx9gNLiNmHvHoUEFMDgsrCh2bJ2BRFNJznUuPY7Q4ym6smrDQmv",
  "key38": "2mLPUDDn4Yc88fMU4UsPbFg2MPzkixxGtTeXPC7VAkM2vBGqHDsyEctYGCwWHoceE3zBDqCnfWUrdHcDaz27aua6",
  "key39": "2teMA6gGkZste6SUtScc89vqmBEHU17o92F11Yn59e9z7osiYSPv6fKRB64Pgb5YztPFUiZcNdQy4TyeZ8J7WdqR",
  "key40": "2DdRZJ8cXwwVrmy5U8qXhwczQWTECyPEAVavzMCCiPcYSwQqVBHW26Bg7KsEAy4sqsfKFfxnN6XPU4uge7qH8mCg",
  "key41": "49ZJKVLGvQ4exWERe1VFUEaL9QTdipuhzDwjo8mjUkMCEyPWubnUQR4MJuNhgyx1XxpxMSLMtjAcDZpiM6uQuTUY",
  "key42": "5yzuTLfanEwHjbCFJFMeJ8uhBH36KptP8pqVqXs8hTa1tHWwGgBPbvdRpEk5LMKW8kc6JYMnYEB8UAGLfCJdK4xn",
  "key43": "MXumPBosnaCbYGLb9MsFgfwv5kuxZ6pufFL4xmR1tZ5EG78W1azJgiMGnP44Eme9yRyJHUs6EEtNcvK5KDjWTQX",
  "key44": "4t8K6YGKdEPZ8A3QSCaEmxh9iujiLUYWkcgXRwuBcG96cWTPNYhmiyV3KiwVX4rJTWzvpXwjya5RN2J4QK4gvpPS",
  "key45": "5zYPu2JMBL8J2txcpgxbMHCw8fLcfpx9N5ikzr76E4nQLQfhe4xD7VhJdnes2NfwuN7pcP5E41LLVLF96VBPAGjg"
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
