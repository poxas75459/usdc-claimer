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
    "5Se2AWLBvKFpJ5KH7Gvrzb4fbt5V4LRpQJN17rkqKK9Y5sqDMJgX1d7dtWLd5FYstFuEL8J5bkJiqEX9qFhqECbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZhqUuFJ4CESECTT2zt27LLAQx3LpdTfejbEqBQWG4MmipwnLKL5h54a1uPYVPECuyNs4qghGGktXpBLCbJgRCg",
  "key1": "3yXxsF7NsGBbf9ybYEsLNf5U98FU6Rb7ypECATiLZYTi2GVkaa3VHucwbScfL3rQPCKRXqBfyQBZAhNF3Rr9uEjQ",
  "key2": "35zVWEzegaQnWJxf1T5TE7VaRkP79qnXuH29dr43JZFcAkJ1P6Z6RafJ9KQjXDjjDkNTMzjDFPuVk4hdmbUfZ2Xo",
  "key3": "4vU1wvHJ3hUqAzuqiJYWqbqGBQciViJDqscm1TLpZ2nwVQHP5Dbt3fyc7ixzy41uzaEXtwPExaLZCkh79Aok843e",
  "key4": "4z8Jvyyimm3mTCjtfkyEzeBzsdPuVWuVA3uAj8qcTLExsyEyQ4ExhoPivFnYFDX4f7KNAn85fwDshsdaxPPncyP2",
  "key5": "3yDArECEyfFjiTUxDSqdGD4xDPQZvx6KYMBU8q1wKJ3qX2TwmKaP5S42xYo9AMyAQFi4ybBBqiCcCEa8WxHYPHEA",
  "key6": "4Kpuo5cLcKJtPyzE91LLVNsCufx8XRFd1euSvkMfoF1JbRPiv5qT7gULdCCVsRWKCA4qXQoGUbmCS5BBj2f9C2tW",
  "key7": "4iMhEeK5tK6Xn77LnLjZttVFPBLwyXzgbXjHtkhHjGybu2zCmpmTrTLTym5bSRE7Hsj6H7gmNLa3sEBTf98eqYzb",
  "key8": "4z6xSrAgkXzffiPVp4LAHQTYKJqo22jyKZ8cZsCvg2eyWwVcUxE6mvw4X4y3pdXZFLNgbro749vjnTZ9VLFwRQQ6",
  "key9": "5iXufdQHyHjphNuBCem3ZUJ6TBBjEvHUieQGTPP1Dws65Qd3iAyVJFbaSBfamWhB4hY6Y4xYXx1fV5wH9yCqikxk",
  "key10": "4Z1jafrPkzNcuujuVjeGWemmiaCgCv4TuecriY5U1FAwrqGpad1a59aXJsTnPmReNumRGJMQd9UTAZQYCPCvu4mB",
  "key11": "2uYN7dyWbo4vfp35u513mAX2HnLgmuSvYKW2omV2ZSiZe3sYA7XDrehZ5bviTCaTePGWvWPFJvPuDji28yPCVSsx",
  "key12": "2vHYvjK7DE4Z8VvigSo6LBguS3UUdWAmAZgt4CcHYbsEGYKGph8avVZjhWcvwGSnM4ppiBHPVH8Sa5oFqYHtR7mB",
  "key13": "5QzH7JmqUrw3SLdaDjSdFxCGeveRNtg1f3hX3jrsZjn6T6q92F9LBrR6Np7fVCZQbNzAZowKBnJhEPynHTrg3dCz",
  "key14": "4Q22Gw4SJBbRAu8wicFha9NLUGRPnb2Zv6ShtJjUZVsoFX8PabHBup1fowSTk1hMnk4ev4wHE9rw56gKj5SKSW2A",
  "key15": "5J1hAqoGF35J6yrcCMWhbtrShuRLqzJCxR7hhQw2n3GFCeCCNLDJwiyPXRFqn3aQSXe3PAPBCAdYRVtFUsHCeM7C",
  "key16": "4xwD38mfu6w46qArfbzWrG1bfBi4q4HRzKGK54J7WaEJMF8qFyxpbMJAFAv3ZU2q4ACGpoij69tFjxiuU767rCz9",
  "key17": "5LGJxedW8Zt17yM2njtYPDMwTWBpWFiNpF2RSNNWBBpU3bAWdReBKvJWbor2YEo6djgg8dFo46kKtBqxeraRyCV7",
  "key18": "4MHpJR7JtgJtbUzjbiUPk8sfKjxWxrJVJJ6S2mNRdWUSdH5ugRmzMnW4mZmJSHgjus9jrSVXpYpeHJVC1j3TRk96",
  "key19": "9eBwWrLvz7f3BZBF98vkLyaMtpExXh7KH2N5AGxvcgLHezpGU3WtzgLaKkiPHkYZ4yNhotU5wZQ6yP9fRL1tAjz",
  "key20": "aU8qJuArkcwqpAV1gKuKJCF2W7UopN36y31DGZeFf9wVykHHbwehg8xSxdBYwHR52jq8CCkBRnBc6q17fAcbSLw",
  "key21": "bfCeFeag3WADE4xp85HxfAChY5Q55hwtcprLEJ4xdQxgMzUqU8oaqmNgEgqxaL46GLpgPseW2QFmEqLbhhF8t6R",
  "key22": "NbVWMoeubryAwMwYPuTYfez2wLQCNTkYf2Z8AymDpDncAxwiK6grSy2xhBfkgck4HiVuj3jUov5Tp3AMqjcwiG3",
  "key23": "2myHWzsXiP3twhWqrV1NnFJ1qx7RRcCVbNqRRt4haibTBCycaLXh9b6hzinsSgf4MbjuDmpiX4reeboBTHKxPc2w",
  "key24": "4jGs36HWU1DkTYqwwrxyFTNmAoPGr7LoQ4KJg3kNbabePifveyoivoJeGosyadhiberwmAXqQMA4mc7CCaj4t4zf",
  "key25": "4T8v26naRju6nim3iawzkQEG6GQMZyDPM71BMAeX5LRiNVBrdA9Y7rysVtBVtqvbB4zsP45jeSr4wUXJ4G4DAQgB",
  "key26": "3YFUPqpTFMXpV5hm26tBJuoG28xxKUWtNwVtinTA1ggG4hNjetCazRTHAXerYWRk35LMgyrUhiQT3gD8xRE8TQva",
  "key27": "4LzoRcVAuLzY5NA7c7MkC8yXUCAArwpPRtoPKxD1a1gbkv2Urq1PuKSeVg8rYeMR8LEaoD9UTJ3fvEktoFQsLYBx",
  "key28": "26N9PLkp4f5CaWa7KVatZL7u5owxAgUf5mrpuxbk6TztVwdbdtxVCpBPYDq9FLQXNE9bvhZPkgrJZiy6jAiGuMC4",
  "key29": "2eueqC31MbUrdAM5YhN6S6ccJusRX9r7MPjCHTcuUSPMRA3vZFWWGxyC4wYkX5TSfK8CdbXeRF8tUBo6qgFGZXHs",
  "key30": "2MTTPPDhjc1EtYDjuzF3Ciiy3XZSpkcewT1VAf3W1rJKjjrBRea77WXvusbnudvfE3EPXy1c5Wp2CDDbjxSrLYFR",
  "key31": "3Mw3zowNLcMswazFuwNwWUBDXbQMmQcAjtsvnbNf9fQHgfzfAQVW3xMceHAUDR4e1fvtJCEKkwa3p2VcoW2WRkF",
  "key32": "4DqDAx1oR6qcDxWnDV1HCcDbXS1VgFdLvFzPDtcRu3Y4UTVKzcSw2odqffWWRVvUjB7yQzZMyuM9qLoWQpZcsKqp",
  "key33": "RQtBAdahPCGtuu7SC4Wpv86ciTUMZepiJLk78zbMG8udNtiY21FUCqfrey4rJp31P1ouBmfBVvyowRKWCvMYqHJ",
  "key34": "65oQMXpJRNQTfd23ZVFJb7pxLGSdDk8RnSFD2qABEDYSQ7kh8SE6BLkSXnKrmErBqAJXH8YATKqr5Z5a3Hucctje"
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
