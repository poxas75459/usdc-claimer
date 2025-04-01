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
    "4wg5cqe56YBBCFJr8dzPHR5rKv13znhUiVAnGjudvyynFwwr73r78CkEyN72wSofQzAscbeNgx84HYWGdpPfsXDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHKTNcpiiugSUbRWCYkav2ndfoBeqhFfgwgToMd3mKpYwSZJJ3BSyDB9vC3u4F63Scmw7NgqGSaBhqevoRt5ZGg",
  "key1": "RgMm9TsW4f6XZjaghZcMwuH9XNUnNNdVfN1WroUXgsjkcoQtFMtxwE3n82KR3YaDb281utRF1gT3ATy4C4PuZar",
  "key2": "VPApPPZ6iKm6mR6LREkkssZrPE2Heh1zELZk4E5s9zj2HTkdtbW4d4DSM4CFWJty7GPePxqBP1dkDP1dHh6jL77",
  "key3": "2q8fj3Sa76fVixbjWKnG8Rv8EkXChA7DdMJ7raTJxhMpDwGv4m4o67d9FRWfz8QPnmNrbSFoejth8uProSFPjgpB",
  "key4": "239bdqP9nfnDzoSYG2epzQAMsxZp3xX4rdXWxdS6k94x1uKYjEZTYiTTNydEFmEsh1emDvmXaedNwsQaKZvY5VdR",
  "key5": "ZNsregrS1SQEixzcy2Gqnojt3Qsv9Z9ZSx5LMHf9ZfJPRsAk88Deq82SmhUBLxVqLaQufiEruLUvDqGqmcsUxpu",
  "key6": "2AHXAGtW87Jbw1eheMxh4kSSEHdRRkpVNVXNmR8puFC6LykhFap7hpsMVQ5YygCJzkWSk5jEid4EYX72eJJHXRf1",
  "key7": "VpZygJ974tqvMRdFSCXDVisYhhPKETRcC5ZEnuzzjHvkf8bnfZvdnjrbaDok5ddogwU66oM87jLDSRzT8377uF3",
  "key8": "5BGqe9AeLtXBHUWbZXi4SW6tmY9gg9PGwE9NZasArmtnfyAAkpXR9Vk1ZWXCnPyiB9FQeXaL5CiexxBJPxLLW4LW",
  "key9": "3gHAnd9BdAEUpBCE3UXFiEJV7oQpffvTMLfU8msVteDjdhSRBDQ74p7KDrzGUvqUaqH4gy61DkQqunCtGT1fkcoo",
  "key10": "5ouKjwiUWGHs7y4sHvPnUys94yMadtYX2FdVWeky367UkCCqMYY4ub9BBG8Bb2voyP8StAvcvCVWs5yjWLhHTHKu",
  "key11": "PL7vX8xyBHxRCcaJSBuAMxLKs61gWDo1daShHyVmfq15bj9NpJooMkaUqvHZSyrrxdYoQXjn1JE8epYXexLpWsR",
  "key12": "3Trp8zuRwmB6qRfAaLFTDsVRAWHUB1KRiaanC6f2iEZGCpUrx8u7sZaH7PtKVb9LsaAKz5wZ7ZLtc4CT1VVxorAY",
  "key13": "4Q2xtH6HAWaoDyvpw2zXAoKHEKcvxNw6SR3gADAJZR7QaeignMCUPuXbScYquFDmGQ6KWEELr9Zj8Jzx9yiJfnJC",
  "key14": "65Qd9sKhQRbVSJLfbHpR5sxSMF3dhNrNJXJ5JpVShM1tJgT6mrErCvsNUyJrhUgHtfwTzNKbJY9Ao5ZsSxzZ8K2B",
  "key15": "dVNKBCTMr13JUL2HhqQyTGrXB2B9YiDMhKoTsjGfbFMudsY9RTDaegdiKKUYE8TFgTBj696zbYsWNZvraTwtJbv",
  "key16": "3FpmvXye3Uqr1duCPb4Lp5VazyqvRt9Pi5vH9XkJPk9KgPNWFXiHvS2GeZsqgBeqYX5g5XXfTK8XwLEaAetnBsLE",
  "key17": "4hnMxErDihUzhoYqbLvTzZGCBYJPkU93iZSThLuG1ByPbh7Dm5vX5UnkqSJNXza256ciftexgwj9ToxKzUNdowUB",
  "key18": "3jJDxQHyjqWh6FUTrq2xhagW9orxyJqVjZD1BTn4x72Q9zJTezHsWxHpNDFACZuCu336FNU98DYJTk39ue3Dj7cs",
  "key19": "4ZnZYQ6G3EuLLbkacDfYAMstLqdexxQSxj5o92aLsubCvB4QGVfdgksitWXNaXnRwNaNH1r4CZXuBtbVNKqJeiJL",
  "key20": "2TThLoTn5x6asKUjtQS6SRQo3ubKuGrdRik7genfCu8a9K4jf62hPD8B38L6PUjiqZzhJEuMDekw4zni7S6vEvzG",
  "key21": "3ppmUvJqU62EQ856FgpEQcCCfWjwH57QBUo76kSCUoLyPX7WNjdXZEyx55T5iM9eof9aSC1UeU2ugQvTFHCtJTw3",
  "key22": "25YctbotBfWu5ZtAyXkBJrYtLfw61tFqAapa3RDyLpnh3ryycUUGkkvSNZxsA2Df781ZVhZmQrK2nPDwsUgYgXTs",
  "key23": "3iZEyjkjCCLSUnXejSTeiKyqNHzze9MedoikFT3VFhchgDEsrUpshbsohd9E6GUGoRymWzs3TU6E4PNddfMUHrNJ",
  "key24": "3hXmJX74fKN53rEtn4LVKdzyYGMgduKej639KgVyExT7vmtJQALoha7YtYLSX47Rb9p5bmUmn9oWx8aT3uN8U38w",
  "key25": "3ALdHBHsNq3mE6RfMVAzfFh2qKYqbfqhQ6NkoT3KgNd35PE4UNqAGw4EUgmQw2587p2DTfenTJXZSb4egjdYXa5X",
  "key26": "23ykS8XreH5YAMi4ueXW3rxVEXntGRPk7ymygJUXdRf6RRaUcqTrJ2t5X5VjyCys1WjH8znSZoegLEYjhe4NMQ9u",
  "key27": "RzCAZLprAZjmacEkH3QMiYjpSbYvJMo54AxynAWpQtagRzkzBC2j9B49VfDEMfe7JQTGvNHCFupQnRaAECcrii4",
  "key28": "5YG5Tc59Ukzz1FyJDYzqTVuK4GWijxs44KdRgbauoZwFj8CfzzEgqpfRtmtzWqZsJSpEypDisvnkymz1iqKZ97ok",
  "key29": "hTzDUFt8CBQKKp2dcnsdqzxJdvHW2PmRSsuFmG5nNxchjFcjVNVx7jJ6UPvZLMP8xWvCNWNp7EfuNenZQNjYxBy",
  "key30": "2q7rn3igefXkuRT4VCgDJ3j2ab6SQRBWXi2FNNSemArpk4EZk3f9bWstWVgkq6QxhRuFr2jdnBPPFMxCtz1ij9x2",
  "key31": "4NvZkuTRLt4cmQA1KWkXTa6RhJSR4CWyRXCAoSLTNv424VbJouNMWtkDV5wko3TanzyJmUX6x9aWu3oeh3my2SW8",
  "key32": "6rcbcmZjoxVZbh4kLTqAuHoihpWvW2XHDBTENKvkfmZEqCirLo8n3oLfEnN3ZcM266freiLhSij46rt6vv9Vhvn"
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
