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
    "5v8h9KtdJ6EFUQMXyjpyRnirUaGq7Dx5CpeSBHzNSDDtohxcsbKaV1hP6qr6k6UteYuHjM1BVvo6ReLt74gYzwec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d8gduhTJC2CbYoBTYetJBMEaAm9RqgrTh9ZdsfmJ3SGKuMWZJxuhvxiiKYqRUMZp2vnaNrcppEuznnYR8g9bmkN",
  "key1": "5q3Cm7ztfT8avE6qAhXgWo8gnyXD6mBYDZPzxMtY72vqGHhGFdCkx56Uf9JfpYWZA8GZtgYCJ473GQ2EpKTC6vTm",
  "key2": "5hDDCe9c2XXMfMSCG8S8ncU2F7fUUjMYiYgvB1vJB92kzcFg4yAmuUCbETk4cvnoPvsdrEQR9NBsPANKqYVoPSsB",
  "key3": "9dVDm3RtXKcV2FUWk3Z9h2hhtA6m7tGUiGn5ybEKzswSCpHboNB6s2RPBwQxxvdhmWK4cj5ZjFQL47PtxubW9d7",
  "key4": "2eUmNWVmkXheGBbaesddoVWeJMnwEUCjDXF3tSTdQwFv1HHJJSeyU7BEs9ksZfkjytTV2oERDLicUN9pgnEtnRu9",
  "key5": "4bM9srEXJ93DaaJUpELVEtX6MmXP8quhYjQXvDxbzCKFJK9eGSZm6jsBDWaXXVJuR2s9bZJmWezjUn4bhtpWomnF",
  "key6": "3Tgzx6rKm31tiEPuD5jvkuCAN9daC5pLBmiS3vnU5xWGFrmuLCid2shpT9HpfAh2rNm7wv263Vq7Q4qoNcehvAQ5",
  "key7": "5FcW7iyeQMPtY3G2zxHzhayNr7xGshECHvD2st8ZFdv7SwT8LVimEVHrPzirUk5iSfyrRNmMxhHmkkUzB8UMXVVJ",
  "key8": "5jCBP3gqccRx6mzLRRCQXZZSJNLFQRALJzNFQvEBqwk5vkw38Kvj5eM3C8aUCevya9rXBL795Hv4mHsCQ9C4EX72",
  "key9": "2q9LHXbvsKD7YR8EtrPHBhQ4JALMt8e558NZSivbW9oywdxBeu5fiATqxFuWLim3q4SR95KNVM67JLfTm1WWYKPj",
  "key10": "4rSD8BVcwVphnsSxunCLEXGfJ8HP5prjwhZuHbqAEA2jUbXGqHFme8Yhx34PohUFnXdVoCURuj1vwuTw5UZzbRW6",
  "key11": "M6EJFAcCyinnUy7DjLG5Vi4jtFmLkMRjQAsYa6iukdw7NmuvAJEC5EN2QCRCvQNYj6BSnb6rx55VmsEMrn4gFWY",
  "key12": "53AjEisih2zvF29KxUUN2axfP7VvuwMeSHguu5jxRTdCUyqTxWA4aRmUpM99cXaDzgJJ2VCxVMGDbADutuXMNwSA",
  "key13": "3BmARj8kur8Jg9u1ejxo6Enz23fgQBTik71uYSE6xwhMVgAECVWE6ziEsGaSzrhTrNePMb4gZfM3f9QACSZQSqHg",
  "key14": "49yEagW6U5mvQwb1yyNVZyP14AxZBkveZEao4Fm4GJx4cnPzjpGHDq2JiggD5sfcryuKo17EDYeyybVWaW2xA8KH",
  "key15": "6TLQRkg9BJ7HUAaK4si949KtXqLcL5EFn39EWtfP2XZJRFQT5qrzqPPwLhDLvod9qVqCQFqmjrZkMxZJz9eniE3",
  "key16": "eNQVSGRiz8HDyTprtmu42SRxKnDH434wJzMEbLF1eFT1FFeQzJZwbdh3CWZAhGLQbcn7DHBED3rrSm5gM2ovvxG",
  "key17": "5DLswaj2XLvYbyFHNRDkkqEPoothHA8exrLrHHCXfWBWE9RMmS5r1sjkU2XJ57fdkdxVUKZ1NWxNcxYWffYr7KDW",
  "key18": "3sfYrYab43QGbqEMoUwrWrEiZuSj3qXoD7sDVsmZd5uj3eui9m4fJMHPhG5wp6YJ5rfCKUyettvFo4GRojgn2Ahw",
  "key19": "2EhPWi6ifN7grCRUFRL6Bxvc5FkDyuvLSocX5WZL2p8zPjq37KNw1o6U2VAZEXoGcsS7tBAEXbVVjzVed7f9ppy3",
  "key20": "2BK2WcThLJLRkj4yLX6w2rfLMFWGdPwBf29xVZ4oKSQcocmq4xmu2hNx6tn1Agzq8hACG9nZ8jWa5k4scGFXtBj",
  "key21": "3E4bMUmWXgsFhrCwwvYWHEZN6Jwkj4x9TxFuPvHErwu9tYPYfgXSXFK8NyskK3wkk8vc1VNbJK9iNXtNDhyjkE5N",
  "key22": "2aT5WDzg4ghXkZhZibsoDaBJhX3bkfPdBezbACwN5Qod97arBYd6fdnNrcxSSXedpTz7cEJyHWhmsrN7AtXuCcNJ",
  "key23": "4qJzm14JBBqupRDVYySWtejngHkRKzUzgKAuy392BNS39Pksdats3KyY3cjjranhydcGunqwjJSYZ8L8MukUqVhw",
  "key24": "5SMLD8eb7w9H2sinHVpkSHff5vHBMbWFbfbPHvXYd8ASBVMw4WerQo9AFUh4k8rw1ZztQmJJ8H2QVV6jCXhfBKRZ",
  "key25": "3kSGi3smWFgDBY9FvYHEFdJwCfcne7v4qsDWFTpR8kJgb3GFNpN9e1DftyxtdrfiRKJ5JPSqYS1oAM7gqatM56u",
  "key26": "5njzc1S69hLEcqWHax1HAGJV26k58A7mcTydvs3Kombo7tJzoQD3HQ2P3qvd2ZzTTwd8C53TRaS5C7H2SwH4Zvy4",
  "key27": "5748Pt4U6YysNL141umMm6J8LBSzo9mUw9ATJQ3nuqM9FoPtp5qCD4m9LUAyLTXr8ZkypcB8MW2Bp9HBcjs1Ay9Q",
  "key28": "59LjJJGbJfVHrnDwPmj5hQHdj6DhJsFSaPboTGc4T8EnFMGNFtQBiwzw5dMKSZnLWuBFtn4at2q7HgjsHRys4u79",
  "key29": "46cPW4smW9FttV2kNZo4nQZbGUqR9ZiDBVzbuABDFF7fxM4aceeZQ3qnnQtf94s6kBctAFuztMwKKfUutrom9rxX",
  "key30": "vsXf5FFcKEJcNvS1BE9HFF7y7V4PUz5U82D64YEd74njUyjuX2ZYpWDUEsCHrzhsyhNr9chLSjKzc3NuqV3i4ZV",
  "key31": "UqT825abg3P7sREzuALvxcSwhiLiZ6QEXxXRkHY92LNRLndBkDzo6dWw37twqBvwavkX5WsGgZrCqWEBDMLXyL6",
  "key32": "5gHRTiKADsca6WBBr6oVqpuTyPpVuMxBj7wcSYGTwx5SLoEqq5E7bz9FmEQaPFPLybzUB6Q8J4FUsgKrUGyujvQS",
  "key33": "3PEgZvgEzE1dRF7sM8tLTHh4oCzEPRDNVJj7L6oVn9W9i5dbeEduUuMdinoPqAXWRqKYpcyEQ9bw2MRAdConUw6W",
  "key34": "36pNqoNm6FCv5gWnNVofx1S6DpwkoQQVjCCEWyVp3ydYACwTjK62FQ3Q3oMHi5QUnrVXfHbkdGFWE3trbvDKQmo5",
  "key35": "3jpzGaqfUPMDh92jpb8HbviSGwCqGXFWe9RA5ZXPVEgmoH7qakJDYXFm3PpWvsZRrYXqFqrZnS79tUp4RphGQVto",
  "key36": "5bC24dfBDCCdNRonErgRDHjwzv1jTEBEkUxFXUvvp3DX7r68Xd6knuEPfR65LHLafcLbT1BYoEytvkQXRc7bKPTx",
  "key37": "5vpgqVpKrVHLzSMhN3byz7EcTvXHTdc4KXDG2AaMV1GFeJaf4Tt4q3NifqXNLygcqDC7YRQK33aBurkPN3R1xxmv",
  "key38": "3LfjYYgFVXLwzVLf2284jFANyaEsUtstJV9itwYn81dYNqjKizfTvJxnxV4oGKvaJUmnFRyPVBCQN6gPLacFULFY",
  "key39": "JwN1Ug5tBKh5prdfMyN79ayRwegT1AEbTqRRaEH4dWckHAojhHUEf44EFZbn6Exr2gKdKdgb1k4poZ6nxJpz9jB",
  "key40": "pGqeY4Fx5ndpjuq8F1fekqEN8ZqAcY29CRxH2uBXg1Twy3LT7FRkwJPBfip3UmUGxnbcc6f5CCyezgQaGfYFVjb"
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
