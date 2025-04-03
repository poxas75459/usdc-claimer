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
    "67FjDHFDoGtJb8QxzR92fgaEUktBTBp9KtJk6yENi7HzRozx3TTiYYE4kaFAEAvAEEAAkFSL5DNpPmqmpisu5osj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VFPijijpzpdDh5xC9kbnS9VLmE3j35RFejrDV6ovTeh19CtryhhEeGAki2RNADEQLobHev9H5BiXo2Phjs9dJQ5",
  "key1": "5SWSgKEAMfHDvc8DrjJmKS5XHPqMoKBCG72TGnBDMWmcb5cvUXD2ec86qqCngxhV8YNwEGuRTYc8KQDvY36E6XsZ",
  "key2": "2XVazBbXRKedhG6zYq6cLf44fhnciLsBCJaAbA8g8tYPzd2FqPZgtRwgiZjo2MmRPCctvGZtSQaFJeYbGPT1ETE4",
  "key3": "2W5657MsLPQchoyFsEETm3A9hEaHujCAZmz1VjrgDPx7G5MeuZgmhK9Y9hkhEVqs9ADUEe1WeowmbSQrWNaVAZRa",
  "key4": "54EXPcM1agWsVGAZHch9oeJLrnUJQpEo9LNGArzAX14RGuLPoB8LEGrT3qm2J6wuH7iaP3q8qRukzXADENyMMQ4i",
  "key5": "FKxAgKCqZsPvzuQNwqUgqcpPd25T2x4UJC3euft2aBYQxTB4YnbLqL98z2HqVcVwgfKNrBgs1bQGXEaTYRAeNWC",
  "key6": "336EEj6fAdArPBKaKkhEWNniZwT5P4i2DSHAHsXPGFxTgJSMPGE7SXAJY6hWu9iDazYZ6akSgepnuQkPo5b8JVj2",
  "key7": "meAa6HuqVTSRHzbLXgrPP6uf3yDtZ5Zmd9Fx6G3X9fJJyQ2sU2D5PqP5aYK3xNvUDg97EB8fHrnf5nHtcZLToFY",
  "key8": "3j3uX9uRnQvhDEKWJu8Ex1CQLwDn2FQVz98th21hrG2yRCDtGyjRtnTNbUz3VZMDtkMDBqcTrUTLeNhNsZpsJNqJ",
  "key9": "5mXMtRJBHKPrHdxJWBu51Q8DFCXqXXjamdcGq5WBmtBuBuSUUoEtfRHRMPqDPHyeB5rvCT8U3LEMHHrCDUk3MFf9",
  "key10": "41hHfYiAQpwGNRJCKVwhAqowFc2yyHFjwUw3v8F2GxLNJ2s1mmnssVHyFuBYk9vBXezXuoSQGN16rfP9Csm6JX6r",
  "key11": "5he2MAf78iDZ6aZsYJWaLjJn6kZNFycT1k37em3xUJACoVBUpVD659zmC8QgKoWBbeFnN6iyUgKwzMLNMuRkKcNE",
  "key12": "253R61GtZRC9yuCg7oDCQUvifp8cxCnMg529yc38ashojM8jAYuKgc2RA4hMbNyrp2pYKMqD811mHspeaa4DYzks",
  "key13": "njpNyqqEKnudRGHYPNVP2EaxibSDu4Fgn2RiLHMdjsxa6sPheN23pyU2qzXQe4jW7Gu2J2jVke5LjK4oTt8ZNex",
  "key14": "5g2JRGXGY8FyvfWjXryqf6jrWXWHLgBZM7jYoiCXaaTRzeQe9T5GigdRV7HShzgH5g6HLGaSZRd9zKNtHzVMn1Fj",
  "key15": "sCobo2Yp38iy76vz6HjhAn5haTGX66iA6aN3nSKfo8LJkTMWS258u5TFSWHvXzAB4sNtoSQA1RtEaYdsbgiJ1R6",
  "key16": "4o141DawvNX7FaMJPRUnMSvJafLP3SJJ7ispzRyL2US3fZekdg2rTqiCAiGYM5cowVoHSU9NvgULrSycALeodFFN",
  "key17": "2fBX5vzE3Xk7mdfTrsjqP3kTBHMje3rumnwfWz5Qd83fFhN6F4NtA63NwahPH4jJpGs8oUSFmQKSWXAEM2P1P41L",
  "key18": "JaxoMGexL9ytMwJ7UifEBmffFnu3AxmSe46f2VHuP2y7ApmeoDLN7U2TVqHQ5Hr17PvNNia7d7tzkKK4V3brSht",
  "key19": "a4dsL3r3HYiNRYRJre7P7Emf5d434UsYYJcqu54stPScbpQk3pa1MaxzKEtRDK1Kr2uMe6aEcVE9meXt9m8yFuR",
  "key20": "5PTF9YDRcpMoR7pAcEG3Mqa7PP4US1T3CnurAGcsW6AEimwkN5GtPeAZxfdGCptdmRX3nwt92pxBPTmvuAU1SZ1g",
  "key21": "5Yep5ajnvbbivh6jw6aSbCr2BLTjGGUWq9FCbLJHSa3S5mZraDLGAPZ5zJrZv4Cpi5CTLcHtJWFC29TUCK5EDRo6",
  "key22": "5sMn11CoZV8AKxykPNWjtUqV93wLRwTJfbLQ7iRRwojAYmR7a7kJWRCf9kM7CxoQ5RW5AdjxMXj8FYtodKgAJUsD",
  "key23": "2DCSRMeXPdTYBJ75XjBRA44hPvfehS9LuJBjh719WnPbcXnwZEPPFbA6ogTBg1eVjfDfqBcQqNXxea5GkLt9rGbN",
  "key24": "224RL4WhnKJMd2uM7ALSiRmsnWkaYgnY1h7jhrPXUTRVLTzXgu8i5ZY8FCxh1i9g3XMYYbr3rRSaR3s2bA6Qu2Ti",
  "key25": "3fxDekYkNm5mKFy1MQK6vYVQRWpLyC1xNcMXnBVEhwu9MnLHhREt5NGHXeoYFEJrcegNz5ffeadMg4zPPykQ1wTB"
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
