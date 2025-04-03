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
    "wt16nfWC6Ge7yESGX4xqezn1mrnYNDCbC9v4RQ7QdDie5qae2EFcgF8xQLeW2xEbVcFFgJxWDwHrp1tb2LAnFeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5tVMAnRiqJ6vX2XSdMiq3qH43K7hHJqBwZPtwduCqLMvbUU5oEQWwurC5BdhseV2Qg8X1tmRVsXFvschb6EZDQ",
  "key1": "4XGV2164kPRqXRi1iuUg2TD7MJRg7w6Wk7vqadQaj2bnwqN92WxjgbXaWrATAt2Tt4v6qyL3L5DfYiJ4Tadi8rPe",
  "key2": "4gZc1uzxhKHok4Tm7fdGGutQUVZkZ251rdJagJ1HPZdeLKiE2LpnqsGumdidVC4bQv4gQf1SkqLLMUn19P2MXXjg",
  "key3": "4RPh2VWZ6EZUYLPf16MY2QViP1V7MCJuGv1v5NbWgoSj9AasDdS6MecmPJgSnPWY8ZAbhL3XYvcgR5Upg9e6i4wD",
  "key4": "2eTihiReuqxqPgZojQUwAXNQYvwgmyNrq6exM8ypC2uGdgkrSee9uXwSswUaiZ3NVipVbStd6f7YkoNYHSBNc9DF",
  "key5": "7dvqgFcLA4dAHMi9pvBtgMwrgqFp85GYNCvygMrvToM7r1FUZMe7LfRStYdKwEm6Y2YDy72UX2yTsUiUak7gAm8",
  "key6": "51gBVxvjNtYHjpbpkpcjLhLri86dXMCKKyUttPBbt7T617QNcLAoYHvhtKSAeveBk7XKiKEzv1b7s2G2rw83VeUK",
  "key7": "2oWqupKsPPMosw3uqzC5YrXJHHCpZiJ94KGk49frAdN6N7kbPYAth1YS5Khi9VjVK7eB5e7UzWcT8mPQmtamFczB",
  "key8": "1o2yXBYMFobeZusL2aqiY5xfEHaCsCmXGevhNvThPQqozbtBLaZ1Sw9QAqhRnXZ3y8cmjYUyhf5TvQRQexWy89H",
  "key9": "53n9uuUNwviCxKjGpTtCxyjfy5wjtSFisGMKHVUMxmixJ3xGqe9XzvrHumuF7Ta4WY9TMZwD4smCykUbmcJtLFEn",
  "key10": "iWy5Hfnts3gkwAqdZaujPjV4KC1QBBHLSpyytHe6kRd69XADMuLZa7p9b8LWgZnsQJjDfUvRPjJ8vvesxdGoxPL",
  "key11": "5Pz5feanCuS2K5KedMYkoiR47heFYVCJuZ7Z1qkx85WNDbGHHmV18u9ScEMHVRFtLtPxr7yqyR1Pqbzw3Dm4Ayuu",
  "key12": "58MGw6eNLLLjkAidHkevxK7Fbk6eqLNaKZzcwogVbHMNpjFmYbLQP9k3fbsDhUTUkMW9dC9Q77bvQWdg9Ggfmthg",
  "key13": "5GrSv2eYHqvUAA31XRrzr1DPQCwgEFXhnjgPrcr5bn9jYNTsjaUjfiHZ87GCJ14n3qaq69xQ9rXAUQUjkJS4hjwZ",
  "key14": "ALEj7kwodep1sufWPxtuzPQ6WxJZ7G3bF2pfWuXVFNaDHMgjbzh1kUf4tpWusoifMiueJJ9mgXcGWo8LcUzBn6v",
  "key15": "dgkCbbGn2j7TfsYCA6qHgeyqwUa5LaBWkcQ3ogq4L2fEgBS5faxRb3Hhp49fu1rBKiabxev8V4BsAJ1sKSQtcBf",
  "key16": "3rzTiMvDv6YMDTcpXxmAZPkgutj1GPqqkJ7PRMCpCK5hLQYcQPAp8z87AUMbr3aMvYAgfePPcf4uDguz4JbqgEF8",
  "key17": "crdueXcWwZWisvsnNtBn3ag24UCNZGP8GGWrjH3BvRFqw866wztLonWLT3H2AArCsczWsJMWXBsqUX7NUmDjR2v",
  "key18": "kZ3eDD3kLEcPHEUs6DDgMozmZrpbCccqjwmF4BrzGDThR1qJqFF9aLy7A6Pg3k8L7yLopVd8JXmqFBr1ydzFJGU",
  "key19": "37AzuVZY5LQW34u3gK84kkpBACKcrGkxJ2QXBiq2FU2Yc4Q5gb2NMrARYqP9FsH96Uf8iWqadgHTdj97LWZNdMxw",
  "key20": "3SPwJDEthyfKXJ4LXHbWoqxjTiBTrLso2ScGLB5PfFRYscU5ru6GgybGTsqSQYAiWx3jfkxBqGdYxojh5TNdcvkN",
  "key21": "2KK92Nn2N24fzvEv2VZYS2NA31ZCUGVTy7gbRJ9bhqVaeKuVCXfPG5c9JqwYdBa769FppoAWFSHHy5iTg4CXhmx",
  "key22": "3mEF9Fd6PrXzZB9DVZiYXFMbCVyZPxPU7Kt3MopY6m7fW68XCx4WTLx33o6FF5oeGdP2QovbyCAyChi8XENyeCP5",
  "key23": "SyqWuTxjV66rDL6DCq5mAi71JzwdP4po21CB4RvqPsY2kBefBoopxm2NciXxo5P4jpLM5xH3AAmka7k89B1kqKN",
  "key24": "4B8KvU5JucvFqeT3imxXbQ85DYFHqkLhRTGCpuNs4JqH5dNh2Nsbat2iaSWJKuP9p5ZNU67r5pm8i1WqWJQkYcwh",
  "key25": "5TB8C51pM3jsc6HU5dFXEcmdojHk3sdqPdbtVMB7YSSJmSdhKCRkrCPKqTQueJTDNAxNeTVKikLTcbgpPhZwQMhh",
  "key26": "5tPYtREBZx9TmVYKtY1i7ebxfYCp1h51scEh3LFYbfz7wWgxrUVbZDQkEpPYNRk6nTpYaAL1DYvFcxWa8Mr1wdee",
  "key27": "2i3ysFmWusrL4zyPC32QUxquYWb2fJBddkQu9AmNfAZb3buYzTejYmvUSbYMB6ytbyeFittDzpKnbEKnLr6bb1ks",
  "key28": "4GHkNPR4CNJovA5TFBU3QQD3QJLR28WVLiSWi5BKgyUGYWE7cdQRUi76KzNGFk7n8CRCNAhMtdXMvKXgYiHHDuLn",
  "key29": "56fep1Arr1yi9SUSz3BK1bLnfp1mxaFVREGwaRKyNdy3V2qcfbL14ashQtt6Z6e7RZ4Lz3FreXy6G72BgJVpSoux",
  "key30": "5Ax6f8xwSPBJCdUMGJnszECj2FpEsFv2g9jmH8kJEddZ613xDFUFkpbPR4r7v3xwzbw3wFZJ22aQ9v6qAurY4Jco",
  "key31": "2RMj2pN7owC9sNEbvAWfAkNmKCKeoy5mhHACCvdSbfxcwtTgUXojm95Bw1RsvLCp5Qgm3iWiLvajXwYUrGjb7eKW",
  "key32": "4iXaioUMrqwoNwBsjBYptGgjXg7gZnzXk5LpxxDR8dfJt5gUBoMhVZfbQoiRP6UXPZSizcnskfCCaN7nkrvRCadg",
  "key33": "5DhRueZAZpj33BNEUQqtnTM1VTQieLzbSKqXZiqudt3t9wPTnKgLBgJjCUr7J9g45ya8zr3N1hRvSt6gU9gXv8ef"
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
