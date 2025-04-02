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
    "2BH5MUVHWHkH3AjRJ22MhEV2Fs3c27YFJdC1vGmaqXaD8ynC2EBH7KVkKMeEQ2QHfNftbmFPDPgrE64vTnPJE1kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sY6imYjYYtW7FbBU8TVRy8i8QqiubPL8VkK3cU1dVw7ctQgmoULxto2gxVXLrzLSEq4MSMTKgvptYqEguCu1BQU",
  "key1": "eYF6La7a4r9bpGpkDKxZhXkofP59QauD6NF9WYiVGW4xZ4JYgwUVb7k5pgf1ravMe4aPdM1d2iwL9oW3zeXnhp6",
  "key2": "5q2fiDuLmzDpZhzeC7AVrwJcmrAtdY6ArpBKfSMVDiPyvXhvAiNfWKiRMJNiCFtbCWmx8zYxM6f5aauAyDKXoCe",
  "key3": "5YVgXUufoDRR2hUQHHmJbb74STJb4dUEZLSt5vCAvPRwrpjEj2QH6NYP6o1HDtmx6ZvWBMGqpPjbKYfCakUux4pd",
  "key4": "5TWU1nsJD2WnKx5FoDnQUEVqaT8XU6Z6NzCkcCgKRNxjeu8L2zg7722wCvyWrrKrm6j8DpRQkrmnCQGKCA9Y9kRc",
  "key5": "5X21Wyp7ZyVDLtfLKPth9NPtP3vp3nBp1ErFwAE7qAVR2DTtqk5rzxGjrsmbL6M7Eo6EB2SE1mTcwHcaHyEHZAcX",
  "key6": "3KZbSQc1fbi1ZmydnK7ns9A2ush9jFQbirF6NqQN31ZX7CYaSfUPb42TVXj8VhbnxfG9o9EHVuqbvEqRsDk7WAXj",
  "key7": "4ut5gTLavtrhSjr1ypgj8FyXFsrKhxkPF7JsEcC1b4ptHeELZVuomv9mRFAmP7CZ59b3pScZGn4S7xH37Ka6xRQx",
  "key8": "52vWpYTHSRfkyGX8Q1aL5yrhrerucGwiNtwU8mu1cB9T989LCwuiFZx5PXofjPCnnn5aWjfzSSpfUdVHvTj75b6m",
  "key9": "2gmu2Q7hJXWUGVEUw18tJd4wDN4cNA6yK7drgtY2zpzYWuk54QB6buieK4MwH4iGW1zZaNULbyUBkkVa4adc1PW7",
  "key10": "3V9XS7my584tML8aQ91w8GopeMeJv83eYGjoY2arbJkvB3x21i6XxUR2Jp2EQhibscBCcVUqMQUs4xf3xPHYZfQV",
  "key11": "5F7xakQiY4EBggngAJ5jmV6RC2h1Wx7kAWdyDhq5ye3WLrwcqJdcsLoucT9NP6TBJrr21JukRdKG8FgZE9bCHfbJ",
  "key12": "dtCo8jEeSGwJi4c44AGmWCM29FwiPTax1qLpUoyNHngRoA8q4cobEePnZY6r38KqkEdN9RW7tJbk3hAke66Fqdh",
  "key13": "671Rhr7TesxmdSqCMK86dtWNUuDGddJgCbaVPhrE84Ep3BxABvNBgCbwCMktWSnrn6jzJPjP2LA2SnG11PasUd35",
  "key14": "3AbBDPz8z6aWJkFkyEdJGuad51SZ4waB158B8wDP3DPNxMK5cwrs5iueYRkgRpTkJeLm3fgC6uikNo3fF2pCiRf8",
  "key15": "sejQJFZEEbV38tVrH9in2sRbwAaeYnB4DiYJcBbFwTPmDSSJN6eWPxRL4gJXEGmAiipTDifSbK7LASuFuG3Bc2m",
  "key16": "98k6cSZ9urwBV6KyK83qSEh9ZeqDUwSrBL9nH4yzNvWic5gzuVxrAg6gmTJNfdFh57f9ENBCbxoNGQAYioiCf2N",
  "key17": "4HnhhFYFJ5nfi2DjLT7ckxqtckebX92v2Aix1TG4TYm4eUiVmLdaCpQwFH6BfTodH9Pkffh6amJjS2bZQiuRXnqH",
  "key18": "2VzQ4bM7KmL1PCAvnEEBiKKtVVWCtxWVQivDz7h9DPGyoP8X3WhtmHsaUH4ywk4PQQBZ5vSCLYWitu4bg3fnZKB1",
  "key19": "2NrvvW91bpPxDHtU3BAjqZPvsuGmor7ponrZLvBBHhcYvMPQHpbjkk1VsFwwZ4wDSw7VGvhYwThVJn2aKyGvtFee",
  "key20": "3ch8UQWRV8AYCfJ4jowMFC1Js8QtjnL2aDgv676zCpHCsrB5updE3S6cX6b7R1E5hzr7HWEffatsEKqF4kGJFbVP",
  "key21": "5LLAXGFiT6fCT5jyAX58jsjFpet2kT3Hs3h8WUWo3HrvodCvorB7z5GwXbFcqc4VZG92gtoHZPLa5pgtLAeJmux5",
  "key22": "4AkKJY2VtsbJV8pKiqxFD35bBxtYypTcsAjMuzTpU1RB1zay68CVxxNqBG9e1gfcB3c7M87AfwnmaBFwjyLpC4hf",
  "key23": "65WMLd4YDPEkaEaXjLusrkZ3c2Nu2dDfzak9iqg8ggRLSjv3PXYXGBhYt8Kd6nWqW6X96w15Zn1hMkTQK1wuMGB8",
  "key24": "4HFBMv8xGjsvbFp3UW9gX2w3aycmv1e3JhkNCeKGaKSieL3xoLf8UAyh5onyjCu3snMhNFyKbHJ1rkPyQxGCbnW3",
  "key25": "fGNpMQJ7W3Piexcuwj38KA2a6WAjnh1GumZC6VnoRC6J51p3PReq8GxB1fosS5FuYbC1KHySDoCtwK8a1dENrEn",
  "key26": "2ZMYGQXXKiPoSiUaxpQrXYTbJirxegQinFj8TRNWqnRoe3Hv1M5f8NjezkjdmSmgjBCQwERmAdngnPUFq2nwSeHS",
  "key27": "3VaJWUKePq3wc6VTsMqx3Kp6B3T4PMchd2svyscuLCzwjadG21VcrGvCeRC8zJ7SKmpsyJRwG4yUBierYrr369FK",
  "key28": "2ymYoiM5b5R2xVv8LwgzRmooBuU9xL8ofwjRiLdy4NbsBo8sp9WGhQeU1ioThMrg5MFbnN9rbFP2wCGXg8MhFTJA",
  "key29": "35kJFocF777APNGxcPFthrXKXbgcXXt2PdYbcLu1LUXuJLTCQmc7n2rWirRo6Gmj4sQW1xigH46iQba5EkUTEvGA",
  "key30": "nSPzhRBNZGRAV7g1MRZ3LCxFsdgMP88zQcg37pPxsJUoP1UuTYCDEjJQ46L6YzdEFp8MermVxdSYWymYAtfSunL",
  "key31": "32UtZVFiDXa6pbN74Mjo8JDzxoMy8xwNnwWdy3JMqH1uLKhuy5aprL2aDBoXa4jqBmxrKoVfs5hxHCsfY8FfurKU",
  "key32": "4x1qquQSkRheXNDy5rw1S15k4LY7yDGZ19cGVQPA9XY9LivyHcZ1kgiVEextWBLdffgtofBYfhxhSxNFJJ76aTXR",
  "key33": "NpHVjYwhswqUk3JW32sE77R1KNXiMNpciry9QnpXDBV4i1m1BgFXxPuvG84TUbf1on8Ftcw3quytVzvAbwaGkvj",
  "key34": "4Rxvvu7YgxzJN9GbBfP5DtUJ1LrFosaSeh3mFXmS8fJiB5MVV8SvY77EW2EbyteBCjAUvJ13jvs3hUS5hBv87nBA",
  "key35": "VDeaDR7kjUbxLSF9iCZSJn8NqY1o7pm7gNEKSwcFECzX54QSi3ze8wVD7dfZ6FCFxL2Y9u33YWj7jkeEMsHJRRK",
  "key36": "5d7YoHva4wxHeuJsahj5k6wiagjYVnni4rTves9P6C56Cz2qkEXoYXck718BrHvYWevGGGh2fTWZNcgcchWfQnzJ",
  "key37": "4rpnuRV7vy7oCZGDNLZbunfRjHB55CDA4PAN3zJJuzdJg91LEqne4zX6qWAQBbrnTScneapQVypKfmDSizq4y4Hd",
  "key38": "2gHDFtcw4sSq6uwzUxxYEhUEaLHqPS8XJk6WxBbsASV4DWUXLwbeHhqou4bYRzit9CP3GJ61VsHDDAonN7RGDzw7",
  "key39": "4sABAahiAh6XFSF7rE5hKmPK4NKhAMsJn7RbTsdUC5tvsgcJUkQrg9PZmHDjVi6piH28jf7mg5ob5NAKiL1Bau4o",
  "key40": "V2bjNbzDfda2pnkzRUyHwQ4e6LMuW397AvL3cKjz6WX4HKaiLzp5hsF8KxJZ6bfxNzL46aMSL8dwDG3xUw8LSCP",
  "key41": "5uZ4FkrWZv6ocxGs3UbWbogMC2bGExcRfRT9bmMpsCiKENEZBmuQj4LedmrQzHQ5xuAvUyaedKz1x2LGCZ7xAbBM",
  "key42": "3iWsCC4ugubKaSuzd9zAxUP1iEsNsnwGE44gSabaYgMzTEmsfuNwc4nw6bPwJ2mGQ3yvX6b4ZoEYuGSHWKesDamk",
  "key43": "2Kf46fggYN4CXcu3p5a7hzcdz1DfYxnnbpHKVUv4K92bVqWnTHnbPF17jZXENzVsL1Hr4zfrgTALi9UWEAeFabuQ",
  "key44": "2R9ZQ74Nb5Wn8eRPuESQRNDzXkw3fwcicZRqP3jvoMnycEZmFnFfkHZLgQASCPnQS6pNNuSpzNrsTceuhiRXEY9k",
  "key45": "4XuU1weS2N3P9AidABxdHTT5rhUEheZvh6hYPzpiqkGW3biEEC6p1zSA15vHfejdwhRagSRzciUAmPFh8J2qsAfZ",
  "key46": "25VYsaxrpxhyQCVpmKrZHyiyD6nfww1GXaVVX9kmLZxp9BiNxr945fixpg4hmQeXHJWucCQtM8WHdr8SsFrQ5oDF",
  "key47": "213WRwqXjeZHMhghCsFvr9rYfKmLkS3hRtrX67LcoxxomLXGmw9bVrAD6AUFPaTz6ftQ3j7UGFdSCdGyU6MB8sGD",
  "key48": "3bkFpwVfXTJ6eNUnDg2c4kXiZkNoWgtY7fheordJxwBVukPt4SZGKdgagKjyqd1hCohdHy59wWmzsHAKDnvvjxm1",
  "key49": "4oFCuMzhRXuvn5DtjBeZLkuWRiDCyetq3cxwGLqCW4mKcYyE7qXCiGRKKFGqFFazRAuMrn3hAoUtmWKgnUMUK6WS"
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
