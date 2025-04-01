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
    "38XV4pkDabSAdAkbRfU3RJGiFbsT5Yt7d1jByZFVTpU9UUr7Hqb8jezSySyaYHCT2eY1Z6hf1XBh9wnsMiXNnA9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1B2CaawzmM2UPFMnoB2JfSCDanv8TFK2JuvhoAEPmgEvzwxziiuBdFSjNTjex6yF7BPsuyApseKUcfmzmWRnVT",
  "key1": "3bePonkKKbkWfg8NGowLqsaqqqS5WiGNKFFBt5GfZvBV5P7yT5A5AdsKCBeaxqiTbgiWG6ED1s16U1AqbtAFkVVF",
  "key2": "3uM3aYoUVBiD5Nqho7zBv9tFsVmzqi58hRMk8R6b3TysAXwS4FKyXLs71MyVt4VMme3nycHDyjB2r8e72enL9ZGM",
  "key3": "2XWonXnbYmss7bPJ8gEC8KvQe7NxxRK2hwnjVyKoFUm9ji3iB7xwnmx586ZD9huW7XHGuM912CG5FcpAGseZLYKz",
  "key4": "TNFAohYwPYiPycRpGPQQdBkby5CnFbxAiD2nLSzRvcFScDL28eicsTGFfYxZo43kFYz543Y9EUV8uSQz3Koc7py",
  "key5": "4C4my18RN9nXy6BhHN81wYJxG3eCSteLEgNsU33eSHymR2zJkrqmkkzJu9tTdjD2GVko4oeyfCEsudVtpKn32PoE",
  "key6": "pzerPqbnGxYvQWEiuoXHcqFLEWmH27hGAxMLSW1r4VXZdekbwMKiZmsKH46PW6nRxTt59bE17C8C3LVF1MvKrSM",
  "key7": "4qXGwfhPe77u6V7C66tGYkCQw8J738Pn9yQy7oaHpmFL425s4yRPbcjmGhmHhdy7AXL5ASfd754tjXknzBfp6ikx",
  "key8": "5hfKmSTQVnf2ht4qnpoqKiLkEfNfqoPvRLzJQymfd7qjWutPwYzNgT2vkXiLbxWggbkoC2mD7mrGeRck7juAVRrs",
  "key9": "5PQCYyA8nY95CeJHsws4A6eBC44Yw8NVuwQ7Gxa8HsqjzeytYKcWaY7Gj2rJkYbgMQMPrETki8of4EAQb7YAkTaB",
  "key10": "2JmFUc5hY9DwYSgjm6Wb1eag75SNunM3qkoXg851fmDEqpeXmETsjvxKhXf9bmfyz1hDEHVmFy4wFw1pEmPHbJCh",
  "key11": "7J6pNyFBAFXZSkA9jUmW7Hr7pvF89qLfNSsc5YrUGWtGhgGTYKJavaeL3agHMGi5t3o7G2TRveix4iyteL8P2aP",
  "key12": "2gTP8xTzhKqnpsfXM65pvW9WHgzJWUFA7mACn6x665ToyqkYHjA2h343gJRcmgy28XzKchfv5b5CHokgTiVaniim",
  "key13": "3wiYCPnefnezaBEKQU8PahnCjvo1nywntTi1CkHrbQP6AExwVz5c3KRcpQrYLNTLd8Apb5BUP65H3ebKjTx7QKqS",
  "key14": "4Ai6z3T6XSbEtjfH4TfexsTWMeyykDoSbpn1mztnj1Hcy5wvkWac4zytK2DoK688tPZ2zpPLeXNBRfTQBeqkqQWB",
  "key15": "3CYbZmBKVHnoifG61v7zR2rQNi42wE8fGTQEy3NHpqSafs9inGV8jh6GP4eX8VUxsnzwMCsrBAsi95FkczBX14Ry",
  "key16": "4ZazPkmQSjYuwYyFP9X7kKchaKux5feNKUszqPUCCRLEssUygUxZ1KZfqwo9tT9NDRNt8vdeLLdL2CFCApzpWdua",
  "key17": "3TgmXckYn6q15Q7NCrsHn4rsRXvNWV7ZLMGrKxirgSAb4DrYXfMU9F6hDDdJX9s9LFrkMe7na8LTiCQKfF432E2x",
  "key18": "vdFWP1VpaCLHNTp5W6bYaBy2mbCNq1JzCDQBt3R3XbFBLHtPqHu8QwkqNpJf1b1XC27DWWKnU2by47ChTvDH59H",
  "key19": "4od3CJpL5WQudYkigy3M2p7sRP1k8bApjuHHJbjphGVesv6J7KmFCU41nU7zzXp8ZmkAVFdJZ9zhYaTbiZsyYrcZ",
  "key20": "5wNQYUGmwQLjFs1W3VwLiW43brUdqtPmMkD5GF7fKoud79rNAsNYRGA3F474Xs6tYt4N3Na5oZUXKomLW1ibsnzv",
  "key21": "4AbmSP7BVZPMJi5fKA4ErXa3yebAhvAqXzFZgX12RGVpZUcWBSjfCcamNfLb9XUuW453VEQbn968AWSYauBuMJUq",
  "key22": "5LZTBRZwYq1YAkdAT6APa1VCuAN56i6kEoSdYb9gMfLC8pXQbm8qMqMcWgErWCRkJVCnPqXjb6hARqq6gT2qL7AG",
  "key23": "4RVbuazVmMytbakZhBtm1GkPNKToBuUN4ofgSW1Ru6vY46mPoRvmVSRgf9Y2a9czPzdE7RUCvirRzJRpZzPxt6DN",
  "key24": "YXu3i4Ehdjpdad5rdy5buX32QAZhrkKGKeUdrjrqdSvt2qnTRYRQk4ub6E1dSYQ9Vb1uWrGT9GkWGx1p4rJT5BY",
  "key25": "5wpzUVEUHf7q7sMNgPncYYT8bbtS6GLdN9iUvXDWWfMhYbHKcd9j3A79a6JBMvChfLa9MrP8Jk1vSdTa8e4maEtT",
  "key26": "4zcn88aQMbFd47mbSNhhRkunW5Fr9amtkuCG6kcaAXbxhMRWzxb8xVzGu2GCa2QTxQiUApyNbWPRQU45w5CCoBWB",
  "key27": "veukJfgVMwdrMQ1zjAZ5Chnwa5axJPp8i4GLcneSDhjXQ6RcVKR3YDuaAkko5CVsrjLhnfPtMdwupDkPgGKmcka"
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
