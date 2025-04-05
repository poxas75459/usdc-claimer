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
    "w4gGrMRqej69VYFTahfyExecyVXByXvmWFUnmgPquAdpLoGx3FwAi8zW2RX4AKZZW8aCngFJb26R3y5biHM6Hcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVv9e8M9GmTQ6GJsMHwrFv4FfWqA5Ds1eNuF2DtsxrmVnMd2Azxfj94eooFTXyEiJDZBT41dWLd6E3UEnMembyn",
  "key1": "2yGeSUNpyDnwwM9mMrFci2XDe2YGQ3Cs9GYKdQVkPze2hoWUNorfwWRU4qh7yiPZ3AtS3DBVS7g2siNwh7PwZwgi",
  "key2": "5HbxKUtSHrzRShC4uiyMtZeAuUiEN2Hz4KjgJo7AUhi2SEq8bpy9NUmU5u8Cy1rjw65BvWrvs8TSv5fjyXfEDm7m",
  "key3": "4t8VZWmZRnMkQYWs4oqtZqT6nbUZ2w3h9RsubNRejbuX2s3XGjifksArhQZFNCKhG1SGd8cfJmhn2BpMEq1zMkvi",
  "key4": "5eY4vsceRdhw8A6P5oaGn38BeCcKpp2SiidqEMK859sBTCLngRUrtN12izWhRWvReBVEdPj9aad5wEvHyUwa2sMM",
  "key5": "58Ya8gusikueJap19Xoat67LdKN7fJY1fCKLN5AzaSPb8B6zg8Csk2wg8HdkvF1AgFro2phQ6zRzYg5v2ZBpMRbc",
  "key6": "5ast9mP9FWSg1y2f7QeZUMiB3Li4ndRWhSb8akVsr2V25rG4NHqoYd487c2zYoenpo1zgUj6Cs4ymrFsxsiUr71p",
  "key7": "43M2SJNDvHsbpwo8ziiwjvEs5a1QmtztVc3egiT4Tjw6k1GnuwgT5UAn66A1XPUaqsF7Yx16gxK8HFRkraGHvxKm",
  "key8": "4oLHDoJymwYxZJWLmhKZtqE4BSCUqpGRU4HeM9QXuqJBii9HBedCoeJLrAgFnX7SUkzhbWGuS9LiaXcbWe1sEoEq",
  "key9": "2yrZYq3JEDequMqmntJn2X6bWs4Ufn8nt6swht7gkzMYS5gq4Y7LsDaG3Fwf7URj93xS2hN13b8EjFqY3KS9tSSf",
  "key10": "23YGu4KytWPvx3bFTzHEyuyYkuDtKJYfrWSMfD9oVy8qunjq2iPWjyhy8KecRpahgkLaAivrTE9SWoohewVZddAH",
  "key11": "3k6nu6jH9cJ1HEUDZxDNBfBBBgBWYvtopeQ6g8UD6wzwxezsbpeXCPNvdvPiyp11Xq87r8LbdZ1nJCXLQx67VeU3",
  "key12": "Yo9GmXGgm2Bnm7QxVT1HJiyLJKNiTiJCaBkttrsganp16YM8WSEmbCrXVyBYScMbecXcoqnGD9ZLy8tUAH1jkyj",
  "key13": "29SL85TyeGhzRyDQj4NtHkjMxPGKAWtdin5xbiJfahDtEnWddmPeZ3FPQG3qEygiTNXTN6dbqR22MynyJFak73v7",
  "key14": "4J9q84KnF3TiMHfLh9SDopaXUMQXdGvNdWpw8VMPZbjuqo57PEdp7iWsC4hj8wkFFiKdFftwZsmzbDYdEykZf84P",
  "key15": "zvyNCf4gsFJnpoLF8HQWn6ZpRh77GWSwB7ynahQby5UnHNqKK9pgxPqdQjAE9ZMmKnEbxMUTh9iDz46GE3txNgX",
  "key16": "4mSH7CRzZcWuyKLqtVqm3eCPXgKzE9VHuMfxPhrQ56jWBMiUThPMpaChKB36fLim1RtpMZG751iMK5TKtKpWSh6A",
  "key17": "3yYCH36en4d6JJRL8c6vkUw1ZkKMxVKF2pRQ8vURgRr6AbtdKTnUzk6P7e5LLd48LrWvfQR7Jjz9yDvFrCXVAPvf",
  "key18": "3Au3GckP8Gnh7d4yVnBHDC7UpayDZjMRuXsLFYBdMpXJxFz65bNFdY8s2RggTbLJVRca5wetfFPwDjFrUg3JN4PU",
  "key19": "4n5mZjgdYW2srpBf1bNJAkGpWCF7cZ1Hhan3wLCghdE4uPSc9pY3HRsJsYZzkjzsvMPg8TJrWBxUFr48RSiPDsRx",
  "key20": "4UU9BwQ33QuKCN6tLaDaJTEPTqUkcXqpTghXofD6rXbmHBacgGC17N8YJxu8hqVaiERohDpzGQnwct7z7DEBeV3D",
  "key21": "3bHHB6xpjdGmFwL5F8PRXUGBaSVFVDxBn7cbNSmZc8BxCSRX3LQjrRcUgLk3ZuvNE1N5x51R7x7gHB8HAY625Yu",
  "key22": "56mkfj2XcUHN5iBZ5TchdbpggBgQbFU1kxQDjMt1YsX3BNMhveqegz8hkbT2u842UuMe1cSP3seg5rBcMdwkgvCb",
  "key23": "3LVGcP8PrUz4LKrrMXPaqHCMrBqNMHbuYQp3NMBUAjj8WqBLxpkgiXeeaabmRUmtNTcjed96tMVucfVDue5nE6AM",
  "key24": "LksyPL8NSw4Fzk3V7ecrx5Y2msUvJ1vL8Hn6APPDjRVDr1FsQq6WanLaYwjwdWotPnM9gDZe7xzGXppV6snuaUY"
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
