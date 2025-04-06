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
    "5zRYJcwQYe9u7qEEbjtY8HSEQrREmrgBPmE2owwMDp7yj36HjkocujrKdJTyAntk7QwV6GmEum5UWKg7xpi36Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajKDLBPfkEKdY1sTEMaDTGKQQDYMXd8MkPmVZh272DWbP9Z7cYLEazSotB2o77uRhMWaotL4iYXoRjFyyTCJLw7",
  "key1": "2BegzEjhZwc4cMXChBiM5wC6a6SH6jUrGcChfVfgpjQc2PGDSpjgZBk19osgSLZuJ7TmXPtPFEyAXsTHMi8GpGmm",
  "key2": "45v7AADiQZBBHEyi5gGCraDDpvvZ7XBA5iETdkoGCZ8y1ntKmP9cVi82kQCaHZjUMb24oNKAU132Py25QPAwwxcs",
  "key3": "5jNnHBgWAAzerksCJGFVwK8kN7qQdPJBrmdT3swbjyZD4Q4fCbFZAf11hzTvsmJJ4BnsXQwLTiuVCUh7ZaF1AXVP",
  "key4": "29wGZSbqCbUiinpvt3HF6yWz3NucLuL8LYt5Lg2Wxibe84GZNa82eV2zHSZUgxSaEvigKMjp9N1kyFjEDdF1K75w",
  "key5": "2vMHqcq1tEgYHQqy7vAuDgCAG1gobhgWH2U23Bz4re5wTihxsi5NkKw5bfpAYTW7bTmzUogsQCJ5CAKmMcaXr65q",
  "key6": "4DmoZzGewJjdzdK3icWEhivBWq1ehw9Gk9R4tQwZGZhes6zGUjvr1JSPz929cepCyibpyCqjwtWidwAA4vrLKHLP",
  "key7": "63Mbf14ikV38NATCgDninRvthsvYzFJZ7eGWFHBi1X2aimqTRyw3a8sXf3ekgSAB4vnyeaUELF1c1SL4xvcgc2wv",
  "key8": "4SKsaRwWXAWhCZ1XARFbyEwNMinMsBovqWRM748nJtpy3LVekMGScGmUdeofe2Q7UqxU2Frd6Zm9TGHTnywYpGv1",
  "key9": "34tQVvk2gA2UGW1tygypnooeqUEtFmiaY1kRViDb8hWH88fxQGiVwVARXnPeeVXjfapgFtZR3nwxx29WvxThtZyQ",
  "key10": "2DzE178EaJUiaKAxjK8PprPpVuMLBDUeVog9dPBY9h6PSGsREKGucZHxGwiRDQjSGsCPrdbZ8Lm5zhpwkgYWkzqD",
  "key11": "2aEuwNVD5iCFmQueidWhsdZt63XHNDRjpxEQWstCtEbvyA7vUojWbz9tBzTHEYrTvH354NgX3kK48orE6hNDHThX",
  "key12": "4ZtAdQchiWJ59z29yeDA6SiA29ifcaDBWnLoEi9NSkK8mh2AGRYBjXWU6Sbxq38W2bZA7yFrmWKWcmiy3uAkhkrQ",
  "key13": "4gi9aZyQ3rvK5xGsjnN1mXkSMdbXyyoZHVghZ1BwaJrteUwfcuGNVGh2K16qrWoB6uacon6CMoRQBtvRfb84NQ6d",
  "key14": "2A2JX484CuLMXNaqj52jZE47U9gMiS8iKafD7mzVMM7QjP3uYrW7qKZdQYdwQ2gz8BaBTKxBJ4Eu2gGRk8D9eFmm",
  "key15": "4htEAWZYd3t2WEhjHhy4C8LwnkeVqpitpQUrZPGwiwAN697QGyBU9gVGWmQt6XNVL1DNXR7qSibggXPUffmkNV1",
  "key16": "2BywdgdraKGj2Attp5DNshkDM2TMUXVfcniZFq9Tfy9QnETZ5Qrhm7qdE4n13EGzWHSxP9KvNSv6JMr6Z3EKVzxE",
  "key17": "2eG1uFWj26Zf1DdctbfzC2FAVCoJRa9BwXNkWniCEf6RgsPySWuCi12muEt5hsvmj2ZCoRjzr9wdpW24fskqNdPy",
  "key18": "5n4VcDdSb218LYaP5SjzVhX1ncrsDxLEkoKGK9CTyuUTPEwELJ82nDmAyRXAL3n1gcdsraWy2xp3bNbKH8TjDXWi",
  "key19": "48xRXNLvW1a7SCBCRM5w2o8f78VMkqXpYUQiHCwygYNuWGwAWweQYj3bpPmegXTk7U5yBfqa5GnMTsWuMp9ArkZk",
  "key20": "aHKMUQJsSxs6f14XwBNk8m1SVz76iJczFrZYzjm9RUhvNFb5EMVCscWqvvt2rqzP51Th9cKNR4wu6gM4J7UMevJ",
  "key21": "2wZaEhW6XqG1XL8k93AnXkuqiibdcmqX44BxSYpHVHhm9NoR1pRtxcws3ioiVwvvRNwSoF71RWZFhTS4Gagfrm3s",
  "key22": "4671Vb4oSc5VTjWTn2z97HxCfYkjuxRU7mAaKix74mEFLytLXZ7DQn7FGheKXgGSLujY7GXDwyMvoiJFGugmGXHX",
  "key23": "365mv1qfatnDwjcM63hsr45NXrcW2KBgJ2oLYgTamtuzbNpTMLEQQay6BomLJCbaihc7PS7Qq1yLYrwtQBe6ye9V",
  "key24": "5R5mWTdJ6yTfQGZ9wv395L35LpCCwaSfZQMjaKfhYu8DoJfBykKeduV9e4Mey93rmkmvdc4b5sqCrTFTTsMAocsS",
  "key25": "2rqTETLYbCYDUKyUroHPh3ox6UdoE22uXRw1pnQc2CwtvfeMeaoEg9GxAduMfTqwqYdgdo3aoTiDkGGLRuKjRadp",
  "key26": "qoSSQsXjudDVEhVtGp7LSn3PGNc3snTsKvojheY8g7ie825RSudw3BELbEJrUhhN7HsEQfyE9iF4B3fzeKBxe6q"
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
