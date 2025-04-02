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
    "4jyQFEatZhRHbPQ3QdkfS3EGYSbuUGhV3BBnxdZs2r8LJJ2JCMLa5dJjJwva1ChQPyspYJQryQmSeDmZnAWikYQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXKa5nD1P8uWyBbLGUap1y9tibAYkw3PbZqKJMdjxHa9zGe4qSbLnWUnzBP8KJXnwuNgaBPNfTARMiEgQXchQLB",
  "key1": "4EcQqbJ1ATYVL6JtoaqojeqnsC3g42NZh8U79Zvm1qNFPLjQLqu3DiiM1p57zGLmc9CSbg1axShn1zjSZoXDaz39",
  "key2": "ejfqiuQiLuaGYb3tr1Zo4EVxCmAtm11yKQNkGvPb47yJ9LWs3LKppcTcgKCa5i8KQckVkjS5amfQyo8btszRX2A",
  "key3": "XqKtGfs5FCPdmrmuxgr3kA1wYZAfRKxzosGvjNQF4B3ZY9c9hTeU2q7isAmir8CW8KTH6XZXyzGWhVk36bdH5Y8",
  "key4": "2avgZnzbUMvSHnvQyRnweNdPokTDHe2PPmHfomjVuQoEXEvyG2b8LQDedArk31S7yyExuaTN2aAUxrWnqtjFSCMv",
  "key5": "4w1uiVnBdQhKNYMWRoQ4gYZZSA5HAh4wKvYAWKqCDJvBoCxpJKoZL2FZfdhquKwwcXw2a3XgRCWMJRHJNmFV6dmc",
  "key6": "5gqiFXBZBHKn8zk68VspvWJxWhYHxSwLepPqUfQywzQdas4Uv9gwnULUGZAMR5uwVxgvTU9AK9dH3Gwr2PfJx5kW",
  "key7": "NUScufDjC2BkP33aYy8KRvWcQ8PgNr5trbKyV4EDiEe7KdgShLBcchjcVfPFrx7M5Ngh8AyKdkWLLvygt6QMoEY",
  "key8": "3tzSsVpepD5yEiNqJkA8NviyjBL33JZFhfQ282ap4msguMt9pa7f6YyTCyQ2GPYutXEZnRyeZcA3fzXzUTaKu4z1",
  "key9": "25KvepxY3B7YyiRetuTEFTW4Ap8vxJEggjoJWNnjNhyFPc6gajbeEhmcqLgvGEuzvER6tfvWu3YkbVRYJvxrhPuT",
  "key10": "422ztNtHhoK9mwPunSsd52JLg8poHqVRe5qrhqr1N27oTinPeb7HcuitUvwfAfQNkEbemN4BrBb7LPUkgTnZXVyr",
  "key11": "2thob9irkwHg1QqgGJ2UJdih8VfWofqi4FbJyqRQ48ncw4qtho56PnrnAbcNwEY6xRBdbue7LCeEsbUuXb6eBvcd",
  "key12": "56gJWmDwpEwwLEDrmNkDZctRSL6PH5d7fLi3p9gMvhcwgDBa7n97VDTgiMjVEHX9rrpsZffuDQqepHdqi6McDsb2",
  "key13": "21TWhH4Gt9WCfTeQctNoTy36j9hu3dQQCjrFFQjo6kSNGtzDUM4GqXnh2yiLHwNkYpRecW9a8PF1CsZHyF2aFfWe",
  "key14": "5rUoeSgA9XqnZuGz5bJH6ieGcasJgnuX967GTWC7un4soMSBJW94kCMLAV1kfN4GNQDBjE7TehrcGc763wdywg5w",
  "key15": "rkP1uDg3bTWPw5hNrZ31pE9MRirpuZm7aZYXmjDw2reqrWSUv5p7fA759gbTTiKaQ7H6ipEPzXA2iTxhvbKP4qT",
  "key16": "3jgwgJ2FX7xtfG7ZyveixcLfY1igfyM1XCXAszVR7YKy6ooW3vGJ43P54UiCuqHjL5jJUDV4A3wntiDcb51Y3wKR",
  "key17": "4BYvTLLHyTfVD3cSnBvmvGnjtYPParU97ZeFH6TTdntKgrPY9UPTQUPonGy4oPPAsfkXz7vrMbvRvxrgcytD59zE",
  "key18": "5sJuFea8MrzD8sZ7yxUWCMwd8Asp4RrvTgAMaJzZKvQ9huLuDhGEnpN4hnpPQEJV3GiQAcZPzxHPj84JnbjoTipq",
  "key19": "3JzSBpHDxyAzjDjBh6j2Es2gnGJG3JZSAHX86jCiNnD3hMttFEFGAKJJGHGJrbT9N5YZ24j4dhfmZWrg9ir8919m",
  "key20": "3kbKTUrFomQnWFQ3soVRWiXwXaa4YJonSN1t4ys7frnhiMjD12MAh3LWXztMVfMWgvYioPaytoFbyo7Jw6jbPmAW",
  "key21": "5oQueTkCwfrcmnYnUEFKgXV7tVwQvT78bvk23HUCp5rh2sryrLXRKnBSBXNK1anDtzVALvvQmBWLy94TsdMmopKY",
  "key22": "5ZCBbiW3EfEX5Nhr6Y2LxVmcvs9SREF9ZMgeaF1dM1t1KLyPzeeYRUxtTfvWEeqtBb21AbTLWQ7y9V9BPpBhienZ",
  "key23": "4zwoEWZxzwvZxLnTvS8Lhi86YCDJs3sEZTvDHbdZ7yJ3fgYtVvGcdhXg7zBPoKvjeSmYcZvW3XrQWyw7FUaoqH6v",
  "key24": "65iFNK3RbWdiKc7Vg9jqprLNUoX6q8kzttToudnzHgxwKh8MSfjjPRnEHi4VVBjCktTpy5NQhTRwzcBPt5c7h4rZ",
  "key25": "4xoKDCHY1ATyhj6hdazHXkNe6R4fdY5b6F1Y2MiR9EgfgALFmU35nL8Swh34Vc4GsU6Mwgf2UuP7D8q6pbMNAFv5",
  "key26": "4xfriovtYpAN3XRZC1DPadPG4WFdnTLZGZGNSg1UnNbkZmv2ftuW1V7xEqAV2rtDKnQCDBRtutWXpmvRHHAuesVk",
  "key27": "5tTM6Ab9zfMaa113eXhCLzvJQx5tpdx2fv8DvsWoNrqcWm42MtSx7ygrjXdkRp2BdSf9H47LzJEc1e8QVjMjEZ56",
  "key28": "21NK9aoUA1x1zkq6oqu7515rqoT54duSkAi1Wh5oNe5P5Qar2tZ9Lw6QC6uJjeZd7WnBm22a5GhReiuqVPHBprKk",
  "key29": "nqgzeQtPQ6S6FsKSQQxsRFcSWrhmb4NtDu8hq1JXPPdY7swbeEujB7LLVcQJD4eimsXD8PZHwpAtzV3Nr8dQiUa",
  "key30": "5GZ7jwxPLmUwpM8MgGpLV9wb5VAnougron2sLgo2xuMJJV9uCHZVxNKFeDMSXkMmhFXcWixyUsqM7M78HtvzjW59",
  "key31": "bQMZjMjsvBHscrtrnLAqjDt2oTmxPSxtBvu1YE28Dsn79GdMCNY5VAtEnPqh4eBS7Ka9XngTiNqno7waZ4STjvB",
  "key32": "5gYdXMWC6SVAywPYTUJLC39eNrNXs5QHazuctodWz8DABbEhJTqk5hvGgM39t2QtfLmdaCjNZsxm4ka2LthkAYzq",
  "key33": "35LVVThNNKEeGUAKeFizggch3YeChFFgqovPLJ8Tn1i4a8btSaz6cgMmgMJWFhxb5MfZ8Y79VxKSghBin9dPLduU",
  "key34": "318VGzEbrJ8KDDTrqrLuqvhejzVMD77Qp4pp3oXyqVM1xyLrDUb2fTWD4o3ZbgK4sYH3B9aUF38z7qnSSLmWqB6E"
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
