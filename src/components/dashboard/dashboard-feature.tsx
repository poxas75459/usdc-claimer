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
    "7cpsZCj57BFMsJgPxZjyw4BoriZYFiGFp7Ya3p4rweDqeQjgnee4NmLqWgTJB8mfXjdTcCPPhrT1MZbJBu7KFpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjwLKQMgoUPF4dMiSe4Vt8yRJ5Wf9CgVV6Hgft2f5TxT2DD6DRzGofPxRpKDEz9ZoiztDuis8ASkS6hMALKuKGk",
  "key1": "3Y2SQPftAY7M4pWBYPJtspcHDCueYFW1gZrMbucb555QHkbTzkZBhKRTUuPWN9xM1X5BrGfbTaNYsz4WVFhgdugu",
  "key2": "MbwuuSrXxWFcGVs4DtXi8rjwsSrFEncLR1pe8qCAvwNudC5Q3V95sxhWtaRypwPtWxULWgsiyCaoZdJgLf5YvbS",
  "key3": "4YweRgyxKG95WBTZLLJd9PHAfzMBtBQpmJrMeC1fUUqnjezPgKs3gKo7A44jMat2sNtdn49ATec11mmSSo5kW3Ad",
  "key4": "qNNrXAqWSY4PVCAhT93e1sUEMXc4dDdqmRU1QwibX9t8qUCzHEVwc2Vjj5wEKGRNL4M4dhXvN8aEwjKXuTN2J1H",
  "key5": "5dUYNvnS3PowmZM5Q77noPCR9d8rrVfCdLZAcMoSL8gML6J96BsjWzdBTkMu1UMLPQuDYWjTAKpcgsim738UPbDA",
  "key6": "55dJ7mNS4D2vkS8Aw5xNFyVZuXWu7VzGWbDA2v5d5ezAfoVtThvqC6D8FF5MP5gwDYcoAVw9cx5hhG8BcmvA5347",
  "key7": "4K6zthvSkHYLqRZuQrznBxZEJyvSXwSadHXBtTP5vbNkr3nQ9dfVi7nrz1R5Xw6c54P99u8z58dN8hCrH23oLhqM",
  "key8": "5KWhaYMCLuQR2AKkReYiUVZwc1dgCnKPzwfhXCfpHMyVTyeiDBgqfewE1Qu1pg96huTrckG1dsvqfijSiNchfeQp",
  "key9": "4zdaFhzQU1CJtzsPXJo5frx5vP6QvrG3HpbpftBPc3gSqvx7NQhbGVC2xVHPT9iDs9k1U6NDL5pEzB2ntPM8pGcx",
  "key10": "53BCXRTJRXzVFDC2JLgpxQED9dRhbjuEiz3i8tU8WYCccJLMMmTutXKPgXcn36amNwk64B8Mit6WfHHZMpbHZGZJ",
  "key11": "4tiiN6tvc92g68CxkJMJ1PnAydWnZG6uMjn3qvpzkLdKguNKod4A5YVY5v5jGuRHKriGZdt91Kqr1U7YSi2nc78p",
  "key12": "2uYz12JbhLJdeqQu17gzwn9c6EspfDKpEdqwFnRJXTpyJcDgWkeZNQEYQ2omuEYuMLuygQ2qVCMYqVfLeFwLGHJ5",
  "key13": "LNezr3kndERqh4eup4hJPQsNSTGQGL6bJSF6RTzkNDmUnjEePginxL8NuvsU72cRySY6ysGVt9RwHn64TbSGFVQ",
  "key14": "41fwNcYytwJNcGPLBJcn9VrwwmYTVampBvargrKYLHu6Wg681TKLZLnjaezvF85fJpGYwWU4nSoQzkpSTsc3FLUU",
  "key15": "HRayCJFEZnodu3Asy2LFSnG8uKqbtyZqkXgam2rFuuWAWQLEZH5NMFTiy7JApKQEQWCvFFBLzv1S5pB2y62Myxk",
  "key16": "3TyStyQ7KxgDX5dCQBKxHc4sGHmoN9JjLGnYsRgnyENL7P8GDM9dyPiiSj7bBzrJb14vSKvpc3uWioaSbTsPRZD",
  "key17": "65XVVVXtkzUv3LHuTgxibHiTVoShiQtCGawKCFdacJj3qNEDvZDiQrtGA8hCym7xHux2bgS9oWV7ZfJmSCmFuBDB",
  "key18": "2cJUYPtRwsgsdSRJADdKUSxua7tkzoptbFB383X5AzvMZRtehByQh55SEBefQSTKUnANRmT1uCaV2abQ9MUA1vVx",
  "key19": "3e3n5jhKgKmztDsveKYGNvQNXcyZbckLw8iZsmJzJAea2uo8nCPg3Kidg6d17NiiUuguhQrGt3ijVEUhDB8Zr4WM",
  "key20": "5FoTbiAkFJLkLzPKJnCPxjWHUn14y8Xn6HezZFiMcSnycwQN8c4jzgWNUvtdxZDCyoxiN7B6uD8eFXFX1p8UTexq",
  "key21": "3HHcFQLUXzcMoPhDYsjCn8T2kQdTWB9X6XPazS9RYwX4aS28LR7knvVBMqoB7Dpa4jwuXY7BSBboH4FmyxdwecDg",
  "key22": "4zbMt2Gjw7TuxWqKQeJptC5dgEXcSPZts2HZC2DwUouwgERq3ttdMUooth8mEayJFF5WeGosr9wYoBUtHRw6gts2",
  "key23": "5FcsQ1XheTnxkHAtzH2X2Btie2dHLw54PhiBrwSUCdLCTWBX1n5nkz93BobKNPGHCuJ6uss2nfmnTFcmCpZecvXC",
  "key24": "Rqkht5T73oBZNNaatHYh2zAGv5psLMc2ZypAYHJ3BCtPgX3iSYg1L3D3oeRufU1VLAYP8LHo4tN2cQUAUySdyxQ",
  "key25": "3ZthKJUuWcCUVKyTp6s7D9dd6GAr9pnSZ6rhbyHXo7oGZxrzhBmnbFJtG6YQqEU5D4vk39N6MXGV7HBEBnpFJy9f",
  "key26": "2sgG3odgXTgvf6V4EXmcLJhtd7BNf2MpwPFB2PE6GUgwprHKMjNNFLFXnARsLkc4AdbG4qF7xmsaYC5XS9oK4MrA",
  "key27": "3iRtzZE2VaHLF5S4EMd5fuJrk76qNqhKskQv4CksoU8vr7NzdMFSQq76xVQT62YCiZBebkofqq5vVoRTee9xdvG6",
  "key28": "4KhtbLdie9E3TuApBbQY294fPd6NQ99AHVYhzqWswj9fnWRTucYY7Nk8LKKoSd9C2DQUeyaEjViRgHBcumw9QJdr",
  "key29": "2br5tMbWBo7zWkbqD8kNDQqAF7ywZ916CGamTJQikdQKQEgrgPq1d5XxHDDemw7BSZw2LYFUq1iuSXBS2qdxmBuu",
  "key30": "fA4SdTdrTEFyg8MWyLW8dh8zksXeBH65xJ1VU17YdMwbhXDEThY6ApVSPzduMYcFLyQC7qcC7a5F7EUfPfgwLix",
  "key31": "5WRQP6nPLMEaHbzqxj6mXEFLKBQhYTT2jzMEZ6wBhdFVBv8dAzT6zyuNqDAS245XvzJCBGVeWixE4hPPih3UkPA9",
  "key32": "2io5cSKcFeKvFchadrHNAXbXq4PhjD4arpsfAcKJ4sDeWvGjDo1k1m7FLqRnnmbeFszZgbewRh84VzRuPUEZYsy8",
  "key33": "4U9w1hZY64z7od9SE3eX3m4sz6kcaax3TsJ12wuKdGY4N4n3BWncMHHeS3GsCUCjWfNtX62V1WAAeeGGyp8TikQC",
  "key34": "3KHQHEspGSSrGy31fmX7AVHY65fsBmKSPupK5GYoEXacQNgchauLyw2WCWUTL1ot9wwDAZrwKuuJTTNtM8d7LeqX",
  "key35": "29yugtSHXLbNa4TTSAoTadWvwemWWBHWBWeXkAmdgspqJvs2fc9As9WWeDsFDNKP4nQ2SUjR5Md7qkcZycQLm6Nh"
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
