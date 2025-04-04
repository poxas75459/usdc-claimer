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
    "5ipnEYtoNPEozSSrcf3WJN6JkVfFctGod6L6BmiD98k33cHtkZqYm95Rx3oofxggNdtVLt2N5GsQpQovm2c1a8qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UEArT3wpmqXZm6Cw5PcnQaRCrTwhbtbYs6aWvZWxdiK5ithyvG2NpBtC9wr4QNaFbi1RuXswDf4dfSWpSeuD6qp",
  "key1": "4zTR2kYVPW1ayjFgpvn6JPSSVfTHVAYgjPNjSpvd2Sep26uSJqxWaPp5hC2ZaMxaLLhMjNNsRCZaGmb8gyraoNex",
  "key2": "5SWzGg35gasRCj2cgG5xKaJtZtbo3yE17bqD2irmvMf2twtP1UeBijMXR1dZ7aCYeN8cdSG9bQ9CirzVxNdE62Qp",
  "key3": "5aQuWRBE7MHRxRjSCU1WReNxwGPWo5w7S92WwYatANYVQY9uJqtsHg6iPAsnJ2mFyK9LPPm29u8qC1yDf4LGQDRe",
  "key4": "d4yqMtHNYm9G5rmpN222jmicvXSWN4Nz78821AAVZ4XNbEXMMYRbGEbFAHhMbio14Sr9v4wAV7aFCR57ZF4ix4J",
  "key5": "5n2jrJmrGw9D62BNYzwF7yDeM9Y1nGcKRiP6FYiXLP4jnyUkECCXfNngwdEBgeDPGMiomy7hTFfDa7ZMPNd2ADq4",
  "key6": "2Jisv4cpcBXqrXdP4ApA7bGjiLQ6aLYpgxEVJ58L94re3BMrTQoSEr5h8nrtAARunVeUotc4tpdabW1JcRy6pdz6",
  "key7": "5MnwnVTwudr17NzA321NoyrqA4T4ui2atfBNfRiueKZUVzmGUfwxT9Ydeqsg311QErqs9mSi9cTDR2zJ7WEP84ia",
  "key8": "pVMf3hJCxCDcYky4kG2NP2Qf57mnHuPNJT2dTHsf9C7w3dV1nEoDvQCgkdRfj1vmrYMAHkgd8D8HqNv6N4oe1K7",
  "key9": "kizaNBAraMB4HZPpxzgECg7DWtgkoW2wmKx9Yt3Yc7AZC7Sc38hRxwjv4t4cyz4ekgsdeVaqMBfA8frhJqrKwwf",
  "key10": "ZhaQnNwey8bodFDFXVTjdvRk9rkwKfgaRYXLnuNZvf6Ex7fHK2DdcSGfwXXtg9QtsnJBURRRc58yb1JzC3Mp1Pq",
  "key11": "5QHjGjYxcHb1ZsYYvP15peXyxYanvmRuZixWoUDWkWJYYZbwJiDmDuUQCMppBb9DDUoLY9drdtsT7Lcn1VgihU4z",
  "key12": "56h8ZokJuyeR8GPZoMjyQKYQq7w4hU9QwVhd2Ng8FTdpXMpfczfZdBjurs7oGqbCwsz2BU8f1sqRTR1weYAth2aE",
  "key13": "4hEf73JM42BvsdNzLix9ifbRKXfNbBGR52TTHsndZbeR2by9kXz3swdViHzGtuGmLtFFCCaryH3iXh82imWV13g1",
  "key14": "4wPD85yYaVciZ8ZHQbnRgYhL2uimhj1RzLZUFo73sWtbQtjwN7X2CSywALdtZcneLCanN9Sm5fCZsVqa96xncXnG",
  "key15": "5BzTSBdGEQEuyNzJLfKMoqLULQrpcbHR2sdohaukLwFVyMKADh1mM8S8bPgFftR7Ckjdky3BpHF1RCMAS9ER4W3v",
  "key16": "3qMXrQFkHPFcxybfzbVEUsoxSjSXqBYtSzTRUWz6PRZFsUxZgxLNud6nq7qh3VsgrXduJNoTs4DRAYC72TT6nmHS",
  "key17": "P46mDqcwrSN3TbkYwboD1poYJ9UTEPXW5BPgVtVsdCBk7sg91PyhdNxvbnzPhg6eBfkP4G3wBNeF6LkxnZLpH43",
  "key18": "pi1EruJAeyT77cEFTEtWxK9PJdq5Q3jgoUnVSZ8fA1b3jJrUFqFwiDbV3PXP5C2N5jjUdHWVNTGvWoBiiBXK5Q9",
  "key19": "51kLg2AK8dGT5MHEZTPNDUCc7Wzm7LVWh2sGjMV6GY5MHQ5bPTYjJt4V8U34ycVoyvzYJyyKerH8csmrQyH1Cync",
  "key20": "WfhtdqQAUqLB4Dk9Mr7GnG7ngEh9mXLHVTfDsgfVCmsP5kqxD49PFsYHvBp3WqPX9WFejnSXiT11URgPmXdgjRs",
  "key21": "2QcaicYfAxzK5Tj97GWqKrHhRhdLrTD6nwnb6bPUdW6ZmuznSisxusjEF9Fva7Ht3WTqfUfXc8QddWkNtzy7ZyHw",
  "key22": "4KC8XpUw6vYaWmVPo7nd6QDLKEmkojS2xKT8wBEWHAkAmpr3pSNftUcTqV9HqufuDezQQgYXMv3MoKAKV99V5wan",
  "key23": "yf8JmXiEG1Dn84rBe5AqofJ8k4sFiNpvoSGXC3WuU3fcpMssVwk1A6BGbpHAjtLrXVLiVeFiQtEHJvsT282q1nF",
  "key24": "21EsjuXcNaur5ZSYjuk6hGjMuVDWBBWSHRzeokfgcSph9NjNugN8Gi6k6F1WENRmA4D7CH9bz5U3H34DytTSKat9"
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
