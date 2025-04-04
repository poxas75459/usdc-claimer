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
    "EjbjY422667tcKFJSWkkTZWXG2CA6m6ijaYp4hM57XahrgPNKG7qhJu8qPfvzZm18GDJBXHUkYDamdDQ7W8RwKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYckFoP6waXxxV3qKgmExAfq22BXpUSfBdcMXNpMG2sEpWn1asMeSspFjGVUhkVSgtR6H6E33qSfmjVsnoQeLTz",
  "key1": "4kv9cDVARjBhwU4FbBn2zqFjSP2MMRCgNS8pxCxbeQ5w922WsmybFLYaTPippSpKAcocGdU9wWWMe4N5tYof5VF9",
  "key2": "2bHBDMhCe8ExbvGJ72YNQuUBUSRLPDvus65GFHuFVhxt2i6i8hsb5VwFt8yCximvcruq6s8v2GXj4Q7Xsrwg4521",
  "key3": "aUjjEuhUm1u3fXHw2Yfm4mfaP8Z4Sz7Gn6jRNm8UTZm2F6gCC3EH9zLkqznKyoo4jTe4T91qhQUwJ2GaDUAAURU",
  "key4": "28CAHMY3CwAs34jmoP558PifWMjEUsubCqhe8pxkWXWGfm5G3XiC78vaciKBDKr9AmxyYyiPL3A65SQ5KtzWtYcM",
  "key5": "2oJy1ehc6wcpou1Y8NbVbs5vy19eYJHxC6o9xvVibUHW5sr7gKrETbd7UpwTzvrCbiWYdkUd2nXQpG1Ev4yt1Fzs",
  "key6": "5Zig4doinBoiT2eoyUVzhV3MuW393xvCEiSA8thXzepCpXtzqDaGUoQYfkWrS596sAPZpryGvSJG4vb3cjGTeAm4",
  "key7": "5zUmWib7sLmMB6VEERTtARPxgtNmGzzp2wCKheR2HeEZczCc81Ngg3yohNQ5ZYec8QjSmt46VN3tGChZuRtfUM3z",
  "key8": "3tDVFYS8HZcGmPCXF17Sxdq3UcyrfchCFZg2ku5eQRWSF173saKUDF5bcssfmoxMFYb2erLPofL5BBrLb2iWbpBJ",
  "key9": "3293di7LiXSBPX7JgMGwQaBeoDgwZJ1mBcwjXr2jK7A7o4EEsVLs6KET2ZXydgGi6xbnPeKPZp3gkKaH2vcJ2JNw",
  "key10": "3apeTD7zGbzqDL6bfLSR1CPnG5GKzJsFVahZVN3ynycXj57hDnJsZeVMAanZr37erTiWEw8mDGmWTGPy2PWhyYmQ",
  "key11": "45QiE6GQ8vfrSLDHwHSsi9v9L2aYj2cu6Aeb56J1cLkpb4R4iuGEpihpNNSf3wKbEbPSBE8P4qvRYyt3eBvXdtFm",
  "key12": "41yjussWBbdgEckXdv2BoxgyuzSmsousk3DdEQx7xbypk5JfLK2e6YaCyL2XgvttdRoxG5tXK1ibhPDushzntmWh",
  "key13": "5skuMyCPmwG4dRFGBZ1B1eFrwLhuVd5eW5qfrFcCX3R3CFD3aMDj417c6WCw8QwJWMffF1Gx929GLDty6WBVgZfM",
  "key14": "2WSyTLE9tFNxkL1vc1bbXQyh4pWXWjsgHysM2B3tx5C7SHg7ZjXJuiu6QQxgMJDRbgWyZfzWmVmawZ9DKYfw1LpE",
  "key15": "4hxGmaQgxQFdDBDtRD2LrXBZSWbkGuubXhAh7Lrf5f97Xb6VNbh3dsQXQJRPkZRxJTFeWe9dXXFs6EPA44sjJWTw",
  "key16": "4WZz953ycGsNiiYsz528T8b3ZKTExPvYei1PAA69R6hVcuHfq4Ty3eXCnFb7WaxWnGv4VitFWKpXH2Qg3yKhrnaJ",
  "key17": "5NvdQZ2eFPWjDaNWuU7hXrTZS4SU7s5eRt3H6RDKBYig5ajVfxYGGUXWwN7hRjtgzYj91fGEW1mLsY3KQgJVJTjm",
  "key18": "5GH7jZtGH8U7wi8KbgtaSCBjUmCYYfQuBX6cy183z8ZU8e8hWdD1mmv2KrWvSQYQCkzsyiFFekJ45gASnbJVamUZ",
  "key19": "4GXTWZXrZ38zRZk2M2VSSSE4rHPUcmSxKK6AmNoKSMJLFyE27joJ3mRmwJJMjx7a34nrvqkreW8R84cRdtkiZEYp",
  "key20": "5hqqfJjKWmp9WLZ9rNH76qL12FpwBABSke8c41WCkpBJvoFZXkM8ZtvEoAybsSqYmduDScXSuLi1v6RE2xLMBEGU",
  "key21": "4NY8YyAEgcttVYM6nFTcFNPvg8CSwYGsY5U8ewGQ7aKo3ivU4x52MtiogdegiFr95j4C2E5rQXMCCVpivvptt5UQ",
  "key22": "5yzR3vQZVBKDpVKQjYrvmniqMuv2y6E1nSgBGV89yE9PYvd39QZWEtdR7eZnBWAxNZgYT2HWdPMFX2p7MuVpxBmg",
  "key23": "j1r4QY5Vc5wCrezV9ZaauMi236kY7QhRi9qUvgpTbXANW4avqAxzNdmWq9h4ENVcc7dpD7u6Z5g6sQ18U1N6qbg",
  "key24": "5mLbqBngPGWATg9jDLouC2DXwdx8YRsej3JHffu8fjbCqwSvK9NQjmi9f8EZPH5qVX71a9532pMseh2NV4GyJ5Uv",
  "key25": "38yvDKdmFyijwDwm18muZAKujtGLZrk4iGS3WZHxg7avx3CNx8DKbQuoZRiifkrH1pG9Ac6FKqDHX9EWwc8xqET8",
  "key26": "5XGqAzMMGMwSzDtf6veKxJxyDxfKtAEAkmwUTyx5DLM4TnPMVhENMrWZxoFTCRovTJaHeCT1bXLHfQhXtJdtcHYp",
  "key27": "3WaNRBY5GeGViajGyQoVxiJzZFEk8XgKwKzAjVrRyASw1p7Y1ZBgJagju3wj88Tr75tULWYXF5EprmZED7sif9WW",
  "key28": "4qQgp56QJeWKzdGsKYvnpDGk2UT1RvCNYpniYBgQbQ6Mx7TwZHQjuoXCraYYspcytyHz4kZAPmRvydvJNzWRtWXg",
  "key29": "2PvgQ4QZ2bniPb8njtQc4Hr3QKhdZdKD83y1YZvQPrqr2DU47LFQpWaQdjPgNdhqeh4LPnxtyXakpsrcNvBLCj41",
  "key30": "2EahyWVgjNqVgSa6sv8sffCY7VVkAxpDwxGkstTVJAzLCh3XxKJQ2zmCXBoCZZXtUvQSs6Jvr9SuAYYs5EB3fwZQ",
  "key31": "Q9FpPEDbjxVsUYjcbr22RQEYdnZxGDCPz1T36HxrBFGVKjxSu2A8eEC3qZE35f4KjAECwEfkZmwTGGPdV2BTqSe",
  "key32": "2AG4T2hsFFnuLuvK9K28tN4tYSX4PMABaw85P9U7dcQ8RaWAdgd8yKsucmGUnNkn7L4KrNrunzu3dGKTXQu3hBnf",
  "key33": "5DYDuq3Moa6TNr5kebpMqac9yU3B2ps4W36YDuwBMNJrepSfgBt42ZacZkKNaTShGxCvoGEjmALwKrVwyS77mqHC",
  "key34": "5wc4kzu826tgsBkyRiyNV2bHqXNwu7WiTHeS3tTXHKF8x4M8eGJk9RSrXZ56SvYkx6ayz6nWGWvYFfjgyZQX9mDs",
  "key35": "2ppktsM4rwBMKbiuwTuzwtTQDnrxGJYMrPYCkDJiNrKx3AoAaYV3CpFSqeKtXRtX7FEKK6FK8VsjDU8qHrCbSRhp",
  "key36": "4KYsAKCcv5jsRGmtMLLsjuWjZbKzosicH8jp9HhdjaTGadyvK4iNSpGDZhGtnSYZzfVBK7CmYHMUbg4vR7AJ52Z3",
  "key37": "56xu4BPvGHpWYWiLQfMWpztbmTQE3Xu9MjiJE8zTiQqj7Det2YRUQCa5XXbXtv5yJ1jUrPKxK8KNx7bUwPTZmgWB",
  "key38": "wdF26gZEZvFTHsKjRMiwZCUfnD2XMWZAaN955AdZxcjFwEothcgxMPWem733CTTy1JtdofW2xCqayQDVvMtyegN",
  "key39": "5VhvWLVpicVk6ssnkw1JgPRDoUqFSdN1Z7g33NGBYRdY8KsgNCkQHNHMXvyLVmQ3SKPxppYLm2tTnqFcsC43HX9x",
  "key40": "2F3vKAmyMUZABBouu9LbJVdD9JXrgFzy6h1QCiZDehUw45vVYyFeTBxicmg2gpcJqQxaskScavkbGMExndYjCc3b",
  "key41": "3k9nUwnQgBmN5bp3JVUp7UJKpJkM2wkFfr9HHazjGbqpep44CogzPv1Xot655DyJyJrrWxCE918zmehpeXP9JoD2",
  "key42": "5269ALYzC4jWDaiUzXSNAiuxKtWoMXTkf8ZmnMnZHZRKWVjsmxdH1FvAzcabhgo23cuQrgqL8H1cFna6tB9KE23u",
  "key43": "2bgZ9iFe6nzQZBRRQDDb8LHAmPzNW1Ky66qL49KZWZq8D7hRveyLWrQEUGeMirDEKg6J8sRQ2h5BfbArkNAG3MAK",
  "key44": "3Q1766wXwUSCFyL8au6G79EroXqWBg2rZnw2UEkse2Bzc9ixneVG1TpVRsNDTYsosDxiUraGFvkF6WhqkxN9RcW7",
  "key45": "3Cm1xeVEvwST7YJPBxXnRhwaG5XCFUSJKXrmqdMAkSnM6wcps1RCKGJbiTQBCtPV73EYxoBCZDQGgDimBYK57qcm",
  "key46": "3NMCg9CKEwj2JzoZaNy7h7kwkC2B8sdWk7mnkLY234bRmWffhveW75rKvCQRhptb2ZAuzRJ5QdvdyJcgTNAJsEaF",
  "key47": "3F5HE9nRi8uUZCAZYoonQfVCfCcM5n2eZvs11Nxd8oJacz9kNGEWWeJuKwRpqxEPWMcfcra9VrzWDnHJM7T41kpJ"
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
