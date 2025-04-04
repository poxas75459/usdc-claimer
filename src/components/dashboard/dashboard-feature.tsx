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
    "2a5HNVP1Qaz6DTzEZFrDdrNTWU8V2jLTCpYti9XobEYAJneNN9Ww9cSFfPENEaX7nYQmvFZSWxYHJa18GredL9f3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JkW1RaC7AghE5jNLjGM3cYVTPj7SCaMqjnheqLnU1uhDVvxxKZW7xAXSWRcwWHp6dEQf8hy34HFySVUGkDW5o2",
  "key1": "3eDtMqk71MPkUzjpwTtxNFXJxJ5VZyRkEtNsVJV8QwfFvLk9uGikuGmNVHkGCTfwotGxrTkMrVa2YkfC9zAsaLbm",
  "key2": "3wmUbZBiUEbUQEFjaUYHA6L1PD827BYTLAv3LXhY7x6956kUgJvjfB9j24iMma59abgL2zsy51hbx2VrXcgjh6id",
  "key3": "4vMSEPCL4zLDVRa93Nuk4k6QADmmRQuoxcipPmdYrufj4pfkM8BksZj4NAan4EuXDSLfMtuRpNQXbojryB2VHtKf",
  "key4": "2MMVD3LxDiFYunUYrTCrJNgi7R91zGsncgNtfdiiNkFAsWtGJc6Gkv4cy11JvpBTu3ZPA4MLgvpWCvyUNrQbgJmB",
  "key5": "3h3jo57HgKicWtK1x4qurGuuYKeQdL6dD5V2EMmpHrxwb6jeEWubA5eZJEkkFShN1wMnfKduDwM58oo4GNY3Z6uv",
  "key6": "4scVnyiEt12yMqFUKdJJsBXR48cabmErnjiZyA9Bo9e41oxZ9ZWypGuKMJMfkQTkrsfXgXVtU1QLseUJ32rS1mQB",
  "key7": "22BiLxbFQuVrweRPSgaswUKc626LKj7AE4NfbzpbcBsCMoXpRmJ79GWU4NMtaf2WezobdtkqtXq3RHH7WzaBYZoe",
  "key8": "3WeLqgiTj6GjxXtDoXbUB6uFjZw8msJCr7xZJppNHZcYG8Nu5sixtz38qxbkMYK4nLgSxnhRe1q2cM1rLuYJsdUP",
  "key9": "36XBNpMg5akuU7JU6humTe5kDTVEbCsswJLiTNqVCxt7nXgcLcbAYWT4W9krpaN2PcyeFPqmpuFSMDAQDaQckoq9",
  "key10": "xfhvSwnyonaNMTGMTuVfDkDHJRAWUgkMB14amSxKKMfj1j7uJJAPWCTycJXFuxTH3dVyAk4T5vHpqbcke9snRVb",
  "key11": "4vtGtFzCcKrqGWGasywEvZ3nnxRyzHmmpvfMuc4uZsDBaAvLgwhrpvWdXauEgSd4LpWKgbAry2idrPtAQ1VfW8gX",
  "key12": "5B25CURgie3mAtirRLsLvWBt7jvBndgUcNwj7WWetyjBUFdy6dJM1GntBgf7Cu8TPayuS7Hy3YvbAd46pE3jFDdJ",
  "key13": "4v5dDmEVAvUYHqUPTm31zAAoPKdwZbScjsYNDq3tLgK9jrqibp8sHGL5GGaAMKnr1NJ9M8QpYoQUyYCAZZyNnLAf",
  "key14": "5WSvzQ33RKKV3zVRk6BfPztyHL7SJ79avLAq9fKBB6gy5Di3FdHxNogbmpHGzCAbrgo2CcZrjxzE6wMwF86pGVXB",
  "key15": "3ptP8rgvUHtwNducvW29r1QeKmgYShi5PnzLRWtPQnetLrKukNesqhqc5Dm33V54w3WHsNEYMSy4UHiN7vtxmTWM",
  "key16": "2aPBxzyK3ym2kBKtzwDZYSrvebXZZxmGNMRazma4Phh6cCFecVTgaXzvz8cry3n4ww8TrHwQnaH8oP3jR1TCdGCJ",
  "key17": "2vLwDpPR79iuqzdR3XTCax1ExsTCWvktfcdmpUT53QxFh3p2hEFVm2e2oxTXSTp7tv3Gqh71XTuoQkQJZbqsPwWJ",
  "key18": "2nQjjJ8DKzT4ESGGCDs9jTE3WkfYfK55QcEDBQqN7dc3dVnfZtmbr194VhPqz3EYC7JcsCUzwRYqCWSDLVuHgm3M",
  "key19": "2ucCUmciYFn9Gt6cfMCa75XTKviHcb42z1mf2xvXusTxZ6EBEtyWvbVYZiMcCD6bXyTM4s1kUTU1xz4KxtF2kGfQ",
  "key20": "2AHVkEC3GN4bYfpJeeBRfkKPYbrdGrEJXeqQ7mq7qYseg7GTWEYY9PXNX4rPBBuy4cKSD96sRqWxGqCdvnriDHbJ",
  "key21": "3Gz4SqyaATphKpuwzw2vNkDECgZkKkUEPXCneKHAqBYc1zCkgyPdvuZrdnqnyBqDsN3SNRqopb2wJJ36gxf6ToSt",
  "key22": "5f4J65ykHSG85Xdru5SULAsW99XqCoh4qdTWUF2uwLgwJKE3pKCumNgzVRDhA89QDBvE3quLSTsgEjWZ4EFCdHG2",
  "key23": "2npc2YKh5F8gBmrRV5KHEgHpug1L2U8gZkz6W19biYyGg1c15RHTEoHNYyBv9PrtyiikkN1M4APivr5fDrq79xZY",
  "key24": "2bXugqsp3vfMRJX454ogzZkLM1Wy4hyN2gWzRCNEmGxnQ4s1uDA3ngJ67Ys2ufgAiX8qHaysfqJJDWcSrEpotjiB"
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
