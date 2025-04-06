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
    "4NirNWfmQXJkYtC3MzsvNZW9yVXnLDnvHWLreF6UDT5yRFGWjLdZruQpQxSqGKLMUDJ1a1A5HGQvkYXUdPm6M45A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDwfkxeBsYNLPRhssy8G4vzezc8sGfZMbBntojmGyjFnQiBoc8TJkhXuNx5m6GEQ4sngtGwTdHH2VyEnPrsRR2h",
  "key1": "5DWytRELdcqAVsk7CTwXMZS5bASZVDddg8HenoJvnJh5R69ptiHETC5QHSv1nZFU3RNsKcTWFXpYfMSHkeKeUESZ",
  "key2": "4tWkgw5cajkkxCSYdQe7ZdC3NY6rvjgbcpESYLXMZJ1hWJb8zMt8UWhMRWorADp4tQC2vCB4RfXUMStMo7ohBnmg",
  "key3": "Bt9aJ9EwnJwLFmaRjq1VbUkeY4AfJhSNrvhr5iDUL9yzG4nGF3Uv7ybaADQhfmgnA1uC1pqgjMX6t6F7FGwcqLX",
  "key4": "2LKWGzu4Zkz6vLRJQDBRRmBJ48H82cQxRx6cAjAnPbny1zFwwzqVFroLbwmw56PRWkPRNET4BDJy9SWGran9sSb8",
  "key5": "2umuQ5vzV7YTJZdpWW6fj7ufe8DyAWuk76vygZ6dhL3AN4tKeKWwHPqAEcAXSmS92p54pL9fKZViNAQq5pTGgcSd",
  "key6": "5uVCzCpLbShk12oJEQVUpjBW6B1XsYG7dhPeeD9GnxgQHfZus4FTLxQhzWJAE5GQLUa3BHCSCcALBdg4vTEHrmr6",
  "key7": "31axQvtzrVkpUBNtzJee6PG4ke5tYWsjRLFp9rEuC6LpediGLrNz9aDDLEx45nAw6Tkck3FYrzoexBZTNPJunKSf",
  "key8": "3hVcL7VquS4gGeZktGVjFJjTrqmUf1kAU5XuVBsYT1hchiXeNAEkvcMLtH4j8TsHowZUTFbKTw6bQcMnRkk1admK",
  "key9": "juQwDtjdTdKJ48nkPuDhB3Kst9gftfhtWAdqqtt93k3Ynrx6kKx6DGvMdorN2nzu9VJkc5pgfzES66pbKhQ3M7c",
  "key10": "2nvodBCM5CXRaMowEQojDwyCx7mRyzt5anrfz6Dpk3r61JyW7mz4rqcg7uz55E1SzdUQ5Lk881vxG3uYvxTuke8N",
  "key11": "5u5EwkuuKhkuYWo3RsChnZ7kuvPX3z2ruR2VHRsDmVV5TWB5WYv3kwUDc7sXKKecPAu7PrcW9Ugkz3sJEbCcEh8B",
  "key12": "2vmP341Exe9tCBz9xWb3pZUcafK91ugaDD6H36szwvW34UUDLUD4wAZ3QZzGnnPdVTYi4JyESkuai4F5jfbtCc7F",
  "key13": "4dnWBVEgbX1yS8V1eCeMVigtoycmDiTLkwXVkACLjfRNSThfTD1mTrJ5RnNquLWACCAFHHBcVCd7shKa9h8FVMeT",
  "key14": "Tn3G3ta11BC55x5XwGBjoejGHzRtGT34uqEAGsByHwiEfJGdkh8Fb317nRAgnex8vUDdJqVz3xwBWWyxQwVW6Ko",
  "key15": "5XpmoDMvExiC4VS83RsTu8B85EHUHktGak5QrhWHzjKbskxMJrfAJsyrsB4QtRxqcWyMLoFkDfca3mDkCbhmtujV",
  "key16": "4gsM63GyLwp9H2M51b26nW3gtEi3DjgdVYyFDEL2Vqg14WsKwggYNdwSz33DSvyHebbSmGQkF1zDbS2bemNH3cya",
  "key17": "5MzPXZprDKZjXgHtmwqPfhcpREQwPeZtVZfkpL6zZvFkNPcpE64px2jwG4Lcj7L6YUsAED43VqH51q9PgxrtJzs5",
  "key18": "3ZisHt2cGQMU4GJbvBT1U9DQr5WYpBPXVMiXYxU8o1SnvBuPTbawcdNFRUC3wjLGbUVAEAYbrfqdrvczZBQ4iScY",
  "key19": "313pr7CkLFcBvgfgaLknVwPLjrsxzvaqWBgaseH7uSxYWfP1QVcY98nG6eexUe4nkuo8AUa3T8xYH9davzfUuubd",
  "key20": "4WaiJrfbSQydMx5BLK8MKJFXtW2pjz39N76QYSDB8G6ga7EQyUAgxtN7Fw359p3JqBxWNwsFGxtSsTwTa81JDQJp",
  "key21": "2S4VC7BpzQMf7Cvt4MUh5mhvaeua4rtda6dpMFTPn7TYPVQMY2yjdMEhkMFr1Z5ZnwnjTeWSAGFEzx4snnC57XEa",
  "key22": "34GsbttBCvokrbmfSwFx1eVeA4saTMPwAZ55FVNd18RcHWPkBoSzxtYqfR3qSdW46aayDCLCSkxXHZdCP88vE92C",
  "key23": "5GFtCJ9cZAo7XiABqXdA1eFm8ZBDwZgqoKJMZcMpJhSeZmUUJf6vDrjjH837QX1y8jFgLL6su77BSgaAF2PheYPD",
  "key24": "5uNAaqPbyQE9R9ZQdyoX7ih4YatGjvHH5Wn6ouj4pigiBPWekC7h3QveZnWcttam5e8TXJJPo8fmYuC6mGFJHxhQ",
  "key25": "64hJoN4ncQ4rngUQZC8Shcymuxqqunn2bS5SFzM5n3i59M8zHUCKbJwRARg3qNiS4EW1hRBYrRPZb78g9ipHvdaQ",
  "key26": "3AfhxfuDkiJaFuahgXZauM94yourNZ8uRt7nKhqLmGcRzCoJEZa3PQusJJidhmnsEEVSAVn6Vd9LvqQUqNAq3Mve",
  "key27": "3iK4xdZYvdr7sotnBVzW9CDoFByrU239ZvDaiUGsxKLTo1C5goYw2Y9YCcwzjC8ZnsJyYJhhtgvrveh5tW5LPW41",
  "key28": "3BxvW96eqdFiABwPqD8PHKcgH3FZuC5YpxFCKDaYKS5YFrTjnGL4sp6NwMKsVcCEgskB4a7fDXqT5GikneH9zeNd",
  "key29": "5BUAam5LcLpn88BzefCuJ5maA9A9gzie5HsgghtJp7LzAomffVy6Vr3pzpQdJzz7zPj2CQcnMEb6Ad3AsiC7YajN",
  "key30": "4P2J1GXzNP6fEzWhYUpsoK9vaH7MUdaU4kEWTRghBZ7tihKj23KWV8BHxcwkE3ACUHtGSMZ741zrtQjQVYvDZYTZ",
  "key31": "3mpRyfayCVWcBbgMrUFRBkgxEduiUMCpWpJ4kPG4z9xEfyoJfCtjhAVyoVDmycrBoFjUercSFZdwgyL3A8GZQ1S3",
  "key32": "uV9gmB2UTpw9U7yUy4xHg6oy9ea9aoDExNxjRVbuv1AGfBfT9s6XDGCoc3vdeiYWDXp5XKAq4LBwzhMMys2BUy1",
  "key33": "3kKndZ2Jz7JW1eefgF7yzRnPnun7EVhV8YkFMidbduNqsYrvL47Q3rpQSyJ1wjrLPmBXqNm3MVPUqKR9KLZL97vb",
  "key34": "3tWnSkd9jFX5FbBZJvjbiCFGS4hjiB14vDpZDVgc8WgRzLqS51TuTuxjXyRXS44iLd9KMrEgea6EzJrPpVQSVnA3",
  "key35": "4coeLWmj88DckPBKfdeVcgxaPpStMJN4sKYq7wUcqrXnPDqy9G9AXZP2LB8C41PNRK1r9mwFcHDesityZwXgMjf7",
  "key36": "2n9MSAmewpsgJndNhcxEdLmGujap9bvsxy6py62Hx3jnFP4zL74fLnBizFheynJxtuFHdGDBNQ2UvjC5hhM3MXho",
  "key37": "4LMgNiCTZwawhHk24eCXVPC1AUHMWoHC5gVC56LhKoTH5gtkRa2fTszS6DPMpqvkQqSRng6THz6FBiPHMLrASFW2",
  "key38": "gL5VF243W4Adv8nwZsmupUAf6GJ1ZHyHUWkvzqAqucwaHt5PHG9gYHer6YPY4cu2U5UD1W2PAkmJjNFQ2qw1RKp",
  "key39": "2GWh7p789JhH4noEVsjQ1PGxkduQzyamjR1Evcc9wLzkvjYB7YWSK6oqYdHAxviEsXwPryEYMin7HyztR8TThTgc",
  "key40": "2XVP1G4hZoqEbJ2Q3yrjqw7vSoqwKJBEHts6H6rnjfitUnmpBNZGhZvuuCG7amrAD8QQmusGawbZvzFFxMWTmVKm",
  "key41": "4YQn5P237W22EPSGoZyiL6NcmFzPAouEnMZgPR3BBVgZvNKHxwt1uB1xtyuoQhZLYvSrJV1QtwegrgEEVjVcu95L",
  "key42": "28wAYHE4KHmDGiWDgnFsFuiwMB4euJ5MfMMZKrjYr7hxQaa73FWP2AjSCMPmpePXQPfCWGhC71CbEDofhRbnsFCz",
  "key43": "4teQzMYYBX2kfegbe6z5jxUiZcLqUcHpyHrAM9orzgE7bXR72MYKCi2jbBMQJH9QZhNYxH7ZDpTE6Rr9mMfzWT4v",
  "key44": "5SAgtSDtVEr2ymo4ZaPabz31iVpRtTZNP8noohGHGt5SyhzY3dQJ9BqsWbuKUSvpvNBQb8nTvGSGPuCNLrtrbi5r",
  "key45": "2Pa7tnh4sX3zZ6zw38EVjvSfBGWVWHHDgpkpzD2K3NZc725bs2g6zsXyWqw4ZbN36gyUXGxvRywFacreaWYcTfQD",
  "key46": "4DrG1QLaDq56KmwBwveDXwbDkEKhcw2xFqcTRzBsy8uPwcMhcfi6TXijaAB5dv62Gm22mjjM45DrjrAiEQdehWsE"
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
