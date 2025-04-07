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
    "2kLQL8DECgPQDEAmUB5qSgZPQWVE86DTrFJoYshfwJNfUbWpZma3ejMazik35iJJ8j548bpuaFaJ6ykuwCKJikBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEiByzjytmi6dEvCQNuSA442V9r8Mqe28jgkMBgSES13j3WtcEkBQY1LJxdJsnF77fstqKQpmYcd1V8CSLSXwcU",
  "key1": "3sSH9E7rdA1g4bCdqGwRpqwQZM4LY6opEMUnQAimCQRHpS1hpFXi7yahoDZtrM2tCw7tgJpBJWP8rgirRzWWWSTH",
  "key2": "os93P7TAKiitn8z6WsVnWfEpHaASbbnHYNiSNndGJqQEfSqWyMEbwWXri5wZifQPwwbbLrkS55LuzMC142qs2Ap",
  "key3": "cJvSJSrGc4bqRDbndJH8iHqFbBsWvAs48Sf9GQzN9ki58Vw3xMRJyFiZhBDGj73SHz78ahQAjLSwFzAumQuN5bg",
  "key4": "5c6HeejXpY6GLiL9rofXh4xuniaQY1omXMurZZ7C71qe6Uf1EyoGKTHiTGirXcwLKztZUmqkWAdWWt9EzVzYVqb6",
  "key5": "3eapF19jkxRNj4A4ybUemRdABMWJGjtrPq7vdALAiTKKBXoQsZmYrpemRbfN6zLxbFitGbRokBz9LMvd2J8wWL2J",
  "key6": "4qFQ6NKiMvydnKhGM5Z2zphrT5aUmSbVQXwTr3EpeCktN9LznR6jH7KiopSj9wVFSdaRjn5WKoUxz2dTeW8r7KQV",
  "key7": "378HrvVkVqz4F7Gf8viXhQqrB6K1bChB57359CjL5yZ57z9L6zCHEuyQPy99iU52n2gjzQ1Edxg9Rt8tptkU3EGk",
  "key8": "2aEaDwLrkEc6418irnTWop22QEG2qWBDgeiZ9C94wZq4tX8eAmCHZsJbnoUPMitdXdZbuxxkHKrgXDNSHfdNb9Gd",
  "key9": "6EevSnzVNWSfHAtwUWoNPbBhH54cFsYUdATfAoY5fMy3MpE4BYCPu8y9YE3vQQhbg9o3usmxPP3jWVM283wj83m",
  "key10": "5aD21GTJWYs9bm35FT3oyeJAHkUtWWASXVfjYcSz35vYXpFskfZvRsRDz7NZVbXmQ45PzZUuSBWsRHgMLqTdja2G",
  "key11": "3UfMK383R4kYaM5wybPbo5xnm8Er5YhHARU5BfgbJVmZ1r7o9UKtE4qiXsa7Tb2JbxaGcREbw4JBsYgV18vPWgv",
  "key12": "5mPK6e5YHyqp2eqHHoBYpNcQEj6m9hxxr1afJza2yYHjZVdPh168quso77BQLRbqR6mzNvSDvNC8ehTx42sDy5kT",
  "key13": "2hGaTSJbdA3j5gpSc8jJbAvGAtJx82kqnAFLGrQGL1MBqLJLGri3EUCmtm1AHA4XuCvWEiCEBm1XeUmkrC9P8rqv",
  "key14": "4QB4Ek6L8NtYeoh5PEi3upx4sJzzRDtNyXL9xSjHSVq3yK9N6p92bKXBXX8KHio9Mn71RMzzUaVegDUA2Boqc8Qz",
  "key15": "2XsxUoKAHTh4Lc7DYNAhzqnGdaGWFCeT1VJajWARKuoA5buDxGiYGsx4nyfo5YVrb9esEkN8j5k2J7GQCFq8MyPL",
  "key16": "4oaKD7n5DNf4MFXdqtYZc1LyboC9hNJhfdc1yjPr7CMY3sdCE3BmD7YMCWdMEtZ8kxh2Fm5u1YHpL4EovUf3Ao7H",
  "key17": "4DViENGFKMabT9oNEsAkLFFjURKrCq8DrQ4MezLLkVB69umML2c5bkBvkEPtpoW3sVgooFMHDL2BezMqWZd4dPLn",
  "key18": "28cBmbGSFnuvr7q3QQupiMgUGJ8YQYHoFjhgXtoHao5UHChWsN23SX7s8DA728HatJmWt8e1C6KxrVufWizMquhN",
  "key19": "31A63UG39gm5WuTLG3guAypvwUevPvMuHS9183UeuMpHgpV39CSnkbkurRY5E6oZS2X1EUHAd6QZjm8vMiG3We47",
  "key20": "45K1T9dQ8dFXsfjKvq8ouMx2iKgB8T2Q6NhHpH2CoFXvXixeK4uVABMGyaBL8xNU8hYRabbg9y5PrH47fVGCCCei",
  "key21": "3cCA7WAGiBjpBZuBVBviC32D8sXnUk4uTeMZ91Y1hRZM6A1w4AAG7JxMLYU8T9NAUZCryufTR4eLNU9zXfjtZC8X",
  "key22": "2iYV4SJ2PaQmgEK3h9YcjL6cbtjxqHMhLysPM9UvvPh6r9BdGgPGinHhpn6VZWK4aSQMHBwPuetLhFQubuBQ5jXx",
  "key23": "2wdiKhcqZuFxvoxifbJ57Qa8cvbvH3PgG17dS9mb1HE4oyq9aqbg6rqiiPLYWeFebjkJUdbwAvfyttxumKRnKQt",
  "key24": "59VRwG1XmBQxpdQG4GKLPotwveciNK8N8DKdrpk9Y35MVEUrPUbdxE2Zry2FNa2cBm5Gu7vbKa9PYZaZdoiZQXFV",
  "key25": "pZtHQ9Jv78uUoYnRc4C2KutKhPsrcwP5bd7EhhPPuDPxzdQRA9eZVh6vzzTcfXrJ7KynK4xifJbcddivNEsDAG9",
  "key26": "SWY3LX3iNyY4bt26hxhPP4qx8LYkmGSSBDiGgf8b9NerbFk5JAN5nci8NV8bwpwCXGx1E6cG83Kn9GjZxn3NB2n",
  "key27": "4XRRVwckt9WDs1LC9op71P8xNrxqrTHb5sPHMGiFEcofVQMJBpN75EtsxWSByTPjKV9yero5pwXvNMbfiFoTsJVF",
  "key28": "2Y7ApxTNi2LPY74DATaTZCuMimNFtVCvUmUKmfwikDYoH2qZEdUqXDCdPuSk7qDwix5rtzyjsM1SyDaCAJ2wiwYK",
  "key29": "63otybqYEC6DWw47VEtwLDSrhqytfb2Co7cEXw1dAXd2KvgKi9ukVJcFTsmea2Pujz71VX71DyzuvxWbNQh1yK6P",
  "key30": "2kpuaXCeoxeRx7K2yB55szr3g8gKVFvcU2G4PFnz5MxFrTp9XytiT9rksfA4QAZSYJ6fGwPp64eRKwhtDWd1HCih",
  "key31": "5eihsGuhopS3Ppzvgca4VgVtpTkUUpaHsGwhM94aGeZtNMcFk59LoL8dZBzCZhaEjPrLcLC3cZ3dYEpTwdSocb21",
  "key32": "StAXWYA3uqocRBGPxJgYtVqkse5daGuPcPoQgruyNCbJZs6yA3Kt6WSfnd4qLE11SubHiqPt2GsDXrc47huUzq3",
  "key33": "3ngaq3k8LH394U4Mey87SLFnDwcboYfwTovZaJKFdhQirP2ssWAVVyWKycQbbjqMSPm9dHNaVR75L1n2vU6S7mn9",
  "key34": "dpXWesLg9rerVrPn1dEfccLVxGGibqcv5w3bVuXE4DxoEKnDcZH39imhKqMrGQZr5qpti5KpPbb1SumoviyKVFR",
  "key35": "523LMjXRsTJ7x6PGKvFt3Zb9JZyQ2N9LbTGug5EJqpa7adAxpzi4q2PNsVwQFzCKFoNM33soXa7A1t4pUKzr13v8",
  "key36": "642FNCjkTB8HbsHSXKsKoDp54x5SYaxhSr9g9Jc7Xd9KgKqWCxGcJsBWw4UKoh9nWKLY3naMdp6Tt7jPzCrLiE7b",
  "key37": "2Q8sEUS3a9i23Lf65g9SUbntnJSDrUi5bFPRR3GaNY9PMJHMEebJZQMuVjEXK76QnSir3dq8hJgRz5aYxA7Twnnm",
  "key38": "3MXvd1AGTV1Bfh1M7XsuqJevk4vq5mE6R3u2EVopifYsHGMbPxCeogWTpo2bChEeey3iEU6F1ALTZh7U8B8o3hXe",
  "key39": "2Cyeto55uQ15VeuyEoqoQmmZMqrtPRBc45XFQzy4TLrAsRZJUrg5wGLattyWFTjfGoSu6gQeAUDgcJE8NX5kmm2t",
  "key40": "2qVJNGU3SauWxBjh2aahjRf7eJhTShqmdjwm8je9hKVLh636eoemsZCGmE8qAmHKwATnsGK8dVJHD2VckGzkRt7M",
  "key41": "5dxyyqvxAoP1Uv4uHCmngvDfEJCmtLPfavxjAgdmJMreb2gBSaHHnxfmqMUAiqzqY2BkwB9B4UJKwshWKLVvM8Vj",
  "key42": "5wLRqz1x3QSwWb6Y8TUUHsr6A5di9z6TnBMvM5kbCLfe6wN9WEh8Q3XDz3QtYfeFoMQy3EyNELQSkzD5idayUqd1",
  "key43": "4RBFLnnC2KGYu5HJpN5Up418SXJnfY5dY4Jzys4q9bX9iAyusB33vSBZmjgN1tWyw8zsFkDwPCrExre32ZgCXS96",
  "key44": "7TmThWNM59VpNtjknUnpvi6ZP38sGeVQh7R3mBbAas48g5pjzcuis5gwKSwXxpYx6FTonPM5QvSgaL5Mwpx1Gds",
  "key45": "5o8qJ4n5JbANMNwib3S2Q3MH43R2cNy7f1TqgcCL9PcvSELUTVvjdnAuXkhj8hkGgj7LbQUrxyrq9kaEDm8hj3XY"
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
