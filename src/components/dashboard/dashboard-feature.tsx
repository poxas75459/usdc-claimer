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
    "5hmyt1Y3yrxGzLXmbWTVMrfqXiZzvMdbqBgpYePXQ5NjiS3Ee3KBhVhesvzQWinbtVGkDir3oR47janUhU8jb8dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kt7S1QYWwwWBC8oyqhB9HnY1kvZ5ruPXsYWSLcUgnQP8CLnpRC3xbxtZ3bDvZTG8LULopjEaikCn7d3V4qV57Z",
  "key1": "44Ly4Xa6Pz6suoWEAoF1Eeoi1oihTnCXkaqitqHfj9TAKCHpzHBWsMJv85oUQim1YNJ3qZQerBCX85ckkc5U2AUg",
  "key2": "SqPZAVWFxhPryWUTjvmv7SEUnkDudRPiJScCGnVdiSdfqFfvNB57xwehAqCakkdqPXiPFEDeekAjXRqHP9LACKh",
  "key3": "2JKBSGhXQ9FfYDwW1HeDTTgdVLfZde7phSYJtJGJ5ydAGyEg3RyK8oPbFKCYFxDnM1K4ZEE4a8ysWMMxxxefMmFY",
  "key4": "2wT667DFx7u2UMJ1vd46VT3xJZ7QbkDbsmbmpkzZ6j6iNQDQ2sJDKSBjmGY8eSSae1Tbxkb4CgsTrQfvbsmEqzbL",
  "key5": "565XVBaNfAvvgyBGcvrc5KtGs4VNon6JzknDz6WthFXkmkPfEpdGWkZejPoidYzZ2r2P2iz7tjSNDGLxRyDAgyUt",
  "key6": "39g18WfT7KgkJ15wsRVXNa6u8rxnPwagGisURczeVJT3oVfeCLwrJEXGhfMs3gE87yt5vU8AhXDH6EZAs6ahp11H",
  "key7": "5rGfLzUfx3zftXHFRn7x6Yq27jXVShsyyjzJeHvzBsMfAmHcFDNTDzWgGjDrkFjLH6Sjse9UGHpX6mETxLbV3r1a",
  "key8": "2rDpGvjtcmeJH5v4ZzTVAFVjT6fsnZ2etKP731Ca6phJG4MhSDV4K5uQuSo5kVEzNEr7inPFsTe95Ec5sCZKcadb",
  "key9": "3BGQ5cuRMRiCxfW4BdAgZapdNqnFdNkvNUnXPfoMAt7pb1tc7vqKT7dQFMgnGP7wNuVioiqBHBNR3wCEVKwboL5u",
  "key10": "2gK5DwSEiBBqnbvJt2i7E95rHfqBnZ9N7xnDcocwyZwLbzdfmHSSAxS5AQbPNNjgWEUXjuETSxk4X7k3tSUBHHkn",
  "key11": "4Nd9HdxX5ypnZxzbbs9mdFDEocoBuxuy8tqgMnXj2kkQF9sCi5cXo6NAu4wGKMreTjgrd5VKWY8dbr72DgUK5opm",
  "key12": "2vjfegPA9PNax77bp1yGCVL2TuRgpek9b8P7J7AoCKRpe7oNrY11n3RbVdajSvSfzCiopHn16rH7sHHmKJdEbXC9",
  "key13": "6Gd1Tb7xsUkKwbHVYdFtmFCjXx5SKZnXuezxecxQrA1RbBQ9SroysNpprhMvV639mpznSYvNYdeRhbQzKWg5Y8r",
  "key14": "3N4DMXonnqCwW3HPFQR4FsDPKMttdHfETz4KmuhN8k7vaw38YLFHB68AZ4cCjLxjKAkK9J77LBSQDzDCe8aoEoDm",
  "key15": "54mdMU8YXw9ChkctDfsSRqBbDqKXk2GdEBnKw4NocznAmJdXQNVcNaiDtKr9eL6Ud7MRM9BUPVXjsLijspDMqMzn",
  "key16": "2yPAoJ6Senx1qBC1rdRQPN1jnYqBBiihnGfrYGaWKdEhQSksvpZzPeQP3gNS5bsDMhTa9i3Kcfd8NKKbKXeDzaU6",
  "key17": "5G6fxXEEKJufb2PbgAW1YSZ64cGpBNMZDLmrpyBSF8GNxQuf7MMgSSVoq17Z4QLrykpci2zzoUbKquBBfGv3Tb7A",
  "key18": "4zBhDgnMqSf4Pf9JAhHvcVTTEXT4tFXGZzsvaLJpK7C9io1gvktZ1BKpvK5eMuuYZNnBq4J4S1miitRaMrEvgV1L",
  "key19": "oFMVezTiWfQrQJEoihrCJYB71MLTQgUz4fdQTVZuwB1RBdY1vjK43X8H4Fwx1n1JdwqwE2F3an7V6icn2i1TSjZ",
  "key20": "59oy4qvRbtjEQKjFMtQMqenzotA2avZ7bPBpV1i1asrw1nZeripb1zowb2enZKaSRC3Ez9UpxAnH44YCrzLwPtQC",
  "key21": "oq3heBFvjAmGah2w9WtYbX9bG3kwbfV2jRGU2xQRAyDeHEj6Zu1f2zZg3Xvubi4FS4kCMakphP6Zf3rzw1h1Dy7",
  "key22": "2XiZy4bJ62WQXUrHw5LaqewsBoWwbedYbVB6CTkkr8JBsgWF9aCXwTVH9FvFDZWfxMBN4KVR79PDCFhpzifdKCg9",
  "key23": "3bP9K3RhcrcWH8C6Dweq5pzi2GDa7xmwDBFUXL1jSe9FqBsJJvbzMgwtw5wfaYLq5f2o7kLjKZUWaLjPe7rPjErv",
  "key24": "QGG55rsvM6SYuSGeT9Q6AhYEStpiVkMz4LHb3okei7Z79pUNhW1xiqFkY7GGn6dNbjGSXDyvAtSQ1mKhBcPXQ2c",
  "key25": "3gx7hZJh5TfCePKFgSGfALtUpCXBrQw44VQxgRDKYMhoqyznM4jUVTq34mySLvoHCyQ7ARCXwsMcYUFP749N77tL",
  "key26": "2utVsp2jXH7ioNFkJQZxA8LSVWvJCJjuhgHt9ExgTdrfHMQUYAW27ajqmrqz9L56y7iDTRzaHywPts7Ff7XMfaMo",
  "key27": "5hAtD8VPqg4fpfeEzAzUEAZDesc9dXi5Het7vYjgsQPSJMYBchaFdapRb2usPu6B2HcGVH73rELtirAwMqN1sASZ",
  "key28": "2KLNqy4NTfdsvHSyqmzpUGpHkVYvJ74JWsDiAEjXiMPCy17AVqMGGGFnMCfih5pYoS9nfZGi7UWkBhGaKKJGFMkT",
  "key29": "2VDWEUSh2MrmoH7mDZpqeC6NPJYNVcZoT17n7aNMvg3i58FHYMEEZikYzfTAvW1V4wK42zZnBdbJMTiWGfS1dp7K",
  "key30": "3yXes8jrPvHu2fn5QoRU4tEmPeNV7QejxFXtzVwitctHaU5BtaGcHywWhxXDrz4cckhmwckttVCEobqawrvb91Ks",
  "key31": "6ouKrSpRTrYCU5RtXHm5BBvApAdeaVQrRUhsKYtsmsp3knwJm9B79kHpfM9wrsUPXEU8wjBL4LVJZZ2RE7g7c8W",
  "key32": "3hP9yj61LsfMjMud5as8D9DWdcWcE1c5XUPd2bKXpVJ7S8wBmSrhAGvSDfVHv384S8SY4EvXauDfsxbFkz3z8yr2",
  "key33": "4kHTdZaKhpbJsUM2pph4sZz9F6gZwoUoZhSzXWK4ApbfXFnAvQrSRFkHfc8c7SjPsMaFKGvzrwyCP9ZmdPeUMWnG",
  "key34": "5cgzR5NkHvqZCLmQukqohJ5EvbnFVe21Wf9Cox9HRJZX7jEvgc8aUff9gJnM7DgQhLV7rgTgUzCjbFtNgSxbwTdR",
  "key35": "2AnbMzrADWtZNAxDrMDY9BeAyhmRgjEFjALJmS6HaNSdLK8QxjMNEwQgKZTbhsDsB3iA1sfyTEQbcWEcdnwXvmKV",
  "key36": "qxW5cPqPSbzVTJ1yBSXdXTXkVH2WCiYNDuA5qFD9ubaqudAbqMujngfmNwHU6oieY1LKxcNCM6oTrXoZkyeeLEk",
  "key37": "3d3TKeyjzhwjyJmNowoeg8oZhu7Fprhq7GjxaP84vKHXDYyP9GMqKorfbCZzPga8eFdRtk7SpKzVaiA5xF3c3LLA",
  "key38": "5Zts8e25iNu9gqu1VnazmA6GZpe3YopFub2ygEU1aMF1ULmt2bvi32iNsTEoM1cRCER6McnD6ewNwTMFN7hhkw9y",
  "key39": "5DTNhjn642esU2EecJyeio818UjLJf5um6HTUBfGxHtJYo6b9ur5vEXUMSS7KiRd8LThqYvea17ZZZUab2p8DomW",
  "key40": "26bFedncWAkfBbbkNXJ3so3Zu2aGppVBUpgDctG37j8yNCLV7qgvW6EYmGjnQSG2jJARPoBBKY8iT7rT9cU2yhmb",
  "key41": "4yx5eFba6VagpMCCccNtDhijapEZpd1H8d1z2N627ZwyPMDq6SEoSFfR3bogd423BZqgxpE1efFqGaGk16DGUV8S"
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
