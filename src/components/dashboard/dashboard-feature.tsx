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
    "4DKDb6RLdEAMy2dE1YTTcAABLKWDeSTBgoBXhE5YReMk6kyeZTaMwwiNDG3KcmFiBq7hgtfojewvzX1KB1F96Mv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUAia2ea3RaCsDwBboTu7ftpARyMyEn49ZciJCdQ8SMScUXUaFeNkJ1YccJjyEZzd9UXQEexcNVkRKANz871Vs7",
  "key1": "2ZJKBFTjnF4Ef66snehJnAM8VekCkNMUhj9GpqekLBM5W2WNMZEwS1A2JwY2mF3aS4MrJ3HJWbYBYWLF56rt43v8",
  "key2": "2AxSstqaVfxEScwnrBFLuwjMBuMit8UXinsXTvEMu581VnKxRcdVCa6wMeF5sizjCyQecDfdnSBnbQUAP4MdWY9L",
  "key3": "5FE6w1wyjKi5fChQBWg65Ly8fmvq3ZPkLj5NuWtfuSrLepDUWyk5KMTUDsxYPez9Xiv9QtcqbpbDkpwz9manXKmn",
  "key4": "4Qx7UdzMfqufM5oxvfTE2YWXCCnmxMKVLqy913aDQBvoQkbcWSPTpoa7r8SsXHZZz6T1NG9gqdakEUEdS4a2hrnp",
  "key5": "2tpWMPDYfNeuk3XM8nsroz6sAxQArDaWwnAkQ79UEqGH4B1yLrAuZZ2KJTbbaLo76WhE4ssjN5oQ1F4qt6EATNri",
  "key6": "4hMX7YiQHPYH6AFzp2BpDDHA53Vv1UFs3uUWJ566SDywgM6qn393Kft5WZCpopk5Eg2wG2hUqMkjB9RpVsXDihPQ",
  "key7": "33qV2aQ2qKoPSrjV8cpsDo6jCKEhoYseRJqsYggVPPY7N9n1byjCjz8VArqn7RdTnYpzAuueAuhCqh1StfqyoP66",
  "key8": "2nbdkUAbVDHu1nhgmHAHWQzrevYjXhXrBX8t7d49WpxXfEqTcukfagq9yoPq7Hn9mrh2iy1fAoY8KV7sxsyKy1eX",
  "key9": "3ksvtuywvMpA7GAPppKkty1XxDqZmxXZQdVQdbfuymUgh9vRWJcHncfGS8TfGH8aQTKeZHTUVR86mNajVCsk8u49",
  "key10": "2q2qik8CV4iH5yY2vAfApbZVXe4Es1kJwqEFCPbgK8pNZmhxVzUYetJ1bsFK7U9D5epg8QBbFNPmZNsg5V6f21tw",
  "key11": "5ePGZxBXzcSMJYqCquUPuoyvkqfffVGhvpNQE4iPGCHNeLdLUy2BVpUim4vtJ8A9yWAmqBtThsRF9o5SY4kBAaND",
  "key12": "4pdU9UZATPWWGyciGhjYwYW2cu3gFv5npmYGN7FgRH6BPrfKEstU1bci4J3hwPxDkPMn71nfcBq3pUBjUSRKzDMC",
  "key13": "66bJSjw8MV64bvomni9y3cdJSshWBgc7EeopBoQ8ai2798f8fwb7gnGicrDbLKiS7sh2v3GxTqMaMAx8rc1MrCR5",
  "key14": "5YKhfunrmcoCkPYuanhYMmCVMw5VwjcbevsQmT851BVvgkvg28x2bgi7W7yfXrfAFDuYDDL9Tf1Ez55gdWxVcjxN",
  "key15": "2NQGPkAQ2KDJuDqWSV1UbRKesA7UVjQ8eNFfxE7cEKKMGUWtNE4ZXzxA1U4scvBbbLcDtfwCJt8xmdTGRArJ9kfQ",
  "key16": "M4dEvsQNShHEWNbP4AY1pW9Qkx5Zxbrwp9xs6swp3bjGdqKijf6RTN5tWUJGxCSWcPwxMy9ekYbNNdU3zHW2B9G",
  "key17": "72M99W8PTP2uPrJGCUJqjbyZWYnPpuMUWhU7PvQE4RUTNoqhAoZc4s3khRdKi439wz1QbHsJ5NqyXqfEmBZG9Wy",
  "key18": "xvzVhbLUEuwMpicAU16WAAobXd6PWjVgd5cZ6juooNrTsAkM4gwwJLCAnydkKbep6cG7mM9ZAPQX9d9cbFnNZR7",
  "key19": "3W6qqr9a1E4HMJ6zfQh7n5kiS7YQbN9VXpqFc7PsrZ2nNo8FnW4CpeWV3HGQ42uXZx2KerE2SDFeLaqzH1y4YCoU",
  "key20": "bCzYVct5gtCc7jYrzaDTNNK9moNNGMJ1eeqN8epaavvtY8qvAcUvK98Nc7X8DPLFpraLSsZZtVp1e7kPi3L8hKj",
  "key21": "2bJwQkUsVCKTnjZn8d2fHcgpNjoGGbk71MPjNszbyHgs8SdZ7St6RUHcahL2TXixQrJDWXCBB47gMgeo5p2y6HNg",
  "key22": "5m8AXJPWaLLzmWsK6AbC1YKC9oTEqCy89RN4oS5LsbwBirzM3BwdmmAVQwGLKCx5SpGtv4HerNrb5STpKKjAe1Zo",
  "key23": "2riQd52h9r3kDnAg1AwZ1yDc56Ep1GxfB9XAxzh8zybdvDdZeFZq47Dgx8xM3UoexfWvyXu78R4Y42M9fEnErpUW",
  "key24": "3zrbk757ci9w5ZJiR78Besb5o4Bz4tfoi7poRqPxVaNvGJas2cgLWzLj19hVnB1BKBVj6gttc5g99tA5ER1oDWXq",
  "key25": "ajrxpPr2ptUouhZeq22gHRA5qwM8qWR9jvgKcMKFvAfk39G7TCSZ6mwAT8yYZhszWbGHzgJ5Q2udJAU2ecExctF",
  "key26": "z1LTBSVYkg8QwfwvDnbotY8VZVonTQHZsEWAE5S74DjSUyJmRXKbQzywhwHkbB1APjZRLf8M1ZnDUccvmhYRLDY",
  "key27": "5QdEbNiX4o8vrweX7dLouyKEPj1KfuZ8gXJr9S4KKdEw7vs7bE9c3je6bQkUG7ez4APd83ywsJBtq3DJkWsZLvBx",
  "key28": "Y9f4GR9sJVxKgRSYtk3WbY5zyBiThYZ76jmVUrZHfYQ4bWkbyE4kPaC8UMzNZECqvnZyDTQDPHTjyrPLRJsRunU",
  "key29": "5brVBvZP4gEtSTnH5uow1DRKiXkTU9woFeDNPdA33ECKUFyGyE2vPy3yXKStXdWN2AuBYs5f4AVfFU4Ny5LY5bxn",
  "key30": "5s5NHxmKf7P36kP3fw9jzfcs3f4kXGMTUQZyHGgwznrF52A62dZPw1SLJNnPtZhs1cUumJfyV6fR6Zo7uSqZMPTk",
  "key31": "Tgxh5RbGqCfmqvq4wvf8mNKYpJWkSK3eTkRxfvPCcBaVoAEFLAU78La9eGbSkkW4S2Msw3DoimEmVNBWY8Dw3tu",
  "key32": "3Cr5NjNgUSt7Xqfmpse3LPyUXgWLaTo3QGFYbZQPYJ7g4S6JxTU5UbWj3yDfni94Qia5pSEWMKG5VX6xfAqk9XbC",
  "key33": "4aXEfWxwPGbtEo1hXMLCoZXgzuZAfJYCWaiTFGSt8gx4Rtx7C6hURQtRkoy6ka63F9q7TdThrBhd2xnfiXPSzFtf",
  "key34": "4PvkQa29htBv1r9eUzcbyPrWdayfYi6Pv8NNKXqwGfk5y9mwnh1r3kwv1ZXzd9Vi4VeAkXnCGbYysdhswn9CwsSH",
  "key35": "c3VWjDRnSHHUC4iZQjRVFe1mFSh6oMTnKTjrTV9MaVy2zc75GDYVaEN3jCqaW7LkJ286tvQJqLTWmJhVPnNPoFq",
  "key36": "2Jo8L5A1VkCocHM6BmgE1JY4qy4LTcuTwMxfnMuKUev9NyRpCQc1CUcE17qTUJ7J97cY7hPc5nou4qHBA9ysnDgK",
  "key37": "4TLoqRBKZ8ZPxhXWe8JAyRBVG8pwbLwQFiK9c6XvwGmaGNkMSKyer7LkJ3PNTMN2wHFFxJhZqFoiMAeV8y8QDK9Z",
  "key38": "31222Gs4ozpxvDGCBh3LdmsShE8fGhMULQnU78PLzqHwwCyf2drqoA4n7VoyPimeFsVSeJWDSDkyNCWAtokHRcQw",
  "key39": "4A1XX3EAkVwamTPuaQiBsomFkMe91KxuBGnuGDAwaDR7g1pSpLJBVisf2HGo4tdUQZ15ATNS14qMUnVrB69op7Mv",
  "key40": "5EQ5A4jokBz625mtpTgwgWpoyRy5Jr6tUxmQh91JcuYv8tRFHjpHYCAb8byqEwPDXbtJ96cztBCy5Ukujd8mQhvY"
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
