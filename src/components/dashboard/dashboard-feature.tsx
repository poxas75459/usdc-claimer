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
    "4a2Reyjcjc5GiCoz1jaTqmPWRLxCJCtK8SVaXVkXQbNa239scvfaxvcjAAiwUsydVzZ9DihRGwPjSyN4ini9GwC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRyknkKCzXXqgMLMZxSzohhKRZHevXWuNbDupmZcNFnSRmozE1jiquALkg8kc19uWLNXSXvAefxU88WsL4YJoya",
  "key1": "5behaMUaMyXazGPQWe7yLdmmhFaESwWgiznxYJbMATh69vzUZSoERW5snxwZkbf6QQgU7bjXA9WtXpCSTY8zGLDg",
  "key2": "5mMf94eTnMPxXZLZ4bbCDzUDEX2K7PagXh9PKVTwCahr39ixz3y3qTPYZkHojTJ2mCVckR44dAGpDyb4q7zH6wSM",
  "key3": "4XVakfSLnrZRcVBuMc8WPe2KUgJKKX6JRUE32s6Bb9dj9AgwMmPEYB9huVvvxWgBL5CtnVbm5NxHBkdroBxnUJok",
  "key4": "4FngxQNDtiqAgSJzZaSBfNnevJUvCkdCNYCCwuQBvRLrhYNmPkya91tivAoxYCAd5bf1qT5pBGFWmBBhr6wPH7t7",
  "key5": "2mgnnieubQFqPYLRnAzmDPKXctS7RkDM674hb68L7c3ounHqxS8NtH38SUiHd9NwjNsPrWr7XSG9CYmpXodwqSiM",
  "key6": "4sFStRu6Md177UnbtKxPEgi9XaGhUhGQhoFLbp2Nk4Raan9Roi6ZRmvbqq5oVd1w3MhMUBkoaWrKmeD4vjCbUMG4",
  "key7": "43A9W8wPNg6wVzgAYH9Wx8sNcBPkwWyL3TTPV5djCpfk9DU3sTZofRzzFcY62q8LGC8a8MF9KpfFRkSKhAhefpDH",
  "key8": "2dSqopbpWs8qdxwvyDSg13Syvr9rjihWwiaUk71zd9r9NZxEfxemJXpvfdYxY7gws3U3fSMTbBb7yt9gcrC2ajr1",
  "key9": "5yDvCqv2nXFukfBbqo65jafRg8QywuY4fg4mfihZpbTQb75x4Xo1cVmBigg6gdtoJyLd73r5hPMabhiiV1GXWGpo",
  "key10": "2FNoHoBGBY52NHZRbBKyFD5QKxt1VhMZcfYjnu3Pk9XLW2BAVWdYwnBF5jMNcpVqAhAqLHmXeHtFm2fY9nqW7szK",
  "key11": "2hz1mjuJ6CXV9PD3s7NfRTgtnqgmbsfbZXsNeRcfjbi4St3m9cPTgQMTNnXMiwMppokszL9B3zc7BXNY58ZMhLi4",
  "key12": "yhjZUBmpdE4ES4o1XE4NAHDTs47CHJpJYgWomrJDcgyJVEA2iyUV3ECpkfEDCXbfP58NTpx97y1EmhBu8NoXBsR",
  "key13": "5q7RKtSM5YZKpgrUiuTStNbzMuYawWgfHntj5pYf5uj4cEu9aU5oHrn56j1xqaKoqsYBCDPHNj8iDE5DBcPgWadW",
  "key14": "5wNVShBQjZiSi84AaCYQs9HExmZdSj8o4gzdAMU5Dt2qAuSvsgtt324XBnBFGGZouhDQ1YdnTFKgU5Jpn1vcgCR6",
  "key15": "3i61mn9kifhpozY1gk3S4cdUhv2JR1zEdHd2HP4tg5FEMqV329gYU3nyQ51GbxEFGmsJLVDXWHpqGr5C2PBunQrY",
  "key16": "K7s2MtZ1VGfzamhq3Z11KwWfKkinJ8hLhog4E8p7HraCLUP4PnVXd4gGYHn5Pc3KyDi2x8CRjTDQBTfMTh1YJ14",
  "key17": "4gmjZZpbR3yTtnJsDMZgHRsaRjibutDSQqCGoRroUCpDcbJvEqMknj1Lyk4YqRpVdWUgoM9s1B4EfPo32AJ3iiCn",
  "key18": "3t2yTq1MopHBP31ZXpvHt4K1M8Xhda2Uej4NF3Thaci7XyPBxPxE56mGwrVkerBmtYT4mzKANd25Tbwk3CiEWbd2",
  "key19": "57AeMFHpq2PpDWrtzechzAmBBjUEJn8QARpn3BdpRAK76i5VgTreTKZA4Vozv5rz9iS7z1ghrKV19LyXt9Hq6xgc",
  "key20": "5hKUNK8K9hKusV1oZxcwzZxbjLDPV9q7Uv7dmRB9Guh6QnDSwqCSNiK8nmVZ3kUEAfQNKzi5d9z3h8r2bfUi6vUT",
  "key21": "67QPHb9V5v997uqkejMg1fi9zbbSeoKLJskWkdLQq5s8fGbJoq4Cr7VerriUETCrjRQPk9fwLcc9R9BzWGPYdKUB",
  "key22": "62LEhGZszCaBK27MvjFHFzSv2xMgRerj1RASxEko173DxmLSLqygZiBwVS4TJGQEkQyJrGpsFVjPHKPoFXiWKPJE",
  "key23": "5NdiJV1rVaE1m4u6BHK8vxSv5c2SFp9UPTx16B5hXEzT9854TycU34ZTL5awowTPD7TiULdDpEBChgxc36Yeu3Rw",
  "key24": "XNuZKdGdixprPNKWfHheqd1HDETjLbv6LrwNau4x5LJjcxhakBDDswb7fg82ifqSbQBpZ2wAPyfm6QDg56CPUAz",
  "key25": "3nEbb9eEPSAyUuCKzMeKU4BzSnkXHCMnq4zrncH2qBJrHwymxpc8spSBummMnj8YVrYiHb8qfRihdreU2mu1Jb6Q",
  "key26": "4cgsXM3nVDhiqpoLp5GWCpdJDzLosVXwjLd8X74KEo5Rr4prmULiVUqCNqDpW4myrsdHhdvNdaPbpXyyh9U9FxTB",
  "key27": "4bigmyhxDfSnmzbytraWdFHSkopwj6JRkUDazj8opieg2huhxmuDL2bxKyYfJTrrowKYeEzNHzA7c8sHcoZvzk8",
  "key28": "48Ln2Cc41SKYgyrNkebZdtyfLLZqekehUBJqCqyto6CX9XqFC1wjpAc8bNpDL1Ry56QTvcY6DqZ4vDFgQ6p6aCB9"
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
