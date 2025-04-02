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
    "5XNzQFEbYPz65qGSNv6J4zrpRsQPZPpPJHxZoxRRRSU5xN9vLVstCMoWii8cb5FfPF16hMgc5LurjqAdLkbPUyd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3csuntjkYkno3fXYQP1oDf3M7RkrSZQU6eErKiMwpUaGqYF348af2NRYvnxXWawYbjxZTecdw1QS6LjPXBdKjHVs",
  "key1": "24niD1f4SQNQmLrkMxsckuHtaiW4tLNa7wCwAHgLaHjnKKx8HuDVcmHaWrHc2F4aBrgQDBLnBA4swyuvwJC4YAnY",
  "key2": "pFK6QJzMXLvgSsjY8ag82FUxyKC3a24FNuNQPgFXfYLDGWDtAXxC9bH9pkFLHQo8VhQW1WzdQNM2mJZN2TgyvYD",
  "key3": "4Gd8tnKWAxhBZhxpLQnQjyeuYXw8ommZPB3P6QjRQwaQgfJUUqXQkGduc26sEPn2TiQLTQWHVQ1ze1oiCNjsNY7v",
  "key4": "38huHDTJDePPzuw8ER9ZFp3K6vBNdBvDezQDMQPrwFbW195qGe1z2VnXWK7a3WD8bw3JhTeE6d5fzDi8ukBqitCU",
  "key5": "5aMMcfaCiLdaMabQPM1h7pFgTStVsyaJdKoRQfRERgBVLitj7V3Z9jUmjNCbTY5Ln3nStkoPxSKGeHRM6QZPZR3d",
  "key6": "2y9WoGmAktaQZpcZkzRCoMLe9Tzh2QWwPU8nT4Nb226kabZhG2e8sMAhZSQawdnAao4aoXoADLZrbFxzrbJ9pMdD",
  "key7": "3ivraBmh5bN4xKZMibVhHTe1GDr9ujFR2tg4hjwJkpF8uEHQmgSywbiFTJgZFsxfxTb8mzzk1wAzmDtoCBL1R5XT",
  "key8": "5c8McEUZv8E7cwFcYwRBjjicc4KpJkg9qeMoaFjyzXTsBSgATNVtcovVFiDiqyixxS5MJ9vfskyTpAPH2MNJTuws",
  "key9": "4PPa87VMWhFY6k6wF1tsCCJChAaeyrAMhuwyBmNSacHH3HzMWmTZSSAFXXHuEZsnFBFGBonrHmqixmDrvoveLcah",
  "key10": "2uszzisgV6pdxnwHzCpQiHwnYXw4xjyLiSuvFhf2mJPQGuJRKgMFnSWdpe4GUTMjfP47H295rys3K6DEqk8VkXKk",
  "key11": "3zdfy9tNtjNyf788PaRwokHJ7jU2FjFeFupc1eBHANz5Epvahk4vj4vqArx9KrbZgpxbwPdWBdzRzpsdaR2e3Ej1",
  "key12": "5266yd1cceHe3546VdsZ6UAG8aVJeK3dV17LsvvxgeaMe9rRFEdYRGmon1irVfUFh4YM2EXeTccqoXVXGmMnHxud",
  "key13": "3o52bkkrQx1msxQa9cAKtQDnE9eGdCEn1Avy5qUBtXA5cnuPfkczBoQ9zQhZLhW9y7F5B4p3fTroLQZgt8ucWqUb",
  "key14": "5FN4ihn9pYwPPtMrbCPZtA3iNeEVEMkuwgqkGb1CiduHpHfM8LPj9UKAmx8RwFYxAvDFnEDJ1Z16tj8dZYSFrt1U",
  "key15": "43DAbXwq9fgDgCijmnWLxfePfBRpJoiJB6MfwffAyRBaBTn3fSi73BHk6trtQPxcTMVoJoaz8Y3cZnYnXAYfLtTf",
  "key16": "2Z6CYCLLnTtsoCBgC54jgjNrWyyASysb6Kq7mVYFYHSLSFbqdghehzyupPs7pRnxcUcjZx8keYDvUGnSRsKr3TRp",
  "key17": "3tPHQEzgh8qQNXonhfyTUGtmH7889gppAumYNowLEBnwyUpW2qVj9DpnKxCnPTYwZ33fUnq8XL1GyFndjnFjDirP",
  "key18": "5wrPiHZbj2bu6xuMZBpKVGEQMWfemWGvHQwXG5RJJMAmXhNRmFe4bdztFhJgCW4aji4ZBYENBskfg1AkJTL8gC35",
  "key19": "XrQY1vx4AfZUeUpgryeqfadGTkf2CPA5kxc6kXUf1t5S7oxje33yKkdPbzVuDF9khCpRnPxrWpMsHMCgeuHLo3q",
  "key20": "2bfHqF1gqLLSG8dsGkyevN6bdoMBetinxyapbZSbZTyM5CgmABoCAsPkwp4a7Bx8UZmeLLU5skKbmboyPyUowxXr",
  "key21": "3aN2mUoEti4yCucSqhw8W5AHEEdK6zgJGhjFJTgEPJmDkuXSAjgrbZZXPTF2MAf99UoYzuV7siKSabxvi15tHYUM",
  "key22": "wVfuCADWbTTtpBfKKhfv5Yk8dazYrmx9FDRL2DuDYSUsQhr7mXyquii3goqyqqzjSCaRHdgy4SnnuiK1GGmqMX8",
  "key23": "58TUBwF9pv3FfpwXBwoorjmwQpRYmZjKJK71Xt6aBLiU2Rd6WcykcXms1dhdbjPCYJraKmr7U6KHRT2ZpPdpEH7t",
  "key24": "5a2J6LXbXK7PX5KrzdHQLSkZ3AyDbxCW2jUJehoqcXGPYdPUS4wC6izFBjqngoQjhQRRUDrRrmDfm7BDCJXsQDQ3",
  "key25": "2cZm3esmW9VF1DzzvgPkmLN8EWHkm3Je3xDYs8EpQqZRcr8t3LCB5xe53qrTdmnvGM38j8JQRtGKwVXoWk3JHTSW",
  "key26": "2U1xFyMuahT8cfi5ZaJ5RuWyLbKMYB38eLw89V3NuGFdDUtLMfz2C4C3Yj8LJWVSgfQu5RGbm6ddCACVcLpMRfo5",
  "key27": "4872mkUM8ofYCVpBbR5jDVCGLVRg9bwEMPnDKs1QmcMQqG6BLEhb7Pc9U8CcckjRfRCsePKoqP5UtanNdvNm1VNV",
  "key28": "5uSi29nLdLNmKGcC3FeUS13VWaFdcwL7Jh66X8eaDu9EX2qJR3bg5kX6hPGkUKDJ3CZQhtyo7MbmeGi5by32cupL",
  "key29": "3zCmLxRmwezjmYU92Di9HM6BH7LbKSueioGZEjb9maHYRUoC1hxSyqw74AZbfMF8Li1eRPvYiCUj4zbUow475Qwy",
  "key30": "4fuEQPn1SgNekJQDPD7wbgLnHqQJXAH2WETDgYqttJ1UyMWHLDu7cBEph4SKSm5F7Bs34Ga7fwvSVHkcA95gQsDZ",
  "key31": "4xvAh9fJoAumdmKa7a3xmsKvcZkCG5DGsm1xfshKZfEKs37ReqgGKaqPF93Yt7gN7gXxgWLcdDtbdbYMK4CJx78R",
  "key32": "4rAwTApb17MuxX1APX7u9DeGsfWg7styDX4KLBghiDee8VdkHpDUP2mEenSd5gFdf5wNGDDU6DTmMgVL4z9ZyAR4",
  "key33": "2j4fzBpfq6SD27LWRwMhgFUpDGBtEPs8i7WtVKWut1VsT5HjshFxPg4KCeQF8bFF2ant3rGtoCm5zAWhxeAW5Ym2",
  "key34": "2dURCt5JouLQdQ1fJj451B31qtEvhZdwTWLs6TAyukhqoTQ2XgJxYT2W12dFk16PitnQfTKMFdHMnkT8NDtZFPYB",
  "key35": "25DeahKjS3jm7E4zEXEGp8daLwvcYrprQfPmrWcxSZMRbe9BXZimWW4VGLNtFXbrT5bJMpmyPsR9DpthRhyuAFZU",
  "key36": "26EfgoxKH42HK8f54RfCfaL2j9tXqQx5V7CoaT4ahvN3ZgCSSugtH1Z2xbAr5WJ3Uu4XX3UQdb7tm7GocLkL2f81",
  "key37": "58yvrpvdjuQcNVMQDrLSnhPCpBPs44XYEjNbxCN5hRph5fds3rYQKJZmWYyxCyHgJNdp9xpYAz9pRTUJxA46Wsp5",
  "key38": "5VPmJkV6oTHG46eyse7ZHMyUVW4R813U9p6aV5c1wbL55iGJPfCkYFHros9xikQ7y2ShrjpzU5BvQM3LNtGAcA52",
  "key39": "3LkTZm2Wf8daZYU1u7RSJ23htZH9Ekt6kevyEVRYRM2m2Q826beT3gDoSpjGgdV36CaiavuPRt9QV4hvJq62EHwm",
  "key40": "3nd3MooCG1EftZWVy38mRFhMt1SJNPUkQpchd2v25VxTc5LbpuJa8uSfHaykXEHUHLJPbqDWkRkZ27q9v3Zxrxo9",
  "key41": "3MFVqagwH9VPrHDSZEHv4CjhuzLmVY59cT4SZGDxZ71c22d1LbatVMpQf5PqBTBkMpok4276kcF5Ppyv82M1xpug",
  "key42": "5ixhMgVPjMiHGYExBd3qX3j6zpmauQrqcuzv5i5EMGBpMoaJvmU8FMjEWeFQpYXcZqkD6dhBTk7CZ2RYPTHMEu2R"
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
