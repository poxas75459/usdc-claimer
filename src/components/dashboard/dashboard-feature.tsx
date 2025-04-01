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
    "3vC66gDBMwGF86VvmX9JxM9s67nu7XeYuckavutXs9z9hejPBXpuHmmyWtZDFSaT2RhkVjcXXD49kkUpWkzACSQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55w41iGocwYqATBygEeNJDj6Pd3Beh4ZLwMnrL8jrF7UAHigoxFZbScxnD4iiU1xZEsj7MwbdYLY3Vzoa22EeYcd",
  "key1": "2AsLdQrPgsPd66fXju3DCFrdSDqE242GdCY3JWfhcpbbw5L8qj2xgzTXMQ3ibUviWisNp8zHLvfYYdWcG3TsgNZ7",
  "key2": "5E2FP9f6A6mFsE7EHXZfQ8zV4M5gttyrAd3KbdMR571noDmtpXyQ3hwqBaSCq5gjRtTtY5o9bReeoMR7tGKTfFJH",
  "key3": "3GfUf6P48PSi6XZ9m7aiwe5g3aWKPZq1kAbsSjX6w3N7MvRkcai1fntaK6M9KrHWT4heZe27i8fqTFFmpAZPwpaY",
  "key4": "2MMdnPTHKgEaxhFYHqmySFLzqNPLidY2cFa7fG6nrMXC8phy2qzhqNDDyuhrUBp3ybr86BbAJiDn8d2BCc6L5CPH",
  "key5": "3VYcaeseNeNPKvD3Gaa71tU1BoGyFKL8poCX5u6JWAZNmVGPGV7yXiyP8nHP2odP4aZ6gKXKeeKuQnNVi3mfByS3",
  "key6": "4YqVsgWcFxkiWnaz8bDP3hBW8R6TS6RCQxqapJNME45GHZCmjm9fxyynZi95ZubSjYY51Xj22LddFD9Vj97i4Wuw",
  "key7": "b1qKCfG2zyL165NCG4ASCLYBFXGn7EkLVB9oWgcELp5FBeo5N1ro9xdRpDYeLzkLmqqcmG1VFiWP117J2hZwPav",
  "key8": "3ABzuCAFqCXqvCMsEvxNnfoZGvjq94KoBooAw8rXGC9z6U8VnTTwsXZVwLcx72KSWKTUpyyHEpsgeGhvMMHPzneg",
  "key9": "3R9EbXegBo2Bz7bAQ4ChzxmP7ZosfXBzbr8La4ucnFP2VMpY7DvWRHnJY8g7ZKbx88kWUwZWN7BkpkENksGwJ1xN",
  "key10": "5uABJ16B191fjXZXm39k1nxwXFXEMxsFiaK26bpejTyD7231oHjq7D6z4WZjne73qDXzBAnHGyoEdjdkgzGbf7xp",
  "key11": "wYuoXyy7J8U76tp23gzsTmHpkvtaaSNLNq8L3Xz3vpfVok3jyvNHYPvVaaQf2LkVF2BR2j8muKJ4JqUTB1h2V9j",
  "key12": "5BTmM8wkpA9DmdFhV3iHUKkto5rR7bLFjWavVZKxtajuKKcTPsK8xPixkBGw4MsvKY7dhfaCk9yCyHdB2GUCH7AK",
  "key13": "Md5VWUSGWFUvHGnTrGCDSZuwruvksAWMwBUdm9mQmi45d8cJAXLTT2n1Jah3q74Kcd2CSETwpbRrp3sFqSKn15W",
  "key14": "4ngMMa8umPDgGxqNxf6ASphrzuTwT59cdMcV63HW1QE1N9f6u3XPftARVokKs8jyjpbm45sVSf27m89fabtBizVA",
  "key15": "PRNSTCLhxNRwYzeykUsvbAU7xfYgrUqc9ivXskEos9vv7vvCkpWfLajUkRpdQtt4oAdYMoEuwLkFzpW1z9mZQtw",
  "key16": "4D81CazRZr3yXjH5GPNF5WP6Wm5wbkJbgPaJQB34nbJUo7p2muXQ1wgibrQ21pjvPoXc9Fn9T3SaQFpkDp4SvDh1",
  "key17": "3auMoh5ihAMuAuNQa47F8gS6woRAeRbRFedBujMEFMGPJuDZcvLr16rNEdo6KK6dNmgmFYJnS2xR7LL1QDNcFQ7B",
  "key18": "foHCBheCCWd8gE2UobsDMopPsxfPZ77gpJDAwtDzH5HULaudwRoTehzQdyJMJjUx6rBK3BUXFKtpKPdUtSn5MNh",
  "key19": "mHii3q3REkmQFnhEPstVDckgP26qxo9SuRGtZB76j5P1MRrCBwoZ7D9za8pcAvMgFnCgDg445bgnmHBGmCNVEwL",
  "key20": "2ehmrymcrhna1y9rofUXJ5hwoF24n9q48vRy49v2YadzVWMPPn2SCVXThLdifDBCizjvDpCY4GAb4GibtacA6gKG",
  "key21": "1me3YzojktZbV3sUxSKG7H6khA5hM46U3EeHsYi44aSev8o7NM6oy61qNsfVnL8mrTR1Q42TnDYjBzBoKPbvFLM",
  "key22": "WyPXmvHnhENe7Hwi5NcKRJWsL9aLNKCW1CAhYwXYSZHyBHcCDQpeWfFQrf7TBkaHF7U3GHiFHqCpSVxcjukvfmo",
  "key23": "3Gx1V71ZWza8SbycuoowTZC9Tq4RJ57g6gMDiRnxvqmgVxBvwQnbmGDS4pE9rszLKRNoLcn6359fqTgSsVnbEuKA",
  "key24": "2gXWVgGR3uHP9YP2dSjDAwV7eGUhpxs6ypeHfqFmwYEoQs1CRBJkHiqw1DemahzaVpNVdM5WejBnPZLTVyRPqgiA",
  "key25": "25hKLZE5iM8cL3aTdj3DRAaqGD6APjN6yJ7h9jqRZDP18tdpqKqSBJWnbYBq7LXNKaa7DbdoEcQq6HfT1jfb6dpH",
  "key26": "55jzR6NR14NFumefz6bT1ZWerqLXT8aPb4o9zvtmjoks1VWbBdYvXU1MQH4Zgr4n3cBJu52GJqomh1es7Suv4Urc",
  "key27": "5vc6XVmXq7stjYJmJ3AD5dcDZvX6zFvEPTeXAo1VSg5LBHitri12YqAe1QDkTNfJ9PeBHyyR35XndvaTm38qdHKZ",
  "key28": "2tM3aMzqqMrLiWLaiqAynuMcPKG8zNoxjt1izBvqFR5xh4rb7Gx2pZPgi4j7gQajkCRYEQtoZKKCoGk5FSh1JeBr",
  "key29": "3xXhAhMgHkkQTDmSPaTwLDGMSSG6j1KJDV3ZTwULDux1952Le2hch58RFS7vy2VmLypHDFc2ccdDqEyAxDEAUV7n",
  "key30": "5AfQANC5W4KVNpthuSPj9cJoigs8Jn6vkBMYV5UWNh6M2xPjadvprJBfEdwrMHeDgpRSNgaWarxWbjMdKadsSgUD",
  "key31": "5Tw1qM8oHURrmNXtVmy8aHeizg9mD3ut2kkrnXHutXi3voA5htDc5D3mAw2X5StP2wsBX4geUpgLV5KQnVUCzJfi",
  "key32": "33bHXUJHgZPF4hFzammNb42AHZmCWgd4VVmCKWZfT7ujxHLczk4HvLU7X8bBez87Fx6qT8cZ8WEn9qSN9aidAE4S",
  "key33": "rVb4kzFG3csggVTEf5s2cPfKpvarEmpATTJ6SqcqumRu2vavWEGGC3mnZiDdh6r3tDtGA27tASsdCxomJwHdJn9",
  "key34": "2XKN2p6eampYSiJFjdMtVkvgfNZB1veKjpdy2xked9GqR5SKHvPa6WevJDe8LATUjQsMqnibDcbfsS5QzwfhWPPp",
  "key35": "XK9JrCEqRwcSwPiu8uxTQ2wZdQWsPu5kuN5ahEx9vu3huj7bSS3QFv8qJSfWYmZ1QhgLbByJkW57BVLaetP7UFU",
  "key36": "32pLvWwU8w93eWfHK4e9iWZ1DNs6yDND6Hs5ZpUDZtHSRgks7hLjKSSZv16WzkW17YhfBHLs3oC359YuKAXznqmH",
  "key37": "4Pm9EusyQZyfqdr1w3LvmprMLK4D7McTMufkjmarauYLmxfcH6cuZ7krxAiPGsbmVvyVW3AxEyw7qTwsVf61u9ci",
  "key38": "2rW9BwJuhy2wR2qnZGC75CD7ZDBL3dMipVbWicTpYBAxamaHPhqLcJNP23zmZPqLqvW93uWoJQUSMwsXzVbHUEmo",
  "key39": "DC77D2qCkbCFAq1tcVrsMXfKWxzPJZXvJPUtCLxVKhAua8hSR2wuc9QnSxe9XBpAjALW2n3uKUqmvqW53Dvoo2x",
  "key40": "54M4HX5338A6z25F9fSLAD2ECY6zjW9UaKpMaLJDLuLW1sY4XGq1vv1PfNw2w1JMAVsdfBv54nmnE2epBQ1mti2V",
  "key41": "4cA2btnRTeUrhGZ66RSsGqB7RH5wo9ZPETjyWNPGN8mNx2br6cg4qqDa2dyzDmdQzDoCSXFS5MKv41DLYFJN4DGE",
  "key42": "cUzdeNyh11jZgBkxGeXPZX98vy4yNcTLZjGc6utZkU2bUaTwptSzSACGpnim9KjiGvCmUmX99a9tygFKQoUhUpj",
  "key43": "CifnN4RYL7HDGrfWfUekrZK78kdLEnWrjm3WYWNPCE6MZULD95aoiAJ4XfmBHW5WSbRax184pyxKdZq1Z62cpxV",
  "key44": "2iPrx4jtnJchx1oZRw97W9ys9LHvdbCJodRmXeYCjkA98RwegYpHM3WN5gXKLMgD3tG9o3r1tRYRHHhnmcEHKpJX",
  "key45": "5f9JSJPmAM6LDNBfE5WY4LKK1NezWZ3bKwAZVv4Ct3WsnTFK8LemWZvNZ4TnAhWs72YMc1qmWR8WQz1KrdyUApbP",
  "key46": "CFrX17cUtrkijHn7Za1H4HzaU76g9BXzcf3XtSYZxhKN4YsxhqjRn19bUDevAv4PpFcAAyCjT1VYv1vXHV3JfKE"
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
