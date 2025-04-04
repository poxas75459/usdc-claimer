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
    "43GPpbiH3zr91iF6Nc4gurhDKMbmnF1xrpRSHQeG3s5djYuT2RqSbffrgqJLwcUqyoarHsTmiuHbB6fAV6x8zSrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vV8aCFwXfszbCG4iYKNDBQrVRxyRmQgfNBiofrkWpim3JatNNTjdskMuSH3jgJX1F8yxZ5chhWi8RhAq9m7C4tz",
  "key1": "29obUaFLmGCZDeVDhtjJP7F8aAZjiTB3b8BqVThPEjtBRo2rwJpuqsxe25aznVMDdiJTGn52zV8uiuBUbKJKgbhq",
  "key2": "qK23fJzUHFpnbHHUbniKDxoBpu3MfhjFfjeRkuFWgvv3xH8yUxuD91FZv5GAwzaGux8iFPNYdx6CNsuyddvZoEi",
  "key3": "4WkPRpxXB3jyiVpXfEtqK5inKUaJpRh9WfA9kJfnN9tggCWpVvdh7GthGHU3kRdjeVCDx5GrAyGQTNzScqVB2UQQ",
  "key4": "4Cm5C3Eb2sLCNmiDhTD4uq3zrQKhjrE5uZBSfUXJLhT4wGp1tGZKbwyGMKork8keZWagH7kRkZ3wu8pi3bfTwTpe",
  "key5": "37hhR2gdv3j7h1ApBfi4twZLHw5xAp4tmajxFd17tZyVXEkjyegzZVd49pnPkfBZQQaQwFsFBMJ6xy2o3GchpHij",
  "key6": "1243ptrvttoXqDPAoZTTCPpEYgY2LWbh9N9ij12HA5MfiPKysps1mtGLDBFfEFP9KZs9W3hFuGDhxJL1iYFaSwzP",
  "key7": "4ctGsEhn1WuHTzxpSnmWKCHytZp5PeVC5sH93AX1FBgUG1XZEpDv5vpEjeCA8z4BvQS35vPiuSyv68fFH7cs6iDv",
  "key8": "3JPW8aAsDZdudZQjjPfuG6sLHK5mTUkegE3yuSiG3g3iXKjGTBr9A63oZk2vGCSnSdh3kUP9NxeokoRbMpMa7Qg5",
  "key9": "5oWRdbEV4JKvG95srdF5R22CzjdJoKwkMKAcCU66P4TziX8E7TpVpELNp1VRm8ckrxZ5VbJi7GV5whzT9LwQwTGD",
  "key10": "4NMvqbdHiA3atHNkNXoDTX23S33MgsE1GGEkdaXfDLRdHQfmZop8uPGwbGBevzLjYbZK6dd4YhnsCs4HrjuKDnyc",
  "key11": "4TYUTP9WHBzwyRHHVU55MXJE8Agq39QhCdRzqvJsu8mC7Twrpidi7JQyHxd7sJxoafHk346eJ3kVXwy41pwjdmqB",
  "key12": "2wEhTEXZNr4FiS4CGiW5SmLsj72RFvVAc58UjccikhoGVRSE57evApUrhH9hNCiBfGxGrw5h1hYtMtEMfxxWbmLB",
  "key13": "3K38Fg2wLiMW9Ty2LhWVrX4p25giPjSY56xaPEh1bNtZMMG7sLsRxzhVVNvtfhyW1L3S5q8bQqb7egicTishdaEf",
  "key14": "5a11BBeZShZjgywGwgW7axa4QoTQjxHbL3R5q2K4YjJEAAKFVYUFmBAiXfsZ2acgrXgKsrEZcXEwQRUutte2ZZee",
  "key15": "3GetTihV9YZGShggxzvtT4xeKPoSEvhbEsJXPGf3Lbg8Z1tP359hy7teqLieHQHF1sEzucVPpqbiViUeEFsUQ2qH",
  "key16": "RW7g7KTJScaxFGdYpqwEfGRjrqHPAn4vk81a3Zuarf7y1xARr7mLcf9obQBbkDTgaSd2oPagEyepHFUuPFJzuAA",
  "key17": "33dqMa7MU3vRTzLpZJcTzL4qJvTcXc3XSHuXzHR2XjSTjMBvkXKiHRknQ3JFNTA7TqmVtFgnCgF1e4W7ohTwDyKM",
  "key18": "4EPuWVxLmqk1Z7Lkb8otmK78tpVGuJcAavxx6edNjE2f2AT2qeMdjqNSnybr171YQdAKqFTPTDSBGwP3UHLXDr1M",
  "key19": "R8Yo2xcy3ABeVMZ7Nmtw6w1cXTF4MRnMnJYBycgPp3kpdPZrgUrfJwuL7r1K5xQgRqrd2TuWRwVnq4jLKfemfQF",
  "key20": "5gpsKE2tzBbZKJFiDsaNeNuf3cmafhhgSb6AEfmPbcEPxb4eZ892M2Ke4EjiTj3JuFWGGbVDWhMYZT3G5h4JZuiN",
  "key21": "428ow6mkS3rh2UTVhngm8httyK6kSbNV2RuLHoQ5mPYRfNNNwZmJyPhncfcTD3njhj6rQzvKGGDbJArt9cFKzyHi",
  "key22": "4tTK3UqBJn7TYcwoSVPmKBVbPwhUo9vi52thf6Zj1SPhJJkiM4nQV45z35CEmM4dg3dFqmnF1mKskm4oeSmGpxYa",
  "key23": "wXQcTQuLuvZWppGyRwETNiQqmXunvVKJaGjKs3ypr9HXUNunQhjJV1H6s3HMME3fDBJ4x48xiKFbjc1HCtfCaTs",
  "key24": "36YkLWLJ7caWVVcReik3jAiWRMuc2oPMzbadk6qBx4Q796zxGmLP5ospwzGiqu86Frt1DLojggL7W9p8zU7WEUus",
  "key25": "96S1SA8q1HNXy38hDdFHC3WW2kHhf9g7LDgKs6tm2PtZsDvtsjVds5e7bszpMAo948MAzqwziHosPFWrqCMUiXq",
  "key26": "2aJwvEsE1GfRVx8jtkc3AQ7jeK8uD38YtrvFfz8BoSyCFVDEfYZykFZ5BHQo7oXmyewo7aTKgY7NtSG8qrTXYwcH",
  "key27": "Rrit65DVDxp8K2GmsRnW1EC8AbJzjU8Dh82VEuh3ZNTmjVm2pevjKytvqizJryVJuykbiYuTjRMs5LZRh5KzXPv",
  "key28": "54g6C3biqtDsx7U9sJHhza3Z8mf9FAhXzjp3JHT2S4Jnx1ujr1u4DjffZfmwYHj2HaYZEoC3aT3K7ZESq93S4fVs",
  "key29": "4KhEhqRTtcVucJz4wP6YodMtsjwNwtL4fhCHaDUPsFrGXu3s16aNHy282AA9DFxmY8gsKjL78w7DqZ1r41a1tsd5",
  "key30": "4YTQ97ij3Egia4XtJshVnEGfiuDavkTeqxVj2oiX6rFeEoP6XydGqCxxnCBBzFVpcxs1PE3by3Ha8UieYaRsXK4k",
  "key31": "2mxWwnTWr1rJ2xeuTzjwK88Q3q3jajAbdVJurWCb5NTsLrb9gURmET8Fx6vo7mi7uZ7PdhSqoVKsEcXnkHTgCs4b",
  "key32": "3obMzbpDPk3B4HHG269DhqnpEqjHQpsGzgN3zFCp3qaKj29tYvxh1FPdX2mTuJVdHoGy1sgTzd7n7CGBnMszbzTr",
  "key33": "jatWauP7d5QP6PCpZn6d29pZXYcbyRYuVNdy8o1CMWCYDYqahtpS38kzUcNMTdhVZv3BXBnAiQEPEnCWt1Y4dhs",
  "key34": "4MfikdkTmmsTPFhSZWeXgdE4pDzYq7QRhsNcZZKrjBgQa6m3RqzuFNhxP5d2gqXLTdoosrnSxy4emJd3af37PKdc",
  "key35": "2hYefjDyjtV2mxJQrKRyEdYEU9gWfuSdyYXxRxNVGo23CqqtRwKDBBEgQoGbxNSVMK5NWSvvox5Pg7EqukiDXLvy",
  "key36": "5mr17BGKM5g8SipJufukEP9dLFQpe9uEupQcKbPakrawbHuYgJ8KEcEVVpXUYmg2tXCz9Qdhc5zEZJbNwmATGCwd",
  "key37": "3w7F6uvCinQYDtkntZQj8VgcEQu6iFSuRUGEXYgB7cdpNQdXCZUWEicAGQxzC6MLYU4tYz9YkDLaMv1tUyN7K3Q2",
  "key38": "1kMfuaYhUUgF8ZfRsrYT5dPnnE7WHMV3sXFL8JSVYAL7EwUWVJDF1qkRCDt46ghiXxQiQzxa8p9qAitnmbMCsSW",
  "key39": "2HoMcw6atvxW5AmV8rrusYtSzTDUdn1MKT3Vzxv6JbTG4f7HahsFzVyoqtAiXSKWXoqe5NnnY2SoLgZ7wLBeVMRU"
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
