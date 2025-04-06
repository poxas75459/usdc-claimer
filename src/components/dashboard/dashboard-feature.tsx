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
    "5vSXvS47QrDbdTLE1DSkatAGJtokm7HtcYyxNRVMvctpMy2NcEmKqNzet3imzxE82TyKEL9Xpru3AWh6kjap2aEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gag2rJ71musr5ygqJVvS1fkz8XmCP5emWtRjaidDjCz29Hy394mWdzPXNTgC6ToWcdENdg2GA9CSXc8E1p3EYT4",
  "key1": "2hqFnC9W3bkwMbn25ocb5oVdRXKUbX2U1TieEVgb9ZW2QNBKHQsmgXyN6uJ4ev5gHYEpvXuaQyZ1cC1SpNm6g1YT",
  "key2": "5et3kRtwZY4gBbWFk3oVKU88mFYwGSCfEfPKTCgdSAAjJv5kirGPWpmYKSePoTueJU64DGVJmYsmbDES5Dcuumxt",
  "key3": "2VYLuPHhMm6J1qNro898FH3eUF53opgXWs6MunDdrzyWAxLCKM7ENaDUXEt2R8hdduGh7LU5rVPERgmYVR7ZKDa7",
  "key4": "8v6EPJSw7wv5R2oGzJkPMhxMTqps9dUEcwLBZ6TTyrCQ8vNgYWWqYHCZhpYDQmGsaeKjm7Vd5b6u8m4NeTdsNgy",
  "key5": "3Qzi6n4yHZCmBFTngktfdQkthgngut2VRKooqBjv5S2qSX9ZDRW43RGcnEmdDb2M9spsSdbQqDpKJCR1JwjKj8gw",
  "key6": "48k5BgfkRRGcfaLaa2S6Kf3Ba3uAu7ZYeKVqRD6oBnRmRKn4wEFF9xYe5XbTsd5xBKgGXWXYt2Zt9jtNYp8QpN6g",
  "key7": "2juwvWsaugQadkWULsULVyurCZCXqoeo8VwfZYxuCzh7vuGPSKziWCeGiJxneke5jB6JTELwkBsUT3wnSTWF1vx2",
  "key8": "2b7tMUuzvnQV6Q2JZCgqQ69mzSm5pbByHcQ9DKUZS7Fi5vAEXanCb1UPPx2USomztjEfCjTMxJdnrN1kk6UYwzK1",
  "key9": "5KJBDa7fgjCPPx1uQkPuWPDKXCb2bGWF4bukd4MAQiCHHpc2fyTqpj4URjmBrphkXVwQnwJB1Y49JmqcYpoiYVfs",
  "key10": "2AsNFD6eBpcSCkxveBxUHMYWHFQnAdjbUhmDtkwhP6JRc589bdRWi37Ayp7koTZqvRcUaoLEZbtP83sP5goWZPFz",
  "key11": "jdJ4Nh7UNv2rhRctGhu8scxKatnFxaYjU6tYdjjwx8u4e7EGJnqKKZaN7wXbXmv3mpHoSdKztWhwW8mU9XUzUHa",
  "key12": "cj2ZS8uvuK5S5397yD6179Pb8ksobyavTvJZkzP8mJD5JRHcd4RY6ZknJkMTnncgTiPgLaQdZuWWM1nfKn3r1DU",
  "key13": "2YJBtuAYjcCVFvwjAfuDvfcDi8QvwFujpKrSdZUBzC19BAUeKM4R8d2KAqZ32stZzbm6wxnFcVLd6ihLH9RKDTD2",
  "key14": "4dQaFcxmsoFqy4QtKga6ihVGMiqZ5n7Ggzm47gkTMCVrJad7BwnWYkWVPCkVoMGXSo5MFdvoxq2WgjqkEtLjhmsY",
  "key15": "3xJkJLt81cUHKXJUbUAuNfeVzgQg7bggTZgpEcs81DbTvxUyHtntTsssXzcuwN7CMYpvNG4JoQY1JRTDAqehNUe3",
  "key16": "2CAosiwPXz2pugqo5qs6kxehc6n3Q6AeqnXiWmoBheaND5TVz88Cja9LW9YVLuTDBNpy4v5JM5HWw1kGBithx9Bj",
  "key17": "45LJKcGEuzfrt6PYuPAN9wE8nUkRw1YRmiuG59yjdmLJCmZv9obNDvkQEavuNwDixFHAfejc2ps3e6YkPosC1jcj",
  "key18": "2SQZYhdW8mfXhnrcuX5pFVir2hTCXX2WhEi3S52TtSQKvgoHF8sxmwf1oYphAFmaF8YNaxTw6vjbXYJSPFTi4qS5",
  "key19": "oytETSmTDgEMvmvs4b9xr9fLiaw3CPiBZeCzTzz1carNVfArhc1zDymkv5cR5xvTLfNLpoL8VQp6K9cNAY84coR",
  "key20": "4FQvivtQ6XH7LDX9CgZVE3ppuf2skW5qnH3kByJGfJYnk9CcGUS6YfUMxxpwbNBtQB7Kaq1N3t4y7CJ1TGshC76T",
  "key21": "4Y7uGzMriKmmDLeZ2WqVM4i7gCc3t4uzDJaCBtkPqtVcXaQzDthG4qYh66En2uCX1W3qEUQWsAGb7wKx3g4BcVdX",
  "key22": "32sfbCz9voDUkdAkVaLpiMXPLBa7CSM4nN5rZJqxvcAwx1K8i38ntNpJTgixGmcnSBFaVjvN89ZkHcn5B8Y2eoWP",
  "key23": "44EnNd7rpeLaKDFyfB5CteCn3TM7fy2DEax6eBZwoRtjozUtoh8pyuzRjzimNw7o7f3AaKgeQxpb5EKVNG32cVaS",
  "key24": "3r3hn7gR1cni5XN8CjTfbJZYqgwhJMnmDDo85bXwoKwkvhfetKnFbKFhtFBmCoqRJUU5cAwdzby2VcKZYCT8sxoM",
  "key25": "3EHHW4uNHyPv9anAkqh3VmTpEAMj7Qeag1DZEnebGmkoihzGCexgTWAD8uqNHiwcx2peuW5Y2G4j3JfXkoBBweMq",
  "key26": "4ig6b53otoLwgUWc1kq8bXVWtz9Qbu99ozBtpej5RbUnBxfwxgE3hQLuBumRX3PzAQRx665YbvXwu6mD14p7VSHd",
  "key27": "63h35XU4DXiGXdGXR1CAP8jtNizRhDXzD2jfadqfVzwdJBvvtR6gUE6CHwWaCjh9GEggYF4DEkL36Crw5DeGVUPe",
  "key28": "3AXSsWcVRrXyKeW7tzbfggkwZTgmfYacKL5rG1nVQhkEVfyEeLXD2mExBVkzJjfwqoRtScFwtkrhVHsboP2z7LgF",
  "key29": "5sK4S7czaTHUm9m2hw8CqfcXoUEx9QFXBt7L6aLF4ZYuUVncC9G578inTqHd3tdTFgNd8baQiwu9PCtvyXwPWdXR",
  "key30": "2hhjepLtCo74ddY3hay13X1oVdCW4Rny5ppiQHWH796YJSQUYVJ7VSJTQFrwaRefuYh83W6htkXqrA3YGeNje7b",
  "key31": "5o3K5SjTbc7Zr7A1MCDxaBhKQvo25juQZN7YcBfBbu7kBASdvYSvH86fp1r1Z8sXQbruHFgUyrX123jQUD7UpGrf",
  "key32": "2K4FLMxcRsGobY8xo7zz81p3beqs5r3xU9gLRNCRSNz1cQemBWgkWXqFwAkdnUw7iUVEpBtpW3vUzBVAx8NCf8Nv",
  "key33": "2SsWvCSxpaQ1ohWDVgYNfcWgwNCFS3Shsyqt8AJZqsAMxHrHJnUaR3pwkmTGx87Lgp7GzqVGBQ3AQYZYz4r6wQU4",
  "key34": "5yGHLNZUg1U7QCm36hGvkvZxBSn54d2JMerWT2y1ufi1RaKmjGdEpe6iTMpDEoL92gWQupuQgYRRvyLFRTqKNS1j",
  "key35": "2NXtB9rr17agg8NdKBVgT9XLjXtRzpPtTVhPMgzj78jyZd3mUUK2RpnKGct74t6ouN5FszyUsqk8vahAmwaEEwry",
  "key36": "5CSReTpcZBsFbCBvNPzVqStL2TYKXHn8apKncLj6TPn96Ud1tK7rxQuX22QtDWEmLFPVYvDLcnixGCKj4ByAajMh",
  "key37": "5jakqQDDcrYR3nWUbkQmLkt2LG7JMDdaNaTx5KpbzcPBxdc9DfgUdu1DMuEkp15gRn8JHVDkHfU4zx2PAiNkjW6H",
  "key38": "5zXk7VpZmfG8gEsiMpHxTTEaAA8pNcHjsMpNGUka4wqRCiEmbCUfW7q7KHDMj2mR4TEb3QmYj4DBA26gEkd5hEni"
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
