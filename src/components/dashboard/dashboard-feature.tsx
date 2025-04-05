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
    "2cyqVRzZux3m62XhTgVEVEK9cBvKct1bm76CFxxKd19Gr7oczuvw3syiz6jGr1cCfpax3wgAdcUB7kN2bhQkuV8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5AbxEBnfUBFUgXaqR3TkHxTL6WxrevKNvcU2PVdoB1g3LyiZSDU2BjL5urZC7yJJpceh39hjtbNu1CnrojDik1",
  "key1": "4G8strChDSeVXxw7CJ8gCoiqPYDXMzyr33sEKe2hgoDXABDXRgLemxk6ygdtqxhiHTyaqCKLQT4UbBjjTgB4Yn71",
  "key2": "4EtvTAjcsQrGYQfaNV4c5vzTeusW9Hmrt7RyoegTa6QRPCqwnXTRPM1EiMak1xPqhqdfgkmjhmRqAhSRowxW4Qca",
  "key3": "3PnY9ZMNwSmhsfdPbZBpB7KhkRE9sna3eT3mqp1mVtMoZ2XKzgU9k131zBLVWxhQ7AfEDXhC7mfD3DzwsaQeE1Fi",
  "key4": "2uJKTfL4wdHQiB7pLjRL2LiQvSH2zcjAg2dH4HKa4fKwLJ5Bm89kSpm6unJ8tgnvLMBd3EFZVqMQbWfnexPB2tRF",
  "key5": "29GmV3MXM39bYxQY5mZyUdnys6Pq76Unz2Utngdi5FpntYWbWxhZxHtJWzgc4mcwmQcutXrsvc7SUJQ9e775UBvP",
  "key6": "66zSRtewm6Znz6dgrEA3ZyDJrH9Bhay1ZdapmeD2wHbV4yr8k1HX3RTcv4zWRwHnvei63MA1m6AKmF58iXTj9G6k",
  "key7": "3eauFARNKCMB3wnmJqFPKbqVzfsLDiRz9pWX5ye8ZxMyNpKEE4gSssT2jbYEV6QJ1P2pmfDyFas7swcH872kZzHN",
  "key8": "pWmDvSMVSFfEqFRBHQ9u4yVgDZ9iwLLHkeSqyD3Go9VKKddKEsGGdKMX1PkDCNDJBWDyaw25V3CCfJjUjGQ8kVZ",
  "key9": "2HXauTBiVRazDRBz2ojiLddbz3WAGTyFRUJsDNczRGnj8QoBLK1AhdEKj8Bb26xNHUUXzk8i72aFzHFXHDhMgz6t",
  "key10": "Y72KzGjTyn2YMsuPFKcRiaYjDqKCEzUD3w7EJFcMkPtVYkjDm1ytZHu1dP1FsspbGNSGBo9imTraTaukyp1eqz4",
  "key11": "3cXLxSEVwreS8nNLYGVWaAK8DyhkmEKmDueDV4v5yMbocCmq7C5QgvPw4rjVNjAxLP8FpJfmkuB8UWkx1Uv2CBME",
  "key12": "4ysnqWJoZRT5vAzgGTEUvWY6xq9ouTEr5SVfRBidAcd1iLcQdQH7ojyZxiFuT4naZspzGYW8tD9UHmoN9rhx1QME",
  "key13": "3FM4MSCPZWexQ8kiZqFjRRuAqNohHRvd2W4Wkqbit7oQJeu1NEzYKH2JFXqVyZLSrdNRxE4HvbYqCpGFpsrmDJtr",
  "key14": "UW7sPsaJPcp84b9Wmqt4HY61cVqJYLos9PBh4K1cr7ok76zRgSGUXRQRgNKRxkJjFo4QH1LPQk9s9ttTYkpMc27",
  "key15": "GkFEc87snoSjpmatYAudv5eVaQzv4aBMC5jEKLaVSRj1TEmYRXV4Yd9PL7QFK7kMTsUqo5HbnuDxVorHZzvrezr",
  "key16": "56hrYVWVXDuDdonvqFeTt6kUaJ55DBiZHJvGnkDWKz2EJeLwDNGMi3c2LyKEdR77EapUi5Rm2kwdSRZiRbpRoxDX",
  "key17": "8bGrqv2aEFbNmiZVrZC6zZXkxmLZa3N5uTxPWBJbxq3d27bH2j7zM784SC6JGZgGwUnrZAWvzkcpsDWXffgnRQa",
  "key18": "5KYbQsuNN1DcKFdLbqTfiLsUVjTpcVMBTcDmxSx549JN9iFbBDDWkZX9zNWS1q97au8BLrBiiehiCpcvVbDmTgYr",
  "key19": "53NSpzKDTi3ZG7ZHgS1TimSL5dQEcCXTGsx59XHFPM91JZ6mpHBjYdR9zPwF1UCzkvNbKCTQEEF64U43ZbRg2v4x",
  "key20": "5RNvuBUjPjHGx75Qu2ighEGYgRcbysLacGQ4vMy8rsYRvZz4XR5zGdkMuZMwpg45eQyLHQzpCEr1D7q77yKGz2Mu",
  "key21": "4o3hJM64Wh1ECa6m8ZG5zE2okqSRi13HLqPjx7wDNtD9xoNpLHnm4FHAoybXCGBm9mQj4bjZEvnMZprbQamSGLkY",
  "key22": "2DCUVvtFQSg2TxHaJuL4qiMcnDgi5s18cixgRLvLZV1MTgscNwcDd97Wtk58JzA5KvLSpj2zsuJtYBNqHHSWZuKY",
  "key23": "1dsPTm2U9FGzLQp1X7zLXMjAnW7JQs2A1v2fWn7JmeW93cceFCpBhs4fc6sonHJ3y31h9Spz3PUD3wR9VLDjVjF",
  "key24": "5e8K8yMEnSDXgNydmyShG46hjJe8DQ3fpChrXPKuAhZMi5uveTAaCKeqrBgBuSTFQP615p5ztfWo9WFpjwUvJD2Z",
  "key25": "4BKXbjysqCnvPDzjxnwV9nVH471FWUkFAS1TYU3oMbtxdqd27ocNkT375nGSzAKHeAzqMgKeaBZ7mR4QTWoL1o7a",
  "key26": "5mudxDCaavkPLC5kyqb21FkcV5WyDdaZctU7276roQkZRLxSHMgzMYRU32NFmtJhvyEPQNyXZ4GeVkGxoMGQumns",
  "key27": "3ckwYQy9GgR7MRnoyKxiq5kZQmzzUeRTjbvxXN4oh5jwCjVjHfwpcFSvhe6bXhGaAXKLuLdowa2FQbR9DrrUxJBN",
  "key28": "4Et1WnijfLkCYyr9krCTP6tk63rwcFRHS8NxZuZhMbVcvgVCgTKz9YGVzKe9LFywwXSLgc32WdMJGYhMSbeipUn9",
  "key29": "3LVySqXUbijnhcVTnAFUXqKqjVhotyQLtnio59FR2vfN9PYiYd7RcJnXbrGzA4krVZUhfupC8hJnMvFzbXXymgbm",
  "key30": "5B4BgMr6tjQUMHVJsHgzP1CFzBnGGTBxtXi21MM7p9KqmDhjdxs11zAnHrzdNiAvj8ThzMHsaPjNfNJrKqy32vcH",
  "key31": "2Nd8GCJdNb75Rj5vr2MJX1yAWAx2Ty1JTfMk66JM4EiVLJosbPxZzSEiwZQ24BZfsRpjAS5Z8fqUg4SeQTpbuvWR",
  "key32": "29aBZmVQ65b9MJdBY6kr3brgoH3MeKPB1HchVLWjn1vB2hvuPVe4SJ4F3fmsyV1LaxPw6T32atvN4D6a3oWG3zqf",
  "key33": "RNVXomSMJqXTUrLs5uuTksq27tcsiLvq5Qa5w138Ptof8pSyq8ZLA6vC6FXHFz8BWxjqWYzRPJ8sjbioq1tsu6d",
  "key34": "4L5C5tczUWimBG2AEur4DqEjRcfTPhRGQbEAwXdq2Buqa3aN246yj6utF32awQzn68B5egawFYVHa1TwxCwj9u3n",
  "key35": "5ab7wpPdDf2fPtib3JV4W8mMghRRnF3dEdR7WAPRiknEGpusiHLaoygmAC7vAdaf88me8za5j8eVm8bGRE9PTGa8",
  "key36": "5b28dJ7nNz5QD7Fw8qvYCmTLiL82rZNyJkbBYKkikK8McuqfQybixED6sCdfBfvmK7Gq1bVNXXUjXA2KqSenLG1X",
  "key37": "5tSF2visxk229SW4ccCbreD1cYzbYZ1eJFLWkCZwQ6Fe8uRC7kVpoxdmLMX3mY9KFrgJW7TVzoEKQieaVYG8Pu6v",
  "key38": "RvX7kAgqP6EMsGQjZFHbxhZxWkNcog7meWrxm3AaPZMVBYJXj7sPDnT3BhqeJDuw5MvR7yCG56TBFJ8jy98x4T6",
  "key39": "2Y1UeKUXAfydK5m2onm4nbuBfn9V2Fz9RVpowZrgeLFkNVvYdWzbJ1GyR4FhRwEkAHvLdgRnPacDxTTtnahhtFig",
  "key40": "5Dq1UnCCUvvRETadCGfe3oBX4L7Pz8z8RFJtS5YNZaeQm8BKRHdbGN7yUgcMAvhosUQjqP2D7qERffMpvodTEwpg",
  "key41": "4ahuiiGcKiWbhmLFiFBZm7Sd69MpyuVNErfAWTAYRuZYsNSkBf5YAdU5ZFHekL8cafgefFcQr4s1q8sRwh3p34ai",
  "key42": "3yr7CDdGU9VPr9JXNPijQ5ECaBbzifstyjhpjox5YwVUZD8d7b7N3Z1qiqSqWUACm59wStu4rk9nWYEqXR2Dpfka",
  "key43": "3m55hFttZ1cEzAaAQfqRVtLxXrAk9HHirY8KpYoz4JnjsiRVcVApCjFiQTf7szQC1P1Ricyvabje9ravbP6usTZi",
  "key44": "2DGwikLW9BbsthWjf5yRVLynxCGMrdwcdXvFxZQZviiWCAS4vgy62XTcdbKPBQFD4K2sT9CanwB1rC5PJeAHAzhM",
  "key45": "4h93rXD4YGmspogEnhmtY2JRgysLHwPRZtDajetwYkKJj9nDmNSuuTFZKdNA29Lg2DvTsYGm78qELR5fdjXgJVkX"
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
