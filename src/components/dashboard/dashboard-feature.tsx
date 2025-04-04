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
    "5cYtyv8Si1a3s6NeH1asvqx5SwQZMBt21Y3AhxJSTRRUDrwkcFQk67Mzc9J9x9Rswkxts1dzMLZaxBsmsujvixt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCDo1mPP3BduA5kTWTPpJjt7PPLwaeiskJ4C5umrc7U9zxVpY8F2aE5VBPftXPdKMTpnS5wTHcEo1PQRTwAPN72",
  "key1": "4XZqnh5uSnHUW6jmCCzpo3vgcSczVYX1TZTWykqpYQ2ABdySUjj69P7W8t3irJycyFhmTZgoDxoRn7G2x4sXZnS",
  "key2": "3imQ3YuH9RXJgiHzURtH7zAMEDD6GUF2VwgCWMdZSEEYiWgNeCsjHy7PptjWT1EM1FXBfPMfhxJ7WT9waBFxyMSs",
  "key3": "fxEvVK1zxuiegJnA15Twb3vWY2AUKuUyk7BDai64mvqfFGfb9MdxE2K3SHw92MJn9tFHLHXPGETsXc8gHgFhAZX",
  "key4": "5tUByxw7UyJJ9DvhctDH5cKoyw2BX1d6zSJ2QrRxLLQK999rxjcARRf72dXGh7F2DQz36bM5exuEQHwz63EAoQyS",
  "key5": "25myTHSTww75wGcDbSuQBJEDrEfd5i1yzjtCSjEMQUfKhCWbeNxBWwXTaFnAHUWZV2XRR3K2kusNHR2Z7tVgaav6",
  "key6": "5hbKBb6z6ksyWJRj2xbFiGPSHKXqYPELzwEdZeEpmsMN2R5DcjLBCyBLiqUVbuUwqFZiLxMNDXqA4bB2byRSd6Ku",
  "key7": "TTaF3vbgG9jdiD7v5cp4KDFoyuxpRMMmAvGJXkuo2iwTbXYRDkxqDWzAYNzQE3VGSWMZWmwx4VUng9pWhfEaNCN",
  "key8": "4Qo2p2bxX5Rf4AbeoFtrAMhgwBPGTGnNV4ben9R2uibRPswXtdTzSvWQMPs8Ym5kQFjStZVU6ohXPbyfiT9fJ7jp",
  "key9": "5dQM5Y4FmxjVZk2CR4DGeWX9V6nTNYTNJz13qQSyBhMBCCQG6mdZrPyzM9ex1ub48BEdW2kjw65pDw76EWvXF1C2",
  "key10": "2cwTaqt9gyRQAcMHBoubBsVZNdPsHmWsjL8MJvixZ8wSveCwh4jb55KuzuhqFQ2HAPbbYyFbf82fy349dwAPFVDL",
  "key11": "4R1t6KvMDTJBy4Gfmk9TJ4AeYrYJrpPPYL6Aym4pnveiPwNbi1svPumvfMVvtN4Hd4QzGv5fadgFThVqPcr1AFEC",
  "key12": "5ETe2C6QLppwzreCa6P2zrbhwpQNzWHjN9U4VKvAWTi8HMovcm23QfqLwbx2426FGxQAggU2prdeRuoUR2CscQZA",
  "key13": "35W6NGVUDy91Jir8ezdVvYMSxvi1a3WysSpPHE6R3se9EYFUw3dDrYiSeKnj29DhXxr4A8QJ1pPxJURmVhjrYe3k",
  "key14": "rTKyGF3rq9BKpfcQcVJBVfmmwar8XV3jdLQctoZ9wzbrvhBGjk9cjxqwha7QFVbmfEELYSwkGbnET4ZTApqmmXc",
  "key15": "gMo9mZLHQT3jxd8HVyEBmMDMevS1cd8YbEPP86T1VWYxS8mK1kj44aXboLiMv413Mesc1ux72eSMhijKEeWpLqg",
  "key16": "7y27Q7DVcvFBMR4xBrePYReAuzh8pjgj9D26Zi64hyZ2cfxUsPvMaZQC2MyzAF6LBoeK1zZmMaGDGXGHLPr47eg",
  "key17": "4Emu1tcTEWKubGo3hAxaouMouZJ88yxfVP6RpXQgZkiDPvokv829FJvRzDzrhEwCudMq3wV3M5gdJGcNe1nTrv5a",
  "key18": "5P5CuUYpp4Jv3tefYXYdNuygg65ReuSqLd7kgYw8EEqRJSnMRcqTcv3Y6zhhrFPHUhfneJm9mWPZWwAeVwjFqss",
  "key19": "RKK2W222VxhfZg7XvoJBNTGtM24zkjmrdh7UgkFinEg5WNcDrBALXj5sz5bfNDtJ4X766UkRYtvmrbJDhGXQZAs",
  "key20": "tLzbtJYrMtxT6fmRSdxXXyk2iWK4qyshaAr7KBVsHSesBzS4a9hNxtUaVH3NDyT1qvRheEZLAkoQJgE6GGJFYVw",
  "key21": "4Hu1ECgqzZry6afBRNCNM1fcanPQkqxErvPiPoLoNzEqGZeL2a1QyA4h4YWYdcMQPeM3ZLYM3nBAQDab74Mq4v7d",
  "key22": "3jzVpAfuWVSUtTpDMkWYV1BYmrM7i2dq13WzjtFuktew3NJx9gY7RhEJzgN4jm4FZjuXFh6AGzqr1Wvk3gsg9WUS",
  "key23": "2pDWTaUmQPiudbj4AZQH2hYhg7P4e67RNDigkUkJ9JXfWqv3PBbYqB4VtMDzdfRy5M8KsuSi6uVxmvFN8r9xW5n6",
  "key24": "8Mvh6Xpqbo61cvW3oaAFsv1YMS6Aqcz2XsVNaTziZTdMAGjRqfTPyMciPUioVcA2GjjHhZwyzWrCFsk9wC45RXM",
  "key25": "3iUtMYmwtpq54qb3tGS1S3iPZNGRmKbBrDrgXqeQbQyRb5K9Rg8wjmAb3LsCYb9mHhgBjpfEHUXRdCK2muQQEJ9V",
  "key26": "tPSUz5u5K3FAaMSFcJPozUxwahmJTUGa7k8BPEgAiDPQmDppw4dRKiBUEdDinHMfFqvYgYxAdTTvbsfSNJ8xZsD",
  "key27": "4pd1gn4FqVVLFRhS1G3pdwPJ3XxHf4PLbJpGb3j6PhkWkNZ4Pi5CKHgByWXttKktU2C5m94QtuoK22xD1LGYM2Fk",
  "key28": "65mPsrpAvFmBGzAetBt28QQqsbeea3uhpsjih3zSLWpSJiGo1YbjcGEaHwdJP5s9viHsNFpeYrKntdTSY1NKBCSf",
  "key29": "31XyA6AfFTdADmXgryx9DnrZhNKB79qcouaVgP8Qy8k2bE9oiq8LPt5z6pDbYbQ5vCM2tfx4JXNAFFGDZjCQQaG",
  "key30": "ydC6DTahWB1g9X7DvMuGCuzi8aK2RR1oMs11DfDmer3AWTuQt6g6UwRGimDgFoTg1pxD9tueXLj77BnN5ZpQfGZ",
  "key31": "2kCccULR81FHZDaDSM1rRYZMM1SVFQ3bn1HAQ5UFV9sZRp9m94Uwtb5vzjJaofGPK6tLJ5KPeaoMmBXKZujSaQGi",
  "key32": "67gmjYu46TJ3hZmJv6x6c9ESjFz6xQ3WHCj2hd8YzVnw8A21wUpmQnsTYpodbDUBotdsAsjFqwY4w1oeNkRKJiy1",
  "key33": "2ttWCx7d4cTmnYKPoDx6ak8sS5cQfNm1XGMCR5jWp2ohZNwtDPRHYZWDA2t4yjrm9aXrYApid4ihTr1niFA2Fjjz",
  "key34": "4T1YG58UKeuUppx4rwEtuQTGit1HcnuNPeE5LyysEVicao7pnNEmEb9N81NG47HqYB1Wcg9pT8J7Yzs4VxP32iRc",
  "key35": "2tw63nYumPZ979SufQPdT5nRJLdLyGiZ7jwz8MC6gn4exgce1SxC1SLsFyWgisFFFvEy8MxK6bu55rVqqoXqW3w6",
  "key36": "5ctk1YseDwwT1STuJyUy61vy49yNmmqWUmMzGuD4tDrdbjYnEYdXR5aHgiNmnmwqemSEaRqpN54FFRWhDTRpk3JY",
  "key37": "2CdH3zGmeTexBG8x4pePLW8W74nfB8jhfHS327xxpcrmAJLEs7NdoNWQTJESyS7NWcHwQSbVDrLLmyEaKaDruLA7",
  "key38": "zXwyEvYkFYwvUiTvDEP5xPyqT1tQerwPaPDmg6nZjyZ8i86y9tNWi7xWAen5XT5aM3Ra9wfTzRWZscyWmceurQf",
  "key39": "5CmUAUta4xRuDaBovUqTJgqsa4nC9YuJPkYUxnBqmuJdGz43CYo7B1hAJwzwEoWWtrCBatFeRbec4VaA4Wsksjy3",
  "key40": "3cj6rTv2GVnapxnnW1U777TCABKink6ptquewD5XQnHwMiDvz2kzWnfyQ4JVnbKMgVXHwRA8hDPwpZpNLmXRT4ks",
  "key41": "3LEq8X7w9gxHfRjsxQ4WJi98j46JAt8hiDAbWNS7w5sjHf26bnSdFdAY1ZrcgbcxGw5XAn6qxf5xcmqqMxNq6wWX",
  "key42": "4BNNQonPBK7FFkovhK1hVTF2HT9Pb8zWVHPfmw1rKsZJFh514ZdZhqeZHiP21gq6hGHnPnDhAQNEDrAbZfmRNwNg",
  "key43": "4gjMJctKavfE7QDxv8GGtpRMi69mKNEtZLTxMzoD1H2HtT2nXS4wqMGrc52Kygb9DHW1EL5vcn7yGZimuuRNCagc",
  "key44": "3QESb5vYJzveBTvm9Wg2hNYXcUnJcyQKtayCqhNbgxQcYwpRAHJr9qLjdrB8iJgebCLZ43Nmjs9KKJQ1pKFkszi5",
  "key45": "34ct4eVr4ry85P4cj7swaG8u5FB6g8W6Eh34TYZcKRLRKFxFuQcwubJTacxKigWkG774vXkd65A9pftVWqXgHJXK"
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
