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
    "YbKAK62Tc1rDM51RTvxbkn7cnzNqfkXsPY6QrMJKtjEBrrtJWQsQvKoRAWzTCeuy7fW9LvfgZrFsECLyPDYqXLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvEP6T1CZvvei9BHZFZHuap2HgrShG8uYzzeTq2YJR6zdAaqyAhE7LUX3B1QPnEss4rQLjS5TqyYkkJqa6Noq6H",
  "key1": "oQDpdrzjFrwU3fGE5uyzEZiGTd67WDeq2KooqPirRKk1iot417Ycj6x3Lru9WaLWT9LuUcZHd3PkJvVKeQ4Xr73",
  "key2": "34x6LViqnzBSw78mLTjAgxPAheUYh9vNLpC8pMUs3zg9E9XjjJC1gUx52ZSAaeVKKZjsB71RywAYjN4ANMwTmRy7",
  "key3": "d9uhk6h6AbH8ATsSM9Wi5etqeEpsDsnmJbyfNeqCBXRs6XXhBJQF2TZGf53dkpLcfvnSPVBP8Kwy2NnSkesxtds",
  "key4": "4Ljz33dhWft7D7sZDQHPA6UT4hAjqBsZGDwqGs68LD4La67r7CLBBEGPbRLFcv7qtCiN1ic69gx5D8nDR8UsNgv7",
  "key5": "QuWKWcPKRw4vscoxwu5r61MajhWtPzChwhc2AyGL5MDTuTxVWJa83hkaR2TjgrYMx9V6zi8ka4jEfkxuVrMhUVq",
  "key6": "5ahRpwaP54895YE4foCEfb8AZWRa41HRzuPbkykEmm4P6XD86xsJvDwpg9uD8kya7Gib4RYPfe7wQrobis26dQBx",
  "key7": "5RtVXsBSxP3emvLqoERmzvnUrrdhVU4KCH7x8FvFGLpXq42vwuGdLuqVBauZrUwj64NZr9KgjT8J6u5BGiaxVBWe",
  "key8": "5y8Cxp3zGPbqNxwH6X2tL67ifnqoN1doyBH9C4EhFPdHqeEiVD53zpy1dnkweCNGTWkNjtHadE137TCCFtU71Q2s",
  "key9": "3gXiYbodhC5yMtUUqrY9sEiUvvsbPA4yZQMTMUHUAExdQAS4eBoVhvpGce2UtZNPBZWxoADK6i3czuA2CHKYtY2e",
  "key10": "5pKuLTgapveKNun6WfcQG52xDo3XMpAz3tSvSnTdK14TLDL93JRYRX2zepdpbbqfVKLQvnbgeZ2MDocbqNeNffz5",
  "key11": "5HRrBZMxAQd6rFneSPS1MmDwPFp1kjtEUb66FAwKT8KWCTFd1RWKdpXqQt3aLj7HPpYHTBcKEfeHD1rgsemJu4zC",
  "key12": "3bNrYKE1AdoL7hYtDF1HVSQY13EgP7BBNUXHPhzurD1tBYmf9ZkVGvS6yXDhxmK7ruVDSgKoNaoEfjNndTapg2Ad",
  "key13": "4cDmaJi67E96ULCUyDeHB9fp3XkQvtKJksUFf1Z1mrK2LnT1qwfiiCvUErSd54CTQ1YdyXX6DvisgBa97CWvCqVb",
  "key14": "4RxTpXmx3dc3dXFroYtdVad5eWuB4aqUUfroTFRv2Mun18HMUppNY3vJCmeanQksjyugP74ZRR2QxLCcyY1zs8Gi",
  "key15": "2SR7VEfXfF5jumPFTwxksDeMxzfVEg6MFnbuNeMb9rfacMyfreHHBjWXExSTDYLHNQGmvU4YnH6pG5YgFy9xYuJt",
  "key16": "24k9AeBT6d4HkwsxA1QNNmfTiFdBiRzEL3yogtXNFFJweubFoNy55QpAoaouWTaBWHLkWWSU6zaimzHNcUKgtamX",
  "key17": "SanEimzRuVsqpiwG3iEef48RourrnTmZmNM1qhUg4tb9nQD3MXhyY7DoFvgzWgrQNYhX9pC4bcHmdpTw9DQhT9z",
  "key18": "4dmhaxkv5i9aU7bsjHWTMh3i57Yi8dXMbJ8gJ468WaD3SEzdmYZeQtV9yd3kriG2tXieRbq1X4EiS2W9zSwy1RrM",
  "key19": "5uwLbt3ndiafRdZ1VFr9jTsbGG9Vjj3TiBdJnqzQG6F3LEsckkZDDYJ9d3bRJD3nEaVXZ6y7eBrgBD5JHSxjyQKg",
  "key20": "5uakompdHatp14PLnS17DG1P332oh9N7ECBHw5dgo5JEgU4wK8mwtGebMbzYY2u6Rb7AM1KNGVypnUcKFgnhtUe8",
  "key21": "4btT6HwwGiKvxUXUmXS4TwcqM7T7a7z9yJNUUWjqhPtgeeoXsrMpWsVZ3Z1FXE38uYHx9LSaZPMzX3uFVFW9EYpc",
  "key22": "5TrfVqjVaDUs6n7G9NtWgsTqMAmmpMN1Xo771yPEYkBwD1no2Co5N6DbpLAYHpotaLKZ8YMo56nUyZAEAY5NbQvh",
  "key23": "4YtzvhwUH5w4nFz4qyqp1cTRhPj6i3n4XhrVBwAM2uX9ptwx7TC1n2FcFRf3ARETTAf4cz7A2desot273QVzTTvM",
  "key24": "2wdc2YCtS24WqLZTHKqzYGJzePMzmpiebeDu2RPHtwaV5XN9sGheTWN4Tcw7j9hnHJoCgtYZ6MLRWmQ1om4dH2YQ",
  "key25": "3t9MRHBNMj5Vfn59FpV21P9R4a5argJXqfNwCqLpcFStgWzXpWUtC3XAhSzmX1KqacJpFFJdFewC2ypSaRPx8UTK",
  "key26": "3a3LMLZew88ScSufcfbjXAXr3FGx3GGHYzbzXVop3NpzM9RJNZZxtzPkLWzun1auYp5sLNcYpLchQGtLmUuhkPhn",
  "key27": "4QNSyAThAGCPx7kDQj2UFApVQfHVrYE4Rubcho4sQYcyNm1wuTWtdpbHUBBGUAxcfPvDDTYoMqsWwvwgT8zF2pvC",
  "key28": "2P6ZsaDbumSx27dxAMpv2JNRh7uegeaRJ9fT9FtzmUwWdLY4mmhkYb9eWxyEc9Ratrnq83TcKw4qyr2Mz8sWt16v",
  "key29": "yZ5LtbQ1utuRf9A3qZV4ozrFxa2byHWyg88Y3ExxnNsqKLneMgHSRqH4Vp5SKJYko1W1a3nLrZMhZJvdmy3xqoz",
  "key30": "2vLDN1C6UUaQQrTNz4np8D1rTgyUL1XonBgHrN2kDZsLLToThcWqvjASxwt8YiK3VYVn1RnzujM2o7NhsuNmB26U"
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
