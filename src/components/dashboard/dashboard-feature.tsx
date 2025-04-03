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
    "2HyLkmeAxSA7kRxphqxrYvjg6gptJDJLabvmeAo6fvaV87didMtQJfsEWYsUr2ZEL4ALuYm4qkt5aLtAYZR5Qn9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rc5aMUSh8YaqA2kAeQTv44ULZwAhwcu8vYRD1p4Eb3E8FxXZYB4SPKhTWFLrQRB23zqbRLX69nE1dnC9v1smJjX",
  "key1": "2RLb7nofRT6enPHiVtjBEcVTGaymoxbvVRzYVtAw5N3MufPY1WSnivm2zCG1wE7BgoLminEWoVJ6AdcaRLZLjvMj",
  "key2": "4QPdkUToiGKfXBn4rwJkSjcnwrkphnvotmWYag9AzE2zXsdLr819C1NQMM2DMgtn631n4umN6N3yoZxk1dsrAugb",
  "key3": "28mynkbruuD32ZquXUw81KdYcRPafyy9Ur6PdGivAvaFbuz4e9GDsLkghVbLpPVJ74TuoNQHeoNarCbmBvVBmdfM",
  "key4": "47CAitKNibgw6hFwFEAhRA3Tc8YyxgbrH6gxYKNrj2xSRC3a9yFJ1CgL6BhEHcfs1ydguvq3FkakB9cpiBKqg7gx",
  "key5": "3ZzzRxim5nD18q2gux3eBwcNthBQ72iT7v65yFNt8GqCmeMKhLRBgU1k1cwhLHqvMtu9qmzA19EFCv4Fvysbi2aV",
  "key6": "3Y6MmT8jiGHbPMYLAdf6tuuvqRqJpYBfEgppXZSpL1tLTSAN5YEg9vWd3fkSUsHsW4RFLA1xSWqAxzJy2L9PtULN",
  "key7": "5BBgJBQPk4xMmaeKAA34EsKCNJvtYSGmkqSqqaaE1kVZo5rFZc7rE49HFu7EzrsZ26JPbfJ82YGZSUnBb1CozoYL",
  "key8": "3WgZtJz6a86c7wAnwkAxQzL7wejtpPbomvsDA8QteF4zEtwzdXqgwMCvNmGvhn5djkariES7NpJskJgcQSXPJkVY",
  "key9": "oerqe781xMhiXgqS9cwRg41WNQmSwEMRXDwAyCfiw7rjghCnjVKvJq2HY1jYvN8Q7UocHpwP1d2BWAZrffzTcBX",
  "key10": "5dJrff83tobnvyYogWSBvNQMd35xQ3Jxczd9oh62nYSLPder7YgfcPKfzEsepGwAh5AUWFP5Yo5RGEqbKjCLsRsk",
  "key11": "SqUA6sE4gmZmmBTeRWpD5NiKu8ShwUDpkuiQHzjvu9NUnrnCuoJun2AYAoWAvyYztD8MZVA5HP4RujCGSZLHHSj",
  "key12": "43KQHWbVpyESnbqqQVDL4anfbcUdTMcHCMD4G9qE3fDLiHncV9zRDjbBTc9Yf9QdRvZHCLqriC6CakTwTV351bV5",
  "key13": "54pkBUyjU6G6bAE1PxVJfqQJmrxKERVZ7ZRNFnHgpdsLDdtHD2WG5Rwm2zkGhL2wWCxRGL6izeRBWLY1Rt61p5Bq",
  "key14": "3k6m1V7n37etWaaXRCc9Qkk4g7L5M1ceWVTzKsLXxEgqPGXiG6EPKAVwZ5svhW7tH11SEk6CaHrNZkzQiy8E2ewH",
  "key15": "52t8mcvgYCgWxzEiDpyo3xWAb9Di3N4kGdk5oukd9Uq7CuXRHSBdTzDz8NucahGeDw77coYrkDsCFfVZTbpVCGUW",
  "key16": "3a59LXTjP7U55s2oTRVWC74QbQ3vx2aa31T3cDq9mfzbGLftTmdEGFDWPpwv5BSy92ucVkhSSdxDSRoQDiPVyWYK",
  "key17": "jA9wXKns27aV1yX9ZTxQFJJfetU3hvxXCKJtKunTrv2YTGXt2wAvKRJpR3cifPd4eyV8gMdXAyRvKyGxRhCzgbT",
  "key18": "kyG56EQ1tUkHppd9aGhv4VFuU777vNvEcraGNYNicfMNfSE3nKMSiQbwgxRooqiTEKcPZcSbgxGo2sadNki98KP",
  "key19": "53DaEQ4fxcG3UdFHpp8yoPDKaG3NVoWAZhRPD5EiW2S2UhRBGkCaXezvB57WrVKjReZDteUN9wG4Y2cRRZB7WPoF",
  "key20": "3ihH46RUZWg7NwKdSYD9fNW1w5eiC2jWhATkUtUPZ1TmR55fACziKFm663KXN15p2pwXdR1AJ4oZhBajfjuxt82V",
  "key21": "5VNbAVRqNySDXEiTmQ1SBNWi2K2RhNmgYjB1DTAMgBqdA6Vew4fYhgded2uwAgaBdgQQaJAuFRf7xamNjJVXZzub",
  "key22": "3Yt8mfEuxmgxeV5nrePgGqkSFHk2hDsuwoFiLriFWhUosY5T7QtTaXh1p2adyCvQ8TqDGwfGMhDVX2pGrD6GzCwx",
  "key23": "4fosze6jJ6vXtEfxiGKyKsWEnezF4ZxHua6v6qwD5LM2bvnamKfvTLsfaAQL4uzgMuScJKaXEXZk8Ue9bBPHMm33",
  "key24": "7FXVZ5z7sTgAtGMY4MxbRoTFvUVTrzaEhXYd8f3PTmVJCLRHZACF8CNHEt5CQgUZ7xqQ9FqmLR9BKLHr3kkMapq",
  "key25": "RHHLMZ7245iobf89mTSos5p8SakxAu1k8rzp233zkeKFvsWbq1HqcjT3UCvc1RKyHHWMa3jjVKoi2knvqVkYFHD",
  "key26": "2yRUwME7jLHZmzLpyDzaXDu73E79vpt274ymkcJET83D2pH5R72AkiscMJdb3BPN5BEfBy1k7F2MPgaNbQkwmSQw",
  "key27": "q5jXQjQfM9JemJBjVM5NwZ1rzv3R3skisDQF4HqpBdzU6nE7M334RMRd33SVvJSuwxgtDavQgt7pMxBTo9bNcHW",
  "key28": "5XC5659abBerZK3HGAyVtmarAwRmtBTqccAEUWeKeiHmh1zSf1UYD1ehAJC1qSgsQJ4AMjJYGgUQshWBsedvqspU",
  "key29": "mEuxj1uae7izxruJFbi6ZEEevmuvv7z81EsksKXJEJTNkejoYVju22o6zAKtqa9hccvh1bJWib2uAALKWK1Nb9P",
  "key30": "57ZDuKGg8WnRhErVgAvfUDnTZkXuYAM2sYjFkiLmpF86T2vFAjHF5ggAFQCtnLDUdUq2yuWC9VZRXNajoSmVUmWr",
  "key31": "8MiRNXaL3GmdXp7kmb35zd5A2uzjGeKd5ET9YTQPBV2e6BnjrxyTCU8Cs9dHvCmwUiwW1i7kxGSBfJaWSqkgJGk",
  "key32": "4exmyzbaq1SYrPnn23M1RQczxuh21xRzgcNQqr9xRHvyFRFh7wmKiFwkR3UsxvwKHwz56Uu6uDrT45JS94RDnNMc",
  "key33": "2Z3nyYQeVbXkvrFWqmrHRaCDRbCDAzviPBkdLMfX7CUbuRweYgwA3CJw8kQnuRqGFCpujWi2BtrM2ybB37aRgrWb",
  "key34": "5f3ddL1ReUix8LGW7DYTFcJb3KWWqMJrKkQTdz7CuZHRuAzeYf2N6czjr1zaNLUJcjauVHbVUDkw6gSAenVDuesa",
  "key35": "Vn9KV1GHApKR6qvR11bxxxNjfaABR2A2EnNGH2jM7ngCunA7vc29LkWQ7A2ekeLVTEtbPuQfjcvNmKp84xAY16E",
  "key36": "3TkxbC2Rq4jx5o5vjfKJKLoQMATZeaHY5FKAWVVrzHN8hQzQRfE2bRTAEnfk2h5PHkXxBGihhs1MhCzVxnVN6NSg",
  "key37": "4GDxGF2rHdcNSb8s1RwxFysnahYfVZZPP9fxEwJJHDzeY6tQfNJDV5amacb5z8HFmUVZ5yof8J1CeRKSmDJWeFD6",
  "key38": "pDKFZw76R5JyjScEspg7kfLoZm1AVYnWWoez4YbJhgWH41sXyaF6RmxCtKxEbDrM7EwYSEAfZiCHQnByzfFy7HT",
  "key39": "2yiar3Dt6y2GkbCnLKGHvBPgasFQoDyriuMmpM69a1tzGF2jEsF1JiDFBZqxndLBj6JqiGPrK6rHKnHi4ufovN5d",
  "key40": "4Vd9XLQPcjiRhtEYjpZRuKZyYwhUbRJ7CHDmQsdT8djHEGzvuBvfFDEyWPZd6mznMuMRRvhKUbPHWwHfmci7PpMo",
  "key41": "4XwvCayTwasyG2AUjzX8zjKDL7vKw9msHXy8jUo9GF1zvFtaRN3x4uQNdSV71Mfpo2xehT4Whhyj4gubJFEDK9kC",
  "key42": "XgoFUB19ChFvyXK78bYVyYkZv6oQgUBiTomcC6wcMhQvc1YD1XHeCD79GUADyhs63swaoU6WooWDGQDC38q9uKn",
  "key43": "5R5f59z2DvwymjoZhy4wVRRdov8d8Hndi4xJ3vfybKvApiHB4PpvRi38jdCdGmU3Bq497CFk5iR91FNitY1yc51Z",
  "key44": "4VbVVvBLyxkiZt61GQbqCnj5e1Az9wQ6FyqeoNzivyTu4Kvbs57mRRhyhFnbmwZ4NSnJHzrFWCciaAaCKYs3a6WU",
  "key45": "3TchbmFoJFRoRFmUDenxn8fXJjdPfTESxDWuFhcQMekKEPtXYbXkBPmrS4obBt6gFUL3Sw4S38kuLDmLZRSwcFtY",
  "key46": "5M1hDjbCVurVEM18bvsumQk1smvwxHpGXjoX6ApGzvuwaqZDWxny1W7mLyvS2Cnzh7ZAJd7Xue4WX8tS3tBL7hBX",
  "key47": "24UYE7xzuRpTgHUNVKogV15ZF1ZLUpZE57RBwr6mJo9PjNyrZ1WX6XD5qMaW8XzJVTF6fbYkTDhUKw163dJwmYZd",
  "key48": "44cr1tGSbsyYQWb5trD5QELz46rR7RCZ581AVyWUeniFKK7V4Dy2fxDt8FkUTT9m3j96yqvyDWgGufGV9gGwgxnL"
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
