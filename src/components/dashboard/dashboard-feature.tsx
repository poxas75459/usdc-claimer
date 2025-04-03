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
    "3GCC6NFzhpUgLNgyqT1CVXWxv5Fy4pyXY3esf85q5kLGtwFjWXpCRCefi7yuc6X96aW8sDqyzYbNhagn7baxwX48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmhw59qeyNqQmZaCVctjK7ioZCT3nV1xmLC9VqivNx1hiSJJrcdRGwhHNz4HZXRHUdp6fYE99zrEV7PG33GvL2X",
  "key1": "2joLc6Lwe9xEijVWykhWaasarQwQkArxLajuzywa53pAt9QQunrJG1ZJeJ1XfmspmosDNXAmosoVpLjt4mcDQfQy",
  "key2": "4hwGteD6atsYjHKSEAiQW7FJQEYxkY1PMhi6WAnXaMkBjsRTS3AZ11soTsgempA3uZ3WoeSmPiRwzJfswbpR9ypv",
  "key3": "PCo3iMAXvNTUrRgM6daA4QnCSMSVzHhdT4TMVzbMwMfx7kqRdJBbijFSEAuM2M7YqHSfMF777yfnd3Ww8fH9xL1",
  "key4": "3sHPHLS9FTnutt4hP4r5Ps88NXxENghJTZ8Yf5sFgs7YsWREg99rj1F6mMhM6wAbViomNpDZMrcYXiq2URBHvAGz",
  "key5": "EH6Bh26DJzU7RJfsxjFCSpW7v2ZGUvFc9NwhwUaRTGrkvxdt6bPLAKHArMKRpk7XJy7QT5ZGVdjdc6p3bYemBn2",
  "key6": "pDdxyUJy1Hvp5ZBQ94HKKtYxCziG7Y8cWWSa7UbYDrNHZgDK36GZYod6XdAePjqwG7H1GtWWyUBaNmS8Q3oMgFR",
  "key7": "43z97mRpbPfyr4y2dCUtkotU1dxnCLXiBQe8sqCtC11UpQbwRmB5MLKz5exr7VNpBbsGhGVHKsmgaBk82pdgWUfY",
  "key8": "477yUUjDaiHSHWzhv9HuCeRQoW25AvvmAyHKgBwsDRu3VspfXjUuNDU52zW8U7QM9vhHEwsdKxXv6dAhNsPKP468",
  "key9": "5NtGayhR3oTQxzcWL9VJQKqrBQJKc1CMzWa78mrDhsR9CA9KMHDTtqUu3PNLSK2m9RigE5nEgEaCEfvQseBPfVDj",
  "key10": "2TvaQ8Q5v78QvHmMQApA3Ws8hgtZpTSNPRWo3xPcDtSjLqc51Hw8Amag6H1aKXk2uUKDCSpHD3ubAhWRzaA3j1SV",
  "key11": "3rhPsnD3WGH9qqMBzZ9tQyn7fqWmiqX71TiV8gcyftRUhMU1BUWzE46S5ySnRPDYvffQzpEKzNrKEpbqSehDeUjn",
  "key12": "2o3a1q5GinXCjjfGypx1SgQTUMmWsi3CFPhN9yMvoF6MNkby6cPmVfNffxqutbRJrz7Gb4wocSvdgP29a8RLvKsq",
  "key13": "3UBX6yNybyyb8JiizFkvwn3aDBzJD9mTRUg7dnSi7K8uSDSy3cdQXEwLbgzShEBPMpXyLfBGYaxdsGEiTwPYF5Y",
  "key14": "5XvWYxLkffQjNxxZJhkLzzJezUwhrQMs7ThaqYX4yh6ReJJydcLUqekmvgAac2YAxvK1hRAccCLCypPG1estE2Jf",
  "key15": "7FS8KmFZj2RPWgpmXEdGR3QrEVp8JQ9qvkF2i8GqUEuF2o7qGA4nMv3EMpbQv2JCC9RMRT3sTA6gZVkS3F3NwBe",
  "key16": "4UNT9qG83qq3WegbeUMCYpmkvzAYjHdQJNNm6mD6rfiAxLxvxYZB2Mochv73UpJhzJkB8G6BZWWisp9Z1DniJYs3",
  "key17": "54g48xVMmtJdHnU8Z87m9RBQ9xtgqoj8iHYAJsZ5sp8P1C7tji9tx9iYCyTkd4cRAUY257VJ4PNRzK7kyXYUMuTa",
  "key18": "3wYNUpCsJ2nYQpmZsMh5L5rqFy7q2avGmVYo3rYXgegtifkPqGyk18MQb1jGBB8acZDuygoJZJub3uKRTnFWTv4P",
  "key19": "3V74bFsr7cVsUkFJ1xTVYSHS2yeDxbb9zmr6xVEqFKx3M6hR6L1m4HKmXr4GJ3muusYwNfcbJhuYmyq9Q9ppWP8B",
  "key20": "2brumayrjG5g2yPLC45wn4U4E48KNNRbFz6YYARz2621Y9bJtKDnjLB2JYnw9QnGk9gbADa9rivKcckmagRWe9X5",
  "key21": "3dMDsGsXQ4rCeWRvEJXW6ydf73nVzTHJDs79qobK2mzYZZPP4msF5Yr4AtuZHged41XuupaEjZyHXWBzHuQ2gsLB",
  "key22": "57A3i5tAQZQHrKJHPQM68HDanopKmJgxL22g4MJq1fmShwpHDpeTspvXG4VbwT7bUZVdTrzyHN8ghMeucrADs469",
  "key23": "DM5NcwD4s76tDgebHLQj7ZEeR7nxj5UrRLLNYDTXBaCVn2BitaBPsExabv7HmT18b67T31VhFXnRSahLWN3dd2j",
  "key24": "3HA6iuvkRbv7gXRyXvV6PmKuxryNkfuWdZUCFvWMHdZZ5A4NZ49uxiBm66bLJq2eeDPWQsqCLGrZxYx19DuNcCHT",
  "key25": "24GLAgznN2wGoVMHWtwAJZKZLFNHe7wdyzKPuoNWxq3TcqfzJwvruQEUgGA85Wa7UxiN1gGzHYtz5iz9E4LY62Hv",
  "key26": "4WyBdszHJP5zjiX6WcB9NnAcsBu9AcUu67atQ8m3xA62UYiy8ZiT5f2QCZ8gGMyPpiKFxKz9RSfJVVakgE4Edd2N",
  "key27": "2YjytPxps9f5oU3owVRjSQMnaSFJ1raRGYFQ8BoTXs936HzH5Q8q78ZmAe5gjEZ8XzuUaBMoD7v9GXdufRAW6LfD",
  "key28": "35qtanusQ3GYG3DLak3LJypekbzoGkMwZSmMXeL3xrBs5B2uNq5txn6gUtcqq9crpVTXpcLKwWRmoZcp4r5aNhk2",
  "key29": "4GfxEwHYGePFsF6KTAdmrkM4VBrJejFmTnoDEtVNUcXeZS47t7qVGwyKTgCL4hrNLE2eMvEThAXJjWfUws4sWzQc",
  "key30": "9nrsjxRNKqigRuMnFF5JQvG98WrPbekjWukXnGsXKFR5drsVSyCTuBqckt83dDynqKJv2Hx39W94y33w1ED2qsp",
  "key31": "3MDk9Bq65vMTqcH5kAHMP4rBuVGi1yNpaX592o7RFHumfZEJyy4VaGv2yYVexi7rarnfQRWopekzSP25jsZvN3Dy",
  "key32": "5M4fszGfsqS7AmRYqWm5sLHehYw2giq4mVYZkNFBnLpF5EwSuYHg6Ha3egPmHb7hkvFxonhcFrBpb7EUmPxeTGb8",
  "key33": "bLsSrWTyxR3Ns28HiJjfgcfftqffZ87aXitjDa97hGFHTn6xk6ERUqsxVYCqZfg9r27SEJZAVzCP5vJXAWiGhEx",
  "key34": "2WswTnoFZhrxkN9CzWBLf1q2ZtgyNSURgT9fggZ4PwueyqWufZ3Q9R66oALUQZe4cBC4X4Jn7JoaB17nMwudLa5r"
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
