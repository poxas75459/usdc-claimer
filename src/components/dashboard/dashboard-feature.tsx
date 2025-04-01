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
    "3N385ESytRoLXWZYtvNGHE9CXSfqsQegBAgtjAzdrpvV9US1Tcq7hw5YGQMEPE487gFaEE8eBhxDY6LUof3k7RRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQRTrT7YCvQYNyUFPbLQqbf568PPBS8iC6ZSjNVqh23mKsM55MMLSqcHChjdZfYRiUo5Ro24h9qoBRiMq9S1Ly4",
  "key1": "3cNaS4V8eNSQ5yZEcwcier4X2jQj6YWrihgzFtViqDQzTjp51GoWbpFr9fWjmiy5xKp8ZANQKtmyomtvq1BXrASk",
  "key2": "42yCNg1YFphtBphGiAJGuhpp2aHt63Mrg34qgyMvptGpEfF8kMzHN24zcqEGxfXxW4A2MyjAfjx4p3JS45HKdhtq",
  "key3": "3W4bZXyyTPW5bT2rAvytVguazecDsQVT3GLZS6jmZ1uSZa3Rz9H6CsWrS6BFxbiiyRyrHmEzKNorGgKetnbPCnwo",
  "key4": "3p3SDNzD43iV1giJbLFctF75SUNB4cx2o6wHAj46dhut8de7R61ADwxMCWxm2iFh2Gkwqn3fYrqJFFek18oDP4gF",
  "key5": "2gxqXg3nE4yY2bGr76qzVfygyGLwm12DE5Tk8Pv6qArbp8Awf35bEVRu7cM967QQehqLRRQGXbcZfuyk2wXULFeL",
  "key6": "4UprBiUoKmjykUP4xFELgmKFwfEaCAVAMTkGFn5gnVXpHF7Uk7ob3CEvgUCUeAXAH1DMHkzcYUYTAr7cZMoreoR9",
  "key7": "4CbrNNDvgND8kUbmMfKj9fNUZBnRMHgPx2mnsfWrR7tp4o7HxM2LdYqr2eureooJujJgPmZwzJsfWStFFqLdZ4b1",
  "key8": "2dSdypnesA9iQLk6SLcMuoJTfe9W7VdYSHnmF99rGr2Eoi3PM4oSfS4XoXxDYSw5PnQhvmxxNPQSzXv9rBiNepWJ",
  "key9": "2BJAfD44VUQ3H3JSZQN7fpWSAHBknfwofc7VtaP6BDc8JsHxPAouok9Y8mym72X2LQXHXpesiiHp5p2MU5hoUAsU",
  "key10": "2NgoSPRPVTW6pzedvZHBpCQoX7zCjM4mUsD2j9UgihunhMTgcN6Dnob6J5h1nKknAvE7bvL9EHwWNvqpP7TrJFfF",
  "key11": "5wfvCiZ7LkKKbKdcJjkxSwZja6NQKu1dsQWpGAqwfRLMdCcFa1M2kcgFbDdu2wxYAZ4qbQPVajn7vPxbwqEPYNkE",
  "key12": "iFQ1VfamNi9V7c3G3hmmzFvwjto345j5ggStwNKHvLax6UVDSRoVAWjVAhdBGjaWS9Z93ceDpRxMATZrYbCkTEH",
  "key13": "5d3qVR1JmqywhNtxoU8KkU2fpam5aK4vrAY92DjMCiFJXDZuWN2EJZfAyA5YPL6mSZeMTfmdHCNQ53qtHNpYeckv",
  "key14": "4oG8WphzEkTpVDjWn4CgSuty8VqqbF9yvyb6aCpXBpHjPAvSVM41YeEgeNxYZ5KP15fx5mq9jDXGDS1oU6TrKFF8",
  "key15": "4bPpfDDm6Whyv6WG4L6ZoLaWoe5FrFvSz62GpiS8QzCRESD5tfWsJXxvAR2Dasm5n1r14WEJfiYvws1pxzXNyHmt",
  "key16": "4jG2wdLkGXgCP4E9pxTuvKx7xEfnKc579wdfhjjkbwUTX7tLiFKYb1YqdTZu2pJL92QRg6X3aHdN8BNLpi8gRV44",
  "key17": "dQY2JAF1osYczZU3YxgRQ8YPCKWSFwq8AwpsJwVv886oVKdwqwDkhzQErE8dDNZmZjKUosa3mBrcxkVfy8GzRfp",
  "key18": "4bEoam1joFiucWBHuGAeAi7hXwWYZH1HNJYfXGCG3UqgBm36Zz7dLRL1V1GrTtSimTHM2gWKEkJxohBfPp8Uyuhf",
  "key19": "48pzSq4is7bivTe41aMveidU4oVSS5vscgTNhdQm3PS1iyRDd1MweP1GU6zLkVJFv37PmbZQq3kBMRgUc2wdTYxb",
  "key20": "A8t5sno758VDzZNNoj1gekZXjyaqVFhG5qmE95EyYY85C2u9spBzVt9btzdKZiytNdtmRPxSpkkSTE1sJ3ae6a1",
  "key21": "MhWm3F2upXPCjzogYFTu2BGhNThdJsoKiHW49xNB4ZTHwYXfZBgxbfCh4f3A8RdBx24MiaohbpR3S9kXL5gzRVV",
  "key22": "63xvkfiNoSpaSop7G152WuY8s2fUAdWGX5EhCz8foxveqHu9SL7RBSTcwntFDEKgPazik2zyThUZv1VzgMhxPEEX",
  "key23": "5HZPQQCvPCsEaQKvfauR1Y1iD3MPoj1zSWWFzLEFqMpLnVzNKMosGeXXTzNe9HdLi2m5swAqRjMwTc1riPuK5ayV",
  "key24": "2pQGmF8KPGXQAT4DAyH5zbwHRqxnWU4LmKAeaCvctKYxMWkXkyFeeBeBy4qLPMUHiabPYiMq4QKvfdvkM3R6ofWF",
  "key25": "2u4NPLidxEdKPfXv1XS9iKY2MfJj75C6sHbQDfgXEdKHtUaMyfUemkeCd8BkKy1K4PdBHVL5kr3j9WVXxf5g5KCK",
  "key26": "44xwgo6FFxf3FMXzAL7mEyy8RKSyoFZYuS6xuNach42Mv6H2a3ocqi4Ve6azu58QnD5GKJyKQ1gtMGJ2CPr1utdd",
  "key27": "2QDiCtWsSMLhyPuaaiFP1m9qwo3tDDJshUFFVA1LU3jvtjFesaGESXNYrwNupv9um6dsvCu9N9tzZL9dUP6v9VVT",
  "key28": "4abcss9hqN5f85BMZzXFP5jtQTncTWXTge84JRD7LNbYmVACfUdtaJAL9CsG8LE9ebxydDpia8zKttiHdRL5QyRC",
  "key29": "5q4dxr6L7ZgKC7msP5WvQaAtUmap5ibqBMkaMwL1UPcLYavzEbLpG398X5saWdn3UMDX98bU2zTcAzcycE5t9dqJ",
  "key30": "82TBcoVaHLuVcS7ngUZU5GBs8Ror8z6tNpSvBhxeKUdjVAUfnQMHtoWq6Zsna5zAwpLQVibGAAvdbCYkELEjm9c",
  "key31": "2U4uuPbe9sAQFAhmj2yjCxmsekrnAZd85LwRCXUjsTgXCB5ycoX6tNThxRxMkAoTADryTe3TVFKK4WxWHiDRX25J",
  "key32": "5KU1Ad2du5JaXe8HzfTwLpxCBDFM2CcEeZNGReq6hbqQtyBxv7Mj1CpDVRD5RFtX32bdPGZveBY2QNXv8jrMmKdU",
  "key33": "5pwvwNtuiECm4ww8TDj2QPpqWLERLTwg8oM44nXbjePhzwQHpG2o6SBmPA5sX6XsZ7GB4vdTzMKqRWA8e3VFPsQB",
  "key34": "3Nk6nenVtTusqN9StCZJbbnQAMCpwG7aBktaMMPK8jMeYi799Mz9DqQpbNiMFHNEJPP7YWba8E55Dumx2DrVgZ1X",
  "key35": "E2T5VRhnPyzkaMaHQ83idGU5P5s3QTb1h3kDeB1yq1wv5CtpPBdMveuZUaHRHfgHcdiMjVtRH28BtA9hxtz5NZT",
  "key36": "5zc9XGN3bZ1TARJ5vryXJo3kZt2UeRsvusQ28VUoHxFf33kZicStEzvd4H5k85qGDfqzvg37DrcWb3ajxwK174wQ",
  "key37": "4pQ8DvusYyS36LXaYmtrUVS5Rv26a7jyrVsohq84uPK4FQJC6rFMPMx5iyuoMbYraZCB1fZwKThgrnEWcEwfCSXo",
  "key38": "42LCTu7zEte3H3ad6nezgxAz36bUMGiSukwzuonZWW5nS6hogQrQuwikByzSMYXw7S1kt6ner7s48h5cfsCmbeWx"
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
