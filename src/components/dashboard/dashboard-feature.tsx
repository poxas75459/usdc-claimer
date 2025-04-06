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
    "4HXUKFVQKDSbiBXRzYiE6oDfSasZKXBz2nwyw5TX4MhFqypHjpLCy7VDMipR51aH15hvRgsuFq9eMoGCGdJQgk1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kRXBDwFmBNA8QR3Kp7Sy4yDeaf7uEHnDf386L7vgPsUXh5BQ5pam8J6TmhPs9msLKnb9ZjDq94fEo6LK7tMx98H",
  "key1": "58TdaMkRYcBcESjjCdyZcGkpDhY6SbwMUFPf8iiFe1yk2YoSYbbZnRifwxT2GHDomedt6YgmerFRNyxGgFMZ5cuH",
  "key2": "2ZQAbNK7EJMVxwJDY59sSky6Gzx6MYbXkTRjzPyAmCMvJig9XPQpeq6jFiTtmbaA1thUKgicE7Jb5b6nSanpxhM3",
  "key3": "2kMHGN1qeU4hfd12Mpsre9wFV7EPSmiY6xJb2GXaWVqHFs9cHqyAzLTJSjCLQGVmQ9KcJruFmcPtHUntbYGYYv9a",
  "key4": "4a1VqosZyZ1wJQPCQgMJEzvywpnH1Z2Qv231A5mk2YiRQ28aNuzctTQkBvfLfF2oQaSq8fBFHQMGL1UdXyqp9U6W",
  "key5": "VayELjWYTdMAUk4XX5LNaxHM2DmsH19NJUogjCwarnnMuqKVx25DhyMpToBQErLkeP44eYxokKDNPwK2Nf6BFd6",
  "key6": "RPKzuFjujFEai4oU5vJ5xNY1Ng6zFcG5KX2HBssAfmAp8NA3m32Gk5TWMbsCxRpRbs3euYPoFTYuA7P8VqXzw12",
  "key7": "4ghYUwmspNfjVPfXARWzytBGup7Q4cWs1j9SfyQiaLQpJQKQv6xir6Pk7trGBGi5DctqTgRrjVTgBxTriSDJaTeH",
  "key8": "xc2THwzogmtcn3iorim4zHqsfebWzi2zr7DkwHzUdbyfB6ZYmJix1LiKWV6GH16K8Nzm1fv4YBocLzBxwPSMGZq",
  "key9": "x7uKjoChZzvaYr72ERaRBF8z15XaKii6k2x9grmQdnsFtqpBogbjLJcN1nEqVotwSBduKn6Jg9fQux2ywSLwqjp",
  "key10": "5ca1KpbcFPkNVzi4brF3JuCgo7ARJTRKWiDadLwMgV44bEEdDTnoRcFZhF2w33eSWxm96DxkmQ4WFucLKMb1JzSe",
  "key11": "3yNTsteSzJ1XfU31Dh4VxUF8CtceMFN1eT74RgPtSNtmRFkEibH6SQc5MmmkUdm6Eh5WpHjXychX6W4SVG62atAu",
  "key12": "uZXgESTdcGxhDmM1oxfFjyNE4QnorKLfsRRgaP9yMVzWqC8sa4Z7NpQxzvkvbHYgGqymiwybXv2dJY3BbK3wgUu",
  "key13": "5v38PCfmpPCMSu6zy6obRS4oRvNErgK829NXENrxg2jFMzkwzcQGCAXTRjZAWJV6tst57Y8cS1w49LxDzu1E48HJ",
  "key14": "4PyokBp4Rbj3kcVStYTMctRdTTyKWngQS5gPM98kWhdKW4VtdF6Mr9w2tCpt3P6XFGj31hh9qsG8JKTQekiSixtd",
  "key15": "3Qip76avzQbyvPu6jRG45RZ1bRJPPEErTi6uQod4uEmT4wkyqarHJKx6pP8D4X7avztvtCNEz183Bp3xine2SzYA",
  "key16": "ke1D7bdmtWAVAGTgkDEtvyyXL4JYynC9CwX5rwVfjXT98eoh2Ay5CvSE6tVa1FFLTm3YoB6YgLCToEkJmhXnxJF",
  "key17": "5kX2VrFQuV9dRmDNmafW3o4LzsTYuaqf2SVVFTSqRW2ssuNcsw63tkgJbsfSnoCfXxcjZdohR64sBMqEPUkQTdXG",
  "key18": "3eb3PhP8ACfUZErPyDBGnKcrhUqfT76yiS6MKKth8z2RTgVAiYuUsrjuGjWQmCTapB1vbyX9YCVoAU3Kn4Mznniu",
  "key19": "3kfspYgFpmPfFXgX4CceWoUTyCzzb8eKXEHVPkA6DRQr6PLCrh7KFNdvS8BtdC43WGPTKVhVGi99yM9wn61TWXJk",
  "key20": "5qSf2vwBVhCcSZej38eYBUf4o6j37cKwj3zyYDAojkiGurad2Yn22AgtAC3KipxdYua39F8G3KQqicWhngqxxETg",
  "key21": "Fuirw3RVYS6nfXhAJqHsssaNHxecc6zxHonM3xkfv1FDbda6jMvRg5R6d3qZw7VZyWy2jQV75HAJ2fhoeGe5hWu",
  "key22": "4fEfb2xkgNp5xRxEY9KnVzvhg1Z7wd9HCzmQ74pqYGyYPJ3y2BEQPY73q5PMPg1QQajMmcc8S1gXTBaJXhCg1u38",
  "key23": "ywQe9eon16B3wYBYakg8fpGgPemrqj7VGHnedw5n4iUSNMcTtFJu2azYHemvUBxvc2NVx5zcVz9YSFP8xSmrySU",
  "key24": "3vJhkXmHvxpardxZk8F3PtT9RPqSoR4LgRFYRYWvtJ68eiAXAG8KMw8pLCmaKLHYpPLL8cwAsRnxMaxGcdNK6BNw",
  "key25": "3ujHDpABx3kBxEC3xQcfctd2KgzwqUqVo9B1u4aGdqmMqLkapXHrmMyZ7dh2mhN2tU1fgFYNQ6ya92jhLEi5UW6y",
  "key26": "5v1q8YiCoRapjGenYptqNjEZVBTfDkiPTmo1ShPiNbZYhtWhkyGEycgPZoz6YtxMGN4ZfpFfFfMSzGdrGqP7DKyP",
  "key27": "49jE1h9ctoFhUERYZ8kpBNhhm7U13dCMyAEhbzDjju2cMdJgbUis5omapvAjMMHQ9SYoyZsZPbYqQndCEEfiWqqs",
  "key28": "5ytYggkGVCfvRasXxrYZom2uQEiNd9uG7AHigxegwuwNh2R5QLrbqZNdEH5khmgBTZcsxFEvc92gHeawjiGdUD82",
  "key29": "2Vwf8G7BigeSo8eJQhQ21WmxFvPhCniqyB8nBNPFbxkqu83RwFrsoiUDZHMaJ6gPaZULfBVvrkG7XtyHac4GsUao",
  "key30": "2i5dY5aMQtdUkNxTt2gCT2ddkRU1s4HNBWqUWv6eytjxe1mt2LkqgSTUj6aaG9daFiJFGs27iCdp3j9E4yBTgKz1",
  "key31": "45ZJ9ET5276AAcoqJ8jSMCmyfGkQA41CC2b1iUN2W2cNKNPL8cHqnGgBtGb39GaEbZFzqrzYhb9Ar3Fn6FJ4ZxVi",
  "key32": "p6Y8udWQeufbGwYKYmAZBiY9XPUtDGvJwwZDiurzACGEoA1pn6T9M6jSpCjctV8WQTYjWp5JVk7GZcyqeaNcpxa",
  "key33": "dFNLiKQQzFnR8H1sN4JF1ZWcYgeg7yY9hmfER8rCCcZW4s6EwKhqPuDk13XXaFo5XrwS4nhDfpVyE4Yur48C2t8",
  "key34": "5jwdeytNXPNUzb9d3s4JC6TT4XuY5fcvW27VYz6fECEXaPKDkD4dJXk2DqLyBJkDwsDm9rXEw9xMMNgkksCxe16P",
  "key35": "44tCc7WoMSE4mz2M9UGSUUoJr27rkqjbqucuZDgXsnSsp2QGt4it5G8HAYazuoAmVyAYTS2dY4uVY7Z19eDev7yD",
  "key36": "5kY56t56i82gbsAeAfut7UuKzYgX7PjCdhH282RHFkTk6YZYGSrVj3441z6ySWzHHcJEr9BAQcgs24wQcf49HjzU",
  "key37": "619BPxLvaXCxuvnmmiZgorHoNGBgGGcNvjt2FFG9Yk3hEdr4DeTwXhZ8waU1RuYEyfq4oF8payMnzEoMFBzK9eb9",
  "key38": "5frzUUsQH4XBRXYqgoZ8YTHR2iDPM9pCBCskvdDmWPABjPKmLXu7YTgDjiYAoVHx4EajDXjSpoUiMiWnLWuTBQKs",
  "key39": "4QLd2Yt5h9ZesM5NvqdLqrxDLEWUzivXGmjLb2netspzEhz4CaTeoxdVHi4HSRpARdSrWmFGDhQmVNW47TboCKHv",
  "key40": "aa4si9vhM5oVCbnH1z4hMhzPNgxMxKi1S6fcHKwCkDhezc2VnCuSPf5QBEPTfmbgcfAYgSfoicDaS4sn5wv1YAX",
  "key41": "4kxiUnExVQSvehrfSQKDdYtFy53fur6tyZu1gMQ99UCShfmciqRkweLx3SqPnZiVhHEnJoT3tcuyKVMM67n851Rg",
  "key42": "6332WkoMGFS5PvxZXuPN4EZZNxn5iC87HNhieWwd9m1XZYehGF5VvwqPudVkZFPh8cNQD8ckNNGDj1u8ByXShtTQ",
  "key43": "5G24164fyAJJTXJT16XfHa2ppcVgErgNm9d37Z4ioVd4qJnfoJQepeB5G3mANLjSrebgj6H4Wqu8joB1K1Ta85vk"
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
