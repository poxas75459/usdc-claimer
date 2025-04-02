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
    "3uUh8Rdn1faZbCXDTtTD9sJDgcDLPTomBPGLiRGx98s8QDPU8SwdKaTvLyJUo7b4PdFWnVq2gnvZb56T9YgzSkTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JFwW8CpLGzmVdH35bew2x1eyhNJfKsJu2iaeHJXpjKK2qws7dXDtSkBkCJw86riWe3jA8bYKrspDBoeytdAy6f",
  "key1": "8d7zRWHtZ1MF6ucvLqufVtWDhzWfLmikfzwH2fyYkPyDB71SpCr8jqe2ygxTy6vvPdbm9fTyEQgXgoC7CmRotGg",
  "key2": "4jSPHQe48xo1ij2VF5TFVjysmqfJG5RGJJNEjw2nfMD9Vzq39Pk6fBmNjnUmApuRspvVzE7whmy3x4hnLvkzAi3e",
  "key3": "4WyQ4uB1dtpG27z6t1DhPdJprusihCDo9zEbYgGKM8w8NAUiURmdib6nTvyU7YtnLTF6FzccfhXqkqxrpRcoByRe",
  "key4": "5t5fYR6PNc5YqvML4GFbeLZzn56PpfWL4nSDLKuf75Lh3fdv1YcEKtHjQhHAgwCqWWQuxGbEuVzyrWSxjsr3cQH6",
  "key5": "3DbmGsbNBkYVTExSX2apnoLEN3Np3bRDR2WNx6fZMvWTp35AB4vas6UNcsvvH7MKA8MaW4iEEWyeAyRP4uwNjVNK",
  "key6": "33MpXbKtAouWZrYuW8MAyWboXdeRcCkiZfsJoYUCPDanA68vMYiWgaGvhUrRoRc2qgtqw9xa3UeSV6awsmkvmC7z",
  "key7": "4nr49AaboEGxJwgjpiLNMZ4V357G9Ret24kYddXCTPKWqBMK1j581ksqreN2gwRBSiRkv2eZGfb6aF9ArxCwaeYe",
  "key8": "T2t71FwaErdwqp5BRsv4FZXwd48PNiXDGRoCGvL4xsYhSEoDFaWP8MarMi2ytHTb77gUn1adSDFTXi7pNw5qZy6",
  "key9": "21Rb1Yzcuo82YeMFAS7WNHXn3ugwgeEiEkrVqQoJfpZqiKH3XADXRSew7waAT4KpnCShwrV7rV4VbhxejNs8LoDn",
  "key10": "2LiGWctuLfdUPpqiQBbMe43KKdiFHoB7RvY6VRWqaAjowmKgRZzwfSPm6sEB1prhfFQpV99oeLsbxZB6zSoTweku",
  "key11": "Hfx44PMEXs6K4jFXTaUnh24y8mikxsjFW9gbsdCGVfkWUUYJcycLtRJJUcdokrj2oJJYLsNwy4SnNebreBjHD7s",
  "key12": "4hAMaHRTquWZXeKTZtFvS2pyTvn7kYEYJKU2S1XSVg3UcRRPErMQygYAeZzX9o3Gqo7DRFcS443SCXyYCHRVueir",
  "key13": "c5ve2k26zRX2h2cYopajSJwJ4bfvYM6ZegqJchUABxAKz6zXPiVtyVmXdhuUStJsTYrkzYX72n6DrwZP7NVAW9o",
  "key14": "2wfkzzeFYkYmpN4ykWpfK3Bvxwd6yexxtypTd8R1mvNrqzrPhoZjnejj5o81CHb6wJsvnRioSrvU7L2NUz4K7V2S",
  "key15": "5ykJEt8TX6QmEL3k4EEuMPkCov7ox5Fev1DWRRTUrzrnuPwhWi3sdaweKERaQmyf3g2aUoXrPLH2ckkGW2bNCLAv",
  "key16": "5NCNifRJ8wEAuW1FtjES8G9nU29GgSvVgfknztRPnLgtjrUWSViDZbGcovTvRQE2kFL2wRvjCexYbid1jNdbLReH",
  "key17": "3qz4aas3qrXVVC1PymoAKitS3Q7uBbgQiKmyCg925VLdFGPckYkJxVR3jHSUt57aywtb1nYEheE1y3fxZma59Bkh",
  "key18": "4FHHBe7e3ZSoYeqTywQmAp8V57AniYMXMrkxLostaLsM1YzzXyTgMutgJRjpxZY3HqoiHKKD9yd4hPCs2WZtERCt",
  "key19": "JdUt8vsag1Zs2cfqWrpsgcUPWBy5okgZg4f9DMJc5KmXv2ksxXHqFbSBCKoCHHYRhZn2bK8TPb1j7U4JBei9Env",
  "key20": "2RsUGemcQRJZnxv17PBRCD9rTHbVvMnAv5uGjya7tVfraqmqWbgCzAahY2nG9b7dTk9ebg1SejxrVpQhTeKjZuDU",
  "key21": "2g8qPeTmAbA8M8JPPD2HtHdHfpuUwM7XHn9ewjkpyLPhmk4VUmsVjDLLEgHaJVSnzwg588nWqfV6i2zzzKNjCm5Q",
  "key22": "4YBXkvcZiHkvg5xu7KC9qEyPf6QFUS5SZMriuaSz37Vb2g8yh6j7wHLkDGKdnqwuW6QijkqU6BGtVWa5ejwoK42d",
  "key23": "4nVAbiihKs7EtpgPjF8ce4r15459VtHAxHexYf8a8DtcqnrQzLHrKDQvtz9Xq4e9NmefKma3nopow5pdSZocHUUx",
  "key24": "5mwkx1CVFdPadkEDQ8ZEnN3st95nWEmKTobZ9hHUeeJga6LSSnsipE1QRJ25ZZ66nzx9gwu6dxPmh2BPmLnN15ae",
  "key25": "4QP768q1533ngCUKoTuDUXoG7hYM1GLj6z68bFxNxxmiZjLGjveV4DLuocZ1xNPejkz1oGYE8XwCPVFw8XuTEePz",
  "key26": "2ZUKCAWaXE56s3acL2Tf5vM3hjghxFWMfVGKvxXvKtBWopqgdDwBpwrumiWs2f9X7tFB8jc4KnNkDrHpKcoJTF2w",
  "key27": "jSGnkkUt5Y7Dnvj6rBLCetu22wCzoCGSLEvGPWct5HK4sECDCTeJoefjNvbEgSkyzAzSZ9Sq3meTZZspMiwqYAj"
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
