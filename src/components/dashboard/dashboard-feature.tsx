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
    "2Bh1MyoJUdMmiK8MzB2rNpskbyXPYpfQ55cLUJJr2xLzvdd6sAJUK1NQ2oTPKkmDryyKyDGumNRvsT5fa8adZtcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GewyTHqDddQWUgFFHm9mCLeHResLDtNYXrjvcAJwfksw1v9jGDHQSA2rtbojMHZ2XNk7gsfokd7fBhVWNJqinc6",
  "key1": "J4Ri9NyGmFP5GgzRTYWDtfcfEQBzgm5PjrXT2yuWB4Ztm8nDk8wgApkp56FqxsvGK7YURKeoNi2k7T9oRPt4ake",
  "key2": "xA1fE7nmtVQqkYK2HE1ZmbVmBYeVhRcfc6f2oRrwgd4SRBM7zesWKNWGzaXwJ4UcTHfBjNapusJFPyd15ZXUart",
  "key3": "E2pnnYwfutaTKpa4LL5iZn7K2AQLPoGH7T4anwVXFLA99YCQiNXVeAFooDuDd292M2d8SFagYg2VtbBArUisdNk",
  "key4": "UB1gH5PY4UUyZzHAHFwn6Zz3HVufNn4AbftSPJLZz9txXtg3hmKXD39Vynf4QM1MWXUHSXPaZnEMnMXr8Pz2ZgY",
  "key5": "3CWRscTaD3CV5aH7SMc3QuFatGb9SYyx8uspV9Dh62uy4sR44pXkq4mCLHiMRNF7rAdCu8kjiyJ6uFTWn1Jno137",
  "key6": "3Ts4FXjtpnAT5XUEWJu7yNwTjfR9DCV8cCEGGWJakqwj1TTc3Zfj1RzSRWxi2GqYxKDGPBXui3xLm3WsN31wEdqC",
  "key7": "571ties9Hsb7KThVtfvEXXwDsQHroKo2ZoDXvBKrfCeZSrQLKtbSdoQzyUDhoiRHQC72Q2CRovdG2goL7jYKJ7Ab",
  "key8": "29CkHEkuUvGrsExvCGxbvu7QvG2zqBXvmbDPgxL7oAsCV8fvwQwhGSqPNmiYUaCdyP6r34Xv519YKvwFifAPChKk",
  "key9": "3VfnBRWCRa3ssiDFmqgBVwFCSi1YNmCurrqJ1EhSbx9cXzDwU5PrqKthmjgQpCpW64foEYpK8BjuL59Ug5EpqRzt",
  "key10": "5YgMZt2xGpezhiXexBcnt4xPfykh4qh3YufhhvbETVuE99iJoRbvakT5YbfLV3LYWWujKnVPSp9Vp8a7KMPvJiVr",
  "key11": "2whg5ygHFJ5omokNVQ39yP5TwJZbeeVaHKB562dGRgmzTnQoUiHyirN8hS4PTsEu4oyQrVy9XT5WUfyzgawWg16f",
  "key12": "3ruV5NMXexkedPArHc67n4kiW1xjGqH4TRJzZen8ug25LEqw8xrWY5v4Ayb2i6kXvyVozwWwTNcpPDVQ6UprxcTm",
  "key13": "4JcMmSnyeWqHMLwEDXnkHv41CmW3gD1YzuMQqEZeNYkVvAJ7tAiq5bxRTNcjnYY3wrsEeS7SPBcN5agb78Pphv2x",
  "key14": "2tpUgMpeK4vsmvJsZdZUtnkMbu5qYVwuqxt7GFzVeQQ1Kk3H4bHFLy9Tjmd3fxnAEzZjN9uyVec5i2M6Fs4jobVE",
  "key15": "7bTaVSpFz8mRf2GGK5wY6pVASxtoktV82c9sW5nyGctnUmrGurNWoCJMZqHXDZHqWhxsfnmcn4LQexDb9jtfwwT",
  "key16": "3DrcDcPBWKPc8i3N1cL8ypQ7yHeMSAeLHCUpVecmzktgcGCJf16aS7tVHwaYySBzoNjiuNP2ydXaeEc1Suz5JUL9",
  "key17": "8SVe2QGqbwoEDQ9A1fcMwLXLXaTAAZDdH7PfgCSSKpsButhhrGHVMQLnX9cURrKcxz1Gs4J1hngEjDfcpRd7VkR",
  "key18": "kpQmfZZbrr7Cs5GusJKvSbsvkKrHBPjcw1VCnPhL4shK1dgYCBmoKhAK2ECMcJL9wff92wk3qpbHYZH5CkrAURm",
  "key19": "5cGX5RpbcDFNfzrr5tRRCqMDHPb9NgxqoS5MCUNnHWUEGsznU2Fno718NUdDh7ySohMHZxizgu9oiuSHC4oxPEsD",
  "key20": "37vMv3iEPa25ziDk4af4whDFDZcKEj937nC6bktWtTNhTm9v15gsVp8eLZhxp9HFUbkCymGGNt77TvRh6sJZBwpo",
  "key21": "3Z6Sxqs1KUzAsMqvkri22mykpzt7u4LvCdjTyWMbdJP5MmrNACqYkcMHnY2P3JcpA4GjHNAyoEA3KuAvLhKAZidD",
  "key22": "3AicxA6MHQ67S5Ydbjqieb4AKfJyboeFJDpp8F8pRqxLbnLhLU7a5ynABx5DeQ7EciJsAmsH9JWnBscHHZwhtfQh",
  "key23": "49qQGHBb3stnP5VqMiNT7vN5CsDh8CfnsVEySJBe8fCuNAvoKMds1gh5hKxGsE2uRUNbMicTqbCTMx5qBg9YMBw5",
  "key24": "2atuEzs5dpf17Htp1FRo9uydgNBCP2UxKsZJ6XpzTp3DQ9zGMRDn3cxeddC31LFADBbduY4KepS52icVz48yAZeM",
  "key25": "63TT5BHzEWFmgwyFQoE5FeD1Kk1KJmKFnkn1j6s5a63kXtXcUG3UVdZcwLQh4wZpwiT4hgHgxtNUPjnNeBffFzFm",
  "key26": "5oqbm4WzP91N7w9RRcYukafTVFmKuGJf2ZHHC6F9Wz5XNgBcgsj3m3idBKwEKZRTjpPW1cicZ2t6KBhAZ8jzgNDc",
  "key27": "4RcGLi3tipEZgx7rPWCdtMFXhVN5ddqpHe1DqYj5dgy7Rara2uHjgs4dvxK4SKQa9Q159RP1c9dgo4zxy8hkQzMW",
  "key28": "3xSpqz8ZGraWv72QTnPqTaEU9ZjSDkSA5giX1gfJBsraumjGLrSxAFqUvKTKC4njVufqKmiKTzWG1j7dVa2iEogo",
  "key29": "2hYsAYDT2jFTdDUk2yWzHahfGbEt43aWwr746v53D121R5TXFKwJPVjGRg5nvpa9hbqLtumsxdvno5iHay7m9P9K",
  "key30": "5pyxrP3TqqXdKNRKxZZtRJhnMbtmspsXY1XaDgLbWjuyQ6MGpdb9REe2QVnjzAEYFCpvphT8LuqvCWdujyoXtduP",
  "key31": "Z2cf3QcPayXr6BrWuGSCDJoR5bdgy9MZkMcVySUjzzJdkNxfhkgaaQHGZJEnV5XZ8CxRa2iJ7kQTWmJNorTm2dQ",
  "key32": "5oJw6RiBvD9fowvac2rpNSSoTG4Ywyo5mqRGSd2xTPz2EHQi7EhMrvX3XvivktihUiteZwjeCYwL7dGRMkttSCmy",
  "key33": "mxSchmCXQmaivSaF2FmMMV8YM5zEV2rXzmyd8MfS22C5vxtddCmeTTnRqwLeadRMytiXcURe5rD3f97QRFoscBm",
  "key34": "3T4g3RKHEHPdzewmam8NLNUTywjE74mJmZFySnuc2nggeZDmh9aPKkB1bn56fJWHWo883DUhPA1tgd95hLetCcet",
  "key35": "2mecDDZfuui9xDwCXwd53sSWWGEwRvLiTuwdjuKaaVvSJfTNbnaLvKMFUn6tL8THeaAVWxUaDCD7MknM5fdFG7if",
  "key36": "22ZPFwYtZhtJ8MRjcMzF3vmD3dZLmKr7vqKoh2xcWgtzH7AEWxFcrwDg5zCd5VfrNX4zBC8GShWS3PrFWPY8gVLB",
  "key37": "3mTH6BfSFkYNLSSYneJFfxXFn4nRDPWunNDJQjDaEFiZUVpP8b6NPuNuFckaAsKQi263z4yCjkNJRBDpMhsEFdRB",
  "key38": "2NuY5Njg8sEdETkwwdvFuE7NrBaWp9r81BhzDJLTij4AdyqsyJDtkGy1oVNdo6n6CFkG9GcDevDbqcDTpoF6zrsu",
  "key39": "zM4TUSZJ3LHyTKMqSsNhVGwxBcfbJ6Z696AWx6T5WL7eKQHyumjdgPxGyCMs9UedefrrfKfcrX6h4VTqKFyvFKu",
  "key40": "5ZHwwKz75gx3sYAnCobtJfn8tBrCPqDtsEQxx4r55m34H2roeowY2eRqFg1brFbfTES6p6NggVs2zCzcp1YsNaCf",
  "key41": "2gt8AdjoevWFRC9sxvauVmThvUa2eLLfYh5Ldjmnf5fcN3orEcDPmEP1nBtmfeGJkKT2ZS3kovxuLzgTGSzvvnNa",
  "key42": "3CLYT2qadbfyZB9MKprKEvW3vfRSjsZrBo8is92p5TKwLAYBmhM6VJrG1sQoDnRk6qCe6KwGqLTftf7vrEmSe5T1",
  "key43": "32kZyvfwrGmRmStArgRMP6PaAmcEQodAWimt29crdXN13h2pDv86LYT8S8omiS7dxm3SH8TnaSfDNrhMVW9bYkig",
  "key44": "5QbauZDNsDwRn7WUZj6jnA3GWWRcxQLgkTXvJjJ1YY2vmWP2xk6qMnvKFoF5VCdQyXZ24AUizTjaj1RsSS2WmWyV",
  "key45": "4vCT7z2xBW68Y742HoAEMKftrKFthasgcbUNTQpm1qxpGngZPRo1m7z3ucj48PWyuvXEwbdxA7CENywnodgHHzDk"
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
