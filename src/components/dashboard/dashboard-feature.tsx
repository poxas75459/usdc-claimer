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
    "3AKadeYqHXEDBdJtDgxDCidVPbx4sy2jua5F5pN5hEyzHrQ7oNLDZbKFKS3Y7hfjMWPX8RQiGP99287S67rvfwtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JdjX5hCcLRKwJG4wwaAZULa4jyWKE1VdXJn2VytPWwj6J7BhWLMoAE6U4vJPmkZq8zXUtLiTQWE68XLkYFUJJvP",
  "key1": "51Wff3XVVbu9vN1sHuyHwUMD6xFxNNTEEpyUoejXLe7Fzsnt7pMoUFHN1NdqvXGNw9y9kzMYaEs5yg6N1Ks7sm4g",
  "key2": "5UWKMSnRTjrnbVArVASrPLjf3f9c3oWzx8FwMEn2NkjafQHnBmna366Y91xsYk1TuLCxXG6Ahvkp6CWkrtVA67oM",
  "key3": "4qDFn791rPMj1DDWKyPe87kegaxwXVx1a1GRFxPsBw8UEHTkD9QQsxuAsPX5TnpBmvmv7nMHtbF7C5PRNdunoBBP",
  "key4": "8zLL3u1YXgFNXJ4PBNPsu2p3tPXM7SyDBkx1MyoNDPVc9YitqroneB6YZzvaDWhyJzmwBdk9TU3iUEyT8m6W9vD",
  "key5": "5c5nEsHjb4VBa1bdDbA6uMkQ6nWPBmDPYPAt3hzuVr2gBZTfG4fFS3Kax8i5uDicusLnohYxd7H4b6c8LLGm731W",
  "key6": "59RedQPffXc1eb84GoP572MXr4YzT9orY4stGuyKv88zQkvxWk7DZBkvP85FL2JaQdVd8u8wBtEVRM3GRzgkSGfP",
  "key7": "57nA8B6E83q85N8iYamXNFrSd5GrpoBPhD2cy262Y2Aae4zNpXZRdj9knHxUEHkrQFCuCeu7TN1fwhoTHtD8bgG8",
  "key8": "nVMtC3bjnnbJnixZjkfsgHzMtftpvyZpDVKCkH1TJNr52o3CwCppcztzcNnLQqtZjjqJDRoFS4L4zoc87JLoZGM",
  "key9": "4GWxpH17s63MEViNXM9yzgVTKddpw8egmUq7FrPyKSPsGjzrYEMiKZ5BjBwwwW2DU4QRbaiskfWPS6jwFhapq4Le",
  "key10": "5Fjx6GTLEHfjmnR4uEZdNqJ5471ZUche14wjtJUy4pz9ygx3YGNn3TXeUXk3J6DzmmmmsqZwqEFh1BerDFjBoRjA",
  "key11": "2XDSBNiv9vrsU7DZfK6y8sBZaqPTxoPoVqfj6mxXFFutUBwf7ugqXXajX87dJPedNbntyKyVGAdpkCfU78Ph2E9",
  "key12": "4MmZKVvjHYQcq5WQDHyqBAaKjLNsst3ZBfgQbxh96L57rEG4ebJXvHLqoZG4QFCwwmbxjc31jp4VBQb8ghS3W6aV",
  "key13": "5H8qqX4AwjVzeWb7aYg5mfxEnshUooYjoboLTjw8cDUWFcNpwSjYy5NZX1NG3Gmo3qwSnvTRaxY5cZ9XLHVBy5vg",
  "key14": "4KGKphySAMWcZ3hgTRBRZ8TC2n6hTVXDchmqMszD17vvAHNdQFpxBdJrMxpbYBMSHnaQXQLFWL46Gd4tz8XdRUFY",
  "key15": "3iVnpwZLpKWPH9Nz832gEJwY7EZdBEkgyZCFVP83kZwpDXWEmTNUM2i7eFnSFQTFXh5Qhuvgy8pNSAXhGabe7dnV",
  "key16": "2S3WujgpH7jFdiGzQA9kBo7Ehe9kALrGmz8iLQsNQuxLGV6AvuSo3FKfcf7rb95WCZ6c9b8M8Xf2FxipXu8K8mTW",
  "key17": "2n5r59iUgKovRf8UoKissam3M2JPNC2q7uEtNtQNYwZhjai2t9Do5Vk8LpJocK52BGXFTMmgkQxWAMqahdCsjzdt",
  "key18": "3a2Nqby5uJwJq9iP8kWnNamsrLWeFdXpkNpfX2NeD6rXGjVwc8mMvBSdYSetgFTzzANgcSb1xLAZXkqZ4TshnMKL",
  "key19": "z7Jf5inb5vBzf6fucFSZhT8vyv12mBtqAbVzNUCyxhd89MuBNwvvQ6PqH58vC6UEfNqWBB4QaVvPgH7hSkJxCev",
  "key20": "46vA9hNEYN6E7nSATJsDYh57dDpLjJCBp3U5VqMbEVNa6HHnzGLuXrVKfWvDpcDVuwVougj3uvc6YCAHJbhSMvtN",
  "key21": "267Kxt17M9j2Fuctny2GXxyARLrKBm75pVJQLgUCcq91knUbDMzddNp2mwEbLub1sCPczewfbU6WSJ4c3mV8Yxw9",
  "key22": "53B6mqwpWGkv9HYKP7RYAN6nTsNnQAqoE3LQieQpgzZzMEsyxHnE7cEiL8a662uMuWwhPkSCZDjCWrYTcvjUzK9z",
  "key23": "3aU9NjxM8Yk2G2ZE4dZVgEFsk6wQmd4YWBCLuaVYr8xQX5BhxBThksNduTkywrjUnXbuFKt2gRtb8tAX5MRd7ARu",
  "key24": "2Cw56jCk7QwPpb4uLCN2XqA86BaHz7o2rFPJ6WnhTr6VmB5tFuJgdRQfmaNMrpTf3RjKpbxsbLpJ3TbKigMNXxU9",
  "key25": "2SLWkNMmWHgnhvRmstTigviUcU5QQFqABkckUb2V4mwMCrJe6XVSYpxfA4xboETyjKjAWqUYVrQPBEVL75sKwRfc",
  "key26": "2Qr2ziVx9LKEshYK8GLgwsFLBrUG8zkT2n4daX4wwuJRXTMe68kA5LnQcg11A9JeHZkiAT1kJQhbX8P6caZXcjWW",
  "key27": "62XxDXNAZyp2nVFuNq5ae5qgY4Kr1W4vq2mJR7CDzRzRbEpBcXY28zakm7gFXe4kJ4zwyzAMH8U38Wu8wCFgf8mV"
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
