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
    "2CjwHDKvKamGy28kdzvJugaFdKy2gwdxZ6hPmTMUr2NBtJfr8KeSYyCkPxAb7bev76uFu99jbZtus8RWPWjKwdvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKsjRdFzibRdg1134qHLjJXhjRzYBWDVXd2CuNL5MVKiEjUBEdherzUHwAKwfXxh3ED1FyV4DXoru3jcq8ce4nU",
  "key1": "3mv9cZb4mt21MdZm1bA1HfMdbEyo3ErhruM7m6aqeYcCLv3xdmobPnTtKFvaKnwdpsdm6ZgbSh5eWiy5ABi1Bj3g",
  "key2": "7DQXe1AtaRaXeU6zU3y7NraXSWcP7wnQxCXGuWLoSgRX9F7w6ixqtk6ce1F8fLKDLAMP9vadHs8DGj25ZM95kD2",
  "key3": "4pqDdHa5QPR6wP7aBVsgAfRg6DqywePPbGjwLbbiSn6r5cHbTwdSDGvyyd5qECKKPeYBj8zz7KKpeTLFx7JM77SC",
  "key4": "B7FFoz2HCihNckkgAgkYueP3YH8Beq2esqRzBHRviqYRs9TU33UpYo5BrmGxKBVRTsziGBadqiqG76dtnivmoSy",
  "key5": "12A5dVwPHfeRh9zM7M9MyDp3kh8nj4VgC6BphVdGENZbUCsEexob6SgemMG5RM5C7vi4vnUR6A9iEUsBRjn8KSQ5",
  "key6": "3borpwya3WhocJNPMRaK99AASYv69adoL1jPdyhVkoihy5uX348Gj5Bk8B16jqtfGSwbZEQnu1v4KU2ihea2AnQ2",
  "key7": "3ztaREppymQAc4XW1kmTDhod2g3XZJLiSEiU673GspPEDJQ7GxhXudVoadrE6CvYFq7CYRTZBctcordZ1A53Zetn",
  "key8": "3EEC5imtHAVDGQi8epC8J1uceaDLimp2CzQU7qiKr8bqdomwtbRfeZTTQkqhBKSs7fKmCUXwN9WaKqBmmcAUi1Cp",
  "key9": "5UgxjPtvswZvJzn23HNhAzqhDn8BzZkz4hgd35xLQtimkRmM6PcnHHJcTQEAuZnqF8RuMJ1bSt4okPkckc4296L8",
  "key10": "2mCrT2F6nohRvumtzPX67ou5GVupgQWQRyTZ5WiSQtfzoewbxm4cdeUdjvJHCGviREuogCMoKYN8eDrXw5L92Qsv",
  "key11": "5EN2Vp2dMti9hzt5gNrEpR3LveyZuagkYDgkvZxV428fsZMxEXByhthJrV3JMX5hKZQEkoSNjUpMs1bNUashfoc1",
  "key12": "kufkiM5AXKYBUXnA8LZ8rX9ymozgL7FQp9q6LyPNPMmJdfv5voRsKkakRyqr25G8Y8pN5pz5dk5XvgcPUEgxEmM",
  "key13": "2fdo44zLpb7dgTuDVFAPmH3yt6hTUjbBN4QrZ88RuukeBb7EMCZijtqaL5R9BY57qeiAaqDZXDBoyyF1kdqPtyD2",
  "key14": "31E1DyQ6PC4LHRe6TBLLXF5jduqUN4tySnBTnkMJEjDdehbrVt2zWUNwH3j2LQ9WneHqKFd7RwcRe8Gfzbne9zTN",
  "key15": "2CWf4k5Up1nwRnpPk5XrXxj6SNbQg4742qyU6i4P2soBQd2aoyj9E7rewNm7NhQP2q2GMXVU7QK9fLsZPRceTxbe",
  "key16": "4NRR3oNakBHYKUSm2UrCzpgKWcUqxPq9bMTff3XRLxqVAeHVirLg2wNMDEgpRHUZgu8VhmyahRGJDsxMYvBng7zX",
  "key17": "5EmdhD17Z6Tx6JUWroxe5vDXfVgbY6VzfWyNxqa29HVdkSxq3jAKoMoc9bTQE3BL497EiZ3ZQEkXPT28Fg1uxgvW",
  "key18": "22DfFyuLqtFoDnnAD5uEGWhyj6Wshuep8D4jV1bNZ1sjioXBTdfobdLDFZKNCKrPgazpynRpySXeTddcK7KtSfPU",
  "key19": "3YqBDEox8LActTGXYyy2suFX2ug428XZrBmfrwB75kn2FnNt3A1qMnzMobXa3PzA1VxogJs85AiRGQXyCDe9mNhG",
  "key20": "25UC3UFo9fQrrYkm9sAszwgd2N57VQZLUhU6j1caCU4efB3oCrM9ivp9bQ9X8nmGo6ARkrrg92kpM46soA3o7ECh",
  "key21": "3R9mB9aYA93NwTKibmZcBWzE2MdRXmbFoCYrrbHMTVSm4KrccJTYmuUkNtweBGZ8iDowtAtB4yBj7yWYhSV9ctz",
  "key22": "44wfLd2m4fHCmkpCEeGPVmuqAC6iVfbTCWWQ2QmfzF93iAysYqedwe8dyh1JYmDUdtcmnSyLn2Nypy5q7dDgXWVw",
  "key23": "5KLUR5wUQDcW7LL6d4gdyD2sRa9mMKuV7kcQoEJkAUVVZAbuH3EsDTapwxGJczARLxTog7zqeZz8rMyx64qHYDQg",
  "key24": "tQHmyFnUiCCZfEeiVCuzc4yjMZZJD81D6sdNx9T6ZjopW1wsnvSypZnXJbSGpCMZ2Ky5AZC1h7QECNMrDCGSZW4",
  "key25": "5wpQoGTPoSbg6ma5nxvA6xnTpcgUViy3wCiPoKfr6Fhe3UTarsiJGGstJRVPVW7wHnMkESj8dEiZRe9LZSjHSs42",
  "key26": "4RVW4gd68c56au4n46TXNHmSXYtG7xduXB2D9H7mN7fU532JGUFWaXYg9zTbmqnJEvYmNCBQVpXBpj6YkNCktSuw",
  "key27": "3DsmVgqhM7cJKtDbgT1BRbvY5uQMHRDmMWgbeWCARgeecYRycwpPioFmjUPQBR13mCwgEM2ktvhSPzQ15En96U5d",
  "key28": "4UX2F6dKcd4pJYjanTxq5MzSDFVR4c6sHjMBeFu55UDZhC2iDqGSN8KkXoYmwdfeUwoiKS4PrLoqt2NGzDf3QpaA",
  "key29": "36MkPXZmAHx7f6gQ5uPYf4fbdQG25m5sfqYHYZ2tG8cnjABVi2r9mX3UYJcq68T1FtrJPRj5Deu8ZBpqpeBi3Ubf",
  "key30": "3qpZVJKSv7taa1aVpJjMwV526ja7JdoHsYnXJx3hDGTt3H1ytFStga9ap9jyMJKxe83i7G3t3TGgqCfSCeYWAqWu"
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
