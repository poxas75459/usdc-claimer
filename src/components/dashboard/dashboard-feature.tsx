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
    "3dm6YCzE6MNo5sccQNEiB6XWVdc4ZCxWy8v21GrUuvdhL1rpkjZM42FedeBM4GeWU3nKEtAW9tMyyVEDorB4jdp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2cY3zLzYGxcWs3KYNRqX4RRsA1ASmoktvEfTckY75aJX8UtoDKmVkm9tehtXtDjkPLuoPy7rXkWz3VjKVXMbPq",
  "key1": "h6dL3K2EDckXFoMyDYvH25dXhpH4fEpDwePPw8JCqXjof4kYRwrakYJzd6phGhhF7v8zTo1fbUWGK9GQoSQSYbM",
  "key2": "579K6TEjqnqPaxZshtnAVwHaA6vFSudgod4Tqe6R67guyjuoodXuo9Li5UgG3rqc1yFHJiBoawGzeKapx7KgY95o",
  "key3": "ZxX7m4yBM3i3mtkEJTkAiFbKtGsPBvyFSxubSLFQcmmnjog9mNADpBVA4YQuv5y1X58TiXksvWapxaQyuTzxdMy",
  "key4": "3t8CBWABMAa3EEqw6iUqiYVknmYh9gKtQim7sMkvbqoyc7rnwQQNbzvj4ezNewimfNjwivjcn9L87UHVpXpA89DZ",
  "key5": "4bYm9mg8XDSi8vGWSnT227E79srty2kadH7YDr8pZzA4Ahh7Zxm6HTmFomoQf396assEGqRZfvib5K5onPbDxSKg",
  "key6": "5xQ4rVp6rqHFr8kiYDyeC7XKntRFpA4wQD1Nn3qjLtyRGi9erXw5L2BwnYNmdd34fYWjc3cyvJHnAy19UKS1esyc",
  "key7": "23iDT7CxbDyxz3pHNKYsxdEGxgsP75RgoN8ZHnRm23MQomFjMjoydGBUuF2PeFyBJ7LppvgAiSbZCMu3NUKiVE7T",
  "key8": "2pm14tCfpYKnVXiw7gnwgZP8Gnpha53b9m6Sek3DQTsVpjR3ntP36NwZcYRMZhGFHtX1jnTzNydcz2PTj6BDBrog",
  "key9": "2iLkh5AcpxX516mUymf6ZoNGgTDcqvwMLtrwkZ3wxcE6PUJYBjrqqxfvjZyVgFiYBk6dx5W71fZygF8L1WPRgQCV",
  "key10": "48wBfeJ6vARey4ty8dRHFE9mJ9gkE5nRYWBPRnbvr56T4z5tcjQfzrfQC6ZMpRQEUZaQATH6Qww3je8tYcsesosr",
  "key11": "61XhLpZWmPDh9218RquCASbSGTkChvJksjREx2BoYbHbybnBX7ZesYZVL1fidoP2swnbVv1qKnutX2r87uFxKpuP",
  "key12": "wwoMDAraWAcEiYtVtBFAxqz3zReRqPCufmrdnYhyFqyWCPtfUtNkeY5Z1iWWmGASrZthumP2MTJNyc3Ba78radZ",
  "key13": "UJLtQWWQT2koxkcVhpVWJYbqUrUdGmhFpbiFWnYQRSsosmRwKFNYHnuVDBYvYs1rrtydPpgq4BE3pQ6ijzoywho",
  "key14": "9v7iTtBa14J5H2pAPVxB8RCPF3R1SVn7eKSAVSGR7WubFjeum7ykUq85tDYYtoL7KTWMAj7eJv9vmMtKicFpgfb",
  "key15": "TCQEcU8BC1jdpcPi43xH7jg5t7wp3HVXY72Tuh74UBz9H7EJu7Jp91TBre8NY948JF5799LHhtFpbDzKvGPy3zs",
  "key16": "CJqySQ5i1bG3DnmJrCtpHx73wizmM4qnZ9PJAqtRsW3UGuYs1QMUTbRTTkY6ANM74spvNgoKaiwz3vb3P3w6kwR",
  "key17": "575PDBfbtGSEByojZWtUT33XVXVUuHMvFzkqtm9uEAR5akG1HtmZnCh2UzJwk2MvN3nWYLDdSnoZefwhCaGZR8j7",
  "key18": "25K1Gs9uKSzAmhDwExofX4GQ4kv348Renent8GtwDCGgWUDMgQfnitrD73E3trUiEZLSDpfHcsradJr8W1pyVDVx",
  "key19": "2ZZvEL2RhmkfnDXQNAVYmiyZdxYy7LRq5wu2BhZUHumTcWRfB2NZ8cJ8K7kvL2WcqLVWf4zrA6NN3aWLBSp38aXJ",
  "key20": "5SG85CbrbCMeTKekCZpmW8Do99btW462GuH3pKmJZYioTPyhmWJuUvgiY24KvvjfMpMoGzUvdKShfiCSLanrfghs",
  "key21": "5Spf9gMoSEuDrFDUP1SyDieXvkxjU1cy2e1QcY5whPRSvKYm3ot5yAc12Ft69qrZXCFHwDU1qzB8Zsbcfo8hFMcY",
  "key22": "4tSw86oC6SPJnGFjwshWKEtCroxrDUjxRbRAg3wnzkpogXtzKATDEBFoyqs4LLLZRFpGRPkCidJqrmFzWDfqe9ew",
  "key23": "2g7eKiqcbRrbz7YDcgbAUJ3SXjQMgwiqJC9VvtDLzMjK7z14jivDwEg66bFvZVfrzgp2a4oXoJaLZ4yp65SMMzY7",
  "key24": "2b8S227ndcvFxfLnnjvYqbowsVLCp6AsSxm7ZkCYbgQHPAV7eFVGicZSpEZeWSAwnX8zEe5zdzZqUMrGwrEaNwJV",
  "key25": "3XiF3kRBiRRBGFNxm6Jjbee6GGTiBhwPfgrWaEh7JdJQX5WiXXyq4QAEazs4EnieUT6u8uSbb6X7vNq11G4nuMSC",
  "key26": "4n4bT36nfSaiBuvpvLFmGuP4dZJPhBoQKJap92zJSLgmUaD78GMz5PJfMdn62pGARSS6iWfYJMQn7iVUmxYuHqXP",
  "key27": "3uhomzBLxEYHtLkTMSreVEDmK8Gak4d353KmNBogcFva6GZ2Nmmaqdc7bLKcD9ddBrPS8yV6Pn4wJaf959HxoWWQ",
  "key28": "3ZwNK9nDT3sur6zr5wyYNpnCm6GuJ3KeYYqUb81717wu69LkCCSdZugwEW7waiKUwKJnEFRvjjgVYAWsthuVozai",
  "key29": "2HgnQUSQFXFqMeDFRuWt6WBDNbHQHrc4p1o1f6Kc7YRkxnT4bSqhPpDLMQhfC8NeaFSbeG3tjurhytzY57XzXKC3",
  "key30": "5m2QzjvpanbhNGGF9PMC3RT3mSky2UVnHJhrdz9nmeyL5phzE1KXtZ1pHsQLf2B7srvFkofaB2vWkW4PdB954doc",
  "key31": "WuuwBiPMN23m17ZYbtLtJ1a4yyNQEzz5fTnRwPrkkuQduXun2RKXML9mJeytZUm7bSpQjGnpbsVEL93UiPtbh2a",
  "key32": "3mrn18eHeCGd3cmPLXQtMVNPYMQrqSp4eVPibDf1rbji4xRxGHu1oXM62xJGHPP4ZRU7tb7FNgkXipcksM4D8bLV",
  "key33": "2bmy1KqtjMbmQGwU6hbPUHsFL8kBa142xAFXUj4AVGHMNJqvgawNDUnKoqepBKsgQLQea6STKGqR26k1Jsdpcr62",
  "key34": "3xxFX89dQpxGedZ5aeNDpeb7hVkoTM9jLbUx2vY3xbwFeC6xcyfYJYmLeCXybLVcSwv4RAK8DSLQFsWYdbhjwvEa",
  "key35": "4woDnxi9bGBzsQaJarM4We7o9ZVsdHj3tnSs6eKFbL56gD4T4DzRgtuJAnJW4jZoVZnPci72m7d1eoLNPfk9wAK1",
  "key36": "2oDRvHcEBmNi6xPNKnJnMW8s2bWRFWFMq8H98prs4iZse9C7XB4o6PGXxuxfmZ6FZymNKLMHwi2VoJ6EQMJbPRL1",
  "key37": "5FnJAHud8PqLG925pDdR5V9xbzCxXqJuzngoBsD7ByFVKTKqNjfY8McnjC8vM6XXnq2RxhYe8KQmX5zvDAgGcYjj",
  "key38": "2UBUJbK4icyRfH771FCE92GPe9jPsaioKCxWw4bWwN62A54SBDsVgDC4J4d8ipAdhyuGe8FWoUFCbyKufGUgoJv6",
  "key39": "pgmnAEUoXcAE9yxgL3DzTnwJMuQu5yP47mh8uh5V3zoUtgn4XnYyPX7BFKjqBp3q6LjuHs542W9xTrhPUxLtFp3",
  "key40": "2mKGHcSTiPhbcwpu7Zf2WcU6cxMpfaGsA7Czuy1h7UhrmvSy8XqdJpUz7vgqNoN9gxHpk589fnottzDWYHExtdyu",
  "key41": "ZeZUAHvpUrVJWgCmQ6ehDUbQo3DJ4NYXCF5eieRHrmthX1WeooeTXfiPgctTtbg1bEzby5CZkVqo96K8XkKbBht",
  "key42": "4PDv9iCH3JyyJqyT9dUoA1EefAwJBfb9TwoaXDPReZ4N1M5XTrVDMHRzHmUWZqcL2w1pMugNibZovJRkTqFPbpwL",
  "key43": "LbDvZ8QQ81fxhjkheZjjwkFaxwd7Mh8213WbP4Y1qGH3cxsvakHUusUWZaACBAJ7ps4ovpRqPPgWZysMXN5sUgc",
  "key44": "5KnYuEnkDU1oYmRMBXeMuaD9uJBN7aBaoPjSVsdkTpE9RZoeFHDsTCPXXfqu3L4k1tWsRGzDEDt97QyNKy4mH4qc",
  "key45": "4VjSRRHdJdfoHm5mEBTJTTKX7u6r1ZBX41tt739TQxbtCG7ynJyCxbQmVa4huTptcCMSsSAnUgHLhhJcXyXtjEv8",
  "key46": "2sssZffs3w5HKzvseVtDvrBMuAwx2WpoazDNwUdPamjTR6rBF78GxVtuUdcBnypB7c15J7mdY1jWQdHj4cXwkh1W"
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
