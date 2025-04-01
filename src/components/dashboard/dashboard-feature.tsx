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
    "5wzVF5S4HxiwcdgLiZkqg3UJpZNs3Lc7PnWLUPnX8cSq8n5ReUH6ZY9yohzpVtyHHQob89S5EQmpDC2oLs6z7o1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rMac97So8ffowgPuVuuErv8QsvT8X5LSrUfgyRo8sT1DPVG6U14nJpdHWYnkcC1ZoHuWFFexSh6EqSyjr7n33H2",
  "key1": "5NykBVnPgcN5k7tvCtyvwtf31Lz3uAsA1zHvDXLYuWCPzPwQQey851ArPgNdpRRWxxAqGQSasEVK5wwQ6bA9AizW",
  "key2": "2nkkAokqgm136SAtPUxN3GET9LqTEU9fnGTLCJAr9rrbQ1xvb58bDmWYQSKVgWEncAQBksgnnNMYMffmegYLd2Ui",
  "key3": "3Yxpyqqndp3mSjA2DC7hp2L3DMx5qgCM4F12cKcgnTDodz5s52gQHBgabwY5Zhuqd96aqtNto8A8ioXytnn26VMF",
  "key4": "2EpvNa8675GdAHQ2woARPhZ7wmQcvPZQFNLiMXKcjdZDYeijbaCk3NCpkaYdgA5KzHyMv4MVWVUB7QsrfXfAtHQM",
  "key5": "fH2uroZyxkn57V7vvasY3ZXqmgfReBZpgVodK8zsrPhnhukPqmRfy3FkkrgppjKMQGybVfa9BLBhyT9cgnZ64G3",
  "key6": "2w4u8qNSpi67i13BwATuo93Fm6952iHrhWM7HzKiNgcEBsbCWjyM7SBsrKricvbUAUgx5smUacexTfDycU58BBdk",
  "key7": "2EcNLjNjHKf5W899BE9rLPYtKfuLJ86eSAHAPdaUEVA2J4RSFRS8G5k2Tute4hwDfv6kJtxndgej388uf14FiLBP",
  "key8": "2uBFZ7Nxyb5Ksgjyzxtxh7jbZaimyVknt9WWu1wA9t5EsYBfkPh924NVhpLjKt2WhHiqMZ811uWjwi7pSQY3HrzL",
  "key9": "2c3KdJQLjQ7kfbU85CSz54V9uYez7NjAdX6RQU6bF47byo7NJuAvjKZWsAARcU4yfi4bvq6xE6MgiktLMjsJntze",
  "key10": "4ysQvk6L9ohPMQ4tCmYtE8T85NVGPt5HCoEyJA57jJze7MM9fMGWDEGTgJGHGBJQgKsMgYshjQnMymhhpqjJfcfL",
  "key11": "5P9XWbkfuVpAdZ2RSHZ2ArYcKEc3XVMPzXMCudLQdSPM8TiDia2wE8CQFVfYbYrv9Pc5s4qpproAtFX9VB5Fne1c",
  "key12": "AQY8GsB1K2woyCJ3dkR4ka3CqFbPtDrsxfeUTyU6ndjqnNxu5WGHEFf1gJDdxikdCBMhX9mbKej8VqZpLSfzp6a",
  "key13": "4pyciNg8RWMfgogFz9TxeWBzx1Bh7meud1EVXuYVQPuste2cSxreq2nEDfjXA2yyXc9EX58LQx3ZYFs7hnfcBKrK",
  "key14": "3yhr9rKU7QgMe5EKCfMRnJHQ4t4N8u64yRxb4fZcbUYD1kjYxkqTxkG2n8rgHdntUFsa99U2zwyVQB4USqgwFdRN",
  "key15": "4M1npgSfa8FrL3QtQYiehLK2yGmZh1ikVSXYufZQo8FisUAZjLc2XKDdizxuPr5bogPVYTNyG43FjKCN31wSxAR6",
  "key16": "25XuYHkJzPka5FAFJP6oPx96p9c32gvr6L3FeRPsVyF4rJZCKUEMFauhmpvAFE1iK3wVZjpBmqBhf4mV82Tq7Q5e",
  "key17": "25is77BHeQYho5ezHNpSsG55qRx1Wc1bw3Uj1wH9VTTutqpedswmnppAvitQKeAbKMKWfdFJemGNfQ4k9DC2UQuq",
  "key18": "2eyiZT8PExMmk4FLjLtxmExy82a4Mjvqn8HXrbqhwf8DPeGZEsW38SnbG2SiFXq84X73k315tz6GvXgF7NqJLXmP",
  "key19": "5qYJux4BJfSmaXsMycNrPCKxoSKtCpBaNztBgyN4y77FVHbjbj1TU9tmJ9Umc5gXLchdjzkw1unRsdg7dbTiF2AS",
  "key20": "3hwJAbSTXy6T9HZFAR8eMZhB93jAMgk76gg95himpm8MPVuDjaS8Tt6yZ2EUjsZq2GoavZVVgP4vMdiSzzJK9YNY",
  "key21": "3sYVjFgy1n3vAxeNJRRMjqYdiHuyL4grQZhHiXoRrUDVi3CpEVpzvAXVHudBchxjbCFBA5t4hS4CfZEbx9uLuJ27",
  "key22": "2iJKZ6fDpFh5HejzReAfzi8jdutyuWNE4kFoR52GNjc2fBwvK4CPo7WvK4XWqczFfp7ta67Bu6jm7PpTxQ1YLU4U",
  "key23": "SwiedyZSa6uwAs2gCUHMnJzZqYidaaqNAJUKHVg3uPYiM7jJs62sR26PSxL4PPbeST1sHnvamtyoKYNmydWa1pN",
  "key24": "4kzz5UZwufVdRQsd2LbEdhk4EuDvPLxk8i9khaDHFuaQtSF3hWncmVDftKnLcPEcFapLCfaDb9fJ55LtmtX25EAK",
  "key25": "63ReYe4epwLXcg5BuNv2SAYNSQjrGkYQd1cypopLCbcq9rYYEpCjrV49z65SLbn2qkvQVd9t6N1bppoZ46K2H4R8",
  "key26": "4KWYWPsijLgKh8Ctb2v7RAHyc3FGTmQyYyAmuhva6a4qcemzPS42aWEkG6dKyefKY1TbGYXWfT3ZnT5U3zgbJan5",
  "key27": "rts2bpnmJvweRkBT1qvbDUrw6ogRm9CAXxBdXx2wC3UBgDrTjECUtumP2V2XhUQLp8g6RqFq5dybpWd7uAxibQr",
  "key28": "3Q4XLkCAuP1q6sSZ1rxXixNwvR7MdtP3m2rA2sNe7xDPhU9QRXVQHEnR3jZN1YNmojeyrC6F94EZcueyxHZCxc6D",
  "key29": "5nqs5uvfnUHqwuCR9djwuinhCHDMu7iG5gf3NujokEN1M9PE2V1yX5DxLhzHSBurMYMG35dWztPDmBtPLTHruk3S",
  "key30": "2EEmu8u4jpp71y342URQdKdUCoaUrghR89hGQHnMb1rFFw9BsPN13QFwp43wX8BtPPw1Zrms5GHM3u7ZXxJdQ389",
  "key31": "2fpiBhp4VWk9LtQTQVWYQWPr4DU1sq2Lmv5Kk1rq67nwv3z2BMswSQ162c9GmrxErAsJ9g8waj65sjVtfVHJW7oD",
  "key32": "2KoFFdEc4TQxcKDkyoCWuTbpuQncC6zp7KaqGhaqDsM19q99oTeXAjuMRfHKeCgAydgeSHQUaYSozkCEbiCMwjfR",
  "key33": "3ReGihd7d1oYYoHuVguZch7BTmUj4aD8FJj7sk2Aw3cf6MJJvzJiSLzJH8MPkZAiF4Qq6QE96Zwf3ZwzgmutJP88",
  "key34": "CBYBNGxrxNG6SkTLF88dbcZZitfBymjEkwRzxaQAgLk3jv4toaTH2Ufp6wYV2LSJx4n6Ww3QpDc75BHNPcjyyCY",
  "key35": "5Bb6b7vytgrM1G9u6GkfCov1GceUHEngqqEFjpriF2xG6mvrCpSRZRhhQM1APDxG1G91WeSBGbns39UWP2ALHwXc",
  "key36": "4wK7VQboApwAsENRWHybDpQErJxCs4jjNejgpQrcFpgj6T7MgzWFUWcqu5brr1vbBPMQCrgANvdKqZREhd1AnXej",
  "key37": "4hK2E7gSPTDtXMVCzrFgoY9dSqZkmU6ioMiScjTCVRudEP1djBTDoREJ6EMFfqcdKXKcGg6qfcELZACoBxaN7fGx",
  "key38": "37ht24XuPyyNCaFsKRBM1qPkK3yiFnGEwzBrLLpGS65y5JDyeXfyD6xRgiZp6WyMTRYyfFqzGP4STE8LhftLtp3p",
  "key39": "4BS3da3NFCPukCnE4uAe8Jg7Zp8yCzrKhU7d6rz6MX5iPfFdPstQNCQ7J7doNC3CRBZ7KyGuw9ZNxUUd3sBuCEq8",
  "key40": "36iAH755Q7YJBXWQd47YC8VTgZAeAvXxKgSCe4RGWjkiGfFmLaJpRnKEbJ3b7DbDpNZ4984ea3dkKbAV4wZ6BP2K",
  "key41": "4t76bh4pZwfrXvTB3AWDCSpaHUu1bLvFPiC5vD5bUG77bV6GSaFyLuCGeJMY4mbZK7mpWNtT7n7M8Pv5wciGScjy",
  "key42": "3EvMSMKz6E9QwxjG4PUds94wiWawgpMJwZQmeJymF6PCSgrhiNGboZkTwr2DbnaQzW9xAKR3ryQg8EaeU83nxLka",
  "key43": "bAuZKzWC6PRuM1LQiTq9MQkvH52Fu6keXM8G4DcHLAMRgkeVSzPYj7SGmE8JhDQDo3nt4Lxjb9QgZkFf7jXnosJ",
  "key44": "5j25DnSmgosZe3n3rdqZe7o23FEyogTruonvJNaxsrKYfayZY6JH1KdDpo9MJDjEi9wkFVs4WwBSUv22FiWrSWdj",
  "key45": "3EsypDUX19kzbrKGDcdieyLBXU2wxgttj6d5oDSQUvhB56TA3LqF8nukdx4u4FaMNmV5RtYWKDRhjrWx37qXMmbh",
  "key46": "N57SWB4LALaQmiQrDrDBwkrwntwht2GwfFzxJjaTQNHSQVG7kkCYu9ackHLjLyeA4cXxZaGU78iXZgyzWH1yRbh",
  "key47": "3Nut1trsbgcpWezo1uhW7TNnrmTk6Cmz112f7UJhzsyt8b71hf214FJ3gN1qYDcLh1Qvqh9vHZvu1cfodjC9o3Me",
  "key48": "34mYUsNBEsyqDmMKXE41f65iSa5qVagAsMU9sA1mcNqUa5dbiYtxZXTYPLwgZTigvrW5EzYgeJs86xkFx6NWeXz9",
  "key49": "QWokS8N9z8nxSFwaE6yVt2qiageGuesnwFx8HVrwW1iUCLAfbAJXppnR4W6mUimtQmSpw28t95ynBrSh9Pb89ut"
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
