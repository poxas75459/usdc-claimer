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
    "5dV34Pdm8JeWah6WSL4zVHHS1Y5FQwsPbVX5UxRDFXF51BPzAEphnHs8UrFKJWDxf7XpakT635buUMmMATHwrm9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCsAy4mSF1RYo9efLzMh4UwJ7xGLgzaaBwn2KjR1pyxXro96CxqDc8cXVW5SQ2bEQDMD1DZXydrJeAmcvPDfFqk",
  "key1": "4DyoaDfFgfAXM9oWS87uNmgj6UjdDCdFuYFpX6UQ238QBU8WPX4rDmESXYE3QHvAHKVBZRvy7DehcirongVhgPtw",
  "key2": "3RBgktaJwA7cCPfS25LBhj6iTdN4jGeq1CU4pRuN1zAwAv2cPE4HbVZFxNAgFRSHz8quCMwoSKVUG1TbBt8ZZgBf",
  "key3": "2JJncfUc1YdiYLeksAtNAuxVkcDX2fswBYS8H1Hy4KvtT7sdEo5mFjAQc17viBYWWzRfFBCbzB95ishwDPRt66Dm",
  "key4": "5ueksqRmQXqK3HWQokvUX9RBPUJRyA7iJbrr2Fte8THUKQQEqvUMgdyBTmywNnMETXCZqKELxo8xUv1umBNQtcZT",
  "key5": "4zpPnJmaEFr2BMvr5eMTbYZckGEZuaMTjGMjeX9R1wAo7TTUcqpd2QoLrN3EcNpe9VNM1RqgoDno7xUFpqYzebmW",
  "key6": "3TV8N1QG9GMBfibhBK56enBFwRHU1nDNLGgjyCFwNPTb772vpiqYvj8Sq4v6nh988mZbUbBXqV6nZcp4799S9C8z",
  "key7": "E5t13imK1HnPFbhMfGDKxk8zDxQ4xqFB6jYYJr22FyGqDXK1zQpysmU9Y955Zifyhc33GwqZ41qGoPUdkFVk6Ww",
  "key8": "3KPoENfrejJgNrwu1uHvoHTuwKvqjnunNVeGNAAZM3dQGXuJrGdDEUfwRdJdTEML1NhujxwnXf1jUbfXD1bat5wz",
  "key9": "4PUC4WW9UkBJGMjkf4QBnL5CbnDe9yoyUzCAazxdm36Ed5nS7DLVjFEYA2ZuUuEpBzxx4qv6YjqCi8gH7akUY5du",
  "key10": "3Hz2VG7j5Ygv6HWaHsLL8unNb4zJJZjGTLYAjohC9vbFg2MRw6DvszvPgMAGrvPdNLUp4F4fVVfBCeMoAdWK16vL",
  "key11": "5B6APYnTZVQyUGYxqrpL5b3vUSeKyrkxSpKGJSmuHG38GQvPTfUWPEiTZXK8jZPyWcWbXFYCajbyvRHVc9D2WVns",
  "key12": "3YG5BVammxxgtDHtZSQaDiJRVk1gAHr4GSbeastXg2TcDfxArUnhrfnPxTGZurHB8TZG5YrjEpw4Jf47vApurrui",
  "key13": "3NAanYbSnQj5ZB2updhcqmXqz3ua52fncLrcrHTyYRKFoUytavm8vsLYZJf423Mhg5aqpC9S61BVTjpAnAKpVc4z",
  "key14": "51j1L32Ag9CSdsxUVSfBp5C1uo7xXEcW5mmSvFXjCfcKYTvKnjk7JNqo7fyjSiJiRjkfBonwuUrbAr4HWqubhbuL",
  "key15": "5pcuhb9zZ4PzQeWmr4orfeBCjQqMsxg3jSfiWg4pUJXZC3dx6TobSQcgduzBtrfaThYAhqFxyuQBG5fA3nxNbS5S",
  "key16": "3YuU9vtVkVbzc5D3bHDvFzK8VkK4mk8dDew6B6Ln81pbJWWVm4VA2d7YrCaD7LcCRF5d8GkkMtGHTTVzHZSeX38n",
  "key17": "58M4FB5Vd3U9dfiXBEDH1xTitySCFoHjHCTYV7L7PKqf9A3XzJBvKPmWoyFfeKggPSqZbjGzuxUZ9ZK25LQK7DdE",
  "key18": "5NDmqtFWWjmARW6T9BvrmZ5H4tz8QWJJkRvLi9NUfMa6oRNadAmY8bbyjAefUFNgESif2c1tw9UUxtN2bqkyAiqS",
  "key19": "4eFQxA9yJEihNPc7o4sDyaSARvNaNp8RHgMAkxH2Dx7iCNSyyGAbo2N1MngrGwkw97TZci9HM8gQrBM8Q7dSbboo",
  "key20": "p5K4ooRy2MDwwuapR5foxeMJQ67rcpTToK8yMxNLuSq13aBrsbpSyZLb5zez1KU64yNUC1yVvbNyWhrdN1kV81i",
  "key21": "3qPE1azuanM4k3oCeUr6PUJytPFZesLFg4hp1ZMCPe6UpfcedcrvAm7NaM8rfT98Z4SS4ZSfYAFWpcWznPKkJLCY",
  "key22": "2k9YhLpz8GSGSDMLR9YnR7taB8AfViziGmmgzsx1MvYBha3z32VoDD8WyaDgr4YV9Qa842seR7R5aV3fThmRPMMj",
  "key23": "594NrvwSnDxakcaBBsj5LQqC8AZaSnHg3ffirTmcGVvYnHSYQh2v9peGpufE9dW85ja97jeiKUkQaLK4mYPNwuzs",
  "key24": "2D7NboVUEZZVLBWHxSBRAmBh6EhwApBP9pad1tV3NDMNKANpm8JSXJRsiGFpoWSbX1X21YaSzeW4KHiTF2dwyjF6",
  "key25": "55N56UTxUuJ5EH6ANT9B82NQXDjr9UHy8FYcWWf2mLfAz6xScnUdKLAxVHYGBYEu8fKSwBHyGSyUr8fRsGDh1wmX",
  "key26": "4sLgbT2Ahx2N1iRD7gDbgRumi2UFdiQR2WfiXeGhC8pVM9M4X2smXHeQ2G7Ynoq7JuaqGgeveveP2WSxNddkAqpP",
  "key27": "PiBAqCVaacgVR5E3HD7TKydD4Lrh2ppjACp8FXMxFsTXFadctNrtcfX8zdY1wf4EETVo1hUtRv2RV2tCgdYWH1V",
  "key28": "3w5whszDw5bg8fJ7Z3zJvrGaWMUXQGGjZRxTZCmq6bkj3c4ZArBz5otGD2LtuhM4TUPjFVTf8hneJuPXMEtw2RcU",
  "key29": "k8Xfr6LBhQyHbuRbNGXTX6TUsknTn1dE4jJdwdGwEEYCJB5ksGGPRwHmHWMtSEop4n6PRPMKneSmTE8shzZpKAS",
  "key30": "5MQrHTmQYPZ9D18XrCKky2bhmohqPeTg4Q6U5Az7JapCp7sbKzHJbVDu3r9w9uAqQhxtoPb78xbxcDiGqJ4BH6rb",
  "key31": "434zKwyN5iKtMtYGDVFM6FtC486w4LxrxHBTQWvTmTjV6LCUVMgZbud9znM9LiFDCraJ4tSFWqBrAQXxkpYEQvcH",
  "key32": "4tsxYkcNdbKpDkFdLZZK5aLCPysEw1PZ9KDym5tLpDwxYUwp1EmMwfgPtotHuQ8keKfT71WuHbusp1UCU7vubJJ7",
  "key33": "zC6XDNKmXgU25WRjfZgCQY1YDXvszNu2myn7WyAr4D9qpfj6nKvwvdLcMUP64ueZkgSpHydDMenLLSEQysUNozE",
  "key34": "63nAj1PPMaxANkDiC1FnEPcWZMz6gxveRdR5XMEzzHS9Gz8ymo6SprFLYrgdqouSMMmXSXyoh4Z1sPx9FYpPL2Ge",
  "key35": "3g4wmYiZEa4KY1inyiPbtg71kDkBZmRPcvNwo3fJar7gdo7GVZ5XoC2gAijA4aWoCq3cFDHw6uQFkg9T89z6sq4e",
  "key36": "3Kh9FCY3GZUucAFn6r9J5reEdi6UKXFzEhndsX7qmsyAWK2pYihHGsLVgGJPmijZkamPXQSsqgJLEpvgyf61g7cy",
  "key37": "oDMJFCpUVjoftBK3gFUW8J4hNQwGVMaaX67yoCYc84a2bpr25b6yxUeDAuH3FZfRXhuShDdTUw424BEcps9oqbf",
  "key38": "SFN9NzDqLnPxi3pf8QFgtJzYMdAF646YiQCdoR1UmWMQa61Lm77TVEE3GajHp787xyRx96BZjkFb5JTRF8nSGCL",
  "key39": "4yNKxhpFpwzQcWY2cXJQ9tm2tuDxQppjvDbVDPes9mPZiMe3BJaCtwgZ8JSub2rJZLb632Cp96RedgmZdPf473E7",
  "key40": "3opgSK8PQhZGcyEVB5fFGN5Jpytg7386yUUiJy9gLRGK6XsLgeTfQTzvrcwXkZE4bwTKse1P8wa9bDati8UDS1CB"
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
