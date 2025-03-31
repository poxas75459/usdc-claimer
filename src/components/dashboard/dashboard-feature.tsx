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
    "2UrZxhQbJUbFuWEujJuRqXem6yeZQoZXJXQcXdYuo7BTp8w1MHj2mgEL5rvAKjNwCnV2Sr9cFJyWxr68y8CicxxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwDebQKsJbC5cFNKXyMmD4ftW1hMqLzRXZpRM5eJqR3oTeH2x3fTucrGBZ3myEjGMfFvywpjT49ArgG35TdgbX7",
  "key1": "2xfzMNWr14nERNkDZEJbAPHpKKaRLuBLL2hx7fU1FcQWEFu8R8zkJDSPrkZMzDZpbnv5xpKQZKNcr4yzqPxshaoE",
  "key2": "siqDABytfHadaXdyiJWsVE1v9PWkxPEWo4pkx6fJz7jtrXyvoen6hUZ5jWgfkKr1Z2x3D4D3gLcvVSfxA6qs5Aa",
  "key3": "4MVdkpYvDDz8gFKgCK4UrZBr2NgPR6YzseFew5afgUhuZcHx8TCg7CMDV9t19ujbRu2Rw7bJvHvUMfQyy7ww8RaV",
  "key4": "2Tgamh8Zeqfg8wLZejxjoNZWbsehsjR2G25nb5caUN53b5nW19b5sDK8F8En8u39ZGbjkzQLBBR7UWSd8qeXLiyG",
  "key5": "bAa3zNyAsBBRphwKpf24w29j7huLqewBnu8GPx6VjTV8pC9jFSLEZ6WCPmGaBvLTF9o9rk8yM8EJcE8z3wSLfW7",
  "key6": "x8CnFZUM4q3FbjqKvVjc6Dnz8WZ9S2SMJSvAwzfNFRhtTg9zZhqWy3SWyHPAp2mYvameeFReYZqDDeo2HjpYpWp",
  "key7": "26SnWZ3dmhThMcQ8B9nKVc8q2Uj6stUmPC66DBazmKDFrnp6uXT6zxE7VQAQzbZ1VP1dkTJRm5xX831JuESC8LZy",
  "key8": "48QAnS2ZiiweRiGBzLRrYbBWxJFxJ3fSELxpdKTNFKYs7fwgeDSbcEfTymFSkeGdNitmDnQf4GxS1NFFqmGSiNQD",
  "key9": "36xVcoAHY8TicVp1NBawXRHePCekuRGy5hRYLVEimd2SaWdXGvECfifDWwQgjLjRGzCZboKCKYshCqTUgjK4GmyM",
  "key10": "2ZdBEkBnwuruXAgLEtUZhFP6wFJCemDxx3fPMqYuMgCcHxWkbNuwmqDuvzzaauas3k65yvEL2d8UfGK6WoRGbXXm",
  "key11": "2RvDwMCnZZoVC9Y5BGX7vApUotuPL9no9BaxFMsoV2u2bGq4QpZr12LQcpVE68uNMtC1W3XWtECkEYVZEW3oWMXB",
  "key12": "Dj9gxLKm6h9GQ9TxQDCEJLsXQjPbVXc9aiJ7Q4hgn1mQ5W5DJMvvFfmUXgfRLbJsHQ8YNBJmBeLHK3iR8eqdpu1",
  "key13": "4TMUFAnupkf68J3hbGQ1pKca1MDvULpkKjXri6KNF84gSwSvLfKQxyCUBwSjZRCAB8NPSvyZXNcye1YMZhMDzEQu",
  "key14": "5xWP13F5V7p5SsASJBZoZfNJojZv6QN8QYB32thFfvRYPoPaK6ETnzAKSc8nvK2Z4xoFisaraossgispU9Vd5bMH",
  "key15": "3bxBy3NTu6G47BimnVGm1oofxQdBcGRnUnAEZvtuSx3SbvDyjvmMrPw6wDk61nqE2Bm8HwKKsfuJhAHS4t2aptQx",
  "key16": "5nfS7mChEGVgTwWPCwpC3thAHY9w3cnYrYeLqK6sAe7RDMGz68aqP4aoDczPjRcwvBZu61Jz7irjhGXPEPnQp4qC",
  "key17": "4idbVdgaJJVX2QT6pX59pskSN2sUiosqgutudr19e5mswHEdM19dpm2wMFPF9LmaiyGWBaE8h2gB2VYhAVfUz1uT",
  "key18": "tPtYwsorwW8T3gKboZvPnQNKhdku4Xbt8tJUhxDTufsqd2hMV8LM5haD1qaq68cNUnHYucjLepU3zDbq15fHDEJ",
  "key19": "4UqkH38po5kXPBtkqrKiPEQ3T8LAz1wuFypJeJUxZsHtSEUZe4Dy3cETsXEvuXSYnKeCgNm2r3TBnY7nzi63vUyt",
  "key20": "2TvBPeMsP3vB6gTXU4ExTPXgi8Robn3iY7kVTzRLCD7cTowCqw9wNA1yf1jhU7HanGUKJ65KkkhihWhNgzvLLyzu",
  "key21": "At3Yfq3N2mHe27M4amiPayacWmKkvCFi3HsRHgWm25t1KGyCduphAj14cNAmJmVs8xeZsS7u5MXttaVA4ES76Qy",
  "key22": "3QUaAPQ1GLmYUfsuzFxXU23c91faWauTkL9474xyTnfbWuAKLBWDwobjJrftZdpskzp1x6Ry7ontKAYLcfRGtFPt",
  "key23": "4MgK6t7QnDgMheY1WoVfuwKwLXdPhpHUFBffpdmf5oxFDLMPzfA38NkgC5VcLdwzTEDwxK5NJrKDbLpLW5GypPGR",
  "key24": "5BinMZPfsfZ99Hhs2HA9TnziRk9CDsbQiRi6qQJmwUgxqpD4bjYABht2HgyxqjabbeqivSF72zAdw2tzT1QZoeuG",
  "key25": "611xF5GaU6h1aYsoF3F6DyZQBHHBVoLS5rDBdTVHwZoVQ6oC52soaE4znFKge2hxmV1u19Cm2AprAQizBVd51GiL",
  "key26": "5isYDFesUqVvufxvaHqSzN4hLSyyq6AeQFYLX7LPwMzaLR2cP86VXxA6w1dqUCeDQfEiXnn5Y3msJp5hXurDaqxj",
  "key27": "3y3AHCoMqHzkfhFnaF2Q5ZX1oPHKJjs7AHYA8dcepxVo415sxqAaDqXkuZHfFzQ3oL9uz9QmnZxgo2kgemj7toP6",
  "key28": "3zNwHPzNXaFD793KJMSquPj27NpaEqL16orKQPWFkS5ywmrKSwiX22LL9FsYk1oT3Zu3dBiNCQW6xDD5mP7YbQPd",
  "key29": "MbVkyJXwo86YMZC8jxb3zz7NDrRb4ezXdgDGnL2m2vPuqV9DH5j2SgdeUfkCGLoCfRMYFuEKN3nFVwzJAEpLyMZ",
  "key30": "RqrZZURmLMPBBBeXyo4866w8RKq43Lmbc5UrcajsPa9E2PcV9rsCqKnm7zx6ZeZ2BE5zbiBVjNvNQnX6zd1trxX",
  "key31": "4ewVEFDvZyAVUqHNJEaTmDXYkRCrpvJ7VRreXcv9Mf7y1Qwp1BoT9cB9kVgM8JrMLJRDziM14SPSXXSimyynUQG3",
  "key32": "5LGmfzGAGyvf2NmUN6AuXiFUTKkBPfaPzDjKjuK466ZnZKdDAqtScnqWoQPzibzTAc4rvKkikUpd3feiv8sA4UqP",
  "key33": "myV67Ao5HRdu6devb8fgJ633YeGQyCzqT4Ex6VnVKA1zCXKNNpqTdVpSe4pjyExtMUvP7rrq4EEaAqrTwWLqRAX",
  "key34": "2NWWiaeMVNThnYaSNCv1iZXqYAyPwZEfF2kLQ66EhhEGGaHx9xCA81Jb6v3gk4GtM5Nt6f7ure8gT19wzLa6ZGvB",
  "key35": "5KUQAKYTAaJw6xSTAQzvedPPDyq37XySGuFTtTECZNGYsMk6qtoUkNyHWpoHJVU76k7d1AMuZTGkiAKKUeuNh2v7",
  "key36": "58yxrUdMdGGu9i3xujJGm6DHWyPA82PvWsfNewiDaQook6ay9Y84vt89vHrmFETB5rDcQQaR6mzsbVQncqTehw5j",
  "key37": "oAGHQJhRhUTm1TYwDWyShTysGd6rr9D27wNNnSzdzQM2gLkG1GYE68WioYKLxC3JUjBLUhPky4XEeXrUjVLDBsk",
  "key38": "4t59SaokJTSttm9nGKv9E1a7AXUFfXMtsioD56zKSWUtT46g58U2SgeZ2cr6CPQx4kiX261URg34qtFRa2yoKPGa"
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
