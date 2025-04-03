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
    "5qgCEX5QQRDvGe2Zpouh7adrGbbTafjCeLR7n1HyAPnU2GFBTw1shNbwy5zrhVQWysDQouCc7Z1ghdam1e2qnWn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454ucjSqnmcBDgD99SS13YtYxUFJwQgSgZEVf7oMkEjmKv2sHtEhaEjYDXtKKUz7S8e6fBY6Z6qxJzYEDvwiXMBu",
  "key1": "4itH3RLYAGx9YBh5iP3JgGEEDJr1jCwbnMNfTTEyPPpE222exuLNeVTRf1ZrhCDxS5vqApNYJFJ4TbxFZBBm5TAK",
  "key2": "21EC5o7fQhk61WYBUE3QKkVwsrmtC1PPfsvWfV8JXR1ZGyR8KaLQW6YJeSy2b24SX6QTnA8DWYTRB9hbMUpSUQCG",
  "key3": "5pHWeGtKd1nzcbgApzkFGhXwAJAy3v6Nu2dhehryrB6qvVBg8WbyvjKqK6d7bBnzDnh37yNaZ4JzjM6vv6xmtcBA",
  "key4": "3QqU8vUArMPqg8dpxevFpx7WyhvTkBfN8K8VHfRBDtPJ4JtdefASAEGKnv9jwmSLFuCfbgvRJmppTWFTiZEwixit",
  "key5": "3ge1afFArBjPq1X66J34542LixSXZc9u5ivHDBfADAJSEzLg23mtQmEKVy7hL1YjMJr5M16h31Kogv6MUiUzLo3x",
  "key6": "3XzXxXrJEcg4ahqemQryRKCHxhujU4MFURMkvvqRPpsGZs84K5eL1cN729QBE5M7g1qTuFkqELiuyg7RFNpgqwsS",
  "key7": "3sGtGDjWWZfzHtsgpRb8xtSCDhAd6YSJ57Q6dddwUvGC79ymaNGrgQHhkMkdpt5ugfGZXiwHULFnWs79tJpUABpw",
  "key8": "KKSTAGeKzhzsceTtSTu69YaGtK1jY8pcwUhVmsTgNPMqdg3esbea77xUi2mfZkyNzM7ccqf2WokDxezyeyEhRMY",
  "key9": "3wr5mDjwJTUkTx5a5C6LNSZjf74war1QFrWLX1uo15HEN5wVWJFPukZPHRPhCCyAVrfNeTub1SrcACFev4Sp5RcL",
  "key10": "47ndUsou4XvimMKFEdQ8pnWLAkgcVgAo8SC8rp2KB7yBLYH8aM5bDehgiYkaxrkxSB6wiCmFhLHubmfUZQJiWz36",
  "key11": "5LAKknox2pLv6M5r1EcnRmVzVtUpRMeYKqWnCm6sHzquWo41tiSsw6GyeixDk6RJnrvEqdtNpBEQ3EmegVZVNh1J",
  "key12": "3MSkqpUXVeRZRv8uRR4DVNHFxQ7y5af8Dp72nJrmmSevoGoCSE9E2cye57iDwG6bfLh23kzgYcW5JUXQeT7Une96",
  "key13": "5ddEKUaD9A9Tfc3gbTVH4oZdNR8ZFrQVLUzyX6d5nT2JmASRkqVoF2u3fr7s2xPkdk7w5XjMiRcoC8Vac2pt1M5h",
  "key14": "5AGURDG8QQ6nvbnFANB7UPm3xzubhdp9rQgq3JWCV84bX7XDRkhyNfeFYHxsqorL5KXjfMJoX21pzhMQt3v99s9o",
  "key15": "CinTHCMrxKbbfnkX1tbeqDuwpoDHmjHrf2WaSiVA2ES1wYEMc8ccxtDzEUMWQzUqSgLyjdKwayjZD7Ev59fScry",
  "key16": "51CGpTr47gqwSQberEttjNrWQDnrW52okFKs82sGL2jrzkPFhYb2DtfNtAxKbdHQSGNMWH13CEq9VMsyDke5yXp8",
  "key17": "54N3ieLL3eBjjxBfGJq7Le6cQYY1eLVJ5sDWCSdf5AtkBnX1XAubFPEnYRFyxQh1XUpegsJ6LkV7BBJqJa9ogFNR",
  "key18": "vFncjNokAbJc9YsWN7kyVgwVH9itzgS9LNKw6CXZPgGoPTwPnHsJhzVRzt33jqTbwy8Fx89xrCnWBkp5XpnkCzu",
  "key19": "5U2zXG48DJT6z2nb4Rsx3JS4BvKy4G4AvFM8q5a8sWzXZuG2SDuec9Spj6wgMvsCi6V7J4eJ5bpQW2rX4DnTzLzY",
  "key20": "4jrhrG7aRw6pms8FavNp7NH898HBdFWYFQtPCPM83qkZBtQRMf5QzMJbQTGTwe9ec13yHanpYLPf7FoYxwMnFntd",
  "key21": "CpxroPixsfq7cNnPnT3CT6e9ZgTvHyDN8rScn3tpoiqEHFi22D6Rkp7TAxF4RVuh162Ue5b7jfgEMg6xr4q5aLD",
  "key22": "2ibCXTUMVNzHnyCEZRmfmffYTX9yvt5ZHQ6Tm7Jx3TsF8GcJ2DiXWcUtvYznz1LxwskVPyS9gAYSkPTf7JKf8o6",
  "key23": "5swfNzwHiA3jmEaH5JyET9Df2nfnqQAE36oVam8mzsNz5tkKa7LCXszsfRJdD1HsiqTEA8A5ggYUKf2GobnWtRRa",
  "key24": "xYc1R76UjBUsGH7MKVwMx2dgPANXJAsK82kP52MX8gE8cu7BMaxosCyK7LpVdFRi6744t7oK2BA89TBufCJoP5W",
  "key25": "5LNPptSuF1yNL6M5syg18E1BabK4iznncyCn5VY7pKTVRdbZoPrEdwVPV642MtzoUyaCi2sD7tCECtt38UZkWV3d",
  "key26": "4MTTD9jZUz6mb5X2HS1fYCLq6dMRgaPpNZ1q7kg6PMYQdjeUmYox4qrXyibNc5PPsKK6Bg1pbfVXHYttJ9FwRZWE",
  "key27": "kmsXuWTWEZKny9ztjEudtvpkZ8PGE2GoFPoxQNPRQtModo7TY8NWXkcsWkzz2z7o1mB7tDsmYyBZXwKYcimPZAQ",
  "key28": "jBWUv7rTDcShFSs2rKg9pMUsJS3ct5o9K1U1K8DGgFuUmU8YXPacA3jdYD4syLH9i9kiKiKsW4BJYtvWE93zkEv",
  "key29": "4tz1f9uzc6r8j1cqrUehYNMiEBaD6PpTKmxuT9KRcmwnDZbN86tVtH5NH3YoSU14wi2zix8GFVeizQ3AUgw13KZr",
  "key30": "42KLFMQQriygK9sYzck3wA78yrighbLJDaAe3njzri8t2KqHCdtQ5y9TWG2Y6VXWLQfNkNceLTC75PgrNZhiQyMM",
  "key31": "2RqkSVuASBWmSjUR2JnhCQNowUKJbxcJnG79kbyPhc44UDULEtfELCddqMaBw8itfWeXdvkraoXpgZT5MKGJdnFY",
  "key32": "3p9PUrGmnftETMNHkrUv9gghj9W8Nv99mo2Xvi1SXrenNKsEGnVrNBpv8qnZjap2WCEsUHaheVgPzfEYUKexZoyo",
  "key33": "1GUmirVCoA8yLuXRikGVyKCgeB2mdwReyf8C2pULQ5XhvsVEpJUnwAZq88Jud5SYGFwVmoR3j3wPXYr2fAuKRLX",
  "key34": "iA2dsqHfG5in8kqp9X1j5HsMvV3K1PKMuixGkNLT8rooqqK4kamQYfFjBhvnDBzpYnrE1c4atD51iNxPwCb5RwJ",
  "key35": "5348YoWk4XV8UKACMtvELKkUgoJezpr9rUreNa2KF1DB9bAnTDx6ugYva1ng1Y3geJsXCFmDeaWLYDthBaeuEkmQ",
  "key36": "4C6bipx98r9EgewoLbu93S6QmgSov79PAb9NkrZt6x4vy8kxDKBBB8dTAjirY6fn2nA3ZCXJLm8gVwQHnzqSwgoo",
  "key37": "5DMoqiJxi1FEPmoY2qSn4oSxXvvHpUjQefUjZ4bpAzhykkJHfYcCteRjwwDENYFbA6nm7DQfVYNejagV1zUSLHLc",
  "key38": "3NsWFTye1m5cVLJLasjtKMoPpp6Y5qEKFVZS4vAfX1nENTuESCwevEJPap4L6EyPKT8wWfPcixVSPs6gLBiP2vne",
  "key39": "3wi8SngLG1qLhRfA7ZXN1brxJvoWBdT1P149p3grHyaHBnsbGc9TPhw2oYB2dBqP86L6KkVhtJCpFkXjvPoYHS1A",
  "key40": "vq9y4YBdRNimuVQNch2fW2NQFto3RKzK4LhW7r7AHVM5WXSLMLS9WJFePtDkVjpXo83v7vq9631ovdSvRBAGift",
  "key41": "kCi9gb6URH2WEtMdk3Wcrg9MiZGtUKDTmakhTEibuYnXZnGSroKheSik1KMU4WEQ7uBad4wRCT6Ervn5V4GsA1b",
  "key42": "2gdWfwiR8xH8VQqM4SKV758iqW7RFsjsL9r6zomKymHbqk1Lb3oG5jN7zswzoWuxJe9xiJbBDZdCw1iV8oEkrPT2",
  "key43": "5Uw7HVJjZbsoARBsENa1F1HkRjzcRHgAwEd137MymK96Hyb1Eg91CXGFqJAVSkyJf662z8BkkeDD1geAHXTP5R5G",
  "key44": "5pQmGpQnL1RxPX4mbupdxoxXDJiKt7kG3d3vkVgXArLDhxvkLCfNmjQVuYPpX4SLG1eExb7QTphZNY1WMsdZxoaJ"
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
