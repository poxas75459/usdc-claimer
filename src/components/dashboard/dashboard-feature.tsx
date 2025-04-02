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
    "69hW8r1xn3dmqBhf72aAuknwBvqKtJkFJzRoYxhZZ9AYBqCvGGTYFLg1gCn8S3En6XSH3ipHo5SaVRN5T5MG7fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7r19QyPBx8LreMq1TjMeqpEEY8SGHGEMPMAnWyVFDvR9nMDU3nFKBPrhGvYnZoHZVGj9rtkmp7CkqrGce2nVoQ",
  "key1": "2y36JkFrBNcZ1PvUNYF6oxBpYgpgDkx8LeX9i7oBB5qsnWwcEHD7FDYpXytBX2EcTqYRNPGntycaj23rVZRTrcUD",
  "key2": "3RRfL9obcBZpCQfTWceELSrLs48UrQoSvgGRbz5yTDzSNJ5u5HifecZx7LnpYUv2RY65xKakxW2vLfXqPRxEiXvv",
  "key3": "2pNuEKexWS6mkeRcyCEuSmnD2wZWrdQZ9mSVCorwKDRr4kXGsGWzN7Ko3cmemYfY7boXBuwCNLcyuLwnXfS2m5Bz",
  "key4": "4h98YMNSVo3Q3FcZp6yqj3hb1jdTVzHnqR5BzgYfejbBw4hVxrSaduxVRd7d8nbzrYC8DbYc67sSyY4LbYyeiojF",
  "key5": "43P6Hs7jdAM7d4tkT3BNvFN7gz3mUe2Crwc4FqZyUE4ZWqNk9QjbtJHK7ZHggmcBGzcnQ22PhNHh5yViJkYoBPni",
  "key6": "35bQ3AGeXFZiFYecsT4NbaUfagxKkiFScPm5vUok6L9tiKtDu9SuxQMSzq5ucbcoSnKNyASH9sTe6aLuvpVsv66B",
  "key7": "3umEqWHkR2P8xvtxdEoFJKguBugP32PWbFCA7rocRcjVRxWNyFSCcDX2sRgJRc6vioyHSHQY4zARTWXfXhyGnSBM",
  "key8": "37KXwnLW1UTFznpHh8YS4SxdgSg6hejqdLPZrJiyX3AaHzjmqVCpu2drno1S7YWPC8K8M9vs8uQz7avn8M8xEgoc",
  "key9": "R6F6EDeayapDj1dMQduoDSc95TBMwQ4aHWhRxVvX9DJ3PzfnmJxDdevNZgF7BNJuoxCQsn9yyhc9eDaeuERS3aR",
  "key10": "4FZkohMshsGfxAGHuCMNtr4QMy1qEAoCz1GdnmQs6P2WjKUS3YyTBNzo9rUMgBckEArhM9NzzJ6oo4c3fDzS2qUx",
  "key11": "2bHyQsEGCWzSpZguHsfjpV56xamADKTLMvJrHSKw4fiaqaxSR1S26TiHhYwzk2M96tUdotQe7F6yMic8DR1Z1MHs",
  "key12": "226n7Qu9Dsg4VYgJHs41WX7DP3AmPcgSQZu25E8kc4ZvAAxU7wdNTaTx3EcL8AkeZFVvxUpa8W3nXjGSjd1EkBZk",
  "key13": "5eKFaMSWHrzmfCQmaSh9CTm7YG9fu4Z5jSvamGLUeBBHVCX6njKR1bszkL8q65cLpkkbkBPTndEsrxkeo2jXwTPJ",
  "key14": "2tjAduNj6YB1nNNM6yURSzvx4RNX4gsixWRiATcAHgFpWN9vhpurPzT2oXwTDMLDM3NHgzVvET88Ri7ny2Sd7EEc",
  "key15": "432NNx7PFD8WZH2cxhXvZTW69TN6AULieRGGgksh6zaVTisyvMcRzsxpesNWDc1MMYbuRT2egiU2RNrWYjRnNJvH",
  "key16": "r8DUcrGUrVVtrLVyaWE78Xb36X1w8Lrz51NWCfzb5zfo2mHbM6Toy4mXRW6r6v6bSzdRm9ds6nUid39gCTTxYdy",
  "key17": "24NwYfTxMrxHBpbW4XgM6ggiGta63chj6yYRh9w26HGoSmH3QmiobaR8RFXVj3DruQaHnXEpEQqR5XybbDUsPscg",
  "key18": "5o5T8HKJuQjg9eFSkRKruJtKa6WvCdykmo6zXEDjXUpYUUBHf4X1pBXoWZ2XN8Z3oJWfWNaEmoAgT5dgAxEAGVic",
  "key19": "63qWXkEapRgsFnLkLbC2nzWdeV8dGgPJuoKoL22LFkbiwYWSciZKHC8jjqxNyuDtKRAwUKuMLfHyUcLEKhibvdAm",
  "key20": "2kmfy26XiqGtNo7V4oLwkqEGaPC7erPEhAv67P6k39En9pW2c8kRh2qn9itY61jVR4UCoMCfSBnUFmbmmAFnQHHx",
  "key21": "LFH3KGLkumgV2CnJBV23zw2rraSbw4Xx7sSmfbvj21eCEbyCkCUoCvMC8fSEz6w3j9VQWGi6ryQWqWnmMLJ7kur",
  "key22": "3YRGn823okr2AMsM7qTXeYgFz6H7BpwdkDz7RJVhpkoiCH32ar5kiCwD4yaKQeN4aHuhX8kKCaCMvfshuLrUpHv3",
  "key23": "3Xpkg6121554kTkbATRomeUh3v3TDWCgY51QnghLcpSpwdm2y9kctGhaQxQTwJaLcgAATDnjQxKRxWkrR2xsE3Ur",
  "key24": "3nup1gU8jKbfAhcR2wqSDLTsneNDzciT2PXNNhY5jNeFQa6e2BiqS6C5J3v1FbGQfsymeFcrcX5jVcqJY1WQsAPH",
  "key25": "3NKtkNgKR38Hrovydr5jRm6YATM5wNbc6cMZdZqse9qvtE6WiJ2zDg13HeAkx2qof8UdQcqK78uhih5Kg4tUABCu",
  "key26": "rMHraFaTBSmoPqJ5b2dGf2YHoXHBCCTZVa1v6ucZkvrmcM4kYq5bUZPzdYsFufDPNY27VKnh1jHsKBgaymnYWgd",
  "key27": "45SvhqKUEnCRNuYpTMivo2ew4MEimMVxMqgeewDBgHXZWYK62PXVrk5jS5oenGZci5jQDChMdu18ofKMoV81s5Dg",
  "key28": "DZ2JQ2VLmaGNSdpKpyZLcK8XJknCUErFwzWKSMUytQcWwrj68Y2w2uWN3i55mL9mpkmtr1VFhqkvZiJCCDBKM19",
  "key29": "4wj6B54adGzouhKNMB4p5RcryDh4euU3Tn2eW31Ha2VqaAUdHxCc8uDw7WwrJZ4msvp5mVuQFo4qop6T25P7D1jv",
  "key30": "4bNTdLJ3roYWujMc1k9htCmZ5JbdWgov6HN82LUBs2sRcwqrGAdAm2XeGvtACWNHx64Twmmqcr7Np1stpt6SQLvz",
  "key31": "2DisdcLwFT8Hdf62yGurCT3jNwsawzE1ghJhFTExaPK8rXVrr4fGCdECqc8PhfiPcJQ4h5KwMWTCxurp5GnigG67",
  "key32": "RYx6U4Ys4cUUoHWT11q6bd1rhdfwE2Ge7g3N2M1KHjb5RaGzkPChCoRKj8fLqCds9p5ix9g5q8ENdEQe96vzK5y",
  "key33": "29iPZnAxfayVXMJiyWN6RuYppodSNNU4LN4Jo88dQjwJPqAfmDSwSwm9Xv6eg35UcWhfydXTEJjbF1MktNbRD7kG",
  "key34": "58NeRXNjnuExMZWXDLsTzgAYUAVPM98hUDtnoGFhmTuUyP67ZfRZw8KmpLsXSW3twpVWv5vw4aLwVtJ3S3p8fSXs",
  "key35": "4kQnRN1J3owBHiZLHjnVDQchNNvZBE7TXWd4rXPKCJsKC5ccKnNjL86MnfoMBxZupnWCQ6DUYJ7Acx5ggTUL4z9S"
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
