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
    "uzX5a2PSUbe7E6WYsdp5EgwgCyN94MLupeWMAqbJajPvTU4rwScACwXvtuRZLTcYodGsy11Tps6iqxFEbWCfFNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNhgkVtHEivBr96qjspJiAf7H8zevnv11iKPHcFCveSn2V57bmxyfwtH7vBWCEHXmLY2XVeHcPEZ1aE7gxjfbaq",
  "key1": "4awSJYFopJ2vTpuMwChdYkD8zf842tCs7S2CxLwsk9upggBwMdJf81bfW7hz2VKNoof4XdjaWAYW5XbLppDVMGTw",
  "key2": "nDacQit833k4DR37Sr6TMFi3eNFCEVkNUdW46nFYWQWCJmE445vQ88LQiFMTq37pJrTZkK3SoeiHtFrkeCN97EF",
  "key3": "kSjNUfWfVbQJyqpEej5XU4kgrQJFgvkGQSn5kvFUz6vCWXajAtPegJQWgaJUiGpSjxPkvUbK9v8RdKqkARx9VxG",
  "key4": "28AJJyo9ivTcDTPcBR9APybDSx2tRwPhuYeSfngmYz1qwmhVK5K2KGYk51msec3Xe5vrpyvXvYudTpFF2AuJUuwC",
  "key5": "4cXGjq2DX5382be6CMPDbkp7zFLWWkYJoi4d3ArYYpFeQ33fQzBfQNhnp68RPuBAHcLjKMjHRD7aLL7ebHu8pPmk",
  "key6": "55Fq3uNtHt5dLqerbjRvipyMFdapc18K9BCmcHrkfKMWQC2TJipuHKrsmayZnSsGMPFBfyJwKt62TEkASHKiPD53",
  "key7": "2KLUm2mUEuUkH5no1b6dAAZVDDWV8zY1PMDHH1HPCd39JKHUPiABsAfVA7bD8gSKZjpSCbr1X42qY41gzih87T3J",
  "key8": "fPeqLfsSaPEW218Notd1MHkgfTbsHeGgyfmuvG5fFKhhRs4jidNzKq6CczDvt4DQbweD5zT1EZzgQuJsGBd48Zh",
  "key9": "2m2LSvQgZHJc85SCRKd9LDCYeX4k94hSvDeevkMchYYBM33GeRCrevFJj7GKuuCfrA2JCSteMZBEcXkQLXKcb2dw",
  "key10": "3e1iVNDYrmY5DCbJym6YxvwFn3BnQZgFmWuu5SmjJh5exvHSea4JZPedyyz6vZaXwshbLetiNhXSE6zaEAZWyeuD",
  "key11": "2c3PwGqrtfBdfnrzQMja5zuwAsyzAhBTuejgCMgG2EmKKDfToxq8kyCfrRSbNRSYJKdrfhk3cEvtdMQB3BH9ZwYw",
  "key12": "5xHYxrbr7fJNcwPvRAhDgV9do1jptZFVJzhwGFfEJ1ZbWxbFz9MuTXFPoXFNfahrLrE8AkkWYjyXJHYf6zD47zei",
  "key13": "37Mnx5Yaf9ow1LrjD4AVokMBWCLNA2CbaNyn6xYSLSjA96mK37yRHCK4wm17LPNFELiTKW2HR4uo3AQfTnz4aSsc",
  "key14": "3DUq5YMEVSh7ke4fth7ibRz3dVy7fsVLyrs4bcfoNLsyzZZNJXsjxyCmRyVKBStxzoshU5CeZDAYAANJqaHZBpQr",
  "key15": "3vRe7Hsap9LDBFzC941YwD71jHHiKinywvh4NP2u3VgWSCioTLbcFyM1sFJAt8z5neuCVTgKtixgVEEpZhQXjrR6",
  "key16": "2a2wt8b8wBXZGys5nJYpYyDpqdFJPKnJGGfH6FCBqUvWY776wkALZUdqKiBNhzePF5MUGwk7n853U7WBy6XM9ky9",
  "key17": "4Noe9Pyf3shHhir899gLxU5Nqjgbju47PQNR8hX6Nf6BsVhwpgqX5gfzjMPkwE1KRQjFEneqU1DDwevnjmVPSANM",
  "key18": "3D5XFLr692gZGDwsrAoJzJ8Bkcrmu6RervF1AQxHh7crgsRKZw9fZMTZeNxVRmAAFQLP4T7piFwyCxe5v91ZAyUN",
  "key19": "xkcxStFrP8YUr5b5Nh2UFwmNPHRxyx1sRXdu4r6WDpax6WodL7brkzKWvdQsQGd46KGeKdkRXt2mMm6ZA37SBfF",
  "key20": "654wDiQndS9iMWyhVWgDVqXoxLMwyNCVdTLLC1ZuaqxwiDLyqrAmB4Hg5zpQvDp3ywXCNnNXEvzfpSyGpFwKR3he",
  "key21": "5GVL2CRN725cGcNeMhsThh5qq3R1KocJK5X5hKT4g9mSqur3e5pkJ3B5Zvw9kYPQ98FmxgQo2wmvMjQg2Jb1aGfk",
  "key22": "4Nq48thH7McWqZnNAJPEjrQjAcfv8bPNrniR7avJdyFxmDRPvuvjpnvRhkJaxCV31M87NyvSAVDqtexZWs4zLzRq",
  "key23": "45RzbusZoWeLiCjn1fKqV84qZFrmyUdmj9pdt8kkeFy8PXk89Z8cJDJSRB5TWjPXca1cWHAyD6fUXXfM16B2hGVK",
  "key24": "2sokVN7ZN7DdABzapi3wZhdQcT4YoGGnck4ZTtBGhT4bJBGSHEGyH7xHKXtuiJ3yqpqtW15GcseQapgwJMRguo61",
  "key25": "3QERbJVty4CzDGoqtWgTB6TSVnK2giEFnT1EaAmgWk2iQ7TPCcVnbmkT6df5GEZ174DxzawPK6tdz8YfxZWUqR7T",
  "key26": "4CymWto28WnRJXBZZK6RQVJdvY15Hsi2pyNzqUV6cdKLkk6G8UnEZSsHeA5wMPZAREQjcVWaPuerGPg57nhM2rC",
  "key27": "53f6JAMnUVpTeTdb15V68NF8nwxAt64spScX6zfhzeBFaFweXwghi3wDVutVou1cKPmVEKoxQe25SHYigAgQKLYP",
  "key28": "5hWre6NRG4Rjm37jJhBs26Tk5eWXCHT7x6EcxYrzXy5LfQFmmo3XhuSwPzc6zC7bVcbYPq9cuNrpygzgo7tCSxHC",
  "key29": "31eZL697TBfbZvGZYneR64VHX94NMFs3fiyJqXzpyrM47rzzLwmoe2UQ3ojnxwvtP9SfYzUE8N1fksAotz8H5n9t",
  "key30": "53p9R9L5qtLCJSe1qce72oWaVWRyvv4ZnPeQGoQPLSBoyKSjNVgMi2h1tD37oFRTgi9xDPDcquJN8mvpHJncdwgK"
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
