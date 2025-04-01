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
    "kuUQ1xuQ6nYQmpTQQ94m2s2mLTcWhW2DbttpqvnnZfuEFsL9ykPYjEKQByL5GQcRnM9XRYJa6Fa3HC2bv4burKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwYmjE69vgF5YmJTsTWe7y25qLC45S5icYrQZ4mHahxR8mzDtS4ekwQBsfp1CuiQ6xiXm8Mpwrw41GAq3A5f1tP",
  "key1": "54dFQT1FhVJeGqAumMVU5om8feVvwXykG9TteZEJYnMLNZE69wuA7bALKnCDjfG8gmPtHpShGSmb2HgCBLD8Y1J7",
  "key2": "2v3RMUbTLv2hNQW2w9MdWMG5hFF2LcuZ8tqF3hUnFVRVQBZfJwBTZhuw9UfkY9jxH5CdcwykW7uSiqBs6K9CG4ua",
  "key3": "DB5kJjzuvr9jciD2Kxh62KiP2QQamwf65bEz2tiNpmH86R7SAywvjZ7E5YwyxzeRrvagGh8uxXJpuiaq4prjQBB",
  "key4": "4NBACS4ABKJefWXxJ5tPbtNr7JCzn99czbsVU4zRP4C7v8GeMBotVNQk69Wiwp7XYWDnoDpqmSy2x6xcWLXNjSr9",
  "key5": "PxPT3hWJb6K68bsiGEVeyEDLZ26BAN3h5mt721jDByxZ1bn9vKTY4DhHatZ3tprSEDU2M6bSKzY7Ca14dNX27wt",
  "key6": "3jBhfUdNx6WpoheC6gVJqZoyftVqp1xyJSnM69XUmK83QKxFvZu8zEzXecqePL6kNZysxw9BisV5xK6smVDzg9Sd",
  "key7": "3xixpiED2MGnFFHmC5zBP5Z5rToXXrnKKmsAGiDzLaLKDRBy9yyj9PwGhBCq9SppVBL8gxFYHDRv2hNuWEcgx2y",
  "key8": "4Rj82yvie5qGPFs4UxpvvknKzEeUFhDHKgfkrd9C3AhvGtZL51DB84AA3XbSAJjxgbsNnxojtpSP9Fs9ACVz7avh",
  "key9": "4Hwiwp6EeDqn6EYv6pc3Gq5BHLZ9bEYFJFtSzD3PVbwAmSNF9JnsRvFPkDUGAeD1F5DebNxNS18YmxdAu2FL9DMV",
  "key10": "1d3UcuCZHKikg5CRsZGBK4PnQP4mXJH5mxqvrA1scdfcVaWnTy1JB4N1nYt4mi4fxbXTYkcxqzLRQSVnaS4d6Cu",
  "key11": "5ut6xghrdudk9HxEuffVfpnXyv2S57nfVLTGXyS3kaGqU7T6vxTmLx2qe95cUKrgfNy2ekJRs4U9HLtNZSSc7nwm",
  "key12": "5a6LLt4zZ3Vp9Vci18FqLGdidLmqHQnLTT25gRNn8Nt3JrwPhXiwKxcuwq196487sifiaZjo7Rgdd1TPjE36prmf",
  "key13": "21auGnaQWT1tqoo1R2xSX54W4ass5MWps73aaBw9ZSy98UpYdbx5scTjZMueuWGYsJne5eMTHP11eove1a1PNETt",
  "key14": "2tQno9LoBYi1V4Qfuou5bwnK7pxrNwriqeiueE1vhfrPWTkK8RbRxRoNJrqKrRMXSLNjtZHCTkpLr1PTZGKY2C1Z",
  "key15": "5AxzKGNo4fxDdttGcx34FrvAKv7UDw4PoFAPBZQZ4cva1WRrbGCrseVCj6nKeLf77YUbBmZM4EFGfaDdxTk8SxqV",
  "key16": "3Sti6yiv6Ks1bzcc4Snc576rwuaa2AVXYsBS9aS1czN2dDnEJHoej8QqCQT5k8aQL1vhQjWNokUfZEJ8CHN2tsix",
  "key17": "4kbFoRyd9DDyd5GM6PnaGJPw8bmv4ykVK5q6546YQG21QbTuiENbyjGTF5WKy1yCMyxcsynDTsG4CXsgDvim21cA",
  "key18": "63jyLvzVQJ1XnxgAejKYtRqzNzL1ZVnicc1LnFjZmytacQVcAGgCwbRz1iaWQ93JJBBfeiZk7KCxA1rEt3rSn2jo",
  "key19": "79TnAVm7kozCbZtWV4ph2nRgB9aMpyxkZg1dbhYfDRdW5CbX7HZGQFGfe5GhWWee26D69mZvGUz1zCPdpMAVfz3",
  "key20": "45r6yzNpQtSFbDoZRDaR9taz7j3BxVVgQ47rmH3WrZYeCSbpSuzqyhSr6TktKBivhLhU2VAYh9dQD941QAn2Jiih",
  "key21": "4u2uTntsDJGxW5SXwTnkNi66Nhq64eCh37RmZXhnU8u1swm7CmSzaJWt4DSQWJU6X4CpUcKyzzD3pAaB8yAgTiPc",
  "key22": "32PAXhvDHSXNA3Dyq3D27K3SCnNKTEaxURQk4X1wKUVkdxFCAaLG9nbbpQyP3m34Uo1FKRdURXhCkURToN9ypv7B",
  "key23": "4RnxgzUyeVUX8rpXesent3nXjS6rXcqznKj1Q9C5cpY3QzDMhU2epEvFfQZfsZbeNnPnX4skBEyNgJLStQDXBXRU",
  "key24": "2z8Hg1RsAvo3AjDRCXPYpEQceMreBta5ovAgXgxG1rCzps2h6w5rcWwdEBujKLMhztED8AYXmTa8JEchcobpdTQE",
  "key25": "5fYtt7GSNAQh6vbsHhysr1Ej1mkCq2Kho8VWSniTbgbbbAR1XJYF8eG6Lkv9crchYuFPwZ5HMDt1Mg61j3HPUYMk",
  "key26": "4PAqn1pZZPKJdAdTMSQQoY2Sej3R2VHEZr2GL24MihxNzB2FMVzA2GkxxsrRikvaxD5MmQoPoUXAbLqvJJTSns23",
  "key27": "52TacPzg7GT53b4xXUzT8WqbX4vFna1iTw3Tm3gNtrp1e6UtMtQCGFEEHLQAA9q6MTQCiip54gpH7F5pMSyfm6qw",
  "key28": "4L1yET5CdZYqjBBnRL3G1h6d3hLjAkwg2Ag4D1vEVy1mMiJDQDiCtMUP1noKwub7mGLY2Zm668PoBgpMbVf1RXT2",
  "key29": "4DH2hw5nYPZyuMAFJdtQ3hvSw7kDSNPE8C3cQVmiq1Z5DqzVBW5Gmak4nvcFeyYN4HsC6ApTFwfEWBRMzPp56jpU",
  "key30": "3RtpDjXDgRznBw5D2M2WtdhyzhPEcz7S1y7QMvNmxPuacccZY2Wkzf4P7q15QFWLwaLSTygnj1FNHqZT4LPqMYhF",
  "key31": "27EURCHT7JPDThdE1esXx8q1VKPbbmiSV4mcen1sDkoj3ptN5KTFzJ73hpwzDs2LbyV7vRbhLr1wJWiQeZc1WYR4",
  "key32": "2x3sRbr62YUKnrDyzFfnwsuzWJpypsNbn2bPtkUP8NKLXFJaFMnzDrTeeXWsurZSpGbg96SkWmjLfMc14mDY7AaW",
  "key33": "Kd3kXYRUb4d5gEgWkVHRQAWnc3iMwLRLHXJzirMMJcxpi4YG8e5m4ZppU9WLi32VDHL4KUtXKcyt8idJn8z8Kjx"
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
