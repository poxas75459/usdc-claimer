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
    "3GR4NKCpqABewctJCDttG1ihSoNihToGAfLFaRN63b79YQUYQhZuMxYwFH6NhiTodbWbz67LvVaPaRko7GQLsPkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2AXpPLsGvMDYcozPLzVGDaYSxGouNSGzpghHHEqxXKWi57eFuwLNFDwrNWBmcjQWZiAHRdrNoVkgUv9yxUpvcn",
  "key1": "348fr2mTJAptwuej8ZEw7d2VPFkomZWcHZt3aipUSyXiFhN9JcQt5TRBFXLdgY2VLJpVzU1ue8RLrjFvQihqFPGY",
  "key2": "574hhx6dzRXVEkgoyWYNFXqXMgV7ZSsfP8QBg6MB76dtu4ocSjgcECZdYiout2pAkdXEo9pmUGGbLzXhaFHtisVn",
  "key3": "ernafxkAkzohu3tN5Y1sVh73FRE7ojNKdQCXj6QYmVzw3dHrtWQUgki5bptWaEbGEb81evN7rZtXUbHH9W2zdBk",
  "key4": "2v8AKKg9KDCNY9dxE7Y8eg1GAnTQHXKkqX8EFUnGq1couyYgYyYFGJKKp4vttzGy87wzauZS5cUVXSrnTaxk89QJ",
  "key5": "4JfKQQvZssDqcKHDHbqqcHhco8tz9R6V2GXTncf2pdg4uq6ufG7WiVjoeSLNNKFcuejoqkb74ZueCDMf9Df2fM1M",
  "key6": "2Lk2XaBzz48uaMhBHjHJS8uj3eXkwcuw1fmcgGscw6bPee1cTAowhD39DHYneDg55gPd8gcL5WMdKEaXcwH7yD99",
  "key7": "5tJ7CddNosNDZWCCjCKPzq87k43HA55AqUEoYgA2X12LQCv9PNtjVyVspU3ma9AEa7Rpc5FktZJBnFRmDjRJHV6i",
  "key8": "4TFarvy9am6QBaSf6uFbQxrWWdA4GpdPP5SfKcDoAKkyJAN8P4imGKu7e8sBiHSx1biRhJ7WpDGjYeBSg2oXHPWK",
  "key9": "5MZUT3fa1CcvdKc2tLDG6mUXyPp9EFbM48akxb83EqEsNTFg5Dixce5jCYL15SdAVbN2cc5f7vwTbbz62G44thEY",
  "key10": "2q6xax4ckZVeGxivS6fgPNKXMZNRSCVYSKgoA8o2ojdCifVJUdPfQmZErrNz2XRFffV3Jusz2aWm5gSrdYv8oLJK",
  "key11": "61ahejLbGozupuACbU8FrCATFajHzdbDfHg5GqqJUyTqJjaDyZtjKersqtDeiAe9FHfZvWjA8eRMCZDn77SEQCHA",
  "key12": "2U4EuxPtEtrTUwKPWpySizSGsJs7SXEGunBRFp54of9dEZCw9feuBB7GaQgNb1pF7zUu2ReZYCJFSzyDbZgPaQ4Y",
  "key13": "2n2sWxFC1tgmkAwbZXWWqLypt6wBpite1o1Qz7eYRm2y7buVRYg8fCbwgvExTtejCwdVbZeyoj7Arp9n5nrhY1EX",
  "key14": "5J9faLfrhoyH2DoiJCre96TzGBJQo2pg9AL6QJdUt7VZqF5w7q72CsWSAo9udjKfUfNoBH5TMJBPP9CoFU86TWPN",
  "key15": "5GBjrP3ags2DA8gknmeGYaEVsBipct3ZA6Qrkd2SWegxdfSwoe8QRxaJNzX8m5HqXHgk9axwSMM1PHAHGAxPqgbZ",
  "key16": "2K9uTf5qSJcDpWNa6ZXzMwrVKMF5EfdKEi8G5XdAhrZa27Xe24duZppDfeq8Ve1vf8tJ9174dPG3LVYYqGdY4JXq",
  "key17": "4KAR5SpRD3Bo2hNjs2jQRCZ65kZwuWNcTGbivgiHpGLFVjNqKFGFW8SfNH5oohvsv1gkeP1rAELT1FeP5HkSVrUd",
  "key18": "XrwddgG4Y2aYLNmPoswuEHyScy7iWCyQxmQpKYmPe663Qmbts3SzXvVZxHTPpPDD1W7WgkCA4rwjW7VQ4s72MSc",
  "key19": "3bx2KuX9Usb48nRUeMoU3EWii71NeDXT4NHojkc6NQ1USWsUerPxG2QmR3aDNEyoFirCvBMGGigVjnzpQSi6ptd4",
  "key20": "4673BjKk3rQBup339PEdJDSrmAWCByQvpTug64C4KfyScP4dMFM212waJWWNit44w4UwAzT5W9ucDnTkPPiMkmdr",
  "key21": "3bb2CzVtNqfA89zq5ezABTk8Lgvnbevp7wMAdYAzykohX2ZWpvm4AHTARtRuNHzbibaWvdmXyGFa38CnXgRDY4LP",
  "key22": "5QKgxJh2zcBScV9akTPo9HTcPJBHozbkAZr9PVy5SDxWiwQpk8TEMdFDEgwHquxH6nRsWu4BtX3fD3vEKtGFvDfR",
  "key23": "3MpLhVMrgFd2rY6MQ83HhtZsJABkowTfXBDkrJBiuM5v4rVm5MTsUHt6DcS3u11jbnUVfMWsExkcz1tanwEwrgHZ",
  "key24": "514aqrRNmLtZbbscZetpRSgYefBwe7URfCrWVVP1Z5YjdikPnKEZBiJDHTAasSsuzmp2ASCf5TNHD1qYvecQXFfP",
  "key25": "3wWe3WPyQWVshys123iPCfY43qBriwZjVFJJw6mcsoSv34Chegi8bj24j6GG597TJ1sMivPfWGcgaFm5PeTK4rg3",
  "key26": "2HHLWTjp7phLqaYVLpRiTctQ76gkVeN2KDz2osJipPbD7AiGi9soU8EE4w7F2hSM4e2eWRDP41gA8YmYELSiHrsN",
  "key27": "3gGJfj2TuSRwxUwxCEJ6UVTjXM4mvaLe9wvEFDU44SA3PDX5Ahze4o2SauHJFhSutsiKucgHs6ah2jFWbyHuRZWL",
  "key28": "3NRtYM4yn9U8y186n3NQDcwxrkMLm7aaatG2cytW93Nvc4QdVAo6Wu6wiHV5ddmzSVLPNo75QcbD1wvJvq6d2L9j",
  "key29": "2Gp2uoNJUojiURq4c8yRht6wLMYz5ZSev3oPwMZzseBY6kA3QYb7PuYAntC4rFNCBzNx9NcqFK7d5jfaXcJKJr3D",
  "key30": "5Nzq7Ydqmf5XydYodSLM6rC8p6E7nDLhiH1DN8jyjr5Xo57CJJ2d5YyLhzp5tiDGAc6wAu4rYS3TDvQz9zQ8YSXi",
  "key31": "3FM3sRADctJkzbLtvxPEPYsNTL8Dm21zri57oDr9fdKKaN8KPjBapXP2BRhRMy8sFUEwHHjQAdCu2tDEgeFtvDPE",
  "key32": "LPuefb5WNGvAYhHRE9K5ysYkkGY1VLax7Ego35rNgD7S2jruyD3KgUArzeanX9JnTwizirMPHHYw6hkZbexDZcc",
  "key33": "391CoH6icfb7fgGVKXAyA2tZmL1EufufAhpbQYx91niRTDoMUh5GVXZoE3ZbQVR2deekLEYHaZv4Ai2p1XFc6wbV",
  "key34": "5ut8JZkjsoH31RNbc3UcoKeNeYafgpbeWvPX2JNn8k53beVHjyMyyv3C9V7Fr7v1jcvvwuuL7dHn1R4JrAnUWUr4",
  "key35": "tt1CCok85dEc5xJsnbodFPHAz78UweFSfBXLG1C3eiE537wx4w94pkRKymTSKey8G9uoy7WhqKitFrHhBPNKXpK",
  "key36": "5E5QnJiV7kXXMXEvZka8CpoDjKBnpcrDihvRcnzD8zPRN88bwekta63qpmMyuRe6t8bwCtdFGUEDKthXHwZhE6Qi",
  "key37": "FVibCt2gf58nKP4CQBGhdRsNrVE1b7gutJzyuf7mTyzAYuooXaXgeYtsyqdzJh2BNvsS8U5p16K6xUe1Pmc5srC",
  "key38": "4nhaxjtUFN2hNgAUgvWVNunY8VjESv59qRQGy1qhdYkJYdbLqtaJvrdANrMYg6ERKjauhKFei3eCixBgcqY5cC2t",
  "key39": "3BpYSCbM3jhV3KhWRuPRYh7BPFZmTRWyLowD3yeFD2E9fR6WDzPzRLojBVebX2DqgT5mjcanbTUHUKLwpKLCxRg4",
  "key40": "BkTmBXPKx9QVtqnmwdxfALJ2ejGaWQjNNyvQdZrMqJkqP9jw6podwJPdWmaNNURe6XHBgJMz84z1EKh1uSorxKN",
  "key41": "5i4YXrrJV6XadN7Ynf5rRLComukGPM6dbG1WXA3yuPB3YJt8NCAqaX6CZ4PV4euAnPsZdFF88GCUpsnaNckhepqB",
  "key42": "dzKER4rZu8UGYsXfDZ9MKSwFwVcFazMjjV1JwqbWx7nmza21Yt8PFS2yZzaK4pGQc3c3vdqa2awgQgxK7nBqrEe",
  "key43": "EFTjaP6o1NMXMv57KbPUgvEH1m2nk5nyFU3RE21qwbdyfXcjUPBaHCmkpjn1cmtQ8TM6hXpAeVuRHcw5fqTdTrp",
  "key44": "3ZCfPN1znG4KFSaRC5pk6WpARkVwe2AtYqbcn22p6YgmCwotTjUwrz2VxMaMM9Nr3xmjvZ262FwkHm9BVfbbQzVt",
  "key45": "4aX4uiYbYE98UfDwWJAws4F6yg9ToB6UqAVd71tW76LyiH9bmZEhhqgDp8TsHLGAKbtUQS2PXajkKUJqvyPyKibR",
  "key46": "2LDVKCCtsELbscEfgBoS7MgjABU6ZJtSZXd3dqbyvxQwCA1MLmXD745opRF3Ze5JPPeXGMgcBHBngo7h5MvCQX7d"
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
