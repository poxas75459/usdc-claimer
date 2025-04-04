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
    "4SCHDp94kyxzhWRhzXtSoNYsNJdbyU2dSpAGLXMDZodewunbxER4VU7HGxrgJ4X3dZvvbBgyCJkn8mAKJkXuYv8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2VujT8b6Pd9oPidDbLzfYLTCV1RL3MCoThcUzW1VrHc2rokwsBYQLxSr22P6xWWa5PHoX2fUfMoafeNTrDvgMM",
  "key1": "3FPyyTjETP3H9zNxewbhvKkWgntucQcmaAyKStEAQVk2ooHzJPQbKHroRUmZESsT4bmYdTY77rSbQkY159RSZugm",
  "key2": "4Beq1Cw3v53Da43jzsVSo2soYczHyTBqw8pakA86gFPhkEKNbMpWqJu7WrnfQSDBKB3yULjtNn9tVq81BN3E3i2G",
  "key3": "29NSoi9CaWQmtCLLZWaoFu15j5qe4EaGvdbwTy5uHyMgmakdUX2LRn2xKzPgDgm6NfbXY88co4XLJVYQaPdSrP7v",
  "key4": "3rkyTaB7e6vCTwqhJkCrnKaX7wBnPnHmVDj1ZNWY3aC2fXVTjX1W7bHjwNWHKrsSifq5pgkhSms1brEMGbWDFFPN",
  "key5": "5GQR3kM3v4QPmUW1C1fJo5vDSWAvTFEV7KqiP3gitxgW932XxDomNhic7y6ZMhsAeQF4dHxh77UsreJriTTQPHVf",
  "key6": "4cZnzDejZazeYHeGduDB753XuDF31CuM9e298pSyxWGnCogyuDoMCLjoLStJCGbrGpsBgyMbqgKXvBz2ofqigkks",
  "key7": "3RbeC1PiLiMURVCj1yxw7Xa1hZVWetecGJ8PBG6NqfD9Jwccc2qiz8KYE3vsDNKuPobeeDTrxkbb2beD8E8uDYhZ",
  "key8": "3GH2jXt2X7cqeus5LxaAu7gwDHrzEdPNxGM6bur2bUoRxULd1p2ksKcWGbcZXWzhXYeaeMYtnYc4V4PSTJYw1qmy",
  "key9": "3pYwjE11p3nMwjiXGCretEz27K4QUFXBiyE2qN5GXMRaRcqpEGFFyJSZSNf24AVjcGKZe7ecmMfiSNzuyQtboMgD",
  "key10": "4xcgKp94JkwRSeJkTDicRD9hVFu58G1wipcn6QQTD8QCtgg1o8kT7ufhaZU9cDmHgAxY3TG6KQtd49XfR3JMj6Lb",
  "key11": "E9XDsDpTBCaPLh9Y5HwZt1Cmrc863p7jatiBPLgVSk5TBBmAppU6TzYpcMH2f4cP36oSjyE6n1hJbVLzJbUa9cw",
  "key12": "3BFPPh8NZGfcKHHGwJLVCMWXLKx7AfzZQwLjSuCksxB5GJ9g9UtoLX5HP98K3NBrYjDhv1qJpdwYAPSSkquGfA7n",
  "key13": "3jNpn84VPbdGSkDXdaWonFjBzMnBY5kHfS8Kh5i9AADNt85itnM3fhEMgd1MxRzU9bWvVRpZZ3a1ZyEJcgvdturB",
  "key14": "42ycMwC6yPvdicuAdTeHFwGp8vU1GQ5t9726iiFRYfLZx7oukbWvRDZkN9ZpbtBz7P52RxhqMTy7HUjR62gGShx8",
  "key15": "RYR94iSQsm5YF4Zge16tp7HCyJQZoPbgygxn8Vw3H1iFTMp8ipmznUP9c3mAnJtqLApMnF5ieoJ3iFVXUHFDgfA",
  "key16": "32TF3V7UXq6hmPwSMzF37FGRnvJ55ecU2HQH13tcngb99qbAFiQZwfpvvykagqUThMVHu5L5azdRiD873gaiPAeM",
  "key17": "3U1e5JUQJGKmbMLstHSubDo1DZfXgKptXDov4K8NM9G8R9xwpLNSpv1zhsgjgGPUxqcS8aMgKG9NiDuZn4S2xmnx",
  "key18": "45zF73t75Nb3BnBqpnLdigMJc5Bz4TxALdnFWxeRmpFnns6tM19qbckUhjHR7BtDevB98TY9KhXkNWWpY7WQAjv8",
  "key19": "56685chPpTUb3bzJo6uqzvgVt9EvgTbvEfFBK7Tp1x92P5FnNkuzfcCmzB5z3HRxX8JXtvMNqko2uSnTpvXGYHnN",
  "key20": "2cLSuWMphndX8RFG8Fkt384s2uaBKCT6grCEsTrXD4Lfc8q7hS1xDpnGJr4Hng8Pq82ZF62r4BuoZzGcQHxg7Ctc",
  "key21": "5FhskafyZFMdEs4HCV62xiyw19E2teDLoGTRbDdwswHW5SEqP2JnfR7m36mvL3gv5QmWPA9nLTrXVdJcLwDjrfx3",
  "key22": "dPJXEFnrtGnDrLfLThpzGJzQBYP7xFUbQs548ZkH51E1sX1uEBMiPDHAa1e3Qc69E4jM1vpu263UfKSxX4TjLgp",
  "key23": "3ghSwwVbsgjJBMaMd5TyP75vZNdsXK8FWT4AsQ5ombux3x9qcAoE8RvTcX68wDL2VHi64gi451kX4ov4cyJjGoD",
  "key24": "25EYyE8Uypp8GNR4sbuZKtnrsj7Wj3MkS8k2BY47PibTcPN9yzWiUw9C9YCkxjWzZ4hSGgcz84Nkpwd4rgNehmv5",
  "key25": "65ZQdaezhPRtEFCuMFyQexvyahtSfZ1unrdZxU4Z9AZamFQZJcoqKhv6LbFCevq8LtoLQapm54N7gXryh41UTvah",
  "key26": "4K919Jw1KkVBNqNFRVDfQZ47uJFEYvpZuqy5BjtGwThhzgPuGZ47Vg6j3Swk9JXPE4VpP5cD3TEDSyAsAhGUp4NU",
  "key27": "63nFgumSNuo667A9YNHNtjTL9VPRLSLfncWnsU9tpTsPua4HNHJWyFeiEnL5TEfrUJ1WBtCD3ATHD7Cwj2uHHs4i",
  "key28": "kqqL8QHTi5aYYrbQUHzABkeoyg3hd1BMWipur3BkPa9MPT5u1wd4qSwRuQk8JzFZYkmnoUtYvcdiN1j13KjuQ3w",
  "key29": "2m7ipJBTHYWKcFz6r5yv9KfiRLsGjmAurCrZcLrTgfbd4NjLhovsNrErncMyBRaUCjEXAP4isoqiYjfX2Khdc68f",
  "key30": "uaRyQHxBnmimjfyrawesRNVZt5fh41wMCneekbRuRwL6JHc6HQG7octA99c3DebueQfCcJA4dpUz4DAHSi8xXBG",
  "key31": "4KuZnTN5ieDTbftGpeVGoSv5bAx5QuoSuTfYT7k3e5Ftv3EEWcj1WbAQcih44aDqvkyxjnkHuKbJ5exjsuj9PQoW"
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
