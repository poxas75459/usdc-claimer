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
    "2PxFSyh8i8dFwjCKPtZVAqc9UM3ZwBUWaVxxSS2RMKjxw3vBgkHQfV3e4Dz3rHaiWiyh2heX6QPAGUeVMJ5ozzZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMHvc38GSWVYSqTjV5vQYMAudDgiF99nrGoHxGu7cyd44VV7oqEYKRRrARatVX4YRYsrougu1kuR6qY8sS9pYt7",
  "key1": "3qfn6AabB7nbix5F1e1ApX8N2buAcKf7ABFwX7CHyhkxFaCLWTrjNP1PkzBheAZZG1uRsDiGD6vyNwEgNXg549Y9",
  "key2": "4LJY87LScuU1q3u6jCc8RyNwpwCr9q7ELwHYZfCSR3nNhhG14MTddZdQ616edk6i9WQSAaheqSAFVnnXVrYANZyM",
  "key3": "2GrdibzWqxazgK4yk7aN8tU2ozmwrVoijACfLHuD2TLZM3Pqsknb3L4xpZmqnPNPYVZXsPXFJi5beRxtFYbirSc8",
  "key4": "47L1iN2xEXLG2Pdw6qVgDRZ4fDEjXg8g8EVHEXgHRWCQHKFXQcQwpfwmX2pZ8BezDk5yceG7NBEeNq1QDy4G3ikg",
  "key5": "4KnNL5ZvrxnDDUp16oAV9qqHMwSRmE497hJKKMSX7a9xFdFvYP2m49KufaXEReVTJzTL71xKTj1Roi6fJqftVAp5",
  "key6": "31hZEgWB46Aoz5xCyoxjQFAVESbnph1iGeoGJXobDY3gh2CbTpXcoaYCkvKgPAUs9Spqo1eZCinzEVBtRqyuYnrc",
  "key7": "2FSNwKxCxbGXTWqDPmS7jdoiJXfEvaMg46q9nojdDfwLy98uRVBRoaWYvmbANtSAZTp5i6RJ76Dy7SQHHNyhLqgf",
  "key8": "2sJEHKhRdq6PneWteGNkbu29gN57KLzrXcTs6pmjsgFxwPs6bKaz6xQPkCLd3tZf5TCrqJ26z5AmuP3H41uLbhNP",
  "key9": "2oB3gB9MuMYdK9xhiv5CLvibZWuDvFgGp3uv2tfeBB8tLcZ72Q4B7tDL9cpBNiRx9mnwDuf1ijGYU7PE9v984Wiq",
  "key10": "5JxY1PqfmNz7HNPVineS5dvsyYvPuyax7o3RLsVcjBzowXVN7E8SvgVaqcGSrRiMjhF94Gca7f8G5GoeZ6GCpeTB",
  "key11": "rHZFQTAp7PJR3cYL4x9shxeYneZebqXxWMEHCjKdULJDQBVyM62mo4t3ZU7euEWc4ApP3cXTVbyVH469BKVhgSR",
  "key12": "2DAFV566DPJqiRzD47fq3HmpZvYohU9BFfQNyYpkmt1LfKnECCtBjV3qzkGgwn1GPqF6Zm5taWV5XwkMH1CEJvik",
  "key13": "AuAtGXZ4EvZsjg9LcbhaoQNQFkh2S4aZzkGfNPjMcaTHRsUQJkZb5Lah9mJz2X1LonMqCsA2JFcp344fRTgThss",
  "key14": "4enTbZLKwRGFtCKjsvM5xSSt8g1AbXAMs66Rug4VffysaxH8nzL6U4qQKQN57u6Sc7YNJFYoAzcrKn6qR34tzcoS",
  "key15": "3DsN8hoRb5cVnwMVfXwCGrYbT4aM2LCfa1PdeBHfpayCkvaxWgGzVyXXBvD6NJVX9J5GiP9sDSFmoswJJTBtVFww",
  "key16": "2ZSDug4xybf7UekfruJJNfSrSpniRjT436zx7LZD3eRFc9KHCbKLKzHitC2Wsa6aPiCV1uBeUXF2UYkGLbPnu6m7",
  "key17": "cE8gxFMHnBBf96uUc3DXmoYiTiDQjHhpx8ysjUFcrUYpJKLkeYWy5k1D8goPxSB81bpb1QpaNV33ueodTfdnKuE",
  "key18": "5KbF1KtoSBp1nWsFu8DEazKPiMRPoKiQKmEFx11ABWmReE2jFkVi9UrkcD8nUz4pyP2oGrJnVYX5zTMj2w8aZ6GW",
  "key19": "35Ed9SR9o8D2FD5ncVF7yUDZWAGEWdreeejxPpPyNSWH2qUvZcXZAPJBxvy8c9hbhAxtXhHiw8QpTnv79drqqcxz",
  "key20": "5oyfWT1aCG8pSq8UkKar3rzQyVxBzQHzAnFXL2v6mG4jwzGzqALUVFYgzMYgcx4F1gESSTk4sM4g2tKCpQgfuEKM",
  "key21": "5VKJyo9yiU5cKj3PP6VH7EuuFP3J1catQxeWG1Mophh8zAKPR5S1K7hsvKpUA3gooSJFPkiyVrabSEcE2Nyg73Qz",
  "key22": "3PAwctuDN6Xgx3ogZYVM6yWgXKphiZpyPk9BMjC7bj1REpvHQfXaYP2SnMixVFxvUAKNRtjUnAQ94MDTyG8qFqfr",
  "key23": "2pFXMnQtAzm8Bfb8iD8iXQ9mm1VxAMMCw5gUTw8x3Hw69NgLUtW621T8vrrLccmcBZrAXYhDoup1bV6KAE3ptUyy",
  "key24": "2TDDyzn1ofPrqHCWsc9hu2w3QQqeqC753qoq55covX9d43RXPzG4gK7B59jG6jnkNDMtWFfXYQS34TWcCiHyJ8qV",
  "key25": "3bPi6uX8aBNjp8CY5x5XTXG3Sf2gVRPLKHBcaLAaznJxyMQyM6wFEtjTm1ff14ZYGdLoZSz6JVZhT1cxwWNz4nHx",
  "key26": "425Hhj4YwudTj94pz5JeAUwx5vT3EuqBJ8U1zmo8FgjZPDtAUF2J4Ku1sjxQNpBvC7WhKiH51WULLWHS83gmcfVZ"
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
