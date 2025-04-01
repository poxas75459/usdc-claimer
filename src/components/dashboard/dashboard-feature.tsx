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
    "42K1mSrNMZwhfBRyovgnxp5azMpPs8AQfjvsZKT9kc4W9TaZXnvWwLueACUEDRE9p9wUCpBAjd1XGqK2YdtEnxLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwWoA5mp5T6joMH9ifCmp1tyf5MonfJ7UJx9TWTeKSQBc7ofvkm4chsbmbhW47RmQ4rTSUh2Zkztvz1y4WBAyXt",
  "key1": "3s3Kfv4o5ZfAcbs2hu1mh3tRnkptAoSZjg7UXF6d1yyTy5FcgixySU3665pWDrfAQB7bgDTSHVdkr4vLM3jJ7Rod",
  "key2": "D7eKd9G53uTRD7AfgU4RAGweo9swaDaor7PQ2qpCnCSuXcKBmewpt2orSQvCncBhKRWTjWpgfaHRHpzQB8D2KFw",
  "key3": "5kuf6oVg9u5HRZUa772wJpFrdpxrrABLWTLB9A3mSJTMShVoLZQadbE5CojUpv2iGUvVsZUzQJHtoABC82vFwisK",
  "key4": "3Q3BvCjow2ndomdTqiREHVu71mw6Z2rT4DNwewtfZJgRsvB7jgMyPm5cgZq92xker4ZtCywUJ5A92qjnsBEzaTWy",
  "key5": "XV7644d1rtA4gozsKPzKHFz8FPfnPi7DLbFkrksyqNMadoZpqcm8i24nYosToemMEhG64ccCfgZq79M9HbDuSkD",
  "key6": "omrjAZqsypV6MMmEpFCjxk53TcDD9miZVKxSHzH2ZQ5Z8Vr47Nys5QHLN4LujzHUgX1RCAMGVshvg7jhxiDdNgR",
  "key7": "2dVssrFgL7efDW7X9GScimfG8FVVZmqnUCKvjE3CTby99A5VTzE8Jg33sUF5pqNPG4DrqysPbhsaxBPjL49vB4wH",
  "key8": "2n1zhbaEsZWwBu8sLe6JftFjr8Ecfu5hKKzaJ74FXbwejxHDR4A4keMkPix3fPhX4sQ3CN2jRaaEgRQ4oSaFMwpU",
  "key9": "4g7fDRYu3YSLvC6hGXbvVW1k3BPCaE5mPYtiKUh4CphF8Mr1Tx7ZhNxxKxsYbMFAFTbK7aQoMCaeC1QwgbaRF9g8",
  "key10": "zHCYa7Nb6Bawe91zUZ99ur2xejakzMH9PgDTsNkCBeHCCweKEabDq3TeWEHXQxEEx179YNC9t7a6juncWkoUYGY",
  "key11": "2YPEW14ntiUCpBnQ79EVCJY6xLFH8GP6oUwqaCmBHwCBPLtzXXVXePhzTEhSEu9vU9duePkbTY4QpDbyC5JnxYhg",
  "key12": "2BGx24nQqt214TGxKPTDtgXEqErQerdSHFCbhNhR3XY5NNHadPAsW8DyGBe1wEQ8PY12TDGrcjwWFQgh6GiNkGUW",
  "key13": "5crMbcv8G4kDbuCdS4axUNEEGT1SeMdcZJcAbSs9PRUmw5RcbgGeuLTXodiDUVBAp75sfQM2MoRJEBvoPzv3PmNE",
  "key14": "4pGWAWZDzzLQUSoxsmMNukMoEB74tmy5198GuPfk2ebMFgmMcpmnEVfXfbZJpLSSJd2JAHsNcoV4tDYXvNF3vxJM",
  "key15": "2G1ZjJh8zKQawPTbwGo6mtNBXSNiMUt5bsGKZJbbweJcvDpV4kR9rHqD3p6SUPfv8vE4Bd6B2zJnF5QhndF5yRV1",
  "key16": "5dsabRTMWnNmBmigcJWtKySGbYNAc5yHEDsA9K9oE9MQYbqRG5CFVxtFVmDdLezXA6McnytYWVJrPFezgqg4tShc",
  "key17": "2AvDjd8PSZEbkyxQrtXLS5fgBkdh7f9ycGKiqwK9b81ewo6UiFjcyusUYstsQs8NteFi5sByeLeKPQ2tWW6vXLn1",
  "key18": "3xog3qihaMyzq2F6LWVBGitzWMLCYVGPE4qyAddYz5qpQPXnrxSFryg3EosDQdzhJy8dpJAkGEWn21H4uKBVwi93",
  "key19": "31ocdXG3wuD3viypWuVfmsfGVt4RXPRmXrY6A32k9Jmt8KU3FHekvftZ7CvqzszXNjJfYMGs4MyFMAEjnCvWuj9Y",
  "key20": "5sTqCYMHASi1iC9yubfaY6KgpbYs1DwTF8ZhN1Pn7r4nVrsJfWPbMhHT9zHbuHJ2tNCJuZ5UdQ4UzzSKyBkPSgMH",
  "key21": "16432b935NbNMKjAbk5MvLsbrsVf8djU1fSsjLKM7wwaRELS22vcnVYcjczFDoYXShxC8AuJJpRXz75TQGw1frz",
  "key22": "382mqayRUXLRkG1EsHCNgQMc3EdTHcU8C41PNyVFRZ8ApWm2KmAdvnKYaV9KXsJBLcdBpvD8srpuSU7vtazUv8hc",
  "key23": "2ESEC82r4PPztsLaMcAgtQoun89rrZVGSyE2FfcqZLHB6Thqrne3vbKun3K591n3YFwVjqUD4GuH6aDftchcifWB",
  "key24": "2NRYxCGjLUv7Gzk9G1NX8RErdWrA16HtznP9fU63ojGTDfH9FY8hKRXfnJ9NzxPeyDaD9CpAUnEyveWG1zzYbuzQ",
  "key25": "5NLB3LTDQHppu27nPZ1iGk2JBPi5JDX3QMzX3iidXxRJbrU8SzucpgRqU5YQjR3N97p1BRTXR6wvBCRkKMp5XvpL"
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
