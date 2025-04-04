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
    "3vrjsKRf8UJbdB7D8fzgCjWXAn3D25EMFimnfViG8GFvGGjCwnKnQVCRRZDs4zKL1mp97hkYD3dSbwFhJJ65CWD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRabhMWCq7haHkXV1px5GrQvBAGE2ku6S4MFdtuJZpJW8YL1wyEd1WD3s2c3mMkVEvmnJoiECBX4BCtNGEHTLiN",
  "key1": "BgUCs3wdqcy6Wbbr5dNvVWQrDdd3Xooda7KJBE28HYdRqrVPUq8xQTUuEq7enLZxWvA57mc1GrbFTvvYpDfin1i",
  "key2": "yLnTD4mra7WsHX3gBHjkKJLH1xvZ957DU6iLe8ik2uyRLDeD5ZYzN55CwnFeTMAhiXYdHav9uYrwANXh346yD8h",
  "key3": "3gSqrk5m5ZahiGMfDg7eGaBWFizsMfs8McLLrJc57ZyQpGhejvXk9M9pXnD69cPt6exgRxgdjaWw3b3DXepnKLeC",
  "key4": "5an1kLHhzhZ8EJPsde5uSVVd9ssJKKCk3NB6HfZidmSFgYnzZKZfACvRbyPmovJJu8XrYuVqs5VaRUz2Xbszd4SJ",
  "key5": "3g4c6u2VKi5DhfwsrUoFi6KqYJ7MvrnXp4kcA2qTKozvzPQJbBMvDqUBJhM8gm9N19JgqfiaCUPgS85dnx1uRXop",
  "key6": "3QdbwQyC5FgDUy5qu7QnTKd3mA9cz4z9rwY2c8KybMWhHaifsaq3dVmYtrwPgXPm6fBoq1TYtptW5PV8QZ3Pfz3S",
  "key7": "3SVf1hpKSmBmZHDjQKi4PMYSM5gEyhfvX7et9kSev7YWfPpPUNxfVuF7ovWnWYbTMsAWUv1puRYSY586BWNyZSot",
  "key8": "4imGRabtWKhx9t78MPdW52YBcVrrsjd1Lve2havtEzdPfnoo3wz4uyJ3W7sZHTGnBa3j2Mf7dG2D7rYmjebRZAHK",
  "key9": "27aDYd8ZthDBRA71X743Qpd6iUN8aSbtoVa97LZcaghrwdwAkSiMmV4dynWgDzeeJ83rc3vyfT8EKvUDfTbNTwvC",
  "key10": "LrudT5GbAUajmRHw77eqctr46mxQ6SoA3PHnvHf1P9uHUV6vDzvi4zQ2VEZzCSHizDoac1VKajEnAGvsrr3kku6",
  "key11": "efS6mWPWWEf6tmEhi7iDb2omKi1C497XhFh884D44Qfhfrb6kakRYW42dTyQCZDXzWsPRspz7P3M5csTFsLXDYB",
  "key12": "PxEMVAD6oZjubWDu2VEUMhzpY79qbosmwcTvFtaUZMWNDcBGLWGbgZEDBTK5DPcx73W4PL7WWG1g61Qn3FaXYo6",
  "key13": "65yttMbahZBdE5CECFPsu8fd6Xn2PuFyJS48pvaAUpi66P3rCTTtbuTGSdAs6KX7MBugXbxRVZCxnNoihM6svacQ",
  "key14": "Wp9i9SCpwsjx9xD9ggeHzUFHGmnSEpGYvfmYUdzeod5bahRvFgPtGeb8QmPnTkA4ZHaiQQBmTBbHPatFwxVDFXn",
  "key15": "2XLA9TpiGisYRpopicruGujRfThaoEkNhfe77RL494GMjPFA52MZpHbT8ga3SriSjJqmFyX9nQs2YgAoighVCkaK",
  "key16": "1XjSMyhUyKaZDkEJmfk4K7XQhUDKE612DsxYNJiroAkF6vkCPnvt3WQ2sshysZmZAX15uZJQznzCFpbEH9GK89d",
  "key17": "ZfR2U9ZCySswDLk7ZBrTM3UbmchwVKT3Wz6yD3vhoqkfB9b3pJiB3FUm6jickXoJ5jHAkpCCEeQ21gWLyfQ6smE",
  "key18": "RK4KqH2uU6GNj8UqLVMD2MqZF7jeamxNTmZ4MmCboVn5DbswcTVBWTqbqF1z1oPJGq4YUzUnGHfZZs8rNzGuCia",
  "key19": "3YSzNirve5HdF7hrnTEoPym7TUrvcPEekafdcdWGt4dHRLAhGWRkHkQcsj5W2u2cFwGzNV3kGFaig43SvKUruxxq",
  "key20": "2NpkP51NWJmaHBcXEwwo2EZqbGg2WCxdtvMJ8YaHixfqmgVH7GPwgTWqiMnre1eM6tFoUz1G1cPHoyiEsWhMgyMP",
  "key21": "2K85PNCaDdJuX1WygKXZMUdsF53p9jNvgwtVZjodZqXGEQH8inNRkqVZQBfc3AQ7cBy1St6eYBKwK96CUmET1foP",
  "key22": "535PBwr1WhJpVCdwfUEWMmfCTQKa22t88rVhHRKfHLonxpodjm9ZhuxXzHzGS7yPYcaRpmmvAGMyxVxk17K3FWTP",
  "key23": "2VkCxngv7ZjuD86erPLzdnyXwNHrZhe5ca2N8GefgXB32friNCMWUoyQRZVQxhYcvcPbHPNPja8fDyNaW17eYmt8",
  "key24": "214bpgToaoM6EeEkx2WHYrxZugz6qyPBPz1HkMsFVh6zcJYdouvMEeb4HcmAvvbCxR6TMUdRU2Q6RQ6B759WPx8X",
  "key25": "52bePc673L1cz2PNhMCYXsx8LmwrTKjU253bZtJ2szh5hVw22ZCAzPggRWKZzemURoureVT1XYyn2MeX5aZ7hjXg",
  "key26": "5qJ1an1ZSHsxcHtyFbCfTqktSvhkBRxbADf3AYZbwhd2goWfvHVaQAdbUJetTuu4TsT8N5PbaghXPGDCEgKxf9jK",
  "key27": "4DD2Nh8ZLZHRio4eW6zK1hC9hvC2jAorARmXdJGEy6TehUFVJXRQmJWCkNT5fAfmDMNQ7WeXXnKno3WZPcbQQhCb",
  "key28": "5Aw8BcvMQkJ8eRZEXWuH9sRjU2wzf1v89Hu2dAm4Pjqhcj8DHH8TcoDonadyfZNMYcC5tBm4Qcvd5GDQodRWbtgP",
  "key29": "cgRF6EsFxcfpP88MK27nARmTbE9VcdbF6NvWBZjg8WZ9b8FJ2K4mXNnUPzbm7Ni5coDLmPJYkXhJHi27UF54gmK",
  "key30": "2VcqhMTMkgync3NDxTpP1WnU681dRydEfpk9FXCoJjQiBiHjjYQPWHwmpb5LgFD5q4bFrKxeamw6dYwKuKSsXcFS",
  "key31": "5BtrZcbyaDhnfw6oXya6ZXmauccJtCVT1hgc3tW2VU9KZ1ctkaGVvKEbCs3seSFUYjF3xtGibEtch7Tahg9didFW",
  "key32": "63u3UP5m4RB9dmPyYaJarPzBvjKYnt2Ug8zFH9hCLbheoMo4EYK63UyAKeynKF9QuwdwpEGeAd7beXWSb7JFGzdt",
  "key33": "2iWgeLmsiC5QYXGoiFAHEDXroiSWTLV6FYdLvYSPH6ypDDxMVfnwLX9WBzhjkyURZy6htxNyQXiKSL4EDyTD8J3U",
  "key34": "44FsCxz1fzy6kGeKqgJuAuP9aP5wyJLyg8bmoBCrUhD8Y1XrxUt4gLHFjD1GFi5MdvzXJ3LtPjZt9627GNmMgqKv",
  "key35": "2sTk8yySJiALZgoTME3vpTdMZnPv7yxnBhhswcbJH9J3B3mUzmNd1RFZ875VRmBrzK9gdpe59uaz555rnEMomwPr",
  "key36": "3Ccem6x9KGi3zcC6vZWKjzD83UtCoLmmH7TKsEMZu1A4kppaYi35N8xgZsesVckco1go3LxtDNyZryfg1CfUZA3U",
  "key37": "3vdj8EKFR1bRYdLsq7cwi5KqTUYBuP6S3QgZxEh2Rg23heCHscufsZkTj7dASXH2iqUc7RWEAd1RTkHxpzDhazSQ",
  "key38": "YaEinbVTR49iwfAHdpyg2RAr7fuGnpbbhe8v7jLVFgy4SEUXYkfNbGVnZr7tffuZ5z3kyJQCHQbxpa8uRiTPpYj",
  "key39": "ENBpwTaFVzrLZDjwBQi2A9ez3AVWbXzHG6GfJ3aZgj3pwJPZiYSw1SZxfVCTLj6RLpgicsJDjXPj1UkEtFcbsyC",
  "key40": "jGkHymeKChoSForLqYs9JaNp4TKomZg7HcfL5TrkXb4bxgzUhxsAx21XGWTuWzUfYmRijudujXuhvN1b2uqQBXr"
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
