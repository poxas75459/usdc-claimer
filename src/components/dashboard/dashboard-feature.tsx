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
    "4aRjwbMLU8xfuz6MoPzNT5xPPiG5G7cGFYeQSGD8kCunE5D2fjsMUWTB7ZLovxKcM785ktHEt84BP4oaZdwj8pGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qWoqTKkVSFwToFT7QRvtY3WYsS3aFNq3f2qEunC6Qc77coNoQZvTq1LbMXHEHPqD8dmMcz66LhScLeRVwmtYfJ",
  "key1": "4GiH4zwivjfCftFYSiSjJriwMh4mGGjnVUgP8H8tSk5RU6k7fCah3X6gcWPxgbF8sAwkbwuQGEC6LmPCpk7tDCja",
  "key2": "SRBo8YrCW5xdAfXhQQgGbDw5oEwDJnuHu4DN6fTKcuEHnPL3KtMQtpewE8goqfLiZfm1tR4qiZixhMUNFVpeKMV",
  "key3": "3PzKFDZhWwmqnTviXgPoHX2t1tvuqKcQs4ZjLf1Mpjt924rjDBngt2Q4iqL6m5WK5kquVtmYxUHJymrpeoe53AKA",
  "key4": "4qjJgEYuTSriLuof4o2XievetwndV7LNtoBcqTXEWzmuxdo2MbLcADVKQpMe8zfVFrRoYWCdUNb21ZxEi2VyecTJ",
  "key5": "4f2AF3StY21CWsyxUPsLpbcG6HDRAt7b9AnV9mFf6JixVLksnmUdMgZ5qDPdVrsbtbTswDxBqwQKMTcj9iS42evk",
  "key6": "PNVMvskst48BKfNrYn7i4K9ZnWJkGMri227Q9yBpKBeBRUyW5nh3vwjvkGeJpdSesbtgDXmNuhSRonyiGdSnK83",
  "key7": "az3CPUnqfb7pC53vqri1ePHb2jey5611NPRABdxwfoVmfQbv5ndxR514S4rrkC4AD9fpJEBTPCPQvrhsLgNVFMJ",
  "key8": "4r4EopKdDiR8gkoHSLzU2bwto721fRJWuzRgJf9h6GR6de7gN9do37LBVDFMRkgKULTU1D55xD1mHf3J3X9i9eHG",
  "key9": "4ZBFFPnuWs63aVXUX12ttmZJrreiooKq93ctUkRJuCR9CYB3bLmpqnb8Z57LP4yqzMszj34fRak9uvcLpKBdVbom",
  "key10": "3NmvKivUrB6tEuxJZNdgTcMDp5WxonDa8dXCkiSvpmH81mdiAa13SoaR3gRwakdTPW3p2drSVputohVhunjSYtua",
  "key11": "44zTQYtFPE2JWdQBGHr4B3X3CFYNNubovbe98STrFdWkPrRgP3iNKZWXj8dhEy1B1JT7Si3J3bfs4EtXGWms9vdz",
  "key12": "3AhGtkHRF1kov94XtMGX9JwzaTgj68StknwBFvyoD5c9mPY21CeunzmJSWBvQEi19W7ksR8jD8kQkYfJRPio6AiY",
  "key13": "4wuxkj8bW6o97to1SBgBX78YFyG2oxda5TR1ZZcd2gHGEcvNZgYXaKQnUWWS2DnhmrLGkQ2xLeNsnNk4cUQwJnMB",
  "key14": "GCGyZ6ucwMLXqbpvHcRrzRFPvhhMQ9Lwv7Ksveb3HxLdcqD3oz89juDsSdZv1bpLwQ45qLuaZLDZr3SYFvAjAkL",
  "key15": "2AjF3ht71vwtigcLv9SB43FS6DPGwUwX7ChJxDUK7kHBU19EtqscW8aAzj6RNfsdV2vzETP4eAB6ZLQsPw9c96FB",
  "key16": "PAtVTTHpVkTh22wDKRQhuc3mg4BH52fhmU1JqNa9n7Kfk8fkCWSHt4DeF2KpMM1LrkmEWwrgaNMJNhEFfvBWuXp",
  "key17": "52utM2rvkjD6w3bSLowdymHA6Hb6UeLPoDv3skhtkJAEkAxvvo1jhoxgM531YigcRyTsescfpZv6obbUVyzxfxde",
  "key18": "4rcSapqVPL6eUCgYFp1ij75qwAHT9oGDcDH7AuhN4bPnhiokt78h7gMJmDoTriA5BKohv5r6kAzuSyVRoV4H2svp",
  "key19": "4Kp65VaCa8XxXQQ7axgAjseeS3yK5ZigBnvoeAM9k8jyi23qgJ9mVqZngotS79yyBp8QXESAZ4nuACP9F1fiPRL2",
  "key20": "rkZt1FH8bFNAQpCAxWjYmddojVkhrLweqTGYeVGWo3XeXN9hJuR6CTnjNqhXaykRn1ttCwsDifMiiwUgfrKdhbB",
  "key21": "UyqX9GVat4f5BmAtj8iJPHB3w7yptYNNcMwVytBSTpj8E2CpCBR4Mq5ZaCgG9JaxdWdqBtXgExPfBtsBA9bKLoR",
  "key22": "5DakFSYGzApUv2hd2T4LUvNV7oKtd6KoGvdaWovAXSzd8kJXb7AXLXQcvwAGV9eyc8zyQeCSDGjp2LnfVncD6JnF",
  "key23": "78qsDSUqzpEVd9LR3Pv67L2Xhgq23ixNF4rrxdcvm7ysJcux9xWKfRpWfZDowzitCjoJ2UDHAF19JqVprPSDeoE",
  "key24": "3SztFk4Wf6EsjRxCV8AhF5auXxC8DWVboNozWdwmUTqNKUaMRisFxf8KLHspNJzaRtYdDQHKmWs1HUHfxhJuAX6T",
  "key25": "4E4W6Rzs277Ewxsr13DDHZC8DFthaZv6vNM85Md3i6rQyGUGVnXjB2dRrfgfrVdoU5fcvHux3ziUKb5UEADveRA9",
  "key26": "2BkTWBGqnrfJr4Vf8J3XDWhfTRmsdfv5C14BgRL5HxMYUif9YRNDBQ8DXt11DegmdqYYBwFSLcJati2oBy6myfc2",
  "key27": "3BH4rHwqJ7Zj1SSpo9FwpPr9YBbp29cagRKmBqFo5nx3W5emAZ4s166TDV8q5tth3x9xm5oyFpGjD87uaNxyiEgW",
  "key28": "3ig7c8xGXyPqPd7QP6DpeXcardFK752TTzQhncaw1jov6rMTdC6q2Uugfs73G7CTprxULUhSkxgwo9mJBnVndyQj",
  "key29": "SqJe1F4eF1xAw4vdpwUasHFy4AncrpHBoJswL9kovREB3yJrdvGTtjNdem4spFYjXjjJViRZS3csSakwH942Fte",
  "key30": "z2ttC5WMBqAZYBVNivTyzwzGUsvbBcZctRmVbiRK9rMT77B1EFpBMr8f3gBXEsACsB3S6HahNG5X8D9quUzoESU",
  "key31": "3ZCBFPskW4vLdGxvEfkkvMkdXXu2H7erUxc5JL3YABXLjAtnxYc9oYXQN2tCmzA58WRniE7pbFoiAMBr4T6pysPH",
  "key32": "3NxnqbhTD3DKieD3uaHoc6TgDzNgHVrHqzpiQaSoC6brUzWwLZLpPY8Dj4KHgffzaFioFGBLdquFcrvRiJ2cUuoR",
  "key33": "kxmUTrD7cxbwBZUnd31yzpwJgLmANUt6MyWExcUqoQHSHRYqDyc78NX2XQPXnzE4Gnp8YmpihAe1823oTYKtpgs",
  "key34": "PZ3ECvmsqGwUZo3Qq6hQYNzmXSvYsYqHxRqN4qJMGfCMmESTiavdRnHuYXDC8avfgmjosnC5L1wEnL8RbSAEEpF",
  "key35": "Xec9gZq7gy9P9NyhVHpHCYwsriRfnggkmRJw1bbEgMzEP3b6VvUMZVmigKLenPswtXHfWRRW2NHXXTr6Qa9ffZe",
  "key36": "5fPmpvqvMQeUcooqjMBhPZXonzwFs97zHFzYm42rJ1w5vxs4N5YvoGSM3amypY6nV3JHifN2F8aPSmKD8UkvQnWN",
  "key37": "NCudw1ak8sqdVGvD6c3aawrUM3UHTtpNFk2n4sZYmmbNWV8dp32NZU2ze9v1Nfu5aurjMfUgBUMwpTf2YpCokyC",
  "key38": "2SGnSyEu7CT4aMzMrKWjniQGD1i2xBmV5h74VqVZt8PCsBdFKGLxfjDx9fvyPsEj2imq4WM5ZzQk9V8SFRSzn5Zx",
  "key39": "51op5y2a9yyA4oM7SM7AogWtUHHmz7Yvm59GPvbHssRCyFdGCVrbPWfeSshhkVtDXbTMxyQNN1R2dudWFep7pe3C",
  "key40": "5HXTLdBcwu6pKn1u3FtW7vEnYhesMTSZ46EjhvwarjXhNU7PCyzUx6WhUM63vg9R2FhCRLRsjr1GD9A6rz6pk7Xq",
  "key41": "2WNVdUwjDBZXST3oNgVhCSxMKDogGiSB3KmfdedYjo5WFWA6uWG9GFsnzFYT1TQp2PmdND7BHC1MUZr8usrU9FHu",
  "key42": "dUTCyeSkAycjtybqdQR5cgDX3SAHp9tpMe8ZPyRLALJ9sWGMo8vYrvG9XWcPTWA6ZmiuCZnjanpadm9PXMAHnMn",
  "key43": "5fkWY7ChwFo1X39FFjFM5Kp9RTUz2QR5gcpaZRXUp4DfnsvsaM1ogfEEnJHhgN9fKcwAoUZygWGn64P6i3ZifUGZ",
  "key44": "466FjKmcXE1hKKqSY5wmW9Rj7xwiGicgy7wgWZGqvQpLYhCXFYY3sb6BrZ8y6854nAVrUYQcKGkwxdi385TJ6r2N",
  "key45": "5Uvjjt4pQ9rKWkho7G6gi2qEwi6xg3BdzhYeMw463h6QVFa22wKPQy2xBB7Tz2UrQ6YKiE1utbaWELi7sJDPhHGD",
  "key46": "58UvLMAsTHpDYZBQ3ECVRC6YCDQKaeVVqPCWn5ZTQfSEjyzr8jZsqixXWGjAtSCGFFZVPSCaFRRQhTb32xmXUG2k",
  "key47": "65sw4ec3yHyk1ZiCX1iF4MqLTF4B3RRigp8N6st5yvpr4psKRApqZ4eFwrvSHhigzCfDLuJZhFmjsHr5iia5BquY",
  "key48": "kZmZGcGqUuM8i2dvMRqvaH9HSg59cGLEqxR1Bcuu6DG4C93EQF7RqWhhC5qGXbX8Swm8W2hrvCx6cky3u3dqbZ4",
  "key49": "35Z5ujLLpa9hLMHfUWczoirQV1PwBpXXGLHJEkQqmkxcsnF7nbYmiJnNTgnco7rV5SqsYFukd3Nm5EjWtkAnLf5m"
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
