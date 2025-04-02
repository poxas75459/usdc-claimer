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
    "52kawFq4UtD6PV9WVKM5XiRENTgmjynR2YQsKrjcKwP3vJf3EsZpRV6EsMio2RmeNZP9MbkN1EkvQ21bxNZWiHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUnpgGHdaHG2nDXHQq1h24xqcPX8NMtVcZzQjazgTTyNyb4PWenEXM2D2Sj6J8sagYSPv2VmW36Se5XT1vYCTH1",
  "key1": "5xipsBf52UjDh3bCZFspo1Xgjpj5o14q6SiwStfhfZLffdyDWJzmzNUsAQp77zC5QZVv2TYZM7svExT6hNxvfPZR",
  "key2": "61h7X6Dh8uhUmJBZHvwuNdoY8DGS1Cfw7xZiNQr8jqfBM8Rvgxsry25wbg4vMSgomizP6hmxK46q4cXBmK9nDgjY",
  "key3": "4K7wWMjgTqzw5SNaprVLC5yNwxxCDE1KAV4Jm82rTEiQFm2pe9n48HpfDPCVZ1bPDLxdGgTF9fPtHBDMnxapzTaN",
  "key4": "27Z5TpfK9AeKQQkk1qDreXhBQnDJ1ffaiiBTXBpYfB9rZcM3ch5Ev4A8qTdWsg2YauSdqFNkv4DaHM8rYcqjDnT3",
  "key5": "5vXmyKXttVmRAZy9xVVKEq7mQ1b6YdZzmWBKawrSENSnJ99zhCTZzzLJ8H5XfZeFE42Vp6FVFfYZKK8LrdTCxNzP",
  "key6": "Ao7BcPcxnya7paVXtDoj8UXHgLmsx7SyCd4LzfjYNCNvknHqJ6uiDvmsPeJsqNKE98naMRTc8MXojyxi6GofEt6",
  "key7": "2geWLeZJ5Vcr1kc9NDZtgnwgHjCVwdqHLb9ngJeQZUVgLgVCcwrMTUx7gsCb3Ec3V7XB7s9RWL4dU3pZFJhSth2L",
  "key8": "oCDq4CfZgvbu6tK7ujdjM5kHzh1gXWLV1hAwduoC6d36NQDpa1JWfhcxpHXq9prnQ3bGfFMkWqKhZsM2nPHrhRz",
  "key9": "5NDA4Z1cwXJXVxYittUfvzRA9crFmCt67sFvFwT7E4Ypkjge4FdzHZ9VNo47iz1ws6WtjhNVo8ddBqSqAFXRhFN4",
  "key10": "4kfVoyMW2x6E5k9zqsKRU1rXS4sr2Zt7rfzScJi2rJ6ZxWDoZUKWNobBBoTx1PtoYgye4NpedzeHntptZzQ6PhiJ",
  "key11": "5aNSVBLtuPomp1kVoTDsEt2m6wueVhnQiLpfFxuUbYCqeHkgNNdrP3WSuET1HqMvry3ATunag3ZmLBGgbWh89bk2",
  "key12": "n7MRHPWpTkatZFdLwCcqxk7sqfHFon1sPUfq7YXrWuLeNNUgBbSRSmxBxeRXwAFqY83tE9MUqZU4bZRXn7uTVb6",
  "key13": "49xidphg49uCD9U9uXso7Vc15FywXV1vptrEPDMVrv4MWWW1m8P7vPe2zwioQeWc9gcgqaJ6WGk7i7bHijAowPe8",
  "key14": "5vN6ygndug5hkWdQi9231yYC6MqrU96V88t4pdLjZbzMpk53H4FrSJ9BsLBXRWogk4wsNNf2VPgPAai7y4YjruBc",
  "key15": "3UXDNyXEwvJivTawSj2qrfYuhJD3fJaJMP9h9racJkSG1MefCHUyQBqDVf59cQpZBQCzRPdqJPFwZeAykLTaUJyu",
  "key16": "5B4YMybsaBFcYBbsT4uwLJ8xtXe6DSiKtygwP7qrMuH2BgEBXJkARhsJWwHTzorBZXF2VYnpwxPd6xQsq7kEhpzr",
  "key17": "aiLhseqxbxeYs1tDW2arjHZ5UtfAcmtBfNzCuJPgsG4pFZsMQunMuHoZkG9KXdyeQh1eh2rsZdD4TEueVoSBVSK",
  "key18": "3o2TMD3CcvVEstR6NvvHbRiNH1mLm8TbGay3vkwVUg3YpGgj5uyCoSSFNcZYXdAhzN6rTVNVMf6rKTT8BExenztg",
  "key19": "3QzFy6Vrnc7sGLu1gC5s2g4JrbbhCYKGFAogebKSA3DDwjJyqffzmaZHcXM8By7MU3qHV5J6AeVQu1HBE3TxPQwu",
  "key20": "2K3aLrLFv4kgnBKcFyPuQFKVwr14jSuBB6shA2tJVGnXcTH3JD42nu7A8xSRz5Pkb2396Q66ZmqBpuiqyaXApasg",
  "key21": "WwLdRDSCy9BbfGHwAQ6HccT2LC8tN1WiyvNR5NhvBv4qn1L7LAjBgLbW1twBvsBF3Ra2QherFgnfmQkoZUKmRGH",
  "key22": "GGSNTNh7JG65EsHcCVpEQcvXL6Wm16GzYfE1gbaHSRnirZALQ2q1ZdttPaWuBqhjfut8K5prnKwVHKkW19HdNfe",
  "key23": "4Hs1Gt5mK8isQqmPs5d5eRXtopntPtLhVUQ4JVtAj8B7B5quG3MJFyH1BPXtXEXNE3hVVfLM1z5Gz1UVgvVUanCU",
  "key24": "3SRyQknAUEtTw21G6yfM2zg7qbgFmNdWmnJYc2RitXSdaeL1Sg7Ggq4zui2sPGiMk5pH777d1UoY9KdJL5jy4QGJ"
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
