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
    "54RpCx6nasS2AvumWy4AJfMpeimh7yVRFkNjg4CZqZrKiEBLBD2o4RmDxsZDFsRgtHnX15uqCKGj1cUeqdZbpZF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eU8cX27shVZfB5BJB17EKze2mLkvwK9GmSkR8XnCoPuFfs3JAeCpJ8vPUveXiiTvhotdnmFrxRigQU44UA6U2np",
  "key1": "3RwrUsDynnM7wqhebegQatNKuagJ9hR8tcnPS8BkHJ2eRh9B6hbZMZmX9FKGaqzwBsJos1tdRSYAd8rzZ8NJZFND",
  "key2": "3rHT9co84h2QRzBMRaVxiD1NWFKmdVFmm42W4E3Z4gc5dPzg71YNdHezXUKiuHAta19ECh16R4KcDaEWi2YBYUYh",
  "key3": "Z93UycjDHxWRmo56rNLwh56XPrYjYX7DiV9pRoybFH4uvZyBHQ7TH1TxgzHnmkkwz4zqouap1539sc3PMnLC6UN",
  "key4": "Xcg93qszj5E2FWZcNzWX4kEtRbD8D1qcj46T54RETqctWsb5eqzgst4KEFSczwM6JxVGT43tK99FCokodnjFH9m",
  "key5": "28XGj72VyvztHr6ZtHf3XF2A4pM41G9CBWkTJQYLy5qyrWjGWGyEznELWqNmAkmey1fwtAGcgWcNXQUy9tJok2je",
  "key6": "5qdNijEts3n8PuBxpyVMPjPaqf6GKj5F7yhDjWRxUtZEirEy7zGhF2HSxKutrGP5uCvduzXu2RyRKc4z4EvWzq9",
  "key7": "PX29sTtRuS45VUNQFMmUQrZuLH5PZsG4ZRZh7TShn56jiBVaLsVvkkbEhCD7pYJKPkDiYtNoi79zx8ngbG9kRap",
  "key8": "1257LLmGqWEzY6pKNzrQtH3ZRATe1Z7AwhWW1NWxFNdENshvpfSL31inG3nG9rdk2uh9jptAJnsf4MQobHC58uJz",
  "key9": "2wQXFE9m7cDQWjr3fB7ZYhf9ngyjHbF3PMKrDTEj97aowBz65UrqoUBkZDrGCKHUXrfSzVudtC7rruzBaCc36B58",
  "key10": "3KwmCuK737SsJeRd4E7b4NiY3a2ZU8whrQNM67v75b8wSi9GmRhswjEFhAwczzn9EPuUFM7vz9JdD5ojVfr33nJH",
  "key11": "5mAbL4ApGhPBPWn8hZDQ8xugq5iQc8Lwm2fZKoC5aYtub3DW195yr1RpKTGM9EMSGdtqtQHuaTfHF41Fg2Xdv7NQ",
  "key12": "3bGzn31LpbRHXVKCRNPp6eqgUfzokjt7VU6ZxeJZ7NsPDiiaRg3ZSeSFBZmVLqUkcoCx1FPhx3qtdRKaNWrsFLFm",
  "key13": "5Kpth6TJaLxUzmgrs6LEXanvuv67vvgT8rTMiW4WPbZ8jqJtSrdHQwHs28dj4hbBCeCWtpVybAvKTkBQZWPgeCiZ",
  "key14": "2DXnkkat3FC257wWkfFXYorpVqrvEDcnPWFJbQekCA1cvt1pj5Nzpm9ZV6dDneeszrUepPgyTfAvzmtyXxLUFg5a",
  "key15": "RWcg3BugcWNRpCPyXzADFfMYJGeRjN2N2jBdWvLDWX57kKS98oZQPThQpHjbfPVEP6Xrnnm9zgqHBH5iRpq7NvL",
  "key16": "3rnHdi4qsN73Ui4t7ReJsJfQLiBEzUwvT8jLTfvc4SBrZi6GJCdTb5tD4LWKVuv6fXFhrooExEX3SHHNmN7wHhi",
  "key17": "3RPoW2dCfbeANUSVF6PpB8sXQns4o8TfEneRbdN3PckRMJAbje7YM7Z7K44YptvUuPqwGAQejeMdUMxX8Qnv4bEc",
  "key18": "iuikUUeMA85exSGJj1G1kp91Wdp94XyVvj7DHovyxSKhVJPYUvWBacCQForfpu5a6F1jmURezZaVCEAhj4wHswT",
  "key19": "3taUTYUvtYML1hXcPFuP9DgAvp2puqdUh7JRJ7YAXxMC2Cr7NSfkrnLgLRptDoCw2vbtuaiAdBoAmt4MVVAV2mJj",
  "key20": "4a8TygR2o8vBfgvxT7thLxJ1Tz9q5C19mbxAQFmoAuuX442iPR8zYUfzBgZSf6zd7c2XKi8FjXowmqDqm1KSTan2",
  "key21": "5rc36s5gdfiVMXPBYxVTVCgHnuoFnoo6R6EGDG3NiWGbDKJ8ppv3ZBKyeQtbfEXTGTDaXw9PCwdW4DCJQrrNhgaw",
  "key22": "3drn6nzoqh7tAQUhmwpPKPUSc5PWY3yZptZRPkfS5THM9JWXuj5K9VWZxh3WdMYXKk2yhJGPtrHiyWiuq3K9u5cG",
  "key23": "3XYorK3wb9nEGVrEUnbLeMtCAp2tJetMNwc9KZ8ezTUveuRtxFKevc3jz2fxGpa1tnkuLPG1Jf4zV1zJXdrRkk2Z",
  "key24": "5Q2tisuXtYjKqbDcUo8Xj5G53E2T6YFV9Em3u3k3cAdE5L5QpM4hyAmMm5TWdLNVKVFdAUhmTHoPMaZo26caZzNf",
  "key25": "gXh3xnoGmwcqv6KLTtzJjMMZpTTVAQLQA4VwmVtv5x111cD7RMTfFhPeHrpdKU7EQzg3o76YpvVUd5to96eec3H",
  "key26": "7NEW61rxJC8Lrq5WVY9ZEyob22pcDfERiAKnXttQ6kfjEdLPi2FyTiuH8vhHxFHV484iR79vxEnEiKFBuUxFeQq",
  "key27": "2tNHmLmcxRakCH2JGhW4egBXs2fSefnbFTpHWrsBoXwt9dJLkBLawF5uWJHZF32bS4U21yafbXbHm7BLffsyoZx8",
  "key28": "oqLD6AP1unc3RzeSnkkzfsj4Xc3iB6o3cqZRtj1SpgaQYErUJxTdRLNGCo9o9ZgNpGMsj9VFtUSkbUxocRXSitG",
  "key29": "5rSy74KJbmLERuWzYXHch76BBpKHLuaivydr8vRc3jpaej6rtTZi5RYVE2vCkkvJFTGgyCpYKuNCxaH16EHcUDVv",
  "key30": "4qXAsL555HN5zr8Xjtzm4KmauePHg1SKyQPFKbJfF6AH7VoMBexjmV3NehCWcfz8U1FcN58Wm5khrQvFHXh4qrhL",
  "key31": "5ADceRDAsEV3DYW9SHa82RW8R8V2tei7McArAnpWvSeZASsbRjjHMYLUrqHGppv7iLGnV5ssxYXVcnRM2Ug77KYg",
  "key32": "5bsNpijkfmVyxZZzqLacueXpfgMye3W3oHkbDgSsooQUExcc3qhBZxG5k2NzNHuNhZDDdMgME9hWu7NGo1no7HD5",
  "key33": "5kNQrW5B2sN8tjUMuc5rrLFXLAt5k76K9DpAdhrBQWmVz66z9QYH43BgU1hi9Mmq8bcnzB2QQW1pBHk5YVQgRb6j",
  "key34": "4BJRbQJK6gzoRvnLdVAWHPMYuJpfHUUEAaCik5qHjXEmEVhfDBKKqLZSDnCUR5HNFMVdpL6L2HjBxrthTjagM6yD",
  "key35": "3oynD1bMD5kszFmZvK6w5U7SXxi1FdsjQQtNAgR5Ezwqrh6G9PLwsDeBqbNtxfoSS7RvG3BwBGADYvcCxiwyN9jW",
  "key36": "5efD1QZpnxRnpPE1P9KKAt5zYcRGZdsPkUkb1EkiiyJ8cqxHPrxnALjUc8ydFxpJ3EqFvPuDUN6R9xgCrJXLkeGh",
  "key37": "255yJ9LkqsxBytRCKqr6KpMsQ2puptwFwfCwnfqBBjyrb1HB9fGyinGvfkxeSYD716RHcLihx4vJijqDaRYVMEyL",
  "key38": "46uHZfgQJjJtpkjErsym16CM1RkVbP4cHrMuHNHc9fmW5927Ed5NGRAaws6tDfA5zq4RHeEWeUq1wDAaFKvnbeWR",
  "key39": "2BKL91pHhQpxzkg5xiyEWGeMxBnJuT5kExGT4MQanRnByTvF6uDTdMBiZz7zZPd3YCgRveofa8zohFxVMA5FNEaB",
  "key40": "4WYC35RuhfeU8MRozizeSYYFiruWTFyNLCMynoEbvB6w8rZfNVvLt2D5jBws7kZW7M4voJ9MeUqTALPzJp2TJUJj"
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
