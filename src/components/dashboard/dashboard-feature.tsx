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
    "3ZXBiocwuiTYsz1snCDGnvpnr616JSBFGHZVAfZKHuAFNFwHrPmBuvyATJGMdzTBnfd3foFvb54gteFkoGX6Kjp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJ56ZZ6nx48tEGuPUx3nwAVMkbQYVuLF8aZjd89NPBZ6YiQMyvHn9NdFSXu2518BKKcHA3oRPn4ZqpHfisqGDgF",
  "key1": "2KtrFPeCKZBRENnQj6b2aqBKsKmBiemXptDvDkWaQykd7nsiP5FBTmcGTFqKvdPzTWExWuK2cc7RWBBabRieVVUm",
  "key2": "FX2namsdE8YNQcHHQCvp1db9uUfwPEsbNSWN4b1DwMGkjV5E6TgwPV8mRShAyctjmDieLF2mkyCJ5PHaRFyEzRV",
  "key3": "3Pax5N7HSeEpL1LjdcpixJu3bTb3zwrArZPdSN8aCmVGdjTu25KqhVcVXZTSKYN6GZkEEfzqCUzcZ91Sjszae5Ma",
  "key4": "9egKVrHsPuxpUGVUUGG8y7edbrzKHeoE9Zi38BQmDYTKwusbur7RT2TSqFUBYyKqTjHJkw1Zrne5k2Eehwyefx4",
  "key5": "LE2ZhsWBFKh2DLNB8dNxTBRkHcxe3mdE1BfZsqi48jkuHYSCRZao4uYpJsvVuHb99Z3kpsnQtGBRhav7YJ87zEp",
  "key6": "g2QCHshjb9bEsCe418dp5HKhqMijukycsXe2V9fChSiTWTAmbUvmoqcLnyRUZNKtJqMzYr8Dpi4fQxR6ubCjBcw",
  "key7": "44n8di6YUkbfSQVbPjHLGGy9uikV5qnCwaaXvKpWCsR2bcWoM3ywQ2z77cgriL1gVK8MK6wVSQHXsLGEp3LoHZTm",
  "key8": "67U5KJfrY29ChjxZQo7w3VNsQaU5Lhthc9hLouSL1UB2vG6wGvLupfj1u4dmS2wVXijNVE6XqRHuULLdk4GhBYU3",
  "key9": "3YgNPzsxbu5EHpMGJVPTaqGg1v1zzKjuNzTeA3rARpnu3c3MZ5JbpsFqC6KWeye6hxpbZPYNFdebuxLbdzHxfNmJ",
  "key10": "4LzY67PAv7UdP8DgekEuiHpAjRz8WCg8fcypN52S6V3kLC1s4d2FN43yXjHWWe1Lp4WSTiG87oyGedepWCpYCaMa",
  "key11": "4Ttt2mZvLP2d39wQctfixVroBuwmBU7dwFaS8vpYCQzGgzxvKK6NhFi6C4EyfYNciBU3DFWtacGReE12twNBYEey",
  "key12": "3HXQ99wkrWB23t16siEpoNKjoMNtyduiQ2P3Fa6JFcswysQD8jQnp6LFp18nFJpWZSvhcGAvFDQfUEvXs4CiirJy",
  "key13": "9xMSw5NSxvWfdy4jE25RohR2eJx4UGYpBgQnZGwyP4piDTjHbWUBVMv3dYFAkjQBvdVXUyyGh7azRpJiPfSU6xU",
  "key14": "nqMgeLwaJ2WNFuZFhNdNBNgbiWcLKuVaUfhJBhJXGGuoqXqKQkVF713ZVnsZ46JYXmBFPerMLdYWenceqozRW6o",
  "key15": "2f4613Sq896QMb4jZbkiuitH52uQKw4EsD7Y1Nsa6ukUaEbEjm4WpQn1LXLeGDaJmuALtCimVqRMf5ygum5bhpAS",
  "key16": "46PP9awKJxfuyLWKRtzrDEUXNtgdrGYtnRN5CxNJVSucajn7oLcCUA4mvaUeBuQcVPoT3ggNy6RHKoFn8mmNGcyP",
  "key17": "2X6XwqQnb6H4yZh4KWN1cpS52UDeDxkyhCS7AeC9qZozxD6FCt1HzRbPxbtJ2tXaYisyhRmJHtLbLzN1aakahXA2",
  "key18": "2MAYN6fsPxBabcti6HMVQDTXxmdvDoXPsLo6TBVRE3hftnLT12XRiEaBh6rgZWMgZpajrezGjQkLVja8hk1i16cg",
  "key19": "3XhJQrpWT2P4NEfJnTNBEPLojVW2L1Rus4PKFHQqh1SBW6T1ukrCQPeJN6YkLTMmDFxPX1R4o5Wk2zjG7qXQrdcL",
  "key20": "EybRoH6rHax1a1ZFqwoG6smZCsAjGmy2MGy29us8BiuXkVrsQV2HfM1EnySJLqe6PUV68Lb7adBHEchWTWC9Qva",
  "key21": "2RJofYN5yffadRLihDfE7sJADLYNYHELoq1vcudcbX9JcqmQ5evZrWVDU7iqhpG87wqUPEXgdrhwY6r2Xa6cRPAi",
  "key22": "nZwu33m76bVBvjvh4qhP79cHNpjUHZJHiC8yYXtmJYRbrKTZejPHechU1xf8wSA6FuuAPHp2N2gCk5QV8uQn2T1",
  "key23": "5sjBSnaG9afm6FxCLcFyXr6L3zRQ3xsJLkBYvM4M1QSVA5uTRM2LiLhQ3W499yVwded8QwWF3FTCorxZh3QegaHh",
  "key24": "4KrMKJzBxE3WPerzwEcPXANxbo5kQ1h9S7L9qPi3v3HvLD8q9EAj26MobdnAAae8LosgBA7ptvaHN4cTArGXmbn6",
  "key25": "5izZLjAtVfRSUhPMnwPqURHf913ZtxzqTjgb6xC5wjta2QR3hmVW6hKWqe2wQ3uAmeFF9kUAmWbu5mzpXLbVSu1v",
  "key26": "64rQxBdMJJPWQUDSz5b54nAHaCkZnygrcG7c8ziMcWLXacCXduNGtmgsSPwEpSYAP1ehpi47yMHiwqXsSfqLsdat",
  "key27": "CHU93M1jntB5UUgVF5URz2wvACvKu72Aard6SRAZA5VzHhcQHTC74KPeDPWxZiV779nXPkZp2d6UNLRDdWepa9R",
  "key28": "59xz2Xb9odNgC9mFWatf81ejP24m5aT1onS3a66VBTGJvE78sXBiVGuX8ZmvhUtp5sdHuDChXHbe3NVQJavpZAvV",
  "key29": "3Qh4GgBpXXzsEPojvySBpGAfAy4ZEexbKzd49mdnMGdmEbRMhk5JNgVxM7PAd4uJBzrDtN6x7KQB6MFBi8Vpzc2c",
  "key30": "21s5VosbfxaYvKfkw6ofzhNT876mTX8PygD9pAPThSUA3SKo2hZQbpnnrM678H3xk3bwDXchMP9mY4cDPEUQ2VDo",
  "key31": "3jAZYty1cjnCiSYaBPKwgnT1JdLSjnuoJoAmvBxLkjJdwY3T5kZcPkkrFwTHxPKvhvNWJhTUbKzDvxLTq8Qaqbq5",
  "key32": "5WXexfxnKQUGmbKdPbEJ95whVhNc1mXsfVrzjn8zsf26schsNGi6iyttuKc3WdpZW9ZF3od57jVKLuQrHL4Tm9q8",
  "key33": "2c6KP2ZVFZW3ByKKzjx8yuQHVGmzZZBgDFeP9SYDxSyJA4nZPbBxkAJmiecA7bNU3QzFWfwquQHDusmcAJV8tHCW",
  "key34": "3GMp1haf67Z1HyJ3CZHjHyY7UwEXmzqv7WcGcFCQvir7DPUgRE9BQEbCVxPCrKPfAVrEvNYKHFWfjrRaYC3u1wzL",
  "key35": "2fmKJ5VCQUUEQxnLjnFxQXiexC3WjSqb2ahp4Jp7zP3SVAaz8eWGwwB5xMFfnC4x7p5NgT1g378fxCDQuzRy6BqY",
  "key36": "2LUV2mNQybtNug2jPK5TGBzKfiN1zctTy9y9oNudEbdPZAX144KshQcTQYfRWytwfJTH1q961B8uhDwU11rRKQZ9",
  "key37": "2nVpQMV5DpY2i6Esdss7LQ8fPxRedF2WsWeVBjapPspZQVsQmPLS1NaWJfRP8iw486dPBvh3KvMmweMTJa6xDxPD",
  "key38": "24QhEbxCUrn2FY79w7od828YrZfE9ohE2dnwDzEZquXu9HhCfJqz41wQAkukbvD2MCHgx1PjnUnzQijwg1xUgYtL",
  "key39": "5sw4b3T3a7e14nLbFrsXvY6fc2rPevaCb3qgdbr4SVr19CnBHCivyqKZmrcJSS1KJ6xgXN48NSKafTtaJbmnVLUL",
  "key40": "642osJVFTHjCM2FsjKvE7din1wvg2yKYBGtGyZdJ3pAf8S7UyueErdnjNUDiA8mUE3v89HgbgHvfV7PMmhUvkohK",
  "key41": "bsCMqwJuYWF9hdaSvBvTuEngt8cRsLozTk6UY4KD33woa161TazcMibMnxcvP2iJmCG1sVW5on7oaxqeEfWr9fR",
  "key42": "TgnKvEpandQ5sTCT4LeetQajXAEwMQDpEhZXXkqaqHLQMJRxi4m8JzFFLkqeRRqoJkELin6VDnw9LYTgKuAz7MG",
  "key43": "9HWKTfg4sJyQesNztD9n5T4zTH6rn92duQBYqc1ye3x2QqYwyYHPtZuozqLfxo9mzHeH6yDfGf11C4nTmY8CMY1",
  "key44": "3maue2GESLYGiGP9ye6ZEsFdxGtB9Qrm2AGGP48SXuTjhVHpeV8vCxeXR1Yhn8DjjAnUSYmExcm8NcC7DrTZ6dW9",
  "key45": "JEXyZVmCDVNjSQ6k7FDETnC9zxizKuURotNJphqY8uy8QwCRr4ejsySx9Pg5qszb78wq9DDteT538GgoFWm98cD",
  "key46": "XwtbQ1nKiJqPPZDxBgMHqreckzuKjvnPCZgD8GidB1Z16pYPpMFMRCoVscpT5wJmypqtu9jCzYRCMzMtGtPEDYC",
  "key47": "49oH4w6SaBNxtbH7jkdP23Xho4okvXgPLLjCaoqJhfJbrnLDiKYmwGqjTU5qopBCsDTFrM53ZAgKAKJdgp45Ffm6",
  "key48": "63HVPmLMk9u6fmj6363RKrdVsoRf63QArvus3e3MHWMHePFDXSAd7NrQawUs71B4WR8qMbMLvemnWQ5XXVtDM4vv"
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
