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
    "4cxTX2vLZyvbemWt7ECS83gX23ysmpvFvkmL56pkQespDzfJS7uez86QnyeS1YK2SHmELUggqso69hkka6nmkjEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jr3Zu8MHyW1DyoiprX7Dw24UzEChropv6Nn6xa7cSsf4c6pNiQGukqtodgzypVkNHywmQqdhebJPHg1S3CD5FEo",
  "key1": "5ttrc2a5YJuh8Vh1zwo3MBAw1tPpN88Vnhs8GLUvhsRrgmLJKNXUYRPTzeHBWq1z992SRuhDSWLgtpWQ1NS1oiQE",
  "key2": "2n37McNa3fLYqAwUgfXVmZU9YqkT6NL8nLEzoUvXpLi5ZdSsuJRi9MhoHStZboz2PYEm3xWkCVsvWTmGbwYesmC4",
  "key3": "381mfpzRm1oK4pT4rQDPMMTrRkHKb21VvvJ8NpMvQ877FqYUq2kjV5BppAFyTT2UWaaCY6i9J8jL8NtmbtXK6qS",
  "key4": "2DANzQXYXy1xnnXsyBwTLDYmw7ovmgGnei8zaWHkvsAuhrT8y1FLXtFzNuLs86sdb6vFy4NQdk247jARfkpYBJK7",
  "key5": "8ZQGYmhv5CMXt2cBjjYdEC9RNPjep4f1mEeYrZ1zF15jmYU3d6u8FYVeDaw76NntaFgejPekkC5jPgJ4fwp5hpj",
  "key6": "2bDmWWTkiBKuRt8UN7L91awyFnra2aEE775wmbkJ2FHfGqBrLtsoS2JP8d6vKUXJzKqR9o23Csao3KTyqLLqfq8G",
  "key7": "3U2W3JcwXrA2iAwBxfExApviNUqWZexeY4Cmj1QuT3TFJg3pPDcj1U18YL9bBJW9CdEpuQ1cKcA3qgkcaLH1W8Fn",
  "key8": "5v2BeaNA6FVLNY9QKYndUCAqshu1zv9cMaWL1UjE1A6repq3Tic5juPVL3Rat6x6MeGXFJU515hNjVhK8hBRxWtw",
  "key9": "4K1GG5rCVE1fr4kGFHxGaxu192RPFt3RrQLNQGphs8RGKB6NwXEq9ZBGLKpjKXbhcjwY4B4tAT4AFrPio5Q2yygf",
  "key10": "4bYF2ppBTEVyfHgkJcreQKRF6JWAQ7oH9JGojFykgyi2SPp6VZtsT7ifinKJAQ5EL1q2XbYHmrNRah9fpW97ZZiE",
  "key11": "5A2dyfyhSDm6AWheWoBswr6XVcSahxq35g1GE2gKXe9cHb8EktFexZF8nPv2zv8TX2wdP4H4fn9CveVa57d2pTCY",
  "key12": "3ia8ogHPuw1Y3ozBpcKoq3JM3eFizk6rQjQFcneUtiHAxQyNJH5Po1YE51A7d1Z8W5z2VvfdQid4wXMs7bBSmRcv",
  "key13": "feH7oeEJ76nHVQscCcYPVXGDy2WU5PNJbfESyMZS37xGqjsndXWFZnD1x2jwnp8kSfwZ5BmUL9NVcXQWsXqoEPz",
  "key14": "2xvMp3jaA12CduL1rqx9rXSh3dgUp6RESinK5jraza9dBTnVC4qHWSksCv7xwFSMch3pXeQSKzQKKRUEtmkebSyt",
  "key15": "23StNT9YAdgE4jbN6agTM1V9ZjvqnzRHC4kU74qyz656VTYEMfPqNPrcyKBumyZ7rCaKcWMpEfe8gEXKCGhVoZU5",
  "key16": "TcSp1u8bHEaerVo1iYsCdEmrcdSy6Vs8n3bNYTHCUkiiM1gJThqk1nwgd3jgyEcxz1BXFPSAR4ZYUwg1wtmtSCJ",
  "key17": "57vKr1LjvLFTfDUxv2x4p38g4wpJEQFfsmmDaFnKrj2FZqzhB4gM4PJGfVqMCfqQasiVa4ATjtiBqnuydbhXbguz",
  "key18": "41D3LPDiq3LzhqpuCX9PmHWTLBEpYEz1ac4HvBSvcUJSg1sAeiFWKsFVaW6epYMJeowvBMvLHdLFCAWd24Xph9WT",
  "key19": "4BzGnDJVUzaeEtUDhGcB3wykFzV3hbzT2AVe2LJTKB5wqkSorF2C1bR4u8kg4mphGgHHPpEovmybqqit5ejDZKxq",
  "key20": "f4Knpd8zz7U9wJuPVCR1gMLZ7W9joyuARUbNKvwZh3vxXHEZNovy5SiLNYmk6VmkSSLgfAueM7idmnLPBK5kFZ1",
  "key21": "2wS2Hq2ens3bp91ooKtoVyr3BM3DzBiAgx7T4p33p3eyRL8vsboBiEazSgGpP4AqzyNT2MoSRvM7rwYBh9a6skjn",
  "key22": "32bR9DZohcf2hMmEjxLW86QhFmm7gmJ6qwsYVUnZ6ZEypWPceFDMzq11hsnZUypsACq5sawX2xiVj4i1jSjgJMjf",
  "key23": "5QmZQYJKPe1ZjfiCxB7kKxkKhngjpV6ZdyerQvd4qeMDmVhtUaHcKQRpZLq22Y5HWsAMGrygLV4rn75bo6P69UrP",
  "key24": "p7ERMWL6n9NXRU4WPnfLxVhBR52z6MBLabCbwWWSXqj2oLEKH1fWJBbyz7t2Sxce3vNYY4FF2iDJjW81b9mMXEK",
  "key25": "saeymzWREihvFqdpntGK3h5r3BqHMzHuDNvboNV2RM43tHsMshKxyW8GrESZBJYPsChsnFLC4odxXjhkRK9Guc6",
  "key26": "2MyRkwGfuHBybazp5RMqBMbQvUmwmPVddFpNAzKTkmDpkTNwxta9LDVNqjq31rSSJCGepjL5rAQbHHYBaNJQHEzk"
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
