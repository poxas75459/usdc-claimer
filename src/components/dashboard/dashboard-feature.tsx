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
    "5nCwK19UVMNuwZuaiKWkYseiWUAW8EGFRLdd1Z7gi1NM6VfqjpQ3aZyKo1FcQy2EXq1CWvnMh7bR3KnmVQ59xEuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JZvWZ9ixqxLdMMfvegiaav6deew8DWUdcGR2PrnrwTh5RfyexUf52EWaWHpu2Df5ZXPkjarBeefznGrStN29Yzo",
  "key1": "3rh91Y11PgNyfyj4vLDvZ7djaHbfmTe56ZekNRSu2VSUmPLdUmfkfwCVS5aQkntXCfXqCcYJJWzxBTEzYHR6dsps",
  "key2": "YRXTCheCqUnqA8TwgK9jkKru4gGY48xjyktV31CWWwK7VkMiMGE8wWcRJpVjJJdkCfKkdwaCJtqcQzgxtZqjDUD",
  "key3": "5HAshR5BiCizY2ecsnwMH9rXLarbLaavzXgcvt48K84Pu5RMUvh89DKXcLS36hGkvS4RQxhGBMDLHPrWKX1VsLbN",
  "key4": "2evnkj6Urb9em7MxKsGMMR7boUPemaVFzfq3KBHm2cQyhTqboAP2MR7bRy5aWjBvGevsW2C6LQn7vjdNq4tGcsvy",
  "key5": "53TaKjqqqb8CZvqw8jeMdgjtazvbWf6D3okMUV5XgRQJK5PNiytBjFUop9LMdu3VcnFi2J4etUFDDkG6KG5gv7Yu",
  "key6": "3vWawFLPayUVRBQY7CF66P5vHaoot7HiyuWP9ysLaGgArnqHDJYysK6sKeDjhFNFZpgMbCfKCYHahBAJNRiSgh8k",
  "key7": "KQkVLyLna37igi2CwjecsM6g4SuKDBi8cfKJ7QdH22hBjMrdBaz6dERMgKGEe96uxwjZqgYezkdQLr9frf4aWA8",
  "key8": "3pk6R6LfU7Xw9UAZKuBa8rqugauzhvxWuvvydXY6xitPP6eaB6ehyUB6cTFNpTqEJ36Mb55yJa6fZDrdg4vSumeJ",
  "key9": "5QUeKuHaZD6FgpudmS4fRLYss8NTiea1GobyuA1B6Bogi8KGmS7CFjKQpTExcmuiMv9eA6obFKcMj8F1XWWZgpaZ",
  "key10": "3NVHtRa68mvrmahSs2UjhnqTo2uPGaoYbAfJw5e17bWQMNgYpxGs3X8nJ7756pTZZy6o7pNYQRT2Rc3Yzu96ZxnQ",
  "key11": "3r4enTbprfQZi5YG1PaeYqETTEePpX4SzYW9pkVNSpidqnuxVsRdURXCB1V5WCk1ivnvCL6MBQqU9m2DPjL7timW",
  "key12": "3wvJDF5kpXhdCq3iXBCAhntMKSQNLexGLgD2agxx6jJe6uRTcH1vCWz93c7Z6QFLLziep7ySZvXsUohiUiyEmmEp",
  "key13": "4jU5ZRZqUQoqpwjsdyuDtMQY7KcrcFrbHjXFFCvNxEBMdnf8GYvwcdmPmG6RAeJ4BC3uPsDJsDbdbAsLjq1CQNtG",
  "key14": "5bcCZhkG5TUCb8Eba8qwWArEBEdWSX3bCMhFd9eRYDNKDQBPTEL4SrYac7tnduPAPyP5x7qDgqFt2ATdZrG3Q3Ya",
  "key15": "URNX6mQNCyUgQq8jUMAivpx4Z81AnxfRbcPopS6ipKDbeqjbjC3fXjP2vKW919fjWaTBYnWZ4sGToaiRZDAuXuu",
  "key16": "5mMmk9sbPQ4WzAfN3ptGbTqciQRwuJfXXRyzgYQWJ1sRseoKUNT1JfXuocG5DPRB54TBVKz5R1HNb921JbFT2agy",
  "key17": "MsHZgnB6DpvUcScL78DE1yT13BQhpqZ3h8yhNixVX1RpCqYyxsy8sGSNwmBn5qG28uX4cgdigjHq33AzzJ3PYEZ",
  "key18": "3PCgFSvCgp9CytBcq9vrNVcgnUKkK48xNaC69eH8jAFTYt1B3Q26zpd3wBK5oZ55FJoAhSFCuzUSyWJ9BsAT56CU",
  "key19": "3EeqU4AiwP4EeMksfDHUCs1NX72twvAJCCJ4KRxz9JhwEVZFQZ3YNtcVpfuEyMipYw8KSeWbuqXubSUqiPW4NAcK",
  "key20": "46J9VY5a8bC2s4exqDyfpJdiTpxWu2p8QUzizEeyNvte1Gx5ovwXdzFrhJ42CmvGV1B4pMcnga54PMzHf7qVoeA3",
  "key21": "4r67sXpae2B64KxZewKffJToom6dmXHRGAGB4t8jTpL4cc2vqNQ5dq1VUrov5K3WofxjnBXzXWNxp7Gc9b8e3Wig",
  "key22": "2bCWqxRQBV68L78zijbcuEDBe2ALfsJpNE8LDA6djUw9P3kQ14rhZZhDKUTc2Y8jDGvg78rZ4EB9hGoKdR4pvzLQ",
  "key23": "4CMe1WzrC8ywP3Hby6Fx1Pt89rKTEAin9c4oDkvC3rJVjpw5BdnEFfJfFTGUzoY3xfsEFJ7X6o6qf6P2PpoUxBuz",
  "key24": "2fUPyyd4ohAtmauXqEDcxkw55pGUyUpSbtwRtYtj9fuxDyuQM1oE7pkqnSJFeFKhVgtr5umkgTaVVjqvrGJxcXb1",
  "key25": "66tNTCYnGA53Apw5yhUJBrLrLMk3U3sRRBj2kFnCejkAXavNu3PQiq86eoXwzfkmSwLEqP1uAu25RjdPyCNXwTMA",
  "key26": "9raeb9gYUMydKsFDasjxWxtMgWXD4TL9EyTUWxdaKYMWbXMRsGY6zTBpKHnxDEThDssBWGsavH9rtj9N9R7irVe",
  "key27": "39MW6jGzneWbGSyBFayRAgXkGdKyJsBqRXgZ6b4xca8FKsjttBaGZ2rmGycFxKYUinezGwoSHjUAzs7Kwt61XiNe",
  "key28": "gy9L7DihbsFST5L47yVmnqBXxhMjkPEgTUFiGX2KkLbYQpZ5yCFjWHVtKX9SwJsvDtdoXpUWvzWi6rhLt5h9yru",
  "key29": "483Mvms58wrjrNVuT3K9DbWaKJZayBHbfhYTWw9vaZPM6PXdJSwKX5Y1HNarXYi6buz8tfcCfCSaYCZs2FeNjJPs",
  "key30": "RQXDh7pwRcVhwm8xSNhZCxvqAQJAKsXgiUdaAEpQmSvb2sEJrVf3CPLcdnfbAnrAX3rPdW2yUYD76RkZBfmktdo",
  "key31": "4NEKmnDnAkynDYExnyBmwQ8SHteReL4LAFYVa4cJvu7MvCDq3V6mSWm8zLGLpQqqp6CfuMDTaqDT3HqJSeGVTGdN",
  "key32": "sKbeCE3568TfmoU7M7auNcjpxZb6NJcxpWom2hCeFfkaboTLUNbBGZxk9vpV9ByoUmmgrzZkg5bkRCAgvAfhPVf",
  "key33": "4KViVXjh3osNg3nKQE94HdcYLyyiEfRz7KbqhQFdG8v8ULbeim4HpxW7ig7SP7nvjM8fNWiPbbriuXDHpKqfrTu2",
  "key34": "5bgkZATYZetog44ZnyGTLZK5Te6QVvC2H1s9D49JaPYLyWzGuc35mkRUCevW4aXJQFMnArAbcdesoDSeuLvQzGJ",
  "key35": "38vwPTRZg3iQyHSLwi1MvroBZmZe3KLwkzdENDxqi2eDmgc8KMrfegZPcUn6Ngyr3bqtuP8DFo2SqjfnR85RuvtF",
  "key36": "5wHC1xRoos4LBKnqDXZTQYNxE2JvqEFmsFnXki85Y3U6rQWepVaJbHjs7H3Kd3Y8B1nBp7xWyRfY6XmJ1qtFqmFG",
  "key37": "2GTajp7Sevk39CRbaxChfbwMjPmhztdy6FWEBchjk6TYQDhV116tpCB8Jcdn6iPaT3kjyShSjjLyRqcyxAqXmqtM",
  "key38": "5xQgT2FWM6m5xfBwsMTknHjPpBRFSVjZiitWRB7d44B1JiBuLS1jEuCFvoZCV4tuEUq487e4FbAP49wpYEsqYvBP",
  "key39": "2aRjbT7nFwciADB9jME3GEwzPwfbqfun9z36r67QqTUjASzTNC4FWHqZqVVM5yHpyx7NExcLDD5f7HfyZ3URERLn",
  "key40": "5hw2qAqmbu9VpPuBaLVtP6rq5sLkADBy1mJbP5aFLNmHHYQ1tnTSsi5u1cgN5AtkHtGzzTVAN2bhB4ULwRAZGQre",
  "key41": "5ibx7GdryGkdm5rEJoprMDMwsj98S6Gopvi9rKgs2nBnbeRnvYZ7h6bvE1gjmLzDUQnbfiRJCg9eAMMeyBEBifeP",
  "key42": "98UZVGBLHxqSd5CiWgxxTFHNFNn7rdrK4r98xmwo83ZnJUfbcUG65ap9reMd1sBcRYhJwVjM3us3T1kJKY88HxX",
  "key43": "VHUmHbH8d7mCUXktKRu1KkKLbe23soVSpJ5FbpsvXBDNEa4PDB3CS6DqsJz3nNkViPgnobPd5yTF1vjVbzoapec",
  "key44": "2LQ1gJ1X17tj5ci9nqdUGrYyrikFtQnUYKuRcxkLihvRt3JZuN4znSHpDka5CDbR9ku8U5M5PcWbjXHX4LcoRcoP",
  "key45": "4AWBuDj7EX9wR2wVSUBz8nnPzc4MCeJvYPuogFHnFrZZt7PVPpRugFtfPgVatFm6d6QF4rvPuML1oEj7R6ennTud",
  "key46": "rkynRLG6TssSCpJmRSp6tXZ5RpqQCcbGqHHaRfciHdYxqRpXrUqnre6wrbYw6uDZdWL3PKDsujSQM1im6DuZRzb"
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
