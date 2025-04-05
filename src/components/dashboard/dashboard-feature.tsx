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
    "x87ngjYSSXDbWR48jcqFHRKHLR8fs9irG9PW2GeFSR26wmAdngWyfLVvRyQqDJi2FRdwNo7aCM24R6JX9Ew6aDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ECgdqy1z3eVLvi7H6qiSdkbFAqTtWpwHfYKiSNEMGpdPgd43rKVnfUjyRMZM3KqKeapCvyNwEuXwtNxB4kwbPq",
  "key1": "4kfTGD5qaYjBdijchqY2eyzAGJwsJSpjoXUdizv3HLgChbC8Tw5oMiHe28ToNysM8mFaktBjte6s8YAZ5PyoogA4",
  "key2": "36TXewYftwMKW9QceAXv54o8uMfyRGdPVrjb67ZibqEBmeofUXZsvJrj8hV5xhawZWwV9rcheQEAqA24DZ65QduP",
  "key3": "2ApmAjEN2pL4B1yGXG8avnKXT1gv7Lr4kqLr8nnt8Qj2QH4qJKNjb8MRwwfgy1ZcUZj86tGV952G9RMXomB2R74a",
  "key4": "2Jh2jo5rrZmUa2RHwygu23SsrJGz5ttGKZMtYLdEzM1yqLckjZcmvKKrraP5aMYhtPJ1GMSidYCc7XzMyvCSoTjx",
  "key5": "3dny2xDGPQumzKKhAaondBSkdbVbgcfbjTw5hiAi8i15eR6axh9wr5WGbjfvDRAHARRj84DNhe9vMzVSxTSCsVmq",
  "key6": "5ftkk3jqi8argxKdbop3vStByT5DbvDpyjtP3XpoLcGXpwQvg4DiLFz3ETDp3GaEagYyN2an1cskv6LFDehKggF9",
  "key7": "4bb4sV8npMh68FhBneyQQvn4fp5KtSjkPjQLkv2yMTo2esFa63duC67upgbS3S2PdH94EZeNCJC56rLH1qVKchcL",
  "key8": "wZ5XVyF4sHh7Nyzrpxd91AVSdaSqP3duCqx9Ayhbm686Rrn5iC9eLXR9fcBBAaZetwtTDLGic8e3auzzeLqMwwv",
  "key9": "3dZWt2QFEsz1Fbm1tctv5ZzbgjASKeHGtXhYUgXWVhwyQyuPwDDE6nfadWz5hqKGpiPodmSBgArTPknHMmH9zUHp",
  "key10": "5zfJnUKcAYGk9G2LFts7zSDMhBYVQmbx7bv5huBdSyXkWawcJEC61yZxXQP5QgmBYkur28atHvjR8mAB8j9T8gUU",
  "key11": "5BT9yCw2qyABDz7NCUdb3V2fdXBs8QMozgaW6j5xDcW53pAaVQgDVrNjaGQYW2uJgryynwhAqKugG8ihDoxc7mE3",
  "key12": "5peVxpvSm8wYydXyye9X9y4gUNAZYwJScxo1oasnZnwsW4dQT6zkdpvsFpQT4gHBXryq6CypfdYG39pdnMV8L3W6",
  "key13": "2XLmbGdPp494j82YMbnUoUDe1vYBPHnTd2AFCu66zFUddDHc3uCVvvJi3EgiYf6NHG2Lfw5ykxW3rFzUaPknExiT",
  "key14": "48u15soMUSmbfQW7hRPjWrw1g8jtUC9jnSiwa8LvjRrXGXBweBPSL66YKPMkvZGg4KugSsw4qSNZysPTfAkpusNT",
  "key15": "kwwXHsMg4H63mAm2nV5pfxDX6E5FXRQYsDayCGgjX48VpkxbnN74E9yjxqJQ57oXu6C6ew1jaEjDtgGbDVJo46U",
  "key16": "43Vg1yFhxxdEZzJ8jBtUJfwZcn2UtmfnhKvEQpuQ7Ysay6CgqPRyChyP3W65fvSX3iUjfqT75K2vN6bqqNBgoHjv",
  "key17": "3R1f617r7ZTEfo6God8ZqL4d5jxJ6hRYEiLaJoWyNyNV2ERs6YJh5TjWhpMeGk8iA4hieDnb71TeK9M4i2qLJZik",
  "key18": "2vbaAh6SfFcPZ728jkFP8QiSXLWkxscuGCABr6DHiy1pDMKRnJKzaQXsewHNTjCsisC5wZi7Z8tEL6artJQT9zcn",
  "key19": "7cs2NtA4n7czUJtHNkFyQWZEcdy1LU8ZdXv1FsykWHFs4gS8E45Aaf3TNjk6qCXvenJMsiSevNbkvnjXk4jWtZQ",
  "key20": "4Kp7VpErpayjUyG9oE18JLk4Rmpyrkan2PAZuqrkx2YmZPAnXCHhBm49qt274yNkCwAf2EJswfKvVQLTvW4ekwqU",
  "key21": "52KZ5TjxWm9Yer7Y6JBNPFrtMkEABge2FaYTbcTDSEw9dZ6X3r2ZgrsJ6hHzmpbFFhpEc96sJi1pSeqviHH1QbJr",
  "key22": "3n2VGJakCdMLrNHx6LBugvwEQMM5ok2JDwrTuAGUWmNzdanWSr7r9Hy8fenv2W9F6au6FQu5JaRHsrjQ3RQPgTwo",
  "key23": "2VHYEdW6ks45oRopiFmsXz2MTPbBHieBVeeZGZQ6AJVS92VCqvqqXMB8PgJZHUVj53NePczaH5u66vne8Rhw6vtG",
  "key24": "SuLQuiXKAefhrRqzqBUCjS6LdJazNvSdd6WgRdyRwUL2DrzEH31jtE8HwVZPGVNK2VQ5rSNv4MRvT7KW4sR2wvL",
  "key25": "4rcmdpSiEWox1BPF5mgGVnoScHhjC5tCcNHR71a7762tVSepnmH9QjZByKv547eky92sgCd12aF3rpanzCRWjRfW",
  "key26": "3sMitvnjYm2QxytWa28jMPxU5mDdZyo6JtreX8jnQuWV4zcDGJFPfgyUvHQ55ZW8epKMR487nKx53xsjsZ6wdwNh",
  "key27": "4UYYdmeLMgTsbdwGM5VCoj7XVazJdVeZvTVpyStWgKxL4xmhsVs5GDv87qCPT27XfrrnQeQ2kruwPXcwbf8GiEoy",
  "key28": "54ty2DBcwRkS26EGb3nR3mis35haeAWXADzY6dYRC8mU3wzYGd2TXWToh3E1Vv42ibzGy1v15AD1xQ2J9UfrRgvn",
  "key29": "3cPP9faQZdxoyKsduWVnoKnD9yVCtHxS9wJPYG2NXsH4LycTt4n3aPbLCLop4HsqtbaoHF8Qeog9cfXbNWC4uKnL",
  "key30": "4tExh62cKJHvueUPn5JzsYYGrgfGDBmufEH8TPbC89B8VCcfSnb2ubziQ14vGgY4z8CqVRPzNn1YHoZgv96gs6pC",
  "key31": "4T3QmNjUH5zcJfod6RA7gU3CVqzZZ1EL2n8e5DaiYN4Eh4gkY8kM5W4DnG749uGKuTgPKU6zRMVrK4sLyvxZVwLA"
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
