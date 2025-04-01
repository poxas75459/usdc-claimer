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
    "4myHy3GCtmu79UJb7iQ7xK1XBntidHyeQrhTyk365NEi77ETrX5QX2QGEKJNnVjJmzMH7NoTdKLRyPH3siai7oqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WygtsygR11EiPjuXdxor7mygTqm54HrRGm1vStrwwwJgCM8iWR42Vmf4LmerohfF5GWx18dZWV6nX4bJzps7xDe",
  "key1": "aDZNdWukuJW4Fh8pevvMH1U4iR8fVvTgvMmqpY6dLuxAjMQXwzbNb5SAKinK4NhqmpvZEmdvKUJcMPcQ9ZyX9q2",
  "key2": "2bqKmgK81g8qk8gWDTkA3oSFynZHhXMZ815LwmizxsvCgRv9zQ4CN7i52dAyJ3UaLuZqsPUhjLhsQooZXG9VZwjq",
  "key3": "3mYHhvA53NPEVLzWzwNG5nETSRdo7tKEGfWFxYHVGyVXHHXQPyKjcWpBz4XWWoh4V34nm8h6qiZVBgoFNmgDZwaS",
  "key4": "2Nijw5pNENpVD9zKjjHAkJsrhoep3A3eoRCTVSqZ8hsyAvJS4N4P521faCadheC8e8JKJQfYmnLKGJxHRdNs3Trg",
  "key5": "26rBAYAcijP1k23v8psMNhdsz97oirY8v2kHUJyYXidPo3jisAZnjWXjPbpmb33dBYFy7LuvrHzQ8nRToSFYsbV2",
  "key6": "ANr6EMjAAjwxr4fzFavmuJ5aodzoZEnf4kjSgHDg1b8cEeVHVciVr1XburoiihoQxKHuX44UMdDbR5wGRTKXjbQ",
  "key7": "5MDbmsYAv3HHZwUSxb9GartPNrvRnnisXfQSNxQGrWKaHVdeNyhu7HBG9itV7rTPH9ZeSD5mPN582r5cpEZPm4sa",
  "key8": "XwbszFQDWk24vasCzB1fFxsBGAaQvcxteoHMUyC7s7ENp7pYR4x11mY2Mi4TjKwyZ1sQUauCHJxnbQZ3sXYAvxJ",
  "key9": "4Xxt5n3T6zgpkH1Wsdoph7QJuNJ5qQ4zsbgEXGErmVD2pqfXB8ARAfS5phD61F4ndkVNcSf7ntLHrnjjxuSrPg6e",
  "key10": "5Ybnv1MhzyiubuSBEr9QBoWXjL79UMik4DNJbMxZ12U6ZsdzYg1ajWnH5LvBj35CHbGYXVqJ8sjQSepLiZECUwJt",
  "key11": "5xwEcdSvJNuA58uycv6MEVsu8KYqmXoBsLGrEja3nv7YSzXtX2N72ti7pABoB9CMkD3TGLRSTbMgLHZcudYX7xRX",
  "key12": "1wgWrDTMQctcEz8Z3ZVSiHeYKC4Z7mry1fmLYe1s7K93cMxmzF9dNNRR5KWiniHwbVcuyJ3tonLgQV6QnR9F7JZ",
  "key13": "5k23xjmmkd6b3GHN9pW4XUGiaMPi7Tjg2E8HYoyJao5m2VR4a1LrnoA6qwXAgYgcr3ZJGthV4eyy9aSgJCm8csj4",
  "key14": "29bT6GUnXQkhgMvkSAqDVAoqwnwtCQHNnBPc6pXNG5CgAJnXyzsUnLLMJy9q8UM1StvCP9comoAFCHCYjTXv4KrT",
  "key15": "28HqG8TR2DCxdtRHCuDJHhnrwLMuYm2H1nvrw6ufGqgmPD8p2MNL2V4BXAdCK3LC3DxkMp9d8t1wWbbgL4RWXb79",
  "key16": "5M1YHY3J8VpUyHjh3UhkSZP6hiz4tF2ckUJG7wW1JWuK2KcVfABTrgQj2psKFeYVfnbQd8jrDnmQciNfZsVbtg3E",
  "key17": "59CMRQzv63wEDfyn7z4bBVEDbkvd6NkVWbTEv2kgCigyEurXvMevSEx74wQBWLNd53qWoQvvsqkkVZY3QoLJ2p6g",
  "key18": "5w7eBKUMkJNGaovRU7gcDBGNTKxqaLiDtrW4kbNkaJg39yG5wdGuocQiNsyxjqfumVgWG8UXNnDFEFgNpptJh58x",
  "key19": "3oyXbqnWuVt4o5yXoLiZqeaGc54GEFvjxHRqSCEphoF1zhceZtGKGZEx1dJwg3FPkCks4BcEPAsGB7CWKBBJAhzH",
  "key20": "7zCMwUV5XPQCBohV5zD8XztsUJTzjiUt3d5LKeVtLC1yjwMGV41p7ydcR4oUthBCZ8N3Wo6fvnXSipVN4HHZ8bX",
  "key21": "2XVFusyGp8JdivgeYzPYsAoMzArHkLpBVdv22aLpfT9jBvFFigFUQmyZkrhKMXch4gXDZaFh3WuhDmnXJyzMP8gR",
  "key22": "3mMCvFgY7cKHuKDEJTpiWqc5mKmLNAXb6S5FFMMstXj6Y4TpQntrxf59HoeYVu3JqCdKakWqxKTGA67U7knJ9juk",
  "key23": "4EttXCbzB4mYQEA6bB9RU1ZS8qKo5cTu8WVoJ6fqr4xn84yC9yPoJigSm69xCCZoSRWjA11yFoVPVAexwuVY7G2v",
  "key24": "257MJCX8Sqc5Gn2P15dfEN5d1YdPJoQM645kyoK1EzhNzqi2EpGGnTb33rZ88Ma5jPs7gp2V7pF5W9Vp8gSns7QP",
  "key25": "3Xg2cRfNCqhs8T5g7HvipdW9eAGBiQ9ysHFfUeeh5y4bgZofhpQnyWnU5xwPZrYJukGihsqLbX1mDzQLAwudfxmw",
  "key26": "2ZyKeVe8uHBfJ3knjgVqnZ7YLQvhxHWDhHQSUbksyaX9eHH3yVtG5sFVPkF28T6scjtE6H39NCUN6LUnw5ZKpRN3",
  "key27": "4k9uibK2a3A7HKbHKecLqktDeDJhVfuSCSwwZBdysKWe8qBc9J9TmYDCMTDqpZJ84NiKR4gH7URNvTc7JbTboUgV",
  "key28": "3ZZKXKouYezem179bEYxzbCpr7nXntc5faZvAjqfc2z7nLduHyrqNjYBVcUrMZWJHyC8psFxh8C3gNTDctzWxdbp",
  "key29": "h1BS1Yihv4VbKF9rT7SWZCmRXUcg1LpLfYCtzavYqqgo8zB1f4YdSNQLJC2u4fuPiysYwXNWQj4AsWqedixyHJj",
  "key30": "YLxBm7GXszQCzpkuv1Y6k7t5PW6EP7i6oyF8e519CHKbKTuTt17QC7GHoB5rgDCjQThE2Sf8pkJrATMahMxGRFL",
  "key31": "2qA5hm7NN8GmSgwyHWUsMMFGxi1DJb4tbuJSd7gaWW71g2fh9Ks2a6AYcXYgyquxTKGdPjDX3My87uAVkoThFB8W",
  "key32": "5attLkaZ2Su9DESECeTjK1RbPMifz7TYZQvtWx6KfDDRU4Ba2tWn7CbJhqeRFWci6ZzLYjg12UrhyygKSxEcZV1N",
  "key33": "56iEDkuREnzfDzEo78TKjfuQ3mXXxCxcwgKzWSaCixTGgA5uJ1MiW3YLDSJuzTsfSxMFqGaqEcwjebDvTg5AqHmb"
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
