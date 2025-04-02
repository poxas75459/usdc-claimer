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
    "FYqhfNagHUomgvc2oX63VDLLUtwGE7yAqsJKyxrqSmzTs4LGsD1PwPpndVNL6z7E9MX38JpFpuF4bavoPyJAtB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDWB1ct5rwpmtQz2BGKyoUao7nMgSkEfUBWTkVfbxokQhZCfc93feCTBaj1dgHbu4GPxhZWfgop1aVd1nPiB3KX",
  "key1": "KVEDiFX864ALCqehHCQ1cZ1NNZXHs3hf353PJa42zhKiJsnmSR5MiLncgqrQkSGN7oqS5PqDprXruMCaxuWF231",
  "key2": "2Yzj3hgVXnTZVWAtazzDosAwundfD1mUumnVyekVbc8qdP8nQoCSMDVaDUSboJwvNpeqvKxcmiD1p6nKSTXjiiyr",
  "key3": "4PhvhAZxppmGQCJGiMBdetz2JVDNfuNmhevsDWhRXv8VUg6NkChrC3qneZVT9zha29CwxonSUwEkFxCJuVqsy5bF",
  "key4": "4AwG3Xuopp7fZ2qK8F2G4bvFxwLK3JUZZRab5cdvfU9oJt6Qgob9ebBqRWpUySwVjqxTiDw8th4F95LFCVJE4HKM",
  "key5": "vRU8gc4QVnvh9JQCzm5VjRBHEC7fQD46zEtP7jWgLqSVym8YsicGCvvXTCaNWYeDuniTTvCJyaQuXz3ALzaj9ET",
  "key6": "31a68dLgm2nRKoaRVweK6VQzR1MgcnThpDGiJ4WVWg7gVfG2Zhwy4ZN6Fnbzu4VF2NpxCku4ZYwrnnCrr3tUXrV3",
  "key7": "56nHezKtjcLYLU1pS4AW23ugBN5g7KoZ1m6uT13bwjVszJRZax7vrQNcuk6MD78cg42rYLCK1tj5i73n53Yomoom",
  "key8": "5iLyJinh6L4DDBmCJBoggcNwujU3F9sC7sUGHKNZp3QJ4RZhAQ9o6yCfCqowzAUPib5ZtNuWCAD6aDdAUWT9EUAD",
  "key9": "5rEp9RzvTYX4dV5BDyZ9V8K8xmwoBzNiuoBF3PPiBmi1Tt7poeQmNgALgfZRx3nzSnUUohCu4A5nFDYd5jjVxj9f",
  "key10": "3rdT1vgzx7TWWFa18Su6fTwf74vegkg4c3AAGNdoSShcuJtth6PScx68h9teBf6NvFfMscUUhV6MeozXV3BaeALz",
  "key11": "3mZUWFhiuMPiFeb5tobsYGk58j1M9y4v5fxY6RWQcDpZ1Jdf8bUDnh4sbJ7Czc5xJiNYuC7CnpJYZVg8Xt5pfC7D",
  "key12": "5mXBqmH7JtZfJms8gNc3udECyS5nJLz9dw4zce79QPJvb5VYLdVZ4vNkYiC48dF6ZiKFAevwJMYfAG1RBFq5JjCp",
  "key13": "5G4GLysY8iS91WgMHuyGg8GvpHmEYJ5pJAQPUabkHZ9z83va3jRpZdKG2tN7YuUVpZEkb5sV6547ErWV2r3n1bkh",
  "key14": "5tWJbMP2pBPv4oesh7RFinDpyNLvocdJwtD8yWL59dWUkHDobkNKALp9x8LyQyhx621Ucin9MJvF7EyCM59ZE2Yj",
  "key15": "2e342BGpnyUfZHvCKd6YjaD7FPjVCUCduhTApPxfszfud2B1jNFWKuy8NPyNCoi1m4Ec5fwUyRkZm2mcQJWw2Dum",
  "key16": "21QMVFe11RETwXAHqgViwq3DYVdCX5SwxHvPqTUCEUriyFnY9fuVRuA6NR1XvC8aJbsjjaYr6D9W5sVN1mBCCQ2j",
  "key17": "1GjcYBCGmpXwfgJNbqAuLkGFUSqbXNX12tbJvWP2qcmq2PZWoRzGAGK9B2TNa8pbkyZgH98Wk8fgdr3PuMCC9RD",
  "key18": "8kTpjvHAR6gZ7v9LcAmue3ieGmt6M9qjh3PFmLKnVHfatADvYbFBcm9iyyeRDvzpi41svo741Aty6ngE6mTPYLm",
  "key19": "2XZc1XyxWzrZHzGHTaUPAufNqvEHFjukuC4B3ZqTPbeqh5DrDeFNdN8VDK9ZeWbnNLaGhjH4yuvGa69actsmaB8U",
  "key20": "2BzBCrgeKc38uDuz5CmU8gX7p8jkVQUSzSe9BUBBJnmJ17pcgcUB57cZhNY6dKZQ7X2s1DQZmwncsWPnEGv1dUQn",
  "key21": "5Yocoycs7PNfqQiR94aKrMhWowYP2LELfawgC9M6sa5RYxE2km2R34fZUUz85qgCQ8U39hsEum4U8s4TLyf7JrDD",
  "key22": "2mJ3yxfye2hwDMwtbmYpT2rTxXGh6w5QSjqpVqjzF2FnrtQa3TufEL2csmw3pbqaYE67N9AxVCgnsxEJ1JN27goG",
  "key23": "515Uw7t2topxmywpvYdKRxRCBVaiVnXY9ob1n62G6L5ZBtVgzYNCQPiG7dUck9fmNsNDswYsMwz5qcijgATZKrkh",
  "key24": "52TSAirWeFVnhQAHtTSN3evk58SHRPrUqaE1RdGM2UvEEFo8Fj8Q8vbixJCqu1wzRuBEhAfh9o45LHMVQkzG89zw",
  "key25": "jc77W5mnrHzzFFak6CiyTyQe9DqB3b8yegrZaY5eDtnC9dnnt2feH1Ch9m8kkPEeNAy2Ji6e2c4NodkuNMiQm2Z"
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
