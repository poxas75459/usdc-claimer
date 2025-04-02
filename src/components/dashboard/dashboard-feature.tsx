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
    "5fB7VbCwu6T6prTTiS13ViZJsQ2t1ZTG8BuBFsNBhWkvrTY14AmEnBjc5X17g4koVUc94wcgHrHm65RMiDiTiZNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCTxmzh8gstTPn37PgV9UEPSL7mRG197L1LMM9aE99Waz95hyM1cKnUtFowy4JGta6Qtdo9jCqfWoriQ8z8vV3K",
  "key1": "3QjDGK5ha2TY2n7Qj73iUvriTJP6XHAGaXZiX4DwwxsFX7EaAsQ5HuE5EYmyy97KAQZJM8h3VeKS8ztVnRs3EQxu",
  "key2": "2BZjR6Rh9vRkvXxNTrae4nh4K2YpE5erfwJHn3HkLQapjuyHiggZYwWz5G1yHBdqJ3fgDHQKqh9JimHp3LghTmQF",
  "key3": "4Ai1BUYDUeSFRPCWEVSALqrrYMpbcJT1KcdSYVsPyDDwDJ4fikZALpyeyjj6RtUFFdnXcfQCbv6xLXVSZ3Cqhxdx",
  "key4": "5obVfZfJPkjkGXULae4RvxPcoTqPvLFsni5JwxLM5eQLBhXPr668NcfrSPNSGuW2Lh85MbHTMemtQQh4MfAZwAMQ",
  "key5": "3sAuev78EYw1rbEJVkmJ4W2REYwVAsvcQqU4dFGStz4oRhfK1iYN2dHXuEUopRnvmzpEs5ThRjydCetv24XkGprv",
  "key6": "3PC1414gJVJurTB5ZnRVxJL1B8czwPPwZtqe2LL4L3hgt6N9UrKuqvWaAx5aiQch7hrLxBkrqE2r1ckPYPmHX1HA",
  "key7": "5xtKe2Sy6eDRhCB1F4jgGGeDLn17M8szJK73DEzNRyMLqeEeSAWGNqpkp2Bg2yLCRvNNEkCvtkKyAz1cJX7HPPQP",
  "key8": "4oPqnRtoDyhqbLyVmEEUKT7S4ts5igSsdmsyvco4yiZ3S2fUBEsEUbymSSc3i2jhe5Nse7EoCF7rRhtuVatWVmvK",
  "key9": "2B6oWJJJAuugtRGtVyG7aSJfBAh7Yp71uVFCmUQ7rbn6dhExqyrBFL3DTuiJxkQkRz6AEsuWzPVY2AdQVApDf9Pv",
  "key10": "shtCknEaxf4YDJuFRr2hEdWWfcAog4ZjiSyoyx2gRP7Hzhx2Cx76EGprtzwqa2MWyPtcaD87c9VS2iYUfBS9Hk2",
  "key11": "51JbtVL6c7vjQRscnmbt1883fhH3PFhibZXCm2NhEQGPwVuyejNCcnifd8XP6eP1vfNBiBWNs4VLtgxcF2b6AJHV",
  "key12": "3b7UxmhiQ2AhwLdE5cxs9jyhoh6p1pX2c3xxnZKKfdEX5dBhp8QjvtoqMocqznEsUDX4e6qTwJV5gkCPfpyG4Jee",
  "key13": "2JyCobhwif1fDTftVtWmdiaTatPpYz3AeqVuQDwu8ShujesYegESJda78tLTjUur67hUB9PKnLDvusb5oXqCwYKm",
  "key14": "5MSaDjzdNwz7QUbTKXaqfqadGzqMYxQNv3Ym7W1nzRaX1p45yQPaAzPu3NKz4W6d4D4M2FYuqZFLgd8c9crBDTru",
  "key15": "4HaRXEEwerFTtANQg9ABHa7dVapKEJ7adEgKHkotTETkoXNzHHzFzVAy6QVPkQagfmMp8XW5DWAJt6aa6ffyVPy1",
  "key16": "GqRrDugaZoCxJixGKhtuiyrhPQjXbGEUDRnYbDKhdDX5GddQJ9zHUHZesocV5SV1b4jFoQfCzZAHKK2JSiLHjoJ",
  "key17": "4Z3bHtsy2fLQX5KcrmoLXRG3uP1wxmtXKuVhKAJFccgZvHMzZRnsmDpf91dXHff4KuVgMgg6V99X3fTUSE8rhFGq",
  "key18": "3y5Ues2fiqCfFJ83mjgZdadF9z7oFybXdNhKD58jf8ZAib3BkQWscF6ycnB5cp7KE4pEfHohDYDZKsYmXP475ckA",
  "key19": "HbH8W4uQCKBvEF1u4gQdcU4gBDYpFfYNk5YzLAHyKpbgVryPWRxzjh9m8AkGAJbfBovwisTTVnSUmvGSRirJYPr",
  "key20": "3p5iFhHY8yh9MC8CQKEYcWcqupFENJh3c3jAajptWUJ6PF3k2EgrsfdGdX54B5c8KGDWEnzVPCkrTVA9KY5Ru6LS",
  "key21": "3pGKVCX815UVn2Z1QQVhXsE12WNHYcpLaYnCUq8xjUAFSGbZ2ihJL5ALRPKawvCU4uURwyUKDn1zXQaZtGuRXSKJ",
  "key22": "3K6yD35GdXy31nB3UiA3geXZZV9CMakq6roJNSf7XWyHzCVmZavyEB7rHRjrB2CgvBDneTPspm3w3aCazxMTyXLs",
  "key23": "46v1bVNZj48GzDWgNeMV8kHoDKDCdryjjnYxJYaw7N7bWMDtPDMBbdkjnSqCrVWYFNUFEecNQYH3YUeF9p3zTb4a",
  "key24": "2iBa5YtVuRW2EGgKWJduviYoBxMXdqq8VFPJJL8rMMhY3Hj9bPBD8RbY7YFKtHAk3DwL1upymnCuKx5HBpUMnGrh",
  "key25": "5PCVNGGwvW6ze2yq3A7yfM45dML6Xu3xgvZ79YnL9WmGuobUGc4vgfRRGP1YXhGWDGNfRp8DbvSuk2ec7rEnp8Sg",
  "key26": "5jVpx9r6p2sCf5T7QAU3fqRLJRXL6dtVCQtgk75pjAFtxXL42zGzxcFGodGBE6Qb6kTSDo82SAc9t59zNejYwRSo",
  "key27": "4qFhdRHRXZBQ2pytLxBRXg8Zw2UAFbo5PAUXNjKUadsvKDUXDJuL8tSKkraikeT6bZWNZ2EUx74BRWXBLtFVxppa",
  "key28": "5AMKhibhZAZyPB9BQzwi6uCBdDPcfviRM46i61HRHXf1wtS3cq3YBFx6cFMbGMC8z2Tq9jBDTRUC4VSyiqcQLtQf",
  "key29": "8nBkbQWd2uknM4zwbEmjysBeR2BmpTiZSQYanHaQPfupVHP1cYir6NkSPQYXySYLrKbof83cz7Pz3DfLMtFHHYW",
  "key30": "8oCGzeePtDRT12mkQjS9D61eDZGc2joMZ3rpBwfjWk8wsBdr3i5shTQD4LWRKXPUvhPPQxJcMSg2KBBZRXmbAh4",
  "key31": "5QFkmW5xx3Z92xKh3w75nJFkUKt72BcfkAnkjdZbG2Y2Z9shKeavDjDW1xgmcCnUv3Sz4zwnxvkCmwghMtnNMJvA",
  "key32": "2hS9f8DzUc2VwvxgMAzCtRBG8RatGddCadwCzXohPwiLEnstbs1JVoWwxTu1rU1GTvfSSaHMrs6rKg3ZhjGDCTmB",
  "key33": "3PhPpFeuPt1bcRKvp5aHXxWoXLdGZEviQJ3yFyDSnHM2YSb3ATuPjjpy7zWBFYMqyXA7Zj6kKTKyV3JkmGwViKKc",
  "key34": "3WECbo5WtZsr711avN2V2vdcxeucrzwMbcxbGeGSp14Zp8BpU5srNN1rRtZsTpUS77wvmfTpD2EHKM83ZDAmaikb",
  "key35": "zhyhdm2voJ6o2Hsnp7nictb7JjFbYJQWGK72fBGox18aLbKtzSX4uN1GFiPiAM4AdupnKgAygdpqs3HC1uiZh64",
  "key36": "3TKK82AdUyH1wkRF3nHJZYMUgWS9s1qxVvuXLLWDxeTTNrnrfhJiXJjqqozBtbXvjmM3xUomnLDiM1L6orngirDK",
  "key37": "4BnjgZyn9G7HCVcc1QXP6bi9obH8qFMEnaCxVsjr4DQ3WGkMgQ5gxzhTHvqrm4sSPgtiUAzFrZXeY8674xUKF4Hh",
  "key38": "3vZa2KkUAZnfUnhkXFPy6jkjq8M1JYkn4JeeiyLTCRdnjnryn4kYobwANU5wshmbqAxnwQC7gDuUszbbTouXQeYL",
  "key39": "5VbXoWXqrds29Ns3UXVGQEBsFaQ5fwJ5cmVEo7ro9XgfzvE6wcXngeqBAqrqcQsSRyT9J5UMj2tAa9H5HX9J7nGe",
  "key40": "DegtXjDt77T5ZJ1W7RJ1aCWnNqaEAo9LqHPu5enEweTvXRDKXYJo36nPQ3nFxgGPA1bttsgUMLiPxP4fTt15VgL",
  "key41": "2tCHAJN8GG4Prj1CP4peW4xihkaRoEXWVoMhWFD6de6MBjHGnnHiMsAWsC2K8bWKvAG3bfjEQAFyhvYGc3UTvPD7",
  "key42": "GjziyDndpX4aVpVC8yFnsSgchLyXB3UXFwX1xvKmV58moQCx89imVTzo7Ur1NiUfZRxELzRh19oowgJYtdFNAmB",
  "key43": "5hPtCA9htphcDrgKa2h5LmYQdP8ySfLKfhVF2SE7q9H3Tiwyu1uDt2aBe8Uv9umPhcEDgk3x7mJuVNNQD6D8uGNK"
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
