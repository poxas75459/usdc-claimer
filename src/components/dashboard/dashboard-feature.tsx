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
    "26ybXpECUDV9aYfBFSSmv6ngK5M9CRvH9bbh6nTLafKPrSa3b2mMJQJrf7TfwcYWVeJSHMTTyTFA5dE3FB14sPkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qKQF13PBiNu8ezJeUc4TvevtqzZBvSTX6snpAdyYj8JxJJjmQTAtD1QFMAePcwoSmQHgvKCjVPdjhnjtuXCFVk",
  "key1": "2DqcrREL62bbkDyMRYyAS8VE8XSe86XA9BsPpwQt76xkRhhbXPNtCojsqVBuyKgcuQR8aSMU2jfvmfRmwmdWprTT",
  "key2": "2dLUHqHQHCBtSRihHfjpja7mfP4MY7rMmBmjtwgS9B4Bh1HiRCx8jsDTpHgX5pEfmam4Ggia3jJKm8cMVEs5T6Cb",
  "key3": "5XAdnNo7V8N7CbrdXnZK6rjeiPLgHHgeV6CvEQHhM64Knr8QbFz6DDpsBnWThpffaPv4dmryxoAp23YVPkdXmzRm",
  "key4": "4qqaUsbgUoxfA8KQ4jPV8McHeubwLypKCZQjtR8jEghpV4RR9N4F3Ae13rnnTnGLFyLDupVWiNDQwehRzmQPbjke",
  "key5": "4ThuRiNjHPFCzcDFhw8zWmZFJNZRBkDLpoT5bWFSpYQLMpGfThaACm1HqyoSFRhjiRAFvqnHFmH2GfRJ3xuRGgdN",
  "key6": "22UGUJDV2gVsAewjAq8USthHius8XSvvyw2RaqxNv661xMR4bHTjhQEpHWnW38zt2Bg5Yq7UchghnxskE7M6wxh5",
  "key7": "5S1zD3twktvEb3CdBR3nXEV7D5BhUzKkRC5b61EcN4rtumhe8A71QznbtqKQZ3FnapPSZps7qhTPW61SumHw5bKP",
  "key8": "3kK2RgkxVgqvkbwBj2tFQwLyTnYPUnKvHYCkAeYFJL5qy1BFoeW7HNNa5sa2LJAsJTYnkpMrtqwuE6EUiP2WEmAt",
  "key9": "3pg28AS4k9ba2ejCffmjhAw7mEbACUQeSCNY8XfHD2hBt4bXziyXpeCrNjYXargv368iGzLaCXe4V23MJooH93xS",
  "key10": "25VxureK4hUMGhUAM8Ao8BRNN5VBxumrvA5APB28Mz2qs94yrqAZHttJPxT1Y2XpYipAvWez2vM1Swj3ZHeJaez1",
  "key11": "2vsUqB6EGqt1bPqSNNeHoKtCcD5uwg4sHr7zUhyBdQtwRsVmf8UQ13XFh3ByR7A5ePESAP2cMkZgMzaUDJ6VC9YF",
  "key12": "2UrYdRY2fUL73L67NpaTztu38VREyVcnXSmJbWjXCB3FdhZ7H8KX7UtajuRHMp2ZFYKS7yw8H2CnrCGnVjbmdA1K",
  "key13": "5W7qk4idKfECUHVfdK6DNHxdvBiqE8sMoD3ZVcxt6Qc332uWRox4jnbx2kuCD46V84R9koRcwEFRHFxG92rjeP54",
  "key14": "iHzoEbUuWWt3Ehb3KKSGs2ELSX3hRAt4fDjB1UPVPirrCT96mdLLVyzo1Yw328gLBBDe4m3wvCxTF8v2ofH9u6A",
  "key15": "5h3soK8uGj78BLfUniJWE1M6Fjhvgduux4rwWK8vHC8mmAxq4iCCSjqYwCrPAjApfvtquYC6mSJrvhrqvSFYbbV2",
  "key16": "4mnpcFpbtEpfV6PkZYKm8UsCZQAZkatK1d9nuixoWpkHK4NyNNd38QZeSjtcZMRiAebVhzo2FPW29v66P2F44dM2",
  "key17": "2dUG6WoVbGAp8aufQSpPn3FCdKSX285DG43Js21Jx2JwQodak2pkE8meLY8Wp5dMfZr5REAJXbpZ1rmT4FyLZJ8B",
  "key18": "391knfUxyNjUh8SbDr9cW6FqWDmyXcFYp83R2CbAi1dM8so5VCuzJw7oMPfWx71M6vzw5iqSjUFYNUipKxGTV4hY",
  "key19": "RRNNaNcHSThfZjaafcWWNAwx2gEBApSJX1xwvjMLGc9VrY3qZmG1bz8ovq1yPx2PwoGL2geWMWBuRe7NH3kNqPm",
  "key20": "3hSTma2YxBnSaihkJzXqVjRdxeL5wTEt9iCwV8oFy9NJQ7LF8zynUPcZKyh1kWj2geELw5aYLavLgyxBjxmqKqvB",
  "key21": "4EQ2htkNqCjgBPBEnUtXLLTGqYjdtZiZ7B7G3AsYb6s4KUvhpgQ638hf5LhbeBocfZM2bUVfgjhgYY6nQkCWNrAE",
  "key22": "4UHv7t4G9Z2pAcbHpRtyL739ZJjo2vTFLzfKkYhsjCAwULSXJBjj9rLYhP1jc6MTxixxivMtyBVQ8eKqRaG4FsHE",
  "key23": "4MHjnCQBFLSm21Ym7TmtrHwtKf6SvSXSkZnWTsZmg4zxNCUSpvBbx3ZH4fy8EYfCFGdgrTipXrUuMuMgrBHLgfAS",
  "key24": "5a7h81sDVRxBBCrgmrc5TewizZPniFvBtoWgkAZiDMQ1xyWCDarwDcvvREerRjWegWDrfcBv95adXu69rEjT1qAr",
  "key25": "SmkQ3AXmUuoAVi1AMbuq1umKCyrpdw5dpTWGpDdKmV4Cp235AyvdoN8Wn8X7NCy23zCbKZ82SS42Nx1hZrShWqC",
  "key26": "FGUutnSzi1ykRs6rktEWW8wuXBRTbBTo5VYo5HaN5tyK6MhUSP8wRugq8toZhRESNbni7z9qaovjeNEVNkC6Vck",
  "key27": "4aU5z68tvBaMAiTZsrZqNcnVsfMwmrmCXTCpfgXuGaTUUr3SmhM9MrE9y7bTSd2NXKin3JbiyyQUMn2QzZ2GUC2h",
  "key28": "2KVXzDs56PyZf1GTYVMhsmsS5DoA7Z5n13PkASbBDjJXfwNDK7mB2LHvCVWsbB64cBXAVQYkRwvtoYyGisK3aeFa",
  "key29": "MG54DoxjcUcR5A4Rf6e3Gs4DsgcgVXJH7iBZ713r5qqXmBa49asqFgh22FzkARaGrDWUXXW4MUSEkpqSSL5xfpG",
  "key30": "VHPvRDaZHx6E1vCTZCSoHCixAPi3YYv6c1MTFcz2mQfoz6Jem3CijHpufAoxi3W43QuQQka4hd9hQKNxdjtdZkG",
  "key31": "3phdooPbMDK6ZAkdnHEehRn3boe5fa7H9z6Wmj6NEy5VEotWQi718fxvYyxtWTNre9Ww7bkZDpZYTtDpxhPwzNc2",
  "key32": "iZZNFXj4rhWR6vrk7FG2R12EYpCy7FUYCTsYDSLHsCMqLLqaz3yfbi4abYcayqXX5dDNswLeaVEV13ZJxWVDaZD",
  "key33": "5sF3SHRpLADq6tgpTJYdj5GsdPtcgTPwgkCG3Hk5MGz364anwZS9k8WgKnwDFdWV8HxmhrHyeJj6ygjJ2q82XYx1",
  "key34": "VFwKvSXbLs5K6PhAyJZSgdumGrKUUsBz67mnwDCWU3xKf4LhDsu9VwcTZXpbEFJcy6Ymis6C5FZq4JmEEPngzC9",
  "key35": "33zEaM3suukweqUcdkBqvG8ZU3vUNmyBetEWFXAVS6bJf28dzJdm8qiT7ei4i1LyNpHyN6ZfM8YRrPgzrVRYTgg3",
  "key36": "3Z3jcDmrAvBxSb1izsa1Sr58paA4uSUthkKJ4i1Ti2BfTKtbEdEJ9UEUgDftNMx6zkADp7peTcVFyMWqj9nrxp2t",
  "key37": "3KcKXUpyyD4RBajVFPbrdCXnw6nMkdURG7XF9wFvLA2eboaAWrp8f2TLJGztX3y6pjTKkCe1ZFBn1yY4h1CA1F58",
  "key38": "5Kny3VVkpPpTKx65UAxM8D63pyY4yPWxPVhYyveTKMAfA3yen9uGX2CBzUfGbvwKBPYYDmwemMDWPU6n6ghaicMk",
  "key39": "2sFYTeMwoWXx2jnpQa5NRDoy8nWSj6mdkZukPeN2wZhN14bVyiPJCrBbRbc1wEQd1qWPKPh1Nr6GzAbbj5KjryLf",
  "key40": "3sg2dcZMYdLSKFshmb5Fc8mPoXV2WtZNifBDST4QC45J7YpwGsJPDjU3etzBa5Q9UaMBivre3CXWzBuFmCtaHRbT",
  "key41": "5YWbc2pfEonAPJUiejMF1CcqKXgY6ergsK3YL4gVhuXNP8BAknwQ4hAAD9n9oHjF5citWQohgTjqqeTAL5dhQN58",
  "key42": "C8aCiipg59xtLVWiTQidGc9HyBwDumb8xgBUhD9o6ySBHCEVAKkymrzw7H1PM8LTouZJh73whJUybaiX8feyPP4"
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
