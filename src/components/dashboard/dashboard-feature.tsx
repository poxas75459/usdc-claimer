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
    "2FhvLaNk5ovvxicbu8rW8LhgxKhBWWG7pZ4n3dSTD1L1YrRZVXovHcB6f9v2umXdd7Fxy8XiS2PqzWMEvbDqFDTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uk9fTohfw7CwFLxHyjjeEctZ8w8tYxGur7o3V3gxtozaycjyQyg8obb5UdiRY17xff6xK4opfi9DU2vdnYBsSmz",
  "key1": "3vNGvs2j7Fob2LXNTq3C4Kj1DpJwUYBDgP2THXNJ9U1NtyAf7fjTfikP9VVYpsAueAxg5djaETe37Ki6oZTMSSCV",
  "key2": "5ZqdNLWXiYhgNmq8KB7Euo4JaZ81f35PMffezZjuCpTAGc3L8ghk4uH86WKRJCmTA6arZgg7MAbeW9nt3kBkiHZj",
  "key3": "aGkirjx2ZdFEdevMfTzfmDoV1BRFjaHBZfGgsNSAnvgA99upU9W4wJQwEAeFT5ayCVGtmn2MhLCJjsQQMt49nvW",
  "key4": "3ngofz1xZJFhberhwXCT19E5mfMBKAW4F2NsgiTZKhpAMqzSoEGcgSqFRLvzKAntc3rhv9ZzgTyWq3T3DhymnSn6",
  "key5": "6EXCMrXGbma25eU2EEwdtXkgDNkYVLqdzUe7Fhpdc593dTFAQ7NnhdWLXgzX2GziK7RaPzFDy9ZQidAhyDajZYf",
  "key6": "5qDQLrDcWR37kFpTZcGmK98QG4iKP49PVJ6Xb3C7cm1poRYgSMw2TfsJTY6ywdowvrAst9VcWSGxHwroxvaNY5fu",
  "key7": "4mhwsrmvN57gGU2hGPk5xiAJR5ZExYAuyAWg9XVGC72JhwLKuwELhnVS6k9VFks9GZ8i7Rj53dKow8CMrpsarCgu",
  "key8": "5Zt7mGYLnaTN7bKKYonLv3RpAmhCiHn7kBkaJ4EeVvfy2jNdsmSXS2JBeaD9cKfucMzzRSyik6Sva8vi3tTmWoCi",
  "key9": "4oTMDRvxXCiv6gWFxh4ewvAvVURdjaESrFQgMYaCY3GRTFmPGDR5YrgMLePf7D4NJgg63QuuWmisuzu9sjrBLv4r",
  "key10": "3n9z9PSxtMU2huFNfPQxVdXdPPQ5z6woZkJVo6dcnoZ1SBDLYHtXz6VAy7mcydQCDc88u3KhkVb2pnSuAeFTxYYb",
  "key11": "2W4uX4Ek1X33ikbNdBLZNiKvVgqFkCPmnB1W8UDRF1Tmn4bMyqrGehhwEhsYkyQCKNp9iYcNj5haqdEqCuq2sEcc",
  "key12": "Xbuf2FznwKwtxg9wfoGTvWuWEUUMNt2SFN8xSmeKtdJRzFGZNHpgYz9fcSdEL4aVNf5g1z6GUo9vxz9dAEn8Hrx",
  "key13": "3ctW8bEdH3j2qupq21wVL12AuFNEmr7yj91XtTErehAyazwZPhLF2ukDEXperMJh9zgrPf9GNNxNinLiyeYPjB4b",
  "key14": "5wPCEHJUjQuNPEqwnEcfrGW7RqjAP11ctAqtv1hnHKWnS9BF25t8go63rsTuc7L4rxgyjyZ9SAjYARwmgRZJ8zTi",
  "key15": "5L8W4yygxJ3s7VWrq55K2kyvzqTJTxos9DuusP9aawCC259bTiCtM8h8JkdmiKsP9xGM4kM1rvMDjVGWx1xUeguk",
  "key16": "3kv27gFPPV9dYAWcqocb2KxfqpQFtGBf47YmaLjQNBP7iALJyidr2N9UxFFQTwoVgx7KPNAtFV7S8EBFrZrfKoFj",
  "key17": "3E9V2Y8HDqhHRqmYCoxf1ciwAuruF8zkAqcQaCPKfkmuUYNihwBmeoLX2GyiAhFeihUeELzYgm6VJqFH9e1Xiuo2",
  "key18": "2ubzgUk67ChRYYAyi8xGeana5ksXHHHruzh3sMtR9yf7WSwXqnmgQfo6rKAAxt1xDiyUFWP6eVcsPP4cSWUxz9o8",
  "key19": "5SemAR2tbyjvdgqdKtZaUW99WJdmh6KobEreeZpKvNUb9SxbfCu4zheALNnap9eyLqFkg2tpEhPTUyJwfVoPcuXu",
  "key20": "ehpPVEk3ADqJt2f2Kp5ZLnp8TkGQdZKzUjGVke44gqXjaoXbMHWsVdScFxohAVJweye7E4P3gdrjKf5PDQPkn9A",
  "key21": "54izKaz6rYWx1EqJnygMqrBdyStPCjghXHtPJXPPDg7U4FEEN8munaLbDLv7YK3ochcYgBT5mm8grxb6nKP3TH7D",
  "key22": "BqoUycrDJn1E7xAha4jdExc3ZnXbGXqUd1gRY1cjDu3snfFpAfAT3SWHofRpKTYTevWk7bxHrfJukBmKVcnJLWf",
  "key23": "B7oeBfETd3HQ4PxgPHoqKtY9Jbnm2FreRYJwgbYmqHwX6w5bYjz5pozUVQXDHihvSYUxmTPh5mrm4ch55TZfuAX",
  "key24": "4iFgF2RJaQNitMcJ9Bh3wcJ3n5EN7hfoLaaNyYc1NXoSrFkuUoiiB56Px1r9Zk59ibNj3vLRbEmZFtfw7EgMqwVu",
  "key25": "3R7DnBNEjw3wSEFvaWLd9MKvCQf8eFi1eDMpp8cF3vXyEMd6THeC27R6rxiqnRwM3KQwfa6uxPhKvv5RDxv34VCX",
  "key26": "giR27DESvC8DjZZCgUX9D5BxEXUzyKQyN8nofLgV6kd11gyQ3BemEaCRUMYXreVDcnBJ9XpBwv4KEkU6LNSuQPu"
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
