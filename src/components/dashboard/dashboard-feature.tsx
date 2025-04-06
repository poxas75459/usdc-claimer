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
    "7oxCJamkQ7UCDZWru2Wgr9vTb4sfYwdRoT8u6V7dhiUevBxy5CmWom4c6wwN4gLhhrA5MBFAdKMh9LoassU7qWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NC1syuE1W28g4qLW2S3RMH61X6aWM8gfYEVqA1GGfMFKhxwcBH9hgmZwsaSCp9xcALhYvyJMiHQhffy7snbetkn",
  "key1": "4eJCzNY45xVzv77TJ7LCFzcgp4KLDrGkPw5PbRauQ4CGnLWXfSjxTqfQV9C55kkts2bnaANFEQJnTyzTNNKbcCK4",
  "key2": "3PPvdmRqHN4bm81U749oEGwZ1VtqvVRQ9RJNZZ7k3JkQtXaagU2ZNWLJwbq8TPxmi52ZX58H3X8F9B3FvT8sUDjy",
  "key3": "4ewBdfvtQRwnRqAriZseqBtkQMXqtFbJ92RE1aKoFPk3cSuTf9i5R4MfQzMLX8THYFyJhm4ouiPuAcS1j54w7u45",
  "key4": "6431dff91LD6TW4NE9sziwxfhVuX1RhKqXkyeTpYwwTpLTxDb2WsgRtb8DvpcFuQj1Fa8rNDWmijzc5EyzsSXcQc",
  "key5": "G9h9dyU5bvLppk5qMzSs3SDHQYsUgntcaqQWfD5XBMNWsTYXguzMmGcGv1oCpynhUMBpsmhhKq2KFG1ttoCmSby",
  "key6": "4raJwMq3CLY2Wo5VBHkyC734AFTWbDqirBJRQV4QeRhcrSJ57hy5ZitjLKsMG2hVEV6QtSPzi1LTWAnvCWQpnzRp",
  "key7": "52ypAcjxMsn1Q8kAvRco6vjAR4WrFhkwJPkBhpmapG6VCEka5XRzYBnAfUk6SkPiME1LFMNqipHUXPyB3JfafcjN",
  "key8": "4dNTjS77EvExuhNCKM2CyiftFUVKieAy3VyoimdMA7i8iYKhAMBL5vUUkQXEV8wym4rrs3FbKWVtRCEDDwNHv7o9",
  "key9": "4KycP1amLd87dDfoh8WKA2fUdcE7iTcG1YMgPFWstAXB7SJY8U72SpU6g9Hk3fLAb18nEZY9jcK4GJfQiX8QxiT2",
  "key10": "26fJUGPMXf4qQxPGWf6Fwqd1ouywqtpSvPWqY7qk9qGzG3Q4YM5Sws72tAX6m7guHGGxn989UPqwbArjrR8Hzchi",
  "key11": "Gj8mfV9zDp7NbvqZFq2u5Zb7hjaDeHgB9EzpJvFJSk8h212peMexCpFAifJdPSyE8YuKS1KtmsQXCjdLqvULZHF",
  "key12": "3UovvhsDppd6kBfbzbxtrCNGtXukFxFHVA7eJQyKabLmn4B5ENAFF9N2nNBzRcdV6tZeuLt2mRUmaA8ma9cdztsu",
  "key13": "5cR48Duxy97pkd5d7wQJGiWrYhq1fzoQhg3GCSAAFB26Atswwwjg8zLCvu2CRPS7nn4j3n5EJobZuvop5frzd4Mg",
  "key14": "XzWG2zTiFnzxMhMzsnKZAnZRBYFmzTtu5pDDgBZhSvDMBwgZ2ryPWbEdiv6xBNNwZjgZPJSWsmrEzzzRApthZBX",
  "key15": "44yguhMkq2KSTZxkMSwKLWU6pwHpWBHuzdp6YGT2RYbz7iVUGzPTK4neNzY4cVRKroCHzw87X5PXzhczHvrC44Xb",
  "key16": "N9cMyCrQdtru2VTamEpx1ccHMpYgdmHh3dTJJgZY3zMDRDX9TJ9nXFpicLA9tM8CMEnA55R6Yt3APxqycQkpU6g",
  "key17": "4YsoFz58j3Mt296b9hZ93iUGXT9xwq6ottGqzeeLBUfaWHLUmegCLKfB5SbAhwH9o4HDYu6vpmuXzCQZDrqnoG1t",
  "key18": "2xeMCuyYUFKcERataBj92xWYmtqSYgzR3i29afvimrvWshVxp7uCu2SayK9bV2M28xSfScgdPACJwHoZft8wZUVT",
  "key19": "4HQP5XUM7SRNTXTXM7Zf6TCT3JKb2yhf1P2CXFS8qoMWWT1HbXPhtQ79cmdvbXefD2EdT2pyxLDgTvpQBou5rhhR",
  "key20": "4WNCyvh5m42fepj6CYoyrYN1NxbAFoSK7186ueXLPqz4ep9xQWaNEnEEd6xwh9N9JGR3Hop2vsJjzRKHq1vCr7sK",
  "key21": "sL9bepqpYCRot1AgdTk9uHEkb7degXzCZr7XF6cHrawgiHhizCCH2NHC5H6kG46QKTTrL4bL6knN5Zr6Mce7WPo",
  "key22": "EFWyXbztohQbqGwBLiv7HA9amokTxX4wGKr4Nhrv5wjUT8qwKpcxyf6zAXwfJXox5GaGPDiBVzsjjEQ47iypooj",
  "key23": "3HbPLj511h9GEbmgWoyxRDMaPnu5gDScX51v63V16rrFH69XCGoDmDRqBg67JLXVn4ngzHuHaj7owPuRai34RUhr",
  "key24": "uqy5y3yXUeZDDkrSM4oNfLkkHszCzRi6VqZK1R2xgocM5SCziNNLvHA2BJy4CdBnbKRJufefDMfvBcvAgWBv6jQ"
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
