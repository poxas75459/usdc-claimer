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
    "1fP7sZVFY4r8uHAzqabrsv1QQWDZhtFxhY7PHNgt6vydwFUTrCdnkKU9wYg35C7T4tM7SbseRkJeiskNWxHoE56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NcyLJEhQygsCJxdgXW5E8WqURbMxZn9bBRAF5jPxxEWMsc7RM4LLbz7xp7UiLUzjq2F5GZ6Ww9jQARhVQZaLQxq",
  "key1": "5wiSVX22oRUDiD8m6jg1mbnwiGGJxNhA8xobSNXkTqRoHMEJyg7ygUDXHvFosZoKsFVta5iPviXfQTrsJNbRWgNr",
  "key2": "586RbNHH9fuy7ZKnU3JnPUqp8HxQYHisvKXdehMncYC9RSozqpCHr7scKfVZFPYxNGWozGN9iJDeoqALXQ1urF8H",
  "key3": "ApHUzSeZC2vGBEJxzMFJ1zzbGqntJVRYbsFxxsW5qP6mU5CALcVD7vkVw8TLvYmpyj6yfjCf8Lh6GcxojAGAQrb",
  "key4": "5YumNsFb1ET3iPutBAR9YuGe75ZEzJtKxF61R2PD5APtKg8xmDrgRq37KTvo3U5iguaRBimcJ4ockWCgpb9qkfRR",
  "key5": "2GExn25pzS7jip6Z7rKigUgTqzHQmNLYtnhAWoGEfvWZGvMpGc7fdMPmLrjUME4LiTjTf193Kzb13unFmGEVT57g",
  "key6": "4cM9qRmyMGpo5uHVLiFeCLCKhnAWSoreUZ8awFMB8EdrUJnUV1qBJGyhuAuJi4kw8p5pMyMvQc3AYJXaXrouAgF9",
  "key7": "36CyX4mfcmNcM12xTtJn5hg1gkDFvmD4g8pcKb8UdgzTyep6kuyseuuS3yu31vm2Suhkkow8Qisk2mVUuateSseB",
  "key8": "hsgvH7yaNmdf19oENf1WwFcpXRt1aqGf2FVfoGREMFTT9GprLbY1VmGa8moBkfEbKuwU83yJBqAUmJWTsE1Kmhg",
  "key9": "5YP1kpNSFh41GXgsKcfm6bMcEUUPJYH2tsTrdQyPxsaPX5peDzfRFRY9RQjN2vtSkcU7sAv39WDjLok4v6yoDRPH",
  "key10": "2SeuaLi3rmtYqt5V4Tf54vvd3wf4qEL6UBGpiTStNQ2NnysZouYLAUGkEqLF76BVBMLR6vhXby6xYsqpBxFd8wGM",
  "key11": "2Zqu1D7MBMckYYEYDtMA3peRFntBPFYxarJskKRmuiuBsdJzmLRgpYTkZ3owSrk6hykYmVPuGZr4gHU7DCXLDt2W",
  "key12": "RxuPfhNuAJeL6tr6M3CsXBbMfFJftSCQyRagJueVt4tyAp16ZQnqv4rmwsUQPdtZAfVMWMy7x1Jx8GXxJkSDPQu",
  "key13": "3kDa2KKdETtMFJ69fMKRgCLcPNQS5HUSEF6UiNiyvmq6utWLs8UCfotMUuTJseh1LWX6WWcuWVuR5aCedRPZPGHK",
  "key14": "2fZGPGJKUvBLgr5bxtLPUh9vs1DuJAWLMZn1kgsupMRStHPSRx1sXEHUJnDaBGZcBhyjy7JvQiufQVuEoDF3Ejj",
  "key15": "3F6wHVrKzkTba6z3m7aipTZJYgiAmQpxPwdDZcLec3zj8y5VXcjZPkPB6QCE6dANeRfC3ynhbWdbLpNBkk3TScW1",
  "key16": "3teLkUkgjLydubqAS1z1VsRH8CnJgfZGxVXzjLLcnpy3rWxqYUDjg5N3CevzaRnxmRrxFqaiNQrGy9Zv3xgcdz87",
  "key17": "64oeL1Enr5iyK1MsMmJcKsi5DHigTgDRsMNVgen8SyjkfW2B5FnpJVpYasVF9tydvgGTitvs96TkysWz6FNHM9v2",
  "key18": "2ZCJsuDQKJ7C8RkDvFmZKhSpbghUFULVzjx86RnXXSWYoaB2w16q7Va99r3zX3X1pphg138e9YCAjKyN4FGJWv7K",
  "key19": "2ktQ9fdpfWGW1iqS18wSBp4ksjGCvKG3GcDhRXitvbtwo9cf57iYJywBuuiaHMnrBvXGENybz7Ug1oTGSCmqUCGh",
  "key20": "3oBvf7e7xWCv2pzmR1pGwiEJeYACPhgxwM3tiJ16CPSUcz68Njs7VJeJydBvFciZ1544RyoWM4x3HyaEjCG5SDeG",
  "key21": "4JgSiyQNvT6x3EG2y6bhhGw63FbR4ofGg9fuqxPz3gq9qKwzKNtuHic2DwTmwQd68JU2EETyZ4LaQL4Zc5r4h5b3",
  "key22": "2B2f4Qx3RwH5BNqAH2VwsZp6HYJUR4Hekv18gDywDidjeTvkg2EDFmS3uFZYYnRoa95vhfBT7ynoCbsBnVsZ9u5f",
  "key23": "4WPZjgcdUdRzkmobW1fCoCYi9NBdAvP9SRdvdkS31jHfsa77BCnT2waMBdga3VnMoLnHsVh2SdkjrKCT2mVm57my",
  "key24": "2EhdeE7v9VXxRpva9CS4xqwFTtSf8DgeXTsQME6LNPYsMj51Y25jiTXxuSjvEPcUqx7epFcPPuC9XqM9FoTmpY65",
  "key25": "fpV7wbTCS5mihDSEihgwVpbAFTn5MPo6FMNqte1muD2TMFsktdKqCbeFMoEpV9Fxq1bt61VScn6q4WFDA2rN3cv",
  "key26": "PEtomB3dpe12WH7dy9N8J9iXT2VKjodJ5g6JVCQy6W5yEwXrWyuSwCQUvfCGe4wERmpfrdLPDAZTcXceak27UQn",
  "key27": "2uDqa7vX5yWgzMqV5KSix6f25gx3Km4zfb92NgxFfUDDDLu4529V7bEs5G4ycwt2aRYUutTHCF4Dc9i1rnoTNqgb",
  "key28": "PhBhcdYhYmAUiSwLi5nHiuxCVFr1giyqdJQq9rJiSSRWMJ51bMvff4vhv7doHwzhgSMpwBGCq1bU7XzHGLgyMTQ",
  "key29": "4qL7YZNDrx5GrwTWUtuJuuL8u6XkxJgbiASQye7Rk7T1a2Uxgnm4Wb1tffWWySCnzftx2TGQaX5hyLwtHTzAqqMA",
  "key30": "3G6wmR7yKZxgM5cnPeWZjXNGAzqtkt7JP8MsTB85DDQTHvewCshZd9yVJEiGcJABZiz9krWu3TXpJhbUFxXN1JCw",
  "key31": "3mXYYcM2CwGX72LdEozkd5L1xKXoruuczGXt4YPng4NRi4db2hcymYhyjs7Vmz5YS7tXkTzXoQ4m2PkExuyoPun3",
  "key32": "2DPPC32RDL9nbxQEXwSC3jerCMWyMUnMb2nTTvMbrVWj7AYvjNFcxeaLJfF8H7BAS9sEWsfokJtDxgc7xqHYVviB",
  "key33": "5mT8WR3vnsqjTBJB7FubbmcmhwZaLHwLjmVG9dGb9gds4U2u8s97G3nnF9PyEp9fNoCXA2B4eg8gXpJswHiHJc1J",
  "key34": "2bjYPp83TpB6mzQ87rwheC7gADbR5zG9Q5JRi9nB5n6xHw27aqturhty9FhLUzueApGWbLrSU7EVxJmw3dbzskEV",
  "key35": "jaXS6gEzdV6chYhFa8BmBKwUB1mPfMK1rxvVJxZZf5MfSnXQZbUe8ikTKNufXTqBdPoLy4vJ2WqugxBEj2cSAie",
  "key36": "2h2y1d5NL21g87NVvKG1pKDZZZ4fMDZzAnRUgBFWsymjiQ2pZbLzLiLUELmbmhtpS3oqhdgnHHEmRf2hC7Fwmhwi",
  "key37": "3mC7WZpvY8vF3R2z1ucDJ8eJn8ULTMkcCkmFWWGBpDYyrUHhi1XyJ3cYwhMPhzR8yZywwVCMdyQYQJfhYozj1Fir",
  "key38": "2HP8uge4LDuVfT5GRkytNmcQRQ29STWQRbQMHwEUSjZRqQgut9fYhuKvAjUizBrGubXrvjk8M27F156bKh4quuJk",
  "key39": "2CnTe44mLuLd391zW27nP8myJqm67oSj3Gwf4fTkxCf7Mb7WmrvyxndHW3ygtfQoX2Fmr7QLFjt7VMJCn3am8oEv",
  "key40": "uZjA7pE2Qbewc4p4Z1PVmcRNzivZZeJxFYeG1SLR6mv1xkst3xpvp1oxB4u3JtjcoCG2iCybtR2VkYhSagWS15b",
  "key41": "3GCtrDZ5iVQBbTD6xRHetK9eiskYQdzhzsoWp4fbjbxVgPKMAkEgdgzWuvEcHdUBkJD3oKRaKZ4DT2mET72Np7tu",
  "key42": "5kn3pWeoMv4GLPgc1g2YR8oi1UXrMs5NF7UXVU8aAf8RL8mnZeHkNXEgYL6sS6ATbCZLc8MD6bUcp8CtXWSR8Jc7",
  "key43": "26fTv7TRJiXfC84Edcc7iiKeMTatTJ3t8GLcEYJGFUtiPRvYGvEJb1MEMRNPUQfrdRVHKxf1Pjqfkivfp2gsERpx",
  "key44": "2YcM3DsmNM9Hb4qoHY3F1mXLGvGDgmtRozygY1vGXVMaNymVqdrUgWjhmAJ7V5CwNcLkttAPHHzf4jBCGzw6Xw1c",
  "key45": "5mgcpUci7xmdprXJDtedu7TFk3BQaY8aNFnGRDPP4bjd8pfuwKN1uRTgpbgdwT6rVuXgSPWBis5VrZ4PDaVxeu8y",
  "key46": "2gJgbTUySJFxw5Dkd9YA5Tiis14ybBLcFXM8pWNGjZwrCpzcTmj9JCucUcayF8yFb5YrysseHmXt9Tbv3G7TWmnp",
  "key47": "53DCqYK78bNZVXQeCqoFvrLGK3k7LZJChD3uRwXoyfJwp8EYsfjB6yp9R62GWy3FKeD5qhzv6Rx24hrq29doTsDZ",
  "key48": "5sDnn9CBVE1Q7M2cjVb7uNx5BZCNDHCiYvXVqYnDdV2ALdS7evrPK6Bymnn8S229hbw8vupn9RUVrYa3H2itAFCr"
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
