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
    "pwbGYXNEwiFUa1bijXL8GskGzpQkPi3ado1y8UTX3nwhuTFoH8zrQQdsiBQKRdJs8DsxLadFWj8x8w1meeLQsfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJgzTd9BqTRrfYtPxuyDgYrpWYDYypsBkAeHvUqEMjCd1gtviXgktwrNHvukeWN6TS8QgnifiGGJTNVCEKNuW7U",
  "key1": "5bz4KpyMkKozE7qUBXe7o26arn81RpRDUQQdF65iX2BzYcdN6YEAveVWb5ayo3Ac7h5bMmng5FdJzrgj6YCtf9iV",
  "key2": "3eN25MJn2nbqgCjJsiYXVxCTCQYGYpZP1uFpDpcbVysUgQBAxUWmZrTsjtTvf6KYMWNKqbWvLBCUDRiXwnCNhS8v",
  "key3": "46biR45JaM4gcP1UBug9fsBUy7MDH7UpMAeqSoaqBoJ384oGXajNmog3dwdajRE8LEqYbnrKEMMdF4NCqp1AR3ep",
  "key4": "4U8zJBMWzWkvYcR9Wp7ecShuA8H4BcYUo7mfpe4g3xuNWuKZdK4mFaQ3eM5TnGdrjjpCnwAwYUkAfMgRQGuvFQ4q",
  "key5": "4ynCYxccnNfxqxxpS93dw6eHqFiF7F9TZAqRfvS79aiM3xGZ59aKPsh1AR23aTVaWRf4Sq3sMto9SVKj8o65wmD5",
  "key6": "4zUzVEtxonqunzmeop4MkaDvpYh4Z9eqbTuwG6KdegohdjwTBZwAiPEFeYLXy6kbDFfThNbsjpxcHh3w6iQyjoKm",
  "key7": "28pGUK3PNhrfEGVDb9YVSxM3QecNKVNFD17ECJSCNqLc8Ua7sNtM6pU5Ln3ypcQ2YL9xz14HEARfVofCUMnX4KBc",
  "key8": "9rsa6QchaUnKvrGwVXT93yZQjn4o4Ggm2oYpbWBz3uoNv2ViMEK8oyLifzXdvZMYPHUhEb8HPo2Lrjjc5sBQona",
  "key9": "4ReupmzuoyQct73Du8tGNikFMYAL8HbsX8NBoUSUfQu5axMdjuEgQVCfC3DtXyF5V58S5U6zN8JoW8Vt2xmjnYNq",
  "key10": "63SEukqTRNBmGCUqcPxLuHBYTXGsVWuwdhVCUm7PNGBpUfdp11ud2U4EXyxEAqCrbEMVwk9MnjimVfXAs6owKMDd",
  "key11": "3mycvVjBYkJnYUT1NcuCeTQfLfGAjoPEapJ5kaHWNvygUBkFdb8tbvTk4ZvyMtohYNt8vvTWc5WmfXbUDQswzXRp",
  "key12": "3E4mZtB9puL7dhZieNvNqbegecWdgM9DToPHhejcjUD4wDipqZkSLZ5SBaz2RYbnmjXjiTnoGns6BCYooPDAH2zX",
  "key13": "2zHH46yamc83gpw8n8u7Vew7X7UPAcVTDKpMvnR33Uwmia9H1n1i5Ec3ZdqbYrkuZnDWjjSj5WHekZtMqrrdwrN1",
  "key14": "66WwgA8FXqhMk8CDmtyui4a4N5zf3jkGJaWP8u3AboEbUoy6us8dCkbneaAFh8tWJosBZV1D8x9oiXpXjKnQt2W9",
  "key15": "38hFmb4ehkGXStyUWKpPtsRFKSEDYpKP7kn3hEeefKftiJ5hxvdRz1joPzTBJFkRzmSwLsNAvwM3qNnhbGAd4sNv",
  "key16": "2qy2mUHwP3YGft2ngSy5D6ySgG3C4mgwKmekwChusyEaVZdqB2CeEU7Br4c7jDRBDukXuJuDjykAjxSPDbAa22AE",
  "key17": "3t9niokZWc5wAqbr8pLwPkNN72Gqx2LPky4HxvtBWpepzy6isVA3AaNcAy4yGSyTs9NdUzAo1HApQyiuzVHxaAiW",
  "key18": "4PL12mgEbHcqy1HetK2bRMDiqTX2R1P3Pqrdz6uaBgPqGpPYoYinbzdt9tx7cq4UnfBPQyRU5y4BxsLcqL9ALsbq",
  "key19": "5GMn22YC9QmYEw8STYwbkjHV8GE3ZweVwGhiQr33a9rvsJYhpVzH3tLjWhNSgCeWCNJViJkVFUnuREBPGQLn3xvK",
  "key20": "3VBotBn8ASUWLboJqDT74VNh9Ka8xHCj4RLVWr2Cx3zX7rtdAkWrPkPo1eF5SnDqvqF68oLBhRWgrfRJ2BLEvCcL",
  "key21": "3pSUpyh18iu3PwxKZCG4By9Uju54mbpvXGpDaqjUTPBU95tFsrnqoo53Fiw9rNaP6FZbu9QnUwF7t8BzDUB9vPip",
  "key22": "4CycGAKsEHArEVXX8dQ5YQHt5sTo4hL45LAHZhEyM14SkCqaWZwxf73aKku2rmDxX5GJbA8ZPpr4uG1BZSZa4dKZ",
  "key23": "2jiT4pPorHfg2PKGFqaLrGXfjkBckPRcMT9sWHXMrDfjZ3xaaf72q3cmFKsRDoUBaVKEk5QqRpxBhyDQouT5qPj",
  "key24": "3JZrmdwvVSGeRZKvUtkpGe7Gch1ZtPT9sVANJ4fAMrJESbiTs2n5Cv8nJ3oxBvpQWniKNGoQQdfLkq5iVp9bGWvX",
  "key25": "5unWbXXGcStkWCxaYCP1ms1NQkyFZDm8QNc5LnHPFTX1TduBL1EFXSyCUi9YNqQ7Po8nQU9G1rZz6ieFbAWHyiLJ",
  "key26": "57mkcqk7XTDgCnEVSUWwUo3ehMqfuREzUnRuenLvTehiUxXchwZtMPjeS9eZSYyjbQboZ9EP7wvUpMRgmuqnXtzb",
  "key27": "jEKhmErAo611T3uk4rcw7tW4me8fZPJUkdqCe1oSK38maecSH5GphFcP2CakYWctLgMCJVpz6QSJ8enPvoiCY7D",
  "key28": "26dYrfyQ8mKdGyr53mNYoPScBNdTaffSjfBd1DTgTkVaYzfmszUVHH613MMo1r9N2UamJS9ewwESC2ZzS1eHBLQf",
  "key29": "4Fgme6FRerzZjMcNG44atDHyLnavQQXEirmQCGRXXNtEocck6xmBRUJ2DzNpH8hTDcMTxB3oWDh2Ug7Ta1Vw6EdU",
  "key30": "4BqsEk26bRihLj9CMyhBh2mdtDhGsJzyRvWqvqa7mEVkj9bUd8Lbp98HjCcU3SK9GTnKG1SCwcYgBCvoPUw6bsf1",
  "key31": "MGx9KpKPMn7Vdj2LdLaomLFLy8HCdB5PssYfPaV3PLfYyACkXyaqam324t7ybhnmxjcCpX9WB6Qh6yMbfgrZbaj",
  "key32": "dqYhqupto11r9b19aiJ7dUUo1Jx3yPhuV6nFBiur9uogTJnmjWR6yPKX8oqRRPV52bpGiWNAsbzN6S9DctUfE9f"
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
