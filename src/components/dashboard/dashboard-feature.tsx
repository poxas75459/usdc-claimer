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
    "3BNtQvVeA6cPbxvJPmHZEy3iDG8Wc1PdERTKFYq8QHGoZQJ3PcV2DTw5BVTAFrsBvWsVfZzYhjAook9kk1Xujdhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34syaFCGnHjRnfvFbJ6qQnttpuVHcBoLmavLT956bZGbX2vPUNZgUZt9qmW9SFfU4erE9Ua8xtduhyeRrJQF5Zev",
  "key1": "5bKe4ob8DWUbFNHQ1viD85zorZ3dGKobLMfGhBofUH8URCFpYSn4cMiDWCFRZA5f4hagdYkjBjw72TijTDu65Mi4",
  "key2": "54h8rbFJV8EQc6Ag3pY7qoZ3krGGRcgt42FmzvEAVtRWhf17ZahYL8otZ2nnwE5gHoNAJhUN6g6tV1qNcWk2obs4",
  "key3": "7Z9qDJut3uCGBrSxZ2X1auCga96JAr7NKzeosfFHxhRTip7XqcM6wyGEJpCFSDUvB16KphymwLcjdrM7vT1HrvH",
  "key4": "5ExNhWnvghLBp3bLrt5NgQjmFLtt45Xx7xhdouDihaYRvzrvTjyssjqcBEyJiWJusqnR25W2aPmcCXU1cDEiMfg6",
  "key5": "48Ji6GzFqaNYUJG1hA5emstcqg6x6r3jR8WzF7AEeQC8VexgcSiGDDc4kBYbpSs7Dw6KEiH5Z3CL5cP3kRMDEU9k",
  "key6": "f91MR8GSHNr5ud23gt9eKLWsumhgJ5GBv3B8dXC1c7CzNh5pK3H1b1D64kyecSBYwpZkTQezt5LLEiPcHiGZBQn",
  "key7": "4CDH4N5RsFYidPafZ9QazZojLukHYPD53aDXWD5FVF9AdAMrYxXY4PxKZArXknf6iWVvWB6QT5CZBhNbfJQ6nu5k",
  "key8": "2BASg5WmrvSrHR8nerchwYcnCYZA5zv9ok6cFLbRVHZz4hmkALVWELFvrow7p9wc6NxWp7p8fkE4GcALhE7uayio",
  "key9": "5f6RPmRtXykDB5MXZXvaSZ2UCZhWcyV9NZBnLgubPKHMmCGLXrixmFrbGFc6YayrZ9kgv2baLB13Gz5Akm6bQKBe",
  "key10": "3PFS1a9fDgp9oDMTj37uXL3cuGwGEbJK1n6mtTas2xfBkB3SMVcnsWSaESy9d3N1HY7KfqYkUb2fbwrQJdor5p3i",
  "key11": "2C9WCEBPifmdUq9iTKkB8Ks8NPeBYoMkLYqtjkf4xwMMLWubrchGnQXRYytFkpqoBGsvVzu9k9dowTTovmd6yBL6",
  "key12": "4GHdEBgangba2xq4GsyevzU6yi2t9X3KqduiEtMEHCkmvHrUcX9qepMpnCJyHaP8mUojU576UXg2Tpb1F8qtackU",
  "key13": "5oJMEL6rNBuGncr53Myh65XKCy48TroSBBeJKDFxKnuLWBzeCreyB4EbEbN3qAV1u1DmABh6m1QoTZnvYaGwkJ94",
  "key14": "5QEPuprpHPMeGYyPS53LDCHT4Xm1e8V55aa7HPuCywcmHfsRG5SCNvV18rcr6Xz4h7PEp6Qby3QWxgKFiJW9Lg4D",
  "key15": "5RrtMgtibVqR6VnV37suWgb6rTUdueqWSb2Exu5oS9SPBVs18Po4rRu9SS2PWUxXEYR1cHBvDonc2kskfuzTXZKg",
  "key16": "5hoSWZ8pTR2ZwYKdG9DubFxbUpeFnWN9bbovUHWaVb495QwpSWBupxUnVy9isYo8Xq3j8Rwra48XMUJA9VngQ58R",
  "key17": "2ARZkdPbHcTUpdu143CW4rp282MjptqcjWjMtiFct65ZQpKtTbUqE1m2o4f1a4AGiseQRKmBes4c2E8gntSxKHbt",
  "key18": "571G5qukSyya1ubbvSLFv9nqas2akjEtJUFuv7MXfqKKRDvq8pZPwQReVExPrePQiDyd4LTsAq2E6m9eksFn3zMD",
  "key19": "3x5kRiznxwLbzKkMquXKTGwxSDxew9VqfomFopHcovh2FTFcgvEAvLFpuGy7RUfo4V46zTfdCdX7vYhUK7zMU7qC",
  "key20": "g5jyhC1bxWrPo72fhLb6r7tfnR3ojn1AL8s7kieTjyvSkwVJzBe7PVdMi6zwuachmiNhQAGipaNhhyJVp3xix2F",
  "key21": "3HxySFPWfDy5SK58kJ34aGWNu2wdQtMr3zp8zyPwbQABZafQJ8eKs2Gm8R7HDvHjvqYdPStE5FrAcnMCcqYUv15",
  "key22": "5YjUeuyXNds46CoamFid1J2KFvV53LoEc6woZX9J2i8jAuYG7FFNwDmP4MBv1MoxEq7jC5WbZeGYfovtJiT4b9Az",
  "key23": "5uW9HjFYvAsGmDvhEC5mC7j2nsAsW328Z4MnQFcXQfE8rBbAuSZ8AY83pvzBWuksxJkEMbkqfhPjbaKUhaw6t3hW",
  "key24": "3wgg7s428tLjVqZwca8YauyTXr4aPgnjSF15WkCtMNVsRb4DUMsfPqYaPy5uNKaLL18RkFdQXhtnRyb2AKiLnpUF",
  "key25": "4Kwrmczz2fYTwjdrbpaHRZacYkAP8HefsTN5tZGecjifgfLSkZouBZzZk9BLpn9virxAhYCoszdQjpCEChKdqCB1",
  "key26": "41nSXv4VsaT2jzpNWrH6Mbo7H9rHQm11XzsvYgzJSteSCsGKbmRMHWUTd1c8TwLmm6KDH4PHD46CquDNGmWvWnkv",
  "key27": "2aK2SJC2uF8JxavcRyDM7EoXu48JWYhMKWb97ES1GKHcWE87re3zgNqDtPhmZmcHw1MeQc1W8AJAnoTzpZvvzyU",
  "key28": "a9GWQytFz6eRUqqZtPiqJ92GLR9zy4ULLWd1TDS8onzQt1t2TUWYAYW4kGMUwnSyLrLhaGdRFzNB32FRMsKuBqF",
  "key29": "9BSDU5iJwYLqoX6V7GzvfYD8bHcKai8oYGHpoMM5oZrMf3hVU7cEyNX6wup6RtLL7j1DzaAejEve5VxgXiJa8oE",
  "key30": "4T57fcTFc66t3kdfHHvYnGjo23S3vusYNUEGQVA4Z8TUHByG1aRqQG9dwKWJ6TKcXTsdcWv5Qhg65wyRmDjZWv2X",
  "key31": "4xhBh7ty5z5u7aNeHoXyg1U2Dsc1srVgHoLnbjvk1khmCEqf4wHqA3HceNHPbSSzjWTUtG4cWEZawHJ6iZ6JBxoW",
  "key32": "37xqLyStkMHMAYHoPzjaRQsDWVr6LAW8ZQqeyPadHKcwfx1mDzsbVEg81EoLmAaWcMRUCvnCB9UkbdH9YwEVQW4h",
  "key33": "4mG7FHXTYy6GjgbfFBozQbxSQW3t7URmq3oFxkptQYWRT6mXayESNHHBfJi3WEnK3HDk1nrNykQE9rVw8dw2E1Ff",
  "key34": "658z6VPJHn9XDpPqzL25JUfBzDCENbm3HuD4G5aBT2yHcch2yq3kxeZCH4aHtn9KokX8fHYY7xHcBaBahifCWhXq",
  "key35": "2QwsxnZJZdjoBWLQKiaQgSpi75cP4HT2QFJrTAF4pjn5rLjYcqkQ2J974Zud7fGZMCFZudt89ixC31SYsYYxicop",
  "key36": "2ojfEGHobjyTJzK1ajKnt2VD4LkZX9LkeJFDaCe96oXYorKgDbTmcGwEpeFVes4vSQRxFp9cZBM8iZyF1nzuxTRQ",
  "key37": "5wBQbAuFPTNKQdtmHK8NXUiKxnPRNGVAW99aEtptk7w2B2mv4pJuoD5W7q8cpzDmCuQ2LYvFsXaBFD1q2Akkgm5V",
  "key38": "u1EdE4qm6fvhm321U1U1ttYdzaSYqem3wWZh2VrGrb7Kxqves6XoZ7MnkTpd6RHt6Qqs9NNmHatjkzZmKLQiGpZ",
  "key39": "5UrPWE57e2tHUeMRDD4WgLzR3h46nJaV2KxPeMdn2cRQUoq49A6FbDRGJcg7LMW6SwWynqJR86sjM7XC1pNKCA1n",
  "key40": "4ocuyAtgQQ8sHu7iJUMTcsieKUNmJWFttZigbBcA6R5zzcB6d4PverTt5eNeSFT1pxKaiefkPye1WanKQFZDSVu8",
  "key41": "jPvub3a2ocZbNTbWggYSFnaHrNuwP5daJpipVS6Rcan8Ac52YBDenff2u5e9HcepBF3xqji1KtkJ8R4yKy9o11Y",
  "key42": "2GaW1K1rbH9CQWp5JJZemuAKf9bT8J8M9PY7DMtYFs52jXjN6f1KQVpifspB87aYWe2pQ3CDraBjxEAbeTCZ57fq",
  "key43": "57G2EtkVK8bUorAYV9a2C5HcRRyuq7WZ2b2zrPthN7t15BsGhp5Lkyk5gs8gvhoc7cQmoihSYJ3AC5Q7sHa4NtAm",
  "key44": "73JPuwA2kZnphf4iAonLDVguHfMgTNjuMxcEQHB3r22voNKRF8upnpaQraDasm4V2pkEw44YNuG1s23khLmMswT",
  "key45": "RXM8GBAvUyp5ME4D3u9B8a39EYu77WWsBxxveSFhNrEhbRGqiSZYFmj1aekwWP7hcgoLxCRcapfGX68NHQ9NBGV"
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
