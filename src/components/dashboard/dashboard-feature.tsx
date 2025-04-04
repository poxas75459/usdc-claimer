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
    "2hUbeCDx4XJAXDwpyPTYnctttVLDGQxXEFxMkzpVqPvZBZLfY2Hq2LLdF5CoGX1cJMSAWGcGm5qyKSESuwpiieHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1nymKkNFGSc8jZ4UwKoUudLvjzF9xqVcXQgisGkPyFEkUoXi4yCzvNwv1pFFzY1aVsURrEsKt6H3jLjoSRFJtA",
  "key1": "gpZKXQAaKvbz8RVrPPhLhjGvfchLDXnuTeYKzQVr3rGuQxYDVfQSstjPe1xsnd8W5vLcZCaBTzeusPwWXS6Cq9c",
  "key2": "49JK2Ji3BiRfuTeenGjRUgTMAA5BVkRxWeinrFPKEEBVC32AekT12vduuxgbyvHYBTaSp4VpYcf6mVwqB7dyuQmy",
  "key3": "4EVqSYu5aUHvCMCLXfBWkLPdFKF1ckKxMUvPfRaFibyqDqfTF7DpUREZaTe9Zbce4kXJ7LrKAJiguWnMyuC7fWTy",
  "key4": "2nPhUuJAW8kDLcApQrCWW3yguqMvdSubL3TbpzWVeU82SLtxkAuyoEfCcFWSMSJLQm9yez3Q9hjR6pHGEPJ8JdZS",
  "key5": "4xv7AiiSe2gYwwkXZgrXpHiQSzttuWBqPSdY22AziJUjGQABGnTdyKHL5zeovhxMQMCKaudNN5jUmbC34YCyR6wd",
  "key6": "52Ce3EC7sJDB5kCrN52vAgYM4R1VAuKbXnLnCs2LEbRHxVCEaudvUJd582DoPdJCqyeHhXUdPmq16fd4DfkKAsad",
  "key7": "3M3vZsrCoEPxK7NbxWnh1gBD4aXk8sgMhQFx7mH4nPvHzrostjhy268v5qrYKnBdDuC4tdKm21Fw6TJMdpGnFm8m",
  "key8": "4keVMwm7dF3wRBmhGqsPQWYNTZfpAee8berYg9dUxcG3wFDyXGuPa4XAnB4DEy24R6iUQe9A6caZb1YXbMpU2pPN",
  "key9": "52wKZEbvdoaBpwStundEdXPwMXUChfU7gtgX5r4NkZvSqFUqyf7mTuqVyA6Q6cx1SeCJH7n2m9pnP3yB7B4jt3L2",
  "key10": "3QFkpivEe63eXExUCfe1HAp4ZthKpiqDkURJ6D34WRYX1f35dHKKYDFdQnast63FB2TrJWas1HisVoEaVdRBdcfn",
  "key11": "RBsm5gcoct6FmuntuYTf1cTWtfEx2Pr6gPboFQRpPL6PHCNvXoDnKKN8Feggjq8W3viZND5SRh295ja4bXRc5fr",
  "key12": "41rFLv8W4TcE7kmMHR5EMvQFX24NJemMBUCNzrf53HX4sm3xPVgd5GsSevC8Ek99YKCndGxUnE3NXjwievMHm6RC",
  "key13": "22HVgDhB9KngcdNgAxgo3Fze62uu5ioCAnFdiXTC19jwqUYCTPzMnAv3G9XPg6JN621rpBRDVBz1Fv8ssxi2HyXf",
  "key14": "3g7661QZBWj5TLqdJaZrJGyaVzeXsXRpE5hQ2hR8tnnYRUQJkP8nKjog9S22z4UvBYKPYZSwBpgZGhJ8bc62xWD2",
  "key15": "3LRHp4R5EbMK1LDYkntEnB6UpA9cYV84B7SU98EWH2hwAgqn24FTkJ6aHVrD5YnTTvZfPK4AkpvjTT6yogaskAeM",
  "key16": "bpWuqLFD6Hcy5CyrbVED5CCR8Yvrt5KMWbbRzdU4o6F4x9x6Eg8ueDTLZLp9d95yrByb8NxEM4dcxKhbADNoiAT",
  "key17": "2iv1j6QXSZzPwFhDFhvuV5xrgWfZJcbHcGipQLUuscU4CcEmpFKMchVAK7NNRtdGVMJYknLUn1iQeYqnQnDuBxnC",
  "key18": "VwzpWFi37ySFi3ozqU8yNy3fTkn7agJFxmieAvPecZdGnUgDTnNxui2Dt8rLPB6uUKDxE6oFdTSqgj2qBjqdrsw",
  "key19": "3kiqKKUMHcWvY8U6X9yoz37LAmXw9EirjeZcs3TEBjSGWPKYXTRvzxyqLwPfoGYgKpApMm3N2f8d2EMpQGA3Uuod",
  "key20": "42vtX3KKv1isQRjDoLPkCKRue9GyipZoirg1bYV2FASDnP2QthjjB8YGHL64D4w7ffnmNncFtVYLV6Ba7TcAjZ2a",
  "key21": "4KDaiWF7bfa9uTRFpLGrx21Xj3Erq7dY1493xPaTMt4Nc79v4LNiJeLtrpbiMLpburrRSPJVoKuzjNQ5Lsqcd5V6",
  "key22": "5LX1PibLhCi6jwdZymm7GFLRYBt9CHQsazT8rqFkBFwqmuWpgJg9yATfU13nHKa9TKZa53nmDZ2mSgcdffJryeDz",
  "key23": "2FRfpgHRB3j2WGyd9JGCekbN4TK8QSvyVHSYrefA15pQe9YqeezgveA9GiiTfLFyzhnSiR7amigZeYXhq8krRJFw",
  "key24": "DXNnf1bdra8BuqqzqzycMMnnQFsRbo6Gw8bbn2YV6SXbpaCQ7pvwXB2UrXBsnQr41UAXHyu1WJcJuVRk8CcskWe",
  "key25": "477Zk4YzR2b8xS7DcqwdgKfDjZRcpzBn6EL7XMZh4oKksuYGEarzrzd3ysWqhFA4H4UZjFHx1zF97nd891X77SGm",
  "key26": "4NMXrHLdHQkMcZjWaPzyjoBPESu5hBcwYSbgYDfFtTmVsvEKXhN5hok5HaV5yCyUi3pnLpmVckKJpLcURdCdfxkL",
  "key27": "4xjjx8E3SnELux3koc91uu1QFuw6FiwdmS5eKUc2eEjioRT2J9iNteSt8spUzQDKPqhsH2ZH1RtCBgRHmoJpJMPy",
  "key28": "2tCzkkr1SVDWdzKxidtTzLs84T7ixd5K4knZ4qy1b9FqGzarT1CaxNyKeW2hHxTB4EKVicWXzNrEgvUEg1VFfRiP",
  "key29": "3r23y4RSUmumcQuW7ChaKiKemJtwpChrqBhXqXa3jVDC7DMp9r6hQ1gGJv7KG12jCjfvPcd3ts7Tqfa1dTeVxq6Q",
  "key30": "2gCbdmXed4zYA6mp4GkzoDAGjmeLsNUbYjsXhjK8tnWDECkYXLLmCN71oTXY9jp6WWHWzRA2RiqQdC1t5NS2fg7b",
  "key31": "627AjELXqiUxnVQMyrmfDWYBaNJB4mb4c8o9kSoYMJ8xJRtaEPMruu1Kvqu4BrUV9kbGZhrtviQ6NfegBa71hdBQ",
  "key32": "4Vr5cr4mMzuBGHjTe16acfoMQ4cLovc3mMC84z8hhc9AzRB4BZ7PFy74txS3vjZqLTGUoXnbLb5TG1AFgZnC9ukx",
  "key33": "5Xhzb6VR7u5QTYzLACi7hLcKjC12dUmdyLp3SJChgu6WvxoRQr9SGydMYgB2KhsxxikLr9qUkDH9BHWpSh8UQNwi",
  "key34": "3pzWBoReVNVmLVBtrg8hcuky1L1JHvmyweV3H5rA2asdaLtVN12QYMZ31Hhq9jZ7cPtnyX1GGsGEQ5zuMTRDFx3P",
  "key35": "3ozTQ7qupYoqGNfHpWomnmj9RJGt6PK25foJi5Z4WRMJVzLcrztxxKa437V2kPSV8RxSQUimaDZVoCo3N36qapmK",
  "key36": "61qj3riTbc9EjsodiQ2V1Ypnj3eHavwBXRiXjPDhhcUwxbNzGDLMjhFGYASs56taUrx6HjYA4vCqQ3m2UJN3UPUv",
  "key37": "2Upgg84HxGoStcG9qo2nnSstxwDuyNNtnTD6rC44VfDhHeqRJE3xWrh6snBSvHPvjhvmEBaRpK2NfnpuN8LSqWUB",
  "key38": "5xoT3cBXYkGYAXfy4AD3sVxiH4KxepbqnAukLkK59UMhtjxxAi3xwwK8zZ8vKDLQwEH6S8n8HUcg2n4f3SHeq4zD",
  "key39": "4AaLosxkcbsjiXordfcRoVhiknQzA5me9JXSu6eRQZGXRg34oLAirb6g8eb9us9Z4sHqRR16YBpsxkmpSURaz8s8",
  "key40": "4ohshHuDbDuyec3dEuGp7VvDmKSaFKewqo2VvdMva6UUL1TFcAH34ZfEY95mWS57Rkqb4iS4sZJypo6Hiaankx1i",
  "key41": "4LdG5nWevTvLMHtwqHhdNWeiXRvZi1esnYcoHC3R47Y9yUW3uYGFECJaoBP9Tvw6CfFX56AatJTAtfYGKzCSoBfn",
  "key42": "2XLTqqKd3B2wkeEWFevJ46fJk4RfMZWDDuWgKCggRgHU96xzrkk8tvoiZYeTdENsGLNCrswnGfhKHUaMcMAWB88x",
  "key43": "4uBmBcaqiXKmU5saCRi3ZeBzBpQG6ef5cSMkBaSc6UjLz7EeF3aUxmTkCDYFwdwS3N3JWuPCVPabWyeMjdWEW4xc"
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
