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
    "4SKKmvj3LGuaGn4kh8EMYtJcHZsvM4CADtLrnD6rBWynFgci2fxuvSXo7sDSxYGf9QpBM2xugBWgTKTVNad6JP8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B13fyUwhWRrnp8xS9FzTUiK22cZyM8PxSBwt9DoiG57kWmp5KZ4ceDC9vP5AS5Md6DWfGzgCVpGts4dFE3d2pVK",
  "key1": "2eAwvzuC3G58zx2V37tEweSJrERuHeqb6u5y1NZeGsxcqg1qm3FdqKkrvtNnqznVRbfpk6gegpc9abvMmfiNPynA",
  "key2": "4AG9jdCRL9bWPvRPoeArrb8Ln8g2Nb1TcACqQetc4KuNc97rQ51arDGdsWnrrwDfnptCrMQ9GTxJQoYnwY8671cG",
  "key3": "5yyekganhoHaySWWaQYvHqeA6rbtNfKn1MnBxhFdTt3fBFF5Am4bTkjVMxL68ZBxo3rkR1T7nmtLkxMcbFuJRxEY",
  "key4": "4MbdjKLxVaJ6qKQkKt3MGYsroNviuhnbjKwyk9ryn2t9KFEbRiEQN8K5R73onmiNrQb39ndCF595jiUsQHpM8WWT",
  "key5": "2ZBV4yeeizEyAr1ZvVS8jioN35QWJPuMStzy5AxY81yWSoMa4ThHzeMi68b9x1BpDzcoupJ5J7mdVMgFzUHy9ucS",
  "key6": "5A8cRoDJ8g9zSHD8hknGHaGuNHhCyKWYt3cotdfkJYSYmKAxZqL1A9yC8Ze4LKmQg46nG18r87XxDzMb6ZGii5V6",
  "key7": "2KqVS1oJ3CSpT9FZHDERkhAesJsz1AeRZmfVm6iNugiufmfpaWaB28qx7ZiJYqDqvuEAeCvdk7NL5i8YaYgwJKVr",
  "key8": "3irehCnWRzkM7yS7L32sehMADrm51c9C3yVh8db6FGCRPSBHCMkNqzBdUWKZptnaJrs6e8ueq1HFeT9zxVpdWRWU",
  "key9": "hDhNdLYWPd3ZjZgDLJXM3xodcbMMgfEixhjtyWWbzNYuPyzbFgwcPpjGC3J1Wdfauedi6rkEdtv2QiNM3nMHbdw",
  "key10": "2hnW3UfCKCYvn9ghJsddXUmYfYnXtA5ztXTpwDwDvuV415tVCz95QS4nrw15p5yfPYNn2Y7MLP8S3RLMJF3eEoBY",
  "key11": "5wrwLxdobSBk3PkntUERd7C5zq46qroLLXpPNYAu5PbVfRj2ai7tdGW1Swwc7n58kACEdpcvGYeKXxy2i3tpVuZt",
  "key12": "2zzHjgDDHJZ9XQ5SbTxbzXJcinLmLVoke5iPnBqfG9yDB8RE269C4Vp2kGcdXZT1YPsZ4FjGM24Xi68GGvBctng8",
  "key13": "2QnSGMBmKNL8szLD9oinfv8RZLdJxedussB2t4fz3V2hSdib7atpnfK3Bpib56e65t4qB24D4o1xeuiaZ97PX2KB",
  "key14": "5zD8jEfqeCcbwRyjEAMEgkPFRNjPEVqqzLBdMFyH7L7xeChHXNHzxBHUoHRh4W3hMcRReFGzEjj7c7kySbSfZr8n",
  "key15": "3SFNWHWcKqxQCKr6e7oPY6VnXAm6ExWFwh7GSfPCeoCqwJndiAE6tKVLAMUe77iyARhUeH77BC31CGyoxWBVkTQs",
  "key16": "53dJAbnpNErggEd8Ez5yJj5bVDskXrgYRLqxoNcRJ8JZwAZVbo1yA5XZXJTT19ErV5FBNwZxLVnGKmFx8Md7ahn9",
  "key17": "2EHpxqk1wYoQqRvZhHdiKqLzNabJumpSdMzN3RDjK3L5d7NHFMhfkLmYJU8sdg2pBnC8WMVpnghQPPg6aXjJQRsc",
  "key18": "zNFQKNsxU6uLWdhZL3D6eVG8YUDGVVYDCGPQRT3RAVCzfyJPTwsYdvPFZT6iMvZajHJcWuqy41Lv2ukE6kGQon5",
  "key19": "ME2Xz5R4kgSHTD7VYM6JfTuWsG1zeDyxY8aZQywDsFctKa7kvmfX54xHXxeG8VABvSZmAc2wC6iv2MAkcGUCgGA",
  "key20": "359exZuyEdg4rYpazAwmRqXDkCGPA4jidwoPWujqcqooeMmxK2TYrGAMnYwuH341nmLNSQBKvPmkMSh3iSdnnDuY",
  "key21": "2sBgjHoV3hE5CxZLtVqu8KBFF4yqPVGQwZnL5z9F6EKBoXT3K1HCK9M88RWkhZbmHjDTpfh8VhYYM56s2GFn3aj7",
  "key22": "64y8SrmoAt9vEqbQtCv6X5VHy1Reh3cqJE1ES7pjGqVg66Zwo3XrSjmf8qKhBiNQiz22fDTpJA5CmmQStfuw6r3W",
  "key23": "3WDa6tyH6MVG2QQv7Xg9RXTHSsUxRuwMHfJ1BqNhAhHB5vU7tSCDzkSj762ZXjUqCdeN9cKMF6RzVDetFavPjoJA",
  "key24": "pjftFES1wgCGURHcFr96Z7uaUqCSQmb3EPvuqKwwa3J7KRWo4F1WDN289aUu7MD3JtGiaCqZn1NXWrhyKxZFSEq",
  "key25": "4rGviSQGwJEEJjespwDHwfKc6HfPMy1iJL8Ta7AEokPHzZLK3KbK6enG3hiiLYLh9255a7cbG6UEcUE89Bg8cuLp",
  "key26": "3f28Mbmk3WentsV7fJoUinPg2nLSsBaBCz2P78JCNSwhS8jtwxfGNW5mriQPqsSERAcQLqWpyNix42UFV7f1ARjV",
  "key27": "4FJYLDcHeQX4JC2ZiQZCGuAYdkpgQ6ZGtpqGrvv5Ky3hKJwYKcortLNneDWyr2c3qSDcfJMcjQjYZdjRzc2hXW5R"
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
