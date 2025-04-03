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
    "4mPzbdfnYEEhzMbhH7fQy7Ra47igB2pVGY8MR1Y7fVpU5RzCHWr8mM39hz8MSigRxLhprBFydb8PCPVqDbXXrbn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpnoSCWmEwQcFaKmia28Z6x7PSXQnjojmRniBekoKJR41BjMxqWk4SYxXdsfBWM4YbaFCh3x8bqmRrdXnCeVW9Z",
  "key1": "5Pmm9gshQUoPnVnnmTJkVcvnRYN22t7HWAgM96TbCgMXSHAH6AnAvoepcqvV2WQ7eEmWVPhF2KQg1KTMirwdMqGC",
  "key2": "2a2LrbNfvjQTREYKN5VzgEzeaT6sT6dRCzxN7mV2jm4AP8b24mYEovmg5rCu81TARoVfpNMLybCs6CWfboUZR7fH",
  "key3": "4YmE32hkDrDhMZDE6nNaec1wY5W8VyGHMLvYohjzUvXN8hc8QytiQYgw2n2no632Peui92sg8eZ4CBCd8LhJXB6G",
  "key4": "5myPgiDqSApFWX5xSnNbDKBXiVyawu93HTUBN2g3nXEcETSuP4aJMyVGEXpYfoNd1tmi9NSvMRXCQghcN85GDJBL",
  "key5": "4wzAbv5UJdsXq7nYz6baudWPHH9F4WJpqMRysZq8So2gMDJdQzWVw9YFy8xrm9nX4RAaooh6VvqznFEsnRPmsYrH",
  "key6": "2MxzpEqPTgFoLKngRkZEwUAHb4hdyGnqzRyHHPUkX9bCZs64Cbbbqamj745pXMdyEnq5PD2GKqFDVSVPungxfSZG",
  "key7": "5NuQXqq1kbh9z2RA6Bcg5EyqWy1oBtRm58LCuuPRpKCETpUbU8TxEsW399z9YrGQ4rPxuBpVFkBxKnGHsBq9Tt63",
  "key8": "3Rdunec7tf9uXA5d1wb2PBJTnAtAB9tX8uv5RDPEKqfjPQhcJRgHnnUEcf9gbKSgHojNZTqspMB8LcmvZ13VAwjc",
  "key9": "5KkE9RcXak1qoKmtfmU7LXnS8md5DjhGcXfWbs6Zh34GVj5tgQspjxmPcnpdNBkjZF4DKnrKMYPpCCueNtw3EMfL",
  "key10": "21gMGN8N4CrbyxPzVW7jQ6qWnCk4CxBsCJQEg6yum7D9p8fKMLgf31y25g6cfrrbptEx7s3u7sgWvoJ3mmKgXANt",
  "key11": "2yF4t39car46PhUhXXBTwnSn1eEw92yzBxGEtv9iqABxPnzZ8uNhT2D4JN6dcyeU5YAjAMjjNavzST43DjrBm4gC",
  "key12": "3frErrGFA4Pxa49R3zwFtb7xwMGfpvJNhpH2NkBhGhn8cpLjtGCWQv5FzKUhaS6gKCjJB7XuHp8mKrCVrr6uqJVM",
  "key13": "2GwYBK3NRtDbUsQt79uQkpqwFE7YWcFmySqm3jmQMHPEpozxqJfcADhsePPsv18RvfH4E4PrTM5P5tSTTjZUjtf8",
  "key14": "52XaUoaVAGdMbJeiyCRrLFgSsbr8YKpmXVX2J2as9zutEQzYa3dUAhgZTD3XeGeknmWPbYjvr5uZPnc95HMgFvgn",
  "key15": "2XpcQTXyjzh5H83HZjHh93gSZGRaDj3YJSA2q5Z5XvDybmRfQ2DqpEzF4ts9MXMZ5shfhn7ahK4mDZ6qg1nRpdn5",
  "key16": "2sKc2uh1ctVcZadTGQpRsVGrjYwRowgKGJeHzgXnkHv9HF7hXFpVHaySasb3sPhu3tfAddV6pBhTRZHK6DLBiDNZ",
  "key17": "3Lr3dAecC1vKEJ9TjUmeyDr65neRMzTgEiSzE7gRqZYVzzRWx6KiVHKcEgCi524S1mkASxZKJ5N7jyoh58QJnKYY",
  "key18": "nXFHwYvxf6zKmyrpTjYGiBkB1VEGCMuiatLBY8qUGofZSqKEzwdUNyNS28nVRB7g5HEJ8hao9v8pEVcDGZLD5S3",
  "key19": "2kmtYAFte3y4JWoNEkjXqSyYujLc1aF7AD5cA8eEfxcLRqYXo79v5pEwaaxJqE1uDG3UL5UZa2FkeGBZG7Hh6UZv",
  "key20": "2nvcCgtwMKTq6rtLVrFqD7yXQejQYQqdeNsMSgu2UPgfPXMWKkrFGHuTTjmgKqYbyQSfWXeYjmn2h2Nz1EiGiKfD",
  "key21": "3sGiPfe4PoDZyJKcZDnwWn1N7VGPvZfZukxZFCK6wRUVteRhh7hzAqrbx4ELXeK3scbMVJvEeDLZ423TStbBY9oT",
  "key22": "3nDg3TchMzho4YygkRYeYwAZzbQLK581grw1hWJY3XoTtwgbbiHaMv4EwAzpzSMQfsFnY3XGrghnmd7TkRdgBuik",
  "key23": "5ebVhx83uRvpgnuZdCrTFHd1a6LDHP38LJrTw7gyuwBuN32ephitShceDeg8ma2hWxkUexLXNwQizSBLyhDGSMta",
  "key24": "15u4aENgDfvrLUAyHZ5RHWiyZActzyHphntyvWWD1bjT1Vx4BEQUBxeDW3iZzKqwg8eT3ycq7yKTES4MKSw6AXT",
  "key25": "5H5vaLQb9kyg2nHrWR6sU7wd8JJG7HEvqZ7RTnmxRTTydNLQvY8eiFqnQrrPrSXz7SXddA5nsLch44V7eo9y8m1q",
  "key26": "25q8nGRRMHfRUqK3aCfiKpHT3ez7Y8xnE3NXQrvzvtZYwkaX1zQSTShj1RG8AEtKT8xJBqve5RvwG5dVRatp3t3W",
  "key27": "5pCM2suw4pstrWtbKA5hWAdR4ACWgTmftqBXANc3yDAvEE6zCLh3PPE5Cad83ig2WPTNXiD4R2VfFKgWWZv8Zkwk",
  "key28": "LYHJUq8asxdyKUaUihvtmy7yAU31mgLv5A9FxSE3YrS3WRGL18iVPHBgYimvKXZ9ZpgJAdmH7ZwJTXmg6RqMtyN",
  "key29": "43Hev3cGoSbuCCaoz6L7m8HyKyS4nWCC4rnUHojRmwLx55n4i85NfEA8NXZmczFob8NoCS48sAVHdrefDxsVBBic",
  "key30": "PXJNkstXofNnkSxgoa6r1JcxwAuYuixS68SxzdJubcFoB7kWg98J48yHv8FfzPgRvx42w4AYP4BSv6Z9nPTq3n5",
  "key31": "4iyzu5ow3pk8yUGx5VUsKPrUnXdcdbMnuHTVK1xoczVjXLRezSBTs8iz55CHtwGScw2iP5a1cQJM6ramQeD6MY5L",
  "key32": "3HwSsxd1u4zytExX325gBdJdyzN2J1BoWPbAqf8fk4GbZ6BVz35aUAvojyF3aGyTTHvPh7WMtp3JeV6i21E4ZzDP",
  "key33": "41bsyCRHj8fi8Mrjogtxx8gM1tYVFJBp1YPxDwZSowk7fJe6WYmqcQ4AiyZPitwSvH1a4Wv2mmJAueEw6KjCyXwa",
  "key34": "3h8M5HWhptBaFYqMHyH8wxecuymyFpWf6yETKd9YF2uWZLHx4KePh1cPJUzkjR27dJxtry1NfoFZ38NVxWBYUqUd",
  "key35": "4tTCzT92XXPr6cY1uCuWxmTcWHXTNjbxxD7DX9chVKyt9vzK1nHV4yxDWzRYMAGJFAwwqSf3DccDyXfg3FMTVpoA"
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
