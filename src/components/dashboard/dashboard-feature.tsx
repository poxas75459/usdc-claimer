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
    "2mW5QN2boFYezogX1yzXZzXSH3zPw5kk3GcNJuM9gMV9QR4QLWUZgDisMBHX7vsaYqyMVaFd8iRVdDF44gPbGPCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "un2emTS7SL9iz4SMJSDXX717HcPD66cYQvzErWBKg8bhNKANtkFcodmDpHpEgoHywtomQXcxT85sEqG72LWv2eb",
  "key1": "2sQPxamDwh6SFwBeTFw8NmxhjoU8JL563scJ9rR9o2NEK6fYvh3V8jughVXNPZQTT6gvJZGDkrZg4ZsEZzWe1wSD",
  "key2": "3x3TRHUdqbMXz9yuJC4tDcb1hppRqJqzkjwd4KKKGtPMCEsfX2WCWQPCRNsRAp8mQi6MyoiAtA23yaDsoWTCT2ef",
  "key3": "2dd2K5djVYZEUHvPjbokCA8DSVSiafeze6agGrxZ8vCQ6SMmhNn5XhHv7hEWvQruDCZu7xfi6UV4kvJLy5MSWkmz",
  "key4": "2mk6rEr44ru2ShNVWhLXQggZLh7QZCJtcG2XNor3ZetiKGq98Y9ddn9QE9tW9a8uYUZUa1b961V7fw1PuZbUW38X",
  "key5": "39T4Au6sAgq4LhSqNMTSn3VvWAKrPdXCMqmfxwNYjaKTwCC5u3Xyex4zj9VQu86VZm49cmSuXA7comfSMUpfBgJd",
  "key6": "2GaNUEnirnQGHfMEVGkUxptvBLaNDSug8xEeDoeLmjyMQKe8uVgyGKU7ecZyQf8KtcybM6tV41PSZ1KQ7uTn97tq",
  "key7": "8o8Xc6gJtNQ3uTa2bRQAGc3HcBeB7Zg4dsP4VYF3Cq4H6C5zyLoVqivYGxu6HWSrh4EFh2UYGbJicPsEe8kMwTo",
  "key8": "5qn8WgVJXo5wRJ3mnJRJVhhWmZaMga2ZKFSdYjKeyGeeimmgj8jgkx3wUygTVmRcFPTHh7PMEX2K3LkWgwXnvg7M",
  "key9": "2N3DDwP5gxXrjjdovmByLbUb9SkSST6m7VxGBRcJ5poDvW4DwCozkKdHA4mfhJT4ok1dQapc9d1gXpNGzs5wYuAL",
  "key10": "3xfXExabU7vbJ8Jco1KWjrcraXkLH5WqnSfDm9mXz595PHqFWhsoXC8D6N1NrFF1PteZ5JGk2SaJ6mzaRbswowSu",
  "key11": "4RE7cAkfqr6Ycby3SB7HQnq8jGsrxjzFoim81d6wsMhJRzcMjaoNyKytwrar1cYWBWrTFPekNUfNYrBqdezdJFjq",
  "key12": "427nMyWL1QN1BY833XY8AKv7sUUeRXR1ExJvYiPPVLYRwpo7V3YgaGmGvPu6V1qgRWAAw8y38RTBeB7d8VUcHmLS",
  "key13": "3Pp3aMc828DHnUNr13SZerCRAzpxsKbYroH5JN6zv6G5xgenCwLJcTNnwrRQQRVUm1bu1aWbEUGKCsjxKc3Bcfrb",
  "key14": "3FHzVe3jn2onYV4QZHax9agP82nfFcnKbErQWxEV6uTam7Exf8YhqaCgzkrVyqDQmyGz9TgNtwGgfBasSadJzv9G",
  "key15": "3q8KmseLyCRZM62Abe3aGRbjtTjLX5FJuBmevknEtDAWaB7b9xMjyq7e7BXXMTto7ZCgaLmGUv12FXgoso5B473W",
  "key16": "5Lkjz3Hz79498JVH6neM1zDuitFdXRhHC3ogWdVpBYikWacZ4sLw6s83vpM9fGXb6D8Gv4aSHNBeMPadyXTKv7Yg",
  "key17": "5sa9Wa7rZz6HUmCpncKvcwwKAfAPtNonQysrzCXNyyrkdr48MgobfAwFbK6zAZkxVMQ9LDSX5fdJAh6rMYW3wgP2",
  "key18": "2SrSVoQJZFf2Bh81kN2rhHF7cxLBn5qnnKUVbSYfjraxLhDQhBvKrpfpR1ChxTzt4qJKQj5BjFHBsfqgvaSPHfbN",
  "key19": "2tnsLpRi7JZtynDbEivm4qGHyy26FojyfHUZrYuuq3273fbPTwS8QgWTZT3LB3RocRFkeguNQ21fsLoYtnzAXrSy",
  "key20": "FVCRPKbfCXEwUtrwwbaMrUsuNNEad49fy9VZzeJDUdeLVw3ZkULFMhEgLWFcfZEyriaeeepFdcvnpDWTC1SF4nv",
  "key21": "ejRBNT3bZY1bxKwiutD8jnv79R52Q7PniGqTxEU8grcnRFbn8ib7FiTKLb2jSCmZrKYfkEcFftbcYYEZsUemVtu",
  "key22": "4wHCcSm6oKGNbVdTHUgTSixeXebS4YcmUZenFarpuPbmCWW8CJTkz6JVyeknkVXszTtYzmfPL4PC4QA1PtGuNu8c",
  "key23": "48YAWU7K3wGi2eBebEXstMTN7KrZsXhvnkd1am77E8XYgXYQV76n9RJavuXF7UqNwYrGpDfRnSN7Q9H3tqxkeRNK",
  "key24": "2bSkcTZRyJ4xj4ciAEH51iQQzCBzg3UHXfhAZWAwH62pAAA1PUDdpmAjat7VCifKyHXbz65WgBJiM1PSkCRhK2Ls",
  "key25": "1QvB8RHL9TAhC1SXkvyudT5CkjAxQZrqc6BqPfbKLhA5BLmnJDpfiqCXUsoWiKH55TkGfqTHAK8RSdFkizK38jw",
  "key26": "5AsoADnqt5W6goBayDfa1qYePHiHFeqiPxb1tZXfFEww7dJU8dw3B9AAW88DCr2KE6DUNotjzpkvNmknryF6yJR6",
  "key27": "4HCxHHL4ye7cHjSgn6KhgBrVj2zYMdtHNRBtLCJaKuzSVJiNRmMaYuEuoZHQuWuA4nQMWV41W4f6Bqd4uEDd7KAD",
  "key28": "2qcNaPtPqgxgRXKpy4f3Y14xiBVy2KtLyt28vgFBtrJ1a6ZEwPhhbov6eQakGfmCNiuQNJ4r7XHqQnY2Ar5B7Cec",
  "key29": "2NRttH9Z9xLnd8RjSRJjwqK8KRsafF32kEVxNeKPsbRGR9JkN9FBzVHFhpxxpyCmccNdC4K6nDkwZsUeut38kVZZ",
  "key30": "2isSCykVq7ymyrWX4WuWZe5aoAZVeJLDUkEsABswRNFTkegcsGFKncaVU3dyPXA7fw69rLzJwu9WFsUEcvcettPY",
  "key31": "57dTt7u5kx96fvQVdqnp7998ydzaAVEezvZkncarHzsim2KTsp8WemquXDTN1mJHgJFgZvimxtF7WkvxRRXHeKAz",
  "key32": "3BUcjrg2jArTMGWv7X9rGh9xUWmXh5hvHuMEkFhhAJZkrFHYH1X8LRUQiE3hjnyHUZ4t3C4mZF48LJV3MzKAcHTT",
  "key33": "36tSGzRVk9RPRBgoKqkW3b2xr8P8tnqRKT2pbP1AvNiQMZgUpZTSyE7poXbkwZ5mue5n9TTuigZDnbHpyPmpEYXa",
  "key34": "4PV5jeqtQ73khCBy9bSnMznRbtoekjPuEQ3ShCun8drqQyYGRME28BoHRGs59ScD5LiEGQ68zugHs3Gg7GRQrwm9",
  "key35": "2herPynRUsmAZASxvGq4ZsyjYutxRmNojPYmv6QLAytuADrE7sGjSVTkJKRz5gzm7qmU5G845VKDapN5J6ncXNBB",
  "key36": "epcq7AwDCNsrFVtoDC1dsZrWDPvN3j8gAEfhmTHgx6uWoMu7HxVE6u4iUsVCzGmU4HsinbCMoUYpW5Lnjb2Zf5h"
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
