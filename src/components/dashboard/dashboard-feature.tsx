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
    "5hCXCniSCH8KxV4dWUKSL11PzGQt75DXtUwQw8ejMQuLmcJKG9kHxqZNjBbWc2m1ui8rA7k7xaqSRGhbnsQH3L5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auhr6sTSHKqk4GH3KarNnQg5wJSjHaggT3Bm3TeydZZCLukV64p1G5gsa9fF4CBooHf96U8ReAqYBZjFQVtJvsU",
  "key1": "2LcCvSSYog2d9dpHcrFwjT3sENBhu59BaYLgd8i6xkUbHNB8sJnuUiV2novPJB27VdG2C96TmGNVqruxYf9wsTkT",
  "key2": "2okiMhLFnyQRnxWKFufBHmYqtBzBEtLitH2m7LUytAesrP2r4bxtjLJrnUmTVu6VLgu5Vcuk6L5vji9ySyfuLaJN",
  "key3": "3f2D2bT53Li4YYMPcVWQrJDe8qXoYaaAVomfh7BF1UjQ5PtbNBd93eHa71HDvE7jEcjAbH5uZWAJCH7p6cyoCTob",
  "key4": "3vKc6uSvGAeRECxAnKU6xHCbLc3w6bfUzAUZByd41wmXTx7iqrQjkpPhFZYeXG82NhSKwSbhPadDvLyNMQ7iDJ4g",
  "key5": "2LPziKxdW1tBdFFFpPhU18nE1W3iwVRG7LtgTQcftag6GPEsQVpwSSJHnfXyQ7JvJbZDnA2WXKAugVAwttrxMJze",
  "key6": "2NVJqUNB64YvfEZxCGYwt1nKsSCm7NqzwZKgfvNppK7mR6h2mTrtudB2c3YVJWvGpKJ2FPSDxbgDzdF1TsPjUrnu",
  "key7": "CmjQfy3YEGNjpM9zDg1ba8V5wsuknx47isfY3VmWCfQrH4nix71Us9MFANceKcRNSkA14nBN6FSBMPHnSWqHYwQ",
  "key8": "3Wt81FBYxeC96fNHN6EzW7P2hczKVNKaQgFsytumDveBXFJk4oNQUdwqfEjs8KhLsvMMFDjbBQPX9ARuD5BJbXGs",
  "key9": "387xYvULwydBqMqHqy2ugU1HZuGqAKoBudNW3TGDrH9TFqVyU5LkmsuxiuNTwnW6M3fsWsoRUpK4rqd2LFiyZLg1",
  "key10": "44sMSrnUtGu6r5ej9qx7sSPDyaih6Tb1M4Zst72rhewTqvj5LwrUyaAyM3jF2oe4vnAVtnoLWeaZps44w89j9ntJ",
  "key11": "2ty7itfxNQ5dUtxHUjHPdvWvFJf1d7kfmoVDW9HzNAVfQL3c2AEQD1MNRXANn2jmAJwv1JnGCuitorbMUZtPUHMi",
  "key12": "dcPKgyhRWziShPXkZfLnYvxsaUPpdncDmF9nTMoz2Qsjgm34srUcC4stAvdN8hHsZDg446A6SonLVmanPbci4Bm",
  "key13": "5XJyTRZfyw8hdtXdFUH2vPam5A49cKFVGAsdxtrBpZgwW5Fb5htsdHzX8j44U9CrMEqPAtE9fiYKi9ABy7dh7LeM",
  "key14": "4EL1tB29AXWqdLyZVHv74SEhuJQAWCG1tJDPuYi9KdQx4oUZy4Vjft65dJWcGTSfYVfyGwAfZJ6Qt8dohtM3iy9x",
  "key15": "5AQr3Lp6ojZe3HTQ3pUzoUqkn7M1V2e7iVScww4tKWvZfpgV5UBEhcKaihG8zd88uu8YCoPGrrR1izusdrhFKe7P",
  "key16": "LC4JTY28Jx8gnCYjdNipC7N5UL2vZ3QetTQWC4tmij5riNADzFSKGXy6T69fMComYmMiBDHehuqDHmRKr8Sy4Dq",
  "key17": "4aoMSspeyEkms9T6wkwJAecjYoaGet6VkDKdh2VXejg6saBVUKMVCgz7bmb84KFT7wQ64GZtszHcHq3v9CzZou9s",
  "key18": "22W2gnXujknAUs8KCNFFqe3J27tATiPvdpfaXuUToqKERhAJ1E7sCLqqdFLZjVvkaVpNPBkVFj3GAmfaHWA14K5R",
  "key19": "3ohcbSCRhokyS9bJzozUZeeALwdhHCegLySh7J8AA9BkEsLq2iuWkJ8hyfLhcburnaNbNnqnxXNjs7Cv4JDoqnDf",
  "key20": "2VNLLg4scFEPkJS789XkzUhC394x857E9EwbPRTt34yNLwrhqgKNGMm1jJb325BWjPuhTGEsN15xiJSX79x7WLNH",
  "key21": "5uCwFUAnTDF3hi3XGu63N6NKPdM4NPLFFjeKmU5RMFmVSh3BS77o8PRw7FHiUyXZCPfzcJy2H4DAva1pUDpTEWso",
  "key22": "4a91AAVnNtZoKarhg6TFKbNiPTkSAZKCtBXT66xV6d55MKccGB5VCwG5eFpV4KrXTtquwx1kAPNxYbmgB5eEtk65",
  "key23": "5SM5TzdvTxbu1f8m62BJZzJ9UqEVCpWuB76Yw84mQED3qEvXquViiBWGbhDLKReehTHLaPbfeN3pfux7XGtMomuE",
  "key24": "4pAjGjhnsKxUAPiX8a7LCBtnSJJ1yM9zAaGYmv1d61ai2uAPaEVUHy1pbcic7f2V2FSuKkxQVnM1cDEG16xxR2Fm",
  "key25": "4pjCiLqnXx3eXbgPiQo5tYxPvxJP7cCzDdWADiLvJBzDUdi6AVrRkUUt5Lx6cuhd9KLMgxz6d9CftkHoUHovcrma",
  "key26": "2RKBkGhdy7NAej5fLUJsoy3LCKrtktWn4oA9md48aZuq9axjXEZ4aqohNndPD1TX1uKTfPRhw3Lhi9WhEHWk5XPu",
  "key27": "4nqccrNEb9AbzT4okEte4ehYTaxzRVExgM9pbs7HfotcX78U82BznY16Y4JBE5L4a1UxbZYjMVZYWNUVQFCp8twk",
  "key28": "21RYGEnfdCjPrP1iziZkBRBqFPsPdoMywanJUq3ByEkUXdy7KKDYtT5B91FZY4sztwUC7DJ2bd7TuTiPsXRHiRTC",
  "key29": "3mRCPVbqTRxveS7QwH2FaMPLnCxmXFmcbVPtgngYGig9huUxKntSAqK3y244HYVAv5QkQo2CqDHyuABZNYDmT8TX",
  "key30": "HvfE5Cqd4joGX7863vjt1KkvtyzC2uvUDD3TDiUJdtHwKs1sDvdC9TNQ58rLMRufQ7cq46D9noUuEzxKQgniynA",
  "key31": "4dPMgkJnc9VFaWSeSUZsDowSZL6xp47i2biiYP7kG2MFNcgcYbnJi2Jk1XitAfVrwMY9ZDqy71JErHdTLyzbPSQP",
  "key32": "34VDQ1oyWpiYz3TB3nLt6tTKPA2SfjyrasV6CcrxyfJVVEkE3xsPRgX9kTvPSK6exQj21StN98z2mnw9uPoK3oL5",
  "key33": "5pkxPNw1Y2VPn34vHtNgKPxayX3g4qaLKeZBo2RTnyAL7AYAAqxAVmNZADthtve87zMeSMQ8TZBKbi1A9kLv5p1v",
  "key34": "Jgr8JQ6G1rtEGPiPhY2S7uG1ub4jeidmusXvu2fikf39SrihL8iaCnudPH4mUpPgniUvQZL66rgpEdBQ8h6jiDN",
  "key35": "4n4pTkU22jxiEMamb3nSpMHwcvtPBuhfQJCq6Ct2XQYfhWKnhtHbYtrLFcRf3xCfgHnX1K5Vc19sHdvE7iC7mqhF",
  "key36": "29RAf2S5E66rJGvq6srK8qGqefwjmGQgBmneTD9ygsJLhi6mH8zw3JBpMk8VKVWdhFgDMrWqD7jmkveLtVwTu4AL",
  "key37": "sCCFzquARQGJiUGzFY2xrfcEG1xzm6XJebvHqspjDkuTwjtgUnCqCf8ucWEzo7ifSRjXFoi1KUEhtwxaRtQbT8h",
  "key38": "4e99k2J7FWCE4WY1mCA6tengaGk8FgWomWeRQHU7bP29v1rhdN7bt7BtBBBok7fjqdgDVT4D7sCtFEGBm6PnP64b",
  "key39": "sLk7FnV8ii552QcoCxq7Cu4XWfiGPYnnDYVDzXMcxhAuXmvTUPEiCojm7pzbHfuhDs9SKC9CfyQqTh2PcrRGqEk",
  "key40": "5sshDzQ2uAjMApG9PQoqT6XMTMyyCi2E4EGrxJtrbrxbpjujRLanPJSJndo5i4L9KNWpL4mJ3W8swErh6UKQyfHe",
  "key41": "5owuuCUG5ViUoEqck3Kbm3B4XQdCV2vDy2kNvazGnUgD1Hu8NkCyZRU7wXPUvwJj8sMzQsp65SH7tPhUjCqfLKiD",
  "key42": "5uzCnVLGaGeipmnkmfaM29dtrbvJetCgqsCYeXFgJSr5yuCGrYJoUy2mKVaWTCsW1zc4TiDbFccQ6B96397VGXpn",
  "key43": "5NxwF214DJuJ229By4uSCPPyPjUaZgBLkvptJ3gYobzRbeaTawh1ifi3SUm6E2BhNAhNbHMXM4Qq5iT8KYaqZYFL",
  "key44": "2fH7e1NB5dSqqv2tdNiAVdaQnfRypcz2nRZiUeyXBMf6fkwoZyAqPXg2Z9bqYzPfj47h2mxCcYacVSmaAfUUJiew",
  "key45": "HJ3os22hbsbuJTdLkpXZsCAvyZSKF3UHDAQv9YRjLKK9qRZdRdGihbdvufPa4cGXbTBZMxTNMz1vcxr6KfgRR34",
  "key46": "FK4DGDKYWUxbm5tEGdcvqRtxUdGc4WKnpdryc9jC31mixU6zLsn8drUZzzSbTxydMFEmvRTCF5xE4tdTQCjJGD7",
  "key47": "25ZqoGPVtXqBNyVBy91gdGUApt9HkJRcej64p6mmeEREqn2frryW5tQTNKmMA3b6Mz5cJ5U26Tkh6QB1ZxNqPdia",
  "key48": "5eF1SnHzJ3sN1ra24tmMWCKVfcdcn8Czs6dLtQ8N1tCN2xJbZSwSpggHFgjPqMDzedh2qtLnxLdEFMMfgRpAmyR1",
  "key49": "BxEKHPajJBshVMAnQiEUb7Q2FxPRDdVPsbjdjY7CMU2FrCDRRRHabgksUx2HABvFqYFsP7s8bi1wsedXSgnQupi"
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
