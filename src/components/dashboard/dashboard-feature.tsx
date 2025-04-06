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
    "5HDvrrypgVJas3NvqgPUr9UaEUpedWrG2XxhpA9PbNQkuUfnSKnSCGyggajUnRsnLCFEsYAb3RcJAdo1oJ8umBqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67nXU1ETdPvtEwuKtYv2Sy7DBYuUQJWrs3SDVdjeLR9Bt2hX7XgcZPFk63isMFhAuY4Tv36NED6YznDoYLZdWns7",
  "key1": "HC4qhdi1ATSNB3U5wWCy6j2jkcDXXjV8eNAEGmbrJ1cZHYnk9iCmd8hKoxpkR3z33JNvZZ7ZsPg8tBCrBCpWuBJ",
  "key2": "4CwMEX61aE34G8qmCD3kvDMGUGSu4YFC1JZtqoiETH6isisq2w1ntxQy2qSXUtvFMFJeupEw9gvLqXXYxbpFccgR",
  "key3": "5pTAH5fEWueBEziRXNPcQ4Fvr79v4ThRNrW8SSf4FHHZa51F3baQ3e23XW4SzKCYK3uHvbbHSYhRDFt6u7bWXgST",
  "key4": "57Yc9L564ogDxCXFExb9MXNRyFjBo6L8CxTFicD12bRdyB2uVX9ZLBjwxs9jjfewVkZ3T1otHTy2n1Zdoa3EXK6E",
  "key5": "37Mz1kyjjByy1huoDTu8sbzLAz87rCy3dWHetfRqoVoAZHFH8ssF8ueN4Bh9dKXrW8UJ7pmEfRtJgbkuUVE3dcHY",
  "key6": "4NtP6kWiDK3kvAjim159AdjuBybBHzPqjmqBpyp6qdX3NTM6CCfQNCUYpZqPmoqCLKutUtHSFJ7siLkz9cXYMWoM",
  "key7": "dEky8hgLPZ6csJPQQ1Sz5JBnhMzcCXR38LxE9k5GmzUetDNeTTLRT7nvYoKzH23fGtQt26ZQr8bp7tt4oivDLsh",
  "key8": "43rZ42k8bvecnJq7vXNnVPAZtuBhdQ7XmYEYqePyNW9Dr2EL6pVkoGCQxGaJ68Ch6Gdm8EK7kRHcsnVqC8gkGTkp",
  "key9": "6amvi73RjUe3JGVXxsZS5XMipdUwCeW25eneEfwC2QoeoRYRYwvy293oKpuqk63MZNMXQQocPZvfog6vZeJeCyx",
  "key10": "5vP55g3kX53176mU2nVumyXtcfHPEYRQ7sbNExGiiSkAJesSXTQEknrzHrQ9V3NEotM3WrY3W6TKywUYGP2CkL36",
  "key11": "XgXFj9kjrySjJC3e4n1NzTKSxoKz6nMYr7mSCpG1q5bQxy2WhaVKGkSe5bLUWrHndjqnHdGEcPpsmA1PHrhcAQJ",
  "key12": "2v7FWbKuwERa3dp3f3Pydx8j1vtG5UV2bjF8wEi58ZxwAWJ68PCsLQCZWgMCTNCnm9R62RNSqS5YuNQxVEtB1TzN",
  "key13": "3gTZPpid3TiSQCWWKLGHgkDkgJS5Cv4nhvzwU8M5v6NGVEbSEB3vrNx8XQ4zJA8J22iscDEbnE8vGS4jLnCDwGvW",
  "key14": "3bXy8WEsfjR75SZRBsNR3wosYE9JQuGXuWwFm22oS3vsuHoga7ui2mWBQyhwwyXggdUFvev34tJQvcKYUM8NuQkj",
  "key15": "4vDg1Pi4ZAkBtipnt4UWUEcu5Cq7V3jcXnVgAbFXxuVTWr6rZV7Ca3LW7puCZASqa8XJuYd8GmrfgNVn6rEx87CL",
  "key16": "4tK1UmC3RiggBvsEiSAsjzmwpZkAsMq8og1VuuSok8KyX3ZDqrPFQfULUV9n5nFVWF9QeBEZpstevNJLSiRKqynq",
  "key17": "4ZkXiSix5s62LLGNgtTJb6sz4h4ivL6Lu8zTPyQbrPLagc5DzWSoqCCXwhnmQs4fCtV4Uc6dUm4vbZC6xBLRbVaY",
  "key18": "uBh7dZzqY7bh3YsL6kmFgc2xnNFYxLiwa3iG7wC3U4fbhcwc6Yjs2C3egMpaGL59AdbUSw2SWg7BLCBr6nxJH1W",
  "key19": "2CmueqiFCUiy5dDfWmXnbQzfsP4zGR1e1uSvvYBN8zKV5zzCVTstY4w7wntknn6wz3RUD9xFwTREmPQ9nthRNuWx",
  "key20": "3j1cvASFNFEinxS6G23PAFeq8Hki5UDUZKuDQi5rzMUgbyLtJ9RxGqPYz2YutDf5ZJqMiFdaWxosxo4wXwxagMQY",
  "key21": "3ouEivjnurykCR4dyeXbSsxnePS2LacyGyHykpHKX1HEhd7fkmPkhqohEaoAGfcVst62e8t8yNt8HC6Haf3o2Zj9",
  "key22": "5Qms5H1wEAskhfhV1vUm4GEkYq6LeGFW6GDLYzE4WQXzwKbAraz2qV223VxHozoqw2dDk1kaRN3u9mxQ8pNeyFfA",
  "key23": "ioxvn6tuM9D1tpS2RPtUCevhwUp16kW2DJP83ZLSDKvsLoe183nZQS8FQQBH6yh2jc5QCUC2Eew7g8YsqFMGKsS",
  "key24": "4W1dvE7nM8DAs4e6X83wmKmTVyM1hh9Zg9gnRG5ndE4r8g9as5RtadajBR5UC6FGykbqwkfPd3MC6GSoWMtWCcff",
  "key25": "4e8DgSZD2MNv6iWr72HyZrPPR9k7r1z55URCWbjXkZSXtmUhLR8rDA9XtQH4S6ozd32HX7StefVgKkY7terMTwdP",
  "key26": "5qAsPw7x2BwJDFWkMQJJWB8e9at22XCffXS8SGJGARHBSrwQcYauFp8qQyfWrB58u1j6zatisb5yDFVckJtE2mnA",
  "key27": "4ubsNhVw7fs7BATgNeMut8LnsHC4GEMsxwPGeMmuLUQJbTcRDPoA8QB7e6dyQXKUWLnP9fzvyirMLA99FYiTnj2M",
  "key28": "54PJNXuWA818PiZGmBgxN2hb48GvYSg1CAWsKM3rTnmcroQbaN2u2Mm1bSuTc36FwPPGbXaXwkhExYKxijHHh4Us",
  "key29": "4GDcfAgnYFTF6f7D2x655pspFckNZLHHuW7dkKZ45B8bL979Y7D8SmqmxWfmRa1gpkeFoqTgPKXTNodMxGGAoyUo"
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
