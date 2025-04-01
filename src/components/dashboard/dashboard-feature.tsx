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
    "64apHCxgjugATRk3pLuEDQJyDWrVzDhXg619TPgyE6pDscDECxKezoBuXCcmi1KZH4PeRLMksUatDZY4be1LMfD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkuJWFELXJyAKEqUrKxF6pfncbkhqqxeuh77oUXy9wnYzAas4p9KGKYUfb4qsPzN4KbG4ah9nooiU2ZcCoMzTc4",
  "key1": "nnmCFhDgKm9xUvvx7fk13xzzuJgMqJhk1dDEmmg5m3cUQ3qqbFkzcXP3FFXZbmeT2zkPe4uLFNrcjVxhZL5ASce",
  "key2": "4yswQpGekHVQkHdm1TcXPw2QUjKhcAirPrVA29y9KesUJSiDxYMGBrGg5EZYJyW7bgiMSAiV8nd93E91QzLFYuP6",
  "key3": "4F5WuihbZmuRTG6syLXhsDbKojus5WyydzRMbTF4Efe1czNsHQnbYwtFAoKygfdw3HMacWZNzXsU5m4qEi3hVQ1J",
  "key4": "36HHBmJxXy679tMS14ZMbP9xEqVLWSEbDEg7PH5oYKC1XV471bazT1rFU5AekaNHgXc8AfNAXhkLP8xZoFdGeYhh",
  "key5": "2gDRy7fLmBqXdAgB1j82pAAfzPHpk1FkdHZCxpRmN41WnQ1SBsudRBrj7m1LYsAk7taYYV8v1Yd6dDP2eUcV1gF9",
  "key6": "5iL6AcRnsJJ6LjnTGuwRnzaQHxjfVHunSR8s1odvgRwvQYonPm41kKFwyidtyAWjkDi2vs9CMrD3VZx943jwRzgp",
  "key7": "4hrkEHSiSrqhDdroWge6pet7emHKKp4uwonbbrr5sLKgC9Y8FBhP9G6hQq1onVDE7wxYofqpTVqWu3SpjaXggAH9",
  "key8": "4i1AH7BGM4SA2BG4jXWW8524xPVZC8CxFjDoKtCDW1ojdqtx2QZYNMTWunZTZFNZEhoeKirXmH7e62mp6N7yJCDQ",
  "key9": "Ck4MjNzQkFtBDenJBeTDnXojA73Pgg13jqQLf5cDgMcxotKv49PAyhN8stHxmb67WBagq7MrFQSh53bfpM7TPdk",
  "key10": "2qk7uhFw81GZJw3FBiPipADmXiyvofNagF5UGLvxsUnVPvZyPZ2mgNpT36F8WMUVoTMs2T4dqDQHM89r4bLVpxJ2",
  "key11": "4PvepKJoEeCWzTMMjM8HhyGWJygup3GyGP9WKmgLv3ZmLeYp1fpGWR9djf13GCjNuZyj8n1fg1V9uXJxAsSdDfYq",
  "key12": "5VuLQLaiLc6vHWgPFhb8wF1Rix786C79243Uph9V6BiepADnn3aCcVT7H5HiNh4rgmPZ2WEwweL7iTSmvV1H9RHf",
  "key13": "5fgsjY7bY2ZhnUTYw7NJbie7iSnX7SmXZ6KXREkXb1pHUfc8Jp2Q6TexqaRfeu8p9uZSGEh9jir7dXG5YQPhvMTN",
  "key14": "3W2EX2YPSWmnjqoj3N586uBnuDxxtNDV994WUgEPR4S1YhdGYZRAapzGpn2Chm1nQ9rfhEUehtFVagUpSA8J4KVZ",
  "key15": "3mpPDyDKViArfWvTqY1ur72aDKmVg6CofN9S47Q9ESe6uVBbqHneU8oQnNKXCePfRX86178fUMJTH573dXQNCy9g",
  "key16": "4K9xmqLnozPWdUAfX7WPyafJTrMGRg7Ma4paq32oiRWkq6LsXGEKkde9tomSTPHCZHoYHpNEqvha7B6M7quseLjL",
  "key17": "662cCfxyygpZTCxmfuPX56SYRpXR4j8LRcW767EoSTi6bJoXKCv3vdbpEZ7EBwz7ZzGKPHxD4aDGLP95HYyBvsUJ",
  "key18": "SqBaQ2tLRw8cL8pVD1VqY2Jz8og9jJb1fFjNohPLjFnj9CYVDzr37Vgd2E1Brxize4QWnqmPZYQwQ9ptZvuMmjM",
  "key19": "2S71EUJTSu1rADrnkirhaCepwPm69ypM5YbPEWRhH73hvmZbxLJBMqyMjnnGYWvv1NMx7ZXQcesQcq5GMrAmXEFk",
  "key20": "2J2rqSmgDM52wYr2CdCW5nhBZdZZGa5g9BfYNPGaPP1ioH7AXRRvhR3HAS6aGamxgTtVfP2JEmYQFKDSuek1ed4y",
  "key21": "5yscwCfbtZo77f8XwhsXtDZXMygbEKW29avGUPWrdw43RET1XZ7aRDbwXM4ihKF8pZJJnrtE2vmW5hGAgUBzWSSk",
  "key22": "4jYSCvkY3Lum6nQqjoUNTSV7tjiSTa5RLxv6Se4yyC4nHbfybFMeu2HXUn17nWBuxmG3En9bLpxJ1p2kZYnMnbXm",
  "key23": "JVt3jWdRu9Du6uVWu3Q8o45xso3HmxkkJvUgxahMKhGKhwhYXoNx54Qm1a2pABPiQNWAhqku8B4DFhAEHnE39bi",
  "key24": "PcpuKp5Jxn4zwRmdQE99rsXXzCrDKiuF3bsPFYe5h8j7da2ahyehGJEgrnTfSJX8RVha4UDuwBwb698vJE3o3T8",
  "key25": "5E6ft3JWXzd1WtDx3hR4MXE5an6EhtJs8QEG2yduTVvgnNrz64Eqe3YiDB9NFbyy3W3G2VJyrU8Cou1mHpqU9QbK",
  "key26": "pKGt4wWicPkGZJtnGKpsNrmRSU6BVPsVPhPTLWjMzRu1pRU6fn2zpX5g2itL4BgFmAXUSb2K89b1NCDpmzcEgaW",
  "key27": "3ZoLQSdsybQYcwudhSLp6AtnykTGRzBxid3RofNmxzuBMguzAixm1TW6oigGwNZ8yE4mh9f1mCusEHcakceBM8yn",
  "key28": "Cunv6qZBmcvmWh4VzJwEpVgy8m4DUp2C6Sqigc71wuAMB2kBhTJJUsUMhk3gChCvV6LTaTVpZmrRt14ykFsxidV",
  "key29": "3TH8bF66qNjLUUY1jgi4nzV9rCGmMwSRAaqTY6zU2KGyC3iZT97qimf5evSezxHtsUJXAqJkbk8mKJczuKawyeyc",
  "key30": "Pr8dnYWnBbVUvgCCE6VtqRgK8MHo7bJ74he8DVhrwf5w8kuTzAgRVXY3d6pHTsQe2hSvgg8x5VkrinASMCujUu2",
  "key31": "2NGNnyRod5nhGGqCPh5RtWSyvgpxu8rfQoYZT3m6MK6oV3jRadw9oo9V8dH7izX9BzJJTeY1kTSbbd7jaN3wMqBS"
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
