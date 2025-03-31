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
    "5yEK3sr1ePoafd4Vmwcpff5pEEweasz4SQEimQVB86eSwCp83czp6Rb2fUJTYUafn3arieASa1rG6GV9Sx5The9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNZsbfnhmHZr4DGZ5GDTRbDcYzJkvZ6dLNumubCrZmsh4w8tEmV4AQ5kf4sabDUDHVaHV1rKLrsyRAcHAxUeXyv",
  "key1": "3givJDAoLosp2tFZm6rkJQBFBR2QTMPszoMJbPDSa6SvCcWafMyyxobJZPAVc1GYe84uuBoCkE4sAihPg6hFXiL8",
  "key2": "5tMZ8H1K6efYMECAkXn89FESJ9U6NnEpNTWvkxVXxq6NweshRd29KKFUVD1RueZMDFy4ctdztq9EeS1h13CA3Zzi",
  "key3": "GTQGEZbunJcC4ZgCtQCY5GidcuZWPucameMrwTLYjtgx45UZLm9Ui9XKVLJK7CMXvR87haMhSuHuA5smYd7fCR1",
  "key4": "46KMHMcz2kEUVW9GQeaUCqpoJLxtZQSoFv4DeHvXZUyzn9gyNGTAV4ZRcbU38DjneeWenXYQrHcEhCKa76Ng6CD9",
  "key5": "4Nj51viptgdyobYynVPCrDTDBwWKEkSLkSvrNr98vwuSmGQXEMHqvBeDYRc72TmCv6JQXmgog3LDWvcwwxdsGL6r",
  "key6": "3KyRQguaHst1wkjEVJHfZDeapyN8rNNuMQD3zFcb1h1ndjX2fTs11W1LPz1G3SZMSXkBxT3MiZosNoxpND4dWmoe",
  "key7": "3ZuQmLHcMq4P9Wg7zc73VD92CfTZkoSJNQ5tABH4fcMNAaHMF8TvJU18jvBNog3Cqi353tSPjGwjPq2G3rLHX31K",
  "key8": "659duru87XZB4M9h5Sd6m5CKCCGp3n4H9hEYkwsdkRAG7JGQQedKjM97YuhZVX2uoekpmafzha5JBeUsYEgAafDZ",
  "key9": "4ZR32puyMWu6TWaRrtRUh7kUzDrFkismtRQ7zDYTR5tAUp13TWssGkC6CJX7yMab9bDCv2mFTV9zpwvTTEgYvECP",
  "key10": "4s8CkpQTX53zro1Soek8mfHtYi1Ty87ugCHzwxmMmWdMdYYFjw3zqDEYPd11pL3jhn285zkSbx7x5kM2jiwtXEwx",
  "key11": "3DRYzC28jBpwC1odcoHhXTm1X6etWpyxNWyA91gySbFHgeeuC7mLVEmqLZAmwmE38ovCDGXa5AQh3kzKfFgcrTTT",
  "key12": "4JMD8riu5bgibFBNJTnvKaq2VvbKs4rJtVWN3LUeteAmtaVvsec9vBcvfgNxMVMmWbgTRRfmr6uHCSc83CGATFnM",
  "key13": "Hz5kNv6U5yQi99hSKMnhvbQ2xw7RSdKPMkGBUbcapGzfNmrfVyiYYi1ohpYF424ukLAcEb7mQWHgmGYtL4ePpbh",
  "key14": "2GhgGb5ToS5MtaRY5LQNqrbQ8eU7CZRfmnjUFMUprUimwNfTXfaWuSVqGUshS7tkt2b1hzPTSAko9RhYu9mAsz25",
  "key15": "4nLpSRhYPLBbRHb1mxBbEdpaAS5u9yvfgY7fkK6CQqhwR2bz7QqxRbR5htVdQ2V1yigmGYEVf1ZKRuuum66zH7bL",
  "key16": "3AkshgaUY4wp7NzZ8shMdvFSwCwuSGbsywBqWk7EXBAjbSqKEsSZWoeTEoKrFA5JVneHaZR7egGwCbbh1Z198TkM",
  "key17": "5xdtjpaZX8wZd5ec8srPRZ2ukYnPTsUdKSXJoX2BUzczZ6gTEfAZpxo5DBqKg5BwEDTGMhoxMS8bTBHFHy2HwbHd",
  "key18": "3wTcQcgr9S4zBLptr6TMgQ4h2bopkYTiKiU9fdKfkzSdx8JKyMgzbjt9YhcPHnu8kcYWV1X8jpU6civX1SpPDzrz",
  "key19": "5MnSWp2mCveTAU5Z9h3BR8Cfc1KzTvp8QKRSHHN6kDAH4zq17oUAuiesnD8qAGUNZWvXjXcF3peghT5ht3QSC5Yh",
  "key20": "4wWm5Dj7W99c8A2LUihWPGB7Vx44R29NUoeyG8MJ3KnQuQFwwemgBwNgh8hKvsrJdNM7DkZ6FuKsqDeTxJP1oMZK",
  "key21": "3mKCmDHWkpCF2uLSVXjSTGGpUknmr9ESGXFAv6fBCmVKdh1PetQBnFRjZoixwPXNZDq6ckTQRuQpsisng56yMXoB",
  "key22": "2m2TMYXjtojgq6ahPqeadBbvLvR1Anb9FyMb6fkQCkE8AVD9LPA1SpdwVwoAPn3x4QVQtgXyyZSetfBCFgQbSzTx",
  "key23": "5Y916V1UmRium3kQQm6Fw8zVbJpyHggsMRwNjtd6cGWDLEVsMvjRmoj1SJVpKAxB2K4tJy5hgEoGfTXyeYXvfTyd",
  "key24": "639PsRDWg82dM7Xv72NT2FRGz6NZyfBWnc9KbJBwsHy9KgrgpYEdRhcGXxQRhuNTExzeEyKBadtgupmSZXV9yVda",
  "key25": "55JJw4Mc7sTzEP2sBTEFysJ6UxK12wEx49DrVukqJ9Xh5xQ8fXxYRGxtC82vA1WhmdZUb6L6K9pra4ARJNobFDz5",
  "key26": "5dehrEkRRKyvNz7oQYvzBPTXRhp2kYsMXuWjY9fJjQuoa4ECVWxrHCJy93X8jBJtt5e973eiEA8QEPo38a93tMyN",
  "key27": "19zYd3oRyqJUoSZTpVkndYtehpkHspaVPc74pse7MJ9ujNWuMx3EYDMz7JTXUysdVYjoCSJKbhjENepwJahE7p9",
  "key28": "Ukoapug713EWVVYFuuu5WsMBurKpoVaFhn69iYPuGz4gdM9bha1LNtxqBp8EHhUCBrspftN2HrZWB5d7cRHTECy",
  "key29": "226jS8yjHUom74kwks6sUpwwMhpUuJFrjHzqR4ng1fNa6uWv9JpcbfiiqGtxp5QKxECfKjdmg9vK3iHLcprrqsNi",
  "key30": "5BEyJyejwWucinz1UA7BUcdU3yY3a2NDh77wSQQBHzcdKECP2XMt3W4VUZGZxxjoEJcysv3XJSofVz6HAo3As441",
  "key31": "bScLCC3Xyuj3zSV2x2zaBqMqUiHdv5cK1LCiZ5ZoBw4meZ3vFaUq7kPHX7Rojq3ueFcXAtfnasBrhgGi8ojCRTr",
  "key32": "4V7HVSMQqZv2TBrEmbD9SUtW6BzLZuuHq88TB4VXvzsYi7vCFADowWWAFSRwo4HHZtbWZ1UkqfuTnhvmYwzqzzcx",
  "key33": "4kNsmuXACyYfJ73i3kt4EqpB8Lr5mtQb4kSavoVerXrtqMbMns6TsEJcsmLGKp1uzauo6KxGhc7r3kjUA7E5ZVKZ"
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
