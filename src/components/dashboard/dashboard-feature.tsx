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
    "2Tu3vgUVhDo9wajkKfjjrFy787q2RNKfHr2kh3r2Ua5NbiagARKs79nAf51kQiNFg2bR96NbJxSSXwdXCSaaGU6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VR184uBkaVEt1vHM5vxuyGDFLq4LZkahXMFf55U9X5Rkkqx3ehm8oNsWyiBPwFQEMH1M9Tc87UxuqcSkWXLuXHj",
  "key1": "4Wwnv6LCXtCEZ1rPJNP1HRfTde7JFw22QQJBAMRtc3fRuKTaZpCWHwdw1Ck5dovRhPb7dr1FLsa1gZRSBPMqfMBC",
  "key2": "2mwySXoBP42FkndHBRBM4S53ZRWMYmVXsJaxdR5DhBBFbr9Gx3qqzC5JotZE8UdrzgExoLp9FaLDfvKnx3Mj25AQ",
  "key3": "2iR4vqDUS2kobPLdyNnTYoG5RPBCHSmoEznL8ptqw1nhobz9Cp3UtzbUfNqTD9rHf8ZBvsVCX9Qw1kntQBmk13Gq",
  "key4": "29Kd64kcfeqhvADbee1iyJ5CYufbu4GMewAYwZQtNZwvwvusE9DuyJ3iMxN9v5XZNB6nU3kkDACxEwpwfuPqLXGm",
  "key5": "5otm7344Em7LhwNvX1TyCWwPhEvePKSF2vgTuusgjvdmzvfaQhkhrF2HJSvBDJxbQXscgnaCH5DTEziCUz24wA7r",
  "key6": "5oHXM4sAZwjdJ2NSnSc2BfK4kUARP4eSXLj9xNWS9qjN3Xupahb2AiR6FeZ6Zzq8NscMsYiM1LXVWLXk1AqU3zqg",
  "key7": "3i6pdWDFsMAFGqqK67CcPF4LjxGCAUPkU5498X4d6nMyNadpSXXcM5BuRmff4di9XV6CnCjhYqPxHAkanBdZHket",
  "key8": "3PGnaVUkP454vgRHYivQ2iZFCVLtzMzs6FU3UdyrqqKGrgmQHWfjrTsYZT36tc2y4ysGsnR57zCv6DQLc1gPALuA",
  "key9": "MDj89UKGwuYyP1mMpuGTuQavDTYHcZmCrqHdWcaKgHT65f1cXzorX3z6UmaKUaBk4EC6YUSqdX78nJwshkqT5ZR",
  "key10": "3BZmeAWGBQ9bk47RKQAskEaeRReYYTQZGzSYatuKskxubo2CmZJihoBCQGnn1d8GaKwP96jqp81w5YW5Cs1eNzmq",
  "key11": "2rajQT1MXSPCrj7mjUM6ECuidL9QzCcGXDtGAdQUwGqCi1hXxbPsvushio5yB5sDupDKMGvFN6VCUUTfNyUwNpMx",
  "key12": "621xjkD3esix3V5gr7Qgzqwg1J3kWg5DNPeRthCFuUeBkZ9yGgjCVsV5RqsKJ9KsoFH3ZcTBctxpQDeWmf8dbM71",
  "key13": "5FTH8jNv1P25L9W1Bo5QZnDm3riyLiQfb7DEFkztmYBhK6JGKLN4UVDVfo5N7TiJREHR3XYt3Y3T3LzwwmhZ449n",
  "key14": "5qKcbJfyruYbz1zShEpCdtXj8eT3sig5J6EmymyfWAVEy7wPbjpKqExV2t9TfBWFp2YXVS9qCBmCEy2BPUDJ1UFf",
  "key15": "3ghzWDJ46snKYi2woY7XvrkqP7m1cjTfsM4UzvX6aBzP4CA7ycQXzNNxGbjoCXcaNjoQTgnCYqxC7c2AmXcZKXnV",
  "key16": "25QixThaCX4dVpZ55VvLmQCJptm37xZVwJWd63XxnNd34C5twybpnYRac9PbFknp2zCHmNe4GopsXdR3cw9yWfTK",
  "key17": "3K79ThwCzqfgeeza4Q9DvBmXKeatBtdtHjHUC7hQcVy3szeBC59gzQ6SBXVRXxdECYaQEAgPHevYaW2zmcM655LU",
  "key18": "5EWzKezxpoEm4jvD6MXa8VD1iMyg6cWaT2VZC1xNdK8zb8w7p7zQowmonw7tzUk7d2pRh4S4LxXEnYmGPgKd9vjZ",
  "key19": "mA8pmLd4mXbKejQqsFcZN3fcqxgMM2USpXu9Cgt9wj9VULfQr67ty3e5BHshupJ65Xun9UKCeqvkrpV4FW7oHh1",
  "key20": "28oS6psTCNij1RxMtXAuJqK1BL9WdBFX63SkE4Js1Y3kN3FwPceVzCUZ6DY44V1N1t3C4bnfrniy4Y5xJYRad1kh",
  "key21": "5LkJKHtU7rrj83M4GZ9vYhVZW3bzx5dsJ58M2QqWhqVYTMXreBJdJHBVQB2GDBQfi9JEi3VE3WChXPGbT1dk7J67",
  "key22": "3DLFfxid6q5zgc7SNBVvqbn9VWEjPjTndZQCTxkddPWjQdBJF9ApfpApXgn41fuvkxBmDDZf5Dy4T5QMGDbsE5Fe",
  "key23": "3KTZ7z6iV6YZbhVMvBwrTnSHHvWnpieza3p2Xs4Su4jfUXRZ34YRjnskjnuofycWU2ey2Rsnuyjx8Rhqk43pQ3SU",
  "key24": "5dm7kakAahZ9Q89UKWwGdqfD1zpN3YmyFRenKVUmfEPfRMH1RwdyE5KX2jbJcXNu6potgxp4x1End3bEXZXmtYoq",
  "key25": "5opSWpPsXUeEcrJQ4wVGCHwYh82zF9J1vv15pbLASdf5oH6Q6KsNRwdW1Pb7wsAn6X5Zi4tgFEa4azjwemK2U6Ed",
  "key26": "2Jk9QbPGx79ZH8Zx9ZeRXeGN24vLZiwryqjhx7tgj8o4KTNoAXLgHwGa4pfJYJRo2D9USBwpKQNi6gFe9vkXswUG",
  "key27": "32uABQRdLYASatquPDpGbM9gsfiRfYY1PE8saMnZkYJsx8uR2WFM4xC8BdFvHS4ikLUqYq8J9w5fRwqoeDNTcb7y",
  "key28": "4X4YSrJJQFvipYoZZPvAMVkhg7HMTJ8o2eTxBdeNMkcxA9aWnHrUTUpaHft8x7N1rCiwhSER1dpwVb4hngexzrhD"
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
