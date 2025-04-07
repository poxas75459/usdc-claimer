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
    "4mb4hi6kCXPvdpmL8GGAFzLXt45g2o6fye4LaWLkpu8m68Anu3s66k8q5TRNPBc22W8LY78DTpq55T33ZbyjwZ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jnNdkofg4vnunw79DyvKpkAnmwDRrKZmdB18YcToj8cxeL8qhGq9hvroZYDSj4Hyqy7ytHEeuG8gdYqw8eSk8t7",
  "key1": "2LGNyZNoMT7UmPWVQEVLKT6w27sS3Mq6x7s6PMJKBvWWgqerKZeCfCH9YAcn7eTWBurG9vX5wwAUddTfFaLygFBP",
  "key2": "4sbJ4xmdZ8XVmA2vYpotXcZPTAPgBMSt4KU3TZMwxNwdw3Ey9a5hp54nTuRf82ED4DMK6LSCDxARZTcC6MG1mEAa",
  "key3": "3Zq47jr7vGtDvieA7TbyCs96YQziz8KSxyB6GD5yUvPzfmtN52YAtBcpeMfDJv1S5mJsQDwQwLpiaHuPSd3zVsN3",
  "key4": "63S4QhtgL1339sRvPHJhu9CQQUojsqS6U4A65kWL56QVYh9Szk3SLvbRtHyVTLTwkENfG84sCp4sJcL7uXfYKP1E",
  "key5": "4v9dTYYBHtEq1qQZR3VBmmfjqskbu1P51LXP681iqL3PUoc9sL433Resi33Kpo4NgX8ckewziJU6uGHsN6arweM7",
  "key6": "39ymwbXQw1cfZHfeoAJBFQd61ZMrLY8YdjRmYbXqCMus8tgkwfmSLixw9y6sguMAKELYeZ1Lukmmwn1kyNmwgKNi",
  "key7": "2rjyBvm2Na6wWvMBLu6hVNkEnxpGQWXbRRnygfEeRvRsdygab3r2Bej7XKJpzdja14W1U3g47CP8jUNWEfL3gUem",
  "key8": "28r1vHZX4LDLjGQECD65gbHvaJETgDt5AP3xdisQxGawJYrijir1V7FrwW25kxvdqV7Ftu6L8Uf8PtWN8Qt25fGF",
  "key9": "5dU9bhwxebndKQQDeqA4tbz5bSF8R55W1xTSts89bc7afYmJaxJJwCZLPkgJCvQrzcUTDDed6DYnugVEnkAXv2wf",
  "key10": "4eCJCYkmsTiLY7Lr1EZKwKUe8nEhe8aE6taeAF4cH4eMzGrWgku4M4HU3FUrknLL2k3xYMzWDVJQsHnDPW1Bp754",
  "key11": "5Wj2tEQ5NWjfHY1RKNr83ttJRYVCow9wC21PucZBYcLnL5odqUzGWr9s5pDLp8nAEX979dRiGD6pECrtGpGwPmiQ",
  "key12": "2xorGXjDWtML8HrsPGhRf5FGqhRVQdB3bnGv8m9kfzH5Ss9pMcXotPSEdQ9saAnRcku3g8tgURh5F4YJ4jYvorts",
  "key13": "224HGt3pcH3Kqpe6TiQXprYR2P1ofhjJGkNzsvS3h8S8LrYq11Ewsbo4Zmdq9tASoipyg7GVmvgASpA1XNEYDbKf",
  "key14": "23uMFzboXiUznCHTLbFvrKp6yrqHqVw5YMwjj3AEyVgGqCLxvaDH1JKb33Uzgg5KECHhDQX2auVdhg5NmKFJubyd",
  "key15": "McxEZueTucK6d4Vx8DPe6S1wtRWLDTTNnsQqYMxWetV1NEnVmPDVQkoHx7VsgQtnBxaQiS9RXCLu5k2hrLuQBFa",
  "key16": "3sXXXB29Uc5ZFD6gWTa46897i6YatQRRP2fZB83dzJ3aHvH6iZU3vqT38heEjTPGBsXLWJn3qY4zoU8FshdjoZuP",
  "key17": "3MD9T6Nog3KRKbBmnQDDiUeYnxxgdEiieyXBaeYAfLtAbm6GwT4WZSqS6i678FEefXPnui27aDzkM8VtL3QHEUHU",
  "key18": "45rwmjsbHh3juVnRrkrftMxCFaiagBGyaHczDhB86txNEyXoj8xSaXoFsfVRoXWwcyGUsQyYVkmTvLKPqQh47G5Z",
  "key19": "3qJYmntwSmSKovwz5oVjQmavttRAvjTqo1vwepPkNbnHfpU3iYKBBL5wkEXch8XWeNkVd6Z2RxBW3W3LRhkaziCs",
  "key20": "5PGBYgkb3YG2vguHqBzvvJatWVZt2GVh3Ha52M12KrDptcJ561M6TMDRpoCTEZ6fwVEAuavDjpLQ3wvL6Sm6zsQq",
  "key21": "2anZZGq6ETSAi8xkXMvMEty34Ae54SuGvdeobgSp6Un2Zd8PdZ55dVVqHqL21W515iLf9nWdoH4qGKYxNXYC87Ca",
  "key22": "5zetjvV7FTeyC2vK4qYJkzrg56g8EmSxQPtU7Lo1pgWHfKVygWJs3STXCbrDgRwh4ZQmpudK1U1Vp8tYANx8UDdD",
  "key23": "4skVzAzdQr97XdEppP3jQpQD8WJnieeRNXf1qsHFP4r83YFrncG2736JEVr6dvndH5uRQzrg1xaECQiRXpLF7Fz1",
  "key24": "2mcdvKtR9QuoiBCRfTN86mX8iPsYWeGeFHCqztNPiDRVqsbCW2gJVAYTQYnSdozepGbwV41nGvHYkyiEdDYhkBbP",
  "key25": "2xo6aAvKnTSRRg8bsW8hmxm2AATwDF1RTqL6CS4m1BAGG74X61rWcWYXZrs6BdNMXDda4B1A3FQ1xWBzyvT53UuZ",
  "key26": "59VpWTiXbw5mX3bgnXdCJbf66ktLCJRykkoU17b2EV7JLZGycGye6eGWcJPTKwKvt2YtV58TSXnaPpRh32NWYRp9",
  "key27": "3LkMpXaqWZeFTQvKpRS1ijS3ycx6PmGBTEH2uHpqnu1ZcxQTUmKfmBfSuTm2axrPxPtgSQGq4srz3zF8bXH2bWku",
  "key28": "3ttxwCXmYw2EyypqCxktRL732PJP3GEy6R13o8pJnAXw3bryAw35gFpTxixot8K4h19UEdYPM5SgNEu8JcGrUnUH",
  "key29": "5AipGCUNSGcJz2RpNdCe2Fz1DPsrUSeXjoJF4LG8dxF1QUU17x4aLJPzVTcv7m8vHvV5JNXQHLv3VHVmn8uganna",
  "key30": "dMJUBxovnzEf7Vo1mryE7HwFxAdM5WNEEUxpb7ARMrmYx33nZWypDEYuNAEzaiwX4Q8xZPB4gyexidbLzpkwrua",
  "key31": "32pyRYn23pwZkHtLrgogW1gJUBm7jADnQU7bycNNntBEtxGtNy4TeMmRMa82FaiUgvx83QJXebhCG7a3rKc9S3hA",
  "key32": "2hFSmUNvzWFSNvSWujKhXG7gQELyiZ8fK2kftpJgbq4jj3USybZmTr1Rbk1odb9mAP41SXQSavgPbaXRmqigU3E4",
  "key33": "5BR3sMHC9HmLGBe9wgGjYRSA6uhioZ953uHPeqMgFQ5Unqhq3HhgJ4trSS6Tdm1WSQtPrHmrqKZYYigjRuSP9qst"
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
