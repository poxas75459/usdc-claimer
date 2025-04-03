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
    "GZHhWH3niNMwCgNKR3ezmKP6Vi3hNrPecLhsBL2awq9hJAsErpXFMb5mU4MwT3x1Zg3kHQ8ugV3ojzto51iahRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dr3ZnsPmWvFNJH3Qvb2RBxQz8dhZxMrSDdRziqpX5W2C4cvfYTjd48SmXJKe2n7LZj7dH5gap48izfRy7mViirJ",
  "key1": "49EKKYFNHpEJj8vHMFA37ZpEy6bP53UaB1dAwVKvzsqBxZrUvkAxPbCnoUnAa9S44XYc6x64rV4iVxdiEAhgZRpf",
  "key2": "5G4XQFm1ZEs381kr8H1somfszk719tToNfx9LhbVopWNxoDTECMvWkMoJXcrhbU7Uy5d5XG4LWWRhuKF7qxR8jnw",
  "key3": "3U35rcMNSYHoNJAn6y5gAgcWbkw5de7MmVwYUFtGL16QBXQ9gTGcCQyMWhtNhSmk4qWErewSw9qGwsALoiv6G9sj",
  "key4": "2vmEWgLZkoMUSQhevinWyU1HsjbqcXL4659bjA7uekh87kFcKMETn5zXr2KKX8XCiXxuwSu9gMkd1fVEaUEQJz5P",
  "key5": "2KjTs6pVvx8hmZCdGrJPwLN66n5ty8iJyF7Eg18fFpq4JCrqcuBaM3qtj3wKZcd72LgKMap9sLVdd2EgEKhyRn65",
  "key6": "2H9RbnXwGLzdrtZwJ3Q2bQiYUDhkJcRRQEPGos6yMm1YbYQJvVVt9vRSq3Z1QBW7zdSPxUaWsH3tj1aBi24m5iW9",
  "key7": "4WLmL8CV92aMhpSroPYwL34pRfNgcegHmmDfgP3KzzThzaKBbuemZof3J1TuzCUb5gL5XQXcgvXaTVHSjVk2SBAe",
  "key8": "62mzAcnUMqfC1b3Zoxtjgnx5PkWxGPJY3BicMoH2CsCUCTVKeZ3unFyGVxpAc3vR2SXwQLeL3wwfdzt3tcAKq41L",
  "key9": "RKC1T1G5xUMgd6cFUMLrYL4gznbaX2Yqr9M18cRoEZWsWN9gsh1E8mCScwCq3skTQuwAEtfDc95p9S3MejgkAwy",
  "key10": "MRnGAuvhCBTvMKjf16BwT3t6YijvNv6kArvZzRaLuZhjssoKagV8pAtxy79pzhaZzLCiL5XLgSfP1bqBzHUyJJH",
  "key11": "ev13CSrNk1HJ4hUXbf4EHCBYEWSPYzaSquXHZwH1k7vzgNojasyoiAVEnaEbgepiCbGdGD3qYSXb5gySCt4HG1W",
  "key12": "2zH4k4ZDb9kRTknfS7jfsxZ27nm7XMmtPLZExAJ8ybpwBNZswi98LVBj8mM1gNaHDQhj2DHAfGPGGVkeQbXJT9aK",
  "key13": "4sMrSpJveLAniTENx9KoKi4YwEcpS9EtjU154cL4DfAyzYN156tGJZFeB4mykJBXAunEzm9YcaFjFzcusbQ7apHu",
  "key14": "HmmqUtGComBndZ1TjR6MddFDtrmuFGv3VVoyLHGPWXMmxLkqPwAB4RbnCLV29GCwiLnMThQxyp3BGGA4zh1peYX",
  "key15": "39Vw3XZepMvhPuzgQuBd9NGP8GCJUk1rDQWvPm5sFkNvW23zk2ip1rSiiziWD7hS1u4QfsmBW9UNPsNNrdH7JnRq",
  "key16": "4EMKuxpQ8T31GwvQ4NLvHxfJ7W68NEDQvcJrpbt2QiD1ebc4MGjGTNTxU5SmxCBjC3y22zmiXS1hARxcqVzmQYU5",
  "key17": "23E9dTJwPKP9KJRmQTtEmGA1WT2TsK2m786Xy4kbc8vZcdVv539uYALpp69EQTdRUXRXfAUVRQdBJuLUXAtkwq5X",
  "key18": "4t3bawW26WiwrqgRWiEwUP3bjaPJmVcueaZaJN3bvYtgqPpcFt93Fb97NQdCDfesydiXebSGJzSF7f1dMKZJ5h2G",
  "key19": "3H4xNEyHP5PpUjYPFVfaqPVcF9sta6gkCDnDiRkXpGae1BChLBSq5PpZfYtAonRfoVXw8RH55YkWyu4TysS8mU8o",
  "key20": "27WFGfAJa3to931FJt1W9y3sSmhKRyQyMtFGm3TpKzPaSmFV1LFTXcNfxQZRvqRtMbEaHCYEZhbUinTn8XsyKwGY",
  "key21": "4so7uc1THsHBgYdS4ZtNDGFtZtTbXmWunu76s39unSFoFcSG165Kbta5SNK7VbRr1vLqTRkwKFBSZwkEwWyNrRB4",
  "key22": "5h6zsYejs41JDXWuu7Z9NLMLZ7UxomTH9M43vApazBU5VsRKtfpGCkgjz7HBshnCaNysNH22yVBgZaKeSEmGan4j",
  "key23": "Vh2FRDRB7hvPYUVqw9dUGPHyjcWXEUq6TaBwEeHdi4rpCrzmuDUxYeKgxPLYcY7Jnd5L2cjFaRsdZsgBn2JprBb",
  "key24": "47iGknBo9wVvjmKxpYx1F3fFLm7wfxiF1emXZp3Msz4FMZQPfaTG8AXkqGMQHt3dgfhNv3XiDtHfP69g8Ky6Deor",
  "key25": "32aG7R97D5S43Yz9nUHT2ydfFdeHX1jgntomBfQUmU8RGeHLWSf5QWyWcFqKWKARhme79mGe45xVTVRevwZBdiKx",
  "key26": "3xM5TsUWY6dzrp9x4uPRogxg55L1UA54ti1rBQe9vSTT12rJhdePfDJQahn4KYEEhV7bHzuSu6YomQREdAzJ6BcQ",
  "key27": "5ZxbigRDA5S76vMi9zMBqqrixnVfcMW5CK3efNKtRB3TrprSgws9XDQnCPfyfaPjkCBYzppvnnzJJpbmat4coGPD",
  "key28": "4fa8m33ub5B7sgzPYn11NA9FkyeGzS3fL2qZ3YaGdFiCQH7usinKPesAATRygdaZstpu1fKmkaMk9fJuCvgdunVk",
  "key29": "2Vxgp3nUixhNezScaJQuyKP2cP9WdomkrC5mzprGwBAvPH9kyzYi3XLYY4ssCe8itJ7RucxHhYwPKPWjdjup7c1d",
  "key30": "2nKEB6ncfiT2nK2Nn7gPBq1j3iSJDJ5th1fQVjYBkAckwcgXt2q9GoxK1NQJLL7Y3koUVi1MGkrUHJ1nwxL95wgg",
  "key31": "5KptkvtW3t66MymX4MpaKdSLRfBWsR48p6J4G6NgQKN3HNCi5V2j5mbdVoVFCzLyb1qTdj2dwyd7czXku8Ek3VxQ",
  "key32": "5YmS4oPYMCMfDLKpCy8ha8SQBEq5N7MHisoPvZMRbfwcnt74BAyyAZin3WEpyU5Ba7hjdF1CkEoMNaW77H6z9Udu",
  "key33": "3JExzbU13Pfb8f7NNzAt1Q9ABa3643JHa4TQ65UhL1iYuBSHrwuXrwP2ACV7z35yEc1s3w6mRjrADsLkou6Z4uCK",
  "key34": "3XtF38RovRm4Y3yUU974UCTX91Kf1NmQmF4irctXx5BWkpzCLMKqj7z5e5arukJtTm4r5F6uuKcMC2b8qkGGbzeW",
  "key35": "2Qct2k8HvFytVLv34KefSHDVNP457WQ22mD5mjaWTXdh4S6f4P4gtkbEyWneaBek7a661GsEk9tngVCLV9yBcN1A",
  "key36": "3gXvBCA8MG4UY6k3kD5PnRpm52Kpa7vGmD95HraiESgaaa2S3AVYsK8XJPPWhGBdLi1wcCRxnKWAhcH67zqggHBr",
  "key37": "2mu8pxaiVrAyJxJreaDyrS6TvaHW75ZU9Mo7yLGqDYXD71yqa6CAsCuUpXzkMr6a4xQudkHB2G2cu6Sykf5E5jkB",
  "key38": "2KTxWkwzDrCTDXf1QucesERqnMVCt8AcFjjDHQNaHrkWbrhVzjeybAnbP7Z72FbALDXUp26mnejPWG8APENv4b7L",
  "key39": "59PZ3S9vY692rqVLWQVrtoBvyenDgkGTxYiSpCEXJsRJUnthRayzoonw9XkRGwitqryuV8qDkniaekpGhr4HCi3S",
  "key40": "5hW2SFzxKPysYELdPeFzZTRmL7VTJ4V9oREecJJu4xRVsCzqNchqpmY2tTYXoGUAHQKLPZPGSQx1b9EHzEvL5Cqy",
  "key41": "5ECzqgNU3qS5x1tu9sG2FdmGQcCQjiCcvi88gRQfBj9agSg1naSMTLW7LpxvA5rpAo92nXasnffRHMMnfeMzAgoN",
  "key42": "RsniYZ2GbJ4PWCpudteHYoJrb5JsEbEn4BmMYPDoptLEaz7cgVZmobGENG6Wx4MZMcKcsDiNKnHoauZXvENSgGY",
  "key43": "3M84T7nLmwZc8NuNszZ5gnVMYreLysESLkxLqdZAQNK7LwgSfAXGQdhsLiT8yZ8P77kTFeMFpMdhdGMBdfKdTUFJ",
  "key44": "4sLB6Dvsock8x28KHPyC8zxzGcDksCR2X6MjHFCoGkF4vcoivXbfX3UoxGPo2YHbVGx5dcXiJkduFJm4WMxEbEw3",
  "key45": "41h91h1An5bTm55Hbj74VyC7iyBNMnM4e4bH2443LT7E2LrixMHSFC64ZFsbz1Zzdud3Vr3umtPeFi5KwawvHo2K",
  "key46": "52761J9vW4z4foy48De3tdre45Zw2vW6b1Vmwsif2QNnHhHVDZ7UL65e7EdUSLhEt4tfxq2GJiuTdAktGCGt6W5r"
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
