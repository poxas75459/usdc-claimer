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
    "A7XqSXnZcVyCE7yBe9BEWZDp4uL7q5KnMZscPsKmL7m8znzzyy1fHusvjsLSTE1HFtZNTUe87RtC2rTFDdZzf9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGXrohh5vYUsSHr8GCNLa6YpAhms4WmDNiBwh59ZVCS7im16kJRvAQ7d4BcrSrgsoXuYCVcQC3fKDX1nrxWW7cg",
  "key1": "4AXu756JCNKwF3C4PCsL7BTWzfirBYaL4hs2JoM1C1792wwojqEhrjvuUyiW18yuWm513ki3FjqM2Y7hxuZsoXya",
  "key2": "26TT8jWYr1B92HCsd9852ujNiL1Cb5yb44YRo1p9pP5znyNj98HgRMr37orMCUZEjePKKADd6RwFQ4VAFPmtayVe",
  "key3": "3mM9EM99Uq8BmcrRNGXdiyRL4RTr5VcryEf7ghNrM6n1PctxWuveNJM8JCmowBQi6amZnbwZ4rPnwPKrg2CABc6j",
  "key4": "RuDqge37dcwBifX9fZyGuF4xwdEzzbwMAhcNYMTSEohCbeMWB4mcVZx3ShjT4TMgaRyHv481RfYoKn59U2ZSmEC",
  "key5": "2GeJDVp3dejgbM3V8Z1UxouYWmVkBC7MgKDS5SJqtxbryFd119NyTxGie56ZcXfcKRYwD6Bi7dvhP68ePR67XUtZ",
  "key6": "4qu5zWREn7THMBnGtrf9QeDjRft3E5GwAoiBQDHnBSku38d4xHy7rgadvW4VF3PqU8DAGYmZWeBMK1k1SWJEtThk",
  "key7": "3MugYDcE2yDWfZcCxRUGqeb62S4y7C3HS9GF3huWEj7bwPBhtj5v8umUgb7Pf8ev12GiJ2rxHfqjYhWJS5FcLYi7",
  "key8": "HASAoLPDeoXwDAo62h2vD3gUD5v9yASwoFPRbrL6xiw4UGywAETY91gYJiqoxFQRrho8FiCGh4K7ue1aPqYJew7",
  "key9": "B6ShnCh4NgEA6sDf68zPXdUeNKV8y5xwSh6kJdk4DnSDMP5FsbFVc4o8WE6MS9h9tmeRhpafy3j2mTcXhuC7bCq",
  "key10": "TFdxxDSWfbfaJxYFXZWSzM92UYpDBqRUsYNHUcTrZpB7nU3muaDAuYUYRFMkFPZ9pvjzCdYPmAgT4HPQkGJJaG2",
  "key11": "4wqyoX7srpCLnX9iNBCW8MXBkfDDj6hWmYVf6CnDrs1kGeRXKN6cfxhPuH6q2DvZAes7LhsetdRks9UYYMFC1keo",
  "key12": "2kVaLAWkuCn2RCtcMyBJykVQjhTW61Mk4QnmJTYHtmDLGrck3KrG9EqWqXpkdSfhJm36agxzszZAAwwEgPfPntq8",
  "key13": "2tK8zwWu2aMzUrZnriEbLNkCTadWzY1gdK1cK3KJbXCUws8nokt6vPDjHqprbXEwQrtFsXyHDoRfcrNSuAJ6uGLc",
  "key14": "2rAvuTiNhJgGknYmAVcLq2UbzMfkdCGVpCcKKuB41jxVAgchQBHyw8J2XmodZkGnoHbhNYtjuuwuah3FDWB9GzNv",
  "key15": "57Kaqc6NhuNCGEBL6oEK9r9MRmVCAVkkzUX3JkQAU2Hg6uECx2NiyPiLyt3mm11GJcHbygU8NeBzmubDCGKPS2oG",
  "key16": "38aUT8ZanWYdsgcqbedZFvWJU4Ah6gJKiXrA7QpuZVoN7FdtCTJuDHZQCSPpJ3L2ky6hWrwAtM7mgph6HrBnoU2Y",
  "key17": "Cz91sYwKxRgiRgDD4HhwhJYDYjZzZzFk17rXw3rPgDwjxRKoDQeC9KmLAGMvUurSyEKg1GbP8TRTMcUaT8NdMMt",
  "key18": "5BGqKo1CoAk5U9SdQJKnZt2p1oW96gBHy8sMk6A5xQdgXZjtyMygk62ckv8cJ5BxsvjWfYNDUUFCH2MQxeEeG6Th",
  "key19": "2rk39RC7fNyqXWVbtCizscr6nEs2B59sKxibDQPTZLLB6Xw8ZbNpZyn4jWPVncs8KEhvvcsb1yvffSW22mccXZb7",
  "key20": "3XhgSgxmYyyZuDb1pjyRdLNTy86ABpjNFUAbNVdFZe1MEEsm3Z1A39ZKCJqfE3Vg5QbbTp8WWnDQQ6s4P5qUP5Ab",
  "key21": "5BJS23WHA2c39V4CC79DuNnY1WLArdLiepPvVfd88YSQtLWQEydiodRMqayf3JL4YRD4NUCc8jrDopwLpuNjLhLk",
  "key22": "4KEYkwyyDDeJp924WTRS6vMjbDHi35Z8sMyBVv3wMxp9Gn5XPiWSHwmfp9rMjrDbtVkEB4wf2FTgoGp147sFdLXF",
  "key23": "4FcUX6LEkBjNZQyLih3yWMgwxhCSUEmJC8q7Su9huehwjqgardjozYrNmxjfSnMT75f2ijPTN9oV2vxHuVCMy5ms",
  "key24": "SLAHdmBPBtABNyMhE35KACnbADjK6pWqxQRTYXjzRfgvGqX46WU5n98XjsWcnbLmpkYWsDJAonN7cpUjAio9Pyg",
  "key25": "59WtPUkvANudWvM2s2VhJEuYuBinpb4mbWN1Lt3nTUQLRu1SV8RG9cMCNhb1XZMqfCs6tkqjrH3unMaaSNE9DabG",
  "key26": "29Qa5TU4WvwP64tbeiwkMCoDkDJgUDcaBUVBhTzF1Eom77r8TvoqHtzowzSK7MyH6GxcJjuFtu13yqSezczk2Jpf",
  "key27": "5pyj2G5ur5HjYPh2zjrXe8AtaMDhkK8jh9ejTGsrbo9JJjnvFk3BoqAtdHTXLok4YJs2VzYDowVN4opna1sRZHv2"
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
