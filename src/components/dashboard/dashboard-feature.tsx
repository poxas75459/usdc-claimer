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
    "2XDm9tS4sNuRzHWGpUQoN2x4Gf9h31bsQ4MTR2WXbEPekvcEzLeuR4sPjQW38pzfMCcxenV6X2hHPPCatwcMMAwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qyRX7x3BvmMaLKeXbgPA1QUFoH752hP7ktbcyMQBEYeGMTp4TTiucUiUxs4Z5QX5m3vyx8SoENZ93UFyR2WETPY",
  "key1": "2ZdGpsu3UqJm9bg8VoN9fdZrp8CthyVgqueLpebJ751apoh4eWZNPFc3tG3YwUy1XAQWbCWzi9uxGyv9qytHrPmY",
  "key2": "4amGYwPFWhaRtYFdB4y4bQmpYM1kvA43jSmFbx3bcE5pDwjaQ9wxJthNpJRioeZ7kqtraYNZFra4qRvrM5tLeeua",
  "key3": "2bLaiPydBMnjY2xb116EVV6cZhMABYacKD7EdpfrLebn4DWPhbuA8oSB6pUwV9LHbTe7rHbZqR484zDwT8jRKNzC",
  "key4": "ADJftp89QKBUcbXz3T73jV9afHR9kXRBX4VEFxjYt9REmjR6C2o5UaWVPqsLrTFBk6Pc2YTwyYkmrePGZaobfGH",
  "key5": "52VZL3E6sM4cMJzN7HVSocDH2cZ6iaceNuv2bowZxun9TTbpmPBEqKjJrsDWsT1qetg3YxqHVDReBtde5dtyNDP6",
  "key6": "2yU2Pgj2Z18JPV2YpUHS7xP8PbsVTytVV1L8S1V4Vh5EZiGWXMX4Uem3KCSEpXBFFbf8FFVTQQcKzCew8s3sXzFp",
  "key7": "3EPqx39NoZER2tM3CFm7thV6yfhBWyWWpQwdK4xuFMCyRUuLVUDu1XaTprN1PWM6hRNXZtZ8znfLYQnNHm6j3wKL",
  "key8": "9fA4gRpS834XqB3skortGXThnXkr9cCK5ouhx3yStLx9S1ovgm1ymCnvxAonkHC2oC3yxEsDgEbQbkqCwpvKgXm",
  "key9": "2Y2KjocR3baF7E2zSBdiAFXUnEQuHkKL9uWiCtWjDXbdi1STc4cYLHHGDRzpejbPrergrpTYbCGF9ZXWrVzFxG4x",
  "key10": "3RFmcE7khyVuCss3Hux6D2p4HjH42mF8sNtGbDx4jVxe2b8MA5V9XJ1o9RNENCvSuEmg8qQhd74Lo6zn6CqtqMBj",
  "key11": "2J68a5ryv694ZrmppGePdtNoWB9cRqsXu1ZZULDWrEzy9nseAqSYTsmrt3NPZFsevNj1H11EUJtUzyyCh9DdJhxY",
  "key12": "55uSBfi1gqBzfbbMMhf9R8QjT9ojCGDSJQTut38DZDzL53w3cVxviX8GuEroTT8HTSomp5RdfRgF8KHGq7sK2T47",
  "key13": "ggthL6CAduka9CMKwmj1142aPifLHhBa3QdWSqG4SMrLApNpfURoBCDqx4w82e5Pu3Fk2eNiNiLDzzRWE6r2yoB",
  "key14": "4VZEUfjXK3Y6ZY8UM5DF6u7QoucSeJ2Z1nmqQKrWR48vjVdEQi4bqnXPgj1oTKUAMHzAwqZAP3z1iGfhxx1pgv19",
  "key15": "5kDFtA5hCPqmzBXAzqN8DCnJoBBV8SMCgcRxfwN7xXUpyht2KdTYykYDKUXdg97rtSfPNB8WHik7oae2GJrxZHRb",
  "key16": "GJDvwN4zxHETYCMdPELfVXV8bQX1mR7AwpSPsEF5cBpwdyePNLs5UFr48TzpjQqFEFRJMxLvsq9WH89HexgcePM",
  "key17": "5bcWSoQvM2SVbi3QDMtwGEQPsqgbzrpvRdmDZ5a5HqhEx57QykYwoCPrKi2HBwJspHSLa17gQYW3ALpwUXKdHKxN",
  "key18": "hpxAGicUeRZEFiAyL7XFVnMHZCXdgE9v4HvisE43Q23hNZzSsnJG41foCUfL51WSDHuTyURDdABGGdR7n3p3rik",
  "key19": "4Kg1Ms1cDaTHzNjK2N9YZHo1q1XoXDJFub7nG9189eNk98JMgz2tyrXAcaPE8Sdzua9NR4hFMtqn8thnpLEiqKhW",
  "key20": "54Rojr4AysxeZmVE3MF5rduYMgrFtL36izpL6Ve71g9e1ZpqFeBYAS36V2AHHJZGW7mDuJ21rWULVFoQ9Wf9DyNG",
  "key21": "3AJz8cWtUDKmhvvRoZeYZpSB55NB5dq8TQ9gyMcYxbuPBs4VojDGsAkFWKNMUwjtfwCgkQqJSqeEwZVf5SSuV179",
  "key22": "4CDVRFWmjhXwL2mLQtLp44BmRsYDDyLtaL9vsotWn11b4vVaXHV6wxbhLuemX64EdCetCSVb3hbxZQYbeDNPKAJ1",
  "key23": "3bXREUvgcu9rd1Vk6SApWxL761LmqEz1J4dQvS5EvtymKMiGK41hV7E933Wazof6iqMgrELjj13NqnERPsrscrMm",
  "key24": "4mspG6hvEjFgjsRDzKTXhaz2ANU8FM1HT6YCXrfCx4Zyj7Xr4kpJUDhA3wuD5hsfKEwa4fKsiDdgYyvwtTRviw4R",
  "key25": "441Q9312oGYSmvcjVjrzcrdz53Qgg9KCEgdkMYuV1RRFoWnqJHzUzg5Hv7e3HVjjzsBQcGwhMvPej1mAMdo4F5ET",
  "key26": "63GKPFRQZQc8fzxqpzhxFYq9osiCLHkT6FcG6VaMWXqhmcu2vPwGFX7xPPga82yuMhmrdvMFzFNSTpYoLvZPVrZn",
  "key27": "2VZ3b2QZCA17EsMb1EpRrReSuZHuQCBpBrNQmV5nj1eWLfx18vjLBAzDPJUvzmbUEPjx5z5NNRWmpPW4uRTPVy1B",
  "key28": "7SaUaF4esj5vZZDs4JBUcdnHPc9yJWezGAj6FN5TgXLESggMfs2xMke7Skgyyk7hjttDXxoHN6upwwR8oGh1CRt",
  "key29": "rKefLNusB9mcuhyZtZNA3VeLMUGwfQGg7hRkeqbjbEoixzsbMyEegyvA5VGSHY9LGc2Twe5qMHbLejy7DcqtxE2",
  "key30": "3rMdrvEbKf5wGAQtijuQBnxD9rrDTNafBeWfL51cjbqvqr7FJoSnWxHuQNDyHfd6f7q6kcij5532mcbS64iyw48s",
  "key31": "3b4JLL7NsGh89PyXY64nawQhtPrTVAZGytPWo7BEjNTL6bw94cQSV96fQ72pduVgobhbXkZhRvBQ3jRvit2K8TFV",
  "key32": "4iJSFtVLYKGsqiQv9UhREXYRAvHxnnSX7TXAVMuG6H2hKGZJeZ5GaE4GHiZNjLRqyowgtD6iz9RqbSH2xoJPkKSZ",
  "key33": "4izPVkmFyAuLbhqAWqsG74Uab8R3NXYY21QveN6MVXjLrdqWxLo8TEbR7owLwe1HvrBk89VyvywB1Af67WAZ2tto",
  "key34": "3SkERUbqWpyJcmKZZWcujpQhXWqaGNUvTod4pigFYjeUZ9vuyGXbnDEXR4woXtkgDKJu7BkVah4AWMev53Fi7aCx",
  "key35": "22mMn5FCRUBT2iTMRkdS18YMo6DKdTNrxdmpgugnVLgNweNXPp4kUBmdsnSJirRvhNhnnAuCgvNEUy26DiMgQrXN",
  "key36": "53GsBvyfe9uj4p3vG4Pk7WWH32Q7XKViksiLQw3FFEYYHjabtD8YJF4yb55ntvNAoBXZUtSjM2JBfSu8XgPzBCQ3",
  "key37": "qyVYrPbFPmLaQLvy2zTwPoNtYwP4aNHAPxzbCXNQKYq84NngcJjsYhkeguTTLNgh656V9cZ872TxdULnJP6UAjR",
  "key38": "4E2GyUDy2Hj1Cpdi3L1Y1r9kHohj6bKWy68ZBxpggniDsBtzphyLb28rvToNCAeqscdGCZi7ZyCnM3GSrpFfXBrC",
  "key39": "4rLMWWA8k9TnohgQi8pGeiJTfoSTwXDQ7zuNpNr5BeXhWdyNLiaYHaT1aNFryeAtk5LBS4ApKc9LCnyWdkchgGso",
  "key40": "ConWSmCPk1XFTGkJf2fKnjirVoEt1mB58LznfyA39yEj1icZKDHif7YHUzp6NfqZ3xfU3BJTEC7YLDeZ7AUf2GD",
  "key41": "62vJxNReEzRaXgu8rvzUpVEtrLq5rhdtFiXgtTEJuoFNPA3ZdEUvPuU8SAzXdmW16fXqisikdBxwvnddqzcMM8um"
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
