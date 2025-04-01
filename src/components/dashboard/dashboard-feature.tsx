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
    "5X32d2VYDrUTvzRE6YipTJpoyrc5HpqDNMHvZ2zZQnZ5xj6fCrtFc4CuNaXGy4k2jdLSiYtrQ8iaqehkZmMjcZib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymSZNawk6wBqeCg5MLji2JaH6oGMixW5iuE1AH1pE94XeapKt5uq6D6WA2HweDe6cT1cGGUfBwK8bw7GFzfBXdC",
  "key1": "5JZSPLTSXWtN2i822C7URt619DVXM5p6BgpxmXDecm5tg2KWwNiv16x8aUntfwE2nsSBsLZs7PGz9PVUwGqWZfer",
  "key2": "JqWraPEnh4CKf2jJ3Qe4821FPuzzQVmmPz8MkGZ1PrgSjvNQk3rxtojG3RR8TEUVdn4CPZ1XehiPu3bx44nv87w",
  "key3": "5yT3g5pt2Rj4ET9DjBxGzXXq5MHQkhnPKdXaorVco8AgErETyCCj9LR4iruhz8wFsFewD9jZwDNmdiuLj2eP2eDt",
  "key4": "3inUFJZn9FHvkQhkoBs6P63F2sNZc6iDMyXd4HH5qvUudw7Xr4YEMsQxBwrYdwwGApdcEAmLymcrk2YrsNBoxyDd",
  "key5": "4yeNLVuZDmeKVD9mq8jRcFwuFMD6Xw7NCXbDQY9Rz3ow4nNfBkAzfn2EVeM7L7Ux9gVqDMLoZySDptMwAjuVevdV",
  "key6": "RbPYkh4hoyKntfeZst3iFEC1m55FxhHdZJCgCfByAxK8tN5AUunieLc3kZgqP5Pcce3PNZ7G85FFEyPPjdKMGYu",
  "key7": "5C22jtW9GeQs5zVj3JKrmJ16GCHXTDgKHVFvLrWP7D57nc5HRvmPBhtLR8jZLhFitR2tZ9Y8PgUfyDh2i4wSyoqv",
  "key8": "KLZ5qPsu5tyqJxtdvL7VohsbXDTLg3H1iX7RnKcQxxuBhzCrp8baNKmseiCUUVzazqiVbDYhSYd39FQh2Sw3J2L",
  "key9": "2DwnVX7fVkpu4qEyFowg44t2XX6VUYMPcKwbUTpfc8JroszqcQndWqFtb3y42Ge2dP5VWXAXK86rL3JfQsmzx1Xr",
  "key10": "5z398NgKt3Hky7yMoe3c5JjRTsi3cJvSi8GSRSBspbLFNyBchamMUTJ57EsekuCtGNjV3zHdwY5Qo1CZRZdXBkFJ",
  "key11": "ct2dVe465xBfqc37s5vBCb8BR9CwVLZieCebSkErvx6ma7Uo6g9Xqn76HSCLt95StyQq11frPFbmCNJBG6BBrj7",
  "key12": "2r1TZCDLGTH4ahVyXPuELrxuTAPWzSjhN1tigbey5rTcDbg6adThmenjgSPyyWbQCb7H2GGKhxstduubHBseayWC",
  "key13": "N14h9472i4QWeyutNZpnikTrYMw7aSUmV9VJKC9Twy1dxVAVkAn6zWFxPXLtHyB9LB88SZjUSkS7z6WPSpPRLqS",
  "key14": "3XZVvdg1ma7ZAZvKkibHCJVzgzrbEMQwj8p44Eh3D6RVwGRtLNBMjGsiGwGJwYhsDYrRsVomj2SXezMzxhyAcCAj",
  "key15": "aTgwZ3ZAh7SQp8bZSV1KuVx7pXRvfhz8qXsdf8Hgs9CwL73k7B3p3LeG9xY3T8R6xYq7SKEGFRmry6sR6j44qEF",
  "key16": "55fUbSjSyA8fQ62fFHNAnpTjNN4TS6xaLNf1Ww3PQL9GeFZnA7EgMv35io5GvbFpkMbKS7EkoQCnmHXBUyTrkFFg",
  "key17": "5K6jswHFSc6nBpzzUZGVXaaFEktJSkBgBgaRCeEDjhzzRVWowmPRrBdcJ3nanP7pjBw1x9ph1kUKNE4QnW7cJcvh",
  "key18": "5Y7Gw4eZUsHJrJfukyzHBabJYUVgsK7GxkPaSFM6whJEqdTaZMrrPK23eKwjrfaUfERt86DRda3urdsDtZvGQd2M",
  "key19": "4mqheCKXYcrb4SoMdjn9N9e9K4mAJ1WRyZHuVUsFo26yo2orTkhNeMMUqMgyjMaaN23ALdSyQPnkixjbN3SfUBKv",
  "key20": "5a4nJZBkrBYUzb4JoSwYr89MC1oPK6uCwSXfdcFKerGhfVdew28o4mUMzeaEYkUmF2SvAjupjCThMBkJHCGAKyEF",
  "key21": "jVAquiukWwxJnoFp9KBbB7C19UGSQAE3Tg87T5kRpQDkFk4dCrZFHyR1tEvB34Y4dxg7JjewRLpGvsLQXfRHgER",
  "key22": "59LuU2S2iL5mot7nPkbkWdnTFD4hoodKtAnQui4WKwAY2AF6MaQPG8svWw6UPX4NbAodVdRUC46uwt62Z9Lfdg2a",
  "key23": "4vGRANKAr5rVrrvgRbAYLdBqW97d3LiHty3uw3HGsMz9rZzsE6p9x2ha3evYQci4vTcMw3rRugWyDVTSCxwSwj9R",
  "key24": "64H5QJYjSCvvmwiML6N823kZLptyEnsfaWWYR4geRLHWwzePb8whJEYsGVmKieKMM5tB12ms2KczwSEzkdna9YVA",
  "key25": "5tPg8oXdyPsPouSy8C8zRcuSAorAhkfgXUDRmbA9vAsKDyJpoBASVtA76pyXtpyiDP7JPh8ZPBEYrPbbCzKxfsxa",
  "key26": "5VXBhDjxzjtBtki6JbxSPcgYXQpZqfJdr6qTzCqWw4erNHJY5kiBuLtvY5eQfvz2jtSKz4CQZ8pJTNgPx9idkT5B",
  "key27": "3u1uEBMLNdw4XLmVEKsksxRdEEiLJ7umFzPydVwvb1xX7EX2kAzYJtwvSqGn52P1X3aPwshh5TQL7BTTDBMpLnWX"
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
