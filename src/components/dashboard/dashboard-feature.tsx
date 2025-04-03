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
    "3KRvU6cJ2sx8UvktDgH35L5GHnyUKpVoNqSAhNoEDG7HvbW8u1Q3YKHUTPJkt15qFjRHFRLJSPZtNjxsNeajz5Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEmEx7nGGRWeLomPXAUvi2vCCortEhRWbz1DUiegbfuyPHZJ2zC3iZgy6qjemtvzgK3oJYtnWsaxp1gR9UzvDz8",
  "key1": "5xJ5pkviLjkrL7YyEzrYk5D11fon7ciLFzhgvxTBoqBcXnDSw6KWhPpB1pYVMyZecLNCDNY9jQgNhM8u73Q3tTp9",
  "key2": "5qnL7hvY2x2pBySj9v1r4XeDRJjvsTEMd5aHBvcoVYjp1Yq8XWngS4b5PpgocSQ2iGwC9LTFmpGn8L44nYiqgF2B",
  "key3": "fb31nwoHUSfRvMLmhcoSirFyetXD4udyAsdXrWhN7SEKTNwc7w8iT53RDTau1r7R25yfjPdF69WYCk16makBPAF",
  "key4": "4FDWY2dgWw3oAMKjjytbKw34aSxTcaYPeJsBwcUc6MY4SAcyEMSmgCLwsVNZL7kTDstSTEMSGM1eQop8jPZB6crN",
  "key5": "4164oyU6bXcg6ULqGquZ1kotSE61yw8QTV14VXXPwYNggSpjEs3K2gBQiRSnCfuuJM4ABhgWGd77Xw4G8repfc8d",
  "key6": "ppg3xx7iWmuBhgbVhMDch1LSWUmvZ5faNEJqc5feWibLgpSwyvBGZXhrhLEwR5Lv1qZ1Peq4JsDBd6no7MDS9cT",
  "key7": "5ZSLEdqotwv8RuvQJFSxkE3yyGhhSRMnSfgSiCCougNNMyQR11VwNjG5UXuvTvgEXGLP8jwe4VXTpjS5vic2XQNX",
  "key8": "y1aSRRX17mom9eGXa4xcfQX7iPwZLA2oWhjK5cFKSsHsnc75ctzfUf7gqUEmqcoiSUiyHazPuDqzDSgJLxN5QsZ",
  "key9": "5okFQJx8Lkf7krGKh8N9uND7joiSbVXFAkLMuNybRiqYERkhEHuna9QhaJKXfpFkQd5ye9TpF3FvqCWGUvKPVYXC",
  "key10": "bEpFZ7QKs2JgRirD4prPnZzejAiHnMC5mQbPGFGX4ar54xzMT1BsSAS7P6eMyVvuXL6d4jKhq2vJ4o1QGi36veq",
  "key11": "2t6YBBvNtGoewGWeZ6PLNd1nN4orQKWetZ3VkHAkHJi1LZ99Sny8rJvUJCadKWDHbDFNPsixN2ZtTPi2CP4paJJC",
  "key12": "5w4tJXQpzCzFLY1g1U8xzj5WjpK4oc5uWR9ADh3Ti6rediaqiA6MrHyyAYzhnmCryJskPSziUBqvfev4Knq9JyZW",
  "key13": "37Beva6ir55b6BfZrppn7kjTvctWb3bYyoCYFxhr3EaohdV3QreT1UsQF9yq4Qq8FiKi1ciboj6zps5Jy9RRaEPT",
  "key14": "4cvJLeErRSLxwnPoaRDztYhh2VuLmnazXCbm3Q1ApWdjuiboVG6W6SuRVbhKs54w5tUqtx9R4nmj9N1vbZFMfVkt",
  "key15": "4gpdEKBfQyEQuTBtLGQCUNnNpevEUpptaseXoHupwD7YWgypd8s2yBC9PstZa6KoEutjXt1rkMecazVZxn8ZqUUC",
  "key16": "2cg6BJBtcyQCNR2QJUQkN2xP9XAuoACrfX6EBMM36BUP96fgHpneNj5iP1akmScH8ZFC9RWsjn8FUjL4UDZECnxV",
  "key17": "2o7kxNntUdWJbQFdmRnncUoaDr6Mwp7UntfX6oE8vCpixCdB86wMRLgUTqf4W9p4WTki6j3acYF8fqSafpEJ8xM5",
  "key18": "4vpez19NhaDdnpmysu9qoPZR91w8rq8rCYesZJGYecQS1DUj8CzgYg7EAC1TzUkHi8HRfepdF5RLt4V45zfYajFt",
  "key19": "3QBSSZzwn3a28sW5Z2s5G127hxA7ZcukY6paFHvAgyADUvnSdwunAcviM92sbtVnqW1bXaWrJMrqihqdiuXFTZNL",
  "key20": "4sNjncsn5fL7xRYnWfgkthiC3HTaPEP6gdRFnxT1b6rG3rj8QcqTCBG2Pr7z9diZYvukcYQtyEVgkgbkSNaQ5N7D",
  "key21": "5xbUFyPpJGdyjrZkz7bQwFJrsHrYsBANETTrfPnFwmr6gD3GZYYz981gXGsocHLvNifwVZjjZbwrsSSGpSr1q5kr",
  "key22": "4tzexXbMk3Rjqo43ifJ1qxAdjwmQpKwMM4nADPYvqQcC4G9m4nyHKMo36VFYJiz8MDKZWiCYpMnowpQ4CxzF4zpG",
  "key23": "KNwH8tgNcTa8qKR1iv5BDv5ooRTssDBpaHZxUzL7ibiDRwFbXRn394SbkzGQacPNCZD3BFEhfVDjEZX8YCj91Ap",
  "key24": "3KzWYihYqRwXEW5sbxwpveCYaMRDYYcHGzDqwDQnsrBdhY5KHBXrjE8e3GsxJHbAdrahfdSeMce7xLx6oazFjHSw",
  "key25": "6WMUvDcie1hHhwGfjiRkhCp9EsxZPSBqbusAhXz6gFHk2u9E7RoKoh24Db4sAWQY88wDEzU6UrJiKNG94eaWwmY",
  "key26": "2XFvZWqgeAYTY75DdvskreTXq14HFDxxTCwYa2vj8WnUzB4KSiz55HUQrZfcM5eztxPMiuXGYtFqbw5wZGv8VWH3",
  "key27": "3BbifnJsQqxEAwaCA8ezHsd8FUNWzMkjDATa2okNSgXf2SaVwmRiMwuUc1Kyh89Tt2dxT339gUZQZpHJMFVJbL7i",
  "key28": "4oQU8eLdbQMMjJSNCwmy52H4kDvEHTo94CCEcEi8vytGGohG1bCWzewNz6JdG1aqD9NKqtvA3NEzRRwi6WibWjkY",
  "key29": "46fFyFL7cQvbGTgSKHtAp4UGBD1tDUWu7c5CU4bz3SeCpTvXYNZjJKoFd9LtsSJhpJVgWTAxkNDAUkYuGQr8c7NE",
  "key30": "53abVsNUhQLzMQwS4mUL7VTGuxd7JeKJVRPT1zDQweWTSvsn2byCSKkHye6pB8Lq2kZFgPgMESHZW56LgXXDwXGt",
  "key31": "4JEEGzxTpg8GZ1Zw5bnYVBjfUQKqzHXxxysK7CM9EcHpXARznWiYHNAnemPMxZMG7VcGouL5pdLRbmraHTNuJTZk",
  "key32": "21rRcP9ZM7nqAuzSNJxLyMUKduBC8CyWav2Xc2DtEN9mSrAxkXobcNo9Bx3WT332K9LBqN5j6Z5T54bsjjCrpzxR",
  "key33": "5TCSeDZbc8iEcbmMeozWVL4ZWH2EvWF6BM6mGfoKLDApwkLGqLx7pTHQghZerBeQNsmuairN8DyVDgnMPq6ZwkoL",
  "key34": "2ZX8TK5PmBHBq6b1rz2vPhxPyK46MgKEctVqTDTFgz9owTwuRMzJG8vSrMgZkXBGpz9XWbGp6CfxReTcctesjfXo",
  "key35": "2PctgDvLmzg2E6xzKUHHRRtLTF9ttm4TCpQPKHafixM5FePV1rHtVdmsTpDofszKYCzqTnXx72HyD88KCVUUix5r",
  "key36": "2RDxphKBaJgH39rjGuvxRVazB5gc17FZLSXrXS6TVZgX3rsU1yk3nCN2811bfUaLAz8zhU9Uj7d4Eg36aHAyWZQG",
  "key37": "4t5UAFKeSRkdok6EU2rUG4PVJGPSugnkBrV5nJCiB1JoPDT9cPi2zLZhRyTQievgNuk7d79J7qRQoHc4fpR4EGxD"
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
