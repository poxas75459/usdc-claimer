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
    "2NSdappnUgQATWDbd4gddgNoCsx5MikpNPkJeFJShhtyMRqR83hs59qUsWsgQvNd5Q1f9BVKrgW4g7GA5HW4HymE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BgNbKMJyh4PZktf8pmuySMCHhCH9uRhKb2HKt86jyvLTMMVcUiDy56U2GQMSYSMngt6g43Dxcx5VXwmPEfkCXk9",
  "key1": "3NayPkQLvhQrDHEgAqyTN1CzeAGpbnhB6asSGhSc1dauyWnDKACKdFoXf3682CzAiyiibS2eabydoVVzu7kre68a",
  "key2": "3qSwvPoCyd7pe57dTSyjGLFAk98DPPNfDHBCJczyEHVKeUNdjDAN7LzX7qRQdyrZUAsVSKJRE9eemzeCRbe8N1HM",
  "key3": "QTpDJg2ZSHwh5t9amuwmWbVhE6cb9uxoRCf3wAPddBJR7sbzJFbzHeCCL5saQ8e1TrBPpkPQ2tjo9N7GCfKkLoj",
  "key4": "2iHWYaX8GM24PkegVcCDKwMh62ubKo2WnZCUqjxsHe1Jemc8jHsJkoJa4bHn4RcPZVquarMdkh8zKvpTGqhm6VnH",
  "key5": "2X8rGR7x1qX3Y6SwESf6bz2N3CJPXpMvcT2jyyCk3V55PNjt91rMWd72RXs7vhqDNqdbdNFH82aiJ8nDZm1dBhDR",
  "key6": "5QiC6feCsEgjeWpsRy4hn1CHm39eVVE4kYXpWHhYAZit9eT6eNAnnLEYZj6ZbexyHZ7aNZsUgHe4evWRUSxBEt4y",
  "key7": "5zgShph1tZUY9wmnT4rNkYsc9eCU27sKfzpU883MPQH65NNxsz2KGAk5WBcT9jS3UufLB9ALg8rkpLcXjz84o4xp",
  "key8": "4QotB98MH9JV8dZEi2RBnpuPg1GJJFGjni6Fmu8TZSQhYew17b8evJNsT6QjLf7TrDFgPYtAydkpEzoysvEJG8ME",
  "key9": "4xGxs7AAdvu7tZcEDFnqLK3mEamCp8QMZGGaJ6XEXPveLbV7r6p7vqJuthQQZzbMHBvxPyGpbP7M17fbHaae6MHp",
  "key10": "UqtMVXrVYUnewgDsr92movA1LJFXw2t9MQPncQ3JnxCcArQeXPXyqToi3GuJFT8QpXFXdgxdN2zCJx9Bh8qpFiv",
  "key11": "aWCPftDtGwcqdLHxQtAKVbUwTPNKCMhPtSzMFfgW6qwaTKg31gh7GrtvTmFxyTdtxBLevfhLyrAT2TVG7P7cRa3",
  "key12": "5k6PddmnqPwCnS2VzzGvqYVaqokF1drnmRmnzAuMyXeGSnsdz4TpERJe14qCqMaxsZoWkbC6TmZRGAcz4K1tTUEw",
  "key13": "4mdvALesYF37FEPyQyj7CK9Jj7QdhJV8NNeDEMPBzh3ZhJegtTMnUougPH9v6AgPHH91MdZ7fptgkW9WSBUHnfAs",
  "key14": "127F1M1Awyvpvh36SAMs41Nu64cQ4iJKQWN4NHC8NDDcXDQYMGqjYXNLfR1PbjnAvYnY78meKV4XwXpVfwBNWpUK",
  "key15": "5gjims9mAjB7GXtidPdZ5SFbjvaXFKXhxxikRxTe6GoRDZ6ux59puqcstPYwb2nio5QS7R31E9g3Ah9BUZyuQ6T2",
  "key16": "nCec8aZCmuDnX5mJtLswdNH98wjjNCphtbJeBQdLvfxcEfpcK2m2cYrzUCtf1aNHY1gHLUAUJwmTtjsTCGHo5Mu",
  "key17": "2nrNAKZ6UiuoTEZPaubrfGqQ4pGprks6evfc24ZceD3wQwkFyGqHmgPUYupX42qbSQ1yqX2pDCF6rGkz36XMVfrP",
  "key18": "2bADm2xEZH4mb54fJ7r2kVr8qqfrqhywAXbETwLhzH3XpkbEbwH6WwKDJeM4mvZ7MNmf9QXKkZkTSksMi2TFyMoz",
  "key19": "4ExuAfvx84ThEXvw7DHgwM8XikirGikM65oMKemUPy953fgcAFcQn4F2FJQURYHetbS5VcZieWUx98aKH5uE6oz9",
  "key20": "5emPrR2vicpevqcFmQyRnCRsnDQHcRnXWaLSCJE7yssVpTHt7YWiZCjKSKbiBa3s92YUPaQ5oYjYEp3AQervo7HY",
  "key21": "5tM3UceCAh9iaCW6zUrPhp6vBARjj9ysD78asqJgkYBLWGL9RQMRuVPw9rZsYbFtNS4MYZpyxXJidXC78ydoutYy",
  "key22": "gRBd1vewJkCcBZktf8vKZr9wyE5z5v7qd1jRxznZ8RedmZ5Ln4K3k4ebaXUFQJEZPZFW8ewsUtsFLCTDLS8WPQH",
  "key23": "fX5Y8rs7zjmPXB2LBoDDEgx4T5w78eMcykyNx7DWjvjApHEqNWQ5d7oxbC4F1mztTp3xHTxnv3Xrku8keBcgNnf",
  "key24": "4aeV6dT7RBfSXrMaHSNtYVrCxwtY7FGMXAuefhq7NBYti9wByb6xKQh23BqppgPjx1WUaNGTw8mL3PYAqRUUb5Vi",
  "key25": "2WiY9ghJD3VShk3btB2uFZUEJ8m3RVQ8BjL8zXQKenyZMc6iaCpwjG8m11hkz1c1CAwBZYeZxdR3gBsvxpK2yktn",
  "key26": "4VgXjGD6eox4Y9LZ5djC2YAa1mk4DeFyAUbDQuJoRK7dsCAb6VCVMxCgup4UZUnsmzdKJozX6sgsKypt6mVNeoiy",
  "key27": "4HQRXt1yNXPtdQ92xhfuGwKNy733nee2P3zTRXES1zewEPBSjWVzJ1zxT6aHA7EqLSBExv38eVPXJKKtscUUsq3z",
  "key28": "4ZVcMTXr6nMVEHgvifFfLmGY6eAsQ5pJuLGfzKPajiUDzbpRSbDkuKWYnV3mw5tYz8BVfAzTBwondF7wcdM97dqA"
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
