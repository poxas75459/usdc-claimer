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
    "3C6MvtzWpSufti6gJqdbMHYd4ww2yVNPhst3xnudwHkmSwYH6bU57FK61psmimExEtDe8NajwhPAHpAfbav3HHud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2rvq9CdGrXaDXCGy1W88dFz1enTGnrmNhKzEC7tFVR9dr7ssBRSb2jXfxqSbTBmTeGtYnThGKDK8jma8JUxnZC",
  "key1": "2VaWGcW8MSA2LtdESVkAbzXB4PR1i513g8i1Fd4hyt9zC35C7CSh7jQp5fmqXdma56HBCmCm9TFDmgPnrsn955r",
  "key2": "3XeTjhZiUYG8hthxkkRa7uuwZxdJTS5t2mozftHTmaKcgqcCBbpMFV3rn6io6t7kyh25jdkvdpEVrfR6EdfoYros",
  "key3": "3qqC872TFuQsF8EgG1sAN2DUygv5D7VatTrw67sTXyDuCJDkmQbCJc2ZckJPuAcdaAPmFFHHyEFRYJL9yDEQuByX",
  "key4": "wbpUnEux7C6PHLSUXe7gUYZn8Cr6pmd5hpVAckCMe7FZX5Z8up8JhqDpAR3DHA71oFBRydoADFRSAXSFpKQh4KS",
  "key5": "3UTQNR1k851KNtcB6rU5tW7ERm52EB2nz39zjcYBzaSm46bWP5AVe2VhrKRKcwrkYcKY1jrtWc2MfrR2BzHPZER8",
  "key6": "1aPtNnPwdt8goHaq7ETkDqxWfxTL7rPwyMQeBZgYM96g7KeXvu26UdvbG6Mhsd6EWQN4FoDmrYuUqJ3q4TbV2gp",
  "key7": "4KwjQYAvCwKpniXWm2XVrugx6sUiyeGjKdawmzuYN81RRrKzdpWVzq2uwHW3xi4nvsv9tBU3Dg327DmsW6JZ3HTU",
  "key8": "4GDi8AQWqMZMjapF4JS6jaS8pFcYGoeY9W2jWxHbpdjEzKvpZ5D6S43d632iSgFn4P2SLsmEE38p3zKc5JP98BaF",
  "key9": "2pTa3oVmCEsv2H3DcG3TjKGeYxKK3bACKxdzhBAzrRXkNcnA1K2T5VUga1Aj2uS8jtXrK3SqZPiWtnwzYhr8kSMR",
  "key10": "2yGyzfri3imWybs6gN89EeAyfnRS5haUKvShTW2TyBT3DH96mq15KCGxux2RoVc6QVqbYvpZHhxPsc1GwVSUEZFN",
  "key11": "4PwLcfTir5gCHs3vLpCiDw8Y3G2EwnnpqqioZeJExf2Ndj5eAyWpiBXNKCP22JNxpPBohTuLPzwNxzWf6mpVK181",
  "key12": "5zZDYzzfRXRw9aU4jKR1rhvRU2q4FunNzePz7nXcEug4tXhWV3RuJynKDWdFyFrXYmAoZE5gvFyHUfnqWhKMZ69A",
  "key13": "59vavuQN2khJ4vXJGrimud8t7zWdkLU6QT3zLJFFD2nyEXeB5gLy4vFhPNx1HvNtk6RfWiF1uPNruxgXzZfHYwNC",
  "key14": "3d5ps3zHND68hTNw9Q68kqGoePsc5ZCR2rYBcqfpkLFEwKZG3gnrWTYdovLN3Wxs9bZkisw3k9As8XnC6Qhya7Q7",
  "key15": "5MSVA54qTtLM1snsz9UeRs34nAVffbtYaeCpMRzyStxJyEmznmw6Fv81GsNQmT9rmz8NfLPT2nwFfTSUMcDiGNjR",
  "key16": "5QG3uoumhUkriX5mg7DSU9gJaaikkXiw6fUHvz5ZufDTm8ydLViiqmHFDGuyiE4xz7XT7fRAhEjQWqzZXv5h8ENb",
  "key17": "pbsqACoZg8fHmFE9gvpapwqQu9amgNpiZfHxLEoAw8BGDJnKvaS7hLXv74JHBAYytWx7Lfpp1xgfrXY1RnCihUf",
  "key18": "cp3FXpMR6xD2d96bWaipDZZcfJLMVCrWKd5ZWDoNcw4MxccrBMKtcxhpKoZiFZrgQ3GNMqjAV85GXKvdKw8hwpF",
  "key19": "LH3jpWuu1o7arCDbNH3nckqBMGRhFv8mMtA4xaSUUtyVDtfcnYJdik8wFwxGMWh1us5GTWdne9jpVZZ4gn563tH",
  "key20": "52ssZKAa5Fa67mjUVUd8dha2iRDPKCEG2P7ifLMH2T2QCTUZvKQiDbM3TMeDuDtKPKDuTvRTDEbfFfJVC4rkEmSQ",
  "key21": "4FmpwbLyS8ss9qZDR6jnge44H88gLTbNV7qiQ99b2RYXetqBtbFA4dc1Myjj4VaMv71nbLbNszFCrw6HMzn1hVwd",
  "key22": "2nhznmKeeyHsnCRuU7no4QTXWEUVsUeQAM2FhKXnXQ8V9kn5hHKgdLmq9DNdm4sDcQJAzFP7VxhESpNQVgLDm6y7",
  "key23": "2rdan1CqzsCwLqqCpUNMUjC8593XjeyqqeNH4FSVdoQ1GL3TTa6YDjYmTpWob2AJpDKadFf7cWCqmn2GH1xyWJAw",
  "key24": "243AhAVu8cJVY79qugufeL2rXo2PjDKTgqckKyXgTNVbZrCpfPa1HV6ftREMdwHgSiYBUPXtZhPWi4WsBBFjx2NC",
  "key25": "3DAnsz9yrQ78ArMaeTB9wgJNeArabwNy27FDxXUTjJhNZzACiSg6soqeqtS4KtQFQDFPUv26MPxn96AsAmaNE9NM",
  "key26": "MP9KXLUHRhVLfGZWEfPgH6bqcURteXe3LoVvsRTDTSskP5XMKR3v4wBiNaBdibVGi7Xvm2o1VW21EoHBtheMaKA",
  "key27": "3pCsBm673N1vf1giMXvXBcFBMXfBgbSzBMpiAuoo4r22sLdVmTNwRbb8ppghfNiN8eDhMbWKj61GLPe4UT3AfYHk",
  "key28": "3QnM2q3gNKk4mNfW6ZCL7ngX2nY8LSFpNX1SWZk3Gy37hbt8kz8fuLWZ2zFGAFR1CEoHyE7JbMVxaSeLcAiSLhFF",
  "key29": "67TC511KK35wxeTyjsberngtZNVd2nyH1Yj92xVh9YtM4Av41wiSbNMCHjNe48JKfXCmBW1yadFhcwXP2nh9KGPE",
  "key30": "5LBFW8JT41zKhMNEVdkcidL4G7zsPricx7cdCzZ6VWYy2BfpzcDUad667RuTkGXkwX6a5ubkxTQkszXz97FvKivY",
  "key31": "jRK2QSnpMv3dMXfwtt3GTrPNLKVahbd6SkkZXwVxEwdMp6cmC69PHVXwbSB4aSsmQ8EtH2Mot2hi4cTTr5cSkWc",
  "key32": "34ue16X8rPPQuCH2b84kF8p1MTYKbqaVM13yZ9R3GVzagwn64EkR5UW5FZkXhHvS2xUDacgsz5SaAoKSVfnGdy5R",
  "key33": "4jmqMoLT4aBF9ZjuJJ6eftK51BEnVxCpW9k382F3gK5xojaLwatycy2y5SdvXv1ev7YGPKX16Ts9ovo5gZJ6K45i",
  "key34": "27hduAWF81dNYPLDkcW6PdXPv9Q7tkDbbYt62aF8zpYNibWeEUtmsjqRWt1PFnLE9ZBAYr3WQS6wrS7jknSDCTBw"
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
