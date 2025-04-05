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
    "3vdwYe9GFta3KPuaztemo827u6VkcW5rNacwWe9Y1CnMGBKKTHQcsVzJMPfTYvnBnGTTUDJH5pZiyGSxN4LPvyAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tN913X5XyxAV85neC7g7Nn9xLZLSSSujCaiifNd9W27tEBSGLwX7WeK2csYjdnEgPVRo76VoVaoqeA6RSDyq4jQ",
  "key1": "VY9cxvCt579ybyY8ZHGyVyNRe7wet3YoDqPX3uSQBSAFwg6TYGatuVisyaS9KvoSi93SBrhzR1VaecGSzjxYH3j",
  "key2": "vPFqydwN6qG1ouGUWW9dkbDvP8LhRaoqWFvy8wuFQemQJrJM4ZoezXAqXD8s4uMiP5VK1WzeXHAaakoToznmE4Q",
  "key3": "3vFjjASgMw7JwehEtRmaA6TPxue4E2ZYU8v2BPXUYYdFrdq6afC4G9jikD7MfjuSYoWJCpNDXD9UG6zsUgfsR27M",
  "key4": "3aAGWX5aXuvThqdG7RUJ6tTuHC1zysQRgptb3uZxh5VUcFtqAMhw8HcPKCqLpe3A1xC4CTFHY6FABxdmXSJcV2ux",
  "key5": "4u1bAFU2vzaDcYHJh1VPMb4L8yv1VLYT3N2CdbyQSFP3BvMXSvsc2NmmJQvw7aAriiRUne2LHNLnpz3GgfGA5S2p",
  "key6": "3VnfmpYn3KTjE1jXYyPH1y8wDtoRwoDeMTMMGpytdZMjvsxzYB5rsizQFQdwJdUG92NmWJDhCvbQgW1ZcZsAWkjJ",
  "key7": "2UAUAjxLQixHZmftdCRXQHZu4hFEDGu5b3oao4mymbaBKMzRp77Cgj3yDf6zBNUtR8ARvGF3RwVpjnCLPiuvZE3v",
  "key8": "Q53MMuF3eDJKuWTLgQSs8QJUm2vFDLSpC8tj2zFkifzjtsepw97b8pSdP6fEPJ8iAg85xU7KZ8smtwUVp6ffX3n",
  "key9": "UewtVJbdeNG7HxEEjc6CsswkKVCu6q58rHzG2Xc6NzPhHozev2RLhefuQ5t21j733AVMF1ug85JkXUJAqbA321p",
  "key10": "q5Q9jvmbN46T4zj9aLPG2Pex5MUHbzziCp6hTVmemgkHygPmxqQNUPbQoTCauSsZUPwMbapjcNin5beAdqjKGLv",
  "key11": "5CUzNEAC7W2WncAGhdXmWosZ48LZHX6vB2yVwvkhxeumvHo4y6pp4kZSg1j6EPAMw6ZDbMptTtN5ria7jJG9cVjy",
  "key12": "3bWbqp4JsfsE1M3dFsk4yBtwJqbQq9TARZFSGiDZEC8mzyQWfiZhmxXV7nj2p3PzpUzM7jDtiddtTSxDzfEYhMzF",
  "key13": "5S5hKRJnvZT1tr5wKTaSQdyuZtAbwqH437hSYwCYoSjc2MdMzf3NnhfNWRDaaZx95GcSwCNWfEJqoXesBFLswxYw",
  "key14": "3D16itRxnxEFd5vPYMQuhnX1ea1qER9UucmcXmqze35qLyooeQJJFjXBZi78SP2oYLXPmDqd9a6nsWWMjC8zFj3W",
  "key15": "5C4bFJQN1vgCxBzXeFv83KZzt118oVEjcbmUZvVLKF5K9s89VZwdFJcjA8W98j3pSCAgsoBCKKsyAhDgKAskS9bC",
  "key16": "2CGmmdyakd12besHc5rqZ3MEb6vADcQcAS6npKyQ6wTw2F6fTEAJopJ98wxrTdvKFLwSvfhbdcNufi5RNK3eAyHo",
  "key17": "2ZQoC5Qj9Npcjw8S5uVNkkj8Yo7sPEXWRrKcYqm938sGNt5QKadBKn1p9fucdLMgpa3qFifGtz6tXbfP4xGePBU2",
  "key18": "5eCV85x8vbhZ3Xt8jcEVAYjaVHjwuBfxgtYXe8tHz7WqeRHRuhfrBmXK9JCRB452tbqHecWaUzoYgh3XMBVBs1eL",
  "key19": "MhBHHH74qc796ZHpMYsTRPdDH3mzz5pase4kYoNV2HZLkJm7baT4fmTsgm8UeTsJg82ZSfMd8vmgcwLmog3fmUv",
  "key20": "572ubsP1vdC21yCh8xJ33zFWjkHvTrm8kBmwb58wBvd21znQTbcnmvqSKvbW49EFszptn8Loc1XUHJPP6Y8uhyps",
  "key21": "QdRWKaYdQ3q8rp8XbgmBsVxA3d2uBJHmwHbBCoM35yY8ELELp829BdVWaXrEm7Pyd92Z5ECqMCVrNkpnmS24cjd",
  "key22": "wwSn1MrnXKoMSadFQXeSXaQFjFdbPaD2nxxdc1YXpTjhgWdDaiz4SCn7V2y1DqkTHPKTac1PnCBs1D2B1scxqxQ",
  "key23": "238SDH6BUUrJmPmqG9M4Ex8FZ2UMfj4SsVghMwpqrcmYiJTxXmovY5Xye2yJLgCKfEyBPYzh2rvKwhy13KoE2gNy",
  "key24": "2MaabdC87ghvqe1B6GkmxdcUPDYxtwWW9XmuP2hACg33JMf7nz946ka8g8XZucVpvDskW96djAk1VSYz7Djpamjg",
  "key25": "xVA4i8KghrSyqMzYts5ujftUfJouqx4XGsjGiosCDUN1QZndcB576UnWYunnx8y15P3CbvSaEXnGmYY5hTPf4tK",
  "key26": "2EAamcZcaV19PzDNrtfaGB5TZG2qYnzeyYBFidobVecWbrJXx2H3CeW9FuKhUgVYcVgXFxNj6cbwPycXvVf9DVaq",
  "key27": "YYAS8fTJcguccNkiQRgipD87XzpKMJ1HQriAMpvYujbzdrMihfDH8zLraMnZKhTR8t4KELadxfNiYoQck9j4FHs",
  "key28": "5L24efzSHqnQ3mv466PC4FghQzopjshrM5GykXLNwsQUixkCT6fGzAGYYUBxCZF77j2LCownPLKhXG9rEEnqRewV",
  "key29": "2m6SLGEEtsXR1g1mEVrmX9KUJzGSjBXPUV3bkmBTXVT9mNtz91EEnDWG15Lu7Vi7S3YbeJLfokp2hUJqAALDHGUs",
  "key30": "3CrGYRJK5FvuMmTKv3JHAEtq7oaqa8x335S9fdmkyLRqoXJAXUrYMSNaRQ3oNYjPMDfeBA4n4RffxDgJ9uKFQNNm",
  "key31": "4aseMDJWgzGXcUVicdRcxXuahZyxiMPuk9yvFJjRw8RUavgGMiEwgFxzFvdFVSbJgE6HbGzCrHuMVq6oX8QE7ieQ",
  "key32": "2jVLrh4KiERqx7nmxnLj2GdkyJTwcqkjdDTM9A8SpnFf2jNys7F8Y6SqkGAMekgmb2hfdG1YEg7Prk6u62Vc26T9",
  "key33": "2ifrYFJNgFzQmxqxCXxUGLuZ4xX1WtmUTsGjRxYoyohdwSN88TnyNpeS1N3Nq9Re4yJ5eC2t1uYNqS5HodD8oTvB",
  "key34": "5dnW3PBQoKRrr7GZybe75LmhaWTARE3eHPo2ghgnJBB4DG2VxYCNoEpuSZFj3kBR7hBkJUEpdfjbDY4M3RUA1EgU",
  "key35": "5o6WtmvFhg7SndqctSUiBJrQXTwmAmWjHfhK7bk5NpAVdbcWctMaYYpyUQbxgeVrotJnLhzCVxqp8PNr4TMvY6hE"
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
