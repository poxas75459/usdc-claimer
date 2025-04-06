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
    "5bBApP4y9v1upS9dwNQBFK9tVoDJJjb2rdX6kWW8EF3k5znBeWg85bbyXGaWRiAA5oSKqQtkPVVJ1XbgUZYeHGzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oovgx23WZbJVDuXkow93QUZMa2S9i9DXhMcZ7US5ZUvkqeTQ7TzNeeirwk2TV4H3pfWtnMB5F6Rot28Y7p2f1Vr",
  "key1": "2dcZ3yxMCivdDmmTcqMnG2UvpKbnJeWUSxou1bhoJKo292trjXPLVo8VuFDwJEn2FVuCmvTTY4JL5L94H1JKoJbA",
  "key2": "87YKPBn3WhYCHpB94kPCZLs37aVkaCZvHGZ7VS1UxrvcEQnK3h8bAZtrBiC6bUhWdrL9pheRv8VYAUQJTrDcyHe",
  "key3": "2MdVUL8jq42SVAHd4M2d2P9xuvmpqqaPjHqLtFftMrsenks6JHnkL2SEQ32htfQ91JXHQeQu7A4DtmJNL8chM17H",
  "key4": "sfkGPZ1SKBAvSAtz3MWYw5TTLQpqxKaqjmVzteSQm2zk4n1o3RH4nWk6QnrbpZD1V67kpNphiW4U7jtt531i6FK",
  "key5": "65ZcxhtbBH7EGU2PN3hC8DhDHuJHKYAa4T9A5wBDkxXtgMtCE1Puja2SHS2WpCpMCM1BxM4F6tpRNBwddRTfBvKw",
  "key6": "5sENFnYA4S97gUuzHeaU5ynneSogKHVyK3MnCrqPAF8wNyUj7YVbrDup68xuoLAhcyrJqLiTgPi69NL6rPuLcPVK",
  "key7": "5s6PUtmaTqJ5BrUVFCZQdt2FMypcdR4cYFFAhBeXP8J9r4Zh1mCh12VaGgvgXJXMfPqZ3ZeNReWa3JYvEAnR853k",
  "key8": "2nbGnkGrtmr5dcQdKFMuvsbp74USpYMU3KSg1fHRM5S3GxdvJiFjtEN9gXw5tw5J8yfSG8Yxp597TiYowZ8U1swy",
  "key9": "5g42591KfJeiitpssN8Ji4VmPm4vcsZerFxj8NwwuZMjdVJWD1y1AQFGYpKj3PW3HPmkE2o4iacSxVxCj1cQjPKg",
  "key10": "4o2oZW4H7Yom5QfadJqJe6H7piXNKe1z462jwr9vCRbFWdChi79fNrD9ADJsepmZiqVb4cs8a8N6Er7MCxCEoERX",
  "key11": "5PjrnS6ybLeo3qhGJYbMzEbC8JKbh1Nw8m4i2dybnftcfhenv95fv8taxR3urAp3vLygVtm1ajukCqCFu9FV1urM",
  "key12": "zwuZs1oCGmHzQhixN4bddcvVqbMdRNbiLPsfCcEv8TJ4ACeRtGmXeap6hNcaAFymsouf1Yqaqz3WfwtYEUUhv4m",
  "key13": "3Kz1NPeCmEUke9djwHdgv6xU3Po668ZNBDQkvBGptTJoXKeXoYgsuYi2SboKDjwWm6WjKHZqZSqSQoXsW7a4Bcyg",
  "key14": "4Ycu3kTxWuWmVonKqAJUKnMYerMXf48a2gXCwvrpRxLnSmrjn5RZoCM6jFbsjoVcE7mwpr1x6ii4zzALz2XYfuQb",
  "key15": "4RXqbvg5GAxUJk9eEtR8XXmuiYpLbDpAR7s4TzARfoVTKkfKAwRWKmRz6fiMDHTVSEPMT7TXeyL6tzTLL669bDqm",
  "key16": "5djP9qkk5iBjpdyGsFEYqzDYCfsWzeXCKntAzxvgLghfgEhMZH4cpAiYUMpkjhAEYzxMX1mQLeZHAncz8k8eAXif",
  "key17": "3Dy11Z1MKdohqckS16FpoXqSdN8gyX1cC1nVNZPbhFBbV9zFwuzaMLHo3NVo8upXZ3C5EKy58CzJFCV4Hk6TD3TD",
  "key18": "5NVVJiH25tatCuvEgSgzEkoMuYeJ3RVyj9GtSmfMUAKXduDhLxm8cSUCzmnLtD9Dqn7qKig9j7LqR5G7vYx3H1Qi",
  "key19": "2Lh41aux7AuezQEzYzgBzVKSn9Yt2gSJ9fv7hQV6f1ixKcz21EMRWWd4Unu7T9tYmDBuyfsbeEPiiqpNGm3vBqWu",
  "key20": "5k3GqpbxnXBzUa91w8TjC4h7Z9vKNMJLUpZHw2jc31Qqb9kDR5t6yMwsUBs8prRzybnLejd7iuZdVUfXdbp3deMG",
  "key21": "BjgYrdCX8Lbdutc4Hnb8pUEWfAuGqFNpfEmBYV7DdxGz1m6ViWEu2AVtNBJoAjt74RFCQpcdoWXFUziGp1Cvzj7",
  "key22": "5Lw98JgV7ZpX42q4gD5Un7ocSG2YiGHpQkUpzCM3M9s5raoGXyPa5cLPYEpcF26gA9wLJdp86NhYGhH4JXzhUVJC",
  "key23": "62DLivLbfBDAQHzjqevnsjj5VCkFm7wi7sUqEzUucZp86oMCgAzoHjgkRmL7dCiRvLuHU3GpFuc5LpQEnwxKy78Q",
  "key24": "63JGMuNZF4HMhM4djeHxghcnprkk1pXT3MVpqFCBH6p37EJbwfNvEnyNdhSCKoV9ncQVZYdXxcKVuFkCEQYMPCGo",
  "key25": "31dUUDARM3WhPYnArx9ynUongTfjCQTT9KKqkdJfCh8AxPmC295MUViysX2Q6C7ng6us2yH4ewFzUAckUBbiceoS",
  "key26": "3f4BCBESY9Se8j6LFCvRsWeyX2xqPqGCzFTa4r83i38b8W8joCtda3P9YWi3uwPwpMM69w1yKB7pMq1XX5pW3zwh",
  "key27": "4GUymXiFee2WNz8WnMsWwS8URSG4k9VhsUjv2xkiXrCFyL5pg6DwJfvZYwNzx73hCVj2Jn5Ap43vZu9emWxYwZTY",
  "key28": "3cF418uuzTgcULFyKS3457f7QyHBR8oUQ6fRZ4TZsqXjUHv9TvELXGzU5MzvVBqWyJxP1r7CscwbaXBxbKUbbFaP",
  "key29": "3xAFrFFBUGRWZSVyEGYTshvyxMXzGwXhAmZZiTqRKbPGpgofiZGirmRnpmTQkkKzzZHfqo6UDMF9f6ST7ee4U3py",
  "key30": "d365TizvNq34SgswHDxP1HgjnaH8CUiN7dboB8xvfM1z8MEPFTC4oNhML4MH9sw82inhZ54QJ4HHQpU1wokzqzf",
  "key31": "2wSTtVFaRkywp3NJcSHcWCMLSrv9Ap9Gx3iVPSm3GbEWWkDfnz8wGdAM8gQKpENaC6x2mUe1MD4jiQMwr4sW5hRC",
  "key32": "3AWKaqr73zekRTBDPh2yLXKiPmiajpAo6dhpG6m61YxNaafFCJoD8WFYWasSHLcApcZpXrPNRwbt1L6ZT48DDPzX",
  "key33": "4hrXUUUDKqF9SBXN1QbduzkBd7PzidWwUkQ6gZgQTh6egmtoZ9GgaqMNv8NxXGzKQeeget9JppVquv2b5KYjm2D5",
  "key34": "4HjT2KzMKdNcdxeTrVS6WVKp7vssBjtqCWLUYNmU8JzU9HS6KCsgL2TkeVSvzo59adud11wa9E9DhFvTWCGBfb7A",
  "key35": "3Z5GVbvr8XrGwxyyTfBHrRfJLHQCwJqh9h39FTRuHhvKUfGDnKMD29utEac6hYNcKioNQzAKMXw1kt4UmSJkcEwd",
  "key36": "H9oN5pDhQ5BtWi8ELAwCC7He5Jrm6qKBfs5TaVGYgJ6wsZFQt7YBaToDpz7vbgTfuRBDpkowaVXRduC213fQ3J8",
  "key37": "2JWiDz93tdrxUovgb9xmQJyiK39KtoP2VqeWV9ZD8YpAZtArFn8fr8BmzCHi9mbh33yqZwoVSKB4pUExh8fipFTA",
  "key38": "4t466Nz4xwdHvpa8fJvogYCeTUemKQqxm2xRwosyA5hNGEVZQhrhpXQFKc9Ee51h3WbYg93mDWVFvHcqWboeYPEm",
  "key39": "TwwEPy4komUU7puHDmC2QfdLtJFz54MyWarLiHrYzgLnoTttcTUmGsGPPMfP4cHVauZSK4dUKURXTW6djTvaiiW",
  "key40": "4Jj5MdbGcbdPgGeNZRwM3ob2XW374Ua21LPTJDMWasaYX7wc2zMe2pk7CxZjWu5HJytCqcuhCpWBPsWa2QEqZzLX",
  "key41": "mwCM8Bq99zA3x9zjotB2GGzzgJDmyuaW1d1fpsQzW4cq1FQPUudrDdrZ5JBVCwrh2rHUQyJbLiGJS7LeYzAW2K5"
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
