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
    "4DHgqLhTLPP5xyg72XRoL2a8GmmBJ72eLx6ieJKxLC3aDSqsk4S579RyDEjz78gdGR12ZoKk1UemnW2MD1GHtEGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HcJKWoBgMwmX33TvV6jYvhQbF7ResxE6Khco6jR3GKiu4CdV1DTaNBCojSh7BRbYYyzFfa6EmawUHtwyBtC8owi",
  "key1": "361CGkiKGn8aUdwWYA2mtvubLvkwHFF3aXMEEpaAfh4wYCqfGdwASMJ2VLFaiphQt28kxrcCiQA3av82sA8rNAK1",
  "key2": "2YGNfgABFmUUszQThAZWfFvM9TMWQNussPpSQ8L5b1HnWrUtcNCST5beaih5sLPHx2QuG6coMnZNBG3bdKuwuSGZ",
  "key3": "4sJxLJFrREnNCHRGZw6ZQn33mWeDEMMGiYaXAqcqvTrDQzXpMZFEGif8hp6Agd69dmQSDJzwRorbVi93NfQS1pEF",
  "key4": "3owGXoU4UbxntdMtKVUZBy431Q5sndXoyCeCvWBDCXhdgrdCuwP5CyASDvWpfgbwnSZNsLYGNA2aiUCbwjo59DT8",
  "key5": "2VaUzoTq4858haCwaS6e4NXL6C8CbY1yzA6RhdS5T3uqBSH6di3NJq8qTU7Ab2kH5gpXvoHYhYuiLiCXTk8oAskU",
  "key6": "2jmZroTQxcSiFZY4vMZTeL99HwvoAxYB2YzRvwrvwSQQEzgusBUsNidgLuyeVaUkVs79UkTbtvoPUzSaqBgPF7SY",
  "key7": "3cpqkdQaVq1Vi2KfJ539pjDWxRcs5WZLQL6QjBqRWKBcsFsric8XiV62GmfYYamwhkyGBKx9pwkZwaoy73qT1fYj",
  "key8": "5279rxWRek5UKCbA7kQjYYLDkLPPAWzQ5BJcLvEtQULheVJMJQLGLaSjo6JACB3RYFV94Y6fPBR2KkCMqjzut5ic",
  "key9": "2PA9QEnSg9mooFqCvbgPFsLFu7yND226onUEYEziAczTVLUF99ZPYj1pMbvAcm3TFawopo2apQokw44NQ67fSug9",
  "key10": "62u5gvAFCdE9qkrDYrtvLBr6TDJuQPsXnaf7H1jRbNUQWbuwpU87cwKKpNupDzh6RNhmZAfPHuT51g9fenVXFMNH",
  "key11": "3sLz4hXzxtwje8X4rf5TTHuMpYREvC9f3WW63eirv8P4vAHsmTZtFyNxQFuFNKijWTyMRpUbF21R1u8wGytc74Mj",
  "key12": "2LpQoaV4qdgnj9B7196nL9Jm2qk1aT5mZb8buSyqqZhmwW3hSgW91JTWnkWNj2itUCvwAn8VwPUL8cDsPqGfk3bg",
  "key13": "3Hr4PzyShSJMt9sxcsn3XKwNrNKoaRnR6aTE7QimNKcX59ogctY727khjdq88XDsFP6iUKzV5rjAax2TCcfqz5h1",
  "key14": "4UqjKeiNv5rYmFHhbJRghcKJyq4RhqfEZyAQTrndhcfjP2n1YwdNyRqqYwBEt3Bqwgi1cW2C4cHmSgFyvFEtsQCa",
  "key15": "otdp4TR3Y85Hqr1GKrL88xmHj36x6Ki12BPRBakL8XBhB8RBQM36rSe7MoPVrFTqhfZsBX2FfMPLBwC2oVVUHAe",
  "key16": "4SBkk2U1azUiuRuRgHiAcjKf5mJpfXjrpBvHTw9pQnWwoy6ywrNiofULBvUjE1CD1v72py1K2aW3ew8Qx7Ht42Nu",
  "key17": "2cXMmw77jePmh1XrF66vvCbQ3Agwr8WpPNkeu3GjyZCr1e3NtVXWfbd1HucBvU1bB9NJ4HsfWqpN2oAfJTg33iBH",
  "key18": "3hu9D2baHX4ATX2RKkrZwrBJHk35Gf2Deqz3TmuLXYmxzpcuC6iAdszd5wDSRAtZtPngWsxCsjjqcFyc3xhiUfur",
  "key19": "4p4Mk9kaNkkyQgCcswmtTTF3eYkAhgo4cFBHWp63fmaMvRyXfyJ46coSvu6c5MKe1SDpfjRbgiEeDvjA8y5csYRV",
  "key20": "3rpvsQ6jUG1XNMh8HBh9BmNfd96jXh1SKAkuhRT11k5x7PEucWEfYhs3V9wSx2nmTgMmGDeWT8diKh1FnXZcacgg",
  "key21": "3ACfzswHw7XQiktpZwzknwruJRyNyWJBdVRsXeXvQsMrC2THVe4yLry8vfFVjBWGoKJPBV2hUmdbg8cUFT51ywVK",
  "key22": "3yrZQXvNnrh4DPLpBu4P7fZABzon7j5335fbzRTvMrtaycExJa25EcBFrnuu2oJAnjVmYikFh6CafQPUz7J1sH2n",
  "key23": "Ktbe8j4QJkXCnmdwfSrs5HGsVh9vN2Su9LFSQVRAqjUdV8agcQns3XCMAwgPz5qXXXYRXDPGpncUeXMfo7Aq476",
  "key24": "4d6hmi9cpL7AuSW4AFCMm9N23bECxz1k13btSnfGYSrH2UsZHReHy7XGFV3zXXusmHpZZVYtTMueym92UrYzkZD3",
  "key25": "3ariM52wJXgp77CGWPVXeTEjHS9LUFw5qZEBSL9Q4HxSocNaik9ZTErhE3H1QZiGLUMBtd7n7zNzEtoXFpZLUYUv",
  "key26": "2dUco5TgMYAf5z31tyb7opmzcTynPxipF9jSvXopyu3XBJcLefdW54iugHfk2Lq7dvqXt7fk1k8TRscGbPWpzkCa",
  "key27": "RtMVPKw7h3hWfpm6MCDTSDXskiMQMFgzzbdNErwoxcHobr7jiuPGKQ2w2sFgaGWityyXJMzdiCW4WncFB2q21K2",
  "key28": "3UiKwLsLGG7uoCCWxhJfGn6n151oDJxmkrZUBtSJbACMcQkw24Gn46LYbnAvwNqacSM5mhotbZcXb5AhYTUp2NVc",
  "key29": "3rDEsGVfviPK962RYLD1kDrFHjNP4zYbvXoo333ZyD3QSGptK29cHMSW4fXVFTHsDErXwHiLXztsBnDNQY7ksa8h",
  "key30": "52exNd3eoWnGjw5eh5bV6QkisTsxLyVSjh68mDcwCsJpfqo85G9LT2BooJYwkTPiQME48sjWMNgAQqvVRwYu9Nn8",
  "key31": "2kSxRSnJh6F7W63kb5J2hmhiomqZtdHXh6sfHSuiEnbtchCh8SY13u1o9GQMRqPv22J4Tt7UYWPd7NBzNSwAkgso",
  "key32": "26CgBGorfbTRLXBVNGCS3heR86w8BNbQnxejM83hw2az3WwvbtQbfuNW5qVh4cnJxNYSkiMDHWV1seyRJ4CiqZqV",
  "key33": "2WW2wjqzVLhTURuMbbfs3PdCdknxK4ibWgN1CKWvdeue3PeDNSAEEdxeXagAqt8dftW3NPwmMt9VkJTQCpS6xj5M",
  "key34": "ig5b5Ycf5ggkQRSGKHcXbzGmXz2RDQMVEzXBpotTqvnhNwjAWHyUDqRvx9hRXeHEK1UGYZ84Ehe787AKvvKsGM8",
  "key35": "66oztLoPUJV9YW1oF4NLwadnHLxhyMhwmRrfXrZ6uXr6HpNVMtM9SEkhQG4kSCsPPDoZ9RgjwdALgaEXM9L9Pupz",
  "key36": "2u3iNR8GeUAr561eEXcEayN9J2WwNSLzVjojhczZQ1CMmH4ewvKGgeWVUoMQ4sPTWZioscUe7dBPVbUkYFhrZxPM",
  "key37": "5NXCwxWfpYfqvnGgS8fRByswVrcKyepC1R4DnNUwGCTXvpyvT8fRAV1Sb5Hyr9bqkPfDTtyvkCERnso57MNFxpZJ",
  "key38": "4KMyEnw4gQ8NLAerR2kuP1NpMRCRzTQGT9pEq4C7c7VBS5jLhGSjbu7zCCXoHPUqwZXsBKt46ogPZjSFcB7boUkZ"
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
