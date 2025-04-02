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
    "2f3fgUrYgCDZEZVmXsBM6tbyXjsoakBiHN7mmDW3JFW62C9NeFsSzeeiSvx6LyDgKDWvyaj4s7jGBKjX6i7suAJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xT8BLvShZB9BWjZ6vqPY1iD9DjY2DYwCTjc4vR6WeWdNTtpgCbkwjiQ1yeVFNjmNiRHoneos5QbvBsX6uRGM2AC",
  "key1": "5fsUxm4XntkrirqxPRyYqfTFQy2C8pVP8XRYXnG1FHf3QTyPBzW9bfjZ3E7XvPW7ZrwdscrktQbpwu1kWddBjwJL",
  "key2": "FNzN2p1iV4JamuLmJEKNDkSbUMmmfGdU7GyMQRsiA6RbpR283rVdthZXbMRbQwZuDzWRAEjKhMKedUtGQG3Th9C",
  "key3": "4TDBFw9jdKwMWzzDM7EZsyK9cYLh9Kr3mfK1izSVbqAwx4948NkYNFcMhSqH2JgNa6qBKbSj5xut29jMSqR87i3o",
  "key4": "4Vi7sm4daRhu1WWULdz52LF4SLccKqdD58HMMW16DGC9sppx3WdZxtfqcABnkTCqPkcuBpCYNTim3LWys6S8YyWF",
  "key5": "GCD96bnsSS6Bfc4pXqx8yPv5j7EwPySV5hgrDZJkbb8jzhBpvEVVez3nvfPLhP7fidZTbeuLGaefkV7wvud9dhx",
  "key6": "3GupPHxwMGvgGC9eokvHsq2UcvF9gZss45XW3bZaqDpadAC5L3DKt4PYQHbfgZ4TBaD4TVwvRd9wKo2VExFfec2f",
  "key7": "5FhkGfGyFvhSvgztFwQKtoqzKGcqnN81WXUgK2SsGfMNPax82R1t9CRbW39G3RAwtJtDv9ZB3NCJ4LQ7Ch4iHztf",
  "key8": "4wWVgvwmyznw7AYp4QPmX5jnxUVTUTLL2vw6dcpc9i8DCgFFyXaWxQki1Xft2JEMXA8bNpyAZePLcbzMEpqtDjCz",
  "key9": "4kZfS8DxYcFVy6LS3B9Qz7uK8bFJvxcK3rcvcUnTz1R2Fp5rUxGpQLg5D6ktinq3B4xV3zzkKfMBbciMBmD8WzbD",
  "key10": "3tKBccbNeVhjgCjj4oVewuahFzgLBNbsJpFP4L5NbWJi9jFiwwaQHqynscAUWCiAqb8dBHueZTpiGPbT5q7pPcYd",
  "key11": "8FPNxS7RMi2b3mXUSB8ZfUExdYRbMrEtABKpzfW5MCWnZUVW2QsoMWYZKfmqxp6hkWqDvGtiauhH6sB19izhZN2",
  "key12": "3pGL53bEfAQYTLYJKmPa8chjt9N3N2BjdiXV79s23hDR6Vq1sHDnEBFHRRV3n3pJG2sknmNA7HzDfiwh476T6vhB",
  "key13": "GxLEBfGfj2a1JtroTPEJrHwKoWmp4KSCznkb6bpE4ZGsCFqk1pAUMWSUB9c4ty9k5f6PXBrpDJq8vCwjVqGbr1V",
  "key14": "2tpW2aPnfm8jz3Rp38Vb4Epvj8D3FqHWWzKL1mNQPD1ntPjqdNhYNHZB9YD4svZLx7A6nW2ZV9Q7AcGyDnoqW9nm",
  "key15": "2BnFqJgUo8GJoBZhAJy53nADCuHdo2Dr3cQ8YyvPuFAp7k3SfKpG2C6m6LtWeueZ7oswyEkLqceGDD68uveXd7q4",
  "key16": "Skwq5oCZrp6TQV8nCWMLz6gueUxMUX3dv9mcjpuyygQF34Mjp5c3DN5iaJAatRisVwF3EjqbQvxmwetRyyv2u8q",
  "key17": "54ibtHVhK9ShB4ov88jHpSi6G73q3Xo7dq9HkFGuj2C2gDYy2bTBkB887yXmBioJGRA1y9RLdXHwgQMyBrm9nZTq",
  "key18": "4WnCww2zz4DaEzF52AFxSqZeeyuFc99mNK69iiX9AggZu1A1Dpfn6mD5VzTTKvWJAmmKzCZ54rNp51qHRwCqSJVS",
  "key19": "66BJgYzb4XJe5BeTuL5ki1EC9xYZsJTpN5BWcrjR1uZr84LxtYj8b6qvW41EgGfdaZnyDP58J4Yfig5opfhz99yv",
  "key20": "3GLgvW9ZxtaBbBTgQz95B7EKtjRS4vo5KVLpA3k81GiCxJShopECpi7XvvBhFNhTFCnWgjBau1jhUofzS8XrJpwJ",
  "key21": "47bxqSHtaZ9LuW6M4RVzcGwjuLX1sGf4ZWCzAd2aKFwHduSQhnWm5BNCBMWSDaZhkEVjcx1sYSK6cYwd7oVXEwpK",
  "key22": "3dBRFodNPHsVXDgMmuXcvyzVu3ycX5P5v437hSzj3STcJwrGLq3BbTKFBb5ExkfLV7X6LM1Wm1FVsgwhBdSYJo7s",
  "key23": "5wAnkMhjTAB8BnKKmg7X85qDYG9LCmdApkwcr8JLSExKEEZQxpBwPcyKWgDpTqadrheyrFHcK5pvEHCqoy8pU1hw",
  "key24": "CrTK16iZrMra7a1oL4v192cxAcMFzTrMgpgspdLJpjQN18fdBimPAqDW4YxYAnTmSLPEXWeECszfbALevfFiEqL",
  "key25": "5kcYJKjFmoQmwKgBeRcLujYHd2CmdrXH6U2QVkfgQJ5uyCtefaNtLc6aLTEV4d7raTZcnVTcVfGHbPUhiohB31sY",
  "key26": "2xWkCveu28wX6jT2PkZhnioHo3CwWrtZSrii259rD1BmRtFdRUuWJBNqXnk2V6zsshPwV9tP6gUgo4tujQM7nubM",
  "key27": "3KqruzvJsHZfye6q9aGyZiEJMpE5jKLLeJAdBhyXF9EN8VNTP88csZmkLuKTnFv6jFFu5fdH1hPbeKcGNzDJFvM6",
  "key28": "5MqUjPALBDprMPJiVZp4nbUbtoUhcfkeGZphHyp61L91ekzTs3SxUcdWccC3RCmuodsW5S5wEu6PXYtJLDWHkYun",
  "key29": "4qV3SxUhkDsRL2QwH7Bqb7ah3Q1rJ6pj3Rf8phw14pktBcz1thqrmXb2KQyvy45snNrU6zGYByiap7jJ5UwmTQLs",
  "key30": "4yqvXW4e5QhzvX9sFhWTV34ndq1YjqXD5FCnc3Ay45H5sLLyBRUdNCrkthHcgxnsNK5YPHQezmu8q1j9vNqJjmuw"
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
