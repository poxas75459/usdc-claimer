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
    "4jN5i5UpanqMrAWdxpVMx9pFVwFhnJDBXVUvuGofcveVN69itdPBRs2xz9ARGDyftYK1anrVspbmw53AdqvBt1oh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cJcbjV6BqAVQBRsk2T8PDdYs2TtoCwtGFHKipV2zxB4nhGVKy23Cjn6GsCstesn1GEXJZKenmuGPwN5skgN1GwD",
  "key1": "5xNKkweX8bGRNeP5vDr44TnQX8UDVsdW92eonpLf4EMXaugu4ugsaDg1GufUKgZUy5qzxCJ89ANyJHVgGVZHXscJ",
  "key2": "12YD67Fivzmwt6uGqRJboLspg47SugQxT3upLbpSc45sx3nrt6j5nkb5mvXB1jeoR1iumTL2N1svMVeoZzXXw1h",
  "key3": "5ASY6GQ3ysF6zFDzHwYR55j2ssScorq5UdLNLVjxjRJaioBt94dNRFXVzbgALz52STDhc4557VtLcgjp5RpgZQ6Q",
  "key4": "5eumMzSLPbRSWLbSmUkaQTkppu22BLwZVCJqj9GRb5ugFPTEz3JpYHmRRmCPXgEbLZNX6eGZ1rZ4hdPfpBpxofbD",
  "key5": "5HWrDAa5zNqLmCehNPFj9LPRXL8ozoZc6iN4UqyiKKsPEpSxNwZhnAGdk51u4BoSK6nb694en8FhDQ9zoSg5noRh",
  "key6": "223JVtRywD4G7U4bqntHqdGZNp9LtEjKCHMHKxPGYAPJnYSZiJuAnxnbcFxiM7E9ZVYGQ3yxqaXw8iySsSLsdLPE",
  "key7": "3ZzDy9upGEmBKjdbpkp6W1JcHHu728kWJHv3fa7y23ovnCJcZnxuQWT3fxfAsnKPgsTca3eX9vtwrsyq8Z89UUjG",
  "key8": "uYavqnpQVfSVV6r5sDgbVRqHoJFe7bDP1WYstTGcR4Huq8govJS8BSofWMJCHk69MpdDg2usvggfqdTW6yiPgv5",
  "key9": "2Zk9NmevD5Th8efejvV3ge2qwKKWHFDkWFcD49YrrtPrheQpPgG7j7uNejwtCwkCoTrxBRJ7rjKeb8KbfJwxMDuV",
  "key10": "3xvbKHTEVqxP4sehAR4XP7EPYwTgoobyio6fHT86r5bqZ1nPrH8QHBeSzAq7DFb82tWYRS9bbKTw3Vvyci4QzFY5",
  "key11": "kw67P5BTm5YWnham6PRWhM7J6n4wARzAaRLLCG6bfiV1izLrRn7SBPnWPpv1e6pQ1wUVa4rUCR8szuszMqpHGaT",
  "key12": "2aEs9M1HdHQtZwHznUH4gNMTqKsJcdkD3beJCWZwiEcMREr9uj3yrTGjGqRHybvkm5BCwNSQUDzDKNsLMBiEouem",
  "key13": "3YFHEHzZifV4XzcZ7v6C5dmzanD7S61mTd378aVJFxSAurLhrpuhDs4zAnEuHsptAP3bjZRXXndD5nypuAwEGLkj",
  "key14": "2sCb3udPSB2jW7b6wy7zaPogFoAXt3bsLAu9PSgZAVAAVSZFKZ2Pu27MYCvBENLNvyDEHVyAu4Sr3J2ruYWC4rxi",
  "key15": "4bE9jx85xJDjKL9vLYCDWFUuNECDLTHD8eq85Zpbkeyxx7vwivz8gaPXbcgCskPrf8YEszEn9dNaeTFgm94crQSo",
  "key16": "q4aiTQna4xZfizxFmtWSAAQ5MzjVwCqj6U4umbn1Vq6WuAydan55wNVeU6CB3VrtBf4g9MZMgJu3PqMc41FqvLP",
  "key17": "yFyG9yHRorL6g5DxchgENa1Gx3afNsFCanKnypPvcNHStiioEgwyUEM65vGtyfNQCkYkafWgCButMybhZF33sUn",
  "key18": "5T3oHdmnoJ9G2KmKFGSJNGevViY1ARPiAE3MoMk88d16brMfde3HD5FuQZpN5yaojmutJyhfJUiBPbxn8jESvvno",
  "key19": "4835JEp7kA6qLUR52MhSsngBpTicQtXtRHyjuPX9vxBvHi1c7t7Tb4sKB9ZfR3g66tnZKM6VNy4z1GMeTaAQ9SDx",
  "key20": "5uEED5Qt2ny2uqsy4MABfK6LLedhgh8BysuVdxmBXmTD43WiPRaiLmYfRd1izzzvoYhEWmm8MjA4yXqME3WbbWyf",
  "key21": "5F7uNcFYZ1uEtKwKjavKcPYNYDjUXcDWYm4YCe3PjEXA1f6KQJ9XWjfPqzHXtmJVUJXd74NQQiReNH6gy26Y28JL",
  "key22": "3kkWLfzsEv9SzFf3thetSj995ppQLetWHvZZjboQTP2RYqBZEZfvbqc4VduNF6or1AcyKbBbcEXRjLpyfLC9sFzw",
  "key23": "3vNDXgmLXcp8Xf4afaZSQE4CVkwDAev9RcvbQKgy7C2WBZvERqabwskPywvn2wJ3JEXuDYcag7xTJD5zoLjjNDfB",
  "key24": "4fVvkjzzpVrEgv3ReH2yPvr28Xq2UohKxeUqc3H4sizHQQnxJw76v3JczrmYrQMEpd9K9nbgXCmHc3ZuciKAfZH1",
  "key25": "59h4mfkecJf4Cieec6fCKnw24WbQBXCC2gvsZyTiyq28VJ88XHPrxXvYoT2Tq2Q3mmBMLYw6BVm6oCvBtXSX3ZQW"
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
