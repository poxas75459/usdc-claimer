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
    "5ZU6BwnBdTrUMa8B4jgVVoooojBF55WAZzqRjJEVaWhb2rAFg1nc1br2Bd8ayc1DcVSP7rQxQ1grBkMriyoC4ERT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ab2aPyhSJZm23s4y7kWapuQYmNC97NwhXRE8saCKu27PyjSzy3xUxNm7CcVkorpzDMg4wmm3KktQvBRNR7uzqhv",
  "key1": "5fDe3qeJdyESE6yqUUF6w1Y6xyjgC7cNFKGs5MQXVB4ifMfJvYLQqtevGrTSxdJeJbJtWmS33Lj3jXxb7SXBcx1b",
  "key2": "3MwqWPNQzd7XLQ7xBxwsNxzbY8UsMbkqMYY5GKyR44k1hurwiPGLCE7HPmtoV97M3Mhmy5Yp1gLNuFNvApdfedar",
  "key3": "6Cr2ETqGu2pBcPVCEuJw7d9DfxAz3P8SCHaf5PKbRHLo6bjkxthYKpbdtwFJfDahnHePcWXFLnVDo37RfkwGsTp",
  "key4": "4VfhhwNnzRMyLfKLyhGGBxzzbdvNjcK4n8moFnp9KobLQyrr8Y6ULHhsubyLwgtp6Wyt9FPWfEXoFYtqxpij9v3a",
  "key5": "2tEGUQDM8jDLc5XBez8DZPEEsRsjZc6F7Kf3eyEw6DTZGGW9FGYG8v91KXWrnK2AEN5cCJoMYv8dsJwAXBrbRwCr",
  "key6": "3yRCULesLXp6vWW5J9RrDzDsM2NNfUVAYJani7pekU5KQ2cAWkSf3ULRVYezUec1Ct8V716nmMhNx1H5o6xbdJHz",
  "key7": "26hNY841voqcFqtALmsAKHrDSMWgkByHTB66op8iVcmvFyw22obwznRiwaZS8rwWr81yMJSuySCB4kHKMT6rwv9c",
  "key8": "oRFnccBy1GefkMiZgTUVyEey1sxaoEgXNtxF7ATi6zLfjpTDGcK4PFS2gQaohN5zYP2Z87f2e3R9K17mWd9ymj3",
  "key9": "3iTdJMSKbQ5ziMFyd56T9W5e7P2MwuFVRz3aJ6eHEdyrD3e9sQAatXAKDgNHFuRfyBK49S32AM2mBYZBuc2sfxpx",
  "key10": "2TNUQ3nN7xJqwMdgX6bEtv2wvxmFatN9XakWFfJzhLjyHFJqCpeSPkj8gBQoBmP7XD1A99rfXFmZaJ8oZPTmmzy8",
  "key11": "4yRvYEvfq2tXYr8zrrWsCRYyg73kBoh9wD6oupBYbkWt9Xm8TyJqBExAAsJgcv7k8ELDestLLpRZy6tPZ69GK3L2",
  "key12": "2SEA8NUXqewaiRppXbtcqTBCmPv6ir7Rp4jPewJfK5S3DyhTxXabiYSDmbwqNqmS5CzTX8cPaiEjLiQzxyLWqqzC",
  "key13": "3V43nE59pK7mCyN9Pi6oAwhhTwE1oP8R7R62U5ypWB6DZJaccpEMmtsgko3sNEkNw133WzC5Q8f1jQ8wSt5koWxN",
  "key14": "5zR9fTiwtYqarGHiHgKZ1jH9aAcoqeXQvL7kZgmNdsBzEnFCpkTv8tjGWhxHkkfWSEzuiwNDiHWPCq345eXpKPxP",
  "key15": "5Wgd9GoSrR5BeKQyvFfmECB3FJz6ejUQM5qMAymPWmWgeZFSWFPZQeMk8XaiJoSaTuvLinLdqJ3URZQ6LGZjNYsh",
  "key16": "2MhjAmbQAnDxZFGM48kQsnHCaWpZzpV5LtkrRwBDVUMhqvnRs9QGnRFhqhGTimosNpo5xHEsNVfdWwVoGzSARC1E",
  "key17": "528QPEa3c9B1ycUDSFBfYqbXDy5pTzG2cRWkqpFESvFaFJ9WtgXXZZKmvJdB6Pv3jHiM7VtXh88xM9Teeg1jSsbf",
  "key18": "64X2vCL5g83nQVuhiiiVco9BCt1AGJnwupVBJzdyvb1ZrRJTYLxXxykU5MLQqyaii2du4PCMr6u8SHeXDbiUc8bz",
  "key19": "ew7kXh4NmCpmhHVs7xijFfW4vaL1azcief3FN8PUfqAkRxadR17VEuDLvPD6sVHvZVPLcf8xJqWPPdtRcjv3mvv",
  "key20": "3Qh88CvnCDwEzbJ2nGV2rp9MyAv1QcZgf4VbcRzc4Vrz6fEYMurYbmc5o1Gsg3fvZmyEQr6TTM7RY3YiBYPdF2kc",
  "key21": "WrbxUZYvLRbY2QUUpsE9mZfjBMXufeAXSrWGEYWSi1n7KHVzpjxvVSiX3nDngbq4aCfaqHkN3npEBzLTW2RFSg3",
  "key22": "21gApDCczDPLyvqHZxGDdBJo8waakXHPLqB92R1RR3mUt8VjyYDHLbNhZV6VKwiws5WuvKd7PRGTqtnPGv9nZ9KR",
  "key23": "3zWrfW7LTfTduE8b9x88dBGogkQbsdckdBGDkKhJqKRHm3DAqN2x2zYUZafXkFnvp7aQPsCw3dYQVPchEjpQ1SJk",
  "key24": "4TuJfoeQvHGxYLbtNDbj4BXBLhj1jxb8tsdS574NnAUwA16eCKHM4JjLR2zG2s17N3wY7AoWWSsHB29vdfMXJF7T",
  "key25": "5cfzm3abcU84dXhRNor8b13eMe6h1k7HfANAvFSMXJKiizsE2G8xaBuepy1KkzgGXNymh3KCjPF2iMLTLKSqpqKQ",
  "key26": "htRkEnebrfnvETeMqdjSpv8rtF4eg5VwafyWt4nwBGX2geYZ1mvj767T2u3Bh4BEZURVrWU5ojWqiaNs8aDmiLW",
  "key27": "65kN2Si2pUA1G5V1E41Bid7yECgbZU5bSUa1AmbGjQKS8fiTCxLgtv1WQSCpvmiBqKCxnW98dwg2Chte8uFWhT5S",
  "key28": "QioaaUm623jBA4hM6fFCUxCFtBgdMXyHNGKgpujPUTBt8aJEMFf8W9EH4wqroqtRHSM4txijzrdnPEse2qP8N7P",
  "key29": "4VEjrYB191qLDHAsnP2K36wCsEWZHzCeTU6b46BUoAoh9RUkPG63Uz1rcXVzM1YpRhbt5iUS9JPX14tY1CUQwtw4",
  "key30": "cpnuZ6gdBUjo797rLfbFYkriaHhyTyUjXzx1jgS3sD6PeNiD7pxJQ2gGS8UxfyBq26ZY8zSHpenqKi2vnqYpeva",
  "key31": "3Uaw6t8UuTRsTQQpMqHho9GuavRz2c5MjUNAbkNgnQ93NTHF6DXNAXJcgnypAt2BgpL7qvJaPb4cc38qtckCnNjQ",
  "key32": "4f8cS9PsqDSysSExmFHxVbg3rR3kzoZf6jBajxFHbgqoj8z1FVoqmaGWLcMJ8nszTCkotuBWNe6FMzDHt5BMR3U5",
  "key33": "5feUufjFxLCWfqpmFeVrNb5maTN8uM9boVUyEgiKrTgXwSHb4rhY5QBiMZPbusMJuTKUQ5c5ZHr2H2VSDkxXn4yy",
  "key34": "4JaM46XBFMFmsy7RzFY7KMCGTQxoofGFtEY8vdLwVNEwLHGQHjAWicQX9a8LrprFum4qDbwM2vNE3T2ZLpSKGCRf",
  "key35": "2z2TX2c1pkr8VPZdu5YYe99Hdhr5rz9XVDNg76WtftjXuRJy2q1mdCfwSAuTXnP6FmEDZcWGEvmHnRDdvPDCZc9Z",
  "key36": "4W6rfRhZhJkUsBqC9g82q4XnLF9ENLtJNFaS299FnvkG1tBD6xLfZ4cLMqj9fiP5hikfe8nzEG7nyPd4hDMQGPNF"
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
