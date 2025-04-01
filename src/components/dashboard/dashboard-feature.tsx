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
    "keS1LkZhgYf7mcwaJnbnFw23iN6enrVZ6NR1ywWLQ4jU4pDTiYVQDd6qgi1WTGptdDVssMG7zptFVbSQFFMKphX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQTpkCu8gF5YrcwqjS1DzQEtgej7vRJZG6rwmM94rE1fnCKec2Azd2kf4NQcgHgqkTbdMNsEyyxiSd94mYf5XbX",
  "key1": "4wFwHxR639drZqspNR18pmTNNNhgXVMxqutaFcHE7MUEEJW73ZkYfYLMAAmnJhKDAFwu4kqevavrSL4cWpP6k19H",
  "key2": "2mFbNvRd7Do1zGsHg4KPgSnfSYfGMBdmXVoMUXm3kfcg4CW65XscQxQ7vZLViHNqcdnjTQTE8WZGXNuAZ8yCfJVS",
  "key3": "5nmGohyg4mUyAm4VE5b4xwG18r2km6BYPP2ESiMM2ww734TM2HgVbwnAawxyzWJ3CGsrVA68MWCutZ7wztUQVK9h",
  "key4": "3rVeXzmZTjKa5iYsNWxYodSdYUfGDkv2yE5oYUsQGXgCWrc6gzKRt8M58MmqXhTJSTMPgMdmzrFzCLosTByCZ2nW",
  "key5": "66oXiFC5R34yKsApmFJucTbCg8F62g66gNwfcFhNKDv78VShvCfgq16CvUTEsU2LWJweNdJAbJGvUEgpALSvHBY2",
  "key6": "4Tf61UH3dxk3u7SizyVQMUB5uWXmVoE6nUJepCiDGCCUgTc6egzP6cosGvFxeiUGeB66SoyAPy44ES282Wy5xQKL",
  "key7": "ieXcEQVFkG61RYTL4P5iu6VMPvjeGi5oWNU6hJya7D892cbmK5tbQjYDF9bAnjGwydLhbBhzpSTDHXGG3UuqYYq",
  "key8": "4Wn33hmdXGDd2uiWwqn8hGACygd6hP3VjBdMHXmPiuTJsaVqZsksTNgompMdYZ6ELxbb5QA9XJxj9YM8aCnAWrye",
  "key9": "8BhVZFP2rxKVWKp9QoTj79f4J5PdSmPduNgRWStyoFAiVY6r43z23HDfQB7ctDuH9fqsLi4Mc2vodPAjFNMv4uw",
  "key10": "4jgBmn3quKsg3b3h52eYeB8CPCGVHj51TQUQgrWPwFDibbwD5r7KEjc6U8ofsHufiTGnASvhMuPp1VirxQ2EZics",
  "key11": "5g6W3a1xoHMcWQBmesDJqzMn4Nf2q43W4bezUDrgE1T9mqgxsDRHbDpuz4b5yxke977oYvgXXUGqdwragQv2zNH9",
  "key12": "4R8ini53xmvEFBKmxLcMvic3aUF8RqNUsuRzrFD82KVyB1csAK5K7nywCXBE7tZxdshdGHJe5NTRixUhAQRhZXa2",
  "key13": "5dCu37JP5WZjqm7kprpj8C8qaV9SwYB7gnL2oMi1KCt289X5psKevxyxw85HX2JVqxnsuKtw7gQiL7XHQhRhYRnt",
  "key14": "5G5oHRoRiBJqBordZXScbUBZ7wAgbuHd2ecTYcfsAzLXkoFgwijA9SJoXfP94yaGrLDAjmyjkCTBbydzMvhzM83G",
  "key15": "2ieRciJtivUegFEKbEq1y15BUEtJTGuDo6ifAxpahin5xpRFG5D78ZqB6FGsFChMA9o8D3dFQNXrpT9pTL6xtpHj",
  "key16": "4uybFSjAFLrLNtfZBcbqk5jVaqtqWwBdMzgZnUqrbgu8ZeXEPC47mmkdEc35jeSKMwhSkBWQZdqJagzRdwWtpK42",
  "key17": "3xtvicRbNDQVfxR9fuTNk6iDsLtmwtCJ7L9MmZQLVgiBjDuKW8qF7K8nX9PtDYRqB7oxFqS1P9dybS9EGu5Xw1xH",
  "key18": "2tvUnijDzEtkKMmTcXSokrsuvYjLbvtS6C3DWvN3sFqe2M1VamhDerVkaHLZHn75g7hjQzhHRAhzk23arS5MqPxo",
  "key19": "5c29TwQwcvqTo77CgbRg2QcjBormLCGsEi4RNJFnwSiGGLuTQ3oVPtArxwGqiMseud193MWjNyrJkrrb1jFHsjd8",
  "key20": "2NwEdzxCrVnLzX3p92xQefVzzGumzKRhjMQByH56Lb3op7TkzNXYykkaQgGxa7BtHar8EWTkLv5gGv9uNCAKNKdw",
  "key21": "3MYaAbnkcbcjXGzagm2CfY6oNFVFjtwaPEdskcuaTTX1P5C2LP5USXYq9e5Xok4si8YXSEs2HvWYQy449ue1U5AY",
  "key22": "5wvQHHWF76UhgpXvrUWZo232VvR1APmMadV5cd9ir2HSVNxd4TQuQWoY54wmNWAgkoRGMSNesDJjaiD6nMNE2LAA",
  "key23": "57NvXfjgicKfyvZMvWVszriB2LzAemhbxo9MPCjRhP7jTWvyFzPoFRgHaJBgNmM5JyRpRf82kNAw7Aunr4JXDzhw",
  "key24": "4DQNw8RD9hnAYNX4s6tXDdbb6WTiLfPDFZdKATShtysN3Ehwv6jWvVuo3y3aDkuFAGKb3Z74emMmwd36ak9wjLy5",
  "key25": "3Yz6NvkT6bYfNdKhxtmGDj1xF92yF6jGd5kWgdTPR6t16PgQDiZV7vhS6K3To3SEomAdrbGnCESQHyAPmmqBaUzK",
  "key26": "9cMaPT7CadsjK11AVYY4qnTjBBGZn9diQMH7YVsy8wv4DMyRZyEYghLLuP9NUExPvrTcgoLUmQFmnwgbrcFJLnu",
  "key27": "489NxeFkr3ucMJupNesxU5YdMhiASxFkqftf29vRYNsLXhkuksg2WpETr4n1Jz3oLSEgheLHHMPJFjFSfjocQt1c",
  "key28": "4aHxp2KWaWYCuHm1BLXupzBvxrw7LZ8bFEBTE6dLh8kY8f8gfVh3DnqhXEHJjTEmnAk25xicCXfQRLJCrNWuhkmf",
  "key29": "3fMKoF5zypZxqKy43XnKsQAkXr41BDmF5TMBW9F5UsUu2qi3zppgk8MkoA6SMFuC3JtrJ93JYNnCXAbXCnW1qLXj",
  "key30": "4R54ZPEG3kx1Cy4wzHCHYyYLqKj7xACLRXVqUKTtMFhyrRzfPXXpK7CxidKCNL83dLwbCp3BNuQxjqdz9YpKup5f",
  "key31": "xxyRBCXnPCUDrk91HNfrShmfrycYB5FHgffMUEZC5BX9H7dzAzEPZmif1RaRT5QxuthaSgD87CDSLVsdEAZvs8d",
  "key32": "34Kb3g4xtxbNqdx3ea79fsd7ME3gi7XM6y8FucgTsjHyauvae8Bxi1iL7pJ45y8oWHQoVFshF8EXdSXxQXjC5HhP",
  "key33": "4RYEMniCSr3pCdUai5XVhWRuNnJQaJBYjK6nkMFfJxjnRfSowrTTzBwexQZKtxZ8r9PPctB1WPt86uKMTGoXtXME",
  "key34": "5hzEEJpwa19EAsjSgyh88NeCB4hggdSgLrUgRmmQsriZsKnnmgv9yAJnYZwunEKJ3cR2FRbrrRfs2HP539Xn4aE"
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
