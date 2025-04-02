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
    "44PbsgNNpfiJybsS31RmgsDddbYgWfwJxay3EWaYCNMpzNdqgL9oS1qUWyQTo8NrCvQaNkUdbXdWZ322xKbMS1XW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1Tr2NEMsYxsTKJaaQqb9GAfDREtXZT7iZUumVUr6WYh3iet3Jhf4QQfh3NWn1rNgUyFPxxTTVknYcF1bb8kM7K",
  "key1": "2K5nspX4BJEcjeZMdvWaG6CYfWbDL318TtJgGF2Gw7zF7cgWqU4VaWWL4gF7ZZEfH1BqbxykMEuQkxKBo6j9LQQc",
  "key2": "2fpZWfG8kvSeTXhL6jrL989GNCTtGNuNF9o8qywRw3WhJVdWysGW6sGrYtzjdpzAmVypwEjQxg8GL6DWKEMRGDy4",
  "key3": "4quU25D2CDvorc8waQVqBD83zEwGvhg39YXBP6NoJ54U4HrhxeMNWNFnydcW3hyRcs7iqoA1dc3YUrMrwZqWWbPc",
  "key4": "5n3DVLdu3AVjzxWj5PQy4otCepnaKQu24C1XvLveGvrqhdmVHjLiK44chAtS9bzB3mEvf1sEUc3YovyD5LApoEMy",
  "key5": "5u5CSyQdBoN43BifH4bupqP5vkAxM2uxuKUJMM5hzqHCNuEqha4gBx5PcqejBGeaV1WYaRBA41RqTgWb16Zh8CJY",
  "key6": "3MjrDMG4Y87E4yT9AfH6ptz3vUSoFNkKA1vaYNmSNh2PLpJUgmkyqUMhK35iPQcbQqcAKjAJ7tcES5hpGgdamQ1T",
  "key7": "4jnVw1U3KjAGjs23T5ycwogXbY9wMMJgUKq6edtP44dC2LSyMNtyvyY53gTLX6twvZE4JjeYzTyLHNjJuctGAhAt",
  "key8": "3muLgJq7fCxiAr8VRj1anPsD5SnoVBQe8o181MKXM5TXPjsPpgwuwuhKpN5ByMTGrsC6AfMEAGdcoVxRZ7pzfq7B",
  "key9": "nR7iF3vYr57xkjvMUAdEjwaQ5mxZu1knP2GoQMysw2bGeSHBEHBnmfR8xvRFL185Ntbhsnea4L75dqyfsuuw9cg",
  "key10": "nEZMBtv9ALW2mLCA8XZHzkv83anGdMaNp6nhz9jQuVD8b4yLxv7Gse4p4zyHcqP4Sy25GQyXqQfmjsavYxUaz1H",
  "key11": "Wxs41m5u24S2zYTYZuJMnwLv8cEDATAPHLprXe9y4FDkkUjymeksuMxoZYZQV3YATPpVoK3FZuWvh5GAijfKUaQ",
  "key12": "5ZBkYv9L98vRV1WyvAcjdYTgdABiE6Wq49G8bJ7sUhrCfnbUyreSnWUf37egYnXqgbrC5neHNYzQeZHCuoMnLZ9t",
  "key13": "2yoi7usASxFgi4hAi7GznxBjthi6VztSnGfFLPhLf3xT3vnySur28buCxiewkwX4vnroob37qTtECj7ujfVzwaE3",
  "key14": "4o9QcsoGfgVnwDTQubAudEaMcdT6vnA2tEEYYnXjrMc35pm7rL69q1r3oAii2thYrcuBNwy2VJAgt9myMXWgxW3U",
  "key15": "5ms4EzVxxLmew9SdCJod9hctgMfRzdxzGv848YtrCyGmRGyqxjrxN2qcptQBYbCYFfto6TWEDTaBDq7a81T28wT9",
  "key16": "sC5XA8DBy3PR4J1bP4iPKmYhLF4tsV2Ubvm6aJbDK9Rd8PT7KRJfxHiBajHaZhCy5mGryBqmu6z9FhKuF6HU9am",
  "key17": "3CqRHUBkfTxTzooxoB78VFLEDjedwBAPQYQbh5caS9rD7jmDytVuK45aowCgwuu1usSRmkZMzYgcjtYnUguicwHY",
  "key18": "2ggJzm6DsK7X68aiuo61Y6f5nysyY6viVcwkddiyyz3Ew6eLCSr2943rv7sYzsU9an2xvrxKiprBGq3g6rTHjx2H",
  "key19": "3ciAHYDPPbCV5EcdLshVPuDP9tvNWiQLq7hvzF7Lht5FK8Hmug5cCyyPeK3D31jgxJJ6UT7j61Pf2VLa3uqNDDh4",
  "key20": "43EQJZHCsxiW1mYWKcinC2D3e3o8fpxugPrTzopuskEQnmUMeKobM4Lvkun52M6nWN3irduyvT4Erb7jd3H4DoEv",
  "key21": "5JP7bUDc2Pb8oGSehhf7GyhpCcNvxipzxzfaXNoKhaLgpfxiuqHcVjcohBpWmkHgNpARb7SFRSitBWHawxATTTmU",
  "key22": "Z6ivKmox5xT8U3tg8rx6Nv82MmcYARMXvLA5GmDYG5WaN4agBX5J9Bk9vX7QDzVUEoX9R5xafEgquaADUhfcQRh",
  "key23": "61Nuhfu6bNp5dcsD8sZkokYCt7cTK7KKt8aK4cHyXRerQZHpFWJnf69aDYdLa49ib59mdUt1shWmr8uhwkGWtVLX",
  "key24": "4Fyu6auzmDYw6PVHvj1EA9kys34WTrHKrt7sVGGvGY6AZcr3gGQZhtA1ZtuLb2KU4knics24ZBDuLwqhqoARJXk1",
  "key25": "48zR3W4Z8Btbm4bgenZBuTfTEhWdtscx9tMa4vjTybAby5jJWVPUdg2zte9oh4B8urH3GrGhRubrdRqTKdeE4kE8",
  "key26": "3J4b2kVootniDyRDjMMHRKZTscKtsA9XLCRCypNpKhYAiQDqvrh637Fj13orvSWjHGEmDTfiDiWDAMq1XE9r3HQ",
  "key27": "qzxB2J1RtDtipsan3V9zuqF2YJ6G2U6rp6z4CVG4cMygmtpJuSQH7KmF6Rh2rAzhBv5GndBmBizfR2sN5wmaKyp",
  "key28": "2wRhJw6MZpNak1NEn68hrLVvGz2iGrng1bodQQUjR5ZKsykzxP7UHBcqN4r6DJ17YCxvTfLirMVtRQmBcRDHNYmp",
  "key29": "BQ2zqotmF3LSrrSwwh43MzJM9NWncjpq8TKuoxPcGb5pvckU9KHUcKhjcRZQRk4nzmMDgzUUKT9RGpCkuj6UrZ1",
  "key30": "gJYEcnpXyGYoxnvaTx9bKgdraHuwmfuEnY7nPvsvQR5YNkDsf5zrGv6y1XUxzTLAmA7t7UYpue4B4UGzpjNyFfC",
  "key31": "pbRCfeTeH282sVicYWsWBoVo5MKRgx3s42kHPPPMRt9NVgg91fqYpfpRTn7RBKWfZ3XCWNdKzhGucUw7T5wcG2X",
  "key32": "2CkzUDcdBMbPbuwCecLchokNg6vHYXTFr7JvnmZ6UiEDCPjqeWQDBLyhEDSL26LWBK9N1LPwgsuP4QW6zhdDabrx",
  "key33": "5Xsen82RSu4C4K3NuAnk1zstVeKnnw4d9BxrwXrjs9cDY4VtreHqeVXTk6c55mqv7rDsAH1zhwoF5R7Q1rFj9dk4",
  "key34": "347sxAAGnc9ZVMWyYKC38cZvFCSoXQE8UN1FJp8xcYAkwCMBVJJccDkemJzqEyQsXn5vTkgZY2adWUfa9oBgYVMf",
  "key35": "3E5QNNmA2ZVdNMifuc4mRGk8EmhqYYQGYVq5z6es47e9Rncr6AvpYNV3WPUUKypqzQVnxSgv5VCoyNM45PoeW4xm",
  "key36": "5FsvS2gZ3GXem5o5yF45Jc9Cd3eoUedyYVo29k3Doq5ieT4p6Ss6JEJyMRBHj8f3mMMSPv4zLbiaFtQAaaMenGzA",
  "key37": "3nY4cYbpgHvccud62vKzrGm9jxLfZ8nBctebSeuvzPkFPiMhsbHQ8T981PhUYv2XiHSN1ocaHQ5yNhWnqZYpqXGw",
  "key38": "3NobHZNp1QX5ZYeALpfQ1XbtQZWSWN2uQ6HqzDo7Bkyai7icqoFY4zFzskAXvqQWvECjrq92G7nqp2LAyCerCi2S",
  "key39": "3eJkKAXFFcTbrZ9LGDTFw7brBHyixy9SxJm6FW7M12xpJRkjaXswwyzrdMmoBLQgt8hxfrJq4uMhUJVBquvhBEyp",
  "key40": "23DNMkXUvrME5gyAiT3y1rbCoGcaPvKFwn5BztZNFhZCHo5o36Rvj5rRi5oCGmpPU8gbML2nrpbMD4kbLNsjZ7iY",
  "key41": "4iEetaBmEfPuqsqJfrijnC5iC7MkQHtLVuyyajAUCe4ehpf9Rr1tshaTneXCcFGfd2sBkiuiFYYqL1bV4pEv6Tcq",
  "key42": "5q3vba3X1wsGi3oj8j3NTgV4wjEFPRjwTts5eB7cSC4CFHCC6QQwVxPt2KdrZDexBXmz5k6esMysWAjx2KnwGekH",
  "key43": "61kUg9VXva2u5TPU6g6tyEkHVu23gz4VSJygBZR3PW6uVxDzueiQMbuUDcUbSRnk7XAY8yQxMSKw1Umb9Xc5S3nD",
  "key44": "3b6kMatPVCqcvhJ77xA8BNV4jksLiahrGo1AF9bveM4SWBJoAwUiVTiUtkdor38SvgEmwEwGcTAACB7qyVt5ufjD",
  "key45": "4NqQi3tJFh6A7yr627pRdY3eGZcYfGZpGCCC2eVTFQG1jrkWnBu44JL6qchtD1qC6UvcevMRtafegGnswdmQ91jq",
  "key46": "3EozVCditS9tU4P6d35rN4JgA3QtZqsceLwLbF68Ctu5UwKzPfqfesCnMCus4rFCbpyQnrSTZWjdnas16UJiLQi1",
  "key47": "2douiGbehRM2k9WWDfq2kHxb3T47bfosNW1JEKNYq4DL8vXuD2dz7XN2spe8k8v8TJ9qGoedMvtSCzKMF3CLSSjn",
  "key48": "4MFE8nX5b6bfwvzBKLpZAP5FhyTShFetfKZUJtfXjTTsRNRLZEYhk1NQbSUYK11ggRMPx6GjtnpMcSjuhoWHNR5o"
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
