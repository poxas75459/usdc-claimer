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
    "27AErcrkfjZv1K8MDqFMFxHfBSdnEvGp4SuK515ia2RFhp8kzHDA6nsSAFN3nxis2GLfYBUob1Ns3y8aAKt78nEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPmixCseiCn4VKyxjqURa37eUQVmXnW1zuAh6LAyoZDgXKyaAnhPvKHX6oYAMvdJgdTXnmEHDtkunYzphQBKeNJ",
  "key1": "2xd8XPXA9HGJuQFuwLooy7LH7jYQAmr8v5LLJu724E6uEQvBbVzzTgcfgV5SgvkCk8qTH1CJbUrBZNRRmZ9atB1R",
  "key2": "4SBsUnXKMBHcnFLx3ZojsbuLP85xh6LaMcLRWKLg8KniuSi2RdZ5kzp125FgGjN81nt3H7aDWpEoCEnG5XjeRTyZ",
  "key3": "3Xd4qH4B5VSQNn7jUFStFYLyoa7Hrbk3pSSfa4NFPtqXzS2rhLArfE4pbXXJDfKT5eHMR6iskcQXiiHsgVZrCap2",
  "key4": "5HiDjMvUPFKMbiYveLwGG7SZdadt3kspG2Re4n9JQoJeFtmmSvyAwCVBLobLRGZxbyvcYUz4qhCEcysnHSnMZEqo",
  "key5": "4fAqrVytH41Vkz3JkMNS6Ke3SGZnvmZFuBqQkniriNNKSwymaxFLaFQbEsfzgNcvatJfzNRVbMBbrTYPCHTj7mAR",
  "key6": "Q6eo7pgXytoXhPNjj6UzPmKgZpbyjyaSpnKKFW8iJGG1geQNVKcEcRY4ND8LTZrPDYq5MXrsoBgwWb6PrtpbSug",
  "key7": "2hFCxoyqdDWdr1aiJGiUYz66EUXDXa4PyAgWV5enBGxZcSZ5SZgRPH8RVKrkMRpRYFrW9sUT8wiQA8kpmuD88EGU",
  "key8": "2D9BgXQkK2mfwJ7e1jwnKjpXBWMoTmFb7DjNHu1p9Ge11ufiSN4UkBA7PbqYv48DHCpP6gLyeV7J3e1nAiwHAKsv",
  "key9": "5zutUzQZw6Pd6PbGVY4niC258iQsDCGpi5B3PerjpURik1DXtWsH25J4bicBYdBCKWmt3LaHCuo9j7EBKj12yYCk",
  "key10": "4zs9BprzgrKtYK2kL8oALgVKRqWfirSEvRq2x2bT6BBMaS39FyKT96Lq9EqWr8B9tKN2UbE9EjrbFSB3Fs41CBB7",
  "key11": "4GWSjGfcyYf8EYvuGrZYqTNbQNKcLXaEC73F1N8tPxnW51bP2EHdoPTW7AJEMeCsxDLbEyzieQomJakSu5He9ADB",
  "key12": "5o44rxnsWYys18Ae8oAkAYaaU2AbBAoogAm38drngQmX8ibGzTX1rEfYKBZahiTjyfzmepTYRsUB6AgyHmeRdpcF",
  "key13": "5SXiRdzqnhEe73fasUdcASEzQAMicKFbWX2if9XWGvRb8Ce4613ahjPH9nDujZJ5KuXpRDEUuYnkLqpznWimbzaP",
  "key14": "3iN3zU3hdDqMDr9DEq85YveqJxHPfPQiNnPrT1e5MX1pZSnHwD8dZRmX2isFAF9Jo7BtENs2At4h1nf5p5uX2YkE",
  "key15": "4toU2bdZ3Uk6PqtoVJY8SiA4SwxUgBmc9GQzH8WhLKb4qkiJU4Z1w4RinDZPWW2mrugxe3eVcwfLt6xFvzyCoUB1",
  "key16": "5YVjW7MVJfaEBP6dtuGPXxwozFc9zFkfPhmGFAsXW8x5modbHHT4KuHF9CDUPmhFBqYHZupAkbFbQT7fp51K8mJq",
  "key17": "3uqbzronoRkWV1Ayo9T5ekWXokrqntKHtmQ8sYijTvQXu2umzoGCf3BDe8176dLtL4fHuriWVqSuKZnEfiLKEnLK",
  "key18": "2ayHavG7LwkUyL6U4hkTS5nkLg3U1iDcVTpJs2gRaELZV12aqvVWdXGrp7j5dNxd4yActCisLEZTvv85rsdyvcxW",
  "key19": "616EMfrK2Y9iWYM92Svhsdbd76Hyw6rptt1udFunAumTgJpyByqDTczrPmNPgpc8EjUtJgoHrtmw1GeMDKivyD2p",
  "key20": "4JSaF9RnRkNR1dLpv5bZctPpQwaZXsqMQB5jc3YBdKiddpxgFxFx9CDygWEBRo66CjQsQPy3rVgKZSjyitdaizoh",
  "key21": "2jBaRpAtBCoNfjbd2KWUYGeAQ69LJ4Aq4Qm2RHNvhYnvDh1DKWHkzRT6YxoP7Q46dmHdHKES9K5g4oEfBvVdHhow",
  "key22": "4swQqn4x88LN8Fx9hJKY8bryvQjdXD4F9KTd5HNT1QziPgSugaC5owHBCwFYNEEiKx6weYGbddVwzmy7emFdKmCN",
  "key23": "27tr6nMLXnwhmKnVWowusv767L3p3aGhcRQXv3Qo5MK22LPB6HQgt8fmm8kr8z3KiWzhtQSB23G6z1kPuuQDWgs8",
  "key24": "5QFdZFPyYFiSpakV3xoSgpFEwDbBZ1YhDci7VFGohirBd9nXCzNmetH4hSdaUAa1tT4yJ5uiyx6wM6bvX9Kwcir5",
  "key25": "5br4x1hWkMJxXwMj4Sv9SgZzQSavbvKzHB8gEHGfAvcchQFVCTVFsQNcamynJyaNqtJkBDPR8FJneHYhTnmNFnAy",
  "key26": "2DhR677tr8QLcxtnEEncqqWGu2SzhpSmS9upCRqXk15s8RZQiRhPoXFBPhFUVbraxaCEwQqk4FQKeo3Aq5cu9qT9",
  "key27": "23ZaFmAJCwYxfrnc77Vzw8bcJVS6SEsGFvenmVWHNnpQeYrucRrai4fDFhzuu2YZAPphu5j5xxAzeyfXHZeYXv47",
  "key28": "2csABsqPurV8JtR9Qq6Poo5eNp14Z7u4KpaAAu7aVMiXW5xGgk5Lwu56Dc5vBqHaN5kmew7iMAkdU54JBVHhsNgX"
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
