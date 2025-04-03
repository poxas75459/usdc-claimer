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
    "4ng42dpkuToBeZmchQRMExwPz1adhdnBBHjyqmj2YDbSuK7w19LkTFgE6sjt5RJr2nUwTQtp3LfDD75tU3kJqYQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26im9hgr6PqEeBnFJd6iwfxjeQKXDfyF8j2RdioAvF7awsDFCjdDKKk8d33CA37isswJd1D75BoA35yjYkKRWrd7",
  "key1": "4uaaMHMVukhtPTK2bifUsS79AaiECLT5uWLH4pyTnWt1jnZXMSQRf12R8RLJHXTrN6UyXE8MkcJ5hMio7d1pKZY1",
  "key2": "2ThCxZG7ASCiukGkLssF2HaYXXnTXfun24jD3dgZftsF89ELzArhQgdwySxaS2Q8FVF99nZyHrZwJp15bBL7JdYZ",
  "key3": "2moZb2MJyowLUiJtM4JihmR6bNKP3UeVoKvnEgH9BnSjXVFqoiQNuwzhzCWsUrZduD3NkGg5x2CgnLVJBT4jsUDR",
  "key4": "Jemt9hTEtGnRMT2UEHMm3Mwr5WzXxQgRFaNjcJzsyy7JMK9xVuCVhkjijByNvB5BX2VZux76N1yRQ9idy14QSQ5",
  "key5": "3syaedcYGbvt2ypZuPTcQyrKu8xwRwrurTcP2ok8Lqa3F3GxFQo9NuSreWAa84LZeGekc6FSSK1KY5m3NcEum78f",
  "key6": "4NQKsBBhCp3BBXrJ4UbVRConspA8FoZCoqg2RznkKChMXfdwZuXEgxjQngNJrfVaTP9MxNyAH3pRL6rprkuxGwJi",
  "key7": "3d6Vm421t5tL1pPVVrR26QiVPp1UeWu3iJ12uguvFMGNhYKp7FYz7V89LcK1tYCEMWfgGW64YpELdSDv1QfeXgmf",
  "key8": "3uK83sDVtCXtTsrdGTHDddQpDAvSst2WBZjUCSZZdiPzkzHg2q5yQfpSmrQbFjPykZXbEbMqVwNaL1sbz6YD8YMD",
  "key9": "2rX7b6f4PAUuMUA3AfErHcD5327vec8PwQnhdK8ZESy9Qpo6eXAqmayhHqNikg2274zeJp38MGVMq4YHveqvmK7u",
  "key10": "5f4yJPtQYM1pTi7EedYgqRNCB5sEufxhd1mGFJJ9wMhQ4Af3EDW1vL32abEi7sNcB5g2oH8ksK9BeP6G6gpze19V",
  "key11": "4vVWgMDnaaBFY4QV4GM7BeqSX7WS2FFe1fLiAiaVvHBPiCCWg776f4hy7WUFoCJKxJvdC93FFR4zCbbuGEYTtEy3",
  "key12": "X5rCfVH7E11fkiuZauDTTvR2YUhdNGP94TDXHW4MJTN7PwFqbm9pBqzTzFgA1ciLK9UY4CJg1ysdjGmHU36e7xb",
  "key13": "5MMyph5W7CwsCqPeZNNF2Db2CHcu5K8B7XN7hVNzUWysdhGA8mATUTodWt1yGHNLETiimNUYR9V4TgEqKKDicf5j",
  "key14": "2QpJdosMbkz2EP94uiNnB9pMDNGXYxwm37vNP5tdESu9cwNnqevwSCbJQZUbpK7Cg2baEdLRhhBQ8gpu3eocBf7c",
  "key15": "4ocUr4fRZgJAiodnUDP8h3Jekia7JoVJ5J8XUkuCZ9M5xRyMeHMmpjw499yrJny63EpBgck4dYk1HQsodPSPr86",
  "key16": "24CcniPovw5ZGpdZh5z2NTEQqdpG3roEKMst4c2yD6haYRuJCdhWzPBWS177voQQ5Uu6Jf4L1k1bKmqFCn457EcM",
  "key17": "3G5stF7qDzYJDcgEedTFwrHjRRMZ7vZBzcRYR7YH3PyMTzdNa9MwM4fNyMXjFj3qmugq2QB8MumuddunGsMY6Dwg",
  "key18": "4CYuGBfKuNb96BBdcYfdPVkta72Xrg287C4Zc6zmKgNTaLpWNssS2adrysFSQgagX8pMh6KnQNxa66Md8LRNgEZk",
  "key19": "4ehSvKftVV478dzym4NuCBzLa1E5kYGzRh85DsN1gAboZ67nna5Ku2DuJbcBTwnM93jXZAM54HWYqkpAUN9QnNah",
  "key20": "4DvAVFTpeAZVrZ6d3yWdknWTwFJMfGt4tWM8eLmdqBvBx23pkQTiNvmDM2A26w3yvdJvyXbQx8j2piJ9Dkt5HypS",
  "key21": "rc9wPy3wPE9TNzqLdYuocquh6wy7sv45KSDDHZZ2EUPd1xUz1e4R54n9uFETBKz58KjM5XttxKwdtbJA86egnfx",
  "key22": "3NwVJNVyxeB1yZjo6XaHHJRg6oMfR25oWCNkDsg4s4UABKHdNC8ouMV7meupMKprfihvo2kq5Ej6KT7hD2xY2ygy",
  "key23": "42xyT8fHYYpQTTWvsvuZJn79hjSW3HDL3TKSQd2irKQXpYkYUc3wreWsjesJXgVvkWJRfZvbKXF5r95vykGnnAvi",
  "key24": "4Ep17rmP9ktPgLxoZviJxjninspbcKcewcHiAMFvco51uKZeYFUyPGTYH1UKrcx3yNxEBJhps8N4LdFPQpJjJPh2",
  "key25": "258yAkh6U46J4ddQkJoUewCHub4Ufj2gQnrJHPMUAt16MCmXLoGUcuYtG5YUu6uHKzwUaomCXPfDepgj9SUHhibg",
  "key26": "2sarmv2jKQgtMnEwGvAzfFNnRbX8rAPhij5B9bbaDofBfcy6FMNTb2CURqciZr2ewySvDaMpa3ZaxMJt9Md2LB4n",
  "key27": "2xANxkgFcDG3iXkqWDyVZ1tdA9heWtugextzoE7n9pzXsrpXRMpdZbFjYyLFunU8P99n2fHNesYdfTbMjHnxmXTK",
  "key28": "2NAFbJuqodduKS17FfkMXiko3D9y1jsu7s6surFmEcMVDrsjx6TRecAna7AUKBqg92LDeVFSv944xxPp3mG323t8",
  "key29": "4vo9aymV3F8FgsQpWeHHAgTymoKUfsXnMATKrsYC1HWmHeku1tFi5YX3PWder2h4vXY5YeS7942tDmiYW9aA1Wj7"
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
