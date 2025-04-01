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
    "2jfpVnf1Jvci8QPPjXS12ijkEaTVT8wDCcq5B4WLznyVXLLz4JESJ7shmJX1XCe8tFccsxPFGfYSf5HHAYm4EKET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJuWbXCY9VekcQWaB9FEB9V9RxujUTUKVCmt6qN8tJJFE7H5uBzkJ4s5NhQ48z5Dud64WXofrbPuy55EJnng87z",
  "key1": "5FuHir2FrZVoCNP22bUWk5zeeDqsM5BHo3TmVmbHk2vigpX1bWDZA4F6fJUxJZXpzjmUHHMNxKs8f8ZuYthq7kAT",
  "key2": "NxAvW2fDeUQLeZRNZsQR51KXcy2NHSjaZMwzKQwfda7c6n8mfawLQJumRzFMbVqSRKNKBZLQeQVaZ8WKnJx3G7T",
  "key3": "5VH2MiNi5s6Lv23e2tkFh9hsdZDGTreeihBoJgZ3LvekHFnXXCEuAZUiQAXKahuceDdXqakcATvheusTvy6srapF",
  "key4": "231zwFwwL1nLikrUMeceKZruWNYEuKq1dr3KBBcQ4rCZxgkx8CXEKQjT1qCZnR9c5MiUrYXZEPQTNpdUQjPcaYVE",
  "key5": "KLAmhVUnb97oqv5LhARrKfG7wSBH84LVjSMytswdZYsbeGVYxfXxE5ComswBVx4mspfys7DdFxWPiYXgfVxnHNe",
  "key6": "4297y49TwDaXsUAPrFDEor8Fvih8CfVCzwuo1Rcdq6tkpiHFViGxSjSxEwyARAcdNYhAKmvv3bR49eP67YUYEYzG",
  "key7": "5FcWRQ17wFum7o4xmyMCL18DfRXXLGKMXmNEu4kzmbVMP2BH7HEMn72dCBkQLNSEKnkGpDscAs8JoTUbQNsxmgBf",
  "key8": "HyiQMr4GWsWtw5fLRk1yx571XU1WMm5LSXqngoU1mgrrKGec6SwUwTPYtLZTq1d2WbATapeDQxNd5oZhvo3AVQL",
  "key9": "48y2wAKb4iPuduaDgmQF8C3r8RFkm3jSMrvpKH5rUa1eLxGUoCQzbqoRazZkZvzQ5ecbiApqjNqdzr7PDHUKj4nc",
  "key10": "4eXgc9G6UhzNX4paSYsq41RjxRmicr9kHt9qCxikTAeSnfpHUqMh6ZbdRPwZSNk8vr7dUyYS57DL9uh57kEYFUzG",
  "key11": "5n7JnYHzGRZRN3tzDJpVqKNPQZQSq35DPVYJHfLx32uGELnR9zx1cPtKDXviFbhBBvzoxwvR2rqpkpY8m3bAf3at",
  "key12": "3bE7HaaZdcx7ivycavHBunmnwaxip7TXngNmQ8FBp5C6XdU6L7iUucVrWUyNv9ZPafikMbssczcdcbwsL5Z3Yzg4",
  "key13": "2Y3vvpYokAF8hpQZH8KfcooU3jn5BdjgSVdrDbAt6xivGBDGRuZ2LiE1HcRNYgq8AKJnsRMx8AEEFCZrK12WmPQE",
  "key14": "2tVF2UhjzYnEuhXfqh7jLoQiNkoZVZ7N4tLJ2JqWiRT3VA1be2aWNF6pSXFjTm7A9MtqsdMLBSNStJGZdxg7DJQJ",
  "key15": "26jcXUkkswTGnmiJYXyvadYrZ75WStJiKpirjCp6xVnTnYS4mbadtPm1quiVmNsvAMkW1xDpyhyqkPwqaabkCS1v",
  "key16": "4SXEu1HjAXTKAHSUkg6GRoXEjgzWDpUpRaWQymYcysts439PWeqTscnLK346PWj9dtGX5EADyPZrL2MHTKfgVRwB",
  "key17": "2ufrVteC7aDVyppqh2eg3Kv9jQysifXyoM7Srv9n8qmZmYgvnWPhm799yyActWcWaJsD9JnhRMVDBswdaQCfZfsX",
  "key18": "5aVvNB6es3hdaX4ZcUDHP7VZDbYLjzrXAphWdJCTZx1BRa28L7XUPDGAKcGf9VpgYjET2BSucxao4iWdCBPfQLUa",
  "key19": "2GcwFeXaM94nvVzALt3wCj7vJHzkfefkS7FQ2UVFyz8aZL2zv3HGs9BeWqWeEjHmUNu7D4zRF2KvpTVTPwy1zHZ5",
  "key20": "SphB3Rz7A7urKQoQEEJs93w2YGzrmhowW7BHxiLNNxQJbRvT1YXtypyDLE2847LmKsBK8JjaKMwNuB98j3TWoG5",
  "key21": "4V5CocZCsAeEMZGUdsrHiuW8uKFExF2XuEbxr99t5X1ESyv3LGAhyB89F4LLDbpvssgyEvRiaUEyHRJbbUkHmBDc",
  "key22": "xWNNPSu7bVuE26uGBRp4FN577VhqCgX59VCZxJLDNb32BKvyZMn8kAPMDkdN6cSN3MFGLPkcCq2emuQUyAKcVba",
  "key23": "4f5GJjKNUbagY39FYEaLAiQ2eaAUWBFppGrfDrdZBcodKxqaN6ZnAsnTfG1pSqvz9wz47irqAAcp2QqMX4W8XsGQ",
  "key24": "2yvuZbqfK2KUf65p1WLrZCDmXD5N8kW4Cn7h4EpwnLkSzGLddy8CMLgftunSXqhStxtkWaJ9zVdNfmgQYEvWU7n2",
  "key25": "3NAsx3zkF7R9W4Hgzy7Tei1jWV7dajGUca7c7aDHAsZMiCqn95wpwLxPJP91eZNrptrLaszVgdBfirvJ5pwgouZt",
  "key26": "4CRJyckQu1Nynx4CBL9BA1gEgyYezjavNxkbTYFU87jTVj6fp4WXM1YUdbvokVGLPXz1dPcLakgEcAmir5SwwkzY",
  "key27": "4wGLYP7PDVrke3xd8Q5rcegXgBCHYkWJrtQhTmgknux8BTtvde1Sy5ktuvTKNrnvrP8oz1gWw9EdUHjp8uvRLDcR",
  "key28": "5W5Jzu4mFSq6LufrMga22pVaTkGApzmqczeV7BaJMCd94WioNfQcEpiveALebS5tA7VGNLULbwDwfHwGiDmYtiqD",
  "key29": "5EZumnjEktcjMm3H89J3FHdhcdHwLEpewRMi6CSC9iD4W93AcuX8HX4yKdbGYF4EELJuUbsAGPb3mt8BrLSYo7Ki",
  "key30": "H9oTcaZypZaiBoeRq5PBvymumKWRTpwowp1Y1KwXgrjZrvibSZeXowidHZQCmWggZZhq4vRssz5DiuenpQEncxu",
  "key31": "3P9khSTB4bn1ZtmQ4FbRHwFcMY9tbVnxzH4nhZxzY72DMpMcbeWtDWifE2rUSxQYrZjcMNWDNdTTFz4x3V2c7v8q",
  "key32": "5e2tFBNECai78bhRoZWuVjgNXXsdqEThhD7D3kbdVX8ThYnBp5783cFWnsR1Kj2jNUSoXyfVdy41CFvC8CU1FJgN",
  "key33": "5Z3gDRaaAuNG4XTByc9qVFbM31N8k6FEfkdQRVqwAJhgndEu4FZjWg1Pe8m1x6n6RPV8bouVTzB2dteWNGPgfTDQ",
  "key34": "4GgrVWribDCFsABU1kvUcMEbZiXPPPCp2ir3rRqfCJfaJEoiKPPPUFfd5TBKprR8WigGcBwG9iBvmXwuYNgZ313q",
  "key35": "WptPakfcQp5E4DiccvPNkxP9YXU2dupVgX1zHEbLGNyevkqRsxmdsQ3xuiaFKyRfo1pFrzAFhJSLqUF66cbCbqE",
  "key36": "5X6ekzqZaAV8XTjetNv5566ThzhEC6tCJ1UBkXXzgFdABjyVfSnXgbRK29tdZqgUqSD6BBY3JTqijffnQ6nBUngP",
  "key37": "cDEcuvDxeWAghKgYcaZtvCbNcEWduSAHDs1SGcvLfiETwZ6UYUEjcBhkRqQV1uBr1y2ttXKMd3HQpNN4TgcNxqo",
  "key38": "2pziwUc52AjZU1qL24b6medC681EpSjPqq8Yh7cUNBt4yLF89gB9GFGiiuzW9vMWW5wYECHK3GqEaz5uq2KQvCRG"
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
