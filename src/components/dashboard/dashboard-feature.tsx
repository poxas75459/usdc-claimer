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
    "3WaGTrRKewMhz7GGdc5gSRV3MuhQc9GeUC5nNX9cTSU3seax3D1qxdzHZv31MFqFcHamG9cEaHRvDiLVphUDEqto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svnb4zFXdYt98ZRCyVJtQTDD1owg1JoYEy48yUU6PUJgebmQBTFikv66T3nucW6fNu3y6ZGHXYdMmUUz565ehFn",
  "key1": "61fVSwjxQK3MgaA4MKg6Hgi8VaBXhcon1QE9oxhzrzR4CNhEF3mf4BwjiJuprssTQd96hrWyfd1w9Rv6wqvXr78P",
  "key2": "2ervbRPcAa2Ti1QY64ssVhS7nyBQsWvut5fzurYZVQQjeShDdJiFn6US7Bsc3PoTx51vqCxxXLiGJ4FrsmXYjwhY",
  "key3": "5RBhvEMPPQP1KgJbtwU7AVumauZPmBV7CrNtzV9U613Mn9VB8vsaugay2hDYq5CChwmXJhVSZJAjhE8LveM1otgx",
  "key4": "4aFumdeQgHyPhoP4L1k9yNgopZNgDNQR7QqsPDCUg3b69S5enocT1nVY7UFmHLUukBg8QPdo2PWcZd7xWrbc3zLv",
  "key5": "scv1f9KjG6XkLrN6qEzuG3eSL4eKNMRnf9mYYG9wZU5gXF9AJAzkxVDZTjz515N1oggaHkm6fkCA3JKEZNEQ5Lz",
  "key6": "4PFeQZJo1De5BisBSaq2kezeFKZQmuithjPUPMUHytecudQ84G8PaTHrrEmrdR4EEByY8h8FE6La3vR17XVhT2tr",
  "key7": "91JUqUeaCQy5Kc8e1nkKFrsoGxcet58LtCUw6GE4hAQMp5TsrJapUPWDTbdpq9xjwhvaEbE2Js8hPHQtzgvXqD5",
  "key8": "415XK9w4jjG41SLKD89vLG9JECP327631ptqthLUQ6NGQBnL9LSmwrJQRBz52trKd1bDtpp9HMAfFDax3kLFFhHF",
  "key9": "3zeJZY4TZJrah6PkLr3MDEotyuv2uEmbLZLLGMM7H6b1qZq7mikieR8CXXNXegmNm1w3YEfGGuTRVQ2ow9eXB2E8",
  "key10": "5Z4kx1C93xGpY1eT5G5UZSsFRDENdKhnkGGaXf3a66c8nMkD6GwLnbzzM5dSPG2A5s1JLcF3aUsQzPaC3wVVnvv3",
  "key11": "531T9wormzDv1aMAfo3BK9mNxMu9bPH9vVPgFKHsExkXY6eo5aL9jLeu9ufF73uJZjA4ki2Y79Bycz4ziGKyBJtp",
  "key12": "55znK4TGszcGfPCS3rbnzKn5XVHYkRfse5hbPiFdPC7EzvpB7R57nKrAMe9VpwsbDYWbfEU3QD2PBNAxzPoyrmMQ",
  "key13": "4NsYVwA4fwvTq5vLMNLktwEJbCvwKmATcjUW7D3KvTnru1pNqBhXFrXAprDLPHmiX4KGUYeLQPAvWcCsrrA367NT",
  "key14": "5ecaCb825BRp21uyXukgo8Ur8ACRvNK7n4qhHH3Xpq3bqCnnALcwuVtprNXGQc4L8FKxwgDWq7bSQbXLGrNkyMWh",
  "key15": "3fTJJeQ4p73j9QJ59ejWtNLu96AAdL4JsWEsCJC47Y2UY9i9JZGVWqH9MUeywCZUw2D5fiycdbqswW2MmmgegLAa",
  "key16": "58Sb6enSsCouqPNho2kxfsqYC5HK56LjyjogBRhexNY4rCRukavUtLgVmLyQeDEponBnYxf62EWqiX52jBwpNtLi",
  "key17": "2upJYt9KBna3bUXdstUFqw4Lmsjdx3DVCsn23GNc2JLMmDsTzzHQeQZy3FgMhswFB7wMorAGhotdAfuVBwauwNWk",
  "key18": "5THScYk7uppnZMqQDf81T3uykCS6z7meuG2q1opn9fCivDic4GBhztQCMSLFMe6t3VeMn1kRN6vqbgWryprAs2qh",
  "key19": "2XDz4k1ddJcswXPUsN4YRAs4YGC1gQ5yHdhsABWARbztLQ4d8hWDbXQqtVCsBby6Ppr1DAvutoKUTqRMMDtjWZWC",
  "key20": "4uomCmfWtjsFSMA1oo9zUHUvJtdNqeU3V8nCD4Cf48WosaY8RfLuDGMmLnqzXyzqeDt3UoYGRPoXWKt6Aj7cx5nc",
  "key21": "ymnRBTwtw3FKg7F3DzqMWX3T5W8G9JKetCZwSJ1buyxPn4x4ig9Rx67oNH8MTcz4uzxcdce5yuKU43Qbg2skeXi",
  "key22": "4MSGBFqBsfK1zokaTm95sSYYWeXTm1BkTUrnNS8BR4rbmTQSHzNNJcT47Cg46cHinw2PePXbCVByeJhPPaHgsLHw",
  "key23": "62tUyzTLz3JwVnhquacuGhBunYJuw2b136AL2D7mznVGWaKrzgaTy6sBPPtyLZtws9Tf5kXoGkZ6gh6hjJjYreTw",
  "key24": "2oMcFc2BK6398FmoKnzJXJ6mw2nK1oFRPRmRLoaWtnWYmHKvPkpFFRSsxLxZJ3wXEAGTo3FQSSMQN1kCFqcBfv31",
  "key25": "tS2QAwSBbCU3acX2syoJcQ4VgSqDkk1fsj6kTFnBuQKM3Juf6jNtXd7qExcX9L91jKHTTbhQzKgruJMWw9NvEmw",
  "key26": "4sJh1EqWFu6Zr1JDP1aimNwhYwPMFs1xrpDYb26UKh6cqn6dySMC1tfk3jS79JToumZiYL6gLBkTTkeajrn8Wihp",
  "key27": "23LKWBaod9THw3Ga5VejzbZCXgW8w7hz85fMmEbg8tDVEh126kwgGcppTs44N3HmU5PAWz47R464zc3NUhCJEhpA",
  "key28": "3HoqhHtACUYPuyjaeHpfvDs7trPQ253pZkcvTZmHn4pr12U5YciPzio4ewRs31P2ssGgAKQa2eAWxaPJBqf5Sqgp",
  "key29": "4wTXaENTeRScDBqihmCh47j8HtRo4cTiqcdubqf8RJhny4oonZfLWaWJxiiGWf6cfgvtALXRTh5kBG1tXUXKZcoM"
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
