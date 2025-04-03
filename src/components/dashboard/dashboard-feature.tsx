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
    "5nirkvcZob97VgYvXt26coeWMHQXbTU261cjRwMjF7GeDGYhgJaHtxCg6GcUXi4kxHuwNf7yuPw3ncELk8MBr4oH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFzZovmu6uVJMLyMaZUuaKDLNTgfpyv8dNMF8jXy4fajZVZj5fGHYbD37XBLUuKd2pxJgpPYRDgRcWotCEXr2HN",
  "key1": "4ke37sSWhDRHcD221b2o7YywjeabjRS5CcVJtFZbhGiNBmVHGfp5JKTPCy1twYVSryXE9AEa6VWWVtdu6PotebdY",
  "key2": "2UwYfSva3voAQDyPkk9WFGxh4tzsixvSieen79b5RiLJxmHSZ2PrzxRjZYLV1az1LKm2jm8nVaa6kD44efEYVT6a",
  "key3": "2xhetzXQkXjiH34aZDLXCPZkznf79pT28cB3DcGXjZhJGFZLqmYYDdJQB4VhWQdUYF6NvXkvzKSG9bmRvUwjKNGE",
  "key4": "2uGh1xAUkPDmEXJehCoAuUvJ6cdxQK81oV6DheUrztpj91PP3NugePFNMqXm9mhuPYieaq31f5prG8xLReABbGRZ",
  "key5": "48vy5Q6N5ifTtFLmyTaiMTG3VJJyo3XsPxWN1dMcFWo6saqXvGeshqJmhgKYhPVcQULJo9ryjvXhCprFfJQhQBWW",
  "key6": "4ctQ51V4bJhd4KPnDiFdXDErakEdbW8wQC2gGuy1dgecWwK3rwUupgcKqjHaBHCe2Ln7e4nyAM5gvV8g7eYQx7WA",
  "key7": "2hQra9AFEbkh8RENqNujje5FeWzxX1TZLVrU2PSGfFMGZXxKe9Es6ipK6sjnGeWhXYtt4G1FCkd32LZ6NpYMKFiq",
  "key8": "Zy9RN99KRYRkVnVSnzHuQjkyeXoGpRSbRCm9ghV12AGhmLiSe1MCVDhnESVp21j2xRFUg13oeWUDjDuioHuHBfM",
  "key9": "3wKCqNFxnSqQu483MZMApabJFAZqX9dYrd3SLA9qQhZT7Yy5N4nWWFEbmticxkS3xAajRLxosfyu5BQ92CvsbW2s",
  "key10": "NrdSmNuxPNYdrw9Nv4z6BLW8PRreHmPmsPxbEeryf3AED8fvkB4FtKukQaCURNaHn3HvZRkXvfsKbwi9ofUWkfc",
  "key11": "4Nx12XNnPVNJQF8iWyNtoLiLYUqfg9WjmvJuXJdHd1jftw66iBjBfGqy1C3GxXwszzcQuoJF1KpQtsarVbC7TZ8S",
  "key12": "3wEUyvcToxMemQGEyTSmJwM5u5bf7Ma98FCt6iDZFy1G7wxFwiYPUf3HTTHVCVGSGv7g8zVDpEv9m6TGKB8Jmzoa",
  "key13": "5MMj5H347TPB9tBonibSNsh234xkBt7vUCF4UuNpF3aNgQnAQqvUsFDmooHoQ8e8eA7M7rKJTwkNn2P9ANZMVFJu",
  "key14": "4o3PAGyTVeDRqtDMoHduLvDo8qirGUdc4xTjjCuYfJUcSPT5DNZuh77aNgJW2TkEaLNLdJz2YEdFGPwayumUwKjb",
  "key15": "2tiMJUeiUJBuVCarP3VJCizBEAZ24wEiiEBFyqUmiSyLrLDmnZuioLU8hNtMaaUtu4vtooDSWyhsFtzfQppTRrKN",
  "key16": "4GZygX2WJoWHRYmjbZ1tNFrxysdGivkSPmqZmLKK63d6YTbzXbxWgLBvHym1fVSMM5Qpr5NhsfybVRAUMVjKNA2N",
  "key17": "623rUyUrPy66KLci6M5dGoo222aN5b4oLR23KZ4gbGfoETFDHa1k2yUQRVx8DEFDLLLzwKBpKANBAm9iM7mEYsT7",
  "key18": "3WuEvYPoCzamJ6JK5qQuRAAA2951H1Du1kWwJHG1zhB6zBG2UmFE8rLK8M1MkYBcygXnq6Jbvw3Fngin5C6TmidE",
  "key19": "67YvE8GjugYbsyWa1S6gDTYYPJ2QVuY2NsHwWNBDy4YvmvoGmqbkEySqfvp2e7jRL5xzLjDkUgHmvZK5yR7WY1rg",
  "key20": "4Qxm4BV2V6hN8mn31sekTQariya8q52N5YfYCcM2UUvwG5VPL5GQ83d2wKRhJUaSGA5q2V5SNKySceK2CCJnGEG5",
  "key21": "42ztg6LfgtX1CVvuqRbCzFGXFxf3aLvDr59ocBMSFJAKHZNLerbut7gSgejBGW2BuwZGvRNQx3c8beo55rga9kAn",
  "key22": "32XVkt3x9jpKkzLxiWXzNChAkxH74THW7dc9ZMpeaRencViRdDfex1Z9m9kdthEUMGexX8qKqzSeYUnAgzE97hgC",
  "key23": "4mdAxmETaNLBrTRshK8GSkBL2ThKFLBvTHDCKc9UKNBF7KGBE3ZvDdNVch72gwRsMgZwFk43oqGzV2THEatnyyDh",
  "key24": "3pQN6Zw7RFkbZfNzAqvUTBpLgbtyGj4ArNKGNJau7nBaeqbCSpuNB7br1A8G1HFWodJ2zrhMvh4HsUouBBAdfeNU",
  "key25": "3K2mgvfNbobi3SozDhjNde77Lx1FEoFiV8s5eEGsSumFKZaDfVrMnpM2MVECos39YV2LCtBLSQyUxwDphJQBoCVg"
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
