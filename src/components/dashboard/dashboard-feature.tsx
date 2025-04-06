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
    "5XGQQakAC83neLFa8WwvNsSwUWoXKcNuUf4LcwvmHEMar2myiFjiijed9WY8AuL18VMA5tpej5v8woMP1PwxXNJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRxoMQSi8RWb114PPRpYpyfqrJLN5Rw9kyERyg6xg2q7LaU9hsDKydsNTBtEJsMAaGk9YYAPfV3NYcVCqF5caST",
  "key1": "PUUdiX1Xk8Ny223aq8VWZKGxVneX9mzf18RPh6aQvdsdXoFB5jQwePzMZoTHcujaAZmqWo1Dod3JLimtKiuYLAp",
  "key2": "3npGmx1hjGKPGxyUTzpqWNLzNKrRbdWxqi8sS1mYxLY7aUMgykgBf6kpPiVBT26GDS9ed72qtbRJuczrNSRcrS1s",
  "key3": "3yTXp3Jd8jptLVa8wwmj7S3iLHJFyJHu4xCAfsKaE8Vgau3nGYaiW58iTejsujaA5bihakEG3BFX1xwKNUGDKav5",
  "key4": "4Anx2VPiLxJ9n9EK6WqNupUBthkNZDMWfKPJk3da9MujKPAnKXw6ZBbta1cq7V39LNaSU2LjkAinhCgCERXnrkpC",
  "key5": "63xMHk6xsBZk1RRuZSLVfN7Gq5oC8Y9cCkWihJSJXsg7A6s4oo66eNLay3HLdJ43ohtKtoXqEhgcy2bDhMnuyfYU",
  "key6": "3LZfJ2QEvKpPMZAhjtXLNryB1hCic1KMcW68BgCETiUheeEWV7rzpNDeaWth9uTfMFTzph8fT6VKZnTjTfTjdNYW",
  "key7": "44iZb9MQPUbWqFf8BFhEhC6rT5pBSg4ovX5wjZfZ1bAGMfQmKDzvG1HhZ8SfTaYWVsKAcBRhjykMSH5Y4iMD7RBW",
  "key8": "3M5XiaAPVrzZSG361S2TLsFRc76WS5wyEzRtbZkQ5BD6w7967xDL3AZ8Zya3mTBqZZRteEnKZyQbonhaGwfYXATg",
  "key9": "2KJRdtrM5BM5KHwbt7MtzKLB8hZea2nW3wrKMPFMXCrRJmZQyCnD24MAMSap9xKUtJfnkq3Q7H4ipqW7Ejn6Xsxj",
  "key10": "4Kya56eY16jE7kKyhAHusGZDDhKru5227JcAXBbeF4cun8VM4E7gxQniqFm9jteuutMYgDTZZasHADMJsS1TANJB",
  "key11": "3Ne7Y5gjLwZJXAszhxxzQAVGpzDJGRWaQhT6GzeYHrEUwfbs2RuPVqL5HRiVnSrB3TQ6fhj8tJQ6rhtVkbvkzihZ",
  "key12": "613Z9wH7w46yW6PEjrprRViDuc4worc9oXoWL15qLP8XRrmG3EKVPtJa1dzXVDn6BWigtLGZmwgA38CvFq8xTh6s",
  "key13": "2C1AMtcBfLvVyCrAbd6QJUW7u2VybzmAT3RLyKDBgQ1rahW3yc7ZVp5AWCk6cEjhQ7faRixwdDxHWN5chyNch7z8",
  "key14": "bW3gLSvwtdKNfTp8emSv8aRyeUEwWx6eSfunQc5vd7ym35e99fSAo9ENqnF9wEeSM6wsM47AcpNbv5Njdccea9n",
  "key15": "3CvRf1LGfkJdo7NB3or9U4yRNQdvTEpbYCqjGUErxbK5jRK8KkkMMD8RE3xd61gaMAkah4BDsD2cCTKmkXjs2PRU",
  "key16": "jzoWDavhnLXjPhZgJCrHL6JA7sepLeoGzRWuRmkunVShhy9KeTydnNkyAY827P6GHpjagCv4JkdWwkQ54i8yLMx",
  "key17": "4Q4MBWnkC64bixdw4HV7nsUCshZKRcjUDzMoHCq7tbZy6MGHBGmAxFcAf7AxUjwaZbqfyszTHXb1RcCkRR7pDgA7",
  "key18": "2bwBfANJ17MhqiohSbr3YSQQwruYsQHzAvRzGMKUFFicfKhjxriiinhqs5S8WMnWjESRd9YUzjENxzy6ov6SLPNo",
  "key19": "2a5WFnvKAs4zhX4HUBspq21AtcLXdg1Dd7rbfhhG1oN7c8qw7zgu2riiCL8JbGQshWcvuGbFQxBPmqMvg1pETHDF",
  "key20": "2pxs9EzPzo4eEqTNzQcifpLY5sB1oaJiaqW13UU1Yvf8skPFJToXWtYDwQsjM2zpM5VuqFrTyRQ8JZo6dwg8a9eF",
  "key21": "d1rPcstpuhdmR8G89nqmq7pYtq11s81KyNqyHQA1J4kmpF3eaM7Gmm8Pjds7EPn93X5Nga5AZGTVuCYW1TVq5Sh",
  "key22": "aVirWuuwXSPcwdWj5giDYvuGTqSm4RtLGjEU7PYkZ7ydvhPV4LuN3iESNpLxf9shmkMgfVgW28sxgRnAxk2eet6",
  "key23": "4qNF9F7xSM4nB7Sb4RAiyF3pP1dVPyNoTJ9kJYuBpsDvppJYaBt8k5u1twvWGF98fmjyXHpN5DFCQRUzd3x87QiM",
  "key24": "61FCErLVKUx7RrCWTJLyWsMoR6XMmg61MYPuQc5A3ckMhr3sgJVe1tqQizpXr9u5eJp57qeixjSc36vP1nGbHSDv",
  "key25": "4VANEZYQmxA3UbeRf85Q18Yc5vPhq2X6gcJjDPs7Us4x92Sdk9F7c3vXr3RoHsE5aXF8FrLij4hiCbsfD8n4L6Lv",
  "key26": "5DULA2v2NYRbLewH98fzRTb7jVYY21E7WJVFsBEQiQM24WQUeQ7gBdUzFsiHGJGfmNbEXqB9ydELFTYBNVSC2FBt",
  "key27": "3HzrnZk6UCiNTdSfqey7GWMYoYsT6Ldcb5H7aHVrXGuowhcqUbat8QctW9Mcqxhp1pj4WjMaDDpqWkBxAJX32zUS",
  "key28": "4MupnYN3EoMeK6FAj6SmeN7dXoaH5BYdnhjs7ZSTQMhoHuW5xSsk5EgJqBFweqU96Ms6UCEHSdF7YwKEczSown3y",
  "key29": "4qFnguDS1wvcdxBHhGLGMR3grdmPGnm6ZsdVZdWk6K3Ymdsgf1GbDJY2fJzP4VGUyhjxVYxKXbScUGqMAqzDQkcj",
  "key30": "3aqAxr5m8CTBQKvvPJK5q49gRDkCcUaGFqD1sEAitHuekgPobsdQPam3GK3KPQXJkHV2cuHXnuSiegeRptX7wq4t",
  "key31": "5HsNi7FZpHQy38fXL17pZztztfPd7L6jrm7KamDsef1yNQRHRikqMhLhhC5CAUTFHw841FbsdoLbwPppZF8kvXNV",
  "key32": "4a6zbFFcN77mb3wXXdZMCw3by6yXJzGsnXY6yAF1BZojAs4HCo26gHw7c9xSHffq8bnwTEuMxPLmW2kmRt8pTYJH",
  "key33": "ynjjNJR2J7GcLkcyhocpupq628L1n6vTBkemwrhWPcNoBFxWoBRSJjW6HsDGHYxcGCPLYaXMLR3pdk3N3HyYAye",
  "key34": "2W5uFpCGJTa1zL2LEZrMsgX2h9nzM5EtsedzKiYxASHWLnnuuLKeyuzKPodJ1BDVQp8iXz3cN5NLznFVR1ofwrJv",
  "key35": "2gaeGaBiK7Lk2vLcKnofXcuo7sZHmzrzY4U5x2LtG2LjdPCwTZTTLpgq8qdahgawEHcUvu9QbrrovhTaie5E7j4",
  "key36": "oNUjaQ3ynv9kXAbdBbJxrP9xpNYcNZHXSjts4q7XHMwGpKK7agxjNErzRQyvZLjoEhRpiEw4buuAQa8691n2Jkq",
  "key37": "3dDdeZNCYGg7oTSSxYY5xAhdpRa4wvu9CRSAWp7PCks4kH1YKNRfV96PtMecujdsmbrsNHfAh7ZZPtqcLRcRncfK",
  "key38": "2tKRUHe4cqUiZLpxoXEb6xSQgpLgvzsWAk9RH57iscGTFpAZPiV2wzY1JNgNRcffNKZL4wGEtur3oq2LxuUQRS2b",
  "key39": "2v83R3bBt2kqj3QQDTXuU1HR3itrwcYg3QP9h3nYjBgJAV3uZL7RbStbmtxKcYddGygZiQPw51rf88jKHPc2WhtM",
  "key40": "4NcHb1umXasAZVWk4pq7zqwdPS87CcXpCK7hbX39h3d7hA9de1ZFZVuSVkQntKzGpgdRdvM5yuMjNgnd719LLsRM",
  "key41": "4qeYsBFtguT4AoogXtDk1Rckq14SbPLAMgTuKT88ruRZ6WeDm3xgB6W8hmmsJWWu8JSe1P28xY1kc4uPpnp7UTRJ",
  "key42": "4HveDrT19JH4dSFQDXLLvZf62Wt9x6tEGZiLHeadBzDShp4FJTJ2GHhevCYmYjwJBXGzfK3Y8iW9ddfUFa39DB9T",
  "key43": "4ehJAsk95tY5VyriSBKC4gkNnX8LemUYHJCkPJoNKK94XVQ92WmvgQ5Pko3begZYLUKEhfc32FGqWYCyxLdYdTvH",
  "key44": "n8xYqA2Do5zZwoXiattPUD34jQaMkK9unSW7NbbqLD5NQuGEFKqCKbDXzXzg6MBVMNVcdPSWfMiNXSDHQGT5DME",
  "key45": "5i3nh9YbEs9ELupmnusmrCKxQy5kpyDRZi3DiXhced5AjeHUDhU4ZpZ1392qJMG8mSHdTiPSZ8TD2282o1QNSCij"
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
