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
    "5qtxR55F69bPZipfkBrdompLb4Ug4RikKrQbTF9U5wVrDkEwszkE5auVayLHxLayyZP2s3zpM5Rv3QKA9JPScKJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iRjsyJXKTYXivtMiuKS3Q1zkGhvZKKAmHv2N1mmwPW9RjKi9mNnix4UVFcJitxcyrnYAEf6eJJYJfRrBTMHLiji",
  "key1": "4PbKUuw8xegRmBHoULCg31VNqWfMK1ifbdSdZ2Fk77Tyd3qq8kCh3VRJ3DM6yrUaXv5uvoaSUqoMyEx7cYwijy9P",
  "key2": "3dXfUfGUFsDnDNqjC7wxdpg2xzG8TMWSmnSUusX3JdQeX32w7Hp1FPbw4bkrME25wckRbSrivmSLu1rUoqJevP28",
  "key3": "5o3WLRdKUycbCmtwF7RkCLGcVAzqdScWZQkprJvKYRzmE6LVqLRd2JrYppuv7XugJDHLaoRBbisQvC5F6AmUpnNy",
  "key4": "3beVx5cz5phdW5PqGjN17PKzH7KEEcZPdAFazmnnf71BDvvmGw26KF5oskj2fNxLYTrHCjtj9e8esy1jFYVf9LoF",
  "key5": "2PKySCgTT8f5dvU22tf4cJuLtwMS9MxaR2Ze7GXgAuikLL9NdURUA95ChCjR5bVQgyzrqSkp4cEKKbYWaCU37fMF",
  "key6": "3SrHNWop9K8JjdwPzb78tXjQ5xVBMcLT5rn5KPQa6Cz61sUy1AEoJkKQWXuCzrbRRTJxh8zVMqaiQYyzKRptFEsD",
  "key7": "4Q8RowGNwTJgyNBkUxWQ3WCnHJSjS9HsuDSM3LbgLPXW2UabAAXfBaLDMMv6yFn1LsrchxPwvqiCsMAPWufjEbqW",
  "key8": "31Sz5uFEAkr9PawYE8YCDamJqNr1oYbbXZpsyRnQkW5GBjipSM5GJb5TP5xV9apjNr3RtmHbdruwoyhpvyTsV1N8",
  "key9": "5cgKgSAX1JWYfodGULsCSmNuiS2cAhHgAXouVgpP3gZMFhXrVKXhQrzK8cP5Uc45GAYKqmGa511pdTV8s1z7iX9j",
  "key10": "4EqdPAsc2rxHCH8aqnkPY4sQpE8AwSzaJj1rVvfPCmrqDonqQSjeQ6Y1M9VEP1gsfUqfkQ9FQi1Yso1hiSYgdTcm",
  "key11": "Zx5pwawQit813ecRRzFpnMGaugwvAboXMm8m9ciEgeaoXQSmDrDTZrQDDjRqa4ZMJPqb2QCL6g2bR6r1cU93dse",
  "key12": "61t7tVYVwCkA2uTVHc5ySC7cWggv2TgPv4ir8ToeSjhUdHspa5QBpiVFFqhEhpzWxmwEgLhZQWChJB4WXg9kafBS",
  "key13": "44BjavfwcdNwPqjhjJdNjUBrBJbWeke2nkMpSiLmGng3FB8nsNX9i4wDnqgEMwVzrtkccfL9W9HsosHu6Wjai7Vz",
  "key14": "3g8TdKSKmz4gGZvs3nvdugv4kEYwYQtt3RRuZXnvSEa33RkT4S2FjJwV8SczpVYTTNi4JP5EhaUg6UKh2QVUEwzh",
  "key15": "2jKKiW8RKb54eWtpB9HAHEjvAi1HzV5kSjtHKsNZcRrhqhiW8JtG8Ppa9542BBEp7FqJD2R8bZfHHoe5YhYUYZN1",
  "key16": "2G43q3bQ6m8LMMk42RpaHSNciEzfq6P3JQoagSvBf75hLAdMbsREvCk1MW7Tc37t2A2fLnnGP5d91HAUqEaVHcdS",
  "key17": "36CTW7yuoU5fkLJSHnssMyxoswAyHqtR2CZHvwmQAMCa3Ff3fkHeh3JUfwHKw54gVxZ8xv9VdNNy9uagLYXsXbuS",
  "key18": "5dvUX2Q8cx4dfX5pk4A74PBi7ECa8zbc1t3mXdJw5vP5BjfA2h7dok7vD5KcMGn9KaiMNpPo1wBd2jHirTbvqYzD",
  "key19": "3MN8EVdTQwKgHgDJchupZcxxwfRfAsnrwHe2AEvnhtVRYMcUnamt4fbV9Ri7NAmWRjYco31zrjgFpQLNaPLwAfy9",
  "key20": "5WGNUu3yzjqXHwE733VaqywoXiLRMUB3yumLFPFiNCetp7iobJUGkuoQeE9ywcAvfyoHqiZWSkqSozo69bs5i1ak",
  "key21": "65wRrTb5rjrmxeM4dpV47NfE8ybfdxKZfUVZapVfHY7bcokST7x1GZa6ebmfiXWCJhGJtHsM6PBPVAqBY65HHeKX",
  "key22": "36CgvPbBydhoi26WsbXdD1ntHTRsLu3Bv4hxLpkDUPn742b32tfWrwaB4saLij8Wq5AN69hdpJZ2DAegC5U7cn8a",
  "key23": "37akot3G9zLoEpMvP1Njk9FPSksnxNtpjGah58FkQAi19rXDt8asorB6Yg33qqNtAQj3ohBLHwKBem9CAp1N9eT4",
  "key24": "4Gu72rg7uMLkbSy8tjtQwMtM4PcXdC3tTvo86w2kUYFBiX7c87LXHhUToyUupBdU5wCETUGMX5Tb9QRkMduDEEgw",
  "key25": "1297g2NN1YwVGjKwXggiMpCLLGhrMemyp3iufmP8JiQuVVzhi54RbTA8xCXwgJNH7JTovTf2jnnY8DJykBkBfgks",
  "key26": "2N5vhwjE2zUNTghqzZcktYXavfoc2yCLYx5kLrZHTRhWBrCw8119yU569DruMj3UGtYCUGNUDwh5rMXmMjgeQY4E",
  "key27": "3DjmNq3CUxPE1LrFYQvoHEi9Xdt7yBM9MJpc7FQW9j6ehLwQuGye89rGDYHGzFrjWhWqHhso6zFA2Ym5jEMJaMjw",
  "key28": "5ynbN8x1gw3FxY3uhK5JYasDfRSMkKsWDcmZLKKrMd6g4Nqvte3fcnSKXMgZTAg8dE65hzitqw8vZiMrcUWjjZrF",
  "key29": "xaHpHSW4Vs4CqytVahH77oWF7yisyCPUKdhUcousYyRZRvBL7cswc52sDDsAa8X4Y6qVWUECoRnaZEa1dgcbJ51",
  "key30": "NztoQ7tkExDnLYZtPFWQnPqwrVppzH1KYoz5bVCPVcNJfXky8ZTiuvnv7Hyq4kZDf8UPxPL7UPtbtwQRKdSpxym",
  "key31": "4i6GA7En8C9ii2WcRpmF25ssMSKuEM9eGhqNPVUGukdh8oAtLvYnEHjhMWwBecQsqmMizn5WhMLZduWSPjMkTtDz",
  "key32": "B9YVnPaWgPMSSzq63aCSFM7TtpYnQk1NFiG9kUmiek7DdXYzqbs6ZyHK9dX29cA7XWY3H5NQxpsDMzoDxtj5ZNQ",
  "key33": "hNQwfgwK9dq131igHrNDAsbsNdWzSBMpH9XuxSgqgUKSTcHW5zchUFokzqXTfV3BzbGrc8rGZ56LxJFnjwLahbs",
  "key34": "tewDa7CYc1XuxTwM4MsKbN1gBhe25px5VRm2dEppW5s58gTFmaXNYfySy8jKJ1S2xJphwb9DcJb3YqEAbqXKbn3",
  "key35": "5r8Z6qq9xJBAvJjx7CWao47ZK1ouMkbBMPFq6QHSR6xsBg44xeoMdoCzYPHpxBqRvVRij7iuoMW4oDP4KCrM7VM9",
  "key36": "5vrmt5XtoR6LBtm9uGLykJFAuGVbTFwSv71Zg7D1Gz2Qu9kGPp4XGfnp5vuRJDe1dx4R8HWM1AmeUgVDZ19hsMpu",
  "key37": "4mt3WFLzhXeeKqTvDn4T9z9rgXNQtJqmZEaCGENTVsirqzw9aMghVgxhmWcKVywK2JDzPKxCFRvhs7QLucQEs8ej",
  "key38": "41RixJM3gpaXgGxarZqVGfj58KM4DgraDYUakZSxiB3iyaHeD1qfWvgLLMHVJUSLz9NRCKd4kk8jfh5JoqA2mj24",
  "key39": "3vMYPqr5PRVpLspdW4ThhA3m146EQjvjUnjKTKyUyhJY36nScXmn82rho1bNBM62uNjvNLgJGxdchQ2Sf9ozVZDr",
  "key40": "CEobDtYhC3cj5qUgRQjuNeZr4HpbP9aPxJtU8Ai1qWkg3UAwSRY5WmYAgspb6B2RRQ7T69NvFwKJPP2GUgToU2x",
  "key41": "cAngA1P6zQQsoYchVc4HnzTuyEtkiBXF8EBNNGhzzg2Zk9fNVkx2GZX1WQivzTkZDSAEfvwgMYmPp2NCqeZHKFC",
  "key42": "5SRycxQnhc4TtVCmNv8ZRwo5azcFYZkufZDyze2X6EyHnKd3bb7hrdiE4JhY9o6QTsa5ezDAY5VAZq5zRFArVt2D",
  "key43": "4LLiH1X4phteB4cAwH7EnrDy2ZSoTy2heYREtm5nGNh3NkKcwUHLWDuhqRMfiJAG3NrA5guvdXFhE8DRPkNQfdQK",
  "key44": "RhpeMdEwCNr4wxFXVJy14HoqwrkNyR9kPLnRYfwEDmvH8rwk8n4gcRJ3p8SfJHc4hzrXK8H9jWqnuiJAjoLja7D",
  "key45": "49AbTVNZAKQUD2mvR82ix2crRw1kgwkDEuF85ozf9q9qZHpJ7cyabxnGfdbH3fzzfmNWZxgzoiTN2GyexZa59Ccc"
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
