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
    "27XCg9jEZzGKQZUcsKxAXYXUk1A2vsqggAun137bHhmyDFocbY6YkTPSC7YdSJvwTGdJhp5o2mqieDwcgGpSCM1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmRQVjqMFWgunLCiUrxd935bJ3Fu4wc3HZKS4P3qnsB9pRQsLngmvW82t1VRQWLUmopTM3bU68K8z3a2yK1io2s",
  "key1": "4YeTX55ZU23y34pQbz22Gouo7UNyZbXa8JFjbguhQC4E8BjLftpyMV2eZJuTrB8KNHGk7ETJMhnJWSt43f2QEtFj",
  "key2": "iiJSAsnc9d3DfFKBGsz9sXW5wv6tCqehppSZXtdNtszdb9H1jx3qcXotrxJBUbDtx78pwAjjfp3fKa4q9BkjA3T",
  "key3": "2NhCghZFnFATjL8EjUbTSFVAExvz9kPKtZMnXtBUfMRVFpFbnQSSpRjbfZUNirtQR45zDL1WSS6LQwCFxxWwds6Z",
  "key4": "wbayNgNwFfuJ7MWdRucn7TsqFkc2otogZPzVbVP5ADKSQMivYJPef5C3hLxgyyj25wsYgs1YpxsYYf2YPo9zUyJ",
  "key5": "23zGXfErNr5Q6QWhCCBLULurVqzSGgqyLGnPnkkxGDg2VzaY81zZwR1nY3FSphBSWAYSnBnWwrzfwuQiacRntPsk",
  "key6": "4qiLe6ZyPz41pVahSnym9mFZRqjgVGpvF7mdrof1YwnSGLTSQcF1s38roNbRhBx1C6ictPtLqiXBAsKziNm3EcWK",
  "key7": "2LQkTPwwmwQ4wNkhcM3Qy7vgah8mQ2ZFWeNWjWmy5EiGk67idxH3HUhrfT5sJkTStiFrUFcxaxWTvaceVgxhz1QQ",
  "key8": "3LnQpH9C2A642MjcbfXdRsBbmkBvbWoAGUijHKffdKeK4YUZqrGYbUADT49tr6V15iaSeQQzrgPZQYNRNuF9c6Vp",
  "key9": "26Lk7LoKuS9rmLwTfxqS58NP6vF4fsLuYNdH3TVsMoitVZFBwwziz8hMU3o8xq9Sn5zVvQZdddm8CQxjEU3ELp2F",
  "key10": "5wuMNbaqjrKnTatnLQd7peJFdRkN8ni685JahnpDX6jVu7jnYR1G4oiERpDSTMo5SH5wQctMdcUaUo2DVBhEixy3",
  "key11": "4SnREdhoqkrvuEiLGYm3PQot2MsTgWDAQUooRBmpzZnYPjTsjJvU32XyXGqz1VPREWaXZSshwRXC6GH7BS8buxBD",
  "key12": "62PteyFy7Y6cbd9N6JDLYG8wb3hjiXvWFXxnJ4LxURmiBJ6pzU6zkpAGXxhXBfjsiUKRkHrDC4EzaqirJ8etx3j6",
  "key13": "5tzLDroSm35345hSsvKSLqd1wDXnH5RG5cBz3j3x5Lj4zm1Xa6bn4Zo4CLRneufY7S5XrTp8DrE7wUQj5fws8xqw",
  "key14": "2ssZRJ6kFif6fVGoofXgD8kdPdZNDVCizLSBAuJUZt4c2aPoLkQJT7ivJ2c7nSUNThnHyw3B4gnUU3vM7weMQ1f1",
  "key15": "4q4xEA2rBvwiyw1crmkh4JACa3B6tkpA7z3w8rFuNsxq8AhBqQTFjxuSsL58vzBqbR9Ycufsni1S1JoDvhYeoDYA",
  "key16": "5TsjK4eoXhsUWg6VHPgtBGi2wmbHGd64b3fkdpXJGGFVoXuNqic1rxphK331ZdoS1K2sbvK5cB1hDhWQfbTS6Nde",
  "key17": "5pM6a5eh5UjQLnzoddtQFAF2uFxoAUo91rdLH35viqsP88Mj4ihSj9rgsQgfA8X7W29amAVwVyXqFJqQZn2ewtZE",
  "key18": "toVz2byzXLM4mdBeY3rwuFzt6juLuHxsY2jNAoDNqaabdowqNBEQRT1r8GBZZmA4zYecXS9Jc2JFg2zbpbMuMDe",
  "key19": "4eLjTLJw8qVBQLSFSfdLdMiCy1w66onk2ScQHLLMuYqXygaeDRAenKEKfGru8o1hnpfnmsavTQgGazLCxLmrxaZ8",
  "key20": "4m3Vn5FFiMeckLY3d81r3w5tHM4wCZ8nr5nvRwd6mCLphPXVN5T5EULbjssRbLt7x4spzyHAwvwyb2NzMVDbMEpf",
  "key21": "24NF9uZNWWCV3r23or9jw1zKFWWRQHsi5irCXAapig9bfL7a8ahfXb33ZSimjGTGKbAUzupeo46TrbwtSxLzu87B",
  "key22": "23FQcmMJueoroDWK5Bg6eZKVEdoXkzsV75WJs2s9Cwe3VA6CZTEh9n1ys9NwzuuM47wWrDFiFo9FXzgCnjj3iUsb",
  "key23": "52P7zHbyG9wtaAFCzBZHMFsFvMT7RhBmvo6hUtHKcPA8CyK6uKMe4qw7uMkaVpni1DMkL2LC3NiX7fKQ1D7VYtoE",
  "key24": "43T3ez8dQTjVCKN5byaVzYk68MdDGnyQpKaz3AEsezVcQGN6FRe6ktbQmGQRG2t7wHAQ9gBGf75hFBEvA2jQo431",
  "key25": "4aQcCioob3jngNsfJWFc2U3oFQhehbEttAxzfPNFMVKo5YPUdcJm7mSoTVoN5iu4QjPWV5aKx9u5sPdVejQVeLAY",
  "key26": "26waqzPYXBpCbYKYCTEJJsgwtC3XArfpmxho2M33qzZyPUQXSgQSLYbNB4Yfhb8E5bcE6Tdx2LgZnVNeekb6E5Qa",
  "key27": "5q6fDXwq7Yoty6H1nPgoUvBLbDyhqptY5kCGDKt3hRZn9KagM9p5NsGonXcJ1tki4gfTNvDuBbhRFSRpcVe1hSgo",
  "key28": "2VHNuUVqS96mR93nBYzJ9ZokHHjhCEC76u2dPcgzRUxRDj4YXLq4d3NR9GcrWhuNFAxPFMrQYRTjqPzWPoUXnXqW",
  "key29": "2PMoFQNeoPMgRRVr8utcwdSTNgKdyvFAdCHYDRdsus9xt64MtyNR6qZnbdpvuXezs9qQGr3UWX2DmNrYsDPHzZQ8",
  "key30": "3JxzMfgyjNBGWQveFaXByUMTMv8qc9WXVLK6sRt474kvCxntiEqTVZebz22kGutbg8gxyijzonSwigLrkU6qorF3",
  "key31": "49zaKRvUEjqGP29YSuQCCLx5BjxFfmzoNYXM7DKGPHqe4qNkktrczpXcakMegEGeiLXBu5eZ48br5ZZRJznPLdU7",
  "key32": "2C2zUj33VicHNzGEuUCYXZ4DVB5xEyPaQdoQufD4qWM9WUyJikvDituvcwxWmXdWdm8zd5esomZoANoDDYsLUQ2w"
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
