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
    "2oxZF4YVAcrUtbHodfB8y9QD9S1f8nS4fZqTo58984BWPefgTqu8WK6MDmWMPhGbGVWJoVjPuzCa88znjTn3iSPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLHPcm6pWqJFguSaEXhzAMBt8CcRm6Fabz68YJAce8Z6yJX7HZcnV9TVLXLUTRoUGRn45z64fe3BNCWHnyPLFSp",
  "key1": "45M16y73S8fB4U93WT7dvp9xbjM3oo7KQ3pCVJPK3wU7jw2vQxsqfr2kNwja2dSJRBn5AiQXD3A8LqLWW6ncecAf",
  "key2": "3CKNrj8rEs2B8PbLaerJpzRyGCBZS7ewQDqygXbFwdWKujF65QqaD9T4WHXuKM9qunESRMoHPxjh85ZqDHaSxkBw",
  "key3": "eCk25HNw1shqdXCxarTihvsVubCg21Ad29s7imF6Ckk7kmJhDcvjSsQLsFXQUYLkEfDVzp3yYB4TRdufxWCQCyM",
  "key4": "5MqNbeU3czNjoXYQ7bbhS3AiSKD47fScZ14KBDAjVFCNhJt7ZkNt4KPdnB171ZsCtRjVe2Z7F7CeqSJSpVhaVnEv",
  "key5": "3yvpWuBMJa9vCqwGuuKJrxi4KaemVZhgDTpnjRShR9ZJnrBVWhuBDsdDjLCqtcgCarX7BxpR78cZERoeAy6tg3HY",
  "key6": "3Fsr6czantkEMrNW7rbBGx7ANVyAz5gcZevPvaAbUzFEgve6Dwu7a6vsGFrYzsmtNVwJJ6SDpkNLmtevafCxVVgN",
  "key7": "PtJzCSerRiq9CMUW4J66FT4qieaK3sobkQ2vWuCpqqCtGD3R5BvxQJcEiBGi2MQzZ62DHqoLRWGNrA66sd397sD",
  "key8": "4UGao5Zp7yipi68zGgcqw2Ygc5NeiULJjpzjKfpjKfPRrfaMiXPqQTERXcyFv5578WsiU5KDiuMZ8cdZ157YEoGW",
  "key9": "toCh5D9iKQbfRUZ2WVcafs2wZMLuLDfky6Eypc2Rdk5f1gkeiGSbAYrxi6xQm4yfqnpHb8L93ckj5EwBs1Qbr4x",
  "key10": "2NFjuVVdK9wi45ux1wowGD37kdfQDAWqECwetid1M2Sku7z4LNd1UpUK5Z3bFDWJunASYFYyPbsayz3UFBz3KML3",
  "key11": "o9FYmXVqj2QnEY5GrTH4Lxu1VmwPJh1tZur6rWw3Z8NSbQQqMpQky4MjoJJPLhQgSmGMPf9gKdR7sWBmahb8XuF",
  "key12": "4nSvMPM7GFC1jM93QaZaEE5s3zYzb5fbk9C2XbGgntZBronWz29GZoRg4s33DSGC9tn9tqkZa7QvQ4yGEjdyjnc3",
  "key13": "4yC2gkA84NJJn4SsDeutMNBJap1ttBJaacf2fyEDthuSQ4pfcBxj7uPDXJUryvhqjqSLdH93Dx9i1oaRP6ftUzQG",
  "key14": "3SnwMXZYzQPCMt8yoMF9E8UHL3TDj3BMLiJMAXXbEeEf5sUCF2BgmxMP287y3zYTygVrKUQTpSMssEmweKq4EaPk",
  "key15": "3zssSygeitAqtSE9x8s8cp7igJSxX1ahVj3bYkuTFr67m8S2ZC64huWWmu3KJJ8fcAWN2HS7KF6c5ehAxhnyrTnk",
  "key16": "32XbPMBpcKPaSyqMceexvwJL5TVojMJv9b4dSpVKJBxME3bpsn9MnF7Fx3c3ECtFT6RzeG3L6yRbBhqn7DfsM2FW",
  "key17": "3gTZrr4BYbAMqQxGMdpKjiP7y61zbJwmLLfnai1QLQyGpwwE9Gd7xQaEyoA1hZUbyQB4p9N5PaKHAHFoAeLNB85G",
  "key18": "5hYjc9234CENdb9WSv6HSuASkjEfGrGoqAM5VhcQQ31LspKAivS4KJgSdZwhgJACGRebvy4kw21Wq1c7VcuAK3BE",
  "key19": "4utCtdFfus5RZtbekce69sC1kEJwWKv7qTQpVT9CuwWQSMnNf4h86iz3MrYghv5jMsqgXEc3tthkvJ8wvjji6oS7",
  "key20": "25T99CtXyopZPRqucn8rUn6BRcps4q2tnj7DN52hQFxsjK4XhgTwKGGhYagpmKHyHtdcbQXHMWWttQ84f5vwbDw3",
  "key21": "4tYTqacytAoomjxtCvKNbyTVRQTjDfaNeKAgcCrYdnuZCQsnoEjEJoj4JTYnxKmotxrz5HYLoaZHn5T9H4Mkaanf",
  "key22": "CxzZYpov8apaBg42tBkhiZQyG5QJ9YzhJxnMu28XCyN6bZShfWvrx93sNhAWjfqG1ifVmTaKHhVNPzqgbggJX9E",
  "key23": "34C97qFXTW43Knxma5AfsaijkR3rzfHtYxJffEYyibfhFgBgbkEpS8zHyj5bDmwyvkHeVjpsJe4jUwvfXsAKujKR",
  "key24": "5t715Nf4UH62WQ5qiEQ4BCz9FJXyEWiQWxqLiKW1jJ39dEV6HRcb2Dar8TZ97ymReG28VYWw6ue4jBWP1xNGCfZs",
  "key25": "45FVe8Zi9mgzPomFmtXQ8Hm9taRGnF6C4bvsLCKDqbbhwLEnmJ94HyvVUA61N9gbGKQdCC7BAXSTJGqcaSNdqPUB",
  "key26": "3gZVZyoLGK3tSDFTTBaiV9B2FbQNuzQK7pqdn1KTffTytQaJUViydvF11aHABFcaWeQeHtKDAS3DPHLPXwMEwffX",
  "key27": "ZbnDxDSuWQguxR9myhbcUjHgeep2YFq55RXnWzikWGhKen7w2SBt2k9VuWvLopS9JRBPJp8HkxUCN7A4YKpJYYK",
  "key28": "4ceCwMXK2m1NMeVkgEWZtYJZtGzB5yMnocTjPQ1bFV5skvwbBLLk482Z6xMmVjh6qiUuvm5jBfTTxDfPNoVvyF3x",
  "key29": "65b4kQxFPAGomgzHYahBFzHueWzdqhC2Yq4RoHX3J9vYuzvGB1zMx28udeSYUNmNkcskxTL6hSC6entp3qg6KgTe",
  "key30": "4fVvje7oB3gcd4rFVvreCjbn1VZJ9QfbvwEHGYkdShvd1qPi454u6GHB9DC9Y7krME4EYnK2V3jwrnQSw9dQmxzK",
  "key31": "5JhzioWJMmuYHyxtefqpbqg4TwdzHnuEQRy15bG9zfMJV8HZ62trwM61Npr4BgUX7d9hs4SMoeMXpHXK1ZXyMxbF",
  "key32": "2YdF8xDxzRripSfzwjrKxnUh8WwxGePDAcvzV5BahurnhswzQjc2G9mgdMmR2bAt8Dq3eDPqMKtzbe2pAnhSVUsK",
  "key33": "5cQ9ncxbAC62yButZGZm6mTda5MLxbQNhiX7hiFbqB8hprgsR7hzN4efV4qydKECGTp8ZsN9qhSz3AZNwjvSuKNW",
  "key34": "eu8B9JBpk3m8MFRJVFekvHU1GnfoXpP8kzUfGMgQeNUpHgUiFdakqiRUWZahcfR2bGxjUBmkx3y2bu5RtnF3D6L",
  "key35": "i9Y38B37oVuZUsbAJKDq8b4CAMo5VtM6DBDKmUde2xD8QnHRzLAyBU4xuVXjTzkRJgoB2RpVtfjcZAxSevTWzc2",
  "key36": "5pJUQBxiqb7B9f9Tt2xrdexWMUSzkbncacGmdkVCdSXcCuS5JJctx5dLdCyEYhz8d1UKAXi1rZBof4qv8guXHN8e",
  "key37": "4GBym8HGLuybWbRdY32CeeZJEaA62vvQ6Uv3oUawn9fxdNADAJNEG7HBAZtYv6DGXRWTgaZhgKE1ssxukK4rDXmQ",
  "key38": "5riYSDxA9uT8Y2kW2Ev5WjZuZKZ4Vn1bHqRJHHRrE2DcPjtJrwRK358X1XmPyRQPANa1h32wYkDBgWdXLtEtRFn1",
  "key39": "5qXxmXGHDL8jU96CEsM1nvCRck6GoyxVLSoDoZ5fW7jS3zR6F3L6GetFcK7D6jU3vuo28giJL4WdB9YxRoFUb8Er",
  "key40": "3qgq9fQsXtEaQTcRBqJvh589fyVmXiVsuBiVAUtMUPCLveTDwSkAhHEcE6yxDLTEWzY9i9LTSHEKTxw86xQ3h52B",
  "key41": "4tq5w1fVABN82EG67oPi28Fn3B42GnGTLaqk6REDzqLcRB1Hmx75oL3JUUTyZeJNz4eq5jkjNw3atDwdaGS9xEaC",
  "key42": "5UpYyV2NjwUHNopSTxFtCVn8u7ziLA6Y17YcHJnTPHBMUmvH4jVtkae3Vn922nWiaLuuTrUARn8gdN6MLFvgvPSu",
  "key43": "BoHmpH7SdCFDBG8PqARbqr6NPLXRnDWXrMnX83raVYRtkFL1r6pPVjbkYzMpL2aSkNcGjM8ezJJWyE5ChcFhqAW",
  "key44": "XQrwkL3gEHsAEdqrJjaJq7o23cZr8v99wLN6sb8ovN3DVaY8LV4NER9w233V5uJfyGdoNJnwGYj36NEAjEWqcbk"
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
