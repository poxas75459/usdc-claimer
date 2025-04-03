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
    "kAW1xfZWNdUjBp2ZaeRd5t5zdQ1J5T8C1eLvRFNpuXPuA55tMkVo3QPYYsEo31PvVjS3WUiF4a4M3NxRfjgDov2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaPo5rgqMA3hufbsDpkaxuEk73HdPuQSgsyj7k76BSMhB125eo8U4JLtX5HPDszLV4a8pnQjn3ztUo4MfQqB8j8",
  "key1": "4v1Qepp4JNn9hn4jwbKDSy1qeqpRVACnt54xJ42k6snjopiT5j8hsqKFx3wwyCo54PFr15zFTvw4paAq4XL2JsHH",
  "key2": "4CWzdLBpmbuhNBUYy6A9sbzS5jweuAkU54HMjKyi7b2s8qbPCUMjzzTkDBnhARoMN3aPUjTgbQnhQGvrioRxZ3ay",
  "key3": "5ofVeJ9ycfT7JNnjwbY14svGTBFhwc5ZUJgRiCvyjBxihCUGLajTu2yoW8KGV5sDhJoEbyCP8HiJwpvyuakBRXCF",
  "key4": "YjcXUjmhFa3rq54Ri48oQX1VEusKQ5jY8J8CyjnuJgvaRBwheDAudPd8kN3jqvFQbVrvZUpez8c1iPhtgmJjFYB",
  "key5": "61GnbPEDuhSsRWySbo9o2VS4GR4C6ayaJ9HLnu8f9mLuuhEME5Tpbf3rtAsDRfV3gsvLFHrjkfLvVv1L1fBzUwv2",
  "key6": "2JBYUBP1cneh5YEm7Af5kXsSM5o79nQ6Djis9xbREcWpAkCTiVh3tSg4yafkt7PZa5bPHa2sLWnjc2GSVaaR1Uiz",
  "key7": "2DWGFrnZ6aVsNfeyiNLHBG4FLMVfEVyXDjcWJzWqktpu4gZMDr9rRoBRYxibne6aoiyve7gKBroWjmPz6gKzexut",
  "key8": "QZgdQxUV6E9petXXd4rcd4ZqdFKjHcNe7unkYHAiZHrsKbGpNEG1VceDkqeP4FHTUSZ6fTSVx8JnCjm4KbpQRpV",
  "key9": "ZbQnqtVTSxRSjti782nxscHFcUD7V8NCdhMp6vrsLcPpDMPmL5QnHwuB3iEtT12FU94YNmyEXAbzReWToRoAJKd",
  "key10": "2ghD3dN46EF8UMxX8higqS7WVUF7hQitTRjWt83VJpTB3kYkZ8HkcuJ1qR5absdyUHtmfHP3GZCgnwPjKFFnSLjQ",
  "key11": "P9ujaG3i6yx3S2FdRBGadPLiULWMai25yKung7iiRAbKrWvyPLmWM9qgT11WnsvhBpoLhGLbctBJkHGdTkA4xW9",
  "key12": "aguP41RCQx526s6yoqNhr9a6z1Mhky3nobyWUo9Vhge6CoFABzg9T7wudbC4upwCdDTdEZ648Rmnhmnga4gtxga",
  "key13": "5Nz7RDjGLB8wWHrdwXPKi5rcWm5tSK1k67TXs2FVvmgfB9wdrcPCoSEYdyyCWYCzHQYc1YfbGxxoPhySAWGt11Rx",
  "key14": "6SyTEBKprGFEredsrsJ9yWEeUgZHMsGuHnXhD7QRysQPBPcCkPnS7sj2PpPormoeYXXoDaWN6NwQ2gbRhkBcpHk",
  "key15": "2xrvBLD7cXmnMDGXj2gcMnrEWqMZsUakPMv91orqv3TT2qZWq8nxEULC9dfDpXSGXu5bodVCdSbwY1gEg8msCk3w",
  "key16": "38nVK315UTPVkQXqsPaZtb6VEjgR58vYrnt7xxHchXUojfaU6Fu37YXFkGawnVBJ9EAGGHS4vGXUv6qKt7ggdji",
  "key17": "dKSC1CUT35xzJPoXAD7JDCEVuJP4399Skg6SVAxAirts896FCT7uxTQu5v8d8X54DBjhCSavWRLpfZc6mU2h2Ka",
  "key18": "4xTC7rZBPe1hednve9D7GhDRwXAwaocxEAYTzzBL9NhM5WoHpbtqXUadWdavk5BFS16sJ1EmfyuD3VzCFShsPxyw",
  "key19": "5RjWomM55xPpTYAeeXZuokkubPYhYEnXkZuDG3gAc3avZmnDZhFqgRTEk8G5JP1FmDTFVo6WugDzic9xHaZMeVCG",
  "key20": "qKECXcJJcysJ5yGrhHmgnWVQ2P5AnqzKjuPodnUUaXTxdcAhUkWdbQdYLH5aeTd4fgft7YuLKxMqfTHAnzvFXg2",
  "key21": "QAWeAgZYznN8BDUY4Rc4SmD4caKPFXUW56MGSN2ueo41Hk8nw9r4Ev3p3xxoAYWoqH5debTSjAMkmdx8pg8E2gC",
  "key22": "5yeHK2SpAex9x169Nh8fCZHuHLYaMg6HFah4iHHuevs4VckgeryZwzg33vQkcUpSw6fKcmK48mfMBYqpNweTPYy",
  "key23": "3vm6LeVZrBkZdQTs7ZsE4saLsF89ALvxpuReNvFYeEUyXsqYart9R5kFhXJXXTo297fcAGLXXufSfv4QwoUqRkhN",
  "key24": "3DnSgG8xUE7pSo1wj4t9qcETj4sY5JzLAHVzH737stG5LVsYX7BcnZNtPBdPuVyeBfoMtwodi3xYxLM9iBVxbJ1j",
  "key25": "4i43q1MfcnwDz1miD5TTn3CeSSMR4QiHYe7Mvvj9VogW1o3oSRc3U3oqxtwWd1TKitVxCpR4phdHYkHWdXrde6rh",
  "key26": "5Y38BRLpp73fDkQActHUt9kQThhN4Rx84atbox7wkjTaATqVQqtfedsVJaR472bpWN4ivYZN3JDL8y3gM8wya4LD",
  "key27": "3NJ5t53UGaJoJ4Ea5djJSBA4RnArvgDJQSNimYWgQahKbjq7UshD843UiaKq439WspQAh36qsFdLmZvaz3sL17bX",
  "key28": "4JDncRvHoYaCk5iKxGfSx8KARafjRsw3Y5eemqj6NKTDHspxvFpsa8pwFzFKbSfZqyb4qEVzoe5s25GEUyh3V1io",
  "key29": "2hZqurA3bdcR3GzBVTv75saW1UUredDBZM95mMrqVPHFBRi9PUpq2xbHf8fo1W36eHn7P8TvPcxJvqLN4ckWgMdU",
  "key30": "1kB6swBk5DKR7ehdPnewpiqwekXowesNZsskti4aBy9Qhaz3QEhcj6Zy5xM4EsCxL7ocifSNZvDsZvj1UMjNy1E",
  "key31": "23v2UYfQdRjtW6E9wSpGi2YGMhGB6xd2coiSyR2L1wm4LBdeNjLiW1dGMJ7rxALDMJVjRfj7vroT6YTZuxq8BA2x",
  "key32": "3APwKn4NPN2CGCuxmrDv7dKC7csHTr9qBk17fB5NuWDas9PhhFCmcM4hsxN4HYWBpZk3E3LpkbyTqreh3uTfYguS",
  "key33": "257La6CzgopYvphcY9ntWZCuwcTykqfkc2oHoNvaqhf8X8eLLaT6epLrV5u2f53EpzrUSv31MYJphPdKVaGSGP4B",
  "key34": "3oGb1c25RPWtJu7KqgcSXpvwbJfZZUzkDkSaJpBZHPVGsCbYoRNnNy3smkiBztJykLMyGK2Rq3WzX47LSZwyRSZM",
  "key35": "2jQ7K5oKtSRWAX1wBBfc4fqJqQcFXVS4vbcc68evoM1azmtQRPQJVtzi8MSvMdzA1WFLWtdwLQ6HxNaegC3dKJ1Z",
  "key36": "2zmV8wNVimMPUHhfvoiKZrHEaXP7AMvS1dnVpx1N5xoa6ZLjnnZ8SntNfVKZ1FHi5MrfVbUH7DcJQiWYD4TW8fHg",
  "key37": "4HjWqbwehmA3gCzKQZAp1CJ9xA99FcFnZnb87Aqtnwwb2jXM3xX5og4iXGeEe3QHqCEoSh62CDJ19PhxcgWa4x6t",
  "key38": "36izBZpUxSJTa57tyw8R56MNSeXrMxssmc4LtDSqmQmxwJpMM8AAAFafRFGshPfHM5TatGWx6NCA6y4eszEv4fn9",
  "key39": "q2wUdeYhPN8cc6QMZ2iDaTh2rmz46PVg8Yshz6BXMs1qiVnMtPQC6L5jNQgEvVZGSsmLCpZCUshwy2DHXfyZ3n8",
  "key40": "4iw4cbQRk92GQSfEyiuZBf9cDgr2Xp1wwWwUoEpYBM2KnU9QTM5ReXAAQKosJgPYHzHSsPC8SDmaLpDeQvrUqfda"
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
