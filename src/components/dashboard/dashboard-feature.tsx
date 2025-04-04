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
    "nEhxmJ3mQYFZ9zS6e7rnS2pEnh337vmH3ADwVdURjH7rRvP4Wk6fYaHzvnGqp68BFiiVHLPeuDoCppaMdhaKU4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C3NgSwytc8cj7i4UkFce4BhWVZQtJpgtHewZwFSAUVCKBAFFUuTCMD27dnWhLxLBU9UyJ3oHQi5K3jwHL9JUfz",
  "key1": "3coWvKQHq8nKzi6SoDYt8uKet4dpxT8A9yWNEMcy8ND7dNhP3Ndn6Uy8k32iMy9UcPGaw5Gg5q4s2MjdMZJoyiDA",
  "key2": "4vAYUVxVtFsv7QdgVVU5L7TFeVQUfe5JpvwXW5R6kvHg19BK4ip5AUrHFx3rW9DynXEZXRAfBGXUgxFhYSgXXtBi",
  "key3": "Zth1vGvqLZ4GXCGkRqrSN1Mf7KrEW7Zq5X4hDWv8tPa6cgkSUGvj4NFQNCr5pHH8odAgKscnnYR8NSDJY13UqbJ",
  "key4": "zVAvgKCRPVWT4zTgGwsXxNquGseviuxWdD5Fa48m9G1mQ9ET8fYeeRWVaRWcobMsyJ4Ct9PD56KxSZ6DH11kmDa",
  "key5": "5v4J2tirhSAXZjeEYGMvxaboJ2D6BaDrvawCM9joJ5dDg3FUJpE62kkw5g3Da7gTJaHqwpjmEe99euj4HbkB1oMK",
  "key6": "54RBzvCrJFvnV67ZgkaKVkYcooivdUqcP1GcY3upPyxWHxjbv2X53VZHKETGbiETSh3EjPPerEwQFRvwDfktstsx",
  "key7": "2Tja2fsMzvNTM2ZERHiraWsjuyr25CGyobEn7pWL2j5WNBm7sY5oU9tcQGxnojmopLJ7oXDiqvZAxsn4Un35r6Wx",
  "key8": "4ge4Zo3uoLiXdVzRq63N9Khmn7PD4C1Kmcf9gMPGc5hbuq5fNwSqVP2H1cV6KYCb46k5iEjMtQLzoHQkwQ7BHyt2",
  "key9": "CgxwxhGHb1pK7gdavZgaZ3FSNinXPmf2qUYZjaS4TsMX4wS2yg72uFE7HwZ5AwvmK3iwfDFaUx8HpSP1Jwi5Qy4",
  "key10": "xssNna9LNSwBbk3R9h8kkk54yPxHmahDxKhqYLK7WrpqBXW6Z7bXQEb387FuVQzFwTsYA88c6yBXRzRaFdqFAy2",
  "key11": "2CUGB92zzn5Xs9Z68Y3nPY2i7zmKepTGBmb59VG8NhPL9ca68nmzJyCkSmy4MmCav6zk4RW1JBszz5DCFxK8Y51C",
  "key12": "3Dd4twTEV4HNB9P3ipxtpG37u6TJJmGa6aX8NBobU1FNqNoAXoJZVV1Y5xCMAT86gn9hXeFLEBXrEMGiKR6MxRwr",
  "key13": "3DeHxZUZebfRuN45afwnXRKyXCZZMibzG6uiT8X1a3Rghj9bwE9CLNJGWBaJufAXUvyZFvdgenJd3m5uxBLzEKuS",
  "key14": "21MsUpQD9aYNrJDkk4KZqCkPZmVWejG9DdS8ETz1KPE4u1WRyUaQuc1EG9qoJ1Cdar5pG1AgL4i2pGKtfTtbcmP5",
  "key15": "4Sfu2ArzajWz5HPwt2E8swhWgnykE9nvn8jDm58HXJLkx4eL9SPL79eXJPCaJqLavyc7sy2o63Y1JCnHWcfD7ary",
  "key16": "3QALHTLuXszKeJwgzwV3qAyvg2FhVbkbKnvrMyB8LgLALjgqBoxkbQSvPqjFWvuGVBtQZJVviWcUJxaL1uiYVjNb",
  "key17": "2xzLf3U2kSw4y46SrZ7c6atPhgFhk3eq5gY8VnSyC4miYrucHoga54grT6wPDUbozqrupF4UtiVutWhMmUGvjC5S",
  "key18": "5Ntcv79LVyZ47yPJUPagfWcX3BsjZdmnEjkW2a2JGBBtAVAspkZ2WdnFBgY4c7Aub5QkAXZAUkTg4Xz9t2LtSTAA",
  "key19": "52W2tWbsSWUhNX4SjZoWNt8Wq68NrvjSZLNtFUgZ4bigRQvk522kw9R9kWyZs4WMAd9Y1QuWwo92EzzZuyAijd6D",
  "key20": "4GPKymeBPQwAtGSPEvFtQWFC15JYDhztsWpu3b3FyR7JXgZTq94nvWMaQ6jkQR7iyqjQ8W29qABgm9tw3z2ZXz9L",
  "key21": "4sAr9JhP2TUmq5apJNE8JzyYR8BUspgDfHFzeaQuLXypuSg7gETyzt5eiXHHHXdzBfSxY2J4RU3nmSfhgwVi29nx",
  "key22": "636tZXqiE6QPq6NkMzBF1xCFQ8aSSZ5rT5bieW5RRMQBaojChsCHhsH1wZawixdTz6wojFLF7ksZqo5PBcJu5qUu",
  "key23": "4DN6DKukjKfVMcJu7h2qyceb6LebethnkjMDUn9njVsSCoVwidE2EcATMC26LRyUNMrjPFn5tmwFgzNjyNeM2RAN",
  "key24": "5w1JSsittrhGzatuTYbDZJg9eZRabNwfTjuq28dUCFx6EPqvcKquvUqqqDg7GJw3yHh1wFBfDFfFBuSipiHoAG2Z",
  "key25": "3CrDZfBpbrA4D9fdWz1jzw2C6bahRj1ZFFgVGcZEoEcAkyGZMz99iSGyHD96gJjRAnjApEPX1dT2wEedEU9s7Y9r",
  "key26": "3w6VcR3iKk9XBUJZAhbu2NyhSQ4oRM3x5LaH6mUvSKHaCUC6DZg3KB3SHLLuSBS6kyyYiDkYTd4v4Jw6p9DHwHn9",
  "key27": "5ibqVPxHPUvGWhSJACW9QLBu8P8Hr4P3U9nbjaiHq9WmJXpauDJrKqyZ9qQYKmV2SAhfebsUPFnQ7P6qudCnVm8x",
  "key28": "5TWrLMRtjRBXqxFNdp8dHQRSx5kDpyTEJsJAHP8zvqcy3nL1AaDFB9YtsfAvT5JoniJyLiNVoPTEBxSPU8wNCHK9",
  "key29": "3gb6hU1oL3Da1e5FFd6FQQW2fGv9pieqgHwAHiLF6rxAB4AJi582QEsBtKiLAKzT2WywXTZ1FgeuLN9QWuuqC8k7",
  "key30": "2WGf4WMEejPgJNNwRvVyMk126RDKRoHiA1amMhiDYrPrN2MhvF1g8ex4NvEbJtag3Q66xUDJRG87ks18KqUsogiq",
  "key31": "4i1LuXaMEYSKQyJPFXbtPCRhRKSCUqJRjQLGiiGC9VDjLevmWeCmuU5t15YkJ7DVyip8fssgHJjDb9WZVpuM8j4h",
  "key32": "4EmbrKzveLreivsv7FjchNjd1j7UKEEsWAoH3BUo7bj1239S8nUnNF71XQXrK3QCeqWi9ZoqzZLpxq7Sf6zfEzoL",
  "key33": "578V2hw9wzhcSMzq5auHBsr2kyp16JkZuBpZG999DVBVH7ye8yBg4mJ5Gh3VA3mzn3vXst31HXbDooqrzGghoPsW",
  "key34": "5gTspxJo2ytYGBzvy569njP45c9mVjNHSQpzkFxiK2yML87QiibkKn6yDbVz2FHmSKS6sLTir12jkU1zKTwibpne"
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
