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
    "2iWNd97DFJ1GAtLQXo2vJ8Pfjo15UoCTnYFhAijZz8JLXFsUncYnY51kzfN4cdcQpp6PB1HovKqYtMKisdZKxmJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEFJCPNLjk8eda1iNUUZCUbuVcbkCtUG2ysQeaUcQ1JVoRmZxvbMWsbkR3qz7Z9VUuP4uvhJGLwbyJyKYWh3JCq",
  "key1": "3MbmUZVYbyPGFxUdLCoVPes6HgqEh62JaJQZekW8EKx6f1ddVjW6skvDyYNFSvqo1EN25511m5oqVbDo4MKHU7wW",
  "key2": "3uf5F4onWL17Dcpu9v55HckZBoLGfh2BbbTeAXnvqMJ4LxfrmXc9Q7NEmx7hi2cvrZ9gi7C28rR4nFUeQexoVJoV",
  "key3": "2t1B4V7fW7TMT2ED9oj1VMYwifqfRBEhBkv58ZSBg3n3jTySMGKpYtRjNEcAtjRidzK2MvHEbDPBu399T4rYBasL",
  "key4": "2dq7YENJxXWnVRv8KGEhA5gMUAsCZHxwxmG4wHewBymTB4hGrQXxkFMP9nCsX65SfoFof9mXe4PGPKg9vzM2ty91",
  "key5": "4349jn78ukwkBbDhh7JKMBAjbCUsHp68Yv1gp4i1Ao7VLV9zXkPYwfsLBgVVP4WycQBqzxWtCfxVKqgSLogPYcjR",
  "key6": "tGh9G24zPWc9ohfacqt3a72WBdCnVn7yLE3GEPQP7dfELGfAF1mwjFCUxcPhMojhfh2zN1gempnbCanBdGG58yD",
  "key7": "67bqmcaqcrxCLLPDMukLmJJTkagFSvm4bfwgyGXTJXR8MZPs8zFGwBpAfTDCwCszFRqfMEFi6gfKHGCRQGSZgisv",
  "key8": "5j4fqFBkehiaG1u3ZGvtwHF5Kf8pSRubZyuYPm6vgpucNDP6ZqzqAcWeBnK1XN2deiMegPpxL9ELHvLcUzw24pXD",
  "key9": "5gUiVodbvWRG8LMQNkM3UUFj3LW5xiRpHwib7hfqMps1kVEfGhwCL6bkr9Q11m36XyFsx1HYc5ncGWfPHQkhK4en",
  "key10": "2CphRtnkiCprFwo1juCRZX73PacU671FkrV6tFAYtCtgLU88wcBbVMTpbf1fJPBjCBpzWTgWUSwCe9VbBuRGM3EL",
  "key11": "29GGyRisXXmmNieKN8MtbG6YKFC3XEe8JZZbQoFf6sPLexYvUWE4x7GCRqsiz8pzctDhEeg1viDTAu3U2KendfUt",
  "key12": "2i6F4DhuakwesZQBqrMcVT4knd2mqKbwUPL3p5nMbRyF9femfSeKJhVY4MqWtxszDXps6P38WaWUvGi2Lq84TcMV",
  "key13": "XQa6rL9rFKpDjZVM6QsQzByCNAwLM9GnhN5QX2YBFGoGpGiNf77iGdCstzuNbVxE2FBzfU8eMkgtcvSnYhYyT2n",
  "key14": "5Vfp5JvA3NwsYVHjMzZPBi4J6TGSFt5w9GowfJVH2aoNFr2AvKuSBHZm6hFqBd1cCRxbbpZ93FRHdyzGaEBY8pX3",
  "key15": "RhySbptn94xP5FLKFc8GzTdEjPuy6a2CqXra8on7x5DYcHTKKLWt724eqzGFctT5LdLZHhc3QPqRiVscvnM8XNC",
  "key16": "4X7Ewx1GKPNdQNRKRsm3GqrFzepgGYXE96sBxkxj7dfS47V4GWtniCxSFjPDT9QbCbnWd8y1Dq3pMjz2hAQks5Zw",
  "key17": "4upKxWnkF6HvdA3RoeyrJkyRpquDD59oMC5rxMkDSRyiRDu7aXQAFb6QkTmoei3RWHJD3CMUSz3McZEYY8WhwCsy",
  "key18": "4KKKZX6fC5Nd4ZrBFv9f2mGFYNQBfEsLYXbjTBv5b1ESKfBqZreUHAMjor2X1wnBDf485aP9g8Fb8bHgo4Z9HaTV",
  "key19": "2TQKjxbMAFm8idwe3WhfYqq9D8Z9HjDVKXoB8wj1wKifnBw1XZcCg49BVxgnqWm3pxDHvbQx5v6YgQZRWGpuMu1x",
  "key20": "5bYdhVLGnrq8dkEF1WbsFReauiJiW5WbrvaEBGa72GoZtXvVoNvajWg53ssbk1qiU4QuvY6Th2kQQViTszSU1qkR",
  "key21": "4mtfgFLX7nBY8K4jZoAZHBBtucR5Hu5trdMfAjGqeMnEBBExFN81rm8TTLoKyArbihn83rQPdejkXaRc3MJjbGXY",
  "key22": "4xVWw9AGrSUNFiDpT18mEPfDyHP6h75JhVvYCrEz1rKG2wP17UiLDtwFKvpkJwQX51eb1oE6aQtaWXMtreJkSXhn",
  "key23": "41rjLd6JuyB8iBtAdDQ3fVFtkHMUBTSnpBr18pitL4qcu3QNp5Yam83qPxVJ8EvDg6kovhzL9hDE5LFdha9zt1Lr",
  "key24": "3127V84ZMHQyD72L55RT8SBk2gwV9qU6S6SHjKPPNxNVenHscJDqmn8rZVRWH8eE9D6uu9mVRqmWHL5JPuUhjUTz",
  "key25": "66eeunKGTGqvfnRhz3c2qpGjNuQgcksqikcEJAW8oJjCJWCYENXZ5i8GBdtRqG5Fm5uB13sXdeM6SkGRBm7irWEZ",
  "key26": "2SHxGVEYyeVoDmF81UD6VFFfuhDZypsJbPobGG47wjQ6m752tedARfVkjXaR7XnCyr68EtdFVefiWXAn7mJj7cHW",
  "key27": "2N9dQsXzVfVByFV7pycj3netge5LQGackxMmmT7hWrniob7wUyt48z1cMBiCFGNvb1jJh4mmWPH5enufkX12upZT",
  "key28": "bApvrpSgco9ghuDxeoMFJAVc53Nmu3AkpAw6cw2rvxTfdkKs4eisqtox4TDBTdWt5RHrKLL5GhbSTojKrxxzXd7",
  "key29": "61jqmYMgJsp8tifDDFWPG8hC9QqbBJMsknLPctzu7J3aR66sBsLJS36a3en7crTeQJuXRL8PcywNj7o5bmzzQdWm",
  "key30": "4Xbt4xxNNC46ecWGiS7MMdbdcaK7MjnixQxc9896JGHqmKXnCFjSQpBCFw1u7Y2ba6TvnFwkV7HAFZrMZricwNQx",
  "key31": "3k6Fa2FWvACmv6zCTQCEMawkUov2dU7Gc5an3LGighpBoUgrowazsKvSfqTz22XA3D8j68U2cGVz62McmLtReNrt",
  "key32": "2pcjqtUGQGMXrTCgLqMtEWPQLHkEcv5xb6UghhNKsN4FrbecUz5Kpjkmjv527rGjD3KqRATLvFCUYAKsuiPqk5Ec",
  "key33": "4fA85KjhBtK9cfntNzRzDi6VaAUJXzpd4cw9WwzFmdUebU2GrbjJzkeFHzgPfyncQEa4nYCYMYRMmYeQHD6vJqi2",
  "key34": "ybQqNbgd9HSt1YaGThmAc2MqpS8NtUyVJzCJAHWMuodz5swCx8SACxcipB3wPiHRt3a9PDv4K5a4yZ6FXNbTpKJ",
  "key35": "4rPfrpMmcF3yXYJxxA9Zq9Fwj5YGs9EQzaRv6ZSG74493KqhCpMNmCmSR8rTTp4a6pCAxC6vKrEToTf7CFgV4rpG",
  "key36": "hnFjc4YeHVp8GCCeE2ww9AHfRehw5sj4g5uYkUWoHu7HyUhqn2jqkBCbsS9icxUR18izUw9U8BLSd1U98gAkRmN",
  "key37": "2LYsDoACYYot3Sjq161Q9pjqKuYaKCJuGgJny8VWbXfLbT7QHU54t2HzZWMy8zccjYHU9dupUWj8efEKTrMthnK9",
  "key38": "2GACKqYEnBcA9HqfCwxpGv8dqBUZjACJmJVFbcEW7dmX5QcpLWw74p6P5aFxyXcYT4FEevpGBCF8WJ36krJ9aJNo",
  "key39": "2cy1j7NkWec742fgKKa8FmjmEWYDLph1MeLy4WUNMouUrMtxdTG8RMrLu1NqH9ZhaYv4NRhwrZN9utqEFSrixXrg"
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
