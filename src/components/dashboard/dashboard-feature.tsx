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
    "3bhFifdVQDjFhErgQ28rqgFPYruWMiZHvhe38Js9PfBu4i6oyDLjYC8GXuTFFgeDBbCm2npZckXmbRPupvYnVPsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmSYF8cDWsyDFb12cMZ9pUvW6dRg3KBQqbVnofqdXV57viDECjjWUvWKDyGybbcmF7GzauFNjL3cbevF1BR6x48",
  "key1": "TR5NeTrYdaneiLCeEE1D852TgLSAfudQQoqJfwdnSshmPU9b5kTJ4cdeobwe9QdHRGtjVU2FqdGTFCf9GJ2y4Ua",
  "key2": "4EgJBDPDaSqZEABgWUxdQ6UHA2VaJBUdc9te4gaj6w9yML1QZ6qAFrpq5D1tvAeVs2iAGWkKsX8VDVPKCHDpdK6T",
  "key3": "67q4ceYdVFDARhiUsP3hptuwgEmQZxwc7CGoo5f8baUhMRgRQQXmMBzULS6snQhSsGcT8frk7dh84YC8junhyo7y",
  "key4": "2ZnsvyrHazWZue3S1FS7acEKinp8vz5WvqKLSRVQAXgg2ktEw67mpcokSg6Fu7AMR7SANj1q1AqCoE1EnWg4AfJP",
  "key5": "3P3YpPRQXCR8BXTKTD4BsfUEU7ieJ5TL3WnMkZoezVfFnfDg9jH33jJWD81j7AAP1H6MUZ36EQ8TKubQyuLEX3Mh",
  "key6": "5crXcGrkQpJKAhJ47EV1xnCrDcVFpyMD5owGi743sWLtRpAr1FdBB1URgMrZjwBBE8D1hAHkWht3ctLsyEzTkJt9",
  "key7": "At7nXMHSnQ4CscrV9iv3v6h3d6bFUuUVFRyGnDy1foCknHqt8hpCXqAYSEiMduJP2ggPLLftpzCfnx1jrguTFnG",
  "key8": "4peuzerRoKKJNXj3r7ULzaqa3mvJSWEAYs96XC16cGf3PVyc6ppYW5sMBRDVYDdpmVij52shwwAnXZm5XcPDbkNy",
  "key9": "3xiy78HgsHZyfG9LuLEGhkZXek2KiTwUGPZQs8JyM9R1cSgRkegQQYckf5QhjqmUwsraH4vWRJy4csqGLWL19tKk",
  "key10": "4p2LBe3ZV6BKda9aqQy9rjL625RvhPeMSLQ6Ejn5fV46vqohSngpLniiDu56L9LX7kKiKZBYkXGiLhrq468Haa7z",
  "key11": "3Q5yLGfRH3RGRh2snr6VXwsC1LG7w6sRx6A3xytepJnV61AsgkHd4kz4oT5NoMFDUoT1WMeDrmvLiDSqtZeyk2rR",
  "key12": "5VP2xquM9xcspNDTXkQhxSkhnqXJbuGKMFMmwBp8Py1Sk4L4Y8DPxJayQ9GdJ1ETpJYLy1xdtidW5n2ioXNqqDYq",
  "key13": "2kiXWCdhWJ9eG5LECuTP1izz5XoAMhcD2ZfUXc9FC4iiDhUodYiSoFz9YLjMoAgRgjrXNowb1EA5xKmXd6nMm4H8",
  "key14": "5s5dmwfjL6s7dSKnf26qzzMb5wUS8Fs9TjHjW9x228tnVXMwN9xfPamx46bUuPnpYWYncUmrW6iPjX8sAPEyYtEU",
  "key15": "5MMCRkVi7JnapeRCD4Z4az3Q1b6Va3bWN365xcwBHv3DasxtoBveVXurrP694KsTCFTA38tZw14xFf3EPbbhyatH",
  "key16": "67hJYp7PijBwPwRmGLuyCF2sqeHE9mbjGoVAo2E5VvL93dnP1kW7QgPb4nKDim4TTrhiTtB7sDwwVAVXGtYvkfSX",
  "key17": "65a97gMk7cgkGCuuL2KKFag5TU2JqHsU1VRYr6jSFdzZ1zMaMB45kQdLGPaVcWnFzmrpCMSVkcr3Vjzs4kjgeiMi",
  "key18": "4b4she8n6BE3yKGR8uyjKwD7vU721APcKuqiepjgAckGx5st9LYfiHMrTZZyaVs7M9w3LJmiozkXWZNrV3TxNF4p",
  "key19": "4SJpqLvY9S8WiTgvhyTqZ7BU6oGg9WANcXfJfpuL8eS1HNA6QGr51Vfws4F4ARGKWcMCz2xaN6b5G1Us4BGvY7uN",
  "key20": "37GKJbz5xZFoDEb65z2YC1YGB6gipBdSNVuNgecz1wLakKrTLFWP6vyx17YMEzo39dgaoQaJyjXQgRErVNRqi4u4",
  "key21": "2cxzUtJChedTit3Ctsmi9gt9n23JJoLcjSFU5gbpynANkfEEXX4Ma4CYxPgMM7voxootMKVg9cBTtbAVxquwET6Q",
  "key22": "SFywvL38fXhs7SDorheM8FYE2LU4YBRd1RdURy4tSy2C4t7CkY2P89zsdCxfgeC4gDjBvK9WGFp36zQvNdCc649",
  "key23": "51d5TNL1LXf796LbdPGfEoYe6BtVLxpNywuG4Z8QL9c1ibat3Wmdbqy3HwwwPgPi8jg8FKtQHZ4A38jWLh9c8ysR",
  "key24": "4LffQfKAAchXD9HLVLooSdJXJzTKVSRencY8r4M1NdHdLDSa3i8Pj3GrSyZ6QQXiUwWVNYsvxmZrLfn3mXHHtMf6",
  "key25": "3yVeDE4RfTLpVRyqKtUE7HEjUm8S2CFE36k1gemWnm2aibHte2ATQ7qhQfXjXTFUmrQcnB7wGKkqrTQkN2YYQy7G",
  "key26": "3NvzUkEP8fKnzmPVbJm5pJMxG29DsimiK46Z2ySLgbd3JdY7882rXPZ2szzjkfMx9z2QLrQ6TF4SJFAg1Lx8dsGf",
  "key27": "5qgw6R5PLFqdsci3uxcV51XZep3Zf5LLnsvTVijuqdt3WJyWLcRgYuuRnmXuBH7yCcv7A4DA7RVtfBNcC2XHxXXT"
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
