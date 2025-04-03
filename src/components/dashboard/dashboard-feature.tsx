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
    "erexJmkut1XX7ngT5PLFnVipHG4csyb6w5NLGyrGM4xPvvEaX9KP8g9WdHKFyHgfqUUzPSzKddD1T7uzNxuDiq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "473BQoiGQjKNFouXqW59WMEy6hpej5mDca1hPn2auZZzA5v2g6QQ8n4HeVSKsvgPM7p8vN8fTnpQNVnAnyebNSEq",
  "key1": "36LkbwRsaMUTBsPFBVMnGoLuzzgGrrWfaQcjkfZBxufG3dWJCp61RVrMckn1dK9TRw8HtJsxnvpquVK5im8qU9Q2",
  "key2": "59xkrKavUPXaioKWn5QGyNnWwT5jsbRXFoH2Mm5FxfMz6MyLthtjsh1hyCMqMsHBnv2oyUbera9cCrFnZxHhXmVU",
  "key3": "2QN6Vsb3T56gFn2csQwwxqokfHsFLy4UjhyJWXmRcFzBRuR2svdc1ogMYkUYmThRwePGC5ncv7rGgq8DPc6bcGPs",
  "key4": "3RZ7f1SucpDRTXpjqpELiFxX5yDihJiCTS5oGnvTQHhmw4PnE4V62kMqsFctmGLu6Wp9wEDdPbse2o58hbgPzDZ9",
  "key5": "5xXsmQr4omjAMJkhesuB3jGEACc5tT1ninWp7gCTkkygby9foPmgKBWJRySyRoAj2EkUQYVNyi9zz562gikR4nf2",
  "key6": "3BBUBRkWVJzDywPfGHFTUBZDqhYL49DdWfuvr6qS55RNhFKoQZurjAhEBZj8rerV1SYoMTqNiGCn7fDAefj7psmH",
  "key7": "35UhaELduQndLxof5gDksDB93EVeHqTsJ2QPiaLhdoQPEVnjxe1bGqTJzuGeUCHi361iGoVoWA1FSm2YcKEHBa87",
  "key8": "2Ftny6wsqtVtiGAswVAQRxWRo3Ee5NN6pnfH93MPUNLAYPT2z1iafvTpaNbPgig45cGCjoSzWDyPsyu6NQM6onG5",
  "key9": "2EfGfypnZxEoAFzTnABEsmtcbtsQ2C2pL5SQmXqi4aMdHUuEitSVfv9a4XwyPKLwokBSweH88jd98eRqQ6XsFEK3",
  "key10": "675jwiCYd8nmkKyrpUasr8EQeiMBP6nq3TJV3JYmwdSHKRNXfQbeBXZ5fzzg2F4RLWBFAcWQmsdrRrzHVm2YbPwQ",
  "key11": "3pP7WT1LXKeaeXmmt42JfovCkUyYWPvhhbrbGW3QPuNQgFR2h8is4TzBHwHfZjv1LvobwyZgad96HtC7URiRpWDc",
  "key12": "2mPZz6fq3Hc6MP9JQsWb1uM8Hp28eeJ4L9qUBELoeBGpzSCCYUaZ2yBKko1Rq2NghpiVcycgQohRqupqiWkq9zVJ",
  "key13": "3G44JSXWE57KAoc8rNyzedEEtb6Y6kSoMySSeP19BzwaB4xwCqV3mifDm5yLetzhAp2KEs7ammXdEHgBpd3GvCfd",
  "key14": "Lc8RUbXEePKeaZ4gzsc7HCyTrb7Z5hczLKcmEr6hJqcD3axFfKJuJpEXofzwwNKFsb5fCv9imftuPPbN76qXPkW",
  "key15": "5ESDJsibSAtn47nNbVz297gXNthb98j7Dj9F3hKGceYLhQ3GETA5yhrfFyk6sgdGo3dqLhAFWUVxUsc5E3MhiaT7",
  "key16": "5GAMxLbcJxSw3MnNJ513GzcJZTeTcHt7GnEznmik2yF8TnFV3dqdhC7C8x2zUx4shkxTxAn8y6HYi8DDqUoU7duR",
  "key17": "4nsDGddjpqnDerdTxkanPW3iQTFH4wGbhas1ZGewkk8KX2CxR8g6GkspuMfnm1tUy4tC2ttDix2WcUYWAPDhXfHm",
  "key18": "24hm63QVz32CEZk6KVxarGPJ8pBZviFpw22E3p1PyVAu7DumMGwdrGNzvxCb436NH5EoVUWts6MSkJGXV4UjHC2D",
  "key19": "4uUZwkACDGqJXf3kv1b7FhVfK2HshEn4rbHMPbo7LoxJC7ShxYiAduNhEFXNrwyLWFc6emgXTBQkFiuQCUBz5e4b",
  "key20": "4fBT18BTtGHCquShKt79DfJTHFG7E2TWyUS9YgzsRvgwACerxLjUXQvarkhXzgAPgt9ceuRkMcGWVTen4Q2prE9c",
  "key21": "2LdrKXHQVR1Pub7EYcsvtFLETxtMMFxVbjZ46AdKTmxg7i7TdS95Cscb84U7P19rWbM7gG8QbMNV1FtBsFFPSHvn",
  "key22": "4Vy2TirxNsGut1DdNmxubdJgXRUXj1tbrjq9STxdJaW4p7pWAvTsbw7L3NSaEoHiEUDcBvfdXBaxPAA1ZQpx4bCi",
  "key23": "5Q9Y8ESqkbf6h6NfEhf5fgnyouR8eWKfhwxrzr4nUCQ8i8GsRMHxBinS5gP2RW8eDQEacaoVNiHcugkaArtzMHFX",
  "key24": "5eSHrpWQLziwhb3p3sMNmLK44o5iy2hTNdiv5V6rdmo9besQ79eEMjmVC55NQBGEoUTtE7sRfTA2GQ5b9sErqgPx",
  "key25": "54gNT4ahvkfdB2JLbkUy5wSFngdXMqSdiDU8PsG62eW4zWMZq66oLsZHk7vmfzzTiBTCpx8NVqJLLCraTjfyUEsY",
  "key26": "5VfukQJLoSgms7ozeYKsABnHbxBHWYf9zXw3J4Cc4cR3mBuzppfwH7TSjuzxhrEknz9dNcHGU4KFHsMiERtT25mm",
  "key27": "5meyfUck6cahHQ6mZyuHWukX9VRyUGJi98YmotPxuGxrfcJWiSqLgidjxvCLxLd7XTwcyCLZnqdVzq1qB4vjbCjd",
  "key28": "5uN7Cvu6CucLn4zZJ9b6mtheCrgTC9zFJJxm31DNtS1SpBcsTWRrrNDbTPAKAVGDti1JFTfSHHBAuAtrGyknYVhv",
  "key29": "2oBdQxDZS9RAW3wooVVH77wRm8QSzB2yzwewSzgTTgfLbWxdNwffgf8pJ8AxLHscLzvozQVvrrZTgtSj93Vznr5o",
  "key30": "4D62vg2DLU9JND38Rzr43p1G4Wb5xqxpd9rSr1HXNFJvJszSfwP6WyXAHV1VgdGbJc9p81QcynGWBHYgt92syHA9",
  "key31": "3uKcaFpnyQrSfZCjdUSL7WTNFt3EiCB4u351hyp2TVsAsGeTiX3Q6QLiRbBUNyXVdzvremnTRGt7xmZCzUU7yLdT",
  "key32": "2sygDobQJawU5KSJceVVTzKSyurvCwTzeocL2nWrh22JmzFJvXDJHwzs4hpTSeZbfyoMSCe5Wm3KtNr7vUQMkzqD",
  "key33": "4cgEGXgGbJE1Evn5zxzeQSgCzCT1G9zUcySJf7CYuHqncnaefUqBgzXCkHkWjbHh9GYYfSxkwbLFNP1mCH5z26yq"
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
