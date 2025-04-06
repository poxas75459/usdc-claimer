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
    "4fucjSsnUrRKrZ3BELJj1VJfcWqysX5StanQT6gVZb7X17jLm7FgkZ1br65JhaJ3k76Y2bmfDGT6hKVQz3htUPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMtPvzRCAYibWthTQGE77WjvgJjXzsALP5KgNBdV1eNFGVjDnX6BsedPPHMLiUb6CAb3egpjqyMjFRuXpDdhtiJ",
  "key1": "ZX49ifTPRwFBgugjzXAGJPLPBENHsoNf5MfkKEBwCvAEuxP12YCeBuQduWhDrwtd2pNP59EAK8zemAQnYKZdASA",
  "key2": "24o8H8kG5P9Rg14eYBZW1RpCcQqzQBhfxn2woYygos911q7VmfdzrdscuGXBE3y5XVuf4YqBL42RcXPYvp2bWAPE",
  "key3": "fgKgw7teVhP36gJi5XM96MDRFk1CHqUBMYR3j3Q3tDy1z6wJwxCnoHSuE6NVa3gcrSw8BGsLzV5efBpBrzD84rX",
  "key4": "5Uud4njDn8W3gYfhsAc5uwteAqEAHgCwhZoC8MZWc8Gqa8S3UPNjkc4FhzdZVQ1CseTznctLDjLCrnUENExARzY3",
  "key5": "5byC9TjjT4oJdgdCM9L7QL2AeokteUTjs3P1ciaU5e28j5tJVAyTkthTFaSdvGpfMfCmeid1X2LwZVuqitc9Acrk",
  "key6": "5QaTMeLUr9Bzr6SDVBsYz3yvKeTE2hnPXov572C7n6raw5e9jMvfw4NQj1wMivj6N5G3TFDnZ2zKihh7xxSwKSkT",
  "key7": "3TLYNtTuoRsxemFPyqCkkbcqhqmX2LzobHkZgWqNPG5CQnr65SC9WHPccyMMSnVY14r1inPcJoHtn6AGx3VHweov",
  "key8": "4DBWpdJ6eD9ebt7TRbuxY9Dezyjr8dwrC7YYhnmDRuaHmPQJhoFhRvcWzDk1Y87tDHKe5ys93LSWq3t9T9f5LSi3",
  "key9": "4ZvFdLweHtn7okM6FyDFDFbZQX3YbLK3KkuMGfaoEk1yQkLubNsRj51Zipw9e7mvHQeJZokuL4MseAEf7Hfxektf",
  "key10": "3UrNtg1jnjiKN45e2p3V4vVSi23eMegjaxHgpNRbk6s6tj9Et9j4KBP27CHK9NXnZiQdecBUAR1j9L2pK27E1efx",
  "key11": "5qarUMiyHGxhdLTx7mAyG1eoC9nELRQHLfUX8E4bP7Zr8kKoyR5VYK5U1raiYqu9nwAtY8HkTesdMwny6xDYa8bx",
  "key12": "62yskeRPk9EgwC1fHHnQdUyvF7229LZvDLQ9f7DySSoDHPepryTqw7zworAaWvAP2Vo7n3Mj49bQcSGa2VnYcoMr",
  "key13": "5h6Fk7H9df8ETpH5BP992SDUf7SvWUChpbEVVfvnkUd2nL9kYXy91gz3F3P7xAaksCXT7vf7pJVvzHXwYAQtGT3s",
  "key14": "2Ms2M5WX3ffgRMA4WBfXdPNY67YkGHvzjKs1D2R9ZttdkBGdfH4W9KBQ4yY5riYYBcMZZMj7gDRoBNL3Y6hL8Xeq",
  "key15": "3DqfW7SBxx8imUHtEJcLTmHMGtP7KJtpwj3ENCXQVW9bVPEdutR6iZJRu2FPH77yD1C5yq2kqdLV888pHB5DQwDm",
  "key16": "3Xdu7wpS8bNeAEnLbiXEXvfPfoGs1geQ1WC85iPasG54tyWtBA5f47Rf1svQDAwmVrbe3NZQdjft693WRqJYzcmH",
  "key17": "3wM3YcbjcsuyuJBfewgVRQgq2MHV18gvJkjxPPWgF3c6qd8Mmgcp6UzFMtZeFwfZHf2kaNHJFKEV1ugUmVnV8E6E",
  "key18": "exdjtFgCJ3LFvTQ6XmCBQSVryevSahF9KENS2ABHm7bDyCXg6gWmk1824Zvs39AwEnaDVFUuGJmEyr9PeY3VXNP",
  "key19": "2RYnDeyBTrHfHoBXA7hzt44F3Fq6tEYYREMtGwJToNzhg8kELv6HYrPUdUidFc6g2zQDAfh86pYfaK3BxrBuFxhu",
  "key20": "zVaphHpAKAT71QuC77z4trzVhXnTWmgRJAoZU7HwXLo1bzGymgewr4swh222L7FJv3LY8P7YdkZS8RLX8HmZ5Sk",
  "key21": "5o1RJPzBkc6rMeDEvCZUZ1ZFeqhGGmMHZ7ZcmnqtnKS573SdkCmzuu94sXJCtZYv3645HkWx2LwohjkYHXqv3dnn",
  "key22": "5jV8qqqbzV2kpjZpfSePmrDEztBgK2yXyQiuM1jPz1nYZrTpYFzMJkawpY3oiyqBo1msRUrSGrBMPLUCcvLmuK4m",
  "key23": "2vQsfWHAKouquEytfqwzTpVfxq8ZajyVgCeE49SKnwpZv93BuE2H3n3JJWb5DyMVSzMd3fbq2YJ51y14RjD7oThH",
  "key24": "2qKuLHonq8p9zWYTuHpZC8DPLWZ8EjafHs8bbSyqtihDYujQWeg7tNnagzW9v5Xy6NvMYH1iZwUViBeLymm6Wd2v",
  "key25": "2ecUAGmsyKnY3eRSdnfhVekSXPJVT8zEvFyn2Li1KnVC6nB1x48rpdXNoMFj6YVtjWZnT3ZVChXSdWWZNowVC9U8",
  "key26": "4xXzpmJdoA9XzawPVrR1kTPC2a7tuaXabKQEoKftJT7qTwha5hznsyKU5ZfW3XEntGFmoojnrwVZHhx6RmjhGA3J",
  "key27": "5Fie9zQ2DWyfDfx7xdvUUvo2edu5ArpAx1XesS2ERo3daQnUkzbCvVGjHnz1raQNHf3X2VUk16RBnkBXkMfqPESo",
  "key28": "5PmdFJrVQAZAv5mYKU3gdn2BSjMwUBtAq4ugdsUmrcBSL8SJ6u3PxmqELZZk1WKY1jbT8xKHstf2efKRBZGrFQY7",
  "key29": "5agTkdbmoMzYpoa78MwPSbYPNmzmaxLb9sqTpWMrWJMVSwFhCGHfsCh1uztetkHBdd7QpcCkgn9iEbU4PBz5oX9c",
  "key30": "2fzWF3gDVyvCZyBz4fypQvnrHf2Tc3NnECiEEe12PJwgEd4coC2nSPL9CWAYAhAm9EmWefNrwwe7cXPJsHJCwVL8",
  "key31": "2o1xUC99HsWWGm8K1vuQMsHHGTx2D28UMboMQEFYiuMtvC6QT5ePmj3tiD7EBnB5LnGY8tSQy54j7bCHSB1Viagc",
  "key32": "2XtyRgBBfHu3bsNnFPXfHnBvLjBa1zWrW68GL15DisoR3yU65BWbDWGTA2CXcTWDC61KVA14ByHyL5ESFYthEP7c",
  "key33": "5vzmZKpQBUjnq8rRTrNv6uVkqVRYvKm8dFkQAxad92AyfeYnz7cVMwn6db8mUWM4qticxANv9oMsAqnxm1n4GzSZ",
  "key34": "4iuvwauSkQpu4KHJP2o2D2g8DpvbuA7r5b9ogqUmCUc6ngEB6vdopy7ZjYBWg8xQ8schfb9C9mmfXRLopAiAiLEK",
  "key35": "4fgj7W6t5Qht8agkAKJCcsocwG8KBNTPiojRAo7bWaNnZm4AtaD6ph5A7s6Vhwcm5EnCLYJfLVhMxF9W1ddSvi3x",
  "key36": "4QmeCmVK38115QmwRkZ9sLCvunbLCKq5hNhyAQ2P4wEghStQ1z7ZeMAQKN7LnF2BkHUhdrc91jqRZBTyddyekmLF",
  "key37": "42L9YG6HDQXtzVofUGmqndgT3AEr87rRtqXc6RGFqTknAkFGefn2RoL7LCgaWMnDwnvfhZhkSjCgisHXgADEdESK",
  "key38": "3j72qkSBqFj4BdrZPCpqt932AnbmpyLidQgh5Hvup4cTcmDBVK6B7fvNUsun6PUJsLkFZ1CknLEvxcYvvmM5Y8NE",
  "key39": "3PXJTT1nYfGR6UEfWXv32iaKSEBTSHX6vv6RTM8bSV6bLtXpFPELCrr9dnJuLw7H7wPdiRwWiJoprefQz3uCFkXQ",
  "key40": "21ByQQ3suMccaju6Frw84ZYvsk4zNHumUrGoepb1iaBALecpTRwcQmBn9JewukjE4jz2Wi612mqgScHTWht6h8wq",
  "key41": "5oJfckjmdvuZkN66e1nHh2FPXHqqgGCJUWxop9NoN5vUJP6yY95zSzYfvfwHvwfZKmj2WX1Jii9vzAD75RGfDj7R",
  "key42": "3QfLkmzpcs4MvAKyErMszdQCP1nkSG2npwAm75BBhuAgDNKeC2FC8BvHe2ZfSgUMaAdpNpeSwbFHmUreHmwQQ5VM",
  "key43": "2EUTLiKgVFRCS6i7eCQMFSP73binVbSQdpxxAMMFgqRixK7pD2wnBEAkK64U5wmcRD5CgnLjYKSqAKfyM8CmUtcz",
  "key44": "5GbjmQyrCoArJDm2ofysm4VkLGWEa1HGMWGhvovcVoXwkUujUxhvdJHsf4mMvV9LKWYn5mQXe9hSQ8cmeoP9kCQw",
  "key45": "4fj15AjBmfCVPLk5MG1SvB4DfQ5YHViUst4g8iJ5NZubW5AFSA8Dv9fb9AEiBKrQp3nWudW9GZgYu6Suah29SECN"
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
