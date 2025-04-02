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
    "3UCUYHbiovZVbzdXStfitDQixkpAvDfisC5XUjqDp9TahAJDXSsoU6VYgDnAX8aUme2aUWaSdLjr2bFra4KK3Gx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibyfge9J81imSHsckK7meuSGpWhnwMAdtauGi2xrocnJNQ4LvsVULvoKMD571oK6K3vQNZwVMQKuy5ERxNnuFzZ",
  "key1": "2TiE8AHfMv15BxqFejDwgpMK81EsfatvaKj7TMQRu7RRV5pGwuJ8SaHdnK9XzkDLB9FKmF19TLyDEzk9C38XfjHx",
  "key2": "5VpeeY8i8maQkqoN41xuRznh8DK57c2ETyMw54zzPB2fkuEfAUMi7grT56itoLN6otevjkTuBpB3mrRsa7WmHpV8",
  "key3": "23zsJmL7WMovhwhb844pZ74Dh8WbUxCjQCrDQWrCG7BHanRoqmn1RWV3ABQn4QXoaCd5tAP2uyNuioNWUCQq9Cf9",
  "key4": "41AxWQNvwvWKXvcxxhfZ8DpPg7596BjuRKxs1d4Kc83YWh3wzJifaSm7QUKS3aSwy6evq5GXmAFJVQTTJfsBRwc",
  "key5": "2oVK2mkutg1YBjnXKGtLJqKboU2sDcdaTGcLNEKvAmdcpH92N6qsEm8FkNZiUDKmeScphytwYFe3rpKNfBqsoea9",
  "key6": "hWwg8KktattLgMSLzmaHpE2TwLbopG5a2iGvuaK7JmLDDpUEnsTaVwXzWuQqQQa5VpucG4p8cxERbVPXqwRvG2M",
  "key7": "NFoTYqrA38UvSJUjuVwxgCVcfmUN8RiKSomnWNHHbTcUG4pwRmp9cfgaG8e9nM2feCEUpE8LRNCmy29vEhv1dNU",
  "key8": "2iCy5jZWCNqDCyJEV9Jkc6c6vi5BzdSkCJTaLthoRUBSh5pPZeLEgHqYpUj58PEietupqejNPBcKPp6dsLW7duUj",
  "key9": "2QgihJxPKNCpjTEYe3J1yo9XAosTWgREbPL8TTQ2UcNqvRrWzsDUniS6BPpP7VvwKCp78dyjvMUnVLBVL1DKEAdG",
  "key10": "4pEXEMjd7MapzELsoNZxQKm2mhdhXW9MvbnbGFSRphGSrw2fsZSQwJXyQpDJjncG9NMvGwZTs8Cf7RKJrcTnEap2",
  "key11": "3EzPop1aBPyseSCBTVhbmc6Z1ZcXAtf1UdgfSketUYvhL5LgBtGyxqM74FBF2WjaRbmNrXQ967GpUwsHDJqeZzFm",
  "key12": "4SRsGsYDmWKrYd1QwbirSjdbqZZzRbgDBcbmhbiTXHjHUyWiFDXwPojBi94SApmeed4Gvk9oTNqaeUWp9QSC2qVG",
  "key13": "54k5Yq6GBCUb9Seop3udJEELgC3Z7uy1crjpZTWm6Lv7wmgxwCmVCDeyggRVDoVJeAtfJ7NaUdUZ8QH6Zzww1DQM",
  "key14": "ytRp93dhs7w1hwqLyi5w9QsPLaCAmkx1DTW44K4f4WsAESN4xCQe6WanrXEseFtfBATKCcFH89jNqgrsn9cGyuM",
  "key15": "2PhhJ2uCdcwoQebAunurj2DtiSP9kXnxzsHjYPvMQovoYCe9m6dFYvRyRbxpoJ3QedvyvbXzsEhfL7oSRVmerzA2",
  "key16": "3nBPv743Ghxx4crhnV45K9NkHYkcnn491QEsMvqjxhBYKsR8b7qvo4CDEsXHW1v3vN9r5YKNrMYCEy1E8MMN3HM3",
  "key17": "2E1FUaQPjo2GXNPZwuqqz5WRCAGUU2DQ4idr6SqeeBZt6Q4aGQaK8QbNNKNiYn35DhGHgNERdy75dcb5QZbjD5Ed",
  "key18": "51mu4KkysXddtnYKHVpQ6VnxnV38MiXK3pRHaXmRPkfDfkd1Lkm6SKfsdfnAUN2fKnmNeQtX4F71hYuhmr5J48HC",
  "key19": "Lf6FPo8B21Mx9acYh21UUwfTkKW8biNPU6QX3S1Z92NXvhqgWZQpi4AuXnPq4dVpxzQnM5C58E7CHnC6BUx3AEu",
  "key20": "U1K9xVq4qsgQ86DTyUQZ8cKM1WT29K5dDz1TSSpiY5tA4mSDdn95xQwWBV4s2MawxuC4rnx8tBRiDfCd7Nd396u",
  "key21": "4bksfQSU2EircXh34yNBiA1iwYz9JUuCxsmKVHczW5Jn3YNKxrjt2eEjFsP7PxBjXsdCt7YGfJUwXARjrKU6T2Pj",
  "key22": "56s7fCmVgmLk8RagUNjA3ex43WpYrH1u6CoEbw73H3pGdeSiTMy6LnZK7zus4sUo1wBnBqBuDu5enkCe8bS7pkVG",
  "key23": "5G2uiDdVf8AoXDKJhXP3C5XABRfUWLpXqLVoEieueUsmHcqPDKrsb1SRC1vpzSX6hACCG7xoZoG2KoSH386mNHF6",
  "key24": "5eB2C8MjQDGzR3DGdAkatFPCsB3iYChv55E56hgVLUpu1KPKJAVrdF8F2Ziqh1LyT6gQp6dJGqrazFXqovdC4jFw",
  "key25": "2fSwKTKxqLGYpCqaTxt8ESqhMpuyPDP4gp9t4L93BffvtQwjfh5BgsjngkprKvESakXHnXdeEHSY82NEMmWtVj7T",
  "key26": "5qwx8EDoeDxrkT5pNsrZhdqVsxFaZHwp2U1fopd5Qcvmz56kw5Z1z8ysdaMJ1Fp9H37Wwzo6x6C5PcL5hiEdGMoB",
  "key27": "3ZaZvL2MgcXNXVDCy2re41agt7G9M1uWqFbBZRridKRGYNDcoR7ERDoLVrwHSZ7YgWxLwVGindg4WBt9UUcydWvU",
  "key28": "3VQNoraQP4SXUqFTCPRxk4L5EHykBzHRW5rDwQq3HZhmiVzrm52Jf7ZFiy6MuaKRwaYynha4aXMBwZTxT1qWoYH6",
  "key29": "3HVRWuWNbcwizn3y8JJRNcMHFVmu7xXXQiXR5Nd1KLuTKVZ3iD5iwBYdqd2hQvmpeD3WLFuNtJEP8ABg8PZbGMDy",
  "key30": "2xunKNevsAL6DYpeQPmXhRKieFtopHSxGuKFTVb9QtdsPRr3AtiricvmpDmLhzbhQje7uJzzvrAvUvCsfAhsj3eh",
  "key31": "5W1eFProFGeJuaKZZqJA9PA3ceMa2rTLGwYtmuouuxNwy4AbD4sfBwGC1CFmgbe1XsQvyAmM4kNfh6MXttweshx5",
  "key32": "3fvFMAC8B4Kr7t5JvhxW98xaucjwkiJx8ZRkMgw4jSgUvGzoPErdqeDSXzGgSZ8LYTGandK8yosPeGcdNASvgCyz",
  "key33": "4uTGyXAadYGLqiQ4WJoknBf2qu2f5yMH4PYjiS3MC1yakB8RL9MZV4xmMEtXyCoJQtJNk6oV9wrZQkd8HDyBByub",
  "key34": "48QKRN1wFXqaKQB4pL5TEuZaxmaacYM3ej4YToy68XYQSuLkgyJPGmi3WJYufx75ZNrREnXBZTW28bq63eCbh2vf",
  "key35": "3M6uQ7adXaEwvh4Y9moAM41YSqTw6dLKFyt6cZCDAcgX5AcCk7WKqWEw6kGQ22h6k5Px8BDJsryU5cWfroTqq94w",
  "key36": "vrT3RGjEfKaHzFfhC476vcJ6DQxfuRHed5HG4LYMwnkK75YCPLcrwMJSoM6XUETpshuqnrWDn7UiRKzuhVbqTaH",
  "key37": "52tbPDJnqvqkChXVKqG278eXfBk4RMFfXbRbBHELR8ZYSnsyspQ252sgxkYrfjgtEHCJUeTZQTwuEAM5Jn8496mW",
  "key38": "4PMWJmnSLwhD5MmoUB3nBx1aS9p85y94U2uFhFF3rrnT9oEVuRe8Zdtr3vgcvFKdEzSyjcF44CDhv9QBe3ZcL4Jr",
  "key39": "66yGDYfmKyusoLeX899rgcfGaAKFNCuRsBC6xSNZUaqqif2TLLCsYBE5nSwFMjKMr1FKpMyZZbvRXjM6M8mnCgFW",
  "key40": "4y4WUXwP1nyp4ptmwK9N8Bx5Pvw32URfzvvNSu444e6w83CPy9YiAT2zbYzMmTFhcMS8gHiVusUfuS38AoCRMgwF",
  "key41": "BqmHgEub8HZi89isU1v7SaqkTQ7j82iWkXYK9jhxhFkcXhpsENfbgMCaQ7HpG46CdWYfJXTkuQ72Rj6vAavSCwt",
  "key42": "uFKSx2fF1p9v1UVcWJ8kt1ARvUATeAA66D8FkLd5kPydvuDGAubuCbWJpZjT4RaEA8QXNZQFwnZdQBksCHqgSVU",
  "key43": "38kAvZHTEpxaYw4kqN5sWncHxY9uaR7BxRoc4GasfA1NhwAJK2oWdYn3nZZwMLthZbg3TvAzaAVF9Eu6ZHobsY7o",
  "key44": "3mKP634FKJr7WUWuAvnjxxU4gCoukGMs7tQHcDeK2JYZLhF7QDk3gGkdMshdWBA3pG2DWNiWjUHkNAQfZvUXKAD9"
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
