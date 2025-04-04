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
    "3TPHQPyvqbjeGAkwTtucTc9hK6n1q1Ne3ikn834BM2wK8A8iz1kmmQpT6Lw4AP8vNVyCfEe8DhCFEwG7ZdpCs1Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTQJ7Le1xVJBcjDn8te2EHf6G42LatLEG3XhyhQ6QuHJe7Vt3PdCPDJMGXsDY3XW8UCQGEBTrxkAtekjCdTmDJn",
  "key1": "TeL9PWBtXmoAKZf5dUQAk8Mv7PhGQk16sN76G5BcBtPiwiN17BYguRi4XDnGFDVbdG2qGmDJBrSmnFbnKyW8eS6",
  "key2": "VjLESknSRLsrrj5mmtibNGDK8pkgpHwVwUu5zSxKm7PZSrs2qnobNQCQYAwoVYcKDRwxE44jhM5ewDfneWjVAqj",
  "key3": "5axgCL6EwTqsTU39uKT5dZm4vm1pXpYAo2m58pc3Z7dJNdQuisfLM5CLH9s4cdvuM3ccAa8boaWCA7AxaHyawySb",
  "key4": "5yhX4U5za2dZgheyS538P9fU8VoavWqFtJV17MgU6S8rjkoPkpRwhGf4UzuyC4AuXfhoXvLSkTW43jrrZU5kRorG",
  "key5": "qFHkYmZpctp5pQ7MhqL8gk8nTyQTAaiwPzvkw5AteArM5nHRKdYBL8KmMbUNpxVMRFSMk5nUF4JqqiyhqKRgP6E",
  "key6": "5QsUBXxcogrkarjaFCvTPc3EeWPP9sFuQQ6YzAiW64G1i25iNZCMusLGY31cgbhnBX9QNhJ2iLQtk3ZJbdGfQbhr",
  "key7": "8m8VhGpAgmJy6FJveDssDbArpQHCvCaorEPXqrCA7DYMZmRKUwz879nPQh3EYEMUcAEPezwhtAv6pGkFpPHuEnu",
  "key8": "4UJzWsNmZiDmSuqNJy4wvke2h53XfKfCwCjW5zi75RaDE4eZ1fUqQ1ycekAXvEPZguwitycQfH2wnuubEfaasqwt",
  "key9": "Yi14dz7wwzTcjQVq3wKsX1rY3YZprt6kx6xgFYFUZbYxF825J85gesMKtFDtKv2aiKBmDVB1y4hnTmXx9RgGs1k",
  "key10": "Fo1tY4swXMvmf2ioXvdEG3DwWYp4YMDRYEYtSVZiikbxfotyjxhgEtYFbw9N6MnzgAqkGkzrTUjDd5t3NdSfoR7",
  "key11": "424J1cAe15vTEqeaB6ujUeNuvx8TLLd2oM2mePc9Dwp7ixdg8Ccjvg83PQxDneom61ghm4HYRsmgLWwoKTTu6VHY",
  "key12": "2XWgFU91iRVQ1R6WsFMV4s1Ds4Hxdrhar4dbBw7VZR3dAA9BCMpq51Pi9uaGPXPewvcp7UdNxN2JDuzWzdYjbBLa",
  "key13": "4ggRQrxBZxT415QcfswWsG1hHE8KPuTMYcSfYdijjVY73wJ4FAHjjBZkfuZEWpVjhwviKMZnVF13FxDkUwwprtPY",
  "key14": "5iziEmnxKRXht1GgZNRKpuBBDQPz85YPvgZUkoXgxFTALUzoLnREGqstWAX5yRqgD52XppDPY4eKHzcmch5Lba4n",
  "key15": "5P226HocsM5VXBnJ5C2nTJCyCkGSKCQVEhR6ohxYrLLgATVNUtNsKUoED65WZyq3rfkU7WAFGe2miFoR8c8qqCWJ",
  "key16": "3j8XUKhff3bPrZzdZjbMmBUF3aLqTyyQHKGtVstNQAuPzi2cdeQPx37x97KSkvKmDoe7yPEsRpQJE8m5qtrpxEcQ",
  "key17": "45xDdJ6CrGdE26YrhAsZdko4VhGXvi8x9ff3YVuWJuJn8N1Tx7KSjqwZrWZrvzeUUmR9dsxhQouSaKhgyaaThDjU",
  "key18": "5h6RXbnEeaYkdFydzoaRTspdjzsDaNopGq47PBo6xu1FybPXeL4oLwivP8b5GV6PPRKFQPEWZmB2ehsnqTcsyXPe",
  "key19": "3SNRxzok1eMq5Hy5KStrLD2wU3hH5MWQuegnd5nB3DuxJY6gxqjpXqroYxYjahdU89bCLesHG18DVPQkAnMUh6jd",
  "key20": "LEb1QYq3axZvX6hMcmK5VNK7kPt22fuCAR3C66ZTKvbTgFB2gqPS7qV8rXeuQCwp1rqKY7oMmADAgNqg82SuuNi",
  "key21": "3gNEEKFMN2p3GcMAVZVQRpBPRSLrKTVoHTwhuW6qmjhFQiwfqabHmc9d7Drs75RvoeAQhYGabPpsj4AVHXBR3FHD",
  "key22": "VtbPHNT5oYyEi73Hw6qKqFEZoswwFn23dbeUNfEQoVFoz1zbXJzLjD6qcfZcXW8rvXon9dUwE2jZDJSuSKXkUNp",
  "key23": "4AKrv5u7G7qHifqGqvLXcHPWWcDFoGBSgW53Z8Cn86pWjGUUepGfmUdFqxXnh5L3ZTN1CfsB7yrUCDHt7qc1UFaS",
  "key24": "5mXQfWUJzQUsUt8yMfouW58UKkFA7RnhQTcTPw8KM1ew9DSonrWYhGLvN76hTxHFPvAE2eZ4kfya6cRsKAh2i4FV",
  "key25": "4rzwhtDJgNhcSnJ3jg6oi2iduGQRhDnb7tXkJqc3Fk5NmUw6oQNM6gq94Tu9E6wVmhqEj42rFnXPSqabys9ptv98",
  "key26": "5ywGMpvbJqgDVqWoKnFasPgkzyh8DPKokFZERhyHzBHyNBgn7n7x3Tt4BbkfP5SpxfXHXBaMAQznG6xVsKTrSTPA",
  "key27": "41MqByZaefoheQZMn48RtzW7nhapniMnFJ7D8hjBiBbACz2FXM2b8HaYQRM8HkSGBd1vxUceuHr1eYPGNNWj8Jpc",
  "key28": "sm8eSAsqA93MutEGVcyD71aiA2edERU3h7H1SVGkbnvtk1H6sHBvj4PQPe3kEM23pcwbYn1M4EcwYapCA7VKZxp",
  "key29": "4kX3U3y3GN1Ye1ZvtRnRy7MnCVZrVAFQt9DFpgncuhcaZKVPukgzsim7JEbMiCFWwXZ5FQLRuNyR5T74FKjTGatf",
  "key30": "GcYMTa9nsTtg42CQAXDELepRYtExSMHGgCwA9vtubDYkYHTKPethcPYRwtBwbanvq451oW22tJHMbSWtNx1ptxd",
  "key31": "41HWSjCmfAAayZxUZzjPutuX7DV3jhARcpVYVmTjE1qWDUVUKeced1Z6uFpKX4ASViV9UBEaws2H7DwM7S2wEYHF",
  "key32": "36uCpKt9BZiYmGGzsp1VX4T6YdSXGEXjvhAN5gR2CMmEQtbQACha2oEZXHqVeABQxV4n4Xe9oMz3Hu8899ZKathG",
  "key33": "3e5XutS8uLrKokp3jCg3DEadszRimkbr2nKPCmPVvHUp1NsJEenea9wnxVXtjntboMgZXY1Q43TcVzCMr9qpV4LK",
  "key34": "3VVysnsHNRn2bgxLRoYyu68U8ZqGKUKc3jMdB5DD1jAQfkfjNvJskqXTRzdHrjer8hDJb5Wg6qpMKJewUcjzuxYi",
  "key35": "2tNbf1LJjdyfpr58v5crfXaHdtTwJ6kUNDGaqFJNJRH41D9CWhfFMBUup4wSLjKsd8kRsiB3kADvEERKQ1fvCRZ8",
  "key36": "4NtZsKgJikpux7VVQj1PybDU3TxnjBNmvPwi3gGTyaAJ4JtHCwjrZGmEyQxofukwzJ2yDbNe1EmWWCpwaCSznzpc",
  "key37": "4dvCUuZcEYgHAnr7rWeGtYRGT1rw7LG5iscRwT3esLW6nBnuZwfLZXKZ59SVcAv8gpFqpcnYmrZukP9hE8yYs2aK"
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
