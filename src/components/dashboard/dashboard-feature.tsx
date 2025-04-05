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
    "3vmkzmrAzvEBUmU8mHy3e4MpuRQgrtwdEtgRT7w3VAjsQusZWrnvV4uhesZfwHzyDC95xs3U7ULXkARPvHcvQsQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAazCNZUWkPMFs7zyVquL8QRszUn6CT9CDwhK89UfbAzkNVwtXRapvRqwGjZQWuxR7Ai6ReeGbRDxnGgdM8iV1x",
  "key1": "2Atj26oXTDbyNHYezoxeFEsrPMgLe8NBpnmLDbGms1N5yBLsikuzq8JrEsstaswQMhKHmpyY1G9Vwx3f8nterTMZ",
  "key2": "4XnzZzZAkJszoHbofnPP5udY2MhmwyLrYnG7mxFpjg85QJp3iFDTirxEkKN5sTdEY4x9vUqc5LmmdRrGDNDvgzq2",
  "key3": "5ndh8rbkBjgkKZnShDANZtPcVvvH9M4KKZDjo7dpYSnuJPtQstjT79TdkgGoje3oxiGzS61ufFZCqA1RFmg6GZ5u",
  "key4": "ztMa5hRReL5pFEzWoLQrkdyTuYSy3doWJtw38fKD1TH7s6s7aWSHXaWiMoSAzGbbRKSrmnmHoVkeEGNAXv3vSz9",
  "key5": "CuS488QKScSVTPkJ2HoBGpJfhZCaAmJRRQJpVjrqtwjx6w88HeLRTunZKQ16mH8bJmSZ4pv3MwN4yhJegVea2XQ",
  "key6": "2PMoUrTQypUQkveoPqCytjdPGYQ1mRckrvCnzueozKreAiPspohu26QGchjR4U6A1xvoNpgo9QWbJtfip1furJei",
  "key7": "2bT8rTXZxneAdbThLHs7DDf6x1G43XpjFFi4BW3gN1uwxGrUyqRE8EQT85v9LTkT8TtuMN3cREPe41vcLhxxPov4",
  "key8": "38MkfbrFkDZ4VXAoZD6NdhpwtHCETkWa2j3JwdnZxejSqQJrqpq48hFC7b4qkDkVeaq3gXRzucs32Z9ihruLZpNS",
  "key9": "3pHanE9GBWT9h6hXPLeGtGo6ZgwdXrNEyZL2poPtvXsb1fn4FLENXfU4efwkdnUgmE4zV2oGCv61ZidUrT3FRD7X",
  "key10": "rof75bL1ZhUGKSSN3JsLJCBkWvAHHvT9YA8UC3sahu7hHvE2X92xyA1bifvX5i8NwMRWZHcGrRd4ki92PufB2E5",
  "key11": "r7LSD2qwQeny7PXk67HixQHKfrA2N7fhwh85zjB2pbgZ2MTLpU73s62y9uyiuVY8fcDdKNSZEGPpwASdz6FWMFU",
  "key12": "436hrJ3d5i9KF9xno7sKpAY4i8UbAYNni4Q96Ubs6F2RexeqY79KAc5k7AyvbMbG8SvA2HYwZjRc94esXvZooK4c",
  "key13": "gvFoaC6Mt7ch6bA7VTC5KgY12Ub9FnSR1PWQWg2P9ZPCbcou8gut2WVTSNUoLwwmefZonRe3PbNr2dJNUgtFcq4",
  "key14": "5LweCnBjyiLhrurdy5R6ktTbTo6afnqwf5R9zScxmoyStGXN5XyUguTwE7rdLqrKbropKRPfJoasYj84BEyVStuP",
  "key15": "5VR8WH1Ti7rNCiRBd7cYiEkPmRvUWv6X7yUu7nBeqzoFcjxymH55p7CBA6Q7QS7Q2TyRowXE2SAo5wmE6dnYKzoJ",
  "key16": "3yokyxnN7Cy5mPFz9hzcBo9YGfJAw3Edy5wa4ejMBe5DB2ogHHUNT6WqrXWS3QCLWQmCbL8kZ8GgBQt8c7CMGcjj",
  "key17": "4MQNmRfK349gvN4o7KwrEjgm4dzaeFtmGz8gtEvYvYKhu8WgYUeuStwVRSqzXHhEsGHCTbgFJAFAee7dmDP69QUz",
  "key18": "26jdyaGGzpNkrsvndnwnsVkYCmiVsx6bL6HffjNfUW4G9bxrqp7t3cJJz8dTSxp2tDNbeXAuczWqz7g78nS5NQ7f",
  "key19": "3v7z4YogVwmrMpDALq8nTq5abJrf69qb8Yqh2K6goCw7wgkPhH3Ybu9Eqbz6EDkXQKEYSVAUf1MqfqroT6yr9asx",
  "key20": "5Uf3nBsd8ni4SuPZFwz4fpKKhRmUKyWFoAr6t6oLutEBT4URQxZBD5vkJC4Ke8fbBffjVzbYZHQo4B9Mf672kBLm",
  "key21": "4omFcWbpd9g3qHe5jGu2fw64sfMhZLe6kqHkq2triRGKpTuRsPgFxf6XsLo12mvtasPa7a6r6JEzvCuePU3RjKW2",
  "key22": "xsN33Dg4XhncGxMd9xYvQtdjhA9rwcTrTjxa4QEjEdh2A3zdvMgeaFva2b4dDXhYEncErXh2DbgkN3wiBiDM5LJ",
  "key23": "RWgRbmG92mTWHCdxiYwpRP3LSCSDSrV8DV37c6ZGvQtJx6yVWpYffMfvErabdzJNiJeWdyuNET2X7vsdaKZbxBk",
  "key24": "w73TmveQoq3zKyNQJa5mF2TBWtqQoWba5YjnwS1mUnz4sx8VL1icgp3UnV2GifMY5ofXo1x6wtHEhfeBtnRoujU",
  "key25": "teFy4DihPGzCE4rmTj4BsvaXfcAyXe7bENgo8G8CXkr7aqt6nXr5Jr96K4vAwJv3K7FD3rZsZxrPKLAUJcgVEV4",
  "key26": "EN3e3MUczYHyZH3wMxgRzZ24pmX7hgKGXQLxibFQKKXsULzzoRoRtHFbQjnscxN6zohdzu96H5KNnxj5SjMB4SK",
  "key27": "5vPL3LQ6ThcWaJHRaz4KD8RAbfkcQBvNUKgGS14tmW99kvDnzGyRypePRP9CZXXQLpRkrT77SJUN4Msjpujfp6TT",
  "key28": "nZAZXdhWcyLC6SLm59rTWq3JxGV1kjav6JZdcMrGdwkWTQ5LxcE6EvFpPqbXspTu3rEfR7rjRM8Bn6ziB7Zmnns",
  "key29": "4ot2pRvEVsmZ9KUgNktVbaWg53dUhdE1L4oqkhBDTjZ5mKENHrNKEcXhR1rnJVGcVKcLd4FBSeovPXiC5GN1xsC2",
  "key30": "43Kg3aEqLgNo2iySvHScE5qLbpPdUjUbbNQCRrTkWNqNX1hBJFJcEUXs1GrcvrA8DxRTj7pA8HeNqJp5g8m2TwNz",
  "key31": "3zNyaJCULgtRsqR3YzdVuHEcDAHdXR2ecHiv6Hg72tE4hrqcpWWF9ZTmRyaHGmNLMZc9YqpAVZbcbjC5PAoiNvx9",
  "key32": "2LeAYBSNvELTBpNsgb6veDCGr3BHXLKNt3rzAc5UfzDtmu6DXdrXw1aHx6bcS17FWDvHPe61wrLuoEfubbD2AxZW",
  "key33": "28DZoj4VuuW6MYssmAHaeem3ZnduQyyzBhmRrrJtWtRkSMrG8XssXwQ7zreemdp3HRvcCEP1hhybpPZqpufdZ62X",
  "key34": "2kWPCGzhfG5X2yZzCcmiV2zC9RMKpGYYRrT2yAUS8u7A4vZLATg4Yr4zE4tM5cWrau5LPMygGNu2HYDq7uKK2f6e"
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
