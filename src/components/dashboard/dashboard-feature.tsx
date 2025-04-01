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
    "5jRQ1HokjQZYQtwtVsQZfoRDbnSRc9ADkftkSBbAdf5bVr15JQBgo2NdjWZy8maffdEVRTV1epnJ4PzUV4DoH6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p21ubMQqmYV4qUKKCtFzntop8XYa7Lb23s1sNGrw7oAWCo1DPrU5UwLz4sJMB558s8F2U9XNbNAYjY4Yn6ZRRnV",
  "key1": "5grRVZrRK2tgbEwQ5xXum5pW99vPbkwRnRA45fDAZij8WzyNb27MVJE21VyNnDQRoKiBFsbtHSL2bQBBD5fXYt5f",
  "key2": "b55Rz4ydwrTHmMe9kk6xodMaVmikZv3GG7eqXRu4viUKo6Vo9DCNQQHbaXSpkKRkbctuuXdJQ2pL2uaw2RtWSaw",
  "key3": "5pVNoxPUPMAB5YBbAJhXYTJWp8ohECAkzJHqp6gWy5eWR1TVK6sipjmbY9UumauZijk3f9QLrgBoPUX2KsMW89bK",
  "key4": "34PnUehvkHaFqNRpZ1BAh9Da3iBTyGArYU6Vfakv4jYv4C66E69nwkL127DG7KFwu7GZsqpr1xtyEzgfnzujY6pj",
  "key5": "5kg4s1LLkVrVp56v4aCGqynCPCnSKDndP7GXy5bDpLy7QaYTrCNfCWWEk7hYUpZLtbvzfuJrn95ekems9CMydSXt",
  "key6": "59CLju69N8kgsqTwmEPyheieK14aGwG3EXtpc54iWyfQfM1CiHDY8Y6FpJ4fJ3wmH5Z1LLMFb57xXtyPxGqsBxtA",
  "key7": "Gx6Fcoe95ug25MPTzSa4p8aGrhVNXNP7e19jvcPRi87nrow33xfR3H1X3vvCZFrQYGLsWQRCMwBS6eRXoW8RMso",
  "key8": "8NtbiqwcfcLxSqpSnuvT4AGJHcDxkuE9B5mQN7Jrkqvz3ysh3vJ6tb5y5FmVDLtNHt5h1B1HtvnyV5QrLkLEaZw",
  "key9": "5wUxNHXP28tiDbf1gMQBY5zfReXcCesqUXoAew6bxUVmCuU7Le6vYb6gbU8cj3uXW6hDJN3GyySRLAWrs7soAft4",
  "key10": "2RydSfgoTEEiH7PzCKZvvLKSZwe2F8j9pP3KdEnbypviaSK5YoocA5cqBvKUguZXiqg628LHN4KnuoMEPdjKeQZK",
  "key11": "2whvhzCuKapqLUojgvmqcc4yXV5SdjERdfL4TAv2danrbwowzjqKpYhGrsfi8YdqWQkR7HU5K3pmbye5wnNxPjWo",
  "key12": "27UxbBt8prc4Pq7SfaQePiaj3fyewzK8G2YSiLpJdBP55AMwbmQPh8pX9arwYnB36UqNz5cxjHmZHdL78HdgvdVs",
  "key13": "2qoztGXETSTMnW1jmDHJH4G9X32wBKkyvmdAY7CFxtoaTV6AJSuFLVw7CdDnGXFnXqrj3TWwD9HFrb4qjhyg8Fuq",
  "key14": "5zbmEw13pMvEewzsv8UfoynbYBqyxbiDXiYxskvTmf4SMsGxNpo1xEk9Zqb4QEAf9GYyj9KXjb9iWAbF3eEAQVcK",
  "key15": "29NxgQw31X477KeGadFHp5CVE73ysQ8LLGK68vHoxLtdK85w4UdjPwUZKbByDd6psX1NMi9h7SPEQvoo7v2rdghx",
  "key16": "2B7VHmxpZ3u12w1Jtx2TotbucycyitDKwL8r4GKQoT6xoTqyq8TkcPsunNz8Xmpf1FoQfmXB9aS7C1WVajTdauvg",
  "key17": "4hn8GhGEjkXS1xbMEarbNywMb1bpANJVHURKhQnF7tYuQptiGKLkw1TW6snTttJPwpCEpXPWy4uhcunmq8kHzDUQ",
  "key18": "4Cx8cWpnPE78hfMDxsRuNRrdEckBxQbFqrsM6qX1SQ9h8Fmph8T2KRYntWW3fKEFJLDmADJTwHonScQhNiyAQaYc",
  "key19": "2MPR1TkgBqUkr9LFDc39zQqGJK6wP1QKrCYvt7Pz5ycfys7wKPuWA27jzCmPaFRuijSmZTWTHWNgZsjWdYitQb2S",
  "key20": "CQUUDRXXeBrQpxpepkFNpWM1fUf92ERu89ggquLMf6M3KCBuss16vBvt2REWYksyQLvqy2ozbiUDhgDYuxRLYmh",
  "key21": "49MdTH7TDQ4EUTkQCqACcP1sHfHDdTKJH7LUAsdkitiUfiDV1TdWH3N4AEVeMPhXoxFqn2eb4n6mwnKycHxjiCNr",
  "key22": "4M8iap8ZHxG126HzTnWvPbGuZpmYajpeU6HENdvTmL6VwnTArsHiRrmrNPmDKLJD6zh31Q7x1XyivmBygg43fbfe",
  "key23": "x6PbDynxPN85pbcckW3QTUhnYvxCcwF3JzgevoZjfmX4HZFC9MHJj4nibfp7Jo4g51Pu8tqFkgF9Cu4fy7qxnKJ",
  "key24": "3d68kKSQaHJgdVeDhn7zv6i15a7nb5o6RjwLaowSXFxB5aaQQdVZyycSu2JWU9kiisvpVb6PKdvqMJEN2w5P5N8z",
  "key25": "3Z6Z89Lyex3vLXG1K425rrfEsjnJDACRNv2UJgyCGZJjhXuQBq3BvxoKU5SuB5xmh7Y7Na3K7jJK52Dw7ehRtpCm",
  "key26": "3orJSv4uXUxotkKsVSD7xWC2sUNSkxRqbjp499JwrMZywj3LpkAggvMKWUoCHMaGE1y6R7rDqyciMnE6wk2gkX2Q",
  "key27": "2a1bN9MzLEGgaVMCvATkispu44KvzQxHqz3Rs8CammFDffFNTyspGt1V3sdNfSwKSvyJn4QZe5SAuhdVWNyy6PuF",
  "key28": "4ChFzdSma75e9R2ctqLXcpo8SnCegs9sQMeiGSURDtBi3bvkEJUXq39ZVubNcLaEqVEx3ufxTz9CLhirkRpb52CD",
  "key29": "Mgp9o9YjDmDzj7zWNevaEfEJZKK3w1GGZtSxnxParcZ4CFZ8Xhsvpt7BvRcBRTkKkjuCc41DhXBFLEKgGaadV9r",
  "key30": "3fZn3snAwpUkQh1nuTZ8zszkbpsvNigtgpUnwVT7pdodkpcqckaWr9o3MDadVvBqhviwBB151ve5vCq7b7knTZ8g",
  "key31": "mLBSgp9nG1UTPyeEWx35rF5UyDS7A5Ygkhw3BtxSkGgGSh4VcaqZxpmQc58tVAiUFavxeakD6oNKJjVHSHjACkZ",
  "key32": "3T9YdLnDTvV7MV4B3DMZHrdJimJ3MBmuHwHRYyif9dPrnU64bAq5j9rMFYAoxK9tnLfyzJZQKxNz9XQcfVMkDDZD",
  "key33": "hBVMhNGK788k1ppdUvFDeBaDnya5xTMa6xjUtQKaTxaatJttDCavNqpxu2Cs8WAPNzyL32PdyNx5a8bazbRgV6b",
  "key34": "3oUmz4EsiVPa4dtxy17ttydAWofE52CPBXAJatP4eWHZhYDjtuo9NehDPeuKuFMUZyTKbNRCKpVDqfSetuUsVaQ3",
  "key35": "2KRbYwjb3Js9iLJw9Bmxgk6kPCQSx8NybVqewEC9t55g4nEALpzViN8XMDAh5ituspr7VPvfS7Jdy1LrRM2KfnuN",
  "key36": "3JYg8FbEVPGUj9R376LZT7SPruwZBHMr4GEzcSkvY3HcJmT7o4nnaUs8dfJZimNvzgSg6c2nU4wtJ53FtFByNv8f",
  "key37": "2DmYC6SiMUePc26KTCWJYSHA3sMpfYiBZT8JL9xk8FGpuvHApK7XxAW2Rp5Fc8RHJAyj5Fm9DFwt4VA251sooVmL"
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
