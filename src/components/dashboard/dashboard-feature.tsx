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
    "5kjmfTYDR7U2JxqhrkWiu6JEdFJjCAWaYytPrSCe3SmNYmDvNNoCFDptbAM3sVRTmDRhjBnba4deNgXh88VwySaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q1z9QvTcWg1gkWCT3dgoUrRhLuHxGW3xSudYeb68P9yg4VZtNQbAHR5TUqDYeSpZBgraRBxGR5NDvu3pp4qpFBU",
  "key1": "feoEYZdkK3dAjoa7Ce7xNrWkgzWdCJjuyk7MacKLMhfDbmHzV7vCpzDfBWTYxPBQWfLkhfQhS1QR3xeLooTzWgM",
  "key2": "wr2cwN2B9NgEQKvX8qQka747HtTsyChJnsShY8LybipG8qysUrwDQBCDA1w9WexuobAaFqMEt876BoUyGqDw8yz",
  "key3": "5ks3V9dHXUQZS9Kfq3pkf725xPotMF8Yqve4eMgDaeEZQmaQgKd98WwV3KoQCEdZSC1Li9QjrqhAVKG2hbyKqYmo",
  "key4": "F9xKBMrRct7UKLh5zzt6pzSE9DLUu6kG1uyV1V7hwpTKbPBSjWUovbwJjdPCRFwReCFuS64csFDE8RgutvZWYeK",
  "key5": "4XLqudBF4WCE7wQRFH2UDXjXkUSDyF2Ka9Y1fskEYgLH3MdFbLy9tfRKfDhprzxjhRPUfE4JxgnQ5pUZeDg7MwEE",
  "key6": "rQNq84kv3xkHVaKtskx581eWZg7rgWbCvUbDpH29spiDPwLP1jtNLieDEJzGCkaZuAyohKZ3BujvRHfMpzhtccM",
  "key7": "4GyQFSTCGsnR76hRxQXU2wr8aLai9aTVUc5wok14AmjJ6CD1VzaE1uDu8KxK3djWMBGCfqpuzMP5kS2ocN8HJ8sU",
  "key8": "5XNEsDnN1syvtfkKu3DGgqfTt1BPd3AWzBftpJqPdZFnQhPBK2EaxE52UhjZqznBnBwSdBsspdgaQ8SGmBDFV3qU",
  "key9": "4zEDHNfMpHiMHxd3yJc7uUD7ax311XkpVMJfk1r4suPcmz2ReggNoc3kx2mbzBZxU62U4xJps2SVtr5ztYyaCNiT",
  "key10": "5oaMbA7WgcfuHsnViAj82XmDkDniQRkSWcyB1WDEt5KWtJsA7svsVzGXS4zsccWrrpRu3WMxYByxyaDr2Nozns7A",
  "key11": "1j4GXRXhqA1tQzSWnGYmLsCdR5rc8f9BSZY114LutYZuv1DFaUEpShM4But1UAsTvshePkKUHtmBfmov6UqcnUa",
  "key12": "3c2nSKL8QCYGeUHPHHWQwLuJ2Ky14hfUKAijRhchjC5VWkYyteWFbNq2cp7trgrN9gdHMqbYLseC3ZQcmfExgjFs",
  "key13": "3zdxYHaXz8fofFFYhojeu1Ds5RNFcBXSnDmDFRPTzSs7ACmyoiGtUFxFywu234bgh69CQPuDDYEYxvKoFxecXaR9",
  "key14": "4BrEfBCjKyTr3intrxYhDuLxrkaw8P5wwioaz6UkCU7CGyLKUExmx9pcvLtujdT6Hhnk8qQU39Q6Hix2Ge9RykP8",
  "key15": "294ZqJwRSawykJWEjD82FbYq5nyVS9dCSB3XJZtF43R9ENjoFiP9G2yAU4B9oNgQPQcnQAq9hFekMRPahZBhkziW",
  "key16": "4qkHHVX8DqMRpCdUeVEq4apXCqJ9YPxQRViJZxNpB7dcJorRDPb9BvMNi2mJeeSCGFoob4a9zkq23TPDS6s4MKYz",
  "key17": "62KTQv47gK9WrEgeNJ7JbYNhcPjnm4L9uNQbUgPTuksLzYjDXB2sgW8wgbM8FJhGLtjWpugNgPRPeiHGRSuhqkN5",
  "key18": "5tz7AL3tiCrVJPDAg163dWyCL5ESwmsxg1A819A3J9cbtaaCRnT4wrZ8HPTPGXgu6KSjKwdYpxet8qwysig7GDso",
  "key19": "5NP68w1zztgssWBT5MZNasjC6inKtjuw6J6gqBXxgqRNP5egLa751dy5PxVFRkfrbjqr9Fsvcps2TRsCcW8TgLYS",
  "key20": "mfpJJLoCispH12sfu5foFNaPHiJc9gGdUJP1aWSNwxFwucjFiSxotyn3yPbi8wUqWdBC4PxHmVXP185kExVPEbW",
  "key21": "3v2j1jp97wri4L5hxyh3uLsvYpNBHEChhAM9LPjimoLn57xzXuUZpTjPv3HRix7gt6q6AfAdwkKmESrKNDu7sHhD",
  "key22": "5NgB3czQ2gGbAyAKMWtLfVQ94ujNV1MvNFYWpGDNAWUwJopFtYHY8jHHosK2K5N3DVWPadeYjY8NWbDDcufc1U9B",
  "key23": "2fudWn1BmegAmFQW13HZfy3515EGPYayrVLRZuyavMuPRsxnL38xrWqsWZB5npJvkBmCiapAVeVd5egVgkxWT6Nm",
  "key24": "4RgRuw9E5P6FrrFSXcwvoJun37mAff1HsSLtWxs3Tdb5kjWCywm8yLqynsLn4jVanvgAkVgppPgUHT2JQukFCJoe",
  "key25": "VB5DhRSzm7rrdqLFLcQbgWwCqGQQwLHjWvgeabfiP8VkpyYb6X5iopeY325TkyMVSeSQhtz2a3DTrAaS2fqc5e9",
  "key26": "35tGruc3CcwezSNhpWw9c75z2T2txpYDs9Z1nnCaq5vnB3otS8pAAae9CJMLXjz3vparLz7m6oWAK7nNxM38pqws",
  "key27": "4yRTm73o1DAwSn1uojScxzwpCEhcNqBcoo6Dnk2AtyfEL7pbPHyPupsZ2TkRan3TNX5umFCjGqBjF6ZvnQ12EbGu",
  "key28": "pGDfsqcGhdkUZDt5PyG73nSn3eq2j8upArk4Ghw6LM9oDzAHWUtFpEyTUqfvBQg6qhez7hYvpTJLRemmfb6CbPs",
  "key29": "2awAfrhhRS19EZTtTV7HVDQerPVrih4zdMoBH9vKv2hB9R8uLDSyicZLseNxSnWWPBTgRCnBxuG3CrrcJteTehX9",
  "key30": "4Duia8R7Hh6LqLmAzgpTiZ33HYU3m3vUwoDRJB33KfDVpQQu6QKK9DE7A5hbVK1hSXA9m9ixH7DPEa48y8N5JGrj",
  "key31": "5Mk8KXypwBArU4Vq3hQrMzXdrQfuvVmtxzpj8NERDTDQxiTyzNAuLMVRbS9jDrAPwabqXCqBykVkw2X4cbst7FGQ",
  "key32": "5bBdq11WDi7yZ11XCtpRoVGZxGwpenLpBFKLYdsfHa8EhNfQdjAbW7nCirihTDqy2mWwY5x7gbN3qTTWyPiVESQz",
  "key33": "2YxJ6A2xEHqBEnL9Ayx1K9rbmcMQSBduiwGneuPUFLVrjvGfeny5eB5AY7DPsMev7K8gbUowV64Kwz1VwkH1C1Qy",
  "key34": "26Jd3n8BzZQPudRvv8M2X4drq9Rpq1qDJUzLsHRubivByG4k4kRyjWiLKZnDfD9VXgRKjPa5bLY5cUftcF8dXn7k",
  "key35": "5RXkfLSzZrmUrbquPqJoV8G8Z8rh7E2Bgy4y7AfKZgLfp1zJifdRbLbUsWoEG78eYeJbLLoGjq8jZaUX24p68fEk",
  "key36": "5sV29sYy5bZrjWbugz1XkGGnypnSxmSPUKmhUR7SEZ5uPxCR17RZSWsCLXwiW2szt1YhmgANfzKorqPuqpNQYFFn",
  "key37": "3CxSWwrDgmEYu7SeZsEKUcT81NDFeVqgqkofLHc67ziXkuEZ6AL65KTAQA3XJV7HGofRKWLtxVBaB6vKZr7ZKyF8",
  "key38": "4nYo1k9M1waMvyfWEBz9m8DMDmPTk7rAEa3M7R1yyJRohTWDQdfTgymLyKmAJ9wMzSxjEAavTEc331wg6EehdV7H"
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
