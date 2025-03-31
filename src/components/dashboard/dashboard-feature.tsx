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
    "3wUtrkTTEEzrzJVEs5shyNG7xktQsSPpyTQTsFZVFSgVdMsixN7TX3UQVsfaNUhG9hFEF9FiCuubfMwZJ7AbpzSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cbYxJE9cShWtzKN6NSQ8SAyT5tYi9ZZp1nmgZsnZK6grLxVMFVBNvvqRUjntU8PdQmSAAFbddWc5LXhqg8T67h",
  "key1": "5NmoNNuCx7MamWLn89TWz15UpQ6gsQvegoLwWf7xFULBiuwGQFC8wkbDGiQfqucXba6pSEbG94RCJcqCWB9s1zaP",
  "key2": "4odQYh9gu8DUeZ2kmgtdcew5CS5usnRxjNUEN5B98zJGFDMS2StRtEPaj93Wv9MkMHEZEQ724TSykjz7TchRkopw",
  "key3": "4crY62cq2zT9AV5S91PrAWK2bqUjXRVLb7rAtdfPDcTMkhyxQAbC5W5yq9rWBsB5mAnnW1tQC9mb6wVYAswYRzVk",
  "key4": "2i1f5SXmXBy3VZYejZdDjT2V5nHMBYsPCTi6E29DscY8tQ1sDvuUgm3v7sc3i3nyZG8ha7fPt2HwfbwtoKksvgfi",
  "key5": "4T8JiA8AzqtZ3QKFEYoXErXZCJPyxw8t6SR9M4fCj8rWB6DRk6332RKfTv5JxHy81vcFWRyaP2jxBto5BxsXpgTs",
  "key6": "pHaAydHYbB8ST1jmWjaxjB7d9MEbUCki5PvswdD7LXvC58gnALzG4LomMJANJ74oMGHhKAponXwtN4m13VNVgcM",
  "key7": "4PRjqFx4pSLaPbMZgy6dvkMN1rhNfSfZ6njs6FfqdGf6xFzcUhnsixGopx6gnDZszGx97F1awXHrDUZhTmLr9HXA",
  "key8": "3DFoMtqqvdzzJTLgL6pvBzgwFgxCgEGBAMCowxUfXVdy7B4CN2eso9B4CpCid9X8fmAADt7JFwkxm75BG9QaM6EB",
  "key9": "jq7AXt5gPvSM9bAHqCk5WZTMEGTNn6TjwUzZR8uYatnkW9yELZ9dP4eJDHj9c77YuKG74A1jMTKwvSJm95yTND9",
  "key10": "3CZmhyvbYL6hiEz2zW6kj1wREz7gs1Dg6rW8CnVdFWAwBzV8nyA3pcvWMbt9F4oAgHFjnwq4tDyVyScDuGKKgsHe",
  "key11": "3sYrVaAf6mpwVi3VtT25rtHs7nNZSXJjS59JxZUGAKhKzStuVSL3jJ8zYw51wf71JaBbqHP6zxWohaJgtRrNNWC1",
  "key12": "GXq8ZNLG64bsASAiidyFGmQAxohw2KXjszU4N9bvYRHsR1nZDYP1Fnhov6MTnJsUpzQpeyPbcUjDLvbr1B7dAXJ",
  "key13": "4Ahjdf3mg8oKtqNH5XxVRdsFMWVQTHHMmC3CqKZdd99Duc4c3XB7a249wDkKqTZNUTkgV6MF1fvCbLNukVKaGh3R",
  "key14": "vWpeK4oVf21cN1czzRAyW2sQSqv51WUJ7QacFvHiXYv2Xn7VbvuzF8ExxqL6RxeisfwS6rkTL27Hz8p5nndsPtY",
  "key15": "5HZGxoTTuxsbEJaiidPyp1NoW2bZauJLLnxFLR9VwErWdxRdEbCbx3u1MrwzuhdAGaEtaDELj6fxXgMJc4cH9wH5",
  "key16": "E7HB1wjoUafasvm2qEqLtBeAPXu7YCnPti8tz4GTtb76ZZNeeU8Gaii2XYipZUTtDB8iAP5DGzLrc1R3UqTte1h",
  "key17": "4mKwwHC9qPA9UFjDSKcnVvJnaY5K18reZ6TUyQ71WWQjHwgvry2N8vcC8cyzvTpLDP7kGCuBnkeG11fNfW8umeii",
  "key18": "4s7urwrZnGtJ2MvKEPw5tjaFFp5gKXJnknKLECzbNF2gwt3gaknwJmjXXjhskREWY3EswDMn5pJ4PyWbKkRERJSG",
  "key19": "4bisRnsmjKS4iCdqS67hw93zuHraeuD76JVu27KAAxcPkkWyrvU5tEdp4Jt5nQo1Dn1oU9WWXZ4CjHypR69tnpQp",
  "key20": "5zMSZxVm2KVinc5MsBVJaEJUiKftF6xCcf4zfFeiXvJAbx3CRWRwNwbvv4kcPCLxVn2FxKXpM7GzQ42JFPYqs3m4",
  "key21": "2H68ncMgYhQ8ocXSQUgCkH3DKbWuMJXjspxFtB6oSQ7qoLKVzHNj19NPZ54PMudbTC9mgg3RpqNoiYZ1EwErqrvD",
  "key22": "u4BfzUM7Lg1sAvvDin9TxcSVGrCfo6UZJt6wU7ujWKCMx75am3eQLvQyW2ezYwf52xD7dSkMA74PaHyicyPHoXm",
  "key23": "wk5HhhNAWvKnNhrLDpDWJ5huFxDg9hZqq1UX3kTgKgECLiUoTq6U9WdgTEXMZjfonq5xCc4mYSRaE4KH77doyys",
  "key24": "ESz87Fi9NtTum8Z5fbcR983bg2HnmFzUFd1dGgiCGczJ5pR2tUsoxwP1BC1KoR45DUgSs5EPPkG3jEtc7jBrQqN",
  "key25": "2YXwe2Qb8He4CdPu9S8Wn84wAffeGX2XjjEkVVUcjnknYtAXryNg5DvaedrLyYao5meEb1sZGYTK5ud7f3Er7YB3",
  "key26": "4iVaZ4f7LEZgkncPK27ftDPA2GFiiCosocNaF73zUsnDvvmg7HGih2yAepsPoHevxbVghxXj7uTcqeGc1755TfZt",
  "key27": "5JrAmmMztoczaxNTqg16H7kvTWSU7KXSBUJrRur64B3xfZXNLQpY5mNpgWcU1ywsetcBHB8PBz7nrpYog9u5uHvv",
  "key28": "2YXxDeVwvsZ1MPWNkYZzSszfsxQVF8GkCtcSaEQGRAopNTF7sZeUxvsjHGwefCPQy7BzmjqudEPi3oJoXhuvni2j",
  "key29": "UZGyBiEhCmpe1ietHEkPRXvCRGhF1iVnTbCZ6D6QFg2XNKuVBQyZ2dhdTRVCbuYPDV9abJaztBuHh9s4ydyeJwJ",
  "key30": "39TMg88i58koPdaPjnpvhNYbBvYCLk4urrhGQcrwhRSb9EWLnkswe5gfmzQ47PV5uPDkWq6MvqgagknaL1QsJ5aM",
  "key31": "L27tcoASEyRasjLp5zReysoRRcKyfRLmevA35Djc9DFzyFYTbKJNzari3zPDJciCSAuS6cm5D8t1DPBhyP2Sr5b",
  "key32": "4s7Y9HL2W46AbdfND4Bc2v9cmipTGwRA1GDFKHwNA8A53dntuj5jXmyJh8KMxrYvEBsB45jt6qasHDKx9dEKpRoP",
  "key33": "y9K3HAz1suPq7nsdCJEvj7xRG9mqB3qmMhr6bBdCt3LGeH6y6wy9p2KzfYT7ZLH1yhVYbkgxQteBzB4eTnNA4GU",
  "key34": "D9LotNPmFX2Qw4MTBbN1GAvS8myivvU1jsbpapTDYG5nTdpxdbx8Rb9nYsVq4GW6fvU7SYCzyYu1KtHyLDtYMaG",
  "key35": "4chUDyDuLHmencvsKQz1WHbjWirHw8yUBuJ8Trv1QfoERF8zB7HQZNeLrj8xWFXDGYL3XA2x5yiWcMUHB5vYNSrh",
  "key36": "YMh6cLxtiV7pyxi5jNivvYPVtkYQNpduYDCi2D1AdBwHL4bbUR4nBx1wuyJJjBprvJQs6zRL6xTXzwiessSZPt1",
  "key37": "kzQHK8rBa7T7D49rvb47fDeP72xWuxjW4Drwc5aBW3saCZzUQYe7zV2TfbWTxb1TS83MimqEofpHmAHpr4qmYGs",
  "key38": "5udk9LFeL1wc96mwmwBSLhyMzgz9sVZivQThugCiwniR41kKEHg8Hc83Mi3JzuqChaZzFrJCXNohGKB81vCgZiSP",
  "key39": "5ahbC8DXZ14W5hDmwK9Ej8DE8w2XEWpvP1aMt8giFP2xnsw8KZ2ELLi4QTc8RW3N2sXxXLzu12thGZRZrQUYJAAw",
  "key40": "2YCbYhj829C9EAE116wSdCir1zuTPpDXEwHLEPd52ja8EPqDoEFDjsi7nTsa5vpYHsLY4eC8LriSuoyfMPnnXkvg",
  "key41": "4zrEZw4cGKxERs53Rik39cjL2DnxYMhqAQqjTcoH8tVKP6f2LUHZBzmqwqqfxa3SYPvzKS4X8Uk9ybXxjcjNejVg",
  "key42": "dhJQWVPTgVEa9gQ7Tk5WJUYMKoJrL23m2ehETWyna8cwpWqByN4QNcshZtvtQqSTD69Hd13BPQtq7q9NbDRGD4m",
  "key43": "5yzuQVZPNt4n1wixoFzpPL1ib5XZyJMKkXzL9sXt5H32oAYb9PR18EKAH2GwX7hhJuAPCRMs7mS9SYHWbsS36nG8",
  "key44": "5Akv31pSYvLa3sgWzNvdG3BSNmhKH2hmHRHXCxW6HvbxTEJzk3L2zZrfe3NqwEisQjLsPJSg9BhFJrVCEfJnZgBf",
  "key45": "2WkumECoySHm9edKm7Try8gCneLSDKbqMTeA673hcZK4pA7mPceJNT36W33CfEV8THd6AAyym4kXECfwRB7vNG2v",
  "key46": "3P6mndtxbt5c8GunhyfwFrrHHo6HByXw9MkdirwkjoG4L4veENzwpHRDLvGoJ7sR43N9vPZjqbYEouDfnRzTXgTg",
  "key47": "22zfAPLJr6uKTWvWcWT1aRB8AzBMTgc2LELNXnRB8ESZoNnKZsYPyq3yM2pRgduYxtr5qsKqZDvw8ohCNXaKu8wJ",
  "key48": "45bobktkGbMpdpsdvDvA5WXnBFTqqdukC636Tc8crbhgUmwxNhaHipxutFGzBMKK1oB83ish6AUEsfHR1d2NiEMn",
  "key49": "4VoWfwEdr5zWV52oRUfAnFG4rKWnjmEGmiV63XCCMN9JUfsmyGhQUbugYsxQ9GVmd2VCvebm5KXBkbkBhX7FcuHW"
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
