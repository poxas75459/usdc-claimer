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
    "61eZW5qiK478u9G2b7jBfr2YrRr9V78HiTfrqBii4mpzrAsLNgzmMrPnmoNUR3AoyQ5Swcfs6hZrxihWEpvea8QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wTA9Z8dWiajm6ZeB2DVDtbiP7zA4J1yuvQmTnvWdoTEG3Hyn64sJquqkrqqfRAJtDKbsofVB75yyWfn1k6W9JdJ",
  "key1": "23wFmwqpB8Ktp62f61mFZSfWsjHaorvs3XWvMMNsC1WS3BpPPsQ5JuFF1jLezTMdWW62dfWLDfUSR3VNHtZQ8cNa",
  "key2": "2jT5ccf5U9du4FWTrYsTQmiruT37UEU9PnrNt11dkrK3oM9uNfGt2amCDA4PwkrbYWPiGbYkAS897sJto89ShPQb",
  "key3": "4JdzrE6voB37Ds4EyaWwHyfnUh3wd6bUtaPuMep4tQaLYAiysVBs2JkmLeK3te1ToznH9YnHupoDv2mHfbviD1WZ",
  "key4": "2EM5vA1kxGSUtnFcn1MyFqGgNxyzYb7nHNCYgiFQXvPKYqdfew48yqNEmGxAF6MzwSnSueZM4kDszq9RWiNXiztk",
  "key5": "4Q8yrf1qMeHtxVxhYbJGSFh9Hcu8Bcv5MoxcwDAJRtqhmkxsuzbx3eSzu9JHxWkeXPQ2qBofzLoTL4hqyjjDTRmW",
  "key6": "33tea2hQUsA3sfWB1xaXv9CSNtX2B2xPKr1dsBTjNJmgh5VwxaXEuoHRJpQCZr1GR1QxJN1hXTaec83cnARjuGvH",
  "key7": "55nBoZr4kUEQxJeX7Pep2934AsHahuq57SsfmCpG8mLz5SVLpEaYR76KGhkv7TBo5oQDz5Ggj48tkS4dy62yS4q5",
  "key8": "3LgRqjgUc2NKGfsDHz9yNDmg6qzBbD5Wvwu7sNGz9ykQRoNFZy7vNa5Hc3U7894ZWNta1rxcyo1dSLaVtG4wDXBj",
  "key9": "3a4jXa52QbFftnDc3GwTgwk14Rk4uFukg8rGuG6ZixeuzhHmGW4VvADufpH9rjb7BRjeBGSHGXHV4p5YomYqhWta",
  "key10": "2pRCvgRFxpqSAH8NeFdkSdSJXvqVfzBRi5c8Z1WrvHvBTep5KXhZAJz3SA9bXNRjHNVCR5xZ2CMgwy1bUN7yYHzS",
  "key11": "5QkXD6FWoTHkkhS16W9rhGRF36rKYBMzvvMidEy3Woo9PJboYAPNFQ31REpVt91Dz3LxnkodAceH8MGZRWP8qRnL",
  "key12": "3kYPUrmFHkabPuBN6kMhH9yHb8Zm4geCV3U69EsuPRaNtAm928dZaAt2XGzokQ2A6qiDuHPNtWx5E6WQn9apZJ7p",
  "key13": "2awHzGjd2CTEP7szm5Hit4MwMzWPNSEg28m58eYxinywEAhjjU43HCjLMHBdbYqUgab2yVKtsCmZsoakcJV6xiBE",
  "key14": "3mu4ZhhBAeyiCJMz8qtvRFUqJawE631iFxDiHJYDruLxpsMPDj9XahevrJNEbRoQABPZDLdjfByxWcVRJmCSWno4",
  "key15": "2NUo4nt4eeWpit5rm7GU2vzR45QsyWLJ3F8fb2bkWKUxKhFRmPVGxMyePZhLfPaTnCyMoQttbaQmbQc4zqvj5wwp",
  "key16": "5s1wNKjygDvCBYE6qfCnYNUSomTQwwM7Gk6wDY1vD9qUoR5L7bW6HVQFQYiDQ72Q13ec1hiT9oCs35sE3hovMTc9",
  "key17": "4Ecx5NrTBpRpBAiFjHDYmHJtJdF7mLgzuHpHjQEPLaBFKRzxSG9P9fQudFYjysnHuzCADauXpHKH1J9Za3iEEoqB",
  "key18": "23mKd8E121BT4k6bHfidVZ7o2c7VGhsfPLbokLw6bwTe8QyWGTy4wQ6SFce2CdoHZW2nLZJJwBkSZJ1z4wPJCgjL",
  "key19": "3mmV9cyPgGAmPS2WZC5V1NqpXZPyRUiv3vCspWb3YiP135V6F71VKvJWWk8beYoSvazKDm4htJQdp8ERra6TeTck",
  "key20": "ZLJn8ehe5cGFR8vkKLZK59kL9thrJHR2ViMTZHfw7SqgxUDm6bu3EjZAeapHzw23hNCDQgVYYN7uAFM8mCLiKzt",
  "key21": "4XFSLgFjsrxYfPna9akxUtEKsEiRhe9vThTxRBLKJUrQdf41ZghqbGCZhoaT25io7p9iCgws5qdFUesxBXTbmGnz",
  "key22": "3atwWRsaeWf9K7DwRLiHbAV3Nr2JjG1YRFnJva3pt12UsRmfFtzVArGZecWWTkSXC2EddDT2QmoeJVUmpMkeELBw",
  "key23": "5DYPHSiyrPrWmMJSxWTpR6sf6mpAQddQ35rgJoY7eGJfpaEWCxtMFPu27K8JiYFJEyT3Su2BPonTac1Lpcg7RWeM",
  "key24": "MFKnJtfr9WU7oM81xstwz4xGyUuVyoL89Hk58DsG1YXMAAapwXzddhLP8dGPLvBGaWZz8uCWL91ba5HfZGaaptv",
  "key25": "28JREYHpaoEYtfsV6PeYSZ8AAYsMW51AyX9VFtfLa5ApRpaYPMtymN5oXpLYst1sv5wYbNs4nJk4JtDQm5vW8KY4",
  "key26": "4q4m38D5T72yxKAGGgyKwzB5KUeJCfvsyU8LbRadEXT6wW1kiQPo76BoDodYjQ5ovmuSL42jpF9UPCgRK2XyoZfd",
  "key27": "S2TuyRaAg996pAnv6PJPKYi5qU8JR4xkcvderL43SApg858fpuKQ7Tb5gpzj5dXhgpiGusVnyedZLAkNeTBdkfE",
  "key28": "2a56Bn93Q8AdcgTtMU26KthBJPnutjb33bpx41jy3uEYP63aJQji6moQHxHuPW6Fkkz4iDpfnFLnsLNNWpr26iam",
  "key29": "4sbGZ57V5Vbt1BrzCrhHfmNsa35mg3F54YnUjfNJAmaMHNU8thJVb6i5F37oi7wsUUEvKNqycYJQM5QkFggFWReA",
  "key30": "3wWtFk1cA4UMKtrt3tr3f3oPssYF1oUodQgZA2VMEgYbhBy3iQCbNknhBeDjPAr6bYkRVmcaMwhFfhcgXodCL46n",
  "key31": "66Wt3krEDnPNoWMVs6NznZYFDhkEiokhZ752BoXYPySNLbCfVoRhL4MEWDBFMYd2K7b2DBeJCJAxbcAPQEkoUWiu"
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
