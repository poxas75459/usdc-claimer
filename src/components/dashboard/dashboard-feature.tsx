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
    "651xbTNcJUdDNBcUZ4kFBqNFTnkBW2VFq7VLNU7La8MWHD2LgZYDwPbgFMExmZbcLBVUTijQ7unofhtctsF6WvLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHfWM4TMA6LR7Z7gsvEGYRW26cM4uTbdxGeLgQovxyJyRoGJUvxgb97Y5gyN1JhPaLbAgnWq3ZpYbTA35EBgcAs",
  "key1": "d4RoY5XFduiLbjqrqVGCU6C5tbGt3emcjo3ZbifUgRdWiUamXc9Ep9xFRXfxs1wSiwVQuKJeHsW4gKyY8cDuUwc",
  "key2": "2haYPcYt9u51EtMJTRc1nWUGRUKvn87Q6gFvHV4ncysisX9L9yKxWiCWGV5mxvn7KLa5BjNv2SW9d91vLPt33pLu",
  "key3": "3kqGAxLRPxxUAToUHvkzjosKHZ6mfedUd3m5ebZfK7EuBZYUVTkHYH6LRX6nXnBukscwVt1M9LunnqcWkgrirXmU",
  "key4": "5X5s7sCCQmT121g2isoaaHTyAyz7ntwYdQBZbBcVPJtPT8VzCyzHnupaKn2FsNYenG2sVcRusLSUztaebQ3BrVhA",
  "key5": "24hDhAYWU2Nsfe5WjWfFSP4icukinwVMp9tJf4WhDPTJG1uUwwwm9jdmjEp2NPaHg4vh2EK4vwVzuduWk6ehjMz1",
  "key6": "2oGpCA46QEzZf8XrPCys3w38cYtLS2kGorMSuwXwrRvJ1CZzZkbbtgNRnr2eTWX1zsiwboLidpuVApuF3XygLQEc",
  "key7": "4YGZVLedMhoMwNk2bFt7ozCvwdWvyP1FDyTktPCrN8qzUF49K3z2VRwrqmGf5QNTxcqHoPijMReEkcWv5JeaKUDE",
  "key8": "5ZJkvAbenozZvKsootSNQodBkNUFTDLRPn6uCyAafPUfvXEThDxNdr3YQVdoCGs76ak8k4zUG6Xyp7iMWUVyCr5f",
  "key9": "CQQ5fDy89VLerfSFDPADfhwKSx1L6gZmfUCmkPqorCFxh9gowtTbaGwtY7QMpfWubJcTymzkNwF4Y25uK7vsJa2",
  "key10": "4ThPTbPfLobW7gcFmPVAAsMSBpJxhTbiE5tM6LGEtQiG5rSP1xeW7FBgnsA5kJ5te7pvqiY12MwF6xKJGyYjrCdZ",
  "key11": "4GdnXftDvZUySw3NvkeMRQDkiJD3xF2ztsmwMNyQCH25t4P9QHZ7UtnGiQz23JvLEAvnp5bjStGKnnyjhgGiwVni",
  "key12": "2ebrRTpHAmMZohvX5fDMkKcAZK6gUKuWtHjfDgTQWuoK5YpvpdEK7DRnKt3VLXQWWEexkU76DCEdpgEwqbdDfqKV",
  "key13": "4PDvnDPyg2kbTetq8TuYWWk7v9szde52ZQZZDpSThFrsTvaH5BL5n7nuJacM2ut1Ro714zGJ4CApnCgihRTDGLit",
  "key14": "3147SnY78amEHj3i3Sx3KmJEVSVkPJGEj3ebUQpGhFD2ooNz8Paz4HNGcVZywFghzUWJ6JxEdSbEygTBtbwubyHY",
  "key15": "3c9xJ24iySib1hf5KQMSpzS1DHt4zU1bFdss7e693mxypDp3ZKfvBKyDgQiotxKXkcVrHzqCXyggedeJPWJf1s8T",
  "key16": "tZiWz2C39PrLV14R7Nf5NWsWhoR2nFmmGhMeXXzfVxwsc9yEUuMFPGL4rJTy8358Er97pYpF3S8bCqNsq9jw6NB",
  "key17": "3XpUDKG2NoDCDd7kvtaQfcH2kCu3ow4yhcqzgbennpdTdRQ9h42Dbcs74WhW4D58kX2eAyVdr2CKSJC3fyqgPHSZ",
  "key18": "5Ttg7ZsRj6bquJ9rN2sPyJCYePWKDVR9FbW8M8duWLmPTUY2G7vByH1FJKGGUH6QcUX5bSrT7eRumNeRcZxa9jFH",
  "key19": "2AUX54fWAPVAdJb7sEpmn18K8XFKgAeeov37nGJ3x6kGMRvFrJbuKafnVtbhnCEeMd4etcZpNRLXVcSvHuXzHsjs",
  "key20": "5ZFa6neLFHpZeWHsiwMFn14sxSCVyR791UHosM3HE359Y7BHkNysv8Sze1ZsyXmRoT7AZePU7aQPqtrphv7ZFH2v",
  "key21": "65bkVnczeBEDByWLn44tgcxDYQKYPiJaYEYUKgUd2EPs5QKXMWVh8UC6MsVNg6qgBo8ApuijFV7QEdCUhLJsXuoL",
  "key22": "2iDLFfbxEL7wMARECfS94FjfvEhkKJuqeVudNqHMkfSU3VKLjvGwCojwoEHAA5DtjM4WgprRn9cbZAH5Rgu6oVr1",
  "key23": "2VLqF6RR1DUMZLhKjDCveXk8xG5oGrnAPXPK7D9covV89duNg4QTaN3i9bubLa9uSdJN5MZEveJkVFHJ2EFjEgeo",
  "key24": "3zbbYeq2BMDWJYfrD3RgVfmkyeUbdhwxM8Dfjq7zTzf1aT1HDoZdM8Anc3MgvGZRoVkjMFVHYcoKUu9snt3XyzPP",
  "key25": "26JcqkptXmJRn3EtrfEs772C3Gi1MtQXxzKKWHctcRo7fHFdFBtERTrKPJitUyAXrKm11D4iuGgLEVccCTtRNQq5"
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
