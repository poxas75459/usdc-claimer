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
    "4zYV2iWPSZHzMRPAR1onaq7zipFmBK4y8j2x5NDWBs2EpsFm3invNfvY5yr5SbLVrQKjMBShtk21gWxnjVYUiwD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661zoS87LrEiL6jnzZQpwMnfgvogiRxXKsnTwjhHiq9Q6jypnbGHyYQB2UQXe3NxkXYoCRkDCSXhnK2kF2R1cA8C",
  "key1": "5c8BKHy4HAbBneYbmmzADdvGp35VZP7VGeFXvPaa9STt56apkAfhXMF5ck7GXMCR26SM5uVtw7AASkmuexvjJq4d",
  "key2": "2UgppABER3mqNpBdKir2XfMfJaH1w98GDjj9L2UXVo9YkPiSP3yDBng7RnaRTrUyXmTiFbRtuyUkLQVN13SFJn1c",
  "key3": "5htyGgY1sGUigugrm7Mmc6swZBNGhSthvLGyGP8c4ZfrhtfwLfLPTPyGFfn8CM7qJUNHvKbBxasTyX6uPvGkJkHk",
  "key4": "3MqfBMnva7eAG8TzVRKZVGbmCKSfGTMcZt2SWEgED2Qf8787hoXgavXdxPnYfYUtEayAi9wPF6F984rvugdLia8f",
  "key5": "qa1jTPxWDBV2wcZNYctgiuV9Fe18T8hUnUuPrUTs3SYuzKWvaNQ3YFwy1ipRzF2PqAkAT29gMAaB63VjLrjXYHm",
  "key6": "3g8xm2dWEHmZb3XSbKTbWp93TBed5jkHmkapqGJGX5h3SzFyamjzSriHTMULtY7jfcYExPKvz1fKSq6szL6qEBx9",
  "key7": "2Ezr2virkRh6MzFJmU2sWBHp9jmatPiMeSZtwQZxd2HNDTX314GjLyTJZh84XujJuSSZ1csde9WAK667jB7jRkki",
  "key8": "3ZLvAV5WgDTyHGeKYYbao61mUVRjgwFXep9c4VnXncXP4H1F1ipvZPtysgaNWKEZVL5ErucPDHafov4kS44oSzWH",
  "key9": "4BHqzY281AQVzeScHUNsHShe3ZyaxMTUyD3Y3mXZcEhjRsiYWT8nPuBUYSgqnBaZzYiYzgXey7K5dLZwhc6staYm",
  "key10": "ecLt5SycCUrJHVcHjUwRBFQLTTF5WupC9Ay5NYt7W9gaJdVmoJogFwCp63adtFjZBMPpEjA7sDLMKY8kU7RiL8g",
  "key11": "2gV7tSkK4n9p6duMZsVpkGfPcGyYLK2MLmLhs6eFWo1WE1cCeB36z2eydWnkoeid5RPGGgabmX7sLqpNoW5bo9Vp",
  "key12": "4sNsMqFYazVQkkFVSiM7smWMwg4JS3pvvoQqKAZJvFbrKoAfMscQtBPfym4XY7zuxDsDaw2HoARq4TiHrory19wy",
  "key13": "3954ZfEGW6NFgJoLXwb7Tv1Aaqy42RREYpUfSBQWB6mxU1viC5BPH2HpvwECckJonu4SRrz9vpu8J1x3WqLLLdkF",
  "key14": "55uEzdH9HPBgwFfdrdx4G6H7RbzH3kQp5wgExdKguamUBxnD3Y34imjEUhkq3GcD4ZZGzrqgDDQ1RsU1ffYzNbJU",
  "key15": "39jycCxpD7LPPKB7H5t9NhY7CEXPuM2ixmLeMUnZBcSfyU5PzR9rgeercjoh6i8ng7MoFFUxXp8kq9MGUjGCYQCS",
  "key16": "21RwunUARioSHuXSrksRxWfzUddNPKuuEbERmFeBShQ9mUiSajRg5B34m7zNJbijmWoqaQBWEmUrUqf1SnGnkt9y",
  "key17": "2jKxbfaA2jSj5kFHZAUjniWGQCvhc27PJfauGxAHoycLuWTACc3yxud4Z1mAfgp4M9aSTrA7JaTM29mtbFcT71M2",
  "key18": "fvbWhiNMf87Ebg4ewkygAGfTpjRJDWQ53yRDmXQd59R1LNynTbSTe6XWMkxzXgVou3jWNdHGizZGnuxU9ArhSPJ",
  "key19": "VnHTEuVGxWZBrBUmT6XaziGjpYWSPSZ5RQRRHuDmecbTe9Lodcyywn3FbQUcnLmpggMJWerFPKS3QxpWgtJJ5Ve",
  "key20": "3Qk3F1SoNZXQNCLYsbpJH2EZno8jbEDdPQoNqhGv1PybxC7sd1MmMk3oe4HUUs3dksdCLCgaMvDgRnRpmm6pGENY",
  "key21": "4SKfc6WuiVWKKznJBQyK4tVJhxXZunQCG3HRhBpp4kV4bm5qtAFb4iFJjfXUCbkyCZxLDxa7GgBwwQN6CLcJbqvt",
  "key22": "5Z9E7nAc9GrjvYmjPSeMfM3DJUkng8C2UhC4RkxBuRGmyfiswYiaJwHrwrN1QbQFPNyvUvRbTxbKnT3yr7fvvDsP",
  "key23": "KzZcTC4Pya8c7zGu3Qko9j162s9RzBscDA4hSEAjt4SwPcU8E3UkccmLHPC3VwCLptoXT9zPcw1D2CCCKko6c2d",
  "key24": "2PNyYEND15aEzq7mJRYLL8MDLR2MB5Z8PedqyvcecVSVEyBvqNY6QYniYkvnv7ioP71vVFRfZB9tGocDQQDP63gW",
  "key25": "37mLRZqDbwqWUAQVdZNxbVMbUkKY2DB7zQM8BLphH5QfAsJEJDDxZhGoVKK3iP3C2WLRPQmS7oanvHtNGxCkjGiQ",
  "key26": "GZuibrFTDqnnQdokERWxhYtQZhbPf4jvzczqWGvamvz3gjRvdk3LBPAaJi12uAqgeL4pvhBHPXkhGLUBW43VYbF",
  "key27": "2F42bJTJzD2z28wSX2njdT9Y8bpVHxF8XJ6crAU9FedSzjpghZbnEvQfcGtbBrWKMcRz8Ch7DjvQgMdyeyfezb7s",
  "key28": "6qqfqu655ow3LK3EE6ShU2ZRYtNPuSEAgNvT5NtXKV5cG4RtpZSBB4Ab55SY7V4cZaQoErU7asXgfX3g4W4dJ3p",
  "key29": "3RBku7Yjj8MbY7Eu7Hnhtango4bX5DUkVfTrAZVwu4obenr3T3UKFNWxTYYw6R1mrC2D3JvdTNmsmohFwCmqfAvZ",
  "key30": "2Q7qxfWr7xYAWELUTcBYRsxncLBpNgUfS2KuFjevWWUAf8aene65dv4pSeYu6wASEUr1RPPg8wj2gcwqQxty7ADE",
  "key31": "5yoFxZRtTt5Yarmj158ayaTABiJVfJ4frVkaBACpk8z3jwC8ZbmztMJ7kAqnkAUsP3Jd2MWcxMdVBJ6Xn4UkzhXj",
  "key32": "2DLDbgj3L5Yuhut5SPVEHWrYdj5cp2uBrG14gwe6WFwKCQzhKZtJZigstcB1CWZrzRQbyc68x4LZsJNGPqHMbgq7"
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
