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
    "4VVLnxAceXjbBq9pDpHM4dYUq42YabsNpKTo9sFPcs7KE5PoLFrec2bN8MytsVzPt1phCx6qzBiXFeDFxrnAGA7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aX6hoYT7vWydhwgPwt8fmgdTkWDt1yg1htV2fhxVbsaQxCKDRReFkpPbVPPBUG8idgLEQBJb9DFSk9VRgdRW1fp",
  "key1": "3hrmdCUmUZp7VwJqdfBy6CgH5G9UH39jah9LCWTrEHVm1xaCpNJsDfyPWSihGxH4mM6DHvrUNTdBgMArZPxUSEnU",
  "key2": "5iFT8wP9bqyhhjkXJqBFudwsaMACDzMpKj9PAJK7rhHxBCvMPBXECeWfiRZr8EDXQ4hmLnJcsG8uP9p49fVEXLPQ",
  "key3": "3jDKmMxtEvSLrT36fF3qCm3DyQDubp9fpWRnvMUbAm57V1zKFSqFpZQHL3zusfHKzgQ7m7fyN5cKNs7nP9a8rhMm",
  "key4": "nmQiL7jLzA8iNsWXi1mRnPhy66S83HYZQxdrrMv8tUir7RVcDPabZgbXNKKrNhxxQFmDQUHj3D8C5Wk6t4gieEr",
  "key5": "5USzy66VK6DtBKCgoKtWCJbHwZpURne7FmwhaHUfWSWf5e3PMzALugc7QAoFp3KX8eDATBSC4Uxn6E4YXG9gy4Yr",
  "key6": "2GFcijDkTdAPeiQyhAhc6bD87NXfq3iYDSPCNawVEvMF8ukB4Mh1Ub2Xhf819YRdrhWUQ6EsCeNcKeKbhfppjsHL",
  "key7": "csjzgxxDLSJ5tKYa6WRXcfQLf6rPeCfGXiqNbgh6M8aLw8AfagDWipf2tAV7aHR3D2KL2C8nBJQPwWujJxUFUqu",
  "key8": "Wa3vi6FTG1vtWH4x4QGXVTJ9PzWbfdN8vaHLHUkDfbcF1KXHkKhTaG67SFtMpRhpwCBMhd44v75PanJCg8YkUnJ",
  "key9": "3m9G7f7pxb2BhbQ2U3EKmRZar7oSMap8gP3wQ8Hvn5aVKUt5QfLAeTft6Eon4SLuQgsNkgUeTGqms6Di6X8Jp5jc",
  "key10": "53PSmcHkdCnL7XeSnLgV5xz4T7h37rgT5HTG31TSbAuqAPBmCQug6FWnAikm8icQ2WfQQdwkPDr4qLFbPJhNvuUX",
  "key11": "KgK5i3LuQp9MxANhPfNNkqkobfXgNagYMwJB7F2Mg4UcBeRdXnbErH61MnKRz8xgSF3T9MwngB4qW5Vsh4dBZzW",
  "key12": "4HEfSyiZ97Pj6SDpdoKPBtjtV3ZHG4jk8423Zz5nvWyhxPT98qtqPYRNMi56kgHXKhyAx9V74HWqJ7bVP9ahM7Bv",
  "key13": "5U8TXSfmZeaVoMqHNbP2Q6LBi3zb9XeT3dFfkgUMxegYkDBVm45KJkDp65q8queXuN2di8cWTrm2jwCYXrWMT8qv",
  "key14": "58zBV2DUb6bGvJdUzFbfVbhKoztdRE4okTn2raAoU1y2rUJGmy8ZN6rehXFdgwdPTmvwbDxkvZ9zPUUUS8sWoE8m",
  "key15": "5MsSRaqrnqv7hejnjFBQKq6TWBwFNeHARGjpXYjX8RroXv757w46jdhDU5sQFGrDS1QiwVBdYMPKUtgiFKMkBqAN",
  "key16": "2u4sdFG3T239GREyB78LdyBo1YpgeRo8ZmTn5W6cGvKL5vo79i5fTpZh8NoKsvv1fLP5tCzxZTs1T8EneWv9HFXG",
  "key17": "4hLxNzyVfXzMDfs5HBBgHVbcpVAuNKqvFix6UDskk3qMWVCRYNXErZrmc5cKgRmBEviMnKvEQusQDVy7dRM8wVCB",
  "key18": "3Zh6xb7jF3V1z2Z7nDrjKeziraWRJ1Sa1eEpm1rEyRmmz38R5jcc2iJ5yRJkSYwrBvzgwRb8kuuA3mqNAAoEwzAW",
  "key19": "5KEKL3HbczYV4ikpgt4bPMfbeD4RQ1SFdnQkgj1CayEiUvJhJEeZjE9NJYupy4CnvGU8xmQ9w56ciSfYAMA8PxyN",
  "key20": "U44ihCEyTBmXMhFEPeRqiZ26hpszjurFY5TpBzSsH2D1XkFoNybykNYX4NgKkTAknXJhzB1MGGqjb4z9VEU8Ayj",
  "key21": "4HkLnGFJ5kZpohHuX3aRFa8N8W444Hzu8CAmUSV697y9JMqvcBeVsPyrmnCNpSyg5SNm271t38xnE3o9veYjpyMT",
  "key22": "4WFoofNWL6MTGMcs7NvNAr1S3gGNt1sALoHyDLMwuRneuxuczPEJN3N8Di1fQnkFWxAwq41oYe3qTsmsVfovJzLV",
  "key23": "YJUMsFTVFxVS6Uim8WKniRyK5KsY2kZPgN1R1ZoSra4iUVpJx3VuuWvEHG6ctKnd2K85SwZC8GxekxsveT6vMav",
  "key24": "2k3UEkEWJgQGvecF5v7s8anhTqg3nC28iu6pZj7NHvswfRAjeKoGjcorBmKhe1w3mTZrxMFyiVvHbqMgorzvkpdp",
  "key25": "5sCuRy64Pc1sdJfD94HgEisQNkArqJFha2zXCj61mSjNx3gtiQUdS1AUmtCxv1bjDD8D42kHusLVGXRzedwxAHUa",
  "key26": "xMsCKxmBbSYKAUa4GTKcTh8JJ2tu5C6xAHVMj8mzyzT8r8xnW8nXV1Rm3H5Jy6ixEe9gToDrwtj3gznb8NFPZ1f",
  "key27": "4jPcQm73h7TKrH7nkv6gJoRebu7GHEDQLwedPo7sHwTvRqcoNsi3GFVaQcgdn1YTFN88VX1vFXqHEe9skUVXhh1n",
  "key28": "SDu4muaGkfqsLT5a2XsNoD5NFXWbFM65afUMbz9n6J7hbdgfjmhY3bsaa2B6kdJQRHaJ6XmsmqT2ZQcjrDQ4QnU",
  "key29": "66GU9RZqkUigGP1DoyBF5SjR94PSfQT2dNnrtsyqia3MoUUDCRAFTHBMUeD8sXywJLCB5zrHEDadtjQY5jZQ4U6q",
  "key30": "5vARjMyjEXuADynaDXmen4Twqsu3JGSB7NoyxZvukucP3MiS7ihbCCNTLSMQVtbAA9F4bdRxvFgfMbWbDsZc7qLD",
  "key31": "4YbdddQH1eHt4xDd2ggfTNDM4Rt3L1S6NnUKsbVvrdWbjPAsJBZK3ii1kpbzGn1uUzx3tNAVMWumyTq4bC7xaaGd",
  "key32": "4aVTyyxcZVrJBdMGFb14zx7UYC3HXkUoTmaJh8EtHXN5AGLXDSDJsNBAcnCVsPbURQE8kuKiWXkeQ4zv6N5X5zTM",
  "key33": "2DeUvqpuTLJsq3YsSvRfg7AaiimrAYhp8gBQX3Natd93KyunWuViTjF5GKvVNt7NZGC6K8Z5RNREvY1hAk2QKZFu",
  "key34": "66tnAYtP6UtUvy9hLwMHYCBdwPw1jiHfuhofi3PpaQ2DzBpV6EgmWkqMATm9AJ4PJwPKbzSLuAVfsPLYFGPUMXn2",
  "key35": "4uoUHKNEmKaxBcurN22CNz2CTtebUHz4grKK6dTjkwHafiQMoS86qDmPWntLMqVT1FyLif9mUh93znyVVJjDKoWY"
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
