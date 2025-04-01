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
    "4qXfiK7k2km8E3hk1d6wGDL5FzkN6kMXjJPdEeFMpeV4SeLf43S4XBBx7RYEn7P3AEYKzL3yU7hbn28ZjsCByYmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qffDK7x651tAqWxS85yizRfsXqvqwA1QwyvqGJ22cbYsf7TVyk6waB52kHcPNusJfT6gzpE5vARP6tYJmS1ymMC",
  "key1": "49T6VQV9zCjFWLA7A5CjvomnY6zYQGG6t9C3FRMTr1Zi4taK9Hjzi85oo6Hmn8QgP7YsBHNag4ozBAYPdSah1c2d",
  "key2": "3h48kVR4JvfxCqrqHtTN5TSLtnK9ujrwqZSMxC9u5aZDxJgxwRzT98UHuZ7P3FBdQQ2oaaw2W1SEtiMPfJa48zow",
  "key3": "3ox2tvpfiLor9VWVoaHCv3h7sW26YYTcm1mfnBAXokgm858J7S9RCbEazJqAsR58C2QoYvDc25sxm3BF3YTZY46R",
  "key4": "22Uv5qWsVSF8MMWwvkMtkME9eYTff3qecatRdhFkcsDg1hZhueT4pVVc5HLJUftvw8nuGcwAhZzLwMeyYmFoUn6o",
  "key5": "5EiZVfc2hgXZNnSbtwY9J4Erppt16sY5ouuccz52fNJRzezXQa8N2CpUqRRWKX3R4qwZGyaMTSzvtwRqUTLursYN",
  "key6": "3CcMLrUpq5iHcs3NzXLdos9Mx8eiw9tFwYYQmxKD8VSPvTp4Xno1hvXVndczLveMixDi8ep7VRjia57jEJ8MmuGE",
  "key7": "7PiZDCn6J3vXEzpjXQHt7KCsdnyxjotwFkWVxy358gJvo9PKrnJuLT4PknCWWvGkdcPyo63FHB5RuHTsBSgjtzD",
  "key8": "2krR68oTEPtY4Bc9x51t82oUoe3Gkgb2JWgZ95EaCSbRH54UQgpLtq1RtawpwTiTAJyCB1gJUNG2aPKeGtF5pwJV",
  "key9": "2Ts1uCc7mEgjc8R5gam7ZC3mnEherWgMTx9HZi8M7Ax63TeGBPsvwmdgCW5EATWRKjWmyi4GEt4dswztkukCiZE",
  "key10": "4wHXwRPFtSS9cCmFVNA6sq8vhbKknJdE29NyF95qUoJxCzXtMMzX89bnFjvwmYgMsDYNtTKEfaXNGMPjRf59Zb72",
  "key11": "a7CrPGKjQzY5yCVKEtChobcePVh325zZ2dkaYPrWVWBb3iWAcck44NJUVWRkxvaGEWnCQMrsLt2vJZEjz1YhTDz",
  "key12": "5dCd7UaiEisd7RzHr255MekDJPYYB8oYm3CzxvHrqYMfjWhyWCVxsqCJuq938jxoT5MFK46B8tVWz3sbzyFRTuGq",
  "key13": "4XGxkWESeqFc3rhjPFMpmYm6m95rCBXToaEFFN3TeATXTvbuLL6zftT3z65ns7PBikTs6gPXAQ3tn1b672SwdsSz",
  "key14": "3dSGHFFdj4Gau4AVp91RPc37W2Zw8T8ZN7yoNp592H49UbiuiuqfRLrRx3VbsXUjvhWcSHqeMEQrcRMN5hbzjRWp",
  "key15": "8Axkv64m6JnDKUYMZS8WBQ17BWrHCbxzeVeygA6WdZpDPestm6mDHb29GR8TSSAbbJVntnJdBW7cVRkoJFFAS1i",
  "key16": "JfXWRx5MVNa4DgkA3VNwJBv6vPow9TQAfkvMtV2jtm81Nm3xxpRkroXHEsh5FREPFvodYf7AJ1HRutyBS1wSPYy",
  "key17": "5argeE2Ufcyc4iWWHwy3tUfKeLU2zLc5AotTjmsjHmA1zkVN4E7vZa6tGZTs9QMu3en6Q9Fd477ZVNmQ4cHcjr6Y",
  "key18": "o9NmkZPUUgGJSuS4XN6TknVnhjsatuTDJTcraHJrUv7A4KKSMFPKcJKonXtuaCzfiiF3L2CugJhH3rn7iW5Vrwb",
  "key19": "5DCtXxmRRQ3ZnJRYr12dsDDSTkpqw99y17iQSSZ2mjp22B1bhr2zQYU2VHEKXF7TRYhTcXVHuc2MeDzCd4zu3FrX",
  "key20": "3hP6mK4Ceo16hFexX2Ei6RACiqhXsCcmtR35AbYdAceWCqLBvsB3uHYPjCnZ2QYswEWz1MeHHeVuynRVYr3z4AGW",
  "key21": "XuqksfvXXTiMLyuMzXy2hLSBNE6LjLH1KEciaT2dW5y6yWk16u3GEyLqsCQdFV96y1X8Rv1SWSjBa2CRGReVtA9",
  "key22": "2UaQe5X1UaAus4Pt7dXcSradHw33PGzQDTf8vZbf9383fPY1thfkmKk4sKV5CFrLwnYwBytNfPEiYvfgVqeNWMgU",
  "key23": "2kpPEXi9sJzHdooig71vAcda28nssqfpUv6AEp1JMREoNQjVtqUHENgE5EATNb5xmzW3dmZ1Z9bHAnLiTxt89oi8",
  "key24": "58cSFbVdXHgRkMfhKF9a7EPym9jtycR22PsFo1xqYcMwfxGcyQuLyY6HdVRwBxhaVRF4D4rXnPigKSAidDknPfaM",
  "key25": "5bP35e1jjtVr1wqLSrSWnPZw7QGPm38UerKZiuCunktZGSFf1UUn2Au4ScudpfrRjrwRf6kjsx52U3uMoUQKyMxP",
  "key26": "3SkXtyWTBVoG7H6yJPiEgVFt9anGgdKKB2N8FEaTkXM5tLZCMbmFEs9Z4re212r5h6frctDDfFY3e3azK8tMZEYp",
  "key27": "45Zv94vbdpHLNfc3vnTka7FgLF3XHcq7nwFW8HMTW3gDr35LLY4ny7YFruaxoCq3A9TFWQ9zZKPqG4uyS1h4iZM1",
  "key28": "2X2iWLGZaAqC2weifKuyhqy7ihnNZEGh8n7qNFSk8itaqXsdctrYovwMPg4rrZViwA6ncrEZMnS8uVNGiHScdxn1",
  "key29": "2qEusAtPakkujHgbsPrZQaoYUL4THCc7T7RjmeYdnnuRBJYy6KFUX4oqrogYtuPE9UtyfWPTHezwmJt2uFroS3Yg",
  "key30": "ZVWD5TAeMPx6YwNvpbHSFD4nEbpnUwMAFnM81EqEvMZWtYUs51rPdhUvJ1mfDDaxf9EwoxDYqCijQpFB7DBevN2",
  "key31": "5bUbf6UD2HWpiG2MJByPqKwptwSeMSJ3xwd79HnPQ2aGEFxBXZwr3BfWUEeoYFSWi86CWBa89MGPvERZEE6a1wVh",
  "key32": "3wt1GZ9f2xbdwe6bqyYJRybk97aNX2ji4LKCju1gTSWd2hCtLPNLhY9n28nu4x7Z31ipw6t619rQghNxGwRG7siF",
  "key33": "3YHqfKdPEAP92LB7Dvwg3aRiup1iJr8XZxKEAuzii9d9ZV3ucyFUoqXog91eEQLWeH35pNmagCV7bY7FnDBdFA8k",
  "key34": "LzQzDn6tHWnsTLctQGQ48jXiv8mm7eJiwXZpZvmkdotbTiU7KHaEhDgZJviRGeLGiZsy1tb28vYWPmUuva5qWvT",
  "key35": "32a68cnggaqNnbWfvM9LM9VgRwuPpwj4XxwWVos6EHeFZMPe3Fnz9uY2gnecmdn8xSGQ7ZFJvCvQHn3eYkPER8Uu",
  "key36": "3D81BUvPgAeSvsjB1qLhPq9tZmTruoyyQmXd6cTCCDraU8VULdYBPNXWoE9zJjSjbEAKxUq2YbTWzodvV1inhpCe",
  "key37": "5URMSteCow44vJQ2jTsYQe2FcQStqoDmoLsX9ML6HddJ7qkFnHvJVQs6XSwmX4c2oJAJjtbGmAxumDHqETs38kN7",
  "key38": "3KCqBYCtVf2LmoHZnuminEciPtKNErkjXTNbfYW8PRCXMZDAppzB3jT2akHnEUzg7wMBG1wNqh4fd2vSeMpFRrmZ",
  "key39": "2DzLDWNuVdzBS2MnZfZWZ6z7EbjXybZ4vUboAx24yqM65rZFdS49th28CD991RzYMJ6a9PD3wWKAp2Wgi39rhWxH",
  "key40": "4s3G92xkqrw2R4KDLRPZn2AfvxfqwDDCtxByRHUXPu7QKKjbc2xrTERotMxgd8xxUi94NGRQpCZHKaMZudFjC1zt",
  "key41": "3119kpZCGkwtVXSZ5PqCZrmWejAvpuQxybYpq8WBogvGSRsnj2yPn41ouUqSV3SrX3YqfJGBzXgG2qZoheoaEtrf"
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
