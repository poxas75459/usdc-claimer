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
    "5NR9A6ixymsHAzVbrfaYMcyekyCMc5aEo3jHFNTwAxcKiMnyh8SJ4CnZfojhBqr2L9WCqq4AKR9S9WnkcbgMCkJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QpCoNwTgdpJSaozxv451qEz2959WmQw3wD34CAoXWnfFHDKs4JNme7Ry2Vj3LYHEam1rvycyxfxUmTKtdWdPbhe",
  "key1": "2uv6nAfzm27cMagPrxKdCREhxmU1bWEwk3bZDYiaDVR6oigxzmf5ZJ8xVDCymfgtVGVxsysX373sxdN7TGS5dDSv",
  "key2": "2BYperkYNv2pxLwdNr1vwFDEYwwMqY13gXR74CFDtU9mmiFX78RAzthbkVxK7LkFQBZjkNFfsfhsXG7jVUUYt18v",
  "key3": "36RCP92uwngYHj6RqT2yc7vyibU6yu92fqnBFUbXPQrbe8hFostrxHm4CYUq3WF5emsdkyueyLcsPtoF4poaKREx",
  "key4": "5gP1cwe78NeoX6z6jc7tiwSinvmbmKwgH3avys2bviRqfmokakALE3isahvmgkg5VdLVCd6dWnrMRSV4EgzjVH2f",
  "key5": "2WSTGNBL6Emeyjb8ET5UkvWPTBBg8FWAoq2cSR8FXx1XDDMTkfiYm2n8ky5dCRGxY8HZ8QVUTeewQCixqjrn896P",
  "key6": "54t5UjrXEh6gDQWJLHrnwnEFNrAvcopoSJEfDGJrmQj3QZKV36qUQrCUt56soWiD5MHA7sBbVtJ3uptrj3dXCAac",
  "key7": "4tLMRYW2gJXWS2wYKVsDfULiJEs7gDXE9edmiEuzLcA1wvEZhCbpb8ViAHbmbDM8zv39zaea5XFUf9zaWzPyVDUv",
  "key8": "Nu1Fg6wGesuNexfws38Kki94bKjrLfWRdjFZt6WTr6hsErFyGGL9muiJ2nBxHfYDt1znUBQKcL4Fe7htL7GpnRS",
  "key9": "4NmYenBiNdbWtDcpK2KwQfh6ayX6sxwMeBavVxQeRXnSyxcbBr5jqsvFwiJPuumDEFcf4yiyh6sEp6aC8BJWoLJa",
  "key10": "5HFpBUBtNzNXEPWXvHNbh4nFDcBPMnzakTrZ1Vj8wJXM2ApVxgUPQAdXrdTSxLR5ZbFdcATxyK8G7C1iuxFjgpkW",
  "key11": "gZgQmP4RNWeLWZpg9uFBzMf24ys5pa9ttfg5JQv36A3wuNjoLMz3FyEou7XzAtDArzht9CmynG2n1MSSL3GtH4w",
  "key12": "5BEoWHc5KRC4TreyG6hb8zk67ozcMn8z5f2M45PQJryyf3riZPrJdxPjWFK3pbYDpoiGvDziWCLeZuiYGTQuTuEb",
  "key13": "3qS2tRnuLm8ETpPaWE57qBSCxpKUByhFWKzoD1dwzQ9WjvdefZmUnifsuQwqzpnPjjMTj1XqBzPkzXFBHD9qwPVD",
  "key14": "5fdhV6ew1iBaCGfGvfbdFLk9mX8M9Kpqw6dFB6pAkWJg8YeJ5vZGnaT7bWCbWus9GgxYy3ArN6sFD6y522XiwKpw",
  "key15": "4Qm8mVxT327qNPMeRFndwC24mESW8SrKtPM9gD9ouzH5s4z73PgZ8yppLAX8P54fsMXXikeKuCStcLTsYajF3LSd",
  "key16": "27FxUv9yu1UJGee5LpdEcdnqkLjs3rDRzHMv12JwsNEaLLwBtBYod3yJRgQsBGAWBrJfxJiKtyCM9W54gbcLC3jH",
  "key17": "2RQDHErV98tdg1Q4TUwK7bgiZn3UUagcBKWj46WAiqHrXSt5BRGAfAbCGvV27na8u1R9LtLUz5rk497wCHSEBVBo",
  "key18": "4NbVHM7wvq91hR8hFZXsaTmteWnQ1iJXcvWFVKepFD2x8gij8TWqPyjV6MnPU5cLVkWizx9sM8WhwHbnFESR1FGS",
  "key19": "3c2pD9b2EMfNHAz4NZc7JfDaViaH5f4guTgtvd728QenmFXSYkmYNV2VeU6UycsPhj2bzNsvjTgS5kgCixeEbYYN",
  "key20": "51LUqNVy4GfcqSjCGGwVKQujv5Bffwfm5uymfqiU9Noj2evpHeyxRunkZaMPDCxCatLUYD1EJfFpsjqzpb8zXBwh",
  "key21": "3hd2phi12DCwMw7yaFzUSnb4B3cdp3ZDKqQ6g2cfiqoN2yB9YveGakpWUwBWkeVgdSVDTeVcXpVgJqCDCzRoVNHN",
  "key22": "2HQUCRJXgTuNzWBiWX8hSpPAQVgDiMXWERjmHjnnovmEWZPyKttgtXRjf8EdxdommxB2LqDLnrhZyrZjTcADc5ye",
  "key23": "4vFWAW7NYVs1aiXq4wRk8CBZhPQ9xS9exhbpjHhXzromVi5USqMzmoVyLfGac7xri6LYdLGpcDpxe1uYbJtb3eA6",
  "key24": "4xjhL2n51LS1N2Wuj9J9SzFTAm7xp8fQHjrgyYMDh7eW7gt8ghcH7rTdzcigfS2J2g4XxYWGtMcaQihWFfE27GLA",
  "key25": "4qnjQ4wJFmcgZGqvtrAZy3QDmK3dLK6JNwGfxF5b6HpjzQAP24Qgv6Gob2z3DEJWh4ub3Zx7Kd4mgD7LxNi9QPDA",
  "key26": "2DBtGp986TqqWzaE1jn8mQXFxXhmVjtD6HyDBe8wWmJ3jwTfgfsDdThjVRtGPwH5xTXn3C1oJwHcyxyUdeZxs2AP",
  "key27": "3Sdvw6FRT2EkdQ5XREArE65X94bYed7qBvsVAHpLGNH6ehKt98G1aE5jEFnUDxhcNzTW6Gdgd2aeBVMwiVBwahSM",
  "key28": "4ab2iuSMEc5y7QaSXnz4zKqgbaeqXGAVk4vFX35aVn2LjdqcsVtRkQRwoFPeAg8yQbA2geeCfDqDbWZfb3erGLLo",
  "key29": "5rSBxcpvesVLeqYeKG8w49XizREvanrj1Ux2EkKYbYjmY33GTKxBrDViJnSNrH8EwhReADzAgN5TpurhATFtiffP",
  "key30": "4e9V3bF1fc4KRaFicDDJUVAx54H3mpQPnTn3BfhQHh3umYNNcfwfqQRMhZEiEJppkbcpG6f32ASauWC4w5q1z3pW",
  "key31": "4fadzyd5MWkrFXKQokbhzZbi4AznDq1yYvbPSJkQhTnVrXVrWQdwoB3afBWyyVUEfZoitrjRa5AZdrRLFaN1wr7s",
  "key32": "2BNUyhcshX4mv7FFRCmFNhxwKyY5dfCdskV4Y7FKjJzHdc6WP85sh2762SqCWjaM3GJp52xhT3BfoygtgHRZ5DU7",
  "key33": "AtXsT5AeXcwj5keMoKY7e6v9xAPgegzJs98u6RKhHU8hmhzCc6BBLLGMUTqNPLm2byju7pL9J6qVPALRkkXHCQQ",
  "key34": "HqQgVyktenJXM1iFFBXrPBGTAy2jX9JdpxoQ2FkAD5JQ68TzG7i37qMJc4HwQd9wWutacdX4GYb3DpE4BNWfcK7",
  "key35": "2SRaWv8sMVba4M1Mf6vcgYqmpAtcxihocJBLpXj3EnvRdUV7XVpvyMHpm7cCvkHPUQKY8nph5279pcH4N6zBg9ky",
  "key36": "353hZHRbsyoLgeVijGjdhsMVTtV91mGGiiyqA6yecowWEZKrsWTyUoi8soQbroenLniaBSacojTTGNuAvRNSn87f",
  "key37": "2AbQL3GSXBKjkJgDAEYFuZHC9sGDmYFe23F2w2QVR1xxNDp6jex5qapLDYPDk9QGcFWiwg9TdGcoMESLTw7xRGW2",
  "key38": "FwSbT7xqXbvJdhckTj6ShWwLocv21zNJYn91ZDQAsrRBJGLzrosxUV9cG36HrQLnz5YN73SVC3Z718CqLyomnjw",
  "key39": "fLQYCqxJkAygeJpc9AUiuSpruBQ8v9PKB62bTVrwjYYhASRHnKhgebtMfemD7zmPBZW7E1FdGsfHd2JKVWmX1Ku",
  "key40": "1yHNVhYqGMG9JM8hd2rScCRFmzw6S2w11HKPjrQqxnB6KtCJt81XAQVNNTkmhfE1jJQ8tapUz4FHMsWRQEFdKF8",
  "key41": "4PbsCwFcU153spfGdksFsoSyX2NeZXQv3srqMEG8DDVcmQPHQp9rXUgVDBDsKyKG5bb9tQaeMgG4GzZ17tTNpPXY",
  "key42": "jC4QSaUrx1KLJUy7vVVDaXLCMgAiGwicnBvUTddXTugizb4HHf9FCWzJXYpf28Xib67kykoSwfF3zGC2S9n6Juo",
  "key43": "3jTghvfTZTgvJNMT5kHMEjvqRLtXYySiHnfjjWZcKTbuXSuwSWh1poiDhdxyPCiPNEMfP1149NiXGaum2D12feE9",
  "key44": "4nY3Y69PqkdL1AoMFnz9pxZLpi8sxn1WXUF51AWdJZcsFPc199KXds7VH5J45PbGSCfbjyYv2Pa1UT7Co7ocdtSJ"
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
