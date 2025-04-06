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
    "jZsqGfRkjBatZP6fe9u1njZhvY3JYzMUDYdmqxmMAjtUdPjR6LrmNqvfk7meFXJKLsVNXXo4t97q427PeHMb6DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwFdMtu4PEV48m6FFZHctFSeEQB6Ab3hJyc1MXtEQNujyhEwF5zY2uEMQXPggpV9sgtFPcxX1vEuY1JBBYBg736",
  "key1": "26ak4D7NaAm41gn1EG9NAtJviGWLq2LAB16CnmCRsQB5UCHfrksrxfehyWK7Wkv16EXYuGqDNZYraS9DCwc1hnxo",
  "key2": "nDGQJXMgZA5rc4dmHAWtqXRjoFR5z1fH1YruW2tp3yYF4mG1DQh299gQbNRibJw7nnRAaGjjmWnb7Zr36nAcfY2",
  "key3": "2RWTj7X4145jR57V5VDZzCmgicRQNLPDFXtoPDqwS3Kvj5xdMSgY5vL2Bn7omjKpYH8GfbEeSCNgM1sNugpRvctt",
  "key4": "3oWSy6dGbHLDUmH3VpMKYXS4JaQgiQaCPAG8PVVTzmPA5RdHsaXVQBX6nNyzRUshyq5W3oPANQ5a6aRmgKahhfRi",
  "key5": "5gjyhrs8qpA4UD6UtL2WaeDPvWNPzeWgaP4ndH2rcU84mqmPAtreFYE1UBq4dXj9VCT5DxyX2kiRgfg951YNv293",
  "key6": "5Dxh85RMHGkpyyDTRDSuFNKDeAxT8asyb92x5uTKZNUaYpH33uUUtza334CoVF2KipTBSZtBkqiroAdiBuBtvETx",
  "key7": "sKNDL7aheztPgfXXwcsjYZJ7eq8k3rp8ZtFaDxNBUgp59KJXfrjVDd16xnQUwN9WLu7f1JqbF2S3PVerCNorrwR",
  "key8": "2poQvYSJE9uuZpB2YZriNM84gEMF5dyyv1xYogBD1iLuxY6dFWruMsGVSHyMzTwMzDsjzqsu5C5iePta5CxTJZwh",
  "key9": "36Rj5kEYUuwNwjqqZpkktDxj9CWHWpCJPHutnFjiamyHfQK2An98bo2hPT2DQFNrzmpNkFXWqKgqJkuGjocStd41",
  "key10": "5najqn7kop5r4rkv1wZnirCThwBeQabUiMZzrSsccezX5NpDYGPnwWdNSCiJytPfVT7bm5tVEpWjeZBQ8bKm8GLu",
  "key11": "2haqqafWKWf3APJf5m1ZHzLZacPivhcgGqTwdXUBKy2f1aawMxWzrHHKXNfViMETht7NZnSEPVnfnwNh3ynKEv2z",
  "key12": "3dkhxyyEpAkwFofBcjX5cPRisd6x7H9kZX9FE31Y7M6SDMMGJhoFNYFky9DS9Z1jRa2vwdRpsRae8PiMBFoiC5US",
  "key13": "2m6hTiRTu7qS2N2z2dHVK1pb6KohroHQhUsQRwittoaTJkKrXgYPsdTJZVX5UDntdnV1JPX9xW9TeLwfxChBbV3j",
  "key14": "66RtV1LpeConA2xZRVDbtmmGzJVnLqh8mRzhmnGNJax3gcvz7KnbT6wnDLJE7B3kKuZTPxgCdwUXcXU78vmCuBk8",
  "key15": "2kfWFQpqb5jUtM5nVLGrPViQ41ouFWpPJoXjucMA9xsSAZr6osccTQ2mts1vuQzmTT6MCkwb1A9CQy8PQjEiCqh",
  "key16": "2pgAcpu9brxAwXxxPEQ6H55SbJVtvpSZUL4vqx8vgbJQfuDeDgsZ47bRUoEJ7XNKsUQPg2ZiUtkTaJLopnWSiz6U",
  "key17": "Q4yCx5CCu25VQReqce5o3mXoP6BjeGy2zAR7cpvqRqvB8KqagzQuRkiN4yhN2Vq1a8gGfCGW2BXfzweNvMyuvto",
  "key18": "5ryYQVtvVwTg1neED2hxYXneBxdsDCqfkbnkRMYkbN5TTqBBEbhpnpTqcdqgYW8Hk1nrtWx6cA9M6QNxNMstDUrj",
  "key19": "3jKLrquYXSvJawve8phqadEmi8doxXLPeP4aK5fbaFhACAV5s3Q5s35s4k3t9NVycB5LoAb78iybvmuT25JETRTS",
  "key20": "2nnnykKf8htanZFxTtrUp1Ft56RNTW6WN2XC5fVkE2bBvPyFaxJW7XNYwsojhEP3rt32AiSyLwuD9VRgujodB2Hb",
  "key21": "4w4Q3QBEZwq8PLY1B9XQZnrGDYUtws8EwLP6XQMDttCpdWgK2fqTGBN9CHXnyRXZjipwYMgD3kCwAbJU7fNJa4zf",
  "key22": "4M3Fn12YS7mAuQFq3SRMGdHNjqRLFTV4Zhvg2xpGpB2EjcCBA4aNuLBfzTDBvTxAX6tTMGUEnz7oWe3qzrDhMfm4",
  "key23": "yVw21BUKkL7ygrwAk2Kemawa7AMk2mXWkbmsgzBnuKfsTq4xyM89xWs9asYVm6BJyM2RHXJQqEigvFranY4Lmmb",
  "key24": "3SkRvc6q2K6Mrx8BB84NBnYan9CmSo5fzppZXAGK3PpzbpdwZ8jmwVFtagPTBAmKwBHtJ59vdXBFftQ9acx27rLZ",
  "key25": "2iY4bwRpsoc6M7Jp9Sc4QybXjbeNQAMiuXhqEJBKAUCuBgYAu371ckrUmipfojfWvXqZRFtL666NGooV4o6yEmPn",
  "key26": "5jcFZgLgNcoxfSjMXzh3isYm186XNqHNh8xvbUsHzkRLmJsTg8Lsx38iofFTVyDBZWtCvjXCaRXJ7nd36t2a68fo",
  "key27": "STPd3gCkp8DrZDQPRuUJJfjU4EwhYSEkbodo3QmWqkTfSLqSh57V5HuJBgqLDR6GEPNs3HTwr4RGqq1DViagpE1",
  "key28": "bmR4xyNuT3NGuihnmymXayKYRfrEVBEcftxKiNeH9LzSUUK6PKgMduVsZKFH4i2bCxyFvvhi3SVaL7gAcRUKmnx",
  "key29": "cE3qL8spUy4chNFuZ7Et6P2QTjwP7WfQtCg3EKyVcXg8XhWYrBvCi4L2MT6qinELtBFaJynhRwZZbk6StWCgmg8",
  "key30": "3Wjhq5FuZwMYXxfChyrEkoDZ99xJWrDPAZ2z8uc7fXPF88Sr3vz3fB4UKiESFboLwoKUpfsaDRGRq5p1M2ZeP8Zo",
  "key31": "2rgWsQvGwpJaSzCaSsqNS8768sFKqsuU1CPiUHDHchr54wPKFHd2nygC1yS1RRYEois5EspQsvhUsHYN65hiDDDK",
  "key32": "2xsB2Axj9DbpMDMwaS5T7B9WSVubhJGuwrV7ebgpb8pvVfoUE4fWts4zaJi8Vmy7mAM59dv33vDrMnqq9aaCZMGQ",
  "key33": "2rhCeiCmp9yhJAtzMpPN8RKFLJLuHw2bTpgBWuTnjBBnG6JmMdsfbyPxVsXCCfjqzzxWK4Jcwge7gjswsGtsM2xm",
  "key34": "29o4i6F4hWFFc1VzYtjhm3tx7NuqwSXMkx7bhMouBhdQ3suYpBKEQw5z2WGsjE8SeTBb8kp6XbX8JMYn11kFsVjp",
  "key35": "2RqkYX95RnT7o7UcdYgLYjH28TqjSzkhu4MEdz13HCvL5j1mjFhWCm2b2EakRDHS4AdbCBNRSWTJ7ca7sdihs3qF",
  "key36": "3rmFUPdfpF7EWWgRWNRZkb92zzX3ZBkXjgCp7vPpcixHPvJZ5BBnvSBJoFVWgex8ZW5uh8SqiaTe5Y3SFpWcaqwE"
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
