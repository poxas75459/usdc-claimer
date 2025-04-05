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
    "K8FbyLFLx8PLsRrBwFd5KRgTgijYXhLPYo4j5kHSXAAiowh1vmA3d7ciMsGXyotYo19qMi6ruVCZZTbyoWFmW24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRuiKgXtwrPHEmJrbQrzqbpwn18kATJPQCyWhAV5RkZZewXczHQyBv5L23yFgLrrwXBRjxhucSQWHrPgaxSWHoG",
  "key1": "65X4hTbFacz3kydPBEXcXGcpuroDF8omusZPaJoxF4VLc4Dng77Dc6pgU6JNC7dnXKq9bhizPyEArE6kwzGPcDAE",
  "key2": "338pZhesDt6utEiUMsRnSQQAwN9LYdRQw3EKR4FtTdWTLK8b2BxrRzzGgGXCwqcqJpWxcPDJmXNdiwRBjTXpgh3G",
  "key3": "3aNq9Dvb24t1sTwuSTuXsz6PWfuMRqu1UydNqo5a1ciPit2UHNxv2qLxKuvhYQLWVkE2Dd4s77n5NB8NhExSMWj2",
  "key4": "67NRuTbWQ5r7Cjos8KrVVntH4VDtGL8wzJdNrCgujHG5JRcsPT4LH1Zq7WoEwQBqZMVAd5Y5838XizfyQF153Apc",
  "key5": "4tJWT87jePWaBFZzzHHgUpS7egwAJPBXg5KxBkCivadaMTTe9srwSzjj8NjsYosKyEvHiY8ph9hisRPYiCaPumGD",
  "key6": "2C5fvkUJXbkvwSe1RP7iJgMaBVQyNHNfJkxXvjX27eUcfacLMgmYcnWYNCu6p6Nu28expQ6vAgDQrjGgtj66KGa4",
  "key7": "Mm34wHEc75m5VR23oDeACvJJFdznfHAZuPFrF2er3QqVbVAEyTujiFsgYtubTepEWVFRdUzHhXG3XnCeK64asEQ",
  "key8": "5azAMKrXKVxaoipQZ7FTkF7Kn4jUCRmewmH8y3QCCdJCGpJCpav3mzNUkEAxwVsp2fH4763GNdZxLMSjEUUPhPZs",
  "key9": "2CfBhwWW8pocieeUA7RKdiwJCsyDNDSXEqrb23riAm9BmmnnZoiePaQasQqVEAQm5D928gSQx9EexDCGVrFw3og3",
  "key10": "wCkLYxxEvnnU6NNNvfwnaLb7HavAzTGK3zsyZwfU8tB1sHYfaNfTsL6toFqZBijYt3JhtcYdJwdqANm3Bt7etvy",
  "key11": "BxD5X6kN3GoBUPWtAANpqhGRJMYxunzjnfmvidSExSM4cVnpRVmLCe5qrAmGuAy1jueABpahNbRekwjSsTPbGot",
  "key12": "647wZZ3VAfFkcvmVVmCpzFCv56N4TarpEjT7Rk9oJ1nGV4dEfGzhMb9vDXWXrYqC96PLLH3ENo2JywSNA1AfZno1",
  "key13": "2bLA5npT3ozSApo3kp35cU1RGk1YcCcBGzyD24ZRvnSjuKvkUxzW7s7hwMWgAY67hWLgr4Q5KX7YQtu3GWYW1Hqv",
  "key14": "3yiKdwokmpvHAoi1v2ih9o9dhBw5JS7TTimzadnZbiLxPyEniKzhKhHQH4sDSL4T4yvbb4mTPAdAwdFarr8jwLAK",
  "key15": "4v8rq6wxCgZVuPcakdYCpWiaSPf6pJoqDwYmFz1yg44S11tL36fRwqwovgyXxoGq72hYovXw8BFpzxtBkBn52mK1",
  "key16": "Q22svGFVQsR3RyEGRnof7K2DNjDzKos9gFYTjQUXYmALVRDbGQur3Q3wdwtJVkn9kyzLNV8FsFzV3TMkzCNdt1Y",
  "key17": "2HveLoNv57u6G1T846dNoWg9tJz3NrwVJfE7z1pof3zQtAXS87q1Rfg7MNAqCe4PoXv57fdzj5DGyduPBafAKfF7",
  "key18": "2Sgri93Hu2d48wjiFadZwFGq4dDzxaiQkRdcycrSBQ7QQsToNGUmwCeAoPS6Tnfceh56x5QNxRXGRswpHsG4iEH4",
  "key19": "5SMU2kd8pU1Vs2evFxbyjhXpRqquDGcRpXS5eKgA9PHyfyB4vCHCnZ7X9a4Q8cVAKYmpcfA5NzkoecLKtfy91UZe",
  "key20": "zPhUon9YByXsdCjW599eK8hCyXuSjnfhCopLDwso7XsWDTvw2gAanj4oTkU2xitWpRqXsFDvZsgvKAjf1dQXNSH",
  "key21": "4A9oXFQFi3soFQE1KFwhQ6UJWo3bcCg3SR1wKgscPzYDrTiEtRTzT9e4FDCjt2fFgcuBYjNxhZhLc2J2Em76grJ9",
  "key22": "4PjW6uZJYnH8jnyoKypE14djntaJwukMSLFTBdAK3Zz31jYKm9y5d7orx2a91FKkx4QTHDKY1qg6grNqYz1CHsfk",
  "key23": "2Uyn2ZYhZvFn19FMcwdMJDZvYdfcQR4MB1faQkkA9DTS4mQWKwwqfGq9V2vRtfPmWKH3JgtvAynTmGPAv6VLdaH7",
  "key24": "2BMYJYXJkaUCeSFMw4aiaJ2id4xa77TQKHrkXm4H4Hj68MsM7e9X3awUxu3UhV2ehrESFLev1qsc92QeJJz94whg",
  "key25": "3PTTmdggJ8CTMjPwDHmp4knjfyRAkuxFY9tZ9qMAWZbeL7mqDv61QFbbzd2aXakEKms2teGpWrhWRAPzHDKeP6fd",
  "key26": "4cMHPCq5FUbZohd5KJvheZJEbN5sgJNG12GHJ3nEUA3WY7eNRePRsxbihKy8dd8jr3oswJb8c8aKFxUiuqK6DZ1y",
  "key27": "58dPGEVTbptf6RJuamTnXAJpjMAZXNb8Pvdce8CyZYjDPLFBESV2tR2tW4U1kvHCrueUTGKAdwBvv6Y1VeNTSok1",
  "key28": "5mnRhYyS7sqZ4yMWDChGnybKv8XwdDKexc3eGcA9syRTHWJ2XQS1vKcxvVZJLJy9PTMw2zAp5MXndzeZWXdH1aoq",
  "key29": "44mtf9C5kXc2r42nS6MWbkBhCJ27P67BxrUDyw84zaGUFtTJv2UCkuWfzYUm5NgcXoeM4XExHx6P1DyDZz7FvzBG",
  "key30": "v6tpFBQuUzx2Ud9G8gECDMTj34dJ2Pfbxt57qQZdzskdbYYVWdLqT7iUApfyEWid21GFkUq8WJaaiq7c9HwHFHD",
  "key31": "sWJH4johN7eTmquHtNjMuD7vSGRKtBJ3QXMaqdPLRnwW4wSfYD5z56i7hd7g292LvQcVxePo1K6CfJnJQLm3mbD",
  "key32": "5sSpMpXGSqRxAdp7N6jHyL23o2QZtswp9riTAx3bDkpoKDzAWvwfS11WmcGzXqHZBBoJVhJdCSBdGj4a9M2HRevM",
  "key33": "3Qps5ymVtDKLN2XQGtSqoHQnoZMuWtcbu2ieHfyroficW7N8G7UvoNLo2pjYj9v9oxeu6kABoxL5eYon256wk7FJ",
  "key34": "4RhKuD9k4XxPq4xBNEv7zmmGhNpHXZzxtJwSBPK1XJTX41J6HNcuraWXT3tGwxHdEwGrZDaCNka42gMgZEi7i71s",
  "key35": "3VRDRkTecjsPajWecVJf6byajViMF1noEuHHGnkZrKki5nLcD5tFbHcWvYoG9g39DMLYbjW1Fozge9t84FsPEJQm",
  "key36": "2TN95rFuo4kZyg9odrWDNPJnSHYwpM6tVXce1E73W8h545VwvDxQNedbHBZFTSmkAtPuM9eXRG48oQrJQhPPq2om",
  "key37": "5pHKrMNm5Qk8d72E9kijfbcKDx8njCEzd5YXGskAMiHtt25QeMRh4q5CS5Actf82eC78JopkD4WhqSy3nCvMcAV3",
  "key38": "MXbWs3fUaASFnjBxd3igopT3wpCb59R5HnY7rSZ71pbhuhM5eSuJXdz5NcKh8yhP3ShBi8PZ7mAPKVrycUXKCnV",
  "key39": "4p2cY2dR87t1Xe7YsjDBc9sN95bjyQxtxLaQPPxh28vDiuiNpdWVcH2ZDgggdJi797PFfoqwtbPUkQKYoREzxHZf",
  "key40": "3EfLuwzhRkHWP5vM6cd6bBxVom2gH9hMBTN2GDTNPARmtaoQE9YaX5QPVLx1wfoxSrzaL3AnyXc7C7M2dtzJGHMi"
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
