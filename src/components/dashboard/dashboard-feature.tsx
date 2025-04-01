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
    "2MvBhB5K29mN1cuwNjDkbwxKi8XiJGZU79ZskKefgMkxv1FuPGGJ9mJJtwc5vSwgRuDsnXDWj19TX9ShwLYpi2z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnsW3frLP6eE2Ud8EWMiotv76ZKwEZaLcb3drWFDxovDDfrmBwECJMm2Pdwgukwnm2TZwRNeQdp4jnTogz7QAXc",
  "key1": "3k3iLzagv5WyKxbkAcrVHH6WqsKUHFWdb6st7rxR8vikTsTsfLocsWYvDLTjFowQySCdMVb4YD2BRzVi9fTEdyMg",
  "key2": "2snNEoA7rma4vaB22wLmp8weBQCdRF9VGbqHsi8yWCk64wUYXrqTyuqikknLTTBjLU496b5skeuq9jgxVUKPcCqa",
  "key3": "58gcAvePFk9JBhzKMp7zqquihfYRYAFv5FWDXzkCok9nSbAm6z17TirLJinw6XvxCbSPTfRTtdZxyGmwkDQWuH7d",
  "key4": "5gsZbM4JYSvncte1h9dh8BrcKWnZCtSvWAJjpkKL4Ta4mYpR3SP9UQtx2e1WaKLBgGtR58bwanfWPDiPz5zpoXNf",
  "key5": "2RLdzATghzwEUxaBbvwShfWbaSUJ4NtV1N2DQKYjo46YYgwerUzMbqajcFBYxf7JkfjREg79DR4NnK7ao6g5kE9v",
  "key6": "5YUvuoxYWmKoKHQXM5T9CmM5Q3D3fjtQTg5q23HePejmByJCrgY3C7irLxi2vGhKzM8CTkHT26PLVXnhMhdkJBpD",
  "key7": "2GohpisrFDPgUr1yL4mZWvNGTziFYmeuFAX7kr29nUk5CcSHTBCpk2QwbBY6cK5Gdro6RL1qGbMaBZ7fScy2G9Pa",
  "key8": "4QZytnFSikhLtAfXVBxB82fMPba3yH2o4mnaZByyXSzw24iUuJaDeE2k2qDqXMSmdACRRtnpEFrF8i5VVc4h22vL",
  "key9": "4dYcERmNKm9ctq1CZxd2cxNjjNE8t5wJvckG7JE9CZyHndCusqCq886ZvrC2DMQ8ARmvEEN56KwbSa6hM5qwKPbF",
  "key10": "3QiGbzC772H8KGRF2Pg4yie7yKBg4xGGE76FMuDuQhR8Ea3K3Y4hMYbbkJoKuVASTBE4aMnMjFpqXyqZ8Fbb6Smc",
  "key11": "26sarXAs25Cw7kWW5UHc9HQKgLUjoRj96Tc7Cnea4fTHmYbpFKxtVpfqQ8crk7oHCX9z7zULbfVdX1iFfXerDTHh",
  "key12": "4uzRudpoLfyTSzerxDaAwWTzC4mtrRJVLyexSWjbj6wWQLchuuLbLy5TWMvUiGbrqB3iFEaqVg7yHepyfxCqVeAX",
  "key13": "25ncwbHxzWP8sf7NpwWnCSq1vsnYbuGPJpMLJ7TPMFPiageR5AvPmvCg8zBYa5QEse4oLjF4XTRkGHhiA634Sz9B",
  "key14": "23JqZpfXMVsaE7mVDFQpAn25goJGFPhQBLarjrKS8Z271xzGiPZrkrEtDmjd3Zm4MZZEuvYztCBUo1oeyvf3hW64",
  "key15": "4BrnKzgLfJVB117QJHdAYznJ7pso2t3Sv2vukhTV7DZcM5a7vrC3N2mCgYyYxtpxjJ7MBzbCnchWD9wTesTkzFRT",
  "key16": "2PN5zJ6U1pgi4gPyMtTbqRbw6VBvGaFZQ74VoVMBRcMeUix3MxbDfuUdR3JE2bzZ1Z1zHSb9FEoGZnbuK8gLm2uF",
  "key17": "4JvVD9QhCHoRDgTKiWfR6a2Ynwr5VgAMrwhsaehevovEaxP84bBaqJw3ruUFQgscHpLTpxKMC5rf3psdYawkDRi1",
  "key18": "4oUasEnZjC9kbj67UY3EiFBMeE9v2b2N73cHqkFn7NWdpiE7V5y9D1GU6VJAoUmoQvJ4kii21mbhTHVEZYBhG6MM",
  "key19": "4WTMzYexLKnd1fcXJgQip5J65tvsmv976PGaH1FKV7o4zK4C31yzVEBYiwVtNCPW8kUzgHQPGSrYDpJERig7yVMA",
  "key20": "3WdFifkdNNoEJhNWcgV5yiHN7u3Wdtw6JmsvizHMGw8H9w4ZuAVBS314c4EV8X3MweMAEPE9mHokkwvBnKsT2EAN",
  "key21": "5qUtBE6evuU1wuwvp1AoDxujA4d8mWcMS6PL5Y43XRH7zVqrCgyfsoSTpf82CUjAaCPGnKH9PMPvgPj1Q13W4CnR",
  "key22": "2BytxPdWXrA4f9yURjPh59jnKWf8BbkwdSFLNsCWGqjMXqpMq8egm9ni8mZD1DsUirrvg3NBjqfqvWEB3AL1rEeW",
  "key23": "5xqzjAXfixcgv9NbiCv6F7CUAeGw7A1x8MrabzomrfNUS8uQA63DXusXksneNtQh79HkZgKwH4TtqqntxMM5zmZq",
  "key24": "2cm7p88dnQFvnT3P1B87qdVndwkfz1o9LEjWkJBxqis9R3VdKz6QdrXL4yiwoqpyZyFtDHfd4WHvnFQikPBE8s2e",
  "key25": "mRn7DBSMwY7WR9Y4VgZat4DQtRhSvxzusWRiSg354yJ7Vs4bJ5CT2R5jaLxArytrfeoGUW96cYrS9PpE8NuhfwK",
  "key26": "LTSGYTyQagUfwQHRFNnqezfNZcpSxKYLskaeGFTeiP25SHoBR2fyvAcSmepg6H7LWttfxMrU6C2VkunBWkCzkY7",
  "key27": "5j8RbukLbKiuUP6egUtffTJtsofz7baqTLmdtDDdbdgtrPYryroZ6pg3piUEh8amtHyjF9zn3mbgkbMhQfiwiTBG",
  "key28": "4cj3Cc8zo69u4bjDbjmuvCBQVeNMZcHYwBB5YyEcWxBd7umgu6hkHpQevk4VUt779bCBgoWrZydFRCrt1KrtgsJD",
  "key29": "5hmkgPdDSTPJPWVdGfcETFHy5CXuSbxKvH8m1Lon4mvneyFsWCKRyrgkRPspY31puLTA4mAdaGWm7h3XkrG7b6A",
  "key30": "5SyXBdio2cZpV1LtcRMPiZgPkT4Au72ZQA7CUMby1FhPW43JNyyAodfhNpCF6QcxGA8bZdpnp8NUhG5MPUAQvkVa",
  "key31": "YphLiWkRcsycX1bFvAHr7ury3R3BjB7WUfaMeXPvanbH42ga4v98h8otFuuypvp1UA58CMuuMehMAAP3wum5Ba3",
  "key32": "LWTXvn8nPE4fWU3faordJBYB61GEpeXJEfsaByPdozQ8rMyepjCx2LrMdYk19WhbhzKC9u7N76C1kjX1KSPZwDN",
  "key33": "5mzZn9FJEg2ULweXQ2gqNwBXYoy9C61EwXYPzykqJJPhSYMp2aksJtbMANaCcFbfj8tH9ZBY7qvHg6kdQm1vmscC",
  "key34": "5TM2tBkEC4JWypLGv3NN74ViyZqSMz4TpCyHNh3jeCFyrgw1jgnuQKFNrgTNHhmr2p5Mp8YUs5tJrKftJoWcxmNB",
  "key35": "2CwGiyWfXVxmPauWfn2XRc5eiKNtvHEhVwH5M1hd6WFDKmVZzaR49GDTfLQwFVsUm4t2HKUa8m2FAFZs8iWYrH8t",
  "key36": "Ez5qR7ye9HjnmL3zubSExAnK4v7GoWKX9TKy5KgEpdd36wko3ZK4uneeM1erXzD6qmqsuUUib4p8eRrDvWAq4Yr",
  "key37": "3KxVJrgu6chMD2ZbXnni2dv8m6kwccakRZjmJWvY9tgV3Qyo2U4KFdXyZTs3j192KNUshcdp9Sm9N3XnzF46ggZc"
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
