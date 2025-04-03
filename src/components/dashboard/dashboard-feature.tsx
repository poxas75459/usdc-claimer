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
    "3JhYmxrhjYFvxAVj5n6kF8mm9apXXJuX6JnARqUv5ykTJozX9Y1b4Nw5xwgxRGsSEnTBsNrmAL2JEjhnz7N5gCxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKHAxZjwCe6uaR36gq9vCxW9mFaeT1Ns5gKnTHW9DSfhVyGvFLefkoDNBjRZmmhZrio2iDFPeW9QuihSHtgThCi",
  "key1": "5f2UTYEUCcKyUdSkNvqQYrPBdidrDTVW4eoBWCgj7hWEWkHn1KFBeTdZTs2GzjAo4BjvSq8yVS7VA5XzXtuNBNNx",
  "key2": "HshGLmT23dFGfxpxQtw1Jx29eFKpVQWzt4vTmArVwYCh2T4njz55soTA161XLXoSR1c6JXWZLKKy6DfubtBQwRd",
  "key3": "4mHVXd1X658jLNGktJHGVmK7Tzb5YFnt1g5QbTGoqM7SQX1p5QfQsAubbctf7toBtRbsjQ3Skbvzy1gNhLF9x31M",
  "key4": "45THhS9zucFerHErYx7CqeTYAFM539xNwJdyzyx1w6F2P2fYeA3FQPjTxiow3sXcpMYEaQZiGwru7bGWtyjZsraF",
  "key5": "2GWiL1wA2aYLS1sUA8DuHfM1qb55iDi55HnRXxFoHZt4h5nWhQDFY9P2avRugWTGVvhtuADFXdMjnfJp1pueDZ3z",
  "key6": "5goq4AenFMEAoUhhXigRHosxZnigystxYNoBoxYaULEKSbLE8X8X9wSSMin9L7uXvUu6QSX6Q771VdmPPrh8sqtx",
  "key7": "jGCVVhN1R6cwTjbQNYSV8WinHvXGBnY5Ayg4tp5jSc1hYsBSJ1asD4EePJcpF4w4FV826mgytt7AJxFLoLSSqut",
  "key8": "4WoHFUswkwVzPyencefMQ56aPuzZJS11XQTT5P1moPvyTWpWiP8Ynh13HWtRpRv86ZxeM573JhxtfBbT5cNrDXyr",
  "key9": "26MhZeVc6pymDTVr822DsM85ANYvqHQgFEj62tiKdRywYqN4MSXQ3dbVZdRLYTAjKhbhhQWMHT3u4Q3pr7YWqQCd",
  "key10": "4pUEbtT6cNVNjD5aCFFmW73GGHVG8dxW6SMGBfdxN5PdiKwoLTjdMa7tivKosTCRNF92DwYdXZvpdVHbLNsKB6Rb",
  "key11": "zKxiTZAvEn7EDVgVGwH6XrT2wFEA8p8cgfGfd2LiLP2RmZZivn71oNSUa9Noq5JUBXV5YszAFLgbi9Wk3fGhZXv",
  "key12": "61rjbUQvnfz1Mb3ro8p4ZEyAXuUckTzVuU5aD1sLZnRdoG8phTU9kpbKVaRvzeegoyxxTd44d8cZasmfaaYWKn5A",
  "key13": "SwHQV4ofdmbJeMv8chXF6JXPMb6Xa5xCKemUJjukFkWCNimNMp51xoTgSkbC3H8tsaMqUBA7Ecbmyfz2dVLQwH6",
  "key14": "5JH49tC2e2q4Sk6Y5Num5rQbjSbqMZYnywgpenuihziXyDTtoT4PAfNgamWacgKDeejuuUnEwFTnHYx9EMQqQmvb",
  "key15": "4XATFpTzEuMdCpSjZYaGkPQ3AxyY3UsaG9C7MD1ADXzTKnseVgXw4Z8LRPo1zSFtTtGGcTGXLsCGnLnFqWX9Gvsn",
  "key16": "2Fxa24jq7zs2pdwUUuoct6iuoJH6UoVU2Uy4WdZmqBynYSJKPR9SWJyWkKjd38HzUurQZReKamHfXqmWdYTbRNzc",
  "key17": "3XDid3x9SqeRdYPbirmi2y1iQfY4sZ6zuHtJsFrbrwHKX9imZ7As1oqX9kjJ3RBa2QFrDi2thnyzSXGhN8gqhfZo",
  "key18": "2D1mvdMowiY3vWxeLWL7kRZc1BYdSvXbVFzQJXq6zMxNYgbAyWeVg4nCE7nbBQh6zBDFfqMwd8AMDL3dGQt6tufp",
  "key19": "2evJWpqxe36fHHgsCpfwY44YvcADXiruQAhj7575UXSUq7i6wDpuSGHqFPbKZ7MvEewqjt9gt5UaQ6Y2eQRcH9xu",
  "key20": "2K4uNtSuauMtCEqFDSEojLPgEGvnEhDcPdNUzv7hxYNnM1VTUZ2UiSCfeHRHgyBeiYUpPJrieLPLUBfhCcQHZCuR",
  "key21": "TLCB9CWFUjAikgbK4Az49zNWdpixXFSyJ1y1dUdBAYarWP6nLGK4CBz1LitSnbwJ12YXGRFfufYzqaDfBXYK6yi",
  "key22": "5ZnPdNM19DLg3JXoDjTi8eWuNXANhghS3fX3XPRZPGf2LT2jFbKLKXQmwPuJkvzGnoUA2o54h2g3SPf5nqhZjbEX",
  "key23": "36qivrRoHn3j5kpBSSZgkfXhQ4tzPPNqWQP8JYnKzRbf4mmQyxmYJgxDZxTraG8A6RSmxUjTrDGaJYnc6dnYyPrp",
  "key24": "3kezHB9AxxC1KmJuk9Z4Mi9pvkUJSuxVkKuvC9BmABFrca1GcrJ5MBoP5Q9aZ127PuEbM2poj3aG3332cYLJxNuy",
  "key25": "5zEPSrZjYzcFDaEXeb6g1W5PT6XmgYH6rb5nqQnfhn83yc5UNNTKHLwb3BJNeZjbbERh66dyWfjAPtbXD6pkTAET",
  "key26": "5ktYcVRV9qbmdpSTePfzFWrDRbfXUCZU7TiNqspvQz3AD9LXARxD6NgHyuxGrNmiHGBZfL5dWzUTsyJYqwkvS1Vz",
  "key27": "2JSHksQS3S6AWhxJm9mNoZjkANV5KCdJVu4XZDqHqD3EpKfxPLi97sLenXaEGCgYahDTJxSMTDBiuHuMLAgYvxQe",
  "key28": "5gy4VnACcEifTmFFACsnN8PFwJhnH8jJRVcAXEcx2iHpKXVuPGpJTwBTFQuvNvtUL1RW4P6Yc18y951PyRhuwbFg",
  "key29": "5crh4Xw2szsQBaq11gBjU7DwBmmMF2MXyiT7ZcrHmnVk9dYtsrY4LStSVsKyWJD1Tz9GiUkukoWHcY1C7326agbC",
  "key30": "3vnxTBdA1bQ7yV4P2KhznWW8iMAmTB9JtbUSpiKmwN4UhEvaQk7ZeBas5ihA1Vzkk5mdLyVu9FYoUBcRdi5SMjJU",
  "key31": "2bzrt6RpoA2txYBN6CLauD293wiAksrv5su12LgEKUkfcAuwyLMBaw8HjMsccex7f7zjgMBti5LfXsEuZ6cKGgyw",
  "key32": "5az3esP73FrpJ9HHjo4DSpgtpAvkCnuLU4Qy5ut7oAwE2QfcMRqgridoPkMSHombhmwhwnAfNJstH2ZhaG2fH2h2",
  "key33": "q7bENapVLYf56JSKbs8tLN3LoE3Amz6cfVjufZv1aqnmXJCzSsmnjBVMRDSXB25Frt5hLCGEQHoXZF2TAmyYjHP",
  "key34": "4MNYB2SvTeibDKQ2F1AHz5GXruKjyK7PhuKNhmyEzeV9hAPyyEHsVe5Ka7mvJDaNyWGrmtVeVtwZv2jFP6kz5UH8",
  "key35": "sre9MydEaT64kktpkW1cjVDvAAJfKA3nzyhR76iqkw5jieVpYMmUrBaM9AyLw5UByR5P6aANgcQYtoET6fmXAPN",
  "key36": "5G7DeYmb4TePv1DhM7TMmwFsip9kBUT8J8veyqs241jQBqRqfN9rXKnLuk8ohr24Aig1nAA5gjg9RXL8ocEwhQK5",
  "key37": "3khAv1Vpifqn85KD1Ce35hwnLv8nRWMbL4a3G9f3Lrs62wMKzWwDhnN7PfS5RpJ8jdWkdpGCUjLbR5UH6UzKnRdX",
  "key38": "5NNot7wi96Gvqw3UrX3MJ6mtNwbFSpCg9vr59VbEaFWk7reBrRt1ens6boqnPjUCeoam6RmckgQmUv9QWRiYhugy",
  "key39": "c95zG3gUAobA4BhBSLppSqA7EDSpQnfKJeiQF3PHFdmycjrhxk8REYCnWZLgc8ncKdU1hevS13Fo35UfgwxVHUN",
  "key40": "56eivJgAGLSHQtNZMCQtCB2jT9YoV6qa7Knfu2ndYR1zvkaZ2L4Gz5aKBkF7fVCPT4KiZTW8A6nLGuQVF6Jeyt2J",
  "key41": "3ARFybt1HTXgAfVfQVSBVYvn51BeRxWY6sw7DbTAnhfuUtmnxyaStB7MCN6QTrVQmue5D5fFWngqsZTmofzzP4ZN",
  "key42": "5sP6L1akzDHihgAvbvsovyWaCBYfGcPacsRSkjVvDqgANXDtVNsBu66iVWnEo8jvpYjD1hEjwnydYKBifrhj775U",
  "key43": "5n89kVpkeBRAox3CMvuMFCVMWmNfEJ4augYLCUzwNgyRDrrrwVy2i1G4Eid935EvBD6h7Xit1xPRC7tKidVH5FPk"
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
