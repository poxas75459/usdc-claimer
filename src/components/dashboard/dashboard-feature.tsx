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
    "59rhTM5ZMcizxvQ2gFAkw3h6kks9xmccG6Enq9xFKzdNDHpto5apRe368hRijD1FcNJemAoqHsLYMJewJBnhUg6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KrpF5nsMaxnqZNy75SG6fUU33uM55Ys4JuDejNqPYXQfj5p1vpMWyv2nzL8RxqQXcz6WK9EPuVxprTaSvX99Nzj",
  "key1": "25ZQRqoj4SuwvVDaPcTThp5JWzH43ghQgeyZRrk2msE8413kFkxiaHmZme7BeLeTTgEdDUV3K47xw7XA3tudxwak",
  "key2": "3MmNPZtiVYsT72U9SP4UHirEKnquFrEptRFziRdCZb9LBxZQbwgTXgqbA2cD62Vgi1LBpbYYx1593gfNAdRYMhJf",
  "key3": "xpBkCHnxtMFaLMkjmM2mFfMWfn92P8QXmgvw9jcHbX52Nni6gxvVmk4n62tpsLQibgiTbA6k6o4EmV8j87kJWAo",
  "key4": "5k2egs8nLhNT1USL4niYxdMbNZDQdizvHWCT5wAyKFTPcbQ6posQfsZFWQrNjXr6GBeNm6pFM4Ec9nFhan9W5SRf",
  "key5": "3QDV88hfbMbbUiaYvmY8onfch2tqjGEg2ZZkJLZhZA2TUkjjVnDMYncRVMHnt27RLai2ZezDY9QzWk5WfY1ZBx5b",
  "key6": "9zfPPyUoaibG8RCPFCZqTJAUc5vR2UD1VnnTsbAedMkNQpBYxPfS4RftPzYxRgxE1rL2snboBmvQDSSDgd8Hnq6",
  "key7": "4XbM4o5gz54AGoTbCz5Uot3mJdHuS8Gypp7xhiKrUxzNTSuSsyfE6RLTbzk6etyycEYxW5t5vCpUBTckzXKz5b37",
  "key8": "4uScMVMgTqjUYi8sMtPQwYrh4jESA3B9pa4eq73ComzNrNxers44chES11rs8KzgNNE8Jr1Db3TWoiVNEuXgg9az",
  "key9": "2ahzcStfD6511QUHnFXJQqFFzirsTsDy6wn8smjMYAN6C9tKTdQXNiEJt2jdqeBwhZf96pG5v5DSrPPYH1sWDg6M",
  "key10": "3Hbo39DPWxJxUMZgpfk7ZVrv46AuHGfRWktoJDxHW9bVsryUtgMuYxa6PgqKifFkmki6Myx5Rd1r6PE9FxzWKEDt",
  "key11": "5QdPKzNWx7cGcNChdQZTWDtvncSXScoLng9KZFCuGHT3xobri3786RVpdA18r1wGvz9iaPTCFcUk3cdkEgra41pS",
  "key12": "3czw54djvdgYothw6ai8NUbYCu73xFL3VzA2SLsR3hn1uuevSrwAKC9egdk7qckoh4u3PUBbVkXhtmx1R2sTG188",
  "key13": "u44sS71LVgKPFxzEi1acRHTTNosbJ6x4Jngwguq5XXdFenSGz11oXtiiDAMwW5cg6ngDAFMCzNv2LjUbHob5JHR",
  "key14": "3Cv2jWrkteSnJbYKjE58HgeP7xmuc1S9wcEeSyTNuNXZU4Y77vEZRrujk1DdKPj1UNLLaGgrcQfwBCfzUygtn8Uw",
  "key15": "2ZD2bsXZar8Chn2KseRdt72d8a9iTpA2UT2ShextXbz8LAh1psYaVamhLw6ZneJhKLKtnVhfo2KR8PSDUxrLeRri",
  "key16": "3pV4sqqB1n6Kauj6SbYcP6PdaqRwidLeTkpr9YM8sHcYRGaDzzV6iywLAHQ6vNEnyvA3DURYU5873Dv72xUPixAd",
  "key17": "29QHkqfk6XgnSmpEQtraZAEkv9cBqpV2rqpX1mJjmM9P3bL5anRADmTyZAUyTV2192RQVcnpV1xgYZxdBAaTbXYb",
  "key18": "4wngoovQo1CEWPsWLcpFihtjXo3kDjb88sko2EGftGWdhvRRVJoERT4wkwd4B33TvmgRp9geiD89WEeDGRoob8PW",
  "key19": "JjsmJNjqdKbQAdzZp9cF3xoF4gzAvHcxQ7iMiYxDUU3V9gkJuk4aVPqeqW7DtjAkgbbcQBRuSCzjZsKowyzSm4U",
  "key20": "2oXQWjHndieqYBGpi6Dcofsen3ZMHi7vBZpxb3YNNeCcrnpyB1uwnx8A4etYsjj8kNeyw9DRyipHC3iXtYFkkpMW",
  "key21": "5ABnEdBB2r4hKwMpW3v3kmYvc8ppKevSBpSKw4U6KNJss7iDPSGYkqphsaH4wsxbTmZtYzVce488uTkraKoDLnAP",
  "key22": "34ReFVMo8Vtwabkak2CPTFSPLR9zXVN9sQGBssZeBDqoyayHTFpaF7mzSYYoTmx9eV9Cfs9r9u49oNiFkuPZWLtg",
  "key23": "5EL8GWCbv8hWYAf4JDaoaywXcfBARStKA25JHncxGM7Ap8bHHV3j7B3E9Z6bsJLy12EE3mH3UPdvFPr4ZuoDCJUD",
  "key24": "2pua2jMW2AN9HjTLFUdvkKwt8zbJqLsQPJdqRefCp1cnaiPDBix7YbTuj5RgdfCHK3wjYAM1rafrN6hEex9HRoWf",
  "key25": "2AVzfQdzMHTXhVww6SZam8zDMT6Jw17bd7hqjuVYhoDSESk2M1QuW8XKrWwTU4RTYN8Wuhg2vkPD95Ua144KW7BU",
  "key26": "4P4XhdZ5CUnPYT33FkrW3vBFk75hhEKuAvSMemWpZCRojGUThCabfeGepoeE1KZeYNwAGV7tQNtJdRntYSV4tVbg",
  "key27": "2rQn7gFeFNNxctw3EFXWqS6LxzkMeLZFfGiXcp5tHEgxtUYh5uTFo44Hhn3p9JV5yTDC9qsXAyJVnk14yjeuwD39",
  "key28": "4SX7TnBsuufA6EQe1Kx21oDn6kXL4FbDn1ujyd3ack7f5viECrFNxGWjaP7XewS4WEMNEZtTvBNT6PCTcNaJVumw",
  "key29": "2hQXcG44Qqtb9rgPPThPBZ4Q2keQVydhyk1vvSVTZeU9AWKXUnqgnhBbXpJEf9DyRpE3eLMDtBP35PrTSysvUrJE",
  "key30": "5FUvhs84exK8BQKoTPjDwFJHrB2E3Updu5dX6YvhKRyDScXTjuWpVq2x3tFwfjCkRziteuaXr85uir5tzHWpLHPk",
  "key31": "22Ae7bu5XmrNa5fHRhMMQXqseSZhXiviEW8Fv92CoJrNqwLqFcDmni26XoR8Nc9vtKu2WWaBz55kSfntF4fyzan3",
  "key32": "3trCMAgNW5yvwCCXZV8motrDtMCNexoG4Npy77RjWF6KBgvfQHEJLiffMK7pTS9YjU11yve2rnVhpevWN4XL7y5v",
  "key33": "do6zyB3t3Ao5JE1Dmed3fc4azed2W1hCD8hodQxE62ceJaDLvCiy6cxSo7qPMd5t5UzDSUoAnRRrXFZt2v3NmTk",
  "key34": "7DDuaRsqxnhG6npi3NYzQqhTtMEpdEWEu9rU8tm8h79GD8K5MUP5mYrsVAF5M4BXCsNHWGewD1wTEbmbCFuV9DS",
  "key35": "5aCavFAwy2qW1v844wCTZ7aK6GmLDoQoStYM1px1ReDcyEJHbD9iWTwULd5wCWihpVLgP1m8jx1B4d7mM6NwXdyQ",
  "key36": "66t1LkLzZmdZ5jc9LtBNTJkB6L1BFDhGx9VjKt77ANKyu3yEL26rBikc2NHy6To1ohhAQqob1sym3AL5imH2XRks",
  "key37": "7EyuDSm4RjMmVtNfeUzi9GgWx4KGkm4bgrPvBC63hv4ze19UfcVRBXT95Bj95TL5HUQUn91G5ZFUmAFnvuDGsoM",
  "key38": "AEd9eD3LA9wea8zV2A4PYSrxWtzjMjPXEygd9cMVDA93Qyi1PumoyJken35kpnZ4vHxfNm3XEr6cUG9549gf7Cn",
  "key39": "3gTJiD93xJA7MZyKqJEEV9RdLUUHuXCgmNRMqrvVcQhQpKuHJUYuLbShfH1LVAySq3kGtLgi2mKVu8L7c9wn9npP",
  "key40": "5PGVqgQ6RhrxBX4ieqHp5EBJftDddhPh9tkTaX1byawcxn2Aa9FrMZed7ejXfYCsVLE7A4vWr5VrL6ifweMzx9uX",
  "key41": "5fqADcx5jVRVzKqq725aTiCKTJbM2Tq1zcd1xywiqCU34FeXZ8foKy7TecAJU3nUUPt8dcZHS4cCrUcyxsZsza7s",
  "key42": "XVT6g2kRc4Wke2bEgRu5ZxLrenu1uBvU7MNZJ1RHdVXbermFezfXyjBXnVB9jFri2BjU364kzqqeVEye2KyvyXD",
  "key43": "83fL8JL58VZANy4NZkTm9k8FSfC8FJCUzUhkmctYhyz9gYVMNSqLWS7dKkBKXEqAPz68cjS4FMFdXkr2MDmiaES"
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
