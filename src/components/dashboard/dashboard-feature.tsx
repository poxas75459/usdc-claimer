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
    "2HoW4pXqG4Z3qWfHQZe5u8iFt1uethjRxrexYjmWVqVYmPca3YEFCTF3UrhAFuKJHSiTvyfWPBW3YYGMXVq3dWE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XfMareZtUc1ErQiL3dqybRBwLxVTVARi66WUzE6WCLYq1UvkHRqDiKmH2vPiRPCfsdTMVKs6r7js8ratUnVghtB",
  "key1": "4vY8zH3GPiaccpMffkmiYwXoEAhWE8sc2oWNqmXQtp1JA7QiXw5tWUQFBKWRrFNAHiQMXFX2KuJRfVuyepKyphba",
  "key2": "32eJvSErmTVs6LrdUa88jXm2HgVirCVbL2S1ZyXyoJ1gteHxAfjBnxxhNXu9zFzHBhR5Z2jFRQNZdowPVhSkfLuz",
  "key3": "4Lhnm3Jxw4cHtb5uex2b9BnRp4rHusRHBnH9WPjLqeUeagtFmBehfasJhy7JjFjkK3SryA9YyghSUN7jZEB2ufRj",
  "key4": "52xPFggAzMqVbSY2gK8k5VqyELMeuLdrsYX6tF92D8WHpUXgHAVNextWZtzrBaWrFm9DmxWSNB5xWUXLFZZTwifZ",
  "key5": "5x9bnQ5yoRUFfZ5WXtsf8t2oD9S9YSjjkkiF67E2wKnd11rySiAo5aT6zBT3rr2c1JKsY6GFog5s3ntRzBFpYVjA",
  "key6": "5xeuLtLJrtg7UcZ2gC525fUR1KCTbxC4vHcko4tvmtrtXFyriT8gc8W6NSLEeSbZgC5jZ923wt7WHJTJ9qecrBFj",
  "key7": "2a7DE3qLdWj76gDAqddDb3ceps1Y1YMzrcUFhjkjhSjd9mMDkvgmwAAFjT3zuYZGRmHa9j2GUdUirmVWmSHP9pGk",
  "key8": "4RDgrMMFrtpiCCMmDo94LFQRfg3wWbZvMVEsv7LThniSCtowbKh659oNxULjh7F3sKs1vn2jj11maL9p2BDJ1xC6",
  "key9": "48ivC1HAxJpJmSXtEmXeRnKdghiuLGLrz8fRiXRbbU3jje8mb2HehjtqoYo5wNvYgJBG9EAZoffsod7a8CEC4rQR",
  "key10": "7DWAUQMq4L1Ytwcqt2NgWa4DzVgUHFQ6YWh6YnemGj4jc9VghxmeZiUhd8jsUuQg69Fe9mxnp11UBktYFpD9DiJ",
  "key11": "5rEXFBSNGvTAsQfNmG7GcLwYAzDqyjPKExv19FQJHretXaoRfDPzdxLHkkWggU2VydgbVq8kHNNKXmFiTNprT3BA",
  "key12": "4Z8Dfy8j4Xn632FC4vfJGpN5v2mrdxWsEy4dxyBLVD3g2nmtUjuezGhR3WEoq89cMQz95ypwX3gmxbwSciGE9YFM",
  "key13": "SzhwDZgVCBneK1vkRboyaGt4fEaKZ5FnUJZC4tNt1LwZm28PBXRDEz2uBHsT7uBMzCUGpYhhT3HhgVojAdc13pr",
  "key14": "3bqyof1hhMM29Yab4KMGFfwL78sGU4T3M1FDTWvNh6JjxUJMpYU8cD1sJX5ZKLQKwWiiNh1uV8xvFpJ3Db6HaKV3",
  "key15": "5EZJk2VFvB3N7KPM2JyucvwafeTqmxeEFPmg1wMoZoUSgbSbWT3drZiz18TnRXb4A8oDcPdZcUnwV9XtJwn8AVye",
  "key16": "35NH3DMyAB6dwUMwFqy23fNSguMATyZhbpJZpk8S8DaZKNQ2kveJYHqgWr6Ae634R8PPX9b8JoQmpnpvmr1dExMB",
  "key17": "4bpFtzaXuNZe8YFnVLzDra8BQ6fjrsuR7ztCbtXBdfFpXpwbfFi7QwF5sDGTaJKUGqsBYfNiQKm7ZfJ966dQB1zj",
  "key18": "5ARqRUKdtJGGzpqZtU2xpPHWBsZrtucvk1QxWkcpz9CdaYVzDbriRvDwWrd1UmeoXz6je778NdjEm1Pbk2gAFh6q",
  "key19": "2FJJBkrQwz9MJpRpivHXEkcwQYJtxoTGP3ND8a2W5orzcMxt1yJ46Yvmn2rio1dLLGNJunpuuKr6NqDS2Hed5mJj",
  "key20": "2HqwbNRDKr2uwZsVc3reoRtjdVCPCLAN6i3sTHz1z3cibPcPiVX1DdVMgM2Ms871jiGTVfWUjZxy2nAiKKiG7ez7",
  "key21": "2RxcCus7Y65KKFeTCgWk1mUyLFmZqjiVxGJjnzydifTeL3JXXipFuoNkHjoi1V12gUPxQmNu8G546TxK4LCsm5pp",
  "key22": "2pdyMYC5N826CPki6yusJWUu1S9VRrmjSkaDKucaooRM64XrbANDhEfwNnCVUaF8QStsTKRcyxzmYSS9a7NzFCSr",
  "key23": "mcRK5JcacqruqDLKpbEoFaC7BZnapEbtktHe2LJvYzxgGJMbxbNzeDjK8R3aYC5xGndnDMytQRZaiqAjEZzSoLU",
  "key24": "2H2xXkiVyGnxHv6HE2XNsNVi6qC2M21fTKtviFF8F16rJ99ZEzHvZjocJb7GvF2P3tZKK8eKugqCMfySfeo4WT6Q"
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
