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
    "w3LXdru6Zc6pzSqDRPSrutDf2QmpHXpZfFdz7zne71tR7hUDjwG31AYTDKpr4MasPTQMe1kzW3T15cBvnYx7BL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jn7RKhsVkr2zfphuA8DQ1Jw7cwvmdJEC443wqrL797SiZQb5MDr2thE4z2h85EDbXruRGeU6gLYqUUGxLEe72HC",
  "key1": "2hnGiz3ZC1khPu4VA9zGhDeLfc8WuKVNnqjmW746HaaUTE4FZsSyctyHjm58y8vTEkvz7zgSqgkRtCaA9sBFWVyo",
  "key2": "C2GPMW7YvRdXBr77FBdi4JZG4F344GXfj3ARyqxzss36NqLwSZLbAS6uwqoa4iSraojuySZA7wLrQb9vzFViwZW",
  "key3": "QaJbnvkiX4F8ca47LE3ZXftr1HGELxgEtQqnWMJ8etFjJeLT81ynRNMa1mfMWz2XdsQkiBHByBCkoKyABgziW1A",
  "key4": "62PmSNUfnT87azuwnnQdF4UxmoGhDbKbTfWbRz24J9KTe6v8PoC5kc1hJzwmVfx7pPcKQgYAWhdar8o6n7U5eLYQ",
  "key5": "4Q8dUquwkydSASsRQdtTpeG4PBMsNjZz5F2Gx2bhAJq3fQNZ7Lg2cX75B3PQsFwmD3jLvbcanNVXQc3Rfa9yk6wt",
  "key6": "4UQ95R2vHaygLFacoSdBiGqddi3uwoAmq8c6aueX84Fht1rWRdWzyz1VMtp93ke7u2kLTAZhfsRtLsk76bDnPV3A",
  "key7": "292Hrv3vmWk2MmjFLqAuYUiiKHjDzXor2ySHEZ3aAwXoVZoa98N36XBwzTA9Ybvv9oiZvWFMFEXVrT7rR6HfFxFp",
  "key8": "TZ9sBTwbnjwh9REAxra2fG6DR134kgajnLSBoamRWKGZDXi5oSjMioNKQo2A2G7jiHyLmLdsde1H8dn4icAJ4Wm",
  "key9": "5ThCF4hPHmTQSrR4rHjhNGXNhG6iFBWsQPCgDbNSR99rD1FpZoKxbZPeobmpexgrghUGhNrxcgbxjb13MV1Sqz4h",
  "key10": "4meyo5rHCEWoHgtyupB7yVaLT9bQcvDnxMJAZNgLqBctdQSS8Xz2p3BGPXJG8XhYpcRbcU7aGAiMZm5HRP69FtuA",
  "key11": "2jasEVDooUsPbjZVKs8WEpnby98n526WEWGYh31C2uxWW9VbCZQtkhfAyh96g64StusENzpsjK8WCXrTiyUeear3",
  "key12": "5vVnPN2ByLD5RdKsEudiZm8jYK4AenAzdkkNfPXqtgYmpsYcv4fD3YJptfSAgW3CdwAFzRgosXcUkwJCkJctA5cx",
  "key13": "FR8adahRyXhTr4tuLQ7oijQXJpVk47WZkMih9B1aH3g6kwXL6zSafB6PVabNhfLJsy9MxwhTvdY6fAfReqTGsCS",
  "key14": "D8WHRP45NZYv3DdDsbPG5od5rgVbTRXB9xzzjpJHRzgRvs5QoFrnEon8WK23rQKVLEnFz2mas86TZqwFE2tCgNf",
  "key15": "2XiXpkCW6h9XTGs9pRxzULCcJte9NRn4VVs7pQ2i1LzgqBrrCiiDXhoRRqJ9hf9L8hzKfa42cwFS47pYSaUHizer",
  "key16": "4L8sid9B8JAsJXmrYTMx6xSCdncmjZN4QgtztXkFjSDbSNtqms57Kde3z5fecLNkWiKJoneKFYf5hh5p5SKFbF2V",
  "key17": "36dAeThy3nTHormuBPEpvJbQatsziEcAdbcYEKaJjNXjjd6S2rg1LCVxiighZxym9ya3GkcPav4pAkWwnp43PdsS",
  "key18": "3fu9VUCTCVVghoN3bZ4P75EDDCCh9AoKd3n59cinuFYQdENksBCQbZ9tgAsBBhsZiN3FtpbpkAwVXkF1We38n9F9",
  "key19": "33fcVsaTDz7VZvFtc1gmteLjLwaPKzwuKcoJmnz8QPZR9ccnq8hsher1s5a3qv6f3SBMEHDUw5jhcpQfHPE6qzsk",
  "key20": "61xNHUPWfWa3h97b6mbBXLZThJNcQYhNBcDsspdKzbKtUJ3LeWTf6QEh5SoX4CchMRHKJdHeULn7jEcLFbtuVrCs",
  "key21": "5nuGafp7LxmxPgbQJpw2wENLoV8DL6WushRFwVZygQrKBd68Kdyp7a17C7mHgMAstofCR8mpAna2NJCbdUhhjtHV",
  "key22": "5L3BkznLfwEpnyKMfcs8WfG8xX5arM1Ej38VDGdiqxmRhdWDD4FmVdhkKDTehBW8CrxfvKMHEksnVvzroCHSPaSQ",
  "key23": "F79ghZp9tGt5XcJK7hNcARdbr6eY46gimR9H5WWhVjq4Jmk8VDWoGqAtFD6LqTyMYuSHUdb98JouQFrpi7Ref82",
  "key24": "4H5cj1hVuyzUxwcQRLKDjYVtx9zTo6FFqEv8QkCEjA5jADzmfRWtvtS5NXWTGxfEXKUE9aKF12hBpVGakrYTWrBB",
  "key25": "27hzWjwF1SpLyDfqtqvAGt7mxrpyWtezm4h6TVu16TrpghUUhHuomtP4kqmjciX8jWs6a79X3akAZYNurQUbhdBa",
  "key26": "25FBJi88KzRMLFyPy55kB512nTDgwJ1Y4MdypNbXMmVCzYEzt617KTAM35e2E1FgTq2MHZHRX2p5BRvDCQ1efQqB",
  "key27": "62R34pLNK995TgQUKLbMCJ8T86jfaFUqsvj2Px9XnCFpfhS4uDVFZyBLKps6YMqC19jTejsHNhzEm41UFY7b6SMb",
  "key28": "5Mi5YcaKQ3YsgkzQHuYAJ1yZbEf9wR3ACQ6xnBeHhNqzeuG7ynz7eMUqYSJUwAFATVGMa8jpQuUBL22rCPfE7jYy",
  "key29": "3u1xAgGDtqavs61f5xk5rxPeifh7tEogUqygxmdrq1eNShgcpB52AW2M9DqeiRASq1DPSEmfcuzian4J1c44G5U8",
  "key30": "4H6yGzrWGaAsyCCeW684vmV8VWjXYCv5EbahZ4z1KSdSe9q2Hq6BJGmvAchN6WWpHq1zUDCmKp1DKsxueT5ek5gZ",
  "key31": "4wCXAT79r2pquvHxbNijGZmj2Hvn4ephxVGTQfuHden3R9TD3oaLZzZ95gWdPwsRpQnMTDn3Y5EcTFKckW5Gzatz",
  "key32": "4CtRbcxDh3wFSm836Hx3mBwB9WodZiSNJ7CStQDgR4ckAagJHRZJb8kcMjJngmnGcewDQhzABwW26KSfjY1mRQuV",
  "key33": "5PM3nDgk5F1aedYPv3s7ksSjsDH8WU3u7K7ToxzMNedAotVKJ3oRH4ak7Xnnqb4tJbjcQ95VYjnyH7c2nzDKoXXk",
  "key34": "4kQkbj7JeaXdba8Dx1wJHKxGeNCATJwAhzNrWjtvHEFwfN5HahNUT8u2pKCLfzEr1zrKQFwnLu74K835EGFwD3FC",
  "key35": "4jam3mBtU8tJz6Mgw6oxgpRQaYHWhaCcetLFT3uYC18pELPzF6Tn8ho2FGfh5VJQNbNvd4SA8b9DaHwXVJ82dYaJ",
  "key36": "4Bbj8sbmn2Y1LueXhCGgiTWdZQoDWDDrm1Ln5GATM3jWrDDoTiSmeUYDdiX3aJuvCJSz3zEXj3MPcjPABTELtM3K",
  "key37": "u9aDAK9rv2CXXSygBi4i8WxP6jMrxSfK5AHiBNVeAugMPd1z1dk3KyZBcQ5s3UjfkrzGiZJ1tPvoqZk7LzZJvRb",
  "key38": "3q2H2QfaSdzhniQD5YqyV2GF55uWZTTiBto9xNEyxyXqbse41agjVH6ZGAwqFjGuD9ePMXRxq5LoiejurPYipmyb",
  "key39": "3tZ8UmoKSYGNcoXBKn3KT7BZR2W1zVFuQ3dh5VCSWLxdJf4eVrGmVLSw2qc8z7z1rauiTabjFqZvudoE5DUuxkZs",
  "key40": "5J7uUaVADXCFKwXS3YAwk7fy3n74iEwYyZXFSbiCnLYwwmHXdgzfQELmRYE5XU46BcHTLFrxuW9TvXu8qVM1qprP",
  "key41": "33wztLX9bZzFXnsmVrqsKBX7Se2zh3jPsqoEEbGRx9MNJFrv1JFY13y4zif1Gjj5p2QiKWwNV1ArYpqAAxZf6DYW",
  "key42": "3m6KHydxZ2xiF7k4fjbP16hQCe7WGqbKy27AxTh96yMtHdRvwCLhSqRNjZ1gFKmwRADqbrmsevaiecHV1SzLXGX9",
  "key43": "4Jw7aLBnsiwWJEa7NeaZGPSmBHDaNpbULAy7yUDC76CAKsyZQTMRRSkHkzgoiVtGD6uWaG6xtVVxhes87YexqQWP",
  "key44": "2ci9kRhrPsNtZzfchYhQ6kMyk3TLuekktvzEJH4bLcP4SUutKybFsAuKqXBgwQoiMXUgu1EWQirSAv5DHFYk1vKz",
  "key45": "5A5rmx8ajoKHpzQsMGCtV7eBAjUdgrfocYYwkNCe9Jaq7Kgdzrj3gqXRwSd5QKcAWp79EJHRwgRzkwoDsaJHBJDZ",
  "key46": "N9uzmZxQUpkkzGjGGSun2JXDQ21wEKMFASExnsmdHiFfnJQ6sMXVHd4xBDzJGC41iFqvYfhfFfv9otpHDwcXcAt",
  "key47": "5yVvXLcfmBQSxbQ2YDFJfECWdAkcJACHHT1sjoYzeWDWZHsaBDaxRxDbGXdiYUyj6FU8U1ELF4gXEHcFDYGA81sv",
  "key48": "4A5Harw23AzjuUMv3apBLnyCeqWdd2EPBAUD6LWyvXfKxe4wdjFECyTybBRxeoAgxsuB28zVt2KwbW3XcdpgKcqy"
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
