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
    "2gTCfBb1vkUAsqv4omq7mVfkU93TpmLG151HJHF5727S6ZT9iq3hps7QHh8kCaxkhufU5XB2UQfVqaoYD8qrHL7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxFPHcjjbBzWJqT35QPVyKBkDxJJVigcQz5x8CzQiEnTePaShnzYviAbE7ZbDqvrbQRoWyCopn2oHqBGRoyV3Hh",
  "key1": "29ceBc9zC1Bzko8XNQTVSR6HqyZ94exmijjxtAaVah91vtYcpmXGZCG6e6vq5Ce6wgtDVwpyEbkwmpYwEYdq8PsB",
  "key2": "42jXs8qDGBCq5fi6GvRxNyWTMW23uweq41yvYzi7wLfvmhYVwZk9ZxZpFjMfbEYoqe8X8fm6LzTU8q59xg1LaXVT",
  "key3": "2sfijbgnGB73UvPqGx8W2Jkdezezg9a4m1txCXgeYESS2DRe83uVDpemuo28d4KfUSN11UPMRQsqXwnMn2SXFQwD",
  "key4": "3UsBepkmueebShppU9e5zQHjn64CsyvFoxKpSWuafXiVnEzMt7oFJxeZjLnX78hRGS1i3n3X8JvyV9GXXLJ4H7P8",
  "key5": "QTnCYLLUYZdfnPpTzSnvs44uamPk8MiqRNTSaDSQD8FDihwpjgxiucHMqS5faKvo3a2SLmZd3HadXAYB1PmRCiB",
  "key6": "3uCVX3N7JcPugvsjBe86NFVtJrXFb9aPYzgtB1upCrX4xcUwEy3Zq6SkDCigRTcfX82cgVRQG66ThFiTWGKjgAXQ",
  "key7": "Xwr2oTdMwiMuEGwnb8RMXigyXmMPQUtNs5JQXTKvL6PunLznUH5zAsBCon2KUiCAcuv7N9jtnL6wTWcu1Q4p7Rs",
  "key8": "2NkAKCn9zrNCYbCF2upoCxgWFUPiwGKx6dKpSRhHNXujj6mnwtcnaGr1zPfySF1j4jHvX6gYNgjm3CDiSK7Krjku",
  "key9": "3fvN155ShF66zt7iWHXD63HgfYcE3GBtdvBAgCadEyb3kaZabYLedd81geKdXzZRtibseyRM31imcSDsRCAjomtk",
  "key10": "4Bw3xoNyXEn3jVmfQaYwBRa9X293ithySz7ZkSz2fb96x9g363eeUbxd3V5Q5sUio1kyHZsQogDymtWiLyCNSqNj",
  "key11": "4d827pbHGggFZoeHhS7JDfb7jLP3oXEh66vrSxd3Nx3xwEQnwYHEs3HYa11iarkJgvsuVaZBg7BMrfFtNQBzJr8i",
  "key12": "22FKmxgCTfEQ1hKwWUCxmNMnmvo6xZKEy14pdehNubZzMLfhahHKXc4fh59pQPtQWRt9L7bf2wBexxWKBkrvEB7x",
  "key13": "3ACLB9iRRC43RfkcuRJidi9MjV1JWWwbn2vZyzFcRi6tLv2AgfwNLTphSHk2H1JrznYtnUHatUdXcEXKpiigsyLa",
  "key14": "5MzrCAsMDNBbmBHceVYgT3zrnqJqzUvVsfx4VgW6SBvosZXx8vtXy84CbAH2u52RTZqkTXcGvEi1J1NFvq9RiUDV",
  "key15": "26ShuqRqJhu9j6kjFDKwmXfCT6JHyojboobELdXmjD56VPTL8keQJPqYzQTXimAX6T5Hb488Qa8kkSQQsnM9B1Nu",
  "key16": "4EKHFuNDj3RE7CsixBX1kmccCLdCbjRh9xdW7RxbUeuRPmY89ku8ErXLh9qz9qjzGAphX2QGMWEYCUPUstb9KEY3",
  "key17": "5RUBjJGnkQZ3kGw1TvYgazCSaDrU4oSqR2Zex2FpQw7AvEGpwCRV1LakAmpRXZTCmgfAhszSSEVW8EXHA3YYxvHq",
  "key18": "2ZyZDLDLr4Buy8jPy2JoPNC7Wh5adSiJeN7Uo55FFLmiEviBaWuEMU1MFCmY6nFwa7gax8muM8Ss43HAhLoTgz6W",
  "key19": "3prmX2eGW8TJkohrGDMMwAkaDvKSQBuyXC1GVHDCpXm6JkmLVHmoCiaqVnEd3M3qYPdH5MaYNVuKisiT9ruvo2jc",
  "key20": "2tDRVL1A8WquLPXJvg1antdyuH6kC4NyhjSCbW8YL7KmCvgRZD7y2u8UvJ4DP9Kke544eQp9AKBBPmgJZcFHKWcp",
  "key21": "2TyQCGd8zD91Ldd1hivzRfWEriiKCxdmF9KNSbbAMWxhohmxJsLowDyAJW2vdPm98vcB3fa6G1AjUaLTzHvGuXgu",
  "key22": "T1hCVNpX7ppRYx9PMucaaDbDqK8LSypBfPzL2tXZm2SHtL9WZu7bpffCmff48ysD7fmxdownMS68556yYMcNneh",
  "key23": "5j6UFVMnC6Ab4HbBi6ob31cDP4GHDe3HkY3T1V48rkFQtin8SEasKQ2fWYnRzd6YVn1ySKPrGcrcfpzZFzDnj6xM",
  "key24": "3VSiaveZiDBB91CS5gBYfLELZGhrQAFA1WFT6S8CAMJyzKuaoC6ydaZzpcPWtgJn9Qo8hvySGpKfcTbBmq4HjkXT"
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
