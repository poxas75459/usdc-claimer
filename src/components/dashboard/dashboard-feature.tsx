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
    "4Px3c666LQ4PMAdjofgssqdqiKTcd3VpWTiUZYmvRVARK6VniqbA1jY2tmZ2XvH2NiwiRUPVhcJYL5JEfFZKS1bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p4mBfCYMtD4A3YVwja6CrfLPTnqWxraU5rWHCWBJi9wty5s4BZgRyconQ5nQqvh5Xe4ddHJysoAZvuJGbS14Fxu",
  "key1": "kD1bnaHfWAtYGAjQJEKHkC628mYT5YDUDxRR54cZBJmJL2ZyukkNK8Zq2gRJ2Knc3VFkqmh7K9wbCNcdAdHFgc7",
  "key2": "62gRf75XJ9owjQKmFkKuLBDjnCNjTWcjr2rbzmecXy2X2vmXUFSqBxaToZtvRtzgCYbmbNmpGVhQkHGvwr9ZNHvM",
  "key3": "EEsuM1PuM1idmCwuZ14zouhdH3RXUm3qX79urVKH16x8qYYTG9KmhHxACwEKtq9ANLXp5cgYyv3GXHKrswSH6yB",
  "key4": "2QTRm49eKM7npHraU52UGUXmPxT92tnyk4LrWVMBu3sdWESHu5AxLTZoLWHtfbo5GUhmKg4fBXtMd9jJwygstB9B",
  "key5": "4wuRMu9sXp4fCrsTr3nULepVBG4s9DqiR4SP3eXMY4LXNWAyT5g6yRyEPnBv4Moh2BU1eeWUAJz8z6cdQUbWQfmU",
  "key6": "2gzZ9i2A9b1AW9YPPRCkQUdvZDLreNmFzJ8NhL48jAtrfPTDsVKcZoKWtCg7TeC1YX7S9MBq5eFDj65n6xsKjqA8",
  "key7": "2RtgRhJJU6XTX4Poak89rRhX74we6mdLYLxt9E5mJpmebbGi7jQAEKE6K6LJrwHftJY7nV6ZgJUR8kSkkm9PhKCj",
  "key8": "4uTbrvWFbpi55KoQEQWAsLhddCFtwniSRuFSiPXuoU8G6ZWCN69zbFrRqpiVE62Y3dMHUcSUjhT88Cm8SZnwUZmw",
  "key9": "5NxJNbfPoMLzueuTwGLQKSZ84oTjZSsETifp9w1DFFF54VHgqgsfKG1PcaB1AEU1eMqtvKJ8zGDrB7QPxeUpeWF2",
  "key10": "5z7zXDVJXg35AZGHoUXVYYR518jke5Jx3wmse7ADmapDZr223Zb4kCoyq79SNYjbeLmRVGyXcAm2vrsfNhxyMMLT",
  "key11": "5oqxKMLzfGcHynWoJGHjTHfsTMaPgQUL12TRrjUExdCcuo69Ji4zhcEiPxDRQd9xwWDoZShsx4uv9wQc3g695bBR",
  "key12": "QR6xXXVmmssVA9b6jZGpb7kJ4EfpWczQTeRCa6wZsksdiQnsk6vwJZpbHVSSeAc1g7ARrSGJMAwDE93sUmpDAyx",
  "key13": "2DCNyFQukAs4YRcRpYruXk2a135ja1jf4c4pYrTEZgoqn3qZxN79CNmR4wy9r29FuhQjcMMZMNgmcda5S1skMGqk",
  "key14": "4iXzj5DMcc6hKhbGwAH6HdGvAtPy9rXEBcnxrT9QL2A3b7CWKfbkUGBQeB1azMQADChAqoVL2o3TDrQSWmsEX5Qg",
  "key15": "4zcHY9NuSkB6nqS9zZM382r3gVCHbawTdM6yegN7VM6tPbRLt98aGkD3npGbdbsxMZKAjNAc8B4a486o4g8wFjry",
  "key16": "55fDtyo8tvL6kPN1tL6FHpkaDQazRAb8j2jCwq8jR9wGMM4m2v2KS2sHV4DkpfZBStGMju3LJD7cwZB4z4mEAu88",
  "key17": "HbyiVxUDaFdoVDHjG9pePrrKQg1YhdHqQ2zG9N34Pr5Xda7aYprvJ1fo8WhLzBGC3HWPZX7RzDZazSLcaFwV6a1",
  "key18": "51VKB4bBiTQEMdyxCPKSxaizuDbHXdn7LHLhtU7oGXP7eJjquArZk4gGTxu14ZttaV7fSpB1Kj8FMaiicnMN42CH",
  "key19": "2hMEHuf3bw5F1r4fUgq1PacezX5mvdAjzUcQ3JYMY2KxDKE1KTSCZWTVj2Yp6gHM1DgZFBMsmJ4wh9zY9gWGZ2rR",
  "key20": "3D2h9L33R5xAPTMzsCMTLxR2kfWukyw9UiLMSp7wtUktLtpixfYs5RhBgwwoQFHgydkXQhLyhf1VGCcs1yuij9bR",
  "key21": "5GQ5ntP7kAuc2Zysee7bpNWrJRGKgcBu6ButCxCxCpcFQnHKoNa47PbWpFcXmMEh2UqcFneQcebJW1jC1RQnj6Ew",
  "key22": "3XUJ3VuN5XFCTjJ3NcJtY4kxMcV2M3no6fJcGdhebW37aiL2KA1PTbtirrmktMioX52pKZkrZvQ77K8vcxhYfG8P",
  "key23": "2sxuwKx5pLRsiTV1aAX1jm9BsSrhZQMpRiGJVP74Mg3T71qt8KzNnDrSwVamBcAGaGR2ZPk512rtMtuJ18JYRw9m",
  "key24": "4uY7QkfTRtZw2N677kV6Vz6YEBa1DrFTkfXc6eBr89mEaCLDmSJFpzpHfKqQk5UtKv7NtqbvBsooexgiDQ6Tjty6",
  "key25": "2UtuEgdVCuJanSda1S8ckiUQU2HEZ3eSu1DzUBony4MUXzjHgxo2GDvv7mMSGcohnnYLeDRDTvCi4bFjsn99uMSG",
  "key26": "2Muf2QXLdYhUmTwJUYZZEBrL6Buw66J8X2vJUM2n6gYJ4rPJSiA3mBikvDceZyuDhJ4A7EncNFECA9LazttbmY2N",
  "key27": "XsV1o5QZQfHLnko12tk1yXqnqzwp9nkbSqvxja5ZQf1s6VosExUe5S9Q45PdGPQwcUcgKDrAZp9BiesmaPUCrhp",
  "key28": "hmgf1zvyGn3jaGpfaSQGxYgEeo1S6CMDC2zNEv12y4CiUMbCh2f5JqmWkdzYo7yNo4K4NNJtVYbUruc9MpL1ize",
  "key29": "K9VdRe6BVgXokmQQDa9dt6Ubb2uyKzGzPHZgw2eQdX9V2Hc3y42sJSF8FbvBmFSoCFeNqiQb9BHKUTYPZQ1LmAi",
  "key30": "34Zbq8sDixQu56QU2KUGeBFGFPfoyqehp2C1BREB7FJLwLGkY4CkGsw5KBW4dvGnmenM3xGdZKK9umhC19xWrged",
  "key31": "5dNGV1eqnBg3JQffaGYPi2csXzLD6quL1rKYQTMabZg1ahd6PNkxSvoNyN9ckHiUS2WJ9t7aEnYispZPqzN2Ks7F",
  "key32": "5ra5nLMBa7egm8fZX25axKyYnXBqwQWViXeSjLLQ9sy9e4X5wpX1JiusPnCP2RhHN7pBMm43aBC69MT1c3yKDqLJ",
  "key33": "4ffaTpfK4JjBBQUyR9963mBwdG3729dYXRU6v41XsyXGMN6XHA1whAvKwga3FnTzQWLdV76rei5hhhbdVzeGHEE9",
  "key34": "32evPc9x3z4c3XfAxF3MPzJXhN9u8yoWW121fveqbZ4BqdZgRxT6UvNRPNo24S9Bz8bQNAGJ5kbjXBZqHhQdyiPm",
  "key35": "3td4DnhyqX3acvpgJk5udM65wjJsR7kEjVjehk9xaJBnaUeEeca77xALptRLw81h8RbiLFs2Vg3hA2M4wkRQmLWw",
  "key36": "4BKey55C1mySmd6PFBgemPXuA5qtM47bAFQJLpuu8jd4PiuenGVSN4M8rP3xfFd8HeUUHdPNVDQzPjPRTqTMfQcm",
  "key37": "4r3R5CGZDY2FxW8ut6KSAdMygUHf1874UpCF6GuwCq2XAGQ1rpHFPBVKxwmfpwVK8dcpfbnMF6SQDcUhEyAHWYw7",
  "key38": "HCvx6z4q3oKhfh5C6B1ousEStg8JGHk9AgSCqjz7CHGVsoCoKh2tF6KzsTNii485qsodxhMAxmTbktrZ4YuWMsb",
  "key39": "3pt7uGSdMejePzT5ieDecYVeYNJmoLkF22mrezkGRcXvsa32TLdvBgXKttyuQP1Ni17ZortEBjL9qX8LuCy3acvX",
  "key40": "3DUYqdbBQbD9arc9ZrCYU2CEvm8S22S6RhJG5wUGqkrEqXVZshW2i9kPaL1AfCET7LHZC6XjUZ7sLijVHjbu5Y1N",
  "key41": "4YyTtd1wCTZvMZUmmU37PPvZZvUErubAaH7RnjvhetytzmZsswzz46xTQC9vz7FQbPfZm3R6H87oJkF87BxkpT3c",
  "key42": "4VH7SfH8KdJEkeWpABUbiD7LbEbrgeEMgXX9jVPhaHffcpRQA3j7u55HU1cJQFnW6Ceq89CJiNBarduHVYCmBvbR",
  "key43": "sPxYifS4Eu6Mb9SEUyu8ntu8uoFcEb1LBoMRYwf5jRcVGxy4dAt1mEWgRM4peGzwcEhqcZpvfPPyjwvZDmFqUSs",
  "key44": "37b9UeJKsr3aoc7UaZF8A2eTeJVLxL7sfVjDBWAncfN1q1Z1CQ4Y5pTs6AFxUeFTXk6kNfn47DgWyDx8dru4Xzgo",
  "key45": "4chZfhCzUSDMs2d7iuZMB6UZachMwRoUuGt25vGs4ycrtE2JcMjV5q3bkb8uCezAMaETvC5oz9haeY1dDHsYgMVX",
  "key46": "FHX86QQWNuCLmfHrcReFM4hkiQm5N6c2MUqMPyUXRkHQbhnPx8ngaL5Ar7yAFJnZh1TNyjBRE3oDHcehWgomCLe",
  "key47": "3VaspwPnEwSicnGNfaR85sLVUuWkC36Sw5x9PAbevrEFe2H2NwaDSEt9RheuxxbuHtEPjm2LBjW4cEc9Wx9hLb28",
  "key48": "2PSEfvzBFroNZFVaAQP9vWaF1CyxUYDd1tqEv87FnyNzwX2iGSN2BUh4CQnbW6ToafxsspyzaCDT4q3kHaJjW2Py",
  "key49": "3XYTSpGzB3h7eHrVmZd7MmNzAkSVPh1cqJ59UVwrFxZ6n5TPok4CTBYZFepjQcBhtSpkYE7afYtmcFeXK77cA8pF"
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
