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
    "2RZAfBs895epq3NhfrFV1R8bA3mtfst5mR6bRaXzywtSKKHpEY4tmTVkgo2LLqPu6LTZehUUS49D24ga57mRHrPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1Avode7dn6k8VmDnZKuvDJLTJtftmwgcYtkRGCthU3s7fPLY5Jtssiy2HhC5qwdS3SQmgZVdXq32Pa6XEy1zDX",
  "key1": "4V1R4PYBSdt4nxNVUxV8UnhJiHwiRFauiecLjKBrMH8TthiAbujGde93p9LQg1rdSfm8nfEBZjZ4VQ2NecBVHmU8",
  "key2": "4uTSBt8x3F8vdwCwehnvSwHLvSSNgTL4XGSiRsZX2tDaGENqt8MbqmddX8k932UhXEndj7fr9CL6zarmhNsbxb7W",
  "key3": "31fAPhbfoT1R1muXvvavc1TTqE6W9fh8182FS6b3HpFPCQ2HD2fowuu5mChfy181nr62Mn1Vy4brrvfr1WZgSqAM",
  "key4": "atzDWWV8zba2ZzG3sFCzoBzhobsKWZxf6zyoitiVX4BzjfBDq4oNfEsNXEAhcmzp7aqz74Wc88nYJtywPy9c2dB",
  "key5": "5nky2k5ahmysmjFKnXrb5o2yEg1chRxJ5M1t6PZmMJQxCt4zFpR6BwTHUKoF9wT4rCtpvLAW7ao8gtbYmJ2J1hCX",
  "key6": "4rDV8wqnk9jTEQJUxtBftdzvvS2JyBcCPdxMKxhX28u1fvorz4fePGteKSMD8WceRpYSJVBpArXBqFpddmNToz1P",
  "key7": "hQ3iNdt3r2P2XiLroCwQv8wjJAF9Y7QdvGyndmhffsVW2mFQycNia72wd5do6RCXDVWTSfLbUm9toEN3H5drnSV",
  "key8": "3BaR4nzVngPsEoMpviwdMRA29AF7dMTGYATPdReEY3mc4pss4Kas4vAazGSBgqsh134wEmCfroGckyX9h1ntXbWg",
  "key9": "42Zirpg4F2Xex27si1Npgy6kEY4M7Y7oxDY6BT3UwDweEd78u31gwmTEDXqEh92LkQj7X5zsQGaiiZ27vNe7THcQ",
  "key10": "fX558Ept6Q8dCA3YqWvkyUbWvJRDrPaTEH4t3WJNSrYguxCbXbpg2b6Xzc4So7Zpnhy1w6DMRyhCfbEwxpmAVRP",
  "key11": "2CUejcXqtCrMA3TgCxYGxn3JHxH84V69dE9ahSzvYpxuciHxGi6APHxvww7jDqAETTPdv84vXTJQJYBLUxHRtbWJ",
  "key12": "3hroqidq57zp56cmfwc73K58XTdL6QuQ3xzUztkWVMyeCFHbHswGthgtDC3G8SZFedcXoEGPZEt9HH2FzCAsjEkE",
  "key13": "2QX1xXGvT35RDLXzYJnsjj3xnipoLf2JQsgjdzd3D4Lki66WaTWkHQEd1qKYf9MYwRJf8wfXjJ7rpttXtJDUKtRC",
  "key14": "t9TkTyyqvDMSixGJEYJhL7KGDQmer2ahzQEqfi3qgm1gV59Hjz55feccKpoaQyeFBVCDhKEKyMzaNATJoQ487dG",
  "key15": "3hUXXchWEJPcTQs2WJKHeSjNiNT5tbr2i1d6GhYySkgTvRm7rFacXsb7e6qkL4kfqTwLxdv5mevSqJSttMFSL3vh",
  "key16": "5x5hKsqvm4RufWg4EL4h1Xci4YiXTYmbw2Re8tjXNosMqgY4Lh1g8RejMM99kAbTan9CKefjKrXypxYhudaRuLbE",
  "key17": "5NBAdudY7RF65743SWzQLoafgo6f9HF5CLCWbAFZ4A1REzynTnnEjWEtRLNntoFPKatWZfuPLktqQd2RcUfkyrAc",
  "key18": "4TabKoC7k3VCddFLTcgBKHA12t1B9ofByfTu1fj9LXwxvWvjgPS9j3mcxaXZp8QBYRVhe9MofQyyXzH6YVp9W75a",
  "key19": "47j2kKdGeZcwao5Dn2vXms4u1DE3BbiZ9EZS2y3K3X6cTersmyzhNsNTGVQvqL9xzAutc1zaDbtWRZTHfNqpZ79G",
  "key20": "hBhQcj9M8rDE7boqJiBH72ym4XJGVpuez3SZSLU33C8roDK8mwCgXFW6uAAcn1LhjWdp7UmkXCZx91cdRUPweVK",
  "key21": "46gxVb6d2YsArNENMLahvLqwG42gJKPYvLkv3GF3yAHv7B9W1juY2BtF1h5Nmwyp1VXk7j89LdsyUVLJfMMd6HcY",
  "key22": "4qxW6ZMEecFMAwETd5Xh7DzU6ukTivzGwM1CNMh5q85B8NXEdpgB3L2AGmjPess83o7jjiyLerjyjfwPSBubFxhF",
  "key23": "3F8uj7xaDZr6pKQqbmCLDQeNcf1KZuSUNfcw8YPSBh5j3rLmrvExbrvbbHP16zePFotcWQtwjZoG1kA6ZjLQxQEd",
  "key24": "2mx2rKVK6Q8xoFUn3SU9zFeHtFQBsPk5jqUJo7vsbPGqDw8EnNK3PkFcBHD7NwAXVFWtPPFLkGL1aAHGDR98xXjR",
  "key25": "5YAVEE4opyEmWvN2aB2VrDmMM8pnxZduGkUw24HVrqsh8HkLKcgg7mvVHdaheof2d6etdVJZySVCRLWhmwmau51u",
  "key26": "3pYsF4Uhef2yMMfPhzfEmxnPpugPmcx3XCdjMepwaPz43ZW6XvNNSiX6nhw7buLse2jj6HzuyQaSmCB7GUycXJ66",
  "key27": "zLntEwTe1MQdmArmx4mTqJbaCVxjbZT37hAsVFKDDuE82AxypRtYyEZR54FprnNLvGupVA64Rr8UF8j2RfzLgFY"
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
