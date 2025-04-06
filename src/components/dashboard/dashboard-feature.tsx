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
    "2AGM6BpqLqtzywpTxWDiaVkGkae1f54PTGKn8zykpYaHCw15QHV5fkb1zC8zGbybqEmAdNDVx1symsNmq2ebjKEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMP2ashN98YKRhtqJUd1SZXJoCQuncUuwuMc57ZcqtYeGqrLom15P7nHsasENF73zz6KcGM7pfbofaa6FsNpGZq",
  "key1": "2exZBFs46zJ6NsbXUxtomHWDsZZT5ZCGrbKWoMcnCfFJdfFPivV6phqW7ET1PJWrMnrLGHaAkcguYi2o2aJ3ynPn",
  "key2": "4hC7pFiz35tVAeAo5JmguC8h1rhkotUT3AR9c7rgbosKKCUqJFqrAruU4uBh6TUb5Yu1EdGhK8m2ycfT4ZReVVDd",
  "key3": "2VLd9bi9NXT2kcLH1H1DGoHBHxecRtoENyHxJaG5VijAu9GeHaRgFYBGkdd4qU1De1ULKaCRrGZz5wfXisqzci4x",
  "key4": "NVJMGRLcvP6qv92Y7nhSK7ouN3THW4GRNqYPZsNPRz5PEaaRB3Xd8PTSiYzkKC6EBkVNp41kxgNox6nPwBdkTaX",
  "key5": "4srTy6NL2MsfKGWXWzMBoajtcgZs2Ksmuh1ZJy9r8jT7HtJ7Xmo63XepzCSfpvdkqipfUUrLc2G7jHeyny4JBP6a",
  "key6": "258EqawBJG3qRCiwjef99MCQ7FPeBQ3qRPxNyVgva2rpRJv854P8cKXxYKWGoVba5cGYypx2vDmimaj71g8SpB5D",
  "key7": "3iLXk6xjtcCXW1f8DuSv554kurG1e1vSBnMmJDq3NWrXutUE3fLpzAo48JNw5rj8SRz7zDsLYrH1AQkLX4bc9UMJ",
  "key8": "8vcBrV4sfKGRqpMAacYP8rwwF8oSp4VfVabFuGUX8vmPTp12SLWTEuGDuGfTTukYnCGmBhfuVXjnsFPvyq84oWu",
  "key9": "53NBzr4M7Wst5kFyJPWN4UyfMvzXQW5PnVcV5xJjt7BkvXuGVDjAcMRVzAuv3isgEciPK5CErWordLStKQ2CW61G",
  "key10": "2wfH54ueq4fS7LxXVaFryNGz9qEfD46h9LSz8MqFhQPKGWZNLbPcfpZdM4KPRYxJzudxwGCMqEX5zmm1pN4fb2Mm",
  "key11": "3mp2UFwcxzhgjko5CejAZhg1pCmEJQRJhX3htvQMBkvv3c7PDasLSSCTSPbnk1yr6ct9xqLfKErXgvy8wEfGtkXN",
  "key12": "2ECiZi8XJQ78epxSsaQ7CHfwDBNVwHboBBWgbDMnYDWmRaT9PcmMpGxq8StwynaB5TrYXH18PFC3Dxe6VnJKSncx",
  "key13": "3mCaQQuCm3V5vBv8r6QYsxZ9A8p8rBTo16wWQJZPL5HdGChat2st2rYfRyn14n9j9CbC4SbcNh5qBAxnDeLDVaxg",
  "key14": "2bwmXmUKcAzb2CaJL5MYAyuMcMkxZVEwPETjd6a3vPoUR71AbAENA2JQUei46VGdGV2ziwDupZjH9B6XykjWun2w",
  "key15": "5kRFVzTBJDhXKn5u5WGM3f12njQJFERzBXN62TGzLyXX1WCvXkPda8Q8Bhfb9TBeF81k9UUpbZwrqjp8JB9h3prD",
  "key16": "4qnr7KibV5JcjihKQyNDp7gqkJKSPdireAK3Etyw9yXVT3MZfadBiwbopZqicBxeqhA6u1ZYV9u2UPhYVsXYx1LE",
  "key17": "CQogFzd1e9pM3TMchAoWhhRLaqw1FoAgZF797dmUsEsmBVuUpSsfhamNwHNuuPvnbPmC9kayNppHJCUgtiWDc9q",
  "key18": "8cSiFoEypSh8zvpUBJoqX6h5VDzxd98JnHtz6T5pyR8Q7Di7mHmSKBUNaVYr7TcmoJNxTGWjXuTf73qGe9vZkP5",
  "key19": "3QevicE4Q5nUiPzRD4RGLwXJik8q3chy9k3owV8GxZHFv9jvV5MfpKb7gAgtvw4PHXt2P4atek1juu8qeukMdiL5",
  "key20": "3wmGcT9ALXq7ALnYi2AMZaEHykDdNYa5upZrdz5PYW1RhffxekL2erxadJcm34eshPvy18cVL5MZJqwhQGhv1kbH",
  "key21": "2xBzKj6Y762nQLEVeR3Cn8NPLXWC5CZtZtCxoDXRe9cDS1R2iYkBfJgFKijsD2eh5nkAmyCLkTC9NgxPR3m2Lyxm",
  "key22": "36BjtBskWXD2kftcx2bGSDrPm5195ZoKVurHEJwNnmGiod1T6LarykizuGJa2hhm94eDJzkKYscYFCvqXCupaLE4",
  "key23": "qQb5bXp52JqC2gTzM2RMA1TX4y4bV5wkdxso1MWUJckcJAtChdA2bdRwE7ajG6KpfCwaJqEzkNGawr6rSukRtdM",
  "key24": "jjhvw8gsQBbXEnddxYrGRCrcotMgJKAhxMvCUf1NWTMUYV1XJ3Cbeb2DfEJ7rJp965JXGDqACFkmQdkgpHtPT4p",
  "key25": "5Rb3m8onJU4sPV4uvvcBCSAo9xgZvzUCbT76BmuhjUvj6HhAVtL1nRGUxX36UU41yxhP2syoVtmkVo5YtmSddr92",
  "key26": "4HU4Je7nuooFyqMfMNjzvDPAkse5pEeLHuYH1vkLBqKXmcnYp1BKWp1XE95eyqp6cGLcdaW8bctU8bfRDm8WitkW",
  "key27": "4XBBxEABmUrhjF4nyFdVbdLevvqXqYSuByfUriwscAcVRjjHgbp2oDxwTtg4L8wKpaPTVfGU8NG63N2UUBxCAU4P",
  "key28": "649Ji7XVK67AD9bkW5VdahKbbcErCFzDvftEuVW2KcwUzNdLAyCJeQM4y4ZgDddfseBzKcELDJ71WczjbN14viqT",
  "key29": "3ppoADc8jXfAyTyPsF5gPzjwCnZA367o97H8xghk3QzJETmvbQv4e59CKTCwUKtSuLUvLTqhGK2WkiPvkgf9rpHH",
  "key30": "6tVw7u3ALT2qZcdyhdhUnryb48pzFeSriCCX84Ni58WGA9ESHzwMgYKSEbeSH8jTLPVP4XM32JEQ4mvFQiP5srL",
  "key31": "5NYHorLJZnYCuFBo2RNqZ9awy8AymHzCUhSAjX1G1UCdDxeBanni8eNgdMVLtdtpZXmEd6NMnRVFUNUS786CUJEo",
  "key32": "255LMmUdQwnXPUMSTEenbyUM6uXvzGxaGJPwbcZmxVU8Au1zRqSkzfbDZWvZag9SPF6trfExN5aaE5hWaVtKFSeM",
  "key33": "2Y8KYabHWG33cyKaAqv1afyibDGxTY21jKVfErzS7PJbqsThvis2rQ5gbaBiM8Y9ndeL1gJZoRMG4s9qSZDFpywb",
  "key34": "24D89AuPi47NEsrWJQZAXzLoBEfsghiz8TbxLTX8Hey4CGyJxbUUaGcGZAAfD1ag2fewsZX45Ps5YoxF3evLUppB",
  "key35": "4Yc6DGMERJcTQPaLtuhz4uCai75krej2KQ5CBhMQm8uJ8ykPAZY65SyYGQV9rP5a1sb6NAYiLjQJF6TGtTqpGUhq"
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
