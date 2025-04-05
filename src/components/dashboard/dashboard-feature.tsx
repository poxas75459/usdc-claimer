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
    "2uKBCR6vW5BisFeiyyMMcSFRwLVPbj9nwmeetcwvtdAcqgaVy65nHH17XLXqEmVWmQqH6eWpW2oqfz1ZQwEUp6Zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnY7VtwGNGHG8SSHMyZLAsdjpGkjqF3oZsyZFiStMAFd7VKdrdsyCPaoiBcRLG5zHf6cA5ABooS1aAZhkxiyhRV",
  "key1": "2bvsBsmF9AUcDzLRsnN9HFhuzWzKq2vaGrh7CAbyZj9fZ1u8fPPF525KS96FieDJVtXDzybC8yX6fLi6RZjAqnzx",
  "key2": "4gH23MSgKjzVYwGUNBcbUnHTbXVFQVAhTFDU5XRGJBFqBgeLj294t1aggh7Jk425yAH23SKW3Z5UQknKbD87J3oC",
  "key3": "4p45zwP1xphvZB5XCJkcbw56HPJkdJaGbR2qmoZ1RuYWpFRhJ5cc7Ypg2ZaSshjv5vF33fTUbxVDEQGKrevz8NFD",
  "key4": "4uLufqFGYVskJjK95RBuDTwytAMRmGGLfh3Gje2ZuSf6DZvn5YHwq7QuiqQaZ3BVbh9VkZ6fBdzVH1EMfa7DtjWp",
  "key5": "3mJtgTEGub1eKEzfJHa4kwegH74Rxj9paEPucc6Eq6ZQPiyKsPrZU4brgLA9iCVVBziLvMySfcjWZsedhBs6CnM3",
  "key6": "4ubVvVNTRxHprEy7DoebVyYFQJPFE5dxAaPqrYec9wiqVYB3u2rYA1BbrC27qRyJ3mxcT8hQXuiLJ96oYB6VPFaR",
  "key7": "22NYpbFxRV1osrbuwRqyxWMU5zgxPsB2gQNLaP5EiZMeeXAp8roYrbWbPbyGuMjRiEvKsaABwqekWSmN6YBrXoA2",
  "key8": "4WnVBH1nja2BkeePSGzgZCWpuztEJbLxuntLyiHZVeDGUmQb8k2oAzyjMfxXrFtm6jQjvwRvvs7Xr3ywXQJiG2Ky",
  "key9": "5Y5g7C8zfZzesGhVUUxfUGjySnmvXAb6hacmc9Rqoe8YnDCcTmHU1sGD7q3xrtH4LXsvJPKP6U2Eb8PiWXi1oLMh",
  "key10": "37UWqjoqf4MrwhzRBDWbkXkzxiVT53c45pDamVbA2PdLRKoA5LL4364KCBbtjw9amHGfaZRV3JBL8SUP6sN6a4ZG",
  "key11": "2RjrBJ5vmUBn79D3ZctijvGGQq9zQ1J9wcJpXMUXi3srjVv4A4HpwD7e1pfCyvVEuE6emWosKWYc5zEcUNjRWfkK",
  "key12": "5SfqjgBjxZSk3MZHQBgwy12g7bqoCA6gkkZE2aF8d9EhrpPhUe3j9zG4Nr16u8HRyHQg2WqG7gNACdG9cWBq7KX6",
  "key13": "2vNBskA6doDfDnF39jp9DE52CcYaQHtoUdVvk5zqgNjYCknkypY7fwYiAQ1cDNqEXDJ4Y8izc4PY7aDjzp2Puq9c",
  "key14": "4AUYH9vatFZ8Fj2XL9tDK4Y5d3RCuwcvFtbJ19Xa4gGyJBiYjcpvb4bnZrz8qqG6xEft7iWURC5sG7jAFLBeSRyr",
  "key15": "zdqwB33QkBNmp4956smbRCMvAeXsEq9qfqxNWNXwErp3h5txYkoVSUNmc9fKEk43a8sgFAeiE1ssrUM3RFuNUhA",
  "key16": "4XpL1M6PqtpQQ4EcdkL3GNhbYoCqhi27SYwkKsze31M3E2Cpw8YksLYtdoo5cCdofs35J5MB3vJGdJKquuWEj8sr",
  "key17": "5QxRRcqnFc8WxZbrj2hNWa421PpXBEAmFMV4oC2Z6HRWg43A64ZAdYpd8ecJF2HNKYrgP47sQuR3nSS9x19Eov5Z",
  "key18": "3FCzQAjgukGvrd48fQnskUZ7z3ndQbMbWrd5r4qNYj6HWcMBEgh6EuqguGQhHwL9dNHm1kLmrrRwYSkiTs2PyBw2",
  "key19": "3tV5DMJp446RvrP9Ben2g5zhfvoRaRdSB9FtN7DyjHwGqzZrx8VrnBSGUbVgjjQ94xZ21c4gCRqA7JL4F4KbqRKh",
  "key20": "4GDEBZph2nZMd8jtdgyVf4MnLR8kGrUk1Hj2emj3eRe3McqjAYNyfqodfGWkzSyEeb6v5SbBgbGkusZC4LQ24vJ9",
  "key21": "43KH7Fc16KMGMREekby4RZ9FXTvXfDGBAxAqUEquEkzF6WSGhgCxSvE1tuKKioJxfoKiaN2A8FArxG2yNtDvJzXw",
  "key22": "2VwGoZDGid2SqnCeNv1mvgRtZaTmp5j86daqpaRPB1Xmps3QtNqJZCQYA7N9WwBDmiG3kFXbcbm6uYcX6XhL4av5",
  "key23": "3uhMs2p9tQ1jcwD2PBV6N6sUWRX8rSYdMPXPrHPSLjQv229RGXLZCJ43VBYvtpGzZ96vX7SMYuzQgfFXYXcXYTGm",
  "key24": "d1d4Dcg1m99hd9RH2ZPRYYvgRHZ2ZJgEUKpteThCLheajSATQjnCghXv7iD5VETCdMqWEahY67GRtMqvAGBSKV4",
  "key25": "3qhyWgveNC4oq48BNnQBqgXNMVhUiFeGq5wYoM5J4an5yyoduVedhpifjRs3Nnvo1dqVv7kYBN2hSAtUVsShW9sQ",
  "key26": "2W9gMSpPdQXdSZq8PnPcJ7dsCe3qYCFK6zgqXa6dJyzanyvyVhQtxZfG2WVgmiua3aw6EfMQDu6hGCv1cz3XwYjF",
  "key27": "2WUkjnG14GraLpRqCUqn7DCnzEPq3jikwdwUEb38Jx9GwHErtXhfH8Vatkj2GWoza3ceSgmrf8hFHiKbyUtTFGZ3",
  "key28": "NCAVnVqq7A1f7CCmVjGWvmtq8fvRT7fgpvnXu2rfdTaLBV3nSxkDMyLmnTKsNZetd7ZVRtjRaHfbqEMFxCv4p1C",
  "key29": "5s8oAH2iQHLeFewuJWRZ3xCfThgZkzi47gVCosWLQPEzUZT88kj43a5zFZuiQfi67WsT4fxqBppQ3aFx5YArkTDq",
  "key30": "3wsresfGBphfLbhtmaRFdqceqZ1wwnm2dK4wK3R86jjRtLGmweDAbwBf24EShk8Dc8QzVpeU7fDdpxCKHBaDzySQ",
  "key31": "2tK1KPusKiBkQTy6Q6pktu9MUp6RLPpdpKwEBhVHXtojZvmJQuMp7Xe9t5XUE1kHdFHovrFN8SA7AeqVZS2DwNkt",
  "key32": "4DWyGKgaEmk3oMM9R2EJegGNH2xA1zdoDHxELttMp7J3nPSi73xNskei1CNLhf5oZn6tojfSvmc9SgS4TyR6UXHy",
  "key33": "5Ga6mP2XxBvqs2PwQYCxAnCUXtvDeWef3ee5YW3wtsPYcimjMpAbwbRFemecKJSv14oWb6STR568FSWCmi3PMY8t",
  "key34": "2X9FZ7YzCaVbNe1jscch9beLPHuhq9q2KSCUP8VLfWjUZyQtZD6mB5YAyZ9FnmABcSSJ5ifwrHVmk7TdD4x9bQpf",
  "key35": "RGvb2ZtfafZtAbdcUyyDNWmYUVTXFzatQobsk3kzouKAaF2jqr9tny3hsB99W99CuSdhcKDw1BDEtJYFPjr5TqB",
  "key36": "59ESkS1tTe5X3bZYGqz9oxjSEWEgELobGk1KRS2JvZkX3q1fDMNbFmb6XFQpvp7JR6LCoAXwGNGBEF4VrodburdF",
  "key37": "57DcrDDGh249mzkg7Xwi7ew3KsJM4vkQTYjEj2V3h4wUqwG7LkjNgEhyxvJovAcyJJxUMUAk7eoBtZYWz89tEczT",
  "key38": "5hTPUKiMye5kn4999EG8QfqviMdBYHraHhrdrsrgAzRvuuZMiR9BEBEDpEGFJxFF3bRt9S2sgtsxsb9Gd2z9PqUf",
  "key39": "4ZEBiNaR55MX6B32b9StwRU64Hh4E4cxgfS94pXTNQSi2kfTx2KpkMHDE6a4XbDHNF82WC6E5NbtnUKZ6QqRUsFo",
  "key40": "4iuHKiNgfvnv3ZiJQ1soJzyJqhsFGxdrCgX5K9tYNFiskCvpoo5K6yMiojhovENUEpmuhco44f2N51A27jUFyEFD",
  "key41": "2i3UwmJ4QaTYEjg7N8gnvZiL5GRJDKDUaZuSXiTsnAHBqwt7kCNhqz8riVdNL2x6MckVn2StvqDzpNSijTj9dE7q",
  "key42": "4k2WbE98GA7oD8oeXLoocguu3hxV51ric3vmUgRavvaL4n61VhE8V8CCgZ7jHdrzU6BfRLr2cq3NM9uTCSsURpou",
  "key43": "5BBsnXegzHz7HnJhN9dF6fgtcN84yYhAWrRD1h89DfbLXntUbiBDGA9st15q5qwhh5Pb8vTbjy5PnprW9NUjBAac",
  "key44": "4uAAkpQXZW3rNtuAmaqc1tnV654f3rSPKDuE6nSN8a56QuG7FLTfKf9h3dE2BonUhwnXxTvb49iKTpEdA3stT8Kc"
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
