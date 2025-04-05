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
    "3nFSmUB8z4pkVX8PhJdMRLanSXvKC3iM11YyK2XcwEyWhUtVvBLu7F8DqZtx3QZCb4VnyRWYyNLLbiNgCp8Xxxs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5xGr5B7nA5JtAsMWNVpybZKBVK8SGs7K8DvcDbuSGWXSXag91AdVCRrZk7G2TH7CCAfBmgu8a5WRZswuxtA8bM",
  "key1": "jAVzKFS2t4uU4NTcbzu6w9uJi5frDU1EQan3cXY7CwyLjaBQpejD2PcDqZ7obUMmqLFfqrFLFYy85cY393Fy5Qb",
  "key2": "36WmcQ5rVpdbPcDFcxeAJ8pHn5LpcK9T2aY6XD3uadAtw97EVoLk3dj5FPeDMVgRtV1bFCr5fTfVkZgXvpw87JXZ",
  "key3": "2GuTSeXsUv4SRjjXPo7Z6k5eH2VcHd7aFU63XmtqLRFC3CBhqFSVXFWBxVwzpm5C6kG8ewyfuL1HcepL6qFaPU6w",
  "key4": "2ZiYg9Zm9E7ksWebZRb7CY2xTFonY8VbQm9y2FMsqCf2HQEv3enh5azWJy6EjKnGkuZGM76Y4u56NEUqQAiXgCKT",
  "key5": "AcgdGDsHhmQ6x16qiBKrVBtsbj6dgSRB2ajSz8LXCqrLXoBQ3Q8gephXGwc97gVH81wcMg89SFVjbkeA2nKJ6t1",
  "key6": "62MnbbHWKAZGNdyMWjWPM21g34iHsrj2qJwD1RukaYsBcwroMy87QqeMdkBkinuGbyyNaR8NeVykRb67S7JD4kP",
  "key7": "5iuh3pZoCd2i3E7eELHJpcMet18yfFvVbbL3wgPQSRkZGnh6PwBwa1EoYFYYhbx4LkzStWmhHJxyaeFDjjDv1DFC",
  "key8": "bVD1LmiPCj9RiTJBEA7MgPi35yovQdVe3TLyCkgZwZFknCox5VkrXjCVuGekWBEAHrjnVVvPMnEkCo67sRDYZFq",
  "key9": "4sr2CgX8ZQ8MNEVFFvWDRD2JSgDMQF8fV34f1BwBe5ASsk7gEMj4da8U1sHXPe7hFUDjSpUjzrKV5LVg57V3pg9C",
  "key10": "2Xr1nDpBdLFzFVNjLBBK1UivmPViqvgA3qe8FdXrbHDmg2A7orFxiaXMbE66VVPeQV4q3FZdWpQdzKpnHTcjV48b",
  "key11": "3KPUA7e8hVg6fZASigpqzPWYmf6KqpMzVUu5cR8s3Kb35JT2nSW5BVXqhnYqqg5vCUMa9tBXRz4SZhWMPVkTuzns",
  "key12": "eExuvAQKUhjoPqsw1Ch1qpL8yCLnYp1XXeowZ4gxxyk9rtcTqRNhNXGnx3zoBP7JVuo9auVE1nsm5i6bcgUpYXM",
  "key13": "4R4Sb3fPCSCiT34MLzA2zoRkZnoTAw13pAjohskAL16xwQRPMGnKYqGbLd6T4trVUr9MTTE2pMD9tZZvZ67bmCNV",
  "key14": "Ki9ZYupvZwx8S2VF86j8cg45qFoiiUPpwERLasLzvYJMBMxKz3NeRfR5tjcFBKukt8fRE4nszzBKHnDYxkEFJSf",
  "key15": "txWnEyQ83UoYCZCBckBFwXpvigoZ3bb8akT2ibyV5pUseLugLJEJSPMFKZ76Fn7RBVqVktmF17WH9uA98ARdUJc",
  "key16": "2yAwZzCe5qR35F92jZgwK5wVkVTWpg24DatmyMEw4A5yQj3y16TjkAcLv27n3BBbg1GRknhtkaRhZP9PNS2mPaH4",
  "key17": "3Q4ZW3yf1eNm5UdBxnWtsbrNksz5BLqZrcqdR5yVEh8c9dYXP626UpBU8zzvLgVA26oezVTX4V7kM4aZuwMWFvv6",
  "key18": "5MqUKvR9cTovK25ZDBtJu7oeG1j9fqWMiJJVaL9cn6aXmDr9NwfXmryk8T941hZauVSdnfsXUPCVSCKtoCTkVExC",
  "key19": "3cbDFUnPApd99uPfYoMkamSW6xbQxKDHf9EzG4g28Hiottg6hacCFdfE76aN8yBbK6LULmZgy1gDD5ZmciKZx46x",
  "key20": "5qmBQULzfUFm2m5t6sSvLu8BBmCvaEiuAzEQEYxewDtjMpjumBzufuqmsHcJ7EnmA3nizd741T9YHwRJpgcYapdg",
  "key21": "3VSbwMdUVjXr7vcoHeKRBQTUWo6TrJCckevBjvFh1gpsVrTy6YZckh7hA4zYHY5swBHrYsQsQD2s7224AXB3o4H",
  "key22": "5hD8eUCoipMqBBrDRc8Fuya1rzGf6FAqp6kB8vj9s5ceHBZGXLpScDQNTEWVgKswriXpokUzGBv2Mv4RHUQm3toL",
  "key23": "fZjvAcdHe9GpQhWzZEAtperczaVUrL3M2i7pF7X9ZVukDbAn2ySD1h5hqAUEC3AoC3hbq2RmLzn9kzc22jzqA2C",
  "key24": "636Nv8ogpm6XFcPMFkR2krWp6ReJ3a7SzCaLRWf3AizN5DcycVTw2jYXHpZuzY3RH2HiLuWbqFx6twsqMwJr26PH",
  "key25": "3gbcSdUMUPCaNqzFk32LzF83NFu3RTxkXasf7npoQGCcF1LJs5S1ogk1Z44B27KNwF5MRpcgHfpHHdtQd1G28ZL1",
  "key26": "3ztiW8z3SBFwdH7eixfmiLF6MGQR7oxnJ84TVRpAkpbnqaHxfJF45yfj3AZTtCtBXxg865arEqoKM1c1st9nikd1",
  "key27": "3eJsWAptnc871ScQiytHUgukQLWgj9hQb4hv4xRMXDci1Hf4avwkgpFzYjjxtnJXBg2y3v7e9vHv3D5LKvnjWCXi",
  "key28": "CwZhp7jdkufpBd1ZPGzXPh9knsQL35dRL61PF2DNwWPDCjDHV8Cd2Ssz6VrmhxQwsxySzLM9PT7TYD166LEProP",
  "key29": "5pcThTAv2eB8tdRp1Qyv8VoDhr7chXAVz6RkSYGxhTCxokp3H5UQ8cBLwiP7jRYiAPUSUTmP685DYuSmuSc5wBWL",
  "key30": "5ArMpVmA3i7GnJkfXDX9FCWA4ZmKYz6XzWwWxi4mrH6r4D9m1tBwPL7K9kggrJAj3Ljy1GgPyiBUyaowMJAfCnej",
  "key31": "2vedj2yVLqY7LMRPKhdRJjJsHXLju2v5T2Fmj5aL6zDSNxwvW2hFk97AKN2Lfz8ZuA88mndxXXPevMUqDQ4DZZVK",
  "key32": "3jW1fxfTTbJ5eUctL3tH6frJ4ZwxWoAro2N1xUksevveW5FacTYzHTCPjHPYPLFotH3ASZhvr25CJMxGhUacP2gy",
  "key33": "5sjQsZe9qMeR6uYsSW4vJx4nqVVmLZ4kRrWzJMpECWEQ5CPu31VyXVLikXSLQtKEVwzsocXTRoXqofev6Ws3HmBc",
  "key34": "2vKrKgF5FmGA14m4KUJDGvuDr8kLwKKoVLm3Gkx1a6wC7rwBsntY47n7LYAL51z3XPiJKKMNc3zzUae1BeneLSps",
  "key35": "2qTYq89LvdrY7TtCZULQdZK5NQC5DyvZYAriCmGGxpPvEu91PLaMN9wcwND9qVx9CUxpkYe3vgxLFPVWgUk7jb3t",
  "key36": "4iXj3VEHoDE1uAS4bP7dRvjPdA88LrZ5zGbuvvpyeJager7csbmu7EAGjjjwDtdPpicySUkAToksLMCj6rRDvzQW",
  "key37": "46Sn1QnwaY27AH6efhAk9VnNHwZB6PAdz33CEozt4YpQLeFxiqBqozwMR8tJjgvN31jjRo6uMnn9dWEi1GTcghf3",
  "key38": "31WozUcHVKR2mYpWPJssU8Bowc3EUopmeoJREKk3QMwhuHEEGcVbBXtYtSu3tkgG6sqjnYea31Bkyhmq5Nf3CMxF",
  "key39": "DJ213viHBjsR7NhEdrqV8rDF2mCVbmnpBL9qRB9ZvG13dEK5n5Gk3cqf2P8mThvXdamKHvdvkPksL8nnCYVpzpD",
  "key40": "nEActvZURpqksEPS8tCELqfLMvkv8R29QxkNwmsCZbRk8rBevxaYjhTzYWAaWZED3YwC3eAs5kv5ALZqSJkJDhW",
  "key41": "3c6946XJkCWxjyxVYJZqVRprcALZexEqqUpunYcDoiUh4wEDWiBYce5XzGxxr7zqww4AXW58NE6EDz3pSeqq7ZFh",
  "key42": "3eh8aL1UNbnP45Ztxud6RURAg4iBTMicHERniMzhkBrwziGbH6zXWDZnVq8oE4KwnnVh5RzxgrfrfWzEECWaGZTV",
  "key43": "5yyK5ZPdrDiwDPSQiRmPPYLMdmzaeT7hJEsehQcwaJ7SY4uNxdaZbDFjtSojspBknYd2dAo3yZhABAW5fSVfWLML",
  "key44": "4uzx5H8xNGVxn19VUGyC77njFpBWfgxgRjJ2y4ZFi74vL3fBwExtJ9irrdVNoXK9fB8YD8JsuPLQEdSyS6LzXxby",
  "key45": "C3VqxemJyogvKjhjS3FNHVBSRydnshZLQXskgxFrcqSjnFLj2Qpr8PqPxLhFpjzaGcfEBeQMrqwV2pjgieKCmRw",
  "key46": "uSmkTZCFkLczcejaNshAvRKpdUMMTQiYvN11QDMnqUTqGS8juHCJzNdggyzBkMbTGR7hf7kmF9v5oEHXvnSN3Cs",
  "key47": "2QiyxiAEdYCGt3qNu2LYW7iBD5kcUdvdhCSj1WitVWuN9KQYfM3nH3ZU1hsxAAw5CSRxCLgMfyRvSE13abRCh5hH"
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
