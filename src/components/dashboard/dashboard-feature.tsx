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
    "5uJTRJY9UiMtSN2vkrEZkozPTkJ4k96ZMWvqNQHm1f8M3RHXjpb2qaQz3Z3R1o2KmHk1hjxG1HZdp6MsADpFBjPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyMNraha6fGrkiS7otiLVMCGhT1cN8UXRLpmVrzgsB785zp38wmt17K4xEpdXhBDxejbt4Zygr13x8AaFX5wwJo",
  "key1": "45mCyvA6KTshnDGchzGxYjz3GC39cvoJE7yGC6Rd3a8TfroPvXcF1aokFct49w7Es7Y25kaZpf71WjjH8ip4y5ub",
  "key2": "3h1trGHYMdos8M213umstVoJ3GMkX62NJcmEX65uQsxJXUcW8Ua59Sfgsu9vRtxcUqaRK7XhwXHBw4f1Ao2R1GPS",
  "key3": "4zNjRESLEc4Xf76UHANcxBzE5BWA3GpHSkQQY5rFtZPP6x2U7yRyMVqfAmqxLmFVtXJKfDYkMmaXXJJiAYvYx1MG",
  "key4": "mrpDXyLZqV3zEqTEzDHJ1KV2Wis8J5XntLQHUVRcXRp1gJFk2Ds7Cxs61NCVj568zNucG9v1AbRza7DiZwnR7xF",
  "key5": "6ks8RyuwNX8t5E6LNuRLJPFBYBGMJQWNDxmeYZ1xUmUhvpPGe7xPmHjqxG2BeazQdfxtSCSq6Mc1Cnst7SfeVGD",
  "key6": "41qZbfdmk5vQG6Agf5cvhd1YoH1NNnnWiWgyiuVFBZoGoDj5GyCG53Nq25zE829Q8vXqCWZUcNy7ojwvaQWgqwJv",
  "key7": "3N9J8iRp4Q6rUjPA7hw4nqga1pS6HCW5MEy6FzDowbD8ZdSU3ocBseE6eD71SY38XktsrE3qsTwfhvrwDLPkoaXP",
  "key8": "3iSEMAEmH9Zgy3EPmzeASE5ue8KMUaQHB8mfC3xrZ275M1499tuZfKWZJCujQbi8ZZuufF3AEVZFhKGhozx3Mvjk",
  "key9": "23dGYbzaD2pEm6gMwnJAsbXnRDrAKPzAj9SJ6WNUTtcjDd5Wid6T2rxnG3pzvAbvdwt9R4tpKP24SiYSB8HBGt97",
  "key10": "42yRQAYtpYsFFnKWmxULuqxvtB3f5qxgjt96u4Dv1YSeKNKNksM9FtkhKiPX2KZCBaggFN9FYV2i41Km7REFdyqg",
  "key11": "2V1q63VuCD3GA1ykxhSivHwfy8sgCaBc55xTzGsdPbQffG9jEiLhy3TwhdjR9Atgj33ZGsyTZXdf1CrTbCWmKhYS",
  "key12": "2hLCbLJ3mC2kTPYK6AGhQmSCTbCjmfchwMxCpA1S5SP6dUM1YTTAj7AZz4x4Uoysrwyn9sPyL26jQ1nww6qXx64b",
  "key13": "fvqbshKkKxaCpxbMD3YYFw7JYHMHqrKsTLxaM9E7D2RzrnHjFtmvBkXo6fVKxMtLXxM1dg42yBfSTkkuuzKenDZ",
  "key14": "2m75fsdjpmZcgWXqtRGG9hnodUVEg8gMLFCag6S4eAFgkBdwTA93ZAZNV1VgSPypen4hAc1Nt9UcSeQRNEx86QBB",
  "key15": "4qCgymyQkX9Uetk1m6zTqNLQMCgfJmYnJy6erYCecEkhPjTs8RXShtSZwZXqupXQPCAd91cgEmVtw8HaxzHKY4aA",
  "key16": "5DdExey8RWCvRwmocjguCpHTrkwSofjQ1YXsLV1gghuouNWUQQti5A3mmntuZuGM4p6CC6ueKeRNgWENxr2RhADG",
  "key17": "k2EmLFFRqdSm29xZVXG41yuf4jPPeXnk9tW63zRpLecEK5b1ZTh3wwRFgopm8zJ2PYZYRYDMySxKRCFneTnn2on",
  "key18": "388HwM5qkbGRsVMrWC2rPd4wKRZPUt1oM784wCe65dAnC3yS14SCwP6DQnmWckNGX48UAW4G1QaUH5p7FcG7Gkip",
  "key19": "5vA1UkmpgmMwV2dpy7s5VxUgniwaabHwZ37j1d8LX1ecaakuBJyfj5AfaPUYMSwtXDYXxAGoycZ59ME4QATydaVJ",
  "key20": "4UEsKGahmyoEpN8oB9SJS6JUV6g3StTzSRZTjWCNNNiLQkvUQ9kQ1dfQnbK2dL5oRnaRL3owHaWYPaWWhCe9pfq4",
  "key21": "21KhQUqTmjEViSRKMzSEX9XUKX26pNWtp42XtYeZ35ko6wH9vKyevizDUQ8xs5yHQXy1VfpEJuQTtUBU8hwaqFqd",
  "key22": "R55X4H74jV17SauRX4RsPxreSvajaU8Cd6LL5y7ys73hjyTWXq1teT3nfp4ttmXNq5FgpgqE41oDgkKghJYjNcS",
  "key23": "3SBDjPExAFN9UJJzhMrX3HtHraU91M7ctAUCXxHGseZqwa1wXfFTSpY4DHyycqcvbLfot5M267Dfg6wpneVv8aNn",
  "key24": "3mQfNQrJLUBqJtzZrttLoSyZEznEPgZKnFas5sCYGW2eLyUbQxopVibpw55raGWzGrtq85r1Sm4ASc95CNCqfVbP",
  "key25": "2WgJa534TVf2hSWbsC1GrfUUpp1ZgAwuN1cuWBAuXmuJhjCEPoegcvHQWmSxsU1kXNtqoLXuY5t6i2nhZAdLr27E",
  "key26": "b6Q86WCLmUFuZNnngnpY6N7Tjeg84ULZ67HdAiuQBu3HodcvnFxDjV8NikjTtpJtrP2Txf8TpP39otgtm3kyt9k",
  "key27": "59EcmujAFrNrSj76ULJvua51yQzPPeK5E6m2wE72sw6fJKXmA6ZigsRfmaVRArrZphwzrbjKSeqsvK5D3pC7x6is",
  "key28": "4m9yrg3HnvfZtPHYhy5W8vZdwnnjfHveuWpJXVP6Wn2KicjccWMg5VBkKDj7SJjDvJHdiWxNo9azxke57bTK1aVi",
  "key29": "5eVM48VQMepkvFtrAeX22m3nTk3ACijPBxGeEyhM5pJPpuFgV4nDV5HbJa7TPY2u9jqCdo1nCsMirHgJ9iSAsdTo",
  "key30": "3SPsWkr2CB9LUHE2FQ7KrnARq7xmGzmkd8CkiY4bYCQy29q4hiSQpaF3MzShVBkqbSe8JZJJBzUE1oxmBKyeAvAs",
  "key31": "4R2SgPAJLuJ8uyndSUK4HzDARmfhTtyqcQbHWJNcPbwsgLqsS8F7wBibgunw44p6DxaNMZ2QeEcUaSBVMpRauGZB",
  "key32": "4uXrMBsSF3LJAGnX3iTbPJJmUQbtFR6iAD48V3C6RKMY43WXwiBR4pJhsKB2eLCkJqxYtF9UHML9pUrD6TE5jQkD",
  "key33": "5yGfK7A6QhuYbqcXLPQV9Le7WBZJ42L1tYxnterrKeP5Z4Uip6VDz3Vm9s5ePMeB8K3rWxdpdS89AverFHfZhLPu",
  "key34": "3d7JNnFqbBUwtamNThfz9BAztPnt2Z3KHdA1kczp7nh8Kwy8MGvp4JvftFHGvTQUm8BQhNbyp3mLgMx6WLJccV4R",
  "key35": "zQiRuNTCA4kxqBjEibPtwtMnpgjRA6SebTNqB81GVssA1h1GVArJLpkPdQQfz9mZuhPkRWp4MG8m1xhkJMTEVew",
  "key36": "i1HnLg5iJSEnmMKoeMuSvKydfBgppKAkTXHJVNBfVQmNdDxB8ZG2t26g9GXQ6zVXyWrJGthtWwhb42pAAmzb9Ee",
  "key37": "4V7LcnSsQwpFGFTqBSJWsnaSS1QqGeJcWmnV8R6dtCoNot8RhznprH7MykLy2YfJUczUu94kE69FSy3MMBviXzGD",
  "key38": "3fgirVLbcdhprsqUG93vFU2ZJpAasrzKvj9ATwDA8QCwXMzFcfs6bbirs1vTmG8dKbtSecrEh2g6KCR8P5bDrqtC",
  "key39": "38MxKW9re5g44rPzGT8rUDVT4Kp36ne2GbfS8a4rR5ButDwQhWdKmXtfwq5EVNPfLjDTkBUbWBTDJxiwQ69ivXPu",
  "key40": "u6Qgd1ZsxKNocWgjtMera9jCATZT32TmaRMNgEr3yCzzGn9Pzt7RHVhbdZgBfptDkFEyA8txd3Q6M7tcrMKeyJ3",
  "key41": "UntS5iMRsqgWEJaMJBkGzpdBwmaoxnU8iQJ4LT2GgocYQqHwLKxUAgYXbF1gd6P2g3uMW8U5KsBfJFb69Y1d995",
  "key42": "UN76a4gSScLE2aT6CavFyhgX2cMPvy9xAFStSZP4iTqLzGgAFmb4LGPLTQxdxaQ2CfTod7qsGPA5yJ3PSg3PBzT"
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
