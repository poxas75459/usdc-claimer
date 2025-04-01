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
    "VrRYf7qeuadXAnaHR1nSFcYZDfjpm3hc1pKonfXRc9MVTjq2q4CJ5otrdb6TaCBvseDZ5QNKD7yc2wzWZcmLBGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpkCtR1SA8FTc3dNAof6NXfTGBm18WPyywmGh71DHqsA3rnYDa3yf2a1eTdUrH6r29rXXYUbnTTnACB7d6m2vzy",
  "key1": "3oPVePpoWGr1Ku7szQf1SwgT36QmA5pxB1uNsTb95wtHdVesvLxUtAfQzzPBncbdSo98UfMqoyxiLBrqdpdykrcs",
  "key2": "2Ey1sWtxsi4ut9RiXQixeC1mikM1a4kuX5MaQ5cn7bnsWahBR91YHjKj9zVMBmZws7hshqg2Z5pZ65ndgXupj2Fj",
  "key3": "2biQFLTsXQeLtkuZqPsv9mFCyt1sT7w9kXq2BZPLrX7qKa2oaPdaBTyL17xtYBvCd7rtmRpCBEmokdXnrdCVGgZ8",
  "key4": "4E46C9iEquYYHiefSUtkPhYYkZ3cgrM2k35yJaxAt7i9MhmSDmFdKc4w9cWgfNcWvmX2CruseEB7ZJDRHR97mPhD",
  "key5": "4WxHPq7ZU4Dz486zjT2DHoqhCyV29Wyo9cmpmCh761GHGW4EuWvNfUqLMPy7rerJvFPFCVEtFdHR6CZJcZYuDofU",
  "key6": "qhdGvaVYTKZuGigG9WADNR2ahH5VSjYzbhBesme7Lzj1yRgbG5YNorCsKkuTbniY1Y9CBw5HxbPLossDZyw2e67",
  "key7": "4ME8iYDc94ubMeSJrQoKTSKMcR2BRiabmyHfMABdkik9YoS5h3NQCPPLQUjBe2WQGXNbtxZejpaCjYtDBKwwwucd",
  "key8": "5Cm3eP2NwBcTCTUDPEWtsNieSFtuXkY7da9tAy1si7DcA9dbnTUDwGMe34RmMdpYunHCNatZCoJffVevSCDoDxjb",
  "key9": "5e2WgLaiqZCkAnsxrgWDbr4Un19CHqgN7a7jZqAGyYXcYGTmcMbe7U982p4Xm4D925j4Jek9A6UW8vptN7y5jQnu",
  "key10": "ufWusMHB2yZzhj8DtZroSpD1JcUWuWUfP5iGuDvKjUmkD8tBEQaa4CQ1xkLhkx2NAG6P8gkWPkp9KogF2sGdMAb",
  "key11": "3cRh3LPSHg7xnsh6s7NN2chznVccpXjVzcamMMjc6LL3ucV1BeWDEtRsuvYNFJpwKZHW13rpHxCk89bMD4QKndee",
  "key12": "4kTq6HajsBLjUSMLZoaL1KQvhiH5KPRMQPDYMwyGFf5mCa7EurXW93NXbaVFxtbar7Lm3nmS1B2r5o8JJxwANsNQ",
  "key13": "5TyCLPVzTxYC4H3iJkGcSh4vEYVEkK9RhpUyg16PAfe7pfe3eQbDayDm5xLnnZbqqcFxwGLYeKBsxpgpzLybujiy",
  "key14": "3Pe7FXceCq3FQpSScrXhwTz2eom9QmaBdGJyxu3WsS1NHZF9ica85bFjfQLhWfK22Gpu8mKMEHekV8QQGC6pQGPX",
  "key15": "2JYmGy7Rf8quk3dnvKTbovFy7hSp6jCoSaybDEiitDgyDD5ii3L1qwZqgdsj2M6V1RbDB6NH7LyVaWnmxvMrQXZv",
  "key16": "4ENTk3328joHyB6HXS88RqkNkskr4E5ivtMLp7QQq8oKJmZq4DA2AuUFqaHDtxV2R79Y9zhqxDDrBBcmb6rn8eoK",
  "key17": "4aJrNCvyrPS7qYTNJpFvswezXLEBNd9P4EtGhobrop4PCRQ58kb3UJwdnPNp51ou7NkHb1K2sE7Zd7qVh2yhQJVH",
  "key18": "36FxX1gdiZAGiiKbUQzgvCRSHco3oon38a3Zd9oLpe8zRmWMQufqTDwY49aDFiKo7UTqJCN7iqFXZhjsesg7Qi5c",
  "key19": "ijqpk2SfTkfssuxKdrHzsRqCe2sHyXR7ncyYSScDN3CvHRDC1YH8pTxqWSK59ajoDEMZGvpUdAA9fMjqmfQaVyF",
  "key20": "4qyU6ZZEwQQdcmFn3npwLVanVSWnCxdaKewHLmEh84BnWJxEKVuRC6NYVTECo9uAvjqELGzGcFx4b6G5id4X3Dkv",
  "key21": "4UJgygkgo4utDaBDg9iTY36YGnYz4qRBrVo4DsLatsUw7XZ9QTNeTzmbjHdyjX9bfVjBhBBNtyoK8TZ3t7PJfE8Q",
  "key22": "4hVLcNCPRjGqMoUoyfy61ELubGKAnAs5GKhWWTFh2b61KRxffHhav8H71htvXeosgYd8jkB872UwYHz5ETeVmeLX",
  "key23": "362i2hdPJqhcPRPFqv749esHFmSh1SBqdd1YSnFmkUkSamfxuTJhsJvtEkqwYorgsKPg9p7R6vdNa1jRbtjY7WTe",
  "key24": "2hj5K9bHJsrz1DRpUQdrU2adXmvW2VrUXiazAjeKoQSBSt5zj2z622ZxnPsmAVgRio1iShCpcaR7VthKWEk8KnfQ",
  "key25": "3pBDYY1YboUa5Hm8dky7hJ8dgvgVRweNbRr8ytj76N4dikUmG1R1cYHqC8yBXMytK3W2j8QWpGyGyKPyyfjYDgZZ",
  "key26": "5xmSFtwWF2JF3ejmxweCyx8ZCT49AiZ5s6yJe4tGCGTdhwZkgES5Vi1pUUCUGeWCAwChAFDnqTRBjRHNLGPVBN6D",
  "key27": "2q1nM2Lv8ovNkwPpJJB9ak7DttEwEBVmZVi7fDWRxbDTaLCmvmrqtJBaLTvAmDtWNWgNoHsNE1wQX47BSBmedsZE"
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
