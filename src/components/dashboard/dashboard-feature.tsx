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
    "43FwF24kTb1gTLgBU8MoK5ubi8RFmYuQND4bd5nP2u4Cv3ka9AvUD1P1Qo7ymobHQmjWAX9yDEWLFPC1q1BCzxTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHWAtCqFvRm67c16GRkwSGTTqrGi8F2DoxL1sJiEH39dS8AGaX3CopFgZRYLxUyggLTCFWhUfsTjFgCmLYzi7bG",
  "key1": "8CEcFLaCPgQHCWPqRHcGQhpQvv5vkmUEicF4poY6ujSvJUZY8a8AUtHYrnp923qoweJbU8UxpEgHK9JtrAeNB6e",
  "key2": "2vg3DAuXxoA3CuX4TRWxHuaTyrJEVCJFiWzvfFrNyFD3iiN3JKEAeJBtqSXpNt7BriDZKBvQ2ar72zwsrnCjBib",
  "key3": "4XYHYULNwdXLfW2uEaZGBa41vyYj2nwUqQsArUzayAsmswfVv7syUs6Jz96nkhWivTtuw3sKvhadvELAZWoZ5XEH",
  "key4": "5mXUpE2NaZbkHvygrwQmL74B16rtggfXFeGH4dUYujsSsVWSQan9TcdWT9uswZG3Ezn7FaLeUgeWCLyUEXPFZntm",
  "key5": "3Ch6MohqZkXYcNBEdpsNSecMc9f3PyFdqzv7Q2QMw6v55dRwdzfkP7XFAReZb1SfWYSy2z9shzqig9Co712oV1E",
  "key6": "2FcngJBLnHUZesQ9bmPkJmmsm9sU4JS2XbC3hd4iXn1mBJHqVpR7jYxLQ1yMFG13R1PZESyWrbSx57i1Vr4rW1Ez",
  "key7": "3CfxWCqtgCnr6eP7cgcGvVTViTatn1zW9dhZKDqmp73guWuLjxgRZ2HiefYyCRG8nGvj6bzYnNmug3ydxxizKtie",
  "key8": "MCZG8evkY2bATcj7tTTyeeEfRB9MPuaNLLQ3Ew3AENxsS7XtJGXMFqgG9iLePkg8jR4TWDgnW9UvoJC1MecUdBi",
  "key9": "24dGYnFma76AsePGQ8RSudrztsWRM7rnwXGTubmpuMVvZD9aZE14dGPy5disjtbNcFwvwbpXGU9Fbw6XYgap79HB",
  "key10": "638AezfXpff5EQ7UrWawrs8VpUZHS1YAHguUbwx5eVu7oSWABgCZHH9f8yZXggi6S1VnVpvboNLfKwtdBWrkYWho",
  "key11": "4A15oKLVpmCwNXLUhk1sHnyKb6pnAxmMWArNwdYsMKrXb5ecvJetM6kqLGZeUDgxuZqN2XrXz1iTgF8u8e7ctuXU",
  "key12": "3vCQWjRWaFAkkoEtsvtK7aUBre1hxQGADzm3CKtoyfLqDroWhmraoWvkmWyzvJanRn6DSM3fHsrrkjQiCexzNtyE",
  "key13": "5GmwaTfwMPR6eZA1EBim1Sis8ALmYYtEnftcJEJwScr3xaJFFRhWB3fnMjvRf4CpHS4jH3MPDxYM2iVMSsgucGmY",
  "key14": "5AG2wmGhk6Nf8xMK2Nn5YeU2FcvFPP27PUvraERPZgntCe5zxP56YaVHeWnt7oZwdzaEsnzAjgCegWavhh3TB9Km",
  "key15": "2JTb2HnyYBcx53fQ3CcPVDR5dcagkZLW1VoRMGx19jK7P1C6nQmvPxVWroVfwe87YwyqnV32aRQVqSrqcqJRCEH2",
  "key16": "45gK6niF5bpdmXw3CscASU8EsBTra3kBUDvNqXekPf6YGbkKYmLfcrhTXQoFT6p7HXLCWi363EGGz5gophrDFz3i",
  "key17": "2VFRZKZvmnwCb3fQEArPuEywNJxykcmWgzqyTFbAonPQQrwap76SB6Zzd1Cb8sh2EQhmJiJQkfw3Z9gkNKkitRW",
  "key18": "TMqkEanQ5u3aZh4Py3mmeXkmVa4CaqjLojTVYThcNbf8pM1XhqhnWkVGGTC179zZo8hr2VHjyik65cj9Bh6wWeJ",
  "key19": "669ZZcWad5Bp6M9ZWpfxZ8ndYjxvGcLpXe4HdPC1uFuJYujNS7UnMB5N4E3GYZQQ8tA3WibhrxJ8MHfwswofE8sD",
  "key20": "42Gw4itM866raVNjg24GTVj583s8bu18EVC73WZwWzPpKxBT5c2YxohStfubp7Vh8SQdkizBUhizhVJLQ4E6Xq61",
  "key21": "4nJ7SC757vUig7WtgP9cuiU1tnouvhsejMFeJxap7h3WpcwcAEgk9mSiGBB16bv6fEqfnXZqWp8YxqD12tc9jeKD",
  "key22": "3Aud17GD7i7ekXSJLaALWmckpBRVixPCrFd5fAbE83Dh4bRvFUibqJZNYDozJivL72kevBGCNuDwT4S9ZXTjDWhd",
  "key23": "4KKJzT2MPh3EbVstPtFjrLir5Q2m4mQmwV45gBmcddMcfKQjCqEZQZiv2ahcNXtfGh2VMqN3ZUkkJFVgBeJp29Yn",
  "key24": "4yZp888Lo2HFHsT4moZo4nB2FDk8GNReuWRRkJf8Jmx7E9EL4fmdhh5mNTi2SnYFS6XLXHz3YpVUh6JKwV7y9yLo",
  "key25": "2wHj7hantZtHU4jSApkfTqfPEbbT3WGT3nJS52cHCWtJ6wi3TTWQDf7ycuALhPE52fsZqDDPGh7yE5135jmzQV5B",
  "key26": "CNu4nyb1HihTRDicG5FDfMtjA8Mr4HPhQF7U1r7zLkTe5MbFvFV5wYDhcF2mL24B9k9zh7AVjnWffZ2tFdfCP2M",
  "key27": "2g9516xEL8vQG1BYcmFU9uUiHoGsoSXfXm3q1PtUSTjx3RbPuXSGYetG15fnbjQEYHUWYecHq2zbfFMLcVrpC5bj",
  "key28": "58TtcqH5VTK5znTZNRkyqaF8L6DRwEypvyGwjo6qgQ5YRMF2Rj5SdFYCUACzH7ov2nRDe13m81f8AiXa6R3Df6wU",
  "key29": "JkXbGpESV3SY83QaHajDhVfew6iC1bagcDxW2FRtqodYHckS39q69GmDTadQ1yY6m6k6Ym9KGaG49wtDeQqkuJe"
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
