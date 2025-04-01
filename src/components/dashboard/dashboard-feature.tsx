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
    "2C2VgiT2RMA36C51phbqXqvUAbfP6AURYxppucRrvn3MgiogVTVKNBscTA7i7fYSMM6btpaxZ5qN5xLX6Ycv5jNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nz7gn58FqV7b3TL3sZVcmUUUe1hky2q8ZNUsrQgDbtv76ZhMotjgcXFaUDW5kpi5gi3EgHCBKxsXRC8sB5Njppi",
  "key1": "5L5ALCdxNTNr1UGKC9nShAaytp3iP4DWmPmw2vuH4ZoHEZnfRtLnXNJkXfeTwjgBzyt9oPEDYaMEcJvdHPxMcKGS",
  "key2": "56fKaTkkfNYw5gL3sytSw7Ae2bNms8KSNc2TkjswE7TrmTzzXusnQEs69za5iFgckEDUGwd3MXXnHK4SSvEpU2dE",
  "key3": "5NeA3gzHgSE8GXXpwW1G7454dVyQhNct9K5YiLAwzFFBT9onRtoswmSJAizSjLCnWCqef53eMPwxcNdQWe8NojZK",
  "key4": "2MUPmXxL2LdYwd5YbL3r7YQnH8gnyqQmVgNhR73H9theBafZgsr3z5Kh3uhDpFzNMbTESi4Tdhr1FbKjLX9GhMt5",
  "key5": "6U4ADaEm4rqiBncpxjBMtP17VoFQJwRAWmwSa9ZaLmDGgFvrkPnuYPS4cbZZZ5h5FSZeoqooJN7nk2czb38kUFo",
  "key6": "66nU3PywFofpWiRLbJ4QHQMuFkcjje1h6WJDddMpWFDZpJkSeRnvhGckc7Jyh6c4D76UoZfhfi7bVJxwY52RXK2U",
  "key7": "EdV98KPVVRVeSFzzXHJHkX1HEEJy6MvznNLhbccgTE59B4jEhbEpiYRFuaTH38X4AhR27ZRfiUhAw6Q7NBUBabs",
  "key8": "2TxV2xgdSopeESDqxsHdzBNuhAMXyvb8B6Lq99NhzgWbmBPq6j8Gk5ZzEMUa9miffZaH2eZ1AwaXqJPEyn5c69qY",
  "key9": "2DmeUf4nWTCN67caF5uugnr8WPuMWCEG5P2wGQbB4PPbfDksUHY64jVKEKfRPLx5tbhL6wC9KYrckmj2pFY2iKpy",
  "key10": "4oFdAfnPpjAg6b7vRSp5TkenvMv3vdGaZoxkQjPEDxVuedgUiFSkxWp7W6PAVbCRCTXuYu6ueZGzgR3rpKVRqFnB",
  "key11": "2pWPV8Jpdfr8Ui3m9pXRFf2sJg69i2n1sgA1R3QxpRCQCXn2aCGv3zrjMppKcq15hFtS7bfp16CTpAg2jvkWQoX8",
  "key12": "CnxAETUYHDbQDWPxZnoT8gaDvQ3Ss9w1ML4ju6RRmUpiGbFW8bEW4wh8nt3uCaa2DtKAxHmFQm4wAjEW9ghM9VK",
  "key13": "4pQMNngGxtgJFFWHQMEPsr1PJzvQi1cU17s3EHa6xNWDrT5buya9ZWijXsscnQfcSMKvVvgr82tvjUnoCDfMCA2K",
  "key14": "mfqTvbaW5umgvkWua8ir1WXie72ihunbGvMBLRci4xasbnusHVZDXqqRHaubMsbURPckRrC77yuMCDpcx9VJ4BU",
  "key15": "kfpT7Tfgeia7QaTVJhYA5fvpgRkNJN8Pj8ic97FQyoDwsegj2wB8wdAF64CuPqTeqGKwGwhp2VxtUiSizFGP2rM",
  "key16": "2Hx8CUHY7bw15eqWAuPqCzbBxyskyvgaLcux9iJvAZQNqwfNDfeoa13KtD16nCrn9yYSPXbxE7j5weLJppJGvcAk",
  "key17": "wpN8jKgpsSSDeYsN24cu1cydCRWf9SxNQcq9ohrce2XXgWasVptLEQR33HNzBPbS34r6Myf9jhub5oJ1V7pEBi1",
  "key18": "2Xk3s1JEV2w8ZMqWkZAPjcsRUQcpokyGERY6byfjecY3CfSL7h6yi22FUdxCKxTbBLWfmxyherdQDwuoHLULSUeY",
  "key19": "5nofiQASRaxbvQC6S5FfSE4jZVEbyVm6BcavmZx4GMHQgdgac7qvXxC6zMn6Zmea97mT3XDLtzDvAs2ShD1UVo3u",
  "key20": "RGNdAdfsyG1h7yvfe226eUFSiJ4x4bq6f2KYEvuwvpFSYmKr4xwFaFWzFvPRexzcp9ByexQdFKN7MGkdiVtTBys",
  "key21": "5Bf3rfGCJhNnv4H5FUkLTpRKBNemsfppZ3jnUZ52oXtKnt3sSbpoEq9imtqbWu7qzhwLxZG3bZ1WmEkX7tgppV1k",
  "key22": "rCnc5f1S6GuDMVbYiLeh8tLRnNt5Av1z1Hsr6vWNAfUTGQm59heSuBxZ3f2mn5SSZSce5y5fS3sxHvYKF9YNBHY",
  "key23": "2pbURQXpGFHBgK9goiRVobozVCdrcuDWQvUnX3dsrVKrhHsqGBfoXLirnGu1mfxppYhq7uMTqy85fGxnEsBK6Hsv",
  "key24": "3qUDxg4cMhiSAcBnfgd6red5m52hRwcjpDqtdKMQ7JLznLSh3ecj8FURkC9YdSHurdZ7n7oWFJ7JCqCLT4R6PCDr",
  "key25": "5voVEMGwZ3agLfvh2kTLYHb87KSF4bZnBwe9uCsGDVDF5mu3CJwFdVr3mpZ7oB9Hzg5XN4rXuELbdFTgmfAPynBH",
  "key26": "3N32TU9PGJ7WnGz4tk19gBki8bkL6jtnh2a5E93DbG9uPho74oZckTJD1NNYZkyBTsxMYR4s1DgNmUba9bh9gSva",
  "key27": "SjLK8ZJHj1x22tWB8krQtycAQAJYsbF7oNSHVkqaXmkBpw8tEUDkrF7m4r1ffx1Et62u6xdBUVFXcJSFY4AvTJb",
  "key28": "sgpr7gWqacWwkXz9fyVhuu1bK9d22Bot5bGZQ1oShp1pk9snpyRHVQghrwSxUPUWxW4xWgne81Rc2nLvNwGZm7J",
  "key29": "4vXYDKFY9MspUUQPPQnx2Wm6UjM1rtcm74p6ssrbivamZxSEC63VZYYFoq3QbwoVieposEv1UDTcR82hR7wY47cr",
  "key30": "4w1shRZLdBtVJDWgLBRMmDCgZPbHoRLLacFwdbkhtYju99q9nYAH46TeWfd3vSrdQJQXdDdWNwfV2u5mdWByreAa",
  "key31": "3gucPPnNtp9Bv2wjEbbncyLeQuatnvRV2LvMZavrnHWFDfmGspixD8AcsQHqNHTj8KdecSLncNpJFtYnyTcwRGJF",
  "key32": "2UrhmEzUfZTf9Kg5yMDDWutHqDG669Y66mtznkf4TfoWachefA7QpTDW7aKzbEobuSoE2H8EmqkMHXgR1JyKvpDA",
  "key33": "5gaBWbDD3FUkfDda4t5Lr1sJXHEtz1w7vewB432v8zdPAtpo4xU62r88jiV7Uthsm2zoKNdFULv3WTe2CMHpE8wh",
  "key34": "aeZEnP4ExTfeEo6nFCKtpPKCq7tpUnKKa4ekJYHujtT5BWj8s1phRkTJbvqN4G7CpF15DcCR6JWVm3WZmkkDdVC",
  "key35": "45Zj4evwfYqy311mnpbBFShj9k2XKmY6y6uprbvy1DJ92SdE33RP9Sr3NdepeXsuaLawPGfA4nSEyE1KFS35ydub",
  "key36": "5f1EU9MFSzAY6CqAFBb8zqSgsxy14DpEy4ipdeAoEw8u11wUvtqj4DSxrbJzTEXXfFHwYUbxHQevGqAzUK8kRM2B",
  "key37": "3ZryBpKZTCtziGKzcRvRDy4BGNVHr3EWmz7rUEWvcRxSeMQPUQ5sxE7WEVzfrMeRuuSnaQqAjKbRqfcA1U9LpYKA",
  "key38": "3eDsorTRet9k3Fod8HxuByMrCQK2JpYzRpaanw3U7U6bsu6hCJkrvD61R8Ys5cwXLo2gw2FYS1pC8SNrFjrh5XkW",
  "key39": "2PYVNigDrhFyf5um8HFDxwWLzX3iuc2JCL7Ctpqd5GwYyb1dFDyT29uv7JVNALmp2BQQ3N3Z9p2fD3C5awa7aQSq",
  "key40": "4p2hiJJC4NjoumokMgge3kLon3Ng1ARu5KBzR3MpcNeMbhMEJMTqgadjADnzTzehofTYXY2mvvCeoFGDVpcELVBS",
  "key41": "rdfABMQyMTm3phnHHDDd1ATbvVr5SXmEaAkF1EdDSUiuhFdbViBGPhQQhFRnxvpjWPTQYusuamn3kJUqa4BTJPi"
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
