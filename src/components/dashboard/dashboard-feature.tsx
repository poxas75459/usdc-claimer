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
    "4fgmKrHGeYXDcxeSnnnV2SqCiqqZYm1JNSvYr9kP7rXqFHM9yT6XnzPm42UJhEg93KTuL65QaCo9cL8jq6KTyCqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWe5VEo6URWwyvb2cDQwYuHL3sWqyCwkCuqvn1FNbbCwFp4SVgcytvNBnyCrtMJSdt7dXYeFLP2dpe7AuaBfk71",
  "key1": "353KBfcuMqXGCCXQpnoDnt7u5TQzwk9E31FEuipNrpRBmeZYAfeBp4z5EgPEQLJteP6UErxtR5iceW2Z47TH7jMX",
  "key2": "24Db5WPnKUd5PSWfxH8PDP5rhh2tzsCK68SEtaQxoQU9NBd1qrBb6WYQNQ3PPHeZZjTy4MdiA84s26SKNXyhKGV8",
  "key3": "5HFYasgNAtEe17ugvRZUV82r92v6S2fHyXBkGoYHTLeLwaHgmgc9xTm3FSFnrsnbeeDaWjGguabL7GvV5P7aT9k7",
  "key4": "4XHKxYDu8zQbiNWns5B41YXUJenMeZG2Gwc97r586mscRmQC8FqSdDjwfi6LnjC7MjWH5P3wXANZi9fb1fxXYcaB",
  "key5": "5bt2u9PMieqsCwjrV9uzpMYbPBXwsyy1sh1Kw9nbUQzS8PEk6XK57sbiHWYarPMuZCcskRxLokKhBnGGMJEEtQs",
  "key6": "3P886qi6pLJ9smLiX43dXtxPN6NnxerUBUrm7me7kQe17t3gHEa2H4LRpkGCT45TRte7xTTS427CancLQiKVepoC",
  "key7": "2DQ5zbS6S5xvoDR6UmCzGvrcWK68a9X76mBzHmWjxhcdqhhqkF5Pesmd6ZWKaK4bVNVSBg28NDxHCgJmh3xxuBLC",
  "key8": "wcVAsLXZadFMzHBtknhcGLQEFLNcFxLhVc1kQKNJoQWaP7wPMTiz1C6Xjb5tRSP8xFx4Nq9EmFbArzLKWyyy3ue",
  "key9": "5uzRe7zCBK2qrUkY3tBACUAnhAsvMnrNQZGGHbM8ACr2NVbv3pcPzX5AcXDQodSBLzAwqMgeFiP2dYWqv2vDtCBQ",
  "key10": "47tBxWLMYViBNTd4SxgocMmoNnmPMKVtoD9cWXJGk8Bwsv9Py4gEvxMdonv8S6hBHbk3jDAz2SHLKgEteDt9JJgH",
  "key11": "5eKaVfrceHbwDpxwQbUk5z1Yh8sxYVow34SSdvic7jxP6HMMYkbgmZLLPAHCK4KLaVTcKKvmupdFPL9arLC68cEg",
  "key12": "3NHcdqygkNNju22CxxCWCqRcACWzdqSoir54tJru2yhbsBtBtwyag5RZXEnr1QXX1aWsdQCu3MWL9mEAb2ihCs99",
  "key13": "2SCEqRGPDBnZp2WAq5p64NXy8Wn38LWuXpbLUte8ZvWXTu8jA26adxafbCkAQWj53t81igqq5SKuqj8N6Exio37R",
  "key14": "4VbsdejBkgMzFzEtwp4xD8QmNNVh1DsDzshC6rRxCvG5HLfFvrpunD6que7PPBAMuy1wJp5HKZwy5hqvsknLwv9j",
  "key15": "62c1jJXNTwhUN2mXdyNFQcopvW8DafuQiP8M8JRzHv2WcJ5SvrPEv6RbgYzPQezra9y4q5UfzBUia5aJdxHspBNB",
  "key16": "3WnzcTqfz9XQh1JfqRV2EtjVhShedePXtRyneQEEhJFKY8Au2F51zAfpM2vrCXZCZqo4hXBvHMgJGRNNkbMMY44X",
  "key17": "44ai5vo5CA84gox4NHW2dKEUaBzEC9Eu62zeuMo32gfvKNR97sCnGEHPUQzXQxDs9YatwbfHgZdhykp92yXgsnjB",
  "key18": "2S4tFNB19yb1JiVx5hmM26DqNieDQXxCo7BNPmCaAKXJMRaPhd2abc3VFqeeWvW5YL2L4UaeKpXjPXazwPsksKaD",
  "key19": "2YWukNhEwoq14RRvH1ZdxzTzG4rnJCLuTQyCBCfMJogxy2Gpi1Tn2w1zKMGPB5SpCsKhRaNSZbuvnShoQczwxRoi",
  "key20": "3zoeEU2gaXdqaojjEQrr9pFjNBxSCWe99s8tMLEC2Xw96HRyWtP64g57R9Z4icgEFGTnjFRBifBRVxrHX6drLAB1",
  "key21": "2UCT5q3hFYXucJq1BQhumSD8jZZHAFFJ9jVbcyAjfKpaSWmigTfDwpKJxjpPWQDnevREXV9FGQPqwqyExAKrb6PV",
  "key22": "RqjskoR2TZnjFxhGkUvNm285n9mYyyhJPwmrnwQrrh8esqcC6gDjvKbzeB2n19TBq9NjZ2JdAV4npNFg8gTfc3T",
  "key23": "QHxDu5wf5KR9LKqgaUHu6rbua82ZvevpTunpsZ9vzYABG6EwHHaS7xSLR8HvYUHCT6f4CkdhnYuuutKLKeaooT3",
  "key24": "4fRuHjsdQZBLz7Y8A8q1PrjJYchtchoaERgGtag95uHbeicuZnyad6JA64FVhNPzEj4kR7Z9g3iXYudZtmmB8oqG"
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
