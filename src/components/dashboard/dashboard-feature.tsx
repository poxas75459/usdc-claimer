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
    "3TLzHxtcJqCLoefMPYE8recpSRqsgiMu4uoxpb87bbcH29ogz2sdUNJEbFG7q3XVHtw1tafaPErwsCLZuUDQSKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXEtqi4Kj5rSQxX5h2HG2vpno7qvonfy3LfpSy36xekkpuCtbK7r9anyjjUqsgA4TvXiJ3XtPQ9iajjfrQQiLEG",
  "key1": "5DN6ziLcfvsiQFtch8gBddsVYKF2ivobKXARw3zsyhiUDGdF8vKsBCRG9s4po5HTWsKB1gmTUdozFF7BARdf4GhW",
  "key2": "aVWWnW7s8xbeTvpLs7p6vT3Mx3R9tyaafm1JrknwzU1WqqyoL34j1wo2UqXuCCaEjUHBZi6P21TJN5TohXqczfx",
  "key3": "5BfA9a663U8cevac2VPg5wExEhNMXB9xPggVRK4AtLJgZ2zTZMuxFERqVyuG7f8xrZ3Wv8CxYNsd5RXHVC8wV2F8",
  "key4": "P49JCRu9P9xTjgV73UKQyPuRKWDZGZpVVodsG1WupokUnipdvwcpkaq8DhqFvkXHMd1fiJbHToeLxjh4TmHsNYP",
  "key5": "5fzJwWznZsPqkRxxyojKWDYroCWNdRPy3kpQB9fdKREz2TApw5Mgho4erekCsm9QpfDhBq2dhY55vipVaGPccKR8",
  "key6": "64oD73FbD7vBQaWaKGCiHAxurGk4RGEtqQCMq7Sq2XUJiP7ZmygY94HEbLAWURqb2uFUyuqV5FQG9SfnAQgYttVF",
  "key7": "SmJ7NjqaRdt1AvYaQee4Z3WkRpp7Z6U4v19aUo3MvqzECS1uChhyz8eKzpZyAFMQs6X1ouznRXUq43fqW49ZATW",
  "key8": "3xmHgz7Efj6fs2gxXbsgr7RJLzgD4mVKep8CTBjwWmCYzWGTDaQze4jnTcGdHbxQsKPbCFo9A15BeGPGqbLmmnBz",
  "key9": "49Kfgm7Uv79USBt49fprJy7TjaoEchQVeK2PXMpumPucZxGJeoYYKUe72h8W8eFMy58sQrp9evckbBR14fJjTbMY",
  "key10": "5G3ga1FLBW4w69GkXhGYkh1gLQifuY3tZe8GQmCQbsCM92XQWC2rXcjFmZaujrg93XFCymexg6dDARcdxJBZc44V",
  "key11": "2r1Xo9vDJeawCfiWAjK1VK4mM87nHtm3RbVcYafbKv8ktNaMgaj3DLAwNMcndbHpjrZ9VRoS6PJYfkjzumDiNGkn",
  "key12": "2RUqhcsFcrc1bodDN2CevRDQGPXdhzGzfXAmQb7xB6AKe2oUjNKovdkXb8LJ8HTWTYtdZCvwyc9gzCtzPhc1eo8b",
  "key13": "dm8ZEV4KLuR6Cy33Qi3mVWLDCcg7mBVtohtWMU8wvJ6Wjiawo3E7Rcf7Y3RuoEw5KfUNQnDcc9hiVEkaY6czAT4",
  "key14": "su9hAgPMPQktLubGcWfNbzzPHAVsVmD2XmnDdjvTW8a5JYot2WHtEHdrQ4zpUZb452bj6Vdsf71ae437v1nG5fZ",
  "key15": "4GBy3ztWiNVyTRLkA3Jb5jhVb3H386TA7dkKqEPusQ5NMZiNaQBcebvjDvDE9Bo5bRJHWquvvQDLnRsuhZ35pLGb",
  "key16": "5GjJRuJ4xzPgNtpVWVywrs5BQJqaSZgdHfVYL4pqiRymGFrRLZ8D5ku2FopikTDmoata8JKymQsqg98QraZvuUJN",
  "key17": "5SKJ42tpqaisNskYqvfT8kQXu24fH8yzWg5tN63Q5H6j3op7pRTgVgNq7uwPDcBmLQxMrQ45hjrhYAAhoLSYoR8Q",
  "key18": "2JH5vd8K1RYZZisNPeL7j5WjZwWDSa91BWG7Z3ySLqNq3o7QbztsCMizThkhk6AtXL56kAJkKYEaktHY4sxy1gtd",
  "key19": "5efYjNbPmGVGnHMTWusDR98f2zg36CADaMUrhjkfH1GP2i3KZW8E5cv2GKczEoM2wQhHsy92Y73PB8qaRSQEAjid",
  "key20": "5EmQW6cGVdnRDXf3YtMby7CWiyvdHacV26nN19qjBj7FL8eXMVDv8LDJypumSVs4jDG2oDrxe4BRZ79fUwt4HWwV",
  "key21": "qSov8nVwc8edQemwge8iPh13cTDhRhjF9y9BaT5XwJxEe5VBMbRZaf3RDVLWQdGvrgX8zgT59WxQv9GtNSpDxw6",
  "key22": "5mnNcpZxhLD5aw8U2feYvcmdF1ZzWpZit2TKjxcQbVufWztViyG8JdvcvUM1Yb2yFLM7gKkTUjfaJi979452cLD4",
  "key23": "5xfQp5Wg4KHY1KfrX85ecpRaPUfBsqGnGu3LvRY2oGCNhsieVpA9Nb5fd3BD8QSemuvJq94PkiJMDwmVVXyqq8hJ",
  "key24": "5mv4f76CtL7DJAa1XsuXVWZ7q9k29rsm1NbvVZ5SjAZYamRvKAecsVpbNjhNr1iJQBzx7qbjwCgo6CpMDofEoNHY",
  "key25": "4ozo4Nroyv4uTFrBsRrMJfeW2qkrgxNg56zH6TmVoJHZbByczWBHSUiecVXntqu2B2ZKx5JQMHqD3cNLVxdxsyak",
  "key26": "onUkHyJYt4J8mCzVeZCsMVPGjdPaW7E6u4enZrKZ9MVUqC8t71D7jRcLY6EBYPYPna3eNqhtgXZTUW35rYtWMhd",
  "key27": "XdymHpchrMZqKoHR6j1BGZAVtmKzC6wYQXUDsDqMZctbmU6ykVK8BfHmD94r5bZJXkZhsDavyX4RMeCMwzqFxNm",
  "key28": "2To4GtEdixJCeiVi6HZCZcVfsdAbyGMnxxNesBbkvu49MCJf2AdjPoW3xhKJCfNCRshqVy42rR1yWbYaPZx2w5U9",
  "key29": "3ACWimoUKQ6Fth5GUw3w1N4kM2Y3KoogF9Gu3JHZhXCYoKkGCi7Eab9r3DqLmK7mdt8uipYGVsEz1cLEqApGdwot",
  "key30": "456B8x1Y7SqhSw6YEs2smA5L8QqxA83XVY7eNx6XVKi7vC89TLw3EsEaZxSG1MzVVyFng1mEuyFQE9aGpX1PCA1f",
  "key31": "2FMFsrMCqemmnv4xyKXFtRBxYAS9QXXpWf4Wq3yRZYcZC6AYVzraWu8bkmT5Hu8tx1qT1CEv8qC6ACMAFh74shW4",
  "key32": "4SVxmjSn91sujfj7j3nuadgMePHJNvsx84GMb4D4AHpP5znuk4FuCLF7vqsUSyAoKBNpE4CSphG8rKbPnyiofmKK",
  "key33": "32irxqAvJZgVBidTiLZKNDSx5z7dhrdtJNvm7e1gkp71GQpESgoQzidmfak69EJmDGLq435czDXGnTLYusXzP87q",
  "key34": "2uCpmwcri2ZjHrG4oNXdZuupTADvohWma8swdHwBdJYX585DmbHBtV2iewNVYyQ2GYXSr9FWe48RtVFPNZG1K8vs",
  "key35": "3PEtPgpeX6WULqXebK2rutc6syCGwTAUpxo9eS3vgMtKhbwFpfQViaKL49zMCMZ2y1yKQL34q1SBXv5APBnyQtos",
  "key36": "2WY8ZbMqhaw6Mwhm4Z1LNFxFeqDXjncmmSRQ6F79WmKvxwf4441RZqozm7qqixYiXUieUxbkrHs7nCZNj3o6uvx7",
  "key37": "26KZ528qLrTYURWyLZDXabfp2BNfPE2uXvyFiNX5tTUdSvhv7cBSBxjMW8BJU1jNrmAtvCM9puPqetJTWzAhrKVS"
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
