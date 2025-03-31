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
    "4MaE5vF4eSq7EwNKnKHL3mKTFH7DUZU7DR7W81UPiGVZJRdKYwo5Vcwp3RzUJxDNAShMuyH3hfP1EQkMyKwF6iH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRL61uV3KGtZgFjLZG5W73qUAKHj7JduGNUhF4TRFmrGUjayvxk2inGTZNfWoHWjmUAyCoEN3RG8SSbjSfpTY6k",
  "key1": "4TN2y2wDDgQ4dZBzCAHsmy6VnGqQb9RYhvYDc9Tg2zYBs6kE6nmZnM8Vdif3riuEKC6oWunwcgZwaHB2ka1f8ynv",
  "key2": "3bdfWzNWDRSoKgffhN8ht2JpLgAB4NstMDSeR84X1desRw3huCwF2XqVken3xQr3UHPYsQKa71Hia2kmTEdnRnYD",
  "key3": "3Pz5XL5aR8Pvve4WSdL3LPYeN6x3pgTCQqnvTAH2A7xSBkxAFk2ZWkArmfgB2yCF1ui343x12su2uGZH54W9vhVU",
  "key4": "4JfPDYGnNoXzuGaZTVYayFnWQjbfZVkFZxiEyFsVYFepahB6e8CejSTGmUpsqqQtecLLW9Be3r5eFVxKmwoVcKX1",
  "key5": "9jjSxNb44PsXbGcbBKYoej2Eceiy2u4AQzgUkQwoh8hcchSCV1GfJzRcARfyPJ33hfBmQ5FEtm8xXHphQAYdjdg",
  "key6": "5kcqSFhSjEqFL8uqwr9eThCU7GP48T1tc92yTwV31JRbxZTGYhR9ZwAMPuyYZFwhQM95WGn7rVimbyZPmkdeG6PX",
  "key7": "5cB8Y2JWRNDtZLUUKqJZSPMUsb1ydzbf2yU6ExgizrKeTdpfnLY5WW3dh4CzNcpnDdJpgEo7pzKS9PEN3Fym2u6Y",
  "key8": "4pYu6qN4LJoEi16X2gJG5GhKz4XuogahVgcmLhT12r1NohyBfQT3vPk1CD6HsiFYzrYEM79AgKYRWtXD2a7HxRxU",
  "key9": "4P2NwUKzwdAoggMtMhLC3ktXVY66xgXY2HS9mctE9sd3raWeagAtECofqPntBYeo589tfWoAFRpptZ5NKeZoaqoi",
  "key10": "5CWWfUKi1XHtR71BEWp3Z914okPs3hMHcdtdwb6fqYzpQAZjMeCLipHWmYCX6j6aMTNZfk2yx42XUtuvi4mp4SwM",
  "key11": "5AsEcKQyQMwAMvrHEnnmZ6xuQeuh3cTG6b5HJR1rK2NPZuqU6zrBmcvu1J7j8Q2puaxtM1hHkDZhMP4qDwNAV5za",
  "key12": "ydjbFm5sMUooLR6A7TsiKAuhVwQsQ25iueutqwYGGHnDsxgAkcLyDjWDohjBq65gjTeGVVbBnETtRKomKvCotR3",
  "key13": "2eY8afDWoUD8CXfkm84844WC4Qz7WkoWTG7paaL3qdseQGpCDw8eXQqkU2Z66jmBKMLWCeUs9M5W6PN19GhddRQp",
  "key14": "32Hs4BxwZy2jYZede8GpwQxXTtDMfVGYWPjwRHcms6kpJNasTL9Epxqk7R4dq7va8qM86ELWXCTfK2hto8wP3AoW",
  "key15": "61YXbfv5cLsrv1NxyDfRySg3doz1QMQAKdFLVCsT2kxyYiYKsAoBeGmBwdw36dSBqHX5kM71wPqX9yDS7jPryHCQ",
  "key16": "4GeenrXxuwr2vQfBpuWCM3CGHtnD7sxoZ7oP8XRkzbNXnYDm4TzAM6KkSc5Fch5ZB5gtPYMuf2r6bZ6uv6C5gSqF",
  "key17": "4yKWDPvbGUpzX6ACwLcs7iXSDPYRHC4SPDNbU3A8cx7A9u6nCk6waoKmQyj5AfVosMhqgFX37Q1cRLy7Bzpy4c52",
  "key18": "5oJ1ihhysoaZVuaL46nvqSjeMkLjHF5Suw9P7Cf1sLH7wy7AYoaT7Shjepv6A359UkmDPPDdVjb9nAkm48F7FVXt",
  "key19": "571kASKArNuteX5LxFPoix6Fw4coNTcjnm9ZFPrZ2Qk1J91VNKdeQ5AHcQ59xvVkAcCEs365HDu7XsJoYgAAbMPy",
  "key20": "5RmmLb1rFDck8YgEyuobBMyWStXzYN7nDKq91Y91VnPLMg9GQ9XJFb3NU79ViNSU6DxtHuf8tWVM1RgBV5rwVKrg",
  "key21": "3BkGxeYTBd6uxpYNWAer6F26fsDVQYnW2sCv4mLhubjBW134H5NFU3giwrhuKHwwUV5X9iTsFtM4HWKxcTiFJF6s",
  "key22": "5XyT1Ap2h4HDXukAi128Smf8233bUafJqNByyDqgHzk2x7rwcMosDRPhSUiy2eYEDAoCsD5kJncDxYTC55DQDRyV",
  "key23": "4eVJmfCVFsFj4AC2epB6jihtM4PdvtwjThCaPBMBaJwKksBmqeoMTf43P9RKCwAMhYqstPvaZwUph5TCdUcHvSUZ",
  "key24": "4u3Ln6N8UGKcErGw9DhmE6EqpXXsetkLBfonxpMpbW4VbALQFewWgbz5RmRVZCpFfntP8Gc1ep8eEA9vUxEnJ2QV",
  "key25": "o8d9VdKdv6DWtwNPYw2rx84bBGJhNfEGb1wQUsJofMWKx6KTakP76x7cZdg94EoY6LvzJZbWQ3k3d16FGpkUtWh",
  "key26": "31Y4C9MfHsxvMDaHiFLkbBZ6Gp97ZB7vNw8RohQ35JMx4cxHaE6fkCRn7NVMdvkBeNLoe522GQjUTURCHFDJjG3p",
  "key27": "PsWfTDUP5GpazuqRiZH2UqJtcgGdeeGqoixM9MNtH5UMnjeS51BveE7QZ1pQUPyoCrvLPGPKuWZdGPVhdjtuhC7",
  "key28": "4nYFvySgj99C3fu4rYjXHnj2P1reURzqP9AriLpbmRxGZgKQsJYzRaajaErAvCCwbqy6mWJV3vtko1p3ehJzy2PJ"
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
