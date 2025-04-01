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
    "299LTMWjF89a6gmrSZWeM5ruKB67aPTUxt7YfXpvbnrhAsnYMHg42VjJ9wvBoZmDYvvqtrx1cYXYJugU7WY4esUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpoKd56JoXwyTZxgNy5nMKqENBf2pLGgWHHWHcVt2FrzrVFuZvfmDErNwGW7kH5KnwTAxqz8tXFRg4CuqKHKVjZ",
  "key1": "522QHfi7wUEHvcmpRhLXWG4gcD74wwtFvLJr67jebWPtTDUeS5i4GpS3rSGHASs6EsxawqJcgbS1QWvuPQLXYAtM",
  "key2": "5sDAkUs2uwZ24stmpAauSaT17Mx6CbtMuqahdx35UEzHUpdDXQFAt5yi4zNhkAtGsh9UxGz8XMgCtczY8DvTXN44",
  "key3": "nP8rAgG6MTEGFWpv7LnahwByrT7qwaeQ3f9SrCUYk6vVRkERUrqqqpjELcaotxGVeBF7gVmHuv8Ro3wAW1kDa2w",
  "key4": "3xgH4gdnTZjjNNTSK1WQfbXPpLJq5RRr2SB47ATTzSWNpMrMu24tHB4gLip3RTtNGLN8zKY7tnudQbTgtaWFCDRD",
  "key5": "2buKaKPSxDHVcWNFVtapqduUdYVUuafMEjVdYwtBY1UCohsXNdd3ko1tE7TH9P89XHVDs8X6JoZB3qYUNEJGVUdm",
  "key6": "2FhZABoBCeDgL2q2rBWg6j2K5pJ15viWoW9KvAVLo25p9jhuSP3pDky1cuds5ZduivQ6oEMy4uG2mGnMXKApvxom",
  "key7": "42CJQhG3r7VAx8o1TgzkeqAGnTG5sBJtPXABq5PoVWwGffjGNzjqyQog7qdvz7TXWisTN2eNDHqGiWBb894TrEPY",
  "key8": "34W3G6RTxwQadyFGLiaW4EKwHWLHoy823qfbSyWKML6tV7tWP8rBXWDTkQJGHvUmvi425MnbEFy1MqyiZiHL1XJJ",
  "key9": "2WgYMTJD8DRoNAvrnjEkVcqJHmK3u2Bt6Ae2s3xfuyifPUodv14K6uCz2bJ65Ap5iyhHN93w29yZBHSQx3rXZttf",
  "key10": "26i8PZKrvx3RjtjH3B1nxMDuMtrz8t1m4tMNByD87zrLoyVTcFaDtMmXY8LehD7xxQaHMEn4icW1Fjs3A6xgQUq4",
  "key11": "2EUBhPkGh1jJt9EG2uznq3egsmaQtpPmW11Pi7rDLHNroSS65RhGhwrPXSVJ5w8igY9wkKMCYNepgc83b9joiYoS",
  "key12": "2vbcFtjEMyWoZ9nz6DQothb57KV3UoLzUUjq7Zsb6gLnptWjdJe2hTzovQCrq1k1BHegc22NN6qeaBxfGwx5Zjc6",
  "key13": "3DCG6NAoQGpPhjcqScQ2iwzrr8PB31QJDzaq4fBEAyX5THe9breWe2GQFLCc3s2m9gu2Er9yo1jpZXU9RzMqdCjA",
  "key14": "4DRAMMRUTtAY5BqBREAuMfmpxNDxS67pCCuuhqqYNP2UeE5J68dAUZg8UkME4RsBBJtm5oSS9H4ohiV2wBs2o38v",
  "key15": "3mTnhDnpMZcfY4aCoLf31iPKR4QmFSqZZQVKcL9tCHNQzGjZhQjrJh76UtTCdGoXbMMpyM18H1kBXRTEx5MUwB5P",
  "key16": "8Vkk6ax9Vmmv9xnFQRdATCvMBSW4cRdUTzciSHhrBTntvFchEvLEuJXoLNZ83xCJTLbwkg2cb1VBLEGhXm1jTDy",
  "key17": "5y5ZgF6pDyHBkzLv96DcBnYMxRKp7Fb3fmqMFUpCfLjGSZWpdENjUorxZ7f6iTWNQbpEraN9qPKutUpi6wwavb1A",
  "key18": "4AkEEUpJchNLx32qHGhSumPq39t9U2mfFTc1yaGjymPMk7fCRvxxtQ2dNbA2TgETdyxgb2yc4YuxKH5uMRNjvEHY",
  "key19": "63np73F4ocTsYSYGqtnvSQp8KSGNfMrXTvekHbB5yj5ucYy2ctSBCSJkLH6iFdskS7n7FRCWY11StTamKMEVQtDN",
  "key20": "2n7vDuDyuR6tgdaHc5AU3G58dB5pJsn1tSLtu9eqdEoSzzFwJoW8ZmrR74srzHDRJpj6J2hjogj1t1KL8GUxRRjS",
  "key21": "5hfC9mdWbZYxjVkRS1qvHaTBS9Tdwvg9gFPp1Kqopeq8xRhbVCE6bLCY3kXiCJrzHWJTsC6eYj1i65Zx8HCK3DLe",
  "key22": "4rgehEoT1SUXXNBh1Cf62P3HZe8BEh6ajC5whFP1VD9VZAfPEFsnhCY8eeT6arzvSgveLoPG974EusC2dzEo5B1q",
  "key23": "4vbpXTcGPRVjMNWfnt7yRPBuWXAEpc3ZkFavbNgi8y7n57F3xRVrctpf7hKMJC3g6H96tj63mXVxcCL8q8W7haGP",
  "key24": "5uw33zyoVL7ap2jatJYG8DYq5atbGUP2cYsVerWtxFzHPo7DQrdq9jLUDSByhgc7tDZv3XRQWvugSNvbw9PjjuZs"
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
