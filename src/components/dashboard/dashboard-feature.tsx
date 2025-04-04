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
    "5FJnJCGCfhSX3HtJtNo7btAs2phNwRtXJDXQoZ3fEA8rcXMoAAejgWAp1KVFiBuyypcbQZCQinQCTty9syaUJYMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31nZX4Hv8SxgFsMqKgqjKQQmWqNaVqrEumzaS13AucHNX3rGGb8SRxcVKT3uhJmm5WpELWv3UFY1yGkUSG3Gavc5",
  "key1": "VQAGWpBT8UBR2JKik24cDz5iGx34tk5yQJF8PaXimY8Tqbsveiz484REp7hCrPDWJ8YxvVpRtZwkbSJBuGNB2j2",
  "key2": "5XpbyR8qsLzRogDt98drqo7F9BkmMD8tD789b18fDsLwotSnhdaP7udp6dM7EheXXjuDBWa6QxNb4ieRBFzFwvqx",
  "key3": "3aogf6TTk2rdGQxxWKQjnLR6fgtwSWNFbxDEk63QHMRAWyyR8D9gaxibw3aiDebNod7Tjj8S8nrULtHuLyH3zihB",
  "key4": "27FXBycn64SweuLR2XrAwfS4ndnYZ2VQaK9xUvqUXNxVKKwouHfxMhsN6tYvSuFrXnLmESvywmzzMUovxgp2BuNF",
  "key5": "59eLNMouZer4bEshJbNBN5w1MsB9hnG6QMazAUV9GxnhN93WCy1WnvEP89mLs67pjB2QuTLLys6hwPk1NhBDDKeZ",
  "key6": "4XGLvi7oL46pNyA2SJ2QwGFBA3GBeU6WTrtmgdGsJaHaxM6R7rL3XDvmeX5zCwGakV1b5zdxMh4UDvkBdVWVMjrD",
  "key7": "pTAnjkU7nD4ZxN9bZJ5MkQeKCAkd1wCG9qtyXYGXYGDb5BzCBnrjEmDvJRmA27Usfa5LkQ7wBvxQ6rbW4ikxtF5",
  "key8": "5BQ25D8tQCebqXqKgNjrGu85EbQkgUgTs2csCgCxYCjRjC5C1zJHVLmuTK5czNkomXCA6t1HYxBLmUxVy78jcwNn",
  "key9": "kBcs9DzUFv66seGDEeXYHjZYtyKMJXLbciuKpVouWht9QsUpWWaPNaJDW3MxA6jazeodY8MbKx7KHcRL1ZEXWf7",
  "key10": "4pAx7d9Ra5G8EPbMRBSwPYgCUTq4EDtp2DwhRfU2nYzab7fEaegFobbSRFJWiNysbmDZr24TrqBsku4VkxxP6Pha",
  "key11": "5EJxsJDrmX5GyQZVm5jg1B57obX7xKMAuybieLj3YcPUAxV5co4pUCFr4QY6r5a6RuXBbzXve6aPMSHUMgXXmeSF",
  "key12": "5ikLtBNYfWRKz2iH2rM1WNBAn2ezDN4aVdc6tFkGUx9nyaqwLh8ZdsgSgybKuQdxkDJyR9ZFK3N842Ya1sh7H5Ev",
  "key13": "3C5kG4qL1LZ1ioR3huv5dLhN9TCqUHzSq1RGYyCx9quy2Gjkv3a7DtBBLSzviY25i6WXxViSsy3YqkDwaEzTj6x1",
  "key14": "2nn8mBE1hVR8AAX2RYgm5PMqrB7aRmmmUm4E8CxsCdQ4dfuVnD7iLXeisn9y9B3HSSaViaCYmqCDzLvwiR81PomL",
  "key15": "3LzACJrgp3dQgmQptC7B6dfrmUhtnjLUy8gsmniZuFKZXEBQRBY7EXUz7rzsdm71kwgVJZ77i5cdZvSmmyPSa3WQ",
  "key16": "37K2n91pDZYAFGEQ6d5jPBVu9zi7zViL7YCnmT3owXT9mtRifs8WTXGcfSMu3jL8kA9BCvKXjrqK6KVmqDwYmmrm",
  "key17": "3XzFPcvTd1EK4QHRqBUjsxx826ZyC6qBgrLwW2WifAmP9StQddDU8d1jni7H6Zx9zFmKZYXsBvKRmJemYtNGcVfC",
  "key18": "5TdEChFfJGQcGUttWvv1GapMB8Lhj7RPfFvxYWjpMieJdVMLiBmj2QjSGjfy4o6tnHdt5hexH8H5wedarJjiJQqY",
  "key19": "3RU9ExcbsbfT8oDaD1ZUFK86pKXck4cbHQKqULBvZtQc5nXUqPcexw2MZzspie8ZB1na2BdJt9AKoB4XEa6n87fQ",
  "key20": "4rJQT7Ja5Fo1gUKbSD7phqaEMis8sk8SWQhoXGcUAtVzJT4vKP4ut4jUpnFWiVGgKdMrouLqaUBoXWJGuSZGxUV1",
  "key21": "5STTe4ts89tDPQAmZicSBEKGLqYnjumPZ6Dy8GTpPFT6UuEGjJVxYEWzSCRofXiafacCU6y7QFeuvKLE2Rb7hdn4",
  "key22": "5JEypr3rffbtQC63stn3Q3Tcyxnad1SqEzUhjZziEjhyJWa81VMqzYzK9GrnX5vwt2hxeo4uWbaVarKBiQ4U8UBE",
  "key23": "2JY5gxXTYocwxk2bDbgqaJ5L4GmFvEWX1NBS5uPTN6tvAqFdLC37VsFK4SFh7wMUqme8yHgvTw2XsHiUHfLTnLoj",
  "key24": "kKvc7q8VuGbVqqCXskJYS9ZEUeqr1M3aFqei8UFCPZSL1BNPhUE55JBuEpzLhu5ZsiftwXsgTwA45LozyKm5B8r",
  "key25": "3VLPWwZt1uqsx6mVE5STAjjvYyLp8AueTMNiXAQqetPHGK6arZVQvXKhcnm2bBAuN2tsyGjPZeyjzg5pd3JYRiEh",
  "key26": "c2zWzFeE6vYzuZiBRWigjrs1UAJCANrzqTTLNuMaNcXPbmGop3WspB3dQDqWP3SeH4qBEcn5WsGeasJS7qP2x8P",
  "key27": "2SMcx29NAFMdEg15Q3bejiboCbH7ZvmF8jEoWv8dvH9jvj2TWXLDpQ71CMPzVaBuckuz2Kc6vJddHZewJHfYLE5C",
  "key28": "5tCa1zfYTs6moVwgjaQVBVMfqD1h2oUiP396fsofHtQR1aZCcrda4F9ZCbxWbCu8isVtpezfTPFGnV5R4BYMPpmq",
  "key29": "4UfpVF8aXV6tSTYfUcfYDBAnPXh5GsH6cDNLrA6sWqyrKuLophaNV9cNcASbZ7Tvj11Ne6nRrzS6jdkxkoN26U1U",
  "key30": "3czUCLANUDti151YLXiXGD63rdScyRycHHQVaLTeDkZQum6sEJo4fQPX6JkPw1Pv7vQCR9kRDENDjFzAASF3D7HC",
  "key31": "4pzerLoChBWuqZX2ARSAXS5iSDXXp3Ggp5N6F4RV42uguTEaZyHXMtuQ66dyZHSZmk97ps2GY6As7t8GDusRvicz",
  "key32": "GCjkLxaXi82m5wFtNpk59c6fPsE4iLHn9rcAGRiDHMK8MmQqtAx2Nrnr8knC93Ai8XRT4uSbaWuLzrHqXKNUssQ",
  "key33": "VvwFiqhBAbLDfSfntBQshZB2zdwyHYpRUK68kc8T8YdQnyumCtisPwDY4XSTcpV2NqDe3c2jc7HhRS35dPa5DY7",
  "key34": "5p3WZmtNuoxzNp2FUfv2V7ZjQ2myVWJr9YGRtriCyd69CkdkKiz1pZZqGUojGYQ5eijrumxHAWJ3KwPceZJVTHEG",
  "key35": "WabeX3HnZVjcnZDUjG1bktsgnzhepgeCaK7cgkZ93hoyncdgD7wqhrfx25DjZNuaBsX2b5Fh1Z4514XayfHr4MV",
  "key36": "4jSVWmW7A9sz2LxktQFgkpfybyzPwaE7dRbeVFnEQhHB3kG7brdRiXC6fw6R93zxpwTNqM7ANNYVMBuhE8rU1H5X",
  "key37": "3J4kk82YADwdAwXVDn3toNvDFkarJViyVmMhW43V1ZgsG5n5uJGhts7bkZL8qYUBsPPeZnr3XjLeEGTmZdaNa571",
  "key38": "2GvggrJM7EVNiHVprvDBA97zAZGskpEyHnAGuS7ZNDM21b8xigEQgvjFVUdJHKpDDxw9nV6Cd7ne6wV1rkXawCc2"
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
