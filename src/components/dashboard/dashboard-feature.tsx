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
    "39opgNidz7YeK4huyWgK8x1Qf9RdqudPi1KZV9HULoycbvfmSy1ZsKYFboZANwaBtpouUsjxzX79JoPsqaZJPbtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUpyd2ZbTJjr6XXyqZ2wjXagad2bNukB1NPLfA7cEGmPon5zhQkqgAnsxeCDuekXUEc2Zp3RnyUn7wA1W1hTaKf",
  "key1": "44TgGb3X79Fa35Xpo7uJt7TtTKtxbVkM4Q6gbzaSTrvUR5iTLh19jG6FMNeKj9Pu4AEHc5sZthCLA94VBVDLtwNR",
  "key2": "5CQQNHie5e6viJcz3L9A5m2hcFJgSr1bDH7FZrxoQpoPd7kj6ykjPkjkpmVj4RVdkZZV6nYq262YrPnQJHi1ue1B",
  "key3": "4xeG6RP5jheE3mNsbAkhVsXdGGXwHEZGSh1CyT3dgsz6HR4rsbrXU4U1TQaE72rP2UuN2f8wPuHvxLgWTzJ41Dqg",
  "key4": "2fPK5r1EsktpWaGUz4tdsfh5uD1swSbMBfkCGndv4hCgtY3Btj66D2tK3RVZrXSCzqpQ4k4VqsFrsbE2msY9u2ox",
  "key5": "61zBmQW1KUGyDjKUkQUJF4AYFRMPPFxAyytDnhdJLhaEaMpE4GVC8W4fjq6iqGDmwj4UXug1qkA621yWxcm1VK4a",
  "key6": "4R1Mim9ddCRoaDtnXok45qD7dDn9HrYwnaYaJ7KrY61YeMifgTjZrw11runfbEH3v1mhBJHUYhoVdZbURhoh7Qad",
  "key7": "5FeU9MyGNArzKP4trSdXcLQmF4kFa6Si5pJPfsUZDA6GTJaV4KYb95KLatRT247nwTKQ1cPPd5imvZL3EZrp15kw",
  "key8": "3TZ2CfbZgufmz6zvoeBdP268XHBJx1zjMkcXKXdYybPjc2vRq3MHFFUxj2CSVkTmFeNN5zy1s4b4AhhqqowFrZD8",
  "key9": "3oU1PKBEq9KZiKAx2uSwJg6SeztvvMEYq99XWPfMHkDyTePkZrRCdZvoefEB1obsHT8Wq75tAm79TMF6rF2WdH8C",
  "key10": "4xomDj7iNwRDWCRGLC4NzCjY1rLpbpzZoukzDC73sDFeWaMbsGD2SFEZ49gxweKppVrgXKHEzEbsQDMwT5qqxa4j",
  "key11": "5QTk1BH4RXi5FXshv24BSmQkd7wrbLYw4v1q9bwpUAXbTvPpbsjgeLMbDouP1sF66eu8VX8LTFzuuYuEE9fFc8vj",
  "key12": "rxfT9WpUf3a5sWc8r6yUzkMscWDCGxYzqUswrEXH6YTf28kqjiRjDYxpCcwkHUcwPmKxbh5HeChQAS6vh4WCrLS",
  "key13": "3LEBAQWA4PE3XCuJJAvwrBLLqhKjSCC5aUJFx6wtcjcGc1myst4rchG4SjmJmvZAnLZmZwzF7sTkjdnMWZFQa4j2",
  "key14": "2uJwoizCAEVVsL42u8EKvnp5TpXFob7Dt4BiHHtCpBt9fH5DxKXjrW3N1WbGbLUj6fiuMExAtBKpGpkBxzt4zM8Z",
  "key15": "2gpXVhmxKioQxzxrx3KFngkNjKzyEVZKSg3yFmuwm6GbTrjyM3qmrq6LyQ3j2JnuTawjT1yftFFF311Mx8UCkSCx",
  "key16": "5q6MzgfRdKGYN72QrP2Jjw6Fuo93yPZyWAAV3XEkhnRBgRsnYRx1Bc54aBm8CUYsUJ8MVKs2yaxjJ4jG4zQUEgrD",
  "key17": "2HorLqEfu3QP8Shu4DKpoA7u7LWYkLChWPTmtdyABM9pbBubPHJ7ergjCytuP16w7qQ9wvaE3gFbnczBboCmU9eE",
  "key18": "2MHJkn52otMEC3yJJ9LjAGZH6DPfQpxRUfZdpmjjAE1Y42PquDXNXwVXwE8kW6NY2jK7PZKNhd6vALkySchjo71j",
  "key19": "2hBDzVy1TfcggTTD1EHxis9XpbzxofPM2JmLtEJayczRJiBWMARe6a7LZTaGsFBCaYB7nQ6UNNzhA74b2dKEMLyZ",
  "key20": "58kvN5RQYhTox47nSjwT9XTwX7EorvsaQyuw8F1cEk57VcupPqcWTZrKD1HsxwTMKv4BCdb4YkywJt6XMU9S1JMs",
  "key21": "2CX2wsSujnbGA7yYbwxxUfsYvECqPtMrRtXiQA24qLgPYuBGNVUZ48hbbJs9sqz15oUiyzE32pxKHJNpoxFDyPwG",
  "key22": "P4edac1YX7EPTYYpCPvqzL5nnXeprwK2quL2RKoPkxWaGWeo9msSkqTPP4kYYqdXTCW7b4gCMEC254EoefDSS6k",
  "key23": "4nna69goD3mUwCXCgCnBaAiQT1o55nv88CeV3H3wS1W7NQhP3sJZZgrMjhUCgfEQYfjXJNEFEaBdzkeaywq349qx",
  "key24": "4eg3SUrhZFX9kQU9W66iJtkdeaRhHnZXxjb6UNR2VAff142PJ4mR36sAhVu43wYPZ351KbHGmoTGKZprKwP3CPxL",
  "key25": "4TKdsyHoTaw1ZxSkmCQ9nCBxMZbKBiAxairU4VBzhsJ5Y9HcYa2cxkAwAdDGgZxqUXKfRYb6hMRUZMWi4asdrCMo",
  "key26": "5RBtDpYUCD7W7FRPQ3ESeFY62z76hmEEVTm2oN69YZWh8kxnqX81WQqS99LgrXS3XHYdC6yPSBS4VYbziqPnf7aw",
  "key27": "vdCDyT4UR6UNHcvG88r92tENGuCHNknpwEUq2feGS3YzC7S8QhtimsyWxdZLRJUDtqPwcr2KuWcrqVMVt6jBRH8",
  "key28": "H7SRMVe7vzDAxm7fG81938k8SoKpH4zsWQejEmCUTbervGUijtUxKetQiRfv1Lt3c956wV33591LgvPnNuZVbqx",
  "key29": "v6TzfmMCkq38dh9MWcP5DNrFMFaU3NMkLQHXhWKYtvSBJApHXKPpHnksKAEvT9BSqLBtAKe2ewboCMP4hsKxyXU",
  "key30": "2xL7YkjrwL2uxdPZLXbdGWCavuqWSX4qjZWCJWEgj5dmVqkVSDxuQiLgz6dY6invAFjDvNGRvyx53b24BBGowV3Z",
  "key31": "WjJ698WQgT6ZkvS3z74j3UQnVoVb25iJ45uGt4VpXHLmVyVENVQb4BVjkXZ2KrRpbn8wQewR3jjCfEHDyTtuR4P",
  "key32": "3FGm82cFc1t2rDhzQkHoyoeDU3FyN7kLAzq3hjpecMxi7UnbhRHpTCh1jpKVkgjjDyVFNioTCenTXAzznc2yyaae",
  "key33": "3td8CmY9T5rhBXay7R5suXfyMe3ukPaGWvpv36jLiKtFB41sqS36YZnbQZhG3JfBRVWUmAED8gDPypRM7yTAMAos",
  "key34": "5WztrC8yrDupuJjR6hzRq8QR8vikJDioxkcSNkk1bzdNTT4eEQnTwo8fff2ADhyPk76V3MNAbwDktfE75B33UXZ",
  "key35": "54vBy6qxbPUDwA6PUjRuHtrGJDA4WxhwkMCkJor6mDgDL4fPwH2TnJ9kF6F5mSqY5p9NjE8ugWR7hcLvT7WfCfzu",
  "key36": "3K32R3o9tr2uGRkviCabAHD5drbL77Vo6wWYPSEwoYSbqsTQiM9s2ZSM7SP5BvoyfX9JrrndXYLJqZEGfiroioMc",
  "key37": "2YhFJETqGU5MP5swArSSZp3ZsEc9kGZsF72gxFAK34suZhWrvQRReHU2wTeNjQ6RVSwDx4iHCqruFe2uQMXwoKsH",
  "key38": "29ivoMPQQYWZdqqgfmdvTid5AYFHr3rbzrYx5MGsa8951JFjhYyCZXQFdgpYqKZQKVsBg1W7dxi5PoLsHo5ucU9x",
  "key39": "2zf3bcEZ5ZyfhNTNN4hUCYqRyUH2sbXBaQQN5Q1QMwqXXLXC9V4YvfgFAZBeUdeTtrfp9TP4QgrwKrxopKbDa2RF",
  "key40": "2iWjpb5p23K6nWmN886KcQ9PUQQjrgHqWm9r7Mm9XhxVUUsTez6YK3suoHFnF8fZoN4bCcJztM7HrFNU77zFLMyH",
  "key41": "2AqhHd8bztfGMZo5RPinvhcpB2Zp12L3F4nnEhhPPy8cZtE9RmC95dKtDfoEni1AG9MahxCQJciYzM1EDaC2nhwC",
  "key42": "42VcKACpiBwV8xnMRfX8ybezWuxRqqEUqPb3pDe37wzBTEkifH8CFey1CS2P9RbM33DDwiE3qhGCfsTKV1VBkzzk",
  "key43": "5U3qXAGxnViMACPRid5LJ5FFdGTrpPh9mCPJuPbcZXVQGiQRt7p9CCmDcnNsgzyR6MLoEJWBHe2s77UzCtMgQ3Fo",
  "key44": "57ubmV6yBxMyC9u88zeePqg3iFbPYgjyn5B4Zw13hg4BDFGYSaMmApUUsWndvZcuJB3J9WNYBLHuEz6H1ybd9GeA",
  "key45": "2xpHmmYX46qmjpCgxnqhxNNxrGvKTP11RPR2AVA99soUKpR5Q5pUeyGJLwHjuLYyqW25px54a63aaX8TNVNrLaew",
  "key46": "dnPfbjNyEKFgsaygaDyg8dtEjYjTrgJyazTgsY9rHcu7Lt8LVcGZ8UHunAmG1kzvYYo2GF5VNUhRwnMNk1b6ns5",
  "key47": "5nZwBpsEfMUDqaaofCdsVCxmkDFbhNpFYbs2BDwtMsSeiuyxMH6tixbP7oGpEWY7fuYucezRYBVRPwNJsBCxRW6d",
  "key48": "ZLzEWekTAaaQA6i56T6QsSGBg4Scs5mNXVfX4G7XXJbjnvYu669WsyGaHJk9UpodMN6VCGhqaPGFW6pZqwHxYjB"
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
