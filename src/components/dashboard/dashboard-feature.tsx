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
    "4SY2cZFtYGV9AswoWjW62gTeEeKgCEnhvmJjLXWwif8kx7rjRW47QzXMRtmtSigELZmbq9K8ktKaLDJxi2HDSF8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sExhzQcbHa1J1Ryoig3F4jYPjFMQgz2vzPBLTSEK6Ww3ybKdwWiD2V3s4ottdFPXDbZiPxx9iouzcQbt5acd8Po",
  "key1": "5BRSRvV3wnyVet4vrXarRaWmYEcN3ixeKRLiScw9VMkiSriqKh7zAYMBLxrzF4ccfjcZxQ3scDv3dhtZ3fXxmnG3",
  "key2": "31h1eiZQ7dmQsAdUrjfj4bphvY27bdY7EUDGAebaeX3AjyxL5Bx3kDxQEokz9x7uQii87sGXAKMKisrR7MbKoyxd",
  "key3": "3ZKzqiyjSiamXmmJ2TQUKQviywfoBQvUKTEKqhEyY7Lu41wxuBAhiH5CQHf2oXQBdt5Gwem4GU4eLkPncb8D57Rj",
  "key4": "5h6prr7cY6YTCRnA4k1RvAfbARHixTxecd8NeUJJ9gaN73LLgLSt62CTf3FU6qZE6UQcUKuy4iXCSTtRD7HhSyJT",
  "key5": "x1DPW6T9FEaXKcYQkGyJBUfj1BB9Xn4TWt42T3PBc9Ar8UjGERFDD3PLfycXMQxEBG6BnGEAZwFvzHUQYskYDbF",
  "key6": "2RtDnhoGMYpNgaTd9SUv2AE6YLTPe9drebD1qsi3d8yX5mmpgeaAHQ6kAUh5GdAHEiecq8K4o6YDHGujkSf6nGc6",
  "key7": "4YvHu65d8Ay8ckSTT2QXjqFxgo23hF3iLiG8yAaozjofs32ss9by7mdLi9HaMdADZLPUcyAnSdePxeMzax1p6oyg",
  "key8": "4x4q6hqyn7h8eeYtXHyG1nxK7LqFqCGsH1kuBAkkj41Q6kJwDRgBEnUMyYXZ4Yrv521msEYjSSmdomTMEPFgGgUL",
  "key9": "9L96bAnB6bGpfrfBvLiQM5aqwc3HYeJNw58piRA5JAxer4cy1CDSsnB5KDkjPrnWAC162zxMU1u3HHGDVU5vhG9",
  "key10": "5dudLdsnRfXCcdt4Wgw4HQU92Z8Qt92nPgjgBf9dCBEsDkxNXvSU9VparwB5b7aKfp6RuYgtXRDsKJqHeFvY6vXD",
  "key11": "FU7B5Ejd1vYutoWjcA7NFokHcm9ogWo2imyauh35FFfvENqEADgvzn6t8xf358zxMxrP47gFMbtr5fS9Nse2mjj",
  "key12": "dTQAMjVD5JaUB6NxVvLympm41bTinedyTXNto2qkt6FRyMUZEFhf9TQdoS6FRKY2qveuyZYGytVrEBW4YeBZS3d",
  "key13": "5NmVYjjokLDwdM6UMyFjPqA5pXABegvE2dTM6bXL1iZsKa1r9Ncn1MNZNMjbkSy1Kko4A4qz4sAUzh4sxtmPmNK5",
  "key14": "5e9MDXtmiRgNfHJdHTVxAHkAPg729MYKswDnifVFzW7MWZ493NGLnCr3orfghP8XTrnF5AMLuiJN8aUXkU7G2wwk",
  "key15": "ZUjf9fUvc6viyoaW48nVNCctFEDwSECy7iZxdMefdxBuiViyaczAyKRfmVpCaLpm6jEP32VNGQUxq2mQE6XZ1xM",
  "key16": "23yDBVRcCgHvsQuz3hRVMHNFCfxJLRw6E9JyMK1sLuRSP9NpZZjUTKurTurpGjkWbyKb2cxVnnQc9qX7WVBEViyS",
  "key17": "3nG4seZTkfg5qBV5Pmxmhva6TMKYeghuesi4mSH8wX1HQ1UMmVJwaTiLM4ZzQBNag7uKxrriWnT8kspcF7iLFabt",
  "key18": "56v7NysVqFveuMxvGpngLbUqgu377Rthcr74u6ne9x5NNm58o1Px9bGCEkHeMDQkiLoo3umRKKDKGKHnGqYuBSA2",
  "key19": "2ny7LH2m3CcHbXHESm2sqvtT8nxeECAWT81vmG5DpWkVUGGTKwUExhTz2hdcHxTtD1hxRg3uLxas2G9biRSwd9oM",
  "key20": "47zMFCvq6im8paCBqadmyN4eC4cNV2iW9wawZGetS12ghaN363bV5rWx3D45nSeCgrgFqfvmih5YxM8xxncBabnx",
  "key21": "3puuzLqaDdWMT1AMVj8hMsMmNRcim4fRFP9VGsdnrpEKugu4DD7ENZN8LNVHfVfUQPoH2iH9j3BNtNZ9kbLtfZZj",
  "key22": "zRjEmAhgH3F3G6BxtgeTPeUeY6YgWkkS7Tbfh3Abo71c4EzE24uswWvHZyHaFBBABHVyN2NCh14oUV1KF4LjTnL",
  "key23": "45XsQB51tgLgeukTmWkptG3VKEZATz4VTWuq2m3Fw951JCPDGkEU2obQyXKE52aeYykidvdg6JvzenySjJrGdv2p",
  "key24": "52TXDK3K5Vbb2WB44nq2hzihp4gDEhNPdGMSrWDiQt6Q2ZhMrF1tvVsW1Li6eXF9FS5fKTHXPBzn2XKDerWEXks5"
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
