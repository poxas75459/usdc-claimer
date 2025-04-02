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
    "5xMyhnaKTyvf8X5qscFxViYTubULP12GtmbP2y5f119dF2pZpQWUGPPhxBP2FjFzHkqQqDnjmM8AXweKcrJ8CVwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKas61qK5bzY4ApievVRWARmV2K3KYqDHDAD53cKfVn8KosMqWBi9t3hajWSX3xewG45Se5fszEBgNzvTfZqzoJ",
  "key1": "2E6NitK32KdRa6rYjFxgqgFDaBn4T47ibdzjTJZnNAkhDdJq6dTN7dwENCMDcJ35s25u843Zrwvj6MsBCuLM3dbb",
  "key2": "5inPuCRAPnAAdLA9Sji9Sx8pUMU8DxyDyofA3hCj3DzgKiUL2Fx2fBPJChGQYigGdtPXkNsF2MSGG3z6z23ELtVD",
  "key3": "2GnGJSjhrqbKjBfHNmacNeS4okpCLpNjZwuAN6CgzdhGtEmEDw7TuvrFmebdcxPKMT7CuvJi1rpeYqjHKbEqzsp5",
  "key4": "3aCrY3bmQwkQKieCrka8o6pReXn8bBEZLRaFi6MkE6vrgoEBjUPp1XuaewQVSVTM56Vnbs4FwmgVWt6WVJmaVhgB",
  "key5": "4yUyfZtYsJYAUnnRfhrMGWcWWTGxSV9dLjSGUy1ey6SVETTaSov3XRimBqPoni4jFWBVvTGD1QLgGt87JS8an4qo",
  "key6": "3Yudag1BnnhDSEi1wouqG4b1yqkKbmZNmt2pwaHQw9e2zy8aR6Zzoz5cqK6jF9ZAK9rGne3FYPKs7XU3GmzRgFed",
  "key7": "3QQjno1FjDTyoMxH2Qq4oAPYhETLtwLm923yTypKgBVcRwuAYbdfAptTkbaho3qx68JNh3R8cZnJEG1g8pVmkByi",
  "key8": "66hTT5vNPu8aZku76p2SZSbULFVeMYfgMqid7VAeYNnHaUEt5jth7H88xi31bkWc2AsTidzuXKq3DSxxAjUb5a8R",
  "key9": "pGh8hEbpBAYW62cxvFGpcbMwrZFt1MWbAtC3ivzbwARsqTk4Xq9DXMvoHQsRpnS11dAh51PaUx5VXGwhNVogb7x",
  "key10": "23DzMxdsVGNFZA7g7Ge8sGbyUaMioyYrTxrypRfknPMd7fZM2iiaPiZH5w3G8yURsJSmdWFGd3h8iMrYTtJmEnpB",
  "key11": "5y4kscASNDdiGQ1vrDhwK5r1Ar11KrpnQWmwXLYU5M4cHdtro63odXr53U3wdYRboEidn11x2YaYejZJXzuYuafN",
  "key12": "bfe2kP62yu6HbunMFX36g48wJwMTpYDjaa83aiyy16Sevfh71HJzKLt5FXb8ZUDNXqe1PsAR65L1ryPzaa5tzo5",
  "key13": "2cGsf68hYZ7eeKHSsEmxsJpJmP8SEQrUmsSNXDdSNEZbEN4KoNbnV8fGqZhRgVvPSDVQxK3EH4DUJZqjDbMf8jbG",
  "key14": "56JSuMy6pRdV1JVw2JnzJiovCNHywx7dSE4SuZEhXiSyN1SQywBtfxHU93remsHmWagGNJHCv9JeUGvdSFMLbth9",
  "key15": "5TkvzXMZQNHQ3JfHMSJbhTE4UZfxNg3uw8CmBuPsuUMmPFgCakbjv7xBUsgoN6WjaZrMj4AvP7o1DyH5sh8ZfTH7",
  "key16": "2gJGri5KrjYmRS53RMNTvJhPmMNtMgcLvqwsNtUf7rbcYcocMQboN71JunSTvFPLKjCS8N69XsobhJaP6K7emySk",
  "key17": "5B5Fbs3Taw3jXfXS5AhYdngyC1pdJHRhEs9ifcyL8KWYdnqSLsGx388ohHU16b4vSwJDML1txfzAVxRmV1uU5W9R",
  "key18": "Dg6VRfDoUCPcAvWAjuXR7iTj1HstZEtCSZbumAr6NWijW6MgWC9Wdr4xcoC2MXckwicspkB7ERbcqaEK5NbWnLN",
  "key19": "4RWCuRKGKmeasxN6DPxJAs5k3LoSHL3x9Lr7Wp23ckH3sXSmMernSrTfQKEtGsMeJMZ1u7WyVuaqCbad7SiV2Gtj",
  "key20": "62MhS1UHG7wg14xHUPSVipgjhFS4KiWyhThBMkJc44haZGo6F9H5VjyjAjzKkUWnVgt5GGKeKxGMb7Ht8oaB18kS",
  "key21": "4dpLrF8mTqtZEXNPFomzf8ex9kG8526mTVKBovzrjJqRBjBjzfBZaDhM1PSq3VkVo83gk6oMoPPai7rH9kqbKzh6",
  "key22": "4msgjcmxrQWMfarPBrXxaQ6vpASkLWC1Vsjtz5q7KBiuxhhKXDS128pVc77hKgny1Ry5NUmkaXtY6cH8nYjo7S3U",
  "key23": "4L4cXsuMMkvDKKpGZDMqajchkrraHu1HagLcQXtnzx3c2WSRHqfgw16f4W2isQiWX3kYRvpzwL56bfrTwHKxMPpZ",
  "key24": "2qTS8FDyqp12ZkgQJyUSSbzLMb9JSUKDmeFgKaRnjSfWcTvfXjdL7fvohCBRtC3jFWBfJ9mG67KWdbWDWbweMaK",
  "key25": "BiRHeQnA7NcxtCMNrqLsK5pY82kUxZqLffoUqoK3185krgKoeVrMcBMsH92EQLs5ksXwgdX5MS2zDivmK7yqD1B",
  "key26": "5EFA4Pqx197DU6D1JDnHT7Gwx4vuFV2mvCuGBsUV6L1ieVUX44VUfUxZqG5kpxyJ973yci596dghVJTGQ3VP11Jt",
  "key27": "5bnJHYGwKqeZ27vsPkR8mARoiD6MsaRyqiCgZ21LfJ3jApEuNWaYqK9LChcnuBpWTi1skSu1JDyW449shv9ATHfR",
  "key28": "iCs47gbmyhEAh1H94Lot2af28YUyYhF1ZQJK9nkLoEgj1fhqMRb6eVg67NVckx9PGzjCFTHajhUFgDNN3LpFAo7"
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
