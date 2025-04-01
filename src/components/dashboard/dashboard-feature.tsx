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
    "4EAb57o7SNAia73fFntwrWD7z9QH9dzbQYC8ixysLhaPZAtL2eqZL3u9VYNG7JkKx4vGXpTg8SWBfA7ufxK2Az8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwQzPEVK47g2j4WmJdULUHd5a9vxf1LbBRz5WcGsTyDcT8hVr2xEscg1GH775ThX18B6PmCTvujCJXKmNuFLi5J",
  "key1": "3EWymR2eBkmTEEycqhat4RNdGnWyzfosmkbiVCuf2fvBAhUCMfhKZj3sRSbWs65bj1ThyKU9bHkUSpHcX5xXKNGF",
  "key2": "3nYEKBHM7TZidCvZ6E6wanZTUMgLJKVeF29pSdM2vPKDrcp3uPPMG9BwDcqWGdLdCsUY1Ru5YfcdBxMqhe6hs72F",
  "key3": "3ApwyQ1Em7YZEGdM7bAMCtFmv7zoesK6cQ5qjmXnuNpuCsyFFaCjzYksotgvz6RMq77a7JJdLMA4VaHsATnTXyyv",
  "key4": "jc6Z1gLcxTWTFyDnKSorTezxmhmnhiA2b4RFeRzzietMiMHauS2QULw7nNzVtqZxUBhut2sKdThsUL7LQK7wogP",
  "key5": "56pTd4qWL55oRWWoF6VdiMxSm4kFGsMrdePQTfirShup7bWirfxSZ4hBLiB6saNM2arZ1UtGBnDmLAH4wngtYwvb",
  "key6": "45AuyxspNYpXgUECMZks7kGMwV6GswVkFwG948FoQPQTpJTA48c3WYcuuWgWKCr3yh6oed47qK3rGPe4vkGbho3W",
  "key7": "2ZSfjCiGiPAeFDJ6MrJdgDm4bvrTBUFLfhDYgZY283DTWfBEHrtUtSSS4NBSU2gSxTt7ETMR8KKWzYzxUn9zvTdY",
  "key8": "2jZtKZx7c5vBruCqx4XWS6MqTmrUBsGF1ZkjogQjT6tVi4NKmZv8REarSMVYTPQYiRiTGM3YUKPQ6G7r9njTwCGh",
  "key9": "57Fi9Q73YiDrLD3t7gTvgGmvdQeLtrgx6BooBx7h8oNv5Pc4aA7C4tdvfsQGd335eSdmavWX4RMu8J1Lp6kUUm2i",
  "key10": "ZEC8B3mwpX9CEXttXEcrCAzTfuCccrzbioMtKWcyXmGLgrPijziq2Pvop5EwiJydWMzBybAaeQf4gSNiYuWFDyW",
  "key11": "5uSB92KkdTDeiv7aj9VzQj3zuZJKBK4z24E23HebkEU6hFGq5DKZkzuj18G3Tw4DP2sDYn8LN8cFwWJ7QTuX8G96",
  "key12": "5uvNWLawq8M5TKACPkcANtaYZHB19rExitJsy7eceTCvicJtkeRHGEBxuGenqWbhZjVf4sY19K63WKLtG3v1aRAx",
  "key13": "3nf83eufVKR3Tsnd9HZXN5Hk8jENBhnfeyumrwLcyctbPcBmxKNgvyiPJ2hmKSVYAn7yokJdAne26Dy719Lc7HeQ",
  "key14": "4rE7jXvkRxaaSrFC8f98Qa6RGxqAPwyACKFtVAoMZKowVNG5X5BrrgzunB9Y5FxAwq6dsL7AAHWfAhA9sdiaT9mT",
  "key15": "5bq1xL8XdZmGLGhDUSfVGcXeYKGPUboiuKoEwophdwwFvt7Xf57UsuezkvpcLXRVZfRKmyLqosCyfArQZBQBKHF",
  "key16": "55CJr1cNoFMjfS3ATrnGshycRQ1RKoTTHbCD6vaxKz9JRL3WWS8pm9mG9ktthruACVE2TYkNYHA14Z21ukb3uyhL",
  "key17": "4XL12xSSrp7DdN2UFm6dXq6HtMeXows1dY4omWJqcsYgASU31872Ye8f4C2Y85ydUSq3kjzZeC1sQTyXXVye8vco",
  "key18": "2AaEqXxwhiUg9URS1DagiYqvoXA3ZLRruRGADWrM6pCdwon6VcSewP3Nj8HCAh2c9fbagyfTLWKESkrmDHTHJ7gR",
  "key19": "5AJ1th8qJQyLEFKGkhpqqCiqfdx1i9M1BsACjademwNEzKFQiyN67o9d4dqGHFd2UzVGoZMJLdQjZJZFpztP6eFP",
  "key20": "W7gkSXDutkf1yPeQpswAeHvdbC1BtKkMxZ8N95PdRxqdL7JopigcVJMXecfwa18bKFKKpo8wxWSrEA7cRRu627g",
  "key21": "Er94rXFufr6oFSvDkGBwM5Ls6vBGvRt4HpdnsDKAJNA9FGNFKqZTSvo2G5H8NU3aE8rNaPJipuT2iqJL8vw1fKi",
  "key22": "2rs9pgtCYa98CAKXtCUY6PK9uzF9URzV2A6DRBFJkFKPfHAWBEZ4PqwuPfGdebyt6ydquFCBrSQzBL1cqnTjcGng",
  "key23": "251Kn3wMY21RArrmHiAgreRASpcjb6tUVLnnPfiwJj1Vb1axRqzxBBLfx3LXoahWiHaHYD3rU7yxLQPne52RBt8R",
  "key24": "2qBekoxfWVMYqehh1kXnUBbVTA9HQ5cEpdkPmDVk7KeZUD5r1DrkUGtj8qaSPSvkQ3KDbjAMgPMChLGC8VfVfqbJ",
  "key25": "4Lj4aMfuAwzbfQuherA8z19Qrf12by9vxqzQ81nE6cWrGRVzY6zpEmYs9ZiHQYoKYGP579vUS7Y7kVjjofh47UNb",
  "key26": "2fXBy4FLJFCwreE1xaA9H2kedqF4pauFvPQHVqZ1XJPmZ8maGJj4k4Cq1TrZ3N6dynmpp3nRMPCi2TA6PLr7guxa",
  "key27": "3PhCSh4TyJBf19DiAeiwgvgdE69vEjFbMYr5UaFrKtXCyGMuy7tzjEbajCntTR3D6aUqHaz8VqHtiXNvhqdrBrd5",
  "key28": "5ixfovdA5hrxgihPpoQ4aawpYwL5AyuKUfYYRvkiDs3muVxZDVrM9h3XXYtcdMwxa9EPXiy4AobZHSjV6XNkyRFA",
  "key29": "23HTjPUtSVLLUMK5Ju8yqhRpKjScnAr4geqCZhQKZ2tGfTzyCENjqUiz75Ue692xCUfQqeg92jB6tL8VuoKZ4oA2",
  "key30": "XrBh8a1xWS6Qv6oL8nxEuoC6BAWAtggRtX4tL9Bwi4uBsYQZVeVbZUBXGBMcmJhWnDuQVQy4VQNYgAtWLtZmvoy",
  "key31": "5PzAM29NTLtHW8ebRjzWhQNvjN9p9XcUufdrzm5B16UnxG2kjTKcMjvPZLcSL5bWm26Wdugpy4zTmBFiQ8raURxN",
  "key32": "5q5UA6j24EDL4GyXQXSy1t9UPekjAUryjERvNYJSgXHPaY8SyNJRVUMtyKVQWMqv57BNAxR5hXtMk9QWCapm4w2n",
  "key33": "2vphBTdUsTPjFTULPdtXYYytfULs2NRdEvqyUphFFsr5DvgKTZucjyRBicpmYwUG1fdGiSPwsozn32M1jqSfb7on",
  "key34": "3JZKJ8LU2jm6F5xd72oG2QbAvTrJ1A6Sm8avuyUhTWfX1n6ubykRAN8YcHnFVpmFn95zWjjevi1eGWE1qHRbiBNs"
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
