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
    "21SoU9Ax5KRQCD9PUgQRf9x7JmkmegjnjgCi8dsE46DXTWgq7bM9872CwsezMnuawbfegqQVzntgp3ueoLGsRp6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hoz9TbWFpNAauFqUR2PbeX3SeURUwSqJiJBhGYWq7z6UZKXg3eLyXdqbitUzrKzWHpXEYBFSRCDP7p3A4WWSDLB",
  "key1": "4rz7wLovFMB4wnNUWPNfCohEWCjgRPbLCM4Hkg5TTcgkvq55SGM4siy1jPJoKZBYxEn7PaenJeu8EtZbGXoauJq4",
  "key2": "2zZuF1JUzU9MzJHMGM8xGCzZZ6kU77Cu1nHK26H8RiJRCtDFLosCyV6X6dA6v1kPZ9bPCPdQPijfcZGVTykb51ej",
  "key3": "4pJMrfB5gix14TtnLh3ZuFg8aBdHwM6hr52YqebH1q4okEAGp3eavLb2Jue48WYcrBLKJwQAMLEV4AhtwAaWLb1D",
  "key4": "395jRUaP48tHjSy7AfeYLRLRkEv3qmSpgudy6CGhDo3WQi8q9rmsRrZDqQtStUfPFavP2n8EhG4s5YpSGy57SvQg",
  "key5": "5VJhioM4zN3nhzR2Z3mXuxZMgAiBmFA54mcxfvF16FmGVwFHWBksRQ18sidnF6senoDBYWUkLmaqTLPoqTzpfAmH",
  "key6": "4XENnGWkhMJNTnRgsJpomLxDsey5UQhxDSfTG29gkZawRRVshcprkXum7pLj1TDCx51WeKofHARPCtCaY3dy7WNB",
  "key7": "3zNc2Fu2SGNR5R5dCRTCYQSLyCZXMC38yCf5gj3CBTGes2wesq3PmzANuLhk1xg2ChNXjrwVa7jANSJupS358LHk",
  "key8": "59oMvh3egLHRCnJ3PTeyg3TScrqamnyspafFsfTKMAavUKkYCnxPj91Z1RjJcv3dQPHW6xDgUQCYz7y3phadkKta",
  "key9": "5gdRGXrCc2vu69jBhjwRY6Qoc3JUMboge5JHNCtYR6UwNAFBKBkJxggJ458dtra7VPSNyXAeHE3rmtY24kNjqyYe",
  "key10": "32sDkXVxVQ3rMb1gNC6cHaDBLYPYT4kQ6tPsBkM2h7fg8mEKS7Vj1zbyWH2oSq6QLtN2Gtevtocy2dEYuysQN1Nz",
  "key11": "5tEfD4gXtcKiAigcx6RAvD1HaH9wPCwe94GT94FaanzwqX4VPT4NjiBdpgmZYMR4GDV2nGzTbnkfsEAPGYdYv2dd",
  "key12": "j2beLfT6GZpzecxrnFPtjZ27jBd1NXRjbvtxBzftRnXLS3KrwyMGyH5TLngJwVGvcdpuqCGnh4Q68H5bgJQQgn5",
  "key13": "2jo1dXH4D7nHgzuRLcoBB2nDwhyZs1aV9RA9h38nN7BYLe49yzeUwK1tckEDqeSEMBm2tC66WGkeQhS1V6u98MZj",
  "key14": "41SstB1xhQZthEQwqeYwyYvGGxJsMaWgkxV9QDzQc8Xnuj3kZ6zMzVUgzTUaHvWNF7NunyFLfkXi9ymsyqpgYxoE",
  "key15": "ZAY7NqdhdXoj3VARLyL4jM3qjF9YM7ZnPYq4Vaasvj5cvrkpMpbqZXhctQjafy4a4QVvZDvMA3dNMs2kDf5qzy9",
  "key16": "67aSCPq7gt69cnkvztw3woYPKcGdmq4vhTQJNHVwJ24zrYEDgvdBLv8jmKLTUZYaFkHNsDvRH7qfMmaHp55Uex1j",
  "key17": "3SRRXbF9ViDm6csMicuy8YcfjadqGvJ9adbVatQwfQBHqjEqYfBFB3RyRVqa8aRHuXKKd3pRF4ifmNEWwDNigzM8",
  "key18": "31p8DqbKmyy34xTUdYSxmAH2pQZEqmfsaVfnMwYFJPTYBcHhuNiN4zLFqvKWnkYxBGy7UDGnCE8tgogJjqGjs5Gx",
  "key19": "3MSiL3pT5F5ddBK7fZHqmF3NbScNgchdyyNfUThHdSg1uP7AsiwRch8zoPxXKn5oFXatXfFJG4236qCaLEuZdjc1",
  "key20": "4yFeZVVik5khU7bokn6e3ArgtSrA5BZvSyKAVfrYWfc71RdDwk6ZdYouXNzSyeX3MdYMphxqS1edatUuakgc9wWQ",
  "key21": "WE2GPxaj4mtkHxQQtWZJ8Pz3SrcPPmV4N91gtEEUReWNC6fyRP5QBCTuvvRYrSkhfFyYUrJnWg8TF1q6WaiQUzU",
  "key22": "2VgQ5yUAfBQLdw8xCmDwxtXZv2HERYBd8xHXXjPJf8nEPkmYPHkduUvsgCnXn3chzoSQZxbCieKj6SctoyCvv711",
  "key23": "5FBfHeN4ZkHp1PbnZVgD5QNBrJaTGPQvG1jZoAP3YeHnziREWKu7HbRmWsdYVJBcx3totQDd2GzKTNLKhFsY1xZP",
  "key24": "2z1z7rvPLTNiEijgDHzZVu4A5qPKFqjAiaAAKZzqJvzxFuk3bKfLvW62B3DhsGourNdzVDvJTUPo2zFxYwjVVPVK",
  "key25": "d8nyXyTMhba7PgyX5VM6TAygR37EsK29iaqMUtyK3jWaiSWngrqR2MRu9XaDt6gWTQ2Cc8ErD4fAbe2i3xBhw7o",
  "key26": "3r1jETb4HsaCgz8yZkMr3dFmHm12gGSF3WBpuTTdADKJMkHr5Kqre9V6M1ZdN5AHqgnsx4CtrRZvJo5dKAGjxxiX",
  "key27": "3RAAc59GeEhoVcgVaZLfAoxtKoF78T1GJMVnWtqRkB9ZohFV9kxyURup7uGwEC5ZCqm2GVtY1PipdKfCbXUsP2Rx",
  "key28": "4HZ6BcpA2Qg5oHjQrya91CWJEkoN7RvyMgBEdv5jppNnF6tg57VScqG1q9jfEXaChofcezmqCyHNQWPzB87wg9PQ",
  "key29": "XDi9yoA5ea1my9ec2ScjHgcpAQc5DUY3mSxZdcTVpUn2YZq5AaUUprfX1vszrt5xqMV9YhbKNyeUGbT54A33oZT",
  "key30": "3eopoyTXyaT5qEH1UVmJJHeJDHZmmjkGbJoyMsG8JqR5FbNB8qELd1cRbpdj2JmXMTNy7gotGj3HxPG1mHWy8gAv",
  "key31": "2bWnLK9c71dJHq8tBGdctPB9inByb37VGEQwwUcpUSW9YCynW8XirqyTN4MPhwQbzcm4dqcyKcUPEaefeuWjaThC",
  "key32": "5yDPCW1GrA4VaYaz9WxZE6Cutcs3SC8DK1rys22MNk1VwCfg8Zn4aUzUqZvGWauQPvcBSXrshjbVScLvc6ugwL1E",
  "key33": "2UU633ZnRi4QLvdY9uJ1v5RkaV3f8pHTcCCLKVdguGKgjB1ZTvp9Qotak5y9zX7KdRZoqRsH9GaZxDNbgjs2yZ3L",
  "key34": "3sJVU9mTLompqwmaNRtF4dWRMGj165nt7YzEsEWc2RLhpQx7mCbMrjws4qoxGhH93uEUo1kgHytitRToj7HMFxar",
  "key35": "4dgizVWfu6wTYyxbJui1nVw5tGjptTCZdVCPNryXQLUQB4kcYQhkhshskPWHnUtxqpx6JvKtmwDxqQa9mD9uUfHg",
  "key36": "umPR8v2jgY21tJYJpuT5aEwQMVMPSXTAZDyocYhqozmWdrZoDtSJntfQ2cE1sw4NZJpKRp96P9KxjQzVFMMUeXP",
  "key37": "3VvzX4ja4Tm6LuYcTVFeJAnkN5FYPTqGrtNG5tiE5nWGeXN4M68d5cKm6dLcemCk7yj3T9dvyBUB42cfEu3Eggte",
  "key38": "3kJNeWGuceqpHLpAC4Q8e91eYa4rKt7aBkNaipPC1ddZYDifrsHSo7y6NoN5Y8dHMaKfJS8Ky1mXhxbD2dW5nHFY",
  "key39": "5SVbXhYECy85PPtXXgcV39UhJ5uKKMGhqA4eZ5qWCxTNBsiPGoPR5N9wyMY4wHZezDCaLCe6ez1Nbt9qwRzdTjFG",
  "key40": "2BCDRdXoRU2Ee1Vt8SYbJyRZqrwVLunFWiMMJe9SNC3634xUiPWbd3vJ3Z2nXQNcJaBAfXr4ksWjezY3KNzpEkzy",
  "key41": "5fRVFFkq9BRRGDzUKanp2btAm16h7spbMDtemA68kH71jUUTp19BfqV9xcqB9HGze4uUsaiRTFGvQNV6xMB9vJua",
  "key42": "23jAkBi8iBj2ojPR6UgjaSdvPA2fUtk7aqrrU56GAbBsz9u8s9iBSXkBMNhCJrW13vb5jUaukHkmYE1dJz1BsFRc",
  "key43": "27roUYrQ6wMdN5yTP9ez7nRya275PVKunD63BepMPLC12EPDar63gHQW9aveK1rMzfmA9Goc4W6ryGAs53aaYWEe",
  "key44": "X5pSrButaUxixk4DTaneoHnkHYgFPDc5rzdkAZkE12QaWHAfNEu2W3PwFpm11NsCm9nbPHV9zY4RavmEJGZRYAi",
  "key45": "45ZFwvQ6NG5G8SYxEb9h5L3JkBR1Dbk3wu3XWFQqrAYCugKWKyMb4sTQEFqvtnX6ReNJWqSwPNUkKScpAM817R8r",
  "key46": "KwEmDzoqUpoLvBgJfqDW13wWtmB4Y7jUHqfHn8AYbNUyyaorGmXzNk1ahX7Tv6zb2YFyNnUjqVrsgcqBFqddj6K",
  "key47": "46WowaqVKUD7brX2Tfmt58o1LYEB8iWtnEpGSviqhvK9QrRHmvaLxRxXHEhHFP4uMg5u5AGiohTrXkMHV5spmdu"
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
