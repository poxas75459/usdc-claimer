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
    "2qxB86UVt5T1bVQZV8JWrLbDyp3b4Q48t3qP9BXkMDRhAmZb3f41Z2Es2PTg9DqbyUGeXDiMptYGS91Nq3M5RUsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPVDmV8LR1NX47HpJYwUvyEQc54qZfqwFFbrm3W6uBmQ2wJGoLxRBYzY5r6H5sLzNoxdWJLEV7hdbGdfJunTCt6",
  "key1": "3gmLUnBmA8Po55yRKtfwsi4tifdSoBYoKMPtEj1rDfQtA9PrkmPhkC8eTVKETYxrxkegzsoZYuhMvvM3AtBuejjH",
  "key2": "5PKJEpwLeVNjoPjKPkKssfocmeqWcFFbAqrDHbJ7p2WgAt5xEymhU2oNDgL2i7kuSLozCj7BUxVTdkfE7UykN4Bx",
  "key3": "nHw96ZCADyf8LBKDeodBMy1kQxP5MSRTVnT6aGSPwnBvwQ3SfGCT9dMqcY9EgWh4e82bUnetgdroWwQ5Asg2CSS",
  "key4": "3r9bV9ViDgofE6y678zpnDhUrSq2BZt8LSvW3YDi1pg53nSB38Hc9hSngjeYB4ryw356akFuVYEip5VPV9yQpwMc",
  "key5": "4AFgttX9ximXHC6wfbqavXfTFdxgjzh6TmEqfFZVcXrUttRGzATRxuK5ESBH52rdRL6HT4SyX3zo8Qc5fZxWDaZY",
  "key6": "3sDMstDUYSRFv2GckauCYorhLmF7ZJ6BqYabx4H2QwFBzSVue9rx2XFhS5JbJ1WMZky2qmudNsurwNEGp3EV8xva",
  "key7": "2CpqycDrLTbJd5SMCeusYnWbDGxbqkL9jpPEyMnJ8py5M5xR5F4J712jMCWSrDrXAjWBqas2fbe5Q2nNt1YuDzk3",
  "key8": "2uFLJ8Qyh1izLUmqR8BFhCKAzWHgJYy7rFTNtXiecF7QNCNtNWogMXstHi4no3JKk9Mddv2QyciWqPyGwMyw6Cv5",
  "key9": "22A8KSUePUdgvobag8PuHMHvLEh5mjrsYHKty8ZoBuRhuKXaAKzZA7L9S2ULYnANpGgit1ktj2Rrs9xPoKCxe5Us",
  "key10": "5wzooXethsXfQuMpjydMJqYd56FJKYFKUZRzDhoXUf6dSTrkrUGPL5eqS5jiGtkpmJodBffRE3HgmvUX87n5TniB",
  "key11": "3LufcFx177oY6Dfvm7Szu1JoS98GeCnb8zCHAdsZTKzaQGjLcKcPqtfUav5aADqsovLHBEaaxt8Eykcfxig4kCEK",
  "key12": "4gP9tKkQQGwPN8dzeEKSkY7r5oKU8pqXAiJduFuSXwfZA4koGzFBRwVMNF5BftqPWyhU8YaKsxxyZrBrLarG8P7V",
  "key13": "3D9FEjtYfU8zynL2QSmPNCZrR9rv4vg5s6MvdqEjWHAzAiatMUfxefv9CS6WFiivnVsSm5bYKj3jfUSN9dT4rcsQ",
  "key14": "28VMYUNXkpqWXMGxpK56PW4K8v54ueF72SbAgKL6YTfmWF7J49BcsXWf9JmNP97VUdCrUv7jWfhmEw9bsXmRuW3T",
  "key15": "5bceFy3asQs1CA16qYC3mVG2SpzV5JKKfm45J6Z4gcyhDrjuf8T8QccQVq9n8UHndVW631RfvRxsXXtc84cnzYxG",
  "key16": "5SB4HbRXYxcWPZC12aTq7X7ximkbDKiHyBpDmWGeyLKVunVCYXP5PQxMcjp3SB8hDHtEuYh4w1XzbQCopQo983fT",
  "key17": "2oGBKfiNR69f3RePU6aNhtHcNJz4dYZXDvgoVPfRxNH6bzB8BkE5jyLP5D4LCsqSaemn7LgKJwsonzhqQbRP8P1a",
  "key18": "4WX4kicqsYf91MmLFoqnH8ZNbdez3UpdPuWgc6cqCCq88tYNL5JzFM7Yw92VwqHkogS6EH13Zb6Bfopmk1TXAFbE",
  "key19": "2HSGsHeP7x6Aj6D4iRtDe5dLYBetLkckDPHptVKhPVqPA3jhwKM7AeGadyVexY3oB3vorQyTi6zd9afccYbPkv8x",
  "key20": "4vw1n744hRyh4DTtMugENJ85VwJzf9XdiHj8cdhL63joQkLamsEYeQRHue24JeWER5U8m1cwjDGRuhjWWiGA1v6z",
  "key21": "3tmjPr8hjr7FQ3XNTqYKQ8xTytaorvMV6FEMyLyRjJHwHngSAerjj56S5aFy1SfWPHQVQQonvkLkxEU4LUW1HGiA",
  "key22": "RjTknbNJaah6MhNcaBQ6MTTKEdW6MaZ1t1f9QHfEu7HkqPPyUj9mLWeNBdDV8m8RKxNhbagwoz9iZFMh1FiHKYh",
  "key23": "332dq86VGFhxR2zCrck4F2h7mJxdqeDEFBD72XDUPH9roAwBvW2LSvtruK1oKJrCLQaDrvwveEwsMFZf8ZhhoBVf",
  "key24": "614DPgT46rpxMXMRtyUjHok8v5TqTo9QJJC8peJwLsBWHL2v7Yrm6Gzpektj6Jgrg64SPmNyDfxNujGzkKoeacgV",
  "key25": "5MVKK83KurfDHeAt7ykBZpAnSkg2AQfD8nZPEeB47xbVyXT9kMWAAWaKv6zPJBbg59zJiPeAvh2vTK3mRCKLdsK1",
  "key26": "4e7smr2DMFob9J9L3VRiwTfpHdLHdy3QRr9BLi2fi3mniJw3bGiFkQEpmwtAzPBPnpXR13JZAA7kpnKFqFszpsKZ",
  "key27": "64n5bNoZNydBj3BD3XmwmKRmbWJanPCHG7dTGfqksXB8uKc9zf4nbmptnWErm7PKT1kMkvC2V4fPuEEuvV8Wr4ZN",
  "key28": "46B7wTsbvzEmDzDMN9pYitbdCfNGms6Cb1v3os7E5E3brqWkUXn7r2sXLMMCgKKZtx1tGiL2aLy8LJSEJ2QuYdbU",
  "key29": "2vQuPWiMDpmFkXn7sP4Ety8QqWXzaP2QcHE54UL2CPwJXh4QoJgY4PAfbX9oqFGiMrErWPJC3vkMnaUispZ3ojrQ",
  "key30": "4cQNupx9cHpwrQBJup5pUeRYqc6y1AapgVZ3TKJpzdDV1ggt5ypnG88oFHqt8YToueQnorvpiZg3rbvVTWAVwvyA",
  "key31": "3DL1xLN4QmsXE3QDnxVhxwhN4J7CChzosCMxYTKMwyEYXYkP1JedaiZdWueiDTvidcEgpvTobJ8dYvcbrokPj5MB",
  "key32": "3wzRH5GwvgbRDE8Bvzru8AyGA9QD1rS4K7dJWJKkzf2K72wrX4zcegGuq6ni2Qk92hm7Vq2zjbr5z3DC3wc7Aqns",
  "key33": "26eCUhtQskV8oUwNnvBcG5u5rsMcHn2RasjqGfRJqefaaoeyHyeYPhSatqS1QR33mRKiApGEAtMxBH9LVfupRA4D",
  "key34": "67UVwd3z27Vvr15B3oDpmTHCpee1hwQFTyXG51koNaoy184tJpmr2kjiz3wNXGScTiJvZBuVt4avmpSX3NCZF1fV",
  "key35": "wrLJZ5npAhdwUQNVQT837ZNszaP2sbQquoE2PAaDvF16bGXMHcHqnaPfLSBiTWPdwft6Lg9aM2i4yXE441kmwtC",
  "key36": "tvTrRcj2AZqE7NhgFaNhVAb8Y8iVXSCB7QxfPkJrzsdW8jRw3DiT9cVC5YxP4ZmcZSg5F5eESpQ1qma3zfvXQdZ",
  "key37": "66NgjgoMAmkGtuvd2CsBg51rxS4ZJ8c5KzvmY8thGkYFPfUCR4NN4fuM7EoZuFnxYLk2dUdXupUCZUNYKu9yRiX4",
  "key38": "5rZh2Grvu5nZCctKFp5YDuSL2rKs4VHmV6J1fLY7seA7L2E71ieEECpYnMRwQTxqy8uBGtzzvbZVC277NtVzvATJ",
  "key39": "djP7eSbbXdXtuHGDtB2DUNr2Bb3r2wuKYwQTR2v9mhFxfNxi4iKSSqfnZLmacAu6hwjaT8jBYSVYgGjh8XvGKdZ",
  "key40": "9EoZJLcux8HjcqzztSocK5sBXXTse63biUFGbSfkyi6JtXYKpwUYZb8UhRVx8sji17ycnYSejj1TDuXF9GdV3nz",
  "key41": "4a7e5ozKw6L7jPzNU6NeKRN4WNnAE2Qoiy1kLDpLaw5iVqcQWSh1aEnzGz5WsCDyAdApSKahp4GYvo8MGbNPzSR6",
  "key42": "4m8aTY1iLdZJLzsE8qyYmEnesT8JdNiYW9SjCZhDetQ6YfAf8qEf3Dqunfaio8MuMnUgNoMWC43WHm4w1J6XJte5",
  "key43": "5e4GeAF5GXy6kApL7KNeukjEvvyhiXJKAtaGZKFCgGEUVuczHZiCzx3kQNZijaLPBZhptLnVckEMEvvWVWH9s9e7",
  "key44": "54TrR57sWWn1yaswvtp9wusx3cLNZSGoRfoPzbgvqe6iXGq36eDcnQRHvHs2jKzaWU8D6TnEz1NXLSMajcJfH3G2",
  "key45": "25EdqjAAoSNz5463J6noBucHCMQityYyhsj5fvrgxzbiHhB9qoeQJjZD1sp2i1LhKRG6v9iuxabqmk5wuF5hmvfv",
  "key46": "44rM9Wji4eRzaynZChFyz7YkhWTqG9VQahSPnVixMBNu9HqR56ZuTphvcwUAUCiNz2pgPAXZNaM47h5dFFUfqgET",
  "key47": "NFveoC3smKby77hitUrnELgqBUWaEU3i8V5nnyCz4mzXs2gTx5WSeT7cH9rUsaa7Ao3bjUZWiDqFRgBgeNkkV1Z"
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
