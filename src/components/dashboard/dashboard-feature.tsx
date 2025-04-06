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
    "5ccX4pvYQCcb5CMajEfVZLqQH2QoTjuPYUa6sZS6mHnZNykogzTpGszbTmhNrTRTSVKfVMHd9PTYQUL7voWoUYXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LcDjedaXtPacEK175EeZVZHcmCpvitTrF6RqTYUoQj26PV2ip83SLib7YV9f1YE715HvHpe6J9bdfTKidNpkWH3",
  "key1": "4NCnm8oPwuxEetQGJPf2Xu1BfKMt7t1EC488e9H9kLaL9UAU7W9i6a21p5j2KV5X6Ek3yaakHoez5Wx8j3YMzteD",
  "key2": "VR7hLMEcHWW9m6G9RsS3SrAkAqDgX4SnAoqchXMkQq3c2FLweagCMsYwNAjdpMgLFnxM7X1UU3EpL1EYgTHqF6x",
  "key3": "61LTWiBugjz1apR4qkNgAeMUWGUCrhksd6qkW8Qm2HghXZNYoYRGYN8gyKHNKbd3him9bVKwV5RDUsBPTpk97igH",
  "key4": "2e6VJ8DiL9zMgY79w8swcQwKP3xnfQumpBMKaNYHpXQvfGeddRe8mYezuqM4QXrSquoibyhA3ggM47TanLBprzN9",
  "key5": "2r7fX5SXgtm3siWuN4TZcCJxUzA7vazWFJptX1D34HS3UbGTg5H3kT8C8cPEMe3QKWupNZp54qkogtN8jUEikYNL",
  "key6": "2jM6JFUaQH7EgvZrru9reMATFoVJFiwgGto9bKeqy33pMQGdWmQ1XiRPWcsDoaMpvuFMfSnXGrrDt2JCxgjwc84P",
  "key7": "3dHcKx1Bh1R7JiKVxxopr8eLnUrFzYeiS594nUjYRDxV5EFUk5Rg8Mj9B1KAs5R5XzA1YNQMS28bHXMqzNYqp42K",
  "key8": "5URSi76HKgxd19EmMjDN6iXqq5t82XaqHEWDZebREJ5fuJxZoLhzjvoaiJMsQtBFwPFyBhwAecm1gMr7GebWARJo",
  "key9": "5zqwHkAhjn6fWTc3o9mRzgorHfnWuRxSsLVDyVAKGNAcWTwUN8o1cNxuKhkvVHbahrFgsBZxw16jhHzNuss7N2aF",
  "key10": "4ZTrQkHykzBBcbGw4yo4g4wA3W4XYDyXuZX1o4QE3bHy2H1kp7MJtPfdGPBgmKsLhLBFqAwuy2j5koV8tYA1x2AS",
  "key11": "4Z1vNZ2wgTSfodXFvGAW5cXFLQkmYJgvL3L7aLWxoUeWudfwAeYNxG4WBZ8QBPWZ8cgBDQYeComL9nJPXjZd73Mf",
  "key12": "pSLLncZRy3nLJyL97f7RdfZBFDXP3owewJi762A3C8TCgtG9n9tZLrmiPUuhMTm4QjoeQth3tjUoSVn6mZL1mVt",
  "key13": "5G2y1LJ2gtoZqQALEebxrUvBfZ9QTSgUVLGqNqVCCmvcydzcfrB6sZ11keU4sgksAU1Z5KPUFMB2qPJ4TtaWYeHS",
  "key14": "5sDrRjszdfWTcEDMjMqTKQZ4n9PkG1c9hHebfPKjmDdUbBbWyteEYQbzdqVrfd19gkDQtKcLmHWsPSghuzY1gdC1",
  "key15": "3jLUP99HNTmKinc34P9LtBiqkHCPx32vHQKMasa1MYKkXGbZhAbgDH2LCkMxqdgDtJdwRz3QmjVsKQTYiafGbcpC",
  "key16": "3qV2Ge534dsNLw59ZJKCM2PKtcSCnGYWHjvSG6wvLiKt65WKNtRzmbP6nWqeCsBcsgyw5Cuav26jyDijzxVGfX7V",
  "key17": "3D75tVyAeGUsAzx1NGEyUrJrNcnqPAMybUAhPKL2mMiHQPaFrvUdZ1w8YzrbNYu2oWcbVx9ghq2j1Y52DT1AEQmq",
  "key18": "4YqUbVaaBv3sACx1qWYhbeCPYz7SfKwPtdTuYkMKpacaepU9eJXQrWMSQwkbMYTr38mc6uFCqkK13zXwzXwPU8yg",
  "key19": "2sLB5KFNbdQnxJJf8yhLzyMS6EEazqXwoVzHUtMH79n9UZyqMQcSWcVTDefHEP54QP9ggoRbvV35TYa6EiY2GBVz",
  "key20": "4FFUVf11UXDrwmWREoKFHMHKAELmc7VUhHr7AsgwocxrSHHz2EquSssVaCBe6hZKoEY9VZQxUKZvYhMHUWL5bfL8",
  "key21": "k6F3oVUxEfZEMZQccDbKuGAu43tjD3NXeMaBA7o297Rci1U4PFAGepy5Z2GcTtm3KyYfwc4AMNqN587j7M5D1hx",
  "key22": "3eDU9N6PRrFi4DT5bLXhhMHvQLV4VbFEruvCKBhFD3EDg3Kfm8otJCS3HBpscxpeCD4xMP8Bf7TPks6eqKkDz6ZR",
  "key23": "2Kj3eevgNHjKP3GftJ9jZghAPctu5zRraMc7vSeJpXomZvSbemhsiHhZSkSKEF187phmBNnnpw3AcgSeLm59hByG",
  "key24": "5F7Jrei66UdMLimD2DaBLLas1LuobEoRZ1SCCBvkbw2CfshHyHhwSMR25S7VbwpbXgH4qG2zxgPz2Qjow5HchANZ",
  "key25": "4HcXomZhZgZThU5e1PHm5pzyZKE5FQRvvJTiM3MQ63szusDzxpmCVqNi9C1QF36mFhXZELFXHcuPspVvYZg81AYz",
  "key26": "5qsFfGHvmZiQ7KU1iK1QJMo7HSCU1xuSQyqWaaebjj4whyAPcqo2MqTM3KQ6UukXqWmiPRQg1rj6rwLbaY99AVnQ",
  "key27": "oe7XJNs1yV2vRhA9xAimoFEHSFzSwUuHK7wtm4qgNLKNxetRnS1qinJWyqvfhREBXerhStdvhEUkY3AhYjjmzgj",
  "key28": "4gXjt4J6eEoXCbd8EpfGxJPS3tx7uZvfoYpgxFDRdDXZ5PmcZhkbnwxapVYpZxAv364xgqtvNK3hRqpiaWt9wgme",
  "key29": "5D7UKwGEV1TBmf1kbWM5LUK8evcye6FLtyMLvzLorHgaAZJ7ZQwhCdakMcJr9bt51rtJdwTRCnWgUkKpBC3cGi3R",
  "key30": "3xSXhEuq6BdRN3rNKPGBKu5WJCjAq9THogAFcSqyfHPsGfLHZ2inkMX7D2xFgJZ71zdnTsS3WyCRWiibEPz6k9Gf",
  "key31": "cBT4g6sfo2CV1oHvcaB6oM7SgDCXiC5ZTt2tjTCjGpK4wheDQSm5o27VdihHz1gfqzPUdE6WMmw4fY56bHoYFYi",
  "key32": "429iCuXj3buEZNx9ttu3NAq6aV8r2oeiG6BDEhbDQUXsk4TUxA5R8qDMjmACxQhdZLZ8g5VQstiQZDqd7LKPHGvY",
  "key33": "5rwKD7LQUp6m4eKYUKvmwjirmmw3NwzBjtwZDT17WsdmYaRgJa49Z6HH3KnerfDL9vqPNu4LDgBUnabY5ATviGrD",
  "key34": "ssn4UgfZ1qjdiSt1vFtSgRL1zMRhD4XBUroxaijVB6Md2CRDXRwkGVpqyg7kqQkQrK6HXWrFhGB4SAA328zNzSc",
  "key35": "2aDKEkLQUdnXW3faCqkPEXmh4sQ6DwLT6Wv2DrpNzD4HmZLSF6G4mo1fQAnmb9H8ffvKdTnDwDVwCteSHgtLxqtS",
  "key36": "38dgxAe3gQktGwm1CU7wh8fW7z7atNv8bdQxa98d3m7sSW4uKNdFhaCunFD2W143xSxb3KsZSdkc5iS8wGxEtNvq",
  "key37": "3CTRgWp6TFi4NbR992AmsorT8FknLeb9bWPhQMxwdXutvKdFUJ2xgTZPJKxBVyar6iVbyq8ncJhMstd8Cq54Pixq",
  "key38": "3vADcJSesvVWiRWgamErfLY7HMitkwBYwKqV4zTH2BmG6cuSy69VeGzqbz1SmAqbLkoF3MJGPgggeqFMnL7T1Hia",
  "key39": "3P4xKt6LJ9NRcoxVA1QiYy8mepdVqTFkrdhc2qQraFXYSjFc7Ljn6Nr82SauGxdS1QA4LRfSv3SnCsVtL3mRBnp3",
  "key40": "5uwo3dDsjNVXvweoXTLu8U3CxJbtR7Sq7xVQmdnzQAQWCujdSMJop419YgH9xW6Z7pqXFCgCjufrpAhFASahwoqQ",
  "key41": "4HjAwowPnwWjGj6sbGh25zMBaRgEHtsXYt1TTG2JtwJb516TudSTguFFWuYnoMBbc9i9xkGVSP2i6mKnx4XobZWh",
  "key42": "5pJZxZNZJEfZMvFkDWJyUrC32DrVZLeKpr6iSeSzJ8bRERu3Z78qGAHCtLhLNoLyNNL63RENc4uP2Z1GE6Febzvx",
  "key43": "5cGiCcjsUPbYZntQKn6UFXzychyjzY4wELXYFYYCbgiU12tUK1Tg4bfWZ8KPiCS4tcTL3k8rw9hoBSJyW5yXxtE8",
  "key44": "56NijhCGnbaV1LW4va2BojXCW2kYkG1utQtqTyJf4AQ23d5kdUx6KadPfGiXmX3X35HHex741AgCU2PRQv2DESqs",
  "key45": "t8uRLZFQ9oJrSy3AuU7D43G3CvYVfczSs8HqSWxExjtcvuwoyTQSdb8UpqapfnRpUs1CyvapuAyrix5XkHHfjAu"
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
