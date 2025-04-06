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
    "4eMdFCqtZjP5WSrcF2xULfqAUZN4FWzEhspqn6SaxyxkA7u4uhDJqen6GCcu3Dj9fZo9qn2Ph8G8wfeXDNN18kTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqYpHMKRNon5EHanZYjR6HLFJHs2X7Q4YNhsspfzToZ9wd7U6pN5UynuDyiewyarCQtfTWx7NKTEq4KUhE7Z5fE",
  "key1": "4BbtnPpe3tCk7o3Y3saaK2RoPjTnhNKe4VbnyxmzVGb3q138V5Ykt4eZbuuoeiVfo78CaiqEh5A47q7uENSAXPcy",
  "key2": "4iU82pV8EVGwFRNRmWy9KRgQdWDwFX9yWx1JDCUmLMUbNRMiWJgX1v2nbXqAba2H85LE9B7xps1G4pw4ii8Kqku3",
  "key3": "56b7Kb2Ccrc9ANRo38xsLL79unzSPGJuvnFA7BGeUcQMonfj5D557R6a1kMr9yi69x4798bb5Ue5Z7UbZQYeDgJE",
  "key4": "5QGPnYHXj2bEibyQ7XvMymeCJxSS6kx5X5UGBA3B6Q3X4NSKyPZDcbqWrq3gnmkn6YdtdMEQkMmNPVn1RZWAfBzt",
  "key5": "2LZpHKHkt95ZKgcDsJW5XSGq8AxGfUMkiMXbeKiarM4YkWqq59YZmVhvZvkjFXg8Vzid1j59mvHCJ1MV7PiabH27",
  "key6": "35doCkRRpuAVBY4RK6vjFTFtXh949FitwuJywbhs4i8reN5ikmxH6kwQ525LYeF7qmd2jFkgH3kTEYVhaK77gBEi",
  "key7": "3zmDNQsR3r33RL3oK23jUigxuW1Et8Nb7wZWcUK1CxLTzEBmWFnXQY3e7cmiA51VhN3CPDYtgkmgbJomuZZorH3B",
  "key8": "2Btt7xGFhpAHGz8K9xeXrrPjihNCnazWiyyJYf2g3gEyvumsfLvCQN9dqpAy34QQckoobCHggWLbRoBWiwqezGWk",
  "key9": "JC6MmF1M6jb2nDR1v9E1q97MBDq5rV734A1eBR8s34d9AjCtNJf4LH1Ju2T4PomZtDw2TFX5GLWDgrbFmd66XrP",
  "key10": "2JyptCNPgwQNy29KWu9nEyrcbpTgBZq5AdGNLQRo1vALE9tRn6qz2AkdV4r72QYeRQdM5TyyeHesPGwTY8mRzsso",
  "key11": "6rqiuWeYYzqRhK2RyDrVGD3EQBTiCAMFXE5nyzgCASQubNfM5hc2BJW3dvqPEuDXUdxYs7bo2txyco9PvsazqMR",
  "key12": "4h879vbiz6khvHDbgiJsN4GSpghej5eePFSph7sfDuiNXjbRP4NPh211zrNAagnKpcZsEfmDiygUNHjvnjYPZkEZ",
  "key13": "23JN2sDptxn358eT2XtoDVTQfmgo3JQrudzXrz674dfb6Rffo1xSjyq81ZgDPDUSHiswg174X8JXTWj2d2Bkh5B3",
  "key14": "2P5dcncYEnrTgN7Jc7SQmrAbUdioZyUDB8p4e2smfg8aknzPJvNzoYRDWnJS8Hsq9cLagcHsy13wDzCJ8vk8RZnQ",
  "key15": "2pYKYxdJ52YXHesWJ2m63aQg9n2v5yc7CEvMxT9TzpuLfwebJq9YcMqNYA7fZxVL9xFM521863TZQZ1rxHoUnbFk",
  "key16": "3JBjgwfTZp7aDr71ws2zS7Unpd7Bei41u9CJuACa6ACaeotrgKVmxidVjho12ToLaJ9K9QL1PoAjEEPAZh13sJWo",
  "key17": "gAr2p4ikxRa4SFjiYVUbyCYVVpvvsQUiQ2U41P6CYckioudb6UWZ8BcgRv7TXTsVJgRGz9Pc58CQYGfgWfqNRoN",
  "key18": "5mxVwHZAXtQrvY6ZQEnpwsFNpGNeyeJZk5v6EmeQdYs87NqkfHktz4QaojwNXGeZi9AodfUSGScDJHhXvGQuqxas",
  "key19": "2KJFPz8qm9EVDN43WhZRCpfg2EtMqLdmf33VGvSFViWLGFoDtbCr8PwT1bg3mD3jJrd9PA7WjNt7kkYANxiEZgmq",
  "key20": "2htXrewCJWhtfMsb6rujo2xmBDJKThXfExisHBogXiwkyBPKTpVBWHDzX8odai3oN3NPMeqwFbTdXn7RhLSt2rDT",
  "key21": "5MCXf2LcSW6nu8DZyUekC96BRxTf5Yx5mCHxwsvdJNtYSAndtV8xekNgeSWc384vpAAHQsoWcR3mPAc94rhqrbUf",
  "key22": "ttgB4W6jVUFnvQ56gM9CAfstWJaF6J6GGA7ALCiJg8hNgjb4qfsJ6ZyVKXbchdsPNobdfZdh5s6kGHRfPX8CJ8q",
  "key23": "2QRyaoocAxsuFwLaqw4CcEQ5WDTCgG9iFSTxdEDUVUvHCtdWhVJ1fAbnMLnR465KGCo1VsrQS4yViFaMZ9cAJwLN",
  "key24": "4MB4mwYRceMuvYdtPeCUagQCv7cewgCBFyoofDG4DpTSw4yweXNe77ZRCtwhZzWmo2DKws5q8heoK1GHHfH5p9Jf",
  "key25": "2s7Ep2YWBQJ86H2W3SS8XdQwRWUWoLqXHUihhoKF7wbWgDxzRXVaQ4z34JdDg7eUzNH5uPPFbu1FZgN7t6VJ88fR",
  "key26": "4rqTp6n5s46Bvgkcpmf3TQ14U4YX4A1kehWYVAdvmoJxq5KaM8NDEoW8hMfuUDLteTdzH2XjwgC6hsMbQr3eeQQC",
  "key27": "hR1MhCqbkzB5RwdN9hszYRx3nCsHSZURcZ2PdvhbDDXbcrFFNYTuA5Gz5REXfJQY3PVTiHBaiqp9vLmP6F5ZY4o",
  "key28": "9Aiq3bmWCioxFJ44t9mZFngEy3FymEFFQmQ3McMpLVWdLe249LL9eFb9vhWYRVmnQ7CtpX74zVHq3kRmk1BsPDo",
  "key29": "3gVyNaVBCtyXWevcAdGfMxgzuzyxpNh9zVPChZ3hnyKN2dhKEKQEywgisoUJ2mixVU9FRhJj9LxkKjmfHMe1kv1j",
  "key30": "49VSsAsbfqwCCVRmuc9NqxKZHupPHwdjWWihhcSz4ZAKPLBqtAARLVbhEWWq2fJWDrx5HpZ4e67ALNAWtkYu49ek",
  "key31": "53zKF9pAsk555RMc3tmCY25zUPatBWBKPMvoMVHg7oGMLNVxWzYPZjRhBtWvqRjffNCCoacrECvwFRYxadtj8zJQ",
  "key32": "5mdpbMsYWcaHdv1XxJCuURno95GRSdkzYU6jNBUUeaC7N8RkztqcHoKKKNZAYV8HhTRYTKJadHWbNvNTYaymoVja",
  "key33": "q9qud2owg8tC6ZZ68rbvFgefVEbkr3nv4e5oqscR9wdRMSVcT8CKGFQxugBP7zC2Vy1ye8w2xB3JVS3x81p8TYu"
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
