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
    "5X5JahQXizX8WfqSnvSjWvVKPYjzieRmcR4MirzHSP3EAAShL7bk6EXt2og7NhU2eA69qyHRcqdY2uQ5iWjSd9ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKuoRcrwhn5tTnv1P2cGEdTMvfHTeMVGLstUFLkEY1nnzceBU6vYxRGZMiQ74XAofoCsyvJEbqmoTieQkDTmsKT",
  "key1": "2wteXbB46iFWmzCdeq8Rdq7irVZZiHzwcmfBCV4HRzMxarT3xaKFGnUuR8Wk1tEZE2y7XpWYxAUzFPNfQQiia3Ge",
  "key2": "3UncQSvx16obCtZAh2HaAh5cydZEAR78zd8RPFKgkN4UsuGkH2zA29cNzDErB544Y3cDynApBYzsVDDVAigZXouM",
  "key3": "dBYLb4yy3uARvU1U7auPCvWPHUuVn2QEHX7738Z9JzwbHoMwxUQApmbWvhG3MZSQ8TPnFzPHinHeEHdCTuPWyc1",
  "key4": "4UTFLyYeaVNEm9FFzNvjP7vM5TRFBgmJEPYvCM6jdoQjbCk99xEXbCtmi5R2UEhm7fZmfbeeVQSnozCpv5daUgyY",
  "key5": "5Z255UeCj4WmRSYoZM4nFQYPtM8NXN2eNs1cq5iyT7WP8XTEuuwVM4fFiQRVq73r5iuNAS717X3hN2dPd5NNQ8sK",
  "key6": "2YqCP4h9yEqDwWfeevgnDk7rdTpdFCCBAyX8ePjhPRmocsCKvQRB8gqBVdR5QtzPur2fwhZLB4uJZM5NTuBE7B1v",
  "key7": "S6SSqLWURj4EjLawxf4j3yx3oXevHi58NspkwQ5NApTGrDr7UjJU2P2PJJLhnUzdkpaVEMyCiwfoPCwdd6GDidF",
  "key8": "5oVxxCMfJjQRyThdDadkVBNrKLikPm9S8Bdw5BCPHm4pSvmDNwYaFPBbDiyRcSrTsYVUUnNyKfcAjwoqUXDTjJy7",
  "key9": "4ZcHYSHkaYMqWdy44y9JYGDNTyiJJp8UUFvso3WqFUEdRHGvi4R5nVsaP5PxSaHzqrm63qDjgoGtBSvg7AywXxW5",
  "key10": "op4FX1q4nksrAtT6eDrJBQd2uVdjEnX2tSQo4yfWLKRvnmcxbsiKBudRsJdFvHsHaUBtASbc1AhFbGzYoWB7MEC",
  "key11": "4oH3iNFsXaMWh5GYjAGpQUC5yCFWhA7rnvuQhozcYBWUoZJ3nmHWUyrt4fn4Dwj8f7uSWfu4Qoz3FqPinXQj646X",
  "key12": "65hvoMCoNSCjaVRjwnHfZJV7gaKWd97YVpWfe9BJ6xobL5UxkU8LyMiK29FPXZ7HncVbz6qJkH45APvdFNqCqVN4",
  "key13": "428hTyL3C36BG9JLcc2PeC27r5m3RWdzY6uwsVwfBzEWTaGKxXEv8QgieT38ShTKRJQX6D7BJSpYusnvM3b4tU2U",
  "key14": "v9Vdn1Ky2UJC5GcsvCNs7txmoZ4oqyTSzkAdn2ADHc8VgYAcJqjBjJRCZojVXLqxWrF1ZCZ7e2oGAuBBfapEqeP",
  "key15": "MpyX3HemMbJ1BAQP3ZWaSwFjiJiwYY6gjjUj9mFyKyx8UfqrhBwd8MS1Ss88NVezQ9Jjzz23gwxZV2BkfDi4gwe",
  "key16": "4poG37Cm7h4SuZvamMrwB2oU7EueXRQHBVQEyAM3vpZ3fbEFkGjJWTzT2Ji77SLhtyhSeQQkKPtT83aCYtQUB3Wk",
  "key17": "4qA6KKkLCxH7k7HSAGURkUfYx8VRJtwkieVcsYbn9J3DYX1C3wvDZWC7hT66jHberHsQ498gYF8A4djN41Z2ZkWc",
  "key18": "yyxYX2GTcG1tWJ1m3oCEMEXN3yJij1NrkYmcihMJnBaufNZerZCjpjXo7USVAGX7i8XVrEWhwhzJ3pxiwB98m5X",
  "key19": "5zpp14PiHmznz56pJnoz6i3uQErTXSRZnXXVBdypPLx8ET7McsMBVKYwyf7zN7uc8KLy3QHr1Z8w9GHErrFZ6hCo",
  "key20": "59LMX9yALUXTDTnRFyEUU3iQcTnuFttBjeU5uT4SXob8SV7uoxh55G6WAVRkxVPtkeKmaQyf924Hu4JHzsCRZXAs",
  "key21": "4QRCF42kPzfGQd3Cb4Pp9JCtRhiuTnfEBF9MhBVewDbNFiwnQwWF21cbGRWYtMvoSqnWxPLvYuiXFsb9e8i3EXiL",
  "key22": "3im2M1q7BM9bvGj3hxYCC3VWkcTLvg7SyMAhQ6RukFREaJaeAzbC5df2RRGzDoN71sWRrYq9LHoHrEnW78o98bvA",
  "key23": "4pte8qmqubeB7vtaFvz6u9d7Q7NAta7CQyS66uvdz24FRpEhibS6wi2FKwU86Gr9DTHiQvg7yTUcCsKmqdem8jzr",
  "key24": "3JHwwPrxsUGfgYEro1pK9jmDB81Aac2QyZGRBLCc43ZUb5fzNKyDGmDSmh5MzpToXWjpBMnQkiiABvxAfvRs4uGb",
  "key25": "bsK9q9ZPbfZrKj77uZsWRqixypKBxVaRAxhVrqngiqgvJLGd9iGkhHRLhUoH95wx5EMuz7v3P1FW8MxthKjAzpy",
  "key26": "4fsVTRJzKEPyvA5HLBf6D4f6yuzRmUoqQ8XUP2UA5UxgaFkuuFu6pESdFzKCqhQ8apnyib4Tei5kCNfKjsYCD9A6",
  "key27": "3DewWz1TKaW4sEo3ybcR77JUHQEMgmCKajkPqDiKGk2DWf8iMK61A3Hc9qVy76NFQLF7TtwaXByFo63qmve7Vak9",
  "key28": "4kHq5LSnkHbEmdDudWBHFofQo84jwm3waHkXf8R8CidQXFDUDBGVJZ3TUk1hDXg3McxvXUt3Ey7k178A9QsPktcm",
  "key29": "5EJkydwyLwVPPNbsiKgGgzNK7HXUBx8eQMzxsxRPcbC5TYjhwK5pCxqvRJwy3ERSJwaMCxR8N2sqNB9scn9ZSyN9",
  "key30": "5GXSfyeVk5MpH889ztKh13yrNeVa3ZNmbBhrAqP1HFmk3WbjwyEenQQx4yppXt1JhvhqZMwss6WZ7sTFaWfLossm",
  "key31": "2MuF9DBj91EXRunu6FmbaUutzi1FQzQJSxPyXnuwx6f3e3JNwBNSfpKoWnK36SPdhwaK4McSjg1Nv9J3Kmxc7hxS"
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
