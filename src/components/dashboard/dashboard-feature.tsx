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
    "2vNrrLv3SgNqjWwTtB7k5Fnv9u8UpDFv39fNaxtRs2YRar1eLznBrRX1vmDG73VcqQ95pPvZ4WJSJzMc3kg5ZBgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HBDsVf5eapB4rWcucetGNb9w7EaAa65VuCCPUZsYvcqE8DfWAmpHCzBuvMQwcXguXh7pV23A3BgfBCTKdP6Hdcc",
  "key1": "4weTUwb3atSQvXV7zBQ5JwtcG1STr5YrPLzvoptpHSA3NfzqDcagCdTh3XSq3cyG6nSBV5MJ3GRhFjLqvETFsiT1",
  "key2": "3KqNcD4DfWAYQJ1wjzTCM7MHHdsQ6z2kpX1aY52AQ1LuoC3AGdXXL9E1BTJR2j1XLXpZaodkNc3k1Szf32UDFLsg",
  "key3": "4duUZZvHmkBx4EAd49UN2YTtAH7kayibW5f9ChrHxcwEwHRnf3RYQzPLTh5MA42gBuQyw8frt9JNQHEYv2YBZgLi",
  "key4": "63eLZEBe6MyWzgEjCoayvRCaryP5cbs9dWjAosj3VuqRMj2RcCShqZizHERnqYxsjH6UA6XZXkRG3kUohRJYqQCh",
  "key5": "4FTq11gn4nwFnB2Akh2TdYpn4rzxFFSCB1rL66meBtma47ipNbpjjANk5oQ4GJY1ya2vbdVDui5GC5iCxQsWkAyJ",
  "key6": "4QgJBZiqXC8oJbq51Aaah9Aagekm7cZrTRbqJKpeJ11bDYjK3XxZuG45AfNcSJUATZRyW7v5qxSniMiviymzL3wU",
  "key7": "3vLJ5weg9ZnSUE1D4Eh6QDr2i5Z95w5PX6nbP17wGoepuWKx9LTBe8cuMvPWmWiT5EP5ZZ6UViyg1KRBJwskUhKM",
  "key8": "3zadsPhoW4hQyzy7x3HR6gqSPdGq3XpK1TygK3o2qXVwCsKsXRsmVtdaSoJPG5VkBkxPDnriTuYEgyXJfP2hL2Cu",
  "key9": "5AYvinZ3FoF3ps7ktzK4ENkzM2YXAZygHpWMqHsom61Ah9PGSrYTA4QSiBGgPHyavkJNVRH7WXgCF8AsFR27Ha7y",
  "key10": "4Tnokk1gbqftyTPAP1Q5MiS12hmLg3kyHXEVLS6LARrU5gBKEfCbgVLPJiV5Qi92CUDUxZ9uGxo4cvxSbWZp1fhj",
  "key11": "kGg3fwAyHr9mxuNsDq3QiVfqHtj1pUUUy38naJX2ZBMWJT3sZFgytAAB4v2Ue9Lj7F2Sk3pbPjLMqYFtLZ6CJbJ",
  "key12": "3NEXq2HNmpNT5j9xXdh3roPjS9RhGfnvZXTEjFDUy7cr2LWffacTSAcixBcTC5c9xthrQZPdTCA2mHYQquiucqd2",
  "key13": "d7qj5gh4t4r1orVyxjP88aiTASSoxWusA7cpKtNEbBr5cNtRcJf65bdTtVgvK4rZ3tkQoEttGV6Ueu7EZhWEyuD",
  "key14": "f6G9QXHkR72Powu8Au6NkR9ALo7QKVF6sgKZYFvBC4ZKgasAA4jx6begG95nzC3WnMF6owVk5U6zt5LnX6tS5Ka",
  "key15": "5ENLQkVf5hy1GbjxeK2tekpf66NR1GzyRhFy4YxNnLZFqNUGG5EG3EC4bfPGmQZxkGq3T5gYFcTFYXHk9PeHn3Wj",
  "key16": "3QC9G65DJFvnC6nQZtcqKZ8D8ve7aeyCGw2aN8BPab7idBqbouJEcZgmfh9RAfMxKRAcapcQx7RtKwKRf69Vd7md",
  "key17": "4aALLL2R1Ro76Ur3Z7cvJ4uycswG9tW3QCfi7aXi2vWcAQ37JFBkEWjuR3bENSBncWmAkLJbwkqXBnZCq5S8Hty7",
  "key18": "5Wsr2uBWPPRnyV4YHnwTuLjknBW44rMAtJVe9R2pR22fU4i7jFzkW4eF8EKk6WM5uurFSSr9ifEQNReiPUhQweSZ",
  "key19": "zPf3aZXKWwaRqZYzVf1Xy6mdnRRtAiWWskEQj7N2ohVPJ1HJUAju6rDWAUStAUAeKux2wwPLFg1w8UJ5x3NJHTB",
  "key20": "NZiSQykVzkFuCVztUkGSoZr4HZgDhVsVWJUhH3iphcdoQDhVahcfuaDbj1Kwzrq8wjUWWNN3AfL1JFBY2BsnPjY",
  "key21": "gCsmnSgohRyPumqvc1M81F2hZxKSqr17pudvtPcGJUmj5SH5UcY1EDKuyKyTYY3BLnV8HV8At4zQCd1cpaFR4Dd",
  "key22": "qEdD6DPMi3Tu8dz2RbqD9KFr32Rah9yunjrUYSKVbegRYxunQXKxa6ed9ex3hczqm1Q5aE4uUyFr5RvSzhJNxQo",
  "key23": "5cTiqXiv459sJ9RhPGQxe719AETY1XBA1CEqNWUaa4qQuhcY1Xj7PMqbdas4NyXQrSheV2HJuEHS1Fa8UFYrPAbn",
  "key24": "4MbfLnKGkF37akzjpkbcqXgEymnUwd8Matu6TAiodK1z3VLUX3saAEpAVVB8eR5dL9ESzpwqZwtMztoHXRZCwaF7",
  "key25": "4BcLoKbnejehurGvhpCkhR8oKQwMyrkSzy8VbGuRnF9caPCHPmyysJ2amKvqD1C5tD9VP8hAqsoX1wH7VHQ5H3NC",
  "key26": "5XbhxHXYVM5QbrygTqkkQ52rWB5KmVP2XGp539epMcbCVmo92eHKKJdkpkXsSHNPEX67hCU4iew511HJoraEbYN2",
  "key27": "5CVwTJWnNBttdZNt9tRkMKuF4PzmhAVGNpyt3t7JqFcZrpqjMsrjSAayn5asfwhhFVxHBW5hTNFezkqQfbRJhW8n",
  "key28": "3898dHxW91rVZYgj6ZMCpJmzGVfjwdmSMK9xjUtg72Cstu9TyaAjhmpLaYp8dZMGJUgiCKjs4635d63WvhSH4aAk",
  "key29": "3veLEtxWX43TTyjpMDyQoUm3F7MLi4DVTvLM6WQDE4x2Ws2s3gtbF1U3jsQijVWPR8K1rzcuGF2sgQUs31YKZ1Jd",
  "key30": "3XXMAgjPEjSn1dEaAtymeCxF67Jis3hMxdCHHT8Jfu3gXhaWhMMrEpoNoBbTEmvVS9bCubk5g31B21cWQ9RWEc2M",
  "key31": "2y1CrWwyyy2LAcDYoaBQLje9oTJtxGKWqTVnaxhy8B7YSZMLJxDwZw3HFJzKzaAi9ggEAzojRqgSGiu4QeEYk7oE",
  "key32": "RzWn3RWdzcK5CimCRuX9ePZmBUm7srp67fzV9bLwFwEvPzkb652C7Qnsbvy8vSbjSuQvSUvhe6fTUjq5EWpeAS8",
  "key33": "5mKSzjDq8YKpK6WuKb9BAhThGixeH3tLvb9AgBUCACHK3dDSLbfJsmZ4Nw6YWDKpNMGdLTgAQzSbXfP49ZCKVdmj",
  "key34": "5LVm3ojMv7Zhccof7a6m2gergHwZcCrbZ4zhMkQZ56sYDwRbhsPCnTm1cCnroYkEyRgYvW7hyg6fbeuU2JCNnQho"
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
