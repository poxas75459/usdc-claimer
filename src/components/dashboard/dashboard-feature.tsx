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
    "3nnti3Q8eVyim5LJospqJ6EnyMGntBEDZDjMru72Ngxv555YKWh3QsHj2M8AhbLYvXc7FsqVKejhWKy3LcUTYUM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62u5i2iipriemRXe5H7h6gqSRXG6taqSnY5Lu7wpvEH25xASqAu1tCMGZQAWDV7EQQakgcyXtu5jmdAthtwNxebU",
  "key1": "Eh9hsGHa9vg2LLp8xzfve4SWrfNiXxE2dcmRBNdp6N1kEqARFT4V116peiRnHy4sHcVLUNDw9rqcJdoL4Re8VQ9",
  "key2": "3QHjVxWacBD7nJGTSo467Ggyc2Dpz3xLTdiK8Da3nXcG2hkZMaH7AALCuN4vxMApbph5BYZx929SniHSxAvBXM7j",
  "key3": "iHUwGGoXQTyMK7oxkacTkLZSC5Dh9tb9BPz28bSX82rdzbn8a7EtM78RvNeNpxAm8VUjtGSqjfueoMHLeHpjWAv",
  "key4": "61bhgjobb1MqyM2cg5SG7Y1Dk1nsVWtq3NykF5X14bVoUB8BdQ9tiaNJQWHah3BVrzv1LDoJhzm5edmAa6jJNEfZ",
  "key5": "X8qe5A8bfj14d7rRacAs1gwbAwQECohxHa9c79jLAK14PLAqgWHmXxntWbDJ6TsnTjvWghzXgZQc4ewf4wSUjxu",
  "key6": "4be9ZJQu7cSLJFnfQnzWgkAvbLyKgyJkUBKcjUHAfw4dehSHQYqFQoUcXqCtqL4hasPy7kbdsmQsfmzaZzmf6S94",
  "key7": "HjJYmDscS8wy296tnjkBNf7WsjVusEWy3tAo2oSdRR8Gx4tch1a8QdQBbvkWuCU1NSgToMnMeYxgHh3SckBWPZn",
  "key8": "4Pwr51CXzcJb9cFACrgjHqLXbe287ehDryN68aFCuSq2mCsY3spshHccKJFSwTdc6zzREcVgvaYxAMfNBCD6jzK3",
  "key9": "4Mz9pJ6F3JaDdVVTEc8ikokb8cWxTy3GEseo6i28iYdQ1bmpC7ChX3X4yrJ4dBvTWCDhatVvgqLcdDpYSc68p8Z",
  "key10": "cDnNV9dF6J95seaoB6CKx8rQSpnPDkmzZLLc9G4notKspEkGWNioNLDcis2VY9mF9rGKK4pGAjB7brS56wDYWSF",
  "key11": "4ZbVfWa1ZB8Vo7ibW3DqQMGJfrabinmirweYmrS2eBzZqPdkCBg8nzqQzKTGGbaGHEMZwi8upcNuacKGqa7dMWED",
  "key12": "5ASxcBeCdD8TwXS8LeXKosNJ96GMDdbP8ny92UjBgFzvimE9vyrSPRJyqVjSXBU35522xyfAeXJUqgee5Xtwvqsd",
  "key13": "4TgQAmHtGqNpMxn8c7CKM3o5vsrHqrSUkcEattNEn21UU1VfcUYGtpaseQeNiqhFXgPor2wHNWfky3V6MLo446oq",
  "key14": "5KNxb8zMHGT2YaE6DaxD4t83GxXNVU1LyAftv2EdiadkYCpHyhdQpZJoLMZZ3Hz4WY5SC7jv1nxN79aFf2KY2LVF",
  "key15": "2YAxioWPGev354rvt5pEPLXdj86H4LfVmJTCNmCqXwx95okN2WE78ptfqg9LkiP7CNVQW1GCznYEtw6WMZ1mgCx5",
  "key16": "KSM7tYoeaJQArvjXiYH6T4PPDGdaUWz7vDxXG1kFSW8XuCBLiAqcZtu4A6gVcETphmK3zj9w4ro9fS12AZg3nkr",
  "key17": "xNfeDTnc8vZBLmqQ8G4NqToLhPT4LqwwqgvMfzXoDmToWZeBKjJEqceC8JvmpeMQxx78dCm1o3gvPPTKyRFjkdK",
  "key18": "4M2idw3xfbCnh3bmRkK4L2K369u6tGxxubVzFFw5Uq1CbFKBzHr1Xec575nxKHYcmnmBfrAJWr9bfPXPbexebqkh",
  "key19": "47XdDGfD5fMjoQ6giCLWGBgiaUik9Hi4ZFuuJaMTixKaU2PN6CHNRHi9FVAftcFLAdSp7PJ76uWg4B61kYsJrxnn",
  "key20": "2pcybxewRJfmsNcF7jzYFtoc2CCaXEtf4NH2xP7pZCYFBC2Zk7aBGuQU67zwdNrkn7CjnmaT53RXT6JSPrzLbrRZ",
  "key21": "gyXxSeVRXuDHbBGwwaNSk6kMPFMyM4tbcbeW1YpDj4Pkyq3SpPWWxyDHa3JF2vJN7s9iY7mh69nsGaXxgHLsDKZ",
  "key22": "5hcT6jyiQSKHLUDCZeDD7HJ29LhpbsaMtT7wQt7U7T98mg33aw54q1VPtWJsAey8wwBZ8mxAUujkZTs85anLmx1q",
  "key23": "2pUzehQX7MZKFX9EjkctxqQJoeLgQtbR9g3nB68btNN7t57durK3ECPVZjxoW67rVpPB6QjHANKUCEKVbXk8hEgu",
  "key24": "5JHq9hPs6wmBCbzVo1cyseYezDz67swRPVyQXaec9tcyogdXD4HLoMGnHV1AHgKr4FPvpc4AyCdy7tMUQs8cQDd8",
  "key25": "5SFm8nHS6yBrNb5AGNJJFgU4qhFsGxmXpc6ff96wNEg9Ps6o76jFR59eFD6JyV6B3SmAtTXpxDsPfNajNi9o9n5F",
  "key26": "4mySWXWWeE4sxVRYPuQGaVAppWdeTodoK8uKBwLqxCUqVRpks799hEf7XuyWcEcuyg3aBFxoQZWHBfsYiV2kvz8E",
  "key27": "2J4NZCRV3tJzfSA1ZuYNiDK7mRKYRg4uBhY862ttvSwiBYgCVbxREZczkqQNfVUhuaoHx1Lr1goppwqmafQGiVKc",
  "key28": "5p7MbURRfVsULuF3UabZpR1JwT3WFP9BHx8MQvoyRacD9Hcy6dA1YtmJTjBtULcNW4BJhhGJSMVmLpgLQLK7cKS",
  "key29": "2rP9XZXJ4o2moHpcFayKe5pDGqwAc2RbCuGeyPKSiCihV3p9X6g1eg23ZjPLeRStmW9VjrjQvjGfi2o7A3E8HL3x",
  "key30": "37MAFbzDdyhBQMD56CffNinEQMurMFV9wFK3cNuk33HB43LfjYuyRcSktHoTFDpobYYdg6t1svHLksN2ePDkJfuA",
  "key31": "dyFTTmn3MPQoJuCJN4D8UGmrYCx1FPkQtLxWuge4UWgiAyEV2a18h6D6Z4fAy2Ng4teudfEywH8rgUC5D1LHJS8",
  "key32": "2VufhrA53dfbfn5RGDu3izcsRsZS7xMipHXU87CyYW5CbBbBv7KpcE47zDFNVk92qXbuKTyALyny3nQ9cSTr1LPg"
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
