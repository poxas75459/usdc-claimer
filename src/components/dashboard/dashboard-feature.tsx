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
    "2AesFEzDLRad3Tm6Ubpj5pwAb7GcUT5fgmUUZF9g1iexy5Gv8b9WSwjcZLkcLKXN847hAH8fKnYakg2sPVmNEptK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jYE9VT3hRZVmvxyjgZnyCe2zZr5U3vmord48162QiHf5v51xKGBw1RsAyUy6Xp3wrXZbzBUN6B8RqTwKaqFubaP",
  "key1": "2APrqPHGHHsy6afMJuErpEA5hsDcYkHhC5mea8u9eTVJpvkneyBgcPr3UkjEM7gh3SCaWzJRC1nJQDKtuJDyuU9P",
  "key2": "4BKRjjcroxN9ATb2Eb2m2dCj1CyPHgrxLK6AxvnxnVPeMp3NtFZsLcgvyoUBVJrrMQiAUwbcE2XqyXAF6atYvxs7",
  "key3": "2YyiK1geL1cVLiXcssmMoFFm9athsF4VuXRhHZ9nsAZeasSRppW8EUtZUarrhkjVjx4EaiMsqghx89iGhDzRuEkm",
  "key4": "J6VPwQ7YN1Hgfv29JZPAvjv1KBgdnR4KYR7nW7N1wbBEHMtwVDYb8At3zjx6rLPSAtmyEGB9jnz6QzAbC6Gfsjx",
  "key5": "kpncxz46o1DyjomLZdwnHUDhtxfixc3EGK3UVo1HY9Pu9CVTJJm5dX8xRDA2JGVHh9VdUWB2TNG4683kzmWKTcm",
  "key6": "586tjQ41hSsH3i9RSkWnvUtA2rCq8cjeAj5FGVwEC7TR6oKhACfAYjaVShnusykpqPgUBj2yT6XA3Pc62euw7GVP",
  "key7": "2MWaevQCkfaoKPcMDFL6XugwDYwfeeFXP88NW5YcMgtpPYZZu3C3NZuoN2Yg7gdQyCAk6haAu5D81C9jXEtX5kn",
  "key8": "4tzGSy824vFGTgDq3GDCgH7dmCHttBahYWSyH9XKYBqttx28j9Pp2GSVRtd3amXtuXFmdce5feg9KCmJDvQsdSr4",
  "key9": "KTYyXWZX5RTZi15gpBindHGN5TCXmo7WrnpTuCr8pw2SWyhyMGUeKDdSuKVvHxCLJMcxu5T5WnJD2qf2rVd2yEr",
  "key10": "2WAKU2uGuQubq8RcfL8SUXjUh1PZAjNVNJ4pTTy2NHYhEHZRn4a4SdRvZUJ5xq3wJWZVXT1sVTQoC7sgQY9DYMHi",
  "key11": "3qFn6ppM9dKVCTp4XcFMnEyWuth1XubA4JK3zcaSUgFDxJ2oqtdpgXLSSruQFPJFhhCokyTgj7qgAnBurDPugs9M",
  "key12": "4GnBf3V4SCoLSHsWpS57HHbnU37YMwqhd9z7vCB1wnRoozND4VypBaQaiuAyasR9yiWYjwvVct3LbWBb4Y1jzarG",
  "key13": "5dfdnSraseBYenLTPgaQjmKqSnppKrSro1Vzo23kmAaFeraUKYwbMWoBDQa5BZLa77NPEVZUFy9m78mdiFA34rqZ",
  "key14": "2JacvaAZTbukySFvMs6w8gQzyLL9myayJtFqPvThf7fVCYGDknNzcYjB7sXDkuAB2euqYwGvyoSQ9xLKfY7vdM62",
  "key15": "ZvKsEFHfjvt8QGqBFhWaDLcuLvfTiMTwX3wqxGpTMhZXdRMBUGwN3H7SgJdsKLHSciUma3TZFGnBLDjc2Gmkd6g",
  "key16": "3i1rZHJDszXLyyGHujRR6FkiyxjPNDjuTVuPWpeWBgVqXvVHnRtTCvbZ8BRr3LqTBmPPF8F2PwapNEp5TEJEP55B",
  "key17": "629ySSgwfA9dERJjSZ2iLQCmgDD9cJueepooTSMrpwNLbaQ9pdzFzRVshuwdoKuYJApkAgofCjoQVjQsiD3ZZQ7R",
  "key18": "37gv1qQiL2oU28ZsB6JhiyUyswteT4W5kp7BgkU5zaBBkXESfdBNXQXaxcAjJ5RXLDHN2oiqABSXE2Dg6jFPjKFX",
  "key19": "29ENGDaap7s2RCWLW4bgLutm2AeoZidxXRMTHmq4foBdA1iGL2BwMaP5HBehnd9eFJbtPRDotbdfDeuSVxxn2Bm8",
  "key20": "3GuZs6TXd8MyTCNQ4Etsb4A8LBHhCXFwkvXfirbi8oVF1yQEfzitiK3BzRqdLbjbdBBgCQ87y5evCazUBQjr4zqq",
  "key21": "65wnjyb9p7UgiAmRNL2yhQgEF86qEq4R9KWkNQ3wgw4o8WPRtXGHaywiZYVs6vvSNGce1i6afeizS4fXXsHToUKm",
  "key22": "2CeaXE73eKVfoRzz7LNBPNnTmdXDFac94La3MfFfeVnMCmnJPxFb96eXyDgGWcseQC5FZWJp3CCjM85MxkLYCXr",
  "key23": "5Fw2YGJKAcG6uubJyAdYgSLLfvvJRFy1qTGQrKR9UQ2Lw9bkxjwunF2prUHJXPwxrV7KGgaqDJT3ccSUW932MUA5",
  "key24": "47esf9pMjjVHZEnomF4JJnD6dCo3THxuaBmKA9ZE6HHyUgYxPmHaZy2ZKtVTLzPQs2cPmSRTKbGeeR3Hdu5CczTG",
  "key25": "5LMBT5dXRyZPmeAZZvdmGYQ8gp75FP1295dSuXj2MgXNbzp16zBxamNVjp4JqwLWPuntWfdU2Phwibzv9M5mXyhr",
  "key26": "4bWqUAPuQZPaNsc3EbtMxg8KbuaEYxFzhbSLzCugEtfh6Mea2pw3Cm1ftZHQfAGt44XHxWBCYt8XvkJSZqhJ7af",
  "key27": "MYNa3RCLeNwryAp6uEA8WBD6XVhZHua47L19bW4bbJbn88LxZ4dXYPiTGY49rvMi3TH6b1MfMZseHFeyatuNvdt",
  "key28": "3Mwjtoz4KR4nfHzg6zEvLFtdqR2fTAem82hJndTAVf2f2jHvu4qdHw9xa5Q8xiiGBfnYZWLiE5F2jefREMRUsu63",
  "key29": "YVVcznNzVUNG45vLp2z6Q8UiMyS5U8T1yp1PPvju21WpnyoMu4cgkYeeqM5GroRde3gakufz2AAduoEEpGoiHyj",
  "key30": "2Am6bNtXgHtabFRuUeyFhLWkUDSC9aUgXJnVsrRgQzb31tcdZ1nXz2e9iQ1uAUFAW3b2NZ7Up8rNKDQKyeG7yNb1",
  "key31": "3Uc68LMN5xbcaNDfw95XFjp8N1XuAJD8X3WEBk2Yi1Zzq3AWHzmkPaPbwYL4wLtAiPbxPc4Pehqz3miwDTduRdGY",
  "key32": "5q8XSsVXiboASqyqTR1Bw3GMeRdiudDFwm1GB8eQL4bheQ4vbMXGefcu6G6fbXbDDwwQPEcebi4RkGCtwMavCZug",
  "key33": "58drTHaqdGbFx13Wonr1ufL3xP6PHCnFyWNbRiwNsPLYHcAmMyKZcY3VGhxxzV7SvG55SWHdw1poj4nVzVgnwztJ",
  "key34": "2hfGDma9qKGuY2f1zkS2wF87ab3WPXX7Ze1HMe6RCPPwvWmRYkUo7XUa99e7JnJCKRq73V5cHv3QRLKuGKpPJcWz",
  "key35": "62ixqXLKPVU9ouKySVrtqqw3RGQYAkLfwovWMHPXhuupCJZ9vdyFeKmuJhcZo6yesuJeJ5sCwPF8Woo1DPJTmxpX",
  "key36": "3bhm1DdAJM7CCi7gh8cjLgu3Xeopt3KZ2ZqWHe9vxeCdh6YyLVgwm9G4f8rV3tniuAKurWX9KZK71eamqq96Y9cy",
  "key37": "3EPuRgMW4RiKkRvpWdvS39s84Woh11x17b1XHqNscJMXN1HnDASMLNp41Jvc8MHrYBYAYKZtmCpmUgW3Qpu9ShXY",
  "key38": "372V8djHhAnxjabr65HBeC9sBpmFFA4w773uWLqHGViu4KiqyFRqerUMhKdcmx5cjnptHZFa5T3NASPEJDzNs6W6",
  "key39": "38XRUBDzR9xoaN388iF3vJ8vv1wbJN7QALchMUhu9VLjAaKMHM7WuZiMk77LyVeF7pwi14EhkFiRzKAoUGkm5WmB",
  "key40": "4kKgkgQswPYMkCRQTLhLLiUErce9VExAqdACyzA8RSZm5HgFM2KFVLaW9gUNLCBgSHdH4EEtXT5ZwEffq8hEH24y",
  "key41": "2uohAY1pCZxKYX7Goc1668SVM77qQVhLbwpEb24pffpf7dm6W8oh39HkpLhLrLDvbwEGRv4TF9Uke3KSZjtSBMWM",
  "key42": "4Jj9siErmYk5LimsKkFNyB1QKooPuFgw3Qrw1N8rL5n3GRmQb1WxYVTEiCGTJzhYwGTph4wD6Ta7Kwkryzg2Vkj",
  "key43": "5uhnmFb94RLz5cXCwaUx4tonJNswL15Lk8iJqXNHvCZH5dZqDvRxPuSUhKsEbRv3ywpKdeDyifkna3mB3LhQcjUG",
  "key44": "Y7ST7WtkgYQynjWpKUzRtSpB5vSixbxxf2UfifuGBda1qhc3FenC4D5SAWVFkJssr4amWH8hLBi6HBR9eow8jFx",
  "key45": "3j2JX228L1BKzX1uLq3p3TPRwTgPtcPSXh2G8VgXUqyCfQL8je1rekAsWMqLPRfBbQpDwU39hPQZtvuiwvNnca4E",
  "key46": "24SGSCpBtn2N49WACEgCgHfHXzNmQvbdCzAW4AoBe8K5aKsVZonCE2TmGRCjEu9BWRdL2Ekp5tPrCPm1U2Y4FsUJ"
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
