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
    "23VQ8Dkv2SmytdE35d2eeQQR42XsMcToKPqhcc3LaLyuak2dRELn22ewZUQXW5RZBM6cAZjEdvuH1HyevXWT45f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JX4bH5EHsHDzw9cC6fT1iVem7eMWzKM9kAhsdABS4VmRp1CMedhg23Ks4VnTgLQqyTc9UbSvEi5p9QMcFfF8jCm",
  "key1": "4aqVwjGe1sdHac987ghFRZ8uSPazs5iB8e11NDKrdcfT7ViyC8KD3YPX5MksZZWLYydmVXFeNw8Lv4cnE7PhsaKC",
  "key2": "2uiJeGmrifuwip4XGnKnQak1nsyEnsm3sjdgjy5AjHZa7fzSrh7MK8EFsBTBvx4Xb8FJEiQWeNgG1i6wPVZG7MSc",
  "key3": "5YfK3P81DVA26wydYtYcT2fPJYZRRDKECKi2nrdWJvg9bJKdvhzpMMNpxAHmwFtg7uCqffj4e5SjkhgvWGChetwq",
  "key4": "5m41haQxhfJrZgJvGvUbZHH2PjkTMSTtiwDm5XkXE7bFXAqe8HwEDjrmE7VMU7X76jf51q6zwC1eGbMHDCfFgzbT",
  "key5": "2pbzrLDVQBy1HYruvhj41Hgbdtw9gVzmQzTxRMQU5c9yH6Y9i3EhvazHqtRA6mUDC4BPNjbeLShtxCWNBS1Mt95V",
  "key6": "5wxwMMudwJLdFMxHKjGm3Q49SueroVfHLNPBo1MB7e18VU2wFaca9mEwRpWiqjdQ99GWaRrm6wYexnEdTLdEbdUT",
  "key7": "jg61ynwNXaerqTs9ZBC55SX5fA8nMX8wKB2qRxhF9mLGq7uFKvqkV2XgmWBsGfSWx7yUgHAz1GY7zq1WjMhkzsJ",
  "key8": "4AmGhT7trmR6qjPRYKqkE1XAks6LNjxTsbgG2e1vWpAhPn3rXKRCBFdPZE7Cn78mWhsnsMkCL85fGQGJtmSiNsBh",
  "key9": "2wseNcE8SkMYzNjo9HaP7Wast4ghWSDuthu36KV4NUoSsxqmv9gynzf2W5ZRcQEv9mBjoSpnKjoJmrqLgva8fuZP",
  "key10": "M5Zz6dPvPguaQKuiErpy3Jy7eadBR6XPxASLp57VxzmjGpeTKqBx3rpyfRM9iFXCXivjRJYhbgrzWmVRSVULBSD",
  "key11": "kqmJ2C1TXPTSi97ybY7h2Yurt8MVY1G52mK1mCLtb7XWU6TtNdSJYnfKL2Nneu8s9V5CTwwZHveMMLDC8iVNFDY",
  "key12": "P24ujg3QKR5D7Tvv6SMXaqFzKwwgeUnc63UyXXFsTcDiYSXmGCTwQAyYJ1vMViY87eW6qAJvS3PWMhYPfzALFkk",
  "key13": "2ho4DFk11GJTy3reRgLi1gNBUNEfxt4jMneMCRfTonnLSQRdx7p1wNZ5612ovY61s2sby7TxX7NDAyAYqnuJi4Mx",
  "key14": "2RSG77vChTmoGJhWJKDQZsrs8TLkF5ubJ8SccrVfHk7N7Y8XRjNNSpjBSDr1GrmTB4FzJBCaQLRzHgt1K9HRs1hj",
  "key15": "2w5vuHKbHLT82oznwnofub74m6Yz3Xhe9UVau1JfEAMbcfkNarK3TGDL5bRHCc82S9ih3ntoZYX9ZYvwJjqagvJk",
  "key16": "3iGuRJrcMxL7MapvUzxBKUsGYgx5YYtD9EYY56AVX3J9zuS6F8z8NMxSSJTxUgpo31KzwWoTmzxMmPHE37W9LW53",
  "key17": "X2YWf2ZYyR5Tcha7J8XTe8UV8EA3snX6UoBHYw75bQaiccbV2XPgg8aZgXpvHxXmk3wLwKr7Rwp114vp54KAStG",
  "key18": "567mXpxk51B7LmAKc2oxesvg6JjiMcVq4fm8t1wbDai9XEnxA5oi1k1qtmBTXTbECKRZ2vH4tuwBv14rnDoo2Cwb",
  "key19": "4uRJ171BFQu3BvaMienE2a1NGv2uBFcYP9X9oM3QNSgANMf1pz243o3R2mk7ZWDm5R5cxuKC7eZ1S9hGcowf7g33",
  "key20": "5bAVcz84mZGRWLKDrSjgKjdnxdwT2q9pfTEMTYxQDzV6ABVk2wYsVCo63hnWjTFJcqipRRxC4xGiLogYU9fnYSvL",
  "key21": "3GHVoc47CSjLaK2kLdkLrJpJ8iWaHnPJJEQrzyiWcYJdHzeCzwc6SmGCaQ6DBkG8QeJqikAteLL2nGYEoiKmiwEr",
  "key22": "4zkAzmkAsZdq4wKAUgrc8mmZtfDvmwS51AKzgei96aQuKZNUvGPLQi43APekCg9kHUy4u23xQT33iWt8WChBpQR8",
  "key23": "2jcKieNFexKK77beycQezL8G36MQzAUV6d2UWneM31VD12m1LA6h9mEeADTZRP9uArHxbgNvkGQGavSJcXxWEKd6",
  "key24": "62VPKUZ9CZJBJ8icBckQyRqZVXjgPTBcah3MDFLZ7oAqyx8ZvZZvQkNS1AXLiXjNLHV3LexQoVUN231URjxoUBJS",
  "key25": "2d6Lxy4yUURUQZZwts38r3brE7yj4xuTtCAav3Rt6AuyVEvPn7PJ4cBeNUJRB2V1VVsqdjUsyRMe9wszy3CvoYLJ",
  "key26": "5bMsjPYMPJw6oTFpoCzTtvTNZcRzMW7aaJMsyE6hCYLGv1h9Uyrog1hw9tc7DcDB1iCxBB8cqhzqqnQ6fwHMhmRy",
  "key27": "5km5mw5MBbvgkqRbj7BsqXrzPAsMEYUrWJCb6M7kpdpprdUWpjFowZhJxq6atmeP7ksYByApzYzjcbHtFxNL2cNY",
  "key28": "2WR8kFtLRd54LmwpWPWpwzJ7QBKvmNr7WQb2cHvn4vkG1NwJrwxCdefyknaLc3jng4nuLULcJ3fs8LhdzP3q1KZV",
  "key29": "5Tzg5cHbdmThTyrctBTemvz2muGXDvU5fC5GdZJAhwzwf7vx8fwftd6SitkxAJ1XV77EemRfzcMsJw9HiSAstFDX",
  "key30": "28FLpF1wMYCvdcnPrFd3YTYEJxXYS9EUXLGQm79bAc9q6SitSCVFhnDuZ6bU2SsKK8ySVGZVH8n9AhFQXg7sUm9o",
  "key31": "sh5H3qQaFChKzDnRS3VYDnsT52MmHVBuuGoxiNqjLJgAsyKKCLnjG1t1q12NzTT7mJvAyY76zYfjC93ueqoRh3X",
  "key32": "5QUDdrPYb8sFVoTPhCCp8xenf8wZUBTKK5NxfqG7dPcBef9aGhdyNLtpxf51y68wyv53bpUntatouWoxwZmgXcYA",
  "key33": "KAHzUWJD3LtoFg8wx41iJXeEPRH4AC3Wuw6aiaDw8d5AUE9nShbSiYo51Eq11cmuLDNTBfqnSXyDhA2SDTjGWEq",
  "key34": "46QrdAqj1mmveg7xceYk6hcJavZEKWQzwAeDYDzYL2byT2bXrK8zvDMRcnFax8L4Wm54LUXgqijF1zzNUcGbvbNz",
  "key35": "2dqyp34p3EzRy3AksJrkxSCEA8wSbBWeWAbkgmETNzhdn3SDzW26Su3nuNptUdj2DgbUe2v83xt5Pya9AH9iKocv",
  "key36": "3B9KWYw33jT4Ay5459qqTDWrRAHDKHA5CceN1oM1jLWDBXK4K8h4EjmEubBfs3U4jHxgMmLf45ZaMnEc5WdoBQFm",
  "key37": "2gUzpCNg9275HKNi7Gi4cG7zn3E4Xd3Nt4FWhEYThSiDbzfzDQKLw9a1LuqjwnuvofYw7hdWBetu5n5Kda4xVtro",
  "key38": "reiPsJiBPGU5gGUMrkDij84x6RstP2AAyg9PzvKhsxf73PhXzc5Dz2BwwnoQbA73SzswicRebDE7tkvKNHNKgcB",
  "key39": "4jT5BTkvZZVKbsSJFV8h6sTiKEHNe2Kg65BkTx3QvbSgRnw2a5FuzmLewBgCpoUeKV127StSfB84PUzUXwBKaXHU",
  "key40": "2pqLQdGzZkDXfV3Jy7rUwHFtC7SPaFgPn93mKaMWK8zk7UWFQTVUFUMmFDZLQhmC5FhENSSEwCFxe73d3iK8PxWA"
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
