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
    "3ELJAu3kn9M3yqvr54vCvbRuCguEqAEHkLG79wkLKZCjKih5EECMV41wmNVNSaJZpQ6XjLPu5binKWoA6AbRJVnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmPmto97TnybYQA3CrWqBjNgvzH7gWS8AAWzLbjQPD9utXY4g4QmAPUKdCkYPUHxYb1tYUpu9WTGjN8APmgtZQ3",
  "key1": "WDGcrLfSHhgigwx4cvCLQcLPExaLGwyDgCJfuPPxUJLQGkksEEumLEgiEX2BVDPCeYAwCPzefmivaHHySQ1K9Jy",
  "key2": "7uwMm6B1umfWSxA9HozofbyfxFBqKvCqUNsCLhfojUkutubCz5uDKPzX5MkcaSAXanMubAGdxog1GqSBKntzjJD",
  "key3": "4zXb4FNtKY2CLuK4YKv3kmaP9XsLwwbtgHTGUsJ7YFZr9beeMNcmnZT2nubTSsAuDzLXkBnAogXj74PYnZka2UB1",
  "key4": "4pjqvQjEpfBGgVnmfVBsWEvRTq6Ks6YjbsfiPQJ7ucxk4UbYxE4FDWCGSNmH4RW3NBvyicLH2ndQaRsEBXeKZEpj",
  "key5": "42wuzxKvXxv99bpZ9n32Ddp9No1Jx3TX3Z47bJ7h7jTt6m5Cu28ZRuwaUoRiGCC1zQ7rkNmCCojAbQgXZQvQ4Sej",
  "key6": "2WpW1meEy1H1joCrMScx7SJFnyWGRGifRYv18Lx6PdymijJXoWJPKo7HwJRuttSeThYEyWXFrdNU6z4hxbZd8Q92",
  "key7": "5pLHjTjeyk8zKgG6nZhcwiPPv1SYn81hgjzA4WppZ2GHZx9zfEBovtP5TsetKNL3Di4mUBtYAgikuVge1HwDJT5T",
  "key8": "53he8SeG25gBVLZTQhi7ibQHfWfDVW8WFiM11EY8gtXJdj8kLNDpxkVXqiSot4cUMmB3UApbo78HwkeaGHWLY9X1",
  "key9": "2Tg5bh8ACLtTzpHNAmqQww9bbKzg3YgFDvcNTzaBUNd9P5no8NjeB7RVvNZHb7jbzdhEJPAusw3zeRktjvePY1v1",
  "key10": "3gb3unxmCYmFrDcFwKCVqGPWuEBwVs47EvkyBWDCjZqnhPz3uwmRrCN52riAFfyivieHsmgMyCKnMAHbzKb4fU1k",
  "key11": "2YEwXU7mAMTr1YbKuYX6MXDc4dfdT86FLbcJ5K6NaxrYAZZDm1JdzFiJwXRbXnY8YcTX1QQ5mFhZHdx1CjBcQkaQ",
  "key12": "5Fwy7MgV5AMuzWaNPmr3qYNmYnFdVdVX4Z3Pwcu6T6LAjKcwWeMemyXBrvfUXmEHsmAW9BAvUxjm9SPAk4BoxUAz",
  "key13": "5JgNPkdP4rQQq47d2BF6Hv1FsGfqpb1zTKvB2TyAGbCep3XyxzKQNaDkiwS5ye2gkcK3rLwVKWgKQopQsZZMgt8X",
  "key14": "2QEF8A8kPdggx98n3iFJAXLmavPfeCmhdfEtcr7j2EpRdoHzXLpKeTpgJpFd2yg299wbQxTDrsKKBoL5w3GHwfS2",
  "key15": "54kzW5LJc6TfadwRSH4BmSVW1StbHsbgwUk67z3kpoErFbR2tUo6GKQSdb1qHm6LuNWfnuY6A5fdPhGWxNf1H32W",
  "key16": "3Hh55Log6Udn5tM9AaBRzELKq34SfALDEfY3iLftqESFL1Z84HwMQiNaCHGGbyyDdfrVTCosDALm58RAbTe84YR8",
  "key17": "N8M18vAnXvvPmXLrfubpDhceemDZVufWGpEpcfnvXJ21epshfFhtmAvrJKeUKBopG3nT6iCizW55kabrBzXDQcE",
  "key18": "5Fur5Skx6KHDRgadycYTpRKPDs6G5sobkbDFS1QEHYEhivqsqtc2WhM4QDD35SeMH76zhKhug1UB8QZ6yMYR4BpF",
  "key19": "37mhh5bjC7rQdGvpjzBX6WNc7EwPRUEWzUsm26gZFZvmGH7mPWqqvPQer8mCvezYaEYAWyatJF8qtpwtCV15hh46",
  "key20": "42M4veVsS5pLk6hgYstXR6Vgw1zRtTetG6GJ8XFnumu5Nmw3GH1f6zC1h9dquzYoiypiRH5UyXyYvgfsHxb2MY4o",
  "key21": "5GRdZXbLNmtTPFogHJS1vUeC3ygZo6fFJqeqZu6gYcyYxVTKwSbk2cupu97RWcZ4FnBVru6PcaQ9374DV7GJDUVD",
  "key22": "JEogtJajq577gxLgKB89b5Z3sjxh3SZTUpSUJA5LqBmFAcT29oRsnVAtR8rpcdUJxxGVpqXxCQShFFYBdVwU8sM",
  "key23": "2j5hjTaEauzjHV116S35NeafkDvTbfQBoeVxF5yhKJ71gzYeVdEJNdWfogZ6UKGZmsrTzgK9UFqBR2uVmu1hedob",
  "key24": "5msGJ3DXGsV93hVa9QzSJv9FQEbqrHwuxd4GzJ89Gh1EQoVFJ5gqoi1iRB7j18wPxh1Ymz6c33LYctupM4g4prJ3",
  "key25": "4pyWvBNnt1KSoMdJ4WUkoJWEJmRSzfnQFFkFn38ehWDXusg8o1YqQAQceP3KjXDP4bPByzz6tnuZJdUNxFots4yZ",
  "key26": "buvnBdzcVxAiwGnjwBQtipr5DVUft75tUqJyLWVBMWrq7CEnXWtAcSEZMjf1gp7rDkiiDiRMVzV91purEvNLC7b"
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
