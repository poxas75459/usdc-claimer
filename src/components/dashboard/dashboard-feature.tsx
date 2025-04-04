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
    "3ZB2W7gN8itKZzq987kLfiogTGZ1KjKbhUWiXiZvzTjqfHtyLSbVvCBpy4Fgq4E2dpwEzSR38diC7dDqZ2tnT45x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BqZ4xs2TNNebzzTj1nWq1L3ZNy5ZmYCZ4fb1oJ9VeX1zPymnWSstvpRpbJQKydBtBEGoB6oNrJqQewvXrCGnuZU",
  "key1": "XXqQEmmgNLRFgUPiXkB2FR3cBTTywufxUscvF8YRT7JByKNZo56GWmZuKQdPVu17cxqoM2iKw57hsrWk2oRpusV",
  "key2": "3QxjBYCeto9MPZQNXJc64CKNh6LGxxrtzTGjRjKNW9KaHbNt4GfFQhdDRQ4MLRgD67bryrmgjEZeYRMhP266eto6",
  "key3": "3KzxH17eZYedefyqRPmDjNmjpGocqoLtm1DSQsTRMguoLyxUPkE4h8K7vJV9jynE6N3ZydzB1Dv2oyf5vj8CxeCD",
  "key4": "YbPK3GR9aMz2kpTn6inSQ9428evzEsgRDCdsLK9NpWMAMs4RH3HkJTVAZWUXUXhPGd7tqp3s5MPGB5Zq9Q8Rtco",
  "key5": "4tBG6zgfuwy1vCpnCYcnNyyz2i3x87krErW92iWCppBGqtkumG2nwEbBfhL9FjxHBh6zWYW1wHUQxfExNU5gvtqo",
  "key6": "AW28RyEeQJuPcg5myKfZvYmfxDiXYn9rfYMWpk4s2L3MSYAh5F3rpoXJJpRBynm25JbuvwpbgkKYiYdMZpNZfqw",
  "key7": "3qQZL61FE43QCEZL3SUkyCaASRfGvtxNC3mo3DDVEhP17EMpbGrGPbGJejxUwRnpfjG9BdLTYAwJGpCci4v8GzDJ",
  "key8": "3NUYkvDtk9sVkm1M8zeRqDLRdUdDRoUhEtnmmf4wZBy87mB5t3h1Lxvxgfk4Y6xTmZFnoPjd3avoRTo7DXui25LS",
  "key9": "2AmwAC8XcbuNzAGNNA3izm1Q6P6Lp4CDKHDRhjnyfM3p3NGyVmdeEYRmU8aq4Xx9Fv4iKeJXaR9CZ5hH7s21aBi4",
  "key10": "3YfurKsAyAKWNY3rqgqLy8NgXphrE3aAQKSuiuLGPdYus5hhWSJ7za4vW7Kpk3uhkTxxbjtLScG3LovCd8oAPK7q",
  "key11": "2gwHxpKUfvCw2ar733ymAeW2EaQoxFpY2YsK1vd4APDh1DoHCBrMQbRKSk3wuSydBTuBdXwjYhTVPWD8y3pF8g9M",
  "key12": "3CBi3KDJYZ9Bzz3tU5n6R1Sxhkg6FwrhW2ifUPGsneinZZWko6geJ5e813Bu6XfXQDojKFJWdvJjqR4tYJGGYN4f",
  "key13": "3LrHySa5gvZK6xXyZP2MQRgQTNtxSUHgTats4dUF8J2cWR48ynetkypNytoj72e4V9txf5cbmyyTpqMoeqYSKA9H",
  "key14": "5j97beSyP5JhWiYTTnMXRMiVhstmuLXMFRGvDxLqmNvqC9ooFsW4PccmdpSoyAnPni3e3uuieEmCGmAXQoaSh6QK",
  "key15": "kpyZzoh4pFtFuVXCGbmRzVJYAtY3k1sKCNWCiAc2mXY5MwiFwqr36tNA9vVJvwp12S2ihiLnXCFqp4HukNmnRS9",
  "key16": "3bvd8EZX7q9KM7uF6eENPL82gsx2J5qFeLq9QMYQ44TuCW5i62uYz17sDn7axYmXEQvjRQJdCH2WiaGJK1iCBNEN",
  "key17": "3XLXkyq9o9wgW6wvWwvXvjioX2zcyyS1KsbWqRdiFHhSZR2X59UqcB4hkSXZ3rTZr4hRYMPkfjC8EQLD9iSFjoAY",
  "key18": "2kwQr44nUAwKRVh8NvhTb918XM4MLjWoZbGLaaovhvbD9d4x7FGFjAakXb5rHBZKoE8PhA54RJTrg3RuT7WxYWJ8",
  "key19": "3ChSjU2e9HyQdBVwT6gFQzr1Nd2vZkfZniB63dPZ1Ti9zGjUfEMBXPsbRWNN5hg5VBq6UuKgW9PdQvMAGnJ1Egto",
  "key20": "24s3dSyYoLtAqynxZn3NoQJ5dgi3Mv7KuCsBcs6vsDF2bxnpmdpY6GosewutFAtaf4d9sBtAtBvSEJBYN5w9dW3T",
  "key21": "3eoUKWVeunThA4876aKJTKBhqNDRUN9FzoUy12pc5AwkHnXemQCGcuwoiQSyp3o24NiQHkhupprLBEZgUGwpzFqJ",
  "key22": "iL86mCMT3EU83HR6fhnHqiPccmD1m9A2xN98bu2QStcnwJ8g1Hzo1eEJ7kiEPVHVCUtQDzUCs51FxDtwZHvieZN",
  "key23": "4XA3XyKHruKmWgMmA88iy1ufZafQuEu343VLzH8HqgzWXN2dQsp2pRGnFSiyvqaaNcRpkR7gHXFJqujQcedVwMVm",
  "key24": "4gJVprdF2f7EJ2AVM2QhNy14Z2tLczec79QhqwpzFtciQhVH2wTXHic6bEAcSoSDNqsCZvW29geSGCTqZAXyiTxZ",
  "key25": "2DpK7LmpW1C9stJcwTESugqpgY7tGV5QAPNKH8iFNZwcv4v2oHpwTUWrWfA6TZSRWmPqBu6MJhF9fppgiNayXMEM",
  "key26": "YtSHx72obaecEgVnZqHFu96fC9f9WQk38S5ZcKPwPsUizvKVsFGKKT1TMFRVC8Chj8pgdii3e8DKqJwrQdg1HTw",
  "key27": "3wbJzkxEtavUSjuhyK8qW4vVMLUvGVesgoRj3QBCjj3w3SzEJJVAiGb4s3CQYR6NFdRth9aCBJwCY9zqdxS75byM",
  "key28": "4kFUGa7jso5uygiqubWWrPhtKRR3yMMjtSsdwhkNMXCbdVe4j19UyDa9vdrxrVcozwjDLmziPPDy8PcektErGddi",
  "key29": "3yu3zqjkB945RZ8KPyxZxmcfruwjEaMPQkoRyC9Wm78n7XnesUb9HLtBa5fjXTgQ2tbzV9GffgskuwxqmwLcihdR",
  "key30": "4SdkAzY7wyjy2vG8dqCCLWyTnSSzCpYdrsRSNQDhwWZCkRmnPzZnGyC1Y2NqZoy7hSrSMCLyVsDXeTr6rRMxsG3Z",
  "key31": "631V95FQnMWahnUnZbPoTiBCjHwaPh5GBYZcvY23uLf4M5cvx6fMM7dL6n7LtQZpmCdmWCf5x4hSHf7M1FpCQxCp",
  "key32": "4YTGPff7ktSD4yANu6tg8akrBmQJ2csRhkBxMAehGAECZHs7X7FiRiTNh3xbGgpuQcbauC28ZPu9iWfySKx4AXhf",
  "key33": "2K42T7XTNPfPQu8ha5Jac4QVn5CNAyDYKrPhofR3yvu3MXwPG8b89RxZMrTJwaELRXByTB2pXLEi8mcJynPRdf5Z",
  "key34": "D84vgyRzghhsvzCWsvcxYwPoDYmaxDvmMRNSSUTkHJadx5GbFqL1QX94iYhQTvhhWdzuPWFjPP2q8JACXmuD4EB",
  "key35": "hvDoKR3AvaVtPtxE3fXfAT9kdZLWTvx69VQCbFXCPXwRdL2KpykVKk1aBr14Y72x9mHNETFBDdGSVC9cgbz14Ds"
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
