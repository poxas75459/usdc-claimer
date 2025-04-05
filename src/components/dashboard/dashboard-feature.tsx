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
    "489EGUqVXLpWdTyizJ9bhMZYNhm3HyEP2s8HMNmPemtiFpi7Lrnym6PwNHhqcf3tpci9GjU6dDNGXMkJjdZf2HV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E78MAAES8Po32aTcUoDkxA4wd9a5Let5gkW625zXyVHiAMeSitUNar7vWtxPvguQfGqTmiLUoKbREAQTAYFhpof",
  "key1": "3oG3PHq9JGXJat5GAPyvh5UjPm3bbqAfuXhwVcpXRpnhyV68NG5k9p5PiSA3Zqdvbt6ks8MC1PRcCsLS7GATxVSs",
  "key2": "5C6rq5qu28Aww8F5zk1ZzB46bjH68isGyXhDQeTBJHGXw1D3hBgWMNg8KKFoayFz6wxHhmpK5JhMJHZKxXm7NJNi",
  "key3": "4tHpQMPqY9ZhmgPwXSuDYUHNtSfozCcVM9YqZ5XteKCq4ymPtfj4cWcW9wMiPjqLFK6ySr2XfpwNwV1C1pMxXPS3",
  "key4": "3RB3xPcJGJW5WSJGrD5vRc1oM1avPYbXqNNbZismfx8K81GuKwAnPDgytMvF4CAU47eD2CFRiT29TAAnAmf2tcb8",
  "key5": "4jA544bN6QjakXLMg3ys83N95GXybVwUEngR9HGkfowruWK3pobAFQA4FzvRZCBDyoAiDBhpZzgRgMWBubBVvXLi",
  "key6": "63nMF9SmhJchHu7ZrsbainMsTdicP6zSGWQQKdsUyqrTa217uDRxsJjy3mSdAApLnh8Ys4CrZPW7d1rxShFuZX2K",
  "key7": "2BTt3Azgq3fMzLqBbMtqhHhgVzs8Lfdcht5X9tFfE3ZSpSK2t2auxPcdCekehhHKxftyYjbyuKKviGb5JZ9TRHQb",
  "key8": "5sb5JmUjp51kgM26Wy4Jkj9zr7vHHPvP4ECUhgq4bXLQ29K5GaAAsDDAbu8SVNw7zvKt6axfgFq4bWYpKSjmHv31",
  "key9": "62EP8X89ryvPj8C7mzFTpwpePaYZbV9pyPcdCwVi2JTy3AYo5mw4H4mDzSEnSo5aAJW3SgXhPf9JGsPWEKywidny",
  "key10": "5ce66AGPYZAp8k4JkXQuu7fNwVJoDiArpbDVrqbnKnKaMQ6U5fDBqtH9TfC8YSmFmP3pGfuy9hgkGnpfuzWMtFPp",
  "key11": "3cqzFW4nSNoDU3GXJBiLk45s9TBesW9ZDjRp5BtJ8iKu73BjVzG2sAquKNcvGB9YriqnXDJnPFEupZQh8Zk3KqeM",
  "key12": "3C3AAKphTWzzhUUzBjuvH5wDwUJ8Nh3ckjajvqi6Z8oGqDbNG4VATdUXR2VDSuR7RLS54SNuWxudTpS8tE73mB1y",
  "key13": "3SrFinw3ZWjE4H1KeiEcJwPStFd3W9R5honTvowUDtYaDaJbagQCCykuciXkGsFzc5NLg79ws7q3DNshD9oLCNLa",
  "key14": "5bpadZXiorhRfK4FRbqgi2mNoVUZ8S3wQhNBDxST5nzmEqccN9e391DckgJwmq8QHQgpDeuNUgj17Hawt3jCb8iy",
  "key15": "2fwrPGEWWHp33TLvBj8nvEu4tFWyv8ZE1PKfueN26sVw5JggjFpwudh2rWg2PQzphTsHdng4j9JTQ7gSaMg3KKWb",
  "key16": "3L7vgPGkxF1FaQMEuWF61As7kePQTiDe6SohTv5mk8iPk5winD6cXsfePNx2YXyHvRyS3hwdPmBywFtUbCbeacF6",
  "key17": "2tuUfAFdPbCSmoAPKN38xhhNnb6HzhqB7BKssKhqGyF7B4oReA6PCzATb9PNVbmjygu1ftmdHEoZxnSjm2HG3MVr",
  "key18": "2VEcGCeuSGD7U7NEsVzeeEbXJHEUuUfQS2voFzaKETeRBZzrd6XuLrAPRcE3VtGREnbkejbqtZr4ziqx78SKLDvp",
  "key19": "4AMBEcgamtBGS84AipALks11c8BsEtGBGrSQ48hJ4Ugr7qhpNmN67mbrh1fyVoB2GMMqXynJBhks4JiUuyRrDQuR",
  "key20": "2tsQjCB2znHCM6ZFuwhz3qVNVYi24uReH4N6sKGDNUphAp3CxnhwiuiS9wbsogADp8KoMFM9cwrEB9ab2ZZyB1Ht",
  "key21": "59gcz8fn3FtkrRvH8jYngCazYRogNwcNT5wAiMcHmbuBd4E1ayTxboiFCJmETA4Qz5vFWeCR4AMHqkGSbCPV8KkF",
  "key22": "8BQ5YUmYLtPZ9B8SRHcLDxYzJKhwmV3ztLMFh4FPL1f2YSbSbPBHbuXMYjw1WcCnpsXVuWsbhkTGEJZCPAsgXMe",
  "key23": "61emQvGQHeV7YYfKKmq9rUvFwiSuMAtWLmPUF6LB8UD9b2rZLVyrytER3gznZedVrPk2GBzHewMwMSY6uvojJ78G",
  "key24": "5UcCSLYPVse53fq3ZRiQHsdPyzyuisXWdHkRbbyQbbr4KAQmJQif6v8veFbK6GxKDCEeszVEyVUFoSwfdStrnvam",
  "key25": "MUNzkpQ7MDppyq43FyeWDcruXMvi6CwNFkiLjJQepZ46KyrpuXgR45a5uXqEXiT1dGeubciKyU4K2BhSX6pGGG8",
  "key26": "tVMCSr1vJvKoWUqW5F3D8oLr3Sz3sK3LitpBQ3fPUafvQiFGez81wR6UUjstdk6mqzzpKhAB63P6Th25pfSa2Xn",
  "key27": "3Ki6vZeMDp4JH1NNawc55Yc4usVqJw67tqw52ZmVsQxiHpV6X3fHgZ6RotBDp3MJ3zLDZp9Ypa1fNRrnm1DpnkP5",
  "key28": "2ZZtDVDwsroZtC4qSTr8jZGHbNbuhoL8P1AYjnn38tESyzH6AiT4z9h9FG3c565TcWNxLxBeya8LJjoFqGYYc84C",
  "key29": "te6AtmHTjBNTgrTWjyjBCkfpNRVbEGkai3upwrncp9hTPpvtEe3R4T1thbXzx29hzVyJTjY9aXySxtyWzDhKY1x",
  "key30": "5ETKCBVpNYh7z3b38CMUvyinDaaWWdXQowMEwdGDcC87GFNd88VR4U7anK39VtoFkV2KT7Kio2ADr6oo1bj9D484",
  "key31": "4zEyMRAU1bGYMrh8sonRCreKije8S1vAjZyMa1NdtA7172hkgFpWERDaBKVuCJgxHAjvtAFG6ApHpvmux5uHMHs1",
  "key32": "4jEVL7c8fUamFwJomjc3MWdtAxmLcb9nMCT3nvvyJbAZiGhughenw1E86MuFHDNJUiNReFvmH6mX6CKxdqxTNNqm",
  "key33": "DNhUDgE65ndEc5aDJoUsEi4zu7YdXxrYUef4spv6xCL1xBfNEDXbBU96Z4SYGeL5K7V5PQ4r95oJxME6ttb2ZZ9"
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
