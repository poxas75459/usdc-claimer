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
    "5J9BnjhvfznHXekDnw51VREUfc2zp1Bts9uZ6DeVT2GEXE5TA6tFGf2nWvgaiAaEaN4P9Zo1dC2fq7UER8sJhYcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65MwzMTKfYWVUX3hMwRUZYnBHTioHuEuDAd8FRhNUapiuCHB3RFY1GPpYMgxnxdQzUEjew6uGB7EgvvQVRqEMD1F",
  "key1": "4R61yEdEBJJLryoAQjsgiV3UYS6g6afoHp89gtKsyM2EabKraPdJqc3UVUPiNbT7ytV9Hms9LGP3yt3dUdECCBdo",
  "key2": "24GP6hU8cTU19nhHPh5XXKt6jhwqfHw6oQc7uuLHvCfakuYAmjkCVDNpP3QmMvbtRvXExi8wncy1s23EqNMb2TUW",
  "key3": "5m9cooWXUZkBnn7dBHr7ikQf2BX72hsRWvt8Z5dnnhxXJx3GwZ6XRR5ggqSP2zz4EAdSMSSPDH4bTdp76X3NyJEg",
  "key4": "31fWbHDyGcPYYmpBZkRHPiW3aNoZqUBX6iXvvzzPdbVqTaRyyFCFaTrpiEdho1RBJTAEBSz23tV1M3PR5UyHM8Jo",
  "key5": "5xjWdj3Z549zC1ahAx4Pvos6ozH7Ldd1ogqk7E5xrreYDdhmZMvejL7B7gg3DrEu9YqS54p1eB8GUJ2ttqcCHnWs",
  "key6": "2yfdgu5f5EqetDLLDAc51cmzGKEHDUaf7rAadwpkKdUz5GaiVypeuQrGE7w3dBXWygoYSUH7oaPVVKk8Z4A6nWrr",
  "key7": "66B2xxvGnuJJahY4Bjbj85mGNZRPzsqKtfE8wpMoKFCKfNa1j5P3okHQnybzAaHABJZ3YNJNQSGCwy6oPqcqegzD",
  "key8": "2QbiDd4RLZUpiM4oHMEBrf5WHciAxMPPDZbfR4M7hGREyokpq5Nrufg8U1qPps4JupLwPSajGuW8Z2AL119t5nT2",
  "key9": "GHDQbADGyghh7WqtDEguAyLWuGy7XZ36zZD4ddFhrmmCbMp4QbxCzLEggxVePd41nwhCXuxkCBm3qUfRbpZb1SW",
  "key10": "GDN9EtdVeRjLKPKHpxHVXUn8KJ1ioXdRBLi7phChNxoAbey74kuy4aDoJfLfgjBPCXU7H7cwFS7MmQ1ePMe6rrJ",
  "key11": "5phW4MFofXRghXS4DHGX73LeSU8r9x1uCME1ZnV25vxWexkzgX9v98UA2F4ZkosVvDgLRZod2VKAj5w8cLzRJGS",
  "key12": "4rgFNYHn5J2Cnf2VSwU9XnXqJjmh82fB4pt9t8o5FSzTXzciGsWd3A9y6pea6DkTTtExGyFwxKxzsv7cCfZujkRq",
  "key13": "5Li2bvSdeq7MWmB9KQNm4CLUbXM3BfJyenTzoyEdwf1Mi836sMBr1kxuDWzkXsyo7sQ5xoN7UiFsemVYFZWFC2G7",
  "key14": "5fFmfxTjMco1NuSah8yipX9RCo6NXCPGBCt8aRQmx5oZrAEczVmFP4guNoQ9QewnzaCeAKdRTj2SsksybgDDCuCA",
  "key15": "3MJ8ZdSwU2iZ3xfX6NbatdZgE9ErKFVNNo5YixukLr1WayeciRwzw2BZ6GSxASSWiyT1e9BuToiNpaRwZEiJYYui",
  "key16": "4PZSS8yCkjutbduDUEoJixxc41wVjQUFANdNHcmiZxGy6zauCocyFd5P4LC5nzAwXBkWt9kBsvm9daS3A6cBusb4",
  "key17": "t5CxMUfmjUMB1ZZ3DcrGdHv92EjDieGDUJg4NngfQi3yf1hxtCKN3u3GqbEX6D75m6oEfUERqT7FWycAq63FkmP",
  "key18": "2mPraQFBtUgBWqktDdD8QsaFj6tNkfMj7ECSxrHBpVSUhb6bkZcUYk8GRSsVmgbrsRLuwANgUMkAX7JnT4zUCndi",
  "key19": "4aLY7kQnTaEMjBUBCnFSnAPS1o6b9X9VAvobgyyzUVkx8Dq22oFrxcY3HbPD3X11cWeCe4MkGmcvcgTJPDPQcsLP",
  "key20": "3DdVVHbsH2VW4YqQLAASEqdY4yny3v3fPsABCxXVsm1Ww1nwXNBffUFtUHzLPhevZjaZQAmgHTuH7uWGDX8pn8tf",
  "key21": "4rooWPbXCkLKSpRVbxcN3zKMoGG2J4UjgY1vaM48eC2uyaKStu1AErKpdPFYnVqpgufgn9FAUppAq3JE7wT5TSfu",
  "key22": "GxKaUE22KDnSNub2Xu9AbkHHhLZjzEyLpiCqKzpGBYh1DuhHj9wCAxZ8ASz4Zc6FukE6PU8orWVEkhyFoR2cSm4",
  "key23": "5YUL8fVyqh2rxDMfnHgjF5FRBwcG8BxZFb6SMVvD87YXaNEF7SQfXsB63CifR1CEkXodxkQj6f4zufiTvpwn3ExF",
  "key24": "63LQMCf21Cy6cQaQEUr3s2yi8X4KCwmDn9KibYeHrtEnWSbJYPgTWDkD3MVwkb7V6to5Xw2C2hwuKAdrN9E71n9V",
  "key25": "5iEFT5ky5yP48tAwcrzki9RuHMGSzjbzhoRFB6RJCjdJrfckvmS39HgN5UMU5FgKzkX7NsNeE7Veb7hEBQYLCckX",
  "key26": "aPGn7Pga7M9gADho83KptAdFuosjbfUKJW3GAC7Sx4eKfRxWPcmbWg2g64DJ8oyagVpCitGm9XJm9xvTFRvp3SY",
  "key27": "TwpZ9d5MAuovbQDiyd4TDhgfQZTVAZeoip3fRRgJhazSzrFrrvZBpkVPnPxS1MNaBZk1W5Mznx8LjYPqSS3VAWk",
  "key28": "NSjEGXL4Bub7tmbwj8fC97RHw8JmPZm13oP2YaUzGHNWXFSUfLqPY6QaCBDuJktYoJTMcyVGvC9ykGFPp2Yd3H7",
  "key29": "5nhyvR3yVxqcErNYHSHRYiWGpukGHaJVcix23yyi9RRDt5R587s1NWxMKrpa8k1gBRzjdU94Q4R8TBR1kwQoEtQ8",
  "key30": "24By7fVavd86WigWHPMQ87jAzxngdn3ugdHKfSUuwfjRcTNKkRrqndK2QpVoNpa2qbbHC7QGoE2JjoH2cUHq8H8z",
  "key31": "3mjaTU3u8F6jXCakZHfLREZ9HicrS8x6Q8WmndP9saGPaNJDeTJDptiKdskYWZDr3rQHDqJdtDHFFbQtRj42TWxQ",
  "key32": "2EPD9eJ92tPKfXXRyC8dmBAGbqUfGyotWaDRDguRsie8RE7yvn4AexfbKmrmedpX75KZFnyTnkJA7EqQChvvfMVL",
  "key33": "5Dd2ovF7AJgwAwZuVz66WuBoNRjktoDMzUsHaVdcBYrUcrJEWKk66zFJr2xsCJBW4FZX86b5CkQQ83tfNB7v9TG2",
  "key34": "2HPbto1UEAGoecMANHncw3eVqa7DGtaHTyw9ak2y9xGLdSTwNGti79CrhEJ37GT1Es7PNNwwh5f3UPr1SdTLH7dY",
  "key35": "3yEsUx5EUjoEfNXoqvq9KcoEJYZnSnvWVHGFoNAqymCrkGdaW6yZucEc3MsubDScT16C6uKnX1CMsMhyfotz55G3",
  "key36": "5QT9G6Q8LgaFPsY8HuwBjGoT82zDLkQGjL4TBWHix5GWY8bezAppfsvdF9J36z8kMTMVR1QMi5pUmB2npFhkgbGS",
  "key37": "4bJ3eCi3bDM5iuGg74PrXMWT9DVcjt6vWiKvEopDf2wm5CDaYFdSur91NhcTuV78jRkJkmCV4d8tcycPde2SdGGG",
  "key38": "eywhrhi1W2wwX2dM1f4PFhF3Tp1zuDvJ1cpaZnmXwaPDXujzVWTs1TkJdLCd3Huas83QrRkZMbgGEH6h3PbvrGW",
  "key39": "54n46G8mfeaTUY4iAzkWYXEtXDvncV61eGakKCEvjR6tea9kPDT1ZvKaUrhzksbFNtD4tGugg6uQR6YGwmnxfho",
  "key40": "3NRvEAVpoMrZypVWqWy8fn6Z7kUaeN9QRgFdMPJgyGE46bQVKdEXiFUshFzv9pmNiWE3voy2SYHJusJo9vDLpye1",
  "key41": "3iT76F3Q6m9gHBUUKBo4DBoLyFAwtHsHNy8DhXqLJD7L6o9nHRTEva3nWHMKT3P6vWd27gqDEaBYT2spxDZ3WCEd",
  "key42": "2RviPKF4kFW7wbb2gS7inhoFjDh4v8zEXkPbsfM2PbRRffp1DVJc1fJNXruU9hZ8KBS9PHVsJ3iXZbupPHjT45Mv"
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
