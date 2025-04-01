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
    "2n55Y7CqycZLbpVwZveaAyYJByr9nnHNLan7csmvyLAU44t6k3AhBoXKH1rxLLrcfkLe1UBEBaUXc9hHBAiAo5tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34s2zyGrAApx81DLohg29mvbYunULNbHAPKq5SrwsGTNEw2azqLDFuntgBz8RNoVADrfbYtXpD98bo4DHoqNxFiu",
  "key1": "4YamrjmAnQnzDinvrysJrWG6rgQxoUC3MYNjDDDmzafhudxJon1K9atM6dfgEuzi4FUu5DEPZXFhsTfdbPErGZye",
  "key2": "5QbsJiv9AGwMHCpfjmL2gwWYnFS3o91JXkzeoXBZNNFkxVyghJUzgDpKFak9i2LnMhyXPnJVuenZYctrK65icyLd",
  "key3": "2cmMnFTcynPCVEf8SgVNUYV87nH7GZtvbmkWnW4aHbjneWhs16epy7nqMZCh8x9oPWi3iSUXChBBeZQF2mrJdAKo",
  "key4": "1FmE2jf6UwfW9hoyXfnFT8NnoLKnPjwD7LRk5WeebrAWQ8P6mEyJJtLxfdH54Vut4G5SxAAzCFXtb2sgbKzuJRX",
  "key5": "3DncGxVjuHAYiYoGFUYwUwU8YUF7c6ptddqSdE4wuPoy2xUDS6hgea8m3KPdZyKWpKNaNGHrThjpnHFxZmarJxYX",
  "key6": "31gingMH19QDbpxnU7nixXx9KGZT3hjxsAoZtrjC5NS6XxBW2xDWCkXmWw2GnsPjoBxJ3FH7QMaXngqbuMBHCLzL",
  "key7": "8Kq3EbEzGAUi289sKd4MaFKYizRLBKxse4mhr4LpD29TJp8xpDij5uYQ4NLv4MSHA6pr847pHPkJwdmYTtAttwC",
  "key8": "2vinNeYg4w89ye6J4iZ2LarjJGFgqwbuGrtSBWHUxXBRWiaUfkQjenPEcMSiqAc28CBut6dFoeuM8RiTXbcDFNjQ",
  "key9": "5DCdoXvFNJz4cdBTVrjoptAp28PQkXTmBQVqS4dbV1WLeNqEZcd7rAJU4yXG8xeSAHDmN5BGXGyGFQxBFkgxQ26m",
  "key10": "6646GZAVwNLS6rxgNVbCDuk6DpfXiJasQ3KKgmfAxWRLAiV326ZYn3QXzcCc8rWWzuBGDrUoSmE5BzQMcqboCdvj",
  "key11": "3riRtY9wBSPN8C424v9YbQWtW7WQcDr61ZDx267ncbBiREHMiEcC6bBuBfoVMupEzS3oEX2a9yASo6u1z5qxSGVP",
  "key12": "hU4m3RAHXQsCD1Mq6cGKFgDgjaJYekmVfGPfYGjZyUNbMYi1JonqFugASxvZEwiGdCFYoYnhBMiN5NobCJuu5N7",
  "key13": "4ReLAtYxa27UdDrfkwp84tVohbuKBUBnCFS77tZ9yiTNGTZy39Ai7cc4qpzd1Jbk4ak35ZjdKzBRz52S5PZDf1zY",
  "key14": "3x9MXdw2hVA2tGAiDS8C8Mmb3ynAqQDEeyT2WGEwFFW4Wn4LMnej2YMsAF6zkGmovWJsoLcvucceWDBoMgKzMhYn",
  "key15": "5PAr2hj7XxHQod8qYWVLX2ZRLsCWtMegAzR8b83dZ7Y8km59WkJarqaYFKhTFccRbU8q2QbKExMvwmRsVvVp7BpN",
  "key16": "62SZNwEqv2htEXmD2dZ6ybSLfWZyq2unAta2xUCsUAQxKtNq4AeDSDmRe4cGMrig4uRU5ZZsq8t1HQnWs5FhARXG",
  "key17": "3EUjFhRMhn34aVzPzzAZ6SKk42N5Z6CnuEYJ5Fo1zwPx9ypeWLttKm5shz7RME6PNXsHSYsX375VvMmKbjsh2Zmu",
  "key18": "wQtpXqvzPpysEhruEVovUneumCTNRdibaxGhXTugkeuWm4oHoBoMVzTjKec2HBrFszXRTqiM31Rs4Ss4T3v2PG4",
  "key19": "5ndTSeMojzKHVd8ANVspLQ1LzwZ1Njxc6zPWJGswLS9dAUGbiKq27i4dWFQT5VVcfM9PxEkCezA1zUKveyPyRqMo",
  "key20": "2EJTKmr8pXEwQ6ypah12pDeeyqpJgEmJs323J5iPfhQBwSEbRbvfeQGQxC4GVfVnRRgK3P7tEYQHxegM6H8aBmpy",
  "key21": "3xKWiB9J4GjCjXpzbGzNRAHLm7uLPdWAmKfyvFcWQMg5JYdp4UT9eVNrUAa2MHxXrNG5NjML1CQL9UTXUTWywYyK",
  "key22": "5X4U9mSPg6QQwPZvvtzJeEhVRa8muYcbpPRHjgjhfDZFobKstzGgSQdWAF7pAV3D6dtiafdFur3T8qAx1A7degnm",
  "key23": "4Qv6jcB9CR7z1dbGuNmmSDULKGYx5SS7e2t7wWJJ2oZLU3hL732GJwUs7p8cvAkS3hAeh3qEjabgTNDdMoPQWghn",
  "key24": "4nNZF4G6BVk6Ldjd3WChKx8ZZGwwPf2QnjFpVfV6bTi1E3KpoVAHgdFbCsk1FBMqLQqCGyv8oY4g9S8twKVGHSUu",
  "key25": "368EXDyAWFoQNWmBfR9eKtvco2Pw9v1gvJpDxdkHfvgpaBm8qinVfdLuqzgQBbBx7jS3ekUMcoKRFCG1Hmd4MRqj",
  "key26": "4M4CPF5PmMi2SLinxhTWHKQXJUzvSfrr5agnkvgsYpRedLGRznvh4K4k5CmxVn93wxtKtq9pbfVpVArwwbnGLN9B",
  "key27": "53bJJN3t4mgzHDyq1Xa4Fr3Wy38ZA8TBMKXkZkdP99QKgjHXvDdE9hPVTRWU3mRk1v899ipYkTXFCVzktCnY5PXW",
  "key28": "3iEnXdACsC97VqUHFcvHr3HxALRqArzK15LdbuV1X3JKPeRKwZE9yMNfjgcjFDpEuZhehrPoCU86ou5anxLzyBh3"
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
