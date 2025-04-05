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
    "4sLvZM3DFiLjvqGuRMaRY76URRekhn3gGzNRpsGYUJHHJHPDRtrgyQmUAsmb2htsNVJsiqhANGsexNjqBK1KXW7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJ135n3YX7YWpVH5RhRPKkbYV29tjA7qs58z86exis4pPUUrfCcXBsjaeEzHf1ARo37STAcuJtDpbcEtLzbgPQq",
  "key1": "BGiL1AHHRtgzYus2nbtgDcRBn9Sd6Dy79aF9Pq9oQQBZNwJJ6PNk11WKa7nBVTbGnFeHis3uaRA7Gfz5TotkYds",
  "key2": "4HxBftYqsXiaHRye9VHCXTW3DCqEHtaMfZ4DNEMUGmC5xqVVdeGqshKD9fZyhCwccfuGb4qAMzvFganPZghNRUJS",
  "key3": "4SQ7RdDRXrwWUpWPakXPhDW34PXkwfZfdt9XfSPaZU5y9SDCBZFPKEnW5xnpJ7SVnWCNoZJzk9FwqLhBVDbLWtn5",
  "key4": "52sFTAKp5AJd1kdLVfYJbryLwrvERcd6vTERP6juaRjiWFjrhszoqwNL2ZJYTX9T4xybHNzTQ8KkRcvg7UEVPQ6v",
  "key5": "eGc4QVyMpjdzCCVvLBQpFQkybRb4NaHpHrJr8vRdJn1SCzXzP4TmXngeogS5oAD52fr5Hn2Ksk9s3RL3KX5bQy9",
  "key6": "4iy9bz82vFoD3Wwq3pUdLCx8CAruCJyzYvvhPVwLH3QaQM8KJZ8emvmgpvHXLKh4HPss7qGFiunoxkTQ6ispcZ4t",
  "key7": "56qGP7p8gWVgK3eAZYWcQJzUy8q7JuYD5tEANXmjLU9BsTY6aWUq1mgLaS5n1ezzDWDqtDxdW2PEJEdvw5mNVJvA",
  "key8": "2x2u3KfE4tc6Tmy2RzwkEUsVH5pzAnf2S9BzdxbSf2EKngG52u3kPreW8ykKSp3nqX5u3dAK3vyicaMKZ8JL2zTb",
  "key9": "3mUz2ZnHmvkiraLxFpbf8XiLdYyxGYquf6KUXKYj8puVr2XekvAhUxjXZULzSJCuqiMTPFDWwDTrBHwcaEHExXMd",
  "key10": "4crbE1Fax5NJBRUEBcPVcQHBDC34JL4x696NgnwtCrg5bnxpABroXg9J6wjdnqTMjSmMn9CBcxoS9VH7PLjPhYQu",
  "key11": "46Jk5y3u3PVDtT9QBQ8BbwPzSAFTUKHdBNEvngB4xeCjGnukfqJBVDv43QwXXeFrsapKgtaTUJ9PVoHtBCB786UH",
  "key12": "3A7Kzj3Wv8qj8e1Mcrcwwrtw8ZYVhZbVEdmr2411FCBLsMCWwzBaXQrnzWUhsZ9My4duh7ZTidc8z5PvZCZdnp8D",
  "key13": "23V1844rkvTpjN7SiM45kuRK6WTCgFwiwcGUNCfLfA73A85Rvh8SYSPp4GZC3k1knkZCc9YU7F2dP1wRhrkZBPEs",
  "key14": "5HNiHPCRYNHuT7pJmAjxutv1MiJpynmH7zbVE3iWm3ynxDizvspdamhDBZEuyMfkkvH4bwM9r1g3PCsAXipFnPMy",
  "key15": "3MjYqkPNhXJjKqFaVJ7aJqHFQ9tN5fwPUoLvGeNQYgPLwcwQDHsJSZ7F1a5rrr1bMBSm2TpU4XS5LhTsVPwwWSuX",
  "key16": "4YaJ291AZt7gkhsSSwbcHV7xWdCEUG1S2rYbP6z6X4tat8XZG2Q15CkAMnqaPJdEFU9x34xbuCpCav3fvCU6281A",
  "key17": "5DBeUjMDwsHQMbcAWY8jbW4yQ1koqpSCved2yJNbtpPsCYFksRQgRznwCCNWccQWgv4HMQio6nebfENFeYgpRRVb",
  "key18": "LEUqNWhN7T4tkxnp47rshPtJdAXYPfmg5NRzAUHriYnKJkrQ1TkAuUTNg1xJN8HhJFhQEHiJdxYzCEbQM9f5aq8",
  "key19": "2gKdUEPj4bNsP76A4CE5ZACBHcL2suuXzRHdYATvLBmKDtHQMFyZ6tzsNG9pe3i3jtjJV2Cgo39ez2kVp9QX9smN",
  "key20": "3M8GiciP45b6gLzMnGHxGc3Z45wowVHj3Xgyw7YAk5k3k5qQ5pq4CjHjWxLp6PSK9yeNBoPTqRCKuuWDGrpgRLUi",
  "key21": "42JcgPYKASUbdeKSQDW9PyreHZww7AmSqFMsAroxthjSULaQ1KUSR8ERAZoSP6qm9mLx39qP7Cv6ptB5A5juVVPL",
  "key22": "5kNrHrf5dFP5UvwJN7NGT5ME93Ltqv6om7oxMvFcFce61zzLX2VnSe1jyMgSMewVbQmDCY8VF3tbeMSm3kpR1vUG",
  "key23": "59qouiWQKHi533txpT4erMak8Wfy8tPEctk15Te7PJBvqQDKR2TVPhXUH9qniHtRdHVewpbLHHG5r1P5SsStJVTP",
  "key24": "2hFVKeWQuK412okaZ44FtGCoo6974YuG2Vn89qnA8UYGeHceRLRHX37HrBiRYLW9iYAaQ36HdihDAVUhhqsMWKaH",
  "key25": "36y8WtoMWYMmWZHA7VydEa5n4TU7fXAqf3ypW2nrtXvYpRJkiHcAqvcNuReASu1KM5eNHeLXhHkmMq8nwz6Q23u7",
  "key26": "3iVNdGQN69TeDZPDhfUVW4yq6qTqJnuvjv3SY6zHet6nfAz5Z4enqER6zCCg75Th4bM361v6WiysBReS3yA9RUGi",
  "key27": "5XKcQ8o6zeYUjzMvxCFDybAizL215SMwMGv3rQjBDX6JJ1enS6WL9rgyWGcWs1T8d6XS7GiqHrJp3FUGK7dXcLzX",
  "key28": "5yFygw8XNjjMtW3KAssUgkiXWd1i8GoAu2unhtQTnTHybg5hexC3EWiKEDsyk8vVzP3oBZniunc8omBK1NBQoYcX",
  "key29": "5HfDKnTbtANcnwQ11mJu2vt9UMRJGgttRgUAvMt24ZhxLqZHSw8cQf5EmchLmzsHhZGpdnWvDZqMfrVipN5XDujg",
  "key30": "56ZHNszyqRMks6DYeAPU1dmVnfhWfV1pktBPUhW7qiuSrniTQzsjxg11ahHLpB2nGXxiYYUcKyU3X6bAUn7JhzDx",
  "key31": "58ua7SytKYEdawuESs2PxkCRVeYkqf2nPsNnQHJvWhAsuyPPHoeGADYnJrmiAXdhVdQs86eQTYy2JW65K8ckzMXy",
  "key32": "4tvyPcFv8bRvAhTgBj7Srjf7DPnfnPBpe8XNQNBUXLaRmd7cXS4o3mshhqFwj6gMXCnunveM27jh1RRoN7Fnb3Ae",
  "key33": "2AQvD8QbtZRo4TsKPfkuarRyjSdA5xjy2Zkds4rPswUEVbp1U2mPUyLphLfmTD7u1oQFnxU5JMVMvPe5DNM78Jeo",
  "key34": "4YeJq8L2u4ZSBDkm5L4tYw2v1oR8CRYvAEm9BvTiijTpdJ6FChzBiPHMQxJxkV5DEjw8twedUa6GoVnyHEWfhSzG",
  "key35": "4J6bWuwaDcP9xSteNYx4X9Ln2f3S8fckzEJWmbeVLSa6kh6H7EgPSnZpyA1GRJWLDQAMStCNZTP67XpritpFsyN4",
  "key36": "349CCBmVjZ6dYrZ8rYNF4U8wZDxvW7KdiFKdVit7ndwKoPJcvkVGsp8v8zrJcPGSmrnjwBhG3kUS59TH7A9tp6Nu",
  "key37": "2xJq2wuTqazUVAZ3ELAaahSoAfPpHSEwmBeAXckynGbn1XoaimnMNkaSKqznyz1t6YCxYknDrAB826B2QxsR6zTt",
  "key38": "598ZW9M49kveVRZfbd5hX8NVTUbJs7y6623yAW9y6Qs7Az7XV4rHPZ8zpkTXZF2V3Z21AcBoiNXSbnxiYsBVCvLc",
  "key39": "2uSXhZTVMWDEqVb5xoAcSFwu6YdYC5VxzDdXBhwdE39fJwUB4GREqCvcwN6j2ARr6Vf1HTsM414YhRxQa3fkSBct",
  "key40": "56bha1tVaEUs8hFwL8nyzNdzKNfkmyrxpLxuQYkLmoAxd2o3EzWhfZVPs5b7gXkrZ7FrjB5vTFe2e5FFQd3cf5Vy",
  "key41": "65akHUftYo2rXdqCAzegXtvqQZgvWHWz7XvkVTt6zQp9bQ6kaLmDszWRs7T51P5CXrqVbuYqrGLTKX4caEd9r4Fe",
  "key42": "cAqJsE3zrwDAKEJ72QPNSwLeyfrgP5paRxcW3a5zzuCmL3x8B71fiwDdSjqTvMLe1vN1BAUUa54mufCxY661Qac",
  "key43": "4kibJGrcedB7M3269WhaRwGNrAR5HUDAhsaBwQSBnbMhZLhzFFY2xCWV5826FC4RLue2aXj2qSaBc2jcikx1Kdbh",
  "key44": "3do6DhqM7E25KVkVrPMnJjzSxQs3sdtK9Lc2tYfsctHBDmAuyURwDDZcRxBKX3M2T4zP677YmBiTkCxnyzayCRaA",
  "key45": "2C1ko6mGPxbAWPPfZ942xpKrjcXs2Ai3C3kK4yV1iVo9ESdBJX5RD3Y5TmDM8nEDTvAS1ZAxYfAN7Su8JwQG5myG",
  "key46": "27MUGR9pbz1qEJG6aY2rNN2sKbsHvUTBiGX3wCPGDDvKKD3fZLY67bsvUZiovEPxVhRHHoskdKqBFtRwBQvzj6CF",
  "key47": "4DMgVNabHHKJhdyURF1XLpmuQQuKA1Aqx6bHat4a9vsoXy5CkRFLL1JCF39QsAjJ21A5uav3uxfnoEbG8LFiUjJi"
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
