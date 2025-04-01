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
    "3SvqKHHQw3G9cy8eT1JUsVHEHY1GxoARQuzVgnfgsnSkxaLMsU2rAW9T4wKC8b6XXSb6e6GoJWyGPa5y2pXEDm1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VVFrGPBSrLAdgyxKpgDWYco3wDyCwNcnUkhBrcDNzuvj7MVVNmsRVBNFpM81ABZHisBbQYBCew86BLN1i8B1wEb",
  "key1": "5U3HaUWLMCUmzKxnauaQKcoPvFwDd5rwGPuu8f9fYkDK1eBvibb7idAM32GvU5uZ5ezY2XHADZ2Nv3KymEDycsWB",
  "key2": "5BjrCemoy774fnfLdTicgepW5KtLQHW1vPnvsrhfQFZjT7ERpm3ZEs3avhF33dzMvV33zTzD4w7qgSegbgtbiFY7",
  "key3": "2FF95VcFVAxN7Siej2WL13qdT16Dbe273Kg6DJgmNdYHfvaKtpvcd5fDkcWDnXJM45F8yHNx4F8iioMiUdgxpMEy",
  "key4": "5VdbeWn6dcWoqL2RzE3YrR6cA7gAeySeUjmi4e37amHh4N2UdPP2LgPwAV5h4AwqcNQ2q6fU3ag9qKSme9ARbYQJ",
  "key5": "3pqtMp3k4rM1KkfE76RXPhzNFZen4hvsKhAksumnRjtWkDGT7TQX8LKr82HTJYs2nre2YDQW3SmXdmAK7hxdqADd",
  "key6": "scTFnyfuceawsSGGMDvD1DAbi99VGV9CK4j7JN2fvNML9Ks57x2XSLA2G4CgxAQXgXV1aFDCgyj68cwPLuwy1Pv",
  "key7": "38dayeLjXunbXDiTfEZ6XzXhcgfGfgBbWVkPZdPsVS7LGhfqCzjxWSBfkocGHBk1k7Lptia7M8nmPhv6zQU9z21Q",
  "key8": "2qULanjMfAgpt2tSJs4sGKupccTsPLVJvAyEqLeAa3a3BnSW3WSA6d5z7wDMNAyzwk4cmCArBkvyknPwsRmEzSwD",
  "key9": "4j9SY6nqmQSkBMjdAZqmqtcSgThsb5t96C26NUSDcHuqepnFUNW385Aahng1u973DtU7NZXDy21vUD63SsiS1brh",
  "key10": "32aYPSg1CtbGxt3hgJ8qQafShdWbj8cmHANXsK2vMGvN2inAJHkQp2M6JKGZF5jgFwBeiWFfZsC4L8nVn5YFJTjw",
  "key11": "AmBk5J8P49y2nRwTFogDJqPUGKD6BdAjdCS5PpUgpZE23tXUacHwZLVrJwR4pHAgVoKUaydpi2epJGiRYpp6epU",
  "key12": "xUhNrg4aDUL8LzScriiGiWEmGWbQWHAfqZFEKVKHHFq4bdmWiiXigzWm9ooLzgucDx7p5nWpCvj2VpkTiHMAmsE",
  "key13": "5PTg47ngT28tNyWPtTnmjgzFEW3F6MHpHq7SYjTHHAqSsoVgc44MipFkhRaHDG1RVX2aGdqLe6vNDNV9HESocy9T",
  "key14": "5F3goRSXsycBkizEJvSMr17UK5jqi8ajk4rQbfmvNJpEqqpnoA25E4qVdqsAECsuk7BQfzBMoxErAHsdEVB5QT5e",
  "key15": "uKPBqAqLAbZ26vtVf1P5FB1tu6j8XZCE5M28Y3TpqtbKjcFYYhKnHvpe5NRdVWzNmssxd2i6ZinLB6PsCXiLHfr",
  "key16": "Vutie3Y8osRt9ex3iLxvdnCHdPRfTX1ML2K69UkyCfbBTwZb2oZmDqeZp5qS7m36NR86vbgnwhaWZYF6eXj7YAa",
  "key17": "4ZhSS2MKAw5SW7ezNTwonHpzhf9fysnF2pBU5BuWRW9QG95ptG4kW3xPrcWgDxfQyuTpAAar683inYDHEvfFs43e",
  "key18": "4T7Qv6g5t6EJcmuDETvL4fuDR11Pxg7GwQcTbCh4GevWeFWBFzD738oKEtRmvsSj5fek5JVTniYgwMftXuX7FZ3c",
  "key19": "23J7i4rcBbb2zgMZXBRGpVXDcxMiHs4d8wFMspueR6ZzFL4RKNWE2Gg6eEJD1bSqrXMhm29wJBFq5e38LtFvUQWR",
  "key20": "4enjwYKXXdYUV8jS4mUL8asc8itM8hqayoKaVAfSR7zWccno1ENykvAhwwFWTitHDRZrwiHQrr7rTVtCuTScXywv",
  "key21": "538LqkRrbKY3boFHaifFWr7QBS2shgYxAr6PXtdi9Eqmfh1dhWPkvNvpHr73tD5gJJQ2dXZc53H9V8scde6cK46u",
  "key22": "5wqN9GymFTEYak21ETFLssSUmytZYVBeidx8kNqhfmeVRisKLLbrpWyt7ytdGmBXaHSCFpzT8JsP8reqQZ7xqRTR",
  "key23": "2vxeV3jvPUwpA7Ld4Wsb7kLY6o5AzggzaHJKHmABBQF9hSoif5Zm9RgSZiRearrN3CbNEG35Auqzi9C5oKBBbwCv",
  "key24": "4M4RWKNaGGja4EQ7pBFR3FRKEmcNsEcBoG5dyt1hr6VMCqhmpZR4dYJxCTLM1NjPMhHNjmCoSUYmQA9ezVhAkffu"
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
