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
    "25V9AQB8n6ztpgHLsTXy9EZB1PEm6UATZzd1RbyJ4rrp9G6SkqyZxpLb7Jrri8icjCwN4WjDpaMs6jgyBYE5hwRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBsH4YRTLFj1qzyFhG6iZu3ygW3V5Mi1hi2AuZxoJGGD13jUY96JLibf2gbmwMn9T3PuhvZ2Xgvvaen6MA87zDi",
  "key1": "7bYtaWRPPkhTD3mFtnWSNq4S5CKvaS4mftwxVYdGgY9F1Ly7Vjug6pYsqk89hRWXTSn2VCHHeWp5iEk6Q81S6AZ",
  "key2": "2gVj1PE4ADqMg61vCSYU4Y32C4ijdRGohmqWCDTF3zHht9EAcSxVmczYVvPJzUpBpK8xJwDXg95redjvGMTjqCWU",
  "key3": "5PJw7qTHDnWsUC8VBPdpXUujdsiUaPY83dhZ5T3xrwXZPB8fKTQ46hGbEyBjgL6YyNVouz1D8gqfuVYzkBN1ncM1",
  "key4": "4DvsL1nXG4jN79y6zueDSKf7C75ZmCU6BGNXpYQwfYHmnwhJ1aV5xkRhpAVj892vfdbyjYXvDEpoheEh77Hydr7G",
  "key5": "4oreHC9X48qUTyPd8gvgevyadNzRUAry3gV1cTisNv5hQzcLUxyqbztsdDsdzJdCp7MzjLca3ten7FHikN8MGpbC",
  "key6": "uQtzGDKAw9mV9MWG9FKARDVhVf8mcEnRKzKTTcFhjxKfTeX219V6FE5SsH49kodK2KVCb7FBtJ3NQmfCoCwTLM8",
  "key7": "2orVdHCf3PXBercAYCby7ALeSarYHB32Ha48jqtAYv8C7ZM1UiyXe98zicz5fypJ1FU1hu683uL913Q4GMMxXjQU",
  "key8": "EPmfwBcrk7PQoi5KqpkpuyEbL1VxjRCPBiPVW1kiCwLVjHWMLo1WrZpzQshYtMaRRfdJXvxy79q1vC9v7exyoE5",
  "key9": "5myMpxAScnaLEzezwrVNPSxkzEEtWzimSn8wv5UTH4jcevtS9eBLX8dLRhEx8M4sC8R1tr2RRu48Y12VuzHtqrre",
  "key10": "2xeabTyDaQq7XRFzcJLsn3RW4UJ65JQzUFkyhFr6eLw1ds9CTvdzSqKrNzSD5dk6dLQwJ4MXfqPyVV3Ftk8td4UX",
  "key11": "5jomewqpQ6gCadDSDvc77tFLAUgxwaavziWk387C843344qDxj9m8LietipgEyUzMJfTSfP1pMVyBs5QBQmkf9SA",
  "key12": "4qMTwtzwnDoZi2dXvLS8qmvUJJNLmQFK1txgEDGMUpoRhLZ6MuJXu8ypKu59hwyDR5TbTRFXJ7MzufpvZcb6Evzk",
  "key13": "3DCLf3TH3LoaSkbnZjJRqw8t8TTtS5qUYKuuBk8Cm5HpcCzmv796dEpFaavgArjH9eMMziDCXHS6VvhsC9QnDjK4",
  "key14": "5mmHy3B5YchHNQCTWyJN5fmPZkRCU2X2qiPfySm8GPfdr4C5npcT34CycWKNx5vkr51pTHEx5TPtJYTvGs1WXNJd",
  "key15": "64i9GZ6pz8FiAnmdPYSxKfitdrBrVDZQc6Sza6UTqMW3v1WmY75b7vrpYDqJQMnLHZBgSz6LcUvnWMLQ1c9tAjqZ",
  "key16": "rbmp9spXDZn8R7YqgQmVHkJWie6QvkKNn4afJC1dD5pBJur89pLwnR2raPGVfoGKTGcbzstshJxGFmTrsFXQNJZ",
  "key17": "x5vRpD73eYukrbpiHqBoqFAWbdyRaRjWxTfA1fKEvpiF9fn5dbDHcXMqcY8BwFzVVxH4MvAY9SQDPukbkkFCgXV",
  "key18": "3Jtc6BWvAuQncPFNCA3HENYhWWaX386A8z9EEaun4oJsmDRajZZx4Hf25BDXq9HUbq2n2bmTWQjCvfkHgM2UfW1L",
  "key19": "4mcLe2YgyBcHq5NyfMW6mEMYD8oAPuH787Py5MBjnrT7CXA7f4C7gfb2WCdSep2GPLp39av5Gzmx2TmqTLK5u47y",
  "key20": "3cwpztFV8nzdsbUZ9krU4yvi1KztfgioiX2g17YkiKdXVX6resm4oq2cwHJnNJ1WFawtTenXHnLe4qmjKq1HRKmV",
  "key21": "639NYMgWwXzZ2Sd8S1Ag7tUdf4SgQFb9yCFNMMHY7vW8zxbhuP5CTcDJyUbzBUr3K23br2JFuFSaHdLTq4S37UEU",
  "key22": "5qKXVbFoUNaoaAXbhc23hgjJytugwbeHynSZKtBuZ8WisHxYSEpGitpzm2sVqGAAVqBh5NTUPG7gdAyeG3KdXQnX",
  "key23": "HHyoZ5dM397PMcxmL4qKqxDt7i2gUfV8smoXYreVjJffGP9aWYGAXJiB5vwvhfCWsDPHS4z6XqXhf3GMCLCgViu",
  "key24": "2gKfikcfsdeBFHY7hkwkFzLrDRpxdudvA11xkQjGChUXbAAueNcnnZLBT2tsBfzMWmpKuMVDBsjkzpDShBTLuEUY",
  "key25": "3ZeDn1NMahXrANm3gLfK5iMr1YZp5sT83FDhjvLWFW4VSGE2fXyoHvACxt6uVxTdkqX13mywcQ4EtTM22atPi5c5",
  "key26": "3jX2VPvgi4qiqSNYZGs6uj27dCt3A4bk93A7ENVaAFgeBfC5Yu7tHgX1GVkP5orp7kN6Z2wmcCvCbPLcSPkLV6q1",
  "key27": "52iPZuis85EGEn7b5k4LQiKyKfe7xbwCZc5KFqnibTvXbnankoav1SnfL9yedniXnh2YS36dV23fjbCnnVAbDjBg",
  "key28": "2FuJfB4ivAZza2zUKvCmBzEqZnEiBq5BssMiPYGt7ZufDCr3WegYxEMdCaMPaNnZLUmpTJaT9cY8Lr2MWMo7r8gN",
  "key29": "3xm9nHagN9BmzWY9LU3fBKvgqMEMjoHU8pnoPasFE8Jn9RJVYeJTHDk8eaeK3PRZZ2AUYKNc1gcWzXE4iJPAASPy"
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
