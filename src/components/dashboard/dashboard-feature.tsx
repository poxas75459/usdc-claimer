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
    "h2TZC5av8UE7cVXyumENCtoCWSDjmjGi7TqVypat5W1kHayfFr8tu76tuMnhnUrM7gDS1pgGVqvx76WkZKJFiyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGMSjbaHopZfGwCBLYh4zUuWg41E4icBmb7FuR4EL5ktmwvmyFhqVwF77FUXvLiz8uVUEf8mcBTyziiU8tgY36g",
  "key1": "5hkncb9u3MQCQQywiK1C3JbByewfoSBWc5Z71NPZYxMi235y4VMGvcnYPk1bDdyVmTEb8SBApp18gMpvQThJk1hU",
  "key2": "5aT4XavA5Uy9zQ2rPWPvhwB4AdBZNpWMyknwvLRxnRrJv4iXBYbM7VKnB6gHkASUzoY1ztE3DXLgUKXUQtTe3v7r",
  "key3": "24yDYgBuc2wjoqTqSWhrbDV9dxARh9P2U1JUP7GP4VQHoJqRVwJ8Bt422UEbPLHtSEbnT7LievQ6JMCUQQpV4Cmg",
  "key4": "3k9HH9CmqZHSJtV7C9byECfRVfjG3xhf9Fe8X618nDoF6gJwbs6VAL7HyGKU3CwQetjEuSYjFWQEr8ub9GXzvagZ",
  "key5": "3D3G9hwYDbat7zbapzsnE2T2BCpmgLmNd9tr2uP3njmNEScMWLYxGvmbqkhyRo6jr6wXeXsAnFMPCTMkiHkytD4U",
  "key6": "4wwYZEwpPW4DVRdkUss8LNtDx97G3p3kTTpGwgrdBMVaewM32JowvyhjMboPoWVKi3ykNrFhTNYg7Yj21wswaHou",
  "key7": "2yQAeR4EoRWLrdrL8HaEVwgvvs4ELBBiKtnHNCEJ3KPRtvzvLfTeABW1xBVvrGUW5mbLqytwvNdKW8fq6yvGCjNE",
  "key8": "4t7c5ExQq4t36ruq4dKfyRWwDjQumZTBuDSPvmYT8b5cm4GvesCvdhxgLTUjpECfmuft8zMzY5NUoHCyUmwGLVZR",
  "key9": "jxLsJvFoJTEzajWwtJHchJdDG6ip2mCb2bzvaG7Q56ouvaKjLnFKM6ovAuWh5degcCqZZ1bD9PYPbbFREvdaJKM",
  "key10": "5abCeexV1ZZ6Yz1YxTqdBV89nGKmzKCMtXboUXBNSYtPttMeE4u7SgtMpbjYfFrNW1rzaf3c2uHpPd9tsdmiyhgH",
  "key11": "2XZqx7DSYd4rkDd3fpwNktjjbgDAHFf7PacEUiC5Hy7m1KqLVqwuE4qwZXiMq8k2vZ7pSLv9gAPkr5r5GQfhVe2z",
  "key12": "5vzA7qbK9shANaiAY5teVbToBLR9mKmJ9GtxEnUa9AEKDSPGvLhKFq3KNpJ3pJypkEra2oCSbJAj4pQ7jV81NT1k",
  "key13": "4pXgGTfdMy6GmtLPB5gbQxLCu7HaZTTXd5GTkU97iwRUVUdbkANeBobe2G1zYCuoG8TXuBcg6JUtXqQtCxuMstBT",
  "key14": "5vKduFKGgEp3tznefBxKV5ZKNRHCwxJMoHNxxeD2sDR7ANsbVEs2dHa3XmG2KwApirNxBrxLqR9eVAsdXGwS4NMy",
  "key15": "556TD5xki7e32mHZoA5v9fa7w2o22rvNenvhfgTndgGUojKHzoogD4rm8ysBLrgbwfeiZH5RFscYdqPWxcdh5H1",
  "key16": "2k1DLC9Z64JSDjisuveeudWf6VfNbtAdgTpVKihT9ja43g1VQGhZBSBgAxMEKYsdXAU3Bph96Y8feUDNkzWE8Tt8",
  "key17": "2AE2j933enm65fp6xLdgvPfBATnv6WWUMobGzUYYJz67wtKktyFRR58NSFd6mhgduuAWuSNm54sg1QJ2riPmJRgr",
  "key18": "4DFsvcQiz5vt1JwrYXXUL9gbHS3B9ht8jnfqA2ChAfBpW3QKVJSesbzhd7xHeZ2KrJPGzjQm19Rxo6hXmFiou2tc",
  "key19": "63zkcgrXegr87B5LWjrHsvsGxCpnDbdgbmd7asPHHi69ty3i9LQT989qZLHNt75KRqGoAhPB4AtVgcN7pQ8XsF3",
  "key20": "2tsvP7x3Czom6gacqagyzJMwKTHQF5sKiWiw28CYbGmLAZ25ueMpKqepMti7ZzKFy8AV7ujWjMwxXvVaZ3CpVSpU",
  "key21": "29w2QgFn2y7PJvkzVs1b4mvfFh1MMo1s4p5TVVV7vveRDQxvi5pxVE3vUqps5cBMfRPmEtRg5AWL91Frh7KVUaiM",
  "key22": "2n5myb2hRJunnNHWFr4CfPot5uh5E3ZBnmtJR24YuWg41fj9dnJ8tCiBxkBG2QSqbA8icTDduxUM7faxt8v3fRVA",
  "key23": "557hssQNxe8BW5EfxpEJeuT8bE3e88EnW7J4nJRdXF2sSVWXHzKncevZTkT1GZDP7HGg2aZJUeKvEoZw3yC8dJQ7",
  "key24": "3JnMnfCqkTEKG55bRBMa4UmXQdPTU7NYcovQm7VbzCgU1LKKivcjphzRhckkFchuYSH5A1SzAsdTTsdTr6F5KmFr",
  "key25": "3gTRbdQaNEhLmhrvCxomE9JKYZAMv7PXfq2B73opdFXFwGA8BPQdX1kREfFNpzuzJsFdM7rrbb3RVTqhovnBYzup",
  "key26": "4FXt4cfYRPssdJobvhgVUTsKZBf2gsUxAoXSczVy3Z7SjppVP2MMLKxPUBpkZB8Q4y5aNf8Q3gCJozL57WhBVfkn",
  "key27": "4BdcwY4RHwShSDVbCv49tVpnXRsxBS4pr1yugRh4gCW2Ss6iPC45sgUQe4UpAubZZBBnsae9JsdQ9yqYJudK1cnv",
  "key28": "2wCjWBvM76bvdTbMGx8mBLKjjV64Q31iHHT8RWVwWoHGPqh5pA4xvNrQeNM4jSyUX1SP7s4288R68H3BsnCyQofp",
  "key29": "3VTgKATA13Sd7X1KqTgrsEf4BT2gx63SQw2RFTDhWJ9MXz6xHNB2NNcyjGShh8wCEj5KoDDBghooBkdDixMa5WRW",
  "key30": "664AMkJBrSyS4UKL6vbArC3RrmsEED4D8DPygW6KxH3yfMQkVvfQi8k7zqovDEkKbiRj7rZMgTuuMTeGtK5Adivw",
  "key31": "4xbAeehZ28nHnF13tszshvke9zH4cV4skDPzwH745zjC1AKGEnpPoJMLzdUXdRBSJ5VDaSsbw7UkvQLNMXeXeubD",
  "key32": "57csMTTaocvbwU4XvZGrGWaW7mmV5Xe2hwopSMy8JrMfNKjYXXp7ZifogrtHQgvSUrhSpt4hdNbogSFe17Lc4NXQ",
  "key33": "FZ2RzQeGtncf32iL8AE6oASS49DqNkSEhTjSxkh4VSfdc2BpVG2f4WGuzQKUTJWRLSFks8kEAKrREc76rLnQFg1",
  "key34": "4CUFLQmDcfVW9azcdKGGbNk8iuuaf3uqj59cir2ytotcb6dum84vam6uezLMiYxMNhVPB23GfrtuNbR9LDpgFTJD"
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
