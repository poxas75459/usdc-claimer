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
    "aKyFXWNSgNhWHjaTKzL5Q3CJXC7xodUX3khqS1ZWaFqaC6VMVh7AC7w9pE22m48vWExEYF1EfLhhhkVneGafTaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tDjNYv2BJUy1GAeL45w8snmCeVuQhMC8cPH52eE59WE1dJEJDwt96GmvgDbQc5i2rSy2B4PssdqBb4BKf2GLMX",
  "key1": "3vsyJerynUoFAzXb3ZKQsS3LW8FxcGSeakKEHydot1hVo45JH74Qjcjmtt6ExYw6wLLX7vFjfCAWQgNuoBhM2KtB",
  "key2": "5N5JCWmBBnDANTh4Ama3gJx8Umo1eKccs8bC5bWdBd2ZMn2mNx3tFdYGXrd6m3NrywAKqovyCzAyDe9TBGnSFdWN",
  "key3": "ywxtHySx1os7agyXCXQb6NZYApTCn8rnV7xNPj4dFx5dmHpaJESAoJwaTkvdxxRCmPK3kacT3JYn4cPCmNbHn8p",
  "key4": "EaxtSqHVszxdbKfeUnfUo5BcKbJNuTXu5pAobrj4YRmyoJMTbdoSiPEGQLsELNLRUrBoJxjaw32PQLChgcH4oxV",
  "key5": "3rntPRWxQSjaiyFd9VBfB7VVHenx1d7yxYkyKHaYXNXtS92AqvxY1peRnzyBKk8ZgMWuc1asmSZaveNyDxW1QHWJ",
  "key6": "Zifaci4R5D2cDHs4C7Q2deEvBoANyCYErcyQF6ZtZ29dhZ4xxnmzPBAV7PFqZKEX6R4seBtCyxNAcFSF2gzoAjE",
  "key7": "a3GFWzbmLS7gxAHgp5V7tADCgpBCtQnWK7QBh2ET4Quz1M6f87eoBJMW3eUskequtNy76HRfqpMZH5sAkRCmmbM",
  "key8": "xpApuSba8pT3a9edD7sWMQwQ9sZ7SxZRpR4LZDg4NnaUmoUiEqZ6SX8ie7v8hAvCKNXUsjVsEiARb6p6NdcNbBD",
  "key9": "BTwXhCQGMH5yes159Ekn2z6apPGcuFBE8vwsD8vSJckzBLN9HxYoVttnVmXZBRKyVSobiwXEVAV4KJzQY2iuEiS",
  "key10": "5QAp1ALuw1nSYXZmTqYYH98vc2SUsoUnrv54ZaFw8385N5JbiH5VE9evR4avkENqHQKvcQqF3XEbrXABRsEK3jGd",
  "key11": "hsuXr5CxgoGAqGoBYELnHfFMGDvL7q4jnbtikv5EdvAumkZrSfuYXJVZ2K4vCTs28mHj66XApXZh3CAf9YwWKzh",
  "key12": "25UJ6y5BifwP32Mx94GNyt59Nr6jXRsN1vPZbiXDh31fT22RSbFLSjNtb8BEtT76BonGKgxkDiHdA64gb2HnYq72",
  "key13": "CiSDwK975NLXLD89HyMcBwDjLMSrzkWvSENDbVJnohjTyJmhh4e1mkhE1KBrnnBrbMmSpghjgGCbyH15u3DQQg8",
  "key14": "4zV6CsXTg6B6WKvhLAAYhqPZJqy62eUSECBN7PPSG25z1bNcwPNJymCaPmg4jTdUojsGH9rAyt6o8hwKu9Tc4v4o",
  "key15": "2i9pCvvKAz84o2rNzp4oW41os7VHypHa1txvDQxXYs129cUspuAgu2UNgj3119h5W3jag4TB1RpT9e1QzAiY5E2w",
  "key16": "3QfUp9BpaT3uBxPqvqBEjhncgWQMiapJGRVi9bAB7x9Gx4Shmkwx7EUkm5KrY3xwvo8zMkqSjsL1qhsrcBk3jTkt",
  "key17": "2kGP4BvxNLJnUPyKmBiz8pjzUWoVUeY397sFTV3ydgBGferojHgRChgwb83MnTnLfZG3o6SnamDrEAdJs5GFm4CP",
  "key18": "5BSFT14SDcbVc6orymon58VpW4ahCJfQp2M16JsCWmFDoLcwULki24v5ncJX4rkGcRgHvpTDWTWetFW8tDQyfnk1",
  "key19": "4UQy4jNdkQBuWCLPEu1R19qjoc4iaPWbKJPbb22rVSFv2KtBD9iwyhYEXK6dkN3ix2gUpV6mUQ5wXo7Xn5JtJKvk",
  "key20": "2MHEQ4d9eHEzPUbMik5XXQmit9zx6uyh3AWYvah8auuNSDodUcESPnYGpKQ2R9tg5xcqa7xEevXkf2Edheh1zJU6",
  "key21": "4KkKWc7UpwkmJhovPN2Wgbzp3BTnKhjKqsXGtB9ofWjSpBcdqjRRQr62qXvrhHerbexn86Numm3SBLptv8d7TBUT",
  "key22": "3ukTdRnEQ4HDdm8GmKWigDaN8o8cBHi2cSvcivbDfrAMVkgAx8Us93F3ZmRd4MgFygfZ3TSTthFahuePM9Px1XY5",
  "key23": "3s5AxwpjwHW5CSsiDTotAoBYu7oFyBGeppzfjx2nnWSmkQbEWzq3n8KPvicjcPM7UB6wxhLNweYwKdNWZkPATEr1",
  "key24": "2fWGhEnBypRbHvR7Zaw7XagvTutnkxFufDWKU6kMAALTkiGegH8qZP4tkHSkCLxzfPrvjdPWtScaLXT8gcrSXmUT",
  "key25": "5efcA9gbFvw8o3SKwjKPnFM2GzUkyadFKz2B4hjzxJKYmjYX7KAYF6js8DSoxDum9D3yeokWPpJQ3QYCAdNETxec",
  "key26": "5Hgxpq9q8W2Fnu4jowrXGqLcDKuUJxd4md1MzHAmdmw5xZTPGbgXaENW2uhZcfWguEn5cV459kbxfYUzpcDrXbhU",
  "key27": "3sa6RZ1HsK4EnssSqLAc7zCgrKBp6CNjcUzriz5Wi1RZN8QgRW3ruxSLGabupZEEKz8XxqKbLdVob4HvnJRhn3C5",
  "key28": "27EqB2MhXKZeHhgckRi7CddEQHW1ArGtYZFCwBmpUtxcYhEZP67K9Hd6tZ1whLUXDP6a8ard27jqMrYXnK8BqCFr",
  "key29": "6H4zDDeK4n8Tbw2xHkyripK2UVTZNZYspCgX5xvigebh81f5bwbZFbYKoF8Y8yZVX9na34pWrjADiKdhnNiyTaJ",
  "key30": "5PKvk9aUHK6cebqj3JTGtdi4dww9tqiZhwxuB99EN1kt6oBsuFYKMFYzQcUc4L7Qq9mGDjofmqqqRPypVp3UMRo",
  "key31": "rDQGsoa6ueT4PNtwFimiR13T8D7oevaRAWivKsh8LAoGAErxnPr7wGFC3QoK19Jrvn3zuCWj7h3nxzFZjruSXHu",
  "key32": "36iMMRz24dVMp4k96SMEEUZDG1QnGWiPVL1Mds2vhLRjEQhfnjgj6go9857QAqN88uNsjvV8rGGFg2Lug1WWHHMb",
  "key33": "41CDk1XTERaYhBr2KwuTq1hiJJHtLfdnjyxFe5oMQHgfcn6p31EJgGtFVogZ8R7m7hymJfH6w9giC13SJAe7Cbnu",
  "key34": "5fEzonfhb13DnJsuXDLxyn73wJufzGby1djgPQb9FCebkYsYWc9HyotRuBtJe1zvYTLbV8zLsQeU74h3V1ubSynd",
  "key35": "5sdx13JZGsDPhvdFFLip5aD6rpEkh2PRqfVnALvco1h6p2CisuhagPZPz5YyfX6tGqc1RvUDb5JGt4MHGSzmiuzA",
  "key36": "4sAr13gFxYWWeQw61bkLSuqF6cZ2MqwLWvKhyZXWbv9k4hryNgW5vK1N2dUVYwcF669upXmCHc8PWgnxVvm2Txpo",
  "key37": "kcLsyBPYYJLAqY2pRgL8GoUeRsvSvT3v7gLL51LYSc5CbRtW65K3vALBRGNWCw9MXiY7jMf45KJeB5udMwALPPW",
  "key38": "59MxE84vp2XfwwgRTzzRKf6E5bVnbTGAmAcNFcLfh2ADaVCiJB5thQ8MVK377eWGBqB8QVJfjwbNY6xzTekmQJtn",
  "key39": "21G9njsa17qVYDqbXLMnqjVAdaSqBncHBB9vr5FQ7oYPEntLwu2PzAFU4CUyPELmAknL2vxLZdCoReGHjXV5WtUG",
  "key40": "5LExNVSaAdz1mXxdfN3QEgb1X9BziUDoxLy6m2iBcM4BJ6P6hfKKZkWLNDZqNUYp4aEKbbZL2Sh1yeEvRa2txeXs",
  "key41": "pvX9FVnVap4Pc9oHSDcXgQw9RTQRm35W3b33nGgdke1XEd6MwYs2xQ2GyZPx32gBvEKLaYSRsnctDvBMs3jSnLf",
  "key42": "24o7PgGM5J7iVaL4YP3eCgLPXGHccwnA4EbfKiaGwgBAnvbFfHFJgjKAeVxDMV2oUnNyyCmVVWtxLQ16C8bwrCQP",
  "key43": "5NQhhkDK6KuDUpvcUMFTDiwv5rWUahixKxSNyvcAmBKb6MXG1HAa9rEBU8q9QeQds1vGadURDrEy4k4DbWiXK3Fi",
  "key44": "4Tj79KrXmxo4AGMEm2CFcY33dpthxouCwb5kCyDThQXNNaZT7vzBUVTBCWMvwG74KfddQYjD7RhXQ4BAGKN3vo2V",
  "key45": "xAYP2esKnRBJYscUUHA1EVNwsHJc9vq5a7ChJGADFKyrTfNYq7C2TRGpGA3s8NWL3UWQCvHjTgo1ptZFgRjgHzN"
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
