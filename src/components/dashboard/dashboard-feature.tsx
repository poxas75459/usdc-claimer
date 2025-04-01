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
    "3CufwUqhQwCtLLbmurmQVWaM45WR994Bg64BJV8tDthkauYxQUSTzLBxy6EfKPw7gugtdak8MytT43UkDnkcjj68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMuJHCxs1tNY8waoBRnc9VZg27qamqNJadc3fiMZ2fa7qASuuQMVhEGGAohh1SVWwdSYCbapob7GZ9QHJYn7mPq",
  "key1": "2nPuC2gESjSAzK1QNqrsU2Kgz9Myj1Bb2XXXBz6PptbP2TNJYCFVPXBK3wwDLkADs97F7M1RAtPD3yjc5QLvV9rX",
  "key2": "545wBh9sVGdkpXNEioqFoenvV863AkfF6ryGaCTEHTsM1UWQCGZ5PLMC5xKKVFcwT2KyMTSsSHRHvFMoNfyyXWgk",
  "key3": "xmTbCPSXfm522XEvDCKVUbWbMEMKsv6SYqyv2SibV7xSkMEQ48kwg6VPS4mwkEYEdbQRxNxFfwXnSJQiLpmwQUn",
  "key4": "5jZ9cfbLcVKDCSdqJ9FEmK4XjnHrZ5PkEu4Ft5au1sqgot5E1F98itZ9YcfPXkAYk12daKSe72ofx9xMvCzhDgcr",
  "key5": "3QC8tH6L3ScvsbZ52Q2rpM12mWYxx26zJEQfBfSxEDbavc8EeY9YYg4Kzq9BK8EFM7yHRV7P4XocHpZ4NVGnAM3R",
  "key6": "2BSzBgvFYCxEZiat6i1F6DJ2JifT3sN5TBJ1UyxJDL388jsfpa6ffGTSEY2ouXMrYVbApCB3bSXFMfe4ghRBu6cT",
  "key7": "4ArNR3jdMCyxorHJ2BjiQ3y41J7jLNbhz6hsaWquibandJntzNNEKwpyatZytqKAWgWXANcV8pdWsK7SjwL2iMCC",
  "key8": "3k7oH49th1qz2MgrF5UFgkkvyib6FqqHjbCtgUrJ1iSseqi4bgGuLeXAHBjeKNH2FUuc2KMSSJ88k1ib5PDfWgiX",
  "key9": "5YkBgBZqjRgY4zehRY8i9XpWTfhBpAAVJvBd94yCupGp4XS7gnoxxzvEyxqQW5K8cXQwfxioeeFMcb1VQr3GHccn",
  "key10": "5gz72L5asLYAm2E8L3e6ShKtiMbvGZ7pBwTHQLcKDVQzALyzqZunPojV79Yh8irnFkpAZmpzWEnoHfwNcxsxFF7j",
  "key11": "5DvRAcQejojvos4XggjPfr97uiQQdtaQ9NeL6NGY961Rm7B3HvLstzfPt5cXsQcrKbTo2YhD5bGRJKQ4QUPnNQd4",
  "key12": "5GzJCJ8sCrfQmAdDydNBSVPS54p8sCgwhdyhDXauwuLaSJEuSJYnge852q7SjiCuqDGpjjNNWMo1Ctoat1bn2Usk",
  "key13": "5iWPA23dNC7n4o7rCAauRkPfNoUhhWHaA4v7NR5jKf57r8c2ZMknzJu6eH4T614XeR8BTpGSr3cx8xBDu9rKdxYY",
  "key14": "3sojv7XjLmf6kwFwarSu3oHYZhshnvQgijyAizz4riiRB8JDEnVZyi1iEdok3XTBCCFjNZsJzHYDWEkkw9Jn5xc8",
  "key15": "5jQBErvjNkmHib32LwtUZ12ToMm6voDgcHgc9u7u6H412RuPByrd4w95pWrrUpP3oGAvhSJjzjPdCtdiSuQno4L8",
  "key16": "89Mz1oWJ4Asj99Gxm3z3ZHGP8nmRAv1WoegXqLciaVsv56HLnfmg2DSCWj3xwUm5GhVEJfmnBMudXDDVgeucbxB",
  "key17": "BYqj8LxthTk2Pixr3F2TDc4v7CdQ2WvrdJ6ohnJwAcmhmSEXQ4zKbpVFVgZN7f4RDXQkTcPrN7HAHeiEVMsVqon",
  "key18": "5KQ9EtgvzY5p27sfstM88scGKf3eGBXeeSdJzsRyqpCarUFwjd5LFeuLHwmemU92E4ZBvXvGSKF1CHR2fvD4XQse",
  "key19": "h2VzAKqNFcTACv91JnvjiPk2GaD253TUDbemXUCmkczkma4Kz4Au8jTnDHLKYZicXBmcdXfKAhp7pEe9b1PEEgo",
  "key20": "663JtRsbjuQb3tsoCdScU2g8R8JQyGpaLdjWbGkvkGqMQiTurygYBaEY35LApFbo8sikM5ZJFRETerNPVKSL6UD6",
  "key21": "44Vfwvg2RmpKd2xnKqWuiK16a5Ni1KyAja2RTcpvRuvpt1CkTfj1ssWAF7hAn9xV1Xwb7d3EgPcjw4c29S8LjntY",
  "key22": "NxJyMjVacg1YKE5PiYeRck2gEf2GTxnJTauxxUYsh2r9BN3L5MFA95bmcUnmsYjdcrnDNd4sPGWtZtRmMcf1SDg",
  "key23": "3zZZXZ21XrB8h2bzj5TvJY9HfxNjos8ocnwwjpB4pqVNQYE3aithKUrVnVmAPBAJStd6vQuMH68KsqWhAAXRhQDW",
  "key24": "VHU7BfMRb7upMeALi1e6y3DJhBQA5RuXYEx7esduHdwwSaLsHZQiTczuFnugogEmEnxbPCr1bgGrHyuMKK6gzWq",
  "key25": "2YAcNRTpUnzD2StaQ956LkUR5hbG1SaEVgu6ppDtGuD7JNvXaMYpkRuWQLeSv529HLrv7DQBrKYRwUEfpCn8d6zM",
  "key26": "4aACurvV5EYghZ7eiayN3eW8Jej5pJwp7HxwLkQgUECmUYT5oVSajxkT8Fi2JBbNQy7F8tr7mALBphfdfgwNfYxd",
  "key27": "4trgRQUTU8pVSor9et8L83dCtAKZkpAdJhsY1eUwDycXnxDfeMM9SLgVpxhe1K1f3P6Ubx54yg2xFjRHiPwxue8t",
  "key28": "3rwPYHViUqrJBbhGpYBEB9yV869hu3q3Kq4D3ftcqYG5HSaZcNHPRrVRw1pk1z1tPD9wSh6u8q3bciRcWU7pYNJq",
  "key29": "3oYnPp65mRdKvoxkKhJ2L1re7aanemERpBKuJuYZEiSgViLi23MjjcStE9fnNgZHHsJe8Yrm6bWSnTCVSV6RWKcn",
  "key30": "38Lo5DZtH8Xw2YsdrR1SCbPT8hbNMP6akbudKx37RfS8tJNrZKLMZF8gKkMALhv5MUqsdLTmCia6sqRNeSt8gjde",
  "key31": "3jRrxEo5gVjtfzYhgqaarPot9tzWUaPCtgVFPijajGazf9ohqxP95i8U4gjsVJepS5oM1CrLenUnWViSSLTcNML5",
  "key32": "4ZGRCg5XsAd849CrRWQA12SKhzFdTvhjJfETxWYHPtt9HJpHNDq1qUQCo3qagu8qDBkGizK97oo3BReWG6PGw5jv",
  "key33": "4RaBMSrSMcgW5GnYKdw1vTX7RJccBY2umFuWTPHaTXvoQTbbZ6NFaNKvsyrRt4BYFkyEVXVUVox6tJ869KRreDop",
  "key34": "2bFrAuNFqgca4df5sgB1Ykt59M4zvWEdgE4yYsm7v5hz9crHTBxDwViJwXx8J1twAEKkHbccW67r6V7G6PZanHzk",
  "key35": "atf5o1VHWB6sgM3bbDtgaVg9rNPJr2jaYfzy6dmaKyfekZsebUxS3dCBsfWsarwiRPDdeSQqKF9Pvu2LzeBKZK6",
  "key36": "2hWsPFFEPAS9pVdxj8ndsf6PobBTvs936LLiLmKRbskP1nnzTSoKDrkNJMmHf4kWVNnMDg71jwVoxmhLCQd6Pzt6",
  "key37": "4YTbfGJujCGGiTFaNrYEPKbsscCtkRnLaYGpWEG6wQWHvgA5637qVuoaDUWujWb3VvwFNho4WxQBHUsFvu88aor7",
  "key38": "32fv1NHpAssJyyzxUeo6n69uFMvC1AFsfdfQcYchefYFFq8nnXf1WUG81YojvejbMBCp8NSrKHijfRwkLu7DiEDb",
  "key39": "dvXCTXowKNcV6LNF8Qpjk3Qc1WVLhboupTek88eUrdczUJRrgZJTRi9LwrpeXeofrDECx8NFocLjHy445xA6rpi",
  "key40": "5UPemVzqp77emK8vvJmd97eAwah8opgzRqx7BKwRiwQhvnbg4epMFN7m6BaY9Xk6Xz9vsiajSd7SUYscCqFAAaYr",
  "key41": "TvdkrmYPcjaateZ8SaEn9q1mweKPz8suiRkyebBgcEMt3K61WwXq8kKsaJEYnc54qY453SXmAdvFeGN73QS6Xwj",
  "key42": "2GatGDdn12A1VH7rqdMQSzaeCRBDa2BY67wYNAukYKSraPM2cNGeB85FCAU9UCqbNyoctMvkQFXsts1eZTHBRaGJ",
  "key43": "a99wsxJKUfsQ5zG4gLobqb32QiYa3opRPk4TqL5uZFCSkRVBpFrk3CK6rN6zyzQQ5smGrXzr3NpNXtDzZox1S9m",
  "key44": "3nEMzegDzatPiexxBhz8ceC8CPReyYbcqpADG2vdKtWF2Nb8C4ybyHoJxssrGRYAfcSHYqJACoNzJR1PXaATcrNG",
  "key45": "3PaKvnyZ4jYcqdaYrwMFhAtcvm12xp2sAQXoGYVFCQj9jy7o1EKgUXpnET6ugUd2CUt69NT9dRfHh9gFV7496Wwk",
  "key46": "5zw4o8e7K3hsjdmWYXTJTAh3TygB9ShzTKEMzHYXSyX2Af7i89eZXhf5g62E17PqP8X46zYAUzTRyuEZ8c4Gy4Jo",
  "key47": "4Yhvf1NiK1J9g3M711piRzJtHS2W96tmL4F38tuiS1dmwtv6V6CuGwBKQNukiK6fb9V5oWvcd3CE8uuLmtKDMLSU",
  "key48": "q6iV6C5kmKonbYjAjZLJFAWEieAuZYoCxvMQa2pMiUf8u6BLTJnAVbhc8yzJxgGsjTPcXLUDTgNzLfke2qFncj2"
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
