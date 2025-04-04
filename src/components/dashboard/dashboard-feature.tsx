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
    "Wmbf7bdSAMHfsSxfkJArJJSzT6Btycyrx8Ue8HHffH94mVNyEttjBcJtbuEfNZz2HHSTDyHx9hGTmoWiospNcdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWrNWFg8Jhbdzu9CWjCRpckzDh27SNE1QJ4N89EBqAEGfm22fwVFZpQhoaDxQNUM6pYxkDqhrtSHgCpykiWveHr",
  "key1": "5f6FfUt2zRJp5xjiQDsn7qyMFB3YMHriXcaJxRpP27pr135Zr7WoJb7uUKXhLBgGQcn9KdAWwMjWqaek4XHWTgGf",
  "key2": "3fsQc2AYUszg9EbJEuvadok74awnxgWnnbVFWnA1EPwvAmjjKepYv8FN3rW7tEcZDuqktBuKVGT2o5jnquRgNJ3d",
  "key3": "2NLchwAshDHzQEX97UuHkpyW95McnXdnp9hs5AR4C3Xt4o2mVZc5YArRM14iwGGsRjfcNMXQ2NZ3qbi337Smfe1u",
  "key4": "5DBdvNvcjRYZp5Pm3wB1UFfkizYn968aukLaMLQvX429vxdFB1sy7RSMJmChB1ZUgxQWFLRTBn7E71QyiVDezFJx",
  "key5": "5jUBJvU1YyjtT5JHR74JiqDXFz6jAMmFGVYHZFG8Mi6XUJwhiqxXCqjHmjXFQUxWqL6prRrZVSxAAx1npsjTntMV",
  "key6": "2SBCJoxPH8zdG9T3cQY25ni82YaQu7t9DkKbXuZQRzFiQDAsX3HmoceiecPFgRWMLij2CVHb14qUbcMn8EKsjKLT",
  "key7": "2mFdGcwxXnwYC56MV63zyy3q1fFgWTxNfLe2Q4XJw5Jf8pRJUTTidVdnCB9ikYG6b8ooaR345BgKJMgep5TJrfKK",
  "key8": "643XS23WfUg1R1MkFmxJqtkHPM9t6C1TbphQgcjUJHPbpsMhLv2RSrHiVRKMCwctSDGhFF6Jqx5gpdXxBLQEZZgx",
  "key9": "JwZhVKzLtx347UuKuvkAaHLNo55ZzVuphneURupqRmwCWiWqNjZXJXZ6uJaL6SN2GNiQRK6ARb8Ey4TZYMUxfuC",
  "key10": "4qFiVhVE3kwT5dnxZtnkvCEGF2BUaBSvYU8K82u3bxvfErrYDie7PUyZ9KSaQbiVMezuCGyFw6N2PJgcFztTrdEG",
  "key11": "n5sxW5bGUmacyRVE3d4BXkj5Lx8NTurbsRSTFXzGkUZdLU8HGcnVMSzGgnSqUJouwHSdTaGcFKjQ6p8KbhMFo17",
  "key12": "2vcc9buvESACYeJ89P6g6gd9Suih2PHpweVYaxEJGqHPtyvJZRegjACwcTRs4V6PZLG7GMmx7eXueqHVn8in7n4B",
  "key13": "367S2BpCCHsM13Sa9oMhESJyPEpvN2LdxFX5BXbAKxe24Nq8xKTeKFDKJbfAW4b2wvnXbzMSgPXbiBmeKFFwxy64",
  "key14": "3h7zVSTJSWdmJuhk9KqW5jQczTRGLJgPE1m4SwHEGU5JUM2xbeRzPcWq4dMetxb8bec9SqBC7vPeGwhqdUiN1eGw",
  "key15": "2Tq7tqsPHQFz8FBHCWGYpGg2eLK5iddFcaYraDnrqwRLUbWi3thFUsmdzc7hn5m5NJ6EVad6pqPDxyshoXHfgVVn",
  "key16": "Q7qbwmA1eppz74J5sM9uLYF1nyDEnrc1FZJmvNyJFa1KZCGGFJGfRqCAGhbchnK7fqPXCVjHj13YmwEDoqzdgTh",
  "key17": "3YBFZca8hDEm2ky22VCN9KGABsH3uddy8V37QwDKXHJqpXf2ckBKgv2jed5R133bLse7Ss8D534nhHhKxsT23jB7",
  "key18": "ZtcqXdxCqpQ21kSbpdtXagLy814FPJRqAQipZ6bNL8Tg99tKhCNvjXx1DTtgWPEr4HUcRJHtLN2VN2MFoD3UKSV",
  "key19": "52CZAmm7L8SWJCLCdgsCAttsoNLpZvv6Lts4gCWb7iqxuPaDEvBmp8DBT33sNQjQQZifNdn7BY4jb82hPpyxr5ed",
  "key20": "5AR6Pn2AUY2bMXH2LRwhaTiwA6CeTR4L5MqSSogKPYxcz7DVooTV2a3QL9k7C22mDrnqS8qJWejgFFaGyi5rFEWv",
  "key21": "4GqkzmjyUK32jiTuS75y3SWa5KvKnqRb6Njma5VwyhGRkx2EQKnqBqwo6nY7Akh9VKkmf37E13YqRLUwPjfAVPVf",
  "key22": "5GD6aoR7iFZFuBZU3s1mRvoxDkTtrTMuLiXYibupHSDgBnjb7FPdtqBdbBHgFvwFUdZg96NDY8dYX6rnEsYTbHzM",
  "key23": "3LxT4z1PhXkEgqcAu94MjhSWzy1usS9mqkHayLFib9JhM1Sj21uYKrrgkCSKbTFrkbb2arWPHJpUDQdKGpryW19k",
  "key24": "4CVmkBF5NS4sJ4ZFvkoPe7pKSAVvF7G6DW3YVK7Ed8h5rXCfT9zo6y3V5mQp4CEuamgpjbZWnQmRQw9P35s7TwxR",
  "key25": "64knLq6W5qSrz9DSQW5HkMLNA8sUvQwQEEfzEo9GJuCuFm3QezuetszQAdiuMvm4w5QXy51uEv2H9R4FECR3NEqt"
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
