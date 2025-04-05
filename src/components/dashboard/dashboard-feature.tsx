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
    "58QpgAgRac3yS5sM4cBqv4EgV5ACW4EiQrkaRKZJHrnfZit3WqANpVuGzRjgww7KvqLxxjykZyrjZk1noUnH4tvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xevQ7ZrZeQvnphCthkGjE2VHJnQndYh7JJSH64A7m5RXCpdisKvjiujRc2aVD7iKxxGPQ9Ybh2Qfzg1sqjoXTjL",
  "key1": "4SiNDVgR7d6AqxUCDgUYg1iL4pLVJH2StzF4U8KiQURr1i2R9ajj9iqDyYoPSn4mRP34RYyRjZWq2ra2tsANK37Z",
  "key2": "2iBoxVsydY1YZVJCSKfLBSXqGWWgrvZfyFkcQL8TEy51Tb1UYXi54EQYMG8pkPxsPQ4n2BAyJU49iecvFyQCj6vi",
  "key3": "4prDbHh94jwrELUVjSr1fFzSTmFWJF8aQCJ6kpSU3dXgakGJ3sB8tVrGn6DFM9UWKqeiwo4kchPJ4FC2eCfgWMkV",
  "key4": "3RqNxZE4wWRevusPNKELDnWWXeK8hj4EcHeSP4wyhG3eHCNQ8vCW5JL4Tp9Wdr3ziWbrfet5JTGqAVZWSQfawgv6",
  "key5": "38u659MKETQP5mzeDtodKavAmyQpT4fMUdbMX88nvht71dvX1a9D1LNyaq7J9fCDcrkVrLhPfwTS2thvXhuiLwmq",
  "key6": "pAW4RXCvypp6NTh6i4Z3gMwq9BHeUNf5yaMMcbHgkkfxFFUFaFepbP8UXU6pzzaq4XL1uVpdpP9jcCnaB1d8vHY",
  "key7": "3RDAz4bCK6P2dze3sUzDMz9Lqe4KGdcvrgSQCV86wXAXKAUNGdW2R2KF5jKrodptcaP7cmGDobHc212Y27MhsgnA",
  "key8": "2icmxSZjmT8wuBgKJkb7UEazLEQWVHt1CiLiUM9ZeRcA8UonNCM2aosbnTzyHj91VJiFZmYT9cDFGkA7JEqtHJRS",
  "key9": "4R4wFDfSE7sSu5XsSXcBrfWP4FpqkhTF3rod7jmYwSHnNpdoZBk1RprqTGQUr9idQnLWpL86ybe8s8bqoc4J72bR",
  "key10": "5BgxdrhiupXwZo5YjNWJnaX79QP6tJ1XJBocXt6Tp4wk1w6eey5uJT119iC2pUhgCbtLLt2B322ZCK1Nf4tGDzvT",
  "key11": "2rvdpGA1UtquMH6i4pfrbwyCue5NVgaz2gjWvLyxf7794TbxeJP7QycX1Jqqi29GtnYTdFc1z4H9UFCNjtGb95DW",
  "key12": "2p7g7bfxgrhz3pnozMnT7ZpatgXqKv4xds3SkToV3WUsN5piqQiXKo1AEvcT4kpeEd8QQTdHP1FvPrbycvQbY6LL",
  "key13": "3CqrWJGpWGTLTHs3n2mxbKpQNzMGL6ssZZAY5whrs7Cr6BX2sjxogMf9d738k8st9gwjAT86CoHXigAJ2KiBrhum",
  "key14": "4yabShrJwJGa1zyNmCuJ2gkwKWeFYFcHRDamXmgtQNW5GYiPF6XnHo4Aeg5S4HnLGNVbihzTds64dwUUZ651z5Uo",
  "key15": "ek6HvDxQ1xcwhmnbKRSUvHVbwudyVq6nb5qFiKq2m9yQ9WEnzWpwEXj7NhfbFeyXokKnKR2WgMXy8s7qstGWXct",
  "key16": "awUjdbUkmYnUsRKgBSakaGrStKiGi1go2ysfdzx6uFMcQnr3uMyBbJhWTzx127BEjbwgMtisRXJ88tEwQkMi4hB",
  "key17": "5BkihNQbwfzLQJL37pYwWG4QYbmmjqkpmhnQDvdYC28q6f9A6aY8hcbTZ1ZZ2hASENsr81p9xm64v8rCeDJ7pyxb",
  "key18": "5PAc5cDT1Mtm1vuLPcFoF2ATNTv1jFJ6d3gYb9Gbo2NPvdF5PAL3QR8khRymyMyi9dHW67duxvkpAiGGConmzMWP",
  "key19": "vEqmiQrD9TPPwpiLy1PVKEdapKchggps1rTfy3yNBFzZLeXRf3ZQR5YV9PiM5etz93CJjUsJVwAY22EYPBxNCe6",
  "key20": "3dUFFjnMaVeZ1xZPmWMuwoyuYmGxgBCN4FnNt1CAcZUREU6PBNyDBnGtqWrs5FMxsNjATqSSztZ6KZKNymg2jZ8L",
  "key21": "261UYG7aovMn51qD8Ui6Hi25XibXREf7wphoQexGBdRe7yerkZ7hEMzRfFZ9EoMxqZZkFdGpW7FNrhyH6Wu5nQLC",
  "key22": "2VDAjuggNz8uDnZFaVqm5SM3CsjkqzuqiSk8nDAuHB5Ti46Bhkd7ymqNfMTtBgvdoaa1bZgFKeCm5ut8epxVrRPJ",
  "key23": "4CHD1K4QJ6QNKyngEW8tzkjgdqaC9FV3MhnN79TMr4oGM1UFbnP8CSyhd1n1gqZaCUeepKCs5QwHoXr442vbr9gA",
  "key24": "65FJaBjucWbcKhBzEJj2rZ3747AK3MkfAsb6NSJ8SHN9tqmqwdkV6Myzmzwns5rj7pwP4A4fJKxDPoRbs23xXEbH",
  "key25": "5pNzAXSyoP714wPg3YGLax4fPWoQi8FesB25CHj4BsoQCL4XDBSfuXe7E7BJivn3GwgAisdtc6kHKpnH2v13Vc99",
  "key26": "32QVFX5EKe6BGhWUD5TKPeYBwbJmExjBtRMc9GxYHD6KDfmNwXyTF9piEuoMnEj82dtLdJ9d56D2GQDb6xVBnLyA",
  "key27": "3vVZ3G4GHyPWwd6n33gPFra3Q6XomLW2prsHNcd981YNc2fhDUmiQTewH68sVq5ZUV8UdMzFMZb8ZNAsZcq3xe3n",
  "key28": "5Tpqa8QdKn6STh461zmAwWc78djagr71KnSGEctYU9MV3TncsVNCYgRqkkdo7uGDNo2yaewHxxyipHDT1o9p2b32",
  "key29": "2XtGQ2WZ4N7X4RZZhkyw3mvAEFtQna84eU3NdXaBkkNYouJAkh7z2mVDJLst7GFnXNpJMyC7G7t34PzQnAXwdHJF",
  "key30": "32sNx846SFrPdSoA5qVW6aQkXcHB7ux8hBwihNXbadMX5Qh1M3N8c89VbVvsQ7X8os2DLRuq5F8PTd6urbL8FeVf",
  "key31": "76FA16JYb14GZ1hsuNtWqNaxekNDKuQi8HUcFRN26u2dG7rKvEyrz2q5rkPd39sUtEWoyhE9dyvg7T7c3czvFZa",
  "key32": "5sqzxa5SGzDZY3e2CGVh8bvZaZCYAoTicerPNsKFngy4AcnMYGF5HRWvV6G9FxoJNugZChjjU8TkXurR6mmaH9ha",
  "key33": "5BhcErJwPXN4ojMNwSWki1tQ5UZFzogjiPjvTWLU9fUpSZAVtPA1L6hu5k32Cdjrgn6xEp2PmNQAzKptTLCVZZSb",
  "key34": "4qeGgvbEjxPCoW244rDh6JSpfCxih7jEJcB98no6JoYFYLkFdx9FMbvCEM1C8z7XutZgcrrUwcrt9PZxMUPQxmet",
  "key35": "2XPGGuxsRjpzFrXz3mG98i3UgUCC2uc7j3KNaFjctqgGymcnYJNGMrmFfn965RFsFTJK4qMSWM1T1tyLbduL5T1J",
  "key36": "5AXHsqVQuLjfXA36twkKRSQ5dGW5jvoH1yKT1YQsUvjvHyu6TQQfk89cGqEcx86ZeArWyt1hFVjCYCYyZttrKS2G",
  "key37": "2xS27F2NxAFVQa97NiWcfPQdNsNJfoz42YXHbMXr83zWys7DJ4gwrpuVcvPW9NhWKHMsL9GmhA7Luasnbfc75oEA",
  "key38": "vXeLQ98DMtm67VLL83WFJBd1hvbqqgivHLPtcVa3ZrVFBPxHEsv7wBzYjb3UQVBtJnNNLADydnr2RWg92DNhm9k",
  "key39": "W9rz6KDyq7hzFShFwaMfuB2LkjQdppzUiXK7RbC2aMXmR3L7ENoSJgSV7oFbaD7CZhxvghdJpM9jAWusDooXHwR",
  "key40": "2pmxHYrymMbGTCKXyMQpHaGUoGMUXnwDaTeeHdaBjYqEYipS7LWXyKWkU58sLoRn79gnM7NuAxVHVm8dWyEpoyR3",
  "key41": "38962d7WcgLD3zZDrt9PEJVn3oHMo9qTVzdPym1MiZPSRBKh7jAyH65hQiTupn5X1v3xhBhTbjHDWtn2Ro3dzZrp",
  "key42": "B1iqH8HTu1Vu7EjWFJZbEXC1CqMSePWpkhUQitHZtnqL7jwPvcZX2T3Bv9Nxdvit9cedMpxYy8uyzWXZaqvsf61",
  "key43": "54n7qoXhNJ388BQUuyfZH3vgsZn1m6kmkoZn9FGzadHHsuZnbCwiFMy73CkZoRrDEQxG9htwEN2t46xQBtEtQKab",
  "key44": "2ot9hzS4mueSRBbM6zyaRLaxM49vace3A6S7Zo2DNrRXruys5Xq5dsXn5enxSTxrVdycuQzsafHUgEKvUsANvW9H",
  "key45": "2up8nSTWSmc7ZLTNDMi8uKwaGd15679KfzJCk6CvBJJ9nHVFwkiNkaVvr9uNHQpvFWmfkxuQ7cibU7ZEegrzCve",
  "key46": "5F2cCnefUsb44eDjpb38695tUuRSpYsQSnbXBFoLvB1DN6GtPF2bYVSKkjpt1iFbKgoBKf1iDbyStJQrHfVVQRm6"
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
