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
    "2qf8CDBfJYUM2DmFC7VfSHrnCpoaAr7BobnG4tAPRJX6rQCSKjAUzTSwmoHrmQ8TbZpefVL7TmP9aADMF7pyGbsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfWvBqiJp5hVp9Ap85RUV3XouBegwktAGgFAvGGSibjo9LFpThPURW98xCVJmmJ36ARLDsTQzyNypPJgeFWfKSR",
  "key1": "3zq3DoucHmzo2dNEwYArcQYo4xXW8eHryHR4ETGrjnyYG5W9LPPJXSnchbMSrnTLjprDvkbBN3Gf4vVg5TcxGhk9",
  "key2": "Q9w8xGumDm3rPtUBB2WTCEC1PUkAaAyhx95s9xtjhpHc7iZZGN4CUAoncCsFyzT6UPmf6LBJ3Q6YuczuA2GKAeJ",
  "key3": "5rXZdCMuLrMVtn6cMimtFRccZKio8Cdi6RDtKFA4D1HaR3rZTgzz7oaT9Kq2xQ892UaQyEDEPwB5482RYk6GJrdt",
  "key4": "jkWrXoRFKMrywNGz9eUAZ6oAeyqSPioJfmM8eGD4DXwwYG7L14s6AYicu2YUvTQa8ky6eYHsNcyV7uZJWqasnrj",
  "key5": "4kSeHnSkg8YXdyQPYZEQtgKTjNSVNKnwr8CjxLyUtY69snhTGKEmaxnNFBqRfi8RNt4UCxwkq7iq4jKw8xYrMe3p",
  "key6": "4NAAe8BPhW5CpucvHxjqtcdw7avQqw4wjXV8Q6RYTrFML5iWrZPAoLF1GiqxBVRfxsbwdQQEWWTHQADor4XzH1Gm",
  "key7": "5g6gBTCfGghrq5qq81atxKovnGUQJ84nLxNffAriMAWpJNMYbtXkURCaWxdE7ZFn19MXCELxJy8bR9jcPNN3BL3D",
  "key8": "5KdZoetp9aG4PGU82cuQdsE6oCsa1RN7mQGq7HMJ1iLbC3Js2V7wBbYEQxrojPhcBWXyrVpWnASVUL3C2DUUbtow",
  "key9": "3K5WT3APh4LH4xyEc1CkPUQA57T5hXDp5zTLPrWMkpAjXLVXjRwbu359RJKxvKP5rA9QVxMjp52AakkgeW7fYXE8",
  "key10": "7S2bVELThSaYcFBaCC75fBnaCy8no18PgV1jW1Yx9iuCND32K86vHWBmWN2vhzsECMib2H3rpBYvmDR5P6FJT4P",
  "key11": "5PwmwQXcrJgjvscmJjYdfgHheKWudoe8cNfJKW7DnwQEojc5bog6r4S2JHvVem6Ueh7CjFny8JfqrED6PnQoeocm",
  "key12": "2onTA1L1EuXVJzd6xXHkP2CdznnGd5DLcKNtpbFABVNbJWZ4HTeapE6mkxNiQXd82VXY6FKiNRrV3eAY3AfQosx9",
  "key13": "2k19rYXi8vhoASNwG6GHuywthidzPLqPQMN25cpEC15WNWmmaH3x33xt6srSFke9m8QWLQAFkTeiQYnDsW5KTBfD",
  "key14": "28ZQKCQLmikRrRtnREuYvWxKf7onpc7Da8Dmo569uPs5FkGwYZMGvPst3dSiHmvce7VXfVhncJikjsd5mXGsHVyC",
  "key15": "51Cic2KUZcmYJtVCjQT2ETkcnRqyodWYpMCvFNKP8ySdJxkNU4Zass1nCF5StUsC8aK2VGsPGecapY1oRbRF3mgd",
  "key16": "2WKXMV666UW921EF1BX7LQLRoMCisBtBbMU9tWothiXMyWnpZpY7JN7vMWyWRBqpTyy4ffzf4KzkwKna5cd9gYEb",
  "key17": "3g6jPY6jsXm8ndWeY2qRdpFYvUXVwG7Hej2LjGLR5cTtGdX8E4ppNDbZZ2iagjbz34r7isr4f5Wwhx5Xc7Vctigb",
  "key18": "2Psw816AuaSKngCbfK7TVq3z9aC4xA78iRjCmnysDpmdxWzQzh2QGWkAr1ogmYZVeSzrK2JUCnn9ycrUKbjzFPbD",
  "key19": "Zt2Keab8aNRYHHr7xKVLsqA8sBJMyDRfTTt8qkXQDFcjzkdvpYwfBMFAsxoMnm5RMhyH3YAVzB2aKEzkQfSZVdf",
  "key20": "475MTL5FcanBs2vgKy41oHGmJJ5WPdSNMVt2WZazzL4hbwRVT12HkL6NEcmaJUWHc1pkmpN68XzD859pZ3E3jNQi",
  "key21": "3hQefSuZYiSwARGjW9gCyZMsuw2gttzScwCcdwbhUs7r2UTZx34PyNcFsqHX9iXBB5Sen4P2JBiRNgns3CeKrXcW",
  "key22": "3oUxYWT4nFbUycyviBe5mAcXSomdy8SLDvAX9wBNiV91kjYsooSuGdkw38ZqGLPasKMbarvDaQfbTsTbSsejVyo6",
  "key23": "3f5mywL4ryDnfSJjtB1zQgZJRU9hihHeHUn8ZesBtXgh7E1A1DLELtCorpLav437zeWijnZ81P1jzMmd9j1L9jXa",
  "key24": "33asjtzoTB1hzx3kpgNPQ23XxTxwXCqARHNdud9HdHgQ8CFvmnUj5VVuhHA54LXKHszRm6UQpjdu4tYzLtnqTzcM",
  "key25": "5UdBfbyP6XkVm5y4NG1qGc8HdWN9N2e3rs3mpyEL9iuFa1DUYzCRUYwq2SBhpRmkpgDAbM6jB58XigzUbkKj8bxG",
  "key26": "6bbmtbiAMPxRe1cKokojZZeweE7JusKVohvb3LGTSvY8DwkMRfq2MYQoDzT7iNCsAc6EUhGuHQnLkE5VYE8ok73",
  "key27": "44ZoUA5Vs6YRotqM99nqwha8M21Phfnq9evkHUQ6pcCmAU5WCUFMCAVbdwgdiy5W5G2mJoU8TuH3D9R8GaZikvrP",
  "key28": "44CLxC91rwgaiuZa7oiJb9i7hWNtzgEHLK3Pr8yNb9NWgqkS5GRiinjKVj7kymBssh5WaQZEAvESUUjymcC8AF1u",
  "key29": "3PKUuCnZimzCYsZK3Y4N7kAJvwJprLjsqvHb2wBTLfpM73wDfiow7X6wzLDC3G8wzpsc39VKfV8rDcUyv9Eo3uFN",
  "key30": "3aQbcWRzEhaHJrHdQrXiAyadtwDgqSyV6pqnLxF52RG849VSHcNh48aNSuvgF6F5UdqGVdEZsoUjZVYMcpzYRWew",
  "key31": "3sE9Ap4pp6j59BeNsKjYFqrva8DSrfcACbumpPyXFBf3UMcaSPJ3TdmzEsGUKTqVZn48RZfVqvCSBAmntx4K9GVk",
  "key32": "2FTh7tve1s9HW8aLJHMDc94cmKokEcBsa8V5gwEgpehUj7Du3YgsZ7zqEzbMkJKWFgDhh9VQDsuHYN1y7iKFsFTf",
  "key33": "42eqLRonSMsZLSQd5pRS5ExLmyiyveTZkdXTDcWPNmzuvqZJc8R4GSYJ4nZDWNzSjT8wSKU4U3yDp9LysDMfm1vt",
  "key34": "Jd8hSQBGwk1h5ccnhBv12ynF91BhmS1eVwnU2ZookLUddMUXHkoV58W1nBFRXxNnGwQTbikuKwWLVNLYGSe8Vgj",
  "key35": "TTKPn7h9WsEFCBqNeCE9uodBWEpcsLLa32TiKUYRd6GWfjPfAZxjuEAHgGeuJTx7mSEQbL62pAVjvCkWBvaQXUf"
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
