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
    "5KfT3Vp1CoygCYKkF9qJatS8RtBZ4cMtWNga8yvhBxFNQTznmeto2PKjU9KwE12UxRPZ8fV6CkHMDLHfBTagFYPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNKfYpLZhpgqSjcy3QpMKFKSyGhrSfEaKe7PnPWUxzziMMekaUaD8iq66c4Ur7GtgJiy14YMUSVdWzRu5SPrBDf",
  "key1": "5MmfCkkr55cJzmPoU5BRvYMvT7kvd2FeqD2PiuMNeiawBpAzAUcr1CZ6mJf4eyYHJDFaPq2r6NWK36cnHS6qeM3W",
  "key2": "4oxnNdK36Zdu3AVV3KdAd7WUAkDC8qin4uYZok43vd5p6zTfcizFjBXRQh9YKk1euSg8JPPMyrgFiE79sF4Hbfug",
  "key3": "5JEwRYrLm9XWDiBpZrWxwrhnDw1ZMqvQr91Sg444LLkrBuvRsPyZmGTog98iZz7FV2qd1FiT1mFHDE2mSdEJbap6",
  "key4": "3b54EcSdkFC2y8qfFbtTh77SJgTygSZbowoeHg3LA5XFqG5x9YtBy2JwuzKCdE2B31hng5V6gt1tayXyXxjFU6cf",
  "key5": "BPtRvRudKpLFAaWG5vG6E222WweyTAutyKorMceLo4i2txU6ab6uM8nbpXBvEEzMhjuskKT9ZpuZ4VhJ6wtLH71",
  "key6": "4RmnwpErPMBB9BRH8v8z2E2DKdBsUsRuuRQCLqyvJHETXUbYbtVAZDijUk1hNVchN6qvBHqukPiPCs3jE5skPhmH",
  "key7": "5ZgBkZVJF4URu87Zf8bwFHBHwX3MjnNv3GrbkghiuN6bUHWv7uaRCzbnr6EWvZc2PtcXNyt9QxsTta88uLPPTmSR",
  "key8": "29QcJY3xko97deYyw9A5ZBaYXxzcBG8wQ69a3sdZRZNPM5LGueJ6xEEFryVsdQKNjL1DiRmoWQ15aS7mXUqHQDN9",
  "key9": "M5ZbLjGoufS8aeaCMaUXrMm4KMdP5TiohMAi2FUSW3g83vty9Hem75Bh6fkSHejoCGZbx3MAv8NmfNjRdctbQ4A",
  "key10": "2299JVEMqymYjzXukwbdB7AtzQMuysLn1QpUs4D4cBvWyppYYtxUaP1emY5tmsKRaVVp5SPEDzyjKh4SahU8GgXd",
  "key11": "K2reHuZjfktHw11GYUQ8XxaVeu6Ht9LKyRjvuagZRmh9rDg7LoZT3odXpgzpbm3yczLMcwkjSffxmU5zNw4qRV6",
  "key12": "32u8bXgpjQKUAZyuC75sQEyN9RV2ZwMdz3bZsBeFB2Fp9v88xrzonjaHNpypZ3xvn5CWy4pgcE31S81BNRz5TGN",
  "key13": "61ntTmYCgEKvZjiZ7QuUpP5ofJRgHJYJrq4rWm3mRdjcRZRotF4BYg1CCoY8H3hDWzwpACKjc1ejcD2erw4q99Zb",
  "key14": "4iYK5WjUsbBVzEC7DDZ6VshJun5wBvb854sAbsYppV4FVZXK1JDYoduicYre8UnmNJ9UeoUnYSRU7qGxVRYvj1Wx",
  "key15": "532DBwRiftE2U1jz3zDZaaRADMRm4yXnNBSoVWJ5bVce9iNxcUpin9Szvv7zKoUH148qKpNXxb2gNDHAD86nL4Dw",
  "key16": "4w3PwbATVPryBYepMyRmnsHG2jWjJRg66s1fspGkWFsK47oaPuWKDVGduPR6vvp3vxim3pZNMexchz1Ag8ARAJ5q",
  "key17": "3BwKZfb3nY6YZ4Ss8REVBDR8QPtzJTu8MeJPLhJwN8jvz5UxSsV61puDyCUCwqE57txDcqR7TFRX9YgUw4Mb5AYZ",
  "key18": "5K39EEZaVxAGJ1nLxm1exKFGCHCd9jGzSzmcE8XskFrnCxASorruDvocnfv67TxLj1C6Xs6WyxHufS279dYQsTQs",
  "key19": "ehMTjt7HfhXJQZzHg83YNuvSiSu5nxz652FEfHahcA7Ug1S7RSMH2CgYx1LZTTTKwdKby9789ZRoYcY15KScaCs",
  "key20": "5TYu8TFgRwNMrVZniZ37hwu7JsL6Z6E5tcNM8eo1oiLbGZL53XWgzWFS21REtoyjQKEYuVKV7WDfSUKpBQjo5ht2",
  "key21": "331EFK65ZjJZK4yq78YW6LgqLWF76hb7ChAgYrqxHbK9GXuFUWBfturLUEShegfbFLAMzXmLkgyWSQEsvDGqgaxc",
  "key22": "5u2rkLytiYXgHnvCTscBFESnMXatr1mzrhQDGVAHWsxhijCfCL8nDUYWqRrJmzBVaG8Js7ikuqykyUgUgyMUBX7s",
  "key23": "4Rd16A3i7hD4gSFBcZJvyX4kFGNN7JPWCt76qsPqh6Tii5KxiKeLiZcDxuxWvBQEvN4feDmZ5sErXX8kc8cBA54f",
  "key24": "2MFyeigXAz8PBYLSTkZHcrgLLKcRK9hTGVdG1RHrFqeDwkjQyr7147uNrHpoHU9QC3L6Hd1t5ij1V4yFQyf6Uqd4",
  "key25": "2ZjxjaWUVT8SMeK8x6bRFKJGCocB6ngNncazHoRfDCcvMuPmCvK5RCtn6ZcYkLu8vkzj76aTN1PzfLGvcYozqq2m",
  "key26": "KSHGdJafFKMhKtMQ4AgbuSdBFNTTu7hh2Gj7DvuW4WMkukziMahP92eKdVHAQ4KWa86tAzvrRUVPnYjncg1M9Hf",
  "key27": "2dbRKc6riaRr4REQrQhtVSKTowmwazZHaxjFXhUnzwvWWgKMwFiJWqz5XjE5v9w7emhLFBUgMYX8jtA5FdQu97PA",
  "key28": "4pi3Ru7vQAsihuoCNnoHe5tbt7RB6VB6ZoASRKUrQbK7SAwna2oAmTcAU9CSiDTFVbpL6u5vcjRszXfU7VgxiufV",
  "key29": "fVZ1E9vdqabCYQQCEjHjReCkaZwvUgThAXYr9gHGRTCWRUZV1FN48vVYx9arWbDuLWbC7gi5NeFCLbkKYNUVRHf",
  "key30": "2EcNdghYt3w4v868r921TzUD14LtCTUwjt4x9DCEgXsmmmFoTDQ9c2ZbqwyHFeC6CpNgtbW7EfFXWxgLWV8QtUwt",
  "key31": "mEDSZc4fL4k7rvHuBbWHsaaX3LF8asFFdqwtPystAbUmkXjmchxib7hPjL2AWLuix6R2jAqvbESiZbzj35vBmC9",
  "key32": "2Pot1PeYnzeTNvB7ZxwdcygjXpF9gWViLBo21Tu8WDRPnkYT7SdnbNq57rvME32NWL5krs8VxrmM7PpLenF3JEh1",
  "key33": "4XJTKYVn1v5S9AY6Bx483LwoKwq85CJVfi68QuxajhNwQa24UQWz6x5KfVX2peLxuskPmJntvPpDCVffFLGtK7Er",
  "key34": "57pbC35gxAsazF7NVu1zkWruNSHefZAtfTWwNoTWtwvAxNBuo9pEr4hrjzyePsbhDE3X6mPKMp9Rjsn8N9V2QPhA",
  "key35": "4BUcSiPRhbx25L2wKSyVAoWiK9FtTAncqNXiyYB5qdsn8oY2XdFyBzmMNnRNJjRwVUeb7CCjuHFBHueH3pM9554E",
  "key36": "3yYMYon5MRowJDaadyKS6Zg8FtegXJ8fgXWsVctJzg2TXNdPoMWEFdJPQNASg8RyhcVWzbFcbaScyDKtpjxsWYmx",
  "key37": "UauCFNbaki1c66ndFYDqHngRBr36iVGnhEJ4krPDUEmtLd7bdksSUM7qfZr6RcvjNPizZj3E6Hub2EWYs8L6WPY",
  "key38": "5sLnr2pU77QSGE3VmgXXrgVmYr7eAGrNSLPda5TpFwCjLWjCL2XDz7webD5hsscWbHLCzH5XAnjm4S2tTJT3yBrC",
  "key39": "31uDAx4qmPTFuv8kbutipnt5YNZtFDM77WtsMeHS9MvWyhS6GXZ9f2AFtLm3VdtJiBfNd7TR6QmejuLLdC2VWmiN",
  "key40": "FroXAGzeFmfqbMQwNtjGedgkv8Te4nwxFWZPkL7xeEBJPwfHxGFztXuhXL7MKCba7uS5bh63Yw4KDfhowYsk3Tw",
  "key41": "3QV77g2ZMjfZSnyvDWmYdSTveQX7vVwhXsNvDMnRcBEE5EQmaZMDPhwVUuiA9TvrPCfuJ2sJfvqSDtvWSGPUsojy",
  "key42": "4cD2tmQyLgymLTE8V6iodyHbqnZYsYg4ZS3P983a43hcCfqnqNu4mcu1MXiptscAmA5wi7TxLW64SpsUTqdFBJJ9",
  "key43": "5EZmKFFD1NnPPzBuKzvH89J42aHKMb7a73gguasepAhAKsXppGyiuEPZfey7HcHd6zZvCQfcDdtsQahXM21saGc8",
  "key44": "7wQTAuZUjrggZx1sUSuKeE32rWgcQFcGn69zkHNxjFugjzL8i36YPCipQ7Mr2EvWrAaFRndjWYb5nePXwE7zD28",
  "key45": "2KX42uczRgmeNGEzykcgejiPEihybw5woeJWWxQzNQ5bUwHuGBbtvREb5bXRheLvimTGzLpsi7q5DytLZQKFz1jv",
  "key46": "3uyjybKrbn4oc6D9g7e4uRcmm1PQAtbfZ5eAs6rEf5xb5kaVfN3zr4hbThNp8eyT1jY6fdDoxi3t6dBijsns5L21"
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
