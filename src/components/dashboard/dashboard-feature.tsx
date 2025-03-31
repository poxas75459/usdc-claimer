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
    "5Q43F5BspCa54f6J28GQxZfB5Cb7Z1WvSf1Nf4PcJsH19MHGkCDjp4Ht2M9JdZaPTysS74LLKcznEVQijrwmdRn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9qQm6DL3S6PGJgmv22UHenR5VvftYhixdN68Kb1YcxHYxK9Hx5kmK4eXncDfsF2uZ6Fk7LRgeMjA6TFGHY81CEG",
  "key1": "4LFim6vKB2FRxaztkDHiFvAZ6YjZMiNrkZLXi4Zg4WH4gMjxPUjnwCTCbRzMiPMVppPkdN2QWc1jAdhXMj4eUsP7",
  "key2": "RT5aeeAiX9UCGKoLDFuj3HW4AYvxTLAFg1RYiTw7dQbdYfqqeiX4BcvfpFQtgA6c2tz8J5kJJjgir3vumDyqee9",
  "key3": "5UJ1J3ae896dZkG5DF2Nr41yNQenp1buTkpbS3bb7YmszWPCYpvFndjwtczVy1MRnbo8Qoft7opFXQF8qAswoxtN",
  "key4": "4fd9msYLEv615emskz2Sen5AigfND4V6tHSQ1SSgDJvCeq7UTu74gjARiygpfQF36oWBAwDCtELrt5FFKaEZUhzg",
  "key5": "3YSPPm9TM46ysRYFbXpdyGsH1iG4rRd48FfyA2e4DoxkMSb77nBNGfRXrHkY7TUfB98QPEUji6875eFr17BFjjQH",
  "key6": "2owSh1cLrtZ5d1QEoLH2qHPAsXNKmGY2AdJeiTz47YPs1saU4HjoReYVxb5QwENBZe77j1VKFTfaLQeCvLC3ynFo",
  "key7": "2cndszvMhnnxnoqm16Lzc8SX6e2ykMFsU7pC42VQgdrRnZRX3s11YFYnjFvQv3APWPeEkWAJySs8A4GF9rdbRrPv",
  "key8": "3Huevr2wsdvdVJjRSzRfYQxahyRpjhmLkjGtBPQqJY7QrApzKLGrQRZ8cedtMbnyeNgzi46eHTCpkoeEKgYgVoC5",
  "key9": "49nykXiMQbKGP6pPnnQQfh4Wkw6Nu1RqrUkSTXhHySe3UafS1dNfbSct58Tvhn1DED3QutccaCmrsHaTrUpVFgLy",
  "key10": "2DF11d6BaJq7nvr8QTM5jEBkxQ2byv6thcS7BS4CUnx7nVHFwngYVHwuzdgMu6FAZmwcZV5fCxMmoVWFBqkrLAeC",
  "key11": "5193ac34Y68SZ4jEmm8jLoqsLxLmpPsAC9Hvok71xR7vGsmnmHJjagY7u2vvHVebUNZLg5xwvb9XrYZpNa4GUYku",
  "key12": "3Cw9erfvEysKK4LLmwawt9aa57ZcKGkgo7NJAq3W991Fxmmwnb7FYrsSoAeHZo3LgHHEQoF67BdQ7oAMrCjbcvBv",
  "key13": "MzpGDjjRQvXAnCaMHo5skKXcpMwzTd3yJAqb88wYy7fhhVRW6ZtU665eG8Lc1oiDkXtaDXJhnKsgWZHYCFVvndS",
  "key14": "5Q4uSYCZ7ALPnwKGkXmNvxVFnyTyUi1n1g3BzeChDqZnrdxmZa5cz4fHDkgKDmZR5mcpUtZGvzKts3r53A993Ygb",
  "key15": "2nAWDbp6tfdKqikgLCiV5weez8y1qBWKx9DjLeEuAXJ4mW5tbPhWmGG2oCuwoorLXSkzevb4vcZMK6mRxPYk88Zj",
  "key16": "4cfm5qUVaDEofvLztmcdvpin8xzRe5msUP4qftFmTc5VGGAh94H5mpYywxsnsRAkwqxcMUKzmDsbKy89VSvfmsfg",
  "key17": "3pS745qdiXhM8ao8ezF3WSHvtHhiDeWCVg9Y7e4xfbUPHgZvDVgCtsoRhUXBpRr2o28PXRfyHHCb7B9GJRi8emmW",
  "key18": "4eoiLKn2D1GS8Y2t3jky7M6dXs1F4a3kPtipSprZjkrX8vUwyrnQ8iNCrcNBxGqG2pQF4sguxHPHY4672oL7gV3y",
  "key19": "5WQC1KDxbAXsRBQM4cKvcbfSHjiRq8jpKMNceo5k7SKzUiwRHkBDgnvYXCfoNHphc8kEJ4cT1nfAsu2Xsp5XJBNL",
  "key20": "3LUJcJLjkfvRHoisudpvwCntVWDVUnYYfxUTLm2wwAxRssmTzsdaijZvTcGik31GcoNh92VnfXd7ggbqNRS6Qo5F",
  "key21": "5jRi1sCBPLnEW5epLCqpPES3Q6anXJUksJUAj17yghzjftUVHKevubnEDGGidJY3ZAFdjcWEuygkQVRaSukSdeUw",
  "key22": "2eSR6XnTxtdosnLL5NDf5X8twe8wn6phQ3VNGKKJ6J6zqLjAXfK1DaV51bMiTZxoUEpcQxVswiudJgE4U3n7SoPr",
  "key23": "NLYu1jAB5ooS7ACKpdgPESmvpCrNVF35rmzqgdzisKAWtGnb9nncEL1rjJNMjvJ3f6SMewkvWjDw6iML9Nx7ziZ",
  "key24": "4AD5SiVz4pBoB2wjdymC3o8fH6a8we5E742UzKfzNGszyxSZmy66qmSjXDQ1sjHnwPxMPaJgYVQ3mPRNudbWVFAx",
  "key25": "2bCwAdmGmq4U9ppkmMVc7xv9ezcCrUjNeQZCaCETASU22viRrHqHseM6Nd8xFXfUYbURJN5dyRDrsxein9yBpbfY",
  "key26": "ajRpvRh4hS27RyceYVfnk21NY7LpruZ6MSP5jg4DPB4Qhwzs8gRwTbakNghddmcjEcZbcmthwzkYqgimZ9UiNfk",
  "key27": "21MiBk9oYEfBPK2NgfkNhbuSY6WJ9y92ZaFYiSM1nVGwUqQCfL6LvfYBb54Aahu5XZifAgjGJAot2J6zQnCGUC2F",
  "key28": "3HLHv3RMSG4uga1aBRpkaYisvxhQbLzJ8jAT8XYDFuUKgfgshTghbuwv2HFX6qoB1hTrUPXezWgeTRAwkvHVZenQ"
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
