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
    "4GKXZ92Zrq1w9Av6bgxy7roQGeCKWZn8nvxCd1MqQt4X2TQNd3dCEh5HYLoCQkQjzhK7Qrr55x4crKh7gXJNHVJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcfiHao5K14oJxSu2uuH5dKY1x9fPHYrqTugnq3KMoMip7ZaMFpDFNzNuyPpSmeWEN2tRGoSoEcVhZaFc5FZJ25",
  "key1": "2cNbNKuV9TYg9o1aKMYJewR2ZKJUtSLC5XybuHgQ9VAhmikpLL9xVk7vmdwTaJwBC3dXBVEjAH3TX7kHFh3in8Fj",
  "key2": "eVy5CMdZDRc2m3CSKoBmLdZPyXyctBSiAYLW5ri9VLZho7ShDfFYTjq45cbZ6tCi4v865VaK4r499VuhkL4pgRR",
  "key3": "35vtg5FHapzLXphpKib4Vw5doqRhPmNvcdbrq9VUv8UwAodorxK1dXetA3BPBxBiJn1DHyNzP61rxMqYNooK39p",
  "key4": "41ofDmW2YXiMYpDAes8emPevxYWrGErdG3UgwUsXcQfEf2zoBvrHxRHzs3vQPM1WseqTF5xRLLSavt4VDfZP7Xpx",
  "key5": "4aY11Dh1BNxtbyaHuVADWPg7wRtW7RWFPYNpxRqspax1znEeLQatDRuqr9noCZkUuMzL6iFp1er5aM6TCEUTKbsY",
  "key6": "63BARzcCckNZ4zt4Cf729sshCX1UXSMSZWUo4RjNB4ZwewBE5N7qnSunjGiqRJZwvwQmEc5AxDRaePeTQC5sce2J",
  "key7": "49QcGMwiZZUtAU5LbpPiypTAkhUuX8S651B3kvpt2hTUGnpoiRRfcMfaTSedrqo5axyS9YgyF5VpEHPiiTBRsT5z",
  "key8": "334WYaHhu2apWHCKaKyGRSuYvahazgQyrwp7P7CuW93HukScEewrs34gB4Egsj4xar2ocv8422BgAGucm1CiM5zr",
  "key9": "6C9FWnhmTcE4L8MkV3F9dwBCXcFXJ4Jfv9taxNfvMdD7qCTtJgh7uEMSohcqqwUZL64uvTYyqmEtTkajZC9BHcb",
  "key10": "3QfLcjfCjxYQJzdKSdCV4nbwgHMbBzHHdq5L3ABPF7GyAa6BkXMD3JBFansUrSTLfN9mtGAqC3KeTmeGEG7zzJST",
  "key11": "4z86ZjpWSn2hQYACR7sH7xXyp8WYrCwMwgpCmUerVazXa5uyBWCj6ZsKdgiUUM3cWY2yiAd11fx5RNQCA5R97aZ7",
  "key12": "51iNCVPZQ4MQTp1oLjVere8yT3FWNVCna9pivKjm6FA7CpS8GbrYVATbYs88rU2DVEDJsibvTsw8cRyp6Ghtpxgs",
  "key13": "5ZKuuqCnanoA6w5hAEVZy7KF7Eo5CYPpxmY67TL65ijFFiZSoeAcMb42rFoscY4G5DM1YjKHoieR2zR9cdiM7eug",
  "key14": "4DPvGM9vFC5k41PMe5Rwwrt66aVgjfmcuzFEjVuLpAetZsKosq5U6Cez1U633Yp7tTMMRLkvzsxzfo7iQqXMhxdC",
  "key15": "ChqBSsnaSu48NqiDYxvBfDu8BvRAGT9etmEyDFoWGx9RVtyMT3Zg2ngheF2YYC7ZE8jknqyJAAPeXi5nTsAkZ5L",
  "key16": "4ctxzCT8KDLiPKmitpVu2Esgysn3HuZrRnmRZzHYzkB3erPvFVmCBGxtoBFHhweL5muWFRY1xTwWhGAGEpJNJwV5",
  "key17": "3LrwhcCEsfwrxkJ3YC7wsALNishq7VuH27i7CGWe3MRJQhmwzxmJELuSKDWPxAs5CdVieank3ZuLrZRP26muoeor",
  "key18": "fjZkBHMVoDCtKqpxkn7LjSQRPHJfFBAVw6jT3m8yZQJrWNYCwH9ehk1ijRMUL8nF6UoBzTEM4z987nsZEC2U7M5",
  "key19": "5QDKT7SmQoRUj86osx1zFZK21dUjbu5Znqo9qroRcjEpAxybJqyoLzRxFGUqqyUruvtttzYKZMKXQHCbKBoMzcXe",
  "key20": "5gbeJrZVVS6wAEzSbtkcorcqXAq4ZidwzS9fKRj5Fw2kNxUaAMPwD2s2ZkNHpJTAo7maPHv9GQeaYfh8YaeY6Ax6",
  "key21": "SxJzDbzRavMgs9qv54RH76DkSC656qha1nXS8LQyQKk71gosuJD1vCaRZhQb4oqUiHzRLEGtqYKnJbD12vUxe3N",
  "key22": "2SzukkYxtUo3WVBjAGro3rRVduNs72Ygvm93LrWgg9HVsseEw3NvUHwhtGRzDnbPDnQFoYPPj1DXZbCuKzamdVmu",
  "key23": "5P5s8xoZTrcFkethPZvFhs1h7Pm1wZnnrcsNM5TsVuEAqMC4rGnB2yj3HRpMHmEtNJUyJefQueL7bebT4cepgnuJ",
  "key24": "rz9mTQBv8fyowDNs7WkBCmiNryUK82RyeFwMHpR2GtBjYexxEhKDxL2casPN9QCYAfjeiSJY4roW6REpCw4ScS9",
  "key25": "5A6Y1B8xQjZ9gojdU61iSzTAhH7EMWqCjiuchLZ6BedaGeeFTrx3f3XqxZdCZwaNTpToHyP6qk4B1anCXSmk7kuu",
  "key26": "N7y81pJVVbqXHem21qD4YjKCCcXau9sbS1GQoPKuwfjbvbLqiNuFkYuEFdfVbC5jC4xuh2dE7EKaXxpN6Pvyrar",
  "key27": "fnhqgXGYWtHo4nVwrA2kfE8En8wtbydGkuhk6Wj1aDBQp42LwX35syUyibtv22dM8W8octeubgj9ek2UC76evDm",
  "key28": "5u91Ugm7vKoRsQsi7Kcm7jwjzJrLcMD6Y5NZGatyiwB2UihPaGKabA66Dxq3YVTsRNBHoLfya8rf3T8yAkFMXCis",
  "key29": "5sr68tt2VwS7ARvZNHZv7nZxZEKftLnRpVfDnfvn1Dy1txNqguxc7TruzRJVSWCcCWrZf92EyQrYLjZcA1t3ZiVn",
  "key30": "56ZCyeHFxhDWgM1sXiM5kdvC8VufekN2WzwHeZS4W9aWQ6dn9ur1jSB5Zs5eJ1D8MkbPoQqxWHXcZ7PpoavFFaeG",
  "key31": "3YxX8dhfpxLQqPUs6jYRfX7v8Dhtv36i4ua7LwP34nJV2EabaZKmeRqokLYrJmmNNbCN3WzDbx4rG8E1BrsMRXCW",
  "key32": "3G5VhQ1DMwSzcKDQx3JnYyfRPv5HNY8egazrghfP8qu4sScWLcXWkqFuGvjZTTm7fjX7UzFUmBAdRvzxK3LvQKEo",
  "key33": "4ytxupYg49vskBzktWtBwSeJyapB2EL53PCdnqw2tRAuaGJgxw81jNgRyDVDScegbCyf1jQPp9hQjq9JUAQ1vofF",
  "key34": "3itAoM9ez15tMHyRetVzHsG2QZN6RdgqW5NTezDnK9nXmRfAHaUok6ddQfWPwJaK9BJMUuCeKnE2duLcBB5aeJvt",
  "key35": "CAs8eFf2WmWWLJzYnfg6ugqhGBzSDqEBD7Q7ZXnKfxkTs79reqxtFngP9rHg2nDwjLUmKaMfApnR6bHd7Gaovyu",
  "key36": "42f6KXHc3VcxtKGATzj7MmVTyq29UvZqbCFoBoM7phq7HMJgkdbsLKnFQGgNY8MCT25NjkfFAyndKeuC35BjPHeC",
  "key37": "4DZS8ZzR2Lp37wEPLCWZSNtZkTAyDHPCXWKrfV155DLJG7BL58h7kxi38BaNKp262HwNDz2GwQ7FDLmfKo8EgZWZ",
  "key38": "4ccujBq68Ljr6aKEwcyc8RdriwfCWijhJsHbF6Zzc7Hio5EDXSBzkUJidXRe3jnxUuveBPHgnpWLpe3uW5ffACNC",
  "key39": "5CxUXciq7hzNfVSJNKCWwhnmR2u8G7k14haopWkKQeoFDyutCPjeCFMnrQSiFMJM3GnWZgJfC7MCx5PuxztudWTU",
  "key40": "2efM6BRxSdKaW34tvBkqg76HECJVkmpYaXw6yfJVE89ZMQDF5xq1dp8SSwuyATYmSd1nD2FzLth4F2g63PXZDLAw",
  "key41": "33rVBKYkdtWuvZMcsdbPkzD5gr5mmvFTBMTTYv7XuPpiqUDkcumUY97HhGTkUc9Hrx6Dm1yjZgEKm3bf4SNgJL1h",
  "key42": "2gxYLwcZHPKdLUHDVQUPgs7dX4duxjeLEoJ4uMgvn65ohsYD3zxiSWYXLT4si81Y7Dx1peCqAmxSuJbxXGHGgFuL",
  "key43": "67ozTbEMPZ3LMjnitRewPpoAgLgo4TBJSY8yivaeDDxau8oRUxryLMzAJSt4oBKuEG3Rnq1qo9uyfgjdonxiXNw9"
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
