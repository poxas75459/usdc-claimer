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
    "H2qm7iGJNagYC9FKewonVD1uuMc5u6BQpVshPXhFtDaNeU3VdWL1fX5dFKg2EG4GCtv4zzD4VdburkwhHNhBj5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYNZMn98tzvEwbR6iu8u5wdBSPCB4qvfQv9qWqNZ4dg68ut2BvbarEhcqoEBvt69xQRSLvF6qvvqpWX2KDBAnMM",
  "key1": "49TPVcDSGqvNSt3JyihuZUYJVGfJk2nvNFrs87JueoS72BeFfug88MpSjNVMsDXWi4aTuu9K7d8v2biQPHTRYATY",
  "key2": "2wYDyyr6oEPeWouUKbtFFb5WqKiToo3TKULd6R1CM2FFpNkzL6hweywaP54ytr4E3AN3DCYJeWzCzFFXChCahpvX",
  "key3": "3bN6hVU4zcGpqMja7z9pUG1k3KpC9p6XUnDWS5fu81WommXWWm21eBQPHJCUjpGrAhQW26X5SRe196BuGxzGTfRP",
  "key4": "SK8euwHqziGMHhDRGPeie57zTXjnfm59Dr7kvrrpqQUjeaHLo8bdeiLmCNUp6N5Q21wnM7guvwakntRxAtLFN43",
  "key5": "2nVGcgkG8VCcp7wAJzb2Vxp6BChYFQfca916WhuHkc9XZDYtei6bgX6dNu4RQCYbBFCWwqQ8URLhZbPgrJPpXLRe",
  "key6": "4JNK2KegBUruk5d7UE81sVxHvaTKotH992v9tvsVGz4gDCAGHvtYsUhyvLDiFFNwHnVYKjzQFtZbshqK6KWRuqh1",
  "key7": "23cybGeAtrtRGKshmJPDuRooVB2cCJ3gv8KZswqNATRAYcBtrifNtDES9t5uD5Z7YRgHvRqBAk3cktQ9WTBPfMdW",
  "key8": "5uaAjWTmAvMEFGezYEVmcSxX8kcTGFeW9a1Zfx3XAPj3Khjo796nao5hCUTV89MUaBJTcagShSjpJhTefmm9Luot",
  "key9": "4qdJ5xGWhmFCUKd7XxPmMc45TCvAed9Fjxxxmoc4RCrUhnq6CPf9CXufitygHMSwdFFdDyrZSq22FCQondXWG4VW",
  "key10": "wtZRZTA6keH9ga474Jrd5LEWoPvUxmChZFrAYbWFKnTzxZv2jFai4Jsz86FBaAbpYCDU8FvWu3BFk1f6xazFpqN",
  "key11": "TA7HpSJbcFuPmRHFwdL6hQW1BUXHL9XuCxmMfDEGNJjZfN9sLLKd729RUrC6hJ2Asj54hdbehripdgr2A7MmbND",
  "key12": "BNTv1JDzKnjkKY6VuLzc6GSjkRfet6NMFNAWwWCkcEdQeabgHgsoYPikJqcdx4CpW63gQLzSW2AvLEJNNoBsZPK",
  "key13": "3GqZBudk1UZyNp1zJpmREAEF3G79fSmvJBcwaLvLb9YkQL1FAt2PyGAiJmPMturzH5fRwZeQA8yPpCoR37TdD9g3",
  "key14": "2qXo5FG7M98J81bQuvyp7TkSBZUoeYiQfdDGUWYrwa3r8EyTUFL5Hy6acvvvMVMdFPbFcz5jA624TmNzs8thJoqG",
  "key15": "4cmvX7V2eVLjEu4uNGp5TPaGwY3cKNnR7sHvKcnnWkkxMPFVM6k3ZyQhLpT43K73S4QnQEoQsDSnN68bzkT8gdvb",
  "key16": "5bRibG37vVutLz4Ja5ZJrpyFEGXAQhCiNfyksRQGLUcnA14CFeY87HKBb7FmMqVbs6sJk9r17VLii1WRUR9NK7br",
  "key17": "3CNDneb2F6xZrVRHQE9SFpQjMxUPx4Er3ticVLmUjLua6iFz8eCcPwvKL7YKL9WWoUoCsAfKKcwzgBAMVRrsrXtH",
  "key18": "64xxm2GVcEgr6hz7qNiRnJatdszdczxaGNaCV5Ke2THRTRynienJD2MbA1HHzNEAGw8ziwcAvRtyiKLWokQVavPG",
  "key19": "5j1CBQUtoixjKLL45pZRtjiRsygk6XbMNTk4PPQp3Qiba9sTfstV8feeMDQgXsxe4EwApEJoAaZvS38FTEt5A8hm",
  "key20": "2fVfU6E6tBnydNbBRHaXy7jrBxgRqvp18EVsMH9MRWqSj58V4EtUj3DFFKTqZQ8iFtG7yUeKZzFUhBHQvxxPoVK8",
  "key21": "5BXNUw9PmuYMqQbgvxdubDaDyhDAxKVhXhJtBksaM5T9Fn9MZm6eQe1rrpXsYGhWUNRnQ7dX5bFuUBVd7GZ39gsA",
  "key22": "61Rme1of4LT8NRAH4H9V5GDupeiHszzMdwVotPXEUJAfD7NG7BD51CrGmkBLq3EjYEFrK2KRgssoyHLqyDfR7aBi",
  "key23": "44K7Yn5v7H8rCMtLUnd1ED5KA6r1Y2CBA8HhiGjNEtDsSMi2teDHk3eJFYtQhUCoK2KFzS7jjX3j6ahXJJCWDgWK",
  "key24": "5MF9F7v81pxwRfgDsXG5vEzUfYr61tBHqgv2y7HXFWWBxfTaprCU1NDoVYsNgvf3gb9NnkyhxeqD9dZL1a9F4trW",
  "key25": "58mrY1Kj5vfxdKfdqoMWwenTHDcrED863jL9o3CaoFnPkjsjYeUhZW1dZyVg6fmGsPUKvYd2NZ11rh1joUQy7PHN",
  "key26": "2kCDqqge3uPPCjbMKJrimsP3fLdAsfSQ7LuFJVoWLXvBPG6jTgMkW4WN6haRqLntHp826C8sw9NBFAFL38uBLobQ",
  "key27": "3tkarW2315ePpnbDWkviDdLMvdkpxu2SdMBu46FDVw8ZaQ2DMpB1FxoS5NrL5EKu5Wp2HCcKSdc78obNNPv5yap9",
  "key28": "22qp1yqLzimP6ER8XHzHJ24SJE2rBDvHw3cQBZoFPeUBEgT8JvgjUapZM46NktrB4pSK5BE7H9sbUzm5ABrrG5Jj",
  "key29": "5KzUn3P3jjPQtC3gDLZxmEKR3p3QZPw2z6jG6WfUT14AbmTnbr2KpHCdBaS6hDWfW3V3APdbS1JZuiGN15iZ5MeH",
  "key30": "5djXMiCAd2PJmwrLupdyE9f17k8A8bc4XwRyHNBgTbTEAFB1Kd1n7qVjBQVEfpV1D5omK5kwPar4uoVyKmzx3K5E",
  "key31": "nEFj5itDe5vf8k7fSN8L9DfpJPhQ4wb3qbNq7E5i5C3jNbQkZXKWtnHkth9Vqp5y46bS6G1LRKtt1Q6YdzKqf2V",
  "key32": "4GDLFk24TS1RmgwcW4s9z8azrXf7xrAmJ6AfxSZEQpCzr74advCHgw8XTcdTVpo9Vah9FsS1shey6GQwiAoDp9Z7",
  "key33": "4LyE9vzt3iXKUXtJVQ6GgW45QPAaEHqeYprB9NWekKPkNYk27Bg6jxTKpbcsFbQjz6oeBQqiuExkz6ojg5JxSLmd",
  "key34": "4bCLAxJpgJFUtc6vWnecVFz3sVK8JQECZ8PErpgAXwygHtFgNXERAF3hjW4ycmyvky9QZHwPfDmRPFWQbuEWETwk",
  "key35": "2w5NE6Au4gEVBnNF3eEqgaK6UxPndDEqMuirJFYQTM7FT8msWqAFrT3WzvBd28imGQHoS9oCpe2errVinPibGHmY"
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
