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
    "21J3L8A68tEy8azcbCg3ZbeFT5pv5cvte8ACizuHqTaAaP6oL3j1B9fSfUAjLjm162csa2uuRhSabhEHuMdbQLZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZsamGYPDXF8mpDgKk6NLUToE2wTpvgkuU7giKT77ADNATruPbhMsmhWmTE2wa5pVQ1Y1HTrP1eZm7n8NKdaQzW2",
  "key1": "2rjjvsbnJh1w6CfXsehkTJgafCS9Q5vjKrw2viv8aB6vXV9a46jDXmNaWJ5zkQVVpdiuJnzAzmBZPZreG1WW4GWn",
  "key2": "45dWoLsp2cCF6tFYCPrWcCBcV5eDQoxSzTzgbyymMYBG8ew3PBcR1rw5QFEhKefVVPhtP123iufRPX4NNKn8MBKy",
  "key3": "24gc8bMbVSk7heZNeTBgyCg6Siuop6TztzHokbVeWzhTbaZJvRThvTq2uTStq4gQ8taAao3z43UxozVwrmNykNkQ",
  "key4": "kH8SQse8AkhWZ8ueQ2ubfpFMMpzjZSRYd9EfMsU12XMhChmyvmU82vT7z9WNQZ1u7S9GeF31brgbPgt7ZvdBrHm",
  "key5": "4XuFQsFDU7WAjCAtQz92h5bDBCDXCe14WiE3aiYCXGVAhE6mpu9ELsNhTVFfZ27oBwDKyAaNMeNSWCyoEy1d4nBx",
  "key6": "4DsfrK5mfqoi94Bt2BW8sNDT1QFwdFf2UEUjDYTw1RjkcG8xzG6ZpjgMv1K2tooWsZxrE1ncsQPYHGEuUiDUx3UD",
  "key7": "4QYoUsdN9x966q3QUrGYzoNbjbEmGnPme3z9wWXExv1TZmNUNH7g5iB83HzdZ82eWAG4N1WqiuFfKZZCbByqFgYe",
  "key8": "jGc6FwHxVN5mNFPzrgZ42Uqzhn4QcKsxX2r6vrQEJumka62vPsj339mHW6dM6KmivNKZBezwtacoSBW2xcGv4Xk",
  "key9": "4F9w3KBjis3kkBU7RFtxCWKRXj2RiTAXftCDfeZgsmKJ9FYy4tmEjYrBbhaue5yguzPDQYb6ZkiXpVnKuKfb1U1X",
  "key10": "2fm3bzi7UZczwUvjXqTt9b7iof7QHFGwxHuYXzeo6zydXQ3MPi8YiBP37Mc1BXKvmvJ5uCDcfpmmeq2p5NoZu5Kt",
  "key11": "2XqSLjpmNdgUUhjVEuPMhj24vPAEjpNBqYvqx83HxNCJWrZnjY93koxpdUEuY7oS2uGThajZ29hyRwrp2PzrD5di",
  "key12": "KSaUkotQpZ5xGPm82QfcyqBKb8Byfu2V89K7fHnDH4szVRYveuFLAULqXMBqS6ijCUftuJkgLfvuiiMhjMhvbzp",
  "key13": "qra8EX6dofkoShdvp6999qtm1HzntuSVVqepgHrAMi4UAGT7UHj5aWQ9LQwdfcuaAnCQY3xsUg3hsByS5qTBfJv",
  "key14": "XVLrvBHaynxQr3g8Nf8XjdxaZm3NSiA8kyz6qYTVcaCDbisWTcUoxkyYV2bbk2MBzU975EWP2EHTWxp6i7TZjgk",
  "key15": "sK3U8aKBmvh2sm3ZJ1rs4tRc8w9fHGFwoaeVk21HX8gjAQSzAhepSErurs1uEs49oKvxPK7pDc4338s27hkRP1x",
  "key16": "e2vJggB9Ctj8Qdt6RhgnojXLMbxGdbjKticPnPYGArUe2JN6BgGAY9E6EdLhvbp2piCzsh2TAiPeKbe7HahkZcp",
  "key17": "qh8ztrGXSv8nLymfBwLVJZKGjLMXr57ss82vvVy33TWfSee2sbiZ9tRcYm9jx5vqzvogPL954DnPayYzm68Bxh8",
  "key18": "56hMnHALRd4hNXwJTLDY9zSdHKMPtk7xvjhWnczBfjAnHTXuxgY7A5rQkM9cWc9vB3a8EjxiGnZLu4jUKDhDQYjT",
  "key19": "RTrQX6wkXc4zw1B6kReqUVrChte5pr31beugj6BCb3wmh5zz28UwbvifscUn3bXxnHyx1bGwAhXgtzp6pPnKqRj",
  "key20": "4JQreRQY6A3TPZbfZWG7hsidv6Lyt7KTsUHMQv1GmWTT4HFui1U9XTcV4zhaW65oPpL9cYWRYWuyUk2Dda6ARqQh",
  "key21": "N29vKG6aGs3MWDgrExdJfpALH9q1b9MU5U7ouVGhbE4zaz3Xc4EC9yrD35jPNQZhfXp7G1uscrCLAeNSSML5Dpx",
  "key22": "XrY7oxxAReN1HsSvHT76udTNZeoRDGUUCiL2ZFwQ9iui4REMQZp81FMFErh3YAmPhvEh589DxHknhx3nG6CKGBU",
  "key23": "4P6Yck2EKXjU2xBmCWyfdpt9c5w8M122UwQRvxqyZpNBVRLiS4hh8nY51pFawY561eXcSu7iQYwkek8xyjvQvSUd",
  "key24": "U6dPYh4X6QwyUoRgE6sbodVkGTPsiobZv9Dy9UznLDyiCDwZH5J5aLa6FNxJwP267PKysTGxNswMiENPd9VbZhH",
  "key25": "CJ7HPF7Htgs2SDpQZwZhQ1tmGyPRYsvYtEiiqehGVcvCMAq5e7w2vJGwroG6RaCPct3WVRKVJZZhvW9MbgiGtbQ",
  "key26": "5cT4v7DhBG2rkMyL9d8LJmos1m7Zbb2FPxDLcyQjzXLGN2kotMbMmUcnUicDSufKkQFKBqhjdykp3Qypm9MuWpnR",
  "key27": "2fqanrSxVA5DDJvsppeDonbieZT9xe1Qf7AimKPvjkUVZ4XPn37uz8qA85KCsDxYCGL66uyfc83TkhASyejKdxhh",
  "key28": "5ve8LNqrDN31LXjMbWy9G6x6z4XqUQQCthLvHDCv2UEpnmieShYiysabuqBwVjejYiKPBc1xkZATh18SKKzcD2Hn",
  "key29": "4upnT75bo81i8hcXrnZsMzKVZV5zuTDJWPstMZsgWBjyzx4v2bMfbQ2cG7NiVhWwJjrMRKEgpq1i9oL6aGtjn7Hx",
  "key30": "2yRi5PMzFFcdWZLz7u4UsM72Wf3rwMkwEiQ2ZWyKrzvtXBde6DUQV3hRh65uhds2XePZ3X6qa5hFPNYydNwudRto",
  "key31": "4k4nyhoFFdh7jh9cqYez5mtWcbSnKtnCJmvEHkPm1gC5gEaKqJTFNW3UfdXJZmfKSGfZ265xMpqafpM2LW1Tbpd3"
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
