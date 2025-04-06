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
    "5gFKFiuwf3vYG2QCcm7Q3zpZwF3UuoPQzA9e7Y7vjCyG5NH9eTdQh8dmFtCxPKrgnsJukNvPwbag7vxDkKS5J85C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGryrMuJPCcqnFLHTBcA3M41jLEnPQEwkuaNBvqjiiJ1RpSjYvmSTdRnhpwB2L1pKdnvN5Nkv7uLiK8C9N4gXk6",
  "key1": "nNMM1D5D96YstfCqEsMafAbV6YNNV4ffqS1JvtNQCbrLr49X9u6UsBoqqhjy5SAsMpTD5EK5nbk4SrUxst3Vikf",
  "key2": "5cinZAk4V4GpbknuxyH8AViJa61VAZhyMSRtySadjbzRoQKSr45A4QvnpkikxebT5LgKvRey4y6nkBHXV1Lg8K4S",
  "key3": "24H745BtcG729r6wMLu8h7x7XEUviHfzWmFaL8mxHPqirR2uAcXb5o27UdurJVzRJRq1UVkNjSFAMQE53Nw4dNYc",
  "key4": "25nmgAGwxSHXc2q6oND2eTz2oEBsKChPWGCzDK5HqregL3anWLDzPQNC3mEz1z83egeuozYCsm5NU6yVs758WTUm",
  "key5": "SzxVq67xstaTueRp5YAna2NNzVPFX3YJx6EPNFySRghFjaFRtpBLLzb8QhZNghQi1qm76BcnwGpiMygU4KVo3qG",
  "key6": "2pp4dUcnye8e9g8HrLAZaWDfwhL2zgzLqjvh9iAsNoHK9Gfn26nprAgXDnHsanGuhS29664beSnWrRN4rVKPSTsm",
  "key7": "PveAD2mcCd6Qedo7HTWFNgfo8FtztsEakRRxTCuY3wTx8X3yBDQLZMjwVRNPvXaBrgsyJgNrfHDKHoj5wPSJKHo",
  "key8": "QTPWwnPp5Y7E8cZE9BmwFXmgyf21pwYYYy7Mo4F4ASgya7iMK8v9JRh57VygVgVWpsQ6gF1GM8fzB6tWiaje9Fh",
  "key9": "3KJWCJtPCdykb9QJiJzN5pPFMjceDn9iwkj2gdHLoJASjYz3QeV4StX9GgsJSk3SWSmVo3QUmj2USkn1hR1ALKfV",
  "key10": "4mjuv5iGM9zijKKRUMZfQ8V4iqL954FkMxV4HFRDHrasrsukwUkZc56hvEZi2iAGTamDYpcLfDBP2BQMYcsLQBow",
  "key11": "38WK9jy7SicpHwwQWn7xedXiATaj5YMMppVZyE1G4Y6E1WVg93cFcHeyt6g1MDcSf1C2mBweJDwZtDvvN7Hy5qUc",
  "key12": "4uQyTUMsdW2oz8imX62Nx6QWzQQYNxPwyxAkK2Abb1Nf7naXg4EkuHKuCqQqqw4epv9SG6UDX8SF3fUEVhqKPq2M",
  "key13": "5sQvGEF9R6oZuvajUQAUumzLaci198Aqt7xFzNnLFuWaUo3WThqS1o4u72HM1iQc2AV6BsjdAZTQUu1U6yZJ1bXg",
  "key14": "Jb7qnjH7qGqF7uyZxJohF8C8Ha9H6CXXtL4ZPLa2nwikWDpsN7iew4N4ov6dwEGBS8rWXasa1txZLFcgtSDBWRr",
  "key15": "2cVXyBLVkqEEqqW2KVFUf53q2fid9DMk5Sb6QQZrUuZrvKVKrKqzdrdfkJ2b4cUUAYeNpqsWQxi4iBojeiiHYxxh",
  "key16": "61fYZvhNYbmXCSwBzUt4NRyXSz534U7m13iqJTDSovHrYk3fy3TiVA4Ph9fPjUpy8nW2aEu6SBfumn9JT3DG9ocS",
  "key17": "5X1G7wUt12RhKTWgsxCBrt6PJppEDb5aUqryKYy9zwDQSchzd9sqSvL69Xq8jimN1DecznEsKX6gSegfRBz4vyMq",
  "key18": "1yoFb4wDMsz4bi8zTBZNKeQLC6Py8pjiKwkTpWRzb2SVc8fzb8V4NBJszkq1nHoCG3dDaMWYET22y6rnB7cCmWj",
  "key19": "juRKFejmzYS4q5b14Z7kjyPkazReTTPXKbGyXQ97zYGYTgfSBVQszqV3Mf2Zg3NRwZsFpTgkVX8SjSqS63mDBLP",
  "key20": "2uFSzw1sLHKZ1EKw96gdJw8gp8nBkr7xxCk21Mp2sPCDB5XRbeHmuqJqmn9eZMQinJhmPauhnTNgaEwztmvHS8jA",
  "key21": "5yzm2T7yHDW9mrvRJUp1HagzDuoThdrsFhKgqh2tVaFyf9Xu4NSxYna48qcKcGEtYPRzMdnYMZ4nrmbME99JtTnR",
  "key22": "5pHx8bFe8KRsygm6cqLJV4tuYNaDskf4tyAx9w9N74Dd6ckaCUzPMKWiwQUi8VzZePwnNmW6F6L8XwJGRKyFNW1d",
  "key23": "5J7sDj23FoJeSr4g4RxYf1YNuwXDhnkMPy9JWkHDejHiJKyThfZf9MZwHLvBGbweqADuRdj6dg2reett3Kxz81u",
  "key24": "473KL6uJTAqahiwmVaFMVjm1bBxYyjM1AwVMCanStUZLeLdcWM6DnetwE5HacYjEqw1BPskuKrDTK7GKKw6Dyuge",
  "key25": "TQySk8Euaam4rfxFEsjzcwRC5tJvMR3aHZi8bYtDjbxZ4M28pozsiGC9PUkLacn8ZAix8pLRLxL6qE9N8f2MdXP",
  "key26": "3cnjbHcYcstk2giU3UPVAvHYG9rrkAVSEXGfEXFidSsMgnpnQGBFCH5d8oWgXLDvtbfciqcLmEr9XDQJss55sxUw",
  "key27": "2VYdjQ2Ty3FYWVwZPq8gwfndBAtvL86nPC9LkTbiNiKh6CvzCRNVLLKBD8whS8qZD2HJd5tcXTDwwtAF31k9g4d1",
  "key28": "PPSxuRzHFJXk3oxWfNrmRJv65zdKkbD47TTmJT1AgZv9dvR7E1y8M1E6J5zVZQtXPy5Dse2KvRaEAWEdJe2XJz5",
  "key29": "4jFZwLt9Ne7BurWXoL9dPaYo6D34mSRJ5y6yuKTnNNZsNn4rNkHjkiuBRacvvkJN58MSHCDskS3oxMa1fJGQj9qu",
  "key30": "RRYgVm9C3DUUknKDf6qFUede85PrWr3pRUV1TmT7F7dsax4MsrvtaBU3hC9dawPKpiw1m9U1KCcqT6aBNu9w3Kp",
  "key31": "3MsGdNhtJTszeBg6UPHK2m2dYEjZfWmijwSAwJWFjsFcNwiBQNNsWrD5v6Nv8i6Tz1dzGdp2CEvZSPre3W1LVW8W",
  "key32": "5FJyBgLbYfY5CyxVvtNxTiY6cxDH38FHWi7Zwr9HKcAVC3e9MKvCLmKSt7KExywX6R4GXfMZzdz3HxSmzgwopoqi",
  "key33": "JwaKDMqo1vBkvzyMgUVtocAJtrr1AYmG8pVmRkKA8TkWDdYC9HFEMoHBQDGe4Bf3gmh7diPi7wxoNnw4QvuPu1p"
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
