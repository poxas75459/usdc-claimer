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
    "2LnT6Eq77VgTYKSxfCJQaYXH51R6SRtt9VMKU3SLmhhWPYHD9HieVgNycgqt55XNsQqRm65MmmMoemnooQ62sg3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7qBLPzkCXmv2m6evLAkgZUm4i43om967SZUmDUGFRKomQ7WEs9w531PgDjzKVsC4aokdjbNC67ajCfAv9LBp9d",
  "key1": "37FtRg3JbTbAm8VJifqmKo9fM2f9uP1gZHFxaXocHsvoEVfvNZv8VqFypBNGV1tUsopN6WD4uczKrXfz9F2zuEPp",
  "key2": "3xxxRmN7sG82iLy3YXgkdc7wpMNmss8u544dkmnLNS9inJ3qeNqtazHzm7iW3bNsAXemY6qiJQ7hXFMqfgr82ULd",
  "key3": "4DXd6tUpnbbdvnxTQzR5a8w3xrqaVHxkPSDjYHFoeCivLxDsDDsZsHJu5ZVFYkTG5ZZoSdPRriWC2UNmWnzrBWXB",
  "key4": "476At5F7ye4WNAPrd58jvUYsHQMKMfwyL6iMNcJAwxwXFnvj1M8JHfQxk668dux5wP2dxJjtURQoNcxb97znKpLz",
  "key5": "m6bWhYREUxV6EX7Ye5oZaZjXhBri9a6NVNmLxqijKGzMmRuhF2Hj9KqUW2FdkoPRax1XeFiP4u3BCc6XRBakEAz",
  "key6": "5zbLGXhcWDQceddaJShUK3XQSnPvxt5qyX3Kvm4G5pY1XWW4BECt9691S3Ds1TeUigSmDu5gXJt2orEBSYXLSKgb",
  "key7": "dXbhbaxxVUtJNFgXizoX6f5z4b5oT8vWzvtKMZ58PKBWsaATzsr2iGCBNdkc2JW4xeePQZdk5FjZLoC7Aiir1D4",
  "key8": "Cg9jpH4mFWDiZmrAS2K5q6tt58bCPfYPVxmxBGzJc48Sw3U9UduMAgZTtsqxQdTrs7ymoyMbjNm3K4xQsKRsm6r",
  "key9": "4r3Fb4RpPJi3KXGpf2NhzwSTKtycgxzssbqs1YVuFUQ1B7rudutQcAfhxMd1ayYJUG6sZvCNT8YkwkLar1AQDT6x",
  "key10": "5nJMZHE1MYRfUQwTjv9TNRBUBEhDczR66QrCQVNm9PNWaiaonYzsQ3thkV867rWrUdPrKanbv9iprqJbLuv8B3jK",
  "key11": "4V24pSFH1Km4GZdwjo39LEmkXfRz3yecmKENGf3zyANS4M9AwNxFcD4fwmJycMunkfNpC3oHKKVR46RPhKbMx3Cj",
  "key12": "28ZFnAdAR4x3T8yD2ANH1JXxbYDPhxErZ4XvyWjxx5w16XEnpfp2qUeuVjEdneF9xQyCPsRs8F8cLyFKjx3ruS9J",
  "key13": "FyGwgoEg2n27ajyAnkrAy728aVBAJ6XZ3EgJLs1ZtCBjEQxEzUC4xkD62kfGr4BnGGVLPQpXpj7jLyevC5Zj2Bj",
  "key14": "3Bssp9vqEhcWt9qVxKB2ECitSCZscvdaGxDBAt1LKhuvRZkqxdPv6ryHSzk2SmDpJ2TuebUpg12zjitvA4T8d6bV",
  "key15": "2Fefvr7AsB4TU4fCmjjCwkZmnbWK81KfpdF9jGQXKcYhVaURgSYf6EwWsTCN3rwNNuMVFGThkdcRxcQRpferb2R",
  "key16": "RVWfC88BjkAcecCJeKeqNbEwtMtj8BKXjmRpFzfryQ8f2FX8H1RDFRDraqiZDrFSPwL6s8nMskUd17GWUyVYVUJ",
  "key17": "3kYGMpJFuukfZWcg3fGfeYZptdnENDNyndtnKJQ218WCguZ3h2oAGmKveuoeHUUgKjtRsN7eE6WHRGMZ7T64Txh7",
  "key18": "2bHbYxZ83iDMc8MkpENLUv7nk3zvhg7T9SkycCxNMdZzj8khpJbnnNmqunp2ohXw4sh3e9ho6tP1pogFccV9QFCe",
  "key19": "335B8bdYRBk3TrUwvbb1pTzQxxhoRpnyvHULegwxLbxakVkvmRRqiPpXrR5fMRzKaaGAdfh7szz7jA1ZtQWevsjs",
  "key20": "FL3oKeqEki5tSMcvGHciBAgiyxmtBgaU4JdL8TJDv9Cge3Cag1JQjNAP8xKvfHgrMKKBfwRT57afvRUJv9bETF2",
  "key21": "3dKhVd2C7SeFaN2U57Ukv58CJvqJgZGDGZ63vCnvvbKpPC77CHCstm4stEaRuAKhxYRSWxdg8RGurPuscLP8Aw1J",
  "key22": "2LqrztvRFVpeLzmK1D21Anoo6uyxLQPYGKsf94kY1SNStT8g9GmQhkLewmh73Ys8q1vxjXeUoTy22FkebaBgT6xh",
  "key23": "55m6AKzvmSZNT9hzWfCK3PzMy2sVoKNTmDLVQmHpkxA6bWmz8uau9hsGAiaQroii4ygS2BF9icU7wLkF4ZcxugAd",
  "key24": "KcWVas9SF6bfJEcyeeKkaJP1RbCkpdbjPnm1uyZhAVkZtu7wYsMp6Ba1hVeWj57WjipV3i7EXyzrGc24XCje1Vc",
  "key25": "wyNii2smQG5ueDjS5NrnRNwTbNvBQhninEGLJcJQD8kwUfE4Gr9VVjkzov5yJdxtxExd5UBHyrK2e1pizZWWDej",
  "key26": "BCqsZg2kfp2HhNQUyepRumHwVHhz1nhiurcrARJp5LtqPWLMwoYGFGsyTJWixoPHaJfUrqKZ7ym8jnCcfxr7aXT",
  "key27": "Rs2jT2vHxL3PhbjPQjEvddWVbGBFwWLZ64Mg3JXBCmxSL1tbdTxGPwz3jAtDyuZa8WNhTNrG43TGVGdEBnUc6Ze",
  "key28": "3R3JKNHBFKvKUPNnFK9Kq9htptf4WusJbbTx4mkDPFLmG5Jfqyc9KQ1t3BSZ7e4VbWtrb5TWN7DAt6fcnvxMc1Zx",
  "key29": "5iP47eFvtvMkS5gH1CF8hHAEmMBQnEe7iiHQYTke3LbgsBaFKX3jQAXnAgVHTpqWNzpNMZhuREFVzufDcCX12vLd",
  "key30": "51K5xngohoUAmSQm6zWG6fCiaNPEGEa8b7CJEp49JjvaCHcPmfMhkjJb1SXmCK1eH69efaGyyVFhpoYoFEjtqW7m",
  "key31": "2vF4PsqhpNAFqaoyJawkYwcoMWWCWMnRYmGbRW2fHZntKbKtwGPQPQMhLe4zi3vb4vW2BxJLiKz6cjRLE5YDt6NB",
  "key32": "29i2CsFrJizNwLVajUA8WQPAuVKU5ZFdrB2a6RQgoykR4wSFTqQrUQhanz1qqbtH8oXyH19pZJLXaHTeY9Yq9ngL",
  "key33": "4gYYwebmvJSB8pzitkvyZMz1aNdyX2TAKEniB94qs9frGkMn87ohKUv1GGcCUc5Ag87d35Vka6ayfKrQ7igRYNWG",
  "key34": "5QuUNkFeyfGCMf87obD3HHrLQMQYbSMoMUgq8doLgDCN3KLhWoHudkrNhtVJu3szsUpNnQVuU6Y2i4TvcNXsMsTy",
  "key35": "5z9U4s7vkmrk5Gv1t5siiJdPjY11naTkDqM1Dfrkq5baFKq7W75VuMCBLTKbqDmDgFGqLTitnbS6yuDuqCa4Lc4",
  "key36": "5wQLmUkcpca55sBaiPec54nxospgnDm7ZyGgWYhoeCAq11shicQ1ajxy4qvGVJQbP48hakDCCTDtUd4rn4RK3GtG",
  "key37": "5jx692T4gTe3N6Mwk7LCvXdagQccjPrbDLVd56AF6AJ4ZHfAqadnYV9oJ9RP42pjBzAVzEcFxa7QkUed9eTZabLr"
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
