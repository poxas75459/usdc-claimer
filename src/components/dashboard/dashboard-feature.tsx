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
    "3Tym8Kow9qSSD9BtiivL4agCBJBQP3mhpk8W7A3E9Fcr33x6AvRjFi5ju54jVeouopYnLgw3ihpC9x9gaycxhVDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xECzAzerW5T4RRja2wRg7pvzh1i3sEAWw7U1PYbfyiXQCg52nGWbLDhAiW6Pwm2ivf8nmsphfSJgEgUPK3SbUV9",
  "key1": "ww4TQJuaTypLCoRxZWrgEnpXHqnQFupd4H6kExYpTxrMoEqKKHMA56jrZveKjfbHBPZbyiBvDVjqVkxikUUzJ9i",
  "key2": "5xixy4mzSFWjXveLdhwHxK5rZ4Ku5xdxXSp6VNfkFoZz9PaZcUbGKRQvQ7m3hGWc2jPUSJePgLLySwikbAskPMhP",
  "key3": "8nQ5cthjamAbLBUPEAxQZsN1qeEAfZnPUr7ieZuLoapY5UvJZW3ztmiESpw9PAzCBGyr33wgBHHJ6PELmRiBQe3",
  "key4": "2kMsu7RyChcDRnZDfojHzZ5cJtLWL22BWX7pMdxsRfUihWtSRz6tKKXkEtWMFcsXT2ZHKT2sExhhbtfdWvWSjAFV",
  "key5": "4id9Uu7zLNxaLeXyR5xJXugn8T4bzdoYsH1kuy57M7fcdCYBs7AX2snJzeyJ2czbhRGoMhJXsUBtwWPp2tKRFx2G",
  "key6": "5SSMcWDjW7HbqRkrWRmUC8CH8KyPvKrxfgQ7LFHcNvG8zBGEUfwJdNPDuDMftM2eeiWJsHVLKizqKrq5czJFMYZ4",
  "key7": "2V4DRudXABCE9Nt3mDTSMM3YhmeVFMJ8d5vqm34XsYqqzYz6WD3955T3ikxTfMvjcC9keeUY7sS8YnQqbAQrZy7n",
  "key8": "NJP4XQoomR8DiU1iv3RWtSv92G138MbnQCbAfm5xdRPpfdz559Ydo1gcmAem7YaBPi2wwfAcoDftQqY9G2ZvpkF",
  "key9": "27dgPAXRHRixP457FtMDyULA9vnE9LbtYhoBTkJpj4gXi1vKcgRttTjcv6nVvutn4PqTG8bkBLHYRRyjYXboMMnE",
  "key10": "3oXfCcLZAxXFiaToJMdh2fznM9f8XXC9vUYLyrbrgW1anCCqTKWKyFo4SNQpJqWW8NugSCtwZnHp2DQ6PkiWBQvj",
  "key11": "TA4FLUy5ftDtar65wK52LNnRieV6Sz4tnbNrwEKMgwks3VT3kUgMtgJnYb6CfygWj8NnLFfRRu1DUeFdEuhj9nj",
  "key12": "467i2NTiHi3USENLa7UzQdKsgHj63Fxca9eDQMjJnfuJNLUqqwMhRGb9G1umi7UTCDivaucmzyMTdMUut5RT1XAw",
  "key13": "TVy4HTfv2CJAmSukQpuS6EqPijd1ZAPbZYHYeeYvcMHVX6P7dt4v7JwPsoHET9PjDsVAY9cd2VvJfunoUi6PK8t",
  "key14": "2UXgbm7HFVxWfvSaQLLa63xcfy6ooJLygCnXhbiNVqfqbXFQ7TE1DhdepJLwXjXc3iUcMuvtkhQ343ABEk1baKBR",
  "key15": "3ExxkwAtgQ31fHrvB9CkQtZ27xZumneWcG4g31CPcKF3xYMjaecsGqAhCGJ6FMSA9TLMAZpD2fLSXxZbfRGTet6a",
  "key16": "3ZZkW9EBT5NG53Fg93nRTaQ8msPSyRNrLxT3ZmGATxeDzM3ZaabDTLbDCHBPRSKRiy6xNzYQYXi1LJcqnJuGtk96",
  "key17": "YS7GAhTJpHMjwggFothRuabpuqLj2FduYpzFk5FEu3bBnBcDRusUwvFrzYNn6zgSQCyVgffooU234CxcwmhNgt3",
  "key18": "42o1BAWkWAtqv2nkDwym48iJnf87HG6yDBAd67ssTgNahXAzhBs1tPGMtYCQTCDhc6Qg4HsPSJp82qBmnZidrK1E",
  "key19": "uN73D5M3qHr1x9zDChx9Z4dy37U2YNxY8dx8NR1j57rrZTcLbdGUf4ET86DxyFNUPuAzWQxfbghnB4y2258Jdap",
  "key20": "67nPWRp8pPUJF9eYG9B3dDhgw6Ur9PJTGanvgEuBfb7Rx3grCxFskwrpKNGqfVFdEkKFDcwk3GyriPXuZie8C7jF",
  "key21": "YcHpbB8MCTb9W6YVAFL3rLFPB8b6vje6gwhToCJuqCFfaTW5pCedpEsAnvG1nrxtjGCbjUzfb1abhqEQDgAegFT",
  "key22": "5aEX6f8JCgqLBF5WZT1H97Qg636MbJSVfcf9wGeU5bpk5CAyAygU657ph1CUfXxFvK16VZHo83bv2SztSvinH71G",
  "key23": "GTscQJi2pAQWyE23iBXJuqQnU7dESwX6ZTNBWAGtC9wnbGGQUwTQ7WL4vn1TUFBMjNBDyx5wC2Jq7LLhQrYPEDq",
  "key24": "3mUdGQ8ENezqf4BogVNA2g2go339vn1VXpuZmeq6LkHTjVXjwaKcmd5f54dD7HXZFeK9af7ccTu3q9J7V5Fh2yF9"
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
