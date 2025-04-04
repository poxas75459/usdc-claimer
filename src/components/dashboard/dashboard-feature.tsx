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
    "2bizdHyKjRC5nj7riSBf9ikcdvL7omHvdJCGfrwedohoW6Xrp8Argi4HPgL1Yz7n6pNEs8KUko9mnpVdWMeDmvXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXquFB8GgANYKLQt4cBBsXbxUiU3LisXWiUJT9QenN3EUQoMs4kG9N4YBz3x45WJaAzGcUKzraCnsWCCzRqUJQ",
  "key1": "3Xy8qCMgZXVZwygCV57b846vWkKnr2MieuoTjn18PEtGnKKXMzFoH2KmRqQnySsvS6bKsSdz7ofZfAaq9U7eYmYo",
  "key2": "3nuorgmJiyWuQunbRUZdQzrVdSpSrtRXGzspijG9C9enwtzWZvvVij6P9cqADS8SJMkr1mf1GCNXYksxdt2Px3dB",
  "key3": "2AEaNdETGbGYZWjQwtbbhGFShEnhYL6LJavcuTG9LVbtGL1HHJaBSQA5cM6TV6sdk37LKgRc65oBEaRYEgkz36oH",
  "key4": "2nH4U4rfthLxWaXoKdMbX6kDrHGpdmDYrd1nV5s14CBYSeQp9EdVCiHv6QW6A2rBWgdoNqAdF5qVNxppe6BdcWdM",
  "key5": "29q2BxePZmdxwirEgrWHFXicVENLN3NPMe6eNbW4huCieae5jaFor5ofKYxRS8RowWwovzRsr6L1Q9ZxF6z4EtRg",
  "key6": "3x16v35N91DfDPAW2FCGRsf9hxuKwBwEfFFbB5fJjTBpHD4MP3K5e5H5NpNMKHeir6gUN6VfKLVJsq3tMuuHw9rw",
  "key7": "61ns3YEwuZYAhanuVzxkCGdAFknuN11nahWtmx3t5pefxJSYC5bG8mwNoVBHiVa2wsuVyg6LPp2aHdtLW7a1NFR9",
  "key8": "wmgCy78547PAbC7Ud4GYEP9FnPvd3tMyZoBq7obsGXFSvR1vHuBKvn23arzpzvJyf1XwTdCbmVHhfM3vQKmCBPj",
  "key9": "3RctKhQTEECjR2MNgn1EZVY9ywhEmbZbH8mHioErAturJgJJcQxtpVt3icxMhE9E3GkvTq9aRB9D2d13GSgBt613",
  "key10": "5MuR66Jg1mcHJ5DZkU7FdyPjhvdCJqvnHJfGkT2wN3gkJprJd2SLDuuQadCMft4wkE18ZgsmrKvq5XNFzCbw5oWF",
  "key11": "2ZBS3Jm2TLvZhV8eWMRo36qUtznGXFSGNtBNxJm1Pv8CH8AwkKQpSHUW8UFiWGQLP24rvHVtZNdmTUFthfexzPGf",
  "key12": "3sVoGhXPgG29zo1rf7bPdExSKGhr9hKyaVtdTDYioYmfQ1Vq6Gk8T4sC2Puf7kw9BLfHicPsuwuedr32NrmxpFLT",
  "key13": "4BKkTfzfP47epGE2AH4QcRTkHdZRdoTpdYfzjweE6Ce69Z6qGKqpRAUqmBtPBj98BajLHkXZXqj2YmcLmZjVMf4G",
  "key14": "3QAwAiqYKVpW7oJHVRv6yaU4Pdq2XqMmqRcGFNpQABpEMszKCLrkGzUnDsKnqzzvYoNw1YdGJbB1m6zwxN734RZt",
  "key15": "5mGsuvRk3ShBchRejC61MemGLwAUpCcY1d4vAdH7tAyoEjmLJTCFMyJi5Yq3pw2s7cZ8L3jHnVK9Hoz8UoCzJKsa",
  "key16": "4KYj91VBRyD8ZqKDegpGi6nRKQXEv7P3tFYw4EdoHGT44g2wq3N77VDe17QcSun4QeUs2bmzRVCNYvWVCupwF18u",
  "key17": "CvAuNcz1QoJdtiT58SPap5mTUcCqZymKeoXLoiizj7AhnSBKcc9jAGhMniat8Fcd9UwQNzsz5xgywTU6hzYojVg",
  "key18": "45tkC17zP7B1oAVDSQ17jXRkWk8dFTor8QvyvkaBiTJS7PNRYYTBjRHKSAABxDTKHNv546uzwqSVhwqjmugDafZn",
  "key19": "3MzUgKhoDdGmBgXNB4knDHMLeXmLZD7KThDkYqmZAgaUn7xeyoDBxf5mA7N6R9BTfGyFvHcY1eaXQZF6RkUYPSPa",
  "key20": "vt9PCk6HxHAHNY1UGobAnGbGFdw4hNYcuDJgE8a4RmpEkVC4a6RBYAJALqTgAukZiTbotFjLSKu9PLnPmXNw3VW",
  "key21": "4fSDQmy9hDj35GLC2gUB5HKMS5GTrEzoAYtGLEeUW9dfiB3gS6MZCvo6118rxBdJE4CXpdYkLMa3NgmrBQiVLVXk",
  "key22": "47xepoKPX6aCtFpzpHjWjzBDptHFvuKHsJZs7iF72zyyWHMBwmogbFRA7zUNDxZgFerMw764wVZYru68fXzWYCXB",
  "key23": "5FzSMfZFrEWSnE1qJnWaewLK46c7WuQbkUZzP71ckfFGdp7YDzJ5EQQAs71gvW86CZHpMagdWQA3oSejroP1efTt",
  "key24": "5nGFgiqHoqMXn7VGv9cHV8WPM583wWFjZ9tNd272z2N8Johndf3cJaAXcUYejPT8HHtvK3EUXhfmp98pqyA1iPc2",
  "key25": "42H4dBC6PGbkXTQArnR9QA5kH1mZgPLLUvSyfDoG15oJjwTUMm6BQYiHxFbZahrnhKDq6qzGhdgv576K4Ny2t932",
  "key26": "23qin6JSQxKqfX4Sxu3TBL6dQDWTNuj116FDASgbywssYL9zVxr5aejDTCuQVZg9DS8y3BzzcjAi5YGturMboVTC",
  "key27": "2idtpBYmsKaRx1C9Af3ab1foRwjpuMivsQqaqtEDnRdkMFJfb5EuSbaJLzAaZoPdYvZm4FUprtEXAyN8jW4VPf6m"
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
