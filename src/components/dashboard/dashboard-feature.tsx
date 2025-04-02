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
    "5GXwbthHWXwdFBwcSvicy7LF2KkLPV5Fe49oiLixv9wfXWyvhkqLZQsKk3ykmLLWsmtCjhSG7SSvQSGAhWbJECfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21iSnno1xXjoeHkLAsnPfjz7g5zmQiun1pHBons2vwUvfzK2meZ7NHWQFPWvL55RMyqLH24wzN776rdTPrMopRac",
  "key1": "2Dd6ibSvpjZRw2gnodwWBNjfwbHPRYTHwXtNzfKC7SFovZafEKgZwNvS7U6kGhrvBpWkhMa92ky4ucnNoK1WQsaN",
  "key2": "2wKMAjrxxKWCorBDWCGbG3kQVKVj2StoGGsfqe6yFTdQZTpXn4T1cojE8nPqBXrKjCQxQTAutS2SmARf8HD5k5Mt",
  "key3": "1jW4VFrkXKDJReARswfxYbpBCrtdYLp8VsKZ2vg71qK4kMNrK5u7Ggy97QkKb5ghKLD6TkJwJzWjCJa3rskxV5D",
  "key4": "4RBBDVUjn6tUuZ9TYQ44yWwdUeCKBcx4TcnoBgo7V5SeCcD3T7iS2xmzUMogPTezCUFu5otqstQcJkMQhGXVKDjv",
  "key5": "2UWmCk7EG5LoEFoVsVeMmvVnHDhky7TVcpP5n7UXgFDUTZn6xzivTPd1aZNFxDzgHG97BQ1YxbUXVEDZwm2nLuHv",
  "key6": "2t9KbAQMPyc7XP1ha6N4oKhGZPriWLVWrJN7JRNDvj6PXVPCScc2PnJNP13uvt57f7jhFQhDqunYW3SDw4YAxCRS",
  "key7": "5JkksiZykzLMW1FTpC4uM7z9KVPcAUGQCwYbWMKWdumHhVcVUarCqDoNHz5y1k8fNpU3cJwzvTnwU4XEvQF1U8VU",
  "key8": "53h2vLgxgLjetRSSqEr1XcA6CABjXGCVoRaQryxWJCmq5bZiqeWmCtEfMbxwLPjZXapN9pxkzTukvoxpWgv3f2ji",
  "key9": "5FgUj43fkGQikRdyzntS7Tumjkb9HeMA2kv4BBdqxBSRtsGec3cqgNURvA3mxNc7NtA27FvwsBg9iwz1AcuCk8i8",
  "key10": "VsK1cCfNunHV5y68KqcXi3MwZiBfmBUzyyXq1EDVuUGBaHWV7JmH2ceaieyhspxioz4EyAozUSGKQfqe4ANWFMD",
  "key11": "2E3yNy5ecxRwJq2ga4MJ8tNLK7TFp7h3MtncWgTcs1yeEUbkUzhUyPEzR9oyBDQRHjoPiMCvNhEmBSU5Vp5igpTV",
  "key12": "4gDQGnPsDgASCTWtiooSkZaqCM4gpxqh264wUSpnEoXgep69di2DU1RbmUj4388b2wnunu1VKBRSVrLMJfnaU8p7",
  "key13": "Wi1cA4Hm724cSH36zGSD9gSeWZyZufSLyZorPGptcdR4J9DjzmbJechiLhQhd48V9kvh3yBy63Us7QbSEpkibvu",
  "key14": "4SnJGyVxQQWBGamkon98mFap2MCRi94mKfgU1CJZz7aQYs4KC6MRoeeRhJeGyEeb711RPZpJ2ZVumZxnpxVNP7vh",
  "key15": "4YhNRRxF9rMcFVQPjaLwVh1eJFdMY9w4qei9dAhhDCR7vmZrZ8ZkJL92b77uMrZZnN6JdMHLqdKLQ2FbsEnjvUqU",
  "key16": "4HVj6MJUVMXCiXaDSFUyWAiPckLaaTm6CNQuFbZjsEC74vuJsWe7Xm6eDEU4AxpvB3CssQEiKx6RSyuDeKAvK5u5",
  "key17": "2denzc7ep3hKQUVqcBx5WiF5DBdVpzJeuLJ3rKtqodR12Kbp6JL6rNH21dkvhyHUqFZPGdrJt2c4xWePu7BEozkk",
  "key18": "2r4cMQD8ndRGCz3CrDo1odrrZgCWxuN8bif4wy31hTb8t8yFFcveWAAdJSjF3LsBE3T7fGaAXZyWqAykRoWVQjXx",
  "key19": "4KUw2s4YCskJJR2uP7zJzsWDetDd33vpGGbw7Qas3c4LDhHmWyqBA87DwqHqXR98heTycfpcUwU1Qen3HCtNh1py",
  "key20": "vC8Pn5P3fUXbG6w1VKjnV1u8f1vxZYm6UEhpsn3pygSTqdRpGk2XUyE46X1xutdaocGBPxZLeevsPZKP3n4BEEs",
  "key21": "3cuzC2czbLvPDmUXvgGQ7DcheocrVL71nE218zxckqfMgamsucZLSRus9qKzHjjhFbUxWH8BxyPtgjGjVrXKhxLi",
  "key22": "2LZ4Yzfp1fcF89msVx71NjghUcMcnzQGqraiFvyKbjnLVrLsRvU9he3tGJMEjZ17KoH9apF3fD7sELSHqa9soET6",
  "key23": "3RbSSGVXuxWMHuMhQmdCGnYPwdfoGYhEBXkbzrz2BQbip4FDJ3VRPcE5bjwrhN3gx4ct1ygsYjdzeec45YpF9Ym4",
  "key24": "2ZbzCxETgFep2hZMn41dTeD5VRubgQacoZhABEXC2t1pihS82tpH5j66CYUZtQ7MmqUxNDna9d6gTZ9wUQWgWzhh",
  "key25": "3MCfDZqMi1g3U15SP7sCcSZUDjZW8S96aG2SgN9A4c3cSEL8ZQUfXjpRtFLNuZx7fGeTUDJXQUEiU36yRJLzZez3",
  "key26": "2ymJ3Zp8qxdaxYA8f7qbnwWFDgt6aqGjFKNJCc9S5LJYktjWYsUikdEpdyVzxYQ9UaAqpuaudaW4iXwwxxDsTc6X",
  "key27": "2SkK8437pbEAbEv9oAMw97qqsZ3WtLyjqekTYL5SvpugUTrjtRSFKd7WfUyv3i6RopW1W9t86pcmgM5r97e7qzpf",
  "key28": "3eN5ZjrJNitSmoGwD5Mxj6mw5q6xHxqSAeB7CfBFCKy9Db86KMghqEPZnLGxepbBXVAfu9EVV6yfnZqS9ksUjtr",
  "key29": "3cakY7QBhUTAptyc8YDzfQR1ZP2wspwFDEBGjBTRi1KwwxpLENw4pDfhRkqgHkDGTuBZoa4iTpDBBfkirigign1s",
  "key30": "5eukitt3wCqeQi8WHZbp94CtL6yHZmq6i3eJDNVuefdXaamEYhKg7tmKYSWZggECKVtKS2PJLB7Enqn9DonNPaWf",
  "key31": "WZKSbP1JhPsMkD7XKjbUdL4x2vt6cPAmjE2EUPQSq5iCvu7hUVz92uqfzJghfUXM97JWZZQGwtXHiQxXNSPcuiq",
  "key32": "4GA52tbFL6jPmNvzZfnvhfWbFpaK4eyLUfWXnZuy2KMVcoQmBJmK8XeThD1ZWw4QUybxn8hSDwC3BN1UFYPyUqbd",
  "key33": "26ks8MUCUjdTs1APSyp45sciUrQJczHZkuNf5PH2dmuD4SUYhbq8GB6m45VqWmyWLXDPLPLWuvrooYMMzUuxD6EZ",
  "key34": "5ey3Fhth7mrwHY2cNJW3Vru2HtLHHKjieuiJJwWd1W2kP7SZSFWir1CuuXdDf8G4ZasMoYuoKuC3PzNMJoixSSz3",
  "key35": "633wkubErNjuPeaJMGn13iVCVnCMXgm4NfnwEAbD9FGvzU5KFnapr5QgF9Y4cYNyaMhhaM5xXAeNGtoiRGz7SCg6",
  "key36": "M3aigGCTZ8TWcDJtr5zxu4u6sDrNmfUTEnvWLXRtTiz25jECgV6SSt5yTp7iKncqFNhehAGusCpsCWd5ofBDREk",
  "key37": "4rYJTrKAWfA2aoRyXchwdB6oDTLMyKEFx1tfajkxEaSDULxejdLezWuNzG24jsTmiypbGxMz4Z76T67ko8FFG9e9",
  "key38": "2ceEnPzxiCX1w4AoampiFDw335LRd7Pnv8YRHKbDki2tTHAzq6QtUFkjcjA7d834AahFKcDD32ycSY85buTH3XQ2",
  "key39": "4PHrcfgocy8kHmhKJwPcjmrtwSrQRDk8nMGsnQ13HTYsnWpxPFZXtappSVUrWiaxUe59Bf4bRXnGaTeejCUiC7X1",
  "key40": "5JTeTBqSxngdaJwHruXVxtrep3G5d43iQ4UnorHKgzx1hKxpj6hXXGEfjTGNUscskJf6SB6L38LCWBMaiLb5yi3L",
  "key41": "52UhosSkwZA8p1DoeeCqHmHGmFuPJjstVM8CQd1FKxLmCMkC4NfEt1vjCgRHzCPqXGeKHVxnNdCzVyEhmZ7QmLj3",
  "key42": "2Z9c9BDdkH661kHj8wmvKvMGyC9LYLNvii45QNY6BZmKYZYS3yBrWc5UcBwFVvSzPAXjCpBj9Jt7eiSiSejZqkGi"
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
