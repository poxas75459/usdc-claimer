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
    "2bJkRamaD3gns2xVTNvUaxSF3HA2iaeg468GA2yRmnmPMmuuhvbT6NQtyh3oYBGa3UFZDte2eQovRtCHJGdz1E1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TCYpY9PEwoPDzRFp8gU8HjkBFyfhCcseRq9wMtJpJCs4hSV1YerDjatfVFQxpVyQnqTEiB4VZ8nnhxGoEKmj8Fk",
  "key1": "5ozAGoniNeLWNgXueDwArgv8rN2HMLFgmDGk4pjRe6KBeXyt6CCL37yTL3mQNZKkxUbGQ14CqSFfKm6QrTLbSA8N",
  "key2": "Yk3btZSRLE47Qmw9gdzknN6eQZKkjnT7yVKNsh5cukbyUBUT5Raa5jfTX3VMjeSnM81XwcX4YPh4e7dZfUuCmRP",
  "key3": "3hNjfgBMtVNRhGRbh6kpkC85R123mSPqmgu8Xf6eJsEYR388UZpP8vqA7Zw3AoSMENyaFK2eUXXeDHqCRiyRH8tU",
  "key4": "28G37ekCa5CZjZVM96CyhhFD14E9mAWkHYSB5k8hng9u38qk9oXDcrxtaCNTWFww3CFY1YB1844xwvPkNEj8CSTr",
  "key5": "3vPLQne2v4vHRdTArnKqCoRFHmbx88EVFEFFFjgZTtF4m1RhtYxYqaCcPiuPDPCTtkvtXo1Zkatw6qmWuKKZeeJE",
  "key6": "mX1aM6wdBsmRFcao53f52DTJ2zaFeaQVyhckQZPedjV266kQMLuWvrsHy2eNyPVNrjoxethZ7HS1zMZp1F4HjKg",
  "key7": "3pGpxHaszYFFgBHt8QxUHUq9L3A6Sz5AuJaGTX2ZyTtfacAmb1nNvWPXfgTtADtjo8e8YtE4TifWDn51a99mWPsQ",
  "key8": "3k5E2Y6ipqNBegUPPYpdf31NLvxH21sRRjpczdSqke85mDvqijM2Fs2MdyiRq6gxhAco5GnEbHQ2MCPLmZwoinRs",
  "key9": "32vwq6mabu2zPWDbfXf5QHHWoPNbs7f44fKJPDHiCDMQpokKDCgXLVRUYvTjyN5wpshXRTA5m3zCUq58AzPE2Jpk",
  "key10": "62BQTjK4cnHfSRWm6pSHtLX6UBUBiRY1aexDj7J9NEdFsmENqbkK6pDJL5uizrFc6xc2JBmi7JrFvGdAsmWo56LV",
  "key11": "2tKcgTfS7HGBR23rdbFCdxD1tQBqUyfMBERxXPsAaPCMjqRbEcmE77BhCCasn39PjmZRKUMHqQjfBHeqtyz4XZMR",
  "key12": "2xqvVJ3UnNeJVUmCGTWiG5bBbxSnuWuDirY9dR7Lys51YUMpEBi1hugWz5CjUZwwYAeiMMEUGQBCQbhBpsi6ggYX",
  "key13": "36E28yKxThZjZccBdtDPdBbXJqUyHEyh93QhRCvCxdMXDNSZ9NXkE5XzVrMSCK7V9xADiKgZSL13svyfdM3JMU2A",
  "key14": "56DL3wpQ9QQogfnxV1ideuDa1Mwqrpi1w2m2ASGvRRNKVNqYu5mLypbyySbXaKkJi9543iXc78f5PwhNZsxpoHB6",
  "key15": "31XuHXR59S3xMZbUELu89ru9bpQymwpybDXwHp8kYgnGmneXMVkthn6bze5516BVgEQT255uSxkui29deFqgVCAL",
  "key16": "5CupLGpAMX8e1ZzWzBug14Zr1eK3MmszZUpZRem6DH9SaLKzvug8gdsBXnFATzwmFddyfimvgCCMTJMBXK1LbhWu",
  "key17": "34xJjyW2RRVkxa9M8Hvxn1FnD5hUizfKLg1T8TQTimqYcNagwNDXqbv295CuxK19n2mb2GfMv7p6x61DEvc9u3ck",
  "key18": "4D4t6J4GyYbA6oKotiBx9e3cZddhCpEpiqqpD7XfXZvpvYPJ3AW1u81iYxhoqsVrfpF9m94D5SKNi2zLaMa3EXQy",
  "key19": "2uGvHLBcZrxa2DdgSRnyCraMkLNvWXJcSWeTZxUdKXw7wXFTn9XpDmm7XAh4DfJNt8i2CKm3U56QsinCmAScQQPN",
  "key20": "4sufkcF3p3TVNRhED69rX1LYxPfvQA5BEup8bL5c1RKdNMgL6nEPqZHmmSCQX5kG9cCZvKkx3qyTrf4DSxZXGaTF",
  "key21": "2mdeWmxQhBSaZCyToHWqyEGozDcG1xZx4JxX4b6ifDufnwaTLF6xRMcZcBzczhwCCtBsmDSy4EWRurHmmcNaUCyy",
  "key22": "2vUn5ycdanHCQMKG9ao47Cz3bBytTtCmJFwtmvymyMGzZMEa2S78NxMumqjgKhpaX71pt64S5PFTtMV161g8JwDh",
  "key23": "4LpRj1gWqAzFiAxJbESTDZ3vtmP8WuAiTCjcx9KBbYcfhRgMdyxb66J3RVA6iWHwSjzyXFreLmaEgoZGGobcWheQ",
  "key24": "2sQWLgrHntmsF664Cih683jJeC8fpGuVS4Qoyp4bkVxmECnVYmUFCpz8GC6XUj5MjJGifKtvcNTF6CF9o4bUfXHx",
  "key25": "3DsjYqYzgVAyc97ipBynsnNzcfJhQawKonUru4AN83yhwUFSRwfnBYUyGyV3teftwXR4DDs4tFvVRfWRL2vHvRvj",
  "key26": "3HgywFvbRi7Ur3y1Tx7EoY3wjtK85P3zQFNNEnUSWb6bAT3KQ7AQ8qbKt5z2XWsQ6dzDdYGFVxcZ5G6aBGHDJPfT",
  "key27": "5cjCAokG468YPaJZWcyw4CxGzkEhr5cUtbohiSDEmKKATHg4NWhaHN6EnzgUDwNz7Ev1chKDaxicPngKAq9xLwSP",
  "key28": "wBUyazY5CaQaoXYvJjhAbm7WbKyLWS8XZDewNRrSQ1jwagZvLmL6Jz8fDJewDVNAxEBoBLXFoLQhPYaZ6VgEyZg",
  "key29": "2JfPsh22h7r7jRJVhwP2yJRLbsbgeoRHTyC3yf7iL5QrEJBr8BdoGyLJ9qDmkXwb17Ue3eZjGXAqi6gHwA2nHDg7",
  "key30": "2wazENSfNZNTnoVML4mokUVJwMaV2i9yRX8D3ZBypjUgX4qov6Xrkb4D4oH4k3Z4TYySB9RqHjhjgykwE5gtwa9L",
  "key31": "N5Q6WfuWM4sX1axjweYaWMRYvsri7nwGqGpU5mBbGwkuo4ZBzH1wjBFZpqzj9Yv4mxoTLXnPZxhKBmdQxQnzXtx",
  "key32": "3sec2rzpPDLuXzBmTGs41WGZQa6hw8u7gxmi54go1V2aEwsgBK1AXMFVL6rnnyspzSnwFFnYZXt3ChHMDuq8dKFM",
  "key33": "4poQoidFsz2TBYUCrdxS4UHvjE4QVmTexESiw5foBoUZZppcvRxfQjk1JcCTjo1S7TES3uTn5HCQPJ4ygH95G9YL",
  "key34": "2HeC47AXLBh8EFFJK21KyQakBS7CmeAZ3EWMKBdsUYe4wSL6fH6Wn5AbYiXfJnoC1YpqPUCBwZgwMmvqYe43xtdG",
  "key35": "3XiNJCTtfwDmd7MRBhWHN4qFgTm7UpBqe5eM3XVznrnUpigsPjLsNj384JdJQjAf2GFa4UnXLm467JxR2N4yrFqi",
  "key36": "3DbRCWBhiDKdtoiXjTJQdTNDARqbcUNikJn4HGELEyoYiYmbtT2zdvuaur3ttBz7JcVoeZZ8QoAvsFQtqGxoMT1e",
  "key37": "26Uu9oenAzu9RAh4n7vVQjZJ9bRdLasNa5okXdrvQhkeWUJsDRffrd2k6ggiCXWG8DFzWFSUJVg6fyD4ay1CzVV1",
  "key38": "5jtwFzP1WKvU4VMMcXTPmzbWqbG88ndTLtFw4PK1MbbHTEyFw4bcT6BNCW6CUix4wnNphzTsHPMp5op8JXguHHg8"
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
