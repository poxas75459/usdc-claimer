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
    "zjrG8sWecuZvfzzJDAB9FV4B3s4xj8mrmYmksrRXAfSco1r9EV4p63gznNtTcJJdH6mXVzHDFnTkaH3Lxvuh2e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwL5KcDmWbC1ZJPWq66kqZ7Kt6bXfNzwC5zCxforQNvXYtNukxfeGmG1KeHxPqHHbMmEAdECfcMSMVnyBQEHzJ1",
  "key1": "4BWU7GpFsA9Rg4dFHkcyPKgLG4wqKyGFfZU6VFfG2vcp1QfzewA36iwzLo7X1pAk5pqfrHVTYKxALzd2ZhrgURBb",
  "key2": "5C34ybmLy6vikjwz56Ag66WP5ytuXtowhp3V1vqXkdsT9ttnfhRnMqQJoakxiMYWqkhwbYzH7FKKfLiFnwXMxNW2",
  "key3": "4XgVuQ7TT6zYE65wm6tk2NA3JxLMLjfXciD6j7CzsfVbYaY3YDGY7NkU55dDUbeK3d4WpP1eaxVr7cBnjK4jKJPP",
  "key4": "3zBTHV4XLkL7FVp5ZRKZb7sUXzadeqbp7TgE7VTz8dBWN7snEnHhRUaMo8NQ4FUu3JtYtB7W7aPSRQyed1yaDxMR",
  "key5": "FBK4PnipkuPMaL1Wh4akHjp2NCEsBYUraUTQGA3PQga3KLqScBwfycxvUvUqxBCzFuoii6mCsSrN9z1vgETtMri",
  "key6": "5o3fiuVUf1etgNjp57SXY1xrrMyQ4dGJX9126bKLdD3Rw4Tc4BCzg5G6fQiw3VgJhitCJjTGDiFbxDZs3nwA95Zw",
  "key7": "5PWeXH1qGBWyqVJM1HqeRNF8x1PgEiW4LEb5eaY1XQdxuqWJUcL4Zvz5oq7PAr3HpaaNa8sdGzmVDe1TcahxWohZ",
  "key8": "2m1jqKrNLpzsLZyUiC3pciGxzVmFZPJwxfDcvci9wrARc9Rvzo6PYVW4etcDxMda1hXgLYPAgaT2vP3pCehx7uxv",
  "key9": "5q39AnkSNkBxCY7J1PtShay9KFUpnmJhwrKMwehcgwxxDg2TfhZozMTPryAERbEhAWqJhfvc7D8HNL4iXm6XSTNZ",
  "key10": "RTLWhp5Xs6w6YuPGb8WmnrrvJWArF3F4JLf7eppab8ra4k98vkjSkYaGkW9xJG34tus6kwxfve1vdQHe6eYwsGF",
  "key11": "2eV1UCSdLZEtbe8bFysmv3f89Y5vB8z36gJJh9e2yfgJVkG6ViyCsesUABmvX5Y7XmNrMkxLWaS7LKdE6y2HYETS",
  "key12": "65UmxyYUDDrGMWNuNSw3iyoBNgP2JQU7ykaUTZBTV4KdkdHVxxmkh5ubvWPAvTRtRdWQ43ysBdnShE12f8eGEYir",
  "key13": "5FZhwxh9cATFK4ebvhARsx4s119krPJG57b8f3QUKH352C5KbFJBZmxPyRVQVUkAdTCbGQgtW6mFXsTZKJTUGG5v",
  "key14": "4CNLvAfpiv36yq6oVpP27SWMh5X7pfUbmyDU4MxD6AMYYuTnmd4o6vaHbscu7Uzbf8PvCbL7rgMqxvJ1CxR4xtPx",
  "key15": "5AJsdHe61CYFWWKbiaPngnTDpyMwudp4kqGteMQpAXTMPxt9mvvP9dhsK5spoRbxDtZMidTooBC4hyicQdGbDvnn",
  "key16": "4w6cbjHGsUkKWVXoUzcah83uzuNtwd3iqKT68QtRNt4npDiT9PMcgUWVSDvbucrqssCoKxnVWmM4uMDhoqwVdkG3",
  "key17": "tE3aZ1pmHqTLT5ijKSkFRfhLEJCDxGfVrJHssx4xgTDhTTgtTxW3shd2JJzN2H4x7XV8QWLrJ6DLq3mVS92FVAN",
  "key18": "5EMRRoDDrfnjkom3YgfBu2i7ctkfWrujUZYiRTgCYLxrSKx5bkXVLFhEqeWW2FBBBre12RezFUNGiS7T8PPQbkek",
  "key19": "3wYnzCQx7A6RunKZu5BUswRW5vffiCT6eEVLKLjg7C6MiGV1XC5E9SUbX331yLLJi1Bme1837o2FqDSEirkRH7Z6",
  "key20": "52oRP3mo9rRowRsFmS69Kf4uJrWRYdZxpcCw9N2AzzqxyNLZ7gytJQaJ9zaJxXziqmyc4qZ29L6wU4usuLhyZGaE",
  "key21": "8T5FbVM3FE6Lm8dSvqRMPGgH6yA2mKKz6vEichZuteS7jpf6Wbq91xV1f59nv2pVQybSMN4tLEH5P5ep6Pi74yW",
  "key22": "3u1NTRudv7PXLF6yVUQhWTnF4hKE7AGUWSsTrr7Mti9aBKDfkDdCRBvkSqJ6sSPRpQZnVEJyFccxvifQB4z6EuLJ",
  "key23": "4kahJXcUByJz9CKVMyUCq6tjEcXhKPmcD3AuEKno3UYcTgy4hVJSzCaXpzaNiAzYZDSoZyViDdYLLGzkf7yqNyPe",
  "key24": "2yCWpoHC7F7aph7q6KfwsRs52rZK4Ypkcqwi4sbtp5wy2sxKUs1gd1LxXkAzE5PowbjhNKCWXHRAbSMiMr4MJrwv",
  "key25": "2UnUybwQ7cbKarTpKEN1M3ERZ8Hbmfd7coB9eXCGo317EcBtXcm8LbfwcryFkbmYDfPeGMnDrY1nd6FAqEfhUQQv",
  "key26": "s1uWwX5sZSrstUdaUq8qtZvjyzvYRT77v8HZMxBTSi4cLsWQrwQYjZhopzwGWuDzb87qR96jWT3RKVvdgsdZ3FL",
  "key27": "2EDMbD9aTgfyqzDkuFT1kkjAQwDjNhQoKj6dkU1Mve8Sk1rC9NyGmJ8jmGRXgUwAdXmqHvHTQoURAwtmgkzFjBHU",
  "key28": "37VPseEDNabkMBiYW3ZDasEP7bHvzwZmA1FExdtSbRuZzbNbmB9PNc96Cv7G8kTorg9mjLgGsMfeFJTJ28MFwn9b",
  "key29": "5FKqiwkKMg1JC18E7QKYQXmxk1zBrM8o5fD37pr42yWkeLgMY7SdMR6ALoXZq5LJUZtYMDiP5m6oUE3jndHcASXG",
  "key30": "RQsdiufmYUC4AVhsCPfacL1NvGLLgG4gGHGdgDh7765yoCXqUi7btiJ4AVJFuheGg52sBprnF1c7hN41TCnhLCH",
  "key31": "5Des3FC3PkTZe1cCacu4CrcAUVWgHfcJY1udTJhrPbxCq5GHdmjvbfhagS6pSWJHfA4UPQqZizW1w45QYuoSEfXw",
  "key32": "4wyAKzmTQXYuuA9w44SxamuN3AnXmHfh5YP49qi9bfG3Hbkh8MsTRbgC35uNrzd6fB9wDXdD4wXX4ZZbUWihUbbe",
  "key33": "3mZWK19Wv2ik7YwwK6bPBTarcMmLZdmqa5Jcxyy4DK6ZMig5uEA6ThhrzrU3Aw9vCEgnC2P6BGD4qSFxUcejSgBT",
  "key34": "3dUzw7nQHg21CKHym4EAJdSvgDH7o3BEdCsAc1zrMr1q9M5hVN1TWRyXK1sAv5ByfBZFgd6RSanvoAFPfhk99Bq5",
  "key35": "4qwgghn7dNEAqD4H16yqhUwB1Do9izRqvNiZF3DbPMYTQYbz4pC9FQhoYVbkY97yyk53Ef5h7cegLYYQFV5Y9NLM",
  "key36": "3ALcrYTtDwHJrvwDaciDPgoA8yhZPDL4eULhTzZRHEkguwsqikro4soPAwWaNYZtLp6UqhEzsWm5AqLeTcohpufL",
  "key37": "4vx7acA55dfZaENqRXYGogESMv74hhA59rWYisjyYjEXLiQunniw8GEfM2ikVeRX8eNUKeDKC6NLhtGsk4teA3DK",
  "key38": "5bfVL9J44vhKiiyRWxU8LPmGhMxQjpi2rrarTJRGjYJNLkcHu2dkQqtrQixawsYVTGCdYapjfr1Lhf4JthfWdX6w",
  "key39": "4vNnVi7CHZYsHByY9Uq4rjpqnxk1oYvmJmY5Sx5ZyK8UV5LiXR1bJi5aJZ8YR9gzXrUKdNhNfXqJrAExfLcGgmwi",
  "key40": "RdTKhCt1eL6bPSi8YSeDvZMYknWa367cJyyqR4AnArbLWiTqqjxEVLDqn61BzTNvw4EdwmXZ9q9MYfC4Vy23QzW",
  "key41": "53HiQL3k1WTunAd66V6876gXzJng6jZKoB8YJHVnEcU1b79mqfYRYNkxuWgNJEexvqmA2BtoKwNUiq88dC6JD6hx",
  "key42": "4hLCdteLigX38ThdVzm8ge5dE5MkGgCvCpwAqPsrBNz5T1gcKr28mDGSovywJ1YuGnh9XQZRsMXvDQCEFX8zoNaz",
  "key43": "33PFdSLktEws2ts8uKY49M6LiPxJuj8939exBtgb8emELXF2HK5Mm8VAgNoc1euujvcQdMod3ZJt2D3TBKgeu8ro",
  "key44": "4Vfei5xKeW6CsXxToB37W5KbCzqNF1FYifhNUMikM5ELwnGfZRPoGRuTL3bC7gBrfGzmqcNDrfEw91PvuysGSMu7",
  "key45": "awMoNGri8WCSjHJoUHdbaY2cuAt8S4rNTMLzWCXS9C4bf6rUepqwuPphffXLcPAJxPGML7wQJxtSXzfQcduNikA",
  "key46": "5TXBBkayzF9qDhnxjTv7i1wi2wLE4tVkf9edcH44HHWHrnyPGayU6ipe2sLau8cjNJU6bEMZRWbKvwQnjM2TF4dA",
  "key47": "26F8koH9ks7J2ov5FQmpXPqBgZoQtqXcN9irHdGC2rxr8VcHeJ6BUE2JcWRcpkoPDvsap5V5PRRAXqT1Mh5BzcP1",
  "key48": "2m7pLQ5MkeW6rvnKu1STMCzavnsZ4rXwjbS77UCiWPmfbu9N2xyv7H7vrBgoAKkY5kqKc1YT6wCyBsHrFwhEaXtm",
  "key49": "Bm8PqVtPh8d3Bpnjn9HM4Fk8ammEMQbcwK4onpnr7nKLZk5q3VUxBQhHAxxHSwZ4jVqKhmLyCodnNeEmzCeUpWa"
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
