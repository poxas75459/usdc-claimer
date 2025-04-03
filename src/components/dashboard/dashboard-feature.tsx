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
    "4haDiJgB1ppQA2ZUNGEk27ML1pHb1X4VqHZ68g8dZc1Lq7VrvE4mN1vTcjWZ8pgrLudXA1vYuk5vmbBEUvn7JdfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Uw3k67nvTwe2ncy4CXA5Gm8nVbvBGtAYXp85a9DreGz9WUKYd2SYcn5v7pRpntKGb1TqqzTXBopEiDjtvn72Tw",
  "key1": "4AcSvJq3nykVvxiN9PPjuX1yY1YgJ1beQ3G9EdTvS8XgXyVbZkJo6zw8ovQLzcDK6E99GiqCytitxtsdTbUm65RG",
  "key2": "tRvXXne7oPuKf2V7punSeLTLz7ECCZjfATSirv3MFhDLVTeTzYLqxk5JpomPDAw6tVPN1AGd5YsUrUZ88D6RV4Y",
  "key3": "5Rb24YqeEiayewFeQot9S8KCBSVuWXQihrS8nH85dZoUAe7ByHSnXt3MUwziG74bbG5ae3jVpsFBjciiyXARt4eB",
  "key4": "WywosvRPtNYgtj9Wyge5hd1tTbHCqyzgqynfaHz5H2ASefqRPqWcnEEpouwwc2UmsgsH2hGpfCgn3VsofuBe15D",
  "key5": "2RqpV6WyN4MBQ2GS5EXf44MXVTF78kZzX8jxF2viaBw2DkTSFNqY4hTEeBcEBKEPok7S4qAaJRioMVSaAfzRKzKn",
  "key6": "fAqpL6ctNcGcjkCaX1Q1BFfxwK1kowDJKxYJAFoS1y3ecQg7KKWHzUMmnFP3HGjPkcTeLNGs191aV6HXvQ8pmEK",
  "key7": "5Zffjapg45hGGLdkKZAYcAE5vuNzV3235VihmBkBVCQk5qUpyhhKbNCs6UL6LtjDrV6XAPYZKgMYACZMAF8druth",
  "key8": "3X98d7k4PbrT7vSQDjUX4xoz1LeakJRULvsXgg2ZxJzMGbULigkPLKKCZTtCNhwR26HFtz624rv9H8Sg7tm7bNdc",
  "key9": "3heJ5CCRD39uvLqHXoY5vNzk8gCMqiJ1DZ4PigxcgPXSF5RZhHWHiE8gQu7xFyR6TAE9XDamucRQLXfGV8pjpWAj",
  "key10": "naKPmRdoyuGQSzefLFRzVrRNao5DtnsN7pysuP8UXRBEUQ5Di3BiV3SS8W1E1cHcQ1dLun6ptgCHDYvMvVaxp7G",
  "key11": "337ELjNNjhXFrpYgTuMGDge2TeF4QSrWHYeSArT6RFAr71p2AMCMYK8yBwJJiEViW2jwdLt8TxzdoFEcrGysYChk",
  "key12": "21JTv5m68gH5ubRGyLRETnJC2JHc2Nc8Cr6DMFaW4UHvj7ULVbGCSPtcrbtxqyrg6wLkk1iGYEdHvidpigRmT6u9",
  "key13": "R6zCmubSk4kgHS6vMjxYRHvV7tuDce8Jd4afdxPVXSp1LemBJisHMzJugf6tXLAFSdyBzUE6z1HScox3UqiTmk4",
  "key14": "3UBqkp1QVe9suR39om98eRZLfycGDhPTrEQdXWTP6jDWSzPHgNpMfNbVhAAZfNQpxg5P7JM33G5BuHme13F1myve",
  "key15": "5udPEGD3fKGTD7HZpYqLwDxY8c26AxeNnnZdHBLvz7xjAMRKXqKjQU648iDvYNhET86zcH85rT8Rvdy9Gm76r7vj",
  "key16": "2yFYnHoDc5vAH4bG7cn3BxFhNZaDzn9TwNAWXc7PRWWckp2K6uKShq9KQjgGTFgba3bGY7D9A7vRQc5sDBgtXojL",
  "key17": "65DSKBN2uV79KNJz1vp4rP6f3MxKf464nAVMfX6LpFWWbdRbNnD1QLjrtTTA3GzEFF8sFk2Uoz3pBzbwRgk1JKE7",
  "key18": "jNWqSppMryV45juaV7AzCNVhnHG1jUddABdju6w7zGTjcxBTezTyj8NNikMRGHRz4LfMBUu5nQooD2jdTZBieAm",
  "key19": "3Two4ZEQUihownJfHnCgou1LMXEwxQtkVzRqGH4XASjtSHH4e9PW28vzKPFZaPQGjy16jDs9jXzAS2TB6XxYeVwK",
  "key20": "pHBWpmAmjoKqNqK2dTMbZCKKe57crYpBMtVndYtEq2sby2rgwgedA4Yj33GfxjnSr2uELVdV7kuJGrdr3DkoAAf",
  "key21": "55EcEZh63ujfEEarBnD4YRkGJEvm1smJbuqbmdXHxWVUrdmVrZ3bNiSx8CSmJXBx3kvYc2pCw1jSvaiT4DeEff7",
  "key22": "5AzwjttY6zgMcsT9HswyKd2VUvCFuxQE1pPrRDM5DgcEwKhkXHfdgcb1TjToTC4j9mL4ukUvDKWXY7vEeoeKnssn",
  "key23": "4Zjtkx4ZuzGzEMwvZr3Lx9USkNES6bxbjSFUjawCS96Y82NYgyX19RXrfeN7CXSVapPTtxm83gNJEsmQyPDrqGJr",
  "key24": "222NDyqatpjeWDsEqfKga3Hmbap6CQ9GhcVE4R3SCoWkAXtDbq174zYrSrVaNFmLJ41DKtxmPjQrL52Q788JrEw9",
  "key25": "5UV6KncxN7T49JYdzzX8KzX22Yi8KvCb6Efp9bVsNbmWwgCZ9NNZdBX9yax2qwJHHHdXxu7phX1VgBMmwM13v5P7"
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
