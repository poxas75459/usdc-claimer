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
    "3xhUEDXisM1BAM9FoygPw95nP4LvRRkfLwmM3JsQ57zhQuG6VYgD3SsMTKLddiUf7ERii4iEDw6QuTUuvaKy8PpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eAzH2zmEFz5TpoUa1H8EQyzLi6MkgUojERiR65L7nmTTyfvQFS4ZLfA5svjWZZEPR41CgHi2KwRiZ1thFv2gqb",
  "key1": "2Efa9ygPUB77JPfTmAFKifc2J8awn5v1Y1RY1aMaLZtUdFxAKUqjam7wDxGVSAXS4iiWbAbBx6hdEa7WNTxJLc1B",
  "key2": "dmAP66tERhYeYRzPGev3ApiKn4zQtCpqDhtWwXmj2SxCqocHM2GQXw5vRyFr4Xxvqhra5y6YuDY2RUSXtesSpjC",
  "key3": "4moVetq6wZXCPr9pC3doaHTzcbs9H99EuWJWYULhbZi4coSpRTXQxALcdhJBnnqqsFZBVJKKacPSmTmAN4CugJCj",
  "key4": "4g6d31SV91yREUoSB7eYoN4uGkNXmXPPmMP1rzf68wgSrw6gBTeMdoBhBXkDXXFJ3XSu3HJMQDjpihBrzSnweRjN",
  "key5": "5UUXd4YgfweJxYXB18Nzi6aWGpdad2Rv7mMfBV6c99K7UoH56f3kQ1GC4YEPMBSLBGou1FasjKQNjTTMEFGT4CXW",
  "key6": "BBAE6MZMFqXZWGALRgsXTBKTn2qX5i2h4nnYw8cE3htY72F8kd33oPFDkjB3HZXCZf6WwrFyT2xJCkbGWWHae2L",
  "key7": "5bjyuFnpk1eRB5SE6HERk43Z4DWTuouBpV8Q4HcxWbw3rPKvnqMQrZiSavx9LC5buB3euR8W6tLKvRxk5DK7uSaw",
  "key8": "4wuRk4C99AWraZnjkQusphcHxTSfmeCCXWDV6dCc8dGLFA6g8arVP6rbxHsgYJH5NdTByvkeMqZoXhJ9TtQFjXfS",
  "key9": "5GcbXwKozE4atL4Dp4bFjcYsdn2YtW79k5VxJsZGLyaEAHCbXHemsDmhaTEgkCCgU78rF9PF1UfUhY4ET1f3kX1F",
  "key10": "Dvn54kgXz6fhUf75jb8RhdGbbnLo7aeSTPdSRAUVpjdHvPd8LnX8RDFg6hpp1VqNyapq5Sh1V1BFGA8CkFPo8sy",
  "key11": "2y1FQmqeGFg1LgBkYnGf7BcyWY6E3h7jgqCVCev2FQfiaHJDUJQPTNRiUf3rVwQQ8S47h7Rn6yapnZrj1b5ntaiw",
  "key12": "5SLSFyjGb4Biqx49EAMb1f99xXCB7MWJzrExESZwcPfT49iVpJZDWk8x2W841kxoWjXssSh3hN33rAWzjapjgZJs",
  "key13": "2bMDVPn9dCWLHk9dTFEuu53HpM4F3hYn5JetZfeqPp5aCDdBrpnbrM8SyGuUctVQfUM2i1HVnGaFWMwoynU4Rx9k",
  "key14": "4m6cfrG4BgnBQ2tueFWanXHbTuhiEr8TrUSpkHPYkuuEbSW9GTt6msg3tGiUoufuNK1Y9wMNsbASCakL6f1PVpMG",
  "key15": "2YQyiFx8gRdPHksj4HiSv41kuvFaXWAfyDGCSfWqn2gf6uSGtDZVsHe8kEc4xNVDQXfscaN8hBcRdseRGq2CL9Uc",
  "key16": "51NiJSmeJ7bn8V4tADsW3CH3b7QRWUDaYdc6KZaxuFPfC3bH6HwW2qkUZt9PRuioVjbwYUobuxesAWxyoR9RbrRG",
  "key17": "3uiVmTmNSUzuQRb3a31vEBY8HSgjgWTwf9LGLJ8Hsf5FhfmMQZPUojetzfvJxbVMiZomPvXauiMo7Jf1FveLknru",
  "key18": "5zrUhoXmwe6frXwsRasM3PiEqQ1pduimCazF8PfyXHe5upGjRbGX5YMF5PtDDqpu52VnSiQZcZXCrXvqezsbLXTV",
  "key19": "FXBr1kACnPHYhB2GAjG7eSjCUN25RZDBXHBQdZCPyU7E82mYZa1kMXD4QwEhGNMMhD8tYjjnxKaz75jeKYMEpmr",
  "key20": "4RrQTC2mYRwhsP1P2R99MWGiAoxkvMU5j65geDm8ruPLRxGo64N9CkFt85aZ4GVW74EKcQzzmBmeGHn9Nenivk5d",
  "key21": "5EYTf2m344VoNSVNgM5g5eZGqzkN3PsPPMmCkD2bQAfjRRRXwdYsGcuBCELpyVfCDJFdYcPWWHH9ohPCmBkCpEJA",
  "key22": "2w2zGTnZhKePPepWZkd5CtktQDzKqMkE1a3DDmMpTB6oNXozuiUqyrH7ayGox35ZZvPpwBXAj3JJUszKHypG4ZrU",
  "key23": "3ybhR6WTjueTrnykYk6WYGWV1zhZcYcWMMwvmhbguduSkjyVxRodsfST4Vk4sd8WKFuYhAakEmivtYH3JLDphC24",
  "key24": "3W932UArS44AfF9q4BbqEzZA3EwmjQZ7qmLmLomxg8mDFyF5QEmzWuky6VquR25rsTMRpunjhrSgcEBR9rBDB2pU",
  "key25": "2KFt5yMtjkdHwTFzPdCEg3QRomrGRbsLxZGz3zYZ4i3nBQzRneHUY2ZWhTQbC5zszh5pA8xaSv2VUQ62A1Nb3Hc5",
  "key26": "2kf6pVFgamugA2psAAUXA4ZXtLUVQBq5Prs9qd9DpaQgPSpjUCZaiUBeco6KK17DR5fsLxfvWDy8sSCWvFHfqQaX",
  "key27": "2bMLS5WwRvh4LWssXBmGDkYv5LcEzZK2TRRNtpJuybrc3aqTqpLeqdbThDN8Y1Na3MicKSBiQEvDWAR6RXRkmTd2",
  "key28": "F7AZH3WNW9gzCUrpBQNDXamgU1MHNFQ7zsYBSmcMB1QUdhvLAtUyvFU4MgrNGvKpzgpgfSjaDvKPt3A8w8wuxeZ",
  "key29": "45ZdmVxkW9hPtjJQ8FGtZfuNWHzAgDcKWfpVHgYeqYuPNUsR4SBzqmMcUXxyBAEUfiXX75V1z631Ke3wwUayMtwj",
  "key30": "5U5LD3pca99DpDdDyj3R4DpVGnHyBt7CTbfL4ayYh47K5eTsnmbVibLD7W36YoF6KeG2Fs525DuV97Gm28jKKSCr",
  "key31": "xFuNp2VctdV6j6UN1c9gja55xVNBaRafWHui3JTNcd3PeR2u73JbBbdtn6SsHy5LUVQWUFEDM8zcZwKdhz46tyP",
  "key32": "2E7RkfFwf46ddcuCudLCu4ACb3GuC9zBsq5qrmuhHSVKqyupRk91kXyUfgdvCep7goiEzj58wAHTWcaFZDiN2erD",
  "key33": "5S5yqTUL8P3QETjirJAkPGizW8AXnRPJLZZ9BovZKjFzA7Uov2ZcUDCBK11ojVwevVR9iXtRBh5tjDhR7ADVRxos",
  "key34": "4BLQYZUie3WaMxgWjzXxJuTMa1zju2i2F18CwW6p9zJk9CJno5ddGGkdaDssxiXARDTBNUiEz428Rd2m24mbSrjg",
  "key35": "8B7KTDW2eTfUR1ZbZp1FGoEqynbijeQaYgUmgrok7aVHv9yTEkcDN8STZsTxBpyNA3iHW9xTqii3VXP74PuBFt6",
  "key36": "4W1HkjEQRytxDiP99EtrbMxApbaBbKvCjn4MrNrVFoUcbHkhCE4HfQyfb8uWETtFoYPGrfv5ocpoQ3dW8dWR84ZA",
  "key37": "5TK19XtaNvdeio3ckZdTNLiAydG9DSXPF8cpDcfoCYpxhWddc9Hkmrm88RPBQUhZL1XjJZqXKfJr66yFtK5NKjfd",
  "key38": "2JLY5BzdfRx8xNURtyDcUhGifi6Af7SJZynxCni42tiTaQrNNxYXTUmrquZhtN95kyjWiMvRonAbAyrdCWX8sccf",
  "key39": "2ueQ7KGodUZGD6wApjtxqR9VASF2XgzwBqBJ7Rb53Joo3uqSSav9U7E2bG6scGCANVQT5H9CMpzi3mYbRzTpQ5gz",
  "key40": "UuvosWQXjURqM2JGTEJT84TEvbz8JnXyNjqzVocYK1aLBS5E1ZGGgTE9eQps6guvJRgX6FMJAQgufBU5zzBTwfe",
  "key41": "64onSxDNfWYpC4YY2wKnXQnAVaG8GxuLEzZKDAAsBGr8H3TTRYkRCenx693w555QyXjHt6tbL2BfwfoX7PkvxtL",
  "key42": "3Xkb2CCQ6rWZPpiCyeRJ2tzVop8a3ZLYwVk1vkaQm4bBUaRkuqxt1d1WbQpXkbujuBRrFmyprn2Vp1omwaTLz8r7",
  "key43": "2LxMcgdqTihPs28qQkwiMYY1yE6oMa4yDsrnye5AyEj9o7Ec5wmT1ohJjGYUfP2AkPkoqEEGqcNkcmbsAkcoSvYJ",
  "key44": "3QBDHqhpY3YXjD7YTivqfQhTPSL9VRhM9TWV2snayupCk538QgDQ3BhdHE4jZp2sHfvoG5ukCEKasKH46LoAzYW1",
  "key45": "5Q58Tb43oTJTJqT8gxfWg9SdNkZphpncFjFFi4zEmG1jf9FziQPve2WRzfaZKYwm9gqB2pUWkJYgzWhK2oYrqugK",
  "key46": "4cj6TMQQPyMhGJLK7SeNgiRx8YhnDCUTyhpLCqTmiSFhEYVfLaNS8zSbs8owThsjKJQGpm1au24uCWZuVBx2VLg6",
  "key47": "f4GWupzpurxZtVBqa5jHweX4wrL9i5rw6nZCt4mvwxAim6KgSSzXUk9bRbrdyz1Vr97uvbkBuSmGF5DTh4fAVpw",
  "key48": "3o5nbwgRC3dQTbsLL6EdQ2kecNb98bN9b1tbHBjyKyc2W1wtETUvPwLcVw71sAuwwtfGhRmH22pcZ1Y6LQEAagRh",
  "key49": "5FfmHbUsqWcoFPgzqjBtsRkTS3bdPFv4SiTbHVcSJXr7kt3FWKZ7N3GxrPuMcGTQ2jjnTza7gtLeXxUqhHtLiqis"
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
