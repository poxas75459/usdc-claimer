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
    "yBaNxDXufGkL6Z3jfWrUumqLyEZwZgtzLaC74F5YjG2cC8uB5Mjoue7wVVVVct1UmzLdXzjSKVTnrZoAssANWpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGQHq4KMadybXVdDoLxQ8RJEvHFk6VCno5MeYNxtofVU3QF63XcGPtgFGkkh1JNyDns9wu5B2mitWj3wmt2mzf",
  "key1": "4MKZVDJ8a8PB4nYE4YesmyMCSUp1W2uWhVt4KWx5HsqDGmkbuUvWZojrj25jnQqt7FyKC5q2jfPQHMLM9un9Jn1v",
  "key2": "wuitDKYmzc1bTKndwxAFPakzqz5gsSxcSj8mK6AAqWLTZYcQ55iiMadEZL2YNvZJBgghEAzvHni6UoZpUH6CfWS",
  "key3": "5tqBsmQo92RJdNwQuWZfcSX13yHsZZfmUwpezUcrfCHcdhrc6PGt6cvkzzWwMed4vwv38HCLi2tETRk8PgGgiYaj",
  "key4": "2Ex3fC7jnYVfAbfAnKPMZwCj9THuZj9BTQJ2BSJqRe8McSHdwn7FNHmQV2C9rGUHu6bXzahrzPhVwLSH1BwaCTjv",
  "key5": "22pzBmM5b2kTU9B3SGomJLcZw3q3a7fHyyFgNRKahUcy1HXuBvRE6UZdv1rPB4UcL1bDLAVjUGz6KFskdSSusY4o",
  "key6": "2KgjQy2EsQnuz4WqruiMVBTKxERD72pEqjDEugAi3FvZqZpVc4N1C1SMmMPGKdf3vG6rCmvy51xazD5S9cBHqunK",
  "key7": "2hX29UpuhT32A1mc5gYgujvg1AZQH9bL8MLXSFwkRBbmoyfdSYmxWhtvYnhkycjgdyAwsVjEkioXSsZnemkKxbck",
  "key8": "gCHmUF327ThvUjeg6BiV9y4BeAbZDVmRUWfAZUM2G76pQdiF65M39EPusgdhkVgeVHbWGkDtX4VihLRobAVhV9d",
  "key9": "5GM5M6HPUSVhqSgjQPTgW3Q9GGJGjtgAADZW94aXeUdzzYU2cJJHEZoC8KkRDUbNsD4iVHjgYFh6Wfe9eUuwZHsS",
  "key10": "R9qTfXtrtLEy6qcw5BGHGEddBSGTLPmzXttGp98akawwTemNPejftEk4obK54UvgSyEmoCycfEyZJSKiMfyzxgv",
  "key11": "j1Mf2AWnBKJdNbaoTwxJb4AAEDizQj9mKphvwjzkkLiWzY6nDw9qyFS5k8sVC5eons65KQsNoBXEYMgKnHnQwL3",
  "key12": "553r3NQqXXqhJdB1FGqjf2vfXALMHZsKMADCBv9bpwg9g4ET8L6P9qnATATzwb7T1iVTXewfV7LhLM6Z8arv4g8s",
  "key13": "29WiGUSoHixxmmhSZWyaGLt4i1ZrLJsmpS58D5wrtAiLWmZ3Y1YvFpYY8HwEH15Y6TPYvYjKJd2uCiKbkjTGR7zz",
  "key14": "5tyHosfzr2pzhdyo2BUu9EpFNhsc92SsyPU33MYAH8HEFX4vE8yXwJytzKnqd9NGvGMeurSYhyoLEhjS2xKGyPpE",
  "key15": "3roD8csRoDS7GR9fcqLbGscCwwwjhYEiyyVwTMjYidxaDUdfHHV2A2yLPZAkzrZJr9x4Nv5FUsmb6AL9wrg2NQBE",
  "key16": "31STMPPYtqQFKqhx8RRJXZhLewUqPohdpBvFfHav7PwcrdXbsDHGSiHJM1tKtBGCUFhHmpGY3K2Dh5JL8KNa2aGz",
  "key17": "2gWUDxhGVdzPVf7pks4pMUcmeE6NECSEhrkqN7J4QSZHuMDoBdktrEz4EkVf3tsCGCdY4LqjUWE4qJbrZ1WDzvdB",
  "key18": "43JXT7S7j78Ub28GwFDUAuB2zL523y1z6XhN2t5ccUiMxadHJkWKFYGJjxxnfxgct8AiMDqbFRZpkkWmoyXjoEcJ",
  "key19": "fEzY5dxjennJskKYwFYTGS9X9Kkqdm7moFd3oZ5CJ8KAsPLW8Ffp61D8FPQ1jUiZMpcywuxNa6UXHruXLTR8Bdr",
  "key20": "2i6fJJc4cZ7MR7dVbDqxJUS3SfCspuxuLDXweabKeRvFfmTcv1MmbNkWYqLHmGP3qED17RRfUU6mXqCHztMTdU96",
  "key21": "28GbhHFUPDRwWzTMZxmjuBvhYgjjA4X393naax8SYDm1UCmiR3ERNYpjBVWLGZgJCfVY7SQTyFtNim4fNfYDLEKF",
  "key22": "4bSz7NYLBx8SJXsypruqHfW6fz2pwkufmE6JJNGBhVobVbFouBFR1Y4TjQRoiYt6W2MVV9ihvE5YJUs1gneDwroH",
  "key23": "2LCEAmTkPC1qq97ga4Lrwd1GsCzYLenaAk9ywXuyGZkQuaX2fQDAgSu83NiRXcPh3Jmnupzr32WdwukKvFp1VHJr",
  "key24": "zoJ489y529xAWVVFJxmxC43rPdaUgsVAkjrzbGCMDL8NPDSXSqFMG9RaqyDR99Bs7ru4b2yZDaVs2fo4n8hZzU7",
  "key25": "dkgZkYWRvaiJYG3TFYnZZEgn2iL25XGrX7j3FWYzVvbGctJTKCcUc9WcjwqtEQf4zeHz1pFcAMuXHrqRZbcrikw",
  "key26": "5wtKPxc5JxcbLtzytz9uJyaT8FzdzjNjYHtesr5dBjVv9c2CvEKygjP9ELCVr1QRFyw4E7rrBJ3Qzc671GGtqFda",
  "key27": "3RUSeiGf42NXsxDozmK82uBcni7wEMZ87mYKwXUad2saMCXN56bVr292vMbKe3AS31tMr3SjFgRNZtwr6nLixKKj",
  "key28": "2UuGy5HTrNNA1nZeqXQ9MdbQRh77n6eK3MDTFbFy4b94zSnLmjwW9a6ibHVC82iQ7ov9JqZ7TevqwoP88eowWZFu",
  "key29": "5wBg9sSEfZXcUGGpTmWY5aUckXfxpHgZUMBUcjF8rWD3fbdXpDogsHk81z4aJE1wn3benQKdzZpknoqm189ZKCwF",
  "key30": "4gVmfJZp9DzYVd4vdKzyx4hfFJBxoZ1TzGtWTR7jBXRvBpj7RkuFYB6wmfjTnhhS5PnrjoxfEonmBkHfMu7PrUzi",
  "key31": "Egf2L5nkkcyaJsPj5oZByXTG3w3AJCq7jub513Ar8p989nwYNJ5foDgGjJMv5txX4LhrRH7VTGka9waD5U16dgn",
  "key32": "2234TB6CbQCKSmF2oPPjSe9Vc8zQ6gQp7RsFkbZ1cTHCuEYoskiefse7LFj67x8xMUSpDzLRT3osPjh9Ak38MgZg",
  "key33": "236jSS5KeohqYmaStAMWZFfZNGx6m8cQhpRQgr9Cky3h6jVg4E1TLZVT11TsGAyLPpXr5fJn5ZBigXCs2eB73oH3",
  "key34": "47x552w7CJoBc1wL6vsGyRCSk4trijp5iksB1D5gGkcC6sDEfXxri58vetrZiFk2MUxPbn9pdhw2HRRMyMboXVbU",
  "key35": "1GVZz4Eovaste3EkM1eJHS8Le1Z7FPKgxHqKYYuS9B3ozmjkuMF2ad1No9Cd6MiQT5YZtygq8gL3k3kLWoxcRHY",
  "key36": "4qjP7KjYQZvmcBmqtt6FpjqobHv34DLAyLTHznTVwCTfX9Et1u6GEDpwGzx3WELCAN8S4xASFFUdvkYVjDpR21QJ",
  "key37": "59ms859yL5mZBYg69yo6V6fbamAbYx5Md5SYrhgFzJidMc7cxiHa73hoaTT8MFAqA4yhRg5rPwQBaAmiFQoE6pM6",
  "key38": "5HeFfz8LbZVgM8wMkmVUfB2UVqGmLFDJWTLnV4Ed8penjgxdfcEVsRwGQetA1cQATWZ5MvbLRc1XkcJ69m1WKoeN",
  "key39": "oa36rJNjJd7chdSQ47BqDBh4dEHd1gP47NbFCctjTfUwMioGZ6H8DJU71P6fuiEnTbHHt2XgeP7iiFXA5B9yPX6",
  "key40": "5ehjTxGMFDbBxYSQviLLi8v5oJ3VxaDzkBygQg1mfQWtDLdbChnPBg4VYQxntZr683eqkDi4xsvVhb3mFrCWTTBw",
  "key41": "5ny1yperY1iUtDkaHJyvDeaPsqWyQVFNTeZDHuYjhp6NbgN2gJsJ76n4NrUezorih6nHs22AnK1sye1KihuqFHTW",
  "key42": "5RYhcpsVb9HvPGRGGYuLoz2RBcNpDnFTuACvNwUWRiWBXpqPEgpLcmqyUqY2cjLjsJu1bSM7J9pZhh83k14RzSvK"
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
