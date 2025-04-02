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
    "3jvnFej1csZkmq7RxojqsAsUNhNdDt8FYBSYjY6P5JsQfdWkwHhnuXhK8NyP6n9v9ksz3yZfHZESXdQ38cH2c3EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVwTpASX9RtuSkxLeQzHZq7mFtcVWmwow1FaebcH1FrT5Apab3YjKgy2F9qZXBH6HUCWxjExzU6RepZEymdbC3p",
  "key1": "5noKb46cCgbtMPtKjSzoizcUY4kkqfZ4r8mtJ3jFeZnbtnCRhVS8etzvEqdcm9Nr5CoNdWeyFjDReMDswocU3Qdo",
  "key2": "43miwLHemycGTJB7m3xGnD3mxJP39N63LZgHHWDWtnbPuPr8QwbdesDdd3yVRjnZdeY7iiVzZxueBJzyMG292T6F",
  "key3": "4wPtZX8VrwWP99NxrvnByvrDdxvw1m3jsNguZQ6PQwCQ1HhtZVXAMUBXKcJ3emNm9utzsStkUCHNUz7wp5UH8Eoo",
  "key4": "3vCvPKtKZ2ieAFg8Sw1GKhhweib2rbrprFQjahnVunpTEPeiHFWHwcK1tJKrWwnK8VpLhYJfQVDaNPWfrdUQBT31",
  "key5": "37d6hGiEaS3FnBCeCvdkCRXq8SKXYhxc9UQiGycW8yikt8FSFaH3gyzQSsFeWajeNhrxSqYPgZtxWBZuW43DYpbf",
  "key6": "2Hfb9SDKE4PKQ8NmcLPrPNsLviTcBxUaAquAigEhWYvvLaPqiz1nh3Amc9qd5hs7obuCCbxexZSy4apRep8AbuSY",
  "key7": "3cnBs3NahXJY72SVzZdxTVF2Y6MbFufbY4yZzY459oK39LDn2tbrg7JeR8gQkU3dUhst6AM4RtB5ZHttXU1esb24",
  "key8": "2UfiXGcLW13cLGVVNf6sjtKfaTkazDQcwEwKoVG2oFZ1Gq9tzh3oa5MLArmtsrQfVHLM47cReSTj38ig4MjngH62",
  "key9": "4BQjzzFfbHax2xsmMyY2PVyTsyM5YiD15VKBtfFN2JDT3U7Jf37RGUxbW4GgWUhGGcMswtW4Mx9fBZ1q2mfubGHd",
  "key10": "55xkcK1trApyDyUfiEJmq8tDKS62r5gHmDZ7qLA85jKGNyx5R5MSHBVyQH85Cb4KRJEobdDveUFUqMGQ6KN6NDLV",
  "key11": "53pc2T1YTT2bGZxp1tmtiBSXbCHRta5JWdxGnz3KjJACM9spSC2spt9ovaWrUz968jzgZJvbSSjHBFYWA4MFBWR2",
  "key12": "3ZRWovobW3E8aMy44e1aviMH15KF2vdkuikRqBbxuc5tk9FQAP9wQ7tShpQSRn3vYCLjvQzrHdbQKNgUZbmTEsCh",
  "key13": "67ooc9knzyY9KNctS3FjcHYo84838rbLphnGRTwPCCh9RzktaMi5i36DCbm8EaVaezRpEZgZAnKWzbJvX5edWyin",
  "key14": "5ioipsrSd1KdbEhLpxE9RFsidtAu1TLVb4F4urTPqFmVSpx8w57coxwub14rCkPX3uMQWT1AZGm2Dr5rM9qiX2eA",
  "key15": "3YyFk5Mf5rUqquM6By3WRcSFTMrLVYqDkJUxkdLoWWsZzvVQyJXivHKHcAdAw441RrH33BXPyPBr9iUjXd9ZpKvk",
  "key16": "WBpLx8mmHE3TpGKP64K5mE9Qim6NetJ6jJ1j2xz9knfNuPju6H5BdGhJgHYoLzZUsMRSQawfjoeFncuA3kibUTY",
  "key17": "27TytpZkV4XGy6GyTADUKwMtY5gwhiEy5MUXYciHSYYTG4QjrEG6BJrvGvmM9KkZ9UCX95pqJrysJX2zN66zMKGF",
  "key18": "5v2UfTwFsnF4tHrk8dw9qjBR3ZWaKc617m4f6wSS8bCKcXJk1iZxcrCTpRtYXVvfS89HxxcsGQ76NU1QPauyPrU3",
  "key19": "3sj6fyJ4PeQpSdgHM5k6BE9mCsZJVveSC9QUswQXRY6T3LXTN1N7xDZuU9bYpYDuL2BVon1QtpXiwRx1iz88RCnf",
  "key20": "5KC56oen7FYgsRgB9BzQdxVnpXT1iUwtu7fuDwW8UNkhTbvCpQRFViBeK8GPxwEMgmsMQZsgKCe1UZdE7GPebtQ2",
  "key21": "25yob1ow4Mj3HCsVQkxVGhDgi8vYQWztoQ7EyjFon4yZsY7VfiwQ6DXAgDahHuuzKTe3fPfSLyMg1r5yxA7wyAS9",
  "key22": "2tCecySpSsqcDHhMxNvZqKZHCWfzUTAXaPzgCgb4s4emk3daWARVCVscSkz8UtnzSUtzPYwUbUTG2iZPz2hfFJjq",
  "key23": "3ngxsodVzq5RGt54H6wZXiu9kdeeZcR5b7TfzfVZgopcJapSi2estnwwoh5ZYAumjFdHcxsgLmUvdZ6gYrqeydFj",
  "key24": "LZK57RrZwtTZ7dUknHvthNJsWoMCC97PUptEUcvF4MMJkJgQEfE8NyQ2qvTMGdYG5JsF1vrKJPRLe45CDRj1fgo",
  "key25": "twhNN2BjQGmssV16kmyx5rPt6YptqVDwYh9VbcAijq4szoHxAwKeqvBj2NFUFnYjaYpoMnYzY5jbkUPf5Aox3vo",
  "key26": "3tDVWrPmsADFcDULcyTrn4Zx3cNGBdTYRpargzme99ebCeAmUzqj4nmqpFQ9pPcC2UkZ5F8igZSLNmGbyYqMBDSD",
  "key27": "vud1GLyZWwK1Ygo73qRJnhjUMkYdvSF3PupTJx7pX8miJZXGx7AyUP9o2WAZAvPdqJ3jT7UyWk5KjYz6yR3vAEL",
  "key28": "5yjmmwPjPw4qReTeDHmCuWRhacquWKiJSSSPfF7XLxD7NhhLFVHMzX5rubkdtqrQgewWDGbtEXRfhvFf4JEk8QH3",
  "key29": "SeWTr9C51o3MdvbyAz5Mv6sZgTSmt9E7ynQz2gEVswTDQ4M3LUhX2hx6M1g6KdiL7sbwzu35pjcyouSdX8pcQxz",
  "key30": "5iCLF1TWVp6yfSmPeysgrxTGvpfStvXuWM7Q1VN4KCWk9ZUfktsYHeShvUNzWNSEaHn7z6PRaaC1MUPQnmFWYayW",
  "key31": "4mDHH3QCj8pKjiuzpSBAjifwi1C4pPgEdsoDSUYeeYfuD8wCWhLpNABDg2jZY7BLpjcsjdVY9brXxLL2VFc1pKms",
  "key32": "T5Kbv2ubMHJLCoekETtLsY36vMU32tNXvG2Rywx1TrqPPU9tF87NYERBJEuKkmncngXR12ri8r67KeSUECyRN12",
  "key33": "5xxMpiKCn9GLbxKzS7y7LvbBcqWhysgdjJ1Y2oJLxX9NUG2SJWs2nERohaspkcFLvgkAuGNJEjGxp6yHTs6hrN8e",
  "key34": "4UQQeUjbtX4EWLMm5wgR8WnNHrmWBF4mkLc6MgbAoGmPcJUyBiogxrMd9xyghWPYEhLRr9vDrtCj12rmospHKMQm",
  "key35": "62c3teWNzQRSgwGL8gBftq4MMuDRrRBpioDfSW5Sz3c9DPCUQmSWJeNtAohsVk6PWf5MRhKAjKzLihsFz8s45n6y",
  "key36": "33H9hftPVQK2svavV6rqQyoWrcG5du7nzE3btPpLcVc6LHWf1uM4EJ3FeP5NpSBY1bdCysJ7zmSUchQkQmvGUJQW",
  "key37": "3LsPrCCu3VnL4Bfk4wS4HQQurAY8LCisbQT2BLsxxXxxYoQMnh2z354Q4F422CFWFZYBr9cfWkWaFXVX1ZzguPvF",
  "key38": "5Axc64yJ9jtEa1KHZT45hKhf1uMWm2fxcTRdqWXi8Ttpr2dk8Pn5VwVfeb63BkPX2Z6evDExSbv11AbtSCzZqczG",
  "key39": "36h6jLG8F8X2nEF1Ndy6fAJGRFbEehfKrNbSWNa1LD8KA3TFrBLbtb6iEekoHdBtTZoZAem5QtvcxzSADPYfyMMh",
  "key40": "2zBGjezPNmKUH9owrdZaLiFxqfuwBm471KXd1ub5a1dGc6RRxkZHViad4eTMxsW7HsmmxEHfiZo2nNXaKFXkE85M",
  "key41": "2KSdtBSi6S9WZEpNeC4YupaaBTSgyspLzrJ8qXaF7MWo1QBGTFfMpCRVUTSPob5KwDPq5fGNgCJZJuEBoGXaxp5L"
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
