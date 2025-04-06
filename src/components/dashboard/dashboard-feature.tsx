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
    "25N3aY95oFzqG5SzNke8T4WvcKymwqAvRdTFJ1Wo9PmW4gMT2bnJsrj8sTyFC6pFB8UqV88VCR7pKbVqsh2wbxft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nH5ZujUdhH1Pe1SoaV2wrJ23ZaRnDB9osDzYH2opkhJF3pmRWJH1FGbjfzkgjVAY1cUgkjibXhLZVhmGLprptHz",
  "key1": "5fUZSbRpjYyyeUC69mkHXFPN3aYpp3gT1913DS3oPQCcDadiTxj9Mn24Fi6tN5t5wwcbVMhCjfgYfSeAHnzzRDzK",
  "key2": "5BwdrcceAEpBwZLuvFaPgbnRNHxHSonAcEyorGLKEdECMShNJUWHi3xSgEx2WJ4dP3hrsQtxAi7oYxBT3UVHAEyy",
  "key3": "4XvsskJnEreLdysjs9Aybs6qkMR5ec9UaZhoV4FJDe3SAM8D9CbKC4Fswd5yQLv2x68kxX9RfVUHHguUDcN96QMQ",
  "key4": "45VWMtM5Lggxs5EpvERJuLa32JX4hNi3oEDxumQZ1B2Qgm7pPMh7dDHrdvSaBzhU7fF88PYLwi7FjDZsgRfvLNwd",
  "key5": "44eqaBVw2MT6HBs3wLtHu4Jm3iM4qfeDzSDAR57VBpm1xNEv5sZvNvHGAa3BqVqRCDaVYSXCfDerLoeNybEHb3D1",
  "key6": "5pU3gZyR7QQTAPaj9Cxx1hFkRvgocGaaS1Xu3bJkPvpk7dN1NnEEcDbJ9V6X2Xrz2E5t2z2Ci66KZPNJLVSACKQm",
  "key7": "3w83GhaXGNrM8p3TddR54fAFYFAzfK2BKjhSfT9NpQN56qDbnr7z6LMejwMveUrZLUsg6dyFWf6EKx8Qg8YRcqjp",
  "key8": "MAcLYdvQD3d4dNPcTaAqhvHjci1oRDvWvLXSYTTymsMgsNfp87aB9rqPaNfFf14gEGzWknaC15P13gK5V7WJ17f",
  "key9": "5QSCFm4jWQpSbfUKNp64AHW98FT37399Ft7oRZZYhPJ6ysXvoWxHHs3g39ivP3vuh4zB4XS2UP8YednpttVfV5Mf",
  "key10": "5C7jttGWGjepawZfHTgdJBm91M1cGKDpR7jBLz5eLXTkxoaEyvy5fDRQQsxaLPFRUv1nHrAaUi4KTxMFPCjTGv4k",
  "key11": "4jrS9nCb9qZxfG3EBNiBvg2XTv6Jj3YUjcDJVgDZ5TcvgHdZ7GU5zkakT9nTKcVSn8UdJt8qGacNkLZKuKxA4FBA",
  "key12": "2gBoaJsPQyfRsYV3KerJdk9yDdDjgVZz9aejymvYP1NBBrK1txwaSDzMs8wTp3UGnTAqvsrSV1fJN4tnkhveQEum",
  "key13": "5MB5hsJh3qZUdGh3Hx2ZqWqMUt71QMUUq1RUkP6EtqxruxDxyMPzgrdZFyED69ueGGYWdnQrxde4A4LAMbPGthkf",
  "key14": "31cNM9xfh44ELVKqzraHN2BccQAHniXtLPtZKGjVPWuwXeyt84hh6hMxnszapqaFHGkQiUShxF27dTQCFTHnv2CY",
  "key15": "2t7Mtm34S6kkhXMhTMtsMC9sA8KiLPsReKLMf127mR6Szdd91GA6Wfv7s1FBHtA97Zxid4QAZp4RcJdvmrTxaNES",
  "key16": "5wRQe6TgMGucyyG2JT6HrWDmW1V9e8aNf1EstpiAhSkhztH579zbxYuGS9QBgUxXmxqWttQf9pSLFZfitg9PkYYF",
  "key17": "4FaHc9xXFX1Gvx4WtBSHg7j9aMYxV8u4mbbNWKrb5cfrSLtHqhWBjp5MNVRR1PJpug5jp4QQncP38DKaCo4qEXNY",
  "key18": "4PPrKSWaSLwTddzyzhJyG7AvcsMBbdrneadapY9CSvB6HHWdoXFSbrn1Ad6c1Rx5bjMJLjRQEgm7BHCoyXpTBwzd",
  "key19": "z7ZpUQRZ2F1SUWApKPLuXawLtomMfMbRwWwfj6Lxg6G3DJqahQzWMGVAmSnM8xjVnh9S3L3ASMv79hRqrnTn9yh",
  "key20": "3WSFiNfCYc1pEkcA3wgW3EFc94NJAgBYq7bhjniMiipyM3ffHuXmxcYe1uXxQkHsrhf4aPnxtwpa7hACAyfVCeWk",
  "key21": "5ETJxcus3faP3RnQVdcbF2qawdGKwnUFbGkR4nbFqr2pqPZMXzjYy7pz5zecg2rM5ao8zUz8nC1vuQRtej1pdbz3",
  "key22": "BoczXWVBz7JzbCSdZTC1BXKa5XaWa3d7oxhdnToQyhLT6A6kR3gT2S7ZRQ3tViV9yhCL9by5rLXmAZV6uDUjAER",
  "key23": "4aviy83XMRjaBwbuEgER97PE9964yBpVHf9PwkELagv7LyzD5FWfCKCZPofNqTy7XntoRsJqiHcvuYqjuCBuopKu",
  "key24": "5zVKyin2o5HwWMVXCwBt5Z6MwsSrnhA81FAa6v5Ae9aotG288Twstc8sxMovBQfd65n2TjLQhDKVXHiCHo31ntXr",
  "key25": "5nmvkwPxxFNmDZrtHuamqeEKefG5AGgN91wJUhbGqTnAo3Fyn9rGxxztksgGkiwoJXyFkdgrPwbhBfxvhWUnWEyt",
  "key26": "5X22cSeHvVnX4bqud2WHP8srw3j4pVBF6TyFvKtaig8UyZ8EMfTZZagNc4FKv1Ezi9ha7DVFcWABoje3Cm1Fykja",
  "key27": "2MLS44x9mcxAS8gGEPjzbG1YSAzYYqaEdecxsx7CaXSDNVJFFL8ayA2sn4WGDGr8JykpcRcfdZf49tAFsuhsiPHC",
  "key28": "3j14QMwAKg7VwfbUKSp9TDdt25goU6xnerWPq2ShVzXvNJGohm9SNDu5P6J7Cw5YSgvGq8JYjbNEw7pG9vdNN44N",
  "key29": "5zivZh5MeniJMBbZJgYD9CFfg4xp5fp6S8mLraeNFR3gGTwS4H5TSVJof2bpHWSLn3C8fa5mHM7SyseZrtNqu343",
  "key30": "J1LLejFfrQKnigQU9zBN1g1DXg7uZAQMsYTFEHKYCPTU5sruSRwZWyHaNh7EqYyYip5PLTFaJJeLSZo34BVj8Ro",
  "key31": "WBWrC93vFZpeWW3Xn53Fwij2kRA2Hi3MUxzr2GVz4DKmfpyiUmwneDPn9MvXdGHWxvMtXzzRvwcP2jvB6sZKLSS",
  "key32": "5zZ8qmzTEg39bMXS6c9zVexmJepCAETYkGe2VqAYgxCS6JTg8sRiA8tXUw7H5iEzpfVnVwdy91pLKtTpaDz6bXX",
  "key33": "2ToYhKjKYd4vuuAFbM6CmMM9Eo8oth7cTtRrNmWoH8Wc8uesUZS856rGauhu1f82kqaV1Jaw88NudLekXJnCxgNM",
  "key34": "wqEFMnwQJdfCkN3WuY7imvphynv1N8MVRGAvtHUAJw57PQRSwEEcm7UQbcR3DHm2d2myzYu4EsHwY1Hx3SnYAHg",
  "key35": "bE12qqu1roQ6umLxdcXPrdyQ7TCUqGVBTuHijgGf8Hpssqipy2uD29hMKxCEgj5wnDSP6fXDY3xKoSwyVgmq29j",
  "key36": "4auMD7tFvtTMojbQ4R61hBMi3gyHs67mrcL7skpijUjPTkVDHFpFcoRR3d5yrwNMqmxgDJWUnm2BQWfkGmRQoRxi",
  "key37": "5U9WqU4oY8Jmy1d5c7EB5WQsc3Qxzcg7huh3dwq4abJFM1zpD2jLrLx9voQzb1rgCUYfunggKG9ejPQbQXUa8gBu",
  "key38": "3CpJ6KooVjNPmnKtLHHb1obAbGDKJh5SdyaQY4faLwQv8ieF4UFUkQuAMTKZ6AeiVWqCQqzgbwDfjFaX5P3e2q8H",
  "key39": "3CPFVv73Z4xbCVERaXcN2jDFt124XT9SHippcCpFSGMjxQLJ2cMJ81UbFaGj3s89FwqnovC4ofSWwQFm97DmgD5P",
  "key40": "59gzqY8SAJYp1Cgsk5fvky9pck3Hd6gmxxeSvgK7F6J1aDm8mjYwWqGV9vJwoJ55wUZTcFeL9EsBXoWwn3wzgRPr",
  "key41": "3wpXAARHsZ624KSYVk6Hv8hM4BSWoB8DcmRw2d5xds9oivQCfjE2GZPnukrgN9mPJSEDLcR6uhHhocegcnqRnRL8",
  "key42": "4x3mvEwUzPhgEE2JKRM8JQMjVQBa9twnsoBSvdqZ68PV4AX5avxqjg2j9zZzwD8JDBuH2o43v8Y8vUCsH2oEchTU",
  "key43": "2SduXwmEFbay7dCeMgTp4ZH9S4gWFbJrR62Mo1MdyetWRb5Q26DgMoLVRZpSvpAf32QxtYcYQnFeXFm7mwxpVjeG",
  "key44": "5jw1PvHZGiZ79pRfy3kWhWd4X56duvASKYwd9MTUJnkX4Az6hyibLJ2KzfsYw1wTWpGzu49uN37UL4dP5EUxAi6z",
  "key45": "4Jkuow6AnZQoQKeqhMwJ7aEKyLULxrmihhRnt2cYvbcZTQLR3sVvuDrc3kX4qn7pMKa72RkQjQFeerxCgQYtPhR9",
  "key46": "4N8VfpLoZ9U2ERtsCrhkwqmNEHaUXFdq5RYr3CySPMfUUWNL5wbb7hGutJJPJpsvBCFD2QFgBGNpBUg7nYVP2Kca",
  "key47": "3xzXze1UnMpMjBR5wWkfS7AY9PsuXgzpDRNyEZCN7WnqBkV1gTnYdqQBSJwkqz2zHk5Eo7DM5N5hFE1swDvAZLPM",
  "key48": "2pY5f8oo5WKW3vH1gtfKdp35FngojChLNBZUe3NcBmEGvyxmhjgtJd9TMZvjdRS2TQZthGYfYHSh6nGc4sbUX2P4",
  "key49": "521CnsEACHPpLXQK39faBmZyVNeJTAvdkm1xyRxKETR8ExHJbnoyaGBLY9QUUMiqdpkWjLGEsia7pSjnzTJX6YF4"
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
