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
    "4srSzRe39JVhznfDsjKjRgbDeguKaUe9tzQT9uBbhUBmmMxe8pqpSUQSss5vQTav88QwCLnqvYKLzhmoYvpsMZ7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ms4fDobRMsuqgdVC1wnsFt4t56g7b7dEYQ54HFDqkt8SCGbVHxzT4S9q2GEdJJUKkD7n4GniEJiHQkraSVPq6u7",
  "key1": "32wnXVRd7PevRJ2w6tYod78PCMJudDEzvLfC1Kwg8U76955DEnVGZpo5ZUB4u6py5eviwNeiC6yCTgU4oZnqipfZ",
  "key2": "2WpedjDwjiebZUSyZfwt1X8uPb4ZPo3wMUx5jSNiJffyKPzCPsR2jYKv8kyDXS5uRLxFov8yAjeMuPERRwCdgdfq",
  "key3": "4BKRt77YA3zf59TCRPviPsEho62VQzRLrwV54RSN9kKa4tFzggN7SnoBsHPtyf4MvTq7P1jHCSYXyLC5WhWWyJHY",
  "key4": "3hJyY5yP3tBCPXqcjFMuA7NrYL6EfZ8WMTaA3MWpa9mRfFBZHN7euBtTvsUb9P2z2eaSDf2RwvqSF878kYoiF6i8",
  "key5": "2dRAyXV5tm6S2tXeSGMwq1HRJvmPYPTh2r1QqQaqm5ENEYGUYbss2pEMmth7mdomuQUbGbsCmuM8xLaaA449SuFc",
  "key6": "pJEtdh3EScLTyK69R6Rw7xX75nPPsQXoXuGVXXj2bfpzuVJtj7fEQvdiDcjE9oDvHf64dqx5bdBLQ9gLT2pWCZ7",
  "key7": "T8pZSy4x882zQ76m7A41sNa62qxoPAyAJAFuHXqgWGFAALUy4MyhcquGtvJNeMoQ5mqM15firjnnMbKySF2cuug",
  "key8": "5EJft2V7HwEpFxNhjKfiUiAYKCyyV35Km9fCdDyCPGYpL3PY2eFEejtPztFFJ84Tyw1LhmdKiRpkxYkeee3RQrpb",
  "key9": "4BbDxEZsoPoWjzmmrB4QSpWorXbHem3u1RnttzLDfu5JakEdVjGf22ha3NMLjSopi24QSAT5mF1JQzG9RHDkR2PH",
  "key10": "5d11GgdMHxxL8XKDgCosJBbowGo172r63zop2RMMURDVwwWGdA8P6DFFmqGTBVDi6vA7GJE4939PQYFShZby7ACW",
  "key11": "26meoy3oidhQvL2jF8mP1gUAhX5dZzYidfVDP96NB6nbfy4dKeMFVUir8k5YC8qMtvxkLTAmCKeo9sarmGZ5Rjmh",
  "key12": "2XBCWBc3WuXDFuwkYXvZwspVDYu2nXk8aad7xmZPhdeJnpCrDEVMPAJbU2Kh7QuZZjZHrzdPFBEv6wjm3LkuvCHF",
  "key13": "5dzcd2m7nH9nkiN6teNDTcvhLja2A99FLi2UHKJC1Q2uGGC5daCtaX8Xze4nRrAhkLpYowPcLgUPBYE856mCrLpo",
  "key14": "5kyQ8MhVHyJsCG9kM3Bd4sfZuTQ8sbwbJqPutGKPkTgDLjKzo5ZeW18twZfC4Fr7n5qwenSc3eMhq3ou9AxuBWTh",
  "key15": "3uTZFWF6BsJnjqkCP3dsediSLY1GJWG9Wd9RHVhf8DXVXH1CLDqQw5q7G9vSvwT79rPet3kiDqjz6dGJiwQVK4ms",
  "key16": "38DGGykBmpuVckB9f251jPVpYx88UDLQyZhj7EDp9R3fMML7ZVPXNdAgiDPEWRzoc3ZrrMTryak3ax9Zh7eXWV1e",
  "key17": "NNaEjDcG6AGsUhfNZDNT83anmwrqE9DHuC8U3WTvUVyEEgEYgbWshg4Krv3cQFrf3R7A1NASoqZWuqn5j3ycjCn",
  "key18": "3wqd7qtRKMNPPSJHFqsVuQB1UNd8G4fP4F5FwX3mWBddeSJ2KuTap7e8fXKkzcNLAMMqCMdnZ9M5EDXVY2BVoYH2",
  "key19": "4xRp2zpAxsKwPof6Hjs3WiNjyAL7HHGLnS5t4hzmfbVwmRZh6r6xNyV9c5PESmRpbrF5FCSRa4xnAWkP2Eho5Gp7",
  "key20": "4gKdsELZmCn3gYLrSu6F1fwcV7gwRwcpqRFuktaoWrYY4zZbjJALXvUbMdafFeiNUjHDHVuQhmdsppTTP1cxMYFk",
  "key21": "2iYFnShfduhAZmXYeWYP6qpjgcJBF7Nn36uPgdPodMeF1j1GB99e3fDVwxGrdAbbmrP3wq12XhbhVtPo6WrAajpx",
  "key22": "j2oTghbVFCcutKw4PwsYXjvwYnxxsGZw3FkzE9YURDC5xLx21CTeZsQPtWHYyZuMAMuQRn7yinkXs5G4xvuKxzp",
  "key23": "3ucburaVp81XQw4DjWQzk32zehCM6cateqp1fvrqsXzKHing6hQqbx4hUxJrAfNYWXsXYU4QqTWK5xjRCeUfBWjm",
  "key24": "5LLPJWYz8FP2ayB1Pjt1phizPG4LBzUniAWnhwanLmZMuQkpE9tjDL3TaUr9DksF1YRdXCYfUsQCctVPWbkFDnsU",
  "key25": "61czZzzNVHKb77GLa2mJnzHoEEXsgydZnB2babQUYFygdKn8WZgGZJyQ2rLFEHpuQmra1ut49xaD8ffRHGYzRbNg",
  "key26": "51AWV7krxmJkbx9coCHaTgnsbFXLQx9xGHYnRgrE4X1QMXxGBagQ7LNZBeq1NFA4UWAsBgVnPce813odMCxM3LUG",
  "key27": "2R9q13vcUqGsT2xaA5PAxNNRbswyLZJ2XcX4J1G6gZK6hW4xwdSDBtBwbzRNgLsG5jSKWnguSqdkVzwvqCHP2Cn8",
  "key28": "3ydfTaLnW4ovpJTXcaBKCVYeSkNHFAregqUHTKDXWZDcJXk5q825GVS8L44QJKswmuqHT4bJZV44p39g3dhY1jHF",
  "key29": "63rJrufkcQApRfoYw4fo9uTyQd2ozVijdDe21xYKinLJLMXKrVRi4B5BLCRAgbkLmek1Y1wfGNnKby4x86SyfHJi",
  "key30": "3EynqMgcrXHL3JKL13fkniVtv1XGd3UL718WjjqkcjhUWCfat5LmhTgZKwRuaquwGnPsHBUT6gLvPjb8Z9JFzvEe",
  "key31": "5knq9DdKtNveXCAt5Asp99A4xEGjLkGC9uc8pKH7vpLYuPsGqDTMroqPWoKLrEf3VUa1MKb3u3REnx7mx8jabR1w",
  "key32": "611q4UKpjKpPZUsGLkkEMf4xaWSihbAQwNBS6KjZEU2uBHBLNTEypT1EyS8PA4SpJbBG1vVnVrV4qTnVLRujyGd6",
  "key33": "3cR636drNazy3F3isUkjvBBzyxpuWSAfKsKvRisdWEevtYbRaMGuY4SaFkpzzUQPe91DwYgc72wuzig7QkceNj8b",
  "key34": "2h3XyWyZJ1LXfLnv86R4sA7CY7S7xipFu4MbH4YXDXAqcRukRmXtjbMWNMhRtvKmGUmXCcUc1sTY32HHoKeGSNz7",
  "key35": "2u4WwVUwZ8mxCMtaZFSVFjta3fypvKfTDcGqaQ64EVNt7pRAX8iYAukcCC8wHyUFL67hFKEyR6WPMJ9mrUTX2FEs",
  "key36": "3gMZTKXDL6SviyzNTxCjehbdyZFuaY8rTCJARUnmeWgqj5oBDPfCYYU3W95QVzBAiTVdeeQvg1vaToFkYuMqh4He",
  "key37": "4EKuPejhSHCDxaCaBsFJtD9gC7zeF6sRpBVAWnfLr1KD93xPhamJMuUQe1A4Yfk6nHbYVq7oaVW8KefGLVEUg9Vk",
  "key38": "LYjDLU1jhZU7eEzZXNmmoMDU6adi6QGY8ZziGujGdvxPQHGieUaFJiNp2EntugEuyRwnQMsrDtg1wGvHiJ7ewWW",
  "key39": "VzceRRbJnT9yJ6wBBMfnJqPEyDunBkQMHnEpTmWdwV2pdcv2WSnLjWMDEZK1JSGe3nJPq7DS82oBxpEtgSr9Nam",
  "key40": "5xY3bxi2Yp2x6waQjAfhxwdQyyGYYp6EAgWvvhpA5yJuZDsw6zc5tv79cHB4dizProWB1VfEdNMWmkM1J8afRAjy",
  "key41": "5zgdULDBwEoQZW2KL7mrVLZtCJXaLxDL1uospjbdPkP1CMAeBXjXCexn7smxuVVxWDJRmVr1YwvayjnDUjsGqj1d",
  "key42": "9gJkLZxa3dYMK9HiJz3pz9QQVona3GzU8EJKhXycewVRArjNDi2BtMU6uav4T8e2KevgUewXVmnE6F1Z7jNnVyv",
  "key43": "JHDx5bHYegqb2kRn7CoAivYhpvfhFMQAr1YS4BXby9vjbj9wSwrHu1UjgxjPdMLnkCSRFsebSYv6mNN8CZbPKG2",
  "key44": "3WCWC9fiL9MoiYE6zdwwY6KAjU1v27xVdCns3XrCE6jqFY2jUB8sC6bghpndGr7ENNZgcGX7CdXjFbvGRP2sQDhs",
  "key45": "4BVeJSbrAy3UXAhvg5AfxGsfe9RbTRUNgQWX4Tv8fWWia6akxXPoUwfLnjzJPFRSLFQYutWQxvM4kcXyJGnfQvdE",
  "key46": "27C1XVuzcTz9e1Bv6bShDeqjfbX58d8hKYaW1sTfLrhTGDapDBog3URS9Zdsj5B9secDk9SP78mkUCe6EpAuHRgd",
  "key47": "4ZeripWmDz7Lqg6MhqVW3NW1y6eD2WZMKEqE1Lu3XqaP5KVKXnikCQMYgFFQYaS8LvVrU9jtr76iaaEWATpaghi3"
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
