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
    "4BAxYm79DCktz7YEFNn9TWwCtx6rc2hRRdxPXmpPbJJhwAJ3CxgNqLbX7XW7CTn8f8dYVNA5Xv5Jue5BAen73ZZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53EG5nmnyie1SnPGupBFxYXab7BMRLLXcUpaWvW2KKZ6CFLQ1KK2hrM39kJQz3J3XjrbqdUwMWncn7Ekhn1WHJLc",
  "key1": "4fs8pTFeHdpuqCse8LoNJydR2dFHyPzaQfXxujGZECg2A9wg9anTa64zQbdc4C6jbT9CgLZeWTpQp2RBU7MFm2eF",
  "key2": "4uM1W39vQkMnRBpm1inDXc1xcEUusJeAD86J2HpLAyvbx97CDNvstsg4QuX8NFT5b1xKqmpeZCqCvNaXvUR4vuqM",
  "key3": "u96RrPKcoaVdHWK7wKJaLwEcUjcG9Sg8NNNkb3tFN8eAt4r6SURE2phr8wuTgKFWNHc4dGi2JS8j33MwSje4n7S",
  "key4": "3cTFvM6FyNbjiK1qXdRzCpaU3Px43jvfpdd13tToDRL2vavf1Hsp5LJQErciD9uudh5PJXsoPWnb28AoCj1akSi8",
  "key5": "2vXHvJwP4UbtDSCFFNnqkyfV3TBXyDdQ9kB3HAsdbTbX7wafzJXG2zAwDtTsqMjTVnogXkCcD4ZotyvGnF69pqNp",
  "key6": "2MQc4tzs5RzdsiFrTvMdUYZGqvCfxABEjUnFpwgxhCgdwbJRta4DdWNeDrNPFCyTyCFm9JWXwv65VkZeuxdEL45d",
  "key7": "2hpULSzGM3KswmpNeZUak7HB8eUyfQMg5nX3dnszz7i9AJLtYqmDQY9Rn5aJhmYnZEK6UM6iiLLS8WqNX52LXU9B",
  "key8": "216E4ryDRGhoR3cukiTGvEvsSLWvFEMqZ43T7wtwiLEov66XX897vsLoiDEtMWJx9UWkiFH8u7vpUm3RjsJcjKUL",
  "key9": "3GLffAvUVYCbkBway6hD1FFxr6UbeYEZWUbCV9UHu9QdDZ8ehEpGarktMVgAXyLBinz1GvezXFVXiVgbaNz9B3Za",
  "key10": "2V8J8rZAhA5vqWdtUpa4KxSzFNYmvHSqGRtRQcoXWEbEptRWX5FZBTHrSs6uQNAKSghxat5mtdLSn7uVV5QQZH1v",
  "key11": "iwybJW7QsR8wiDE6zoXNE8gSbbNJ34KKGhqKFDa9snef8i9xN3XR2U4NrieeSXEDGLrQprfzujCMwj2JjkttyT1",
  "key12": "5HumnhoQFrKqK5wqmzbTcGYWdaun4HmZRuGkMv7vfMHpYCznyNCNdCixwr9qSsHVw6fuHBc7xoxM9G5PNVGWnnqv",
  "key13": "5vRvdh1h98KqgqqRYoL2LFsSCo1k62eMXFabKngB14ziZ3PZnbEJqYmcDuKDNohQdP1ZVzCgKJ6FG26eedMwLua8",
  "key14": "448YrZbGExpt5vMJYGeKcBdvh9ntbxLq9dRs3Q6PPcD3DCdQfT93FKZ7uMiRGSF8KsjF8gyoopygW21c1AQPZX73",
  "key15": "2jZvzqAfVd5ec4BgSApRET2upafBU4E1Cfzc4MLceM8sA1utmApJQySUcs1qkDjTk8bpsy4Ucm7t8yzJPiooX8eQ",
  "key16": "oZf6q3ZBzRXDWwhUZRUh9ZkVKAiAgM6q4pwJyjPPz9VBPMJrNyE7ZmqX92mfNbUbbcbHTshD8tA4DtNAbCvb7Ax",
  "key17": "4MscncvFLdvuaj7HrArAe3zNSJr5UurwDcwa3fe27bDeajo8rsaX7LVDZBjS3zLg8Ktm24WHWU8zVAwknv3hnTWR",
  "key18": "5PiU3zDwW6hVaV9RJPnEydVZUg5vwS1Gfk8itqJLm77YdA9jwxtNVHJedRR8oJTq7jC1HbNFbYovVCjYizGWMBJ2",
  "key19": "2WKhPvfkmizLD8FGH2zXtC2Q2VAW1SLHNEpvy2XhSocwBBVLxZHFQsciqzwRRQuPVUugeW7qeu2NiEWGgqmsrbz2",
  "key20": "2eKjvxpXVTH2aRnjjqdHTmAf6GDsQhTUknV4BPftJsRMNWxiV2JLehjf8QtFmG5yxXv4R8pPm4XLpWM7mz7drLcF",
  "key21": "3xNcHrZ2cWXFf871YBufem917z8kM4yVwkswQhoQ3gUwEGQQuwfo5wy35eiTxb3Q4WurcQ3vKKyfozRwL9BLoAqL",
  "key22": "4ZFckubTbzeaJ7YKQYKcS9y1hrVYGxpbuqZx6jjKn5bQTurFJnCsRnHK3rmQAnVRt5DQ8dXwHrjLWQAHJRJrapkv",
  "key23": "4MPTb8MjSNWerUeZmPh5kh1g5unbSjmRsiMVE9VcRzAc9Lz8NpErXjRxcBENQUFmWVi4zCgr5VSUQYuU2YQ6rfK4",
  "key24": "3K8GtB8SWHc9T1k6JBp4SA61SxmD47a1F4gkg7ogPwo3wxCLSuL6jhsocPR2tgjMLkdemr1xwXpMrxApvEHKz1ii",
  "key25": "3VuXLBgq2gFDZqW7dz2sHpwugNFZrU5BrKVN6iYMca49PoqCPVT9WdmxvusLoB9c9w2dcavEQXNDmDSu7ySsd6wL",
  "key26": "4bFz3urr9HZinLUFxYFF3VqjHx7DVLxW6Nswzu5jCYyxD7Ah1v2HXmhBaJGH7GrdopLF25UMBx8kVfhKc6xw9wT5",
  "key27": "63hbFi4fuX8cGfrLFoDg9BAwmHK1fq3Q5kGrYorr53cBkEXcN9skJpRJMmBNv4rS1W6ZALm3TP9NxckG3ZKTwq5",
  "key28": "N3bmCemc8XMbxrmouwoi1QcHymLNLyGqcdUaRkczyNogRAjNPryZ5dtkbRsn1hvwMCAUr67hP2t7Y9bAizt3AwJ",
  "key29": "pTk1nxg3hD3Avn3r4JJBnFGBAK84pogN1nSGURP75eamSHm8SThtdtEjFwt1cF8F1zN9cWCu7aWGdQ3AAxjnnk2",
  "key30": "2ifNzjcJtBBVZqLrnhp61MXHM42drS2UvUPjT79WkXKA8zn8CL6x9c4TtNvb1TjpNN5LonCVZMwQpvENeYWmGUpu",
  "key31": "5pWUDnnDzTj64TqseWTgomnxp2y17oWo6dfB9t6VGZDtRsewZ6gSMALPYSrynmkPMWZpAJk32iF1SCT14YmGgqk7",
  "key32": "3jpCsAdmPEXhSrm9Xt6P2SoxPZwKV6BSeEfuGGUNYXWhFfchmeFoAooFSwZaPQtjJasmKpJKDhyD5Ai5Zvh3NEKM",
  "key33": "5AdKF3ek5RiuFPxkDG3bkXt6CXTVLAP5wX3wVumPAzMYYede4ckvdK5CuxActzdnDC3UCjqJ2qyYKPNxnvWBKDKP",
  "key34": "2pCnXWGCjyYSYaR1CcwRz79FSMnumm111o4je4Vz1NizKMjKismeBVgejt4T4kBjUXMQUByR3BUJZjec4uXHSmFi",
  "key35": "VHyynuM3C1TF746SGe4S9BjKwitWWtzVWXc4rdrmvdTKuCeU3Q3WQxfA7o9eKQmoDB9uU3XZoT4aut3wjgUqv4j",
  "key36": "JTmKKS2B63DFqovytZjHTZJnDmMMJVFVEggJhGNxTrw4JvgtxW3JY4JnyetaENKeYfnLcxYv6dDvJtivWC2o11T",
  "key37": "3MFGfsxbv4nNCRSUpU2WAnTcrNtyvpHnuReicYM36sbDfy5uf6HVuhc3zwvYQqE5NX3Uavux1ZTgiu8GYULgC5De",
  "key38": "2X97MqRytb65pmqz7C8cpG6nfCQCbKBGv9qmk56HddGxUeqoRvr1LH3NLHNmseYX14skBR7UnvJVxmM4gtVfsjjs",
  "key39": "4vKzjhXbLYYUockDQGN4sWv3NmUERs8e4hPqgb8rybsYpvNMN4PvvLFCMX3Er4kZ5hvYEwiewJ4BUr9i16spAifs",
  "key40": "2Bo8JCNQqRiWMDm6BaBdCCWAXhJwu5JF3rwdRTctatDK124L6jRdL1tcPgGRiDjbh8oG7UhUTbfjYoshztzx4KhL"
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
