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
    "2b48j2KktA2PyPNVS3Q4zhtD61PQEywYjEHpVqQ5rLXEDzzr4VSsDKeQydJqbNntypKDJxSs9ii4F6aYbyVzwMwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrbByiv78QdZFaWPrjCjoTydDEHjYVvFgTVZSCoh5a3TCiRyXuDiudJtR3yiHymHiRoz9FfV5RzW9qkXWYYSKVA",
  "key1": "5fyMTkZJES7WdZVpQo1z8pQBKXob7fVwfkMkEwGXngvB3BfsjbDHppUckhvLbBfeHx2YG2coGLzXQG7qkbjLVGuu",
  "key2": "57AyqF8LnansGbSeLWLWih9PWLWw6KJRubywwp3wu5bNRmBJY47FdfYB8BKivF7gpYnbRKpMgfGipkR7KwMaYuS7",
  "key3": "5m4n9vgRwS3zukidFeXqDYyVZdfbZ4qxZpVRdRs51xdir7wTsyHeNfw5tffgfYwu5ryromPBSm8JYeBTX2d2koH8",
  "key4": "342LCX1RrRmYVvj8RpcqPnduj2eDcL2WWfudt7ESxc8yaS79nLHzuqbSro68prjMhW97LJ5bf6rQywftRX3K99WZ",
  "key5": "3iDDwDiLQFzz8KPZKJWwJmuL9jTjGtZLFTv6yjE9VVKcvanZdehJzDJ2dXbMuxoQ3dC258jArpcMrTBF5FgfXG5N",
  "key6": "3nWtnUv33kXBueGgEwUYg3KFyvLReGdpYvKpmBybTtpwgWyy4o18PUYckhN3YymQimvy9JLDcgFgxiEsDtkjMwZ3",
  "key7": "3CZNJBxSTxs2bmz5FihTZrE9MFXP1BNwegV6tRpNEXjGN5HPEoWzd1tchrU7q2pH6LUadY7n6ZDpXGrSdUWrUtLR",
  "key8": "63iP3WkTVupqsTC1poBo9UU37yo7t5DsUtjNWKqTz86WrYK7iiymK5Te1pYjfu8eiEMVnqgmV3BD9pYoNmRpXf5e",
  "key9": "RDKKq31TWtvknF8NjxFJgtBfFFUamMowvNDbZAY1DuardU7nJBigbwYJB1mc3TKosMAUPijP7sUyc1486BMwZdb",
  "key10": "5PSHBJLaxfGRgiGpJPN9zKNBkBfub7YyJR21NEC7Ukqo3uDthkxsQFsRwwKz9VPBbyrT49RbXNGh4geztbgoLtUB",
  "key11": "5vRXBSD2JbTxoTTLfzGHkxCAxdfNb1Yw45dLyyx5LwvV3CvShNXNeUCuSjRWNTSgyr5ixoQesRfLE6EYakqYexQZ",
  "key12": "5jPH8MjioYFybtP7mpvhkh39vM1C96rSdCKypADhBSdMGbgjihVvUbixQ3RNbp4TbEBsLgKMFGoTs8xfKTAKhW5P",
  "key13": "GkaNEJi61MdEt5TAn6BGrhjEkzRK4V6r3VhRUdhnWgE72XXc3VTVnHWLiqFSNDDhdCJygVyvSqYmXZdxatqZLSj",
  "key14": "va9FcWioti5yxGKVJF3DJe3CE9gav64xVtZVXq4YfP2b9m9vaQMeF1NGrchqesbjyVc2DbvHXJdBdCi2TN9hjhE",
  "key15": "4foeSwtVmSkvZZCyappAC1BTFVqUytLQbvrP2dwYGhKLjh4jD257v87XPdQbdndAYebNLJR1Gtwew3QRSUUkgoPx",
  "key16": "VpSVCJnudLPdQwFMQbjnC5DpeaKatUaZnRiH2b9Ymq8LRsHWG2BjFXKDPW3PNidNUs4Sw3FwWxaLm62hcK856Ri",
  "key17": "4tLqz55ZcqHWv3uUwMJGCzaTq8c3Dyi8F5EdbRwirLWyERsF5p4jmoQQdFefdXxqXsNjU1sreDKxuQzTjskgisDm",
  "key18": "5xeVjuucXrVj5QVYhZcoQyuTtZekDmBVu36JXu4QG8GUXHNdFUdUXZ6VZDFZBum45jS53PS1bSVvNbJaSimNQ81R",
  "key19": "4rv1zLvebh5276YQHwnYUm9DDV6BzQjWDWLM3SPxpHvct5uQPdJLhCjtzbvm76HeeTdduwyhuw5pYuyxWsriUprf",
  "key20": "DAvdVWK7qDggxbsNUMGXTrdy9sV5UpF8wrFUXVhHAe3bf7SDVa8B5JbogeFVzVRp3UVvSy3dB2HZ2EHRBar5XXR",
  "key21": "5hXUc2QjceZDSYJgPbvsiLaC88i16gTMyPh9kYR6rujvAj7NoR4wsPFdn5bVZMgi3HYrd8LVLLwtDxPD3hTrfqQ5",
  "key22": "59sMKdF6LnKtbunLtCZPgJWgP7UGcJjHf1fcdyfwbLSZQTRms7fqtoBGxbkXUic5wrW1XWrXdmSWCbovFSMTD6FB",
  "key23": "F6GBi7SJUMEKpNeywWD8nJJEyxdy9YyQiwFY2o62wf7Qqhqxh12tk2GazBM56L4Kkn7xU7gPM9zip8SywustqBZ",
  "key24": "5XPGJMeMLwuvBDBfaT5YsVLfxah85ABUtRR6pTbY5ZapaUXaKeryTATqLLgpXFidybDd6XfU8jbNeKXHErFYBxJx",
  "key25": "3be5ZkoX1BfY5GRDrG9EWRovWNqrEZT2719nGdjGxzYhmdPrJz9FTbeFgP3oLhxzqcBZ8L65VZiBN5uKDFdGL1TN",
  "key26": "4qqbUFkh8B8ttRWM2LHsQ5f4MiUkkx9aPPQ5zLfzdMR9gZUiCey6dT4XJwkv5CHAabDm1Dp776oceMBbtutMZxk9",
  "key27": "4k9G9qXcGJi148S4xrWkMSTGupCieXSp1moKBDMkJLSiG8TQLKHQoyw6q3Q9TSb8X3miWDqtqsAukPc3ubUtXJ6U",
  "key28": "66baL3k8YwwyGTNp2LaGYrCWcNwueanJLPqNCNffVnrxRiRvrmtHmXGUwS5VWiUj6j9H4ZoncPbGvMQ4yPc2SWNm",
  "key29": "4F3PZBz2UcWzwj5vc4SRd8aUT5Uwg2yXbdxU63ikhVU7a1vKVrzpCYdfQxKQbVSpkFpqHsrKJ5GP6DbPYDrw6BE4",
  "key30": "3wPVeSFJfz5ttkALFJCwQZC66ndjYbyrLCYu6g3AcH6FSoAssg2UwFkByUK8RVxn19tZB76q1XFrt9nPiw8pUQGS",
  "key31": "617w2ey5HrxApZPzQ1sjw6A5rTik7TRM5Zh6r5gvtNAnGtzk3VLfTHQmnqYx76Mya5MkXsVwv2UosnGcx3XqBbZG",
  "key32": "Nx4rEMxRcfGo6NUZGLEAMeZUq4S9toTN2VMDQGKKu5gZBWtMXQ6mhtyE9TCXA844H1ft4ZJnUChbeKiZJ4PQenX",
  "key33": "2KAxFm5TjtE71CbGB9vz4YSVz64myMjFJyaqU3CwXe5gDfXX5qPY4wScZR46ivarwLQ1eLCAUakjCgGzjd2cGdNU",
  "key34": "3DcrGM8GmMgXHf7KKnpyfYTNnMJfYPpyAqJAGZt27ozor5UxJBtG2pJmUXx9VUUqfctjerEWcrkqbagbqfD5dc12",
  "key35": "5hd64g2Mxpfxa589JDmcazFovBx2YuqVCub9U46ZofbkQ58KVccyMevHTfmirqYeWJX9y8LegdE9exVBqWec87MN",
  "key36": "4Anqc5VpfnXANyzQeYQC5kYwgmjG9sbNRNyXrpnq8aybHsyYeKwrqUvufwPGMYU5gdmZSYXpjdzKNYCvYqj8SmcP",
  "key37": "4szqaNAyfiK9qUYTLybddWSSFa3jgPo3RTvsYvnMWWfApjEnv6hUHQpPboARCmgYdMwsRHszFUW497vFTotdi4eJ",
  "key38": "5UQFSpJrG7j3u6n5u4UrhqCdkENDH5fEeoDR4jtktmKjSDJASKSCjop6bUP2DN8YUvjEkEZ8WgRtNK62drXa9Udn",
  "key39": "whduUWJRDmYGo9ukJaswaUM6yTHpHjQL1rbFAvp14hB4gCcrhpBXdKJ3z58F9Nrxs6ma748u9NjAmzp5ssVrCZY",
  "key40": "24tBDmz59fhfKgJF1SgRtvobiS8Y9zirX9dMtZ81Nb7SmDmBqYyHfrUy1hWTUyxoXywgWVxGYxS7BbkpBefwA1nE",
  "key41": "2t3xdS4Fr6fwfYN9FYKeSC932RrodgwH2wJVxcktdT63ygsL76p7Yu7HYjHL2dVJqBVvc77Tc1JgkLScr31h75zg",
  "key42": "4DHJ6iXbGctEh2AR3E8CkSJroAwiefn5nh8AqbaeEZ9xvm3omebtUCBfU81n1uVxmDw3dfuaaG2WG2VTaPaZpp1K",
  "key43": "53GneZATRQCSo3coHgDuFXNn1ziEzj1fbQrRUNb1j37UY1tArNLcBKpju1FP9v2bKbNXtKpexTxNkwisPxuPP5JS"
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
