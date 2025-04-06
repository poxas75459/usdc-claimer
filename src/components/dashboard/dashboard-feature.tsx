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
    "2zJZPbSDpgB3PyAFSjMFHQWrE5DeL1AAJokA3VWLUJBxrw4ik1m6n3hEcf5Zu32Jg3Ga7vfha3PNz7x3ZsivaPTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fu7UQPLGgbBUuTQh7WevAhCx6Q6cTEwUosq951FFkstLZJiK8CpGxkZs3111H4UyUynH5Fu66fo2b1qFAeCTvTX",
  "key1": "4eHRyfDDERrdu9wFqfuvRPDZh7TGq19ebKkA7iPsBhMi6GyJMfoijHqV8EL3n795wCsHtPZ8g1FYjmJFgoTaXi4V",
  "key2": "5DBCvG2AHUkpRunXJtmvjDVEND9UxsJdwr3bL7YzFyEFnN99dcnqeDaY5x1HFWnp5yD6JhwuNgE8njh5T9Xdgdpj",
  "key3": "2mHsQuijcs94sjPa1MUzxRnvbpnVW5HANpUCXkR3iPcHr19ddSGueVihr6UZayXJDAi7mJqV4wroA2wPawphFx2A",
  "key4": "2QPEWvmBsatDmzZucgr9h7Qcm626MMW9YUwKv9jwsRPKZszFDvi26eMN94KK7FgurbQmy2ppRsjsptnsTuSLuSqA",
  "key5": "5VtxmhmFrNzk5DtDq5sP3SyzxUQfrZwma8UzPf8i81eiAkUbS3UkYfS421dcA6fLS3SkJRUg3CGBEQHeQTEcLR4o",
  "key6": "aVnxAoYFsPtzgBjPnetrtaWNSrQQjjmeEVHuJJUxQpvgAeZJEzgSefCjg63xRRkMxWzBMRtS3JkQkTrtSq9BJhF",
  "key7": "2CQ1BasSDQcGq1Bz8Zf1fSHS63NYtP8YPD1vaGGfmzeh84RgkoyaQQKb7ErDTGgZU6PttJ9aNopxBCqYkoGmsxu",
  "key8": "4aYSty4uGWcde2x1V7fgzQRZ5s8hXb9rY6SJokngwTaEaGbbem6Kc6hdGrSjQuQEg8kJyG22Kp1nFn7Kf6nD7jaH",
  "key9": "2oDc74NTp6WH5BWHyhjVon4XRTxQP6EEnibuDn72U2gE17Quk6sVpgs9RiZYAP1V6Kt8b85kiRzUtkNW3VKdf355",
  "key10": "2JKuVddePa2raNytLfR3usZpuBGfoifocxZh7Dnf4YMM8tUHdp19ecvERmNEyMSS6aszHvudgxduHQC3hwchPCbH",
  "key11": "5t4cWR4KYDxmbh8GkRoMPLkhhxeV23fGr6UKnPcyUBQxUmaYuqi2dmLK2SEnXwzamWKh41VZ84qwDPsPCjHGSpC3",
  "key12": "2meNtwgyBHPtrbbYbKLmf57Ah7tm5JMMgD5udMGBBVhetWWwZJpFnpTvWT7nW6zH6UeNHtSFiaWfJGuwLGbGRGf3",
  "key13": "2ASesSTpwzhDA22pDjZ1Loic6jyTiw7EvsBZ1N2Xay1SGAbFK94EQsyfyo2Q8ZaYrhHZFqrkxP5rFp3qBqpe6Kth",
  "key14": "U1nMu9Rmg4yYAvp7irPJMUcSTAs25SuJQR3Tcjkr3QyPo4QbbuGPASEj51rqnTZC7qdG9dvpSeszN1VyKwWo5dU",
  "key15": "5zpdh7dnZC6in2RHGiVvHtjnAWjtfSGskjPpKVmjboLVHVxgmXNYmEZBNGpYr79FTHj7FMvapVWJ17CHDSCJM5FN",
  "key16": "327bEGyczjNLSz8S5M8KKwCxqnNoeG1B3HDnP8QV1tBtmmGvKipQizmPwSREicMWoBH7jn6WWUbK4svKwJVrUZ9T",
  "key17": "3dmogG1mefhvJE9mx3Q4zgj6JZJ8gZbCpcVzqbHoUE55GX1RqZEymoLiFZHJZeGwFyMP778btorPRrSggaCD6rxc",
  "key18": "282tCgBg1piWndG4FUouJouMqKEjh5FfC7QJFoJPypUE4BGDVWEsUmAvwFbLYudLk9dvTtWekCZyi5Y84GWinx4J",
  "key19": "5uzmsphfjWNUUxmxc7Cpoi52U8DGx8PZXko7iR9q1YDuShb142Af42hkoXQuZuQMYW6Jm1LGQjqcaFrfH1f3NibT",
  "key20": "66L5wtLaSktWPHn4Rg6s3fhnFWzMcqDL5vmmquuUyML7ZtU4R12NtmQ1ApjTi4wJ3tz8p9fjxpANMiJmYRSDtAf1",
  "key21": "2tSRHAY3ph3VyopPUEkNe34D3THqrsTJ5rmKK6ciKo1Gie2ExZMXvdbDyhm6AU2P76e9uxmUTovJaXWAABsMdkCc",
  "key22": "5HtEphUKaJJxFg9SiKqaknYWZGaavWLiKXdaWMAjapZe26E9QMvi9whEfg7qT6axaaDF7MLiqjcbruSAe9V5jKza",
  "key23": "hyvchriRpaUNjXWvVTPLbWnz6Fv4vRiHFqtQSYRdma3RBwFQ2ARdmzJ4kecC1NSyjdmgMqvggyz9LnkrxEAH62a",
  "key24": "4DLQCg4iWxj7WGpU3hWNC2RzASrH2GNDUjqcYpxPy8nAe475nwUTXqoVbw3Hgz2DGAVYxUP2ojyWZ4Sd8mJZnaYs",
  "key25": "4XxKN3ev4GrfF6KK8w32T2MWJqTKAgzFTzbFnnYiumCcQLp6g3wi3wYzEHTjfqspHMvVz4PqG7y4tZaUa5mMNedj",
  "key26": "2vHpitJ4jQ8evTfEk4DYSbhgGBxFQbCPHhcdxwtt52dx8mT3CX8hkvpRWWqyaCQ3CgFZSA3UEGNe82jLifTBV1dS",
  "key27": "3mRHPC16kZB75WA4w3g9WuGgtSPRveQ6xFKgwQ4eXMqUXTF1MTrvjUSzrpxAvpPBPy87pCtmSjmoF13iQJ3hco7b",
  "key28": "21oCQZd7CcvZ6MqWf9K2wZ6E18WJq3onQb1ZoNdYxhMLR6X8KvyuWi4Rfsw3iCzByysR28T9nLZZVctpErU6BZy5",
  "key29": "5NhFVMJY7tvsAQUn6QAZo6ogUyjE15nvWieSz39TRAL4XAuHqUphihzkpAhGkCLXxMk3NP49qvL8nKAEpSgQicX2",
  "key30": "66PYSDSph3tXXJu7srEomzxmyXACAatcNaM5EM83bLWZ3cRGTtSUvwmYGL92xw3wfjEniwmq2LXW3DEQha8oMLnW",
  "key31": "2DxhEQTarvEu6nxbzGYf4iL1qfMmGVrFbfNtduv9KAwq3UBdVQDaHSRYFMopuHJBg7nkfYNmLoU6o9bePPdph1KD",
  "key32": "3BJGTqnJXJJs8CJS6y4DyFzqiVdB745xcP9dVRsXHXUBnwKXMp7dF7rKYaQEE6gPm2Ey5uPa7cvVzvicMSsp3wEK",
  "key33": "HHVNMUGdDXZ1Zrnrjzy8jNmKCMvvcLFopxjiryxMgDCDiYg6yezxaXNbh8YNFFc8LSsdYthWXcCYoTuJu1HCSZe",
  "key34": "4KbtgRm2QJXJyDu64Hq5potgf5Rrq1gcqAarhhtkqCdSxsCmVTL4hCro2mCfeFMRXD4931SoWBs5ShiSJhswwxvJ",
  "key35": "4kT2NBghfuoF9bPmLSTy8X5BqjtRwLXPSbVZ1dv4ZwAg9dGV3jjMd25tyfpEibfWe98Xe9iXWrbk8Ccrg18g3nf5",
  "key36": "fzgBNv2oT8u9Ge1SURTVUg8MJBCuXXCpD52ZQCo1bepz9WZp5GXZ4o5NaXKoJKhLYkf6SFSm8o9fGKYzPQdePut",
  "key37": "53CLF4QdDFWaziDztYqUiTehexedrr7YmpNLjpNasETyoKKmQp3VqVLCM4y4NpWQSbHqiVqs9iu8tT32LUFf96ii",
  "key38": "HkySPswfsh85CoeQqzx8ev1SaKHdVKKu4D95SamHqaR4LQnvYPUmmRVD4w9m6UDkVtxnftCDogYiYrQ5zo3QqP9",
  "key39": "3kuTCcNFXRt6Sf3dYMVtZv1ffEPhPebYq6e1iDX3DSMbbbpw4P4cx8kwrRkkmYgrW89qyS8JETf428rrBjbWTqAs",
  "key40": "4GCW5bWXzJQFaUYbXUo7N4fgQ4hUSLhV7YvsBuB1euJ6VJRdSrfdqjtccBjBfkvgVhJXCrBTkk2a2yekYnH6GEUm",
  "key41": "WtNnENF3dGmrVUsJ2bzPgoRwZuDD7mRJcAUtVPyN8Fsb2mohoUocCo5mSdVyH2YEPn2E8skcZ5RNVq82RFtKzDq",
  "key42": "31bRwYWtoraZeQsW8991CMadQNENXAtwm1nsEzmCmYwANPK24Zu9PGa2gXbMjAatmHRa3kYjUQQvknvH3N42eT4G",
  "key43": "3yRzdBESn3hjGPmn2Dn3RbTvbYMyW7UgbjZpp6B2WZvsJBhUtTrX11p5ZCfDoXJdB19RaaKujXGd5J6aryRSKu7Q",
  "key44": "3trXgfVkBHt1agEzrrckfbi97UtGjZtupyhHfMb8nJk2TNZ1kupQ1LJbhK6CfhbFv6dd2GNTDJRBp1arg5wjemrU",
  "key45": "3gKxU8fi9icbrS7XM8KmHKkvtNyBQeYMBgh6mMi11MpTGCmpNKhLrGaNQuT7W8RcnxuebWzkvJaENaqBgW2F18W6"
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
