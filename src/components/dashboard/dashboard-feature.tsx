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
    "2yyLeiHK9pWHcH8FaMYcrMo8S9TDkXp6ret4659m94SVXRDRHoZhW9KurNX7FZBcM9h9ZZk438fnd7UA7kz4yRRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzGBXdnKu1uDwGbJ2eLzTKQt8diDbyvYnJjQtM4zw7qL6xKkckAbgY2HZ5k3cDPfuvqHW9vDpQUgkvshJk5by3g",
  "key1": "GeNV7psFw8BMPYMqvJN53SzLmuvkri8v6121qnEh1w1L7N146rqjzXNb2Kn3rVezjeoohtHYWQJmwWBqYKazDVC",
  "key2": "wg9QaoASzkBKHkvmLLstkDgUZmdN9h2uDeHaraUqCxLK7k3WuxerW7G6AZruWwnPHtpYT476ZQJ66McMJTurzuz",
  "key3": "2npG4Jfy4nTuRAxQnjcKpKEzJu2bSbU8QpaH6ax8SHUhmyx2XXz8kxqBAJ9dF3LYP5AXgjLmixexLxaKLxi4HmxZ",
  "key4": "VBspSfY99gtAyvbLQmtHjTUKY58CwLY2gPa63oPruKmvCvidqu9bB66VJkBEVVjYJGxQ7rCGiXZMKWvnZu9Bonv",
  "key5": "53u9BoZqGcgnuhFP3H6HGfkeHLoJan9rWLsk3SfT91aidbKLyJm2hWLy4myKkaDRLv1ZjZFf4V9oVfFhENM7c9Nq",
  "key6": "3SHHvA2N3VAejsGMzy8bvew2sh6ZkAPK4z54JvvYBSgUkXxYjT7WG1GjZZXSAQ7y51BYVdmMEhi3cKoGxVUT7C11",
  "key7": "5F2sLy86yAXXsNa9NvbCd8YczXKymWQ7mNgNFhuSpfYR4WcACKVJ4HqupebkTndAp3ASFPTYGwiBsVXv2R9dhTxE",
  "key8": "1HQkSd3J6PvP8Ywi5hmrN7oMp4Fp2utUbjACpvHt9arb6DaLLFiW5UxDATs4QvZVjV3tYfpZuDQ4oX4y6SPVGTD",
  "key9": "2XxxWprahYUHqrZmZdTHUyahUioeKqJpDEHJy6ydd9KtWm1CBm7dmAw1bxURETuTs6B1yWN8BfPCCZ9Gmg5xcQJ8",
  "key10": "h4q2kmUKop4Mcp3BUEvnuZfz2CNUmHG5jirS18H8T2gSXQby5LpkeGCH8fqmKufkzG4toVffErJcPiaXEEegx69",
  "key11": "g5ogD4upwn9VrgL2SGDbjbResn9ctXii6u52VaUBod5TFmjTT53do9TQPW7whXHXuvoyu5ZZuWdZKDXshKmxTxB",
  "key12": "23tfGfVMxNDmLMqSyBaTLmbogPYyLJG9oLW8cQjzZnFyMDeojMAPUYaii4EgHvHKMEWKWeA1GhiZwfRh7Hvy4pKo",
  "key13": "5KMrqo3czSg5BTdoWCq4JdxArHCJ9P4Wi1fThvBt29dY3jtsqDEQQY5yicwU9wfrh4BDRyWwxMBp1MECTzUbmmMS",
  "key14": "5QfC7JH4J8n48hZiFtzdMZTGV5f1CcDUFPMqm8koswfJrM1XvcRNshkbeQyhVtPqeMsVwdaRK9sL7XiR4kzfmZP3",
  "key15": "5SSKTUUZqyjKwJK3BvMJXuodphdWKD5rUrxmk7LbmjP6WqAR4Dg5MUqnMrm34A45TjTeSgXKM8yH2rXtXkuYKpDQ",
  "key16": "57wzSNYALpZZuXdzteyEdpCy4KakC8CktBYFz5zeQ7HtrYojWcFTgsr2f1G588FrBPCnNW5fHmoRGSEfw67apKeM",
  "key17": "57FzoWbxr5GBxN23AZETH315CjyCRTzxyspQ9U5PN369j8BWqJtD4aQSbSBBR3Q7EaGF79VY1VwtyspeA9CBxUVD",
  "key18": "5FGYL3ywkynpyoCuDgR9brVku7NSMGxH3oF8HxbqBS7wXG7iztmdxqphTEBJ7qicUa7aU5aSWxV4XVf4ueLusXrE",
  "key19": "3X7X1ctrrnvtMMp8d7w2sgChNPnApQ1mD4jJrsiLtFvi8uioTMzXGLb4fEw2bx2uYtARKEAKP16Lfyh6A4jGFLma",
  "key20": "5MTt8PWrEoFfmUtgHmKRv77rQsXxJsnNhjNWSFoXDg8epfqpoQKYuXogJ8NQxmxe6F6rcMjLy6CzqA4xourBYKEs",
  "key21": "ud4maMLa1nA7WigLF7nbDSYz3GVYVuaxzG7ttfKgXkKLU1W4cU5qLs6WZSotqF4pcmrG2rKBSuDFdii128XRcDG",
  "key22": "43HgcjH3VcU5h5viMPJephTHChdzntzm4tKkGwJzwhiGD7b9FmS44gV1XSt1ibBZzPWS2oxBsxPDJVQCnogZSh3q",
  "key23": "jpe8qw2hppCDSdPGoCdjJpLpjW3m23AAhFq5fEXvMuVREcJmGMGu2Uhng6yz1REbKwMgdD74Hnpo296p3RWmGJE",
  "key24": "4j5iTCsBgXgQYv5yocCwQW9pC5QzSKTNuDBCubuYsEFb4ydViUcsm6NU9mdd7WLiqZRj8WDUcPvWoqpgN9BYEta9",
  "key25": "3mwkvu1aFw2iyvNWxgQ8NZeqpU4Ves54u6UguEjKbJ7bJPtUaNibXT7gPK2EAFAuRei1xdys3HYXjbHNc1t1Gm5e",
  "key26": "5BXTjN3TfgVVGF7fW99ZLcDJsSawnZvQ9GffDgU2YGtTfb3gVNv2aZMEQ31oKicAhZP6Z1Q8k2qqCL4N32wDXdd",
  "key27": "3ZdpweubmRBgrN1fXoPdpyL2mHAyFpcCbD3geeiBELJGWRqREW29Q2TA5djSW6MARReEsMpfqFWr6GJy9h1PYVsd",
  "key28": "5vhh8kZBDpjLkyhPSnqBxM9BXRnH5FcKqM3ygrA4f6Uwcj5hgkaUotdusCnQxGWhS8NjN6MshB9f3886fZ77AGvP",
  "key29": "2YHoqh7ShiuMfk99xPiQrmkLE2CaeuzWdKWvhj5JJiYHtMGc4N9uh7DA67ZnwNXvcvPJukUgo8Kdm6AY1MMjpARs",
  "key30": "3x4XnarXvD6BNnWKpWx7L5Mz6GFPSPcZWRe6ZQ5SmztRXdE27ravRu72WgiGVkvk5MZcSTf6GUUvcKTLz188qa82",
  "key31": "3MLP2moKzF8Dyuxuzcu2GS57Y5StKpy5UmATSiJTggoEkCUzpnEj2Zrh5f4cixX4mNpmWq7afCUzaMv9vrgBoYEW",
  "key32": "3UrPWNzy9czxGoJMfWKpHAJSyUVm2PWwLmaXAwSg6FWZYdPc2Xbe3gY6qH8G9sn9abndELumD1esgKexBUbwvAcu",
  "key33": "4LKxH4QGWNdY3kGjxnY9NSxJgLPvKwrV5vYwFBEPWKSGxLwhLJmgNHHYPKjgXmJyke7BuTGLLBTE9oRizGW2KpFu",
  "key34": "X4o3ATumZ7zZZiaKVWadFTcTZzvpr6wi4tRJgJdXf6V8fFej9hXCJNCaYYVjHa2d5kBXs95rhTHyitoRVhjUPCv",
  "key35": "UX4RPMLrUeEFscJ2jtc5fpengFJinUjecyoXsvsS94jqYnSDWL61X6rsm6MSBZj2cYNawK99UAfCVWrWD9CG6Co",
  "key36": "3cZ8Vx2g8KFtZQrYqmiit6yrcFujjoU8SNXBQQv6PyrqAc11qjbdjHesSCTch23LTsfMQaQMQKZsbJEUAZfVoRU2",
  "key37": "4rFtpqTpb9iLHcBNtPVjTpnUcNxFNTX4TKoVmEQRY3Y6iGvxQHMwkTP88fd19pTwvfmxdqEegWVCjs3P3dGU32qU"
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
