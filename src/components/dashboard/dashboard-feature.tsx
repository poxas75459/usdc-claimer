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
    "3SKcoMx3dZKL35wzfaHUVBt1DPJynu5q6cP8RoGaSWomhzPk5nXoSThUGYkLg8i84xLueCQdFFPVwHpif9anN8Ly"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bx9bsGLUMmiCF3jsAbSzhHWxAv1XfKuFp7fhepD3kzLca1rpesEmpT7aahBy7PvnuBpAoJr6CBYuXrPGFyhgV5T",
  "key1": "ktjSnuRQLnKG5sp6PwbN3HnKmJV4zJqzgxpKycK18oeexSozE3Sqc6yEg2Ei6EmT8YFhRvp3gWRLAq4Ejxm2bRj",
  "key2": "46uUqvTogm4c337sJmY5yK1kQCCUEk1nHHYpkmBXwnq9PR87cem35YdhEWEctYPZiGGwmKnmkXTaQu4m7BcsgoJf",
  "key3": "X695VibsLqzfpnuK9vV2SkRHGoPeoBkB6nzaoXpHM1qvRf4G6rsrCJ8zwQ5ngYVYbQyt6xMtKYcdprbYrceuwVB",
  "key4": "ohvSe8o5zr7Abu9akeNqmUwUHAA7hogszsyeKzrnyzd6UKCegcEe7wXTVPPefFi1dxxQLUoM8p1YuhBgGBGAonV",
  "key5": "2nc6hsmhYGrSaDYWg7CY7is8Dr8gMe3rt5X1gzftsN3ruRqPhSrEHMWX5unwYFk25vKTrG7fC4r7aqfVxw9trPPb",
  "key6": "5ACniCZQWXgqtJgwmMtcTWAgcSSZ5JT9GSnY8d9UtriLrnba1WjGvt7tMNJ5cmKxbRsPgKEzer18asfbNL74cBN5",
  "key7": "5g5PKoHG8XevGb4jtjGtamjJaKR7pGjVD8fCZcgawhXVwEWTuEcU4XdH7EYbjGPTP7GAUwFzgjK7SYLkvJiFqrLU",
  "key8": "4HrQUgfzFZoQtsq273tcuYrxeKP2dfD4M8R45g452HxPiT3BxpaPFxUBzLrZvKY1Gc4hAZsUfqAKFTaARXbmYjpF",
  "key9": "3sUPFpdaAitTjmHWZRNT9cVeSorUjj5ajTPUTxyzFjHUxb23rg3zQACwf8FJdZ2XoC5bJ8XoAGasHgkHXjh9Bkx",
  "key10": "5bdAnaL556mnjEzEgQUzeYPNW4Xc7S2orTGcskfJ3ca5RHkdtrY447JDKjS5J4AmhXvLcEP6FukfuduefYv8d1WF",
  "key11": "3aJN9BHKkaUtYdr4wnqSuFyArkgUt2SNw9hdwMQeWC9uQ5n62mdx1QeaBVGYbUuNj8SE37GJMpLd2sZzu3bvKtqw",
  "key12": "2sP2n2GfNVpKz2jBjmSo3pdx4F33hMJcaHfYbJH3JXig15vdRtuBJh48JqiAZk7VY1Bj7tb5pyjqFBxh9UuDuiPW",
  "key13": "5JdaiwXykugx8mnqjG1gGCw8vx3hf8WFvhdJGnMX8fThVc1KYveGF48V84P46rg1qy3fB84BQV4tUwmr2D96nAmP",
  "key14": "31jCUXbK1PWQZrQxJ1Qq9GgNArDT1kNVHJQtJUa5acuW7EbDyFDPL8VKydyzank7g5bAv3sbbBfQfXr1gzEKUHFG",
  "key15": "5jCe88qNDac6xuV6XEWnsPeimu6CGEajhF2z27JHzHQx924yrB3FrJ6w85e91tes3N3vPFbucqKuctnKf7tEdfc1",
  "key16": "41v8dPBTp5Rem2t4DJ52UckuaEkXWeTsVrQZkraVYe7dZBkHaAqd5m7qiuujhqxAPBDs43RDBbJ5LHrcWv5QWtVN",
  "key17": "23i5U6XFQz6HromeDiibTLCxpYjT5SUansSjXs6XtP34TrtnZQavXp1zgEvSt1HU9wWCbu1KL8CkQTT4GmMH4fwF",
  "key18": "27UjbLRrkgzERep2Kau9mzN8XtssLdHQhtZR7i22qPxhCJVNtuor3Z65s7M4sGooULkYa5bHMTUFPvXpFBFviGvN",
  "key19": "jeXpCEmrdQG1CwfWYpGwxV7z3j8EmjqeCS7Vhskd6Y9Byi8vL5MNtpeFDCRsKnFiXQZtmwjVDFPzZxxdeQi35Py",
  "key20": "131Hrs8BPaf15hLBWMLPbpVEgu2iHzetx99k4RXoMC2UKb9DeCvmhN8spwVFS3YuHBGapYfuS1rM9F1R8jaC8KR",
  "key21": "4jqCUvHfpPwERNhJgwAsMN1LdnyjvaoAaZnLsptCkLghPd84ZQApYcCxFxdMToipfpeFqBwPD4i2oxygVudpM1VP",
  "key22": "dhN3spJrD3h2X4JbWWmDVLXRHtxQsZc3GCybvEzinWD9RZWwbiPbdk3XcZ5qFNXpqgTfViqxm8bRKFMZBDMtese",
  "key23": "4ysswjTBZKeMgb6GxvHRHrJwszajVxsx4MfYMcYF74kGM8Kxi23oeXi1ogr7orq94WQ4a7GYUGV2wFQmteWaxCyD",
  "key24": "5E8RWPeSJVmzhgZ4ZtzKWNNVQuCwhXCDWaKcVHznLH58CfYvqnPzVjaFpckSbKcE6BMLh3N9191og8Z2MvwtA4Hb",
  "key25": "2T1cPB4DZTSUVfHw3zP2kQJyu9wt5TnUHbYFTH9SR8ptBMmE61mXHVcWL9o9JSUamnGuBr7bpaFVBP1JNS8frm8M",
  "key26": "22bWetPDN2ZBiMB7agXH5WXyS8ySLPNZz4cLUbxUXiMfC7TzdvqeJ53YmWwooMPz1EvsuYFjYNf1jisXe2QXwJfB",
  "key27": "2e9iZBwf5TKaRH2J8kPajGyJfzvuaocxS3Fe9Y6DS4rNHniqNuwZJP3w9vJHDReNvgx5o9L96xhRLeMckyMxn9zm",
  "key28": "2cMAQvf3krbNxDygWSYz5nVtcV24pj8Pa7SbKvt8tCEieNyZFeckaNWP1LZJrdi9nBLUpbGVYmWix7UFFujyh5MF",
  "key29": "2C7R3h7tAYgKPENBzDSeFPJRrNbYqnYeEUNknaspBZaYQC6KACLyBsrW1UL94D6AAKFpZqqkJ6rUnCS3mRZjtfeR",
  "key30": "34UxkWMv3mcQXRBY8b4BtdmsXBhG4M9vwmzhUyoWXjpMomfhmgQLNbgWhjqjGiHjfeG7G8hVERHjUQLnYJRqyn5u",
  "key31": "HHqdkFeZR8Fgry6zCoEyYJPdNw3ZhkbCo2ePz9j9zUJRd5qDyYjZwAbT2fGTJgxsp1TNmDjLDaZCgEvUyu8gLbk",
  "key32": "4jcM3Q6qv8QaRmsekNSn8s9SgZwr9LqVXoGXqLmxTJeMP3EYXcFQB5xq87uaX3WNSvjtDt613U45JrmT4djyzPA5",
  "key33": "2s7jroSdwm6cNcZAYJYkE2Ny87QM58Jtka2NHM7cubwcYyLMWwLxc4zDYZwf6Yt85trEeDm5JZRkig81JGW4AeFA"
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
