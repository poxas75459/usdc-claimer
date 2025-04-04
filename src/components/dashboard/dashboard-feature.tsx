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
    "3FjJsa6JTjMLzoqQDkHZw9hoe5Z2rV9GqBBj8FygzAcZyNcspvPZ84pTN1EHYRsZ5nvzBvyNJeWCBfvVPjw3q6rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EpHjKwvUZbhWugCkcVEJA1D6nrH7gmvRExvHLGy3kG64s1NRd65yV33XrWrq4WfZBuiCRzbQ94P4MZ2tQkQKqJ1",
  "key1": "5ZjyoESmqXNg1s6tMQBvvjz9Tog11so3EvNDkRrDPiVa4vReZCutpSB9mxwRWpfnZ9DCX5R47NHM441tYZwQxZyj",
  "key2": "evrb7ZwD4d5JeNdu5j3NmuBc7netxr9Q72mrvoMuSvxs3KQrqCA9QgL1u1dnd2F6EQ84kwDxyrh2aYns7AQ2rmt",
  "key3": "3ag8N2hXE8dhL8XnCvTaWAnLNfZzDRu566as6gKg2GNyTL41bSr5HDGGEVL8L3a1pGXow7aWhtPWerhNhgoUGTfU",
  "key4": "2tgnpC1U5tnAcssCiYCPQX4Zr8QmJrgdCJbgoUZZHcsewpKoYVR7LskoSnnq1jaMZqH7CV43Vkfu1BU9AeY69sxs",
  "key5": "4BgtTeC7gwJ3aUNbfDxEcvJYGcCmzgbXbre8HMDcPFbBNiaNAL3S5B3f9WkpLFsw2R38tfjG9sep8mcGCVwZvdNV",
  "key6": "3ydjVGG3mmgerbg2RKrtiC1Az8VvzL1XiLPtuG4tuU4k7bXxkynyfzJy5grd2qyyGqvwknJedoRcMU4bZQNr2sS4",
  "key7": "1NxJo26sbEWMR5mwgDYewBnmyQ3DapVhvNNKTqEwP5Z3hLc4pR9mqZBSx5JhoKRui3JH8Zs8kj5c2bK55Y5fYXM",
  "key8": "4hprGo8m61WfGE1k8rjGrmx1ezrVN5ZJzRLikLtXW5U4inH7GMCB1psGgAae32qAXMzBrC6HbyGAf2gQ89WgkLg7",
  "key9": "yz8Do9aZjEmuP2Fmw2QGW1itfB6cAC1axTJ5x4mosd9wPat6ZpuS74bFvhgVCnpAyP8WKgvBkCaN9dzbNKCiQyW",
  "key10": "5uJLqoambmSVu1pC3qu9tAfxVweJaq5C7ZEiBYY9NZuz59ErUsEsgMUo2YAq9ZDoTr4vWApNPjcZAaGUc9mjP1qv",
  "key11": "ioGuvRsrKgeX8WV55rBUNcqBkRWZxstDcJ91CDE2FCZ9JxbNT81Y6MaeD7enZ3RyLS2D1poMFgvKSinRTaCeUmR",
  "key12": "QW466xSv1TAvpe37rqC5CYpaqirBK4KcQbWBQiGSxZhhRuySaCYS1dgrAkiTY6ATZM3r1oZwTcqb7TjbD2JS6Zk",
  "key13": "59FhuLY74xijr5GZUVuCdCvRMsz8aoNtcrDvfu8iT1fMCo3wUTzM9pc35ojpnPz21xdWd2vM7PR9JCJZVuHfpeTV",
  "key14": "3gqmfjCGTdMbEJFJV6o9AfP7WJXPcZy5rSeNzqwcxeSUkUqGNq78bpxsZPcGvCtEsyssPGutBdN2Pvo8aUFq1Arw",
  "key15": "4mgByRD7i1jCQTvVHdHBbuciHqh3ByVgwafWD1X2YFoGPeFCzMJ9gdD2BRSyVvSXNYWhLniXpg7n7idow2kZTAyw",
  "key16": "3RShgSWvrVd9fqJPWgoK1WMLEt25jhXtAxdLfoQYYv6iN6NwJ4gy7gqHdL71WZZzGFj8jR4htCyXJZuhtKhr9kVR",
  "key17": "2kTHYjLkAZWPSeVNfiy8wyPcJaDhQ5LCipNrpGhux82k6tsbfzEhVps2sL1Fg3zUrF6otDevCAAuN6U9yfNVRS8e",
  "key18": "Mr3319WwuayFspUZxbURJgvj89tLf5PeuRw6sESSUDMQCFCRQovhkfAnL69tneoeZ3BBgwwRMveieubueiiz3wm",
  "key19": "2fuuTMvfYXM9Tyj36AKec6px3MoQTjVkubB347j8vjh5nNcJM5og6c2f7CXR4shqn7T1YcgMUttEResS5h8t5ioS",
  "key20": "3u7N8Md4BwEE2aBi2TASBAk2jFRwA3iVxYFFD86dDB9ZkLjaeipgVWk8YU3uoFdm5Z6Hc2dC4w8FEMaqgjQ83tZf",
  "key21": "3jJUZacgdvkBQy57xrNMG6ALW1FhCUnpghJC52U73bLjm291wCgo1VhF26r8Gq3zCAgA58ReNNgZY8LGcqNv2Hgg",
  "key22": "y2tVmuNA723hJWq3iBNag7zysChyZ2ZYVmJN2ZuFxGLwArzV6eBeYwb6GhTZDttrnzVqLXaWh1wvRGe93596PuT",
  "key23": "WFeR8qHPzQQhHXZPnSECEdz9DG7G8kH9T81fNzeb4Y39rCgEhTYXiNDiK21nWgWzxAzLVjqmcFfqgnDLAJqAnah",
  "key24": "2LtrskPJuih7DnMetjeXZpsmXEQ24Y8NWBcDDJ5TnGDpkSeZ2kn67vWZQ9B2z1nQRQChoBYKoymE4hDAkuAfsFci",
  "key25": "3e87tjiRB5kZJRxHk4rszx6T4cbbBdVScDPTFDpmTrqbnsgMLXYg8Vzi8pjcHgbcwMjvKW3eQ7d9k4r47VvUJX7m",
  "key26": "3Qv78EYTL82Z2H7DspXSGYf9T6Kvnuy9f4SHaFveAZuJxusBxfMzYeLw26VoQZLQSrm5wxY8w1ydZZgz6KcgNcE5",
  "key27": "3ESDNrK4qiB9A5HKFaTvVrFSchiNe6LPsccWfV71uE67cszyBNVzvQdYkYkBHxnjNxppyZcMM9dQL4rSxQRJaJ79"
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
