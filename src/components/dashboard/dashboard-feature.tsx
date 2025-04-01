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
    "xwsP25EC4NAfzK46UoHWQMwPZ3XVU8TD8d3XdP43NfyGJyGtXFKnVfQS6VfAcPtVW2RwpAStuSc2J9w9AA3xGa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "423Xfforq9wBp5kpijtwdA2rfpY6q3NAJfjn3iuFd6zzEFiq3ypgsdoCbnMo9nW6Caer7u82qAbT5C89x23eAqnQ",
  "key1": "5WcaB9e6a6Pp945zimPaXGv49KYHTiUsanZUtsUx3yRpPTE3UHskJ2B1KQ1BrQF2bZj2V3FJkwcV3sP935yHrs7t",
  "key2": "2JgkZJ3DydhvBGTTYBGQ1f5cAXrk8EjzbroiNGYoUr61vFKAvHS2Hr6p3ZuzZQ9Hi5K3F9qJH3mLqGnmxcLwZwYF",
  "key3": "3j8hTphRzmWsraddEQnB6hmEhfnuPpcgNNHGDx1o2KRagGyfYo8wN89RCFDzzF1LKr7hP7j8196MpdZJn3mmYNgZ",
  "key4": "2TiTbkTvX1NBN4wVPYbJma19b4a5gcm2sTUU4CdyGh4asZpzLu6qB52Pu7sgAtC9bxoz5oxPB62gASFcyfRbXAKa",
  "key5": "3ws4GADMuiZ3U8Ywgkz7YhGemximxUNshdrZvHsqwksGfBBAqriDbRGT5hctLePb7S8PAKk8tN9oTDVcWt3QVzDJ",
  "key6": "2368bkySSJ5mZyeg1HN3NzWmKQM4nvvQuzS7Z2BYTjEqKBXcJZnZi1fwNkLZPkC7W6KGE72GT4xJcZECeDANjZtX",
  "key7": "2fcUvpoYYGQTyRf8rLyDT3YHKsoBPB6Z1vGLAtA7hJ5YvvGQG52vQqLXbW9pdnjMEq2PB97LkJy7P8Mj98UREmXe",
  "key8": "3yAZgiwW2hqkdbfSDDHQ8Pbv7dASWxCHos9x2FTT2p7P5gGkZGdgUkRuzn1oF43ZqeMbffNuXr8SMWdY3RB8LQji",
  "key9": "3AWSnhxGnFsfVpFnP6wwQLm45UMozwFf9hhdh8jwKnnjsFj51h1quDriqF55zPjBRB43tXoj1d5AWfQojPffyi8H",
  "key10": "2gtA2bjF6Xd8xzSRfywy6TFTmHJezBjaYhwpxX25wpBdr2dP2yMTNouR75yk5oW5fyqScjTMSR5fUhxms3PwfRft",
  "key11": "juQwBnt26FAvWK6SwVToShpftv6AWubpMw1ZjTBVuabAfWiwMCocQiGLRYR9WyL3rdhGzJTtd5wiEffjUoxY5dN",
  "key12": "4vxAXcT3EEbbjNhUxWte1bLfkSCwofsx9mrMzq5Akr88xFqDiHpUffwZjMkKFeKz6xt6fmUQp8Ddi6PHbmo7YYSx",
  "key13": "YXP3DgNGdeDL9L6MouSavVSLBcJiv8NrpSyANLvcob987EtSs1yY2qJ1op5s5EzcLz5SScuPkfUchhmLGp9F7Lh",
  "key14": "3Z4LxDgcRaDLE4LA4f7g5kf97aqGfpdb17DRKbgAMVQCFY2hCDR55YyGnXDe6SnzyePzhiYK22ya9N41vC8B3RtZ",
  "key15": "5gbyUYgHDoUrfwDzT9ubhR1RK4n6LT8kQ3i3i1FnbW6ttKX8aFFwg4VBTqZcVMU5Eo7ZUn2Uvnq3s1WawUJ29ZTJ",
  "key16": "2opgUNhgbdEdkQ7R2DHtT92QuEZvRZk5H4aq5mFP4eA2MEjUoLjfFBtVN8WX5F2dmGhueyME1S2gggnSA2VzYxQA",
  "key17": "fKpz9Rqt4dE7k4ZVajS6kCyZeTQ9WpWuQF6niGT7CFEDTfDEw1PNxXgn4AMxhndowSNpz4DPvZ3oXA5JggTQwYj",
  "key18": "3zVgXNkN5vbNgDXFKC1Edq9pLMv9NEKqKSuPfJ19Scbh5LLCMiyGZ4UPvTNxtTzzZRSG5c9ahpDgJYZRwf563UBn",
  "key19": "AM9qG5em1vnLReA5V9PPx7b7LGtFC4P7wWywZUkYC1qoEh3vGB4XPK1pPkduBu9Y3rN9Yu1cNH4K357oFq426FB",
  "key20": "Lft8XZWgpnkpcU2iPsKVgRMbCHQHLfAwAdFptyHiaqNzN9fpm282r3AB24Tp6o14PG8mirqcHQwNMc1PYgdSxNe",
  "key21": "4N5uLGh1Tz9gCcVTfpym9tSN7b9EZF9onqqGXEoimbbttmeno22pBpG9Lo2WGTqZ2Sjap6BJwfk5m2nNSt7NiVHE",
  "key22": "R16Qv43Yj43gScFZtea9BtHQKiCKU4amkc7pPYeoGEKEfS2QPZ2h7NsbkKG6DJDA8Hxr4zJ7G1xYpsNug1pteDo",
  "key23": "54wBWHaP4ge8hfNh9LGqspVqe5gwUtFL2vkc8gDT9uASkfbGDUqok4cgPoFUN8zL36W8RKFsr7u8w1yu6zPKc9DV",
  "key24": "51TRqTjo1MBwFFA52zjnB1xQmyndhBBUoVQHyXz2qWUPR7a8DWG8hfy1eXusdjJkUmBd5tuudiMaJMrE3aRnq12k",
  "key25": "5HNDwLVrzyXXTR9HozT2KSDUwiXJqdrcy92qy3Av4YX7bMDHqDKj52z6epgFse7C6EGcgdWL23TVkBzwbDERXAge",
  "key26": "KRjuBfqRoJodKWaHSVK56rcxDjY8EtBT1fosz16o34zMrNEM1vYMmS4f13WBSijBxydEhvxhdz7nrjMMa71Cjk2",
  "key27": "34iG63VK6H3sGpXymVBuZjHwYjHo4gqYPnNHY9yWXej2U7z2TF4hvf8DcQEWdiXz3Yj4UWX9cfb9BYFpqgFDrtQQ",
  "key28": "4FATNBicGyB5S6bHoQ1SmX8kG9tcub1DFpL6c61nDjyVKScRNYkznFrjbbFyA6Juw13bF1yYuHVGNGJ1iwu1B2yp"
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
