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
    "2Jh8zvoiDVrw2zC93zwc74M4cU4TPpjDt8Y7gizUsMiohrAVSChkbMWiBK7z3Q7Cao3oZKC4ki8LwfRi4LrMqybE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EA1axY3i3HR1UrnNTm1rTRU7ShrbxazZ51ReCCkrpusRnTqqxtt7WBkVMuyd8EV12fvAvJ1i7SD43BdoqujVaj",
  "key1": "2DnSoyCb7on3FocyfxWc6xFSXK95qkLYz8DSS68ZLfd922BKKZr1QTxW2qrw1GWzSQ1YuLM2o12Dzw1ZWyCvPv4P",
  "key2": "2SW7xuVfr29VpfNVm4NC4JRFVx5MoUhxapUyDLNm3kxtbVbbnMtwvs7b2aZa4tBFZzn69KS9PLLgyits7Z35TphP",
  "key3": "53ZNYD4fbv8QE9LMSvRUXm7PqYFsnGvV9SbJsFkds5aDxZvL8Bg1ftH8Dg5vTRyiaWnjs5wTT8GGc4r4wGs5LqbW",
  "key4": "5u4YCHp9WeNMsqmyq8aYwJ6ZNe9PBtsubZC49cvXZMrGyUKtNsMKV9F1xBU4anjcaZercmfSqaqTh4vis5eEcSr8",
  "key5": "2QWAXHKjv3CM4mZ1GzvPoeMUDxYrrhcLHszF1Ff2DPF6S1YbEkCH6sfrQJHnAFz14kLX4QBAzX9TaiGUnox74oWH",
  "key6": "5K6jdF6hKbZF6X6gLRhf36KcLGPjqzSNqRZA8L9LU1RbXKXY7CJRW7qcNVfMVG5SrFVeH8gAUMQAo6XauieXXFTS",
  "key7": "2WhyWuPXXqZhpm1MPgwmSVK5sMqCWX1D7iSLEmFPWnvPNt8R4jdSC4ZhGmGz3QTtb1NzeMsNPjcqCxugTL6SpMRc",
  "key8": "5YsrpSmYAVee9vLViu64EMV3xkhRXLjXwcot8EJZZuoLQojQTQQX6sRvRm3icRwbiNbPXrsKo5PSDfmdbMMiRmS",
  "key9": "2Rqi41DTptNgs9AAk4xRBQSgxcbdwGrjC63PxatntP3Uf51X6Hg38WEuhEe5TJF8n6MRrD5YxAwgMN6CLm6Hd5Ac",
  "key10": "fJRkNvqsrf1kkGiVUYdaAfpe6qtL3mkAQo4xW4N1xHywUKdFUpu4icYLLCLMBBmaiGTQCpdAwUvkXGHhfXdn845",
  "key11": "5NQtdUFgKsMVmi4ReBnFa4JjpvAg7enSStdXJxgMEtUUpt9GVfsudzeR2ZJJre3BfP6TPqAj4oEKvTch1VavmTfD",
  "key12": "5peE3Dr1BcyFrczpJBqjcBTv5Zzwjbogq1raYEkNGh3gLRPtp1ngZ1qREtr5EAwcWZcmWpeLAup1qtZRg6ouBTvJ",
  "key13": "rC6bXA6guz1BjQGXHNUUhmW6cNzbS8oBnHcetqcfLrmWxsT3suFG6iLHqwBYSJea39mHbD8rs8jhwZqR7MsYDQK",
  "key14": "4eMrn22ZSenMGQrmTchWEzBCDNt2LNk8z4TLCPYqw2PnbYwnfLMMQcMmRAugssnPxz94tryQEgb4S3uTXKwJvZAP",
  "key15": "4niENvAoCLtq3aEhQggeKkkKHEszrg9kw8YRkeq1rEuydEwtegnKg59Gabh5akC5BCYTPRpXrX6VWugkKfyuCtwe",
  "key16": "5HPZJGb6YdCuXs1iqpXk8GxgtJo5g2rPEkf1Dv2WVMGKYhRGVnVBoE7kwmgbDbs65SBzvgCyLV4mYJc798Fyj8mt",
  "key17": "4UaAp3wG4UcS8nFvNEvY8WZEksRi7diaoMPhqKhM568rWNALScAx3LTCFLWYofPbBUFwv4foW7WLRxbLTAuo5JBr",
  "key18": "3WUpbAxDNB2kwazNEYnabHFi1idj2f7mpFKvnFnjo1XYEpt3u8Voo5r6kpMDz3hHXpQBup7ZQYTziuMAB2fjUZYf",
  "key19": "i3LagSEtgSrF4AEwLwxXXWz9YAxNFTAFA74uqvAkEXYJ6m2VizYk574thofVZLFvPxCzjb4k2DzNe7ESPbHHWbv",
  "key20": "2XGdRK485KbCnEdhS4GkGteLY9DUjTSkf7YZGf5rakubmRnNMpcdjA6i37rK6ecKaeZUVpUnzTtYtTp8EB2KHKjd",
  "key21": "3hoZLXMyRSsLFXa9HPYag5vHxnenCtYqL6mLLWcuWLAgNgrz91MB1Sv5DmvuUnQ3u4iq8aQ5wDjVG478JDuwq138",
  "key22": "5jBVsNee52DegCZpdA1qq92StQqR2wwGpYkpnMXtfXd6fi91KGKCKjsPh2Z8CSBZz8X8iEg5b5GA7qbLKb5jQZCr",
  "key23": "2kBhY681FmetWxyXTeL8tqwYKGgzXhqth5gMLc1bQkH7VXY1YnNF5YF7onwk9LyZV5VXNtMxo4TqCazXetqLiSyH",
  "key24": "4AgyXrLuhbXAnNYsjCVParyfcV5yELV16gYqME8vRn4KLppBbGn7TAeX7a3s3vrAxd6ju51JzptZPM9QyQ3Cs4EU",
  "key25": "3g11LTUpidYspmqzbKPsbAaUCYvHnfL7agDee8dGDdkagEwifW8hwXmYLxb8kFT8EdezsGdb7xoo3m3CRHazgc2r",
  "key26": "5wMAWGKXA6KMXJzymMXacT687DKfdgXcFyUFCytBXAxtHZNRPSk97YVZzpxzsFkZZbCs3Gd6HQsoyw8B5PtkxoM6",
  "key27": "HfhXUUqFoSLwPTXYFP4YksAw6QgEpTkJ9fvt2fa28UdJnEbwiSx9UoH4Pg4t5FzCL8SgHFdMdSDGy9Ld1i73UW8",
  "key28": "2mkhFpXcpcrkNc8nL3ThrLQcNiys2LFQVw3NqASff2Sr3M7xhNaRGDj5t8z8Aj84P6LYo94biqeXc7yZvp2JpaHC",
  "key29": "2gvEXR9TrULLAfn1WWdEpfdsGJTxTqrY5wYuZyRFTHd8DyReC7iPHtjhvUBcoyXthgDfFrnheco6riqoKeq6RVZw",
  "key30": "2CjiDxgiPZSR7M5ewbSSEizqx8FHkmwwUpm8PfUDF5JSKQbUBCgUPt9FWmRyDr4g3e87ehVU1NbNEkNkhHFt2bU5"
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
