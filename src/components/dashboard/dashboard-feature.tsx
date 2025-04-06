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
    "5oZFvampYNCG5MfZnRkkx8BYkNibv43Qv3pwod7YzYu12pMF7FsvZwPWp3byFQ5ji38eznz5svjaDnDeDTma4XsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtyZ76m6iHzQP7KyzbzW5Ka6CExgzH6XJ4d8bdMFETN4vFXdTWDi5EE1X52oEZkhNcQdpyxUFuYgw3xYpvZqtEo",
  "key1": "2vCfwpMWU7sXzN1Dwfc79cgtJ7kjLburWjfuSYStbgeyoy7qF8WQqjmdArdcfobD7DBHVquWyhe1jEezgs9kF9Be",
  "key2": "PsZf4Cx9DhCEC32t2v5T35esb6gTsmednRYcextkohGsX1uvbEN9fYSe4PskoffnraTGoCB2vPd9PiP4xDaRooK",
  "key3": "2Swg5YEebw3RrkmsXh91WzQ17g12ZU3h93fHX2P9dLqAweGKNsCQeLc9z6qFWvF7PKdwjoX5qreR8kvXkFsWzt7S",
  "key4": "2kWhPon2xgNSrbH6yxbuTYXPHKwYsgrPg3AcNL4PwCj61S9W3L2VofoaCGjjezo9ZjPjeCRTAw6agcmBMBsgSdeY",
  "key5": "9C75AFDhPLa64t1KpLHj4W79UUbygt4QULQ14YhxQtYxCMFF8en3i5rMxYxeXgA29wW1oABxKmahD1JW1odKrS9",
  "key6": "2m4mWjAWkwVnUAn9pbda3Vjn89gknXn3d74ZqmZVGc61L5AE5Eb3qNq2C2TDQdDk4CDBgjXRrfdu1Aggjackpi94",
  "key7": "CEnLnMiNnfTKWD8CiSGkoSP7UzKBTvGL13zS5NCW3GQdy7Ye4dUjtXr7MhUbbs9Mo4Pvicb3GmhHsJ4ARygV7D2",
  "key8": "3oXgA2TNcvHj22H9kHwaZMxxytcoDdrCUt535XiRc7CyzBPDEmYMuX5zPrLokRUkPiu6TGcKFxCHc8GmhDYRzzTD",
  "key9": "4HtkAwDNZyLEse6qZDHPP2Ks5YM8eddSKZfRCotFoGAqBZ82XjZvNUBLVLHMHhbgoDg4KPn15eiupfk6rFxYDuTC",
  "key10": "3UHZnTgvLBVLkSEM5uopWfKXvYfL4Q1JhQY6bg5cowsyN48Hk6qR5EnmrchM9Sx9N3tGJs19uTbpP3MPUdqxs9TN",
  "key11": "3nszdmGRYTHbfyNpV3tQpYd8GQh9kHHckimWba28Yt2fivtawocaimDMdMevhBfwHfhxUExjKAZsqNb9YHAJuy6F",
  "key12": "62JtMSbMR4JkFXtnLSrkRTCCfz3YsdiNWPC3P8a7eMZJo6e6Uwqqgz2HYUK17SxtpwCJmf93dJdTyX2aL589aBnv",
  "key13": "2B2uQ4PyFKuS5oRbLCtukK5FdKFT2hiWFptcigQRUij4Ygr4WhqEagB4gpY68ti3EgapTTBV6xWS1r2wuX47q8Qo",
  "key14": "4CHjZRifB2AqijAo2qVVxyRB9gN2bFQx38BhmnkfdCAui1B5RQBWmGnf28EuUpfkriBXt5fCXRFN16FY4x2PgZS3",
  "key15": "2gTKfX3vi4oQ6PAWkgwaBnB7Z7ggaovrH5Ww1HDwqwErYJppbvPtREypZAv9NxcGJGFcH7vPrM1G4HLA1NbnjiD9",
  "key16": "MTJbpHpy3DJmXNcfYDmCW2hsZu3VbafaPWa69DpfSe4c8Y6gJfW5NfobwTjApcQ59QuA4LXFXPBUNokGV6jL6Jy",
  "key17": "4Nmt3J5qZ7uaeE41fkZixvEL2iYmnJQrJh5dBLf2aQPb9dxeXYxffpkXrzmzvbmvZLKK1DfgLw5w2k9jToDCEjZ8",
  "key18": "2UV4ymvSqcsoKnPcvLTcYycrpdHfxwgEN54xjFodDT4eqYXNbpzRqFZzuKfiAtaSF5aLhxPU9ovWc8STsR4XDU8Y",
  "key19": "5wuh85RfbJ5kAaAR8jLsm2vF69aKuZS9nSWiUT4BCG44A4WXP238v6FdDMjCGz6W4CcWdDv3abi4bh8Ci58zZi4U",
  "key20": "51WkbuRtsU7BFXrqFK4msSwLi68yYzLhPzB8wSRE3SFdLMiTxW2iXkRiwL5zBx5sL67cvaGUWDBvnPsbzz5zveyN",
  "key21": "3RgDidn9gMMY5qtAsFpUpQFzvZf7SFu667RHgd57mM4jvqHxSiAYCg1pypJWCPzaACFkWcgUTM5CbXxHfveequmH",
  "key22": "BuvhyBuhRcPbcY886oqKjwq9JdiBtXpURE4VPZwv1eCrhKZHRK1uTqNrCDJu55jRYhTpVmc9o48qbdyhQ6wKW3r",
  "key23": "3AEKwPf6KitF8ifDGgpWJVvVi3EgUohEW4EtzQmfAtwQhYG1azijoZFHHm9QRCfZDSagA5R2ed1xB2ULbKynFzJM",
  "key24": "59b9q63C2u2pcFpgGmiaE6r7xZPWBKGrtVxs4s2Lc32dFUFbKNCk1uXqdXXZBiZeeyrM2d6FL877jHJ8gm6bVgY9",
  "key25": "5Vgh6LcveLNMVYWZyeRJLJ2s6MTfZj7aQ42eAqwyJ7dV3g1yaxxNNDBwahunJ86vK747Vc2RcmeUgnCXmXCFArND",
  "key26": "2TZMkRf2pM6RKqs54GUzAmYYvT6AXQQwJfsRuXYT4xXrT11MM2kop6b9F6SxyqRQb6rDrXbhmSL7AvVStcoQSyxw",
  "key27": "xdKDFU7nECEdcpgCariTrMqLvwdd99p6keAfekUBJrphSEiVxhVi8mJbTUxG6eGYGNsPwyNFMfgoGVQvRoz8QLK",
  "key28": "5Zb2BmtFYhFbzbqyqugnXUcCFTsH3m5EYdtBr7oqPYQfrWWEQieLKZu9MKsSoE6oFSyh7WP8ZBEAuCcLkYkv4CHr",
  "key29": "4okTKUxdtutYCCNxiKKGUFvHCNu4AXf7iTL6jPXtEt3RQFyCjCUKnp9hFmVpsdGLNc5LRJ2Rd5zPHay8Bc7jALuV",
  "key30": "5cYP97fvmXgATBpx8z5G8AZhiwTdW8aewApkdn6jHCY2XUWmQykz23dXXMPFmewMRwfdYvaUoSjLBDpQZn4Qc8Gn",
  "key31": "2KPR8cDpppeZPiJpVCUvNhtznsCnP328Rf6yXase4tTfkPwo4dGKqtXPqtwuprCbm9ipUGpRPEkMQR9wGvbpor3g",
  "key32": "jEMyDAvZyeZPUt3ZwUREu1L9WsB3zbKAuad2UKzb8Svqij9LCrenQHxWbTBGUyEZ29BcChi3fQJ94urpNe51RTD",
  "key33": "5bfFvM3jdvobMj1RBhtYZYMz3fVnSwe9VLr7EXpXQR2GyqgsvtGus1PTvc8XznTu6fS6jwwsF9n6GD8LadVh7A2c",
  "key34": "3aGkYNSPj4HsxvcJGNQfHSfsA1rDxph4V5J7tWdyB9GyDqyvPxz7TyM8UibjoFL7VVXXfthXWJ957uKsTexXZ9ab",
  "key35": "5P6hkjp8PuGWrLxvW7Cecx9WdxaKUJdTyjYX87Mugz6KstB8HF44VsCfZNRrgLMbxTiWNvEPFKXTHJx5LzSrrJPR",
  "key36": "5q88QDhZUQp7KNm1A67YZiAhUXG44TXmTgtFvp1BTdMTKHu7A1MHRKooTFCuLBctaFAfCjShRUj5oWxcuHAv5RF9",
  "key37": "2sn8Y2i1n9o3qGnFc2Ykk79bae6MSy5rMDvuL3F3h3rGGemC1kaz5nPZp5JgFEcfWFrLpfXdkP1KJyeZ6Vs7rqWn",
  "key38": "313bPgeekXqo3JnfRisqFLLwdsn3DvLNoyfMvb8hYTVfZ2agwsMdraRSWyL5vURQ33LHPo5wqgzZWxVH2dWbESjp",
  "key39": "5E1E4cNwoLrGM6zW5PeaZSamtXPSJPn4H2RLJ4B8wvYyaTdRuh1VvxV1oesC5EWK1CvQGK58qK6o7G8xs5ZbovnC",
  "key40": "zvpsGJrZbBqBiaHMZnVALmXKEP9Y6FR5SxGkAcPQYPbXE61jpmnSdQfCT4YZz7kPsH124UFrCGW9DJEsA63sFZ3",
  "key41": "5gTFHxMev583dpBU9ss2C7sbYoKkJhbHabLq445oQsMnVXWG2dbdHEerd7M5z8MDAC3mwJkhrXs4DvXkSZ6ECFvT",
  "key42": "3kLwJEq5LTodMvyQP97MRHTMu2SuWeFGHWSGbZUZvUKM7NPptciN6gSAKKAABVsMwDpz8FR6Jkzwza8shr6pQi2H",
  "key43": "sfAzHioof3iB9b5vyktaKt57LgSrrvri34nATb89A7SZqGvqaDkVJ2sQCSv5rtLWTESjXHqqjvgZq7bMRi9BxJg",
  "key44": "49PrPbqeMyEgKBLVdtTvtNysZUfjMcZjWqh4erco8pEJULGScxDwsP6Ls8NYfH5bXLWBt9TfaRvHqm4JPAQj3kMF",
  "key45": "5tkHzSKmrXexR7orVadsZtB9riHVgt8A55fFenwKk9WtnqsbyY3kzQDrpbXZJi6QsRZev41ncCPx5PxkZRPZXxkL",
  "key46": "5H8GdMw62ausE49CwMWKce33YK1ibWrAuMdp4qhDzMQuDWFwkdNJCCycs2ffAaA6NGDX9r7Eiff9P7xaZwLf4Kr5",
  "key47": "2JLncFPg1rEyTCupoSDUVU3cgHA8uBuSeznJJF7U5TUVszdFFdYUDAFf6o3AFB9c2N8uucQQUHW3DipFYStQAcZE",
  "key48": "52as5qPbnMALhKSSbkuU9bqK8TAf927j2S1FGzvfPuHP9oWDH6YeSqKrVbR4a6VUHXXxdniPe1GHzpxhe2JEH3we",
  "key49": "5KSfQyDRi1Ti61X14vt4QFSHAprf6o3xSHtP7PNH1MXxskDoPAjFPXyhFJxGvrLd3mp4SoGz7JyTMfi8T8TSM8Da"
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
