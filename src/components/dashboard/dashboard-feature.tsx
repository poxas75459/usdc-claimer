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
    "5zGj3W7pgNQ2s9x6Xh2udVF5gvg18jwLMdhmYiPnixqs4A2ku4VG2aP2RnMJQBNKC4kqPiVs3QFisjJ83wUimPh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zrZX4LL9qockU6bgxcw71wpJ6go1vE33cBGBmS4SnFFST1r13C9YdyHb49fS9kHkS7xCbBzpCFe2QSidtjtqnhb",
  "key1": "vVDS2PAtZ8Cqv1BfgLsnwwGnMcvUyRxrvtS3FkjaW41duAN4mKFJEoTXaBimTotYjy352mK1a5LXzNBJnb4aLXB",
  "key2": "3Xqwr1AoL2Jpu1z5XLxT7iVvXk2RETHenkZuGSUcDgrFB4EGfFJGhe7SYN6TZamYUpVFrDaBeyKMEKMdomCyMYRW",
  "key3": "2MiupVErHmVBVbJQimQ724hWjQv8x7YeJQK4yF79mdaojmoGGHMUR7XQ1aQJwp6zpsTHiH5o1XpW5czGKuY87KCP",
  "key4": "orRTwoHVAi7AGMvQikKSBXvxCujHgYBBxDwBV733NxFJ858UrAmyvxXVuxtdLQNUdqUHa9LdMghk6h8g5N1N47R",
  "key5": "26wCjrEVfNCTDr2sGu68QysNiurr5fRwcYZCjXsV7VPz5Av7DS2tJ5y4jLsmjMggLYVtZy9uHQ8AXF88tH7hXmdM",
  "key6": "5NjXyDXJ6aPxkap4oA41Rk9Ryym5JDB7ePJsNDZ4naVScP9iV4S7HbCdadSgP1nk2HFniGM94fQRKJMbT4dNNbRe",
  "key7": "3dQK7MFLE7X9FSPMoNAX35rVyiCxiWa416kNQaNGGTJRLeBDAnLypK9B4FG6NsXZj5WftQKFikhNrpm2bs6ezJFF",
  "key8": "cXmLGrEjsVrc9y1HstbK4kxeY1hvdEUb8ro1LhWiePJeTyXhF1frCthAjvfv2srqZRydqgZxZyyQsb86AQFhQXX",
  "key9": "NfRc39j4ngMYQDKHHRXEj4CWUJpEwTqjskf1CkvUPbYmP4N4hx6ubSrekmQsfACdJgCpdvoVqEwGA3nn2tzj4fk",
  "key10": "MSbZHuvA6RbYDV8xVmwPz5pKbK2qcN9CH2LS6A2mouNFAUoxtxkeLNFC9nSxKCjP6Q83uZgRjUkSBVVX81YQNJ8",
  "key11": "5HFrUvuaQrzDzqQWxQjpEGhUQqnM8ZmL71RbL157SE9XZF6ezmDgp4Eb3e5CTHQnqWZkeyTgu6yfnmSQC6NDumch",
  "key12": "2GwAfYqqT1aPiVq3oGDHZjpdK7QZFZpnbaf1z5w7CyQ1rBY2LGHQvwEpQiAAZxLqNca4KLYVUc2zgj9rvdmHKEVd",
  "key13": "ryTxzB2ew3auZ4bin7PoVbHjtnkmFsCLRWwPmXxw3BLL2oaJRA8LhJTvv1JXUAi4pC7dQUeM3ymhQ72eYPFJRpS",
  "key14": "3t9qz6HHJHi3i5UNf2fQiAtxGZzM9Q6Ehtr3XVhbr6NZ35Bwj44w77wrSezzZPLFeJjzrtmjMhQQD3ibkWHPBthc",
  "key15": "2v9gcDDpRx7a4R5cHm3SMRJ8txpjy4ckpjaMx2eDJVFDE9v6SXLJ6jNyeQvc7tRipTivYbenKFmhnFbPf1zZNfHX",
  "key16": "5KWmG6TcK77ffsiBHxuXDepX2Dqn5BiT4cMXXDffGMyrmfRvj2KJXiVDYCGQhzMbWyFq4avFwm3iezNfDmwDNba7",
  "key17": "2cQRajhGHobBA2U6s3C1yuwZW2efpbuZAwx8poWzzne37G5cxEH4h5ZjM3NvkD45Z69fLTqXtjfWzSN5FhXCq6X2",
  "key18": "3YNd5k6ZH1iQesWdKLbVx1F3WJGZgJ2MpyK8XBNL8xRXgfVrrxtNudKGAmX9oR961Fi7Y9vW7rghAieYpxGTW3As",
  "key19": "4PTyK1qrwPLPSDD7QM4kTAHERsvqnCL4hsdKsi43muDVp7NxVYyhgkXzZ2PSd4MycBSG6mVE1M7JwKwxjKCCvWHD",
  "key20": "3S9YVAdQcePZ9PTayRU4cyq5Lpd3dgK3o3Rh9owysPjFw5oNf6dTBZqwimmfohXyx1EsiXwWbQfPd6kCiHvXdzTj",
  "key21": "48W4NCgFCgCxvbHjxUnNWfyTrhJrW1M4W5tG1gMzZfK9vbjceWGM3eGfe1MVFpmcFmEeUwuw2iZAdA33UacrCee8",
  "key22": "3WY1BqApXgKEryn2AYdqCDK3pnLMMbcpFi2LuznZa9CkK8bFR4JTh5s3YPuzg1b7TEZujJFdVUuTY9a5DXdL1whd",
  "key23": "4GLeL8S8RfR1wgCAdhPe5wzhnuuVjXvCE2qkc7GczpCCaFeKPynpC2hb6teYwGovJyvWasURwPR5X5cREGF6qHfF",
  "key24": "56fvsZ3egmBv2bStTsUfFDSHpWWbQFw8TxsrJ1rXAK3fvAJmv7C2G5zV2bivxeTYSdzfxd9AWZwBWjmq9G8cCCAG",
  "key25": "XXerfYVddp8m8e5563xhMJcHDy2GccmpqhNWhosyydRrmfWqBPGmP5a5H6N1Ac8TCri6cV6K23SXPXfWTXgKhoF",
  "key26": "2rS9frXaiPqjH2YCpHbd46A5VH45kcgjU2xiYJiMUsJ5BN3rhtmD1nZ7hJ2Cg8R47cg1iySk4RyWJCzjSzWxcCEK",
  "key27": "Pc7uM91xjEPcikBzcxGo5vLFjdRewh8szKxL3hRjB22yKB4WtmDLCdyTddqjhLP9KN92aux7P6TSTWsf7sjYtCL",
  "key28": "4TtYhRFAwxmHxRi1tBMg1wN6gWCrRzz7PVLfsnrxpYxigCm9LBenJAY14Wi79rofuVrjtSCyYVf1Jcby2j4epvM",
  "key29": "Sk3GM3fT9y7x4Yjvd1auYLKggNvFz6gVTKErMNJ3aXXwQ8x6yLjK8mALdCdTtfs757ARRU3wPQub3xChujbu4UR",
  "key30": "5dDZtipP5UBqgiSrrvF59ycEVc2jn2QncbURB27S84peTnpJbRoZZtGxZb1UD3qvQJHJ6Pxmsr7UaNUoeGPAULc9",
  "key31": "4qi1gZyff4si6qd1cKpCF8uaYkSqHxpdTVPdH9iBnSraYhPVaJypisPe8oN995gKoMVbJ93aNdJeft6frY6SKhkP",
  "key32": "4Xrep8uyJzopQFyggatRwKb8hxowxzBE8XW69ciQrbJ2RaEU6sRZCZG7rDmBzCEWqBBkVJWYGty4yvx9iUCjvrtn",
  "key33": "35SKVSM1T1gzEp2LyMLqH6ZM72iemUcohgoqwK7fcfcWh67xrBEmeBs5jKFaZ2zr3uGhzXZZmawzNaH8nTzyWnbH"
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
